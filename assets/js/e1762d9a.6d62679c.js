"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[7549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,m=d["".concat(u,".").concat(p)]||d[p]||g[p]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"GitHub Audit logs",sidebar_label:"GitHub",sidebar_position:4},i=void 0,s={unversionedId:"log-sources/managed-log-sources/github",id:"log-sources/managed-log-sources/github",title:"GitHub Audit logs",description:"The GitHub audit logs managed log source lets you ingest your GitHub audit logs configuration history data directly into Matano.",source:"@site/docs/log-sources/managed-log-sources/github.md",sourceDirName:"log-sources/managed-log-sources",slug:"/log-sources/managed-log-sources/github",permalink:"/docs/log-sources/managed-log-sources/github",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/github.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"GitHub Audit logs",sidebar_label:"GitHub",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AWS Route53",permalink:"/docs/log-sources/managed-log-sources/aws/route53-resolver-logs"},next:{title:"Crowdstrike",permalink:"/docs/log-sources/managed-log-sources/crowdstrike/"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"S3 (GitHub audit log streaming)",id:"s3-github-audit-log-streaming",level:3},{value:"Schema",id:"schema",level:2}],c={toc:l};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The GitHub audit logs managed log source lets you ingest your GitHub audit logs configuration history data directly into Matano."),(0,n.kt)("p",null,"The Github audit log tracks events triggered by activities that affect your GitHub organization. For a complete list of supported events, consult the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise"},"GitHub audit log documentation"),"."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Use the managed log source by specifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,n.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"GITHUB_AUDIT"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'name: "github_audit"\n\nmanaged:\n  type: "GITHUB_AUDIT"\n')),(0,n.kt)("h2",{id:"tables"},"Tables"),(0,n.kt)("p",null,"The GitHub audit logs history managed log source supports a single table containing GitHub audit logs configuration history data."),(0,n.kt)("h2",{id:"ingest"},"Ingest"),(0,n.kt)("h3",{id:"s3-github-audit-log-streaming"},"S3 (GitHub audit log streaming)"),(0,n.kt)("p",null,"Matano supports ingestion using S3. You can use GitHub's audit log streaming feature to deliver GitHub audit logs to an S3 bucket. Consult the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#setting-up-streaming-to-amazon-s3"},"GitHub documentation")," for more information."),(0,n.kt)("h2",{id:"schema"},"Schema"),(0,n.kt)("p",null,"GitHub audit log data is normalized to ECS fields. Custom fields are normalized into the ",(0,n.kt)("inlineCode",{parentName:"p"},"github")," field. You can view the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/github_audit/log_source.yml"},"complete mapping")," to see the full schema."))}g.isMDXComponent=!0}}]);