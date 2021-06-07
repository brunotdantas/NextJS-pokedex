(function() {
var exports = {};
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 428:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pokemon; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(100);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);





function Pokemon({
  pokemon,
  pokemonDetail
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagem),
        src: pokemon.sprites.front_default,
        alt: `Imagem do pokemon {pokemon.name}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: "Id:"
          }), " ", pokemon.id]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: "Name:"
          }), pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: "Description:"
          }), " ", pokemonDetail.flavor_text_entries[0].flavor_text]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: "Voltar para Home"
          })
        })]
      })]
    })
  });
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

/***/ 100:
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "styles_wrapper__3zXH8",
	"card": "styles_card__3_F02",
	"info": "styles_info__1S4oX",
	"imagem": "styles_imagem__1Wg4g"
};


/***/ }),

/***/ 417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(428); });
module.exports = __webpack_exports__;

})();