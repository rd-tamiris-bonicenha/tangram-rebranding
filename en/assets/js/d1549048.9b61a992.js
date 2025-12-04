"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8793],{38e3:(e,t,n)=>{n.d(t,{D:()=>u,Z:()=>l});var i=n(25773),r=n(27378),a=n(67468),o=n(33099);const s=a.ZP.div`
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
`;const l=function(e){let{children:t,columns:n=1,...a}=e;return r.createElement(o.Z,null,(()=>r.createElement(s,(0,i.Z)({$columns:n},a),t)))};var c=n(74904);const d=(0,a.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:n=!1,centered:i=!1,className:a}=e;return r.createElement(d,{$featured:n,$centered:i,className:a},t)}},82399:(e,t,n)=>{n.d(t,{Do:()=>v,pM:()=>x,ZP:()=>o});var i=n(25773),r=n(27378),a=n(38e3);const o=function(e){let{children:t,columns:n=2,...o}=e;return r.createElement(a.Z,(0,i.Z)({columns:n},o),t)};var s=n(99213),l=n(67468),c=n(89850),d=n(56988);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const h=function(e){return r.createElement(u,e)},m=(0,l.ZP)(a.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  padding: 0;
`,g=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  background-color: var(--neutral-surface);
`,p=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const v=function(e){let{title:t,children:n}=e;return r.createElement(m,{centered:!0},r.createElement(p,null,n),r.createElement(g,null,r.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.success,icon:r.createElement(d.Z,{title:"Checkmark icon"})},r.createElement(s.Z,{id:"doanddont.do"},"Do")),t&&r.createElement(h,null,t)))};var f=n(89046);const k=(0,l.ZP)(a.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,b=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  background-color: var(--neutral-surface);
`,Z=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const x=function(e){let{title:t,children:n}=e;return r.createElement(k,{centered:!0},r.createElement(Z,null,n),r.createElement(b,null,r.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.danger,icon:r.createElement(f.Z,{title:"Times icon"})},r.createElement(s.Z,{id:"doanddont.dont"},"Don't")),t&&r.createElement(h,null,t)))}},33099:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(27378),r=n(76457);function a(e){let{children:t,fallback:n}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},89925:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(25773),r=n(30808),a=n(27378),o=n(67468),s=(n(23615),n(25881)),l=n(93399);const c=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],d=(0,o.ZP)(s.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),u=(0,a.forwardRef)(((e,t)=>{let{disabled:n,as:o,children:s,type:h=u.types.button,kind:m=u.kinds.primary,size:g=u.sizes.md,startIcon:p,endIcon:v,loading:f=!1,fluid:k=!1}=e,b=(0,r.Z)(e,c);return a.createElement(d,(0,i.Z)({ref:t,$startIcon:!!p,$endIcon:!!v,loading:f,fluid:k,forwardedAs:o,size:g,disabled:n||f,kind:m,type:h},b),f?a.createElement(l.Z,{size:l.Z.sizes.sm}):p,s,v)}));u.displayName="Button",u.sizes=s.Z.sizes,u.kinds=s.Z.kinds,u.types=s.Z.types;const h=u},89850:(e,t,n)=>{n.d(t,{Z:()=>Z});var i=n(25773),r=n(30808),a=n(27378),o=n(89046),s=(n(23615),n(67468)),l=n(48981),c=n(30210),d=n(69419),u=n(66496);const h={[c.$O.DEFAULT]:{background:"var(--neutral-surface-high-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"},[c.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"}},m=(0,s.iv)(["",""],(e=>{let{$tagKind:t,$isRemovable:n,onClick:i}=e;if(n){const{background:e,color:t,fill:n}=h[c.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}"],e,t,n)}const{background:r,color:a,fill:o,backgroundHover:d,colorHover:u,fillHover:m}=h[t]||h[c.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],r,a,o,i&&(0,s.iv)([""," cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],l.Z,u,d,m))})),g=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size"],p={[c.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[c.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[c.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},v=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,m,(e=>{let{$size:t}=e;const{height:n,font:i}=p[t]||p[c.zf.MD];return(0,s.iv)(["height:",";font:",";"],n,i)}),(e=>{let{$isRemovable:t}=e;return t&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),f=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),k=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:n}=p[t]||p[c.zf.MD];return(0,s.iv)(["height:",";"],n)})),b=(0,a.forwardRef)(((e,t)=>{let{children:n,startIcon:s,icon:l,removable:h,onDelete:m,onClick:Z,kind:x=b.kinds.default,clickable:z=!0,size:w=b.sizes.md}=e,y=(0,r.Z)(e,g);const{iconSize:E}=p[w]||p[c.zf.MD],$=z&&(0,d.Z)(Z),D=(0,d.Z)(m)||h,T=l||s,C=(0,a.useCallback)((()=>T?(0,a.isValidElement)(T)&&(0,a.cloneElement)(T,Object.assign({},T.props,{size:E})):null),[T,E]);return(0,a.useEffect)((()=>{x!==b.kinds.default&&"string"==typeof n&&n.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[x,n]),(0,u.Z)({removable:h,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),a.createElement(v,(0,i.Z)({$tagKind:x,$size:w,$isRemovable:D,onClick:$&&Z,tabIndex:$?0:void 0,role:$?"button":void 0},y,{ref:t}),C(),n&&a.createElement(f,{$isRemovable:D},n),D&&a.createElement(k,{$size:w,onClick:e=>{e.stopPropagation(),m(e)},role:"button"},a.createElement(o.Z,{size:E,title:"Remove tag",titleId:"idIconCloseTag"})))}));b.displayName="Tag",b.Style=v,b.kinds={default:c.$O.DEFAULT,primary:c.$O.PRIMARY,success:c.$O.SUCCESS,danger:c.$O.DANGER,warning:c.$O.WARNING,help:c.$O.HELP},b.sizes={md:c.zf.MD,lg:c.zf.LG,xl:c.zf.XL};const Z=b},56988:(e,t,n)=>{n.d(t,{Z:()=>m});var i,r=n(25773),a=n(30808),o=n(27378),s=n(23615),l=n.n(s),c=n(61421),d=n(1333);const u=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:n,titleId:s}=e,l=(0,a.Z)(e,u);const h=c.d.get(t);return s=(0,d.Z)(s),o.createElement("svg",(0,r.Z)({width:h.width,height:h.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},l),n?o.createElement("title",{id:s},n):null,i||(i=o.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}h.sizes=c.J,h.propTypes={size:l().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:l().string,title:l().string.isRequired};const m=h},76473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var i=n(25773),r=(n(27378),n(35318)),a=n(77515),o=n(67994),s=n(38e3),l=n(82399),c=n(59536),d=n(89925);const u={title:"Link",description:"Link is used for navigation between pages - inside or outside the product."},h=void 0,m={unversionedId:"components/link",id:"components/link",title:"Link",description:"Link is used for navigation between pages - inside or outside the product.",source:"@site/docs/components/link.md",sourceDirName:"components",slug:"/components/link",permalink:"/tangram-rebranding/en/docs/components/link",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/link.md",tags:[],version:"current",frontMatter:{title:"Link",description:"Link is used for navigation between pages - inside or outside the product."},sidebar:"mySidebar",previous:{title:"Dropdown",permalink:"/tangram-rebranding/en/docs/components/dropdown"},next:{title:"Text",permalink:"/tangram-rebranding/en/docs/components/text"}},g={},p=[{value:"Good habits",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],v={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{current:"docs",name:"link",mdxType:"ComponentTab"}),(0,r.kt)("p",null,"The link is used for navigation between pages - inside or outside the product. It should always have clickable text, which can be accompanied by an icon in the same color."),(0,r.kt)("p",null,"Create text for links that make it clear what will happen when the user clicks on it. Avoid generic texts, such as \u201cclick here\u201d, which do not inform the destination of the click."),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(c.Z,{href:"#",mdxType:"Link"},"Link"))),(0,r.kt)("h2",{id:"good-habits"},"Good habits"),(0,r.kt)("p",null,"Avoid using links to actions that create and manipulate information within the product. Example: links to create Landing Pages or other assets, links to delete information, among others."),(0,r.kt)("p",null,"Links should always open in the same tab, ",(0,r.kt)("strong",{parentName:"p"},"except when switching pages results in the loss of information or when the landing page is external to the product.")),(0,r.kt)(l.ZP,{mdxType:"DoAndDont"},(0,r.kt)(l.Do,{title:"Use buttons to perform actions",mdxType:"Do"},(0,r.kt)(d.Z,{mdxType:"Button"},"Create Landing Page")),(0,r.kt)(l.pM,{title:"Don't use links to take actions",mdxType:"Dont"},(0,r.kt)(c.Z,{href:"#",mdxType:"Link"},"Create Landing Page"))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(o.Z,{mdxType:"FeedbackBlock"}))}f.isMDXComponent=!0}}]);