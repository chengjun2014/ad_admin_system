webpackJsonp([25,27],{

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(60)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.page-container[data-v-afc4f2d4] {\n    font-size: 20px;\n    text-align: center;\n    color: rgb(192, 204, 218);\n}\n", "", {"version":3,"sources":["/Users/chengjun/adp_front/src/views/404.vue"],"names":[],"mappings":";AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,0BAA0B;CAC7B","file":"404.vue","sourcesContent":["\n.page-container[data-v-afc4f2d4] {\n    font-size: 20px;\n    text-align: center;\n    color: rgb(192, 204, 218);\n}\n"],"sourceRoot":""}]);
	
	// exports


/***/ },

/***/ 989:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(1071)
	
	var Component = __webpack_require__(62)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(1039),
	  /* scopeId */
	  "data-v-afc4f2d4",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },

/***/ 1039:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', {
	    staticClass: "page-container"
	  }, [_vm._v("404 page not found")])
	},staticRenderFns: []}

/***/ },

/***/ 1071:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(627);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(91)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(627, function() {
				var newContent = __webpack_require__(627);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=25.25.js.map