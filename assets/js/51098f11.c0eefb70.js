"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[8681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),o=r(86010),a=r(53438),i=r(39960),c=r(13919),s=r(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",u),title:i},i))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==o?void 0:o.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(w,{item:e})))))}},77427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const i={title:"Crowdstrike",sidebar_position:12},c=void 0,s={unversionedId:"log-sources/managed-log-sources/crowdstrike/index",id:"log-sources/managed-log-sources/crowdstrike/index",title:"Crowdstrike",description:"This integration is for CrowdStrike products. It includes the",source:"@site/docs/log-sources/managed-log-sources/crowdstrike/index.mdx",sourceDirName:"log-sources/managed-log-sources/crowdstrike",slug:"/log-sources/managed-log-sources/crowdstrike/",permalink:"/docs/log-sources/managed-log-sources/crowdstrike/",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/crowdstrike/index.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Crowdstrike",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/log-sources/managed-log-sources/github"},next:{title:"Falcon",permalink:"/docs/log-sources/managed-log-sources/crowdstrike/falcon"}},l={},d=[{value:"Supported managed Crowdstrike log sources",id:"supported-managed-crowdstrike-log-sources",level:2}],u={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This integration is for ",(0,o.kt)("a",{parentName:"p",href:"https://www.crowdstrike.com/resources/?cs_query=type=5"},"CrowdStrike")," products. It includes the\nfollowing datasets for receiving logs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"falcon")," dataset: consists of endpoint data and Falcon platform audit data forwarded from ",(0,o.kt)("a",{parentName:"li",href:"https://www.crowdstrike.com/blog/tech-center/integrate-with-your-siem/"},"Falcon SIEM Connector"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"crowdstrike / fdr")," dataset: consists of logs forwarded using the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CrowdStrike/FDR"},"Falcon Data Replicator")," (data) & the enrichment tables that are synced through the replicator (e.g. aidmaster, userinfo, etc.) ")),(0,o.kt)("h2",{id:"supported-managed-crowdstrike-log-sources"},"Supported managed Crowdstrike log sources"),(0,o.kt)("p",null,"The following are currently supported Matano managed log sources for Crowdstrike. Click through to view specific documentation for each log source."),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);