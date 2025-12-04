"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8215],{38e3:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>d});var o=n(25773),s=n(27378),a=n(67468),r=n(33099);const i=a.ZP.div`
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
`;const d=function(e){let{children:t,columns:n=1,...a}=e;return s.createElement(r.Z,null,(()=>s.createElement(i,(0,o.Z)({$columns:n},a),t)))};var c=n(74904);const l=(0,a.ZP)(c.Z)`
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
`;const m=function(e){let{children:t,featured:n=!1,centered:o=!1,className:a}=e;return s.createElement(l,{$featured:n,$centered:o,className:a},t)}},88401:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(25773),s=n(27378),a=n(81884),r=n(59536);function i(e){let{children:t,...n}=e;return s.createElement(r.Z,(0,o.Z)({as:a.Z},n),t)}},33099:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(27378),s=n(76457);function a(e){let{children:t,fallback:n}=e;return(0,s.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},89925:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(25773),s=n(30808),a=n(27378),r=n(67468),i=(n(23615),n(25881)),d=n(93399);const c=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],l=(0,r.ZP)(i.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),m=(0,a.forwardRef)(((e,t)=>{let{disabled:n,as:r,children:i,type:p=m.types.button,kind:u=m.kinds.primary,size:k=m.sizes.md,startIcon:g,endIcon:v,loading:h=!1,fluid:y=!1}=e,Z=(0,s.Z)(e,c);return a.createElement(l,(0,o.Z)({ref:t,$startIcon:!!g,$endIcon:!!v,loading:h,fluid:y,forwardedAs:r,size:k,disabled:n||h,kind:u,type:p},Z),h?a.createElement(d.Z,{size:d.Z.sizes.sm}):g,i,v)}));m.displayName="Button",m.sizes=i.Z.sizes,m.kinds=i.Z.kinds,m.types=i.Z.types;const p=m},91801:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(25773),s=n(30808),a=n(27378),r=n(67468),i=(n(23615),n(25881));const d=["children"],c=r.ZP.div.withConfig({displayName:"ButtonGroup__Root",componentId:"sc-y8o0sr-0"})(["display:inline-flex;> "," + ",",> * + *{margin-left:var(--size-spacing-03);}"],i.Z.Style,i.Z.Style),l=(0,a.forwardRef)(((e,t)=>{let{children:n}=e,r=(0,s.Z)(e,d);const i=a.Children.toArray(n).map(((e,t)=>{const n={index:t,tabIndex:0,className:"".concat(e.props.className," button-group__child")};return a.cloneElement(e,Object.assign({},e.props,n,{key:e.key||t}))}));return a.createElement(c,(0,o.Z)({ref:t,role:"group"},r),i)}));l.displayName="ButtonGroup",l.Style=c;const m=l},78035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>Z,frontMatter:()=>u,metadata:()=>g,toc:()=>h});var o=n(25773),s=(n(27378),n(35318)),a=n(77515),r=n(67994),i=n(88401),d=n(38e3),c=n(46909),l=n(33373),m=n(91801),p=n(89925);const u={title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens."},k=void 0,g={unversionedId:"components/theme",id:"components/theme",title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/theme.md",sourceDirName:"components",slug:"/components/theme",permalink:"/tangram-rebranding/docs/components/theme",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/theme.md",tags:[],version:"current",frontMatter:{title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens."},sidebar:"mySidebar",previous:{title:"StickyBar",permalink:"/tangram-rebranding/docs/components/stickybar"},next:{title:"Accordion",permalink:"/tangram-rebranding/docs/components/accordion"}},v={},h=[{value:"Feedback",id:"feedback",level:2}],y={toc:h};function Z(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{current:"docs",name:"theme",mdxType:"ComponentTab"}),(0,s.kt)("p",null,"O componente ",(0,s.kt)("inlineCode",{parentName:"p"},"Theme")," \xe9 usado para criar um elemento ",(0,s.kt)("em",{parentName:"p"},"HTML")," com o atributo ",(0,s.kt)("inlineCode",{parentName:"p"},'data-tangram-theme="{nome-do-tema}"'),", com o objetivo de encapsular sua aplica\xe7\xe3o e permitir o uso das vari\xe1veis CSS com os valores dispon\xedveis nos ",(0,s.kt)(i.Z,{href:"../../../docs/foundations/color",mdxType:"Link"},"Design Tokens"),"."),(0,s.kt)(d.Z,{mdxType:"CardGrid"},(0,s.kt)(d.D,{mdxType:"CardGridItem"},(0,s.kt)(c.Z,{value:c.Z.kinds.lina,mdxType:"Theme"},(0,s.kt)(l.Z,{textColor:"--primary-text",mdxType:"Text"},"Texto estilizado usando a vari\xe1vel CSS do tema."),(0,s.kt)(m.Z,{mdxType:"ButtonGroup"},(0,s.kt)(p.Z,{mdxType:"Button"},"A\xe7\xe3o prim\xe1ria"),(0,s.kt)(p.Z,{kind:p.Z.kinds.secondary,mdxType:"Button"},"A\xe7\xe3o secund\xe1ria"))))),(0,s.kt)("h2",{id:"feedback"},"Feedback"),(0,s.kt)(r.Z,{mdxType:"FeedbackBlock"}))}Z.isMDXComponent=!0}}]);