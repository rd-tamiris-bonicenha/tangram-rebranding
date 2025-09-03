"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4018],{38e3:(e,t,n)=>{n.d(t,{D:()=>p,Z:()=>s});var i=n(25773),o=n(27378),a=n(67468),r=n(33099);const l=a.ZP.div`
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
`;const s=function(e){let{children:t,columns:n=1,...a}=e;return o.createElement(r.Z,null,(()=>o.createElement(l,(0,i.Z)({$columns:n},a),t)))};var d=n(74904);const c=(0,a.ZP)(d.Z)`
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
`;const p=function(e){let{children:t,featured:n=!1,centered:i=!1,className:a}=e;return o.createElement(c,{$featured:n,$centered:i,className:a},t)}},89925:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(25773),o=n(30808),a=n(27378),r=n(67468),l=(n(23615),n(25881)),s=n(93399);const d=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],c=(0,r.ZP)(l.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),p=(0,a.forwardRef)(((e,t)=>{let{disabled:n,as:r,children:l,type:m=p.types.button,kind:u=p.kinds.primary,size:y=p.sizes.md,startIcon:g,endIcon:h,loading:b=!1,fluid:v=!1}=e,f=(0,o.Z)(e,d);return a.createElement(c,(0,i.Z)({ref:t,$startIcon:!!g,$endIcon:!!h,loading:b,fluid:v,forwardedAs:r,size:y,disabled:n||b,kind:u,type:m},f),b?a.createElement(s.Z,{size:s.Z.sizes.sm}):g,l,h)}));p.displayName="Button",p.sizes=l.Z.sizes,p.kinds=l.Z.kinds,p.types=l.Z.types;const m=p},10614:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(25773),o=n(30808),a=n(27378),r=n(31542),l=(n(23615),n(24308)),s=n(69419),d=n(58924),c=n(30210),p=n(44573),m=n(66496);const u=["onStart","onEnd","style","children","duration","from","to","hiddenVisibility","keepMounted","unmount","in"],y=(0,a.forwardRef)(((e,t)=>{let{onStart:n,onEnd:c,style:g,children:h=null,duration:b=y.durations.normal,from:v=0,to:f=1,hiddenVisibility:k=!1,keepMounted:Z=!0,unmount:x=!1,in:E=!1}=e,w=(0,o.Z)(e,u);const O=Z&&!x,I=(0,a.useRef)(null),z=(0,a.useCallback)((e=>{I.current=(0,r.findDOMNode)(e)}),[]),C=(0,p.Z)([z,h.ref,t]),$=()=>(0,s.Z)(c)&&c({target:I.current}),N=()=>(0,s.Z)(n)&&n({target:I.current}),M=(0,d.Z)(b,"ms"),S={willChange:"opacity",transition:"opacity ".concat(M,"ms var(--motion-timing-function-ease-in-out)"),opacity:v};let F=M,T={entering:{opacity:f},entered:{opacity:f},exiting:{opacity:v},exited:{opacity:v}};O||(T={entering:{opacity:v},entered:{opacity:f},exiting:{opacity:v},exited:{opacity:v}},F={enter:0,exit:M});const j=a.isValidElement(h)&&h.props?h.props.style:{};return(0,m.Z)({keepMounted:!Z||void 0,originName:"Fade",fallback:"Use `unmount` property instead."}),a.createElement(l.ZP,(0,i.Z)({mountOnEnter:!O,unmountOnExit:!O,nodeRef:I,onEnter:N,onEntered:$,onExit:N,onExited:$,in:E,timeout:F,appear:!0},w),((e,t)=>a.cloneElement(h,Object.assign({ref:C,style:Object.assign({visibility:k&&"exited"===e&&!E?"hidden":void 0},g,S,j,T[e])},t))))}));y.displayName="Fade",y.durations={extraFast:c.lI.extraFast,fast:c.lI.fast,normal:c.lI.normal,slow:c.lI.slow,extraSlow:c.lI.extraSlow,ultraSlow:c.lI.ultraSlow};const g=y},12483:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(25773),o=n(30808),a=n(27378),r=(n(23615),n(67468)),l=n(45386),s=n(10614);const d=["style","children","invisible","keepMounted","zIndex","open"],c=r.ZP.div.withConfig({displayName:"Overlay__Root",componentId:"sc-15sbry8-0"})(["position:fixed;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;background-color:",";"],(e=>{let{$invisible:t}=e;return t?"transparent":"rgba(0, 34, 51, 0.5)"})),p=(0,a.forwardRef)(((e,t)=>{let{style:n,children:r=null,invisible:p=!1,keepMounted:m=!1,zIndex:u=1,open:y=!1}=e,g=(0,o.Z)(e,d),h=Object.assign({zIndex:l.zindexBack},n),b=r;return"string"==typeof b&&(b=a.createElement(a.Fragment,null,b)),a.isValidElement(b)&&(h=Object.assign({zIndex:u},n),b=a.cloneElement(b,Object.assign({},b.props,{style:Object.assign({},b.style,{zIndex:h.zIndex+1})}))),a.createElement(s.Z,{in:y,hiddenVisibility:!0,unmount:!m},a.createElement(c,(0,i.Z)({},g,{ref:t,open:y,$invisible:p,style:h,"aria-hidden":"true"}),b))}));p.displayName="Overlay",p.Style=c;const m=p},4287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>k,frontMatter:()=>y,metadata:()=>h,toc:()=>v});var i=n(25773),o=n(27378),a=n(35318),r=n(77515),l=n(67994),s=n(38e3),d=n(89925),c=n(12483),p=n(74904),m=n(99213);const u=function(){const[e,t]=(0,o.useState)(!1);return o.createElement(o.Fragment,null,o.createElement(d.Z,{kind:d.Z.kinds.secondary,onClick:()=>{t(!0)}},o.createElement(m.Z,{id:"ExampleOverlay.openButton"},"Open Overlay")),o.createElement(c.Z,{open:e},o.createElement(p.Z,null,o.createElement(d.Z,{kind:d.Z.kinds.secondary,onClick:()=>{t(!1)}},o.createElement(m.Z,{id:"ExampleOverlay.closeButton"},"Close Overlay")))))},y={title:"Overlay",description:"Overlay is responsible for covering the entire interface, occupying the available width and height, causing the focus to be on the elements displayed above the component."},g=void 0,h={unversionedId:"components/overlay",id:"components/overlay",title:"Overlay",description:"Overlay is responsible for covering the entire interface, occupying the available width and height, causing the focus to be on the elements displayed above the component.",source:"@site/docs/components/overlay.md",sourceDirName:"components",slug:"/components/overlay",permalink:"/tangram-rebranding/en/docs/components/overlay",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/overlay.md",tags:[],version:"current",frontMatter:{title:"Overlay",description:"Overlay is responsible for covering the entire interface, occupying the available width and height, causing the focus to be on the elements displayed above the component."},sidebar:"mySidebar",previous:{title:"Main",permalink:"/tangram-rebranding/en/docs/components/main"},next:{title:"Sidebar",permalink:"/tangram-rebranding/en/docs/components/sidebar"}},b={},v=[{value:"Feedback",id:"feedback",level:2}],f={toc:v};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{current:"docs",name:"overlay",mdxType:"ComponentTab"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Overlay")," is responsible for covering the entire interface, occupying the available width and height, causing the focus to be on the elements displayed above the component."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Overlay")," prevents the person from performing any interaction with the elements that are on the layer below."),(0,a.kt)(s.Z,{mdxType:"CardGrid"},(0,a.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,a.kt)(u,{mdxType:"ExampleOverlay"}))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)(l.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0}}]);