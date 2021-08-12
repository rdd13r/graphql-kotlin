(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8515],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>i,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,h=m["".concat(l,".").concat(g)]||m[g]||c[g]||o;return n?a.createElement(h,s(s({ref:t},i),{},{components:n})):a.createElement(h,s({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},345:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>l,metadata:()=>p,toc:()=>i,default:()=>m});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=["components"],u={id:"enums",title:"Enums"},l=void 0,p={unversionedId:"schema-generator/writing-schemas/enums",id:"schema-generator/writing-schemas/enums",isDocsHomePage:!1,title:"Enums",description:"Enums are automatically mapped to GraphQL enum type.",source:"@site/docs/schema-generator/writing-schemas/enums.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/enums",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/enums",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/enums.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1628795201,formattedLastUpdatedAt:"8/12/2021",frontMatter:{id:"enums",title:"Enums"},sidebar:"docs",previous:{title:"Scalars",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/scalars"},next:{title:"Lists",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/lists"}},i=[{value:"Converting a Java enum to a GraphQL Enum",id:"converting-a-java-enum-to-a-graphql-enum",children:[]}],c={toc:i};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enums are automatically mapped to GraphQL enum type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"enum class MyEnumType {\n  ONE,\n  TWO\n}\n")),(0,o.kt)("p",null,"Above enum will be generated as following GraphQL object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MyEnumType {\n  ONE\n  TWO\n}\n")),(0,o.kt)("h3",{id:"converting-a-java-enum-to-a-graphql-enum"},"Converting a Java enum to a GraphQL Enum"),(0,o.kt)("p",null,"If you want to use Java enums from another package, but you ",(0,o.kt)("strong",{parentName:"p"},"don't")," want\ninclude everything from that package using ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},(0,o.kt)("inlineCode",{parentName:"a"},"supportedPackages"))," or you want\nto customize the GraphQL type, you can use ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"schema generator hooks")," to\nassociate the Java enum with a runtime ",(0,o.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"GraphQLEnumType")),"."),(0,o.kt)("p",null,"Step 1: Create a GraphQLEnumType using the Java enum values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// in some other package\npublic enum Status {\n  APPROVED,\n  DECLINED\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val statusEnumType = GraphQLEnumType.newEnum()\n    .name("Status")\n    .values(Status.values().map {\n      GraphQLEnumValueDefinition.newEnumValueDefinition()\n          .value(it.name)\n          .build()\n    })\n    .build()\n')),(0,o.kt)("p",null,"Step 2: Add a schema generation hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? {\n    return when (type.classifier as? KClass<*>) {\n      Status::class.java -> statusEnumType\n      else -> super.willGenerateGraphQLType(type)\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Step 3. Use your Java enum anywhere in your schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass StatusQuery : Query {\n  fun currentStatus: Status = getCurrentStatus()\n}\n")))}m.isMDXComponent=!0}}]);