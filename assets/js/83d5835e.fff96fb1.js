"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5014],{83789:(e,a,t)=>{t.d(a,{Z:()=>b});var r=t(27378),o=t(67468),s=t(33099);const n=o.ZP.div`
  border: 1px solid var(--neutral-border);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--size-spacing-09);
  overflow: hidden;

  ${e=>{let{$overflowVisible:a}=e;return a&&o.iv`
      overflow: visible;
    `}}
`,d=o.ZP.div`
  align-items: center;
  background: var(--neutral-surface-low-emphasis);
  display: flex;
  padding: 0.5rem 1rem;
`,i=o.ZP.div`
  white-space: nowrap;
`,c=o.ZP.div`
  flex: 1 0;
  margin: 0 1rem 0 0.5rem;
  border-radius: 12.5px;
  background-color: #fff;
  color: #666;
  padding: 5px 15px;
  font: 400 13px Arial;
  user-select: none;
`,l=o.ZP.div`
  margin-left: auto;
`,m=o.ZP.span`
  margin-right: 6px;
  margin-top: 4px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`,u=o.ZP.span`
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
`,p=o.ZP.div`
  margin-bottom: -6px;
  ${e=>{let{$padding:a}=e;return a&&o.iv`
      padding: var(--size-spacing-04);
    `}};
`;const b=function(e){let{children:a,minHeight:t,url:o,bodyPadding:b,overflowVisible:g}=e;return r.createElement(s.Z,null,(()=>r.createElement(n,{style:{minHeight:t},$overflowVisible:g},r.createElement(d,null,r.createElement(i,null,r.createElement(m,{style:{background:"#f25f58"}}),r.createElement(m,{style:{background:"#fbbe3c"}}),r.createElement(m,{style:{background:"#58cb42"}})),r.createElement(c,null,o),r.createElement(l,null,r.createElement("div",null,r.createElement(u,null),r.createElement(u,null),r.createElement(u,null)))),r.createElement(p,{$padding:!!b},a))))}},88401:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(25773),o=t(27378),s=t(81884),n=t(59536);function d(e){let{children:a,...t}=e;return o.createElement(n.Z,(0,r.Z)({as:s.Z},t),a)}},33099:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(27378),o=t(76457);function s(e){let{children:a,fallback:t}=e;return(0,o.Z)()?r.createElement(r.Fragment,null,a?.()):t??null}},10661:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(25773),o=(t(27378),t(35318)),s=t(83789),n=t(67994),d=t(88401);const i={title:"Busca",description:"Padr\xe3o de busca orienta a montagem de comportamento, combinando uma s\xe9rie de componentes, de forma consistente e l\xf3gica."},c="Busca",l={unversionedId:"patterns/search",id:"patterns/search",title:"Busca",description:"Padr\xe3o de busca orienta a montagem de comportamento, combinando uma s\xe9rie de componentes, de forma consistente e l\xf3gica.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/patterns/search.md",sourceDirName:"patterns",slug:"/patterns/search",permalink:"/tangram-rebranding/docs/patterns/search",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/patterns/search.md",tags:[],version:"current",frontMatter:{title:"Busca",description:"Padr\xe3o de busca orienta a montagem de comportamento, combinando uma s\xe9rie de componentes, de forma consistente e l\xf3gica."},sidebar:"mySidebar",previous:{title:"TextArea",permalink:"/tangram-rebranding/docs/components/textarea"},next:{title:"Carregamento",permalink:"/tangram-rebranding/docs/patterns/loading"}},m={},u=[{value:"Barra de Filtros",id:"filter-bar",level:2},{value:"Em tempo real",id:"real-time-search",level:2},{value:"Sem resultados",id:"empty-state",level:2},{value:"Destaque de termos",id:"terms-highlight",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:u};function b(e){let{components:a,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search"},"Busca"),(0,o.kt)("p",null,"Padr\xe3o de busca orienta a montagem de comportamento, combinando uma s\xe9rie de componentes, de forma consistente e l\xf3gica."),(0,o.kt)("p",null,"Para mais detalhes acesse nossa aba do componente ",(0,o.kt)(d.Z,{href:"../../../code/components/search",mdxType:"Link"},"Search"),"."),(0,o.kt)("h2",{id:"filter-bar"},"Barra de Filtros"),(0,o.kt)("p",null,"Quando exibido na barra de filtros, o campo de busca deve estar sempre posicionado \xe0 esquerda."),(0,o.kt)("p",null,"Para mais detalhes acesse nossa p\xe1gina de ",(0,o.kt)(d.Z,{href:"../../../docs/patterns/filters",mdxType:"Link"},"padr\xe3o de filtros"),"."),(0,o.kt)(s.Z,{mdxType:"BrowserWindow"},(0,o.kt)("img",{src:t(83475).Z,alt:"Aplica\xe7\xe3o do campo de busca na barra de filtros"})),(0,o.kt)("h2",{id:"real-time-search"},"Em tempo real"),(0,o.kt)("p",null,"Este padr\xe3o n\xe3o precisa de clique ou tecla para executar a busca. Ela \xe9 feita \xe0 medida que o termo \xe9 digitado."),(0,o.kt)("p",null,"Nesses casos, \xe9 recomendado o uso de skeletons na estrutura que vai mostrar os resultados, mantendo assim a pessoa usu\xe1ria informada sobre o status do sistema."),(0,o.kt)("p",null,"Para mais detalhes acesse nossa p\xe1gina de ",(0,o.kt)(d.Z,{href:"../../../docs/patterns/loading",mdxType:"Link"},"padr\xe3o de carregamento"),"."),(0,o.kt)(s.Z,{mdxType:"BrowserWindow"},(0,o.kt)("img",{src:t(61354).Z,alt:"Aplica\xe7\xe3o do campo de busca com a busca em tempo real"})),(0,o.kt)("h2",{id:"empty-state"},"Sem resultados"),(0,o.kt)("p",null,"Se nenhum resultado for encontrado, \xe9 recomendado o uso do ",(0,o.kt)(d.Z,{href:"../../../docs/components/emptystate",mdxType:"Link"},"EmptyState")," com um texto informativo e um bot\xe3o que permite executar uma a\xe7\xe3o para o momento."),(0,o.kt)(s.Z,{mdxType:"BrowserWindow"},(0,o.kt)("img",{src:t(67192).Z,alt:"Busca sem resultado"})),(0,o.kt)("h2",{id:"terms-highlight"},"Destaque de termos"),(0,o.kt)("p",null,"Para destacar o termo digitado no resultado da busca, \xe9 poss\xedvel adicionar um estilo de sele\xe7\xe3o em todos os textos - ou parte deles - que correspondem ao termo digitado no campo de busca."),(0,o.kt)(s.Z,{mdxType:"BrowserWindow"},(0,o.kt)("img",{src:t(28194).Z,alt:"Busca destacando o termo buscado nos no resultado da busca"})),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(n.Z,{mdxType:"FeedbackBlock"}))}b.isMDXComponent=!0},67192:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/search-empty-state-pt-br-1e4471de5abe3510c8b4ca32bad6841a.png"},83475:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/search-filters-pt-br-6fe0210a0d4c8a47b1af9606c6d2e006.png"},61354:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/search-real-time-pt-br-461b2255bf0a19f030dc77b0da18906b.png"},28194:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/search-terms-highlight-pt-br-8b99b696d773e04c3cdd65179fbdbf6d.png"}}]);