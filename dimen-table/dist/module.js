define(["@grafana/data","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./TablePanel.tsx":
/*!************************!*\
  !*** ./TablePanel.tsx ***!
  \************************/
/*! exports provided: TablePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePanel", function() { return TablePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);






var TablePanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TablePanel, _super);

  function TablePanel(props) {
    var _this = _super.call(this, props) || this;

    _this.onColumnResize = function (fieldDisplayName, width) {
      var fieldConfig = _this.props.fieldConfig;
      var overrides = fieldConfig.overrides;
      var matcherId = _grafana_data__WEBPACK_IMPORTED_MODULE_3__["FieldMatcherID"].byName;
      var propId = 'custom.width'; // look for existing override

      var override = overrides.find(function (o) {
        return o.matcher.id === matcherId && o.matcher.options === fieldDisplayName;
      });

      if (override) {
        // look for existing property
        var property = override.properties.find(function (prop) {
          return prop.id === propId;
        });

        if (property) {
          property.value = width;
        } else {
          override.properties.push({
            id: propId,
            value: width
          });
        }
      } else {
        overrides.push({
          matcher: {
            id: matcherId,
            options: fieldDisplayName
          },
          properties: [{
            id: propId,
            value: width
          }]
        });
      }

      _this.props.onFieldConfigChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fieldConfig), {
        overrides: overrides
      }));
    };

    _this.onSortByChange = function (sortBy) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        sortBy: sortBy
      }));
    };

    _this.onChangeTableSelection = function (val) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        frameIndex: val.value || 0
      })); // Force a redraw -- but no need to re-query


      _this.forceUpdate();
    };

    return _this;
  }

  TablePanel.prototype.renderTable = function (frame, width, height) {
    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      height: height,
      width: width,
      data: frame,
      noHeader: !options.showHeader,
      resizable: true,
      initialSortBy: options.sortBy,
      onSortByChange: this.onSortByChange,
      onColumnResize: this.onColumnResize
    });
  };

  TablePanel.prototype.getCurrentFrameIndex = function () {
    var _a;

    var _b = this.props,
        data = _b.data,
        options = _b.options;
    var count = (_a = data.series) === null || _a === void 0 ? void 0 : _a.length;
    return options.frameIndex > 0 && options.frameIndex < count ? options.frameIndex : 0;
  };

  TablePanel.prototype.render = function () {
    var _this = this;

    var _a, _b, _c, _d, _e;

    var _f = this.props,
        data = _f.data,
        height = _f.height,
        width = _f.width;

    if (data.series && data.series.length > 0 && ((_d = (_c = (_b = (_a = data.series[0]) === null || _a === void 0 ? void 0 : _a.fields[0]) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.custom) === null || _d === void 0 ? void 0 : _d.isModified) !== true) {
      data.series.forEach(function (seriesItem, index) {
        var handleResult = _this.dataToFields(_this.handleData(seriesItem), seriesItem.refId);

        if (handleResult && handleResult.length > 0) {
          seriesItem.fields = handleResult;
        }
      });
    }

    var count = (_e = data.series) === null || _e === void 0 ? void 0 : _e.length;

    if (!count || count < 1) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No data");
    }

    if (count > 1) {
      // const inputHeight = config.theme.spacing.formInputHeight;
      var inputHeight = 32;
      var padding = 8 * 2;
      var currentIndex = this.getCurrentFrameIndex();
      var names = data.series.map(function (frame, index) {
        return {
          label: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_3__["getFrameDisplayName"])(frame),
          value: index
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: tableStyles.wrapper
      }, this.renderTable(data.series[currentIndex], width, height - inputHeight - padding), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: tableStyles.selectWrapper
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        options: names,
        value: names[currentIndex],
        onChange: this.onChangeTableSelection
      })));
    }

    return this.renderTable(data.series[0], width, height - 12);
  };

  TablePanel.prototype.handleData = function (seriesItem) {
    var options = this.props.options;
    var fields = seriesItem.fields,
        refId = seriesItem.refId;

    if (!fields || fields.length <= 0) {
      return null;
    }

    var data = {};
    var instanceArr = fields.filter(function (item) {
      var equalName = options.fieldNameInstance || 'instance';
      return item.name === equalName || item.name === equalName + " #" + refId;
    })[0];
    var targetArr = fields.filter(function (item) {
      var equalName = options.fieldNameTarget || 'target';
      return item.name === equalName || item.name === equalName + " #" + refId;
    })[0];
    var valueArr = fields.filter(function (item) {
      var equalName = 'Value';
      return item.name === equalName || item.name === equalName + " #" + refId;
    })[0];

    if (!instanceArr || !targetArr || !valueArr) {
      return null;
    }

    instanceArr.values.reverse();
    targetArr.values.reverse();
    valueArr.values.reverse();
    var instanceValuesArr = instanceArr.values.toArray();
    var targetValuesArr = targetArr.values.toArray();
    var valueValuesArr = valueArr.values.toArray();
    var lengthMin = Math.min(instanceValuesArr.length, 100000);

    var _loop_1 = function _loop_1(index) {
      var item = instanceValuesArr[index];

      if (Array.isArray(data[item])) {
        var found = data[item].find(function (dataItem) {
          return dataItem[0] === targetValuesArr[index] && dataItem[1] === valueValuesArr[index];
        });

        if (found) {
          return "continue";
        }

        data[item].push([targetValuesArr[index], valueValuesArr[index]]);
      } else {
        data[item] = [[targetValuesArr[index], valueValuesArr[index]]];
      }
    };

    for (var index = 0; index < lengthMin; index++) {
      _loop_1(index);
    }

    var dataKeys = Object.keys(data);

    var _loop_2 = function _loop_2(i) {
      for (var j = 0; j < dataKeys.length; j++) {
        if (i === j) {
          continue;
        }

        data[dataKeys[j]].forEach(function (itemJ) {
          var found = data[dataKeys[i]].find(function (itemI) {
            return itemI[0] === itemJ[0];
          });

          if (!found) {
            data[dataKeys[i]].push([itemJ[0], '-']);
          }
        });
      }
    };

    for (var i = 0; i < dataKeys.length; i++) {
      _loop_2(i);
    }

    for (var i = 0; i < dataKeys.length; i++) {
      data[dataKeys[i]] = data[dataKeys[i]].sort(function (a, b) {
        return a[0] - b[0];
      });
    }

    return data;
  };

  TablePanel.prototype.dataToFields = function (data, refId) {
    if (refId === void 0) {
      refId = ' ';
    }

    if (!data) {
      return [];
    }

    var result = [];
    var dataKeys = Object.keys(data);
    dataKeys = dataKeys.sort();

    for (var i = 0; i < dataKeys.length; i++) {
      result.push({
        config: {
          custom: {
            isModified: true
          },
          filterable: false
        },
        name: dataKeys[i],
        values: new _grafana_data__WEBPACK_IMPORTED_MODULE_3__["ArrayVector"](data[dataKeys[i]].map(function (item) {
          return item[1];
        })),
        type: 'string'
      });
    }

    result.unshift({
      config: {
        custom: {
          isModified: true
        },
        filterable: false
      },
      name: refId,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_3__["ArrayVector"](data[dataKeys[0]].map(function (item) {
        return item[0];
      })),
      type: 'string'
    });
    return result;
  };

  return TablePanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


var tableStyles = {
  wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n  "], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n  "]))),
  selectWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    padding: 8px;\n  "], ["\n    padding: 8px;\n  "])))
};
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TablePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablePanel */ "./TablePanel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);

 // import { tablePanelChangedHandler, tableMigrationHandler } from './migrations';


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_TablePanel__WEBPACK_IMPORTED_MODULE_1__["TablePanel"]) // .setPanelChangeHandler(tablePanelChangedHandler)
// .setMigrationHandler(tableMigrationHandler)
.setNoPadding().useFieldConfig({
  useCustomConfig: function useCustomConfig(builder) {
    builder.addNumberInput({
      path: 'width',
      name: 'Column width',
      settings: {
        placeholder: 'auto',
        min: 20,
        max: 300
      },
      shouldApply: function shouldApply() {
        return true;
      }
    }).addRadio({
      path: 'align',
      name: 'Column alignment',
      settings: {
        options: [{
          label: 'auto',
          value: null
        }, {
          label: 'left',
          value: 'left'
        }, {
          label: 'center',
          value: 'center'
        }, {
          label: 'right',
          value: 'right'
        }]
      },
      defaultValue: null
    }).addSelect({
      path: 'displayMode',
      name: 'Cell display mode',
      description: 'Color text, background, show as gauge, etc',
      settings: {
        options: [{
          value: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TableCellDisplayMode"].Auto,
          label: 'Auto'
        }, {
          value: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TableCellDisplayMode"].ColorText,
          label: 'Color text'
        }, {
          value: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TableCellDisplayMode"].ColorBackground,
          label: 'Color background'
        }, {
          value: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TableCellDisplayMode"].GradientGauge,
          label: 'Gradient gauge'
        }, {
          value: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TableCellDisplayMode"].LcdGauge,
          label: 'LCD gauge'
        }, {
          value: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TableCellDisplayMode"].JSONView,
          label: 'JSON View'
        }]
      }
    });
  }
}).setPanelOptions(function (builder) {
  builder.addBooleanSwitch({
    path: 'showHeader',
    name: 'Show header',
    description: "To display table's header or not to display",
    defaultValue: true
  }).addTextInput({
    path: 'fieldNameInstance',
    name: 'Instance field name',
    settings: {
      placeholder: 'instance'
    }
  }).addTextInput({
    path: 'fieldNameTarget',
    name: 'Target field name',
    settings: {
      placeholder: 'target'
    }
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map