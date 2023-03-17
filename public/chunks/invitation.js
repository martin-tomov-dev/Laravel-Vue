(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/invitation"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VueFolderTeamIcon'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Others_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Others/LanguageSwitcher */ "./resources/js/components/Others/LanguageSwitcher.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexNavigation',
  components: {
    LanguageSwitcher: _Others_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_0__["default"],
    MoonIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.MoonIcon,
    SunIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.SunIcon
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['config', 'index', 'isDarkMode'])), {}, {
    logoSrc: function logoSrc() {
      return this.isDarkMode && this.config.app_logo_horizontal ? this.config.app_logo_horizontal_dark : this.config.app_logo_horizontal;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Others_LanguageSwitcherFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Others/LanguageSwitcherFooter */ "./resources/js/components/Others/LanguageSwitcherFooter.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPageFooter',
  components: {
    LanguageSwitcher: _Others_LanguageSwitcherFooter__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['config', 'isDarkMode'])), {}, {
    logoSrc: function logoSrc() {
      return this.isDarkMode && this.config.app_logo_horizontal ? this.config.app_logo_horizontal_dark : this.config.app_logo_horizontal;
    }
  }),
  methods: {
    // GoLink CHANGE HERE
    getLocale: function getLocale() {
      return this.$i18n.locale ? this.$i18n.locale : config.locale;
    } // GoLink END

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthContent',
  props: ['visible', 'name'],
  data: function data() {
    return {
      isVisible: false
    };
  },
  created: function created() {
    this.isVisible = this.visible;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthContentWrapper'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_country_flag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-country-flag */ "./node_modules/vue-country-flag/dist/country-flag.esm.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LanguageSwitcher',
  components: {
    CountryFlag: vue_country_flag__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon
  },
  data: function data() {
    return {
      language: this.$store.getters.currentLanguage,
      isOpen: false
    };
  },
  computed: {
    selected: function selected() {
      var _this = this;

      return this.$store.getters.languages.find(function (language) {
        return language.code === _this.language;
      });
    }
  },
  beforeMount: function beforeMount() {
    if (!this.selected) {
      this.language = this.$store.getters.languages[0].code;
    }
  },
  watch: {
    locale: function locale() {
      this.$router.replace({
        params: {
          lang: this.language
        }
      })["catch"](function () {});
    }
  },
  methods: {
    changeLanguage: function changeLanguage(language) {
      if ((this.$router.path = '/page/termos-e-servicos') || (this.$router.path = '/page/termes-et-services') || (this.$router.path = '/page/terms-of-services') || (this.$router.path = '/page/terminos-de-servicios') || (this.$router.path = '/page/privacy-policy') || (this.$router.path = '/page/privacidade') || (this.$router.path = '/page/politique-de-confidentialite') || (this.$router.path = '/page/politica-privacidade') || (this.$router.path = '/page/cookies') || (this.$router.path = '/page/politique-de-cookies') || (this.$router.path = '/page/cookie-policy') || (this.$router.path = '/page/politica-cookies') || (this.$router.path = '/page/sobre-nos') || (this.$router.path = '/page/propos-de-nous') || (this.$router.path = '/page/about-us') || (this.$router.path = '/page/sobre-nosotros')) {
        //setTimeout(() => location.reload(), 1)
        this.$router.push('/'); //return
      } //else {
      //setTimeout(() => location.reload(), 10)
      //}
      // Emit selected


      this.$emit('input', language.value); // Get selected

      this.language = language.code; // Close menu

      this.isOpen = false;
      this.$store.dispatch('setLanguage', language.code);
      setTimeout(function () {
        return location.reload();
      }, 5);
    },
    toggleSwitch: function toggleSwitch() {
      this.isOpen = !this.isOpen;
    },
    hideSwitch: function hideSwitch() {
      this.isOpen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_country_flag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-country-flag */ "./node_modules/vue-country-flag/dist/country-flag.esm.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LanguageSwitcher',
  components: {
    CountryFlag: vue_country_flag__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon
  },
  data: function data() {
    return {
      language: this.$store.getters.currentLanguage,
      isOpen: false
    };
  },
  computed: {
    selected: function selected() {
      var _this = this;

      return this.$store.getters.languages.find(function (language) {
        return language.code === _this.language;
      });
    }
  },
  beforeMount: function beforeMount() {
    if (!this.selected) {
      this.language = this.$store.getters.languages[0].code;
    }
  },
  watch: {
    locale: function locale() {
      this.$router.replace({
        params: {
          lang: this.language
        }
      })["catch"](function () {});
    }
  },
  methods: {
    changeLanguage: function changeLanguage(language) {
      if ((this.$router.path = '/page/termos-e-servicos') || (this.$router.path = '/page/termes-et-services') || (this.$router.path = '/page/terms-of-services') || (this.$router.path = '/page/terminos-de-servicios') || (this.$router.path = '/page/privacy-policy') || (this.$router.path = '/page/privacidade') || (this.$router.path = '/page/politique-de-confidentialite') || (this.$router.path = '/page/politica-privacidade') || (this.$router.path = '/page/cookies') || (this.$router.path = '/page/politique-de-cookies') || (this.$router.path = '/page/cookie-policy') || (this.$router.path = '/page/politica-cookies') || (this.$router.path = '/page/sobre-nos') || (this.$router.path = '/page/propos-de-nous') || (this.$router.path = '/page/about-us') || (this.$router.path = '/page/sobre-nosotros')) {
        //setTimeout(() => location.reload(), 1)
        this.$router.push('/'); //return
      } //else {
      //setTimeout(() => location.reload(), 10)
      //}
      // Emit selected


      this.$emit('input', language.value); // Get selected

      this.language = language.code; // Close menu

      this.isOpen = false;
      this.$store.dispatch('setLanguage', language.code);
      setTimeout(function () {
        return location.reload();
      }, 5);
    },
    toggleSwitch: function toggleSwitch() {
      this.isOpen = !this.isOpen;
    },
    hideSwitch: function hideSwitch() {
      this.isOpen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthContent',
  props: ['loading', 'icon', 'text'],
  components: {
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ChevronRightIcon,
    RefreshCwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.RefreshCwIcon
  },
  data: function data() {
    return {
      isVisible: false
    };
  },
  created: function created() {
    this.isVisible = this.visible;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Headline',
  props: ['description', 'title'],
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['config', 'isDarkMode'])), {}, {
    logoSrc: function logoSrc() {
      return this.isDarkMode && this.config.app_logo ? this.config.app_logo_dark : this.config.app_logo;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Teams/Invitation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Teams/Invitation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Icons_VueFolderTeamIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Icons/VueFolderTeamIcon */ "./resources/js/components/Icons/VueFolderTeamIcon.vue");
/* harmony import */ var _components_Layout_AuthPages_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout/AuthPages/AuthContentWrapper */ "./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue");
/* harmony import */ var _components_Layout_AuthPages_AuthContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout/AuthPages/AuthContent */ "./resources/js/components/Layout/AuthPages/AuthContent.vue");
/* harmony import */ var _components_IndexPage_IndexPageFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IndexPage/IndexPageFooter */ "./resources/js/components/IndexPage/IndexPageFooter.vue");
/* harmony import */ var _components_IndexPage_IndexNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/IndexPage/IndexNavigation */ "./resources/js/components/IndexPage/IndexNavigation.vue");
/* harmony import */ var _components_UI_Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UI/Others/MemberAvatar */ "./resources/js/components/UI/Others/MemberAvatar.vue");
/* harmony import */ var _components_UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Buttons/AuthButton */ "./resources/js/components/UI/Buttons/AuthButton.vue");
/* harmony import */ var _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");
/* harmony import */ var _components_UI_Labels_LogoHeadline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Labels/LogoHeadline */ "./resources/js/components/UI/Labels/LogoHeadline.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Invitation',
  components: {
    AuthContentWrapper: _components_Layout_AuthPages_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_10__.ValidationProvider,
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_10__.ValidationObserver,
    VueFolderTeamIcon: _components_Icons_VueFolderTeamIcon__WEBPACK_IMPORTED_MODULE_0__["default"],
    MemberAvatar: _components_UI_Others_MemberAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],
    AuthContent: _components_Layout_AuthPages_AuthContent__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageFooter: _components_IndexPage_IndexPageFooter__WEBPACK_IMPORTED_MODULE_3__["default"],
    Navigation: _components_IndexPage_IndexNavigation__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthButton: _components_UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_6__["default"],
    Headline: _components_UI_Labels_LogoHeadline__WEBPACK_IMPORTED_MODULE_8__["default"],
    Spinner: _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_11__.mapGetters)(['config'])), {}, {
    acceptButton: function acceptButton() {
      return this.invitation && this.invitation.data.attributes.isExistedUser ? this.$t('accept_invitation') : this.$t('accept_and_register');
    }
  }),
  data: function data() {
    return {
      isLoading: false,
      invitation: undefined,
      isUsed: false
    };
  },
  methods: {
    acceptInvitation: function acceptInvitation() {
      var _this = this;

      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_9___default().put("/api/teams/invitations/".concat(this.$router.currentRoute.params.id)).then(function () {
        if (_this.invitation.data.attributes.isExistedUser) {
          _this.goToAuthPage('accepted');
        } else {
          _this.$router.push({
            name: 'SignUp'
          });
        }
      })["catch"](function () {
        _this.$isSomethingWrong();
      })["finally"](function () {
        return _this.isLoading = false;
      });
    },
    declineInvitation: function declineInvitation() {
      var _this2 = this;

      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_9___default()["delete"]("/api/teams/invitations/".concat(this.$router.currentRoute.params.id)).then(function () {
        _this2.goToAuthPage('denied');
      })["catch"](function () {
        _this2.$isSomethingWrong();
      })["finally"](function () {
        return _this2.isLoading = false;
      });
    },
    goToAuthPage: function goToAuthPage(slug) {
      this.$refs.auth.$children.forEach(function (page) {
        // Hide current step
        page.isVisible = page.$props.name === slug;
      });
    }
  },
  created: function created() {
    var _this3 = this;

    axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/teams/invitations/".concat(this.$router.currentRoute.params.id)).then(function (response) {
      _this3.invitation = response.data;

      _this3.goToAuthPage('invitation');
    })["catch"](function (error) {
      if (error.response.status === 410) {
        _this3.goToAuthPage('expired');
      } else {
        _this3.$isSomethingWrong();
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=template&id=1325233a&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=template&id=1325233a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("svg", {
    attrs: {
      viewBox: "0 0 53 39",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c("g", {
    attrs: {
      id: "V2",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }
  }, [_c("g", {
    attrs: {
      id: "team-folder"
    }
  }, [_c("path", {
    staticClass: "svg-color-theme",
    attrs: {
      d: "M48.03125,6.5 L29.790833,6.5 C28.7431613,6.5 27.7373076,6.08896217 26.9894703,5.35523504 L22.6980297,1.14476496 C21.9501924,0.41103783 20.9443387,-6.36543387e-16 19.896667,0 L4.96875,0 L4.96875,0 C2.22455078,0 0,2.18257812 0,4.875 L0,34.125 C0,36.8174219 2.22455078,39 4.96875,39 L48.03125,39 C50.7754492,39 53,36.8174219 53,34.125 L53,11.375 C53,8.68257813 50.7754492,6.5 48.03125,6.5 Z",
      stroke: "none",
      "stroke-width": "0"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M48.03125,6.5 L29.790833,6.5 C28.7431613,6.5 27.7373076,6.08896217 26.9894703,5.35523504 L22.6980297,1.14476496 C21.9501924,0.41103783 20.9443387,-6.36543387e-16 19.896667,0 L4.96875,0 L4.96875,0 C2.22455078,0 0,2.18257812 0,4.875 L0,34.125 C0,36.8174219 2.22455078,39 4.96875,39 L48.03125,39 C50.7754492,39 53,36.8174219 53,34.125 L53,11.375 C53,8.68257813 50.7754492,6.5 48.03125,6.5 Z",
      fill: "black",
      "fill-opacity": "0.2",
      stroke: "none",
      "stroke-width": "0"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "svg-color-theme",
    attrs: {
      d: "M48.03125,12.75 C49.0609313,12.75 49.9941504,13.1577174 50.6692739,13.8201027 C51.3356976,14.4739525 51.75,15.3766531 51.75,16.375 L51.75,16.375 L51.75,34.125 C51.75,35.1233469 51.3356976,36.0260475 50.6692739,36.6798973 C49.9941504,37.3422826 49.0609313,37.75 48.03125,37.75 L48.03125,37.75 L4.96875,37.75 C3.93906868,37.75 3.00584961,37.3422826 2.33072613,36.6798973 C1.66430239,36.0260475 1.25,35.1233469 1.25,34.125 L1.25,34.125 L1.25,16.375 C1.25,15.3766531 1.66430239,14.4739525 2.33072613,13.8201027 C3.00584961,13.1577174 3.93906868,12.75 4.96875,12.75 L4.96875,12.75 Z",
      "stroke-width": "2",
      fill: "green"
    }
  }), _vm._v(" "), _c("g", {
    staticClass: "svg-stroke-theme-darken",
    attrs: {
      id: "Icon",
      transform: "translate(8.000000, 20.000000)",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.3",
      stroke: "black",
      "stroke-opacity": "0.25"
    }
  }, [_c("path", {
    attrs: {
      d: "M9.59999943,10.7999994 L9.59999943,9.59999943 C9.59999943,8.27451611 8.52548289,7.19999957 7.19999957,7.19999957 L2.39999986,7.19999957 C1.07451654,7.19999957 0,8.27451611 0,9.59999943 L0,10.7999994"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "4.79999971",
      cy: "2.39999986",
      r: "2.39999986"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M13.1999992,10.7999994 L13.1999992,9.59999943 C13.1991834,8.50627014 12.4589985,7.55143166 11.3999993,7.27799957"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M8.99999946,0.0779999954 C10.0619483,0.349901852 10.8047053,1.30679461 10.8047053,2.40299986 C10.8047053,3.4992051 10.0619483,4.45609786 8.99999946,4.72799972"
    }
  })])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("nav", {
    staticClass: "main-navigation"
  }, [_c("router-link", {
    staticClass: "logo",
    attrs: {
      to: {
        name: "Homepage"
      },
      tag: "div"
    }
  }, [_vm.config.app_logo_horizontal ? _c("img", {
    attrs: {
      height: "auto",
      width: "150px",
      src: _vm.$getImage(_vm.logoSrc),
      alt: _vm.config.app_name
    }
  }) : _vm._e(), _vm._v(" "), !_vm.config.app_logo_horizontal ? _c("b", {
    staticClass: "logo-text"
  }, [_vm._v(_vm._s(_vm.config.app_name))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "navigation"
  }, [_c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("a", {
    staticClass: "hover-text-theme",
    attrs: {
      href: "https://golink.co"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("home_page")) + "\n                    ")])]), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "hover-text-theme",
    attrs: {
      to: {
        name: "ContactUs"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("contact_us")) + "\n                    ")])], 1)]), _vm._v(" "), !_vm.config.isAuthenticated ? _c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("router-link", {
    staticClass: "hover-text-theme",
    attrs: {
      to: {
        name: "SignIn"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("log_in")) + "\n                    ")])], 1), _vm._v(" "), _vm.config.userRegistration ? _c("li", [_c("router-link", {
    staticClass: "cta-button text-theme bg-theme-100",
    attrs: {
      to: {
        name: "SignUp"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("page_index.menu.sign_in")) + "\n                    ")])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.config.isAuthenticated ? _c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("router-link", {
    staticClass: "cta-button text-theme bg-theme-100",
    attrs: {
      to: {
        name: "Files"
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("go_to_files")) + "\n                    ")])], 1)]) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("language-switcher")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "navigation-links-light",
    attrs: {
      title: _vm.$t("dark_mode_toggle")
    },
    on: {
      click: function click($event) {
        return _vm.$store.dispatch("toggleThemeMode");
      }
    }
  }, [_c("div", {
    staticClass: "button-icon inline-block cursor-pointer rounded-xl"
  }, [_vm.isDarkMode ? _c("sun-icon", {
    attrs: {
      size: "20"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.isDarkMode ? _c("moon-icon", {
    attrs: {
      size: "20"
    }
  }) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "navigation-mobile"
  }, [!_vm.config.isAuthenticated ? _c("router-link", {
    staticClass: "cta-button log-in text-theme bg-theme-100",
    attrs: {
      to: {
        name: "SignIn"
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("log_in")) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.config.isAuthenticated ? _c("router-link", {
    staticClass: "cta-button text-theme bg-theme-100",
    attrs: {
      to: {
        name: "Files"
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("go_to_files")) + "\n            ")]) : _vm._e()], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("footer", {
    staticClass: "page-wrapper medium"
  }, [_c("router-link", {
    staticClass: "logo",
    attrs: {
      to: {
        name: "Homepage"
      },
      tag: "div"
    }
  }, [_vm.config.app_logo_horizontal ? _c("img", {
    staticClass: "mx-auto",
    attrs: {
      src: _vm.$getImage(_vm.logoSrc),
      alt: _vm.config.app_name,
      height: "auto",
      width: "150px"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.config.app_logo_horizontal ? _c("b", {
    staticClass: "logo-text"
  }, [_vm._v(_vm._s(_vm.config.app_name))]) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "navigation-links"
  }, [_c("li", [_c("router-link", {
    staticClass: "hover-text-theme",
    attrs: {
      to: {
        name: "ContactUs"
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("contact_us")) + "\n                ")])], 1), _vm._v(" "), _vm._l(_vm.config.legal.filter(function (legal) {
    return legal.lang === _vm.getLocale();
  }), function (legal, index) {
    return legal.visibility ? _c("li", {
      key: index
    }, [_c("router-link", {
      staticClass: "hover-text-theme",
      attrs: {
        to: {
          name: "DynamicPage",
          params: {
            slug: legal.slug
          }
        }
      }
    }, [_vm._v("\n                    " + _vm._s(legal.title) + "\n                ")])], 1) : _vm._e();
  }), _vm._v(" "), _c("div", {
    staticClass: "flag-mobile"
  }, [_c("li", [_c("language-switcher")], 1)])], 2), _vm._v(" "), _c("p", {
    staticClass: "copyright",
    domProps: {
      innerHTML: _vm._s(_vm.config.app_footer)
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=template&id=cdb819b8&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=template&id=cdb819b8& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.isVisible ? _c("div", {
    staticClass: "w-full max-w-xl text-center m-auto py-6"
  }, [_vm._t("default")], 2) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=template&id=fa02b102&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=template&id=fa02b102& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "flex px-2.5 md:px-6"
  }, [_vm._t("default")], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.hideSwitch,
      expression: "hideSwitch"
    }],
    staticClass: "lang-switcher"
  }, [_c("a", {
    "class": {
      "is-active": _vm.isOpen
    },
    on: {
      click: _vm.toggleSwitch
    }
  }, [_c("country-flag", {
    attrs: {
      country: typeof _vm.selected.flag === "undefined" ? _vm.selected.code : _vm.selected.flag,
      size: "normal"
    }
  })], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide-in"
    }
  }, [_vm.isOpen ? _c("div", {
    staticClass: "absolute right-0 w-48 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl",
    staticStyle: {
      top: "50px",
      "margin-left": "",
      "z-index": "9"
    }
  }, _vm._l(_vm.$store.getters.languages, function (option, i) {
    return _c("li", {
      key: i,
      staticClass: "block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-200 hover:text-white",
      on: {
        click: function click($event) {
          return _vm.changeLanguage(option);
        }
      }
    }, [_c("span", {
      staticClass: "option-value text-gray-500 dark:text-gray-500"
    }, [_vm._v("\n                        " + _vm._s(option.name) + "\n                        "), _c("country-flag", {
      attrs: {
        country: typeof option.flag === "undefined" ? option.code : option.flag,
        size: "small"
      }
    })], 1)]);
  }), 0) : _vm._e()])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.hideSwitch,
      expression: "hideSwitch"
    }],
    staticClass: "lang-switcher"
  }, [_c("a", {
    "class": {
      "is-active": _vm.isOpen
    },
    on: {
      click: _vm.toggleSwitch
    }
  }, [_c("country-flag", {
    attrs: {
      country: typeof _vm.selected.flag === "undefined" ? _vm.selected.code : _vm.selected.flag,
      size: "normal"
    }
  })], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide-in"
    }
  }, [_vm.isOpen ? _c("div", {
    staticClass: "absolute right-0 w-48 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl",
    staticStyle: {
      "margin-top": "-12.8rem",
      "margin-right": "-5.2rem",
      "z-index": "9"
    }
  }, _vm._l(_vm.$store.getters.languages, function (option, i) {
    return _c("li", {
      key: i,
      staticClass: "block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-200 hover:text-white",
      on: {
        click: function click($event) {
          return _vm.changeLanguage(option);
        }
      }
    }, [_c("span", {
      staticClass: "option-value text-gray-500 dark:text-gray-500"
    }, [_vm._v("\n                        " + _vm._s(option.name) + "\n                        "), _c("country-flag", {
      attrs: {
        country: typeof option.flag === "undefined" ? option.code : option.flag,
        size: "small"
      }
    })], 1)]);
  }), 0) : _vm._e()])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "group mx-auto inline-block flex items-center whitespace-nowrap rounded-lg border-2 border-black px-7 py-2.5 dark:border-gray-300"
  }, [_c("span", {
    staticClass: "pr-1 text-lg font-extrabold"
  }, [_vm._v("\n        " + _vm._s(_vm.text) + "\n    ")]), _vm._v(" "), _vm.loading ? _c("refresh-cw-icon", {
    staticClass: "vue-feather text-theme sync-alt -mr-1",
    attrs: {
      size: "20"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.icon ? _c("chevron-right-icon", {
    staticClass: "vue-feather text-theme -mr-1",
    attrs: {
      size: "20"
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=template&id=02d93282&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=template&id=02d93282& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mb-14"
  }, [_vm._t("default"), _vm._v(" "), !_vm.$slots["default"] ? _c("div", [_vm.config.app_logo ? _c("img", {
    staticClass: "mx-auto mb-6 h-16 md:h-20 mb-10",
    attrs: {
      src: _vm.$getImage(_vm.logoSrc),
      alt: _vm.config.app_name
    }
  }) : _vm._e(), _vm._v(" "), !_vm.config.app_logo ? _c("b", {
    staticClass: "mb-10 block text-xl font-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.config.app_name) + "\n        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("h1", {
    staticClass: "mb-0.5 text-3xl font-extrabold md:text-4xl"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n    ")]), _vm._v(" "), _c("h2", {
    staticClass: "text-xl font-normal md:text-2xl"
  }, [_vm._v("\n        " + _vm._s(_vm.description) + "\n    ")])], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Teams/Invitation.vue?vue&type=template&id=d8691c5e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Teams/Invitation.vue?vue&type=template&id=d8691c5e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "landing-page"
  }, [_c("Navigation", {
    staticClass: "page-wrapper medium"
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("AuthContentWrapper", {
    ref: "auth"
  }, [_c("AuthContent", {
    attrs: {
      name: "invitation",
      visible: false
    }
  }, [_vm.invitation ? _c("Headline", {
    attrs: {
      title: _vm.$t("invite_to_join_team_folder"),
      description: _vm.$t("user_invite_you_into_team_folder", {
        name: _vm.invitation.data.relationships.inviter.data.attributes.name
      })
    }
  }, [_c("div", {
    staticClass: "relative mx-auto mb-10 w-24 text-center"
  }, [_c("VueFolderTeamIcon", {
    staticClass: "inline-block w-28"
  }), _vm._v(" "), _c("MemberAvatar", {
    staticClass: "absolute -bottom-2.5 -right-6",
    attrs: {
      member: _vm.invitation.data.relationships.inviter,
      "is-border": true,
      size: 38
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.invitation && !_vm.invitation.data.attributes.isExistedUser ? _c("p", {
    staticClass: "mx-auto mb-4 max-w-md text-sm text-gray-500",
    domProps: {
      innerHTML: _vm._s(_vm.$t("register_with_email_and_get_folder", {
        email: _vm.invitation.data.attributes.email
      }))
    }
  }) : _vm._e(), _vm._v(" "), _c("AuthButton", {
    staticClass: "mb-12 w-full justify-center md:w-min",
    attrs: {
      icon: "chevron-right",
      text: _vm.acceptButton,
      loading: _vm.isLoading,
      disabled: _vm.isLoading
    },
    nativeOn: {
      click: function click($event) {
        return _vm.acceptInvitation.apply(null, arguments);
      }
    }
  }), _vm._v(" "), _c("i18n", {
    staticClass: "block",
    attrs: {
      path: "or_decline_your_invitation",
      tag: "div"
    }
  }, [_c("b", {
    staticClass: "text-theme cursor-pointer font-bold",
    on: {
      click: _vm.declineInvitation
    }
  }, [_vm._v("\r\n                    " + _vm._s(_vm.$t("decline")) + "\r\n                ")])])], 1), _vm._v(" "), _vm.invitation ? _c("AuthContent", {
    attrs: {
      name: "accepted",
      visible: false
    }
  }, [_c("Headline", {
    attrs: {
      title: _vm.$t("you_are_successfully_joined"),
      description: _vm.$t("proceed_to_participate_with_team")
    }
  }), _vm._v(" "), !_vm.config.isAuthenticated ? _c("router-link", {
    attrs: {
      replace: "",
      to: {
        name: "SignIn"
      }
    }
  }, [_c("AuthButton", {
    staticClass: "mb-12 w-full justify-center md:w-min",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("proceed_to_your_account")
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.config.isAuthenticated ? _c("router-link", {
    attrs: {
      replace: "",
      to: {
        name: "SharedWithMe",
        params: {
          id: _vm.invitation.data.attributes.parent_id
        }
      }
    }
  }, [_c("AuthButton", {
    staticClass: "mb-12 w-full justify-center md:w-min",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("go_to_team_folder")
    }
  })], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("AuthContent", {
    attrs: {
      name: "denied",
      visible: false
    }
  }, [_c("Headline", {
    attrs: {
      title: _vm.$t("you_denied_invitation"),
      description: _vm.$t("proceed_to_your_account")
    }
  }), _vm._v(" "), _c("router-link", {
    attrs: {
      to: {
        name: "SignIn"
      }
    }
  }, [_c("AuthButton", {
    staticClass: "mb-12 w-full justify-center md:w-min",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("proceed_to_your_account")
    }
  })], 1)], 1), _vm._v(" "), _c("AuthContent", {
    attrs: {
      name: "expired",
      visible: false
    }
  }, [_c("Headline", {
    attrs: {
      title: _vm.$t("invitation_used"),
      description: _vm.$t("invitation_used_description")
    }
  }), _vm._v(" "), !_vm.config.isAuthenticated ? _c("router-link", {
    attrs: {
      replace: "",
      to: {
        name: "SignIn"
      }
    }
  }, [_c("AuthButton", {
    staticClass: "mb-12 w-full justify-center md:w-min",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("log_in")
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.config.isAuthenticated ? _c("router-link", {
    attrs: {
      replace: "",
      to: {
        name: "SharedWithMe"
      }
    }
  }, [_c("AuthButton", {
    staticClass: "mb-12 w-full justify-center md:w-min",
    attrs: {
      icon: "chevron-right",
      text: _vm.$t("go_to_your_shared_folders")
    }
  })], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("PageFooter")], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-11c30cfd] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-11c30cfd] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-11c30cfd] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-11c30cfd] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-11c30cfd] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-11c30cfd] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-11c30cfd] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n.main-navigation[data-v-11c30cfd] {\n  justify-content: space-between;\n  padding-bottom: 25px;\n  align-items: center;\n  padding-top: 25px;\n  display: flex;\n}\n.logo[data-v-11c30cfd] {\n  cursor: pointer;\n}\n.logo img[data-v-11c30cfd] {\n  cursor: pointer;\n  height: 38px;\n  width: auto;\n}\n.logo .logo-text[data-v-11c30cfd] {\n  font-weight: 800;\n  font-size: 1.5625em;\n}\n.navigation-mobile[data-v-11c30cfd] {\n  display: none;\n}\n.navigation-links[data-v-11c30cfd] {\n  display: inline-block;\n  margin-left: 25px;\n}\n.navigation-links[data-v-11c30cfd]:first-child {\n  margin-left: 0;\n}\n.navigation-links li[data-v-11c30cfd] {\n  display: inline-block;\n}\n.navigation-links li a[data-v-11c30cfd] {\n  padding: 14px;\n  font-weight: 700;\n  font-size: 1.0625em;\n  transition: 150ms all ease;\n}\n.navigation-links-light[data-v-11c30cfd] {\n  display: inline-block;\n  position: relative;\n  margin-left: 25px;\n  top: 7px;\n}\n.cta-button[data-v-11c30cfd] {\n  border-radius: 6px;\n  padding: 8px 23px;\n  font-size: 1.0625em;\n  font-weight: 700;\n}\n.cta-button.log-in[data-v-11c30cfd] {\n  display: none;\n}\n@media only screen and (max-width: 690px) {\n.navigation[data-v-11c30cfd] {\n    display: none;\n}\n.navigation-mobile[data-v-11c30cfd] {\n    display: block;\n}\n.logo img[data-v-11c30cfd] {\n    height: auto;\n    width: 190px;\n}\n.cta-button.log-in[data-v-11c30cfd] {\n    display: block;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-4b1f961a] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-4b1f961a] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-4b1f961a] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-4b1f961a] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-4b1f961a] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-4b1f961a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-4b1f961a] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-4b1f961a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-4b1f961a] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-4b1f961a] {\n    width: 100%;\n}\n}\nfooter[data-v-4b1f961a] {\n  text-align: center;\n  padding-top: 80px;\n}\n.logo[data-v-4b1f961a] {\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.logo img[data-v-4b1f961a] {\n  height: 38px;\n  width: auto;\n}\n.logo .logo-text[data-v-4b1f961a] {\n  font-weight: 800;\n  font-size: 1.5625em;\n}\n.navigation-links[data-v-4b1f961a] {\n  display: inline-block;\n}\n.navigation-links li[data-v-4b1f961a] {\n  display: inline-block;\n}\n.navigation-links li a[data-v-4b1f961a] {\n  display: block;\n  padding: 19px;\n  font-weight: 700;\n  font-size: 1.0625em;\n  transition: 150ms all ease;\n}\n.copyright[data-v-4b1f961a] {\n  font-size: 1.0625em;\n  color: rgba(27, 37, 57, 0.7);\n  padding-top: 50px;\n  padding-bottom: 20px;\n}\n.copyright[data-v-4b1f961a]  a {\n  font-weight: 700;\n}\n.flag-mobile[data-v-4b1f961a] {\n  display: none;\n}\n@media only screen and (max-width: 800px) {\n.flag-mobile[data-v-4b1f961a] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.navigation-links[data-v-4b1f961a] {\n    display: none;\n}\n.logo img[data-v-4b1f961a] {\n    height: auto;\n    width: 190px;\n}\n}\n@media only screen and (max-width: 960px) {\n.navigation-links[data-v-4b1f961a] {\n    display: block;\n}\n.navigation-links li[data-v-4b1f961a] {\n    display: block;\n}\n.navigation-links li a[data-v-4b1f961a] {\n    padding: 10px 0;\n}\n}\n.dark .copyright[data-v-4b1f961a] {\n  color: #7d858c;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flag[data-v-b4841eec] {\n  vertical-align: middle;\n}\n.lang-switcher[data-v-b4841eec] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  top: -4px;\n  margin: 0;\n  border: none;\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.input-options[data-v-b4841eec] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: linear-gradient(#eee, #fff);\n  position: absolute;\n  overflow: hidden;\n  top: 55px;\n  right: 0;\n  z-index: 9;\n  white-space: nowrap;\n  max-height: 295px;\n  overflow-y: auto;\n  display: inline-block;\n}\n.input-options .option-list[data-v-b4841eec] {\n  display: inline-block;\n}\n.input-options .option-list .option-item[data-v-b4841eec] {\n  padding: 8px 15px;\n  display: inline-block;\n  cursor: pointer;\n}\n.input-options .option-list .option-item.active[data-v-b4841eec] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.input-options .option-list .option-item[data-v-b4841eec]:hover {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.input-options .option-list .option-item[data-v-b4841eec]:last-child {\n  border-bottom: none;\n}\n.option-value[data-v-b4841eec] {\n  width: 100%;\n  vertical-align: middle;\n  display: inline;\n}\n.slide-in-enter-active[data-v-b4841eec] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-b4841eec] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media only screen and (max-width: 800px) {\n.input-options[data-v-b4841eec] {\n    display: block;\n    position: relative;\n    margin-right: auto;\n    margin-left: auto;\n    top: 35px;\n}\n.input-options .option-list .option-item[data-v-b4841eec] {\n    padding: 5px 8px;\n    position: relative;\n    margin-right: auto;\n    margin-left: auto;\n    display: inline-block;\n    cursor: pointer;\n}\n}\n@media only screen and (max-device-width: 480px) {\n.input-options .option-list[data-v-b4841eec] {\n    right: 5%;\n}\n}\n@media (prefers-color-scheme: dark) {\n.input-options .option-list .option-item.active[data-v-b4841eec] {\n    color: #7d858c;\n    background: rgba(0, 188, 126, 0.1);\n}\n.input-options .option-list .option-item[data-v-b4841eec]:hover {\n    color: #7d858c;\n    background: rgba(0, 188, 126, 0.1);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flag[data-v-35967f45] {\n  vertical-align: middle;\n}\n.lang-switcher[data-v-35967f45] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  top: -4px;\n  margin: 0;\n  border: none;\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.input-options[data-v-35967f45] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: linear-gradient(#eee, #fff);\n  position: absolute;\n  overflow: hidden;\n  top: 55px;\n  right: 0;\n  z-index: 9;\n  white-space: nowrap;\n  max-height: 295px;\n  overflow-y: auto;\n  display: inline-block;\n}\n.input-options .option-list[data-v-35967f45] {\n  display: inline-block;\n}\n.input-options .option-list .option-item[data-v-35967f45] {\n  padding: 8px 15px;\n  display: inline-block;\n  cursor: pointer;\n}\n.input-options .option-list .option-item.active[data-v-35967f45] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.input-options .option-list .option-item[data-v-35967f45]:hover {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.input-options .option-list .option-item[data-v-35967f45]:last-child {\n  border-bottom: none;\n}\n.option-value[data-v-35967f45] {\n  width: 100%;\n  vertical-align: middle;\n  display: inline;\n}\n.slide-in-enter-active[data-v-35967f45] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-35967f45] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media only screen and (max-width: 800px) {\n.input-options[data-v-35967f45] {\n    display: block;\n    position: relative;\n}\n.input-options .option-list .option-item[data-v-35967f45] {\n    padding: 5px 8px;\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n}\n}\n@media only screen and (max-device-width: 480px) {\n.input-options .option-list[data-v-35967f45] {\n    right: 5%;\n}\n}\n@media (prefers-color-scheme: dark) {\n.input-options .option-list .option-item.active[data-v-35967f45] {\n    color: #7d858c;\n    background: rgba(0, 188, 126, 0.1);\n}\n.input-options .option-list .option-item[data-v-35967f45]:hover {\n    color: #7d858c;\n    background: rgba(0, 188, 126, 0.1);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sync-alt[data-v-97e201b0] {\n  animation: spin-97e201b0 1s linear infinite;\n}\n@keyframes spin-97e201b0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_id_b4841eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_id_b4841eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_id_b4841eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_style_index_0_id_35967f45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_style_index_0_id_35967f45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_style_index_0_id_35967f45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.full.js":
/*!*************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.full.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")) :
  0;
}(this, (function (exports, Vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  var code = "en";
  var messages = {
  	alpha: "The {_field_} field may only contain alphabetic characters",
  	alpha_num: "The {_field_} field may only contain alpha-numeric characters",
  	alpha_dash: "The {_field_} field may contain alpha-numeric characters as well as dashes and underscores",
  	alpha_spaces: "The {_field_} field may only contain alphabetic characters as well as spaces",
  	between: "The {_field_} field must be between {min} and {max}",
  	confirmed: "The {_field_} field confirmation does not match",
  	digits: "The {_field_} field must be numeric and exactly contain {length} digits",
  	dimensions: "The {_field_} field must be {width} pixels by {height} pixels",
  	email: "The {_field_} field must be a valid email",
  	excluded: "The {_field_} field is not a valid value",
  	ext: "The {_field_} field is not a valid file",
  	image: "The {_field_} field must be an image",
  	integer: "The {_field_} field must be an integer",
  	length: "The {_field_} field must be {length} long",
  	max_value: "The {_field_} field must be {max} or less",
  	max: "The {_field_} field may not be greater than {length} characters",
  	mimes: "The {_field_} field must have a valid file type",
  	min_value: "The {_field_} field must be {min} or more",
  	min: "The {_field_} field must be at least {length} characters",
  	numeric: "The {_field_} field may only contain numeric characters",
  	oneOf: "The {_field_} field is not a valid value",
  	regex: "The {_field_} field format is invalid",
  	required_if: "The {_field_} field is required",
  	required: "The {_field_} field is required",
  	size: "The {_field_} field size must be less than {size}KB",
  	double: "The {_field_} field must be a valid decimal"
  };
  var en$1 = {
  	code: code,
  	messages: messages
  };

  /**
   * Some Alpha Regex helpers.
   * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
   */
  /* eslint-disable no-misleading-character-class */
  var alpha$1 = {
      en: /^[A-Z]*$/i,
      cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
      da: /^[A-ZÆØÅ]*$/i,
      de: /^[A-ZÄÖÜß]*$/i,
      es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
      it: /^[A-Z\xC0-\xFF]*$/i,
      lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
      nl: /^[A-ZÉËÏÓÖÜ]*$/i,
      hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
      pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
      pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
      ro: /^[A-ZĂÂÎŞŢ]*$/i,
      ru: /^[А-ЯЁ]*$/i,
      sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
      sr: /^[A-ZČĆŽŠĐ]*$/i,
      sv: /^[A-ZÅÄÖ]*$/i,
      tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
      uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
      az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
      el: /^[Α-ώ]*$/i,
      ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
      he: /^[A-Z\u05D0-\u05EA']*$/i
  };
  var alphaSpaces = {
      en: /^[A-Z\s]*$/i,
      cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
      da: /^[A-ZÆØÅ\s]*$/i,
      de: /^[A-ZÄÖÜß\s]*$/i,
      es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
      it: /^[A-Z\xC0-\xFF\s]*$/i,
      lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
      nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
      hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
      pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
      pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
      ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
      ru: /^[А-ЯЁ\s]*$/i,
      sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
      sr: /^[A-ZČĆŽŠĐ\s]*$/i,
      sv: /^[A-ZÅÄÖ\s]*$/i,
      tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
      uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
      az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
      el: /^[Α-ώ\s]*$/i,
      ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,
      he: /^[A-Z\u05D0-\u05EA'\s]*$/i
  };
  var alphanumeric = {
      en: /^[0-9A-Z]*$/i,
      cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
      da: /^[0-9A-ZÆØÅ]$/i,
      de: /^[0-9A-ZÄÖÜß]*$/i,
      es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
      it: /^[0-9A-Z\xC0-\xFF]*$/i,
      lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
      hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
      nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
      pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
      pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
      ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
      ru: /^[0-9А-ЯЁ]*$/i,
      sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
      sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
      sv: /^[0-9A-ZÅÄÖ]*$/i,
      tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
      uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
      az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
      el: /^[0-9Α-ώ]*$/i,
      ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
      he: /^[0-9A-Z\u05D0-\u05EA']*$/i
  };
  var alphaDash = {
      en: /^[0-9A-Z_-]*$/i,
      cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
      da: /^[0-9A-ZÆØÅ_-]*$/i,
      de: /^[0-9A-ZÄÖÜß_-]*$/i,
      es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
      it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
      lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
      nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
      hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
      pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
      pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
      ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
      ru: /^[0-9А-ЯЁ_-]*$/i,
      sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
      sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
      sv: /^[0-9A-ZÅÄÖ_-]*$/i,
      tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
      uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
      az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
      el: /^[0-9Α-ώ_-]*$/i,
      ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,
      he: /^[0-9A-Z\u05D0-\u05EA'_-]*$/i
  };

  var validate$s = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$s(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
      }
      return (alpha$1[locale] || alpha$1.en).test(value);
  };
  var params$k = [
      {
          name: 'locale'
      }
  ];
  var alpha = {
      validate: validate$s,
      params: params$k
  };

  var validate$r = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$r(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
      }
      return (alphaDash[locale] || alphaDash.en).test(value);
  };
  var params$j = [
      {
          name: 'locale'
      }
  ];
  var alpha_dash = {
      validate: validate$r,
      params: params$j
  };

  var validate$q = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$q(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
      }
      return (alphanumeric[locale] || alphanumeric.en).test(value);
  };
  var params$i = [
      {
          name: 'locale'
      }
  ];
  var alpha_num = {
      validate: validate$q,
      params: params$i
  };

  var validate$p = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$p(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
      }
      return (alphaSpaces[locale] || alphaSpaces.en).test(value);
  };
  var params$h = [
      {
          name: 'locale'
      }
  ];
  var alpha_spaces = {
      validate: validate$p,
      params: params$h
  };

  var validate$o = function (value, _a) {
      var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
      if (Array.isArray(value)) {
          return value.every(function (val) { return !!validate$o(val, { min: min, max: max }); });
      }
      return Number(min) <= value && Number(max) >= value;
  };
  var params$g = [
      {
          name: 'min'
      },
      {
          name: 'max'
      }
  ];
  var between = {
      validate: validate$o,
      params: params$g
  };

  var validate$n = function (value, _a) {
      var target = _a.target;
      return String(value) === String(target);
  };
  var params$f = [
      {
          name: 'target',
          isTarget: true
      }
  ];
  var confirmed = {
      validate: validate$n,
      params: params$f
  };

  var validate$m = function (value, _a) {
      var length = _a.length;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$m(val, { length: length }); });
      }
      var strVal = String(value);
      return /^[0-9]*$/.test(strVal) && strVal.length === length;
  };
  var params$e = [
      {
          name: 'length',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var digits = {
      validate: validate$m,
      params: params$e
  };

  var validateImage = function (file, width, height) {
      var URL = window.URL || window.webkitURL;
      return new Promise(function (resolve) {
          var image = new Image();
          image.onerror = function () { return resolve(false); };
          image.onload = function () { return resolve(image.width === width && image.height === height); };
          image.src = URL.createObjectURL(file);
      });
  };
  var validate$l = function (files, _a) {
      var width = _a.width, height = _a.height;
      var list = [];
      files = Array.isArray(files) ? files : [files];
      for (var i = 0; i < files.length; i++) {
          // if file is not an image, reject.
          if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
              return Promise.resolve(false);
          }
          list.push(files[i]);
      }
      return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
          return values.every(function (v) { return v; });
      });
  };
  var params$d = [
      {
          name: 'width',
          cast: function (value) {
              return Number(value);
          }
      },
      {
          name: 'height',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var dimensions = {
      validate: validate$l,
      params: params$d
  };

  var validate$k = function (value, _a) {
      var multiple = (_a === void 0 ? {} : _a).multiple;
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (multiple && !Array.isArray(value)) {
          value = String(value)
              .split(',')
              .map(function (emailStr) { return emailStr.trim(); });
      }
      if (Array.isArray(value)) {
          return value.every(function (val) { return re.test(String(val)); });
      }
      return re.test(String(value));
  };
  var params$c = [
      {
          name: 'multiple',
          default: false
      }
  ];
  var email = {
      validate: validate$k,
      params: params$c
  };

  function isNaN$1(value) {
      // NaN is the one value that does not equal itself.
      // eslint-disable-next-line
      return value !== value;
  }
  function isNullOrUndefined(value) {
      return value === null || value === undefined;
  }
  function isEmptyArray(arr) {
      return Array.isArray(arr) && arr.length === 0;
  }
  var isObject = function (obj) {
      return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
  };
  /**
   * A reference comparison function with NaN support
   */
  function isRefEqual(lhs, rhs) {
      if (isNaN$1(lhs) && isNaN$1(rhs)) {
          return true;
      }
      return lhs === rhs;
  }
  // Checks if a given value is not an empty string or null or undefined.
  function isSpecified(val) {
      if (val === '') {
          return false;
      }
      return !isNullOrUndefined(val);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  function isCallable(fn) {
      return typeof fn === 'function';
  }
  function isLocator(value) {
      return isCallable(value) && !!value.__locatorRef;
  }

  function findIndex(arrayLike, predicate) {
      var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
      if (isCallable(array.findIndex)) {
          return array.findIndex(predicate);
      }
      /* istanbul ignore next */
      for (var i = 0; i < array.length; i++) {
          if (predicate(array[i], i)) {
              return i;
          }
      }
      /* istanbul ignore next */
      return -1;
  }
  /**
   * finds the first element that satisfies the predicate callback, polyfills array.find
   */
  function find(arrayLike, predicate) {
      var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
      var idx = findIndex(array, predicate);
      return idx === -1 ? undefined : array[idx];
  }
  function includes(collection, item) {
      return collection.indexOf(item) !== -1;
  }
  /**
   * Converts an array-like object to array, provides a simple polyfill for Array.from
   */
  function toArray(arrayLike) {
      if (isCallable(Array.from)) {
          return Array.from(arrayLike);
      }
      /* istanbul ignore next */
      return _copyArray(arrayLike);
  }
  /* istanbul ignore next */
  function _copyArray(arrayLike) {
      var array = [];
      var length = arrayLike.length;
      for (var i = 0; i < length; i++) {
          array.push(arrayLike[i]);
      }
      return array;
  }
  function values(obj) {
      if (isCallable(Object.values)) {
          return Object.values(obj);
      }
      // fallback to keys()
      /* istanbul ignore next */
      return Object.keys(obj).map(function (k) { return obj[k]; });
  }
  function merge(target, source) {
      Object.keys(source).forEach(function (key) {
          if (isObject(source[key])) {
              if (!target[key]) {
                  target[key] = {};
              }
              merge(target[key], source[key]);
              return;
          }
          target[key] = source[key];
      });
      return target;
  }

  function createFlags() {
      return {
          untouched: true,
          touched: false,
          dirty: false,
          pristine: true,
          valid: false,
          invalid: false,
          validated: false,
          pending: false,
          required: false,
          changed: false,
          passed: false,
          failed: false
      };
  }

  function identity(x) {
      return x;
  }
  function debounce(fn, wait, token) {
      if (wait === void 0) { wait = 0; }
      if (token === void 0) { token = { cancelled: false }; }
      if (wait === 0) {
          return fn;
      }
      var timeout;
      return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var later = function () {
              timeout = undefined;
              // check if the fn call was cancelled.
              if (!token.cancelled)
                  fn.apply(void 0, args);
          };
          // because we might want to use Node.js setTimout for SSR.
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      };
  }

  /**
   * Emits a warning to the console
   */
  function warn(message) {
      console.warn("[vee-validate] " + message);
  }
  /**
   * Replaces placeholder values in a string with their actual values
   */
  function interpolate(template, values) {
      return template.replace(/{([^}]+)}/g, function (_, p) {
          return p in values ? values[p] : "{" + p + "}";
      });
  }

  var validate$j = function (value, options) {
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$j(val, options); });
      }
      return toArray(options).some(function (item) {
          // eslint-disable-next-line
          return item == value;
      });
  };
  var oneOf = {
      validate: validate$j
  };

  var validate$i = function (value, args) {
      return !validate$j(value, args);
  };
  var excluded = {
      validate: validate$i
  };

  var validate$h = function (files, extensions) {
      var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
      if (Array.isArray(files)) {
          return files.every(function (file) { return regex.test(file.name); });
      }
      return regex.test(files.name);
  };
  var ext = {
      validate: validate$h
  };

  var validate$g = function (files) {
      var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
      if (Array.isArray(files)) {
          return files.every(function (file) { return regex.test(file.name); });
      }
      return regex.test(files.name);
  };
  var image = {
      validate: validate$g
  };

  var validate$f = function (value) {
      if (Array.isArray(value)) {
          return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
      }
      return /^-?[0-9]+$/.test(String(value));
  };
  var integer = {
      validate: validate$f
  };

  var validate$e = function (value, _a) {
      var other = _a.other;
      return value === other;
  };
  var params$b = [
      {
          name: 'other'
      }
  ];
  var is = {
      validate: validate$e,
      params: params$b
  };

  var validate$d = function (value, _a) {
      var other = _a.other;
      return value !== other;
  };
  var params$a = [
      {
          name: 'other'
      }
  ];
  var is_not = {
      validate: validate$d,
      params: params$a
  };

  var validate$c = function (value, _a) {
      var length = _a.length;
      if (isNullOrUndefined(value)) {
          return false;
      }
      if (typeof value === 'string') {
          value = toArray(value);
      }
      if (typeof value === 'number') {
          value = String(value);
      }
      if (!value.length) {
          value = toArray(value);
      }
      return value.length === length;
  };
  var params$9 = [
      {
          name: 'length',
          cast: function (value) { return Number(value); }
      }
  ];
  var length = {
      validate: validate$c,
      params: params$9
  };

  var validate$b = function (value, _a) {
      var length = _a.length;
      if (isNullOrUndefined(value)) {
          return length >= 0;
      }
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$b(val, { length: length }); });
      }
      return String(value).length <= length;
  };
  var params$8 = [
      {
          name: 'length',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var max = {
      validate: validate$b,
      params: params$8
  };

  var validate$a = function (value, _a) {
      var max = _a.max;
      if (isNullOrUndefined(value) || value === '') {
          return false;
      }
      if (Array.isArray(value)) {
          return value.length > 0 && value.every(function (val) { return validate$a(val, { max: max }); });
      }
      return Number(value) <= max;
  };
  var params$7 = [
      {
          name: 'max',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var max_value = {
      validate: validate$a,
      params: params$7
  };

  var validate$9 = function (files, mimes) {
      var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
      if (Array.isArray(files)) {
          return files.every(function (file) { return regex.test(file.type); });
      }
      return regex.test(files.type);
  };
  var mimes = {
      validate: validate$9
  };

  var validate$8 = function (value, _a) {
      var length = _a.length;
      if (isNullOrUndefined(value)) {
          return false;
      }
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$8(val, { length: length }); });
      }
      return String(value).length >= length;
  };
  var params$6 = [
      {
          name: 'length',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var min = {
      validate: validate$8,
      params: params$6
  };

  var validate$7 = function (value, _a) {
      var min = _a.min;
      if (isNullOrUndefined(value) || value === '') {
          return false;
      }
      if (Array.isArray(value)) {
          return value.length > 0 && value.every(function (val) { return validate$7(val, { min: min }); });
      }
      return Number(value) >= min;
  };
  var params$5 = [
      {
          name: 'min',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var min_value = {
      validate: validate$7,
      params: params$5
  };

  var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
  var en = /^[0-9]+$/;
  var validate$6 = function (value) {
      var testValue = function (val) {
          var strValue = String(val);
          return en.test(strValue) || ar.test(strValue);
      };
      if (Array.isArray(value)) {
          return value.every(testValue);
      }
      return testValue(value);
  };
  var numeric = {
      validate: validate$6
  };

  var validate$5 = function (value, _a) {
      var regex = _a.regex;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$5(val, { regex: regex }); });
      }
      return regex.test(String(value));
  };
  var params$4 = [
      {
          name: 'regex',
          cast: function (value) {
              if (typeof value === 'string') {
                  return new RegExp(value);
              }
              return value;
          }
      }
  ];
  var regex = {
      validate: validate$5,
      params: params$4
  };

  var validate$4 = function (value, _a) {
      var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
      var result = {
          valid: false,
          required: true
      };
      if (isNullOrUndefined(value) || isEmptyArray(value)) {
          return result;
      }
      // incase a field considers `false` as an empty value like checkboxes.
      if (value === false && !allowFalse) {
          return result;
      }
      result.valid = !!String(value).trim().length;
      return result;
  };
  var computesRequired$1 = true;
  var params$3 = [
      {
          name: 'allowFalse',
          default: true
      }
  ];
  var required = {
      validate: validate$4,
      params: params$3,
      computesRequired: computesRequired$1
  };

  var testEmpty = function (value) {
      return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
  };
  var validate$3 = function (value, _a) {
      var target = _a.target, values = _a.values;
      var required;
      if (values && values.length) {
          if (!Array.isArray(values) && typeof values === 'string') {
              values = [values];
          }
          // eslint-disable-next-line
          required = values.some(function (val) { return val == String(target).trim(); });
      }
      else {
          required = !testEmpty(target);
      }
      if (!required) {
          return {
              valid: true,
              required: required
          };
      }
      return {
          valid: !testEmpty(value),
          required: required
      };
  };
  var params$2 = [
      {
          name: 'target',
          isTarget: true
      },
      {
          name: 'values'
      }
  ];
  var computesRequired = true;
  var required_if = {
      validate: validate$3,
      params: params$2,
      computesRequired: computesRequired
  };

  var validate$2 = function (files, _a) {
      var size = _a.size;
      if (isNaN(size)) {
          return false;
      }
      var nSize = size * 1024;
      if (!Array.isArray(files)) {
          return files.size <= nSize;
      }
      for (var i = 0; i < files.length; i++) {
          if (files[i].size > nSize) {
              return false;
          }
      }
      return true;
  };
  var params$1 = [
      {
          name: 'size',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var size = {
      validate: validate$2,
      params: params$1
  };

  var validate$1 = function (value, params) {
      var _a = params || {}, _b = _a.decimals, decimals = _b === void 0 ? 0 : _b, _c = _a.separator, separator = _c === void 0 ? 'dot' : _c;
      var delimiterRegexPart = separator === 'comma' ? ',?' : '\\.?';
      var decimalRegexPart = decimals === 0 ? '\\d*' : "(\\d{" + decimals + "})?";
      var regex = new RegExp("^-?\\d+" + delimiterRegexPart + decimalRegexPart + "$");
      return Array.isArray(value) ? value.every(function (val) { return regex.test(String(val)); }) : regex.test(String(value));
  };
  var params = [
      {
          name: 'decimals',
          default: 0
      },
      {
          name: 'separator',
          default: 'dot'
      }
  ];
  var double = {
      validate: validate$1,
      params: params
  };

  /* eslint-disable camelcase */

  var Rules = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alpha_dash: alpha_dash,
    alpha_num: alpha_num,
    alpha_spaces: alpha_spaces,
    alpha: alpha,
    between: between,
    confirmed: confirmed,
    digits: digits,
    dimensions: dimensions,
    email: email,
    ext: ext,
    image: image,
    oneOf: oneOf,
    integer: integer,
    length: length,
    is_not: is_not,
    is: is,
    max: max,
    max_value: max_value,
    mimes: mimes,
    min: min,
    min_value: min_value,
    excluded: excluded,
    numeric: numeric,
    regex: regex,
    required: required,
    required_if: required_if,
    size: size,
    double: double
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var DEFAULT_CONFIG = {
      defaultMessage: "{_field_} is not valid.",
      skipOptional: true,
      classes: {
          touched: 'touched',
          untouched: 'untouched',
          valid: 'valid',
          invalid: 'invalid',
          pristine: 'pristine',
          dirty: 'dirty' // control has been interacted with
      },
      bails: true,
      mode: 'aggressive',
      useConstraintAttrs: true
  };
  var currentConfig = __assign({}, DEFAULT_CONFIG);
  var getConfig = function () { return currentConfig; };
  var setConfig = function (newConf) {
      currentConfig = __assign(__assign({}, currentConfig), newConf);
  };
  var configure = function (cfg) {
      setConfig(cfg);
  };

  var EVENT_BUS = new Vue__default['default']();
  function localeChanged() {
      EVENT_BUS.$emit('change:locale');
  }

  var Dictionary = /** @class */ (function () {
      function Dictionary(locale, dictionary) {
          this.container = {};
          this.locale = locale;
          this.merge(dictionary);
      }
      Dictionary.prototype.resolve = function (field, rule, values) {
          return this.format(this.locale, field, rule, values);
      };
      Dictionary.prototype.format = function (locale, field, rule, values) {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          var message;
          // find if specific message for that field was specified.
          var fieldContainer = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule];
          var messageContainer = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule];
          message = fieldContainer || messageContainer || '';
          if (!message) {
              message = '{_field_} is not valid';
          }
          field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
          return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), { _field_: field }));
      };
      Dictionary.prototype.merge = function (dictionary) {
          merge(this.container, dictionary);
      };
      Dictionary.prototype.hasRule = function (name) {
          var _a, _b;
          return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
      };
      return Dictionary;
  }());
  var DICTIONARY;
  function localize(locale, dictionary) {
      var _a;
      if (!DICTIONARY) {
          DICTIONARY = new Dictionary('en', {});
          setConfig({
              defaultMessage: function (field, values) {
                  return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
              }
          });
      }
      if (typeof locale === 'string') {
          DICTIONARY.locale = locale;
          if (dictionary) {
              DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
          }
          localeChanged();
          return;
      }
      DICTIONARY.merge(locale);
  }

  var RULES = {};
  function normalizeSchema(schema) {
      var _a;
      if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
          schema.params = schema.params.map(function (param) {
              if (typeof param === 'string') {
                  return { name: param };
              }
              return param;
          });
      }
      return schema;
  }
  var RuleContainer = /** @class */ (function () {
      function RuleContainer() {
      }
      RuleContainer.extend = function (name, schema) {
          // if rule already exists, overwrite it.
          var rule = normalizeSchema(schema);
          if (RULES[name]) {
              RULES[name] = merge(RULES[name], schema);
              return;
          }
          RULES[name] = __assign({ lazy: false, computesRequired: false }, rule);
      };
      RuleContainer.isLazy = function (name) {
          var _a;
          return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
      };
      RuleContainer.isRequireRule = function (name) {
          var _a;
          return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
      };
      RuleContainer.getRuleDefinition = function (ruleName) {
          return RULES[ruleName];
      };
      return RuleContainer;
  }());
  /**
   * Adds a custom validator to the list of validation rules.
   */
  function extend(name, schema) {
      // makes sure new rules are properly formatted.
      guardExtend(name, schema);
      // Full schema object.
      if (typeof schema === 'object') {
          RuleContainer.extend(name, schema);
          return;
      }
      RuleContainer.extend(name, {
          validate: schema
      });
  }
  /**
   * Guards from extension violations.
   */
  function guardExtend(name, validator) {
      if (isCallable(validator)) {
          return;
      }
      if (isCallable(validator.validate)) {
          return;
      }
      if (RuleContainer.getRuleDefinition(name)) {
          return;
      }
      throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
  }

  var aggressive = function () { return ({
      on: ['input', 'blur']
  }); };
  var lazy = function () { return ({
      on: ['change', 'blur']
  }); };
  var eager = function (_a) {
      var errors = _a.errors;
      if (errors.length) {
          return {
              on: ['input', 'change']
          };
      }
      return {
          on: ['change', 'blur']
      };
  };
  var passive = function () { return ({
      on: []
  }); };
  var modes = {
      aggressive: aggressive,
      eager: eager,
      passive: passive,
      lazy: lazy
  };
  var setInteractionMode = function (mode, implementation) {
      setConfig({ mode: mode });
      if (!implementation) {
          return;
      }
      if (!isCallable(implementation)) {
          throw new Error('A mode implementation must be a function');
      }
      modes[mode] = implementation;
  };

  /**
   * Normalizes the given rules expression.
   */
  function normalizeRules(rules) {
      // if falsy value return an empty object.
      var acc = {};
      Object.defineProperty(acc, '_$$isNormalized', {
          value: true,
          writable: false,
          enumerable: false,
          configurable: false
      });
      if (!rules) {
          return acc;
      }
      // Object is already normalized, skip.
      if (isObject(rules) && rules._$$isNormalized) {
          return rules;
      }
      if (isObject(rules)) {
          return Object.keys(rules).reduce(function (prev, curr) {
              var params = [];
              if (rules[curr] === true) {
                  params = [];
              }
              else if (Array.isArray(rules[curr])) {
                  params = rules[curr];
              }
              else if (isObject(rules[curr])) {
                  params = rules[curr];
              }
              else {
                  params = [rules[curr]];
              }
              if (rules[curr] !== false) {
                  prev[curr] = buildParams(curr, params);
              }
              return prev;
          }, acc);
      }
      /* istanbul ignore if */
      if (typeof rules !== 'string') {
          warn('rules must be either a string or an object.');
          return acc;
      }
      return rules.split('|').reduce(function (prev, rule) {
          var parsedRule = parseRule(rule);
          if (!parsedRule.name) {
              return prev;
          }
          prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
          return prev;
      }, acc);
  }
  function buildParams(ruleName, provided) {
      var ruleSchema = RuleContainer.getRuleDefinition(ruleName);
      if (!ruleSchema) {
          return provided;
      }
      var params = {};
      if (!ruleSchema.params && !Array.isArray(provided)) {
          throw new Error('You provided an object params to a rule that has no defined schema.');
      }
      // Rule probably uses an array for their args, keep it as is.
      if (Array.isArray(provided) && !ruleSchema.params) {
          return provided;
      }
      var definedParams;
      // collect the params schema.
      if (!ruleSchema.params || (ruleSchema.params.length < provided.length && Array.isArray(provided))) {
          var lastDefinedParam_1;
          // collect any additional parameters in the last item.
          definedParams = provided.map(function (_, idx) {
              var _a;
              var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
              lastDefinedParam_1 = param || lastDefinedParam_1;
              if (!param) {
                  param = lastDefinedParam_1;
              }
              return param;
          });
      }
      else {
          definedParams = ruleSchema.params;
      }
      // Match the provided array length with a temporary schema.
      for (var i = 0; i < definedParams.length; i++) {
          var options = definedParams[i];
          var value = options.default;
          // if the provided is an array, map element value.
          if (Array.isArray(provided)) {
              if (i in provided) {
                  value = provided[i];
              }
          }
          else {
              // If the param exists in the provided object.
              if (options.name in provided) {
                  value = provided[options.name];
                  // if the provided is the first param value.
              }
              else if (definedParams.length === 1) {
                  value = provided;
              }
          }
          // if the param is a target, resolve the target value.
          if (options.isTarget) {
              value = createLocator(value, options.cast);
          }
          // A target param using interpolation
          if (typeof value === 'string' && value[0] === '@') {
              value = createLocator(value.slice(1), options.cast);
          }
          // If there is a transformer defined.
          if (!isLocator(value) && options.cast) {
              value = options.cast(value);
          }
          // already been set, probably multiple values.
          if (params[options.name]) {
              params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
              params[options.name].push(value);
          }
          else {
              // set the value.
              params[options.name] = value;
          }
      }
      return params;
  }
  /**
   * Parses a rule string expression.
   */
  var parseRule = function (rule) {
      var params = [];
      var name = rule.split(':')[0];
      if (includes(rule, ':')) {
          params = rule
              .split(':')
              .slice(1)
              .join(':')
              .split(',');
      }
      return { name: name, params: params };
  };
  function createLocator(value, castFn) {
      var locator = function (crossTable) {
          var val = crossTable[value];
          return castFn ? castFn(val) : val;
      };
      locator.__locatorRef = value;
      return locator;
  }
  function extractLocators(params) {
      if (Array.isArray(params)) {
          return params.filter(function (param) {
              return isLocator(param) || (typeof param === 'string' && param[0] === '@');
          });
      }
      return Object.keys(params)
          .filter(function (key) { return isLocator(params[key]); })
          .map(function (key) { return params[key]; });
  }

  /**
   * Validates a value against the rules.
   */
  function validate(value, rules, options) {
      if (options === void 0) { options = {}; }
      return __awaiter(this, void 0, void 0, function () {
          var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      shouldBail = options === null || options === void 0 ? void 0 : options.bails;
                      skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
                      field = {
                          name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
                          rules: normalizeRules(rules),
                          bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
                          skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
                          forceRequired: false,
                          crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
                          names: (options === null || options === void 0 ? void 0 : options.names) || {},
                          customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
                      };
                      return [4 /*yield*/, _validate(field, value, options)];
                  case 1:
                      result = _a.sent();
                      errors = [];
                      failedRules = {};
                      regenerateMap = {};
                      result.errors.forEach(function (e) {
                          var msg = e.msg();
                          errors.push(msg);
                          failedRules[e.rule] = msg;
                          regenerateMap[e.rule] = e.msg;
                      });
                      return [2 /*return*/, {
                              valid: result.valid,
                              required: result.required,
                              errors: errors,
                              failedRules: failedRules,
                              regenerateMap: regenerateMap
                          }];
              }
          });
      });
  }
  /**
   * Starts the validation process.
   */
  function _validate(field, value, _a) {
      var _b = (_a === void 0 ? {} : _a).isInitial, isInitial = _b === void 0 ? false : _b;
      return __awaiter(this, void 0, void 0, function () {
          var _c, shouldSkip, required, errors, rules, length, i, rule, result;
          return __generator(this, function (_d) {
              switch (_d.label) {
                  case 0: return [4 /*yield*/, _shouldSkip(field, value)];
                  case 1:
                      _c = _d.sent(), shouldSkip = _c.shouldSkip, required = _c.required, errors = _c.errors;
                      if (shouldSkip) {
                          return [2 /*return*/, {
                                  valid: !errors.length,
                                  required: required,
                                  errors: errors
                              }];
                      }
                      rules = Object.keys(field.rules).filter(function (rule) { return !RuleContainer.isRequireRule(rule); });
                      length = rules.length;
                      i = 0;
                      _d.label = 2;
                  case 2:
                      if (!(i < length)) return [3 /*break*/, 5];
                      if (isInitial && RuleContainer.isLazy(rules[i])) {
                          return [3 /*break*/, 4];
                      }
                      rule = rules[i];
                      return [4 /*yield*/, _test(field, value, {
                              name: rule,
                              params: field.rules[rule]
                          })];
                  case 3:
                      result = _d.sent();
                      if (!result.valid && result.error) {
                          errors.push(result.error);
                          if (field.bails) {
                              return [2 /*return*/, {
                                      valid: false,
                                      required: required,
                                      errors: errors
                                  }];
                          }
                      }
                      _d.label = 4;
                  case 4:
                      i++;
                      return [3 /*break*/, 2];
                  case 5: return [2 /*return*/, {
                          valid: !errors.length,
                          required: required,
                          errors: errors
                      }];
              }
          });
      });
  }
  function _shouldSkip(field, value) {
      return __awaiter(this, void 0, void 0, function () {
          var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
                      length = requireRules.length;
                      errors = [];
                      isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
                      isEmptyAndOptional = isEmpty && field.skipIfEmpty;
                      i = 0;
                      _a.label = 1;
                  case 1:
                      if (!(i < length)) return [3 /*break*/, 4];
                      rule = requireRules[i];
                      return [4 /*yield*/, _test(field, value, {
                              name: rule,
                              params: field.rules[rule]
                          })];
                  case 2:
                      result = _a.sent();
                      if (!isObject(result)) {
                          throw new Error('Require rules has to return an object (see docs)');
                      }
                      if (result.required !== undefined) {
                          isRequired = result.required;
                      }
                      if (!result.valid && result.error) {
                          errors.push(result.error);
                          // Exit early as the field is required and failed validation.
                          if (field.bails) {
                              return [2 /*return*/, {
                                      shouldSkip: true,
                                      required: result.required,
                                      errors: errors
                                  }];
                          }
                      }
                      _a.label = 3;
                  case 3:
                      i++;
                      return [3 /*break*/, 1];
                  case 4:
                      if (isEmpty && !isRequired && !field.skipIfEmpty) {
                          return [2 /*return*/, {
                                  shouldSkip: false,
                                  required: isRequired,
                                  errors: errors
                              }];
                      }
                      // field is configured to run through the pipeline regardless
                      if (!field.bails && !isEmptyAndOptional) {
                          return [2 /*return*/, {
                                  shouldSkip: false,
                                  required: isRequired,
                                  errors: errors
                              }];
                      }
                      // skip if the field is not required and has an empty value.
                      return [2 /*return*/, {
                              shouldSkip: !isRequired && isEmpty,
                              required: isRequired,
                              errors: errors
                          }];
              }
          });
      });
  }
  /**
   * Tests a single input value against a rule.
   */
  function _test(field, value, rule) {
      return __awaiter(this, void 0, void 0, function () {
          var ruleSchema, normalizedValue, params, result, values_1;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      ruleSchema = RuleContainer.getRuleDefinition(rule.name);
                      if (!ruleSchema || !ruleSchema.validate) {
                          throw new Error("No such validator '" + rule.name + "' exists.");
                      }
                      normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
                      params = fillTargetValues(rule.params, field.crossTable);
                      return [4 /*yield*/, ruleSchema.validate(normalizedValue, params)];
                  case 1:
                      result = _a.sent();
                      if (typeof result === 'string') {
                          values_1 = __assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: rule.name });
                          return [2 /*return*/, {
                                  valid: false,
                                  error: { rule: rule.name, msg: function () { return interpolate(result, values_1); } }
                              }];
                      }
                      if (!isObject(result)) {
                          result = { valid: result };
                      }
                      return [2 /*return*/, {
                              valid: result.valid,
                              required: result.required,
                              error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
                          }];
              }
          });
      });
  }
  /**
   * Generates error messages.
   */
  function _generateFieldError(field, value, ruleSchema, ruleName, params) {
      var _a;
      var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;
      var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);
      var _b = _getUserTargets(field, ruleSchema, ruleName, message), userTargets = _b.userTargets, userMessage = _b.userMessage;
      var values = __assign(__assign(__assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: ruleName }), ruleTargets), userTargets);
      return {
          msg: function () { return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values); },
          rule: ruleName
      };
  }
  function _getRuleTargets(field, ruleSchema, ruleName) {
      var params = ruleSchema.params;
      if (!params) {
          return {};
      }
      var numTargets = params.filter(function (param) { return param.isTarget; }).length;
      if (numTargets <= 0) {
          return {};
      }
      var names = {};
      var ruleConfig = field.rules[ruleName];
      if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
          ruleConfig = params.map(function (param) {
              return ruleConfig[param.name];
          });
      }
      for (var index = 0; index < params.length; index++) {
          var param = params[index];
          var key = ruleConfig[index];
          if (!isLocator(key)) {
              continue;
          }
          key = key.__locatorRef;
          var name_1 = field.names[key] || key;
          names[param.name] = name_1;
          names["_" + param.name + "_"] = field.crossTable[key];
      }
      return names;
  }
  function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
      var userTargets = {};
      var rules = field.rules[ruleName];
      var params = ruleSchema.params || [];
      // early return if no rules
      if (!rules) {
          return {};
      }
      // check all rules to convert targets
      Object.keys(rules).forEach(function (key, index) {
          // get the rule
          var rule = rules[key];
          if (!isLocator(rule)) {
              return {};
          }
          // get associated parameter
          var param = params[index];
          if (!param) {
              return {};
          }
          // grab the name of the target
          var name = rule.__locatorRef;
          userTargets[param.name] = field.names[name] || name;
          userTargets["_" + param.name + "_"] = field.crossTable[name];
      });
      return {
          userTargets: userTargets,
          userMessage: userMessage
      };
  }
  function _normalizeMessage(template, field, values) {
      if (typeof template === 'function') {
          return template(field, values);
      }
      return interpolate(template, __assign(__assign({}, values), { _field_: field }));
  }
  function fillTargetValues(params, crossTable) {
      if (Array.isArray(params)) {
          return params.map(function (param) {
              var targetPart = typeof param === 'string' && param[0] === '@' ? param.slice(1) : param;
              if (targetPart in crossTable) {
                  return crossTable[targetPart];
              }
              return param;
          });
      }
      var values = {};
      var normalize = function (value) {
          if (isLocator(value)) {
              return value(crossTable);
          }
          return value;
      };
      Object.keys(params).forEach(function (param) {
          values[param] = normalize(params[param]);
      });
      return values;
  }

  // do not edit .js files directly - edit src/index.jst



  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }



      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

      for (i = length; i-- !== 0;) {
        var key = keys[i];

        if (!equal(a[key], b[key])) return false;
      }

      return true;
    }

    // true if both NaN, false otherwise
    return a!==a && b!==b;
  };

  var isEvent = function (evt) {
      if (!evt) {
          return false;
      }
      if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
          return true;
      }
      // this is for IE
      /* istanbul ignore next */
      if (evt && evt.srcElement) {
          return true;
      }
      return false;
  };
  function normalizeEventValue(value) {
      var _a, _b;
      if (!isEvent(value)) {
          return value;
      }
      var input = value.target;
      if (input.type === 'file' && input.files) {
          return toArray(input.files);
      }
      // If the input has a `v-model.number` modifier applied.
      if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
          // as per the spec the v-model.number uses parseFloat
          var valueAsNumber = parseFloat(input.value);
          if (isNaN$1(valueAsNumber)) {
              return input.value;
          }
          return valueAsNumber;
      }
      if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
          var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
          return trimmedValue;
      }
      return input.value;
  }

  var isTextInput = function (vnode) {
      var _a;
      var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm;
      // it will fallback to being a text input per browsers spec.
      if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
          return true;
      }
      if (vnode.tag === 'textarea') {
          return true;
      }
      return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
  };
  // export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
  //   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
  //   return includes(['radio', 'checkbox'], attrs && attrs.type);
  // };
  // Gets the model object on the vnode.
  function findModel(vnode) {
      if (!vnode.data) {
          return undefined;
      }
      // Component Model
      // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
      // eslint-disable-next-line
      var nonStandardVNodeData = vnode.data;
      if ('model' in nonStandardVNodeData) {
          return nonStandardVNodeData.model;
      }
      if (!vnode.data.directives) {
          return undefined;
      }
      return find(vnode.data.directives, function (d) { return d.name === 'model'; });
  }
  function findValue(vnode) {
      var _a, _b;
      var model = findModel(vnode);
      if (model) {
          return { value: model.value };
      }
      var config = findModelConfig(vnode);
      var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';
      if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
          var propsDataWithValue = vnode.componentOptions.propsData;
          return { value: propsDataWithValue[prop] };
      }
      if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
          return { value: vnode.data.domProps.value };
      }
      return undefined;
  }
  function extractChildren(vnode) {
      if (Array.isArray(vnode)) {
          return vnode;
      }
      if (Array.isArray(vnode.children)) {
          return vnode.children;
      }
      /* istanbul ignore next */
      if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
          return vnode.componentOptions.children;
      }
      return [];
  }
  function findInputNodes(vnode) {
      if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
          return [vnode];
      }
      var children = extractChildren(vnode);
      return children.reduce(function (nodes, node) {
          var candidates = findInputNodes(node);
          if (candidates.length) {
              nodes.push.apply(nodes, candidates);
          }
          return nodes;
      }, []);
  }
  // Resolves v-model config if exists.
  function findModelConfig(vnode) {
      /* istanbul ignore next */
      if (!vnode.componentOptions)
          return null;
      // This is also not typed in the standard Vue TS.
      return vnode.componentOptions.Ctor.options.model;
  }
  // Adds a listener to vnode listener object.
  function mergeVNodeListeners(obj, eventName, handler) {
      // no listener at all.
      if (isNullOrUndefined(obj[eventName])) {
          obj[eventName] = [handler];
          return;
      }
      // Is an invoker.
      if (isCallable(obj[eventName]) && obj[eventName].fns) {
          var invoker = obj[eventName];
          invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];
          if (!includes(invoker.fns, handler)) {
              invoker.fns.push(handler);
          }
          return;
      }
      if (isCallable(obj[eventName])) {
          var prev = obj[eventName];
          obj[eventName] = [prev];
      }
      if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
          obj[eventName].push(handler);
      }
  }
  // Adds a listener to a native HTML vnode.
  function addNativeNodeListener(node, eventName, handler) {
      /* istanbul ignore next */
      if (!node.data) {
          node.data = {};
      }
      if (isNullOrUndefined(node.data.on)) {
          node.data.on = {};
      }
      mergeVNodeListeners(node.data.on, eventName, handler);
  }
  // Adds a listener to a Vue component vnode.
  function addComponentNodeListener(node, eventName, handler) {
      /* istanbul ignore next */
      if (!node.componentOptions) {
          return;
      }
      /* istanbul ignore next */
      if (!node.componentOptions.listeners) {
          node.componentOptions.listeners = {};
      }
      mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
  }
  function addVNodeListener(vnode, eventName, handler) {
      if (vnode.componentOptions) {
          addComponentNodeListener(vnode, eventName, handler);
          return;
      }
      addNativeNodeListener(vnode, eventName, handler);
  }
  // Determines if `change` should be used over `input` for listeners.
  function getInputEventName(vnode, model) {
      var _a;
      // Is a component.
      if (vnode.componentOptions) {
          var event_1 = (findModelConfig(vnode) || { event: 'input' }).event;
          return event_1;
      }
      // Lazy Models typically use change event
      if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
          return 'change';
      }
      // is a textual-type input.
      if (isTextInput(vnode)) {
          return 'input';
      }
      return 'change';
  }
  function isHTMLNode(node) {
      return includes(['input', 'select', 'textarea'], node.tag);
  }
  // TODO: Type this one properly.
  function normalizeSlots(slots, ctx) {
      var acc = [];
      return Object.keys(slots).reduce(function (arr, key) {
          slots[key].forEach(function (vnode) {
              if (!vnode.context) {
                  slots[key].context = ctx;
                  if (!vnode.data) {
                      vnode.data = {};
                  }
                  vnode.data.slot = key;
              }
          });
          return arr.concat(slots[key]);
      }, acc);
  }
  function resolveTextualRules(vnode) {
      var _a;
      var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
      var rules = {};
      if (!attrs)
          return rules;
      if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
          rules.email = ['multiple' in attrs];
      }
      if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
          rules.regex = attrs.pattern;
      }
      if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
          rules.max = attrs.maxlength;
      }
      if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
          rules.min = attrs.minlength;
      }
      if (attrs.type === 'number') {
          if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
              rules.min_value = Number(attrs.min);
          }
          if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
              rules.max_value = Number(attrs.max);
          }
      }
      return rules;
  }
  function resolveRules(vnode) {
      var _a;
      var htmlTags = ['input', 'select', 'textarea'];
      var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
      if (!includes(htmlTags, vnode.tag) || !attrs) {
          return {};
      }
      var rules = {};
      if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
          rules.required = attrs.type === 'checkbox' ? [true] : true;
      }
      if (isTextInput(vnode)) {
          return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
      }
      return normalizeRules(rules);
  }
  function normalizeChildren(context, slotProps) {
      if (context.$scopedSlots.default) {
          return context.$scopedSlots.default(slotProps) || [];
      }
      return context.$slots.default || [];
  }

  /**
   * Determines if a provider needs to run validation.
   */
  function shouldValidate(ctx, value) {
      // when an immediate/initial validation is needed and wasn't done before.
      if (!ctx._ignoreImmediate && ctx.immediate) {
          return true;
      }
      // when the value changes for whatever reason.
      if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
          return true;
      }
      // when it needs validation due to props/cross-fields changes.
      if (ctx._needsValidation) {
          return true;
      }
      // when the initial value is undefined and the field wasn't rendered yet.
      if (!ctx.initialized && value === undefined) {
          return true;
      }
      return false;
  }
  function createValidationCtx(ctx) {
      return __assign(__assign({}, ctx.flags), { errors: ctx.errors, classes: ctx.classes, failedRules: ctx.failedRules, reset: function () { return ctx.reset(); }, validate: function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return ctx.validate.apply(ctx, args);
          }, ariaInput: {
              'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
              'aria-required': ctx.isRequired ? 'true' : 'false',
              'aria-errormessage': "vee_" + ctx.id
          }, ariaMsg: {
              id: "vee_" + ctx.id,
              'aria-live': ctx.errors.length ? 'assertive' : 'off'
          } });
  }
  function onRenderUpdate(vm, value) {
      if (!vm.initialized) {
          vm.initialValue = value;
      }
      var validateNow = shouldValidate(vm, value);
      vm._needsValidation = false;
      vm.value = value;
      vm._ignoreImmediate = true;
      if (!validateNow) {
          return;
      }
      var validate = function () {
          if (vm.immediate || vm.flags.validated) {
              return triggerThreadSafeValidation(vm);
          }
          vm.validateSilent();
      };
      if (vm.initialized) {
          validate();
          return;
      }
      vm.$once('hook:mounted', function () { return validate(); });
  }
  function computeModeSetting(ctx) {
      var compute = (isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode]);
      return compute(ctx);
  }
  function triggerThreadSafeValidation(vm) {
      var pendingPromise = vm.validateSilent();
      // avoids race conditions between successive validations.
      vm._pendingValidation = pendingPromise;
      return pendingPromise.then(function (result) {
          if (pendingPromise === vm._pendingValidation) {
              vm.applyResult(result);
              vm._pendingValidation = undefined;
          }
          return result;
      });
  }
  // Creates the common handlers for a validatable context.
  function createCommonHandlers(vm) {
      if (!vm.$veeOnInput) {
          vm.$veeOnInput = function (e) {
              vm.syncValue(e); // track and keep the value updated.
              vm.setFlags({ dirty: true, pristine: false });
          };
      }
      var onInput = vm.$veeOnInput;
      if (!vm.$veeOnBlur) {
          vm.$veeOnBlur = function () {
              vm.setFlags({ touched: true, untouched: false });
          };
      }
      // Blur event listener.
      var onBlur = vm.$veeOnBlur;
      var onValidate = vm.$veeHandler;
      var mode = computeModeSetting(vm);
      // Handle debounce changes.
      if (!onValidate || vm.$veeDebounce !== vm.debounce) {
          onValidate = debounce(function () {
              vm.$nextTick(function () {
                  if (!vm._pendingReset) {
                      triggerThreadSafeValidation(vm);
                  }
                  vm._pendingReset = false;
              });
          }, mode.debounce || vm.debounce);
          // Cache the handler so we don't create it each time.
          vm.$veeHandler = onValidate;
          // cache the debounce value so we detect if it was changed.
          vm.$veeDebounce = vm.debounce;
      }
      return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
  }
  // Adds all plugin listeners to the vnode.
  function addListeners(vm, node) {
      var value = findValue(node);
      // cache the input eventName.
      vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
      onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);
      var _a = createCommonHandlers(vm), onInput = _a.onInput, onBlur = _a.onBlur, onValidate = _a.onValidate;
      addVNodeListener(node, vm._inputEventName, onInput);
      addVNodeListener(node, 'blur', onBlur);
      // add the validation listeners.
      vm.normalizedEvents.forEach(function (evt) {
          addVNodeListener(node, evt, onValidate);
      });
      vm.initialized = true;
  }

  var PROVIDER_COUNTER = 0;
  function data$1() {
      var errors = [];
      var fieldName = '';
      var defaultValues = {
          errors: errors,
          value: undefined,
          initialized: false,
          initialValue: undefined,
          flags: createFlags(),
          failedRules: {},
          isActive: true,
          fieldName: fieldName,
          id: ''
      };
      return defaultValues;
  }
  var ValidationProvider = Vue__default['default'].extend({
      name: 'ValidationProvider',
      inject: {
          $_veeObserver: {
              from: '$_veeObserver',
              default: function () {
                  if (!this.$vnode.context.$_veeObserver) {
                      this.$vnode.context.$_veeObserver = createObserver();
                  }
                  return this.$vnode.context.$_veeObserver;
              }
          }
      },
      props: {
          vid: {
              type: String,
              default: ''
          },
          name: {
              type: String,
              default: null
          },
          mode: {
              type: [String, Function],
              default: function () {
                  return getConfig().mode;
              }
          },
          rules: {
              type: [Object, String],
              default: null
          },
          immediate: {
              type: Boolean,
              default: false
          },
          bails: {
              type: Boolean,
              default: function () { return getConfig().bails; }
          },
          skipIfEmpty: {
              type: Boolean,
              default: function () { return getConfig().skipOptional; }
          },
          debounce: {
              type: Number,
              default: 0
          },
          tag: {
              type: String,
              default: 'span'
          },
          slim: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          },
          customMessages: {
              type: Object,
              default: function () {
                  return {};
              }
          },
          detectInput: {
              type: Boolean,
              default: true
          }
      },
      watch: {
          rules: {
              deep: true,
              handler: function (val, oldVal) {
                  this._needsValidation = !fastDeepEqual(val, oldVal);
              }
          }
      },
      data: data$1,
      computed: {
          fieldDeps: function () {
              var _this = this;
              return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
                  var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) {
                      return isLocator(dep) ? dep.__locatorRef : dep.slice(1);
                  });
                  acc.push.apply(acc, deps);
                  deps.forEach(function (depName) {
                      watchCrossFieldDep(_this, depName);
                  });
                  return acc;
              }, []);
          },
          normalizedEvents: function () {
              var _this = this;
              var on = computeModeSetting(this).on;
              return (on || []).map(function (e) {
                  if (e === 'input') {
                      return _this._inputEventName;
                  }
                  return e;
              });
          },
          isRequired: function () {
              var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
              var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
              this.flags.required = !!isRequired;
              return isRequired;
          },
          classes: function () {
              var names = getConfig().classes;
              return computeClassObj(names, this.flags);
          },
          normalizedRules: function () {
              return normalizeRules(this.rules);
          }
      },
      mounted: function () {
          var _this = this;
          var onLocaleChanged = function () {
              if (!_this.flags.validated) {
                  return;
              }
              var regenerateMap = _this._regenerateMap;
              if (regenerateMap) {
                  var errors_1 = [];
                  var failedRules_1 = {};
                  Object.keys(regenerateMap).forEach(function (rule) {
                      var msg = regenerateMap[rule]();
                      errors_1.push(msg);
                      failedRules_1[rule] = msg;
                  });
                  _this.applyResult({ errors: errors_1, failedRules: failedRules_1, regenerateMap: regenerateMap });
                  return;
              }
              _this.validate();
          };
          EVENT_BUS.$on('change:locale', onLocaleChanged);
          this.$on('hook:beforeDestroy', function () {
              EVENT_BUS.$off('change:locale', onLocaleChanged);
          });
      },
      render: function (h) {
          var _this = this;
          this.registerField();
          var ctx = createValidationCtx(this);
          var children = normalizeChildren(this, ctx);
          // Automatic v-model detection
          if (this.detectInput) {
              var inputs = findInputNodes(children);
              if (inputs.length) {
                  inputs.forEach(function (input, idx) {
                      var _a, _b, _c, _d, _e, _f;
                      // If the elements are not checkboxes and there are more input nodes
                      if (!includes(['checkbox', 'radio'], (_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.type) && idx > 0) {
                          return;
                      }
                      var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};
                      if (!fastDeepEqual(_this._resolvedRules, resolved)) {
                          _this._needsValidation = true;
                      }
                      if (isHTMLNode(input)) {
                          _this.fieldName = ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.name) || ((_f = (_e = input.data) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.id);
                      }
                      _this._resolvedRules = resolved;
                      addListeners(_this, input);
                  });
              }
          }
          return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
      },
      beforeDestroy: function () {
          // cleanup reference.
          this.$_veeObserver.unobserve(this.id);
      },
      activated: function () {
          this.isActive = true;
      },
      deactivated: function () {
          this.isActive = false;
      },
      methods: {
          setFlags: function (flags) {
              var _this = this;
              Object.keys(flags).forEach(function (flag) {
                  _this.flags[flag] = flags[flag];
              });
          },
          syncValue: function (v) {
              var value = normalizeEventValue(v);
              this.value = value;
              this.flags.changed = !fastDeepEqual(this.initialValue, value);
          },
          reset: function () {
              var _this = this;
              this.errors = [];
              this.initialValue = this.value;
              var flags = createFlags();
              flags.required = this.isRequired;
              this.setFlags(flags);
              this.failedRules = {};
              this.validateSilent();
              this._pendingValidation = undefined;
              this._pendingReset = true;
              setTimeout(function () {
                  _this._pendingReset = false;
              }, this.debounce);
          },
          validate: function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                      if (args.length > 0) {
                          this.syncValue(args[0]);
                      }
                      return [2 /*return*/, triggerThreadSafeValidation(this)];
                  });
              });
          },
          validateSilent: function () {
              return __awaiter(this, void 0, void 0, function () {
                  var rules, result;
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0:
                              this.setFlags({ pending: true });
                              rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                              Object.defineProperty(rules, '_$$isNormalized', {
                                  value: true,
                                  writable: false,
                                  enumerable: false,
                                  configurable: false
                              });
                              return [4 /*yield*/, validate(this.value, rules, __assign(__assign({ name: this.name || this.fieldName }, createLookup(this)), { bails: this.bails, skipIfEmpty: this.skipIfEmpty, isInitial: !this.initialized, customMessages: this.customMessages }))];
                          case 1:
                              result = _a.sent();
                              this.setFlags({
                                  pending: false,
                                  valid: result.valid,
                                  invalid: !result.valid
                              });
                              if (result.required !== undefined) {
                                  this.setFlags({
                                      required: result.required
                                  });
                              }
                              return [2 /*return*/, result];
                      }
                  });
              });
          },
          setErrors: function (errors) {
              this.applyResult({ errors: errors, failedRules: {} });
          },
          applyResult: function (_a) {
              var errors = _a.errors, failedRules = _a.failedRules, regenerateMap = _a.regenerateMap;
              this.errors = errors;
              this._regenerateMap = regenerateMap;
              this.failedRules = __assign({}, (failedRules || {}));
              this.setFlags({
                  valid: !errors.length,
                  passed: !errors.length,
                  invalid: !!errors.length,
                  failed: !!errors.length,
                  validated: true,
                  changed: !fastDeepEqual(this.value, this.initialValue)
              });
          },
          registerField: function () {
              updateRenderingContextRefs(this);
          },
          checkComputesRequiredState: function () {
              var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
              var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
              return isRequired;
          }
      }
  });
  function computeClassObj(names, flags) {
      var acc = {};
      var keys = Object.keys(flags);
      var length = keys.length;
      var _loop_1 = function (i) {
          var flag = keys[i];
          var className = (names && names[flag]) || flag;
          var value = flags[flag];
          if (isNullOrUndefined(value)) {
              return "continue";
          }
          if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
              return "continue";
          }
          if (typeof className === 'string') {
              acc[className] = value;
          }
          else if (Array.isArray(className)) {
              className.forEach(function (cls) {
                  acc[cls] = value;
              });
          }
      };
      for (var i = 0; i < length; i++) {
          _loop_1(i);
      }
      return acc;
  }
  function createLookup(vm) {
      var providers = vm.$_veeObserver.refs;
      var reduced = {
          names: {},
          values: {}
      };
      return vm.fieldDeps.reduce(function (acc, depName) {
          if (!providers[depName]) {
              return acc;
          }
          acc.values[depName] = providers[depName].value;
          acc.names[depName] = providers[depName].name;
          return acc;
      }, reduced);
  }
  function extractId(vm) {
      if (vm.vid) {
          return vm.vid;
      }
      if (vm.name) {
          return vm.name;
      }
      if (vm.id) {
          return vm.id;
      }
      if (vm.fieldName) {
          return vm.fieldName;
      }
      PROVIDER_COUNTER++;
      return "_vee_" + PROVIDER_COUNTER;
  }
  function updateRenderingContextRefs(vm) {
      var providedId = extractId(vm);
      var id = vm.id;
      // Nothing has changed.
      if (!vm.isActive || (id === providedId && vm.$_veeObserver.refs[id])) {
          return;
      }
      // vid was changed.
      if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
          vm.$_veeObserver.unobserve(id);
      }
      vm.id = providedId;
      vm.$_veeObserver.observe(vm);
  }
  function createObserver() {
      return {
          refs: {},
          observe: function (vm) {
              this.refs[vm.id] = vm;
          },
          unobserve: function (id) {
              delete this.refs[id];
          }
      };
  }
  function watchCrossFieldDep(ctx, depName, withHooks) {
      if (withHooks === void 0) { withHooks = true; }
      var providers = ctx.$_veeObserver.refs;
      if (!ctx._veeWatchers) {
          ctx._veeWatchers = {};
      }
      if (!providers[depName] && withHooks) {
          return ctx.$once('hook:mounted', function () {
              watchCrossFieldDep(ctx, depName, false);
          });
      }
      if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
          ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
              var isComputesRequired = ctx.checkComputesRequiredState();
              if (ctx.flags.validated) {
                  ctx._needsValidation = true;
                  ctx.validate();
              }
              // Validate dependent field silently if it has rules with computesRequired
              if (isComputesRequired && !ctx.flags.validated) {
                  ctx.validateSilent();
              }
          });
      }
  }

  var FLAGS_STRATEGIES = [
      ['pristine', 'every'],
      ['dirty', 'some'],
      ['touched', 'some'],
      ['untouched', 'every'],
      ['valid', 'every'],
      ['invalid', 'some'],
      ['pending', 'some'],
      ['validated', 'every'],
      ['changed', 'some'],
      ['passed', 'every'],
      ['failed', 'some']
  ];
  var OBSERVER_COUNTER = 0;
  function data() {
      var refs = {};
      var errors = {};
      var flags = createObserverFlags();
      var fields = {};
      // FIXME: Not sure of this one can be typed, circular type reference.
      var observers = [];
      return {
          id: '',
          refs: refs,
          observers: observers,
          errors: errors,
          flags: flags,
          fields: fields
      };
  }
  function provideSelf() {
      return {
          $_veeObserver: this
      };
  }
  var ValidationObserver = Vue__default['default'].extend({
      name: 'ValidationObserver',
      provide: provideSelf,
      inject: {
          $_veeObserver: {
              from: '$_veeObserver',
              default: function () {
                  if (!this.$vnode.context.$_veeObserver) {
                      return null;
                  }
                  return this.$vnode.context.$_veeObserver;
              }
          }
      },
      props: {
          tag: {
              type: String,
              default: 'span'
          },
          vid: {
              type: String,
              default: function () {
                  return "obs_" + OBSERVER_COUNTER++;
              }
          },
          slim: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          }
      },
      data: data,
      created: function () {
          var _this = this;
          this.id = this.vid;
          register(this);
          var onChange = debounce(function (_a) {
              var errors = _a.errors, flags = _a.flags, fields = _a.fields;
              _this.errors = errors;
              _this.flags = flags;
              _this.fields = fields;
          }, 16);
          this.$watch(computeObserverState, onChange);
      },
      activated: function () {
          register(this);
      },
      deactivated: function () {
          unregister(this);
      },
      beforeDestroy: function () {
          unregister(this);
      },
      render: function (h) {
          var children = normalizeChildren(this, prepareSlotProps(this));
          return this.slim && children.length <= 1 ? children[0] : h(this.tag, { on: this.$listeners }, children);
      },
      methods: {
          observe: function (subscriber, kind) {
              var _a;
              if (kind === void 0) { kind = 'provider'; }
              if (kind === 'observer') {
                  this.observers.push(subscriber);
                  return;
              }
              this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
          },
          unobserve: function (id, kind) {
              if (kind === void 0) { kind = 'provider'; }
              if (kind === 'provider') {
                  var provider = this.refs[id];
                  if (!provider) {
                      return;
                  }
                  this.$delete(this.refs, id);
                  return;
              }
              var idx = findIndex(this.observers, function (o) { return o.id === id; });
              if (idx !== -1) {
                  this.observers.splice(idx, 1);
              }
          },
          validateWithInfo: function (_a) {
              var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
              return __awaiter(this, void 0, void 0, function () {
                  var results, isValid, _c, errors, flags, fields;
                  return __generator(this, function (_d) {
                      switch (_d.label) {
                          case 0: return [4 /*yield*/, Promise.all(__spreadArrays(values(this.refs)
                                  .filter(function (r) { return !r.disabled; })
                                  .map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }), this.observers.filter(function (o) { return !o.disabled; }).map(function (obs) { return obs.validate({ silent: silent }); })))];
                          case 1:
                              results = _d.sent();
                              isValid = results.every(function (r) { return r; });
                              _c = computeObserverState.call(this), errors = _c.errors, flags = _c.flags, fields = _c.fields;
                              this.errors = errors;
                              this.flags = flags;
                              this.fields = fields;
                              return [2 /*return*/, {
                                      errors: errors,
                                      flags: flags,
                                      fields: fields,
                                      isValid: isValid
                                  }];
                      }
                  });
              });
          },
          validate: function (_a) {
              var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
              return __awaiter(this, void 0, void 0, function () {
                  var isValid;
                  return __generator(this, function (_c) {
                      switch (_c.label) {
                          case 0: return [4 /*yield*/, this.validateWithInfo({ silent: silent })];
                          case 1:
                              isValid = (_c.sent()).isValid;
                              return [2 /*return*/, isValid];
                      }
                  });
              });
          },
          handleSubmit: function (cb) {
              return __awaiter(this, void 0, void 0, function () {
                  var isValid;
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0: return [4 /*yield*/, this.validate()];
                          case 1:
                              isValid = _a.sent();
                              if (!isValid || !cb) {
                                  return [2 /*return*/];
                              }
                              return [2 /*return*/, cb()];
                      }
                  });
              });
          },
          reset: function () {
              return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) { return ref.reset(); });
          },
          setErrors: function (errors) {
              var _this = this;
              Object.keys(errors).forEach(function (key) {
                  var provider = _this.refs[key];
                  if (!provider)
                      return;
                  var errorArr = errors[key] || [];
                  errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
                  provider.setErrors(errorArr);
              });
              this.observers.forEach(function (observer) {
                  observer.setErrors(errors);
              });
          }
      }
  });
  function unregister(vm) {
      if (vm.$_veeObserver) {
          vm.$_veeObserver.unobserve(vm.id, 'observer');
      }
  }
  function register(vm) {
      if (vm.$_veeObserver) {
          vm.$_veeObserver.observe(vm, 'observer');
      }
  }
  function prepareSlotProps(vm) {
      return __assign(__assign({}, vm.flags), { errors: vm.errors, fields: vm.fields, validate: vm.validate, validateWithInfo: vm.validateWithInfo, passes: vm.handleSubmit, handleSubmit: vm.handleSubmit, reset: vm.reset });
  }
  // Creates a modified version of validation flags
  function createObserverFlags() {
      return __assign(__assign({}, createFlags()), { valid: true, invalid: false });
  }
  function computeObserverState() {
      var vms = __spreadArrays(values(this.refs), this.observers.filter(function (o) { return !o.disabled; }));
      var errors = {};
      var flags = createObserverFlags();
      var fields = {};
      var length = vms.length;
      for (var i = 0; i < length; i++) {
          var vm = vms[i];
          // validation provider
          if (Array.isArray(vm.errors)) {
              errors[vm.id] = vm.errors;
              fields[vm.id] = __assign({ id: vm.id, name: vm.name, failedRules: vm.failedRules }, vm.flags);
              continue;
          }
          // Nested observer, merge errors and fields
          errors = __assign(__assign({}, errors), vm.errors);
          fields = __assign(__assign({}, fields), vm.fields);
      }
      FLAGS_STRATEGIES.forEach(function (_a) {
          var flag = _a[0], method = _a[1];
          flags[flag] = vms[method](function (vm) { return vm.flags[flag]; });
      });
      return { errors: errors, flags: flags, fields: fields };
  }

  function withValidation(component, mapProps) {
      var _a;
      if (mapProps === void 0) { mapProps = identity; }
      var options = 'options' in component ? component.options : component;
      var providerOpts = ValidationProvider.options;
      var hoc = {
          name: (options.name || 'AnonymousHoc') + "WithValidation",
          props: __assign({}, providerOpts.props),
          data: providerOpts.data,
          computed: __assign({}, providerOpts.computed),
          methods: __assign({}, providerOpts.methods),
          beforeDestroy: providerOpts.beforeDestroy,
          inject: providerOpts.inject
      };
      var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';
      hoc.render = function (h) {
          var _a;
          this.registerField();
          var vctx = createValidationCtx(this);
          var listeners = __assign({}, this.$listeners);
          var model = findModel(this.$vnode);
          this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
          var value = findValue(this.$vnode);
          onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);
          var _b = createCommonHandlers(this), onInput = _b.onInput, onBlur = _b.onBlur, onValidate = _b.onValidate;
          mergeVNodeListeners(listeners, eventName, onInput);
          mergeVNodeListeners(listeners, 'blur', onBlur);
          this.normalizedEvents.forEach(function (evt) {
              mergeVNodeListeners(listeners, evt, onValidate);
          });
          // Props are any attrs not associated with ValidationProvider Plus the model prop.
          // WARNING: Accidental prop overwrite will probably happen.
          var prop = (findModelConfig(this.$vnode) || { prop: 'value' }).prop;
          var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));
          return h(options, {
              attrs: this.$attrs,
              props: props,
              on: listeners,
              scopedSlots: this.$scopedSlots
          }, normalizeSlots(this.$slots, this.$vnode.context));
      };
      return hoc;
  }

  var version = '3.4.14';
  // Install all rules.
  var RulesAsList = Object.keys(Rules).map(function (key) { return ({ schema: Rules[key], name: key }); });
  RulesAsList.forEach(function (_a) {
      var name = _a.name, schema = _a.schema;
      extend(name, schema);
  });
  // Install locale
  localize('en', en$1);

  exports.Rules = Rules;
  exports.ValidationObserver = ValidationObserver;
  exports.ValidationProvider = ValidationProvider;
  exports.configure = configure;
  exports.extend = extend;
  exports.localeChanged = localeChanged;
  exports.localize = localize;
  exports.normalizeRules = normalizeRules;
  exports.setInteractionMode = setInteractionMode;
  exports.validate = validate;
  exports.version = version;
  exports.withValidation = withValidation;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/vue-country-flag/dist/country-flag.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-country-flag/dist/country-flag.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".flag{width:52px;height:39px;display:inline-block;background:url(data:image/png;base64,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RjzNSy/9hKK4I/rduwsoLKzGanU0pDeiKDTtWLPveYayT5YQ/bfZrE87nRunz6emxtomezebbVx99fusXLmPN9+8gug5swgYM4yDN9xH/aw5QFqTfdLTY/njj/tYsGAd99//FQ89tJivv96KRiPidMoAbN2aC8Abb6zk3Xf/YPjwRPLyKtm06WF27SrgppsWUF9/3AGJOyfNovKHlSS//yLPlsdw+ewP2gxzTBRF4b33/mDkyGfYvbsQvyEDGLjqU4LPntDUmWhEzjorjYAAAwMGxJCeHsvXX7sj+mMwfz52XZ2N9euzee65vzB4cBz9+0fzZwMS4KZumVQYFRVISUktN954OgsXbmhSlziVvPPOVbz++gosFjtZWWXHEzw47fGuBJEkkYEDY7nvvrPJyirlxx93Y7M523yc1av3k5tbycUXDzva9szdE/q4XDITJqQyZ84EPv/8JtLSYtp1nNpaG3fdNZU33ricn366o6FcoOkOcysqquGNN1ZSV2dj586CdrfXBQvWc9VVYygoqOLnn/d0Xxvy89NTV2cjIMBAba213ceJiAigurqe8HB/CgurURSle6LtO++cwrhxKaSmRnYsVRAFzj13IPfee1b3pQ8XXDCE668fz6pVd5OX17F6XUlJLc8+ezE33ZTBtdeORZLErvdyBw6UMHhwPPv3l1BWZubAgZJ2H2vUqF6IooggCDz//I/U1NR3TxsaOjSBbdtyG6J8i6XtdTutVsLplFEUhSFD4tm+Pa97+iGA4uJannvuL1x00VAOH66gqKimzccIDjbx3HMX07dvFCtW7G0IoLstBU9JieDWWydy000Z+Pnp27SvXq/h5psncNttk5k5cwR1dfbuixQAoqMDKS01ExMTxI03LqCuzoa/vwG7vXURQ1RUIGvXZjFmTG++/HIrlZV1lJfXdW8sB5CUFEZoqIkRI3pRWFjNd99lnnT79PRY0tJiGDOmN/fd9yV9+kSwb19x46C3Oys0hw+Xk5wcxjvvXEV+fhWzZ9uorLSwa1cBGo2I1epEENyOIzExlLIyMy++OIPo6ECyskqZO3e195WxRFHk/ffXsGzZLlau3Mf48Sls2PAgd945FUVRePbZi/n113sZM6Y3ZrONpUt38t13O5g37/dmk09NdwOtWrWPFSv2EhcXTL9+UUybls7AgXH8/vtBBEHAZnMybFgC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)}.f-and,.f-andorra{background-position:0 -42px}.f-ae,.f-are{background-position:0 -82px}.f-af,.f-afg{background-position:0 -123px}.f-ag,.f-atg{background-position:0 -164px}.f-ai,.f-aia{background-position:0 -205px}.f-al,.f-alb{background-position:0 -246px}.f-am,.f-arm{background-position:0 -287px}.f-an,.f-ant{background-position:0 -328px}.f-ago,.f-ao{background-position:0 -369px}.f-aq,.f-ata{background-position:0 -410px}.f-ar,.f-arg{background-position:0 -451px}.f-as,.f-asm{background-position:0 -492px}.f-at,.f-aut{background-position:0 -533px}.f-au,.f-aus{background-position:0 -574px}.f-abw,.f-aw{background-position:0 -615px}.f-ala,.f-ax{background-position:0 -657px}.f-az,.f-aze{background-position:0 -698px}.f-ba,.f-bih{background-position:0 -738px}.f-bb,.f-brb{background-position:0 -779px}.f-bd,.f-bgd{background-position:0 -820px}.f-be,.f-bel{background-position:0 -861px}.f-bf,.f-bfa{background-position:0 -902px}.f-bg,.f-bgr{background-position:0 -943px}.f-bh,.f-bhr{background-position:0 -984px}.f-bdi,.f-bi{background-position:0 -1025px}.f-ben,.f-bj{background-position:0 -1067px}.f-bl,.f-blm{background-position:0 -1107px}.f-bm,.f-bmu{background-position:0 -1148px}.f-bn,.f-brn{background-position:0 -1189px}.f-bo,.f-bol{background-position:0 -1230px}.f-bes,.f-bq{background-position:0 -1272px}.f-br,.f-bra{background-position:0 -1312px}.f-bhs,.f-bs{background-position:0 -1353px}.f-bt,.f-btn{background-position:0 -1394px}.f-bv,.f-bvt{background-position:0 -1435px}.f-bw,.f-bwa{background-position:0 -1477px}.f-blr,.f-by{background-position:0 -1517px}.f-blz,.f-bz{background-position:0 -1558px}.f-ca,.f-can{background-position:0 -1599px}.f-cc,.f-cck{background-position:0 -1640px}.f-cd,.f-cod{background-position:0 -1681px}.f-caf,.f-cf{background-position:0 -1722px}.f-cg,.f-cog{background-position:0 -1763px}.f-ch,.f-che{background-position:0 -1804px}.f-ci,.f-civ{background-position:0 -1845px}.f-ck,.f-cok{background-position:0 -1886px}.f-chl,.f-cl{background-position:0 -1927px}.f-cm,.f-cmr{background-position:0 -1968px}.f-chn,.f-cn{background-position:0 -2009px}.f-co,.f-col{background-position:0 -2050px}.f-cr,.f-cri{background-position:0 -2091px}.f-cu,.f-cub{background-position:0 -2132px}.f-cpv,.f-cv{background-position:0 -2173px}.f-cuw,.f-cw{background-position:0 -2214px}.f-cx,.f-cxr{background-position:0 -2255px}.f-cy,.f-cyp{background-position:0 -2296px}.f-cz,.f-cze{background-position:0 -2337px}.f-de,.f-deu{background-position:0 -2377px}.f-dj,.f-dji{background-position:0 -2419px}.f-dk,.f-dnk{background-position:0 -2460px}.f-dm,.f-dma{background-position:0 -2501px}.f-do,.f-dom{background-position:0 -2542px}.f-dz,.f-dza{background-position:0 -2583px}.f-ec,.f-ecu{background-position:0 -2624px}.f-ee,.f-est{background-position:0 -2665px}.f-eg,.f-egy{background-position:0 -2706px}.f-eh,.f-esh{background-position:0 -2747px}.f-er,.f-eri{background-position:0 -2787px}.f-es-ca{background-position:0 -2829px}.f-es,.f-esp{background-position:0 -2870px}.f-et,.f-eth{background-position:0 -2911px}.f-eu{background-position:0 -2953px}.f-fi,.f-fin{background-position:0 -2993px}.f-fj,.f-fji{background-position:0 -3034px}.f-fk,.f-flk{background-position:0 -3075px}.f-fm,.f-fsm{background-position:0 -3116px}.f-fo,.f-fro{background-position:0 -3157px}.f-fr,.f-fra{background-position:0 -3198px}.f-ga,.f-gab{background-position:0 -3239px}.f-gb-eng{background-position:0 -3280px}.f-gb-nir{background-position:0 -3321px}.f-gb-sct{background-position:0 -3362px}.f-gb-wls{background-position:0 -3403px}.f-gb,.f-gbr{background-position:0 -3444px}.f-gd,.f-grd{background-position:0 -3485px}.f-ge,.f-geo{background-position:0 -3526px}.f-gf,.f-guf{background-position:0 -3567px}.f-gg,.f-ggy{background-position:0 -3608px}.f-gh,.f-gha{background-position:0 -3649px}.f-gi,.f-gib{background-position:0 -3690px}.f-gl,.f-grl{background-position:0 -3731px}.f-gm,.f-gmb{background-position:0 -3771px}.f-gin,.f-gn{background-position:0 -3813px}.f-glp,.f-gp{background-position:0 -3854px}.f-gnq,.f-gq{background-position:0 -3895px}.f-gr,.f-grc{background-position:0 -3936px}.f-gs,.f-sgs{background-position:0 -3977px}.f-gt,.f-gtm{background-position:0 -4018px}.f-gu,.f-gum{background-position:0 -4059px}.f-gnb,.f-gw{background-position:0 -4100px}.f-guy,.f-gy{background-position:0 -4141px}.f-hk,.f-hkg{background-position:0 -4182px}.f-hm,.f-hmd{background-position:0 -4223px}.f-hn,.f-hnd{background-position:0 -4264px}.f-hr,.f-hrv{background-position:0 -4305px}.f-ht,.f-hti{background-position:0 -4347px}.f-hu,.f-hun{background-position:0 -4387px}.f-id,.f-idn{background-position:0 -4428px}.f-ie,.f-irl{background-position:0 -4468px}.f-il,.f-isr{background-position:0 -4510px}.f-im,.f-imn{background-position:0 -4551px}.f-in,.f-ind{background-position:0 -4593px}.f-io,.f-iot{background-position:0 -4633px}.f-iq,.f-irq{background-position:0 -4674px}.f-ir,.f-irn{background-position:0 -4715px}.f-is,.f-isl{background-position:0 -4756px}.f-it,.f-ita{background-position:0 -4797px}.f-je,.f-jey{background-position:0 -4838px}.f-jam,.f-jm{background-position:0 -4879px}.f-jo,.f-jor{background-position:0 -4920px}.f-jp,.f-jpn{background-position:0 -4961px}.f-ke,.f-ken{background-position:0 -5002px}.f-kg,.f-kgz{background-position:0 -5043px}.f-kh,.f-khm{background-position:0 -5084px}.f-ki,.f-kir{background-position:0 -5125px}.f-com,.f-km{background-position:0 -5166px}.f-kn,.f-kna{background-position:0 -5207px}.f-kp,.f-prk{background-position:0 -5248px}.f-kor,.f-kr{background-position:0 -5289px}.f-kw,.f-kwt{background-position:0 -5330px}.f-cym,.f-ky{background-position:0 -5371px}.f-kaz,.f-kz{background-position:0 -5412px}.f-la,.f-lao{background-position:0 -5453px}.f-lb,.f-lbn{background-position:0 -5494px}.f-lc,.f-lca{background-position:0 -5535px}.f-li,.f-lie{background-position:0 -5576px}.f-lk,.f-lka{background-position:0 -5617px}.f-lbr,.f-lr{background-position:0 -5658px}.f-ls,.f-lso{background-position:0 -5698px}.f-lt,.f-ltu{background-position:0 -5740px}.f-lu,.f-lux{background-position:0 -5781px}.f-lv,.f-lva{background-position:0 -5822px}.f-lby,.f-ly{background-position:0 -5862px}.f-ma,.f-mar{background-position:0 -5904px}.f-mc,.f-mco{background-position:0 -5945px}.f-md,.f-mda{background-position:0 -5986px}.f-me,.f-mne{background-position:0 -6028px}.f-maf,.f-mf{background-position:0 -6068px}.f-mdg,.f-mg{background-position:0 -6109px}.f-mh,.f-mhl{background-position:0 -6150px}.f-mk,.f-mkd{background-position:0 -6191px}.f-ml,.f-mli{background-position:0 -6233px}.f-mm,.f-mmr{background-position:0 -6273px}.f-mn,.f-mng{background-position:0 -6314px}.f-mac,.f-mo{background-position:0 -6355px}.f-mnp,.f-mp{background-position:0 -6397px}.f-mq,.f-mtq{background-position:0 -6437px}.f-mr,.f-mrt{background-position:0 -6478px}.f-ms,.f-msr{background-position:0 -6519px}.f-mlt,.f-mt{background-position:0 -6560px}.f-mu,.f-mus{background-position:0 -6601px}.f-mdv,.f-mv{background-position:0 -6642px}.f-mw,.f-mwi{background-position:0 -6682px}.f-mex,.f-mx{background-position:0 -6724px}.f-my,.f-mys{background-position:0 -6765px}.f-moz,.f-mz{background-position:0 -6806px}.f-na,.f-nam{background-position:0 -6847px}.f-nc,.f-ncl{background-position:0 -6888px}.f-ne,.f-ner{background-position:0 -6929px}.f-nf,.f-nfk{background-position:0 -6970px}.f-ng,.f-nga{background-position:0 -7011px}.f-ni,.f-nic{background-position:0 -7052px}.f-nl,.f-nld{background-position:0 -7093px}.f-no,.f-nor{background-position:0 -7134px}.f-np,.f-npl{background-position:0 -7175px}.f-nr,.f-nru{background-position:0 -7217px}.f-niu,.f-nu{background-position:0 -7257px}.f-nz,.f-nzl{background-position:0 -7298px}.f-om,.f-omn{background-position:0 -7339px}.f-pa,.f-pan{background-position:0 -7380px}.f-pe,.f-per{background-position:0 -7421px}.f-pf,.f-pyf{background-position:0 -7463px}.f-pg,.f-png{background-position:0 -7503px}.f-ph,.f-phl{background-position:0 -7544px}.f-pak,.f-pk{background-position:0 -7585px}.f-pl,.f-pol{background-position:0 -7626px}.f-pm,.f-spm{background-position:0 -7667px}.f-pcn,.f-pn{background-position:0 -7708px}.f-pr,.f-pri{background-position:0 -7749px}.f-ps,.f-pse{background-position:0 -7790px}.f-prt,.f-pt{background-position:0 -7831px}.f-plw,.f-pw{background-position:0 -7873px}.f-pry,.f-py{background-position:0 -7913px}.f-qa,.f-qat{background-position:0 -7954px}.f-re,.f-reu{background-position:0 -7995px}.f-ro,.f-rou{background-position:0 -8036px}.f-rs,.f-srb{background-position:0 -8077px}.f-ru,.f-rus{background-position:0 -8117px}.f-rw,.f-rwa{background-position:0 -8159px}.f-sa,.f-sau{background-position:0 -8200px}.f-sb,.f-slb{background-position:0 -8241px}.f-sc,.f-syc{background-position:0 -8282px}.f-sd,.f-sdn{background-position:0 -8323px}.f-se,.f-swe{background-position:0 -8364px}.f-sg,.f-sgp{background-position:0 -8405px}.f-sh,.f-shn{background-position:0 -8446px}.f-si,.f-svn{background-position:0 -8487px}.f-sj,.f-sjm{background-position:0 -8528px}.f-sk,.f-svk{background-position:0 -8569px}.f-sl,.f-sle{background-position:0 -8610px}.f-sm,.f-smr{background-position:0 -8651px}.f-sen,.f-sn{background-position:0 -8693px}.f-so,.f-som{background-position:0 -8733px}.f-sr,.f-sur{background-position:0 -8774px}.f-ss,.f-ssd{background-position:0 -8815px}.f-st,.f-stp{background-position:0 -8856px}.f-slv,.f-sv{background-position:0 -8897px}.f-sx,.f-sxm{background-position:0 -8938px}.f-sy,.f-syr{background-position:0 -8979px}.f-swz,.f-sz{background-position:0 -9020px}.f-tc,.f-tca{background-position:0 -9061px}.f-tcd,.f-td{background-position:0 -9102px}.f-atf,.f-tf{background-position:0 -9142px}.f-tg,.f-tgo{background-position:0 -9184px}.f-th,.f-tha{background-position:0 -9225px}.f-tj,.f-tjk{background-position:0 -9266px}.f-tk,.f-tkl{background-position:0 -9307px}.f-tl,.f-tls{background-position:0 -9348px}.f-tkm,.f-tm{background-position:0 -9389px}.f-tn,.f-tun{background-position:0 -9430px}.f-to,.f-ton{background-position:0 -9472px}.f-tr,.f-tur{background-position:0 -9512px}.f-tt,.f-tto{background-position:0 -9552px}.f-tuv,.f-tv{background-position:0 -9594px}.f-tw,.f-twn{background-position:0 -9635px}.f-tz,.f-tza{background-position:0 -9676px}.f-ua,.f-ukr{background-position:0 -9717px}.f-ug,.f-uga{background-position:0 -9757px}.f-um,.f-umi{background-position:0 -9799px}.f-un{background-position:0 -9840px}.f-us,.f-usa{background-position:0 -9881px}.f-ury,.f-uy{background-position:0 -9922px}.f-uz,.f-uzb{background-position:0 -9963px}.f-va,.f-vat{background-position:0 -10004px}.f-vc,.f-vct{background-position:0 -10045px}.f-ve,.f-ven{background-position:0 -10086px}.f-vg,.f-vgb{background-position:0 -10127px}.f-vi,.f-vir{background-position:0 -10168px}.f-vn,.f-vnm{background-position:0 -10209px}.f-vu,.f-vut{background-position:0 -10250px}.f-wf,.f-wlf{background-position:0 -10291px}.f-ws,.f-wsm{background-position:0 -10331px}.f-xk{background-position:0 -10373px}.f-ye,.f-yem{background-position:0 -10414px}.f-myt,.f-yt{background-position:0 -10455px}.f-za,.f-zaf{background-position:0 -10496px}.f-zm,.f-zmb{background-position:0 -10538px}.f-zw,.f-zwe{background-position:0 -10578px}.f-su,.f-sun{background-position:0 -10619px;height:26px}";
