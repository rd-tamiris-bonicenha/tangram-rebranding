"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5181],{83789:(e,a,t)=>{t.d(a,{Z:()=>g});var o=t(27378),r=t(67468),n=t(33099);const s=r.ZP.div`
  border: 1px solid var(--neutral-border);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--size-spacing-09);
  overflow: hidden;

  ${e=>{let{$overflowVisible:a}=e;return a&&r.iv`
      overflow: visible;
    `}}
`,i=r.ZP.div`
  align-items: center;
  background: var(--neutral-surface-low-emphasis);
  display: flex;
  padding: 0.5rem 1rem;
`,d=r.ZP.div`
  white-space: nowrap;
`,l=r.ZP.div`
  flex: 1 0;
  margin: 0 1rem 0 0.5rem;
  border-radius: 12.5px;
  background-color: #fff;
  color: #666;
  padding: 5px 15px;
  font: 400 13px Arial;
  user-select: none;
`,m=r.ZP.div`
  margin-left: auto;
`,c=r.ZP.span`
  margin-right: 6px;
  margin-top: 4px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`,p=r.ZP.span`
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
`,u=r.ZP.div`
  margin-bottom: -6px;
  ${e=>{let{$padding:a}=e;return a&&r.iv`
      padding: var(--size-spacing-04);
    `}};
