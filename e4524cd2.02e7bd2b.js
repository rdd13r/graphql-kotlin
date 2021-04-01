(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(180)),o={id:"lists",title:"Lists"},l={unversionedId:"schema-generator/writing-schemas/lists",id:"schema-generator/writing-schemas/lists",isDocsHomePage:!1,title:"Lists",description:"Both kotlin.Array and kotlin.collections.List are automatically mapped to the GraphQL List type (for unsupported",source:"@site/docs/schema-generator/writing-schemas/lists.md",slug:"/schema-generator/writing-schemas/lists",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/lists",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/lists.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1617311694,sidebar:"docs",previous:{title:"Enums",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/enums"},next:{title:"Interfaces",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/interfaces"}},p=[{value:"Primitive Arrays",id:"primitive-arrays",children:[]},{value:"Unsupported Collection Types",id:"unsupported-collection-types",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Both ",Object(i.b)("inlineCode",{parentName:"p"},"kotlin.Array")," and ",Object(i.b)("inlineCode",{parentName:"p"},"kotlin.collections.List")," are automatically mapped to the GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"List")," type (for unsupported\nuse cases see below). Type arguments provided to Kotlin collections are used as the type arguments in the GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"List"),"\ntype. Kotlin specialized classes representing arrays of Java primitive types without boxing overhead (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"IntArray"),")\nare also supported."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass SimpleQuery {\n    fun generateList(): List<Int> {\n        // some logic here that generates list\n    }\n\n    fun doSomethingWithIntArray(ints: IntArray): String {\n        // some logic here that processes array\n    }\n\n    fun doSomethingWithIntList(ints: List<Int>): String {\n        // some logic here that processes list\n    }\n}\n\n")),Object(i.b)("p",null,"The above Kotlin class would produce the following GraphQL schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n    generateList: [Int!]!\n    doSomethingWithIntArray(ints: [Int!]!): String!\n    doSomethingWithIntList(ints: [Int!]!): String!\n}\n\n")),Object(i.b)("h2",{id:"primitive-arrays"},"Primitive Arrays"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," supports the following primitive array types without autoboxing overhead. Similarly to\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"kotlin.Array")," of objects the underlying type is automatically mapped to GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"List")," type."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Kotlin Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.IntArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.LongArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.ShortArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.FloatArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.DoubleArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.CharArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.BooleanArray"))))),Object(i.b)("p",null,">"," NOTE: Underlying GraphQL types of primitive arrays will be corresponding to the built-in scalar types or extended\n",">"," scalar types provided by ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-java"),"."),Object(i.b)("h2",{id:"unsupported-collection-types"},"Unsupported Collection Types"),Object(i.b)("p",null,"Currently GraphQL spec only supports ",Object(i.b)("inlineCode",{parentName:"p"},"Lists"),". Therefore even though Java and Kotlin support number of other collection\ntypes, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," only explicitly supports ",Object(i.b)("inlineCode",{parentName:"p"},"Lists")," and primitive arrays. Other collection types\nsuch as ",Object(i.b)("inlineCode",{parentName:"p"},"Sets")," (see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/201"},"#201"),") and arbitrary ",Object(i.b)("inlineCode",{parentName:"p"},"Map")," data\nstructures are not supported."))}c.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);