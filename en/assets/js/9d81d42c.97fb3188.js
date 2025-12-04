"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8420],{83789:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(27378),a=n(67468),o=n(33099);const r=a.ZP.div`
  border: 1px solid var(--neutral-border);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--size-spacing-09);
  overflow: hidden;

  ${e=>{let{$overflowVisible:t}=e;return t&&a.iv`
      overflow: visible;
    `}}
`,s=a.ZP.div`
  align-items: center;
  background: var(--neutral-surface-low-emphasis);
  display: flex;
  padding: 0.5rem 1rem;
`,l=a.ZP.div`
  white-space: nowrap;
`,d=a.ZP.div`
  flex: 1 0;
  margin: 0 1rem 0 0.5rem;
  border-radius: 12.5px;
  background-color: #fff;
  color: #666;
  padding: 5px 15px;
  font: 400 13px Arial;
  user-select: none;
`,p=a.ZP.div`
  margin-left: auto;
`,c=a.ZP.span`
  margin-right: 6px;
  margin-top: 4px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`,m=a.ZP.span`
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
`,u=a.ZP.div`
  margin-bottom: -6px;
  ${e=>{let{$padding:t}=e;return t&&a.iv`
      padding: var(--size-spacing-04);
    `}};
`;const g=function(e){let{children:t,minHeight:n,url:a,bodyPadding:g,overflowVisible:h}=e;return i.createElement(o.Z,null,(()=>i.createElement(r,{style:{minHeight:n},$overflowVisible:h},i.createElement(s,null,i.createElement(l,null,i.createElement(c,{style:{background:"#f25f58"}}),i.createElement(c,{style:{background:"#fbbe3c"}}),i.createElement(c,{style:{background:"#58cb42"}})),i.createElement(d,null,a),i.createElement(p,null,i.createElement("div",null,i.createElement(m,null),i.createElement(m,null),i.createElement(m,null)))),i.createElement(u,{$padding:!!g},t))))}},88401:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(25773),a=n(27378),o=n(81884),r=n(59536);function s(e){let{children:t,...n}=e;return a.createElement(r.Z,(0,i.Z)({as:o.Z},n),t)}},33099:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(27378),a=n(76457);function o(e){let{children:t,fallback:n}=e;return(0,a.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},18676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var i=n(25773),a=(n(27378),n(35318)),o=n(83789),r=n(67994),s=n(88401);const l={title:"Loading",description:"This pattern should be used whenever information or system actions have an indeterminate loading or execution time."},d="Loading",p={unversionedId:"patterns/loading",id:"patterns/loading",title:"Loading",description:"This pattern should be used whenever information or system actions have an indeterminate loading or execution time.",source:"@site/docs/patterns/loading.md",sourceDirName:"patterns",slug:"/patterns/loading",permalink:"/tangram-rebranding/en/docs/patterns/loading",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/patterns/loading.md",tags:[],version:"current",frontMatter:{title:"Loading",description:"This pattern should be used whenever information or system actions have an indeterminate loading or execution time."},sidebar:"mySidebar",previous:{title:"Search",permalink:"/tangram-rebranding/en/docs/patterns/search"},next:{title:"Empty State",permalink:"/tangram-rebranding/en/docs/patterns/emptystate"}},c={},m=[{value:"Spinner",id:"spinner",level:2},{value:"Skeleton",id:"skeleton",level:2},{value:"Infinite loading",id:"infine-loading",level:2},{value:"Button loading",id:"loading-button",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:m};function g(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loading"},"Loading"),(0,a.kt)("p",null,"This pattern should be used whenever information or system actions have an indeterminate loading or execution time. This makes it easier for the user to understand what is happening and prevents them from giving up before completing the action. Loading examples:"),(0,a.kt)("h2",{id:"spinner"},"Spinner"),(0,a.kt)("p",null,"It does not report progress in the process or loading time, so it should be used when loading time is indeterminate."),(0,a.kt)("p",null,"For more details see the ",(0,a.kt)(s.Z,{href:"../../../docs/components/spinner",mdxType:"Link"},"Spinner")," documentation."),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("img",{src:n(66981).Z,alt:"Spinner loading application on a screen"})),(0,a.kt)("p",null,"It can be used within smaller components or structures, such as inputs, search fields, within lists and tables, and even with other components, such as the button, for example."),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("img",{src:n(72582).Z,alt:"Spinner loading application in an Input field"})),(0,a.kt)("h2",{id:"skeleton"},"Skeleton"),(0,a.kt)("p",null,"Skeletons are simplified versions of a page's components and structures, which appear before information is loaded. Replaces empty pages and improves perception of time during loading."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It's not necessary to get caught up in every detail"),", as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Skeleton")," has movement."),(0,a.kt)("p",null,"It should form something close to the final structure, using few elements to make the page clean and pleasant. Use when multiple elements need to be loaded simultaneously."),(0,a.kt)("p",null,"For more details see the ",(0,a.kt)(s.Z,{href:"../../../docs/components/skeleton",mdxType:"Link"},"Skeleton")," documentation."),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("img",{src:n(21527).Z,alt:"Skeleton loading application in one screen"})),(0,a.kt)("h2",{id:"infine-loading"},"Infinite loading"),(0,a.kt)("p",null,"Can be used to replace pagination and allow exploratory navigation."),(0,a.kt)("p",null,"This type of navigation is not recommended for cases where the user needs to find specific information. In these cases, use pagination."),(0,a.kt)("p",null,'With each click, the number of results displayed in the listing increases. For example, if 20 results were displayed, the "Load More" button will display 20 more results.'),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("img",{src:n(79046).Z,alt:"Infinite loading application on a list of items"})),(0,a.kt)("h2",{id:"loading-button"},"Button loading"),(0,a.kt)("p",null,"Buttons can also have a specific loading state for actions that take some time to process."),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("img",{src:n(86534).Z,alt:"Button loading application"})),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)(r.Z,{mdxType:"FeedbackBlock"}))}g.isMDXComponent=!0},86534:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/button-loading-pt-br-003b5c0ea7770dc09edca29638607657.png"},79046:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/infinite-loading-pt-br-7a23322dba903656283f87c166606afc.png"},72582:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/loading-field-pt-br-e61949962e4599c23c55fc4a7cd5994a.png"},21527:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/skeleton-pt-br-f3ff75686bc98c56a4d4a32a65da5824.png"},66981:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spinner-screen-pt-br-5241c3b2f5e544705ba1ce5c699c4aee.png"}}]);