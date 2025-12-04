"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7282],{38e3:(e,a,t)=>{t.d(a,{D:()=>u,Z:()=>l});var r=t(25773),i=t(27378),o=t(67468),n=t(33099);const s=o.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:a}=e;return a>=2&&o.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${a}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const l=function(e){let{children:a,columns:t=1,...o}=e;return i.createElement(n.Z,null,(()=>i.createElement(s,(0,r.Z)({$columns:t},o),a)))};var d=t(74904);const c=(0,o.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:a}=e;return a&&o.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:a}=e;return a&&o.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const u=function(e){let{children:a,featured:t=!1,centered:r=!1,className:o}=e;return i.createElement(c,{$featured:t,$centered:r,className:o},a)}},82399:(e,a,t)=>{t.d(a,{Do:()=>h,pM:()=>z,ZP:()=>n});var r=t(25773),i=t(27378),o=t(38e3);const n=function(e){let{children:a,columns:t=2,...n}=e;return i.createElement(o.Z,(0,r.Z)({columns:t},n),a)};var s=t(99213),l=t(67468),d=t(89850),c=t(56988);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const m=function(e){return i.createElement(u,e)},p=(0,l.ZP)(o.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  padding: 0;
`,v=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  background-color: var(--neutral-surface);
`,g=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const h=function(e){let{title:a,children:t}=e;return i.createElement(p,{centered:!0},i.createElement(g,null,t),i.createElement(v,null,i.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.success,icon:i.createElement(c.Z,{title:"Checkmark icon"})},i.createElement(s.Z,{id:"doanddont.do"},"Do")),a&&i.createElement(m,null,a)))};var f=t(89046);const b=(0,l.ZP)(o.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,k=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  background-color: var(--neutral-surface);
`,x=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const z=function(e){let{title:a,children:t}=e;return i.createElement(b,{centered:!0},i.createElement(x,null,t),i.createElement(k,null,i.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.danger,icon:i.createElement(f.Z,{title:"Times icon"})},i.createElement(s.Z,{id:"doanddont.dont"},"Don't")),a&&i.createElement(m,null,a)))}},33099:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(27378),i=t(76457);function o(e){let{children:a,fallback:t}=e;return(0,i.Z)()?r.createElement(r.Fragment,null,a?.()):t??null}},89850:(e,a,t)=>{t.d(a,{Z:()=>x});var r=t(25773),i=t(30808),o=t(27378),n=t(89046),s=(t(23615),t(67468)),l=t(48981),d=t(30210),c=t(69419),u=t(66496);const m={[d.$O.DEFAULT]:{background:"var(--neutral-surface-high-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"},[d.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"}},p=(0,s.iv)(["",""],(e=>{let{$tagKind:a,$isRemovable:t,onClick:r}=e;if(t){const{background:e,color:a,fill:t}=m[d.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}"],e,a,t)}const{background:i,color:o,fill:n,backgroundHover:c,colorHover:u,fillHover:p}=m[a]||m[d.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],i,o,n,r&&(0,s.iv)([""," cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],l.Z,u,c,p))})),v=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size"],g={[d.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[d.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[d.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},h=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,p,(e=>{let{$size:a}=e;const{height:t,font:r}=g[a]||g[d.zf.MD];return(0,s.iv)(["height:",";font:",";"],t,r)}),(e=>{let{$isRemovable:a}=e;return a&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),f=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),b=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:a}=e;const{height:t}=g[a]||g[d.zf.MD];return(0,s.iv)(["height:",";"],t)})),k=(0,o.forwardRef)(((e,a)=>{let{children:t,startIcon:s,icon:l,removable:m,onDelete:p,onClick:x,kind:z=k.kinds.default,clickable:Z=!0,size:E=k.sizes.md}=e,y=(0,i.Z)(e,v);const{iconSize:T}=g[E]||g[d.zf.MD],w=Z&&(0,c.Z)(x),$=(0,c.Z)(p)||m,D=l||s,P=(0,o.useCallback)((()=>D?(0,o.isValidElement)(D)&&(0,o.cloneElement)(D,Object.assign({},D.props,{size:T})):null),[D,T]);return(0,o.useEffect)((()=>{z!==k.kinds.default&&"string"==typeof t&&t.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[z,t]),(0,u.Z)({removable:m,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!Z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),o.createElement(h,(0,r.Z)({$tagKind:z,$size:E,$isRemovable:$,onClick:w&&x,tabIndex:w?0:void 0,role:w?"button":void 0},y,{ref:a}),P(),t&&o.createElement(f,{$isRemovable:$},t),$&&o.createElement(b,{$size:E,onClick:e=>{e.stopPropagation(),p(e)},role:"button"},o.createElement(n.Z,{size:T,title:"Remove tag",titleId:"idIconCloseTag"})))}));k.displayName="Tag",k.Style=h,k.kinds={default:d.$O.DEFAULT,primary:d.$O.PRIMARY,success:d.$O.SUCCESS,danger:d.$O.DANGER,warning:d.$O.WARNING,help:d.$O.HELP},k.sizes={md:d.zf.MD,lg:d.zf.LG,xl:d.zf.XL};const x=k},56988:(e,a,t)=>{t.d(a,{Z:()=>p});var r,i=t(25773),o=t(30808),n=t(27378),s=t(23615),l=t.n(s),d=t(61421),c=t(1333);const u=["size","title","titleId"];function m(e){let{size:a=d.J.md,title:t,titleId:s}=e,l=(0,o.Z)(e,u);const m=d.d.get(a);return s=(0,c.Z)(s),n.createElement("svg",(0,i.Z)({width:m.width,height:m.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,r||(r=n.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}m.sizes=d.J,m.propTypes={size:l().oneOf([m.sizes.xs,m.sizes.sm,m.sizes.md,m.sizes.lg,m.sizes.xl]),titleId:l().string,title:l().string.isRequired};const p=m},14875:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=t(25773),i=(t(27378),t(35318)),o=t(82399),n=t(67994),s=t(33373);const l={title:"Localiza\xe7\xe3o"},d=void 0,c={unversionedId:"guidelines/localization",id:"guidelines/localization",title:"Localiza\xe7\xe3o",description:"A RD Station tem o compromisso de manter um alto padr\xe3o de qualidade e experi\xeancia para todos os clientes, independente do pa\xeds ou idioma. Por isso, ao desenhar ou atualizar interfaces dos produtos, tenha sempre em mente que elas podem mudar ao serem traduzidas.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/guidelines/localization.md",sourceDirName:"guidelines",slug:"/guidelines/localization",permalink:"/tangram-rebranding/docs/guidelines/localization",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/guidelines/localization.md",tags:[],version:"current",frontMatter:{title:"Localiza\xe7\xe3o"},sidebar:"mySidebar",previous:{title:"Escrita",permalink:"/tangram-rebranding/docs/guidelines/writing"},next:{title:"Cores",permalink:"/tangram-rebranding/docs/foundations/color"}},u={},m=[{value:"Diferen\xe7as culturais",id:"cultural-differences",level:2},{value:"Texto embedado",id:"embedded-text",level:2},{value:"Espa\xe7amento",id:"spacing",level:2},{value:"Moedas, data e hora",id:"coins-date-time",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:m};function v(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A RD Station tem o compromisso de manter um alto padr\xe3o de qualidade e experi\xeancia para todos os clientes, independente do pa\xeds ou idioma. Por isso, ao desenhar ou atualizar interfaces dos produtos, tenha sempre em mente que elas podem mudar ao serem traduzidas."),(0,i.kt)("h2",{id:"cultural-differences"},"Diferen\xe7as culturais"),(0,i.kt)("p",null,'No Brasil, o gesto \ud83d\udc4d\ud83c\udffd  \xe9 visto como afirma\xe7\xe3o, positivo, legal. J\xe1 em alguns pa\xedses da \xc1frica e do Sudeste Asi\xe1tico, o famoso "joinha" possui uma conota\xe7\xe3o sexual, tornando-o um gesto obsceno.'),(0,i.kt)("p",null,"Por isso, pensamos em cada detalhe antes de publicar qualquer altera\xe7\xe3o vis\xedvel em nossas ferramentas."),(0,i.kt)("h2",{id:"embedded-text"},"Texto embedado"),(0,i.kt)("p",null,"Evite colocar texto embedado dentro de imagens porque isso dificulta, e at\xe9 mesmo impossibilita a tradu\xe7\xe3o em alguns casos. Uma alternativa para isso \xe9 sobrepor elementos de texto em cima de imagens utilizando CSS."),(0,i.kt)("h2",{id:"spacing"},"Espa\xe7amento"),(0,i.kt)("p",null,"Lembre-se de sempre deixar espa\xe7o suficiente j\xe1 prevendo tradu\xe7\xf5es em outros idiomas, que possam conter mais caracteres do que o portugu\xeas."),(0,i.kt)("p",null,"Nesse sentido, evite textos em colunas estreitas, correndo risco de ao serem traduzidos quebrarem o equil\xedbrio do design."),(0,i.kt)("p",null,"Essa orienta\xe7\xe3o tamb\xe9m \xe9 v\xe1lida para valores, que ao serem convertidos em moedas estrangeiras, podem crescer."),(0,i.kt)("h2",{id:"coins-date-time"},"Moedas, data e hora"),(0,i.kt)("p",null,"Para indicar valores monet\xe1rios, usamos sempre a ISO 4217, que define um c\xf3digos de tr\xeas letras para as moedas correntes. Para indica\xe7\xe3o simples de hora, utilizamos a formata\xe7\xe3o XX:XX (24 horas)."),(0,i.kt)(o.ZP,{mdxType:"DoAndDont"},(0,i.kt)(o.Do,{mdxType:"Do"},(0,i.kt)(s.Z,{mdxType:"Text"},"1.200 BRL"),(0,i.kt)(s.Z,{mdxType:"Text"},"54 USD"),(0,i.kt)(s.Z,{mdxType:"Text"},"19/09/2019"),(0,i.kt)(s.Z,{mdxType:"Text"},"14:30"),(0,i.kt)(s.Z,{mdxType:"Text"},"2:33")),(0,i.kt)(o.pM,{mdxType:"Dont"},(0,i.kt)(s.Z,{mdxType:"Text"},"R$ 300.00"),(0,i.kt)(s.Z,{mdxType:"Text"},"US$ 40,25"),(0,i.kt)(s.Z,{mdxType:"Text"},"19.09.2019"),(0,i.kt)(s.Z,{mdxType:"Text"},"2:30AM"),(0,i.kt)(s.Z,{mdxType:"Text"},"02h19"))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(n.Z,{mdxType:"FeedbackBlock"}))}v.isMDXComponent=!0}}]);