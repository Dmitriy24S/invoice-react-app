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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Invoice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Invoice(param) {\n    var invoices = param.invoices;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceId = ref[0], setInvoiceId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), invoiceInfo = ref1[0], setInvoiceInfo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setInvoiceId(router.query.id);\n        setInvoiceInfo(invoices.find(function(invoice) {\n            return invoice.id === invoiceId;\n        }));\n    }, [\n        router.query,\n        invoices,\n        invoiceId\n    ]);\n    console.log(invoiceId);\n    console.log(invoiceInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mt-8 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                passHref: true,\n                scroll: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex gap-2 items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/icon-arrow-left.svg\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        \"Go Back\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"item min-w-[18rem] w-full max-w-[20rem] bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Status\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dmitri/Documents/code/invoice-app/1/pages/invoice/[id].js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(Invoice, \"fQDKhrAPApPQKzWv3Sha2ewccvk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Invoice;\nvar _c;\n$RefreshReg$(_c, \"Invoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnZvaWNlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDVztBQUNXOztBQUVwQyxTQUFTSyxPQUFPLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTs7SUFDeEMsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLElBQWtDRyxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDSSxTQUFTLEdBQWtCSixHQUFjLEdBQWhDLEVBQUVLLFlBQVksR0FBSUwsR0FBYyxHQUFsQjtJQUM5QixJQUFzQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUE3Q00sV0FBVyxHQUFvQk4sSUFBYyxHQUFsQyxFQUFFTyxjQUFjLEdBQUlQLElBQWMsR0FBbEI7SUFFbENELGdEQUFTLENBQUMsV0FBTTtRQUNkTSxZQUFZLENBQUNGLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDQyxFQUFFLENBQUMsQ0FBQztRQUM5QkYsY0FBYyxDQUFDTCxRQUFRLENBQUNRLElBQUksQ0FBQyxTQUFDQyxPQUFPO21CQUFLQSxPQUFPLENBQUNGLEVBQUUsS0FBS0wsU0FBUztTQUFBLENBQUMsQ0FBQyxDQUFDO0tBQ3RFLEVBQUU7UUFBQ0QsTUFBTSxDQUFDSyxLQUFLO1FBQUVOLFFBQVE7UUFBRUUsU0FBUztLQUFDLENBQUMsQ0FBQztJQUV4Q1EsT0FBTyxDQUFDQyxHQUFHLENBQUNULFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsV0FBVyxDQUFDLENBQUM7SUFFekIscUJBQ0UsOERBQUNRLE1BQUk7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzBCQUN6Qiw4REFBQ25CLGtEQUFJO2dCQUFDb0IsSUFBSSxFQUFDLEdBQUc7Z0JBQUNDLFFBQVEsRUFBRSxJQUFJO2dCQUFFQyxNQUFNLEVBQUUsS0FBSzswQkFDMUMsNEVBQUNDLE1BQUk7b0JBQUNKLFNBQVMsRUFBQyx3Q0FBd0M7O3NDQUN0RCw4REFBQ0ssS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLDZCQUE2Qjs0QkFBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7O2dDQUFHO3dCQUFBLFNBRWxEOzs7Ozs7d0JBQU87Ozs7O29CQUNGOzBCQUNQLDhEQUFDQyxTQUFPO2dCQUFDUixTQUFTLEVBQUMsaUdBQWlHOztrQ0FDbEgsOERBQUNTLElBQUU7a0NBQUMsUUFBTTs7Ozs7NEJBQUs7a0NBQ2YsOERBQUNDLEdBQUM7Ozs7NEJBQUs7Ozs7OztvQkFDQzs7Ozs7O1lBQ0wsQ0FDUDtDQUNIO0dBM0J1QnhCLE9BQU87O1FBQ2RKLGtEQUFTOzs7QUFERkksS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnZvaWNlL1tpZF0uanM/OWM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludm9pY2UoeyBpbnZvaWNlcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaW52b2ljZUlkLCBzZXRJbnZvaWNlSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbnZvaWNlSW5mbywgc2V0SW52b2ljZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbnZvaWNlSWQocm91dGVyLnF1ZXJ5LmlkKTtcbiAgICBzZXRJbnZvaWNlSW5mbyhpbnZvaWNlcy5maW5kKChpbnZvaWNlKSA9PiBpbnZvaWNlLmlkID09PSBpbnZvaWNlSWQpKTtcbiAgfSwgW3JvdXRlci5xdWVyeSwgaW52b2ljZXMsIGludm9pY2VJZF0pO1xuXG4gIGNvbnNvbGUubG9nKGludm9pY2VJZCk7XG4gIGNvbnNvbGUubG9nKGludm9pY2VJbmZvKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTggcHgtNFwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj17dHJ1ZX0gc2Nyb2xsPXtmYWxzZX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaXRlbSBtaW4tdy1bMThyZW1dIHctZnVsbCBtYXgtdy1bMjByZW1dIGJnLWluZGlnby05MDAgYmctb3BhY2l0eS00MCBwLTQgcHgtNSByb3VuZGVkLWxnIG14LWF1dG9cIj5cbiAgICAgICAgPGg0PlN0YXR1czwvaDQ+XG4gICAgICAgIDxwPjwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbnZvaWNlIiwiaW52b2ljZXMiLCJyb3V0ZXIiLCJpbnZvaWNlSWQiLCJzZXRJbnZvaWNlSWQiLCJpbnZvaWNlSW5mbyIsInNldEludm9pY2VJbmZvIiwicXVlcnkiLCJpZCIsImZpbmQiLCJpbnZvaWNlIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJocmVmIiwicGFzc0hyZWYiLCJzY3JvbGwiLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0Iiwic2VjdGlvbiIsImg0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/invoice/[id].js\n"));

/***/ })

});