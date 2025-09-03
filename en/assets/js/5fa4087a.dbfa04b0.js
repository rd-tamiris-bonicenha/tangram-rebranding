"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2330],{38e3:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>d});var a=n(25773),o=n(27378),i=n(67468),r=n(33099);const s=i.ZP.div`
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
`;const d=function(e){let{children:t,columns:n=1,...i}=e;return o.createElement(r.Z,null,(()=>o.createElement(s,(0,a.Z)({$columns:n},i),t)))};var c=n(74904);const l=(0,i.ZP)(c.Z)`
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
`;const m=function(e){let{children:t,featured:n=!1,centered:a=!1,className:i}=e;return o.createElement(l,{$featured:n,$centered:a,className:i},t)}},88401:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(25773),o=n(27378),i=n(81884),r=n(59536);function s(e){let{children:t,...n}=e;return o.createElement(r.Z,(0,a.Z)({as:i.Z},n),t)}},89925:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(25773),o=n(30808),i=n(27378),r=n(67468),s=(n(23615),n(25881)),d=n(93399);const c=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],l=(0,r.ZP)(s.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),m=(0,i.forwardRef)(((e,t)=>{let{disabled:n,as:r,children:s,type:p=m.types.button,kind:u=m.kinds.primary,size:h=m.sizes.md,startIcon:k,endIcon:y,loading:b=!1,fluid:g=!1}=e,f=(0,o.Z)(e,c);return i.createElement(l,(0,a.Z)({ref:t,$startIcon:!!k,$endIcon:!!y,loading:b,fluid:g,forwardedAs:r,size:h,disabled:n||b,kind:u,type:p},f),b?i.createElement(d.Z,{size:d.Z.sizes.sm}):k,s,y)}));m.displayName="Button",m.sizes=s.Z.sizes,m.kinds=s.Z.kinds,m.types=s.Z.types;const p=m},91801:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(25773),o=n(30808),i=n(27378),r=n(67468),s=(n(23615),n(25881));const d=["children"],c=r.ZP.div.withConfig({displayName:"ButtonGroup__Root",componentId:"sc-y8o0sr-0"})(["display:inline-flex;> "," + ",",> * + *{margin-left:var(--size-spacing-03);}"],s.Z.Style,s.Z.Style),l=(0,i.forwardRef)(((e,t)=>{let{children:n}=e,r=(0,o.Z)(e,d);const s=i.Children.toArray(n).map(((e,t)=>{const n={index:t,tabIndex:0,className:"".concat(e.props.className," button-group__child")};return i.cloneElement(e,Object.assign({},e.props,n,{key:e.key||t}))}));return i.createElement(c,(0,a.Z)({ref:t,role:"group"},r),s)}));l.displayName="ButtonGroup",l.Style=c;const m=l},45381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>k,toc:()=>b});var a=n(25773),o=(n(27378),n(35318)),i=n(77515),r=n(67994),s=n(88401),d=n(38e3),c=n(46909),l=n(33373),m=n(91801),p=n(89925);const u={title:"Theme",description:"The Theme component is used to enable the use of CSS variables with the values available in Design Tokens."},h=void 0,k={unversionedId:"components/theme",id:"components/theme",title:"Theme",description:"The Theme component is used to enable the use of CSS variables with the values available in Design Tokens.",source:"@site/docs/components/theme.md",sourceDirName:"components",slug:"/components/theme",permalink:"/tangram-rebranding/en/docs/components/theme",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/theme.md",tags:[],version:"current",frontMatter:{title:"Theme",description:"The Theme component is used to enable the use of CSS variables with the values available in Design Tokens."},sidebar:"mySidebar",previous:{title:"StickyBar",permalink:"/tangram-rebranding/en/docs/components/stickybar"},next:{title:"Accordion",permalink:"/tangram-rebranding/en/docs/components/accordion"}},y={},b=[{value:"Feedback",id:"feedback",level:2}],g={toc:b};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{current:"docs",name:"theme",mdxType:"ComponentTab"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Theme")," component is used to create an ",(0,o.kt)("em",{parentName:"p"},"HTML")," element with the ",(0,o.kt)("inlineCode",{parentName:"p"},'data-tangram-theme="{theme-name}"')," attribute, in order to encapsulate your application and allow the use of CSS variables with the values available in ",(0,o.kt)(s.Z,{href:"../../../docs/foundations/color",mdxType:"Link"},"Design Tokens"),"."),(0,o.kt)(d.Z,{mdxType:"CardGrid"},(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(c.Z,{value:c.Z.kinds.lina,mdxType:"Theme"},(0,o.kt)(l.Z,{textColor:"--primary-text",mdxType:"Text"},"Text styled using CSS variable from the theme."),(0,o.kt)(m.Z,{mdxType:"ButtonGroup"},(0,o.kt)(p.Z,{mdxType:"Button"},"Primary action"),(0,o.kt)(p.Z,{kind:p.Z.kinds.secondary,mdxType:"Button"},"Secondary action"))))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(r.Z,{mdxType:"FeedbackBlock"}))}f.isMDXComponent=!0}}]);