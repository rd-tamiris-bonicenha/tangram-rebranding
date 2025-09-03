"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4380],{83789:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(27378),i=a(67468),n=a(33099);const s=i.ZP.div`
  border: 1px solid var(--neutral-border);
  border-top-left-radius: var(--border-radius-rounded);
  border-top-right-radius: var(--border-radius-rounded);
  margin-bottom: var(--size-spacing-09);
  overflow: hidden;

  ${e=>{let{$overflowVisible:t}=e;return t&&i.iv`
      overflow: visible;
    `}}
`,o=i.ZP.div`
  align-items: center;
  background: var(--neutral-surface-low-emphasis);
  display: flex;
  padding: 0.5rem 1rem;
`,l=i.ZP.div`
  white-space: nowrap;
`,d=i.ZP.div`
  flex: 1 0;
  margin: 0 1rem 0 0.5rem;
  border-radius: 12.5px;
  background-color: #fff;
  color: #666;
  padding: 5px 15px;
  font: 400 13px Arial;
  user-select: none;
`,c=i.ZP.div`
  margin-left: auto;
`,h=i.ZP.span`
  margin-right: 6px;
  margin-top: 4px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`,p=i.ZP.span`
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
`,m=i.ZP.div`
  margin-bottom: -6px;
  ${e=>{let{$padding:t}=e;return t&&i.iv`
      padding: var(--size-spacing-04);
    `}};
`;const u=function(e){let{children:t,minHeight:a,url:i,bodyPadding:u,overflowVisible:g}=e;return r.createElement(n.Z,null,(()=>r.createElement(s,{style:{minHeight:a},$overflowVisible:g},r.createElement(o,null,r.createElement(l,null,r.createElement(h,{style:{background:"#f25f58"}}),r.createElement(h,{style:{background:"#fbbe3c"}}),r.createElement(h,{style:{background:"#58cb42"}})),r.createElement(d,null,i),r.createElement(c,null,r.createElement("div",null,r.createElement(p,null),r.createElement(p,null),r.createElement(p,null)))),r.createElement(m,{$padding:!!u},t))))}},88401:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(25773),i=a(27378),n=a(81884),s=a(59536);function o(e){let{children:t,...a}=e;return i.createElement(s.Z,(0,r.Z)({as:n.Z},a),t)}},90624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(25773),i=(a(27378),a(35318)),n=a(83789),s=a(67994),o=a(88401);const l={title:"Search",description:"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way."},d="Search",c={unversionedId:"patterns/search",id:"patterns/search",title:"Search",description:"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way.",source:"@site/docs/patterns/search.md",sourceDirName:"patterns",slug:"/patterns/search",permalink:"/tangram-rebranding/en/docs/patterns/search",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/patterns/search.md",tags:[],version:"current",frontMatter:{title:"Search",description:"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way."},sidebar:"mySidebar",previous:{title:"TextArea",permalink:"/tangram-rebranding/en/docs/components/textarea"},next:{title:"Loading",permalink:"/tangram-rebranding/en/docs/patterns/loading"}},h={},p=[{value:"Filter bar",id:"filter-bar",level:2},{value:"In real time",id:"real-time-search",level:2},{value:"Empty state",id:"empty-state",level:2},{value:"Terms highlight",id:"terms-highlight",level:2},{value:"Feedback",id:"feedback",level:2}],m={toc:p};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loading"},"Search"),(0,i.kt)("p",null,"Search pattern guides the assembly of behavior, combining a series of components, in a consistent and logical way."),(0,i.kt)("p",null,"For more details go to our component tab ",(0,i.kt)(o.Z,{href:"../../../code/components/search",mdxType:"Link"},"Search"),"."),(0,i.kt)("h2",{id:"filter-bar"},"Filter bar"),(0,i.kt)("p",null,"When displayed in the filter bar, the search field must always be positioned on the left."),(0,i.kt)("p",null,"For more details visit our ",(0,i.kt)(o.Z,{href:"../../../docs/patterns/filters",mdxType:"Link"},"Filter Pattern")," page."),(0,i.kt)(n.Z,{mdxType:"BrowserWindow"},(0,i.kt)("img",{src:a(55564).Z,alt:"Application of the search field in the filter bar"})),(0,i.kt)("h2",{id:"real-time-search"},"In real time"),(0,i.kt)("p",null,"This pattern does not need a click or key to perform the search. It is done as the term is typed."),(0,i.kt)("p",null,"In these cases, it is recommended to use skeletons in the structure that will display the results, thus keeping the user informed about the status of the system."),(0,i.kt)("p",null,"For more details visit our ",(0,i.kt)(o.Z,{href:"../../../docs/patterns/loading",mdxType:"Link"},"loading pattern")," page."),(0,i.kt)(n.Z,{mdxType:"BrowserWindow"},(0,i.kt)("img",{src:a(91925).Z,alt:"Search field application with real-time search"})),(0,i.kt)("h2",{id:"empty-state"},"Empty state"),(0,i.kt)("p",null,"If no results are found, it is recommended to use the ",(0,i.kt)(o.Z,{href:"../../../docs/components/emptystate",mdxType:"Link"},"EmptyState")," with an informative text and a button that allows you to perform an action to the moment."),(0,i.kt)(n.Z,{mdxType:"BrowserWindow"},(0,i.kt)("img",{src:a(21477).Z,alt:"Search without result"})),(0,i.kt)("h2",{id:"terms-highlight"},"Terms highlight"),(0,i.kt)("p",null,"To highlight the term typed in the search result, it is possible to add a selection style to all texts - or part of them - that match the term typed in the search field."),(0,i.kt)(n.Z,{mdxType:"BrowserWindow"},(0,i.kt)("img",{src:a(73473).Z,alt:"Search by highlighting the search term in the search result"})),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(s.Z,{mdxType:"FeedbackBlock"}))}u.isMDXComponent=!0},21477:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-empty-state-en-cfb81ab3873f97b73cbb11a82da71e84.png"},55564:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-filters-en-29a15e6316a0d871e7f1bdb1ed539993.png"},91925:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-real-time-en-55a715ca646e8ade9d00c13aa8b4d686.png"},73473:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-terms-highlight-en-74101cababc8f4aed6829ca9d4fd7376.png"}}]);