<template>
    <div
        v-if="isVisibleDisclaimer"
        class="fixed bottom-0 left-0 right-0 z-20 w-full rounded-tl-xl rounded-tr-lg bg-white p-4 shadow-xl dark:bg-dark-foreground sm:left-16 sm:right-auto sm:w-56 sm:p-3"
    >
        <span @click="closeDisclaimer" class="absolute -right-1 -top-1 cursor-pointer p-3">
            <x-icon size="10" />
        </span>
<!-- GoLink CHANGE HERE -->
        <i18n v-if="$i18n.locale === 'pt'"  path="cookie_disclaimer.description" tag="p" class="text-xs">
            <router-link :to="{ name: 'DynamicPage', params: { slug: 'cookies' } }" class="text-theme text-xs">
                {{ $t('cookie_disclaimer.button') }}
            </router-link>
        </i18n>
        <i18n v-if="$i18n.locale === 'fr'"  path="cookie_disclaimer.description" tag="p" class="text-xs">
            <router-link :to="{ name: 'DynamicPage', params: { slug: 'politique-de-cookies' } }" class="text-theme text-xs">
                {{ $t('cookie_disclaimer.button') }}
            </router-link>
        </i18n>
        <i18n v-if="$i18n.locale === 'en'"  path="cookie_disclaimer.description" tag="p" class="text-xs">
            <router-link :to="{ name: 'DynamicPage', params: { slug: 'cookie-policy' } }" class="text-theme text-xs">
                {{ $t('cookie_disclaimer.button') }}
            </router-link>
        </i18n>
        <i18n v-if="$i18n.locale === 'es'"  path="cookie_disclaimer.description" tag="p" class="text-xs">
            <router-link :to="{ name: 'DynamicPage', params: { slug: 'politica-cookies' } }" class="text-theme text-xs">
                {{ $t('cookie_disclaimer.button') }}
            </router-link>
        </i18n>
<!-- GoLink END -->
    </div>
</template>


<script>
import { XIcon } from 'vue-feather-icons'
import { mapGetters } from 'vuex'

export default {
    name: 'CookieDisclaimer',
    components: {
        XIcon,
    },
    computed: {
        ...mapGetters(['config']),
    },
    data() {
        return {
            isVisibleDisclaimer: false,
        }
    },
    methods: {
        closeDisclaimer() {
            localStorage.setItem('isHiddenDisclaimer', 'true')

            this.isVisibleDisclaimer = false
        },
    },
    created() {
        this.isVisibleDisclaimer =
            this.config.installation === 'installation-done' && !localStorage.getItem('isHiddenDisclaimer')
    },
}
</script>
