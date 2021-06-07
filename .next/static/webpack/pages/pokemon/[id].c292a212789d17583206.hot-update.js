self["webpackHotUpdate_N_E"]("pages/pokemon/[id]",{

/***/ "./pages/pokemon/[id].jsx":
/*!********************************!*\
  !*** ./pages/pokemon/[id].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Pokemon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./pages/pokemon/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\dev\\NextJS-pokedex\\pages\\pokemon\\[id].jsx";


var __N_SSG = true;
function Pokemon(_ref) {
  var pokemon = _ref.pokemon;
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().imagem),
      src: pokemon.sprites.front_default,
      alt: "Imagem do pokemon {pokemon.name}"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().info),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: pokemon.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Architect & Engineer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = Pokemon;

var _c;

$RefreshReg$(_c, "Pokemon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJQb2tlbW9uIiwicG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciLCJmbGF2b3JfdGV4dF9lbnRyaWVzIiwiZmxhdm9yX3RleHQiLCJzdHlsZXMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTQSxPQUFULE9BQThCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBRXpDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBTyxDQUFDRyxtQkFBUixDQUE0QixDQUE1QixFQUErQkMsV0FBM0M7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsZ0VBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLGtFQUFoQjtBQUErQixTQUFHLEVBQUVMLE9BQU8sQ0FBQ00sT0FBUixDQUFnQkMsYUFBcEQ7QUFBbUUsU0FBRztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRUYsZ0VBQWhCO0FBQUEsOEJBQ0k7QUFBQSwrQkFBSTtBQUFBLG9CQUFJTCxPQUFPLENBQUNRO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDtLQWJ1QlQsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb2tlbW9uL1tpZF0uYzI5MmEyMTI3ODlkMTc1ODMyMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKHsgcG9rZW1vbiB9KSB7XHJcblxyXG4gICAgY29uc29sZS5sb2cocG9rZW1vbi5mbGF2b3JfdGV4dF9lbnRyaWVzWzBdLmZsYXZvcl90ZXh0KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZW19IHNyYz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD17YEltYWdlbSBkbyBwb2tlbW9uIHtwb2tlbW9uLm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuICAgICAgICAgICAgICAgIDxoND48Yj57cG9rZW1vbi5uYW1lfTwvYj48L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+QXJjaGl0ZWN0ICYgRW5naW5lZXI8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG5cclxuICAgIC8vIHBlZ2EgZGFkb3MgZGUgMSBwb2tlbW9uIGVzcGVjw61maWNvIHF1ZSB2aXJhIHBlbGEgcm90YVxyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMuaWR9YClcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW1hIGR1cmFudGUgYSByZXNwb3N0YSBkbyBzZXJ2ZXIgcG9rZWFwaScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4gcmVzcG9zdGFFbU9iamV0byk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7IC8vQmFzaWNhbWVudGUgbyBtZXNtbyBjw7NkaWdvIGRhIEhvbWUsIGNvbSBkaWZlcmVuw6dhIG5vIHJldHVyblxyXG4gICAgY29uc3QgcG9rZW1vbnMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzIvJylcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGV1IHByb2JsZW1hJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4gcmVzcG9zdGFFbU9iamV0by5wb2tlbW9uX2VudHJpZXMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiAoeyAvL3ByYSBjYWRhIHBva2Vtb24gbmEgcmVzcG9zdGEsIHVtIGNhbWluaG8gc2VyYSBnZXJhZG9cclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcG9rZW1vbi5lbnRyeV9udW1iZXIudG9TdHJpbmcoKSwgLy9uZWNlc3NhcmlvIHVzYXIgbyB0b1N0cmluZyBwb3JxdWUgbsOjbyBhY2VpdGEgaW50ZWlybyBjb21vIGNhbWluaG8gKHBhdGgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9