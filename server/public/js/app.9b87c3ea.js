(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b67":function(e,t,r){},"2c3d":function(e,t,r){"use strict";r("cdf2")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],i={components:{},data:function(){return{}}},s=i,l=r("2877"),u=Object(l["a"])(s,n,o,!1,null,null,null),c=u.exports,d=r("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{staticClass:"container-lg",staticStyle:{"margin-top":"calc(50vh - 400px)"}},[a("div",{staticClass:"col-4 mx-auto"},[a("div",{staticClass:"d-flex justify-content-center align-items-center flex-column text-center",attrs:{id:"img"}},[a("img",{attrs:{src:r("de22"),alt:"icon"}}),a("h3",{staticStyle:{"margin-top":"-50px","margin-bottom":"20px"}},[1===e.Form.status?a("span",[e._v("Увійдіть в Messenger")]):2!==e.Form.status||e.Form.need_register?2===e.Form.status&&e.Form.need_register?a("span",[e._v("Підтвердження пошти")]):3===e.Form.status&&e.Form.need_register?a("span",[e._v("Вітаємо, як Вас звати?")]):e._e():a("span",[e._v("Вітаємо, "+e._s(e.Form.email))])]),3===e.Form.status||e.Form.need_register?a("h5",[e._v(" "+e._s(e.Form.email)+" ")]):e._e()]),a("form",{on:{submit:function(t){return t.preventDefault(),e.login_submitEmail(e.Form.email,e.Form.status,e.Form.login_code)}}},[1===e.Form.status?a("v-text-field",{attrs:{label:"E-mail",outlined:"",required:"",autofocus:"",color:"cyan darken","error-messages":e.emailErrors,placeholder:"Введіть E-mail","hide-details":"auto"},on:{input:function(t){return e.$v.Form.email.$touch()}},model:{value:e.Form.email,callback:function(t){e.$set(e.Form,"email","string"===typeof t?t.trim():t)},expression:"Form.email"}}):e._e(),2===e.Form.status?a("v-text-field",{staticClass:"input-group--focused",attrs:{label:"Код підтвердження",outlined:"",required:"",autofocus:"",color:"cyan darken",placeholder:"Введіть код підтвердження","hide-details":"auto",minlength:"5",maxlength:"5",rules:e.rule,"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.Form.login_code,callback:function(t){e.$set(e.Form,"login_code","string"===typeof t?t.trim():t)},expression:"Form.login_code"}}):e._e(),3===e.Form.status?a("v-text-field",{attrs:{label:"Ім'я",outlined:"",required:"",autofocus:"",color:"cyan darken",placeholder:"Введіть ім'я","hide-details":"auto"},model:{value:e.Form.first_name,callback:function(t){e.$set(e.Form,"first_name","string"===typeof t?t.trim():t)},expression:"Form.first_name"}}):e._e(),3===e.Form.status?a("v-text-field",{staticClass:"mt-2",attrs:{label:"Прізвище",outlined:"",required:"",color:"cyan darken",placeholder:"Введіть прізвище","hide-details":"auto"},model:{value:e.Form.last_name,callback:function(t){e.$set(e.Form,"last_name","string"===typeof t?t.trim():t)},expression:"Form.last_name"}}):e._e(),3===e.Form.status?a("v-file-input",{staticClass:"mt-2",attrs:{type:"file",rules:e.rules,outlined:"",required:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Виберіть аватарку","prepend-icon":"mdi-camera",label:"Аватар"},on:{change:function(t){return e.onFileChange(t)}},model:{value:e.avatar,callback:function(t){e.avatar=t},expression:"avatar"}}):e._e(),e.url?a("v-avatar",{staticClass:"ml-15",attrs:{size:"150"}},[a("img",{attrs:{src:e.url,alt:"Admin"}})]):e._e(),a("v-btn",{staticClass:"mt-2",attrs:{elevation:"0",block:"","x-large":"",color:"accent",hidden:e.disabledBtn,type:"submit"}},[1===e.Form.status?a("span",[e._v("Продовжити")]):e._e(),2===e.Form.status&&e.Form.need_register?a("span",[e._v("Підтвердити")]):2===e.Form.status?a("span",[e._v("Увійти")]):3===e.Form.status?a("span",[e._v("Почати спілкування")]):e._e()])],1)])])])},v=[],A=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("b5ae")),f=r("1dce"),p=r.n(f),g={mixins:[f["validationMixin"]],data:function(){return{Form:{avatar:null,email:"",login_code:"",status:1,first_name:"",last_name:"",need_register:!1},show:!1,rules:[function(e){return!e||e.size<2e6||"Розмір аватарки має бути менше 2 MB!"}],url:null,code:"12345"}},computed:{rule:function(){var e=this,t=[];if(this.code){var r=function(t){return(!!t&&t)===e.code||"Ввели не правильний код підтвердження"};t.push(r)}return t},disabledBtn:function(){return this.$v.Form.email.$invalid},emailErrors:function(){var e=[];return this.$v.Form.email.$dirty?(!this.$v.Form.email.email&&e.push("Введіть норм e-mail"),!this.$v.Form.email.required&&e.push("E-mail є пустишкою"),e):e}},methods:{login_submitEmail:function(e,t,r){"asd@gmail.com"===e?1===this.Form.status?this.Form.status+=1:2===t&&"12345"===r&&this.$router.push({name:"Main"}):1===t?(this.Form.status+=1,this.Form.need_register=!0):2===t&&"12345"===r?this.Form.status+=1:2===t&&"12345"!=r||3===t&&this.$router.push({name:"Main"})},onFileChange:function(e){var t=e;this.url=URL.createObjectURL(t)}},validations:{Form:{email:{email:A["email"],required:A["required"]},login_code:{required:A["required"],minLength:Object(A["minLength"])(5),maxLength:Object(A["maxLength"])(5)},nickname:{required:A["required"],minLength:Object(A["minLength"])(6)},first_name:{required:A["required"]},last_name:{required:A["required"]}}}},b=g,h=(r("7533"),Object(l["a"])(b,m,v,!1,null,null,null)),F=h.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{staticClass:"container-lg"},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-4 no-gutters ls"},[a("div",[a("v-app-bar",{attrs:{color:"grey lighten-2",dense:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-spacer"),a("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",n,!1),r),[a("v-icon",[e._v("mdi-magnify")])],1)]}}])},[a("span",[e._v("Пошук")])])],1),e._l(e.usersList,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"Mblock"},[a("div",[a("img",{staticClass:"PIMG",attrs:{src:r("dc21"),alt:"avatar"}})]),a("div",{staticClass:"PNAME"},[e._v(e._s(t.name))]),a("div",{staticClass:"PTIME"},[e._v(e._s(t.time))]),a("div",{staticClass:"PMES"},[e._v(e._s(t.message))])])])})),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"grey lighten-3"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"grey lighten-1"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[e._v("Home")])],1),a("v-list-item",{attrs:{color:""}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-title",[e._v("Account")])],1)],1)],1)],1)],2)]),a("div",{staticClass:"col-8 no-gutters"},[a("div",{staticClass:"right-side",staticStyle:{background:"#cacaca"}})])])])])},B=[],Q={data:function(){return{drawer:!1,group:null,usersList:[{name:"Ivan",time:"19:32",message:"Hellow How are U"},{name:"Vasia",time:"10:32",message:"KKKKKKKKkfbew,fvrwe f rewf"},{name:"KKK",time:"11:32",message:"lol"}]}},computed:{},methods:{}},x=Q,w=(r("2c3d"),Object(l["a"])(x,C,B,!1,null,"4febf29e",null)),y=w.exports;a["default"].use(d["a"]);var q=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Authorization",component:F},{path:"/main",name:"Main",component:y}]}),j=(r("ab8b"),r("cabf"),r("becf"),r("43f9")),L=r.n(j),M=(r("51de"),r("e094"),r("ce5b")),k=r.n(M);r("bf40");a["default"].use(k.a);var K={},O=new k.a(K);a["default"].use(L.a),a["default"].config.productionTip=!1,a["default"].use(p.a),new a["default"]({router:q,vuetify:O,render:function(e){return e(c)}}).$mount("#app")},7533:function(e,t,r){"use strict";r("0b67")},cdf2:function(e,t,r){},dc21:function(e,t){e.exports="data:image/png;base64,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"},de22:function(e,t,r){e.exports=r.p+"img/m3.40987ab5.png"}});