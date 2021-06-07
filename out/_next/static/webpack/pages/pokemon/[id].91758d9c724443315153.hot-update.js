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
  console.log(pokemon);
  console.log(pokemonDetail);
  console.log(pokemonDetail.flavor_text_entries[0].flavor_text);
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
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Pok\xE9mon ID: ", pokemon.id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Pok\xE9mon name: ", pokemon.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Pok\xE9mon name: ", pokemon.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJQb2tlbW9uIiwicG9rZW1vbiIsInBva2Vtb25EZXRhaWwiLCJjb25zb2xlIiwibG9nIiwiZmxhdm9yX3RleHRfZW50cmllcyIsImZsYXZvcl90ZXh0Iiwic3R5bGVzIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxPQUE2QztBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBQ3hEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBYSxDQUFDRyxtQkFBZCxDQUFrQyxDQUFsQyxFQUFxQ0MsV0FBakQ7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsbUVBQWhCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVBLGdFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsa0VBQWhCO0FBQStCLFdBQUcsRUFBRU4sT0FBTyxDQUFDTyxPQUFSLENBQWdCQyxhQUFwRDtBQUFtRSxXQUFHO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRUYsZ0VBQWhCO0FBQUEsZ0NBQ0k7QUFBQSx3Q0FBZ0JOLE9BQU8sQ0FBQ1MsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSwwQ0FBa0JULE9BQU8sQ0FBQ1UsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBQSwwQ0FBa0JWLE9BQU8sQ0FBQ1UsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBS0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEtBQVY7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIO0tBdkJ1QlgsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb2tlbW9uL1tpZF0uOTE3NThkOWM3MjQ0NDMzMTUxNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKHsgcG9rZW1vbiwgcG9rZW1vbkRldGFpbCB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb25EZXRhaWwpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb25EZXRhaWwuZmxhdm9yX3RleHRfZW50cmllc1swXS5mbGF2b3JfdGV4dClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlbX0gc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtgSW1hZ2VtIGRvIHBva2Vtb24ge3Bva2Vtb24ubmFtZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Qb2vDqW1vbiBJRDoge3Bva2Vtb24uaWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBva8OpbW9uIG5hbWU6IHtwb2tlbW9uLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBva8OpbW9uIG5hbWU6IHtwb2tlbW9uLm5hbWV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblxyXG4gICAgLy8gcGVnYSBkYWRvcyBkZSBpbWFnZW0gMSBwb2tlbW9uIGVzcGVjw61maWNvIHF1ZSB2aXLDoSBwZWxhIHJvdGEgXHJcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3BhcmFtcy5pZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvYmxlbWEgZHVyYW50ZSBhIHJlc3Bvc3RhIGRvIHNlcnZlciBwb2tlYXBpJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiByZXNwb3N0YUVtT2JqZXRvKTtcclxuXHJcbiAgICAvLyBwZWdhIGRhZG9zIGRlIGV2b2x1w6fDo28gZGUgMSBwb2tlbW9uIGVzcGVjw61maWNvIHF1ZSB2aXJhIHBlbGEgcm90YVxyXG4gICAgY29uc3QgcG9rZW1vbkRldGFpbCA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tc3BlY2llcy8ke3BhcmFtcy5pZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvYmxlbWEgZHVyYW50ZSBhIHJlc3Bvc3RhIGRvIHNlcnZlciBwb2tlYXBpJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiByZXNwb3N0YUVtT2JqZXRvKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uLFxyXG4gICAgICAgICAgICBwb2tlbW9uRGV0YWlsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7IC8vQmFzaWNhbWVudGUgbyBtZXNtbyBjw7NkaWdvIGRhIEhvbWUsIGNvbSBkaWZlcmVuw6dhIG5vIHJldHVyblxyXG4gICAgY29uc3QgcG9rZW1vbnMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzIvJylcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGV1IHByb2JsZW1hJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4gcmVzcG9zdGFFbU9iamV0by5wb2tlbW9uX2VudHJpZXMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiAoeyAvL3ByYSBjYWRhIHBva2Vtb24gbmEgcmVzcG9zdGEsIHVtIGNhbWluaG8gc2VyYSBnZXJhZG9cclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcG9rZW1vbi5lbnRyeV9udW1iZXIudG9TdHJpbmcoKSwgLy9uZWNlc3NhcmlvIHVzYXIgbyB0b1N0cmluZyBwb3JxdWUgbsOjbyBhY2VpdGEgaW50ZWlybyBjb21vIGNhbWluaG8gKHBhdGgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9