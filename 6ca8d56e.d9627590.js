(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{127:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return c})),i.d(n,"metadata",(function(){return p})),i.d(n,"toc",(function(){return s})),i.d(n,"default",(function(){return u}));var a=i(3),t=i(7),l=(i(0),i(180)),r=i(185),o=i(186),c={id:"client-serialization",title:"Client Serialization"},p={unversionedId:"client/client-serialization",id:"client/client-serialization",isDocsHomePage:!1,title:"Client Serialization",description:"GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with Jackson",source:"@site/docs/client/client-serialization.mdx",slug:"/client/client-serialization",permalink:"/graphql-kotlin/docs/client/client-serialization",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-serialization.mdx",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1617311694,sidebar:"docs",previous:{title:"Client Customization",permalink:"/graphql-kotlin/docs/client/client-customization"},next:{title:"Gradle Plugin Tasks",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"}},s=[{value:"GraphQL Kotlin Spring Client",id:"graphql-kotlin-spring-client",children:[{value:"Using Jackson",id:"using-jackson",children:[]},{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization",children:[]}]},{value:"GraphQL Kotlin Ktor Client",id:"graphql-kotlin-ktor-client",children:[{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization-1",children:[]},{value:"Using Jackson",id:"using-jackson-1",children:[]}]}],d={toc:s};function u(e){var n=e.components,i=Object(t.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,i,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with ",Object(l.b)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},Object(l.b)("inlineCode",{parentName:"a"},"Jackson")),"\n(default) or ",Object(l.b)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},Object(l.b)("inlineCode",{parentName:"a"},"kotlinx.serialization"))," data models. By default, GraphQL\nclients will attempt to pick up the appropriate serializer from a classpath - ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," defines implicit\ndependency on ",Object(l.b)("inlineCode",{parentName:"p"},"Jackson")," based serializer and ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client")," define a dependency on a ",Object(l.b)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"GraphQLClientSerializer")," is a service provider interface that expose generic serialize/deserialize methods that are used\nby the GraphQL clients to serialize requests to String and deserialize responses from String. By utilizing Java ",Object(l.b)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism we can dynamically load appropriate serializer from the classpath. If there are multiple providers on the classpath,\nwe default to select the first one available one on the classpath."),Object(l.b)("h2",{id:"graphql-kotlin-spring-client"},"GraphQL Kotlin Spring Client"),Object(l.b)("h3",{id:"using-jackson"},"Using Jackson"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Jackson")," is the default serializer used by the build plugins and by GraphQL Kotlin Spring Client."),Object(l.b)(r.a,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"gradle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'))),Object(l.b)(o.a,{value:"maven",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientJacksonSerializer()\n)\n')),Object(l.b)("h3",{id:"using-kotlinx-serialization"},"Using Kotlinx Serialization"),Object(l.b)("p",null,"In order to use ",Object(l.b)("inlineCode",{parentName:"p"},"kotlinx.serialization")," we need to"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"add dependency on ",Object(l.b)("inlineCode",{parentName:"li"},"graphql-kotlin-client-serialization")),Object(l.b)("li",{parentName:"ul"},"configure GraphQL plugin to generate ",Object(l.b)("inlineCode",{parentName:"li"},"kotlinx.serialization")," compatible data models"),Object(l.b)("li",{parentName:"ul"},"configure corresponding compiler plugin"),Object(l.b)("li",{parentName:"ul"},"explicitly specify the target serializer during client construction OR exclude ",Object(l.b)("inlineCode",{parentName:"li"},"graphql-kotlin-client-jackson")," dependency")),Object(l.b)(r.a,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"gradle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-jackson")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-serialization", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'))),Object(l.b)(o.a,{value:"maven",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-jackson</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-serialization</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientKotlinxSerializer()\n)\n')),Object(l.b)("h2",{id:"graphql-kotlin-ktor-client"},"GraphQL Kotlin Ktor Client"),Object(l.b)("h3",{id:"using-kotlinx-serialization-1"},"Using Kotlinx Serialization"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"kotlinx.serialization")," is the default serializer used by the GraphQL Kotlin Ktor Client. Build plugins default to use\n",Object(l.b)("inlineCode",{parentName:"p"},"Jackson")," so we have to explicitly configure the tasks/mojos to use appropriate serializer."),Object(l.b)(r.a,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"gradle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'))),Object(l.b)(o.a,{value:"maven",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientKotlinxSerializer()\n)\n')),Object(l.b)("h3",{id:"using-jackson-1"},"Using Jackson"),Object(l.b)("p",null,"In order to use ",Object(l.b)("inlineCode",{parentName:"p"},"Jackson")," we need to"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"add dependency on ",Object(l.b)("inlineCode",{parentName:"li"},"graphql-kotlin-client-jackson")),Object(l.b)("li",{parentName:"ul"},"explicitly specify the target serializer during client construction OR exclude ",Object(l.b)("inlineCode",{parentName:"li"},"graphql-kotlin-client-serialization")," dependency")),Object(l.b)(r.a,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"gradle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-serialization")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-jackson", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'))),Object(l.b)(o.a,{value:"maven",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-serialization</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-jackson</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientJacksonSerializer()\n)\n')))}u.isMDXComponent=!0},180:function(e,n,i){"use strict";i.d(n,"a",(function(){return d})),i.d(n,"b",(function(){return m}));var a=i(0),t=i.n(a);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var p=t.a.createContext({}),s=function(e){var n=t.a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},d=function(e){var n=s(e.components);return t.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},g=t.a.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(i),g=a,m=d["".concat(r,".").concat(g)]||d[g]||u[g]||l;return i?t.a.createElement(m,o(o({ref:n},p),{},{components:i})):t.a.createElement(m,o({ref:n},p))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return t.a.createElement.apply(null,r)}return t.a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},181:function(e,n,i){"use strict";function a(e){var n,i,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(i=a(e[n]))&&(t&&(t+=" "),t+=i);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}n.a=function(){for(var e,n,i=0,t="";i<arguments.length;)(e=arguments[i++])&&(n=a(e))&&(t&&(t+=" "),t+=n);return t}},183:function(e,n,i){"use strict";var a=i(0),t=i(184);n.a=function(){var e=Object(a.useContext)(t.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,n,i){"use strict";var a=i(0),t=Object(a.createContext)(void 0);n.a=t},185:function(e,n,i){"use strict";var a=i(0),t=i.n(a),l=i(183),r=i(181),o=i(53),c=i.n(o),p=37,s=39;n.a=function(e){var n=e.lazy,i=e.block,o=e.defaultValue,d=e.values,u=e.groupId,g=e.className,m=Object(l.a)(),b=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(a.useState)(o),v=f[0],x=f[1],k=a.Children.toArray(e.children);if(null!=u){var j=b[u];null!=j&&j!==v&&d.some((function(e){return e.value===j}))&&x(j)}var O=function(e){x(e),null!=u&&h(u,e)},y=[];return t.a.createElement("div",null,t.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":i},g)},d.map((function(e){var n=e.value,i=e.label;return t.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,n,i){switch(i.keyCode){case s:!function(e,n){var i=e.indexOf(n)+1;e[i]?e[i].focus():e[0].focus()}(e,n);break;case p:!function(e,n){var i=e.indexOf(n)-1;e[i]?e[i].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return O(n)},onClick:function(){O(n)}},i)}))),n?Object(a.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):t.a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},186:function(e,n,i){"use strict";var a=i(0),t=i.n(a);n.a=function(e){var n=e.children,i=e.hidden,a=e.className;return t.a.createElement("div",{role:"tabpanel",hidden:i,className:a},n)}}}]);