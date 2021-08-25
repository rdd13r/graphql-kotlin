(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7110],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),r=n(9443);const o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(6010);const l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;const u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,v=(0,a.useState)(r),b=v[0],k=v[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var C=h[d];null!=C&&C!==b&&u.some((function(e){return e.value===C}))&&k(C)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;k(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},510:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>g});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s=["components"],c={id:"schema-generator-getting-started",title:"Getting Started"},p=void 0,u={unversionedId:"schema-generator/schema-generator-getting-started",id:"version-4.x.x/schema-generator/schema-generator-getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Install",source:"@site/versioned_docs/version-4.x.x/schema-generator/schema-generator-getting-started.mdx",sourceDirName:"schema-generator",slug:"/schema-generator/schema-generator-getting-started",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/schema-generator-getting-started",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/schema-generator-getting-started.mdx",version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1629925595,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"schema-generator-getting-started",title:"Getting Started"},sidebar:"version-4.x.x/docs",previous:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/4.x.x/blogs-and-videos"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/nullability"}},d=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"<code>toSchema</code>",id:"toschema",children:[]},{value:"<code>TopLevelObject</code>",id:"toplevelobject",children:[{value:"Dynamic <code>TopLevelObject</code>",id:"dynamic-toplevelobject",children:[]}]}],m={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to your project."),(0,o.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-schema-generator", latestVersion)\n'))),(0,o.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-schema-generator</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides a single function, ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema"),", to generate a schema from Kotlin objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Widget(val id: Int, val value: String)\n\nclass WidgetQuery {\n  fun widgetById(id: Int): Widget? {\n    // grabs widget from a data source\n  }\n}\n\nclass WidgetMutation {\n  fun saveWidget(value: String): Widget {\n    // some logic for saving widget\n  }\n}\n\nval widgetQuery = WidgetQuery()\nval widgetMutation = WidgetMutation()\nval schema = toSchema(\n  config = yourCustomConfig(),\n  queries = listOf(TopLevelObject(widgetQuery)),\n  mutations = listOf(TopLevelObject(widgetMutation))\n)\n")),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  widgetById(id: Int!): Widget\n}\n\ntype Mutation {\n  saveWidget(value: String!): Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n")),(0,o.kt)("p",null,"Any ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," functions defined on a query, mutation, or subscription Kotlin class will be translated into GraphQL fields on the object\ntype. ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," will then recursively apply Kotlin reflection on the specified classes to generate all\nremaining object types, their properties, functions, and function arguments."),(0,o.kt)("p",null,"The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," can then be used to expose a GraphQL API endpoint."),(0,o.kt)("h2",{id:"toschema"},(0,o.kt)("inlineCode",{parentName:"h2"},"toSchema")),(0,o.kt)("p",null,"This function accepts four arguments: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," are a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject"),"s and will be used to generate corresponding GraphQL root types. See\nbelow on why we use this wrapper class. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," contains all the extra information you need to pass, including\ncustom hooks, supported packages, and name overrides. See the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/toSchema.kt"},"in the\nsource")),(0,o.kt)("h2",{id:"toplevelobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"TopLevelObject")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," uses Kotlin reflection to build a GraphQL schema from given classes using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),"'s schema builder. We\ndon't just pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"KClass")," though, we have to actually pass an object, because the functions on the object are\ntransformed into the data fetchers. In most cases, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject")," can be constructed with just an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Query {\n  fun getNumber() = 1\n}\n\nval topLevelObject = TopLevelObject(Query())\n\ntoSchema(config = config, queries = listOf(topLevelObject))\n")),(0,o.kt)("p",null,"In the above case, ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," will use ",(0,o.kt)("inlineCode",{parentName:"p"},"topLevelObject::class")," as the reflection target, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," as the data fetcher\ntarget."),(0,o.kt)("h3",{id:"dynamic-toplevelobject"},"Dynamic ",(0,o.kt)("inlineCode",{parentName:"h3"},"TopLevelObject")),(0,o.kt)("p",null,"In a lot of cases, such as with Spring AOP, the object (or bean) being used to generate a schema is a dynamic proxy. In\nthis case, ",(0,o.kt)("inlineCode",{parentName:"p"},"topLevelObject::class")," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", but rather a generated class that will confuse the schema generator.\nTo specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"KClass")," to use for reflection on a proxy, pass the class to ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass Query {\n  fun getNumber() = 1\n}\n\nval query = getObjectFromBean()\nval customDef = TopLevelObject(query, Query::class)\n\ntoSchema(config, listOf(customDef))\n")))}g.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);