(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{271:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(92),i=a(2),c=a(41),r=a(93),s=a(11),d=a(16);i.c.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-start;
`,i.c.span`
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
`,i.c.button`
  cursor: pointer;
`;const p=i.c.main`
  @media (max-width: 1447px) {
    padding: 50px 130px;
  }
  /* width: 84%; */
  display: flex;
  flex-direction: column;
  padding: 150px 130px;
  text-align: center;
`,m=i.c.h1`
  display: block;
  color: ${e=>e.theme.mainPage.TitleColor};
  font-size: 69px;
  font-weight: bold;
  padding: 24px;
`,u=i.c.div`
  padding: 40px 32px;
`,g=i.c.p`
  color: ${e=>e.theme.mainPage.textColor};
  font-size: 23px;
  line-height: 30px;
  strong {
    color: ${e=>e.theme.mainPage.mostHighlightColor};
    font-weight: 400;
  }
`,x=i.c.div`
  padding: 30px 0;
`,h=i.c.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  a {
    display: block;
    width: 100px;
    padding: 18px 14px;
    border-radius: 8px;
    span {
      font-weight: 400;
    }
  }
`,f=i.c.a`
  background-color: ${e=>e.theme.mainPage.highlightTextColor};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #cccccc;
  }
`,b=i.c.a`
  background-color: ${e=>e.theme.bodyColor};
  color: ${e=>e.theme.mainPage.highlightTextColor};
  box-shadow: rgba(255, 255, 255, 0.14) 0px 0px 0px 1px;
  transition: all 0.4s;

  &:hover {
    background-color: #1f1f1f;
  }
`;var y=function(){const e=Object(c.a)("/demo"),t=Object(s.g)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null),l.a.createElement(p,null,l.a.createElement(m,null,"Automatic Generation of Visualizations and Infographics ",l.a.createElement("br",null)," with LLMs"),l.a.createElement(u,null,l.a.createElement(g,null,l.a.createElement("strong",null,"Vista is a visualization generation tool")," based on large language and image generation models, consisting of data summarization, visualization goal derivation, visualization code generation, and graphic generation modules. It provides a hybrid user interface through natural language and direct manipulation to support interactive charts, infographics, and data story generation.")),l.a.createElement(x,null,l.a.createElement(h,null,l.a.createElement(f,{onClick:()=>{void 0==localStorage.getItem(d.a.accessToken)?(alert("\ub85c\uadf8\uc778 \uc774\ud6c4 \uc774\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4"),t.push("/login")):e()}},l.a.createElement("span",null,"Get Started")),l.a.createElement(b,{href:"https://github.com/LlamaVista/LlamaVista/tree/FE"},l.a.createElement("span",null,"Go Github"))))))};const E=i.c.section`
  padding: 0 70px;
  min-height: 85vh;
`,v=i.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,k=i.c.div`
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`,w=i.c.h2`
  display: block;
  color: ${e=>e.theme.mainPage.TitleColor};
  font-size: 32px;
  font-weight: bold;
  padding: 24px;
`,C=i.c.p`
  color: ${e=>e.theme.mainPage.textColor};
  font-size: 20px;
`;var $=function(){const[e,t]=Object(n.useState)();return Object(n.useEffect)(()=>{(async()=>{const e=(await a.e(4).then(a.bind(null,273))).default;t(l.a.createElement(e,null))})()},[]),l.a.createElement(E,null,l.a.createElement(v,null,l.a.createElement(k,null,l.a.createElement(w,null,"What's in VISTA?"),l.a.createElement(C,null,"Everything you need to build great project based in data analytic")),e))},j=a(10),P=a(269);const z="http://52.78.245.13",S=i.c.div`
  display: 'flex';
  flex-direction: 'column';
  width: 100%;
  flex-shrink: 0;
  flex-basis: 330px;
`,T=i.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,L=i.c.img`
  width: 70%;
  padding: 10px;
  pointer-events: none;
`,O=i.c.div`
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 3px;
`,I=i.c.span`
  font-size: 22px;
  color: ${e=>e.theme.mainPage.mostHighlightColor};
`,F=i.c.span``,H=i.c.div`
  top: 0;
  opacity: 0;
  flex-shrink: 0;
  flex-basis: 330px;
  position: relative;
  background-color: black;
  display: flex;
  align-items: center;
  transition: top 1s, opacity 1s;
  &.on-hover {
    top: -100%;
    opacity: 1;
  }
`,V=i.c.p`
  padding: 20px;
  text-align: center;
  color: ${e=>e.theme.mainPage.TitleColor};
`;var G=function(e){let{name:t,roll:a,say:n,url:o}=e;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P.motion.div,{className:"content",drag:!0,dragConstraints:{top:-50,left:-50,right:50,bottom:50},onHoverStart:e=>(e=>{const t=e.target.lastChild;null===t||void 0===t||t.classList.add("on-hover")})(e),onHoverEnd:e=>(e=>{const t=e.target.lastChild;null===t||void 0===t||t.classList.remove("on-hover")})(e)},l.a.createElement(S,{className:"ctx"},l.a.createElement(T,null,l.a.createElement(L,{src:`${z}:3000/Images/${o}`})),l.a.createElement(O,null,l.a.createElement(I,null,t),l.a.createElement(F,null,a))),l.a.createElement(H,{className:"ctx"},l.a.createElement(V,null,n))))};const A=Object(j.b)({key:"introduce",default:[{name:"Seo Seoung Jun",roll:"Front-end",say:"\uc548\ub155\ud558\uc138\uc694! \ud504\ub860\ud2b8 \uc5d4\ub4dc \uac1c\ubc1c\uc744 \ub9e1\uc740 \uc11c\uc131\uc900\uc785\ub2c8\ub2e4",url:"seoungjun.png"},{name:"Lee Sa Bine",roll:"AI",say:"\uc548\ub155\ud558\uc138\uc694! \uc778\uacf5\uc9c0\ub2a5 \uac1c\ubc1c\uc744 \ub9e1\uc740 \uc774\uc0ac\ube48\ub2c8\ub2e4",url:"sabin.png"},{name:"Choi Seung Hoon",roll:"Back-end",say:"\uc548\ub155\ud558\uc138\uc694! \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ub9e1\uc740 \ucd5c\uc2b9\ud6c8\uc785\ub2c8\ub2e4",url:"sunghoon.png"}]}),J=i.c.section`
  padding: 150px 70px;
  min-height: 90vh;
`,N=i.c.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,B=i.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,M=i.c.h2`
  display: block;
  color: ${e=>e.theme.mainPage.TitleColor};
  font-size: 32px;
  font-weight: bold;
  padding: 24px;
`,W=i.c.div`
  padding: 60px 20%;
`,q=i.c.div`
  display: flex;
  color: ${e=>e.theme.mainPage.textColor};
  justify-content: space-around;
  .content {
    width: 28%;
    height: 330px;
    background-color: #11111b;
    display: flex;
    flex-direction: column;
    box-shadow: ${e=>e.theme.mainPage.boxShadow};
    border-radius: 20px;
    cursor: grab;
    overflow-y: hidden;
  }
`;var D=function(){const e=Object(j.e)(A);return l.a.createElement(J,null,l.a.createElement(N,null,l.a.createElement(B,null,l.a.createElement(M,null,"Our Team")),l.a.createElement(W,null,l.a.createElement(q,null,null===e||void 0===e?void 0:e.map((e,t)=>l.a.createElement(G,{key:t,name:e.name,roll:e.roll,say:e.say,url:e.url}))))))};const K=i.c.main`
  display: flex;
`,Q=i.c.div``;t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(K,null,l.a.createElement(o.a,null),l.a.createElement(Q,null,l.a.createElement(y,null),l.a.createElement($,null),l.a.createElement(D,null))))}}}]);
//# sourceMappingURL=7.c70a84ef.chunk.js.map