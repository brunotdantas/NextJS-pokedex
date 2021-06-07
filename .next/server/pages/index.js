(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\dev\\NextJS-pokedex\\pages\\index.jsx";

 // get static props 

async function getStaticProps(context) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }
  }).then(respostaEmObjeto => {
    return respostaEmObjeto.pokemon_entries;
  });
  return {
    props: {
      pokemons
    }
  };
}
function Home(props) {
  const {
    pokemons
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "Pokedex + NextJS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: pokemons.map(pokemon => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/pokemon/${pokemon.entry_number}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this)
      }, pokemon.name, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMtcG9rZWRleC8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9OZXh0SlMtcG9rZWRleC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9OZXh0SlMtcG9rZWRleC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9OZXh0SlMtcG9rZWRleC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dEpTLXBva2VkZXgvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL05leHRKUy1wb2tlZGV4L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vTmV4dEpTLXBva2VkZXgvaWdub3JlZHxDOlxcZGV2XFxOZXh0SlMtcG9rZWRleFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBva2Vtb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZlciIsIm9rIiwianNvbiIsInJlc3Bvc3RhRW1PYmpldG8iLCJwb2tlbW9uX2VudHJpZXMiLCJwcm9wcyIsIkhvbWUiLCJtYXAiLCJwb2tlbW9uIiwiZW50cnlfbnVtYmVyIiwicG9rZW1vbl9zcGVjaWVzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNPLGVBQWVBLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzFDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDWkMsZ0JBQUQsSUFBc0I7QUFDeEIsUUFBSUEsZ0JBQWdCLENBQUNDLEVBQXJCLEVBQXlCO0FBQ3JCLGFBQU9ELGdCQUFnQixDQUFDRSxJQUFqQixFQUFQO0FBQ0g7QUFDSixHQUxrQixFQU1sQkgsSUFOa0IsQ0FNWkksZ0JBQUQsSUFBc0I7QUFDeEIsV0FBT0EsZ0JBQWdCLENBQUNDLGVBQXhCO0FBQ0gsR0FSa0IsQ0FBdkI7QUFVQSxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQUNIUjtBQURHO0FBREosR0FBUDtBQUtIO0FBR2MsU0FBU1MsSUFBVCxDQUFjRCxLQUFkLEVBQXFCO0FBQ2hDLFFBQU07QUFBRVI7QUFBRixNQUFlUSxLQUFyQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUdJO0FBQUEsZ0JBQ0tSLFFBQVEsQ0FBQ1UsR0FBVCxDQUFjQyxPQUFELGlCQUNWO0FBQUEsK0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUcsWUFBV0EsT0FBTyxDQUFDQyxZQUFhLEVBQTdDO0FBQUEsaUNBQ0k7QUFBQSx1QkFDS0QsT0FBTyxDQUFDQyxZQURiLFNBQzhCRCxPQUFPLENBQUNFLGVBQVIsQ0FBd0JDLElBRHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFTSCxPQUFPLENBQUNHLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSCxDOzs7Ozs7Ozs7OztBQzdDRCx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gZ2V0IHN0YXRpYyBwcm9wcyBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG8ucG9rZW1vbl9lbnRyaWVzO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgcG9rZW1vbnMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5Qb2tlZGV4ICsgTmV4dEpTPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb2tlbW9uLyR7cG9rZW1vbi5lbnRyeV9udW1iZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5lbnRyeV9udW1iZXJ9IC0ge3Bva2Vtb24ucG9rZW1vbl9zcGVjaWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9