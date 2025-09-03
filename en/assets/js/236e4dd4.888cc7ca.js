"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3851],{38e3:(e,t,n)=>{n.d(t,{D:()=>h,Z:()=>d});var a=n(25773),i=n(27378),r=n(67468),o=n(33099);const s=r.ZP.div`
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
`;const d=function(e){let{children:t,columns:n=1,...r}=e;return i.createElement(o.Z,null,(()=>i.createElement(s,(0,a.Z)({$columns:n},r),t)))};var l=n(74904);const c=(0,r.ZP)(l.Z)`
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
`;const h=function(e){let{children:t,featured:n=!1,centered:a=!1,className:r}=e;return i.createElement(c,{$featured:n,$centered:a,className:r},t)}},88401:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(25773),i=n(27378),r=n(81884),o=n(59536);function s(e){let{children:t,...n}=e;return i.createElement(o.Z,(0,a.Z)({as:r.Z},n),t)}},21557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>h,toc:()=>m});var a=n(25773),i=(n(27378),n(35318)),r=n(77515),o=n(38e3),s=n(67994),d=n(88401);const l={title:"Sidebar",description:"Sidebar is a fixed area on the left side of the screen, with a height that follows the height of the screen and that has independent scrolling of the page."},c=void 0,h={unversionedId:"components/sidebar",id:"components/sidebar",title:"Sidebar",description:"Sidebar is a fixed area on the left side of the screen, with a height that follows the height of the screen and that has independent scrolling of the page.",source:"@site/docs/components/sidebar.md",sourceDirName:"components",slug:"/components/sidebar",permalink:"/tangram-rebranding/en/docs/components/sidebar",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/sidebar.md",tags:[],version:"current",frontMatter:{title:"Sidebar",description:"Sidebar is a fixed area on the left side of the screen, with a height that follows the height of the screen and that has independent scrolling of the page."},sidebar:"mySidebar",previous:{title:"Overlay",permalink:"/tangram-rebranding/en/docs/components/overlay"},next:{title:"Skeleton",permalink:"/tangram-rebranding/en/docs/components/skeleton"}},p={},m=[{value:"Content area",id:"content-area",level:2},{value:"Vertical navigation",id:"vertical-navigation",level:2},{value:"Feedback",id:"feedback",level:2}],g={toc:m};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{current:"docs",name:"sidebar",mdxType:"ComponentTab"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sidebar")," is a fixed area on the left side of the screen, with a height that follows the height of the screen and that has independent scrolling of the page. ",(0,i.kt)("strong",{parentName:"p"},"Must always be used in conjunction with ",(0,i.kt)(d.Z,{href:"../../components/main",mdxType:"Link"},"Main"),".")),(0,i.kt)("h2",{id:"content-area"},"Content area"),(0,i.kt)("p",null,"It is 300px wide and the height is always equivalent to the browser height minus the ",(0,i.kt)("inlineCode",{parentName:"p"},"Navbar")," height."),(0,i.kt)("p",null,"When the total height of the inner elements is greater than the available height on the screen, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sidebar")," will be scrollable."),(0,i.kt)(o.Z,{mdxType:"CardGrid"},(0,i.kt)(o.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)("span",null,(0,i.kt)("img",{src:n(95569).Z,alt:"Sidebar dimentions"})))),(0,i.kt)("h2",{id:"vertical-navigation"},"Vertical navigation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sidebar")," should be used together with ",(0,i.kt)(d.Z,{href:"../../components/verticalnav",mdxType:"Link"},"VerticalNav")," to create navigation for a given application context."),(0,i.kt)(o.Z,{mdxType:"CardGrid"},(0,i.kt)(o.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)("span",null,(0,i.kt)("img",{src:n(10542).Z,alt:"Application examples with vertical navigation"})))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(s.Z,{mdxType:"FeedbackBlock"}))}u.isMDXComponent=!0},95569:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dimentions-c933d992b961c82262b3159fac300b03.png"},10542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/examples-4e2e8e8fc06321fe0abd9ad742f4fd9b.png"}}]);