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
/* harmony import */ var _components_pqm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pqm */ "./components/pqm.tsx");
/* harmony import */ var modules_dataPQM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/dataPQM */ "./modules/dataPQM.ts");


 //import { stylesFactory, useTheme } from '@grafana/ui';




var SimplePanel = function SimplePanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height; //const theme = useTheme();

  var styles = getStyles();
  var pqm = Object(modules_dataPQM__WEBPACK_IMPORTED_MODULE_5__["default"])(data, options);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_pqm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estados: pqm.estados,
    botones_alarmas: pqm.botones_alarmas,
    datos_generales: pqm.datos_generales,
    datos_principales: pqm.datos_principales
  }));
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

/***/ "./components/pqm.tsx":
/*!****************************!*\
  !*** ./components/pqm.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_variables_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/variables/variables */ "./components/variables/variables.tsx");

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
  var estados = _a.estados,
      botones_alarmas = _a.botones_alarmas,
      datos_generales = _a.datos_generales,
      datos_principales = _a.datos_principales;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "layer6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "g1103"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "g889"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "estado_eq",
    className: datos_principales.boton_pqm,
    fillRule: "evenodd",
    fill: "url(#linearGradient4474)",
    strokeWidth: 0.26219,
    d: "M100.25 13.817H158.285V31.868H100.25z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "nom_on",
    x: 113.29808,
    y: 27.353603,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "sans-serif",
    fontSize: "9.71px",
    letterSpacing: 0,
    strokeWidth: 0.36412,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan6769",
    x: 113.29808,
    y: 27.353603,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "11.289px",
    strokeWidth: 0.36412
  }, datos_principales.nombre_pqm))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "pot_real",
    transform: "scale(1.0508 .95161)",
    x: 22.949505,
    y: 52.108124,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "sans-serif",
    fontSize: "8.4667px",
    letterSpacing: 0,
    strokeWidth: 0.28918,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan5844",
    x: 22.949505,
    y: 52.108124,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "8.8778px",
    fontWeight: 525,
    strokeWidth: 0.28918
  }, datos_principales.pot_real)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "st",
    x: 223.95804,
    y: 177.72644,
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
    id: "tspan5848",
    x: 223.95804,
    y: 177.72644,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "6.35px",
    strokeWidth: 0.26458
  }, datos_principales.text_estado)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "pow_fact",
    transform: "scale(1.0508 .95161)",
    x: 208.4012,
    y: 136.90607,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "sans-serif",
    fontSize: "12.491px",
    letterSpacing: 0,
    strokeWidth: 0.28918,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan5927",
    x: 208.4012,
    y: 136.90607,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "12.491px",
    fontWeight: 700,
    strokeWidth: 0.28918
  }, datos_principales.factor_p)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "pqm_freq",
    transform: "scale(1.0508 .95161)",
    x: 208.58806,
    y: 52.141777,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "sans-serif",
    fontSize: "5.8954px",
    letterSpacing: 0,
    strokeWidth: 0.28918,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan1960-4",
    x: 203.58806,
    y: 52.141777,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "8.8778px",
    fontWeight: 525,
    strokeWidth: 0.28918
  }, datos_principales.frecuencia)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "g876",
    className: datos_principales.boton_estado,
    fill: "#00990c"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path15781",
    d: "M212.92 170.54a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.685 4.01c0 1.484.62 2.96 1.685 4.01a5.86 5.86 0 004.066 1.661 5.861 5.861 0 004.066-1.661 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path2489",
    transform: "translate(123.17 126.88) scale(.14885)",
    d: "M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z",
    filter: "url(#filter2703)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path2649",
    transform: "translate(123.17 126.88) scale(.14885)",
    d: "M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z",
    filter: "url(#filter2663)"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "fase",
    transform: "scale(.98529 1.0149)",
    x: 325.66016,
    y: 41.864491,
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
    id: "tspan3614",
    x: 325.66016,
    y: 41.864491,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.fase)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "sistema",
    transform: "scale(.98529 1.0149)",
    x: 325.66016,
    y: 50.053391,
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
    id: "tspan3614-0",
    x: 325.66016,
    y: 50.053391,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.sistema)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "marca",
    transform: "scale(.98529 1.0149)",
    x: 325.66016,
    y: 58.516815,
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
    id: "tspan3614-4",
    x: 325.66016,
    y: 58.516815,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.marca)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "modelo",
    transform: "scale(.98529 1.0149)",
    x: 325.66016,
    y: 66.648346,
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
    id: "tspan3614-5",
    x: 325.66016,
    y: 66.648346,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.modelo)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "ubicacion",
    transform: "scale(.98529 1.0149)",
    x: 325.66016,
    y: 75.277725,
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
    id: "tspan3614-8",
    x: 325.66016,
    y: 75.277725,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.47057
  }, datos_generales.ubicacion)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    id: "pqm_modbus",
    cx: 362.56,
    cy: 145.43,
    rx: 2.5726,
    ry: 2.4137,
    className: botones_alarmas.red_modbus,
    fillRule: "evenodd",
    fill: "red",
    opacity: 0.88,
    paintOrder: "markers stroke fill"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "vol_van",
    transform: "scale(.8204 1.2189)",
    x: 569.24414,
    y: 50.169689,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan1165-7",
    x: 569.24414,
    y: 50.169689,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.volt_an)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "cur_c",
    transform: "scale(.8204 1.2189)",
    x: 569.29095,
    y: 113.79575,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15409",
    x: 569.29095,
    y: 113.79575,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.cur_c)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "pow_appt",
    transform: "scale(.8204 1.2189)",
    x: 569.34058,
    y: 129.71672,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan6736",
    x: 565.34058,
    y: 129.71672,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.p_apt_t)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "vol_vbn",
    transform: "scale(.8204 1.2189)",
    x: 569.24414,
    y: 58.0723,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan1165-7-4",
    x: 569.24414,
    y: 58.0723,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.volt_bn)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "pow_real",
    transform: "scale(.8204 1.2189)",
    x: 569.34058,
    y: 121.75623,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan6736-3",
    x: 555.34058,
    //x={569.34058}
    y: 121.75623,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.p_real_t)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "cur_b",
    transform: "scale(.8204 1.2189)",
    x: 569.29095,
    y: 105.83525,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15409-5",
    x: 569.29095,
    y: 105.83525,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.cur_b)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "cur_a",
    transform: "scale(.8204 1.2189)",
    x: 569.29095,
    y: 97.932632,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15409-5-4",
    x: 569.29095,
    y: 97.932632,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.cur_a)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "vol_vcn",
    transform: "scale(.8204 1.2189)",
    x: 569.24396,
    y: 66.032791,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan1165-7-4-4",
    x: 569.24396,
    y: 66.032791,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.volt_cn)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "vol_vab",
    transform: "scale(.8204 1.2189)",
    x: 569.29095,
    y: 74.051163,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan15409-5-4-2",
    x: 569.29095,
    y: 74.051163,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.volt_ab)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "vol_vbc",
    transform: "scale(.8204 1.2189)",
    x: 569.29095,
    y: 81.953773,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan1765",
    x: 569.29095,
    y: 81.953773,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.volt_bc)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    id: "vol_vca",
    transform: "scale(.8204 1.2189)",
    x: 569.29095,
    y: 89.914268,
    style: {
      lineHeight: 1.25
    },
    xmlSpace: "preserve",
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    letterSpacing: 0,
    strokeWidth: 0.26458,
    wordSpacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    id: "tspan1765-8",
    x: 569.29095,
    y: 89.914268,
    fill: "#fff",
    fontFamily: "Franklin Gothic Medium",
    fontSize: "5.6444px",
    strokeWidth: 0.26458
  }, estados.volt_ca)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", null)));
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
    path: 'nombre',
    name: 'Nombre',
    description: 'Nombre'
  }).addTextInput({
    path: 'fase',
    name: 'Fase',
    description: 'Fase'
  }).addTextInput({
    path: 'sistema',
    name: 'Sistema',
    description: 'Sistema dond'
  }).addTextInput({
    path: 'marca',
    name: 'Marca',
    description: 'Marca del'
  }).addTextInput({
    path: 'modelo',
    name: 'Modelo',
    description: 'Modelo'
  }).addTextInput({
    path: 'ubicacion',
    name: 'Ubicación',
    description: 'Ubicación del'
  });
});

