(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=(t(19),t(4)),u=t(3),l=t(1),s=t(2),f={0:"#607d8b",2:"#9c27b0",4:"#673ab7",8:"#3f51b5",16:"#1976d2",32:"#448aff",64:"#00796b",128:"#43a047",256:"#689f38",512:"#ef6c00",1024:"#f44336",2048:"#e91e63",default:"#e040fb"};function v(){var e=Object(l.a)(["\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  background: ",";\n  color: white;\n  font-size: 30px;\n  line-height: 90px;\n"]);return v=function(){return e},e}var d=Object(s.a)((function(e){var n=e.className,t=e.value;return a.a.createElement("div",{className:n},0!==t&&t)}))(v(),(function(e){return f[e.value]||f.default}));function h(){var e=Object(l.a)(["\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n"]);return h=function(){return e},e}function p(){var e=Object(l.a)(["\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n"]);return p=function(){return e},e}var w=Object(s.a)((function(e){var n=e.className,t=e.values;return a.a.createElement("div",{className:n},a.a.createElement(d,{value:t[0]}),a.a.createElement(d,{value:t[1]}),a.a.createElement(d,{value:t[2]}),a.a.createElement(d,{value:t[3]}))}))(p()),b=Object(s.a)((function(e){var n=e.className,t=e.values;return a.a.createElement("div",{className:n},a.a.createElement(w,{values:t.slice(0,4)}),a.a.createElement(w,{values:t.slice(4,8)}),a.a.createElement(w,{values:t.slice(8,12)}),a.a.createElement(w,{values:t.slice(12,16)}))}))(h()),m=Math.pow(4,2),g=function(e,n,t){return e[4*n+t]},x=function(e,n){var t=[];switch(n){case"left":return e;case"right":for(var r=3;r>=0;r--)for(var a=3;a>=0;a--)t.push(e[4*r+a]);return t;case"up":for(var o=3;o>=0;o--)for(var c=0;c<4;c++)t.push(e[4*c+o]);return t;case"down":for(var i=0;i<4;i++)for(var u=3;u>=0;u--)t.push(e[4*u+i]);return t;default:return e}},j=function(e,n){return x(e,{left:"left",right:"right",up:"down",down:"up"}[n])},E=function(e,n){return e.slice(4*n,4*(n+1))},y=function(e){for(var n=Object(i.a)(e),t=0,r=Array(4).fill(!1),a=1;a<4;a++)for(var o=a-1;o>=0&&!r[o+1];){if(0===n[o])n[o]=n[o+1];else{if(n[o]!==n[o+1])break;n[o]=2*n[o],t+=n[o],r[o]=!0}n[o+1]=0,r[o]=r[o+1],r[o+1]=!1,o--}return[n,t]},O=function(){var e=Array(m).fill(0);return e[Math.floor(Math.random()*m/2)]=2,e[Math.floor((Math.random()+1)*m/2)]=2,e};function k(){var e=Object(l.a)(["\n  width: 180px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  border: 2px solid white;\n  border-radius: 10px;\n  background: #282c34;\n  color: white;\n  font-size: 20px;\n  cursor: pointer;\n\n  :hover {\n    background: white;\n    color: #282c34;\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(l.a)(["\n  margin: 10px;\n  line-height: 50px;\n  color: white;\n  font-size: 20px;\n"]);return N=function(){return e},e}function A(){var e=Object(l.a)(["\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n"]);return A=function(){return e},e}function M(){var e=Object(l.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  text-align: center;\n"]);return M=function(){return e},e}var W=O(),S=Object(s.a)((function(e){var n=e.className,t=e.children,r=e.onKeyDown;return a.a.createElement("div",{className:n,tabIndex:"0",onKeyDown:r},t)}))(M()),C=s.a.div(A()),D=Object(s.a)((function(e){var n=e.className,t=e.score;return a.a.createElement("div",{className:n},"Score: ",t)}))(N()),L=s.a.button(k()),R=function(){var e=Object(r.useState)(W),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(0),l=Object(u.a)(c,2),s=l[0],f=l[1],v=function(e){if(function(e,n){for(var t=x(e,n),r=0;r<4;r++)for(var a=1;a<4;a++){var o=g(t,r,a),c=g(t,r,a-1);if(0!==o&&(0===c||c===o))return!0}return!1}(t,e)){var n=Object(i.a)(t),r=s,a=function(e,n,t){for(var r=x(e,t),a=[],o=n,c=0;c<4;c++){var i,l,s=y(E(r,c)),f=Object(u.a)(s,2);i=f[0],l=f[1],a=a.concat(i),o+=l}return[j(a,t),o]}(n,r,e),c=Object(u.a)(a,2);n=c[0],r=c[1],n=function(e){for(var n=[],t=0;t<m;t++)0===e[t]&&n.push(t);return e[n[Math.floor(Math.random()*n.length)]]=Math.random()<.5?2:4,e}(n),f(r),o(n)}};return a.a.createElement(S,{onKeyDown:function(e){return function(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":return void v(e.key.slice(5).toLowerCase())}}(e)}},a.a.createElement(C,null,a.a.createElement(D,{score:s}),a.a.createElement(L,{onClick:function(){o(O()),f(0)}},"New Game")),a.a.createElement(b,{values:t}))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(R,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/2048",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/2048","/service-worker.js");U?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.3f92d0c1.chunk.js.map