(this["webpackJsonpblogpost-amplify"]=this["webpackJsonpblogpost-amplify"]||[]).push([[0],{280:function(e,t,a){e.exports=a.p+"static/media/unicorngym.869dd411.png"},318:function(e,t,a){e.exports=a(492)},323:function(e,t,a){},334:function(e,t){},336:function(e,t){},346:function(e,t){},348:function(e,t){},375:function(e,t){},377:function(e,t){},378:function(e,t){},383:function(e,t){},385:function(e,t){},391:function(e,t){},393:function(e,t){},412:function(e,t){},424:function(e,t){},427:function(e,t){},484:function(e,t,a){},492:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(62),l=a.n(c),o=(a(323),a(324),a(325),a(51)),i=a.n(o),s=a(79),u=a(40),m=a(103),d=a(274),p=a(436),f=a(295),g=a(534),E=a(540),h=a(539),y=a(528);var v=function(e){return r.a.createElement(E.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(E.a.Brand,null,"\xa0 AWS Cognito Unicorn Gym"),r.a.createElement(h.a,{className:"justify-content-end",style:{width:"100%"}},e.token?r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(y.a,{style:{textAlign:"right",float:"right"},variant:"danger",onClick:function(){return f.a.signOut()}},"Sign Out")):null))},b=a(530),w=a(279),k=a(541),O=a(531),j=a(538);var S=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),d=m[0],p=m[1],g=Object(n.useState)(!0),E=Object(u.a)(g,2),h=E[0],v=E[1];function S(){return(S=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.a.signIn(c,d);case 4:a=e.sent,console.log("res "+a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error signing in",e.t0),v(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(b.a,null,r.a.createElement(w.a,{sm:3}),r.a.createElement(w.a,{sm:6},r.a.createElement(k.a,{style:{width:"100%"}},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,h?r.a.createElement("p",null):r.a.createElement(O.a,{variant:"danger"},"Oops! Invalid Username or Password"),r.a.createElement("h3",{style:{textAlign:"center"}},"Welcome")),r.a.createElement(k.a.Text,{style:{textAlign:"center"}},"In order to proceed please authenticate"),r.a.createElement(b.a,null,r.a.createElement(w.a,{sm:3}),r.a.createElement(w.a,{sm:6}," ",r.a.createElement("div",{className:"Login"},r.a.createElement(j.a,{onSubmit:function(e){return S.apply(this,arguments)}},r.a.createElement(j.a.Group,{size:"lg",controlId:"email"},r.a.createElement(j.a.Control,{autoFocus:!0,type:"email",value:c,placeholder:"username",onChange:function(e){return l(e.target.value)}})),r.a.createElement(j.a.Group,{size:"lg",controlId:"password"},r.a.createElement(j.a.Control,{type:"password",value:d,placeholder:"password",onChange:function(e){return p(e.target.value)}})),r.a.createElement(y.a,{block:!0,variant:"success",type:"submit",disabled:!(c.length>0&&d.length>0)},"Sign In")))),r.a.createElement(w.a,{sm:3}," ")),r.a.createElement(k.a.Text,{style:{textAlign:"center"}},"No Account? ",r.a.createElement("a",{style:{color:"blue"}},"Sinup Here")),r.a.createElement(b.a,null,r.a.createElement(w.a,{sm:3}),r.a.createElement(w.a,{sm:6}," ",r.a.createElement(y.a,{block:!0,variant:"primary",onClick:function(){return f.a.federatedSignIn({provider:e.federatedIdName})}},"Sign In with Okta")),r.a.createElement(w.a,{sm:3}," "))))),r.a.createElement(w.a,{sm:3}))},x=a(532),A=a(537),I=a(533),C=a(280),T=a.n(C),N=a(281),z=a(282),H=a.n(z),B=a(176);a(451),a(452);var F=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),m=Object(u.a)(o,2),p=m[0],f=m[1],g=Object(n.useState)(""),E=Object(u.a)(g,2),h=E[0],v=E[1];function O(){return(O=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){l(null),f(!p)}function S(){var t={headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded",Authorization:e.token,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"}};return d.a.get("tokenvalidator","/dev/products",t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(w.a,{sm:3}),r.a.createElement(w.a,{sm:6},r.a.createElement(k.a,{style:{width:"100%"}},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,r.a.createElement("p",{style:{textAlign:"center",color:"green"}},"Hello ",e.user?e.user.email:" ")),r.a.createElement(b.a,null,r.a.createElement(w.a,{sm:2}),r.a.createElement(w.a,{sm:8}," ",r.a.createElement("p",{style:{textAlign:"center",color:"red"}},e.user?"Welcome to AWS Cognito Unicorn Gym":" ")),r.a.createElement(w.a,{sm:2}," ")),r.a.createElement(b.a,null,r.a.createElement(w.a,{sm:2}),r.a.createElement(w.a,{sm:8}," ",r.a.createElement(x.a,{style:{width:"50%",alignSelf:"center"},src:T.a,roundedCircle:!0})),r.a.createElement(w.a,{sm:8},r.a.createElement(y.a,{variant:"success",onClick:function(){var t=Object(N.a)(e.token);console.log(t),v(t)}},"View my Token")," "," "," "," "," "," "," "," "," ",r.a.createElement(y.a,{variant:"primary",onClick:function(){return O.apply(this,arguments)}},"View Products")),r.a.createElement(w.a,{sm:8},r.a.createElement(H.a,{value:h?JSON.stringify(h):"",highlight:function(e){return Object(B.highlight)(e,B.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})),r.a.createElement(w.a,{sm:2}," "))))),r.a.createElement(w.a,{sm:3})),r.a.createElement(A.a,{size:"lg",show:p,onHide:j},r.a.createElement(A.a.Header,null,r.a.createElement(A.a.Title,null,r.a.createElement("h3",{style:{textAlign:"center"}},"Response"))),r.a.createElement(A.a.Body,null,c?r.a.createElement("p",null,"Here is the response: ",c):r.a.createElement("h3",{style:{textAlign:"center"}},r.a.createElement(I.a,{animation:"border",variant:"primary"}))),r.a.createElement(A.a.Footer,null,r.a.createElement(y.a,{variant:"secondary",onClick:j},"Close"))))},W=(a(484),{Auth:{region:"us-east-1",userPoolId:"us-east-1_zB9i2DNdc",userPoolWebClientId:"lm19e41l9t50e1a414ie68ogm",identityPoolId:"us-east-1:fe36d2cc-1c95-4d64-95d8-3a3fd2e88d70",oauth:{domain:"unicorngymdemo-dev.auth.us-east-1.amazoncognito.com",scope:["email","openid","aws.cognito.signin.user.admin","profile"],redirectSignIn:"https://dev.d1we7at3yfgko.amplifyapp.com/",redirectSignOut:"https://dev.d1we7at3yfgko.amplifyapp.com/",responseType:"code"}},API:{endpoints:[{name:"tokenvalidator",endpoint:"https://vs08pbf9rk.execute-api.us-east-1.amazonaws.com"}]}});m.default.configure(W),d.a.configure(W);var P=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),m=o[0],d=o[1];function E(){return(E=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.currentAuthenticatedUser();case 2:t=e.sent,console.log("attributes:",t.attributes),d(JSON.parse(JSON.stringify(t.attributes)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){p.a.listen("auth",(function(e){var t=e.payload,a=t.event,n=t.data;switch(a){case"signIn":case"cognitoHostedUI":c("grating..."),f.a.currentSession().then((function(e){return e})).catch((function(e){return console.log(e)})).then((function(e){return c(e.idToken.jwtToken)})),function(){E.apply(this,arguments)}();break;case"signOut":c(null);break;case"signIn_failure":case"cognitoHostedUI_failure":console.log("Sign in failure",n)}}))}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(v,{token:a}),r.a.createElement(g.a,{fluid:!0},r.a.createElement("br",null),a?r.a.createElement(F,{token:a,user:m}):r.a.createElement(S,{federatedIdName:"Okta"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[318,1,2]]]);
//# sourceMappingURL=main.51604314.chunk.js.map