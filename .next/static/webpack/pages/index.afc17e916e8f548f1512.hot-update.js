"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useUser */ "./lib/useUser.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\dutch\\Documents\\ASU\\IFT402\\WebApp\\DEVELOPMENT\\components\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();







 //const Burger = React.forwardRef(({ onClick }) => {
//    return (
//        <div className="navbar-burger burger" id="burger" onClick={onClick}>
//            <span aria-hidden="true"></span>
//            <span aria-hidden="true"></span>
//            <span aria-hidden="true"></span>
//        </div>
//    )
//})



var toggleBurger = function toggleBurger(e) {
  var burgerIcon = document.getElementById('burger');
  var dropMenu = document.getElementById('navMenu');
  burgerIcon.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
};

var Header = function Header() {
  _s();

  var _useUser = (0,_lib_useUser__WEBPACK_IMPORTED_MODULE_2__.default)(),
      user = _useUser.user,
      mutateUser = _useUser.mutateUser;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
    className: "navbar is-fixed-top is-dark",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "navbar-menu",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "navbar-end",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
          className: "login-list",
          children: [!(user !== null && user !== void 0 && user.isLoggedIn) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                src: "/farmerIcon.png",
                width: "32",
                height: "32"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "navbar-burger burger",
      id: "burger",
      onClick: toggleBurger,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        "aria-hidden": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        "aria-hidden": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        "aria-hidden": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "navbar-menu is-light has-background-grey-lighter is-hidden-desktop",
      id: "navMenu",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
        className: "menu-list burgerMenu",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__.default, {
            activeClassName: "is-active",
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faHome,
                className: "menu-list"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 37
              }, _this), "Dashboard"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__.default, {
            activeClassName: "is-active",
            href: "/reports",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFileInvoice,
                className: "menu-list"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 37
              }, _this), "Reports"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__.default, {
            activeClassName: "is-active",
            href: "/cropAnalytics",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChartBar,
                className: "menu-list"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 37
              }, _this), "Crop Analytics"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__.default, {
            activeClassName: "is-active",
            href: "/inbox",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faInbox,
                className: "menu-list"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 37
              }, _this), "Inbox"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__.default, {
            activeClassName: "is-active",
            href: "/media",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPhotoFilm,
                className: "menu-list"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 37
              }, _this), "Media"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__.default, {
            activeClassName: "is-active",
            href: "/settings",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGears,
                className: "menu-list"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 37
              }, _this), "Settings"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

_s(Header, "+SWOUKRV89YDDgFOzop54qqxTvo=", false, function () {
  return [_lib_useUser__WEBPACK_IMPORTED_MODULE_2__.default, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWZjMTdlOTE2ZThmNTQ4ZjE1MTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Q0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEIsTUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBakI7QUFDQSxNQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0FGLEVBQUFBLFVBQVUsQ0FBQ0ksU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsV0FBNUI7QUFDQUYsRUFBQUEsUUFBUSxDQUFDQyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixXQUExQjtBQUNILENBTEQ7O0FBT0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQixpQkFBNkJsQixxREFBTyxFQUFwQztBQUFBLE1BQVFtQixJQUFSLFlBQVFBLElBQVI7QUFBQSxNQUFjQyxVQUFkLFlBQWNBLFVBQWQ7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHcEIsc0RBQVMsRUFBeEI7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEscUJBQ0ssRUFBQ2tCLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVHLFVBQVAsa0JBQ0c7QUFBQSxtQ0FDSSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsUUFBWDtBQUFBLHFDQUNJO0FBQUE7QUFBQTtBQUFBO0FB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UUFBN0M7QUFBQSxtQ0FDSTtBQUFBLHNDQUNJLDhEQUFDLDJFQUFEO0FBQWlCLG9CQUFJLEVBQUVDLDBFQUF2QjtBQUFvQyx5QkFBUyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakNKLGVBeUNJO0FBQUEsaUNBQ0ksOERBQUMsZ0RBQUQ7QUFBWSwyQkFBZSxFQUFDLFdBQTVCO0FBQXdDLGdCQUFJLEVBQUMsV0FBN0M7QUFBQSxtQ0FDSTtBQUFBLHNDQUNJLDhEQUFDLDJFQUFEO0FBQWlCLG9CQUFJLEVBQUVDLHNFQUF2QjtBQUFnQyx5QkFBUyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErRUgsQ0FsRkQ7O0dBQU1TO1VBQzJCbEIsbURBQ2RDOzs7S0FGYmlCO0FBb0ZOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB1c2VVc2VyIGZyb20gJy4uL2xpYi91c2VVc2VyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFIb21lLCBmYUZpbGVJbnZvaWNlLCBmYUNoYXJ0QmFyLCBmYUluYm94LCBmYVBob3RvRmlsbSwgZmFHZWFycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuXG5cbi8vY29uc3QgQnVyZ2VyID0gUmVhY3QuZm9yd2FyZFJlZigoeyBvbkNsaWNrIH0pID0+IHtcbi8vICAgIHJldHVybiAoXG4vLyAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiIGlkPVwiYnVyZ2VyXCIgb25DbGljaz17b25DbGlja30+XG4vLyAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbi8vICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuLy8gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4vLyAgICAgICAgPC9kaXY+XG4vLyAgICApXG4vL30pXG5cbmNvbnN0IHRvZ2dsZUJ1cmdlciA9IChlKSA9PiB7XG4gICAgbGV0IGJ1cmdlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJyk7XG4gICAgbGV0IGRyb3BNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1lbnUnKTtcbiAgICBidXJnZXJJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIGRyb3BNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyLCBtdXRhdGVVc2VyIH0gPSB1c2VVc2VyKClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1kYXJrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsb2dpbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IXVzZXI/LmlzTG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Zhcm1lckljb24ucG5nXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIgaWQ9XCJidXJnZXJcIiBvbkNsaWNrPXt0b2dnbGVCdXJnZXJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1tZW51IGlzLWxpZ2h0IGhhcy1iYWNrZ3JvdW5kLWdyZXktbGlnaHRlciBpcy1oaWRkZW4tZGVza3RvcFwiIGlkPVwibmF2TWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0IGJ1cmdlck1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBjbGFzc05hbWU9XCJtZW51LWxpc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiIGhyZWY9XCIvcmVwb3J0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZX0gY2xhc3NOYW1lPVwibWVudS1saXN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCIgaHJlZj1cIi9jcm9wQW5hbHl0aWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoYXJ0QmFyfSBjbGFzc05hbWU9XCJtZW51LWxpc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JvcCBBbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCIgaHJlZj1cIi9pbmJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbmJveH0gY2xhc3NOYW1lPVwibWVudS1saXN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiIGhyZWY9XCIvbWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGhvdG9GaWxtfSBjbGFzc05hbWU9XCJtZW51LWxpc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCIgaHJlZj1cIi9zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHZWFyc30gY2xhc3NOYW1lPVwibWVudS1saXN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlVXNlciIsInVzZVJvdXRlciIsIkFjdGl2ZUxpbmsiLCJGb250QXdlc29tZUljb24iLCJmYUhvbWUiLCJmYUZpbGVJbnZvaWNlIiwiZmFDaGFydEJhciIsImZhSW5ib3giLCJmYVBob3RvRmlsbSIsImZhR2VhcnMiLCJ0b2dnbGVCdXJnZXIiLCJlIiwiYnVyZ2VySWNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcm9wTWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIkhlYWRlciIsInVzZXIiLCJtdXRhdGVVc2VyIiwicm91dGVyIiwiaXNMb2dnZWRJbiJdLCJzb3VyY2VSb290IjoiIn0=