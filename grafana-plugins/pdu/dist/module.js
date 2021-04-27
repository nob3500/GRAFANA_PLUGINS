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
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
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

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_pdu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pdu */ "./components/pdu.tsx");


 //import { stylesFactory, useTheme } from '@grafana/ui';



var SimplePanel = function SimplePanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height; //const theme = useTheme();

  var styles = getStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_pdu__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./components/pdu.tsx":
/*!****************************!*\
  !*** ./components/pdu.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables/variables */ "./components/variables/variables.tsx");

/***/ }),

/***/ "./components/variables/variables.tsx":
/*!********************************************!*\
  !*** ./components/variables/variables.tsx ***!
  \********************************************/
/*! exports provided: Variables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variables", function() { return Variables; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Variables = function Variables(_a) {
  var fases = _a.fases,
      botones_alarmas = _a.botones_alarmas,
      datos_generales = _a.datos_generales,
      volt_corr = _a.volt_corr;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "layer4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "g13873"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "g542"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "in_volt",
    transform: "scale(1.0508 .95161)",
    x: 18.89402,
    y: 54.53159,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "9.8778px",
    fontWeight: 700,
    letterSpacing: 0,
    strokeWidth: 0.28918,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan5844",
    x: 18.89402,
    y: 54.53159,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "9.8778px",
    fontWeight: 700,
    strokeWidth: 0.28918
  }, volt_corr.in_volt)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "estado_eq",
    className: volt_corr.boton_pdu,
    fillRule: "evenodd",
    fill: "url(#linearGradient4474)",
    strokeWidth: 0.26219,
    d: "M98.066 15.757H156.101V33.808H98.066z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out_vol",
    x: 209.63374,
    y: 54.087193,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "sans-serif",
    fontSize: "3.5278px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan9221-2",
    x: 209.63374,
    y: 54.087193,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "9.8778px",
    fontWeight: 700,
    strokeWidth: 0.26458
  }, volt_corr.out_volt)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out1_tot",
    x: 217.73564,
    y: 128.04333,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "sans-serif",
    fontSize: "3.5278px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan9221",
    x: 217.73564,
    y: 128.04333,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "9.8778px",
    fontWeight: 700,
    strokeWidth: 0.26458
  }, volt_corr.corr_total)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "fase",
    transform: "scale(.98529 1.0149)",
    x: 322.01138,
    y: 45.491901,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#000",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.2742px",
    letterSpacing: 0,
    strokeWidth: 0.47057,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan3618",
    x: 322.01138,
    y: 45.491901,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.fase)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "sistema",
    transform: "scale(.98529 1.0149)",
    x: 321.79639,
    y: 53.806335,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#000",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.2742px",
    letterSpacing: 0,
    strokeWidth: 0.47057,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan526",
    x: 321.79639,
    y: 53.806335,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.sistema)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "marca",
    transform: "scale(.98529 1.0149)",
    x: 322.01138,
    y: 60.873604,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#000",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.2742px",
    letterSpacing: 0,
    strokeWidth: 0.47057,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan530",
    x: 322.01138,
    y: 60.873604,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.marca)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "modelo",
    transform: "scale(.98529 1.0149)",
    x: 322.01178,
    y: 69.359543,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#000",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.2742px",
    letterSpacing: 0,
    strokeWidth: 0.47057,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan534",
    x: 322.01178,
    y: 69.359543,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.modelo)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "ubicacion",
    transform: "scale(.98529 1.0149)",
    x: 322.01138,
    y: 77.523888,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#000",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.2742px",
    letterSpacing: 0,
    strokeWidth: 0.47057,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan583",
    x: 322.01138,
    y: 77.523888,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.ubicacion)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    id: "door_alm",
    cx: 363.57,
    cy: 139.94,
    rx: 2.5726,
    ry: 2.4137,
    fillRule: "evenodd",
    fill: "#3a3d3d",
    className: botones_alarmas.puerta_abierta.off,
    opacity: 0.88,
    paintOrder: "markers stroke fill"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    id: "alm_trip",
    cx: 363.57,
    cy: 148.04,
    rx: 2.5726,
    ry: 2.4137,
    fillRule: "evenodd",
    fill: "#3a3d3d",
    className: botones_alarmas.falla_breaker.off,
    opacity: 0.88,
    paintOrder: "markers stroke fill"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    id: "alm_modbus",
    cx: 363.57,
    cy: 156.14,
    rx: 2.5726,
    ry: 2.4137,
    fillRule: "evenodd",
    fill: "#3a3d3d",
    className: botones_alarmas.red_modbus.off,
    opacity: 0.88,
    paintOrder: "markers stroke fill"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    id: "gen_alm",
    cx: 363.57,
    cy: 131.83,
    rx: 2.5726,
    ry: 2.4137,
    fillRule: "evenodd",
    fill: "#3a3d3d",
    className: botones_alarmas.alarma_general.off,
    opacity: 0.88,
    paintOrder: "markers stroke fill"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "in1_ab_vol",
    transform: "scale(.8204 1.2189)",
    x: 564.67456,
    y: 56.122635,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan1409",
    x: 564.67456,
    y: 56.122635,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.in1_AB)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "in1_bc_vol",
    transform: "scale(.8204 1.2189)",
    x: 564.67438,
    y: 63.719894,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15444",
    x: 564.67438,
    y: 63.719894,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.in1_BC)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "in1_ca_vol",
    transform: "scale(.8204 1.2189)",
    x: 564.64783,
    y: 71.317169,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15500",
    x: 564.64783,
    y: 71.317169,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.in1_CA)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out1_ab_vol",
    transform: "scale(.8204 1.2189)",
    x: 564.4718,
    y: 78.914436,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15522",
    x: 564.4718,
    y: 78.914436,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.out1_A)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out1_bc_vol",
    transform: "scale(.8204 1.2189)",
    x: 564.4718,
    y: 86.511696,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15530",
    x: 564.4718,
    y: 86.511696,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.out1_BC)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out1_ca_vol",
    transform: "scale(.8204 1.2189)",
    x: 564.4718,
    y: 93.89193,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15552",
    x: 564.4718,
    y: 93.89193,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.out1_CA)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "neut_cur",
    transform: "scale(.8204 1.2189)",
    x: 570.33478,
    y: 124.71497,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15579",
    x: 570.33478,
    y: 124.71497,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.corriente_N)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out1_b_cur",
    transform: "scale(.8204 1.2189)",
    x: 567.63635,
    y: 109.08638,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan6833",
    x: 567.63635,
    y: 109.08638,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.out1_B)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out1_c_cur",
    transform: "scale(.8204 1.2189)",
    x: 567.63635,
    y: 116.46657,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan6839",
    x: 567.63635,
    y: 116.46657,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.out1_C)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "estado",
    x: 217.1003,
    y: 179.8784,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#000",
    fontFamily: "sans-serif",
    fontSize: "6.35px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan5848-3",
    x: 217.1003,
    y: 179.8784,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.35px",
    strokeWidth: 0.26458
  }, volt_corr.estado)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "st2",
    className: volt_corr.boton_estado,
    transform: "translate(-7.11 3.577)",
    fill: "#00990c"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path15781",
    d: "M213.68 169.15a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.684 4.01c0 1.484.62 2.96 1.684 4.01a5.86 5.86 0 004.066 1.662 5.861 5.861 0 004.066-1.662 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path2489",
    transform: "translate(123.93 125.48) scale(.14885)",
    d: "M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z",
    filter: "url(#filter2703)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path2649",
    transform: "translate(123.93 125.48) scale(.14885)",
    d: "M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z",
    filter: "url(#filter2663)"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "out1_a_cur-1",
    transform: "scale(.8204 1.2189)",
    x: 567.60449,
    y: 101.81425,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.0855px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan6827-6",
    x: 567.60449,
    y: 101.81425,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "4.9389px",
    strokeWidth: 0.26458
  }, fases.out1_A)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "pdu_nombre_on",
    transform: "scale(.83112 1.2032)",
    x: 126.49335,
    y: 23.697813,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "7.0556px",
    letterSpacing: 0,
    strokeWidth: 0.25953,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan4561",
    x: 126.49335,
    y: 23.697813,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "7.0556px",
    strokeWidth: 0.25953
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan4559",
    fill: "#fff",
    fontSize: "11.289px",
    strokeWidth: 0.25953
  }, volt_corr.nombre_pdu))))));
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimplePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimplePanel */ "./SimplePanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_SimplePanel__WEBPACK_IMPORTED_MODULE_1__["SimplePanel"]).setPanelOptions(function (builder) {
  return builder.addTextInput({
    path: 'text',
    name: 'Simple text option',
    description: 'Description of panel option',
    defaultValue: 'Default value of text input option'
  }).addBooleanSwitch({
    path: 'showSeriesCount',
    name: 'Show series counter',
    defaultValue: false
  }).addRadio({
    path: 'seriesCountSize',
    defaultValue: 'sm',
    name: 'Series counter size',
    settings: {
      options: [{
        value: 'sm',
        label: 'Small'
      }, {
        value: 'md',
        label: 'Medium'
      }, {
        value: 'lg',
        label: 'Large'
      }]
    },
    showIf: function showIf(config) {
      return config.showSeriesCount;
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