styleInject(css_248z);

//
var script = {
  name: 'CountryFlag',
  props: {
    country: {
      type: String,
      required: true
    },
    rounded: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return value === 'small' || value === 'normal' || value === 'big';
      },
      default: 'normal'
    },
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    flagIconClass() {
      return {
        [`flag ${this.flagIconCountry}`]: true,
        [`rounded`]: this.rounded,
        [`shadow`]: this.shadow,
        [this.flagMargin]: true
      };
    },

    flagIconCountry() {
      let country = this.country.toLowerCase();
      country = country === 'ad' ? 'andorra' : country;
      return `f-${country}`;
    },

    flagMargin() {
      switch (this.size) {
        case 'small':
          return 'small-flag';

        case 'normal':
          return 'normal-flag';

        case 'big':
          return 'big-flag';

        default:
          return 'normal-flag';
      }
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.country ? _c('span', {
    class: _vm.flagIconClass
  }) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-e8c23852_0", {
    source: ".small-flag[data-v-e8c23852]{margin:-.9em -1.2em -.9em -1.2em;transform:scale(.25);-ms-transform:scale(.25);-webkit-transform:scale(.25);-moz-transform:scale(.25)}.normal-flag[data-v-e8c23852]{margin:0 -.9em -.6em -.7em;transform:scale(.5);-ms-transform:scale(.5);-webkit-transform:scale(.5);-moz-transform:scale(.5)}.big-flag[data-v-e8c23852]{margin:0}.small-flag.rounded[data-v-e8c23852]{-moz-border-radius:15px;border-radius:15px}.normal-flag.rounded[data-v-e8c23852]{-moz-border-radius:10px;border-radius:10px}.big-flag.rounded[data-v-e8c23852]{-moz-border-radius:8px;border-radius:8px}.small-flag.shadow[data-v-e8c23852]{-webkit-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);-moz-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%)}.normal-flag.shadow[data-v-e8c23852]{-webkit-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);-moz-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%)}.big-flag.shadow[data-v-e8c23852]{-webkit-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);-moz-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-e8c23852";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('CountryFlag', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entry_esm);


/***/ }),

