webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ionicons/lib/MdHeart */ "./node_modules/react-ionicons/lib/MdHeart.js");
/* harmony import */ var react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/chin/git/noon-gallery/pages/index.js";







function getPosts() {
  return [{
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: 20,
    hashtags: ['toyota', 'corolla', 'E90'],
    image: {
      title: '(E90)',
      description: 'Toyota Corolla Sedan',
      imgUrl: '../static/img-1.jpeg'
    },
    user: {
      picUrl: '../static/profile-2.jpg',
      name: 'iambatman'
    }
  }, {
    id: 2,
    description: 'Cras malesuada eu magna vitae pharetra. Donec tempus ipsum in lacinia iaculis.',
    likes: 15,
    hashtags: ['datsun', '510', 'sss'],
    image: {
      title: 'SSS',
      description: 'Datsun 510',
      imgUrl: '../static/img-5.jpeg'
    },
    user: {
      picUrl: '../static/profile-1.jpg',
      name: 'jarvis'
    }
  }, {
    id: 2,
    description: 'Donec sit amet justo ut nisl pulvinar dapibus. Praesent placerat turpis at turpis rhoncus pharetra.',
    likes: 35,
    hashtags: ['trueno', 'hachiRoku', 'panda', 'corolla', 'initialD'],
    image: {
      title: 'Trueno',
      description: 'Toyota Corolla',
      imgUrl: '../static/img-7.jpeg'
    },
    user: {
      picUrl: '../static/profile-3.png',
      name: 'sultanofspeed'
    }
  }];
}

