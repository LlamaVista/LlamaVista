(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{356:function(e,n,t){"use strict";t.r(n);var a,r,l,c=t(4),i=t(0),o=t.n(i),u=t(123),s=t(3),d=t(60),m=t(7),p=s.c.div(a||(a=Object(c.a)(["\n  background-color: ",";\n  display: flex;\n  border-radius: 10px;\n  justify-content: center;\n  width: 60%;\n"])),function(e){return e.theme.bgColor}),f=s.c.input(r||(r=Object(c.a)(["\n  transition: all 0.3s;\n  text-align: center;\n  width: 95%;\n  margin-right: 15px;\n  border-radius: 10px;\n  outline: none;\n  border: 0;\n  &:focus {\n    background-color: #8888884e;\n  }\n"]))),b=s.c.button(l||(l=Object(c.a)(["\n  display: none;\n"])));var g,v,E,j,h,x,O,y,w,C,k=function(e){var n=e.register;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null,o.a.createElement(f,Object.assign({},n("name"),{required:!0,placeholder:"write the chating room name"})),o.a.createElement(b,{type:"submit"},"\uc81c\ucd9c")))},S=t(59),F=t(21),I=t(19),q=t(86),J=t(51),L=t(124),M=s.c.div(g||(g=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),_=s.c.div(v||(v=Object(c.a)(["\n  width: 100%;\n  background-color: ",";\n  border-radius: 15px 0px 0px 15px;\n"])),function(e){return e.theme.bgColor}),D=s.c.section(E||(E=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: ",";\n"])),function(e){return e.theme.textColor}),R=s.c.form(j||(j=Object(c.a)(["\n  width: 60%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  p {\n    font-weight: 400;\n  }\n"]))),T=s.c.div(h||(h=Object(c.a)(["\n  height: 50%;\n  width: 70%;\n"]))),U=s.c.input(x||(x=Object(c.a)(["\n  display: none;\n"]))),V=s.c.label(O||(O=Object(c.a)(["\n  padding: 25% 20%;\n  margin-top: 15px;\n  cursor: pointer;\n  border-radius: 10px;\n  border: 1px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    margin-top: 10px;\n  }\n"])),function(e){return e.theme.borderColor}),z=s.c.img(y||(y=Object(c.a)([""]))),A=s.c.div(w||(w=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]))),B=s.c.div(C||(C=Object(c.a)(["\n  cursor: pointer;\n  border: 1px solid ",";\n  border-radius: 10px;\n  padding: 5px 10px;\n  margin: 10px 5px;\n"])),function(e){return e.theme.borderColor});var G,H=function(){var e,n=Object(i.useState)(!1),t=Object(m.a)(n,2),a=t[0],r=t[1],l=Object(i.useState)(),c=Object(m.a)(l,2),u=c[0],s=c[1],d=Object(i.useState)(),p=Object(m.a)(d,2),f=p[0],b=p[1],g=Object(S.a)({defaultValues:{file:null,name:""}}),v=g.register,E=g.handleSubmit,j=g.formState.errors,h=Object(F.useMutation)(J.a,{onSuccess:function(e){b(e.thread_id),r(!0)},onError:function(e){}}),x=(h.data,h.mutate),O=h.isLoading,y=Object(F.useMutation)(J.f,{onSuccess:function(e){b(e.thread_id),r(!0)},onError:function(e){}}).mutate,w=function(e){y(e)};return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(I.a,{to:{pathname:"/chat/".concat(f)}}):O?o.a.createElement(M,null," ",o.a.createElement(q.a,null)):o.a.createElement(_,null,o.a.createElement(L.a,null),o.a.createElement(D,null,o.a.createElement(R,{encType:"multipart/form-data",onSubmit:E(function(e){var n=new FormData;e.file=e.file[0],n.append("name",e.name),n.append("file",e.file),x(n)})},o.a.createElement(T,null,o.a.createElement(U,Object.assign({},v("file",{required:"File is Required",validate:function(e){if(e){var n,t=null===(n=e[0])||void 0===n?void 0:n.name.split(".").pop().toLowerCase();if(!["csv","json"].includes(t))return"Invalid file format. Only csv or files are allowed."}},onChange:function(e){var n,t;s(null===e||void 0===e?void 0:null===(n=e.target)||void 0===n?void 0:null===(t=n.files[0])||void 0===t?void 0:t.name)}}),{type:"file",id:"file"})),o.a.createElement(V,{htmlFor:"file"},o.a.createElement(z,{src:"http://localhost:3000/Images/fileUpload.svg"}),u?o.a.createElement("p",null,u):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"upload your own file"),o.a.createElement("p",null,"Only .json and .csv files can be accepted"))),o.a.createElement(A,null,o.a.createElement(B,{onClick:function(){return w("cars.csv")}},o.a.createElement("p",null,"cars.csv")),o.a.createElement(B,{onClick:function(){return w("housing.csv")}},o.a.createElement("p",null,"housing.csv")),o.a.createElement(B,{onClick:function(){return w("Iris.csv")}},o.a.createElement("p",null,"Iris.csv")))),o.a.createElement(k,{register:v}),o.a.createElement("h1",{style:{color:"red"}},null===j||void 0===j?void 0:null===(e=j.file)||void 0===e?void 0:e.message)))))},K=s.c.div(G||(G=Object(c.a)(["\n  display: flex;\n"])));n.default=function(){var e=Object(d.a)();return Object(i.useEffect)(function(){e()},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(K,null,o.a.createElement(u.a,null),o.a.createElement(H,null)))}}}]);
//# sourceMappingURL=6.83073cfa.chunk.js.map