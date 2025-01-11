(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{274:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(92),i=n(2),o=n(41);const c=i.c.div`
  background-color: ${e=>e.theme.bgColor};
  display: flex;
  border-radius: 10px;
  justify-content: center;
  width: 60%;
`,s=i.c.input`
  transition: all 0.3s;
  text-align: center;
  width: 95%;
  margin-right: 15px;
  border-radius: 10px;
  outline: none;
  border: 0;
  &:focus {
    background-color: #8888884e;
  }
`,d=i.c.button`
  display: none;
`;var u=function(e){let{register:t}=e;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,null,l.a.createElement(s,Object.assign({},t("name"),{required:!0,placeholder:"write the chating room name"})),l.a.createElement(d,{type:"submit"},"\uc81c\ucd9c")))},m=n(40),p=n(13),f=n(11),g=n(43),v=n(36),E=n(93);const h="http://52.78.245.13",b=i.c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=i.c.div`
  width: 100%;
  background-color: ${e=>e.theme.bgColor};
  border-radius: 15px 0px 0px 15px;
`,y=i.c.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${e=>e.theme.textColor};
`,j=i.c.form`
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  p {
    font-weight: 400;
  }
`,w=i.c.div`
  height: 50%;
  width: 70%;
`,O=i.c.input`
  display: none;
`,C=i.c.label`
  padding: 25% 20%;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 10px;
  }
`,k=i.c.img``,S=i.c.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`,F=i.c.div`
  cursor: pointer;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px 5px;
`;var $=function(){var e;const[t,n]=Object(a.useState)(!1),[r,i]=Object(a.useState)(),[o,c]=Object(a.useState)(),{register:s,handleSubmit:d,formState:{errors:$}}=Object(m.a)({defaultValues:{file:null,name:""}}),{data:_,mutate:q,isLoading:I}=Object(p.useMutation)(v.a,{onSuccess:e=>{c(e.thread_id),n(!0)},onError:e=>{}}),{mutate:J}=Object(p.useMutation)(v.f,{onSuccess:e=>{c(e.thread_id),n(!0)},onError:e=>{}}),L=e=>{J(e)};return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(f.a,{to:{pathname:`/chat/${o}`}}):I?l.a.createElement(b,null," ",l.a.createElement(g.a,null)):l.a.createElement(x,null,l.a.createElement(E.a,null),l.a.createElement(y,null,l.a.createElement(j,{encType:"multipart/form-data",onSubmit:d(e=>{const t=new FormData;e.file=e.file[0],t.append("name",e.name),t.append("file",e.file),q(t)})},l.a.createElement(w,null,l.a.createElement(O,Object.assign({},s("file",{required:"File is Required",validate:e=>{const t=["csv","json"];if(e){var n;const a=null===(n=e[0])||void 0===n?void 0:n.name.split(".").pop().toLowerCase();if(!t.includes(a))return"Invalid file format. Only csv or files are allowed."}},onChange:e=>{var t,n;i(null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:null===(n=t.files[0])||void 0===n?void 0:n.name)}}),{type:"file",id:"file"})),l.a.createElement(C,{htmlFor:"file"},l.a.createElement(k,{src:`${h}:3000/Images/fileUpload.svg`}),r?l.a.createElement("p",null,r):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"upload your own file"),l.a.createElement("p",null,"Only .json and .csv files can be accepted"))),l.a.createElement(S,null,l.a.createElement(F,{onClick:()=>L("iris.csv")},l.a.createElement("p",null,"iris.csv")),l.a.createElement(F,{onClick:()=>L("london_houses.csv")},l.a.createElement("p",null,"london_houses.csv")),l.a.createElement(F,{onClick:()=>L("shopping_trends.csv")},l.a.createElement("p",null,"shopping_trends.csv")))),l.a.createElement(u,{register:s}),l.a.createElement("h1",{style:{color:"red"}},null===$||void 0===$?void 0:null===(e=$.file)||void 0===e?void 0:e.message)))))};const _=i.c.div`
  display: flex;
`;t.default=function(){const e=Object(o.a)();return Object(a.useEffect)(()=>{e()},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null,l.a.createElement(r.a,null),l.a.createElement($,null)))}}}]);
//# sourceMappingURL=6.0253f860.chunk.js.map