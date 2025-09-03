"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[712],{38e3:(e,t,n)=>{n.d(t,{D:()=>p,Z:()=>s});var o=n(25773),r=n(27378),a=n(67468),i=n(33099);const l=a.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&a.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const s=function(e){let{children:t,columns:n=1,...a}=e;return r.createElement(i.Z,null,(()=>r.createElement(l,(0,o.Z)({$columns:n},a),t)))};var c=n(74904);const d=(0,a.ZP)(c.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&a.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&a.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const p=function(e){let{children:t,featured:n=!1,centered:o=!1,className:a}=e;return r.createElement(d,{$featured:n,$centered:o,className:a},t)}},72494:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(25773),r=n(27378);const a=n(67468).ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${e=>{let{$width:t}=e;return t||"auto"}};
  min-height: ${e=>{let{$height:t}=e;return t||"auto"}};
  border-radius: var(--border-radius-rounded);
  color: var(--highlight-text);
  font: var(--text-md-bold);
  background-color: var(--highlight-surface-low-emphasis);
`,i=(0,r.forwardRef)(((e,t)=>{let{children:n,height:i,width:l,...s}=e;return r.createElement(a,(0,o.Z)({},s,{$height:i,$width:l,ref:t}),n)}))},89925:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(25773),r=n(30808),a=n(27378),i=n(67468),l=(n(23615),n(25881)),s=n(93399);const c=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],d=(0,i.ZP)(l.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),p=(0,a.forwardRef)(((e,t)=>{let{disabled:n,as:i,children:l,type:u=p.types.button,kind:m=p.kinds.primary,size:g=p.sizes.md,startIcon:h,endIcon:v,loading:f=!1,fluid:b=!1}=e,k=(0,r.Z)(e,c);return a.createElement(d,(0,o.Z)({ref:t,$startIcon:!!h,$endIcon:!!v,loading:f,fluid:b,forwardedAs:i,size:g,disabled:n||f,kind:m,type:u},k),f?a.createElement(s.Z,{size:s.Z.sizes.sm}):h,l,v)}));p.displayName="Button",p.sizes=l.Z.sizes,p.kinds=l.Z.kinds,p.types=l.Z.types;const u=p},8612:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(25773),r=n(30808),a=n(27378),i=n(67468),l=(n(23615),n(45386)),s=n(73121);const c=["children","collapsed","maxHeight"],d=parseInt(l.motionDurationNormal),p=i.ZP.div.withConfig({displayName:"Collapse__Inner",componentId:"sc-182vtah-0"})([""]),u=i.ZP.div.withConfig({displayName:"Collapse__Root",componentId:"sc-182vtah-1"})([""," will-change:height;transition-duration:var(--motion-duration-normal);transition-property:max-height;",""],s.Z,(e=>{let{$state:t,$innerHeight:n,$maxHeight:o}=e;return"open"===t?(0,i.iv)(["max-height:",";overflow-y:",";"],o||"none",o?"auto":"initial"):"before-closing"===t?(0,i.iv)(["max-height:",";overflow-y:",";pointer-events:none;user-select:none;"],o||n,o?"auto":"hidden"):"close"===t?(0,i.iv)(["max-height:0;overflow-y:",";pointer-events:none;user-select:none;"],o?"auto":"hidden"):"opening"===t?(0,i.iv)(["max-height:",";overflow-y:",";pointer-events:none;user-select:none;"],o||n,o?"auto":"hidden"):void 0}));const m=(0,a.forwardRef)(((e,t)=>{var n;let{children:i,collapsed:l=!1,maxHeight:s}=e,m=(0,r.Z)(e,c);const g=(0,a.useRef)(null),[h,v]=(0,a.useState)(void 0),f=function(e){const t=(0,a.useRef)(null),[n,o]=(0,a.useState)(e?"close":"open");return(0,a.useLayoutEffect)((()=>(e?(["open","opening"].includes(n)&&(clearInterval(t.current),o("before-closing")),"before-closing"===n&&(t.current=setTimeout((()=>o("close")),0))):(["close","before-closing"].includes(n)&&(clearInterval(t.current),o("opening")),"opening"===n&&(t.current=setTimeout((()=>o("open")),d))),()=>clearInterval(t.current))),[e,n]),n}(l),b=s?"string"==typeof s?s:"".concat(s,"px"):void 0;return(0,a.useEffect)((()=>{var e;const t=null===(e=g.current)||void 0===e?void 0:e.offsetHeight;v(void 0!==t?"".concat(t+50,"px"):void 0)}),[]),a.createElement(u,(0,o.Z)({},m,{ref:t,"aria-hidden":l?"true":void 0,tabIndex:l?-1:null!==(n=m.tabIndex)&&void 0!==n?n:void 0,$state:f,$innerHeight:h,$maxHeight:b}),a.createElement(p,{ref:g},i))}));m.displayName="Collapse",m.Style=p,m.WrapperStyle=u;const g=m},47932:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(25773),r=n(30808),a=n(27378),i=(n(23615),n(67468)),l=n(9762),s=n(90828);const c=["children","gap","align","as"],d=i.ZP.div.withConfig({displayName:"StackGroup__Root",componentId:"sc-1kkop0m-0"})(["display:flex;flex-direction:column;width:100%;gap:",";",";"],(e=>{let{$gap:t}=e;return"string"==typeof t?t:"var(--size-spacing-".concat(t.toString().padStart(2,"0"),")")}),(e=>{let{$align:t}=e;return t&&(0,i.iv)(["align-items:",";"],t)})),p=(0,a.forwardRef)(((e,t)=>{let{children:n,gap:i="var(--size-spacing-02)",align:s=p.alignments.left,as:u="div"}=e,m=(0,r.Z)(e,c);return a.createElement(d,(0,o.Z)({ref:t,$gap:i,$align:l.s[s],as:u},m),n)}));p.displayName="StackGroup",p.Style=d,p.Item=s.Z,p.alignments=l.d;const u=p},90828:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(25773),r=n(30808),a=n(27378),i=(n(23615),n(67468)),l=n(9762);const s=["children","align","fluid","as"],c=i.ZP.div.withConfig({displayName:"StackGroupItem__Root",componentId:"sc-15asb3e-0"})(["",";"],(e=>{let{$align:t}=e;return t&&(0,i.iv)(["align-self:",";"],t)})),d=(0,a.forwardRef)(((e,t)=>{let{children:n,align:i,fluid:d,as:p="div"}=e,u=(0,r.Z)(e,s);return a.createElement(c,(0,o.Z)({ref:t,$align:l.s[i],$fluid:d,as:p},u),n)}));d.displayName="StackGroupItem",d.Style=c,d.alignments=l.d;const p=d},9762:(e,t,n)=>{n.d(t,{d:()=>o,s:()=>r});const o={left:"left",center:"center",right:"right",stretch:"stretch"},r={left:"flex-start",center:"center",right:"flex-end",stretch:"stretch"}},73121:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(67468).iv)(["::-webkit-scrollbar{width:var(--border-radius-lg);height:var(--border-radius-lg);}::-webkit-scrollbar-button:start:decrement,::-webkit-scrollbar-button:end:increment{display:none;}::-webkit-scrollbar-track{background-color:transparent;}::-webkit-scrollbar-thumb:vertical,::-webkit-scrollbar-thumb:horizontal{border:calc(var(--border-radius-lg) / 2 - 3px) solid rgba(0,0,0,0);border-radius:var(--border-radius-pill);background-clip:padding-box;background-color:var(--neutral-border-interactive);&:hover,&:active{background-color:var(--neutral-border-interactive-hover);}}"])},8438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>x,frontMatter:()=>g,metadata:()=>v,toc:()=>b});var o=n(25773),r=n(27378),a=n(35318),i=n(77515),l=n(72494),s=n(47932),c=n(89925),d=n(8612);const p=()=>{const[e,t]=(0,r.useState)(!0);return r.createElement(s.Z,{align:s.Z.alignments.stretch},r.createElement(c.Z,{fluid:!0,kind:c.Z.kinds.tertiary,"aria-expanded":!e,"aria-controls":"--collapse-example-01",onClick:()=>t((e=>!e))},e?"Exibir o conte\xfado":"Esconder o conte\xfado"),r.createElement(d.Z,{id:"--collapse-example-01",collapsed:e},r.createElement(l.Z,{width:"100%",height:"150px"},"Conte\xfado")))};var u=n(38e3),m=n(67994);const g={title:"Collapse",description:"O componente `Collapse` \xe9 uma \xe1rea que expande e contrai, exibindo ou escondendo seu conte\xfado."},h=void 0,v={unversionedId:"components/collapse",id:"components/collapse",title:"Collapse",description:"O componente `Collapse` \xe9 uma \xe1rea que expande e contrai, exibindo ou escondendo seu conte\xfado.",source:"@site/docs/components/collapse.md",sourceDirName:"components",slug:"/components/collapse",permalink:"/tangram-rebranding/en/docs/components/collapse",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/collapse.md",tags:[],version:"current",frontMatter:{title:"Collapse",description:"O componente `Collapse` \xe9 uma \xe1rea que expande e contrai, exibindo ou escondendo seu conte\xfado."},sidebar:"mySidebar",previous:{title:"ChatBubble",permalink:"/tangram-rebranding/en/docs/components/chatbubble"},next:{title:"DataBlock",permalink:"/tangram-rebranding/en/docs/components/datablock"}},f={},b=[{value:"Feedback",id:"feedback",level:2}],k={toc:b};function x(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{current:"docs",name:"collapse",mdxType:"ComponentTab"}),(0,a.kt)("p",null,"O componente ",(0,a.kt)("inlineCode",{parentName:"p"},"Collapse")," \xe9 uma \xe1rea que expande e contrai verticalmente, exibindo ou escondendo seu conte\xfado."),(0,a.kt)("p",null,"Quando for conveniente, organize grandes volumes de informa\xe7\xf5es em blocos retr\xe1teis, revelando o conte\xfado ao interagir. Recomenda-se definir uma altura m\xe1xima para conte\xfados extensos."),(0,a.kt)(u.Z,{mdxType:"CardGrid"},(0,a.kt)(u.D,{mdxType:"CardGridItem"},(0,a.kt)(p,{mdxType:"CollapseExample"}))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)(m.Z,{mdxType:"FeedbackBlock"}))}x.isMDXComponent=!0}}]);