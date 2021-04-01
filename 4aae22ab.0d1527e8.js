(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(180)),c={id:"graphql-context-factory",title:"GraphQLContextFactory"},i={unversionedId:"server/graphql-context-factory",id:"server/graphql-context-factory",isDocsHomePage:!1,title:"GraphQLContextFactory",description:"If you are using graphql-kotlin-spring-server, see the Spring specific documentation.",source:"@site/docs/server/graphql-context-factory.md",slug:"/server/graphql-context-factory",permalink:"/graphql-kotlin/docs/server/graphql-context-factory",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/graphql-context-factory.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1617311694,sidebar:"docs",previous:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/server/graphql-request-parser"},next:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/server/graphql-request-handler"}},s=[{value:"Nullable Context",id:"nullable-context",children:[]},{value:"Suspendable Factory",id:"suspendable-factory",children:[]},{value:"Server-Specific Abstractions",id:"server-specific-abstractions",children:[]},{value:"HTTP Headers and Cookies",id:"http-headers-and-cookies",children:[]},{value:"Federated Tracing",id:"federated-tracing",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you are using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", see the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"},"Spring specific documentation"),"."))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," is a generic method for generating a ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContext")," for each request."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\ninterface GraphQLContextFactory<out Context : GraphQLContext, Request> {\n    suspend fun generateContext(request: Request): Context?\n}\n\n")),Object(o.b)("p",null,"Given the generic server request, the interface should create a ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContext")," class to be used for every new operation.\nThe context must implement the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContext")," interface from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),".\nSee ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},"execution context")," for more info on how the context can be used in the schema functions."),Object(o.b)("h2",{id:"nullable-context"},"Nullable Context"),Object(o.b)("p",null,"The factory may return ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if a context is not required for execution. This allows the library to have a default factory that just returns ",Object(o.b)("inlineCode",{parentName:"p"},"null"),".\nIf your custom factory never returns ",Object(o.b)("inlineCode",{parentName:"p"},"null"),", then there is no need to use nullable arguments.\nHowever, if your custom factory may return ",Object(o.b)("inlineCode",{parentName:"p"},"null"),", you must define the context argument as nullable in the schema functions or a runtime exception will be thrown."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"data class CustomContext(val value: String) : GraphQLContext\n\nclass CustomFactory : GraphQLContextFactory<CustomContext, ServerRequest> {\n    suspend fun generateContext(request: Request): Context? {\n        if (isSpecialRequest(request)) {\n            return null\n        }\n\n        val value = callSomeSuspendableService(request)\n        return CustomContext(value)\n    }\n}\n\nclass MyQuery : Query {\n\n    fun getResults(context: CustomContext?, input: String): String {\n        if (context != null) {\n            return getDataWithContext(input, context)\n        }\n\n        return getBasicData(input)\n    }\n}\n")),Object(o.b)("h2",{id:"suspendable-factory"},"Suspendable Factory"),Object(o.b)("p",null,"The interface is marked as a ",Object(o.b)("inlineCode",{parentName:"p"},"suspend")," function to allow the asynchronous fetching of context data.\nThis may be helpful if you need to call some other services to calculate a context value."),Object(o.b)("h2",{id:"server-specific-abstractions"},"Server-Specific Abstractions"),Object(o.b)("p",null,"A specific ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-*-server")," library may provide an abstract class on top of this interface so users only have to be concerned with the context class and not the server class type.\nFor example the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides the following class, which sets the request type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"abstract class SpringGraphQLContextFactory<out T : GraphQLContext> : GraphQLContextFactory<T, ServerRequest>\n")),Object(o.b)("h2",{id:"http-headers-and-cookies"},"HTTP Headers and Cookies"),Object(o.b)("p",null,"For common use cases around authorization, authentication, or tracing you may need to read HTTP headers and cookies.\nThis should be done in the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," and relevant data should be added to the context to be accessible during schema exectuion."),Object(o.b)("h2",{id:"federated-tracing"},"Federated Tracing"),Object(o.b)("p",null,"If you need ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"},"federation tracing support"),", the context must implement the separate ",Object(o.b)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),"."),Object(o.b)("p",null,"The reference server implementation ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"},"supports federated tracing in the context"),"."))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);