/***/ "./resources/js/components/Icons/VueFolderTeamIcon.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Icons/VueFolderTeamIcon.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VueFolderTeamIcon_vue_vue_type_template_id_1325233a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueFolderTeamIcon.vue?vue&type=template&id=1325233a& */ "./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=template&id=1325233a&");
/* harmony import */ var _VueFolderTeamIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueFolderTeamIcon.vue?vue&type=script&lang=js& */ "./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VueFolderTeamIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueFolderTeamIcon_vue_vue_type_template_id_1325233a___WEBPACK_IMPORTED_MODULE_0__.render,
  _VueFolderTeamIcon_vue_vue_type_template_id_1325233a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Icons/VueFolderTeamIcon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&");
/* harmony import */ var _IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11c30cfd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&");
/* harmony import */ var _IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b1f961a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexPage/IndexPageFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/AuthPages/AuthContent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Layout/AuthPages/AuthContent.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthContent_vue_vue_type_template_id_cdb819b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContent.vue?vue&type=template&id=cdb819b8& */ "./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=template&id=cdb819b8&");
/* harmony import */ var _AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContent.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthContent_vue_vue_type_template_id_cdb819b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthContent_vue_vue_type_template_id_cdb819b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/AuthPages/AuthContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthContentWrapper_vue_vue_type_template_id_fa02b102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=template&id=fa02b102& */ "./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=template&id=fa02b102&");
/* harmony import */ var _AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthContentWrapper_vue_vue_type_template_id_fa02b102___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthContentWrapper_vue_vue_type_template_id_fa02b102___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/AuthPages/AuthContentWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcher.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcher.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LanguageSwitcher_vue_vue_type_template_id_b4841eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true& */ "./resources/js/components/Others/LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true&");
/* harmony import */ var _LanguageSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageSwitcher.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/LanguageSwitcher.vue?vue&type=script&lang=js&");
/* harmony import */ var _LanguageSwitcher_vue_vue_type_style_index_0_id_b4841eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true& */ "./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LanguageSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LanguageSwitcher_vue_vue_type_template_id_b4841eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LanguageSwitcher_vue_vue_type_template_id_b4841eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b4841eec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/LanguageSwitcher.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcherFooter.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcherFooter.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LanguageSwitcherFooter_vue_vue_type_template_id_35967f45_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true& */ "./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true&");
/* harmony import */ var _LanguageSwitcherFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageSwitcherFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _LanguageSwitcherFooter_vue_vue_type_style_index_0_id_35967f45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true& */ "./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LanguageSwitcherFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LanguageSwitcherFooter_vue_vue_type_template_id_35967f45_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LanguageSwitcherFooter_vue_vue_type_template_id_35967f45_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "35967f45",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/LanguageSwitcherFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&");
/* harmony import */ var _AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "97e201b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Buttons/AuthButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Labels/LogoHeadline.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/UI/Labels/LogoHeadline.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogoHeadline_vue_vue_type_template_id_02d93282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoHeadline.vue?vue&type=template&id=02d93282& */ "./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=template&id=02d93282&");
/* harmony import */ var _LogoHeadline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoHeadline.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogoHeadline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogoHeadline_vue_vue_type_template_id_02d93282___WEBPACK_IMPORTED_MODULE_0__.render,
  _LogoHeadline_vue_vue_type_template_id_02d93282___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Labels/LogoHeadline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Teams/Invitation.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Teams/Invitation.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Invitation_vue_vue_type_template_id_d8691c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invitation.vue?vue&type=template&id=d8691c5e& */ "./resources/js/views/Teams/Invitation.vue?vue&type=template&id=d8691c5e&");
