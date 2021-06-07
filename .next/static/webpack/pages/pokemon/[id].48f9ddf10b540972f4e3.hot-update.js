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
          }, this), pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJQb2tlbW9uIiwicG9rZW1vbiIsInBva2Vtb25EZXRhaWwiLCJjb25zb2xlIiwibG9nIiwiZXZvbHV0aW9uX2NoYWluIiwidXJsIiwic3R5bGVzIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJpZCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZmxhdm9yX3RleHRfZW50cmllcyIsImZsYXZvcl90ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNBLE9BQVQsT0FBNkM7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUV4REMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQVo7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQWEsQ0FBQ0csZUFBZCxDQUE4QkMsR0FBMUM7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsbUVBQWhCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVBLGdFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsa0VBQWhCO0FBQStCLFdBQUcsRUFBRU4sT0FBTyxDQUFDTyxPQUFSLENBQWdCQyxhQUFwRDtBQUFtRSxXQUFHO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRUYsZ0VBQWhCO0FBQUEsZ0NBQ0k7QUFBQSxrQ0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxPQUFlTixPQUFPLENBQUNTLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsa0NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsRUFBZ0JULE9BQU8sQ0FBQ1UsSUFBUixDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixLQUF1Q1osT0FBTyxDQUFDVSxJQUFSLENBQWFHLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBQSxrQ0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxPQUF3QlosYUFBYSxDQUFDYSxtQkFBZCxDQUFrQyxDQUFsQyxFQUFxQ0MsV0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBS0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEtBQVY7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIO0tBeEJ1QmhCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjQ4ZjlkZGYxMGI1NDA5NzJmNGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vbih7IHBva2Vtb24sIHBva2Vtb25EZXRhaWwgfSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb25EZXRhaWwpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb25EZXRhaWwuZXZvbHV0aW9uX2NoYWluLnVybCk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VtfSBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9e2BJbWFnZW0gZG8gcG9rZW1vbiB7cG9rZW1vbi5uYW1lfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxiPklkOjwvYj4ge3Bva2Vtb24uaWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxiPk5hbWU6PC9iPntwb2tlbW9uLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwb2tlbW9uLm5hbWUuc2xpY2UoMSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxiPkRlc2NyaXB0aW9uOjwvYj4ge3Bva2Vtb25EZXRhaWwuZmxhdm9yX3RleHRfZW50cmllc1swXS5mbGF2b3JfdGV4dH08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlZvbHRhciBwYXJhIEhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuXHJcbiAgICAvLyBwZWdhIGRhZG9zIGRlIGltYWdlbSAxIHBva2Vtb24gZXNwZWPDrWZpY28gcXVlIHZpcsOhIHBlbGEgcm90YSBcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cGFyYW1zLmlkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9ibGVtYSBkdXJhbnRlIGEgcmVzcG9zdGEgZG8gc2VydmVyIHBva2VhcGknKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHJlc3Bvc3RhRW1PYmpldG8pO1xyXG5cclxuICAgIC8vIHBlZ2EgZGFkb3MgZGUgZXZvbHXDp8OjbyBkZSAxIHBva2Vtb24gZXNwZWPDrWZpY28gcXVlIHZpcmEgcGVsYSByb3RhXHJcbiAgICBjb25zdCBwb2tlbW9uRGV0YWlsID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1zcGVjaWVzLyR7cGFyYW1zLmlkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9ibGVtYSBkdXJhbnRlIGEgcmVzcG9zdGEgZG8gc2VydmVyIHBva2VhcGknKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHJlc3Bvc3RhRW1PYmpldG8pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBva2Vtb24sXHJcbiAgICAgICAgICAgIHBva2Vtb25EZXRhaWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHsgLy9CYXNpY2FtZW50ZSBvIG1lc21vIGPDs2RpZ28gZGEgSG9tZSwgY29tIGRpZmVyZW7Dp2Egbm8gcmV0dXJuXHJcbiAgICBjb25zdCBwb2tlbW9ucyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMi8nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZXUgcHJvYmxlbWEnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiByZXNwb3N0YUVtT2JqZXRvLnBva2Vtb25fZW50cmllcyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlbW9ucy5tYXAoKHBva2Vtb24pID0+ICh7IC8vcHJhIGNhZGEgcG9rZW1vbiBuYSByZXNwb3N0YSwgdW0gY2FtaW5obyBzZXJhIGdlcmFkb1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBwb2tlbW9uLmVudHJ5X251bWJlci50b1N0cmluZygpLCAvL25lY2Vzc2FyaW8gdXNhciBvIHRvU3RyaW5nIHBvcnF1ZSBuw6NvIGFjZWl0YSBpbnRlaXJvIGNvbW8gY2FtaW5obyAocGF0aClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=