function Post(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "userinfo-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "profile-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "".concat(post.user.picUrl),
    alt: "".concat(post.user.name),
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, post.user.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "img-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "post-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "".concat(post.image.imgUrl),
    alt: "".concat(post.image.title),
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "post-info-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "img-title-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "img-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, post.image.description, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), post.image.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "like-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "post-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "post-likes-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "post-likes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fontSize: "20px",
    color: "#003cdc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, post.likes, " Likes"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "post-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, post.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "hash-tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "#", post.hashtags.join(' #'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-66966159" + " " + "view-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-66966159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "View 12 comments")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "66966159",
    __self: this
  }, "*.jsx-66966159{box-sizing:border-box;}.post.jsx-66966159{position:relative;text-align:left;}.userinfo-section.jsx-66966159{display:inline-block;float:left;width:100%;height:40px;left:0;margin-left:10px;}.profile-img.jsx-66966159{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.profile-img.jsx-66966159 img.jsx-66966159{width:25px;border-radius:50%;}.post-img.jsx-66966159 img.jsx-66966159{width:100%;height :auto;}.profile-img.jsx-66966159 p.jsx-66966159{margin-left:10px;color:#003cdc;cursor:pointer;font-weight:600;}.post-info-section.jsx-66966159{position:absolute;left:10px;text-align:left;color:white;bottom:15px;width:100%;}.img-title-section.jsx-66966159{display:block;}.post-info-section.jsx-66966159 div.jsx-66966159{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post-info-section.jsx-66966159 .spacer.jsx-66966159{-webkit-flex:1;-ms-flex:1;flex:1;}.post-footer.jsx-66966159{display:inline-block;float:left;width:100%;left:0;margin-left:10px;}.post-footer.jsx-66966159>*.jsx-66966159:first-child{margin-top:-15px;}.post-footer.jsx-66966159>*.jsx-66966159{display:block;margin-top:0px;}.post-likes.jsx-66966159{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:13px;}.post-likes.jsx-66966159 p.jsx-66966159{margin-left:5px;color:#003cdc;font-weight:600;}.like-btn.jsx-66966159{margin-right:25px;}.post-likes-section.jsx-66966159{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR2lCLEFBSTRCLEFBSUMsQUFLRixBQVNHLEFBTWQsQUFLRyxBQUtJLEFBT00sQUFTTixBQUtoQixBQUdRLEFBSVksQUFRRCxBQUlILEFBS08sQUFPUixBQU1FLEFBSUQsV0F2RUMsQUFLRixHQXFCZCxBQXdCZ0IsQUFzQmhCLEVBVlksQ0FwREEsQUFvQ2YsQ0FsRW9CLEFBcUNOLEFBbURYLEdBbkZZLEFBcURBLENBOURmLEVBOEJHLElBWWlCLENBakJwQixBQWtEQSxDQVlpQixDQXBERCxDQXpCRCxBQXFEQSxDQUxaLENBckRBLFNBTWEsQUFxREwsQ0FyQkksRUFQRSxBQW9EakIsSUF2QnFCLEtBckRWLENBZ0NJLE1BL0JNLEFBd0JyQixLQTZCQSxDQXJCZSxNQVNaLEtBeENILEFBZ0NHLGNBNUJZLEFBNkRBLFlBNURFLEFBNkRBLDBFQTVEWixBQTZEYyxlQUNkIiwiZmlsZSI6Ii9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1kSGVhcnQgZnJvbSAncmVhY3QtaW9uaWNvbnMvbGliL01kSGVhcnQnXG5pbXBvcnQgTWRIZWFydE91dGxpbmUgZnJvbSAncmVhY3QtaW9uaWNvbnMvbGliL01kSGVhcnQnXG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICBcdGlkOiAxLFxuICAgIFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LicsXG4gICAgXHRsaWtlczoyMCxcbiAgICBcdGhhc2h0YWdzIDogWyd0b3lvdGEnLCdjb3JvbGxhJywnRTkwJ10sXG4gICAgXHRpbWFnZSA6IHtcbiAgICBcdFx0dGl0bGU6ICcoRTkwKScsXG5cdCAgICBcdGRlc2NyaXB0aW9uOiAnVG95b3RhIENvcm9sbGEgU2VkYW4nLFxuXHQgICAgXHRpbWdVcmw6ICcuLi9zdGF0aWMvaW1nLTEuanBlZycsXG4gICAgXHR9LFxuICAgIFx0dXNlciA6IHtcblx0ICAgIFx0cGljVXJsIDogJy4uL3N0YXRpYy9wcm9maWxlLTIuanBnJyxcblx0ICAgIFx0bmFtZSA6ICdpYW1iYXRtYW4nLFxuICAgIFx0fVxuICAgIH0sXG4gICAge1xuICAgIFx0aWQ6IDIsXG4gICAgXHRkZXNjcmlwdGlvbjogJ0NyYXMgbWFsZXN1YWRhIGV1IG1hZ25hIHZpdGFlIHBoYXJldHJhLiBEb25lYyB0ZW1wdXMgaXBzdW0gaW4gbGFjaW5pYSBpYWN1bGlzLicsXG4gICAgXHRsaWtlczoxNSxcbiAgICBcdGhhc2h0YWdzIDogWydkYXRzdW4nLCc1MTAnLCdzc3MnXSxcbiAgICBcdGltYWdlOiB7XG4gICAgXHRcdHRpdGxlOiAnU1NTJyxcbiAgICBcdFx0ZGVzY3JpcHRpb24gOiAnRGF0c3VuIDUxMCcsXG4gICAgXHRcdGltZ1VybDogJy4uL3N0YXRpYy9pbWctNS5qcGVnJyxcbiAgICBcdH0sXG4gICAgXHR1c2VyIDoge1xuXHQgICAgXHRwaWNVcmwgOiAnLi4vc3RhdGljL3Byb2ZpbGUtMS5qcGcnLFxuXHQgICAgXHRuYW1lIDogJ2phcnZpcycsXG4gICAgXHR9XG4gICAgfSxcbiAgICB7XG4gICAgXHRpZDogMixcbiAgICAgXHRkZXNjcmlwdGlvbjogJ0RvbmVjIHNpdCBhbWV0IGp1c3RvIHV0IG5pc2wgcHVsdmluYXIgZGFwaWJ1cy4gUHJhZXNlbnQgcGxhY2VyYXQgdHVycGlzIGF0IHR1cnBpcyByaG9uY3VzIHBoYXJldHJhLicsXG4gICAgXHRsaWtlczozNSxcbiAgICBcdGhhc2h0YWdzIDogWyd0cnVlbm8nLCdoYWNoaVJva3UnLCdwYW5kYScsJ2Nvcm9sbGEnLCdpbml0aWFsRCddLFxuICAgICBcdGltYWdlOiB7XG4gICAgXHRcdHRpdGxlOiAnVHJ1ZW5vJyxcbiAgICAgXHRcdGRlc2NyaXB0aW9uOiAnVG95b3RhIENvcm9sbGEnLFxuICAgIFx0XHRpbWdVcmw6ICcuLi9zdGF0aWMvaW1nLTcuanBlZycsXG4gICAgIFx0fSxcbiAgICAgXHR1c2VyIDoge1xuXHQgICAgXHRwaWNVcmwgOiAnLi4vc3RhdGljL3Byb2ZpbGUtMy5wbmcnLFxuXHQgICAgXHRuYW1lIDogJ3N1bHRhbm9mc3BlZWQnLFxuICAgICBcdH1cbiAgICB9LFxuXG4gIF1cbn1cblxuZnVuY3Rpb24gUG9zdCh7cG9zdH0pIHtcblx0cmV0dXJuIChcblx0XHRcbiAgXHRcdDxkaXY+XG4gIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxuICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcmluZm8tc2VjdGlvblwiPlxuXHRcdCAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltZ1wiPlxuXHQgIFx0XHRcdFx0XHQ8aW1nIHNyYz17YCR7cG9zdC51c2VyLnBpY1VybH1gfSBhbHQ9e2Ake3Bvc3QudXNlci5uYW1lfWB9IC8+IDxwPntwb3N0LnVzZXIubmFtZX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxuICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWltZ1wiPlxuXHRcdCAgXHRcdFx0XHQ8aW1nIHNyYz17YCR7cG9zdC5pbWFnZS5pbWdVcmx9YH0gYWx0PXtgJHtwb3N0LmltYWdlLnRpdGxlfWB9IC8+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdCAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWluZm8tc2VjdGlvblwiPlxuXHRcdCAgXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHQgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLXRpdGxlLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLWRlc2NyaXB0aW9uXCI+e3Bvc3QuaW1hZ2UuZGVzY3JpcHRpb259PGJyLz57cG9zdC5pbWFnZS50aXRsZX08L2Rpdj5cblx0XHRcdFx0ICBcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG5cdFx0XHRcdCAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWtlLWJ0blwiPlxuXHRcdFx0XHQgIFx0XHRcdFx0PE1kSGVhcnRPdXRsaW5lIC8+XG5cdFx0XHRcdCAgXHRcdFx0PC9kaXY+XG5cdFx0ICBcdFx0XHRcdDwvZGl2PlxuXHRcdCAgXHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0PC9kaXY+XG5cdCAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWZvb3RlclwiPlxuXHQgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWxpa2VzLXNlY3Rpb25cIj5cblx0ICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWxpa2VzXCI+XG5cdCAgXHRcdFx0XHRcdFx0PE1kSGVhcnQgZm9udFNpemU9XCIyMHB4XCIgY29sb3I9XCIjMDAzY2RjXCIgLz48cD57cG9zdC5saWtlc30gTGlrZXM8L3A+XG5cdCAgXHRcdFx0XHRcdDwvZGl2PlxuXHQgIFx0XHRcdFx0PC9kaXY+XG5cdCAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3QtZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhc2gtdGFnc1wiPlxuXHRcdFx0XHRcdFx0PHA+I3twb3N0Lmhhc2h0YWdzLmpvaW4oJyAjJyl9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb21tZW50c1wiPlxuXHRcdFx0XHRcdFx0PHA+VmlldyAxMiBjb21tZW50czwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8L2Rpdj5cblxuICBcdFx0XHQ8L2Rpdj5cblxuXHRcdCAgXHQ8c3R5bGUganN4PntgXG5cblx0XHQgIFx0XHQqIHtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvc3Qge1xuXHRcdFx0ICAgICAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdCAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0ICAgIH1cblxuXHRcdCAgXHRcdC51c2VyaW5mby1zZWN0aW9uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdCAgICBmbG9hdDogbGVmdDtcblx0XHRcdFx0ICAgIHdpZHRoOiAxMDAlO1xuXHRcdFx0XHQgICAgaGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHQgICAgbGVmdDogMDtcblx0XHRcdFx0ICAgXHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0fVxuXHRcdCAgICAgIFx0XG5cdFx0ICAgICAgXHQucHJvZmlsZS1pbWcge1xuXHRcdCAgICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFx0XHRcdFx0aGVpZ2h0OjEwMCU7XG4gICAgXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdCAgICAgIFx0fVxuXG5cdFx0XHRcdC5wcm9maWxlLWltZyBpbWcge1xuXHRcdFx0XHRcdHdpZHRoOjI1cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdCAgICAucG9zdC1pbWcgaW1nIHtcblx0XHRcdCAgICBcdHdpZHRoOjEwMCU7IC8qZ2l2ZSBwb3N0IGltYWdlcyB0aGUgd2luZG93IHdpZHRoKi9cblx0XHRcdCAgICBcdGhlaWdodCA6IGF1dG87XG5cdFx0XHQgICAgfVxuXG5cdFx0XHQgICAgLnByb2ZpbGUtaW1nIHAge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMDAzY2RjO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjsgLy90byBtYWtlIGl0IGxvb2sgbGlrZSBjbGlja2FibGVcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdCAgICAucG9zdC1pbmZvLXNlY3Rpb24ge1xuXHRcdFx0ICAgICAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdCAgICBsZWZ0OiAxMHB4O1xuXHRcdFx0XHQgICAgdGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0ICAgIGNvbG9yOndoaXRlO1xuXHRcdFx0XHQgICAgYm90dG9tOjE1cHg7XG5cdFx0XHRcdCAgICB3aWR0aDogMTAwJTtcblx0XHRcdCAgICB9XG5cblx0XHRcdCAgICAuaW1nLXRpdGxlLXNlY3Rpb24ge1xuXHRcdFx0ICAgIFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHQgICAgfVxuXHRcdFx0ICAgIFxuXHRcdFx0ICAgIC5wb3N0LWluZm8tc2VjdGlvbiBkaXYge1xuXHRcdFx0ICAgIFx0ZGlzcGxheTpmbGV4XG5cdFx0XHQgICAgfVxuXG5cdFx0XHQgICAgLnBvc3QtaW5mby1zZWN0aW9uIC5zcGFjZXIge1xuXHRcdFx0ICAgIFx0ZmxleDoxO1xuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5wb3N0LWZvb3RlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdCAgICB3aWR0aDogMTAwJTtcblx0XHRcdFx0ICAgIGxlZnQ6IDA7XG5cdFx0XHRcdCAgIFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9zdC1mb290ZXIgPiAqOmZpcnN0LWNoaWxkIHtcblx0XHRcdCAgICBcdG1hcmdpbi10b3A6IC0xNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvc3QtZm9vdGVyID4gKiB7XG5cdFx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0ICAgIG1hcmdpbi10b3A6IDBweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3N0LWxpa2VzIHtcblx0XHQgICAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcdFx0XHRcdGhlaWdodDoxMDAlO1xuICAgIFx0XHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICBcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHQgICAgICBcdH1cblxuXHRcdCAgICAgIFx0LnBvc3QtbGlrZXMgcCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdFx0XHRjb2xvcjogIzAwM2NkYztcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdCAgICAubGlrZS1idG4ge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjVweDtcblx0XHRcdCAgICB9XG5cblx0XHRcdCAgICAucG9zdC1saWtlcy1zZWN0aW9uIHtcblx0XHRcdCAgICBcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0ICAgIH1cblxuXHRcdCAgXHRgfVxuXHRcdCAgXHQ8L3N0eWxlPlxuXHQgIFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxkaXY+XG5cdFx0ICBcdHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcblx0XHQgIFx0XHQ8UG9zdCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG5cdFx0ICBcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0ICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cblx0XHRcdCAgPGJ1dHRvbj5HbyB0byBBYm91dCBQYWdlPC9idXR0b24+XG5cdFx0XHQ8L0xpbms+XG5cdFx0ICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XG5cblx0XHQgICAgPHN0eWxlIGpzeD57YFxuXHRcdCAgICAgICoge1xuXHRcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgXG5cdFx0ICAgICAgLnBvc3QtbGlrZXMge1xuXHRcdCAgICAgIFx0XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIFxuXHRcdCAgICBgfTwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdClcbn07Il19 */\n/*@ sourceURL=/home/chin/git/noon-gallery/pages/index.js */"));
}

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3085006632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Post, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-3085006632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Go to About Page")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3085006632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Hello Next.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3085006632",
    __self: this
  }, "*.jsx-3085006632{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErTmtCLEFBR2lDLHNCQUN4QiIsImZpbGUiOiIvaG9tZS9jaGluL2dpdC9ub29uLWdhbGxlcnkvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNZEhlYXJ0IGZyb20gJ3JlYWN0LWlvbmljb25zL2xpYi9NZEhlYXJ0J1xuaW1wb3J0IE1kSGVhcnRPdXRsaW5lIGZyb20gJ3JlYWN0LWlvbmljb25zL2xpYi9NZEhlYXJ0J1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgXHRpZDogMSxcbiAgICBcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nLFxuICAgIFx0bGlrZXM6MjAsXG4gICAgXHRoYXNodGFncyA6IFsndG95b3RhJywnY29yb2xsYScsJ0U5MCddLFxuICAgIFx0aW1hZ2UgOiB7XG4gICAgXHRcdHRpdGxlOiAnKEU5MCknLFxuXHQgICAgXHRkZXNjcmlwdGlvbjogJ1RveW90YSBDb3JvbGxhIFNlZGFuJyxcblx0ICAgIFx0aW1nVXJsOiAnLi4vc3RhdGljL2ltZy0xLmpwZWcnLFxuICAgIFx0fSxcbiAgICBcdHVzZXIgOiB7XG5cdCAgICBcdHBpY1VybCA6ICcuLi9zdGF0aWMvcHJvZmlsZS0yLmpwZycsXG5cdCAgICBcdG5hbWUgOiAnaWFtYmF0bWFuJyxcbiAgICBcdH1cbiAgICB9LFxuICAgIHtcbiAgICBcdGlkOiAyLFxuICAgIFx0ZGVzY3JpcHRpb246ICdDcmFzIG1hbGVzdWFkYSBldSBtYWduYSB2aXRhZSBwaGFyZXRyYS4gRG9uZWMgdGVtcHVzIGlwc3VtIGluIGxhY2luaWEgaWFjdWxpcy4nLFxuICAgIFx0bGlrZXM6MTUsXG4gICAgXHRoYXNodGFncyA6IFsnZGF0c3VuJywnNTEwJywnc3NzJ10sXG4gICAgXHRpbWFnZToge1xuICAgIFx0XHR0aXRsZTogJ1NTUycsXG4gICAgXHRcdGRlc2NyaXB0aW9uIDogJ0RhdHN1biA1MTAnLFxuICAgIFx0XHRpbWdVcmw6ICcuLi9zdGF0aWMvaW1nLTUuanBlZycsXG4gICAgXHR9LFxuICAgIFx0dXNlciA6IHtcblx0ICAgIFx0cGljVXJsIDogJy4uL3N0YXRpYy9wcm9maWxlLTEuanBnJyxcblx0ICAgIFx0bmFtZSA6ICdqYXJ2aXMnLFxuICAgIFx0fVxuICAgIH0sXG4gICAge1xuICAgIFx0aWQ6IDIsXG4gICAgIFx0ZGVzY3JpcHRpb246ICdEb25lYyBzaXQgYW1ldCBqdXN0byB1dCBuaXNsIHB1bHZpbmFyIGRhcGlidXMuIFByYWVzZW50IHBsYWNlcmF0IHR1cnBpcyBhdCB0dXJwaXMgcmhvbmN1cyBwaGFyZXRyYS4nLFxuICAgIFx0bGlrZXM6MzUsXG4gICAgXHRoYXNodGFncyA6IFsndHJ1ZW5vJywnaGFjaGlSb2t1JywncGFuZGEnLCdjb3JvbGxhJywnaW5pdGlhbEQnXSxcbiAgICAgXHRpbWFnZToge1xuICAgIFx0XHR0aXRsZTogJ1RydWVubycsXG4gICAgIFx0XHRkZXNjcmlwdGlvbjogJ1RveW90YSBDb3JvbGxhJyxcbiAgICBcdFx0aW1nVXJsOiAnLi4vc3RhdGljL2ltZy03LmpwZWcnLFxuICAgICBcdH0sXG4gICAgIFx0dXNlciA6IHtcblx0ICAgIFx0cGljVXJsIDogJy4uL3N0YXRpYy9wcm9maWxlLTMucG5nJyxcblx0ICAgIFx0bmFtZSA6ICdzdWx0YW5vZnNwZWVkJyxcbiAgICAgXHR9XG4gICAgfSxcblxuICBdXG59XG5cbmZ1bmN0aW9uIFBvc3Qoe3Bvc3R9KSB7XG5cdHJldHVybiAoXG5cdFx0XG4gIFx0XHQ8ZGl2PlxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJpbmZvLXNlY3Rpb25cIj5cblx0XHQgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWdcIj5cblx0ICBcdFx0XHRcdFx0PGltZyBzcmM9e2Ake3Bvc3QudXNlci5waWNVcmx9YH0gYWx0PXtgJHtwb3N0LnVzZXIubmFtZX1gfSAvPiA8cD57cG9zdC51c2VyLm5hbWV9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cbiAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbWdcIj5cblx0XHQgIFx0XHRcdFx0PGltZyBzcmM9e2Ake3Bvc3QuaW1hZ2UuaW1nVXJsfWB9IGFsdD17YCR7cG9zdC5pbWFnZS50aXRsZX1gfSAvPlxuICBcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHQgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbmZvLXNlY3Rpb25cIj5cblx0XHQgIFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0ICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy10aXRsZS1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0ICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1kZXNjcmlwdGlvblwiPntwb3N0LmltYWdlLmRlc2NyaXB0aW9ufTxici8+e3Bvc3QuaW1hZ2UudGl0bGV9PC9kaXY+XG5cdFx0XHRcdCAgXHRcdFx0PC9kaXY+XG5cdFx0XHRcdCAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuXHRcdFx0XHQgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlrZS1idG5cIj5cblx0XHRcdFx0ICBcdFx0XHRcdDxNZEhlYXJ0T3V0bGluZSAvPlxuXHRcdFx0XHQgIFx0XHRcdDwvZGl2PlxuXHRcdCAgXHRcdFx0XHQ8L2Rpdj5cblx0XHQgIFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDwvZGl2PlxuXHQgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC1mb290ZXJcIj5cblx0ICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC1saWtlcy1zZWN0aW9uXCI+XG5cdCAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC1saWtlc1wiPlxuXHQgIFx0XHRcdFx0XHRcdDxNZEhlYXJ0IGZvbnRTaXplPVwiMjBweFwiIGNvbG9yPVwiIzAwM2NkY1wiIC8+PHA+e3Bvc3QubGlrZXN9IExpa2VzPC9wPlxuXHQgIFx0XHRcdFx0XHQ8L2Rpdj5cblx0ICBcdFx0XHRcdDwvZGl2PlxuXHQgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8cD57cG9zdC5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYXNoLXRhZ3NcIj5cblx0XHRcdFx0XHRcdDxwPiN7cG9zdC5oYXNodGFncy5qb2luKCcgIycpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29tbWVudHNcIj5cblx0XHRcdFx0XHRcdDxwPlZpZXcgMTIgY29tbWVudHM8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0PC9kaXY+XG5cbiAgXHRcdFx0PC9kaXY+XG5cblx0XHQgIFx0PHN0eWxlIGpzeD57YFxuXG5cdFx0ICBcdFx0KiB7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3N0IHtcblx0XHRcdCAgICAgIFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHQgICAgdGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdCAgICB9XG5cblx0XHQgIFx0XHQudXNlcmluZm8tc2VjdGlvbiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdCAgICB3aWR0aDogMTAwJTtcblx0XHRcdFx0ICAgIGhlaWdodDogNDBweDtcblx0XHRcdFx0ICAgIGxlZnQ6IDA7XG5cdFx0XHRcdCAgIFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdH1cblx0XHQgICAgICBcdFxuXHRcdCAgICAgIFx0LnByb2ZpbGUtaW1nIHtcblx0XHQgICAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcdFx0XHRcdGhlaWdodDoxMDAlO1xuICAgIFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHQgICAgICBcdH1cblxuXHRcdFx0XHQucHJvZmlsZS1pbWcgaW1nIHtcblx0XHRcdFx0XHR3aWR0aDoyNXB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHQgICAgLnBvc3QtaW1nIGltZyB7XG5cdFx0XHQgICAgXHR3aWR0aDoxMDAlOyAvKmdpdmUgcG9zdCBpbWFnZXMgdGhlIHdpbmRvdyB3aWR0aCovXG5cdFx0XHQgICAgXHRoZWlnaHQgOiBhdXRvO1xuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5wcm9maWxlLWltZyBwIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0XHRjb2xvcjogIzAwM2NkYztcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7IC8vdG8gbWFrZSBpdCBsb29rIGxpa2UgY2xpY2thYmxlXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0fVxuXG5cdFx0XHQgICAgLnBvc3QtaW5mby1zZWN0aW9uIHtcblx0XHRcdCAgICAgIFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHQgICAgbGVmdDogMTBweDtcblx0XHRcdFx0ICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdCAgICBjb2xvcjp3aGl0ZTtcblx0XHRcdFx0ICAgIGJvdHRvbToxNXB4O1xuXHRcdFx0XHQgICAgd2lkdGg6IDEwMCU7XG5cdFx0XHQgICAgfVxuXG5cdFx0XHQgICAgLmltZy10aXRsZS1zZWN0aW9uIHtcblx0XHRcdCAgICBcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0ICAgIH1cblx0XHRcdCAgICBcblx0XHRcdCAgICAucG9zdC1pbmZvLXNlY3Rpb24gZGl2IHtcblx0XHRcdCAgICBcdGRpc3BsYXk6ZmxleFxuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5wb3N0LWluZm8tc2VjdGlvbiAuc3BhY2VyIHtcblx0XHRcdCAgICBcdGZsZXg6MTtcblx0XHRcdCAgICB9XG5cblx0XHRcdCAgICAucG9zdC1mb290ZXIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0ICAgIGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHQgICAgd2lkdGg6IDEwMCU7XG5cdFx0XHRcdCAgICBsZWZ0OiAwO1xuXHRcdFx0XHQgICBcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvc3QtZm9vdGVyID4gKjpmaXJzdC1jaGlsZCB7XG5cdFx0XHQgICAgXHRtYXJnaW4tdG9wOiAtMTVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3N0LWZvb3RlciA+ICoge1xuXHRcdFx0XHQgICAgZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdCAgICBtYXJnaW4tdG9wOiAwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9zdC1saWtlcyB7XG5cdFx0ICAgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXHRcdFx0XHRoZWlnaHQ6MTAwJTtcbiAgICBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gICAgXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0ICAgICAgXHR9XG5cblx0XHQgICAgICBcdC5wb3N0LWxpa2VzIHAge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDNjZGM7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0fVxuXG5cdFx0XHQgICAgLmxpa2UtYnRuIHtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDI1cHg7XG5cdFx0XHQgICAgfVxuXG5cdFx0XHQgICAgLnBvc3QtbGlrZXMtc2VjdGlvbiB7XG5cdFx0XHQgICAgXHRkaXNwbGF5OiBibG9jaztcblx0XHRcdCAgICB9XG5cblx0XHQgIFx0YH1cblx0XHQgIFx0PC9zdHlsZT5cblx0ICBcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8ZGl2PlxuXHRcdCAgXHR7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG5cdFx0ICBcdFx0PFBvc3Qga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuXHRcdCAgXHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdCAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG5cdFx0XHQgIDxidXR0b24+R28gdG8gQWJvdXQgUGFnZTwvYnV0dG9uPlxuXHRcdFx0PC9MaW5rPlxuXHRcdCAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuXG5cdFx0ICAgIDxzdHlsZSBqc3g+e2Bcblx0XHQgICAgICAqIHtcblx0XHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIFxuXHRcdCAgICAgIC5wb3N0LWxpa2VzIHtcblx0XHQgICAgICBcdFxuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdDwvTGF5b3V0PlxuXHQpXG59OyJdfQ== */\n/*@ sourceURL=/home/chin/git/noon-gallery/pages/index.js */"));
}
;

/***/ })

})
//# sourceMappingURL=index.js.8c239e39b9d93742b9aa.hot-update.js.map