/* harmony import */ var _Invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invitation.vue?vue&type=script&lang=js& */ "./resources/js/views/Teams/Invitation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invitation_vue_vue_type_template_id_d8691c5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Invitation_vue_vue_type_template_id_d8691c5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Teams/Invitation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFolderTeamIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VueFolderTeamIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFolderTeamIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthContentWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcher.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcher.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcherFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoHeadline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoHeadline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoHeadline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Teams/Invitation.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Teams/Invitation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invitation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Teams/Invitation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=template&id=1325233a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=template&id=1325233a& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFolderTeamIcon_vue_vue_type_template_id_1325233a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFolderTeamIcon_vue_vue_type_template_id_1325233a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFolderTeamIcon_vue_vue_type_template_id_1325233a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VueFolderTeamIcon.vue?vue&type=template&id=1325233a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Icons/VueFolderTeamIcon.vue?vue&type=template&id=1325233a&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=template&id=cdb819b8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=template&id=cdb819b8& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_template_id_cdb819b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_template_id_cdb819b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_template_id_cdb819b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthContent.vue?vue&type=template&id=cdb819b8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContent.vue?vue&type=template&id=cdb819b8&");


/***/ }),

/***/ "./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=template&id=fa02b102&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=template&id=fa02b102& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_fa02b102___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_fa02b102___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_fa02b102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthContentWrapper.vue?vue&type=template&id=fa02b102& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/AuthPages/AuthContentWrapper.vue?vue&type=template&id=fa02b102&");


