"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/invoice/[id]",{

/***/ "./pages/invoice/[id].js":
/*!*******************************!*\
  !*** ./pages/invoice/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Invoice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Invoice(param) {\n    var invoices = param.invoices;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceId = ref[0], setInvoiceId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceInfo = ref1[0], setInvoiceInfo = ref1[1];\n    useEffect(function() {\n        setInvoiceId(router.query.id);\n        setInvoiceInfo;\n    }, [\n        router.query,\n        invoices\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mt-8 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                passHref: true,\n                scroll: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex gap-2 items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/icon-arrow-left.svg\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        \"Go Back\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"item min-w-[18rem] w-full max-w-[20rem] bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Status\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(Invoice, \"fQDKhrAPApPQKzWv3Sha2ewccvk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Invoice;\nvar _c;\n$RefreshReg$(_c, \"Invoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnZvaWNlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDVztBQUNBOztBQUV6QixTQUFTSSxPQUFPLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTs7SUFDeEMsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLElBQWtDRSxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDSSxTQUFTLEdBQWtCSixHQUFjLEdBQWhDLEVBQUVLLFlBQVksR0FBSUwsR0FBYyxHQUFsQjtJQUM5QixJQUFzQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUE3Q00sV0FBVyxHQUFvQk4sSUFBYyxHQUFsQyxFQUFFTyxjQUFjLEdBQUlQLElBQWMsR0FBbEI7SUFFbENRLFNBQVMsQ0FBQyxXQUFNO1FBQ2RILFlBQVksQ0FBQ0YsTUFBTSxDQUFDTSxLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCSCxjQUFjLENBQUM7S0FDaEIsRUFBRTtRQUFDSixNQUFNLENBQUNNLEtBQUs7UUFBRVAsUUFBUTtLQUFDLENBQUMsQ0FBQztJQUU3QixxQkFDRSw4REFBQ1MsTUFBSTtRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3pCLDhEQUFDZixrREFBSTtnQkFBQ2dCLElBQUksRUFBQyxHQUFHO2dCQUFDQyxRQUFRLEVBQUUsSUFBSTtnQkFBRUMsTUFBTSxFQUFFLEtBQUs7MEJBQzFDLDRFQUFDQyxNQUFJO29CQUFDSixTQUFTLEVBQUMsd0NBQXdDOztzQ0FDdEQsOERBQUNLLEtBQUc7NEJBQUNDLEdBQUcsRUFBQyw2QkFBNkI7NEJBQUNDLEdBQUcsRUFBQyxFQUFFOzs7OztnQ0FBRzt3QkFBQSxTQUVsRDs7Ozs7O3dCQUFPOzs7OztvQkFDRjswQkFDUCw4REFBQ0MsU0FBTztnQkFBQ0MsS0FBSyxFQUFDLHdHQUF3Rzs7a0NBQ3JILDhEQUFDQyxJQUFFO2tDQUFDLFFBQU07Ozs7OzRCQUFLO2tDQUNmLDhEQUFDQyxHQUFDOzs7OzRCQUFLOzs7Ozs7b0JBQ0M7Ozs7OztZQUNMLENBQ1A7Q0FDSDtHQXhCdUJ0QixPQUFPOztRQUNkSCxrREFBUzs7O0FBREZHLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW52b2ljZS9baWRdLmpzPzljNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW52b2ljZSh7IGludm9pY2VzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpbnZvaWNlSWQsIHNldEludm9pY2VJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ludm9pY2VJbmZvLCBzZXRJbnZvaWNlSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEludm9pY2VJZChyb3V0ZXIucXVlcnkuaWQpO1xuICAgIHNldEludm9pY2VJbmZvO1xuICB9LCBbcm91dGVyLnF1ZXJ5LCBpbnZvaWNlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibXQtOCBweC00XCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPXt0cnVlfSBzY3JvbGw9e2ZhbHNlfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi1hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgR28gQmFja1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cIml0ZW0gbWluLXctWzE4cmVtXSB3LWZ1bGwgbWF4LXctWzIwcmVtXSBiZy1pbmRpZ28tOTAwIGJnLW9wYWNpdHktNDAgcC00IHB4LTUgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICA8aDQ+U3RhdHVzPC9oND5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkludm9pY2UiLCJpbnZvaWNlcyIsInJvdXRlciIsImludm9pY2VJZCIsInNldEludm9pY2VJZCIsImludm9pY2VJbmZvIiwic2V0SW52b2ljZUluZm8iLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwibWFpbiIsImNsYXNzTmFtZSIsImhyZWYiLCJwYXNzSHJlZiIsInNjcm9sbCIsInNwYW4iLCJpbWciLCJzcmMiLCJhbHQiLCJzZWN0aW9uIiwiY2xhc3MiLCJoNCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/invoice/[id].js\n"));

/***/ })

});