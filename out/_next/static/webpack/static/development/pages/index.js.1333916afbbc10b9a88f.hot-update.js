webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Card/index.js":
/*!**************************************!*\
  !*** ./src/components/Card/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _sanity_imagetool_calculateStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/imagetool/calculateStyles */ \"./node_modules/@sanity/imagetool/calculateStyles.js\");\n/* harmony import */ var _sanity_imagetool_calculateStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_imagetool_calculateStyles__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/arsenijesavic/Desktop/phoneson.art/src/components/Card/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import ImageTool from \"@sanity/imagetool\";\n\n\n\nvar Card = function Card(_ref) {\n  var id = _ref.id,\n      name = _ref.name,\n      compositors = _ref.compositors,\n      photo = _ref.photo,\n      onClick = _ref.onClick;\n  var styles = _sanity_imagetool_calculateStyles__WEBPACK_IMPORTED_MODULE_2___default()({\n    hotspot: {\n      x: 0.4,\n      y: 0.3,\n      height: 0.6,\n      width: 0.4\n    },\n    // crop: {\n    //   left: 0.1,\n    //   right: 0.2,\n    //   top: 0.1,\n    //   bottom: 0.21,\n    // },\n    // image: { height: 100, width: 125 },\n    // container: { aspectRatio: 16 / 10 },\n    align: {\n      x: \"left\",\n      y: \"center\"\n    }\n  });\n  console.log(styles);\n  return __jsx(\"li\", {\n    className: \"card cursor-pointer\",\n    onClick: onClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card-content-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"card-content\",\n    layoutId: \"card-container-\".concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"card-image-container\",\n    layoutId: \"card-image-container-\".concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"title-container\",\n    layoutId: \"title-container-\".concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, compositors.map(function (composer, index) {\n    return __jsx(\"li\", {\n      key: index,\n      className: \"font-regular text-base text-gray-400 uppercase\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 19\n      }\n    }, composer.name);\n  })), __jsx(\"h2\", {\n    className: \"font-extrabold text-4xl leading-none mt-2 text-gray-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, name)), __jsx(\"img\", {\n    className: \"card-image\",\n    src: photo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LmpzPzY0ZWQiXSwibmFtZXMiOlsiQ2FyZCIsImlkIiwibmFtZSIsImNvbXBvc2l0b3JzIiwicGhvdG8iLCJvbkNsaWNrIiwic3R5bGVzIiwiY2FsY3VsYXRlU3R5bGVzIiwiaG90c3BvdCIsIngiLCJ5IiwiaGVpZ2h0Iiwid2lkdGgiLCJhbGlnbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjb21wb3NlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUVBOztBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQStDO0FBQUEsTUFBNUNDLEVBQTRDLFFBQTVDQSxFQUE0QztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSxNQUFsQ0MsV0FBa0MsUUFBbENBLFdBQWtDO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMxRCxNQUFNQyxNQUFNLEdBQUdDLHdFQUFlLENBQUM7QUFDN0JDLFdBQU8sRUFBRTtBQUNQQyxPQUFDLEVBQUUsR0FESTtBQUVQQyxPQUFDLEVBQUUsR0FGSTtBQUdQQyxZQUFNLEVBQUUsR0FIRDtBQUlQQyxXQUFLLEVBQUU7QUFKQSxLQURvQjtBQU83QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFNBQUssRUFBRTtBQUNMSixPQUFDLEVBQUUsTUFERTtBQUVMQyxPQUFDLEVBQUU7QUFGRTtBQWZzQixHQUFELENBQTlCO0FBcUJBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBWjtBQUVBLFNBQ0U7QUFBSSxhQUFTLEVBQUMscUJBQWQ7QUFBb0MsV0FBTyxFQUFFRCxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyxFQUFDLGNBQXRCO0FBQXFDLFlBQVEsMkJBQW9CSixFQUFwQixDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFTLEVBQUMsc0JBRFo7QUFFRSxZQUFRLGlDQUEwQkEsRUFBMUIsQ0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFTLEVBQUMsaUJBRFo7QUFFRSxZQUFRLDRCQUFxQkEsRUFBckIsQ0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxXQUFXLENBQUNhLEdBQVosQ0FBZ0IsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsV0FDZjtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLGVBQVMsRUFBQyxnREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdELFFBQVEsQ0FBQ2YsSUFKWixDQURlO0FBQUEsR0FBaEIsQ0FESCxDQUpGLEVBY0U7QUFBSSxhQUFTLEVBQUMseURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQURILENBZEYsQ0FKRixFQXVCRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE9BQUcsRUFBRUUsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixDQURGLENBREYsQ0FERixDQURGO0FBaUNELENBekREOztLQUFNSixJO0FBMkRTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vLyBpbXBvcnQgSW1hZ2VUb29sIGZyb20gXCJAc2FuaXR5L2ltYWdldG9vbFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVN0eWxlcyBmcm9tIFwiQHNhbml0eS9pbWFnZXRvb2wvY2FsY3VsYXRlU3R5bGVzXCI7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgbmFtZSwgY29tcG9zaXRvcnMsIHBob3RvLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gY2FsY3VsYXRlU3R5bGVzKHtcbiAgICBob3RzcG90OiB7XG4gICAgICB4OiAwLjQsXG4gICAgICB5OiAwLjMsXG4gICAgICBoZWlnaHQ6IDAuNixcbiAgICAgIHdpZHRoOiAwLjQsXG4gICAgfSxcbiAgICAvLyBjcm9wOiB7XG4gICAgLy8gICBsZWZ0OiAwLjEsXG4gICAgLy8gICByaWdodDogMC4yLFxuICAgIC8vICAgdG9wOiAwLjEsXG4gICAgLy8gICBib3R0b206IDAuMjEsXG4gICAgLy8gfSxcbiAgICAvLyBpbWFnZTogeyBoZWlnaHQ6IDEwMCwgd2lkdGg6IDEyNSB9LFxuICAgIC8vIGNvbnRhaW5lcjogeyBhc3BlY3RSYXRpbzogMTYgLyAxMCB9LFxuICAgIGFsaWduOiB7XG4gICAgICB4OiBcImxlZnRcIixcbiAgICAgIHk6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coc3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCIgbGF5b3V0SWQ9e2BjYXJkLWNvbnRhaW5lci0ke2lkfWB9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltYWdlLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBsYXlvdXRJZD17YGNhcmQtaW1hZ2UtY29udGFpbmVyLSR7aWR9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIlxuICAgICAgICAgICAgICBsYXlvdXRJZD17YHRpdGxlLWNvbnRhaW5lci0ke2lkfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y29tcG9zaXRvcnMubWFwKChjb21wb3NlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXJlZ3VsYXIgdGV4dC1iYXNlIHRleHQtZ3JheS00MDAgdXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbXBvc2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC00eGwgbGVhZGluZy1ub25lIG10LTIgdGV4dC1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIiBzcmM9e3Bob3RvfSAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/index.js\n");

/***/ })

})