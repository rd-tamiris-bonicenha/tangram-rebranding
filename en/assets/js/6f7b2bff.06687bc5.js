"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4356],{38e3:(e,t,r)=>{r.d(t,{D:()=>u,Z:()=>s});var a=r(25773),n=r(27378),i=r(67468),o=r(33099);const l=i.ZP.div`
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
`;const s=function(e){let{children:t,columns:r=1,...i}=e;return n.createElement(o.Z,null,(()=>n.createElement(l,(0,a.Z)({$columns:r},i),t)))};var c=r(74904);const d=(0,i.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:r=!1,centered:a=!1,className:i}=e;return n.createElement(d,{$featured:r,$centered:a,className:i},t)}},59435:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r(27378).createContext({})},93178:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(25773),n=r(30808),i=r(27378),o=r(23615),l=r.n(o),s=r(67468),c=r(6076),d=r(33373);const u=["children","inverted","disabled","error"],p=(0,s.ZP)(d.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],c.Z,(e=>{let{$error:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),h=(0,i.forwardRef)(((e,t)=>{let{children:r,inverted:o=!1,disabled:l=!1,error:s=!1}=e,c=(0,n.Z)(e,u);return i.createElement(p,(0,a.Z)({ref:t,$disabled:l,$inverted:o,$error:s,forwardedAs:"label"},c),r)}));h.displayName="FormControlLabel",h.Style=p,h.propTypes={children:l().node.isRequired,inverted:l().bool,disabled:l().bool,error:l().bool};const m=h},68746:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(27378),n=r(59435);const i=()=>a.useContext(n.Z)},41092:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(25773),n=r(30808),i=(r(23615),r(27378)),o=r(67468),l=r(48981),s=r(21546),c=r(44573),d=r(93178),u=r(68746);const p=["id","style","className","tabIndex","checked","defaultChecked","onChange","onFocus","onBlur","label","value","disabled","required","hideLabel","labelStart","rootRef"],h="24px",m="2px",b=o.ZP.span.withConfig({displayName:"Switch__Toggle",componentId:"sc-1kqx6wu-0"})(["position:relative;display:inline-flex;align-items:center;vertical-align:middle;width:calc(2 * ",");height:",";margin:0;border-radius:var(--border-radius-pill);border:0;padding:2px;background-color:var(--neutral-surface-high-emphasis);&:before{transition-duration:var(--motion-duration-extra-fast);transition-timing-function:var(--motion-timing-function-ease-in-out);transition-property:left;content:'';position:absolute;left:",";display:block;width:calc("," - 2 * ",");height:calc("," - 2 * ",");border-radius:var(--border-radius-circle);background-color:var(--neutral-surface);}&:hover{background-color:var(--neutral-surface-hover);}&:has(input:disabled){&,&:hover{background-color:var(--neutral-surface-disabled);}}&:has(input:checked){&,&:hover{background-color:var(--primary-surface-high-emphasis);}&:before{left:calc("," + ",");}}&:has(input:checked:disabled){&,&:hover{background-color:var(--primary-surface-low-emphasis);}}> input{cursor:inherit;position:absolute;opacity:0;top:0;left:0;}"],h,h,m,h,m,h,m,m,h),f=(0,o.ZP)(d.Z).withConfig({displayName:"Switch__Label",componentId:"sc-1kqx6wu-1"})(["margin:0;"]),g=o.ZP.label.withConfig({displayName:"Switch__Root",componentId:"sc-1kqx6wu-2"})([""," --focus-outline-offset:1px;cursor:pointer;display:inline-flex;gap:var(--size-spacing-03);align-items:start;justify-content:space-between;&:not(:has(",")){--focus-outline-offset:0;--focus-border-radius:var(--border-radius-pill);","{margin-top:0;}}",""],l.Z,f,b,(e=>{let{$labelStart:t}=e;return t&&(0,o.iv)(["","{order:-1;}"],f)})),v=(0,i.forwardRef)(((e,t)=>{let{id:r,style:o,className:l,tabIndex:d,checked:h,defaultChecked:m,onChange:v,label:w,value:k,disabled:y=!1,required:x=!1,hideLabel:Z=!1,labelStart:C=!1,rootRef:S=null}=e,$=(0,n.Z)(e,p);const T=(0,i.useRef)(null),N=(0,u.Z)(),I=y||N.disabled,R=x||N.required,[q,E]=(0,s.Z)({value:h,defaultValue:Boolean(m)}),_=(0,i.useCallback)((e=>{E(e.target.checked),null==v||v(e.target.checked)}),[v,E]);return i.createElement(g,{ref:S,style:o,className:l,tabIndex:d,"aria-disabled":I,$labelStart:C},i.createElement(b,null,i.createElement("input",(0,a.Z)({},$,{ref:(0,c.Z)([t,T]),id:r,type:"checkbox",value:k,checked:q,disabled:I,"aria-required":R,"aria-label":w,onChange:_}))),w&&!Z&&i.createElement(f,{forwardedAs:"span",disabled:I},w))}));v.displayName="Switch",v.Style=g;const w=v},21546:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(27378);const n=e=>{let{value:t,defaultValue:r,initialValue:n}=e;const{current:i}=a.useRef(void 0!==t),[o,l]=a.useState(r);return[i?t:null!=o?o:n,a.useCallback((e=>{i||l(e)}),[i])]}},58090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=r(25773),n=(r(27378),r(35318)),i=r(77515),o=r(67994),l=r(38e3),s=r(41092);const c={title:"Switch",description:"The Switch allows switching between two possible states."},d=void 0,u={unversionedId:"components/switch",id:"components/switch",title:"Switch",description:"The Switch allows switching between two possible states.",source:"@site/docs/components/switch.md",sourceDirName:"components",slug:"/components/switch",permalink:"/tangram-rebranding/en/docs/components/switch",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",description:"The Switch allows switching between two possible states."},sidebar:"mySidebar",previous:{title:"Slider",permalink:"/tangram-rebranding/en/docs/components/slider"},next:{title:"TextArea",permalink:"/tangram-rebranding/en/docs/components/textarea"}},p={},h=[{value:"Feedback",id:"feedback",level:2}],m={toc:h};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{current:"docs",name:"switch",mdxType:"ComponentTab"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Switch")," allows switching between two possible states. It is usually used to \u201cturn on/off\u201d or \u201cturn on/off\u201d something. ",(0,n.kt)("strong",{parentName:"p"},"Your actions take immediate effect"),"."),(0,n.kt)(l.Z,{mdxType:"CardGrid"},(0,n.kt)(l.D,{centered:!0,mdxType:"CardGridItem"},(0,n.kt)(s.Z,{mdxType:"Switch"}))),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)(o.Z,{mdxType:"FeedbackBlock"}))}b.isMDXComponent=!0}}]);