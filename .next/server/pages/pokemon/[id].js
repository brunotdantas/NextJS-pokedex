(function() {
var exports = {};
exports.id = "pages/pokemon/[id]";
exports.ids = ["pages/pokemon/[id]"];
exports.modules = {

/***/ "./pages/pokemon/[id].jsx":
/*!********************************!*\
  !*** ./pages/pokemon/[id].jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pokemon; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./pages/pokemon/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\dev\\NextJS-pokedex\\pages\\pokemon\\[id].jsx";



function Pokemon({
  pokemon,
  pokemonDetail
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagem),
        src: pokemon.sprites.front_default,
        alt: `Imagem do pokemon {pokemon.name}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Id:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 24
          }, this), " ", pokemon.id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 24
          }, this), pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Description:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 24
          }, this), " ", pokemonDetail.flavor_text_entries[0].flavor_text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Voltar para Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
async function getStaticProps({
  params
}) {
  // pega dados de imagem 1 pokemon específico que virá pela rota 
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Problema durante a resposta do server pokeapi');
  }).then(respostaEmObjeto => respostaEmObjeto); // pega dados de evolução de 1 pokemon específico que vira pela rota

  const pokemonDetail = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`).then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Problema durante a resposta do server pokeapi');
  }).then(respostaEmObjeto => respostaEmObjeto);
  return {
    props: {
      pokemon,
      pokemonDetail
    }
  };
}
async function getStaticPaths() {
  //Basicamente o mesmo código da Home, com diferença no return
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Deu problema');
  }).then(respostaEmObjeto => respostaEmObjeto.pokemon_entries);
  return {
    paths: pokemons.map(pokemon => ({
      //pra cada pokemon na resposta, um caminho sera gerado
      params: {
        id: pokemon.entry_number.toString() //necessario usar o toString porque não aceita inteiro como caminho (path)

      }
    })),
    fallback: false
  };
}

/***/ }),

/***/ "./pages/pokemon/styles.module.css":
/*!*****************************************!*\
  !*** ./pages/pokemon/styles.module.css ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "styles_wrapper__3zXH8",
	"card": "styles_card__3_F02",
	"info": "styles_info__1S4oX",
	"imagem": "styles_imagem__1Wg4g"
};


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/pokemon/[id].jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMtcG9rZWRleC8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qc3giLCJ3ZWJwYWNrOi8vTmV4dEpTLXBva2VkZXgvLi9wYWdlcy9wb2tlbW9uL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL05leHRKUy1wb2tlZGV4L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL05leHRKUy1wb2tlZGV4L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL05leHRKUy1wb2tlZGV4L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0SlMtcG9rZWRleC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vTmV4dEpTLXBva2VkZXgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9OZXh0SlMtcG9rZWRleC9pZ25vcmVkfEM6XFxkZXZcXE5leHRKUy1wb2tlZGV4XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiUG9rZW1vbiIsInBva2Vtb24iLCJwb2tlbW9uRGV0YWlsIiwic3R5bGVzIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJpZCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZmxhdm9yX3RleHRfZW50cmllcyIsImZsYXZvcl90ZXh0IiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2VydmVyIiwib2siLCJqc29uIiwiRXJyb3IiLCJyZXNwb3N0YUVtT2JqZXRvIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBva2Vtb25zIiwicG9rZW1vbl9lbnRyaWVzIiwicGF0aHMiLCJtYXAiLCJlbnRyeV9udW1iZXIiLCJ0b1N0cmluZyIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUMsU0FBRjtBQUFXQztBQUFYLENBQWpCLEVBQTZDO0FBRXhELHNCQUNJO0FBQUssYUFBUyxFQUFFQyxtRUFBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUEsZ0VBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSxrRUFBaEI7QUFBK0IsV0FBRyxFQUFFRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLGFBQXBEO0FBQW1FLFdBQUcsRUFBRztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVGLGdFQUFoQjtBQUFBLGdDQUNJO0FBQUEsa0NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsT0FBZUYsT0FBTyxDQUFDSyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLGtDQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFILEVBQWdCTCxPQUFPLENBQUNNLElBQVIsQ0FBYUMsTUFBYixDQUFvQixDQUFwQixFQUF1QkMsV0FBdkIsS0FBdUNSLE9BQU8sQ0FBQ00sSUFBUixDQUFhRyxLQUFiLENBQW1CLENBQW5CLENBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUEsa0NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsT0FBd0JSLGFBQWEsQ0FBQ1MsbUJBQWQsQ0FBa0MsQ0FBbEMsRUFBcUNDLFdBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUtJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLEdBQWI7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQTBDO0FBRTdDO0FBQ0EsUUFBTWIsT0FBTyxHQUFHLE1BQU1jLEtBQUssQ0FBRSxxQ0FBb0NELE1BQU0sQ0FBQ1IsRUFBRyxFQUFoRCxDQUFMLENBQ2pCVSxJQURpQixDQUNYQyxnQkFBRCxJQUFzQjtBQUN4QixRQUFJQSxnQkFBZ0IsQ0FBQ0MsRUFBckIsRUFBeUI7QUFDckIsYUFBT0QsZ0JBQWdCLENBQUNFLElBQWpCLEVBQVA7QUFDSDs7QUFFRCxVQUFNLElBQUlDLEtBQUosQ0FBVSwrQ0FBVixDQUFOO0FBQ0gsR0FQaUIsRUFRakJKLElBUmlCLENBUVhLLGdCQUFELElBQXNCQSxnQkFSVixDQUF0QixDQUg2QyxDQWE3Qzs7QUFDQSxRQUFNbkIsYUFBYSxHQUFHLE1BQU1hLEtBQUssQ0FBRSw2Q0FBNENELE1BQU0sQ0FBQ1IsRUFBRyxFQUF4RCxDQUFMLENBQ3ZCVSxJQUR1QixDQUNqQkMsZ0JBQUQsSUFBc0I7QUFDeEIsUUFBSUEsZ0JBQWdCLENBQUNDLEVBQXJCLEVBQXlCO0FBQ3JCLGFBQU9ELGdCQUFnQixDQUFDRSxJQUFqQixFQUFQO0FBQ0g7O0FBRUQsVUFBTSxJQUFJQyxLQUFKLENBQVUsK0NBQVYsQ0FBTjtBQUNILEdBUHVCLEVBUXZCSixJQVJ1QixDQVFqQkssZ0JBQUQsSUFBc0JBLGdCQVJKLENBQTVCO0FBV0EsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFDSHJCLGFBREc7QUFFSEM7QUFGRztBQURKLEdBQVA7QUFNSDtBQUVNLGVBQWVxQixjQUFmLEdBQWdDO0FBQUU7QUFDckMsUUFBTUMsUUFBUSxHQUFHLE1BQU1ULEtBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ2xCQyxJQURrQixDQUNaQyxnQkFBRCxJQUFzQjtBQUN4QixRQUFJQSxnQkFBZ0IsQ0FBQ0MsRUFBckIsRUFBeUI7QUFDckIsYUFBT0QsZ0JBQWdCLENBQUNFLElBQWpCLEVBQVA7QUFDSDs7QUFDRCxVQUFNLElBQUlDLEtBQUosQ0FBVSxjQUFWLENBQU47QUFDSCxHQU5rQixFQU9sQkosSUFQa0IsQ0FPWkssZ0JBQUQsSUFBc0JBLGdCQUFnQixDQUFDSSxlQVAxQixDQUF2QjtBQVFBLFNBQU87QUFDSEMsU0FBSyxFQUFFRixRQUFRLENBQUNHLEdBQVQsQ0FBYzFCLE9BQUQsS0FBYztBQUFFO0FBQ2hDYSxZQUFNLEVBQUU7QUFDSlIsVUFBRSxFQUFFTCxPQUFPLENBQUMyQixZQUFSLENBQXFCQyxRQUFyQixFQURBLENBQ2lDOztBQURqQztBQURzQixLQUFkLENBQWIsQ0FESjtBQU1IQyxZQUFRLEVBQUU7QUFOUCxHQUFQO0FBUUgsQzs7Ozs7Ozs7OztBQzNFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3Bva2Vtb24vW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKHsgcG9rZW1vbiwgcG9rZW1vbkRldGFpbCB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZW19IHNyYz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD17YEltYWdlbSBkbyBwb2tlbW9uIHtwb2tlbW9uLm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGI+SWQ6PC9iPiB7cG9rZW1vbi5pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGI+TmFtZTo8L2I+e3Bva2Vtb24ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBva2Vtb24ubmFtZS5zbGljZSgxKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGI+RGVzY3JpcHRpb246PC9iPiB7cG9rZW1vbkRldGFpbC5mbGF2b3JfdGV4dF9lbnRyaWVzWzBdLmZsYXZvcl90ZXh0fTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Vm9sdGFyIHBhcmEgSG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG5cclxuICAgIC8vIHBlZ2EgZGFkb3MgZGUgaW1hZ2VtIDEgcG9rZW1vbiBlc3BlY8OtZmljbyBxdWUgdmlyw6EgcGVsYSByb3RhIFxyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMuaWR9YClcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW1hIGR1cmFudGUgYSByZXNwb3N0YSBkbyBzZXJ2ZXIgcG9rZWFwaScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4gcmVzcG9zdGFFbU9iamV0byk7XHJcblxyXG4gICAgLy8gcGVnYSBkYWRvcyBkZSBldm9sdcOnw6NvIGRlIDEgcG9rZW1vbiBlc3BlY8OtZmljbyBxdWUgdmlyYSBwZWxhIHJvdGFcclxuICAgIGNvbnN0IHBva2Vtb25EZXRhaWwgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLXNwZWNpZXMvJHtwYXJhbXMuaWR9YClcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW1hIGR1cmFudGUgYSByZXNwb3N0YSBkbyBzZXJ2ZXIgcG9rZWFwaScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4gcmVzcG9zdGFFbU9iamV0byk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9rZW1vbixcclxuICAgICAgICAgICAgcG9rZW1vbkRldGFpbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkgeyAvL0Jhc2ljYW1lbnRlIG8gbWVzbW8gY8OzZGlnbyBkYSBIb21lLCBjb20gZGlmZXJlbsOnYSBubyByZXR1cm5cclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RldSBwcm9ibGVtYScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHJlc3Bvc3RhRW1PYmpldG8ucG9rZW1vbl9lbnRyaWVzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IHBva2Vtb25zLm1hcCgocG9rZW1vbikgPT4gKHsgLy9wcmEgY2FkYSBwb2tlbW9uIG5hIHJlc3Bvc3RhLCB1bSBjYW1pbmhvIHNlcmEgZ2VyYWRvXHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHBva2Vtb24uZW50cnlfbnVtYmVyLnRvU3RyaW5nKCksIC8vbmVjZXNzYXJpbyB1c2FyIG8gdG9TdHJpbmcgcG9ycXVlIG7Do28gYWNlaXRhIGludGVpcm8gY29tbyBjYW1pbmhvIChwYXRoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInN0eWxlc193cmFwcGVyX18zelhIOFwiLFxuXHRcImNhcmRcIjogXCJzdHlsZXNfY2FyZF9fM19GMDJcIixcblx0XCJpbmZvXCI6IFwic3R5bGVzX2luZm9fXzFTNG9YXCIsXG5cdFwiaW1hZ2VtXCI6IFwic3R5bGVzX2ltYWdlbV9fMVdnNGdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9