"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1329],{38e3:(e,t,n)=>{n.d(t,{D:()=>u,Z:()=>l});var i=n(25773),o=n(27378),r=n(67468),a=n(33099);const s=r.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&r.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const l=function(e){let{children:t,columns:n=1,...r}=e;return o.createElement(a.Z,null,(()=>o.createElement(s,(0,i.Z)({$columns:n},r),t)))};var d=n(74904);const c=(0,r.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&r.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&r.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const u=function(e){let{children:t,featured:n=!1,centered:i=!1,className:r}=e;return o.createElement(c,{$featured:n,$centered:i,className:r},t)}},82399:(e,t,n)=>{n.d(t,{Do:()=>g,pM:()=>Z,ZP:()=>a});var i=n(25773),o=n(27378),r=n(38e3);const a=function(e){let{children:t,columns:n=2,...a}=e;return o.createElement(r.Z,(0,i.Z)({columns:n},a),t)};var s=n(99213),l=n(67468),d=n(89850),c=n(56988);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const m=function(e){return o.createElement(u,e)},p=(0,l.ZP)(r.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  padding: 0;
`,h=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  background-color: var(--neutral-surface);
`,v=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const g=function(e){let{title:t,children:n}=e;return o.createElement(p,{centered:!0},o.createElement(v,null,n),o.createElement(h,null,o.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.success,icon:o.createElement(c.Z,{title:"Checkmark icon"})},o.createElement(s.Z,{id:"doanddont.do"},"Do")),t&&o.createElement(m,null,t)))};var f=n(89046);const b=(0,l.ZP)(r.D)`
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
`;const Z=function(e){let{title:t,children:n}=e;return o.createElement(b,{centered:!0},o.createElement(x,null,n),o.createElement(k,null,o.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.danger,icon:o.createElement(f.Z,{title:"Times icon"})},o.createElement(s.Z,{id:"doanddont.dont"},"Don't")),t&&o.createElement(m,null,t)))}},33099:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(27378),o=n(76457);function r(e){let{children:t,fallback:n}=e;return(0,o.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},89925:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(25773),o=n(30808),r=n(27378),a=n(67468),s=(n(23615),n(25881)),l=n(93399);const d=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],c=(0,a.ZP)(s.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),u=(0,r.forwardRef)(((e,t)=>{let{disabled:n,as:a,children:s,type:m=u.types.button,kind:p=u.kinds.primary,size:h=u.sizes.md,startIcon:v,endIcon:g,loading:f=!1,fluid:b=!1}=e,k=(0,o.Z)(e,d);return r.createElement(c,(0,i.Z)({ref:t,$startIcon:!!v,$endIcon:!!g,loading:f,fluid:b,forwardedAs:a,size:h,disabled:n||f,kind:p,type:m},k),f?r.createElement(l.Z,{size:l.Z.sizes.sm}):v,s,g)}));u.displayName="Button",u.sizes=s.Z.sizes,u.kinds=s.Z.kinds,u.types=s.Z.types;const m=u},89850:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(25773),o=n(30808),r=n(27378),a=n(89046),s=(n(23615),n(67468)),l=n(48981),d=n(30210),c=n(69419),u=n(66496);const m={[d.$O.DEFAULT]:{background:"var(--neutral-surface-high-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"},[d.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[d.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"}},p=(0,s.iv)(["",""],(e=>{let{$tagKind:t,$isRemovable:n,onClick:i}=e;if(n){const{background:e,color:t,fill:n}=m[d.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}"],e,t,n)}const{background:o,color:r,fill:a,backgroundHover:c,colorHover:u,fillHover:p}=m[t]||m[d.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],o,r,a,i&&(0,s.iv)([""," cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],l.Z,u,c,p))})),h=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size"],v={[d.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[d.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[d.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},g=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,p,(e=>{let{$size:t}=e;const{height:n,font:i}=v[t]||v[d.zf.MD];return(0,s.iv)(["height:",";font:",";"],n,i)}),(e=>{let{$isRemovable:t}=e;return t&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),f=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),b=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:n}=v[t]||v[d.zf.MD];return(0,s.iv)(["height:",";"],n)})),k=(0,r.forwardRef)(((e,t)=>{let{children:n,startIcon:s,icon:l,removable:m,onDelete:p,onClick:x,kind:Z=k.kinds.default,clickable:z=!0,size:y=k.sizes.md}=e,w=(0,o.Z)(e,h);const{iconSize:T}=v[y]||v[d.zf.MD],E=z&&(0,c.Z)(x),$=(0,c.Z)(p)||m,D=l||s,I=(0,r.useCallback)((()=>D?(0,r.isValidElement)(D)&&(0,r.cloneElement)(D,Object.assign({},D.props,{size:T})):null),[D,T]);return(0,r.useEffect)((()=>{Z!==k.kinds.default&&"string"==typeof n&&n.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[Z,n]),(0,u.Z)({removable:m,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),r.createElement(g,(0,i.Z)({$tagKind:Z,$size:y,$isRemovable:$,onClick:E&&x,tabIndex:E?0:void 0,role:E?"button":void 0},w,{ref:t}),I(),n&&r.createElement(f,{$isRemovable:$},n),$&&r.createElement(b,{$size:y,onClick:e=>{e.stopPropagation(),p(e)},role:"button"},r.createElement(a.Z,{size:T,title:"Remove tag",titleId:"idIconCloseTag"})))}));k.displayName="Tag",k.Style=g,k.kinds={default:d.$O.DEFAULT,primary:d.$O.PRIMARY,success:d.$O.SUCCESS,danger:d.$O.DANGER,warning:d.$O.WARNING,help:d.$O.HELP},k.sizes={md:d.zf.MD,lg:d.zf.LG,xl:d.zf.XL};const x=k},56988:(e,t,n)=>{n.d(t,{Z:()=>p});var i,o=n(25773),r=n(30808),a=n(27378),s=n(23615),l=n.n(s),d=n(61421),c=n(1333);const u=["size","title","titleId"];function m(e){let{size:t=d.J.md,title:n,titleId:s}=e,l=(0,r.Z)(e,u);const m=d.d.get(t);return s=(0,c.Z)(s),a.createElement("svg",(0,o.Z)({width:m.width,height:m.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,i||(i=a.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}m.sizes=d.J,m.propTypes={size:l().oneOf([m.sizes.xs,m.sizes.sm,m.sizes.md,m.sizes.lg,m.sizes.xl]),titleId:l().string,title:l().string.isRequired};const p=m},26718:(e,t,n)=>{n.d(t,{Z:()=>p});var i,o=n(25773),r=n(30808),a=n(27378),s=n(23615),l=n.n(s),d=n(61421),c=n(1333);const u=["size","title","titleId"];function m(e){let{size:t=d.J.md,title:n,titleId:s}=e,l=(0,r.Z)(e,u);const m=d.d.get(t);return s=(0,c.Z)(s),a.createElement("svg",(0,o.Z)({width:m.width,height:m.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,i||(i=a.createElement("path",{d:"M18.417 10.833h-5.25v-5.25A.583.583 0 0012.583 5h-1.166a.583.583 0 00-.584.583v5.25h-5.25a.583.583 0 00-.583.584v1.166c0 .323.261.584.583.584h5.25v5.25c0 .322.261.583.584.583h1.166a.583.583 0 00.584-.583v-5.25h5.25a.583.583 0 00.583-.584v-1.166a.583.583 0 00-.583-.584z"})))}m.sizes=d.J,m.propTypes={size:l().oneOf([m.sizes.xs,m.sizes.sm,m.sizes.md,m.sizes.lg,m.sizes.xl]),titleId:l().string,title:l().string.isRequired};const p=m},64346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>k,frontMatter:()=>p,metadata:()=>v,toc:()=>f});var i=n(25773),o=(n(27378),n(35318)),r=n(77515),a=n(67994),s=n(38e3),l=n(82399),d=n(80151),c=n(89925),u=n(76853),m=n(26718);const p={title:"Tooltip",description:"Tooltip offers additional information and should not have very long texts, buttons and links."},h=void 0,v={unversionedId:"components/tooltip",id:"components/tooltip",title:"Tooltip",description:"Tooltip offers additional information and should not have very long texts, buttons and links.",source:"@site/docs/components/tooltip.md",sourceDirName:"components",slug:"/components/tooltip",permalink:"/tangram-rebranding/en/docs/components/tooltip",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/tooltip.md",tags:[],version:"current",frontMatter:{title:"Tooltip",description:"Tooltip offers additional information and should not have very long texts, buttons and links."},sidebar:"mySidebar",previous:{title:"Timeline",permalink:"/tangram-rebranding/en/docs/components/timeline"},next:{title:"Alert",permalink:"/tangram-rebranding/en/docs/components/alert"}},g={},f=[{value:"Good habits",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],b={toc:f};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{current:"docs",name:"tooltip",mdxType:"ComponentTab"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip")," provides additional information and should not have very long texts, buttons and links. It should be used to add information that helps the understanding of a term or an interface element."),(0,o.kt)("p",null,"Its firing happens by placing the ",(0,o.kt)("strong",{parentName:"p"},"mouse cursor over the element"),", which can be a text, icon, link, button, badges, tags, among others."),(0,o.kt)(s.Z,{mdxType:"CardGrid"},(0,o.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,o.kt)(d.Z,{id:"id01",text:"Tooltip text",mdxType:"Tooltip"},(0,o.kt)(c.Z,{kind:c.Z.kinds.secondary,mdxType:"Button"},"Label")))),(0,o.kt)("h2",{id:"good-habits"},"Good habits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use short texts inside and remember that they are not meant to replace a Help Center article"),(0,o.kt)("li",{parentName:"ul"},"Use to add information when it is not visible"),(0,o.kt)("li",{parentName:"ul"},"Avoid using too many Tooltips on the same screen"),(0,o.kt)("li",{parentName:"ul"},"Do not use to provide obvious or redundant content, thus avoiding excess information in the interface"),(0,o.kt)("li",{parentName:"ul"},"Do not use to give essential information for task completion"),(0,o.kt)("li",{parentName:"ul"},"Do not use very long links, icons, images and texts (maximum 100 characters and two lines)")),(0,o.kt)(l.ZP,{mdxType:"DoAndDont"},(0,o.kt)(l.Do,{title:"Use tooltip to offer additional content",mdxType:"Do"},(0,o.kt)(d.Z,{id:"id01",text:"Add",mdxType:"Tooltip"},(0,o.kt)(u.Z,{kind:c.Z.kinds.secondary,mdxType:"IconButton"},(0,o.kt)(m.Z,{title:"Plus icon",titleId:"idPlusIcon",mdxType:"Plus"})))),(0,o.kt)(l.pM,{title:"Avoid tooltip with redundant content",mdxType:"Dont"},(0,o.kt)(d.Z,{id:"id02",text:"Print",mdxType:"Tooltip"},(0,o.kt)(c.Z,{kind:c.Z.kinds.secondary,mdxType:"Button"},"Print")))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(a.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0}}]);