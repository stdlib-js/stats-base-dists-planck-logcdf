"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var a=u(function(z,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-floor/dist'),s=require('@stdlib/math-base-special-expm1/dist'),N=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist'),F=require('@stdlib/constants-float64-pinf/dist');function y(e,r){return t(e)||t(r)||r<=0?NaN:e<0?p:e===F?0:N(-s(-r*(c(e)+1)))}n.exports=y
});var q=u(function(A,o){
var I=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-floor/dist'),g=require('@stdlib/math-base-special-expm1/dist'),P=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ninf/dist'),R=require('@stdlib/constants-float64-pinf/dist');function h(e){if(f(e)||e<=0)return I(NaN);return r;function r(i){return f(i)?NaN:i<0?O:i===R?0:P(-g(-e*(l(i)+1)))}}o.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=a(),k=q();j(v,"factory",k);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