/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_template_id_b4841eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_template_id_b4841eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_template_id_b4841eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=template&id=b4841eec&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_template_id_35967f45_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_template_id_35967f45_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_template_id_35967f45_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=template&id=35967f45&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=template&id=97e201b0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=template&id=02d93282&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=template&id=02d93282& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoHeadline_vue_vue_type_template_id_02d93282___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoHeadline_vue_vue_type_template_id_02d93282___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoHeadline_vue_vue_type_template_id_02d93282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoHeadline.vue?vue&type=template&id=02d93282& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/LogoHeadline.vue?vue&type=template&id=02d93282&");


/***/ }),

/***/ "./resources/js/views/Teams/Invitation.vue?vue&type=template&id=d8691c5e&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Teams/Invitation.vue?vue&type=template&id=d8691c5e& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitation_vue_vue_type_template_id_d8691c5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitation_vue_vue_type_template_id_d8691c5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitation_vue_vue_type_template_id_d8691c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invitation.vue?vue&type=template&id=d8691c5e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Teams/Invitation.vue?vue&type=template&id=d8691c5e&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_id_b4841eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcher.vue?vue&type=style&index=0&id=b4841eec&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcherFooter_vue_vue_type_style_index_0_id_35967f45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Others/LanguageSwitcherFooter.vue?vue&type=style&index=0&id=35967f45&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss&");


/***/ })

}]);