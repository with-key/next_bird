webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.jsx":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/yesang-gi/Desktop/workspace/nodebird/front/components/ImagesZoom/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject;\n\n\n\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Overlay, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"header\", {\n      className: \"header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n        children: \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        onClick: onClose,\n        className: \"close-btn\",\n        children: \"X\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n        className: \"slick-wrapper\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          initialSlide: 0,\n          afterChange: function afterChange(slide) {\n            return setCurrentSlide(slide);\n          },\n          infinite: true,\n          arrows: false,\n          slidesToShow: 1,\n          children: images.map(function (img) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n              className: \"img-wrapper\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n                src: img.src,\n                alt: img.src,\n                style: {\n                  width: \"100px\",\n                  height: \"100px\"\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 17\n              }, _this)\n            }, img, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n}; // function`` 함수 호출 방법\n\n\n_s(ImagesZoom, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n\n_c = ImagesZoom;\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  /* fixed\\uB97C \\uC804\\uCCB4 \\uD654\\uBA74\\uC73C\\uB85C \\uCC44\\uC6C0 */\\n  position: fixed;\\n  z-index: 5000;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  background-color: #fff;\\n\\n  .header {\\n    height: 44px;\\n    position: relative;\\n    padding: 0;\\n    text-align: cetner;\\n\\n    & h1 {\\n      margin: 0;\\n      font-size: 17px;\\n      color: #333;\\n      line-height: 44px;\\n    }\\n\\n    & button {\\n      position: absolute;\\n      right: 0;\\n      bottom: 0;\\n    }\\n  }\\n\"])));\n_c2 = Overlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ImagesZoom\");\n$RefreshReg$(_c2, \"Overlay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzeD8xNTdhIl0sIm5hbWVzIjpbIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZSIsIm1hcCIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiT3ZlcmxheSIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLENBQUQsQ0FETjtBQUFBLE1BQ25DQyxZQURtQztBQUFBLE1BQ3JCQyxlQURxQjs7QUFFMUMsc0JBQ0UscUVBQUMsT0FBRDtBQUFBLDRCQUNFO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsZUFBTyxFQUFFSCxPQUFqQjtBQUEwQixpQkFBUyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0UscUVBQUMsa0RBQUQ7QUFDRSxzQkFBWSxFQUFFLENBRGhCO0FBRUUscUJBQVcsRUFBRSxxQkFBQ0ksS0FBRDtBQUFBLG1CQUFXRCxlQUFlLENBQUNDLEtBQUQsQ0FBMUI7QUFBQSxXQUZmO0FBR0Usa0JBQVEsTUFIVjtBQUlFLGdCQUFNLEVBQUUsS0FKVjtBQUtFLHNCQUFZLEVBQUUsQ0FMaEI7QUFBQSxvQkFPR0wsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0MsR0FBRDtBQUFBLGdDQUNWO0FBQWUsdUJBQVMsRUFBQyxhQUF6QjtBQUFBLHFDQUNFO0FBQ0UsbUJBQUcsRUFBRUEsR0FBRyxDQUFDQyxHQURYO0FBRUUsbUJBQUcsRUFBRUQsR0FBRyxDQUFDQyxHQUZYO0FBR0UscUJBQUssRUFBRTtBQUFFQyx1QkFBSyxFQUFFLE9BQVQ7QUFBa0JDLHdCQUFNLEVBQUU7QUFBMUI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBVUgsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURVO0FBQUEsV0FBWDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBakNELEMsQ0FtQ0E7OztHQW5DTVIsVTs7S0FBQUEsVTtBQXFDTixJQUFNWSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsMG5CQUFiO01BQU1GLE87QUErQlNaLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWNrIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8T3ZlcmxheT5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJjbG9zZS1idG5cIj5cbiAgICAgICAgICBYXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNrLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2xpY2tcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XG4gICAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1nKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbWd9IGNsYXNzTmFtZT1cImltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtpbWcuc3JjfVxuICAgICAgICAgICAgICAgICAgYWx0PXtpbWcuc3JjfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjEwMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2xpY2s+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9PdmVybGF5PlxuICApO1xufTtcblxuLy8gZnVuY3Rpb25gYCDtlajsiJgg7Zi47LacIOuwqeuylVxuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgLyogZml4ZWTrpbwg7KCE7LK0IO2ZlOuptOycvOuhnCDssYTsm4AgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNldG5lcjtcblxuICAgICYgaDEge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICB9XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.jsx\n");

/***/ })

})