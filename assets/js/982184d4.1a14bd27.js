"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9033],{38e3:(e,t,n)=>{n.d(t,{D:()=>p,Z:()=>l});var o=n(25773),r=n(27378),i=n(67468),a=n(33099);const s=i.ZP.div`
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
`;const l=function(e){let{children:t,columns:n=1,...i}=e;return r.createElement(a.Z,null,(()=>r.createElement(s,(0,o.Z)({$columns:n},i),t)))};var d=n(74904);const c=(0,i.ZP)(d.Z)`
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
`;const p=function(e){let{children:t,featured:n=!1,centered:o=!1,className:i}=e;return r.createElement(c,{$featured:n,$centered:o,className:i},t)}},33099:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(27378),r=n(76457);function i(e){let{children:t,fallback:n}=e;return(0,r.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},44759:(e,t,n)=>{n.d(t,{Sj:()=>k,ZP:()=>h,aA:()=>m,c1:()=>p,tC:()=>u});var o,r=n(50669),i=n(67468),a=n(30210),s=n(58924),l=n(84359),d=n(45386);const c=Object.values(a.Uc),p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return t.map((t=>f.media[t](o||(o=(0,r.Z)(["",""])),e(t))))},m=e=>{if(e)return"object"==typeof e?p((t=>e[t]&&(0,i.iv)(["align-items:",";"],e[t]))):(0,i.iv)(["align-items:",";"],e)},u=e=>{if(e)return"object"==typeof e?p((t=>e[t]&&(0,i.iv)(["justify-content:",";"],e[t]))):(0,i.iv)(["justify-content:",";"],e)},b={columns:{smallMobile:12,mobile:12,tablet:12,desktop:12,largeDesktop:12},gutterWidth:{smallMobile:d.sizeSpacing04,mobile:d.sizeSpacing04,tablet:d.sizeSpacing05,desktop:d.sizeSpacing05,largeDesktop:d.sizeSpacing05},paddingWidth:{smallMobile:d.sizeSpacing04,mobile:d.sizeSpacing06,tablet:d.sizeSpacing08,desktop:d.sizeSpacing08,largeDesktop:d.sizeSpacing08},container:{smallMobile:"full",mobile:"full",tablet:"full",desktop:d.breakpointLg,largeDesktop:d.breakpointXl},breakpoints:{smallMobile:0,mobile:d.breakpointXs,tablet:d.breakpointSm,desktop:d.breakpointMd,largeDesktop:d.breakpointLg}},v=Object.keys(b.breakpoints).reduce(((e,t)=>{const n=b.breakpoints[t],o=e;return o[t]=function(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(n)return e?(0,i.iv)(["@media ","{","}"],e,(0,i.iv)(...n)):(0,i.iv)(...n)}}(n&&"(min-width: ".concat(n,")")),o}),{}),g=Object.entries(b.breakpoints).reduce(((e,t,n,o)=>{const r=[],[i,a]=t,l=o[n+1];if(a&&r.push("(min-width: ".concat(a,")")),l){const[,e]=l;e&&r.push("(max-width: ".concat((0,s.Z)(e)-1,"px)"))}const d=r.join(" and ");return Object.assign({},e,{[i]:"@media ".concat(d)})}),{}),k=()=>{let e;for(let t in g)(0,l.Z)(g[t])&&(e=t);return e},f=Object.assign({},b,{media:v,mediaQuery:g}),h=f},50613:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(27378),r=n(23615),i=n.n(r),a=n(30210),s=n(44759);const l=e=>{let{children:t=null,only:n=null}=e;const r=(0,s.Sj)();if(!n)return null;let i=!0;if(Array.isArray(n))for(let o=0;o<n.length;o++)r===n[o]&&(i=!1);else n===r&&(i=!1);return i?o.createElement(o.Fragment,null,t):null};l.displayName="Hidden",l.viewports={smallMobile:a.Uc.smallMobile,mobile:a.Uc.mobile,tablet:a.Uc.tablet,desktop:a.Uc.desktop,largeDesktop:a.Uc.largeDesktop},l.propTypes={only:i().oneOfType([i().oneOf([l.viewports.smallMobile,l.viewports.mobile,l.viewports.tablet,l.viewports.desktop,l.viewports.largeDesktop]),i().arrayOf(i().oneOf([l.viewports.smallMobile,l.viewports.mobile,l.viewports.tablet,l.viewports.desktop,l.viewports.largeDesktop]))]),children:i().node};const d=l},84359:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(27378);const r=e=>{const t=e?e.replace(/^@media( ?)/m,""):"",n="undefined"!==window?window.matchMedia:null,[r,i]=(0,o.useState)((()=>!!n&&n(t).matches));return(0,o.useEffect)((()=>{if(!n)return;let e=!0;const o=n(t),r=()=>e&&i(o.matches);return r(),o.addListener(r),()=>{e=!1,o.removeListener(r)}}),[t,n]),r}},14544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>b});var o=n(25773),r=(n(27378),n(35318)),i=n(77515),a=n(67994),s=n(38e3),l=n(50613),d=n(74904);const c={title:"Hidden",description:"O Hidden \xe9 respons\xe1vel por ocultar elementos na \xe1rvore de renderiza\xe7\xe3o, de acordo com o viewport."},p=void 0,m={unversionedId:"components/hidden",id:"components/hidden",title:"Hidden",description:"O Hidden \xe9 respons\xe1vel por ocultar elementos na \xe1rvore de renderiza\xe7\xe3o, de acordo com o viewport.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/hidden.md",sourceDirName:"components",slug:"/components/hidden",permalink:"/tangram-rebranding/docs/components/hidden",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/hidden.md",tags:[],version:"current",frontMatter:{title:"Hidden",description:"O Hidden \xe9 respons\xe1vel por ocultar elementos na \xe1rvore de renderiza\xe7\xe3o, de acordo com o viewport."},sidebar:"mySidebar",previous:{title:"Grid",permalink:"/tangram-rebranding/docs/components/grid"},next:{title:"InlineGroup",permalink:"/tangram-rebranding/docs/components/inlinegroup"}},u={},b=[{value:"Feedback",id:"feedback",level:2}],v={toc:b};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{current:"docs",name:"hidden",mdxType:"ComponentTab"}),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"Hidden")," \xe9 respons\xe1vel por ocultar elementos na \xe1rvore de renderiza\xe7\xe3o, de acordo com o ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport"),"."),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Para testar os exemplos abaixo, use a Device Toolbar, dispon\xedvel nas ferramentas de desenvolvedor, ou redimensione a janela do seu navegador.")),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{mdxType:"CardGridItem"},(0,r.kt)(l.Z,{only:l.Z.viewports.mobile,mdxType:"Hidden"},(0,r.kt)(d.Z,{style:{marginBottom:"var(--size-spacing-02)"},mdxType:"Card"},"Oculto em janelas tamanho celular")),(0,r.kt)(l.Z,{only:l.Z.viewports.tablet,mdxType:"Hidden"},(0,r.kt)(d.Z,{style:{marginBottom:"var(--size-spacing-02)"},mdxType:"Card"},"Oculto em janelas tamanho tablet")),(0,r.kt)(d.Z,{mdxType:"Card"},"Sempre vis\xedvel"))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(a.Z,{mdxType:"FeedbackBlock"}))}g.isMDXComponent=!0},50669:(e,t,n)=>{function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:()=>o})}}]);