(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(180)),c={id:"deprecating-schema",title:"Deprecating Schema",original_id:"deprecating-schema"},i={unversionedId:"schema-generator/customizing-schemas/deprecating-schema",id:"version-3.x.x/schema-generator/customizing-schemas/deprecating-schema",isDocsHomePage:!1,title:"Deprecating Schema",description:"GraphQL schemas can have fields marked as deprecated. Instead of creating a custom annotation,",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/deprecating-schema.md",slug:"/schema-generator/customizing-schemas/deprecating-schema",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/deprecating-schema.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1617311694,sidebar:"version-3.x.x/docs",previous:{title:"Directives",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/directives"},next:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/advanced-features"}},s=[],p={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL schemas can have fields marked as deprecated. Instead of creating a custom annotation,\n",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," just looks for the ",Object(o.b)("inlineCode",{parentName:"p"},"kotlin.Deprecated")," annotation and will use that annotation message\nfor the deprecated reason."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nclass SimpleQuery {\n  @Deprecated(message = "this query is deprecated", replaceWith = ReplaceWith("shinyNewQuery"))\n  fun simpleDeprecatedQuery(): Boolean = false\n\n  fun shinyNewQuery(): Boolean = true\n}\n\n')),Object(o.b)("p",null,"The above query would produce the following GraphQL schema:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},'\ntype Query {\n  simpleDeprecatedQuery: Boolean! @deprecated(reason: "this query is deprecated, replace with shinyNewQuery")\n\n  shinyNewQuery: Boolean!\n}\n\n')),Object(o.b)("p",null,"While you can deprecate any fields/functions/classes in your Kotlin code, GraphQL only supports deprecation directive on\nthe fields (which correspond to Kotlin fields and functions) and enum values."),Object(o.b)("p",null,"Deprecation of input types is not yet supported ",Object(o.b)("a",{parentName:"p",href:"https://github.com/graphql/graphql-spec/pull/525"},"in the GraphQL spec"),"."))}l.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(h,i(i({ref:n},p),{},{components:t})):a.a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);