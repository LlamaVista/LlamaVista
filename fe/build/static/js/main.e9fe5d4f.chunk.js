(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){e.exports=a(266)},16:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o});let n=function(e){return e.accessToken="access_token",e.refreshToken="refresh_token",e}({});function o(e){return null!==e&&void 0!==e&&7===Object.keys(e).length}},167:function(e,t){},172:function(e,t){},174:function(e,t){},205:function(e,t){},207:function(e,t){},208:function(e,t){},213:function(e,t){},216:function(e,t){},236:function(e,t){},252:function(e,t){},255:function(e,t){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(144),l=a.n(r),i=a(14),c=a(11),s=a(2),d=a(40),u=a(13),m=a(44);const p=s.c.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  h1 {
    color: ${e=>e.theme.mainPage.mostHighlightColor};
    font-size: 50px;
    margin-bottom: 60px;
  }
`,g=s.c.input`
  margin-bottom: 35px;
  padding: 8px;
  background-color: inherit;
  border: none;
  outline: none;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  border-bottom: 1px solid ${e=>e.theme.mainPage.mostHighlightColor};
`,h=s.c.button`
  background-color: #4044ed;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 12px;
`;var f=function(){const{register:e,handleSubmit:t}=Object(d.a)({defaultValues:{email:"",name:"",password:""}}),a=Object(c.g)(),{mutate:n}=Object(u.useMutation)(m.a,{onSuccess:e=>{alert("\ud68c\uc6d0\uac00\uc785 \uc644\ub8cc"),a.push("/login")},onError:e=>{alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc774\uba54\uc77c\uc785\ub2c8\ub2e4"),window.location.reload()}});return o.a.createElement(p,{encType:"multipart/form-data",onSubmit:t(e=>{n(e)})},o.a.createElement("h1",null,"Sign Up"),o.a.createElement(g,Object.assign({},e("email"),{required:!0,type:"email",placeholder:"email"})),o.a.createElement(g,Object.assign({},e("name"),{required:!0,type:"text",placeholder:"name"})),o.a.createElement(g,Object.assign({},e("password"),{required:!0,type:"password",placeholder:"password"})),o.a.createElement(h,{type:"submit"},"sign up"))},b=a(10),v=a(27),x=a(16),E=a(70);const y=()=>{const e=Object(b.f)(v.a),t=Object(E.a)("/demo"),{mutate:a,isLoading:n}=Object(u.useMutation)(m.b,{onSuccess:a=>{a.domain="Standard";const{access_token:n,domain:o}=a;localStorage.setItem(x.a.accessToken,JSON.stringify({access_token:n,domain:o})),e(a),t({access_token:n,domain:o})},onError:e=>{e.response&&401===e.response.status?(alert("\uc798\ubabb\ub41c \uc774\uba54\uc77c \ud639\uc740 \ube44\ubc00\ubc88\ud638"),window.location.reload()):console.log(e)}});return{mutate:a,isLoading:n}};var k=a(43);a(56).config();const w="http://52.78.245.13",j=s.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>e.theme.textColor};
`,O=s.c.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  h1 {
    color: ${e=>e.theme.mainPage.mostHighlightColor};
    font-size: 50px;
    margin-bottom: 60px;
  }
`,$=s.c.input`
  margin-bottom: 35px;
  padding: 8px;
  background-color: inherit;
  border: none;
  outline: none;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  border-bottom: 1px solid ${e=>e.theme.mainPage.mostHighlightColor};
`,C=s.c.button`
  background-color: #4044ed;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 12px;
`,S=Object(s.c)(i.b)`
  transition: 0.5s all;
  margin-top: 10px;
  display: flex;
  align-items: center;
  background-color: inherit;
  padding: 7px 14px;
  border: 1px solid ${e=>e.theme.mainPage.mostHighlightColor};
  border-radius: 16px;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  &:hover {
    color: ${e=>e.theme.textColor};
    background-color: ${e=>e.theme.mainPage.mostHighlightColor};
  }
`,_=s.c.div``,L=s.c.div`
  transition: 0.5s all;
  margin-top: 10px;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
  background-color: inherit;
  cursor: pointer;
  padding: 7px;
  border: 1px solid ${e=>e.theme.mainPage.mostHighlightColor};
  border-radius: 16px;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  &:hover {
    color: ${e=>e.theme.textColor};
    background-color: ${e=>e.theme.mainPage.mostHighlightColor};
  }
`,T=s.c.img``;s.c.img``;var F=function(){const e=Object(c.j)("/login"),t=Object(c.j)("/login/signup"),{register:a,handleSubmit:n}=Object(d.a)({defaultValues:{username:"",password:""}}),{mutate:r,isLoading:l}=y();return o.a.createElement(j,null,l?o.a.createElement(k.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"/login/signup"},o.a.createElement(f,null))),o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"/login"},o.a.createElement(O,{encType:"multipart/form-data",onSubmit:n(e=>{r(e)})},o.a.createElement("h1",null,"Login"),o.a.createElement($,Object.assign({},a("username"),{required:!0,type:"email",placeholder:"Id"})),o.a.createElement($,Object.assign({},a("password"),{required:!0,type:"password",placeholder:"password"})),o.a.createElement(C,{type:"submit"},"login")))),(null===e||void 0===e?void 0:e.isExact)&&o.a.createElement(S,{to:"/login/signup"},"Sign Up With Email"),(null===t||void 0===t?void 0:t.isExact)&&o.a.createElement(S,{to:"/login"},"Log in"),o.a.createElement(_,null,o.a.createElement(L,{onClick:()=>void alert("DNS \uc11c\ube44\uc2a4 \uae30\uac04\uc774 \uc885\ub8cc\ub418\uc5b4 \ud604\uc7ac \uad6c\uae00 \ub85c\uadf8\uc778 \uae30\ub2a5\uc744 \uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc591\ud574 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4")},o.a.createElement(T,{src:`${w}:3000/Images/google.svg`}),o.a.createElement("p",null,"sign in with google")))))},I=a(41);const z=s.c.section`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
`,B=s.c.div`
  @media (min-width: 1200px) {
    display: flex;
  }
  width: 40%;
  display: none;
  align-items: center;
`,q=s.c.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`,P=s.c.div`
  @media (max-width: 1200px) {
    &.mobile {
      display: flex;
    }
  }
  display: none;
  flex-direction: column;
  border-radius: 20px;
  width: 60%;
  padding: 30px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px;
  gap: 20px;
`,A=s.c.div`
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px;
  padding: 50px 80px;
  border-radius: 20px;
`,H=s.c.h1`
  @media (max-width: 1200px) {
    margin: 0;
  }
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`,M=s.c.p`
  color: ${e=>e.theme.mainPage.textColor};
  font-size: 18px;
`,D=s.c.button`
  @media (max-width: 1200px) {
    padding: 0;
    margin: 0;
    width: 20%;
  }

  background-color: #4044ed;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
  padding: 3px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-family: 'Apple SD gothic neo';
  font-size: 16px;
  font-weight: 100;
  margin-top: 20px;
`;var N=function(){const e=Object(I.a)("/demo"),{state:t}=Object(c.h)();return Object(n.useEffect)(()=>{(null===t||void 0===t?void 0:t.isReLoad)&&window.location.reload(),e()},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(z,null,o.a.createElement(B,null,o.a.createElement(A,null,o.a.createElement(H,null,"VISTA"),o.a.createElement(M,null,"VISTA is a convenient command prompt-based tool for data analysis, receiving JSON and Excel files as inputs and providing users with a variety of analysis results.",o.a.createElement("br",null)," ",o.a.createElement("br",null),"This data analysis service operates on a command prompt basis and is a tool that provides immediate analysis results when users enter various data formats such as JSON and Excel files through commands.",o.a.createElement("br",null)," ",o.a.createElement("br",null),"This service is useful to data scientists and nonprofessionals alike as a tool that allows data analytics to be easily performed at a command prompt. It is also modularized to facilitate the addition of new analytics capabilities and data formats, making it highly scalable. Services evolve through continuous updates and user feedback, lowering barriers to data analytics to help users gain more insight."),o.a.createElement(D,null,o.a.createElement("p",null,o.a.createElement(i.b,{to:"/home"},"Learn More"))))),o.a.createElement(q,null,o.a.createElement(P,{className:"mobile"},o.a.createElement(H,null,"VISTA"),o.a.createElement(M,null,"VISTA is a convenient command prompt-based tool for data analysis receiving JSON and Excel files as inputs and providing users with a variety of analysis results.",o.a.createElement("br",null)," ",o.a.createElement("br",null),"This data analysis service operates on a command prompt basis and is a tool that provides immediate analysis results when users enter various data formats such as JSON and Excel files through commands."),o.a.createElement(D,null,o.a.createElement("p",null,o.a.createElement(i.b,{to:"/home"},"Learn More")))),o.a.createElement(F,null))))},J=a(92),R=a(36),V=a(72),U=a(23);const G=s.c.span`
  cursor: pointer;
  color: blue;
`;var Q=e=>{let{fileId:t,thread_id:a}=e;const[r,l]=Object(n.useState)(""),{mutate:i,isLoading:c}=Object(u.useMutation)(R.d,{onSuccess:e=>{const a=e.filter(e=>t[0]in e);l(a[0][t[0]])}});Object(n.useEffect)(()=>{i(a)},[]);return o.a.createElement(o.a.Fragment,null,c?o.a.createElement("p",null,"Loading..."):r&&o.a.createElement(G,{onClick:async()=>{const e=await Object(U.a)({url:`http://52.78.245.13:8000/static/files/${t}.csv`,method:"GET",responseType:"blob"}),a=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",`${r}`),n.style.cssText="display:none",document.body.appendChild(n),n.click(),n.remove()}},r))};const X=s.c.img`
  width: 70%;
`;var W=e=>{let{fileId:t}=e;return o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(X,{src:`http://52.78.245.13:8000/static/images/${t}.png`,alt:""}))};const K=s.c.div`
  background-color: ${e=>{let{$role:t}=e;return"user"===t?"#e6f7ff":"#f4f4f4"}};
  color: ${e=>{let{$role:t}=e;return"#000000"}};
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-self: ${e=>{let{$role:t}=e;return"user"===t?"flex-end":"flex-start"}};
`;var Y=function(e){let{data:t,thread_id:a}=e;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(o.a.Fragment,null,t.map((e,t)=>{var n,r;return o.a.createElement(K,{key:t,$role:e.role},null===e||void 0===e?void 0:e.text,"user"===e.role&&void 0!==e.file_id&&0!==(null===(n=e.file_id)||void 0===n?void 0:n.length)&&o.a.createElement(Q,{key:t,thread_id:a,fileId:e.file_id}),"assistant"===e.role&&void 0!==e.file_id&&0!==(null===(r=e.file_id)||void 0===r?void 0:r.length)&&e.file_id.map(e=>o.a.createElement(W,{key:e,fileId:e})))})))};const Z=s.c.div`
  width: 85%;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  margin-bottom: 0;
  padding-bottom: 0;
`,ee=s.c.div`
  display: flex;
  flex-direction: column;
`;var te=o.a.memo(e=>{let{data:t,isStreamingLoading:a,thread_id:n}=e;return o.a.createElement(Z,null,o.a.createElement(ee,null,o.a.createElement(Y,{data:t,thread_id:n}),a&&o.a.createElement(k.a,{size:"15px"})))}),ae=a(93);const ne=s.c.div`
  background-color: ${e=>{let{$role:t}=e;return"user"===t?"#e6f7ff":"#f4f4f4"}};
  color: ${e=>{let{$role:t}=e;return"#000000"}};
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-self: ${e=>{let{$role:t}=e;return"user"===t?"flex-end":"flex-start"}};
`;var oe=function(e){let{data:t,isStreamingDone:a}=e;return o.a.createElement(o.a.Fragment,null,t&&!a?o.a.createElement(o.a.Fragment,null,t.map((e,t)=>o.a.createElement(ne,{key:t,$role:e.role},null===e||void 0===e?void 0:e.text))):o.a.createElement(o.a.Fragment,null))};const re=s.c.div`
  display: flex;
`,le=s.c.div`
  display: grid;
  grid-template-rows: 14fr 2fr;
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
`,ie=s.c.div`
  overflow: auto;
  border-radius: 15px 15px 0px 0px;
  padding: 20px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme.bgColor};
`,ce=s.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,se=s.c.form`
  width: 60%;
`,de=s.c.div`
  background-color: ${e=>e.theme.bgColor};
`,ue=s.c.input`
  transition: all 0.3s;
  text-align: center;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  outline: none;
  border: 0;
  &:focus {
    background-color: #8888884e;
  }
`,me=s.c.label`
  display: inline-block;
  padding: 5px 10px;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`,pe=s.c.input`
  display: none;
`,ge=s.c.span``,he=s.c.span`
  color: red;
  margin-left: 10px;
`,fe=s.c.button`
  display: none;
`,be=s.c.div`
  width: 85%;
  border-radius: 10px;
  padding: 10px;
`,ve=s.c.div`
  display: flex;
  flex-direction: column;
`;var xe=function(){var e;const t=Object(c.i)(),[a,r]=Object(n.useState)(!1),[l,i]=Object(n.useState)(!1),[s,m]=Object(n.useState)(null),[p,g]=Object(n.useState)(),[h,f]=Object(b.d)(V.b),{register:v,handleSubmit:x,formState:{errors:E}}=Object(d.a)({defaultValues:{message:"",file:""}}),y=t.thread_id,w=Object(I.a)(),{mutate:j,isLoading:O}=Object(u.useMutation)(R.b,{onSuccess:e=>{e.reverse(),e[0].text=null,f(e)}});Object(n.useEffect)(()=>{w(),j(y)},[y]);const{mutate:$,isLoading:C}=Object(u.useMutation)(R.e,{onSuccess:e=>{},onError:e=>{}});return Object(n.useEffect)(()=>{const e=document.querySelector("#chatInput");null!==e&&(e.disabled=!!C)},[C]),o.a.createElement(o.a.Fragment,null,o.a.createElement(re,null,o.a.createElement(J.a,null),o.a.createElement(ae.a,null),o.a.createElement(le,null,o.a.createElement(ie,null,O?o.a.createElement(k.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(te,{thread_id:y,isStreamingLoading:a,data:h}),o.a.createElement(be,null,o.a.createElement(ve,null,o.a.createElement(oe,{isStreamingDone:l,data:s}))))),o.a.createElement(ce,null,o.a.createElement(se,{onSubmit:x(e=>{let t;void 0!==h[0]?(t=void 0!==e.file[0]?[...h,{text:e.file[0].name,role:"user"},{text:e.message,role:"user"}]:[...h,{text:e.message,role:"user"}],f(t)):(t=void 0!==e.file[0]?[{text:e.file[0].name,role:"user"},{text:e.message,role:"user"}]:[{text:e.message,role:"user"}],f(t)),$({message:e.message,thread_id:y,setStreamingLoading:r,setStreamingDone:i,file:e.file[0],currentChatContent:t,setChatContent:f,setStrimingContent:m})}),encType:"multipart/form-data"},o.a.createElement(de,null,o.a.createElement(me,null,o.a.createElement(ge,null,p||"No file chosen"),o.a.createElement(pe,Object.assign({},v("file",{required:!1,onChange:e=>{var t,a;g(null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:null===(a=t.files[0])||void 0===a?void 0:a.name)}}),{type:"file"}))),o.a.createElement(he,null,null===E||void 0===E?void 0:null===(e=E.file)||void 0===e?void 0:e.message),o.a.createElement(ue,Object.assign({required:!0},v("message"),{id:"chatInput",placeholder:"change x axis label to meter per second"})),o.a.createElement(fe,{type:"submit"},"\uc81c\ucd9c")))))))};const Ee=Object(n.lazy)(()=>a.e(6).then(a.bind(null,274))),ye=Object(n.lazy)(()=>Promise.all([a.e(3),a.e(7)]).then(a.bind(null,271))),ke=Object(n.lazy)(()=>a.e(5).then(a.bind(null,272)));var we=function(){return o.a.createElement(i.a,null,o.a.createElement(n.Suspense,null,o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/chat/:thread_id"},o.a.createElement(xe,null)),o.a.createElement(c.b,{path:"/analytics/:fileId"},o.a.createElement(ke,null)),o.a.createElement(c.b,{path:"/login"},o.a.createElement(N,null)),o.a.createElement(c.b,{path:"/demo"},o.a.createElement(Ee,null)),o.a.createElement(c.b,{path:"/home"},o.a.createElement(ye,null)),o.a.createElement(c.b,{path:"*"},o.a.createElement(c.a,{to:"/home"})))))};const je=s.b`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	font-weight: 300;
	line-height: 1.2;
  background-color:${e=>e.theme.bodyColor};
  color:${e=>e.theme.textColor}
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
	color:inherit;
}
`;var Oe=function(){return console.warn=(()=>{}),o.a.createElement(o.a.Fragment,null,o.a.createElement(je,null),o.a.createElement(we,null))},$e=a(53),Ce=a(148);a(56).config();const Se=l.a.createRoot(document.getElementById("root")),_e=new u.QueryClient,Le="547636330593-85b3on38l6vhl4fh6oamk4ndo6u9rdcp.apps.googleusercontent.com";Se.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.QueryClientProvider,{client:_e},o.a.createElement(b.a,null,o.a.createElement(s.a,{theme:$e.a},o.a.createElement(Ce.a,{clientId:Le},o.a.createElement(Oe,null)))))))},27:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r});var n=a(10);const o=Object(n.b)({key:"tokenData"}),r=Object(n.b)({key:"userData",default:null})},36:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"e",function(){return c}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return u}),a.d(t,"f",function(){return m});var n=a(23),o=a(16);a(56).config();const r="http://52.78.245.13",l=()=>{return JSON.parse(localStorage.getItem(o.a.accessToken))},i=async e=>{const t=l();return(await n.a.post(`${r}:8000/create-chat`,e,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${t.access_token}`,token_type:t.domain}})).data},c=async e=>{const t=l(),a=new FormData;a.append("message",e.message),a.append("thread_id",e.thread_id),void 0!==e.file&&a.append("file",e.file);try{e.setStreamingLoading(!0);const o=await fetch(`${r}:8000/continue-chat`,{method:"POST",headers:{Authorization:`Bearer ${t.access_token}`,token_type:t.domain},body:a});if(!o.ok||!o.body)throw o.statusText;const l=o.body.getReader(),i=new TextDecoder;let c="",s=[];for(;;){const{value:t,done:a}=await l.read();if(e.setStreamingLoading(!1),a)break;c+=i.decode(t,{stream:!0}),s=[...e.currentChatContent,{text:c,role:"assistant"}],e.setStrimingContent([{text:c,role:"assistant"}])}e.setStreamingDone(!0),e.setChatContent(s);const d=await p(e.thread_id),u=[...e.currentChatContent,{text:c,role:"assistant",file_id:d}];return e.setChatContent(u),d}catch(n){}},s=async()=>{const e=l();return(await n.a.get(`${r}:8000/chat-list`,{headers:{Authorization:`Bearer ${e.access_token}`,token_type:e.domain}})).data},d=async e=>{const t=l();return(await n.a.get(`${r}:8000/db-store`,{headers:{Authorization:`Bearer ${t.access_token}`,token_type:t.domain},params:{thread_id:e}})).data},u=async e=>{const t=l();return(await n.a.get(`${r}:8000/user_file`,{headers:{Authorization:`Bearer ${t.access_token}`,token_type:t.domain},params:{thread_id:e}})).data},m=async e=>{const t=l(),a=new FormData;return a.append("csv_name",e),(await n.a.post(`${r}:8000/create-chat-example`,a,{headers:{Authorization:`Bearer ${t.access_token}`,token_type:t.domain}})).data},p=async e=>{const t=l();return(await n.a.get(`${r}:8000/file-store`,{headers:{Authorization:`Bearer ${t.access_token}`,token_type:t.domain},params:{thread_id:e}})).data}},41:function(e,t,a){"use strict";var n=a(11),o=a(16),r=a(70),l=a(10),i=a(13),c=a(71),s=a(27);a.d(t,"a",function(){return d});const d=e=>{const t=localStorage.getItem(o.a.accessToken);let a;a=null===t?null:JSON.parse(t);const d=Object(n.g)(),u=(e=>{const t=Object(l.f)(s.b),a=Object(n.g)(),{mutate:o}=Object(i.useMutation)(c.a,{onSuccess:n=>{t(n),void 0!==e&&a.push(e)},onError:e=>{a.push("/login")}});return o})(e),m=Object(r.a)(e);return()=>{var e;null===a?d.push("/login"):"Google"===(null===(e=a)||void 0===e?void 0:e.domain)?u(a.access_token):m({access_token:a.access_token,domain:a.domain})}}},43:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(2);const l=r.d`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,i=r.c.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4044ed;
  border-radius: 50%;
  width: ${e=>e.size};
  height: ${e=>e.size};
  animation: ${l} 1.5s linear infinite;
`;t.a=(e=>{let{size:t="50px"}=e;return o.a.createElement(i,{size:t})})},44:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return i});var n=a(23);a(56).config();const o="http://52.78.245.13",r=async e=>{return(await n.a.post(`${o}:8000/user/register`,e)).data},l=async e=>{return(await n.a.post(`${o}:8000/user/login`,e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).data},i=async e=>{return(await n.a.get(`${o}:8000/user/protected`,{headers:{Authorization:`Bearer ${e.access_token}`,token_type:e.domain}})).data}},53:function(e,t,a){"use strict";a.d(t,"a",function(){return r});const n=910,o=1200,r={device:{mobile:`(max-width: ${n}px)`,tablet:`(min-width: ${n}px) and (max-width: ${o}px)`,laptop:`screen and (min-width: ${o}px)`},bodyColor:"black",sideBarBgColor:"black",sideBarTextColor:"#888888",bgColor:"#ffffff",borderColor:"black",blurBgColor:"rgba(172, 172, 172, 0.8)",textColor:"black",highLightBgColor:"#626161",highLightTextColor:"#FFFFFF",logInTheme:{textColor:"#ffffff"},mainPage:{highlightTextColor:"#FAFAFA",TitleColor:"#D6D6D6",textColor:"#888888",mostHighlightColor:"#FFFFFF",boxShadow:"rgba(255, 255, 255, 0.14) 0px 0px 0px 1px"}}},70:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(11),o=a(10),r=a(13),l=a(27),i=a(44),c=a(16);const s=e=>{const t=Object(o.f)(l.b),a=Object(n.g)(),{mutate:s}=Object(r.useMutation)(i.c,{onSuccess:n=>{t(n),void 0!==e&&a.push(e)},onError:e=>{e.response&&401===e.response.status&&(localStorage.removeItem(c.a.accessToken),alert("\uc138\uc158\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc7ac\ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694"),a.push({pathname:"/login",state:{isReLoad:!0}}))}});return s}},71:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r});var n=a(23);const o=async e=>{return(await n.a.get("https://www.googleapis.com/oauth2/v2/userinfo",{headers:{Authorization:`Bearer ${e}`}})).data},r=async e=>{return await n.a.post("https://oauth2.googleapis.com/revoke",{token:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}},72:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return r});var n=a(10);const o=Object(n.b)({key:"userMessages",default:[]}),r=(Object(n.b)({key:"promptMessages"}),Object(n.b)({key:"chatList",default:[]}));Object(n.b)({key:"response",default:""}),Object(n.b)({key:"isChatLoading",default:!1})},92:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(14),l=a(11),i=a(10),c=a(2),s=a(27),d=a(41),u=a(13),m=a(71),p=a(16);const g=()=>{const e=Object(l.g)(),[t,a]=Object(i.d)(s.b),n=localStorage.getItem(p.a.accessToken),o=JSON.parse(n),{mutate:r}=Object(u.useMutation)(m.b,{onSuccess:t=>{localStorage.removeItem(p.a.accessToken),localStorage.removeItem(p.a.refreshToken),a(null),e.push("/login")},onError:e=>{}});return()=>{Object(p.b)(t)?r(o.access_token):(localStorage.removeItem(p.a.accessToken),a(null),e.push("/login"))}},h=(e,t,a)=>{const o=Object(n.useRef)([]),{pathname:r}=Object(l.h)();return Object(n.useEffect)(()=>{let n;const l=a=>{a.target.style.color=e,n.style.color=t},i=a=>{a.target.style.color=t,n.style.color=e};return(a||"/home"==r)&&(null===o||void 0===o||o.current.forEach(t=>{t=t,console.log(t);const a=t.href,o=a.substring(a.lastIndexOf("3000")+4);var c,s;(console.log(r,o),o===r)?(n=t).style.color=e:(null===(c=t)||void 0===c||c.addEventListener("mouseenter",e=>l(e)),null===(s=t)||void 0===s||s.addEventListener("mouseleave",e=>i(e)))})),()=>{null===o||void 0===o||o.current.forEach(e=>{var t,a;null===(t=e=e)||void 0===t||t.removeEventListener("mouseenter",l),null===(a=e)||void 0===a||a.removeEventListener("mouseleave",i)})}},[a]),o};var f=a(53),b=a(72),v=a(36);const x=c.c.header`
  box-shadow: rgba(255, 255, 255, 0.18) 1px 0px 0px 0px;
  text-align: center;
  p {
    color: #d6d6d6;
  }
  a,
  span {
    color: ${e=>e.theme.sideBarTextColor};
    font-weight: 400;
  }
  background-color: ${e=>e.theme.sideBarBgColor};
`,E=c.c.div`
  @media (max-width: 730px) {
    transition: width 2s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100vw !important;
  }
  background-color: ${e=>e.theme.sideBarBgColor};
  position: sticky;
  top: 0;
  transition: width 1s;
  width: 180px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`,y=c.c.div`
  display: flex;
  justify-content: flex-end;
`,k=c.c.span`
  position: relative;

  span {
    padding: 5px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    display: none;
  }
  &[data-state='displayed-open'] {
    span {
      display: block;
    }
  }
`,w=c.c.button`
  cursor: pointer;
`,j=c.c.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`,O=c.c.p`
  color: #ffffff !important;
  font-size: 25px;
  font-weight: bold !important;
  text-transform: uppercase;
