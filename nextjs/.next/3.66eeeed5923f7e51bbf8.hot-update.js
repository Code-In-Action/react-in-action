webpackHotUpdate(3,{

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);

var _jsxFileName = '/Users/go7hic/workspace/Github/React-in-action/nextjs/pages/post.js';



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var Post = function Post(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'h1',
      {
        className: 'jsx-1364578154',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      props.show.name
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'p',
      {
        className: 'jsx-1364578154',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      props.show.summary.replace(/<[/]?p>/g, '')
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: props.show.image.medium, className: 'jsx-1364578154',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
      styleId: '1364578154',
      css: 'li.jsx-1364578154{list-style:none;margin:5px 0;}a.jsx-1364578154{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:"Arial";}a.jsx-1364578154:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW1CLEFBRzBCLEFBS0ssQUFNVCxZQUNkLElBWGUsYUFDZixxQkFJYSxXQUNTLG9CQUN0QiIsImZpbGUiOiJwYWdlcy9wb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nbzdoaWMvd29ya3NwYWNlL0dpdGh1Yi9SZWFjdC1pbi1hY3Rpb24vbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgUG9zdCA9ICAocHJvcHMpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4gICAgICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP3A+L2csICcnKX08L3A+XG4gICAgICAgPGltZyBzcmM9e3Byb3BzLnNob3cuaW1hZ2UubWVkaXVtfS8+XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIGxpIHtcbiAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgIH1cbiBcbiAgICAgICBhIHtcbiAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICB9XG4gXG4gICAgICAgYTpob3ZlciB7XG4gICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgfVxuICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pXG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApXG4gIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YClcblxuICByZXR1cm4geyBzaG93IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdfQ== */\n/*@ sourceURL=pages/post.js */'
    })
  );
};

Post.getInitialProps = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, res, show;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;


            console.log('Fetched show: ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = Post;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Post, 'Post', '/Users/go7hic/workspace/Github/React-in-action/nextjs/pages/post.js');
  reactHotLoader.register(_default, 'default', '/Users/go7hic/workspace/Github/React-in-action/nextjs/pages/post.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.66eeeed5923f7e51bbf8.hot-update.js.map