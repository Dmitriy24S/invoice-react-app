"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n// import { ReactComponent as DarkThemeIcon } from \"../images/icon-moon.svg\";\n// import { ReactComponent as LightThemeIcon } from \"../images/icon-sun.svg\";\nvar Header = function(param) {\n    var darkTheme = param.darkTheme, setDarkTheme = param.setDarkTheme;\n    var toggleDarkTheme = function() {\n        setDarkTheme(function(prevTheme) {\n            return !prevTheme;\n        });\n    };\n    return(// bg-[#1e2139] - header bg?\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-indigo-900 bg-opacity-40\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header-content max-w-5xl mx-auto flex justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo-container w-16 h-16 rounded-r-2xl overflow-hidden bg-violet-500 flex justify-center items-center relative after:h-3/6 after:bg-white after:opacity-20 after:w-full after:absolute after:bottom-0 after:rounded-tl-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/images/logo.svg\",\n                        alt: \"Logo\",\n                        width: 28,\n                        height: 26\n                    }, void 0, false, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            \"aria-label\": \"toggle dark theme\",\n                            onClick: toggleDarkTheme,\n                            className: \"pr-6 pl-4 h-full flex items-center\",\n                            children: darkTheme ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/icon-moon.svg\",\n                                alt: \"Dark theme icon\",\n                                width: 20,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/icon-sun.svg\",\n                                alt: \"Light theme icon\",\n                                width: 20,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"avatar-container pl-4 pr-6 border-l border-[#716da8] h-full flex items-center justify-centercursor-pointer\",\n                            \"aria-label\": \"open profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/image-avatar.jpg\",\n                                alt: \"avatar\",\n                                width: 32,\n                                height: 32,\n                                className: \"rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUErQjtBQUNMO0FBQzFCLDZFQUE2RTtBQUM3RSw2RUFBNkU7QUFFN0UsSUFBTUUsTUFBTSxHQUFHLGdCQUFzQztRQUFuQ0MsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFlBQVksU0FBWkEsWUFBWTtJQUN2QyxJQUFNQyxlQUFlLEdBQUcsV0FBTTtRQUM1QkQsWUFBWSxDQUFDLFNBQUNFLFNBQWtCO21CQUFLLENBQUNBLFNBQVM7U0FBQSxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUNFLDRCQUE0QjtrQkFDNUIsOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFDLDZCQUE2QjtrQkFDN0MsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLHVEQUF1RDs7OEJBQ3BFLDhEQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsNE5BQTZOOzhCQUUxTyw0RUFBQ1IsbURBQUs7d0JBQUNVLEdBQUcsRUFBQyxrQkFBa0I7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxLQUFLLEVBQUUsRUFBRTt3QkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OzZCQUFJOzs7Ozt5QkFDOUQ7OEJBQ04sOERBQUNKLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxtQkFBbUI7O3NDQUNoQyw4REFBQ00sUUFBTTs0QkFDTEMsWUFBVSxFQUFDLG1CQUFtQjs0QkFDOUJDLE9BQU8sRUFBRVgsZUFBZTs0QkFDeEJHLFNBQVMsRUFBQyxvQ0FBb0M7c0NBRzdDTCxTQUFTLGlCQUNSLDhEQUFDSCxtREFBSztnQ0FDSlUsR0FBRyxFQUFDLHVCQUF1QjtnQ0FDM0JDLEdBQUcsRUFBQyxpQkFBaUI7Z0NBQ3JCQyxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7O3FDQUNWLGlCQUVGLDhEQUFDYixtREFBSztnQ0FDSlUsR0FBRyxFQUFDLHNCQUFzQjtnQ0FDMUJDLEdBQUcsRUFBQyxrQkFBa0I7Z0NBQ3RCQyxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7O3FDQUNWOzs7OztpQ0FFRztzQ0FFVCw4REFBQ0MsUUFBTTs0QkFDTE4sU0FBUyxFQUFDLDRHQUE0Rzs0QkFDdEhPLFlBQVUsRUFBQyxjQUFjO3NDQUV6Qiw0RUFBQ2YsbURBQUs7Z0NBQ0pVLEdBQUcsRUFBQywwQkFBMEI7Z0NBQzlCQyxHQUFHLEVBQUMsUUFBUTtnQ0FDWkMsS0FBSyxFQUFFLEVBQUU7Z0NBQ1RDLE1BQU0sRUFBRSxFQUFFO2dDQUNWTCxTQUFTLEVBQUMsY0FBYzs7Ozs7cUNBQ3hCOzs7OztpQ0FDSzs7Ozs7O3lCQUNMOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0MsRUFDVDtDQUNIO0FBcERLTixLQUFBQSxNQUFNO0FBc0RaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBEYXJrVGhlbWVJY29uIH0gZnJvbSBcIi4uL2ltYWdlcy9pY29uLW1vb24uc3ZnXCI7XG4vLyBpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBMaWdodFRoZW1lSWNvbiB9IGZyb20gXCIuLi9pbWFnZXMvaWNvbi1zdW4uc3ZnXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGRhcmtUaGVtZSwgc2V0RGFya1RoZW1lIH06IGFueSkgPT4ge1xuICBjb25zdCB0b2dnbGVEYXJrVGhlbWUgPSAoKSA9PiB7XG4gICAgc2V0RGFya1RoZW1lKChwcmV2VGhlbWU6IGJvb2xlYW4pID0+ICFwcmV2VGhlbWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIC8vIGJnLVsjMWUyMTM5XSAtIGhlYWRlciBiZz9cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgYmctb3BhY2l0eS00MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudCBtYXgtdy01eGwgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyIHctMTYgaC0xNiByb3VuZGVkLXItMnhsIG92ZXJmbG93LWhpZGRlbiBiZy12aW9sZXQtNTAwICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBhZnRlcjpoLTMvNiBhZnRlcjpiZy13aGl0ZSBhZnRlcjpvcGFjaXR5LTIwIGFmdGVyOnctZnVsbCBhZnRlcjphYnNvbHV0ZSBhZnRlcjpib3R0b20tMCBhZnRlcjpyb3VuZGVkLXRsLTJ4bFwiPlxuICAgICAgICAgIHsvKiA8TG9nbyBjbGFzc05hbWU9XCJ6LTEwXCIgLz4gKi99XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezI4fSBoZWlnaHQ9ezI2fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ0b2dnbGUgZGFyayB0aGVtZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYXJrVGhlbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwci02IHBsLTQgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Lyoge2RhcmtUaGVtZSA/IDxEYXJrVGhlbWVJY29uIC8+IDogPExpZ2h0VGhlbWVJY29uIC8+fSAqL31cbiAgICAgICAgICAgIHtkYXJrVGhlbWUgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbi1tb29uLnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiRGFyayB0aGVtZSBpY29uXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbi1zdW4uc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJMaWdodCB0aGVtZSBpY29uXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgey8qICM0OTRlNmUgLSBib3JkZXIgYmc/ICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhci1jb250YWluZXIgcGwtNCBwci02IGJvcmRlci1sIGJvcmRlci1bIzcxNmRhOF0gaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gcHJvZmlsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaW1hZ2UtYXZhdGFyLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkhlYWRlciIsImRhcmtUaGVtZSIsInNldERhcmtUaGVtZSIsInRvZ2dsZURhcmtUaGVtZSIsInByZXZUaGVtZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});