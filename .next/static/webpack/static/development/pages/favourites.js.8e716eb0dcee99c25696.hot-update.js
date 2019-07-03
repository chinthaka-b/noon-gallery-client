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
    likedHtml = posts.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Postsliked_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: post.id,
        post: post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    });
  } else {
    likedHtml = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-824500194",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      className: "jsx-824500194",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Nothong to show here!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "824500194",
      __self: this
    }, ".jsx-824500194{text-align:center;margin-top:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCYyxBQUNtQixrQkFDSSxpQkFBQyIsImZpbGUiOiIvaG9tZS9jaGluL2dpdC9ub29uLWdhbGxlcnkvcGFnZXMvZmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xuaW1wb3J0IFBvc3RzbGlrZWQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0c2xpa2VkLmpzJ1xuXG5jb25zdCBGYXZvdXJpdGVzID0gKHtwb3N0c30pID0+IHtcblxuXG5cdHZhciBsaWtlZEh0bWwgPSAnJztcblx0aWYocG9zdHMubGVuZ3RoID4gMClcblx0e1xuXHRcdGxpa2VkSHRtbCA9IHBvc3RzLm1hcChwb3N0ID0+IChcblx0ICBcdFx0PFBvc3RzbGlrZWQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuXHQgIFx0KSlcblx0fVxuXHRlbHNle1xuXHRcdGxpa2VkSHRtbCA9IDxkaXY+XG5cdFx0PGgxPk5vdGhvbmcgdG8gc2hvdyBoZXJlITwvaDE+XG5cdFx0PHN0eWxlIGpzeD57YHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcdG1hcmdpbi10b3A6IDE1MHB4O2B9PC9zdHlsZT5cblx0XHQ8L2Rpdj4gLy9pZiB0aGVyZSdzIG5vIGxpa2VkIHBvc3RzIHNob3cgdGhpcyBtc2dcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdFxuXHRcdFx0PGRpdj5cblx0XHQgIFx0e2xpa2VkSHRtbH1cblx0XHRcdDwvZGl2PlxuXHRcdCAgICA8c3R5bGUganN4PntgXG5cdFx0ICAgICAgKiB7XG5cdFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdCAgICAgIH1cblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdDwvTGF5b3V0PlxuXHQpXG5cdFxufVxuXG5GYXZvdXJpdGVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdHMvbGlrZWQnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7IHBvc3RzOiByZXNwb25zZSB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzOyJdfQ== */\n/*@ sourceURL=/home/chin/git/noon-gallery/pages/favourites.js */")); //if there's no liked posts show this msg
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4121594649",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, likedHtml), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4121594649",
    __self: this
  }, "*.jsx-4121594649{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHaUMsc0JBQ3hCIiwiZmlsZSI6Ii9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgUG9zdHNsaWtlZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzbGlrZWQuanMnXG5cbmNvbnN0IEZhdm91cml0ZXMgPSAoe3Bvc3RzfSkgPT4ge1xuXG5cblx0dmFyIGxpa2VkSHRtbCA9ICcnO1xuXHRpZihwb3N0cy5sZW5ndGggPiAwKVxuXHR7XG5cdFx0bGlrZWRIdG1sID0gcG9zdHMubWFwKHBvc3QgPT4gKFxuXHQgIFx0XHQ8UG9zdHNsaWtlZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG5cdCAgXHQpKVxuXHR9XG5cdGVsc2V7XG5cdFx0bGlrZWRIdG1sID0gPGRpdj5cblx0XHQ8aDE+Tm90aG9uZyB0byBzaG93IGhlcmUhPC9oMT5cblx0XHQ8c3R5bGUganN4PntgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFx0bWFyZ2luLXRvcDogMTUwcHg7YH08L3N0eWxlPlxuXHRcdDwvZGl2PiAvL2lmIHRoZXJlJ3Mgbm8gbGlrZWQgcG9zdHMgc2hvdyB0aGlzIG1zZ1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0XG5cdFx0XHQ8ZGl2PlxuXHRcdCAgXHR7bGlrZWRIdG1sfVxuXHRcdFx0PC9kaXY+XG5cdFx0ICAgIDxzdHlsZSBqc3g+e2Bcblx0XHQgICAgICAqIHtcblx0XHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ICAgICAgfVxuXHRcdCAgICBgfTwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdClcblx0XG59XG5cbkZhdm91cml0ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0cy9saWtlZCcpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHsgcG9zdHM6IHJlc3BvbnNlIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEZhdm91cml0ZXM7Il19 */\n/*@ sourceURL=/home/chin/git/noon-gallery/pages/favourites.js */"));
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
            return _context.abrupt("return", {
              posts: response
            });

          case 8:
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
//# sourceMappingURL=favourites.js.8e716eb0dcee99c25696.hot-update.js.map