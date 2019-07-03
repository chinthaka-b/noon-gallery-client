webpackHotUpdate("static/development/pages/favourites.js",{

/***/ "./pages/favourites.js":
/*!*****************************!*\
  !*** ./pages/favourites.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Postsliked_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Postsliked.js */ "./components/Postsliked.js");


var _jsxFileName = "/home/chin/git/noon-gallery/pages/favourites.js";






var Favourites = function Favourites(_ref) {
  var posts = _ref.posts;
  var likedHtml = '';

  if (posts.length > 0) {
    console.log(posts); // let likedPosts = JSON.parse(posts);

    /*likedHtml =likedPosts.map(post => (
     		<Postsliked key={post.id} post={post} />
     	))*/
  } else {
    likedHtml = 'Nothong to show here!';
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4121594649",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, likedHtml), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4121594649",
    __self: this
  }, "*.jsx-4121594649{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFHaUMsc0JBQ3hCIiwiZmlsZSI6Ii9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgUG9zdHNsaWtlZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzbGlrZWQuanMnXG5cbmNvbnN0IEZhdm91cml0ZXMgPSAoe3Bvc3RzfSkgPT4ge1xuXG5cblx0dmFyIGxpa2VkSHRtbCA9ICcnO1xuXHRpZihwb3N0cy5sZW5ndGggPiAwKVxuXHR7XG5cdFx0Y29uc29sZS5sb2cocG9zdHMpO1xuXHRcdC8vIGxldCBsaWtlZFBvc3RzID0gSlNPTi5wYXJzZShwb3N0cyk7XG5cdFx0LypsaWtlZEh0bWwgPWxpa2VkUG9zdHMubWFwKHBvc3QgPT4gKFxuXHQgIFx0XHQ8UG9zdHNsaWtlZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG5cdCAgXHQpKSovXG5cdH1cblx0ZWxzZXtcblx0XHRsaWtlZEh0bWwgPSAnTm90aG9uZyB0byBzaG93IGhlcmUhJ1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0XG5cdFx0XHQ8ZGl2PlxuXHRcdCAgXHR7bGlrZWRIdG1sfVxuXHRcdFx0PC9kaXY+XG5cdFx0ICAgIDxzdHlsZSBqc3g+e2Bcblx0XHQgICAgICAqIHtcblx0XHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ICAgICAgfVxuXHRcdCAgICBgfTwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdClcblx0XG59XG5cbkZhdm91cml0ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0cy9saWtlZCcpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICByZXR1cm4geyBwb3N0czogcmVzcG9uc2UgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlczsiXX0= */\n/*@ sourceURL=/home/chin/git/noon-gallery/pages/favourites.js */"));
};

Favourites.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return fetch('http://localhost:3001/posts/liked');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            response = _context.sent;
            console.log(response);
            return _context.abrupt("return", {
              posts: response
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Favourites);

/***/ })

})
//# sourceMappingURL=favourites.js.eb075843770daacb3144.hot-update.js.map