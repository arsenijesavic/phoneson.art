webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Composition/index.js":
/*!*********************************************!*\
  !*** ./src/components/Composition/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/arsenijesavic/Desktop/phoneson.art/src/components/Composition/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Composiiton = function Composiiton(_ref) {\n  var id = _ref.id,\n      slug = _ref.slug,\n      name = _ref.name,\n      compositors = _ref.compositors,\n      photo = _ref.photo,\n      description = _ref.description,\n      onClose = _ref.onClose;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"card-content-container open\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"card-content\",\n    layoutId: \"card-container-\".concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"title-container\",\n    layoutId: \"title-container-\".concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, compositors.map(function (composer, index) {\n    return __jsx(\"li\", {\n      key: index,\n      className: \"font-regular text-base text-gray-400 uppercase\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }, composer.name);\n  })), __jsx(\"h2\", {\n    className: \"font-extrabold text-4xl leading-none mt-2 text-gray-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, name)), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"card-image-container\",\n    layoutId: \"card-image-container-\".concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"card-image\",\n    src: photo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"text-gray-100 w-full\",\n    animate: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full px-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: slug,\n    className: \"block text-center mt-6 w-full mx-auto bg-green-500 hover:bg-green-400 text-white font-bold p-4 border-b-4 border-green-700 hover:border-green-500 rounded\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, \"Perform\")), __jsx(\"div\", {\n    className: \"flex flex-col sm:flex-row space-between p-4 sm:p-10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex-1 order-last sm:order-first\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, __jsx(\"h3\", {\n    className: \"text-xs uppercase\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, \"Composers:\"), __jsx(\"ul\", {\n    className: \"flex flex-row mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, compositors.map(function (composer, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: composer.slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 23\n      }\n    }, __jsx(\"div\", {\n      className: \"flex cursor-pointer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      className: \"h-16 w-16 rounded-full mr-6\",\n      src: composer.photo,\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 27\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 27\n      }\n    }, __jsx(\"p\", {\n      className: \"font-regular text-2xl text-gray-100 hover:text-indigo-500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 29\n      }\n    }, composer.name), __jsx(\"p\", {\n      className: \"font-regular text-base text-gray-500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 29\n      }\n    }, composer.country)))));\n  }))), __jsx(\"div\", {\n    className: \"flex-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    className: \"text-base sm:text-xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, description)))))));\n};\n\n_c = Composiiton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Composiiton);\n\nvar _c;\n\n$RefreshReg$(_c, \"Composiiton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb3NpdGlvbi9pbmRleC5qcz8yODg1Il0sIm5hbWVzIjpbIkNvbXBvc2lpdG9uIiwiaWQiLCJzbHVnIiwibmFtZSIsImNvbXBvc2l0b3JzIiwicGhvdG8iLCJkZXNjcmlwdGlvbiIsIm9uQ2xvc2UiLCJtYXAiLCJjb21wb3NlciIsImluZGV4IiwiY291bnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQVFkO0FBQUEsTUFQSkMsRUFPSSxRQVBKQSxFQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsV0FJSSxRQUpKQSxXQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osU0FDRSxtRUFXRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFTLEVBQUMsY0FBdEI7QUFBcUMsWUFBUSwyQkFBb0JOLEVBQXBCLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLFlBQVEsNEJBQXFCQSxFQUFyQixDQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLFdBQVcsQ0FBQ0ksR0FBWixDQUFnQixVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSxXQUNmO0FBQ0UsU0FBRyxFQUFFQSxLQURQO0FBRUUsZUFBUyxFQUFDLGdEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0QsUUFBUSxDQUFDTixJQUpaLENBRGU7QUFBQSxHQUFoQixDQURILENBSkYsRUFjRTtBQUFJLGFBQVMsRUFBQyx5REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsQ0FkRixDQURGLEVBb0JFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBUyxFQUFDLHNCQURaO0FBRUUsWUFBUSxpQ0FBMEJGLEVBQTFCLENBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsT0FBRyxFQUFFSSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FwQkYsRUEyQkUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFTLEVBQUMsc0JBQXRCO0FBQTZDLFdBQU8sTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFFSCxJQURSO0FBRUUsYUFBUyxFQUFDLDJKQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsV0FDZjtBQUFJLFNBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUVELFFBQVEsQ0FBQ1AsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGVBQVMsRUFBQyw2QkFEWjtBQUVFLFNBQUcsRUFBRU8sUUFBUSxDQUFDSixLQUZoQjtBQUdFLFNBQUcsRUFBQyxFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQywyREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dJLFFBQVEsQ0FBQ04sSUFEWixDQURGLEVBSUU7QUFBRyxlQUFTLEVBQUMsc0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHTSxRQUFRLENBQUNFLE9BRFosQ0FKRixDQU5GLENBREYsQ0FERixDQURlO0FBQUEsR0FBaEIsQ0FESCxDQUZGLENBREYsRUE0QkU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ0wsV0FBckMsQ0FERixDQTVCRixDQVhGLENBM0JGLENBREYsQ0FYRixDQURGO0FBd0ZELENBakdEOztLQUFNTixXO0FBbUdTQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvbXBvc2l0aW9uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ29tcG9zaWl0b24gPSAoe1xuICBpZCxcbiAgc2x1ZyxcbiAgbmFtZSxcbiAgY29tcG9zaXRvcnMsXG4gIHBob3RvLFxuICBkZXNjcmlwdGlvbixcbiAgb25DbG9zZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuMSB9fVxuICAgICAgICBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiBcImF1dG9cIiB9fVxuICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5XCJcbiAgICAgICAgaWQ9XCJvdmVybGF5XCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xvc2UoZmFsc2UpfVxuICAgICAgPjwvbW90aW9uLmRpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudC1jb250YWluZXIgb3BlblwiPlxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIiBsYXlvdXRJZD17YGNhcmQtY29udGFpbmVyLSR7aWR9YH0+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBsYXlvdXRJZD17YHRpdGxlLWNvbnRhaW5lci0ke2lkfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7Y29tcG9zaXRvcnMubWFwKChjb21wb3NlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXJlZ3VsYXIgdGV4dC1iYXNlIHRleHQtZ3JheS00MDAgdXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29tcG9zZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC00eGwgbGVhZGluZy1ub25lIG10LTIgdGV4dC1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2UtY29udGFpbmVyXCJcbiAgICAgICAgICAgIGxheW91dElkPXtgY2FyZC1pbWFnZS1jb250YWluZXItJHtpZH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHNyYz17cGhvdG99IC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTEwMCB3LWZ1bGxcIiBhbmltYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNFwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3NsdWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgbXQtNiB3LWZ1bGwgbXgtYXV0byBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHAtNCBib3JkZXItYi00IGJvcmRlci1ncmVlbi03MDAgaG92ZXI6Ym9yZGVyLWdyZWVuLTUwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBlcmZvcm1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5QZXJmb3JtPC9idXR0b24+ICovfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc3BhY2UtYmV0d2VlbiBwLTQgc206cC0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvcmRlci1sYXN0IHNtOm9yZGVyLWZpcnN0XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlXCI+Q29tcG9zZXJzOjwvaDM+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbXQtNlwiPlxuICAgICAgICAgICAgICAgICAge2NvbXBvc2l0b3JzLm1hcCgoY29tcG9zZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb21wb3Nlci5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHJvdW5kZWQtZnVsbCBtci02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvbXBvc2VyLnBob3RvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1yZWd1bGFyIHRleHQtMnhsIHRleHQtZ3JheS0xMDAgaG92ZXI6dGV4dC1pbmRpZ28tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcG9zZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1yZWd1bGFyIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcG9zZXIuY291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC14bFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2lpdG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Composition/index.js\n");

/***/ })

})