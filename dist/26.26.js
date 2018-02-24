webpackJsonp([26,27],{

/***/ 720:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			};
		},
	
		methods: {
			onSubmit: function onSubmit() {
				console.log('submit!');
			}
		}
	};

/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(62)(
	  /* script */
	  __webpack_require__(720),
	  /* template */
	  __webpack_require__(1041),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },

/***/ 1041:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('el-form', {
	    ref: "form",
	    staticStyle: {
	      "margin": "20px",
	      "width": "60%",
	      "min-width": "600px"
	    },
	    attrs: {
	      "model": _vm.form,
	      "label-width": "80px"
	    },
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.onSubmit($event)
	      }
	    }
	  }, [_c('el-form-item', {
	    attrs: {
	      "label": "活动名称"
	    }
	  }, [_c('el-input', {
	    model: {
	      value: (_vm.form.name),
	      callback: function($$v) {
	        _vm.form.name = $$v
	      },
	      expression: "form.name"
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "label": "活动区域"
	    }
	  }, [_c('el-select', {
	    attrs: {
	      "placeholder": "请选择活动区域"
	    },
	    model: {
	      value: (_vm.form.region),
	      callback: function($$v) {
	        _vm.form.region = $$v
	      },
	      expression: "form.region"
	    }
	  }, [_c('el-option', {
	    attrs: {
	      "label": "区域一",
	      "value": "shanghai"
	    }
	  }), _vm._v(" "), _c('el-option', {
	    attrs: {
	      "label": "区域二",
	      "value": "beijing"
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "label": "活动时间"
	    }
	  }, [_c('el-col', {
	    attrs: {
	      "span": 11
	    }
	  }, [_c('el-date-picker', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "type": "date",
	      "placeholder": "选择日期"
	    },
	    model: {
	      value: (_vm.form.date1),
	      callback: function($$v) {
	        _vm.form.date1 = $$v
	      },
	      expression: "form.date1"
	    }
	  })], 1), _vm._v(" "), _c('el-col', {
	    staticClass: "line",
	    attrs: {
	      "span": 2
	    }
	  }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 11
	    }
	  }, [_c('el-time-picker', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "type": "fixed-time",
	      "placeholder": "选择时间"
	    },
	    model: {
	      value: (_vm.form.date2),
	      callback: function($$v) {
	        _vm.form.date2 = $$v
	      },
	      expression: "form.date2"
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "label": "即时配送"
	    }
	  }, [_c('el-switch', {
	    attrs: {
	      "on-text": "",
	      "off-text": ""
	    },
	    model: {
	      value: (_vm.form.delivery),
	      callback: function($$v) {
	        _vm.form.delivery = $$v
	      },
	      expression: "form.delivery"
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "label": "活动性质"
	    }
	  }, [_c('el-checkbox-group', {
	    model: {
	      value: (_vm.form.type),
	      callback: function($$v) {
	        _vm.form.type = $$v
	      },
	      expression: "form.type"
	    }
	  }, [_c('el-checkbox', {
	    attrs: {
	      "label": "美食/餐厅线上活动",
	      "name": "type"
	    }
	  }), _vm._v(" "), _c('el-checkbox', {
	    attrs: {
	      "label": "地推活动",
	      "name": "type"
	    }
	  }), _vm._v(" "), _c('el-checkbox', {
	    attrs: {
	      "label": "线下主题活动",
	      "name": "type"
	    }
	  }), _vm._v(" "), _c('el-checkbox', {
	    attrs: {
	      "label": "单纯品牌曝光",
	      "name": "type"
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "label": "特殊资源"
	    }
	  }, [_c('el-radio-group', {
	    model: {
	      value: (_vm.form.resource),
	      callback: function($$v) {
	        _vm.form.resource = $$v
	      },
	      expression: "form.resource"
	    }
	  }, [_c('el-radio', {
	    attrs: {
	      "label": "线上品牌商赞助"
	    }
	  }), _vm._v(" "), _c('el-radio', {
	    attrs: {
	      "label": "线下场地免费"
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "label": "活动形式"
	    }
	  }, [_c('el-input', {
	    attrs: {
	      "type": "textarea"
	    },
	    model: {
	      value: (_vm.form.desc),
	      callback: function($$v) {
	        _vm.form.desc = $$v
	      },
	      expression: "form.desc"
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    }
	  }, [_vm._v("立即创建")]), _vm._v(" "), _c('el-button', {
	    nativeOn: {
	      "click": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_vm._v("取消")])], 1)], 1)
	},staticRenderFns: []}

/***/ }

});
//# sourceMappingURL=26.26.js.map