`,$=c.c.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 70%;
`,C=c.c.ul`
  li {
    display: flex;
    justify-content: center;
  }
  li div {
    display: flex;
    justify-content: center;
    border-radius: 3px;
    gap: 10px;
    padding: 3px 0;
    width: 85%;
  }
`,S=c.c.li`
  div a {
    transition: color 0.5s;
  }
`,_=c.c.div``,L=(c.c.img``,c.c.li`
  div a {
    transition: color 0.5s;
  }
`),T=(c.c.img``,c.c.ul``),F=c.c.li`
  p {
    font-weight: bold;
  }
`,I=c.c.li`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  a {
    transition: color 0.5s;
  }
`,z=c.c.ul`
  li {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 10px;
    font-weight: bold;
  }
`,B=c.c.li`
  a {
    transition: color 0.5s;
  }
  a:hover {
    color: ${e=>e.theme.highLightTextColor};
  }
`,q=c.c.li`
  a,
  span {
    transition: color 0.5s;
  }
  a,
  span:hover {
    color: ${e=>e.theme.highLightTextColor};
    cursor: pointer;
  }
`,P=Object(c.c)(r.b)`
  cursor: pointer;
`;t.a=o.a.memo(function(){const e=Object(n.useRef)(null),t=Object(n.useRef)(null),[a,c]=Object(i.d)(b.a),m=Object(i.e)(s.b),[A,H]=Object(n.useState)(!1),[M,D]=Object(n.useState)(!1),{mutate:N,isLoading:J}=Object(u.useMutation)(v.c,{onError:e=>{},onSuccess:e=>{c(e),D(!0)}});Object(n.useEffect)(()=>{var a,n,o;const r=e=>{e.target.dataset.state="displayed-open"},l=e=>{e.target.dataset.state="close"},i=e=>{const a=null===t||void 0===t?void 0:t.current;a.style.visibility="hidden",a.style.width="0",document.querySelector(".toggleBtn").style.display="block"},c=window.matchMedia("(max-width: 1160px)");if(null===e||void 0===e||null===(a=e.current)||void 0===a||a.addEventListener("mouseenter",e=>r(e)),null===e||void 0===e||null===(n=e.current)||void 0===n||n.addEventListener("mouseleave",e=>l(e)),null===e||void 0===e||null===(o=e.current)||void 0===o||o.addEventListener("click",e=>i()),c.matches){const t=null===e||void 0===e?void 0:e.current;null===t||void 0===t||t.click()}else{const e=document.querySelector(".toggleBtn");null===e||void 0===e||e.click()}return c.addListener(t=>{if(t.matches){const t=null===e||void 0===e?void 0:e.current;null===t||void 0===t||t.click()}else{const e=document.querySelector(".toggleBtn");null===e||void 0===e||e.click()}}),()=>{var t,a,n;null===e||void 0===e||null===(t=e.current)||void 0===t||t.removeEventListener("mouseenter",e=>r(e)),null===e||void 0===e||null===(a=e.current)||void 0===a||a.removeEventListener("mouseleave",e=>l(e)),null===e||void 0===e||null===(n=e.current)||void 0===n||n.removeEventListener("click",e=>i())}},[]),Object(n.useEffect)(()=>{null!=m&&H(!0)},[m]),Object(n.useEffect)(()=>{A&&N()},[A]);const R=g(),V=Object(d.a)("/demo"),U=Object(l.g)(),G=h(f.a.highLightTextColor,f.a.sideBarTextColor,M);return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null,o.a.createElement(E,{className:"header",ref:t},o.a.createElement(y,null,o.a.createElement(k,{"data-state":"closed",ref:e},o.a.createElement(w,null,"X"),o.a.createElement("span",null,"\uc0ac\uc774\ub4dc\ubc14 \ub2eb\uae30"))),o.a.createElement(j,null,o.a.createElement(O,null,"vista")),o.a.createElement($,null,o.a.createElement(C,null,o.a.createElement(S,null,o.a.createElement(_,{id:"home"},o.a.createElement(r.b,{ref:e=>G.current[0]=e,to:"/home"},"Home"))),o.a.createElement(L,null,o.a.createElement(_,{id:"demo"},o.a.createElement(P,{ref:e=>G.current[1]=e,onClick:e=>(e=>{e.preventDefault(),void 0==localStorage.getItem(p.a.accessToken)?(alert("\ub85c\uadf8\uc778 \uc774\ud6c4 \uc774\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4"),U.push("/login")):V()})(e),to:"/demo"},"Create Chat")))),o.a.createElement(T,null,o.a.createElement(F,null,o.a.createElement("p",null,"DataList")),A&&(null===a||void 0===a?void 0:a.map((e,t)=>o.a.createElement(I,{key:e.thread_id},o.a.createElement(r.b,{ref:e=>G.current[t+2]=e,to:`/chat/${e.thread_id}`},e.name))))),o.a.createElement(z,null,o.a.createElement("p",null,"Authentication"),A?o.a.createElement(q,{onClick:()=>{R()}},o.a.createElement("span",null,"SignOut")):o.a.createElement(B,null,o.a.createElement(r.b,{to:"/login"},"SignIn")))))))})},93:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(2);const l=r.c.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-start;
`,i=r.c.span`
  position: relative;
  display: none;

  span {
    padding: 5px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    display: none;
  }
  &[data-state='displayed-open'] {
    span {
      display: block;
    }
  }
