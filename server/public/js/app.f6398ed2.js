(function(t){function e(e){for(var s,l,o=e[0],n=e[1],c=e[2],m=0,d=[];m<o.length;m++)l=o[m],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var n=a[o];0!==i[n]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},r=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var f=n;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},r=[],l={name:"App",data:function(){return{}}},o=l,n=(a("034f"),a("2877")),c=a("6544"),f=a.n(c),m=a("7496"),d=a("f6c4"),u=Object(n["a"])(o,i,r,!1,null,null,null),p=u.exports;f()(u,{VApp:m["a"],VMain:d["a"]});var v=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{height:"100vh"}},[a("div",{staticClass:"row flex-column h-100"},[a("div",{staticClass:"nav_bar d-flex",staticStyle:{"border-bottom":"1px solid #dfe1e5"}},[a("v-app-bar",{attrs:{elevation:"0",color:"white"}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Messenger")])],1)],1),a("div",{staticClass:"chats_wrapper d-flex",staticStyle:{flex:"1"}},[a("v-list",{staticClass:"col-lg-4 chats p-0"},[a("v-list-item-group",{attrs:{mandatory:""}},[a("v-list-item",{staticClass:"chat d-flex"},[a("div",{staticClass:"photo"},[a("v-avatar",{attrs:{color:"accent",size:"55"}},[a("span",{staticClass:"white--text"},[t._v("І М")])])],1),a("div",{staticClass:"message-details w-100"},[a("div",{staticClass:"message-title d-flex justify-space-between"},[a("div",{staticClass:"name"},[t._v("Ігор Модняк")]),a("div",{staticClass:"time"},[t._v("20:17")])]),a("div",{staticClass:"message-subtitle d-flex"},[a("div",{staticClass:"message"},[t._v(" Куку, пишу тобі тестове повідомлення ")])])])]),a("v-list-item",{staticClass:"chat d-flex"},[a("div",{staticClass:"photo"},[a("v-avatar",{attrs:{color:"#ff695d",size:"55"}},[a("span",{staticClass:"white--text"},[t._v("В К")])])],1),a("div",{staticClass:"message-details w-100"},[a("div",{staticClass:"message-title d-flex justify-space-between"},[a("div",{staticClass:"name"},[t._v("Василь Крутий")]),a("div",{staticClass:"time"},[t._v("01:07")])]),a("div",{staticClass:"message-subtitle d-flex"},[a("div",{staticClass:"message"},[t._v("Ого, маєш крутий месенджер")])])])]),a("v-list-item",{staticClass:"chat d-flex"},[a("div",{staticClass:"photo"},[a("v-avatar",{attrs:{color:"#b882ff",size:"55"}},[a("span",{staticClass:"white--text"},[t._v("П Л")])])],1),a("div",{staticClass:"message-details w-100"},[a("div",{staticClass:"message-title d-flex justify-space-between"},[a("div",{staticClass:"name"},[t._v("Петро Лапас")]),a("div",{staticClass:"time"},[t._v("06.05.2021")])]),a("div",{staticClass:"message-subtitle d-flex"},[a("div",{staticClass:"message"},[t._v("Пишу, чисто по приколу")])])])])],1)],1),a("div",{staticClass:"col-lg-8 d-flex align-items-end justify-content-center",staticStyle:{background:"#f5f5f5"}},[a("div",{staticClass:"messages"}),a("div",{staticClass:"send_message w-100 mb-5 d-flex"},[a("v-form",{staticClass:"d-flex w-100"},[a("v-text-field",{staticClass:"ml-5",attrs:{type:"text",label:"Повідомлення",required:"",autofocus:"","hide-details":"auto",autocomplete:"false"}}),a("v-btn",{staticClass:"ml-1 align-self-end",staticStyle:{height:"55px",width:"60px","min-width":"auto"},attrs:{"x-large":"",elevation:"0"}},[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-send")])],1)],1)],1)])],1)])])},g=[],b={name:"Main",data:function(){return{}},mounted:function(){localStorage.login||this.$router.push("/login")}},x=b,_=(a("72ba"),a("40dc")),C=a("5bc1"),y=a("8212"),S=a("8336"),w=a("4bd4"),j=a("132d"),V=a("8860"),O=a("da13"),k=a("1baa"),$=a("8654"),E=a("2a7f"),L=Object(n["a"])(x,h,g,!1,null,"279d1ac9",null),M=L.exports;f()(L,{VAppBar:_["a"],VAppBarNavIcon:C["a"],VAvatar:y["a"],VBtn:S["a"],VForm:w["a"],VIcon:j["a"],VList:V["a"],VListItem:O["a"],VListItemGroup:k["a"],VTextField:$["a"],VToolbarTitle:E["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"col-lg-4 mx-auto d-flex align-items-center justify-content-center flex-column",staticStyle:{height:"100vh"}},[a("div",{staticClass:"text-center w-100",staticStyle:{"margin-bottom":"100px"}},[a("img",{attrs:{src:"https://webz.telegram.org/telegram-logo.df3a91becaa9678c529b4c4cadd45204.svg",alt:"",width:"150"}}),a("h2",{staticStyle:{"margin-top":"30px"}},[1===t.formStep?a("span",[t._v("Увійдіть в Messenger")]):t._e(),2===t.formStep?a("span",[t._v(t._s(t.form.email))]):t._e(),3===t.formStep?a("span",{staticStyle:{"font-size":"95%"}},[t._v("Вітаємо, як Вас звати?")]):t._e()]),a("p",{staticClass:"text-muted",staticStyle:{"margin-bottom":"20px"}},[1===t.formStep?a("span",[t._v("Для продовження введіть свій E-mail")]):t._e(),2===t.formStep?a("span",[t._v("Ми надіслали Вам код підтвердження")]):t._e(),3===t.formStep?a("span",[t._v("Введіть ім'я та почніть спілкування!")]):t._e()]),a("form",{on:{submit:function(e){return e.preventDefault(),t.emailForm()}}},[1===t.formStep?a("v-text-field",{attrs:{type:"email",label:"E-mail",outlined:"",required:"",autofocus:"",placeholder:"Введіть E-mail","hide-details":"auto"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}):t._e(),2===t.formStep?a("v-text-field",{attrs:{"error-messages":t.codeError,type:"text",label:"Код підтвердження",outlined:"",required:"",autofocus:"",placeholder:"Введіть код підтвердження","hide-details":"auto",minlength:"5",maxlength:"5",autocomplete:"false"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}):t._e(),3===t.formStep?a("v-text-field",{attrs:{type:"text",label:"Ім'я",outlined:"",required:"",autofocus:"",placeholder:"Введіть ім'я","hide-details":"auto",minlength:"2",maxlength:"20"},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}}):t._e(),3===t.formStep?a("v-text-field",{staticClass:"mt-2",attrs:{type:"text",label:"Прізвище",outlined:"",required:"",placeholder:"Введіть прізвище","hide-details":"auto",minlength:"2",maxlength:"20"},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}}):t._e(),a("v-btn",{staticClass:"mt-2",attrs:{elevation:"0","x-large":"",block:"",color:"primary",type:"submit"}},[t.okLogin?a("v-progress-circular",{staticClass:"mr-1",attrs:{color:"white",indeterminate:""}}):t._e(),1===t.formStep||2===t.formStep&&t.needRegister?a("span",[t._v("Продовжити")]):3===t.formStep?a("span",[t._v("Почати спілкування")]):a("span",[t._v("Увійти")])],1)],1)])])])},T=[],q=(a("4795"),{name:"Login",data:function(){return{form:{email:"",code:"",firstname:"",lastname:""},formStep:1,needRegister:!1,codeError:"",okLogin:!1}},methods:{emailForm:function(){var t=this;1===this.formStep?("asd@gmail.com"!=this.form.email&&(this.needRegister=!0),this.formStep++):2===this.formStep?"12345"==this.form.code?(this.codeError="",this.needRegister?this.formStep++:(this.okLogin=!0,setTimeout((function(){localStorage.login=!0,t.$router.push("/")}),1e3))):this.codeError="Не правильний код підтвердження":3===this.formStep&&(this.okLogin=!0,setTimeout((function(){localStorage.login=!0,t.$router.push("/")}),1e3))}}}),z=q,A=a("490a"),F=Object(n["a"])(z,P,T,!1,null,null,null),B=F.exports;f()(F,{VBtn:S["a"],VProgressCircular:A["a"],VTextField:$["a"]}),s["a"].use(v["a"]);var I=[{path:"/",name:"Main",component:M},{path:"/login",name:"Login",component:B}],R=new v["a"]({mode:"history",base:"/",routes:I}),J=R,D=a("f309");s["a"].use(D["a"]);var G=new D["a"]({});new s["a"]({router:J,vuetify:G,render:function(t){return t(p)}}).$mount("#app")},"6fec":function(t,e,a){},"72ba":function(t,e,a){"use strict";a("6fec")},"85ec":function(t,e,a){}});