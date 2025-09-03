"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3464],{38e3:(e,a,t)=>{t.d(a,{D:()=>m,Z:()=>l});var n=t(25773),r=t(27378),d=t(67468),i=t(33099);const o=d.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:a}=e;return a>=2&&d.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${a}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const l=function(e){let{children:a,columns:t=1,...d}=e;return r.createElement(i.Z,null,(()=>r.createElement(o,(0,n.Z)({$columns:t},d),a)))};var s=t(74904);const c=(0,d.ZP)(s.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:a}=e;return a&&d.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:a}=e;return a&&d.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:a,featured:t=!1,centered:n=!1,className:d}=e;return r.createElement(c,{$featured:t,$centered:n,className:d},a)}},88401:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(25773),r=t(27378),d=t(81884),i=t(59536);function o(e){let{children:a,...t}=e;return r.createElement(i.Z,(0,n.Z)({as:d.Z},t),a)}},35498:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=t(25773),r=(t(27378),t(35318)),d=t(77515),i=t(38e3),o=t(67994),l=t(88401);const s={title:"Sidebar",description:"Sidebar \xe9 uma \xe1rea fixa na lateral esquerda da tela, com altura que acompanha a altura da tela e que disp\xf5e de rolagem independente da p\xe1gina."},c=void 0,m={unversionedId:"components/sidebar",id:"components/sidebar",title:"Sidebar",description:"Sidebar \xe9 uma \xe1rea fixa na lateral esquerda da tela, com altura que acompanha a altura da tela e que disp\xf5e de rolagem independente da p\xe1gina.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/sidebar.md",sourceDirName:"components",slug:"/components/sidebar",permalink:"/tangram-rebranding/docs/components/sidebar",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/sidebar.md",tags:[],version:"current",frontMatter:{title:"Sidebar",description:"Sidebar \xe9 uma \xe1rea fixa na lateral esquerda da tela, com altura que acompanha a altura da tela e que disp\xf5e de rolagem independente da p\xe1gina."},sidebar:"mySidebar",previous:{title:"Overlay",permalink:"/tangram-rebranding/docs/components/overlay"},next:{title:"Skeleton",permalink:"/tangram-rebranding/docs/components/skeleton"}},p={},u=[{value:"\xc1rea de conte\xfado",id:"content-area",level:2},{value:"Navega\xe7\xe3o vertical",id:"vertical-navigation",level:2},{value:"Feedback",id:"feedback",level:2}],g={toc:u};function b(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(d.Z,{current:"docs",name:"sidebar",mdxType:"ComponentTab"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Sidebar")," \xe9 uma \xe1rea fixa na lateral esquerda da tela, com altura que acompanha a altura da tela e que disp\xf5e de rolagem independente da p\xe1gina. ",(0,r.kt)("strong",{parentName:"p"},"Deve ser sempre usada junto com o ",(0,r.kt)(l.Z,{href:"../../components/main",mdxType:"Link"},"Main"),".")),(0,r.kt)("h2",{id:"content-area"},"\xc1rea de conte\xfado"),(0,r.kt)("p",null,"Possui 300px de largura e a altura sempre equivalente \xe0 altura do browser menos a altura da ",(0,r.kt)("inlineCode",{parentName:"p"},"Navbar"),"."),(0,r.kt)("p",null,"Quando a altura total dos elementos internos for maior que a altura dispon\xedvel na tela, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sidebar")," possuir\xe1 ter rolagem."),(0,r.kt)(i.Z,{mdxType:"CardGrid"},(0,r.kt)(i.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)("span",null,(0,r.kt)("img",{src:t(95569).Z,alt:"Dimens\xf5es de um Sidebar"})))),(0,r.kt)("h2",{id:"vertical-navigation"},"Navega\xe7\xe3o vertical"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Sidebar")," deve ser usada junto com o ",(0,r.kt)(l.Z,{href:"../../components/verticalnav",mdxType:"Link"},"VerticalNav")," para criar a navega\xe7\xe3o de um determinado contexto da aplica\xe7\xe3o."),(0,r.kt)(i.Z,{mdxType:"CardGrid"},(0,r.kt)(i.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)("span",null,(0,r.kt)("img",{src:t(10542).Z,alt:"Exemplos de aplica\xe7\xe3o com a navega\xe7\xe3o vertical"})))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(o.Z,{mdxType:"FeedbackBlock"}))}b.isMDXComponent=!0},95569:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dimentions-c933d992b961c82262b3159fac300b03.png"},10542:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/examples-4e2e8e8fc06321fe0abd9ad742f4fd9b.png"}}]);