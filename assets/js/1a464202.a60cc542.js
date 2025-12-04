"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8168],{38e3:(e,t,r)=>{r.d(t,{D:()=>u,Z:()=>s});var a=r(25773),n=r(27378),i=r(67468),o=r(33099);const l=i.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&i.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const s=function(e){let{children:t,columns:r=1,...i}=e;return n.createElement(o.Z,null,(()=>n.createElement(l,(0,a.Z)({$columns:r},i),t)))};var d=r(74904);const c=(0,i.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&i.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&i.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const u=function(e){let{children:t,featured:r=!1,centered:a=!1,className:i}=e;return n.createElement(c,{$featured:r,$centered:a,className:i},t)}},33099:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(27378),n=r(76457);function i(e){let{children:t,fallback:r}=e;return(0,n.Z)()?a.createElement(a.Fragment,null,t?.()):r??null}},59435:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r(27378).createContext({})},93178:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(25773),n=r(30808),i=r(27378),o=r(23615),l=r.n(o),s=r(67468),d=r(6076),c=r(33373);const u=["children","inverted","disabled","error"],p=(0,s.ZP)(c.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{$error:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),m=(0,i.forwardRef)(((e,t)=>{let{children:r,inverted:o=!1,disabled:l=!1,error:s=!1}=e,d=(0,n.Z)(e,u);return i.createElement(p,(0,a.Z)({ref:t,$disabled:l,$inverted:o,$error:s,forwardedAs:"label"},d),r)}));m.displayName="FormControlLabel",m.Style=p,m.propTypes={children:l().node.isRequired,inverted:l().bool,disabled:l().bool,error:l().bool};const h=m},68746:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(27378),n=r(59435);const i=()=>a.useContext(n.Z)},41092:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(25773),n=r(30808),i=(r(23615),r(27378)),o=r(67468),l=r(48981),s=r(21546),d=r(44573),c=r(93178),u=r(68746);const p=["id","style","className","tabIndex","checked","defaultChecked","onChange","onFocus","onBlur","label","value","disabled","required","hideLabel","labelStart","rootRef"],m="24px",h="2px",b=o.ZP.span.withConfig({displayName:"Switch__Toggle",componentId:"sc-1kqx6wu-0"})(["position:relative;display:inline-flex;align-items:center;vertical-align:middle;width:calc(2 * ",");height:",";margin:0;border-radius:var(--border-radius-pill);border:0;padding:2px;background-color:var(--neutral-surface-high-emphasis);&:before{transition-duration:var(--motion-duration-extra-fast);transition-timing-function:var(--motion-timing-function-ease-in-out);transition-property:left;content:'';position:absolute;left:",";display:block;width:calc("," - 2 * ",");height:calc("," - 2 * ",");border-radius:var(--border-radius-circle);background-color:var(--neutral-surface);}&:hover{background-color:var(--neutral-surface-hover);}&:has(input:disabled){&,&:hover{background-color:var(--neutral-surface-disabled);}}&:has(input:checked){&,&:hover{background-color:var(--primary-surface-high-emphasis);}&:before{left:calc("," + ",");}}&:has(input:checked:disabled){&,&:hover{background-color:var(--primary-surface-low-emphasis);}}> input{cursor:inherit;position:absolute;opacity:0;top:0;left:0;}"],m,m,h,m,h,m,h,h,m),g=(0,o.ZP)(c.Z).withConfig({displayName:"Switch__Label",componentId:"sc-1kqx6wu-1"})(["margin:0;"]),v=o.ZP.label.withConfig({displayName:"Switch__Root",componentId:"sc-1kqx6wu-2"})([""," --focus-outline-offset:1px;cursor:pointer;display:inline-flex;gap:var(--size-spacing-03);align-items:start;justify-content:space-between;&:not(:has(",")){--focus-outline-offset:0;--focus-border-radius:var(--border-radius-pill);height:fit-content;","{margin-top:0;}}",""],l.Z,g,b,(e=>{let{$labelStart:t}=e;return t&&(0,o.iv)(["","{order:-1;}"],g)})),f=(0,i.forwardRef)(((e,t)=>{let{id:r,style:o,className:l,tabIndex:c,checked:m,defaultChecked:h,onChange:f,label:k,value:w,disabled:x=!1,required:y=!1,hideLabel:Z=!1,labelStart:C=!1,rootRef:S=null}=e,$=(0,n.Z)(e,p);const N=(0,i.useRef)(null),T=(0,u.Z)(),R=x||T.disabled,E=y||T.required,[I,q]=(0,s.Z)({value:m,defaultValue:Boolean(h)}),_=(0,i.useCallback)((e=>{q(e.target.checked),null==f||f(e.target.checked)}),[f,q]);return i.createElement(v,{ref:S,style:o,className:l,tabIndex:c,"aria-disabled":R,$labelStart:C},i.createElement(b,null,i.createElement("input",(0,a.Z)({},$,{ref:(0,d.Z)([t,N]),id:r,type:"checkbox",value:w,checked:I,disabled:R,"aria-required":E,"aria-label":k,onChange:_}))),k&&!Z&&i.createElement(g,{forwardedAs:"span",disabled:R},k))}));f.displayName="Switch",f.Style=v;const k=f},87595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var a=r(25773),n=(r(27378),r(35318)),i=r(77515),o=r(67994),l=r(38e3),s=r(41092);const d={title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis."},c=void 0,u={unversionedId:"components/switch",id:"components/switch",title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/switch.md",sourceDirName:"components",slug:"/components/switch",permalink:"/tangram-rebranding/docs/components/switch",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis."},sidebar:"mySidebar",previous:{title:"Slider",permalink:"/tangram-rebranding/docs/components/slider"},next:{title:"TextArea",permalink:"/tangram-rebranding/docs/components/textarea"}},p={},m=[{value:"Feedback",id:"feedback",level:2}],h={toc:m};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{current:"docs",name:"switch",mdxType:"ComponentTab"}),(0,n.kt)("p",null,"O ",(0,n.kt)("inlineCode",{parentName:"p"},"Switch"),' permite alternar entre dois estados poss\xedveis. Normalmente \xe9 usado para \u201dligar/desligar\u201d ou "ativar/desativar" algo. ',(0,n.kt)("strong",{parentName:"p"},"Suas a\xe7\xf5es t\xeam efeito imediato"),"."),(0,n.kt)(l.Z,{mdxType:"CardGrid"},(0,n.kt)(l.D,{centered:!0,mdxType:"CardGridItem"},(0,n.kt)(s.Z,{mdxType:"Switch"}))),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)(o.Z,{mdxType:"FeedbackBlock"}))}b.isMDXComponent=!0}}]);