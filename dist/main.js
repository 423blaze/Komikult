"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmosha_travel"] = self["webpackChunkmosha_travel"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Stockholm.ttf.woff */ \"./src/fonts/Stockholm.ttf.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Stockholm\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n\\n:root {\\n  --blood-red: #690801;\\n  --indigo-dye: #013c5a;\\n  --pale-silver: #d6c8bf;\\n  --rufous: #9d0000;\\n  --ochre: #d57a0b;\\n  --tumble-weed: #cead93;\\n  --black-bean: #481702;\\n  --chocolate: #713509;\\n  --sepia: #7c4a15;\\n  --flex-display: flex;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  background: var(--swiss-gray);\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 700;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 1rem;\\n  background: var(--blood-red);\\n  font-family: \\\"Stockholm\\\", sans-serif;\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n  letter-spacing: 0.1rem;\\n  text-transform: uppercase;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 1;\\n}\\n\\n.nav-bar {\\n  padding-right: 3rem;\\n}\\n\\n.nav-items {\\n  display: flex;\\n  align-items: center;\\n  gap: 2rem;\\n  list-style: none;\\n}\\n\\n.nav-item a {\\n  text-decoration: none;\\n  color: var(--pale-silver);\\n}\\n\\n.container {\\n  padding: 0 50px;\\n}\\n\\n.charc-list {\\n  display: flex;\\n  gap: 20px;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  list-style: none;\\n  padding: 0;\\n}\\n\\n.charc-list li {\\n  padding: 0;\\n}\\n\\n.like {\\n  background-color: transparent;\\n  color: blue;\\n  border: solid 1px blue;\\n}\\n\\n.like:active {\\n  background-color: darkcyan;\\n  color: blue;\\n  border: solid 1px blue;\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%) scale(0);\\n  transition: 0.3s all ease-in-out;\\n  border: 1px solid black;\\n  border-radius: 10px;\\n  z-index: 80;\\n  background-color: white;\\n  width: 80rem;\\n  max-width: 80%;\\n  height: 80vh;\\n  overflow-y: scroll;\\n  overflow-x: hidden;\\n}\\n\\n.modal.active {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n\\n.modal-header {\\n  padding: 1rem 1.5rem;\\n  display: var(--flex-display);\\n  align-items: center;\\n  justify-content: flex-end;\\n}\\n\\n.close-button {\\n  cursor: pointer;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  font-size: 3rem;\\n  font-weight: 700;\\n}\\n\\n.modal-body {\\n  display: var(--flex-display);\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.modal-img {\\n  padding: 2rem;\\n}\\n\\n.modal-name {\\n  position: relative;\\n  bottom: 2rem;\\n  left: 2rem;\\n  font-size: 1.7rem;\\n  font-weight: 900;\\n}\\n\\n.description {\\n  display: var(--flex-display);\\n  justify-content: flex-start;\\n  margin: 0 auto 20rem auto;\\n  padding: 1rem 1.5rem;\\n  font-size: 1.8rem;\\n  line-height: 1.2;\\n  letter-spacing: 0.5px;\\n}\\n\\n#overlay {\\n  position: fixed;\\n  opacity: 0;\\n  transition: 0.3s all ease-in-out;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: rgba(0, 0, 0, 0.7);\\n  pointer-events: none;\\n  backdrop-filter: blur(10px);\\n  -webkit-backdrop-filter: blur(10px);\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n}\\n\\n.comment-section {\\n  display: var(--flex-display);\\n  flex-direction: column;\\n  align-items: flex-start;\\n  margin-bottom: 1rem;\\n  position: relative;\\n  left: 27rem;\\n  bottom: 25rem;\\n}\\n\\n.comment-section input {\\n  margin-bottom: 2rem;\\n}\\n\\n.comment-section textarea {\\n  margin-bottom: 2rem;\\n  width: 30rem;\\n  max-width: 80%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mosha-travel/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://mosha-travel/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://mosha-travel/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mosha-travel/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mosha-travel/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mosha-travel/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mosha-travel/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mosha-travel/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mosha-travel/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mosha-travel/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mosha-travel/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _js_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/api */ \"./src/js/api.js\");\n/* harmony import */ var _js_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/render */ \"./src/js/render.js\");\n/* harmony import */ var _js_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/popup */ \"./src/js/popup.js\");\n/* harmony import */ var _js_commentAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/commentAPI */ \"./src/js/commentAPI.js\");\n\n\n\n\n\n\nconst fetchData = _js_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCharacters();\nfetchData.then(data => {\n  (0,_js_render__WEBPACK_IMPORTED_MODULE_2__.renderCharacters)(data.data.results);\n}\n);\n\n// get close button\ndocument.getElementById('close-button').addEventListener('click', () => {\n  const modal = document.querySelector('#modal');\n  (0,_js_popup__WEBPACK_IMPORTED_MODULE_3__.closeModal)(modal);\n}\n);\n\nconst addButton = document.getElementById('add-button');\n\naddButton.addEventListener('click', async (e) => {\n  e.preventDefault();\n  // get value from input\n  const name = document.getElementById('addName').value;\n  const description = document.getElementById('insights').value;\n  const charid = document.getElementById('charid').value;\n\n  // post to the api\n  await _js_commentAPI__WEBPACK_IMPORTED_MODULE_4__[\"default\"].postComment(charid, name, description);\n\n  // clear input\n  const form = document.getElementById('commentForm');\n  form.reset();\n\n  const getComments = _js_commentAPI__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getComments(charid);\n  getComments.then((data) => {\n    document.getElementById('comment-count').innerHTML = data.length;\n  });\n  (0,_js_render__WEBPACK_IMPORTED_MODULE_2__.renderComments)(getComments);\n});\n\n//# sourceURL=webpack://mosha-travel/./src/index.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Api)\n/* harmony export */ });\n//  marvel api\nconst url = \"https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1b4878691fe6328b46c8b8eb4bde2f9f&hash=93ebee6185894b7ebc29d9ed94f988a9\";\n\nconst characterUrl = \"https://gateway.marvel.com/v1/public/characters\";\n\nclass Api {\n  static async getCharacters() {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  }\n\n  static async getCharacter(id) {\n    const response = await fetch(`${characterUrl}/${id}?ts=1&apikey=1b4878691fe6328b46c8b8eb4bde2f9f&hash=93ebee6185894b7ebc29d9ed94f988a9`);\n    const data = await response.json();\n    return data;\n  }\n}\n\n//# sourceURL=webpack://mosha-travel/./src/js/api.js?");

