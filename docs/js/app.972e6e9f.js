(function(e){function t(t){for(var i,c,s=t[0],u=t[1],a=t[2],p=0,b=[];p<s.length;p++)c=s[p],r[c]&&b.push(r[c][0]),r[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},o=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-fb-customer-chat/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4d25":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),r=n("0284"),o=n.n(r),c=n("709b"),s=n.n(c),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"branding-wrapper"},[i("Logo"),i("h3",[e._v("Facebook Customer Chat Plugin for Vue.js")]),e._m(0)],1),i("div",{staticClass:"github"},[i("a",{attrs:{target:"_blank",href:e.repository},nativeOn:{click:function(t){return e.clickGitHub(t)}}},[i("img",{attrs:{src:n("890a")}})])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{attrs:{align:"center"}},[n("a",{attrs:{href:"https://www.npmjs.com/package/vue-fb-customer-chat"}},[n("img",{attrs:{alt:"npm",src:"https://img.shields.io/npm/v/vue-fb-customer-chat.svg"}})]),n("a",{attrs:{href:"https://bundlephobia.com/result?p=vue-fb-customer-chat"}},[n("img",{attrs:{alt:"npm",src:"https://badgen.net/bundlephobia/minzip/vue-fb-customer-chat"}})]),n("a",{attrs:{href:"https://npm-stat.com/charts.html?package=vue-fb-customer-chat"}},[n("img",{attrs:{alt:"npm",src:"https://img.shields.io/npm/dm/vue-fb-customer-chat.svg"}})]),n("a",{attrs:{href:"https://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat"}},[n("img",{attrs:{src:"https://isitmaintained.com/badge/resolution/dmnWebDesign/vue-fb-customer-chat.svg",alt:"Average time to resolve an issue"}})]),n("a",{attrs:{href:"https://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat"}},[n("img",{attrs:{src:"https://isitmaintained.com/badge/open/dmnWebDesign/vue-fb-customer-chat.svg",alt:"Percentage of issues still open"}})])])}],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("h1",{staticClass:"brand"},[n("div",{staticClass:"vue"},[e._v("vue")]),n("div",{staticClass:"fb"},[e._v("Fb")])]),n("h2",{staticClass:"package"},[n("div",[e._v("Customer")]),n("div",[e._v("Chat")])])])}],b={},m=b,f=(n("e9fd"),n("2877")),d=Object(f["a"])(m,l,p,!1,null,"61af14ba",null),v=d.exports;const{repository:g}=n("9224");var h={name:"app",components:{Logo:v},computed:{repository(){return g.url.replace("git+","")}},mounted(){this.$fbCustomerChat.setOptions({theme_color:"#41B883"}),this.$ga.page({page:"/",title:"Home page",location:window.location.href})},methods:{clickGitHub(){this.$ga.event({eventCategory:"links",eventAction:"click",eventLabel:"GitHub"})}}},A=h,w=(n("5c0b"),Object(f["a"])(A,u,a,!1,null,null,null)),j=w.exports;i["a"].use(o.a,{id:"UA-139039966-2"}),i["a"].use(s.a,{page_id:562547237566e3,theme_color:"#2c3e50",locale:"en_US"}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("b19e"),r=n.n(i);r.a},"709b":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i,r,o;i=e,o=n[r=t],r in i?Object.defineProperty(i,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[r]=o})}return e}var t="en_us";function n(n){return new Promise(function(i){window.FB?i(window.FB):function(e){var n=e.locale?e.locale:t;return new Promise(function(e,t){!function(i,r,o){var c=i.getElementsByTagName(r)[0];if(!i.getElementById(o)){var s=i.createElement(r);s.id=o,s.src="https://connect.facebook.net/"+n+"/sdk/xfbml.customerchat.js",c.parentNode.insertBefore(s,c),s.onload=function(){e()},s.onerror=function(){t()}}}(document,"script","facebook-jssdk")})}(n).then(function(){(function(t){return new Promise(function(n){window.fbAsyncInit=function(){t=e({},{cookie:!0,xfbml:!0,version:"v3.0"},t),window.FB.init(t),n()}})})(n).then(function(){i(window.FB)})})})}var i={install:function(t,i){t.fbCustomerChat={setOptions:function(t){i=e({},i,t)}},Object.defineProperties(t.prototype,{$fbCustomerChat:{get:function(){return t.fbCustomerChat}}}),t.mixin({mounted:function(){this.$parent||n(i).then(function(){i.page_id&&function(e){var t=document.createElement("div");t.setAttribute("class","fb-customerchat"),t.setAttribute("attribution","setup_tool"),Object.entries(e).forEach(function(e){t.setAttribute(e[0],e[1])}),document.body.appendChild(t)}(i)})}})}};return"undefined"!=typeof window&&window.Vue&&(window.VueFbCustomerChat=i),i})},"890a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},9224:function(e){e.exports={name:"vue-fb-customer-chat",description:"Facebook Customer Chat Plugin for Vue.js",version:"0.1.4",author:{name:"Damian Przepiórka",email:"damian.przepiorka@gmail.com",url:"https://dmnWebDev.io"},license:"MIT",repository:{type:"git",url:"git+https://github.com/dmnWebDesign/vue-fb-customer-chat.git"},main:"dist/vue-fb-customer-chat.cjs.js",module:"dist/vue-fb-customer-chat.esm.js",browser:"dist/vue-fb-customer-chat.umd.js",scripts:{dev:"NODE_ENV=development rollup -c -w & vue-cli-service serve",build:"NODE_ENV=production rollup -c","build:docs":"NODE_ENV=production vue-cli-service build"},dependencies:{ms:"^2.1.1",vue:"^2.6.10","vue-analytics":"^5.16.4"},devDependencies:{"@babel/cli":"^7.4.3","@babel/core":"^7.4.3","@babel/preset-env":"^7.4.3","@vue/cli-service":"^3.6.0","babel-plugin-transform-remove-console":"^6.9.4",eslint:"^5.16.0","eslint-plugin-vue-libs":"^3.0.0","node-sass":"^4.11.0",rollup:"^1.10.0","rollup-plugin-babel":"^4.3.2","rollup-plugin-commonjs":"^9.3.4","rollup-plugin-eslint":"^5.1.0","rollup-plugin-node-resolve":"^4.2.3","rollup-plugin-uglify":"^6.0.2","sass-loader":"^7.1.0","vue-template-compiler":"^2.6.10"},files:["dist"],keywords:["vue","vuejs","fb","facebook","customer","chat","customerchat","messenger"]}},b19e:function(e,t,n){},e9fd:function(e,t,n){"use strict";var i=n("4d25"),r=n.n(i);r.a}});