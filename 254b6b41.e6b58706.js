(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{180:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,g=l["".concat(o,".").concat(b)]||l[b]||d[b]||i;return t?a.a.createElement(g,s(s({ref:n},c),{},{components:t})):a.a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(180)),o={id:"spring-schema",title:"Writing Schemas with Spring",original_id:"spring-schema"},s={unversionedId:"spring-server/spring-schema",id:"version-3.x.x/spring-server/spring-schema",isDocsHomePage:!1,title:"Writing Schemas with Spring",description:"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you simply need to create beans that",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-schema.md",slug:"/spring-server/spring-schema",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-schema.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1617311694,sidebar:"version-3.x.x/docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-properties"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"}},p=[{value:"Spring Query Beans",id:"spring-query-beans",children:[]},{value:"Spring Data Fetcher",id:"spring-data-fetcher",children:[]},{value:"Spring BeanFactoryAware",id:"spring-beanfactoryaware",children:[]}],c={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you simply need to create beans that\nimplement corresponding marker interface and they will be automatically picked up by ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n")),Object(i.b)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n")),Object(i.b)("h2",{id:"spring-query-beans"},"Spring Query Beans"),Object(i.b)("p",null,"Spring will automatically autowire dependent beans to our Spring query beans. Refer to ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/"},"Spring Documentation")," for details."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass WidgetQuery(private val repository: WidgetRepository) : Query {\n    fun getWidget(id: Int): Widget = repository.findWidget(id)\n}\n")),Object(i.b)("h2",{id:"spring-data-fetcher"},"Spring Data Fetcher"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides Spring aware data fetcher that automatically autowires Spring beans when they are\nspecified as function arguments. ",Object(i.b)("inlineCode",{parentName:"p"},"@Autowired")," arguments should be explicitly excluded from the GraphQL schema by also\nspecifying ",Object(i.b)("inlineCode",{parentName:"p"},"@GraphQLIgnore"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass SpringQuery : Query {\n    fun getWidget(@GraphQLIgnore @Autowired repository: WidgetRepository, id: Int): Widget = repository.findWidget(id)\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: if you are using custom data fetcher make sure that you extend ",Object(i.b)("inlineCode",{parentName:"p"},"SpringDataFetcher")," instead of a base ",Object(i.b)("inlineCode",{parentName:"p"},"FunctionDataFetcher"),".")),Object(i.b)("h2",{id:"spring-beanfactoryaware"},"Spring BeanFactoryAware"),Object(i.b)("p",null,"You can use Spring beans to wire different objects together at runtime. Instead of autowiring specific beans as properties,\nyou can also dynamically resolve beans by using bean factories. There is an example of how to set this up in the example\napp in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/TopLevelBeanFactoryQuery.kt"},"TopLevelBeanFactoryQuery.kt"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass UsersQuery : Query, BeanFactoryAware {\n    private lateinit var beanFactory: BeanFactory\n\n    @GraphQLIgnore\n    override fun setBeanFactory(beanFactory: BeanFactory) {\n        this.beanFactory = beanFactory\n    }\n\n    fun findUser(id: String): SubQuery = beanFactory.getBean(User::class.java, id)\n}\n\n@Component\n@Scope("prototype")\nclass User @Autowired(required = false) constructor(private val userId: String) {\n\n    @Autowired\n    private lateinit var service: PhotoService\n\n    fun photos(numberOfPhotos: Int): List<Photo> = service.findPhotos(userId, numberOfPhotos)\n}\n')),Object(i.b)("hr",null),Object(i.b)("p",null,"We have examples of these techniques implemented in Spring boot in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/NestedQueries.kt"},"example\napp"),"."))}u.isMDXComponent=!0}}]);