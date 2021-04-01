(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{180:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(t),d=r,h=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return t?o.a.createElement(h,p(p({ref:n},c),{},{components:t})):o.a.createElement(h,p({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(180)),a={id:"spring-subscriptions",title:"Subscriptions"},p={unversionedId:"server/spring-server/spring-subscriptions",id:"server/spring-server/spring-subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/docs/server/spring-server/spring-subscriptions.md",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-subscriptions.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1617311694,sidebar:"docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/client/client-overview"}},s=[{value:"Flow Support",id:"flow-support",children:[]},{value:"<code>graphql-ws</code> subprotocol",id:"graphql-ws-subprotocol",children:[]},{value:"Subscription Hooks",id:"subscription-hooks",children:[{value:"<code>onConnect</code>",id:"onconnect",children:[]},{value:"<code>onOperation</code>",id:"onoperation",children:[]},{value:"<code>onOperationComplete</code>",id:"onoperationcomplete",children:[]},{value:"<code>onDisconnect</code>",id:"ondisconnect",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",Object(i.b)("a",{parentName:"em",href:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"},"executing subscriptions"),".\nThis page lists the ",Object(i.b)("inlineCode",{parentName:"em"},"graphql-kotlin-spring-server")," specific features.")),Object(i.b)("h2",{id:"flow-support"},"Flow Support"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides automatic support for Kotlin ",Object(i.b)("inlineCode",{parentName:"p"},"Flow")," through ",Object(i.b)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy"),"\nthat supports existing ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher"),"s and relies on Kotlin reactive-streams interop to convert ",Object(i.b)("inlineCode",{parentName:"p"},"Flow")," to a ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher"),"."),Object(i.b)("h2",{id:"graphql-ws-subprotocol"},Object(i.b)("inlineCode",{parentName:"h2"},"graphql-ws")," subprotocol"),Object(i.b)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},Object(i.b)("inlineCode",{parentName:"a"},"graphql-ws")," subprotocol")," defined by Apollo.\nThis requires that your client send and parse messages in a specific format."),Object(i.b)("p",null,"If you would like to implement your own subscription handler, you can provide a primary spring bean for ",Object(i.b)("inlineCode",{parentName:"p"},"HandlerMapping")," that overrides the ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-beans"},"default one")," which sets the url for subscriptions to the Apollo subscription handler."),Object(i.b)("h2",{id:"subscription-hooks"},"Subscription Hooks"),Object(i.b)("p",null,"In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle.\nIf you would like to implement your own subscription hooks, you can provide a primary spring bean for ",Object(i.b)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-beans"},"default one")," which do not perform any actions."),Object(i.b)("h3",{id:"onconnect"},Object(i.b)("inlineCode",{parentName:"h3"},"onConnect")),Object(i.b)("p",null,"Allows validation of connectionParams prior to starting the connection.\nYou can reject the connection by throwing an exception.\nIf you need to forward state to execution, update and return the ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"},"GraphQLContext"),"."),Object(i.b)("h3",{id:"onoperation"},Object(i.b)("inlineCode",{parentName:"h3"},"onOperation")),Object(i.b)("p",null,"Called when the client executes a GraphQL operation. The context can not be updated here, it is read only."),Object(i.b)("h3",{id:"onoperationcomplete"},Object(i.b)("inlineCode",{parentName:"h3"},"onOperationComplete")),Object(i.b)("p",null,"Called when client's unsubscribes"),Object(i.b)("h3",{id:"ondisconnect"},Object(i.b)("inlineCode",{parentName:"h3"},"onDisconnect")),Object(i.b)("p",null,"Called when the client disconnects"),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"You can see an example implementation of a ",Object(i.b)("inlineCode",{parentName:"p"},"Subscription")," in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/subscriptions/SimpleSubscription.kt"},"example app"),"."))}l.isMDXComponent=!0}}]);