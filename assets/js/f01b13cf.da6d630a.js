"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[2889],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),d=n,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return o?a.createElement(f,s(s({ref:t},u),{},{components:o})):a.createElement(f,s({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},41042:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=o(87462),n=(o(67294),o(3905));const r={title:"Log source schema",sidebar_position:5},s=void 0,i={unversionedId:"log-sources/schema",id:"log-sources/schema",title:"Log source schema",description:"You define the shape of your log source's data by defining a schema.",source:"@site/docs/log-sources/schema.md",sourceDirName:"log-sources",slug:"/log-sources/schema",permalink:"/docs/log-sources/schema",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/schema.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Log source schema",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Log source configuration",permalink:"/docs/log-sources/configuration"},next:{title:"Managed Log sources",permalink:"/docs/log-sources/managed-log-sources/"}},c={},l=[{value:"Common schema",id:"common-schema",level:2},{value:"Using a Matano managed log source",id:"using-a-matano-managed-log-source",level:2},{value:"Defining a custom schema",id:"defining-a-custom-schema",level:2},{value:"Specifying ECS fields",id:"specifying-ecs-fields",level:2},{value:"Extending ECS with custom fields",id:"extending-ecs-with-custom-fields",level:2}],u={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You define the shape of your log source's data by defining a ",(0,n.kt)("em",{parentName:"p"},"schema"),"."),(0,n.kt)("h2",{id:"common-schema"},"Common schema"),(0,n.kt)("p",null,"By default, a log source will use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/ecs/current/ecs-reference.html"},(0,n.kt)("strong",{parentName:"a"},"Elastic Common Schema (ECS)")),". ECS is a popular format that defines a common set of fields to be used when storing log data."),(0,n.kt)("p",null,"Matano encourages you to normalize your log data to ECS, so you can best analyze, and correlate the data represented in your events."),(0,n.kt)("p",null,"Matano can ingest from sources that use already use ECS, like Beats processors, without requiring transformation. Otherwise, you can use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/log-sources/managed-log-sources/"},"pre-built Matano transformation")," to normalize data from a supported source to ECS or write your ",(0,n.kt)("a",{parentName:"p",href:"/docs/log-sources/transformation"},"own transformation")," to normalize log data."),(0,n.kt)("p",null,"Matano currently supports ECS version ",(0,n.kt)("strong",{parentName:"p"},"8.3.1"),"."),(0,n.kt)("h2",{id:"using-a-matano-managed-log-source"},"Using a Matano managed log source"),(0,n.kt)("p",null,"If your log source is supported by Matano, you should use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/log-sources/managed-log-sources/"},"Matano managed log source"),". Matano will take care of specifying the schema for your log source."),(0,n.kt)("h2",{id:"defining-a-custom-schema"},"Defining a custom schema"),(0,n.kt)("p",null,"If you aren't using a Matano ",(0,n.kt)("a",{parentName:"p",href:"/docs/log-sources/managed-log-sources/"},"managed log source"),", you must provide the schema for your log source."),(0,n.kt)("h2",{id:"specifying-ecs-fields"},"Specifying ECS fields"),(0,n.kt)("p",null,"You can specify the subset of ECS fields to include in your schema by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ecs_field_names")," key in your ",(0,n.kt)("inlineCode",{parentName:"p"},"log_source.yml")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'schema:\n  ecs_field_names: ["dns", "agent"]\n')),(0,n.kt)("h2",{id:"extending-ecs-with-custom-fields"},"Extending ECS with custom fields"),(0,n.kt)("p",null,"ECS is a permissive schema, that encourages you to add columns using custom field names for data that doesn't completely map to ECS."),(0,n.kt)("p",null,"To add custom fields to ECS for a Matano log source, you can define the fields in your ",(0,n.kt)("inlineCode",{parentName:"p"},"log_source.yml")," configuration file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'schema:\n  ecs_field_names: ["dns", "agent"]\n  fields:\n    - name: "my_additional_field"\n      type: "string"\n    - name: "additional_struct"\n      type:\n        type: "struct"\n        fields:\n          - name: "field_one"\n            type: "string"\n          - name: "field_two"\n            type: "int"\n')),(0,n.kt)("p",null,"These fields will be merged with ECS fields in the final log source schema."),(0,n.kt)("p",null,"The schema configuration follows the ",(0,n.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/spec/#schemas"},"Apache Iceberg schema format")," in JSON/YAML format. See a ",(0,n.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/spec/#schemas"},"complete specification here"),". You can omit id and required fields as Matano will automically populate them."))}m.isMDXComponent=!0}}]);