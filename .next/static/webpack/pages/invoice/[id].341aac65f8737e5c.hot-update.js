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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Invoice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar PaidStatus = function(param) {\n    var status = param.status;\n    // html circle/dot: &#x2022;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#33d69f] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"px-2 py-2.5 text-[#33d69f] font-bold\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"circle h-2.5 w-2.5 bg-[#33d69f] inline-block rounded-full mr-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this),\n                status\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = PaidStatus;\nvar PendingStatus = function(param) {\n    var status = param.status;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#ff8f00] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"px-2 py-2.5 text-[#ff8f00] font-bold\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"circle h-2.5 w-2.5 bg-[#ff8f00] inline-block rounded-full mr-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                status\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = PendingStatus;\nvar DraftStatus = function(param) {\n    var status = param.status;\n    return(// light theme #373b53\n    // dark theme #dfe3fa\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#dfe3fa] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"px-2 py-2.5 text-[#dfe3fa] font-bold\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"circle h-2.5 w-2.5 bg-[#dfe3fa] inline-block rounded-full mr-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                status\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this));\n};\n_c2 = DraftStatus;\nfunction Invoice(param) {\n    var invoices = param.invoices;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceId = ref[0], setInvoiceId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceInfo = ref1[0], setInvoiceInfo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setInvoiceId(router.query.id);\n        setInvoiceInfo(invoices.find(function(invoice) {\n            return invoice.id === invoiceId;\n        }));\n    // }, [router.query, invoices, invoiceId]);\n    }, [\n        invoiceId\n    ]);\n    console.log(invoiceId);\n    console.log(invoiceInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mt-8 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                passHref: true,\n                scroll: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex gap-2 items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/icon-arrow-left.svg\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        \"Go Back\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"invoice min-w-[18rem] w-full max-w-[20rem] mx-auto flex flex-col gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"payment-status-container flex items-center justify-between bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"invoice-payment-status \",\n                                children: (invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status) === \"paid\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaidStatus, {\n                                    status: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status\n                                }, void 0, false, {\n                                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this) : (invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status) === \"pending\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PendingStatus, {\n                                    status: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status\n                                }, void 0, false, {\n                                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraftStatus, {\n                                    status: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.status\n                                }, void 0, false, {\n                                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"invoice-title flex flex-col justify-between bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-indigo-400\",\n                                        children: \"#\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"opacity-90\",\n                                children: invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.description\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n};\n_s(Invoice, \"fQDKhrAPApPQKzWv3Sha2ewccvk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c3 = Invoice;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"PaidStatus\");\n$RefreshReg$(_c1, \"PendingStatus\");\n$RefreshReg$(_c2, \"DraftStatus\");\n$RefreshReg$(_c3, \"Invoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFmQSxXQUFXLENBQUVHLEVBQUU7Ozs7OztvQ0FDZDswQ0FDSiw4REFBQ1osR0FBQztnQ0FBQ0QsU0FBUyxFQUFDLFlBQVk7MENBQUVVLFdBQVcsYUFBWEEsV0FBVyxXQUFhLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsV0FBVyxDQUFFaUIsV0FBVzs7Ozs7b0NBQUs7Ozs7Ozs0QkFDcEQ7Ozs7OztvQkFDRTs7Ozs7O1lBQ0wsQ0FDUDtDQUNIO0dBN0N1QnRCLE9BQU87O1FBQ2RaLGtEQUFTOzs7QUFERlksTUFBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnZvaWNlL1tpZF0uanM/OWM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFBhaWRTdGF0dXMgPSAoeyBzdGF0dXMgfSkgPT4ge1xuICAvLyBodG1sIGNpcmNsZS9kb3Q6ICYjeDIwMjI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzMzZDY5Zl0gYmctb3BhY2l0eS0xMCByb3VuZGVkLWxnIHctWzdyZW1dIGNhcGl0YWxpemUgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgcHktMi41IHRleHQtWyMzM2Q2OWZdIGZvbnQtYm9sZFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgaC0yLjUgdy0yLjUgYmctWyMzM2Q2OWZdIGlubGluZS1ibG9jayByb3VuZGVkLWZ1bGwgbXItMlwiPjwvc3Bhbj5cbiAgICAgICAge3N0YXR1c31cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBQZW5kaW5nU3RhdHVzID0gKHsgc3RhdHVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjZmY4ZjAwXSBiZy1vcGFjaXR5LTEwIHJvdW5kZWQtbGcgdy1bN3JlbV0gY2FwaXRhbGl6ZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiBweS0yLjUgdGV4dC1bI2ZmOGYwMF0gZm9udC1ib2xkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZSBoLTIuNSB3LTIuNSBiZy1bI2ZmOGYwMF0gaW5saW5lLWJsb2NrIHJvdW5kZWQtZnVsbCBtci0yXCI+PC9zcGFuPlxuICAgICAgICB7c3RhdHVzfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgRHJhZnRTdGF0dXMgPSAoeyBzdGF0dXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vIGxpZ2h0IHRoZW1lICMzNzNiNTNcbiAgICAvLyBkYXJrIHRoZW1lICNkZmUzZmFcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjZGZlM2ZhXSBiZy1vcGFjaXR5LTEwIHJvdW5kZWQtbGcgdy1bN3JlbV0gY2FwaXRhbGl6ZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiBweS0yLjUgdGV4dC1bI2RmZTNmYV0gZm9udC1ib2xkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZSBoLTIuNSB3LTIuNSBiZy1bI2RmZTNmYV0gaW5saW5lLWJsb2NrIHJvdW5kZWQtZnVsbCBtci0yXCI+PC9zcGFuPlxuICAgICAgICB7c3RhdHVzfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW52b2ljZSh7IGludm9pY2VzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpbnZvaWNlSWQsIHNldEludm9pY2VJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ludm9pY2VJbmZvLCBzZXRJbnZvaWNlSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEludm9pY2VJZChyb3V0ZXIucXVlcnkuaWQpO1xuICAgIHNldEludm9pY2VJbmZvKGludm9pY2VzLmZpbmQoKGludm9pY2UpID0+IGludm9pY2UuaWQgPT09IGludm9pY2VJZCkpO1xuICAgIC8vIH0sIFtyb3V0ZXIucXVlcnksIGludm9pY2VzLCBpbnZvaWNlSWRdKTtcbiAgfSwgW2ludm9pY2VJZF0pO1xuXG4gIGNvbnNvbGUubG9nKGludm9pY2VJZCk7XG4gIGNvbnNvbGUubG9nKGludm9pY2VJbmZvKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTggcHgtNFwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj17dHJ1ZX0gc2Nyb2xsPXtmYWxzZX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW52b2ljZSBtaW4tdy1bMThyZW1dIHctZnVsbCBtYXgtdy1bMjByZW1dIG14LWF1dG8gZmxleCBmbGV4LWNvbCBnYXAtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3RhdHVzLWNvbnRhaW5lciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctaW5kaWdvLTkwMCBiZy1vcGFjaXR5LTQwIHAtNCBweC01IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICA8aDQ+U3RhdHVzPC9oND5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnZvaWNlLXBheW1lbnQtc3RhdHVzIFwiPlxuICAgICAgICAgICAge2ludm9pY2VJbmZvPy5zdGF0dXMgPT09IFwicGFpZFwiID8gKFxuICAgICAgICAgICAgICA8UGFpZFN0YXR1cyBzdGF0dXM9e2ludm9pY2VJbmZvPy5zdGF0dXN9IC8+XG4gICAgICAgICAgICApIDogaW52b2ljZUluZm8/LnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgPyAoXG4gICAgICAgICAgICAgIDxQZW5kaW5nU3RhdHVzIHN0YXR1cz17aW52b2ljZUluZm8/LnN0YXR1c30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxEcmFmdFN0YXR1cyBzdGF0dXM9e2ludm9pY2VJbmZvPy5zdGF0dXN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52b2ljZS10aXRsZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy1pbmRpZ28tOTAwIGJnLW9wYWNpdHktNDAgcC00IHB4LTUgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwXCI+Izwvc3Bhbj5cbiAgICAgICAgICAgIHtpbnZvaWNlSW5mbz8uaWR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktOTBcIj57aW52b2ljZUluZm8/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFpZFN0YXR1cyIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiUGVuZGluZ1N0YXR1cyIsIkRyYWZ0U3RhdHVzIiwiSW52b2ljZSIsImludm9pY2VzIiwicm91dGVyIiwiaW52b2ljZUlkIiwic2V0SW52b2ljZUlkIiwiaW52b2ljZUluZm8iLCJzZXRJbnZvaWNlSW5mbyIsInF1ZXJ5IiwiaWQiLCJmaW5kIiwiaW52b2ljZSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiaHJlZiIsInBhc3NIcmVmIiwic2Nyb2xsIiwiaW1nIiwic3JjIiwiYWx0Iiwic2VjdGlvbiIsImg0IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/invoice/[id].js\n"));

/***/ })

});