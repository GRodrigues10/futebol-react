(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function o(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(m){if(m.ep)return;m.ep=!0;const h=o(m);fetch(m.href,h)}})();function _0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var So={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function U0(){if(Fm)return ai;Fm=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(c,m,h){var b=null;if(h!==void 0&&(b=""+h),m.key!==void 0&&(b=""+m.key),"key"in m){h={};for(var z in m)z!=="key"&&(h[z]=m[z])}else h=m;return m=h.ref,{$$typeof:i,type:c,key:b,ref:m!==void 0?m:null,props:h}}return ai.Fragment=r,ai.jsx=o,ai.jsxs=o,ai}var $m;function w0(){return $m||($m=1,So.exports=U0()),So.exports}var f=w0(),Eo={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function B0(){if(Wm)return ne;Wm=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.iterator;function w(A){return A===null||typeof A!="object"?null:(A=U&&A[U]||A["@@iterator"],typeof A=="function"?A:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Y={};function X(A,_,L){this.props=A,this.context=_,this.refs=Y,this.updater=L||H}X.prototype.isReactComponent={},X.prototype.setState=function(A,_){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,_,"setState")},X.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function B(){}B.prototype=X.prototype;function k(A,_,L){this.props=A,this.context=_,this.refs=Y,this.updater=L||H}var V=k.prototype=new B;V.constructor=k,q(V,X.prototype),V.isPureReactComponent=!0;var ae=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function F(A,_,L,Q,$,oe){return L=oe.ref,{$$typeof:i,type:A,key:_,ref:L!==void 0?L:null,props:oe}}function ze(A,_){return F(A.type,_,void 0,void 0,void 0,A.props)}function Se(A){return typeof A=="object"&&A!==null&&A.$$typeof===i}function et(A){var _={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(L){return _[L]})}var at=/\/+/g;function Le(A,_){return typeof A=="object"&&A!==null&&A.key!=null?et(""+A.key):_.toString(36)}function Vt(){}function Zt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Vt,Vt):(A.status="pending",A.then(function(_){A.status==="pending"&&(A.status="fulfilled",A.value=_)},function(_){A.status==="pending"&&(A.status="rejected",A.reason=_)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Ye(A,_,L,Q,$){var oe=typeof A;(oe==="undefined"||oe==="boolean")&&(A=null);var I=!1;if(A===null)I=!0;else switch(oe){case"bigint":case"string":case"number":I=!0;break;case"object":switch(A.$$typeof){case i:case r:I=!0;break;case T:return I=A._init,Ye(I(A._payload),_,L,Q,$)}}if(I)return $=$(A),I=Q===""?"."+Le(A,0):Q,ae($)?(L="",I!=null&&(L=I.replace(at,"$&/")+"/"),Ye($,_,L,"",function($e){return $e})):$!=null&&(Se($)&&($=ze($,L+($.key==null||A&&A.key===$.key?"":(""+$.key).replace(at,"$&/")+"/")+I)),_.push($)),1;I=0;var Ge=Q===""?".":Q+":";if(ae(A))for(var pe=0;pe<A.length;pe++)Q=A[pe],oe=Ge+Le(Q,pe),I+=Ye(Q,_,L,oe,$);else if(pe=w(A),typeof pe=="function")for(A=pe.call(A),pe=0;!(Q=A.next()).done;)Q=Q.value,oe=Ge+Le(Q,pe++),I+=Ye(Q,_,L,oe,$);else if(oe==="object"){if(typeof A.then=="function")return Ye(Zt(A),_,L,Q,$);throw _=String(A),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return I}function M(A,_,L){if(A==null)return A;var Q=[],$=0;return Ye(A,Q,"","",function(oe){return _.call(L,oe,$++)}),Q}function G(A){if(A._status===-1){var _=A._result;_=_(),_.then(function(L){(A._status===0||A._status===-1)&&(A._status=1,A._result=L)},function(L){(A._status===0||A._status===-1)&&(A._status=2,A._result=L)}),A._status===-1&&(A._status=0,A._result=_)}if(A._status===1)return A._result.default;throw A._result}var W=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function ce(){}return ne.Children={map:M,forEach:function(A,_,L){M(A,function(){_.apply(this,arguments)},L)},count:function(A){var _=0;return M(A,function(){_++}),_},toArray:function(A){return M(A,function(_){return _})||[]},only:function(A){if(!Se(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ne.Component=X,ne.Fragment=o,ne.Profiler=m,ne.PureComponent=k,ne.StrictMode=c,ne.Suspense=v,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ne.__COMPILER_RUNTIME={__proto__:null,c:function(A){return Z.H.useMemoCache(A)}},ne.cache=function(A){return function(){return A.apply(null,arguments)}},ne.cloneElement=function(A,_,L){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Q=q({},A.props),$=A.key,oe=void 0;if(_!=null)for(I in _.ref!==void 0&&(oe=void 0),_.key!==void 0&&($=""+_.key),_)!le.call(_,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&_.ref===void 0||(Q[I]=_[I]);var I=arguments.length-2;if(I===1)Q.children=L;else if(1<I){for(var Ge=Array(I),pe=0;pe<I;pe++)Ge[pe]=arguments[pe+2];Q.children=Ge}return F(A.type,$,void 0,void 0,oe,Q)},ne.createContext=function(A){return A={$$typeof:b,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:h,_context:A},A},ne.createElement=function(A,_,L){var Q,$={},oe=null;if(_!=null)for(Q in _.key!==void 0&&(oe=""+_.key),_)le.call(_,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&($[Q]=_[Q]);var I=arguments.length-2;if(I===1)$.children=L;else if(1<I){for(var Ge=Array(I),pe=0;pe<I;pe++)Ge[pe]=arguments[pe+2];$.children=Ge}if(A&&A.defaultProps)for(Q in I=A.defaultProps,I)$[Q]===void 0&&($[Q]=I[Q]);return F(A,oe,void 0,void 0,null,$)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(A){return{$$typeof:z,render:A}},ne.isValidElement=Se,ne.lazy=function(A){return{$$typeof:T,_payload:{_status:-1,_result:A},_init:G}},ne.memo=function(A,_){return{$$typeof:p,type:A,compare:_===void 0?null:_}},ne.startTransition=function(A){var _=Z.T,L={};Z.T=L;try{var Q=A(),$=Z.S;$!==null&&$(L,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ce,W)}catch(oe){W(oe)}finally{Z.T=_}},ne.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ne.use=function(A){return Z.H.use(A)},ne.useActionState=function(A,_,L){return Z.H.useActionState(A,_,L)},ne.useCallback=function(A,_){return Z.H.useCallback(A,_)},ne.useContext=function(A){return Z.H.useContext(A)},ne.useDebugValue=function(){},ne.useDeferredValue=function(A,_){return Z.H.useDeferredValue(A,_)},ne.useEffect=function(A,_,L){var Q=Z.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(A,_)},ne.useId=function(){return Z.H.useId()},ne.useImperativeHandle=function(A,_,L){return Z.H.useImperativeHandle(A,_,L)},ne.useInsertionEffect=function(A,_){return Z.H.useInsertionEffect(A,_)},ne.useLayoutEffect=function(A,_){return Z.H.useLayoutEffect(A,_)},ne.useMemo=function(A,_){return Z.H.useMemo(A,_)},ne.useOptimistic=function(A,_){return Z.H.useOptimistic(A,_)},ne.useReducer=function(A,_,L){return Z.H.useReducer(A,_,L)},ne.useRef=function(A){return Z.H.useRef(A)},ne.useState=function(A){return Z.H.useState(A)},ne.useSyncExternalStore=function(A,_,L){return Z.H.useSyncExternalStore(A,_,L)},ne.useTransition=function(){return Z.H.useTransition()},ne.version="19.1.0",ne}var Pm;function Zo(){return Pm||(Pm=1,Eo.exports=B0()),Eo.exports}var O=Zo();const ri=_0(O);var jo={exports:{}},li={},zo={exports:{}},To={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function H0(){return Im||(Im=1,function(i){function r(M,G){var W=M.length;M.push(G);e:for(;0<W;){var ce=W-1>>>1,A=M[ce];if(0<m(A,G))M[ce]=G,M[W]=A,W=ce;else break e}}function o(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var G=M[0],W=M.pop();if(W!==G){M[0]=W;e:for(var ce=0,A=M.length,_=A>>>1;ce<_;){var L=2*(ce+1)-1,Q=M[L],$=L+1,oe=M[$];if(0>m(Q,W))$<A&&0>m(oe,Q)?(M[ce]=oe,M[$]=W,ce=$):(M[ce]=Q,M[L]=W,ce=L);else if($<A&&0>m(oe,W))M[ce]=oe,M[$]=W,ce=$;else break e}}return G}function m(M,G){var W=M.sortIndex-G.sortIndex;return W!==0?W:M.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var b=Date,z=b.now();i.unstable_now=function(){return b.now()-z}}var v=[],p=[],T=1,U=null,w=3,H=!1,q=!1,Y=!1,X=!1,B=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function ae(M){for(var G=o(p);G!==null;){if(G.callback===null)c(p);else if(G.startTime<=M)c(p),G.sortIndex=G.expirationTime,r(v,G);else break;G=o(p)}}function Z(M){if(Y=!1,ae(M),!q)if(o(v)!==null)q=!0,le||(le=!0,Le());else{var G=o(p);G!==null&&Ye(Z,G.startTime-M)}}var le=!1,F=-1,ze=5,Se=-1;function et(){return X?!0:!(i.unstable_now()-Se<ze)}function at(){if(X=!1,le){var M=i.unstable_now();Se=M;var G=!0;try{e:{q=!1,Y&&(Y=!1,k(F),F=-1),H=!0;var W=w;try{t:{for(ae(M),U=o(v);U!==null&&!(U.expirationTime>M&&et());){var ce=U.callback;if(typeof ce=="function"){U.callback=null,w=U.priorityLevel;var A=ce(U.expirationTime<=M);if(M=i.unstable_now(),typeof A=="function"){U.callback=A,ae(M),G=!0;break t}U===o(v)&&c(v),ae(M)}else c(v);U=o(v)}if(U!==null)G=!0;else{var _=o(p);_!==null&&Ye(Z,_.startTime-M),G=!1}}break e}finally{U=null,w=W,H=!1}G=void 0}}finally{G?Le():le=!1}}}var Le;if(typeof V=="function")Le=function(){V(at)};else if(typeof MessageChannel<"u"){var Vt=new MessageChannel,Zt=Vt.port2;Vt.port1.onmessage=at,Le=function(){Zt.postMessage(null)}}else Le=function(){B(at,0)};function Ye(M,G){F=B(function(){M(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(M){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var W=w;w=G;try{return M()}finally{w=W}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=w;w=M;try{return G()}finally{w=W}},i.unstable_scheduleCallback=function(M,G,W){var ce=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ce+W:ce):W=ce,M){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=W+A,M={id:T++,callback:G,priorityLevel:M,startTime:W,expirationTime:A,sortIndex:-1},W>ce?(M.sortIndex=W,r(p,M),o(v)===null&&M===o(p)&&(Y?(k(F),F=-1):Y=!0,Ye(Z,W-ce))):(M.sortIndex=A,r(v,M),q||H||(q=!0,le||(le=!0,Le()))),M},i.unstable_shouldYield=et,i.unstable_wrapCallback=function(M){var G=w;return function(){var W=w;w=G;try{return M.apply(this,arguments)}finally{w=W}}}}(To)),To}var eh;function q0(){return eh||(eh=1,zo.exports=H0()),zo.exports}var Ro={exports:{}},Ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function L0(){if(th)return Ie;th=1;var i=Zo();function r(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(v,p,T){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:""+U,children:v,containerInfo:p,implementation:T}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ie.createPortal=function(v,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return h(v,p,null,T)},Ie.flushSync=function(v){var p=b.T,T=c.p;try{if(b.T=null,c.p=2,v)return v()}finally{b.T=p,c.p=T,c.d.f()}},Ie.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(v,p))},Ie.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Ie.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var T=p.as,U=z(T,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?c.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:U,integrity:w,fetchPriority:H}):T==="script"&&c.d.X(v,{crossOrigin:U,integrity:w,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ie.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=z(p.as,p.crossOrigin);c.d.M(v,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(v)},Ie.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,U=z(T,p.crossOrigin);c.d.L(v,T,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ie.preloadModule=function(v,p){if(typeof v=="string")if(p){var T=z(p.as,p.crossOrigin);c.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(v)},Ie.requestFormReset=function(v){c.d.r(v)},Ie.unstable_batchedUpdates=function(v,p){return v(p)},Ie.useFormState=function(v,p,T){return b.H.useFormState(v,p,T)},Ie.useFormStatus=function(){return b.H.useHostTransitionStatus()},Ie.version="19.1.0",Ie}var ah;function Y0(){if(ah)return Ro.exports;ah=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Ro.exports=L0(),Ro.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function G0(){if(lh)return li;lh=1;var i=q0(),r=Zo(),o=Y0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(h(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return z(n),e;if(u===l)return z(n),t;u=u.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=u;else{for(var s=!1,d=n.child;d;){if(d===a){s=!0,a=n,l=u;break}if(d===l){s=!0,l=n,a=u;break}d=d.sibling}if(!s){for(d=u.child;d;){if(d===a){s=!0,a=u,l=n;break}if(d===l){s=!0,l=u,a=n;break}d=d.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,U=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),V=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),at=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=at&&e[at]||e["@@iterator"],typeof e=="function"?e:null)}var Vt=Symbol.for("react.client.reference");function Zt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Vt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case X:return"Profiler";case Y:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case V:return(e.displayName||"Context")+".Provider";case k:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Zt(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return Zt(e(t))}catch{}}return null}var Ye=Array.isArray,M=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ce=[],A=-1;function _(e){return{current:e}}function L(e){0>A||(e.current=ce[A],ce[A]=null,A--)}function Q(e,t){A++,ce[A]=e.current,e.current=t}var $=_(null),oe=_(null),I=_(null),Ge=_(null);function pe(e,t){switch(Q(I,t),Q(oe,e),Q($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Em(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Em(t),e=jm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L($),Q($,e)}function $e(){L($),L(oe),L(I)}function Ha(e){e.memoizedState!==null&&Q(Ge,e);var t=$.current,a=jm(t,e.type);t!==a&&(Q(oe,e),Q($,a))}function Kt(e){oe.current===e&&(L($),L(oe)),Ge.current===e&&(L(Ge),Wn._currentValue=W)}var bt=Object.prototype.hasOwnProperty,cr=i.unstable_scheduleCallback,or=i.unstable_cancelCallback,fp=i.unstable_shouldYield,dp=i.unstable_requestPaint,wt=i.unstable_now,mp=i.unstable_getCurrentPriorityLevel,as=i.unstable_ImmediatePriority,ls=i.unstable_UserBlockingPriority,pi=i.unstable_NormalPriority,hp=i.unstable_LowPriority,ns=i.unstable_IdlePriority,pp=i.log,gp=i.unstable_setDisableYieldValue,nn=null,ot=null;function da(e){if(typeof pp=="function"&&gp(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(nn,e)}catch{}}var st=Math.clz32?Math.clz32:yp,Ap=Math.log,vp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(Ap(e)/vp|0)|0}var gi=256,Ai=4194304;function qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~u,l!==0?n=qa(l):(s&=d,s!==0?n=qa(s):a||(a=d&~e,a!==0&&(n=qa(a))))):(d=l&~u,d!==0?n=qa(d):s!==0?n=qa(s):a||(a=l&~e,a!==0&&(n=qa(a)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:n}function un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function is(){var e=gi;return gi<<=1,(gi&4194048)===0&&(gi=256),e}function us(){var e=Ai;return Ai<<=1,(Ai&62914560)===0&&(Ai=4194304),e}function sr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xp(e,t,a,l,n,u){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,g=e.expirationTimes,E=e.hiddenUpdates;for(a=s&~a;0<a;){var C=31-st(a),N=1<<C;d[C]=0,g[C]=-1;var j=E[C];if(j!==null)for(E[C]=null,C=0;C<j.length;C++){var R=j[C];R!==null&&(R.lane&=-536870913)}a&=~N}l!==0&&rs(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(s&~t))}function rs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-st(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function cs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-st(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function os(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Xm(e.type))}function Sp(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var ma=Math.random().toString(36).slice(2),We="__reactFiber$"+ma,lt="__reactProps$"+ma,cl="__reactContainer$"+ma,mr="__reactEvents$"+ma,Ep="__reactListeners$"+ma,jp="__reactHandles$"+ma,ss="__reactResources$"+ma,cn="__reactMarker$"+ma;function hr(e){delete e[We],delete e[lt],delete e[mr],delete e[Ep],delete e[jp]}function ol(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[cl]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Mm(e);e!==null;){if(a=e[We])return a;e=Mm(e)}return t}e=a,a=e.parentNode}return null}function sl(e){if(e=e[We]||e[cl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function on(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function fl(e){var t=e[ss];return t||(t=e[ss]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[cn]=!0}var fs=new Set,ds={};function La(e,t){dl(e,t),dl(e+"Capture",t)}function dl(e,t){for(ds[e]=t,e=0;e<t.length;e++)fs.add(t[e])}var zp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ms={},hs={};function Tp(e){return bt.call(hs,e)?!0:bt.call(ms,e)?!1:zp.test(e)?hs[e]=!0:(ms[e]=!0,!1)}function yi(e,t,a){if(Tp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var pr,ps;function ml(e){if(pr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pr=t&&t[1]||"",ps=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pr+e+ps}var gr=!1;function Ar(e,t){if(!e||gr)return"";gr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(R){var j=R}Reflect.construct(e,[],N)}else{try{N.call()}catch(R){j=R}e.call(N.prototype)}}else{try{throw Error()}catch(R){j=R}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(R){if(R&&j&&typeof R.stack=="string")return[R.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),s=u[0],d=u[1];if(s&&d){var g=s.split(`
`),E=d.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===E.length)for(l=g.length-1,n=E.length-1;1<=l&&0<=n&&g[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==E[n]){var C=`
`+g[l].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=l&&0<=n);break}}}finally{gr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ml(a):""}function Rp(e){switch(e.tag){case 26:case 27:case 5:return ml(e.type);case 16:return ml("Lazy");case 13:return ml("Suspense");case 19:return ml("SuspenseList");case 0:case 15:return Ar(e.type,!1);case 11:return Ar(e.type.render,!1);case 1:return Ar(e.type,!0);case 31:return ml("Activity");default:return""}}function gs(e){try{var t="";do t+=Rp(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function As(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mp(e){var t=As(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){l=""+s,u.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){e._valueTracker||(e._valueTracker=Mp(e))}function vs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=As(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cp=/[\n"\\]/g;function St(e){return e.replace(Cp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vr(e,t,a,l,n,u,s,d){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?yr(e,s,xt(t)):a!=null?yr(e,s,xt(a)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+xt(d):e.removeAttribute("name")}function ys(e,t,a,l,n,u,s,d){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function yr(e,t,a){t==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function bs(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function xs(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Ye(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function pl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Dp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ss(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Dp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Es(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ss(e,n,l)}else for(var u in t)t.hasOwnProperty(u)&&Ss(e,u,t[u])}function br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Np=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ei(e){return Np.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xr=null;function Sr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,Al=null;function js(e){var t=sl(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[lt]||null;if(!n)throw Error(c(90));vr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&vs(l)}break e;case"textarea":bs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&hl(e,!!a.multiple,t,!1)}}}var Er=!1;function zs(e,t,a){if(Er)return e(t,a);Er=!0;try{var l=e(t);return l}finally{if(Er=!1,(gl!==null||Al!==null)&&(cu(),gl&&(t=gl,e=Al,Al=gl=null,js(t),e)))for(t=0;t<e.length;t++)js(e[t])}}function sn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jr=!1;if(kt)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){jr=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{jr=!1}var ha=null,zr=null,ji=null;function Ts(){if(ji)return ji;var e,t=zr,a=t.length,l,n="value"in ha?ha.value:ha.textContent,u=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[u-l];l++);return ji=n.slice(e,1<l?1-l:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function Rs(){return!1}function nt(e){function t(a,l,n,u,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(u):u[d]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ti:Rs,this.isPropagationStopped=Rs,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=nt(Ya),dn=T({},Ya,{view:0,detail:0}),_p=nt(dn),Tr,Rr,mn,Mi=T({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Tr=e.screenX-mn.screenX,Rr=e.screenY-mn.screenY):Rr=Tr=0,mn=e),Tr)},movementY:function(e){return"movementY"in e?e.movementY:Rr}}),Ms=nt(Mi),Up=T({},Mi,{dataTransfer:0}),wp=nt(Up),Bp=T({},dn,{relatedTarget:0}),Mr=nt(Bp),Hp=T({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=nt(Hp),Lp=T({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=nt(Lp),Gp=T({},Ya,{data:0}),Cs=nt(Gp),Qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vp[e])?!!t[e]:!1}function Cr(){return Zp}var Kp=T({},dn,{key:function(e){if(e.key){var t=Qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jp=nt(Kp),kp=T({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=nt(kp),Fp=T({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr}),$p=nt(Fp),Wp=T({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=nt(Wp),Ip=T({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=nt(Ip),tg=T({},Ya,{newState:0,oldState:0}),ag=nt(tg),lg=[9,13,27,32],Dr=kt&&"CompositionEvent"in window,hn=null;kt&&"documentMode"in document&&(hn=document.documentMode);var ng=kt&&"TextEvent"in window&&!hn,Os=kt&&(!Dr||hn&&8<hn&&11>=hn),Ns=" ",_s=!1;function Us(e,t){switch(e){case"keyup":return lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vl=!1;function ig(e,t){switch(e){case"compositionend":return ws(t);case"keypress":return t.which!==32?null:(_s=!0,Ns);case"textInput":return e=t.data,e===Ns&&_s?null:e;default:return null}}function ug(e,t){if(vl)return e==="compositionend"||!Dr&&Us(e,t)?(e=Ts(),ji=zr=ha=null,vl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Os&&t.locale!=="ko"?null:t.data;default:return null}}var rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rg[e.type]:t==="textarea"}function Hs(e,t,a,l){gl?Al?Al.push(l):Al=[l]:gl=l,t=hu(t,"onChange"),0<t.length&&(a=new Ri("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var pn=null,gn=null;function cg(e){vm(e,0)}function Ci(e){var t=on(e);if(vs(t))return e}function qs(e,t){if(e==="change")return t}var Ls=!1;if(kt){var Or;if(kt){var Nr="oninput"in document;if(!Nr){var Ys=document.createElement("div");Ys.setAttribute("oninput","return;"),Nr=typeof Ys.oninput=="function"}Or=Nr}else Or=!1;Ls=Or&&(!document.documentMode||9<document.documentMode)}function Gs(){pn&&(pn.detachEvent("onpropertychange",Qs),gn=pn=null)}function Qs(e){if(e.propertyName==="value"&&Ci(gn)){var t=[];Hs(t,gn,e,Sr(e)),zs(cg,t)}}function og(e,t,a){e==="focusin"?(Gs(),pn=t,gn=a,pn.attachEvent("onpropertychange",Qs)):e==="focusout"&&Gs()}function sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(gn)}function fg(e,t){if(e==="click")return Ci(t)}function dg(e,t){if(e==="input"||e==="change")return Ci(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:mg;function An(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!bt.call(t,n)||!ft(e[n],t[n]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,t){var a=Xs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xs(a)}}function Zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ks(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Si(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Si(e.document)}return t}function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hg=kt&&"documentMode"in document&&11>=document.documentMode,yl=null,Ur=null,vn=null,wr=!1;function Js(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wr||yl==null||yl!==Si(l)||(l=yl,"selectionStart"in l&&_r(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vn&&An(vn,l)||(vn=l,l=hu(Ur,"onSelect"),0<l.length&&(t=new Ri("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=yl)))}function Ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var bl={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Br={},ks={};kt&&(ks=document.createElement("div").style,"AnimationEvent"in window||(delete bl.animationend.animation,delete bl.animationiteration.animation,delete bl.animationstart.animation),"TransitionEvent"in window||delete bl.transitionend.transition);function Qa(e){if(Br[e])return Br[e];if(!bl[e])return e;var t=bl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ks)return Br[e]=t[a];return e}var Fs=Qa("animationend"),$s=Qa("animationiteration"),Ws=Qa("animationstart"),pg=Qa("transitionrun"),gg=Qa("transitionstart"),Ag=Qa("transitioncancel"),Ps=Qa("transitionend"),Is=new Map,Hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hr.push("scrollEnd");function Ot(e,t){Is.set(e,t),La(t,[e])}var ef=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=ef.get(e);return a!==void 0?a:(t={value:e,source:t,stack:gs(t)},ef.set(e,t),t)}return{value:e,source:t,stack:gs(t)}}var jt=[],xl=0,qr=0;function Di(){for(var e=xl,t=qr=xl=0;t<e;){var a=jt[t];jt[t++]=null;var l=jt[t];jt[t++]=null;var n=jt[t];jt[t++]=null;var u=jt[t];if(jt[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}u!==0&&tf(a,n,u)}}function Oi(e,t,a,l){jt[xl++]=e,jt[xl++]=t,jt[xl++]=a,jt[xl++]=l,qr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lr(e,t,a,l){return Oi(e,t,a,l),Ni(e)}function Sl(e,t){return Oi(e,null,null,t),Ni(e)}function tf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,u=e.return;u!==null;)u.childLanes|=a,l=u.alternate,l!==null&&(l.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-st(a),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),u):null}function Ni(e){if(50<Xn)throw Xn=0,Zc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var El={};function vg(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,l){return new vg(e,t,a,l)}function Yr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function af(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,a,l,n,u){var s=0;if(l=e,typeof e=="function")Yr(e)&&(s=1);else if(typeof e=="string")s=b0(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=dt(31,a,t,n),e.elementType=Se,e.lanes=u,e;case q:return Xa(a.children,n,u,t);case Y:s=8,n|=24;break;case X:return e=dt(12,a,t,n|2),e.elementType=X,e.lanes=u,e;case Z:return e=dt(13,a,t,n),e.elementType=Z,e.lanes=u,e;case le:return e=dt(19,a,t,n),e.elementType=le,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case V:s=10;break e;case k:s=9;break e;case ae:s=11;break e;case F:s=14;break e;case ze:s=16,l=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=dt(s,a,t,n),t.elementType=e,t.type=l,t.lanes=u,t}function Xa(e,t,a,l){return e=dt(7,e,l,t),e.lanes=a,e}function Gr(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function Qr(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jl=[],zl=0,Ui=null,wi=0,zt=[],Tt=0,Va=null,$t=1,Wt="";function Za(e,t){jl[zl++]=wi,jl[zl++]=Ui,Ui=e,wi=t}function lf(e,t,a){zt[Tt++]=$t,zt[Tt++]=Wt,zt[Tt++]=Va,Va=e;var l=$t;e=Wt;var n=32-st(l)-1;l&=~(1<<n),a+=1;var u=32-st(t)+n;if(30<u){var s=n-n%5;u=(l&(1<<s)-1).toString(32),l>>=s,n-=s,$t=1<<32-st(t)+n|a<<n|l,Wt=u+e}else $t=1<<u|a<<n|l,Wt=e}function Xr(e){e.return!==null&&(Za(e,1),lf(e,1,0))}function Vr(e){for(;e===Ui;)Ui=jl[--zl],jl[zl]=null,wi=jl[--zl],jl[zl]=null;for(;e===Va;)Va=zt[--Tt],zt[Tt]=null,Wt=zt[--Tt],zt[Tt]=null,$t=zt[--Tt],zt[Tt]=null}var tt=null,De=null,he=!1,Ka=null,Bt=!1,Zr=Error(c(519));function Ja(e){var t=Error(c(418,""));throw xn(Et(t,e)),Zr}function nf(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[lt]=l,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<Zn.length;a++)fe(Zn[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),ys(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),xi(t);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),xs(t,l.value,l.defaultValue,l.children),xi(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Sm(t.textContent,a)?(l.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),l.onScroll!=null&&fe("scroll",t),l.onScrollEnd!=null&&fe("scrollend",t),l.onClick!=null&&(t.onclick=pu),t=!0):t=!1,t||Ja(e)}function uf(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:tt=tt.return}}function yn(e){if(e!==tt)return!1;if(!he)return uf(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ro(e.type,e.memoizedProps)),a=!a),a&&De&&Ja(e),uf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){De=_t(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}De=null}}else t===27?(t=De,Da(e.type)?(e=fo,fo=null,De=e):De=t):De=tt?_t(e.stateNode.nextSibling):null;return!0}function bn(){De=tt=null,he=!1}function rf(){var e=Ka;return e!==null&&(rt===null?rt=e:rt.push.apply(rt,e),Ka=null),e}function xn(e){Ka===null?Ka=[e]:Ka.push(e)}var Kr=_(null),ka=null,Pt=null;function pa(e,t,a){Q(Kr,t._currentValue),t._currentValue=a}function It(e){e._currentValue=Kr.current,L(Kr)}function Jr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function kr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var s=n.child;u=u.firstContext;e:for(;u!==null;){var d=u;u=n;for(var g=0;g<t.length;g++)if(d.context===t[g]){u.lanes|=a,d=u.alternate,d!==null&&(d.lanes|=a),Jr(u.return,a,e),l||(s=null);break e}u=d.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(c(341));s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),Jr(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function Sn(e,t,a,l){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var d=n.type;ft(n.pendingProps.value,s.value)||(e!==null?e.push(d):e=[d])}}else if(n===Ge.current){if(s=n.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Wn):e=[Wn])}n=n.return}e!==null&&kr(t,e,a,l),t.flags|=262144}function Bi(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){ka=e,Pt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return cf(ka,e)}function Hi(e,t){return ka===null&&Fa(e),cf(e,t)}function cf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Pt===null){if(e===null)throw Error(c(308));Pt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pt=Pt.next=t;return a}var yg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bg=i.unstable_scheduleCallback,xg=i.unstable_NormalPriority,He={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fr(){return{controller:new yg,data:new Map,refCount:0}}function En(e){e.refCount--,e.refCount===0&&bg(xg,function(){e.controller.abort()})}var jn=null,$r=0,Tl=0,Rl=null;function Sg(e,t){if(jn===null){var a=jn=[];$r=0,Tl=Pc(),Rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $r++,t.then(of,of),t}function of(){if(--$r===0&&jn!==null){Rl!==null&&(Rl.status="fulfilled");var e=jn;jn=null,Tl=0,Rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Eg(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var sf=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sg(e,t),sf!==null&&sf(e,t)};var $a=_(null);function Wr(){var e=$a.current;return e!==null?e:je.pooledCache}function qi(e,t){t===null?Q($a,$a.current):Q($a,t.pool)}function ff(){var e=Wr();return e===null?null:{parent:He._currentValue,pool:e}}var zn=Error(c(460)),df=Error(c(474)),Li=Error(c(542)),Pr={then:function(){}};function mf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yi(){}function hf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Yi,Yi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gf(e),e;default:if(typeof t.status=="string")t.then(Yi,Yi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gf(e),e}throw Tn=t,zn}}var Tn=null;function pf(){if(Tn===null)throw Error(c(459));var e=Tn;return Tn=null,e}function gf(e){if(e===zn||e===Li)throw Error(c(483))}var ga=!1;function Ir(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ae&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Ni(e),tf(e,null,a),t}return Oi(e,l,t,a),Ni(e)}function Rn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,cs(e,a)}}function tc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=s:u=u.next=s,a=a.next}while(a!==null);u===null?n=u=t:u=u.next=t}else n=u=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ac=!1;function Mn(){if(ac){var e=Rl;if(e!==null)throw e}}function Cn(e,t,a,l){ac=!1;var n=e.updateQueue;ga=!1;var u=n.firstBaseUpdate,s=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var g=d,E=g.next;g.next=null,s===null?u=E:s.next=E,s=g;var C=e.alternate;C!==null&&(C=C.updateQueue,d=C.lastBaseUpdate,d!==s&&(d===null?C.firstBaseUpdate=E:d.next=E,C.lastBaseUpdate=g))}if(u!==null){var N=n.baseState;s=0,C=E=g=null,d=u;do{var j=d.lane&-536870913,R=j!==d.lane;if(R?(de&j)===j:(l&j)===j){j!==0&&j===Tl&&(ac=!0),C!==null&&(C=C.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var te=e,P=d;j=t;var xe=a;switch(P.tag){case 1:if(te=P.payload,typeof te=="function"){N=te.call(xe,N,j);break e}N=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=P.payload,j=typeof te=="function"?te.call(xe,N,j):te,j==null)break e;N=T({},N,j);break e;case 2:ga=!0}}j=d.callback,j!==null&&(e.flags|=64,R&&(e.flags|=8192),R=n.callbacks,R===null?n.callbacks=[j]:R.push(j))}else R={lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},C===null?(E=C=R,g=N):C=C.next=R,s|=j;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;R=d,d=R.next,R.next=null,n.lastBaseUpdate=R,n.shared.pending=null}}while(!0);C===null&&(g=N),n.baseState=g,n.firstBaseUpdate=E,n.lastBaseUpdate=C,u===null&&(n.shared.lanes=0),Ta|=s,e.lanes=s,e.memoizedState=N}}function Af(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function vf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Af(a[e],t)}var Ml=_(null),Gi=_(0);function yf(e,t){e=ua,Q(Gi,e),Q(Ml,t),ua=e|t.baseLanes}function lc(){Q(Gi,ua),Q(Ml,Ml.current)}function nc(){ua=Gi.current,L(Ml),L(Gi)}var ya=0,ue=null,ye=null,Ue=null,Qi=!1,Cl=!1,Wa=!1,Xi=0,Dn=0,Dl=null,jg=0;function Ne(){throw Error(c(321))}function ic(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function uc(e,t,a,l,n,u){return ya=u,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?ad:ld,Wa=!1,u=a(l,n),Wa=!1,Cl&&(u=xf(t,a,l,n)),bf(e),u}function bf(e){M.H=Fi;var t=ye!==null&&ye.next!==null;if(ya=0,Ue=ye=ue=null,Qi=!1,Dn=0,Dl=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Bi(e)&&(Xe=!0))}function xf(e,t,a,l){ue=e;var n=0;do{if(Cl&&(Dl=null),Dn=0,Cl=!1,25<=n)throw Error(c(301));if(n+=1,Ue=ye=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}M.H=Og,u=t(a,l)}while(Cl);return u}function zg(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?On(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(ue.flags|=1024),t}function rc(){var e=Xi!==0;return Xi=0,e}function cc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function oc(e){if(Qi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qi=!1}ya=0,Ue=ye=ue=null,Cl=!1,Dn=Xi=0,Dl=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function we(){if(ye===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,ye=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function On(e){var t=Dn;return Dn+=1,Dl===null&&(Dl=[]),e=hf(Dl,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?ad:ld),e}function Vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return On(e);if(e.$$typeof===V)return Pe(e)}throw Error(c(438,String(e)))}function fc(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=sc(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=et;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=we();return dc(t,ye,e)}function dc(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var s=n.next;n.next=u.next,u.next=s}t.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var d=s=null,g=null,E=t,C=!1;do{var N=E.lane&-536870913;if(N!==E.lane?(de&N)===N:(ya&N)===N){var j=E.revertLane;if(j===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),N===Tl&&(C=!0);else if((ya&j)===j){E=E.next,j===Tl&&(C=!0);continue}else N={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(d=g=N,s=u):g=g.next=N,ue.lanes|=j,Ta|=j;N=E.action,Wa&&a(u,N),u=E.hasEagerState?E.eagerState:a(u,N)}else j={lane:N,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(d=g=j,s=u):g=g.next=j,ue.lanes|=N,Ta|=N;E=E.next}while(E!==null&&E!==t);if(g===null?s=u:g.next=d,!ft(u,e.memoizedState)&&(Xe=!0,C&&(a=Rl,a!==null)))throw a;e.memoizedState=u,e.baseState=s,e.baseQueue=g,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function mc(e){var t=we(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,u=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do u=e(u,s.action),s=s.next;while(s!==n);ft(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,l]}function Sf(e,t,a){var l=ue,n=we(),u=he;if(u){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!ft((ye||n).memoizedState,a);s&&(n.memoizedState=a,Xe=!0),n=n.queue;var d=zf.bind(null,l,n,e);if(Nn(2048,8,d,[e]),n.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Ol(9,Ki(),jf.bind(null,l,n,a,t),null),je===null)throw Error(c(349));u||(ya&124)!==0||Ef(l,t,a)}return a}function Ef(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=sc(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function jf(e,t,a,l){t.value=a,t.getSnapshot=l,Tf(t)&&Rf(e)}function zf(e,t,a){return a(function(){Tf(t)&&Rf(e)})}function Tf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Rf(e){var t=Sl(e,2);t!==null&&At(t,e,2)}function hc(e){var t=it();if(typeof e=="function"){var a=e;if(e=a(),Wa){da(!0);try{a()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function Mf(e,t,a,l){return e.baseState=a,dc(e,ye,typeof l=="function"?l:ea)}function Tg(e,t,a,l,n){if(ki(e))throw Error(c(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};M.T!==null?a(!0):u.isTransition=!1,l(u),a=t.pending,a===null?(u.next=t.pending=u,Cf(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Cf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var u=M.T,s={};M.T=s;try{var d=a(n,l),g=M.S;g!==null&&g(s,d),Df(e,t,d)}catch(E){pc(e,t,E)}finally{M.T=u}}else try{u=a(n,l),Df(e,t,u)}catch(E){pc(e,t,E)}}function Df(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Of(e,t,l)},function(l){return pc(e,t,l)}):Of(e,t,a)}function Of(e,t,a){t.status="fulfilled",t.value=a,Nf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cf(e,a)))}function pc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Nf(t),t=t.next;while(t!==l)}e.action=null}function Nf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _f(e,t){return t}function Uf(e,t){if(he){var a=je.formState;if(a!==null){e:{var l=ue;if(he){if(De){t:{for(var n=De,u=Bt;n.nodeType!==8;){if(!u){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){De=_t(n.nextSibling),l=n.data==="F!";break e}}Ja(l)}l=!1}l&&(t=a[0])}}return a=it(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_f,lastRenderedState:t},a.queue=l,a=If.bind(null,ue,l),l.dispatch=a,l=hc(!1),u=bc.bind(null,ue,!1,l.queue),l=it(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Tg.bind(null,ue,n,u,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function wf(e){var t=we();return Bf(t,ye,e)}function Bf(e,t,a){if(t=dc(e,t,_f)[0],e=Zi(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=On(t)}catch(s){throw s===zn?Li:s}else l=t;t=we();var n=t.queue,u=n.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Ol(9,Ki(),Rg.bind(null,n,a),null)),[l,u,e]}function Rg(e,t){e.action=t}function Hf(e){var t=we(),a=ye;if(a!==null)return Bf(t,a,e);we(),t=t.memoizedState,a=we();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ol(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ue.updateQueue,t===null&&(t=sc(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ki(){return{destroy:void 0,resource:void 0}}function qf(){return we().memoizedState}function Ji(e,t,a,l){var n=it();l=l===void 0?null:l,ue.flags|=e,n.memoizedState=Ol(1|t,Ki(),a,l)}function Nn(e,t,a,l){var n=we();l=l===void 0?null:l;var u=n.memoizedState.inst;ye!==null&&l!==null&&ic(l,ye.memoizedState.deps)?n.memoizedState=Ol(t,u,a,l):(ue.flags|=e,n.memoizedState=Ol(1|t,u,a,l))}function Lf(e,t){Ji(8390656,8,e,t)}function Yf(e,t){Nn(2048,8,e,t)}function Gf(e,t){return Nn(4,2,e,t)}function Qf(e,t){return Nn(4,4,e,t)}function Xf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,a){a=a!=null?a.concat([e]):null,Nn(4,4,Xf.bind(null,t,e),a)}function gc(){}function Zf(e,t){var a=we();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ic(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Kf(e,t){var a=we();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ic(t,l[1]))return l[0];if(l=e(),Wa){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l}function Ac(e,t,a){return a===void 0||(ya&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Fd(),ue.lanes|=e,Ta|=e,a)}function Jf(e,t,a,l){return ft(a,t)?a:Ml.current!==null?(e=Ac(e,a,l),ft(e,t)||(Xe=!0),e):(ya&42)===0?(Xe=!0,e.memoizedState=a):(e=Fd(),ue.lanes|=e,Ta|=e,t)}function kf(e,t,a,l,n){var u=G.p;G.p=u!==0&&8>u?u:8;var s=M.T,d={};M.T=d,bc(e,!1,t,a);try{var g=n(),E=M.S;if(E!==null&&E(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var C=Eg(g,l);_n(e,t,C,gt(e))}else _n(e,t,l,gt(e))}catch(N){_n(e,t,{then:function(){},status:"rejected",reason:N},gt())}finally{G.p=u,M.T=s}}function Mg(){}function vc(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Ff(e).queue;kf(e,n,t,W,a===null?Mg:function(){return $f(e),a(l)})}function Ff(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $f(e){var t=Ff(e).next.queue;_n(e,t,{},gt())}function yc(){return Pe(Wn)}function Wf(){return we().memoizedState}function Pf(){return we().memoizedState}function Cg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=Aa(a);var l=va(t,e,a);l!==null&&(At(l,t,a),Rn(l,t,a)),t={cache:Fr()},e.payload=t;return}t=t.return}}function Dg(e,t,a){var l=gt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ki(e)?ed(t,a):(a=Lr(e,t,a,l),a!==null&&(At(a,e,l),td(a,t,l)))}function If(e,t,a){var l=gt();_n(e,t,a,l)}function _n(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ki(e))ed(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var s=t.lastRenderedState,d=u(s,a);if(n.hasEagerState=!0,n.eagerState=d,ft(d,s))return Oi(e,t,n,0),je===null&&Di(),!1}catch{}finally{}if(a=Lr(e,t,n,l),a!==null)return At(a,e,l),td(a,t,l),!0}return!1}function bc(e,t,a,l){if(l={lane:2,revertLane:Pc(),action:l,hasEagerState:!1,eagerState:null,next:null},ki(e)){if(t)throw Error(c(479))}else t=Lr(e,a,l,2),t!==null&&At(t,e,2)}function ki(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function ed(e,t){Cl=Qi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function td(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,cs(e,a)}}var Fi={readContext:Pe,use:Vi,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},ad={readContext:Pe,use:Vi,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Lf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ji(4194308,4,Xf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ji(4194308,4,e,t)},useInsertionEffect:function(e,t){Ji(4,2,e,t)},useMemo:function(e,t){var a=it();t=t===void 0?null:t;var l=e();if(Wa){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=it();if(a!==void 0){var n=a(t);if(Wa){da(!0);try{a(t)}finally{da(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Dg.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=hc(e);var t=e.queue,a=If.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:gc,useDeferredValue:function(e,t){var a=it();return Ac(a,e,t)},useTransition:function(){var e=hc(!1);return e=kf.bind(null,ue,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ue,n=it();if(he){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),je===null)throw Error(c(349));(de&124)!==0||Ef(l,t,a)}n.memoizedState=a;var u={value:a,getSnapshot:t};return n.queue=u,Lf(zf.bind(null,l,u,e),[e]),l.flags|=2048,Ol(9,Ki(),jf.bind(null,l,u,a,t),null),a},useId:function(){var e=it(),t=je.identifierPrefix;if(he){var a=Wt,l=$t;a=(l&~(1<<32-st(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=Xi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=jg++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:yc,useFormState:Uf,useActionState:Uf,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=bc.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return it().memoizedState=Cg.bind(null,ue)}},ld={readContext:Pe,use:Vi,useCallback:Zf,useContext:Pe,useEffect:Yf,useImperativeHandle:Vf,useInsertionEffect:Gf,useLayoutEffect:Qf,useMemo:Kf,useReducer:Zi,useRef:qf,useState:function(){return Zi(ea)},useDebugValue:gc,useDeferredValue:function(e,t){var a=we();return Jf(a,ye.memoizedState,e,t)},useTransition:function(){var e=Zi(ea)[0],t=we().memoizedState;return[typeof e=="boolean"?e:On(e),t]},useSyncExternalStore:Sf,useId:Wf,useHostTransitionStatus:yc,useFormState:wf,useActionState:wf,useOptimistic:function(e,t){var a=we();return Mf(a,ye,e,t)},useMemoCache:fc,useCacheRefresh:Pf},Og={readContext:Pe,use:Vi,useCallback:Zf,useContext:Pe,useEffect:Yf,useImperativeHandle:Vf,useInsertionEffect:Gf,useLayoutEffect:Qf,useMemo:Kf,useReducer:mc,useRef:qf,useState:function(){return mc(ea)},useDebugValue:gc,useDeferredValue:function(e,t){var a=we();return ye===null?Ac(a,e,t):Jf(a,ye.memoizedState,e,t)},useTransition:function(){var e=mc(ea)[0],t=we().memoizedState;return[typeof e=="boolean"?e:On(e),t]},useSyncExternalStore:Sf,useId:Wf,useHostTransitionStatus:yc,useFormState:Hf,useActionState:Hf,useOptimistic:function(e,t){var a=we();return ye!==null?Mf(a,ye,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fc,useCacheRefresh:Pf},Nl=null,Un=0;function $i(e){var t=Un;return Un+=1,Nl===null&&(Nl=[]),hf(Nl,e,t)}function wn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wi(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nd(e){var t=e._init;return t(e._payload)}function id(e){function t(x,y){if(e){var S=x.deletions;S===null?(x.deletions=[y],x.flags|=16):S.push(y)}}function a(x,y){if(!e)return null;for(;y!==null;)t(x,y),y=y.sibling;return null}function l(x){for(var y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function n(x,y){return x=Ft(x,y),x.index=0,x.sibling=null,x}function u(x,y,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<y?(x.flags|=67108866,y):S):(x.flags|=67108866,y)):(x.flags|=1048576,y)}function s(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function d(x,y,S,D){return y===null||y.tag!==6?(y=Gr(S,x.mode,D),y.return=x,y):(y=n(y,S),y.return=x,y)}function g(x,y,S,D){var K=S.type;return K===q?C(x,y,S.props.children,D,S.key):y!==null&&(y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ze&&nd(K)===y.type)?(y=n(y,S.props),wn(y,S),y.return=x,y):(y=_i(S.type,S.key,S.props,null,x.mode,D),wn(y,S),y.return=x,y)}function E(x,y,S,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Qr(S,x.mode,D),y.return=x,y):(y=n(y,S.children||[]),y.return=x,y)}function C(x,y,S,D,K){return y===null||y.tag!==7?(y=Xa(S,x.mode,D,K),y.return=x,y):(y=n(y,S),y.return=x,y)}function N(x,y,S){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Gr(""+y,x.mode,S),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case w:return S=_i(y.type,y.key,y.props,null,x.mode,S),wn(S,y),S.return=x,S;case H:return y=Qr(y,x.mode,S),y.return=x,y;case ze:var D=y._init;return y=D(y._payload),N(x,y,S)}if(Ye(y)||Le(y))return y=Xa(y,x.mode,S,null),y.return=x,y;if(typeof y.then=="function")return N(x,$i(y),S);if(y.$$typeof===V)return N(x,Hi(x,y),S);Wi(x,y)}return null}function j(x,y,S,D){var K=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return K!==null?null:d(x,y,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case w:return S.key===K?g(x,y,S,D):null;case H:return S.key===K?E(x,y,S,D):null;case ze:return K=S._init,S=K(S._payload),j(x,y,S,D)}if(Ye(S)||Le(S))return K!==null?null:C(x,y,S,D,null);if(typeof S.then=="function")return j(x,y,$i(S),D);if(S.$$typeof===V)return j(x,y,Hi(x,S),D);Wi(x,S)}return null}function R(x,y,S,D,K){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return x=x.get(S)||null,d(y,x,""+D,K);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case w:return x=x.get(D.key===null?S:D.key)||null,g(y,x,D,K);case H:return x=x.get(D.key===null?S:D.key)||null,E(y,x,D,K);case ze:var re=D._init;return D=re(D._payload),R(x,y,S,D,K)}if(Ye(D)||Le(D))return x=x.get(S)||null,C(y,x,D,K,null);if(typeof D.then=="function")return R(x,y,S,$i(D),K);if(D.$$typeof===V)return R(x,y,S,Hi(y,D),K);Wi(y,D)}return null}function te(x,y,S,D){for(var K=null,re=null,J=y,ee=y=0,Ze=null;J!==null&&ee<S.length;ee++){J.index>ee?(Ze=J,J=null):Ze=J.sibling;var me=j(x,J,S[ee],D);if(me===null){J===null&&(J=Ze);break}e&&J&&me.alternate===null&&t(x,J),y=u(me,y,ee),re===null?K=me:re.sibling=me,re=me,J=Ze}if(ee===S.length)return a(x,J),he&&Za(x,ee),K;if(J===null){for(;ee<S.length;ee++)J=N(x,S[ee],D),J!==null&&(y=u(J,y,ee),re===null?K=J:re.sibling=J,re=J);return he&&Za(x,ee),K}for(J=l(J);ee<S.length;ee++)Ze=R(J,x,ee,S[ee],D),Ze!==null&&(e&&Ze.alternate!==null&&J.delete(Ze.key===null?ee:Ze.key),y=u(Ze,y,ee),re===null?K=Ze:re.sibling=Ze,re=Ze);return e&&J.forEach(function(wa){return t(x,wa)}),he&&Za(x,ee),K}function P(x,y,S,D){if(S==null)throw Error(c(151));for(var K=null,re=null,J=y,ee=y=0,Ze=null,me=S.next();J!==null&&!me.done;ee++,me=S.next()){J.index>ee?(Ze=J,J=null):Ze=J.sibling;var wa=j(x,J,me.value,D);if(wa===null){J===null&&(J=Ze);break}e&&J&&wa.alternate===null&&t(x,J),y=u(wa,y,ee),re===null?K=wa:re.sibling=wa,re=wa,J=Ze}if(me.done)return a(x,J),he&&Za(x,ee),K;if(J===null){for(;!me.done;ee++,me=S.next())me=N(x,me.value,D),me!==null&&(y=u(me,y,ee),re===null?K=me:re.sibling=me,re=me);return he&&Za(x,ee),K}for(J=l(J);!me.done;ee++,me=S.next())me=R(J,x,ee,me.value,D),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?ee:me.key),y=u(me,y,ee),re===null?K=me:re.sibling=me,re=me);return e&&J.forEach(function(N0){return t(x,N0)}),he&&Za(x,ee),K}function xe(x,y,S,D){if(typeof S=="object"&&S!==null&&S.type===q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case w:e:{for(var K=S.key;y!==null;){if(y.key===K){if(K=S.type,K===q){if(y.tag===7){a(x,y.sibling),D=n(y,S.props.children),D.return=x,x=D;break e}}else if(y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ze&&nd(K)===y.type){a(x,y.sibling),D=n(y,S.props),wn(D,S),D.return=x,x=D;break e}a(x,y);break}else t(x,y);y=y.sibling}S.type===q?(D=Xa(S.props.children,x.mode,D,S.key),D.return=x,x=D):(D=_i(S.type,S.key,S.props,null,x.mode,D),wn(D,S),D.return=x,x=D)}return s(x);case H:e:{for(K=S.key;y!==null;){if(y.key===K)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){a(x,y.sibling),D=n(y,S.children||[]),D.return=x,x=D;break e}else{a(x,y);break}else t(x,y);y=y.sibling}D=Qr(S,x.mode,D),D.return=x,x=D}return s(x);case ze:return K=S._init,S=K(S._payload),xe(x,y,S,D)}if(Ye(S))return te(x,y,S,D);if(Le(S)){if(K=Le(S),typeof K!="function")throw Error(c(150));return S=K.call(S),P(x,y,S,D)}if(typeof S.then=="function")return xe(x,y,$i(S),D);if(S.$$typeof===V)return xe(x,y,Hi(x,S),D);Wi(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,y!==null&&y.tag===6?(a(x,y.sibling),D=n(y,S),D.return=x,x=D):(a(x,y),D=Gr(S,x.mode,D),D.return=x,x=D),s(x)):a(x,y)}return function(x,y,S,D){try{Un=0;var K=xe(x,y,S,D);return Nl=null,K}catch(J){if(J===zn||J===Li)throw J;var re=dt(29,J,null,x.mode);return re.lanes=D,re.return=x,re}finally{}}}var _l=id(!0),ud=id(!1),Rt=_(null),Ht=null;function ba(e){var t=e.alternate;Q(qe,qe.current&1),Q(Rt,e),Ht===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(Ht=e)}function rd(e){if(e.tag===22){if(Q(qe,qe.current),Q(Rt,e),Ht===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ht=e)}}else xa()}function xa(){Q(qe,qe.current),Q(Rt,Rt.current)}function ta(e){L(Rt),Ht===e&&(Ht=null),L(qe)}var qe=_(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||so(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=gt(),n=Aa(l);n.payload=t,a!=null&&(n.callback=a),t=va(e,n,l),t!==null&&(At(t,e,l),Rn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=gt(),n=Aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=va(e,n,l),t!==null&&(At(t,e,l),Rn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),l=Aa(a);l.tag=2,t!=null&&(l.callback=t),t=va(e,l,a),t!==null&&(At(t,e,a),Rn(t,e,a))}};function cd(e,t,a,l,n,u,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,s):t.prototype&&t.prototype.isPureReactComponent?!An(a,l)||!An(n,u):!0}function od(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Pa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Ii=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sd(e){Ii(e)}function fd(e){console.error(e)}function dd(e){Ii(e)}function eu(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function md(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ec(e,t,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){eu(e,t)},a}function hd(e){return e=Aa(e),e.tag=3,e}function pd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){md(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){md(t,a,l),typeof n!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Ng(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Sn(t,a,n,!0),a=Rt.current,a!==null){switch(a.tag){case 13:return Ht===null?Jc():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Pr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Fc(e,l,n)),!1;case 22:return a.flags|=65536,l===Pr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Fc(e,l,n)),!1}throw Error(c(435,a.tag))}return Fc(e,l,n),Jc(),!1}if(he)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Zr&&(e=Error(c(422),{cause:l}),xn(Et(e,a)))):(l!==Zr&&(t=Error(c(423),{cause:l}),xn(Et(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Et(l,a),n=Ec(e.stateNode,l,n),tc(e,n),Oe!==4&&(Oe=2)),!1;var u=Error(c(520),{cause:l});if(u=Et(u,a),Qn===null?Qn=[u]:Qn.push(u),Oe!==4&&(Oe=2),t===null)return!0;l=Et(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ec(a.stateNode,l,e),tc(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ra===null||!Ra.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=hd(n),pd(n,e,a,l),tc(a,n),!1}a=a.return}while(a!==null);return!1}var gd=Error(c(461)),Xe=!1;function Je(e,t,a,l){t.child=e===null?ud(t,null,a,l):_l(t,e.child,a,l)}function Ad(e,t,a,l,n){a=a.render;var u=t.ref;if("ref"in l){var s={};for(var d in l)d!=="ref"&&(s[d]=l[d])}else s=l;return Fa(t),l=uc(e,t,a,s,u,n),d=rc(),e!==null&&!Xe?(cc(e,t,n),aa(e,t,n)):(he&&d&&Xr(t),t.flags|=1,Je(e,t,l,n),t.child)}function vd(e,t,a,l,n){if(e===null){var u=a.type;return typeof u=="function"&&!Yr(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,yd(e,t,u,l,n)):(e=_i(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Oc(e,n)){var s=u.memoizedProps;if(a=a.compare,a=a!==null?a:An,a(s,l)&&e.ref===t.ref)return aa(e,t,n)}return t.flags|=1,e=Ft(u,l),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,a,l,n){if(e!==null){var u=e.memoizedProps;if(An(u,l)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=l=u,Oc(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,aa(e,t,n)}return jc(e,t,a,l,n)}function bd(e,t,a){var l=t.pendingProps,n=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|a:a,e!==null){for(n=t.child=e.child,u=0;n!==null;)u=u|n.lanes|n.childLanes,n=n.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return xd(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qi(t,u!==null?u.cachePool:null),u!==null?yf(t,u):lc(),rd(t);else return t.lanes=t.childLanes=536870912,xd(e,t,u!==null?u.baseLanes|a:a,a)}else u!==null?(qi(t,u.cachePool),yf(t,u),xa(),t.memoizedState=null):(e!==null&&qi(t,null),lc(),xa());return Je(e,t,n,a),t.child}function xd(e,t,a,l){var n=Wr();return n=n===null?null:{parent:He._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&qi(t,null),lc(),rd(t),e!==null&&Sn(e,t,l,!0),null}function tu(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function jc(e,t,a,l,n){return Fa(t),a=uc(e,t,a,l,void 0,n),l=rc(),e!==null&&!Xe?(cc(e,t,n),aa(e,t,n)):(he&&l&&Xr(t),t.flags|=1,Je(e,t,a,n),t.child)}function Sd(e,t,a,l,n,u){return Fa(t),t.updateQueue=null,a=xf(t,l,a,n),bf(e),l=rc(),e!==null&&!Xe?(cc(e,t,u),aa(e,t,u)):(he&&l&&Xr(t),t.flags|=1,Je(e,t,a,u),t.child)}function Ed(e,t,a,l,n){if(Fa(t),t.stateNode===null){var u=El,s=a.contextType;typeof s=="object"&&s!==null&&(u=Pe(s)),u=new a(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Sc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},Ir(t),s=a.contextType,u.context=typeof s=="object"&&s!==null?Pe(s):El,u.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(xc(t,a,s,l),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&Sc.enqueueReplaceState(u,u.state,null),Cn(t,l,u,n),Mn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var d=t.memoizedProps,g=Pa(a,d);u.props=g;var E=u.context,C=a.contextType;s=El,typeof C=="object"&&C!==null&&(s=Pe(C));var N=a.getDerivedStateFromProps;C=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,C||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d||E!==s)&&od(t,u,l,s),ga=!1;var j=t.memoizedState;u.state=j,Cn(t,l,u,n),Mn(),E=t.memoizedState,d||j!==E||ga?(typeof N=="function"&&(xc(t,a,N,l),E=t.memoizedState),(g=ga||cd(t,a,g,l,j,E,s))?(C||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),u.props=l,u.state=E,u.context=s,l=g):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,ec(e,t),s=t.memoizedProps,C=Pa(a,s),u.props=C,N=t.pendingProps,j=u.context,E=a.contextType,g=El,typeof E=="object"&&E!==null&&(g=Pe(E)),d=a.getDerivedStateFromProps,(E=typeof d=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==N||j!==g)&&od(t,u,l,g),ga=!1,j=t.memoizedState,u.state=j,Cn(t,l,u,n),Mn();var R=t.memoizedState;s!==N||j!==R||ga||e!==null&&e.dependencies!==null&&Bi(e.dependencies)?(typeof d=="function"&&(xc(t,a,d,l),R=t.memoizedState),(C=ga||cd(t,a,C,l,j,R,g)||e!==null&&e.dependencies!==null&&Bi(e.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,R,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,R,g)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=R),u.props=l,u.state=R,u.context=g,l=C):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,tu(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=_l(t,e.child,null,n),t.child=_l(t,null,a,n)):Je(e,t,a,n),t.memoizedState=u.state,e=t.child):e=aa(e,t,n),e}function jd(e,t,a,l){return bn(),t.flags|=256,Je(e,t,a,l),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:ff()}}function Rc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Mt),e}function zd(e,t,a){var l=t.pendingProps,n=!1,u=(t.flags&128)!==0,s;if((s=u)||(s=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(n?ba(t):xa(),he){var d=De,g;if(g=d){e:{for(g=d,d=Bt;g.nodeType!==8;){if(!d){d=null;break e}if(g=_t(g.nextSibling),g===null){d=null;break e}}d=g}d!==null?(t.memoizedState={dehydrated:d,treeContext:Va!==null?{id:$t,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},g=dt(18,null,null,0),g.stateNode=d,g.return=t,t.child=g,tt=t,De=null,g=!0):g=!1}g||Ja(t)}if(d=t.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return so(d)?t.lanes=32:t.lanes=536870912,null;ta(t)}return d=l.children,l=l.fallback,n?(xa(),n=t.mode,d=au({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,n=t.child,n.memoizedState=Tc(a),n.childLanes=Rc(e,s,a),t.memoizedState=zc,l):(ba(t),Mc(t,d))}if(g=e.memoizedState,g!==null&&(d=g.dehydrated,d!==null)){if(u)t.flags&256?(ba(t),t.flags&=-257,t=Cc(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),n=l.fallback,d=t.mode,l=au({mode:"visible",children:l.children},d),n=Xa(n,d,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,_l(t,e.child,null,a),l=t.child,l.memoizedState=Tc(a),l.childLanes=Rc(e,s,a),t.memoizedState=zc,t=n);else if(ba(t),so(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var E=s.dgst;s=E,l=Error(c(419)),l.stack="",l.digest=s,xn({value:l,source:null,stack:null}),t=Cc(e,t,a)}else if(Xe||Sn(e,t,a,!1),s=(a&e.childLanes)!==0,Xe||s){if(s=je,s!==null&&(l=a&-a,l=(l&42)!==0?1:fr(l),l=(l&(s.suspendedLanes|a))!==0?0:l,l!==0&&l!==g.retryLane))throw g.retryLane=l,Sl(e,l),At(s,e,l),gd;d.data==="$?"||Jc(),t=Cc(e,t,a)}else d.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,De=_t(d.nextSibling),tt=t,he=!0,Ka=null,Bt=!1,e!==null&&(zt[Tt++]=$t,zt[Tt++]=Wt,zt[Tt++]=Va,$t=e.id,Wt=e.overflow,Va=t),t=Mc(t,l.children),t.flags|=4096);return t}return n?(xa(),n=l.fallback,d=t.mode,g=e.child,E=g.sibling,l=Ft(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,E!==null?n=Ft(E,n):(n=Xa(n,d,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,d=e.child.memoizedState,d===null?d=Tc(a):(g=d.cachePool,g!==null?(E=He._currentValue,g=g.parent!==E?{parent:E,pool:E}:g):g=ff(),d={baseLanes:d.baseLanes|a,cachePool:g}),n.memoizedState=d,n.childLanes=Rc(e,s,a),t.memoizedState=zc,l):(ba(t),a=e.child,e=a.sibling,a=Ft(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Mc(e,t){return t=au({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function au(e,t){return e=dt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cc(e,t,a){return _l(t,e.child,null,a),e=Mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Td(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Jr(e.return,t,a)}function Dc(e,t,a,l,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n)}function Rd(e,t,a){var l=t.pendingProps,n=l.revealOrder,u=l.tail;if(Je(e,t,l.children,a),l=qe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,a,t);else if(e.tag===19)Td(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Q(qe,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Pi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Dc(t,!1,n,a,u);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Pi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Dc(t,!0,a,null,u);break;case"together":Dc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ta|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Sn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Ft(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ft(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Bi(e)))}function _g(e,t,a){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),pa(t,He,e.memoizedState.cache),bn();break;case 27:case 5:Ha(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?zd(e,t,a):(ba(t),e=aa(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Sn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Rd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(qe,qe.current),l)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,a);case 24:pa(t,He,e.memoizedState.cache)}return aa(e,t,a)}function Md(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Oc(e,a)&&(t.flags&128)===0)return Xe=!1,_g(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,he&&(t.flags&1048576)!==0&&lf(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Yr(l)?(e=Pa(l,e),t.tag=1,t=Ed(null,t,l,e,a)):(t.tag=0,t=jc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ae){t.tag=11,t=Ad(null,t,l,e,a);break e}else if(n===F){t.tag=14,t=vd(null,t,l,e,a);break e}}throw t=Zt(l)||l,Error(c(306,t,""))}}return t;case 0:return jc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Pa(l,t.pendingProps),Ed(e,t,l,n,a);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var u=t.memoizedState;n=u.element,ec(e,t),Cn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,pa(t,He,l),l!==u.cache&&kr(t,[He],a,!0),Mn(),l=s.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=jd(e,t,l,a);break e}else if(l!==n){n=Et(Error(c(424)),t),xn(n),t=jd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=_t(e.firstChild),tt=t,he=!0,Ka=null,Bt=!0,a=ud(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bn(),l===n){t=aa(e,t,a);break e}Je(e,t,l,a)}t=t.child}return t;case 26:return tu(e,t),e===null?(a=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=gu(I.current).createElement(a),l[We]=t,l[lt]=e,Fe(l,a,e),Qe(l),t.stateNode=l):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ha(t),e===null&&he&&(l=t.stateNode=Cm(t.type,t.pendingProps,I.current),tt=t,Bt=!0,n=De,Da(t.type)?(fo=n,De=_t(l.firstChild)):De=n),Je(e,t,t.pendingProps.children,a),tu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((n=l=De)&&(l=r0(l,t.type,t.pendingProps,Bt),l!==null?(t.stateNode=l,tt=t,De=_t(l.firstChild),Bt=!1,n=!0):n=!1),n||Ja(t)),Ha(t),n=t.type,u=t.pendingProps,s=e!==null?e.memoizedProps:null,l=u.children,ro(n,u)?l=null:s!==null&&ro(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=uc(e,t,zg,null,null,a),Wn._currentValue=n),tu(e,t),Je(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=De)&&(a=c0(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,tt=t,De=null,e=!0):e=!1),e||Ja(t)),null;case 13:return zd(e,t,a);case 4:return pe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=_l(t,null,l,a):Je(e,t,l,a),t.child;case 11:return Ad(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,pa(t,t.type,l.value),Je(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Fa(t),n=Pe(n),l=l(n),t.flags|=1,Je(e,t,l,a),t.child;case 14:return vd(e,t,t.type,t.pendingProps,a);case 15:return yd(e,t,t.type,t.pendingProps,a);case 19:return Rd(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=au(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ft(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return bd(e,t,a);case 24:return Fa(t),l=Pe(He),e===null?(n=Wr(),n===null&&(n=je,u=Fr(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),t.memoizedState={parent:l,cache:n},Ir(t),pa(t,He,n)):((e.lanes&a)!==0&&(ec(e,t),Cn(t,null,null,a),Mn()),n=e.memoizedState,u=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),pa(t,He,l)):(l=u.cache,pa(t,He,l),l!==n.cache&&kr(t,[He],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function la(e){e.flags|=4}function Cd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hm(t)){if(t=Rt.current,t!==null&&((de&4194048)===de?Ht!==null:(de&62914560)!==de&&(de&536870912)===0||t!==Ht))throw Tn=Pr,df;e.flags|=8192}}function lu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?us():536870912,e.lanes|=t,Hl|=t)}function Bn(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Ug(e,t,a){var l=t.pendingProps;switch(Vr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),It(He),$e(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yn(t)?la(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rf())),Me(t),null;case 26:return a=t.memoizedState,e===null?(la(t),a!==null?(Me(t),Cd(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(la(t),Me(t),Cd(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==l&&la(t),Me(t),t.flags&=-16777217),null;case 27:Kt(t),a=I.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Me(t),null}e=$.current,yn(t)?nf(t):(e=Cm(n,l,a),t.stateNode=e,la(t))}return Me(t),null;case 5:if(Kt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Me(t),null}if(e=$.current,yn(t))nf(t);else{switch(n=gu(I.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[We]=t,e[lt]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Fe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&la(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=I.current,yn(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=tt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Sm(e.nodeValue,a)),e||Ja(t)}else e=gu(e).createTextNode(l),e[We]=t,t.stateNode=e}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[We]=t}else bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),n=!1}else n=rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ta(t),t):(ta(t),null)}if(ta(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),lu(t,t.updateQueue),Me(t),null;case 4:return $e(),e===null&&ao(t.stateNode.containerInfo),Me(t),null;case 10:return It(t.type),Me(t),null;case 19:if(L(qe),n=t.memoizedState,n===null)return Me(t),null;if(l=(t.flags&128)!==0,u=n.rendering,u===null)if(l)Bn(n,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Pi(e),u!==null){for(t.flags|=128,Bn(n,!1),e=u.updateQueue,t.updateQueue=e,lu(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)af(a,e),a=a.sibling;return Q(qe,qe.current&1|2),t.child}e=e.sibling}n.tail!==null&&wt()>uu&&(t.flags|=128,l=!0,Bn(n,!1),t.lanes=4194304)}else{if(!l)if(e=Pi(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,lu(t,e),Bn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!he)return Me(t),null}else 2*wt()-n.renderingStartTime>uu&&a!==536870912&&(t.flags|=128,l=!0,Bn(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=wt(),t.sibling=null,e=qe.current,Q(qe,l?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return ta(t),nc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&lu(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&L($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),It(He),Me(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function wg(e,t){switch(Vr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(He),$e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 13:if(ta(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(qe),null;case 4:return $e(),null;case 10:return It(t.type),null;case 22:case 23:return ta(t),nc(),e!==null&&L($a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(He),null;case 25:return null;default:return null}}function Dd(e,t){switch(Vr(t),t.tag){case 3:It(He),$e();break;case 26:case 27:case 5:Kt(t);break;case 4:$e();break;case 13:ta(t);break;case 19:L(qe);break;case 10:It(t.type);break;case 22:case 23:ta(t),nc(),e!==null&&L($a);break;case 24:It(He)}}function Hn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var u=a.create,s=a.inst;l=u(),s.destroy=l}a=a.next}while(a!==n)}}catch(d){Ee(t,t.return,d)}}function Sa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var s=l.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,n=t;var g=a,E=d;try{E()}catch(C){Ee(n,g,C)}}}l=l.next}while(l!==u)}}catch(C){Ee(t,t.return,C)}}function Od(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{vf(t,a)}catch(l){Ee(e,e.return,l)}}}function Nd(e,t,a){a.props=Pa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ee(e,t,l)}}function qn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Ee(e,t,n)}}function qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ee(e,t,n)}else a.current=null}function _d(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ee(e,e.return,n)}}function Nc(e,t,a){try{var l=e.stateNode;a0(l,e.type,a,t),l[lt]=t}catch(n){Ee(e,e.return,n)}}function Ud(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=pu));else if(l!==4&&(l===27&&Da(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Uc(e,t,a),e=e.sibling;e!==null;)Uc(e,t,a),e=e.sibling}function nu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(nu(e,t,a),e=e.sibling;e!==null;)nu(e,t,a),e=e.sibling}function wd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Fe(t,l,a),t[We]=e,t[lt]=a}catch(u){Ee(e,e.return,u)}}var na=!1,_e=!1,wc=!1,Bd=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Bg(e,t){if(e=e.containerInfo,io=Su,e=Ks(e),_r(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var s=0,d=-1,g=-1,E=0,C=0,N=e,j=null;t:for(;;){for(var R;N!==a||n!==0&&N.nodeType!==3||(d=s+n),N!==u||l!==0&&N.nodeType!==3||(g=s+l),N.nodeType===3&&(s+=N.nodeValue.length),(R=N.firstChild)!==null;)j=N,N=R;for(;;){if(N===e)break t;if(j===a&&++E===n&&(d=s),j===u&&++C===l&&(g=s),(R=N.nextSibling)!==null)break;N=j,j=N.parentNode}N=R}a=d===-1||g===-1?null:{start:d,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(uo={focusedElem:e,selectionRange:a},Su=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,n=u.memoizedProps,u=u.memoizedState,l=a.stateNode;try{var te=Pa(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(te,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Ee(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)oo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function Hd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),l&4&&Hn(5,a);break;case 1:if(Ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Ee(a,a.return,s)}else{var n=Pa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ee(a,a.return,s)}}l&64&&Od(a),l&512&&qn(a,a.return);break;case 3:if(Ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{vf(e,t)}catch(s){Ee(a,a.return,s)}}break;case 27:t===null&&l&4&&wd(a);case 26:case 5:Ea(e,a),t===null&&l&4&&_d(a),l&512&&qn(a,a.return);break;case 12:Ea(e,a);break;case 13:Ea(e,a),l&4&&Yd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zg.bind(null,a),o0(e,a))));break;case 22:if(l=a.memoizedState!==null||na,!l){t=t!==null&&t.memoizedState!==null||_e,n=na;var u=_e;na=l,(_e=t)&&!u?ja(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),na=n,_e=u}break;case 30:break;default:Ea(e,a)}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,ut=!1;function ia(e,t,a){for(a=a.child;a!==null;)Ld(e,t,a),a=a.sibling}function Ld(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(nn,a)}catch{}switch(a.tag){case 26:_e||qt(a,t),ia(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||qt(a,t);var l=Re,n=ut;Da(a.type)&&(Re=a.stateNode,ut=!1),ia(e,t,a),Jn(a.stateNode),Re=l,ut=n;break;case 5:_e||qt(a,t);case 6:if(l=Re,n=ut,Re=null,ia(e,t,a),Re=l,ut=n,Re!==null)if(ut)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(a.stateNode)}catch(u){Ee(a,t,u)}else try{Re.removeChild(a.stateNode)}catch(u){Ee(a,t,u)}break;case 18:Re!==null&&(ut?(e=Re,Rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ti(e)):Rm(Re,a.stateNode));break;case 4:l=Re,n=ut,Re=a.stateNode.containerInfo,ut=!0,ia(e,t,a),Re=l,ut=n;break;case 0:case 11:case 14:case 15:_e||Sa(2,a,t),_e||Sa(4,a,t),ia(e,t,a);break;case 1:_e||(qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Nd(a,t,l)),ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:_e=(l=_e)||a.memoizedState!==null,ia(e,t,a),_e=l;break;default:ia(e,t,a)}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ti(e)}catch(a){Ee(t,t.return,a)}}function Hg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bd),t;default:throw Error(c(435,e.tag))}}function Bc(e,t){var a=Hg(e);t.forEach(function(l){var n=Kg.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function mt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],u=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 27:if(Da(d.type)){Re=d.stateNode,ut=!1;break e}break;case 5:Re=d.stateNode,ut=!1;break e;case 3:case 4:Re=d.stateNode.containerInfo,ut=!0;break e}d=d.return}if(Re===null)throw Error(c(160));Ld(u,s,n),Re=null,ut=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}var Nt=null;function Gd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ht(e),l&4&&(Sa(3,e,e.return),Hn(3,e),Sa(5,e,e.return));break;case 1:mt(t,e),ht(e),l&512&&(_e||a===null||qt(a,a.return)),l&64&&na&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Nt;if(mt(t,e),ht(e),l&512&&(_e||a===null||qt(a,a.return)),l&4){var u=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[cn]||u[We]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),Fe(u,l,a),u[We]=e,Qe(u),l=u;break e;case"link":var s=wm("link","href",n).get(l+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(u=s[d],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break t}}u=n.createElement(l),Fe(u,l,a),n.head.appendChild(u);break;case"meta":if(s=wm("meta","content",n).get(l+(a.content||""))){for(d=0;d<s.length;d++)if(u=s[d],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break t}}u=n.createElement(l),Fe(u,l,a),n.head.appendChild(u);break;default:throw Error(c(468,l))}u[We]=e,Qe(u),l=u}e.stateNode=l}else Bm(n,e.type,e.stateNode);else e.stateNode=Um(n,l,e.memoizedProps);else u!==l?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,l===null?Bm(n,e.type,e.stateNode):Um(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Nc(e,e.memoizedProps,a.memoizedProps)}break;case 27:mt(t,e),ht(e),l&512&&(_e||a===null||qt(a,a.return)),a!==null&&l&4&&Nc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mt(t,e),ht(e),l&512&&(_e||a===null||qt(a,a.return)),e.flags&32){n=e.stateNode;try{pl(n,"")}catch(R){Ee(e,e.return,R)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Nc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(wc=!0);break;case 6:if(mt(t,e),ht(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(R){Ee(e,e.return,R)}}break;case 3:if(yu=null,n=Nt,Nt=Au(t.containerInfo),mt(t,e),Nt=n,ht(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(R){Ee(e,e.return,R)}wc&&(wc=!1,Qd(e));break;case 4:l=Nt,Nt=Au(e.stateNode.containerInfo),mt(t,e),ht(e),Nt=l;break;case 12:mt(t,e),ht(e);break;case 13:mt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qc=wt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bc(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,E=na,C=_e;if(na=E||n,_e=C||g,mt(t,e),_e=C,na=E,ht(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||na||_e||Ia(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(u=g.stateNode,n)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=g.stateNode;var N=g.memoizedProps.style,j=N!=null&&N.hasOwnProperty("display")?N.display:null;d.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(R){Ee(g,g.return,R)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(R){Ee(g,g.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Bc(e,a))));break;case 19:mt(t,e),ht(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bc(e,l)));break;case 30:break;case 21:break;default:mt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ud(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,u=_c(e);nu(e,u,n);break;case 5:var s=a.stateNode;a.flags&32&&(pl(s,""),a.flags&=-33);var d=_c(e);nu(e,d,s);break;case 3:case 4:var g=a.stateNode.containerInfo,E=_c(e);Uc(e,E,g);break;default:throw Error(c(161))}}catch(C){Ee(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hd(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sa(4,t,t.return),Ia(t);break;case 1:qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Nd(t,t.return,a),Ia(t);break;case 27:Jn(t.stateNode);case 26:case 5:qt(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,u=t,s=u.flags;switch(u.tag){case 0:case 11:case 15:ja(n,u,a),Hn(4,u);break;case 1:if(ja(n,u,a),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){Ee(l,l.return,E)}if(l=u,n=l.updateQueue,n!==null){var d=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)Af(g[n],d)}catch(E){Ee(l,l.return,E)}}a&&s&64&&Od(u),qn(u,u.return);break;case 27:wd(u);case 26:case 5:ja(n,u,a),a&&l===null&&s&4&&_d(u),qn(u,u.return);break;case 12:ja(n,u,a);break;case 13:ja(n,u,a),a&&s&4&&Yd(n,u);break;case 22:u.memoizedState===null&&ja(n,u,a),qn(u,u.return);break;case 30:break;default:ja(n,u,a)}t=t.sibling}}function Hc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&En(a))}function qc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&En(e))}function Lt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xd(e,t,a,l),t=t.sibling}function Xd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,l),n&2048&&Hn(9,t);break;case 1:Lt(e,t,a,l);break;case 3:Lt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&En(e)));break;case 12:if(n&2048){Lt(e,t,a,l),e=t.stateNode;try{var u=t.memoizedProps,s=u.id,d=u.onPostCommit;typeof d=="function"&&d(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Ee(t,t.return,g)}}else Lt(e,t,a,l);break;case 13:Lt(e,t,a,l);break;case 23:break;case 22:u=t.stateNode,s=t.alternate,t.memoizedState!==null?u._visibility&2?Lt(e,t,a,l):Ln(e,t):u._visibility&2?Lt(e,t,a,l):(u._visibility|=2,Ul(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Hc(s,t);break;case 24:Lt(e,t,a,l),n&2048&&qc(t.alternate,t);break;default:Lt(e,t,a,l)}}function Ul(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,s=t,d=a,g=l,E=s.flags;switch(s.tag){case 0:case 11:case 15:Ul(u,s,d,g,n),Hn(8,s);break;case 23:break;case 22:var C=s.stateNode;s.memoizedState!==null?C._visibility&2?Ul(u,s,d,g,n):Ln(u,s):(C._visibility|=2,Ul(u,s,d,g,n)),n&&E&2048&&Hc(s.alternate,s);break;case 24:Ul(u,s,d,g,n),n&&E&2048&&qc(s.alternate,s);break;default:Ul(u,s,d,g,n)}t=t.sibling}}function Ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Ln(a,l),n&2048&&Hc(l.alternate,l);break;case 24:Ln(a,l),n&2048&&qc(l.alternate,l);break;default:Ln(a,l)}t=t.sibling}}var Yn=8192;function wl(e){if(e.subtreeFlags&Yn)for(e=e.child;e!==null;)Vd(e),e=e.sibling}function Vd(e){switch(e.tag){case 26:wl(e),e.flags&Yn&&e.memoizedState!==null&&S0(Nt,e.memoizedState,e.memoizedProps);break;case 5:wl(e);break;case 3:case 4:var t=Nt;Nt=Au(e.stateNode.containerInfo),wl(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Yn,Yn=16777216,wl(e),Yn=t):wl(e));break;default:wl(e)}}function Zd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,Jd(l,e)}Zd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kd(e),e=e.sibling}function Kd(e){switch(e.tag){case 0:case 11:case 15:Gn(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:Gn(e);break;case 12:Gn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,iu(e)):Gn(e);break;default:Gn(e)}}function iu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,Jd(l,e)}Zd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sa(8,t,t.return),iu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,iu(t));break;default:iu(t)}e=e.sibling}}function Jd(e,t){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:Sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:En(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else e:for(a=e;Ve!==null;){l=Ve;var n=l.sibling,u=l.return;if(qd(l),l===a){Ve=null;break e}if(n!==null){n.return=u,Ve=n;break e}Ve=u}}}var qg={getCacheForType:function(e){var t=Pe(He),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Lg=typeof WeakMap=="function"?WeakMap:Map,Ae=0,je=null,se=null,de=0,ve=0,pt=null,za=!1,Bl=!1,Lc=!1,ua=0,Oe=0,Ta=0,el=0,Yc=0,Mt=0,Hl=0,Qn=null,rt=null,Gc=!1,Qc=0,uu=1/0,ru=null,Ra=null,ke=0,Ma=null,ql=null,Ll=0,Xc=0,Vc=null,kd=null,Xn=0,Zc=null;function gt(){if((Ae&2)!==0&&de!==0)return de&-de;if(M.T!==null){var e=Tl;return e!==0?e:Pc()}return os()}function Fd(){Mt===0&&(Mt=(de&536870912)===0||he?is():536870912);var e=Rt.current;return e!==null&&(e.flags|=32),Mt}function At(e,t,a){(e===je&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Yl(e,0),Ca(e,de,Mt,!1)),rn(e,a),((Ae&2)===0||e!==je)&&(e===je&&((Ae&2)===0&&(el|=a),Oe===4&&Ca(e,de,Mt,!1)),Yt(e))}function $d(e,t,a){if((Ae&6)!==0)throw Error(c(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||un(e,t),n=l?Qg(e,t):kc(e,t,!0),u=l;do{if(n===0){Bl&&!l&&Ca(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Yg(a)){n=kc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var d=e;n=Qn;var g=d.current.memoizedState.isDehydrated;if(g&&(Yl(d,s).flags|=256),s=kc(d,s,!1),s!==2){if(Lc&&!g){d.errorRecoveryDisabledLanes|=u,el|=u,n=4;break e}u=rt,rt=n,u!==null&&(rt===null?rt=u:rt.push.apply(rt,u))}n=s}if(u=!1,n!==2)continue}}if(n===1){Yl(e,0),Ca(e,t,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ca(l,t,Mt,!za);break e;case 2:rt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Qc+300-wt(),10<n)){if(Ca(l,t,Mt,!za),vi(l,0,!0)!==0)break e;l.timeoutHandle=zm(Wd.bind(null,l,a,rt,ru,Gc,t,Mt,el,Hl,za,u,2,-0,0),n);break e}Wd(l,a,rt,ru,Gc,t,Mt,el,Hl,za,u,0,-0,0)}}break}while(!0);Yt(e)}function Wd(e,t,a,l,n,u,s,d,g,E,C,N,j,R){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&($n={stylesheets:null,count:0,unsuspend:x0},Vd(t),N=E0(),N!==null)){e.cancelPendingCommit=N(nm.bind(null,e,t,u,a,l,n,s,d,g,C,1,j,R)),Ca(e,u,s,!E);return}nm(e,t,u,a,l,n,s,d,g)}function Yg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],u=n.getSnapshot;n=n.value;try{if(!ft(u(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ca(e,t,a,l){t&=~Yc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var u=31-st(n),s=1<<u;l[u]=-1,n&=~s}a!==0&&rs(e,a,t)}function cu(){return(Ae&6)===0?(Vn(0),!1):!0}function Kc(){if(se!==null){if(ve===0)var e=se.return;else e=se,Pt=ka=null,oc(e),Nl=null,Un=0,e=se;for(;e!==null;)Dd(e.alternate,e),e=e.return;se=null}}function Yl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,n0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Kc(),je=e,se=a=Ft(e.current,null),de=t,ve=0,pt=null,za=!1,Bl=un(e,t),Lc=!1,Hl=Mt=Yc=el=Ta=Oe=0,rt=Qn=null,Gc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-st(l),u=1<<n;t|=e[n],l&=~u}return ua=t,Di(),a}function Pd(e,t){ue=null,M.H=Fi,t===zn||t===Li?(t=pf(),ve=3):t===df?(t=pf(),ve=4):ve=t===gd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,se===null&&(Oe=1,eu(e,Et(t,e.current)))}function Id(){var e=M.H;return M.H=Fi,e===null?Fi:e}function em(){var e=M.A;return M.A=qg,e}function Jc(){Oe=4,za||(de&4194048)!==de&&Rt.current!==null||(Bl=!0),(Ta&134217727)===0&&(el&134217727)===0||je===null||Ca(je,de,Mt,!1)}function kc(e,t,a){var l=Ae;Ae|=2;var n=Id(),u=em();(je!==e||de!==t)&&(ru=null,Yl(e,t)),t=!1;var s=Oe;e:do try{if(ve!==0&&se!==null){var d=se,g=pt;switch(ve){case 8:Kc(),s=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var E=ve;if(ve=0,pt=null,Gl(e,d,g,E),a&&Bl){s=0;break e}break;default:E=ve,ve=0,pt=null,Gl(e,d,g,E)}}Gg(),s=Oe;break}catch(C){Pd(e,C)}while(!0);return t&&e.shellSuspendCounter++,Pt=ka=null,Ae=l,M.H=n,M.A=u,se===null&&(je=null,de=0,Di()),s}function Gg(){for(;se!==null;)tm(se)}function Qg(e,t){var a=Ae;Ae|=2;var l=Id(),n=em();je!==e||de!==t?(ru=null,uu=wt()+500,Yl(e,t)):Bl=un(e,t);e:do try{if(ve!==0&&se!==null){t=se;var u=pt;t:switch(ve){case 1:ve=0,pt=null,Gl(e,t,u,1);break;case 2:case 9:if(mf(u)){ve=0,pt=null,am(t);break}t=function(){ve!==2&&ve!==9||je!==e||(ve=7),Yt(e)},u.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:mf(u)?(ve=0,pt=null,am(t)):(ve=0,pt=null,Gl(e,t,u,7));break;case 5:var s=null;switch(se.tag){case 26:s=se.memoizedState;case 5:case 27:var d=se;if(!s||Hm(s)){ve=0,pt=null;var g=d.sibling;if(g!==null)se=g;else{var E=d.return;E!==null?(se=E,ou(E)):se=null}break t}}ve=0,pt=null,Gl(e,t,u,5);break;case 6:ve=0,pt=null,Gl(e,t,u,6);break;case 8:Kc(),Oe=6;break e;default:throw Error(c(462))}}Xg();break}catch(C){Pd(e,C)}while(!0);return Pt=ka=null,M.H=l,M.A=n,Ae=a,se!==null?0:(je=null,de=0,Di(),Oe)}function Xg(){for(;se!==null&&!fp();)tm(se)}function tm(e){var t=Md(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?ou(e):se=t}function am(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Sd(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=Sd(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:oc(t);default:Dd(a,t),t=se=af(t,ua),t=Md(a,t,ua)}e.memoizedProps=e.pendingProps,t===null?ou(e):se=t}function Gl(e,t,a,l){Pt=ka=null,oc(t),Nl=null,Un=0;var n=t.return;try{if(Ng(e,n,t,a,de)){Oe=1,eu(e,Et(a,e.current)),se=null;return}}catch(u){if(n!==null)throw se=n,u;Oe=1,eu(e,Et(a,e.current)),se=null;return}t.flags&32768?(he||l===1?e=!0:Bl||(de&536870912)!==0?e=!1:(za=e=!0,(l===2||l===9||l===3||l===6)&&(l=Rt.current,l!==null&&l.tag===13&&(l.flags|=16384))),lm(t,e)):ou(t)}function ou(e){var t=e;do{if((t.flags&32768)!==0){lm(t,za);return}e=t.return;var a=Ug(t.alternate,t,ua);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Oe===0&&(Oe=5)}function lm(e,t){do{var a=wg(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Oe=6,se=null}function nm(e,t,a,l,n,u,s,d,g){e.cancelPendingCommit=null;do su();while(ke!==0);if((Ae&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(u=t.lanes|t.childLanes,u|=qr,xp(e,a,u,s,d,g),e===je&&(se=je=null,de=0),ql=t,Ma=e,Ll=a,Xc=u,Vc=n,kd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jg(pi,function(){return om(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=G.p,G.p=2,s=Ae,Ae|=4;try{Bg(e,t,a)}finally{Ae=s,G.p=n,M.T=l}}ke=1,im(),um(),rm()}}function im(){if(ke===1){ke=0;var e=Ma,t=ql,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=G.p;G.p=2;var n=Ae;Ae|=4;try{Gd(t,e);var u=uo,s=Ks(e.containerInfo),d=u.focusedElem,g=u.selectionRange;if(s!==d&&d&&d.ownerDocument&&Zs(d.ownerDocument.documentElement,d)){if(g!==null&&_r(d)){var E=g.start,C=g.end;if(C===void 0&&(C=E),"selectionStart"in d)d.selectionStart=E,d.selectionEnd=Math.min(C,d.value.length);else{var N=d.ownerDocument||document,j=N&&N.defaultView||window;if(j.getSelection){var R=j.getSelection(),te=d.textContent.length,P=Math.min(g.start,te),xe=g.end===void 0?P:Math.min(g.end,te);!R.extend&&P>xe&&(s=xe,xe=P,P=s);var x=Vs(d,P),y=Vs(d,xe);if(x&&y&&(R.rangeCount!==1||R.anchorNode!==x.node||R.anchorOffset!==x.offset||R.focusNode!==y.node||R.focusOffset!==y.offset)){var S=N.createRange();S.setStart(x.node,x.offset),R.removeAllRanges(),P>xe?(R.addRange(S),R.extend(y.node,y.offset)):(S.setEnd(y.node,y.offset),R.addRange(S))}}}}for(N=[],R=d;R=R.parentNode;)R.nodeType===1&&N.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<N.length;d++){var D=N[d];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Su=!!io,uo=io=null}finally{Ae=n,G.p=l,M.T=a}}e.current=t,ke=2}}function um(){if(ke===2){ke=0;var e=Ma,t=ql,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=G.p;G.p=2;var n=Ae;Ae|=4;try{Hd(e,t.alternate,t)}finally{Ae=n,G.p=l,M.T=a}}ke=3}}function rm(){if(ke===4||ke===3){ke=0,dp();var e=Ma,t=ql,a=Ll,l=kd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,ql=Ma=null,cm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ra=null),dr(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(nn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=G.p,G.p=2,M.T=null;try{for(var u=e.onRecoverableError,s=0;s<l.length;s++){var d=l[s];u(d.value,{componentStack:d.stack})}}finally{M.T=t,G.p=n}}(Ll&3)!==0&&su(),Yt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Zc?Xn++:(Xn=0,Zc=e):Xn=0,Vn(0)}}function cm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,En(t)))}function su(e){return im(),um(),rm(),om()}function om(){if(ke!==5)return!1;var e=Ma,t=Xc;Xc=0;var a=dr(Ll),l=M.T,n=G.p;try{G.p=32>a?32:a,M.T=null,a=Vc,Vc=null;var u=Ma,s=Ll;if(ke=0,ql=Ma=null,Ll=0,(Ae&6)!==0)throw Error(c(331));var d=Ae;if(Ae|=4,Kd(u.current),Xd(u,u.current,s,a),Ae=d,Vn(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(nn,u)}catch{}return!0}finally{G.p=n,M.T=l,cm(e,t)}}function sm(e,t,a){t=Et(a,t),t=Ec(e.stateNode,t,2),e=va(e,t,2),e!==null&&(rn(e,2),Yt(e))}function Ee(e,t,a){if(e.tag===3)sm(e,e,a);else for(;t!==null;){if(t.tag===3){sm(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ra===null||!Ra.has(l))){e=Et(a,e),a=hd(2),l=va(t,a,2),l!==null&&(pd(a,l,t,e),rn(l,2),Yt(l));break}}t=t.return}}function Fc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Lg;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Lc=!0,n.add(a),e=Vg.bind(null,e,t,a),t.then(e,e))}function Vg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(de&a)===a&&(Oe===4||Oe===3&&(de&62914560)===de&&300>wt()-Qc?(Ae&2)===0&&Yl(e,0):Yc|=a,Hl===de&&(Hl=0)),Yt(e)}function fm(e,t){t===0&&(t=us()),e=Sl(e,t),e!==null&&(rn(e,t),Yt(e))}function Zg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),fm(e,a)}function Kg(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),fm(e,a)}function Jg(e,t){return cr(e,t)}var fu=null,Ql=null,$c=!1,du=!1,Wc=!1,tl=0;function Yt(e){e!==Ql&&e.next===null&&(Ql===null?fu=Ql=e:Ql=Ql.next=e),du=!0,$c||($c=!0,Fg())}function Vn(e,t){if(!Wc&&du){Wc=!0;do for(var a=!1,l=fu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var s=l.suspendedLanes,d=l.pingedLanes;u=(1<<31-st(42|e)+1)-1,u&=n&~(s&~d),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,pm(l,u))}else u=de,u=vi(l,l===je?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||un(l,u)||(a=!0,pm(l,u));l=l.next}while(a);Wc=!1}}function kg(){dm()}function dm(){du=$c=!1;var e=0;tl!==0&&(l0()&&(e=tl),tl=0);for(var t=wt(),a=null,l=fu;l!==null;){var n=l.next,u=mm(l,t);u===0?(l.next=null,a===null?fu=n:a.next=n,n===null&&(Ql=a)):(a=l,(e!==0||(u&3)!==0)&&(du=!0)),l=n}Vn(e)}function mm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var s=31-st(u),d=1<<s,g=n[s];g===-1?((d&a)===0||(d&l)!==0)&&(n[s]=bp(d,t)):g<=t&&(e.expiredLanes|=d),u&=~d}if(t=je,a=de,a=vi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&or(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||un(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&or(l),dr(a)){case 2:case 8:a=ls;break;case 32:a=pi;break;case 268435456:a=ns;break;default:a=pi}return l=hm.bind(null,e),a=cr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&or(l),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(su()&&e.callbackNode!==a)return null;var l=de;return l=vi(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:($d(e,l,t),mm(e,wt()),e.callbackNode!=null&&e.callbackNode===a?hm.bind(null,e):null)}function pm(e,t){if(su())return null;$d(e,t,!0)}function Fg(){i0(function(){(Ae&6)!==0?cr(as,kg):dm()})}function Pc(){return tl===0&&(tl=is()),tl}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ei(""+e)}function Am(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function $g(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var u=gm((n[lt]||null).action),s=l.submitter;s&&(t=(t=s[lt]||null)?gm(t.formAction):s.getAttribute("formAction"),t!==null&&(u=t,s=null));var d=new Ri("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(tl!==0){var g=s?Am(n,s):new FormData(n);vc(a,{pending:!0,data:g,method:n.method,action:u},null,g)}}else typeof u=="function"&&(d.preventDefault(),g=s?Am(n,s):new FormData(n),vc(a,{pending:!0,data:g,method:n.method,action:u},u,g))},currentTarget:n}]})}}for(var Ic=0;Ic<Hr.length;Ic++){var eo=Hr[Ic],Wg=eo.toLowerCase(),Pg=eo[0].toUpperCase()+eo.slice(1);Ot(Wg,"on"+Pg)}Ot(Fs,"onAnimationEnd"),Ot($s,"onAnimationIteration"),Ot(Ws,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(pg,"onTransitionRun"),Ot(gg,"onTransitionStart"),Ot(Ag,"onTransitionCancel"),Ot(Ps,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zn));function vm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var s=l.length-1;0<=s;s--){var d=l[s],g=d.instance,E=d.currentTarget;if(d=d.listener,g!==u&&n.isPropagationStopped())break e;u=d,n.currentTarget=E;try{u(n)}catch(C){Ii(C)}n.currentTarget=null,u=g}else for(s=0;s<l.length;s++){if(d=l[s],g=d.instance,E=d.currentTarget,d=d.listener,g!==u&&n.isPropagationStopped())break e;u=d,n.currentTarget=E;try{u(n)}catch(C){Ii(C)}n.currentTarget=null,u=g}}}}function fe(e,t){var a=t[mr];a===void 0&&(a=t[mr]=new Set);var l=e+"__bubble";a.has(l)||(ym(t,e,2,!1),a.add(l))}function to(e,t,a){var l=0;t&&(l|=4),ym(a,e,l,t)}var mu="_reactListening"+Math.random().toString(36).slice(2);function ao(e){if(!e[mu]){e[mu]=!0,fs.forEach(function(a){a!=="selectionchange"&&(Ig.has(a)||to(a,!1,e),to(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mu]||(t[mu]=!0,to("selectionchange",!1,t))}}function ym(e,t,a,l){switch(Xm(t)){case 2:var n=T0;break;case 8:n=R0;break;default:n=Ao}a=n.bind(null,t,a,e),n=void 0,!jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function lo(e,t,a,l,n){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var d=l.stateNode.containerInfo;if(d===n)break;if(s===4)for(s=l.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;d!==null;){if(s=ol(d),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){l=u=s;continue e}d=d.parentNode}}l=l.return}zs(function(){var E=u,C=Sr(a),N=[];e:{var j=Is.get(e);if(j!==void 0){var R=Ri,te=e;switch(e){case"keypress":if(zi(a)===0)break e;case"keydown":case"keyup":R=Jp;break;case"focusin":te="focus",R=Mr;break;case"focusout":te="blur",R=Mr;break;case"beforeblur":case"afterblur":R=Mr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=$p;break;case Fs:case $s:case Ws:R=qp;break;case Ps:R=Pp;break;case"scroll":case"scrollend":R=_p;break;case"wheel":R=eg;break;case"copy":case"cut":case"paste":R=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ds;break;case"toggle":case"beforetoggle":R=ag}var P=(t&4)!==0,xe=!P&&(e==="scroll"||e==="scrollend"),x=P?j!==null?j+"Capture":null:j;P=[];for(var y=E,S;y!==null;){var D=y;if(S=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||S===null||x===null||(D=sn(y,x),D!=null&&P.push(Kn(y,D,S))),xe)break;y=y.return}0<P.length&&(j=new R(j,te,null,a,C),N.push({event:j,listeners:P}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",j&&a!==xr&&(te=a.relatedTarget||a.fromElement)&&(ol(te)||te[cl]))break e;if((R||j)&&(j=C.window===C?C:(j=C.ownerDocument)?j.defaultView||j.parentWindow:window,R?(te=a.relatedTarget||a.toElement,R=E,te=te?ol(te):null,te!==null&&(xe=h(te),P=te.tag,te!==xe||P!==5&&P!==27&&P!==6)&&(te=null)):(R=null,te=E),R!==te)){if(P=Ms,D="onMouseLeave",x="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(P=Ds,D="onPointerLeave",x="onPointerEnter",y="pointer"),xe=R==null?j:on(R),S=te==null?j:on(te),j=new P(D,y+"leave",R,a,C),j.target=xe,j.relatedTarget=S,D=null,ol(C)===E&&(P=new P(x,y+"enter",te,a,C),P.target=S,P.relatedTarget=xe,D=P),xe=D,R&&te)t:{for(P=R,x=te,y=0,S=P;S;S=Xl(S))y++;for(S=0,D=x;D;D=Xl(D))S++;for(;0<y-S;)P=Xl(P),y--;for(;0<S-y;)x=Xl(x),S--;for(;y--;){if(P===x||x!==null&&P===x.alternate)break t;P=Xl(P),x=Xl(x)}P=null}else P=null;R!==null&&bm(N,j,R,P,!1),te!==null&&xe!==null&&bm(N,xe,te,P,!0)}}e:{if(j=E?on(E):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var K=qs;else if(Bs(j))if(Ls)K=dg;else{K=sg;var re=og}else R=j.nodeName,!R||R.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?E&&br(E.elementType)&&(K=qs):K=fg;if(K&&(K=K(e,E))){Hs(N,K,a,C);break e}re&&re(e,j,E),e==="focusout"&&E&&j.type==="number"&&E.memoizedProps.value!=null&&yr(j,"number",j.value)}switch(re=E?on(E):window,e){case"focusin":(Bs(re)||re.contentEditable==="true")&&(yl=re,Ur=E,vn=null);break;case"focusout":vn=Ur=yl=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,Js(N,a,C);break;case"selectionchange":if(hg)break;case"keydown":case"keyup":Js(N,a,C)}var J;if(Dr)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else vl?Us(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Os&&a.locale!=="ko"&&(vl||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&vl&&(J=Ts()):(ha=C,zr="value"in ha?ha.value:ha.textContent,vl=!0)),re=hu(E,ee),0<re.length&&(ee=new Cs(ee,e,null,a,C),N.push({event:ee,listeners:re}),J?ee.data=J:(J=ws(a),J!==null&&(ee.data=J)))),(J=ng?ig(e,a):ug(e,a))&&(ee=hu(E,"onBeforeInput"),0<ee.length&&(re=new Cs("onBeforeInput","beforeinput",null,a,C),N.push({event:re,listeners:ee}),re.data=J)),$g(N,e,E,a,C)}vm(N,t)})}function Kn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function hu(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=sn(e,a),n!=null&&l.unshift(Kn(e,n,u)),n=sn(e,t),n!=null&&l.push(Kn(e,n,u))),e.tag===3)return l;e=e.return}return[]}function Xl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bm(e,t,a,l,n){for(var u=t._reactName,s=[];a!==null&&a!==l;){var d=a,g=d.alternate,E=d.stateNode;if(d=d.tag,g!==null&&g===l)break;d!==5&&d!==26&&d!==27||E===null||(g=E,n?(E=sn(a,u),E!=null&&s.unshift(Kn(a,E,g))):n||(E=sn(a,u),E!=null&&s.push(Kn(a,E,g)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function xm(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(t0,"")}function Sm(e,t){return t=xm(t),xm(e)===t}function pu(){}function be(e,t,a,l,n,u){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||pl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&pl(e,""+l);break;case"className":bi(e,"class",l);break;case"tabIndex":bi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bi(e,a,l);break;case"style":Es(e,l,u);break;case"data":if(t!=="object"){bi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ei(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&be(e,t,"name",n.name,n,null),be(e,t,"formEncType",n.formEncType,n,null),be(e,t,"formMethod",n.formMethod,n,null),be(e,t,"formTarget",n.formTarget,n,null)):(be(e,t,"encType",n.encType,n,null),be(e,t,"method",n.method,n,null),be(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ei(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=pu);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ei(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":fe("beforetoggle",e),fe("toggle",e),yi(e,"popover",l);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Op.get(a)||a,yi(e,a,l))}}function no(e,t,a,l,n,u){switch(a){case"style":Es(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?pl(e,l):(typeof l=="number"||typeof l=="bigint")&&pl(e,""+l);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ds.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),u=e[lt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):yi(e,a,l)}}}function Fe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var l=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var s=a[u];if(s!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:be(e,t,u,s,a,null)}}n&&be(e,t,"srcSet",a.srcSet,a,null),l&&be(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var d=u=s=n=null,g=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var C=a[l];if(C!=null)switch(l){case"name":n=C;break;case"type":s=C;break;case"checked":g=C;break;case"defaultChecked":E=C;break;case"value":u=C;break;case"defaultValue":d=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:be(e,t,l,C,a,null)}}ys(e,u,d,g,E,s,n,!1),xi(e);return;case"select":fe("invalid",e),l=s=u=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":u=d;break;case"defaultValue":s=d;break;case"multiple":l=d;default:be(e,t,n,d,a,null)}t=u,a=s,e.multiple=!!l,t!=null?hl(e,!!l,t,!1):a!=null&&hl(e,!!l,a,!0);return;case"textarea":fe("invalid",e),u=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":l=d;break;case"defaultValue":n=d;break;case"children":u=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:be(e,t,s,d,a,null)}xs(e,l,n,u),xi(e);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:be(e,t,g,l,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(l=0;l<Zn.length;l++)fe(Zn[l],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:be(e,t,E,l,a,null)}return;default:if(br(t)){for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!==void 0&&no(e,t,C,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&be(e,t,d,l,a,null))}function a0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,s=null,d=null,g=null,E=null,C=null;for(R in a){var N=a[R];if(a.hasOwnProperty(R)&&N!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=N;default:l.hasOwnProperty(R)||be(e,t,R,null,l,N)}}for(var j in l){var R=l[j];if(N=a[j],l.hasOwnProperty(j)&&(R!=null||N!=null))switch(j){case"type":u=R;break;case"name":n=R;break;case"checked":E=R;break;case"defaultChecked":C=R;break;case"value":s=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==N&&be(e,t,j,R,l,N)}}vr(e,s,d,g,E,C,u,n);return;case"select":R=s=d=j=null;for(u in a)if(g=a[u],a.hasOwnProperty(u)&&g!=null)switch(u){case"value":break;case"multiple":R=g;default:l.hasOwnProperty(u)||be(e,t,u,null,l,g)}for(n in l)if(u=l[n],g=a[n],l.hasOwnProperty(n)&&(u!=null||g!=null))switch(n){case"value":j=u;break;case"defaultValue":d=u;break;case"multiple":s=u;default:u!==g&&be(e,t,n,u,l,g)}t=d,a=s,l=R,j!=null?hl(e,!!a,j,!1):!!l!=!!a&&(t!=null?hl(e,!!a,t,!0):hl(e,!!a,a?[]:"",!1));return;case"textarea":R=j=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:be(e,t,d,null,l,n)}for(s in l)if(n=l[s],u=a[s],l.hasOwnProperty(s)&&(n!=null||u!=null))switch(s){case"value":j=n;break;case"defaultValue":R=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==u&&be(e,t,s,n,l,u)}bs(e,j,R);return;case"option":for(var te in a)if(j=a[te],a.hasOwnProperty(te)&&j!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:be(e,t,te,null,l,j)}for(g in l)if(j=l[g],R=a[g],l.hasOwnProperty(g)&&j!==R&&(j!=null||R!=null))switch(g){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:be(e,t,g,j,l,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)j=a[P],a.hasOwnProperty(P)&&j!=null&&!l.hasOwnProperty(P)&&be(e,t,P,null,l,j);for(E in l)if(j=l[E],R=a[E],l.hasOwnProperty(E)&&j!==R&&(j!=null||R!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:be(e,t,E,j,l,R)}return;default:if(br(t)){for(var xe in a)j=a[xe],a.hasOwnProperty(xe)&&j!==void 0&&!l.hasOwnProperty(xe)&&no(e,t,xe,void 0,l,j);for(C in l)j=l[C],R=a[C],!l.hasOwnProperty(C)||j===R||j===void 0&&R===void 0||no(e,t,C,j,l,R);return}}for(var x in a)j=a[x],a.hasOwnProperty(x)&&j!=null&&!l.hasOwnProperty(x)&&be(e,t,x,null,l,j);for(N in l)j=l[N],R=a[N],!l.hasOwnProperty(N)||j===R||j==null&&R==null||be(e,t,N,j,l,R)}var io=null,uo=null;function gu(e){return e.nodeType===9?e:e.ownerDocument}function Em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var co=null;function l0(){var e=window.event;return e&&e.type==="popstate"?e===co?!1:(co=e,!0):(co=null,!1)}var zm=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(e){return Tm.resolve(null).then(e).catch(u0)}:zm;function u0(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function Rm(e,t){var a=t,l=0,n=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<l&&8>l){a=l;var s=e.ownerDocument;if(a&1&&Jn(s.documentElement),a&2&&Jn(s.body),a&4)for(a=s.head,Jn(a),s=a.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[cn]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}if(n===0){e.removeChild(u),ti(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=u}while(a);ti(t)}function oo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oo(a),hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function r0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[cn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function c0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function so(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function o0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fo=null;function Mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Cm(e,t,a){switch(t=gu(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Jn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hr(e)}var Ct=new Map,Dm=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=G.d;G.d={f:s0,r:f0,D:d0,C:m0,L:h0,m:p0,X:A0,S:g0,M:v0};function s0(){var e=ra.f(),t=cu();return e||t}function f0(e){var t=sl(e);t!==null&&t.tag===5&&t.type==="form"?$f(t):ra.r(e)}var Vl=typeof document>"u"?null:document;function Om(e,t,a){var l=Vl;if(l&&typeof t=="string"&&t){var n=St(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Dm.has(n)||(Dm.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Fe(t,"link",e),Qe(t),l.head.appendChild(t)))}}function d0(e){ra.D(e),Om("dns-prefetch",e,null)}function m0(e,t){ra.C(e,t),Om("preconnect",e,t)}function h0(e,t,a){ra.L(e,t,a);var l=Vl;if(l&&e&&t){var n='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+St(a.imageSizes)+'"]')):n+='[href="'+St(e)+'"]';var u=n;switch(t){case"style":u=Zl(e);break;case"script":u=Kl(e)}Ct.has(u)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(u,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(kn(u))||t==="script"&&l.querySelector(Fn(u))||(t=l.createElement("link"),Fe(t,"link",e),Qe(t),l.head.appendChild(t)))}}function p0(e,t){ra.m(e,t);var a=Vl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Kl(e)}if(!Ct.has(u)&&(e=T({rel:"modulepreload",href:e},t),Ct.set(u,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fn(u)))return}l=a.createElement("link"),Fe(l,"link",e),Qe(l),a.head.appendChild(l)}}}function g0(e,t,a){ra.S(e,t,a);var l=Vl;if(l&&e){var n=fl(l).hoistableStyles,u=Zl(e);t=t||"default";var s=n.get(u);if(!s){var d={loading:0,preload:null};if(s=l.querySelector(kn(u)))d.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(u))&&mo(e,a);var g=s=l.createElement("link");Qe(g),Fe(g,"link",e),g._p=new Promise(function(E,C){g.onload=E,g.onerror=C}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,vu(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:d},n.set(u,s)}}}function A0(e,t){ra.X(e,t);var a=Vl;if(a&&e){var l=fl(a).hoistableScripts,n=Kl(e),u=l.get(n);u||(u=a.querySelector(Fn(n)),u||(e=T({src:e,async:!0},t),(t=Ct.get(n))&&ho(e,t),u=a.createElement("script"),Qe(u),Fe(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function v0(e,t){ra.M(e,t);var a=Vl;if(a&&e){var l=fl(a).hoistableScripts,n=Kl(e),u=l.get(n);u||(u=a.querySelector(Fn(n)),u||(e=T({src:e,async:!0,type:"module"},t),(t=Ct.get(n))&&ho(e,t),u=a.createElement("script"),Qe(u),Fe(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Nm(e,t,a,l){var n=(n=I.current)?Au(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Zl(a.href),a=fl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zl(a.href);var u=fl(n).hoistableStyles,s=u.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,s),(u=n.querySelector(kn(e)))&&!u._p&&(s.instance=u,s.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),u||y0(n,e,a,s.state))),t&&l===null)throw Error(c(528,""));return s}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kl(a),a=fl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Zl(e){return'href="'+St(e)+'"'}function kn(e){return'link[rel="stylesheet"]['+e+"]"}function _m(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function y0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Fe(t,"link",a),Qe(t),e.head.appendChild(t))}function Kl(e){return'[src="'+St(e)+'"]'}function Fn(e){return"script[async]"+e}function Um(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(l)return t.instance=l,Qe(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),Fe(l,"style",n),vu(l,a.precedence,e),t.instance=l;case"stylesheet":n=Zl(a.href);var u=e.querySelector(kn(n));if(u)return t.state.loading|=4,t.instance=u,Qe(u),u;l=_m(a),(n=Ct.get(n))&&mo(l,n),u=(e.ownerDocument||e).createElement("link"),Qe(u);var s=u;return s._p=new Promise(function(d,g){s.onload=d,s.onerror=g}),Fe(u,"link",l),t.state.loading|=4,vu(u,a.precedence,e),t.instance=u;case"script":return u=Kl(a.src),(n=e.querySelector(Fn(u)))?(t.instance=n,Qe(n),n):(l=a,(n=Ct.get(u))&&(l=T({},a),ho(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Qe(n),Fe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,vu(l,a.precedence,e));return t.instance}function vu(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,s=0;s<l.length;s++){var d=l[s];if(d.dataset.precedence===t)u=d;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function mo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ho(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yu=null;function wm(e,t,a){if(yu===null){var l=new Map,n=yu=new Map;n.set(a,l)}else n=yu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var u=a[n];if(!(u[cn]||u[We]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(t)||"";s=e+s;var d=l.get(s);d?d.push(u):l.set(s,[u])}}return l}function Bm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function b0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $n=null;function x0(){}function S0(e,t,a){if($n===null)throw Error(c(475));var l=$n;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Zl(a.href),u=e.querySelector(kn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=bu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,Qe(u);return}u=e.ownerDocument||e,a=_m(a),(n=Ct.get(n))&&mo(a,n),u=u.createElement("link"),Qe(u);var s=u;s._p=new Promise(function(d,g){s.onload=d,s.onerror=g}),Fe(u,"link",a),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=bu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function E0(){if($n===null)throw Error(c(475));var e=$n;return e.stylesheets&&e.count===0&&po(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&po(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function bu(){if(this.count--,this.count===0){if(this.stylesheets)po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,t.forEach(j0,e),xu=null,bu.call(e))}function j0(e,t){if(!(t.state.loading&4)){var a=xu.get(e);if(a)var l=a.get(null);else{a=new Map,xu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var s=n[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),u=a.get(s)||l,u===l&&a.set(null,n),a.set(s,n),this.count++,l=bu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Wn={$$typeof:V,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function z0(e,t,a,l,n,u,s,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sr(0),this.hiddenUpdates=sr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function qm(e,t,a,l,n,u,s,d,g,E,C,N){return e=new z0(e,t,a,s,d,g,E,N),t=1,u===!0&&(t|=24),u=dt(3,null,null,t),e.current=u,u.stateNode=e,t=Fr(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:a,cache:t},Ir(u),e}function Lm(e){return e?(e=El,e):El}function Ym(e,t,a,l,n,u){n=Lm(n),l.context===null?l.context=n:l.pendingContext=n,l=Aa(t),l.payload={element:a},u=u===void 0?null:u,u!==null&&(l.callback=u),a=va(e,l,t),a!==null&&(At(a,e,t),Rn(a,e,t))}function Gm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function go(e,t){Gm(e,t),(e=e.alternate)&&Gm(e,t)}function Qm(e){if(e.tag===13){var t=Sl(e,67108864);t!==null&&At(t,e,67108864),go(e,67108864)}}var Su=!0;function T0(e,t,a,l){var n=M.T;M.T=null;var u=G.p;try{G.p=2,Ao(e,t,a,l)}finally{G.p=u,M.T=n}}function R0(e,t,a,l){var n=M.T;M.T=null;var u=G.p;try{G.p=8,Ao(e,t,a,l)}finally{G.p=u,M.T=n}}function Ao(e,t,a,l){if(Su){var n=vo(l);if(n===null)lo(e,t,l,Eu,a),Vm(e,l);else if(C0(n,e,t,a,l))l.stopPropagation();else if(Vm(e,l),t&4&&-1<M0.indexOf(e)){for(;n!==null;){var u=sl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=qa(u.pendingLanes);if(s!==0){var d=u;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var g=1<<31-st(s);d.entanglements[1]|=g,s&=~g}Yt(u),(Ae&6)===0&&(uu=wt()+500,Vn(0))}}break;case 13:d=Sl(u,2),d!==null&&At(d,u,2),cu(),go(u,2)}if(u=vo(l),u===null&&lo(e,t,l,Eu,a),u===n)break;n=u}n!==null&&l.stopPropagation()}else lo(e,t,l,null,a)}}function vo(e){return e=Sr(e),yo(e)}var Eu=null;function yo(e){if(Eu=null,e=ol(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Eu=e,null}function Xm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mp()){case as:return 2;case ls:return 8;case pi:case hp:return 32;case ns:return 268435456;default:return 32}default:return 32}}var bo=!1,Oa=null,Na=null,_a=null,Pn=new Map,In=new Map,Ua=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vm(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function ei(e,t,a,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},t!==null&&(t=sl(t),t!==null&&Qm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function C0(e,t,a,l,n){switch(t){case"focusin":return Oa=ei(Oa,e,t,a,l,n),!0;case"dragenter":return Na=ei(Na,e,t,a,l,n),!0;case"mouseover":return _a=ei(_a,e,t,a,l,n),!0;case"pointerover":var u=n.pointerId;return Pn.set(u,ei(Pn.get(u)||null,e,t,a,l,n)),!0;case"gotpointercapture":return u=n.pointerId,In.set(u,ei(In.get(u)||null,e,t,a,l,n)),!0}return!1}function Zm(e){var t=ol(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,Sp(e.priority,function(){if(a.tag===13){var l=gt();l=fr(l);var n=Sl(a,l);n!==null&&At(n,a,l),go(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ju(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=vo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);xr=l,a.target.dispatchEvent(l),xr=null}else return t=sl(a),t!==null&&Qm(t),e.blockedOn=a,!1;t.shift()}return!0}function Km(e,t,a){ju(e)&&a.delete(t)}function D0(){bo=!1,Oa!==null&&ju(Oa)&&(Oa=null),Na!==null&&ju(Na)&&(Na=null),_a!==null&&ju(_a)&&(_a=null),Pn.forEach(Km),In.forEach(Km)}function zu(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,D0)))}var Tu=null;function Jm(e){Tu!==e&&(Tu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Tu===e&&(Tu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(yo(l||a)===null)continue;break}var u=sl(a);u!==null&&(e.splice(t,3),t-=3,vc(u,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function ti(e){function t(g){return zu(g,e)}Oa!==null&&zu(Oa,e),Na!==null&&zu(Na,e),_a!==null&&zu(_a,e),Pn.forEach(t),In.forEach(t);for(var a=0;a<Ua.length;a++){var l=Ua[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)Zm(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],u=a[l+1],s=n[lt]||null;if(typeof u=="function")s||Jm(a);else if(s){var d=null;if(u&&u.hasAttribute("formAction")){if(n=u,s=u[lt]||null)d=s.formAction;else if(yo(n)!==null)continue}else d=s.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),Jm(a)}}}function xo(e){this._internalRoot=e}Ru.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=gt();Ym(a,l,e,t,null,null)},Ru.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ym(e.current,2,null,e,null,null),cu(),t[cl]=null}};function Ru(e){this._internalRoot=e}Ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=os();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ua.length&&t!==0&&t<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&Zm(e)}};var km=r.version;if(km!=="19.1.0")throw Error(c(527,km,"19.1.0"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var O0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{nn=Mu.inject(O0),ot=Mu}catch{}}return li.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=sd,u=fd,s=dd,d=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks)),t=qm(e,1,!1,null,null,a,l,n,u,s,d,null),e[cl]=t.current,ao(e),new xo(t)},li.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",u=sd,s=fd,d=dd,g=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),t=qm(e,1,!0,t,a??null,l,n,u,s,d,g,E),t.context=Lm(null),a=t.current,l=gt(),l=fr(l),n=Aa(l),n.callback=null,va(a,n,l),a=l,t.current.lanes=a,rn(t,a),Yt(t),e[cl]=t.current,ao(e),new Ru(t)},li.version="19.1.0",li}var nh;function Q0(){if(nh)return jo.exports;nh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),jo.exports=G0(),jo.exports}var X0=Q0();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ih="popstate";function V0(i={}){function r(c,m){let{pathname:h,search:b,hash:z}=c.location;return Bo("",{pathname:h,search:b,hash:z},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(c,m){return typeof m=="string"?m:ci(m)}return K0(r,o,null,i)}function Ce(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function Qt(i,r){if(!i){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Z0(){return Math.random().toString(36).substring(2,10)}function uh(i,r){return{usr:i.state,key:i.key,idx:r}}function Bo(i,r,o=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof r=="string"?en(r):r,state:o,key:r&&r.key||c||Z0()}}function ci({pathname:i="/",search:r="",hash:o=""}){return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function en(i){let r={};if(i){let o=i.indexOf("#");o>=0&&(r.hash=i.substring(o),i=i.substring(0,o));let c=i.indexOf("?");c>=0&&(r.search=i.substring(c),i=i.substring(0,c)),i&&(r.pathname=i)}return r}function K0(i,r,o,c={}){let{window:m=document.defaultView,v5Compat:h=!1}=c,b=m.history,z="POP",v=null,p=T();p==null&&(p=0,b.replaceState({...b.state,idx:p},""));function T(){return(b.state||{idx:null}).idx}function U(){z="POP";let X=T(),B=X==null?null:X-p;p=X,v&&v({action:z,location:Y.location,delta:B})}function w(X,B){z="PUSH";let k=Bo(Y.location,X,B);p=T()+1;let V=uh(k,p),ae=Y.createHref(k);try{b.pushState(V,"",ae)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;m.location.assign(ae)}h&&v&&v({action:z,location:Y.location,delta:1})}function H(X,B){z="REPLACE";let k=Bo(Y.location,X,B);p=T();let V=uh(k,p),ae=Y.createHref(k);b.replaceState(V,"",ae),h&&v&&v({action:z,location:Y.location,delta:0})}function q(X){return J0(X)}let Y={get action(){return z},get location(){return i(m,b)},listen(X){if(v)throw new Error("A history only accepts one active listener");return m.addEventListener(ih,U),v=X,()=>{m.removeEventListener(ih,U),v=null}},createHref(X){return r(m,X)},createURL:q,encodeLocation(X){let B=q(X);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:w,replace:H,go(X){return b.go(X)}};return Y}function J0(i,r=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(o,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:ci(i);return c=c.replace(/ $/,"%20"),!r&&c.startsWith("//")&&(c=o+c),new URL(c,o)}function zh(i,r,o="/"){return k0(i,r,o,!1)}function k0(i,r,o,c){let m=typeof r=="string"?en(r):r,h=sa(m.pathname||"/",o);if(h==null)return null;let b=Th(i);F0(b);let z=null;for(let v=0;z==null&&v<b.length;++v){let p=uA(h);z=nA(b[v],p,c)}return z}function Th(i,r=[],o=[],c=""){let m=(h,b,z)=>{let v={relativePath:z===void 0?h.path||"":z,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};v.relativePath.startsWith("/")&&(Ce(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let p=oa([c,v.relativePath]),T=o.concat(v);h.children&&h.children.length>0&&(Ce(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Th(h.children,r,T,p)),!(h.path==null&&!h.index)&&r.push({path:p,score:aA(p,h.index),routesMeta:T})};return i.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))m(h,b);else for(let z of Rh(h.path))m(h,b,z)}),r}function Rh(i){let r=i.split("/");if(r.length===0)return[];let[o,...c]=r,m=o.endsWith("?"),h=o.replace(/\?$/,"");if(c.length===0)return m?[h,""]:[h];let b=Rh(c.join("/")),z=[];return z.push(...b.map(v=>v===""?h:[h,v].join("/"))),m&&z.push(...b),z.map(v=>i.startsWith("/")&&v===""?"/":v)}function F0(i){i.sort((r,o)=>r.score!==o.score?o.score-r.score:lA(r.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var $0=/^:[\w-]+$/,W0=3,P0=2,I0=1,eA=10,tA=-2,rh=i=>i==="*";function aA(i,r){let o=i.split("/"),c=o.length;return o.some(rh)&&(c+=tA),r&&(c+=P0),o.filter(m=>!rh(m)).reduce((m,h)=>m+($0.test(h)?W0:h===""?I0:eA),c)}function lA(i,r){return i.length===r.length&&i.slice(0,-1).every((c,m)=>c===r[m])?i[i.length-1]-r[r.length-1]:0}function nA(i,r,o=!1){let{routesMeta:c}=i,m={},h="/",b=[];for(let z=0;z<c.length;++z){let v=c[z],p=z===c.length-1,T=h==="/"?r:r.slice(h.length)||"/",U=Lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},T),w=v.route;if(!U&&p&&o&&!c[c.length-1].route.index&&(U=Lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},T)),!U)return null;Object.assign(m,U.params),b.push({params:m,pathname:oa([h,U.pathname]),pathnameBase:sA(oa([h,U.pathnameBase])),route:w}),U.pathnameBase!=="/"&&(h=oa([h,U.pathnameBase]))}return b}function Lu(i,r){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,c]=iA(i.path,i.caseSensitive,i.end),m=r.match(o);if(!m)return null;let h=m[0],b=h.replace(/(.)\/+$/,"$1"),z=m.slice(1);return{params:c.reduce((p,{paramName:T,isOptional:U},w)=>{if(T==="*"){let q=z[w]||"";b=h.slice(0,h.length-q.length).replace(/(.)\/+$/,"$1")}const H=z[w];return U&&!H?p[T]=void 0:p[T]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:b,pattern:i}}function iA(i,r=!1,o=!0){Qt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,z,v)=>(c.push({paramName:z,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,r?void 0:"i"),c]}function uA(i){try{return i.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Qt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),i}}function sa(i,r){if(r==="/")return i;if(!i.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,c=i.charAt(o);return c&&c!=="/"?null:i.slice(o)||"/"}function rA(i,r="/"){let{pathname:o,search:c="",hash:m=""}=typeof i=="string"?en(i):i;return{pathname:o?o.startsWith("/")?o:cA(o,r):r,search:fA(c),hash:dA(m)}}function cA(i,r){let o=r.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?o.length>1&&o.pop():m!=="."&&o.push(m)}),o.length>1?o.join("/"):"/"}function Mo(i,r,o,c){return`Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oA(i){return i.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function Mh(i){let r=oA(i);return r.map((o,c)=>c===r.length-1?o.pathname:o.pathnameBase)}function Ch(i,r,o,c=!1){let m;typeof i=="string"?m=en(i):(m={...i},Ce(!m.pathname||!m.pathname.includes("?"),Mo("?","pathname","search",m)),Ce(!m.pathname||!m.pathname.includes("#"),Mo("#","pathname","hash",m)),Ce(!m.search||!m.search.includes("#"),Mo("#","search","hash",m)));let h=i===""||m.pathname==="",b=h?"/":m.pathname,z;if(b==null)z=o;else{let U=r.length-1;if(!c&&b.startsWith("..")){let w=b.split("/");for(;w[0]==="..";)w.shift(),U-=1;m.pathname=w.join("/")}z=U>=0?r[U]:"/"}let v=rA(m,z),p=b&&b!=="/"&&b.endsWith("/"),T=(h||b===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(p||T)&&(v.pathname+="/"),v}var oa=i=>i.join("/").replace(/\/\/+/g,"/"),sA=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),fA=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,dA=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function mA(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Dh=["POST","PUT","PATCH","DELETE"];new Set(Dh);var hA=["GET",...Dh];new Set(hA);var tn=O.createContext(null);tn.displayName="DataRouter";var er=O.createContext(null);er.displayName="DataRouterState";O.createContext(!1);var Oh=O.createContext({isTransitioning:!1});Oh.displayName="ViewTransition";var pA=O.createContext(new Map);pA.displayName="Fetchers";var gA=O.createContext(null);gA.displayName="Await";var Xt=O.createContext(null);Xt.displayName="Navigation";var si=O.createContext(null);si.displayName="Location";var fa=O.createContext({outlet:null,matches:[],isDataRoute:!1});fa.displayName="Route";var Ko=O.createContext(null);Ko.displayName="RouteError";function AA(i,{relative:r}={}){Ce(fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=O.useContext(Xt),{hash:m,pathname:h,search:b}=di(i,{relative:r}),z=h;return o!=="/"&&(z=h==="/"?o:oa([o,h])),c.createHref({pathname:z,search:b,hash:m})}function fi(){return O.useContext(si)!=null}function rl(){return Ce(fi(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(si).location}var Nh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _h(i){O.useContext(Xt).static||O.useLayoutEffect(i)}function an(){let{isDataRoute:i}=O.useContext(fa);return i?DA():vA()}function vA(){Ce(fi(),"useNavigate() may be used only in the context of a <Router> component.");let i=O.useContext(tn),{basename:r,navigator:o}=O.useContext(Xt),{matches:c}=O.useContext(fa),{pathname:m}=rl(),h=JSON.stringify(Mh(c)),b=O.useRef(!1);return _h(()=>{b.current=!0}),O.useCallback((v,p={})=>{if(Qt(b.current,Nh),!b.current)return;if(typeof v=="number"){o.go(v);return}let T=Ch(v,JSON.parse(h),m,p.relative==="path");i==null&&r!=="/"&&(T.pathname=T.pathname==="/"?r:oa([r,T.pathname])),(p.replace?o.replace:o.push)(T,p.state,p)},[r,o,h,m,i])}O.createContext(null);function di(i,{relative:r}={}){let{matches:o}=O.useContext(fa),{pathname:c}=rl(),m=JSON.stringify(Mh(o));return O.useMemo(()=>Ch(i,JSON.parse(m),c,r==="path"),[i,m,c,r])}function yA(i,r){return Uh(i,r)}function Uh(i,r,o,c){Ce(fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=O.useContext(Xt),{matches:h}=O.useContext(fa),b=h[h.length-1],z=b?b.params:{},v=b?b.pathname:"/",p=b?b.pathnameBase:"/",T=b&&b.route;{let B=T&&T.path||"";wh(v,!T||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let U=rl(),w;if(r){let B=typeof r=="string"?en(r):r;Ce(p==="/"||B.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${B.pathname}" was given in the \`location\` prop.`),w=B}else w=U;let H=w.pathname||"/",q=H;if(p!=="/"){let B=p.replace(/^\//,"").split("/");q="/"+H.replace(/^\//,"").split("/").slice(B.length).join("/")}let Y=zh(i,{pathname:q});Qt(T||Y!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Qt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=jA(Y&&Y.map(B=>Object.assign({},B,{params:Object.assign({},z,B.params),pathname:oa([p,m.encodeLocation?m.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?p:oa([p,m.encodeLocation?m.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),h,o,c);return r&&X?O.createElement(si.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},X):X}function bA(){let i=CA(),r=mA(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:h},"ErrorBoundary")," or"," ",O.createElement("code",{style:h},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),o?O.createElement("pre",{style:m},o):null,b)}var xA=O.createElement(bA,null),SA=class extends O.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){console.error("React Router caught the following error during render",i,r)}render(){return this.state.error!==void 0?O.createElement(fa.Provider,{value:this.props.routeContext},O.createElement(Ko.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function EA({routeContext:i,match:r,children:o}){let c=O.useContext(tn);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),O.createElement(fa.Provider,{value:i},o)}function jA(i,r=[],o=null,c=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let m=i,h=o?.errors;if(h!=null){let v=m.findIndex(p=>p.route.id&&h?.[p.route.id]!==void 0);Ce(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,v+1))}let b=!1,z=-1;if(o)for(let v=0;v<m.length;v++){let p=m[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(z=v),p.route.id){let{loaderData:T,errors:U}=o,w=p.route.loader&&!T.hasOwnProperty(p.route.id)&&(!U||U[p.route.id]===void 0);if(p.route.lazy||w){b=!0,z>=0?m=m.slice(0,z+1):m=[m[0]];break}}}return m.reduceRight((v,p,T)=>{let U,w=!1,H=null,q=null;o&&(U=h&&p.route.id?h[p.route.id]:void 0,H=p.route.errorElement||xA,b&&(z<0&&T===0?(wh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,q=null):z===T&&(w=!0,q=p.route.hydrateFallbackElement||null)));let Y=r.concat(m.slice(0,T+1)),X=()=>{let B;return U?B=H:w?B=q:p.route.Component?B=O.createElement(p.route.Component,null):p.route.element?B=p.route.element:B=v,O.createElement(EA,{match:p,routeContext:{outlet:v,matches:Y,isDataRoute:o!=null},children:B})};return o&&(p.route.ErrorBoundary||p.route.errorElement||T===0)?O.createElement(SA,{location:o.location,revalidation:o.revalidation,component:H,error:U,children:X(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):X()},null)}function Jo(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zA(i){let r=O.useContext(tn);return Ce(r,Jo(i)),r}function TA(i){let r=O.useContext(er);return Ce(r,Jo(i)),r}function RA(i){let r=O.useContext(fa);return Ce(r,Jo(i)),r}function ko(i){let r=RA(i),o=r.matches[r.matches.length-1];return Ce(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function MA(){return ko("useRouteId")}function CA(){let i=O.useContext(Ko),r=TA("useRouteError"),o=ko("useRouteError");return i!==void 0?i:r.errors?.[o]}function DA(){let{router:i}=zA("useNavigate"),r=ko("useNavigate"),o=O.useRef(!1);return _h(()=>{o.current=!0}),O.useCallback(async(m,h={})=>{Qt(o.current,Nh),o.current&&(typeof m=="number"?i.navigate(m):await i.navigate(m,{fromRouteId:r,...h}))},[i,r])}var ch={};function wh(i,r,o){!r&&!ch[i]&&(ch[i]=!0,Qt(!1,o))}O.memo(OA);function OA({routes:i,future:r,state:o}){return Uh(i,void 0,o,r)}function al(i){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NA({basename:i="/",children:r=null,location:o,navigationType:c="POP",navigator:m,static:h=!1}){Ce(!fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),z=O.useMemo(()=>({basename:b,navigator:m,static:h,future:{}}),[b,m,h]);typeof o=="string"&&(o=en(o));let{pathname:v="/",search:p="",hash:T="",state:U=null,key:w="default"}=o,H=O.useMemo(()=>{let q=sa(v,b);return q==null?null:{location:{pathname:q,search:p,hash:T,state:U,key:w},navigationType:c}},[b,v,p,T,U,w,c]);return Qt(H!=null,`<Router basename="${b}"> is not able to match the URL "${v}${p}${T}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:O.createElement(Xt.Provider,{value:z},O.createElement(si.Provider,{children:r,value:H}))}function _A({children:i,location:r}){return yA(Ho(i),r)}function Ho(i,r=[]){let o=[];return O.Children.forEach(i,(c,m)=>{if(!O.isValidElement(c))return;let h=[...r,m];if(c.type===O.Fragment){o.push.apply(o,Ho(c.props.children,h));return}Ce(c.type===al,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=Ho(c.props.children,h)),o.push(b)}),o}var Nu="get",_u="application/x-www-form-urlencoded";function tr(i){return i!=null&&typeof i.tagName=="string"}function UA(i){return tr(i)&&i.tagName.toLowerCase()==="button"}function wA(i){return tr(i)&&i.tagName.toLowerCase()==="form"}function BA(i){return tr(i)&&i.tagName.toLowerCase()==="input"}function HA(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function qA(i,r){return i.button===0&&(!r||r==="_self")&&!HA(i)}var Cu=null;function LA(){if(Cu===null)try{new FormData(document.createElement("form"),0),Cu=!1}catch{Cu=!0}return Cu}var YA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Co(i){return i!=null&&!YA.has(i)?(Qt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_u}"`),null):i}function GA(i,r){let o,c,m,h,b;if(wA(i)){let z=i.getAttribute("action");c=z?sa(z,r):null,o=i.getAttribute("method")||Nu,m=Co(i.getAttribute("enctype"))||_u,h=new FormData(i)}else if(UA(i)||BA(i)&&(i.type==="submit"||i.type==="image")){let z=i.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||z.getAttribute("action");if(c=v?sa(v,r):null,o=i.getAttribute("formmethod")||z.getAttribute("method")||Nu,m=Co(i.getAttribute("formenctype"))||Co(z.getAttribute("enctype"))||_u,h=new FormData(z,i),!LA()){let{name:p,type:T,value:U}=i;if(T==="image"){let w=p?`${p}.`:"";h.append(`${w}x`,"0"),h.append(`${w}y`,"0")}else p&&h.append(p,U)}}else{if(tr(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Nu,c=null,m=_u,b=i}return h&&m==="text/plain"&&(b=h,h=void 0),{action:c,method:o.toLowerCase(),encType:m,formData:h,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fo(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function QA(i,r,o){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${o}`:r&&sa(c.pathname,r)==="/"?c.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${o}`,c}async function XA(i,r){if(i.id in r)return r[i.id];try{let o=await import(i.module);return r[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VA(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function ZA(i,r,o){let c=await Promise.all(i.map(async m=>{let h=r.routes[m.route.id];if(h){let b=await XA(h,o);return b.links?b.links():[]}return[]}));return FA(c.flat(1).filter(VA).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function oh(i,r,o,c,m,h){let b=(v,p)=>o[p]?v.route.id!==o[p].route.id:!0,z=(v,p)=>o[p].pathname!==v.pathname||o[p].route.path?.endsWith("*")&&o[p].params["*"]!==v.params["*"];return h==="assets"?r.filter((v,p)=>b(v,p)||z(v,p)):h==="data"?r.filter((v,p)=>{let T=c.routes[v.route.id];if(!T||!T.hasLoader)return!1;if(b(v,p)||z(v,p))return!0;if(v.route.shouldRevalidate){let U=v.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function KA(i,r,{includeHydrateFallback:o}={}){return JA(i.map(c=>{let m=r.routes[c.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),o&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function JA(i){return[...new Set(i)]}function kA(i){let r={},o=Object.keys(i).sort();for(let c of o)r[c]=i[c];return r}function FA(i,r){let o=new Set;return new Set(r),i.reduce((c,m)=>{let h=JSON.stringify(kA(m));return o.has(h)||(o.add(h),c.push({key:h,link:m})),c},[])}function Bh(){let i=O.useContext(tn);return Fo(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function $A(){let i=O.useContext(er);return Fo(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var $o=O.createContext(void 0);$o.displayName="FrameworkContext";function Hh(){let i=O.useContext($o);return Fo(i,"You must render this element inside a <HydratedRouter> element"),i}function WA(i,r){let o=O.useContext($o),[c,m]=O.useState(!1),[h,b]=O.useState(!1),{onFocus:z,onBlur:v,onMouseEnter:p,onMouseLeave:T,onTouchStart:U}=r,w=O.useRef(null);O.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let Y=B=>{B.forEach(k=>{b(k.isIntersecting)})},X=new IntersectionObserver(Y,{threshold:.5});return w.current&&X.observe(w.current),()=>{X.disconnect()}}},[i]),O.useEffect(()=>{if(c){let Y=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(Y)}}},[c]);let H=()=>{m(!0)},q=()=>{m(!1),b(!1)};return o?i!=="intent"?[h,w,{}]:[h,w,{onFocus:ni(z,H),onBlur:ni(v,q),onMouseEnter:ni(p,H),onMouseLeave:ni(T,q),onTouchStart:ni(U,H)}]:[!1,w,{}]}function ni(i,r){return o=>{i&&i(o),o.defaultPrevented||r(o)}}function PA({page:i,...r}){let{router:o}=Bh(),c=O.useMemo(()=>zh(o.routes,i,o.basename),[o.routes,i,o.basename]);return c?O.createElement(ev,{page:i,matches:c,...r}):null}function IA(i){let{manifest:r,routeModules:o}=Hh(),[c,m]=O.useState([]);return O.useEffect(()=>{let h=!1;return ZA(i,r,o).then(b=>{h||m(b)}),()=>{h=!0}},[i,r,o]),c}function ev({page:i,matches:r,...o}){let c=rl(),{manifest:m,routeModules:h}=Hh(),{basename:b}=Bh(),{loaderData:z,matches:v}=$A(),p=O.useMemo(()=>oh(i,r,v,m,c,"data"),[i,r,v,m,c]),T=O.useMemo(()=>oh(i,r,v,m,c,"assets"),[i,r,v,m,c]),U=O.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let q=new Set,Y=!1;if(r.forEach(B=>{let k=m.routes[B.route.id];!k||!k.hasLoader||(!p.some(V=>V.route.id===B.route.id)&&B.route.id in z&&h[B.route.id]?.shouldRevalidate||k.hasClientLoader?Y=!0:q.add(B.route.id))}),q.size===0)return[];let X=QA(i,b,"data");return Y&&q.size>0&&X.searchParams.set("_routes",r.filter(B=>q.has(B.route.id)).map(B=>B.route.id).join(",")),[X.pathname+X.search]},[b,z,c,m,p,r,i,h]),w=O.useMemo(()=>KA(T,m),[T,m]),H=IA(T);return O.createElement(O.Fragment,null,U.map(q=>O.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...o})),w.map(q=>O.createElement("link",{key:q,rel:"modulepreload",href:q,...o})),H.map(({key:q,link:Y})=>O.createElement("link",{key:q,...Y})))}function tv(...i){return r=>{i.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var qh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qh&&(window.__reactRouterVersion="7.7.0")}catch{}function av({basename:i,children:r,window:o}){let c=O.useRef();c.current==null&&(c.current=V0({window:o,v5Compat:!0}));let m=c.current,[h,b]=O.useState({action:m.action,location:m.location}),z=O.useCallback(v=>{O.startTransition(()=>b(v))},[b]);return O.useLayoutEffect(()=>m.listen(z),[m,z]),O.createElement(NA,{basename:i,children:r,location:h.location,navigationType:h.action,navigator:m})}var Lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ll=O.forwardRef(function({onClick:r,discover:o="render",prefetch:c="none",relative:m,reloadDocument:h,replace:b,state:z,target:v,to:p,preventScrollReset:T,viewTransition:U,...w},H){let{basename:q}=O.useContext(Xt),Y=typeof p=="string"&&Lh.test(p),X,B=!1;if(typeof p=="string"&&Y&&(X=p,qh))try{let Se=new URL(window.location.href),et=p.startsWith("//")?new URL(Se.protocol+p):new URL(p),at=sa(et.pathname,q);et.origin===Se.origin&&at!=null?p=at+et.search+et.hash:B=!0}catch{Qt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=AA(p,{relative:m}),[V,ae,Z]=WA(c,w),le=uv(p,{replace:b,state:z,target:v,preventScrollReset:T,relative:m,viewTransition:U});function F(Se){r&&r(Se),Se.defaultPrevented||le(Se)}let ze=O.createElement("a",{...w,...Z,href:X||k,onClick:B||h?r:F,ref:tv(H,ae),target:v,"data-discover":!Y&&o==="render"?"true":void 0});return V&&!Y?O.createElement(O.Fragment,null,ze,O.createElement(PA,{page:k})):ze});ll.displayName="Link";var lv=O.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:c="",end:m=!1,style:h,to:b,viewTransition:z,children:v,...p},T){let U=di(b,{relative:p.relative}),w=rl(),H=O.useContext(er),{navigator:q,basename:Y}=O.useContext(Xt),X=H!=null&&fv(U)&&z===!0,B=q.encodeLocation?q.encodeLocation(U).pathname:U.pathname,k=w.pathname,V=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;o||(k=k.toLowerCase(),V=V?V.toLowerCase():null,B=B.toLowerCase()),V&&Y&&(V=sa(V,Y)||V);const ae=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let Z=k===B||!m&&k.startsWith(B)&&k.charAt(ae)==="/",le=V!=null&&(V===B||!m&&V.startsWith(B)&&V.charAt(B.length)==="/"),F={isActive:Z,isPending:le,isTransitioning:X},ze=Z?r:void 0,Se;typeof c=="function"?Se=c(F):Se=[c,Z?"active":null,le?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let et=typeof h=="function"?h(F):h;return O.createElement(ll,{...p,"aria-current":ze,className:Se,ref:T,style:et,to:b,viewTransition:z},typeof v=="function"?v(F):v)});lv.displayName="NavLink";var nv=O.forwardRef(({discover:i="render",fetcherKey:r,navigate:o,reloadDocument:c,replace:m,state:h,method:b=Nu,action:z,onSubmit:v,relative:p,preventScrollReset:T,viewTransition:U,...w},H)=>{let q=ov(),Y=sv(z,{relative:p}),X=b.toLowerCase()==="get"?"get":"post",B=typeof z=="string"&&Lh.test(z),k=V=>{if(v&&v(V),V.defaultPrevented)return;V.preventDefault();let ae=V.nativeEvent.submitter,Z=ae?.getAttribute("formmethod")||b;q(ae||V.currentTarget,{fetcherKey:r,method:Z,navigate:o,replace:m,state:h,relative:p,preventScrollReset:T,viewTransition:U})};return O.createElement("form",{ref:H,method:X,action:Y,onSubmit:c?v:k,...w,"data-discover":!B&&i==="render"?"true":void 0})});nv.displayName="Form";function iv(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yh(i){let r=O.useContext(tn);return Ce(r,iv(i)),r}function uv(i,{target:r,replace:o,state:c,preventScrollReset:m,relative:h,viewTransition:b}={}){let z=an(),v=rl(),p=di(i,{relative:h});return O.useCallback(T=>{if(qA(T,r)){T.preventDefault();let U=o!==void 0?o:ci(v)===ci(p);z(i,{replace:U,state:c,preventScrollReset:m,relative:h,viewTransition:b})}},[v,z,p,o,c,r,i,m,h,b])}var rv=0,cv=()=>`__${String(++rv)}__`;function ov(){let{router:i}=Yh("useSubmit"),{basename:r}=O.useContext(Xt),o=MA();return O.useCallback(async(c,m={})=>{let{action:h,method:b,encType:z,formData:v,body:p}=GA(c,r);if(m.navigate===!1){let T=m.fetcherKey||cv();await i.fetch(T,o,m.action||h,{preventScrollReset:m.preventScrollReset,formData:v,body:p,formMethod:m.method||b,formEncType:m.encType||z,flushSync:m.flushSync})}else await i.navigate(m.action||h,{preventScrollReset:m.preventScrollReset,formData:v,body:p,formMethod:m.method||b,formEncType:m.encType||z,replace:m.replace,state:m.state,fromRouteId:o,flushSync:m.flushSync,viewTransition:m.viewTransition})},[i,r,o])}function sv(i,{relative:r}={}){let{basename:o}=O.useContext(Xt),c=O.useContext(fa);Ce(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),h={...di(i||".",{relative:r})},b=rl();if(i==null){h.search=b.search;let z=new URLSearchParams(h.search),v=z.getAll("index");if(v.some(T=>T==="")){z.delete("index"),v.filter(U=>U).forEach(U=>z.append("index",U));let T=z.toString();h.search=T?`?${T}`:""}}return(!i||i===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:oa([o,h.pathname])),ci(h)}function fv(i,r={}){let o=O.useContext(Oh);Ce(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Yh("useViewTransitionState"),m=di(i,{relative:r.relative});if(!o.isTransitioning)return!1;let h=sa(o.currentLocation.pathname,c)||o.currentLocation.pathname,b=sa(o.nextLocation.pathname,c)||o.nextLocation.pathname;return Lu(m.pathname,b)!=null||Lu(m.pathname,h)!=null}var ct=function(){return ct=Object.assign||function(r){for(var o,c=1,m=arguments.length;c<m;c++){o=arguments[c];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(r[h]=o[h])}return r},ct.apply(this,arguments)};function Yu(i,r,o){if(o||arguments.length===2)for(var c=0,m=r.length,h;c<m;c++)(h||!(c in r))&&(h||(h=Array.prototype.slice.call(r,0,c)),h[c]=r[c]);return i.concat(h||Array.prototype.slice.call(r))}var Te="-ms-",ui="-moz-",ge="-webkit-",Gh="comm",ar="rule",Wo="decl",dv="@import",Qh="@keyframes",mv="@layer",Xh=Math.abs,Po=String.fromCharCode,qo=Object.assign;function hv(i,r){return Ke(i,0)^45?(((r<<2^Ke(i,0))<<2^Ke(i,1))<<2^Ke(i,2))<<2^Ke(i,3):0}function Vh(i){return i.trim()}function ca(i,r){return(i=r.exec(i))?i[0]:i}function ie(i,r,o){return i.replace(r,o)}function Uu(i,r,o){return i.indexOf(r,o)}function Ke(i,r){return i.charCodeAt(r)|0}function Fl(i,r,o){return i.slice(r,o)}function Gt(i){return i.length}function Zh(i){return i.length}function ii(i,r){return r.push(i),i}function pv(i,r){return i.map(r).join("")}function sh(i,r){return i.filter(function(o){return!ca(o,r)})}var lr=1,$l=1,Kh=0,Dt=0,Be=0,ln="";function nr(i,r,o,c,m,h,b,z){return{value:i,root:r,parent:o,type:c,props:m,children:h,line:lr,column:$l,length:b,return:"",siblings:z}}function Ba(i,r){return qo(nr("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},r)}function Jl(i){for(;i.root;)i=Ba(i.root,{children:[i]});ii(i,i.siblings)}function gv(){return Be}function Av(){return Be=Dt>0?Ke(ln,--Dt):0,$l--,Be===10&&($l=1,lr--),Be}function Ut(){return Be=Dt<Kh?Ke(ln,Dt++):0,$l++,Be===10&&($l=1,lr++),Be}function il(){return Ke(ln,Dt)}function wu(){return Dt}function ir(i,r){return Fl(ln,i,r)}function Lo(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vv(i){return lr=$l=1,Kh=Gt(ln=i),Dt=0,[]}function yv(i){return ln="",i}function Do(i){return Vh(ir(Dt-1,Yo(i===91?i+2:i===40?i+1:i)))}function bv(i){for(;(Be=il())&&Be<33;)Ut();return Lo(i)>2||Lo(Be)>3?"":" "}function xv(i,r){for(;--r&&Ut()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return ir(i,wu()+(r<6&&il()==32&&Ut()==32))}function Yo(i){for(;Ut();)switch(Be){case i:return Dt;case 34:case 39:i!==34&&i!==39&&Yo(Be);break;case 40:i===41&&Yo(i);break;case 92:Ut();break}return Dt}function Sv(i,r){for(;Ut()&&i+Be!==57;)if(i+Be===84&&il()===47)break;return"/*"+ir(r,Dt-1)+"*"+Po(i===47?i:Ut())}function Ev(i){for(;!Lo(il());)Ut();return ir(i,Dt)}function jv(i){return yv(Bu("",null,null,null,[""],i=vv(i),0,[0],i))}function Bu(i,r,o,c,m,h,b,z,v){for(var p=0,T=0,U=b,w=0,H=0,q=0,Y=1,X=1,B=1,k=0,V="",ae=m,Z=h,le=c,F=V;X;)switch(q=k,k=Ut()){case 40:if(q!=108&&Ke(F,U-1)==58){Uu(F+=ie(Do(k),"&","&\f"),"&\f",Xh(p?z[p-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:F+=Do(k);break;case 9:case 10:case 13:case 32:F+=bv(q);break;case 92:F+=xv(wu()-1,7);continue;case 47:switch(il()){case 42:case 47:ii(zv(Sv(Ut(),wu()),r,o,v),v);break;default:F+="/"}break;case 123*Y:z[p++]=Gt(F)*B;case 125*Y:case 59:case 0:switch(k){case 0:case 125:X=0;case 59+T:B==-1&&(F=ie(F,/\f/g,"")),H>0&&Gt(F)-U&&ii(H>32?dh(F+";",c,o,U-1,v):dh(ie(F," ","")+";",c,o,U-2,v),v);break;case 59:F+=";";default:if(ii(le=fh(F,r,o,p,T,m,z,V,ae=[],Z=[],U,h),h),k===123)if(T===0)Bu(F,r,le,le,ae,h,U,z,Z);else switch(w===99&&Ke(F,3)===110?100:w){case 100:case 108:case 109:case 115:Bu(i,le,le,c&&ii(fh(i,le,le,0,0,m,z,V,m,ae=[],U,Z),Z),m,Z,U,z,c?ae:Z);break;default:Bu(F,le,le,le,[""],Z,0,z,Z)}}p=T=H=0,Y=B=1,V=F="",U=b;break;case 58:U=1+Gt(F),H=q;default:if(Y<1){if(k==123)--Y;else if(k==125&&Y++==0&&Av()==125)continue}switch(F+=Po(k),k*Y){case 38:B=T>0?1:(F+="\f",-1);break;case 44:z[p++]=(Gt(F)-1)*B,B=1;break;case 64:il()===45&&(F+=Do(Ut())),w=il(),T=U=Gt(V=F+=Ev(wu())),k++;break;case 45:q===45&&Gt(F)==2&&(Y=0)}}return h}function fh(i,r,o,c,m,h,b,z,v,p,T,U){for(var w=m-1,H=m===0?h:[""],q=Zh(H),Y=0,X=0,B=0;Y<c;++Y)for(var k=0,V=Fl(i,w+1,w=Xh(X=b[Y])),ae=i;k<q;++k)(ae=Vh(X>0?H[k]+" "+V:ie(V,/&\f/g,H[k])))&&(v[B++]=ae);return nr(i,r,o,m===0?ar:z,v,p,T,U)}function zv(i,r,o,c){return nr(i,r,o,Gh,Po(gv()),Fl(i,2,-2),0,c)}function dh(i,r,o,c,m){return nr(i,r,o,Wo,Fl(i,0,c),Fl(i,c+1,-1),c,m)}function Jh(i,r,o){switch(hv(i,r)){case 5103:return ge+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+i+i;case 4789:return ui+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+i+ui+i+Te+i+i;case 5936:switch(Ke(i,r+11)){case 114:return ge+i+Te+ie(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ge+i+Te+ie(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ge+i+Te+ie(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ge+i+Te+i+i;case 6165:return ge+i+Te+"flex-"+i+i;case 5187:return ge+i+ie(i,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Te+"flex-$1$2")+i;case 5443:return ge+i+Te+"flex-item-"+ie(i,/flex-|-self/g,"")+(ca(i,/flex-|baseline/)?"":Te+"grid-row-"+ie(i,/flex-|-self/g,""))+i;case 4675:return ge+i+Te+"flex-line-pack"+ie(i,/align-content|flex-|-self/g,"")+i;case 5548:return ge+i+Te+ie(i,"shrink","negative")+i;case 5292:return ge+i+Te+ie(i,"basis","preferred-size")+i;case 6060:return ge+"box-"+ie(i,"-grow","")+ge+i+Te+ie(i,"grow","positive")+i;case 4554:return ge+ie(i,/([^-])(transform)/g,"$1"+ge+"$2")+i;case 6187:return ie(ie(ie(i,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),i,"")+i;case 5495:case 3959:return ie(i,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ie(ie(i,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+i+i;case 4200:if(!ca(i,/flex-|baseline/))return Te+"grid-column-align"+Fl(i,r)+i;break;case 2592:case 3360:return Te+ie(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(c,m){return r=m,ca(c.props,/grid-\w+-end/)})?~Uu(i+(o=o[r].value),"span",0)?i:Te+ie(i,"-start","")+i+Te+"grid-row-span:"+(~Uu(o,"span",0)?ca(o,/\d+/):+ca(o,/\d+/)-+ca(i,/\d+/))+";":Te+ie(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(c){return ca(c.props,/grid-\w+-start/)})?i:Te+ie(ie(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ie(i,/(.+)-inline(.+)/,ge+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(i)-1-r>6)switch(Ke(i,r+1)){case 109:if(Ke(i,r+4)!==45)break;case 102:return ie(i,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+ui+(Ke(i,r+3)==108?"$3":"$2-$3"))+i;case 115:return~Uu(i,"stretch",0)?Jh(ie(i,"stretch","fill-available"),r,o)+i:i}break;case 5152:case 5920:return ie(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,m,h,b,z,v,p){return Te+m+":"+h+p+(b?Te+m+"-span:"+(z?v:+v-+h)+p:"")+i});case 4949:if(Ke(i,r+6)===121)return ie(i,":",":"+ge)+i;break;case 6444:switch(Ke(i,Ke(i,14)===45?18:11)){case 120:return ie(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(Ke(i,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Te+"$2box$3")+i;case 100:return ie(i,":",":"+Te)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(i,"scroll-","scroll-snap-")+i}return i}function Gu(i,r){for(var o="",c=0;c<i.length;c++)o+=r(i[c],c,i,r)||"";return o}function Tv(i,r,o,c){switch(i.type){case mv:if(i.children.length)break;case dv:case Wo:return i.return=i.return||i.value;case Gh:return"";case Qh:return i.return=i.value+"{"+Gu(i.children,c)+"}";case ar:if(!Gt(i.value=i.props.join(",")))return""}return Gt(o=Gu(i.children,c))?i.return=i.value+"{"+o+"}":""}function Rv(i){var r=Zh(i);return function(o,c,m,h){for(var b="",z=0;z<r;z++)b+=i[z](o,c,m,h)||"";return b}}function Mv(i){return function(r){r.root||(r=r.return)&&i(r)}}function Cv(i,r,o,c){if(i.length>-1&&!i.return)switch(i.type){case Wo:i.return=Jh(i.value,i.length,o);return;case Qh:return Gu([Ba(i,{value:ie(i.value,"@","@"+ge)})],c);case ar:if(i.length)return pv(o=i.props,function(m){switch(ca(m,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jl(Ba(i,{props:[ie(m,/:(read-\w+)/,":"+ui+"$1")]})),Jl(Ba(i,{props:[m]})),qo(i,{props:sh(o,c)});break;case"::placeholder":Jl(Ba(i,{props:[ie(m,/:(plac\w+)/,":"+ge+"input-$1")]})),Jl(Ba(i,{props:[ie(m,/:(plac\w+)/,":"+ui+"$1")]})),Jl(Ba(i,{props:[ie(m,/:(plac\w+)/,Te+"input-$1")]})),Jl(Ba(i,{props:[m]})),qo(i,{props:sh(o,c)});break}return""})}}var Dv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Wl=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",kh="active",Fh="data-styled-version",ur="6.1.19",Io=`/*!sc*/
`,Qu=typeof window<"u"&&typeof document<"u",Ov=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),rr=Object.freeze([]),Pl=Object.freeze({});function Nv(i,r,o){return o===void 0&&(o=Pl),i.theme!==o.theme&&i.theme||r||o.theme}var $h=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_v=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uv=/(^-|-$)/g;function mh(i){return i.replace(_v,"-").replace(Uv,"")}var wv=/(a)(d)/gi,Du=52,hh=function(i){return String.fromCharCode(i+(i>25?39:97))};function Go(i){var r,o="";for(r=Math.abs(i);r>Du;r=r/Du|0)o=hh(r%Du)+o;return(hh(r%Du)+o).replace(wv,"$1-$2")}var Oo,Wh=5381,kl=function(i,r){for(var o=r.length;o;)i=33*i^r.charCodeAt(--o);return i},Ph=function(i){return kl(Wh,i)};function Bv(i){return Go(Ph(i)>>>0)}function Hv(i){return i.displayName||i.name||"Component"}function No(i){return typeof i=="string"&&!0}var Ih=typeof Symbol=="function"&&Symbol.for,ep=Ih?Symbol.for("react.memo"):60115,qv=Ih?Symbol.for("react.forward_ref"):60112,Lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gv=((Oo={})[qv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oo[ep]=tp,Oo);function ph(i){return("type"in(r=i)&&r.type.$$typeof)===ep?tp:"$$typeof"in i?Gv[i.$$typeof]:Lv;var r}var Qv=Object.defineProperty,Xv=Object.getOwnPropertyNames,gh=Object.getOwnPropertySymbols,Vv=Object.getOwnPropertyDescriptor,Zv=Object.getPrototypeOf,Ah=Object.prototype;function ap(i,r,o){if(typeof r!="string"){if(Ah){var c=Zv(r);c&&c!==Ah&&ap(i,c,o)}var m=Xv(r);gh&&(m=m.concat(gh(r)));for(var h=ph(i),b=ph(r),z=0;z<m.length;++z){var v=m[z];if(!(v in Yv||o&&o[v]||b&&v in b||h&&v in h)){var p=Vv(r,v);try{Qv(i,v,p)}catch{}}}}return i}function Il(i){return typeof i=="function"}function es(i){return typeof i=="object"&&"styledComponentId"in i}function nl(i,r){return i&&r?"".concat(i," ").concat(r):i||r||""}function vh(i,r){if(i.length===0)return"";for(var o=i[0],c=1;c<i.length;c++)o+=i[c];return o}function oi(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Qo(i,r,o){if(o===void 0&&(o=!1),!o&&!oi(i)&&!Array.isArray(i))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)i[c]=Qo(i[c],r[c]);else if(oi(r))for(var c in r)i[c]=Qo(i[c],r[c]);return i}function ts(i,r){Object.defineProperty(i,"toString",{value:r})}function mi(i){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Kv=function(){function i(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return i.prototype.indexOfGroup=function(r){for(var o=0,c=0;c<r;c++)o+=this.groupSizes[c];return o},i.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var c=this.groupSizes,m=c.length,h=m;r>=h;)if((h<<=1)<0)throw mi(16,"".concat(r));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var b=m;b<h;b++)this.groupSizes[b]=0}for(var z=this.indexOfGroup(r+1),v=(b=0,o.length);b<v;b++)this.tag.insertRule(z,o[b])&&(this.groupSizes[r]++,z++)},i.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],c=this.indexOfGroup(r),m=c+o;this.groupSizes[r]=0;for(var h=c;h<m;h++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var c=this.groupSizes[r],m=this.indexOfGroup(r),h=m+c,b=m;b<h;b++)o+="".concat(this.tag.getRule(b)).concat(Io);return o},i}(),Hu=new Map,Xu=new Map,qu=1,Ou=function(i){if(Hu.has(i))return Hu.get(i);for(;Xu.has(qu);)qu++;var r=qu++;return Hu.set(i,r),Xu.set(r,i),r},Jv=function(i,r){qu=r+1,Hu.set(i,r),Xu.set(r,i)},kv="style[".concat(Wl,"][").concat(Fh,'="').concat(ur,'"]'),Fv=new RegExp("^".concat(Wl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$v=function(i,r,o){for(var c,m=o.split(","),h=0,b=m.length;h<b;h++)(c=m[h])&&i.registerName(r,c)},Wv=function(i,r){for(var o,c=((o=r.textContent)!==null&&o!==void 0?o:"").split(Io),m=[],h=0,b=c.length;h<b;h++){var z=c[h].trim();if(z){var v=z.match(Fv);if(v){var p=0|parseInt(v[1],10),T=v[2];p!==0&&(Jv(T,p),$v(i,T,v[3]),i.getTag().insertRules(p,m)),m.length=0}else m.push(z)}}},yh=function(i){for(var r=document.querySelectorAll(kv),o=0,c=r.length;o<c;o++){var m=r[o];m&&m.getAttribute(Wl)!==kh&&(Wv(i,m),m.parentNode&&m.parentNode.removeChild(m))}};function Pv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lp=function(i){var r=document.head,o=i||r,c=document.createElement("style"),m=function(z){var v=Array.from(z.querySelectorAll("style[".concat(Wl,"]")));return v[v.length-1]}(o),h=m!==void 0?m.nextSibling:null;c.setAttribute(Wl,kh),c.setAttribute(Fh,ur);var b=Pv();return b&&c.setAttribute("nonce",b),o.insertBefore(c,h),c},Iv=function(){function i(r){this.element=lp(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,m=0,h=c.length;m<h;m++){var b=c[m];if(b.ownerNode===o)return b}throw mi(17)}(this.element),this.length=0}return i.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},i.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},i}(),e1=function(){function i(r){this.element=lp(r),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},i.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},i}(),t1=function(){function i(r){this.rules=[],this.length=0}return i.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},i.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},i.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},i}(),bh=Qu,a1={isServer:!Qu,useCSSOMInjection:!Ov},np=function(){function i(r,o,c){r===void 0&&(r=Pl),o===void 0&&(o={});var m=this;this.options=ct(ct({},a1),r),this.gs=o,this.names=new Map(c),this.server=!!r.isServer,!this.server&&Qu&&bh&&(bh=!1,yh(this)),ts(this,function(){return function(h){for(var b=h.getTag(),z=b.length,v="",p=function(U){var w=function(B){return Xu.get(B)}(U);if(w===void 0)return"continue";var H=h.names.get(w),q=b.getGroup(U);if(H===void 0||!H.size||q.length===0)return"continue";var Y="".concat(Wl,".g").concat(U,'[id="').concat(w,'"]'),X="";H!==void 0&&H.forEach(function(B){B.length>0&&(X+="".concat(B,","))}),v+="".concat(q).concat(Y,'{content:"').concat(X,'"}').concat(Io)},T=0;T<z;T++)p(T);return v}(m)})}return i.registerId=function(r){return Ou(r)},i.prototype.rehydrate=function(){!this.server&&Qu&&yh(this)},i.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new i(ct(ct({},this.options),r),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var c=o.useCSSOMInjection,m=o.target;return o.isServer?new t1(m):c?new Iv(m):new e1(m)}(this.options),new Kv(r)));var r},i.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},i.prototype.registerName=function(r,o){if(Ou(r),this.names.has(r))this.names.get(r).add(o);else{var c=new Set;c.add(o),this.names.set(r,c)}},i.prototype.insertRules=function(r,o,c){this.registerName(r,o),this.getTag().insertRules(Ou(r),c)},i.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},i.prototype.clearRules=function(r){this.getTag().clearGroup(Ou(r)),this.clearNames(r)},i.prototype.clearTag=function(){this.tag=void 0},i}(),l1=/&/g,n1=/^\s*\/\/.*$/gm;function ip(i,r){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=ip(o.children,r)),o})}function i1(i){var r,o,c,m=Pl,h=m.options,b=h===void 0?Pl:h,z=m.plugins,v=z===void 0?rr:z,p=function(w,H,q){return q.startsWith(o)&&q.endsWith(o)&&q.replaceAll(o,"").length>0?".".concat(r):w},T=v.slice();T.push(function(w){w.type===ar&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(l1,o).replace(c,p))}),b.prefix&&T.push(Cv),T.push(Tv);var U=function(w,H,q,Y){H===void 0&&(H=""),q===void 0&&(q=""),Y===void 0&&(Y="&"),r=Y,o=H,c=new RegExp("\\".concat(o,"\\b"),"g");var X=w.replace(n1,""),B=jv(q||H?"".concat(q," ").concat(H," { ").concat(X," }"):X);b.namespace&&(B=ip(B,b.namespace));var k=[];return Gu(B,Rv(T.concat(Mv(function(V){return k.push(V)})))),k};return U.hash=v.length?v.reduce(function(w,H){return H.name||mi(15),kl(w,H.name)},Wh).toString():"",U}var u1=new np,Xo=i1(),up=ri.createContext({shouldForwardProp:void 0,styleSheet:u1,stylis:Xo});up.Consumer;ri.createContext(void 0);function xh(){return O.useContext(up)}var r1=function(){function i(r,o){var c=this;this.inject=function(m,h){h===void 0&&(h=Xo);var b=c.name+h.hash;m.hasNameForId(c.id,b)||m.insertRules(c.id,b,h(c.rules,b,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,ts(this,function(){throw mi(12,String(c.name))})}return i.prototype.getName=function(r){return r===void 0&&(r=Xo),this.name+r.hash},i}(),c1=function(i){return i>="A"&&i<="Z"};function Sh(i){for(var r="",o=0;o<i.length;o++){var c=i[o];if(o===1&&c==="-"&&i[0]==="-")return i;c1(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var rp=function(i){return i==null||i===!1||i===""},cp=function(i){var r,o,c=[];for(var m in i){var h=i[m];i.hasOwnProperty(m)&&!rp(h)&&(Array.isArray(h)&&h.isCss||Il(h)?c.push("".concat(Sh(m),":"),h,";"):oi(h)?c.push.apply(c,Yu(Yu(["".concat(m," {")],cp(h),!1),["}"],!1)):c.push("".concat(Sh(m),": ").concat((r=m,(o=h)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in Dv||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function ul(i,r,o,c){if(rp(i))return[];if(es(i))return[".".concat(i.styledComponentId)];if(Il(i)){if(!Il(h=i)||h.prototype&&h.prototype.isReactComponent||!r)return[i];var m=i(r);return ul(m,r,o,c)}var h;return i instanceof r1?o?(i.inject(o,c),[i.getName(c)]):[i]:oi(i)?cp(i):Array.isArray(i)?Array.prototype.concat.apply(rr,i.map(function(b){return ul(b,r,o,c)})):[i.toString()]}function o1(i){for(var r=0;r<i.length;r+=1){var o=i[r];if(Il(o)&&!es(o))return!1}return!0}var s1=Ph(ur),f1=function(){function i(r,o,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&o1(r),this.componentId=o,this.baseHash=kl(s1,o),this.baseStyle=c,np.registerId(o)}return i.prototype.generateAndInjectStyles=function(r,o,c){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))m=nl(m,this.staticRulesId);else{var h=vh(ul(this.rules,r,o,c)),b=Go(kl(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,b)){var z=c(h,".".concat(b),void 0,this.componentId);o.insertRules(this.componentId,b,z)}m=nl(m,b),this.staticRulesId=b}else{for(var v=kl(this.baseHash,c.hash),p="",T=0;T<this.rules.length;T++){var U=this.rules[T];if(typeof U=="string")p+=U;else if(U){var w=vh(ul(U,r,o,c));v=kl(v,w+T),p+=w}}if(p){var H=Go(v>>>0);o.hasNameForId(this.componentId,H)||o.insertRules(this.componentId,H,c(p,".".concat(H),void 0,this.componentId)),m=nl(m,H)}}return m},i}(),op=ri.createContext(void 0);op.Consumer;var _o={};function d1(i,r,o){var c=es(i),m=i,h=!No(i),b=r.attrs,z=b===void 0?rr:b,v=r.componentId,p=v===void 0?function(ae,Z){var le=typeof ae!="string"?"sc":mh(ae);_o[le]=(_o[le]||0)+1;var F="".concat(le,"-").concat(Bv(ur+le+_o[le]));return Z?"".concat(Z,"-").concat(F):F}(r.displayName,r.parentComponentId):v,T=r.displayName,U=T===void 0?function(ae){return No(ae)?"styled.".concat(ae):"Styled(".concat(Hv(ae),")")}(i):T,w=r.displayName&&r.componentId?"".concat(mh(r.displayName),"-").concat(r.componentId):r.componentId||p,H=c&&m.attrs?m.attrs.concat(z).filter(Boolean):z,q=r.shouldForwardProp;if(c&&m.shouldForwardProp){var Y=m.shouldForwardProp;if(r.shouldForwardProp){var X=r.shouldForwardProp;q=function(ae,Z){return Y(ae,Z)&&X(ae,Z)}}else q=Y}var B=new f1(o,w,c?m.componentStyle:void 0);function k(ae,Z){return function(le,F,ze){var Se=le.attrs,et=le.componentStyle,at=le.defaultProps,Le=le.foldedComponentIds,Vt=le.styledComponentId,Zt=le.target,Ye=ri.useContext(op),M=xh(),G=le.shouldForwardProp||M.shouldForwardProp,W=Nv(F,Ye,at)||Pl,ce=function(oe,I,Ge){for(var pe,$e=ct(ct({},I),{className:void 0,theme:Ge}),Ha=0;Ha<oe.length;Ha+=1){var Kt=Il(pe=oe[Ha])?pe($e):pe;for(var bt in Kt)$e[bt]=bt==="className"?nl($e[bt],Kt[bt]):bt==="style"?ct(ct({},$e[bt]),Kt[bt]):Kt[bt]}return I.className&&($e.className=nl($e.className,I.className)),$e}(Se,F,W),A=ce.as||Zt,_={};for(var L in ce)ce[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&ce.theme===W||(L==="forwardedAs"?_.as=ce.forwardedAs:G&&!G(L,A)||(_[L]=ce[L]));var Q=function(oe,I){var Ge=xh(),pe=oe.generateAndInjectStyles(I,Ge.styleSheet,Ge.stylis);return pe}(et,ce),$=nl(Le,Vt);return Q&&($+=" "+Q),ce.className&&($+=" "+ce.className),_[No(A)&&!$h.has(A)?"class":"className"]=$,ze&&(_.ref=ze),O.createElement(A,_)}(V,ae,Z)}k.displayName=U;var V=ri.forwardRef(k);return V.attrs=H,V.componentStyle=B,V.displayName=U,V.shouldForwardProp=q,V.foldedComponentIds=c?nl(m.foldedComponentIds,m.styledComponentId):"",V.styledComponentId=w,V.target=c?m.target:i,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=c?function(Z){for(var le=[],F=1;F<arguments.length;F++)le[F-1]=arguments[F];for(var ze=0,Se=le;ze<Se.length;ze++)Qo(Z,Se[ze],!0);return Z}({},m.defaultProps,ae):ae}}),ts(V,function(){return".".concat(V.styledComponentId)}),h&&ap(V,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function Eh(i,r){for(var o=[i[0]],c=0,m=r.length;c<m;c+=1)o.push(r[c],i[c+1]);return o}var jh=function(i){return Object.assign(i,{isCss:!0})};function m1(i){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(Il(i)||oi(i))return jh(ul(Eh(rr,Yu([i],r,!0))));var c=i;return r.length===0&&c.length===1&&typeof c[0]=="string"?ul(c):jh(ul(Eh(c,r)))}function Vo(i,r,o){if(o===void 0&&(o=Pl),!r)throw mi(1,r);var c=function(m){for(var h=[],b=1;b<arguments.length;b++)h[b-1]=arguments[b];return i(r,o,m1.apply(void 0,Yu([m],h,!1)))};return c.attrs=function(m){return Vo(i,r,ct(ct({},o),{attrs:Array.prototype.concat(o.attrs,m).filter(Boolean)}))},c.withConfig=function(m){return Vo(i,r,ct(ct({},o),m))},c}var sp=function(i){return Vo(d1,i)},yt=sp;$h.forEach(function(i){yt[i]=sp(i)});const h1=yt.header`
  padding: 20px 30px;
  background-color: #1f1f1f;
  color: white;
  z-index: 999;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;


  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 1.8rem;
    user-select: none;
  }
  h1 span {
    font-size: 2rem;
    margin-right: 8px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  /* Desktop menu - sempre visível */
  nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }

  nav ul li a {
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  nav ul li a:hover {
    background-color: #33a852;
    color: #fff;
  }

  /* Hamburger - escondido no desktop */
  .nav-hamburger {
    display: none;
    cursor: pointer;
    width: 30px;
    height: 25px;
    position: relative;
    z-index: 1001;
    user-select: none;
  }

  .nav-hamburger span {
    position: absolute;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    transition: all 0.4s ease;
  }

  .nav-hamburger span:nth-child(1) {
    top: 0;
  }
  .nav-hamburger span:nth-child(2) {
    top: 11px;
  }
  .nav-hamburger span:nth-child(3) {
    bottom: 0;
  }

  /* Animar para X quando aberto */
  .nav-hamburger.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 11px;
  }
  .nav-hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-hamburger.open span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 11px;
  }

  /* Mobile Styles */
  @media (max-width: 930px) {
    nav ul {
      flex-direction: column;
      background: rgba(31, 31, 31, 0.95);
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      padding-top: 80px;
      box-shadow: -3px 0 15px rgba(0, 0, 0, 0.6);
      transform: translateX(100%);
      transition: transform 0.4s ease;
      border-radius: 10px 0 0 10px;
      z-index: 1000;
    }

    nav ul.open {
      transform: translateX(0);
    }

 nav ul li a {
  display: block;          /* faz o link ocupar toda a linha */
  width: 100%;             /* largura total do menu */
  padding: 15px 20px;
  font-size: 1.2rem;
  border-radius: 0;
  border-bottom: 1px solid #444;
  cursor: pointer;         /* deixa cursor de link */
  transition: background-color 0.3s ease, color 0.3s ease;
}
nav ul li a:hover {
  background-color: #33a852;
  color: #fff;
}

    .nav-hamburger {
      display: block;
    }
  }
`;function hi(){const[i,r]=O.useState(!1);function o(){r(c=>!c)}return f.jsx(h1,{children:f.jsxs("nav",{children:[f.jsx("div",{className:"title",children:f.jsxs("h1",{children:[f.jsx("span",{children:"⚽"})," Futebol Clube"]})}),f.jsxs("ul",{className:i?"open":"",children:[f.jsx("li",{children:f.jsx(ll,{to:"/",onClick:()=>r(!1),children:"Início"})}),f.jsx("li",{children:f.jsx(ll,{to:"/campeonatos",onClick:()=>r(!1),children:"Campeonatos"})}),f.jsx("li",{children:f.jsx(ll,{to:"/partidas",onClick:()=>r(!1),children:"Partidas"})}),f.jsx("li",{children:f.jsx(ll,{to:"/times",onClick:()=>r(!1),children:"Times"})}),f.jsx("li",{children:f.jsx(ll,{to:"/sobre",onClick:()=>r(!1),children:"Sobre"})})]}),f.jsxs("div",{className:`nav-hamburger ${i?"open":""}`,onClick:o,"aria-label":"Toggle menu",role:"button",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&o()},children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]})})}const p1=yt.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(1fr);
    background-color: #111111ff;
    gap: 20px;
    padding: 20px;
    margin-top: 50px;
    padding-top: 60px;

     h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 40px;
    color: #c9d1d9;
  }

    
.box {
  background-color: #2d2f3a;
  color: #f0f0f0;
  border: 2px solid 	#405273;
  border-radius: 10px;
  padding: 1.5rem;
  height: 500px;

  /* sombra azul acinzentada suave */
  box-shadow: 0 0 10px rgba(60, 70, 100, 0.4);

  /* transição para transform e sombra */
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.box:hover {
  /* aumento leve */
 

  /* sombra mais forte */
  box-shadow: 0 0 20px rgba(60, 70, 100, 0.7);
}


.box h1{
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 3rem;
}

.box p{
    font-size: 1.5rem;
    text-align: justify;
    text-indent: 10px;
}

 .btn {
    display: block;
    margin: 50px auto 0;
    padding: 14px 28px;
    font-size: 1.2rem;
    background-color:  #2d2f3a;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #2d2f3a93;
  }

  @media screen and (max-width:930px) {
      h1{
        font-size: 2.8rem;
      }
      p{
        font-size: 1.4rem ;
      }

      .box h1{
        font-size: 2.8rem;
      }

      .box p{
        font-size: 1.3rem;
      }
  }

  @media screen and (max-width:768px) {
    h1{
        font-size: 2.6rem;
      }
      p{
        font-size: 1.3rem ;
      }

      .box h1{
        font-size: 2rem;
      }

      .box p{
        font-size: 1.080rem;
      }
  }

  @media screen and (max-width:520px){
     h1{
        font-size: 2.5rem;
      }
      p{
        font-size: 1.2rem ;
      }

      .box h1{
        font-size: 1.6rem;
      }

      .box p{
        font-size: 1rem;
      }
  }

  @media screen and (max-width:480px) {
      h1{
        font-size: 2.3rem;
      }
      p{
        font-size: 1.1rem ;
      }

      .box h1{
        font-size: 2.2rem;
      }

      .box p{
        font-size: 0.9rem;
      }
  }

  @media screen and (max-width:479px){
       h1{
        font-size: 2.1rem;
      }
      p{
        font-size: 1rem ;
      }

      .box h1{
        font-size: 2rem;
      }

      .box p{
        font-size: 0.86rem;
      }

    }




    
`;function g1(){const i=an();function r(){i("/")}const o=[{nome:"Brasileirão Série A",descricao:"O Campeonato Brasileiro Série A, conhecido popularmente como Brasileirão, é a principal competição nacional de futebol no Brasil, oficialmente fundada em 1959. Com um formato atual de pontos corridos envolvendo 20 clubes, o torneio é reconhecido por sua alta competitividade, revelação de talentos e grandes rivalidades regionais e nacionais. Times como Flamengo, Palmeiras, Corinthians e São Paulo fazem parte da história da competição, que também serve como vitrine para jogadores que vão conquistar espaço no futebol internacional. Ao longo das décadas, o Brasileirão passou por diversas mudanças de formato e regulamentos, sempre mantendo sua relevância e popularidade entre torcedores e mídia. Além do aspecto esportivo, o campeonato tem enorme impacto social e cultural no país, sendo palco de festas, rivalidades e histórias que envolvem milhões de fãs de futebol em todo o território nacional."},{nome:"Premier League",descricao:"A Premier League foi fundada em 1992, quando os clubes da primeira divisão do futebol inglês decidiram se separar da Football League para criar uma liga mais lucrativa e globalmente atrativa. Desde então, a Premier League consolidou-se como uma das ligas mais populares, competitivas e financeiramente poderosas do mundo, atraindo os melhores jogadores e técnicos internacionais. Clubes históricos como Manchester United, Liverpool, Chelsea, Arsenal e Manchester City disputam intensamente o título em estádios sempre lotados, com uma atmosfera vibrante e apaixonada. Além do espetáculo esportivo, a liga é famosa por sua cobertura global, contratos milionários de direitos televisivos e por influenciar o modelo de gestão do futebol moderno. A Premier League é uma referência tanto para o futebol jogado quanto para a indústria do esporte, servindo como palco para grandes rivalidades e desenvolvimentos do jogo moderno no cenário mundial."},{nome:"Champions League",descricao:"A UEFA Champions League é o torneio de clubes mais prestigiado do futebol mundial, criado originalmente em 1955 sob o nome de Taça dos Clubes Campeões Europeus. A competição reúne os campeões e principais clubes das ligas europeias para disputar a cobiçada “Orelhuda”, troféu símbolo da supremacia continental. Com um formato que inclui fases de grupos e mata-mata, a Champions League é palco de partidas emocionantes, rivalidades históricas e grandes viradas. Times como Real Madrid, Barcelona, Bayern de Munique, Liverpool e Milan têm seu nome gravado na história do torneio. Além do prestígio esportivo, a Champions League representa enorme retorno financeiro, exposição global e reforça a marca de grandes clubes e jogadores no cenário internacional. O evento é assistido por milhões de pessoas no mundo inteiro, consolidando-se como um dos maiores espetáculos do futebol mundial e de todos os tempos."},{nome:"Copa Libertadores",descricao:"A Copa Libertadores da América, iniciada em 1960, é a principal competição continental de clubes da América do Sul. Considerada uma das competições mais apaixonantes e intensas do futebol mundial, reúne clubes de países como Brasil, Argentina, Uruguai, Colômbia e Chile, entre outros. A competição é marcada por jogos de alta rivalidade, com torcidas fervorosas, estádios lotados e disputas acirradas que geram grande emoção. Clubes lendários como Boca Juniors, River Plate, Santos e Flamengo já conquistaram o torneio, que também concede ao campeão uma vaga no Mundial de Clubes da FIFA. A Libertadores é um símbolo da identidade futebolística sul-americana e tem um papel cultural importante, refletindo a paixão pelo esporte na região, influenciando toda a cultura futebolística do continente e inspirando gerações."},{nome:"La Liga",descricao:"Fundada em 1929, a La Liga é a principal liga profissional de futebol da Espanha e uma das mais renomadas e competitivas do mundo. Conhecida pelo seu estilo técnico e ofensivo, a liga revelou grandes talentos e foi palco de histórias lendárias protagonizadas por clubes como Real Madrid e Barcelona, cujas rivalidades históricas transcendem o esporte. Jogadores como Lionel Messi, Cristiano Ronaldo e muitos outros marcaram época na competição. A La Liga também possui grande importância cultural e econômica na Espanha, atraindo milhões de espectadores globalmente, contribuindo para o desenvolvimento do futebol em nível mundial. A liga é considerada uma das maiores do planeta, com impacto significativo no cenário esportivo e social, influenciando outras competições e inspirando gerações de atletas e torcedores."},{nome:"Bundesliga",descricao:"A Bundesliga, fundada em 1963, é a principal liga de futebol da Alemanha e reconhecida por sua alta organização, qualidade técnica e estádios sempre cheios. O Bayern de Munique domina historicamente a competição, mas clubes como Borussia Dortmund, Schalke 04, Bayer Leverkusen e RB Leipzig também têm grande importância no cenário nacional e internacional. A liga alemã é famosa por sua filosofia de formação de jovens talentos, gestão financeira responsável e por oferecer um espetáculo futebolístico com ritmo acelerado e torcida vibrante. A Bundesliga é referência em inovação, eficiência e sustentabilidade no futebol europeu, sendo um exemplo a ser seguido por outras ligas do continente. Além disso, sua influência vai além do campo, impactando a cultura esportiva e social da Alemanha, consolidando-se como uma das ligas mais respeitadas mundialmente, com grande base de fãs e um papel fundamental no desenvolvimento do futebol global."},{nome:"Ligue 1",descricao:"Estabelecida em 1932, a Ligue 1 é a principal liga francesa de futebol, que tem ganhado projeção internacional principalmente graças ao investimento maciço no Paris Saint-Germain. Além do PSG, clubes como Lyon, Marseille, Monaco e Nantes são tradicionais na competição, que tem uma rica história de rivalidades intensas e jogos emocionantes. A Ligue 1 é conhecida pela mistura de jogadores experientes e jovens talentos que emergem para o cenário mundial. A liga possui uma forte base tática e física, com times valorizando tanto a técnica quanto a força. Seu crescimento tem contribuído para o fortalecimento do futebol francês no cenário global, revelando atletas que brilham em outras ligas e competições internacionais, ajudando a elevar o nível do esporte e consolidando sua importância no futebol europeu e mundial. A Ligue 1 é também reconhecida pela sua infraestrutura moderna e pela paixão das torcidas presentes em estádios por toda a França."},{nome:"Serie A (Itália)",descricao:"A Serie A, criada em 1898, é uma das ligas mais tradicionais e respeitadas do futebol mundial, conhecida por sua tática refinada, defesa sólida e organização exemplar. Clubes lendários como Juventus, Milan, Internazionale, Roma e Napoli têm protagonizado grandes conquistas nacionais e internacionais, deixando um legado histórico marcante. A liga italiana revelou inúmeros craques que brilharam em competições globais, sendo admirada pela paixão intensa das torcidas, rivalidades históricas e jogos equilibrados e estratégicos. A Serie A exerce grande influência no estilo e na cultura do futebol, sendo referência em disciplina tática, competitividade e inovação. Além disso, contribui significativamente para o desenvolvimento do esporte na Itália e ao redor do mundo, inspirando outras ligas e consolidando sua importância no cenário esportivo global."},{nome:"Saudi Pro League",descricao:"Nos últimos anos, a Saudi Pro League tem ganhado enorme visibilidade internacional graças aos investimentos bilionários que atraem jogadores consagrados mundialmente. A liga da Arábia Saudita busca se consolidar como um polo esportivo de alto nível, modernizando estádios, infraestrutura e promovendo o crescimento do futebol na região. A liga tem servido como uma plataforma para jogadores experientes e estrelas globais prolongarem suas carreiras, enquanto fortalece a presença do futebol no Oriente Médio, tornando-se um mercado cada vez mais relevante no cenário esportivo mundial. A Saudi Pro League tem também incentivado o desenvolvimento de talentos locais e promovido competições intensas que atraem torcedores e investidores, contribuindo para a popularização do esporte na região."},{nome:"Copa do Mundo",descricao:"Organizada pela FIFA desde 1930, a Copa do Mundo é o torneio mais prestigioso do futebol internacional, realizado a cada quatro anos e reunindo as melhores seleções do planeta. O evento transcende o esporte, influenciando cultura, política e economia em escala global. Ao longo das décadas, a Copa já revelou ícones como Pelé, Maradona e Messi, além de proporcionar momentos inesquecíveis que fazem parte da memória coletiva mundial, sendo uma verdadeira festa que mobiliza bilhões de pessoas e representa a maior celebração do futebol em nível mundial. A competição é marcada pela paixão dos fãs, rivalidades históricas, jogos emocionantes e pela busca do título máximo que simboliza a excelência no futebol global."}];return f.jsxs(f.Fragment,{children:[f.jsx(hi,{}),f.jsxs(p1,{children:[f.jsx("h1",{children:"Campeonatos"}),f.jsx("p",{children:"Conheça os principais campeonatos que agitam o mundo do futebol."}),o.map((c,m)=>f.jsxs("div",{className:"box",children:[f.jsx("h1",{children:c.nome}),f.jsx("p",{children:c.descricao})]},m)),f.jsx("button",{onClick:r,className:"btn",children:"Voltar"})]})]})}const Vu="/futebol-react/assets/real2-logo-BvBnHEWQ.png",Zu="/futebol-react/assets/city2-logo-BetiQIU0.png",Ku="/futebol-react/assets/boca-logo-CaG-3wDK.png",Ju="/futebol-react/assets/liver-logo-UKhwpqtE.png",ku="/futebol-react/assets/flu-logo-CQU26-h2.png",Fu="/futebol-react/assets/alhila-logo-DasdEtdW.png",$u="/futebol-react/assets/psg2-logo-opATwi-a.png",Wu="/futebol-react/assets/bar%C3%A7a-logo-B0Llv5Mi.png",Pu="/futebol-react/assets/ajax-logo-CVRUJLez.png",Iu="/futebol-react/assets/bayern2-log-BP9WhMgq.png",A1=yt.div`
  margin-top: 60px;
  padding-top: 60px;
  background-color: #0d1117; /* fundo elegante */
  color: white;
  padding:40px 20px;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 20px;
    color: #00bcd4;

  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 40px;
    color: #c9d1d9;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  ul li {
    background-color: #161b22;
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 40px;
    border-radius: 16px;
    box-shadow: 0 0 12px rgba(0, 188, 212, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  ul li:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(0, 188, 212, 0.4);
  }

  .time {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 40%;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .time-direita {
    justify-content: flex-end;
    text-align: right;
  }

  .vs {
    font-size: 2rem;
    width: 20%;
    text-align: center;
    color: #00bcd4;
    font-weight: bold;
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  .gols{
    font-size: 1.8rem;
    margin: 0 10px;
  }

  .btn {
    display: block;
    margin: 50px auto 0;
    padding: 14px 28px;
    font-size: 1.2rem;
    background-color: #00bcd4;
    color: #0d1117;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #0097a7;
  }

  @media screen and (max-width:930px) {
    h1{
      font-size: 2.8rem;
    }
    p{
      font-size: 1.2rem;
    }

    .time{
      font-size: 1.3rem;
    }

    .vs{
      font-size: 1.4rem;
    }

    .gols{
      font-size: 1.4rem;
    }

    .btn{
      font-size:1.2rem;
    }

    @media screen and (max-width:768px) {
        h1{
      font-size: 2.6rem;
    }
    p{
      font-size: 1.1rem;
    }

    .time{
      font-size: 1.2rem;
    }

    .time-direita img{
      width: 40px;
    }

    .time-esquerda img{
      width: 40px;
    }

    .vs{
      font-size: 1.3rem;
    }

    .gols{
      font-size: 1.3rem;
    }

    .btn{
      font-size:1.1rem;
    }

    }

    @media screen and (max-width:530px){
        h1{
      font-size: 2.4rem;
    }
    p{
      font-size: 1rem;
    }

    .time{
      font-size: 0.9rem;
    }

    .time-direita img{
      width: 30px;
    }

    .time-esquerda img{
      width: 30px;
    }

    .vs{
      font-size: 1.1rem;
    }

    .gols{
      font-size: 1.1rem;
    }

    .btn{
      font-size:1rem;
    }
    }

    @media screen and (max-width:480px) {
      h1{
      font-size: 2.2rem;
    }
    p{
      font-size: 0.9rem;
    }

    .time{
      font-size: 0.8rem;

    
    }
    .time-esquerda{
      position: relative;
      right: 20px;
    }

     .time-direita{
      position: relative;
      left: 20px;
    }

    .time-direita img{
      width: 25px;
    }

    .time-esquerda img{
      width: 25px;
    }

    .vs{
      font-size: 0.9rem;
    }

    .gols{
            font-size: 0.9rem;

    }

    .btn{
      font-size:0.8rem;
    }

   
    }

   
  }
`;function v1(){const i=an();function r(){i("/")}return f.jsxs(f.Fragment,{children:[f.jsx(hi,{}),f.jsxs(A1,{children:[f.jsx("h1",{children:"Partidas"}),f.jsx("p",{children:"Confira as partidas recentes e emocionantes entre grandes clubes."}),f.jsxs("ul",{className:"lista-partidas",children:[f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:ku,alt:"Fluminense logo"}),f.jsx("strong",{children:"Fluminense"})]}),f.jsxs("span",{className:"placar",children:[f.jsx("strong",{className:"gols",children:"4"}),f.jsx("span",{className:"vs",children:"x"}),f.jsx("strong",{className:"gols",children:"3"})]}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Real Madrid"}),f.jsx("img",{src:Vu,alt:"Real Madrid logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:Zu,alt:"Manchester City logo"}),f.jsx("strong",{children:"Manchester City"})]}),f.jsxs("span",{className:"placar",children:[f.jsx("strong",{className:"gols",children:"1"}),f.jsx("span",{className:"vs",children:"x"}),f.jsx("strong",{className:"gols",children:"1"})]}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Barcelona"}),f.jsx("img",{src:Wu,alt:"Barcelona logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:Ku,alt:"Boca Juniors logo"}),f.jsx("strong",{children:"Boca Juniors"})]}),f.jsxs("span",{className:"placar",children:[f.jsx("strong",{className:"gols",children:"2"}),f.jsx("span",{className:"vs",children:"x"}),f.jsx("strong",{className:"gols",children:"2"})]}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Ajax"}),f.jsx("img",{src:Pu,alt:"Ajax logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:$u,alt:"PSG logo"}),f.jsx("strong",{children:"PSG"})]}),f.jsxs("span",{className:"placar",children:[f.jsx("strong",{className:"gols",children:"4"}),f.jsx("span",{className:"vs",children:"x"}),f.jsx("strong",{className:"gols",children:"2"})]}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Liverpool"}),f.jsx("img",{src:Ju,alt:"Liverpool logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:Fu,alt:"Al Hilal logo"}),f.jsx("strong",{children:"Al Hilal"})]}),f.jsxs("span",{className:"placar",children:[f.jsx("strong",{className:"gols",children:"3"}),f.jsx("span",{className:"vs",children:"x"}),f.jsx("strong",{className:"gols",children:"5"})]}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Bayern de Munique"}),f.jsx("img",{src:Iu,alt:"Bayern logo"})]})]})]}),f.jsx("button",{className:"btn",onClick:r,children:"Voltar"})]})]})}const y1="/futebol-react/assets/flamengo-CT3cvdDx.png",b1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAAC2VBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbTW0VAAAA83RSTlMA7/PqPQex9/v/9UC57fHw+DY0oYeIjI6TlZmeAaICqASvOwa3OAm+DccvE9ArGtnmJiPj4SEIvC7r2xu/0xULwk/6yg9lChDMf7MFFNKapBjXHt6AJOQtayz5/FZ7Qvb0q1DaYP5FxAxy4oSGxUHyY5G24KZ3wSjnlB/Ul4FnV2wzdqlDbf1iFtjGGbR46DCjHKqwy1kquuk8z9Vo5YWJyR2YA0jIJ4PsN1pMkjWWEtZOfII5Upt9IO4RRyIlit9JP1tdDl5RShdxVU1UWHA+c37N3HWfMW+Lbqxhw8A6u5wpro0yakRTuJClj7JLeWmnvd0FhrxCAAAJHElEQVR4AezQg7XEAAAAsHPdb5v7j3gT9NVORsimFgAAAACA7W44+8OmzPEU7EptpxQYRsOJk/LANCoXChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQInHyhQoECBAgUKFChQoECBArP8ohOXaw286sb1zVoDu3IrsJ07gQIFChQoUKBAgQIFChQoUKBAgQIFChQoUOAcCBQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQo8F5gOw8CBY7qUWA7TwLbeRbYzovAVl7fBLby/hGV2x0EFvn8qhL4LbDIz29ULv8TWOT/TK49oEkCRDEATruztm3btm27ubZte3DbOUIy+PTqP0LxaTq1zKDUFtA3Yya1vrNSW0Df7DnUcnNTW0DfvPnUFixMdAENixZTW7IUyrLliS7gipXUVq2GMm1NoguYz1Jbuw7K+g2JLuDGTdQ2b/F/89QWcCsNa7ZB2b4j0QXcScOu3VD27E10AffRsH8MlAMH01zAwhQaRkA6dDjNBVy3loYjkI4eS3MBj+doOAHpZI7aJoSz8RS102cgDexPrYRwztKt6AvnzlO7gGgmXKQhdxLSpU3U+iOaeQdpuDwP0pUKtRyiqfaioVaH1KChiWiu0jF+HKRrNMxHMNuv0zGkpzKaOQjmxk0aKres7qihhmBu03GhN6R6jYY7iGXRKjruLoVTSzDcQyz3K3Q8qEN6+IiGxwjlyVNannmdAcNzhLKzQkflBbSXp6mdfoVIXjdp6T8V2hsaSi8RSP0tPXPWQXtGQ793COT9AHpGj+mpwvaCWYij9zF6PnyE9ukpDZ8PIYyFm2l6dNKbbzB82Y4ovn6ja8o0rz1vmLgbQey5V6GrAcN3OkYiiHVjP9D14ye0cb/ouI8Yfv/5QNvfArTt/2g4/R8htLRWaCtfgeF4Gw3ZdkTQ0a49rsmV7WEAf9NRv7G5p07FtvMEz1Sc7olZ1X2aexDbGU/FtrFj27adsXXMGxhbWegPtbLX7xIW//rzckpYMQ8CkuIpYEB9mK/xylWUsRoi1lDE2rYw3rr1KZSxag4EtG9CEa94MJy3YaNLKes9CNjUhyI2w3DdVm+hnKVbkXVPYGQbjJawfXCUkiZ5ELGDIrLthMnq7SpIWQPmQMTuNhSxpxvMtfu1Oi5luZMhZFkBiliQAFM13tsiRHkL50HIPgrZD0N5B0bFUUHqCxDybBWKCB2EkZz+pbJTyaGcELI1P0WsGgsT9V7d0KWSmr0h5jBFu8vmObKvuUs1R9Mh5th0CikJ4/QY3T1KRfG9PIg5nkoR8UkwzJHRK6JU9qe2EOOsp5AG9WAS50Ry9yjVTT8BQSd7UkjFxjBHYNP+jCg11CkMUc+5FJIMY3hNT512qaPPGYhK3EghQ8/CEAlbS69yqSV7EoSdC1NIxxowQuVXn2hGTc3OOxBVNR8fpyDmQvqCAtTV7KIDYZfyUEjKZcS+qZlVUqht3DYHwqqOoJiaVxDjnCNXO4ao7/STkHAt5TG5wV7/gXUizAJP5YWE3S0oJvVpxLKcy9b3cZkF3CpNIWNliGKmH0Psan897SizRKjoPMho1JKCkhHD+vZh1sh2uCpkBE5JDCjFsMoLmCWm3fAgZUh2CnqlAmLZzTD1xXduCjm781FQoRuIKeLpqLj8vXZD0qwIBW1MRGy7FaUet81lD5Ju16Ug9w5i3IQ91DK0VA/I6taCoprXR6y7Sw3uvYMVIKtCSZei1iDm1btPZUdL9oC8zDiK6lMdsW8zFcW3OB6EvPIjKWx8AI/vERz5IBEKTlSjsHFFYIK7VDD0YVMHCmqkUVxpDyY4MpGyQi2u54SK9juiFNbndZjhjQiluHte3A0lCYcLUdybDswwdTBlrBrUCGq8t+IoLmMTTPFCHgo7euj1ANQE2mWjuOgDGKP9fAqKeztvAhQFMrdQwvQrMEeluhSRUvF6ZagKvCO1fqlJMIgz2eUjFWqRVBXKgiuPUkbXyjBJ7Wp8hPC75ztAXc47BShj5Oswy5MF+EfCz2TuhoZnN+ehjPjnYJiEUhLLJ63V+jCljDgG0xy5x99R6L3zu6Gl94IopfR5H+ZJL8jfkvLBzQ7QU34t5YTuwEDBN13+SlznS1WhJ3huJCW9fQEm6laFv3D0lQ3toanD5gKUNK0vzFR+AH/Cnf1hjpzQ9dHH8ZRU4CZMtTKF34ue/uTTIHQFL02krEixIEzVuLTLb8RPPFwvAG2tVmejtAW7Ya4ZH/ArhaZ/Ng/6nAMfRCit5kcw2evTOHTmC7sBfReu9qG8VU/DbNvLfN4eWaHIgjDlDR0GwzkBZIUOVxtSQbhTEIAVWDYiRAXRSa0BWDP2z6aS+YmA1fgva6NU8td5sJw5T8RRzZjesGYkD6Ciaovhe623tYlQUZum8Lvg2XIpVLW2OnzO6b9rC5UN7g+f63F3pEtlVcbC3xL7tYxSmdu5EXztwrnBIaqLdJ0BP2u/N19uaij0t2PwsZxPf5xKHQVnVYZ/Jdz+e0FqaXA+CN8KVnqYn3qWD4FvBXd2yU49kVyb4FfeS5NmU1PcmzXgU96npcdR18jMCnb51EVbVII/BYvsGkdtcf/oBl8KFl4/m/qmbasAP0qodGgp9YXn14IfBW8/bEZ9HPBWVfhS1fGFqC/0z53wq/aZK1xqanirLXysd+mC1JF7/uvwt4R/vRuhKnfFO63he1P/PYBqjg6vD8ByXu+aSnnhJZ8H8Q2r8V8GRyjH3fOfDviBNfXlni4lzH7zBH7GWlw6P0XF/beSh1+wgnkXpFBE+H97G+M3WK1feCbER4l0nNIBv8NK/OypKP9ItPudGfgD1rrk+y5/j/v/TkfwxyynXrEBLn+L27D4JgePZAX6/2MVf8Vt8EmtAIRY3pxSdX+5fCX7Siyf5b2+Y5XL77kDSsgun+VVLznA5dfcnsUWByDNCiwemBFhpPvdkw6UWM6mUxOL2eWzLMuyLMuyLMuyLMuyLCtGfAki0AMhNRHAdgAAAABJRU5ErkJggg==",x1="/futebol-react/assets/inter-CWvqcyYW.png",S1="/futebol-react/assets/fica-BXKNiDyW.png",E1=yt.div`
    margin-top: 50px;
    padding: 50px;
    background-color: #0F0F0F;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

  .box-container a {
  display: contents;
  text-decoration: none;
  color: inherit;
}
    
    
    .title{
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p{
        margin-bottom: 30px;
        font-size: 1.5rem;
        color: #B3B3B3;
    }

    .box-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        transition: .4s ease;

        
    }

    grid-template-columns: repeat(3, 1fr);

    .box{
        background-color: #1A1A1A;
        width: 200px;
        padding: 20px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       border-radius: 5px;
       cursor: pointer;
       transition: .4s ease;
    }

    .box:hover{
        background-color: white;
        color: black;
        transform: scale(1.1);
    }
    .box h1{
        font-size: 1.5rem ;
        text-align: center;
        margin-top: 20px;
    }

    img{
        width: 100px;
    }


    .btn {
    display: block;
    margin: 50px auto 0;
    padding: 14px 28px;
    font-size: 1.2rem;
    background-color:  #2d2f3a;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #2d2f3a93;
  }


  @media screen and (max-width:930px) {
    .box-container{
        grid-template-columns:repeat(3, 1fr);
        transition: .4s ease;

    }

    .title{
        font-size: 2.8rem;
    }

    p{
        font-size: 1.4rem;
    }
  }

    @media screen and (max-width:768px) {
    .box-container{
        grid-template-columns:repeat(2, 1fr);
        transition: .4s ease;
    }

    .title{
        font-size: 2.6rem;
    }

    p{
        font-size: 1.3rem;
        text-align: center;
    }

    img{
        width: 80px;
    }

    .btn{
        font-size: 1rem;
    }


  }

  @media screen and (max-width:530px) {
     .box-container{
        grid-template-columns:1fr;
        transition: .4s ease;
    }
    .box{
        width: 100%;
    }

    .title{
        font-size: 2.4rem;
    }

    p{
        font-size: 1.2rem;
        text-align: center;
    }

    img{
        width: 80px;
    }

    .btn{
        font-size: 1rem;
    }
  }


`;function j1(){const i=an();function r(){i("/")}return f.jsxs(f.Fragment,{children:[f.jsx(hi,{}),f.jsxs(E1,{children:[f.jsx("h1",{className:"title",children:"Times"}),f.jsx("p",{children:"Explore os perfis dos mais famosos times de futebol do mundo."}),f.jsxs("div",{className:"box-container",children:[f.jsx("a",{href:"https://www.instagram.com/fluminensefc/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:ku,alt:""}),f.jsx("h1",{children:"Fluminense"})]})}),f.jsx("a",{href:"https://www.instagram.com/realmadrid/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Vu,alt:""}),f.jsx("h1",{children:"Real Madrid"})]})}),f.jsx("a",{href:"https://www.instagram.com/fcbayern/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Iu,alt:""}),f.jsx("h1",{children:"Bayern de Munique"})]})}),f.jsx("a",{href:"https://www.instagram.com/psg/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:$u,alt:""}),f.jsx("h1",{children:"PSG"})]})}),f.jsx("a",{href:"https://www.instagram.com/afcajax/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Pu,alt:""}),f.jsx("h1",{children:"Ajax"})]})}),f.jsx("a",{href:"https://www.instagram.com/liverpoolfc/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Ju,alt:""}),f.jsx("h1",{children:"Liverpool"})]})}),f.jsx("a",{href:"https://www.instagram.com/alhilal/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Fu,alt:""}),f.jsx("h1",{children:"Al Hilal"})]})}),f.jsx("a",{href:"https://www.instagram.com/fcbarcelona/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Wu,alt:""}),f.jsx("h1",{children:"Barcelona"})]})}),f.jsx("a",{href:"https://www.instagram.com/bocajrsoficial/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Ku,alt:""}),f.jsx("h1",{children:"Boca Juniors"})]})}),f.jsx("a",{href:"https://www.instagram.com/mancity/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:Zu,alt:""}),f.jsx("h1",{children:"Manchester City"})]})}),f.jsx("a",{href:"https://www.instagram.com/flamengo/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:y1,alt:""}),f.jsx("h1",{children:"Flamengo"})]})}),f.jsx("a",{href:"https://www.instagram.com/juventus/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:b1,alt:""}),f.jsx("h1",{children:"Juventus"})]})}),f.jsx("a",{href:"https://www.instagram.com/inter/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:x1,alt:""}),f.jsx("h1",{children:"Internazionale"})]})}),f.jsx("a",{href:"https://www.instagram.com/slbenfica/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs("div",{className:"box",children:[f.jsx("img",{src:S1,alt:""}),f.jsx("h1",{children:"Benfica"})]})})]}),f.jsx("button",{onClick:r,className:"btn",children:"Voltar"})]})]})}const z1=yt.div`
  min-height: 100vh;
  background-color: #0F0F0F;
  color: #E0E0E0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 10px;

   @media screen and (max-width:930px){
      
       margin-top: 40px;
       h1{
        font-size: 2.4rem;
       }
       p{
        font-size: 1.1rem;
       }
    }


       @media screen and (max-width:768px){
      
      
       h1{
        margin-top: 20px;
        font-size: 2.3rem;
       }
       p{
        font-size: 1rem;
       }
    }

        @media screen and (max-width:530px){
      
      
       h1{
        
        font-size: 2.1rem;
       }
       p{
        font-size: 0.9rem;
       }
    }

        @media screen and (max-width:480px){
      
      
       h1{
        
        font-size: 2rem;
       }
       p{
        font-size: 0.8rem;
       }
    }


`,T1=yt.div`
  max-width: 768px;
  text-align: center;
  .btn {
    display: block;
    margin: 50px auto 0;
    padding: 14px 28px;
    font-size: 1.2rem;
    background-color:  #2d2f3a;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

   
  }

  .btn:hover {
    background-color: #2d2f3a93;
  }

  @media screen and (max-width:930px) {
    .btn{
      font-size: 1rem;
    }
  }

  @media screen and (max-width:768px) {
    .btn{
      font-size: 1rem;
    }
  }

   @media screen and (max-width:530px) {
    .btn{
      font-size: 0.9rem;
    }
  }

     @media screen and (max-width:480px) {
    .btn{
      font-size: 0.8rem;
    }
  }
`,R1=yt.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
`,Uo=yt.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #CCCCCC;
  margin-bottom: 1.5rem;
`,wo=yt.span`
  font-weight: 600;
  color: #FFFFFF;
`;function M1(){const i=an();function r(){i("/")}return f.jsxs(f.Fragment,{children:[f.jsx(hi,{}),f.jsx(z1,{children:f.jsxs(T1,{children:[f.jsx(R1,{children:"Sobre o Projeto"}),f.jsxs(Uo,{children:["Este projeto foi desenvolvido com ",f.jsx(wo,{children:"React"}),", com o objetivo de explorar e exibir informações sobre os principais clubes de futebol do mundo. Aqui, os usuários podem navegar por páginas de times, visualizar partidas recentes, placares e outros detalhes de forma dinâmica e estilizada."]}),f.jsxs(Uo,{children:["A aplicação também utiliza ",f.jsx(wo,{children:"Styled Components"}),", ",f.jsx(wo,{children:"React Router"})," para navegação entre páginas, e uma abordagem visual moderna inspirada em apps de esportes reais."]}),f.jsx(Uo,{children:"O projeto é totalmente responsivo e pode ser expandido para incluir estatísticas dos jogadores, histórico de confrontos e integração com APIs de dados esportivos no futuro."}),f.jsx("button",{className:"btn",onClick:r,children:"Voltar"})]})})]})}const C1=yt.footer`
    padding: 20px;
    background-color: #111111ff ;
    color: white;
    font-size: 1.4rem;
    position: relative;
    bottom: 0;
    text-align: center;
    transition: .4s ease;


    @media screen and (max-width:930px) {
        font-size: 1.2rem;
        transition: .4s ease;
    
    }

     @media screen and (max-width:768px) {
        font-size: 1rem;
    }
`;function D1(){return f.jsx(f.Fragment,{children:f.jsx(C1,{children:f.jsx("p",{children:" © 2025 Futebol Clube. Todos os direitos reservados. "})})})}const O1=yt.section`
    height: 100vh;
    background-color: #111111ff;
    color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

   h1{
    font-size: 5rem;
   position: relative;
    text-shadow: 0px 2px 4px black;
   }

   p{
    margin-top: 20px;
    font-size: 1.6rem;
    color: #d1d5db;
   }


   @media screen  and (max-width:930px){
      h1{
        font-size: 4.5rem;
      }
      p{
        font-size: 1.4rem;
      }
   }

   @media screen and (max-width:768px){
      h1{
        font-size: 4rem;
      }

      P{
        font-size: 1.2rem;
      }
   }

   @media screen and (max-width:480px){
      h1{
        font-size: 3.5rem;
      }

      P{
        font-size: 1rem;
      }
   }

 
`,N1=yt.section`  
    /* height: 100vh; */
    background-color: #1a1919ff; /* preto */
    /* ajusta aqui se o header for maior */
    display: flex;
    align-items: center;
    justify-content: center;
   
    
 
    .container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        padding-top: 50px;
        width: 100%;

       
        
    }
   .box {
  margin: 0 30px;
  min-height: 250px;
  min-width: 300px;
  padding: 20px;
  background-color: #2d2f3a;
  color: white;
  border-radius: 5px;
  text-align: center;
  transition: .4s ease;
  box-shadow: 2px 2px 4px black;
}

.box.campeonatos,
.box.times,
.box.jogadores {
  max-width: 500px;
  width: 100%;
}

    .box h1{
        margin-bottom: 10px;
        font-size: 2rem;
    }

    .box p{
        text-indent: 5px;
        text-align: justify;
        margin-bottom: 10px;
    }

    .box button{
        padding: 10px;
        border: 1px solid black;
        color: white;
        background-color: green;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: .4s ease;
        
    }

    .box button:hover{
        background-color: darkgreen;

    }

  

   
.lista-campeonatos {
  padding: 20px;
  background-color: #2d2f3a;
  color: white;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: .4s ease;
  display: flex;
  flex-direction: column;
 
  
}

.item-campeonato {
  padding: 20px;
  background-color: #161515ff;
  margin: 10px 0;
  width: 100%; /* ocupa toda largura disponível sem extrapolar */
  border-radius: 5px;
  cursor: pointer;
  transition: .4s ease;
}


.item-campeonato:hover {
  background-color: white;
  color: black;
}



    .partidas{
        width: 500px;
        /* height: 540px; */
  }


  



    .times{
        margin-bottom: 20px;
    }

    .lista-times{
       display: flex;
       flex-direction: column;
    }

    .lista-times ul li{
        padding: 20px;
        list-style: none;
         background-color: #161515ff;
         margin: 10px;
         font-size: 1.2rem;
         border-radius: 5px;
         cursor: pointer;
    }

    .times .btn{
      position: relative;
      margin-top: 20px;
    }


 

.jogadores {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #2d2f3a;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #000000ab;
  color: white;
  cursor: pointer;

  /* Adicionados para igualar aos outros boxes */
  margin: 0 30px;            /* igual ao .box */
  min-height: 250px;         /* igual ao .box */
  min-width: 300px;          /* igual ao .box */
  text-align: center;        /* igual ao .box */
  transition: .4s ease;      /* igual ao .box */
  margin-bottom: 50px;       /* evita grudar no footer */
}

.jogador{
    position: relative;
    top: 5px;
}

.lista-jogadores {
  margin-top: 30px;
}

.lista-jogadores ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lista-jogadores li {
  display: flex;
  align-items: center;
  background-color: #1b1b1b;
  padding: 10px 14px;
  border-radius: 6px;
  color: #e4e4e4;
  transition: all 0.3s ease;
}

.lista-jogadores li:hover {
  background-color: #ffffff;
  color: #000000;
}

.lista-jogadores li img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #444;
}

.lista-jogadores li span {
  font-size: 1rem;
  font-weight: 500;
}

    img{
        width: 50px;
    }

    .jogadores .btn{
      margin-top: 10px;

    }


.times {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #2d2f3a;
  color: white;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #000000ab;
  text-align: center;
  cursor: pointer;

  /* Igual aos outros boxes */
  margin: 0 30px;
  min-height: 250px;
  min-width: 300px;
  transition: .4s ease;
  margin-bottom: 50px;
}



 .lista-times {
  margin-top: 30px;
}

.lista-times ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lista-times li {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: #1b1b1b; /* fundo dark leve */
  transition: background-color 0.3s ease;
  color: #d1d5db;
}

.lista-times li:hover {
  background-color: white;
}
.lista-times li:hover span {
  color: black;
}


.lista-times li img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
  object-fit: contain;
  border-radius: 4px;
}

.lista-times li span {
  font-size: 1rem;
  font-weight: 500;
  color: #e4e4e4;
}


.lista-partidas {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.lista-partidas li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1b1b;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.7);
  color: white;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.partidas .btn{
    position: relative;
    margin-top: 50px;
   
}

.lista-partidas li:hover {
  background-color: white;
  color: black;
  span{
    color: black;
  }
}



.time {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 130px;
}

.time-esquerda img {
  order: 0;
}

.time-esquerda strong {
  order: 1;
}

.time-direita {
  justify-content: flex-end;
}

.time-direita strong {
  order: 0;
}

.time-direita img {
  order: 1;
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.time-esquerda img,
.time-direita img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.vs {
  font-weight: bold;
  font-size: 1.3rem;
  color: #ccc;
  user-select: none;
  margin: 0 10px;
  min-width: 20px;
  text-align: center;
}


/* Responsividade leve */
@media (max-width: 600px) {
  .lista-times li span {
    font-size: 0.9rem;
  }
  .lista-times li img {
    width: 28px;
    height: 28px;
  }
}

/* Responsividade geral para .container */
@media screen and (max-width:930px) {
    .container {
    grid-template-columns: repeat(1fr);
    padding: 20px;
  }
  .box {
    margin: 0 auto;
    width: 90%;
    transition: .4s ease;
  }

  .jogadores {
    height: auto;
  }

  .partidas {
    width: 100%;
  }


  .box h1 {
    font-size: 1.6rem;
  }

  .box button {
    font-size: 1rem;
    padding: 8px;
  }

  .lista-times li span,
  .lista-jogadores li span {
    font-size: 1rem;
  }

 
  .lista-times li img,
  .lista-jogadores li img {
    width: 36px;
    height: 36px;
  }

  .time{
    min-width: 100px;
  }

 span{
  font-size: 0.8rem;
 }


  .vs {
    font-size: 1rem;
  }


}



/* Ajustes para tablets */
@media (max-width: 768px) {



  .container {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .box {
    margin: 0 auto;
    width: 90%;
      transition: .4s ease;
  }

  .jogadores {
    height: auto;
  }

  .partidas {
    width: 500px;

  }
  .box h1 {
    font-size: 1.6rem;
  }

  .box button {
    font-size: 1rem;
    padding: 8px;
  }

  .lista-times li span,
  .lista-jogadores li span {
    font-size: 0.95rem;
  }

  .lista-times li img,
  .lista-jogadores li img {
    width: 36px;
    height: 36px;
  }

  .time {
    min-width: 100px;
  }

  .vs {
    font-size: 1.1rem;
  }
}

@media screen and (max-width:555px) {
  .box {
    padding: 16px;
    transition: .4s ease;
    width: 400px !important;
  }

  
} 

/* Ajustes para smartphones */
@media (max-width: 480px) {
  .box {
    padding: 16px;
    transition: .4s ease;
    width: 300px !important;
  }

  .partidas{
    width: 300px;
  }

  .box h1 {
    font-size: 1.4rem;
  }

  .box p {
    font-size: 0.95rem;
    text-align: left;
  }

  .box button {
    width: 100%;
  }

  .lista-partidas li,
  .lista-times li,
  .lista-jogadores li {
    padding: 10px;
    gap: 8px;
  }

  .lista-times li img,
  .lista-jogadores li img {
    width: 30px;
    height: 30px;
  }

  .lista-jogadores ul,
  .lista-times ul {
    gap: 8px;
  }

  .time {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    min-width: auto;
  }

  .vs {
    font-size: 1rem;
    margin: 0 5px;
  }
}


   
`;function _1(){return f.jsx(f.Fragment,{children:f.jsx(O1,{children:f.jsxs("div",{className:"container",children:[f.jsxs("h1",{children:["Bem-vindo ao ",f.jsx("br",{}),"Futebol Clube"]}),f.jsxs("p",{children:["Todas as informações sobre campeonatos ",f.jsx("br",{})," e resultados em um só lugar."]})]})})})}const U1="/futebol-react/assets/vini-D7uD0Fkj.png",w1="/futebol-react/assets/arias-BWwtTmzV.png",B1="/futebol-react/assets/musiala2-5kab2vWJ.png",H1="/futebol-react/assets/mbappe-BK5qW9lN.png",q1="/futebol-react/assets/haaland-XvcjJq8V.png",L1="/futebol-react/assets/jude-DVRnFXY8.png",Y1="/futebol-react/assets/de-bruyne-Dn6aZNVi.png",G1="/futebol-react/assets/luiz-BglvNKqQ.png",Q1="/futebol-react/assets/martineli-DDXyzIpi.png",X1="/futebol-react/assets/dembele-BPof0ZJ9.png",V1="/futebol-react/assets/yamal-BzvUFDgS.png",Z1="/futebol-react/assets/brian-D7YyxU5Z.png",K1="/futebol-react/assets/gnabry-BF9ikPHr.png",J1="/futebol-react/assets/cavani-C2o79PlU.png";function k1(){const i=an();function r(){i("/campeonatos")}function o(){i("/partidas")}function c(){i("/times")}function m(){i("/jogadores")}return f.jsx(f.Fragment,{children:f.jsx(N1,{children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"box campeonatos",children:[f.jsx("h1",{children:"Campeonatos"}),f.jsx("p",{children:"Veja os principais campeonatos nacionais e internacionais que movimentam o mundo do futebol."}),f.jsxs("div",{className:"lista-campeonatos",children:[f.jsx("div",{className:"item-campeonato",children:f.jsx("h2",{children:"Brasileirão Série A"})}),f.jsx("div",{className:"item-campeonato",children:f.jsx("h2",{children:"Champions League"})}),f.jsx("div",{className:"item-campeonato",children:f.jsx("h2",{children:"Copa do Mundo"})}),f.jsx("div",{className:"item-campeonato",children:f.jsx("h2",{children:"Libertadores"})}),f.jsx("div",{className:"item-campeonato",children:f.jsx("h2",{children:"Premier League"})})]}),f.jsx("button",{className:"btn",onClick:r,children:"Ver Todos os Campeonatos"})]}),f.jsxs("div",{className:"box partidas",children:[f.jsx("h1",{children:"Partidas"}),f.jsx("p",{children:"Confira as partidas recentes e emocionantes entre grandes clubes."}),f.jsxs("ul",{className:"lista-partidas",children:[f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:ku,alt:"Fluminense logo"}),f.jsx("strong",{children:"Fluminense"})]}),f.jsx("span",{className:"vs",children:"x"}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Real Madrid"}),f.jsx("img",{src:Vu,alt:"Real Madrid logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:Zu,alt:"Manchester City logo"}),f.jsx("strong",{children:"Manchester City"})]}),f.jsx("span",{className:"vs",children:"x"}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Barcelona"}),f.jsx("img",{src:Wu,alt:"Barcelona logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:Ku,alt:"Boca Juniors logo"}),f.jsx("strong",{children:"Boca Juniors"})]}),f.jsx("span",{className:"vs",children:"x"}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Ajax"}),f.jsx("img",{src:Pu,alt:"Ajax logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:$u,alt:"PSG logo"}),f.jsx("strong",{children:"PSG"})]}),f.jsx("span",{className:"vs",children:"x"}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Liverpool"}),f.jsx("img",{src:Ju,alt:"Liverpool logo"})]})]}),f.jsxs("li",{children:[f.jsxs("span",{className:"time time-esquerda",children:[f.jsx("img",{src:Fu,alt:"Al Hilal logo"}),f.jsx("strong",{children:"Al Hilal"})]}),f.jsx("span",{className:"vs",children:"x"}),f.jsxs("span",{className:"time time-direita",children:[f.jsx("strong",{children:"Bayern de Munique"}),f.jsx("img",{src:Iu,alt:"Bayern logo"})]})]})]}),f.jsx("button",{className:"btn",onClick:o,children:"Ver Partidas"})]}),f.jsxs("div",{className:"box times",children:[f.jsx("h1",{children:"Times"}),f.jsx("p",{children:"Confira os clubes que marcaram sua história no futebol mundial."}),f.jsx("div",{className:"lista-times",children:f.jsxs("ul",{children:[f.jsxs("li",{className:"real",children:[f.jsx("img",{src:Vu,alt:"real-logo"}),f.jsx("span",{children:"Real Madrid (Espanha)"})]}),f.jsxs("li",{className:"city",children:[f.jsx("img",{src:Zu,alt:"city-logo"}),f.jsx("span",{children:"Manchester City (Inglaterra)"})]}),f.jsxs("li",{className:"bayern",children:[f.jsx("img",{src:Iu,alt:"bayern-logo"}),f.jsx("span",{children:"Bayern de Munique (Alemanha)"})]}),f.jsxs("li",{className:"psg",children:[f.jsx("img",{src:$u,alt:"psg-logo"}),f.jsx("span",{children:"Paris Saint-Germain (França)"})]}),f.jsxs("li",{className:"flu",children:[f.jsx("img",{src:ku,alt:"flu-logo"}),f.jsx("span",{children:"Fluminense (Brasil)"})]}),f.jsxs("li",{className:"barca",children:[f.jsx("img",{src:Wu,alt:"barça-logo"}),f.jsx("span",{children:"Barcelona (Espanha)"})]}),f.jsxs("li",{className:"liverpool",children:[f.jsx("img",{src:Ju,alt:"liverpool-logo"}),f.jsx("span",{children:"Liverpool (Inglaterra)"})]}),f.jsxs("li",{className:"boca",children:[f.jsx("img",{src:Ku,alt:"boca-logo"}),f.jsx("span",{children:"Boca Juniors (Argentina)"})]}),f.jsxs("li",{className:"ajax",children:[f.jsx("img",{src:Pu,alt:"ajax-logo"}),f.jsx("span",{children:"Ajax (Holanda)"})]}),f.jsxs("li",{className:"alhilal",children:[f.jsx("img",{src:Fu,alt:"alhilal-logo"}),f.jsx("span",{children:"Al Hilal (Arábia Saudita)"})]})]})}),f.jsx("button",{className:"btn",onClick:c,children:"Ver Times"})]}),f.jsxs("div",{className:"box jogadores",children:[f.jsx("h1",{children:"Jogadores"}),f.jsx("p",{children:"Grandes jogadores marcam gerações com sua técnica, carisma e conquistas. Seja decidindo títulos em finais épicas ou encantando com dribles geniais, eles inspiram milhões e se tornam lendas dentro e fora dos gramados."}),f.jsx("div",{className:"lista-jogadores",children:f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("img",{src:U1,alt:"Vinícius Jr"})," ",f.jsx("span",{children:"Vinícius Jr (Real Madrid)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:q1,alt:"Haaland"})," ",f.jsx("span",{children:"Erling Haaland (Manchester City)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:w1,alt:"Jhon Arias"})," ",f.jsx("span",{children:"Jhon Arias (Fluminense)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:H1,alt:"Mbappé"})," ",f.jsx("span",{children:"Kylian Mbappé (PSG)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:B1,alt:"Musiala"})," ",f.jsx("span",{children:"Jamal Musiala (Bayern de Munique)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:L1,alt:"Jude Bellingham"}),f.jsx("span",{children:"Jude Bellingham (Real Madrid)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:Y1,alt:"Kevin De Bruyne"}),f.jsx("span",{children:"Kevin De Bruyne (Manchester City)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:G1,alt:"Luis Díaz"}),f.jsx("span",{children:"Luis Díaz (Liverpool)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:J1,alt:"Edinson Cavani"}),f.jsx("span",{children:"Edinson Cavani (Boca Juniors)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:Q1,alt:"Gabriel Martinelli"}),f.jsx("span",{children:"Matheus Martinelli (Fluminense)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:X1,alt:"Ousmane Dembélé"}),f.jsx("span",{children:"Ousmane Dembélé (PSG)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:V1,alt:"Lamine Yamal"}),f.jsx("span",{children:"Lamine Yamal (Barcelona)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:Z1,alt:"Brian Brobbey"}),f.jsx("span",{children:"Brian Brobbey (Ajax)"})]}),f.jsxs("li",{children:[f.jsx("img",{src:K1,alt:"Serge Gnabry"}),f.jsx("span",{children:"Serge Gnabry (Bayern de Munique)"})]})]})}),f.jsx("button",{className:"btn jogador",onClick:m,children:"Ver Jogadores"})]})]})})})}function F1(){return f.jsxs(f.Fragment,{children:[f.jsx(hi,{}),f.jsx(_1,{}),f.jsx(k1,{}),f.jsx(D1,{})]})}function $1(){return f.jsx(f.Fragment,{})}function W1(){return f.jsx(f.Fragment,{children:f.jsx(av,{basename:"/futebol-react",children:f.jsxs(_A,{children:[f.jsx(al,{path:"/",element:f.jsx(F1,{})}),f.jsx(al,{path:"/campeonatos",element:f.jsx(g1,{})}),f.jsx(al,{path:"/partidas",element:f.jsx(v1,{})}),f.jsx(al,{path:"/times",element:f.jsx(j1,{})}),f.jsx(al,{path:"/sobre",element:f.jsx(M1,{})}),f.jsx(al,{path:"/jogadores",element:f.jsx($1,{})})]})})})}X0.createRoot(document.getElementById("root")).render(f.jsx(O.StrictMode,{children:f.jsx(W1,{})}));
