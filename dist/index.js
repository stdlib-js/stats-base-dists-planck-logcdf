"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=u(function(z,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-floor/dist'),s=require('@stdlib/math-base-special-expm1/dist'),N=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist'),F=require('@stdlib/constants-float64-pinf/dist');function y(r,e){return t(r)||t(e)||e<=0?NaN:r<0?p:r===F?0:N(-s(-e*(c(r)+1)))}n.exports=y
});var q=u(function(A,o){
var I=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-floor/dist'),g=require('@stdlib/math-base-special-expm1/dist'),P=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ninf/dist'),R=require('@stdlib/constants-float64-pinf/dist');function h(r){if(f(r)||r<=0)return I(NaN);return e;function e(i){return f(i)?NaN:i<0?O:i===R?0:P(-g(-r*(l(i)+1)))}}o.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=a(),k=q();j(v,"factory",k);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
