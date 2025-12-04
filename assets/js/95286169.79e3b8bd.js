"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6923],{38e3:(e,t,i)=>{i.d(t,{D:()=>u,Z:()=>l});var r=i(25773),o=i(27378),a=i(67468),n=i(33099);const s=a.ZP.div`
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
`;const l=function(e){let{children:t,columns:i=1,...a}=e;return o.createElement(n.Z,null,(()=>o.createElement(s,(0,r.Z)({$columns:i},a),t)))};var c=i(74904);const d=(0,a.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:i=!1,centered:r=!1,className:a}=e;return o.createElement(d,{$featured:i,$centered:r,className:a},t)}},82399:(e,t,i)=>{i.d(t,{Do:()=>h,pM:()=>Z,ZP:()=>n});var r=i(25773),o=i(27378),a=i(38e3);const n=function(e){let{children:t,columns:i=2,...n}=e;return o.createElement(a.Z,(0,r.Z)({columns:i},n),t)};var s=i(99213),l=i(67468),c=i(89850),d=i(56988);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const m=function(e){return o.createElement(u,e)},p=(0,l.ZP)(a.D)`
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
`;const h=function(e){let{title:t,children:i}=e;return o.createElement(p,{centered:!0},o.createElement(g,null,i),o.createElement(v,null,o.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.success,icon:o.createElement(d.Z,{title:"Checkmark icon"})},o.createElement(s.Z,{id:"doanddont.do"},"Do")),t&&o.createElement(m,null,t)))};var f=i(89046);const b=(0,l.ZP)(a.D)`
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
`;const Z=function(e){let{title:t,children:i}=e;return o.createElement(b,{centered:!0},o.createElement(x,null,i),o.createElement(k,null,o.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.danger,icon:o.createElement(f.Z,{title:"Times icon"})},o.createElement(s.Z,{id:"doanddont.dont"},"Don't")),t&&o.createElement(m,null,t)))}},33099:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(27378),o=i(76457);function a(e){let{children:t,fallback:i}=e;return(0,o.Z)()?r.createElement(r.Fragment,null,t?.()):i??null}},89925:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(25773),o=i(30808),a=i(27378),n=i(67468),s=(i(23615),i(25881)),l=i(93399);const c=["disabled","as","children","type","kind","size","startIcon","endIcon","loading","fluid"],d=(0,n.ZP)(s.Z).withConfig({displayName:"Button__Root",componentId:"sc-7cbhwm-0"})([""]),u=(0,a.forwardRef)(((e,t)=>{let{disabled:i,as:n,children:s,type:m=u.types.button,kind:p=u.kinds.primary,size:v=u.sizes.md,startIcon:g,endIcon:h,loading:f=!1,fluid:b=!1}=e,k=(0,o.Z)(e,c);return a.createElement(d,(0,r.Z)({ref:t,$startIcon:!!g,$endIcon:!!h,loading:f,fluid:b,forwardedAs:n,size:v,disabled:i||f,kind:p,type:m},k),f?a.createElement(l.Z,{size:l.Z.sizes.sm}):g,s,h)}));u.displayName="Button",u.sizes=s.Z.sizes,u.kinds=s.Z.kinds,u.types=s.Z.types;const m=u},89850:(e,t,i)=>{i.d(t,{Z:()=>x});var r=i(25773),o=i(30808),a=i(27378),n=i(89046),s=(i(23615),i(67468)),l=i(48981),c=i(30210),d=i(69419),u=i(66496);const m={[c.$O.DEFAULT]:{background:"var(--neutral-surface-high-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"},[c.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",colorHover:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)",fillHover:"var(--neutral-icon-high-emphasis)"},[c.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",colorHover:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)",fillHover:"var(--neutral-icon-inverse)"}},p=(0,s.iv)(["",""],(e=>{let{$tagKind:t,$isRemovable:i,onClick:r}=e;if(i){const{background:e,color:t,fill:i}=m[c.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}"],e,t,i)}const{background:o,color:a,fill:n,backgroundHover:d,colorHover:u,fillHover:p}=m[t]||m[c.$O.DEFAULT];return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],o,a,n,r&&(0,s.iv)([""," cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],l.Z,u,d,p))})),v=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size"],g={[c.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[c.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[c.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},h=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,p,(e=>{let{$size:t}=e;const{height:i,font:r}=g[t]||g[c.zf.MD];return(0,s.iv)(["height:",";font:",";"],i,r)}),(e=>{let{$isRemovable:t}=e;return t&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),f=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),b=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:i}=g[t]||g[c.zf.MD];return(0,s.iv)(["height:",";"],i)})),k=(0,a.forwardRef)(((e,t)=>{let{children:i,startIcon:s,icon:l,removable:m,onDelete:p,onClick:x,kind:Z=k.kinds.default,clickable:z=!0,size:y=k.sizes.md}=e,w=(0,o.Z)(e,v);const{iconSize:E}=g[y]||g[c.zf.MD],T=z&&(0,d.Z)(x),$=(0,d.Z)(p)||m,I=l||s,D=(0,a.useCallback)((()=>I?(0,a.isValidElement)(I)&&(0,a.cloneElement)(I,Object.assign({},I.props,{size:E})):null),[I,E]);return(0,a.useEffect)((()=>{Z!==k.kinds.default&&"string"==typeof i&&i.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[Z,i]),(0,u.Z)({removable:m,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),a.createElement(h,(0,r.Z)({$tagKind:Z,$size:y,$isRemovable:$,onClick:T&&x,tabIndex:T?0:void 0,role:T?"button":void 0},w,{ref:t}),D(),i&&a.createElement(f,{$isRemovable:$},i),$&&a.createElement(b,{$size:y,onClick:e=>{e.stopPropagation(),p(e)},role:"button"},a.createElement(n.Z,{size:E,title:"Remove tag",titleId:"idIconCloseTag"})))}));k.displayName="Tag",k.Style=h,k.kinds={default:c.$O.DEFAULT,primary:c.$O.PRIMARY,success:c.$O.SUCCESS,danger:c.$O.DANGER,warning:c.$O.WARNING,help:c.$O.HELP},k.sizes={md:c.zf.MD,lg:c.zf.LG,xl:c.zf.XL};const x=k},56988:(e,t,i)=>{i.d(t,{Z:()=>p});var r,o=i(25773),a=i(30808),n=i(27378),s=i(23615),l=i.n(s),c=i(61421),d=i(1333);const u=["size","title","titleId"];function m(e){let{size:t=c.J.md,title:i,titleId:s}=e,l=(0,a.Z)(e,u);const m=c.d.get(t);return s=(0,d.Z)(s),n.createElement("svg",(0,o.Z)({width:m.width,height:m.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},l),i?n.createElement("title",{id:s},i):null,r||(r=n.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}m.sizes=c.J,m.propTypes={size:l().oneOf([m.sizes.xs,m.sizes.sm,m.sizes.md,m.sizes.lg,m.sizes.xl]),titleId:l().string,title:l().string.isRequired};const p=m},26718:(e,t,i)=>{i.d(t,{Z:()=>p});var r,o=i(25773),a=i(30808),n=i(27378),s=i(23615),l=i.n(s),c=i(61421),d=i(1333);const u=["size","title","titleId"];function m(e){let{size:t=c.J.md,title:i,titleId:s}=e,l=(0,a.Z)(e,u);const m=c.d.get(t);return s=(0,d.Z)(s),n.createElement("svg",(0,o.Z)({width:m.width,height:m.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},l),i?n.createElement("title",{id:s},i):null,r||(r=n.createElement("path",{d:"M18.417 10.833h-5.25v-5.25A.583.583 0 0012.583 5h-1.166a.583.583 0 00-.584.583v5.25h-5.25a.583.583 0 00-.583.584v1.166c0 .323.261.584.583.584h5.25v5.25c0 .322.261.583.584.583h1.166a.583.583 0 00.584-.583v-5.25h5.25a.583.583 0 00.583-.584v-1.166a.583.583 0 00-.583-.584z"})))}m.sizes=c.J,m.propTypes={size:l().oneOf([m.sizes.xs,m.sizes.sm,m.sizes.md,m.sizes.lg,m.sizes.xl]),titleId:l().string,title:l().string.isRequired};const p=m},48882:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>f});var r=i(25773),o=(i(27378),i(35318)),a=i(77515),n=i(67994),s=i(38e3),l=i(82399),c=i(80151),d=i(89925),u=i(76853),m=i(26718);const p={title:"Tooltip",description:"Tooltip oferece informa\xe7\xf5es adicionais e n\xe3o deve ter textos muito longos, bot\xf5es e links."},v=void 0,g={unversionedId:"components/tooltip",id:"components/tooltip",title:"Tooltip",description:"Tooltip oferece informa\xe7\xf5es adicionais e n\xe3o deve ter textos muito longos, bot\xf5es e links.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/tooltip.md",sourceDirName:"components",slug:"/components/tooltip",permalink:"/tangram-rebranding/docs/components/tooltip",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/tooltip.md",tags:[],version:"current",frontMatter:{title:"Tooltip",description:"Tooltip oferece informa\xe7\xf5es adicionais e n\xe3o deve ter textos muito longos, bot\xf5es e links."},sidebar:"mySidebar",previous:{title:"Timeline",permalink:"/tangram-rebranding/docs/components/timeline"},next:{title:"Alert",permalink:"/tangram-rebranding/docs/components/alert"}},h={},f=[{value:"Boas pr\xe1ticas",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],b={toc:f};function k(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{current:"docs",name:"tooltip",mdxType:"ComponentTab"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip")," oferece informa\xe7\xf5es adicionais e n\xe3o deve ter textos muito longos, bot\xf5es e links. Deve ser usado para adicionar informa\xe7\xf5es que ajudem na compreens\xe3o de um termo ou de um elemento da interface."),(0,o.kt)("p",null,"Seu disparo acontece ao colocar o cursor do ",(0,o.kt)("strong",{parentName:"p"},"mouse sobre o elemento"),", que pode ser um texto, \xedcone, link, bot\xe3o, badges, tags, entre outros."),(0,o.kt)(s.Z,{mdxType:"CardGrid"},(0,o.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,o.kt)(c.Z,{id:"id01",text:"Texto do Tooltip",mdxType:"Tooltip"},(0,o.kt)(d.Z,{kind:d.Z.kinds.secondary,mdxType:"Button"},"R\xf3tulo")))),(0,o.kt)("h2",{id:"good-habits"},"Boas pr\xe1ticas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use textos curtos dentro e lembre-se de que elas n\xe3o foram pensadas para substituir um artigo da Central de Ajuda"),(0,o.kt)("li",{parentName:"ul"},"Use para adicionar informa\xe7\xf5es quando elas n\xe3o estiverem vis\xedveis"),(0,o.kt)("li",{parentName:"ul"},"Evite usar muitas Tooltips na mesma tela"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o use para fornecer conte\xfado \xf3bvio ou redundante, evitando assim o excesso de informa\xe7\xf5es na interface"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o use para dar informa\xe7\xf5es essenciais para a conclus\xe3o da tarefa"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o use links, \xedcones, imagens e textos muito longos (no m\xe1ximo 100 caracteres e duas linhas)")),(0,o.kt)(l.ZP,{mdxType:"DoAndDont"},(0,o.kt)(l.Do,{title:"Use tooltip para oferecer conte\xfado adicional",mdxType:"Do"},(0,o.kt)(c.Z,{id:"id01",text:"Adicionar",mdxType:"Tooltip"},(0,o.kt)(u.Z,{kind:d.Z.kinds.secondary,mdxType:"IconButton"},(0,o.kt)(m.Z,{title:"Plus icon",titleId:"idPlusIcon",mdxType:"Plus"})))),(0,o.kt)(l.pM,{title:"Evite tooltip com conte\xfado redundante",mdxType:"Dont"},(0,o.kt)(c.Z,{id:"id02",text:"Imprimir",mdxType:"Tooltip"},(0,o.kt)(d.Z,{kind:d.Z.kinds.secondary,mdxType:"Button"},"Imprimir")))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(n.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0}}]);