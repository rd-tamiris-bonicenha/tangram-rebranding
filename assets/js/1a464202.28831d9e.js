"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8168],{38e3:(e,t,r)=>{r.d(t,{D:()=>u,Z:()=>l});var a=r(25773),i=r(27378),n=r(67468),o=r(33099);const s=n.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&n.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const l=function(e){let{children:t,columns:r=1,...n}=e;return i.createElement(o.Z,null,(()=>i.createElement(s,(0,a.Z)({$columns:r},n),t)))};var d=r(74904);const c=(0,n.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&n.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&n.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const u=function(e){let{children:t,featured:r=!1,centered:a=!1,className:n}=e;return i.createElement(c,{$featured:r,$centered:a,className:n},t)}},59435:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r(27378).createContext({})},93178:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(25773),i=r(30808),n=r(27378),o=r(23615),s=r.n(o),l=r(67468),d=r(6076),c=r(33373);const u=["children","inverted","disabled","error"],p=(0,l.ZP)(c.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{$error:t}=e;return t&&(0,l.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,l.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,l.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),m=(0,n.forwardRef)(((e,t)=>{let{children:r,inverted:o=!1,disabled:s=!1,error:l=!1}=e,d=(0,i.Z)(e,u);return n.createElement(p,(0,a.Z)({ref:t,$disabled:s,$inverted:o,$error:l,forwardedAs:"label"},d),r)}));m.displayName="FormControlLabel",m.Style=p,m.propTypes={children:s().node.isRequired,inverted:s().bool,disabled:s().bool,error:s().bool};const h=m},68746:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(27378),i=r(59435);const n=()=>a.useContext(i.Z)},41092:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(25773),i=r(30808),n=(r(23615),r(27378)),o=r(67468),s=r(48981),l=r(21546),d=r(44573),c=r(93178),u=r(68746);const p=["id","style","className","tabIndex","checked","defaultChecked","onChange","onFocus","onBlur","label","value","disabled","required","hideLabel","labelStart","rootRef"],m="24px",h="2px",b=o.ZP.span.withConfig({displayName:"Switch__Toggle",componentId:"sc-1kqx6wu-0"})(["position:relative;display:inline-flex;align-items:center;vertical-align:middle;width:calc(2 * ",");height:",";margin:0;border-radius:var(--border-radius-pill);border:0;padding:2px;background-color:var(--neutral-surface-high-emphasis);&:before{transition-duration:var(--motion-duration-extra-fast);transition-timing-function:var(--motion-timing-function-ease-in-out);transition-property:left;content:'';position:absolute;left:",";display:block;width:calc("," - 2 * ",");height:calc("," - 2 * ",");border-radius:var(--border-radius-circle);background-color:var(--neutral-surface);}&:hover{background-color:var(--neutral-surface-hover);}&:has(input:disabled){&,&:hover{background-color:var(--neutral-surface-disabled);}}&:has(input:checked){&,&:hover{background-color:var(--primary-surface-high-emphasis);}&:before{left:calc("," + ",");}}&:has(input:checked:disabled){&,&:hover{background-color:var(--primary-surface-low-emphasis);}}> input{cursor:inherit;position:absolute;opacity:0;top:0;left:0;}"],m,m,h,m,h,m,h,h,m),v=(0,o.ZP)(c.Z).withConfig({displayName:"Switch__Label",componentId:"sc-1kqx6wu-1"})(["margin:0;"]),g=o.ZP.label.withConfig({displayName:"Switch__Root",componentId:"sc-1kqx6wu-2"})([""," --focus-outline-offset:1px;cursor:pointer;display:inline-flex;gap:var(--size-spacing-03);align-items:start;justify-content:space-between;&:not(:has(",")){--focus-outline-offset:0;--focus-border-radius:var(--border-radius-pill);","{margin-top:0;}}",""],s.Z,v,b,(e=>{let{$labelStart:t}=e;return t&&(0,o.iv)(["","{order:-1;}"],v)})),f=(0,n.forwardRef)(((e,t)=>{let{id:r,style:o,className:s,tabIndex:c,checked:m,defaultChecked:h,onChange:f,label:k,value:w,disabled:x=!1,required:y=!1,hideLabel:Z=!1,labelStart:C=!1,rootRef:S=null}=e,$=(0,i.Z)(e,p);const N=(0,n.useRef)(null),R=(0,u.Z)(),T=x||R.disabled,I=y||R.required,[q,E]=(0,l.Z)({value:m,defaultValue:Boolean(h)}),_=(0,n.useCallback)((e=>{E(e.target.checked),null==f||f(e.target.checked)}),[f,E]);return n.createElement(g,{ref:S,style:o,className:s,tabIndex:c,"aria-disabled":T,$labelStart:C},n.createElement(b,null,n.createElement("input",(0,a.Z)({},$,{ref:(0,d.Z)([t,N]),id:r,type:"checkbox",value:w,checked:q,disabled:T,"aria-required":I,"aria-label":k,onChange:_}))),k&&!Z&&n.createElement(v,{forwardedAs:"span",disabled:T},k))}));f.displayName="Switch",f.Style=g;const k=f},21546:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(27378);const i=e=>{let{value:t,defaultValue:r,initialValue:i}=e;const{current:n}=a.useRef(void 0!==t),[o,s]=a.useState(r);return[n?t:null!=o?o:i,a.useCallback((e=>{n||s(e)}),[n])]}},87595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var a=r(25773),i=(r(27378),r(35318)),n=r(77515),o=r(67994),s=r(38e3),l=r(41092);const d={title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis."},c=void 0,u={unversionedId:"components/switch",id:"components/switch",title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/switch.md",sourceDirName:"components",slug:"/components/switch",permalink:"/tangram-rebranding/docs/components/switch",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis."},sidebar:"mySidebar",previous:{title:"Slider",permalink:"/tangram-rebranding/docs/components/slider"},next:{title:"TextArea",permalink:"/tangram-rebranding/docs/components/textarea"}},p={},m=[{value:"Feedback",id:"feedback",level:2}],h={toc:m};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(n.Z,{current:"docs",name:"switch",mdxType:"ComponentTab"}),(0,i.kt)("p",null,"O ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch"),' permite alternar entre dois estados poss\xedveis. Normalmente \xe9 usado para \u201dligar/desligar\u201d ou "ativar/desativar" algo. ',(0,i.kt)("strong",{parentName:"p"},"Suas a\xe7\xf5es t\xeam efeito imediato"),"."),(0,i.kt)(s.Z,{mdxType:"CardGrid"},(0,i.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)(l.Z,{mdxType:"Switch"}))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(o.Z,{mdxType:"FeedbackBlock"}))}b.isMDXComponent=!0}}]);