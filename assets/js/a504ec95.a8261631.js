"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[1204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},65751:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Managed CloudTrail and Zeek support",authors:"samrose",keywords:["cloudtrail","aws","zeek","big data"],image:"./sg.png"},l=void 0,s={permalink:"/blog/2022/10/26/zeek-cloudtrail-support",editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/blog/2022-10-26-zeek-cloudtrail-support/index.md",source:"@site/blog/2022-10-26-zeek-cloudtrail-support/index.md",title:"Managed CloudTrail and Zeek support",description:"We're adding support for the first two managed log sources to Matano: AWS CloudTrail and Zeek. Now you can analyze your AWS events and network traffic in Matano without having to define any schemas or parsers.",date:"2022-10-26T00:00:00.000Z",formattedDate:"October 26, 2022",tags:[],readingTime:3.27,hasTruncateMarker:!0,authors:[{name:"Samrose Ahmed",email:"samrose@matano.dev",imageURL:"https://github.com/Samrose-Ahmed.png",key:"samrose"}],frontMatter:{title:"Managed CloudTrail and Zeek support",authors:"samrose",keywords:["cloudtrail","aws","zeek","big data"],image:"./sg.png"},prevItem:{title:"Automated Iceberg table maintenance",permalink:"/blog/2022/11/04/automated-iceberg-table-maintenance"},nextItem:{title:"Serverless asynchronous Iceberg data ingestion",permalink:"/blog/2022/09/13/ingesting-data-iceberg"}},i={image:a(18654).Z,authorsImageUrls:[void 0]},c=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"CloudTrail",id:"cloudtrail",level:3},{value:"Zeek",id:"zeek",level:3},{value:"Getting started",id:"getting-started",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@AhmedSamrose"})),(0,r.kt)("p",null,"We're adding support for the first two managed log sources to Matano: AWS CloudTrail and Zeek. Now you can analyze your AWS events and network traffic in Matano without having to define any schemas or parsers."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(18654).Z,width:"1200",height:"640"})),(0,r.kt)("h2",{id:"whats-new"},"What's new"),(0,r.kt)("p",null,"We want to make analyzing all your data in Matano as easy as possible. Managed log sources in Matano come with predefined parsers, schemas, and configurations that make ingesting logs as easy as a few lines of configuration. Now, we're launching managed log source support for two popular log sources: AWS CloudTrail and Zeek."),(0,r.kt)("p",null,"AWS CloudTrail lets you analyze all the API activity in your AWS accounts. Zeek is a popular open source framework for analyzing network traffic metadata that covers many different protocols and generates rich logs for downstream analysis."),(0,r.kt)("p",null,"As of today, Matano supports ingesting all your AWS CloudTrail data (both control plane and data plane) and the Zeek managed log source handles 43 different Zeek logs."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("h3",{id:"cloudtrail"},"CloudTrail"),(0,r.kt)("p",null,"Let's walk through how to ingest CloudTrail logs into Matano. Assume we have a trail already set up delivering CloudTrail logs to an S3 bucket. We can simply point Matano at that bucket and start ingesting logs, with a simple configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# log_source.yml\nname: aws_cloudtrail\n\nmanaged:\n  type: "AWS_CLOUDTRAIL"\n\ningest:\n  s3_source:\n    bucket_name: "my-bucket"\n    key_prefix: "my/key/prefix"\n')),(0,r.kt)("p",null,"Deploying Matano with this configuration will create a Matano table named ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_cloudtrail")," that you can query and write realtime detections on."),(0,r.kt)("p",null,"The schema is fully normalized to ECS so we easily do queries like searching on related ips or checking if an event is a failure, without getting into CloudTrail specific fields."),(0,r.kt)("p",null,"Here's an example Athena query where we check for the latest events with an access denied error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select event.action, event.provider,\n  aws.cloudtrail.error_code, aws.cloudtrail.error_message,\n  source.ip\nfrom matano.aws_cloudtrail\nwhere ts > current_timestamp - interval '7' day\nand aws.cloudtrail.error_code = 'AccessDenied'\n")),(0,r.kt)("p",null,"We can also write Python detections that will run on realtime on our CloudTrail events. Here is an example that detects a failed attempt to export an EC2 volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def detect(record):\n  return (\n    record.get("event", {}).get("provider") == "ec2.amazonaws.com"\n    and record.get("event", {}).get("action") == "CreateInstanceExportTask"\n    and event.get("outcome", {}) == "failure"\n  )\n')),(0,r.kt)("h3",{id:"zeek"},"Zeek"),(0,r.kt)("p",null,"Let's also see how we can ingest Zeek logs into Matano. Say we are ingesting Zeek DNS log files from an S3 bucket. We would create a log source configuration like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# log_source.yml\nname: zeek\n\nmanaged:\n  type: "ZEEK"\n\ningest:\n  s3_source:\n    bucket_name: "my-bucket"\n    key_prefix: "my/key/prefix"\n')),(0,r.kt)("p",null,"We then create a table configuration table to create a Zeek DNS file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"# tables/dns.yml\nname: dns\n")),(0,r.kt)("p",null,"If we want to ingest other Zeek logs, its as simple as adding a table file. For example, if we want to also ingest Zeek HTTP logs, we can add a file like so. We can also extend the schema and add additional fields if we need."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"# tables/http.yml\nname: http\n\nschema:\n  - name: zeek\n    type:\n      type: struct\n      fields:\n        - name: custom_field\n          type: string\n")),(0,r.kt)("p",null,"Once we deploy Matano, Apache Iceberg tables will be created for each Zeek log we specify. We can then query the tables using Athena. Here's a sample SQL query looking at on Zeek DNS data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  answer.data as ans,\n  avg(answer.ttl) as ttl\nFROM\n  matano.zeek_dns\n  cross join unnest(dns.answers) as t(answer)\nGROUP BY\n  answer.data\nLIMIT 5;\n")),(0,r.kt)("p",null,"We can also write realtime detections on our Zeek logs. Here's a sample detection that detects when a Windows service has been changed or started with svcctl remotely:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'IP_ALLOWLIST = [\n  "229.292.0.0",\n]\n\ndef detect(record):\n  return (\n    record.deepget("zeek.dce_rpc.endpoint") == "svcctl"\n    and (\n        record.deepget("zeek.dce_rpc.operation") in (\n            "ChangeServiceConfigW",\n            "StartServiceA"\n        )\n    )\n    and record.deepget("source.ip") not in IP_ALLOWLIST\n  )\n')),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"You can start using the CloudTrail and Zeek managed log sources today. Follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},"steps")," to get started and take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/managed-log-sources/cloudtrail"},"CloudTrail")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/managed-log-sources/cloudtrail"},"Zeek")," documentation."))}u.isMDXComponent=!0},18654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sg-1d720a679c6ba9177cb503caf4677fa5.png"}}]);