`;const g=function(e){let{children:a,minHeight:t,url:r,bodyPadding:g,overflowVisible:k}=e;return o.createElement(n.Z,null,(()=>o.createElement(s,{style:{minHeight:t},$overflowVisible:k},o.createElement(i,null,o.createElement(d,null,o.createElement(c,{style:{background:"#f25f58"}}),o.createElement(c,{style:{background:"#fbbe3c"}}),o.createElement(c,{style:{background:"#58cb42"}})),o.createElement(l,null,r),o.createElement(m,null,o.createElement("div",null,o.createElement(p,null),o.createElement(p,null),o.createElement(p,null)))),o.createElement(u,{$padding:!!g},a))))}},88401:(e,a,t)=>{t.d(a,{Z:()=>i});var o=t(25773),r=t(27378),n=t(81884),s=t(59536);function i(e){let{children:a,...t}=e;return r.createElement(s.Z,(0,o.Z)({as:n.Z},t),a)}},33099:(e,a,t)=>{t.d(a,{Z:()=>n});var o=t(27378),r=t(76457);function n(e){let{children:a,fallback:t}=e;return(0,r.Z)()?o.createElement(o.Fragment,null,a?.()):t??null}},79674:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var o=t(25773),r=(t(27378),t(35318)),n=t(83789),s=t(67994),i=t(88401);const d={title:"Carregamento",description:"Esse padr\xe3o deve ser usado sempre que informa\xe7\xf5es ou a\xe7\xf5es do sistema tiverem um tempo de carregamento ou execu\xe7\xe3o indeterminado."},l="Carregamento",m={unversionedId:"patterns/loading",id:"patterns/loading",title:"Carregamento",description:"Esse padr\xe3o deve ser usado sempre que informa\xe7\xf5es ou a\xe7\xf5es do sistema tiverem um tempo de carregamento ou execu\xe7\xe3o indeterminado.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/patterns/loading.md",sourceDirName:"patterns",slug:"/patterns/loading",permalink:"/tangram-rebranding/docs/patterns/loading",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/patterns/loading.md",tags:[],version:"current",frontMatter:{title:"Carregamento",description:"Esse padr\xe3o deve ser usado sempre que informa\xe7\xf5es ou a\xe7\xf5es do sistema tiverem um tempo de carregamento ou execu\xe7\xe3o indeterminado."},sidebar:"mySidebar",previous:{title:"Busca",permalink:"/tangram-rebranding/docs/patterns/search"},next:{title:"Empty State",permalink:"/tangram-rebranding/docs/patterns/emptystate"}},c={},p=[{value:"Spinner",id:"spinner",level:2},{value:"Skeleton",id:"skeleton",level:2},{value:"Carregamento infinito",id:"infine-loading",level:2},{value:"Carregamento em bot\xf5es",id:"loading-button",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p};function g(e){let{components:a,...d}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,d,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loading"},"Carregamento"),(0,r.kt)("p",null,"Esse padr\xe3o deve ser usado sempre que informa\xe7\xf5es ou a\xe7\xf5es do sistema tiverem um tempo de carregamento ou execu\xe7\xe3o indeterminado. Assim, fica mais f\xe1cil a pessoa usu\xe1ria entender o que est\xe1 acontecendo e evita que ela desista antes de concluir a a\xe7\xe3o. Exemplos de carregamento:"),(0,r.kt)("h2",{id:"spinner"},"Spinner"),(0,r.kt)("p",null,"N\xe3o informa a evolu\xe7\xe3o no processo ou tempo de carregamento, por isso deve ser usado quando o tempo de carregamento \xe9 indeterminado."),(0,r.kt)("p",null,"Para mais detalhes acesse a documenta\xe7\xe3o do ",(0,r.kt)(i.Z,{href:"../../../docs/components/spinner",mdxType:"Link"},"Spinner"),"."),(0,r.kt)(n.Z,{mdxType:"BrowserWindow"},(0,r.kt)("img",{src:t(66981).Z,alt:"Aplica\xe7\xe3o de carregamento do Spinner em uma tela"})),(0,r.kt)("p",null,"Pode ser usado dentro de componentes ou estruturas menores, como inputs, campos de busca, dentro de listas e tabelas, e ainda junto a outros componentes, como o bot\xe3o, por exemplo."),(0,r.kt)(n.Z,{mdxType:"BrowserWindow"},(0,r.kt)("img",{src:t(72582).Z,alt:"Aplica\xe7\xe3o de carregamento do Spinner em um campo de Input"})),(0,r.kt)("h2",{id:"skeleton"},"Skeleton"),(0,r.kt)("p",null,"Skeletons s\xe3o vers\xf5es simplificadas de componentes e estruturas de uma p\xe1gina, que aparecem antes das informa\xe7\xf5es serem carregadas. Substitui p\xe1ginas vazias e melhoram a percep\xe7\xe3o do tempo durante o carregamento."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"N\xe3o \xe9 necess\xe1rio se apegar em todos os detalhes"),", j\xe1 que o ",(0,r.kt)("inlineCode",{parentName:"p"},"Skeleton")," tem movimento."),(0,r.kt)("p",null,"Deve formar algo pr\xf3ximo da estrutura final, usando poucos elementos para deixar a p\xe1gina limpa e agrad\xe1vel. Use quando v\xe1rios elementos precisam ser carregados simultaneamente."),(0,r.kt)("p",null,"Para mais detalhes acesse a documenta\xe7\xe3o do ",(0,r.kt)(i.Z,{href:"../../../docs/components/skeleton",mdxType:"Link"},"Skeleton"),"."),(0,r.kt)(n.Z,{mdxType:"BrowserWindow"},(0,r.kt)("img",{src:t(21527).Z,alt:"Aplica\xe7\xe3o de carregamento do Skeleton em uma tela"})),(0,r.kt)("h2",{id:"infine-loading"},"Carregamento infinito"),(0,r.kt)("p",null,"Pode ser usado para substituir a pagina\xe7\xe3o e permitir a navega\xe7\xe3o explorat\xf3ria."),(0,r.kt)("p",null,"Esse tipo de navega\xe7\xe3o n\xe3o \xe9 recomendada para casos onde a pessoa usu\xe1ria precisa encontrar uma informa\xe7\xe3o espec\xedfica. Nesses casos, use a pagina\xe7\xe3o."),(0,r.kt)("p",null,'A cada clique a quantidade de resultados exibidos na listagem aumenta. Por exemplo, se eram exibidos 20 resultados, o bot\xe3o de "Carregar mais" vai exibir mais 20 outros resultados.'),(0,r.kt)(n.Z,{mdxType:"BrowserWindow"},(0,r.kt)("img",{src:t(79046).Z,alt:"Aplica\xe7\xe3o de carregamento infinito em uma lista de itens"})),(0,r.kt)("h2",{id:"loading-button"},"Carregamento em bot\xf5es"),(0,r.kt)("p",null,"Bot\xf5es tamb\xe9m podem ter um estado de carregamento espec\xedfico para a\xe7\xf5es que tomam algum tempo para serem processadas."),(0,r.kt)(n.Z,{mdxType:"BrowserWindow"},(0,r.kt)("img",{src:t(86534).Z,alt:"Aplica\xe7\xe3o de carregamento em um bot\xe3o"})),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(s.Z,{mdxType:"FeedbackBlock"}))}g.isMDXComponent=!0},86534:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/button-loading-pt-br-003b5c0ea7770dc09edca29638607657.png"},79046:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/infinite-loading-pt-br-7a23322dba903656283f87c166606afc.png"},72582:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/loading-field-pt-br-e61949962e4599c23c55fc4a7cd5994a.png"},21527:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/skeleton-pt-br-f3ff75686bc98c56a4d4a32a65da5824.png"},66981:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/spinner-screen-pt-br-5241c3b2f5e544705ba1ce5c699c4aee.png"}}]);