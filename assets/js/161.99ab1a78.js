(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1478:function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return p})),t.d(n,"validate",(function(){return a}));var i=t(575),r=t.n(i),o=t(576),c=t(333),u=t(382),p=function(e,n,t){var i=[];return i.push(function(e,n){var t,i,r,o=e.getTypeMap(),u=[],p=Object.keys(o).reduce((function(e,t){var i=o[t];if(!t.startsWith("__")&&(Object(c.N)(i)||Object(c.H)(i))){var r,p=Object.keys(i.getFields()).filter((function(e){return!e.startsWith("__")})),a=t+"KeySpecifier",s=t+"FieldPolicy";return u.push("export type "+a+" = ("+p.map((function(e){return"'"+e+"'"})).join(" | ")+" | "+a+")[];"),u.push("export type "+s+" = {\n"+p.map((function(e){return"\t"+e+"?: FieldPolicy<any> | FieldReadFunction<any>"})).join(",\n")+"\n};"),Object.assign({},e,((r={})[t]='Omit<TypePolicy, "fields" | "keyFields"> & {\n\t\tkeyFields'+(n.requireKeyFields?"":"?")+": false | "+a+" | (() => undefined | "+a+"),\n\t\tfields?: "+s+",\n\t}",r))}return e}),{}),a=[null===(t=e.getQueryType())||void 0===t?void 0:t.name,null===(i=e.getMutationType())||void 0===i?void 0:i.name,null===(r=e.getSubscriptionType())||void 0===r?void 0:r.name].filter(Boolean),s="export type TypedTypePolicies = TypePolicies & {"+Object.keys(p).map((function(e){return"\n\t"+e+(n.requirePoliciesForAllTypes&&!a.includes(e)?"":"?")+": "+p[e]})).join(",")+"\n};";return{prepend:["import "+(n.useTypeImports?"type ":"")+"{ FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';"],content:[].concat(u,[s]).join("\n")}}(e,t)),{prepend:i.reduce((function(e,n){return[].concat(e,n.prepend||[])}),[]),append:i.reduce((function(e,n){return[].concat(e,n.append||[])}),[]),content:i.map((function(e){return e.content})).join("\n")}};var a=function(){var e=Object(o.a)(r.a.mark((function e(n,t,i,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(".ts"===Object(u.extname)(o)||".tsx"===Object(u.extname)(o)){e.next=2;break}throw new Error('Plugin "apollo-client-helpers" requires extension to be ".ts" or ".tsx"!');case 2:case"end":return e.stop()}}),e)})));return function(n,t,i,r){return e.apply(this,arguments)}}()}}]);