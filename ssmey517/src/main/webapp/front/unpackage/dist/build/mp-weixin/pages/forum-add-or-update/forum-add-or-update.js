(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{"008d":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"060e":function(e,n,t){"use strict";(function(e){t("4a8c");r(t("66fd"));var n=r(t("2d1d"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"21e3":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},onLoad:function(n){var t=this;return i(r.default.mark((function u(){var a,i,o;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,t.$api.session(a);case 3:if(i=r.sent,t.user=i.data,"yonghu"==a&&(t.username=t.user.yonghuming),!n.id){r.next=12;break}return t.id=n.id,r.next=10,t.$api.info("forum",t.id);case 10:o=r.sent,t.forum=o.data;case 12:t.styleChange();case 13:case"end":return r.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.forum.username=e.username,!e.id){n.next=6;break}return n.next=4,e.$api.update("forum",e.forum);case 4:n.next=8;break;case 6:return n.next=8,e.$api.save("forum",e.forum);case 8:e.$utils.msgBack("操作成功");case 9:case"end":return n.stop()}}),n)})))()},setIsDoneTap:function(e){this.index=e.target.value,this.forum.isdone=this.options[this.index]}}};n.default=o}).call(this,t("543d")["default"])},"2d1d":function(e,n,t){"use strict";t.r(n);var r=t("008d"),u=t("6577");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("83db");var i,o=t("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=c.exports},6577:function(e,n,t){"use strict";t.r(n);var r=t("21e3"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"83db":function(e,n,t){"use strict";var r=t("b4a2"),u=t.n(r);u.a},b4a2:function(e,n,t){}},[["060e","common/runtime","common/vendor"]]]);