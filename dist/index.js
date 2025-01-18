"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=u(function(z,q){
var f=require('@stdlib/blas-ext-base-dssum/dist').ndarray,j=require('@stdlib/blas-ext-base-dsapxsum/dist').ndarray;function x(r,e,a,n){var i,v;return r<=0?NaN:r===1||a===0?e[n]:(i=f(r,e,a,n)/r,v=j(r,-i,e,a,n)/r,i+v)}q.exports=x
});var m=u(function(A,d){
var l=require('@stdlib/strided-base-stride2offset/dist'),R=s();function _(r,e,a){return R(r,e,a,l(r,a))}d.exports=_
});var c=u(function(B,o){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=m(),O=s();E(p,"ndarray",O);o.exports=p
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=c(),t,y=g(b(__dirname,"./native.js"));h(y)?t=k:t=y;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
