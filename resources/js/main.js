require('./bootstrap')
import Vue from 'vue'
import i18n from './i18n'
import VueRouter from 'vue-router'
import router from './router'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import store from './store'
import { events } from './bus'

import SubscriptionHelpers from './helpers/SubscriptionHelpers'
import ValidatorHelpers from './helpers/ValidatorHelpers'
import functionHelpers from './helpers/functionHelpers'
import AlertHelpers from './helpers/AlertHelpers'
import itemHelpers from './helpers/itemHelpers'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.use(VueRouter)
Vue.use(SubscriptionHelpers)
Vue.use(ValidatorHelpers)
Vue.use(functionHelpers)
Vue.use(AlertHelpers)
Vue.use(itemHelpers)

// Google Analytics implementation
if (config.googleAnalytics) {
  Vue.use(VueAnalytics, {
      id: config.googleAnalytics,
      router
  })
}

// ReCaptcha configuration
if (config.allowedRecaptcha) {
    Vue.use(VueReCaptcha, {
        siteKey: config.recaptcha_client_id,
        loaderOptions: {
            autoHideBadge: true,
        },
    })
}

Vue.directive('click-outside', {
    bind: function(el, binding, vnode) {
      el.clickOutsideEvent = function(event) {
        // here I check that click was outside the el and his childrens
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener("click", el.clickOutsideEvent);
      document.body.addEventListener("touchstart", el.clickOutsideEvent);
    },
    unbind: function(el) {
      document.body.removeEventListener("click", el.clickOutsideEvent);
      document.body.removeEventListener("touchstart", el.clickOutsideEvent);
    },
    stopProp(event) {
      event.stopPropagation();
    }
  }
)

Vue.config.productionTip = false

// Handle position of Drag & Drop Ghost
document.addEventListener(
    'drag',
    (event) => {
        let multiSelect = document.getElementById('drag-ui')

        multiSelect.style.top = event.clientY + 20 + 'px'
        multiSelect.style.left = event.clientX + 'px'
    },
    false
)

// Handle for drop
document.addEventListener(
    'dragend',
    () => {
        events.$emit('drop')
    },
    false
)

let vueFileManager = new Vue({
    i18n,
    store,
    router,
    data: {
        config,
    },
    render: (h) => h(App),
}).$mount('#app')
