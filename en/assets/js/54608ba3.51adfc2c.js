"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4380],{83789:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(27378),n=a(67468),i=a(33099);const s=n.ZP.div`
  border: 1px solid var(--neutral-border);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--size-spacing-09);
  overflow: hidden;

  ${e=>{let{$overflowVisible:t}=e;return t&&n.iv`
      overflow: visible;
    `}}
`,l=n.ZP.div`
  align-items: center;
  background: var(--neutral-surface-low-emphasis);
  display: flex;
  padding: 0.5rem 1rem;
`,o=n.ZP.div`
  white-space: nowrap;
`,d=n.ZP.div`
  flex: 1 0;
  margin: 0 1rem 0 0.5rem;
  border-radius: 12.5px;
  background-color: #fff;
  color: #666;
  padding: 5px 15px;
  font: 400 13px Arial;
  user-select: none;
`,c=n.ZP.div`
  margin-left: auto;
`,h=n.ZP.span`
  margin-right: 6px;
  margin-top: 4px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`,m=n.ZP.span`
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
`,p=n.ZP.div`
  margin-bottom: -6px;
  ${e=>{let{$padding:t}=e;return t&&n.iv`
      padding: var(--size-spacing-04);
    `}};
`;const u=function(e){let{children:t,minHeight:a,url:n,bodyPadding:u,overflowVisible:g}=e;return r.createElement(i.Z,null,(()=>r.createElement(s,{style:{minHeight:a},$overflowVisible:g},r.createElement(l,null,r.createElement(o,null,r.createElement(h,{style:{background:"#f25f58"}}),r.createElement(h,{style:{background:"#fbbe3c"}}),r.createElement(h,{style:{background:"#58cb42"}})),r.createElement(d,null,n),r.createElement(c,null,r.createElement("div",null,r.createElement(m,null),r.createElement(m,null),r.createElement(m,null)))),r.createElement(p,{$padding:!!u},t))))}},88401:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(25773),n=a(27378),i=a(81884),s=a(59536);function l(e){let{children:t,...a}=e;return n.createElement(s.Z,(0,r.Z)({as:i.Z},a),t)}},33099:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(27378),n=a(76457);function i(e){let{children:t,fallback:a}=e;return(0,n.Z)()?r.createElement(r.Fragment,null,t?.()):a??null}},90624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=a(25773),n=(a(27378),a(35318)),i=a(83789),s=a(67994),l=a(88401);const o={title:"Search",description:"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way."},d="Search",c={unversionedId:"patterns/search",id:"patterns/search",title:"Search",description:"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way.",source:"@site/docs/patterns/search.md",sourceDirName:"patterns",slug:"/patterns/search",permalink:"/tangram-rebranding/en/docs/patterns/search",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/patterns/search.md",tags:[],version:"current",frontMatter:{title:"Search",description:"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way."},sidebar:"mySidebar",previous:{title:"TextArea",permalink:"/tangram-rebranding/en/docs/components/textarea"},next:{title:"Loading",permalink:"/tangram-rebranding/en/docs/patterns/loading"}},h={},m=[{value:"Filter bar",id:"filter-bar",level:2},{value:"In real time",id:"real-time-search",level:2},{value:"Empty state",id:"empty-state",level:2},{value:"Terms highlight",id:"terms-highlight",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loading"},"Search"),(0,n.kt)("p",null,"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way."),(0,n.kt)("p",null,"For more details go to our component tab ",(0,n.kt)(l.Z,{href:"../../../code/components/search",mdxType:"Link"},"Search"),"."),(0,n.kt)("h2",{id:"filter-bar"},"Filter bar"),(0,n.kt)("p",null,"When displayed in the filter bar, the search field must always be positioned on the left."),(0,n.kt)("p",null,"For more details visit our ",(0,n.kt)(l.Z,{href:"../../../docs/patterns/filters",mdxType:"Link"},"Filter Pattern")," page."),(0,n.kt)(i.Z,{mdxType:"BrowserWindow"},(0,n.kt)("img",{src:a(83475).Z,alt:"Application of the search field in the filter bar"})),(0,n.kt)("h2",{id:"real-time-search"},"In real time"),(0,n.kt)("p",null,"This pattern does not need a click or key to perform the search. It is done as the term is typed."),(0,n.kt)("p",null,"In these cases, it is recommended to use skeletons in the structure that will display the results, thus keeping the user informed about the status of the system."),(0,n.kt)("p",null,"For more details visit our ",(0,n.kt)(l.Z,{href:"../../../docs/patterns/loading",mdxType:"Link"},"loading pattern")," page."),(0,n.kt)(i.Z,{mdxType:"BrowserWindow"},(0,n.kt)("img",{src:a(61354).Z,alt:"Search field application with real-time search"})),(0,n.kt)("h2",{id:"empty-state"},"Empty state"),(0,n.kt)("p",null,"If no results are found, it is recommended to use the ",(0,n.kt)(l.Z,{href:"../../../docs/components/emptystate",mdxType:"Link"},"EmptyState")," with an informative text and a button that allows you to perform an action to the moment."),(0,n.kt)(i.Z,{mdxType:"BrowserWindow"},(0,n.kt)("img",{src:a(67192).Z,alt:"Search without result"})),(0,n.kt)("h2",{id:"terms-highlight"},"Terms highlight"),(0,n.kt)("p",null,"To highlight the term typed in the search result, it is possible to add a selection style to all texts - or part of them - that match the term typed in the search field."),(0,n.kt)(i.Z,{mdxType:"BrowserWindow"},(0,n.kt)("img",{src:a(28194).Z,alt:"Search by highlighting the search term in the search result"})),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)(s.Z,{mdxType:"FeedbackBlock"}))}u.isMDXComponent=!0},67192:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-empty-state-pt-br-1e4471de5abe3510c8b4ca32bad6841a.png"},83475:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-filters-pt-br-6fe0210a0d4c8a47b1af9606c6d2e006.png"},61354:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-real-time-pt-br-461b2255bf0a19f030dc77b0da18906b.png"},28194:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-terms-highlight-pt-br-8b99b696d773e04c3cdd65179fbdbf6d.png"}}]);