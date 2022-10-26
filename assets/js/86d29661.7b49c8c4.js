"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[2440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,m=p["".concat(d,".").concat(g)]||p[g]||s[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Configuring alerts",sidebar_position:1},o=void 0,l={unversionedId:"detections/alerting/configuring-alerts",id:"detections/alerting/configuring-alerts",title:"Configuring alerts",description:"Deduplicating alerts",source:"@site/docs/detections/alerting/configuring-alerts.md",sourceDirName:"detections/alerting",slug:"/detections/alerting/configuring-alerts",permalink:"/docs/detections/alerting/configuring-alerts",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/detections/alerting/configuring-alerts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuring alerts",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Realtime alerting",permalink:"/docs/detections/alerting/"},next:{title:"Working with alerts",permalink:"/docs/detections/alerting/working-with-alerts"}},d={},c=[{value:"Deduplicating alerts",id:"deduplicating-alerts",level:2},{value:"Dedupe string",id:"dedupe-string",level:3},{value:"Deduplication window",id:"deduplication-window",level:3},{value:"Alert threshold",id:"alert-threshold",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deduplicating-alerts"},"Deduplicating alerts"),(0,i.kt)("p",null,"Matano lets you deduplicate common alerts to reduce alert fatigue."),(0,i.kt)("h3",{id:"dedupe-string"},"Dedupe string"),(0,i.kt)("p",null,"You can return a ",(0,i.kt)("em",{parentName:"p"},"dedupe string")," from your detection. Rule matches with the same dedupe will be grouped together."),(0,i.kt)("p",null,"To return a dedupe string from your detection, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"dedupe")," python function and return the dedupe string. The ",(0,i.kt)("inlineCode",{parentName:"p"},"dedupe")," function will be passed the record being detected on, so you can dynamically create the dedupe string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def dedupe(record) -> str:\n    ...\n")),(0,i.kt)("h3",{id:"deduplication-window"},"Deduplication window"),(0,i.kt)("p",null,"You can use a deduplication window to add rule matches to an existing alert within a time duration. During this window, rule matches will not create new alerts but instead be appended to the existing alert for the detection (and dedupe)."),(0,i.kt)("p",null,"You can specify a max deduplication window of ",(0,i.kt)("strong",{parentName:"p"},"1 day (86400 seconds)"),"."),(0,i.kt)("p",null,"You can configure a deduplication window per detection by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"alert.deduplication_window")," key in your ",(0,i.kt)("inlineCode",{parentName:"p"},"detection.yml"),". Specify the value in ",(0,i.kt)("strong",{parentName:"p"},"seconds"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"alert:\n  deduplication_window: 21600\n")),(0,i.kt)("h2",{id:"alert-threshold"},"Alert threshold"),(0,i.kt)("p",null,"The alert threshold specifies how many rule matches are needed to create an alert. For example, if you set the alert threshold to 10, ten rule matches will be required within the deduplication window for an alert to be created."),(0,i.kt)("p",null,"You can configure an alert threshold per detection by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"alert.threshold")," key in your ",(0,i.kt)("inlineCode",{parentName:"p"},"detection.yml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"alert:\n  threshold: 10\n")))}s.isMDXComponent=!0}}]);