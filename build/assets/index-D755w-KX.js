(function(){const Z=document.createElement("link").relList;if(Z&&Z.supports&&Z.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))m(M);new MutationObserver(M=>{for(const B of M)if(B.type==="childList")for(const W of B.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&m(W)}).observe(document,{childList:!0,subtree:!0});function j(M){const B={};return M.integrity&&(B.integrity=M.integrity),M.referrerPolicy&&(B.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?B.credentials="include":M.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function m(M){if(M.ep)return;M.ep=!0;const B=j(M);fetch(M.href,B)}})();var nr={exports:{}},Sn={};var vf;function Jp(){if(vf)return Sn;vf=1;var x=Symbol.for("react.transitional.element"),Z=Symbol.for("react.fragment");function j(m,M,B){var W=null;if(B!==void 0&&(W=""+B),M.key!==void 0&&(W=""+M.key),"key"in M){B={};for(var oe in M)oe!=="key"&&(B[oe]=M[oe])}else B=M;return M=B.ref,{$$typeof:x,type:m,key:W,ref:M!==void 0?M:null,props:B}}return Sn.Fragment=Z,Sn.jsx=j,Sn.jsxs=j,Sn}var hf;function Kp(){return hf||(hf=1,nr.exports=Jp()),nr.exports}var C=Kp(),ir={exports:{}},H={};var yf;function Wp(){if(yf)return H;yf=1;var x=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),W=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),me=Symbol.iterator;function Je(o){return o===null||typeof o!="object"?null:(o=me&&o[me]||o["@@iterator"],typeof o=="function"?o:null)}var je={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ne=Object.assign,Dt={};function Ke(o,T,_){this.props=o,this.context=T,this.refs=Dt,this.updater=_||je}Ke.prototype.isReactComponent={},Ke.prototype.setState=function(o,T){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,T,"setState")},Ke.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Kt(){}Kt.prototype=Ke.prototype;function Me(o,T,_){this.props=o,this.context=T,this.refs=Dt,this.updater=_||je}var ut=Me.prototype=new Kt;ut.constructor=Me,Ne(ut,Ke.prototype),ut.isPureReactComponent=!0;var Ct=Array.isArray;function He(){}var J={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Tt(o,T,_){var w=_.ref;return{$$typeof:x,type:o,key:T,ref:w!==void 0?w:null,props:_}}function Qa(o,T){return Tt(o.type,T,o.props)}function Et(o){return typeof o=="object"&&o!==null&&o.$$typeof===x}function Le(o){var T={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(_){return T[_]})}var Ca=/\/+/g;function wt(o,T){return typeof o=="object"&&o!==null&&o.key!=null?Le(""+o.key):T.toString(36)}function yt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(He,He):(o.status="pending",o.then(function(T){o.status==="pending"&&(o.status="fulfilled",o.value=T)},function(T){o.status==="pending"&&(o.status="rejected",o.reason=T)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function g(o,T,_,w,G){var Y=typeof o;(Y==="undefined"||Y==="boolean")&&(o=null);var te=!1;if(o===null)te=!0;else switch(Y){case"bigint":case"string":case"number":te=!0;break;case"object":switch(o.$$typeof){case x:case Z:te=!0;break;case ee:return te=o._init,g(te(o._payload),T,_,w,G)}}if(te)return G=G(o),te=w===""?"."+wt(o,0):w,Ct(G)?(_="",te!=null&&(_=te.replace(Ca,"$&/")+"/"),g(G,T,_,"",function(Ol){return Ol})):G!=null&&(Et(G)&&(G=Qa(G,_+(G.key==null||o&&o.key===G.key?"":(""+G.key).replace(Ca,"$&/")+"/")+te)),T.push(G)),1;te=0;var Ue=w===""?".":w+":";if(Ct(o))for(var ye=0;ye<o.length;ye++)w=o[ye],Y=Ue+wt(w,ye),te+=g(w,T,_,Y,G);else if(ye=Je(o),typeof ye=="function")for(o=ye.call(o),ye=0;!(w=o.next()).done;)w=w.value,Y=Ue+wt(w,ye++),te+=g(w,T,_,Y,G);else if(Y==="object"){if(typeof o.then=="function")return g(yt(o),T,_,w,G);throw T=String(o),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return te}function A(o,T,_){if(o==null)return o;var w=[],G=0;return g(o,w,"","",function(Y){return T.call(_,Y,G++)}),w}function U(o){if(o._status===-1){var T=o._result;T=T(),T.then(function(_){(o._status===0||o._status===-1)&&(o._status=1,o._result=_)},function(_){(o._status===0||o._status===-1)&&(o._status=2,o._result=_)}),o._status===-1&&(o._status=0,o._result=T)}if(o._status===1)return o._result.default;throw o._result}var ne=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},re={map:A,forEach:function(o,T,_){A(o,function(){T.apply(this,arguments)},_)},count:function(o){var T=0;return A(o,function(){T++}),T},toArray:function(o){return A(o,function(T){return T})||[]},only:function(o){if(!Et(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return H.Activity=N,H.Children=re,H.Component=Ke,H.Fragment=j,H.Profiler=M,H.PureComponent=Me,H.StrictMode=m,H.Suspense=O,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,H.__COMPILER_RUNTIME={__proto__:null,c:function(o){return J.H.useMemoCache(o)}},H.cache=function(o){return function(){return o.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(o,T,_){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var w=Ne({},o.props),G=o.key;if(T!=null)for(Y in T.key!==void 0&&(G=""+T.key),T)!Ge.call(T,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&T.ref===void 0||(w[Y]=T[Y]);var Y=arguments.length-2;if(Y===1)w.children=_;else if(1<Y){for(var te=Array(Y),Ue=0;Ue<Y;Ue++)te[Ue]=arguments[Ue+2];w.children=te}return Tt(o.type,G,w)},H.createContext=function(o){return o={$$typeof:W,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:B,_context:o},o},H.createElement=function(o,T,_){var w,G={},Y=null;if(T!=null)for(w in T.key!==void 0&&(Y=""+T.key),T)Ge.call(T,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(G[w]=T[w]);var te=arguments.length-2;if(te===1)G.children=_;else if(1<te){for(var Ue=Array(te),ye=0;ye<te;ye++)Ue[ye]=arguments[ye+2];G.children=Ue}if(o&&o.defaultProps)for(w in te=o.defaultProps,te)G[w]===void 0&&(G[w]=te[w]);return Tt(o,Y,G)},H.createRef=function(){return{current:null}},H.forwardRef=function(o){return{$$typeof:oe,render:o}},H.isValidElement=Et,H.lazy=function(o){return{$$typeof:ee,_payload:{_status:-1,_result:o},_init:U}},H.memo=function(o,T){return{$$typeof:E,type:o,compare:T===void 0?null:T}},H.startTransition=function(o){var T=J.T,_={};J.T=_;try{var w=o(),G=J.S;G!==null&&G(_,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(He,ne)}catch(Y){ne(Y)}finally{T!==null&&_.types!==null&&(T.types=_.types),J.T=T}},H.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},H.use=function(o){return J.H.use(o)},H.useActionState=function(o,T,_){return J.H.useActionState(o,T,_)},H.useCallback=function(o,T){return J.H.useCallback(o,T)},H.useContext=function(o){return J.H.useContext(o)},H.useDebugValue=function(){},H.useDeferredValue=function(o,T){return J.H.useDeferredValue(o,T)},H.useEffect=function(o,T){return J.H.useEffect(o,T)},H.useEffectEvent=function(o){return J.H.useEffectEvent(o)},H.useId=function(){return J.H.useId()},H.useImperativeHandle=function(o,T,_){return J.H.useImperativeHandle(o,T,_)},H.useInsertionEffect=function(o,T){return J.H.useInsertionEffect(o,T)},H.useLayoutEffect=function(o,T){return J.H.useLayoutEffect(o,T)},H.useMemo=function(o,T){return J.H.useMemo(o,T)},H.useOptimistic=function(o,T){return J.H.useOptimistic(o,T)},H.useReducer=function(o,T,_){return J.H.useReducer(o,T,_)},H.useRef=function(o){return J.H.useRef(o)},H.useState=function(o){return J.H.useState(o)},H.useSyncExternalStore=function(o,T,_){return J.H.useSyncExternalStore(o,T,_)},H.useTransition=function(){return J.H.useTransition()},H.version="19.2.4",H}var gf;function dr(){return gf||(gf=1,ir.exports=Wp()),ir.exports}var Jt=dr(),ur={exports:{}},Cn={},cr={exports:{}},rr={};var bf;function Fp(){return bf||(bf=1,(function(x){function Z(g,A){var U=g.length;g.push(A);e:for(;0<U;){var ne=U-1>>>1,re=g[ne];if(0<M(re,A))g[ne]=A,g[U]=re,U=ne;else break e}}function j(g){return g.length===0?null:g[0]}function m(g){if(g.length===0)return null;var A=g[0],U=g.pop();if(U!==A){g[0]=U;e:for(var ne=0,re=g.length,o=re>>>1;ne<o;){var T=2*(ne+1)-1,_=g[T],w=T+1,G=g[w];if(0>M(_,U))w<re&&0>M(G,_)?(g[ne]=G,g[w]=U,ne=w):(g[ne]=_,g[T]=U,ne=T);else if(w<re&&0>M(G,U))g[ne]=G,g[w]=U,ne=w;else break e}}return A}function M(g,A){var U=g.sortIndex-A.sortIndex;return U!==0?U:g.id-A.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var B=performance;x.unstable_now=function(){return B.now()}}else{var W=Date,oe=W.now();x.unstable_now=function(){return W.now()-oe}}var O=[],E=[],ee=1,N=null,me=3,Je=!1,je=!1,Ne=!1,Dt=!1,Ke=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,Me=typeof setImmediate<"u"?setImmediate:null;function ut(g){for(var A=j(E);A!==null;){if(A.callback===null)m(E);else if(A.startTime<=g)m(E),A.sortIndex=A.expirationTime,Z(O,A);else break;A=j(E)}}function Ct(g){if(Ne=!1,ut(g),!je)if(j(O)!==null)je=!0,He||(He=!0,Le());else{var A=j(E);A!==null&&yt(Ct,A.startTime-g)}}var He=!1,J=-1,Ge=5,Tt=-1;function Qa(){return Dt?!0:!(x.unstable_now()-Tt<Ge)}function Et(){if(Dt=!1,He){var g=x.unstable_now();Tt=g;var A=!0;try{e:{je=!1,Ne&&(Ne=!1,Kt(J),J=-1),Je=!0;var U=me;try{t:{for(ut(g),N=j(O);N!==null&&!(N.expirationTime>g&&Qa());){var ne=N.callback;if(typeof ne=="function"){N.callback=null,me=N.priorityLevel;var re=ne(N.expirationTime<=g);if(g=x.unstable_now(),typeof re=="function"){N.callback=re,ut(g),A=!0;break t}N===j(O)&&m(O),ut(g)}else m(O);N=j(O)}if(N!==null)A=!0;else{var o=j(E);o!==null&&yt(Ct,o.startTime-g),A=!1}}break e}finally{N=null,me=U,Je=!1}A=void 0}}finally{A?Le():He=!1}}}var Le;if(typeof Me=="function")Le=function(){Me(Et)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,wt=Ca.port2;Ca.port1.onmessage=Et,Le=function(){wt.postMessage(null)}}else Le=function(){Ke(Et,0)};function yt(g,A){J=Ke(function(){g(x.unstable_now())},A)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(g){g.callback=null},x.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<g?Math.floor(1e3/g):5},x.unstable_getCurrentPriorityLevel=function(){return me},x.unstable_next=function(g){switch(me){case 1:case 2:case 3:var A=3;break;default:A=me}var U=me;me=A;try{return g()}finally{me=U}},x.unstable_requestPaint=function(){Dt=!0},x.unstable_runWithPriority=function(g,A){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var U=me;me=g;try{return A()}finally{me=U}},x.unstable_scheduleCallback=function(g,A,U){var ne=x.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ne+U:ne):U=ne,g){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=U+re,g={id:ee++,callback:A,priorityLevel:g,startTime:U,expirationTime:re,sortIndex:-1},U>ne?(g.sortIndex=U,Z(E,g),j(O)===null&&g===j(E)&&(Ne?(Kt(J),J=-1):Ne=!0,yt(Ct,U-ne))):(g.sortIndex=re,Z(O,g),je||Je||(je=!0,He||(He=!0,Le()))),g},x.unstable_shouldYield=Qa,x.unstable_wrapCallback=function(g){var A=me;return function(){var U=me;me=A;try{return g.apply(this,arguments)}finally{me=U}}}})(rr)),rr}var Sf;function $p(){return Sf||(Sf=1,cr.exports=Fp()),cr.exports}var sr={exports:{}},qe={};var Cf;function Pp(){if(Cf)return qe;Cf=1;var x=dr();function Z(O){var E="https://react.dev/errors/"+O;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var ee=2;ee<arguments.length;ee++)E+="&args[]="+encodeURIComponent(arguments[ee])}return"Minified React error #"+O+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(){}var m={d:{f:j,r:function(){throw Error(Z(522))},D:j,C:j,L:j,m:j,X:j,S:j,M:j},p:0,findDOMNode:null},M=Symbol.for("react.portal");function B(O,E,ee){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:N==null?null:""+N,children:O,containerInfo:E,implementation:ee}}var W=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function oe(O,E){if(O==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,qe.createPortal=function(O,E){var ee=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(Z(299));return B(O,E,null,ee)},qe.flushSync=function(O){var E=W.T,ee=m.p;try{if(W.T=null,m.p=2,O)return O()}finally{W.T=E,m.p=ee,m.d.f()}},qe.preconnect=function(O,E){typeof O=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,m.d.C(O,E))},qe.prefetchDNS=function(O){typeof O=="string"&&m.d.D(O)},qe.preinit=function(O,E){if(typeof O=="string"&&E&&typeof E.as=="string"){var ee=E.as,N=oe(ee,E.crossOrigin),me=typeof E.integrity=="string"?E.integrity:void 0,Je=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;ee==="style"?m.d.S(O,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:N,integrity:me,fetchPriority:Je}):ee==="script"&&m.d.X(O,{crossOrigin:N,integrity:me,fetchPriority:Je,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},qe.preinitModule=function(O,E){if(typeof O=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var ee=oe(E.as,E.crossOrigin);m.d.M(O,{crossOrigin:ee,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&m.d.M(O)},qe.preload=function(O,E){if(typeof O=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var ee=E.as,N=oe(ee,E.crossOrigin);m.d.L(O,ee,{crossOrigin:N,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},qe.preloadModule=function(O,E){if(typeof O=="string")if(E){var ee=oe(E.as,E.crossOrigin);m.d.m(O,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:ee,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else m.d.m(O)},qe.requestFormReset=function(O){m.d.r(O)},qe.unstable_batchedUpdates=function(O,E){return O(E)},qe.useFormState=function(O,E,ee){return W.H.useFormState(O,E,ee)},qe.useFormStatus=function(){return W.H.useHostTransitionStatus()},qe.version="19.2.4",qe}var Tf;function ev(){if(Tf)return sr.exports;Tf=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(Z){console.error(Z)}}return x(),sr.exports=Pp(),sr.exports}var Ef;function tv(){if(Ef)return Cn;Ef=1;var x=$p(),Z=dr(),j=ev();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function B(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function W(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(B(e)!==e)throw Error(m(188))}function E(e){var t=e.alternate;if(!t){if(t=B(e),t===null)throw Error(m(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return O(n),e;if(i===l)return O(n),t;i=i.sibling}throw Error(m(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(m(189))}}if(a.alternate!==l)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?e:t}function ee(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ee(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,me=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),je=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),Me=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ct=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Qa=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Et&&e[Et]||e["@@iterator"],typeof e=="function"?e:null)}var Ca=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ca?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Ke:return"Profiler";case Dt:return"StrictMode";case Ct:return"Suspense";case He:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case je:return"Portal";case Me:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var yt=Array.isArray,g=Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},ne=[],re=-1;function o(e){return{current:e}}function T(e){0>re||(e.current=ne[re],ne[re]=null,re--)}function _(e,t){re++,ne[re]=e.current,e.current=t}var w=o(null),G=o(null),Y=o(null),te=o(null);function Ue(e,t){switch(_(Y,t),_(G,e),_(w,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jd(t),e=Hd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(w),_(w,e)}function ye(){T(w),T(G),T(Y)}function Ol(e){e.memoizedState!==null&&_(te,e);var t=w.current,a=Hd(t,e.type);t!==a&&(_(G,e),_(w,a))}function Tn(e){G.current===e&&(T(w),T(G)),te.current===e&&(T(te),hn._currentValue=U)}var Li,fr;function Ta(e){if(Li===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||"",fr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Li+e+fr}var Qi=!1;function Yi(e,t){if(!e||Qi)return"";Qi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(h){var v=h}Reflect.construct(e,[],S)}else{try{S.call()}catch(h){v=h}e.call(S.prototype)}}else{try{throw Error()}catch(h){v=h}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(h){if(h&&v&&typeof h.stack=="string")return[h.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var r=u.split(`
`),p=c.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===p.length)for(l=r.length-1,n=p.length-1;1<=l&&0<=n&&r[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==p[n]){var y=`
`+r[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=l&&0<=n);break}}}finally{Qi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Af(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Yi(e.type,!1);case 11:return Yi(e.type.render,!1);case 1:return Yi(e.type,!0);case 31:return Ta("Activity");default:return""}}function mr(e){try{var t="",a=null;do t+=Af(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ki=Object.prototype.hasOwnProperty,Xi=x.unstable_scheduleCallback,Zi=x.unstable_cancelCallback,Of=x.unstable_shouldYield,_f=x.unstable_requestPaint,We=x.unstable_now,Df=x.unstable_getCurrentPriorityLevel,pr=x.unstable_ImmediatePriority,vr=x.unstable_UserBlockingPriority,En=x.unstable_NormalPriority,wf=x.unstable_LowPriority,hr=x.unstable_IdlePriority,zf=x.log,Rf=x.unstable_setDisableYieldValue,_l=null,Fe=null;function Wt(e){if(typeof zf=="function"&&Rf(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(_l,e)}catch{}}var $e=Math.clz32?Math.clz32:Nf,Mf=Math.log,qf=Math.LN2;function Nf(e){return e>>>=0,e===0?32:31-(Mf(e)/qf|0)|0}var xn=256,An=262144,On=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _n(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ea(l):(u&=c,u!==0?n=Ea(u):a||(a=c&~e,a!==0&&(n=Ea(a))))):(c=l&~i,c!==0?n=Ea(c):u!==0?n=Ea(u):a||(a=l&~e,a!==0&&(n=Ea(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Uf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function Vi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bf(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(a=u&~a;0<a;){var y=31-$e(a),S=1<<y;c[y]=0,r[y]=-1;var v=p[y];if(v!==null)for(p[y]=null,y=0;y<v.length;y++){var h=v[y];h!==null&&(h.lane&=-536870913)}a&=~S}l!==0&&gr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function gr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-$e(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function br(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-$e(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Sr(e,t){var a=t&-t;return a=(a&42)!==0?1:Ii(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cr(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:rf(e.type))}function Tr(e,t){var a=A.p;try{return A.p=e,t()}finally{A.p=a}}var Ft=Math.random().toString(36).slice(2),_e="__reactFiber$"+Ft,Qe="__reactProps$"+Ft,Ya="__reactContainer$"+Ft,Ki="__reactEvents$"+Ft,jf="__reactListeners$"+Ft,Hf="__reactHandles$"+Ft,Er="__reactResources$"+Ft,zl="__reactMarker$"+Ft;function Wi(e){delete e[_e],delete e[Qe],delete e[Ki],delete e[jf],delete e[Hf]}function ka(e){var t=e[_e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[_e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zd(e);e!==null;){if(a=e[_e])return a;e=Zd(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[_e]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Za(e){var t=e[Er];return t||(t=e[Er]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ae(e){e[zl]=!0}var xr=new Set,Ar={};function xa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Ar[e]=t,e=0;e<t.length;e++)xr.add(t[e])}var Gf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Or={},_r={};function Lf(e){return ki.call(_r,e)?!0:ki.call(Or,e)?!1:Gf.test(e)?_r[e]=!0:(Or[e]=!0,!1)}function Dn(e,t,a){if(Lf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function wn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function zt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qf(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){if(!e._valueTracker){var t=Dr(e)?"checked":"value";e._valueTracker=Qf(e,t,""+e[t])}}function wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Dr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yf=/[\n"\\]/g;function rt(e){return e.replace(Yf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $i(e,t,a,l,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Pi(e,u,ct(t)):a!=null?Pi(e,u,ct(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function zr(e,t,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Fi(e);return}a=a!=null?""+ct(a):"",t=t!=null?""+ct(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Fi(e)}function Pi(e,t,a){t==="number"&&zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ia(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ct(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Rr(e,t,a){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ct(a):""}function Mr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(m(92));if(yt(l)){if(1<l.length)throw Error(m(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ct(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Fi(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var kf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||kf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Nr(e,t,a){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&qr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&qr(e,i,t[i])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(e){return Zf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var tu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Wa=null;function Ur(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[Qe]||null;e:switch(e=t.stateNode,t.type){case"input":if($i(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Qe]||null;if(!n)throw Error(m(90));$i(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&wr(l)}break e;case"textarea":Rr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ia(e,!!a.multiple,t,!1)}}}var lu=!1;function Br(e,t,a){if(lu)return e(t,a);lu=!0;try{var l=e(t);return l}finally{if(lu=!1,(Ka!==null||Wa!==null)&&(gi(),Ka&&(t=Ka,e=Wa,Wa=Ka=null,Ur(t),e)))for(t=0;t<e.length;t++)Ur(e[t])}}function Ml(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Qe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(m(231,t,typeof a));return a}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Mt)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){nu=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{nu=!1}var $t=null,iu=null,Mn=null;function jr(){if(Mn)return Mn;var e,t=iu,a=t.length,l,n="value"in $t?$t.value:$t.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Mn=n.slice(e,1<l?1-l:void 0)}function qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Hr(){return!1}function Ye(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nn:Hr,this.isPropagationStopped=Hr,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Un=Ye(Aa),Nl=N({},Aa,{view:0,detail:0}),Vf=Ye(Nl),uu,cu,Ul,Bn=N({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(uu=e.screenX-Ul.screenX,cu=e.screenY-Ul.screenY):cu=uu=0,Ul=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),Gr=Ye(Bn),If=N({},Bn,{dataTransfer:0}),Jf=Ye(If),Kf=N({},Nl,{relatedTarget:0}),ru=Ye(Kf),Wf=N({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=Ye(Wf),$f=N({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Ye($f),em=N({},Aa,{data:0}),Lr=Ye(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function su(){return nm}var im=N({},Nl,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Ye(im),cm=N({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qr=Ye(cm),rm=N({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),sm=Ye(rm),om=N({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=Ye(om),fm=N({},Bn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Ye(fm),pm=N({},Aa,{newState:0,oldState:0}),vm=Ye(pm),hm=[9,13,27,32],ou=Mt&&"CompositionEvent"in window,Bl=null;Mt&&"documentMode"in document&&(Bl=document.documentMode);var ym=Mt&&"TextEvent"in window&&!Bl,Yr=Mt&&(!ou||Bl&&8<Bl&&11>=Bl),kr=" ",Xr=!1;function Zr(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function gm(e,t){switch(e){case"compositionend":return Vr(t);case"keypress":return t.which!==32?null:(Xr=!0,kr);case"textInput":return e=t.data,e===kr&&Xr?null:e;default:return null}}function bm(e,t){if(Fa)return e==="compositionend"||!ou&&Zr(e,t)?(e=jr(),Mn=iu=$t=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yr&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function Jr(e,t,a,l){Ka?Wa?Wa.push(l):Wa=[l]:Ka=l,t=Ai(t,"onChange"),0<t.length&&(a=new Un("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var jl=null,Hl=null;function Cm(e){Rd(e,0)}function jn(e){var t=Rl(e);if(wr(t))return e}function Kr(e,t){if(e==="change")return t}var Wr=!1;if(Mt){var du;if(Mt){var fu="oninput"in document;if(!fu){var Fr=document.createElement("div");Fr.setAttribute("oninput","return;"),fu=typeof Fr.oninput=="function"}du=fu}else du=!1;Wr=du&&(!document.documentMode||9<document.documentMode)}function $r(){jl&&(jl.detachEvent("onpropertychange",Pr),Hl=jl=null)}function Pr(e){if(e.propertyName==="value"&&jn(Hl)){var t=[];Jr(t,Hl,e,au(e)),Br(Cm,t)}}function Tm(e,t,a){e==="focusin"?($r(),jl=t,Hl=a,jl.attachEvent("onpropertychange",Pr)):e==="focusout"&&$r()}function Em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jn(Hl)}function xm(e,t){if(e==="click")return jn(t)}function Am(e,t){if(e==="input"||e==="change")return jn(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Om;function Gl(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!ki.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ts(e,t){var a=es(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=es(a)}}function as(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?as(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ls(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=zn(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _m=Mt&&"documentMode"in document&&11>=document.documentMode,$a=null,pu=null,Ll=null,vu=!1;function ns(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||$a==null||$a!==zn(l)||(l=$a,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&Gl(Ll,l)||(Ll=l,l=Ai(pu,"onSelect"),0<l.length&&(t=new Un("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=$a)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},hu={},is={};Mt&&(is=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function _a(e){if(hu[e])return hu[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in is)return hu[e]=t[a];return e}var us=_a("animationend"),cs=_a("animationiteration"),rs=_a("animationstart"),Dm=_a("transitionrun"),wm=_a("transitionstart"),zm=_a("transitioncancel"),ss=_a("transitionend"),os=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function gt(e,t){os.set(e,t),xa(t,[e])}var Hn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},st=[],el=0,gu=0;function Gn(){for(var e=el,t=gu=el=0;t<e;){var a=st[t];st[t++]=null;var l=st[t];st[t++]=null;var n=st[t];st[t++]=null;var i=st[t];if(st[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&ds(a,n,i)}}function Ln(e,t,a,l){st[el++]=e,st[el++]=t,st[el++]=a,st[el++]=l,gu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bu(e,t,a,l){return Ln(e,t,a,l),Qn(e)}function Da(e,t){return Ln(e,null,null,t),Qn(e)}function ds(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-$e(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Qn(e){if(50<sn)throw sn=0,Dc=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function Rm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Rm(e,t,a,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Su(e)&&(u=1);else if(typeof e=="string")u=Bp(e,a,w.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,a,t,n),e.elementType=Tt,e.lanes=i,e;case Ne:return wa(a.children,n,i,t);case Dt:u=8,n|=24;break;case Ke:return e=et(12,a,t,n|2),e.elementType=Ke,e.lanes=i,e;case Ct:return e=et(13,a,t,n),e.elementType=Ct,e.lanes=i,e;case He:return e=et(19,a,t,n),e.elementType=He,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:u=10;break e;case Kt:u=9;break e;case ut:u=11;break e;case J:u=14;break e;case Ge:u=16,l=null;break e}u=29,a=Error(m(130,e===null?"null":typeof e,"")),l=null}return t=et(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function wa(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function Cu(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function ms(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Tu(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ps=new WeakMap;function ot(e,t){if(typeof e=="object"&&e!==null){var a=ps.get(e);return a!==void 0?a:(t={value:e,source:t,stack:mr(t)},ps.set(e,t),t)}return{value:e,source:t,stack:mr(t)}}var al=[],ll=0,kn=null,Ql=0,dt=[],ft=0,Pt=null,xt=1,At="";function Nt(e,t){al[ll++]=Ql,al[ll++]=kn,kn=e,Ql=t}function vs(e,t,a){dt[ft++]=xt,dt[ft++]=At,dt[ft++]=Pt,Pt=e;var l=xt;e=At;var n=32-$e(l)-1;l&=~(1<<n),a+=1;var i=32-$e(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,xt=1<<32-$e(t)+n|a<<n|l,At=i+e}else xt=1<<i|a<<n|l,At=e}function Eu(e){e.return!==null&&(Nt(e,1),vs(e,1,0))}function xu(e){for(;e===kn;)kn=al[--ll],al[ll]=null,Ql=al[--ll],al[ll]=null;for(;e===Pt;)Pt=dt[--ft],dt[ft]=null,At=dt[--ft],dt[ft]=null,xt=dt[--ft],dt[ft]=null}function hs(e,t){dt[ft++]=xt,dt[ft++]=At,dt[ft++]=Pt,xt=t.id,At=t.overflow,Pt=e}var De=null,de=null,K=!1,ea=null,mt=!1,Au=Error(m(519));function ta(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(ot(t,e)),Au}function ys(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[_e]=e,t[Qe]=l,a){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(a=0;a<dn.length;a++)X(dn[a],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),zr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),Mr(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Ud(t.textContent,a)?(l.popover!=null&&(X("beforetoggle",t),X("toggle",t)),l.onScroll!=null&&X("scroll",t),l.onScrollEnd!=null&&X("scrollend",t),l.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||ta(e,!0)}function gs(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:De=De.return}}function nl(e){if(e!==De)return!1;if(!K)return gs(e),K=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kc(e.type,e.memoizedProps)),a=!a),a&&de&&ta(e),gs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=Xd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));de=Xd(e)}else t===27?(t=de,va(e.type)?(e=Jc,Jc=null,de=e):de=t):de=De?vt(e.stateNode.nextSibling):null;return!0}function za(){de=De=null,K=!1}function Ou(){var e=ea;return e!==null&&(Ve===null?Ve=e:Ve.push.apply(Ve,e),ea=null),e}function Yl(e){ea===null?ea=[e]:ea.push(e)}var _u=o(null),Ra=null,Ut=null;function aa(e,t,a){_(_u,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=_u.current,T(_u)}function Du(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function wu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var r=0;r<t.length;r++)if(c.context===t[r]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Du(i.return,a,e),l||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Du(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function il(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=n.type;Pe(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===te.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(hn):e=[hn])}n=n.return}e!==null&&wu(t,e,a,l),t.flags|=262144}function Xn(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Ra=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function we(e){return bs(Ra,e)}function Zn(e,t){return Ra===null&&Ma(e),bs(e,t)}function bs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ut===null){if(e===null)throw Error(m(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return a}var Mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},qm=x.unstable_scheduleCallback,Nm=x.unstable_NormalPriority,Se={$$typeof:Me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Mm,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&qm(Nm,function(){e.controller.abort()})}var Xl=null,Ru=0,ul=0,cl=null;function Um(e,t){if(Xl===null){var a=Xl=[];Ru=0,ul=Nc(),cl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ru++,t.then(Ss,Ss),t}function Ss(){if(--Ru===0&&Xl!==null){cl!==null&&(cl.status="fulfilled");var e=Xl;Xl=null,ul=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Cs=g.S;g.S=function(e,t){id=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Um(e,t),Cs!==null&&Cs(e,t)};var qa=o(null);function Mu(){var e=qa.current;return e!==null?e:se.pooledCache}function Vn(e,t){t===null?_(qa,qa.current):_(qa,t.pool)}function Ts(){var e=Mu();return e===null?null:{parent:Se._currentValue,pool:e}}var rl=Error(m(460)),qu=Error(m(474)),In=Error(m(542)),Jn={then:function(){}};function Es(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rt,Rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e}throw Ua=t,rl}}function Na(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,rl):a}}var Ua=null;function As(){if(Ua===null)throw Error(m(459));var e=Ua;return Ua=null,e}function Os(e){if(e===rl||e===In)throw Error(m(483))}var sl=null,Zl=0;function Kn(e){var t=Zl;return Zl+=1,sl===null&&(sl=[]),xs(sl,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wn(e,t){throw t.$$typeof===me?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _s(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function a(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function l(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function n(d,s){return d=qt(d,s),d.index=0,d.sibling=null,d}function i(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=67108866,s):f):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function u(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function c(d,s,f,b){return s===null||s.tag!==6?(s=Cu(f,d.mode,b),s.return=d,s):(s=n(s,f),s.return=d,s)}function r(d,s,f,b){var R=f.type;return R===Ne?y(d,s,f.props.children,b,f.key):s!==null&&(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ge&&Na(R)===s.type)?(s=n(s,f.props),Vl(s,f),s.return=d,s):(s=Yn(f.type,f.key,f.props,null,d.mode,b),Vl(s,f),s.return=d,s)}function p(d,s,f,b){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Tu(f,d.mode,b),s.return=d,s):(s=n(s,f.children||[]),s.return=d,s)}function y(d,s,f,b,R){return s===null||s.tag!==7?(s=wa(f,d.mode,b,R),s.return=d,s):(s=n(s,f),s.return=d,s)}function S(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Cu(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Je:return f=Yn(s.type,s.key,s.props,null,d.mode,f),Vl(f,s),f.return=d,f;case je:return s=Tu(s,d.mode,f),s.return=d,s;case Ge:return s=Na(s),S(d,s,f)}if(yt(s)||Le(s))return s=wa(s,d.mode,f,null),s.return=d,s;if(typeof s.then=="function")return S(d,Kn(s),f);if(s.$$typeof===Me)return S(d,Zn(d,s),f);Wn(d,s)}return null}function v(d,s,f,b){var R=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return R!==null?null:c(d,s,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return f.key===R?r(d,s,f,b):null;case je:return f.key===R?p(d,s,f,b):null;case Ge:return f=Na(f),v(d,s,f,b)}if(yt(f)||Le(f))return R!==null?null:y(d,s,f,b,null);if(typeof f.then=="function")return v(d,s,Kn(f),b);if(f.$$typeof===Me)return v(d,s,Zn(d,f),b);Wn(d,f)}return null}function h(d,s,f,b,R){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(f)||null,c(s,d,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Je:return d=d.get(b.key===null?f:b.key)||null,r(s,d,b,R);case je:return d=d.get(b.key===null?f:b.key)||null,p(s,d,b,R);case Ge:return b=Na(b),h(d,s,f,b,R)}if(yt(b)||Le(b))return d=d.get(f)||null,y(s,d,b,R,null);if(typeof b.then=="function")return h(d,s,f,Kn(b),R);if(b.$$typeof===Me)return h(d,s,f,Zn(s,b),R);Wn(s,b)}return null}function D(d,s,f,b){for(var R=null,F=null,z=s,Q=s=0,I=null;z!==null&&Q<f.length;Q++){z.index>Q?(I=z,z=null):I=z.sibling;var $=v(d,z,f[Q],b);if($===null){z===null&&(z=I);break}e&&z&&$.alternate===null&&t(d,z),s=i($,s,Q),F===null?R=$:F.sibling=$,F=$,z=I}if(Q===f.length)return a(d,z),K&&Nt(d,Q),R;if(z===null){for(;Q<f.length;Q++)z=S(d,f[Q],b),z!==null&&(s=i(z,s,Q),F===null?R=z:F.sibling=z,F=z);return K&&Nt(d,Q),R}for(z=l(z);Q<f.length;Q++)I=h(z,d,Q,f[Q],b),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?Q:I.key),s=i(I,s,Q),F===null?R=I:F.sibling=I,F=I);return e&&z.forEach(function(Sa){return t(d,Sa)}),K&&Nt(d,Q),R}function q(d,s,f,b){if(f==null)throw Error(m(151));for(var R=null,F=null,z=s,Q=s=0,I=null,$=f.next();z!==null&&!$.done;Q++,$=f.next()){z.index>Q?(I=z,z=null):I=z.sibling;var Sa=v(d,z,$.value,b);if(Sa===null){z===null&&(z=I);break}e&&z&&Sa.alternate===null&&t(d,z),s=i(Sa,s,Q),F===null?R=Sa:F.sibling=Sa,F=Sa,z=I}if($.done)return a(d,z),K&&Nt(d,Q),R;if(z===null){for(;!$.done;Q++,$=f.next())$=S(d,$.value,b),$!==null&&(s=i($,s,Q),F===null?R=$:F.sibling=$,F=$);return K&&Nt(d,Q),R}for(z=l(z);!$.done;Q++,$=f.next())$=h(z,d,Q,$.value,b),$!==null&&(e&&$.alternate!==null&&z.delete($.key===null?Q:$.key),s=i($,s,Q),F===null?R=$:F.sibling=$,F=$);return e&&z.forEach(function(Ip){return t(d,Ip)}),K&&Nt(d,Q),R}function ce(d,s,f,b){if(typeof f=="object"&&f!==null&&f.type===Ne&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:e:{for(var R=f.key;s!==null;){if(s.key===R){if(R=f.type,R===Ne){if(s.tag===7){a(d,s.sibling),b=n(s,f.props.children),b.return=d,d=b;break e}}else if(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ge&&Na(R)===s.type){a(d,s.sibling),b=n(s,f.props),Vl(b,f),b.return=d,d=b;break e}a(d,s);break}else t(d,s);s=s.sibling}f.type===Ne?(b=wa(f.props.children,d.mode,b,f.key),b.return=d,d=b):(b=Yn(f.type,f.key,f.props,null,d.mode,b),Vl(b,f),b.return=d,d=b)}return u(d);case je:e:{for(R=f.key;s!==null;){if(s.key===R)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){a(d,s.sibling),b=n(s,f.children||[]),b.return=d,d=b;break e}else{a(d,s);break}else t(d,s);s=s.sibling}b=Tu(f,d.mode,b),b.return=d,d=b}return u(d);case Ge:return f=Na(f),ce(d,s,f,b)}if(yt(f))return D(d,s,f,b);if(Le(f)){if(R=Le(f),typeof R!="function")throw Error(m(150));return f=R.call(f),q(d,s,f,b)}if(typeof f.then=="function")return ce(d,s,Kn(f),b);if(f.$$typeof===Me)return ce(d,s,Zn(d,f),b);Wn(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,s!==null&&s.tag===6?(a(d,s.sibling),b=n(s,f),b.return=d,d=b):(a(d,s),b=Cu(f,d.mode,b),b.return=d,d=b),u(d)):a(d,s)}return function(d,s,f,b){try{Zl=0;var R=ce(d,s,f,b);return sl=null,R}catch(z){if(z===rl||z===In)throw z;var F=et(29,z,null,d.mode);return F.lanes=b,F.return=d,F}}}var Ba=_s(!0),Ds=_s(!1),la=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(P&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Qn(e),ds(e,null,a),t}return Ln(e,l,t,a),Qn(e)}function Il(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,br(e,a)}}function Bu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ju=!1;function Jl(){if(ju){var e=cl;if(e!==null)throw e}}function Kl(e,t,a,l){ju=!1;var n=e.updateQueue;la=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var r=c,p=r.next;r.next=null,u===null?i=p:u.next=p,u=r;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=p:c.next=p,y.lastBaseUpdate=r))}if(i!==null){var S=n.baseState;u=0,y=p=r=null,c=i;do{var v=c.lane&-536870913,h=v!==c.lane;if(h?(V&v)===v:(l&v)===v){v!==0&&v===ul&&(ju=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var D=e,q=c;v=t;var ce=a;switch(q.tag){case 1:if(D=q.payload,typeof D=="function"){S=D.call(ce,S,v);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=q.payload,v=typeof D=="function"?D.call(ce,S,v):D,v==null)break e;S=N({},S,v);break e;case 2:la=!0}}v=c.callback,v!==null&&(e.flags|=64,h&&(e.flags|=8192),h=n.callbacks,h===null?n.callbacks=[v]:h.push(v))}else h={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(p=y=h,r=S):y=y.next=h,u|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;h=c,c=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);y===null&&(r=S),n.baseState=r,n.firstBaseUpdate=p,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),oa|=u,e.lanes=u,e.memoizedState=S}}function ws(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function zs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ws(a[e],t)}var ol=o(null),Fn=o(0);function Rs(e,t){e=Zt,_(Fn,e),_(ol,t),Zt=e|t.baseLanes}function Hu(){_(Fn,Zt),_(ol,ol.current)}function Gu(){Zt=Fn.current,T(ol),T(Fn)}var tt=o(null),pt=null;function ua(e){var t=e.alternate;_(ge,ge.current&1),_(tt,e),pt===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(pt=e)}function Lu(e){_(ge,ge.current),_(tt,e),pt===null&&(pt=e)}function Ms(e){e.tag===22?(_(ge,ge.current),_(tt,e),pt===null&&(pt=e)):ca()}function ca(){_(ge,ge.current),_(tt,tt.current)}function at(e){T(tt),pt===e&&(pt=null),T(ge)}var ge=o(0);function $n(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vc(a)||Ic(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jt=0,L=null,ie=null,Ce=null,Pn=!1,dl=!1,ja=!1,ei=0,Wl=0,fl=null,jm=0;function ve(){throw Error(m(321))}function Qu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function Yu(e,t,a,l,n,i){return jt=i,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=e===null||e.memoizedState===null?ho:lc,ja=!1,i=a(l,n),ja=!1,dl&&(i=Ns(t,a,l,n)),qs(e),i}function qs(e){g.H=Pl;var t=ie!==null&&ie.next!==null;if(jt=0,Ce=ie=L=null,Pn=!1,Wl=0,fl=null,t)throw Error(m(300));e===null||Te||(e=e.dependencies,e!==null&&Xn(e)&&(Te=!0))}function Ns(e,t,a,l){L=e;var n=0;do{if(dl&&(fl=null),Wl=0,dl=!1,25<=n)throw Error(m(301));if(n+=1,Ce=ie=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}g.H=yo,i=t(a,l)}while(dl);return i}function Hm(){var e=g.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(ie!==null?ie.memoizedState:null)!==e&&(L.flags|=1024),t}function ku(){var e=ei!==0;return ei=0,e}function Xu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zu(e){if(Pn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pn=!1}jt=0,Ce=ie=L=null,dl=!1,Wl=ei=0,fl=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?L.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function be(){if(ie===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=Ce===null?L.memoizedState:Ce.next;if(t!==null)Ce=t,ie=e;else{if(e===null)throw L.alternate===null?Error(m(467)):Error(m(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},Ce===null?L.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Wl;return Wl+=1,fl===null&&(fl=[]),e=xs(fl,e,t),t=L,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?ho:lc),e}function ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===Me)return we(e)}throw Error(m(438,String(e)))}function Vu(e){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=L.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ti(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Qa;return t.index++,a}function Ht(e,t){return typeof t=="function"?t(e):t}function li(e){var t=be();return Iu(t,ie,e)}function Iu(e,t,a){var l=e.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,r=null,p=t,y=!1;do{var S=p.lane&-536870913;if(S!==p.lane?(V&S)===S:(jt&S)===S){var v=p.revertLane;if(v===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===ul&&(y=!0);else if((jt&v)===v){p=p.next,v===ul&&(y=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(c=r=S,u=i):r=r.next=S,L.lanes|=v,oa|=v;S=p.action,ja&&a(i,S),i=p.hasEagerState?p.eagerState:a(i,S)}else v={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(c=r=v,u=i):r=r.next=v,L.lanes|=S,oa|=S;p=p.next}while(p!==null&&p!==t);if(r===null?u=i:r.next=c,!Pe(i,e.memoizedState)&&(Te=!0,y&&(a=cl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ju(e){var t=be(),a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Pe(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Us(e,t,a){var l=L,n=be(),i=K;if(i){if(a===void 0)throw Error(m(407));a=a()}else a=t();var u=!Pe((ie||n).memoizedState,a);if(u&&(n.memoizedState=a,Te=!0),n=n.queue,Fu(Hs.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Ce!==null&&Ce.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},js.bind(null,l,n,a,t),null),se===null)throw Error(m(349));i||(jt&127)!==0||Bs(l,t,a)}return a}function Bs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=ti(),L.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function js(e,t,a,l){t.value=a,t.getSnapshot=l,Gs(t)&&Ls(e)}function Hs(e,t,a){return a(function(){Gs(t)&&Ls(e)})}function Gs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function Ls(e){var t=Da(e,2);t!==null&&Ie(t,e,2)}function Ku(e){var t=Be();if(typeof e=="function"){var a=e;if(e=a(),ja){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function Qs(e,t,a,l){return e.baseState=a,Iu(e,ie,typeof l=="function"?l:Ht)}function Gm(e,t,a,l,n){if(ui(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};g.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ys(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ys(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=g.T,u={};g.T=u;try{var c=a(n,l),r=g.S;r!==null&&r(u,c),ks(e,t,c)}catch(p){Wu(e,t,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),g.T=i}}else try{i=a(n,l),ks(e,t,i)}catch(p){Wu(e,t,p)}}function ks(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Xs(e,t,l)},function(l){return Wu(e,t,l)}):Xs(e,t,a)}function Xs(e,t,a){t.status="fulfilled",t.value=a,Zs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ys(e,a)))}function Wu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Zs(t),t=t.next;while(t!==l)}e.action=null}function Zs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vs(e,t){return t}function Is(e,t){if(K){var a=se.formState;if(a!==null){e:{var l=L;if(K){if(de){t:{for(var n=de,i=mt;n.nodeType!==8;){if(!i){n=null;break t}if(n=vt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){de=vt(n.nextSibling),l=n.data==="F!";break e}}ta(l)}l=!1}l&&(t=a[0])}}return a=Be(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:t},a.queue=l,a=mo.bind(null,L,l),l.dispatch=a,l=Ku(!1),i=ac.bind(null,L,!1,l.queue),l=Be(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Gm.bind(null,L,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Js(e){var t=be();return Ks(t,ie,e)}function Ks(e,t,a){if(t=Iu(e,t,Vs)[0],e=li(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Fl(t)}catch(u){throw u===rl?In:u}else l=t;t=be();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(L.flags|=2048,ml(9,{destroy:void 0},Lm.bind(null,n,a),null)),[l,i,e]}function Lm(e,t){e.action=t}function Ws(e){var t=be(),a=ie;if(a!==null)return Ks(t,a,e);be(),t=t.memoizedState,a=be();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=L.updateQueue,t===null&&(t=ti(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Fs(){return be().memoizedState}function ni(e,t,a,l){var n=Be();L.flags|=e,n.memoizedState=ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function ii(e,t,a,l){var n=be();l=l===void 0?null:l;var i=n.memoizedState.inst;ie!==null&&l!==null&&Qu(l,ie.memoizedState.deps)?n.memoizedState=ml(t,i,a,l):(L.flags|=e,n.memoizedState=ml(1|t,i,a,l))}function $s(e,t){ni(8390656,8,e,t)}function Fu(e,t){ii(2048,8,e,t)}function Qm(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=ti(),L.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ps(e){var t=be().memoizedState;return Qm({ref:t,nextImpl:e}),function(){if((P&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function eo(e,t){return ii(4,2,e,t)}function to(e,t){return ii(4,4,e,t)}function ao(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lo(e,t,a){a=a!=null?a.concat([e]):null,ii(4,4,ao.bind(null,t,e),a)}function $u(){}function no(e,t){var a=be();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Qu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function io(e,t){var a=be();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Qu(t,l[1]))return l[0];if(l=e(),ja){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l}function Pu(e,t,a){return a===void 0||(jt&1073741824)!==0&&(V&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=cd(),L.lanes|=e,oa|=e,a)}function uo(e,t,a,l){return Pe(a,t)?a:ol.current!==null?(e=Pu(e,a,l),Pe(e,t)||(Te=!0),e):(jt&42)===0||(jt&1073741824)!==0&&(V&261930)===0?(Te=!0,e.memoizedState=a):(e=cd(),L.lanes|=e,oa|=e,t)}function co(e,t,a,l,n){var i=A.p;A.p=i!==0&&8>i?i:8;var u=g.T,c={};g.T=c,ac(e,!1,t,a);try{var r=n(),p=g.S;if(p!==null&&p(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var y=Bm(r,l);$l(e,t,y,it(e))}else $l(e,t,l,it(e))}catch(S){$l(e,t,{then:function(){},status:"rejected",reason:S},it())}finally{A.p=i,u!==null&&c.types!==null&&(u.types=c.types),g.T=u}}function Ym(){}function ec(e,t,a,l){if(e.tag!==5)throw Error(m(476));var n=ro(e).queue;co(e,n,t,U,a===null?Ym:function(){return so(e),a(l)})}function ro(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:U},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function so(e){var t=ro(e);t.next===null&&(t=e.alternate.memoizedState),$l(e,t.next.queue,{},it())}function tc(){return we(hn)}function oo(){return be().memoizedState}function fo(){return be().memoizedState}function km(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var l=ia(t,e,a);l!==null&&(Ie(l,t,a),Il(l,t,a)),t={cache:zu()},e.payload=t;return}t=t.return}}function Xm(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ui(e)?po(t,a):(a=bu(e,t,a,l),a!==null&&(Ie(a,e,l),vo(a,t,l)))}function mo(e,t,a){var l=it();$l(e,t,a,l)}function $l(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ui(e))po(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,Pe(c,u))return Ln(e,t,n,0),se===null&&Gn(),!1}catch{}if(a=bu(e,t,n,l),a!==null)return Ie(a,e,l),vo(a,t,l),!0}return!1}function ac(e,t,a,l){if(l={lane:2,revertLane:Nc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ui(e)){if(t)throw Error(m(479))}else t=bu(e,a,l,2),t!==null&&Ie(t,e,2)}function ui(e){var t=e.alternate;return e===L||t!==null&&t===L}function po(e,t){dl=Pn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function vo(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,br(e,a)}}var Pl={readContext:we,use:ai,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};Pl.useEffectEvent=ve;var ho={readContext:we,use:ai,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:we,useEffect:$s,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ni(4194308,4,ao.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var a=Be();t=t===void 0?null:t;var l=e();if(ja){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Be();if(a!==void 0){var n=a(t);if(ja){Wt(!0);try{a(t)}finally{Wt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Xm.bind(null,L,e),[l.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:function(e){e=Ku(e);var t=e.queue,a=mo.bind(null,L,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,t){var a=Be();return Pu(a,e,t)},useTransition:function(){var e=Ku(!1);return e=co.bind(null,L,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=L,n=Be();if(K){if(a===void 0)throw Error(m(407));a=a()}else{if(a=t(),se===null)throw Error(m(349));(V&127)!==0||Bs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,$s(Hs.bind(null,l,i,e),[e]),l.flags|=2048,ml(9,{destroy:void 0},js.bind(null,l,i,a,t),null),a},useId:function(){var e=Be(),t=se.identifierPrefix;if(K){var a=At,l=xt;a=(l&~(1<<32-$e(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ei++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=jm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:tc,useFormState:Is,useActionState:Is,useOptimistic:function(e){var t=Be();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ac.bind(null,L,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vu,useCacheRefresh:function(){return Be().memoizedState=km.bind(null,L)},useEffectEvent:function(e){var t=Be(),a={impl:e};return t.memoizedState=a,function(){if((P&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}},lc={readContext:we,use:ai,useCallback:no,useContext:we,useEffect:Fu,useImperativeHandle:lo,useInsertionEffect:eo,useLayoutEffect:to,useMemo:io,useReducer:li,useRef:Fs,useState:function(){return li(Ht)},useDebugValue:$u,useDeferredValue:function(e,t){var a=be();return uo(a,ie.memoizedState,e,t)},useTransition:function(){var e=li(Ht)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Us,useId:oo,useHostTransitionStatus:tc,useFormState:Js,useActionState:Js,useOptimistic:function(e,t){var a=be();return Qs(a,ie,e,t)},useMemoCache:Vu,useCacheRefresh:fo};lc.useEffectEvent=Ps;var yo={readContext:we,use:ai,useCallback:no,useContext:we,useEffect:Fu,useImperativeHandle:lo,useInsertionEffect:eo,useLayoutEffect:to,useMemo:io,useReducer:Ju,useRef:Fs,useState:function(){return Ju(Ht)},useDebugValue:$u,useDeferredValue:function(e,t){var a=be();return ie===null?Pu(a,e,t):uo(a,ie.memoizedState,e,t)},useTransition:function(){var e=Ju(Ht)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Us,useId:oo,useHostTransitionStatus:tc,useFormState:Ws,useActionState:Ws,useOptimistic:function(e,t){var a=be();return ie!==null?Qs(a,ie,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:fo};yo.useEffectEvent=Ps;function nc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ic={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Ie(t,e,l),Il(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Ie(t,e,l),Il(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=na(a);l.tag=2,t!=null&&(l.callback=t),t=ia(e,l,a),t!==null&&(Ie(t,e,a),Il(t,e,a))}};function go(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Gl(a,l)||!Gl(n,i):!0}function bo(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ic.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function So(e){Hn(e)}function Co(e){console.error(e)}function To(e){Hn(e)}function ci(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Eo(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){ci(e,t)},a}function xo(e){return e=na(e),e.tag=3,e}function Ao(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Eo(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Eo(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Zm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&il(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?bi():a.alternate===null&&he===0&&(he=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Rc(e,l,n)),!1;case 22:return a.flags|=65536,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Rc(e,l,n)),!1}throw Error(m(435,a.tag))}return Rc(e,l,n),bi(),!1}if(K)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Au&&(e=Error(m(422),{cause:l}),Yl(ot(e,a)))):(l!==Au&&(t=Error(m(423),{cause:l}),Yl(ot(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ot(l,a),n=uc(e.stateNode,l,n),Bu(e,n),he!==4&&(he=2)),!1;var i=Error(m(520),{cause:l});if(i=ot(i,a),rn===null?rn=[i]:rn.push(i),he!==4&&(he=2),t===null)return!0;l=ot(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=uc(a.stateNode,l,e),Bu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=xo(n),Ao(n,e,a,l),Bu(a,n),!1}a=a.return}while(a!==null);return!1}var cc=Error(m(461)),Te=!1;function ze(e,t,a,l){t.child=e===null?Ds(t,null,a,l):Ba(t,e.child,a,l)}function Oo(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ma(t),l=Yu(e,t,a,u,i,n),c=ku(),e!==null&&!Te?(Xu(e,t,n),Gt(e,t,n)):(K&&c&&Eu(t),t.flags|=1,ze(e,t,l,n),t.child)}function _o(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Do(e,t,i,l,n)):(e=Yn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!vc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Gl,a(u,l)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Do(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Gl(i,l)&&e.ref===t.ref)if(Te=!1,t.pendingProps=l=i,vc(e,n))(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return rc(e,t,a,l,n)}function wo(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return zo(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(t,i!==null?i.cachePool:null),i!==null?Rs(t,i):Hu(),Ms(t);else return l=t.lanes=536870912,zo(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Vn(t,i.cachePool),Rs(t,i),ca(),t.memoizedState=null):(e!==null&&Vn(t,null),Hu(),ca());return ze(e,t,n,a),t.child}function en(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zo(e,t,a,l,n){var i=Mu();return i=i===null?null:{parent:Se._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Vn(t,null),Hu(),Ms(t),e!==null&&il(e,t,l,!0),t.childLanes=n,null}function ri(e,t){return t=oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ro(e,t,a){return Ba(t,e.child,null,a),e=ri(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(K){if(l.mode==="hidden")return e=ri(t,l),t.lanes=536870912,en(null,e);if(Lu(t),(e=de)?(e=kd(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:xt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=ms(e),a.return=t,t.child=a,De=t,de=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return ri(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Lu(t),n)if(t.flags&256)t.flags&=-257,t=Ro(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Te||il(e,t,a,!1),n=(a&e.childLanes)!==0,Te||n){if(l=se,l!==null&&(u=Sr(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Da(e,u),Ie(l,e,u),cc;bi(),t=Ro(e,t,a)}else e=i.treeContext,de=vt(u.nextSibling),De=t,K=!0,ea=null,mt=!1,e!==null&&hs(t,e),t=ri(t,l),t.flags|=4096;return t}return e=qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function rc(e,t,a,l,n){return Ma(t),a=Yu(e,t,a,l,void 0,n),l=ku(),e!==null&&!Te?(Xu(e,t,n),Gt(e,t,n)):(K&&l&&Eu(t),t.flags|=1,ze(e,t,a,n),t.child)}function Mo(e,t,a,l,n,i){return Ma(t),t.updateQueue=null,a=Ns(t,l,a,n),qs(e),l=ku(),e!==null&&!Te?(Xu(e,t,i),Gt(e,t,i)):(K&&l&&Eu(t),t.flags|=1,ze(e,t,a,i),t.child)}function qo(e,t,a,l,n){if(Ma(t),t.stateNode===null){var i=tl,u=a.contextType;typeof u=="object"&&u!==null&&(i=we(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ic,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Nu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?we(u):tl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(nc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ic.enqueueReplaceState(i,i.state,null),Kl(t,l,i,n),Jl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,r=Ha(a,c);i.props=r;var p=i.context,y=a.contextType;u=tl,typeof y=="object"&&y!==null&&(u=we(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||p!==u)&&bo(t,i,l,u),la=!1;var v=t.memoizedState;i.state=v,Kl(t,l,i,n),Jl(),p=t.memoizedState,c||v!==p||la?(typeof S=="function"&&(nc(t,a,S,l),p=t.memoizedState),(r=la||go(t,a,r,l,v,p,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Uu(e,t),u=t.memoizedProps,y=Ha(a,u),i.props=y,S=t.pendingProps,v=i.context,p=a.contextType,r=tl,typeof p=="object"&&p!==null&&(r=we(p)),c=a.getDerivedStateFromProps,(p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||v!==r)&&bo(t,i,l,r),la=!1,v=t.memoizedState,i.state=v,Kl(t,l,i,n),Jl();var h=t.memoizedState;u!==S||v!==h||la||e!==null&&e.dependencies!==null&&Xn(e.dependencies)?(typeof c=="function"&&(nc(t,a,c,l),h=t.memoizedState),(y=la||go(t,a,y,l,v,h,r)||e!==null&&e.dependencies!==null&&Xn(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,h,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,h,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=h),i.props=l,i.state=h,i.context=r,l=y):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,si(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ba(t,e.child,null,n),t.child=Ba(t,null,a,n)):ze(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Gt(e,t,n),e}function No(e,t,a,l){return za(),t.flags|=256,ze(e,t,a,l),t.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Ts()}}function dc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Uo(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(K){if(n?ua(t):ca(),(e=de)?(e=kd(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:xt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=ms(e),a.return=t,t.child=a,De=t,de=null)):e=null,e===null)throw ta(t);return Ic(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ca(),n=t.mode,c=oi({mode:"hidden",children:c},n),l=wa(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=oc(a),l.childLanes=dc(e,u,a),t.memoizedState=sc,en(null,l)):(ua(t),fc(t,c))}var r=e.memoizedState;if(r!==null&&(c=r.dehydrated,c!==null)){if(i)t.flags&256?(ua(t),t.flags&=-257,t=mc(e,t,a)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,t=null):(ca(),c=l.fallback,n=t.mode,l=oi({mode:"visible",children:l.children},n),c=wa(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Ba(t,e.child,null,a),l=t.child,l.memoizedState=oc(a),l.childLanes=dc(e,u,a),t.memoizedState=sc,t=en(null,l));else if(ua(t),Ic(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var p=u.dgst;u=p,l=Error(m(419)),l.stack="",l.digest=u,Yl({value:l,source:null,stack:null}),t=mc(e,t,a)}else if(Te||il(e,t,a,!1),u=(a&e.childLanes)!==0,Te||u){if(u=se,u!==null&&(l=Sr(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Da(e,l),Ie(u,e,l),cc;Vc(c)||bi(),t=mc(e,t,a)}else Vc(c)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,de=vt(c.nextSibling),De=t,K=!0,ea=null,mt=!1,e!==null&&hs(t,e),t=fc(t,l.children),t.flags|=4096);return t}return n?(ca(),c=l.fallback,n=t.mode,r=e.child,p=r.sibling,l=qt(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,p!==null?c=qt(p,c):(c=wa(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,en(null,l),l=t.child,c=e.child.memoizedState,c===null?c=oc(a):(n=c.cachePool,n!==null?(r=Se._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Ts(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=dc(e,u,a),t.memoizedState=sc,en(e.child,l)):(ua(t),a=e.child,e=a.sibling,a=qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function fc(e,t){return t=oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function oi(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mc(e,t,a){return Ba(t,e.child,null,a),e=fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bo(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Du(e.return,t,a)}function pc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function jo(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=ge.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,_(ge,u),ze(e,t,l,a),l=K?Ql:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bo(e,a,t);else if(e.tag===19)Bo(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&$n(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),pc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&$n(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}pc(t,!0,a,null,i,l);break;case"together":pc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),oa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(il(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,a=qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xn(e)))}function Im(e,t,a){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),aa(t,Se,e.memoizedState.cache),za();break;case 27:case 5:Ol(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Uo(e,t,a):(ua(t),e=Gt(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(il(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return jo(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),_(ge,ge.current),l)break;return null;case 22:return t.lanes=0,wo(e,t,a,t.pendingProps);case 24:aa(t,Se,e.memoizedState.cache)}return Gt(e,t,a)}function Ho(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Te=!0;else{if(!vc(e,a)&&(t.flags&128)===0)return Te=!1,Im(e,t,a);Te=(e.flags&131072)!==0}else Te=!1,K&&(t.flags&1048576)!==0&&vs(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e=="function")Su(e)?(l=Ha(e,l),t.tag=1,t=qo(null,t,e,l,a)):(t.tag=0,t=rc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ut){t.tag=11,t=Oo(null,t,e,l,a);break e}else if(n===J){t.tag=14,t=_o(null,t,e,l,a);break e}}throw t=wt(e)||e,Error(m(306,t,""))}}return t;case 0:return rc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ha(l,t.pendingProps),qo(e,t,l,n,a);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(m(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Uu(e,t),Kl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,aa(t,Se,l),l!==i.cache&&wu(t,[Se],a,!0),Jl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=No(e,t,l,a);break e}else if(l!==n){n=ot(Error(m(424)),t),Yl(n),t=No(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,de=vt(e.firstChild),De=t,K=!0,ea=null,mt=!0,a=Ds(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(za(),l===n){t=Gt(e,t,a);break e}ze(e,t,l,a)}t=t.child}return t;case 26:return si(e,t),e===null?(a=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=a:K||(a=t.type,e=t.pendingProps,l=Oi(Y.current).createElement(a),l[_e]=t,l[Qe]=e,Re(l,a,e),Ae(l),t.stateNode=l):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ol(t),e===null&&K&&(l=t.stateNode=Vd(t.type,t.pendingProps,Y.current),De=t,mt=!0,n=de,va(t.type)?(Jc=n,de=vt(l.firstChild)):de=n),ze(e,t,t.pendingProps.children,a),si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((n=l=de)&&(l=Ep(l,t.type,t.pendingProps,mt),l!==null?(t.stateNode=l,De=t,de=vt(l.firstChild),mt=!1,n=!0):n=!1),n||ta(t)),Ol(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,kc(n,i)?l=null:u!==null&&kc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Yu(e,t,Hm,null,null,a),hn._currentValue=n),si(e,t),ze(e,t,l,a),t.child;case 6:return e===null&&K&&((e=a=de)&&(a=xp(a,t.pendingProps,mt),a!==null?(t.stateNode=a,De=t,de=null,e=!0):e=!1),e||ta(t)),null;case 13:return Uo(e,t,a);case 4:return Ue(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ba(t,null,l,a):ze(e,t,l,a),t.child;case 11:return Oo(e,t,t.type,t.pendingProps,a);case 7:return ze(e,t,t.pendingProps,a),t.child;case 8:return ze(e,t,t.pendingProps.children,a),t.child;case 12:return ze(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,aa(t,t.type,l.value),ze(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ma(t),n=we(n),l=l(n),t.flags|=1,ze(e,t,l,a),t.child;case 14:return _o(e,t,t.type,t.pendingProps,a);case 15:return Do(e,t,t.type,t.pendingProps,a);case 19:return jo(e,t,a);case 31:return Vm(e,t,a);case 22:return wo(e,t,a,t.pendingProps);case 24:return Ma(t),l=we(Se),e===null?(n=Mu(),n===null&&(n=se,i=zu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Nu(t),aa(t,Se,n)):((e.lanes&a)!==0&&(Uu(e,t),Kl(t,null,null,a),Jl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),aa(t,Se,l)):(l=i.cache,aa(t,Se,l),l!==n.cache&&wu(t,[Se],a,!0))),ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Lt(e){e.flags|=4}function hc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(dd())e.flags|=8192;else throw Ua=Jn,qu}else e.flags&=-16777217}function Go(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ef(t))if(dd())e.flags|=8192;else throw Ua=Jn,qu}function di(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yr():536870912,e.lanes|=t,yl|=t)}function tn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Jm(e,t,a){var l=t.pendingProps;switch(xu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return fe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(Se),ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nl(t)?Lt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ou())),fe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Lt(t),i!==null?(fe(t),Go(t,i)):(fe(t),hc(t,n,null,l,a))):i?i!==e.memoizedState?(Lt(t),fe(t),Go(t,i)):(fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Lt(t),fe(t),hc(t,n,e,l,a)),null;case 27:if(Tn(t),a=Y.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(!l){if(t.stateNode===null)throw Error(m(166));return fe(t),null}e=w.current,nl(t)?ys(t):(e=Vd(n,l,a),t.stateNode=e,Lt(t))}return fe(t),null;case 5:if(Tn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(!l){if(t.stateNode===null)throw Error(m(166));return fe(t),null}if(i=w.current,nl(t))ys(t);else{var u=Oi(Y.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[_e]=t,i[Qe]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Re(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Lt(t)}}return fe(t),hc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(m(166));if(e=Y.current,nl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=De,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[_e]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ud(e.nodeValue,a)),e||ta(t,!0)}else e=Oi(e).createTextNode(l),e[_e]=t,t.stateNode=e}return fe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=nl(t),a!==null){if(e===null){if(!l)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[_e]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),e=!1}else a=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(m(558))}return fe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=nl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[_e]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),n=!1}else n=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),di(t,t.updateQueue),fe(t),null);case 4:return ye(),e===null&&Hc(t.stateNode.containerInfo),fe(t),null;case 10:return Bt(t.type),fe(t),null;case 19:if(T(ge),l=t.memoizedState,l===null)return fe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)tn(l,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=$n(e),i!==null){for(t.flags|=128,tn(l,!1),e=i.updateQueue,t.updateQueue=e,di(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fs(a,e),a=a.sibling;return _(ge,ge.current&1|2),K&&Nt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&We()>hi&&(t.flags|=128,n=!0,tn(l,!1),t.lanes=4194304)}else{if(!n)if(e=$n(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,di(t,e),tn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return fe(t),null}else 2*We()-l.renderingStartTime>hi&&a!==536870912&&(t.flags|=128,n=!0,tn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=We(),e.sibling=null,a=ge.current,_(ge,n?a&1|2:a&1),K&&Nt(t,l.treeForkCount),e):(fe(t),null);case 22:case 23:return at(t),Gu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),a=t.updateQueue,a!==null&&di(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&T(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Se),fe(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Km(e,t){switch(xu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(Se),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(m(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(ge),null;case 4:return ye(),null;case 10:return Bt(t.type),null;case 22:case 23:return at(t),Gu(),e!==null&&T(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(Se),null;case 25:return null;default:return null}}function Lo(e,t){switch(xu(t),t.tag){case 3:Bt(Se),ye();break;case 26:case 27:case 5:Tn(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:T(ge);break;case 10:Bt(t.type);break;case 22:case 23:at(t),Gu(),e!==null&&T(qa);break;case 24:Bt(Se)}}function an(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){le(t,t.return,c)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var r=a,p=c;try{p()}catch(y){le(n,r,y)}}}l=l.next}while(l!==i)}}catch(y){le(t,t.return,y)}}function Qo(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{zs(t,a)}catch(l){le(e,e.return,l)}}}function Yo(e,t,a){a.props=Ha(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){le(e,t,l)}}function ln(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){le(e,t,n)}}function Ot(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){le(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){le(e,t,n)}else a.current=null}function ko(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){le(e,e.return,n)}}function yc(e,t,a){try{var l=e.stateNode;yp(l,e.type,a,t),l[Qe]=t}catch(n){le(e,e.return,n)}}function Xo(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rt));else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(bc(e,t,a),e=e.sibling;e!==null;)bc(e,t,a),e=e.sibling}function fi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fi(e,t,a),e=e.sibling;e!==null;)fi(e,t,a),e=e.sibling}function Zo(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Re(t,l,a),t[_e]=e,t[Qe]=a}catch(i){le(e,e.return,i)}}var Qt=!1,Ee=!1,Sc=!1,Vo=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Wm(e,t){if(e=e.containerInfo,Qc=qi,e=ls(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,c=-1,r=-1,p=0,y=0,S=e,v=null;t:for(;;){for(var h;S!==a||n!==0&&S.nodeType!==3||(c=u+n),S!==i||l!==0&&S.nodeType!==3||(r=u+l),S.nodeType===3&&(u+=S.nodeValue.length),(h=S.firstChild)!==null;)v=S,S=h;for(;;){if(S===e)break t;if(v===a&&++p===n&&(c=u),v===i&&++y===l&&(r=u),(h=S.nextSibling)!==null)break;S=v,v=S.parentNode}S=h}a=c===-1||r===-1?null:{start:c,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:e,selectionRange:a},qi=!1,Oe=t;Oe!==null;)if(t=Oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Oe=e;else for(;Oe!==null;){switch(t=Oe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var D=Ha(a.type,n);e=l.getSnapshotBeforeUpdate(D,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(q){le(a,a.return,q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Zc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,Oe=e;break}Oe=t.return}}function Io(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:kt(e,a),l&4&&an(5,a);break;case 1:if(kt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){le(a,a.return,u)}else{var n=Ha(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){le(a,a.return,u)}}l&64&&Qo(a),l&512&&ln(a,a.return);break;case 3:if(kt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{zs(e,t)}catch(u){le(a,a.return,u)}}break;case 27:t===null&&l&4&&Zo(a);case 26:case 5:kt(e,a),t===null&&l&4&&ko(a),l&512&&ln(a,a.return);break;case 12:kt(e,a);break;case 31:kt(e,a),l&4&&Wo(e,a);break;case 13:kt(e,a),l&4&&Fo(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ip.bind(null,a),Ap(e,a))));break;case 22:if(l=a.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||Ee,n=Qt;var i=Ee;Qt=l,(Ee=t)&&!i?Xt(e,a,(a.subtreeFlags&8772)!==0):kt(e,a),Qt=n,Ee=i}break;case 30:break;default:kt(e,a)}}function Jo(e){var t=e.alternate;t!==null&&(e.alternate=null,Jo(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pe=null,ke=!1;function Yt(e,t,a){for(a=a.child;a!==null;)Ko(e,t,a),a=a.sibling}function Ko(e,t,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(_l,a)}catch{}switch(a.tag){case 26:Ee||Ot(a,t),Yt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ee||Ot(a,t);var l=pe,n=ke;va(a.type)&&(pe=a.stateNode,ke=!1),Yt(e,t,a),mn(a.stateNode),pe=l,ke=n;break;case 5:Ee||Ot(a,t);case 6:if(l=pe,n=ke,pe=null,Yt(e,t,a),pe=l,ke=n,pe!==null)if(ke)try{(pe.nodeType===9?pe.body:pe.nodeName==="HTML"?pe.ownerDocument.body:pe).removeChild(a.stateNode)}catch(i){le(a,t,i)}else try{pe.removeChild(a.stateNode)}catch(i){le(a,t,i)}break;case 18:pe!==null&&(ke?(e=pe,Qd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Al(e)):Qd(pe,a.stateNode));break;case 4:l=pe,n=ke,pe=a.stateNode.containerInfo,ke=!0,Yt(e,t,a),pe=l,ke=n;break;case 0:case 11:case 14:case 15:ra(2,a,t),Ee||ra(4,a,t),Yt(e,t,a);break;case 1:Ee||(Ot(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Yo(a,t,l)),Yt(e,t,a);break;case 21:Yt(e,t,a);break;case 22:Ee=(l=Ee)||a.memoizedState!==null,Yt(e,t,a),Ee=l;break;default:Yt(e,t,a)}}function Wo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Al(e)}catch(a){le(t,t.return,a)}}}function Fo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(a){le(t,t.return,a)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vo),t;default:throw Error(m(435,e.tag))}}function mi(e,t){var a=Fm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=up.bind(null,e,l);l.then(n,n)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(va(c.type)){pe=c.stateNode,ke=!1;break e}break;case 5:pe=c.stateNode,ke=!1;break e;case 3:case 4:pe=c.stateNode.containerInfo,ke=!0;break e}c=c.return}if(pe===null)throw Error(m(160));Ko(i,u,n),pe=null,ke=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$o(t,e),t=t.sibling}var bt=null;function $o(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ze(e),l&4&&(ra(3,e,e.return),an(3,e),ra(5,e,e.return));break;case 1:Xe(t,e),Ze(e),l&512&&(Ee||a===null||Ot(a,a.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=bt;if(Xe(t,e),Ze(e),l&512&&(Ee||a===null||Ot(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[zl]||i[_e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Re(i,l,a),i[_e]=e,Ae(i),l=i;break e;case"link":var u=$d("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(l),Re(i,l,a),n.head.appendChild(i);break;case"meta":if(u=$d("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break t}}i=n.createElement(l),Re(i,l,a),n.head.appendChild(i);break;default:throw Error(m(468,l))}i[_e]=e,Ae(i),l=i}e.stateNode=l}else Pd(n,e.type,e.stateNode);else e.stateNode=Fd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Pd(n,e.type,e.stateNode):Fd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ze(e),l&512&&(Ee||a===null||Ot(a,a.return)),a!==null&&l&4&&yc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ze(e),l&512&&(Ee||a===null||Ot(a,a.return)),e.flags&32){n=e.stateNode;try{Ja(n,"")}catch(D){le(e,e.return,D)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,yc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Sc=!0);break;case 6:if(Xe(t,e),Ze(e),l&4){if(e.stateNode===null)throw Error(m(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(D){le(e,e.return,D)}}break;case 3:if(wi=null,n=bt,bt=_i(t.containerInfo),Xe(t,e),bt=n,Ze(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Al(t.containerInfo)}catch(D){le(e,e.return,D)}Sc&&(Sc=!1,Po(e));break;case 4:l=bt,bt=_i(e.stateNode.containerInfo),Xe(t,e),Ze(e),bt=l;break;case 12:Xe(t,e),Ze(e);break;case 31:Xe(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 13:Xe(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=We()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,p=Qt,y=Ee;if(Qt=p||n,Ee=y||r,Xe(t,e),Ee=y,Qt=p,Ze(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Qt||Ee||Ga(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=r.stateNode;var S=r.memoizedProps.style,v=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(D){le(r,r.return,D)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(D){le(r,r.return,D)}}}else if(t.tag===18){if(a===null){r=t;try{var h=r.stateNode;n?Yd(h,!0):Yd(r.stateNode,!1)}catch(D){le(r,r.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,mi(e,a))));break;case 19:Xe(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 30:break;case 21:break;default:Xe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Xo(l)){a=l;break}l=l.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var n=a.stateNode,i=gc(e);fi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Ja(u,""),a.flags&=-33);var c=gc(e);fi(e,c,u);break;case 3:case 4:var r=a.stateNode.containerInfo,p=gc(e);bc(e,p,r);break;default:throw Error(m(161))}}catch(y){le(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Po(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Po(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Io(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ga(t);break;case 1:Ot(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yo(t,t.return,a),Ga(t);break;case 27:mn(t.stateNode);case 26:case 5:Ot(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Xt(n,i,a),an(4,i);break;case 1:if(Xt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){le(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)ws(r[n],c)}catch(p){le(l,l.return,p)}}a&&u&64&&Qo(i),ln(i,i.return);break;case 27:Zo(i);case 26:case 5:Xt(n,i,a),a&&l===null&&u&4&&ko(i),ln(i,i.return);break;case 12:Xt(n,i,a);break;case 31:Xt(n,i,a),a&&u&4&&Wo(n,i);break;case 13:Xt(n,i,a),a&&u&4&&Fo(n,i);break;case 22:i.memoizedState===null&&Xt(n,i,a),ln(i,i.return);break;case 30:break;default:Xt(n,i,a)}t=t.sibling}}function Cc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&kl(a))}function Tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e))}function St(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ed(e,t,a,l),t=t.sibling}function ed(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,l),n&2048&&an(9,t);break;case 1:St(e,t,a,l);break;case 3:St(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e)));break;case 12:if(n&2048){St(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){le(t,t.return,r)}}else St(e,t,a,l);break;case 31:St(e,t,a,l);break;case 13:St(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,l):nn(e,t):i._visibility&2?St(e,t,a,l):(i._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Cc(u,t);break;case 24:St(e,t,a,l),n&2048&&Tc(t.alternate,t);break;default:St(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=a,r=l,p=u.flags;switch(u.tag){case 0:case 11:case 15:pl(i,u,c,r,n),an(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?pl(i,u,c,r,n):nn(i,u):(y._visibility|=2,pl(i,u,c,r,n)),n&&p&2048&&Cc(u.alternate,u);break;case 24:pl(i,u,c,r,n),n&&p&2048&&Tc(u.alternate,u);break;default:pl(i,u,c,r,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:nn(a,l),n&2048&&Cc(l.alternate,l);break;case 24:nn(a,l),n&2048&&Tc(l.alternate,l);break;default:nn(a,l)}t=t.sibling}}var un=8192;function vl(e,t,a){if(e.subtreeFlags&un)for(e=e.child;e!==null;)td(e,t,a),e=e.sibling}function td(e,t,a){switch(e.tag){case 26:vl(e,t,a),e.flags&un&&e.memoizedState!==null&&jp(a,bt,e.memoizedState,e.memoizedProps);break;case 5:vl(e,t,a);break;case 3:case 4:var l=bt;bt=_i(e.stateNode.containerInfo),vl(e,t,a),bt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=un,un=16777216,vl(e,t,a),un=l):vl(e,t,a));break;default:vl(e,t,a)}}function ad(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Oe=l,nd(l,e)}ad(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ld(e),e=e.sibling}function ld(e){switch(e.tag){case 0:case 11:case 15:cn(e),e.flags&2048&&ra(9,e,e.return);break;case 3:cn(e);break;case 12:cn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pi(e)):cn(e);break;default:cn(e)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Oe=l,nd(l,e)}ad(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),pi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,pi(t));break;default:pi(t)}e=e.sibling}}function nd(e,t){for(;Oe!==null;){var a=Oe;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:kl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Oe=l;else e:for(a=e;Oe!==null;){l=Oe;var n=l.sibling,i=l.return;if(Jo(l),l===a){Oe=null;break e}if(n!==null){n.return=i,Oe=n;break e}Oe=i}}}var $m={getCacheForType:function(e){var t=we(Se),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return we(Se).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,P=0,se=null,k=null,V=0,ae=0,lt=null,sa=!1,hl=!1,Ec=!1,Zt=0,he=0,oa=0,La=0,xc=0,nt=0,yl=0,rn=null,Ve=null,Ac=!1,vi=0,id=0,hi=1/0,yi=null,da=null,xe=0,fa=null,gl=null,Vt=0,Oc=0,_c=null,ud=null,sn=0,Dc=null;function it(){return(P&2)!==0&&V!==0?V&-V:g.T!==null?Nc():Cr()}function cd(){if(nt===0)if((V&536870912)===0||K){var e=An;An<<=1,(An&3932160)===0&&(An=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ie(e,t,a){(e===se&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(bl(e,0),ma(e,V,nt,!1)),wl(e,a),((P&2)===0||e!==se)&&(e===se&&((P&2)===0&&(La|=a),he===4&&ma(e,V,nt,!1)),_t(e))}function rd(e,t,a){if((P&6)!==0)throw Error(m(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Dl(e,t),n=l?ap(e,t):zc(e,t,!0),i=l;do{if(n===0){hl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!ep(a)){n=zc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=rn;var r=c.current.memoizedState.isDehydrated;if(r&&(bl(c,u).flags|=256),u=zc(c,u,!1),u!==2){if(Ec&&!r){c.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=Ve,Ve=n,i!==null&&(Ve===null?Ve=i:Ve.push.apply(Ve,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){bl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,nt,!sa);break e;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=vi+300-We(),10<n)){if(ma(l,t,nt,!sa),_n(l,0,!0)!==0)break e;Vt=t,l.timeoutHandle=Gd(sd.bind(null,l,a,Ve,yi,Ac,t,nt,La,yl,sa,i,"Throttled",-0,0),n);break e}sd(l,a,Ve,yi,Ac,t,nt,La,yl,sa,i,null,-0,0)}}break}while(!0);_t(e)}function sd(e,t,a,l,n,i,u,c,r,p,y,S,v,h){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},td(t,i,S);var D=(i&62914560)===i?vi-We():(i&4194048)===i?id-We():0;if(D=Hp(S,D),D!==null){Vt=i,e.cancelPendingCommit=D(yd.bind(null,e,t,i,a,l,n,u,c,r,y,S,null,v,h)),ma(e,i,u,!p);return}}yd(e,t,i,a,l,n,u,c,r)}function ep(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Pe(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~xc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-$e(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&gr(e,a,t)}function gi(){return(P&6)===0?(on(0),!1):!0}function wc(){if(k!==null){if(ae===0)var e=k.return;else e=k,Ut=Ra=null,Zu(e),sl=null,Zl=0,e=k;for(;e!==null;)Lo(e.alternate,e),e=e.return;k=null}}function bl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vt=0,wc(),se=e,k=a=qt(e.current,null),V=t,ae=0,lt=null,sa=!1,hl=Dl(e,t),Ec=!1,yl=nt=xc=La=oa=he=0,Ve=rn=null,Ac=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-$e(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,Gn(),a}function od(e,t){L=null,g.H=Pl,t===rl||t===In?(t=As(),ae=3):t===qu?(t=As(),ae=4):ae=t===cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,k===null&&(he=1,ci(e,ot(t,e.current)))}function dd(){var e=tt.current;return e===null?!0:(V&4194048)===V?pt===null:(V&62914560)===V||(V&536870912)!==0?e===pt:!1}function fd(){var e=g.H;return g.H=Pl,e===null?Pl:e}function md(){var e=g.A;return g.A=$m,e}function bi(){he=4,sa||(V&4194048)!==V&&tt.current!==null||(hl=!0),(oa&134217727)===0&&(La&134217727)===0||se===null||ma(se,V,nt,!1)}function zc(e,t,a){var l=P;P|=2;var n=fd(),i=md();(se!==e||V!==t)&&(yi=null,bl(e,t)),t=!1;var u=he;e:do try{if(ae!==0&&k!==null){var c=k,r=lt;switch(ae){case 8:wc(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var p=ae;if(ae=0,lt=null,Sl(e,c,r,p),a&&hl){u=0;break e}break;default:p=ae,ae=0,lt=null,Sl(e,c,r,p)}}tp(),u=he;break}catch(y){od(e,y)}while(!0);return t&&e.shellSuspendCounter++,Ut=Ra=null,P=l,g.H=n,g.A=i,k===null&&(se=null,V=0,Gn()),u}function tp(){for(;k!==null;)pd(k)}function ap(e,t){var a=P;P|=2;var l=fd(),n=md();se!==e||V!==t?(yi=null,hi=We()+500,bl(e,t)):hl=Dl(e,t);e:do try{if(ae!==0&&k!==null){t=k;var i=lt;t:switch(ae){case 1:ae=0,lt=null,Sl(e,t,i,1);break;case 2:case 9:if(Es(i)){ae=0,lt=null,vd(t);break}t=function(){ae!==2&&ae!==9||se!==e||(ae=7),_t(e)},i.then(t,t);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Es(i)?(ae=0,lt=null,vd(t)):(ae=0,lt=null,Sl(e,t,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var c=k;if(u?ef(u):c.stateNode.complete){ae=0,lt=null;var r=c.sibling;if(r!==null)k=r;else{var p=c.return;p!==null?(k=p,Si(p)):k=null}break t}}ae=0,lt=null,Sl(e,t,i,5);break;case 6:ae=0,lt=null,Sl(e,t,i,6);break;case 8:wc(),he=6;break e;default:throw Error(m(462))}}lp();break}catch(y){od(e,y)}while(!0);return Ut=Ra=null,g.H=l,g.A=n,P=a,k!==null?0:(se=null,V=0,Gn(),he)}function lp(){for(;k!==null&&!Of();)pd(k)}function pd(e){var t=Ho(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Si(e):k=t}function vd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Mo(a,t,t.pendingProps,t.type,void 0,V);break;case 11:t=Mo(a,t,t.pendingProps,t.type.render,t.ref,V);break;case 5:Zu(t);default:Lo(a,t),t=k=fs(t,Zt),t=Ho(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Si(e):k=t}function Sl(e,t,a,l){Ut=Ra=null,Zu(t),sl=null,Zl=0;var n=t.return;try{if(Zm(e,n,t,a,V)){he=1,ci(e,ot(a,e.current)),k=null;return}}catch(i){if(n!==null)throw k=n,i;he=1,ci(e,ot(a,e.current)),k=null;return}t.flags&32768?(K||l===1?e=!0:hl||(V&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),hd(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){hd(t,sa);return}e=t.return;var a=Jm(t.alternate,t,Zt);if(a!==null){k=a;return}if(t=t.sibling,t!==null){k=t;return}k=t=e}while(t!==null);he===0&&(he=5)}function hd(e,t){do{var a=Km(e.alternate,e);if(a!==null){a.flags&=32767,k=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){k=e;return}k=e=a}while(e!==null);he=6,k=null}function yd(e,t,a,l,n,i,u,c,r){e.cancelPendingCommit=null;do Ci();while(xe!==0);if((P&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(i=t.lanes|t.childLanes,i|=gu,Bf(e,a,i,u,c,r),e===se&&(k=se=null,V=0),gl=t,fa=e,Vt=a,Oc=i,_c=n,ud=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cp(En,function(){return Td(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=g.T,g.T=null,n=A.p,A.p=2,u=P,P|=4;try{Wm(e,t,a)}finally{P=u,A.p=n,g.T=l}}xe=1,gd(),bd(),Sd()}}function gd(){if(xe===1){xe=0;var e=fa,t=gl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null;var l=A.p;A.p=2;var n=P;P|=4;try{$o(t,e);var i=Yc,u=ls(e.containerInfo),c=i.focusedElem,r=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&as(c.ownerDocument.documentElement,c)){if(r!==null&&mu(c)){var p=r.start,y=r.end;if(y===void 0&&(y=p),"selectionStart"in c)c.selectionStart=p,c.selectionEnd=Math.min(y,c.value.length);else{var S=c.ownerDocument||document,v=S&&S.defaultView||window;if(v.getSelection){var h=v.getSelection(),D=c.textContent.length,q=Math.min(r.start,D),ce=r.end===void 0?q:Math.min(r.end,D);!h.extend&&q>ce&&(u=ce,ce=q,q=u);var d=ts(c,q),s=ts(c,ce);if(d&&s&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var f=S.createRange();f.setStart(d.node,d.offset),h.removeAllRanges(),q>ce?(h.addRange(f),h.extend(s.node,s.offset)):(f.setEnd(s.node,s.offset),h.addRange(f))}}}}for(S=[],h=c;h=h.parentNode;)h.nodeType===1&&S.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var b=S[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}qi=!!Qc,Yc=Qc=null}finally{P=n,A.p=l,g.T=a}}e.current=t,xe=2}}function bd(){if(xe===2){xe=0;var e=fa,t=gl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=g.T,g.T=null;var l=A.p;A.p=2;var n=P;P|=4;try{Io(e,t.alternate,t)}finally{P=n,A.p=l,g.T=a}}xe=3}}function Sd(){if(xe===4||xe===3){xe=0,_f();var e=fa,t=gl,a=Vt,l=ud;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xe=5:(xe=0,gl=fa=null,Cd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),Ji(a),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=g.T,n=A.p,A.p=2,g.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{g.T=t,A.p=n}}(Vt&3)!==0&&Ci(),_t(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Dc?sn++:(sn=0,Dc=e):sn=0,on(0)}}function Cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kl(t)))}function Ci(){return gd(),bd(),Sd(),Td()}function Td(){if(xe!==5)return!1;var e=fa,t=Oc;Oc=0;var a=Ji(Vt),l=g.T,n=A.p;try{A.p=32>a?32:a,g.T=null,a=_c,_c=null;var i=fa,u=Vt;if(xe=0,gl=fa=null,Vt=0,(P&6)!==0)throw Error(m(331));var c=P;if(P|=4,ld(i.current),ed(i,i.current,u,a),P=c,on(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(_l,i)}catch{}return!0}finally{A.p=n,g.T=l,Cd(e,t)}}function Ed(e,t,a){t=ot(a,t),t=uc(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(wl(e,2),_t(e))}function le(e,t,a){if(e.tag===3)Ed(e,e,a);else for(;t!==null;){if(t.tag===3){Ed(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=ot(a,e),a=xo(2),l=ia(t,a,2),l!==null&&(Ao(a,l,t,e),wl(l,2),_t(l));break}}t=t.return}}function Rc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Pm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ec=!0,n.add(a),e=np.bind(null,e,t,a),t.then(e,e))}function np(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(V&a)===a&&(he===4||he===3&&(V&62914560)===V&&300>We()-vi?(P&2)===0&&bl(e,0):xc|=a,yl===V&&(yl=0)),_t(e)}function xd(e,t){t===0&&(t=yr()),e=Da(e,t),e!==null&&(wl(e,t),_t(e))}function ip(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),xd(e,a)}function up(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(t),xd(e,a)}function cp(e,t){return Xi(e,t)}var Ti=null,Cl=null,Mc=!1,Ei=!1,qc=!1,pa=0;function _t(e){e!==Cl&&e.next===null&&(Cl===null?Ti=Cl=e:Cl=Cl.next=e),Ei=!0,Mc||(Mc=!0,sp())}function on(e,t){if(!qc&&Ei){qc=!0;do for(var a=!1,l=Ti;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Dd(l,i))}else i=V,i=_n(l,l===se?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(a=!0,Dd(l,i));l=l.next}while(a);qc=!1}}function rp(){Ad()}function Ad(){Ei=Mc=!1;var e=0;pa!==0&&bp()&&(e=pa);for(var t=We(),a=null,l=Ti;l!==null;){var n=l.next,i=Od(l,t);i===0?(l.next=null,a===null?Ti=n:a.next=n,n===null&&(Cl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ei=!0)),l=n}xe!==0&&xe!==5||on(e),pa!==0&&(pa=0)}function Od(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-$e(i),c=1<<u,r=n[u];r===-1?((c&a)===0||(c&l)!==0)&&(n[u]=Uf(c,t)):r<=t&&(e.expiredLanes|=c),i&=~c}if(t=se,a=V,a=_n(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Zi(l),Ji(a)){case 2:case 8:a=vr;break;case 32:a=En;break;case 268435456:a=hr;break;default:a=En}return l=_d.bind(null,e),a=Xi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Zi(l),e.callbackPriority=2,e.callbackNode=null,2}function _d(e,t){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ci()&&e.callbackNode!==a)return null;var l=V;return l=_n(e,e===se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(rd(e,l,t),Od(e,We()),e.callbackNode!=null&&e.callbackNode===a?_d.bind(null,e):null)}function Dd(e,t){if(Ci())return null;rd(e,t,!0)}function sp(){Cp(function(){(P&6)!==0?Xi(pr,rp):Ad()})}function Nc(){if(pa===0){var e=ul;e===0&&(e=xn,xn<<=1,(xn&261888)===0&&(xn=256)),pa=e}return pa}function wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rn(""+e)}function zd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function op(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=wd((n[Qe]||null).action),u=l.submitter;u&&(t=(t=u[Qe]||null)?wd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Un("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(pa!==0){var r=u?zd(n,u):new FormData(n);ec(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(c.preventDefault(),r=u?zd(n,u):new FormData(n),ec(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Uc=0;Uc<yu.length;Uc++){var Bc=yu[Uc],dp=Bc.toLowerCase(),fp=Bc[0].toUpperCase()+Bc.slice(1);gt(dp,"on"+fp)}gt(us,"onAnimationEnd"),gt(cs,"onAnimationIteration"),gt(rs,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(Dm,"onTransitionRun"),gt(wm,"onTransitionStart"),gt(zm,"onTransitionCancel"),gt(ss,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function Rd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],r=c.instance,p=c.currentTarget;if(c=c.listener,r!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=p;try{i(n)}catch(y){Hn(y)}n.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(c=l[u],r=c.instance,p=c.currentTarget,c=c.listener,r!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=p;try{i(n)}catch(y){Hn(y)}n.currentTarget=null,i=r}}}}function X(e,t){var a=t[Ki];a===void 0&&(a=t[Ki]=new Set);var l=e+"__bubble";a.has(l)||(Md(t,e,2,!1),a.add(l))}function jc(e,t,a){var l=0;t&&(l|=4),Md(a,e,l,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Hc(e){if(!e[xi]){e[xi]=!0,xr.forEach(function(a){a!=="selectionchange"&&(mp.has(a)||jc(a,!1,e),jc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,jc("selectionchange",!1,t))}}function Md(e,t,a,l){switch(rf(t)){case 2:var n=Qp;break;case 8:n=Yp;break;default:n=Pc}a=n.bind(null,t,a,e),n=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Gc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=ka(c),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue e}c=c.parentNode}}l=l.return}Br(function(){var p=i,y=au(a),S=[];e:{var v=os.get(e);if(v!==void 0){var h=Un,D=e;switch(e){case"keypress":if(qn(a)===0)break e;case"keydown":case"keyup":h=um;break;case"focusin":D="focus",h=ru;break;case"focusout":D="blur",h=ru;break;case"beforeblur":case"afterblur":h=ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Gr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=sm;break;case us:case cs:case rs:h=Ff;break;case ss:h=dm;break;case"scroll":case"scrollend":h=Vf;break;case"wheel":h=mm;break;case"copy":case"cut":case"paste":h=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Qr;break;case"toggle":case"beforetoggle":h=vm}var q=(t&4)!==0,ce=!q&&(e==="scroll"||e==="scrollend"),d=q?v!==null?v+"Capture":null:v;q=[];for(var s=p,f;s!==null;){var b=s;if(f=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||f===null||d===null||(b=Ml(s,d),b!=null&&q.push(fn(s,b,f))),ce)break;s=s.return}0<q.length&&(v=new h(v,D,null,a,y),S.push({event:v,listeners:q}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&a!==tu&&(D=a.relatedTarget||a.fromElement)&&(ka(D)||D[Ya]))break e;if((h||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,h?(D=a.relatedTarget||a.toElement,h=p,D=D?ka(D):null,D!==null&&(ce=B(D),q=D.tag,D!==ce||q!==5&&q!==27&&q!==6)&&(D=null)):(h=null,D=p),h!==D)){if(q=Gr,b="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(q=Qr,b="onPointerLeave",d="onPointerEnter",s="pointer"),ce=h==null?v:Rl(h),f=D==null?v:Rl(D),v=new q(b,s+"leave",h,a,y),v.target=ce,v.relatedTarget=f,b=null,ka(y)===p&&(q=new q(d,s+"enter",D,a,y),q.target=f,q.relatedTarget=ce,b=q),ce=b,h&&D)t:{for(q=pp,d=h,s=D,f=0,b=d;b;b=q(b))f++;b=0;for(var R=s;R;R=q(R))b++;for(;0<f-b;)d=q(d),f--;for(;0<b-f;)s=q(s),b--;for(;f--;){if(d===s||s!==null&&d===s.alternate){q=d;break t}d=q(d),s=q(s)}q=null}else q=null;h!==null&&qd(S,v,h,q,!1),D!==null&&ce!==null&&qd(S,ce,D,q,!0)}}e:{if(v=p?Rl(p):window,h=v.nodeName&&v.nodeName.toLowerCase(),h==="select"||h==="input"&&v.type==="file")var F=Kr;else if(Ir(v))if(Wr)F=Am;else{F=Em;var z=Tm}else h=v.nodeName,!h||h.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?p&&eu(p.elementType)&&(F=Kr):F=xm;if(F&&(F=F(e,p))){Jr(S,F,a,y);break e}z&&z(e,v,p),e==="focusout"&&p&&v.type==="number"&&p.memoizedProps.value!=null&&Pi(v,"number",v.value)}switch(z=p?Rl(p):window,e){case"focusin":(Ir(z)||z.contentEditable==="true")&&($a=z,pu=p,Ll=null);break;case"focusout":Ll=pu=$a=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,ns(S,a,y);break;case"selectionchange":if(_m)break;case"keydown":case"keyup":ns(S,a,y)}var Q;if(ou)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Fa?Zr(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Yr&&a.locale!=="ko"&&(Fa||I!=="onCompositionStart"?I==="onCompositionEnd"&&Fa&&(Q=jr()):($t=y,iu="value"in $t?$t.value:$t.textContent,Fa=!0)),z=Ai(p,I),0<z.length&&(I=new Lr(I,e,null,a,y),S.push({event:I,listeners:z}),Q?I.data=Q:(Q=Vr(a),Q!==null&&(I.data=Q)))),(Q=ym?gm(e,a):bm(e,a))&&(I=Ai(p,"onBeforeInput"),0<I.length&&(z=new Lr("onBeforeInput","beforeinput",null,a,y),S.push({event:z,listeners:I}),z.data=Q)),op(S,e,p,a,y)}Rd(S,t)})}function fn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ai(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ml(e,a),n!=null&&l.unshift(fn(e,n,i)),n=Ml(e,t),n!=null&&l.push(fn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function pp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var c=a,r=c.alternate,p=c.stateNode;if(c=c.tag,r!==null&&r===l)break;c!==5&&c!==26&&c!==27||p===null||(r=p,n?(p=Ml(a,i),p!=null&&u.unshift(fn(a,p,r))):n||(p=Ml(a,i),p!=null&&u.push(fn(a,p,r)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var vp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(hp,"")}function Ud(e,t){return t=Nd(t),Nd(e)===t}function ue(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ja(e,""+l);break;case"className":wn(e,"class",l);break;case"tabIndex":wn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,a,l);break;case"style":Nr(e,l,i);break;case"data":if(t!=="object"){wn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Rn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ue(e,t,"name",n.name,n,null),ue(e,t,"formEncType",n.formEncType,n,null),ue(e,t,"formMethod",n.formMethod,n,null),ue(e,t,"formTarget",n.formTarget,n,null)):(ue(e,t,"encType",n.encType,n,null),ue(e,t,"method",n.method,n,null),ue(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Rn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"onScroll":l!=null&&X("scroll",e);break;case"onScrollEnd":l!=null&&X("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Rn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":X("beforetoggle",e),X("toggle",e),Dn(e,"popover",l);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xf.get(a)||a,Dn(e,a,l))}}function Lc(e,t,a,l,n,i){switch(a){case"style":Nr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&Ja(e,""+l);break;case"onScroll":l!=null&&X("scroll",e);break;case"onScrollEnd":l!=null&&X("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ar.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Qe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Dn(e,a,l)}}}function Re(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",e),X("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ue(e,t,i,u,a,null)}}n&&ue(e,t,"srcSet",a.srcSet,a,null),l&&ue(e,t,"src",a.src,a,null);return;case"input":X("invalid",e);var c=i=u=n=null,r=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var y=a[l];if(y!=null)switch(l){case"name":n=y;break;case"type":u=y;break;case"checked":r=y;break;case"defaultChecked":p=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:ue(e,t,l,y,a,null)}}zr(e,i,c,r,p,u,n,!1);return;case"select":X("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:ue(e,t,n,c,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Ia(e,!!l,t,!1):a!=null&&Ia(e,!!l,a,!0);return;case"textarea":X("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ue(e,t,u,c,a,null)}Mr(e,l,n,i);return;case"option":for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null)&&(r==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ue(e,t,r,l,a,null));return;case"dialog":X("beforetoggle",e),X("toggle",e),X("cancel",e),X("close",e);break;case"iframe":case"object":X("load",e);break;case"video":case"audio":for(l=0;l<dn.length;l++)X(dn[l],e);break;case"image":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"embed":case"source":case"link":X("error",e),X("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ue(e,t,p,l,a,null)}return;default:if(eu(t)){for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!==void 0&&Lc(e,t,y,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&ue(e,t,c,l,a,null))}function yp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,r=null,p=null,y=null;for(h in a){var S=a[h];if(a.hasOwnProperty(h)&&S!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":r=S;default:l.hasOwnProperty(h)||ue(e,t,h,null,l,S)}}for(var v in l){var h=l[v];if(S=a[v],l.hasOwnProperty(v)&&(h!=null||S!=null))switch(v){case"type":i=h;break;case"name":n=h;break;case"checked":p=h;break;case"defaultChecked":y=h;break;case"value":u=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(m(137,t));break;default:h!==S&&ue(e,t,v,h,l,S)}}$i(e,u,c,r,p,y,i,n);return;case"select":h=u=c=v=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":h=r;default:l.hasOwnProperty(i)||ue(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":v=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==r&&ue(e,t,n,i,l,r)}t=c,a=u,l=h,v!=null?Ia(e,!!a,v,!1):!!l!=!!a&&(t!=null?Ia(e,!!a,t,!0):Ia(e,!!a,a?[]:"",!1));return;case"textarea":h=v=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ue(e,t,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":v=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ue(e,t,u,n,l,i)}Rr(e,v,h);return;case"option":for(var D in a)v=a[D],a.hasOwnProperty(D)&&v!=null&&!l.hasOwnProperty(D)&&(D==="selected"?e.selected=!1:ue(e,t,D,null,l,v));for(r in l)v=l[r],h=a[r],l.hasOwnProperty(r)&&v!==h&&(v!=null||h!=null)&&(r==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":ue(e,t,r,v,l,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in a)v=a[q],a.hasOwnProperty(q)&&v!=null&&!l.hasOwnProperty(q)&&ue(e,t,q,null,l,v);for(p in l)if(v=l[p],h=a[p],l.hasOwnProperty(p)&&v!==h&&(v!=null||h!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:ue(e,t,p,v,l,h)}return;default:if(eu(t)){for(var ce in a)v=a[ce],a.hasOwnProperty(ce)&&v!==void 0&&!l.hasOwnProperty(ce)&&Lc(e,t,ce,void 0,l,v);for(y in l)v=l[y],h=a[y],!l.hasOwnProperty(y)||v===h||v===void 0&&h===void 0||Lc(e,t,y,v,l,h);return}}for(var d in a)v=a[d],a.hasOwnProperty(d)&&v!=null&&!l.hasOwnProperty(d)&&ue(e,t,d,null,l,v);for(S in l)v=l[S],h=a[S],!l.hasOwnProperty(S)||v===h||v==null&&h==null||ue(e,t,S,v,l,h)}function Bd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Bd(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],p=r.startTime;if(p>c)break;var y=r.transferSize,S=r.initiatorType;y&&Bd(S)&&(r=r.responseEnd,u+=y*(r<c?1:(c-p)/(r-p)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qc=null,Yc=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function jd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=null;function bp(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(e){return Ld.resolve(null).then(e).catch(Tp)}:Gd;function Tp(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function Qd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Al(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[zl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&mn(e.ownerDocument.body);a=n}while(a);Al(t)}function Yd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zc(a),Wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ep(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function xp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vt(e.nextSibling),e===null))return null;return e}function kd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Vc(e){return e.data==="$?"||e.data==="$~"}function Ic(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ap(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jc=null;function Xd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vd(e,t,a){switch(t=Oi(a),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e)}var ht=new Map,Id=new Set;function _i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=A.d;A.d={f:Op,r:_p,D:Dp,C:wp,L:zp,m:Rp,X:qp,S:Mp,M:Np};function Op(){var e=It.f(),t=gi();return e||t}function _p(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?so(t):It.r(e)}var Tl=typeof document>"u"?null:document;function Jd(e,t,a){var l=Tl;if(l&&typeof t=="string"&&t){var n=rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Id.has(n)||(Id.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Re(t,"link",e),Ae(t),l.head.appendChild(t)))}}function Dp(e){It.D(e),Jd("dns-prefetch",e,null)}function wp(e,t){It.C(e,t),Jd("preconnect",e,t)}function zp(e,t,a){It.L(e,t,a);var l=Tl;if(l&&e&&t){var n='link[rel="preload"][as="'+rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+rt(a.imageSizes)+'"]')):n+='[href="'+rt(e)+'"]';var i=n;switch(t){case"style":i=El(e);break;case"script":i=xl(e)}ht.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ht.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(pn(i))||t==="script"&&l.querySelector(vn(i))||(t=l.createElement("link"),Re(t,"link",e),Ae(t),l.head.appendChild(t)))}}function Rp(e,t){It.m(e,t);var a=Tl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xl(e)}if(!ht.has(i)&&(e=N({rel:"modulepreload",href:e},t),ht.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vn(i)))return}l=a.createElement("link"),Re(l,"link",e),Ae(l),a.head.appendChild(l)}}}function Mp(e,t,a){It.S(e,t,a);var l=Tl;if(l&&e){var n=Za(l).hoistableStyles,i=El(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(pn(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ht.get(i))&&Kc(e,a);var r=u=l.createElement("link");Ae(r),Re(r,"link",e),r._p=new Promise(function(p,y){r.onload=p,r.onerror=y}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Di(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function qp(e,t){It.X(e,t);var a=Tl;if(a&&e){var l=Za(a).hoistableScripts,n=xl(e),i=l.get(n);i||(i=a.querySelector(vn(n)),i||(e=N({src:e,async:!0},t),(t=ht.get(n))&&Wc(e,t),i=a.createElement("script"),Ae(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Np(e,t){It.M(e,t);var a=Tl;if(a&&e){var l=Za(a).hoistableScripts,n=xl(e),i=l.get(n);i||(i=a.querySelector(vn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=ht.get(n))&&Wc(e,t),i=a.createElement("script"),Ae(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Kd(e,t,a,l){var n=(n=Y.current)?_i(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=El(a.href),a=Za(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=El(a.href);var i=Za(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(pn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ht.set(e,a),i||Up(n,e,a,u.state))),t&&l===null)throw Error(m(528,""));return u}if(t&&l!==null)throw Error(m(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xl(a),a=Za(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function El(e){return'href="'+rt(e)+'"'}function pn(e){return'link[rel="stylesheet"]['+e+"]"}function Wd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Up(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Re(t,"link",a),Ae(t),e.head.appendChild(t))}function xl(e){return'[src="'+rt(e)+'"]'}function vn(e){return"script[async]"+e}function Fd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+rt(a.href)+'"]');if(l)return t.instance=l,Ae(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),Re(l,"style",n),Di(l,a.precedence,e),t.instance=l;case"stylesheet":n=El(a.href);var i=e.querySelector(pn(n));if(i)return t.state.loading|=4,t.instance=i,Ae(i),i;l=Wd(a),(n=ht.get(n))&&Kc(l,n),i=(e.ownerDocument||e).createElement("link"),Ae(i);var u=i;return u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Re(i,"link",l),t.state.loading|=4,Di(i,a.precedence,e),t.instance=i;case"script":return i=xl(a.src),(n=e.querySelector(vn(i)))?(t.instance=n,Ae(n),n):(l=a,(n=ht.get(i))&&(l=N({},a),Wc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ae(n),Re(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Di(l,a.precedence,e));return t.instance}function Di(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var wi=null;function $d(e,t,a){if(wi===null){var l=new Map,n=wi=new Map;n.set(a,l)}else n=wi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[zl]||i[_e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function Pd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Bp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ef(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=El(l.href),i=t.querySelector(pn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ae(i);return}i=t.ownerDocument||t,l=Wd(l),(n=ht.get(n))&&Kc(l,n),i=i.createElement("link"),Ae(i);var u=i;u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Re(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fc=0;function Hp(e,t){return e.stylesheets&&e.count===0&&Mi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Mi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Fc===0&&(Fc=62500*gp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Fc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function Mi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(Gp,e),Ri=null,zi.call(e))}function Gp(e,t){if(!(t.state.loading&4)){var a=Ri.get(e);if(a)var l=a.get(null);else{a=new Map,Ri.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var hn={$$typeof:Me,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Lp(e,t,a,l,n,i,u,c,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function tf(e,t,a,l,n,i,u,c,r,p,y,S){return e=new Lp(e,t,a,u,r,p,y,S,c),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=zu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Nu(i),e}function af(e){return e?(e=tl,e):tl}function lf(e,t,a,l,n,i){n=af(n),l.context===null?l.context=n:l.pendingContext=n,l=na(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ia(e,l,t),a!==null&&(Ie(a,e,t),Il(a,e,t))}function nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $c(e,t){nf(e,t),(e=e.alternate)&&nf(e,t)}function uf(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Ie(t,e,67108864),$c(e,67108864)}}function cf(e){if(e.tag===13||e.tag===31){var t=it();t=Ii(t);var a=Da(e,t);a!==null&&Ie(a,e,t),$c(e,t)}}var qi=!0;function Qp(e,t,a,l){var n=g.T;g.T=null;var i=A.p;try{A.p=2,Pc(e,t,a,l)}finally{A.p=i,g.T=n}}function Yp(e,t,a,l){var n=g.T;g.T=null;var i=A.p;try{A.p=8,Pc(e,t,a,l)}finally{A.p=i,g.T=n}}function Pc(e,t,a,l){if(qi){var n=er(l);if(n===null)Gc(e,t,l,Ni,a),sf(e,l);else if(Xp(n,e,t,a,l))l.stopPropagation();else if(sf(e,l),t&4&&-1<kp.indexOf(e)){for(;n!==null;){var i=Xa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ea(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var r=1<<31-$e(u);c.entanglements[1]|=r,u&=~r}_t(i),(P&6)===0&&(hi=We()+500,on(0))}}break;case 31:case 13:c=Da(i,2),c!==null&&Ie(c,i,2),gi(),$c(i,2)}if(i=er(l),i===null&&Gc(e,t,l,Ni,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Gc(e,t,l,null,a)}}function er(e){return e=au(e),tr(e)}var Ni=null;function tr(e){if(Ni=null,e=ka(e),e!==null){var t=B(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=W(t),e!==null)return e;e=null}else if(a===31){if(e=oe(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ni=e,null}function rf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Df()){case pr:return 2;case vr:return 8;case En:case wf:return 32;case hr:return 268435456;default:return 32}default:return 32}}var ar=!1,ha=null,ya=null,ga=null,yn=new Map,gn=new Map,ba=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(t.pointerId)}}function bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Xa(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Xp(e,t,a,l,n){switch(t){case"focusin":return ha=bn(ha,e,t,a,l,n),!0;case"dragenter":return ya=bn(ya,e,t,a,l,n),!0;case"mouseover":return ga=bn(ga,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return yn.set(i,bn(yn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,gn.set(i,bn(gn.get(i)||null,e,t,a,l,n)),!0}return!1}function of(e){var t=ka(e.target);if(t!==null){var a=B(t);if(a!==null){if(t=a.tag,t===13){if(t=W(a),t!==null){e.blockedOn=t,Tr(e.priority,function(){cf(a)});return}}else if(t===31){if(t=oe(a),t!==null){e.blockedOn=t,Tr(e.priority,function(){cf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=er(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);tu=l,a.target.dispatchEvent(l),tu=null}else return t=Xa(a),t!==null&&uf(t),e.blockedOn=a,!1;t.shift()}return!0}function df(e,t,a){Ui(e)&&a.delete(t)}function Zp(){ar=!1,ha!==null&&Ui(ha)&&(ha=null),ya!==null&&Ui(ya)&&(ya=null),ga!==null&&Ui(ga)&&(ga=null),yn.forEach(df),gn.forEach(df)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,ar||(ar=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Zp)))}var ji=null;function ff(e){ji!==e&&(ji=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){ji===e&&(ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(tr(l||a)===null)continue;break}var i=Xa(a);i!==null&&(e.splice(t,3),t-=3,ec(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Al(e){function t(r){return Bi(r,e)}ha!==null&&Bi(ha,e),ya!==null&&Bi(ya,e),ga!==null&&Bi(ga,e),yn.forEach(t),gn.forEach(t);for(var a=0;a<ba.length;a++){var l=ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)of(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Qe]||null;if(typeof i=="function")u||ff(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Qe]||null)c=u.formAction;else if(tr(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),ff(a)}}}function mf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function lr(e){this._internalRoot=e}Hi.prototype.render=lr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var a=t.current,l=it();lf(a,l,e,t,null,null)},Hi.prototype.unmount=lr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lf(e.current,2,null,e,null,null),gi(),t[Ya]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ba.length&&t!==0&&t<ba[a].priority;a++);ba.splice(a,0,e),a===0&&of(e)}};var pf=Z.version;if(pf!=="19.2.4")throw Error(m(527,pf,"19.2.4"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=E(t),e=e!==null?ee(e):null,e=e===null?null:e.stateNode,e};var Vp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{_l=Gi.inject(Vp),Fe=Gi}catch{}}return Cn.createRoot=function(e,t){if(!M(e))throw Error(m(299));var a=!1,l="",n=So,i=Co,u=To;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=tf(e,1,!1,null,null,a,l,null,n,i,u,mf),e[Ya]=t.current,Hc(e),new lr(t)},Cn.hydrateRoot=function(e,t,a){if(!M(e))throw Error(m(299));var l=!1,n="",i=So,u=Co,c=To,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=tf(e,1,!0,t,a??null,l,n,r,i,u,c,mf),t.context=af(null),a=t.current,l=it(),l=Ii(l),n=na(l),n.callback=null,ia(a,n,l),a=l,t.current.lanes=a,wl(t,a),_t(t),e[Ya]=t.current,Hc(e),new Hi(t)},Cn.version="19.2.4",Cn}var xf;function av(){if(xf)return ur.exports;xf=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(Z){console.error(Z)}}return x(),ur.exports=tv(),ur.exports}var lv=av();function nv({subjects:x,selectedSubject:Z,selectedTopic:j,onSubjectSelect:m,onTopicSelect:M,isOpen:B,onToggle:W}){const oe=x.find(O=>O.id===Z);return C.jsx(C.Fragment,{children:C.jsxs("nav",{className:`flex flex-col h-screen bg-white shadow-2xl flex-shrink-0 border-r-2 border-indigo-100 transition-all duration-300 ease-in-out ${B?"w-80":"w-24"}`,children:[C.jsx("div",{className:"px-6 py-8 border-b-2 border-indigo-100 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex-shrink-0",children:C.jsxs("div",{className:"flex items-center justify-between",children:[B&&C.jsxs("div",{children:[C.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"📚"}),C.jsx("p",{className:"text-base font-semibold mt-3 opacity-90",children:"Interview Prep Guide"})]}),!B&&C.jsx("h1",{className:"text-3xl font-bold",children:"📚"}),C.jsx("button",{onClick:W,className:"p-2 hover:bg-white/20 rounded-lg transition-colors",title:B?"Collapse":"Expand",children:B?C.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M15.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 0z"})}):C.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M4.293 10.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414 0z"})})})]})}),C.jsxs("div",{className:"flex flex-1 overflow-hidden gap-0",children:[C.jsxs("div",{className:"flex-1 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white",children:[C.jsxs("div",{className:"px-5 py-4 text-xs font-bold uppercase tracking-widest text-indigo-600 bg-white border-b border-gray-200 sticky top-0",children:[B&&"Subjects",!B&&"📋"]}),C.jsx("ul",{className:"space-y-3 p-4",children:x.map(O=>C.jsx("li",{children:C.jsx("button",{className:`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${Z===O.id?"bg-indigo-600 text-white shadow-lg scale-105":"text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"}`,onClick:()=>m(O.id),title:O.name,children:B?O.name:O.name.charAt(0).toUpperCase()})},O.id))})]}),oe&&B&&C.jsxs("div",{className:"w-40 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white",children:[C.jsx("div",{className:"px-5 py-4 text-xs font-bold uppercase tracking-widest text-purple-600 bg-white border-b border-gray-200 sticky top-0",children:"Topics"}),C.jsx("ul",{className:"space-y-3 p-4",children:oe.topics.map(O=>C.jsx("li",{children:C.jsxs("button",{className:`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between ${j===O.id?"bg-purple-600 text-white shadow-lg scale-105":"text-gray-700 hover:bg-purple-100 hover:text-purple-700"}`,onClick:()=>M(O.id),children:[C.jsx("span",{children:O.name}),C.jsx("span",{className:`text-xs font-bold px-3 py-1 rounded-full ml-2 ${j===O.id?"bg-white/30 text-white":"bg-indigo-100 text-indigo-700"}`,children:O.questions.length})]})},O.id))})]})]})]})})}function iv({snippet:x}){const[Z,j]=Jt.useState(!1),m=()=>{navigator.clipboard.writeText(x.code),j(!0),setTimeout(()=>j(!1),2e3)};return C.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all",children:[C.jsxs("div",{className:"flex justify-between items-center px-5 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-gray-700",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),C.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),C.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),C.jsx("span",{className:"ml-3 text-indigo-400 text-xs font-bold uppercase tracking-widest",children:x.language})]}),C.jsx("button",{onClick:m,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${Z?"bg-green-600 text-white":"bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"}`,title:"Copy code",children:Z?C.jsxs(C.Fragment,{children:[C.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Copied!"]}):C.jsxs(C.Fragment,{children:[C.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Copy"]})})]}),C.jsx("pre",{className:"p-5 text-gray-300 text-sm overflow-x-auto font-mono leading-relaxed bg-gray-900",children:C.jsx("code",{className:"text-gray-100",children:x.code})})]})}function uv({diagram:x}){return C.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden my-4",children:[C.jsx("div",{className:"px-4 py-3 bg-gray-100 border-b border-gray-200",children:C.jsx("h4",{className:"text-sm font-semibold text-purple-600 uppercase tracking-wide",children:x.title})}),C.jsx("div",{className:"p-6 bg-gray-50 flex justify-center",children:C.jsx("img",{src:x.imageUrl,alt:x.title,className:"max-w-full h-auto rounded-lg max-h-96 object-contain"})}),x.description&&C.jsx("div",{className:"px-4 py-3 bg-white border-t border-gray-200",children:C.jsx("p",{className:"text-sm text-gray-700 leading-relaxed",children:x.description})})]})}function cv({question:x}){const[Z,j]=Jt.useState(!1);return C.jsxs("div",{className:"bg-white border-2 border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all duration-300",children:[C.jsxs("div",{className:"flex items-center justify-between gap-4 cursor-pointer px-6 py-4",onClick:()=>j(!Z),children:[C.jsx("p",{className:"text-lg font-bold text-gray-900 leading-relaxed flex-1",children:x.question}),C.jsx("div",{className:"flex-shrink-0 text-gray-400 hover:text-indigo-600 transition-colors",children:Z?C.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})}):C.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})})]}),Z&&C.jsxs("div",{className:"mt-8 pt-8 px-6 pb-6 border-t-2 border-gray-100 space-y-6 animate-in fade-in duration-300",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"inline-block px-3 py-1 bg-green-100 rounded-full text-xs font-bold text-green-700 mb-3",children:"ANSWER"}),C.jsx("p",{className:"text-gray-800 leading-relaxed text-base",children:x.answer})]}),x.diagrams&&x.diagrams.length>0&&C.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-100",children:[C.jsxs("h4",{className:"font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2",children:[C.jsx("div",{className:"w-2 h-2 bg-purple-600 rounded-full"}),"Diagrams"]}),C.jsx("div",{className:"space-y-4",children:x.diagrams.map((m,M)=>C.jsx(uv,{diagram:m},M))})]}),x.codeSnippets&&x.codeSnippets.length>0&&C.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-100",children:[C.jsxs("h4",{className:"font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2",children:[C.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"}),"Code Examples"]}),C.jsx("div",{className:"space-y-3",children:x.codeSnippets.map((m,M)=>C.jsx(iv,{snippet:m},M))})]})]})]})}function rv({subjects:x,selectedSubject:Z,selectedTopic:j}){const m=x.find(W=>W.id===Z),M=m?.topics.find(W=>W.id===j),B=Jt.useRef(null);return Jt.useEffect(()=>{B.current?.scrollTo(0,0)},[j]),Z?j?M?C.jsx("div",{ref:B,className:"content-area flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-12 md:p-16",children:C.jsxs("div",{className:"max-w-5xl mx-auto",children:[C.jsxs("nav",{className:"flex items-center gap-3 mb-8 text-sm",children:[C.jsx("span",{className:"px-4 py-2 bg-white rounded-full font-semibold text-indigo-600 shadow-sm border-2 border-indigo-100",children:m?.name}),C.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),C.jsx("span",{className:"px-4 py-2 bg-white rounded-full font-semibold text-purple-600 shadow-sm border-2 border-purple-100",children:M.name})]}),C.jsxs("div",{className:"mb-10 space-y-4",children:[C.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:M.name}),C.jsx("div",{className:"flex items-center gap-4",children:C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-sm",children:M.questions.length}),C.jsxs("span",{className:"text-gray-700 font-semibold",children:["question",M.questions.length!==1?"s":""]})]})})]}),C.jsxs("div",{className:"mb-10 space-y-2",children:[C.jsx("div",{className:"h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner",children:C.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500",style:{width:`${Math.min(M.questions.length/15*100,100)}%`}})}),C.jsx("p",{className:"text-sm text-gray-500",children:"Learning path progress"})]}),C.jsx("div",{className:"grid gap-8",children:M.questions.map((W,oe)=>C.jsx("div",{className:"transform transition-all duration-300 hover:scale-[1.01]",children:C.jsxs("div",{className:"flex gap-4",children:[C.jsx("div",{className:"flex-shrink-0",children:C.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg",children:oe+1})}),C.jsx("div",{className:"flex-1",children:C.jsx(cv,{question:W})})]})},W.id))})]})}):C.jsx("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:C.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"Topic Not Found"})}):C.jsxs("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:[C.jsx("div",{className:"text-6xl mb-4",children:"👉"}),C.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3",children:"Select a Topic"}),C.jsx("p",{className:"text-gray-600 text-lg",children:"Choose a topic to view questions and answers."})]}):C.jsxs("div",{className:"content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto",children:[C.jsx("div",{className:"text-6xl mb-4",children:"📚"}),C.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3",children:"Welcome to Interview Prep"}),C.jsx("p",{className:"text-gray-600 text-lg",children:"Choose a subject from the sidebar to get started."})]})}const sv={id:"js-basics",name:"Basics",questions:[{id:"q1",question:"What are the different data types in JavaScript?",answer:"JavaScript has 8 data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt, and Object. Primitive types are immutable, while objects are mutable reference types.",codeSnippets:[{language:"javascript",code:`// Primitive types
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
}`}]}]},ov={id:"js-async",name:"Asynchronous Programming",questions:[{id:"q6",question:"What is a Promise in JavaScript?",answer:"A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, or rejected.",codeSnippets:[{language:"javascript",code:`const promise = new Promise((resolve, reject) => {
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
}`}]}]},dv={id:"js-closures",name:"Closures & Scope",questions:[{id:"q23",question:"What is a closure in JavaScript?",answer:"A closure is a function that has access to variables in its outer scope even after the outer function has returned. Functions form closures around the data they need.",codeSnippets:[{language:"javascript",code:`// Simple closure
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
// inner -> middle -> outer -> global`}]}]},fv={id:"js-this",name:"'this' Binding & Objects",questions:[{id:"q25",question:"What is 'this' in JavaScript and how is it determined?",answer:"'this' is a keyword that refers to the object context. Its value is determined by HOW a function is called: as method (object), function, constructor, or with call/apply/bind.",codeSnippets:[{language:"javascript",code:`// 1. Method call - 'this' is the object
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
Array.prototype.forEach.call(arrayLike, item => console.log(item));`}]}]},mv={id:"js-prototypes",name:"Prototypes & Inheritance",questions:[{id:"q27",question:"What are prototypes in JavaScript?",answer:"Prototypes are objects that other objects can inherit properties and methods from. Every object has a prototype ([[Prototype]]). Objects delegate to their prototype when a property is not found.",codeSnippets:[{language:"javascript",code:`// Prototype chain
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

// Both are equivalent - classes are syntactic sugar over prototypes`}]}]},pv={id:"javascript",name:"JavaScript",topics:[sv,ov,dv,fv,mv]},vv={id:"react-basics",name:"Basics",questions:[{id:"q11",question:"What are React hooks?",answer:"Hooks are functions that let you use state and other React features in functional components. Common hooks are useState, useEffect, useContext, and useReducer.",codeSnippets:[{language:"jsx",code:`import { useState, useEffect } from 'react';

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
}`}]}]},hv={id:"react-hooks",name:"Hooks Deep Dive",questions:[{id:"q16",question:"What is the useState hook and how does it work?",answer:"useState is a React hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.",codeSnippets:[{language:"jsx",code:`import { useState } from 'react';

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
}`}]}]},yv={id:"react-performance",name:"Performance Optimization",questions:[{id:"q21",question:"What is React.memo and when should you use it?",answer:"React.memo is a higher-order component that memoizes a component. It prevents re-renders if props haven't changed. Use it for expensive components that receive same props frequently.",codeSnippets:[{language:"jsx",code:`// Without memo - re-renders even if props are same
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
// useCallback - function passed to memoized child components`}]}]},gv={id:"react-unit-testing",name:"Unit Testing",questions:[{id:"q31",question:"What is React Testing Library and how does it differ from Enzyme?",answer:"React Testing Library is a modern testing utility that encourages testing components from a user's perspective. It queries the DOM using user-facing selectors (text, roles, labels). Enzyme tests component internals (state, props) and implementation details. React Testing Library is now the recommended approach as it prevents testing implementation details and ensures your tests resemble actual user interactions.",codeSnippets:[{language:"javascript",code:`// React Testing Library - User-centric approach
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
});`}]}]},bv={id:"react",name:"React",topics:[vv,hv,yv,gv]},Sv={id:"csharp-creational",name:"Creational Patterns",questions:[{id:"q1",question:"What is the Singleton pattern and how do you implement it in C#?",answer:"The Singleton pattern ensures a class has only one instance and provides a global point of access to it. It's useful for centralized management of resources like database connections, logging, or configuration. There are multiple implementation approaches with different thread-safety guarantees.",codeSnippets:[{language:"csharp",code:`// Eager initialization - Thread-safe
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
rasterCircle.Draw(); // Raster rendering circle...`}]}]},Tv={id:"csharp-behavioral",name:"Behavioral Patterns",questions:[{id:"q11",question:"What is the Observer pattern and how do you implement it in C#?",answer:"The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically. In C#, you can use delegates, events, or implement IObserver/IObservable.",codeSnippets:[{language:"csharp",code:`// Using Events and Delegates
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
manager.Handle(new ExpenseRequest { Amount = 50000 }); // CEO approves`}]}]},Ev={id:"csharp",name:"C# Design Patterns",topics:[Sv,Cv,Tv]},xv={id:"microservices-communication",name:"Service Communication",questions:[{id:"q1",question:"What is the API Gateway pattern and why is it important in microservices?",answer:"The API Gateway pattern provides a single entry point for all client requests to a microservices architecture. It handles request routing, protocol translation, authentication, rate limiting, and response aggregation. It simplifies client code and provides a facade over complex microservices.",codeSnippets:[{language:"csharp",code:`// API Gateway using middleware
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
}`}]}]},Av={id:"microservices-resilience",name:"Resilience Patterns",questions:[{id:"q1",question:"What is the Circuit Breaker pattern and how does it prevent cascading failures?",answer:"The Circuit Breaker pattern monitors for failures and temporarily stops requests to a failing service. It has three states: Closed (normal), Open (blocking requests), and Half-Open (testing recovery). Prevents cascading failures and allows services to recover gracefully.",codeSnippets:[{language:"csharp",code:`// Circuit Breaker Implementation
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
);`}]}]},Ov={id:"microservices-data",name:"Data Management",questions:[{id:"q1",question:"What is the Database per Service pattern and its advantages/disadvantages?",answer:"The Database per Service pattern assigns each microservice its own database, ensuring loose coupling and independent scaling. Advantages: autonomy, technology flexibility, easier scaling. Disadvantages: distributed transactions, data consistency challenges, cross-service queries.",codeSnippets:[{language:"csharp",code:`// Database per Service Pattern
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
}`}]}]},_v={id:"microservices",name:"Microservices",topics:[xv,Av,Ov]},or=[pv,bv,Ev,_v];function Dv(){const[x,Z]=Jt.useState(null),[j,m]=Jt.useState(null),[M,B]=Jt.useState(!0),W=oe=>{Z(oe);const O=or.find(E=>E.id===oe);O&&O.topics.length>0?m(O.topics[0].id):m(null)};return Jt.useEffect(()=>{const oe=document.querySelector(".content-area");oe&&(oe.scrollTop=0)},[j]),C.jsxs("div",{className:"app",children:[C.jsx(nv,{subjects:or,selectedSubject:x,selectedTopic:j,onSubjectSelect:W,onTopicSelect:m,isOpen:M,onToggle:()=>B(!M)}),C.jsx(rv,{subjects:or,selectedSubject:x,selectedTopic:j})]})}lv.createRoot(document.getElementById("root")).render(C.jsx(Jt.StrictMode,{children:C.jsx(Dv,{})}));
