(this["webpackJsonppanic-pet"]=this["webpackJsonppanic-pet"]||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),o=n(20),s=n.n(o),r=(n(57),n(58),n(9));var l=function(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(r.a)(n,2),i=a[0],o=a[1];return[i,function(t){try{var n=t instanceof Function?t(i):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},d="https://images.vexels.com/media/users/3/160071/isolated/lists/8a4c9b162a4495af9185c91a57b6334f-cute-dog-puppy-tail-ear-tongue-flat.png",m="https://static.skillshare.com/uploads/project/230282/cover_800_03d7d5fe52fdd0534e36d67dcc2dd786.png",u="https://i.pinimg.com/originals/5f/31/3d/5f313d0b5de732357b911012185d110b.png",g=n(79),j=n(81),p=n(82),b=n(80),h=n(77),f=Object(h.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:34},petButton:{margin:"8px 0px",height:64},petButtons:{position:"fixed",bottom:80,marginLeft:16,marginRight:16},petImage:{height:150},header:{display:"flex",marginBottom:40},backButton:{position:"fixed",left:"8px",top:"16px"},imageContainer:{}}),x=function(e){var t=e.title,n=e.items,c=e.imageUrl,i=e.onItemSelected,o=e.onBackButtonClick,s=f();return Object(a.jsxs)("div",{className:s.container,children:[Object(a.jsx)("div",{className:s.backButton,children:o&&Object(a.jsx)(g.a,{onClick:o,size:"small",children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)("div",{className:s.header,children:Object(a.jsx)(j.a,{variant:"h4",align:"center",children:t})}),Object(a.jsx)("div",{className:s.imageContainer,children:Object(a.jsx)("img",{src:c,alt:"a cute pet",className:s.petImage})}),Object(a.jsx)("div",{className:s.petButtons,children:n.map((function(e){return Object(a.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,className:s.petButton,onClick:function(){i(e)},children:e})}))})]})},O=function(e){var t=e.pet,n=e.specie,c=e.name,i=e.onConfirm,o=e.onBackButtonClick;return Object(a.jsx)(x,{title:"Ready to meet ".concat(c,", your new ").concat(n," ").concat(t,"?"),items:["Meet ".concat(c)],imageUrl:"Cat"===t?m:"Dog"===t?d:u,onItemSelected:i,onBackButtonClick:o})},v=function(e){var t=e.onNameSelected,n=e.onBackButtonClick,c=e.pet;return Object(a.jsx)(x,{title:"Pick Your Pets Name!",items:["Joan","Frederick","Mittens","Paws","Enter Your Own Name"],imageUrl:"Cat"===c?m:"Dog"===c?d:u,onItemSelected:t,onBackButtonClick:n})},C=function(e){var t=e.onPetSelected;return Object(a.jsx)(x,{title:"Pick Your Pet!",items:["Cat","Dog","Bird"],imageUrl:"https://i.pinimg.com/originals/97/ac/45/97ac45eac6b2225b934ce8d9ab00a56d.png",onItemSelected:t})},y=function(e){var t=e.onSpecieSelected,n=e.onBackButtonClick,c=e.pet;return Object(a.jsx)(x,{title:"Select your ".concat(c,"'s species:"),items:"Cat"===c?["Siamese","Benghal","Calico","Sphinx"]:"Dog"===c?["Hound","Golden Retriever","Husky","Poodle"]:["Parrot","Parrakeet","Dove"],imageUrl:"Cat"===c?m:"Dog"===c?d:u,onItemSelected:t,onBackButtonClick:n})},k=n(45),S=Object(k.a)({}),w=Object(h.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:S.spacing(2)},petButton:{margin:"8px 0px",height:64},petButtons:{position:"fixed",bottom:24,width:"calc(100%-32px)"}}),B=function(){w();var e=Object(c.useState)("petSelect"),t=Object(r.a)(e,2),n=t[0],i=t[1],o=l("pet","Dog"),s=Object(r.a)(o,2),d=s[0],m=s[1],u=l("specie",""),g=Object(r.a)(u,2),j=g[0],p=g[1],b=l("name",""),h=Object(r.a)(b,2),f=h[0],x=h[1];return Object(a.jsxs)(a.Fragment,{children:["petSelect"===n&&Object(a.jsx)(C,{onPetSelected:function(e){m(e),i("speciesSelect")}}),"speciesSelect"===n&&Object(a.jsx)(y,{pet:d,onSpecieSelected:function(e){p(e),i("naming")},onBackButtonClick:function(){i("petSelect")}}),"naming"===n&&Object(a.jsx)(v,{pet:d,onNameSelected:function(e){x(e),i("completed")},onBackButtonClick:function(){i("speciesSelect")}}),"completed"===n&&Object(a.jsx)(O,{pet:d,name:f,specie:j,onBackButtonClick:function(){i("naming")},onConfirm:function(){window.location.href="../dashboard"}})]})},I=n(88),N=n(47),D=n(44),U=n(6),R=n(26),P=n.p+"static/media/ConyEating2.9a2846a6.gif",M=n.p+"static/media/conyGivePresent.d8143888.gif",H=n.p+"static/media/conyGiveLove.36e1f916.gif",Y=Object(h.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",height:200,width:200}}),q=function(e){var t=e.imageUrl,n=e.width,c=void 0===n?200:n,i=e.height,o=void 0===i?200:i,s=Y();return Object(a.jsx)("img",{src:t,alt:"a cute pet",className:s.container,style:{width:c,height:o}})},F=[{draggableImageUrl:"https://images.vexels.com/media/users/3/151649/isolated/preview/058d4939c563ec3ec4c093f949aecb1c-cone-ice-cream-cartoon-by-vexels.png",initialComponent:Object(a.jsx)(q,{imageUrl:"https://i.pinimg.com/originals/8c/87/aa/8c87aa23ff8a6c938da6e4ade979690c.png"}),completedComponent:Object(a.jsx)(q,{imageUrl:P}),actionCompletedMessage:"Yummy yummy in my tummy",actionCompletedHint:"Thank you for the snackity snack",actionRequestHint:"Drag the ice cream to my mouth to feed me!",actionRequestMessage:"Feed me, I'm hungry!!"},{draggableImageUrl:"https://www.industrialheating.com/ext/resources/images/Heat-Treated-Gifts/secretlondon-red-present-300px.png",initialComponent:Object(a.jsx)(q,{imageUrl:"https://thumbs.gfycat.com/WarpedZigzagIchthyosaurs-size_restricted.gif"}),completedComponent:Object(a.jsx)(q,{imageUrl:M}),actionCompletedMessage:"YAYYYYYYY",actionCompletedHint:"Thank you for this awesome surprise gift!!",actionRequestHint:"Drag the gift into my hands to give me a surprise",actionRequestMessage:"Can I have a present?"},{draggableImageUrl:"https://img.icons8.com/cotton/2x/like.png",initialComponent:Object(a.jsx)(q,{imageUrl:"https://www.jing.fm/clipimg/full/128-1287237_sweet-drawing-love-brown-and-cony-love.png"}),completedComponent:Object(a.jsx)(q,{imageUrl:H}),actionCompletedMessage:"Awww thanks I feel better now!!",actionCompletedHint:"I really needed that hug, thank you, I appreciate you",actionRequestHint:"Drag the heart to me to hug me",actionRequestMessage:"I just got dumped can you give me a hug?"}],L=function(){return F[Math.floor(Math.random()*F.length)]},T=n(33),A=n(46),J=n(42),G=function(e){return Object(h.a)({container:{width:100,height:100,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",whiteSpace:"pre",backgroundImage:"url(".concat(e,");"),backgroundSize:"cover"},headerContainer:{}})};var Z=function(e){var t=e.imageUrl,n=e.onRelease,c=G(t)();console.log(c);var i=Object(R.b)((function(){return{xy:[0,0]}})),o=Object(r.a)(i,2),s=o[0].xy,l=o[1],d=Object(J.a)((function(e){var t=e.down,a=e.delta,c=e.velocity;c=Object(A.a)(c,1,8),l({xy:t?a:[0,0],config:{mass:c,tension:500*c,friction:50}}),t||n()}));return Object(a.jsx)(R.a.div,Object(T.a)(Object(T.a)({},d()),{},{className:c.container,style:{transform:s.interpolate((function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")})),touchAction:"none"}}))},_=Object(h.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:34},imgContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",height:400,flexDirection:"column"},headerContainer:{}}),z=Object(R.a)((function(){var e=_(),t=Object(c.useState)(L()),n=Object(r.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)(!1),l=Object(r.a)(s,2),d=l[0],m=l[1];return Object(a.jsxs)("div",{className:e.container,children:[Object(a.jsxs)("div",{className:e.headerContainer,children:[Object(a.jsx)(j.a,{variant:"h4",align:"center",children:d?i.actionCompletedMessage:i.actionRequestMessage}),Object(a.jsx)(j.a,{variant:"subtitle1",align:"center",children:d?i.actionCompletedHint:i.actionRequestHint})]}),Object(a.jsxs)("div",{className:e.imgContainer,children:[d&&i.completedComponent,!d&&i.initialComponent,!d&&Object(a.jsx)(Z,{imageUrl:i.draggableImageUrl,onRelease:function(){m(!0),setTimeout((function(){m(!1),o(L())}),5e3)}})]})]})})),E=n(83),V=n(84),W=n(85),X=n(86),K=n(87),Q=Object(h.a)({root:{width:"100%"}}),$=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],i=(t[1],Q());return Object(a.jsxs)(E.a,{value:n,onChange:function(e,t){window.location.href="../".concat(t)},showLabels:!0,className:i.root,children:[Object(a.jsx)(V.a,{label:"My Pets",value:"dashboard",icon:Object(a.jsx)(W.a,{})}),Object(a.jsx)(V.a,{label:"Statistics",value:"stats",icon:Object(a.jsx)(X.a,{})}),Object(a.jsx)(V.a,{label:"Settings",value:"create",icon:Object(a.jsx)(K.a,{})})]})};var ee=function(){var e=Object(N.a)();return Object(a.jsxs)(I.a,{children:[Object(a.jsx)("div",{style:{backgroundImage:"url(".concat("https://lh3.googleusercontent.com/proxy/AX2SPHgc9_NRgrrLUWlLGCK9VTuNeAUaGxC0k1M1IRPNFtoERwOqo_1Jutuk1ZSrSYgOm2gD6l2bTtv-P04JbWqfyO51D76AZVco0Md5ih3cV6tZVIn4Pg9SkDxDArcqZ8usnLHDLsmjaoH3SRDXNk4Z4BlfDIY1jS8",")"),backgroundRepeat:"repeat",height:e-56},children:Object(a.jsx)(D.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(U.c,{children:[Object(a.jsx)(U.a,{path:"/create",children:Object(a.jsx)(B,{})}),Object(a.jsx)(U.a,{path:"/dashboard",children:Object(a.jsx)(z,{})}),Object(a.jsx)(U.a,{path:"/",children:Object(a.jsx)(B,{})})]})})})}),Object(a.jsx)($,{})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(ee,{})}),document.getElementById("root")),te()}},[[63,1,2]]]);
//# sourceMappingURL=main.19f8fa1d.chunk.js.map