/***/ }),

/***/ "./src/js/commentAPI.js":
/*!******************************!*\
  !*** ./src/js/commentAPI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommentApi)\n/* harmony export */ });\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gZumCAVMg7210Q6sIqx3/comments'\nclass CommentApi {\n  static async getComments(id) {\n    const response = await fetch(`${commentUrl}/?item_id=${id}`);\n    const data = await response.json();\n    return data;\n  }\n\n  static async postComment(id, username, comment) {\n    await fetch(`${commentUrl}?item_id=/${id}`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n        username,\n        comment,\n      }),\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://mosha-travel/./src/js/commentAPI.js?");

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst openModalButtons = document.querySelectorAll('[data-modal-target]');\nconst closeModalButtons = document.querySelectorAll('[data-close-button]');\nconst overlay = document.getElementById('overlay');\n\nopenModalButtons.forEach(button => {\n  button.addEventListener('click', () => {\n    const modal = document.querySelector('button.dataset.modalTarget');\n    openModal(modal);\n  })\n})\n\noverlay.addEventListener('click', () => {\n  const modals = document.querySelectorAll('.modal.active');\n  modals.forEach(modal => {\n    closeModal(modal);\n  })\n});\n\ncloseModalButtons.forEach(button => {\n  button.addEventListener('click', () => {\n    const modal = button.closest('.modal');\n    closeModal(modal);\n  })\n})\n\nconst openModal = modal => {\n  if (modal === null) return;\n  modal.classList.add('active');\n  overlay.classList.add('active');\n}\n\nconst closeModal = modal => {\n  if (modal === null) return;\n  modal.classList.remove('active');\n  overlay.classList.remove('active');\n}\n\n\n\n//# sourceURL=webpack://mosha-travel/./src/js/popup.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCharacters\": () => (/* binding */ renderCharacters),\n/* harmony export */   \"renderComments\": () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n/* harmony import */ var _commentAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentAPI */ \"./src/js/commentAPI.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ \"./src/js/popup.js\");\n\n\n\n\nconst charactersList = document.getElementById('charc-list');\n\nconst renderCharacters = (characters) => {\n  let html = '';\n  characters.forEach(character => {\n    if (!character.thumbnail.path.includes('image_not_available')) {\n      html += `\n      <li>\n        <img style=\"width:100%\" src=\"${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}\" alt=\"${character.name}\">\n        <p>${character.name}</p>\n        <button class=\"like\">Like</button>\n        <button data-charid=${character.id} class=\"comment comment-btn\">Comment</button>\n      </li>\n    `;\n    }\n  });\n  charactersList.innerHTML = html;\n\n  document.querySelectorAll('.comment-btn').forEach(button => {\n    button.addEventListener('click', (e) => {\n      const modal = document.querySelector('#modal');\n      (0,_popup__WEBPACK_IMPORTED_MODULE_2__.openModal)(modal);\n      const charId = e.currentTarget.dataset.charid;\n      document.getElementById('charid').value = charId;\n      //fetch from api char details using its id\n      const getCharacter = _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCharacter(charId);\n      getCharacter.then(data => {\n        const character = data.data.results[0];\n        document.getElementById('modal-img').src = `${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`;\n        // update the modal description\n        const characterDescription = document.getElementById('modal-desc');\n        if (character.description === '') {\n          document.getElementById('modal-desc').innerHTML = 'No description available for this character.';\n        }\n        else {\n          characterDescription.innerHTML = character.description;\n        }\n\n        //display the character name\n        document.getElementById('modal-name').innerHTML = character.name;\n\n        // display comments\n        document.getElementById('comment-list').innerHTML = '';\n        const getComments = _commentAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getComments(charId);\n        getComments.then(data => {\n          document.getElementById('comment-count').innerHTML = (data.length === undefined) ? 0 : data.length;\n        });\n        renderComments(getComments);\n      });\n    });\n  }); // end of comment-btn event listener\n\n}\n\nconst renderComments = (comments) => {\n  comments.then(data => {\n    console.log(data);\n    const comments = data;\n    let html = '';\n    comments.forEach(comment => {\n      html += `\n      <li>\n        <p>${comment.creation_date}: ${comment.username}: ${comment.comment}</p>\n      </li>\n    `;\n    });\n    document.getElementById('comment-list').innerHTML = html;\n  });\n}\n\n\n\n//# sourceURL=webpack://mosha-travel/./src/js/render.js?");

/***/ }),

/***/ "./src/fonts/Stockholm.ttf.woff":
/*!**************************************!*\
  !*** ./src/fonts/Stockholm.ttf.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/images/Stockholm.ttf..woff\";\n\n//# sourceURL=webpack://mosha-travel/./src/fonts/Stockholm.ttf.woff?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);