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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n// import { ReactComponent as DarkThemeIcon } from \"../images/icon-moon.svg\";\n// import { ReactComponent as LightThemeIcon } from \"../images/icon-sun.svg\";\nvar Header = function(param) {\n    var darkTheme = param.darkTheme, setDarkTheme = param.setDarkTheme;\n    var toggleDarkTheme = function() {\n        setDarkTheme(function(prevTheme) {\n            return !prevTheme;\n        });\n    };\n    return(// bg-[#1e2139] - header bg?\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-indigo-900 bg-opacity-40\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header-content max-w-5xl mx-auto flex justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo-container w-16 h-16 rounded-r-2xl overflow-hidden bg-violet-500 flex justify-center items-center relative after:h-3/6 after:bg-white after:opacity-20 after:w-full after:absolute after:bottom-0 after:rounded-tl-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/images/logo.svg\",\n                        alt: \"Logo\",\n                        width: 28,\n                        height: 26\n                    }, void 0, false, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            \"aria-label\": \"toggle dark theme\",\n                            onClick: toggleDarkTheme,\n                            className: \"pr-6 pl-4 h-full flex items-center\",\n                            children: darkTheme ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/icon-moon.svg\",\n                                alt: \"Dark theme icon\",\n                                width: 20,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/icon-sun.svg\",\n                                alt: \"Light theme icon\",\n                                width: 20,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"avatar-container pl-4 border-l border-[#716da8] h-full flex items-center justify-center pr-6 cursor-pointer\",\n                            \"aria-label\": \"open profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/image-avatar.jpg\",\n                                alt: \"avatar\",\n                                width: 32,\n                                height: 32,\n                                className: \"rounded-full w-8\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/components/Header.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUErQjtBQUNMO0FBQzFCLDZFQUE2RTtBQUM3RSw2RUFBNkU7QUFFN0UsSUFBTUUsTUFBTSxHQUFHLGdCQUFzQztRQUFuQ0MsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFlBQVksU0FBWkEsWUFBWTtJQUN2QyxJQUFNQyxlQUFlLEdBQUcsV0FBTTtRQUM1QkQsWUFBWSxDQUFDLFNBQUNFLFNBQWtCO21CQUFLLENBQUNBLFNBQVM7U0FBQSxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUNFLDRCQUE0QjtrQkFDNUIsOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFDLDZCQUE2QjtrQkFDN0MsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLHVEQUF1RDs7OEJBQ3BFLDhEQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsNE5BQTZOOzhCQUUxTyw0RUFBQ1IsbURBQUs7d0JBQUNVLEdBQUcsRUFBQyxrQkFBa0I7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxLQUFLLEVBQUUsRUFBRTt3QkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OzZCQUFJOzs7Ozt5QkFDOUQ7OEJBQ04sOERBQUNKLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxtQkFBbUI7O3NDQUNoQyw4REFBQ00sUUFBTTs0QkFDTEMsWUFBVSxFQUFDLG1CQUFtQjs0QkFDOUJDLE9BQU8sRUFBRVgsZUFBZTs0QkFDeEJHLFNBQVMsRUFBQyxvQ0FBb0M7c0NBRzdDTCxTQUFTLGlCQUNSLDhEQUFDSCxtREFBSztnQ0FDSlUsR0FBRyxFQUFDLHVCQUF1QjtnQ0FDM0JDLEdBQUcsRUFBQyxpQkFBaUI7Z0NBQ3JCQyxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7O3FDQUNWLGlCQUVGLDhEQUFDYixtREFBSztnQ0FDSlUsR0FBRyxFQUFDLHNCQUFzQjtnQ0FDMUJDLEdBQUcsRUFBQyxrQkFBa0I7Z0NBQ3RCQyxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7O3FDQUNWOzs7OztpQ0FFRztzQ0FFVCw4REFBQ0MsUUFBTTs0QkFDTE4sU0FBUyxFQUFDLDZHQUE2Rzs0QkFDdkhPLFlBQVUsRUFBQyxjQUFjO3NDQUV6Qiw0RUFBQ2YsbURBQUs7Z0NBQ0pVLEdBQUcsRUFBQywwQkFBMEI7Z0NBQzlCQyxHQUFHLEVBQUMsUUFBUTtnQ0FDWkMsS0FBSyxFQUFFLEVBQUU7Z0NBQ1RDLE1BQU0sRUFBRSxFQUFFO2dDQUNWTCxTQUFTLEVBQUMsa0JBQWtCOzs7OztxQ0FDNUI7Ozs7O2lDQUNLOzs7Ozs7eUJBQ0w7Ozs7OztpQkFDRjs7Ozs7YUFDQyxFQUNUO0NBQ0g7QUFwREtOLEtBQUFBLE1BQU07QUFzRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIERhcmtUaGVtZUljb24gfSBmcm9tIFwiLi4vaW1hZ2VzL2ljb24tbW9vbi5zdmdcIjtcbi8vIGltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIExpZ2h0VGhlbWVJY29uIH0gZnJvbSBcIi4uL2ltYWdlcy9pY29uLXN1bi5zdmdcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgZGFya1RoZW1lLCBzZXREYXJrVGhlbWUgfTogYW55KSA9PiB7XG4gIGNvbnN0IHRvZ2dsZURhcmtUaGVtZSA9ICgpID0+IHtcbiAgICBzZXREYXJrVGhlbWUoKHByZXZUaGVtZTogYm9vbGVhbikgPT4gIXByZXZUaGVtZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgLy8gYmctWyMxZTIxMzldIC0gaGVhZGVyIGJnP1xuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTkwMCBiZy1vcGFjaXR5LTQwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50IG1heC13LTV4bCBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXIgdy0xNiBoLTE2IHJvdW5kZWQtci0yeGwgb3ZlcmZsb3ctaGlkZGVuIGJnLXZpb2xldC01MDAgIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlIGFmdGVyOmgtMy82IGFmdGVyOmJnLXdoaXRlIGFmdGVyOm9wYWNpdHktMjAgYWZ0ZXI6dy1mdWxsIGFmdGVyOmFic29sdXRlIGFmdGVyOmJvdHRvbS0wIGFmdGVyOnJvdW5kZWQtdGwtMnhsXCI+XG4gICAgICAgICAgey8qIDxMb2dvIGNsYXNzTmFtZT1cInotMTBcIiAvPiAqL31cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17Mjh9IGhlaWdodD17MjZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInRvZ2dsZSBkYXJrIHRoZW1lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhcmtUaGVtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByLTYgcGwtNCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiB7ZGFya1RoZW1lID8gPERhcmtUaGVtZUljb24gLz4gOiA8TGlnaHRUaGVtZUljb24gLz59ICovfVxuICAgICAgICAgICAge2RhcmtUaGVtZSA/IChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29uLW1vb24uc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJEYXJrIHRoZW1lIGljb25cIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29uLXN1bi5zdmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkxpZ2h0IHRoZW1lIGljb25cIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7LyogIzQ5NGU2ZSAtIGJvcmRlciBiZz8gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyLWNvbnRhaW5lciBwbC00IGJvcmRlci1sIGJvcmRlci1bIzcxNmRhOF0gaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHByLTYgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gcHJvZmlsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaW1hZ2UtYXZhdGFyLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctOFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJIZWFkZXIiLCJkYXJrVGhlbWUiLCJzZXREYXJrVGhlbWUiLCJ0b2dnbGVEYXJrVGhlbWUiLCJwcmV2VGhlbWUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});