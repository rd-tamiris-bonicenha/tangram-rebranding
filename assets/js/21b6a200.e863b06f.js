"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9820],{38e3:(e,t,r)=>{r.d(t,{D:()=>u,Z:()=>l});var a=r(25773),n=r(27378),i=r(67468),o=r(33099);const s=i.ZP.div`
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
`;const l=function(e){let{children:t,columns:r=1,...i}=e;return n.createElement(o.Z,null,(()=>n.createElement(s,(0,a.Z)({$columns:r},i),t)))};var c=r(74904);const d=(0,i.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:r=!1,centered:a=!1,className:i}=e;return n.createElement(d,{$featured:r,$centered:a,className:i},t)}},82399:(e,t,r)=>{r.d(t,{Do:()=>h,pM:()=>Z,ZP:()=>o});var a=r(25773),n=r(27378),i=r(38e3);const o=function(e){let{children:t,columns:r=2,...o}=e;return n.createElement(i.Z,(0,a.Z)({columns:r},o),t)};var s=r(99213),l=r(67468),c=r(89850),d=r(56988);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const p=function(e){return n.createElement(u,e)},m=(0,l.ZP)(i.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  border-top-width: 4px;
  padding: 0;
`,g=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  background-color: var(--neutral-surface);
`,v=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const h=function(e){let{title:t,children:r}=e;return n.createElement(m,{centered:!0},n.createElement(v,null,r),n.createElement(g,null,n.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.success,icon:n.createElement(d.Z,{title:"Checkmark icon"})},n.createElement(s.Z,{id:"doanddont.do"},"Do")),t&&n.createElement(p,null,t)))};var f=r(89046);const k=(0,l.ZP)(i.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  border-top-width: 4px;
  padding: 0;
`,b=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  background-color: var(--neutral-surface);
`,x=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const Z=function(e){let{title:t,children:r}=e;return n.createElement(k,{centered:!0},n.createElement(x,null,r),n.createElement(b,null,n.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.danger,icon:n.createElement(f.Z,{title:"Times icon"})},n.createElement(s.Z,{id:"doanddont.dont"},"Don't")),t&&n.createElement(p,null,t)))}},89925:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(25773),n=r(30808),i=r(27378),o=r(67468),s=(r(23615),r(25881)),l=r(93399);const c=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],d=(0,o.ZP)(s.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),u=(0,i.forwardRef)(((e,t)=>{let{disabled:r,as:o,children:s,type:p=u.types.button,kind:m=u.kinds.primary,size:g=u.sizes.md,startIcon:v,endIcon:h,loading:f=!1,fluid:k=!1}=e,b=(0,n.Z)(e,c);return i.createElement(d,(0,a.Z)({ref:t,$startIcon:!!v,$endIcon:!!h,loading:f,fluid:k,forwardedAs:o,size:g,disabled:r||f,kind:m,type:p},b),f?i.createElement(l.Z,{size:l.Z.sizes.sm}):v,s,h)}));u.displayName="Button",u.sizes=s.Z.sizes,u.kinds=s.Z.kinds,u.types=s.Z.types;const p=u},89850:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(25773),n=r(30808),i=r(27378),o=r(89046),s=(r(23615),r(67468)),l=r(48981),c=r(30210),d=r(69419),u=r(66496);const p={[c.$O.DEFAULT]:{background:"var(--neutral-surface-high-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"},[c.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"}},m=(0,s.iv)(["",""],(e=>{let{$tagKind:t,$isRemovable:r,onClick:a}=e;if(r){const{background:e,color:t,fill:r}=p[c.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}"],e,t,r)}const{background:n,color:i,fill:o,backgroundHover:d,colorHover:u,fillHover:m}=p[t]||p[c.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],n,i,o,a&&(0,s.iv)([""," cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],l.Z,u,d,m))})),g=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size"],v={[c.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[c.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[c.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},h=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,m,(e=>{let{$size:t}=e;const{height:r,font:a}=v[t]||v[c.zf.MD];return(0,s.iv)(["height:",";font:",";"],r,a)}),(e=>{let{$isRemovable:t}=e;return t&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),f=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),k=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:r}=v[t]||v[c.zf.MD];return(0,s.iv)(["height:",";"],r)})),b=(0,i.forwardRef)(((e,t)=>{let{children:r,startIcon:s,icon:l,removable:p,onDelete:m,onClick:x,kind:Z=b.kinds.default,clickable:z=!0,size:y=b.sizes.md}=e,w=(0,n.Z)(e,g);const{iconSize:E}=v[y]||v[c.zf.MD],$=z&&(0,d.Z)(x),D=(0,d.Z)(m)||p,T=l||s,C=(0,i.useCallback)((()=>T?(0,i.isValidElement)(T)&&(0,i.cloneElement)(T,Object.assign({},T.props,{size:E})):null),[T,E]);return(0,i.useEffect)((()=>{Z!==b.kinds.default&&"string"==typeof r&&r.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[Z,r]),(0,u.Z)({removable:p,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),i.createElement(h,(0,a.Z)({$tagKind:Z,$size:y,$isRemovable:D,onClick:$&&x,tabIndex:$?0:void 0,role:$?"button":void 0},w,{ref:t}),C(),r&&i.createElement(f,{$isRemovable:D},r),D&&i.createElement(k,{$size:y,onClick:e=>{e.stopPropagation(),m(e)},role:"button"},i.createElement(o.Z,{size:E,title:"Remove tag",titleId:"idIconCloseTag"})))}));b.displayName="Tag",b.Style=h,b.kinds={default:c.$O.DEFAULT,primary:c.$O.PRIMARY,success:c.$O.SUCCESS,danger:c.$O.DANGER,warning:c.$O.WARNING,help:c.$O.HELP},b.sizes={md:c.zf.MD,lg:c.zf.LG,xl:c.zf.XL};const x=b},56988:(e,t,r)=>{r.d(t,{Z:()=>m});var a,n=r(25773),i=r(30808),o=r(27378),s=r(23615),l=r.n(s),c=r(61421),d=r(1333);const u=["size","title","titleId"];function p(e){let{size:t=c.J.md,title:r,titleId:s}=e,l=(0,i.Z)(e,u);const p=c.d.get(t);return s=(0,d.Z)(s),o.createElement("svg",(0,n.Z)({width:p.width,height:p.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},l),r?o.createElement("title",{id:s},r):null,a||(a=o.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}p.sizes=c.J,p.propTypes={size:l().oneOf([p.sizes.xs,p.sizes.sm,p.sizes.md,p.sizes.lg,p.sizes.xl]),titleId:l().string,title:l().string.isRequired};const m=p},56979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var a=r(25773),n=(r(27378),r(35318)),i=r(77515),o=r(67994),s=r(38e3),l=r(82399),c=r(59536),d=r(89925);const u={title:"Link",description:"Link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto."},p=void 0,m={unversionedId:"components/link",id:"components/link",title:"Link",description:"Link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/link.md",sourceDirName:"components",slug:"/components/link",permalink:"/tangram-rebranding/docs/components/link",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/link.md",tags:[],version:"current",frontMatter:{title:"Link",description:"Link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto."},sidebar:"mySidebar",previous:{title:"Dropdown",permalink:"/tangram-rebranding/docs/components/dropdown"},next:{title:"Text",permalink:"/tangram-rebranding/docs/components/text"}},g={},v=[{value:"Boas pr\xe1ticas",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],h={toc:v};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{current:"docs",name:"link",mdxType:"ComponentTab"}),(0,n.kt)("p",null,"O link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto. Deve sempre ter texto clic\xe1vel, que pode estar acompanhado de um \xedcone na mesma cor."),(0,n.kt)("p",null,"Crie textos para links que deixem claro o que acontecer\xe1 quando a pessoa usu\xe1ria clicar nele. Evite textos gen\xe9ricos, como \u201dclique aqui\u201d, que n\xe3o informam o destino do clique."),(0,n.kt)(s.Z,{mdxType:"CardGrid"},(0,n.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,n.kt)(c.Z,{href:"#",mdxType:"Link"},"Link"))),(0,n.kt)("h2",{id:"good-habits"},"Boas pr\xe1ticas"),(0,n.kt)("p",null,"Evite o uso de links para a\xe7\xf5es que criam e manipulam informa\xe7\xf5es dentro do produto. Exemplo: links para criar Landing Pages ou outros assets, links para excluir informa\xe7\xf5es, entre outros."),(0,n.kt)("p",null,"Links devem sempre abrir na mesma aba, ",(0,n.kt)("strong",{parentName:"p"},"exceto quando a troca de p\xe1gina resultar na perda de informa\xe7\xf5es ou quando a p\xe1gina de destino for externa ao produto.")),(0,n.kt)(l.ZP,{mdxType:"DoAndDont"},(0,n.kt)(l.Do,{title:"Use bot\xf5es para realizar a\xe7\xf5es",mdxType:"Do"},(0,n.kt)(d.Z,{mdxType:"Button"},"Criar Landing Page")),(0,n.kt)(l.pM,{title:"N\xe3o use links para realizar a\xe7\xf5es",mdxType:"Dont"},(0,n.kt)(c.Z,{href:"#",mdxType:"Link"},"Criar Landing Page"))),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)(o.Z,{mdxType:"FeedbackBlock"}))}f.isMDXComponent=!0}}]);