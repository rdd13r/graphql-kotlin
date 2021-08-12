(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[192],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(7294);const a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(7294),a=t(9443);const l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(6010);const o="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,c=39;const u=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,u=e.values,d=e.groupId,g=e.className,m=l(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,r.useState)(a),k=v[0],b=v[1],y=r.Children.toArray(e.children),x=[];if(null!=d){var N=h[d];null!=N&&N!==k&&u.some((function(e){return e.value===N}))&&b(N)}var w=function(e){var n=e.currentTarget,t=x.indexOf(n),r=u[t].value;b(r),null!=d&&(f(d,r),setTimeout((function(){var e,t,r,a,l,i,o,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,t>=0&&l<=s&&a<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case c:var r=x.indexOf(e.target)+1;t=x[r]||x[0];break;case s:var a=x.indexOf(e.target)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},g)},u.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:w,onClick:w},t)}))),n?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},9443:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=(0,t(7294).createContext)(void 0)},8342:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>d,default:()=>m});var r=t(2122),a=t(9756),l=(t(7294),t(3905)),i=t(5064),o=t(8215),p=["components"],s={id:"client-overview",title:"Client Overview"},c=void 0,u={unversionedId:"client/client-overview",id:"client/client-overview",isDocsHomePage:!1,title:"Client Overview",description:"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides Ktor HTTP client",source:"@site/docs/client/client-overview.mdx",sourceDirName:"client",slug:"/client/client-overview",permalink:"/graphql-kotlin/docs/client/client-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-overview.mdx",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1628795201,formattedLastUpdatedAt:"8/12/2021",frontMatter:{id:"client-overview",title:"Client Overview"},sidebar:"docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},next:{title:"Client Features",permalink:"/graphql-kotlin/docs/client/client-features"}},d=[{value:"Project Configuration",id:"project-configuration",children:[{value:"Build Configuration",id:"build-configuration",children:[]},{value:"Generating GraphQL Operations",id:"generating-graphql-operations",children:[]},{value:"Executing Operations",id:"executing-operations",children:[]}]}],g={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP client"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-webclient"},"Spring WebClient"),"\nbased reference implementations as well as allows for custom implementations using other engines, see ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-customization"},"client customization"),"\ndocumentation for additional details. Type-safe data models are generated at build time by the GraphQL Kotlin ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"},"Gradle"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},"Maven")," plugins."),(0,l.kt)("p",null,"Client Features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Supports query and mutation operations"),(0,l.kt)("li",{parentName:"ul"},"Supports batch operations"),(0,l.kt)("li",{parentName:"ul"},"Automatic generation of type-safe Kotlin models supporting ",(0,l.kt)("inlineCode",{parentName:"li"},"kotlinx.serialization")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Jackson")," formats"),(0,l.kt)("li",{parentName:"ul"},"Custom scalar support - defaults to String but can be configured to deserialize to specific types"),(0,l.kt)("li",{parentName:"ul"},"Supports default enum values to gracefully handle new/unknown server values"),(0,l.kt)("li",{parentName:"ul"},"Native support for coroutines"),(0,l.kt)("li",{parentName:"ul"},"Easily configurable Ktor and Spring WebClient based HTTP Clients"),(0,l.kt)("li",{parentName:"ul"},"Documentation generated from the underlying GraphQL schema")),(0,l.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,l.kt)("p",null,"GraphQL Kotlin provides both Gradle and Maven plugins to automatically generate your client code at build time. In order\nto auto-generate the client code, plugins require target GraphQL schema and a list of query files to process."),(0,l.kt)("p",null,"GraphQL schema can be provided as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"result of introspection query (default)"),(0,l.kt)("li",{parentName:"ul"},"downloaded from an SDL endpoint"),(0,l.kt)("li",{parentName:"ul"},"local file")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/gradle-plugin"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/maven-plugin"},"Maven"),"\nplugin documentation for additional details."),(0,l.kt)("p",null,"GraphQL Kotlin plugins generated classes are simple POJOs that implement ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," and optionally accept variables\n(only if underlying operation uses variables) as a constructor parameter. Generated classes can then be passed directly\nto a GraphQL client to execute either a single or a batch request."),(0,l.kt)("p",null,"Example below configures the project to use introspection query to obtain the schema and uses Spring WebClient based HTTP client."),(0,l.kt)("h3",{id:"build-configuration"},"Build Configuration"),(0,l.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("p",null,"Basic ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," Gradle configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    id("com.expediagroup.graphql") version $latestGraphQLKotlinVersion\n}\n\ndependencies {\n  implementation("com.expediagroup:graphql-kotlin-spring-client:$latestGraphQLKotlinVersion")\n}\n\ngraphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("p",null,"Basic Maven ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>graphql-kotlin-maven-client-example</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n\n    <properties>\n        <graphql-kotlin.version>$latestGraphQLKotlinVersion</graphql-kotlin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <id>generate-graphql-client</id>\n                        <goals>\n                            <goal>introspectSchema</goal>\n                            <goal>generateClient</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>${project.build.directory}/schema.graphql</schemaFile>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"graphql-kotlin-client-example")," project for complete\nworking examples of Gradle and Maven based projects."),(0,l.kt)("h3",{id:"generating-graphql-operations"},"Generating GraphQL Operations"),(0,l.kt)("p",null,"By default, GraphQL Kotlin build plugins will attempt to generate GraphQL operations from all ",(0,l.kt)("inlineCode",{parentName:"p"},"*.graphql")," files located under\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources"),". Operations are validated against the target GraphQL schema, which can be manually provided, retrieved by\nthe plugins through introspection (as configured in examples above) or downloaded directly from a custom SDL endpoint.\nSee our documentation for more details on supported ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"},"Gradle tasks"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},"Maven Mojos"),"."),(0,l.kt)("p",null,"When creating your GraphQL operations make sure to always specify an operation name and name the files accordingly. Each\none of your GraphQL operation files will generate a corresponding Kotlin file with a class matching your operation\nname. Input objects, enums and custom scalars definitions will be shared across different operations. All other objects\nwill be generated operation specific package name. For example, given ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery")," as\nthe operation name, GraphQL Kotlin plugins will generate a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.kt")," file with a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery"),"\nclass under the configured package."),(0,l.kt)("p",null,"For example, given a simple schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  helloWorld: String\n}\n")),(0,l.kt)("p",null,"And a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query HelloWorldQuery {\n  helloWorld\n}\n")),(0,l.kt)("p",null,"Plugins will generate following client code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.generated\n\nimport com.expediagroup.graphql.client.types.GraphQLClientRequest\nimport kotlin.String\nimport kotlin.reflect.KClass\n\nconst val HELLO_WORLD_QUERY: String = "query HelloWorldQuery {\\n    helloWorld\\n}"\n\nclass HelloWorldQuery: GraphQLClientRequest<HelloWorldQuery.Result> {\n    override val query: String = HELLO_WORLD_QUERY\n\n    override val operationName: String = "HelloWorldQuery"\n\n    override fun responseType(): KClass<HelloWorldQuery.Result> = HelloWorldQuery.Result::class\n\n    data class Result(\n        val helloWorld: String\n    }\n}\n')),(0,l.kt)("p",null,"Generated classes are simple POJOs that implement ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," interface and represent a GraphQL request."),(0,l.kt)("h3",{id:"executing-operations"},"Executing Operations"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," uses the Spring WebClient to execute the underlying operations and allows you to customize it by providing\nan instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"WebClient.Builder"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," requires target URL to be specified and defaults to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson"),"\nbased GraphQL serializer. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-client"},"Spring documentation"),"\nfor additional details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.client\n\nimport com.expediagroup.graphql.client.spring.GraphQLWebClient\nimport com.expediagroup.graphql.generated.HelloWorldQuery\nimport kotlinx.coroutines.runBlocking\n\nfun main() {\n    val client = GraphQLWebClient(url = "http://localhost:8080/graphql")\n    runBlocking {\n        val helloWorldQuery = HelloWorldQuery()\n        val result = client.execute(helloWorldQuery)\n        println("hello world query result: ${result.data?.helloWorld}")\n    }\n}\n')))}m.isMDXComponent=!0},6010:(e,n,t)=>{"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:()=>a})}}]);