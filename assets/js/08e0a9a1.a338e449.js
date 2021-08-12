(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8903],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2229:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>s,toc:()=>p,default:()=>d});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={id:"arguments",title:"Arguments",original_id:"arguments"},u=void 0,s={unversionedId:"schema-generator/writing-schemas/arguments",id:"version-3.x.x/schema-generator/writing-schemas/arguments",isDocsHomePage:!1,title:"Arguments",description:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields.",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/arguments.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1628795201,formattedLastUpdatedAt:"8/12/2021",frontMatter:{id:"arguments",title:"Arguments",original_id:"arguments"},sidebar:"version-3.x.x/docs",previous:{title:"Nullability",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nullability"},next:{title:"Scalars",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/scalars"}},p=[{value:"Input Types",id:"input-types",children:[]},{value:"Optional input fields",id:"optional-input-fields",children:[]},{value:"Default values",id:"default-values",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass SimpleQuery{\n  fun doSomething(value: Int): Boolean = true\n}\n\n")),(0,l.kt)("p",null,"The above Kotlin code will generate following GraphQL schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  doSomething(value: Int!): Boolean!\n}\n\n")),(0,l.kt)("p",null,"This behavior is true for all arguments except for the special classes for the ",(0,l.kt)("a",{parentName:"p",href:"../execution/contextual-data"},"GraphQLContext")," and the ",(0,l.kt)("a",{parentName:"p",href:"../execution/data-fetching-environment"},"DataFetchingEnvironment")),(0,l.kt)("h2",{id:"input-types"},"Input Types"),(0,l.kt)("p",null,"Query and mutation function arguments are automatically converted to corresponding GraphQL input fields. GraphQL makes a\ndistinction between input and output types and requires unique names for all the types. Since we can use the same\nobjects for input and output in our Kotlin functions, ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will automatically append\nan ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," suffix to the query input objects."),(0,l.kt)("p",null,"For example, the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass WidgetMutation {\n    fun processWidget(widget: Widget): Widget {\n        if (null == widget.value) {\n            widget.value = 42\n        }\n        return widget\n    }\n}\n\ndata class Widget(var value: Int? = nul) {\n    fun multiplyValueBy(multiplier: Int) = value?.times(multiplier)\n}\n\n")),(0,l.kt)("p",null,"Will generate the following schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Mutation {\n  processWidget(widget: WidgetInput!): Widget!\n}\n\ntype Widget {\n  value: Int\n  multiplyValueBy(multiplier: Int!): Int\n}\n\ninput WidgetInput {\n  value: Int\n}\n\n")),(0,l.kt)("p",null,"Please note that only fields are exposed in the input objects. Functions will only be available on the GraphQL output\ntypes."),(0,l.kt)("p",null,"If you know a type will only be used for input types you can call your class something like ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTypeInput"),". The library will not\nappend ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," if the class name already ends with ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," but that means you can not use this type as output because\nthe schema would have two types with the same name and that would be invalid."),(0,l.kt)("h2",{id:"optional-input-fields"},"Optional input fields"),(0,l.kt)("p",null,"Kotlin requires variables/values to be initialized upon their declaration either from the user input OR by providing\ndefaults (even if they are marked as nullable). Therefore in order for a GraphQL input field to be optional it needs to be\nnullable and also specify a default Kotlin value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nfun doSomethingWithOptionalInput(requiredValue: Int, optionalValue: Int?) = "required value=$requiredValue, optional value=$optionalValue"\n\n')),(0,l.kt)("p",null,"NOTE: Non nullable input fields will always require users to specify the value regardless of whether a default Kotlin value\nis provided or not."),(0,l.kt)("p",null,"NOTE: Even though you could specify a default values for arguments in Kotlin ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalValue: Int? = null"),", this will not\nbe used. If query does not explicitly specify root argument values, our function data fetcher will default to use null as\nthe value. This is because Kotlin properties always have to be initialized, and we cannot determine whether underlying\nargument has default value or not. As a result, Kotlin default value will never be used. For example, with argument\n",(0,l.kt)("inlineCode",{parentName:"p"},"optionalList: List<Int>? = emptyList()"),", the value will be null if not passed a value by the client."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"../execution/optional-undefined-arguments"},"optional undefined arguments")," for details how to determine whether argument\nwas specified or not."),(0,l.kt)("h2",{id:"default-values"},"Default values"),(0,l.kt)("p",null,"Default argument values are currently not supported. See issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/53"},"#53"),"\nfor more details."))}d.isMDXComponent=!0}}]);