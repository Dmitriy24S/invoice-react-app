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

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n// import { ReactComponent as DarkThemeIcon } from \"../images/icon-moon.svg\";\n// import { ReactComponent as LightThemeIcon } from \"../images/icon-sun.svg\";\nvar Header = function(param) {\n    var darkTheme = param.darkTheme, setDarkTheme = param.setDarkTheme;\n    var toggleDarkTheme = function() {\n        setDarkTheme(function(prevTheme) {\n            return !prevTheme;\n        });\n    };\n    return(// bg-[#1e2139] - header bg?\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-indigo-900 bg-opacity-40 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header-content max-w-5xl mx-auto flex justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo-container w-16 h-16 rounded-r-2xl overflow-hidden bg-violet-500 flex justify-center items-center relative after:h-3/6 after:bg-white after:opacity-20 after:w-full after:absolute after:bottom-0 after:rounded-tl-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/images/logo.svg\",\n                        alt: \"Logo\",\n                        width: 28,\n                        height: 26\n                    }, void 0, false, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            \"aria-label\": \"toggle dark theme\",\n                            onClick: toggleDarkTheme,\n                            className: \"pr-6 pl-4 h-full flex items-center\",\n                            children: darkTheme ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/icon-moon.svg\",\n                                alt: \"Dark theme icon\",\n                                width: 20,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/icon-sun.svg\",\n                                alt: \"Light theme icon\",\n                                width: 20,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"avatar-container pl-4 pr-6 border-l border-[#716da8] h-full flex items-center justify-centercursor-pointer\",\n                            \"aria-label\": \"open profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/image-avatar.jpg\",\n                                alt: \"avatar\",\n                                width: 32,\n                                height: 32,\n                                className: \"rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUErQjtBQUNMO0FBQzFCLDZFQUE2RTtBQUM3RSw2RUFBNkU7QUFFN0UsSUFBTUUsTUFBTSxHQUFHLGdCQUFzQztRQUFuQ0MsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFlBQVksU0FBWkEsWUFBWTtJQUN2QyxJQUFNQyxlQUFlLEdBQUcsV0FBTTtRQUM1QkQsWUFBWSxDQUFDLFNBQUNFLFNBQWtCO21CQUFLLENBQUNBLFNBQVM7U0FBQSxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUNFLDRCQUE0QjtrQkFDNUIsOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFDLG9DQUFvQztrQkFDcEQsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLHVEQUF1RDs7OEJBQ3BFLDhEQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsNE5BQTZOOzhCQUUxTyw0RUFBQ1IsbURBQUs7d0JBQUNVLEdBQUcsRUFBQyxrQkFBa0I7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxLQUFLLEVBQUUsRUFBRTt3QkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OzZCQUFJOzs7Ozt5QkFDOUQ7OEJBQ04sOERBQUNKLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxtQkFBbUI7O3NDQUNoQyw4REFBQ00sUUFBTTs0QkFDTEMsWUFBVSxFQUFDLG1CQUFtQjs0QkFDOUJDLE9BQU8sRUFBRVgsZUFBZTs0QkFDeEJHLFNBQVMsRUFBQyxvQ0FBb0M7c0NBRzdDTCxTQUFTLGlCQUNSLDhEQUFDSCxtREFBSztnQ0FDSlUsR0FBRyxFQUFDLHVCQUF1QjtnQ0FDM0JDLEdBQUcsRUFBQyxpQkFBaUI7Z0NBQ3JCQyxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7O3FDQUNWLGlCQUVGLDhEQUFDYixtREFBSztnQ0FDSlUsR0FBRyxFQUFDLHNCQUFzQjtnQ0FDMUJDLEdBQUcsRUFBQyxrQkFBa0I7Z0NBQ3RCQyxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7O3FDQUNWOzs7OztpQ0FFRztzQ0FFVCw4REFBQ0MsUUFBTTs0QkFDTE4sU0FBUyxFQUFDLDRHQUE0Rzs0QkFDdEhPLFlBQVUsRUFBQyxjQUFjO3NDQUV6Qiw0RUFBQ2YsbURBQUs7Z0NBQ0pVLEdBQUcsRUFBQywwQkFBMEI7Z0NBQzlCQyxHQUFHLEVBQUMsUUFBUTtnQ0FDWkMsS0FBSyxFQUFFLEVBQUU7Z0NBQ1RDLE1BQU0sRUFBRSxFQUFFO2dDQUNWTCxTQUFTLEVBQUMsY0FBYzs7Ozs7cUNBQ3hCOzs7OztpQ0FDSzs7Ozs7O3lCQUNMOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0MsRUFDVDtDQUNIO0FBcERLTixLQUFBQSxNQUFNO0FBc0RaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBEYXJrVGhlbWVJY29uIH0gZnJvbSBcIi4uL2ltYWdlcy9pY29uLW1vb24uc3ZnXCI7XG4vLyBpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBMaWdodFRoZW1lSWNvbiB9IGZyb20gXCIuLi9pbWFnZXMvaWNvbi1zdW4uc3ZnXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGRhcmtUaGVtZSwgc2V0RGFya1RoZW1lIH06IGFueSkgPT4ge1xuICBjb25zdCB0b2dnbGVEYXJrVGhlbWUgPSAoKSA9PiB7XG4gICAgc2V0RGFya1RoZW1lKChwcmV2VGhlbWU6IGJvb2xlYW4pID0+ICFwcmV2VGhlbWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIC8vIGJnLVsjMWUyMTM5XSAtIGhlYWRlciBiZz9cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgYmctb3BhY2l0eS00MCB3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnQgbWF4LXctNXhsIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lciB3LTE2IGgtMTYgcm91bmRlZC1yLTJ4bCBvdmVyZmxvdy1oaWRkZW4gYmctdmlvbGV0LTUwMCAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYWZ0ZXI6aC0zLzYgYWZ0ZXI6Ymctd2hpdGUgYWZ0ZXI6b3BhY2l0eS0yMCBhZnRlcjp3LWZ1bGwgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6cm91bmRlZC10bC0yeGxcIj5cbiAgICAgICAgICB7LyogPExvZ28gY2xhc3NOYW1lPVwiei0xMFwiIC8+ICovfVxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiIHdpZHRoPXsyOH0gaGVpZ2h0PXsyNn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIGRhcmsgdGhlbWVcIlxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya1RoZW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHItNiBwbC00IGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIHtkYXJrVGhlbWUgPyA8RGFya1RoZW1lSWNvbiAvPiA6IDxMaWdodFRoZW1lSWNvbiAvPn0gKi99XG4gICAgICAgICAgICB7ZGFya1RoZW1lID8gKFxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb24tbW9vbi5zdmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkRhcmsgdGhlbWUgaWNvblwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb24tc3VuLnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiTGlnaHQgdGhlbWUgaWNvblwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHsvKiAjNDk0ZTZlIC0gYm9yZGVyIGJnPyAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXItY29udGFpbmVyIHBsLTQgcHItNiBib3JkZXItbCBib3JkZXItWyM3MTZkYThdIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIHByb2ZpbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ltYWdlLWF2YXRhci5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJIZWFkZXIiLCJkYXJrVGhlbWUiLCJzZXREYXJrVGhlbWUiLCJ0b2dnbGVEYXJrVGhlbWUiLCJwcmV2VGhlbWUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});