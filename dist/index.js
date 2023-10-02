"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=i(function(z,v){
var f=require('@stdlib/blas-ext-base-dssum/dist'),j=require('@stdlib/blas-ext-base-dsapxsum/dist');function l(r,e,a){var u,n;return r<=0?NaN:r===1||a===0?e[0]:(u=f(r,e,a)/r,n=j(r,-u,e,a)/r,u+n)}v.exports=l
});var p=i(function(A,q){
var x=require('@stdlib/blas-ext-base-dssum/dist').ndarray,R=require('@stdlib/blas-ext-base-dsapxsum/dist').ndarray;function _(r,e,a,u){var n,t;return r<=0?NaN:r===1||a===0?e[u]:(n=x(r,e,a,u)/r,t=R(r,-n,e,a,u)/r,n+t)}q.exports=_
});var o=i(function(B,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=m(),O=p();E(d,"ndarray",O);c.exports=d
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=o(),s,y=g(b(__dirname,"./native.js"));h(y)?s=k:s=y;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
