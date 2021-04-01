(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(180)),i={id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},s={unversionedId:"federated/type-resolution",id:"version-3.x.x/federated/type-resolution",isDocsHomePage:!1,title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/versioned_docs/version-3.x.x/federated/type-resolution.md",slug:"/federated/type-resolution",permalink:"/graphql-kotlin/docs/3.x.x/federated/type-resolution",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/type-resolution.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1617311694,sidebar:"version-3.x.x/docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-directives"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"}},p=[{value:"<code>_entities</code> query",id:"_entities-query",children:[{value:"Federated Type Resolver",id:"federated-type-resolver",children:[]}]}],d={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."),Object(o.b)("h2",{id:"_entities-query"},Object(o.b)("inlineCode",{parentName:"h2"},"_entities")," query"),Object(o.b)("p",null,"Federated GraphQL server provides custom ",Object(o.b)("inlineCode",{parentName:"p"},"_entities")," query that allow retrieving any of the federated extended types.\n",Object(o.b)("inlineCode",{parentName:"p"},"_entities"),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',Object(o.b)("inlineCode",{parentName:"p"},"_Entity")," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",Object(o.b)("inlineCode",{parentName:"p"},"@key")," directive as well as target ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," information. If federated query type fragments also\nreference fields with ",Object(o.b)("inlineCode",{parentName:"p"},"@requires")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@provides")," directives then those referenced fields should also be specified in\nthe target representation object."),Object(o.b)("p",null,">"," NOTE: ",Object(o.b)("inlineCode",{parentName:"p"},"_entities")," queries are automatically generated by the federated gateway and their usage is transparent for the\n",">"," gateway clients."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\nquery ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n\n")),Object(o.b)("h3",{id:"federated-type-resolver"},"Federated Type Resolver"),Object(o.b)("p",null,"In order to simplify the integrations, ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," provides default ",Object(o.b)("inlineCode",{parentName:"p"},"_entities")," query resolver that\nrelies on\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeRegistry.kt"},"FederatedTypeRegistry"),"\nto retrieve\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeResolver.kt"},"FederatedTypeResolver"),"\nthat is used to resolve target object. When configuring the federated schema generator hooks you have to explicitly\nprovide those resolver mappings to the configuration."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FederatedTypeResolver")," accepts a list of representations of the target types which should be resolved in the same order\nas they were specified in the list of representations. Each passed in representation should either be resolved to a\ntarget entity or NULL if entity cannot be resolved."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval productResolver = object: FederatedTypeResolver<Product> {\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map {\n        val id = it["id"]?.toString()?.toIntOrNull()\n        // instantiate product using id\n    }\n}\n// federated type registry provides mapping between target __typename and the corresponding type resolver\nval federatedTypeRegistry = FederatedTypeRegistry(mapOf("Product" to productResolver))\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\nval schema = toFederatedSchema(config)\n\n')))}l.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),f=n,y=c["".concat(i,".").concat(f)]||c[f]||u[f]||o;return r?a.a.createElement(y,s(s({ref:t},d),{},{components:r})):a.a.createElement(y,s({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);