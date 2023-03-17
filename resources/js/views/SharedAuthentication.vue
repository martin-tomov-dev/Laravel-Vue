<template>

    <div class="landing-page">

        Navigation
        <Navigation class="page-wrapper medium" />

        <br /><br />

        <AuthContentWrapper>
            <AuthContent name="password" :visible="true">
                <Headline :title="$t('page_shared.title')" :description="$t('page_shared.subtitle')" />
                <ValidationObserver @submit.prevent="authenticateProtected" ref="authenticateProtected"
                    v-slot="{ invalid }" tag="form"
                    class="mb-12 items-start space-y-4 md:flex md:space-x-4 md:space-y-0">
                    <ValidationProvider tag="div" mode="passive" class="w-full text-left" name="Password"
                        rules="required" v-slot="{ errors }">
                        <input v-model="password" :placeholder="$t('page_shared.placeholder_pass')" type="password"
                            class="dark:placeholder:text-gray-600 focus-border-theme w-full appearance-none rounded-lg border border-transparent bg-light-background px-5 py-3.5 font-bold dark:bg-2x-dark-foreground"
                            :class="{ '!border-rose-600': errors[0] }" />
                        <span class="text-left text-xs text-red-600" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <AuthButton class="w-full justify-center md:w-min" icon="chevron-right" :text="$t('submit')"
                        :loading="isLoading" :disabled="isLoading" />
                </ValidationObserver>

                <br>
                <br>

                <div class="fetch-profile">
                    <ButtonBase class="w-full" @click.native="fetchUsers" button-style="theme" :loading="isLoading"
                        :disabled="isLoading">
                        {{ $t('Show Password Note') }}
                    </ButtonBase>
                    <br>
                    <h4 v-if="isLoading">Loading...</h4>
                </div>
                <div>
                    <table>
                        <tr>
                            <th width="50%">ITEM ID</th>
                            <th width="50%">SHOW PASS</th>
                            <th width="50%">ALLOW SHOW PASS</th>
                        </tr>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.item_id }} </td>
                            <td>{{ user.showpassword_in }} </td>
                            <td>{{ user.allow_showpassword_in }} </td>
                        </tr>
                    </table>
                </div>

                <br>
                <br>

            </AuthContent>
        </AuthContentWrapper>

        <br><br>

        <!--Footer-->
        <PageFooter />

    </div>
</template>
    
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full'
import AuthContentWrapper from '../components/Layout/AuthPages/AuthContentWrapper'
import AuthContent from '../components/Layout/AuthPages/AuthContent'
import PageFooter from '../components/IndexPage/IndexPageFooter'
import Navigation from '../components/IndexPage/IndexNavigation'
import AuthButton from '../components/UI/Buttons/AuthButton'
import Headline from '../components/UI/Labels/LogoHeadline'
import ButtonBase from '../components/UI/Buttons/ButtonBase'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    name: 'SharedAuthentication',
    components: {
        ValidationObserver,
        ValidationProvider,
        AuthContentWrapper,
        AuthContent,
        AuthButton,
        Navigation,
        PageFooter,
        ButtonBase,
        Headline,
    },
    computed: {
        ...mapGetters(['config', 'user']),
    },
    data() {
        return {
            password: '',
            isLoading: false,
            users: [],
        }
    },
    methods: {
        fetchUsers() {
            this.isLoading = true;
            this.users = [];
            axios.get('/api/showPW')
                .then((response) => {
                    //console.log(response.data)
                    this.users = response.data
                    this.isLoading = false
                    //do a console.log(res.data) to ensure you are getting the users collection
                })
                .catch((err) => {
                    console.log(err)
                });
        },

        async authenticateProtected() {
            // Validate fields
            const isValid = await this.$refs.authenticateProtected.validate()

            if (!isValid) return

            // Start loading
            this.isLoading = true

            // Send request to get verify account
            axios
                .post('/api/sharing/authenticate/' + this.$route.params.token, {
                    password: this.password,
                })
                .then((response) => {
                    console.log(response);
                    // Show file browser
                    if (response.data.data.attributes.type === 'folder') {
                        this.$router.replace({
                            name: 'Public',
                            params: {
                                token: this.$route.params.token,
                                id: response.data.data.attributes.item_id,
                            },
                        })
                    }

                    // Show single file
                    if (response.data.data.attributes.type !== 'folder') {
                        this.$router.push({ name: 'SharedSingleFile' })
                    }
                })
                .catch((error) => {
                    if (error.response.status === 401)
                        this.$refs.authenticateProtected.setErrors({
                            Password: [error.response.data],
                        })
                })
                .finally(() => {
                    this.isLoading = false
                })
        },

    },

}
</script>
