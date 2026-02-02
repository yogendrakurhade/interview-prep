(function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))m(x);new MutationObserver(x=>{for(const M of x)if(M.type==="childList")for(const X of M.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&m(X)}).observe(document,{childList:!0,subtree:!0});function U(x){const M={};return x.integrity&&(M.integrity=x.integrity),x.referrerPolicy&&(M.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?M.credentials="include":x.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function m(x){if(x.ep)return;x.ep=!0;const M=U(x);fetch(x.href,M)}})();var rl={exports:{}},Ca={};var gp;function Qg(){if(gp)return Ca;gp=1;var w=Symbol.for("react.transitional.element"),F=Symbol.for("react.fragment");function U(m,x,M){var X=null;if(M!==void 0&&(X=""+M),x.key!==void 0&&(X=""+x.key),"key"in x){M={};for(var ue in x)ue!=="key"&&(M[ue]=x[ue])}else M=x;return x=M.ref,{$$typeof:w,type:m,key:X,ref:x!==void 0?x:null,props:M}}return Ca.Fragment=F,Ca.jsx=U,Ca.jsxs=U,Ca}var vp;function Yg(){return vp||(vp=1,rl.exports=Qg()),rl.exports}var S=Yg(),ol={exports:{}},G={};var fp;function Kg(){if(fp)return G;fp=1;var w=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),me=Symbol.iterator;function Ye(u){return u===null||typeof u!="object"?null:(u=me&&u[me]||u["@@iterator"],typeof u=="function"?u:null)}var Ue={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ne=Object.assign,Dt={};function Ke(u,A,W){this.props=u,this.context=A,this.refs=Dt,this.updater=W||Ue}Ke.prototype.isReactComponent={},Ke.prototype.setState=function(u,A){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,A,"setState")},Ke.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Kt(){}Kt.prototype=Ke.prototype;function xe(u,A,W){this.props=u,this.context=A,this.refs=Dt,this.updater=W||Ue}var ot=xe.prototype=new Kt;ot.constructor=xe,Ne(ot,Ke.prototype),ot.isPureReactComponent=!0;var St=Array.isArray;function Ge(){}var Y={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function At(u,A,W){var I=W.ref;return{$$typeof:w,type:u,key:A,ref:I!==void 0?I:null,props:W}}function zn(u,A){return At(u.type,A,u.props)}function Tt(u){return typeof u=="object"&&u!==null&&u.$$typeof===w}function Be(u){var A={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(W){return A[W]})}var An=/\/+/g;function It(u,A){return typeof u=="object"&&u!==null&&u.key!=null?Be(""+u.key):A.toString(36)}function yt(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Ge,Ge):(u.status="pending",u.then(function(A){u.status==="pending"&&(u.status="fulfilled",u.value=A)},function(A){u.status==="pending"&&(u.status="rejected",u.reason=A)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function h(u,A,W,I,q){var z=typeof u;(z==="undefined"||z==="boolean")&&(u=null);var te=!1;if(u===null)te=!0;else switch(z){case"bigint":case"string":case"number":te=!0;break;case"object":switch(u.$$typeof){case w:case F:te=!0;break;case ee:return te=u._init,h(te(u._payload),A,W,I,q)}}if(te)return q=q(u),te=I===""?"."+It(u,0):I,St(q)?(W="",te!=null&&(W=te.replace(An,"$&/")+"/"),h(q,A,W,"",function(Wi){return Wi})):q!=null&&(Tt(q)&&(q=zn(q,W+(q.key==null||u&&u.key===q.key?"":(""+q.key).replace(An,"$&/")+"/")+te)),A.push(q)),1;te=0;var Pe=I===""?".":I+":";if(St(u))for(var ye=0;ye<u.length;ye++)I=u[ye],z=Pe+It(I,ye),te+=h(I,A,W,z,q);else if(ye=Ye(u),typeof ye=="function")for(u=ye.call(u),ye=0;!(I=u.next()).done;)I=I.value,z=Pe+It(I,ye++),te+=h(I,A,W,z,q);else if(z==="object"){if(typeof u.then=="function")return h(yt(u),A,W,I,q);throw A=String(u),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return te}function L(u,A,W){if(u==null)return u;var I=[],q=0;return h(u,I,"","",function(z){return A.call(W,z,q++)}),I}function P(u){if(u._status===-1){var A=u._result;A=A(),A.then(function(W){(u._status===0||u._status===-1)&&(u._status=1,u._result=W)},function(W){(u._status===0||u._status===-1)&&(u._status=2,u._result=W)}),u._status===-1&&(u._status=0,u._result=A)}if(u._status===1)return u._result.default;throw u._result}var ae=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},le={map:L,forEach:function(u,A,W){L(u,function(){A.apply(this,arguments)},W)},count:function(u){var A=0;return L(u,function(){A++}),A},toArray:function(u){return L(u,function(A){return A})||[]},only:function(u){if(!Tt(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return G.Activity=N,G.Children=le,G.Component=Ke,G.Fragment=U,G.Profiler=x,G.PureComponent=xe,G.StrictMode=m,G.Suspense=E,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,G.__COMPILER_RUNTIME={__proto__:null,c:function(u){return Y.H.useMemoCache(u)}},G.cache=function(u){return function(){return u.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(u,A,W){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var I=Ne({},u.props),q=u.key;if(A!=null)for(z in A.key!==void 0&&(q=""+A.key),A)!qe.call(A,z)||z==="key"||z==="__self"||z==="__source"||z==="ref"&&A.ref===void 0||(I[z]=A[z]);var z=arguments.length-2;if(z===1)I.children=W;else if(1<z){for(var te=Array(z),Pe=0;Pe<z;Pe++)te[Pe]=arguments[Pe+2];I.children=te}return At(u.type,q,I)},G.createContext=function(u){return u={$$typeof:X,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:M,_context:u},u},G.createElement=function(u,A,W){var I,q={},z=null;if(A!=null)for(I in A.key!==void 0&&(z=""+A.key),A)qe.call(A,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(q[I]=A[I]);var te=arguments.length-2;if(te===1)q.children=W;else if(1<te){for(var Pe=Array(te),ye=0;ye<te;ye++)Pe[ye]=arguments[ye+2];q.children=Pe}if(u&&u.defaultProps)for(I in te=u.defaultProps,te)q[I]===void 0&&(q[I]=te[I]);return At(u,z,q)},G.createRef=function(){return{current:null}},G.forwardRef=function(u){return{$$typeof:ue,render:u}},G.isValidElement=Tt,G.lazy=function(u){return{$$typeof:ee,_payload:{_status:-1,_result:u},_init:P}},G.memo=function(u,A){return{$$typeof:T,type:u,compare:A===void 0?null:A}},G.startTransition=function(u){var A=Y.T,W={};Y.T=W;try{var I=u(),q=Y.S;q!==null&&q(W,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(Ge,ae)}catch(z){ae(z)}finally{A!==null&&W.types!==null&&(A.types=W.types),Y.T=A}},G.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},G.use=function(u){return Y.H.use(u)},G.useActionState=function(u,A,W){return Y.H.useActionState(u,A,W)},G.useCallback=function(u,A){return Y.H.useCallback(u,A)},G.useContext=function(u){return Y.H.useContext(u)},G.useDebugValue=function(){},G.useDeferredValue=function(u,A){return Y.H.useDeferredValue(u,A)},G.useEffect=function(u,A){return Y.H.useEffect(u,A)},G.useEffectEvent=function(u){return Y.H.useEffectEvent(u)},G.useId=function(){return Y.H.useId()},G.useImperativeHandle=function(u,A,W){return Y.H.useImperativeHandle(u,A,W)},G.useInsertionEffect=function(u,A){return Y.H.useInsertionEffect(u,A)},G.useLayoutEffect=function(u,A){return Y.H.useLayoutEffect(u,A)},G.useMemo=function(u,A){return Y.H.useMemo(u,A)},G.useOptimistic=function(u,A){return Y.H.useOptimistic(u,A)},G.useReducer=function(u,A,W){return Y.H.useReducer(u,A,W)},G.useRef=function(u){return Y.H.useRef(u)},G.useState=function(u){return Y.H.useState(u)},G.useSyncExternalStore=function(u,A,W){return Y.H.useSyncExternalStore(u,A,W)},G.useTransition=function(){return Y.H.useTransition()},G.version="19.2.4",G}var yp;function pl(){return yp||(yp=1,ol.exports=Kg()),ol.exports}var Yt=pl(),sl={exports:{}},Sa={},ll={exports:{}},cl={};var hp;function Xg(){return hp||(hp=1,(function(w){function F(h,L){var P=h.length;h.push(L);e:for(;0<P;){var ae=P-1>>>1,le=h[ae];if(0<x(le,L))h[ae]=L,h[P]=le,P=ae;else break e}}function U(h){return h.length===0?null:h[0]}function m(h){if(h.length===0)return null;var L=h[0],P=h.pop();if(P!==L){h[0]=P;e:for(var ae=0,le=h.length,u=le>>>1;ae<u;){var A=2*(ae+1)-1,W=h[A],I=A+1,q=h[I];if(0>x(W,P))I<le&&0>x(q,W)?(h[ae]=q,h[I]=P,ae=I):(h[ae]=W,h[A]=P,ae=A);else if(I<le&&0>x(q,P))h[ae]=q,h[I]=P,ae=I;else break e}}return L}function x(h,L){var P=h.sortIndex-L.sortIndex;return P!==0?P:h.id-L.id}if(w.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;w.unstable_now=function(){return M.now()}}else{var X=Date,ue=X.now();w.unstable_now=function(){return X.now()-ue}}var E=[],T=[],ee=1,N=null,me=3,Ye=!1,Ue=!1,Ne=!1,Dt=!1,Ke=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function ot(h){for(var L=U(T);L!==null;){if(L.callback===null)m(T);else if(L.startTime<=h)m(T),L.sortIndex=L.expirationTime,F(E,L);else break;L=U(T)}}function St(h){if(Ne=!1,ot(h),!Ue)if(U(E)!==null)Ue=!0,Ge||(Ge=!0,Be());else{var L=U(T);L!==null&&yt(St,L.startTime-h)}}var Ge=!1,Y=-1,qe=5,At=-1;function zn(){return Dt?!0:!(w.unstable_now()-At<qe)}function Tt(){if(Dt=!1,Ge){var h=w.unstable_now();At=h;var L=!0;try{e:{Ue=!1,Ne&&(Ne=!1,Kt(Y),Y=-1),Ye=!0;var P=me;try{t:{for(ot(h),N=U(E);N!==null&&!(N.expirationTime>h&&zn());){var ae=N.callback;if(typeof ae=="function"){N.callback=null,me=N.priorityLevel;var le=ae(N.expirationTime<=h);if(h=w.unstable_now(),typeof le=="function"){N.callback=le,ot(h),L=!0;break t}N===U(E)&&m(E),ot(h)}else m(E);N=U(E)}if(N!==null)L=!0;else{var u=U(T);u!==null&&yt(St,u.startTime-h),L=!1}}break e}finally{N=null,me=P,Ye=!1}L=void 0}}finally{L?Be():Ge=!1}}}var Be;if(typeof xe=="function")Be=function(){xe(Tt)};else if(typeof MessageChannel<"u"){var An=new MessageChannel,It=An.port2;An.port1.onmessage=Tt,Be=function(){It.postMessage(null)}}else Be=function(){Ke(Tt,0)};function yt(h,L){Y=Ke(function(){h(w.unstable_now())},L)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(h){h.callback=null},w.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<h?Math.floor(1e3/h):5},w.unstable_getCurrentPriorityLevel=function(){return me},w.unstable_next=function(h){switch(me){case 1:case 2:case 3:var L=3;break;default:L=me}var P=me;me=L;try{return h()}finally{me=P}},w.unstable_requestPaint=function(){Dt=!0},w.unstable_runWithPriority=function(h,L){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var P=me;me=h;try{return L()}finally{me=P}},w.unstable_scheduleCallback=function(h,L,P){var ae=w.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ae+P:ae):P=ae,h){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=P+le,h={id:ee++,callback:L,priorityLevel:h,startTime:P,expirationTime:le,sortIndex:-1},P>ae?(h.sortIndex=P,F(T,h),U(E)===null&&h===U(T)&&(Ne?(Kt(Y),Y=-1):Ne=!0,yt(St,P-ae))):(h.sortIndex=le,F(E,h),Ue||Ye||(Ue=!0,Ge||(Ge=!0,Be()))),h},w.unstable_shouldYield=zn,w.unstable_wrapCallback=function(h){var L=me;return function(){var P=me;me=L;try{return h.apply(this,arguments)}finally{me=P}}}})(cl)),cl}var bp;function Jg(){return bp||(bp=1,ll.exports=Xg()),ll.exports}var ul={exports:{}},ke={};var Cp;function $g(){if(Cp)return ke;Cp=1;var w=pl();function F(E){var T="https://react.dev/errors/"+E;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var ee=2;ee<arguments.length;ee++)T+="&args[]="+encodeURIComponent(arguments[ee])}return"Minified React error #"+E+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var m={d:{f:U,r:function(){throw Error(F(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},x=Symbol.for("react.portal");function M(E,T,ee){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:N==null?null:""+N,children:E,containerInfo:T,implementation:ee}}var X=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ue(E,T){if(E==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ke.createPortal=function(E,T){var ee=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(F(299));return M(E,T,null,ee)},ke.flushSync=function(E){var T=X.T,ee=m.p;try{if(X.T=null,m.p=2,E)return E()}finally{X.T=T,m.p=ee,m.d.f()}},ke.preconnect=function(E,T){typeof E=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,m.d.C(E,T))},ke.prefetchDNS=function(E){typeof E=="string"&&m.d.D(E)},ke.preinit=function(E,T){if(typeof E=="string"&&T&&typeof T.as=="string"){var ee=T.as,N=ue(ee,T.crossOrigin),me=typeof T.integrity=="string"?T.integrity:void 0,Ye=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;ee==="style"?m.d.S(E,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:N,integrity:me,fetchPriority:Ye}):ee==="script"&&m.d.X(E,{crossOrigin:N,integrity:me,fetchPriority:Ye,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},ke.preinitModule=function(E,T){if(typeof E=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var ee=ue(T.as,T.crossOrigin);m.d.M(E,{crossOrigin:ee,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&m.d.M(E)},ke.preload=function(E,T){if(typeof E=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var ee=T.as,N=ue(ee,T.crossOrigin);m.d.L(E,ee,{crossOrigin:N,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},ke.preloadModule=function(E,T){if(typeof E=="string")if(T){var ee=ue(T.as,T.crossOrigin);m.d.m(E,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:ee,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else m.d.m(E)},ke.requestFormReset=function(E){m.d.r(E)},ke.unstable_batchedUpdates=function(E,T){return E(T)},ke.useFormState=function(E,T,ee){return X.H.useFormState(E,T,ee)},ke.useFormStatus=function(){return X.H.useHostTransitionStatus()},ke.version="19.2.4",ke}var Sp;function Zg(){if(Sp)return ul.exports;Sp=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(F){console.error(F)}}return w(),ul.exports=$g(),ul.exports}var Ap;function ev(){if(Ap)return Sa;Ap=1;var w=Jg(),F=pl(),U=Zg();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function X(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ue(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(M(e)!==e)throw Error(m(188))}function T(e){var t=e.alternate;if(!t){if(t=M(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return E(a),e;if(r===i)return E(a),t;r=r.sibling}throw Error(m(188))}if(n.return!==i.return)n=a,i=r;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==i)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function ee(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ee(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,me=Symbol.for("react.element"),Ye=Symbol.for("react.transitional.element"),Ue=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),zn=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var An=Symbol.for("react.client.reference");function It(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===An?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Ke:return"Profiler";case Dt:return"StrictMode";case St:return"Suspense";case Ge:return"SuspenseList";case At:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ue:return"Portal";case xe:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:It(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return It(e(t))}catch{}}return null}var yt=Array.isArray,h=F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ae=[],le=-1;function u(e){return{current:e}}function A(e){0>le||(e.current=ae[le],ae[le]=null,le--)}function W(e,t){le++,ae[le]=e.current,e.current=t}var I=u(null),q=u(null),z=u(null),te=u(null);function Pe(e,t){switch(W(z,t),W(q,e),W(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Gd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(I),W(I,e)}function ye(){A(I),A(q),A(z)}function Wi(e){e.memoizedState!==null&&W(te,e);var t=I.current,n=Gd(t,e.type);t!==n&&(W(q,e),W(I,n))}function Aa(e){q.current===e&&(A(I),A(q)),te.current===e&&(A(te),fa._currentValue=P)}var Br,ml;function Tn(e){if(Br===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Br=t&&t[1]||"",ml=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Br+e+ml}var Hr=!1;function zr(e,t){if(!e||Hr)return"";Hr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(f){var v=f}Reflect.construct(e,[],C)}else{try{C.call()}catch(f){v=f}e.call(C.prototype)}}else{try{throw Error()}catch(f){v=f}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(f){if(f&&v&&typeof f.stack=="string")return[f.stack,v.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],s=r[1];if(o&&s){var l=o.split(`
`),g=s.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===g.length)for(i=l.length-1,a=g.length-1;1<=i&&0<=a&&l[i]!==g[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==g[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==g[a]){var y=`
`+l[i].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=i&&0<=a);break}}}finally{Hr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Tn(n):""}function wp(e,t){switch(e.tag){case 26:case 27:case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return e.child!==t&&t!==null?Tn("Suspense Fallback"):Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 15:return zr(e.type,!1);case 11:return zr(e.type.render,!1);case 1:return zr(e.type,!0);case 31:return Tn("Activity");default:return""}}function gl(e){try{var t="",n=null;do t+=wp(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var jr=Object.prototype.hasOwnProperty,_r=w.unstable_scheduleCallback,Fr=w.unstable_cancelCallback,Lp=w.unstable_shouldYield,Ep=w.unstable_requestPaint,Xe=w.unstable_now,Wp=w.unstable_getCurrentPriorityLevel,vl=w.unstable_ImmediatePriority,fl=w.unstable_UserBlockingPriority,Ta=w.unstable_NormalPriority,Dp=w.unstable_LowPriority,yl=w.unstable_IdlePriority,Ip=w.log,Rp=w.unstable_setDisableYieldValue,Di=null,Je=null;function Xt(e){if(typeof Ip=="function"&&Rp(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Di,e)}catch{}}var $e=Math.clz32?Math.clz32:kp,Op=Math.log,xp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(Op(e)/xp|0)|0}var wa=256,La=262144,Ea=4194304;function wn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wa(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=i&134217727;return s!==0?(i=s&~r,i!==0?a=wn(i):(o&=s,o!==0?a=wn(o):n||(n=s&~e,n!==0&&(a=wn(n))))):(s=i&~r,s!==0?a=wn(s):o!==0?a=wn(o):n||(n=i&~e,n!==0&&(a=wn(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Ii(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Np(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hl(){var e=Ea;return Ea<<=1,(Ea&62914560)===0&&(Ea=4194304),e}function Vr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ri(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pp(e,t,n,i,a,r){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,g=e.hiddenUpdates;for(n=o&~n;0<n;){var y=31-$e(n),C=1<<y;s[y]=0,l[y]=-1;var v=g[y];if(v!==null)for(g[y]=null,y=0;y<v.length;y++){var f=v[y];f!==null&&(f.lane&=-536870913)}n&=~C}i!==0&&bl(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function bl(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-$e(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-$e(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Sl(e,t){var n=t&-t;return n=(n&42)!==0?1:Qr(n),(n&(e.suspendedLanes|t))!==0?0:n}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Al(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:sp(e.type))}function Tl(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var Jt=Math.random().toString(36).slice(2),We="__reactFiber$"+Jt,He="__reactProps$"+Jt,jn="__reactContainer$"+Jt,Kr="__reactEvents$"+Jt,Mp="__reactListeners$"+Jt,Up="__reactHandles$"+Jt,wl="__reactResources$"+Jt,Oi="__reactMarker$"+Jt;function Xr(e){delete e[We],delete e[He],delete e[Kr],delete e[Mp],delete e[Up]}function _n(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fd(e);e!==null;){if(n=e[We])return n;e=Fd(e)}return t}e=n,n=e.parentNode}return null}function Fn(e){if(e=e[We]||e[jn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Vn(e){var t=e[wl];return t||(t=e[wl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Oi]=!0}var Ll=new Set,El={};function Ln(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(El[e]=t,e=0;e<t.length;e++)Ll.add(t[e])}var Gp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wl={},Dl={};function qp(e){return jr.call(Dl,e)?!0:jr.call(Wl,e)?!1:Gp.test(e)?Dl[e]=!0:(Wl[e]=!0,!1)}function Da(e,t,n){if(qp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ia(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Rt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Il(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bp(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){if(!e._valueTracker){var t=Il(e)?"checked":"value";e._valueTracker=Bp(e,t,""+e[t])}}function Rl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Il(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hp=/[\n"\\]/g;function lt(e){return e.replace(Hp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $r(e,t,n,i,a,r,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Zr(e,o,st(t)):n!=null?Zr(e,o,st(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+st(s):e.removeAttribute("name")}function Ol(e,t,n,i,a,r,o,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Jr(e);return}n=n!=null?""+st(n):"",t=t!=null?""+st(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=s?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Jr(e)}function Zr(e,t,n){t==="number"&&Ra(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Yn(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+st(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function xl(e,t,n){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+st(n):""}function kl(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(m(92));if(yt(i)){if(1<i.length)throw Error(m(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=st(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Jr(e)}function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nl(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||zp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Pl(e,t,n){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Nl(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Nl(e,r,t[r])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oa(e){return _p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var to=null;function no(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xn=null,Jn=null;function Ml(e){var t=Fn(e);if(t&&(e=t.stateNode)){var n=e[He]||null;e:switch(e=t.stateNode,t.type){case"input":if($r(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[He]||null;if(!a)throw Error(m(90));$r(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Rl(i)}break e;case"textarea":xl(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}}}var io=!1;function Ul(e,t,n){if(io)return e(t,n);io=!0;try{var i=e(t);return i}finally{if(io=!1,(Xn!==null||Jn!==null)&&(hr(),Xn&&(t=Xn,e=Jn,Jn=Xn=null,Ml(t),e)))for(t=0;t<e.length;t++)Ml(e[t])}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var i=n[He]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=!1;if(xt)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){ao=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{ao=!1}var $t=null,ro=null,xa=null;function Gl(){if(xa)return xa;var e,t=ro,n=t.length,i,a="value"in $t?$t.value:$t.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===a[r-i];i++);return xa=a.slice(e,1<i?1-i:void 0)}function ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Na(){return!0}function ql(){return!1}function ze(e){function t(n,i,a,r,o){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Na:ql,this.isPropagationStopped=ql,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=ze(En),Pi=N({},En,{view:0,detail:0}),Fp=ze(Pi),oo,so,Mi,Ma=N({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mi&&(Mi&&e.type==="mousemove"?(oo=e.screenX-Mi.screenX,so=e.screenY-Mi.screenY):so=oo=0,Mi=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:so}}),Bl=ze(Ma),Vp=N({},Ma,{dataTransfer:0}),Qp=ze(Vp),Yp=N({},Pi,{relatedTarget:0}),lo=ze(Yp),Kp=N({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=ze(Kp),Jp=N({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$p=ze(Jp),Zp=N({},En,{data:0}),Hl=ze(Zp),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function co(){return im}var am=N({},Pi,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rm=ze(am),om=N({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zl=ze(om),sm=N({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),lm=ze(sm),cm=N({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),um=ze(cm),dm=N({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=ze(dm),mm=N({},En,{newState:0,oldState:0}),gm=ze(mm),vm=[9,13,27,32],uo=xt&&"CompositionEvent"in window,Ui=null;xt&&"documentMode"in document&&(Ui=document.documentMode);var fm=xt&&"TextEvent"in window&&!Ui,jl=xt&&(!uo||Ui&&8<Ui&&11>=Ui),_l=" ",Fl=!1;function Vl(e,t){switch(e){case"keyup":return vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function ym(e,t){switch(e){case"compositionend":return Ql(t);case"keypress":return t.which!==32?null:(Fl=!0,_l);case"textInput":return e=t.data,e===_l&&Fl?null:e;default:return null}}function hm(e,t){if($n)return e==="compositionend"||!uo&&Vl(e,t)?(e=Gl(),xa=ro=$t=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jl&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function Kl(e,t,n,i){Xn?Jn?Jn.push(i):Jn=[i]:Xn=i,t=Lr(t,"onChange"),0<t.length&&(n=new Pa("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Gi=null,qi=null;function Cm(e){Od(e,0)}function Ua(e){var t=xi(e);if(Rl(t))return e}function Xl(e,t){if(e==="change")return t}var Jl=!1;if(xt){var po;if(xt){var mo="oninput"in document;if(!mo){var $l=document.createElement("div");$l.setAttribute("oninput","return;"),mo=typeof $l.oninput=="function"}po=mo}else po=!1;Jl=po&&(!document.documentMode||9<document.documentMode)}function Zl(){Gi&&(Gi.detachEvent("onpropertychange",ec),qi=Gi=null)}function ec(e){if(e.propertyName==="value"&&Ua(qi)){var t=[];Kl(t,qi,e,no(e)),Ul(Cm,t)}}function Sm(e,t,n){e==="focusin"?(Zl(),Gi=t,qi=n,Gi.attachEvent("onpropertychange",ec)):e==="focusout"&&Zl()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ua(qi)}function Tm(e,t){if(e==="click")return Ua(t)}function wm(e,t){if(e==="input"||e==="change")return Ua(t)}function Lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Lm;function Bi(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!jr.call(t,a)||!Ze(e[a],t[a]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,t){var n=tc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tc(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ra(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ra(e.document)}return t}function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Em=xt&&"documentMode"in document&&11>=document.documentMode,Zn=null,vo=null,Hi=null,fo=!1;function rc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||Zn==null||Zn!==Ra(i)||(i=Zn,"selectionStart"in i&&go(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hi&&Bi(Hi,i)||(Hi=i,i=Lr(vo,"onSelect"),0<i.length&&(t=new Pa("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Zn)))}function Wn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionrun:Wn("Transition","TransitionRun"),transitionstart:Wn("Transition","TransitionStart"),transitioncancel:Wn("Transition","TransitionCancel"),transitionend:Wn("Transition","TransitionEnd")},yo={},oc={};xt&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Dn(e){if(yo[e])return yo[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oc)return yo[e]=t[n];return e}var sc=Dn("animationend"),lc=Dn("animationiteration"),cc=Dn("animationstart"),Wm=Dn("transitionrun"),Dm=Dn("transitionstart"),Im=Dn("transitioncancel"),uc=Dn("transitionend"),dc=new Map,ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ho.push("scrollEnd");function ht(e,t){dc.set(e,t),Ln(t,[e])}var Ga=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],ti=0,bo=0;function qa(){for(var e=ti,t=bo=ti=0;t<e;){var n=ct[t];ct[t++]=null;var i=ct[t];ct[t++]=null;var a=ct[t];ct[t++]=null;var r=ct[t];if(ct[t++]=null,i!==null&&a!==null){var o=i.pending;o===null?a.next=a:(a.next=o.next,o.next=a),i.pending=a}r!==0&&pc(n,a,r)}}function Ba(e,t,n,i){ct[ti++]=e,ct[ti++]=t,ct[ti++]=n,ct[ti++]=i,bo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Co(e,t,n,i){return Ba(e,t,n,i),Ha(e)}function In(e,t){return Ba(e,null,null,t),Ha(e)}function pc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-$e(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function Ha(e){if(50<ca)throw ca=0,Is=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function Rm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,i){return new Rm(e,t,n,i)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function za(e,t,n,i,a,r){var o=0;if(i=e,typeof e=="function")So(e)&&(o=1);else if(typeof e=="string")o=Pg(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case At:return e=et(31,n,t,a),e.elementType=At,e.lanes=r,e;case Ne:return Rn(n.children,a,r,t);case Dt:o=8,a|=24;break;case Ke:return e=et(12,n,t,a|2),e.elementType=Ke,e.lanes=r,e;case St:return e=et(13,n,t,a),e.elementType=St,e.lanes=r,e;case Ge:return e=et(19,n,t,a),e.elementType=Ge,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:o=10;break e;case Kt:o=9;break e;case ot:o=11;break e;case Y:o=14;break e;case qe:o=16,i=null;break e}o=29,n=Error(m(130,e===null?"null":typeof e,"")),i=null}return t=et(o,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Rn(e,t,n,i){return e=et(7,e,i,t),e.lanes=n,e}function Ao(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function gc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function To(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vc=new WeakMap;function ut(e,t){if(typeof e=="object"&&e!==null){var n=vc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:gl(t)},vc.set(e,t),t)}return{value:e,source:t,stack:gl(t)}}var ii=[],ai=0,ja=null,zi=0,dt=[],pt=0,Zt=null,wt=1,Lt="";function Nt(e,t){ii[ai++]=zi,ii[ai++]=ja,ja=e,zi=t}function fc(e,t,n){dt[pt++]=wt,dt[pt++]=Lt,dt[pt++]=Zt,Zt=e;var i=wt;e=Lt;var a=32-$e(i)-1;i&=~(1<<a),n+=1;var r=32-$e(t)+a;if(30<r){var o=a-a%5;r=(i&(1<<o)-1).toString(32),i>>=o,a-=o,wt=1<<32-$e(t)+a|n<<a|i,Lt=r+e}else wt=1<<r|n<<a|i,Lt=e}function wo(e){e.return!==null&&(Nt(e,1),fc(e,1,0))}function Lo(e){for(;e===ja;)ja=ii[--ai],ii[ai]=null,zi=ii[--ai],ii[ai]=null;for(;e===Zt;)Zt=dt[--pt],dt[pt]=null,Lt=dt[--pt],dt[pt]=null,wt=dt[--pt],dt[pt]=null}function yc(e,t){dt[pt++]=wt,dt[pt++]=Lt,dt[pt++]=Zt,wt=t.id,Lt=t.overflow,Zt=e}var De=null,de=null,K=!1,en=null,mt=!1,Eo=Error(m(519));function tn(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ji(ut(t,e)),Eo}function hc(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[We]=e,t[He]=i,n){case"dialog":_("cancel",t),_("close",t);break;case"iframe":case"object":case"embed":_("load",t);break;case"video":case"audio":for(n=0;n<da.length;n++)_(da[n],t);break;case"source":_("error",t);break;case"img":case"image":case"link":_("error",t),_("load",t);break;case"details":_("toggle",t);break;case"input":_("invalid",t),Ol(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":_("invalid",t);break;case"textarea":_("invalid",t),kl(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Pd(t.textContent,n)?(i.popover!=null&&(_("beforetoggle",t),_("toggle",t)),i.onScroll!=null&&_("scroll",t),i.onScrollEnd!=null&&_("scrollend",t),i.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||tn(e,!0)}function bc(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:De=De.return}}function ri(e){if(e!==De)return!1;if(!K)return bc(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||_s(e.type,e.memoizedProps)),n=!n),n&&de&&tn(e),bc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=_d(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=_d(e)}else t===27?(t=de,fn(e.type)?(e=Ks,Ks=null,de=e):de=t):de=De?vt(e.stateNode.nextSibling):null;return!0}function On(){de=De=null,K=!1}function Wo(){var e=en;return e!==null&&(Ve===null?Ve=e:Ve.push.apply(Ve,e),en=null),e}function ji(e){en===null?en=[e]:en.push(e)}var Do=u(null),xn=null,Pt=null;function nn(e,t,n){W(Do,t._currentValue),t._currentValue=n}function Mt(e){e._currentValue=Do.current,A(Do)}function Io(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ro(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var o=a.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=a;for(var l=0;l<t.length;l++)if(s.context===t[l]){r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Io(r.return,n,e),i||(o=null);break e}r=s.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(m(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),Io(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function oi(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var s=a.type;Ze(a.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(a===te.current){if(o=a.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(fa):e=[fa])}a=a.return}e!==null&&Ro(t,e,n,i),t.flags|=262144}function _a(e){for(e=e.firstContext;e!==null;){if(!Ze(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kn(e){xn=e,Pt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Cc(xn,e)}function Fa(e,t){return xn===null&&kn(e),Cc(e,t)}function Cc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Pt===null){if(e===null)throw Error(m(308));Pt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pt=Pt.next=t;return n}var Om=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},xm=w.unstable_scheduleCallback,km=w.unstable_NormalPriority,Ce={$$typeof:xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oo(){return{controller:new Om,data:new Map,refCount:0}}function _i(e){e.refCount--,e.refCount===0&&xm(km,function(){e.controller.abort()})}var Fi=null,xo=0,si=0,li=null;function Nm(e,t){if(Fi===null){var n=Fi=[];xo=0,si=Ps(),li={status:"pending",value:void 0,then:function(i){n.push(i)}}}return xo++,t.then(Sc,Sc),t}function Sc(){if(--xo===0&&Fi!==null){li!==null&&(li.status="fulfilled");var e=Fi;Fi=null,si=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pm(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Ac=h.S;h.S=function(e,t){rd=Xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nm(e,t),Ac!==null&&Ac(e,t)};var Nn=u(null);function ko(){var e=Nn.current;return e!==null?e:ce.pooledCache}function Va(e,t){t===null?W(Nn,Nn.current):W(Nn,t.pool)}function Tc(){var e=ko();return e===null?null:{parent:Ce._currentValue,pool:e}}var ci=Error(m(460)),No=Error(m(474)),Qa=Error(m(542)),Ya={then:function(){}};function wc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ot,Ot),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wc(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=ce,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wc(e),e}throw Mn=t,ci}}function Pn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Mn=n,ci):n}}var Mn=null;function Ec(){if(Mn===null)throw Error(m(459));var e=Mn;return Mn=null,e}function Wc(e){if(e===ci||e===Qa)throw Error(m(483))}var ui=null,Vi=0;function Ka(e){var t=Vi;return Vi+=1,ui===null&&(ui=[]),Lc(ui,e,t)}function Qi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xa(e,t){throw t.$$typeof===me?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function i(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function a(d,c){return d=kt(d,c),d.index=0,d.sibling=null,d}function r(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=67108866,c):p):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,c,p,b){return c===null||c.tag!==6?(c=Ao(p,d.mode,b),c.return=d,c):(c=a(c,p),c.return=d,c)}function l(d,c,p,b){var O=p.type;return O===Ne?y(d,c,p.props.children,b,p.key):c!==null&&(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===qe&&Pn(O)===c.type)?(c=a(c,p.props),Qi(c,p),c.return=d,c):(c=za(p.type,p.key,p.props,null,d.mode,b),Qi(c,p),c.return=d,c)}function g(d,c,p,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=To(p,d.mode,b),c.return=d,c):(c=a(c,p.children||[]),c.return=d,c)}function y(d,c,p,b,O){return c===null||c.tag!==7?(c=Rn(p,d.mode,b,O),c.return=d,c):(c=a(c,p),c.return=d,c)}function C(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ao(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ye:return p=za(c.type,c.key,c.props,null,d.mode,p),Qi(p,c),p.return=d,p;case Ue:return c=To(c,d.mode,p),c.return=d,c;case qe:return c=Pn(c),C(d,c,p)}if(yt(c)||Be(c))return c=Rn(c,d.mode,p,null),c.return=d,c;if(typeof c.then=="function")return C(d,Ka(c),p);if(c.$$typeof===xe)return C(d,Fa(d,c),p);Xa(d,c)}return null}function v(d,c,p,b){var O=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return O!==null?null:s(d,c,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ye:return p.key===O?l(d,c,p,b):null;case Ue:return p.key===O?g(d,c,p,b):null;case qe:return p=Pn(p),v(d,c,p,b)}if(yt(p)||Be(p))return O!==null?null:y(d,c,p,b,null);if(typeof p.then=="function")return v(d,c,Ka(p),b);if(p.$$typeof===xe)return v(d,c,Fa(d,p),b);Xa(d,p)}return null}function f(d,c,p,b,O){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(p)||null,s(c,d,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ye:return d=d.get(b.key===null?p:b.key)||null,l(c,d,b,O);case Ue:return d=d.get(b.key===null?p:b.key)||null,g(c,d,b,O);case qe:return b=Pn(b),f(d,c,p,b,O)}if(yt(b)||Be(b))return d=d.get(p)||null,y(c,d,b,O,null);if(typeof b.then=="function")return f(d,c,p,Ka(b),O);if(b.$$typeof===xe)return f(d,c,p,Fa(c,b),O);Xa(c,b)}return null}function D(d,c,p,b){for(var O=null,J=null,R=c,H=c=0,Q=null;R!==null&&H<p.length;H++){R.index>H?(Q=R,R=null):Q=R.sibling;var $=v(d,R,p[H],b);if($===null){R===null&&(R=Q);break}e&&R&&$.alternate===null&&t(d,R),c=r($,c,H),J===null?O=$:J.sibling=$,J=$,R=Q}if(H===p.length)return n(d,R),K&&Nt(d,H),O;if(R===null){for(;H<p.length;H++)R=C(d,p[H],b),R!==null&&(c=r(R,c,H),J===null?O=R:J.sibling=R,J=R);return K&&Nt(d,H),O}for(R=i(R);H<p.length;H++)Q=f(R,d,H,p[H],b),Q!==null&&(e&&Q.alternate!==null&&R.delete(Q.key===null?H:Q.key),c=r(Q,c,H),J===null?O=Q:J.sibling=Q,J=Q);return e&&R.forEach(function(Sn){return t(d,Sn)}),K&&Nt(d,H),O}function k(d,c,p,b){if(p==null)throw Error(m(151));for(var O=null,J=null,R=c,H=c=0,Q=null,$=p.next();R!==null&&!$.done;H++,$=p.next()){R.index>H?(Q=R,R=null):Q=R.sibling;var Sn=v(d,R,$.value,b);if(Sn===null){R===null&&(R=Q);break}e&&R&&Sn.alternate===null&&t(d,R),c=r(Sn,c,H),J===null?O=Sn:J.sibling=Sn,J=Sn,R=Q}if($.done)return n(d,R),K&&Nt(d,H),O;if(R===null){for(;!$.done;H++,$=p.next())$=C(d,$.value,b),$!==null&&(c=r($,c,H),J===null?O=$:J.sibling=$,J=$);return K&&Nt(d,H),O}for(R=i(R);!$.done;H++,$=p.next())$=f(R,d,H,$.value,b),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?H:$.key),c=r($,c,H),J===null?O=$:J.sibling=$,J=$);return e&&R.forEach(function(Vg){return t(d,Vg)}),K&&Nt(d,H),O}function se(d,c,p,b){if(typeof p=="object"&&p!==null&&p.type===Ne&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ye:e:{for(var O=p.key;c!==null;){if(c.key===O){if(O=p.type,O===Ne){if(c.tag===7){n(d,c.sibling),b=a(c,p.props.children),b.return=d,d=b;break e}}else if(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===qe&&Pn(O)===c.type){n(d,c.sibling),b=a(c,p.props),Qi(b,p),b.return=d,d=b;break e}n(d,c);break}else t(d,c);c=c.sibling}p.type===Ne?(b=Rn(p.props.children,d.mode,b,p.key),b.return=d,d=b):(b=za(p.type,p.key,p.props,null,d.mode,b),Qi(b,p),b.return=d,d=b)}return o(d);case Ue:e:{for(O=p.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),b=a(c,p.children||[]),b.return=d,d=b;break e}else{n(d,c);break}else t(d,c);c=c.sibling}b=To(p,d.mode,b),b.return=d,d=b}return o(d);case qe:return p=Pn(p),se(d,c,p,b)}if(yt(p))return D(d,c,p,b);if(Be(p)){if(O=Be(p),typeof O!="function")throw Error(m(150));return p=O.call(p),k(d,c,p,b)}if(typeof p.then=="function")return se(d,c,Ka(p),b);if(p.$$typeof===xe)return se(d,c,Fa(d,p),b);Xa(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),b=a(c,p),b.return=d,d=b):(n(d,c),b=Ao(p,d.mode,b),b.return=d,d=b),o(d)):n(d,c)}return function(d,c,p,b){try{Vi=0;var O=se(d,c,p,b);return ui=null,O}catch(R){if(R===ci||R===Qa)throw R;var J=et(29,R,null,d.mode);return J.lanes=b,J.return=d,J}}}var Un=Dc(!0),Ic=Dc(!1),an=!1;function Po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Z&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Ha(e),pc(e,null,n),t}return Ba(e,i,t,n),Ha(e)}function Yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Cl(e,n)}}function Uo(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Go=!1;function Ki(){if(Go){var e=li;if(e!==null)throw e}}function Xi(e,t,n,i){Go=!1;var a=e.updateQueue;an=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,g=l.next;l.next=null,o===null?r=g:o.next=g,o=l;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=g:s.next=g,y.lastBaseUpdate=l))}if(r!==null){var C=a.baseState;o=0,y=g=l=null,s=r;do{var v=s.lane&-536870913,f=v!==s.lane;if(f?(V&v)===v:(i&v)===v){v!==0&&v===si&&(Go=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var D=e,k=s;v=t;var se=n;switch(k.tag){case 1:if(D=k.payload,typeof D=="function"){C=D.call(se,C,v);break e}C=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=k.payload,v=typeof D=="function"?D.call(se,C,v):D,v==null)break e;C=N({},C,v);break e;case 2:an=!0}}v=s.callback,v!==null&&(e.flags|=64,f&&(e.flags|=8192),f=a.callbacks,f===null?a.callbacks=[v]:f.push(v))}else f={lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(g=y=f,l=C):y=y.next=f,o|=v;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;f=s,s=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);y===null&&(l=C),a.baseState=l,a.firstBaseUpdate=g,a.lastBaseUpdate=y,r===null&&(a.shared.lanes=0),dn|=o,e.lanes=o,e.memoizedState=C}}function Rc(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function Oc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rc(n[e],t)}var di=u(null),Ja=u(0);function xc(e,t){e=Ft,W(Ja,e),W(di,t),Ft=e|t.baseLanes}function qo(){W(Ja,Ft),W(di,di.current)}function Bo(){Ft=Ja.current,A(di),A(Ja)}var tt=u(null),gt=null;function sn(e){var t=e.alternate;W(he,he.current&1),W(tt,e),gt===null&&(t===null||di.current!==null||t.memoizedState!==null)&&(gt=e)}function Ho(e){W(he,he.current),W(tt,e),gt===null&&(gt=e)}function kc(e){e.tag===22?(W(he,he.current),W(tt,e),gt===null&&(gt=e)):ln()}function ln(){W(he,he.current),W(tt,tt.current)}function nt(e){A(tt),gt===e&&(gt=null),A(he)}var he=u(0);function $a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Qs(n)||Ys(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ut=0,B=null,re=null,Se=null,Za=!1,pi=!1,Gn=!1,er=0,Ji=0,mi=null,Mm=0;function ve(){throw Error(m(321))}function zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function jo(e,t,n,i,a,r){return Ut=r,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,h.H=e===null||e.memoizedState===null?fu:as,Gn=!1,r=n(i,a),Gn=!1,pi&&(r=Pc(t,n,i,a)),Nc(e),r}function Nc(e){h.H=ea;var t=re!==null&&re.next!==null;if(Ut=0,Se=re=B=null,Za=!1,Ji=0,mi=null,t)throw Error(m(300));e===null||Ae||(e=e.dependencies,e!==null&&_a(e)&&(Ae=!0))}function Pc(e,t,n,i){B=e;var a=0;do{if(pi&&(mi=null),Ji=0,pi=!1,25<=a)throw Error(m(301));if(a+=1,Se=re=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}h.H=yu,r=t(n,i)}while(pi);return r}function Um(){var e=h.H,t=e.useState()[0];return t=typeof t.then=="function"?$i(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(B.flags|=1024),t}function _o(){var e=er!==0;return er=0,e}function Fo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vo(e){if(Za){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Za=!1}Ut=0,Se=re=B=null,pi=!1,Ji=er=0,mi=null}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?B.memoizedState=Se=e:Se=Se.next=e,Se}function be(){if(re===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Se===null?B.memoizedState:Se.next;if(t!==null)Se=t,re=e;else{if(e===null)throw B.alternate===null?Error(m(467)):Error(m(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Se===null?B.memoizedState=Se=e:Se=Se.next=e}return Se}function tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $i(e){var t=Ji;return Ji+=1,mi===null&&(mi=[]),e=Lc(mi,e,t),t=B,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,h.H=t===null||t.memoizedState===null?fu:as),e}function nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $i(e);if(e.$$typeof===xe)return Ie(e)}throw Error(m(438,String(e)))}function Qo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=B.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=tr(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=zn;return t.index++,n}function Gt(e,t){return typeof t=="function"?t(e):t}function ir(e){var t=be();return Yo(t,re,e)}function Yo(e,t,n){var i=e.queue;if(i===null)throw Error(m(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var s=o=null,l=null,g=t,y=!1;do{var C=g.lane&-536870913;if(C!==g.lane?(V&C)===C:(Ut&C)===C){var v=g.revertLane;if(v===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),C===si&&(y=!0);else if((Ut&v)===v){g=g.next,v===si&&(y=!0);continue}else C={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},l===null?(s=l=C,o=r):l=l.next=C,B.lanes|=v,dn|=v;C=g.action,Gn&&n(r,C),r=g.hasEagerState?g.eagerState:n(r,C)}else v={lane:C,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},l===null?(s=l=v,o=r):l=l.next=v,B.lanes|=C,dn|=C;g=g.next}while(g!==null&&g!==t);if(l===null?o=r:l.next=s,!Ze(r,e.memoizedState)&&(Ae=!0,y&&(n=li,n!==null)))throw n;e.memoizedState=r,e.baseState=o,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ko(e){var t=be(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);Ze(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Mc(e,t,n){var i=B,a=be(),r=K;if(r){if(n===void 0)throw Error(m(407));n=n()}else n=t();var o=!Ze((re||a).memoizedState,n);if(o&&(a.memoizedState=n,Ae=!0),a=a.queue,$o(qc.bind(null,i,a,e),[e]),a.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(i.flags|=2048,gi(9,{destroy:void 0},Gc.bind(null,i,a,n,t),null),ce===null)throw Error(m(349));r||(Ut&127)!==0||Uc(i,t,n)}return n}function Uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=tr(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gc(e,t,n,i){t.value=n,t.getSnapshot=i,Bc(t)&&Hc(e)}function qc(e,t,n){return n(function(){Bc(t)&&Hc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function Hc(e){var t=In(e,2);t!==null&&Qe(t,e,2)}function Xo(e){var t=Me();if(typeof e=="function"){var n=e;if(e=n(),Gn){Xt(!0);try{n()}finally{Xt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function zc(e,t,n,i){return e.baseState=n,Yo(e,re,typeof i=="function"?i:Gt)}function Gm(e,t,n,i,a){if(or(e))throw Error(m(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};h.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,jc(t,r)):(r.next=n.next,t.pending=n.next=r)}}function jc(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=h.T,o={};h.T=o;try{var s=n(a,i),l=h.S;l!==null&&l(o,s),_c(e,t,s)}catch(g){Jo(e,t,g)}finally{r!==null&&o.types!==null&&(r.types=o.types),h.T=r}}else try{r=n(a,i),_c(e,t,r)}catch(g){Jo(e,t,g)}}function _c(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Fc(e,t,i)},function(i){return Jo(e,t,i)}):Fc(e,t,n)}function Fc(e,t,n){t.status="fulfilled",t.value=n,Vc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,jc(e,n)))}function Jo(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Vc(t),t=t.next;while(t!==i)}e.action=null}function Vc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qc(e,t){return t}function Yc(e,t){if(K){var n=ce.formState;if(n!==null){e:{var i=B;if(K){if(de){t:{for(var a=de,r=mt;a.nodeType!==8;){if(!r){a=null;break t}if(a=vt(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){de=vt(a.nextSibling),i=a.data==="F!";break e}}tn(i)}i=!1}i&&(t=n[0])}}return n=Me(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qc,lastRenderedState:t},n.queue=i,n=mu.bind(null,B,i),i.dispatch=n,i=Xo(!1),r=is.bind(null,B,!1,i.queue),i=Me(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Gm.bind(null,B,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Kc(e){var t=be();return Xc(t,re,e)}function Xc(e,t,n){if(t=Yo(e,t,Qc)[0],e=ir(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=$i(t)}catch(o){throw o===ci?Qa:o}else i=t;t=be();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(B.flags|=2048,gi(9,{destroy:void 0},qm.bind(null,a,n),null)),[i,r,e]}function qm(e,t){e.action=t}function Jc(e){var t=be(),n=re;if(n!==null)return Xc(t,n,e);be(),t=t.memoizedState,n=be();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function gi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=B.updateQueue,t===null&&(t=tr(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function $c(){return be().memoizedState}function ar(e,t,n,i){var a=Me();B.flags|=e,a.memoizedState=gi(1|t,{destroy:void 0},n,i===void 0?null:i)}function rr(e,t,n,i){var a=be();i=i===void 0?null:i;var r=a.memoizedState.inst;re!==null&&i!==null&&zo(i,re.memoizedState.deps)?a.memoizedState=gi(t,r,n,i):(B.flags|=e,a.memoizedState=gi(1|t,r,n,i))}function Zc(e,t){ar(8390656,8,e,t)}function $o(e,t){rr(2048,8,e,t)}function Bm(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=tr(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function eu(e){var t=be().memoizedState;return Bm({ref:t,nextImpl:e}),function(){if((Z&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function tu(e,t){return rr(4,2,e,t)}function nu(e,t){return rr(4,4,e,t)}function iu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function au(e,t,n){n=n!=null?n.concat([e]):null,rr(4,4,iu.bind(null,t,e),n)}function Zo(){}function ru(e,t){var n=be();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&zo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function ou(e,t){var n=be();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&zo(t,i[1]))return i[0];if(i=e(),Gn){Xt(!0);try{e()}finally{Xt(!1)}}return n.memoizedState=[i,t],i}function es(e,t,n){return n===void 0||(Ut&1073741824)!==0&&(V&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sd(),B.lanes|=e,dn|=e,n)}function su(e,t,n,i){return Ze(n,t)?n:di.current!==null?(e=es(e,n,i),Ze(e,t)||(Ae=!0),e):(Ut&42)===0||(Ut&1073741824)!==0&&(V&261930)===0?(Ae=!0,e.memoizedState=n):(e=sd(),B.lanes|=e,dn|=e,t)}function lu(e,t,n,i,a){var r=L.p;L.p=r!==0&&8>r?r:8;var o=h.T,s={};h.T=s,is(e,!1,t,n);try{var l=a(),g=h.S;if(g!==null&&g(s,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var y=Pm(l,i);Zi(e,t,y,rt(e))}else Zi(e,t,i,rt(e))}catch(C){Zi(e,t,{then:function(){},status:"rejected",reason:C},rt())}finally{L.p=r,o!==null&&s.types!==null&&(o.types=s.types),h.T=o}}function Hm(){}function ts(e,t,n,i){if(e.tag!==5)throw Error(m(476));var a=cu(e).queue;lu(e,a,t,P,n===null?Hm:function(){return uu(e),n(i)})}function cu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uu(e){var t=cu(e);t.next===null&&(t=e.alternate.memoizedState),Zi(e,t.next.queue,{},rt())}function ns(){return Ie(fa)}function du(){return be().memoizedState}function pu(){return be().memoizedState}function zm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=rt();e=rn(n);var i=on(t,e,n);i!==null&&(Qe(i,t,n),Yi(i,t,n)),t={cache:Oo()},e.payload=t;return}t=t.return}}function jm(e,t,n){var i=rt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},or(e)?gu(t,n):(n=Co(e,t,n,i),n!==null&&(Qe(n,e,i),vu(n,t,i)))}function mu(e,t,n){var i=rt();Zi(e,t,n,i)}function Zi(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(or(e))gu(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,s=r(o,n);if(a.hasEagerState=!0,a.eagerState=s,Ze(s,o))return Ba(e,t,a,0),ce===null&&qa(),!1}catch{}if(n=Co(e,t,a,i),n!==null)return Qe(n,e,i),vu(n,t,i),!0}return!1}function is(e,t,n,i){if(i={lane:2,revertLane:Ps(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},or(e)){if(t)throw Error(m(479))}else t=Co(e,n,i,2),t!==null&&Qe(t,e,2)}function or(e){var t=e.alternate;return e===B||t!==null&&t===B}function gu(e,t){pi=Za=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vu(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Cl(e,n)}}var ea={readContext:Ie,use:nr,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};ea.useEffectEvent=ve;var fu={readContext:Ie,use:nr,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Zc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ar(4194308,4,iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ar(4194308,4,e,t)},useInsertionEffect:function(e,t){ar(4,2,e,t)},useMemo:function(e,t){var n=Me();t=t===void 0?null:t;var i=e();if(Gn){Xt(!0);try{e()}finally{Xt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Me();if(n!==void 0){var a=n(t);if(Gn){Xt(!0);try{n(t)}finally{Xt(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=jm.bind(null,B,e),[i.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=mu.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zo,useDeferredValue:function(e,t){var n=Me();return es(n,e,t)},useTransition:function(){var e=Xo(!1);return e=lu.bind(null,B,e.queue,!0,!1),Me().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=B,a=Me();if(K){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),ce===null)throw Error(m(349));(V&127)!==0||Uc(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Zc(qc.bind(null,i,r,e),[e]),i.flags|=2048,gi(9,{destroy:void 0},Gc.bind(null,i,r,n,t),null),n},useId:function(){var e=Me(),t=ce.identifierPrefix;if(K){var n=Lt,i=wt;n=(i&~(1<<32-$e(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Mm++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ns,useFormState:Yc,useActionState:Yc,useOptimistic:function(e){var t=Me();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=is.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Qo,useCacheRefresh:function(){return Me().memoizedState=zm.bind(null,B)},useEffectEvent:function(e){var t=Me(),n={impl:e};return t.memoizedState=n,function(){if((Z&2)!==0)throw Error(m(440));return n.impl.apply(void 0,arguments)}}},as={readContext:Ie,use:nr,useCallback:ru,useContext:Ie,useEffect:$o,useImperativeHandle:au,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:ou,useReducer:ir,useRef:$c,useState:function(){return ir(Gt)},useDebugValue:Zo,useDeferredValue:function(e,t){var n=be();return su(n,re.memoizedState,e,t)},useTransition:function(){var e=ir(Gt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:$i(e),t]},useSyncExternalStore:Mc,useId:du,useHostTransitionStatus:ns,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var n=be();return zc(n,re,e,t)},useMemoCache:Qo,useCacheRefresh:pu};as.useEffectEvent=eu;var yu={readContext:Ie,use:nr,useCallback:ru,useContext:Ie,useEffect:$o,useImperativeHandle:au,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:ou,useReducer:Ko,useRef:$c,useState:function(){return Ko(Gt)},useDebugValue:Zo,useDeferredValue:function(e,t){var n=be();return re===null?es(n,e,t):su(n,re.memoizedState,e,t)},useTransition:function(){var e=Ko(Gt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:$i(e),t]},useSyncExternalStore:Mc,useId:du,useHostTransitionStatus:ns,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,t){var n=be();return re!==null?zc(n,re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Qo,useCacheRefresh:pu};yu.useEffectEvent=eu;function rs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var os={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=rt(),a=rn(i);a.payload=t,n!=null&&(a.callback=n),t=on(e,a,i),t!==null&&(Qe(t,e,i),Yi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=rt(),a=rn(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=on(e,a,i),t!==null&&(Qe(t,e,i),Yi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),i=rn(n);i.tag=2,t!=null&&(i.callback=t),t=on(e,i,n),t!==null&&(Qe(t,e,n),Yi(t,e,n))}};function hu(e,t,n,i,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!Bi(n,i)||!Bi(a,r):!0}function bu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function qn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=N({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Cu(e){Ga(e)}function Su(e){console.error(e)}function Au(e){Ga(e)}function sr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Tu(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ss(e,t,n){return n=rn(n),n.tag=3,n.payload={element:null},n.callback=function(){sr(e,t)},n}function wu(e){return e=rn(e),e.tag=3,e}function Lu(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Tu(t,n,i)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Tu(t,n,i),typeof a!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function _m(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&oi(t,n,a,!0),n=tt.current,n!==null){switch(n.tag){case 31:case 13:return gt===null?br():n.alternate===null&&fe===0&&(fe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Ya?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),xs(e,i,a)),!1;case 22:return n.flags|=65536,i===Ya?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),xs(e,i,a)),!1}throw Error(m(435,n.tag))}return xs(e,i,a),br(),!1}if(K)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Eo&&(e=Error(m(422),{cause:i}),ji(ut(e,n)))):(i!==Eo&&(t=Error(m(423),{cause:i}),ji(ut(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ut(i,n),a=ss(e.stateNode,i,a),Uo(e,a),fe!==4&&(fe=2)),!1;var r=Error(m(520),{cause:i});if(r=ut(r,n),la===null?la=[r]:la.push(r),fe!==4&&(fe=2),t===null)return!0;i=ut(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ss(n.stateNode,i,e),Uo(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=wu(a),Lu(a,e,n,i),Uo(n,a),!1}n=n.return}while(n!==null);return!1}var ls=Error(m(461)),Ae=!1;function Re(e,t,n,i){t.child=e===null?Ic(t,null,n,i):Un(t,e.child,n,i)}function Eu(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var o={};for(var s in i)s!=="ref"&&(o[s]=i[s])}else o=i;return kn(t),i=jo(e,t,n,o,r,a),s=_o(),e!==null&&!Ae?(Fo(e,t,a),qt(e,t,a)):(K&&s&&wo(t),t.flags|=1,Re(e,t,i,a),t.child)}function Wu(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!So(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Du(e,t,r,i,a)):(e=za(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!fs(e,a)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(o,i)&&e.ref===t.ref)return qt(e,t,a)}return t.flags|=1,e=kt(r,i),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(Bi(r,i)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=i=r,fs(e,a))(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,qt(e,t,a)}return cs(e,t,n,i,a)}function Iu(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return Ru(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Va(t,r!==null?r.cachePool:null),r!==null?xc(t,r):qo(),kc(t);else return i=t.lanes=536870912,Ru(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Va(t,r.cachePool),xc(t,r),ln(),t.memoizedState=null):(e!==null&&Va(t,null),qo(),ln());return Re(e,t,a,n),t.child}function ta(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ru(e,t,n,i,a){var r=ko();return r=r===null?null:{parent:Ce._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Va(t,null),qo(),kc(t),e!==null&&oi(e,t,i,!0),t.childLanes=a,null}function lr(e,t){return t=ur({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ou(e,t,n){return Un(t,e.child,null,n),e=lr(t,t.pendingProps),e.flags|=2,nt(t),t.memoizedState=null,e}function Fm(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(K){if(i.mode==="hidden")return e=lr(t,i),t.lanes=536870912,ta(null,e);if(Ho(t),(e=de)?(e=jd(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zt!==null?{id:wt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},n=gc(e),n.return=t,t.child=n,De=t,de=null)):e=null,e===null)throw tn(t);return t.lanes=536870912,null}return lr(t,i)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Ho(t),a)if(t.flags&256)t.flags&=-257,t=Ou(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Ae||oi(e,t,n,!1),a=(n&e.childLanes)!==0,Ae||a){if(i=ce,i!==null&&(o=Sl(i,n),o!==0&&o!==r.retryLane))throw r.retryLane=o,In(e,o),Qe(i,e,o),ls;br(),t=Ou(e,t,n)}else e=r.treeContext,de=vt(o.nextSibling),De=t,K=!0,en=null,mt=!1,e!==null&&yc(t,e),t=lr(t,i),t.flags|=4096;return t}return e=kt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(m(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function cs(e,t,n,i,a){return kn(t),n=jo(e,t,n,i,void 0,a),i=_o(),e!==null&&!Ae?(Fo(e,t,a),qt(e,t,a)):(K&&i&&wo(t),t.flags|=1,Re(e,t,n,a),t.child)}function xu(e,t,n,i,a,r){return kn(t),t.updateQueue=null,n=Pc(t,i,n,a),Nc(e),i=_o(),e!==null&&!Ae?(Fo(e,t,r),qt(e,t,r)):(K&&i&&wo(t),t.flags|=1,Re(e,t,n,r),t.child)}function ku(e,t,n,i,a){if(kn(t),t.stateNode===null){var r=ni,o=n.contextType;typeof o=="object"&&o!==null&&(r=Ie(o)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=os,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Po(t),o=n.contextType,r.context=typeof o=="object"&&o!==null?Ie(o):ni,r.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(rs(t,n,o,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&os.enqueueReplaceState(r,r.state,null),Xi(t,i,r,a),Ki(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,l=qn(n,s);r.props=l;var g=r.context,y=n.contextType;o=ni,typeof y=="object"&&y!==null&&(o=Ie(y));var C=n.getDerivedStateFromProps;y=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,y||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||g!==o)&&bu(t,r,i,o),an=!1;var v=t.memoizedState;r.state=v,Xi(t,i,r,a),Ki(),g=t.memoizedState,s||v!==g||an?(typeof C=="function"&&(rs(t,n,C,i),g=t.memoizedState),(l=an||hu(t,n,l,i,v,g,o))?(y||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=g),r.props=i,r.state=g,r.context=o,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Mo(e,t),o=t.memoizedProps,y=qn(n,o),r.props=y,C=t.pendingProps,v=r.context,g=n.contextType,l=ni,typeof g=="object"&&g!==null&&(l=Ie(g)),s=n.getDerivedStateFromProps,(g=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==C||v!==l)&&bu(t,r,i,l),an=!1,v=t.memoizedState,r.state=v,Xi(t,i,r,a),Ki();var f=t.memoizedState;o!==C||v!==f||an||e!==null&&e.dependencies!==null&&_a(e.dependencies)?(typeof s=="function"&&(rs(t,n,s,i),f=t.memoizedState),(y=an||hu(t,n,y,i,v,f,l)||e!==null&&e.dependencies!==null&&_a(e.dependencies))?(g||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,f,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,f,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),r.props=i,r.state=f,r.context=l,i=y):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,cr(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Un(t,e.child,null,a),t.child=Un(t,null,n,a)):Re(e,t,n,a),t.memoizedState=r.state,e=t.child):e=qt(e,t,a),e}function Nu(e,t,n,i){return On(),t.flags|=256,Re(e,t,n,i),t.child}var us={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ds(e){return{baseLanes:e,cachePool:Tc()}}function ps(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=at),e}function Pu(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(he.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(K){if(a?sn(t):ln(),(e=de)?(e=jd(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zt!==null?{id:wt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},n=gc(e),n.return=t,t.child=n,De=t,de=null)):e=null,e===null)throw tn(t);return Ys(e)?t.lanes=32:t.lanes=536870912,null}var s=i.children;return i=i.fallback,a?(ln(),a=t.mode,s=ur({mode:"hidden",children:s},a),i=Rn(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=ds(n),i.childLanes=ps(e,o,n),t.memoizedState=us,ta(null,i)):(sn(t),ms(t,s))}var l=e.memoizedState;if(l!==null&&(s=l.dehydrated,s!==null)){if(r)t.flags&256?(sn(t),t.flags&=-257,t=gs(e,t,n)):t.memoizedState!==null?(ln(),t.child=e.child,t.flags|=128,t=null):(ln(),s=i.fallback,a=t.mode,i=ur({mode:"visible",children:i.children},a),s=Rn(s,a,n,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Un(t,e.child,null,n),i=t.child,i.memoizedState=ds(n),i.childLanes=ps(e,o,n),t.memoizedState=us,t=ta(null,i));else if(sn(t),Ys(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var g=o.dgst;o=g,i=Error(m(419)),i.stack="",i.digest=o,ji({value:i,source:null,stack:null}),t=gs(e,t,n)}else if(Ae||oi(e,t,n,!1),o=(n&e.childLanes)!==0,Ae||o){if(o=ce,o!==null&&(i=Sl(o,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,In(e,i),Qe(o,e,i),ls;Qs(s)||br(),t=gs(e,t,n)}else Qs(s)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,de=vt(s.nextSibling),De=t,K=!0,en=null,mt=!1,e!==null&&yc(t,e),t=ms(t,i.children),t.flags|=4096);return t}return a?(ln(),s=i.fallback,a=t.mode,l=e.child,g=l.sibling,i=kt(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,g!==null?s=kt(g,s):(s=Rn(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,ta(null,i),i=t.child,s=e.child.memoizedState,s===null?s=ds(n):(a=s.cachePool,a!==null?(l=Ce._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Tc(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=ps(e,o,n),t.memoizedState=us,ta(e.child,i)):(sn(t),n=e.child,e=n.sibling,n=kt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function ms(e,t){return t=ur({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ur(e,t){return e=et(22,e,null,t),e.lanes=0,e}function gs(e,t,n){return Un(t,e.child,null,n),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Io(e.return,t,n)}function vs(e,t,n,i,a,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=a,o.treeForkCount=r)}function Uu(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var o=he.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,W(he,o),Re(e,t,i,n),i=K?zi:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&$a(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),vs(t,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&$a(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}vs(t,!0,n,null,r,i);break;case"together":vs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_a(e)))}function Vm(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),nn(t,Ce,e.memoizedState.cache),On();break;case 27:case 5:Wi(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ho(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(sn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Pu(e,t,n):(sn(t),e=qt(e,t,n),e!==null?e.sibling:null);sn(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(oi(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Uu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(he,he.current),i)break;return null;case 22:return t.lanes=0,Iu(e,t,n,t.pendingProps);case 24:nn(t,Ce,e.memoizedState.cache)}return qt(e,t,n)}function Gu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ae=!0;else{if(!fs(e,n)&&(t.flags&128)===0)return Ae=!1,Vm(e,t,n);Ae=(e.flags&131072)!==0}else Ae=!1,K&&(t.flags&1048576)!==0&&fc(t,zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Pn(t.elementType),t.type=e,typeof e=="function")So(e)?(i=qn(e,i),t.tag=1,t=ku(null,t,e,i,n)):(t.tag=0,t=cs(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===ot){t.tag=11,t=Eu(null,t,e,i,n);break e}else if(a===Y){t.tag=14,t=Wu(null,t,e,i,n);break e}}throw t=It(e)||e,Error(m(306,t,""))}}return t;case 0:return cs(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=qn(i,t.pendingProps),ku(e,t,i,a,n);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(m(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Mo(e,t),Xi(t,i,null,n);var o=t.memoizedState;if(i=o.cache,nn(t,Ce,i),i!==r.cache&&Ro(t,[Ce],n,!0),Ki(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Nu(e,t,i,n);break e}else if(i!==a){a=ut(Error(m(424)),t),ji(a),t=Nu(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,de=vt(e.firstChild),De=t,K=!0,en=null,mt=!0,n=Ic(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),i===a){t=qt(e,t,n);break e}Re(e,t,i,n)}t=t.child}return t;case 26:return cr(e,t),e===null?(n=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(n=t.type,e=t.pendingProps,i=Er(z.current).createElement(n),i[We]=t,i[He]=e,Oe(i,n,e),Le(i),t.stateNode=i):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wi(t),e===null&&K&&(i=t.stateNode=Vd(t.type,t.pendingProps,z.current),De=t,mt=!0,a=de,fn(t.type)?(Ks=a,de=vt(i.firstChild)):de=a),Re(e,t,t.pendingProps.children,n),cr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((a=i=de)&&(i=Ag(i,t.type,t.pendingProps,mt),i!==null?(t.stateNode=i,De=t,de=vt(i.firstChild),mt=!1,a=!0):a=!1),a||tn(t)),Wi(t),a=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,_s(a,r)?i=null:o!==null&&_s(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=jo(e,t,Um,null,null,n),fa._currentValue=a),cr(e,t),Re(e,t,i,n),t.child;case 6:return e===null&&K&&((e=n=de)&&(n=Tg(n,t.pendingProps,mt),n!==null?(t.stateNode=n,De=t,de=null,e=!0):e=!1),e||tn(t)),null;case 13:return Pu(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Un(t,null,i,n):Re(e,t,i,n),t.child;case 11:return Eu(e,t,t.type,t.pendingProps,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,nn(t,t.type,i.value),Re(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,kn(t),a=Ie(a),i=i(a),t.flags|=1,Re(e,t,i,n),t.child;case 14:return Wu(e,t,t.type,t.pendingProps,n);case 15:return Du(e,t,t.type,t.pendingProps,n);case 19:return Uu(e,t,n);case 31:return Fm(e,t,n);case 22:return Iu(e,t,n,t.pendingProps);case 24:return kn(t),i=Ie(Ce),e===null?(a=ko(),a===null&&(a=ce,r=Oo(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},Po(t),nn(t,Ce,a)):((e.lanes&n)!==0&&(Mo(e,t),Xi(t,null,null,n),Ki()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),nn(t,Ce,i)):(i=r.cache,nn(t,Ce,i),i!==a.cache&&Ro(t,[Ce],n,!0))),Re(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Bt(e){e.flags|=4}function ys(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(dd())e.flags|=8192;else throw Mn=Ya,No}else e.flags&=-16777217}function qu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ep(t))if(dd())e.flags|=8192;else throw Mn=Ya,No}function dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hl():536870912,e.lanes|=t,hi|=t)}function na(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Qm(e,t,n){var i=t.pendingProps;switch(Lo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Mt(Ce),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ri(t)?Bt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wo())),pe(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(Bt(t),r!==null?(pe(t),qu(t,r)):(pe(t),ys(t,a,null,i,n))):r?r!==e.memoizedState?(Bt(t),pe(t),qu(t,r)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bt(t),pe(t),ys(t,a,e,i,n)),null;case 27:if(Aa(t),n=z.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bt(t);else{if(!i){if(t.stateNode===null)throw Error(m(166));return pe(t),null}e=I.current,ri(t)?hc(t):(e=Vd(a,i,n),t.stateNode=e,Bt(t))}return pe(t),null;case 5:if(Aa(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bt(t);else{if(!i){if(t.stateNode===null)throw Error(m(166));return pe(t),null}if(r=I.current,ri(t))hc(t);else{var o=Er(z.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(a,{is:i.is}):o.createElement(a)}}r[We]=t,r[He]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(Oe(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bt(t)}}return pe(t),ys(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(m(166));if(e=z.current,ri(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=De,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[We]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Pd(e.nodeValue,n)),e||tn(t,!0)}else e=Er(e).createTextNode(i),e[We]=t,t.stateNode=e}return pe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ri(t),n!==null){if(e===null){if(!i)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[We]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else n=Wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(nt(t),t):(nt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ri(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(m(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[We]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),a=!1}else a=Wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(nt(t),t):(nt(t),null)}return nt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),dr(t,t.updateQueue),pe(t),null);case 4:return ye(),e===null&&qs(t.stateNode.containerInfo),pe(t),null;case 10:return Mt(t.type),pe(t),null;case 19:if(A(he),i=t.memoizedState,i===null)return pe(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)na(i,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=$a(e),r!==null){for(t.flags|=128,na(i,!1),e=r.updateQueue,t.updateQueue=e,dr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mc(n,e),n=n.sibling;return W(he,he.current&1|2),K&&Nt(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Xe()>fr&&(t.flags|=128,a=!0,na(i,!1),t.lanes=4194304)}else{if(!a)if(e=$a(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,dr(t,e),na(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!K)return pe(t),null}else 2*Xe()-i.renderingStartTime>fr&&n!==536870912&&(t.flags|=128,a=!0,na(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Xe(),e.sibling=null,n=he.current,W(he,a?n&1|2:n&1),K&&Nt(t,i.treeForkCount),e):(pe(t),null);case 22:case 23:return nt(t),Bo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),n=t.updateQueue,n!==null&&dr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&A(Nn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Mt(Ce),pe(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Ym(e,t){switch(Lo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mt(Ce),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Aa(t),null;case 31:if(t.memoizedState!==null){if(nt(t),t.alternate===null)throw Error(m(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(he),null;case 4:return ye(),null;case 10:return Mt(t.type),null;case 22:case 23:return nt(t),Bo(),e!==null&&A(Nn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Mt(Ce),null;case 25:return null;default:return null}}function Bu(e,t){switch(Lo(t),t.tag){case 3:Mt(Ce),ye();break;case 26:case 27:case 5:Aa(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&nt(t);break;case 13:nt(t);break;case 19:A(he);break;case 10:Mt(t.type);break;case 22:case 23:nt(t),Bo(),e!==null&&A(Nn);break;case 24:Mt(Ce)}}function ia(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,o=n.inst;i=r(),o.destroy=i}n=n.next}while(n!==a)}}catch(s){ie(t,t.return,s)}}function cn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var o=i.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,a=t;var l=n,g=s;try{g()}catch(y){ie(a,l,y)}}}i=i.next}while(i!==r)}}catch(y){ie(t,t.return,y)}}function Hu(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Oc(t,n)}catch(i){ie(e,e.return,i)}}}function zu(e,t,n){n.props=qn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ie(e,t,i)}}function aa(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ie(e,t,a)}}function Et(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ie(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ie(e,t,a)}else n.current=null}function ju(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ie(e,e.return,a)}}function hs(e,t,n){try{var i=e.stateNode;fg(i,e.type,n,t),i[He]=t}catch(a){ie(e,e.return,a)}}function _u(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fn(e.type)||e.tag===4}function bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ot));else if(i!==4&&(i===27&&fn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}function pr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&fn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pr(e,t,n),e=e.sibling;e!==null;)pr(e,t,n),e=e.sibling}function Fu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Oe(t,i,n),t[We]=e,t[He]=n}catch(r){ie(e,e.return,r)}}var Ht=!1,Te=!1,Ss=!1,Vu=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Km(e,t){if(e=e.containerInfo,zs=kr,e=ac(e),go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,g=0,y=0,C=e,v=null;t:for(;;){for(var f;C!==n||a!==0&&C.nodeType!==3||(s=o+a),C!==r||i!==0&&C.nodeType!==3||(l=o+i),C.nodeType===3&&(o+=C.nodeValue.length),(f=C.firstChild)!==null;)v=C,C=f;for(;;){if(C===e)break t;if(v===n&&++g===a&&(s=o),v===r&&++y===i&&(l=o),(f=C.nextSibling)!==null)break;C=v,v=C.parentNode}C=f}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(js={focusedElem:e,selectionRange:n},kr=!1,Ee=t;Ee!==null;)if(t=Ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ee=e;else for(;Ee!==null;){switch(t=Ee,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var D=qn(n.type,a);e=i.getSnapshotBeforeUpdate(D,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(k){ie(n,n.return,k)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,Ee=e;break}Ee=t.return}}function Qu(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:jt(e,n),i&4&&ia(5,n);break;case 1:if(jt(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ie(n,n.return,o)}else{var a=qn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ie(n,n.return,o)}}i&64&&Hu(n),i&512&&aa(n,n.return);break;case 3:if(jt(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Oc(e,t)}catch(o){ie(n,n.return,o)}}break;case 27:t===null&&i&4&&Fu(n);case 26:case 5:jt(e,n),t===null&&i&4&&ju(n),i&512&&aa(n,n.return);break;case 12:jt(e,n);break;case 31:jt(e,n),i&4&&Xu(e,n);break;case 13:jt(e,n),i&4&&Ju(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ag.bind(null,n),wg(e,n))));break;case 22:if(i=n.memoizedState!==null||Ht,!i){t=t!==null&&t.memoizedState!==null||Te,a=Ht;var r=Te;Ht=i,(Te=t)&&!r?_t(e,n,(n.subtreeFlags&8772)!==0):jt(e,n),Ht=a,Te=r}break;case 30:break;default:jt(e,n)}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,je=!1;function zt(e,t,n){for(n=n.child;n!==null;)Ku(e,t,n),n=n.sibling}function Ku(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Di,n)}catch{}switch(n.tag){case 26:Te||Et(n,t),zt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Te||Et(n,t);var i=ge,a=je;fn(n.type)&&(ge=n.stateNode,je=!1),zt(e,t,n),ma(n.stateNode),ge=i,je=a;break;case 5:Te||Et(n,t);case 6:if(i=ge,a=je,ge=null,zt(e,t,n),ge=i,je=a,ge!==null)if(je)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(n.stateNode)}catch(r){ie(n,t,r)}else try{ge.removeChild(n.stateNode)}catch(r){ie(n,t,r)}break;case 18:ge!==null&&(je?(e=ge,Hd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ei(e)):Hd(ge,n.stateNode));break;case 4:i=ge,a=je,ge=n.stateNode.containerInfo,je=!0,zt(e,t,n),ge=i,je=a;break;case 0:case 11:case 14:case 15:cn(2,n,t),Te||cn(4,n,t),zt(e,t,n);break;case 1:Te||(Et(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&zu(n,t,i)),zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:Te=(i=Te)||n.memoizedState!==null,zt(e,t,n),Te=i;break;default:zt(e,t,n)}}function Xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(n){ie(t,t.return,n)}}}function Ju(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(n){ie(t,t.return,n)}}function Xm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vu),t;default:throw Error(m(435,e.tag))}}function mr(e,t){var n=Xm(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=rg.bind(null,e,i);i.then(a,a)}})}function _e(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(fn(s.type)){ge=s.stateNode,je=!1;break e}break;case 5:ge=s.stateNode,je=!1;break e;case 3:case 4:ge=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(ge===null)throw Error(m(160));Ku(r,o,a),ge=null,je=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$u(t,e),t=t.sibling}var bt=null;function $u(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_e(t,e),Fe(e),i&4&&(cn(3,e,e.return),ia(3,e),cn(5,e,e.return));break;case 1:_e(t,e),Fe(e),i&512&&(Te||n===null||Et(n,n.return)),i&64&&Ht&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=bt;if(_e(t,e),Fe(e),i&512&&(Te||n===null||Et(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Oi]||r[We]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Oe(r,i,n),r[We]=e,Le(r),i=r;break e;case"link":var o=$d("link","href",a).get(i+(n.href||""));if(o){for(var s=0;s<o.length;s++)if(r=o[s],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break t}}r=a.createElement(i),Oe(r,i,n),a.head.appendChild(r);break;case"meta":if(o=$d("meta","content",a).get(i+(n.content||""))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(s,1);break t}}r=a.createElement(i),Oe(r,i,n),a.head.appendChild(r);break;default:throw Error(m(468,i))}r[We]=e,Le(r),i=r}e.stateNode=i}else Zd(a,e.type,e.stateNode);else e.stateNode=Jd(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Zd(a,e.type,e.stateNode):Jd(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&hs(e,e.memoizedProps,n.memoizedProps)}break;case 27:_e(t,e),Fe(e),i&512&&(Te||n===null||Et(n,n.return)),n!==null&&i&4&&hs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_e(t,e),Fe(e),i&512&&(Te||n===null||Et(n,n.return)),e.flags&32){a=e.stateNode;try{Kn(a,"")}catch(D){ie(e,e.return,D)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,hs(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Ss=!0);break;case 6:if(_e(t,e),Fe(e),i&4){if(e.stateNode===null)throw Error(m(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(D){ie(e,e.return,D)}}break;case 3:if(Ir=null,a=bt,bt=Wr(t.containerInfo),_e(t,e),bt=a,Fe(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(D){ie(e,e.return,D)}Ss&&(Ss=!1,Zu(e));break;case 4:i=bt,bt=Wr(e.stateNode.containerInfo),_e(t,e),Fe(e),bt=i;break;case 12:_e(t,e),Fe(e);break;case 31:_e(t,e),Fe(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mr(e,i)));break;case 13:_e(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vr=Xe()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mr(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,g=Ht,y=Te;if(Ht=g||a,Te=y||l,_e(t,e),Te=y,Ht=g,Fe(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Ht||Te||Bn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=l.stateNode;var C=l.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(D){ie(l,l.return,D)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(D){ie(l,l.return,D)}}}else if(t.tag===18){if(n===null){l=t;try{var f=l.stateNode;a?zd(f,!0):zd(l.stateNode,!1)}catch(D){ie(l,l.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,mr(e,n))));break;case 19:_e(t,e),Fe(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mr(e,i)));break;case 30:break;case 21:break;default:_e(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_u(i)){n=i;break}i=i.return}if(n==null)throw Error(m(160));switch(n.tag){case 27:var a=n.stateNode,r=bs(e);pr(e,r,a);break;case 5:var o=n.stateNode;n.flags&32&&(Kn(o,""),n.flags&=-33);var s=bs(e);pr(e,s,o);break;case 3:case 4:var l=n.stateNode.containerInfo,g=bs(e);Cs(e,g,l);break;default:throw Error(m(161))}}catch(y){ie(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qu(e,t.alternate,t),t=t.sibling}function Bn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cn(4,t,t.return),Bn(t);break;case 1:Et(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&zu(t,t.return,n),Bn(t);break;case 27:ma(t.stateNode);case 26:case 5:Et(t,t.return),Bn(t);break;case 22:t.memoizedState===null&&Bn(t);break;case 30:Bn(t);break;default:Bn(t)}e=e.sibling}}function _t(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:_t(a,r,n),ia(4,r);break;case 1:if(_t(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){ie(i,i.return,g)}if(i=r,a=i.updateQueue,a!==null){var s=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Rc(l[a],s)}catch(g){ie(i,i.return,g)}}n&&o&64&&Hu(r),aa(r,r.return);break;case 27:Fu(r);case 26:case 5:_t(a,r,n),n&&i===null&&o&4&&ju(r),aa(r,r.return);break;case 12:_t(a,r,n);break;case 31:_t(a,r,n),n&&o&4&&Xu(a,r);break;case 13:_t(a,r,n),n&&o&4&&Ju(a,r);break;case 22:r.memoizedState===null&&_t(a,r,n),aa(r,r.return);break;case 30:break;default:_t(a,r,n)}t=t.sibling}}function As(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&_i(n))}function Ts(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_i(e))}function Ct(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ed(e,t,n,i),t=t.sibling}function ed(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ct(e,t,n,i),a&2048&&ia(9,t);break;case 1:Ct(e,t,n,i);break;case 3:Ct(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_i(e)));break;case 12:if(a&2048){Ct(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,s=r.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ie(t,t.return,l)}}else Ct(e,t,n,i);break;case 31:Ct(e,t,n,i);break;case 13:Ct(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Ct(e,t,n,i):ra(e,t):r._visibility&2?Ct(e,t,n,i):(r._visibility|=2,vi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&As(o,t);break;case 24:Ct(e,t,n,i),a&2048&&Ts(t.alternate,t);break;default:Ct(e,t,n,i)}}function vi(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,s=n,l=i,g=o.flags;switch(o.tag){case 0:case 11:case 15:vi(r,o,s,l,a),ia(8,o);break;case 23:break;case 22:var y=o.stateNode;o.memoizedState!==null?y._visibility&2?vi(r,o,s,l,a):ra(r,o):(y._visibility|=2,vi(r,o,s,l,a)),a&&g&2048&&As(o.alternate,o);break;case 24:vi(r,o,s,l,a),a&&g&2048&&Ts(o.alternate,o);break;default:vi(r,o,s,l,a)}t=t.sibling}}function ra(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:ra(n,i),a&2048&&As(i.alternate,i);break;case 24:ra(n,i),a&2048&&Ts(i.alternate,i);break;default:ra(n,i)}t=t.sibling}}var oa=8192;function fi(e,t,n){if(e.subtreeFlags&oa)for(e=e.child;e!==null;)td(e,t,n),e=e.sibling}function td(e,t,n){switch(e.tag){case 26:fi(e,t,n),e.flags&oa&&e.memoizedState!==null&&Mg(n,bt,e.memoizedState,e.memoizedProps);break;case 5:fi(e,t,n);break;case 3:case 4:var i=bt;bt=Wr(e.stateNode.containerInfo),fi(e,t,n),bt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=oa,oa=16777216,fi(e,t,n),oa=i):fi(e,t,n));break;default:fi(e,t,n)}}function nd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ee=i,ad(i,e)}nd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)id(e),e=e.sibling}function id(e){switch(e.tag){case 0:case 11:case 15:sa(e),e.flags&2048&&cn(9,e,e.return);break;case 3:sa(e);break;case 12:sa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gr(e)):sa(e);break;default:sa(e)}}function gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ee=i,ad(i,e)}nd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cn(8,t,t.return),gr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,gr(t));break;default:gr(t)}e=e.sibling}}function ad(e,t){for(;Ee!==null;){var n=Ee;switch(n.tag){case 0:case 11:case 15:cn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:_i(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ee=i;else e:for(n=e;Ee!==null;){i=Ee;var a=i.sibling,r=i.return;if(Yu(i),i===n){Ee=null;break e}if(a!==null){a.return=r,Ee=a;break e}Ee=r}}}var Jm={getCacheForType:function(e){var t=Ie(Ce),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ie(Ce).controller.signal}},$m=typeof WeakMap=="function"?WeakMap:Map,Z=0,ce=null,j=null,V=0,ne=0,it=null,un=!1,yi=!1,ws=!1,Ft=0,fe=0,dn=0,Hn=0,Ls=0,at=0,hi=0,la=null,Ve=null,Es=!1,vr=0,rd=0,fr=1/0,yr=null,pn=null,we=0,mn=null,bi=null,Vt=0,Ws=0,Ds=null,od=null,ca=0,Is=null;function rt(){return(Z&2)!==0&&V!==0?V&-V:h.T!==null?Ps():Al()}function sd(){if(at===0)if((V&536870912)===0||K){var e=La;La<<=1,(La&3932160)===0&&(La=262144),at=e}else at=536870912;return e=tt.current,e!==null&&(e.flags|=32),at}function Qe(e,t,n){(e===ce&&(ne===2||ne===9)||e.cancelPendingCommit!==null)&&(Ci(e,0),gn(e,V,at,!1)),Ri(e,n),((Z&2)===0||e!==ce)&&(e===ce&&((Z&2)===0&&(Hn|=n),fe===4&&gn(e,V,at,!1)),Wt(e))}function ld(e,t,n){if((Z&6)!==0)throw Error(m(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ii(e,t),a=i?tg(e,t):Os(e,t,!0),r=i;do{if(a===0){yi&&!i&&gn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Zm(n)){a=Os(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;a=la;var l=s.current.memoizedState.isDehydrated;if(l&&(Ci(s,o).flags|=256),o=Os(s,o,!1),o!==2){if(ws&&!l){s.errorRecoveryDisabledLanes|=r,Hn|=r,a=4;break e}r=Ve,Ve=a,r!==null&&(Ve===null?Ve=r:Ve.push.apply(Ve,r))}a=o}if(r=!1,a!==2)continue}}if(a===1){Ci(e,0),gn(e,t,0,!0);break}e:{switch(i=e,r=a,r){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:gn(i,t,at,!un);break e;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(a=vr+300-Xe(),10<a)){if(gn(i,t,at,!un),Wa(i,0,!0)!==0)break e;Vt=t,i.timeoutHandle=qd(cd.bind(null,i,n,Ve,yr,Es,t,at,Hn,hi,un,r,"Throttled",-0,0),a);break e}cd(i,n,Ve,yr,Es,t,at,Hn,hi,un,r,null,-0,0)}}break}while(!0);Wt(e)}function cd(e,t,n,i,a,r,o,s,l,g,y,C,v,f){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},td(t,r,C);var D=(r&62914560)===r?vr-Xe():(r&4194048)===r?rd-Xe():0;if(D=Ug(C,D),D!==null){Vt=r,e.cancelPendingCommit=D(yd.bind(null,e,t,r,n,i,a,o,s,l,y,C,null,v,f)),gn(e,r,o,!g);return}}yd(e,t,r,n,i,a,o,s,l)}function Zm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Ze(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t,n,i){t&=~Ls,t&=~Hn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-$e(a),o=1<<r;i[r]=-1,a&=~o}n!==0&&bl(e,n,t)}function hr(){return(Z&6)===0?(ua(0),!1):!0}function Rs(){if(j!==null){if(ne===0)var e=j.return;else e=j,Pt=xn=null,Vo(e),ui=null,Vi=0,e=j;for(;e!==null;)Bu(e.alternate,e),e=e.return;j=null}}function Ci(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,bg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Vt=0,Rs(),ce=e,j=n=kt(e.current,null),V=t,ne=0,it=null,un=!1,yi=Ii(e,t),ws=!1,hi=at=Ls=Hn=dn=fe=0,Ve=la=null,Es=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-$e(i),r=1<<a;t|=e[a],i&=~r}return Ft=t,qa(),n}function ud(e,t){B=null,h.H=ea,t===ci||t===Qa?(t=Ec(),ne=3):t===No?(t=Ec(),ne=4):ne=t===ls?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,it=t,j===null&&(fe=1,sr(e,ut(t,e.current)))}function dd(){var e=tt.current;return e===null?!0:(V&4194048)===V?gt===null:(V&62914560)===V||(V&536870912)!==0?e===gt:!1}function pd(){var e=h.H;return h.H=ea,e===null?ea:e}function md(){var e=h.A;return h.A=Jm,e}function br(){fe=4,un||(V&4194048)!==V&&tt.current!==null||(yi=!0),(dn&134217727)===0&&(Hn&134217727)===0||ce===null||gn(ce,V,at,!1)}function Os(e,t,n){var i=Z;Z|=2;var a=pd(),r=md();(ce!==e||V!==t)&&(yr=null,Ci(e,t)),t=!1;var o=fe;e:do try{if(ne!==0&&j!==null){var s=j,l=it;switch(ne){case 8:Rs(),o=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var g=ne;if(ne=0,it=null,Si(e,s,l,g),n&&yi){o=0;break e}break;default:g=ne,ne=0,it=null,Si(e,s,l,g)}}eg(),o=fe;break}catch(y){ud(e,y)}while(!0);return t&&e.shellSuspendCounter++,Pt=xn=null,Z=i,h.H=a,h.A=r,j===null&&(ce=null,V=0,qa()),o}function eg(){for(;j!==null;)gd(j)}function tg(e,t){var n=Z;Z|=2;var i=pd(),a=md();ce!==e||V!==t?(yr=null,fr=Xe()+500,Ci(e,t)):yi=Ii(e,t);e:do try{if(ne!==0&&j!==null){t=j;var r=it;t:switch(ne){case 1:ne=0,it=null,Si(e,t,r,1);break;case 2:case 9:if(wc(r)){ne=0,it=null,vd(t);break}t=function(){ne!==2&&ne!==9||ce!==e||(ne=7),Wt(e)},r.then(t,t);break e;case 3:ne=7;break e;case 4:ne=5;break e;case 7:wc(r)?(ne=0,it=null,vd(t)):(ne=0,it=null,Si(e,t,r,7));break;case 5:var o=null;switch(j.tag){case 26:o=j.memoizedState;case 5:case 27:var s=j;if(o?ep(o):s.stateNode.complete){ne=0,it=null;var l=s.sibling;if(l!==null)j=l;else{var g=s.return;g!==null?(j=g,Cr(g)):j=null}break t}}ne=0,it=null,Si(e,t,r,5);break;case 6:ne=0,it=null,Si(e,t,r,6);break;case 8:Rs(),fe=6;break e;default:throw Error(m(462))}}ng();break}catch(y){ud(e,y)}while(!0);return Pt=xn=null,h.H=i,h.A=a,Z=n,j!==null?0:(ce=null,V=0,qa(),fe)}function ng(){for(;j!==null&&!Lp();)gd(j)}function gd(e){var t=Gu(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Cr(e):j=t}function vd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xu(n,t,t.pendingProps,t.type,void 0,V);break;case 11:t=xu(n,t,t.pendingProps,t.type.render,t.ref,V);break;case 5:Vo(t);default:Bu(n,t),t=j=mc(t,Ft),t=Gu(n,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Cr(e):j=t}function Si(e,t,n,i){Pt=xn=null,Vo(t),ui=null,Vi=0;var a=t.return;try{if(_m(e,a,t,n,V)){fe=1,sr(e,ut(n,e.current)),j=null;return}}catch(r){if(a!==null)throw j=a,r;fe=1,sr(e,ut(n,e.current)),j=null;return}t.flags&32768?(K||i===1?e=!0:yi||(V&536870912)!==0?e=!1:(un=e=!0,(i===2||i===9||i===3||i===6)&&(i=tt.current,i!==null&&i.tag===13&&(i.flags|=16384))),fd(t,e)):Cr(t)}function Cr(e){var t=e;do{if((t.flags&32768)!==0){fd(t,un);return}e=t.return;var n=Qm(t.alternate,t,Ft);if(n!==null){j=n;return}if(t=t.sibling,t!==null){j=t;return}j=t=e}while(t!==null);fe===0&&(fe=5)}function fd(e,t){do{var n=Ym(e.alternate,e);if(n!==null){n.flags&=32767,j=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){j=e;return}j=e=n}while(e!==null);fe=6,j=null}function yd(e,t,n,i,a,r,o,s,l){e.cancelPendingCommit=null;do Sr();while(we!==0);if((Z&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(r=t.lanes|t.childLanes,r|=bo,Pp(e,n,r,o,s,l),e===ce&&(j=ce=null,V=0),bi=t,mn=e,Vt=n,Ws=r,Ds=a,od=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,og(Ta,function(){return Ad(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=h.T,h.T=null,a=L.p,L.p=2,o=Z,Z|=4;try{Km(e,t,n)}finally{Z=o,L.p=a,h.T=i}}we=1,hd(),bd(),Cd()}}function hd(){if(we===1){we=0;var e=mn,t=bi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=h.T,h.T=null;var i=L.p;L.p=2;var a=Z;Z|=4;try{$u(t,e);var r=js,o=ac(e.containerInfo),s=r.focusedElem,l=r.selectionRange;if(o!==s&&s&&s.ownerDocument&&ic(s.ownerDocument.documentElement,s)){if(l!==null&&go(s)){var g=l.start,y=l.end;if(y===void 0&&(y=g),"selectionStart"in s)s.selectionStart=g,s.selectionEnd=Math.min(y,s.value.length);else{var C=s.ownerDocument||document,v=C&&C.defaultView||window;if(v.getSelection){var f=v.getSelection(),D=s.textContent.length,k=Math.min(l.start,D),se=l.end===void 0?k:Math.min(l.end,D);!f.extend&&k>se&&(o=se,se=k,k=o);var d=nc(s,k),c=nc(s,se);if(d&&c&&(f.rangeCount!==1||f.anchorNode!==d.node||f.anchorOffset!==d.offset||f.focusNode!==c.node||f.focusOffset!==c.offset)){var p=C.createRange();p.setStart(d.node,d.offset),f.removeAllRanges(),k>se?(f.addRange(p),f.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),f.addRange(p))}}}}for(C=[],f=s;f=f.parentNode;)f.nodeType===1&&C.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var b=C[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}kr=!!zs,js=zs=null}finally{Z=a,L.p=i,h.T=n}}e.current=t,we=2}}function bd(){if(we===2){we=0;var e=mn,t=bi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=h.T,h.T=null;var i=L.p;L.p=2;var a=Z;Z|=4;try{Qu(e,t.alternate,t)}finally{Z=a,L.p=i,h.T=n}}we=3}}function Cd(){if(we===4||we===3){we=0,Ep();var e=mn,t=bi,n=Vt,i=od;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?we=5:(we=0,bi=mn=null,Sd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(pn=null),Yr(n),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Di,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=h.T,a=L.p,L.p=2,h.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var s=i[o];r(s.value,{componentStack:s.stack})}}finally{h.T=t,L.p=a}}(Vt&3)!==0&&Sr(),Wt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Is?ca++:(ca=0,Is=e):ca=0,ua(0)}}function Sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_i(t)))}function Sr(){return hd(),bd(),Cd(),Ad()}function Ad(){if(we!==5)return!1;var e=mn,t=Ws;Ws=0;var n=Yr(Vt),i=h.T,a=L.p;try{L.p=32>n?32:n,h.T=null,n=Ds,Ds=null;var r=mn,o=Vt;if(we=0,bi=mn=null,Vt=0,(Z&6)!==0)throw Error(m(331));var s=Z;if(Z|=4,id(r.current),ed(r,r.current,o,n),Z=s,ua(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Di,r)}catch{}return!0}finally{L.p=a,h.T=i,Sd(e,t)}}function Td(e,t,n){t=ut(n,t),t=ss(e.stateNode,t,2),e=on(e,t,2),e!==null&&(Ri(e,2),Wt(e))}function ie(e,t,n){if(e.tag===3)Td(e,e,n);else for(;t!==null;){if(t.tag===3){Td(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pn===null||!pn.has(i))){e=ut(n,e),n=wu(2),i=on(t,n,2),i!==null&&(Lu(n,i,t,e),Ri(i,2),Wt(i));break}}t=t.return}}function xs(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new $m;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(ws=!0,a.add(n),e=ig.bind(null,e,t,n),t.then(e,e))}function ig(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ce===e&&(V&n)===n&&(fe===4||fe===3&&(V&62914560)===V&&300>Xe()-vr?(Z&2)===0&&Ci(e,0):Ls|=n,hi===V&&(hi=0)),Wt(e)}function wd(e,t){t===0&&(t=hl()),e=In(e,t),e!==null&&(Ri(e,t),Wt(e))}function ag(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function rg(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(m(314))}i!==null&&i.delete(t),wd(e,n)}function og(e,t){return _r(e,t)}var Ar=null,Ai=null,ks=!1,Tr=!1,Ns=!1,vn=0;function Wt(e){e!==Ai&&e.next===null&&(Ai===null?Ar=Ai=e:Ai=Ai.next=e),Tr=!0,ks||(ks=!0,lg())}function ua(e,t){if(!Ns&&Tr){Ns=!0;do for(var n=!1,i=Ar;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var o=i.suspendedLanes,s=i.pingedLanes;r=(1<<31-$e(42|e)+1)-1,r&=a&~(o&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Dd(i,r))}else r=V,r=Wa(i,i===ce?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Ii(i,r)||(n=!0,Dd(i,r));i=i.next}while(n);Ns=!1}}function sg(){Ld()}function Ld(){Tr=ks=!1;var e=0;vn!==0&&hg()&&(e=vn);for(var t=Xe(),n=null,i=Ar;i!==null;){var a=i.next,r=Ed(i,t);r===0?(i.next=null,n===null?Ar=a:n.next=a,a===null&&(Ai=n)):(n=i,(e!==0||(r&3)!==0)&&(Tr=!0)),i=a}we!==0&&we!==5||ua(e),vn!==0&&(vn=0)}function Ed(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-$e(r),s=1<<o,l=a[o];l===-1?((s&n)===0||(s&i)!==0)&&(a[o]=Np(s,t)):l<=t&&(e.expiredLanes|=s),r&=~s}if(t=ce,n=V,n=Wa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ne===2||ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Fr(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ii(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Fr(i),Yr(n)){case 2:case 8:n=fl;break;case 32:n=Ta;break;case 268435456:n=yl;break;default:n=Ta}return i=Wd.bind(null,e),n=_r(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Fr(i),e.callbackPriority=2,e.callbackNode=null,2}function Wd(e,t){if(we!==0&&we!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var i=V;return i=Wa(e,e===ce?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(ld(e,i,t),Ed(e,Xe()),e.callbackNode!=null&&e.callbackNode===n?Wd.bind(null,e):null)}function Dd(e,t){if(Sr())return null;ld(e,t,!0)}function lg(){Cg(function(){(Z&6)!==0?_r(vl,sg):Ld()})}function Ps(){if(vn===0){var e=si;e===0&&(e=wa,wa<<=1,(wa&261888)===0&&(wa=256)),vn=e}return vn}function Id(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oa(""+e)}function Rd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function cg(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Id((a[He]||null).action),o=i.submitter;o&&(t=(t=o[He]||null)?Id(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var s=new Pa("action","action",null,i,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(vn!==0){var l=o?Rd(a,o):new FormData(a);ts(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(s.preventDefault(),l=o?Rd(a,o):new FormData(a),ts(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Ms=0;Ms<ho.length;Ms++){var Us=ho[Ms],ug=Us.toLowerCase(),dg=Us[0].toUpperCase()+Us.slice(1);ht(ug,"on"+dg)}ht(sc,"onAnimationEnd"),ht(lc,"onAnimationIteration"),ht(cc,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(Wm,"onTransitionRun"),ht(Dm,"onTransitionStart"),ht(Im,"onTransitionCancel"),ht(uc,"onTransitionEnd"),Qn("onMouseEnter",["mouseout","mouseover"]),Qn("onMouseLeave",["mouseout","mouseover"]),Qn("onPointerEnter",["pointerout","pointerover"]),Qn("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(da));function Od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,g=s.currentTarget;if(s=s.listener,l!==r&&a.isPropagationStopped())break e;r=s,a.currentTarget=g;try{r(a)}catch(y){Ga(y)}a.currentTarget=null,r=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,g=s.currentTarget,s=s.listener,l!==r&&a.isPropagationStopped())break e;r=s,a.currentTarget=g;try{r(a)}catch(y){Ga(y)}a.currentTarget=null,r=l}}}}function _(e,t){var n=t[Kr];n===void 0&&(n=t[Kr]=new Set);var i=e+"__bubble";n.has(i)||(xd(t,e,2,!1),n.add(i))}function Gs(e,t,n){var i=0;t&&(i|=4),xd(n,e,i,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function qs(e){if(!e[wr]){e[wr]=!0,Ll.forEach(function(n){n!=="selectionchange"&&(pg.has(n)||Gs(n,!1,e),Gs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Gs("selectionchange",!1,t))}}function xd(e,t,n,i){switch(sp(t)){case 2:var a=Bg;break;case 8:a=Hg;break;default:a=el}n=a.bind(null,t,n,e),a=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bs(e,t,n,i,a){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===a)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;s!==null;){if(o=_n(s),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){i=r=o;continue e}s=s.parentNode}}i=i.return}Ul(function(){var g=r,y=no(n),C=[];e:{var v=dc.get(e);if(v!==void 0){var f=Pa,D=e;switch(e){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":f=rm;break;case"focusin":D="focus",f=lo;break;case"focusout":D="blur",f=lo;break;case"beforeblur":case"afterblur":f=lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=lm;break;case sc:case lc:case cc:f=Xp;break;case uc:f=um;break;case"scroll":case"scrollend":f=Fp;break;case"wheel":f=pm;break;case"copy":case"cut":case"paste":f=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=zl;break;case"toggle":case"beforetoggle":f=gm}var k=(t&4)!==0,se=!k&&(e==="scroll"||e==="scrollend"),d=k?v!==null?v+"Capture":null:v;k=[];for(var c=g,p;c!==null;){var b=c;if(p=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||p===null||d===null||(b=ki(c,d),b!=null&&k.push(pa(c,b,p))),se)break;c=c.return}0<k.length&&(v=new f(v,D,null,n,y),C.push({event:v,listeners:k}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",v&&n!==to&&(D=n.relatedTarget||n.fromElement)&&(_n(D)||D[jn]))break e;if((f||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,f?(D=n.relatedTarget||n.toElement,f=g,D=D?_n(D):null,D!==null&&(se=M(D),k=D.tag,D!==se||k!==5&&k!==27&&k!==6)&&(D=null)):(f=null,D=g),f!==D)){if(k=Bl,b="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=zl,b="onPointerLeave",d="onPointerEnter",c="pointer"),se=f==null?v:xi(f),p=D==null?v:xi(D),v=new k(b,c+"leave",f,n,y),v.target=se,v.relatedTarget=p,b=null,_n(y)===g&&(k=new k(d,c+"enter",D,n,y),k.target=p,k.relatedTarget=se,b=k),se=b,f&&D)t:{for(k=mg,d=f,c=D,p=0,b=d;b;b=k(b))p++;b=0;for(var O=c;O;O=k(O))b++;for(;0<p-b;)d=k(d),p--;for(;0<b-p;)c=k(c),b--;for(;p--;){if(d===c||c!==null&&d===c.alternate){k=d;break t}d=k(d),c=k(c)}k=null}else k=null;f!==null&&kd(C,v,f,k,!1),D!==null&&se!==null&&kd(C,se,D,k,!0)}}e:{if(v=g?xi(g):window,f=v.nodeName&&v.nodeName.toLowerCase(),f==="select"||f==="input"&&v.type==="file")var J=Xl;else if(Yl(v))if(Jl)J=wm;else{J=Am;var R=Sm}else f=v.nodeName,!f||f.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&eo(g.elementType)&&(J=Xl):J=Tm;if(J&&(J=J(e,g))){Kl(C,J,n,y);break e}R&&R(e,v,g),e==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&Zr(v,"number",v.value)}switch(R=g?xi(g):window,e){case"focusin":(Yl(R)||R.contentEditable==="true")&&(Zn=R,vo=g,Hi=null);break;case"focusout":Hi=vo=Zn=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,rc(C,n,y);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":rc(C,n,y)}var H;if(uo)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else $n?Vl(e,n)&&(Q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(jl&&n.locale!=="ko"&&($n||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&$n&&(H=Gl()):($t=y,ro="value"in $t?$t.value:$t.textContent,$n=!0)),R=Lr(g,Q),0<R.length&&(Q=new Hl(Q,e,null,n,y),C.push({event:Q,listeners:R}),H?Q.data=H:(H=Ql(n),H!==null&&(Q.data=H)))),(H=fm?ym(e,n):hm(e,n))&&(Q=Lr(g,"onBeforeInput"),0<Q.length&&(R=new Hl("onBeforeInput","beforeinput",null,n,y),C.push({event:R,listeners:Q}),R.data=H)),cg(C,e,g,n,y)}Od(C,t)})}function pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lr(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ki(e,n),a!=null&&i.unshift(pa(e,a,r)),a=ki(e,t),a!=null&&i.push(pa(e,a,r))),e.tag===3)return i;e=e.return}return[]}function mg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,i,a){for(var r=t._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,g=s.stateNode;if(s=s.tag,l!==null&&l===i)break;s!==5&&s!==26&&s!==27||g===null||(l=g,a?(g=ki(n,r),g!=null&&o.unshift(pa(n,g,l))):a||(g=ki(n,r),g!=null&&o.push(pa(n,g,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(vg,"")}function Pd(e,t){return t=Nd(t),Nd(e)===t}function oe(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Kn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Kn(e,""+i);break;case"className":Ia(e,"class",i);break;case"tabIndex":Ia(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ia(e,n,i);break;case"style":Pl(e,i,r);break;case"data":if(t!=="object"){Ia(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Oa(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&oe(e,t,"name",a.name,a,null),oe(e,t,"formEncType",a.formEncType,a,null),oe(e,t,"formMethod",a.formMethod,a,null),oe(e,t,"formTarget",a.formTarget,a,null)):(oe(e,t,"encType",a.encType,a,null),oe(e,t,"method",a.method,a,null),oe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Oa(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ot);break;case"onScroll":i!=null&&_("scroll",e);break;case"onScrollEnd":i!=null&&_("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(m(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(m(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Oa(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":_("beforetoggle",e),_("toggle",e),Da(e,"popover",i);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Da(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=jp.get(n)||n,Da(e,n,i))}}function Hs(e,t,n,i,a,r){switch(n){case"style":Pl(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(m(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(m(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Kn(e,i):(typeof i=="number"||typeof i=="bigint")&&Kn(e,""+i);break;case"onScroll":i!=null&&_("scroll",e);break;case"onScrollEnd":i!=null&&_("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!El.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[He]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Da(e,n,i)}}}function Oe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_("error",e),_("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:oe(e,t,r,o,n,null)}}a&&oe(e,t,"srcSet",n.srcSet,n,null),i&&oe(e,t,"src",n.src,n,null);return;case"input":_("invalid",e);var s=r=o=a=null,l=null,g=null;for(i in n)if(n.hasOwnProperty(i)){var y=n[i];if(y!=null)switch(i){case"name":a=y;break;case"type":o=y;break;case"checked":l=y;break;case"defaultChecked":g=y;break;case"value":r=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:oe(e,t,i,y,n,null)}}Ol(e,r,s,l,g,o,a,!1);return;case"select":_("invalid",e),i=o=r=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":r=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:oe(e,t,a,s,n,null)}t=r,n=o,e.multiple=!!i,t!=null?Yn(e,!!i,t,!1):n!=null&&Yn(e,!!i,n,!0);return;case"textarea":_("invalid",e),r=a=i=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":a=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(m(91));break;default:oe(e,t,o,s,n,null)}kl(e,i,a,r);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":oe(e,t,l,i,n,null));return;case"dialog":_("beforetoggle",e),_("toggle",e),_("cancel",e),_("close",e);break;case"iframe":case"object":_("load",e);break;case"video":case"audio":for(i=0;i<da.length;i++)_(da[i],e);break;case"image":_("error",e),_("load",e);break;case"details":_("toggle",e);break;case"embed":case"source":case"link":_("error",e),_("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in n)if(n.hasOwnProperty(g)&&(i=n[g],i!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:oe(e,t,g,i,n,null)}return;default:if(eo(t)){for(y in n)n.hasOwnProperty(y)&&(i=n[y],i!==void 0&&Hs(e,t,y,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(i=n[s],i!=null&&oe(e,t,s,i,n,null))}function fg(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,o=null,s=null,l=null,g=null,y=null;for(f in n){var C=n[f];if(n.hasOwnProperty(f)&&C!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=C;default:i.hasOwnProperty(f)||oe(e,t,f,null,i,C)}}for(var v in i){var f=i[v];if(C=n[v],i.hasOwnProperty(v)&&(f!=null||C!=null))switch(v){case"type":r=f;break;case"name":a=f;break;case"checked":g=f;break;case"defaultChecked":y=f;break;case"value":o=f;break;case"defaultValue":s=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(137,t));break;default:f!==C&&oe(e,t,v,f,i,C)}}$r(e,o,s,l,g,y,r,a);return;case"select":f=o=s=v=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(r)||oe(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":v=r;break;case"defaultValue":s=r;break;case"multiple":o=r;default:r!==l&&oe(e,t,a,r,i,l)}t=s,n=o,i=f,v!=null?Yn(e,!!n,v,!1):!!i!=!!n&&(t!=null?Yn(e,!!n,t,!0):Yn(e,!!n,n?[]:"",!1));return;case"textarea":f=v=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:oe(e,t,s,null,i,a)}for(o in i)if(a=i[o],r=n[o],i.hasOwnProperty(o)&&(a!=null||r!=null))switch(o){case"value":v=a;break;case"defaultValue":f=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(m(91));break;default:a!==r&&oe(e,t,o,a,i,r)}xl(e,v,f);return;case"option":for(var D in n)v=n[D],n.hasOwnProperty(D)&&v!=null&&!i.hasOwnProperty(D)&&(D==="selected"?e.selected=!1:oe(e,t,D,null,i,v));for(l in i)v=i[l],f=n[l],i.hasOwnProperty(l)&&v!==f&&(v!=null||f!=null)&&(l==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":oe(e,t,l,v,i,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in n)v=n[k],n.hasOwnProperty(k)&&v!=null&&!i.hasOwnProperty(k)&&oe(e,t,k,null,i,v);for(g in i)if(v=i[g],f=n[g],i.hasOwnProperty(g)&&v!==f&&(v!=null||f!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:oe(e,t,g,v,i,f)}return;default:if(eo(t)){for(var se in n)v=n[se],n.hasOwnProperty(se)&&v!==void 0&&!i.hasOwnProperty(se)&&Hs(e,t,se,void 0,i,v);for(y in i)v=i[y],f=n[y],!i.hasOwnProperty(y)||v===f||v===void 0&&f===void 0||Hs(e,t,y,v,i,f);return}}for(var d in n)v=n[d],n.hasOwnProperty(d)&&v!=null&&!i.hasOwnProperty(d)&&oe(e,t,d,null,i,v);for(C in i)v=i[C],f=n[C],!i.hasOwnProperty(C)||v===f||v==null&&f==null||oe(e,t,C,v,i,f)}function Md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,o=a.initiatorType,s=a.duration;if(r&&s&&Md(o)){for(o=0,s=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],g=l.startTime;if(g>s)break;var y=l.transferSize,C=l.initiatorType;y&&Md(C)&&(l=l.responseEnd,o+=y*(l<s?1:(s-g)/(l-g)))}if(--i,t+=8*(r+o)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zs=null,js=null;function Er(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=null;function hg(){var e=window.event;return e&&e.type==="popstate"?e===Fs?!1:(Fs=e,!0):(Fs=null,!1)}var qd=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(Sg)}:qd;function Sg(e){setTimeout(function(){throw e})}function fn(e){return e==="head"}function Hd(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ei(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ma(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ma(n);for(var r=n.firstChild;r;){var o=r.nextSibling,s=r.nodeName;r[Oi]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=o}}else n==="body"&&ma(e.ownerDocument.body);n=a}while(n);Ei(t)}function zd(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vs(n),Xr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ag(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Oi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Tg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vt(e.nextSibling),e===null))return null;return e}function jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Qs(e){return e.data==="$?"||e.data==="$~"}function Ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ks=null;function _d(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Vd(e,t,n){switch(t=Er(n),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function ma(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xr(e)}var ft=new Map,Qd=new Set;function Wr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qt=L.d;L.d={f:Lg,r:Eg,D:Wg,C:Dg,L:Ig,m:Rg,X:xg,S:Og,M:kg};function Lg(){var e=Qt.f(),t=hr();return e||t}function Eg(e){var t=Fn(e);t!==null&&t.tag===5&&t.type==="form"?uu(t):Qt.r(e)}var Ti=typeof document>"u"?null:document;function Yd(e,t,n){var i=Ti;if(i&&typeof t=="string"&&t){var a=lt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Qd.has(a)||(Qd.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Oe(t,"link",e),Le(t),i.head.appendChild(t)))}}function Wg(e){Qt.D(e),Yd("dns-prefetch",e,null)}function Dg(e,t){Qt.C(e,t),Yd("preconnect",e,t)}function Ig(e,t,n){Qt.L(e,t,n);var i=Ti;if(i&&e&&t){var a='link[rel="preload"][as="'+lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+lt(n.imageSizes)+'"]')):a+='[href="'+lt(e)+'"]';var r=a;switch(t){case"style":r=wi(e);break;case"script":r=Li(e)}ft.has(r)||(e=N({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ft.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(ga(r))||t==="script"&&i.querySelector(va(r))||(t=i.createElement("link"),Oe(t,"link",e),Le(t),i.head.appendChild(t)))}}function Rg(e,t){Qt.m(e,t);var n=Ti;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+lt(i)+'"][href="'+lt(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Li(e)}if(!ft.has(r)&&(e=N({rel:"modulepreload",href:e},t),ft.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(va(r)))return}i=n.createElement("link"),Oe(i,"link",e),Le(i),n.head.appendChild(i)}}}function Og(e,t,n){Qt.S(e,t,n);var i=Ti;if(i&&e){var a=Vn(i).hoistableStyles,r=wi(e);t=t||"default";var o=a.get(r);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(ga(r)))s.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ft.get(r))&&Xs(e,n);var l=o=i.createElement("link");Le(l),Oe(l,"link",e),l._p=new Promise(function(g,y){l.onload=g,l.onerror=y}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Dr(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:s},a.set(r,o)}}}function xg(e,t){Qt.X(e,t);var n=Ti;if(n&&e){var i=Vn(n).hoistableScripts,a=Li(e),r=i.get(a);r||(r=n.querySelector(va(a)),r||(e=N({src:e,async:!0},t),(t=ft.get(a))&&Js(e,t),r=n.createElement("script"),Le(r),Oe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function kg(e,t){Qt.M(e,t);var n=Ti;if(n&&e){var i=Vn(n).hoistableScripts,a=Li(e),r=i.get(a);r||(r=n.querySelector(va(a)),r||(e=N({src:e,async:!0,type:"module"},t),(t=ft.get(a))&&Js(e,t),r=n.createElement("script"),Le(r),Oe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Kd(e,t,n,i){var a=(a=z.current)?Wr(a):null;if(!a)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wi(n.href),n=Vn(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wi(n.href);var r=Vn(a).hoistableStyles,o=r.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=a.querySelector(ga(e)))&&!r._p&&(o.instance=r,o.state.loading=5),ft.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ft.set(e,n),r||Ng(a,e,n,o.state))),t&&i===null)throw Error(m(528,""));return o}if(t&&i!==null)throw Error(m(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Li(n),n=Vn(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function wi(e){return'href="'+lt(e)+'"'}function ga(e){return'link[rel="stylesheet"]['+e+"]"}function Xd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Ng(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Oe(t,"link",n),Le(t),e.head.appendChild(t))}function Li(e){return'[src="'+lt(e)+'"]'}function va(e){return"script[async]"+e}function Jd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+lt(n.href)+'"]');if(i)return t.instance=i,Le(i),i;var a=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Le(i),Oe(i,"style",a),Dr(i,n.precedence,e),t.instance=i;case"stylesheet":a=wi(n.href);var r=e.querySelector(ga(a));if(r)return t.state.loading|=4,t.instance=r,Le(r),r;i=Xd(n),(a=ft.get(a))&&Xs(i,a),r=(e.ownerDocument||e).createElement("link"),Le(r);var o=r;return o._p=new Promise(function(s,l){o.onload=s,o.onerror=l}),Oe(r,"link",i),t.state.loading|=4,Dr(r,n.precedence,e),t.instance=r;case"script":return r=Li(n.src),(a=e.querySelector(va(r)))?(t.instance=a,Le(a),a):(i=n,(a=ft.get(r))&&(i=N({},n),Js(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Le(a),Oe(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Dr(i,n.precedence,e));return t.instance}function Dr(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===t)r=s;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ir=null;function $d(e,t,n){if(Ir===null){var i=new Map,a=Ir=new Map;a.set(n,i)}else a=Ir,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Oi]||r[We]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var s=i.get(o);s?s.push(r):i.set(o,[r])}}return i}function Zd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Pg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ep(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Mg(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=wi(i.href),r=t.querySelector(ga(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Le(r);return}r=t.ownerDocument||t,i=Xd(i),(a=ft.get(a))&&Xs(i,a),r=r.createElement("link"),Le(r);var o=r;o._p=new Promise(function(s,l){o.onload=s,o.onerror=l}),Oe(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Rr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $s=0;function Ug(e,t){return e.stylesheets&&e.count===0&&xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&$s===0&&($s=62500*yg());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>$s?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Rr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Or=null;function xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Or=new Map,t.forEach(Gg,e),Or=null,Rr.call(e))}function Gg(e,t){if(!(t.state.loading&4)){var n=Or.get(e);if(n)var i=n.get(null);else{n=new Map,Or.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var o=a[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}a=t.instance,o=a.getAttribute("data-precedence"),r=n.get(o)||i,r===i&&n.set(null,a),n.set(o,a),this.count++,i=Rr.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var fa={$$typeof:xe,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function qg(e,t,n,i,a,r,o,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function tp(e,t,n,i,a,r,o,s,l,g,y,C){return e=new qg(e,t,n,o,l,g,y,C,s),t=1,r===!0&&(t|=24),r=et(3,null,null,t),e.current=r,r.stateNode=e,t=Oo(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Po(r),e}function np(e){return e?(e=ni,e):ni}function ip(e,t,n,i,a,r){a=np(a),i.context===null?i.context=a:i.pendingContext=a,i=rn(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=on(e,i,t),n!==null&&(Qe(n,e,t),Yi(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zs(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function rp(e){if(e.tag===13||e.tag===31){var t=In(e,67108864);t!==null&&Qe(t,e,67108864),Zs(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=rt();t=Qr(t);var n=In(e,t);n!==null&&Qe(n,e,t),Zs(e,t)}}var kr=!0;function Bg(e,t,n,i){var a=h.T;h.T=null;var r=L.p;try{L.p=2,el(e,t,n,i)}finally{L.p=r,h.T=a}}function Hg(e,t,n,i){var a=h.T;h.T=null;var r=L.p;try{L.p=8,el(e,t,n,i)}finally{L.p=r,h.T=a}}function el(e,t,n,i){if(kr){var a=tl(i);if(a===null)Bs(e,t,i,Nr,n),lp(e,i);else if(jg(a,e,t,n,i))i.stopPropagation();else if(lp(e,i),t&4&&-1<zg.indexOf(e)){for(;a!==null;){var r=Fn(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=wn(r.pendingLanes);if(o!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-$e(o);s.entanglements[1]|=l,o&=~l}Wt(r),(Z&6)===0&&(fr=Xe()+500,ua(0))}}break;case 31:case 13:s=In(r,2),s!==null&&Qe(s,r,2),hr(),Zs(r,2)}if(r=tl(i),r===null&&Bs(e,t,i,Nr,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Bs(e,t,i,null,n)}}function tl(e){return e=no(e),nl(e)}var Nr=null;function nl(e){if(Nr=null,e=_n(e),e!==null){var t=M(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=X(t),e!==null)return e;e=null}else if(n===31){if(e=ue(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wp()){case vl:return 2;case fl:return 8;case Ta:case Dp:return 32;case yl:return 268435456;default:return 32}default:return 32}}var il=!1,yn=null,hn=null,bn=null,ya=new Map,ha=new Map,Cn=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lp(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ya.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(t.pointerId)}}function ba(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Fn(t),t!==null&&rp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function jg(e,t,n,i,a){switch(t){case"focusin":return yn=ba(yn,e,t,n,i,a),!0;case"dragenter":return hn=ba(hn,e,t,n,i,a),!0;case"mouseover":return bn=ba(bn,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return ya.set(r,ba(ya.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,ha.set(r,ba(ha.get(r)||null,e,t,n,i,a)),!0}return!1}function cp(e){var t=_n(e.target);if(t!==null){var n=M(t);if(n!==null){if(t=n.tag,t===13){if(t=X(n),t!==null){e.blockedOn=t,Tl(e.priority,function(){op(n)});return}}else if(t===31){if(t=ue(n),t!==null){e.blockedOn=t,Tl(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tl(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);to=i,n.target.dispatchEvent(i),to=null}else return t=Fn(n),t!==null&&rp(t),e.blockedOn=n,!1;t.shift()}return!0}function up(e,t,n){Pr(e)&&n.delete(t)}function _g(){il=!1,yn!==null&&Pr(yn)&&(yn=null),hn!==null&&Pr(hn)&&(hn=null),bn!==null&&Pr(bn)&&(bn=null),ya.forEach(up),ha.forEach(up)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,il||(il=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,_g)))}var Ur=null;function dp(e){Ur!==e&&(Ur=e,w.unstable_scheduleCallback(w.unstable_NormalPriority,function(){Ur===e&&(Ur=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(nl(i||n)===null)continue;break}var r=Fn(n);r!==null&&(e.splice(t,3),t-=3,ts(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ei(e){function t(l){return Mr(l,e)}yn!==null&&Mr(yn,e),hn!==null&&Mr(hn,e),bn!==null&&Mr(bn,e),ya.forEach(t),ha.forEach(t);for(var n=0;n<Cn.length;n++){var i=Cn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)cp(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],o=a[He]||null;if(typeof r=="function")o||dp(n);else if(o){var s=null;if(r&&r.hasAttribute("formAction")){if(a=r,o=r[He]||null)s=o.formAction;else if(nl(a)!==null)continue}else s=o.action;typeof s=="function"?n[i+1]=s:(n.splice(i,3),i-=3),dp(n)}}}function pp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function al(e){this._internalRoot=e}Gr.prototype.render=al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var n=t.current,i=rt();ip(n,i,e,t,null,null)},Gr.prototype.unmount=al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),hr(),t[jn]=null}};function Gr(e){this._internalRoot=e}Gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Al();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&cp(e)}};var mp=F.version;if(mp!=="19.2.4")throw Error(m(527,mp,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=T(t),e=e!==null?ee(e):null,e=e===null?null:e.stateNode,e};var Fg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:h,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qr.isDisabled&&qr.supportsFiber)try{Di=qr.inject(Fg),Je=qr}catch{}}return Sa.createRoot=function(e,t){if(!x(e))throw Error(m(299));var n=!1,i="",a=Cu,r=Su,o=Au;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,i,null,a,r,o,pp),e[jn]=t.current,qs(e),new al(t)},Sa.hydrateRoot=function(e,t,n){if(!x(e))throw Error(m(299));var i=!1,a="",r=Cu,o=Su,s=Au,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=tp(e,1,!0,t,n??null,i,a,l,r,o,s,pp),t.context=np(null),n=t.current,i=rt(),i=Qr(i),a=rn(i),a.callback=null,on(n,a,i),n=i,t.current.lanes=n,Ri(t,n),Wt(t),e[jn]=t.current,qs(e),new Gr(t)},Sa.version="19.2.4",Sa}var Tp;function tv(){if(Tp)return sl.exports;Tp=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(F){console.error(F)}}return w(),sl.exports=ev(),sl.exports}var nv=tv();function iv({subjects:w,selectedSubject:F,selectedTopic:U,onSubjectSelect:m,onTopicSelect:x,isOpen:M,onToggle:X}){const ue=w.find(E=>E.id===F);return S.jsx(S.Fragment,{children:S.jsxs("nav",{className:`flex flex-col h-screen bg-white shadow-2xl flex-shrink-0 border-r-2 border-indigo-100 transition-all duration-300 ease-in-out ${M?"w-80":"w-24"}`,children:[S.jsx("div",{className:"px-6 py-8 border-b-2 border-indigo-100 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex-shrink-0",children:S.jsxs("div",{className:"flex items-center justify-between",children:[M&&S.jsxs("div",{children:[S.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"📚"}),S.jsx("p",{className:"text-base font-semibold mt-3 opacity-90",children:"Interview Prep Guide"})]}),!M&&S.jsx("h1",{className:"text-3xl font-bold",children:"📚"}),S.jsx("button",{onClick:X,className:"p-2 hover:bg-white/20 rounded-lg transition-colors",title:M?"Collapse":"Expand",children:M?S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M15.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 0z"})}):S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M4.293 10.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414 0z"})})})]})}),S.jsxs("div",{className:"flex flex-1 overflow-hidden gap-0",children:[S.jsxs("div",{className:"flex-1 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white",children:[S.jsxs("div",{className:"px-5 py-4 text-xs font-bold uppercase tracking-widest text-indigo-600 bg-white border-b border-gray-200 sticky top-0",children:[M&&"Subjects",!M&&"📋"]}),S.jsx("ul",{className:"space-y-3 p-4",children:w.map(E=>S.jsx("li",{children:S.jsx("button",{className:`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${F===E.id?"bg-indigo-600 text-white shadow-lg scale-105":"text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"}`,onClick:()=>m(E.id),title:E.name,children:M?E.name:E.name.charAt(0).toUpperCase()})},E.id))})]}),ue&&M&&S.jsxs("div",{className:"w-40 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white",children:[S.jsx("div",{className:"px-5 py-4 text-xs font-bold uppercase tracking-widest text-purple-600 bg-white border-b border-gray-200 sticky top-0",children:"Topics"}),S.jsx("ul",{className:"space-y-3 p-4",children:ue.topics.map(E=>S.jsx("li",{children:S.jsxs("button",{className:`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between ${U===E.id?"bg-purple-600 text-white shadow-lg scale-105":"text-gray-700 hover:bg-purple-100 hover:text-purple-700"}`,onClick:()=>x(E.id),children:[S.jsx("span",{children:E.name}),S.jsx("span",{className:`text-xs font-bold px-3 py-1 rounded-full ml-2 ${U===E.id?"bg-white/30 text-white":"bg-indigo-100 text-indigo-700"}`,children:E.questions.length})]})},E.id))})]})]})]})})}function av({snippet:w}){const[F,U]=Yt.useState(!1),m=()=>{navigator.clipboard.writeText(w.code),U(!0),setTimeout(()=>U(!1),2e3)};return S.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all",children:[S.jsxs("div",{className:"flex justify-between items-center px-5 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-gray-700",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),S.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),S.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),S.jsx("span",{className:"ml-3 text-indigo-400 text-xs font-bold uppercase tracking-widest",children:w.language})]}),S.jsx("button",{onClick:m,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${F?"bg-green-600 text-white":"bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"}`,title:"Copy code",children:F?S.jsxs(S.Fragment,{children:[S.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Copied!"]}):S.jsxs(S.Fragment,{children:[S.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Copy"]})})]}),S.jsx("pre",{className:"p-5 text-gray-300 text-sm overflow-x-auto font-mono leading-relaxed bg-gray-900",children:S.jsx("code",{className:"text-gray-100",children:w.code})})]})}function rv({diagram:w}){return S.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden my-4",children:[S.jsx("div",{className:"px-4 py-3 bg-gray-100 border-b border-gray-200",children:S.jsx("h4",{className:"text-sm font-semibold text-purple-600 uppercase tracking-wide",children:w.title})}),S.jsx("div",{className:"p-6 bg-gray-50 flex justify-center",children:S.jsx("img",{src:w.imageUrl,alt:w.title,className:"max-w-full h-auto rounded-lg max-h-96 object-contain"})}),w.description&&S.jsx("div",{className:"px-4 py-3 bg-white border-t border-gray-200",children:S.jsx("p",{className:"text-sm text-gray-700 leading-relaxed",children:w.description})})]})}function ov({question:w}){const[F,U]=Yt.useState(!1);return S.jsxs("div",{className:"bg-white border-2 border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all duration-300",children:[S.jsxs("div",{className:"flex items-center justify-between gap-4 cursor-pointer px-6 py-4",onClick:()=>U(!F),children:[S.jsx("p",{className:"text-lg font-bold text-gray-900 leading-relaxed flex-1",children:w.question}),S.jsx("div",{className:"flex-shrink-0 text-gray-400 hover:text-indigo-600 transition-colors",children:F?S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})}):S.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})})]}),F&&S.jsxs("div",{className:"mt-8 pt-8 px-6 pb-6 border-t-2 border-gray-100 space-y-6 animate-in fade-in duration-300",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"inline-block px-3 py-1 bg-green-100 rounded-full text-xs font-bold text-green-700 mb-3",children:"ANSWER"}),S.jsx("p",{className:"text-gray-800 leading-relaxed text-base",children:w.answer})]}),w.diagrams&&w.diagrams.length>0&&S.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-100",children:[S.jsxs("h4",{className:"font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2",children:[S.jsx("div",{className:"w-2 h-2 bg-purple-600 rounded-full"}),"Diagrams"]}),S.jsx("div",{className:"space-y-4",children:w.diagrams.map((m,x)=>S.jsx(rv,{diagram:m},x))})]}),w.codeSnippets&&w.codeSnippets.length>0&&S.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-100",children:[S.jsxs("h4",{className:"font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2",children:[S.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"}),"Code Examples"]}),S.jsx("div",{className:"space-y-3",children:w.codeSnippets.map((m,x)=>S.jsx(av,{snippet:m},x))})]})]})]})}function sv({subjects:w,selectedSubject:F,selectedTopic:U}){const m=w.find(X=>X.id===F),x=m?.topics.find(X=>X.id===U),M=Yt.useRef(null);return Yt.useEffect(()=>{M.current?.scrollTo(0,0)},[U]),F?U?x?S.jsx("div",{ref:M,className:"content-area flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-12 md:p-16",children:S.jsxs("div",{className:"max-w-5xl mx-auto",children:[S.jsxs("nav",{className:"flex items-center gap-3 mb-8 text-sm",children:[S.jsx("span",{className:"px-4 py-2 bg-white rounded-full font-semibold text-indigo-600 shadow-sm border-2 border-indigo-100",children:m?.name}),S.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),S.jsx("span",{className:"px-4 py-2 bg-white rounded-full font-semibold text-purple-600 shadow-sm border-2 border-purple-100",children:x.name})]}),S.jsxs("div",{className:"mb-10 space-y-4",children:[S.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:x.name}),S.jsx("div",{className:"flex items-center gap-4",children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-sm",children:x.questions.length}),S.jsxs("span",{className:"text-gray-700 font-semibold",children:["question",x.questions.length!==1?"s":""]})]})})]}),S.jsxs("div",{className:"mb-10 space-y-2",children:[S.jsx("div",{className:"h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner",children:S.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500",style:{width:`${Math.min(x.questions.length/15*100,100)}%`}})}),S.jsx("p",{className:"text-sm text-gray-500",children:"Learning path progress"})]}),S.jsx("div",{className:"grid gap-8",children:x.questions.map((X,ue)=>S.jsx("div",{className:"transform transition-all duration-300 hover:scale-[1.01]",children:S.jsxs("div",{className:"flex gap-4",children:[S.jsx("div",{className:"flex-shrink-0",children:S.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg",children:ue+1})}),S.jsx("div",{className:"flex-1",children:S.jsx(ov,{question:X})})]})},X.id))})]})}):S.jsx("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:S.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"Topic Not Found"})}):S.jsxs("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:[S.jsx("div",{className:"text-6xl mb-4",children:"👉"}),S.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3",children:"Select a Topic"}),S.jsx("p",{className:"text-gray-600 text-lg",children:"Choose a topic to view questions and answers."})]}):S.jsxs("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:[S.jsx("div",{className:"text-6xl mb-4",children:"📚"}),S.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3",children:"Welcome to Interview Prep"}),S.jsx("p",{className:"text-gray-600 text-lg",children:"Choose a subject from the sidebar to get started."})]})}const lv={id:"js-basics",name:"Basics",questions:[{id:"q1",question:"What are the different data types in JavaScript?",answer:"JavaScript has 8 data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt, and Object. Primitive types are immutable, while objects are mutable reference types.",codeSnippets:[{language:"javascript",code:`// Primitive types
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
}`}]}]},cv={id:"js-async",name:"Asynchronous Programming",questions:[{id:"q6",question:"What is a Promise in JavaScript?",answer:"A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, or rejected.",codeSnippets:[{language:"javascript",code:`const promise = new Promise((resolve, reject) => {
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
}`}]}]},uv={id:"js-closures",name:"Closures & Scope",questions:[{id:"q23",question:"What is a closure in JavaScript?",answer:"A closure is a function that has access to variables in its outer scope even after the outer function has returned. Functions form closures around the data they need.",codeSnippets:[{language:"javascript",code:`// Simple closure
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
// inner -> middle -> outer -> global`}]}]},dv={id:"js-this",name:"'this' Binding & Objects",questions:[{id:"q25",question:"What is 'this' in JavaScript and how is it determined?",answer:"'this' is a keyword that refers to the object context. Its value is determined by HOW a function is called: as method (object), function, constructor, or with call/apply/bind.",codeSnippets:[{language:"javascript",code:`// 1. Method call - 'this' is the object
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
Array.prototype.forEach.call(arrayLike, item => console.log(item));`}]}]},pv={id:"js-prototypes",name:"Prototypes & Inheritance",questions:[{id:"q27",question:"What are prototypes in JavaScript?",answer:"Prototypes are objects that other objects can inherit properties and methods from. Every object has a prototype ([[Prototype]]). Objects delegate to their prototype when a property is not found.",codeSnippets:[{language:"javascript",code:`// Prototype chain
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

// Both are equivalent - classes are syntactic sugar over prototypes`}]}]},mv={id:"javascript",name:"JavaScript",topics:[lv,cv,uv,dv,pv]},gv={id:"react-basics",name:"Basics",questions:[{id:"q11",question:"What are React hooks?",answer:"Hooks are functions that let you use state and other React features in functional components. Common hooks are useState, useEffect, useContext, and useReducer.",codeSnippets:[{language:"jsx",code:`import { useState, useEffect } from 'react';

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
}`}]}]},vv={id:"react-hooks",name:"Hooks Deep Dive",questions:[{id:"q16",question:"What is the useState hook and how does it work?",answer:"useState is a React hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.",codeSnippets:[{language:"jsx",code:`import { useState } from 'react';

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
}`}]}]},fv={id:"react-performance",name:"Performance Optimization",questions:[{id:"q21",question:"What is React.memo and when should you use it?",answer:"React.memo is a higher-order component that memoizes a component. It prevents re-renders if props haven't changed. Use it for expensive components that receive same props frequently.",codeSnippets:[{language:"jsx",code:`// Without memo - re-renders even if props are same
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
// useCallback - function passed to memoized child components`}]}]},yv={id:"react-unit-testing",name:"Unit Testing",questions:[{id:"q31",question:"What is React Testing Library and how does it differ from Enzyme?",answer:"React Testing Library is a modern testing utility that encourages testing components from a user's perspective. It queries the DOM using user-facing selectors (text, roles, labels). Enzyme tests component internals (state, props) and implementation details. React Testing Library is now the recommended approach as it prevents testing implementation details and ensures your tests resemble actual user interactions.",codeSnippets:[{language:"javascript",code:`// React Testing Library - User-centric approach
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
});`}]}]},hv={id:"react",name:"React",topics:[gv,vv,fv,yv]},bv={id:"csharp-creational",name:"Creational Patterns",questions:[{id:"q1",question:"What is the Singleton pattern and how do you implement it in C#?",answer:"The Singleton pattern ensures a class has only one instance and provides a global point of access to it. It's useful for centralized management of resources like database connections, logging, or configuration. There are multiple implementation approaches with different thread-safety guarantees.",codeSnippets:[{language:"csharp",code:`// Eager initialization - Thread-safe
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
Console.WriteLine($"Cloned: {clonedUser.Name}, Roles: {string.Join(", ", clonedUser.Roles)}");`}]}]},Cv={id:"csharp-structural",name:"Structural Patterns",questions:[{id:"q6",question:"What is the Adapter pattern and provide a C# example.",answer:"The Adapter pattern converts the interface of a class into another interface clients expect. It lets classes work together that couldn't otherwise because of incompatible interfaces. It's useful for integrating legacy code or third-party libraries.",codeSnippets:[{language:"csharp",code:`// Existing interface (third-party)
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
rasterCircle.Draw(); // Raster rendering circle...`}]}]},Sv={id:"csharp-behavioral",name:"Behavioral Patterns",questions:[{id:"q11",question:"What is the Observer pattern and how do you implement it in C#?",answer:"The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically. In C#, you can use delegates, events, or implement IObserver/IObservable.",codeSnippets:[{language:"csharp",code:`// Using Events and Delegates
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
manager.Handle(new ExpenseRequest { Amount = 50000 }); // CEO approves`}]}]},Av={id:"csharp",name:"C# Design Patterns",topics:[bv,Cv,Sv]},Tv={id:"microservices-communication",name:"Service Communication",questions:[{id:"q1",question:"What is the API Gateway pattern and why is it important in microservices?",answer:"The API Gateway pattern provides a single entry point for all client requests to a microservices architecture. It handles request routing, protocol translation, authentication, rate limiting, and response aggregation. It simplifies client code and provides a facade over complex microservices.",codeSnippets:[{language:"csharp",code:`// API Gateway using middleware
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
}`}]}]},wv={id:"microservices-resilience",name:"Resilience Patterns",questions:[{id:"q1",question:"What is the Circuit Breaker pattern and how does it prevent cascading failures?",answer:"The Circuit Breaker pattern monitors for failures and temporarily stops requests to a failing service. It has three states: Closed (normal), Open (blocking requests), and Half-Open (testing recovery). Prevents cascading failures and allows services to recover gracefully.",codeSnippets:[{language:"csharp",code:`// Circuit Breaker Implementation
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
);`}]}]},Lv={id:"microservices-data",name:"Data Management",questions:[{id:"q1",question:"What is the Database per Service pattern and its advantages/disadvantages?",answer:"The Database per Service pattern assigns each microservice its own database, ensuring loose coupling and independent scaling. Advantages: autonomy, technology flexibility, easier scaling. Disadvantages: distributed transactions, data consistency challenges, cross-service queries.",codeSnippets:[{language:"C#",code:`// Database per Service Pattern
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
}`}]}]},Ev={id:"microservices",name:"Microservices",topics:[Tv,wv,Lv]},Wv={id:"csharp-oops-concepts",name:"OOPs Concepts",questions:[{id:"q1",question:"What are the four pillars of OOP and explain each one briefly?",answer:"The four pillars are: (1) Encapsulation - bundling data and methods, hiding internals with access modifiers. (2) Inheritance - deriving new classes from existing ones, reusing code. (3) Polymorphism - objects can take many forms, same method name different behavior. (4) Abstraction - hiding complexity, exposing only essential features through interfaces/abstract classes.",codeSnippets:[{language:"csharp",code:`using System;

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
// good = new GoodPractice(null); // Throws ArgumentNullException`}]}]},Dv={id:"csharp-solid-principles",name:"SOLID Principles",questions:[{id:"q1",question:"What are SOLID principles and why are they important?",answer:"SOLID is an acronym for five design principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) that make code more maintainable, scalable, and testable. They help you write clean code that's easy to understand, modify, and extend without breaking existing functionality.",codeSnippets:[{language:"csharp",code:`// BAD - Violates SOLID principles
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
// No way to inject mocks`}]}]},Iv={id:"csharp-multi-threading",name:"Multi-threading",questions:[{id:"q1",question:"What is multi-threading and why is it important in C#?",answer:"Multi-threading allows multiple threads to execute within a single process, enabling concurrent execution of code. It's important for improving application responsiveness, better resource utilization, and handling multiple operations simultaneously.",codeSnippets:[{language:"csharp",code:`// Creating and starting threads
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
bag.TryTake(out string item);`}]}]},Rv={id:"csharp-async-programming",name:"Asynchronous Programming",questions:[{id:"q1",question:"What is asynchronous programming and why is it important in C#?",answer:"Asynchronous programming allows operations to run without blocking the calling thread. It's important for improving application responsiveness, especially for I/O operations like database queries, API calls, and file access. It enables better resource utilization by allowing the thread to work on other tasks while waiting.",codeSnippets:[{language:"csharp",code:`// Synchronous - blocks thread
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
// async Task<T>: When you need to return a value`}]}]},Ov={id:"csharp-linq",name:"LINQ (Language Integrated Query)",questions:[{id:"q1",question:"What is LINQ and why is it important in C#?",answer:"LINQ (Language Integrated Query) provides a uniform way to query different data sources using C# syntax. It works with objects (LINQ to Objects), databases (LINQ to SQL/Entity Framework), XML (LINQ to XML), and more. It's important because it provides type-safe, readable queries with compile-time checking and IntelliSense support.",codeSnippets:[{language:"csharp",code:`using System;
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
    .ToList(); // Faster - no tracking overhead`}]}]},xv={id:"csharp-garbage-collection",name:"Garbage Collection",questions:[{id:"q1",question:"What is garbage collection and why is it important?",answer:"Garbage collection is the automatic memory management process that frees memory occupied by objects no longer needed. It's important because it eliminates manual memory management, prevents memory leaks, and reduces the chance of bugs like accessing freed memory or double-freeing.",codeSnippets:[{language:"csharp",code:`// In languages without GC (like C++), you must manage memory manually
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
// 8. Configure GC mode appropriately (Workstation vs Server)`}]}]},kv={id:"csharp-collections",name:"Collections",questions:[{id:"q1",question:"What are collections in C# and what are the main types?",answer:"Collections are data structures that store and manage groups of objects. Main types: List<T> (ordered, indexable), Dictionary<K,V> (key-value pairs), HashSet<T> (unique items), Queue<T> (FIFO), Stack<T> (LIFO), LinkedList<T> (doubly-linked). Located in System.Collections.Generic namespace.",codeSnippets:[{language:"csharp",code:`using System;
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
}`}]}]},Nv={id:"csharp-net-core",name:".NET Core",questions:[{id:"q1",question:"What is .NET Core and how is it different from .NET Framework?",answer:".NET Core is a cross-platform, open-source runtime for building modern applications. .NET Framework is Windows-only, older, not open-source. .NET Core runs on Windows, Linux, macOS. .NET Core is faster, lighter, modular. .NET Core 5+ is now called just '.NET'. Use .NET Core for new projects.",codeSnippets:[{language:"csharp",code:`// .NET Core Program.cs - Minimal hosting setup
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
Console.WriteLine("8. Consider performance for frequently called methods");`}]}]},Pv={id:"csharp-advanced",name:"C# Advanced",topics:[Wv,Dv,Iv,Rv,Ov,xv,kv,Nv]},Mv={id:"azure-app-services",name:"App Services",questions:[{id:"q1",question:"What is Azure App Service and what types of applications can you host?",answer:"Azure App Service is a fully managed platform for building and hosting web apps, mobile backends, and RESTful APIs. Types: Web Apps (.NET, Node, Python, Java, PHP), Mobile Apps, API Apps, Function Apps. Provides auto-scaling, built-in CI/CD, SSL/TLS, monitoring. Pricing tiers: Free, Shared, Basic, Standard, Premium, Isolated.",codeSnippets:[{language:"csharp",code:`// Azure App Service - Deployment from Program.cs
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
Console.WriteLine("✓ Monitoring shows no errors");`}]}]},Uv={id:"azure-containers",name:"Container Deployment",questions:[{id:"q1",question:"What is Docker and how do you containerize a .NET application?",answer:"Docker packages application with dependencies in isolated container. Dockerfile defines build steps. Container runs same everywhere (development, testing, production). Base images: mcr.microsoft.com/dotnet/sdk (build), mcr.microsoft.com/dotnet/runtime (run). Multi-stage builds: build in SDK, run in runtime for smaller image.",codeSnippets:[{language:"csharp",code:`// Dockerfile for .NET Application

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
Console.WriteLine("Webhook triggers automatic deployment on image push");`}]}]},Gv={id:"azure-service-bus",name:"Service Bus & Functions",questions:[{id:"q1",question:"What is Azure Service Bus and what are its main components?",answer:"Azure Service Bus is enterprise messaging service (asynchronous communication). Components: Queues (one-to-one), Topics (one-to-many with subscriptions), Relay (hybrid connections). Features: message sessions, dead-letter queues, duplicate detection, message TTL. Use for decoupling applications, ordering guarantees, delayed processing.",codeSnippets:[{language:"csharp",code:`using Azure.Messaging.ServiceBus;

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
Console.WriteLine("6. Dead-letter handling");`}]}]},qv={id:"azure-cloud-deployment",name:"Cloud Deployment",questions:[{id:"q1",question:"What is Infrastructure as Code (IaC) and how do you use it in Azure?",answer:"IaC defines infrastructure in code files (Bicep, ARM templates, Terraform). Version control friendly. Repeatable deployments. Azure-specific: Bicep (recommended, simpler syntax), ARM templates (JSON). Terraform (multi-cloud). Define resources in code, deploy via CLI or pipelines.",codeSnippets:[{language:"csharp",code:`// Bicep - Infrastructure as Code for Azure

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
Console.WriteLine("User Access Administrator - Manage RBAC");`}]}]},Bv={id:"azure-networking",name:"Networking",questions:[{id:"q1",question:"What is Azure Virtual Network (VNet) and how do you use it?",answer:"VNet is isolated network environment in Azure. Contains subnets (subdivisions). Enables: communication between Azure resources, access to on-premises networks via VPN/ExpressRoute, filtering with Network Security Groups (NSG). Supports custom IP address space. Required for VMs, databases, etc.",codeSnippets:[{language:"csharp",code:`// Azure Virtual Network (VNet)

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
Console.WriteLine("4. Configure BGP peering");`}]}]},Hv={id:"azure-api-security",name:"API Security & API Management",questions:[{id:"q1",question:"What is Azure API Management (APIM) and its key features?",answer:"APIM is gateway for APIs: publish, manage, secure, monitor. Key features: API versioning, rate limiting, authentication (OAuth, API Key), request/response transformation, analytics, developer portal, policy engine. Sits between clients and backend services.",codeSnippets:[{language:"csharp",code:`// Azure API Management (APIM)

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
Console.WriteLine("- Log Analytics Workspace");`}]}]},zv={id:"azure-storage-services",name:"Storage Services",questions:[{id:"q1",question:"What are the main Azure Storage services and their use cases?",answer:"Azure Storage consists of four main services: 1) Blob Storage - for unstructured data (files, images, videos, backups). 2) File Shares - for managed SMB/NFS file shares accessible from multiple VMs. 3) Queue Storage - for asynchronous message queuing between services. 4) Table Storage - for NoSQL structured data (now mostly replaced by Cosmos DB). All support redundancy options: LRS (3 copies locally), GRS (3 locally + 3 in region pair), RA-GRS (GRS + read access). Pricing tiers: Hot (frequent access), Cool (infrequent), Archive (rare access).",codeSnippets:[{language:"csharp",code:`// Azure Storage Services Overview
using Azure.Storage.Blobs;
using Azure.Storage.Files.Shares;
using Azure.Storage.Queues;
using Azure.Data.Tables;
using Azure.Identity;

var storageAccountName = "mystorageaccount";
var storageUri = new Uri($"https://{storageAccountName}.blob.core.windows.net");

// 1. Blob Storage - Unstructured data (images, documents, videos)
var blobClient = new BlobContainerClient(
    new Uri($"https://{storageAccountName}.blob.core.windows.net/mycontainer"),
    new DefaultAzureCredential()
);

await blobClient.UploadBlobAsync("file.txt", BinaryData.FromString("content"));
BlobDownloadInfo download = await blobClient.GetBlobClient("file.txt").DownloadAsync();

// 2. File Shares - SMB/NFS file shares for VMs
var fileShareUri = new Uri($"https://{storageAccountName}.file.core.windows.net/myshare");
var shareClient = new ShareClient(fileShareUri, new DefaultAzureCredential());

ShareDirectoryClient dirClient = shareClient.GetRootDirectoryClient();
await dirClient.UploadFileAsync("document.txt", BinaryData.FromString("data"));

// 3. Queue Storage - Asynchronous messaging
var queueUri = new Uri($"https://{storageAccountName}.queue.core.windows.net/myqueue");
var queueClient = new QueueClient(queueUri, new DefaultAzureCredential());

await queueClient.SendMessageAsync("order-12345");
QueueMessage[] messages = await queueClient.ReceiveMessagesAsync(1);

// 4. Table Storage - NoSQL structured data
var tableUri = new Uri($"https://{storageAccountName}.table.core.windows.net");
var tableClient = new TableClient(tableUri, "Products", new DefaultAzureCredential());

// Storage Tiers
Console.WriteLine("Azure Storage Tiers:");
Console.WriteLine("Hot    - Frequent access, highest cost, instant retrieval");
Console.WriteLine("Cool   - Infrequent access (30+ days), lower cost");
Console.WriteLine("Archive - Rare access (90+ days), lowest cost, rehydration needed");

// Redundancy Options
Console.WriteLine("\\nRedundancy Options:");
Console.WriteLine("LRS  - Locally Redundant (3 copies in same datacenter)");
Console.WriteLine("GRS  - Geo-Redundant (3 local + 3 in secondary region)");
Console.WriteLine("RA-GRS - Read-Access Geo-Redundant (can read from secondary)");
Console.WriteLine("GZRS - Geo-Zone-Redundant (zone redundancy + geo)");`}]},{id:"q2",question:"How do you implement Blob Storage with access tiers and lifecycle management?",answer:"Blob Storage supports access tiers (Hot, Cool, Archive) for cost optimization. Hot tier is for frequent access. Cool tier for infrequent access (30+ days minimum), cheaper but retrieval slightly slower. Archive tier for rare access (90+ days), cheapest but requires rehydration. Lifecycle policies automatically move blobs between tiers based on age. Can specify rules like: move to Cool after 30 days, to Archive after 90 days. Supports blob versioning and soft delete for protection.",codeSnippets:[{language:"csharp",code:`// Azure Blob Storage - Access Tiers & Lifecycle
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Identity;

var blobContainerUri = new Uri("https://mystorageaccount.blob.core.windows.net/mycontainer");
var containerClient = new BlobContainerClient(blobContainerUri, new DefaultAzureCredential());

// 1. Upload to different tiers
var blobClient = containerClient.GetBlobClient("report.pdf");

// Upload to Hot tier (default)
using (var stream = new MemoryStream(File.ReadAllBytes("large-file.pdf")))
{
    await blobClient.UploadAsync(stream, overwrite: true);
}

// Move to Cool tier
await blobClient.SetAccessTierAsync(AccessTier.Cool);

// Move to Archive tier (requires rehydration to access)
await blobClient.SetAccessTierAsync(AccessTier.Archive);

// 2. Rehydrate from Archive
await blobClient.SetAccessTierAsync(AccessTier.Hot, RehydratePriority.High);
// High priority: 1 hour, Standard priority: 15 hours

// 3. Download and check tier
BlobDownloadInfo download = await blobClient.DownloadAsync();
Console.WriteLine($"Blob tier: {download.Details.AccessTier}");

// 4. List blobs with properties
await foreach (BlobItem blobItem in containerClient.GetBlobsAsync(
    BlobTraits.None,
    BlobStates.None))
{
    Console.WriteLine($"Name: {blobItem.Name}");
    Console.WriteLine($"Size: {blobItem.Properties.ContentLength} bytes");
    Console.WriteLine($"Tier: {blobItem.Properties.AccessTier}");
    Console.WriteLine($"Created: {blobItem.Properties.CreatedOn}");
}

// 5. Lifecycle Management Policy (JSON config for Azure Portal or CLI)
var lifecyclePolicy = @"
{
  'rules': [
    {
      'name': 'AutoTiering',
      'enabled': true,
      'type': 'Lifecycle',
      'definition': {
        'actions': {
          'baseBlob': {
            'tierToCool': {
              'daysAfterModificationGreaterThan': 30
            },
            'tierToArchive': {
              'daysAfterModificationGreaterThan': 90
            },
            'delete': {
              'daysAfterModificationGreaterThan': 365
            }
          }
        },
        'filters': {
          'blobTypes': ['blockBlob']
        }
      }
    }
  ]
}";

// CLI to set lifecycle policy:
// az storage account management-policy create --account-name mystorageaccount 
// --resource-group myRG --policy @policy.json

// 6. Soft Delete & Versioning
var containerProperties = new BlobContainerProperties();
// Enable soft delete (items recoverable for 7 days after deletion)
// Enable versioning (keeps previous versions)

// Cost Optimization Example
Console.WriteLine("Storage Cost Optimization Strategy:");
Console.WriteLine("- New data (0-30 days) → Hot tier");
Console.WriteLine("- Aged data (30-90 days) → Cool tier");
Console.WriteLine("- Old backups (90+ days) → Archive tier");
Console.WriteLine("- Never accessed (365+ days) → Delete");
Console.WriteLine("\\nThis can reduce storage costs by 50-80%");`}]},{id:"q3",question:"What is the difference between Blob Storage, File Shares, and Queue Storage?",answer:"Blob Storage: Unstructured data storage (images, videos, documents, backups), REST API access, optimal for massive scale data. File Shares: Managed SMB/NFS shares for network access, mount like network drives, supports Windows/Linux, good for legacy apps sharing files. Queue Storage: Asynchronous message queuing for decoupling services, FIFO, messages expire after 7 days (default), small payload size (64KB). Choose Blob for files, File Shares for shared network access, Queue for async communication.",codeSnippets:[{language:"csharp",code:`// Comparison: Blob vs File Shares vs Queue Storage
using Azure.Storage.Blobs;
using Azure.Storage.Files.Shares;
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using Azure.Identity;

var accountName = "mystorageaccount";

// ============= BLOB STORAGE =============
// Use Case: Large files, images, backups, unstructured data
// Access: REST API, HTTP/HTTPS, SDKs
// Scale: Petabytes, millions of files

var blobUri = new Uri($"https://{accountName}.blob.core.windows.net/files");
var blobContainer = new BlobContainerClient(blobUri, new DefaultAzureCredential());

// Upload large file
var blockBlobClient = blobContainer.GetBlockBlobClient("large-video.mp4");
await blockBlobClient.UploadAsync("video.mp4", overwrite: true);

// Upload with metadata
var blobHttpHeaders = new BlobHttpHeaders { ContentType = "image/jpeg" };
var metadata = new Dictionary<string, string> { { "department", "marketing" } };
await blockBlobClient.SetHttpHeadersAsync(blobHttpHeaders);
await blockBlobClient.SetMetadataAsync(metadata);

Console.WriteLine("✓ Blob Storage: Best for unstructured large data");

// ============= FILE SHARES =============
// Use Case: Shared file access, legacy apps, SMB protocol
// Access: SMB 3.0 (Windows/Linux/macOS), NFS 4.1
// Scale: Up to 100TB per share

var fileShareUri = new Uri($"https://{accountName}.file.core.windows.net");
var fileShareClient = new ShareClient(fileShareUri, new DefaultAzureCredential());

var shareRootDir = fileShareClient.GetRootDirectoryClient();
var subdirectory = shareRootDir.GetSubdirectoryClient("documents");
await subdirectory.CreateIfNotExistsAsync();

// Upload file to share
using (var stream = File.OpenRead("report.docx"))
{
    await subdirectory.GetFileClient("report.docx").UploadAsync(stream, overwrite: true);
}

// Can be mounted like network drive:
// Windows: net use Z: \\\\mystorageaccount.file.core.windows.net\\fileshare password /user:azure\\mystorageaccount
// Linux: mount -t cifs //mystorageaccount.file.core.windows.net/fileshare /mnt/share -o username=mystorageaccount

Console.WriteLine("✓ File Shares: Best for shared network file access");

// ============= QUEUE STORAGE =============
// Use Case: Asynchronous job queuing, decoupling services
// Access: REST API, message-based
// Message Size: Up to 64KB, TTL 7 days default

var queueUri = new Uri($"https://{accountName}.queue.core.windows.net");
var queueClient = new QueueClient(queueUri, new DefaultAzureCredential());

// Producer: Enqueue message
await queueClient.SendMessageAsync("process-order-12345");
await queueClient.SendMessageAsync("send-email-user-456");

// Consumer: Dequeue and process
QueueMessage[] messages = await queueClient.ReceiveMessagesAsync(
    maxMessages: 10,
    visibilityTimeout: TimeSpan.FromMinutes(5)
);

foreach (QueueMessage message in messages)
{
    Console.WriteLine($"Processing: {message.Body}");
    
    // Process the message
    await ProcessOrderAsync(message.Body.ToString());
    
    // Delete from queue when done
    await queueClient.DeleteMessageAsync(message.MessageId, message.PopReceipt);
}

// If processing fails, message becomes visible again after visibilityTimeout
// Max retries: message TTL (default 7 days)

Console.WriteLine("✓ Queue Storage: Best for asynchronous task queuing");

// ============= COMPARISON TABLE =============
var comparison = new[]
{
    new { Service = "Blob", Use = "Large files/images/backups", Protocol = "REST/HTTP", Scale = "Petabytes", Cost = "$" },
    new { Service = "File Shares", Use = "Shared network access", Protocol = "SMB/NFS", Scale = "100TB/share", Cost = "$" },
    new { Service = "Queue", Use = "Async messaging", Protocol = "REST/HTTP", Scale = "Millions msg", Cost = "$" }
};

Console.WriteLine("\\nComparison:");
Console.WriteLine("Service      | Use Case               | Protocol    | Scale         | Cost");
Console.WriteLine("-------------|------------------------|-------------|---------------|------");
foreach (var row in comparison)
{
    Console.WriteLine($"{row.Service,-12} | {row.Use,-22} | {row.Protocol,-11} | {row.Scale,-13} | {row.Cost}");
}

async Task ProcessOrderAsync(string orderId)
{
    await Task.Delay(1000);
    Console.WriteLine($"Order {orderId} processed successfully");
}`}]},{id:"q4",question:"How do you secure Azure Storage with SAS tokens and managed identities?",answer:"Azure Storage can be secured using: 1) Storage Account Keys (not recommended for production, full access). 2) Shared Access Signatures (SAS) - time-limited tokens with specific permissions, can be Account-level or Service-level. 3) Managed Identities - best practice, Azure AD integration, no credentials to manage, automatic rotation. 4) Azure RBAC - role-based access control with fine-grained permissions. SAS tokens include expiration, IP restrictions, protocol constraints. Managed identities with Azure.Identity DefaultAzureCredential is production-recommended.",codeSnippets:[{language:"csharp",code:`// Azure Storage Security - SAS Tokens & Managed Identities
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Sas;
using Azure.Storage.Sas;
using Azure.Identity;
using Azure;

var accountName = "mystorageaccount";
var accountKey = "your-account-key";
var containerName = "mycontainer";

// ============= APPROACH 1: Managed Identity (RECOMMENDED) =============
// Best practice: No credentials needed, automatic rotation
// Requirements: Enable Managed Identity on your Azure resource (VM, App Service, Function, etc.)

var blobUri = new Uri($"https://{accountName}.blob.core.windows.net/{containerName}");
var blobContainerClient = new BlobContainerClient(
    blobUri,
    new DefaultAzureCredential() // Uses Managed Identity automatically
);

// Access blob without any credentials!
var blobClient = blobContainerClient.GetBlobClient("data.json");
BlobDownloadInfo download = await blobClient.DownloadAsync();
Console.WriteLine("✓ Accessed blob using Managed Identity");

// ============= APPROACH 2: Account-Level SAS Token =============
// Temporary token with expiration, specific permissions, IP/protocol restrictions

var sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

// Create Account SAS (high privilege, access to all services)
AccountSasBuilder sasBuilder = new AccountSasBuilder()
{
    Services = AccountSasServices.Blobs | AccountSasServices.Queues,
    ResourceTypes = AccountSasResourceTypes.All,
    ExpiresOn = DateTimeOffset.UtcNow.AddHours(1),
    Protocol = SasProtocol.Https,
    IPRange = new SasIPRange(System.Net.IPAddress.Parse("203.0.113.0"), System.Net.IPAddress.Parse("203.0.113.100"))
};

sasBuilder.SetPermissions(AccountSasPermissions.All);

string accountSasToken = sasBuilder.ToSasQueryParameters(sharedKeyCredential).ToString();
Console.WriteLine($"Account SAS Token: {accountSasToken}");

// ============= APPROACH 3: Service-Level SAS Token =============
// Specific to a container or blob, more secure than account SAS

BlobSasBuilder blobSasBuilder = new BlobSasBuilder()
{
    BlobContainerName = containerName,
    BlobName = "data.json",
    ExpiresOn = DateTimeOffset.UtcNow.AddMinutes(30), // Expires in 30 minutes
    Protocol = SasProtocol.Https
};

// Read-only permissions
blobSasBuilder.SetPermissions(BlobSasPermissions.Read);

string blobSasToken = blobSasBuilder.ToSasQueryParameters(sharedKeyCredential).ToString();
string sasUri = new UriBuilder(blobUri)
{
    Query = blobSasToken
}.Uri.ToString();

Console.WriteLine($"Blob SAS URI: {sasUri}");

// Grant write permission for 1 hour
var writeSasBuilder = new BlobSasBuilder()
{
    BlobContainerName = containerName,
    ExpiresOn = DateTimeOffset.UtcNow.AddHours(1)
};
writeSasBuilder.SetPermissions(BlobSasPermissions.Write | BlobSasPermissions.Create | BlobSasPermissions.Delete);

// ============= APPROACH 4: Azure RBAC (Recommended for production) =============
// Assign roles to Managed Identity or users
// Roles: Storage Blob Data Owner, Storage Blob Data Contributor, Storage Blob Data Reader

// Example: Assign 'Storage Blob Data Reader' role to app's Managed Identity
// az role assignment create \\
//   --role "Storage Blob Data Reader" \\
//   --assignee-object-id <managed-identity-object-id> \\
//   --scope /subscriptions/<sub>/resourceGroups/<rg>/providers/Microsoft.Storage/storageAccounts/<account>

// ============= SECURITY BEST PRACTICES =============
Console.WriteLine("\\nSecurity Best Practices:");
Console.WriteLine("1. ✓ Use Managed Identity for Azure services (no credentials)");
Console.WriteLine("2. ✓ Use SAS tokens for temporary/external access (time-limited)");
Console.WriteLine("3. ✓ Apply IP restrictions to SAS tokens");
Console.WriteLine("4. ✓ Use HTTPS only (SasProtocol.Https)");
Console.WriteLine("5. ✓ Never expose account keys in code");
Console.WriteLine("6. ✓ Rotate keys regularly (if using)");
Console.WriteLine("7. ✓ Use RBAC for permanent role-based access");
Console.WriteLine("8. ✓ Enable firewall rules (allow specific VNets/IPs)");
Console.WriteLine("9. ✓ Monitor access logs and alerts");
Console.WriteLine("10. ✓ Use private endpoints (deny public access)");

// ============= PRIVATE ENDPOINT EXAMPLE =============
// Block public internet, only allow from private VNet
Console.WriteLine("\\nPrivate Endpoint Setup:");
Console.WriteLine("az network private-endpoint create \\\\");
Console.WriteLine("  --name myPrivateEndpoint \\\\");
Console.WriteLine("  --resource-group myRG \\\\");
Console.WriteLine("  --vnet-name myVNet \\\\");
Console.WriteLine("  --subnet mySubnet \\\\");
Console.WriteLine("  --private-connection-resource-id /subscriptions/.../storageAccounts/mystorageaccount \\\\");
Console.WriteLine("  --group-ids blob");`}]},{id:"q5",question:"How do you implement Queue Storage for producer-consumer patterns?",answer:"Queue Storage enables decoupling of services using producer-consumer pattern. Producer sends messages, consumer processes them. Messages have TTL (7 days default), visibility timeout (how long message hidden after receive), and dead-letter handling. Implement polling or use Azure Functions with Queue trigger for automatic scaling. Use message batching for efficiency. Implement idempotent processing for reliability (same message processed multiple times shouldn't cause issues).",codeSnippets:[{language:"csharp",code:`// Azure Queue Storage - Producer-Consumer Pattern
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using Azure.Identity;
using System.Text.Json;

var queueUri = new Uri("https://mystorageaccount.queue.core.windows.net/orders");
var queueClient = new QueueClient(queueUri, new DefaultAzureCredential());

// ============= PRODUCER: Send Orders =============
async Task ProduceOrdersAsync()
{
    var orders = new[]
    {
        new Order { OrderId = "ORD-001", CustomerId = "CUST-100", Total = 99.99m },
        new Order { OrderId = "ORD-002", CustomerId = "CUST-101", Total = 149.99m },
        new Order { OrderId = "ORD-003", CustomerId = "CUST-102", Total = 79.99m }
    };

    foreach (var order in orders)
    {
        // Serialize order to JSON
        string messageText = JsonSerializer.Serialize(order);
        
        // Send to queue
        await queueClient.SendMessageAsync(messageText);
        Console.WriteLine($"✓ Enqueued order: {order.OrderId}");
    }
}

// ============= CONSUMER: Process Orders (Polling) =============
async Task ConsumeOrdersAsync(CancellationToken cancellationToken)
{
    Console.WriteLine("Consumer started, waiting for messages...");
    
    while (!cancellationToken.IsCancellationRequested)
    {
        try
        {
            // Receive up to 10 messages
            QueueMessage[] messages = await queueClient.ReceiveMessagesAsync(
                maxMessages: 10,
                visibilityTimeout: TimeSpan.FromMinutes(5) // Hidden for 5 min while processing
            );

            if (messages.Length == 0)
            {
                Console.WriteLine("No messages, waiting...");
                await Task.Delay(TimeSpan.FromSeconds(10));
                continue;
            }

            foreach (QueueMessage message in messages)
            {
                try
                {
                    // Deserialize message
                    var order = JsonSerializer.Deserialize<Order>(message.Body.ToString());
                    Console.WriteLine($"Processing order: {order?.OrderId}");

                    // Process order (simulate work)
                    await ProcessOrderAsync(order);

                    // Delete message on successful processing
                    await queueClient.DeleteMessageAsync(message.MessageId, message.PopReceipt);
                    Console.WriteLine($"✓ Order processed and removed from queue");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error processing message: {ex.Message}");
                    // Message visibility resets, will be retried
                    // After max retries (TTL expires), goes to dead-letter queue
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Consumer error: {ex.Message}");
            await Task.Delay(TimeSpan.FromSeconds(5));
        }
    }
}

// ============= DEAD-LETTER QUEUE =============
async Task HandleDeadLettersAsync()
{
    var dlqClient = new QueueClient(
        new Uri("https://mystorageaccount.queue.core.windows.net/orders-deadletter"),
        new DefaultAzureCredential()
    );

    var messages = await dlqClient.ReceiveMessagesAsync(maxMessages: 1);
    if (messages.Length > 0)
    {
        Console.WriteLine($"Dead-letter message: {messages[0].Body}");
        // Manual review or retry logic
    }
}

// ============= IDEMPOTENT PROCESSING =============
async Task ProcessOrderIdempotentAsync(Order order)
{
    // Check if already processed (idempotency key)
    string idempotencyKey = $"order-{order.OrderId}";
    
    if (await IsAlreadyProcessedAsync(idempotencyKey))
    {
        Console.WriteLine($"Order {order.OrderId} already processed, skipping");
        return;
    }

    // Process order
    await ProcessOrderAsync(order);

    // Mark as processed
    await MarkAsProcessedAsync(idempotencyKey);
}

// ============= BATCH PROCESSING =============
async Task ProcessBatchAsync()
{
    int batchSize = 10;
    var messages = await queueClient.ReceiveMessagesAsync(maxMessages: batchSize);

    if (messages.Length > 0)
    {
        var orders = messages
            .Select(m => JsonSerializer.Deserialize<Order>(m.Body.ToString()))
            .ToList();

        // Batch database insert (more efficient)
        await BatchInsertOrdersAsync(orders);

        // Delete all messages at once
        foreach (var message in messages)
        {
            await queueClient.DeleteMessageAsync(message.MessageId, message.PopReceipt);
        }
    }
}

// ============= PRIORITY QUEUES =============
async Task PriorityQueuePatternAsync()
{
    var highPriorityQueue = new QueueClient(
        new Uri("https://mystorageaccount.queue.core.windows.net/orders-high-priority"),
        new DefaultAzureCredential()
    );

    var normalQueue = new QueueClient(
        new Uri("https://mystorageaccount.queue.core.windows.net/orders-normal"),
        new DefaultAzureCredential()
    );

    // Consumer processes high-priority first
    var highPriorityMessages = await highPriorityQueue.ReceiveMessagesAsync(maxMessages: 5);
    if (highPriorityMessages.Length > 0)
    {
        Console.WriteLine("Processing high-priority orders first!");
    }

    var normalMessages = await normalQueue.ReceiveMessagesAsync(maxMessages: 5);
    Console.WriteLine("Then processing normal orders");
}

// ============= HELPER METHODS =============
async Task ProcessOrderAsync(Order order)
{
    await Task.Delay(1000); // Simulate processing
    Console.WriteLine($"Order {order.OrderId} processed successfully");
}

async Task<bool> IsAlreadyProcessedAsync(string idempotencyKey)
{
    await Task.Delay(100);
    return false; // Check in database
}

async Task MarkAsProcessedAsync(string idempotencyKey)
{
    await Task.Delay(100);
    Console.WriteLine($"Marked {idempotencyKey} as processed");
}

async Task BatchInsertOrdersAsync(List<Order> orders)
{
    await Task.Delay(500);
    Console.WriteLine($"Batch inserted {orders.Count} orders");
}

// ============= QUEUE CONFIGURATION =============
Console.WriteLine("Queue Storage Configuration:");
Console.WriteLine("- Max message size: 64 KB");
Console.WriteLine("- Default TTL: 7 days");
Console.WriteLine("- Visibility timeout: Configurable per receive (max 12 hours)");
Console.WriteLine("- Max queue size: 500 TB");
Console.WriteLine("- Throughput: Millions of messages per day");

// Main execution
var cts = new CancellationTokenSource();

// Start producer
await ProduceOrdersAsync();

// Start consumer
_ = ConsumeOrdersAsync(cts.Token);

// Run for 30 seconds
await Task.Delay(TimeSpan.FromSeconds(30));
cts.Cancel();

class Order
{
    public string OrderId { get; set; }
    public string CustomerId { get; set; }
    public decimal Total { get; set; }
}`}]}]},jv={id:"azure-durable-functions",name:"Durable Functions",questions:[{id:"q1",question:"What are Azure Durable Functions and what problems do they solve?",answer:"Azure Durable Functions extend Azure Functions with stateful workflow capabilities. They solve problems: 1) Function orchestration - coordinating multiple functions with dependencies. 2) Long-running processes - workflows lasting hours/days without timeout. 3) Distributed transactions - managing state across function calls. 4) Retry logic - built-in with exponential backoff. 5) Checkpointing - automatic resumption from failure point. 6) Fan-out/fan-in - parallel task execution and aggregation. Key patterns: Orchestrator functions coordinate work, Activity functions do the work, Entity functions maintain state. Uses event sourcing internally, enabling replaying from checkpoints.",codeSnippets:[{language:"csharp",code:`// Azure Durable Functions - Core Concepts
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= ORCHESTRATOR FUNCTION =============
// Coordinates workflow, schedules tasks, manages state
// Note: Must be deterministic (same input = same execution path)

[FunctionName("OrderProcessingOrchestrator")]
public static async Task RunOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    var order = context.GetInput<Order>();
    var results = new List<string>();

    try
    {
        // Step 1: Validate order (calls activity function)
        var isValid = await context.CallActivityAsync<bool>(
            "ValidateOrderActivity",
            order
        );

        if (!isValid)
        {
            throw new InvalidOperationException("Order validation failed");
        }

        // Step 2: Process payment
        var paymentResult = await context.CallActivityAsync<string>(
            "ProcessPaymentActivity",
            order.Total
        );
        results.Add(paymentResult);

        // Step 3: Send confirmation email
        await context.CallActivityAsync(
            "SendConfirmationEmailActivity",
            order.CustomerEmail
        );

        // Step 4: Update inventory
        await context.CallActivityAsync(
            "UpdateInventoryActivity",
            order.Items
        );

        await context.CallActivityAsync(
            "LogSuccessActivity",
            $"Order {order.OrderId} completed successfully"
        );
    }
    catch (Exception ex)
    {
        await context.CallActivityAsync(
            "LogErrorActivity",
            ex.Message
        );
        throw;
    }
}

// ============= ACTIVITY FUNCTIONS =============
// Do the actual work (HTTP calls, database operations, etc.)
// Can be retried, can fail, no side-effect restrictions

[FunctionName("ValidateOrderActivity")]
public static async Task<bool> ValidateOrder(
    [ActivityTrigger] Order order)
{
    Console.WriteLine($"Validating order {order.OrderId}");
    await Task.Delay(500);
    return order.Total > 0 && !string.IsNullOrEmpty(order.CustomerEmail);
}

[FunctionName("ProcessPaymentActivity")]
public static async Task<string> ProcessPayment(
    [ActivityTrigger] decimal paymentAmount)
{
    Console.WriteLine($"Processing payment of \${paymentAmount}");
    await Task.Delay(1000); // Simulate payment gateway
    return $"Payment processed: \${paymentAmount}";
}

[FunctionName("SendConfirmationEmailActivity")]
public static async Task SendConfirmationEmail(
    [ActivityTrigger] string email)
{
    Console.WriteLine($"Sending confirmation to {email}");
    await Task.Delay(300);
}

[FunctionName("UpdateInventoryActivity")]
public static async Task UpdateInventory(
    [ActivityTrigger] List<OrderItem> items)
{
    Console.WriteLine($"Updating inventory for {items.Count} items");
    await Task.Delay(400);
}

[FunctionName("LogSuccessActivity")]
public static void LogSuccess([ActivityTrigger] string message)
{
    Console.WriteLine($"✓ {message}");
}

[FunctionName("LogErrorActivity")]
public static void LogError([ActivityTrigger] string error)
{
    Console.WriteLine($"✗ Error: {error}");
}

// ============= CLIENT FUNCTION =============
// Starts the orchestrator

[FunctionName("StartOrderProcessing")]
public static async Task<string> StartOrchestrator(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "orders")] Order order,
    [DurableClient] IDurableOrchestrationClient client)
{
    string instanceId = await client.StartNewAsync(
        "OrderProcessingOrchestrator",
        order
    );

    Console.WriteLine($"Started orchestration with ID: {instanceId}");
    return instanceId;
}

// ============= CHECK STATUS =============
[FunctionName("GetOrchestrationStatus")]
public static async Task<IActionResult> GetStatus(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "orders/{instanceId}")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client)
{
    var status = await client.GetStatusAsync(instanceId);
    
    return new OkObjectResult(new
    {
        InstanceId = instanceId,
        Status = status.RuntimeStatus,
        Input = status.Input,
        Output = status.Output,
        CreatedTime = status.CreatedTime,
        LastUpdatedTime = status.LastUpdatedTime
    });
}

// ============= KEY BENEFITS =============
Console.WriteLine("Durable Functions Benefits:");
Console.WriteLine("✓ Automatic checkpointing - resume from failure point");
Console.WriteLine("✓ Long-running workflows - hours/days, no timeout");
Console.WriteLine("✓ Built-in retry logic - exponential backoff");
Console.WriteLine("✓ Fan-out/fan-in patterns - parallel execution");
Console.WriteLine("✓ State management - automatic");
Console.WriteLine("✓ Event sourcing - full execution history");

class Order
{
    public string OrderId { get; set; }
    public decimal Total { get; set; }
    public string CustomerEmail { get; set; }
    public List<OrderItem> Items { get; set; }
}

class OrderItem
{
    public string ProductId { get; set; }
    public int Quantity { get; set; }
}`}]},{id:"q2",question:"What are the different Durable Functions patterns (Fan-out/Fan-in, Chaining, etc.)?",answer:"Main patterns: 1) Function Chaining - sequential execution where output of one is input to next. 2) Fan-out/Fan-in - call multiple activities in parallel, then aggregate results. 3) Async HTTP APIs - long-running workflows with polling mechanism. 4) Monitor - recurring operations checking conditions. 5) Human interaction - workflows waiting for human approval. 6) Sub-orchestrations - orchestrators calling other orchestrators. 7) Entity functions - durable state management for counters, voting, etc. Each pattern solves specific workflow challenges.",codeSnippets:[{language:"csharp",code:`// Durable Functions - Common Patterns
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// ============= PATTERN 1: FUNCTION CHAINING =============
// Sequential execution: A → B → C
// Output of A becomes input to B, etc.

[FunctionName("ChainingOrchestrator")]
public static async Task<string> Chaining(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string input)
{
    try
    {
        // Step 1: Get user
        var user = await context.CallActivityAsync<User>(
            "GetUserActivity",
            input
        );
        Console.WriteLine($"Step 1: Got user {user.Name}");

        // Step 2: Get user orders (uses user from step 1)
        var orders = await context.CallActivityAsync<List<Order>>(
            "GetUserOrdersActivity",
            user.UserId
        );
        Console.WriteLine($"Step 2: Got {orders.Count} orders");

        // Step 3: Calculate total spent (uses orders from step 2)
        var totalSpentAmount = await context.CallActivityAsync<decimal>(
            "CalculateTotalSpentActivity",
            orders
        );
        Console.WriteLine($"Step 3: Total spent: \${totalSpentAmount}");

        // Step 4: Award loyalty points (uses totalSpent from step 3)
        var loyaltyPoints = await context.CallActivityAsync<int>(
            "AwardLoyaltyPointsActivity",
            new { UserId = user.UserId, TotalSpent = totalSpentAmount }
        );

        return $"Chaining complete. User earned {loyaltyPoints} points";
    }
    catch (Exception ex)
    {
        return $"Chaining failed: {ex.Message}";
    }
}

// ============= PATTERN 2: FAN-OUT/FAN-IN =============
// Call multiple tasks in PARALLEL, then aggregate results
// Parallel execution = faster than sequential

[FunctionName("FanOutFanInOrchestrator")]
public static async Task<ParallelResults> FanOutFanIn(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string orderId)
{
    try
    {
        // Start multiple tasks in PARALLEL
        var tasks = new List<Task>();

        // Task 1: Validate order
        tasks.Add(context.CallActivityAsync("ValidateOrderActivity", orderId));

        // Task 2: Check inventory (runs in parallel!)
        tasks.Add(context.CallActivityAsync("CheckInventoryActivity", orderId));

        // Task 3: Verify payment method (runs in parallel!)
        tasks.Add(context.CallActivityAsync("VerifyPaymentActivity", orderId));

        // Task 4: Check fraud (runs in parallel!)
        tasks.Add(context.CallActivityAsync("CheckFraudActivity", orderId));

        // Wait for ALL tasks to complete
        await Task.WhenAll(tasks);

        // FAN-IN: Aggregate results
        var results = await context.CallActivityAsync<ParallelResults>(
            "AggregateResultsActivity",
            orderId
        );

        return results;
    }
    catch (Exception ex)
    {
        throw;
    }
}

// ============= PATTERN 3: ASYNC HTTP APIS =============
// Long-running workflow with status checking

[FunctionName("ReportOrchestrator")]
public static async Task<string> GenerateReportOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    ReportRequest request)
{
    // This orchestrator runs for hours
    var location = await context.CallActivityAsync<string>(
        "GenerateLargeReportActivity",
        request
    );

    return location;
}

[FunctionName("GenerateLargeReportActivity")]
public static async Task<string> GenerateLargeReport(
    [ActivityTrigger] ReportRequest request)
{
    // Simulate long-running report generation (1 hour+)
    await Task.Delay(TimeSpan.FromHours(1));
    return $"https://storage.blob.core.windows.net/reports/{request.ReportName}.pdf";
}

[FunctionName("StartReportGeneration")]
public static async Task<DurableOrchestrationStatus> StartReport(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "reports")] ReportRequest request,
    [DurableClient] IDurableOrchestrationClient client)
{
    string instanceId = await client.StartNewAsync(
        "ReportOrchestrator",
        request
    );

    // Return status URL for polling
    return new DurableOrchestrationStatus
    {
        InstanceId = instanceId,
        StatusQueryGetUri = $"/api/reports/{instanceId}"
    };
}

// ============= PATTERN 4: MONITOR =============
// Continuously check a condition, retry on failure

[FunctionName("MonitorOrchestrator")]
public static async Task Monitor(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string deploymentId)
{
    var retryPolicy = new RetryOptions(
        firstRetryInterval: TimeSpan.FromSeconds(5),
        maxNumberOfAttempts: 30 // Try for 2.5 minutes
    )
    {
        BackoffCoefficient = 1.5
    };

    while (true)
    {
        try
        {
            // Check deployment status every 5 seconds
            var status = await context.CallActivityWithRetryAsync<string>(
                "CheckDeploymentStatusActivity",
                retryPolicy,
                deploymentId
            );

            if (status == "Completed")
            {
                Console.WriteLine("Deployment completed!");
                break;
            }

            // Wait before next check
            var nextCheckTime = context.CurrentUtcDateTime.AddSeconds(5);
            await context.CreateTimer(nextCheckTime, CancellationToken.None);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Deployment failed: {ex.Message}");
            throw;
        }
    }
}

// ============= PATTERN 5: HUMAN INTERACTION =============
// Workflow waiting for human approval

[FunctionName("ApprovalOrchestrator")]
public static async Task<string> HumanApproval(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    PurchaseOrder po)
{
    // Request human approval
    await context.CallActivityAsync("RequestApprovalActivity", po);

    // Wait for approval (timeout after 48 hours)
    var approvalTimeout = context.CreateTimer(
        context.CurrentUtcDateTime.AddHours(48),
        CancellationToken.None
    );

    var approvalTask = context.WaitForExternalEvent<bool>("ApprovalSubmitted");

    var winner = await Task.WhenAny(approvalTask, approvalTimeout);

    if (winner == approvalTask)
    {
        // Approval received before timeout
        bool isApproved = approvalTask.Result;

        if (isApproved)
        {
            await context.CallActivityAsync("ProcessPurchaseActivity", po);
            return "Purchase approved and processed";
        }
        else
        {
            await context.CallActivityAsync("RejectPurchaseActivity", po);
            return "Purchase rejected";
        }
    }
    else
    {
        // Timeout
        return "Approval request timed out";
    }
}

[FunctionName("SubmitApproval")]
public static async Task SubmitApproval(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "approve/{instanceId}")] string instanceId,
    bool approved,
    [DurableClient] IDurableOrchestrationClient client)
{
    // Send approval decision to waiting orchestrator
    await client.RaiseEventAsync(instanceId, "ApprovalSubmitted", approved);
}

// ============= PATTERN 6: SUB-ORCHESTRATIONS =============
// Orchestrator calling another orchestrator

[FunctionName("ParentOrchestrator")]
public static async Task<string> ParentOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    int orderId)
{
    // Call sub-orchestrator
    var paymentResult = await context.CallSubOrchestratorAsync<string>(
        "PaymentSubOrchestrator",
        orderId
    );

    var shipmentResult = await context.CallSubOrchestratorAsync<string>(
        "ShipmentSubOrchestrator",
        orderId
    );

    return $"Parent: {paymentResult}, {shipmentResult}";
}

[FunctionName("PaymentSubOrchestrator")]
public static async Task<string> PaymentSubOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    int orderId)
{
    var result = await context.CallActivityAsync<string>(
        "ProcessPaymentActivity",
        orderId
    );
    return result;
}

// ============= PATTERN 7: ENTITY FUNCTIONS =============
// Durable state management (counters, flags, etc.)

[FunctionName("CounterEntity")]
public static void Counter(
    [EntityFunctionInput] IDurableEntityContext context)
{
    var currentValue = context.State<int>();

    switch (context.OperationName.ToLowerInvariant())
    {
        case "add":
            currentValue += (int)context.GetInput<int>();
            break;
        case "get":
            context.SetResult(currentValue);
            break;
        case "set":
            currentValue = (int)context.GetInput<int>();
            break;
    }

    context.State = currentValue;
}

// Use entity in orchestrator
[FunctionName("CounterOrchestrator")]
public static async Task UseCounter(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    var entityId = new EntityId("CounterEntity", "myCounter");

    // Call entity operations
    await context.CallEntityAsync(entityId, "add", 5);
    await context.CallEntityAsync(entityId, "add", 3);
    var value = await context.CallEntityAsync<int>(entityId, "get");

    Console.WriteLine($"Counter value: {value}"); // 8
}

// ============= PATTERN SUMMARY =============
Console.WriteLine("Durable Functions Patterns:");
Console.WriteLine("1. Chaining        - Sequential A→B→C");
Console.WriteLine("2. Fan-out/Fan-in  - Parallel tasks then aggregate");
Console.WriteLine("3. Async HTTP APIs - Long-running with status polling");
Console.WriteLine("4. Monitor         - Repeated checks with backoff");
Console.WriteLine("5. Human Approval  - Wait for external approval event");
Console.WriteLine("6. Sub-orchestrations - Nested orchestrator calls");
Console.WriteLine("7. Entity Functions - Durable state management");

class User { public string UserId { get; set; } public string Name { get; set; } }
class Order { public string OrderId { get; set; } }
class ReportRequest { public string ReportName { get; set; } }
class PurchaseOrder { public string PONumber { get; set; } public decimal Amount { get; set; } }
class ParallelResults { public bool ValidationPassed { get; set; } }
class DurableOrchestrationStatus { public string InstanceId { get; set; } public string StatusQueryGetUri { get; set; } }`}]},{id:"q3",question:"How do you handle retries and error handling in Durable Functions?",answer:"Durable Functions provide RetryOptions for automatic retry with exponential backoff. Configure firstRetryInterval, maxNumberOfAttempts, and backoffCoefficient. Activity functions can fail and retry automatically. Use try-catch in orchestrators to handle exceptions. Failed activity calls throw exceptions. Orchestrators are replayed from checkpoints on failure, so they must be deterministic (no DateTime.Now, no random). Automatic state management means retries don't duplicate side effects. Dead-letter pattern: move failed messages to separate queue after exhausting retries.",codeSnippets:[{language:"csharp",code:`// Durable Functions - Retry & Error Handling
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= RETRY OPTIONS =============
// Automatic retry with exponential backoff

[FunctionName("RetryOrchestrator")]
public static async Task RetryExample(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    // Configure retry policy
    var retryOptions = new RetryOptions(
        firstRetryInterval: TimeSpan.FromSeconds(1),
        maxNumberOfAttempts: 3
    )
    {
        BackoffCoefficient = 2.0, // Exponential backoff: 1s, 2s, 4s
        Handle = ex => ex is TimeoutException or HttpRequestException // Retry only these
    };

    try
    {
        // Call with retry
        var result = await context.CallActivityWithRetryAsync<string>(
            "UnreliableApiCallActivity",
            retryOptions,
            "data"
        );

        Console.WriteLine($"Success: {result}");
    }
    catch (FunctionFailedException ex)
    {
        // After 3 retries, still failed
        Console.WriteLine($"Failed after retries: {ex.InnerException?.Message}");
    }
}

// ============= CUSTOM RETRY LOGIC =============

[FunctionName("CustomRetryOrchestrator")]
public static async Task CustomRetry(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string orderId)
{
    int maxAttempts = 5;
    int attempt = 0;
    Exception lastException = null;

    while (attempt < maxAttempts)
    {
        try
        {
            attempt++;
            Console.WriteLine($"Attempt {attempt} of {maxAttempts}");

            var result = await context.CallActivityAsync<string>(
                "ProcessOrderActivity",
                orderId
            );

            Console.WriteLine($"Success on attempt {attempt}");
            return;
        }
        catch (Exception ex)
        {
            lastException = ex;
            Console.WriteLine($"Attempt {attempt} failed: {ex.Message}");

            if (attempt < maxAttempts)
            {
                // Exponential backoff: 2^attempt seconds
                var backoffSeconds = Math.Pow(2, attempt);
                var nextRetryTime = context.CurrentUtcDateTime.AddSeconds(backoffSeconds);

                // Wait before retry
                await context.CreateTimer(nextRetryTime, CancellationToken.None);
            }
        }
    }

    // All retries exhausted
    throw new InvalidOperationException(
        $"Failed after {maxAttempts} attempts",
        lastException
    );
}

// ============= DEAD-LETTER PATTERN =============
// Move permanently failed messages to separate queue

[FunctionName("DeadLetterOrchestrator")]
public static async Task DeadLetterPattern(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    OrderMessage message)
{
    var retryOptions = new RetryOptions(
        TimeSpan.FromSeconds(1),
        maxNumberOfAttempts: 3
    );

    try
    {
        await context.CallActivityWithRetryAsync(
            "ProcessOrderActivity",
            retryOptions,
            message
        );
    }
    catch (FunctionFailedException ex)
    {
        // Send to dead-letter queue for manual review
        await context.CallActivityAsync(
            "SendToDeadLetterActivity",
            new { Message = message, Error = ex.InnerException?.Message }
        );
    }
}

[FunctionName("SendToDeadLetterActivity")]
public static async Task SendToDeadLetter(
    [ActivityTrigger] IDictionary<string, object> failedData,
    [Queue("order-deadletter")] IAsyncCollector<string> deadLetterQueue)
{
    await deadLetterQueue.AddAsync(System.Text.Json.JsonSerializer.Serialize(failedData));
    Console.WriteLine("Message sent to dead-letter queue for review");
}

// ============= HANDLE SPECIFIC EXCEPTIONS =============

[FunctionName("SelectiveRetryOrchestrator")]
public static async Task SelectiveRetry(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string paymentId)
{
    var retryOptions = new RetryOptions(
        TimeSpan.FromSeconds(1),
        maxNumberOfAttempts: 3
    )
    {
        // Only retry transient errors (network, timeout)
        // Don't retry validation errors
        Handle = ex =>
        {
            var innerEx = ex.InnerException;
            if (innerEx is TimeoutException) return true;
            if (innerEx is HttpRequestException) return true;
            if (innerEx is InvalidOperationException) return false; // Validation error, don't retry

            return false;
        }
    };

    try
    {
        await context.CallActivityWithRetryAsync(
            "ProcessPaymentActivity",
            retryOptions,
            paymentId
        );
    }
    catch (FunctionFailedException ex)
    {
        var innerException = ex.InnerException;

        if (innerException is InvalidOperationException)
        {
            // Validation failed, don't retry
            Console.WriteLine($"Validation error (permanent): {innerException.Message}");
            throw;
        }

        if (innerException is TimeoutException)
        {
            // Timeout, already retried
            Console.WriteLine($"Timeout after retries: {innerException.Message}");
            throw;
        }
    }
}

// ============= ORCHESTRATOR MUST BE DETERMINISTIC =============
// These will cause issues with replaying!

[FunctionName("NonDeterministicOrchestrator")]
public static async Task BadPractices(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    // ❌ BAD: Using DateTime.Now - not deterministic
    // var now = DateTime.Now;

    // ✓ GOOD: Use context.CurrentUtcDateTime
    var now = context.CurrentUtcDateTime;

    // ❌ BAD: Using Random
    // var random = new Random().Next(10);

    // ✓ GOOD: Pass randomness from activity
    // var random = await context.CallActivityAsync<int>("GetRandomActivity", null);

    // ❌ BAD: Using GUID directly
    // var id = Guid.NewGuid();

    // ✓ GOOD: Get GUID from activity
    // var id = await context.CallActivityAsync<Guid>("GenerateGuidActivity", null);

    // ❌ BAD: Direct I/O operations
    // File.WriteAllText("log.txt", "message");

    // ✓ GOOD: Use activity function
    // await context.CallActivityAsync("LogActivity", "message");
}

// ============= TIMEOUT HANDLING =============

[FunctionName("TimeoutOrchestrator")]
public static async Task<string> HandleTimeout(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string reportId)
{
    try
    {
        // Set timeout of 30 minutes
        var timeoutAttempt = context.CreateTimer(
            context.CurrentUtcDateTime.AddMinutes(30),
            CancellationToken.None
        );

        var reportTask = context.CallActivityAsync<string>(
            "GenerateReportActivity",
            reportId
        );

        // Race: either report completes or timeout fires
        var winner = await Task.WhenAny(reportTask, timeoutAttempt);

        if (winner == reportTask)
        {
            return reportTask.Result;
        }
        else
        {
            return "Report generation timed out after 30 minutes";
        }
    }
    catch (FunctionFailedException ex)
    {
        Console.WriteLine($"Error: {ex.InnerException?.Message}");
        throw;
    }
}

// ============= BEST PRACTICES =============
Console.WriteLine("Retry & Error Handling Best Practices:");
Console.WriteLine("✓ Use RetryOptions for automatic exponential backoff");
Console.WriteLine("✓ Configure maxNumberOfAttempts appropriate to SLA");
Console.WriteLine("✓ Use Handle predicate to filter retryable exceptions");
Console.WriteLine("✓ Use dead-letter pattern for permanently failed messages");
Console.WriteLine("✓ Keep orchestrators deterministic (no DateTime.Now, Random, I/O)");
Console.WriteLine("✓ Use activity functions for side effects");
Console.WriteLine("✓ Handle FunctionFailedException to access inner exception");
Console.WriteLine("✓ Set appropriate timeouts with CreateTimer");
Console.WriteLine("✓ Log failures for monitoring and alerting");
Console.WriteLine("✓ Test retry scenarios in development");

class OrderMessage { public string OrderId { get; set; } }`}]},{id:"q4",question:"What is event sourcing in Durable Functions and how is it used internally?",answer:"Event sourcing is the internal mechanism Durable Functions uses for reliability. Instead of storing function state directly, it stores all events (actions) that happened: 'orchestrator called activity X', 'activity X returned result Y', etc. On failure, the orchestrator replays all events to restore to the exact point of failure, then continues. This enables zero data loss, automatic checkpointing, and instant recovery. History is stored in storage account (table storage or SQL database). Replay is deterministic if orchestrator is pure (same inputs always produce same execution path). This is why orchestrators must be deterministic.",codeSnippets:[{language:"csharp",code:`// Azure Durable Functions - Event Sourcing Internals
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= HOW EVENT SOURCING WORKS =============

[FunctionName("EventSourcingExampleOrchestrator")]
public static async Task EventSourcingExample(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    OrderData order)
{
    // Every action generates an event that is stored

    // Event 1: Orchestrator started
    Console.WriteLine("[Event 1] Orchestrator started");

    // Event 2: Call ValidateOrder activity
    var isValid = await context.CallActivityAsync<bool>(
        "ValidateOrderActivity",
        order
    );
    // Event stored: { Type: "TaskScheduled", Activity: "ValidateOrder", ... }
    // Event stored: { Type: "TaskCompleted", Activity: "ValidateOrder", Result: true }
    Console.WriteLine("[Event 2] Validate order returned: " + isValid);

    // Event 3: Call ProcessPayment activity
    var paymentId = await context.CallActivityAsync<string>(
        "ProcessPaymentActivity",
        order.Amount
    );
    // Event stored: { Type: "TaskScheduled", Activity: "ProcessPayment", ... }
    // Event stored: { Type: "TaskCompleted", Activity: "ProcessPayment", Result: "PAY-123" }
    Console.WriteLine("[Event 3] Payment processed: " + paymentId);

    // Event 4: Call UpdateInventory activity
    await context.CallActivityAsync(
        "UpdateInventoryActivity",
        order.Items
    );
    // Event stored: { Type: "TaskScheduled", Activity: "UpdateInventory", ... }
    // Event stored: { Type: "TaskCompleted", Activity: "UpdateInventory" }
    Console.WriteLine("[Event 4] Inventory updated");

    // Event 5: Orchestrator completed
    Console.WriteLine("[Event 5] Orchestrator completed successfully");

    /* HISTORY STORAGE in Azure Table Storage:
     * 
     * InstanceId: ORDER-001
     * 
     * Event History:
     * {
     *   "InstanceId": "ORDER-001",
     *   "ExecutionId": "1",
     *   "Sequence": 0,
     *   "EventType": "OrchestratorStarted",
     *   "Timestamp": "2024-01-15T10:00:00Z"
     * },
     * {
     *   "InstanceId": "ORDER-001",
     *   "Sequence": 1,
     *   "EventType": "TaskScheduled",
     *   "Name": "ValidateOrderActivity",
     *   "Input": "{ OrderId: 'ORD-001' }"
     * },
     * {
     *   "InstanceId": "ORDER-001",
     *   "Sequence": 2,
     *   "EventType": "TaskCompleted",
     *   "Result": "true"
     * },
     * ...
     */
}

// ============= REPLAY MECHANISM ON FAILURE =============

[FunctionName("ReplayOnFailureOrchestrator")]
public static async Task ReplayMechanism(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string itemId)
{
    try
    {
        // Step 1: Get inventory
        var inventory = await context.CallActivityAsync<int>(
            "GetInventoryActivity",
            itemId
        );

        // If this crashes here ↓, the whole orchestration restarts

        // Step 2: Check stock
        if (inventory < 10)
        {
            throw new InvalidOperationException("Low stock!");
        }

        // Step 3: Reorder
        var orderId = await context.CallActivityAsync<string>(
            "PlaceReorderActivity",
            itemId
        );

        // REPLAY FLOW ON FAILURE:
        // 1. Orchestrator restarts from beginning
        // 2. Events replayed: GetInventory activity ran, returned same result (cached)
        // 3. Stock check runs again (using cached result, not calling activity again)
        // 4. Reaches the point where it crashed
        // 5. Continues from there (PlaceReorder now executes)
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
    }
}

// ============= WHY DETERMINISTIC? =============

[FunctionName("DeterministicRequirementOrchestrator")]
public static async Task DeterministicRequirement(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string processId)
{
    // SCENARIO: First execution completes up to step 2, then fails

    // ❌ WRONG: Using DateTime.Now
    // First execution:
    //   Step 1: now = 2024-01-15 10:00:00
    //   Step 2: CRASH
    // Replay:
    //   Step 1: now = 2024-01-15 10:00:05 (different time!)
    //   This causes different behavior, breaking replay guarantee

    // ✓ CORRECT: Use context.CurrentUtcDateTime
    var now = context.CurrentUtcDateTime;
    // First execution:
    //   Step 1: now = 2024-01-15 10:00:00
    //   Step 2: CRASH
    // Replay:
    //   Step 1: now = 2024-01-15 10:00:00 (same time!)
    //   Replay produces identical behavior

    // ❌ WRONG: Using Random
    // var randomValue = new Random().Next(100);
    // First execution: randomValue = 42
    // Replay: randomValue = 73 (different!)

    // ✓ CORRECT: Get random from activity
    // var randomValue = await context.CallActivityAsync<int>("GetRandomActivity", null);
    // Deterministic because activity result is replayed

    // ❌ WRONG: Direct I/O
    // var data = File.ReadAllText("data.json");
    // File may have changed!

    // ✓ CORRECT: Use activity
    // var data = await context.CallActivityAsync<string>("ReadFileActivity", "data.json");
}

// ============= CHECKING EXECUTION HISTORY =============

[FunctionName("CheckExecutionHistory")]
public static async Task CheckHistory(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "history/{instanceId}")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client)
{
    var status = await client.GetStatusAsync(instanceId);

    Console.WriteLine($"Instance ID: {instanceId}");
    Console.WriteLine($"Status: {status.RuntimeStatus}");
    Console.WriteLine($"Created: {status.CreatedTime}");
    Console.WriteLine($"Completed: {status.CompletedTime}");
    Console.WriteLine($"\\nExecution History:");

    var history = status.History;
    for (int i = 0; i < history.Count; i++)
    {
        var item = history[i];
        Console.WriteLine($"  Event {i}: {item}");
    }

    // Example output:
    // Event 0: { "EventType": "OrchestratorStarted" }
    // Event 1: { "EventType": "TaskScheduled", "Name": "ValidateOrder" }
    // Event 2: { "EventType": "TaskCompleted", "Result": "true" }
    // Event 3: { "EventType": "TaskScheduled", "Name": "ProcessPayment" }
    // Event 4: { "EventType": "TaskCompleted", "Result": "payment-123" }
}

// ============= EVENT SOURCING BENEFITS =============
Console.WriteLine("Event Sourcing Benefits in Durable Functions:");
Console.WriteLine("✓ Automatic checkpointing - save to storage after each step");
Console.WriteLine("✓ Deterministic replay - exact restoration to failure point");
Console.WriteLine("✓ Zero data loss - all work is recorded");
Console.WriteLine("✓ Instant recovery - continue from last checkpoint");
Console.WriteLine("✓ Full history - complete audit trail of execution");
Console.WriteLine("✓ Failure handling - transparent automatic recovery");

// ============= CONFIGURING STORAGE =============
Console.WriteLine("\\nEvent Storage Backends:");
Console.WriteLine("- Table Storage (default, cost-effective)");
Console.WriteLine("- SQL Database (better for analysis)");
Console.WriteLine("- Netherite (faster, event log only)");

class OrderData { public string OrderId { get; set; } public decimal Amount { get; set; } public List<string> Items { get; set; } }`}]},{id:"q5",question:"How do you monitor, debug, and troubleshoot Durable Functions?",answer:"Monitor using Application Insights with custom metrics and traces. Track orchestrator status: Pending, Running, Completed, Failed, Terminated. Use IDurableOrchestrationClient.GetStatusAsync() to check instance status and execution history. Debug: enable verbose logging, inspect history in storage table, replay execution in local emulator. Common issues: orchestrator not deterministic (changes cause mismatches), activity timeouts (configure with RetryOptions), storage account connectivity. Use Durable Functions monitoring extension in Azure Portal to visualize workflow execution. Set up alerts for failures.",codeSnippets:[{language:"csharp",code:`// Durable Functions - Monitoring, Debugging, Troubleshooting
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= MONITORING WITH APPLICATION INSIGHTS =============

[FunctionName("MonitoredOrchestrator")]
public static async Task MonitoredWorkflow(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    ILogger log,
    string orderId)
{
    try
    {
        // Log orchestrator events
        context.SetCustomStatus("Starting order processing");

        var isValid = await context.CallActivityAsync<bool>(
            "ValidateOrderActivity",
            orderId
        );

        if (!isValid)
        {
            context.SetCustomStatus("Validation failed");
            throw new InvalidOperationException("Invalid order");
        }

        context.SetCustomStatus("Processing payment");
        var paymentId = await context.CallActivityAsync<string>(
            "ProcessPaymentActivity",
            orderId
        );

        context.SetCustomStatus("Updating inventory");
        await context.CallActivityAsync("UpdateInventoryActivity", orderId);

        context.SetCustomStatus("Order completed");
    }
    catch (Exception ex)
    {
        context.SetCustomStatus($"Failed: {ex.Message}");
        throw;
    }
}

// ============= DETAILED LOGGING IN ACTIVITIES =============

[FunctionName("LoggedActivity")]
public static async Task<string> ActivityWithLogging(
    [ActivityTrigger] string orderId,
    ILogger log)
{
    log.LogInformation($"Processing order: {orderId}");

    try
    {
        // Simulate work
        await Task.Delay(1000);

        log.LogInformation($"Order {orderId} processed successfully");
        return $"Completed-{orderId}";
    }
    catch (Exception ex)
    {
        log.LogError($"Error processing order {orderId}: {ex.Message}");
        throw;
    }
}

// ============= CHECK INSTANCE STATUS =============

[FunctionName("CheckInstanceStatus")]
public static async Task<object> CheckStatus(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "orchestration/{instanceId}/status")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    var status = await client.GetStatusAsync(instanceId);

    if (status == null)
    {
        return new { Error = "Instance not found" };
    }

    log.LogInformation($"Instance {instanceId} status: {status.RuntimeStatus}");

    return new
    {
        InstanceId = instanceId,
        Status = status.RuntimeStatus.ToString(), // Pending, Running, Completed, Failed, etc.
        Input = status.Input,
        Output = status.Output,
        CreatedTime = status.CreatedTime,
        LastUpdatedTime = status.LastUpdatedTime,
        CompletedTime = status.CompletedTime,
        IsRuntimeStatus = status.IsRuntimeStatus,
        
        // History of all events
        History = status.History,
        
        // Custom status set by orchestrator
        CustomStatus = status.CustomStatus
    };
}

// ============= EXECUTION HISTORY ANALYSIS =============

[FunctionName("AnalyzeExecutionHistory")]
public static async Task AnalyzeHistory(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "orchestration/{instanceId}/history")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    var status = await client.GetStatusAsync(instanceId);

    if (status?.History == null)
        return;

    var taskDurations = new Dictionary<string, TimeSpan>();
    DateTime? previousTimestamp = null;

    foreach (var historyItem in status.History)
    {
        // Each history item contains execution details
        var json = historyItem.ToString();
        
        // Parse to find task completions
        if (json.Contains("TaskCompleted"))
        {
            log.LogInformation($"Task completed: {json}");
        }

        if (json.Contains("TaskFailed"))
        {
            log.LogError($"Task failed: {json}");
        }

        if (json.Contains("OrchestratorStarted"))
        {
            log.LogInformation("Orchestrator started");
        }
    }

    log.LogInformation($"Total events in history: {status.History.Count}");
}

// ============= TERMINATE STUCK ORCHESTRATION =============

[FunctionName("TerminateOrchestration")]
public static async Task Terminate(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "orchestration/{instanceId}/terminate")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    await client.TerminateAsync(instanceId, "Manually terminated");
    log.LogWarning($"Orchestration {instanceId} terminated");
}

// ============= PURGE INSTANCE HISTORY =============

[FunctionName("PurgeHistory")]
public static async Task PurgeOldInstances(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "purge")] object input,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    // Clean up instances older than 30 days
    var cutoffTime = DateTime.UtcNow.AddDays(-30);

    await client.PurgeInstanceHistoryAsync(
        createdTimeFrom: DateTime.MinValue,
        createdTimeTo: cutoffTime,
        runtimeStatus: new[] { OrchestrationRuntimeStatus.Completed }
    );

    log.LogInformation("Purged completed instances older than 30 days");
}

// ============= COMMON ISSUES & SOLUTIONS =============

[FunctionName("TroubleshootingGuide")]
public static void TroubleshootingGuide()
{
    Console.WriteLine("Durable Functions Troubleshooting:");
    Console.WriteLine("");

    Console.WriteLine("Issue 1: Orchestration stuck in 'Running' state");
    Console.WriteLine("  Cause: Activity function crashed, orchestrator waiting");
    Console.WriteLine("  Solution: Check activity function logs in Application Insights");
    Console.WriteLine("  Action: Fix activity bug and redeploy");
    Console.WriteLine("");

    Console.WriteLine("Issue 2: 'Orchestration violated deterministic constraint'");
    Console.WriteLine("  Cause: Orchestrator code changed or non-deterministic operation used");
    Console.WriteLine("  Solution: Don't modify orchestrator logic mid-flight, use DateTime.UtcNow");
    Console.WriteLine("  Action: Deploy orchestrator change only after current instances complete");
    Console.WriteLine("");

    Console.WriteLine("Issue 3: Activity function timeouts");
    Console.WriteLine("  Cause: Activity takes longer than expected");
    Console.WriteLine("  Solution: Configure RetryOptions with longer timeout");
    Console.WriteLine("  Action: await context.CallActivityWithRetryAsync() with RetryOptions");
    Console.WriteLine("");

    Console.WriteLine("Issue 4: Storage account connection errors");
    Console.WriteLine("  Cause: Connection string misconfigured");
    Console.WriteLine("  Solution: Check AzureWebJobsStorage setting in local.settings.json");
    Console.WriteLine("  Action: Verify storage account access keys in Azure Portal");
    Console.WriteLine("");

    Console.WriteLine("Issue 5: Instance history not updating");
    Console.WriteLine("  Cause: Storage account permissions issue");
    Console.WriteLine("  Solution: Ensure managed identity has Storage Contributor role");
    Console.WriteLine("  Action: Check RBAC assignments in Azure Portal");
    Console.WriteLine("");

    Console.WriteLine("Issue 6: Duplicate execution of activity");
    Console.WriteLine("  Cause: Activity called twice due to wrong code");
    Console.WriteLine("  Solution: Implement idempotent activities");
    Console.WriteLine("  Action: Use idempotency keys to prevent duplicate processing");
}

// ============= CUSTOM METRICS =============

[FunctionName("MetricsOrchestrator")]
public static async Task MetricsExample(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    var startTime = context.CurrentUtcDateTime;

    try
    {
        await context.CallActivityAsync("LongRunningActivity", null);

        var duration = context.CurrentUtcDateTime - startTime;
        context.SetCustomStatus($"Completed in {duration.TotalSeconds}s");
    }
    catch (Exception ex)
    {
        context.SetCustomStatus($"Failed after {(context.CurrentUtcDateTime - startTime).TotalSeconds}s");
    }
}

// ============= STRUCTURED LOGGING =============

[FunctionName("StructuredLoggingActivity")]
public static async Task StructuredLogging(
    [ActivityTrigger] IDictionary<string, object> data,
    ILogger log)
{
    // Structured logging for better querying in Application Insights
    using (log.BeginScope(new Dictionary<string, object>
    {
        { "OrderId", data["OrderId"] },
        { "CustomerId", data["CustomerId"] },
        { "Amount", data["Amount"] }
    }))
    {
        log.LogInformation("Processing order with structured logging");
        // Logs will include OrderId, CustomerId, Amount for correlation
    }
}

// ============= MONITORING BEST PRACTICES =============
Console.WriteLine("\\nMonitoring Best Practices:");
Console.WriteLine("✓ Use SetCustomStatus() for workflow visibility");
Console.WriteLine("✓ Track orchestration instances with tags");
Console.WriteLine("✓ Set up alerts for failed orchestrations");
Console.WriteLine("✓ Monitor storage account metrics (latency, failures)");
Console.WriteLine("✓ Use Application Insights for distributed tracing");
Console.WriteLine("✓ Implement activity function timeouts");
Console.WriteLine("✓ Regular purge of old instance history");
Console.WriteLine("✓ Test disaster scenarios (storage failure, activity timeout)");
Console.WriteLine("✓ Document retry policies and timeouts");
Console.WriteLine("✓ Use correlation IDs for end-to-end tracing");`}]}]},_v={id:"azure-event-grid",name:"Event Grid",questions:[{id:"q1",question:"What is Azure Event Grid and what are its core components?",answer:"Azure Event Grid is a fully managed event routing service that connects event publishers to event subscribers using pub-sub pattern. Core components: 1) Event Sources - produce events (Storage, Service Bus, custom topics). 2) Event Handlers - receive and process events (Functions, Logic Apps, Webhooks, Event Hubs). 3) Topics - endpoints where events are published. 4) Event Subscriptions - route events from topics to handlers. 5) Event Filters - filter events by type, subject, or data. Supports thousands of events per second with at-least-once delivery guarantee. Integrates with 200+ Azure services and custom webhooks.",codeSnippets:[{language:"csharp",code:`// Azure Event Grid - Core Concepts
using Azure;
using Azure.Messaging.EventGrid;
using Microsoft.Azure.WebJobs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= EVENT SOURCES =============
// Built-in sources: Storage, Service Bus, App Configuration, IoT Hub, etc.

public static class EventSources
{
    public const string StorageSource = "Microsoft.Storage.StorageAccounts";
    public const string ServiceBusSource = "Microsoft.ServiceBus.Namespaces";
    public const string AppConfigSource = "Microsoft.AppConfiguration.ConfigurationStores";
    public const string IoTHubSource = "Microsoft.Devices.IoTHubs";
}

// ============= CUSTOM TOPIC =============
// Create custom topic for application events

[FunctionName("PublishEventToCustomTopic")]
public static async Task PublishEvent(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "events")] EventData eventData,
    [EventGrid(TopicEndpointUri = "EventGridTopicUri", TopicKeySetting = "EventGridTopicKey")] IAsyncCollector<EventGridEvent> eventCollector)
{
    // Create event
    var eventGridEvent = new EventGridEvent(
        subject: $"/orders/{eventData.OrderId}",
        eventType: "Orders.OrderCreated",
        dataVersion: "1.0",
        data: eventData
    );

    // Publish event
    await eventCollector.AddAsync(eventGridEvent);

    Console.WriteLine($"Event published for order {eventData.OrderId}");
}

// ============= EVENT HANDLER (WEBHOOK) =============
// Handle events from Event Grid

[FunctionName("EventGridWebhook")]
public static async Task HandleEventGridEvents(
    [HttpTrigger(AuthorizationLevel.Function, "post", Route = "eventgrid")] EventGridEvent[] events)
{
    foreach (var @event in events)
    {
        // Handle validation event (sent first time webhook is registered)
        if (@event.EventType == "Microsoft.EventGrid.SubscriptionValidationEvent")
        {
            var validationEvent = @event.Data as dynamic;
            var validationCode = validationEvent?.validationCode;
            Console.WriteLine($"Validation code: {validationCode}");
            continue;
        }

        Console.WriteLine($"Event Type: {@event.EventType}");
        Console.WriteLine($"Subject: {@event.Subject}");
        Console.WriteLine($"Data: {@event.Data}");
    }

    await Task.CompletedTask;
}

// ============= EVENT HANDLER (AZURE FUNCTION) =============
// Process events using Event Grid trigger

[FunctionName("OrderCreatedEventHandler")]
public static async Task ProcessOrderEvent(
    [EventGridTrigger] EventGridEvent eventGridEvent,
    ILogger log)
{
    log.LogInformation($"Processing event: {eventGridEvent.EventType}");
    log.LogInformation($"Subject: {eventGridEvent.Subject}");

    // Parse event data
    var orderData = eventGridEvent.Data as dynamic;
    var orderId = orderData.OrderId;

    log.LogInformation($"Order created: {orderId}");

    // Process order (call function, write to database, etc.)
    await ProcessOrderAsync(orderId);
}

// ============= EVENT SUBSCRIPTION =============
// Route events from topic to handler

public class EventSubscriptionConfig
{
    // Topics: Custom topic or event source (Storage, Service Bus, etc.)
    public string TopicName { get; set; }

    // Event types to subscribe to
    public List<string> EventTypes { get; set; } = new()
    {
        "Orders.OrderCreated",
        "Orders.OrderUpdated",
        "Orders.OrderCancelled"
    };

    // Filter by subject prefix/suffix
    public string SubjectFilter { get; set; } = "/orders/";

    // Endpoint where events are sent
    public string EndpointUri { get; set; }

    // Retry policy
    public RetryPolicy RetryPolicy { get; set; } = new()
    {
        MaxDeliveryAttempts = 30,
        EventTimeToLiveInMinutes = 1440 // 24 hours
    };

    // Dead-letter endpoint for failed events
    public string DeadLetterEndpoint { get; set; }
}

public class RetryPolicy
{
    public int MaxDeliveryAttempts { get; set; }
    public int EventTimeToLiveInMinutes { get; set; }
}

// ============= EVENT TYPES =============
// Common Event Grid event types

public static class CommonEventTypes
{
    // Storage events
    public const string BlobCreated = "Microsoft.Storage.BlobCreated";
    public const string BlobDeleted = "Microsoft.Storage.BlobDeleted";

    // Service Bus events
    public const string ServiceBusQueueMessage = "Microsoft.ServiceBus.QueueMessageDelivered";

    // App Configuration events
    public const string AppConfigKeyValueModified = "Microsoft.AppConfiguration.KeyValueModified";

    // IoT Hub events
    public const string IoTDeviceTelemetry = "Microsoft.Devices.DeviceTelemetry";

    // Custom events
    public const string OrderCreated = "Orders.OrderCreated";
    public const string PaymentProcessed = "Payment.PaymentProcessed";
}

// ============= EVENT DATA =============
class EventData
{
    public string OrderId { get; set; }
    public decimal Amount { get; set; }
    public string CustomerEmail { get; set; }
    public DateTime CreatedAt { get; set; }
}

async Task ProcessOrderAsync(string orderId)
{
    await Task.Delay(100);
    Console.WriteLine($"Order {orderId} processed");
}

// ============= EVENT GRID ARCHITECTURE =============
Console.WriteLine("Event Grid Architecture:");
Console.WriteLine("Event Sources → Event Grid Topic → Event Subscriptions → Event Handlers");
Console.WriteLine("");
Console.WriteLine("Publishers publish events to topics");
Console.WriteLine("Subscribers subscribe to topics");
Console.WriteLine("Event Grid routes events based on subscriptions and filters");
Console.WriteLine("");
Console.WriteLine("Delivery: At-least-once (events may be delivered multiple times)");
Console.WriteLine("Ordering: Best-effort (not guaranteed within same subscription)");
Console.WriteLine("Throughput: Thousands of events per second");`}]},{id:"q2",question:"How do you configure event subscriptions and filters in Event Grid?",answer:"Event subscriptions connect event sources to handlers. Configure: 1) Event types - subscribe to specific event types (Azure-provided or custom). 2) Subject filtering - include/exclude by subject prefix/suffix (e.g., /orders/premium). 3) Advanced filters - filter by data properties (e.g., amount > 100). 4) Endpoints - send to Webhook, Function, Logic App, Event Hub, Service Bus Queue, Storage Queue. 5) Delivery properties - add custom headers or properties to events. 6) Retry policy - set max attempts and TTL. 7) Dead-letter - handle failed deliveries. Multiple subscriptions per topic enable different handlers to process same events.",codeSnippets:[{language:"csharp",code:`// Event Grid - Subscriptions & Filters
using Azure.Messaging.EventGrid;
using System;
using System.Collections.Generic;

// ============= EVENT SUBSCRIPTION WITH FILTERS =============

public class EventSubscriptionWithFilters
{
    // Filter 1: By Event Type
    public List<string> FilterByEventType()
    {
        return new List<string>
        {
            "Orders.OrderCreated",
            "Orders.OrderCancelled"
        };
        // Only these event types are delivered
    }

    // Filter 2: By Subject (Simple)
    public class SubjectFilter
    {
        public string Prefix { get; set; } = "/orders/premium/";  // Include prefix
        public string Suffix { get; set; } = ".json";             // Include suffix
    }

    // Filter 3: Advanced Filters (on data properties)
    public class AdvancedFilters
    {
        // Number comparisons
        public bool FilterByAmount(decimal eventAmount)
        {
            return eventAmount > 100;  // Only amounts > 100
        }

        // String contains
        public bool FilterByCustomer(string customerEmail)
        {
            return customerEmail.Contains("@premium.com");
        }

        // String in list
        public bool FilterByStatus(string orderStatus)
        {
            var validStatuses = new[] { "Pending", "Processing", "Shipped" };
            return Array.Exists(validStatuses, s => s == orderStatus);
        }

        // Boolean matches
        public bool FilterByExpressShipping(bool isExpress)
        {
            return isExpress == true;  // Only express orders
        }
    }
}

// ============= CREATE SUBSCRIPTION PROGRAMMATICALLY =============

public async Task CreateEventSubscription(string topicName, string resourceGroup)
{
    // Subscription 1: Premium orders to premium handler
    var premiumSubscription = new
    {
        Name = "PremiumOrderSubscription",
        EventTypes = new[] { "Orders.OrderCreated" },
        SubjectFilter = new
        {
            Prefix = "/orders/premium/",
            CaseSensitive = false
        },
        Labels = new[] { "premium-orders" },
        EndpointType = "WebHook",
        Endpoint = "https://myfunction.azurewebsites.net/api/premium-orders",
        RetryPolicy = new
        {
            MaxDeliveryAttempts = 30,
            EventTimeToLiveInMinutes = 1440
        },
        DeadLetterDestination = new
        {
            EndpointType = "StorageQueue",
            ResourceId = "/subscriptions/.../queues/order-deadletter"
        }
    };

    // Subscription 2: Large orders to Logic App
    var largeOrderSubscription = new
    {
        Name = "LargeOrderSubscription",
        EventTypes = new[] { "Orders.OrderCreated" },
        AdvancedFilters = new
        {
            Filters = new[]
            {
                new
                {
                    OperatorType = "NumberGreaterThan",
                    Key = "data.amount",
                    Value = 1000
                }
            }
        },
        EndpointType = "LogicApp",
        Endpoint = "https://prod-logicapp.azurelogicapps.net/...",
        RetryPolicy = new
        {
            MaxDeliveryAttempts = 60,
            EventTimeToLiveInMinutes = 2880
        }
    };

    // Subscription 3: All events to Event Hub
    var eventHubSubscription = new
    {
        Name = "AllEventsToEventHub",
        EventTypes = new[] { "*" },  // All event types
        EndpointType = "EventHub",
        Endpoint = "/subscriptions/.../eventhubs/order-stream/",
        DeliveryWithResourceIdentity = new
        {
            Identity = new { Type = "SystemAssigned" },
            Destination = new
            {
                EndpointType = "EventHub",
                ResourceId = "/subscriptions/.../eventhubs/order-stream/"
            }
        }
    };

    Console.WriteLine("Subscriptions configured");
}

// ============= DELIVERY PROPERTIES =============

public class DeliveryProperties
{
    public static Dictionary<string, string> AddCustomHeaders()
    {
        return new Dictionary<string, string>
        {
            { "X-Custom-Header", "OrderProcessing" },
            { "X-Order-Priority", "High" },
            { "Authorization", "Bearer token" }
        };
    }
}

// ============= FILTER OPERATORS =============

public class FilterOperators
{
    // Number operators
    public const string NumberGreaterThan = "NumberGreaterThan";
    public const string NumberGreaterThanOrEquals = "NumberGreaterThanOrEquals";
    public const string NumberLessThan = "NumberLessThan";
    public const string NumberLessThanOrEquals = "NumberLessThanOrEquals";
    public const string NumberIn = "NumberIn";
    public const string NumberNotIn = "NumberNotIn";

    // String operators
    public const string StringContains = "StringContains";
    public const string StringNotContains = "StringNotContains";
    public const string StringBeginsWith = "StringBeginsWith";
    public const string StringNotBeginsWith = "StringNotBeginsWith";
    public const string StringEndsWith = "StringEndsWith";
    public const string StringNotEndsWith = "StringNotEndsWith";
    public const string StringIn = "StringIn";
    public const string StringNotIn = "StringNotIn";

    // Boolean operators
    public const string BoolEquals = "BoolEquals";

    // Example: Filter orders with amount > 500 AND status = "Pending"
    public static void ExampleComplexFilter()
    {
        var filters = new[]
        {
            new
            {
                OperatorType = "NumberGreaterThan",
                Key = "data.amount",
                Value = 500
            },
            new
            {
                OperatorType = "StringEquals",
                Key = "data.status",
                Value = "Pending"
            }
        };
        // Both conditions must be true (AND logic)
    }
}

// ============= ENDPOINT TYPES =============

public class EndpointTypes
{
    // 1. Webhook - Custom HTTP endpoint
    public string WebhookEndpoint => "https://myapp.com/webhook";

    // 2. Azure Function - Managed by Azure Functions runtime
    public string FunctionEndpoint => "https://myfunc.azurewebsites.net/api/handler";

    // 3. Event Hub - Stream events to Event Hub
    public string EventHubEndpoint => "/subscriptions/.../eventhubs/myeventhub";

    // 4. Service Bus Queue - Route to queue
    public string ServiceBusQueueEndpoint => "/subscriptions/.../queues/myqueue";

    // 5. Service Bus Topic - Route to topic
    public string ServiceBusTopicEndpoint => "/subscriptions/.../topics/mytopic";

    // 6. Storage Queue - Route to storage queue
    public string StorageQueueEndpoint => "https://mystg.queue.core.windows.net/myqueue";

    // 7. Logic App - Managed connector
    public string LogicAppEndpoint => "https://prod-logicapp.azurelogicapps.net/triggers/manual";

    // 8. Hybrid Connection - Relay to on-premises
    public string HybridConnectionEndpoint => "/subscriptions/.../hybridConnections/myconnection";
}

// ============= SUBSCRIPTION BEST PRACTICES =============

Console.WriteLine("Event Subscription Best Practices:");
Console.WriteLine("✓ Use specific event types, not '*' unless needed");
Console.WriteLine("✓ Filter by subject prefix to reduce unwanted events");
Console.WriteLine("✓ Use advanced filters for fine-grained control");
Console.WriteLine("✓ Configure dead-letter endpoint for failed events");
Console.WriteLine("✓ Set appropriate retry policy (max 30 attempts default)");
Console.WriteLine("✓ Use managed identity instead of connection strings");
Console.WriteLine("✓ Test subscriptions with test events before production");
Console.WriteLine("✓ Monitor subscription health and event delivery");
Console.WriteLine("✓ Use Event Grid explorer to validate filters");`}]},{id:"q3",question:"How do you handle event delivery failures and implement dead-letter processing?",answer:"Event Grid uses retry policy for failed deliveries. Configure: 1) Max delivery attempts (1-30, default 30). 2) Event TTL (1440 minutes default, max 1440). After max retries or TTL expiration, events go to dead-letter endpoint if configured. Dead-letter handlers receive failed events for analysis/reprocessing. Failures occur due to: non-2xx HTTP responses, timeouts, malformed requests. Use exponential backoff between retries (internal). Implement dead-letter as Storage Queue or custom blob for audit trail. Monitor dead-letter queue for patterns and fix root causes.",codeSnippets:[{language:"csharp",code:`// Event Grid - Failure Handling & Dead-Letter
using Azure.Messaging.EventGrid;
using Azure.Storage.Queues;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.Azure.WebJobs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= RETRY POLICY CONFIGURATION =============

public class RetryConfiguration
{
    // Conservative: Few retries, quick failure
    public static Dictionary<string, object> ConservativeRetry()
    {
        return new Dictionary<string, object>
        {
            { "MaxDeliveryAttempts", 3 },
            { "EventTimeToLiveInMinutes", 60 }  // 1 hour
        };
    }

    // Aggressive: Many retries, long TTL
    public static Dictionary<string, object> AggressiveRetry()
    {
        return new Dictionary<string, object>
        {
            { "MaxDeliveryAttempts", 30 },
            { "EventTimeToLiveInMinutes", 1440 }  // 24 hours
        };
    }

    // Custom: Tailored to workload
    public static Dictionary<string, object> CustomRetry(int maxAttempts, int ttlMinutes)
    {
        return new Dictionary<string, object>
        {
            { "MaxDeliveryAttempts", Math.Clamp(maxAttempts, 1, 30) },
            { "EventTimeToLiveInMinutes", Math.Clamp(ttlMinutes, 1, 1440) }
        };
    }
}

// ============= HANDLER WITH PROPER ERROR HANDLING =============

[FunctionName("EventHandler")]
public static async Task HandleEventWithErrorHandling(
    [EventGridTrigger] EventGridEvent[] events,
    ILogger log)
{
    foreach (var @event in events)
    {
        try
        {
            log.LogInformation($"Processing event: {@event.EventType}");

            // Simulate processing
            var order = @event.Data as dynamic;
            var orderId = order?.orderId;

            // Business logic might fail (non-2xx response)
            if (orderId == null)
            {
                throw new ArgumentException("Order ID is required");
            }

            await ProcessOrderAsync(orderId);
            log.LogInformation($"Event processed successfully for {orderId}");
        }
        catch (Exception ex)
        {
            // Log error - Event Grid will retry
            log.LogError($"Error processing event: {ex.Message}");
            
            // Important: Throw to signal failure (HTTP non-2xx)
            // Event Grid will retry based on retry policy
            throw;
        }
    }
}

// ============= DEAD-LETTER HANDLER =============

[FunctionName("DeadLetterProcessor")]
public static async Task ProcessDeadLetterEvents(
    [QueueTrigger("event-deadletter")] CloudQueueMessage deadLetterMessage,
    [Queue("event-deadletter-archive")] IAsyncCollector<string> archiveQueue,
    [Table("DeadLetterEvents")] CloudTable deadLetterTable,
    ILogger log)
{
    try
    {
        log.LogError($"Processing dead-letter event: {deadLetterMessage.AsString}");

        // Parse event
        var eventData = deadLetterMessage.AsString;

        // 1. Archive for audit trail
        await archiveQueue.AddAsync(eventData);

        // 2. Log to table for analysis
        var deadLetterEntity = new DeadLetterEntity
        {
            PartitionKey = DateTime.UtcNow.ToString("yyyy-MM-dd"),
            RowKey = Guid.NewGuid().ToString(),
            EventData = eventData,
            ReceivedAt = DateTime.UtcNow,
            Reason = "Max retries exceeded or TTL expired"
        };

        await deadLetterTable.ExecuteAsync(TableOperation.Insert(deadLetterEntity));

        // 3. Alert on critical errors
        await AlertOnCriticalErrorAsync(eventData, log);

        // 4. Reprocess if applicable
        bool shouldRetry = ShouldRetryEvent(eventData);
        if (shouldRetry)
        {
            await ResubmitEventAsync(eventData, log);
        }
    }
    catch (Exception ex)
    {
        log.LogError($"Error processing dead-letter: {ex.Message}");
        throw;
    }
}

// ============= DEAD-LETTER ENTITY FOR TABLE STORAGE =============

public class DeadLetterEntity : TableEntity
{
    public string EventData { get; set; }
    public DateTime ReceivedAt { get; set; }
    public string Reason { get; set; }
    public int RetryCount { get; set; }
    public string ErrorMessage { get; set; }
}

// ============= FAILURE ANALYSIS =============

[FunctionName("AnalyzeDeadLetterPatterns")]
public static async Task AnalyzeFailurePatterns(
    [TimerTrigger("0 0 * * * *")] TimerInfo myTimer,
    [Table("DeadLetterEvents")] CloudTable deadLetterTable,
    ILogger log)
{
    // Query dead-letter events from last hour
    var filter = TableQuery.GenerateFilterCondition(
        "ReceivedAt",
        QueryComparisons.GreaterThan,
        DateTime.UtcNow.AddHours(-1).ToString("O")
    );

    var query = new TableQuery<DeadLetterEntity>().Where(filter);
    var results = await deadLetterTable.ExecuteQuerySegmentedAsync(query, null);

    log.LogInformation($"Dead-letter events in last hour: {results.Results.Count}");

    // Analyze patterns
    var errorCounts = new Dictionary<string, int>();
    foreach (var entity in results.Results)
    {
        if (errorCounts.ContainsKey(entity.Reason))
        {
            errorCounts[entity.Reason]++;
        }
        else
        {
            errorCounts[entity.Reason] = 1;
        }
    }

    // Log summary
    foreach (var error in errorCounts)
    {
        log.LogWarning($"Error: {error.Key} - Count: {error.Value}");
    }

    // Alert if threshold exceeded
    if (results.Results.Count > 100)
    {
        log.LogError("Dead-letter queue exceeding threshold!");
        await SendAlertAsync(log);
    }
}

// ============= EVENT RETRY DECISION LOGIC =============

private static bool ShouldRetryEvent(string eventData)
{
    // Determine if event should be retried based on error type
    // Transient errors: timeout, rate limit, service unavailable
    // Permanent errors: validation failure, authentication error

    // Example: Check if error is transient
    if (eventData.Contains("timeout") || eventData.Contains("ServiceUnavailable"))
    {
        return true;  // Retry transient errors
    }

    if (eventData.Contains("ValidationError") || eventData.Contains("Unauthorized"))
    {
        return false;  // Don't retry permanent errors
    }

    return false;
}

// ============= RESUBMIT EVENT TO EVENT GRID =============

private static async Task ResubmitEventAsync(string eventData, ILogger log)
{
    try
    {
        // Parse original event
        var originalEvent = System.Text.Json.JsonDocument.Parse(eventData);

        // Create new event for reprocessing
        var resubmitEvent = new EventGridEvent(
            subject: "/resubmitted/",
            eventType: "Event.Resubmitted",
            dataVersion: "1.0",
            data: originalEvent.RootElement
        );

        log.LogInformation("Event resubmitted to Event Grid");
        await Task.CompletedTask;
    }
    catch (Exception ex)
    {
        log.LogError($"Failed to resubmit event: {ex.Message}");
    }
}

// ============= ALERTING =============

private static async Task AlertOnCriticalErrorAsync(string eventData, ILogger log)
{
    // Send alert via email, SMS, or Teams
    log.LogError($"CRITICAL: Dead-letter event: {eventData}");
    await Task.CompletedTask;
}

private static async Task SendAlertAsync(ILogger log)
{
    // Trigger alert (email, Teams, SMS)
    log.LogError("ALERT: Dead-letter queue threshold exceeded");
    await Task.CompletedTask;
}

// ============= HTTP STATUS CODES =============

Console.WriteLine("HTTP Status Code Handling:");
Console.WriteLine("✓ 2xx (Success) - Event delivered, no retry");
Console.WriteLine("✗ 3xx (Redirect) - Treated as failure, will retry");
Console.WriteLine("✗ 4xx (Client Error) - Treated as failure, will retry");
Console.WriteLine("  - 400, 401, 403: Permanent failures, consider dead-letter");
Console.WriteLine("✗ 5xx (Server Error) - Transient failure, will retry");
Console.WriteLine("✗ Timeout - Transient failure, will retry");
Console.WriteLine("✗ No Response - Treated as failure, will retry");

async Task ProcessOrderAsync(string orderId)
{
    await Task.Delay(100);
}`}]},{id:"q4",question:"What are Event Grid event schemas and how do you parse events?",answer:"Event Grid uses CloudEvents or Event Grid schema. CloudEvents: standardized, W3C format with subject, type, source, id, time. Event Grid schema: Azure-specific with eventType, subject, data, eventTime, id. Both support custom data payload. Events are delivered as JSON array (even single events). Parse using: EventGridEvent[] (built-in), JsonDocument for raw JSON, or custom deserializers. Event properties: subject (resource identifier), eventType (what happened), eventTime (UTC), data (payload), id (unique), dataVersion. Handle both system events (Storage, Service Bus) and custom application events.",codeSnippets:[{language:"csharp",code:`// Event Grid - Event Schemas & Parsing
using Azure.Messaging.EventGrid;
using System;
using System.Collections.Generic;
using System.Text.Json;

// ============= EVENT GRID SCHEMA =============

public class EventGridSchema
{
    public static void ExampleEventGridEvent()
    {
        var json = @"
{
  ""id"": ""2d1781af-3a4c-4d7c-b93d-aacd7590859c"",
  ""eventType"": ""Microsoft.Storage.BlobCreated"",
  ""subject"": ""/blobServices/default/containers/test-container/blobs/test.txt"",
  ""eventTime"": ""2024-01-15T12:34:56.000Z"",
  ""data"": {
    ""api"": ""PutBlob"",
    ""clientRequestId"": ""xyz123"",
    ""requestId"": ""abc456"",
    ""eTag"": ""0x123456"",
    ""contentType"": ""text/plain"",
    ""contentLength"": 1024,
    ""blobType"": ""BlockBlob"",
    ""url"": ""https://mystg.blob.core.windows.net/test-container/test.txt""
  },
  ""dataVersion"": ""1.0"",
  ""metadataVersion"": ""1""
}";

        Console.WriteLine("Event Grid Schema Properties:");
        Console.WriteLine("- id: Unique event identifier");
        Console.WriteLine("- eventType: What happened (e.g., BlobCreated)");
        Console.WriteLine("- subject: Resource that generated event");
        Console.WriteLine("- eventTime: When event occurred (UTC)");
        Console.WriteLine("- data: Event-specific data payload");
        Console.WriteLine("- dataVersion: Schema version for data");
        Console.WriteLine("- metadataVersion: Event Grid schema version");
    }
}

// ============= CLOUD EVENTS SCHEMA =============

public class CloudEventsSchema
{
    public static void ExampleCloudEvent()
    {
        var json = @"
{
  ""specversion"": ""1.0"",
  ""type"": ""com.example.orders.created"",
  ""source"": ""https://myapp.com/orders"",
  ""subject"": ""order/12345"",
  ""id"": ""A234-1234-1234"",
  ""time"": ""2024-01-15T12:34:56Z"",
  ""datacontenttype"": ""application/json"",
  ""data"": {
    ""orderId"": ""12345"",
    ""amount"": 99.99,
    ""customer"": ""john@example.com""
  }
}";

        Console.WriteLine("CloudEvents Schema Properties:");
        Console.WriteLine("- specversion: CloudEvents specification version (1.0)");
        Console.WriteLine("- type: Event type (reverse-domain notation)");
        Console.WriteLine("- source: Event source");
        Console.WriteLine("- subject: Resource context");
        Console.WriteLine("- id: Unique identifier");
        Console.WriteLine("- time: Timestamp");
        Console.WriteLine("- datacontenttype: Payload content type");
        Console.WriteLine("- data: Event payload");
    }
}

// ============= PARSING EVENT GRID EVENTS =============

public class EventParsing
{
    // Method 1: Using EventGridEvent (built-in binding)
    public static void ParseUsingEventGridEvent(EventGridEvent[] events)
    {
        foreach (var @event in events)
        {
            Console.WriteLine($"ID: {@event.Id}");
            Console.WriteLine($"Type: {@event.EventType}");
            Console.WriteLine($"Subject: {@event.Subject}");
            Console.WriteLine($"Time: {@event.EventTime}");
            Console.WriteLine($"Data: {@event.Data}");
            Console.WriteLine($"Data Version: {@event.DataVersion}");
        }
    }

    // Method 2: Custom deserialization
    public static void ParseCustom(string jsonPayload)
    {
        using var document = JsonDocument.Parse(jsonPayload);
        var root = document.RootElement;

        if (root.ValueKind == JsonValueKind.Array)
        {
            foreach (var item in root.EnumerateArray())
            {
                var id = item.GetProperty("id").GetString();
                var eventType = item.GetProperty("eventType").GetString();
                var subject = item.GetProperty("subject").GetString();
                var data = item.GetProperty("data");

                Console.WriteLine($"Event: {eventType} for {subject}");
            }
        }
    }

    // Method 3: POCO deserialization
    public static void ParseToPoco(string jsonPayload)
    {
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        var events = JsonSerializer.Deserialize<EventGridEventDto[]>(jsonPayload, options);

        foreach (var @event in events)
        {
            Console.WriteLine($"Event: {@event.EventType}");
            var orderData = JsonSerializer.Deserialize<OrderData>(@event.Data.ToString(), options);
            Console.WriteLine($"Order: {orderData?.OrderId}");
        }
    }
}

public class EventGridEventDto
{
    public string Id { get; set; }
    public string EventType { get; set; }
    public string Subject { get; set; }
    public DateTime EventTime { get; set; }
    public JsonElement Data { get; set; }
    public string DataVersion { get; set; }
}

public class OrderData
{
    public string OrderId { get; set; }
    public decimal Amount { get; set; }
}

// ============= SYSTEM EVENTS PARSING =============

public class SystemEventsParser
{
    // Storage Blob event
    public static void ParseStorageBlobEvent(EventGridEvent @event)
    {
        if (@event.EventType == "Microsoft.Storage.BlobCreated")
        {
            var blobData = @event.Data as dynamic;
            var url = blobData?.url;
            var contentLength = blobData?.contentLength;

            Console.WriteLine($"Blob created: {url}, Size: {contentLength}");
        }
    }

    // Service Bus message event
    public static void ParseServiceBusEvent(EventGridEvent @event)
    {
        if (@event.EventType.Contains("ServiceBus"))
        {
            var messageData = @event.Data as dynamic;
            var messageId = messageData?.messageId;

            Console.WriteLine($"Service Bus message: {messageId}");
        }
    }

    // IoT Hub event
    public static void ParseIoTEvent(EventGridEvent @event)
    {
        if (@event.EventType.Contains("Devices"))
        {
            var deviceData = @event.Data as dynamic;
            var deviceId = deviceData?.deviceId;

            Console.WriteLine($"IoT Device: {deviceId}");
        }
    }
}

// ============= CUSTOM APPLICATION EVENTS =============

public class CustomEventParser
{
    public class CustomOrderEvent
    {
        public string OrderId { get; set; }
        public decimal Amount { get; set; }
        public string Status { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public static void ParseCustomOrderEvent(EventGridEvent @event)
    {
        if (@event.EventType == "Orders.OrderCreated")
        {
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var orderEvent = JsonSerializer.Deserialize<CustomOrderEvent>(
                @event.Data.ToString(),
                options
            );

            Console.WriteLine($"Order {orderEvent.OrderId}: {orderEvent.Amount}");
        }
    }
}

// ============= EVENT VALIDATION =============

public class EventValidation
{
    public static bool ValidateEvent(EventGridEvent @event)
    {
        // Check required fields
        if (string.IsNullOrEmpty(@event.Id))
            return false;

        if (string.IsNullOrEmpty(@event.EventType))
            return false;

        if (@event.EventTime == default)
            return false;

        if (@event.Data == null)
            return false;

        return true;
    }

    public static void ValidateEventData(EventGridEvent @event)
    {
        // Event-specific validation
        if (@event.EventType == "Orders.OrderCreated")
        {
            var orderData = @event.Data as dynamic;

            if (orderData?.orderId == null)
                throw new ArgumentException("Order ID required");

            if ((decimal)orderData?.amount <= 0)
                throw new ArgumentException("Amount must be positive");
        }
    }
}

// ============= PARSING BEST PRACTICES =============

Console.WriteLine("Event Parsing Best Practices:");
Console.WriteLine("✓ Always validate event structure before parsing");
Console.WriteLine("✓ Use try-catch for JSON parsing");
Console.WriteLine("✓ Handle both event types in subscription");
Console.WriteLine("✓ Use PropertyNameCaseInsensitive for JSON deserialization");
Console.WriteLine("✓ Validate required fields exist");
Console.WriteLine("✓ Log unparseable events for debugging");
Console.WriteLine("✓ Version your event schema (dataVersion)");
Console.WriteLine("✓ Test with actual events from Event Grid");`}]},{id:"q5",question:"How do you monitor and troubleshoot Event Grid issues?",answer:"Monitor Event Grid using: 1) Azure Portal - view metrics (published events, delivery attempts, unmatched events). 2) Diagnostic Logs - activity logs, failed deliveries. 3) Application Insights - track handler performance. 4) Event Grid Viewer - test event delivery. 5) Metrics to track: delivery success rate, latency, unmatched events, dead-letter count. Common issues: handlers returning non-2xx, validation webhook failing, subject filters too strict, mismatched event types. Debug by: testing webhook with Event Grid Viewer, checking handler logs, verifying filters, inspecting dead-letter queue. Set up alerts for high failure rates or dead-letter queue growth.",codeSnippets:[{language:"csharp",code:`// Event Grid - Monitoring & Troubleshooting
using Azure.Monitor.Query;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= MONITORING WITH APPLICATION INSIGHTS =============

[FunctionName("MonitoredEventHandler")]
public static async Task HandleEventWithMonitoring(
    [EventGridTrigger] EventGridEvent[] events,
    TelemetryClient telemetryClient,
    ILogger log)
{
    foreach (var @event in events)
    {
        using (var operation = telemetryClient.StartOperation<RequestTelemetry>(
            $"EventProcessing-{@event.EventType}"))
        {
            try
            {
                var startTime = DateTime.UtcNow;

                log.LogInformation($"Processing event: {@event.EventType}");

                // Custom dimension tracking
                telemetryClient.TrackEvent(
                    "EventReceived",
                    new Dictionary<string, string>
                    {
                        { "EventType", @event.EventType },
                        { "Subject", @event.Subject },
                        { "EventId", @event.Id }
                    }
                );

                // Process event
                await ProcessEventAsync(@event);

                var duration = DateTime.UtcNow - startTime;
                telemetryClient.TrackEvent(
                    "EventProcessed",
                    new Dictionary<string, string>
                    {
                        { "EventType", @event.EventType },
                        { "Status", "Success" }
                    },
                    new Dictionary<string, double>
                    {
                        { "ProcessingTimeMs", duration.TotalMilliseconds }
                    }
                );
            }
            catch (Exception ex)
            {
                // Track exception
                telemetryClient.TrackException(ex);
                telemetryClient.TrackEvent(
                    "EventProcessingFailed",
                    new Dictionary<string, string>
                    {
                        { "EventType", @event.EventType },
                        { "ErrorMessage", ex.Message }
                    }
                );

                operation.Telemetry.Success = false;
                throw;
            }
        }
    }
}

// ============= CUSTOM METRICS TRACKING =============

public class EventGridMetrics
{
    public static void TrackMetrics(TelemetryClient telemetryClient)
    {
        // Track custom metrics
        telemetryClient.GetMetric("EventsProcessed").TrackValue(1);
        telemetryClient.GetMetric("EventProcessingDurationMs").TrackValue(150);
        telemetryClient.GetMetric("DeadLetterQueueSize").TrackValue(5);
        telemetryClient.GetMetric("FailureRate").TrackValue(0.02); // 2%
    }
}

// ============= DIAGNOSTIC LOGGING =============

[FunctionName("DiagnosticEventHandler")]
public static async Task HandleEventWithDiagnostics(
    [EventGridTrigger] EventGridEvent[] events,
    ILogger log)
{
    log.LogInformation($"Received {events.Length} events");

    foreach (var @event in events)
    {
        try
        {
            // Log event details
            log.LogInformation(
                "Event: {@EventDetails}",
                new
                {
                    Id = @event.Id,
                    Type = @event.EventType,
                    Subject = @event.Subject,
                    Time = @event.EventTime,
                    DataVersion = @event.DataVersion
                }
            );

            // Validate event
            if (string.IsNullOrEmpty(@event.Id))
            {
                log.LogWarning("Event missing ID: {Subject}", @event.Subject);
                continue;
            }

            // Process
            await ProcessEventAsync(@event);

            log.LogInformation("Event processed successfully: {EventId}", @event.Id);
        }
        catch (Exception ex)
        {
            log.LogError(
                ex,
                "Error processing event {EventId}: {ErrorMessage}",
                @event.Id,
                ex.Message
            );

            // Log event data for debugging
            log.LogError(
                "Event data: {@EventData}",
                @event.Data
            );

            throw;
        }
    }
}

// ============= WEBHOOK VALIDATION =============

[FunctionName("ValidateEventGridWebhook")]
public static async Task ValidateWebhook(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "webhook")] EventGridEvent[] events,
    ILogger log)
{
    foreach (var @event in events)
    {
        // Handle subscription validation
        if (@event.EventType == "Microsoft.EventGrid.SubscriptionValidationEvent")
        {
            log.LogInformation("Validating Event Grid subscription");

            var validationEvent = @event.Data as dynamic;
            var validationCode = validationEvent?.validationCode;

            log.LogInformation("Validation code: {ValidationCode}", validationCode);

            // Must return validation code within 5 minutes
            // Return 200 OK with validation response
        }
    }
    await Task.CompletedTask;
}

// ============= MONITORING CHECKLIST =============

[FunctionName("MonitoringDashboard")]
public static void MonitoringChecklist()
{
    Console.WriteLine("Event Grid Monitoring Checklist:");
    Console.WriteLine("");

    Console.WriteLine("Metrics to Monitor:");
    Console.WriteLine("✓ Published Events - Count of events published");
    Console.WriteLine("✓ Delivery Attempts - Total delivery attempts");
    Console.WriteLine("✓ Delivered Events - Successfully delivered");
    Console.WriteLine("✓ Failed Events - Failed deliveries");
    Console.WriteLine("✓ Unmatched Events - Events not matching any subscription");
    Console.WriteLine("✓ Dead-letter Events - Events moved to dead-letter");
    Console.WriteLine("");

    Console.WriteLine("Alerts to Set Up:");
    Console.WriteLine("⚠ High failure rate (>10% failed events)");
    Console.WriteLine("⚠ Dead-letter queue growing (>100 messages/hour)");
    Console.WriteLine("⚠ Unmatched events spike (>1000 events/hour)");
    Console.WriteLine("⚠ Handler timeouts (>5% timeout rate)");
    Console.WriteLine("⚠ Handler returning 4xx errors");
    Console.WriteLine("");

    Console.WriteLine("Troubleshooting Steps:");
    Console.WriteLine("1. Check Azure Portal metrics");
    Console.WriteLine("2. Review function logs in Application Insights");
    Console.WriteLine("3. Inspect dead-letter queue");
    Console.WriteLine("4. Test webhook with Event Grid Viewer");
    Console.WriteLine("5. Validate subscription filters");
    Console.WriteLine("6. Check handler response codes (must return 2xx)");
    Console.WriteLine("7. Verify network connectivity");
    Console.WriteLine("8. Review retry policy settings");
}

// ============= HEALTH CHECK ENDPOINT =============

[FunctionName("EventGridHealthCheck")]
public static async Task<object> HealthCheck(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "health")] object req,
    ILogger log)
{
    try
    {
        // Check handler readiness
        var isHealthy = await CheckHandlerHealthAsync();

        if (isHealthy)
        {
            log.LogInformation("Health check passed");
            return new { Status = "Healthy", Timestamp = DateTime.UtcNow };
        }
        else
        {
            log.LogError("Health check failed");
            return new { Status = "Unhealthy", Timestamp = DateTime.UtcNow };
        }
    }
    catch (Exception ex)
    {
        log.LogError($"Health check error: {ex.Message}");
        return new { Status = "Error", Error = ex.Message };
    }
}

// ============= PERFORMANCE MONITORING =============

public class PerformanceMonitoring
{
    public static Dictionary<string, double> TrackPerformanceMetrics()
    {
        return new Dictionary<string, double>
        {
            { "AverageProcessingTimeMs", 150 },
            { "MaxProcessingTimeMs", 5000 },
            { "P95ProcessingTimeMs", 800 },
            { "P99ProcessingTimeMs", 2000 },
            { "ThroughputEventsPerSecond", 100 },
            { "SuccessRatePercentage", 98.5 },
            { "FailureRatePercentage", 1.5 }
        };
    }
}

// ============= COMMON ISSUES & SOLUTIONS =============

Console.WriteLine("");
Console.WriteLine("Common Event Grid Issues:");
Console.WriteLine("");
Console.WriteLine("Issue 1: Webhook not receiving events");
Console.WriteLine("  Check: Is handler returning 200-299 status?");
Console.WriteLine("  Check: Can Event Grid reach the webhook URL?");
Console.WriteLine("  Check: Are subscription filters too restrictive?");
Console.WriteLine("");

Console.WriteLine("Issue 2: High dead-letter count");
Console.WriteLine("  Check: Handler error logs");
Console.WriteLine("  Check: Handler response status codes");
Console.WriteLine("  Check: Network connectivity");
Console.WriteLine("");

Console.WriteLine("Issue 3: Unmatched events spike");
Console.WriteLine("  Check: Event type filters");
Console.WriteLine("  Check: Subject filters");
Console.WriteLine("  Check: Are subscriptions correctly configured?");
Console.WriteLine("");

Console.WriteLine("Issue 4: Webhook validation failing");
Console.WriteLine("  Check: Handler must respond to validation event");
Console.WriteLine("  Check: Return validation code in response");
Console.WriteLine("  Check: Must respond within 5 minutes");

async Task ProcessEventAsync(EventGridEvent @event)
{
    await Task.Delay(100);
}

async Task<bool> CheckHandlerHealthAsync()
{
    await Task.Delay(100);
    return true;
}`}]}]},Fv={id:"azure-event-hub",name:"Event Hub",questions:[{id:"q1",question:"What is Azure Event Hub and what are its core concepts?",answer:"Azure Event Hub is a fully managed, real-time big data streaming platform that ingests and processes millions of events per second. Core concepts: 1) Event Hubs - namespace containers for topics. 2) Topics - like queues but optimized for streaming. 3) Partitions - ordered log of events enabling parallel consumption. 4) Consumer Groups - independent readers of event stream. 5) Event Processors - handle event consumption and checkpointing. 6) Throughput Units/Capacity Units - control ingress/egress rates. Key differences from Service Bus: Event Hub is event streaming (append-only log), Service Bus is messaging (queue/topic). Event Hub supports 1MB+ event sizes, millions events/sec, multiple independent consumers reading same stream. Use cases: IoT telemetry, log analytics, event sourcing.",codeSnippets:[{language:"csharp",code:`// Azure Event Hub - Core Concepts
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;
using Azure.Messaging.EventHubs.Consumer;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

// ============= CORE COMPONENTS =============

// 1. Event Hub Namespace
public class EventHubNamespace
{
    public string NamespaceName { get; set; } = "myeventhubns";
    public string ConnectionString { get; set; } = "Endpoint=sb://...";
    public string[] EventHubNames { get; set; } = { "order-events", "user-events" };
}

// 2. Event Hub (Topic)
public class EventHubInfo
{
    public string Name { get; set; } = "order-events";
    public int PartitionCount { get; set; } = 4;
    public int RetentionDays { get; set; } = 7;
    public long MaxMessageSizeBytes { get; set; } = 1048576; // 1MB
    public DateTime CreatedAt { get; set; }
}

// 3. Partitions & Consumer Groups
public class EventHubStructure
{
    public string EventHubName { get; set; } = "order-events";
    
    // Partitions: ordered log of events
    public int[] Partitions { get; set; } = { 0, 1, 2, 3 };
    
    // Consumer Groups: independent readers
    public Dictionary<string, ConsumerGroupInfo> ConsumerGroups { get; set; } = new()
    {
        { "order-processing", new ConsumerGroupInfo { Name = "order-processing" } },
        { "analytics", new ConsumerGroupInfo { Name = "analytics" } },
        { "backup", new ConsumerGroupInfo { Name = "backup" } }
    };
}

public class ConsumerGroupInfo
{
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }
    public Dictionary<int, PartitionProperties> PartitionStatus { get; set; } = new();
}

// 4. Event (Message)
public class EventHubEvent
{
    public string OrderId { get; set; }
    public decimal Amount { get; set; }
    public string CustomerId { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Status { get; set; }
}

// ============= THROUGHPUT & SCALING =============

public class ThroughputConfiguration
{
    // Standard tier: Throughput Units (TU)
    public int ThroughputUnits { get; set; } = 10;  // 1 TU = 1 MB/s ingress, 2 MB/s egress
    public int MaxConnections { get; set; } = 5000; // Per TU

    // Premium tier: Event Hub Capacity Units (ECU)
    public int CapacityUnits { get; set; } = 1;     // 1 ECU = 10 MB/s ingress, 20 MB/s egress
    public int MaxBandwidthMbps { get; set; } = 10; // Per ECU
}

// ============= PUBLISHING EVENTS =============

public class EventPublisher
{
    private EventHubProducerClient _producer;

    public EventPublisher(string connectionString, string eventHubName)
    {
        _producer = new EventHubProducerClient(connectionString, eventHubName);
    }

    // Publish single event
    public async Task PublishEventAsync(EventHubEvent evt)
    {
        var eventData = new EventData(System.Text.Encoding.UTF8.GetBytes(
            System.Text.Json.JsonSerializer.Serialize(evt)
        ));

        // Optional: Set partition key (ensures events with same key go to same partition)
        await _producer.SendAsync(new[] { eventData }, 
            new SendEventOptions { PartitionKey = evt.CustomerId });
    }

    // Publish batch events
    public async Task PublishBatchAsync(IEnumerable<EventHubEvent> events)
    {
        var batch = await _producer.CreateBatchAsync();

        foreach (var evt in events)
        {
            var eventData = new EventData(System.Text.Encoding.UTF8.GetBytes(
                System.Text.Json.JsonSerializer.Serialize(evt)
            ));

            // Add to batch; if batch full, send and start new batch
            if (!batch.TryAdd(eventData))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync();
                batch.TryAdd(eventData);
            }
        }

        // Send remaining events
        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _producer.CloseAsync();
    }
}

// ============= CONSUMING EVENTS =============

public class EventConsumer
{
    private EventHubConsumerClient _consumer;

    public EventConsumer(string connectionString, string eventHubName, string consumerGroup)
    {
        _consumer = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);
    }

    // Read from specific partition
    public async Task ConsumeFromPartitionAsync(int partitionId)
    {
        var startingPosition = EventPosition.Latest;
        
        await foreach (PartitionEvent partitionEvent in 
            _consumer.ReadEventsFromPartitionAsync(partitionId, startingPosition))
        {
            var eventBody = System.Text.Encoding.UTF8.GetString(partitionEvent.Data.Body);
            Console.WriteLine($"Partition {partitionId}: {eventBody}");
        }
    }

    // Read from all partitions (for specific consumer group)
    public async Task ConsumeFromAllPartitionsAsync()
    {
        var startingPosition = EventPosition.Earliest;

        await foreach (PartitionEvent partitionEvent in 
            _consumer.ReadEventsAsync(startingPosition))
        {
            var eventBody = System.Text.Encoding.UTF8.GetString(partitionEvent.Data.Body);
            var partitionId = partitionEvent.Partition.PartitionId;
            var offset = partitionEvent.Data.Offset;
            var sequenceNumber = partitionEvent.Data.SequenceNumber;

            Console.WriteLine($"Partition {partitionId}, Offset: {offset}, Seq: {sequenceNumber}");
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _consumer.CloseAsync();
    }
}

// ============= KEY DIFFERENCES FROM SERVICE BUS =============

public class EventHubVsServiceBus
{
    public static void ComparisonTable()
    {
        Console.WriteLine("Event Hub vs Service Bus:");
        Console.WriteLine("");
        Console.WriteLine("Feature                  | Event Hub              | Service Bus");
        Console.WriteLine("Purpose                  | Event streaming        | Queuing/Messaging");
        Console.WriteLine("Data model               | Append-only log        | Queue/Topic");
        Console.WriteLine("Retention                | Hours/Days             | Until consumed");
        Console.WriteLine("Consumer model           | Multiple independent   | Single consumer");
        Console.WriteLine("Throughput               | Very high (millions)   | High");
        Console.WriteLine("Message size             | Up to 1MB              | 256KB default");
        Console.WriteLine("Ordering                 | Per partition          | Per session");
        Console.WriteLine("Use case                 | Real-time streaming    | Decoupled messaging");
    }
}

// ============= EVENT HUB ARCHITECTURE =============

Console.WriteLine("Event Hub Architecture:");
Console.WriteLine("");
Console.WriteLine("Publishers → Event Hub (Topic) → Partitions → Consumer Groups → Consumers");
Console.WriteLine("");
Console.WriteLine("Publishers:");
Console.WriteLine("- Send events to Event Hub");
Console.WriteLine("- Can specify partition key for ordering");
Console.WriteLine("");
Console.WriteLine("Partitions:");
Console.WriteLine("- Ordered log of events within partition");
Console.WriteLine("- 4-32 partitions typical");
Console.WriteLine("- Each partition can have concurrent consumers");
Console.WriteLine("");
Console.WriteLine("Consumer Groups:");
Console.WriteLine("- Independent stream readers");
Console.WriteLine("- Multiple apps can process same stream");
Console.WriteLine("- Each group tracks own offset per partition");
Console.WriteLine("");
Console.WriteLine("Consumers:");
Console.WriteLine("- Read from partition using consumer group");
Console.WriteLine("- Can use EventProcessorClient for automatic checkpointing");`}]},{id:"q2",question:"How do partitions and consumer groups work in Event Hub?",answer:"Partitions are ordered logs within an Event Hub - events are appended sequentially to one partition based on partition key or round-robin. Key benefits: 1) Ordered processing - events in same partition maintain order. 2) Parallel consumption - different consumers read different partitions. 3) Throughput - adding partitions increases overall event rate. Typical partition count: 4-32, can scale dynamically. Consumer Groups enable independent readers of same event stream - each group maintains own offset per partition. Multiple applications can process same events simultaneously. Default consumer group: $Default. Use consumer groups for different processing scenarios (real-time analytics, batch processing, backup). Each partition can have at most one active consumer per consumer group.",codeSnippets:[{language:"csharp",code:`// Event Hub - Partitions & Consumer Groups
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Consumer;
using Azure.Messaging.EventHubs.Processor;
using Azure.Storage.Blobs;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

// ============= PARTITION KEY =============

public class PartitionKeyStrategy
{
    // Strategy 1: Ensure ordering by customer
    public static string GetPartitionKeyByCustomer(string customerId)
    {
        return customerId;  // Same customer → same partition → ordered
    }

    // Strategy 2: Distribute events round-robin
    public static string NoPartitionKey()
    {
        return null;  // Event Hub chooses partition
    }

    // Strategy 3: Partition by tenant
    public static string GetPartitionKeyByTenant(string tenantId)
    {
        return tenantId;
    }
}

// ============= CONSUMER GROUP MANAGEMENT =============

public class ConsumerGroupManagement
{
    // Create/list consumer groups
    public async Task ManageConsumerGroupsAsync(string connectionString, string eventHubName)
    {
        var client = new EventHubAdministrationClient(connectionString);

        // List all consumer groups
        await foreach (var groupName in client.ListConsumerGroupsAsync(eventHubName))
        {
            Console.WriteLine($"Consumer Group: {groupName}");
        }

        // Get consumer group properties
        try
        {
            var properties = await client.GetConsumerGroupAsync(eventHubName, "order-processing");
            Console.WriteLine($"Consumer Group: {properties.Value.Name}");
            Console.WriteLine($"Created At: {properties.Value.CreatedOn}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}

// ============= PARTITION PROPERTIES =============

public class PartitionInformation
{
    public async Task GetPartitionInfoAsync(string connectionString, string eventHubName)
    {
        var client = new EventHubConsumerClient(
            EventHubConsumerClient.DefaultConsumerGroupName,
            connectionString,
            eventHubName
        );

        try
        {
            var properties = await client.GetEventHubPropertiesAsync();

            Console.WriteLine($"Event Hub: {properties.Name}");
            Console.WriteLine($"Created: {properties.CreatedOn}");
            Console.WriteLine($"Partitions: {properties.PartitionIds.Length}");

            foreach (var partitionId in properties.PartitionIds)
            {
                var partitionProperties = await client.GetPartitionPropertiesAsync(partitionId);

                Console.WriteLine($"  Partition {partitionId}:");
                Console.WriteLine($"    First Offset: {partitionProperties.FirstSequenceNumber}");
                Console.WriteLine($"    Last Offset: {partitionProperties.LastSequenceNumber}");
                Console.WriteLine($"    Last Enqueued Time: {partitionProperties.LastEnqueuedTimeUtc}");
            }
        }
        finally
        {
            await client.CloseAsync();
        }
    }
}

// ============= CONSUMER GROUP OFFSET TRACKING =============

public class OffsetTracking
{
    // Manual offset tracking
    public async Task ReadWithManualCheckpointAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup)
    {
        var client = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);

        try
        {
            var startingPosition = EventPosition.Earliest;

            await foreach (PartitionEvent partitionEvent in 
                client.ReadEventsAsync(startingPosition))
            {
                // Process event
                ProcessEvent(partitionEvent);

                // Manually track offset
                string offset = partitionEvent.Data.Offset;
                long sequenceNumber = partitionEvent.Data.SequenceNumber;

                Console.WriteLine($"Processed - Offset: {offset}, Seq: {sequenceNumber}");
                // Save offset to persistent storage (database, blob, etc.)
            }
        }
        finally
        {
            await client.CloseAsync();
        }
    }

    // Automatic checkpointing with EventProcessorClient
    public async Task ReadWithEventProcessorAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup,
        string blobConnectionString,
        string blobContainerName)
    {
        var storageClient = new BlobContainerClient(
            new Uri($"https://..." + blobContainerName),
            new Azure.Storage.StorageSharedKeyCredential("", "")
        );

        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            connectionString,
            eventHubName
        );

        processor.ProcessEventAsync += ProcessEventHandlerAsync;
        processor.ProcessErrorAsync += ProcessErrorHandlerAsync;

        await processor.StartProcessingAsync();
        // Continue processing until stopped
        await processor.StopProcessingAsync();
    }

    private async Task ProcessEventHandlerAsync(ProcessEventArgs args)
    {
        try
        {
            ProcessEvent(args.Data);
            // Checkpoint automatically saved
            await args.UpdateCheckpointAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error processing event: {ex.Message}");
        }
    }

    private async Task ProcessErrorHandlerAsync(ProcessErrorEventArgs args)
    {
        Console.WriteLine($"Error in partition {args.PartitionId}: {args.Exception.Message}");
        await Task.CompletedTask;
    }

    private void ProcessEvent(EventData eventData)
    {
        var eventBody = System.Text.Encoding.UTF8.GetString(eventData.Body);
        Console.WriteLine($"Event: {eventBody}");
    }
}

// ============= PARTITION STRATEGY =============

public class PartitionStrategy
{
    public static void WhenToUsePartitionKey()
    {
        Console.WriteLine("Use Partition Key when:");
        Console.WriteLine("✓ Order matters (events from same customer should be ordered)");
        Console.WriteLine("✓ Downstream processing depends on order");
        Console.WriteLine("✓ Stateful processing (grouping related events)");
        Console.WriteLine("");

        Console.WriteLine("Don't use Partition Key when:");
        Console.WriteLine("✗ Order doesn't matter (random events)");
        Console.WriteLine("✗ Need maximum throughput (distributed across all partitions)");
        Console.WriteLine("✗ Want load balancing across partitions");
    }

    public static void ScalingConsumers()
    {
        Console.WriteLine("");
        Console.WriteLine("Consumer Scaling:");
        Console.WriteLine("- If partitions > consumers: Some consumers read multiple partitions");
        Console.WriteLine("- If partitions = consumers: Each consumer reads 1 partition");
        Console.WriteLine("- If partitions < consumers: Some consumers idle");
        Console.WriteLine("- Optimal: Consumers <= Partitions");
        Console.WriteLine("- Recommendation: 1 consumer per partition for best throughput");
    }
}

// ============= CONSUMER GROUP USE CASES =============

public class ConsumerGroupUseCases
{
    public static void Examples()
    {
        Console.WriteLine("");
        Console.WriteLine("Consumer Group Use Cases:");
        Console.WriteLine("");

        Console.WriteLine("1. Real-time Dashboard:");
        Console.WriteLine("   Consumer Group: 'dashboard'");
        Console.WriteLine("   Purpose: Display live event metrics");
        Console.WriteLine("   Offset: Latest (skip past events)");
        Console.WriteLine("");

        Console.WriteLine("2. Analytics Batch Processing:");
        Console.WriteLine("   Consumer Group: 'analytics'");
        Console.WriteLine("   Purpose: Process all events for analysis");
        Console.WriteLine("   Offset: Earliest (process from beginning)");
        Console.WriteLine("");

        Console.WriteLine("3. Backup/Archive:");
        Console.WriteLine("   Consumer Group: 'backup'");
        Console.WriteLine("   Purpose: Store all events to long-term storage");
        Console.WriteLine("   Offset: Earliest with checkpointing");
        Console.WriteLine("");

        Console.WriteLine("4. Multiple Applications:");
        Console.WriteLine("   Each app has own consumer group");
        Console.WriteLine("   Each reads entire event stream independently");
        Console.WriteLine("   No interference between applications");
    }
}`}]},{id:"q3",question:"How do you publish events efficiently and handle batching in Event Hub?",answer:"Event publishing optimizes throughput through batching. Key strategies: 1) Create batch with CreateBatchAsync() - groups events before sending. 2) Check batch capacity with TryAdd() - prevents exceeding size limits. 3) Send full batch immediately - reduces network round-trips. 4) Use partition keys for ordering - same key = same partition. 5) Handle backpressure - retry on transient failures. Performance optimization: batch size ~1MB, 1000 events typical batch, tune based on event size. Failed events can be retried with exponential backoff. For throughput units, calculate: events/sec * avg_event_size / 1MB = TU needed. Max batch size 1MB, individual event max 1MB.",codeSnippets:[{language:"csharp",code:`// Event Hub - Publishing & Batching
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

// ============= BATCH PUBLISHING =============

public class BatchPublisher
{
    private EventHubProducerClient _producer;

    public BatchPublisher(string connectionString, string eventHubName)
    {
        _producer = new EventHubProducerClient(connectionString, eventHubName);
    }

    // Basic batch publishing
    public async Task PublishBatchAsync(List<EventData> events)
    {
        var batch = await _producer.CreateBatchAsync();

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                // Batch is full, send it
                await _producer.SendAsync(batch);

                // Create new batch
                batch = await _producer.CreateBatchAsync();

                // Add event to new batch (must succeed)
                if (!batch.TryAdd(@event))
                {
                    throw new InvalidOperationException("Event too large for batch");
                }
            }
        }

        // Send remaining events
        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    // Publishing with partition key
    public async Task PublishWithPartitionKeyAsync(
        List<EventData> events,
        string partitionKey)
    {
        var sendOptions = new SendEventOptions { PartitionKey = partitionKey };
        var batch = await _producer.CreateBatchAsync(sendOptions);

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync(sendOptions);
                batch.TryAdd(@event);
            }
        }

        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    // Publishing to specific partition
    public async Task PublishToSpecificPartitionAsync(
        List<EventData> events,
        int partitionId)
    {
        var sendOptions = new SendEventOptions { PartitionId = partitionId.ToString() };
        var batch = await _producer.CreateBatchAsync(sendOptions);

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync(sendOptions);
                batch.TryAdd(@event);
            }
        }

        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _producer.CloseAsync();
    }
}

// ============= BATCH SIZE OPTIMIZATION =============

public class BatchOptimization
{
    // Get batch properties
    public async Task AnalyzeBatchAsync(string connectionString, string eventHubName)
    {
        var producer = new EventHubProducerClient(connectionString, eventHubName);

        try
        {
            var batchOptions = new CreateBatchOptions();
            var batch = await producer.CreateBatchAsync(batchOptions);

            Console.WriteLine($"Max Batch Size: {batch.MaximumSizeInBytes} bytes");
            Console.WriteLine($"Available Size: {batch.SizeInBytes} bytes");

            // Create sample events and check size
            var sampleEvent = new EventData(System.Text.Encoding.UTF8.GetBytes(
                JsonSerializer.Serialize(new { orderId = "12345", amount = 99.99 })
            ));

            if (batch.TryAdd(sampleEvent))
            {
                Console.WriteLine($"Sample Event Size: {sampleEvent.Body.Length} bytes");
                Console.WriteLine($"Batch Used: {batch.SizeInBytes} bytes");
            }
        }
        finally
        {
            await producer.CloseAsync();
        }
    }
}

// ============= THROUGHPUT CALCULATION =============

public class ThroughputCalculation
{
    public static void CalculateThroughputUnits()
    {
        Console.WriteLine("Throughput Unit (TU) Sizing:");
        Console.WriteLine("");

        // Example: 100,000 events/sec, average 1KB per event
        int eventsPerSecond = 100000;
        int avgEventSizeBytes = 1024;  // 1KB

        double ingressMBps = (eventsPerSecond * avgEventSizeBytes) / (1024.0 * 1024.0);
        int tuNeeded = (int)Math.Ceiling(ingressMBps);

        Console.WriteLine($"Events/sec: {eventsPerSecond}");
        Console.WriteLine($"Avg Event Size: {avgEventSizeBytes} bytes");
        Console.WriteLine($"Required Ingress: {ingressMBps:F2} MB/s");
        Console.WriteLine($"Throughput Units Needed: {tuNeeded} TU");
        Console.WriteLine("");

        Console.WriteLine("1 TU = 1 MB/s ingress, 2 MB/s egress");
        Console.WriteLine("Scale up: Add more TU");
        Console.WriteLine("Monitor: Use Azure Monitor for actual usage");
    }
}

// ============= ERROR HANDLING & RETRY =============

public class ErrorHandlingPublisher
{
    private EventHubProducerClient _producer;

    public ErrorHandlingPublisher(string connectionString, string eventHubName)
    {
        _producer = new EventHubProducerClient(connectionString, eventHubName);
    }

    // Publish with retry logic
    public async Task PublishWithRetryAsync(
        List<EventData> events,
        int maxRetries = 3)
    {
        int retryCount = 0;
        var exponentialBackoff = new System.Diagnostics.Stopwatch();

        while (retryCount < maxRetries)
        {
            try
            {
                await PublishBatchAsync(events);
                return;  // Success
            }
            catch (Azure.Messaging.EventHubs.EventHubsException ex) when (ex.IsTransient)
            {
                retryCount++;
                int delayMs = (int)Math.Pow(2, retryCount) * 1000;  // Exponential backoff

                Console.WriteLine($"Transient error, retrying in {delayMs}ms");
                await Task.Delay(delayMs);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Fatal error: {ex.Message}");
                throw;
            }
        }

        throw new InvalidOperationException($"Failed after {maxRetries} retries");
    }

    private async Task PublishBatchAsync(List<EventData> events)
    {
        var batch = await _producer.CreateBatchAsync();

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync();
                batch.TryAdd(@event);
            }
        }

        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _producer.CloseAsync();
    }
}

// ============= PERFORMANCE MONITORING =============

public class PerformanceMonitoring
{
    public async Task MeasurePublishThroughputAsync(
        string connectionString,
        string eventHubName,
        int totalEvents)
    {
        var producer = new EventHubProducerClient(connectionString, eventHubName);
        var stopwatch = Stopwatch.StartNew();

        try
        {
            var batch = await producer.CreateBatchAsync();
            int eventCount = 0;

            for (int i = 0; i < totalEvents; i++)
            {
                var eventData = new EventData(System.Text.Encoding.UTF8.GetBytes(
                    $"Event {i}: {DateTime.UtcNow}"
                ));

                if (!batch.TryAdd(eventData))
                {
                    await producer.SendAsync(batch);
                    batch = await producer.CreateBatchAsync();
                    batch.TryAdd(eventData);
                }

                eventCount++;
            }

            if (batch.Count > 0)
            {
                await producer.SendAsync(batch);
            }

            stopwatch.Stop();

            double eventsPerSecond = totalEvents / stopwatch.Elapsed.TotalSeconds;
            Console.WriteLine($"Published {totalEvents} events");
            Console.WriteLine($"Duration: {stopwatch.ElapsedMilliseconds}ms");
            Console.WriteLine($"Throughput: {eventsPerSecond:F0} events/sec");
        }
        finally
        {
            await producer.CloseAsync();
        }
    }
}

// ============= BEST PRACTICES =============

Console.WriteLine("Event Hub Publishing Best Practices:");
Console.WriteLine("");
Console.WriteLine("✓ Always use batching for efficiency");
Console.WriteLine("✓ Batch size: Aim for 1MB (max limit)");
Console.WriteLine("✓ Use partition key for ordering requirements");
Console.WriteLine("✓ Implement exponential backoff for retries");
Console.WriteLine("✓ Handle EventHubsException.IsTransient for transient errors");
Console.WriteLine("✓ Monitor throughput unit utilization");
Console.WriteLine("✓ Use EventHubProducerClient connection pooling");
Console.WriteLine("✓ Dispose producer when done to free resources");
Console.WriteLine("✓ Size TU based on peak event rate");`}]},{id:"q4",question:"How do you consume events efficiently using EventProcessorClient?",answer:"EventProcessorClient automates consumption with: 1) Automatic checkpoint management - saves offset to blob storage. 2) Load balancing - distributes partitions across consumer instances. 3) Partition ownership - ensures each partition has max one owner. 4) Automatic recovery - handles consumer failures gracefully. 5) Event processing - delegates to ProcessEventAsync handler. Checkpointing strategy: automatic (after each event) or manual (batch of events). Use blob storage for checkpoint persistence - enables resuming from last checkpoint. Multiple EventProcessorClient instances with same consumer group scale horizontally. Benefits: no manual offset tracking, automatic partition rebalancing, high availability. Setup: configure storage client, define event/error handlers, start processing.",codeSnippets:[{language:"csharp",code:`// Event Hub - EventProcessorClient for Consumption
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Consumer;
using Azure.Messaging.EventHubs.Processor;
using Azure.Storage.Blobs;
using Microsoft.Azure.WebJobs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= EVENT PROCESSOR CLIENT SETUP =============

public class EventHubConsumerSetup
{
    public static async Task SetupEventProcessorAsync(
        string eventHubConnectionString,
        string eventHubName,
        string consumerGroup,
        string storageConnectionString,
        string containerName)
    {
        // Initialize storage client for checkpointing
        var storageClient = new BlobContainerClient(
            new Uri($"https://mystg.blob.core.windows.net/{containerName}"),
            new Azure.Storage.StorageSharedKeyCredential("accountname", "accountkey")
        );

        // Create processor
        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            eventHubConnectionString,
            eventHubName
        );

        // Register handlers
        processor.ProcessEventAsync += ProcessEventHandlerAsync;
        processor.ProcessErrorAsync += ProcessErrorHandlerAsync;

        // Start processing
        await processor.StartProcessingAsync();

        // Keep processing until stopped
        Console.WriteLine("Event processor started. Press Ctrl+C to stop.");
        await Task.Delay(Timeout.Infinite);

        // Stop processing
        await processor.StopProcessingAsync();
    }

    private static async Task ProcessEventHandlerAsync(ProcessEventArgs args)
    {
        try
        {
            // Get event data
            var eventBody = System.Text.Encoding.UTF8.GetString(args.Data.Body);
            Console.WriteLine($"Event: {eventBody}");

            // Process event (custom logic)
            await ProcessOrderAsync(eventBody);

            // Checkpoint after successful processing
            // Saves offset to blob storage
            await args.UpdateCheckpointAsync();

            Console.WriteLine($"Checkpointed partition {args.Partition.PartitionId}, offset {args.Data.Offset}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error processing event: {ex.Message}");
            // Don't checkpoint on error - will retry next time
        }
    }

    private static async Task ProcessErrorHandlerAsync(ProcessErrorEventArgs args)
    {
        Console.WriteLine($"Error in partition {args.PartitionId}: {args.Exception.Message}");
        Console.WriteLine($"Operation: {args.Operation}");

        // Handle specific error types
        if (args.Exception is Azure.Messaging.EventHubs.EventHubsException ehEx)
        {
            if (ehEx.IsTransient)
            {
                Console.WriteLine("Transient error - processor will retry");
            }
            else
            {
                Console.WriteLine("Permanent error - manual intervention needed");
            }
        }

        await Task.CompletedTask;
    }

    private static async Task ProcessOrderAsync(string orderJson)
    {
        // Simulate processing
        await Task.Delay(100);
    }
}

// ============= CHECKPOINT MANAGEMENT =============

public class CheckpointManagement
{
    // Automatic checkpointing (every event)
    private static async Task AutomaticCheckpointAsync(ProcessEventArgs args)
    {
        await args.UpdateCheckpointAsync();
        Console.WriteLine($"Checkpoint updated: {args.Data.Offset}");
    }

    // Manual checkpointing (batch of events)
    public async Task ManualCheckpointingAsync(
        string eventHubConnectionString,
        string eventHubName,
        string consumerGroup,
        string storageConnectionString)
    {
        var storageClient = new BlobContainerClient(
            new Uri("https://mystg.blob.core.windows.net/checkpoints"),
            new Azure.Storage.StorageSharedKeyCredential("accountname", "key")
        );

        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            eventHubConnectionString,
            eventHubName
        );

        int eventCount = 0;
        const int checkpointInterval = 100;

        processor.ProcessEventAsync += async (args) =>
        {
            // Process event
            await ProcessOrderAsync(System.Text.Encoding.UTF8.GetString(args.Data.Body));

            eventCount++;

            // Checkpoint every 100 events
            if (eventCount % checkpointInterval == 0)
            {
                await args.UpdateCheckpointAsync();
                Console.WriteLine($"Batch checkpoint: {eventCount} events processed");
            }
        };

        processor.ProcessErrorAsync += (args) =>
        {
            Console.WriteLine($"Error: {args.Exception.Message}");
            return Task.CompletedTask;
        };

        await processor.StartProcessingAsync();
    }

    // Resume from checkpoint
    public async Task ResumeFromCheckpointAsync(
        string eventHubConnectionString,
        string eventHubName,
        string consumerGroup,
        string storageConnectionString)
    {
        var storageClient = new BlobContainerClient(
            new Uri("https://mystg.blob.core.windows.net/checkpoints"),
            new Azure.Storage.StorageSharedKeyCredential("accountname", "key")
        );

        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            eventHubConnectionString,
            eventHubName
        );

        Console.WriteLine("Processor will resume from last checkpoint...");

        processor.ProcessEventAsync += (args) => ProcessEventHandlerAsync(args);
        processor.ProcessErrorAsync += (args) => ProcessErrorHandlerAsync(args);

        await processor.StartProcessingAsync();
    }
}

// ============= PARTITION OWNERSHIP & LOAD BALANCING =============

public class PartitionOwnershipTracking
{
    public async Task TrackPartitionOwnershipAsync(
        EventProcessorClient processor)
    {
        processor.PartitionInitializingAsync += async (args) =>
        {
            Console.WriteLine($"Initializing partition {args.Partition.PartitionId}");
            // Custom initialization logic
            await Task.CompletedTask;
        };

        processor.PartitionClosingAsync += async (args) =>
        {
            Console.WriteLine($"Closing partition {args.Partition.PartitionId}");
            Console.WriteLine($"Reason: {args.Reason}");
            // Custom cleanup logic
            await Task.CompletedTask;
        };
    }

    public static void LoadBalancingBehavior()
    {
        Console.WriteLine("");
        Console.WriteLine("EventProcessorClient Load Balancing:");
        Console.WriteLine("");

        Console.WriteLine("Scenario 1: 4 Partitions, 1 Processor");
        Console.WriteLine("  Processor owns all 4 partitions");
        Console.WriteLine("");

        Console.WriteLine("Scenario 2: 4 Partitions, 2 Processors");
        Console.WriteLine("  Each processor owns 2 partitions");
        Console.WriteLine("  Automatic rebalancing");
        Console.WriteLine("");

        Console.WriteLine("Scenario 3: 4 Partitions, 5 Processors");
        Console.WriteLine("  4 processors own 1 partition each");
        Console.WriteLine("  1 processor idle (no partitions assigned)");
        Console.WriteLine("");

        Console.WriteLine("When processor added/removed:");
        Console.WriteLine("  - Automatic rebalancing triggers");
        Console.WriteLine("  - Partitions reassigned to remaining processors");
        Console.WriteLine("  - Minimal impact on processing");
    }
}

// ============= CONSUMER GROUP MANAGEMENT =============

public class ConsumerGroupScaling
{
    public static void HorizontalScaling()
    {
        Console.WriteLine("");
        Console.WriteLine("Horizontal Scaling with EventProcessorClient:");
        Console.WriteLine("");

        Console.WriteLine("1. Multiple instances of same consumer group:");
        Console.WriteLine("   - All connect to same Event Hub and consumer group");
        Console.WriteLine("   - All share same storage account for checkpoints");
        Console.WriteLine("   - Automatic partition distribution");
        Console.WriteLine("");

        Console.WriteLine("2. Scaling logic:");
        Console.WriteLine("   - Add processor: Rebalance distributes partitions");
        Console.WriteLine("   - Remove processor: Other processors take partitions");
        Console.WriteLine("   - No message loss (checkpoints saved)");
        Console.WriteLine("");

        Console.WriteLine("3. Best practices:");
        Console.WriteLine("   - Use separate consumer groups for different apps");
        Console.WriteLine("   - Size instances: 1 instance per partition optimal");
        Console.WriteLine("   - Monitor: Track partition ownership and lag");
        Console.WriteLine("   - Handle rebalancing gracefully");
    }
}

// ============= ERROR HANDLING STRATEGIES =============

public class ErrorHandlingStrategies
{
    public static async Task ConfigureErrorHandlingAsync(EventProcessorClient processor)
    {
        processor.ProcessErrorAsync += async (args) =>
        {
            // Log error details
            Console.WriteLine($"Partition: {args.PartitionId}");
            Console.WriteLine($"Operation: {args.Operation}");
            Console.WriteLine($"Exception: {args.Exception.Message}");

            // Handle specific errors
            if (args.Exception is Azure.Messaging.EventHubs.EventHubsException ehEx)
            {
                if (ehEx.IsTransient)
                {
                    // Transient error - processor will retry automatically
                    Console.WriteLine("Transient error - automatic retry");
                }
                else if (args.Exception.InnerException is TimeoutException)
                {
                    // Timeout - likely network issue
                    Console.WriteLine("Timeout - check connectivity");
                }
                else
                {
                    // Other error
                    Console.WriteLine("Fatal error - may need intervention");
                }
            }

            await Task.CompletedTask;
        };
    }
}

// ============= BEST PRACTICES =============

Console.WriteLine("EventProcessorClient Best Practices:");
Console.WriteLine("");
Console.WriteLine("✓ Use blob storage for checkpoint persistence");
Console.WriteLine("✓ Implement ProcessEventAsync handler for processing");
Console.WriteLine("✓ Implement ProcessErrorAsync handler for error handling");
Console.WriteLine("✓ Use UpdateCheckpointAsync() to save progress");
Console.WriteLine("✓ Handle transient errors gracefully");
Console.WriteLine("✓ Scale: Add multiple processor instances");
Console.WriteLine("✓ Monitor: Track partition ownership and processing lag");
Console.WriteLine("✓ Batch checkpointing for better performance");`}]},{id:"q5",question:"How do you monitor Event Hub performance and troubleshoot issues?",answer:"Monitor Event Hub using: 1) Azure Portal metrics - throughput, latency, consumer lag. 2) Diagnostic logs - operational logs, errors. 3) Application Insights - custom telemetry. 4) Azure Monitor alerts - high latency, throughput limits, errors. Key metrics: incoming messages, outgoing messages, active connections, server errors, incoming bytes. Consumer lag: difference between last enqueued offset and consumer offset. High lag indicates slow consumption. Troubleshooting: check TU/ECU limits (consider scaling), verify consumer is running, inspect error logs, validate network connectivity, review dead-letter behavior. Common issues: throttling (add TU), high latency (reduce batch size, check network), partition imbalance (verify consumer group), events lost (check retention policy).",codeSnippets:[{language:"csharp",code:`// Event Hub - Monitoring & Troubleshooting
using Azure.Monitor.Query;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= MONITORING METRICS =============

public class EventHubMonitoring
{
    public static void KeyMetricsToMonitor()
    {
        Console.WriteLine("Event Hub Key Metrics:");
        Console.WriteLine("");

        Console.WriteLine("Publisher Metrics:");
        Console.WriteLine("- Incoming Messages: Total events published");
        Console.WriteLine("- Incoming Bytes: Total data volume");
        Console.WriteLine("- Successful Requests: % of successful publishes");
        Console.WriteLine("- Server Errors: % of server-side failures");
        Console.WriteLine("");

        Console.WriteLine("Consumer Metrics:");
        Console.WriteLine("- Outgoing Messages: Total events consumed");
        Console.WriteLine("- Outgoing Bytes: Total data downloaded");
        Console.WriteLine("- Active Connections: Connected consumers");
        Console.WriteLine("");

        Console.WriteLine("Performance Metrics:");
        Console.WriteLine("- Consumer Lag: Offset difference between latest and consumed");
        Console.WriteLine("- Latency: Time from publish to consumption");
        Console.WriteLine("- Throughput Utilization: % of TU/ECU used");
    }
}

// ============= APPLICATION INSIGHTS INTEGRATION =============

public class ApplicationInsightsMonitoring
{
    private TelemetryClient _telemetryClient;

    public ApplicationInsightsMonitoring(string instrumentationKey)
    {
        var config = new Microsoft.ApplicationInsights.Config.TelemetryConfiguration(instrumentationKey);
        _telemetryClient = new TelemetryClient(config);
    }

    // Track publishing metrics
    public async Task TrackPublishingAsync(
        string eventHubName,
        int eventCount,
        long sizeBytes)
    {
        var startTime = DateTime.UtcNow;

        try
        {
            // Simulate publishing
            await Task.Delay(100);

            var duration = DateTime.UtcNow - startTime;

            _telemetryClient.TrackEvent(
                "EventHub_Publish",
                new Dictionary<string, string>
                {
                    { "EventHub", eventHubName },
                    { "Status", "Success" }
                },
                new Dictionary<string, double>
                {
                    { "EventCount", eventCount },
                    { "SizeBytes", sizeBytes },
                    { "DurationMs", duration.TotalMilliseconds }
                }
            );
        }
        catch (Exception ex)
        {
            _telemetryClient.TrackException(ex);
        }
    }

    // Track consumption metrics
    public async Task TrackConsumptionAsync(
        string eventHubName,
        string consumerGroup,
        int processedEvents,
        long processingTimeMs)
    {
        _telemetryClient.TrackEvent(
            "EventHub_Consume",
            new Dictionary<string, string>
            {
                { "EventHub", eventHubName },
                { "ConsumerGroup", consumerGroup }
            },
            new Dictionary<string, double>
            {
                { "ProcessedEvents", processedEvents },
                { "ProcessingTimeMs", processingTimeMs },
                { "AvgTimePerEventMs", processingTimeMs / (double)processedEvents }
            }
        );
    }

    // Track consumer lag
    public void TrackConsumerLag(
        string eventHubName,
        string consumerGroup,
        int partitionId,
        long lagMessages)
    {
        var severity = lagMessages > 10000 ? SeverityLevel.Warning : SeverityLevel.Information;

        _telemetryClient.TrackEvent(
            "EventHub_ConsumerLag",
            new Dictionary<string, string>
            {
                { "EventHub", eventHubName },
                { "ConsumerGroup", consumerGroup },
                { "Partition", partitionId.ToString() },
                { "Severity", severity.ToString() }
            },
            new Dictionary<string, double>
            {
                { "LagMessages", lagMessages }
            }
        );
    }
}

// ============= CONSUMER LAG TRACKING =============

public class ConsumerLagAnalysis
{
    public async Task AnalyzeLagAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup)
    {
        var client = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);

        try
        {
            var properties = await client.GetEventHubPropertiesAsync();

            Console.WriteLine($"Event Hub: {eventHubName}");
            Console.WriteLine($"Consumer Group: {consumerGroup}");
            Console.WriteLine("");

            foreach (var partitionId in properties.PartitionIds)
            {
                var partitionProperties = await client.GetPartitionPropertiesAsync(partitionId);
                long lastEnqueuedSequence = partitionProperties.LastSequenceNumber;

                // Get consumer group info
                var adminClient = new EventHubAdministrationClient(connectionString);
                var consumerGroupProperties = await adminClient.GetConsumerGroupAsync(
                    eventHubName,
                    consumerGroup
                );

                // Estimate lag
                long lag = lastEnqueuedSequence - (partitionProperties.LastSequenceNumber - 1000);

                Console.WriteLine($"Partition {partitionId}:");
                Console.WriteLine($"  First Sequence: {partitionProperties.FirstSequenceNumber}");
                Console.WriteLine($"  Last Sequence: {lastEnqueuedSequence}");
                Console.WriteLine($"  Estimated Lag: {Math.Max(0, lag)} messages");
                Console.WriteLine("");
            }
        }
        finally
        {
            await client.CloseAsync();
        }
    }
}

// ============= THROTTLING & THROUGHPUT MANAGEMENT =============

public class ThrottlingHandling
{
    public static void ThroughputUnitScaling()
    {
        Console.WriteLine("");
        Console.WriteLine("Throughput Unit (TU) Scaling:");
        Console.WriteLine("");

        Console.WriteLine("When to add TU:");
        Console.WriteLine("- Throttling errors (429)");
        Console.WriteLine("- High latency (>1 second)");
        Console.WriteLine("- TU utilization >80%");
        Console.WriteLine("");

        Console.WriteLine("Scaling formula:");
        Console.WriteLine("TU Needed = (Events/sec * Avg Size) / 1MB");
        Console.WriteLine("");

        Console.WriteLine("Example:");
        Console.WriteLine("- 50,000 events/sec");
        Console.WriteLine("- 2KB average size");
        Console.WriteLine("- (50,000 * 2048) / (1024 * 1024) = 97.7 MB/s");
        Console.WriteLine("- Need ~98 TU (1 TU = 1 MB/s ingress)");
        Console.WriteLine("");

        Console.WriteLine("Premium tier (ECU):");
        Console.WriteLine("- 1 ECU = 10 MB/s ingress, 20 MB/s egress");
        Console.WriteLine("- Better for consistent high throughput");
    }
}

// ============= HEALTH CHECK =============

public class EventHubHealthCheck
{
    public async Task<HealthStatus> CheckEventHubHealthAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup)
    {
        var status = new HealthStatus();

        try
        {
            // Check producer
            using (var producer = new Azure.Messaging.EventHubs.Producer.EventHubProducerClient(
                connectionString,
                eventHubName))
            {
                var properties = await producer.GetEventHubPropertiesAsync();
                status.ProducerHealthy = true;
                status.PartitionCount = properties.PartitionIds.Length;
            }

            // Check consumer
            using (var consumer = new Azure.Messaging.EventHubs.Consumer.EventHubConsumerClient(
                consumerGroup,
                connectionString,
                eventHubName))
            {
                var properties = await consumer.GetEventHubPropertiesAsync();
                status.ConsumerHealthy = true;
            }

            status.OverallHealthy = status.ProducerHealthy && status.ConsumerHealthy;
        }
        catch (Exception ex)
        {
            status.OverallHealthy = false;
            status.LastError = ex.Message;
        }

        return status;
    }

    public class HealthStatus
    {
        public bool ProducerHealthy { get; set; }
        public bool ConsumerHealthy { get; set; }
        public bool OverallHealthy { get; set; }
        public int PartitionCount { get; set; }
        public string LastError { get; set; }

        public override string ToString()
        {
            return $"Overall: {(OverallHealthy ? "Healthy" : "Unhealthy")}, " +
                   $"Producer: {(ProducerHealthy ? "OK" : "Failed")}, " +
                   $"Consumer: {(ConsumerHealthy ? "OK" : "Failed")}, " +
                   $"Partitions: {PartitionCount}";
        }
    }
}

// ============= COMMON ISSUES & SOLUTIONS =============

public class TroubleshootingGuide
{
    public static void CommonIssuesAndSolutions()
    {
        Console.WriteLine("");
        Console.WriteLine("Event Hub Troubleshooting Guide:");
        Console.WriteLine("");

        Console.WriteLine("Issue 1: Throttling errors (429)");
        Console.WriteLine("  Cause: Exceeding TU/ECU limits");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Increase Throughput Units");
        Console.WriteLine("    - Reduce publishing rate");
        Console.WriteLine("    - Batch events efficiently");
        Console.WriteLine("");

        Console.WriteLine("Issue 2: High consumer lag");
        Console.WriteLine("  Cause: Consumer can't keep up");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Add more consumer instances");
        Console.WriteLine("    - Increase partition count");
        Console.WriteLine("    - Optimize event processing");
        Console.WriteLine("");

        Console.WriteLine("Issue 3: Events lost");
        Console.WriteLine("  Cause: Consumer not checkpointing");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Verify UpdateCheckpointAsync() called");
        Console.WriteLine("    - Check blob storage for checkpoints");
        Console.WriteLine("    - Monitor retention policy");
        Console.WriteLine("");

        Console.WriteLine("Issue 4: High latency");
        Console.WriteLine("  Cause: Network or processing delays");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Check network connectivity");
        Console.WriteLine("    - Reduce batch size");
        Console.WriteLine("    - Monitor CPU/memory on consumers");
        Console.WriteLine("");

        Console.WriteLine("Issue 5: Connection failures");
        Console.WriteLine("  Cause: Network, authentication, or firewall");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Verify connection string");
        Console.WriteLine("    - Check firewall rules");
        Console.WriteLine("    - Verify managed identity permissions");
    }
}

// ============= MONITORING BEST PRACTICES =============

Console.WriteLine("Event Hub Monitoring Best Practices:");
Console.WriteLine("");
Console.WriteLine("✓ Monitor TU/ECU utilization continuously");
Console.WriteLine("✓ Set alerts for lag exceeding threshold");
Console.WriteLine("✓ Track error rates and error types");
Console.WriteLine("✓ Monitor consumer group lag");
Console.WriteLine("✓ Set up Application Insights custom metrics");
Console.WriteLine("✓ Use Azure Monitor dashboards");
Console.WriteLine("✓ Review diagnostic logs regularly");
Console.WriteLine("✓ Implement health check endpoints");
Console.WriteLine("✓ Track end-to-end latency");
Console.WriteLine("✓ Monitor partition distribution");`}]}]},Vv={id:"azure",name:"Microsoft Azure",topics:[Mv,Uv,Gv,qv,Bv,Hv,zv,jv,_v,Fv]},dl=[mv,hv,Av,Ev,Pv,Vv];function Qv(){const[w,F]=Yt.useState(null),[U,m]=Yt.useState(null),[x,M]=Yt.useState(!0),X=ue=>{F(ue);const E=dl.find(T=>T.id===ue);E&&E.topics.length>0?m(E.topics[0].id):m(null)};return Yt.useEffect(()=>{const ue=document.querySelector(".content-area");ue&&(ue.scrollTop=0)},[U]),S.jsxs("div",{className:"app",children:[S.jsx(iv,{subjects:dl,selectedSubject:w,selectedTopic:U,onSubjectSelect:X,onTopicSelect:m,isOpen:x,onToggle:()=>M(!x)}),S.jsx(sv,{subjects:dl,selectedSubject:w,selectedTopic:U})]})}nv.createRoot(document.getElementById("root")).render(S.jsx(Yt.StrictMode,{children:S.jsx(Qv,{})}));
