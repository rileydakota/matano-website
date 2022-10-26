"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[7003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),k=r,g=c["".concat(i,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"Zeek"},o=void 0,s={unversionedId:"log-sources/managed-log-sources/zeek",id:"log-sources/managed-log-sources/zeek",title:"Zeek",description:"The Zeek Matano managed log source lets you ingest your Zeek logs directly into Matano.",source:"@site/docs/log-sources/managed-log-sources/zeek.md",sourceDirName:"log-sources/managed-log-sources",slug:"/log-sources/managed-log-sources/zeek",permalink:"/docs/log-sources/managed-log-sources/zeek",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/zeek.md",tags:[],version:"current",frontMatter:{title:"Zeek"},sidebar:"tutorialSidebar",previous:{title:"CloudTrail",permalink:"/docs/log-sources/managed-log-sources/cloudtrail"},next:{title:"Querying tables",permalink:"/docs/tables/querying"}},i={},u=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Schema",id:"schema",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Zeek Matano managed log source lets you ingest your Zeek logs directly into Matano."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Use the managed log source by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,r.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"ZEEK"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'name: "zeek"\n\nmanaged:\n  type: "ZEEK"\n')),(0,r.kt)("p",null,"Then create tables for each of the Zeek logs you want to ingest. For example, if you want to ingest Zeek DNS and HTTP logs, create table files like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# log_sources/zeek/tables/dns.yml\nname: "dns"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# log_sources/zeek/tables/http.yml\nname: "http"\n')),(0,r.kt)("p",null,"For a complete reference on configuring log sources, including extending the table schema, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/configuration"},(0,r.kt)("em",{parentName:"a"},"Log source configuration")),"."),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"The Zeek managed log source supports the following tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"capture_loss"),(0,r.kt)("li",{parentName:"ul"},"connection"),(0,r.kt)("li",{parentName:"ul"},"dce_rpc"),(0,r.kt)("li",{parentName:"ul"},"dhcp"),(0,r.kt)("li",{parentName:"ul"},"dnp3"),(0,r.kt)("li",{parentName:"ul"},"dns"),(0,r.kt)("li",{parentName:"ul"},"dpd"),(0,r.kt)("li",{parentName:"ul"},"files"),(0,r.kt)("li",{parentName:"ul"},"ftp"),(0,r.kt)("li",{parentName:"ul"},"http"),(0,r.kt)("li",{parentName:"ul"},"intel"),(0,r.kt)("li",{parentName:"ul"},"irc"),(0,r.kt)("li",{parentName:"ul"},"kerberos"),(0,r.kt)("li",{parentName:"ul"},"known_certs"),(0,r.kt)("li",{parentName:"ul"},"known_hosts"),(0,r.kt)("li",{parentName:"ul"},"known_services"),(0,r.kt)("li",{parentName:"ul"},"modbus"),(0,r.kt)("li",{parentName:"ul"},"mysql"),(0,r.kt)("li",{parentName:"ul"},"notice"),(0,r.kt)("li",{parentName:"ul"},"ntlm"),(0,r.kt)("li",{parentName:"ul"},"ntp"),(0,r.kt)("li",{parentName:"ul"},"ocsp"),(0,r.kt)("li",{parentName:"ul"},"pe"),(0,r.kt)("li",{parentName:"ul"},"radius"),(0,r.kt)("li",{parentName:"ul"},"rdp"),(0,r.kt)("li",{parentName:"ul"},"rfb"),(0,r.kt)("li",{parentName:"ul"},"signature"),(0,r.kt)("li",{parentName:"ul"},"sip"),(0,r.kt)("li",{parentName:"ul"},"smb_cmd"),(0,r.kt)("li",{parentName:"ul"},"smb_files"),(0,r.kt)("li",{parentName:"ul"},"smb_mapping"),(0,r.kt)("li",{parentName:"ul"},"smtp"),(0,r.kt)("li",{parentName:"ul"},"snmp"),(0,r.kt)("li",{parentName:"ul"},"socks"),(0,r.kt)("li",{parentName:"ul"},"software"),(0,r.kt)("li",{parentName:"ul"},"ssh"),(0,r.kt)("li",{parentName:"ul"},"ssl"),(0,r.kt)("li",{parentName:"ul"},"stats"),(0,r.kt)("li",{parentName:"ul"},"syslog"),(0,r.kt)("li",{parentName:"ul"},"traceroute"),(0,r.kt)("li",{parentName:"ul"},"tunnel"),(0,r.kt)("li",{parentName:"ul"},"weird"),(0,r.kt)("li",{parentName:"ul"},"x509")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Zeek data is normalized to ECS fields. You can view the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/zeek/log_source.yml"},"complete mappings")," to see the full schemas."))}m.isMDXComponent=!0}}]);