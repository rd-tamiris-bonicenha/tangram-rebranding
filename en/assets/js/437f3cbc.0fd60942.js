"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4581],{38e3:(e,t,a)=>{a.d(t,{D:()=>u,Z:()=>s});var i=a(25773),r=a(27378),n=a(67468),o=a(33099);const l=n.ZP.div`
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
`;const s=function(e){let{children:t,columns:a=1,...n}=e;return r.createElement(o.Z,null,(()=>r.createElement(l,(0,i.Z)({$columns:a},n),t)))};var c=a(74904);const d=(0,n.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:a=!1,centered:i=!1,className:n}=e;return r.createElement(d,{$featured:a,$centered:i,className:n},t)}},82399:(e,t,a)=>{a.d(t,{Do:()=>p,pM:()=>z,ZP:()=>o});var i=a(25773),r=a(27378),n=a(38e3);const o=function(e){let{children:t,columns:a=2,...o}=e;return r.createElement(n.Z,(0,i.Z)({columns:a},o),t)};var l=a(99213),s=a(67468),c=a(89850),d=a(56988);const u=s.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const g=function(e){return r.createElement(u,e)},h=(0,s.ZP)(n.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  padding: 0;
`,m=s.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  background-color: var(--neutral-surface);
`,v=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const p=function(e){let{title:t,children:a}=e;return r.createElement(h,{centered:!0},r.createElement(v,null,a),r.createElement(m,null,r.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.success,icon:r.createElement(d.Z,{title:"Checkmark icon"})},r.createElement(l.Z,{id:"doanddont.do"},"Do")),t&&r.createElement(g,null,t)))};var f=a(89046);const b=(0,s.ZP)(n.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,k=s.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  background-color: var(--neutral-surface);
`,x=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const z=function(e){let{title:t,children:a}=e;return r.createElement(b,{centered:!0},r.createElement(x,null,a),r.createElement(k,null,r.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.danger,icon:r.createElement(f.Z,{title:"Times icon"})},r.createElement(l.Z,{id:"doanddont.dont"},"Don't")),t&&r.createElement(g,null,t)))}},33099:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(27378),r=a(76457);function n(e){let{children:t,fallback:a}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,t?.()):a??null}},89850:(e,t,a)=>{a.d(t,{Z:()=>x});var i=a(25773),r=a(30808),n=a(27378),o=a(89046),l=(a(23615),a(67468)),s=a(48981),c=a(30210),d=a(69419),u=a(66496);const g={[c.$O.DEFAULT]:{background:"var(--neutral-surface-high-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"},[c.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"}},h=(0,l.iv)(["",""],(e=>{let{$tagKind:t,$isRemovable:a,onClick:i}=e;if(a){const{background:e,color:t,fill:a}=g[c.$O.DEFAULT];return(0,l.iv)(["background-color:",";color:",";svg{fill:",";}"],e,t,a)}const{background:r,color:n,fill:o,backgroundHover:d,colorHover:u,fillHover:h}=g[t]||g[c.$O.DEFAULT];return(0,l.iv)(["background-color:",";color:",";svg{fill:",";}",""],r,n,o,i&&(0,l.iv)([""," cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],s.Z,u,d,h))})),m=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size"],v={[c.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[c.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[c.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},p=l.ZP.div.withConfig({displayName:"Tag__Root",componentId:"sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],s.Z,h,(e=>{let{$size:t}=e;const{height:a,font:i}=v[t]||v[c.zf.MD];return(0,l.iv)(["height:",";font:",";"],a,i)}),(e=>{let{$isRemovable:t}=e;return t&&(0,l.iv)(["gap:var(--size-spacing-02);"])})),f=l.ZP.span.withConfig({displayName:"Tag__Display",componentId:"sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),b=l.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:a}=v[t]||v[c.zf.MD];return(0,l.iv)(["height:",";"],a)})),k=(0,n.forwardRef)(((e,t)=>{let{children:a,startIcon:l,icon:s,removable:g,onDelete:h,onClick:x,kind:z=k.kinds.default,clickable:Z=!0,size:y=k.sizes.md}=e,w=(0,r.Z)(e,m);const{iconSize:T}=v[y]||v[c.zf.MD],E=Z&&(0,d.Z)(x),$=(0,d.Z)(h)||g,D=s||l,C=(0,n.useCallback)((()=>D?(0,n.isValidElement)(D)&&(0,n.cloneElement)(D,Object.assign({},D.props,{size:T})):null),[D,T]);return(0,n.useEffect)((()=>{z!==k.kinds.default&&"string"==typeof a&&a.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[z,a]),(0,u.Z)({removable:g,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:l,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!Z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),n.createElement(p,(0,i.Z)({$tagKind:z,$size:y,$isRemovable:$,onClick:E&&x,tabIndex:E?0:void 0,role:E?"button":void 0},w,{ref:t}),C(),a&&n.createElement(f,{$isRemovable:$},a),$&&n.createElement(b,{$size:y,onClick:e=>{e.stopPropagation(),h(e)},role:"button"},n.createElement(o.Z,{size:T,title:"Remove tag",titleId:"idIconCloseTag"})))}));k.displayName="Tag",k.Style=p,k.kinds={default:c.$O.DEFAULT,primary:c.$O.PRIMARY,success:c.$O.SUCCESS,danger:c.$O.DANGER,warning:c.$O.WARNING,help:c.$O.HELP},k.sizes={md:c.zf.MD,lg:c.zf.LG,xl:c.zf.XL};const x=k},56988:(e,t,a)=>{a.d(t,{Z:()=>h});var i,r=a(25773),n=a(30808),o=a(27378),l=a(23615),s=a.n(l),c=a(61421),d=a(1333);const u=["size","title","titleId"];function g(e){let{size:t=c.J.md,title:a,titleId:l}=e,s=(0,n.Z)(e,u);const g=c.d.get(t);return l=(0,d.Z)(l),o.createElement("svg",(0,r.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":l},s),a?o.createElement("title",{id:l},a):null,i||(i=o.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}g.sizes=c.J,g.propTypes={size:s().oneOf([g.sizes.xs,g.sizes.sm,g.sizes.md,g.sizes.lg,g.sizes.xl]),titleId:s().string,title:s().string.isRequired};const h=g},42470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var i=a(25773),r=(a(27378),a(35318)),n=a(82399),o=a(67994),l=a(33373);const s={title:"Localization"},c="Localization",d={unversionedId:"guidelines/localization",id:"guidelines/localization",title:"Localization",description:"localization}",source:"@site/docs/guidelines/localization.md",sourceDirName:"guidelines",slug:"/guidelines/localization",permalink:"/tangram-rebranding/en/docs/guidelines/localization",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/guidelines/localization.md",tags:[],version:"current",frontMatter:{title:"Localization"},sidebar:"mySidebar",previous:{title:"Writing",permalink:"/tangram-rebranding/en/docs/guidelines/writing"},next:{title:"Colors",permalink:"/tangram-rebranding/en/docs/foundations/color"}},u={},g=[{value:"Cultural differences",id:"cultural-differences",level:2},{value:"Embedded text",id:"embedded-text",level:2},{value:"Spacing",id:"spacing",level:2},{value:"Coins, date and time",id:"coins-date-time",level:2},{value:"Feedback",id:"feedback",level:2}],h={toc:g};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"localization"},"Localization"),(0,r.kt)("p",null,"RD Station is committed to maintaining a high standard of quality and experience for all customers, regardless of country or language. Therefore, when designing or updating product interfaces, always keep in mind that they may change when translated."),(0,r.kt)("h2",{id:"cultural-differences"},"Cultural differences"),(0,r.kt)("p",null,'In Brazil, the \ud83d\udc4d\ud83c\udffd gesture is seen as an affirmation, positive, legal. In some countries in Africa and Southeast Asia, the famous "joinha" has a sexual connotation, making it an obscene gesture.'),(0,r.kt)("p",null,"That's why we think about every detail before publishing any visible changes to our tools."),(0,r.kt)("h2",{id:"embedded-text"},"Embedded text"),(0,r.kt)("p",null,"Avoid placing embedded text inside images as this makes translation difficult and even impossible in some cases. An alternative to this is to superimpose text elements on top of images using CSS."),(0,r.kt)("h2",{id:"spacing"},"Spacing"),(0,r.kt)("p",null,"Remember to always leave enough space already foreseeing translations in other languages, which may contain more characters than Portuguese."),(0,r.kt)("p",null,"In this sense, avoid texts in narrow columns, at the risk of breaking the design balance when translated."),(0,r.kt)("p",null,"This guidance is also valid for values, which when converted into foreign currencies, can grow."),(0,r.kt)("h2",{id:"coins-date-time"},"Coins, date and time"),(0,r.kt)("p",null,"To indicate monetary values, we always use ISO 4217, which defines a three-letter code for currency. For simple time indication, we use the format XX:XX (24 hours)."),(0,r.kt)(n.ZP,{mdxType:"DoAndDont"},(0,r.kt)(n.Do,{mdxType:"Do"},(0,r.kt)(l.Z,{mdxType:"Text"},"1.200 BRL"),(0,r.kt)(l.Z,{mdxType:"Text"},"54 USD"),(0,r.kt)(l.Z,{mdxType:"Text"},"19/09/2019"),(0,r.kt)(l.Z,{mdxType:"Text"},"14:30"),(0,r.kt)(l.Z,{mdxType:"Text"},"2:33")),(0,r.kt)(n.pM,{mdxType:"Dont"},(0,r.kt)(l.Z,{mdxType:"Text"},"R$ 300.00"),(0,r.kt)(l.Z,{mdxType:"Text"},"US$ 40,25"),(0,r.kt)(l.Z,{mdxType:"Text"},"19.09.2019"),(0,r.kt)(l.Z,{mdxType:"Text"},"2:30AM"),(0,r.kt)(l.Z,{mdxType:"Text"},"02h19"))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(o.Z,{mdxType:"FeedbackBlock"}))}m.isMDXComponent=!0}}]);