(function(e){function t(t){for(var r,n,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)n=i[l],o[n]&&f.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({about:"about",developer:"developer"}[e]||e)+"."+{about:"b8cabc56",developer:"ac5b92b5"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={developer:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var r="css/"+({about:"about",developer:"developer"}[e]||e)+"."+{about:"31d6cfe0",developer:"925b3263"}[e]+".css",n=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===n))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],u=i.getAttribute("data-href");if(u===r||u===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,a(o)},f.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){n[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,a){r=o[e]=[t,a]});t.push(r[2]=s);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e),u=function(t){f.onerror=f.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");s.type=r,s.request=n,a[1](s)}o[e]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c89":function(e,t,a){"use strict";var r=a("88f9"),n=a.n(r);n.a},2344:function(e,t,a){"use strict";var r=a("8119"),n=a.n(r);n.a},2856:function(e,t,a){},"3a1b":function(e,t,a){"use strict";var r=a("d335"),n=a.n(r);n.a},5466:function(e,t,a){"use strict";var r=a("c408"),n=a.n(r);n.a},"55bb":function(e,t,a){"use strict";var r=a("db3a"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s={name:"App"},i=s,c=(a("5c0b"),a("2877")),u=Object(c["a"])(i,n,o,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,f=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Cover"),a("QuoteSeparator",{attrs:{quote:e.quote}}),a("Bio"),a("Resume"),a("Footer")],1)},d=[],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"cover"},[a("h1",{staticClass:"title"},[e._v("Carles Sanz Mateu")]),a("h3",{staticClass:"subtitle"},[e._v("Escritor, músico y programador")])])}],b={name:"Cover"},h=b,g=(a("5466"),Object(c["a"])(h,p,v,!1,null,"9fe58000",null));g.options.__file="Cover.component.vue";var _=g.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"quote-separator"},[a("h3",{staticClass:"quote"},[e._v(e._s(e.quote))])])},y=[],x={name:"QuoteSeparator",props:{quote:{type:String,required:!0}}},k=x,w=(a("da0e"),Object(c["a"])(k,C,y,!1,null,"345da15a",null));w.options.__file="QuoteSeparator.component.vue";var E=w.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"bio"},[a("div",{staticClass:"image-container"},[a("div",{staticClass:"image-wrapper"})]),a("div",{staticClass:"text-container"},[a("p",{staticClass:"text"},[e._v("Entusiasta de la tecnología, programador, friki y en mis ratos libres músico y escritor. Fanático de los mundos de fantasía y de toda la magia que los envuelve. Admito que en ocasiones también me gusta perderme por el espacio o dejarme embargar por el miedo en alguna vieja mansión.")])])])}],q={name:"Bio"},S=q,$=(a("2344"),Object(c["a"])(S,j,O,!1,null,"037c576d",null));$.options.__file="Bio.component.vue";var P=$.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resume"},[e._m(0),a("ResumeCard",{staticClass:"card",attrs:{text:"Escritor","background-image":"url('https://cdn-images-1.medium.com/max/1600/1*i8qafJIoxH3MYFB4xKqS1A.jpeg')"}}),a("ResumeCard",{staticClass:"card",attrs:{text:"Programador","background-image":"url('https://cdn-images-1.medium.com/max/2000/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg')"},on:{click:function(t){e.goTo("/developer")}}}),a("ResumeCard",{staticClass:"card",attrs:{text:"Músico","background-image":"url('https://i.pinimg.com/originals/15/d3/0e/15d30e53e4430e21210baf2eec1f9edd.jpg')"}})],1)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h3",{staticClass:"top-text"},[e._v("Mis proyectos")]),a("h5",{staticClass:"bottom-text"},[e._v("Conoce lo que hago")])])}],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resume-card",on:{click:e.onClick}},[a("div",{staticClass:"resume-card-image",style:{"background-image":e.backgroundImage}},[a("h3",{staticClass:"text"},[e._v(e._s(e.text))])])])},B=[],A={name:"ResumeCard",props:{text:{type:String,required:!0},backgroundImage:{type:String,required:!0}},methods:{onClick:function(){this.$emit("click")}}},F=A,N=(a("3a1b"),Object(c["a"])(F,R,B,!1,null,"51809792",null));N.options.__file="ResumeCard.component.vue";var Q=N.exports,z={name:"Resume",components:{ResumeCard:Q},methods:{goTo:function(e){this.$router.push(e)}}},H=z,I=(a("a2ab"),Object(c["a"])(H,T,M,!1,null,"5cd27f90",null));I.options.__file="Resume.component.vue";var J=I.exports,K=a("fd2d"),L={name:"Home",components:{Cover:_,QuoteSeparator:E,Bio:P,Resume:J,Footer:K["a"]},data:function(){return{quote:"Normalmente escribo para ordenadores, pero en mis ratos libres adoro escribir para soñadores"}}},V=L,Y=(a("0c89"),Object(c["a"])(V,m,d,!1,null,"8316fb24",null));Y.options.__file="Home.view.vue";var D=Y.exports;r["a"].use(f["a"]);var G=new f["a"]({routes:[{path:"/",name:"home",component:D},{path:"/developer",name:"developer",component:function(){return a.e("developer").then(a.bind(null,"0323"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),U=a("2f62");r["a"].use(U["a"]);var W=new U["a"].Store({state:{},mutations:{},actions:{}});a("fb98"),a("d8ac");r["a"].config.productionTip=!1,new r["a"]({router:G,store:W,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("2856"),n=a.n(r);n.a},8119:function(e,t,a){},"88f9":function(e,t,a){},a2ab:function(e,t,a){"use strict";var r=a("cdd5"),n=a.n(r);n.a},c346:function(e,t,a){},c408:function(e,t,a){},cdd5:function(e,t,a){},d335:function(e,t,a){},d8ac:function(e,t,a){},da0e:function(e,t,a){"use strict";var r=a("c346"),n=a.n(r);n.a},db3a:function(e,t,a){},fb98:function(e,t,a){},fd2d:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("a",{staticClass:"link-icon",attrs:{href:"https://medium.com/@csanzmateu/",target:"_blank"}},[a("i",{staticClass:"fab fa-medium-m"})]),a("a",{staticClass:"link-icon",attrs:{href:"https://www.instagram.com/playmaker1509/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})]),a("a",{staticClass:"link-icon",attrs:{href:"https://twitter.com/carlessanzmateu",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"link-icon",attrs:{href:"https://github.com/carlessanzmateu",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])])}],o=(a("cadf"),a("551c"),a("097d"),{name:"Footer"}),s=o,i=(a("55bb"),a("2877")),c=Object(i["a"])(s,r,n,!1,null,"cb6e6d88",null);c.options.__file="Footer.vue";t["a"]=c.exports}});
//# sourceMappingURL=app.90540899.js.map