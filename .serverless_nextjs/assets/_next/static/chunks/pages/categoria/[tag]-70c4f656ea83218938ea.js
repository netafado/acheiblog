(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{4408:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return _},default:function(){return y}});var a=s(5893),n=s(7294),i=s(4164),r=s(1295),c=s(2315),l=s(3923),o=s(267),d=s(1252),u=s(9008),m=s(4284),x=s(7354);var g=function(e){var t=e.tag;return console.log(t),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"clear-filter post-single",children:(0,a.jsxs)("div",{className:"top-image position-relative",style:{backgroundImage:"url(".concat(t.feature_image,")")},children:[(0,a.jsx)("div",{className:"bg-image"}),(0,a.jsx)("div",{className:"align-items-center justify-content-center h-100 d-flex position-absolute w-100",children:(0,a.jsxs)("div",{className:"content-post",children:[(0,a.jsx)("p",{className:"text-center mb-0 text-white text-italic",children:"Categoria:"}),(0,a.jsx)("h1",{className:"text-center bold text-white",children:t.name}),(0,a.jsxs)("div",{className:"d-flex text-white justify-content-center",children:[t.authors&&t.authors.map((function(e){return(0,a.jsx)(m.Z,{author:e},e.id)})),(0,a.jsx)("p",{className:"text-center mb-0",children:(0,a.jsxs)(x.Z,{children:["Quantidade pe publica\xe7\xf5es: ",t.count.posts]})})]})]})})]})})})},p=s(628),h=s(82),j=s(8595),f=s(6941),v=s(1121),N=function(e){var t=e.children;return(0,a.jsx)(j.Z,{className:"container",style:{marginTop:-30,zIndex:9,position:"relative"},children:(0,a.jsx)(o.Z,{className:"justify-content-center",children:(0,a.jsx)(d.Z,{sm:"12",md:"10",children:(0,a.jsx)(f.Z,{children:(0,a.jsx)(v.Z,{children:t})})})})})},b=(s(1533),s(1163));var _=!0,y=function(e){var t=e.tag,s=e.posts,m=(0,b.useRouter)();return n.useEffect((function(){(0,r.pd)()}),[]),m.isFallback?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(u.default,{children:(0,a.jsx)(p.Z,{title:t.name,og_image:t.og_image,description:t.description,feature_image:t.feature_image})}),(0,a.jsx)(c.Z,{loading:!1}),(0,a.jsx)(g,{tag:t}),(0,a.jsxs)(N,{children:[(0,a.jsx)(l.Z,{children:(0,a.jsx)("p",{children:t.description})}),(0,a.jsx)(o.Z,{children:s.map((function(e){return(0,a.jsx)(d.Z,{sm:"6",lg:"12",className:"post",children:(0,a.jsx)(h.Z,{post:e})},e.id)}))})]})]})}},628:function(e,t,s){"use strict";var a=s(5893);t.Z=function(e){var t=e.og_title,s=e.url,n=e.title,i=e.og_description,r=e.description,c=e.og_image,l=e.feature_image;return(0,a.jsxs)(a.Fragment,{children:[s?(0,a.jsx)("meta",{property:"og:url",content:"".concat(s)}):null,(0,a.jsx)("meta",{property:"og:type",content:"company"}),(0,a.jsx)("meta",{property:"og:title",content:t||n}),(0,a.jsx)("meta",{property:"og:description",content:i||r}),(0,a.jsx)("meta",{property:"og:image",content:c||l}),(0,a.jsx)("meta",{name:"description",content:r}),(0,a.jsx)("title",{children:n})]})}},82:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var a=s(5893),n=s(4284),i=(s(5675),s(1664)),r=s(5552),c=s(7354),l=function(e){var t=e.tags;return t?(0,a.jsx)("ul",{className:"list-inline overImage",children:(0,a.jsx)("li",{className:"list-inline-item me-3",children:t&&t.map((function(e,t){return(0,a.jsx)(i.default,{passHref:!0,href:"/categoria/".concat(e.slug),children:(0,a.jsx)(c.Z,{color:"primary",className:"ml-1",children:e.name},"tag-".concat(t))},"tag-".concat(t))}))})}):null},o=function(e){var t=e.post,s=new Intl.DateTimeFormat("pt",{year:"numeric",month:"long",day:"numeric"}).format(new Date(t.published_at));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"title",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"bold mb-0 text-truncate",children:(0,a.jsx)(i.default,{href:"/".concat(t.slug),children:t.title})}),(0,a.jsx)(r.Z,{className:"text-muted",children:s})]})}),(0,a.jsxs)("div",{className:"position-relative mb-3 imageBgContainer",children:[(0,a.jsx)("div",{className:"bg-image"}),(0,a.jsx)("div",{className:"imageBg",style:{backgroundImage:"url(".concat(t.feature_image,")")}}),t.feature_image&&(0,a.jsx)("div",{className:"w-100 position-relative"}),(0,a.jsx)("div",{className:"author-wrapper",children:t.authors.map((function(e){return(0,a.jsx)(n.Z,{author:e},e.id)}))}),(0,a.jsx)(l,{tags:t.tags})]}),(0,a.jsx)("p",{className:"post-text text-black-50",children:t.custom_excerpt}),(0,a.jsx)("div",{children:(0,a.jsx)(i.default,{href:"/".concat(t.slug),children:(0,a.jsxs)("a",{className:"btn btn-round text-center btn-primary",children:["Saiba mais ",(0,a.jsx)("i",{className:"mdi mdi-arrow-right"})]})})}),(0,a.jsx)("hr",{})]})}},1295:function(e,t,s){"use strict";s.d(t,{pd:function(){return a}});var a=function(){return document.body.classList.add("index-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("index-page"),document.body.classList.remove("sidebar-collapse")}}},9954:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categoria/[tag]",function(){return s(4408)}])},1163:function(e,t,s){e.exports=s(4651)},3923:function(e,t,s){"use strict";var a=s(2122),n=s(9756),i=s(7294),r=s(5697),c=s.n(r),l=s(4184),o=s.n(l),d=s(9123),u={tag:d.iC,listTag:d.iC,className:c().string,listClassName:c().string,cssModule:c().object,children:c().node,"aria-label":c().string},m=function(e){var t=e.className,s=e.listClassName,r=e.cssModule,c=e.children,l=e.tag,u=e.listTag,m=e["aria-label"],x=(0,n.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=(0,d.mx)(o()(t),r),p=(0,d.mx)(o()("breadcrumb",s),r);return i.createElement(l,(0,a.Z)({},x,{className:g,"aria-label":m}),i.createElement(u,{className:p},c))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.Z=m}},function(e){e.O(0,[774,296,431,793,989,888,179],(function(){return t=9954,e(e.s=t);var t}));var t=e.O();_N_E=t}]);