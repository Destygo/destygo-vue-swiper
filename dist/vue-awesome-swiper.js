!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("destygo-swiper/dist/js/swiper.js")):"function"==typeof define&&define.amd?define("VueAwesomeSwiper",["swiper"],t):"object"==typeof exports?exports.VueAwesomeSwiper=t(require("destygo-swiper/dist/js/swiper.js")):e.VueAwesomeSwiper=t(e.Swiper)}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"swiper-slide",data:function(){return{slideClass:"destygo_swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent&&this.$parent.options&&this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.update()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(i),s=window.Swiper||r.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},writable:!0,configurable:!0});var o=["beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize"];t.default={name:"swiper",props:{options:{type:Object,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{swiper:null,classes:{wrapperClass:"destygo_swiper-wrapper"}}},ready:function(){this.swiper||this.mountInstance()},mounted:function(){if(!this.swiper){var e=!1;for(var t in this.classes)this.classes.hasOwnProperty(t)&&this.options[t]&&(e=!0,this.classes[t]=this.options[t]);e?this.$nextTick(this.mountInstance):this.mountInstance()}},activated:function(){this.update()},updated:function(){this.update()},beforeDestroy:function(){this.$nextTick(function(){this.swiper&&(this.swiper.destroy&&this.swiper.destroy(),delete this.swiper)})},methods:{update:function(){this.swiper&&(this.swiper.update&&this.swiper.update(),this.swiper.navigation&&this.swiper.navigation.update(),this.swiper.pagination&&this.swiper.pagination.render(),this.swiper.pagination&&this.swiper.pagination.update())},mountInstance:function(){var e=Object.assign({},this.globalOptions,this.options);this.swiper=new s(this.$el,e),this.bindEvents(),this.$emit("ready",this.swiper)},bindEvents:function(){var e=this,t=this;o.forEach(function(n){e.swiper.on(n,function(){t.$emit.apply(t,[n].concat(Array.prototype.slice.call(arguments))),t.$emit.apply(t,[n.replace(/([A-Z])/g,"-$1").toLowerCase()].concat(Array.prototype.slice.call(arguments)))})})}}}},function(e,t){e.exports=function(e,t,n,i,r,s){var o,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,a=e.default);var p="function"==typeof a?a.options:a;t&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0),n&&(p.functional=!0),r&&(p._scopeId=r);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},p._ssrRegister=d):i&&(d=i),d){var l=p.functional,c=l?p.render:p.beforeCreate;l?(p._injectStyles=d,p.render=function(e,t){return d.call(t),c(e,t)}):p.beforeCreate=c?[].concat(c,d):[d]}return{esModule:o,exports:a,options:p}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return i[e]})}(s);var o=n(7),a=n(3),u=a(r.a,o.a,!1,null,null,null);t.default=u.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return i[e]})}(s);var o=n(8),a=n(3),u=a(r.a,o.a,!1,null,null,null);t.default=u.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.swiperSlide=t.swiper=t.Swiper=void 0;var r=n(0),s=i(r),o=n(4),a=i(o),u=n(5),p=i(u),d=window.Swiper||s.default,l=p.default,c=a.default,f=function(e,t){t&&(p.default.props.globalOptions.default=function(){return t}),e.component(p.default.name,p.default),e.component(a.default.name,a.default)},h={Swiper:d,swiper:l,swiperSlide:c,install:f};t.default=h,t.Swiper=d,t.swiper=l,t.swiperSlide=c,t.install=f},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.slideClass},[e._t("default")],2)},r=[],s={render:i,staticRenderFns:r};t.a=s},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"destygo_swiper-container"},[e._t("parallax-bg"),e._v(" "),n("div",{class:e.classes.wrapperClass},[e._t("default")],2),e._v(" "),e._t("pagination"),e._v(" "),e._t("button-prev"),e._v(" "),e._t("button-next"),e._v(" "),e._t("scrollbar")],2)},r=[],s={render:i,staticRenderFns:r};t.a=s}])});