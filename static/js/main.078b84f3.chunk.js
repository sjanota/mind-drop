(window["webpackJsonpmind-drop"]=window["webpackJsonpmind-drop"]||[]).push([[0],{100:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},153:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},237:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),l=n.n(c),o=(n(97),n(8)),u=(n(98),n(99),n(39)),i=n.n(u),s=n(18),d=n.n(s),f=n(42),p=n.n(f),m=(n(100),n(12));var b=function(){return a.a.createElement(i.a.Brand,{className:"Brand"},a.a.createElement(m.f,{icon:m.c,size:"medium"}),"Mind Drop")},E=(n(114),n(115),n(40)),v=n.n(E);function h(e){var t=e.label,n=e.onDelete;return a.a.createElement(v.a,{className:"RemovableLabel",variant:"primary"},a.a.createElement("span",null,t),a.a.createElement("button",{onClick:n},a.a.createElement(m.f,{width:8,icon:m.e})))}function O(e){var t=e.labels,n=e.addLabel,r=e.deleteLabel,c=a.a.useState(""),l=Object(o.a)(c,2),u=l[0],i=l[1];return a.a.createElement("div",{className:"form-control LabelsInput"},t.map(function(e){return a.a.createElement(h,{label:e,key:e,onDelete:(t=e,function(){r(t)})});var t}),a.a.createElement("input",{type:"text",value:u,onChange:function(e){var t=e.target.value;t.endsWith(" ")?(i(""),n(t.trim())):i(t)},className:"form-control"}))}var y=n(17);function g(e,t){return[].concat(Object(y.a)(e),[t])}function j(e,t){var n=e.indexOf(t);return-1===n?e:[].concat(Object(y.a)(e.slice(0,n)),Object(y.a)(e.slice(n+1,e.length)))}var w=n(30),x=n(10),k=n.n(x),T=n(23),C=n(31),S=n(87),D=n.n(S);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var L=function(){return window.history.replaceState({},document.title,window.location.pathname)},A=a.a.createContext(),N=function(){return Object(r.useContext)(A)},_=function(){var e=N(),t=e.isAuthenticated,n=e.loginWithRedirect,r=e.logout;return a.a.createElement("div",null,!t&&a.a.createElement("button",{onClick:function(){return n({})}},"Log in"),t&&a.a.createElement("button",{onClick:function(){return r()}},"Log out"))};function M(e){var t=e.labelFilter,n=e.setLabelFilter;return a.a.createElement(i.a,{bg:"dark",variant:"dark",className:"Navbar"},a.a.createElement(b,null),a.a.createElement(d.a,null,a.a.createElement(p.a,null,a.a.createElement(p.a.Prepend,null,a.a.createElement(p.a.Text,{id:"basic-addon1"},"Label")),a.a.createElement(O,{labels:t,addLabel:function(e){return n(function(t){return g(t,e)})},deleteLabel:function(e){return n(function(t){return j(t,e)})}}))),a.a.createElement(_,null))}n(126),n(127),n(128);var R=n(32),F=n.n(R),B=n(25),W=n.n(B),z=n(56),U=n.n(z),G=n(41),H=n.n(G);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var q="TITLE_SET",K=function(e){return{type:q,title:e}},Q="TEXT_SET",V=function(e){return{type:Q,text:e}},$="LABEL_ADDED",Y=function(e){return{type:$,label:e}},Z="LABEL_REMOVED",ee=function(e){return{type:Z,label:e}},te="RESET",ne=function(e){return{type:te,value:e}},re={title:"",text:"",labels:[]};function ae(e,t){switch(t.type){case q:return X({},e,{title:t.title});case Q:return X({},e,{text:t.text});case $:return X({},e,{labels:g(e.labels,t.label)});case Z:return X({},e,{labels:j(e.labels,t.label)});case te:return{title:t.value.title||re.title,text:t.value.text||re.text,labels:t.value.labels||re.labels}}}function ce(e){var t=e.show,n=e.onSave,r=e.onCancel,c=e.value,l=a.a.useReducer(ae,re),u=Object(o.a)(l,2),i=u[0],s=u[1],f=a.a.useRef(),p=function(){s(ne(c))};a.a.useEffect(p,[c]);var m=function(e){return function(t){e(t),p()}},b=m(n),E=m(r);return a.a.createElement(F.a,{show:t,onHide:E,centered:!0,onEntered:function(){return f.current.focus()}},a.a.createElement(F.a.Header,{closeButton:!0},a.a.createElement(F.a.Title,null,"New card")),a.a.createElement(F.a.Body,null,a.a.createElement(d.a,null,a.a.createElement(d.a.Group,{as:U.a},a.a.createElement(d.a.Label,{column:!0,sm:2},"Title:"),a.a.createElement(H.a,null,a.a.createElement(d.a.Control,{ref:f,value:i.title,onChange:function(e){return s(K(e.target.value))},placeholder:"Title"}))),a.a.createElement(d.a.Group,{as:U.a},a.a.createElement(d.a.Label,{column:!0,sm:2},"Label:"),a.a.createElement(H.a,null,a.a.createElement(O,{labels:i.labels,addLabel:function(e){return s(Y(e))},deleteLabel:function(e){return s(ee(e))}}))),a.a.createElement(d.a.Label,null,"Text:"),a.a.createElement(d.a.Control,{value:i.text,onChange:function(e){return s(V(e.target.value))},as:"textarea",rows:5}))),a.a.createElement(F.a.Footer,null,a.a.createElement(W.a,{variant:"secondary",onClick:E},"Close"),a.a.createElement(W.a,{variant:"primary",onClick:function(){return b({title:i.title,text:i.text,labels:i.labels})}},"Save Changes")))}n(153);var le=n(19),oe=n.n(le);var ue=function(e){var t=e.onClick;return a.a.createElement(oe.a,{bg:"secondary",className:"AddIdeaCard"},a.a.createElement(oe.a.Body,null,a.a.createElement(W.a,{variant:"dark",style:{width:"100%",height:"100%"},onClick:t},a.a.createElement(m.f,{icon:m.b,size:"medium"}))))},ie=(n(156),n(157),n(88)),se=n.n(ie);n(237);function de(e){var t=e.source,n=e.setSource,r=Object(C.a)(e,["source","setSource"]),c=r["data-sourcepos"].split("-")[0].split(":"),l=Object(o.a)(c,2),u=l[0],i=l[1];var s=null,d="";if(null!==r.checked&&void 0!==r.checked){var f=r.checked;s=a.a.createElement("input",{type:"checkbox",checked:f,onChange:function(){var e=t.split("\n"),r=e[u-1],a=/\[[\sx]]/.exec(r.slice(Number(i))).index+Number(i)+1,c=" "===r[a]?"x":" ",l=[].concat(Object(y.a)(e.slice(0,u-1)),[r.substr(0,a)+c+r.substr(a+1)],Object(y.a)(e.slice(u,e.length)));n(l.join("\n"))}}),d="checkboxed"}return a.a.createElement("li",{className:d},s,r.children)}function fe(e){var t=e.source,n=e.setSource;var r={listItem:function(e){return a.a.createElement(de,Object.assign({source:t},e,{setSource:n}))}};return a.a.createElement(se.a,{source:t,renderers:r,sourcePos:!0})}function pe(e){var t=e.card,n=e.onDelete,r=e.onEdit,c=e.setText;return a.a.createElement(oe.a,{style:{},className:"IdeaCard"},a.a.createElement(oe.a.Body,null,a.a.createElement(oe.a.Title,null,t.title),a.a.createElement(oe.a.Subtitle,null,t.labels.map(function(e){return a.a.createElement(v.a,{variant:"primary",key:e},e)})),a.a.createElement(oe.a.Text,{as:"div"},a.a.createElement(fe,{source:t.text,setSource:c}))),a.a.createElement(oe.a.Footer,{className:"text-right"},a.a.createElement(W.a,{className:"edit",variant:"secondary",size:"sm",onClick:r},a.a.createElement(m.f,{icon:m.a,size:"small"})),a.a.createElement(W.a,{className:"delete",variant:"danger",size:"sm",onClick:n},a.a.createElement(m.f,{icon:m.d,size:"small"}))))}function me(e,t,n){return t<0||t>e.length?e:[].concat(Object(y.a)(e.slice(0,t)),[n],Object(y.a)(e.slice(t+1,e.length)))}var be=n(89),Ee=n.n(be);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Oe={title:"",text:"",labels:[]},ye=function(e){return{type:"ITEMS_RELOADED",value:e}},ge=function(e){return{type:"ITEMS_FILTERED",value:e}},je=function(){return{type:"ADD_ITEM"}},we=function(e){return{type:"EDIT_ITEM",value:e}},xe=function(e){return{type:"ITEM_DELETED",value:e}},ke=function(e){return{type:"CHANGE_APPLIED",value:e}},Te=function(){return{type:"CHANGE_CANCELED"}},Ce=function(e,t){return{type:"ITEM_TEXT_SET",item:e,text:t}},Se=function(e){var t=e.labelFilter.length>0?e.cards.filter(function(t){return-1!==t.labels.indexOf(e.labelFilter[0])}):e.cards;return he({},e,{filteredCards:t})},De=function(e,t){switch(t.type){case"ITEMS_RELOADED":return Se(he({},e,{cards:t.value}));case"ITEMS_FILTERED":return Se(he({},e,{labelFilter:t.value}));case"ADD_ITEM":return he({},e,{showModal:!0,modalState:Oe});case"EDIT_ITEM":return he({},e,{showModal:!0,modalState:t.value,editItem:e.cards.indexOf(t.value)});case"ITEM_DELETED":var n=j(e.cards,t.value);return e.setCards(n),Se(he({},e,{cards:n}));case"CHANGE_CANCELED":return he({},e,{showModal:!1,editItem:null});case"CHANGE_APPLIED":var r=null!=e.editItem?me(e.cards,e.editItem,t.value):g(e.cards,t.value);return e.setCards(r),Se(he({},e,{showModal:!1,editItem:null,cards:r}));case"ITEM_TEXT_SET":var a=e.cards.indexOf(t.item);if(a<=-1)return e;var c=e.cards[a],l=me(e.cards,a,he({},c,{text:t.text}));return e.setCards(l),Se(he({},e,{cards:l}));default:return console.log("Unexpected action",t),e}};var Pe={showModal:!1,modalState:Oe,editItem:null,labelFilter:[],filteredCards:[],cards:[]};function Ie(e){var t,n=e.labelFilter,c=e.cards,l=e.setCards,u=Object(r.useReducer)((t=De,function(e,n){console.log("Before",e,n);var r=t(e,n);return console.log("After",e,n),r}),he({},Pe,{cards:c,setCards:l}),Se),i=Object(o.a)(u,2),s=i[0],d=i[1];return Object(r.useEffect)(function(){d(ge(n))},[n]),Object(r.useEffect)(function(){d(ye(c))},[c]),a.a.createElement("div",{className:"IdeasDashboard"},a.a.createElement(Ee.a,null,s.filteredCards.map(function(e,t){return a.a.createElement(pe,{key:t,card:e,onDelete:function(){return d(xe(e))},onEdit:function(){return d(we(e))},setText:function(t){return d(Ce(e,t))}})}),a.a.createElement(ue,{onClick:function(){return d(je())}})),a.a.createElement(ce,{show:s.showModal,onCancel:function(){return d(Te())},onSave:function(e){return d(ke(e))},value:s.modalState}))}function Le(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],u=N().getTokenSilently,i=function(){var e=Object(T.a)(k.a.mark(function e(){var t,n,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:return t=e.sent,e.next=6,fetch("".concat("https://minddrop.herokuapp.com","/app-data"),{headers:{Authorization:"Bearer ".concat(t)}});case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,l(r.cards),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){null==c&&i()},[c]);var s=function(){var e=Object(T.a)(k.a.mark(function e(t){var n,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:return n=e.sent,e.next=6,fetch("".concat("https://minddrop.herokuapp.com","/app-data"),{method:"POST",body:JSON.stringify({name:"global",cards:t}),headers:{Authorization:"Bearer ".concat(n)}});case 6:return r=e.sent,e.next=9,r.text();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"Container"},a.a.createElement(Ie,Object.assign({},e,{cards:c||[],setCards:function(e){s(e),l(e)}})))}Ie.defaultProps={initialCards:null};var Ae=n(26),Ne=function(e){var t=e.component,n=e.path,c=Object(C.a)(e,["component","path"]),l=N(),o=l.loading,u=l.isAuthenticated,i=l.loginWithRedirect;Object(r.useEffect)(function(){o||u||function(){var e=Object(T.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({appState:{targetUrl:n}});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[o,u,i,n]);return a.a.createElement(Ae.a,Object.assign({path:n,render:function(e){return!0===u?a.a.createElement(t,e):null}},c))};var _e=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement(M,{labelFilter:n,setLabelFilter:r}),a.a.createElement(Ne,{component:function(){return a.a.createElement(Le,{labelFilter:n})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(239);var Me=n(43),Re=n(55);l.a.render(a.a.createElement(function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?L:n,l=e.returnTo,u=Object(C.a)(e,["children","onRedirectCallback","returnTo"]),i=Object(r.useState)(),s=Object(o.a)(i,2),d=s[0],f=s[1],p=Object(r.useState)(),m=Object(o.a)(p,2),b=m[0],E=m[1],v=Object(r.useState)(),h=Object(o.a)(v,2),O=h[0],y=h[1],g=Object(r.useState)(!0),j=Object(o.a)(g,2),w=j[0],x=j[1],S=Object(r.useState)(!1),P=Object(o.a)(S,2),N=P[0],_=P[1];Object(r.useEffect)(function(){(function(){var e=Object(T.a)(k.a.mark(function e(){var t,n,r,a,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()(u);case 2:if(t=e.sent,y(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,r=n.appState,c(r);case 10:return e.next=12,t.isAuthenticated();case 12:if(a=e.sent,f(a),!a){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,E(l);case 19:x(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var M=function(){var e=Object(T.a)(k.a.mark(function e(){var t,n,r=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},_(!0),e.prev=2,e.next=5,O.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,_(!1),e.finish(10);case 13:return e.next=15,O.getUser();case 15:n=e.sent,E(n),f(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(T.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,O.handleRedirectCallback();case 3:return e.next=5,O.getUser();case 5:t=e.sent,x(!1),f(!0),E(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(A.Provider,{value:{isAuthenticated:d,user:b,loading:w,popupOpen:N,loginWithPopup:M,handleRedirectCallback:R,getIdTokenClaims:function(){return O.getIdTokenClaims.apply(O,arguments)},loginWithRedirect:function(){return O.loginWithRedirect.apply(O,arguments)},getTokenSilently:function(){return O.getTokenSilently.apply(O,arguments)},getTokenWithPopup:function(){return O.getTokenWithPopup.apply(O,arguments)},logout:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return O.logout(I({},t,{returnTo:l}))}}},t)},{domain:Me.domain,client_id:Me.clientId,redirect_uri:window.location,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)},audience:Me.audience,returnTo:window.location},a.a.createElement(Re.a,null,a.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e){e.exports=JSON.parse('{"domain":"soft-poetry-3210.eu.auth0.com","clientId":"poAJRJA9W0qgqWKx5L-pQwMgridd6Fxn","audience":"https://minddrop.herokuapp.com"}')},92:function(e,t,n){e.exports=n(240)},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.078b84f3.chunk.js.map