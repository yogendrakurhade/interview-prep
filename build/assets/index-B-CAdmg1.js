(function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))m(x);new MutationObserver(x=>{for(const U of x)if(U.type==="childList")for(const X of U.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&m(X)}).observe(document,{childList:!0,subtree:!0});function q(x){const U={};return x.integrity&&(U.integrity=x.integrity),x.referrerPolicy&&(U.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?U.credentials="include":x.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function m(x){if(x.ep)return;x.ep=!0;const U=q(x);fetch(x.href,U)}})();var rl={exports:{}},Ci={};var fp;function Yf(){if(fp)return Ci;fp=1;var L=Symbol.for("react.transitional.element"),F=Symbol.for("react.fragment");function q(m,x,U){var X=null;if(U!==void 0&&(X=""+U),x.key!==void 0&&(X=""+x.key),"key"in x){U={};for(var ue in x)ue!=="key"&&(U[ue]=x[ue])}else U=x;return x=U.ref,{$$typeof:L,type:m,key:X,ref:x!==void 0?x:null,props:U}}return Ci.Fragment=F,Ci.jsx=q,Ci.jsxs=q,Ci}var gp;function Kf(){return gp||(gp=1,rl.exports=Yf()),rl.exports}var S=Kf(),ol={exports:{}},G={};var yp;function Xf(){if(yp)return G;yp=1;var L=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),me=Symbol.iterator;function Ye(u){return u===null||typeof u!="object"?null:(u=me&&u[me]||u["@@iterator"],typeof u=="function"?u:null)}var qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ne=Object.assign,Rt={};function Ke(u,w,D){this.props=u,this.context=w,this.refs=Rt,this.updater=D||qe}Ke.prototype.isReactComponent={},Ke.prototype.setState=function(u,w){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,w,"setState")},Ke.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Kt(){}Kt.prototype=Ke.prototype;function xe(u,w,D){this.props=u,this.context=w,this.refs=Rt,this.updater=D||qe}var ot=xe.prototype=new Kt;ot.constructor=xe,Ne(ot,Ke.prototype),ot.isPureReactComponent=!0;var St=Array.isArray;function Ge(){}var Y={H:null,A:null,T:null,S:null},Pe=Object.prototype.hasOwnProperty;function wt(u,w,D){var W=D.ref;return{$$typeof:L,type:u,key:w,ref:W!==void 0?W:null,props:D}}function za(u,w){return wt(u.type,w,u.props)}function At(u){return typeof u=="object"&&u!==null&&u.$$typeof===L}function Be(u){var w={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(D){return w[D]})}var Sa=/\/+/g;function Wt(u,w){return typeof u=="object"&&u!==null&&u.key!=null?Be(""+u.key):w.toString(36)}function vt(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Ge,Ge):(u.status="pending",u.then(function(w){u.status==="pending"&&(u.status="fulfilled",u.value=w)},function(w){u.status==="pending"&&(u.status="rejected",u.reason=w)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function h(u,w,D,W,P){var j=typeof u;(j==="undefined"||j==="boolean")&&(u=null);var te=!1;if(u===null)te=!0;else switch(j){case"bigint":case"string":case"number":te=!0;break;case"object":switch(u.$$typeof){case L:case F:te=!0;break;case ee:return te=u._init,h(te(u._payload),w,D,W,P)}}if(te)return P=P(u),te=W===""?"."+Wt(u,0):W,St(P)?(D="",te!=null&&(D=te.replace(Sa,"$&/")+"/"),h(P,w,D,"",function(Dn){return Dn})):P!=null&&(At(P)&&(P=za(P,D+(P.key==null||u&&u.key===P.key?"":(""+P.key).replace(Sa,"$&/")+"/")+te)),w.push(P)),1;te=0;var Me=W===""?".":W+":";if(St(u))for(var ve=0;ve<u.length;ve++)W=u[ve],j=Me+Wt(W,ve),te+=h(W,w,D,j,P);else if(ve=Ye(u),typeof ve=="function")for(u=ve.call(u),ve=0;!(W=u.next()).done;)W=W.value,j=Me+Wt(W,ve++),te+=h(W,w,D,j,P);else if(j==="object"){if(typeof u.then=="function")return h(vt(u),w,D,W,P);throw w=String(u),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return te}function T(u,w,D){if(u==null)return u;var W=[],P=0;return h(u,W,"","",function(j){return w.call(D,j,P++)}),W}function M(u){if(u._status===-1){var w=u._result;w=w(),w.then(function(D){(u._status===0||u._status===-1)&&(u._status=1,u._result=D)},function(D){(u._status===0||u._status===-1)&&(u._status=2,u._result=D)}),u._status===-1&&(u._status=0,u._result=w)}if(u._status===1)return u._result.default;throw u._result}var ie=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},le={map:T,forEach:function(u,w,D){T(u,function(){w.apply(this,arguments)},D)},count:function(u){var w=0;return T(u,function(){w++}),w},toArray:function(u){return T(u,function(w){return w})||[]},only:function(u){if(!At(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return G.Activity=N,G.Children=le,G.Component=Ke,G.Fragment=q,G.Profiler=x,G.PureComponent=xe,G.StrictMode=m,G.Suspense=E,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,G.__COMPILER_RUNTIME={__proto__:null,c:function(u){return Y.H.useMemoCache(u)}},G.cache=function(u){return function(){return u.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(u,w,D){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var W=Ne({},u.props),P=u.key;if(w!=null)for(j in w.key!==void 0&&(P=""+w.key),w)!Pe.call(w,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&w.ref===void 0||(W[j]=w[j]);var j=arguments.length-2;if(j===1)W.children=D;else if(1<j){for(var te=Array(j),Me=0;Me<j;Me++)te[Me]=arguments[Me+2];W.children=te}return wt(u.type,P,W)},G.createContext=function(u){return u={$$typeof:X,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:U,_context:u},u},G.createElement=function(u,w,D){var W,P={},j=null;if(w!=null)for(W in w.key!==void 0&&(j=""+w.key),w)Pe.call(w,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(P[W]=w[W]);var te=arguments.length-2;if(te===1)P.children=D;else if(1<te){for(var Me=Array(te),ve=0;ve<te;ve++)Me[ve]=arguments[ve+2];P.children=Me}if(u&&u.defaultProps)for(W in te=u.defaultProps,te)P[W]===void 0&&(P[W]=te[W]);return wt(u,j,P)},G.createRef=function(){return{current:null}},G.forwardRef=function(u){return{$$typeof:ue,render:u}},G.isValidElement=At,G.lazy=function(u){return{$$typeof:ee,_payload:{_status:-1,_result:u},_init:M}},G.memo=function(u,w){return{$$typeof:A,type:u,compare:w===void 0?null:w}},G.startTransition=function(u){var w=Y.T,D={};Y.T=D;try{var W=u(),P=Y.S;P!==null&&P(D,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Ge,ie)}catch(j){ie(j)}finally{w!==null&&D.types!==null&&(w.types=D.types),Y.T=w}},G.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},G.use=function(u){return Y.H.use(u)},G.useActionState=function(u,w,D){return Y.H.useActionState(u,w,D)},G.useCallback=function(u,w){return Y.H.useCallback(u,w)},G.useContext=function(u){return Y.H.useContext(u)},G.useDebugValue=function(){},G.useDeferredValue=function(u,w){return Y.H.useDeferredValue(u,w)},G.useEffect=function(u,w){return Y.H.useEffect(u,w)},G.useEffectEvent=function(u){return Y.H.useEffectEvent(u)},G.useId=function(){return Y.H.useId()},G.useImperativeHandle=function(u,w,D){return Y.H.useImperativeHandle(u,w,D)},G.useInsertionEffect=function(u,w){return Y.H.useInsertionEffect(u,w)},G.useLayoutEffect=function(u,w){return Y.H.useLayoutEffect(u,w)},G.useMemo=function(u,w){return Y.H.useMemo(u,w)},G.useOptimistic=function(u,w){return Y.H.useOptimistic(u,w)},G.useReducer=function(u,w,D){return Y.H.useReducer(u,w,D)},G.useRef=function(u){return Y.H.useRef(u)},G.useState=function(u){return Y.H.useState(u)},G.useSyncExternalStore=function(u,w,D){return Y.H.useSyncExternalStore(u,w,D)},G.useTransition=function(){return Y.H.useTransition()},G.version="19.2.4",G}var vp;function pl(){return vp||(vp=1,ol.exports=Xf()),ol.exports}var Yt=pl(),sl={exports:{}},Si={},ll={exports:{}},cl={};var hp;function Zf(){return hp||(hp=1,(function(L){function F(h,T){var M=h.length;h.push(T);e:for(;0<M;){var ie=M-1>>>1,le=h[ie];if(0<x(le,T))h[ie]=T,h[M]=le,M=ie;else break e}}function q(h){return h.length===0?null:h[0]}function m(h){if(h.length===0)return null;var T=h[0],M=h.pop();if(M!==T){h[0]=M;e:for(var ie=0,le=h.length,u=le>>>1;ie<u;){var w=2*(ie+1)-1,D=h[w],W=w+1,P=h[W];if(0>x(D,M))W<le&&0>x(P,D)?(h[ie]=P,h[W]=M,ie=W):(h[ie]=D,h[w]=M,ie=w);else if(W<le&&0>x(P,M))h[ie]=P,h[W]=M,ie=W;else break e}}return T}function x(h,T){var M=h.sortIndex-T.sortIndex;return M!==0?M:h.id-T.id}if(L.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;L.unstable_now=function(){return U.now()}}else{var X=Date,ue=X.now();L.unstable_now=function(){return X.now()-ue}}var E=[],A=[],ee=1,N=null,me=3,Ye=!1,qe=!1,Ne=!1,Rt=!1,Ke=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function ot(h){for(var T=q(A);T!==null;){if(T.callback===null)m(A);else if(T.startTime<=h)m(A),T.sortIndex=T.expirationTime,F(E,T);else break;T=q(A)}}function St(h){if(Ne=!1,ot(h),!qe)if(q(E)!==null)qe=!0,Ge||(Ge=!0,Be());else{var T=q(A);T!==null&&vt(St,T.startTime-h)}}var Ge=!1,Y=-1,Pe=5,wt=-1;function za(){return Rt?!0:!(L.unstable_now()-wt<Pe)}function At(){if(Rt=!1,Ge){var h=L.unstable_now();wt=h;var T=!0;try{e:{qe=!1,Ne&&(Ne=!1,Kt(Y),Y=-1),Ye=!0;var M=me;try{t:{for(ot(h),N=q(E);N!==null&&!(N.expirationTime>h&&za());){var ie=N.callback;if(typeof ie=="function"){N.callback=null,me=N.priorityLevel;var le=ie(N.expirationTime<=h);if(h=L.unstable_now(),typeof le=="function"){N.callback=le,ot(h),T=!0;break t}N===q(E)&&m(E),ot(h)}else m(E);N=q(E)}if(N!==null)T=!0;else{var u=q(A);u!==null&&vt(St,u.startTime-h),T=!1}}break e}finally{N=null,me=M,Ye=!1}T=void 0}}finally{T?Be():Ge=!1}}}var Be;if(typeof xe=="function")Be=function(){xe(At)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,Wt=Sa.port2;Sa.port1.onmessage=At,Be=function(){Wt.postMessage(null)}}else Be=function(){Ke(At,0)};function vt(h,T){Y=Ke(function(){h(L.unstable_now())},T)}L.unstable_IdlePriority=5,L.unstable_ImmediatePriority=1,L.unstable_LowPriority=4,L.unstable_NormalPriority=3,L.unstable_Profiling=null,L.unstable_UserBlockingPriority=2,L.unstable_cancelCallback=function(h){h.callback=null},L.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pe=0<h?Math.floor(1e3/h):5},L.unstable_getCurrentPriorityLevel=function(){return me},L.unstable_next=function(h){switch(me){case 1:case 2:case 3:var T=3;break;default:T=me}var M=me;me=T;try{return h()}finally{me=M}},L.unstable_requestPaint=function(){Rt=!0},L.unstable_runWithPriority=function(h,T){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var M=me;me=h;try{return T()}finally{me=M}},L.unstable_scheduleCallback=function(h,T,M){var ie=L.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ie+M:ie):M=ie,h){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=M+le,h={id:ee++,callback:T,priorityLevel:h,startTime:M,expirationTime:le,sortIndex:-1},M>ie?(h.sortIndex=M,F(A,h),q(E)===null&&h===q(A)&&(Ne?(Kt(Y),Y=-1):Ne=!0,vt(St,M-ie))):(h.sortIndex=le,F(E,h),qe||Ye||(qe=!0,Ge||(Ge=!0,Be()))),h},L.unstable_shouldYield=za,L.unstable_wrapCallback=function(h){var T=me;return function(){var M=me;me=T;try{return h.apply(this,arguments)}finally{me=M}}}})(cl)),cl}var bp;function Jf(){return bp||(bp=1,ll.exports=Zf()),ll.exports}var ul={exports:{}},ke={};var Cp;function $f(){if(Cp)return ke;Cp=1;var L=pl();function F(E){var A="https://react.dev/errors/"+E;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var ee=2;ee<arguments.length;ee++)A+="&args[]="+encodeURIComponent(arguments[ee])}return"Minified React error #"+E+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(){}var m={d:{f:q,r:function(){throw Error(F(522))},D:q,C:q,L:q,m:q,X:q,S:q,M:q},p:0,findDOMNode:null},x=Symbol.for("react.portal");function U(E,A,ee){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:N==null?null:""+N,children:E,containerInfo:A,implementation:ee}}var X=L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ue(E,A){if(E==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ke.createPortal=function(E,A){var ee=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(F(299));return U(E,A,null,ee)},ke.flushSync=function(E){var A=X.T,ee=m.p;try{if(X.T=null,m.p=2,E)return E()}finally{X.T=A,m.p=ee,m.d.f()}},ke.preconnect=function(E,A){typeof E=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,m.d.C(E,A))},ke.prefetchDNS=function(E){typeof E=="string"&&m.d.D(E)},ke.preinit=function(E,A){if(typeof E=="string"&&A&&typeof A.as=="string"){var ee=A.as,N=ue(ee,A.crossOrigin),me=typeof A.integrity=="string"?A.integrity:void 0,Ye=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;ee==="style"?m.d.S(E,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:N,integrity:me,fetchPriority:Ye}):ee==="script"&&m.d.X(E,{crossOrigin:N,integrity:me,fetchPriority:Ye,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},ke.preinitModule=function(E,A){if(typeof E=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var ee=ue(A.as,A.crossOrigin);m.d.M(E,{crossOrigin:ee,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&m.d.M(E)},ke.preload=function(E,A){if(typeof E=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var ee=A.as,N=ue(ee,A.crossOrigin);m.d.L(E,ee,{crossOrigin:N,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},ke.preloadModule=function(E,A){if(typeof E=="string")if(A){var ee=ue(A.as,A.crossOrigin);m.d.m(E,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:ee,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else m.d.m(E)},ke.requestFormReset=function(E){m.d.r(E)},ke.unstable_batchedUpdates=function(E,A){return E(A)},ke.useFormState=function(E,A,ee){return X.H.useFormState(E,A,ee)},ke.useFormStatus=function(){return X.H.useHostTransitionStatus()},ke.version="19.2.4",ke}var Sp;function eg(){if(Sp)return ul.exports;Sp=1;function L(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L)}catch(F){console.error(F)}}return L(),ul.exports=$f(),ul.exports}var wp;function tg(){if(wp)return Si;wp=1;var L=Jf(),F=pl(),q=eg();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function X(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ue(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(U(e)!==e)throw Error(m(188))}function A(e){var t=e.alternate;if(!t){if(t=U(e),t===null)throw Error(m(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return E(i),e;if(r===n)return E(i),t;r=r.sibling}throw Error(m(188))}if(a.return!==n.return)a=i,n=r;else{for(var o=!1,s=i.child;s;){if(s===a){o=!0,a=i,n=r;break}if(s===n){o=!0,n=i,a=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===a){o=!0,a=r,n=i;break}if(s===n){o=!0,n=r,a=i;break}s=s.sibling}if(!o)throw Error(m(189))}}if(a.alternate!==n)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?e:t}function ee(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ee(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,me=Symbol.for("react.element"),Ye=Symbol.for("react.transitional.element"),qe=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),za=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function Wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Ke:return"Profiler";case Rt:return"StrictMode";case St:return"Suspense";case Ge:return"SuspenseList";case wt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case qe:return"Portal";case xe:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Wt(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return Wt(e(t))}catch{}}return null}var vt=Array.isArray,h=F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},ie=[],le=-1;function u(e){return{current:e}}function w(e){0>le||(e.current=ie[le],ie[le]=null,le--)}function D(e,t){le++,ie[le]=e.current,e.current=t}var W=u(null),P=u(null),j=u(null),te=u(null);function Me(e,t){switch(D(j,t),D(P,e),D(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qd(t),e=Gd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(W),D(W,e)}function ve(){w(W),w(P),w(j)}function Dn(e){e.memoizedState!==null&&D(te,e);var t=W.current,a=Gd(t,e.type);t!==a&&(D(P,e),D(W,a))}function wi(e){P.current===e&&(w(W),w(P)),te.current===e&&(w(te),yi._currentValue=M)}var Br,ml;function wa(e){if(Br===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Br=t&&t[1]||"",ml=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Br+e+ml}var zr=!1;function jr(e,t){if(!e||zr)return"";zr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(y){var g=y}Reflect.construct(e,[],C)}else{try{C.call()}catch(y){g=y}e.call(C.prototype)}}else{try{throw Error()}catch(y){g=y}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],s=r[1];if(o&&s){var l=o.split(`
`),f=s.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<f.length&&!f[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===f.length)for(n=l.length-1,i=f.length-1;1<=n&&0<=i&&l[n]!==f[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==f[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==f[i]){var v=`
`+l[n].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=n&&0<=i);break}}}finally{zr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wa(a):""}function Lp(e,t){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return e.child!==t&&t!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return jr(e.type,!1);case 11:return jr(e.type.render,!1);case 1:return jr(e.type,!0);case 31:return wa("Activity");default:return""}}function fl(e){try{var t="",a=null;do t+=Lp(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Hr=Object.prototype.hasOwnProperty,_r=L.unstable_scheduleCallback,Fr=L.unstable_cancelCallback,Tp=L.unstable_shouldYield,Ep=L.unstable_requestPaint,Xe=L.unstable_now,Dp=L.unstable_getCurrentPriorityLevel,gl=L.unstable_ImmediatePriority,yl=L.unstable_UserBlockingPriority,Ai=L.unstable_NormalPriority,Rp=L.unstable_LowPriority,vl=L.unstable_IdlePriority,Wp=L.log,Op=L.unstable_setDisableYieldValue,Rn=null,Ze=null;function Xt(e){if(typeof Wp=="function"&&Op(e),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(Rn,e)}catch{}}var Je=Math.clz32?Math.clz32:kp,Ip=Math.log,xp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(Ip(e)/xp|0)|0}var Li=256,Ti=262144,Ei=4194304;function Aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~r,n!==0?i=Aa(n):(o&=s,o!==0?i=Aa(o):a||(a=s&~e,a!==0&&(i=Aa(a))))):(s=n&~r,s!==0?i=Aa(s):o!==0?i=Aa(o):a||(a=n&~e,a!==0&&(i=Aa(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Wn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Np(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hl(){var e=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),e}function Qr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function On(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mp(e,t,a,n,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,f=e.hiddenUpdates;for(a=o&~a;0<a;){var v=31-Je(a),C=1<<v;s[v]=0,l[v]=-1;var g=f[v];if(g!==null)for(f[v]=null,v=0;v<g.length;v++){var y=g[v];y!==null&&(y.lane&=-536870913)}a&=~C}n!==0&&bl(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function bl(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Je(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Cl(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Je(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Sl(e,t){var a=t&-t;return a=(a&42)!==0?1:Vr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wl(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:sp(e.type))}function Al(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var Zt=Math.random().toString(36).slice(2),De="__reactFiber$"+Zt,ze="__reactProps$"+Zt,ja="__reactContainer$"+Zt,Kr="__reactEvents$"+Zt,Up="__reactListeners$"+Zt,qp="__reactHandles$"+Zt,Ll="__reactResources$"+Zt,In="__reactMarker$"+Zt;function Xr(e){delete e[De],delete e[ze],delete e[Kr],delete e[Up],delete e[qp]}function Ha(e){var t=e[De];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ja]||a[De]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Fd(e);e!==null;){if(a=e[De])return a;e=Fd(e)}return t}e=a,a=e.parentNode}return null}function _a(e){if(e=e[De]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Fa(e){var t=e[Ll];return t||(t=e[Ll]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[In]=!0}var Tl=new Set,El={};function La(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(El[e]=t,e=0;e<t.length;e++)Tl.add(t[e])}var Gp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dl={},Rl={};function Pp(e){return Hr.call(Rl,e)?!0:Hr.call(Dl,e)?!1:Gp.test(e)?Rl[e]=!0:(Dl[e]=!0,!1)}function Ri(e,t,a){if(Pp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Wi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){if(!e._valueTracker){var t=Wl(e)?"checked":"value";e._valueTracker=Bp(e,t,""+e[t])}}function Ol(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Wl(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zp=/[\n"\\]/g;function lt(e){return e.replace(zp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jr(e,t,a,n,i,r,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?$r(e,o,st(t)):a!=null?$r(e,o,st(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+st(s):e.removeAttribute("name")}function Il(e,t,a,n,i,r,o,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Zr(e);return}a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Zr(e)}function $r(e,t,a){t==="number"&&Oi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Va(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xl(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function kl(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(m(92));if(vt(n)){if(1<n.length)throw Error(m(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Zr(e)}function Ya(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var jp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nl(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||jp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ml(e,t,a){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Nl(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&Nl(e,r,t[r])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return _p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var to=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Xa=null;function Ul(e){var t=_a(e);if(t&&(e=t.stateNode)){var a=e[ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ze]||null;if(!i)throw Error(m(90));Jr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ol(n)}break e;case"textarea":xl(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Va(e,!!a.multiple,t,!1)}}}var no=!1;function ql(e,t,a){if(no)return e(t,a);no=!0;try{var n=e(t);return n}finally{if(no=!1,(Ka!==null||Xa!==null)&&(hr(),Ka&&(t=Ka,e=Xa,Xa=Ka=null,Ul(t),e)))for(t=0;t<e.length;t++)Ul(e[t])}}function kn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ze]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(m(231,t,typeof a));return a}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(xt)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){io=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{io=!1}var Jt=null,ro=null,xi=null;function Gl(){if(xi)return xi;var e,t=ro,a=t.length,n,i="value"in Jt?Jt.value:Jt.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[r-n];n++);return xi=i.slice(e,1<n?1-n:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Pl(){return!1}function je(e){function t(a,n,i,r,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ni:Pl,this.isPropagationStopped=Pl,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mi=je(Ta),Mn=N({},Ta,{view:0,detail:0}),Fp=je(Mn),oo,so,Un,Ui=N({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(oo=e.screenX-Un.screenX,so=e.screenY-Un.screenY):so=oo=0,Un=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:so}}),Bl=je(Ui),Qp=N({},Ui,{dataTransfer:0}),Vp=je(Qp),Yp=N({},Mn,{relatedTarget:0}),lo=je(Yp),Kp=N({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=je(Kp),Zp=N({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=je(Zp),$p=N({},Ta,{data:0}),zl=je($p),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function co(){return nm}var im=N({},Mn,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rm=je(im),om=N({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jl=je(om),sm=N({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),lm=je(sm),cm=N({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),um=je(cm),dm=N({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=je(dm),mm=N({},Ta,{newState:0,oldState:0}),fm=je(mm),gm=[9,13,27,32],uo=xt&&"CompositionEvent"in window,qn=null;xt&&"documentMode"in document&&(qn=document.documentMode);var ym=xt&&"TextEvent"in window&&!qn,Hl=xt&&(!uo||qn&&8<qn&&11>=qn),_l=" ",Fl=!1;function Ql(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Za=!1;function vm(e,t){switch(e){case"compositionend":return Vl(t);case"keypress":return t.which!==32?null:(Fl=!0,_l);case"textInput":return e=t.data,e===_l&&Fl?null:e;default:return null}}function hm(e,t){if(Za)return e==="compositionend"||!uo&&Ql(e,t)?(e=Gl(),xi=ro=Jt=null,Za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hl&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function Kl(e,t,a,n){Ka?Xa?Xa.push(n):Xa=[n]:Ka=n,t=Tr(t,"onChange"),0<t.length&&(a=new Mi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Gn=null,Pn=null;function Cm(e){Id(e,0)}function qi(e){var t=xn(e);if(Ol(t))return e}function Xl(e,t){if(e==="change")return t}var Zl=!1;if(xt){var po;if(xt){var mo="oninput"in document;if(!mo){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),mo=typeof Jl.oninput=="function"}po=mo}else po=!1;Zl=po&&(!document.documentMode||9<document.documentMode)}function $l(){Gn&&(Gn.detachEvent("onpropertychange",ec),Pn=Gn=null)}function ec(e){if(e.propertyName==="value"&&qi(Pn)){var t=[];Kl(t,Pn,e,ao(e)),ql(Cm,t)}}function Sm(e,t,a){e==="focusin"?($l(),Gn=t,Pn=a,Gn.attachEvent("onpropertychange",ec)):e==="focusout"&&$l()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Pn)}function Am(e,t){if(e==="click")return qi(t)}function Lm(e,t){if(e==="input"||e==="change")return qi(t)}function Tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Tm;function Bn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Hr.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var a=tc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tc(a)}}function nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Oi(e.document)}return t}function fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Em=xt&&"documentMode"in document&&11>=document.documentMode,Ja=null,go=null,zn=null,yo=!1;function rc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yo||Ja==null||Ja!==Oi(n)||(n=Ja,"selectionStart"in n&&fo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zn&&Bn(zn,n)||(zn=n,n=Tr(go,"onSelect"),0<n.length&&(t=new Mi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ja)))}function Ea(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},vo={},oc={};xt&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Da(e){if(vo[e])return vo[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in oc)return vo[e]=t[a];return e}var sc=Da("animationend"),lc=Da("animationiteration"),cc=Da("animationstart"),Dm=Da("transitionrun"),Rm=Da("transitionstart"),Wm=Da("transitioncancel"),uc=Da("transitionend"),dc=new Map,ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ho.push("scrollEnd");function ht(e,t){dc.set(e,t),La(t,[e])}var Gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],en=0,bo=0;function Pi(){for(var e=en,t=bo=en=0;t<e;){var a=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];ct[t++]=null;var r=ct[t];if(ct[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}r!==0&&pc(a,i,r)}}function Bi(e,t,a,n){ct[en++]=e,ct[en++]=t,ct[en++]=a,ct[en++]=n,bo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Co(e,t,a,n){return Bi(e,t,a,n),zi(e)}function Ra(e,t){return Bi(e,null,null,t),zi(e)}function pc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-Je(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function zi(e){if(50<ci)throw ci=0,Ws=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tn={};function Om(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new Om(e,t,a,n)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function mc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ji(e,t,a,n,i,r){var o=0;if(n=e,typeof e=="function")So(e)&&(o=1);else if(typeof e=="string")o=Uf(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case wt:return e=et(31,a,t,i),e.elementType=wt,e.lanes=r,e;case Ne:return Wa(a.children,i,r,t);case Rt:o=8,i|=24;break;case Ke:return e=et(12,a,t,i|2),e.elementType=Ke,e.lanes=r,e;case St:return e=et(13,a,t,i),e.elementType=St,e.lanes=r,e;case Ge:return e=et(19,a,t,i),e.elementType=Ge,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:o=10;break e;case Kt:o=9;break e;case ot:o=11;break e;case Y:o=14;break e;case Pe:o=16,n=null;break e}o=29,a=Error(m(130,e===null?"null":typeof e,"")),n=null}return t=et(o,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Wa(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function wo(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ao(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gc=new WeakMap;function ut(e,t){if(typeof e=="object"&&e!==null){var a=gc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fl(t)},gc.set(e,t),t)}return{value:e,source:t,stack:fl(t)}}var an=[],nn=0,Hi=null,jn=0,dt=[],pt=0,$t=null,Lt=1,Tt="";function Nt(e,t){an[nn++]=jn,an[nn++]=Hi,Hi=e,jn=t}function yc(e,t,a){dt[pt++]=Lt,dt[pt++]=Tt,dt[pt++]=$t,$t=e;var n=Lt;e=Tt;var i=32-Je(n)-1;n&=~(1<<i),a+=1;var r=32-Je(t)+i;if(30<r){var o=i-i%5;r=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Lt=1<<32-Je(t)+i|a<<i|n,Tt=r+e}else Lt=1<<r|a<<i|n,Tt=e}function Lo(e){e.return!==null&&(Nt(e,1),yc(e,1,0))}function To(e){for(;e===Hi;)Hi=an[--nn],an[nn]=null,jn=an[--nn],an[nn]=null;for(;e===$t;)$t=dt[--pt],dt[pt]=null,Tt=dt[--pt],dt[pt]=null,Lt=dt[--pt],dt[pt]=null}function vc(e,t){dt[pt++]=Lt,dt[pt++]=Tt,dt[pt++]=$t,Lt=t.id,Tt=t.overflow,$t=e}var Re=null,de=null,K=!1,ea=null,mt=!1,Eo=Error(m(519));function ta(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hn(ut(t,e)),Eo}function hc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[De]=e,t[ze]=n,a){case"dialog":_("cancel",t),_("close",t);break;case"iframe":case"object":case"embed":_("load",t);break;case"video":case"audio":for(a=0;a<di.length;a++)_(di[a],t);break;case"source":_("error",t);break;case"img":case"image":case"link":_("error",t),_("load",t);break;case"details":_("toggle",t);break;case"input":_("invalid",t),Il(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":_("invalid",t);break;case"textarea":_("invalid",t),kl(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Md(t.textContent,a)?(n.popover!=null&&(_("beforetoggle",t),_("toggle",t)),n.onScroll!=null&&_("scroll",t),n.onScrollEnd!=null&&_("scrollend",t),n.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||ta(e,!0)}function bc(e){for(Re=e.return;Re;)switch(Re.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Re=Re.return}}function rn(e){if(e!==Re)return!1;if(!K)return bc(e),K=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_s(e.type,e.memoizedProps)),a=!a),a&&de&&ta(e),bc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=_d(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=_d(e)}else t===27?(t=de,ga(e.type)?(e=Ks,Ks=null,de=e):de=t):de=Re?gt(e.stateNode.nextSibling):null;return!0}function Oa(){de=Re=null,K=!1}function Do(){var e=ea;return e!==null&&(Qe===null?Qe=e:Qe.push.apply(Qe,e),ea=null),e}function Hn(e){ea===null?ea=[e]:ea.push(e)}var Ro=u(null),Ia=null,Mt=null;function aa(e,t,a){D(Ro,t._currentValue),t._currentValue=a}function Ut(e){e._currentValue=Ro.current,w(Ro)}function Wo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Oo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=i;for(var l=0;l<t.length;l++)if(s.context===t[l]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Wo(r.return,a,e),n||(o=null);break e}r=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),Wo(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function on(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var s=i.type;$e(i.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(i===te.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(yi):e=[yi])}i=i.return}e!==null&&Oo(t,e,a,n),t.flags|=262144}function _i(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){Ia=e,Mt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Cc(Ia,e)}function Fi(e,t){return Ia===null&&xa(e),Cc(e,t)}function Cc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Mt===null){if(e===null)throw Error(m(308));Mt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Mt=Mt.next=t;return a}var Im=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xm=L.unstable_scheduleCallback,km=L.unstable_NormalPriority,Ce={$$typeof:xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Io(){return{controller:new Im,data:new Map,refCount:0}}function _n(e){e.refCount--,e.refCount===0&&xm(km,function(){e.controller.abort()})}var Fn=null,xo=0,sn=0,ln=null;function Nm(e,t){if(Fn===null){var a=Fn=[];xo=0,sn=Ms(),ln={status:"pending",value:void 0,then:function(n){a.push(n)}}}return xo++,t.then(Sc,Sc),t}function Sc(){if(--xo===0&&Fn!==null){ln!==null&&(ln.status="fulfilled");var e=Fn;Fn=null,sn=0,ln=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Mm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var wc=h.S;h.S=function(e,t){rd=Xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nm(e,t),wc!==null&&wc(e,t)};var ka=u(null);function ko(){var e=ka.current;return e!==null?e:ce.pooledCache}function Qi(e,t){t===null?D(ka,ka.current):D(ka,t.pool)}function Ac(){var e=ko();return e===null?null:{parent:Ce._currentValue,pool:e}}var cn=Error(m(460)),No=Error(m(474)),Vi=Error(m(542)),Yi={then:function(){}};function Lc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(It,It),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=ce,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e}throw Ma=t,cn}}function Na(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ma=a,cn):a}}var Ma=null;function Ec(){if(Ma===null)throw Error(m(459));var e=Ma;return Ma=null,e}function Dc(e){if(e===cn||e===Vi)throw Error(m(483))}var un=null,Qn=0;function Ki(e){var t=Qn;return Qn+=1,un===null&&(un=[]),Tc(un,e,t)}function Vn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xi(e,t){throw t.$$typeof===me?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function a(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function n(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(d,c){return d=kt(d,c),d.index=0,d.sibling=null,d}function r(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=67108866,c):p):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,c,p,b){return c===null||c.tag!==6?(c=wo(p,d.mode,b),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,b){var I=p.type;return I===Ne?v(d,c,p.props.children,b,p.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Pe&&Na(I)===c.type)?(c=i(c,p.props),Vn(c,p),c.return=d,c):(c=ji(p.type,p.key,p.props,null,d.mode,b),Vn(c,p),c.return=d,c)}function f(d,c,p,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ao(p,d.mode,b),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function v(d,c,p,b,I){return c===null||c.tag!==7?(c=Wa(p,d.mode,b,I),c.return=d,c):(c=i(c,p),c.return=d,c)}function C(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=wo(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ye:return p=ji(c.type,c.key,c.props,null,d.mode,p),Vn(p,c),p.return=d,p;case qe:return c=Ao(c,d.mode,p),c.return=d,c;case Pe:return c=Na(c),C(d,c,p)}if(vt(c)||Be(c))return c=Wa(c,d.mode,p,null),c.return=d,c;if(typeof c.then=="function")return C(d,Ki(c),p);if(c.$$typeof===xe)return C(d,Fi(d,c),p);Xi(d,c)}return null}function g(d,c,p,b){var I=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return I!==null?null:s(d,c,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ye:return p.key===I?l(d,c,p,b):null;case qe:return p.key===I?f(d,c,p,b):null;case Pe:return p=Na(p),g(d,c,p,b)}if(vt(p)||Be(p))return I!==null?null:v(d,c,p,b,null);if(typeof p.then=="function")return g(d,c,Ki(p),b);if(p.$$typeof===xe)return g(d,c,Fi(d,p),b);Xi(d,p)}return null}function y(d,c,p,b,I){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(p)||null,s(c,d,""+b,I);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ye:return d=d.get(b.key===null?p:b.key)||null,l(c,d,b,I);case qe:return d=d.get(b.key===null?p:b.key)||null,f(c,d,b,I);case Pe:return b=Na(b),y(d,c,p,b,I)}if(vt(b)||Be(b))return d=d.get(p)||null,v(c,d,b,I,null);if(typeof b.then=="function")return y(d,c,p,Ki(b),I);if(b.$$typeof===xe)return y(d,c,p,Fi(c,b),I);Xi(c,b)}return null}function R(d,c,p,b){for(var I=null,Z=null,O=c,z=c=0,V=null;O!==null&&z<p.length;z++){O.index>z?(V=O,O=null):V=O.sibling;var J=g(d,O,p[z],b);if(J===null){O===null&&(O=V);break}e&&O&&J.alternate===null&&t(d,O),c=r(J,c,z),Z===null?I=J:Z.sibling=J,Z=J,O=V}if(z===p.length)return a(d,O),K&&Nt(d,z),I;if(O===null){for(;z<p.length;z++)O=C(d,p[z],b),O!==null&&(c=r(O,c,z),Z===null?I=O:Z.sibling=O,Z=O);return K&&Nt(d,z),I}for(O=n(O);z<p.length;z++)V=y(O,d,z,p[z],b),V!==null&&(e&&V.alternate!==null&&O.delete(V.key===null?z:V.key),c=r(V,c,z),Z===null?I=V:Z.sibling=V,Z=V);return e&&O.forEach(function(Ca){return t(d,Ca)}),K&&Nt(d,z),I}function k(d,c,p,b){if(p==null)throw Error(m(151));for(var I=null,Z=null,O=c,z=c=0,V=null,J=p.next();O!==null&&!J.done;z++,J=p.next()){O.index>z?(V=O,O=null):V=O.sibling;var Ca=g(d,O,J.value,b);if(Ca===null){O===null&&(O=V);break}e&&O&&Ca.alternate===null&&t(d,O),c=r(Ca,c,z),Z===null?I=Ca:Z.sibling=Ca,Z=Ca,O=V}if(J.done)return a(d,O),K&&Nt(d,z),I;if(O===null){for(;!J.done;z++,J=p.next())J=C(d,J.value,b),J!==null&&(c=r(J,c,z),Z===null?I=J:Z.sibling=J,Z=J);return K&&Nt(d,z),I}for(O=n(O);!J.done;z++,J=p.next())J=y(O,d,z,J.value,b),J!==null&&(e&&J.alternate!==null&&O.delete(J.key===null?z:J.key),c=r(J,c,z),Z===null?I=J:Z.sibling=J,Z=J);return e&&O.forEach(function(Vf){return t(d,Vf)}),K&&Nt(d,z),I}function se(d,c,p,b){if(typeof p=="object"&&p!==null&&p.type===Ne&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ye:e:{for(var I=p.key;c!==null;){if(c.key===I){if(I=p.type,I===Ne){if(c.tag===7){a(d,c.sibling),b=i(c,p.props.children),b.return=d,d=b;break e}}else if(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Pe&&Na(I)===c.type){a(d,c.sibling),b=i(c,p.props),Vn(b,p),b.return=d,d=b;break e}a(d,c);break}else t(d,c);c=c.sibling}p.type===Ne?(b=Wa(p.props.children,d.mode,b,p.key),b.return=d,d=b):(b=ji(p.type,p.key,p.props,null,d.mode,b),Vn(b,p),b.return=d,d=b)}return o(d);case qe:e:{for(I=p.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){a(d,c.sibling),b=i(c,p.children||[]),b.return=d,d=b;break e}else{a(d,c);break}else t(d,c);c=c.sibling}b=Ao(p,d.mode,b),b.return=d,d=b}return o(d);case Pe:return p=Na(p),se(d,c,p,b)}if(vt(p))return R(d,c,p,b);if(Be(p)){if(I=Be(p),typeof I!="function")throw Error(m(150));return p=I.call(p),k(d,c,p,b)}if(typeof p.then=="function")return se(d,c,Ki(p),b);if(p.$$typeof===xe)return se(d,c,Fi(d,p),b);Xi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(a(d,c.sibling),b=i(c,p),b.return=d,d=b):(a(d,c),b=wo(p,d.mode,b),b.return=d,d=b),o(d)):a(d,c)}return function(d,c,p,b){try{Qn=0;var I=se(d,c,p,b);return un=null,I}catch(O){if(O===cn||O===Vi)throw O;var Z=et(29,O,null,d.mode);return Z.lanes=b,Z.return=d,Z}}}var Ua=Rc(!0),Wc=Rc(!1),na=!1;function Mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,($&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=zi(e),pc(e,null,a),t}return Bi(e,n,t,a),zi(e)}function Yn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Cl(e,a)}}function qo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Go=!1;function Kn(){if(Go){var e=ln;if(e!==null)throw e}}function Xn(e,t,a,n){Go=!1;var i=e.updateQueue;na=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,f=l.next;l.next=null,o===null?r=f:o.next=f,o=l;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=l))}if(r!==null){var C=i.baseState;o=0,v=f=l=null,s=r;do{var g=s.lane&-536870913,y=g!==s.lane;if(y?(Q&g)===g:(n&g)===g){g!==0&&g===sn&&(Go=!0),v!==null&&(v=v.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var R=e,k=s;g=t;var se=a;switch(k.tag){case 1:if(R=k.payload,typeof R=="function"){C=R.call(se,C,g);break e}C=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,g=typeof R=="function"?R.call(se,C,g):R,g==null)break e;C=N({},C,g);break e;case 2:na=!0}}g=s.callback,g!==null&&(e.flags|=64,y&&(e.flags|=8192),y=i.callbacks,y===null?i.callbacks=[g]:y.push(g))}else y={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=y,l=C):v=v.next=y,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);v===null&&(l=C),i.baseState=l,i.firstBaseUpdate=f,i.lastBaseUpdate=v,r===null&&(i.shared.lanes=0),ua|=o,e.lanes=o,e.memoizedState=C}}function Oc(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function Ic(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Oc(a[e],t)}var dn=u(null),Zi=u(0);function xc(e,t){e=Ft,D(Zi,e),D(dn,t),Ft=e|t.baseLanes}function Po(){D(Zi,Ft),D(dn,dn.current)}function Bo(){Ft=Zi.current,w(dn),w(Zi)}var tt=u(null),ft=null;function oa(e){var t=e.alternate;D(he,he.current&1),D(tt,e),ft===null&&(t===null||dn.current!==null||t.memoizedState!==null)&&(ft=e)}function zo(e){D(he,he.current),D(tt,e),ft===null&&(ft=e)}function kc(e){e.tag===22?(D(he,he.current),D(tt,e),ft===null&&(ft=e)):sa()}function sa(){D(he,he.current),D(tt,tt.current)}function at(e){w(tt),ft===e&&(ft=null),w(he)}var he=u(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vs(a)||Ys(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,B=null,re=null,Se=null,$i=!1,pn=!1,qa=!1,er=0,Zn=0,mn=null,Um=0;function ge(){throw Error(m(321))}function jo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Ho(e,t,a,n,i,r){return qt=r,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,h.H=e===null||e.memoizedState===null?yu:is,qa=!1,r=a(n,i),qa=!1,pn&&(r=Mc(t,a,n,i)),Nc(e),r}function Nc(e){h.H=ei;var t=re!==null&&re.next!==null;if(qt=0,Se=re=B=null,$i=!1,Zn=0,mn=null,t)throw Error(m(300));e===null||we||(e=e.dependencies,e!==null&&_i(e)&&(we=!0))}function Mc(e,t,a,n){B=e;var i=0;do{if(pn&&(mn=null),Zn=0,pn=!1,25<=i)throw Error(m(301));if(i+=1,Se=re=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}h.H=vu,r=t(a,n)}while(pn);return r}function qm(){var e=h.H,t=e.useState()[0];return t=typeof t.then=="function"?Jn(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(B.flags|=1024),t}function _o(){var e=er!==0;return er=0,e}function Fo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Qo(e){if($i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$i=!1}qt=0,Se=re=B=null,pn=!1,Zn=er=0,mn=null}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?B.memoizedState=Se=e:Se=Se.next=e,Se}function be(){if(re===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Se===null?B.memoizedState:Se.next;if(t!==null)Se=t,re=e;else{if(e===null)throw B.alternate===null?Error(m(467)):Error(m(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Se===null?B.memoizedState=Se=e:Se=Se.next=e}return Se}function tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jn(e){var t=Zn;return Zn+=1,mn===null&&(mn=[]),e=Tc(mn,e,t),t=B,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,h.H=t===null||t.memoizedState===null?yu:is),e}function ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jn(e);if(e.$$typeof===xe)return We(e)}throw Error(m(438,String(e)))}function Vo(e){var t=null,a=B.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=B.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=tr(),B.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=za;return t.index++,a}function Gt(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=be();return Yo(t,re,e)}function Yo(e,t,a){var n=e.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var s=o=null,l=null,f=t,v=!1;do{var C=f.lane&-536870913;if(C!==f.lane?(Q&C)===C:(qt&C)===C){var g=f.revertLane;if(g===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),C===sn&&(v=!0);else if((qt&g)===g){f=f.next,g===sn&&(v=!0);continue}else C={lane:0,revertLane:f.revertLane,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},l===null?(s=l=C,o=r):l=l.next=C,B.lanes|=g,ua|=g;C=f.action,qa&&a(r,C),r=f.hasEagerState?f.eagerState:a(r,C)}else g={lane:C,revertLane:f.revertLane,gesture:f.gesture,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},l===null?(s=l=g,o=r):l=l.next=g,B.lanes|=C,ua|=C;f=f.next}while(f!==null&&f!==t);if(l===null?o=r:l.next=s,!$e(r,e.memoizedState)&&(we=!0,v&&(a=ln,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ko(e){var t=be(),a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);$e(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Uc(e,t,a){var n=B,i=be(),r=K;if(r){if(a===void 0)throw Error(m(407));a=a()}else a=t();var o=!$e((re||i).memoizedState,a);if(o&&(i.memoizedState=a,we=!0),i=i.queue,Jo(Pc.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,fn(9,{destroy:void 0},Gc.bind(null,n,i,a,t),null),ce===null)throw Error(m(349));r||(qt&127)!==0||qc(n,t,a)}return a}function qc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=B.updateQueue,t===null?(t=tr(),B.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gc(e,t,a,n){t.value=a,t.getSnapshot=n,Bc(t)&&zc(e)}function Pc(e,t,a){return a(function(){Bc(t)&&zc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function zc(e){var t=Ra(e,2);t!==null&&Ve(t,e,2)}function Xo(e){var t=Ue();if(typeof e=="function"){var a=e;if(e=a(),qa){Xt(!0);try{a()}finally{Xt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function jc(e,t,a,n){return e.baseState=a,Yo(e,re,typeof n=="function"?n:Gt)}function Gm(e,t,a,n,i){if(or(e))throw Error(m(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};h.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,Hc(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Hc(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=h.T,o={};h.T=o;try{var s=a(i,n),l=h.S;l!==null&&l(o,s),_c(e,t,s)}catch(f){Zo(e,t,f)}finally{r!==null&&o.types!==null&&(r.types=o.types),h.T=r}}else try{r=a(i,n),_c(e,t,r)}catch(f){Zo(e,t,f)}}function _c(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Fc(e,t,n)},function(n){return Zo(e,t,n)}):Fc(e,t,a)}function Fc(e,t,a){t.status="fulfilled",t.value=a,Qc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Hc(e,a)))}function Zo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Qc(t),t=t.next;while(t!==n)}e.action=null}function Qc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vc(e,t){return t}function Yc(e,t){if(K){var a=ce.formState;if(a!==null){e:{var n=B;if(K){if(de){t:{for(var i=de,r=mt;i.nodeType!==8;){if(!r){i=null;break t}if(i=gt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){de=gt(i.nextSibling),n=i.data==="F!";break e}}ta(n)}n=!1}n&&(t=a[0])}}return a=Ue(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vc,lastRenderedState:t},a.queue=n,a=mu.bind(null,B,n),n.dispatch=a,n=Xo(!1),r=ns.bind(null,B,!1,n.queue),n=Ue(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Gm.bind(null,B,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Kc(e){var t=be();return Xc(t,re,e)}function Xc(e,t,a){if(t=Yo(e,t,Vc)[0],e=nr(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Jn(t)}catch(o){throw o===cn?Vi:o}else n=t;t=be();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(B.flags|=2048,fn(9,{destroy:void 0},Pm.bind(null,i,a),null)),[n,r,e]}function Pm(e,t){e.action=t}function Zc(e){var t=be(),a=re;if(a!==null)return Xc(t,a,e);be(),t=t.memoizedState,a=be();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function fn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=B.updateQueue,t===null&&(t=tr(),B.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Jc(){return be().memoizedState}function ir(e,t,a,n){var i=Ue();B.flags|=e,i.memoizedState=fn(1|t,{destroy:void 0},a,n===void 0?null:n)}function rr(e,t,a,n){var i=be();n=n===void 0?null:n;var r=i.memoizedState.inst;re!==null&&n!==null&&jo(n,re.memoizedState.deps)?i.memoizedState=fn(t,r,a,n):(B.flags|=e,i.memoizedState=fn(1|t,r,a,n))}function $c(e,t){ir(8390656,8,e,t)}function Jo(e,t){rr(2048,8,e,t)}function Bm(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=tr(),B.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function eu(e){var t=be().memoizedState;return Bm({ref:t,nextImpl:e}),function(){if(($&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function tu(e,t){return rr(4,2,e,t)}function au(e,t){return rr(4,4,e,t)}function nu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iu(e,t,a){a=a!=null?a.concat([e]):null,rr(4,4,nu.bind(null,t,e),a)}function $o(){}function ru(e,t){var a=be();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&jo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ou(e,t){var a=be();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&jo(t,n[1]))return n[0];if(n=e(),qa){Xt(!0);try{e()}finally{Xt(!1)}}return a.memoizedState=[n,t],n}function es(e,t,a){return a===void 0||(qt&1073741824)!==0&&(Q&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sd(),B.lanes|=e,ua|=e,a)}function su(e,t,a,n){return $e(a,t)?a:dn.current!==null?(e=es(e,a,n),$e(e,t)||(we=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(Q&261930)===0?(we=!0,e.memoizedState=a):(e=sd(),B.lanes|=e,ua|=e,t)}function lu(e,t,a,n,i){var r=T.p;T.p=r!==0&&8>r?r:8;var o=h.T,s={};h.T=s,ns(e,!1,t,a);try{var l=i(),f=h.S;if(f!==null&&f(s,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var v=Mm(l,n);$n(e,t,v,rt(e))}else $n(e,t,n,rt(e))}catch(C){$n(e,t,{then:function(){},status:"rejected",reason:C},rt())}finally{T.p=r,o!==null&&s.types!==null&&(o.types=s.types),h.T=o}}function zm(){}function ts(e,t,a,n){if(e.tag!==5)throw Error(m(476));var i=cu(e).queue;lu(e,i,t,M,a===null?zm:function(){return uu(e),a(n)})}function cu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:M},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uu(e){var t=cu(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},rt())}function as(){return We(yi)}function du(){return be().memoizedState}function pu(){return be().memoizedState}function jm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=rt();e=ia(a);var n=ra(t,e,a);n!==null&&(Ve(n,t,a),Yn(n,t,a)),t={cache:Io()},e.payload=t;return}t=t.return}}function Hm(e,t,a){var n=rt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},or(e)?fu(t,a):(a=Co(e,t,a,n),a!==null&&(Ve(a,e,n),gu(a,t,n)))}function mu(e,t,a){var n=rt();$n(e,t,a,n)}function $n(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(or(e))fu(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,s=r(o,a);if(i.hasEagerState=!0,i.eagerState=s,$e(s,o))return Bi(e,t,i,0),ce===null&&Pi(),!1}catch{}if(a=Co(e,t,i,n),a!==null)return Ve(a,e,n),gu(a,t,n),!0}return!1}function ns(e,t,a,n){if(n={lane:2,revertLane:Ms(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},or(e)){if(t)throw Error(m(479))}else t=Co(e,a,n,2),t!==null&&Ve(t,e,2)}function or(e){var t=e.alternate;return e===B||t!==null&&t===B}function fu(e,t){pn=$i=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function gu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Cl(e,a)}}var ei={readContext:We,use:ar,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useInsertionEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useSyncExternalStore:ge,useId:ge,useHostTransitionStatus:ge,useFormState:ge,useActionState:ge,useOptimistic:ge,useMemoCache:ge,useCacheRefresh:ge};ei.useEffectEvent=ge;var yu={readContext:We,use:ar,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:$c,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ir(4194308,4,nu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){ir(4,2,e,t)},useMemo:function(e,t){var a=Ue();t=t===void 0?null:t;var n=e();if(qa){Xt(!0);try{e()}finally{Xt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ue();if(a!==void 0){var i=a(t);if(qa){Xt(!0);try{a(t)}finally{Xt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Hm.bind(null,B,e),[n.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,a=mu.bind(null,B,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ue();return es(a,e,t)},useTransition:function(){var e=Xo(!1);return e=lu.bind(null,B,e.queue,!0,!1),Ue().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=B,i=Ue();if(K){if(a===void 0)throw Error(m(407));a=a()}else{if(a=t(),ce===null)throw Error(m(349));(Q&127)!==0||qc(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,$c(Pc.bind(null,n,r,e),[e]),n.flags|=2048,fn(9,{destroy:void 0},Gc.bind(null,n,r,a,t),null),a},useId:function(){var e=Ue(),t=ce.identifierPrefix;if(K){var a=Tt,n=Lt;a=(n&~(1<<32-Je(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=er++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Um++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:as,useFormState:Yc,useActionState:Yc,useOptimistic:function(e){var t=Ue();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ns.bind(null,B,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return Ue().memoizedState=jm.bind(null,B)},useEffectEvent:function(e){var t=Ue(),a={impl:e};return t.memoizedState=a,function(){if(($&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}},is={readContext:We,use:ar,useCallback:ru,useContext:We,useEffect:Jo,useImperativeHandle:iu,useInsertionEffect:tu,useLayoutEffect:au,useMemo:ou,useReducer:nr,useRef:Jc,useState:function(){return nr(Gt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=be();return su(a,re.memoizedState,e,t)},useTransition:function(){var e=nr(Gt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Jn(e),t]},useSyncExternalStore:Uc,useId:du,useHostTransitionStatus:as,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var a=be();return jc(a,re,e,t)},useMemoCache:Vo,useCacheRefresh:pu};is.useEffectEvent=eu;var vu={readContext:We,use:ar,useCallback:ru,useContext:We,useEffect:Jo,useImperativeHandle:iu,useInsertionEffect:tu,useLayoutEffect:au,useMemo:ou,useReducer:Ko,useRef:Jc,useState:function(){return Ko(Gt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=be();return re===null?es(a,e,t):su(a,re.memoizedState,e,t)},useTransition:function(){var e=Ko(Gt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Jn(e),t]},useSyncExternalStore:Uc,useId:du,useHostTransitionStatus:as,useFormState:Zc,useActionState:Zc,useOptimistic:function(e,t){var a=be();return re!==null?jc(a,re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vo,useCacheRefresh:pu};vu.useEffectEvent=eu;function rs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var os={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=rt(),i=ia(n);i.payload=t,a!=null&&(i.callback=a),t=ra(e,i,n),t!==null&&(Ve(t,e,n),Yn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=rt(),i=ia(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ra(e,i,n),t!==null&&(Ve(t,e,n),Yn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=rt(),n=ia(a);n.tag=2,t!=null&&(n.callback=t),t=ra(e,n,a),t!==null&&(Ve(t,e,a),Yn(t,e,a))}};function hu(e,t,a,n,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!Bn(a,n)||!Bn(i,r):!0}function bu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function Ga(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Cu(e){Gi(e)}function Su(e){console.error(e)}function wu(e){Gi(e)}function sr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Au(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ss(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){sr(e,t)},a}function Lu(e){return e=ia(e),e.tag=3,e}function Tu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Au(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Au(t,a,n),typeof i!="function"&&(da===null?da=new Set([this]):da.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function _m(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&on(t,a,i,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ft===null?br():a.alternate===null&&ye===0&&(ye=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Yi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),xs(e,n,i)),!1;case 22:return a.flags|=65536,n===Yi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),xs(e,n,i)),!1}throw Error(m(435,a.tag))}return xs(e,n,i),br(),!1}if(K)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Eo&&(e=Error(m(422),{cause:n}),Hn(ut(e,a)))):(n!==Eo&&(t=Error(m(423),{cause:n}),Hn(ut(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=ut(n,a),i=ss(e.stateNode,n,i),qo(e,i),ye!==4&&(ye=2)),!1;var r=Error(m(520),{cause:n});if(r=ut(r,a),li===null?li=[r]:li.push(r),ye!==4&&(ye=2),t===null)return!0;n=ut(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ss(a.stateNode,n,e),qo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(da===null||!da.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Lu(i),Tu(i,e,a,n),qo(a,i),!1}a=a.return}while(a!==null);return!1}var ls=Error(m(461)),we=!1;function Oe(e,t,a,n){t.child=e===null?Wc(t,null,a,n):Ua(t,e.child,a,n)}function Eu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var s in n)s!=="ref"&&(o[s]=n[s])}else o=n;return xa(t),n=Ho(e,t,a,o,r,i),s=_o(),e!==null&&!we?(Fo(e,t,i),Pt(e,t,i)):(K&&s&&Lo(t),t.flags|=1,Oe(e,t,n,i),t.child)}function Du(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!So(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ru(e,t,r,n,i)):(e=ji(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ys(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Bn,a(o,n)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=kt(r,n),e.ref=t.ref,e.return=t,t.child=e}function Ru(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Bn(r,n)&&e.ref===t.ref)if(we=!1,t.pendingProps=n=r,ys(e,i))(e.flags&131072)!==0&&(we=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return cs(e,t,a,n,i)}function Wu(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return Ou(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qi(t,r!==null?r.cachePool:null),r!==null?xc(t,r):Po(),kc(t);else return n=t.lanes=536870912,Ou(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(Qi(t,r.cachePool),xc(t,r),sa(),t.memoizedState=null):(e!==null&&Qi(t,null),Po(),sa());return Oe(e,t,i,a),t.child}function ti(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ou(e,t,a,n,i){var r=ko();return r=r===null?null:{parent:Ce._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Qi(t,null),Po(),kc(t),e!==null&&on(e,t,n,!0),t.childLanes=i,null}function lr(e,t){return t=ur({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Iu(e,t,a){return Ua(t,e.child,null,a),e=lr(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Fm(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(K){if(n.mode==="hidden")return e=lr(t,n),t.lanes=536870912,ti(null,e);if(zo(t),(e=de)?(e=Hd(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Lt,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,Re=t,de=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return lr(t,n)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(zo(t),i)if(t.flags&256)t.flags&=-257,t=Iu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(we||on(e,t,a,!1),i=(a&e.childLanes)!==0,we||i){if(n=ce,n!==null&&(o=Sl(n,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,Ra(e,o),Ve(n,e,o),ls;br(),t=Iu(e,t,a)}else e=r.treeContext,de=gt(o.nextSibling),Re=t,K=!0,ea=null,mt=!1,e!==null&&vc(t,e),t=lr(t,n),t.flags|=4096;return t}return e=kt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cs(e,t,a,n,i){return xa(t),a=Ho(e,t,a,n,void 0,i),n=_o(),e!==null&&!we?(Fo(e,t,i),Pt(e,t,i)):(K&&n&&Lo(t),t.flags|=1,Oe(e,t,a,i),t.child)}function xu(e,t,a,n,i,r){return xa(t),t.updateQueue=null,a=Mc(t,n,a,i),Nc(e),n=_o(),e!==null&&!we?(Fo(e,t,r),Pt(e,t,r)):(K&&n&&Lo(t),t.flags|=1,Oe(e,t,a,r),t.child)}function ku(e,t,a,n,i){if(xa(t),t.stateNode===null){var r=tn,o=a.contextType;typeof o=="object"&&o!==null&&(r=We(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=os,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Mo(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?We(o):tn,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(rs(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&os.enqueueReplaceState(r,r.state,null),Xn(t,n,r,i),Kn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,l=Ga(a,s);r.props=l;var f=r.context,v=a.contextType;o=tn,typeof v=="object"&&v!==null&&(o=We(v));var C=a.getDerivedStateFromProps;v=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,v||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||f!==o)&&bu(t,r,n,o),na=!1;var g=t.memoizedState;r.state=g,Xn(t,n,r,i),Kn(),f=t.memoizedState,s||g!==f||na?(typeof C=="function"&&(rs(t,a,C,n),f=t.memoizedState),(l=na||hu(t,a,l,n,g,f,o))?(v||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),r.props=n,r.state=f,r.context=o,n=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Uo(e,t),o=t.memoizedProps,v=Ga(a,o),r.props=v,C=t.pendingProps,g=r.context,f=a.contextType,l=tn,typeof f=="object"&&f!==null&&(l=We(f)),s=a.getDerivedStateFromProps,(f=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==C||g!==l)&&bu(t,r,n,l),na=!1,g=t.memoizedState,r.state=g,Xn(t,n,r,i),Kn();var y=t.memoizedState;o!==C||g!==y||na||e!==null&&e.dependencies!==null&&_i(e.dependencies)?(typeof s=="function"&&(rs(t,a,s,n),y=t.memoizedState),(v=na||hu(t,a,v,n,g,y,l)||e!==null&&e.dependencies!==null&&_i(e.dependencies))?(f||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,y,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,y,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),r.props=n,r.state=y,r.context=l,n=v):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,cr(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,a,i)):Oe(e,t,a,i),t.memoizedState=r.state,e=t.child):e=Pt(e,t,i),e}function Nu(e,t,a,n){return Oa(),t.flags|=256,Oe(e,t,a,n),t.child}var us={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ds(e){return{baseLanes:e,cachePool:Ac()}}function ps(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=it),e}function Mu(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(he.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(K){if(i?oa(t):sa(),(e=de)?(e=Hd(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Lt,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,Re=t,de=null)):e=null,e===null)throw ta(t);return Ys(e)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,i?(sa(),i=t.mode,s=ur({mode:"hidden",children:s},i),n=Wa(n,i,a,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=ds(a),n.childLanes=ps(e,o,a),t.memoizedState=us,ti(null,n)):(oa(t),ms(t,s))}var l=e.memoizedState;if(l!==null&&(s=l.dehydrated,s!==null)){if(r)t.flags&256?(oa(t),t.flags&=-257,t=fs(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),s=n.fallback,i=t.mode,n=ur({mode:"visible",children:n.children},i),s=Wa(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,Ua(t,e.child,null,a),n=t.child,n.memoizedState=ds(a),n.childLanes=ps(e,o,a),t.memoizedState=us,t=ti(null,n));else if(oa(t),Ys(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var f=o.dgst;o=f,n=Error(m(419)),n.stack="",n.digest=o,Hn({value:n,source:null,stack:null}),t=fs(e,t,a)}else if(we||on(e,t,a,!1),o=(a&e.childLanes)!==0,we||o){if(o=ce,o!==null&&(n=Sl(o,a),n!==0&&n!==l.retryLane))throw l.retryLane=n,Ra(e,n),Ve(o,e,n),ls;Vs(s)||br(),t=fs(e,t,a)}else Vs(s)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,de=gt(s.nextSibling),Re=t,K=!0,ea=null,mt=!1,e!==null&&vc(t,e),t=ms(t,n.children),t.flags|=4096);return t}return i?(sa(),s=n.fallback,i=t.mode,l=e.child,f=l.sibling,n=kt(l,{mode:"hidden",children:n.children}),n.subtreeFlags=l.subtreeFlags&65011712,f!==null?s=kt(f,s):(s=Wa(s,i,a,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,ti(null,n),n=t.child,s=e.child.memoizedState,s===null?s=ds(a):(i=s.cachePool,i!==null?(l=Ce._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=Ac(),s={baseLanes:s.baseLanes|a,cachePool:i}),n.memoizedState=s,n.childLanes=ps(e,o,a),t.memoizedState=us,ti(e.child,n)):(oa(t),a=e.child,e=a.sibling,a=kt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function ms(e,t){return t=ur({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ur(e,t){return e=et(22,e,null,t),e.lanes=0,e}function fs(e,t,a){return Ua(t,e.child,null,a),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Wo(e.return,t,a)}function gs(e,t,a,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=r)}function qu(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var o=he.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(he,o),Oe(e,t,n,a),n=K?jn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uu(e,a,t);else if(e.tag===19)Uu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Ji(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),gs(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}gs(t,!0,a,null,r,n);break;case"together":gs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(on(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,a=kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ys(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_i(e)))}function Qm(e,t,a){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),aa(t,Ce,e.memoizedState.cache),Oa();break;case 27:case 5:Dn(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Mu(e,t,a):(oa(t),e=Pt(e,t,a),e!==null?e.sibling:null);oa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(on(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return qu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(he,he.current),n)break;return null;case 22:return t.lanes=0,Wu(e,t,a,t.pendingProps);case 24:aa(t,Ce,e.memoizedState.cache)}return Pt(e,t,a)}function Gu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)we=!0;else{if(!ys(e,a)&&(t.flags&128)===0)return we=!1,Qm(e,t,a);we=(e.flags&131072)!==0}else we=!1,K&&(t.flags&1048576)!==0&&yc(t,jn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e=="function")So(e)?(n=Ga(e,n),t.tag=1,t=ku(null,t,e,n,a)):(t.tag=0,t=cs(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===ot){t.tag=11,t=Eu(null,t,e,n,a);break e}else if(i===Y){t.tag=14,t=Du(null,t,e,n,a);break e}}throw t=Wt(e)||e,Error(m(306,t,""))}}return t;case 0:return cs(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ga(n,t.pendingProps),ku(e,t,n,i,a);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(m(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Uo(e,t),Xn(t,n,null,a);var o=t.memoizedState;if(n=o.cache,aa(t,Ce,n),n!==r.cache&&Oo(t,[Ce],a,!0),Kn(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Nu(e,t,n,a);break e}else if(n!==i){i=ut(Error(m(424)),t),Hn(i),t=Nu(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,de=gt(e.firstChild),Re=t,K=!0,ea=null,mt=!0,a=Wc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Oa(),n===i){t=Pt(e,t,a);break e}Oe(e,t,n,a)}t=t.child}return t;case 26:return cr(e,t),e===null?(a=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=a:K||(a=t.type,e=t.pendingProps,n=Er(j.current).createElement(a),n[De]=t,n[ze]=e,Ie(n,a,e),Te(n),t.stateNode=n):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dn(t),e===null&&K&&(n=t.stateNode=Qd(t.type,t.pendingProps,j.current),Re=t,mt=!0,i=de,ga(t.type)?(Ks=i,de=gt(n.firstChild)):de=i),Oe(e,t,t.pendingProps.children,a),cr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((i=n=de)&&(n=Af(n,t.type,t.pendingProps,mt),n!==null?(t.stateNode=n,Re=t,de=gt(n.firstChild),mt=!1,i=!0):i=!1),i||ta(t)),Dn(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,_s(i,r)?n=null:o!==null&&_s(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Ho(e,t,qm,null,null,a),yi._currentValue=i),cr(e,t),Oe(e,t,n,a),t.child;case 6:return e===null&&K&&((e=a=de)&&(a=Lf(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Re=t,de=null,e=!0):e=!1),e||ta(t)),null;case 13:return Mu(e,t,a);case 4:return Me(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ua(t,null,n,a):Oe(e,t,n,a),t.child;case 11:return Eu(e,t,t.type,t.pendingProps,a);case 7:return Oe(e,t,t.pendingProps,a),t.child;case 8:return Oe(e,t,t.pendingProps.children,a),t.child;case 12:return Oe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,aa(t,t.type,n.value),Oe(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,xa(t),i=We(i),n=n(i),t.flags|=1,Oe(e,t,n,a),t.child;case 14:return Du(e,t,t.type,t.pendingProps,a);case 15:return Ru(e,t,t.type,t.pendingProps,a);case 19:return qu(e,t,a);case 31:return Fm(e,t,a);case 22:return Wu(e,t,a,t.pendingProps);case 24:return xa(t),n=We(Ce),e===null?(i=ko(),i===null&&(i=ce,r=Io(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Mo(t),aa(t,Ce,i)):((e.lanes&a)!==0&&(Uo(e,t),Xn(t,null,null,a),Kn()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),aa(t,Ce,n)):(n=r.cache,aa(t,Ce,n),n!==i.cache&&Oo(t,[Ce],a,!0))),Oe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Bt(e){e.flags|=4}function vs(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(dd())e.flags|=8192;else throw Ma=Yi,No}else e.flags&=-16777217}function Pu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ep(t))if(dd())e.flags|=8192;else throw Ma=Yi,No}function dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hl():536870912,e.lanes|=t,hn|=t)}function ai(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Vm(e,t,a){var n=t.pendingProps;switch(To(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ut(Ce),ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rn(t)?Bt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Do())),pe(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(Bt(t),r!==null?(pe(t),Pu(t,r)):(pe(t),vs(t,i,null,n,a))):r?r!==e.memoizedState?(Bt(t),pe(t),Pu(t,r)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Bt(t),pe(t),vs(t,i,e,n,a)),null;case 27:if(wi(t),a=j.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Bt(t);else{if(!n){if(t.stateNode===null)throw Error(m(166));return pe(t),null}e=W.current,rn(t)?hc(t):(e=Qd(i,n,a),t.stateNode=e,Bt(t))}return pe(t),null;case 5:if(wi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Bt(t);else{if(!n){if(t.stateNode===null)throw Error(m(166));return pe(t),null}if(r=W.current,rn(t))hc(t);else{var o=Er(j.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}r[De]=t,r[ze]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(Ie(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Bt(t)}}return pe(t),vs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Bt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(m(166));if(e=j.current,rn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Re,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[De]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Md(e.nodeValue,a)),e||ta(t,!0)}else e=Er(e).createTextNode(n),e[De]=t,t.stateNode=e}return pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=rn(t),a!==null){if(e===null){if(!n)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[De]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else a=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(m(558))}return pe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=rn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[De]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else i=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),dr(t,t.updateQueue),pe(t),null);case 4:return ve(),e===null&&Ps(t.stateNode.containerInfo),pe(t),null;case 10:return Ut(t.type),pe(t),null;case 19:if(w(he),n=t.memoizedState,n===null)return pe(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)ai(n,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ji(e),r!==null){for(t.flags|=128,ai(n,!1),e=r.updateQueue,t.updateQueue=e,dr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)mc(a,e),a=a.sibling;return D(he,he.current&1|2),K&&Nt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Xe()>yr&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304)}else{if(!i)if(e=Ji(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,dr(t,e),ai(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!K)return pe(t),null}else 2*Xe()-n.renderingStartTime>yr&&a!==536870912&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Xe(),e.sibling=null,a=he.current,D(he,i?a&1|2:a&1),K&&Nt(t,n.treeForkCount),e):(pe(t),null);case 22:case 23:return at(t),Bo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),a=t.updateQueue,a!==null&&dr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&w(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(Ce),pe(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Ym(e,t){switch(To(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(Ce),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wi(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(m(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(he),null;case 4:return ve(),null;case 10:return Ut(t.type),null;case 22:case 23:return at(t),Bo(),e!==null&&w(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(Ce),null;case 25:return null;default:return null}}function Bu(e,t){switch(To(t),t.tag){case 3:Ut(Ce),ve();break;case 26:case 27:case 5:wi(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:w(he);break;case 10:Ut(t.type);break;case 22:case 23:at(t),Bo(),e!==null&&w(ka);break;case 24:Ut(Ce)}}function ni(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==i)}}catch(s){ne(t,t.return,s)}}function la(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var o=n.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var l=a,f=s;try{f()}catch(v){ne(i,l,v)}}}n=n.next}while(n!==r)}}catch(v){ne(t,t.return,v)}}function zu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ic(t,a)}catch(n){ne(e,e.return,n)}}}function ju(e,t,a){a.props=Ga(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ne(e,t,n)}}function ii(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ne(e,t,i)}}function Et(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ne(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ne(e,t,i)}else a.current=null}function Hu(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ne(e,e.return,i)}}function hs(e,t,a){try{var n=e.stateNode;vf(n,e.type,a,t),n[ze]=t}catch(i){ne(e,e.return,i)}}function _u(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=It));else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Cs(e,t,a),e=e.sibling;e!==null;)Cs(e,t,a),e=e.sibling}function pr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(pr(e,t,a),e=e.sibling;e!==null;)pr(e,t,a),e=e.sibling}function Fu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ie(t,n,a),t[De]=e,t[ze]=a}catch(r){ne(e,e.return,r)}}var zt=!1,Ae=!1,Ss=!1,Qu=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Km(e,t){if(e=e.containerInfo,js=kr,e=ic(e),fo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,s=-1,l=-1,f=0,v=0,C=e,g=null;t:for(;;){for(var y;C!==a||i!==0&&C.nodeType!==3||(s=o+i),C!==r||n!==0&&C.nodeType!==3||(l=o+n),C.nodeType===3&&(o+=C.nodeValue.length),(y=C.firstChild)!==null;)g=C,C=y;for(;;){if(C===e)break t;if(g===a&&++f===i&&(s=o),g===r&&++v===n&&(l=o),(y=C.nextSibling)!==null)break;C=g,g=C.parentNode}C=y}a=s===-1||l===-1?null:{start:s,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hs={focusedElem:e,selectionRange:a},kr=!1,Ee=t;Ee!==null;)if(t=Ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ee=e;else for(;Ee!==null;){switch(t=Ee,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var R=Ga(a.type,i);e=n.getSnapshotBeforeUpdate(R,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(k){ne(a,a.return,k)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Qs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,Ee=e;break}Ee=t.return}}function Vu(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ht(e,a),n&4&&ni(5,a);break;case 1:if(Ht(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ne(a,a.return,o)}else{var i=Ga(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ne(a,a.return,o)}}n&64&&zu(a),n&512&&ii(a,a.return);break;case 3:if(Ht(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ic(e,t)}catch(o){ne(a,a.return,o)}}break;case 27:t===null&&n&4&&Fu(a);case 26:case 5:Ht(e,a),t===null&&n&4&&Hu(a),n&512&&ii(a,a.return);break;case 12:Ht(e,a);break;case 31:Ht(e,a),n&4&&Xu(e,a);break;case 13:Ht(e,a),n&4&&Zu(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rf.bind(null,a),Tf(e,a))));break;case 22:if(n=a.memoizedState!==null||zt,!n){t=t!==null&&t.memoizedState!==null||Ae,i=zt;var r=Ae;zt=n,(Ae=t)&&!r?_t(e,a,(a.subtreeFlags&8772)!==0):Ht(e,a),zt=i,Ae=r}break;case 30:break;default:Ht(e,a)}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,He=!1;function jt(e,t,a){for(a=a.child;a!==null;)Ku(e,t,a),a=a.sibling}function Ku(e,t,a){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Rn,a)}catch{}switch(a.tag){case 26:Ae||Et(a,t),jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||Et(a,t);var n=fe,i=He;ga(a.type)&&(fe=a.stateNode,He=!1),jt(e,t,a),mi(a.stateNode),fe=n,He=i;break;case 5:Ae||Et(a,t);case 6:if(n=fe,i=He,fe=null,jt(e,t,a),fe=n,He=i,fe!==null)if(He)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(a.stateNode)}catch(r){ne(a,t,r)}else try{fe.removeChild(a.stateNode)}catch(r){ne(a,t,r)}break;case 18:fe!==null&&(He?(e=fe,zd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),En(e)):zd(fe,a.stateNode));break;case 4:n=fe,i=He,fe=a.stateNode.containerInfo,He=!0,jt(e,t,a),fe=n,He=i;break;case 0:case 11:case 14:case 15:la(2,a,t),Ae||la(4,a,t),jt(e,t,a);break;case 1:Ae||(Et(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&ju(a,t,n)),jt(e,t,a);break;case 21:jt(e,t,a);break;case 22:Ae=(n=Ae)||a.memoizedState!==null,jt(e,t,a),Ae=n;break;default:jt(e,t,a)}}function Xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{En(e)}catch(a){ne(t,t.return,a)}}}function Zu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{En(e)}catch(a){ne(t,t.return,a)}}function Xm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qu),t;default:throw Error(m(435,e.tag))}}function mr(e,t){var a=Xm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=of.bind(null,e,n);n.then(i,i)}})}function _e(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(ga(s.type)){fe=s.stateNode,He=!1;break e}break;case 5:fe=s.stateNode,He=!1;break e;case 3:case 4:fe=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(fe===null)throw Error(m(160));Ku(r,o,i),fe=null,He=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}var bt=null;function Ju(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_e(t,e),Fe(e),n&4&&(la(3,e,e.return),ni(3,e),la(5,e,e.return));break;case 1:_e(t,e),Fe(e),n&512&&(Ae||a===null||Et(a,a.return)),n&64&&zt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=bt;if(_e(t,e),Fe(e),n&512&&(Ae||a===null||Et(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[In]||r[De]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),Ie(r,n,a),r[De]=e,Te(r),n=r;break e;case"link":var o=Jd("link","href",i).get(n+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(r=o[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}r=i.createElement(n),Ie(r,n,a),i.head.appendChild(r);break;case"meta":if(o=Jd("meta","content",i).get(n+(a.content||""))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}r=i.createElement(n),Ie(r,n,a),i.head.appendChild(r);break;default:throw Error(m(468,n))}r[De]=e,Te(r),n=r}e.stateNode=n}else $d(i,e.type,e.stateNode);else e.stateNode=Zd(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?$d(i,e.type,e.stateNode):Zd(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&hs(e,e.memoizedProps,a.memoizedProps)}break;case 27:_e(t,e),Fe(e),n&512&&(Ae||a===null||Et(a,a.return)),a!==null&&n&4&&hs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_e(t,e),Fe(e),n&512&&(Ae||a===null||Et(a,a.return)),e.flags&32){i=e.stateNode;try{Ya(i,"")}catch(R){ne(e,e.return,R)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,hs(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Ss=!0);break;case 6:if(_e(t,e),Fe(e),n&4){if(e.stateNode===null)throw Error(m(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(R){ne(e,e.return,R)}}break;case 3:if(Wr=null,i=bt,bt=Dr(t.containerInfo),_e(t,e),bt=i,Fe(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(R){ne(e,e.return,R)}Ss&&(Ss=!1,$u(e));break;case 4:n=bt,bt=Dr(e.stateNode.containerInfo),_e(t,e),Fe(e),bt=n;break;case 12:_e(t,e),Fe(e);break;case 31:_e(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,mr(e,n)));break;case 13:_e(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gr=Xe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,mr(e,n)));break;case 22:i=e.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,f=zt,v=Ae;if(zt=f||i,Ae=v||l,_e(t,e),Ae=v,zt=f,Fe(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||l||zt||Ae||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){l=a=t;try{if(r=l.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=l.stateNode;var C=l.memoizedProps.style,g=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(R){ne(l,l.return,R)}}}else if(t.tag===6){if(a===null){l=t;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(R){ne(l,l.return,R)}}}else if(t.tag===18){if(a===null){l=t;try{var y=l.stateNode;i?jd(y,!0):jd(l.stateNode,!1)}catch(R){ne(l,l.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,mr(e,a))));break;case 19:_e(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,mr(e,n)));break;case 30:break;case 21:break;default:_e(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(_u(n)){a=n;break}n=n.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var i=a.stateNode,r=bs(e);pr(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&(Ya(o,""),a.flags&=-33);var s=bs(e);pr(e,s,o);break;case 3:case 4:var l=a.stateNode.containerInfo,f=bs(e);Cs(e,f,l);break;default:throw Error(m(161))}}catch(v){ne(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $u(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$u(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ht(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vu(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:la(4,t,t.return),Pa(t);break;case 1:Et(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ju(t,t.return,a),Pa(t);break;case 27:mi(t.stateNode);case 26:case 5:Et(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function _t(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:_t(i,r,a),ni(4,r);break;case 1:if(_t(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(f){ne(n,n.return,f)}if(n=r,i=n.updateQueue,i!==null){var s=n.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Oc(l[i],s)}catch(f){ne(n,n.return,f)}}a&&o&64&&zu(r),ii(r,r.return);break;case 27:Fu(r);case 26:case 5:_t(i,r,a),a&&n===null&&o&4&&Hu(r),ii(r,r.return);break;case 12:_t(i,r,a);break;case 31:_t(i,r,a),a&&o&4&&Xu(i,r);break;case 13:_t(i,r,a),a&&o&4&&Zu(i,r);break;case 22:r.memoizedState===null&&_t(i,r,a),ii(r,r.return);break;case 30:break;default:_t(i,r,a)}t=t.sibling}}function ws(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_n(a))}function As(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_n(e))}function Ct(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ed(e,t,a,n),t=t.sibling}function ed(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ct(e,t,a,n),i&2048&&ni(9,t);break;case 1:Ct(e,t,a,n);break;case 3:Ct(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_n(e)));break;case 12:if(i&2048){Ct(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,s=r.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ne(t,t.return,l)}}else Ct(e,t,a,n);break;case 31:Ct(e,t,a,n);break;case 13:Ct(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Ct(e,t,a,n):ri(e,t):r._visibility&2?Ct(e,t,a,n):(r._visibility|=2,gn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ws(o,t);break;case 24:Ct(e,t,a,n),i&2048&&As(t.alternate,t);break;default:Ct(e,t,a,n)}}function gn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,s=a,l=n,f=o.flags;switch(o.tag){case 0:case 11:case 15:gn(r,o,s,l,i),ni(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?gn(r,o,s,l,i):ri(r,o):(v._visibility|=2,gn(r,o,s,l,i)),i&&f&2048&&ws(o.alternate,o);break;case 24:gn(r,o,s,l,i),i&&f&2048&&As(o.alternate,o);break;default:gn(r,o,s,l,i)}t=t.sibling}}function ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ri(a,n),i&2048&&ws(n.alternate,n);break;case 24:ri(a,n),i&2048&&As(n.alternate,n);break;default:ri(a,n)}t=t.sibling}}var oi=8192;function yn(e,t,a){if(e.subtreeFlags&oi)for(e=e.child;e!==null;)td(e,t,a),e=e.sibling}function td(e,t,a){switch(e.tag){case 26:yn(e,t,a),e.flags&oi&&e.memoizedState!==null&&qf(a,bt,e.memoizedState,e.memoizedProps);break;case 5:yn(e,t,a);break;case 3:case 4:var n=bt;bt=Dr(e.stateNode.containerInfo),yn(e,t,a),bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oi,oi=16777216,yn(e,t,a),oi=n):yn(e,t,a));break;default:yn(e,t,a)}}function ad(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ee=n,id(n,e)}ad(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nd(e),e=e.sibling}function nd(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&la(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fr(e)):si(e);break;default:si(e)}}function fr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ee=n,id(n,e)}ad(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:la(8,t,t.return),fr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,fr(t));break;default:fr(t)}e=e.sibling}}function id(e,t){for(;Ee!==null;){var a=Ee;switch(a.tag){case 0:case 11:case 15:la(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:_n(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ee=n;else e:for(a=e;Ee!==null;){n=Ee;var i=n.sibling,r=n.return;if(Yu(n),n===a){Ee=null;break e}if(i!==null){i.return=r,Ee=i;break e}Ee=r}}}var Zm={getCacheForType:function(e){var t=We(Ce),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return We(Ce).controller.signal}},Jm=typeof WeakMap=="function"?WeakMap:Map,$=0,ce=null,H=null,Q=0,ae=0,nt=null,ca=!1,vn=!1,Ls=!1,Ft=0,ye=0,ua=0,Ba=0,Ts=0,it=0,hn=0,li=null,Qe=null,Es=!1,gr=0,rd=0,yr=1/0,vr=null,da=null,Le=0,pa=null,bn=null,Qt=0,Ds=0,Rs=null,od=null,ci=0,Ws=null;function rt(){return($&2)!==0&&Q!==0?Q&-Q:h.T!==null?Ms():wl()}function sd(){if(it===0)if((Q&536870912)===0||K){var e=Ti;Ti<<=1,(Ti&3932160)===0&&(Ti=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Ve(e,t,a){(e===ce&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Cn(e,0),ma(e,Q,it,!1)),On(e,a),(($&2)===0||e!==ce)&&(e===ce&&(($&2)===0&&(Ba|=a),ye===4&&ma(e,Q,it,!1)),Dt(e))}function ld(e,t,a){if(($&6)!==0)throw Error(m(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Wn(e,t),i=n?tf(e,t):Is(e,t,!0),r=n;do{if(i===0){vn&&!n&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!$m(a)){i=Is(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;i=li;var l=s.current.memoizedState.isDehydrated;if(l&&(Cn(s,o).flags|=256),o=Is(s,o,!1),o!==2){if(Ls&&!l){s.errorRecoveryDisabledLanes|=r,Ba|=r,i=4;break e}r=Qe,Qe=i,r!==null&&(Qe===null?Qe=r:Qe.push.apply(Qe,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){Cn(e,0),ma(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ma(n,t,it,!ca);break e;case 2:Qe=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(i=gr+300-Xe(),10<i)){if(ma(n,t,it,!ca),Di(n,0,!0)!==0)break e;Qt=t,n.timeoutHandle=Pd(cd.bind(null,n,a,Qe,vr,Es,t,it,Ba,hn,ca,r,"Throttled",-0,0),i);break e}cd(n,a,Qe,vr,Es,t,it,Ba,hn,ca,r,null,-0,0)}}break}while(!0);Dt(e)}function cd(e,t,a,n,i,r,o,s,l,f,v,C,g,y){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},td(t,r,C);var R=(r&62914560)===r?gr-Xe():(r&4194048)===r?rd-Xe():0;if(R=Gf(C,R),R!==null){Qt=r,e.cancelPendingCommit=R(vd.bind(null,e,t,r,a,n,i,o,s,l,v,C,null,g,y)),ma(e,r,o,!f);return}}vd(e,t,r,a,n,i,o,s,l)}function $m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!$e(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,n){t&=~Ts,t&=~Ba,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-Je(i),o=1<<r;n[r]=-1,i&=~o}a!==0&&bl(e,a,t)}function hr(){return($&6)===0?(ui(0),!1):!0}function Os(){if(H!==null){if(ae===0)var e=H.return;else e=H,Mt=Ia=null,Qo(e),un=null,Qn=0,e=H;for(;e!==null;)Bu(e.alternate,e),e=e.return;H=null}}function Cn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cf(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qt=0,Os(),ce=e,H=a=kt(e.current,null),Q=t,ae=0,nt=null,ca=!1,vn=Wn(e,t),Ls=!1,hn=it=Ts=Ba=ua=ye=0,Qe=li=null,Es=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Je(n),r=1<<i;t|=e[i],n&=~r}return Ft=t,Pi(),a}function ud(e,t){B=null,h.H=ei,t===cn||t===Vi?(t=Ec(),ae=3):t===No?(t=Ec(),ae=4):ae=t===ls?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,H===null&&(ye=1,sr(e,ut(t,e.current)))}function dd(){var e=tt.current;return e===null?!0:(Q&4194048)===Q?ft===null:(Q&62914560)===Q||(Q&536870912)!==0?e===ft:!1}function pd(){var e=h.H;return h.H=ei,e===null?ei:e}function md(){var e=h.A;return h.A=Zm,e}function br(){ye=4,ca||(Q&4194048)!==Q&&tt.current!==null||(vn=!0),(ua&134217727)===0&&(Ba&134217727)===0||ce===null||ma(ce,Q,it,!1)}function Is(e,t,a){var n=$;$|=2;var i=pd(),r=md();(ce!==e||Q!==t)&&(vr=null,Cn(e,t)),t=!1;var o=ye;e:do try{if(ae!==0&&H!==null){var s=H,l=nt;switch(ae){case 8:Os(),o=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var f=ae;if(ae=0,nt=null,Sn(e,s,l,f),a&&vn){o=0;break e}break;default:f=ae,ae=0,nt=null,Sn(e,s,l,f)}}ef(),o=ye;break}catch(v){ud(e,v)}while(!0);return t&&e.shellSuspendCounter++,Mt=Ia=null,$=n,h.H=i,h.A=r,H===null&&(ce=null,Q=0,Pi()),o}function ef(){for(;H!==null;)fd(H)}function tf(e,t){var a=$;$|=2;var n=pd(),i=md();ce!==e||Q!==t?(vr=null,yr=Xe()+500,Cn(e,t)):vn=Wn(e,t);e:do try{if(ae!==0&&H!==null){t=H;var r=nt;t:switch(ae){case 1:ae=0,nt=null,Sn(e,t,r,1);break;case 2:case 9:if(Lc(r)){ae=0,nt=null,gd(t);break}t=function(){ae!==2&&ae!==9||ce!==e||(ae=7),Dt(e)},r.then(t,t);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Lc(r)?(ae=0,nt=null,gd(t)):(ae=0,nt=null,Sn(e,t,r,7));break;case 5:var o=null;switch(H.tag){case 26:o=H.memoizedState;case 5:case 27:var s=H;if(o?ep(o):s.stateNode.complete){ae=0,nt=null;var l=s.sibling;if(l!==null)H=l;else{var f=s.return;f!==null?(H=f,Cr(f)):H=null}break t}}ae=0,nt=null,Sn(e,t,r,5);break;case 6:ae=0,nt=null,Sn(e,t,r,6);break;case 8:Os(),ye=6;break e;default:throw Error(m(462))}}af();break}catch(v){ud(e,v)}while(!0);return Mt=Ia=null,h.H=n,h.A=i,$=a,H!==null?0:(ce=null,Q=0,Pi(),ye)}function af(){for(;H!==null&&!Tp();)fd(H)}function fd(e){var t=Gu(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Cr(e):H=t}function gd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=xu(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=xu(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:Qo(t);default:Bu(a,t),t=H=mc(t,Ft),t=Gu(a,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Cr(e):H=t}function Sn(e,t,a,n){Mt=Ia=null,Qo(t),un=null,Qn=0;var i=t.return;try{if(_m(e,i,t,a,Q)){ye=1,sr(e,ut(a,e.current)),H=null;return}}catch(r){if(i!==null)throw H=i,r;ye=1,sr(e,ut(a,e.current)),H=null;return}t.flags&32768?(K||n===1?e=!0:vn||(Q&536870912)!==0?e=!1:(ca=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),yd(t,e)):Cr(t)}function Cr(e){var t=e;do{if((t.flags&32768)!==0){yd(t,ca);return}e=t.return;var a=Vm(t.alternate,t,Ft);if(a!==null){H=a;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);ye===0&&(ye=5)}function yd(e,t){do{var a=Ym(e.alternate,e);if(a!==null){a.flags&=32767,H=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){H=e;return}H=e=a}while(e!==null);ye=6,H=null}function vd(e,t,a,n,i,r,o,s,l){e.cancelPendingCommit=null;do Sr();while(Le!==0);if(($&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(r=t.lanes|t.childLanes,r|=bo,Mp(e,a,r,o,s,l),e===ce&&(H=ce=null,Q=0),bn=t,pa=e,Qt=a,Ds=r,Rs=i,od=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sf(Ai,function(){return wd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=h.T,h.T=null,i=T.p,T.p=2,o=$,$|=4;try{Km(e,t,a)}finally{$=o,T.p=i,h.T=n}}Le=1,hd(),bd(),Cd()}}function hd(){if(Le===1){Le=0;var e=pa,t=bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=h.T,h.T=null;var n=T.p;T.p=2;var i=$;$|=4;try{Ju(t,e);var r=Hs,o=ic(e.containerInfo),s=r.focusedElem,l=r.selectionRange;if(o!==s&&s&&s.ownerDocument&&nc(s.ownerDocument.documentElement,s)){if(l!==null&&fo(s)){var f=l.start,v=l.end;if(v===void 0&&(v=f),"selectionStart"in s)s.selectionStart=f,s.selectionEnd=Math.min(v,s.value.length);else{var C=s.ownerDocument||document,g=C&&C.defaultView||window;if(g.getSelection){var y=g.getSelection(),R=s.textContent.length,k=Math.min(l.start,R),se=l.end===void 0?k:Math.min(l.end,R);!y.extend&&k>se&&(o=se,se=k,k=o);var d=ac(s,k),c=ac(s,se);if(d&&c&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var p=C.createRange();p.setStart(d.node,d.offset),y.removeAllRanges(),k>se?(y.addRange(p),y.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),y.addRange(p))}}}}for(C=[],y=s;y=y.parentNode;)y.nodeType===1&&C.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var b=C[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}kr=!!js,Hs=js=null}finally{$=i,T.p=n,h.T=a}}e.current=t,Le=2}}function bd(){if(Le===2){Le=0;var e=pa,t=bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=h.T,h.T=null;var n=T.p;T.p=2;var i=$;$|=4;try{Vu(e,t.alternate,t)}finally{$=i,T.p=n,h.T=a}}Le=3}}function Cd(){if(Le===4||Le===3){Le=0,Ep();var e=pa,t=bn,a=Qt,n=od;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,bn=pa=null,Sd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(da=null),Yr(a),t=t.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Rn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=h.T,i=T.p,T.p=2,h.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var s=n[o];r(s.value,{componentStack:s.stack})}}finally{h.T=t,T.p=i}}(Qt&3)!==0&&Sr(),Dt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Ws?ci++:(ci=0,Ws=e):ci=0,ui(0)}}function Sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_n(t)))}function Sr(){return hd(),bd(),Cd(),wd()}function wd(){if(Le!==5)return!1;var e=pa,t=Ds;Ds=0;var a=Yr(Qt),n=h.T,i=T.p;try{T.p=32>a?32:a,h.T=null,a=Rs,Rs=null;var r=pa,o=Qt;if(Le=0,bn=pa=null,Qt=0,($&6)!==0)throw Error(m(331));var s=$;if($|=4,nd(r.current),ed(r,r.current,o,a),$=s,ui(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Rn,r)}catch{}return!0}finally{T.p=i,h.T=n,Sd(e,t)}}function Ad(e,t,a){t=ut(a,t),t=ss(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(On(e,2),Dt(e))}function ne(e,t,a){if(e.tag===3)Ad(e,e,a);else for(;t!==null;){if(t.tag===3){Ad(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(da===null||!da.has(n))){e=ut(a,e),a=Lu(2),n=ra(t,a,2),n!==null&&(Tu(a,n,t,e),On(n,2),Dt(n));break}}t=t.return}}function xs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Jm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Ls=!0,i.add(a),e=nf.bind(null,e,t,a),t.then(e,e))}function nf(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ce===e&&(Q&a)===a&&(ye===4||ye===3&&(Q&62914560)===Q&&300>Xe()-gr?($&2)===0&&Cn(e,0):Ts|=a,hn===Q&&(hn=0)),Dt(e)}function Ld(e,t){t===0&&(t=hl()),e=Ra(e,t),e!==null&&(On(e,t),Dt(e))}function rf(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ld(e,a)}function of(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(m(314))}n!==null&&n.delete(t),Ld(e,a)}function sf(e,t){return _r(e,t)}var wr=null,wn=null,ks=!1,Ar=!1,Ns=!1,fa=0;function Dt(e){e!==wn&&e.next===null&&(wn===null?wr=wn=e:wn=wn.next=e),Ar=!0,ks||(ks=!0,cf())}function ui(e,t){if(!Ns&&Ar){Ns=!0;do for(var a=!1,n=wr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var o=n.suspendedLanes,s=n.pingedLanes;r=(1<<31-Je(42|e)+1)-1,r&=i&~(o&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Rd(n,r))}else r=Q,r=Di(n,n===ce?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Wn(n,r)||(a=!0,Rd(n,r));n=n.next}while(a);Ns=!1}}function lf(){Td()}function Td(){Ar=ks=!1;var e=0;fa!==0&&bf()&&(e=fa);for(var t=Xe(),a=null,n=wr;n!==null;){var i=n.next,r=Ed(n,t);r===0?(n.next=null,a===null?wr=i:a.next=i,i===null&&(wn=a)):(a=n,(e!==0||(r&3)!==0)&&(Ar=!0)),n=i}Le!==0&&Le!==5||ui(e),fa!==0&&(fa=0)}function Ed(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Je(r),s=1<<o,l=i[o];l===-1?((s&a)===0||(s&n)!==0)&&(i[o]=Np(s,t)):l<=t&&(e.expiredLanes|=s),r&=~s}if(t=ce,a=Q,a=Di(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Fr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Fr(n),Yr(a)){case 2:case 8:a=yl;break;case 32:a=Ai;break;case 268435456:a=vl;break;default:a=Ai}return n=Dd.bind(null,e),a=_r(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Fr(n),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sr()&&e.callbackNode!==a)return null;var n=Q;return n=Di(e,e===ce?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(ld(e,n,t),Ed(e,Xe()),e.callbackNode!=null&&e.callbackNode===a?Dd.bind(null,e):null)}function Rd(e,t){if(Sr())return null;ld(e,t,!0)}function cf(){Sf(function(){($&6)!==0?_r(gl,lf):Td()})}function Ms(){if(fa===0){var e=sn;e===0&&(e=Li,Li<<=1,(Li&261888)===0&&(Li=256)),fa=e}return fa}function Wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(""+e)}function Od(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function uf(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Wd((i[ze]||null).action),o=n.submitter;o&&(t=(t=o[ze]||null)?Wd(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var s=new Mi("action","action",null,n,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(fa!==0){var l=o?Od(i,o):new FormData(i);ts(a,{pending:!0,data:l,method:i.method,action:r},null,l)}}else typeof r=="function"&&(s.preventDefault(),l=o?Od(i,o):new FormData(i),ts(a,{pending:!0,data:l,method:i.method,action:r},r,l))},currentTarget:i}]})}}for(var Us=0;Us<ho.length;Us++){var qs=ho[Us],df=qs.toLowerCase(),pf=qs[0].toUpperCase()+qs.slice(1);ht(df,"on"+pf)}ht(sc,"onAnimationEnd"),ht(lc,"onAnimationIteration"),ht(cc,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(Dm,"onTransitionRun"),ht(Rm,"onTransitionStart"),ht(Wm,"onTransitionCancel"),ht(uc,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function Id(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,f=s.currentTarget;if(s=s.listener,l!==r&&i.isPropagationStopped())break e;r=s,i.currentTarget=f;try{r(i)}catch(v){Gi(v)}i.currentTarget=null,r=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,f=s.currentTarget,s=s.listener,l!==r&&i.isPropagationStopped())break e;r=s,i.currentTarget=f;try{r(i)}catch(v){Gi(v)}i.currentTarget=null,r=l}}}}function _(e,t){var a=t[Kr];a===void 0&&(a=t[Kr]=new Set);var n=e+"__bubble";a.has(n)||(xd(t,e,2,!1),a.add(n))}function Gs(e,t,a){var n=0;t&&(n|=4),xd(a,e,n,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function Ps(e){if(!e[Lr]){e[Lr]=!0,Tl.forEach(function(a){a!=="selectionchange"&&(mf.has(a)||Gs(a,!1,e),Gs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,Gs("selectionchange",!1,t))}}function xd(e,t,a,n){switch(sp(t)){case 2:var i=zf;break;case 8:i=jf;break;default:i=el}a=i.bind(null,t,a,e),i=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Bs(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ha(s),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){n=r=o;continue e}s=s.parentNode}}n=n.return}ql(function(){var f=r,v=ao(a),C=[];e:{var g=dc.get(e);if(g!==void 0){var y=Mi,R=e;switch(e){case"keypress":if(ki(a)===0)break e;case"keydown":case"keyup":y=rm;break;case"focusin":R="focus",y=lo;break;case"focusout":R="blur",y=lo;break;case"beforeblur":case"afterblur":y=lo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=lm;break;case sc:case lc:case cc:y=Xp;break;case uc:y=um;break;case"scroll":case"scrollend":y=Fp;break;case"wheel":y=pm;break;case"copy":case"cut":case"paste":y=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=jl;break;case"toggle":case"beforetoggle":y=fm}var k=(t&4)!==0,se=!k&&(e==="scroll"||e==="scrollend"),d=k?g!==null?g+"Capture":null:g;k=[];for(var c=f,p;c!==null;){var b=c;if(p=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||p===null||d===null||(b=kn(c,d),b!=null&&k.push(pi(c,b,p))),se)break;c=c.return}0<k.length&&(g=new y(g,R,null,a,v),C.push({event:g,listeners:k}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&a!==to&&(R=a.relatedTarget||a.fromElement)&&(Ha(R)||R[ja]))break e;if((y||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,y?(R=a.relatedTarget||a.toElement,y=f,R=R?Ha(R):null,R!==null&&(se=U(R),k=R.tag,R!==se||k!==5&&k!==27&&k!==6)&&(R=null)):(y=null,R=f),y!==R)){if(k=Bl,b="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=jl,b="onPointerLeave",d="onPointerEnter",c="pointer"),se=y==null?g:xn(y),p=R==null?g:xn(R),g=new k(b,c+"leave",y,a,v),g.target=se,g.relatedTarget=p,b=null,Ha(v)===f&&(k=new k(d,c+"enter",R,a,v),k.target=p,k.relatedTarget=se,b=k),se=b,y&&R)t:{for(k=ff,d=y,c=R,p=0,b=d;b;b=k(b))p++;b=0;for(var I=c;I;I=k(I))b++;for(;0<p-b;)d=k(d),p--;for(;0<b-p;)c=k(c),b--;for(;p--;){if(d===c||c!==null&&d===c.alternate){k=d;break t}d=k(d),c=k(c)}k=null}else k=null;y!==null&&kd(C,g,y,k,!1),R!==null&&se!==null&&kd(C,se,R,k,!0)}}e:{if(g=f?xn(f):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var Z=Xl;else if(Yl(g))if(Zl)Z=Lm;else{Z=wm;var O=Sm}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?f&&eo(f.elementType)&&(Z=Xl):Z=Am;if(Z&&(Z=Z(e,f))){Kl(C,Z,a,v);break e}O&&O(e,g,f),e==="focusout"&&f&&g.type==="number"&&f.memoizedProps.value!=null&&$r(g,"number",g.value)}switch(O=f?xn(f):window,e){case"focusin":(Yl(O)||O.contentEditable==="true")&&(Ja=O,go=f,zn=null);break;case"focusout":zn=go=Ja=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,rc(C,a,v);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":rc(C,a,v)}var z;if(uo)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Za?Ql(e,a)&&(V="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(V="onCompositionStart");V&&(Hl&&a.locale!=="ko"&&(Za||V!=="onCompositionStart"?V==="onCompositionEnd"&&Za&&(z=Gl()):(Jt=v,ro="value"in Jt?Jt.value:Jt.textContent,Za=!0)),O=Tr(f,V),0<O.length&&(V=new zl(V,e,null,a,v),C.push({event:V,listeners:O}),z?V.data=z:(z=Vl(a),z!==null&&(V.data=z)))),(z=ym?vm(e,a):hm(e,a))&&(V=Tr(f,"onBeforeInput"),0<V.length&&(O=new zl("onBeforeInput","beforeinput",null,a,v),C.push({event:O,listeners:V}),O.data=z)),uf(C,e,f,a,v)}Id(C,t)})}function pi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Tr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=kn(e,a),i!=null&&n.unshift(pi(e,i,r)),i=kn(e,t),i!=null&&n.push(pi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function ff(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,a,n,i){for(var r=t._reactName,o=[];a!==null&&a!==n;){var s=a,l=s.alternate,f=s.stateNode;if(s=s.tag,l!==null&&l===n)break;s!==5&&s!==26&&s!==27||f===null||(l=f,i?(f=kn(a,r),f!=null&&o.unshift(pi(a,f,l))):i||(f=kn(a,r),f!=null&&o.push(pi(a,f,l)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var gf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(gf,`
`).replace(yf,"")}function Md(e,t){return t=Nd(t),Nd(e)===t}function oe(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ya(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ya(e,""+n);break;case"className":Wi(e,"class",n);break;case"tabIndex":Wi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Wi(e,a,n);break;case"style":Ml(e,n,r);break;case"data":if(t!=="object"){Wi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ii(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&oe(e,t,"name",i.name,i,null),oe(e,t,"formEncType",i.formEncType,i,null),oe(e,t,"formMethod",i.formMethod,i,null),oe(e,t,"formTarget",i.formTarget,i,null)):(oe(e,t,"encType",i.encType,i,null),oe(e,t,"method",i.method,i,null),oe(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ii(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=It);break;case"onScroll":n!=null&&_("scroll",e);break;case"onScrollEnd":n!=null&&_("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(m(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ii(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":_("beforetoggle",e),_("toggle",e),Ri(e,"popover",n);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ri(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hp.get(a)||a,Ri(e,a,n))}}function zs(e,t,a,n,i,r){switch(a){case"style":Ml(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(m(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ya(e,n):(typeof n=="number"||typeof n=="bigint")&&Ya(e,""+n);break;case"onScroll":n!=null&&_("scroll",e);break;case"onScrollEnd":n!=null&&_("scrollend",e);break;case"onClick":n!=null&&(e.onclick=It);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!El.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ze]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ri(e,a,n)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_("error",e),_("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:oe(e,t,r,o,a,null)}}i&&oe(e,t,"srcSet",a.srcSet,a,null),n&&oe(e,t,"src",a.src,a,null);return;case"input":_("invalid",e);var s=r=o=i=null,l=null,f=null;for(n in a)if(a.hasOwnProperty(n)){var v=a[n];if(v!=null)switch(n){case"name":i=v;break;case"type":o=v;break;case"checked":l=v;break;case"defaultChecked":f=v;break;case"value":r=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:oe(e,t,n,v,a,null)}}Il(e,r,s,l,f,o,i,!1);return;case"select":_("invalid",e),n=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":r=s;break;case"defaultValue":o=s;break;case"multiple":n=s;default:oe(e,t,i,s,a,null)}t=r,a=o,e.multiple=!!n,t!=null?Va(e,!!n,t,!1):a!=null&&Va(e,!!n,a,!0);return;case"textarea":_("invalid",e),r=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":n=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(m(91));break;default:oe(e,t,o,s,a,null)}kl(e,n,i,r);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":oe(e,t,l,n,a,null));return;case"dialog":_("beforetoggle",e),_("toggle",e),_("cancel",e),_("close",e);break;case"iframe":case"object":_("load",e);break;case"video":case"audio":for(n=0;n<di.length;n++)_(di[n],e);break;case"image":_("error",e),_("load",e);break;case"details":_("toggle",e);break;case"embed":case"source":case"link":_("error",e),_("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in a)if(a.hasOwnProperty(f)&&(n=a[f],n!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:oe(e,t,f,n,a,null)}return;default:if(eo(t)){for(v in a)a.hasOwnProperty(v)&&(n=a[v],n!==void 0&&zs(e,t,v,n,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(n=a[s],n!=null&&oe(e,t,s,n,a,null))}function vf(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,s=null,l=null,f=null,v=null;for(y in a){var C=a[y];if(a.hasOwnProperty(y)&&C!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":l=C;default:n.hasOwnProperty(y)||oe(e,t,y,null,n,C)}}for(var g in n){var y=n[g];if(C=a[g],n.hasOwnProperty(g)&&(y!=null||C!=null))switch(g){case"type":r=y;break;case"name":i=y;break;case"checked":f=y;break;case"defaultChecked":v=y;break;case"value":o=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:y!==C&&oe(e,t,g,y,n,C)}}Jr(e,o,s,l,f,v,r,i);return;case"select":y=o=s=g=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":y=l;default:n.hasOwnProperty(r)||oe(e,t,r,null,n,l)}for(i in n)if(r=n[i],l=a[i],n.hasOwnProperty(i)&&(r!=null||l!=null))switch(i){case"value":g=r;break;case"defaultValue":s=r;break;case"multiple":o=r;default:r!==l&&oe(e,t,i,r,n,l)}t=s,a=o,n=y,g!=null?Va(e,!!a,g,!1):!!n!=!!a&&(t!=null?Va(e,!!a,t,!0):Va(e,!!a,a?[]:"",!1));return;case"textarea":y=g=null;for(s in a)if(i=a[s],a.hasOwnProperty(s)&&i!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:oe(e,t,s,null,n,i)}for(o in n)if(i=n[o],r=a[o],n.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":g=i;break;case"defaultValue":y=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==r&&oe(e,t,o,i,n,r)}xl(e,g,y);return;case"option":for(var R in a)g=a[R],a.hasOwnProperty(R)&&g!=null&&!n.hasOwnProperty(R)&&(R==="selected"?e.selected=!1:oe(e,t,R,null,n,g));for(l in n)g=n[l],y=a[l],n.hasOwnProperty(l)&&g!==y&&(g!=null||y!=null)&&(l==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":oe(e,t,l,g,n,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in a)g=a[k],a.hasOwnProperty(k)&&g!=null&&!n.hasOwnProperty(k)&&oe(e,t,k,null,n,g);for(f in n)if(g=n[f],y=a[f],n.hasOwnProperty(f)&&g!==y&&(g!=null||y!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:oe(e,t,f,g,n,y)}return;default:if(eo(t)){for(var se in a)g=a[se],a.hasOwnProperty(se)&&g!==void 0&&!n.hasOwnProperty(se)&&zs(e,t,se,void 0,n,g);for(v in n)g=n[v],y=a[v],!n.hasOwnProperty(v)||g===y||g===void 0&&y===void 0||zs(e,t,v,g,n,y);return}}for(var d in a)g=a[d],a.hasOwnProperty(d)&&g!=null&&!n.hasOwnProperty(d)&&oe(e,t,d,null,n,g);for(C in n)g=n[C],y=a[C],!n.hasOwnProperty(C)||g===y||g==null&&y==null||oe(e,t,C,g,n,y)}function Ud(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,o=i.initiatorType,s=i.duration;if(r&&s&&Ud(o)){for(o=0,s=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],f=l.startTime;if(f>s)break;var v=l.transferSize,C=l.initiatorType;v&&Ud(C)&&(l=l.responseEnd,o+=v*(l<s?1:(s-f)/(l-f)))}if(--n,t+=8*(r+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var js=null,Hs=null;function Er(e){return e.nodeType===9?e:e.ownerDocument}function qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=null;function bf(){var e=window.event;return e&&e.type==="popstate"?e===Fs?!1:(Fs=e,!0):(Fs=null,!1)}var Pd=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,Sf=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(wf)}:Pd;function wf(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function zd(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),En(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mi(a);for(var r=a.firstChild;r;){var o=r.nextSibling,s=r.nodeName;r[In]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&mi(e.ownerDocument.body);a=i}while(a);En(t)}function jd(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Qs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qs(a),Xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Af(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[In])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function Lf(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gt(e.nextSibling),e===null))return null;return e}function Hd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Vs(e){return e.data==="$?"||e.data==="$~"}function Ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tf(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ks=null;function _d(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Qd(e,t,a){switch(t=Er(a),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xr(e)}var yt=new Map,Vd=new Set;function Dr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vt=T.d;T.d={f:Ef,r:Df,D:Rf,C:Wf,L:Of,m:If,X:kf,S:xf,M:Nf};function Ef(){var e=Vt.f(),t=hr();return e||t}function Df(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?uu(t):Vt.r(e)}var An=typeof document>"u"?null:document;function Yd(e,t,a){var n=An;if(n&&typeof t=="string"&&t){var i=lt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Vd.has(i)||(Vd.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ie(t,"link",e),Te(t),n.head.appendChild(t)))}}function Rf(e){Vt.D(e),Yd("dns-prefetch",e,null)}function Wf(e,t){Vt.C(e,t),Yd("preconnect",e,t)}function Of(e,t,a){Vt.L(e,t,a);var n=An;if(n&&e&&t){var i='link[rel="preload"][as="'+lt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+lt(a.imageSizes)+'"]')):i+='[href="'+lt(e)+'"]';var r=i;switch(t){case"style":r=Ln(e);break;case"script":r=Tn(e)}yt.has(r)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(fi(r))||t==="script"&&n.querySelector(gi(r))||(t=n.createElement("link"),Ie(t,"link",e),Te(t),n.head.appendChild(t)))}}function If(e,t){Vt.m(e,t);var a=An;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+lt(n)+'"][href="'+lt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Tn(e)}if(!yt.has(r)&&(e=N({rel:"modulepreload",href:e},t),yt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gi(r)))return}n=a.createElement("link"),Ie(n,"link",e),Te(n),a.head.appendChild(n)}}}function xf(e,t,a){Vt.S(e,t,a);var n=An;if(n&&e){var i=Fa(n).hoistableStyles,r=Ln(e);t=t||"default";var o=i.get(r);if(!o){var s={loading:0,preload:null};if(o=n.querySelector(fi(r)))s.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(r))&&Xs(e,a);var l=o=n.createElement("link");Te(l),Ie(l,"link",e),l._p=new Promise(function(f,v){l.onload=f,l.onerror=v}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Rr(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(r,o)}}}function kf(e,t){Vt.X(e,t);var a=An;if(a&&e){var n=Fa(a).hoistableScripts,i=Tn(e),r=n.get(i);r||(r=a.querySelector(gi(i)),r||(e=N({src:e,async:!0},t),(t=yt.get(i))&&Zs(e,t),r=a.createElement("script"),Te(r),Ie(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Nf(e,t){Vt.M(e,t);var a=An;if(a&&e){var n=Fa(a).hoistableScripts,i=Tn(e),r=n.get(i);r||(r=a.querySelector(gi(i)),r||(e=N({src:e,async:!0,type:"module"},t),(t=yt.get(i))&&Zs(e,t),r=a.createElement("script"),Te(r),Ie(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Kd(e,t,a,n){var i=(i=j.current)?Dr(i):null;if(!i)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ln(a.href),a=Fa(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ln(a.href);var r=Fa(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(fi(e)))&&!r._p&&(o.instance=r,o.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),r||Mf(i,e,a,o.state))),t&&n===null)throw Error(m(528,""));return o}if(t&&n!==null)throw Error(m(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tn(a),a=Fa(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Ln(e){return'href="'+lt(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function Xd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Mf(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ie(t,"link",a),Te(t),e.head.appendChild(t))}function Tn(e){return'[src="'+lt(e)+'"]'}function gi(e){return"script[async]"+e}function Zd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+lt(a.href)+'"]');if(n)return t.instance=n,Te(n),n;var i=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Te(n),Ie(n,"style",i),Rr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Ln(a.href);var r=e.querySelector(fi(i));if(r)return t.state.loading|=4,t.instance=r,Te(r),r;n=Xd(a),(i=yt.get(i))&&Xs(n,i),r=(e.ownerDocument||e).createElement("link"),Te(r);var o=r;return o._p=new Promise(function(s,l){o.onload=s,o.onerror=l}),Ie(r,"link",n),t.state.loading|=4,Rr(r,a.precedence,e),t.instance=r;case"script":return r=Tn(a.src),(i=e.querySelector(gi(r)))?(t.instance=i,Te(i),i):(n=a,(i=yt.get(r))&&(n=N({},a),Zs(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Te(i),Ie(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Rr(n,a.precedence,e));return t.instance}function Rr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,o=0;o<n.length;o++){var s=n[o];if(s.dataset.precedence===t)r=s;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wr=null;function Jd(e,t,a){if(Wr===null){var n=new Map,i=Wr=new Map;i.set(a,n)}else i=Wr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[In]||r[De]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var s=n.get(o);s?s.push(r):n.set(o,[r])}}return n}function $d(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Uf(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ep(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qf(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Ln(n.href),r=t.querySelector(fi(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Or.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Te(r);return}r=t.ownerDocument||t,n=Xd(n),(i=yt.get(i))&&Xs(n,i),r=r.createElement("link"),Te(r);var o=r;o._p=new Promise(function(s,l){o.onload=s,o.onerror=l}),Ie(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Or.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Js=0;function Gf(e,t){return e.stylesheets&&e.count===0&&xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Js===0&&(Js=62500*hf());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Js?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Or(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ir=null;function xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ir=new Map,t.forEach(Pf,e),Ir=null,Or.call(e))}function Pf(e,t){if(!(t.state.loading&4)){var a=Ir.get(e);if(a)var n=a.get(null);else{a=new Map,Ir.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,i),a.set(o,i),this.count++,n=Or.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var yi={$$typeof:xe,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function Bf(e,t,a,n,i,r,o,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.hiddenUpdates=Qr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function tp(e,t,a,n,i,r,o,s,l,f,v,C){return e=new Bf(e,t,a,o,l,f,v,C,s),t=1,r===!0&&(t|=24),r=et(3,null,null,t),e.current=r,r.stateNode=e,t=Io(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Mo(r),e}function ap(e){return e?(e=tn,e):tn}function np(e,t,a,n,i,r){i=ap(i),n.context===null?n.context=i:n.pendingContext=i,n=ia(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ra(e,n,t),a!==null&&(Ve(a,e,t),Yn(a,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $s(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function rp(e){if(e.tag===13||e.tag===31){var t=Ra(e,67108864);t!==null&&Ve(t,e,67108864),$s(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=rt();t=Vr(t);var a=Ra(e,t);a!==null&&Ve(a,e,t),$s(e,t)}}var kr=!0;function zf(e,t,a,n){var i=h.T;h.T=null;var r=T.p;try{T.p=2,el(e,t,a,n)}finally{T.p=r,h.T=i}}function jf(e,t,a,n){var i=h.T;h.T=null;var r=T.p;try{T.p=8,el(e,t,a,n)}finally{T.p=r,h.T=i}}function el(e,t,a,n){if(kr){var i=tl(n);if(i===null)Bs(e,t,n,Nr,a),lp(e,n);else if(_f(i,e,t,a,n))n.stopPropagation();else if(lp(e,n),t&4&&-1<Hf.indexOf(e)){for(;i!==null;){var r=_a(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Aa(r.pendingLanes);if(o!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-Je(o);s.entanglements[1]|=l,o&=~l}Dt(r),($&6)===0&&(yr=Xe()+500,ui(0))}}break;case 31:case 13:s=Ra(r,2),s!==null&&Ve(s,r,2),hr(),$s(r,2)}if(r=tl(n),r===null&&Bs(e,t,n,Nr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else Bs(e,t,n,null,a)}}function tl(e){return e=ao(e),al(e)}var Nr=null;function al(e){if(Nr=null,e=Ha(e),e!==null){var t=U(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=X(t),e!==null)return e;e=null}else if(a===31){if(e=ue(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dp()){case gl:return 2;case yl:return 8;case Ai:case Rp:return 32;case vl:return 268435456;default:return 32}default:return 32}}var nl=!1,ya=null,va=null,ha=null,vi=new Map,hi=new Map,ba=[],Hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lp(e,t){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function bi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=_a(t),t!==null&&rp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _f(e,t,a,n,i){switch(t){case"focusin":return ya=bi(ya,e,t,a,n,i),!0;case"dragenter":return va=bi(va,e,t,a,n,i),!0;case"mouseover":return ha=bi(ha,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return vi.set(r,bi(vi.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,hi.set(r,bi(hi.get(r)||null,e,t,a,n,i)),!0}return!1}function cp(e){var t=Ha(e.target);if(t!==null){var a=U(t);if(a!==null){if(t=a.tag,t===13){if(t=X(a),t!==null){e.blockedOn=t,Al(e.priority,function(){op(a)});return}}else if(t===31){if(t=ue(a),t!==null){e.blockedOn=t,Al(e.priority,function(){op(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tl(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);to=n,a.target.dispatchEvent(n),to=null}else return t=_a(a),t!==null&&rp(t),e.blockedOn=a,!1;t.shift()}return!0}function up(e,t,a){Mr(e)&&a.delete(t)}function Ff(){nl=!1,ya!==null&&Mr(ya)&&(ya=null),va!==null&&Mr(va)&&(va=null),ha!==null&&Mr(ha)&&(ha=null),vi.forEach(up),hi.forEach(up)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,nl||(nl=!0,L.unstable_scheduleCallback(L.unstable_NormalPriority,Ff)))}var qr=null;function dp(e){qr!==e&&(qr=e,L.unstable_scheduleCallback(L.unstable_NormalPriority,function(){qr===e&&(qr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(al(n||a)===null)continue;break}var r=_a(a);r!==null&&(e.splice(t,3),t-=3,ts(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function En(e){function t(l){return Ur(l,e)}ya!==null&&Ur(ya,e),va!==null&&Ur(va,e),ha!==null&&Ur(ha,e),vi.forEach(t),hi.forEach(t);for(var a=0;a<ba.length;a++){var n=ba[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)cp(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],o=i[ze]||null;if(typeof r=="function")o||dp(a);else if(o){var s=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[ze]||null)s=o.formAction;else if(al(i)!==null)continue}else s=o.action;typeof s=="function"?a[n+1]=s:(a.splice(n,3),n-=3),dp(a)}}}function pp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function il(e){this._internalRoot=e}Gr.prototype.render=il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var a=t.current,n=rt();np(a,n,e,t,null,null)},Gr.prototype.unmount=il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),hr(),t[ja]=null}};function Gr(e){this._internalRoot=e}Gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=wl();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ba.length&&t!==0&&t<ba[a].priority;a++);ba.splice(a,0,e),a===0&&cp(e)}};var mp=F.version;if(mp!=="19.2.4")throw Error(m(527,mp,"19.2.4"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=A(t),e=e!==null?ee(e):null,e=e===null?null:e.stateNode,e};var Qf={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:h,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{Rn=Pr.inject(Qf),Ze=Pr}catch{}}return Si.createRoot=function(e,t){if(!x(e))throw Error(m(299));var a=!1,n="",i=Cu,r=Su,o=wu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tp(e,1,!1,null,null,a,n,null,i,r,o,pp),e[ja]=t.current,Ps(e),new il(t)},Si.hydrateRoot=function(e,t,a){if(!x(e))throw Error(m(299));var n=!1,i="",r=Cu,o=Su,s=wu,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),t=tp(e,1,!0,t,a??null,n,i,l,r,o,s,pp),t.context=ap(null),a=t.current,n=rt(),n=Vr(n),i=ia(n),i.callback=null,ra(a,i,n),a=n,t.current.lanes=a,On(t,a),Dt(t),e[ja]=t.current,Ps(e),new Gr(t)},Si.version="19.2.4",Si}var Ap;function ag(){if(Ap)return sl.exports;Ap=1;function L(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L)}catch(F){console.error(F)}}return L(),sl.exports=tg(),sl.exports}var ng=ag();function ig({subjects:L,selectedSubject:F,selectedTopic:q,onSubjectSelect:m,onTopicSelect:x,isOpen:U,onToggle:X}){const ue=L.find(E=>E.id===F);return S.jsx(S.Fragment,{children:S.jsxs("nav",{className:`flex flex-col h-screen bg-white shadow-2xl flex-shrink-0 border-r-2 border-indigo-100 transition-all duration-300 ease-in-out ${U?"w-80":"w-24"}`,children:[S.jsx("div",{className:"px-6 py-8 border-b-2 border-indigo-100 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex-shrink-0",children:S.jsxs("div",{className:"flex items-center justify-between",children:[U&&S.jsxs("div",{children:[S.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"📚"}),S.jsx("p",{className:"text-base font-semibold mt-3 opacity-90",children:"Interview Prep Guide"})]}),!U&&S.jsx("h1",{className:"text-3xl font-bold",children:"📚"}),S.jsx("button",{onClick:X,className:"p-2 hover:bg-white/20 rounded-lg transition-colors",title:U?"Collapse":"Expand",children:U?S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M15.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 0z"})}):S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M4.293 10.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414 0z"})})})]})}),S.jsxs("div",{className:"flex flex-1 overflow-hidden gap-0",children:[S.jsxs("div",{className:"flex-1 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white",children:[S.jsxs("div",{className:"px-5 py-4 text-xs font-bold uppercase tracking-widest text-indigo-600 bg-white border-b border-gray-200 sticky top-0",children:[U&&"Subjects",!U&&"📋"]}),S.jsx("ul",{className:"space-y-3 p-4",children:L.map(E=>S.jsx("li",{children:S.jsx("button",{className:`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${F===E.id?"bg-indigo-600 text-white shadow-lg scale-105":"text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"}`,onClick:()=>m(E.id),title:E.name,children:U?E.name:E.name.charAt(0).toUpperCase()})},E.id))})]}),ue&&U&&S.jsxs("div",{className:"w-40 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white",children:[S.jsx("div",{className:"px-5 py-4 text-xs font-bold uppercase tracking-widest text-purple-600 bg-white border-b border-gray-200 sticky top-0",children:"Topics"}),S.jsx("ul",{className:"space-y-3 p-4",children:ue.topics.map(E=>S.jsx("li",{children:S.jsxs("button",{className:`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between ${q===E.id?"bg-purple-600 text-white shadow-lg scale-105":"text-gray-700 hover:bg-purple-100 hover:text-purple-700"}`,onClick:()=>x(E.id),children:[S.jsx("span",{children:E.name}),S.jsx("span",{className:`text-xs font-bold px-3 py-1 rounded-full ml-2 ${q===E.id?"bg-white/30 text-white":"bg-indigo-100 text-indigo-700"}`,children:E.questions.length})]})},E.id))})]})]})]})})}function rg({snippet:L}){const[F,q]=Yt.useState(!1),m=()=>{navigator.clipboard.writeText(L.code),q(!0),setTimeout(()=>q(!1),2e3)};return S.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all",children:[S.jsxs("div",{className:"flex justify-between items-center px-5 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-gray-700",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),S.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),S.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),S.jsx("span",{className:"ml-3 text-indigo-400 text-xs font-bold uppercase tracking-widest",children:L.language})]}),S.jsx("button",{onClick:m,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${F?"bg-green-600 text-white":"bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"}`,title:"Copy code",children:F?S.jsxs(S.Fragment,{children:[S.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Copied!"]}):S.jsxs(S.Fragment,{children:[S.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Copy"]})})]}),S.jsx("pre",{className:"p-5 text-gray-300 text-sm overflow-x-auto font-mono leading-relaxed bg-gray-900",children:S.jsx("code",{className:"text-gray-100",children:L.code})})]})}function og({diagram:L}){return S.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden my-4",children:[S.jsx("div",{className:"px-4 py-3 bg-gray-100 border-b border-gray-200",children:S.jsx("h4",{className:"text-sm font-semibold text-purple-600 uppercase tracking-wide",children:L.title})}),S.jsx("div",{className:"p-6 bg-gray-50 flex justify-center",children:S.jsx("img",{src:L.imageUrl,alt:L.title,className:"max-w-full h-auto rounded-lg max-h-96 object-contain"})}),L.description&&S.jsx("div",{className:"px-4 py-3 bg-white border-t border-gray-200",children:S.jsx("p",{className:"text-sm text-gray-700 leading-relaxed",children:L.description})})]})}function sg({question:L}){const[F,q]=Yt.useState(!1);return S.jsxs("div",{className:"bg-white border-2 border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all duration-300",children:[S.jsxs("div",{className:"flex items-center justify-between gap-4 cursor-pointer px-6 py-4",onClick:()=>q(!F),children:[S.jsx("p",{className:"text-lg font-bold text-gray-900 leading-relaxed flex-1",children:L.question}),S.jsx("div",{className:"flex-shrink-0 text-gray-400 hover:text-indigo-600 transition-colors",children:F?S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})}):S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})})]}),F&&S.jsxs("div",{className:"mt-8 pt-8 px-6 pb-6 border-t-2 border-gray-100 space-y-6 animate-in fade-in duration-300",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"inline-block px-3 py-1 bg-green-100 rounded-full text-xs font-bold text-green-700 mb-3",children:"ANSWER"}),S.jsx("p",{className:"text-gray-800 leading-relaxed text-base",children:L.answer})]}),L.diagrams&&L.diagrams.length>0&&S.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-100",children:[S.jsxs("h4",{className:"font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2",children:[S.jsx("div",{className:"w-2 h-2 bg-purple-600 rounded-full"}),"Diagrams"]}),S.jsx("div",{className:"space-y-4",children:L.diagrams.map((m,x)=>S.jsx(og,{diagram:m},x))})]}),L.codeSnippets&&L.codeSnippets.length>0&&S.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-100",children:[S.jsxs("h4",{className:"font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2",children:[S.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"}),"Code Examples"]}),S.jsx("div",{className:"space-y-3",children:L.codeSnippets.map((m,x)=>S.jsx(rg,{snippet:m},x))})]})]})]})}function lg({subjects:L,selectedSubject:F,selectedTopic:q}){const m=L.find(X=>X.id===F),x=m?.topics.find(X=>X.id===q),U=Yt.useRef(null);return Yt.useEffect(()=>{U.current?.scrollTo(0,0)},[q]),F?q?x?S.jsx("div",{ref:U,className:"content-area flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-12 md:p-16",children:S.jsxs("div",{className:"max-w-5xl mx-auto",children:[S.jsxs("nav",{className:"flex items-center gap-3 mb-8 text-sm",children:[S.jsx("span",{className:"px-4 py-2 bg-white rounded-full font-semibold text-indigo-600 shadow-sm border-2 border-indigo-100",children:m?.name}),S.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),S.jsx("span",{className:"px-4 py-2 bg-white rounded-full font-semibold text-purple-600 shadow-sm border-2 border-purple-100",children:x.name})]}),S.jsxs("div",{className:"mb-10 space-y-4",children:[S.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:x.name}),S.jsx("div",{className:"flex items-center gap-4",children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-sm",children:x.questions.length}),S.jsxs("span",{className:"text-gray-700 font-semibold",children:["question",x.questions.length!==1?"s":""]})]})})]}),S.jsxs("div",{className:"mb-10 space-y-2",children:[S.jsx("div",{className:"h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner",children:S.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500",style:{width:`${Math.min(x.questions.length/15*100,100)}%`}})}),S.jsx("p",{className:"text-sm text-gray-500",children:"Learning path progress"})]}),S.jsx("div",{className:"grid gap-8",children:x.questions.map((X,ue)=>S.jsx("div",{className:"transform transition-all duration-300 hover:scale-[1.01]",children:S.jsxs("div",{className:"flex gap-4",children:[S.jsx("div",{className:"flex-shrink-0",children:S.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg",children:ue+1})}),S.jsx("div",{className:"flex-1",children:S.jsx(sg,{question:X})})]})},X.id))})]})}):S.jsx("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:S.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"Topic Not Found"})}):S.jsxs("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:[S.jsx("div",{className:"text-6xl mb-4",children:"👉"}),S.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3",children:"Select a Topic"}),S.jsx("p",{className:"text-gray-600 text-lg",children:"Choose a topic to view questions and answers."})]}):S.jsxs("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:[S.jsx("div",{className:"text-6xl mb-4",children:"📚"}),S.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3",children:"Welcome to Interview Prep"}),S.jsx("p",{className:"text-gray-600 text-lg",children:"Choose a subject from the sidebar to get started."})]})}const cg={id:"js-basics",name:"Basics",questions:[{id:"q1",question:"What are the different data types in JavaScript?",answer:"JavaScript has 8 data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt, and Object. Primitive types are immutable, while objects are mutable reference types.",codeSnippets:[{language:"javascript",code:`// Primitive types
const num = 42;
const str = "Hello";
const bool = true;
const sym = Symbol("id");
const bigInt = 123n;
const nul = null;
const undef = undefined;

// Non-primitive (Reference types)
const obj = { name: "John" };
const arr = [1, 2, 3];
const func = () => {}; // Functions are objects`}]},{id:"q2",question:"What is the difference between var, let, and const?",answer:"var is function-scoped and hoisted. let and const are block-scoped and not hoisted. const cannot be reassigned, but object properties can be modified.",codeSnippets:[{language:"javascript",code:`// var - function scoped, hoisted
function test() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1
}

// let - block scoped, temporal dead zone
function test2() {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 2;
}

// const - block scoped, cannot reassign
const z = 3;
z = 4; // TypeError: Assignment to constant variable
const obj = { a: 1 };
obj.a = 2; // OK - object properties can change`}]},{id:"q3",question:"What is hoisting in JavaScript?",answer:"Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized.",codeSnippets:[{language:"javascript",code:`// var hoisting
console.log(x); // undefined (hoisted but not initialized)
var x = 5;

// let/const hoisting with temporal dead zone
console.log(y); // ReferenceError
let y = 10;

// Function hoisting
sayHi(); // "Hello" - function works before declaration
function sayHi() {
  console.log("Hello");
}

// Function expression not hoisted
greet(); // TypeError: greet is not a function
const greet = () => console.log("Hi");`}]},{id:"q4",question:"What is the difference between == and ===?",answer:"== performs type coercion before comparison, while === compares both value and type without coercion. Use === in production code to avoid unexpected results.",codeSnippets:[{language:"javascript",code:`// == (loose equality) - type coercion
0 == false;        // true
"0" == 0;          // true
null == undefined; // true
"5" == 5;          // true

// === (strict equality) - no type coercion
0 === false;       // false
"0" === 0;         // false
null === undefined;// false
"5" === 5;         // false

// Best practice: Always use ===
if (value === null) { }
if (value === undefined) { }
if (value === true) { }`}]},{id:"q5",question:"What is NaN and how to check for it?",answer:"NaN (Not-a-Number) is a special value representing an undefined or unrepresentable mathematical result. Use Number.isNaN() or Object.is() for checking, not the global isNaN().",codeSnippets:[{language:"javascript",code:`// NaN creation
const result = parseInt("hello"); // NaN
const calc = 0 / 0;              // NaN

// WRONG way to check
isNaN("hello");  // true (coerces to number first)
NaN === NaN;     // false (NaN is not equal to itself)

// CORRECT ways to check
Number.isNaN(result);   // true
Object.is(result, NaN); // true
typeof result === 'number' && isNaN(result);

// Safe arithmetic
const num = 0 / 0;
if (Number.isNaN(num)) {
  console.log("Invalid calculation");
}`}]}]},ug={id:"js-async",name:"Asynchronous Programming",questions:[{id:"q6",question:"What is a Promise in JavaScript?",answer:"A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, or rejected.",codeSnippets:[{language:"javascript",code:`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done"));`}]},{id:"q7",question:"What is async/await?",answer:"Async/await is syntactic sugar over promises that allows you to write asynchronous code that looks synchronous. async functions always return a Promise.",codeSnippets:[{language:"javascript",code:`// async/await example
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) throw new Error('Not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
  }
}

// Using async function
const user = await fetchUserData(1);
console.log(user);

// Parallel requests
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json())
]);`}]},{id:"q8",question:"What is the difference between Promise.all, Promise.race, and Promise.allSettled?",answer:"Promise.all waits for all promises to resolve or any to reject. Promise.race returns the first settled promise. Promise.allSettled waits for all to settle regardless of outcome.",codeSnippets:[{language:"javascript",code:`const p1 = Promise.resolve(1);
const p2 = new Promise(r => setTimeout(() => r(2), 100));
const p3 = Promise.reject("error");

// Promise.all - rejects if any promise rejects
Promise.all([p1, p2])
  .then(results => console.log(results)) // [1, 2]
  .catch(err => console.log("Error:", err));

// Promise.race - returns first settled
Promise.race([p1, p2])
  .then(result => console.log(result)); // 1

// Promise.allSettled - waits for all
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'rejected', reason: 'error' }
  // ]`}]},{id:"q9",question:"What is the event loop in JavaScript?",answer:"The event loop is JavaScript's mechanism for handling asynchronous operations. It monitors the call stack and callback queue, executing callbacks when the stack is empty.",codeSnippets:[{language:"javascript",code:`console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve()
  .then(() => console.log('Promise'));

console.log('End');

// Output:
// Start
// End
// Promise (microtask queue runs before macrotask queue)
// Timeout

// Macrotasks: setTimeout, setInterval, setImmediate
// Microtasks: Promise, MutationObserver, queueMicrotask`}]},{id:"q10",question:"What are callbacks and what is callback hell?",answer:"Callbacks are functions passed as arguments to other functions. Callback hell (pyramid of doom) occurs with deeply nested callbacks, making code hard to read and maintain.",codeSnippets:[{language:"javascript",code:`// Callback Hell - hard to read and maintain
getData(id, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    getUser(data.userId, function(err, user) {
      if (err) {
        console.error(err);
      } else {
        getPosts(user.id, function(err, posts) {
          if (err) {
            console.error(err);
          } else {
            console.log(posts);
          }
        });
      }
    });
  }
});

// Better approach with Promises
getData(id)
  .then(data => getUser(data.userId))
  .then(user => getPosts(user.id))
  .then(posts => console.log(posts))
  .catch(err => console.error(err));

// Best approach with async/await
async function displayPosts(id) {
  try {
    const data = await getData(id);
    const user = await getUser(data.userId);
    const posts = await getPosts(user.id);
    console.log(posts);
  } catch (err) {
    console.error(err);
  }
}`}]}]},dg={id:"js-closures",name:"Closures & Scope",questions:[{id:"q23",question:"What is a closure in JavaScript?",answer:"A closure is a function that has access to variables in its outer scope even after the outer function has returned. Functions form closures around the data they need.",codeSnippets:[{language:"javascript",code:`// Simple closure
function outer() {
  const message = 'Hello'; // Variable in outer scope

  function inner() {
    console.log(message); // inner has access to message
  }

  return inner;
}

const fn = outer();
fn(); // 'Hello' - closure retains access to message

// Practical example: Counter
function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1

// count is private and only accessible through returned methods
// This is data encapsulation through closure

// Closure in loops
const functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(() => console.log(i));
}
functions[0](); // 3 (var is function-scoped)
functions[1](); // 3
functions[2](); // 3

// Fix with closure
const functions2 = [];
for (let i = 0; i < 3; i++) {
  functions2.push(() => console.log(i));
}
functions2[0](); // 0 (let is block-scoped)
functions2[1](); // 1
functions2[2](); // 2`}]},{id:"q24",question:"What is scope and how many types of scope are there?",answer:"Scope determines where variables are accessible. Types: Global scope (whole program), Function scope (inside function), Block scope (inside {}, for, if), and Lexical scope (inner functions access outer variables).",codeSnippets:[{language:"javascript",code:`// Global scope
const global = 'I am global';

function functionScope() {
  // Function scope
  const local = 'I am local';
  
  if (true) {
    // Block scope
    const blockLocal = 'I am block scoped';
    console.log(blockLocal); // Accessible
  }
  
  console.log(blockLocal); // ReferenceError - not accessible
  console.log(global); // Accessible - lexical scope
}

console.log(local); // ReferenceError - not accessible outside function

// Lexical scope example
function outer() {
  const x = 10;

  function middle() {
    const y = 20;

    function inner() {
      const z = 30;
      console.log(x, y, z); // 10 20 30 - access parent scopes
    }

    inner();
  }

  middle();
}

// Scope chain - JavaScript looks up the scope chain
// inner -> middle -> outer -> global`}]}]},pg={id:"js-this",name:"'this' Binding & Objects",questions:[{id:"q25",question:"What is 'this' in JavaScript and how is it determined?",answer:"'this' is a keyword that refers to the object context. Its value is determined by HOW a function is called: as method (object), function, constructor, or with call/apply/bind.",codeSnippets:[{language:"javascript",code:`// 1. Method call - 'this' is the object
const obj = {
  name: 'Alice',
  greet() {
    console.log('Hello, ' + this.name);
  }
};
obj.greet(); // 'Hello, Alice'

// 2. Regular function call - 'this' is undefined (strict) or global
function sayName() {
  console.log(this.name);
}
sayName(); // undefined or window.name

// 3. Constructor call - 'this' is the new object
function Person(name) {
  this.name = name;
}
const person = new Person('Bob');
console.log(person.name); // 'Bob'

// 4. call/apply/bind - explicitly set 'this'
function introduce() {
  console.log('I am ' + this.name);
}
const user = { name: 'Charlie' };
introduce.call(user); // 'I am Charlie'
introduce.apply(user); // 'I am Charlie'

const bound = introduce.bind(user);
bound(); // 'I am Charlie'

// 5. Arrow function - 'this' from enclosing scope
const team = {
  name: 'Dev Team',
  members: ['Alice', 'Bob'],
  list() {
    this.members.forEach(member => {
      console.log(this.name + ': ' + member); // 'this' is team
    });
  }
};
team.list();`}]},{id:"q26",question:"What is the difference between call, apply, and bind?",answer:"call and apply invoke the function immediately and set 'this'. call takes arguments separately, apply takes an array. bind returns a new function with 'this' set but doesn't invoke it.",codeSnippets:[{language:"javascript",code:`function introduce(greeting, punctuation) {
  return greeting + ', ' + this.name + punctuation;
}

const person = { name: 'Alice' };

// call - invoke immediately, args separated
introduce.call(person, 'Hello', '!');
// 'Hello, Alice!'

// apply - invoke immediately, args in array
introduce.apply(person, ['Hi', '?']);
// 'Hi, Alice?'

// bind - return new function, doesn't invoke
const boundIntroduce = introduce.bind(person, 'Hey');
boundIntroduce('!!!');
// 'Hey, Alice!!!'

// Real-world example: Borrowing methods
const array = [1, 2, 3];
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// Borrow Array.prototype.join
Array.prototype.join.call(arrayLike, '-');
// 'a-b-c'

// Borrow Array.prototype.forEach
Array.prototype.forEach.call(arrayLike, item => console.log(item));`}]}]},mg={id:"js-prototypes",name:"Prototypes & Inheritance",questions:[{id:"q27",question:"What are prototypes in JavaScript?",answer:"Prototypes are objects that other objects can inherit properties and methods from. Every object has a prototype ([[Prototype]]). Objects delegate to their prototype when a property is not found.",codeSnippets:[{language:"javascript",code:`// Prototype chain
const person = {
  greet() {
    console.log('Hello');
  }
};

const alice = Object.create(person);
alice.name = 'Alice';

alice.greet(); // 'Hello' - inherited from prototype

// Constructor function and prototype
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' speaks');
};

const dog = new Animal('Dog');
dog.speak(); // 'Dog speaks'

// Prototype chain lookup
console.log(dog.hasOwnProperty('name')); // true - own property
console.log(dog.hasOwnProperty('speak')); // false - on prototype
console.log('speak' in dog); // true - found in chain

// Check prototype
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
console.log(dog instanceof Animal); // true

// Modify prototype
Animal.prototype.move = function() {
  console.log(this.name + ' moves');
};
dog.move(); // 'Dog moves' - new method available`}]},{id:"q28",question:"What is the difference between inheritance with prototypes and classes?",answer:"Prototypal inheritance uses prototype objects and Object.create. Class inheritance uses the class syntax (ES6), which is syntactic sugar over prototypal inheritance.",codeSnippets:[{language:"javascript",code:`// Prototypal Inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' speaks');
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log(this.name + ' barks');
};

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // 'Rex speaks'
dog.bark();  // 'Rex barks'

// Class Inheritance (ES6 - much cleaner!)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' speaks');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + ' barks');
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // 'Rex speaks'
dog.bark();  // 'Rex barks'

// Both are equivalent - classes are syntactic sugar over prototypes`}]}]},fg={id:"javascript",name:"JavaScript",topics:[cg,ug,dg,pg,mg]},gg={id:"react-basics",name:"Basics",questions:[{id:"q11",question:"What are React hooks?",answer:"Hooks are functions that let you use state and other React features in functional components. Common hooks are useState, useEffect, useContext, and useReducer.",codeSnippets:[{language:"jsx",code:`import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
    return () => {
      // Cleanup
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}]},{id:"q12",question:"What is the virtual DOM?",answer:"The virtual DOM is a lightweight JavaScript representation of the real DOM. React compares virtual DOM trees to identify changes and updates only the necessary parts in the real DOM.",codeSnippets:[{language:"javascript",code:`// Simplified virtual DOM concept
const vdom = {
  type: 'div',
  props: { className: 'container' },
  children: [
    {
      type: 'h1',
      props: {},
      children: 'Hello World'
    }
  ]
};

// React's reconciliation algorithm:
// 1. Create new VDOM
// 2. Compare with old VDOM (diffing)
// 3. Identify changes
// 4. Update only changed parts in real DOM (patching)
// This makes updates efficient!`}],diagrams:[{title:"Virtual DOM Process",imageUrl:"https://via.placeholder.com/500x300?text=Virtual+DOM+Flow",description:"Shows how Virtual DOM compares changes and updates the real DOM"}]},{id:"q13",question:"What is JSX?",answer:"JSX is a syntax extension to JavaScript that looks like HTML. It gets compiled to JavaScript function calls (React.createElement) by Babel.",codeSnippets:[{language:"jsx",code:`// JSX syntax
const element = (
  <div className="greeting">
    <h1>Hello {name}</h1>
    <p>Welcome to React</p>
  </div>
);

// Compiled to:
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello ', name),
  React.createElement('p', null, 'Welcome to React')
);

// JSX is NOT valid JavaScript
// It needs to be transpiled by Babel`}]},{id:"q14",question:"What is the difference between state and props?",answer:"Props are read-only inputs passed from parent to child components. State is mutable data managed within a component and can be changed using setState or hooks.",codeSnippets:[{language:"jsx",code:`// Parent component
function App() {
  const [message, setMessage] = useState('Hello');

  return (
    <>
      <Greeting message={message} name="John" />
      <button onClick={() => setMessage('Hi')}>
        Update Message
      </button>
    </>
  );
}

// Child component
function Greeting({ message, name }) {
  // Props are read-only
  // message and name cannot be changed here
  
  return (
    <div>
      <p>{message}, {name}!</p>
      {/* This would cause error: */}
      {/* message = 'Goodbye'; // ❌ Wrong! */}
    </div>
  );
}

// Props are passed down
// State is local to component
// Use props for parent-to-child communication`}]},{id:"q15",question:"What are the different lifecycle methods in class components?",answer:"Lifecycle methods are special methods that run at different stages: mounting (constructor, render, componentDidMount), updating (componentDidUpdate), and unmounting (componentWillUnmount).",codeSnippets:[{language:"jsx",code:`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // Mounting phase
  }

  componentDidMount() {
    // Called after component mounts
    // Good place for API calls
  }

  componentDidUpdate(prevProps, prevState) {
    // Called after update
    // Runs on every state/prop change
  }

  componentWillUnmount() {
    // Called before component removes
    // Good place for cleanup
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Return true to render, false to skip
    return nextState.count !== this.state.count;
  }

  render() {
    return <div>Count: {this.state.count}</div>;
  }
}

// Modern approach with hooks:
function MyComponent() {
  useEffect(() => {
    // componentDidMount & componentDidUpdate
    return () => {
      // componentWillUnmount
    };
  }, []);
}`}]}]},yg={id:"react-hooks",name:"Hooks Deep Dive",questions:[{id:"q16",question:"What is the useState hook and how does it work?",answer:"useState is a React hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.",codeSnippets:[{language:"jsx",code:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => {
    setCount(count + 1); // Simple update
  };

  const decrementIfEven = () => {
    setCount(prevCount => {
      // Use previous state when new state depends on old state
      if (prevCount % 2 === 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <button onClick={increment}>+</button>
      <button onClick={decrementIfEven}>- (if even)</button>
    </div>
  );
}`}]},{id:"q17",question:"What is the useEffect hook?",answer:"useEffect is a hook that performs side effects (data fetching, subscriptions, DOM updates). It runs after render and accepts a dependency array to control when it runs.",codeSnippets:[{language:"jsx",code:`import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs after every render
  useEffect(() => {
    console.log('Runs after every render');
  });

  // Runs only on mount (empty dependency array)
  useEffect(() => {
    console.log('Runs once on mount');
    
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);

  // Runs when dependencies change
  useEffect(() => {
    console.log('Runs when id changes');
    fetchUserData(id);
  }, [id]); // Dependency array

  // Cleanup function - runs before unmount or before re-running effect
  useEffect(() => {
    const subscription = subscribe();
    
    return () => {
      // Cleanup
      subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}`}]},{id:"q18",question:"What is the useContext hook?",answer:"useContext allows you to consume context values without prop drilling. It takes a context object and returns the current context value.",codeSnippets:[{language:"jsx",code:`import { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consume context - without prop drilling
function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ 
        background: theme === 'light' ? '#fff' : '#222',
        color: theme === 'light' ? '#222' : '#fff'
      }}
    >
      Toggle Theme
    </button>
  );
}

// App
function App() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}`}]},{id:"q19",question:"What is the useReducer hook?",answer:"useReducer is a hook for managing complex state logic. It takes a reducer function and initial state, returning current state and a dispatch function.",codeSnippets:[{language:"jsx",code:`import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
}

// useReducer is better than useState when:
// - State has multiple sub-values
// - Next state depends on previous state
// - You have complex state transitions`}]},{id:"q20",question:"What are custom hooks?",answer:"Custom hooks are JavaScript functions that use other hooks. They let you extract component logic into reusable functions. Their names must start with 'use'.",codeSnippets:[{language:"jsx",code:`// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Using custom hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return <div>{user.name}</div>;
}

// Another custom hook for form handling
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
}`}]}]},vg={id:"react-performance",name:"Performance Optimization",questions:[{id:"q21",question:"What is React.memo and when should you use it?",answer:"React.memo is a higher-order component that memoizes a component. It prevents re-renders if props haven't changed. Use it for expensive components that receive same props frequently.",codeSnippets:[{language:"jsx",code:`// Without memo - re-renders even if props are same
function Button({ label, onClick }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{label}</button>;
}

// With memo - only re-renders if props change
const MemoButton = React.memo(function Button({ label, onClick }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{label}</button>;
});

// Parent component
function App() {
  const [count, setCount] = useState(0);
  
  // Without memo, MemoButton re-renders even though its props didn't change
  // With memo, it doesn't re-render
  return (
    <>
      <p>Count: {count}</p>
      <MemoButton label="Click me" onClick={() => setCount(count + 1)} />
    </>
  );
}

// Custom comparison function
const ExpensiveComponent = React.memo(
  function Component({ data, count }) {
    return <div>{data.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (don't re-render)
    // Return false if props are different (re-render)
    return prevProps.data.id === nextProps.data.id;
  }
);`}]},{id:"q22",question:"What is useMemo and useCallback?",answer:"useMemo memoizes expensive calculations. useCallback memoizes function references. Both take a dependency array and recompute only when dependencies change.",codeSnippets:[{language:"jsx",code:`import { useMemo, useCallback } from 'react';

function ExpensiveComponent({ items }) {
  // useMemo - memoize expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value');
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]); // Only recompute when items change

  // useCallback - memoize function reference
  const handleClick = useCallback((id) => {
    console.log('Item clicked:', id);
    // Do something with id
  }, []); // No dependencies - same function always

  // With dependencies
  const handleDelete = useCallback((id) => {
    deleteItem(id);
    setItems(prev => prev.filter(item => item.id !== id));
  }, []); // Empty because deleteItem and setItems don't change

  return (
    <div>
      <p>Total: {expensiveValue}</p>
      <List items={items} onClickItem={handleClick} />
      <List items={items} onClickItem={handleDelete} />
    </div>
  );
}

// When to use:
// useMemo - expensive calculations, array/object that affects child renders
// useCallback - function passed to memoized child components`}]}]},hg={id:"react-unit-testing",name:"Unit Testing",questions:[{id:"q31",question:"What is React Testing Library and how does it differ from Enzyme?",answer:"React Testing Library is a modern testing utility that encourages testing components from a user's perspective. It queries the DOM using user-facing selectors (text, roles, labels). Enzyme tests component internals (state, props) and implementation details. React Testing Library is now the recommended approach as it prevents testing implementation details and ensures your tests resemble actual user interactions.",codeSnippets:[{language:"javascript",code:`// React Testing Library - User-centric approach
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('should display and update counter', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  
  await userEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});`},{language:"javascript",code:`// Enzyme - Component implementation testing (less recommended)
import { shallow } from 'enzyme';

test('should update state on button click', () => {
  const wrapper = shallow(<Counter />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('count')).toBe(1);
});`}]},{id:"q32",question:"How do you test asynchronous operations in React components?",answer:"Use async/await with React Testing Library. Import waitFor to wait for elements to appear or changes to complete. Use screen queries like getByText or getByRole with waitFor for elements that appear after async operations.",codeSnippets:[{language:"javascript",code:`import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('should fetch and display user data', async () => {
  render(<UserProfile userId="123" />);
  
  // Component starts loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for the user name to appear
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});

// Alternative with findBy
test('should display user name', async () => {
  render(<UserProfile userId="123" />);
  
  // findBy automatically waits for element
  const userName = await screen.findByText('John Doe');
  expect(userName).toBeInTheDocument();
});`}]},{id:"q33",question:"What are some best practices for writing React component tests?",answer:"1) Test user behavior, not implementation details. 2) Use semantic queries (getByRole, getByLabelText) over getByTestId. 3) Avoid testing internal state directly. 4) Test component interactions like clicks and form submissions. 5) Mock external dependencies (APIs, timers). 6) Keep tests focused and readable. 7) Use beforeEach for setup and afterEach for cleanup. 8) Test accessibility with proper roles and labels.",codeSnippets:[{language:"javascript",code:`import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Good: Test user interactions
test('should submit form with user data', async () => {
  render(<LoginForm />);
  
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });
  
  await userEvent.type(emailInput, 'user@example.com');
  await userEvent.type(passwordInput, 'password123');
  await userEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});

// Bad: Testing implementation details
test('should set state', () => {
  const wrapper = shallow(<LoginForm />);
  wrapper.setState({ email: 'user@example.com' });
  expect(wrapper.state('email')).toBe('user@example.com');
});`}]},{id:"q34",question:"How do you mock API calls in React tests?",answer:"Use jest.mock() to mock modules, or use libraries like MSW (Mock Service Worker) for API mocking. You can mock fetch or axios globally, or mock specific modules. For testing hooks that fetch data, mock the fetch/axios call and test the component's response to the mocked data.",codeSnippets:[{language:"javascript",code:`// Using jest.mock
jest.mock('axios');

test('should display fetched posts', async () => {
  const mockPosts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ];
  
  axios.get.mockResolvedValue({ data: mockPosts });
  
  render(<PostList />);
  
  await waitFor(() => {
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });
  
  expect(axios.get).toHaveBeenCalledWith('/api/posts');
});

// Using Mock Service Worker (MSW)
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/api/posts', (req, res, ctx) => {
    return res(ctx.json([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());`}]},{id:"q35",question:"How do you test custom React hooks?",answer:"Use the renderHook utility from @testing-library/react-hooks (or @testing-library/react in v13+). This allows you to test hooks in isolation without rendering a component. Use act() to wrap state updates and waitFor() to test async behavior.",codeSnippets:[{language:"javascript",code:`import { renderHook, act, waitFor } from '@testing-library/react';
import { useCounter } from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});

test('should fetch data', async () => {
  const { result } = renderHook(() => useFetchUser('123'));
  
  expect(result.current.loading).toBe(true);
  
  await waitFor(() => {
    expect(result.current.loading).toBe(false);
    expect(result.current.user.name).toBe('John');
  });
});`}]},{id:"q36",question:"What is snapshot testing and when should you use it?",answer:"Snapshot testing captures the rendered output of a component and stores it. On future runs, new output is compared against the snapshot. It's useful for detecting unintended UI changes but should not be the primary testing strategy. Use sparingly for stable, large components. Always review snapshot changes carefully before updating them, as they can hide real bugs.",codeSnippets:[{language:"javascript",code:`import { render } from '@testing-library/react';

test('should match snapshot', () => {
  const { container } = render(<Button variant="primary">Click Me</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

/* Generated snapshot file:
exports[\`should match snapshot\`] = \`
<button class="btn btn-primary">
  Click Me
</button>
\`;
*/

// Update snapshot when intentional change is made
// Run: jest --updateSnapshot or jest -u`}]},{id:"q37",question:"How do you test context providers in React?",answer:"Wrap the component under test with the context provider. You can create a wrapper component for renderHook or render to reduce boilerplate. This allows testing components that consume context without directly testing the context object.",codeSnippets:[{language:"javascript",code:`import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';

// Option 1: Wrap component directly
test('should use theme from context', () => {
  render(
    <ThemeProvider initialTheme="dark">
      <ThemedComponent />
    </ThemeProvider>
  );
  
  expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
});

// Option 2: Create reusable wrapper
const renderWithTheme = (component, initialTheme = 'light') => {
  return render(
    <ThemeProvider initialTheme={initialTheme}>
      {component}
    </ThemeProvider>
  );
};

test('should update theme on button click', async () => {
  renderWithTheme(<ThemedComponent />);
  const button = screen.getByRole('button', { name: /toggle/i });
  
  await userEvent.click(button);
  
  expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
});`}]},{id:"q38",question:"What are the differences between getByXxx, queryByXxx, and findByXxx?",answer:"getByXxx: Returns element or throws error if not found. Use for elements that should exist immediately. queryByXxx: Returns element, null if not found, or throws error if multiple match. Use to assert element is NOT in document. findByXxx: Returns promise that resolves to element. Waits for element to appear. Use for async rendering or after user interactions.",codeSnippets:[{language:"javascript",code:`import { render, screen } from '@testing-library/react';

test('query method examples', () => {
  render(<Component />);
  
  // getByRole - throws if not found
  const button = screen.getByRole('button', { name: /submit/i });
  
  // queryByText - returns null if not found
  const loading = screen.queryByText('Loading...');
  expect(loading).not.toBeInTheDocument();
  
  // findByText - returns promise, waits for element
  const result = await screen.findByText('Success!');
  expect(result).toBeInTheDocument();
});`}]}]},bg={id:"react",name:"React",topics:[gg,yg,vg,hg]},Cg={id:"csharp-creational",name:"Creational Patterns",questions:[{id:"q1",question:"What is the Singleton pattern and how do you implement it in C#?",answer:"The Singleton pattern ensures a class has only one instance and provides a global point of access to it. It's useful for centralized management of resources like database connections, logging, or configuration. There are multiple implementation approaches with different thread-safety guarantees.",codeSnippets:[{language:"csharp",code:`// Eager initialization - Thread-safe
public class Singleton
{
    private static readonly Singleton _instance = new Singleton();
    
    private Singleton() { }
    
    public static Singleton Instance => _instance;
}

// Lazy initialization - Thread-safe with Lazy<T>
public class SingletonLazy
{
    private static readonly Lazy<SingletonLazy> _instance = 
        new Lazy<SingletonLazy>(() => new SingletonLazy());
    
    private SingletonLazy() { }
    
    public static SingletonLazy Instance => _instance.Value;
}

// Usage
var singleton1 = Singleton.Instance;
var singleton2 = Singleton.Instance;
Console.WriteLine(ReferenceEquals(singleton1, singleton2)); // true`}]},{id:"q2",question:"Explain the Factory Method pattern with a C# example.",answer:"The Factory Method pattern defines an interface for creating objects, but lets subclasses decide which class to instantiate. It promotes loose coupling by eliminating the need to bind application-specific classes into the code.",codeSnippets:[{language:"csharp",code:`// Abstract Creator
public abstract class DatabaseFactory
{
    public abstract IDatabase CreateDatabase();
    
    public void InitializeDatabase()
    {
        var db = CreateDatabase();
        db.Connect();
    }
}

// Concrete Creators
public class SqlServerFactory : DatabaseFactory
{
    public override IDatabase CreateDatabase() => new SqlServerDatabase();
}

public class MySqlFactory : DatabaseFactory
{
    public override IDatabase CreateDatabase() => new MySqlDatabase();
}

// Product Interface
public interface IDatabase
{
    void Connect();
    void ExecuteQuery(string query);
}

// Concrete Products
public class SqlServerDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connected to SQL Server");
    public void ExecuteQuery(string query) => Console.WriteLine($"Executing: {query}");
}

public class MySqlDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connected to MySQL");
    public void ExecuteQuery(string query) => Console.WriteLine($"Executing: {query}");
}

// Usage
DatabaseFactory factory = new SqlServerFactory();
factory.InitializeDatabase();`}]},{id:"q3",question:"What is the Abstract Factory pattern and when should you use it?",answer:"The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. Use it when you need to create multiple related objects that must work together, such as UI elements for different platforms (Windows, macOS) or database providers with different drivers.",codeSnippets:[{language:"csharp",code:`// Abstract Factory
public interface IUIFactory
{
    IButton CreateButton();
    ITextBox CreateTextBox();
}

// Product Interfaces
public interface IButton { void Click(); }
public interface ITextBox { void Type(string text); }

// Concrete Factories
public class WindowsUIFactory : IUIFactory
{
    public IButton CreateButton() => new WindowsButton();
    public ITextBox CreateTextBox() => new WindowsTextBox();
}

public class MacUIFactory : IUIFactory
{
    public IButton CreateButton() => new MacButton();
    public ITextBox CreateTextBox() => new MacTextBox();
}

// Concrete Products
public class WindowsButton : IButton { public void Click() => Console.WriteLine("Windows Button clicked"); }
public class MacButton : IButton { public void Click() => Console.WriteLine("Mac Button clicked"); }
public class WindowsTextBox : ITextBox { public void Type(string text) => Console.WriteLine($"Windows TextBox: {text}"); }
public class MacTextBox : ITextBox { public void Type(string text) => Console.WriteLine($"Mac TextBox: {text}"); }

// Client Code
public class Application
{
    private IButton _button;
    private ITextBox _textBox;
    
    public Application(IUIFactory factory)
    {
        _button = factory.CreateButton();
        _textBox = factory.CreateTextBox();
    }
    
    public void Run()
    {
        _button.Click();
        _textBox.Type("Hello");
    }
}

// Usage
IUIFactory factory = Environment.OSVersion.Platform == PlatformID.Win32NT 
    ? new WindowsUIFactory() : new MacUIFactory();
var app = new Application(factory);
app.Run();`}]},{id:"q4",question:"What is the Builder pattern and why is it useful?",answer:"The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations. It's useful for objects with many optional parameters and makes code more readable than multiple constructor overloads.",codeSnippets:[{language:"csharp",code:`// Product
public class Computer
{
    public string CPU { get; set; }
    public string RAM { get; set; }
    public string Storage { get; set; }
    public string GPU { get; set; }
    public bool HasWiFi { get; set; }
    
    public override string ToString()
    {
        return $"CPU: {CPU}, RAM: {RAM}, Storage: {Storage}, GPU: {GPU}, WiFi: {HasWiFi}";
    }
}

// Builder
public class ComputerBuilder
{
    private Computer _computer = new Computer();
    
    public ComputerBuilder WithCPU(string cpu)
    {
        _computer.CPU = cpu;
        return this;
    }
    
    public ComputerBuilder WithRAM(string ram)
    {
        _computer.RAM = ram;
        return this;
    }
    
    public ComputerBuilder WithStorage(string storage)
    {
        _computer.Storage = storage;
        return this;
    }
    
    public ComputerBuilder WithGPU(string gpu)
    {
        _computer.GPU = gpu;
        return this;
    }
    
    public ComputerBuilder WithWiFi(bool hasWiFi = true)
    {
        _computer.HasWiFi = hasWiFi;
        return this;
    }
    
    public Computer Build() => _computer;
}

// Usage
var computer = new ComputerBuilder()
    .WithCPU("Intel i7")
    .WithRAM("16GB")
    .WithStorage("512GB SSD")
    .WithGPU("RTX 3080")
    .WithWiFi()
    .Build();
    
Console.WriteLine(computer);`}]},{id:"q5",question:"Explain the Prototype pattern in C#.",answer:"The Prototype pattern creates new objects by cloning an existing object rather than creating from scratch. It's useful when object creation is expensive or complex. In C#, you implement the ICloneable interface or use a Clone method.",codeSnippets:[{language:"csharp",code:`// Prototype interface
public interface IPrototype
{
    IPrototype Clone();
}

// Concrete Prototype
public class User : IPrototype
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<string> Roles { get; set; }
    
    public IPrototype Clone()
    {
        return new User
        {
            Id = this.Id,
            Name = this.Name,
            Roles = new List<string>(this.Roles) // Deep copy
        };
    }
}

// Usage
var originalUser = new User 
{ 
    Id = 1, 
    Name = "John", 
    Roles = new List<string> { "Admin", "User" } 
};

var clonedUser = (User)originalUser.Clone();
clonedUser.Name = "Jane";
clonedUser.Roles.Add("Manager");

Console.WriteLine($"Original: {originalUser.Name}, Roles: {string.Join(", ", originalUser.Roles)}");
Console.WriteLine($"Cloned: {clonedUser.Name}, Roles: {string.Join(", ", clonedUser.Roles)}");`}]}]},Sg={id:"csharp-structural",name:"Structural Patterns",questions:[{id:"q6",question:"What is the Adapter pattern and provide a C# example.",answer:"The Adapter pattern converts the interface of a class into another interface clients expect. It lets classes work together that couldn't otherwise because of incompatible interfaces. It's useful for integrating legacy code or third-party libraries.",codeSnippets:[{language:"csharp",code:`// Existing interface (third-party)
public interface ILegacySystem
{
    string GetData();
}

// Legacy implementation
public class LegacySystem : ILegacySystem
{
    public string GetData() => "Data from legacy system";
}

// New interface we want to use
public interface IModernSystem
{
    object FetchData();
}

// Adapter
public class LegacyToModernAdapter : IModernSystem
{
    private ILegacySystem _legacySystem;
    
    public LegacyToModernAdapter(ILegacySystem legacySystem)
    {
        _legacySystem = legacySystem;
    }
    
    public object FetchData()
    {
        return new { data = _legacySystem.GetData(), timestamp = DateTime.Now };
    }
}

// Usage
ILegacySystem legacy = new LegacySystem();
IModernSystem modern = new LegacyToModernAdapter(legacy);
var result = modern.FetchData(); // Works seamlessly`}]},{id:"q7",question:"Explain the Decorator pattern in C#.",answer:"The Decorator pattern attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality. It lets you wrap objects in decorators to add features without modifying original classes.",codeSnippets:[{language:"csharp",code:`// Component interface
public interface ICoffee
{
    string GetDescription();
    decimal GetCost();
}

// Concrete Component
public class SimpleCoffee : ICoffee
{
    public string GetDescription() => "Simple Coffee";
    public decimal GetCost() => 2.00m;
}

// Decorators
public abstract class CoffeeDecorator : ICoffee
{
    protected ICoffee _coffee;
    
    public CoffeeDecorator(ICoffee coffee)
    {
        _coffee = coffee;
    }
    
    public virtual string GetDescription() => _coffee.GetDescription();
    public virtual decimal GetCost() => _coffee.GetCost();
}

public class MilkDecorator : CoffeeDecorator
{
    public MilkDecorator(ICoffee coffee) : base(coffee) { }
    
    public override string GetDescription() => _coffee.GetDescription() + ", Milk";
    public override decimal GetCost() => _coffee.GetCost() + 0.50m;
}

public class ChocolateDecorator : CoffeeDecorator
{
    public ChocolateDecorator(ICoffee coffee) : base(coffee) { }
    
    public override string GetDescription() => _coffee.GetDescription() + ", Chocolate";
    public override decimal GetCost() => _coffee.GetCost() + 0.75m;
}

// Usage
ICoffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new ChocolateDecorator(coffee);

Console.WriteLine(\`\${coffee.GetDescription()}: \${coffee.GetCost()}\`);
// Output: Simple Coffee, Milk, Chocolate: $3.25`}]},{id:"q8",question:"What is the Facade pattern and when do you use it?",answer:"The Facade pattern provides a unified, simplified interface to a set of interfaces in a subsystem. It hides the complexity of the subsystem and makes it easier for clients to use. Use it when you have a complex subsystem and want to provide a simple interface.",codeSnippets:[{language:"csharp",code:`// Complex subsystem
public class DatabaseService
{
    public void Connect(string connectionString) => Console.WriteLine("Database connected");
    public void Authenticate(string username, string password) => Console.WriteLine("User authenticated");
}

public class CacheService
{
    public void Initialize() => Console.WriteLine("Cache initialized");
}

public class LoggingService
{
    public void Log(string message) => Console.WriteLine($"Log: {message}");
}

// Facade
public class ApplicationFacade
{
    private DatabaseService _db;
    private CacheService _cache;
    private LoggingService _logger;
    
    public ApplicationFacade()
    {
        _db = new DatabaseService();
        _cache = new CacheService();
        _logger = new LoggingService();
    }
    
    public void InitializeApplication(string connectionString, string user, string password)
    {
        _logger.Log("Initializing application...");
        _db.Connect(connectionString);
        _db.Authenticate(user, password);
        _cache.Initialize();
        _logger.Log("Application initialized successfully");
    }
}

// Usage - Simple!
var facade = new ApplicationFacade();
facade.InitializeApplication("Server=localhost", "admin", "password");`}]},{id:"q9",question:"Explain the Proxy pattern in C#.",answer:"The Proxy pattern provides a substitute or placeholder for another object to control access to it. It can add behavior like lazy initialization, logging, access control, or caching without changing the original object.",codeSnippets:[{language:"csharp",code:`// Subject interface
public interface IDataService
{
    string FetchData(int id);
}

// Real subject - expensive to create/use
public class RealDataService : IDataService
{
    public string FetchData(int id)
    {
        System.Threading.Thread.Sleep(2000); // Simulate delay
        return $"Data for ID: {id}";
    }
}

// Proxy with caching
public class DataServiceProxy : IDataService
{
    private RealDataService _realService;
    private Dictionary<int, string> _cache = new Dictionary<int, string>();
    
    public string FetchData(int id)
    {
        if (_cache.ContainsKey(id))
        {
            Console.WriteLine($"Cache hit for ID: {id}");
            return _cache[id];
        }
        
        Console.WriteLine($"Cache miss for ID: {id}, fetching from real service...");
        _realService ??= new RealDataService();
        
        var data = _realService.FetchData(id);
        _cache[id] = data;
        return data;
    }
}

// Usage
IDataService service = new DataServiceProxy();
Console.WriteLine(service.FetchData(1)); // Slow - fetches from real service
Console.WriteLine(service.FetchData(1)); // Fast - from cache
Console.WriteLine(service.FetchData(2)); // Slow - fetches from real service`}]},{id:"q10",question:"What is the Bridge pattern?",answer:"The Bridge pattern decouples an abstraction from its implementation so they can vary independently. It's useful when you want to avoid permanent binding between abstraction and implementation, allowing both to vary without affecting each other.",codeSnippets:[{language:"csharp",code:`// Implementor
public interface IRenderer
{
    void RenderCircle(float x, float y, float radius);
}

// Concrete Implementors
public class RasterRenderer : IRenderer
{
    public void RenderCircle(float x, float y, float radius)
        => Console.WriteLine($"Raster rendering circle at ({x}, {y}) with radius {radius}");
}

public class VectorRenderer : IRenderer
{
    public void RenderCircle(float x, float y, float radius)
        => Console.WriteLine($"Vector rendering circle at ({x}, {y}) with radius {radius}");
}

// Abstraction
public abstract class Shape
{
    protected IRenderer _renderer;
    
    public Shape(IRenderer renderer)
    {
        _renderer = renderer;
    }
    
    public abstract void Draw();
}

// Refined Abstraction
public class Circle : Shape
{
    private float _x, _y, _radius;
    
    public Circle(float x, float y, float radius, IRenderer renderer) : base(renderer)
    {
        _x = x;
        _y = y;
        _radius = radius;
    }
    
    public override void Draw() => _renderer.RenderCircle(_x, _y, _radius);
}

// Usage
Circle vectorCircle = new Circle(10, 20, 5, new VectorRenderer());
Circle rasterCircle = new Circle(10, 20, 5, new RasterRenderer());

vectorCircle.Draw(); // Vector rendering circle...
rasterCircle.Draw(); // Raster rendering circle...`}]}]},wg={id:"csharp-behavioral",name:"Behavioral Patterns",questions:[{id:"q11",question:"What is the Observer pattern and how do you implement it in C#?",answer:"The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically. In C#, you can use delegates, events, or implement IObserver/IObservable.",codeSnippets:[{language:"csharp",code:`// Using Events and Delegates
public class StockPrice
{
    private decimal _price;
    
    public decimal Price
    {
        get => _price;
        set
        {
            if (_price != value)
            {
                _price = value;
                OnPriceChanged(_price);
            }
        }
    }
    
    // Event
    public event EventHandler<PriceChangedEventArgs> PriceChanged;
    
    protected virtual void OnPriceChanged(decimal newPrice)
    {
        PriceChanged?.Invoke(this, new PriceChangedEventArgs { NewPrice = newPrice });
    }
}

public class PriceChangedEventArgs : EventArgs
{
    public decimal NewPrice { get; set; }
}

// Observer
public class Investor
{
    public string Name { get; set; }
    
    public void OnPriceChanged(object sender, PriceChangedEventArgs e)
    {
        Console.WriteLine($"{Name} received notification: Price changed to {e.NewPrice}");
    }
}

// Usage
var stock = new StockPrice();
var investor1 = new Investor { Name = "Alice" };
var investor2 = new Investor { Name = "Bob" };

stock.PriceChanged += investor1.OnPriceChanged;
stock.PriceChanged += investor2.OnPriceChanged;

stock.Price = 100.50m; // Both investors are notified`}]},{id:"q12",question:"Explain the Strategy pattern in C#.",answer:"The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it, making code flexible and testable.",codeSnippets:[{language:"csharp",code:`// Strategy interface
public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

// Concrete Strategies
public class CreditCardStrategy : IPaymentStrategy
{
    private string _cardNumber;
    
    public CreditCardStrategy(string cardNumber) => _cardNumber = cardNumber;
    
    public void Pay(decimal amount)
        => Console.WriteLine(\`Paid \${amount} using Credit Card \${_cardNumber}\`);
}

public class PayPalStrategy : IPaymentStrategy
{
    private string _email;
    
    public PayPalStrategy(string email) => _email = email;
    
    public void Pay(decimal amount)
        => Console.WriteLine(\`Paid \${amount} using PayPal account \${_email}\`);
}

public class CryptoStrategy : IPaymentStrategy
{
    private string _walletAddress;
    
    public CryptoStrategy(string walletAddress) => _walletAddress = walletAddress;
    
    public void Pay(decimal amount)
        => Console.WriteLine(\`Paid \${amount} using Crypto wallet \${_walletAddress}\`);
}

// Context
public class ShoppingCart
{
    private IPaymentStrategy _paymentStrategy;
    
    public void SetPaymentStrategy(IPaymentStrategy strategy)
        => _paymentStrategy = strategy;
    
    public void Checkout(decimal total)
        => _paymentStrategy.Pay(total);
}

// Usage
var cart = new ShoppingCart();

cart.SetPaymentStrategy(new CreditCardStrategy("1234-5678-9012-3456"));
cart.Checkout(99.99m);

cart.SetPaymentStrategy(new PayPalStrategy("user@example.com"));
cart.Checkout(49.99m);`}]},{id:"q13",question:"What is the Command pattern and when should you use it?",answer:"The Command pattern encapsulates a request as an object, allowing you to parameterize clients with different requests, queue requests, and support undoable operations. Use it for undo/redo, task scheduling, or request logging.",codeSnippets:[{language:"csharp",code:`// Command interface
public interface ICommand
{
    void Execute();
    void Undo();
}

// Receiver
public class TextEditor
{
    private string _content = "";
    
    public void InsertText(string text)
    {
        _content += text;
        Console.WriteLine($"Content: {_content}");
    }
    
    public void DeleteText(int length)
    {
        if (_content.Length >= length)
        {
            _content = _content.Substring(0, _content.Length - length);
            Console.WriteLine($"Content: {_content}");
        }
    }
    
    public string GetContent() => _content;
}

// Concrete Commands
public class InsertCommand : ICommand
{
    private TextEditor _editor;
    private string _text;
    
    public InsertCommand(TextEditor editor, string text)
    {
        _editor = editor;
        _text = text;
    }
    
    public void Execute() => _editor.InsertText(_text);
    public void Undo() => _editor.DeleteText(_text.Length);
}

// Invoker
public class CommandHistory
{
    private Stack<ICommand> _history = new Stack<ICommand>();
    
    public void Execute(ICommand command)
    {
        command.Execute();
        _history.Push(command);
    }
    
    public void Undo()
    {
        if (_history.Count > 0)
        {
            var command = _history.Pop();
            command.Undo();
        }
    }
}

// Usage
var editor = new TextEditor();
var history = new CommandHistory();

history.Execute(new InsertCommand(editor, "Hello "));
history.Execute(new InsertCommand(editor, "World"));
history.Undo(); // Undo "World"
history.Undo(); // Undo "Hello "`}]},{id:"q14",question:"Explain the State pattern in C#.",answer:"The State pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class. It's useful for objects with state-dependent behavior.",codeSnippets:[{language:"csharp",code:`// State interface
public interface ILightState
{
    void TurnOn(Light light);
    void TurnOff(Light light);
}

// Concrete States
public class OnState : ILightState
{
    public void TurnOn(Light light) => Console.WriteLine("Light is already on");
    public void TurnOff(Light light)
    {
        Console.WriteLine("Turning light off");
        light.SetState(new OffState());
    }
}

public class OffState : ILightState
{
    public void TurnOn(Light light)
    {
        Console.WriteLine("Turning light on");
        light.SetState(new OnState());
    }
    
    public void TurnOff(Light light) => Console.WriteLine("Light is already off");
}

// Context
public class Light
{
    private ILightState _state;
    
    public Light() => _state = new OffState();
    
    public void SetState(ILightState state) => _state = state;
    
    public void TurnOn() => _state.TurnOn(this);
    public void TurnOff() => _state.TurnOff(this);
}

// Usage
var light = new Light();
light.TurnOn();  // Turning light on
light.TurnOn();  // Light is already on
light.TurnOff(); // Turning light off
light.TurnOff(); // Light is already off`}]},{id:"q15",question:"What is the Chain of Responsibility pattern?",answer:"The Chain of Responsibility pattern allows passing requests along a chain of handlers. Each handler decides whether to process the request or pass it to the next handler. It's useful for request handling, logging, validation pipelines.",codeSnippets:[{language:"csharp",code:`// Handler interface
public abstract class ApprovalHandler
{
    protected ApprovalHandler _nextHandler;
    
    public void SetNext(ApprovalHandler next) => _nextHandler = next;
    
    public abstract void Handle(ExpenseRequest request);
}

// Concrete Handlers
public class ManagerApproval : ApprovalHandler
{
    public override void Handle(ExpenseRequest req)
    {
        if (req.Amount <= 1000)
        {
            Console.WriteLine(\`Manager approved expense of \${req.Amount}\`);
        }
        else if (_nextHandler != null)
        {
            _nextHandler.Handle(req);
        }
    }
}

public class DirectorApproval : ApprovalHandler
{
    public override void Handle(ExpenseRequest req)
    {
        if (req.Amount <= 5000)
        {
            Console.WriteLine(\`Director approved expense of \${req.Amount}\`);
        }
        else if (_nextHandler != null)
        {
            _nextHandler.Handle(req);
        }
    }
}

public class CEOApproval : ApprovalHandler
{
    public override void Handle(ExpenseRequest req)
    {
        if (req.Amount <= 100000)
        {
            Console.WriteLine(\`CEO approved expense of \${req.Amount}\`);
        }
        else
        {
            Console.WriteLine(\`Expense of \${req.Amount} rejected\`);
        }
    }
}

public class ExpenseRequest
{
    public decimal Amount { get; set; }
    public string Description { get; set; }
}

// Usage
var manager = new ManagerApproval();
var director = new DirectorApproval();
var ceo = new CEOApproval();

manager.SetNext(director);
director.SetNext(ceo);

manager.Handle(new ExpenseRequest { Amount = 500 });   // Manager approves
manager.Handle(new ExpenseRequest { Amount = 3000 });  // Director approves
manager.Handle(new ExpenseRequest { Amount = 50000 }); // CEO approves`}]}]},Ag={id:"csharp",name:"C# Design Patterns",topics:[Cg,Sg,wg]},Lg={id:"microservices-communication",name:"Service Communication",questions:[{id:"q1",question:"What is the API Gateway pattern and why is it important in microservices?",answer:"The API Gateway pattern provides a single entry point for all client requests to a microservices architecture. It handles request routing, protocol translation, authentication, rate limiting, and response aggregation. It simplifies client code and provides a facade over complex microservices.",codeSnippets:[{language:"csharp",code:`// API Gateway using middleware
public class ApiGateway
{
    private readonly IServiceProvider _serviceProvider;
    
    public ApiGateway(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }
    
    public async Task<ApiResponse> RouteRequest(ApiRequest request)
    {
        // Route to appropriate microservice
        return request.Path switch
        {
            "/users/*" => await RouteToUserService(request),
            "/orders/*" => await RouteToOrderService(request),
            "/products/*" => await RouteToProductService(request),
            _ => new ApiResponse { StatusCode = 404, Body = "Not Found" }
        };
    }
    
    private async Task<ApiResponse> RouteToUserService(ApiRequest request)
    {
        var userService = _serviceProvider.GetRequiredService<IUserService>();
        return await userService.HandleRequest(request);
    }
    
    private async Task<ApiResponse> RouteToOrderService(ApiRequest request)
    {
        var orderService = _serviceProvider.GetRequiredService<IOrderService>();
        return await orderService.HandleRequest(request);
    }
    
    private async Task<ApiResponse> RouteToProductService(ApiRequest request)
    {
        var productService = _serviceProvider.GetRequiredService<IProductService>();
        return await productService.HandleRequest(request);
    }
}

// ASP.NET Core Implementation
app.Use(async (context, next) =>
{
    var path = context.Request.Path.Value;
    
    if (path.StartsWith("/api/users"))
        context.Items["service"] = "UserService";
    else if (path.StartsWith("/api/orders"))
        context.Items["service"] = "OrderService";
    
    // Add authentication, rate limiting, logging
    await next();
});`}]},{id:"q2",question:"Explain the Saga pattern for distributed transactions in microservices.",answer:"The Saga pattern manages data consistency across multiple microservices without distributed transactions. It's a sequence of local transactions coordinated by a saga coordinator. Two approaches: Choreography (event-driven) and Orchestration (centralized coordinator).",codeSnippets:[{language:"csharp",code:`// Orchestration-based Saga
public class OrderSaga
{
    private readonly IOrderService _orderService;
    private readonly IPaymentService _paymentService;
    private readonly IInventoryService _inventoryService;
    private readonly IEventBus _eventBus;
    
    public async Task<bool> ExecuteOrderSaga(Order order)
    {
        try
        {
            // Step 1: Create order
            var orderCreated = await _orderService.CreateOrder(order);
            if (!orderCreated) throw new Exception("Order creation failed");
            
            // Step 2: Process payment
            var paymentProcessed = await _paymentService.ProcessPayment(order.Id, order.Amount);
            if (!paymentProcessed)
            {
                await _orderService.CancelOrder(order.Id);
                throw new Exception("Payment failed");
            }
            
            // Step 3: Reserve inventory
            var inventoryReserved = await _inventoryService.ReserveInventory(order.Items);
            if (!inventoryReserved)
            {
                await _paymentService.RefundPayment(order.Id);
                await _orderService.CancelOrder(order.Id);
                throw new Exception("Inventory reservation failed");
            }
            
            // Publish order completed event
            await _eventBus.PublishAsync(new OrderCompletedEvent { OrderId = order.Id });
            return true;
        }
        catch (Exception ex)
        {
            // Compensating transactions already handled in try-catch
            await _eventBus.PublishAsync(new OrderFailedEvent { OrderId = order.Id, Reason = ex.Message });
            return false;
        }
    }
}

// Choreography-based Saga with Events
public class OrderService
{
    private readonly IEventBus _eventBus;
    
    public async Task CreateOrder(Order order)
    {
        // Create order
        await SaveOrder(order);
        
        // Publish event - other services subscribe and act
        await _eventBus.PublishAsync(new OrderCreatedEvent { OrderId = order.Id });
    }
}

public class PaymentService
{
    private readonly IEventBus _eventBus;
    
    [EventHandler]
    public async Task HandleOrderCreated(OrderCreatedEvent @event)
    {
        var order = await GetOrder(@event.OrderId);
        var success = await ProcessPayment(order);
        
        if (success)
            await _eventBus.PublishAsync(new PaymentProcessedEvent { OrderId = @event.OrderId });
        else
            await _eventBus.PublishAsync(new PaymentFailedEvent { OrderId = @event.OrderId });
    }
}`}]},{id:"q3",question:"What is the Event Sourcing pattern and its benefits?",answer:"Event Sourcing stores the state of an entity as a sequence of immutable events rather than storing the current state. Benefits include complete audit trail, ability to rebuild state at any point, and temporal queries. Challenges include handling eventual consistency and complex queries.",codeSnippets:[{language:"csharp",code:`// Event Sourcing Implementation
public abstract class Event
{
    public Guid AggregateId { get; set; }
    public long Version { get; set; }
    public DateTime Timestamp { get; set; }
}

public class AccountCreatedEvent : Event
{
    public string AccountHolder { get; set; }
    public decimal InitialBalance { get; set; }
}

public class MoneyDepositedEvent : Event
{
    public decimal Amount { get; set; }
}

public class MoneyWithdrawnEvent : Event
{
    public decimal Amount { get; set; }
}

// Aggregate Root
public class BankAccount
{
    public Guid Id { get; set; }
    public string AccountHolder { get; set; }
    public decimal Balance { get; private set; }
    public long Version { get; private set; }
    
    private List<Event> _uncommittedEvents = new();
    
    // Recreate account from events
    public static BankAccount FromHistory(IEnumerable<Event> events)
    {
        var account = new BankAccount();
        foreach (var @event in events)
        {
            account.ApplyEvent(@event);
        }
        return account;
    }
    
    public void Deposit(decimal amount)
    {
        var @event = new MoneyDepositedEvent
        {
            AggregateId = this.Id,
            Amount = amount,
            Version = this.Version + 1,
            Timestamp = DateTime.UtcNow
        };
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    public void Withdraw(decimal amount)
    {
        if (this.Balance < amount)
            throw new InvalidOperationException("Insufficient funds");
        
        var @event = new MoneyWithdrawnEvent
        {
            AggregateId = this.Id,
            Amount = amount,
            Version = this.Version + 1,
            Timestamp = DateTime.UtcNow
        };
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    private void ApplyEvent(Event @event)
    {
        switch (@event)
        {
            case AccountCreatedEvent acc:
                this.Id = acc.AggregateId;
                this.AccountHolder = acc.AccountHolder;
                this.Balance = acc.InitialBalance;
                break;
            case MoneyDepositedEvent dep:
                this.Balance += dep.Amount;
                break;
            case MoneyWithdrawnEvent wd:
                this.Balance -= wd.Amount;
                break;
        }
        this.Version = @event.Version;
    }
    
    public IEnumerable<Event> GetUncommittedEvents() => _uncommittedEvents;
}

// Event Store
public interface IEventStore
{
    Task SaveEventsAsync(Guid aggregateId, IEnumerable<Event> events);
    Task<IEnumerable<Event>> GetEventsAsync(Guid aggregateId);
}`}]},{id:"q4",question:"What is the CQRS (Command Query Responsibility Segregation) pattern?",answer:"CQRS separates read and write models. Commands handle writes (state changes), while queries handle reads (retrieving data). Enables independent scaling, different storage mechanisms for reads/writes, and better performance through optimized read models.",codeSnippets:[{language:"csharp",code:`// Commands - Write Model
public abstract class Command
{
    public Guid CommandId { get; } = Guid.NewGuid();
}

public class CreateOrderCommand : Command
{
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
}

public class UpdateOrderStatusCommand : Command
{
    public Guid OrderId { get; set; }
    public OrderStatus NewStatus { get; set; }
}

// Queries - Read Model
public abstract class Query<TResult>
{
}

public class GetOrderByIdQuery : Query<OrderDto>
{
    public Guid OrderId { get; set; }
}

public class GetCustomerOrdersQuery : Query<List<OrderSummaryDto>>
{
    public Guid CustomerId { get; set; }
}

// Command Handler
public class OrderCommandHandler
{
    private readonly IEventBus _eventBus;
    private readonly IRepository<Order> _repository;
    
    public async Task Handle(CreateOrderCommand command)
    {
        var order = new Order
        {
            Id = Guid.NewGuid(),
            CustomerId = command.CustomerId,
            Items = command.Items,
            CreatedAt = DateTime.UtcNow
        };
        
        await _repository.SaveAsync(order);
        
        // Publish event for read model update
        await _eventBus.PublishAsync(new OrderCreatedEvent 
        { 
            OrderId = order.Id,
            CustomerId = command.CustomerId 
        });
    }
}

// Query Handler
public class OrderQueryHandler
{
    private readonly IReadModelRepository _readRepository;
    
    public async Task<OrderDto> Handle(GetOrderByIdQuery query)
    {
        // Query optimized read model (denormalized data)
        return await _readRepository.GetOrderAsync(query.OrderId);
    }
    
    public async Task<List<OrderSummaryDto>> Handle(GetCustomerOrdersQuery query)
    {
        // Quick read from denormalized read model
        return await _readRepository.GetCustomerOrdersAsync(query.CustomerId);
    }
}

// CQRS Bus
public class CqrsBus
{
    private readonly IServiceProvider _serviceProvider;
    
    public async Task<TResult> SendQuery<TResult>(Query<TResult> query)
    {
        var handlerType = typeof(IQueryHandler<,>).MakeGenericType(query.GetType(), typeof(TResult));
        var handler = _serviceProvider.GetService(handlerType);
        var method = handlerType.GetMethod("Handle");
        return await (Task<TResult>)method.Invoke(handler, new object[] { query });
    }
    
    public async Task SendCommand<T>(T command) where T : Command
    {
        var handlerType = typeof(ICommandHandler<>).MakeGenericType(command.GetType());
        var handler = _serviceProvider.GetService(handlerType);
        var method = handlerType.GetMethod("Handle");
        await (Task)method.Invoke(handler, new object[] { command });
    }
}`}]},{id:"q5",question:"Explain the Message Queue pattern in microservices architecture.",answer:"The Message Queue pattern enables asynchronous communication between microservices through a message broker. Services produce messages to a queue and consumers process them independently. Benefits: decoupling, reliability, and handling temporary failures.",codeSnippets:[{language:"csharp",code:`// Message interface
public interface IMessage
{
    string MessageType { get; }
    DateTime CreatedAt { get; }
}

public class OrderPlacedMessage : IMessage
{
    public string MessageType => "OrderPlaced";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public Guid OrderId { get; set; }
    public List<OrderItem> Items { get; set; }
}

// Message Producer
public class OrderService
{
    private readonly IMessageQueue _messageQueue;
    
    public async Task PlaceOrder(Order order)
    {
        // Save order
        await SaveOrder(order);
        
        // Publish message to queue
        var message = new OrderPlacedMessage
        {
            OrderId = order.Id,
            Items = order.Items
        };
        
        await _messageQueue.PublishAsync("orders.placed", message);
    }
}

// Message Consumer
public class NotificationService
{
    private readonly IMessageQueue _messageQueue;
    
    public async Task StartProcessing()
    {
        await _messageQueue.SubscribeAsync("orders.placed", HandleOrderPlaced);
    }
    
    private async Task HandleOrderPlaced(OrderPlacedMessage message)
    {
        try
        {
            // Send notification to customer
            await SendEmailNotification(message.OrderId);
        }
        catch (Exception ex)
        {
            // Message will be retried or moved to dead-letter queue
            throw;
        }
    }
}

// Message Queue Implementation with RabbitMQ
public class RabbitMQMessageQueue : IMessageQueue
{
    private readonly IConnection _connection;
    
    public async Task PublishAsync<T>(string queueName, T message) where T : IMessage
    {
        using (var channel = _connection.CreateModel())
        {
            channel.QueueDeclare(queue: queueName, durable: true);
            
            var json = JsonConvert.SerializeObject(message);
            var body = Encoding.UTF8.GetBytes(json);
            
            channel.BasicPublish(exchange: "", routingKey: queueName, body: body);
        }
    }
    
    public async Task SubscribeAsync<T>(string queueName, Func<T, Task> handler) where T : IMessage
    {
        using (var channel = _connection.CreateModel())
        {
            channel.QueueDeclare(queue: queueName, durable: true);
            var consumer = new EventingBasicConsumer(channel);
            
            consumer.Received += async (model, ea) =>
            {
                try
                {
                    var json = Encoding.UTF8.GetString(ea.Body.ToArray());
                    var message = JsonConvert.DeserializeObject<T>(json);
                    await handler(message);
                    channel.BasicAck(ea.DeliveryTag, false);
                }
                catch (Exception ex)
                {
                    channel.BasicNack(ea.DeliveryTag, false, true); // Requeue
                }
            };
            
            channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);
        }
    }
}`}]}]},Tg={id:"microservices-resilience",name:"Resilience Patterns",questions:[{id:"q1",question:"What is the Circuit Breaker pattern and how does it prevent cascading failures?",answer:"The Circuit Breaker pattern monitors for failures and temporarily stops requests to a failing service. It has three states: Closed (normal), Open (blocking requests), and Half-Open (testing recovery). Prevents cascading failures and allows services to recover gracefully.",codeSnippets:[{language:"csharp",code:`// Circuit Breaker Implementation
public enum CircuitState
{
    Closed,      // Normal operation
    Open,        // Blocking requests
    HalfOpen     // Testing recovery
}

public class CircuitBreaker
{
    private CircuitState _state = CircuitState.Closed;
    private DateTime _lastFailureTime;
    private int _failureCount;
    private int _failureThreshold = 5;
    private TimeSpan _timeout = TimeSpan.FromSeconds(30);
    private readonly object _lock = new();
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        lock (_lock)
        {
            if (_state == CircuitState.Open)
            {
                if (DateTime.UtcNow - _lastFailureTime > _timeout)
                {
                    _state = CircuitState.HalfOpen;
                    _failureCount = 0;
                }
                else
                {
                    throw new CircuitBreakerOpenException("Circuit breaker is open");
                }
            }
        }
        
        try
        {
            var result = await operation();
            OnSuccess();
            return result;
        }
        catch (Exception ex)
        {
            OnFailure();
            throw;
        }
    }
    
    private void OnSuccess()
    {
        lock (_lock)
        {
            _failureCount = 0;
            if (_state == CircuitState.HalfOpen)
            {
                _state = CircuitState.Closed;
            }
        }
    }
    
    private void OnFailure()
    {
        lock (_lock)
        {
            _failureCount++;
            _lastFailureTime = DateTime.UtcNow;
            
            if (_failureCount >= _failureThreshold)
            {
                _state = CircuitState.Open;
            }
        }
    }
    
    public CircuitState GetState() => _state;
}

// Using Polly library (recommended)
using Polly;
using Polly.CircuitBreaker;

public class PollyCircuitBreakerExample
{
    public static IAsyncPolicy<HttpResponseMessage> GetCircuitBreakerPolicy()
    {
        return Policy
            .HandleResult<HttpResponseMessage>(r => !r.IsSuccessStatusCode)
            .Or<HttpRequestException>()
            .CircuitBreakerAsync<HttpResponseMessage>(
                handledEventsAllowedBeforeBreaking: 3,
                durationOfBreak: TimeSpan.FromSeconds(30),
                onBreak: (outcome, timespan) =>
                {
                    Console.WriteLine(\`Circuit breaker opened for {	imespan.TotalSeconds} seconds\`);
                },
                onReset: () =>
                {
                    Console.WriteLine("Circuit breaker reset");
                }
            );
    }
}`}]},{id:"q2",question:"Explain the Retry pattern with exponential backoff in microservices.",answer:"The Retry pattern automatically retries failed requests with exponential backoff to handle transient failures. Exponential backoff increases delay between retries to avoid overwhelming a recovering service. Includes jitter to prevent thundering herd problem.",codeSnippets:[{language:"csharp",code:`// Retry with Exponential Backoff
public class RetryPolicy
{
    private int _maxRetries = 3;
    private double _backoffMultiplier = 2.0;
    private int _initialDelayMs = 100;
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        int retryCount = 0;
        
        while (true)
        {
            try
            {
                return await operation();
            }
            catch (Exception ex) when (ShouldRetry(ex) && retryCount < _maxRetries)
            {
                retryCount++;
                var delayMs = CalculateDelay(retryCount);
                Console.WriteLine(\`Retry attempt {retryCount} after {delayMs}ms\`);
                await Task.Delay(delayMs);
            }
        }
    }
    
    private int CalculateDelay(int attemptNumber)
    {
        // Exponential backoff: initialDelay * (backoffMultiplier ^ attemptNumber)
        var exponentialDelay = _initialDelayMs * Math.Pow(_backoffMultiplier, attemptNumber - 1);
        
        // Add jitter to prevent thundering herd
        var jitter = new Random().NextDouble() * 0.1 * exponentialDelay;
        
        return (int)(exponentialDelay + jitter);
    }
    
    private bool ShouldRetry(Exception ex)
    {
        // Retry on transient errors
        return ex is HttpRequestException || 
               ex is TimeoutException ||
               (ex is InvalidOperationException && ex.Message.Contains("transient"));
    }
}

// Using Polly
var retryPolicy = Policy
    .Handle<HttpRequestException>()
    .Or<TimeoutException>()
    .WaitAndRetryAsync(
        retryCount: 3,
        sleepDurationProvider: attempt => TimeSpan.FromMilliseconds(
            Math.Pow(2, attempt) * 100 + new Random().Next(0, 100)
        ),
        onRetry: (outcome, timespan, retryCount, context) =>
        {
            Console.WriteLine(\`Retry {retryCount} after {timespan.TotalMilliseconds}ms\`);
        }
    );

// Execute with retry
var response = await retryPolicy.ExecuteAsync(() => 
    httpClient.GetAsync("https://api.example.com/data")
);`}]},{id:"q3",question:"What is the Bulkhead pattern and how does it prevent resource exhaustion?",answer:"The Bulkhead pattern isolates resources (threads, connections) for different operations to prevent one failing operation from exhausting all resources. Named after compartments in ships that contain flooding. Limits concurrency and prevents cascading failures.",codeSnippets:[{language:"csharp",code:`// Bulkhead Pattern Implementation
public class BulkheadIsolation
{
    private readonly SemaphoreSlim _semaphore;
    private readonly string _name;
    
    public BulkheadIsolation(string name, int maxConcurrency)
    {
        _name = name;
        _semaphore = new SemaphoreSlim(maxConcurrency);
    }
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        if (!await _semaphore.WaitAsync(TimeSpan.FromSeconds(5)))
        {
            throw new BulkheadException($"Bulkhead '{_name}' is at capacity");
        }
        
        try
        {
            return await operation();
        }
        finally
        {
            _semaphore.Release();
        }
    }
}

// Usage
public class PaymentServiceClient
{
    private readonly BulkheadIsolation _bulkhead;
    private readonly HttpClient _httpClient;
    
    public PaymentServiceClient(HttpClient httpClient)
    {
        _httpClient = httpClient;
        // Limit to 10 concurrent requests to payment service
        _bulkhead = new BulkheadIsolation("PaymentService", maxConcurrency: 10);
    }
    
    public async Task<PaymentResult> ProcessPaymentAsync(Payment payment)
    {
        return await _bulkhead.ExecuteAsync(async () =>
        {
            var response = await _httpClient.PostAsJsonAsync(
                "https://payment-api.example.com/process",
                payment
            );
            return await response.Content.ReadAsAsync<PaymentResult>();
        });
    }
}

// Using Polly Bulkhead
var bulkheadPolicy = Policy.BulkheadAsync(
    maxParallelization: 10,
    maxQueuingActions: 5,
    onBulkheadRejectedAsync: context =>
    {
        Console.WriteLine("Bulkhead at capacity - request rejected");
        return Task.CompletedTask;
    }
);

// Using separate thread pools
public class ThreadPoolBulkhead
{
    private readonly TaskScheduler _taskScheduler;
    
    public ThreadPoolBulkhead(int maxDegreeOfParallelism)
    {
        _taskScheduler = new LimitedConcurrencyLevelTaskScheduler(maxDegreeOfParallelism);
    }
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        var task = operation();
        var schedulerTask = Task.Factory.StartNew(
            async () => await task,
            CancellationToken.None,
            TaskCreationOptions.DenyChildAttach,
            _taskScheduler
        );
        
        return await await schedulerTask;
    }
}`}]},{id:"q4",question:"What is the Timeout pattern and its importance in distributed systems?",answer:"The Timeout pattern sets maximum waiting time for operations to complete. Prevents hanging requests and resource leaks. Critical in distributed systems where network issues can cause indefinite waits. Combined with retries and circuit breakers for resilience.",codeSnippets:[{language:"csharp",code:`// Timeout Pattern
public class TimeoutPolicy
{
    public async Task<T> ExecuteWithTimeoutAsync<T>(
        Func<Task<T>> operation, 
        TimeSpan timeout)
    {
        using (var cts = new CancellationTokenSource(timeout))
        {
            try
            {
                return await operation();
            }
            catch (OperationCanceledException)
            {
                throw new TimeoutException($"Operation exceeded timeout of {timeout.TotalSeconds}s");
            }
        }
    }
}

// HTTP Client with Timeout
public class ResilientHttpClient
{
    private readonly HttpClient _httpClient;
    private readonly TimeSpan _timeout = TimeSpan.FromSeconds(10);
    
    public ResilientHttpClient()
    {
        _httpClient = new HttpClient();
        _httpClient.Timeout = _timeout;
    }
    
    public async Task<T> GetAsync<T>(string url)
    {
        try
        {
            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsAsync<T>();
        }
        catch (TaskCanceledException ex)
        {
            throw new TimeoutException($"Request to {url} timed out", ex);
        }
    }
}

// Polly Timeout Policy
var timeoutPolicy = Policy
    .TimeoutAsync<HttpResponseMessage>(
        timeout: TimeSpan.FromSeconds(10),
        timeoutStrategy: TimeoutStrategy.Aggressive
    );

// Combining multiple policies
var combinedPolicy = Policy.WrapAsync(
    timeoutPolicy,
    circuitBreakerPolicy,
    retryPolicy
);

// Usage
var result = await combinedPolicy.ExecuteAsync(async () =>
{
    return await httpClient.GetAsync("https://api.example.com/data");
});`}]},{id:"q5",question:"What is the Fallback pattern and how does it improve user experience?",answer:"The Fallback pattern provides alternative behavior when primary operations fail. Examples: return cached data, default values, or graceful degradation. Improves user experience by avoiding complete failures and maintaining partial functionality.",codeSnippets:[{language:"csharp",code:`// Fallback Pattern
public class FallbackPolicy
{
    public async Task<T> ExecuteWithFallbackAsync<T>(
        Func<Task<T>> primaryOperation,
        Func<Task<T>> fallbackOperation)
    {
        try
        {
            return await primaryOperation();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Primary operation failed: {ex.Message}. Using fallback.");
            return await fallbackOperation();
        }
    }
}

// Product Service with Cache Fallback
public class ProductService
{
    private readonly HttpClient _httpClient;
    private readonly IDistributedCache _cache;
    
    public async Task<Product> GetProductAsync(int productId)
    {
        try
        {
            // Primary: Call remote service
            var response = await _httpClient.GetAsync(
                $"https://products-api.example.com/{productId}"
            );
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsAsync<Product>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to fetch from remote service: {ex.Message}");
            
            // Fallback: Return cached data
            var cachedProduct = await _cache.GetAsync<Product>($"product:{productId}");
            if (cachedProduct != null)
                return cachedProduct;
            
            // Final fallback: Return default/empty product
            return new Product { Id = productId, Name = "Product Unavailable" };
        }
    }
}

// Using Polly Fallback
var fallbackPolicy = Policy
    .Handle<HttpRequestException>()
    .Or<TimeoutException>()
    .FallbackAsync<UserProfile>(async context =>
    {
        // Return default/cached profile
        return new UserProfile 
        { 
            Id = Guid.NewGuid(),
            Name = "Guest User",
            IsDefault = true 
        };
    });

// Combining with other policies
var combinedPolicy = Policy.WrapAsync(
    timeoutPolicy,
    retryPolicy,
    fallbackPolicy
);`}]}]},Eg={id:"microservices-data",name:"Data Management",questions:[{id:"q1",question:"What is the Database per Service pattern and its advantages/disadvantages?",answer:"The Database per Service pattern assigns each microservice its own database, ensuring loose coupling and independent scaling. Advantages: autonomy, technology flexibility, easier scaling. Disadvantages: distributed transactions, data consistency challenges, cross-service queries.",codeSnippets:[{language:"C#",code:`// Database per Service Pattern
// OrderService - PostgreSQL
public class OrderService
{
    private readonly IOrderRepository _orderRepository;
    
    public async Task<Order> CreateOrderAsync(CreateOrderRequest request)
    {
        var order = new Order
        {
            Id = Guid.NewGuid(),
            CustomerId = request.CustomerId,
            Items = request.Items,
            Total = CalculateTotal(request.Items)
        };
        
        // Order service manages its own database
        return await _orderRepository.SaveAsync(order);
    }
}

// UserService - MongoDB
public class UserService
{
    private readonly IMongoCollection<User> _userCollection;
    
    public async Task<User> GetUserAsync(Guid userId)
    {
        // User service uses different database technology
        return await _userCollection.Find(u => u.Id == userId).FirstOrDefaultAsync();
    }
}

// InventoryService - Redis
public class InventoryService
{
    private readonly IConnectionMultiplexer _redis;
    
    public async Task<Stock> GetStockAsync(string productId)
    {
        // Inventory uses Redis for fast access
        var db = _redis.GetDatabase();
        var stock = await db.StringGetAsync($"stock:{productId}");
        return JsonConvert.DeserializeObject<Stock>(stock.ToString());
    }
}

// Cross-Service Communication
public class OrderProcessingService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IInventoryServiceClient _inventoryServiceClient;
    
    public async Task ProcessOrderAsync(Guid orderId)
    {
        // Get order from OrderService
        var order = await _orderServiceClient.GetOrderAsync(orderId);
        
        // Get user from UserService (different database)
        var user = await _userServiceClient.GetUserAsync(order.CustomerId);
        
        // Check inventory from InventoryService (different database)
        var stock = await _inventoryServiceClient.GetStockAsync(order.Items[0].ProductId);
        
        // Combine data from multiple services
        var orderDetails = new OrderDetails
        {
            Order = order,
            Customer = user,
            AvailableStock = stock.Quantity
        };
    }
}

// Challenges: Distributed Transactions
public class TransactionalOrderService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IEventBus _eventBus;
    
    public async Task CreateOrderWithSagaAsync(CreateOrderRequest request)
    {
        var order = new Order { Id = Guid.NewGuid() };
        
        // Step 1: Save order in OrderService database
        await _orderRepository.SaveAsync(order);
        
        // Step 2: Publish event for other services to handle
        await _eventBus.PublishAsync(new OrderCreatedEvent { OrderId = order.Id });
        
        // Each service updates its own database independently
        // Saga pattern manages distributed transaction
    }
}`}]},{id:"q2",question:"What is the CQRS pattern specifically for data management in microservices?",answer:"CQRS (Command Query Responsibility Segregation) for microservices separates write and read data models. Commands write to operational database, queries read from denormalized read model. Enables different storage solutions for writes vs reads, independent scaling, and optimized performance.",codeSnippets:[{language:"csharp",code:`// CQRS Pattern for Data Management
// Write Model (Operational Data Store)
public class OrderWriteModel
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
    public decimal Total { get; set; }
    public OrderStatus Status { get; set; }
    public DateTime CreatedAt { get; set; }
}

// Read Model (Denormalized)
public class OrderReadModel
{
    public Guid Id { get; set; }
    public string CustomerName { get; set; }
    public string CustomerEmail { get; set; }
    public int ItemCount { get; set; }
    public decimal Total { get; set; }
    public string Status { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<string> ItemDescriptions { get; set; }
}

// Write Repository
public class OrderWriteRepository
{
    private readonly DbContext _writeDb;
    
    public async Task SaveAsync(OrderWriteModel order)
    {
        // Write to operational database
        _writeDb.Orders.Add(order);
        await _writeDb.SaveChangesAsync();
    }
}

// Read Repository (using different storage)
public class OrderReadRepository
{
    private readonly IElasticsearchClient _elasticsearch;
    
    public async Task<OrderReadModel> GetOrderAsync(Guid orderId)
    {
        // Query from denormalized read model in Elasticsearch
        var response = await _elasticsearch.SearchAsync<OrderReadModel>(s => s
            .Query(q => q.Term(t => t.Id, orderId))
        );
        
        return response.Documents.FirstOrDefault();
    }
    
    public async Task<List<OrderReadModel>> SearchOrdersAsync(string customerName)
    {
        // Optimized search across denormalized data
        var response = await _elasticsearch.SearchAsync<OrderReadModel>(s => s
            .Query(q => q.Match(m => m.Field(f => f.CustomerName).Query(customerName)))
        );
        
        return response.Documents.ToList();
    }
}

// Synchronization: Event-driven update of read model
public class OrderReadModelUpdater
{
    private readonly OrderReadRepository _readRepository;
    private readonly UserServiceClient _userServiceClient;
    private readonly IEventBus _eventBus;
    
    [EventSubscriber(EventType = "OrderCreated")]
    public async Task OnOrderCreatedAsync(OrderCreatedEvent @event)
    {
        // Get customer details from UserService
        var customer = await _userServiceClient.GetUserAsync(@event.CustomerId);
        
        // Build denormalized read model
        var readModel = new OrderReadModel
        {
            Id = @event.OrderId,
            CustomerName = customer.Name,
            CustomerEmail = customer.Email,
            ItemCount = @event.Items.Count,
            Total = @event.Total,
            Status = "Created",
            CreatedAt = @event.CreatedAt,
            ItemDescriptions = @event.Items.Select(i => i.Description).ToList()
        };
        
        // Update read model
        await _readRepository.SaveAsync(readModel);
    }
}

// CQRS Command Handler
public class CreateOrderCommandHandler
{
    private readonly OrderWriteRepository _writeRepository;
    private readonly IEventBus _eventBus;
    
    public async Task HandleAsync(CreateOrderCommand command)
    {
        var order = new OrderWriteModel
        {
            Id = Guid.NewGuid(),
            CustomerId = command.CustomerId,
            Items = command.Items,
            Status = OrderStatus.Pending
        };
        
        await _writeRepository.SaveAsync(order);
        
        // Publish event to trigger read model update
        await _eventBus.PublishAsync(new OrderCreatedEvent 
        { 
            OrderId = order.Id,
            CustomerId = order.CustomerId,
            Items = order.Items
        });
    }
}

// CQRS Query Handler
public class GetOrderDetailsQueryHandler
{
    private readonly OrderReadRepository _readRepository;
    
    public async Task<OrderReadModel> HandleAsync(GetOrderDetailsQuery query)
    {
        // Fast read from denormalized read model
        return await _readRepository.GetOrderAsync(query.OrderId);
    }
}`}]},{id:"q3",question:"What is Event Sourcing and how does it solve data consistency issues?",answer:"Event Sourcing stores all state changes as immutable events instead of current state. Provides audit trail, enables temporal queries, and simplifies data consistency. Challenges: eventual consistency handling, complex queries, storage of all events.",codeSnippets:[{language:"csharp",code:`// Event Sourcing for Data Management
// Domain Events
public abstract class DomainEvent
{
    public Guid AggregateId { get; set; }
    public long EventVersion { get; set; }
    public DateTime Timestamp { get; set; }
}

public class OrderCreatedEvent : DomainEvent
{
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
    public decimal Total { get; set; }
}

public class OrderShippedEvent : DomainEvent
{
    public string TrackingNumber { get; set; }
    public DateTime ShipDate { get; set; }
}

public class OrderCancelledEvent : DomainEvent
{
    public string Reason { get; set; }
}

// Event Store
public interface IEventStore
{
    Task AppendEventAsync(DomainEvent @event);
    Task<IEnumerable<DomainEvent>> GetEventsAsync(Guid aggregateId);
    Task<IEnumerable<DomainEvent>> GetAllEventsAsync();
}

public class EventStoreRepository : IEventStore
{
    private readonly DbContext _context;
    
    public async Task AppendEventAsync(DomainEvent @event)
    {
        var eventEntity = new EventEntity
        {
            Id = Guid.NewGuid(),
            AggregateId = @event.AggregateId,
            EventType = @event.GetType().Name,
            EventData = JsonConvert.SerializeObject(@event),
            Timestamp = DateTime.UtcNow
        };
        
        _context.Events.Add(eventEntity);
        await _context.SaveChangesAsync();
    }
    
    public async Task<IEnumerable<DomainEvent>> GetEventsAsync(Guid aggregateId)
    {
        var events = await _context.Events
            .Where(e => e.AggregateId == aggregateId)
            .OrderBy(e => e.Id)
            .ToListAsync();
        
        return events.Select(DeserializeEvent);
    }
    
    private DomainEvent DeserializeEvent(EventEntity entity)
    {
        return entity.EventType switch
        {
            nameof(OrderCreatedEvent) => JsonConvert.DeserializeObject<OrderCreatedEvent>(entity.EventData),
            nameof(OrderShippedEvent) => JsonConvert.DeserializeObject<OrderShippedEvent>(entity.EventData),
            nameof(OrderCancelledEvent) => JsonConvert.DeserializeObject<OrderCancelledEvent>(entity.EventData),
            _ => throw new InvalidOperationException($"Unknown event type: {entity.EventType}")
        };
    }
}

// Aggregate: Order
public class Order
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
    public OrderStatus Status { get; set; }
    public decimal Total { get; set; }
    
    private List<DomainEvent> _uncommittedEvents = new();
    
    // Rebuild from events
    public static Order FromHistory(IEnumerable<DomainEvent> events)
    {
        var order = new Order { Items = new List<OrderItem>() };
        
        foreach (var @event in events)
        {
            order.ApplyEvent(@event);
        }
        
        return order;
    }
    
    public void PlaceOrder(Guid customerId, List<OrderItem> items)
    {
        var @event = new OrderCreatedEvent
        {
            AggregateId = this.Id,
            CustomerId = customerId,
            Items = items,
            Total = items.Sum(i => i.Price * i.Quantity)
        };
        
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    public void Ship(string trackingNumber)
    {
        if (this.Status != OrderStatus.Confirmed)
            throw new InvalidOperationException("Only confirmed orders can be shipped");
        
        var @event = new OrderShippedEvent
        {
            AggregateId = this.Id,
            TrackingNumber = trackingNumber,
            ShipDate = DateTime.UtcNow
        };
        
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    private void ApplyEvent(DomainEvent @event)
    {
        switch (@event)
        {
            case OrderCreatedEvent created:
                this.Id = created.AggregateId;
                this.CustomerId = created.CustomerId;
                this.Items = created.Items;
                this.Total = created.Total;
                this.Status = OrderStatus.Pending;
                break;
            case OrderShippedEvent shipped:
                this.Status = OrderStatus.Shipped;
                break;
            case OrderCancelledEvent cancelled:
                this.Status = OrderStatus.Cancelled;
                break;
        }
    }
    
    public IEnumerable<DomainEvent> GetUncommittedEvents() => _uncommittedEvents;
}

// Order Repository using Event Store
public class OrderRepository
{
    private readonly IEventStore _eventStore;
    
    public async Task SaveAsync(Order order)
    {
        foreach (var @event in order.GetUncommittedEvents())
        {
            await _eventStore.AppendEventAsync(@event);
        }
    }
    
    public async Task<Order> GetByIdAsync(Guid orderId)
    {
        var events = await _eventStore.GetEventsAsync(orderId);
        return Order.FromHistory(events);
    }
    
    // Temporal query: Get order state at specific point in time
    public async Task<Order> GetByIdAtTimeAsync(Guid orderId, DateTime timestamp)
    {
        var events = await _eventStore.GetEventsAsync(orderId);
        var eventsAtTime = events.Where(e => e.Timestamp <= timestamp);
        return Order.FromHistory(eventsAtTime);
    }
}`}]},{id:"q4",question:"What is the API Composition pattern for querying data across microservices?",answer:"The API Composition pattern queries multiple microservices and aggregates results at the client or gateway level. Client makes multiple requests and combines results. Alternative to database joins in monoliths. Challenges: network latency, handling partial failures, N+1 queries.",codeSnippets:[{language:"csharp",code:`// API Composition Pattern
// Individual Service Clients
public interface IOrderServiceClient
{
    Task<OrderDto> GetOrderAsync(Guid orderId);
}

public interface IUserServiceClient
{
    Task<UserDto> GetUserAsync(Guid userId);
}

public interface IProductServiceClient
{
    Task<ProductDto> GetProductAsync(string productId);
}

// API Composition: Aggregate data from multiple services
public class OrderCompositionService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IProductServiceClient _productServiceClient;
    private readonly ILogger<OrderCompositionService> _logger;
    
    public async Task<OrderDetailDto> GetOrderDetailsAsync(Guid orderId)
    {
        try
        {
            // Get order details
            var order = await _orderServiceClient.GetOrderAsync(orderId);
            
            // Parallel calls to other services
            var userTask = _userServiceClient.GetUserAsync(order.CustomerId);
            var productTasks = order.Items.Select(item => 
                _productServiceClient.GetProductAsync(item.ProductId)
            );
            
            await Task.WhenAll(userTask, Task.WhenAll(productTasks));
            
            var user = await userTask;
            var products = await Task.WhenAll(productTasks);
            
            // Compose the response
            return new OrderDetailDto
            {
                OrderId = order.Id,
                CustomerName = user.Name,
                CustomerEmail = user.Email,
                Items = order.Items.Select((item, index) => new OrderItemDetailDto
                {
                    ProductName = products[index].Name,
                    ProductDescription = products[index].Description,
                    Quantity = item.Quantity,
                    UnitPrice = item.Price
                }).ToList(),
                Total = order.Total
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Failed to compose order details for {orderId}");
            throw;
        }
    }
}

// Optimized composition with caching
public class CachedOrderCompositionService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IProductServiceClient _productServiceClient;
    private readonly IDistributedCache _cache;
    
    public async Task<OrderDetailDto> GetOrderDetailsAsync(Guid orderId)
    {
        var cacheKey = $"order:{orderId}";
        
        // Try to get from cache
        var cached = await _cache.GetAsync<OrderDetailDto>(cacheKey);
        if (cached != null)
            return cached;
        
        // Compose from services
        var order = await _orderServiceClient.GetOrderAsync(orderId);
        var user = await _userServiceClient.GetUserAsync(order.CustomerId);
        
        // Get products in parallel
        var products = await Task.WhenAll(
            order.Items.Select(item => _productServiceClient.GetProductAsync(item.ProductId))
        );
        
        var result = new OrderDetailDto
        {
            OrderId = order.Id,
            CustomerName = user.Name,
            Items = order.Items.Select((item, i) => new OrderItemDetailDto
            {
                ProductName = products[i].Name,
                Quantity = item.Quantity,
                UnitPrice = item.Price
            }).ToList()
        };
        
        // Cache for 1 hour
        await _cache.SetAsync(cacheKey, result, TimeSpan.FromHours(1));
        
        return result;
    }
}

// Timeout and fallback handling
public class ResilientOrderCompositionService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IDistributedCache _cache;
    
    public async Task<OrderDetailDto> GetOrderDetailsAsync(Guid orderId)
    {
        var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
        
        try
        {
            var order = await _orderServiceClient.GetOrderAsync(orderId);
            var user = await _userServiceClient.GetUserAsync(order.CustomerId);
            
            return new OrderDetailDto
            {
                OrderId = order.Id,
                CustomerName = user.Name,
                Items = order.Items
            };
        }
        catch (OperationCanceledException)
        {
            // Timeout: return partial data from cache
            var cachedOrder = await _cache.GetAsync<OrderDto>($"order:{orderId}");
            if (cachedOrder != null)
            {
                return new OrderDetailDto
                {
                    OrderId = cachedOrder.Id,
                    CustomerName = "Unknown",
                    Items = cachedOrder.Items
                };
            }
            throw;
        }
    }
}`}]},{id:"q5",question:"What is the Command Query Responsibility Segregation and Event Sourcing integration?",answer:"Combining CQRS with Event Sourcing provides powerful data management: events drive the system, commands modify events, read models derive from events. Enables independent scaling of reads/writes, audit trail, temporal queries, and eventual consistency.",codeSnippets:[{language:"csharp",code:`// CQRS + Event Sourcing Integration
// Command (Write)
public abstract class Command
{
    public Guid CommandId { get; } = Guid.NewGuid();
    public DateTime CreatedAt { get; } = DateTime.UtcNow;
}

public class CreateOrderCommand : Command
{
    public Guid CustomerId { get; set; }
    public List<OrderLineItem> Items { get; set; }
}

// Domain Event (Source of Truth)
public class OrderCreatedEvent : DomainEvent
{
    public Guid CustomerId { get; set; }
    public List<OrderLineItem> Items { get; set; }
    public decimal Total { get; set; }
}

// Command Handler: Generates Events
public class OrderCommandHandler
{
    private readonly IEventStore _eventStore;
    private readonly IEventBus _eventBus;
    
    public async Task HandleAsync(CreateOrderCommand command)
    {
        var orderId = Guid.NewGuid();
        var total = command.Items.Sum(i => i.Price * i.Quantity);
        
        var @event = new OrderCreatedEvent
        {
            AggregateId = orderId,
            CustomerId = command.CustomerId,
            Items = command.Items,
            Total = total,
            Timestamp = DateTime.UtcNow
        };
        
        // Save to event store
        await _eventStore.AppendEventAsync(@event);
        
        // Publish event for subscribers
        await _eventBus.PublishAsync(@event);
    }
}

// Event Handlers: Update Read Models
public class OrderReadModelEventHandler
{
    private readonly IOrderReadRepository _readRepository;
    private readonly IUserServiceClient _userServiceClient;
    
    [EventSubscriber]
    public async Task OnOrderCreatedAsync(OrderCreatedEvent @event)
    {
        var customer = await _userServiceClient.GetUserAsync(@event.CustomerId);
        
        var readModel = new OrderReadModel
        {
            Id = @event.AggregateId,
            CustomerName = customer.Name,
            CustomerEmail = customer.Email,
            ItemCount = @event.Items.Count,
            Total = @event.Total,
            CreatedAt = @event.Timestamp
        };
        
        // Update read model in optimized store (Elasticsearch, etc.)
        await _readRepository.SaveAsync(readModel);
    }
}

// Query (Read)
public abstract class Query<TResult>
{
}

public class GetOrderDetailsQuery : Query<OrderDetailsDto>
{
    public Guid OrderId { get; set; }
}

// Query Handler: Reads from Read Model
public class OrderQueryHandler
{
    private readonly IOrderReadRepository _readRepository;
    
    public async Task<OrderDetailsDto> HandleAsync(GetOrderDetailsQuery query)
    {
        // Fast read from denormalized read model
        return await _readRepository.GetOrderDetailsAsync(query.OrderId);
    }
}

// Full Architecture: Command-Event-Query Flow
public class OrderService
{
    private readonly ICommandBus _commandBus;
    private readonly IQueryBus _queryBus;
    private readonly IEventBus _eventBus;
    
    // Write Operation
    public async Task<Guid> CreateOrderAsync(CreateOrderRequest request)
    {
        var command = new CreateOrderCommand
        {
            CustomerId = request.CustomerId,
            Items = request.Items
        };
        
        // Send command to handler
        // Handler creates OrderCreatedEvent
        // Event is stored and published
        // Read models updated via event handlers
        await _commandBus.SendAsync(command);
        
        return Guid.NewGuid(); // Return order ID
    }
    
    // Read Operation
    public async Task<OrderDetailsDto> GetOrderDetailsAsync(Guid orderId)
    {
        var query = new GetOrderDetailsQuery { OrderId = orderId };
        
        // Query reads from optimized read model
        return await _queryBus.SendAsync(query);
    }
    
    // Temporal Query: Get order state at specific time
    public async Task<OrderDetailsDto> GetOrderDetailsAtTimeAsync(Guid orderId, DateTime timestamp)
    {
        // Rebuild from event store at specific timestamp
        var events = await _eventStore.GetEventsAsync(orderId);
        var relevantEvents = events.Where(e => e.Timestamp <= timestamp);
        
        var order = Order.FromHistory(relevantEvents);
        
        return new OrderDetailsDto { /* ... */ };
    }
}

// Eventual Consistency Handling
public class EventProjectionService : IHostedService
{
    private readonly IEventStore _eventStore;
    private readonly IOrderReadRepository _readRepository;
    
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        // Continuously project new events to read models
        while (!cancellationToken.IsCancellationRequested)
        {
            var newEvents = await _eventStore.GetUnprocessedEventsAsync();
            
            foreach (var @event in newEvents)
            {
                // Update read model for this event
                await ProjectEventToReadModelAsync(@event);
                await _eventStore.MarkAsProcessedAsync(@event.Id);
            }
            
            await Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
        }
    }
    
    private async Task ProjectEventToReadModelAsync(DomainEvent @event)
    {
        switch (@event)
        {
            case OrderCreatedEvent orderCreated:
                // Update order read model
                break;
            case OrderShippedEvent orderShipped:
                // Update order read model status
                break;
        }
    }
    
    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}`}]}]},Dg={id:"microservices",name:"Microservices",topics:[Lg,Tg,Eg]},Rg={id:"csharp-oops-concepts",name:"OOPs Concepts",questions:[{id:"q1",question:"What are the four pillars of OOP and explain each one briefly?",answer:"The four pillars are: (1) Encapsulation - bundling data and methods, hiding internals with access modifiers. (2) Inheritance - deriving new classes from existing ones, reusing code. (3) Polymorphism - objects can take many forms, same method name different behavior. (4) Abstraction - hiding complexity, exposing only essential features through interfaces/abstract classes.",codeSnippets:[{language:"csharp",code:`using System;

// 1. ENCAPSULATION - Hide internals, expose through properties
public class BankAccount
{
    private decimal balance; // Hidden
    
    public decimal Balance
    {
        get { return balance; }
        private set { balance = value; } // Only internal access
    }
    
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount; // Controlled modification
    }
    
    public bool Withdraw(decimal amount)
    {
        if (amount <= balance)
        {
            balance -= amount;
            return true;
        }
        return false;
    }
}

// Usage
var account = new BankAccount();
account.Deposit(1000);
Console.WriteLine(account.Balance); // 1000
account.Withdraw(200); // Verified before withdrawal
// account.balance = -999; // ERROR: Can't access private field

// 2. INHERITANCE - Derive from base class
public class Animal
{
    public string Name { get; set; }
    
    public virtual void MakeSound()
    {
        Console.WriteLine("Generic animal sound");
    }
}

public class Dog : Animal // Inherits from Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Usage
Animal dog = new Dog { Name = "Buddy" };
dog.MakeSound(); // Woof! (Dog's implementation)

// 3. POLYMORPHISM - Same interface, different behavior
public void AnimalSounds()
{
    var animals = new Animal[]
    {
        new Dog { Name = "Buddy" },
        new Cat { Name = "Whiskers" },
        new Animal { Name = "Generic" }
    };
    
    foreach (var animal in animals)
    {
        animal.MakeSound(); // Calls appropriate implementation
        // Woof!
        // Meow!
        // Generic animal sound
    }
}

// 4. ABSTRACTION - Hide complexity, show only what's needed
public abstract class Vehicle
{
    public abstract void Start(); // Must be implemented
    public abstract void Stop();
    
    public void Drive()
    {
        Start();
        Console.WriteLine("Driving...");
        Stop();
    }
}

public class Car : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("Engine started");
    }
    
    public override void Stop()
    {
        Console.WriteLine("Engine stopped");
    }
}

// Usage - User doesn't need to know how Start/Stop work
var car = new Car();
car.Drive(); // Abstracted logic`}]},{id:"q2",question:"What is the difference between abstraction and encapsulation? Are they the same?",answer:"No, they're different. Encapsulation is about hiding implementation details and controlling access using access modifiers (private, public, protected). Abstraction is about hiding complexity and showing only essential features through abstract classes or interfaces. Encapsulation is HOW you hide (access modifiers), abstraction is WHAT you hide (complexity).",codeSnippets:[{language:"csharp",code:`using System;

// ENCAPSULATION - HOW to hide (using access modifiers)
public class Person
{
    // Private - hidden from outside
    private string socialSecurityNumber;
    private decimal salary;
    
    // Public property with validation
    public string Name { get; set; }
    
    public decimal Salary
    {
        get { return salary; }
        set 
        { 
            if (value >= 0)
                salary = value; // Controlled access
        }
    }
    
    public bool VerifySocialSecurityNumber(string ssn)
    {
        return socialSecurityNumber == ssn; // Only method can access
    }
}

// ABSTRACTION - WHAT to hide (using abstract classes/interfaces)
// Hides how different shapes calculate area
public abstract class Shape
{
    public abstract double GetArea(); // User doesn't need to know how
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    public override double GetArea()
    {
        return Math.PI * radius * radius; // Complex calculation hidden
    }
}

public class Rectangle : Shape
{
    private double width, height;
    
    public Rectangle(double w, double h) 
    { 
        width = w; 
        height = h; 
    }
    
    public override double GetArea()
    {
        return width * height; // Different calculation
    }
}

// Usage - Client doesn't care how area is calculated
public void CalculateAreas()
{
    Shape circle = new Circle(5);
    Shape rectangle = new Rectangle(4, 6);
    
    Console.WriteLine(circle.GetArea()); // π*5*5 (calculation hidden)
    Console.WriteLine(rectangle.GetArea()); // 4*6 (calculation hidden)
}

// Real-world comparison
// ENCAPSULATION: BankAccount hides balance with private field
// ABSTRACTION: IPaymentProcessor hides how payments are processed

public interface IPaymentProcessor
{
    bool ProcessPayment(decimal amount); // What it does
    // Client doesn't know if it uses Stripe, PayPal, or bank transfer
}

public class StripePaymentProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        // Complex Stripe API calls hidden here
        Console.WriteLine($"Processing {amount} via Stripe");
        return true;
    }
}

public class PayPalPaymentProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        // Complex PayPal API calls hidden here
        Console.WriteLine($"Processing {amount} via PayPal");
        return true;
    }
}

// Key differences:
// ENCAPSULATION                           ABSTRACTION
// Hide data/implementation               Hide complexity
// Use: private, protected, public        Use: abstract, interface
// Achieved with: fields, properties      Achieved with: abstract class, interface
// Controls: Access to data               Controls: Interface/contract
// "How" something works                  "What" something does`}]},{id:"q3",question:"What is the difference between Abstract Class and Interface? When to use each?",answer:"Abstract class can have implementation, state (fields), constructors, access modifiers. Interface only declares contracts, no implementation (except default methods in modern C#). Use abstract class for related classes sharing code, use interface for unrelated classes sharing behavior. A class can implement multiple interfaces but inherit from one abstract class.",codeSnippets:[{language:"csharp",code:`using System;

// ABSTRACT CLASS - Partial implementation, shared state
public abstract class Employee
{
    // Fields (state) - Abstract class can have
    protected string name;
    protected decimal salary;
    
    // Constructor - Abstract class can have
    protected Employee(string name, decimal salary)
    {
        this.name = name;
        this.salary = salary;
    }
    
    // Concrete method - Abstract class can have implementation
    public void PrintDetails()
    {
        Console.WriteLine($"Name: {name}");
    }
    
    // Abstract method - Must be implemented by derived class
    public abstract decimal CalculateBonus();
    
    // Virtual method - Can be overridden
    public virtual void Work()
    {
        Console.WriteLine($"{name} is working");
    }
}

public class Manager : Employee
{
    private int teamSize;
    
    public Manager(string name, decimal salary, int team) 
        : base(name, salary)
    {
        teamSize = team;
    }
    
    public override decimal CalculateBonus()
    {
        return salary * 0.2m; // 20% bonus
    }
    
    public override void Work()
    {
        Console.WriteLine($"{name} is managing {teamSize} people");
    }
}

// INTERFACE - Contract only, no implementation
public interface IPayable
{
    decimal GetSalary();
    void Pay();
}

public interface IManageable
{
    int GetTeamSize();
    void Manage();
}

// One class can implement multiple interfaces
public class Contractor : IPayable, IManageable
{
    private decimal hourlyRate;
    private int hoursWorked;
    private int teamSize;
    
    public Contractor(decimal rate, int hours, int team)
    {
        hourlyRate = rate;
        hoursWorked = hours;
        teamSize = team;
    }
    
    public decimal GetSalary()
    {
        return hourlyRate * hoursWorked;
    }
    
    public void Pay()
    {
        Console.WriteLine($"Paying contractor: {GetSalary()}");
    }
    
    public int GetTeamSize()
    {
        return teamSize;
    }
    
    public void Manage()
    {
        Console.WriteLine($"Managing {teamSize} contractors");
    }
}

// Comparison
Console.WriteLine("ABSTRACT CLASS vs INTERFACE:");
Console.WriteLine("Feature              Abstract Class      Interface");
Console.WriteLine("Implementation       Can have            None (C#7) or default");
Console.WriteLine("Fields               Yes                 No");
Console.WriteLine("Constructors         Yes                 No");
Console.WriteLine("Access modifiers     public/private      All public");
Console.WriteLine("Inheritance          One abstract class  Multiple interfaces");
Console.WriteLine("When to use          Related classes     Unrelated contract");
Console.WriteLine("Purpose              IS-A relationship   CAN-DO capability");

// Modern C# 8+ - Interfaces can have default implementation
public interface IWorker
{
    void DoWork(); // Abstract
    
    void TakeBreak() // Default implementation
    {
        Console.WriteLine("Taking a break");
    }
}

public class Worker : IWorker
{
    public void DoWork()
    {
        Console.WriteLine("Working");
    }
    
    // Inherits TakeBreak() from interface
}

// When to use Abstract Class
public abstract class Vehicle
{
    // Shared fields
    protected string model;
    protected int year;
    
    // Shared implementation
    public void Register()
    {
        Console.WriteLine("Registering vehicle");
    }
    
    // Abstract method
    public abstract void Drive();
}

public class Car : Vehicle { /* ... */ }
public class Truck : Vehicle { /* ... */ }
// Car and Truck are related through Vehicle

// When to use Interface
public interface IComparable
{
    int CompareTo(object obj);
}

public interface IDrawable
{
    void Draw();
}

public class Circle : IComparable, IDrawable
{
    public int CompareTo(object obj)
    {
        // Implementation
        return 0;
    }
    
    public void Draw()
    {
        // Implementation
    }
}

// Circle doesn't have IS-A relationship with IComparable or IDrawable
// But it CAN compare and CAN draw

// Best practice decision:
// Use Abstract Class when:
// - Classes are closely related
// - Need shared fields/state
// - Need non-public members
// - Need constructors or initialization logic

// Use Interface when:
// - Unrelated classes need same contract
// - Need multiple inheritance of type
// - Defining capability/behavior only
// - Need polymorphic behavior across unrelated types`}]},{id:"q4",question:"What is polymorphism? Explain compile-time (static) and runtime (dynamic) polymorphism.",answer:"Polymorphism means 'many forms'. Compile-time (static) polymorphism is method overloading - multiple methods with same name but different parameters, resolved at compile time. Runtime (dynamic) polymorphism is method overriding - child class overrides parent method, resolved at runtime based on actual object type.",codeSnippets:[{language:"csharp",code:`using System;

// ========== COMPILE-TIME POLYMORPHISM (Method Overloading) ==========
// Same method name, different parameters
public class Calculator
{
    // Add for two integers
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    // Add for three integers (different parameter count)
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
    
    // Add for two doubles (different parameter type)
    public double Add(double a, double b)
    {
        return a + b;
    }
    
    // Add for string (different parameter type)
    public string Add(string a, string b)
    {
        return a + b;
    }
}

// Usage - Compiler decides which method to call
var calc = new Calculator();

int result1 = calc.Add(5, 3); // Calls Add(int, int)
int result2 = calc.Add(5, 3, 2); // Calls Add(int, int, int)
double result3 = calc.Add(5.5, 3.2); // Calls Add(double, double)
string result4 = calc.Add("Hello", "World"); // Calls Add(string, string)

// Compile-time polymorphism with different return types
public class Printer
{
    // Overload by parameter type
    public void Print(int value)
    {
        Console.WriteLine($"Printing integer: {value}");
    }
    
    public void Print(string value)
    {
        Console.WriteLine($"Printing string: {value}");
    }
    
    public void Print(double value)
    {
        Console.WriteLine($"Printing double: {value}");
    }
}

// ========== RUNTIME POLYMORPHISM (Method Overriding) ==========
// Base class with virtual method
public abstract class Shape
{
    public string Name { get; set; }
    
    // Virtual method - can be overridden
    public virtual void Draw()
    {
        Console.WriteLine("Drawing generic shape");
    }
    
    public virtual double GetArea()
    {
        return 0;
    }
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    // Override - child class implementation
    public override void Draw()
    {
        Console.WriteLine("Drawing circle");
    }
    
    public override double GetArea()
    {
        return Math.PI * radius * radius;
    }
}

public class Rectangle : Shape
{
    private double width, height;
    
    public Rectangle(double w, double h)
    {
        width = w;
        height = h;
    }
    
    public override void Draw()
    {
        Console.WriteLine("Drawing rectangle");
    }
    
    public override double GetArea()
    {
        return width * height;
    }
}

// Runtime polymorphism - type determined at runtime
public void DemoRuntimePolymorphism()
{
    Shape[] shapes = new Shape[]
    {
        new Circle(5),
        new Rectangle(4, 6),
        new Circle(3)
    };
    
    // Runtime decides which implementation to call
    foreach (var shape in shapes)
    {
        shape.Draw(); // Calls correct Draw() based on actual type
        // Drawing circle
        // Drawing rectangle
        // Drawing circle
    }
}

// Key differences
Console.WriteLine("COMPILE-TIME vs RUNTIME POLYMORPHISM:");
Console.WriteLine("Aspect              Compile-Time        Runtime");
Console.WriteLine("Also called         Overloading         Overriding");
Console.WriteLine("When resolved       At compile time     At runtime");
Console.WriteLine("Same method name    Yes, diff params    Yes, same params");
Console.WriteLine("Virtual keyword     Not needed          Required");
Console.WriteLine("Use                 Operator +          shape.Draw()");
Console.WriteLine("Performance         Slightly faster     Slightly slower");

// Compile-time polymorphism example
public void CompileTimeExample()
{
    var printer = new Printer();
    
    // Compiler knows at compile time which Print() to call
    printer.Print(42); // Print(int)
    printer.Print("Hello"); // Print(string)
    printer.Print(3.14); // Print(double)
}

// Runtime polymorphism example
public void RuntimeExample()
{
    Shape circle = new Circle(5); // circle is Shape reference
    Shape rectangle = new Rectangle(4, 6); // rect is Shape reference
    
    // Runtime (not compile time) determines actual type
    circle.Draw(); // Calls Circle.Draw()
    rectangle.Draw(); // Calls Rectangle.Draw()
    
    // This is why virtual keyword is important
    // Without virtual, would always call Shape.Draw()
}

// Non-virtual method - NOT polymorphic
public class Parent
{
    public void Method()
    {
        Console.WriteLine("Parent method");
    }
}

public class Child : Parent
{
    public new void Method() // Uses "new", not "override"
    {
        Console.WriteLine("Child method");
    }
}

var obj = new Parent();
obj.Method(); // Parent method

Parent childRef = new Child();
childRef.Method(); // Still Parent method (NOT polymorphic)
// Because Method() is not virtual

// Virtual method - IS polymorphic
public class Parent2
{
    public virtual void Method()
    {
        Console.WriteLine("Parent method");
    }
}

public class Child2 : Parent2
{
    public override void Method()
    {
        Console.WriteLine("Child method");
    }
}

Parent2 childRef2 = new Child2();
childRef2.Method(); // Child method (IS polymorphic)`}]},{id:"q5",question:"What are access modifiers? Explain public, private, protected, and internal.",answer:"Access modifiers control where code can be accessed. public - accessible everywhere. private - accessible only within same class. protected - accessible in same class and derived classes. internal - accessible within same assembly. private protected - only in same class or derived classes in same assembly.",codeSnippets:[{language:"csharp",code:`using System;

public class AccessModifiersExample
{
    // PUBLIC - Accessible from anywhere
    public string PublicField;
    public void PublicMethod()
    {
        Console.WriteLine("Public method");
    }
    
    // PRIVATE - Accessible only within this class
    private string privateField;
    private void PrivateMethod()
    {
        Console.WriteLine("Private method");
    }
    
    // PROTECTED - Accessible in this class and derived classes
    protected string protectedField;
    protected void ProtectedMethod()
    {
        Console.WriteLine("Protected method");
    }
    
    // INTERNAL - Accessible within same assembly
    internal string internalField;
    internal void InternalMethod()
    {
        Console.WriteLine("Internal method");
    }
    
    // PRIVATE PROTECTED - Same class or derived in same assembly
    private protected string privateProtectedField;
    
    // PROTECTED INTERNAL - This class, derived classes, same assembly
    protected internal string protectedInternalField;
}

// Derived class demonstrates access
public class DerivedClass : AccessModifiersExample
{
    public void TestAccess()
    {
        // ✓ Can access public
        PublicField = "accessible";
        PublicMethod();
        
        // ✗ Cannot access private
        // privateField = "not accessible"; // ERROR
        // PrivateMethod(); // ERROR
        
        // ✓ Can access protected (because we're derived)
        protectedField = "accessible";
        ProtectedMethod();
        
        // ✓ Can access internal (same assembly)
        internalField = "accessible";
        InternalMethod();
        
        // ✓ Can access private protected (derived + same assembly)
        privateProtectedField = "accessible";
    }
}

// Another class in same assembly
public class OtherClass
{
    public void TestAccess()
    {
        var obj = new AccessModifiersExample();
        
        // ✓ Can access public
        obj.PublicField = "accessible";
        obj.PublicMethod();
        
        // ✗ Cannot access private
        // obj.privateField = "not accessible"; // ERROR
        // obj.PrivateMethod(); // ERROR
        
        // ✗ Cannot access protected (not derived)
        // obj.protectedField = "not accessible"; // ERROR
        // obj.ProtectedMethod(); // ERROR
        
        // ✓ Can access internal (same assembly)
        obj.internalField = "accessible";
        obj.InternalMethod();
        
        // ✗ Cannot access private protected (not derived)
        // obj.privateProtectedField = "not accessible"; // ERROR
    }
}

// Encapsulation example - Using private fields with public property
public class BankAccount
{
    private decimal balance; // Private - hidden
    
    public decimal Balance // Public property - controlled access
    {
        get { return balance; }
        private set { balance = value; } // Only internal modification
    }
    
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount;
    }
    
    public bool Withdraw(decimal amount)
    {
        if (amount > 0 && amount <= balance)
        {
            balance -= amount;
            return true;
        }
        return false;
    }
}

// Usage
var account = new BankAccount();
account.Deposit(1000);
Console.WriteLine(account.Balance); // Can read: 1000
// account.Balance = -500; // ERROR: Can't set (private setter)
// account.balance = -500; // ERROR: Can't access private field

// Access modifier summary table
Console.WriteLine("Access Modifier Summary:");
Console.WriteLine("Modifier             Same Class  Derived Class  Same Assembly  Different Assembly");
Console.WriteLine("public               ✓           ✓              ✓              ✓");
Console.WriteLine("protected            ✓           ✓              ✗              ✗");
Console.WriteLine("internal             ✓           ✗              ✓              ✗");
Console.WriteLine("private              ✓           ✗              ✗              ✗");
Console.WriteLine("protected internal   ✓           ✓              ✓              ✗");
Console.WriteLine("private protected    ✓           ✓              ✗              ✗");

// Best practices
public class GoodEncapsulation
{
    // Private fields - hide implementation
    private List<Item> items = new();
    private decimal total;
    
    // Public property - controlled access
    public IReadOnlyList<Item> Items
    {
        get { return items.AsReadOnly(); }
    }
    
    public decimal Total
    {
        get { return total; }
    }
    
    // Public methods - define behavior
    public void AddItem(Item item)
    {
        items.Add(item);
        total += item.Price;
    }
    
    public void Clear()
    {
        items.Clear();
        total = 0;
    }
}

// Protected for derived classes
public abstract class DataAccessBase
{
    protected string connectionString; // Available to derived classes
    
    protected void ExecuteQuery(string sql)
    {
        // Implementation
    }
}

public class UserRepository : DataAccessBase
{
    public List<User> GetAllUsers()
    {
        ExecuteQuery("SELECT * FROM Users"); // Can use protected method
        return new List<User>();
    }
}`}]},{id:"q6",question:"What is the difference between virtual, abstract, and override keywords?",answer:"virtual - base class method can be overridden (optional). abstract - must be overridden in derived class (no implementation). override - implementing the virtual/abstract method in derived class. virtual allows optional override, abstract requires it. Abstract methods have no body, virtual methods do.",codeSnippets:[{language:"csharp",code:`using System;

// ========== VIRTUAL - Optional override ==========
public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Some generic sound");
    }
    
    public virtual void Move()
    {
        Console.WriteLine("Moving");
    }
}

public class Dog : Animal
{
    // Override is optional - if not overridden, uses base implementation
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
    
    // Don't override Move - uses Animal.Move()
}

var dog = new Dog();
dog.MakeSound(); // Woof! (overridden)
dog.Move(); // Moving (not overridden, uses base)

// ========== ABSTRACT - Required override ==========
public abstract class Shape
{
    // Abstract method - NO implementation, must be overridden
    public abstract double GetArea();
    
    // Abstract methods must be overridden by derived class
    public abstract void Draw();
    
    // Can still have concrete methods
    public void Describe()
    {
        Console.WriteLine($"Area: {GetArea()}");
    }
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    // MUST override abstract methods
    public override double GetArea()
    {
        return Math.PI * radius * radius;
    }
    
    public override void Draw()
    {
        Console.WriteLine("Drawing circle");
    }
}

// Cannot instantiate abstract class
// var shape = new Shape(); // ERROR

// But can instantiate concrete derived class
var circle = new Circle(5);
circle.Describe(); // Uses Describe() from base

// ========== Comparison Table ==========
Console.WriteLine("VIRTUAL vs ABSTRACT:");
Console.WriteLine("Aspect               Virtual             Abstract");
Console.WriteLine("Implementation       Has body            No body (;)");
Console.WriteLine("Override required    Optional            Required");
Console.WriteLine("Can instantiate      Yes                 No");
Console.WriteLine("Use in               Regular class       Only abstract class");
Console.WriteLine("Keyword combo        virtual             abstract");

// Real-world example: Vehicle hierarchy
public abstract class Vehicle
{
    // Abstract - must override
    public abstract void Start();
    public abstract void Stop();
    
    // Virtual - can override
    public virtual void Drive()
    {
        Start();
        Console.WriteLine("Driving...");
        Stop();
    }
}

public class Car : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("Car engine starts");
    }
    
    public override void Stop()
    {
        Console.WriteLine("Car engine stops");
    }
    
    // Don't override Drive - uses base implementation
}

public class Bicycle : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("Ready to pedal");
    }
    
    public override void Stop()
    {
        Console.WriteLine("Stopped pedaling");
    }
    
    // Override Drive for different behavior
    public override void Drive()
    {
        Console.WriteLine("Pedaling...");
    }
}

// Another example: Payment processors
public abstract class PaymentProcessor
{
    // Abstract - must override
    public abstract bool ValidatePayment(decimal amount);
    
    // Virtual - optional override
    public virtual void RecordTransaction(string description)
    {
        Console.WriteLine($"Recording: {description}");
    }
    
    // Template method using abstract method
    public void ProcessPayment(decimal amount)
    {
        if (ValidatePayment(amount))
        {
            Console.WriteLine("Payment successful");
            RecordTransaction($"Charge: {amount}");
        }
        else
        {
            Console.WriteLine("Payment failed");
        }
    }
}

public class CreditCardProcessor : PaymentProcessor
{
    public override bool ValidatePayment(decimal amount)
    {
        // Credit card specific validation
        return amount > 0 && amount < 100000;
    }
    
    // Don't override RecordTransaction - uses base
}

public class BankTransferProcessor : PaymentProcessor
{
    public override bool ValidatePayment(decimal amount)
    {
        // Bank transfer specific validation
        return amount > 100 && amount < 50000;
    }
    
    // Override for different recording
    public override void RecordTransaction(string description)
    {
        Console.WriteLine($"Recording in bank ledger: {description}");
    }
}

// Usage
PaymentProcessor ccProcessor = new CreditCardProcessor();
ccProcessor.ProcessPayment(500); // Uses CC validation

PaymentProcessor bankProcessor = new BankTransferProcessor();
bankProcessor.ProcessPayment(5000); // Uses bank validation

// Key point: Interface as pure abstraction
public interface ILogger
{
    void Log(string message); // All members are abstract
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message); // Must implement
    }
}

// Sealed keyword - prevents further overriding
public class FinalAnimal : Animal
{
    public sealed override void MakeSound()
    {
        Console.WriteLine("Final sound");
    }
}

// Cannot override FinalAnimal.MakeSound()
// public class BadDog : FinalAnimal
// {
//     public override void MakeSound() // ERROR: sealed
//     {
//     }
// }`}]},{id:"q7",question:"What is method overriding? How is it different from method overloading?",answer:"Method overriding is in derived class with same signature as base class, uses virtual/override keywords, resolved at runtime. Method overloading is in same class with same name but different parameters, resolved at compile time. Overriding is runtime polymorphism, overloading is compile-time polymorphism.",codeSnippets:[{language:"csharp",code:`using System;

// ========== METHOD OVERLOADING (Compile-time) ==========
// Same name, different parameters, SAME CLASS
public class StringUtility
{
    // Convert int to string
    public string ToString(int value)
    {
        return value.ToString();
    }
    
    // Convert double to string
    public string ToString(double value)
    {
        return value.ToString("F2");
    }
    
    // Convert bool to string
    public string ToString(bool value)
    {
        return value.ToString();
    }
    
    // Different parameter count
    public string Concat(string a, string b)
    {
        return a + b;
    }
    
    public string Concat(string a, string b, string c)
    {
        return a + b + c;
    }
}

// Usage - Compiler determines which method at COMPILE TIME
var util = new StringUtility();
var s1 = util.ToString(42); // Calls ToString(int)
var s2 = util.ToString(3.14); // Calls ToString(double)
var s3 = util.ToString(true); // Calls ToString(bool)
var s4 = util.Concat("Hello", "World"); // 2 params
var s5 = util.Concat("A", "B", "C"); // 3 params

// ========== METHOD OVERRIDING (Runtime polymorphism) ==========
// Same name, same parameters, BASE and DERIVED class
public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Generic sound");
    }
}

public class Dog : Animal
{
    // Override - same signature, DIFFERENT CLASS
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Usage - Runtime determines which method based on ACTUAL TYPE
Animal animal1 = new Dog();
Animal animal2 = new Cat();
Animal animal3 = new Animal();

animal1.MakeSound(); // Woof! (Dog's override)
animal2.MakeSound(); // Meow! (Cat's override)
animal3.MakeSound(); // Generic sound (Animal's implementation)

// Detailed comparison
Console.WriteLine("METHOD OVERLOADING vs OVERRIDING:");
Console.WriteLine("Aspect              Overloading         Overriding");
Console.WriteLine("Scope               Same class          Base + derived");
Console.WriteLine("Method name         Same                Same");
Console.WriteLine("Parameters          Different           Same");
Console.WriteLine("Return type         Can differ          Same");
Console.WriteLine("Keywords            None                virtual/override");
Console.WriteLine("When resolved       Compile-time        Runtime");
Console.WriteLine("Inheritance         No                  Yes");
Console.WriteLine("Polymorphism type   Compile-time        Runtime");

// Real example: Overloading
public class DataProcessor
{
    public int Sum(int a, int b)
    {
        return a + b;
    }
    
    public double Sum(double a, double b)
    {
        return a + b;
    }
    
    public int Sum(int a, int b, int c)
    {
        return a + b + c;
    }
}

var dp = new DataProcessor();
int r1 = dp.Sum(5, 3); // Sum(int, int) -> 8
double r2 = dp.Sum(5.5, 3.2); // Sum(double, double) -> 8.7
int r3 = dp.Sum(5, 3, 2); // Sum(int, int, int) -> 10

// Real example: Overriding
public abstract class Shape
{
    public abstract double GetArea();
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    public override double GetArea()
    {
        return Math.PI * radius * radius;
    }
}

public class Rectangle : Shape
{
    private double width, height;
    
    public Rectangle(double w, double h) 
    { 
        width = w; 
        height = h; 
    }
    
    public override double GetArea()
    {
        return width * height;
    }
}

// Polymorphism through overriding
Shape[] shapes = new Shape[]
{
    new Circle(5),
    new Rectangle(4, 6)
};

foreach (var shape in shapes)
{
    Console.WriteLine($"Area: {shape.GetArea()}");
    // Area: 78.54 (Circle)
    // Area: 24 (Rectangle)
}

// Cannot override in same class
public class BadExample
{
    public void Display(int x) { }
    // public override void Display(int x) { } // ERROR: No base member to override
    
    // But can overload
    public void Display(string x) { } // OK: Overload
}

// Overloading with different return types - usually not recommended
public class Example
{
    public int GetValue() { return 10; }
    // public string GetValue() { } // ERROR: Return type alone doesn't distinguish
    // Need different parameters
    public string GetValue(int x) { return "test"; } // OK: Different parameter
}

// Common mistake: Hiding instead of overriding
public class Parent
{
    public virtual void Method()
    {
        Console.WriteLine("Parent");
    }
}

public class Child : Parent
{
    public new void Method() // "new" hides parent method
    {
        Console.WriteLine("Child");
    }
}

var child = new Child();
child.Method(); // Child

Parent childRef = new Child();
childRef.Method(); // Parent (WRONG! Should be Child)

// Correct: Use override
public class GoodChild : Parent
{
    public override void Method()
    {
        Console.WriteLine("GoodChild");
    }
}

var goodChild = new GoodChild();
goodChild.Method(); // GoodChild

Parent goodChildRef = new GoodChild();
goodChildRef.Method(); // GoodChild (CORRECT!)`}]},{id:"q8",question:"What is composition vs inheritance? When to use each?",answer:"Inheritance is IS-A relationship (Dog IS-A Animal). Composition is HAS-A relationship (Car HAS-A Engine). Use inheritance for related classes sharing behavior. Use composition for flexibility and avoiding rigid hierarchies. Composition is usually better than deep inheritance chains. Prefer composition over inheritance for code reuse.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;

// ========== INHERITANCE (IS-A) ==========
public abstract class Animal
{
    public string Name { get; set; }
    
    public abstract void MakeSound();
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// IS-A: Dog IS-A Animal
var dog = new Dog { Name = "Buddy" };
dog.MakeSound(); // Woof

// Problem with deep inheritance
public class Vehicle { }
public class Car : Vehicle { }
public class SportsCar : Car { }
public class FerrariFf : SportsCar { }
// Rigid hierarchy - hard to change

// ========== COMPOSITION (HAS-A) ==========
public class Engine
{
    public int Horsepower { get; set; }
    
    public void Start()
    {
        Console.WriteLine("Engine started");
    }
}

public class Transmission
{
    public string Type { get; set; }
    
    public void Shift(string gear)
    {
        Console.WriteLine($"Shifting to {gear}");
    }
}

public class ComposedCar
{
    // Car HAS-A Engine
    private Engine engine;
    
    // Car HAS-A Transmission
    private Transmission transmission;
    
    public ComposedCar(Engine engine, Transmission transmission)
    {
        this.engine = engine;
        this.transmission = transmission;
    }
    
    public void Drive()
    {
        engine.Start();
        transmission.Shift("D");
        Console.WriteLine("Driving");
    }
}

// Usage
var engine = new Engine { Horsepower = 200 };
var transmission = new Transmission { Type = "Automatic" };
var car = new ComposedCar(engine, transmission);
car.Drive();

// Can swap components easily
var sportEngine = new Engine { Horsepower = 500 };
var sportCar = new ComposedCar(sportEngine, transmission);

// Comparison
Console.WriteLine("INHERITANCE vs COMPOSITION:");
Console.WriteLine("Aspect           Inheritance         Composition");
Console.WriteLine("Relationship     IS-A                HAS-A");
Console.WriteLine("Flexibility      Rigid               Flexible");
Console.WriteLine("Runtime change   Not possible        Possible");
Console.WriteLine("Complexity       Can be complex      Usually simpler");
Console.WriteLine("Code reuse       Through extension   Through delegation");

// Real-world example: Inheritance (NOT recommended)
public abstract class Employee
{
    public string Name { get; set; }
    
    public abstract decimal CalculateSalary();
}

// Bad: Too specific inheritance
public class Manager : Employee
{
    public override decimal CalculateSalary()
    {
        return 5000;
    }
}

public class Developer : Employee
{
    public override decimal CalculateSalary()
    {
        return 4000;
    }
}

// Problem: What if manager is also developer?
// Can't inherit from both

// Better: Composition
public interface IRole
{
    decimal CalculateCompensation();
}

public class ManagerRole : IRole
{
    public decimal CalculateCompensation() => 2000;
}

public class DeveloperRole : IRole
{
    public decimal CalculateCompensation() => 3000;
}

public class ComposedEmployee
{
    public string Name { get; set; }
    
    private List<IRole> roles = new();
    
    public void AddRole(IRole role)
    {
        roles.Add(role);
    }
    
    public decimal CalculateTotalCompensation()
    {
        decimal total = 0;
        foreach (var role in roles)
        {
            total += role.CalculateCompensation();
        }
        return total;
    }
}

// Usage - Much more flexible!
var employee = new ComposedEmployee { Name = "Alice" };
employee.AddRole(new ManagerRole());
employee.AddRole(new DeveloperRole());
Console.WriteLine(employee.CalculateTotalCompensation()); // 5000

// Real-world: Logger example
// Bad inheritance approach
public class ConsoleWriter
{
    public void WriteLine(string text) => Console.WriteLine(text);
}

public class ConsoleLogger : ConsoleWriter
{
    public void Log(string message)
    {
        WriteLine($"[LOG] {message}");
    }
}

// Problem: Can't change ConsoleWriter at runtime

// Good composition approach
public interface IWriter
{
    void Write(string text);
}

public class ConsoleOutput : IWriter
{
    public void Write(string text) => Console.WriteLine(text);
}

public class FileOutput : IWriter
{
    public void Write(string text)
    {
        // Write to file
    }
}

public class ComposedLogger
{
    private IWriter writer;
    
    public ComposedLogger(IWriter writer)
    {
        this.writer = writer;
    }
    
    public void Log(string message)
    {
        writer.Write($"[LOG] {message}");
    }
}

// Usage - Switch writers at runtime!
var consoleLogger = new ComposedLogger(new ConsoleOutput());
consoleLogger.Log("Hello"); // To console

var fileLogger = new ComposedLogger(new FileOutput());
fileLogger.Log("Hello"); // To file

// When to use Inheritance
public abstract class DatabaseConnection
{
    public abstract void Connect();
    public abstract void Disconnect();
}

// Related classes - use inheritance
public class SqlServerConnection : DatabaseConnection
{
    public override void Connect() => Console.WriteLine("Connecting to SQL Server");
    public override void Disconnect() => Console.WriteLine("Disconnecting from SQL Server");
}

public class MySqlConnection : DatabaseConnection
{
    public override void Connect() => Console.WriteLine("Connecting to MySQL");
    public override void Disconnect() => Console.WriteLine("Disconnecting from MySQL");
}

// When to use Composition
public class DataRepository
{
    private DatabaseConnection connection;
    
    public DataRepository(DatabaseConnection connection)
    {
        this.connection = connection;
    }
    
    public void LoadData()
    {
        connection.Connect();
        // Load data
        connection.Disconnect();
    }
}

// Summary: Prefer composition for flexibility`}]},{id:"q9",question:"What is the difference between == operator and Equals() method?",answer:"== compares references for reference types (unless overloaded). Equals() compares values by default. For value types, == doesn't work without overload. Equals() checks object equality. Best practice: override both == and Equals() together, implement IEquatable<T>.",codeSnippets:[{language:"csharp",code:`using System;

// ========== DEFAULT BEHAVIOR ==========
public class Person
{
    public string Name { get; set; }
}

var person1 = new Person { Name = "Alice" };
var person2 = new Person { Name = "Alice" };

Console.WriteLine(person1 == person2); // false (different references)
Console.WriteLine(person1.Equals(person2)); // false (default: reference comparison)

// For value types
int a = 5;
int b = 5;
Console.WriteLine(a == b); // true (value comparison)
Console.WriteLine(a.Equals(b)); // true (value comparison)

// ========== OVERRIDING EQUALS AND == ==========
public class GoodPerson : IEquatable<GoodPerson>
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Override Equals - compare by value
    public override bool Equals(object obj)
    {
        return Equals(obj as GoodPerson);
    }
    
    public bool Equals(GoodPerson other)
    {
        if (other == null) return false;
        return Name == other.Name && Age == other.Age;
    }
    
    // Override GetHashCode - must be consistent with Equals
    public override int GetHashCode()
    {
        unchecked
        {
            int hash = 17;
            hash = hash * 31 + Name?.GetHashCode() ?? 0;
            hash = hash * 31 + Age.GetHashCode();
            return hash;
        }
    }
    
    // Overload == operator
    public static bool operator ==(GoodPerson left, GoodPerson right)
    {
        if (ReferenceEquals(left, right))
            return true;
        if (left is null || right is null)
            return false;
        return left.Equals(right);
    }
    
    // Overload != operator
    public static bool operator !=(GoodPerson left, GoodPerson right)
    {
        return !(left == right);
    }
}

// Usage
var good1 = new GoodPerson { Name = "Alice", Age = 25 };
var good2 = new GoodPerson { Name = "Alice", Age = 25 };
var good3 = new GoodPerson { Name = "Bob", Age = 30 };

Console.WriteLine(good1 == good2); // true (value comparison)
Console.WriteLine(good1.Equals(good2)); // true (value comparison)
Console.WriteLine(good1 != good3); // true

// ========== String example ==========
// Strings override Equals and ==
string str1 = "Hello";
string str2 = "Hello";
string str3 = new string(new[] { 'H', 'e', 'l', 'l', 'o' });

Console.WriteLine(str1 == str2); // true (value comparison)
Console.WriteLine(str1.Equals(str2)); // true (value comparison)
Console.WriteLine(str1 == str3); // true (value comparison)

// ========== Reference vs Value comparison ==========
public class BadPerson
{
    public string Name { get; set; }
    
    // Don't override Equals or ==
}

var bad1 = new BadPerson { Name = "Alice" };
var bad2 = new BadPerson { Name = "Alice" };

Console.WriteLine(bad1 == bad2); // false (reference comparison)
Console.WriteLine(bad1.Equals(bad2)); // false (reference comparison)

// Even though values are same!

// ========== Important: Must override both ==========
public class InconsistentPerson
{
    public string Name { get; set; }
    
    // Overrode Equals but not ==
    public override bool Equals(object obj)
    {
        var other = obj as InconsistentPerson;
        return other?.Name == Name;
    }
    
    public override int GetHashCode()
    {
        return Name?.GetHashCode() ?? 0;
    }
    
    // Forgot to override ==
}

var inc1 = new InconsistentPerson { Name = "Alice" };
var inc2 = new InconsistentPerson { Name = "Alice" };

Console.WriteLine(inc1 == inc2); // false (uses reference comparison)
Console.WriteLine(inc1.Equals(inc2)); // true (uses Equals override)
// INCONSISTENT! BAD!

// ========== Null comparisons ==========
GoodPerson person = null;
GoodPerson other = null;

Console.WriteLine(person == other); // true (both null)
Console.WriteLine(person == new GoodPerson()); // false (one null)

// ========== With collections ==========
var list = new List<GoodPerson>
{
    new GoodPerson { Name = "Alice", Age = 25 },
    new GoodPerson { Name = "Bob", Age = 30 }
};

var target = new GoodPerson { Name = "Alice", Age = 25 };

// Contains uses Equals (which we overrode)
bool found = list.Contains(target); // true!

// Dictionary uses GetHashCode and Equals
var dict = new Dictionary<GoodPerson, string>();
dict[new GoodPerson { Name = "Alice", Age = 25 }] = "Developer";

// Can retrieve with different reference
var value = dict[new GoodPerson { Name = "Alice", Age = 25 }]; // Works!

// ========== Summary Table ==========
Console.WriteLine("EQUALS vs ==:");
Console.WriteLine("Aspect               Equals           ==");
Console.WriteLine("Default behavior     Reference        Reference");
Console.WriteLine("Can override         Yes              Yes");
Console.WriteLine("For strings          Value            Value (overridden)");
Console.WriteLine("For value types      Value            Value (overridden)");
Console.WriteLine("Must implement       IEquatable<T>    Both operators");
Console.WriteLine("Used in              Contains, Dict   Comparisons");

// Best practice template
public class ProperComparison : IEquatable<ProperComparison>
{
    public string Id { get; set; }
    
    public override bool Equals(object obj) => Equals(obj as ProperComparison);
    
    public bool Equals(ProperComparison other)
    {
        if (other == null) return false;
        return Id == other.Id;
    }
    
    public override int GetHashCode() => Id?.GetHashCode() ?? 0;
    
    public static bool operator ==(ProperComparison left, ProperComparison right)
    {
        if (left is null) return right is null;
        return left.Equals(right);
    }
    
    public static bool operator !=(ProperComparison left, ProperComparison right)
    {
        return !(left == right);
    }
}`}]},{id:"q10",question:"What are constructors and destructors? What is the difference between parameterized and default constructors?",answer:"Constructor is a special method called when creating an object, initializes state. Destructor cleans up resources, called when object is garbage collected (rare in C#). Default constructor has no parameters. Parameterized constructor takes parameters to initialize fields. Base class constructor can be called using : base().",codeSnippets:[{language:"csharp",code:`using System;

// ========== DEFAULT CONSTRUCTOR ==========
public class SimpleClass
{
    public string Name { get; set; }
    public int Value { get; set; }
    
    // Default constructor - no parameters
    public SimpleClass()
    {
        Name = "Default";
        Value = 0;
        Console.WriteLine("Default constructor called");
    }
}

var simple = new SimpleClass();
// Output: Default constructor called
Console.WriteLine(simple.Name); // Default

// ========== PARAMETERIZED CONSTRUCTOR ==========
public class Account
{
    public string AccountNumber { get; set; }
    public decimal Balance { get; set; }
    
    // Parameterized constructor
    public Account(string accountNumber, decimal initialBalance)
    {
        AccountNumber = accountNumber;
        Balance = initialBalance;
        Console.WriteLine($"Account {accountNumber} created");
    }
}

var account = new Account("ACC001", 1000);
// Output: Account ACC001 created

// ========== MULTIPLE CONSTRUCTORS (Overloading) ==========
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
    
    // Default constructor
    public Person()
    {
        Name = "Unknown";
        Age = 0;
        Email = "unknown@email.com";
    }
    
    // Parameterized - one parameter
    public Person(string name)
    {
        Name = name;
        Age = 0;
        Email = "unknown@email.com";
    }
    
    // Parameterized - two parameters
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
        Email = "unknown@email.com";
    }
    
    // Parameterized - all parameters
    public Person(string name, int age, string email)
    {
        Name = name;
        Age = age;
        Email = email;
    }
}

var p1 = new Person(); // Default
var p2 = new Person("Alice"); // 1 param
var p3 = new Person("Bob", 30); // 2 params
var p4 = new Person("Charlie", 25, "charlie@email.com"); // All params

// ========== USING this() for constructor chaining ==========
public class ImprovedPerson
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public ImprovedPerson() : this("Unknown", 0)
    {
        // Calls parameterized constructor
    }
    
    public ImprovedPerson(string name) : this(name, 0)
    {
        // Calls other constructor
    }
    
    public ImprovedPerson(string name, int age)
    {
        Name = name;
        Age = age;
        Console.WriteLine($"Person created: {name}, Age {age}");
    }
}

var ip1 = new ImprovedPerson(); // Calls : this()
var ip2 = new ImprovedPerson("Alice"); // Calls : this(string)
var ip3 = new ImprovedPerson("Bob", 30); // Full initialization

// ========== INHERITANCE AND CONSTRUCTORS ==========
public class Animal
{
    public string Name { get; set; }
    
    public Animal(string name)
    {
        Name = name;
        Console.WriteLine($"Animal constructor: {name}");
    }
}

public class Dog : Animal
{
    public string Breed { get; set; }
    
    // Must call base constructor with : base()
    public Dog(string name, string breed) : base(name)
    {
        Breed = breed;
        Console.WriteLine($"Dog constructor: {breed}");
    }
}

var dog = new Dog("Buddy", "Labrador");
// Output:
// Animal constructor: Buddy
// Dog constructor: Labrador

// ========== DESTRUCTORS (Finalizers) ==========
public class ResourceHolder
{
    private IntPtr unmanagedResource;
    
    public ResourceHolder()
    {
        Console.WriteLine("Constructor: Resource allocated");
        unmanagedResource = AllocateUnmanagedResource();
    }
    
    // Destructor - called by garbage collector
    ~ResourceHolder()
    {
        Console.WriteLine("Destructor: Resource freed");
        FreeUnmanagedResource(unmanagedResource);
    }
    
    private IntPtr AllocateUnmanagedResource()
    {
        return new IntPtr(12345); // Simulated
    }
    
    private void FreeUnmanagedResource(IntPtr resource)
    {
        // Cleanup
    }
}

// ========== PROPER RESOURCE MANAGEMENT WITH IDisposable ==========
public class ManagedResource : IDisposable
{
    private bool disposed = false;
    
    public ManagedResource()
    {
        Console.WriteLine("Constructor");
    }
    
    // Implement Dispose for explicit cleanup
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Don't call finalizer
    }
    
    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                Console.WriteLine("Disposing managed resources");
                // Dispose managed resources
            }
            
            Console.WriteLine("Freeing unmanaged resources");
            // Free unmanaged resources
            
            disposed = true;
        }
    }
    
    // Finalizer as safety net
    ~ManagedResource()
    {
        Dispose(false);
    }
}

// Usage with using statement
using (var resource = new ManagedResource())
{
    // Use resource
} // Dispose called automatically

// Or
var resource2 = new ManagedResource();
try
{
    // Use resource
}
finally
{
    resource2?.Dispose();
}

// ========== STATIC CONSTRUCTOR ==========
public class Configuration
{
    public static string AppName { get; set; }
    public static string Version { get; set; }
    
    // Static constructor - called once when class is first used
    static Configuration()
    {
        AppName = "MyApp";
        Version = "1.0";
        Console.WriteLine("Static constructor called");
    }
}

// Usage
var app1 = new Configuration();
var app2 = new Configuration();
// Static constructor called only ONCE (for all instances)

// ========== COMPARISON ==========
Console.WriteLine("CONSTRUCTOR vs DESTRUCTOR:");
Console.WriteLine("Aspect           Constructor     Destructor");
Console.WriteLine("Purpose          Initialize      Cleanup");
Console.WriteLine("Called when      Object created  Object collected");
Console.WriteLine("Can overload     Yes             No (only one)");
Console.WriteLine("Parameters       Yes             No");
Console.WriteLine("Syntax           public Type()   ~Type()");
Console.WriteLine("Timing           Immediate       Garbage collection");

// ========== BEST PRACTICES ==========
public class GoodPractice
{
    private string resource;
    
    // Clear parameterized constructor
    public GoodPractice(string resource)
    {
        this.resource = resource ?? throw new ArgumentNullException(nameof(resource));
        Console.WriteLine("Initialized with: " + resource);
    }
    
    // Validate input in constructor
    public static implicit operator GoodPractice(string value)
    {
        return new GoodPractice(value);
    }
}

// Use constructor to validate
var good = new GoodPractice("Valid");
// good = new GoodPractice(null); // Throws ArgumentNullException`}]}]},Wg={id:"csharp-solid-principles",name:"SOLID Principles",questions:[{id:"q1",question:"What are SOLID principles and why are they important?",answer:"SOLID is an acronym for five design principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) that make code more maintainable, scalable, and testable. They help you write clean code that's easy to understand, modify, and extend without breaking existing functionality.",codeSnippets:[{language:"csharp",code:`// BAD - Violates SOLID principles
public class UserManager
{
    // Violates SRP - does too many things
    public void CreateUser(string name, string email) { }
    public void SendEmail(string to, string subject) { }
    public void LogActivity(string message) { }
    public void SaveToDatabase(string data) { }
    public void ValidateEmail(string email) { }
    
    // Hard to test, maintain, and extend
    // Change one thing breaks everything
}

// GOOD - Follows SOLID principles
public class UserService
{
    private readonly IUserRepository userRepository;
    private readonly IEmailService emailService;
    private readonly ILogger logger;
    
    public UserService(
        IUserRepository userRepository,
        IEmailService emailService,
        ILogger logger)
    {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.logger = logger;
    }
    
    public void CreateUser(User user)
    {
        // Single Responsibility - only manage users
        userRepository.Save(user);
        logger.Log(\`User \${user.Name} created\`);
    }
}

public interface IUserRepository
{
    void Save(User user);
}

public interface IEmailService
{
    void SendEmail(string to, string subject, string body);
}

public interface ILogger
{
    void Log(string message);
}

// Benefits:
// - Easy to test (inject mocks)
// - Easy to extend (implement new repositories)
// - Easy to maintain (each class has one job)
// - Easy to reuse (components are independent)`}]},{id:"q2",question:"What is the Single Responsibility Principle (SRP)?",answer:"A class should have only one reason to change. It should have only one responsibility. This makes classes focused, easier to understand, test, and maintain. If a class has multiple reasons to change, it violates SRP.",codeSnippets:[{language:"csharp",code:`// VIOLATES SRP - Multiple reasons to change
public class Employee
{
    public string Name { get; set; }
    public decimal Salary { get; set; }
    
    // Responsibility 1: Employee data
    public void UpdateName(string name)
    {
        Name = name;
    }
    
    // Responsibility 2: Calculations
    public decimal CalculateBonus()
    {
        return Salary * 0.1m;
    }
    
    // Responsibility 3: Persistence
    public void SaveToDatabase()
    {
        // Save to DB
    }
    
    // Responsibility 4: Reporting
    public string GenerateReport()
    {
        return $"Employee: {Name}, Salary: {Salary}";
    }
    
    // Changes for any reason: pay logic, DB schema, report format, etc.
}

// FOLLOWS SRP - Each class has one reason to change
public class Employee
{
    public string Name { get; set; }
    public decimal Salary { get; set; }
}

public class BonusCalculator
{
    // Only reason to change: bonus calculation logic
    public decimal CalculateBonus(Employee employee)
    {
        return employee.Salary * 0.1m;
    }
}

public class EmployeeRepository
{
    // Only reason to change: database schema or ORM
    public void Save(Employee employee)
    {
        // Save to DB
    }
}

public class EmployeeReporter
{
    // Only reason to change: report format
    public string GenerateReport(Employee employee)
    {
        return $"Employee: {employee.Name}, Salary: {employee.Salary}";
    }
}

// Benefits:
// - Each class is easier to understand
// - Changes are localized (changing bonus logic doesn't affect reporting)
// - Easier to test
// - Easier to reuse

// Usage
var employee = new Employee { Name = "Alice", Salary = 50000 };
var calculator = new BonusCalculator();
var bonus = calculator.CalculateBonus(employee); // $5000`}]},{id:"q3",question:"What is the Open/Closed Principle (OCP)?",answer:"Software entities should be open for extension but closed for modification. You should be able to add new functionality without changing existing code. Achieved through inheritance, abstraction, and polymorphism.",codeSnippets:[{language:"csharp",code:`// VIOLATES OCP - Need to modify for every new report type
public class ReportGenerator
{
    public void Generate(string reportType)
    {
        if (reportType == "PDF")
        {
            // Generate PDF
        }
        else if (reportType == "Excel")
        {
            // Generate Excel
        }
        else if (reportType == "HTML")
        {
            // Generate HTML
        }
        // Must modify this class for every new report type!
    }
}

// FOLLOWS OCP - Use abstraction to extend
public interface IReportFormatter
{
    void Format(ReportData data);
}

public class PdfReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate PDF
    }
}

public class ExcelReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate Excel
    }
}

public class HtmlReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate HTML
    }
}

public class ReportGenerator
{
    // Closed for modification - this doesn't change
    // Open for extension - add new formatters without changing this
    public void Generate(ReportData data, IReportFormatter formatter)
    {
        formatter.Format(data); // Works with any formatter
    }
}

// Adding new report type doesn't require changing ReportGenerator
public class JsonReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate JSON
    }
}

// Usage
var generator = new ReportGenerator();
var data = new ReportData();

generator.Generate(data, new PdfReportFormatter());
generator.Generate(data, new ExcelReportFormatter());
generator.Generate(data, new JsonReportFormatter()); // New format!

// Benefits:
// - Existing code is not modified (lower risk of bugs)
// - New functionality can be added by creating new classes
// - Easier to test (mock formatters)
// - Better code organization`}]},{id:"q4",question:"What is the Liskov Substitution Principle (LSP)?",answer:"Derived classes must be substitutable for their base classes. If a class is a subclass of another, it should be usable wherever the parent class is expected without breaking the code. Violating this principle leads to unexpected behavior.",codeSnippets:[{language:"csharp",code:`// VIOLATES LSP - Circle can't be substituted for Rectangle
public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
    
    public virtual int CalculateArea()
    {
        return Width * Height;
    }
}

public class Circle : Rectangle
{
    // Circle doesn't have Width and Height independently!
    // Setting Width should also set Height (radius)
    
    public override int Width
    {
        get => base.Width;
        set => base.Width = base.Height = value; // Violates expectations
    }
    
    public override int CalculateArea()
    {
        return (int)(Width * Width * 3.14); // Different calculation
    }
}

// Problem: Circle violates Rectangle's contract
public void ProcessRectangle(Rectangle rect)
{
    rect.Width = 5;
    rect.Height = 10;
    
    // Expected area: 5 * 10 = 50
    var area = rect.CalculateArea();
    
    if (rect is Circle)
        // area = 5 * 5 * 3.14 ≈ 78.5 - BROKEN!
    }
}

// FOLLOWS LSP - Proper inheritance hierarchy
public abstract class Shape
{
    public abstract int CalculateArea();
}

public class Rectangle : Shape
{
    public int Width { get; set; }
    public int Height { get; set; }
    
    public override int CalculateArea()
    {
        return Width * Height;
    }
}

public class Circle : Shape
{
    public int Radius { get; set; }
    
    public override int CalculateArea()
    {
        return (int)(Radius * Radius * 3.14);
    }
}

// Now all shapes can be substituted
public void ProcessShape(Shape shape)
{
    var area = shape.CalculateArea(); // Works correctly for any shape
}

// Usage
var shapes = new List<Shape>
{
    new Rectangle { Width = 5, Height = 10 },
    new Circle { Radius = 3 }
};

foreach (var shape in shapes)
{
    Console.WriteLine(shape.CalculateArea()); // Works correctly
}

// Benefits:
// - Inheritance is meaningful
// - Polymorphism works as expected
// - No surprises when substituting derived classes
// - Easier to reason about code`}]},{id:"q5",question:"What is the Interface Segregation Principle (ISP)?",answer:"Clients should not depend on interfaces they don't use. Create specific, focused interfaces instead of large general-purpose ones. This prevents classes from being forced to implement methods they don't need.",codeSnippets:[{language:"csharp",code:`// VIOLATES ISP - Large interface with many methods
public interface IWorker
{
    void Work();
    void Eat();
    void Sleep();
    void Drive();
    void Code();
}

public class Developer : IWorker
{
    public void Work() { Console.WriteLine("Coding"); }
    public void Eat() { Console.WriteLine("Eating"); }
    public void Sleep() { Console.WriteLine("Sleeping"); }
    public void Drive() { Console.WriteLine("Driving"); }
    public void Code() { Console.WriteLine("Writing code"); }
}

public class Robot : IWorker
{
    public void Work() { Console.WriteLine("Working"); }
    public void Eat() { throw new NotImplementedException(); } // Robot doesn't eat!
    public void Sleep() { throw new NotImplementedException(); } // Robot doesn't sleep!
    public void Drive() { Console.WriteLine("Moving"); }
    public void Code() { throw new NotImplementedException(); } // Robot might not code!
    
    // Forced to implement methods it doesn't need
}

// FOLLOWS ISP - Small, focused interfaces
public interface IWorker
{
    void Work();
}

public interface IEater
{
    void Eat();
}

public interface ISleeper
{
    void Sleep();
}

public interface IDriver
{
    void Drive();
}

public interface IProgrammer
{
    void Code();
}

public class Developer : IWorker, IEater, ISleeper, IDriver, IProgrammer
{
    public void Work() { Console.WriteLine("Working"); }
    public void Eat() { Console.WriteLine("Eating"); }
    public void Sleep() { Console.WriteLine("Sleeping"); }
    public void Drive() { Console.WriteLine("Driving"); }
    public void Code() { Console.WriteLine("Coding"); }
}

public class Robot : IWorker, IDriver, IProgrammer
{
    // Only implements what it actually needs
    public void Work() { Console.WriteLine("Working"); }
    public void Drive() { Console.WriteLine("Moving"); }
    public void Code() { Console.WriteLine("Programming"); }
}

// Usage
var developer = new Developer();
ProcessWorker(developer); // Works

var robot = new Robot();
ProcessWorker(robot); // Works

public void ProcessWorker(IWorker worker)
{
    worker.Work();
}

public void ProcessProgrammer(IProgrammer programmer)
{
    programmer.Code();
}

// Benefits:
// - Classes only depend on what they use
// - No forced implementations of unnecessary methods
// - More flexible and reusable
// - Easier to understand what a class does
// - Changes to one interface don't affect unrelated classes`}]},{id:"q6",question:"What is the Dependency Inversion Principle (DIP)?",answer:"High-level modules should not depend on low-level modules. Both should depend on abstractions. Depend on interfaces/abstractions, not concrete implementations. This decouples code and makes it more testable and flexible.",codeSnippets:[{language:"csharp",code:`// VIOLATES DIP - Direct dependency on concrete classes
public class MySqlDatabase
{
    public void Save(User user)
    {
        // Save to MySQL
    }
}

public class UserService
{
    // High-level module depends on low-level module (MySqlDatabase)
    private MySqlDatabase database = new MySqlDatabase();
    
    public void CreateUser(User user)
    {
        database.Save(user); // Tightly coupled
    }
}

public class UserController
{
    private UserService userService = new UserService();
    
    public void CreateUser(User user)
    {
        userService.CreateUser(user);
    }
}

// Problems:
// - Can't switch databases without changing UserService
// - Hard to test (can't mock MySqlDatabase)
// - Tightly coupled
// - UserService depends on implementation details

// FOLLOWS DIP - Depend on abstractions
public interface IUserRepository
{
    void Save(User user);
}

public class MySqlUserRepository : IUserRepository
{
    public void Save(User user)
    {
        // Save to MySQL
    }
}

public class SqlServerUserRepository : IUserRepository
{
    public void Save(User user)
    {
        // Save to SQL Server
    }
}

public class UserService
{
    // Depends on abstraction, not concrete implementation
    private readonly IUserRepository userRepository;
    
    // Dependency injected through constructor
    public UserService(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }
    
    public void CreateUser(User user)
    {
        userRepository.Save(user); // Works with any repository
    }
}

public class UserController
{
    private readonly UserService userService;
    
    public UserController(UserService userService)
    {
        this.userService = userService; // Injected
    }
    
    public void CreateUser(User user)
    {
        userService.CreateUser(user);
    }
}

// Setup (using dependency injection container)
var repository = new MySqlUserRepository();
var service = new UserService(repository);
var controller = new UserController(service);

// Easy to switch databases
var sqlServerRepo = new SqlServerUserRepository();
var serviceWithSqlServer = new UserService(sqlServerRepo);

// Easy to test with mock
public class MockUserRepository : IUserRepository
{
    public void Save(User user) { } // Mock implementation
}

var testService = new UserService(new MockUserRepository());
// Now can test without actual database!

// Benefits:
// - Decoupled code (can swap implementations)
// - Easy to test (use mocks)
// - Follows Open/Closed Principle
// - More flexible and maintainable
// - Can easily add new repository types`}]},{id:"q7",question:"How do SOLID principles relate to each other? Give an example of following all five together.",answer:"SOLID principles work together to create clean, maintainable code. They complement each other: SRP focuses code, OCP extends it, LSP ensures substitution works, ISP segregates interfaces, and DIP decouples dependencies. Following one often encourages following others.",codeSnippets:[{language:"csharp",code:`// Example: E-commerce Order Processing System
// Demonstrates all SOLID principles working together

// 1. Single Responsibility - Each class has one job
public class Order
{
    public int Id { get; set; }
    public List<OrderItem> Items { get; set; }
    public decimal TotalAmount { get; set; }
}

// 2. Interface Segregation - Small, focused interfaces
public interface IOrderRepository
{
    void Save(Order order);
    Order GetById(int id);
}

public interface IPaymentProcessor
{
    bool ProcessPayment(Order order, PaymentMethod method);
}

public interface INotificationService
{
    void SendOrderConfirmation(Order order);
}

public interface IInventoryService
{
    void ReserveItems(Order order);
    void ReleaseReservation(Order order);
}

// 3. Liskov Substitution - Derived classes substitute parents correctly
public abstract class PaymentProcessor : IPaymentProcessor
{
    protected decimal Amount { get; set; }
    
    public virtual bool ProcessPayment(Order order, PaymentMethod method)
    {
        // Common logic
        Amount = order.TotalAmount;
        return ValidateAndProcess(method);
    }
    
    protected abstract bool ValidateAndProcess(PaymentMethod method);
}

public class CreditCardProcessor : PaymentProcessor
{
    protected override bool ValidateAndProcess(PaymentMethod method)
    {
        // Process credit card
        return true;
    }
}

public class PayPalProcessor : PaymentProcessor
{
    protected override bool ValidateAndProcess(PaymentMethod method)
    {
        // Process PayPal
        return true;
    }
}

// 4. Dependency Inversion & Open/Closed - Depend on abstractions
public class OrderService
{
    // Dependencies injected, not hardcoded
    private readonly IOrderRepository orderRepository;
    private readonly IPaymentProcessor paymentProcessor;
    private readonly INotificationService notificationService;
    private readonly IInventoryService inventoryService;
    
    public OrderService(
        IOrderRepository orderRepository,
        IPaymentProcessor paymentProcessor,
        INotificationService notificationService,
        IInventoryService inventoryService)
    {
        this.orderRepository = orderRepository;
        this.paymentProcessor = paymentProcessor;
        this.notificationService = notificationService;
        this.inventoryService = inventoryService;
    }
    
    // Single Responsibility - only handles order processing workflow
    public bool ProcessOrder(Order order, PaymentMethod paymentMethod)
    {
        // Reserve inventory first
        inventoryService.ReserveItems(order);
        
        // Process payment
        bool paymentSuccess = paymentProcessor.ProcessPayment(order, paymentMethod);
        
        if (!paymentSuccess)
        {
            // Release inventory if payment fails
            inventoryService.ReleaseReservation(order);
            return false;
        }
        
        // Save order
        orderRepository.Save(order);
        
        // Send notification
        notificationService.SendOrderConfirmation(order);
        
        return true;
    }
}

// 5. Open/Closed - Easy to extend with new implementations
public class EmailNotificationService : INotificationService
{
    public void SendOrderConfirmation(Order order)
    {
        // Send email notification
    }
}

public class SmsNotificationService : INotificationService
{
    public void SendOrderConfirmation(Order order)
    {
        // Send SMS notification
    }
}

public class SqlOrderRepository : IOrderRepository
{
    public void Save(Order order) { }
    public Order GetById(int id) { return new Order(); }
}

public class MongoOrderRepository : IOrderRepository
{
    public void Save(Order order) { }
    public Order GetById(int id) { return new Order(); }
}

// Usage - easy to compose and change implementations
var orderRepository = new SqlOrderRepository();
var paymentProcessor = new CreditCardProcessor();
var notificationService = new EmailNotificationService();
var inventoryService = new InventoryService();

var orderService = new OrderService(
    orderRepository,
    paymentProcessor,
    notificationService,
    inventoryService);

var order = new Order { Id = 1, TotalAmount = 100 };
orderService.ProcessOrder(order, PaymentMethod.CreditCard);

// Easy to change to different implementations
var orderService2 = new OrderService(
    new MongoOrderRepository(),
    new PayPalProcessor(),
    new SmsNotificationService(),
    inventoryService);

// Benefits of applying all SOLID principles:
// - Maintainable: Each class is focused and independent
// - Testable: Can mock any dependency
// - Extensible: Add new processors, repositories, notifications without changing existing code
// - Flexible: Easy to swap implementations
// - Clear: Code is organized and understandable`}]},{id:"q8",question:"What are common violations of SOLID principles and how to identify them?",answer:"Common violations include: classes doing too much (SRP), needing modification for new features (OCP), broken inheritance (LSP), forced interface implementations (ISP), tight coupling to concrete classes (DIP). Identify by looking for classes with multiple reasons to change, if-else statements for variations, unused method implementations, or direct instantiation of dependencies.",codeSnippets:[{language:"csharp",code:`// Red Flags - Signs of SOLID Violations

// 1. SRP Violation - Class has multiple reasons to change
public class BadUserManager // ❌ Bad name already suggests multiple responsibilities
{
    public void CreateUser(string name) { } // User management
    public void SendWelcomeEmail(string email) { } // Email service
    public void SaveToDatabase(User user) { } // Database service
    public void LogActivity(string message) { } // Logging service
    public void GenerateReport() { } // Reporting service
    
    // Signs:
    // - Class name with "Manager", "Service" (too generic)
    // - Many dependencies
    // - Multiple reasons to modify the class
    // - Hard to unit test
}

// 2. OCP Violation - Need to modify code for new features
public class BadOrderProcessor
{
    public void ProcessOrder(Order order, string paymentType)
    {
        if (paymentType == "CreditCard")
        {
            // Process credit card
        }
        else if (paymentType == "PayPal")
        {
            // Process PayPal
        }
        else if (paymentType == "Bitcoin")
        {
            // Process Bitcoin - NEED TO MODIFY THIS CLASS!
        }
        // Signs:
        // - Many if/else or switch statements
        // - Must modify existing code to add features
        // - Tight coupling to concrete types
    }
}

// 3. LSP Violation - Derived class breaks base contract
public class BadShape
{
    public virtual void Draw() { }
}

public class BadSquareDrawable : BadShape
{
    public override void Draw()
    {
        throw new NotImplementedException("Squares don't draw");
    }
    // Signs:
    // - Throwing NotImplementedException in overrides
    // - Override doesn't fulfill the contract
    // - Base type assumption is broken
}

// 4. ISP Violation - Forces unused methods
public class BadWorkerInterface
{
    public interface IWorker
    {
        void Work();
        void Eat();
        void Sleep();
        void Exercise();
        void GoToSchool();
    }
    
    public class Robot : IWorker
    {
        public void Work() { }
        public void Eat() { throw new NotImplementedException(); } // ❌ Not applicable
        public void Sleep() { throw new NotImplementedException(); } // ❌ Not applicable
        public void Exercise() { throw new NotImplementedException(); } // ❌ Not applicable
        public void GoToSchool() { throw new NotImplementedException(); } // ❌ Not applicable
        
        // Signs:
        // - Throwing NotImplementedException
        // - Empty implementations
        // - Methods that don't make sense for the class
    }
}

// 5. DIP Violation - Tight coupling to concrete classes
public class BadUserService
{
    // Direct instantiation - tight coupling
    private MySqlDatabase database = new MySqlDatabase();
    
    public void CreateUser(User user)
    {
        database.Save(user);
    }
    
    // Signs:
    // - Using 'new' to create dependencies
    // - Can't test without actual objects
    // - Hard to swap implementations
    // - High coupling
}

// How to Refactor (GOOD versions)

// 1. Fix SRP
public class GoodUserService // ✓ Single responsibility
{
    public void CreateUser(User user) { }
}

public class EmailService // ✓ Separate responsibility
{
    public void SendWelcomeEmail(string email) { }
}

// 2. Fix OCP
public interface IPaymentProcessor
{
    void Process(Order order);
}

public class CreditCardProcessor : IPaymentProcessor { }
public class PayPalProcessor : IPaymentProcessor { }
public class BitcoinProcessor : IPaymentProcessor { } // Easy to add

public class GoodOrderProcessor // ✓ Closed for modification
{
    public void ProcessOrder(Order order, IPaymentProcessor processor)
    {
        processor.Process(order); // Works with any processor
    }
}

// 3. Fix LSP
public abstract class GoodShape
{
    public abstract void Draw();
}

public class Circle : GoodShape
{
    public override void Draw() { /* Draw circle */ }
}

public class Square : GoodShape
{
    public override void Draw() { /* Draw square */ }
}

// 4. Fix ISP
public interface IWorker { void Work(); }
public interface IEater { void Eat(); }
public interface ISleeper { void Sleep(); }

public class Person : IWorker, IEater, ISleeper { }
public class Robot : IWorker { } // Only what it needs

// 5. Fix DIP
public class GoodUserService
{
    private readonly IUserRepository repository;
    
    // Dependency injected
    public GoodUserService(IUserRepository repository)
    {
        this.repository = repository;
    }
    
    public void CreateUser(User user)
    {
        repository.Save(user);
    }
}

// Automated Tools to Detect Violations:
// - Code metrics (complexity, coupling)
// - Roslyn analyzers
// - CodeSmell detectors
// - Unit test coverage (hard to test = violation)
// - Regular code reviews

// Key Questions to Ask:
// - Does this class have only one reason to change? (SRP)
// - Can I add new functionality without modifying existing code? (OCP)
// - Can I use derived classes anywhere the base is expected? (LSP)
// - Are all interface methods actually used? (ISP)
// - Can I test this without actual dependencies? (DIP)`}]},{id:"q9",question:"How do design patterns relate to SOLID principles?",answer:"Design patterns are implementations that often encourage following SOLID principles. Strategy pattern follows OCP, Adapter pattern follows ISP, Repository pattern follows DIP. Many design patterns exist specifically to help follow SOLID principles.",codeSnippets:[{language:"csharp",code:`// Relationship between Design Patterns and SOLID

// 1. Strategy Pattern - Follows OCP (Open/Closed)
public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void Pay(decimal amount) { }
}

public class PayPalPayment : IPaymentStrategy
{
    public void Pay(decimal amount) { }
}

public class ShoppingCart
{
    public void Checkout(IPaymentStrategy paymentMethod)
    {
        paymentMethod.Pay(GetTotal());
        // Open for extension - add new payment methods
        // Closed for modification - this method doesn't change
    }
}

// 2. Repository Pattern - Follows DIP (Dependency Inversion)
public interface IRepository<T>
{
    void Add(T item);
    T GetById(int id);
}

public class SqlRepository<T> : IRepository<T>
{
    public void Add(T item) { }
    public T GetById(int id) { return default; }
}

public class Service
{
    // Depends on abstraction, not concrete SqlRepository
    private readonly IRepository<User> repository;
    
    public Service(IRepository<User> repository)
    {
        this.repository = repository; // DIP
    }
}

// 3. Adapter Pattern - Follows ISP (Interface Segregation)
public interface IEmailSender
{
    void SendEmail(string to, string message);
}

public class ThirdPartyEmailService
{
    public void Send(string recipient, string body) { }
}

// Adapter to fit interface
public class EmailAdapter : IEmailSender
{
    private readonly ThirdPartyEmailService service;
    
    public void SendEmail(string to, string message)
    {
        service.Send(to, message); // Adapts to our interface
    }
}

// 4. Decorator Pattern - Follows OCP
public interface IComponent
{
    void Operation();
}

public class ConcreteComponent : IComponent
{
    public void Operation() { Console.WriteLine("Base operation"); }
}

public abstract class Decorator : IComponent
{
    protected IComponent component;
    
    public virtual void Operation()
    {
        component.Operation();
    }
}

public class ConcreteDecorator : Decorator
{
    public override void Operation()
    {
        Console.WriteLine("Before");
        base.Operation();
        Console.WriteLine("After");
    }
}

// Usage
IComponent component = new ConcreteComponent();
component = new ConcreteDecorator { component = component };
component.Operation();
// Extends functionality without modifying ConcreteComponent (OCP)

// 5. Factory Pattern - Follows DIP
public interface IProductFactory
{
    Product CreateProduct();
}

public class ConcreteFactory : IProductFactory
{
    public Product CreateProduct()
    {
        return new ConcreteProduct();
    }
}

public class Client
{
    private readonly IProductFactory factory;
    
    public Client(IProductFactory factory)
    {
        this.factory = factory; // DIP - depends on abstraction
    }
    
    public void DoSomething()
    {
        var product = factory.CreateProduct();
    }
}

// 6. Observer Pattern - Follows SRP
public interface IObserver
{
    void Update(string message);
}

public class Subject
{
    private List<IObserver> observers = new();
    
    public void Notify(string message)
    {
        foreach (var observer in observers)
        {
            observer.Update(message); // Each observer has one job
        }
    }
}

// 7. Template Method - Follows OCP and LSP
public abstract class DataProcessor
{
    public void ProcessData(string data)
    {
        ValidateData(data);
        TransformData(data);
        SaveData(data);
    }
    
    protected abstract void ValidateData(string data);
    protected abstract void TransformData(string data);
    protected abstract void SaveData(string data);
}

public class JsonProcessor : DataProcessor
{
    protected override void ValidateData(string data) { }
    protected override void TransformData(string data) { }
    protected override void SaveData(string data) { }
}

// Key Connection Points:
// Pattern          SOLID Principles
// Strategy         OCP (extend without modification)
// Repository       DIP (depend on abstraction)
// Adapter          ISP (create focused interfaces)
// Decorator        OCP (add functionality without modification)
// Factory          DIP (abstract object creation)
// Observer         SRP (each observer has one job)
// Template Method  OCP (extend by overriding methods)
// Singleton        SRP (single instance of one thing)`}]},{id:"q10",question:"How do you test code that follows SOLID principles?",answer:"Code following SOLID principles is naturally testable. Use dependency injection to inject mocks/fakes. Single Responsibility makes unit tests focused. Closed Principle with abstractions allows easy mocking. Interface Segregation enables testing specific behaviors. Dependency Inversion allows test doubles.",codeSnippets:[{language:"csharp",code:`using Xunit;
using Moq;

// Testing code that follows SOLID principles is easy

public interface IEmailService
{
    void SendEmail(string to, string subject, string body);
}

public interface IUserRepository
{
    void Save(User user);
    User GetById(int id);
}

// Service that depends on abstractions (DIP)
public class UserRegistrationService
{
    private readonly IUserRepository userRepository;
    private readonly IEmailService emailService;
    
    public UserRegistrationService(
        IUserRepository userRepository,
        IEmailService emailService)
    {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    
    public void RegisterUser(User user)
    {
        userRepository.Save(user);
        emailService.SendEmail(user.Email, "Welcome", "Welcome to our app");
    }
}

// Easy to test - can mock dependencies
public class UserRegistrationServiceTests
{
    [Fact]
    public void RegisterUser_SavesUserToRepository()
    {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        var mockEmailService = new Mock<IEmailService>();
        
        var service = new UserRegistrationService(
            mockRepository.Object,
            mockEmailService.Object);
        
        var user = new User { Email = "test@example.com", Name = "Test" };
        
        // Act
        service.RegisterUser(user);
        
        // Assert
        // Verify that Save was called with the correct user
        mockRepository.Verify(r => r.Save(It.Is<User>(u => u.Email == "test@example.com")), Times.Once);
    }
    
    [Fact]
    public void RegisterUser_SendsWelcomeEmail()
    {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        var mockEmailService = new Mock<IEmailService>();
        
        var service = new UserRegistrationService(
            mockRepository.Object,
            mockEmailService.Object);
        
        var user = new User { Email = "test@example.com", Name = "Test" };
        
        // Act
        service.RegisterUser(user);
        
        // Assert
        // Verify email was sent
        mockEmailService.Verify(
            e => e.SendEmail(
                It.IsAny<string>(),
                It.IsAny<string>(),
                It.IsAny<string>()),
            Times.Once);
    }
    
    [Fact]
    public void RegisterUser_RepositoryFailure_DoesNotSendEmail()
    {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        mockRepository.Setup(r => r.Save(It.IsAny<User>()))
            .Throws(new Exception("DB Error"));
        
        var mockEmailService = new Mock<IEmailService>();
        
        var service = new UserRegistrationService(
            mockRepository.Object,
            mockEmailService.Object);
        
        var user = new User { Email = "test@example.com" };
        
        // Act & Assert
        Assert.Throws<Exception>(() => service.RegisterUser(user));
        
        // Email should not be sent if save fails
        mockEmailService.Verify(e => e.SendEmail(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Never);
    }
}

// Testing with fake implementations (alternative to mocks)
public class FakeEmailService : IEmailService
{
    public List<string> SentEmails { get; } = new();
    
    public void SendEmail(string to, string subject, string body)
    {
        SentEmails.Add(to);
    }
}

public class FakeUserRepository : IUserRepository
{
    public List<User> SavedUsers { get; } = new();
    
    public void Save(User user)
    {
        SavedUsers.Add(user);
    }
    
    public User GetById(int id)
    {
        return SavedUsers.FirstOrDefault(u => u.Id == id);
    }
}

public class UserRegistrationServiceFakeTests
{
    [Fact]
    public void RegisterUser_WithFakes()
    {
        // Arrange
        var repository = new FakeUserRepository();
        var emailService = new FakeEmailService();
        
        var service = new UserRegistrationService(repository, emailService);
        var user = new User { Email = "test@example.com", Name = "Test" };
        
        // Act
        service.RegisterUser(user);
        
        // Assert
        Assert.Single(repository.SavedUsers);
        Assert.Single(emailService.SentEmails);
        Assert.Equal("test@example.com", emailService.SentEmails[0]);
    }
}

// Benefits of SOLID for Testing:
// 1. Dependency Injection - inject test doubles
// 2. Small Interfaces - test specific behaviors
// 3. Single Responsibility - focused unit tests
// 4. Open/Closed - extend behavior without changing tests
// 5. Liskov Substitution - substitutes work in tests
// 6. Abstraction - can create mocks and fakes

// Anti-pattern - Hard to test without SOLID
public class BadUserRegistrationService
{
    private MySqlDatabase database = new MySqlDatabase(); // Tight coupling
    private SmtpEmailSender emailService = new SmtpEmailSender(); // Tight coupling
    
    public void RegisterUser(User user)
    {
        database.Save(user); // Can't mock
        emailService.SendEmail(user.Email, "Welcome", "Welcome"); // Can't mock
    }
}

// This requires actual database and email service to test!
// No way to inject mocks`}]}]},Og={id:"csharp-multi-threading",name:"Multi-threading",questions:[{id:"q1",question:"What is multi-threading and why is it important in C#?",answer:"Multi-threading allows multiple threads to execute within a single process, enabling concurrent execution of code. It's important for improving application responsiveness, better resource utilization, and handling multiple operations simultaneously.",codeSnippets:[{language:"csharp",code:`// Creating and starting threads
Thread thread1 = new Thread(() => Console.WriteLine("Thread 1"));
Thread thread2 = new Thread(() => Console.WriteLine("Thread 2"));

thread1.Start();
thread2.Start();

thread1.Join(); // Wait for thread1 to complete
thread2.Join(); // Wait for thread2 to complete`}]},{id:"q2",question:"What is the difference between Thread and Task in C#?",answer:"Thread is a low-level abstraction representing an OS thread. Task is a higher-level abstraction built on the ThreadPool that represents asynchronous work. Tasks are more efficient, support better composition, and are preferred in modern C#.",codeSnippets:[{language:"csharp",code:`// Using Thread
Thread thread = new Thread(() => Console.WriteLine("Thread"));
thread.Start();

// Using Task
Task task = Task.Run(() => Console.WriteLine("Task"));
task.Wait();

// Using async/await (recommended)
await Task.Run(() => Console.WriteLine("Async Task"));`}]},{id:"q3",question:"What is a lock and how do you use it for synchronization?",answer:"A lock is a synchronization primitive that ensures only one thread can access a critical section of code at a time. It prevents race conditions when multiple threads access shared resources. Use 'lock' keyword with an object.",codeSnippets:[{language:"csharp",code:`private int counter = 0;
private object lockObject = new object();

public void Increment()
{
    lock (lockObject)
    {
        // Only one thread can execute this at a time
        int temp = counter;
        temp++;
        counter = temp;
    }
}

// Thread-safe alternative using Interlocked
public void IncrementAtomic()
{
    Interlocked.Increment(ref counter);
}`}]},{id:"q4",question:"What are mutexes and semaphores? How do they differ?",answer:"Mutex is a mutual exclusion lock that allows only one thread to access a resource. Semaphore is a signaling mechanism that allows a specified number of threads to access a resource. Semaphore with count=1 is similar to a mutex.",codeSnippets:[{language:"csharp",code:`// Using Mutex
Mutex mutex = new Mutex();

mutex.WaitOne(); // Acquire lock
try
{
    // Critical section
}
finally
{
    mutex.ReleaseMutex(); // Release lock
}

// Using Semaphore (allows N threads)
Semaphore semaphore = new Semaphore(3, 3); // Allow 3 threads

semaphore.WaitOne(); // Acquire one slot
try
{
    // Critical section
}
finally
{
    semaphore.Release(); // Release one slot
}`}]},{id:"q5",question:"What is a ReaderWriterLock and when would you use it?",answer:"ReaderWriterLock allows multiple threads to read simultaneously, but only one thread to write. It's useful when reads are frequent and writes are rare, providing better concurrency than a regular lock.",codeSnippets:[{language:"csharp",code:`private ReaderWriterLockSlim rwLock = new ReaderWriterLockSlim();
private string data = "";

public string ReadData()
{
    rwLock.EnterReadLock();
    try
    {
        return data;
    }
    finally
    {
        rwLock.ExitReadLock();
    }
}

public void WriteData(string value)
{
    rwLock.EnterWriteLock();
    try
    {
        data = value;
    }
    finally
    {
        rwLock.ExitWriteLock();
    }
}`}]},{id:"q6",question:"What is the ThreadPool and how does it improve performance?",answer:"ThreadPool is a collection of threads maintained by the system. It reduces overhead by reusing threads instead of creating new ones for each task. Tasks are queued and executed on available threads, improving performance.",codeSnippets:[{language:"csharp",code:`// Queue work to ThreadPool
ThreadPool.QueueUserWorkItem(state =>
{
    Console.WriteLine("Executing on ThreadPool");
    Thread.Sleep(1000);
});

// Using WaitHandle to wait for completion
ManualResetEvent resetEvent = new ManualResetEvent(false);

ThreadPool.QueueUserWorkItem(state =>
{
    Console.WriteLine("Work completed");
    resetEvent.Set();
});

resetEvent.WaitOne(); // Wait for signal`}]},{id:"q7",question:"What is a race condition and how do you prevent it?",answer:"A race condition occurs when multiple threads access shared data concurrently, leading to unpredictable results. Prevent it using synchronization techniques: locks, mutexes, semaphores, or thread-safe collections.",codeSnippets:[{language:"csharp",code:`// BAD - Race condition
private int unsafeCounter = 0;

public void UnsafeIncrement()
{
    unsafeCounter++; // Not atomic
}

// GOOD - Thread-safe
private int safeCounter = 0;
private object lockObj = new object();

public void SafeIncrement()
{
    lock (lockObj)
    {
        safeCounter++;
    }
}

// GOOD - Using Interlocked
public void AtomicIncrement()
{
    Interlocked.Increment(ref unsafeCounter);
}`}]},{id:"q8",question:"What is a deadlock and how can you avoid it?",answer:"A deadlock occurs when two or more threads are blocked waiting for each other to release resources. Avoid it by: acquiring locks in the same order, using timeouts, minimizing lock scope, or using lock-free structures.",codeSnippets:[{language:"csharp",code:`// BAD - Potential Deadlock
object lock1 = new object();
object lock2 = new object();

Thread t1 = new Thread(() =>
{
    lock (lock1) { lock (lock2) { /* work */ } }
});

Thread t2 = new Thread(() =>
{
    lock (lock2) { lock (lock1) { /* work */ } } // Different order!
});

// GOOD - Avoid deadlock with consistent lock ordering
Thread t3 = new Thread(() =>
{
    lock (lock1) { lock (lock2) { /* work */ } }
});

Thread t4 = new Thread(() =>
{
    lock (lock1) { lock (lock2) { /* work */ } } // Same order
});

// GOOD - Using timeout
if (Monitor.TryEnter(lock1, TimeSpan.FromSeconds(1)))
{
    try { /* critical section */ }
    finally { Monitor.Exit(lock1); }
}`}]},{id:"q9",question:"What is async/await and how does it relate to multi-threading?",answer:"async/await is syntactic sugar for Task-based asynchronous programming. It doesn't require a new thread - the same thread can switch between tasks. It's more efficient for I/O-bound operations than creating new threads.",codeSnippets:[{language:"csharp",code:`// Async/await pattern
public async Task<string> FetchDataAsync()
{
    // This doesn't block the thread while waiting
    HttpClient client = new HttpClient();
    string result = await client.GetStringAsync("https://api.example.com/data");
    return result;
}

// Called asynchronously
await FetchDataAsync();

// Contrast with blocking
public string FetchDataSync()
{
    HttpClient client = new HttpClient();
    // This blocks the thread while waiting
    string result = client.GetStringAsync("https://api.example.com/data").Result;
    return result;
}`}]},{id:"q10",question:"What are thread-safe collections in C#?",answer:"Thread-safe collections from System.Collections.Concurrent allow multiple threads to access them without explicit locking. Examples: ConcurrentBag, ConcurrentQueue, ConcurrentDictionary, ConcurrentStack.",codeSnippets:[{language:"csharp",code:`using System.Collections.Concurrent;

// Thread-safe queue
ConcurrentQueue<int> queue = new ConcurrentQueue<int>();
queue.Enqueue(1);
queue.Enqueue(2);
queue.TryDequeue(out int value);

// Thread-safe dictionary
ConcurrentDictionary<string, int> dict = new ConcurrentDictionary<string, int>();
dict.TryAdd("key", 10);
dict.AddOrUpdate("key", 20, (k, v) => v + 20);

// Thread-safe bag
ConcurrentBag<string> bag = new ConcurrentBag<string>();
bag.Add("item1");
bag.TryTake(out string item);`}]}]},Ig={id:"csharp-async-programming",name:"Asynchronous Programming",questions:[{id:"q1",question:"What is asynchronous programming and why is it important in C#?",answer:"Asynchronous programming allows operations to run without blocking the calling thread. It's important for improving application responsiveness, especially for I/O operations like database queries, API calls, and file access. It enables better resource utilization by allowing the thread to work on other tasks while waiting.",codeSnippets:[{language:"csharp",code:`// Synchronous - blocks thread
public string FetchDataSync()
{
    System.Threading.Thread.Sleep(2000); // Simulates I/O operation
    return "Data";
}

// Asynchronous - doesn't block thread
public async Task<string> FetchDataAsync()
{
    await Task.Delay(2000); // Simulates I/O operation
    return "Data";
}

// Usage
string result = FetchDataSync(); // Thread is blocked for 2 seconds

var result = await FetchDataAsync(); // Thread is free to do other work`}]},{id:"q2",question:"What is the difference between Task and async/await?",answer:"Task is the underlying abstraction representing asynchronous work. async/await is syntactic sugar that makes working with Tasks easier and more readable. async methods return Task or Task<T>, and await unwraps the result.",codeSnippets:[{language:"csharp",code:`// Using Task directly
public Task<string> GetDataTask()
{
    return Task.Run(async () => 
    {
        await Task.Delay(1000);
        return "Data";
    });
}

// Using async/await (more readable)
public async Task<string> GetDataAsync()
{
    await Task.Delay(1000);
    return "Data";
}

// Calling Task version
GetDataTask().ContinueWith(task => 
{
    Console.WriteLine(task.Result);
});

// Calling async version (cleaner)
var data = await GetDataAsync();
Console.WriteLine(data);`}]},{id:"q3",question:"What is async/await and how does it work?",answer:"async/await is syntactic sugar for working with Tasks. The 'async' keyword enables the 'await' operator and returns a Task. 'await' suspends execution until the awaited Task completes, allowing other code to run.",codeSnippets:[{language:"csharp",code:`// Async method signature
public async Task<string> FetchDataAsync()
{
    // Method must be async to use await
    var response = await HttpClient.GetAsync("https://api.example.com/data");
    var content = await response.Content.ReadAsStringAsync();
    return content;
}

// Async void (not recommended except for event handlers)
public async void OnButtonClick()
{
    var data = await FetchDataAsync();
}

// Async Task (recommended)
public async Task OnButtonClickAsync()
{
    var data = await FetchDataAsync();
}

// Async Task<T> (with return value)
public async Task<int> CalculateAsync()
{
    await Task.Delay(1000);
    return 42;
}

// Usage
int result = await CalculateAsync();`}]},{id:"q4",question:"What is the relationship between async/await and the thread pool?",answer:"async/await doesn't necessarily use new threads. When you await a Task, the current thread is freed and can handle other work. The Task may use a thread from the ThreadPool, but often I/O operations don't use threads at all.",codeSnippets:[{language:"csharp",code:`public async Task DemonstrateAsync()
{
    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} started");
    
    // This doesn't block the thread
    await Task.Delay(1000);
    
    // May run on different thread
    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} resumed");
}

// With CPU-bound work
public async Task CpuBoundAsync()
{
    // Run on ThreadPool to avoid blocking
    var result = await Task.Run(() => 
    {
        // Long CPU operation
        return ExpensiveCalculation();
    });
    
    return result;
}

// Key difference:
// I/O operations (HTTP, Database) use completion-based asynchrony
// CPU operations should use Task.Run to avoid blocking the UI thread`}]},{id:"q5",question:"What is the difference between Task.Run and Task.Delay?",answer:"Task.Run executes CPU-bound work on a thread pool thread. Task.Delay creates a Task that completes after a specified time without using a thread. Use Task.Run for CPU work, Task.Delay for timing/I/O operations.",codeSnippets:[{language:"csharp",code:`// Task.Delay - doesn't use a thread
public async Task DelayExample()
{
    await Task.Delay(2000); // Just waits, no thread
    Console.WriteLine("Waited 2 seconds");
}

// Task.Run - uses thread pool thread
public async Task RunExample()
{
    var result = await Task.Run(() =>
    {
        // CPU-intensive work on separate thread
        return ExpensiveCalculation();
    });
    return result;
}

// Real-world example
public async Task<Data> FetchAndProcessAsync(string url)
{
    // I/O operation - no thread needed
    var response = await httpClient.GetAsync(url);
    
    // CPU-intensive operation - use Task.Run
    var processed = await Task.Run(() => ProcessData(response));
    
    return processed;
}`}]},{id:"q6",question:"How do you handle exceptions in async/await?",answer:"Use try-catch blocks around await statements just like synchronous code. Exceptions are captured and re-thrown when the Task is awaited. Use Task.WhenAll to handle multiple exceptions.",codeSnippets:[{language:"csharp",code:`// Try-catch with async/await
public async Task<string> FetchDataAsync()
{
    try
    {
        var response = await httpClient.GetAsync("https://api.example.com/data");
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"HTTP error: {ex.Message}");
        throw; // Re-throw or handle
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
        throw;
    }
}

// Handle multiple async operations
public async Task<(Data1, Data2)> FetchMultipleAsync()
{
    try
    {
        var task1 = FetchData1Async();
        var task2 = FetchData2Async();
        
        await Task.WhenAll(task1, task2);
        
        return (task1.Result, task2.Result);
    }
    catch (Exception ex)
    {
        // Both exceptions might be in ex.InnerExceptions
        Console.WriteLine($"Error: {ex.Message}");
        throw;
    }
}`}]},{id:"q7",question:"What is deadlock in async/await and how do you prevent it?",answer:"Deadlock occurs when you block on an async operation using .Result or .Wait(). The thread is blocked waiting for the Task, but the Task needs the same context (like UI thread) to complete. Use await instead of .Result or .Wait().",codeSnippets:[{language:"csharp",code:`// DEADLOCK - Bad practice
public void BadMethod()
{
    // If FetchDataAsync needs the UI context, this deadlocks
    var data = FetchDataAsync().Result; // BLOCKS!
}

// Also deadlock risk
public void AnotherBadMethod()
{
    var task = FetchDataAsync();
    task.Wait(); // Blocks thread
    var data = task.Result;
}

// GOOD - Use async all the way
public async Task GoodMethodAsync()
{
    var data = await FetchDataAsync();
    return data;
}

// If you must call async from sync context (rare):
public string SafeMethod()
{
    var task = FetchDataAsync();
    // Don't use Result/Wait - marshal to another thread
    return task.GetAwaiter().GetResult();
}

// Best practice: Make the caller async
public async Task CallerAsync()
{
    var data = await FetchDataAsync();
}`}]},{id:"q8",question:"What is ConfigureAwait and why is it important?",answer:"ConfigureAwait(false) tells the await to not capture the current SynchronizationContext. This improves performance in library code and helps avoid deadlocks in async over sync scenarios. Use it in library code unless you need the original context.",codeSnippets:[{language:"csharp",code:`// Without ConfigureAwait - captures UI context
public async Task<string> FetchWithContextAsync()
{
    var response = await httpClient.GetAsync(url);
    // Resumes on UI thread (slow if it's a library method)
    return await response.Content.ReadAsStringAsync();
}

// With ConfigureAwait - doesn't capture context
public async Task<string> FetchWithoutContextAsync()
{
    var response = await httpClient.GetAsync(url).ConfigureAwait(false);
    // Resumes on any thread (faster)
    return await response.Content.ReadAsStringAsync().ConfigureAwait(false);
}

// Best practice in libraries
public async Task<Data> GetDataAsync()
{
    using var httpClient = new HttpClient();
    
    var response = await httpClient
        .GetAsync("https://api.example.com/data")
        .ConfigureAwait(false);
    
    var content = await response.Content
        .ReadAsStringAsync()
        .ConfigureAwait(false);
    
    return JsonConvert.DeserializeObject<Data>(content);
}

// ConfigureAwait(true) - important to preserve context
public async Task UpdateUIAsync()
{
    var data = await FetchDataAsync().ConfigureAwait(true);
    // Must resume on UI thread to update controls
    myLabel.Text = data;
}`}]},{id:"q9",question:"How do you run multiple async operations concurrently?",answer:"Use Task.WhenAll to wait for multiple Tasks concurrently, or Task.WhenAny to wait for the first one. Start all tasks first, then await together to run concurrently.",codeSnippets:[{language:"csharp",code:`// Sequential - slow
public async Task<(Data1, Data2, Data3)> FetchSequentialAsync()
{
    var data1 = await FetchData1Async();
    var data2 = await FetchData2Async();
    var data3 = await FetchData3Async();
    return (data1, data2, data3);
}

// Concurrent - fast
public async Task<(Data1, Data2, Data3)> FetchConcurrentAsync()
{
    var task1 = FetchData1Async();
    var task2 = FetchData2Async();
    var task3 = FetchData3Async();
    
    await Task.WhenAll(task1, task2, task3);
    
    return (task1.Result, task2.Result, task3.Result);
}

// Task.WhenAny - return first completed
public async Task<Data> FetchFirstAsync()
{
    var task1 = FetchFromServerAsync("server1");
    var task2 = FetchFromServerAsync("server2");
    var task3 = FetchFromServerAsync("server3");
    
    var completedTask = await Task.WhenAny(task1, task2, task3);
    
    return ((Task<Data>)completedTask).Result;
}

// Handle exceptions with WhenAll
public async Task<List<Data>> FetchMultipleAsync(IEnumerable<string> urls)
{
    var tasks = urls.Select(url => FetchAsync(url)).ToList();
    
    try
    {
        var results = await Task.WhenAll(tasks);
        return results.ToList();
    }
    catch (Exception ex)
    {
        // May contain multiple exceptions in InnerExceptions
        throw;
    }
}`}]},{id:"q10",question:"What is async void and when should you use it?",answer:"async void methods have no way to signal completion or report exceptions. They should only be used for event handlers where the caller doesn't need to wait. Use async Task or async Task<T> for all other scenarios.",codeSnippets:[{language:"csharp",code:`// AVOID - async void (except for event handlers)
public async void BadAsyncMethod()
{
    // No way to wait for completion
    // Exceptions will crash the app
    await FetchDataAsync();
}

// GOOD - async Task
public async Task GoodAsyncMethod()
{
    var data = await FetchDataAsync();
    return data;
}

// ACCEPTABLE - async void for event handlers only
public async void OnButtonClick(object sender, EventArgs e)
{
    try
    {
        var data = await FetchDataAsync();
        UpdateUI(data);
    }
    catch (Exception ex)
    {
        MessageBox.Show($"Error: {ex.Message}");
    }
}

// BETTER - Event handler that returns Task
public class MyControl : Control
{
    private async void button_Click(object sender, EventArgs e)
    {
        await HandleClickAsync();
    }
    
    public async Task HandleClickAsync()
    {
        var data = await FetchDataAsync();
        UpdateUI(data);
    }
}

// Rule of thumb
// async void: Only for top-level event handlers
// async Task: For all other methods
// async Task<T>: When you need to return a value`}]}]},xg={id:"csharp-linq",name:"LINQ (Language Integrated Query)",questions:[{id:"q1",question:"What is LINQ and why is it important in C#?",answer:"LINQ (Language Integrated Query) provides a uniform way to query different data sources using C# syntax. It works with objects (LINQ to Objects), databases (LINQ to SQL/Entity Framework), XML (LINQ to XML), and more. It's important because it provides type-safe, readable queries with compile-time checking and IntelliSense support.",codeSnippets:[{language:"csharp",code:`using System;
using System.Linq;
using System.Collections.Generic;

List<int> numbers = new() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// LINQ query - filters even numbers
var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
// Result: [2, 4, 6, 8, 10]

// LINQ with objects
var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", Salary = 50000 },
    new { Id = 2, Name = "Bob", Salary = 60000 },
    new { Id = 3, Name = "Charlie", Salary = 55000 }
};

// Filter and select - type-safe and readable
var highEarners = employees
    .Where(e => e.Salary > 50000)
    .Select(e => e.Name)
    .ToList();
// Result: ["Bob", "Charlie"]`}]},{id:"q2",question:"What is the difference between query syntax and method syntax in LINQ?",answer:"Query syntax looks like SQL and is translated to method syntax at compile time. Method syntax uses extension methods like Where, Select. Both produce the same IL code. Use query syntax for complex queries, method syntax for simple ones.",codeSnippets:[{language:"csharp",code:`var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Query Syntax (SQL-like)
var resultQuery = from n in numbers
                  where n > 5
                  select n * 2;

// Method Syntax (Lambda expressions)
var resultMethod = numbers
    .Where(n => n > 5)
    .Select(n => n * 2);

// Both produce same result: [12, 14, 16, 18, 20]

// Complex query - query syntax is cleaner
var complexQuery = from emp in employees
                   where emp.Salary > 50000
                   group emp by emp.Department into deptGroup
                   select new
                   {
                       Department = deptGroup.Key,
                       AvgSalary = deptGroup.Average(e => e.Salary)
                   };

// Same with method syntax (more verbose)
var complexMethod = employees
    .Where(emp => emp.Salary > 50000)
    .GroupBy(emp => emp.Department)
    .Select(deptGroup => new
    {
        Department = deptGroup.Key,
        AvgSalary = deptGroup.Average(e => e.Salary)
    });`}]},{id:"q3",question:"What is deferred execution in LINQ?",answer:"Deferred execution means the query doesn't run immediately when defined. It runs when you enumerate the results (call ToList, ForEach, etc.). This allows you to build queries dynamically and only execute when needed.",codeSnippets:[{language:"csharp",code:`var numbers = new List<int> { 1, 2, 3, 4, 5 };

// Deferred execution - query not executed yet
IEnumerable<int> query = numbers.Where(n => n > 2);

// Add more conditions - still not executed
query = query.Select(n => n * 2);

// Now execute - deferred execution happens here
var result = query.ToList();

// Practical example: Building dynamic queries
public List<Employee> GetEmployees(string department = null, decimal? minSalary = null)
{
    IQueryable<Employee> query = _dbContext.Employees;
    
    // Conditions added dynamically - not executed yet
    if (!string.IsNullOrEmpty(department))
        query = query.Where(e => e.Department == department);
    
    if (minSalary.HasValue)
        query = query.Where(e => e.Salary >= minSalary);
    
    // Query executes here when ToList is called
    return query.ToList();
}

// Problem with deferred execution
var list = numbers.Where(n => n > 2);
numbers.Add(6); // Modifying source after query definition

// Enumeration happens here - includes the newly added 6!
foreach(var n in list)
    Console.WriteLine(n); // 3, 4, 5, 6

// Solution: Use ToList to execute immediately
var list2 = numbers.Where(n => n > 2).ToList();
numbers.Add(7); // Adding now doesn't affect list2`}]},{id:"q4",question:"What are common LINQ methods and when to use each?",answer:"Common LINQ methods: Where (filter), Select (transform), FirstOrDefault/Single (get one item), OrderBy (sort), GroupBy (group), Join (combine), Aggregate (calculate), Skip/Take (pagination), Any/All (check conditions).",codeSnippets:[{language:"csharp",code:`var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", Salary = 50000, Dept = "IT" },
    new { Id = 2, Name = "Bob", Salary = 60000, Dept = "HR" },
    new { Id = 3, Name = "Charlie", Salary = 55000, Dept = "IT" },
    new { Id = 4, Name = "David", Salary = 52000, Dept = "HR" }
};

// WHERE - Filter
var highSalaries = employees.Where(e => e.Salary > 50000);

// SELECT - Transform
var names = employees.Select(e => e.Name);

// FIRST/FIRSTORDEFAULT - Get single item
var first = employees.First();
var firstIT = employees.FirstOrDefault(e => e.Dept == "IT");
var notFound = employees.FirstOrDefault(e => e.Dept == "Finance"); // null

// SINGLE/SINGLEORDEFAULT - Exactly one item
var admin = employees.SingleOrDefault(e => e.Id == 1);

// ORDERBY - Sort
var sortedByName = employees.OrderBy(e => e.Name);
var sortedBySalaryDesc = employees.OrderByDescending(e => e.Salary);
var multiSort = employees.OrderBy(e => e.Dept).ThenByDescending(e => e.Salary);

// GROUPBY - Group items
var byDept = employees.GroupBy(e => e.Dept);
foreach(var group in byDept)
{
    Console.WriteLine($"{group.Key}: {group.Count()} employees");
}

// JOIN - Combine collections
var departments = new List<Department>
{
    new { Id = 1, Name = "IT" },
    new { Id = 2, Name = "HR" }
};

var joined = employees.Join(departments,
    e => e.DeptId,
    d => d.Id,
    (e, d) => new { e.Name, Department = d.Name });

// SKIP/TAKE - Pagination
var page2 = employees.OrderBy(e => e.Id).Skip(2).Take(2);

// ANY/ALL - Check conditions
bool hasHighSalary = employees.Any(e => e.Salary > 60000);
bool allAbove40k = employees.All(e => e.Salary >= 40000);

// AGGREGATE - Calculate
decimal totalSalary = employees.Sum(e => e.Salary);
double avgSalary = employees.Average(e => e.Salary);
int count = employees.Count();
var maxSalary = employees.Max(e => e.Salary);`}]},{id:"q5",question:"What is the difference between LINQ to Objects and LINQ to SQL?",answer:"LINQ to Objects queries in-memory collections using delegates. LINQ to SQL/Entity Framework queries databases and translates C# to SQL. LINQ to Objects executes in-memory, LINQ to SQL on the server. Use LINQ to Objects for collections, LINQ to SQL for databases.",codeSnippets:[{language:"csharp",code:`// LINQ to Objects - In-memory collection
var employees = new List<Employee>
{
    new { Name = "Alice", Salary = 50000 },
    new { Name = "Bob", Salary = 60000 }
};

// Executes in-memory with delegates
var result = employees
    .Where(e => e.Salary > 50000)
    .ToList(); // Filters all data in memory

// LINQ to SQL / Entity Framework - Database
public class EmployeeContext : DbContext
{
    public DbSet<Employee> Employees { get; set; }
}

using (var context = new EmployeeContext())
{
    // Executes on SQL Server - only matching rows returned
    var result = context.Employees
        .Where(e => e.Salary > 50000)
        .ToList(); // Translates to SQL: WHERE Salary > 50000
}

// Key difference in performance
var numbers = Enumerable.Range(1, 1000000).ToList();

// LINQ to Objects - loads all million numbers, filters in memory
var slowQuery = numbers.Where(n => n > 500000).ToList();

// LINQ to SQL - only fetches matching rows from database
using (var context = new DbContext())
{
    var fastQuery = context.Numbers
        .Where(n => n > 500000)
        .ToList();
}

// Important: Only simple operations work in LINQ to SQL
var employees = new List<Employee> { ... };

// Works in LINQ to Objects
var complex = employees
    .Where(e => e.Salary > 50000)
    .Select(e => new { e.Name, Length = e.Name.Length }) // String.Length works
    .ToList();

// May not work with LINQ to SQL - depends on database provider
var dbComplex = context.Employees
    .Where(e => e.Salary > 50000)
    .Select(e => new { e.Name, Length = e.Name.Length }) // Might fail
    .ToList();`}]},{id:"q6",question:"How do you perform a GroupBy operation in LINQ?",answer:"GroupBy groups elements by a key and returns IEnumerable<IGrouping<TKey, TElement>>. Each group can be aggregated. Use for creating summaries, calculations by category, etc.",codeSnippets:[{language:"csharp",code:`var sales = new List<Sale>
{
    new { Product = "Laptop", Quantity = 2, Price = 1000 },
    new { Product = "Mouse", Quantity = 5, Price = 20 },
    new { Product = "Laptop", Quantity = 1, Price = 1000 },
    new { Product = "Keyboard", Quantity = 3, Price = 50 }
};

// Simple GroupBy
var byProduct = sales.GroupBy(s => s.Product);

foreach(var group in byProduct)
{
    Console.WriteLine($"{group.Key}:");
    foreach(var item in group)
        Console.WriteLine($"  Qty: {item.Quantity}, Price: {item.Price}");
}

// GroupBy with aggregation
var productSummary = sales
    .GroupBy(s => s.Product)
    .Select(g => new
    {
        Product = g.Key,
        TotalQuantity = g.Sum(s => s.Quantity),
        TotalRevenue = g.Sum(s => s.Quantity * s.Price),
        Count = g.Count()
    })
    .ToList();

foreach(var summary in productSummary)
{
    Console.WriteLine(\`\${summary.Product}: \${summary.TotalQuantity} units, \${summary.TotalRevenue}\`);
}

// GroupBy multiple keys
var employeeSales = new List<Sale>
{
    new { Employee = "Alice", Product = "A", Amount = 100 },
    new { Employee = "Bob", Product = "A", Amount = 150 },
    new { Employee = "Alice", Product = "B", Amount = 200 }
};

var byEmployeeAndProduct = employeeSales
    .GroupBy(s => new { s.Employee, s.Product })
    .Select(g => new
    {
        Employee = g.Key.Employee,
        Product = g.Key.Product,
        Total = g.Sum(s => s.Amount)
    });

// GroupBy with where clause
var topProducts = sales
    .GroupBy(s => s.Product)
    .Where(g => g.Sum(s => s.Quantity) > 2)
    .Select(g => new
    {
        Product = g.Key,
        Quantity = g.Sum(s => s.Quantity)
    });`}]},{id:"q7",question:"How do you perform a Join operation in LINQ?",answer:"Use Join to combine two collections based on a key. Supports inner join, left join (with DefaultIfEmpty), and right join. Alternative: use query syntax with 'join' keyword.",codeSnippets:[{language:"csharp",code:`var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", DeptId = 1 },
    new { Id = 2, Name = "Bob", DeptId = 2 },
    new { Id = 3, Name = "Charlie", DeptId = 1 }
};

var departments = new List<Department>
{
    new { Id = 1, Name = "IT" },
    new { Id = 2, Name = "HR" }
};

// Inner Join - Method syntax
var innerJoin = employees.Join(departments,
    e => e.DeptId,          // outer key
    d => d.Id,              // inner key
    (e, d) => new           // result selector
    {
        e.Name,
        Department = d.Name
    });

// Inner Join - Query syntax (cleaner)
var innerJoinQuery = from emp in employees
                     join dept in departments on emp.DeptId equals dept.Id
                     select new { emp.Name, Department = dept.Name };

// Left Join - Include employees without matching department
var leftJoin = employees.GroupJoin(departments,
    e => e.DeptId,
    d => d.Id,
    (e, depts) => new
    {
        e.Name,
        Department = depts.FirstOrDefault()?.Name ?? "No Department"
    });

// Left Join - Query syntax with DefaultIfEmpty
var leftJoinQuery = from emp in employees
                    join dept in departments on emp.DeptId equals dept.Id into deptGroup
                    from d in deptGroup.DefaultIfEmpty()
                    select new
                    {
                        emp.Name,
                        Department = d?.Name ?? "No Department"
                    };

// Multiple joins
var orders = new List<Order>
{
    new { Id = 1, EmployeeId = 1, Amount = 100 },
    new { Id = 2, EmployeeId = 2, Amount = 200 }
};

var multiJoin = from order in orders
                join emp in employees on order.EmployeeId equals emp.Id
                join dept in departments on emp.DeptId equals dept.Id
                select new
                {
                    order.Id,
                    emp.Name,
                    dept.Name,
                    order.Amount
                };`}]},{id:"q8",question:"What are Select and SelectMany? What's the difference?",answer:"Select projects each element to a new form. SelectMany flattens nested collections. Use Select for one-to-one mapping, SelectMany for one-to-many mapping (like SQL CROSS APPLY).",codeSnippets:[{language:"csharp",code:`var students = new List<Student>
{
    new { Name = "Alice", Subjects = new[] { "Math", "English" } },
    new { Name = "Bob", Subjects = new[] { "Math", "Science" } }
};

// SELECT - projects each element (one-to-one)
var names = students.Select(s => s.Name);
// Result: ["Alice", "Bob"]

var enrollments = students.Select(s => new
{
    s.Name,
    SubjectCount = s.Subjects.Length
});
// Result: [{ Name: "Alice", SubjectCount: 2 }, ...]

// SELECTMANY - flattens collections (one-to-many)
var allSubjects = students.SelectMany(s => s.Subjects);
// Result: ["Math", "English", "Math", "Science"]

var studentSubjects = students.SelectMany(
    s => s.Subjects,
    (student, subject) => new
    {
        Student = student.Name,
        Subject = subject
    });
// Result: [
//   { Student: "Alice", Subject: "Math" },
//   { Student: "Alice", Subject: "English" },
//   { Student: "Bob", Subject: "Math" },
//   { Student: "Bob", Subject: "Science" }
// ]

// Query syntax alternative
var flatQuery = from student in students
                from subject in student.Subjects
                select new
                {
                    Student = student.Name,
                    Subject = subject
                };

// SelectMany with orders
var orders = new List<Order>
{
    new { CustomerId = 1, Items = new[] { "A", "B", "C" } },
    new { CustomerId = 2, Items = new[] { "D", "E" } }
};

var orderItems = orders.SelectMany(
    o => o.Items,
    (order, item) => new
    {
        order.CustomerId,
        Item = item
    });`}]},{id:"q9",question:"How do you handle null values and use DefaultIfEmpty in LINQ?",answer:"Use null-coalescing operator (??), null-conditional operator (?.), or DefaultIfEmpty to handle empty sequences. DefaultIfEmpty returns a default value when the sequence is empty, useful for outer joins.",codeSnippets:[{language:"csharp",code:`var employees = new List<Employee>
{
    new { Name = "Alice", ManagerId = null },
    new { Name = "Bob", ManagerId = 1 },
    new { Name = "Charlie", ManagerId = 1 }
};

var managers = new List<Manager>
{
    new { Id = 1, Name = "Alice" }
};

// Null-coalescing operator (??)
var managerNames = employees.Select(e =>
    e.ManagerId.HasValue ? e.ManagerId.ToString() : "No Manager");

// Null-conditional operator (?.)
var result = employees
    .Select(e => new
    {
        e.Name,
        ManagerName = e.Manager?.Name ?? "No Manager" // Safe navigation
    });

// DefaultIfEmpty - left outer join
var leftJoin = from emp in employees
               join mgr in managers on emp.ManagerId equals mgr.Id into managerGroup
               from m in managerGroup.DefaultIfEmpty()
               select new
               {
                   Employee = emp.Name,
                   Manager = m?.Name ?? "No Manager"
               };

// DefaultIfEmpty with custom default
var query = employees
    .Where(e => e.Salary > 100000)
    .DefaultIfEmpty(new Employee { Name = "No results" });

foreach(var emp in query)
    Console.WriteLine(emp.Name); // "No results" if no employees found

// Handling empty collections
var numbers = new List<int>();

// This throws IndexOutOfRangeException
// var first = numbers.First();

// This returns null/default
var safeFirst = numbers.FirstOrDefault();

var customDefault = numbers.FirstOrDefault(() => 0);

// Check before accessing
var hasData = numbers.Any();
if (hasData)
{
    var first = numbers.First();
}

// Safe with null coalescing
var first2 = numbers.FirstOrDefault() ?? 0;`}]},{id:"q10",question:"What is the difference between IEnumerable and IQueryable in LINQ?",answer:"IEnumerable uses delegates (LINQ to Objects) and executes in-memory. IQueryable uses expression trees and can be translated to other query languages (SQL, OData). Use IEnumerable for collections, IQueryable for databases.",codeSnippets:[{language:"csharp",code:`// IEnumerable - In-memory, uses delegates
IEnumerable<Employee> enumerable = employees;
var enumerableResult = enumerable
    .Where(e => e.Salary > 50000)  // Delegates - executes in C#
    .Select(e => e.Name);

// Loads all employees in memory, then filters
foreach(var item in enumerableResult)
    Console.WriteLine(item);

// IQueryable - Deferred, uses expression trees
IQueryable<Employee> queryable = context.Employees.AsQueryable();
var queryableResult = queryable
    .Where(e => e.Salary > 50000)  // Expression tree - translated to SQL
    .Select(e => e.Name);

// Sends SQL to database, returns only matching rows
foreach(var item in queryableResult)
    Console.WriteLine(item);

// Key difference - where clauses
var list = new List<Employee>
{
    new { Id = 1, Name = "Alice", Manager = new Manager { Name = "Bob" } },
    new { Id = 2, Name = "Bob", Manager = null }
};

// IEnumerable - works with any delegate
var ienumResult = list
    .AsEnumerable()
    .Where(e => e.Manager.Name == "Bob") // Works because delegates can use custom C# code
    .ToList();

// IQueryable - must be translatable to SQL
var iqueryResult = list
    .AsQueryable()
    .Where(e => e.Manager.Name == "Bob") // Might fail - can't translate navigation to SQL
    .ToList();

// Solution for IQueryable
var iqueryResult2 = list
    .AsQueryable()
    .Where(e => e.Manager != null && e.Manager.Name == "Bob")
    .ToList();

// Performance difference
// LINQ to Objects - loads all 1 million records
var slow = employees.AsEnumerable()
    .Where(e => e.Salary > 50000)
    .ToList();

// LINQ to SQL - only fetches matching records
var fast = context.Employees
    .Where(e => e.Salary > 50000)
    .ToList();`}]},{id:"q11",question:"How do you write complex LINQ queries with multiple conditions?",answer:"Combine Where, OrderBy, GroupBy, and Select clauses. For complex conditions, use multiple Where calls or build conditions dynamically. Query syntax is often cleaner for complex queries.",codeSnippets:[{language:"csharp",code:`var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", Dept = "IT", Salary = 70000, YearsExp = 5 },
    new { Id = 2, Name = "Bob", Dept = "HR", Salary = 60000, YearsExp = 3 },
    new { Id = 3, Name = "Charlie", Dept = "IT", Salary = 65000, YearsExp = 4 },
    new { Id = 4, Name = "David", Dept = "Finance", Salary = 75000, YearsExp = 6 }
};

// Complex query with query syntax
var complexQuery = from emp in employees
                   where emp.Salary > 60000 && emp.YearsExp >= 4
                   group emp by emp.Dept into deptGroup
                   where deptGroup.Count() > 1
                   select new
                   {
                       Department = deptGroup.Key,
                       Count = deptGroup.Count(),
                       AvgSalary = deptGroup.Average(e => e.Salary),
                       Employees = deptGroup.Select(e => e.Name).ToList()
                   };

// Same with method syntax (more verbose)
var methodQuery = employees
    .Where(emp => emp.Salary > 60000 && emp.YearsExp >= 4)
    .GroupBy(emp => emp.Dept)
    .Where(g => g.Count() > 1)
    .Select(deptGroup => new
    {
        Department = deptGroup.Key,
        Count = deptGroup.Count(),
        AvgSalary = deptGroup.Average(e => e.Salary),
        Employees = deptGroup.Select(e => e.Name).ToList()
    });

// Multiple Where conditions
var filtered = employees
    .Where(e => e.Salary > 60000)
    .Where(e => e.YearsExp >= 4)
    .Where(e => !string.IsNullOrEmpty(e.Name))
    .OrderByDescending(e => e.Salary)
    .ThenBy(e => e.Name);

// Dynamic query building
public IEnumerable<Employee> SearchEmployees(
    string department = null,
    decimal? minSalary = null,
    int? minExperience = null)
{
    var query = employees.AsEnumerable();
    
    if (!string.IsNullOrEmpty(department))
        query = query.Where(e => e.Dept == department);
    
    if (minSalary.HasValue)
        query = query.Where(e => e.Salary >= minSalary);
    
    if (minExperience.HasValue)
        query = query.Where(e => e.YearsExp >= minExperience);
    
    return query.OrderBy(e => e.Name);
}

// Complex aggregation
var report = employees
    .GroupBy(e => e.Dept)
    .Select(g => new
    {
        Department = g.Key,
        TotalEmployees = g.Count(),
        AvgSalary = g.Average(e => e.Salary),
        MaxSalary = g.Max(e => e.Salary),
        MinSalary = g.Min(e => e.Salary),
        HighEarners = g
            .Where(e => e.Salary > g.Average(x => x.Salary))
            .Select(e => e.Name)
            .ToList()
    })
    .OrderByDescending(r => r.AvgSalary);`}]},{id:"q12",question:"What are performance considerations when using LINQ?",answer:"Avoid N+1 queries with LINQ to SQL. Use Include() for eager loading. Materialize data at appropriate times with ToList(). Use IQueryable for databases, IEnumerable for collections. Filter on the server before bringing data to memory.",codeSnippets:[{language:"csharp",code:`// N+1 Problem - Bad
var employees = context.Employees.ToList(); // Query 1: Gets all employees
foreach(var emp in employees)
{
    var dept = context.Departments.FirstOrDefault(d => d.Id == emp.DeptId); // N queries
    Console.WriteLine($"{emp.Name} - {dept.Name}");
}
// Total queries: 1 + N

// Solution 1: Eager loading with Include
var empWithDepts = context.Employees
    .Include(e => e.Department) // Loads department in same query
    .ToList();

foreach(var emp in empWithDepts)
{
    Console.WriteLine($"{emp.Name} - {emp.Department.Name}");
}
// Total queries: 1

// Solution 2: Join
var joined = from emp in context.Employees
             join dept in context.Departments on emp.DeptId equals dept.Id
             select new { emp.Name, DeptName = dept.Name };

// Materializing at wrong time - Bad
var query = context.Employees
    .Where(e => e.Salary > 50000)
    .ToList() // Materializes all matching employees
    .Where(e => e.Name.StartsWith("A")) // Filters in-memory
    .ToList();

// Better - Filter on database
var better = context.Employees
    .Where(e => e.Salary > 50000 && e.Name.StartsWith("A"))
    .ToList(); // Materializes only filtered results

// Using IQueryable instead of IEnumerable
var slow = GetAllEmployees() // Returns IEnumerable
    .Where(e => e.Salary > 50000)
    .ToList();

var fast = context.Employees.AsQueryable() // IQueryable
    .Where(e => e.Salary > 50000)
    .ToList();

// Avoiding inefficient projections
var bad = context.Employees
    .Select(e => e) // Unnecessary
    .ToList();

var good = context.Employees
    .Select(e => new { e.Id, e.Name })
    .ToList();

// Use AsNoTracking for read-only queries
var tracked = context.Employees
    .Where(e => e.Salary > 50000)
    .ToList(); // Entity Framework tracks changes

var untracked = context.Employees
    .AsNoTracking()
    .Where(e => e.Salary > 50000)
    .ToList(); // Faster - no tracking overhead`}]}]},kg={id:"csharp-garbage-collection",name:"Garbage Collection",questions:[{id:"q1",question:"What is garbage collection and why is it important?",answer:"Garbage collection is the automatic memory management process that frees memory occupied by objects no longer needed. It's important because it eliminates manual memory management, prevents memory leaks, and reduces the chance of bugs like accessing freed memory or double-freeing.",codeSnippets:[{language:"csharp",code:`// In languages without GC (like C++), you must manage memory manually
// void* ptr = malloc(sizeof(int));
// free(ptr);  // Easy to forget, leading to leaks

// In C#, the garbage collector handles this
public class MyClass
{
    private byte[] data = new byte[1000000]; // 1MB of data
}

// Memory allocated automatically
var obj = new MyClass();

// When 'obj' is no longer reachable, garbage collector
// automatically frees the memory
obj = null; // Object can now be collected
// GC will free the 1MB when it runs

// Benefits:
// 1. No manual memory management needed
// 2. No memory leaks from forgetting to free
// 3. No use-after-free bugs
// 4. No double-free bugs

// Drawback:
// - Unpredictable pause times when GC runs
// - Can't control exactly when memory is freed`}]},{id:"q2",question:"How does .NET garbage collection work?",answer:"The .NET garbage collector uses mark-and-sweep algorithm. It starts from roots (static variables, local variables, registers), marks all reachable objects, and sweaps (frees) unmarked objects. It uses generational collection for performance: most objects die young (Gen 0), rarely collected objects (Gen 2).",codeSnippets:[{language:"csharp",code:`// Garbage Collection Process:
// 1. Pause all threads
// 2. Mark phase: Start from roots, mark all reachable objects
// 3. Sweep phase: Free unmarked objects
// 4. Compact: Move objects together to reduce fragmentation
// 5. Resume threads

public class GCDemo
{
    public void Demonstrate()
    {
        // Local variable (root)
        var obj1 = new MyObject();
        
        // obj1 is reachable from local variable
        // - During GC.Mark: marked as reachable
        
        obj1 = null; // No longer reachable
        // - During next GC: sweep phase will collect this memory
        
        // Reference from another object
        var obj2 = new MyObject();
        var obj3 = new Container { Item = obj2 };
        
        // obj2 is reachable through obj3.Item
        // Even if obj2 local variable goes out of scope,
        // the object still exists because obj3 references it
        
        obj3 = null; // Now obj2 is also unreachable
        // Both will be collected in next GC
    }
}

// Roots are:
// - Local variables in methods
// - Static fields
// - CPU registers holding references
// - GC handles (pinned objects)

public static class RootsExample
{
    private static MyObject staticField; // Root
    
    public void Method()
    {
        var localVar = new MyObject(); // Root
        staticField = new MyObject();   // Root (through static field)
        
        var temp = new MyObject();
        temp = null; // This object becomes unreachable
        // Will be collected next GC cycle
    }
}`}]},{id:"q3",question:"What are generations in garbage collection? Explain Gen 0, Gen 1, and Gen 2.",answer:"Generations are a performance optimization. Gen 0 is for new objects, Gen 1 for survivors, Gen 2 for long-lived objects. Most objects die in Gen 0, reducing GC overhead. Gen 2 is collected less frequently since most collected objects are young.",codeSnippets:[{language:"csharp",code:`// Generational Hypothesis: Most objects die young
// This means frequent full scans are wasteful

// GC Collections:
// Gen 0: Most frequent (every few MB allocated)
// Gen 1: When Gen 0 fills up multiple times
// Gen 2: When Gen 1 fills up

public class GenerationDemo
{
    public void Demonstrate()
    {
        // Initially in Gen 0
        var young = new MyObject(); // Gen 0
        
        // After first GC, survivors move to Gen 1
        GC.Collect(0); // Force Gen 0 collection
        
        // Now if it survived, it's Gen 1
        // Next GC might collect it if it's unreachable
        
        // Objects that survive multiple GC cycles move to Gen 2
        var longLived = new MyObject();
        // Multiple GC cycles later...
        // longLived is in Gen 2 (very old object)
        
        // Benefits:
        // - Gen 0 is fast to scan (small)
        // - Gen 2 scanned infrequently
        // - Improves cache locality
    }
}

// Checking object generation
var obj = new MyObject();
int generation = GC.GetGeneration(obj); // 0 or 1 or 2

// Gen 0 -> Gen 1 -> Gen 2 progression
public void LifeCycleDemo()
{
    var obj = new byte[1024]; // Created in Gen 0
    Console.WriteLine(GC.GetGeneration(obj)); // Output: 0
    
    // Simulate some GCs
    GC.Collect(0);
    GC.WaitForPendingFinalizers();
    
    // Object survived Gen 0 collection
    Console.WriteLine(GC.GetGeneration(obj)); // Output: 1
    
    // More GCs...
    GC.Collect();
    
    // Object is now in Gen 2
    Console.WriteLine(GC.GetGeneration(obj)); // Output: 2
}`}]},{id:"q4",question:"What is IDisposable and what is the Dispose pattern?",answer:"IDisposable is an interface for releasing unmanaged resources (file handles, database connections, unmanaged memory). The Dispose pattern provides a safe way to clean up resources. Implement Dispose() to release resources, and optionally a finalizer for safety.",codeSnippets:[{language:"csharp",code:`// IDisposable interface
public interface IDisposable
{
    void Dispose();
}

// Basic Dispose Pattern
public class FileHandler : IDisposable
{
    private IntPtr fileHandle; // Unmanaged resource
    private bool disposed = false;
    
    public void ReadFile()
    {
        // Use the file handle
    }
    
    // Implement Dispose
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Prevent finalizer from running
    }
    
    // Protected dispose with bool parameter
    protected virtual void Dispose(bool disposing)
    {
        if (disposed)
            return;
        
        if (disposing)
        {
            // Free managed resources
        }
        
        // Free unmanaged resources
        if (fileHandle != IntPtr.Zero)
        {
            // Release the unmanaged resource
            fileHandle = IntPtr.Zero;
        }
        
        disposed = true;
    }
    
    // Finalizer - safety net
    ~FileHandler()
    {
        Dispose(false);
    }
}

// Using Disposable objects
using (var handler = new FileHandler())
{
    handler.ReadFile();
} // Dispose called automatically here

// Modern pattern (C# 8+) - using declaration
{
    using var handler = new FileHandler();
    handler.ReadFile();
} // Dispose called automatically when scope ends

// IAsyncDisposable for async cleanup
public class AsyncFileHandler : IAsyncDisposable
{
    public async ValueTask DisposeAsync()
    {
        await CloseHandleAsync();
    }
    
    private async Task CloseHandleAsync()
    {
        // Async cleanup
    }
}`}]},{id:"q5",question:"What is the difference between Dispose and Finalizer? When should you use each?",answer:"Dispose is called explicitly and should release unmanaged resources immediately. Finalizer (~ClassName) is called by the GC as a safety net but has unpredictable timing. Always implement Dispose for quick cleanup, use Finalizer only as a backup.",codeSnippets:[{language:"csharp",code:`// Finalizer (destructor) - Bad practice alone
public class BadResource
{
    private IntPtr handle;
    
    // Finalizer - called by GC, timing is unpredictable
    ~BadResource()
    {
        // This might run minutes or hours after object created!
        // Not reliable for immediate cleanup
        ReleaseHandle(handle);
    }
}

// Good practice - Dispose + Finalizer
public class GoodResource : IDisposable
{
    private IntPtr handle;
    private bool disposed = false;
    
    // Immediate cleanup when explicitly called
    public void Dispose()
    {
        if (disposed)
            return;
        
        ReleaseHandle(handle);
        disposed = true;
        
        // Tell GC: don't call finalizer, already cleaned up
        GC.SuppressFinalize(this);
    }
    
    // Safety net - cleanup if Dispose wasn't called
    ~GoodResource()
    {
        if (!disposed)
        {
            ReleaseHandle(handle);
        }
    }
    
    private void ReleaseHandle(IntPtr h)
    {
        if (h != IntPtr.Zero)
        {
            // Release resource
        }
    }
}

// Usage - guarantees cleanup
public void ProcessFile()
{
    var resource = new GoodResource();
    try
    {
        // Use resource
    }
    finally
    {
        resource?.Dispose(); // Guaranteed cleanup
    }
}

// Or with using (C# 8+)
public void ProcessFileModern()
{
    using var resource = new GoodResource();
    // Use resource
} // Dispose called automatically

// Costs of finalizers:
// 1. Objects with finalizers go to finalization queue
// 2. Finalizer thread processes them slowly
// 3. Keeps objects alive longer (Gen 2 candidate)
// 4. Performance impact

// Avoid this pattern:
public class BadPattern
{
    private string data; // Managed resource
    
    // DON'T finalize managed objects
    ~BadPattern()
    {
        data = null; // Unnecessary and bad practice
    }
}`}]},{id:"q6",question:"What is the 'using' statement and how does it work with IDisposable?",answer:"The 'using' statement ensures Dispose is called on IDisposable objects, even if an exception occurs. It's syntactic sugar for try-finally. Modern C# 8+ has 'using declaration' which disposes at the end of the scope.",codeSnippets:[{language:"csharp",code:`// Traditional using statement
using (var stream = new FileStream("file.txt", FileMode.Open))
{
    // Use stream
    stream.Read(...);
} // Dispose called automatically, even if exception

// Equivalent to:
FileStream stream = new FileStream("file.txt", FileMode.Open);
try
{
    // Use stream
    stream.Read(...);
}
finally
{
    // Guaranteed to call Dispose
    stream?.Dispose();
}

// Modern using declaration (C# 8+)
void ProcessFile()
{
    using var stream = new FileStream("file.txt", FileMode.Open);
    // Use stream
    stream.Read(...);
} // Dispose called automatically at end of scope

// Multiple resources
using (var stream = File.OpenRead("input.txt"))
using (var writer = new StreamWriter("output.txt"))
{
    // Use both
    var data = stream.ReadToEnd();
    writer.Write(data);
} // Both disposed automatically

// Modern syntax for multiple
void ProcessMultiple()
{
    using var stream = File.OpenRead("input.txt");
    using var writer = new StreamWriter("output.txt");
    
    var data = stream.ReadToEnd();
    writer.Write(data);
} // Both disposed at end of scope

// With exception handling
using var conn = new SqlConnection("connection");
try
{
    conn.Open();
    // Use connection
}
catch (Exception ex)
{
    // Handle error
}
finally
{
    // Using ensures Dispose called in finally
}

// IAsyncDisposable with using
async Task ProcessAsync()
{
    await using var conn = new SqlConnection("connection");
    await conn.OpenAsync();
    // Use connection
} // DisposeAsync called automatically`}]},{id:"q7",question:"How can memory leaks occur in managed code? Give examples.",answer:"Memory leaks in C# occur when objects are unintentionally kept alive through references. Common causes: static references, event handler subscriptions without unsubscribe, circular references in disposable objects, or not disposing unmanaged resources.",codeSnippets:[{language:"csharp",code:`// Memory Leak 1: Static References
public class Cache
{
    private static Dictionary<string, LargeObject> cache
        = new Dictionary<string, LargeObject>();
    
    public void Add(string key, LargeObject obj)
    {
        cache[key] = obj; // Objects never removed from static cache!
        // Memory leak - objects are never freed
    }
}

// Fix: Implement cache eviction
public class BetterCache
{
    private Dictionary<string, LargeObject> cache
        = new Dictionary<string, LargeObject>();
    private int maxSize = 100;
    
    public void Add(string key, LargeObject obj)
    {
        if (cache.Count >= maxSize)
            cache.Remove(cache.First().Key); // Evict old items
        
        cache[key] = obj;
    }
}

// Memory Leak 2: Event Handler Subscription
public class DataProvider : IDisposable
{
    public event EventHandler DataChanged;
}

public class Consumer
{
    private DataProvider provider;
    
    public Consumer(DataProvider provider)
    {
        this.provider = provider;
        // Subscribe to event
        provider.DataChanged += OnDataChanged;
    }
    
    private void OnDataChanged(object sender, EventArgs e)
    {
        // Handle data change
    }
    
    // Memory Leak: Provider kept alive because Consumer subscribed
    // Consumer kept alive because Provider has reference in event
    // Circular reference!
}

// Fix: Unsubscribe in Dispose
public class GoodConsumer : IDisposable
{
    private DataProvider provider;
    
    public GoodConsumer(DataProvider provider)
    {
        this.provider = provider;
        provider.DataChanged += OnDataChanged;
    }
    
    public void Dispose()
    {
        if (provider != null)
            provider.DataChanged -= OnDataChanged; // Unsubscribe
    }
    
    private void OnDataChanged(object sender, EventArgs e) { }
}

// Memory Leak 3: Not Disposing Resources
public void BadMethod()
{
    var stream = new FileStream("file.txt", FileMode.Open);
    var data = stream.ReadToEnd(); // Exception here?
    stream.Dispose(); // Never called if exception
    // File handle leaked!
}

// Fix: Use using
public void GoodMethod()
{
    using var stream = new FileStream("file.txt", FileMode.Open);
    var data = stream.ReadToEnd();
} // Dispose guaranteed even with exception

// Memory Leak 4: Circular References
public class Node
{
    public Node Parent { get; set; }
    public Node Child { get; set; }
}

public void CreateCircularReference()
{
    var parent = new Node();
    var child = new Node();
    
    parent.Child = child;
    child.Parent = parent; // Circular reference
    
    parent = null;
    child = null;
    // Both objects kept alive by circular reference!
    // GC can still collect (it detects cycles), but resources
    // held by these objects won't be freed until GC runs
}

// Prevention strategies:
// 1. Always use 'using' for IDisposable
// 2. Unsubscribe from events
// 3. Clear static collections periodically
// 4. Use weak references for caches
// 5. Implement IDisposable properly
// 6. Use dependency injection instead of static references`}]},{id:"q8",question:"What is GC.Collect? When should you call it and when should you avoid it?",answer:"GC.Collect() forces garbage collection to run immediately. It's generally not recommended because the GC is optimized to run automatically. Only use it in specific scenarios like demonstrating GC behavior or after loading massive data before entering critical sections.",codeSnippets:[{language:"csharp",code:`// GC.Collect() - Forces garbage collection
public class GCDemo
{
    public void BadPractice()
    {
        // BAD - Calling GC.Collect frequently
        for (int i = 0; i < 1000; i++)
        {
            var obj = new byte[1024 * 1024]; // 1MB
            GC.Collect(); // Forces collection every iteration!
            // Massive performance hit - GC is interrupted constantly
        }
    }
    
    public void AvoidThis()
    {
        // Calling GC.Collect after operation
        LoadMillionsOfObjects();
        GC.Collect(); // Let GC manage itself!
        // The GC will run automatically when needed
    }
}

// When it's ACCEPTABLE to call GC.Collect:
public class ProperGCUsage
{
    // Scenario 1: Before critical performance measurement
    public long MeasurePerformance(Action action)
    {
        GC.Collect();
        GC.WaitForPendingFinalizers();
        GC.Collect(); // Clear everything
        
        var sw = Stopwatch.StartNew();
        action();
        sw.Stop();
        
        return sw.ElapsedMilliseconds;
    }
    
    // Scenario 2: After loading data, before game starts
    public void InitializeGame()
    {
        LoadAllAssets(); // Massive allocation
        LoadAllModels();
        
        GC.Collect(); // Clean up temporary allocations
        // Now game starts without GC pauses
    }
    
    // Scenario 3: Demonstrate GC behavior
    public void DemonstrateGC()
    {
        var obj = new object();
        Console.WriteLine(GC.GetGeneration(obj)); // 0
        
        GC.Collect(); // Force collection
        
        Console.WriteLine(GC.GetGeneration(obj)); // 1 (survived)
    }
}

// GC.Collect options
public void CollectionOptions()
{
    GC.Collect(); // Full collection (all generations)
    
    GC.Collect(0); // Collect Gen 0 only
    
    GC.Collect(1); // Collect Gen 0 and Gen 1
    
    GC.Collect(2); // Full collection (Gen 0, 1, and 2)
    
    // Wait for finalizers to complete
    GC.WaitForPendingFinalizers();
    
    // Second collection clears objects finalized
    GC.Collect();
}

// Impact of GC.Collect
public void PerformanceImpact()
{
    var sw = Stopwatch.StartNew();
    for (int i = 0; i < 1_000_000; i++)
    {
        var obj = new object();
    }
    sw.Stop();
    Console.WriteLine(\`Without GC.Collect: \${sw.ElapsedMilliseconds}ms\`);
    
    // Reset timer
    sw.Restart();
    for (int i = 0; i < 1_000_000; i++)
    {
        var obj = new object();
        if (i % 1000 == 0)
            GC.Collect(); // Call GC.Collect every 1000 allocations
    }
    sw.Stop();
    Console.WriteLine(\`With GC.Collect: \${sw.ElapsedMilliseconds}ms\`);
    // Shows HUGE performance difference!
}

// Better approach: Let GC do its job
public void RecommendedApproach()
{
    // Trust the GC - it's optimized
    var list = new List<byte[]>();
    for (int i = 0; i < 1000; i++)
    {
        list.Add(new byte[1024 * 1024]);
    }
    // GC handles memory automatically
    // No manual GC.Collect() needed
}`}]},{id:"q9",question:"What are weak references and when would you use them?",answer:"Weak references point to objects without preventing garbage collection. The GC can collect weakly referenced objects. Use them for caches where you want objects freed if memory is needed, but can keep them if memory is available.",codeSnippets:[{language:"csharp",code:`// WeakReference - allows GC to collect referenced object
public class Cache<K, V>
{
    // Strong reference - keeps object alive
    private Dictionary<K, V> strongCache = new();
    
    // Weak reference - allows GC to collect
    private Dictionary<K, WeakReference<V>> weakCache = new();
    
    public void AddToWeakCache(K key, V value)
    {
        weakCache[key] = new WeakReference<V>(value);
    }
    
    public bool TryGetFromWeakCache(K key, out V value)
    {
        if (weakCache.TryGetValue(key, out var weakRef))
        {
            // Try to get the object
            if (weakRef.TryGetTarget(out var target))
            {
                value = target; // Object still alive
                return true;
            }
            
            // Object was garbage collected
            weakCache.Remove(key);
        }
        
        value = null;
        return false;
    }
}

// Practical example: Image cache
public class ImageCache
{
    private Dictionary<string, WeakReference<Bitmap>> cache
        = new();
    
    public Bitmap GetImage(string path)
    {
        if (cache.TryGetValue(path, out var weakRef))
        {
            if (weakRef.TryGetTarget(out var bitmap))
            {
                return bitmap; // Image still in memory
            }
        }
        
        // Image was garbage collected or not cached
        var newBitmap = LoadImage(path);
        cache[path] = new WeakReference<Bitmap>(newBitmap);
        return newBitmap;
    }
    
    private Bitmap LoadImage(string path)
    {
        return new Bitmap(path);
    }
}

// Strong vs Weak References
public class ReferenceComparison
{
    public void Demonstrate()
    {
        var obj = new byte[10 * 1024 * 1024]; // 10MB
        
        // Strong reference
        var strong = obj;
        
        // Weak reference
        var weak = new WeakReference<byte[]>(obj);
        
        // Check if weak ref is alive
        bool isAlive = weak.TryGetTarget(out var target);
        Console.WriteLine(\`Alive: \${isAlive}\`); // true
        
        // Remove strong reference
        obj = null;
        strong = null;
        
        // Now weak reference might be dead
        isAlive = weak.TryGetTarget(out target);
        Console.WriteLine(\`Alive after strong ref removed: \${isAlive}\`); // false
    }
}

// Use cases:
// 1. Object Pools - cache objects but don't prevent GC
// 2. Event Handler Caches - weak cache of subscribers
// 3. Large Object Caches - free if memory needed
// 4. View Model Caches - free when view is closed

public class EventCache
{
    private Dictionary<string, WeakReference<Action>> handlers
        = new();
    
    public void Register(string eventName, Action handler)
    {
        handlers[eventName] = new WeakReference<Action>(handler);
    }
    
    public void Invoke(string eventName)
    {
        if (handlers.TryGetValue(eventName, out var weak))
        {
            if (weak.TryGetTarget(out var handler))
            {
                handler();
            }
            else
            {
                // Handler was collected
                handlers.Remove(eventName);
            }
        }
    }
}`}]},{id:"q10",question:"What is the difference between reference types (classes) and value types (structs)? How does this relate to GC?",answer:"Reference types are allocated on the heap and managed by GC. Value types are allocated on the stack (in methods) or inline in objects and don't need GC. Stack allocation is faster, but reference types are more flexible.",codeSnippets:[{language:"csharp",code:`// Reference Type - allocated on heap, managed by GC
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// Value Type - allocated on stack or inline
public struct Point
{
    public int X { get; set; }
    public int Y { get; set; }
}

public class AllocationDemo
{
    public void Demonstrate()
    {
        // Reference type - allocated on HEAP
        var person = new Person { Name = "Alice", Age = 30 };
        // Stack: person (reference/pointer)
        // Heap: Person object, managed by GC
        
        // Value type - allocated on STACK
        var point = new Point { X = 10, Y = 20 };
        // Stack: X, Y values (embedded in stack frame)
        // When method ends, point is freed (no GC involved)
        
        // Value type inside reference type - allocated on HEAP
        var people = new List<Point>();
        people.Add(point);
        // Heap: List object, contains Point values
        // Point stored directly in List (not as separate object)
    }
}

// Performance difference
public class PerformanceComparison
{
    public class RefPoint
    {
        public int X, Y;
    }
    
    public struct ValuePoint
    {
        public int X, Y;
    }
    
    public void Benchmark()
    {
        const int count = 1_000_000;
        
        // Value type - stack allocation (fast!)
        var sw = Stopwatch.StartNew();
        for (int i = 0; i < count; i++)
        {
            var p = new ValuePoint { X = 1, Y = 2 };
        }
        sw.Stop();
        Console.WriteLine(\`ValuePoint: \${sw.ElapsedMilliseconds}ms\`); // ~1-5ms
        
        // Reference type - heap allocation with GC (slower)
        sw.Restart();
        for (int i = 0; i < count; i++)
        {
            var p = new RefPoint { X = 1, Y = 2 };
        }
        sw.Stop();
        Console.WriteLine(\`RefPoint: \${sw.ElapsedMilliseconds}ms\`); // ~50-200ms
        
        // Reference type is much slower due to:
        // 1. Heap allocation overhead
        // 2. GC overhead
        // 3. Indirection (following pointers)
    }
}

// Boxing - value type becomes reference type
public void BoxingDemo()
{
    // Value type
    int value = 42;
    
    // Boxing - creates heap object
    object boxed = value; // Value copied to heap
    
    // Unboxing - extract value
    int unboxed = (int)boxed; // Value copied back to stack
    
    // Performance cost of boxing/unboxing
    for (int i = 0; i < 1_000_000; i++)
    {
        object box = i; // Box: copy to heap
        int unbox = (int)box; // Unbox: copy to stack
    }
    // Much slower than working with pure value types
}

// Guidelines:
// Use Reference Types (classes) for:
// - Large objects
// - Long-lived objects
// - Objects with inheritance
// - When identity matters
// - Most domain objects

// Use Value Types (structs) for:
// - Small immutable values (Point, Color, Size)
// - Performance-critical code
// - Stack allocation scenario
// - Avoid boxing overhead
// - Keep structs small (<16 bytes)

public struct SmallValue
{
    public int X, Y; // 8 bytes - good
}

public struct BadValue
{
    public byte[] data; // Large reference - bad!
    public string name;
}

// Disposal with both types
public class ManagedResource : IDisposable
{
    private IntPtr handle;
    
    public void Dispose()
    {
        // Reference type - GC will call finalizer if not disposed
        // Value type can't implement finalizer
    }
}

public struct ValueWithNativeResource
{
    // CAN implement IDisposable but unusual
    private IntPtr handle;
    
    public void Dispose()
    {
        // Must be called explicitly - struct on stack won't auto-dispose!
    }
}`}]},{id:"q11",question:"What is the Stack and Heap? How do they relate to garbage collection?",answer:"Stack stores value types and references (pointers), allocated/freed automatically when scope ends. Heap stores objects (reference types), memory managed by GC. Stack is faster and doesn't need GC. Heap is flexible but requires GC.",codeSnippets:[{language:"csharp",code:`// Memory Layout
public class MemoryDemo
{
    public void Demonstrate()
    {
        // STACK allocation
        int x = 5;                        // Stack: int value 5
        string name = "Alice";            // Stack: reference/pointer
                                           // Heap: "Alice" string object
        
        var person = new Person();        // Stack: reference/pointer
                                          // Heap: Person object
        person.Age = 30;                  // Heap: Age field set to 30
        
        // STACK LAYOUT:
        // [Return Address]
        // [x = 5]
        // [name = pointer to "Alice"]
        // [person = pointer to Person object]
        
        // HEAP LAYOUT:
        // [String object: "Alice"]
        // [Person object: Age=30, ...]
        
        NestedMethod();
    }
    
    private void NestedMethod()
    {
        // New stack frame created
        int y = 10;
        var local = new byte[1024];
    } // Stack frame destroyed, y and local pointer freed
      // Byte array might be collected later by GC
}

// Stack behavior - automatic
public void StackExample()
{
    int a = 1;
    {
        int b = 2; // New scope
        int c = 3;
    } // b and c freed automatically when scope ends
    // a still alive
} // a freed when method ends

// Heap behavior - GC managed
public void HeapExample()
{
    var obj1 = new byte[1_000_000]; // Heap: 1MB allocated
    var obj2 = new byte[1_000_000]; // Heap: 1MB allocated
    
    obj1 = null; // Reference removed
    // 1MB on heap is now unreachable
    // GC will free it eventually (maybe in milliseconds or seconds)
    
    obj2 = null; // Another 1MB unreachable
} // Method ends, both freed by GC

// Stack overflow
public void StackOverflow()
{
    int[] huge = new int[1_000_000]; // 4MB stack - might overflow!
    // Large value types on stack are bad
    
    // Better approach
    var huge2 = new int[1_000_000]; // Heap - no problem
}

// Escape analysis (modern .NET)
public void ModernOptimization()
{
    // Small objects might be allocated on stack (escape analysis)
    var point = new Point { X = 1, Y = 2 }; // Might be stack!
    
    // The JIT compiler analyzes: does this escape the method?
    // If Point never escapes, allocate on stack instead of heap
    // Avoids GC overhead!
}

// Stack trace - shows stack frames
public void Demonstration()
{
    Method1();
}

private void Method1()
{
    // Stack: [Return to Demonstrate]
    // Stack: [Method1 frame]
    Method2();
}

private void Method2()
{
    // Stack: [Return to Method1]
    // Stack: [Method2 frame]
    
    var trace = Environment.StackTrace;
    // Shows:
    // - Method2 (current)
    // - Method1 (called from)
    // - Demonstrate (called from)
}

// Key differences:
// Stack:
// - Fast allocation (just increment pointer)
// - Automatic deallocation
// - Limited size
// - LIFO order
// - No GC needed

// Heap:
// - Slower allocation
// - GC overhead
// - Large capacity
// - Any order
// - GC manages lifecycle`}]},{id:"q12",question:"How can you monitor and optimize garbage collection? What tools and techniques are available?",answer:"Use GC class for statistics, profilers like Perfview and dotTrace, and Event Tracing for Windows (ETW). Monitor Gen 2 collections and pause times. Optimize by reducing allocations, using object pools, and tuning GC modes.",codeSnippets:[{language:"csharp",code:`using System;
using System.Diagnostics;

// 1. Monitor GC Statistics
public class GCMonitoring
{
    public void MonitorGC()
    {
        // Get total memory before
        long before = GC.GetTotalMemory(false);
        
        // Do work
        DoWork();
        
        // Get total memory after
        long after = GC.GetTotalMemory(false);
        Console.WriteLine(\`Memory used: \${(after - before) / 1024}KB\`);
        
        // Get collection counts
        Console.WriteLine(\`Gen 0 Collections: \${GC.CollectionCount(0)}\`);
        Console.WriteLine(\`Gen 1 Collections: \${GC.CollectionCount(1)}\`);
        Console.WriteLine(\`Gen 2 Collections: \${GC.CollectionCount(2)}\`);
    }
    
    // Monitor individual object
    public void MonitorObject()
    {
        var obj = new byte[1024];
        
        Console.WriteLine(\`Generation: \${GC.GetGeneration(obj)}\`);
        
        int gen = GC.GetGeneration(obj);
        Console.WriteLine(\`In Gen \${gen}\`);
    }
    
    private void DoWork()
    {
        var list = new List<byte[]>();
        for (int i = 0; i < 1000; i++)
        {
            list.Add(new byte[1024]);
        }
    }
}

// 2. Use GC Modes
public class GCModes
{
    public void DemoGCModes()
    {
        // Workstation mode (default) - low latency
        // Server mode - high throughput
        
        // Check GC info
        var info = GCSettings.IsServerGC;
        Console.WriteLine(\`Server GC: \${info}\`);
        
        // Configure latency
        // GCLatencyMode.Interactive (default)
        // GCLatencyMode.Batch (high throughput)
        // GCLatencyMode.SustainedLowLatency
        
        var oldMode = GCSettings.LatencyMode;
        GCSettings.LatencyMode = GCLatencyMode.SustainedLowLatency;
        
        // Critical section with minimal GC pauses
        CriticalGameLoop();
        
        GCSettings.LatencyMode = oldMode;
    }
    
    private void CriticalGameLoop()
    {
        for (int i = 0; i < 100; i++)
        {
            // Frame rendering with minimal GC interruption
        }
    }
}

// 3. Object Pool Pattern - reduce allocations
public class ObjectPool<T> where T : class, new()
{
    private Stack<T> pool = new();
    private int maxPoolSize = 100;
    
    public T Rent()
    {
        return pool.Count > 0 ? pool.Pop() : new T();
    }
    
    public void Return(T obj)
    {
        if (pool.Count < maxPoolSize)
        {
            (obj as IPoolable)?.Reset();
            pool.Push(obj);
        }
    }
}

public interface IPoolable
{
    void Reset();
}

// 4. Reduce allocations in hot paths
public class AllocationOptimization
{
    // Bad - allocation per loop iteration
    public void BadAllocations()
    {
        var results = new List<string>();
        for (int i = 0; i < 1000; i++)
        {
            var text = new string('x', 100); // Allocation each time!
            results.Add(text);
        }
    }
    
    // Better - reuse buffer
    public void BetterAllocations()
    {
        var buffer = new StringBuilder();
        var results = new List<string>();
        
        for (int i = 0; i < 1000; i++)
        {
            buffer.Clear();
            buffer.Append('x', 100); // Reuses buffer
            results.Add(buffer.ToString());
        }
    }
    
    // Use Span<T> and stackalloc for small arrays
    public void StackAllocation()
    {
        Span<int> buffer = stackalloc int[10]; // Stack allocation!
        for (int i = 0; i < buffer.Length; i++)
        {
            buffer[i] = i;
        }
        // No heap allocation, no GC
    }
}

// 5. Profiler commands
public class ProfilingHelpers
{
    public void ProfileMethod(Action method)
    {
        GC.Collect();
        GC.WaitForPendingFinalizers();
        GC.Collect();
        
        long before = GC.GetTotalMemory(false);
        int gen0Before = GC.CollectionCount(0);
        int gen2Before = GC.CollectionCount(2);
        
        var sw = Stopwatch.StartNew();
        method();
        sw.Stop();
        
        long after = GC.GetTotalMemory(false);
        int gen0After = GC.CollectionCount(0);
        int gen2After = GC.CollectionCount(2);
        
        Console.WriteLine(\`Time: \${sw.ElapsedMilliseconds}ms\`);
        Console.WriteLine(\`Memory: \${(after - before) / 1024}KB\`);
        Console.WriteLine(\`Gen 0 Collections: \${gen0After - gen0Before}\`);
        Console.WriteLine(\`Gen 2 Collections: \${gen2After - gen2Before}\`);
    }
}

// 6. Configure for low latency (gaming, real-time)
public void ConfigureLowLatency()
{
    // In .csproj or programmatically:
    // <PropertyGroup>
    //   <TieredCompilationQuickJit>true</TieredCompilationQuickJit>
    //   <TieredCompilationQuickJitForLoops>true</TieredCompilationQuickJitForLoops>
    //   <ReadyToRun>false</ReadyToRun>
    // </PropertyGroup>
    
    GCSettings.IsGCWorkingSetQuotaEnabled = true; // Respect memory limits
    GCSettings.LatencyMode = GCLatencyMode.SustainedLowLatency;
}

// Common optimization techniques:
// 1. Use stackalloc for small buffers
// 2. Implement object pooling for frequently allocated objects
// 3. Use value types for small immutable values
// 4. Avoid boxing
// 5. Reuse collections instead of creating new ones
// 6. Use ArrayPool<T> for temporary arrays
// 7. Profile to find hotspots
// 8. Configure GC mode appropriately (Workstation vs Server)`}]}]},Ng={id:"csharp-collections",name:"Collections",questions:[{id:"q1",question:"What are collections in C# and what are the main types?",answer:"Collections are data structures that store and manage groups of objects. Main types: List<T> (ordered, indexable), Dictionary<K,V> (key-value pairs), HashSet<T> (unique items), Queue<T> (FIFO), Stack<T> (LIFO), LinkedList<T> (doubly-linked). Located in System.Collections.Generic namespace.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;

// 1. List<T> - Dynamic array, ordered
var list = new List<int> { 1, 2, 3 };
list.Add(4);
list.Remove(2);
Console.WriteLine(list[0]); // Access by index: 1

// 2. Dictionary<K,V> - Key-value pairs
var dict = new Dictionary<string, int>
{
    { "Alice", 25 },
    { "Bob", 30 }
};
dict["Charlie"] = 28;
var age = dict["Alice"]; // 25

// 3. HashSet<T> - Unique items only
var set = new HashSet<int> { 1, 2, 3, 2 }; // 2 ignored
set.Add(4);
bool contains = set.Contains(2); // true

// 4. Queue<T> - FIFO (First In, First Out)
var queue = new Queue<string>();
queue.Enqueue("First");
queue.Enqueue("Second");
var first = queue.Dequeue(); // "First"

// 5. Stack<T> - LIFO (Last In, First Out)
var stack = new Stack<string>();
stack.Push("First");
stack.Push("Second");
var last = stack.Pop(); // "Second"

// 6. LinkedList<T> - Doubly-linked nodes
var linked = new LinkedList<int>();
linked.AddLast(1);
linked.AddLast(2);
var node = linked.First; // Access nodes

// 7. SortedDictionary<K,V> - Sorted key-value pairs
var sorted = new SortedDictionary<string, int>
{
    { "Charlie", 28 },
    { "Alice", 25 }, // Auto-sorted by key
    { "Bob", 30 }
};

// 8. Tuple - Fixed size, multiple types
var tuple = Tuple.Create(1, "Alice", 25);
Console.WriteLine(tuple.Item1); // 1`}]},{id:"q2",question:"What is the difference between IEnumerable, ICollection, and IList interfaces?",answer:"IEnumerable provides iteration (foreach). ICollection adds Count, Add, Remove, Contains. IList adds indexing ([]). Each builds on the previous one. IEnumerable is most basic, IList most feature-rich. Choose based on what operations you need.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;

// IEnumerable - Only iteration
public void ProcessEnumerable(IEnumerable<int> items)
{
    foreach (var item in items) // Only operation available
    {
        Console.WriteLine(item);
    }
    // Can't: access by index, count, add, remove
}

// ICollection - Add iteration + mutation + count
public void ProcessCollection(ICollection<int> items)
{
    var count = items.Count; // Has Count
    items.Add(5); // Can add
    items.Remove(3); // Can remove
    bool has = items.Contains(2); // Can check
    
    foreach (var item in items) // Still iterable
    {
        Console.WriteLine(item);
    }
    // Can't: access by index
}

// IList - Add indexing to everything
public void ProcessList(IList<int> items)
{
    var item = items[0]; // Access by index
    items[0] = 10; // Modify by index
    
    var count = items.Count;
    items.Add(5);
    items.Remove(3);
    
    items.Insert(1, 7); // Insert at index
    items.RemoveAt(2); // Remove by index
    
    var index = items.IndexOf(5); // Find index
    
    foreach (var i in items)
    {
        Console.WriteLine(i);
    }
}

// Hierarchy:
// IEnumerable
//     ↓ (adds Count, Add, Remove, Contains)
// ICollection<T>
//     ↓ (adds indexing)
// IList<T>

// Practical example
public void DemonstrateDifferences()
{
    var list = new List<int> { 1, 2, 3 };
    
    // Can use as IEnumerable
    IEnumerable<int> enumerable = list;
    ProcessEnumerable(enumerable);
    
    // Can use as ICollection
    ICollection<int> collection = list;
    ProcessCollection(collection);
    
    // Can use as IList
    IList<int> ilist = list;
    ProcessList(ilist);
}

// Choosing which to return from methods
public IEnumerable<User> GetActiveUsers() // Most restrictive - good for LINQ
{
    return users.Where(u => u.IsActive);
}

public ICollection<User> GetAllUsers() // Can modify collection
{
    return users;
}

public IList<User> GetUserList() // Full access
{
    return users as IList<User>;
}

// Best practice: Return most restrictive interface
// that meets your needs`}]},{id:"q3",question:"What is the difference between List<T> and Array? When to use each?",answer:"Array is fixed-size, created once. List<T> is dynamic, grows as needed. Array is faster for fixed-size, uses less memory. List<T> is flexible, supports Add/Remove. Use Array when size is known and won't change, use List<T> for flexible collections.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;
using System.Diagnostics;

// Array - Fixed size
int[] array = new int[10]; // Size 10, fixed
array[0] = 1;
array[1] = 2;
// array[10] = 3; // IndexOutOfRangeException

// List<T> - Dynamic size
var list = new List<int> { 1, 2 };
list.Add(3); // Grows automatically
list.Add(4);

// Performance comparison
public void PerformanceComparison()
{
    const int count = 1_000_000;
    
    // Array - faster for fixed size
    var sw = Stopwatch.StartNew();
    int[] array = new int[count];
    for (int i = 0; i < count; i++)
    {
        array[i] = i; // Direct access
    }
    sw.Stop();
    Console.WriteLine(\`Array: \${sw.ElapsedMilliseconds}ms\`); // ~1-5ms
    
    // List - dynamic but slightly slower
    sw.Restart();
    var list = new List<int>(count); // Pre-allocate capacity
    for (int i = 0; i < count; i++)
    {
        list.Add(i);
    }
    sw.Stop();
    Console.WriteLine(\`List: \${sw.ElapsedMilliseconds}ms\`); // ~5-15ms
    
    // List without pre-allocated capacity - even slower
    sw.Restart();
    var list2 = new List<int>();
    for (int i = 0; i < count; i++)
    {
        list2.Add(i); // Reallocates when full
    }
    sw.Stop();
    Console.WriteLine(\`List (no capacity): \${sw.ElapsedMilliseconds}ms\`); // ~20-50ms
}

// Memory comparison
public void MemoryComparison()
{
    // Array uses contiguous memory
    int[] array = new int[100]; // 400 bytes + object header
    
    // List uses internal array + size tracking
    var list = new List<int>(100);
    // Uses more memory due to wrapper overhead
    // But grows efficiently (usually doubles capacity)
}

// Key differences:
// Feature          Array                List<T>
// Size             Fixed at creation    Dynamic
// Speed            Fastest              Very fast
// Memory           Minimal              More overhead
// Resize           Not possible         Grows automatically
// API              Basic                Rich (Add, Remove, etc)
// Type safety      Generic (if T[])     Generic
// Performance      O(1) access          O(1) access

// When to use Array:
// - Size is known and fixed
// - Performance critical
// - Need minimal memory overhead
// - Working with existing code expecting arrays

public void ProcessFixedData(int[] data)
{
    // Size won't change, array is perfect
    for (int i = 0; i < data.Length; i++)
    {
        data[i] *= 2;
    }
}

// When to use List<T>:
// - Size changes dynamically
// - Need Add/Remove/Insert operations
// - Working with LINQ
// - Flexibility is important

public void ProcessDynamicData(IEnumerable<int> numbers)
{
    var list = new List<int>(numbers); // Convert to List for manipulation
    list.Add(999); // Add operations
    list.RemoveAll(n => n < 0); // Rich API
}

// Converting between them
int[] array = new int[] { 1, 2, 3 };
var list = new List<int>(array); // Array to List
array = list.ToArray(); // List to Array

// Array initialization
int[] arr1 = new int[5]; // Default values (0)
int[] arr2 = new[] { 1, 2, 3 }; // Array initializer
int[] arr3 = { 1, 2, 3 }; // Also works

// List initialization
var list1 = new List<int>(); // Empty
var list2 = new List<int>(10); // Capacity 10
var list3 = new List<int> { 1, 2, 3 }; // With values`}]},{id:"q4",question:"What is the difference between Dictionary, Hashtable, and SortedDictionary?",answer:"Dictionary<K,V> is generic, fast, unordered. Hashtable is non-generic, slower, legacy. SortedDictionary keeps keys sorted. Use Dictionary for most cases (type-safe, fast), Hashtable rarely (backward compatibility), SortedDictionary when you need sorted order.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections;
using System.Collections.Generic;

// Dictionary<K,V> - Generic, Fast (PREFERRED)
var dict = new Dictionary<string, int>
{
    { "Alice", 25 },
    { "Bob", 30 },
    { "Charlie", 28 }
};

dict["David"] = 32;
var age = dict["Alice"];
bool has = dict.ContainsKey("Bob");
dict.TryGetValue("Alice", out int aliceAge);

// Hashtable - Non-generic, legacy (AVOID)
Hashtable hashtable = new Hashtable
{
    { "Alice", 25 },
    { "Bob", 30 }
};

hashtable["David"] = 32;
var age2 = (int)hashtable["Alice"]; // Requires casting!
bool has2 = hashtable.ContainsKey("Bob");

// SortedDictionary - Ordered by key
var sorted = new SortedDictionary<string, int>
{
    { "Charlie", 28 },
    { "Alice", 25 },
    { "Bob", 30 }
};

// Iteration order: Alice, Bob, Charlie (sorted)
foreach (var kvp in sorted)
{
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}

// Comparison
// Feature              Dictionary   Hashtable   SortedDictionary
// Type-safe            Yes          No          Yes
// Performance          Fast         Slow        Slow (maintains order)
// Order                Unordered    Unordered   Sorted by key
// Boxing               No           Yes         No
// Thread-safe          No           Yes         No
// Null keys            No           Yes         No
// Generics             Yes          No          Yes

public void DemonstrateDifferences()
{
    // Dictionary is fastest and type-safe
    var dict = new Dictionary<string, int>();
    dict["Alice"] = 25; // Type-safe
    int age = dict["Alice"]; // No casting needed
    
    // Hashtable requires casting and boxing
    var hashtable = new Hashtable();
    hashtable["Alice"] = 25; // Boxing
    int age2 = (int)hashtable["Alice"]; // Casting required!
    
    // SortedDictionary maintains order
    var sorted = new SortedDictionary<int, string>();
    sorted[3] = "Third";
    sorted[1] = "First";
    sorted[2] = "Second";
    
    // Iteration: First, Second, Third (sorted order)
    foreach (var item in sorted)
    {
        Console.WriteLine(item.Value);
    }
}

// Performance benchmark
public void PerformanceBench()
{
    const int iterations = 1_000_000;
    
    // Dictionary - fastest
    var sw = Stopwatch.StartNew();
    var dict = new Dictionary<string, int>();
    for (int i = 0; i < iterations; i++)
    {
        dict[$"Key{i}"] = i;
    }
    sw.Stop();
    Console.WriteLine($"Dictionary: {sw.ElapsedMilliseconds}ms");
    
    // Hashtable - slower
    sw.Restart();
    var hashtable = new Hashtable();
    for (int i = 0; i < iterations; i++)
    {
        hashtable[$"Key{i}"] = i;
    }
    sw.Stop();
    Console.WriteLine($"Hashtable: {sw.ElapsedMilliseconds}ms");
    
    // SortedDictionary - slowest (maintains order)
    sw.Restart();
    var sorted = new SortedDictionary<string, int>();
    for (int i = 0; i < iterations; i++)
    {
        sorted[$"Key{i}"] = i;
    }
    sw.Stop();
    Console.WriteLine($"SortedDictionary: {sw.ElapsedMilliseconds}ms");
}

// When to use each:
// Dictionary - 99% of cases (fast, type-safe)
public void ModernApproach()
{
    var dict = new Dictionary<string, User>();
    dict["alice"] = new User { Name = "Alice" };
}

// Hashtable - Legacy code compatibility only
public void LegacyApproach()
{
    var ht = new Hashtable();
    ht["alice"] = new User { Name = "Alice" };
}

// SortedDictionary - When you need sorted order
public void SortedApproach()
{
    var sorted = new SortedDictionary<string, decimal>();
    sorted["Banana"] = 0.5m;
    sorted["Apple"] = 0.8m;
    // Iteration is always in sorted order: Apple, Banana
}`}]},{id:"q5",question:"What is the difference between HashSet and SortedSet? When to use each?",answer:"HashSet is unordered, fast, no duplicates. SortedSet is ordered, slower, no duplicates. HashSet is O(1) for add/remove/lookup. SortedSet is O(log n). Use HashSet for fast membership testing, SortedSet when you need sorted order.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;

// HashSet<T> - Fast, unordered, no duplicates
var hashSet = new HashSet<int> { 3, 1, 4, 1, 5 }; // Duplicates ignored
Console.WriteLine(hashSet.Count); // 4 (not 5)

hashSet.Add(2);
bool has = hashSet.Contains(3); // O(1) - very fast
hashSet.Remove(1);

// Iteration order is unpredictable
foreach (var item in hashSet)
{
    Console.WriteLine(item); // Order not guaranteed
}

// SortedSet<T> - Ordered, no duplicates
var sortedSet = new SortedSet<int> { 3, 1, 4, 1, 5 };
Console.WriteLine(sortedSet.Count); // 4

sortedSet.Add(2);
bool has2 = sortedSet.Contains(3); // O(log n)
sortedSet.Remove(1);

// Iteration order is always sorted
foreach (var item in sortedSet)
{
    Console.WriteLine(item); // 2, 3, 4, 5 (sorted)
}

// Comparison
// Feature              HashSet      SortedSet
// Order                Unordered    Sorted
// Add/Remove/Lookup    O(1)         O(log n)
// Space                Less         More
// Iteration speed      Fast         Fast
// Range queries        No           Yes
// Min/Max              No           Yes (free)
// Memory               Minimal      More overhead

public void DemonstrateDifferences()
{
    // HashSet - Fast for membership testing
    var users = new HashSet<string> { "Alice", "Bob", "Charlie" };
    
    if (users.Contains("Alice")) // O(1) - instant
    {
        Console.WriteLine("User exists");
    }
}

// Unique numbers example
public void FindUniqueNumbers()
{
    int[] numbers = { 1, 2, 2, 3, 3, 3, 4, 4, 4, 4 };
    
    // HashSet removes duplicates automatically
    var unique = new HashSet<int>(numbers);
    Console.WriteLine(unique.Count); // 4
}

// Set operations
public void SetOperations()
{
    var set1 = new HashSet<int> { 1, 2, 3, 4, 5 };
    var set2 = new HashSet<int> { 4, 5, 6, 7, 8 };
    
    // Union
    set1.UnionWith(set2); // { 1, 2, 3, 4, 5, 6, 7, 8 }
    
    // Intersection
    var result = new HashSet<int> { 1, 2, 3, 4, 5 };
    result.IntersectWith(set2); // { 4, 5 }
    
    // Difference
    result = new HashSet<int> { 1, 2, 3, 4, 5 };
    result.ExceptWith(set2); // { 1, 2, 3 }
    
    // Symmetric difference
    result = new HashSet<int> { 1, 2, 3, 4, 5 };
    result.SymmetricExceptWith(set2); // { 1, 2, 3, 6, 7, 8 }
}

// SortedSet - Range queries
public void RangeQueries()
{
    var scores = new SortedSet<int> { 10, 20, 30, 40, 50 };
    
    // Get range of values
    var range = scores.GetViewBetween(20, 40); // { 20, 30, 40 }
    
    // Get elements less than a value
    var lessThan30 = scores.Where(x => x < 30); // { 10, 20 }
    
    // Min and Max
    var min = scores.Min; // 10
    var max = scores.Max; // 50
}

// Performance comparison
public void PerformanceBench()
{
    const int iterations = 100_000;
    var numbers = Enumerable.Range(0, iterations).ToArray();
    
    // HashSet - much faster for lookups
    var sw = Stopwatch.StartNew();
    var hashSet = new HashSet<int>();
    foreach (var n in numbers)
    {
        hashSet.Add(n);
        hashSet.Contains(n);
    }
    sw.Stop();
    Console.WriteLine(\`HashSet: \${sw.ElapsedMilliseconds}ms\`);
    
    // SortedSet - slower but maintains order
    sw.Restart();
    var sortedSet = new SortedSet<int>();
    foreach (var n in numbers)
    {
        sortedSet.Add(n);
        sortedSet.Contains(n);
    }
    sw.Stop();
    Console.WriteLine(\`SortedSet: \${sw.ElapsedMilliseconds}ms\`);
}

// When to use each:
// HashSet - Checking membership, removing duplicates
public void FastMembership()
{
    var bannedUsers = new HashSet<string> { "spammer1", "spammer2" };
    if (!bannedUsers.Contains(currentUser))
    {
        AllowAccess();
    }
}

// SortedSet - Need order or range queries
public void NeedSorted()
{
    var highScores = new SortedSet<int>();
    highScores.Add(100);
    highScores.Add(90);
    
    var topScores = highScores.GetViewBetween(90, 100);
}`}]},{id:"q6",question:"What are Queue and Stack? Give practical examples of when to use each.",answer:"Queue<T> is FIFO (First In, First Out) - use for task queues, printer queues, BFS. Stack<T> is LIFO (Last In, First Out) - use for undo/redo, function call stacks, DFS. Queue has Enqueue/Dequeue, Stack has Push/Pop.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;

// Queue<T> - FIFO (First In, First Out)
var queue = new Queue<string>();
queue.Enqueue("First request");
queue.Enqueue("Second request");
queue.Enqueue("Third request");

var first = queue.Dequeue(); // "First request"
var second = queue.Dequeue(); // "Second request"

// Stack<T> - LIFO (Last In, First Out)
var stack = new Stack<string>();
stack.Push("First action");
stack.Push("Second action");
stack.Push("Third action");

var last = stack.Pop(); // "Third action"
var previous = stack.Pop(); // "Second action"

// Practical: Task Queue
public class TaskQueue
{
    private Queue<Task> tasks = new();
    
    public void AddTask(Task task)
    {
        tasks.Enqueue(task); // Add to end
    }
    
    public Task ProcessNextTask()
    {
        if (tasks.Count > 0)
            return tasks.Dequeue(); // Process first task
        return null;
    }
}

// Usage
var queue = new TaskQueue();
queue.AddTask(new Task { Name = "Print document" });
queue.AddTask(new Task { Name = "Send email" });
queue.AddTask(new Task { Name = "Backup files" });

// Process in order: Print, Send, Backup
var task1 = queue.ProcessNextTask(); // Print
var task2 = queue.ProcessNextTask(); // Send
var task3 = queue.ProcessNextTask(); // Backup

// Practical: Undo/Redo with Stack
public class UndoRedo
{
    private Stack<Action> undoStack = new();
    private Stack<Action> redoStack = new();
    
    public void DoAction(Action action, Action undoAction)
    {
        action();
        undoStack.Push(undoAction);
        redoStack.Clear(); // Clear redo on new action
    }
    
    public void Undo()
    {
        if (undoStack.Count > 0)
        {
            var action = undoStack.Pop();
            action();
            // Push corresponding redo action
        }
    }
    
    public void Redo()
    {
        if (redoStack.Count > 0)
        {
            var action = redoStack.Pop();
            action();
        }
    }
}

// Usage
var editor = new UndoRedo();
editor.DoAction(
    () => Console.WriteLine("Type: Hello"),
    () => Console.WriteLine("Delete: Hello")
);

editor.DoAction(
    () => Console.WriteLine("Type: World"),
    () => Console.WriteLine("Delete: World")
);

editor.Undo(); // Delete: World
editor.Undo(); // Delete: Hello
editor.Redo(); // Type: Hello

// Practical: Breadth-First Search with Queue
public void BreadthFirstSearch(Node root)
{
    var queue = new Queue<Node>();
    var visited = new HashSet<Node>();
    
    queue.Enqueue(root);
    visited.Add(root);
    
    while (queue.Count > 0)
    {
        var node = queue.Dequeue();
        Console.WriteLine(node.Value);
        
        foreach (var neighbor in node.Neighbors)
        {
            if (!visited.Contains(neighbor))
            {
                queue.Enqueue(neighbor);
                visited.Add(neighbor);
            }
        }
    }
}

// Practical: Depth-First Search with Stack
public void DepthFirstSearch(Node root)
{
    var stack = new Stack<Node>();
    var visited = new HashSet<Node>();
    
    stack.Push(root);
    
    while (stack.Count > 0)
    {
        var node = stack.Pop();
        if (visited.Contains(node))
            continue;
        
        visited.Add(node);
        Console.WriteLine(node.Value);
        
        foreach (var neighbor in node.Neighbors)
        {
            if (!visited.Contains(neighbor))
                stack.Push(neighbor);
        }
    }
}

// Queue methods
public void QueueOperations()
{
    var queue = new Queue<int>();
    
    queue.Enqueue(1); // Add to back
    queue.Enqueue(2);
    queue.Enqueue(3);
    
    var front = queue.Peek(); // 1 (without removing)
    var first = queue.Dequeue(); // 1 (with removing)
    
    bool has = queue.Contains(2);
    var count = queue.Count;
}

// Stack methods
public void StackOperations()
{
    var stack = new Stack<int>();
    
    stack.Push(1); // Add to top
    stack.Push(2);
    stack.Push(3);
    
    var top = stack.Peek(); // 3 (without removing)
    var last = stack.Pop(); // 3 (with removing)
    
    bool has = stack.Contains(2);
    var count = stack.Count;
}

// Comparison
// Operation    Queue        Stack
// Add          Enqueue      Push
// Remove       Dequeue      Pop
// Peek         Peek         Peek
// Order        FIFO         LIFO
// Use case     Tasks        Undo/DFS

// When to use Queue:
// - Job scheduling
// - BFS algorithms
// - Printer queues
// - Message processing
// - Buffering data

// When to use Stack:
// - Undo/Redo functionality
// - DFS algorithms
// - Expression evaluation
// - Function call stack
// - Backtracking problems`}]},{id:"q7",question:"What is LinkedList<T> and when would you use it instead of List<T>?",answer:"LinkedList<T> is a doubly-linked list with nodes. Use when you need efficient insertions/deletions in the middle. List<T> is better for random access. LinkedList has O(1) insert/delete at known position, but O(n) random access. Use LinkedList rarely, List<T> is usually better.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;

// LinkedList<T> - Doubly-linked nodes
var linked = new LinkedList<int>();

var node1 = linked.AddLast(10); // Add to end
var node2 = linked.AddLast(20);
var node3 = linked.AddLast(30);

// Efficient insertion in the middle
linked.AddAfter(node1, 15); // Insert between 10 and 20
linked.AddBefore(node3, 25); // Insert before 30

// Result: 10 -> 15 -> 20 -> 25 -> 30

// Access nodes
var first = linked.First; // LinkedListNode<int>
var last = linked.Last;

// Traverse
foreach (var item in linked)
{
    Console.WriteLine(item); // 10, 15, 20, 25, 30
}

// Remove by node reference (O(1))
linked.Remove(node2); // Very fast - O(1)

// Find a value
var foundNode = linked.Find(20); // O(n)

// Comparison with List
// Operation            LinkedList   List<T>
// Add to end          O(1)         O(1)
// Add to start        O(1)         O(n) - shifts elements
// Insert at index     O(n)         O(n) - shifts elements
// Remove by node      O(1)         O(n)
// Random access [i]   O(n)         O(1)
// Memory              More         Less
// Cache friendly      No           Yes

public class ComparisonDemo()
{
    public void InsertionPerformance()
    {
        const int count = 10_000;
        
        // List - slow at inserting in middle
        var sw = Stopwatch.StartNew();
        var list = new List<int>();
        for (int i = 0; i < count; i++)
        {
            list.Insert(0, i); // Insert at start - O(n)
        }
        sw.Stop();
        Console.WriteLine(\`List insert at start: \${sw.ElapsedMilliseconds}ms\`);
        
        // LinkedList - fast at inserting
        sw.Restart();
        var linked = new LinkedList<int>();
        LinkedListNode<int> node = null;
        for (int i = 0; i < count; i++)
        {
            node = linked.AddFirst(i); // O(1)
        }
        sw.Stop();
        Console.WriteLine(\`LinkedList insert at start: \${sw.ElapsedMilliseconds}ms\`);
    }
    
    public void RandomAccessPerformance()
    {
        const int count = 10_000;
        var list = new List<int>(Enumerable.Range(0, count));
        var linked = new LinkedList<int>(Enumerable.Range(0, count));
        
        // List - fast random access
        var sw = Stopwatch.StartNew();
        for (int i = 0; i < count; i++)
        {
            var item = list[i]; // O(1)
        }
        sw.Stop();
        Console.WriteLine(\`List random access: \${sw.ElapsedMilliseconds}ms\`);
        
        // LinkedList - slow random access
        sw.Restart();
        for (int i = 0; i < count; i++)
        {
            var node = linked.First;
            for (int j = 0; j < i; j++)
                node = node.Next; // O(n)
        }
        sw.Stop();
        Console.WriteLine(\`LinkedList random access: \${sw.ElapsedMilliseconds}ms\`);
    }
}

// Practical: Circular Buffer with LinkedList
public class CircularBuffer<T>
{
    private LinkedList<T> buffer = new();
    private int maxSize;
    
    public CircularBuffer(int size)
    {
        maxSize = size;
    }
    
    public void Add(T item)
    {
        buffer.AddLast(item);
        
        // Remove oldest if exceeds max
        if (buffer.Count > maxSize)
            buffer.RemoveFirst(); // O(1) removal
    }
    
    public IEnumerable<T> GetAll()
    {
        return buffer;
    }
}

// Usage
var buffer = new CircularBuffer<int>(3);
buffer.Add(1);
buffer.Add(2);
buffer.Add(3);
buffer.Add(4); // Removes 1
buffer.Add(5); // Removes 2
// Buffer contains: 3, 4, 5

// Practical: LRU Cache with LinkedList
public class LRUCache<K, V>
{
    private Dictionary<K, LinkedListNode<(K key, V value)>> cache;
    private LinkedList<(K key, V value)> order;
    private int capacity;
    
    public LRUCache(int capacity)
    {
        this.capacity = capacity;
        cache = new Dictionary<K, LinkedListNode<(K, V)>>(capacity);
        order = new LinkedList<(K, V)>();
    }
    
    public void Put(K key, V value)
    {
        if (cache.ContainsKey(key))
        {
            // Remove old entry
            order.Remove(cache[key]);
        }
        else if (cache.Count >= capacity)
        {
            // Evict least recently used
            var lru = order.First;
            order.RemoveFirst();
            cache.Remove(lru.Value.key);
        }
        
        // Add new entry to end (most recently used)
        var node = order.AddLast((key, value));
        cache[key] = node;
    }
    
    public bool TryGet(K key, out V value)
    {
        if (!cache.ContainsKey(key))
        {
            value = default;
            return false;
        }
        
        // Move to end (mark as recently used)
        var node = cache[key];
        order.Remove(node);
        order.AddLast(node);
        
        value = node.Value.value;
        return true;
    }
}

// When to use LinkedList:
// 1. Frequent insertions/deletions in middle
var musicians = new LinkedList<string>();
musicians.AddLast("Alice");
var bob = musicians.AddLast("Bob");
var charlie = musicians.AddLast("Charlie");
musicians.AddAfter(bob, "Beatrice"); // Efficient

// 2. Circular buffers or queues
var ring = new LinkedList<int>();

// 3. Implementing other data structures
// (usually prefer built-in collections)

// When NOT to use LinkedList:
// - Need random access - use List<T>
// - Need fast iteration - use List<T>
// - Most general-purpose use - use List<T>

// Rule of thumb: Use List<T> 95% of the time,
// LinkedList<T> only when you specifically need
// efficient middle insertions/deletions`}]},{id:"q8",question:"What is IEqualityComparer and when would you implement it?",answer:"IEqualityComparer defines how to compare objects for equality and hash them. Implement when default equality doesn't suit your needs. Use in HashSet, Dictionary, LINQ Distinct/GroupBy to customize comparison logic.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;
using System.Linq;

// Default comparison - uses reference equality for classes
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

var person1 = new Person { Name = "Alice", Age = 25 };
var person2 = new Person { Name = "Alice", Age = 25 };

Console.WriteLine(person1 == person2); // false (different references)

// Custom IEqualityComparer - compare by value
public class PersonNameComparer : IEqualityComparer<Person>
{
    public bool Equals(Person x, Person y)
    {
        if (x == null && y == null) return true;
        if (x == null || y == null) return false;
        return x.Name == y.Name; // Compare by name only
    }
    
    public int GetHashCode(Person obj)
    {
        return obj?.Name?.GetHashCode() ?? 0;
    }
}

// Custom comparer for age-based comparison
public class PersonAgeComparer : IEqualityComparer<Person>
{
    public bool Equals(Person x, Person y)
    {
        if (x == null && y == null) return true;
        if (x == null || y == null) return false;
        return x.Age == y.Age; // Compare by age
    }
    
    public int GetHashCode(Person obj)
    {
        return obj?.Age.GetHashCode() ?? 0;
    }
}

// Case-insensitive string comparer
public class CaseInsensitiveStringComparer : IEqualityComparer<string>
{
    public bool Equals(string x, string y)
    {
        return string.Equals(x, y, StringComparison.OrdinalIgnoreCase);
    }
    
    public int GetHashCode(string obj)
    {
        return obj?.ToLower().GetHashCode() ?? 0;
    }
}

public void DemonstrateCustomComparers()
{
    var people = new List<Person>
    {
        new Person { Name = "Alice", Age = 25 },
        new Person { Name = "Bob", Age = 30 },
        new Person { Name = "Alice", Age = 25 },
        new Person { Name = "Charlie", Age = 25 }
    };
    
    // Using custom comparer in HashSet
    var uniqueByName = new HashSet<Person>(people, new PersonNameComparer());
    Console.WriteLine(\`Unique by name: \${uniqueByName.Count}\`); // 3 (Alice, Bob, Charlie)
    
    var uniqueByAge = new HashSet<Person>(people, new PersonAgeComparer());
    Console.WriteLine(\`Unique by age: \${uniqueByAge.Count}\`); // 2 (age 25, age 30)
}

// Using with Dictionary
public void CustomComparerWithDictionary()
{
    var dict = new Dictionary<string, int>(new CaseInsensitiveStringComparer());
    
    dict["Alice"] = 25;
    dict["BOB"] = 30;
    dict["ALICE"] = 26; // Overwrites "Alice"
    
    Console.WriteLine(dict["alice"]); // 26 (case-insensitive)
}

// Using with LINQ Distinct
public void CustomComparerWithLinq()
{
    var people = new List<Person>
    {
        new Person { Name = "Alice", Age = 25 },
        new Person { Name = "alice", Age = 25 },
        new Person { Name = "Bob", Age = 30 }
    };
    
    // Remove duplicates using custom comparer
    var unique = people.Distinct(new PersonNameComparer()).ToList();
    Console.WriteLine($"Unique count: {unique.Count}"); // 2
}

// Using with GroupBy
public void CustomComparerWithGroupBy()
{
    var words = new[] { "Hello", "hello", "HELLO", "World", "world" };
    
    var groups = words.GroupBy(w => w, new CaseInsensitiveStringComparer());
    
    foreach (var group in groups)
    {
        Console.WriteLine($"{group.Key}: {group.Count()}");
        // hello: 3
        // world: 2
    }
}

// Important: GetHashCode and Equals must be consistent!
// If two objects are equal, they MUST have the same hash code
public class BadEqualityComparer : IEqualityComparer<int>
{
    public bool Equals(int x, int y) => x == y;
    
    public int GetHashCode(int obj)
    {
        return 42; // WRONG! Breaks HashSet/Dictionary
    }
}

// Correct implementation
public class GoodEqualityComparer : IEqualityComparer<int>
{
    public bool Equals(int x, int y)
    {
        return x == y;
    }
    
    public int GetHashCode(int obj)
    {
        return obj.GetHashCode(); // Must be consistent
    }
}

// Complex example: comparing objects by multiple fields
public class PersonFullComparer : IEqualityComparer<Person>
{
    public bool Equals(Person x, Person y)
    {
        if (x == null && y == null) return true;
        if (x == null || y == null) return false;
        return x.Name == y.Name && x.Age == y.Age;
    }
    
    public int GetHashCode(Person obj)
    {
        unchecked
        {
            int hash = 17;
            hash = hash * 31 + obj.Name?.GetHashCode() ?? 0;
            hash = hash * 31 + obj.Age.GetHashCode();
            return hash;
        }
    }
}

// Override Equals and GetHashCode on the class itself (preferred)
public class ImprovedPerson : IEquatable<ImprovedPerson>
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public bool Equals(ImprovedPerson other)
    {
        if (other == null) return false;
        return Name == other.Name && Age == other.Age;
    }
    
    public override bool Equals(object obj)
    {
        return Equals(obj as ImprovedPerson);
    }
    
    public override int GetHashCode()
    {
        unchecked
        {
            int hash = 17;
            hash = hash * 31 + Name?.GetHashCode() ?? 0;
            hash = hash * 31 + Age.GetHashCode();
            return hash;
        }
    }
}

// Usage
var person = new ImprovedPerson { Name = "Alice", Age = 25 };
var hashSet = new HashSet<ImprovedPerson> { person };
hashSet.Contains(new ImprovedPerson { Name = "Alice", Age = 25 }); // true!`}]},{id:"q9",question:"What is ConcurrentBag, ConcurrentDictionary, and other thread-safe collections?",answer:"Thread-safe collections from System.Collections.Concurrent allow safe concurrent access without external locking. Include ConcurrentBag, ConcurrentQueue, ConcurrentDictionary, ConcurrentStack. Use for multi-threaded scenarios instead of locking regular collections.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

// ConcurrentBag<T> - Unordered, thread-safe collection
var bag = new ConcurrentBag<int>();

Task.Run(() =>
{
    for (int i = 0; i < 100; i++)
    {
        bag.Add(i); // Thread-safe add
    }
});

Task.Run(() =>
{
    for (int i = 100; i < 200; i++)
    {
        bag.Add(i); // Thread-safe add
    }
});

// ConcurrentQueue<T> - Thread-safe FIFO queue
var queue = new ConcurrentQueue<string>();

Task.Run(() =>
{
    for (int i = 0; i < 50; i++)
    {
        queue.Enqueue($"Task {i}");
    }
});

Task.Run(() =>
{
    while (queue.TryDequeue(out var item))
    {
        Console.WriteLine($"Processing: {item}");
    }
});

// ConcurrentStack<T> - Thread-safe LIFO stack
var stack = new ConcurrentStack<int>();

for (int i = 0; i < 10; i++)
{
    stack.Push(i); // Thread-safe
}

if (stack.TryPop(out var value))
{
    Console.WriteLine(value); // Thread-safe pop
}

// ConcurrentDictionary<K,V> - Thread-safe dictionary
var dict = new ConcurrentDictionary<string, int>();

Task.Run(() =>
{
    for (int i = 0; i < 100; i++)
    {
        dict[$"Key{i}"] = i; // Thread-safe
    }
});

Task.Run(() =>
{
    foreach (var kvp in dict)
    {
        Console.WriteLine(kvp); // Thread-safe iteration
    }
});

// Thread-safe operations on ConcurrentDictionary
var dict2 = new ConcurrentDictionary<string, int>();

// AddOrUpdate - atomic operation
dict2.AddOrUpdate("count", 1, (key, oldValue) => oldValue + 1);
dict2.AddOrUpdate("count", 1, (key, oldValue) => oldValue + 1);
Console.WriteLine(dict2["count"]); // 2

// TryAdd - atomic operation
bool added = dict2.TryAdd("name", 123); // true if added
bool added2 = dict2.TryAdd("name", 456); // false (already exists)

// TryGetValue - atomic operation
if (dict2.TryGetValue("name", out int value))
{
    Console.WriteLine(value);
}

// Comparison: Bad vs Good for multithreading
// BAD - Using regular collection with lock
public class BadMultithreadedCounter
{
    private Dictionary<string, int> counts = new();
    private object lockObj = new();
    
    public void Increment(string key)
    {
        lock (lockObj) // Bottleneck!
        {
            if (counts.ContainsKey(key))
                counts[key]++;
            else
                counts[key] = 1;
        }
    }
}

// GOOD - Using ConcurrentDictionary
public class GoodMultithreadedCounter
{
    private ConcurrentDictionary<string, int> counts = new();
    
    public void Increment(string key)
    {
        counts.AddOrUpdate(key, 1, (k, v) => v + 1); // No lock!
    }
}

// Thread-safe collection summary
// Collection              Type      Operations
// ConcurrentBag           Unordered Add, Take
// ConcurrentQueue         FIFO      Enqueue, TryDequeue
// ConcurrentStack         LIFO      Push, TryPop
// ConcurrentDictionary    K-V       Add, TryAdd, AddOrUpdate

// Practical: Producer-Consumer with ConcurrentQueue
public class ProducerConsumer
{
    private ConcurrentQueue<int> queue = new();
    
    public void ProduceItems()
    {
        for (int i = 0; i < 100; i++)
        {
            queue.Enqueue(i);
            Thread.Sleep(10);
        }
    }
    
    public void ConsumeItems()
    {
        while (true)
        {
            if (queue.TryDequeue(out var item))
            {
                Console.WriteLine($"Processing: {item}");
            }
            else
            {
                Thread.Sleep(100); // Wait for items
            }
        }
    }
}

// Usage
var pc = new ProducerConsumer();
var producer = Task.Run(() => pc.ProduceItems());
var consumer = Task.Run(() => pc.ConsumeItems());

// Important: Thread-safe collections don't make your code thread-safe!
// Example of race condition even with ConcurrentDictionary
var concurrentDict = new ConcurrentDictionary<string, int>();

// This is NOT atomic!
if (!concurrentDict.ContainsKey("key"))
{
    // Another thread could add "key" here!
    concurrentDict["key"] = 1;
}

// Correct approach using AddOrUpdate
concurrentDict.AddOrUpdate("key", 1, (k, v) => v + 1); // Atomic

// Performance tips:
// - ConcurrentDictionary is slower than Dictionary + lock
// - Use when you have high contention
// - Use regular collections with lock for low contention
// - Minimize time spent in critical sections`}]},{id:"q10",question:"How do you choose between different collection types? What are the selection criteria?",answer:"Choose based on: (1) Access pattern (random vs sequential), (2) Frequency of insert/delete, (3) Order preservation, (4) Duplicates allowed, (5) Key-value pairs needed, (6) Thread-safety required. Use flowchart: Need random access? → List. Need key-value? → Dictionary. Need unique? → HashSet. Need ordered? → SortedDictionary.",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;

// Selection Guide - Decision Tree

// 1. Do you need key-value pairs?
if (needKeyValue)
{
    // Yes -> Use Dictionary or SortedDictionary
    
    // Need sorted order?
    if (needSorted)
    {
        var dict = new SortedDictionary<string, int>(); // Sorted
    }
    else
    {
        var dict = new Dictionary<string, int>(); // Fast
    }
}
else
{
    // No -> Use List, HashSet, Queue, or Stack
    
    // Need random access by index?
    if (needRandomAccess)
    {
        var list = new List<int>(); // O(1) access
    }
    else
    {
        // Need unique items?
        if (needUnique)
        {
            // Need order?
            if (needOrder)
            {
                var set = new SortedSet<int>(); // Ordered, unique
            }
            else
            {
                var set = new HashSet<int>(); // Fast, unique
            }
        }
        else
        {
            // Need FIFO or LIFO?
            if (needFIFO)
            {
                var queue = new Queue<int>(); // FIFO
            }
            else if (needLIFO)
            {
                var stack = new Stack<int>(); // LIFO
            }
        }
    }
}

// Practical Scenarios

// Scenario 1: Cache user data by ID
// Need: Fast lookup by ID, key-value pairs
var userCache = new Dictionary<int, User>();
userCache[123] = new User { Name = "Alice" };
var user = userCache[123]; // Fast O(1)

// Scenario 2: Autocomplete suggestions
// Need: All matching items, starts with prefix
var autoComplete = new SortedSet<string>();
autoComplete.Add("Hello");
autoComplete.Add("Help");
var matches = autoComplete.Where(s => s.StartsWith("He"));

// Scenario 3: Process job queue
// Need: FIFO order, dequeue first item
var jobQueue = new Queue<Job>();
jobQueue.Enqueue(new Job { Name = "Task1" });
var nextJob = jobQueue.Dequeue();

// Scenario 4: Undo/Redo functionality
// Need: LIFO order for undo
var undoStack = new Stack<Action>();
undoStack.Push(() => Console.WriteLine("Undo action 1"));
var action = undoStack.Pop();

// Scenario 5: Remove duplicates
// Need: Unique items, fast membership testing
var uniqueUsers = new HashSet<User>(users, new UserIdComparer());

// Scenario 6: Sorted leaderboard
// Need: Sorted by score, range queries
var scores = new SortedSet<(string name, int score)>(
    new ScoreComparer());

// Scenario 7: Graph adjacency list
// Need: Multiple neighbors per node, order doesn't matter
var graph = new Dictionary<Node, List<Node>>();
graph[nodeA] = new List<Node> { nodeB, nodeC };

// Performance Comparison Table
Console.WriteLine("Collection Performance Comparison:");
Console.WriteLine("Operation          List    Dict    Hash    Queue   Stack");
Console.WriteLine("Add to end         O(1)    -       O(1)    O(1)    O(1)");
Console.WriteLine("Add to start       O(n)    -       -       -       -");
Console.WriteLine("Remove first       O(n)    -       -       O(1)    -");
Console.WriteLine("Remove last        O(1)    -       -       -       O(1)");
Console.WriteLine("Random access      O(1)    -       -       -       -");
Console.WriteLine("Contains           O(n)    O(1)    O(1)    O(n)    O(n)");
Console.WriteLine("Remove by value    O(n)    O(1)    O(1)    O(n)    O(n)");

// Selection Checklist
/*
List<T>:
✓ Need random access by index
✓ Maintain insertion order
✓ Mostly appending items
✓ Need Count, Insert, RemoveAt
✗ Large frequent insertions in middle
✗ Need unique items
✗ Need key-value association

Dictionary<K,V>:
✓ Need fast lookup by key
✓ Key-value association
✓ Most operations O(1)
✓ No required order
✗ Null keys
✗ Need sorted order
✗ Need unique values

HashSet<T>:
✓ Need unique items
✓ Need fast membership testing
✓ Don't care about order
✓ Set operations (Union, Intersect)
✗ Need sorted order
✗ Need random access
✗ Need to preserve duplicates

SortedSet<T>:
✓ Need unique items
✓ Need sorted order
✓ Need range queries
✗ Large frequent updates (slower)
✗ Need random access by index

Queue<T>:
✓ FIFO processing needed
✓ Task scheduling
✓ Fast operations
✗ Random access
✗ Need to access middle items

Stack<T>:
✓ LIFO processing needed
✓ Undo/Redo
✓ DFS algorithms
✗ Random access
✗ Need to access from bottom

LinkedList<T>:
✓ Frequent middle insertions
✓ Frequent removals by node
✗ Random access needed
✗ Memory overhead acceptable
✗ Large collections

SortedDictionary<K,V>:
✓ Need sorted key-value pairs
✓ Range queries on keys
✗ High performance needed
✗ Large frequent updates
*/

// Examples for different scenarios
public class SelectionExamples
{
    // Student grades management
    public void ManageGrades()
    {
        // Lookup grade by student ID
        var grades = new Dictionary<int, decimal>();
    }
    
    // Shopping cart items
    public void ShoppingCart()
    {
        // Add/remove items, maintain order
        var cart = new List<CartItem>();
    }
    
    // Blocked users
    public void BlockedUsers()
    {
        // Fast membership check
        var blocked = new HashSet<int>();
    }
    
    // Task processing
    public void ProcessTasks()
    {
        // Process in order received (FIFO)
        var queue = new Queue<Task>();
    }
    
    // Undo operations
    public void UndoOperations()
    {
        // Access last operation (LIFO)
        var undoStack = new Stack<Operation>();
    }
}`}]}]},Mg={id:"csharp-net-core",name:".NET Core",questions:[{id:"q1",question:"What is .NET Core and how is it different from .NET Framework?",answer:".NET Core is a cross-platform, open-source runtime for building modern applications. .NET Framework is Windows-only, older, not open-source. .NET Core runs on Windows, Linux, macOS. .NET Core is faster, lighter, modular. .NET Core 5+ is now called just '.NET'. Use .NET Core for new projects.",codeSnippets:[{language:"csharp",code:`// .NET Core Program.cs - Minimal hosting setup
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

// Check .NET version at runtime
Console.WriteLine($".NET Version: {System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription}");
// Output: .NET Version: .NET 7.0.0

// Simple .NET Core console app
var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddScoped<IGreeter, Greeter>();
    })
    .Build();

using (host)
{
    var greeter = host.Services.GetRequiredService<IGreeter>();
    greeter.Greet("World");
}

public interface IGreeter
{
    void Greet(string name);
}

public class Greeter : IGreeter
{
    public void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
}

// Key differences comparison
Console.WriteLine("Comparison: .NET Core vs .NET Framework");
Console.WriteLine("Feature              .NET Core              .NET Framework");
Console.WriteLine("Cross-platform       Yes                    No (Windows only)");
Console.WriteLine("Open source          Yes                    No");
Console.WriteLine("Performance          Faster                 Slower");
Console.WriteLine("Size                 Lightweight            Heavy");
Console.WriteLine("NuGet                Modern                 Older");
Console.WriteLine("async/await          First class            Added later");
Console.WriteLine("Dependency inject    Built-in               Requires package");
Console.WriteLine("Latest version       .NET 8                 4.8 (legacy)");
Console.WriteLine("LTS                  .NET 8 (Nov 2024)      Not applicable");
Console.WriteLine("Active support       Yes                    Limited");

// .NET Core projects are simpler
// .NET Framework:
// <Project Sdk="Microsoft.NET.Sdk">
//   <TargetFramework>net472</TargetFramework>
// </Project>

// .NET Core (modern):
// <Project Sdk="Microsoft.NET.Sdk">
//   <TargetFramework>net8.0</TargetFramework>
// </Project>

// Package format changed
// .NET Framework: packages.config (XML)
// .NET Core: PackageReference in .csproj (cleaner)

// NuGet package restoration is automatic in .NET Core
// No need for "Update-Package" command`}]},{id:"q2",question:"What is Dependency Injection (DI) and how does it work in .NET Core?",answer:"DI is a pattern where dependencies are injected rather than created internally. .NET Core has built-in DI in IServiceCollection. Register services (singleton, scoped, transient). Inject via constructor. Singleton - one instance forever. Scoped - one per request. Transient - new instance each time.",codeSnippets:[{language:"csharp",code:`using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

// ========== SERVICE REGISTRATION ==========
var services = new ServiceCollection();

// 1. SINGLETON - One instance for entire application
services.AddSingleton<IConfiguration>(new ConfigurationBuilder().Build());
// Expensive to create, stateless services

// 2. SCOPED - New instance per request (web apps)
services.AddScoped<IUserRepository, UserRepository>();
// Default for web apps, perfect for DbContext

// 3. TRANSIENT - New instance every time
services.AddTransient<ILogger, ConsoleLogger>();
// Lightweight, stateless objects

// ========== SERVICE INJECTION ==========
public class UserService
{
    private readonly IUserRepository repository;
    private readonly ILogger logger;
    
    // Constructor injection
    public UserService(IUserRepository repository, ILogger logger)
    {
        this.repository = repository;
        this.logger = logger;
    }
    
    public User GetUser(int id)
    {
        logger.Log($"Fetching user {id}");
        return repository.GetById(id);
    }
}

// ========== REAL EXAMPLE ==========
public interface IUserRepository
{
    User GetById(int id);
    void Save(User user);
}

public class UserRepository : IUserRepository
{
    public User GetById(int id)
    {
        return new User { Id = id, Name = "Alice" };
    }
    
    public void Save(User user)
    {
        Console.WriteLine($"Saving user: {user.Name}");
    }
}

public interface ILogger
{
    void Log(string message);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"[LOG] {message}");
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
}

// ========== SETUP PROGRAM ==========
var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        // Register dependencies
        services.AddSingleton<ILogger, ConsoleLogger>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<UserService>();
    })
    .Build();

// Get service and use it
using (host)
{
    var userService = host.Services.GetRequiredService<UserService>();
    var user = userService.GetUser(1);
    Console.WriteLine(user.Name);
}

// ========== LIFETIME COMPARISON ==========
Console.WriteLine("Lifetime Comparison:");
Console.WriteLine("Lifetime    Instance   Use Case");
Console.WriteLine("Singleton   1 total    Config, logging factory, cache");
Console.WriteLine("Scoped      1/request  DbContext, unit of work");
Console.WriteLine("Transient   Always new Stateless utilities");

// ========== FACTORY PATTERN ==========
services.AddScoped<IUserRepository>(provider =>
{
    var logger = provider.GetRequiredService<ILogger>();
    return new UserRepository(); // Custom creation logic
});

// ========== IServiceProvider USAGE ==========
var serviceProvider = services.BuildServiceProvider();

// Resolve service
var logger = serviceProvider.GetRequiredService<ILogger>();
logger.Log("Application started");

// Try get service (doesn't throw if not found)
if (serviceProvider.GetService(typeof(IUserRepository)) is IUserRepository repo)
{
    Console.WriteLine("Repository found");
}

// ========== COMMON PITFALL: Captive dependency ==========
// BAD: Scoped dependency injected into Singleton
// services.AddSingleton<MySingleton>(); // Holds reference
// services.AddScoped<MyScoped>(); // Can't be scoped if singleton needs it

// GOOD: Inject IServiceProvider instead
public class BadSingleton
{
    private readonly IUserRepository repository; // WRONG!
    
    public BadSingleton(IUserRepository repository)
    {
        this.repository = repository; // Holds scoped object forever
    }
}

public class GoodSingleton
{
    private readonly IServiceProvider provider;
    
    public GoodSingleton(IServiceProvider provider)
    {
        this.provider = provider; // Can create new scopes
    }
    
    public User GetUser(int id)
    {
        using var scope = provider.CreateScope();
        var repo = scope.ServiceProvider.GetRequiredService<IUserRepository>();
        return repo.GetById(id);
    }
}`}]},{id:"q3",question:"What is the middleware pipeline in ASP.NET Core and how does it work?",answer:"Middleware is a component that processes HTTP requests/responses. They form a pipeline where each middleware can modify request/response or pass to next. Order matters - added in Program.cs in order. Request flows through, response comes back through (onion model). Common: logging, auth, CORS, error handling.",codeSnippets:[{language:"csharp",code:`using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

// ========== MIDDLEWARE PIPELINE SETUP ==========
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Middleware order is important (top to bottom)
// 1. Exception handler must be FIRST
app.UseExceptionHandler("/error");

// 2. HTTPS redirect
app.UseHttpsRedirection();

// 3. Static files (before routing)
app.UseStaticFiles();

// 4. Routing
app.UseRouting();

// 5. Authentication
app.UseAuthentication();

// 6. Authorization
app.UseAuthorization();

// 7. Custom middleware
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Path}");
    await next(); // Pass to next middleware
    Console.WriteLine($"Response: {context.Response.StatusCode}");
});

// 8. Endpoint mapping
app.MapGet("/", () => "Hello World");

app.Run();

// ========== CUSTOM MIDDLEWARE CLASS ==========
public class LoggingMiddleware
{
    private readonly RequestDelegate next;
    
    public LoggingMiddleware(RequestDelegate next)
    {
        this.next = next;
    }
    
    public async Task InvokeAsync(HttpContext context)
    {
        // Before request
        Console.WriteLine($"Incoming: {context.Request.Method} {context.Request.Path}");
        var startTime = DateTime.UtcNow;
        
        try
        {
            // Call next middleware
            await next(context);
        }
        finally
        {
            // After request (even if exception)
            var duration = DateTime.UtcNow - startTime;
            Console.WriteLine($"Outgoing: {context.Response.StatusCode} ({duration.TotalMilliseconds}ms)");
        }
    }
}

// Register custom middleware
app.UseMiddleware<LoggingMiddleware>();

// ========== MIDDLEWARE PIPELINE FLOW (ONION MODEL) ==========
// Request comes in
// ↓ ExceptionHandler
// ↓ HttpsRedirection
// ↓ StaticFiles
// ↓ Routing
// ↓ Authentication
// ↓ Authorization
// ↓ Custom middleware
// ↓ Endpoint handler
// ↑ Response flows back up through same pipeline
// Response sent

// ========== INLINE MIDDLEWARE ==========
app.Use(async (context, next) =>
{
    // Modify request
    if (context.Request.Path == "/admin")
    {
        if (!context.User.Identity.IsAuthenticated)
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("Unauthorized");
            return; // Don't call next - stop pipeline
        }
    }
    
    await next(); // Pass to next middleware
});

// ========== CONDITIONAL MIDDLEWARE ==========
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/error");
}

// ========== SHORT-CIRCUIT MIDDLEWARE ==========
app.MapGet("/health", () => Results.Ok("Healthy"));
// Short-circuits - doesn't go through endpoint handler

// ========== MIDDLEWARE WITH OPTIONS ==========
app.UseCors(policy =>
{
    policy.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader();
});

// ========== TERMINAL MIDDLEWARE ==========
// Middleware that doesn't call next()
app.Run(async context =>
{
    // This terminates the pipeline
    await context.Response.WriteAsync("This is the end");
});

// Anything after app.Run() won't execute

// ========== BEST PRACTICES ==========
Console.WriteLine("Middleware Best Practices:");
Console.WriteLine("1. Exception handler FIRST");
Console.WriteLine("2. HTTPS before routing");
Console.WriteLine("3. Static files before routing");
Console.WriteLine("4. Auth/Authorization in order");
Console.WriteLine("5. Custom middleware before endpoints");
Console.WriteLine("6. Use try-finally to ensure cleanup");
Console.WriteLine("7. Call next() to pass to next middleware");
Console.WriteLine("8. Don't call next() to terminate pipeline");`}]},{id:"q4",question:"What is configuration management in .NET Core? How do you read app settings?",answer:"Configuration in .NET Core comes from multiple sources: appsettings.json, environment variables, command-line args. Use IConfiguration interface. Access nested values with ':' separator. Environment-specific files like appsettings.Development.json override defaults. Options pattern provides type-safe configuration access.",codeSnippets:[{language:"csharp",code:`using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

// ========== BASIC CONFIGURATION SETUP ==========
var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true)
    .AddEnvironmentVariables()
    .AddCommandLine(args)
    .Build();

// appsettings.json
/*
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=mydb;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  },
  "AppSettings": {
    "ApiUrl": "https://api.example.com",
    "Timeout": 30,
    "EnableCache": true
  }
}
*/

// ========== READING CONFIGURATION ==========
// Access top-level keys
string? apiUrl = configuration["AppSettings:ApiUrl"];

// Access connection string
string? connString = configuration.GetConnectionString("DefaultConnection");

// Get nested value
string logLevel = configuration["Logging:LogLevel:Default"];

// Get with default value
string? cache = configuration["AppSettings:EnableCache"] ?? "false";

// ========== TYPE-SAFE CONFIGURATION (OPTIONS PATTERN) ==========
public class AppSettings
{
    public string ApiUrl { get; set; }
    public int Timeout { get; set; }
    public bool EnableCache { get; set; }
}

public class DatabaseSettings
{
    public string Host { get; set; }
    public int Port { get; set; }
    public string Database { get; set; }
}

// Register options in DI
var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<AppSettings>(configuration.GetSection("AppSettings"));
builder.Services.Configure<DatabaseSettings>(configuration.GetSection("Database"));

var app = builder.Build();

// ========== INJECTING OPTIONS ==========
public class MyService
{
    private readonly AppSettings settings;
    
    // Inject IOptions<T>
    public MyService(IOptions<AppSettings> options)
    {
        settings = options.Value; // Get typed settings
    }
    
    public void DoSomething()
    {
        Console.WriteLine($"API URL: {settings.ApiUrl}");
        Console.WriteLine($"Timeout: {settings.Timeout}");
    }
}

// Or use IOptionsMonitor for live reload
public class MyServiceWithMonitor
{
    private readonly IOptionsMonitor<AppSettings> monitor;
    
    public MyServiceWithMonitor(IOptionsMonitor<AppSettings> monitor)
    {
        this.monitor = monitor;
    }
    
    public void DoSomething()
    {
        var settings = monitor.CurrentValue; // Gets latest value
    }
}

// ========== ENVIRONMENT-SPECIFIC SETTINGS ==========
// appsettings.json (base)
// appsettings.Development.json (overrides)
// appsettings.Production.json (overrides)

// appsettings.Development.json
/*
{
  "Logging": {
    "LogLevel": {
      "Default": "Debug"
    }
  },
  "AppSettings": {
    "ApiUrl": "https://localhost:5001"
  }
}
*/

// Get current environment
var environment = builder.Environment;
Console.WriteLine($"Environment: {environment.EnvironmentName}");

if (environment.IsDevelopment())
{
    // Development-only setup
}
else if (environment.IsProduction())
{
    // Production-only setup
}

// ========== ENVIRONMENT VARIABLES ==========
// Set in system or via .env file
// var value = configuration["MyEnvVariable"];

// Override JSON with env vars
// Docker: Set environment variables
// Windows: setx MYKEY myvalue

// ========== COMMAND-LINE ARGUMENTS ==========
// dotnet run --AppSettings:ApiUrl="https://custom-api.com"
var customUrl = configuration["AppSettings:ApiUrl"];

// ========== CONFIGURATION VALIDATION ==========
public class ValidatedSettings
{
    [Range(1, 100)]
    public int Timeout { get; set; }
    
    [Required]
    public string ApiUrl { get; set; }
    
    [EmailAddress]
    public string AdminEmail { get; set; }
}

// Validate on startup
builder.Services.AddOptions<ValidatedSettings>()
    .BindConfiguration("AppSettings")
    .ValidateDataAnnotations()
    .ValidateOnStart(); // Fail fast

// ========== KEY VAULT INTEGRATION ==========
// For production secrets
var keyVaultUrl = new Uri("https://myvault.vault.azure.net/");
builder.Configuration.AddAzureKeyVault(
    keyVaultUrl,
    new DefaultAzureCredential()
);

// Secrets in Key Vault override JSON

// ========== CONFIGURATION BINDING ==========
var appSettings = configuration.GetSection("AppSettings").Get<AppSettings>();

// Now appSettings has typed values
Console.WriteLine($"URL: {appSettings.ApiUrl}");
Console.WriteLine($"Timeout: {appSettings.Timeout}");

// ========== RELOAD ON CHANGE ==========
// Set reloadOnChange: true
configuration.GetReloadToken().RegisterChangeCallback(_ =>
{
    Console.WriteLine("Configuration changed!");
}, null);`}]},{id:"q5",question:"What is Entity Framework Core (EF Core) and how does it differ from EF 6?",answer:"EF Core is a lightweight ORM for .NET Core. EF 6 is older ORM for .NET Framework. EF Core is faster, modular, supports multiple databases. EF Core has DbSet/DbContext for accessing databases. Use DbContext for queries and CRUD. EF Core supports LINQ-to-database queries.",codeSnippets:[{language:"csharp",code:`using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

// ========== DBCONTEXT ==========
public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Order> Orders { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // Configure database
        options.UseSqlServer("Server=localhost;Database=mydb;");
    }
}

// ========== MODELS ==========
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    
    // Navigation property
    public ICollection<Order> Orders { get; set; } = new List<Order>();
}

public class Order
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public decimal Amount { get; set; }
    public DateTime CreatedDate { get; set; }
    
    // Foreign key relationship
    public User User { get; set; }
}

// ========== DEPENDENCY INJECTION SETUP ==========
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

var app = builder.Build();

// ========== CRUD OPERATIONS ==========
public class UserRepository
{
    private readonly ApplicationDbContext context;
    
    public UserRepository(ApplicationDbContext context)
    {
        this.context = context;
    }
    
    // CREATE
    public async Task<User> CreateUserAsync(User user)
    {
        context.Users.Add(user);
        await context.SaveChangesAsync();
        return user;
    }
    
    // READ
    public async Task<User> GetUserAsync(int id)
    {
        return await context.Users.FindAsync(id);
    }
    
    // READ ALL
    public async Task<List<User>> GetAllUsersAsync()
    {
        return await context.Users.ToListAsync();
    }
    
    // UPDATE
    public async Task<User> UpdateUserAsync(User user)
    {
        context.Users.Update(user);
        await context.SaveChangesAsync();
        return user;
    }
    
    // DELETE
    public async Task DeleteUserAsync(int id)
    {
        var user = await context.Users.FindAsync(id);
        if (user != null)
        {
            context.Users.Remove(user);
            await context.SaveChangesAsync();
        }
    }
}

// ========== LINQ QUERIES ==========
public class QueryExamples
{
    private readonly ApplicationDbContext context;
    
    public QueryExamples(ApplicationDbContext context)
    {
        this.context = context;
    }
    
    // Simple query
    public async Task<List<User>> GetActiveUsers()
    {
        return await context.Users
            .Where(u => u.Email.Contains("@example.com"))
            .ToListAsync();
    }
    
    // Join query
    public async Task<List<(User user, int orderCount)>> GetUsersWithOrderCount()
    {
        return await context.Users
            .Include(u => u.Orders)
            .Select(u => new ValueTuple<User, int>(u, u.Orders.Count))
            .ToListAsync();
    }
    
    // Aggregation
    public async Task<decimal> GetTotalOrderAmount()
    {
        return await context.Orders
            .SumAsync(o => o.Amount);
    }
    
    // Grouping
    public async Task<List<(int userId, decimal totalAmount)>> GetUserTotalOrders()
    {
        return await context.Orders
            .GroupBy(o => o.UserId)
            .Select(g => new ValueTuple<int, decimal>(g.Key, g.Sum(o => o.Amount)))
            .ToListAsync();
    }
}

// ========== MIGRATIONS ==========
// dotnet ef migrations add InitialCreate
// dotnet ef database update

// Migration file (auto-generated)
/*
public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Users",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Name = table.Column<string>(nullable: true),
                Email = table.Column<string>(nullable: true)
            }
        );
    }
}
*/

// ========== RELATIONSHIPS ==========
// One-to-Many: User has many Orders
public class UserWithOrders
{
    public int Id { get; set; }
    public string Name { get; set; }
    
    // One user, many orders
    public ICollection<Order> Orders { get; set; }
}

// Many-to-Many
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    
    // Many students, many courses
    public ICollection<StudentCourse> StudentCourses { get; set; }
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; }
    
    public ICollection<StudentCourse> StudentCourses { get; set; }
}

public class StudentCourse
{
    public int StudentId { get; set; }
    public Student Student { get; set; }
    
    public int CourseId { get; set; }
    public Course Course { get; set; }
}

// ========== COMPARISON: EF 6 vs EF CORE ==========
Console.WriteLine("EF 6 vs EF Core:");
Console.WriteLine("Feature              EF 6                EF Core");
Console.WriteLine("Platform             .NET Framework      .NET Core/.NET");
Console.WriteLine("Performance          Slower              Faster");
Console.WriteLine("LINQ support         Full                Most features");
Console.WriteLine("Database support     SQL Server mainly   Multiple databases");
Console.WriteLine("Async                Limited             First-class");
Console.WriteLine("Lightweight          Heavy               Lightweight");
Console.WriteLine("Open source          No                  Yes");
Console.WriteLine("Active development   Limited             Active");

// ========== BEST PRACTICES ==========
// 1. Use async operations
await userRepository.GetAllUsersAsync();

// 2. Use Include for eager loading
context.Users.Include(u => u.Orders).ToList();

// 3. Use Select for projection (reduce data)
context.Users
    .Select(u => new { u.Id, u.Name })
    .ToList();

// 4. Avoid N+1 queries
// BAD:
foreach (var user in context.Users)
{
    var orders = context.Orders.Where(o => o.UserId == user.Id);
}

// GOOD:
var users = context.Users.Include(u => u.Orders);

// 5. Use DbContextFactory for multi-tenancy or complex scenarios
var factory = new PooledDbContextFactory<ApplicationDbContext>(options);`}]},{id:"q6",question:"What is ASP.NET Core and how is it different from ASP.NET Framework?",answer:"ASP.NET Core is modern, cross-platform web framework for .NET Core. ASP.NET Framework is older, Windows-only. ASP.NET Core is faster, unified platform (MVC, Web API, SignalR together), supports microservices. ASP.NET Core uses Kestrel web server (lightweight). Built on dependency injection and middleware.",codeSnippets:[{language:"csharp",code:`using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

// ========== ASPNET CORE PROJECT SETUP ==========
var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
    );
});

var app = builder.Build();

// Configure middleware pipeline
app.UseCors("AllowAll");
app.UseRouting();
app.MapControllers();

app.Run();

// ========== MINIMAL API (ASP.NET Core 6+) ==========
var builder2 = WebApplication.CreateBuilder(args);
var app2 = builder2.Build();

// Define API without controllers
app2.MapGet("/api/users/{id}", async (int id, IUserService service) =>
{
    var user = await service.GetUserAsync(id);
    return user is null ? Results.NotFound() : Results.Ok(user);
});

app2.MapPost("/api/users", async (CreateUserRequest request, IUserService service) =>
{
    var user = await service.CreateUserAsync(request.Name, request.Email);
    return Results.Created($"/api/users/{user.Id}", user);
});

app2.Run();

// ========== CONTROLLER-BASED API ==========
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService userService;
    
    public UsersController(IUserService userService)
    {
        this.userService = userService;
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await userService.GetUserAsync(id);
        if (user is null)
            return NotFound();
        
        return Ok(user);
    }
    
    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAllUsers()
    {
        var users = await userService.GetAllUsersAsync();
        return Ok(users);
    }
    
    [HttpPost]
    public async Task<ActionResult<User>> CreateUser(CreateUserRequest request)
    {
        var user = await userService.CreateUserAsync(request.Name, request.Email);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, UpdateUserRequest request)
    {
        var user = await userService.UpdateUserAsync(id, request.Name, request.Email);
        if (user is null)
            return NotFound();
        
        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var success = await userService.DeleteUserAsync(id);
        if (!success)
            return NotFound();
        
        return NoContent();
    }
}

// ========== SERVICES ==========
public interface IUserService
{
    Task<User> GetUserAsync(int id);
    Task<List<User>> GetAllUsersAsync();
    Task<User> CreateUserAsync(string name, string email);
    Task<User> UpdateUserAsync(int id, string name, string email);
    Task<bool> DeleteUserAsync(int id);
}

public class UserService : IUserService
{
    private readonly ApplicationDbContext context;
    
    public UserService(ApplicationDbContext context)
    {
        this.context = context;
    }
    
    public async Task<User> GetUserAsync(int id)
    {
        return await context.Users.FindAsync(id);
    }
    
    public async Task<List<User>> GetAllUsersAsync()
    {
        return await context.Users.ToListAsync();
    }
    
    public async Task<User> CreateUserAsync(string name, string email)
    {
        var user = new User { Name = name, Email = email };
        context.Users.Add(user);
        await context.SaveChangesAsync();
        return user;
    }
    
    public async Task<User> UpdateUserAsync(int id, string name, string email)
    {
        var user = await context.Users.FindAsync(id);
        if (user is null)
            return null;
        
        user.Name = name;
        user.Email = email;
        await context.SaveChangesAsync();
        return user;
    }
    
    public async Task<bool> DeleteUserAsync(int id)
    {
        var user = await context.Users.FindAsync(id);
        if (user is null)
            return false;
        
        context.Users.Remove(user);
        await context.SaveChangesAsync();
        return true;
    }
}

// ========== REQUEST/RESPONSE MODELS ==========
public record User(int Id, string Name, string Email);

public record CreateUserRequest(string Name, string Email);

public record UpdateUserRequest(string Name, string Email);

// ========== COMPARISON: ASP.NET Core vs ASP.NET Framework ==========
Console.WriteLine("ASP.NET Core vs ASP.NET Framework:");
Console.WriteLine("Feature              ASP.NET Core        ASP.NET Framework");
Console.WriteLine("Cross-platform       Yes                 No (Windows only)");
Console.WriteLine("Performance          Faster              Slower");
Console.WriteLine("Web server           Kestrel             IIS");
Console.WriteLine("Framework unification Yes (MVC/API)      Separate");
Console.WriteLine("DI built-in          Yes                 No");
Console.WriteLine("Middleware pipeline  Modern              Limited");
Console.WriteLine("Microservices        Built for it        Not ideal");
Console.WriteLine("Latest version       Latest              4.8 (legacy)");
Console.WriteLine("Active development   Yes                 Limited");

// ========== KEY FEATURES ==========
// 1. Kestrel - lightweight, cross-platform web server
// 2. Dependency Injection - built-in
// 3. Middleware - powerful request pipeline
// 4. Unified platform - MVC, Web API, SignalR together
// 5. Configuration - multiple sources
// 6. Logging - built-in
// 7. Health checks - built-in
// 8. Authentication/Authorization - integrated
// 9. CORS - integrated
// 10. Async/await - first class`}]},{id:"q7",question:"What are the different hosting models in .NET Core? Console, Web, Windows Service, Docker?",answer:"Console app - simple command-line app. Web app - ASP.NET Core with Kestrel. Windows Service - runs in background on Windows. Docker - containerized app for any platform. Cloud - Azure App Service, AWS. Each model uses Host.CreateDefaultBuilder() for dependency injection and configuration.",codeSnippets:[{language:"csharp",code:`using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

// ========== 1. CONSOLE APPLICATION ==========
// Program.cs for console app
var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddScoped<IGreeterService, GreeterService>();
    })
    .Build();

using (host)
{
    var greeter = host.Services.GetRequiredService<IGreeterService>();
    greeter.Greet("World");
}

Console.WriteLine("Console app finished");

// ========== 2. BACKGROUND SERVICE / WORKER SERVICE ==========
// Program.cs for worker service
var builder = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<MyBackgroundWorker>();
    });

var host2 = builder.Build();
await host2.RunAsync(); // Runs indefinitely

public class MyBackgroundWorker : BackgroundService
{
    private readonly ILogger<MyBackgroundWorker> logger;
    
    public MyBackgroundWorker(ILogger<MyBackgroundWorker> logger)
    {
        this.logger = logger;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            logger.LogInformation("Worker executing at: {time}", DateTimeOffset.Now);
            
            // Do background work
            await Task.Delay(1000, stoppingToken);
        }
    }
    
    public override async Task StartAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Worker starting");
        await base.StartAsync(cancellationToken);
    }
    
    public override async Task StopAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Worker stopping");
        await base.StopAsync(cancellationToken);
    }
}

// ========== 3. WEB APPLICATION (ASP.NET Core) ==========
// Program.cs for web app
var builder3 = WebApplication.CreateBuilder(args);

builder3.Services.AddControllers();

var app = builder3.Build();

app.UseRouting();
app.MapControllers();

await app.RunAsync();

// ========== 4. WINDOWS SERVICE ==========
// Program.cs for Windows Service
var builder4 = Host.CreateDefaultBuilder(args)
    .UseWindowsService()
    .ConfigureServices(services =>
    {
        services.AddHostedService<MyWindowsService>();
    });

var host4 = builder4.Build();
await host4.RunAsync();

public class MyWindowsService : BackgroundService
{
    private readonly ILogger<MyWindowsService> logger;
    
    public MyWindowsService(ILogger<MyWindowsService> logger)
    {
        this.logger = logger;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            logger.LogInformation("Windows Service running");
            await Task.Delay(5000, stoppingToken);
        }
    }
}

// Install as Windows Service:
// sc create MyService binPath= "C:\\path\\to\\app.exe"
// net start MyService

// ========== 5. DOCKER CONTAINER ==========
// Dockerfile
/*
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "."]
RUN dotnet restore "MyApp.csproj"
COPY . .
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM mcr.microsoft.com/dotnet/runtime:8.0
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "MyApp.dll"]
*/

// docker build -t myapp:latest .
// docker run myapp:latest

// ========== 6. CLOUD HOSTING (AZURE) ==========
// Deploy to Azure App Service
// dotnet publish -c Release -o ./publish
// Upload publish folder to Azure

// appsettings.json - read from Azure Key Vault
var builder5 = WebApplication.CreateBuilder(args);

var keyVaultUrl = new Uri(builder5.Configuration["KeyVault:Url"]);
builder5.Configuration.AddAzureKeyVault(
    keyVaultUrl,
    new DefaultAzureCredential()
);

// ========== HOSTING COMPARISON ==========
Console.WriteLine("Hosting Models Comparison:");
Console.WriteLine("Model               Lifetime      Use Case");
Console.WriteLine("Console             Finite        One-off tasks, utilities");
Console.WriteLine("Worker Service      Infinite      Background jobs, processing");
Console.WriteLine("Web App             Infinite      REST APIs, web sites");
Console.WriteLine("Windows Service     Infinite      Long-running Windows tasks");
Console.WriteLine("Docker              Container     Microservices, cloud");
Console.WriteLine("Cloud               Managed       Scalable production apps");

// ========== TYPICAL WEB APP STRUCTURE ==========
// Program.cs (entry point)
// appsettings.json (config)
// Startup.cs (optional - alternative to Program.cs)
// Controllers/ (request handlers)
// Services/ (business logic)
// Models/ (data models)
// Data/ (DbContext)
// Middleware/ (custom)

// ========== CHECKING HOSTING ENVIRONMENT ==========
var env = builder3.Environment;

if (env.IsDevelopment())
{
    // Development setup
}
else if (env.IsStaging())
{
    // Staging setup
}
else if (env.IsProduction())
{
    // Production setup
}

var customEnv = env.IsEnvironment("CustomEnv");

// Set environment variable:
// Windows: set ASPNETCORE_ENVIRONMENT=Production
// Linux: export ASPNETCORE_ENVIRONMENT=Production
// Docker: ENV ASPNETCORE_ENVIRONMENT=Production`}]},{id:"q8",question:"What is logging in .NET Core and how do you configure it?",answer:"Logging is built into .NET Core using ILogger interface. Configure in Program.cs with AddLogging(). Multiple providers: Console, Debug, EventLog, Trace, Application Insights. Log levels: Trace, Debug, Information, Warning, Error, Critical, None. Use dependency injection to inject ILogger into classes.",codeSnippets:[{language:"csharp",code:`using Microsoft.Extensions.Logging;

// ========== LOGGING SETUP IN PROGRAM.CS ==========
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLogging(config =>
{
    config.ClearProviders(); // Remove default providers
    config.AddConsole(); // Console output
    config.AddDebug(); // Debug output
    config.AddEventLog(); // Windows Event Log
    
    // Set minimum log level
    config.SetMinimumLevel(LogLevel.Information);
});

var app = builder.Build();

// Configuration via appsettings.json (preferred)
/*
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "System": "Error"
    }
  }
}
*/

// ========== USING LOGGER ==========
public class UserService
{
    private readonly ILogger<UserService> logger;
    
    public UserService(ILogger<UserService> logger)
    {
        this.logger = logger;
    }
    
    public void CreateUser(string name)
    {
        // Log levels (severity)
        logger.LogTrace("Trace: Very detailed info");
        logger.LogDebug($"Debug: Creating user: {name}");
        logger.LogInformation($"Information: User created: {name}");
        logger.LogWarning("Warning: Potential issue");
        logger.LogError(new Exception(), "Error: Something failed");
        logger.LogCritical("Critical: System failure");
    }
}

// ========== LOG LEVELS EXPLAINED ==========
Console.WriteLine("Log Levels (Severity Order):");
Console.WriteLine("1. Trace - Very detailed diagnostic info");
Console.WriteLine("2. Debug - Debug information");
Console.WriteLine("3. Information - General informational messages");
Console.WriteLine("4. Warning - Warning messages (don't fail)");
Console.WriteLine("5. Error - Error messages (operation fails)");
Console.WriteLine("6. Critical - Critical errors (system may fail)");
Console.WriteLine("7. None - No logging");

// ========== STRUCTURED LOGGING ==========
public class OrderService
{
    private readonly ILogger<OrderService> logger;
    
    public OrderService(ILogger<OrderService> logger)
    {
        this.logger = logger;
    }
    
    public void ProcessOrder(int orderId, string customerName, decimal amount)
    {
        // Log with named parameters (structured)
        logger.LogInformation(
            "Processing order {OrderId} for customer {Customer} with amount {Amount}",
            orderId,
            customerName,
            amount
        );
        
        // Structured logging is searchable and filterable
    }
}

// ========== EXCEPTION LOGGING ==========
public class PaymentService
{
    private readonly ILogger<PaymentService> logger;
    
    public PaymentService(ILogger<PaymentService> logger)
    {
        this.logger = logger;
    }
    
    public void ProcessPayment(decimal amount)
    {
        try
        {
            // Process payment
            if (amount <= 0)
                throw new InvalidOperationException("Invalid amount");
        }
        catch (Exception ex)
        {
            // Log exception with details
            logger.LogError(ex, "Payment processing failed for amount {Amount}", amount);
            throw;
        }
    }
}

// ========== LOGGING WITH SCOPE ==========
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate next;
    private readonly ILogger logger;
    
    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        this.next = next;
        this.logger = logger;
    }
    
    public async Task InvokeAsync(HttpContext context)
    {
        // Create scope with request ID
        var requestId = context.TraceIdentifier;
        
        using (logger.BeginScope(new Dictionary<string, object>
        {
            { "RequestId", requestId },
            { "User", context.User?.Identity?.Name ?? "Anonymous" }
        }))
        {
            logger.LogInformation("Request started: {Method} {Path}", 
                context.Request.Method, 
                context.Request.Path);
            
            try
            {
                await next(context);
                logger.LogInformation("Request completed: {StatusCode}", 
                    context.Response.StatusCode);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Request failed with exception");
                throw;
            }
        }
    }
}

// ========== CUSTOM LOGGER PROVIDER ==========
public class CustomLoggerProvider : ILoggerProvider
{
    public ILogger CreateLogger(string categoryName)
    {
        return new CustomLogger(categoryName);
    }
    
    public void Dispose() { }
}

public class CustomLogger : ILogger
{
    private readonly string categoryName;
    
    public CustomLogger(string categoryName)
    {
        this.categoryName = categoryName;
    }
    
    public IDisposable BeginScope<TState>(TState state) => null;
    
    public bool IsEnabled(LogLevel logLevel) => true;
    
    public void Log<TState>(
        LogLevel logLevel,
        EventId eventId,
        TState state,
        Exception exception,
        Func<TState, Exception, string> formatter)
    {
        var message = formatter(state, exception);
        File.AppendAllText("logs.txt", 
            $"[{DateTime.UtcNow:O}] [{logLevel}] {categoryName}: {message}
");
    }
}

// Register custom provider
builder.Services.AddLogging(config =>
{
    config.AddProvider(new CustomLoggerProvider());
});

// ========== THIRD-PARTY LOGGING (SERILOG) ==========
// Install: dotnet add package Serilog.AspNetCore

using Serilog;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

try
{
    Log.Information("Application starting");
    var builder2 = WebApplication.CreateBuilder(args);
    builder2.Host.UseSerilog();
    
    var app2 = builder2.Build();
    await app2.RunAsync();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    await Log.CloseAndFlushAsync();
}

// ========== BEST PRACTICES ==========
Console.WriteLine("Logging Best Practices:");
Console.WriteLine("1. Use appropriate log levels");
Console.WriteLine("2. Use structured logging with parameters");
Console.WriteLine("3. Log exceptions with context");
Console.WriteLine("4. Use scopes for correlation IDs");
Console.WriteLine("5. Don't log sensitive data");
Console.WriteLine("6. Use centralized logging (Application Insights, ELK)");
Console.WriteLine("7. Set appropriate minimum log levels per environment");
Console.WriteLine("8. Use correlation IDs for request tracing");
Console.WriteLine("9. Don't log in hot paths (performance)");
Console.WriteLine("10. Use async logging for production");`}]},{id:"q9",question:"What is a hosted service in .NET Core? How do you create background tasks?",answer:"Hosted service implements IHostedService, runs when app starts. Use BackgroundService abstract class (simpler). Methods: StartAsync (when app starts), StopAsync (when app stops). Use ExecuteAsync for the work loop. Register in DI with AddHostedService<T>(). Perfect for background jobs, timers, message consumers.",codeSnippets:[{language:"csharp",code:`using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

// ========== SIMPLE BACKGROUND SERVICE ==========
public class TimerBackgroundService : BackgroundService
{
    private readonly ILogger<TimerBackgroundService> logger;
    private Timer timer;
    
    public TimerBackgroundService(ILogger<TimerBackgroundService> logger)
    {
        this.logger = logger;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Timer service starting");
        
        timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromSeconds(10));
        
        // Keep running until cancellation requested
        await Task.Delay(Timeout.Infinite, stoppingToken);
    }
    
    private void DoWork(object state)
    {
        logger.LogInformation("Timer work executing at: {time}", DateTimeOffset.Now);
        
        // Do background work
    }
    
    public override async Task StopAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Timer service stopping");
        timer?.Dispose();
        await base.StopAsync(cancellationToken);
    }
}

// Register in Program.cs
var builder = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<TimerBackgroundService>();
    });

var host = builder.Build();
await host.RunAsync();

// ========== QUEUE PROCESSING SERVICE ==========
public class QueueProcessingService : BackgroundService
{
    private readonly ILogger<QueueProcessingService> logger;
    private readonly IServiceProvider serviceProvider;
    private readonly Channel<QueueItem> queue;
    
    public QueueProcessingService(ILogger<QueueProcessingService> logger, IServiceProvider serviceProvider)
    {
        this.logger = logger;
        this.serviceProvider = serviceProvider;
        queue = Channel.CreateUnbounded<QueueItem>();
    }
    
    public async ValueTask EnqueueAsync(QueueItem item)
    {
        await queue.Writer.WriteAsync(item);
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Queue processor starting");
        
        await foreach (var item in queue.Reader.ReadAllAsync(stoppingToken))
        {
            try
            {
                // Create scope for processing
                using var scope = serviceProvider.CreateScope();
                var processor = scope.ServiceProvider.GetRequiredService<IQueueItemProcessor>();
                
                await processor.ProcessAsync(item);
                logger.LogInformation("Processed queue item: {ItemId}", item.Id);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error processing queue item: {ItemId}", item.Id);
            }
        }
    }
}

public class QueueItem
{
    public string Id { get; set; }
    public string Data { get; set; }
}

public interface IQueueItemProcessor
{
    Task ProcessAsync(QueueItem item);
}

public class QueueItemProcessor : IQueueItemProcessor
{
    private readonly ILogger<QueueItemProcessor> logger;
    
    public QueueItemProcessor(ILogger<QueueItemProcessor> logger)
    {
        this.logger = logger;
    }
    
    public async Task ProcessAsync(QueueItem item)
    {
        logger.LogInformation("Processing item: {ItemId}", item.Id);
        await Task.Delay(100); // Simulate work
    }
}

// Register
builder.Services.AddSingleton<QueueProcessingService>();
builder.Services.AddHostedService(provider => provider.GetRequiredService<QueueProcessingService>());
builder.Services.AddScoped<IQueueItemProcessor, QueueItemProcessor>();

// ========== PERIODIC TASK SERVICE ==========
public class PeriodicTaskService : BackgroundService
{
    private readonly ILogger<PeriodicTaskService> logger;
    private readonly IServiceProvider serviceProvider;
    
    public PeriodicTaskService(ILogger<PeriodicTaskService> logger, IServiceProvider serviceProvider)
    {
        this.logger = logger;
        this.serviceProvider = serviceProvider;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Periodic task service starting");
        
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                // Calculate next execution time (e.g., next midnight)
                var now = DateTime.UtcNow;
                var nextRun = now.Date.AddDays(1); // Tomorrow midnight
                var delay = nextRun - now;
                
                await Task.Delay(delay, stoppingToken);
                
                // Execute periodic task
                using var scope = serviceProvider.CreateScope();
                var taskExecutor = scope.ServiceProvider.GetRequiredService<IPeriodicTaskExecutor>();
                
                await taskExecutor.ExecuteAsync();
                logger.LogInformation("Periodic task executed successfully");
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error executing periodic task");
            }
        }
    }
}

public interface IPeriodicTaskExecutor
{
    Task ExecuteAsync();
}

// ========== LONG-RUNNING TASK SERVICE ==========
public class DataSyncService : BackgroundService
{
    private readonly ILogger<DataSyncService> logger;
    private readonly IDataRepository repository;
    private readonly IExternalDataService externalService;
    
    public DataSyncService(ILogger<DataSyncService> logger, IDataRepository repository, IExternalDataService externalService)
    {
        this.logger = logger;
        this.repository = repository;
        this.externalService = externalService;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Data sync service starting");
        
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                // Sync data
                var externalData = await externalService.FetchDataAsync();
                await repository.UpdateAsync(externalData);
                
                logger.LogInformation("Data sync completed. Records: {Count}", externalData.Count());
                
                // Wait before next sync
                await Task.Delay(TimeSpan.FromHours(1), stoppingToken);
            }
            catch (OperationCanceledException)
            {
                logger.LogInformation("Data sync cancelled");
                break;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error during data sync");
                // Wait before retry
                await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);
            }
        }
    }
    
    public override async Task StopAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Data sync service stopping");
        await base.StopAsync(cancellationToken);
    }
}

public interface IDataRepository
{
    Task UpdateAsync(IEnumerable<dynamic> data);
}

public interface IExternalDataService
{
    Task<IEnumerable<dynamic>> FetchDataAsync();
}

// ========== BEST PRACTICES ==========
Console.WriteLine("Hosted Service Best Practices:");
Console.WriteLine("1. Always use CancellationToken for graceful shutdown");
Console.WriteLine("2. Create scopes for dependency injection");
Console.WriteLine("3. Log start and stop events");
Console.WriteLine("4. Handle exceptions gracefully");
Console.WriteLine("5. Implement backoff for retries");
Console.WriteLine("6. Use async/await for all I/O operations");
Console.WriteLine("7. Don't block in ExecuteAsync");
Console.WriteLine("8. Monitor service health");
Console.WriteLine("9. Use configuration for intervals/settings");
Console.WriteLine("10. Test services independently");`}]},{id:"q10",question:"What is an extension method in C#? How do you create and use them?",answer:"Extension method adds functionality to existing types without inheritance. Must be in static class, first parameter has 'this' keyword. Allows calling like instance method. Useful for adding helpers to built-in types. Cannot access private members. Used extensively in LINQ (Where, Select, etc.).",codeSnippets:[{language:"csharp",code:`using System;
using System.Collections.Generic;
using System.Linq;

// ========== BASIC EXTENSION METHOD ==========
public static class StringExtensions
{
    // Extension method adds method to string
    public static string Reverse(this string str)
    {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
    
    public static string ToTitleCase(this string str)
    {
        return System.Globalization.CultureInfo.CurrentCulture
            .TextInfo.ToTitleCase(str.ToLower());
    }
    
    public static bool IsPalindrome(this string str)
    {
        var cleaned = System.Text.RegularExpressions.Regex.Replace(str, "[^a-zA-Z0-9]", "").ToLower();
        return cleaned == cleaned.Reverse();
    }
    
    public static string RepeatString(this string str, int times)
    {
        return string.Concat(Enumerable.Repeat(str, times));
    }
}

// Usage
var text = "Hello World";
Console.WriteLine(text.Reverse()); // dlroW olleH
Console.WriteLine(text.ToTitleCase()); // Hello World
Console.WriteLine("racecar".IsPalindrome()); // true
Console.WriteLine("x".RepeatString(5)); // xxxxx

// ========== EXTENSION ON COLLECTIONS ==========
public static class ListExtensions
{
    public static List<T> AddRange<T>(this List<T> list, params T[] items)
    {
        foreach (var item in items)
        {
            list.Add(item);
        }
        return list; // Fluent
    }
    
    public static bool IsNullOrEmpty<T>(this IEnumerable<T> source)
    {
        return source == null || !source.Any();
    }
    
    public static T GetRandom<T>(this IList<T> list)
    {
        var random = new Random();
        return list[random.Next(list.Count)];
    }
    
    public static List<T> Shuffle<T>(this List<T> list)
    {
        var random = new Random();
        for (int i = list.Count - 1; i > 0; i--)
        {
            int randomIndex = random.Next(i + 1);
            // Swap
            (list[i], list[randomIndex]) = (list[randomIndex], list[i]);
        }
        return list;
    }
    
    public static void ForEach<T>(this IEnumerable<T> source, Action<T> action)
    {
        foreach (var item in source)
        {
            action(item);
        }
    }
}

// Usage
var numbers = new List<int> { 1, 2, 3 };
numbers.AddRange(4, 5, 6);
Console.WriteLine(numbers.Count); // 6

var random = numbers.GetRandom();

numbers.Shuffle();

var names = new List<string> { "Alice", "Bob", "Charlie" };
names.ForEach(n => Console.WriteLine(n)); // Print each

// ========== EXTENSION ON NUMERIC TYPES ==========
public static class NumericExtensions
{
    public static bool IsEven(this int number)
    {
        return number % 2 == 0;
    }
    
    public static bool IsOdd(this int number)
    {
        return number % 2 != 0;
    }
    
    public static int Square(this int number)
    {
        return number * number;
    }
    
    public static bool IsPrime(this int number)
    {
        if (number < 2) return false;
        for (int i = 2; i <= Math.Sqrt(number); i++)
        {
            if (number % i == 0) return false;
        }
        return true;
    }
    
    public static TimeSpan Days(this int days)
    {
        return TimeSpan.FromDays(days);
    }
}

// Usage
Console.WriteLine(5.IsEven()); // false
Console.WriteLine(5.IsOdd()); // true
Console.WriteLine(5.Square()); // 25
Console.WriteLine(17.IsPrime()); // true

var futureDate = DateTime.Now.Add(7.Days());

// ========== EXTENSION ON DATETIME ==========
public static class DateTimeExtensions
{
    public static bool IsWeekend(this DateTime date)
    {
        return date.DayOfWeek == DayOfWeek.Saturday || 
               date.DayOfWeek == DayOfWeek.Sunday;
    }
    
    public static DateTime StartOfDay(this DateTime date)
    {
        return date.Date;
    }
    
    public static DateTime EndOfDay(this DateTime date)
    {
        return date.Date.AddDays(1).AddTicks(-1);
    }
    
    public static int GetAge(this DateTime birthDate)
    {
        var today = DateTime.Today;
        var age = today.Year - birthDate.Year;
        if (birthDate.Date > today.AddYears(-age)) age--;
        return age;
    }
}

// Usage
var today = DateTime.Now;
Console.WriteLine(today.IsWeekend()); // Depends on day
Console.WriteLine(today.StartOfDay()); // Today at 00:00:00
Console.WriteLine(today.EndOfDay()); // Today at 23:59:59

var birthDate = new DateTime(1990, 5, 15);
Console.WriteLine(birthDate.GetAge()); // Age in years

// ========== CHAINABLE (FLUENT) EXTENSIONS ==========
public static class FluentExtensions
{
    public static T Also<T>(this T obj, Action<T> action)
    {
        action(obj);
        return obj;
    }
    
    public static TResult Apply<T, TResult>(this T obj, Func<T, TResult> func)
    {
        return func(obj);
    }
}

// Usage
var result = new List<int> { 1, 2, 3 }
    .Also(list => Console.WriteLine($"Count: {list.Count}"))
    .Also(list => list.Add(4))
    .Apply(list => list.Sum()); // 10

// ========== LINQ EXTENSION METHODS (BUILT-IN EXAMPLES) ==========
// These are all extension methods on IEnumerable<T>
var nums = new[] { 1, 2, 3, 4, 5 };

var evens = nums.Where(n => n.IsEven()); // Extension
var squares = nums.Select(n => n.Square()); // Extension
var sum = nums.Sum(); // Extension
var count = nums.Count(); // Extension
var first = nums.First(); // Extension
var ordered = nums.OrderBy(n => n); // Extension

// ========== LIMITATIONS ==========
// Cannot:
// - Override existing methods
// - Access private/protected members
// - Be used for operators
// - Replace instance methods
// - Work on static classes

// Can:
// - Add to sealed classes
// - Add to built-in types
// - Be used in LINQ
// - Improve fluency
// - Reduce code duplication

// ========== BEST PRACTICES ==========
Console.WriteLine("Extension Method Best Practices:");
Console.WriteLine("1. Put in static class with Related Name + Extensions");
Console.WriteLine("2. Use only for true extensions, not replacements");
Console.WriteLine("3. Keep logic simple");
Console.WriteLine("4. Avoid conflicting with existing methods");
Console.WriteLine("5. Document with XML comments");
Console.WriteLine("6. Use namespacing to avoid pollution");
Console.WriteLine("7. Don't abuse - keep code readable");
Console.WriteLine("8. Consider performance for frequently called methods");`}]}]},Ug={id:"csharp-advanced",name:"C# Advanced",topics:[Rg,Wg,Og,Ig,xg,kg,Ng,Mg]},qg={id:"azure-app-services",name:"App Services",questions:[{id:"q1",question:"What is Azure App Service and what types of applications can you host?",answer:"Azure App Service is a fully managed platform for building and hosting web apps, mobile backends, and RESTful APIs. Types: Web Apps (.NET, Node, Python, Java, PHP), Mobile Apps, API Apps, Function Apps. Provides auto-scaling, built-in CI/CD, SSL/TLS, monitoring. Pricing tiers: Free, Shared, Basic, Standard, Premium, Isolated.",codeSnippets:[{language:"csharp",code:`// Azure App Service - Deployment from Program.cs
using Microsoft.AspNetCore.Builder;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var builder = WebApplication.CreateBuilder(args);

// App Service environment detection
var isAppService = !string.IsNullOrEmpty(Environment.GetEnvironmentVariable("WEBSITE_INSTANCE_ID"));

if (isAppService)
{
    Console.WriteLine("Running in Azure App Service");
    
    // Use Key Vault for secrets in production
    var keyVaultUrl = new Uri(builder.Configuration["KeyVault:Url"]);
    builder.Configuration.AddAzureKeyVault(
        keyVaultUrl,
        new DefaultAzureCredential()
    );
}

builder.Services.AddControllers();
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();
app.UseRouting();
app.MapControllers();

await app.RunAsync();

// App Service Tiers Comparison
Console.WriteLine("App Service Pricing Tiers:");
Console.WriteLine("Tier         Auto-scale  SSL  Slots  Cost");
Console.WriteLine("Free         No          No   No     $0");
Console.WriteLine("Shared       No          No   No     ~$10");
Console.WriteLine("Basic        No          Yes  No     ~$55");
Console.WriteLine("Standard     Yes         Yes  Yes    ~$100");
Console.WriteLine("Premium      Yes         Yes  Yes    ~$300");
Console.WriteLine("Isolated     Yes         Yes  Yes    ~$600+");

// Health Check - App Service expects 200 response
app.MapGet("/health", () => Results.Ok("Healthy"));
app.MapGet("/health/live", () => Results.Ok("Live"));
app.MapGet("/health/ready", () => Results.Ok("Ready"));

// App Service runs your code with these benefits:
// - Auto-scaling based on metrics
// - Built-in authentication (Easy Auth)
// - Deployment slots (staging)
// - Traffic routing
// - Monitoring & diagnostics
// - SSL/TLS certificates
// - Custom domains
// - Backups and restore`}]},{id:"q2",question:"What are deployment slots in Azure App Service and how do you use them?",answer:"Deployment slots are separate instances of your app for staging/testing before production. Each slot has unique URL. Common setup: Production + Staging. Test in staging slot, then swap to production (zero downtime). Slots share settings and have separate DNS. Perfect for testing updates, A/B testing, canary releases.",codeSnippets:[{language:"csharp",code:`// Deployment Slots Strategy
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Get slot name
var slotName = Environment.GetEnvironmentVariable("WEBSITE_DEPLOYMENT_ID") ?? "Production";

// Slot-specific logging
Console.WriteLine($"Deployed to slot: {slotName}");

// Return slot info in response
app.MapGet("/api/info", () => new
{
    Slot = slotName,
    Environment = builder.Environment.EnvironmentName,
    Version = "1.0.0",
    Timestamp = DateTime.UtcNow
});

// Warm up logic for slot swap
app.MapPost("/api/warmup", async (HttpContext context) =>
{
    Console.WriteLine("Warmup request received");
    
    // Initialize resources
    await Task.Delay(1000); // Simulate init
    
    return Results.Ok("Warmed up");
});

// Slot swap workflow:
// 1. Create Staging slot (copy of Production)
// 2. Deploy new version to Staging
// 3. Test in Staging at: myapp-staging.azurewebsites.net
// 4. Run warmup on Staging slot
// 5. Swap Staging ↔ Production (instant!)
// 6. If issues, swap back (instant rollback!)

// Slot swap is instant with zero downtime
// Before swap:
//   Production: v1.0 (myapp.azurewebsites.net)
//   Staging: v2.0 (myapp-staging.azurewebsites.net)

// After swap:
//   Production: v2.0 (myapp.azurewebsites.net)
//   Staging: v1.0 (myapp-staging.azurewebsites.net)

// Sticky slots configuration
var stickySettings = new Dictionary<string, bool>
{
    { "ASPNETCORE_ENVIRONMENT", true }, // Don't swap
    { "ConnectionStrings:Default", true }, // Don't swap
    { "API_KEY", false } // Do swap
};

Console.WriteLine("Sticky Settings (don't swap during slot swap):");
foreach (var setting in stickySettings.Where(x => x.Value))
{
    Console.WriteLine($"  - {setting.Key}");
}

// Azure CLI commands for slots:
// az webapp deployment slot create --resource-group myRG --name myApp --slot staging
// az webapp deployment slot swap --resource-group myRG --name myApp --slot staging
// az webapp deployment slot list --resource-group myRG --name myApp

// Benefits of slots:
Console.WriteLine("Deployment Slots Benefits:");
Console.WriteLine("✓ Zero-downtime deployments");
Console.WriteLine("✓ Easy rollback");
Console.WriteLine("✓ Test before production");
Console.WriteLine("✓ A/B testing");
Console.WriteLine("✓ Warmup before swap");
Console.WriteLine("✓ Canary deployments");
Console.WriteLine("✓ Blue-Green deployments");`}]},{id:"q3",question:"What is Azure App Service Plan and how does scaling work?",answer:"App Service Plan defines resources for one or more apps. Contains: compute size (CPU, RAM), instance count, pricing tier. Auto-scale rules: scale out (add instances) or scale up (bigger VM). Metrics: CPU %, memory, HTTP queue, disk I/O. Scale set: min/max instances, rules when to scale.",codeSnippets:[{language:"csharp",code:`// Auto-Scaling in Azure App Service

// Azure provides these scaling options:
// 1. Scale UP (Vertical) - Bigger machine
// 2. Scale OUT (Horizontal) - More instances

Console.WriteLine("Azure App Service Scaling:");
Console.WriteLine("Scale UP (Vertical):");
Console.WriteLine("  Free → Shared → Basic → Standard → Premium → Isolated");
Console.WriteLine("  Same number of instances, but bigger resources");
Console.WriteLine("");
Console.WriteLine("Scale OUT (Horizontal):");
Console.WriteLine("  Add more instances of same size");
Console.WriteLine("  Requires Standard tier or higher");

// Auto-Scale Rules Example
/*
Rule 1: Scale OUT when CPU > 70% for 5 minutes
  - Add 1 instance
  - Max instances: 10

Rule 2: Scale IN when CPU < 30% for 10 minutes
  - Remove 1 instance
  - Min instances: 1
*/

// Application code benefits from scaling:
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Get instance ID (each instance has unique ID)
var instanceId = Environment.MachineName;

app.MapGet("/api/instance", () => new
{
    InstanceId = instanceId,
    Cores = Environment.ProcessorCount,
    WorkingMemory = GC.GetTotalMemory(false) / 1024 / 1024 // MB
});

// Multiple instances require:
app.UseSession(); // Distributed session (use cache)

// Connect to Distributed Cache (Redis)
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration.GetConnectionString("Redis");
});

// Store session in Redis (not in-memory)
app.UseSession();

// Each instance can handle requests independently
// Load balancer distributes requests across instances

app.MapPost("/api/process", async (HttpContext context) =>
{
    var sessionId = context.Session.Id;
    context.Session.SetString("ProcessedBy", Environment.MachineName);
    
    return Results.Ok(new
    {
        Message = "Processing...",
        SessionId = sessionId,
        Instance = Environment.MachineName
    });
});

// Sticky Sessions (Session Affinity)
// Default: Requests from same client go to same instance (via ARR cookie)
// This is usually NOT recommended for scalability
// Better: Use distributed cache (Redis, Cosmos DB)

Console.WriteLine("Scaling Best Practices:");
Console.WriteLine("1. Use distributed session/cache (Redis)");
Console.WriteLine("2. Make apps stateless");
Console.WriteLine("3. Store state in database or cache");
Console.WriteLine("4. Monitor scale metrics");
Console.WriteLine("5. Test with multiple instances");
Console.WriteLine("6. Set up auto-scale rules");
Console.WriteLine("7. Configure health checks");
Console.WriteLine("8. Implement graceful shutdown");

// Health checks for auto-scaling
app.MapGet("/health", () =>
{
    var healthy = new
    {
        Status = "Healthy",
        Uptime = Environment.TickCount64,
        Connections = GC.GetTotalMemory(false)
    };
    
    return Results.Ok(healthy);
});

// Common scaling patterns
Console.WriteLine("Scaling Patterns:");
Console.WriteLine("1. Predictable: Scale on schedule");
Console.WriteLine("2. Metric-based: Scale on CPU/Memory");
Console.WriteLine("3. Queue-based: Scale on queue length");
Console.WriteLine("4. Custom: Scale on application metrics");`}]},{id:"q4",question:"How do you configure continuous deployment/continuous integration (CI/CD) with Azure App Service?",answer:"Azure App Service integrates with GitHub, Azure Repos, Bitbucket, OneDrive. Supported build providers: Azure Pipelines, GitHub Actions. On code push: build → test → deploy automatically. For advanced: use Azure Pipelines with custom steps. Can deploy Docker containers automatically on build.",codeSnippets:[{language:"csharp",code:`// Azure App Service - CI/CD Configuration

// 1. GitHub Actions Workflow
/*
.github/workflows/azure-deploy.yml

name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0'
      
      - name: Build
        run: dotnet build --configuration Release
      
      - name: Test
        run: dotnet test
      
      - name: Publish
        run: dotnet publish -c Release -o ./publish
      
      - name: Deploy to Azure App Service
        uses: azure/webapps-deploy@v2
        with:
          app-name: myapp
          publish-profile: \${{ secrets.AZURE_PUBLISH_PROFILE }}
          package: ./publish
*/

// 2. Azure Pipelines (azure-pipelines.yml)
/*
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: UseDotNet@2
    inputs:
      version: '8.0'
  
  - task: DotNetCoreCLI@2
    inputs:
      command: 'build'
      arguments: '--configuration Release'
  
  - task: DotNetCoreCLI@2
    inputs:
      command: 'test'
  
  - task: DotNetCoreCLI@2
    inputs:
      command: 'publish'
      publishWebProjects: true
      arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)'
  
  - task: PublishBuildArtifacts@1
    inputs:
      PathtoPublish: '$(Build.ArtifactStagingDirectory)'
  
  - task: AzureWebApp@1
    inputs:
      azureSubscription: 'Azure Service Connection'
      appType: 'webAppLinux'
      appName: 'myapp'
      package: '$(Build.ArtifactStagingDirectory)'
*/

// 3. Local deployment using Azure CLI
Console.WriteLine("Azure CLI Deployment Commands:");
Console.WriteLine("# Build the application");
Console.WriteLine("dotnet build --configuration Release");
Console.WriteLine("");
Console.WriteLine("# Publish to folder");
Console.WriteLine("dotnet publish -c Release -o ./publish");
Console.WriteLine("");
Console.WriteLine("# Deploy to App Service");
Console.WriteLine("az webapp deployment source config-zip \\");
Console.WriteLine("  --resource-group myResourceGroup \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --src publish.zip");
Console.WriteLine("");
Console.WriteLine("# Or deploy from folder directly");
Console.WriteLine("az webapp up --name myapp --resource-group myRG");

// 4. Continuous deployment settings
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Deployment info endpoint
app.MapGet("/api/deployment-info", () =>
{
    var info = new
    {
        DeploymentTime = System.IO.File.GetLastWriteTimeUtc(typeof(Program).Assembly.Location),
        Version = typeof(Program).Assembly.GetName().Version.ToString(),
        EnvironmentName = builder.Environment.EnvironmentName,
        ContentRootPath = builder.Environment.ContentRootPath
    };
    
    return Results.Ok(info);
});

// Health check for CI/CD
app.MapGet("/health/startup", () => Results.Ok("Ready"));

Console.WriteLine("CI/CD Pipeline Stages:");
Console.WriteLine("1. Trigger: Code push to main branch");
Console.WriteLine("2. Build: Compile code");
Console.WriteLine("3. Test: Run unit tests");
Console.WriteLine("4. Package: Create deployment package");
Console.WriteLine("5. Deploy: Deploy to App Service");
Console.WriteLine("6. Verify: Health checks pass");

// Pre-deployment checks
Console.WriteLine("Pre-Deployment Checks:");
Console.WriteLine("✓ All tests pass");
Console.WriteLine("✓ Code quality gates pass");
Console.WriteLine("✓ Build succeeds");
Console.WriteLine("✓ Deployment slot created");
Console.WriteLine("✓ Health checks configured");

// Post-deployment verification
Console.WriteLine("Post-Deployment Verification:");
Console.WriteLine("✓ Application starts");
Console.WriteLine("✓ Database migrations succeed");
Console.WriteLine("✓ Health endpoint responds");
Console.WriteLine("✓ Slot swap successful");
Console.WriteLine("✓ Monitoring shows no errors");`}]}]},Gg={id:"azure-containers",name:"Container Deployment",questions:[{id:"q1",question:"What is Docker and how do you containerize a .NET application?",answer:"Docker packages application with dependencies in isolated container. Dockerfile defines build steps. Container runs same everywhere (development, testing, production). Base images: mcr.microsoft.com/dotnet/sdk (build), mcr.microsoft.com/dotnet/runtime (run). Multi-stage builds: build in SDK, run in runtime for smaller image.",codeSnippets:[{language:"csharp",code:`// Dockerfile for .NET Application

/*
# Multi-stage build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project file
COPY ["MyApp.csproj", "."]

# Restore dependencies
RUN dotnet restore "MyApp.csproj"

# Copy source code
COPY . .

# Build application
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

# Publish
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS publish
WORKDIR /src
COPY --from=build /src .
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=publish /app/publish .

EXPOSE 80
ENTRYPOINT ["dotnet", "MyApp.dll"]
*/

// Dockerfile is text file with build instructions
Console.WriteLine("Dockerfile Instructions:");
Console.WriteLine("FROM - Base image");
Console.WriteLine("WORKDIR - Working directory");
Console.WriteLine("COPY - Copy files to container");
Console.WriteLine("RUN - Execute command during build");
Console.WriteLine("ENV - Environment variable");
Console.WriteLine("EXPOSE - Port to expose");
Console.WriteLine("ENTRYPOINT - Command to run");
Console.WriteLine("CMD - Default parameters");

// Build and run Docker container
Console.WriteLine("Docker Commands:");
Console.WriteLine("# Build image");
Console.WriteLine("docker build -t myapp:latest .");
Console.WriteLine("");
Console.WriteLine("# Run container");
Console.WriteLine("docker run -p 80:80 myapp:latest");
Console.WriteLine("");
Console.WriteLine("# View running containers");
Console.WriteLine("docker ps");
Console.WriteLine("");
Console.WriteLine("# Stop container");
Console.WriteLine("docker stop <container-id>");`}]},{id:"q2",question:"What is Azure Container Registry (ACR) and Azure Container Instances (ACI)?",answer:"Azure Container Registry stores Docker images privately. Push/pull images to ACR. Azure Container Instances runs containers serverless (no VM management). Pay per second. Good for dev/test, batch jobs, event-driven tasks. For production: use AKS (Kubernetes) for orchestration.",codeSnippets:[{language:"csharp",code:`// Azure Container Registry (ACR) & Container Instances (ACI)

Console.WriteLine("ACR - Azure Container Registry");
Console.WriteLine("✓ Private Docker image storage");
Console.WriteLine("✓ Geo-replication");
Console.WriteLine("✓ Webhook triggers");
Console.WriteLine("✓ Built-in authentication");

// ACR CLI commands
Console.WriteLine("ACR Commands:");
Console.WriteLine("# Login to ACR");
Console.WriteLine("az acr login --name myregistry");
Console.WriteLine("");
Console.WriteLine("# Tag image");
Console.WriteLine("docker tag myapp:latest myregistry.azurecr.io/myapp:latest");
Console.WriteLine("");
Console.WriteLine("# Push to ACR");
Console.WriteLine("docker push myregistry.azurecr.io/myapp:latest");
Console.WriteLine("");
Console.WriteLine("# List images in ACR");
Console.WriteLine("az acr repository list --name myregistry");

Console.WriteLine("");
Console.WriteLine("ACI - Azure Container Instances");
Console.WriteLine("✓ Serverless container execution");
Console.WriteLine("✓ Pay per second");
Console.WriteLine("✓ Fast startup");
Console.WriteLine("✓ No container orchestration needed");

// Deploy to ACI
Console.WriteLine("Deploy to ACI:");
Console.WriteLine("az container create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name mycontainer \\");
Console.WriteLine("  --image myregistry.azurecr.io/myapp:latest \\");
Console.WriteLine("  --cpu 1 --memory 1 \\");
Console.WriteLine("  --port 80 \\");
Console.WriteLine("  --environment-variables ENV=Production API_KEY=secret");

// Environment variables for container
var containerEnvVars = new Dictionary<string, string>
{
    { "ASPNETCORE_ENVIRONMENT", "Production" },
    { "ConnectionStrings:Default", "Server=...;Database=..." },
    { "Logging:LogLevel:Default", "Information" }
};

Console.WriteLine("ACI Pricing:");
Console.WriteLine("- 1 CPU core: ~$0.0000145/second (~$40/month)");
Console.WriteLine("- 4 CPU cores: ~$0.000116/second (~$320/month)");
Console.WriteLine("- Pay only when running");`}]},{id:"q3",question:"What is Azure Kubernetes Service (AKS) and when should you use it?",answer:"Azure Kubernetes Service is managed Kubernetes cluster for container orchestration. Automatically scales pods, manages updates, health checks. Use when: many containers, complex deployments, auto-scaling needed, multi-environment. Higher complexity than ACI. Includes monitoring, RBAC, networking policies.",codeSnippets:[{language:"csharp",code:`// Azure Kubernetes Service (AKS)

Console.WriteLine("AKS - Azure Kubernetes Service");
Console.WriteLine("✓ Managed Kubernetes");
Console.WriteLine("✓ Auto-scaling");
Console.WriteLine("✓ Health management");
Console.WriteLine("✓ Rolling updates");
Console.WriteLine("✓ RBAC");
Console.WriteLine("✓ Monitoring integration");

// AKS Kubernetes manifest (deployment.yaml)
/*
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myregistry.azurecr.io/myapp:latest
        ports:
        - containerPort: 80
        env:
        - name: ASPNETCORE_ENVIRONMENT
          value: "Production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 80
          initialDelaySeconds: 10
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: myapp
*/

// Create AKS cluster
Console.WriteLine("AKS Cluster Creation:");
Console.WriteLine("az aks create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myCluster \\");
Console.WriteLine("  --node-count 3 \\");
Console.WriteLine("  --vm-set-type VirtualMachineScaleSets \\");
Console.WriteLine("  --enable-managed-identity");

// Deploy to AKS
Console.WriteLine("Deploy to AKS:");
Console.WriteLine("# Get cluster credentials");
Console.WriteLine("az aks get-credentials --resource-group myRG --name myCluster");
Console.WriteLine("");
Console.WriteLine("# Deploy manifest");
Console.WriteLine("kubectl apply -f deployment.yaml");
Console.WriteLine("");
Console.WriteLine("# Check deployment");
Console.WriteLine("kubectl get deployments");
Console.WriteLine("kubectl get pods");
Console.WriteLine("kubectl get svc");

// Auto-scaling in Kubernetes
/*
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
*/

Console.WriteLine("Kubernetes Concepts:");
Console.WriteLine("Pod - Smallest unit, wraps container");
Console.WriteLine("Deployment - Manages pods");
Console.WriteLine("Service - Exposes pods");
Console.WriteLine("Namespace - Logical partition");
Console.WriteLine("PersistentVolume - Storage");
Console.WriteLine("ConfigMap - Configuration");
Console.WriteLine("Secret - Sensitive data");

Console.WriteLine("When to use AKS:");
Console.WriteLine("✓ Large-scale container deployments");
Console.WriteLine("✓ Need complex orchestration");
Console.WriteLine("✓ Microservices architecture");
Console.WriteLine("✓ Multi-cloud or hybrid");
Console.WriteLine("✓ Need RBAC and security policies");`}]},{id:"q4",question:"What is Azure App Service for Containers and how do you deploy a Docker image?",answer:"App Service for Containers runs Docker containers on App Service (with same scaling/deployment benefits). Simpler than AKS. Deploy from: Docker Hub, ACR, or private registry. Single container or docker-compose. Faster startup than traditional App Service.",codeSnippets:[{language:"csharp",code:`// Azure App Service for Containers

Console.WriteLine("App Service for Containers");
Console.WriteLine("✓ Single container or docker-compose");
Console.WriteLine("✓ App Service scaling");
Console.WriteLine("✓ Deployment slots");
Console.WriteLine("✓ Auto-scaling");
Console.WriteLine("✓ Easier than AKS for simple deployments");

// Deploy from ACR
Console.WriteLine("Deploy from Azure Container Registry:");
Console.WriteLine("az webapp create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --plan myPlan \\");
Console.WriteLine("  --name mycontainerapp \\");
Console.WriteLine("  --deployment-container-image-name myregistry.azurecr.io/myapp:latest");

// Docker Compose for multiple containers
/*
version: '3.8'
services:
  web:
    image: myregistry.azurecr.io/myapp:latest
    ports:
      - "80:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ConnectionStrings:Default=Server=db;Database=mydb;
    depends_on:
      - db
  
  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=StrongPassword123!
    ports:
      - "1433:1433"
*/

// Deploy docker-compose
Console.WriteLine("Deploy docker-compose.yml:");
Console.WriteLine("az webapp create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --plan myPlan \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --multicontainer-config-type compose \\");
Console.WriteLine("  --multicontainer-config-file docker-compose.yml");

// Update container image
Console.WriteLine("Update container image:");
Console.WriteLine("az webapp config container set \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --docker-custom-image-name myregistry.azurecr.io/myapp:v2 \\");
Console.WriteLine("  --docker-registry-server-url https://myregistry.azurecr.io \\");
Console.WriteLine("  --docker-registry-server-user <username> \\");
Console.WriteLine("  --docker-registry-server-password <password>");

// Webhook for auto-update on ACR push
Console.WriteLine("Webhook triggers automatic deployment on image push");`}]}]},Pg={id:"azure-service-bus",name:"Service Bus & Functions",questions:[{id:"q1",question:"What is Azure Service Bus and what are its main components?",answer:"Azure Service Bus is enterprise messaging service (asynchronous communication). Components: Queues (one-to-one), Topics (one-to-many with subscriptions), Relay (hybrid connections). Features: message sessions, dead-letter queues, duplicate detection, message TTL. Use for decoupling applications, ordering guarantees, delayed processing.",codeSnippets:[{language:"csharp",code:`using Azure.Messaging.ServiceBus;

// Azure Service Bus - Queues and Topics

// Queue: One sender, one receiver (FIFO)
var queueClient = new ServiceBusClient("connection-string").CreateSender("myqueue");

// Send message to queue
var message = new ServiceBusMessage("Hello, Service Bus!")
{
    MessageId = Guid.NewGuid().ToString(),
    CorrelationId = "order-123",
    Subject = "OrderProcessing",
    TimeToLive = TimeSpan.FromHours(1)
};

await queueClient.SendMessageAsync(message);

// Receive from queue
var receiver = new ServiceBusClient("connection-string").CreateReceiver("myqueue");
var receivedMessage = await receiver.ReceiveMessageAsync();

if (receivedMessage != null)
{
    Console.WriteLine(receivedMessage.Body.ToString());
    await receiver.CompleteMessageAsync(receivedMessage); // Acknowledge
}

// Topic: One sender, multiple receivers (Publish-Subscribe)
var topicClient = new ServiceBusClient("connection-string").CreateSender("orders");

var topicMessage = new ServiceBusMessage("Order #123")
{
    Subject = "NewOrder",
    ContentType = "application/json"
};

await topicClient.SendMessageAsync(topicMessage);

// Subscribe to topic
var subscriptionClient = new ServiceBusClient("connection-string")
    .CreateReceiver("orders", "email-subscription");

var subscriptionMessage = await subscriptionClient.ReceiveMessageAsync();
if (subscriptionMessage != null)
{
    Console.WriteLine($"Email subscriber received: {subscriptionMessage.Body}");
    await subscriptionClient.CompleteMessageAsync(subscriptionMessage);
}

// Dead-Letter Queue: Messages that can't be processed
var deadLetterReceiver = new ServiceBusClient("connection-string")
    .CreateReceiver("myqueue", new ServiceBusReceiverOptions 
    { 
        SubQueue = SubQueue.DeadLetter 
    });

var dlMessage = await deadLetterReceiver.ReceiveMessageAsync();

Console.WriteLine("Service Bus Components:");
Console.WriteLine("Queue:");
Console.WriteLine("  - FIFO order");
Console.WriteLine("  - One receiver (at a time)");
Console.WriteLine("  - At-least-once delivery");
Console.WriteLine("");
Console.WriteLine("Topic with Subscriptions:");
Console.WriteLine("  - Publish-Subscribe pattern");
Console.WriteLine("  - Multiple subscribers");
Console.WriteLine("  - Filter rules");
Console.WriteLine("");
Console.WriteLine("Dead-Letter Queue:");
Console.WriteLine("  - Messages that failed processing");
Console.WriteLine("  - Retry logic can be applied");`}]},{id:"q2",question:"What is Azure Functions and how do you create serverless functions?",answer:"Azure Functions runs code without managing infrastructure. Pay only for execution time. Triggered by: HTTP, Timer, Queue, Blob, Event Hub, Service Bus, etc. Languages: C#, Python, Node.js, Java. Hosting: Consumption plan (pay-per-use), App Service plan, Elastic Premium. Bindings simplify code (Input/Output).",codeSnippets:[{language:"csharp",code:`using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

// HTTP Trigger Function
[Function("HttpTriggerFunction")]
public static HttpResponseData HttpTrigger(
    [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "hello")] 
    HttpRequestData req,
    FunctionContext context)
{
    var logger = context.GetLogger("HttpTriggerFunction");
    logger.LogInformation("C# HTTP trigger function processed a request.");
    
    var response = req.CreateResponse(System.Net.HttpStatusCode.OK);
    response.Headers.Add("Content-Type", "text/plain; charset=utf-8");
    response.WriteString("Hello from Azure Functions!");
    
    return response;
}

// Queue Trigger Function
[Function("QueueTriggerFunction")]
public static void QueueTrigger(
    [QueueTrigger("myqueue")] string myQueueItem,
    FunctionContext context)
{
    var logger = context.GetLogger("QueueTriggerFunction");
    logger.LogInformation($"Queue message received: {myQueueItem}");
    
    // Process queue message
}

// Timer Trigger Function
[Function("TimerTriggerFunction")]
public static void TimerTrigger(
    [TimerTrigger("0 */5 * * * *")] TimerInfo myTimer, // Every 5 minutes
    FunctionContext context)
{
    var logger = context.GetLogger("TimerTriggerFunction");
    logger.LogInformation($"Timer triggered at: {DateTime.Now}");
}

// Service Bus Trigger
[Function("ServiceBusTriggerFunction")]
public static void ServiceBusTrigger(
    [ServiceBusTrigger("myqueue", Connection = "ServiceBusConnection")] 
    string sbMessage,
    FunctionContext context)
{
    var logger = context.GetLogger("ServiceBusTriggerFunction");
    logger.LogInformation($"Service Bus message: {sbMessage}");
}

// Blob Trigger
[Function("BlobTriggerFunction")]
public static void BlobTrigger(
    [BlobTrigger("mycontainer/{name}")] Stream myBlob,
    string name,
    FunctionContext context)
{
    var logger = context.GetLogger("BlobTriggerFunction");
    logger.LogInformation($"Blob processed: {name}, Size: {myBlob.Length}");
}

// Output Binding: Write to Blob
[Function("WriteToBlob")]
public static void WriteToBlob(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [BlobOutput("mycontainer/{id}.txt")] IAsyncCollector<string> outputBlob,
    FunctionContext context)
{
    outputBlob.AddAsync("File content here");
}

// Output Binding: Write to Queue
[Function("WriteToQueue")]
public static async Task WriteToQueue(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [QueueOutput("myqueue")] IAsyncCollector<string> outputQueue)
{
    await outputQueue.AddAsync("Message to queue");
}

// function.json configuration (for isolated worker)
/*
{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "maxTelemetryItemsPerSecond": 20
      }
    }
  },
  "functionTimeout": "00:05:00"
}
*/

Console.WriteLine("Azure Functions Triggers:");
Console.WriteLine("HTTP - REST API");
Console.WriteLine("Timer - Scheduled");
Console.WriteLine("Queue - Azure Storage Queue");
Console.WriteLine("Service Bus - Azure Service Bus");
Console.WriteLine("Blob - Azure Blob Storage");
Console.WriteLine("Event Hub - Event streaming");
Console.WriteLine("Cosmos DB - Database change");
Console.WriteLine("Event Grid - Event routing");

Console.WriteLine("Function Bindings:");
Console.WriteLine("Input Binding - Read data");
Console.WriteLine("Output Binding - Write data");
Console.WriteLine("Trigger - Start execution");

Console.WriteLine("Hosting Plans:");
Console.WriteLine("Consumption - Pay per execution");
Console.WriteLine("App Service - Share App Service Plan");
Console.WriteLine("Elastic Premium - Dedicated resources, auto-scale");
Console.WriteLine("Dedicated - Custom orchestration");`}]},{id:"q3",question:"How do you integrate Service Bus with Azure Functions?",answer:"Use ServiceBusTrigger to automatically process messages. Set Connection string in local.settings.json (local) or Application Settings (cloud). Each message triggers function execution. Can batch messages. Supports dead-letter handling. Perfect for event-driven architecture and asynchronous processing.",codeSnippets:[{language:"csharp",code:`using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Azure.Messaging.ServiceBus;

// Service Bus + Functions Integration

// Single message processing
[Function("ProcessServiceBusMessage")]
public static async Task ProcessMessage(
    [ServiceBusTrigger("orders", "email-subscription", Connection = "ServiceBusConnection")]
    ServiceBusReceivedMessage message,
    ServiceBusClient client,
    ILogger log)
{
    log.LogInformation($"Processing message: {message.MessageId}");
    log.LogInformation($"Body: {message.Body}");
    
    try
    {
        // Process order
        var orderData = message.Body.ToString();
        
        // Business logic
        await SendConfirmationEmail(orderData);
        
        log.LogInformation("Message processed successfully");
        
        // Message is auto-completed
    }
    catch (Exception ex)
    {
        log.LogError($"Error processing message: {ex.Message}");
        
        // Throw to move to dead-letter queue
        throw;
    }
}

// Batch processing (multiple messages at once)
[Function("ProcessBatch")]
public static async Task ProcessBatch(
    [ServiceBusTrigger("orders", Connection = "ServiceBusConnection", IsSingleDispatch = false)]
    ServiceBusReceivedMessage[] messages,
    ILogger log)
{
    log.LogInformation($"Processing batch of {messages.Length} messages");
    
    foreach (var message in messages)
    {
        try
        {
            log.LogInformation($"Message: {message.Body}");
            // Process each message
        }
        catch (Exception ex)
        {
            log.LogError($"Error: {ex.Message}");
        }
    }
}

// With custom properties
[Function("ProcessWithProperties")]
public static void ProcessWithProperties(
    [ServiceBusTrigger("orders", Connection = "ServiceBusConnection")]
    ServiceBusReceivedMessage message,
    ILogger log)
{
    log.LogInformation($"Message ID: {message.MessageId}");
    log.LogInformation($"Correlation ID: {message.CorrelationId}");
    log.LogInformation($"Subject: {message.Subject}");
    
    // Access user properties
    if (message.ApplicationProperties.TryGetValue("OrderId", out var orderId))
    {
        log.LogInformation($"Order ID: {orderId}");
    }
}

// local.settings.json (local development)
/*
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=...",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated",
    "ServiceBusConnection": "Endpoint=sb://mynamespace.servicebus.windows.net/;..."
  }
}
*/

// Sending messages to Service Bus from Function
[Function("CreateOrder")]
public static async Task CreateOrder(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [ServiceBusOutput("orders", Connection = "ServiceBusConnection")] 
    IAsyncCollector<ServiceBusMessage> output)
{
    var message = new ServiceBusMessage("New Order Data")
    {
        MessageId = Guid.NewGuid().ToString(),
        Subject = "NewOrder",
        CorrelationId = "order-123"
    };
    
    message.ApplicationProperties.Add("OrderId", "ORD-001");
    
    await output.AddAsync(message);
}

async Task SendConfirmationEmail(string orderData)
{
    // Send email
    await Task.Delay(100); // Simulate
}

Console.WriteLine("Service Bus + Functions Patterns:");
Console.WriteLine("1. Event-driven processing");
Console.WriteLine("2. Decoupled microservices");
Console.WriteLine("3. Async message handling");
Console.WriteLine("4. Auto-scaling per message");
Console.WriteLine("5. Guaranteed delivery");
Console.WriteLine("6. Dead-letter handling");`}]}]},Bg={id:"azure-cloud-deployment",name:"Cloud Deployment",questions:[{id:"q1",question:"What is Infrastructure as Code (IaC) and how do you use it in Azure?",answer:"IaC defines infrastructure in code files (Bicep, ARM templates, Terraform). Version control friendly. Repeatable deployments. Azure-specific: Bicep (recommended, simpler syntax), ARM templates (JSON). Terraform (multi-cloud). Define resources in code, deploy via CLI or pipelines.",codeSnippets:[{language:"csharp",code:`// Bicep - Infrastructure as Code for Azure

/*
// main.bicep
param location string = resourceGroup().location
param appName string = 'myapp'
param environment string = 'dev'

var resourceGroupName = '\${appName}-\${environment}-rg'
var appServicePlanName = '\${appName}-\${environment}-plan'
var appServiceName = '\${appName}-\${environment}-app'

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: 'S1'
    capacity: 1
  }
  kind: 'linux'
}

resource appService 'Microsoft.Web/sites@2021-02-01' = {
  name: appServiceName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

resource appServiceConfig 'Microsoft.Web/sites/config@2021-02-01' = {
  parent: appService
  name: 'web'
  properties: {
    alwaysOn: true
    netFrameworkVersion: 'v6.0'
    linuxFxVersion: 'DOTNETCORE|6.0'
  }
}

output appServiceId string = appService.id
output appServiceUrl string = 'https://\${appService.properties.defaultHostName}'
*/

// Parameters file (parameters.json)
/*
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "appName": {
      "value": "myapp"
    },
    "environment": {
      "value": "production"
    },
    "location": {
      "value": "eastus"
    }
  }
}
*/

// Deployment commands
Console.WriteLine("Azure CLI Deployment Commands:");
Console.WriteLine("# Validate Bicep");
Console.WriteLine("az deployment group validate \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --template-file main.bicep \\");
Console.WriteLine("  --parameters parameters.json");
Console.WriteLine("");
Console.WriteLine("# Deploy Bicep");
Console.WriteLine("az deployment group create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --template-file main.bicep \\");
Console.WriteLine("  --parameters parameters.json");
Console.WriteLine("");
Console.WriteLine("# Deploy to subscription level");
Console.WriteLine("az deployment sub create \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --template-file main.bicep");

// Terraform for Azure (multi-cloud)
/*
# main.tf
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "myapp-rg"
  location = "East US"
}

resource "azurerm_app_service_plan" "plan" {
  name                = "myapp-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Standard"
    size = "S1"
  }
}

resource "azurerm_app_service" "app" {
  name                = "myapp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.plan.id

  site_config {
    linux_fx_version = "DOTNETCORE|6.0"
  }
}
*/

Console.WriteLine("IaC Benefits:");
Console.WriteLine("✓ Version controlled");
Console.WriteLine("✓ Reproducible deployments");
Console.WriteLine("✓ Environment parity");
Console.WriteLine("✓ Easy rollback");
Console.WriteLine("✓ Team collaboration");
Console.WriteLine("✓ Cost estimation");
Console.WriteLine("✓ Disaster recovery");`}]},{id:"q2",question:"What is Azure DevOps and how do you set up CI/CD pipelines?",answer:"Azure DevOps provides tools for planning, developing, deploying, operating. Components: Boards (work tracking), Repos (Git), Pipelines (CI/CD), Test Plans, Artifacts. Pipelines: build (compile, test) → release (deploy to environments). YAML-based pipelines stored in repo.",codeSnippets:[{language:"csharp",code:`// Azure Pipelines - CI/CD Configuration

/*
# azure-pipelines.yml
trigger:
  - main
  - develop

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'
  dotnetVersion: '8.0'

stages:
- stage: Build
  jobs:
  - job: BuildJob
    steps:
    - task: UseDotNet@2
      inputs:
        packageType: 'sdk'
        version: $(dotnetVersion)
      displayName: 'Install .NET SDK'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'restore'
        projects: '**/*.csproj'
      displayName: 'Restore NuGet packages'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'build'
        arguments: '--configuration $(buildConfiguration) --no-restore'
      displayName: 'Build application'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'test'
        arguments: '--configuration $(buildConfiguration) --no-build'
      displayName: 'Run unit tests'
    
    - task: SonarCloudPrepare@1
      inputs:
        SonarCloud: 'SonarCloud'
        organization: 'myorg'
        scannerMode: 'msbuild'
        projectKey: 'myproject'
      displayName: 'Prepare SonarCloud analysis'
    
    - task: SonarCloudAnalyze@1
      displayName: 'Run SonarCloud analysis'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'publish'
        arguments: '--configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)'
      displayName: 'Publish application'
    
    - task: PublishBuildArtifacts@1
      inputs:
        PathtoPublish: '$(Build.ArtifactStagingDirectory)'
        ArtifactName: 'drop'
      displayName: 'Publish artifacts'

- stage: DeployDev
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: DeployToDev
    environment: 'dev'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Azure-Dev'
              appType: 'webAppLinux'
              appName: 'myapp-dev'
              package: '$(Pipeline.Workspace)/drop'
            displayName: 'Deploy to Dev App Service'

- stage: DeployProd
  dependsOn: Build
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  jobs:
  - deployment: DeployToProd
    environment: 'production'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Azure-Prod'
              appType: 'webAppLinux'
              appName: 'myapp-prod'
              package: '$(Pipeline.Workspace)/drop'
            displayName: 'Deploy to Prod App Service'
*/

// Azure DevOps Components
Console.WriteLine("Azure DevOps:");
Console.WriteLine("Boards - Work item tracking (Agile, Scrum)");
Console.WriteLine("Repos - Git repository (or TFVC)");
Console.WriteLine("Pipelines - CI/CD automation");
Console.WriteLine("Test Plans - Manual test execution");
Console.WriteLine("Artifacts - NuGet, Maven, npm packages");

Console.WriteLine("Pipeline Stages:");
Console.WriteLine("1. Trigger - On code push, PR, schedule");
Console.WriteLine("2. Build - Compile, test, analyze");
Console.WriteLine("3. Deploy Dev - Deploy to development");
Console.WriteLine("4. Deploy Staging - Deploy to staging");
Console.WriteLine("5. Approval - Manual approval");
Console.WriteLine("6. Deploy Prod - Deploy to production");

Console.WriteLine("Self-Hosted Agents:");
Console.WriteLine("- Run on your own machine");
Console.WriteLine("- Full control");
Console.WriteLine("- Access to on-premises resources");
Console.WriteLine("- Azure Pipelines Microsoft-hosted agents also available");`}]},{id:"q3",question:"What is Azure Resource Manager (ARM) and resource groups?",answer:"ARM is Azure's deployment and management service. Resource groups are containers for related resources (logical grouping). Manage permissions, billing, and lifecycle together. Can't be nested. One resource can only belong to one resource group. Delete resource group deletes all resources.",codeSnippets:[{language:"csharp",code:`// Azure Resource Manager & Resource Groups

// Create resource group
Console.WriteLine("Resource Group Commands:");
Console.WriteLine("# Create resource group");
Console.WriteLine("az group create \\");
Console.WriteLine("  --name myResourceGroup \\");
Console.WriteLine("  --location eastus");
Console.WriteLine("");
Console.WriteLine("# List resource groups");
Console.WriteLine("az group list");
Console.WriteLine("");
Console.WriteLine("# Delete resource group (deletes all resources)");
Console.WriteLine("az group delete \\");
Console.WriteLine("  --name myResourceGroup \\");
Console.WriteLine("  --yes");

// Resource organization
var resourceGroupStructure = new
{
    ResourceGroup = "myapp-prod-rg",
    Resources = new[]
    {
        "App Service",
        "SQL Database",
        "Storage Account",
        "Key Vault",
        "Application Insights",
        "Virtual Network"
    }
};

Console.WriteLine("Typical Resource Group Structure:");
Console.WriteLine(resourceGroupStructure.ResourceGroup);
foreach (var resource in resourceGroupStructure.Resources)
{
    Console.WriteLine($"  ├─ {resource}");
}

// Tagging resources
Console.WriteLine("Resource Tags (metadata):");
Console.WriteLine("# Set tags");
Console.WriteLine("az resource tag \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --resource-type Microsoft.Web/sites \\");
Console.WriteLine("  --tags environment=production cost-center=engineering team=backend");
Console.WriteLine("");
Console.WriteLine("# Query by tags");
Console.WriteLine("az resource list --tags environment=production");

// Management operations
Console.WriteLine("ARM Operations:");
Console.WriteLine("PUT - Create or update resource");
Console.WriteLine("GET - Get resource details");
Console.WriteLine("DELETE - Delete resource");
Console.WriteLine("PATCH - Update resource");

// Role-Based Access Control (RBAC)
Console.WriteLine("RBAC Examples:");
Console.WriteLine("# Assign Contributor role");
Console.WriteLine("az role assignment create \\");
Console.WriteLine("  --assignee user@example.com \\");
Console.WriteLine("  --role Contributor \\");
Console.WriteLine("  --scope /subscriptions/<subscription-id>/resourceGroups/myRG");
Console.WriteLine("");
Console.WriteLine("# Assign Reader role");
Console.WriteLine("az role assignment create \\");
Console.WriteLine("  --assignee team@example.com \\");
Console.WriteLine("  --role Reader \\");
Console.WriteLine("  --scope /subscriptions/<subscription-id>");

Console.WriteLine("Built-in Roles:");
Console.WriteLine("Owner - Full access including RBAC");
Console.WriteLine("Contributor - Full access, no RBAC");
Console.WriteLine("Reader - Read-only access");
Console.WriteLine("User Access Administrator - Manage RBAC");`}]}]},zg={id:"azure-networking",name:"Networking",questions:[{id:"q1",question:"What is Azure Virtual Network (VNet) and how do you use it?",answer:"VNet is isolated network environment in Azure. Contains subnets (subdivisions). Enables: communication between Azure resources, access to on-premises networks via VPN/ExpressRoute, filtering with Network Security Groups (NSG). Supports custom IP address space. Required for VMs, databases, etc.",codeSnippets:[{language:"csharp",code:`// Azure Virtual Network (VNet)

Console.WriteLine("VNet Components:");
Console.WriteLine("Virtual Network (VNet) - IP address space (e.g., 10.0.0.0/16)");
Console.WriteLine("  └─ Subnet 1 - 10.0.1.0/24");
Console.WriteLine("  └─ Subnet 2 - 10.0.2.0/24");
Console.WriteLine("  └─ Subnet 3 - 10.0.3.0/24");

// VNet Creation
Console.WriteLine("Create VNet:");
Console.WriteLine("az network vnet create \\");
Console.WriteLine("  --name myVNet \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --address-prefix 10.0.0.0/16");

// Create Subnets
Console.WriteLine("Create Subnet:");
Console.WriteLine("az network vnet subnet create \\");
Console.WriteLine("  --vnet-name myVNet \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name frontend \\");
Console.WriteLine("  --address-prefix 10.0.1.0/24");

// Network Security Group (NSG)
Console.WriteLine("NSG - Firewall rules");
Console.WriteLine("Allow HTTP (port 80)");
Console.WriteLine("Allow HTTPS (port 443)");
Console.WriteLine("Allow RDP (port 3389) from admin IP");
Console.WriteLine("Deny all else");

// NSG Creation
Console.WriteLine("Create NSG:");
Console.WriteLine("az network nsg create \\");
Console.WriteLine("  --name myNSG \\");
Console.WriteLine("  --resource-group myRG");

Console.WriteLine("Add inbound rule:");
Console.WriteLine("az network nsg rule create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --nsg-name myNSG \\");
Console.WriteLine("  --name AllowHTTPS \\");
Console.WriteLine("  --priority 100 \\");
Console.WriteLine("  --direction Inbound \\");
Console.WriteLine("  --access Allow \\");
Console.WriteLine("  --protocol Tcp \\");
Console.WriteLine("  --destination-port-ranges 443");

// VNet Peering (connect VNets)
Console.WriteLine("VNet Peering - Connect two VNets");
Console.WriteLine("az network vnet peering create \\");
Console.WriteLine("  --vnet-name myVNet1 \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myVNet1-to-myVNet2 \\");
Console.WriteLine("  --remote-vnet /subscriptions/.../myVNet2 \\");
Console.WriteLine("  --allow-vnet-access");

// Service Endpoints (access Azure services securely)
Console.WriteLine("Service Endpoints:");
Console.WriteLine("- Azure Storage");
Console.WriteLine("- SQL Database");
Console.WriteLine("- Key Vault");
Console.WriteLine("- Cosmos DB");
Console.WriteLine("- Event Hub");`}]},{id:"q2",question:"What is Azure Load Balancer and Application Gateway?",answer:"Load Balancer: Layer 4 (Transport), distributes traffic across VMs, high performance, lower cost. Application Gateway: Layer 7 (Application), URL-based routing, SSL termination, WAF (Web Application Firewall), better for HTTP/HTTPS. Choose based on: simple round-robin (LB) vs complex routing (AppGW).",codeSnippets:[{language:"csharp",code:`// Azure Load Balancer vs Application Gateway

Console.WriteLine("Load Balancer (Layer 4):");
Console.WriteLine("✓ Transport layer (TCP/UDP)");
Console.WriteLine("✓ High performance");
Console.WriteLine("✓ Low latency");
Console.WriteLine("✓ Simple round-robin or session affinity");
Console.WriteLine("✓ Lower cost");
Console.WriteLine("✗ No URL-based routing");

Console.WriteLine("");
Console.WriteLine("Application Gateway (Layer 7):");
Console.WriteLine("✓ Application layer (HTTP/HTTPS)");
Console.WriteLine("✓ URL-based routing");
Console.WriteLine("✓ Hostname-based routing");
Console.WriteLine("✓ SSL termination");
Console.WriteLine("✓ WAF (Web Application Firewall)");
Console.WriteLine("✓ Cookie-based session affinity");
Console.WriteLine("✗ Slightly higher latency");
Console.WriteLine("✗ Higher cost");

// Load Balancer Configuration
Console.WriteLine("Load Balancer Setup:");
Console.WriteLine("az network lb create \\");
Console.WriteLine("  --name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --sku Standard \\");
Console.WriteLine("  --public-ip-address myPublicIP");

Console.WriteLine("Add backend pool:");
Console.WriteLine("az network lb address-pool create \\");
Console.WriteLine("  --lb-name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myBackendPool");

Console.WriteLine("Add health probe:");
Console.WriteLine("az network lb probe create \\");
Console.WriteLine("  --lb-name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myHealthProbe \\");
Console.WriteLine("  --protocol http \\");
Console.WriteLine("  --path /health \\");
Console.WriteLine("  --port 80");

Console.WriteLine("Add load rule:");
Console.WriteLine("az network lb rule create \\");
Console.WriteLine("  --lb-name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myLBRule \\");
Console.WriteLine("  --protocol tcp \\");
Console.WriteLine("  --frontend-port 80 \\");
Console.WriteLine("  --backend-port 80 \\");
Console.WriteLine("  --backend-pool-name myBackendPool \\");
Console.WriteLine("  --probe-name myHealthProbe");

// Application Gateway Configuration
Console.WriteLine("Application Gateway Setup:");
Console.WriteLine("az network application-gateway create \\");
Console.WriteLine("  --name myAppGW \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet-name myVNet \\");
Console.WriteLine("  --subnet mySubnet \\");
Console.WriteLine("  --capacity 2 \\");
Console.WriteLine("  --sku Standard_v2");

Console.WriteLine("URL-based routing:");
Console.WriteLine("Frontend: myappgw.com");
Console.WriteLine("  ├─ /api/* → Backend API Pool");
Console.WriteLine("  ├─ /images/* → Static Storage Account");
Console.WriteLine("  └─ /* → Web App Pool");

Console.WriteLine("WAF (Web Application Firewall):");
Console.WriteLine("✓ DDoS protection");
Console.WriteLine("✓ SQL injection prevention");
Console.WriteLine("✓ XSS protection");
Console.WriteLine("✓ Cookie protection");
Console.WriteLine("✓ Attack signature detection");`}]},{id:"q3",question:"What is ExpressRoute and VPN Gateway for hybrid connectivity?",answer:"VPN Gateway: IPSec VPN over internet, lower cost, variable bandwidth. ExpressRoute: dedicated private connection, consistent performance, higher cost, supports large data transfers. Choose: VPN for cost-sensitive, ExpressRoute for performance-critical, consistent bandwidth.",codeSnippets:[{language:"csharp",code:`// Azure VPN Gateway vs ExpressRoute

Console.WriteLine("VPN Gateway:");
Console.WriteLine("✓ IPSec VPN tunnels");
Console.WriteLine("✓ Over public internet");
Console.WriteLine("✓ Lower cost");
Console.WriteLine("✓ Variable bandwidth");
Console.WriteLine("✓ Encrypted traffic");
Console.WriteLine("✗ Latency variance");

Console.WriteLine("");
Console.WriteLine("ExpressRoute:");
Console.WriteLine("✓ Dedicated private connection");
Console.WriteLine("✓ Consistent, low latency");
Console.WriteLine("✓ High bandwidth (10 Gbps+)");
Console.WriteLine("✓ Direct connection to Microsoft backbone");
Console.WriteLine("✗ Higher cost");
Console.WriteLine("✗ Longer setup time");

// VPN Gateway Setup
Console.WriteLine("VPN Gateway Configuration:");
Console.WriteLine("az network vnet-gateway create \\");
Console.WriteLine("  --name myVPNGateway \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet myVNet \\");
Console.WriteLine("  --gateway-type Vpn \\");
Console.WriteLine("  --vpn-type RouteBased \\");
Console.WriteLine("  --sku VpnGw1");

Console.WriteLine("Create local gateway (on-premises):");
Console.WriteLine("az network local-gateway create \\");
Console.WriteLine("  --name myOnPremisesGateway \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --gateway-ip-address 203.0.113.12 \\");
Console.WriteLine("  --address-prefix 192.168.0.0/16");

Console.WriteLine("Create connection:");
Console.WriteLine("az network vpn-connection create \\");
Console.WriteLine("  --name myConnection \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet-gateway1 myVPNGateway \\");
Console.WriteLine("  --local-gateway2 myOnPremisesGateway \\");
Console.WriteLine("  --shared-key MySharedSecret");

// ExpressRoute
Console.WriteLine("ExpressRoute Connectivity Models:");
Console.WriteLine("1. Colocation facility");
Console.WriteLine("2. Point-to-point Ethernet");
Console.WriteLine("3. Any-to-any (IPVPN)");

Console.WriteLine("Peering Types:");
Console.WriteLine("- Private Peering (to Azure VNets)");
Console.WriteLine("- Public Peering (Azure services)");
Console.WriteLine("- Microsoft Peering (Office 365, Dynamics 365)");

Console.WriteLine("Setup (requires provider):");
Console.WriteLine("1. Contact ExpressRoute provider");
Console.WriteLine("2. Provision circuit");
Console.WriteLine("3. Create connection");
Console.WriteLine("4. Configure BGP peering");`}]}]},jg={id:"azure-api-security",name:"API Security & API Management",questions:[{id:"q1",question:"What is Azure API Management (APIM) and its key features?",answer:"APIM is gateway for APIs: publish, manage, secure, monitor. Key features: API versioning, rate limiting, authentication (OAuth, API Key), request/response transformation, analytics, developer portal, policy engine. Sits between clients and backend services.",codeSnippets:[{language:"csharp",code:`// Azure API Management (APIM)

Console.WriteLine("APIM Components:");
Console.WriteLine("┌─ Gateway");
Console.WriteLine("│  ├─ Request/response policies");
Console.WriteLine("│  ├─ Authentication & authorization");
Console.WriteLine("│  ├─ Rate limiting & throttling");
Console.WriteLine("│  └─ Request/response transformation");
Console.WriteLine("├─ Admin Portal (management)");
Console.WriteLine("├─ Developer Portal (API discovery)");
Console.WriteLine("└─ Service (metadata & configuration)");

// Create APIM Instance
Console.WriteLine("Create APIM:");
Console.WriteLine("az apim create \\");
Console.WriteLine("  --name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --publisher-name 'My Company' \\");
Console.WriteLine("  --publisher-email admin@company.com \\");
Console.WriteLine("  --sku-name Developer");

// Add API
Console.WriteLine("Add API:");
Console.WriteLine("az apim api create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --api-id myapi \\");
Console.WriteLine("  --display-name 'My API' \\");
Console.WriteLine("  --path /api \\");
Console.WriteLine("  --service-url https://api.backend.com");

// Add Operation
Console.WriteLine("Add Operation (GET /products):");
Console.WriteLine("az apim api operation create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --api-id myapi \\");
Console.WriteLine("  --operation-id getProducts \\");
Console.WriteLine("  --display-name 'Get Products' \\");
Console.WriteLine("  --method GET \\");
Console.WriteLine("  --url-template /products");

// API Versions & Revisions
Console.WriteLine("Versioning Schemes:");
Console.WriteLine("1. Query parameter: /api?api-version=1.0");
Console.WriteLine("2. Header: API-Version: 1.0");
Console.WriteLine("3. URL path: /api/v1/products");
Console.WriteLine("4. Custom header: Custom-Version: 1.0");

// Products (access control)
Console.WriteLine("Products (group APIs):");
Console.WriteLine("- Starter");
Console.WriteLine("- Basic");
Console.WriteLine("- Premium");

Console.WriteLine("Configure Product:");
Console.WriteLine("az apim product create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --product-name Starter \\");
Console.WriteLine("  --display-name 'Starter' \\");
Console.WriteLine("  --published true");

// Add API to Product
Console.WriteLine("Add API to Product:");
Console.WriteLine("az apim product api add \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --product-name Starter \\");
Console.WriteLine("  --api-id myapi");

// Subscriptions (API keys)
Console.WriteLine("Create Subscription (API key):");
Console.WriteLine("az apim subscription create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --subscription-name myapp-sub \\");
Console.WriteLine("  --product-id Starter");

// Policies
Console.WriteLine("APIM Policies (XML-based):");
Console.WriteLine("- Inbound: Authentication, rate limit, validate");
Console.WriteLine("- Outbound: Cache, transform response");
Console.WriteLine("- Backend: Forward request, set backend");
Console.WriteLine("- On-error: Error handling");`}]},{id:"q2",question:"How do you secure APIs with APIM? Authentication & authorization?",answer:"APIM supports: API Key (subscription key), OAuth 2.0 (delegated auth), JWT tokens, Basic auth. Implement via inbound policies. Use AAD (Azure AD) for enterprise. Rate limiting via policies. SSL/TLS encryption. API consumers authenticated via subscriptions.",codeSnippets:[{language:"csharp",code:`// Azure APIM Security - Authentication & Authorization

Console.WriteLine("Authentication Methods:");

Console.WriteLine("1. API Key (Subscription Key)");
Console.WriteLine("   - Client sends key in header: Ocp-Apim-Subscription-Key");
Console.WriteLine("   - Easy, not for sensitive data");

Console.WriteLine("2. OAuth 2.0");
Console.WriteLine("   - Token-based authentication");
Console.WriteLine("   - Delegated authorization");
Console.WriteLine("   - User grants permission to app");

Console.WriteLine("3. Azure AD (Entra ID)");
Console.WriteLine("   - Enterprise SSO");
Console.WriteLine("   - SAML, OpenID Connect");

Console.WriteLine("4. JWT Tokens");
Console.WriteLine("   - Self-contained claims");
Console.WriteLine("   - Signature verification");

Console.WriteLine("5. Basic Authentication");
Console.WriteLine("   - Username:password in Authorization header");
Console.WriteLine("   - Always use HTTPS");

// APIM Policy - Validate JWT
Console.WriteLine("Validate JWT Token Policy:");
Console.WriteLine(@"
<policies>
  <inbound>
    <validate-jwt header-name=""Authorization"" 
                   failed-validation-httpcode=""401"" 
                   failed-validation-error-message=""Unauthorized"">
      <openid-config url=""https://login.microsoftonline.com/{tenant-id}/.well-known/openid-configuration"" />
      <audiences>
        <audience>https://api.example.com</audience>
      </audiences>
      <claim name=""iss"" match=""any"">
        <value>https://sts.windows.net/{tenant-id}/</value>
      </claim>
    </validate-jwt>
  </inbound>
</policies>");

// APIM Policy - Rate Limiting
Console.WriteLine("Rate Limiting Policy:");
Console.WriteLine(@"
<policies>
  <inbound>
    <rate-limit-by-key calls=""100"" 
                        renewal-period=""60"" 
                        counter-key=""@(context.Request.Headers.GetValueOrDefault("Authorization", "").AsJwt()?.Subject)"" />
  </inbound>
</policies>");

// APIM Policy - API Key Validation
Console.WriteLine("Validate Subscription Key:");
Console.WriteLine(@"
<policies>
  <inbound>
    <check-header name=""Ocp-Apim-Subscription-Key"" failed-check-httpcode=""401"" failed-check-error-message=""Missing or invalid subscription key"" />
  </inbound>
</policies>");

// APIM Policy - Transform Response
Console.WriteLine("Transform Response (add headers):");
Console.WriteLine(@"
<policies>
  <outbound>
    <set-header name=""X-API-Version"" exists-action=""override"">
      <value>1.0</value>
    </set-header>
    <set-header name=""X-Powered-By"" exists-action=""override"">
      <value>Azure API Management</value>
    </set-header>
  </outbound>
</policies>");

// Mock Response
Console.WriteLine("Mock Response (for testing):");
Console.WriteLine(@"
<policies>
  <inbound>
    <mock-response status-code=""200"" content-type=""application/json"">
      <payload>{ ""message"": ""mocked response"" }</payload>
    </mock-response>
  </inbound>
</policies>");

// Redirect Secure
Console.WriteLine("Redirect to HTTPS:");
Console.WriteLine(@"
<policies>
  <inbound>
    <redirect-content-urls />
  </inbound>
</policies>");`}]},{id:"q3",question:"What is Azure Application Gateway WAF and how to use it?",answer:"WAF (Web Application Firewall) on Application Gateway: protects against web vulnerabilities (SQL injection, XSS, DDoS). Rules: OWASP Core Rule Set. Modes: Detection (log), Prevention (block). Custom rules possible. Prevents malicious requests reaching backend.",codeSnippets:[{language:"csharp",code:`// Azure Application Gateway WAF (Web Application Firewall)

Console.WriteLine("WAF Protection:");
Console.WriteLine("✓ SQL Injection");
Console.WriteLine("✓ Cross-Site Scripting (XSS)");
Console.WriteLine("✓ Cross-Site Request Forgery (CSRF)");
Console.WriteLine("✓ Local File Inclusion (LFI)");
Console.WriteLine("✓ Remote File Inclusion (RFI)");
Console.WriteLine("✓ PHP Injection");
Console.WriteLine("✓ Session Fixation");

// Create App Gateway with WAF
Console.WriteLine("Create App Gateway with WAF:");
Console.WriteLine("az network application-gateway create \\");
Console.WriteLine("  --name myAppGW \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet-name myVNet \\");
Console.WriteLine("  --subnet mySubnet \\");
Console.WriteLine("  --capacity 2 \\");
Console.WriteLine("  --sku WAF_v2 \\");
Console.WriteLine("  --http-settings-cookie-based-affinity Disabled \\");
Console.WriteLine("  --frontend-port 443 \\");
Console.WriteLine("  --http-settings-port 443 \\");
Console.WriteLine("  --http-settings-protocol Https");

// Create WAF Policy
Console.WriteLine("Create WAF Policy:");
Console.WriteLine("az network application-gateway waf-policy create \\");
Console.WriteLine("  --name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --type OWASP \\");
Console.WriteLine("  --version 3.0");

// WAF Modes
Console.WriteLine("WAF Modes:");
Console.WriteLine("1. Detection - Log threats, don't block");
Console.WriteLine("2. Prevention - Log threats, block requests");

Console.WriteLine("Set WAF Mode:");
Console.WriteLine("az network application-gateway waf-policy policy-settings update \\");
Console.WriteLine("  --name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --mode Prevention");

// Rule Sets
Console.WriteLine("OWASP Core Rule Set (CRS):");
Console.WriteLine("- CRS 3.1 (latest)");
Console.WriteLine("- CRS 3.0");
Console.WriteLine("- CRS 2.2.9");

// Custom Rules
Console.WriteLine("Custom WAF Rule (block pattern):");
Console.WriteLine("az network application-gateway waf-policy custom-rule create \\");
Console.WriteLine("  --name BlockSuspiciousUserAgent \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --priority 1 \\");
Console.WriteLine("  --rule-type MatchRule \\");
Console.WriteLine("  --action Block");

// Rate Limiting Rule
Console.WriteLine("Rate Limiting Custom Rule:");
Console.WriteLine("az network application-gateway waf-policy custom-rule create \\");
Console.WriteLine("  --name RateLimitPerIP \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --priority 2 \\");
Console.WriteLine("  --rule-type RateLimitRule \\");
Console.WriteLine("  --action Block \\");
Console.WriteLine("  --rate-limit-duration 1m \\");
Console.WriteLine("  --rate-limit-threshold 100");

// Geo-blocking Rule
Console.WriteLine("Geo-blocking Rule:");
Console.WriteLine("az network application-gateway waf-policy custom-rule create \\");
Console.WriteLine("  --name AllowUSOnly \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --priority 3 \\");
Console.WriteLine("  --rule-type MatchRule \\");
Console.WriteLine("  --action Allow");

// Exclusions
Console.WriteLine("WAF Exclusions (bypass rules):");
Console.WriteLine("- Exclude certain users");
Console.WriteLine("- Exclude parameters");
Console.WriteLine("- Exclude patterns");

Console.WriteLine("Add Exclusion:");
Console.WriteLine("az network application-gateway waf-policy managed-rule exclusion create \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --exclusion-rule-set OWASP \\");
Console.WriteLine("  --exclusion-rule-group SQLi \\");
Console.WriteLine("  --selector-match-operator Contains \\");
Console.WriteLine("  --selector admin");

// Monitoring WAF
Console.WriteLine("Monitor WAF:");
Console.WriteLine("- Application Gateway Logs");
Console.WriteLine("- Application Gateway Metrics");
Console.WriteLine("- Log Analytics Workspace");`}]}]},Hg={id:"azure",name:"Microsoft Azure",topics:[qg,Gg,Pg,Bg,zg,jg]},dl=[fg,bg,Ag,Dg,Ug,Hg];function _g(){const[L,F]=Yt.useState(null),[q,m]=Yt.useState(null),[x,U]=Yt.useState(!0),X=ue=>{F(ue);const E=dl.find(A=>A.id===ue);E&&E.topics.length>0?m(E.topics[0].id):m(null)};return Yt.useEffect(()=>{const ue=document.querySelector(".content-area");ue&&(ue.scrollTop=0)},[q]),S.jsxs("div",{className:"app",children:[S.jsx(ig,{subjects:dl,selectedSubject:L,selectedTopic:q,onSubjectSelect:X,onTopicSelect:m,isOpen:x,onToggle:()=>U(!x)}),S.jsx(lg,{subjects:dl,selectedSubject:L,selectedTopic:q})]})}ng.createRoot(document.getElementById("root")).render(S.jsx(Yt.StrictMode,{children:S.jsx(_g,{})}));
