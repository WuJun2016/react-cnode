module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/server-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/config/router.js":
/*!*********************************!*\
  !*** ./client/config/router.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_topic_list_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/topic-list/index */ \"./client/views/topic-list/index.jsx\");\n/* harmony import */ var _views_topic_detail_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/topic-detail/index */ \"./client/views/topic-detail/index.jsx\");\n/* harmony import */ var _views_test_api_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/test/api-test */ \"./client/views/test/api-test.js\");\n\n\n\n\n\n\nconst _default = () => [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n  path: \"/\",\n  render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: \"/list\"\n  }),\n  exact: true,\n  key: \"/\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n  path: \"/list\",\n  component: _views_topic_list_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  key: \"list\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n  path: \"/detail\",\n  component: _views_topic_detail_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  key: \"detail\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n  path: \"/test\",\n  component: _views_test_api_test__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  key: \"test\"\n})];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/config/router.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/config/router.js?");

/***/ }),

/***/ "./client/server-entry.js":
/*!********************************!*\
  !*** ./client/server-entry.js ***!
  \********************************/
/*! exports provided: default, createStoreMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/App.jsx */ \"./client/views/App.jsx\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store */ \"./client/store/store.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createStoreMap\", function() { return _store_store__WEBPACK_IMPORTED_MODULE_4__[\"createStoreMap\"]; });\n\n\n\n\n // eslint-disable-line\n\n\nObject(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"useStaticRendering\"])(true);\n\nconst _default = (stores, routerContext, url) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], stores, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n  context: routerContext,\n  location: url\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_App_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default); // 此时也要抛出 <App />, 这样得到的才是html内容, 然后这还是jsx代码, 所以要打包\n\n\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/server-entry.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/server-entry.js?");

/***/ }),

/***/ "./client/store/app.state.js":
/*!***********************************!*\
  !*** ./client/store/app.state.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppState; });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\nvar _class, _descriptor, _descriptor2, _temp;\n\nfunction _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }\n\n\nlet AppState = (_class = (_temp = class AppState {\n  constructor({\n    count,\n    name\n  } = {\n    count: 0,\n    name: 'Jokcy'\n  }) {\n    _initializerDefineProperty(this, \"count\", _descriptor, this);\n\n    _initializerDefineProperty(this, \"name\", _descriptor2, this);\n\n    this.count = count;\n    this.name = name;\n  }\n\n  get msg() {\n    return `${this.name} say count is ${this.count}`;\n  }\n\n  changeName(value) {\n    this.name = value;\n  }\n\n  add() {\n    this.count += 1;\n  }\n\n  toJson() {\n    return {\n      count: this.count,\n      name: this.name\n    };\n  }\n\n}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, \"count\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, \"name\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _applyDecoratedDescriptor(_class.prototype, \"msg\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"msg\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"changeName\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"changeName\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"add\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"add\"), _class.prototype)), _class);\n\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(AppState, \"AppState\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/store/app.state.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/store/app.state.js?");

/***/ }),

/***/ "./client/store/store.js":
/*!*******************************!*\
  !*** ./client/store/store.js ***!
  \*******************************/
/*! exports provided: AppState, default, createStoreMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppState\", function() { return AppState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStoreMap\", function() { return createStoreMap; });\n/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.state */ \"./client/store/app.state.js\");\n\nconst AppState = _app_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst _default = {\n  AppState // 给服务端渲染用的\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\nconst createStoreMap = () => {\n  return {\n    appState: new AppState()\n  };\n};\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(AppState, \"AppState\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/store/store.js\");\n\n  __REACT_HOT_LOADER__.register(createStoreMap, \"createStoreMap\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/store/store.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/store/store.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/store/store.js?");

/***/ }),

/***/ "./client/views/App.jsx":
/*!******************************!*\
  !*** ./client/views/App.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/router */ \"./client/config/router.js\");\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  componentDidMount() {// do something here\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\"\n    }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/detail\"\n    }, \"\\u7965\\u60C5\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_config_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  }\n\n}\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(App, \"App\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/views/App.jsx\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/views/App.jsx?");

/***/ }),

/***/ "./client/views/test/api-test.js":
/*!***************************************!*\
  !*** ./client/views/test/api-test.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TestApi; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* eslint-disable */\n\nclass TestApi extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  getTopics() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/topics').then(resp => {\n      console.log(resp);\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n\n  login() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/user/login', {\n      accessToken: '9f554612-6b74-4af9-bc52-b0bdc5b629f4'\n    }).then(resp => {\n      console.log(resp);\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n\n  markAll() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/message/mark_all?needAccessToken=true').then(resp => {\n      console.log(resp);\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.getTopics\n    }, \"topics\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.login\n    }, \"login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.markAll\n    }, \"markAll\"));\n  }\n\n}\n/* eslint-enable */\n\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(TestApi, \"TestApi\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/views/test/api-test.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/views/test/api-test.js?");

/***/ }),

/***/ "./client/views/topic-detail/index.jsx":
/*!*********************************************!*\
  !*** ./client/views/topic-detail/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TopicDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass TopicDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentDidMount() {//  do something here\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"this is topic detail\");\n  }\n\n}\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(TopicDetail, \"TopicDetail\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/views/topic-detail/index.jsx\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/views/topic-detail/index.jsx?");

/***/ }),

/***/ "./client/views/topic-list/index.jsx":
/*!*******************************************!*\
  !*** ./client/views/topic-list/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/app.state */ \"./client/store/app.state.js\");\nvar _dec, _class, _temp;\n\n\n\n\n\n\nlet TopicList = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"inject\"])('appState'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"observer\"])(_class = (_temp = class TopicList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.changeName = (...params) => this.__changeName__REACT_HOT_LOADER__(...params);\n  }\n\n  __changeName__REACT_HOT_LOADER__(event) {\n    const {\n      value\n    } = event.target;\n    this.props.appState.changeName(value);\n  }\n\n  componentDidMount() {//  do something here\n  }\n\n  bootstrap() {\n    return new Promise(resolve => {\n      setTimeout(() => {\n        this.props.appState.count = 3;\n        resolve(true);\n      });\n    });\n  }\n\n  render() {\n    const {\n      appState\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"This is topic list\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: \"This is description\"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      onChange: this.changeName\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, appState.msg));\n  }\n\n}, _temp)) || _class) || _class);\nconst _default = TopicList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(TopicList, \"TopicList\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/views/topic-list/index.jsx\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/wj/Desktop/code/learningspace/react-cnode/client/views/topic-list/index.jsx\");\n}();\n\n;\n\n//# sourceURL=webpack:///./client/views/topic-list/index.jsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });