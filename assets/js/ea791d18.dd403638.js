"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[1626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:4,title:"Matano directory"},i=void 0,c={unversionedId:"matano-directory",id:"matano-directory",title:"Matano directory",description:"To specify configuration and data for Matano, you use a Matano directory. This directory has the following structure:",source:"@site/docs/matano-directory.md",sourceDirName:".",slug:"/matano-directory",permalink:"/docs/matano-directory",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/matano-directory.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Matano directory"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Log sources",permalink:"/docs/log-sources/"}},l={},s=[{value:"Creating",id:"creating",level:2},{value:"Contents",id:"contents",level:2},{value:"Matano configuration file (<code>matano.config.yml</code>)",id:"matano-configuration-file-matanoconfigyml",level:3},{value:"Matano context file (<code>matano.context.json</code>)",id:"matano-context-file-matanocontextjson",level:3},{value:"Log sources directory (<code>log_sources</code>)",id:"log-sources-directory-log_sources",level:3},{value:"Detections directory (<code>detections</code>)",id:"detections-directory-detections",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To specify configuration and data for Matano, you use a ",(0,r.kt)("em",{parentName:"p"},"Matano directory"),". This directory has the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-directory\n\u251c\u2500\u2500 log_sources/\n\u251c\u2500\u2500 detections/\n\u251c\u2500\u2500 matano.config.yml\n\u2514\u2500\u2500 matano.context.json\n")),(0,r.kt)("p",null,"You should persist this in a version control system like Git."),(0,r.kt)("h2",{id:"creating"},"Creating"),(0,r.kt)("p",null,"If are ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},"getting started"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"matano init")," command, which will take care of creating an initial directory for you, alongside initializing your AWS account and deploying Matano."),(0,r.kt)("p",null,"You can also use the standalone ",(0,r.kt)("inlineCode",{parentName:"p"},"matano generate:matano-dir")," command to generate an initial Matano directory."),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("h3",{id:"matano-configuration-file-matanoconfigyml"},"Matano configuration file (",(0,r.kt)("inlineCode",{parentName:"h3"},"matano.config.yml"),")"),(0,r.kt)("p",null,"Use this file to specify matano configuration."),(0,r.kt)("h3",{id:"matano-context-file-matanocontextjson"},"Matano context file (",(0,r.kt)("inlineCode",{parentName:"h3"},"matano.context.json"),")"),(0,r.kt)("p",null,"This file stores environment specific values for your Matano deployment (such as VPC details). Don't edit this file by hand, instead use the ",(0,r.kt)("inlineCode",{parentName:"p"},"matano refresh-context")," command to generate or update it."),(0,r.kt)("h3",{id:"log-sources-directory-log_sources"},"Log sources directory (",(0,r.kt)("inlineCode",{parentName:"h3"},"log_sources"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To learn more about configuring log sources, visit ",(0,r.kt)("a",{parentName:"strong",href:"/docs/log-sources/configuration"},(0,r.kt)("em",{parentName:"a"},"Log source configuration")),".")),(0,r.kt)("p",null,"The log sources directory contains definitions and configuration for each log source you ingest into Matano."),(0,r.kt)("p",null,"The directory has the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 log_sources\n\u2502   \u2514\u2500\u2500 first_log_source\n\u2502       \u2514\u2500\u2500 log_source.yml\n")),(0,r.kt)("h3",{id:"detections-directory-detections"},"Detections directory (",(0,r.kt)("inlineCode",{parentName:"h3"},"detections"),")"),(0,r.kt)("p",null,"The log sources directory contains definitions and configuration for each detection you create."),(0,r.kt)("p",null,"The directory has the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 detections\n\u2502   \u2514\u2500\u2500 first_detection\n\u2502       \u251c\u2500\u2500 detect.py\n\u2502       \u251c\u2500\u2500 requirements.txt\n\u2502       \u2514\u2500\u2500 detection.yml\n")))}u.isMDXComponent=!0}}]);