(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),s=n.n(a),o=n(9),i=n(2),u=n.n(i),j=n(3),l=n(4),p=(n(15),c.a.createContext({favoritePokemons:[],updateFavoritePokemons:function(e){return null}})),d=p.Provider,b=p,h=n(0),v=function(){var e=Object(r.useContext)(b).favoritePokemons;return Object(h.jsxs)("nav",{children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",alt:"pokeapi-logo",className:"navbar-img"})}),Object(h.jsxs)("div",{children:["\ud83d\udc96 ",e.length]})]})},f=function(e){var t=e.onSearch,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(a);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"searchbar-container",children:[Object(h.jsx)("div",{className:"searchbar",children:Object(h.jsx)("input",{placeholder:"Buscar Pokemon...",type:"text",onChange:function(e){s(e.target.value),0===e.target.value.length&&t(null)}})}),Object(h.jsx)("div",{className:"searchbar-btn",children:Object(h.jsx)("button",{onClick:o,children:"Buscar"})})]})},x=function(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",width:"28",height:"28",children:Object(h.jsx)("path",{d:"M11.5 14.5l-4-4 4-4",fill:"none",stroke:"#FFF",strokeLinecap:"round",strokeLinejoin:"round"})})},m=function(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",width:"28",height:"28",children:Object(h.jsx)("path",{d:"M9.5 14.5l4-4-4-4",fill:"none",stroke:"#FFF",strokeLinecap:"round",strokeLinejoin:"round"})})},O=function(e){var t=e.onLeftClick,n=e.onRightClick,r=e.page,c=e.totalPages;return Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("button",{className:"pagination-btn",onClick:t,children:Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(x,{})})}),Object(h.jsxs)("div",{children:[r," de ",c]}),Object(h.jsx)("button",{className:"pagination-btn",onClick:n,children:Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(m,{})})})]})},k=function(e){var t=e.pokemon,n=Object(r.useContext)(b),c=n.favoritePokemons,a=n.updateFavoritePokemons,s=c.includes(t.name)?"\ud83d\udc96":"\ud83d\udc99";return Object(h.jsxs)("div",{className:"pokemon-card",children:[Object(h.jsx)("div",{className:"pokemon-img-container",children:Object(h.jsx)("img",{src:t.sprites.front_default,alt:t.name,className:"pokemon-img"})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"card-top",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsxs)("div",{children:["#",t.id]})]}),Object(h.jsxs)("div",{className:"card-bottom",children:[Object(h.jsx)("div",{className:"pokemon-type",children:t.types.map((function(e,t){return Object(h.jsx)("div",{className:"pokemon-type-text",children:e.type.name},t)}))}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),a(t.name)},children:Object(h.jsx)("div",{className:"pokemon-favorite",children:s})})]})]})]})},g=function(e){var t=e.pokemons,n=e.page,r=e.setPage,c=e.total,a=e.loading;return Object(h.jsxs)("div",{className:"pokedex",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"Pokedex"}),Object(h.jsx)(O,{page:n+1,totalPages:c,onLeftClick:function(){var e=Math.max(n-1,0);r(e)},onRightClick:function(){var e=Math.min(n+1,c-1);r(e)}})]}),a?Object(h.jsx)("div",{className:"loading",children:"Cargando Pokemones.."}):Object(h.jsx)("div",{className:"pokedex-grid",children:t.map((function(e,t){return Object(h.jsx)(k,{pokemon:e},e.name)}))})]})},w=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r,c,a,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:25,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,r="https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(n),e.next=6,fetch(r);case 6:return c=e.sent,a=c.json(),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(2);case 13:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,r=n.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();function y(){var e="favorite_pokemon",t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(0),i=Object(l.a)(s,2),p=i[0],b=i[1],x=Object(r.useState)(0),m=Object(l.a)(x,2),O=m[0],k=m[1],y=Object(r.useState)(!0),C=Object(l.a)(y,2),S=C[0],F=C[1],L=Object(r.useState)([]),B=Object(l.a)(L,2),M=B[0],I=B[1],J=Object(r.useState)(!1),E=Object(l.a)(J,2),_=E[0],A=E[1],R=Object(r.useState)(!1),q=Object(l.a)(R,2),D=q[0],Y=q[1],z=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,N(25,25*p);case 4:return t=e.sent,n=t.results.map(function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(n);case 8:r=e.sent,a(r),F(!1),k(Math.ceil(t.count/25)),A(!1),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){!function(){var t=JSON.parse(window.localStorage.getItem(e))||[];I(t)}()}),[]),Object(r.useEffect)((function(){D||z()}),[p]);var G=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",z());case 2:return F(!0),A(!1),Y(!0),e.next=7,w(t);case 7:if(n=e.sent){e.next=14;break}return A(!0),F(!1),e.abrupt("return");case 14:a([n]),b(0),k(1);case 17:F(!1),Y(!1);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(d,{value:{favoritePokemons:M,updateFavoritePokemons:function(t){var n=Object(o.a)(M),r=n.indexOf(t);r>=0?n.splice(r,1):n.push(t),I(n),window.localStorage.setItem(e,JSON.stringify(n))}},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{onSearch:G}),_?Object(h.jsx)("div",{className:"notfound",children:"No se encontro el Pokemon que buscabas"}):Object(h.jsx)(g,{loading:S,pokemons:c,page:p,setPage:b,total:O})]})]}),Object(h.jsx)("footer",{className:"footer",children:"Creado por Chrestia Yoel"})]})}s.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.da8cafd9.chunk.js.map