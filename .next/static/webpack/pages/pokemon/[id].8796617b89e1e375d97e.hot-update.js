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
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./pages/pokemon/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\dev\\NextJS-pokedex\\pages\\pokemon\\[id].jsx";



var __N_SSG = true;
function Pokemon(_ref) {
  var pokemon = _ref.pokemon,
      pokemonDetail = _ref.pokemonDetail;
  console.log(pokemonDetail);
  console.log(pokemonDetail.evolution_chain.url);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagem),
        src: pokemon.sprites.front_default,
        alt: "Imagem do pokemon {pokemon.name}"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Id:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 24
          }, this), " ", pokemon.id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 24
          }, this), pokemon.name.charAt(0).toUpperCase() + string.slice(1)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Description:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 24
          }, this), " ", pokemonDetail.flavor_text_entries[0].flavor_text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Voltar para Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJQb2tlbW9uIiwicG9rZW1vbiIsInBva2Vtb25EZXRhaWwiLCJjb25zb2xlIiwibG9nIiwiZXZvbHV0aW9uX2NoYWluIiwidXJsIiwic3R5bGVzIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJpZCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN0cmluZyIsInNsaWNlIiwiZmxhdm9yX3RleHRfZW50cmllcyIsImZsYXZvcl90ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNBLE9BQVQsT0FBNkM7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUV4REMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQVo7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQWEsQ0FBQ0csZUFBZCxDQUE4QkMsR0FBMUM7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsbUVBQWhCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVBLGdFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsa0VBQWhCO0FBQStCLFdBQUcsRUFBRU4sT0FBTyxDQUFDTyxPQUFSLENBQWdCQyxhQUFwRDtBQUFtRSxXQUFHO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRUYsZ0VBQWhCO0FBQUEsZ0NBQ0k7QUFBQSxrQ0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxPQUFlTixPQUFPLENBQUNTLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsa0NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsRUFBZ0JULE9BQU8sQ0FBQ1UsSUFBUixDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixLQUF1Q0MsTUFBTSxDQUFDQyxLQUFQLENBQWEsQ0FBYixDQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLGtDQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFILE9BQXdCYixhQUFhLENBQUNjLG1CQUFkLENBQWtDLENBQWxDLEVBQXFDQyxXQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFLSSw4REFBQyxrREFBRDtBQUFNLGNBQUksS0FBVjtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7S0F4QnVCakIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb2tlbW9uL1tpZF0uODc5NjYxN2I4OWUxZTM3NWQ5N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKHsgcG9rZW1vbiwgcG9rZW1vbkRldGFpbCB9KSB7XHJcblxyXG4gICAgY29uc29sZS5sb2cocG9rZW1vbkRldGFpbCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocG9rZW1vbkRldGFpbC5ldm9sdXRpb25fY2hhaW4udXJsKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZW19IHNyYz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD17YEltYWdlbSBkbyBwb2tlbW9uIHtwb2tlbW9uLm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGI+SWQ6PC9iPiB7cG9rZW1vbi5pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGI+TmFtZTo8L2I+e3Bva2Vtb24ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGI+RGVzY3JpcHRpb246PC9iPiB7cG9rZW1vbkRldGFpbC5mbGF2b3JfdGV4dF9lbnRyaWVzWzBdLmZsYXZvcl90ZXh0fTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Vm9sdGFyIHBhcmEgSG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG5cclxuICAgIC8vIHBlZ2EgZGFkb3MgZGUgaW1hZ2VtIDEgcG9rZW1vbiBlc3BlY8OtZmljbyBxdWUgdmlyw6EgcGVsYSByb3RhIFxyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMuaWR9YClcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW1hIGR1cmFudGUgYSByZXNwb3N0YSBkbyBzZXJ2ZXIgcG9rZWFwaScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4gcmVzcG9zdGFFbU9iamV0byk7XHJcblxyXG4gICAgLy8gcGVnYSBkYWRvcyBkZSBldm9sdcOnw6NvIGRlIDEgcG9rZW1vbiBlc3BlY8OtZmljbyBxdWUgdmlyYSBwZWxhIHJvdGFcclxuICAgIGNvbnN0IHBva2Vtb25EZXRhaWwgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLXNwZWNpZXMvJHtwYXJhbXMuaWR9YClcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW1hIGR1cmFudGUgYSByZXNwb3N0YSBkbyBzZXJ2ZXIgcG9rZWFwaScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4gcmVzcG9zdGFFbU9iamV0byk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9rZW1vbixcclxuICAgICAgICAgICAgcG9rZW1vbkRldGFpbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkgeyAvL0Jhc2ljYW1lbnRlIG8gbWVzbW8gY8OzZGlnbyBkYSBIb21lLCBjb20gZGlmZXJlbsOnYSBubyByZXR1cm5cclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RldSBwcm9ibGVtYScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHJlc3Bvc3RhRW1PYmpldG8ucG9rZW1vbl9lbnRyaWVzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IHBva2Vtb25zLm1hcCgocG9rZW1vbikgPT4gKHsgLy9wcmEgY2FkYSBwb2tlbW9uIG5hIHJlc3Bvc3RhLCB1bSBjYW1pbmhvIHNlcmEgZ2VyYWRvXHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHBva2Vtb24uZW50cnlfbnVtYmVyLnRvU3RyaW5nKCksIC8vbmVjZXNzYXJpbyB1c2FyIG8gdG9TdHJpbmcgcG9ycXVlIG7Do28gYWNlaXRhIGludGVpcm8gY29tbyBjYW1pbmhvIChwYXRoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==