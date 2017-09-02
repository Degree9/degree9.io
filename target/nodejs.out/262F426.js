goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9418__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9419__i = 0, G__9419__a = new Array(arguments.length -  0);
while (G__9419__i < G__9419__a.length) {G__9419__a[G__9419__i] = arguments[G__9419__i + 0]; ++G__9419__i;}
  args = new cljs.core.IndexedSeq(G__9419__a,0,null);
} 
return G__9418__delegate.call(this,args);};
G__9418.cljs$lang$maxFixedArity = 0;
G__9418.cljs$lang$applyTo = (function (arglist__9420){
var args = cljs.core.seq(arglist__9420);
return G__9418__delegate(args);
});
G__9418.cljs$core$IFn$_invoke$arity$variadic = G__9418__delegate;
return G__9418;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9421__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9422__i = 0, G__9422__a = new Array(arguments.length -  0);
while (G__9422__i < G__9422__a.length) {G__9422__a[G__9422__i] = arguments[G__9422__i + 0]; ++G__9422__i;}
  args = new cljs.core.IndexedSeq(G__9422__a,0,null);
} 
return G__9421__delegate.call(this,args);};
G__9421.cljs$lang$maxFixedArity = 0;
G__9421.cljs$lang$applyTo = (function (arglist__9423){
var args = cljs.core.seq(arglist__9423);
return G__9421__delegate(args);
});
G__9421.cljs$core$IFn$_invoke$arity$variadic = G__9421__delegate;
return G__9421;
})()
;

return null;
});
