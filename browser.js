// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,f,u,l,s,p,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(a=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),f+=n.arg||"",u+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var j,N=Object.prototype,T=N.toString,V=N.__defineGetter__,O=N.__defineSetter__,$=N.__lookupGetter__,C=N.__lookupSetter__;j=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};var G=j;function P(r){return r!=r}var R,W=Math.floor,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,H=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"";R=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Z.call(r);t=r[X],a=X,e=null!=(i=r)&&H.call(i,a);try{r[X]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[X]=t:delete r[X],n}:function(r){return Z.call(r)};var Y,z=R,q="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(q&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=Y,Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;J=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr,nr=J,ir="function"==typeof Uint8Array,ar="function"==typeof Uint8Array?Uint8Array:null,or="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),t=e,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,fr=tr,ur="function"==typeof Uint16Array,lr="function"==typeof Uint16Array?Uint16Array:null,sr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(ur&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr,yr={uint16:cr,uint8:fr};(pr=new yr.uint16(1))[0]=4660;var dr=52===new yr.uint8(pr.buffer)[0],gr=!0===dr?1:0,hr=new nr(1),wr=new K(hr.buffer);function br(r){return hr[0]=r,wr[gr]}var vr,mr,Ar=!0===dr?1:0,_r=new nr(1),Er=new K(_r.buffer);function Ur(r,e){return _r[0]=r,Er[Ar]=e>>>0,_r[0]}!0===dr?(vr=1,mr=0):(vr=0,mr=1);var Sr={HIGH:vr,LOW:mr},xr=new nr(1),Ir=new K(xr.buffer),kr=Sr.HIGH,Fr=Sr.LOW,jr=Number.POSITIVE_INFINITY,Nr=Number.NEGATIVE_INFINITY,Tr=1023,Vr=.34657359027997264,Or=709.782712893384,$r=.6931471803691238,Cr=1.9082149292705877e-10,Gr=1.4426950408889634,Pr=38.816242111356935,Rr=1.0397207708399179;function Wr(r){var e,t,n,i,a,o,c,f,u,l,s,p,y,d,g;if(r===jr||P(r))return r;if(r===Nr)return-1;if(0===r)return r;if(r<0?(n=!0,f=-r):(n=!1,f=r),f>=Pr){if(n)return-1;if(f>=Or)return jr}if(o=0|br(f),f>Vr)f<Rr?n?(i=r+$r,a=-Cr,y=-1):(i=r-$r,a=Cr,y=1):(y=n?Gr*r-.5:Gr*r+.5,i=r-(s=y|=0)*$r,a=s*Cr),l=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return c=1+(u=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(u),p=u*((c-(s=3-c*e))/(6-r*s)),0===y?r-(r*p-u):(d=Tr+y<<20,g=0,Ir[kr]=d,Ir[Fr]=g,t=xr[0],p=r*(p-l)-l,p-=u,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(f=1-(p-r),1024===y?f=Ur(f,i=br(f)+(y<<20)|0):f*=t,f-1):(s=1,y<20?f=(s=Ur(s,i=1072693248-(2097152>>y)|0))-(p-r):(f=r-(p+(s=Ur(s,i=Tr-y<<20|0))),f+=1),f*=t))}var Lr=.6931471803691238,Zr=1.9082149292705877e-10,Hr=0x40000000000000,Mr=.3333333333333333,Xr=1048575,Yr=2146435072,zr=1048576,qr=1072693248;function Br(r){var e,t,n,i,a,o,c,f,u,l,s,p;return 0===r?Nr:P(r)||r<0?NaN:(a=0,(t=br(r))<zr&&(a-=54,t=br(r*=Hr)),t>=Yr?r+r:(a+=(t>>20)-Tr|0,a+=(f=614244+(t&=Xr)&1048576|0)>>20|0,c=(r=Ur(r,t|f^qr))-1,(Xr&2+t)<3?0===c?0===a?0:a*Lr+a*Zr:(o=c*c*(.5-Mr*c),0===a?c-o:a*Lr-(o-a*Zr-c)):(f=t-398458|0,u=440401-t|0,i=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=n+i,(f|=u)>0?(e=.5*c*c,0===a?c-(e-l*(e+o)):a*Lr-(e-(l*(e+o)+a*Zr)-c)):0===a?c-l*(c-o):a*Lr-(l*(c-o)-a*Zr-c))))}function Dr(r,e){return P(r)||P(e)||e<=0?NaN:r<0?Nr:r===jr?0:Br(-Wr(-e*(W(r)+1)))}return G(Dr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r){return P(r)||r<=0?(e=NaN,function(){return e}):function(e){return P(e)?NaN:e<0?Nr:e===jr?0:Br(-Wr(-r*(W(e)+1)))};var e}}),Dr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=e();
//# sourceMappingURL=browser.js.map