/***/ }),

/***/ "./modules/dataPQM.ts":
/*!****************************!*\
  !*** ./modules/dataPQM.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/estadoStyles */ "./styles/estadoStyles.ts");
//import alarmaStyles from 'styles/alarmsStyles';


var dataPQM = function dataPQM(data, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20;

  console.log(options);
  console.log(data); //------------------------------------ASIGNACION DE VARIABLES-------------------------------//
  //let CURR_AVG = data.series.find(({ name }) => name?.includes('DATA.CURR_AVG.VALUE'))?.fields[1].state?.calcs?.lastNotNull

  var CURR_A = (_c = (_b = (_a = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.CURR_A.VALUE');
  })) === null || _a === void 0 ? void 0 : _a.fields[1].state) === null || _b === void 0 ? void 0 : _b.calcs) === null || _c === void 0 ? void 0 : _c.lastNotNull;
  var CURR_B = (_f = (_e = (_d = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.CURR_B.VALUE');
  })) === null || _d === void 0 ? void 0 : _d.fields[1].state) === null || _e === void 0 ? void 0 : _e.calcs) === null || _f === void 0 ? void 0 : _f.lastNotNull;
  var CURR_C = (_j = (_h = (_g = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.CURR_C.VALUE');
  })) === null || _g === void 0 ? void 0 : _g.fields[1].state) === null || _h === void 0 ? void 0 : _h.calcs) === null || _j === void 0 ? void 0 : _j.lastNotNull; //let CURR_UNB = data.series.find(({ name }) => name?.includes('DATA.CURR_UNB.VALUE'))?.fields[1].state?.calcs?.lastNotNull

  var ENY_APP = (_m = (_l = (_k = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.ENY_APP.VALUE');
  })) === null || _k === void 0 ? void 0 : _k.fields[1].state) === null || _l === void 0 ? void 0 : _l.calcs) === null || _m === void 0 ? void 0 : _m.lastNotNull; //let ENY_NEG_REACT = data.series.find(({ name }) => name?.includes('DATA.ENY_NEG_REACT.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  //let ENY_NEG_REAL = data.series.find(({ name }) => name?.includes('ENY_NEG_REAL'))?.fields[1].state?.calcs?.lastNotNull
  //let ENY_POS_REACT = data.series.find(({ name }) => name?.includes('ENY_POS_REACT'))?.fields[1].state?.calcs?.lastNotNull
  //let ENY_POS_REAL = data.series.find(({ name }) => name?.includes('ENY_POS_REAL'))?.fields[1].state?.calcs?.lastNotNull

  var FREQ = (_q = (_p = (_o = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.FREQ.VALUE');
  })) === null || _o === void 0 ? void 0 : _o.fields[1].state) === null || _p === void 0 ? void 0 : _p.calcs) === null || _q === void 0 ? void 0 : _q.lastNotNull;
  var MODBUS_ST = (_t = (_s = (_r = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.MODBUS_ST.VALUE');
  })) === null || _r === void 0 ? void 0 : _r.fields[1].state) === null || _s === void 0 ? void 0 : _s.calcs) === null || _t === void 0 ? void 0 : _t.lastNotNull;
  var APPPOW_3PHAS = (_w = (_v = (_u = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.APPPOW_3PHAS.VALUE');
  })) === null || _u === void 0 ? void 0 : _u.fields[1].state) === null || _v === void 0 ? void 0 : _v.calcs) === null || _w === void 0 ? void 0 : _w.lastNotNull;
  var POWFAC_3PHAS = (_z = (_y = (_x = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.POWFAC_3PHAS.VALUE');
  })) === null || _x === void 0 ? void 0 : _x.fields[1].state) === null || _y === void 0 ? void 0 : _y.calcs) === null || _z === void 0 ? void 0 : _z.lastNotNull; //let REACTPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.REACTPOW_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull

  var REALPOW_3PHAS = (_2 = (_1 = (_0 = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.REALPOW_3PHAS.VALUE');
  })) === null || _0 === void 0 ? void 0 : _0.fields[1].state) === null || _1 === void 0 ? void 0 : _1.calcs) === null || _2 === void 0 ? void 0 : _2.lastNotNull; //let VOL_UNB = data.series.find(({ name }) => name?.includes('DATA.VOL_UNB.VALUE'))?.fields[1].state?.calcs?.lastNotNull

  var VOL_VAB = (_5 = (_4 = (_3 = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.VOL_VAB.VALUE');
  })) === null || _3 === void 0 ? void 0 : _3.fields[1].state) === null || _4 === void 0 ? void 0 : _4.calcs) === null || _5 === void 0 ? void 0 : _5.lastNotNull;
  var VOL_VAN = (_8 = (_7 = (_6 = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.VOL_VAN.VALUE');
  })) === null || _6 === void 0 ? void 0 : _6.fields[1].state) === null || _7 === void 0 ? void 0 : _7.calcs) === null || _8 === void 0 ? void 0 : _8.lastNotNull;
  var VOL_VBC = (_11 = (_10 = (_9 = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.VOL_VBC.VALUE');
  })) === null || _9 === void 0 ? void 0 : _9.fields[1].state) === null || _10 === void 0 ? void 0 : _10.calcs) === null || _11 === void 0 ? void 0 : _11.lastNotNull;
  var VOL_VBN = (_14 = (_13 = (_12 = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.VOL_VBN.VALUE');
  })) === null || _12 === void 0 ? void 0 : _12.fields[1].state) === null || _13 === void 0 ? void 0 : _13.calcs) === null || _14 === void 0 ? void 0 : _14.lastNotNull;
  var VOL_VCA = (_17 = (_16 = (_15 = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('VOL_VCA');
  })) === null || _15 === void 0 ? void 0 : _15.fields[1].state) === null || _16 === void 0 ? void 0 : _16.calcs) === null || _17 === void 0 ? void 0 : _17.lastNotNull;
  var VOL_VCN = (_20 = (_19 = (_18 = data.series.find(function (_a) {
    var name = _a.name;
    return name === null || name === void 0 ? void 0 : name.includes('DATA.VOL_VCN.VALUE');
  })) === null || _18 === void 0 ? void 0 : _18.fields[1].state) === null || _19 === void 0 ? void 0 : _19.calcs) === null || _20 === void 0 ? void 0 : _20.lastNotNull; //-------------------------------------------------------------------------------------------//

  var pqm = {
    estados: {
      volt_an: 0,
      volt_bn: 0,
      volt_cn: 0,
      volt_ab: 0,
      volt_bc: 0,
      volt_ca: 0,
      cur_a: 0,
      cur_b: 0,
      cur_c: 0,
      p_real_t: 0,
      p_apt_t: 0
    },
    botones_alarmas: {
      red_modbus: styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion,
      volt_max: styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion,
      corr_max: styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion
    },
    datos_generales: {
      fase: '',
      marca: '',
      modelo: '',
      sistema: '',
      ubicacion: ''
    },
    datos_principales: {
      pot_real: 0,
      frecuencia: 0,
      factor_p: 0,
      boton_pqm: styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion,
      nombre_pqm: '',
      boton_estado: styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion,
      text_estado: ''
    }
  }; // --------------------------ESTADOS----------------------------------//

  pqm.estados.volt_an = Number.parseFloat(VOL_VAN === null || VOL_VAN === void 0 ? void 0 : VOL_VAN.toFixed(2));
  pqm.estados.volt_bn = Number.parseFloat(VOL_VBN === null || VOL_VBN === void 0 ? void 0 : VOL_VBN.toFixed(2));
  pqm.estados.volt_cn = Number.parseFloat(VOL_VCN === null || VOL_VCN === void 0 ? void 0 : VOL_VCN.toFixed(2));
  pqm.estados.volt_ab = Number.parseFloat(VOL_VAB === null || VOL_VAB === void 0 ? void 0 : VOL_VAB.toFixed(2));
  pqm.estados.volt_bc = Number.parseFloat(VOL_VBC === null || VOL_VBC === void 0 ? void 0 : VOL_VBC.toFixed(2));
  pqm.estados.volt_ca = Number.parseFloat(VOL_VCA === null || VOL_VCA === void 0 ? void 0 : VOL_VCA.toFixed(2));
  pqm.estados.cur_a = Number.parseFloat(CURR_A === null || CURR_A === void 0 ? void 0 : CURR_A.toFixed(2));
  pqm.estados.cur_b = Number.parseFloat(CURR_B === null || CURR_B === void 0 ? void 0 : CURR_B.toFixed(2));
  pqm.estados.cur_c = Number.parseFloat(CURR_C === null || CURR_C === void 0 ? void 0 : CURR_C.toFixed(2));
  pqm.estados.p_real_t = Number.parseFloat(ENY_APP === null || ENY_APP === void 0 ? void 0 : ENY_APP.toFixed(2));
  pqm.estados.p_apt_t = Number.parseFloat(APPPOW_3PHAS === null || APPPOW_3PHAS === void 0 ? void 0 : APPPOW_3PHAS.toFixed(2));
  /*
   let p_apt_t = APPPOW_3PHAS ; //pqm.estados.p_apt_t = APPPOW_3PHAS
   if (APPPOW_3PHAS !== undefined) {
     pqm.estados.p_apt_t = Number.parseFloat(p_apt_t.toFixed(2));
   }*/
  // --------------------------DATOS GENERALES-------------------------//

  pqm.datos_generales.fase = options.fase;
  pqm.datos_generales.sistema = options.sistema;
  pqm.datos_generales.marca = options.marca;
  pqm.datos_generales.modelo = options.modelo;
  pqm.datos_generales.ubicacion = options.ubicacion; // ----------------------BOTONES ALARMAS------------------------------//

  pqm.botones_alarmas.red_modbus = MODBUS_ST === 1 ? styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].alarma : styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion; // ---------------------- DATOS PRINCIPALES---------------------------//

  pqm.datos_principales.frecuencia = Number.parseFloat(FREQ === null || FREQ === void 0 ? void 0 : FREQ.toFixed(2));
  pqm.datos_principales.pot_real = Number.parseFloat(REALPOW_3PHAS === null || REALPOW_3PHAS === void 0 ? void 0 : REALPOW_3PHAS.toFixed(2));
  pqm.datos_principales.factor_p = Number.parseFloat(POWFAC_3PHAS === null || POWFAC_3PHAS === void 0 ? void 0 : POWFAC_3PHAS.toFixed(2));
  pqm.datos_principales.boton_estado = MODBUS_ST === 1 ? styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion : styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].ok;
  pqm.datos_principales.boton_pqm = MODBUS_ST === 1 ? styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].sinConexion : styles_estadoStyles__WEBPACK_IMPORTED_MODULE_0__["default"].ok;
  pqm.datos_principales.text_estado = MODBUS_ST === 1 ? 'ALARMADO' : 'DISPONIBLE'; // Disponible , Alarmado

  pqm.datos_principales.nombre_pqm = options.nombre;
  return pqm;
};

/* harmony default export */ __webpack_exports__["default"] = (dataPQM);

/***/ }),

/***/ "./styles/estadoStyles.ts":
/*!********************************!*\
  !*** ./styles/estadoStyles.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);



var parpadeo = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  0% { opacity: 1.0; };\n  100% { opacity: 0.0; };\n"], ["\n  0% { opacity: 1.0; };\n  100% { opacity: 0.0; };\n"])));
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["stylesFactory"])(function () {
  return {
    sinConexion: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: #999;\n    "], ["\n      fill: #999;\n    "]))),
    alarma: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: red;\n      animation: ", " 1s ease infinite;\n    "], ["\n      fill: red;\n      animation: ", " 1s ease infinite;\n    "])), parpadeo),
    ok: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: green;\n    "], ["\n      fill: green;\n    "])))
  };
});
var styles = getStyles();
/* harmony default export */ __webpack_exports__["default"] = (styles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

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