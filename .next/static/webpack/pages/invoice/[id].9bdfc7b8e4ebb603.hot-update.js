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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Invoice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar PaidStatus = function(param) {\n    var status = param.status;\n    // html circle/dot: &#x2022;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#33d69f] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"px-2 py-2.5 text-[#33d69f] font-bold\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"circle h-2.5 w-2.5 bg-[#33d69f] inline-block rounded-full mr-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this),\n                status\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = PaidStatus;\nvar PendingStatus = function(param) {\n    var status = param.status;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#ff8f00] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"px-2 py-2.5 text-[#ff8f00] font-bold\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"circle h-2.5 w-2.5 bg-[#ff8f00] inline-block rounded-full mr-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                status\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = PendingStatus;\nvar DraftStatus = function(param) {\n    var status = param.status;\n    return(// light theme #373b53\n    // dark theme #dfe3fa\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#dfe3fa] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"px-2 py-2.5 text-[#dfe3fa] font-bold\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"circle h-2.5 w-2.5 bg-[#dfe3fa] inline-block rounded-full mr-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                status\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this));\n};\n_c2 = DraftStatus;\nfunction Invoice(param) {\n    var invoices = param.invoices;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceId = ref[0], setInvoiceId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceInfo = ref1[0], setInvoiceInfo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setInvoiceId(router.query.id);\n        setInvoiceInfo(invoices.find(function(invoice) {\n            return invoice.id === invoiceId;\n        }));\n    // }, [router.query, invoices, invoiceId]);\n    }, [\n        invoiceId\n    ]);\n    console.log(invoiceId);\n    console.log(invoiceInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mt-8 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                passHref: true,\n                scroll: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex gap-2 items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/icon-arrow-left.svg\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        \"Go Back\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"invoice min-w-[18rem] w-full max-w-[20rem] mx-auto flex flex-col gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"payment-status-container flex items-center justify-between bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"invoice-payment-status \",\n                                children: (invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status) === \"paid\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaidStatus, {\n                                    status: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status\n                                }, void 0, false, {\n                                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this) : (invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status) === \"pending\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PendingStatus, {\n                                    status: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status\n                                }, void 0, false, {\n                                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraftStatus, {\n                                    status: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status\n                                }, void 0, false, {\n                                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"invoice-info flex flex-col bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"invoice-id\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-bold\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-indigo-400\",\n                                                children: \"#\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, this),\n                                            invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"opacity-90\",\n                                        children: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sender-adress text-slate-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.senderAddress.street\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.senderAddress.city\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.senderAddress.postCode\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.senderAddress.country\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n};\n_s(Invoice, \"fQDKhrAPApPQKzWv3Sha2ewccvk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c3 = Invoice;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"PaidStatus\");\n$RefreshReg$(_c1, \"PendingStatus\");\n$RefreshReg$(_c2, \"DraftStatus\");\n$RefreshReg$(_c3, \"Invoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1UsV0FBVyxhQUFYQSxXQUFXLFdBQUksR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxXQUFXLENBQUVHLEVBQUU7Ozs7Ozs0Q0FDZDtrREFDSiw4REFBQ1osR0FBQzt3Q0FBQ0QsU0FBUyxFQUFDLFlBQVk7a0RBQUVVLFdBQVcsYUFBWEEsV0FBVyxXQUFhLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsV0FBVyxDQUFFaUIsV0FBVzs7Ozs7NENBQUs7Ozs7OztvQ0FDcEQ7MENBQ04sOERBQUM1QixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsOEJBQThCOztrREFDM0MsOERBQUNDLEdBQUM7a0RBQUVTLFdBQVcsYUFBWEEsV0FBVyxXQUFlLEdBQTFCQSxLQUFBQSxDQUEwQixHQUExQkEsV0FBVyxDQUFFa0IsYUFBYSxDQUFDQyxNQUFNOzs7Ozs0Q0FBSztrREFDMUMsOERBQUM1QixHQUFDO2tEQUFFUyxXQUFXLGFBQVhBLFdBQVcsV0FBZSxHQUExQkEsS0FBQUEsQ0FBMEIsR0FBMUJBLFdBQVcsQ0FBRWtCLGFBQWEsQ0FBQ0UsSUFBSTs7Ozs7NENBQUs7a0RBQ3hDLDhEQUFDN0IsR0FBQztrREFBRVMsV0FBVyxhQUFYQSxXQUFXLFdBQWUsR0FBMUJBLEtBQUFBLENBQTBCLEdBQTFCQSxXQUFXLENBQUVrQixhQUFhLENBQUNHLFFBQVE7Ozs7OzRDQUFLO2tEQUM1Qyw4REFBQzlCLEdBQUM7a0RBQUVTLFdBQVcsYUFBWEEsV0FBVyxXQUFlLEdBQTFCQSxLQUFBQSxDQUEwQixHQUExQkEsV0FBVyxDQUFFa0IsYUFBYSxDQUFDSSxPQUFPOzs7Ozs0Q0FBSzs7Ozs7O29DQUN2Qzs7Ozs7OzRCQUNGOzs7Ozs7b0JBQ0U7Ozs7OztZQUNMLENBQ1A7Q0FDSDtHQXJEdUIzQixPQUFPOztRQUNkWixrREFBUzs7O0FBREZZLE1BQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW52b2ljZS9baWRdLmpzPzljNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQYWlkU3RhdHVzID0gKHsgc3RhdHVzIH0pID0+IHtcbiAgLy8gaHRtbCBjaXJjbGUvZG90OiAmI3gyMDIyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMzM2Q2OWZdIGJnLW9wYWNpdHktMTAgcm91bmRlZC1sZyB3LVs3cmVtXSBjYXBpdGFsaXplIHRleHQtY2VudGVyXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJweC0yIHB5LTIuNSB0ZXh0LVsjMzNkNjlmXSBmb250LWJvbGRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlIGgtMi41IHctMi41IGJnLVsjMzNkNjlmXSBpbmxpbmUtYmxvY2sgcm91bmRlZC1mdWxsIG1yLTJcIj48L3NwYW4+XG4gICAgICAgIHtzdGF0dXN9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgUGVuZGluZ1N0YXR1cyA9ICh7IHN0YXR1cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI2ZmOGYwMF0gYmctb3BhY2l0eS0xMCByb3VuZGVkLWxnIHctWzdyZW1dIGNhcGl0YWxpemUgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgcHktMi41IHRleHQtWyNmZjhmMDBdIGZvbnQtYm9sZFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgaC0yLjUgdy0yLjUgYmctWyNmZjhmMDBdIGlubGluZS1ibG9jayByb3VuZGVkLWZ1bGwgbXItMlwiPjwvc3Bhbj5cbiAgICAgICAge3N0YXR1c31cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IERyYWZ0U3RhdHVzID0gKHsgc3RhdHVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAvLyBsaWdodCB0aGVtZSAjMzczYjUzXG4gICAgLy8gZGFyayB0aGVtZSAjZGZlM2ZhXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI2RmZTNmYV0gYmctb3BhY2l0eS0xMCByb3VuZGVkLWxnIHctWzdyZW1dIGNhcGl0YWxpemUgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgcHktMi41IHRleHQtWyNkZmUzZmFdIGZvbnQtYm9sZFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgaC0yLjUgdy0yLjUgYmctWyNkZmUzZmFdIGlubGluZS1ibG9jayByb3VuZGVkLWZ1bGwgbXItMlwiPjwvc3Bhbj5cbiAgICAgICAge3N0YXR1c31cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludm9pY2UoeyBpbnZvaWNlcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaW52b2ljZUlkLCBzZXRJbnZvaWNlSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbnZvaWNlSW5mbywgc2V0SW52b2ljZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbnZvaWNlSWQocm91dGVyLnF1ZXJ5LmlkKTtcbiAgICBzZXRJbnZvaWNlSW5mbyhpbnZvaWNlcy5maW5kKChpbnZvaWNlKSA9PiBpbnZvaWNlLmlkID09PSBpbnZvaWNlSWQpKTtcbiAgICAvLyB9LCBbcm91dGVyLnF1ZXJ5LCBpbnZvaWNlcywgaW52b2ljZUlkXSk7XG4gIH0sIFtpbnZvaWNlSWRdKTtcblxuICBjb25zb2xlLmxvZyhpbnZvaWNlSWQpO1xuICBjb25zb2xlLmxvZyhpbnZvaWNlSW5mbyk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC04IHB4LTRcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY9e3RydWV9IHNjcm9sbD17ZmFsc2V9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLWFycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICBHbyBCYWNrXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludm9pY2UgbWluLXctWzE4cmVtXSB3LWZ1bGwgbWF4LXctWzIwcmVtXSBteC1hdXRvIGZsZXggZmxleC1jb2wgZ2FwLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LXN0YXR1cy1jb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWluZGlnby05MDAgYmctb3BhY2l0eS00MCBwLTQgcHgtNSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPGg0PlN0YXR1czwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW52b2ljZS1wYXltZW50LXN0YXR1cyBcIj5cbiAgICAgICAgICAgIHtpbnZvaWNlSW5mbz8uc3RhdHVzID09PSBcInBhaWRcIiA/IChcbiAgICAgICAgICAgICAgPFBhaWRTdGF0dXMgc3RhdHVzPXtpbnZvaWNlSW5mbz8uc3RhdHVzfSAvPlxuICAgICAgICAgICAgKSA6IGludm9pY2VJbmZvPy5zdGF0dXMgPT09IFwicGVuZGluZ1wiID8gKFxuICAgICAgICAgICAgICA8UGVuZGluZ1N0YXR1cyBzdGF0dXM9e2ludm9pY2VJbmZvPy5zdGF0dXN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8RHJhZnRTdGF0dXMgc3RhdHVzPXtpbnZvaWNlSW5mbz8uc3RhdHVzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludm9pY2UtaW5mbyBmbGV4IGZsZXgtY29sIGJnLWluZGlnby05MDAgYmctb3BhY2l0eS00MCBwLTQgcHgtNSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNlLWlkXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwXCI+Izwvc3Bhbj5cbiAgICAgICAgICAgICAge2ludm9pY2VJbmZvPy5pZH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktOTBcIj57aW52b2ljZUluZm8/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlci1hZHJlc3MgdGV4dC1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAgIDxwPntpbnZvaWNlSW5mbz8uc2VuZGVyQWRkcmVzcy5zdHJlZXR9PC9wPlxuICAgICAgICAgICAgPHA+e2ludm9pY2VJbmZvPy5zZW5kZXJBZGRyZXNzLmNpdHl9PC9wPlxuICAgICAgICAgICAgPHA+e2ludm9pY2VJbmZvPy5zZW5kZXJBZGRyZXNzLnBvc3RDb2RlfTwvcD5cbiAgICAgICAgICAgIDxwPntpbnZvaWNlSW5mbz8uc2VuZGVyQWRkcmVzcy5jb3VudHJ5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFpZFN0YXR1cyIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiUGVuZGluZ1N0YXR1cyIsIkRyYWZ0U3RhdHVzIiwiSW52b2ljZSIsImludm9pY2VzIiwicm91dGVyIiwiaW52b2ljZUlkIiwic2V0SW52b2ljZUlkIiwiaW52b2ljZUluZm8iLCJzZXRJbnZvaWNlSW5mbyIsInF1ZXJ5IiwiaWQiLCJmaW5kIiwiaW52b2ljZSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiaHJlZiIsInBhc3NIcmVmIiwic2Nyb2xsIiwiaW1nIiwic3JjIiwiYWx0Iiwic2VjdGlvbiIsImg0IiwiZGVzY3JpcHRpb24iLCJzZW5kZXJBZGRyZXNzIiwic3RyZWV0IiwiY2l0eSIsInBvc3RDb2RlIiwiY291bnRyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/invoice/[id].js\n"));

/***/ })

});