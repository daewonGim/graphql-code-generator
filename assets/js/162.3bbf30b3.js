(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1465:function(n,e,t){"use strict";t.r(e),function(n){t.d(e,"plugin",(function(){return a})),t.d(e,"validate",(function(){return c}));var r=t(575),i=t.n(r),o=t(576),u=t(382),a=function(){var e=Object(o.a)(i.a.mark((function e(t,r,o){var a,c,f,p,s,d,l,m,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.modulePathPrefix,c=void 0===a?"":a,f=o.relativeToCwd,p=o.prefix,s=void 0===p?"*/":p,d=o.type,l=void 0===d?"DocumentNode":d,m=!0===f,v=r.reduce((function(e,t){var r,i=m?Object(u.relative)(n.cwd(),t.location):Object(u.basename)(t.location);return e[i]||(e[i]=[]),(r=e[i]).push.apply(r,t.document.definitions.filter((function(n){return"OperationDefinition"===n.kind||"FragmentDefinition"===n.kind}))),e}),{}),e.abrupt("return",Object.keys(v).filter((function(n){return v[n].length>0})).map((function(n){var e=v[n];return"\ndeclare module '"+s+c+n+"' {\n  "+("DocumentNode"===l?"import { DocumentNode } from 'graphql';":"")+"\n  const defaultDocument: "+l+";\n  "+e.filter((function(n){return n.name&&n.name.value})).map((function(n){return"export const "+n.name.value+": "+l+";"})).join("\n")+"\n\n  export default defaultDocument;\n}\n    "})).join("\n"));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),c=function(){var n=Object(o.a)(i.a.mark((function n(e,t,r,o){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o.endsWith(".d.ts")){n.next=2;break}throw new Error('Plugin "typescript-graphql-files-modules" requires extension to be ".d.ts"!');case 2:case"end":return n.stop()}}),n)})));return function(e,t,r,i){return n.apply(this,arguments)}}()}.call(this,t(351))}}]);