"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.tsx */ \"./components/Header.tsx\");\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data.json */ \"./data/data.json\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), darkTheme = ref[0], setDarkTheme = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_data_data_json__WEBPACK_IMPORTED_MODULE_4__), invoices = ref1[0], setInvoices = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (localStorage.getItem(\"theme\") === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme:dark)\").matches) {\n            setDarkTheme(true);\n        } else {\n            setDarkTheme(false);\n            localStorage.setItem(\"theme\", \"light\");\n        }\n    }, [\n        darkTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        attribute: \"class\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main-wrapper mb-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    darkTheme: darkTheme,\n                    setDarkTheme: setDarkTheme\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, pageProps), {\n                    invoices: invoices\n                }), void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/_app.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"Tsgd76ceMC8OqfpBpACeu+eEZNE=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDQTtBQUNFO0FBQ1Q7QUFDTjs7QUFFL0IsU0FBU0ssS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7O0lBQ25DLElBQWtDTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDTSxTQUFTLEdBQWtCTixHQUFjLEdBQWhDLEVBQUVPLFlBQVksR0FBSVAsR0FBYyxHQUFsQjtJQUM5QixJQUFnQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDRSw0Q0FBSSxDQUFDLEVBQXZDTSxRQUFRLEdBQWlCUixJQUFjLEdBQS9CLEVBQUVTLFdBQVcsR0FBSVQsSUFBYyxHQUFsQjtJQUU1QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFDRVcsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxJQUN2QyxDQUFDLENBQUMsT0FBTyxJQUFJRCxZQUFZLENBQUMsSUFDekJFLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUNDLE9BQU8sRUFDMUQ7WUFDQVAsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCLE1BQU07WUFDTEEsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCRyxZQUFZLENBQUNLLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEM7S0FDRixFQUFFO1FBQUNULFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFaEIscUJBQ0UsOERBQUNSLHNEQUFhO1FBQUNrQixTQUFTLEVBQUMsT0FBTztrQkFDOUIsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7OEJBQ2pDLDhEQUFDakIsOERBQU07b0JBQUNLLFNBQVMsRUFBRUEsU0FBUztvQkFBRUMsWUFBWSxFQUFFQSxZQUFZOzs7Ozt3QkFBSTs4QkFDNUQsOERBQUNILFNBQVMsMEtBQUtDLFNBQVM7b0JBQUVHLFFBQVEsRUFBRUEsUUFBUTs7Ozs7d0JBQUk7Ozs7OztnQkFDNUM7Ozs7O1lBQ1EsQ0FDaEI7Q0FDSDtHQXpCUUwsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBMkJkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyLnRzeFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvZGF0YS5qc29uXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtkYXJrVGhlbWUsIHNldERhcmtUaGVtZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2ludm9pY2VzLCBzZXRJbnZvaWNlc10gPSB1c2VTdGF0ZShkYXRhKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwiZGFya1wiIHx8XG4gICAgICAoIShcInRoZW1lXCIgaW4gbG9jYWxTdG9yYWdlKSAmJlxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKVwiKS5tYXRjaGVzKVxuICAgICkge1xuICAgICAgc2V0RGFya1RoZW1lKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXREYXJrVGhlbWUoZmFsc2UpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgIH1cbiAgfSwgW2RhcmtUaGVtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi13cmFwcGVyIG1iLTEwXCI+XG4gICAgICAgIDxIZWFkZXIgZGFya1RoZW1lPXtkYXJrVGhlbWV9IHNldERhcmtUaGVtZT17c2V0RGFya1RoZW1lfSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGludm9pY2VzPXtpbnZvaWNlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiZGF0YSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGFya1RoZW1lIiwic2V0RGFya1RoZW1lIiwiaW52b2ljZXMiLCJzZXRJbnZvaWNlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNldEl0ZW0iLCJhdHRyaWJ1dGUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});