`,c=r.c.button`
  cursor: pointer;
`;t.a=function(){const e=Object(n.useRef)(null);return Object(n.useEffect)(()=>{var t,a,n;const o=e=>{e.target.dataset.state="displayed-open"},r=e=>{e.target.dataset.state="close"},l=t=>{const a=document.querySelector(".header");a.style.visibility="visible",(null===e||void 0===e?void 0:e.current).style.display="none",window.matchMedia("(max-width: 730px)").matches?a.style.width="100vw":a.style.width="180px"};return null===e||void 0===e||null===(t=e.current)||void 0===t||t.addEventListener("mouseenter",e=>o(e)),null===e||void 0===e||null===(a=e.current)||void 0===a||a.addEventListener("mouseleave",e=>r(e)),null===e||void 0===e||null===(n=e.current)||void 0===n||n.addEventListener("click",e=>l()),()=>{var t,a,n;null===e||void 0===e||null===(t=e.current)||void 0===t||t.removeEventListener("mouseenter",e=>o(e)),null===e||void 0===e||null===(a=e.current)||void 0===a||a.removeEventListener("mouseleave",e=>r(e)),null===e||void 0===e||null===(n=e.current)||void 0===n||n.removeEventListener("click",e=>l())}},[]),o.a.createElement(l,null,o.a.createElement(i,{className:"toggleBtn","data-state":"closed",ref:e},o.a.createElement(c,null,"X"),o.a.createElement("span",null,"\uc0ac\uc774\ub4dc\ubc14 \uc5f4\uae30")))}}},[[158,1,2]]]);
//# sourceMappingURL=main.e9fe5d4f.chunk.js.map