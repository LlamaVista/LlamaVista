(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{272:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),c=l(2),i=l(10);const o=c.c.img`
  width: 700px;
  height: 400px;
`;var r=function(e){let{image_file:t,value:l}=e;const a=`http://techvista24.com:8000/static/images/${t}.png`;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{src:a}),n.a.createElement("p",null,l))};const s=Object(i.b)({key:"resultData",default:[]}),u=Object(i.c)({key:"visualizationDatas",get:e=>{let{get:t}=e;return t(s).filter(e=>"image_file"===e.content[0].type)}}),d=Object(i.b)({key:"isExist",default:!1}),g=Object(i.b)({key:"firstId",default:[]}),m=c.c.h1`
  font-weight: bold;
`,f=c.c.div``,b=c.c.button``;var p=function(){var e,t,l;const c=Object(i.e)(u);console.log(c);const[o,s]=Object(a.useState)(0);return n.a.createElement("div",null,n.a.createElement(m,null,"visualization"),n.a.createElement(f,null,null===c||void 0===c?void 0:c.map((e,t)=>n.a.createElement(b,{key:t,onClick:()=>(e=>{s(e)})(t),style:{backgroundColor:t===o?"lightblue":"white"}},t+1))),n.a.createElement(r,{image_file:null===(e=c[o])||void 0===e?void 0:e.content[0].image_file.file_id,key:null===(t=c[o])||void 0===t?void 0:t.id,value:null===(l=c[o])||void 0===l?void 0:l.content[1].text.value}))},v=l(92),h=l(11),E=l(40);const x="data_list",O=c.c.div`
  display: flex;
`,y=c.c.div`
  display: grid;
  grid-template-rows: 14fr 1fr;
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
`,j=c.c.div`
  overflow: auto;
  border-radius: 15px 15px 0px 0px;
  padding: 20px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme.bgColor};
`,w=c.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,k=c.c.form`
  width: 60%;
`,S=c.c.div`
  background-color: ${e=>e.theme.bgColor};
`,I=c.c.input`
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
`,J=c.c.button`
  display: none;
`;t.default=function(){const[e,t]=Object(i.d)(s),[l,c]=Object(i.d)(d),o=Object(i.f)(g),r=Object(h.i)(),{register:u}=Object(E.a)(),{state:m}=Object(h.h)(),f=r.fileId;return Object(a.useEffect)(()=>{const e=localStorage.getItem(x);if(null===e)localStorage.setItem(x,JSON.stringify([f]));else{const t=[...JSON.parse(e||""),f],l=[...new Set(t)];o(l),localStorage.setItem(x,JSON.stringify(l))}if(void 0!==(null===m||void 0===m?void 0:m.data))t(m.data),localStorage.setItem(f,JSON.stringify(m.data)),c(!0);else if(null!==localStorage.getItem(f)){const e=JSON.parse(localStorage.getItem(f)||"");t(e),c(!0)}},[f]),n.a.createElement(n.a.Fragment,null,l?n.a.createElement(n.a.Fragment,null,n.a.createElement(O,null,n.a.createElement(v.a,null),n.a.createElement(y,null,n.a.createElement(j,null,n.a.createElement(p,null)),n.a.createElement(w,null,n.a.createElement(k,null,n.a.createElement(S,null,n.a.createElement(I,Object.assign({},u("user_message"),{placeholder:"change x axis label to meter per second"})),n.a.createElement(J,{type:"submit"},"\uc81c\ucd9c"))))))):"\ud30c\uc77c\uc744 \uc81c\ucd9c\ud574 \uc8fc\uc138\uc694")}}}]);
//# sourceMappingURL=5.a06ff4c5.chunk.js.map