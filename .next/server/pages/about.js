module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Footer.js":
/*!******************************!*\
  !*** ./Components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Users\\akumar7319\\UIWorkspace\\iankit3.github.io\\Components\\Footer.js";

const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        className: "text-xl",
        children: "Links"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: "About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Users\\akumar7319\\UIWorkspace\\iankit3.github.io\\Components\\Header.js";

const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "bg-gray-800",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center justify-between h-16",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center justify-between w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "h-14 -ml-4",
                  src: "/logo-white.svg",
                  alt: "web @ scale"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 8,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hidden md:block",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-10 flex items-baseline space-x-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  className: "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/about",
                  className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                  children: "Projects"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                  children: "Contact"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 7,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "-mr-2 flex md:hidden",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: () => {
                var e = document.getElementById("mobile-nav");
                e.style.display = e.style.display == "" || e.style.display == "none" ? "block" : "none";
              },
              className: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Open main menu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "block h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "hidden h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hidden md:hidden",
        id: "mobile-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/about",
            className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Components/Page.js":
/*!****************************!*\
  !*** ./Components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./Components/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./Components/Header.js");

var _jsxFileName = "D:\\Users\\akumar7319\\UIWorkspace\\iankit3.github.io\\Components\\Page.js";




const Renderer = Component => {
  const [selectedRouteIndex, setSelectedRouteIndex] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {
        selectedRouteIndex: selectedRouteIndex
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

const Page = P => {
  return Renderer.bind(undefined, P);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Page */ "./Components/Page.js");

var _jsxFileName = "D:\\Users\\akumar7319\\UIWorkspace\\iankit3.github.io\\pages\\about.js";


function AboutPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "About me Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, maxime, nam quod fugiat est obcaecati itaque eos iure impedit quam temporibus dolores aliquid eum cum, eveniet necessitatibus totam tempore quos. Voluptatibus labore similique accusamus aut doloribus minima corporis modi temporibus? Iste cupiditate ipsum mollitia beatae, voluptate maiores dolore repellendus rem repudiandae cumque optio eum ullam voluptates deserunt repellat ab consequuntur? Perferendis commodi culpa odio maxime delectus, in quos? In tempore inventore fugiat vitae odit esse rem, ab quasi ad aliquid doloribus dolore impedit iure. Officiis quo molestiae saepe. Reprehenderit, non. Fuga expedita quo vitae dolor sit, error tempore modi suscipit labore cupiditate repellendus ducimus autem fugiat distinctio incidunt consequatur sed laborum dolorem ab possimus perferendis repellat iure totam reiciendis. Molestiae! Sunt aperiam saepe magnam dicta culpa rem molestiae exercitationem. Magnam, quidem! Blanditiis, autem rem. Laboriosam sunt animi molestiae perspiciatis assumenda commodi sapiente repudiandae, saepe, aliquam adipisci aperiam eos incidunt praesentium. Illo nihil mollitia fuga a obcaecati provident dolores accusantium eveniet error reprehenderit debitis perspiciatis, commodi ullam assumenda porro exercitationem accusamus nesciunt rem dolorum et explicabo earum! Blanditiis sequi nihil nostrum! Quaerat dolorem eius nam quo amet officiis laborum eum quas in labore nobis eligendi perferendis praesentium aliquam, molestiae sed pariatur, aperiam at suscipit! Sit fugit autem delectus qui harum reprehenderit! Voluptate consequuntur ex voluptatibus saepe reiciendis necessitatibus nisi, exercitationem doloribus perferendis magni facilis aspernatur impedit quia nemo vitae natus commodi nihil corporis non voluptas atque nobis porro. Nihil, commodi tempora! Porro inventore ducimus officiis nisi. Reiciendis itaque error quidem iusto quas natus omnis dicta, deleniti, nihil fugiat molestiae nemo corporis nam eius accusantium odit placeat ad magni cumque doloribus veritatis. Culpa, sed? Soluta eum, earum laudantium velit quisquam quis labore blanditiis fugiat neque molestias, impedit asperiores dolore corrupti! Voluptas ipsam delectus repudiandae iste recusandae nam iure necessitatibus quibusdam perspiciatis repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem facere aperiam perspiciatis nihil mollitia. Sit facilis sapiente distinctio fugit alias ut ullam magni numquam consequuntur. Ut, porro labore. Rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et at tenetur aperiam accusamus qui ipsam, voluptates dolore quia rerum sapiente, possimus ad quas, soluta architecto rem quibusdam ea perspiciatis. Sint, suscipit facere? Totam corporis commodi rem molestias impedit, atque quam inventore ullam, quia enim, incidunt voluptatum! Sed, magni repellendus. Odit at saepe aliquam libero cupiditate, et quos expedita nostrum! Exercitationem blanditiis quos ducimus. Obcaecati, provident! Vero eveniet odit voluptatibus voluptatum laborum quisquam ab a minima tempore ex, recusandae velit laudantium illum cumque dolorum minus, possimus reprehenderit corporis omnis commodi. Error fugiat voluptas sunt ullam velit, aliquid labore vel quae dicta maxime esse! Esse tenetur dolorem nihil consequatur fugit vitae magni odio, numquam aliquam obcaecati veritatis, facilis ipsam, officia molestias? Facere laudantium quibusdam cumque doloribus voluptatibus voluptates ducimus rerum possimus quae ratione exercitationem sunt neque, impedit corporis sapiente minus eos deleniti nesciunt nam reiciendis pariatur ut excepturi. Sequi, cumque ad! Omnis, voluptas illum officiis, vitae ab, voluptatum perferendis quam vero consectetur officia provident eaque aliquam animi! Facere esse facilis consequuntur excepturi doloribus in quia voluptatibus ipsum quisquam, obcaecati molestiae aperiam? Perspiciatis fuga esse alias molestiae quasi earum exercitationem hic at officiis similique vitae ut ea quam totam dolorum in, inventore debitis culpa atque, amet, corrupti nesciunt. Earum porro voluptatum quisquam. Nam excepturi laudantium sapiente consequatur illo velit similique totam qui, dolore explicabo repellendus debitis vitae eos corrupti adipisci ipsa aperiam earum? Hic modi repudiandae facilis perferendis cupiditate architecto, exercitationem suscipit. Corrupti expedita, obcaecati, tempora laboriosam ex repellendus corporis inventore eius saepe nisi quo dolore blanditiis ab impedit sapiente sint, omnis aliquid quos. Qui consectetur, quibusdam iure rerum tempora ratione doloremque. Possimus laboriosam dolore, illum repudiandae incidunt tempore nemo accusantium quis eligendi exercitationem reiciendis vero culpa voluptatem dolorem tempora ex perferendis sit officiis assumenda aperiam libero. Sed laborum dicta voluptates non. Eius omnis esse minus! Sequi ipsum dolorum assumenda pariatur praesentium quibusdam architecto fugiat expedita natus a. Fugiat, repellendus itaque eius saepe voluptas dolores odit inventore, maxime eos temporibus ipsa voluptates. Ipsum autem sunt corporis placeat unde reiciendis facere, eaque assumenda tempora ullam fugit ratione pariatur, enim ipsa explicabo molestias deleniti eos quae libero excepturi nemo asperiores id. Laudantium, cupiditate in? Illum, et. Eum, nesciunt voluptatibus iusto iste maiores officiis blanditiis, quaerat provident aut ea repudiandae eligendi dolorum ex porro beatae ratione! Enim dolore accusantium officia esse omnis fuga, commodi vitae. Magni cupiditate repellendus aliquam iusto quas est impedit sed in distinctio nihil aperiam, itaque dicta quod nulla totam, ipsa nostrum delectus quae eum amet consectetur asperiores sit. Earum, quae minus? Reiciendis, reprehenderit ea libero dolorem provident unde illo amet tempora sed? Cum, eaque commodi voluptatem molestias ipsa maxime. Ipsam molestiae rem temporibus aspernatur quisquam. Ipsum, illo. Explicabo, repudiandae excepturi. Est! Fuga praesentium eligendi perferendis qui error veritatis ipsa asperiores earum. At tempore, sed dignissimos aut totam nostrum! Cum modi harum beatae. Dolorum asperiores, quod quia dolor ut laborum sed blanditiis! Quaerat aut numquam voluptatem provident, cumque nesciunt magnam magni id itaque consequuntur blanditiis. Velit amet quo maiores dolorum fugit sunt, explicabo cum reiciendis deleniti natus assumenda repudiandae dignissimos vel quaerat! Ab praesentium qui reprehenderit dicta atque voluptas ipsum quasi neque numquam doloribus, perspiciatis debitis iusto vel voluptatibus deleniti! Vero magni odit est ullam facilis expedita itaque sint, commodi neque maiores. Adipisci eaque accusamus, quisquam deleniti odio quo perspiciatis odit officia, ipsam quasi culpa architecto. Quibusdam quis neque voluptatum perferendis quia eos unde reiciendis, quas accusantium adipisci eligendi, similique tempore earum? Exercitationem architecto modi, repellendus tempora inventore, explicabo quos quis dolorum laboriosam sit earum illum rem animi doloremque, consequuntur neque? Temporibus explicabo omnis pariatur dolores nobis ratione? Debitis asperiores saepe maxime! "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_Components_Page__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutPage));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJSZW5kZXJlciIsIkNvbXBvbmVudCIsInNlbGVjdGVkUm91dGVJbmRleCIsInNldFNlbGVjdGVkUm91dGVJbmRleCIsIlJlYWN0IiwidXNlU3RhdGUiLCJQYWdlIiwiUCIsImJpbmQiLCJBYm91dFBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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LElBQVQsQ0FBYyxTQUFkLEVBQW9CRCxDQUFwQixDQUFQO0FBQ0QsQ0FGRDs7QUFJZUQsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVBLFNBQVNHLFNBQVQsR0FBcUI7QUFDbkIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQTZCRDs7QUFFY0gsK0hBQUksQ0FBQ0csU0FBRCxDQUFuQixFOzs7Ozs7Ozs7OztBQ2xDQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWJvdXQuanNcIik7XG4iLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8YiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+TGlua3M8L2I+XHJcbiAgICAgICAgPGxpPkhvbWU8L2xpPlxyXG4gICAgICAgIDxsaT5BYm91dDwvbGk+XHJcbiAgICAgICAgPGxpPkJsb2c8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICBcclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTQgLW1sLTRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ3ZWIgQCBzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBmbGV4IGl0ZW1zLWJhc2VsaW5lIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmxvZ1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tci0yIGZsZXggbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbmF2XCIpO1xyXG4gICAgICAgICAgICAgICAgICBlLnN0eWxlLmRpc3BsYXkgPSAoZS5zdHlsZS5kaXNwbGF5ID09IFwiXCIgfHwgZS5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpoaWRkZW5cIiBpZD1cIm1vYmlsZS1uYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xIHNtOnB4LTNcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IFJlbmRlcmVyID0gKENvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvdXRlSW5kZXgsIHNldFNlbGVjdGVkUm91dGVJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4gaWQ9XCJtYWluXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCBzZWxlY3RlZFJvdXRlSW5kZXg9e3NlbGVjdGVkUm91dGVJbmRleH0gLz57XCIgXCJ9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoUCkgPT4ge1xyXG4gIHJldHVybiBSZW5kZXJlci5iaW5kKHRoaXMsIFApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIiwiaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL0NvbXBvbmVudHMvUGFnZVwiO1xyXG5cclxuZnVuY3Rpb24gQWJvdXRQYWdlKCkge1xyXG4gIHJldHVybiA8ZGl2PkFib3V0IG1lIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcywgbWF4aW1lLCBuYW0gcXVvZCBmdWdpYXQgZXN0IG9iY2FlY2F0aSBpdGFxdWUgZW9zIGl1cmUgaW1wZWRpdCBxdWFtIHRlbXBvcmlidXMgZG9sb3JlcyBhbGlxdWlkIGV1bSBjdW0sIGV2ZW5pZXQgbmVjZXNzaXRhdGlidXMgdG90YW0gdGVtcG9yZSBxdW9zLlxyXG4gIFZvbHVwdGF0aWJ1cyBsYWJvcmUgc2ltaWxpcXVlIGFjY3VzYW11cyBhdXQgZG9sb3JpYnVzIG1pbmltYSBjb3Jwb3JpcyBtb2RpIHRlbXBvcmlidXM/IElzdGUgY3VwaWRpdGF0ZSBpcHN1bSBtb2xsaXRpYSBiZWF0YWUsIHZvbHVwdGF0ZSBtYWlvcmVzIGRvbG9yZSByZXBlbGxlbmR1cyByZW0gcmVwdWRpYW5kYWUgY3VtcXVlIG9wdGlvIGV1bSB1bGxhbSB2b2x1cHRhdGVzIGRlc2VydW50IHJlcGVsbGF0IGFiIGNvbnNlcXV1bnR1cj9cclxuICBQZXJmZXJlbmRpcyBjb21tb2RpIGN1bHBhIG9kaW8gbWF4aW1lIGRlbGVjdHVzLCBpbiBxdW9zPyBJbiB0ZW1wb3JlIGludmVudG9yZSBmdWdpYXQgdml0YWUgb2RpdCBlc3NlIHJlbSwgYWIgcXVhc2kgYWQgYWxpcXVpZCBkb2xvcmlidXMgZG9sb3JlIGltcGVkaXQgaXVyZS4gT2ZmaWNpaXMgcXVvIG1vbGVzdGlhZSBzYWVwZS4gUmVwcmVoZW5kZXJpdCwgbm9uLlxyXG4gIEZ1Z2EgZXhwZWRpdGEgcXVvIHZpdGFlIGRvbG9yIHNpdCwgZXJyb3IgdGVtcG9yZSBtb2RpIHN1c2NpcGl0IGxhYm9yZSBjdXBpZGl0YXRlIHJlcGVsbGVuZHVzIGR1Y2ltdXMgYXV0ZW0gZnVnaWF0IGRpc3RpbmN0aW8gaW5jaWR1bnQgY29uc2VxdWF0dXIgc2VkIGxhYm9ydW0gZG9sb3JlbSBhYiBwb3NzaW11cyBwZXJmZXJlbmRpcyByZXBlbGxhdCBpdXJlIHRvdGFtIHJlaWNpZW5kaXMuIE1vbGVzdGlhZSFcclxuICBTdW50IGFwZXJpYW0gc2FlcGUgbWFnbmFtIGRpY3RhIGN1bHBhIHJlbSBtb2xlc3RpYWUgZXhlcmNpdGF0aW9uZW0uIE1hZ25hbSwgcXVpZGVtISBCbGFuZGl0aWlzLCBhdXRlbSByZW0uIExhYm9yaW9zYW0gc3VudCBhbmltaSBtb2xlc3RpYWUgcGVyc3BpY2lhdGlzIGFzc3VtZW5kYSBjb21tb2RpIHNhcGllbnRlIHJlcHVkaWFuZGFlLCBzYWVwZSwgYWxpcXVhbSBhZGlwaXNjaSBhcGVyaWFtIGVvcyBpbmNpZHVudCBwcmFlc2VudGl1bS5cclxuICBJbGxvIG5paGlsIG1vbGxpdGlhIGZ1Z2EgYSBvYmNhZWNhdGkgcHJvdmlkZW50IGRvbG9yZXMgYWNjdXNhbnRpdW0gZXZlbmlldCBlcnJvciByZXByZWhlbmRlcml0IGRlYml0aXMgcGVyc3BpY2lhdGlzLCBjb21tb2RpIHVsbGFtIGFzc3VtZW5kYSBwb3JybyBleGVyY2l0YXRpb25lbSBhY2N1c2FtdXMgbmVzY2l1bnQgcmVtIGRvbG9ydW0gZXQgZXhwbGljYWJvIGVhcnVtISBCbGFuZGl0aWlzIHNlcXVpIG5paGlsIG5vc3RydW0hXHJcbiAgUXVhZXJhdCBkb2xvcmVtIGVpdXMgbmFtIHF1byBhbWV0IG9mZmljaWlzIGxhYm9ydW0gZXVtIHF1YXMgaW4gbGFib3JlIG5vYmlzIGVsaWdlbmRpIHBlcmZlcmVuZGlzIHByYWVzZW50aXVtIGFsaXF1YW0sIG1vbGVzdGlhZSBzZWQgcGFyaWF0dXIsIGFwZXJpYW0gYXQgc3VzY2lwaXQhIFNpdCBmdWdpdCBhdXRlbSBkZWxlY3R1cyBxdWkgaGFydW0gcmVwcmVoZW5kZXJpdCFcclxuICBWb2x1cHRhdGUgY29uc2VxdXVudHVyIGV4IHZvbHVwdGF0aWJ1cyBzYWVwZSByZWljaWVuZGlzIG5lY2Vzc2l0YXRpYnVzIG5pc2ksIGV4ZXJjaXRhdGlvbmVtIGRvbG9yaWJ1cyBwZXJmZXJlbmRpcyBtYWduaSBmYWNpbGlzIGFzcGVybmF0dXIgaW1wZWRpdCBxdWlhIG5lbW8gdml0YWUgbmF0dXMgY29tbW9kaSBuaWhpbCBjb3Jwb3JpcyBub24gdm9sdXB0YXMgYXRxdWUgbm9iaXMgcG9ycm8uIE5paGlsLCBjb21tb2RpIHRlbXBvcmEhXHJcbiAgUG9ycm8gaW52ZW50b3JlIGR1Y2ltdXMgb2ZmaWNpaXMgbmlzaS4gUmVpY2llbmRpcyBpdGFxdWUgZXJyb3IgcXVpZGVtIGl1c3RvIHF1YXMgbmF0dXMgb21uaXMgZGljdGEsIGRlbGVuaXRpLCBuaWhpbCBmdWdpYXQgbW9sZXN0aWFlIG5lbW8gY29ycG9yaXMgbmFtIGVpdXMgYWNjdXNhbnRpdW0gb2RpdCBwbGFjZWF0IGFkIG1hZ25pIGN1bXF1ZSBkb2xvcmlidXMgdmVyaXRhdGlzLlxyXG4gIEN1bHBhLCBzZWQ/IFNvbHV0YSBldW0sIGVhcnVtIGxhdWRhbnRpdW0gdmVsaXQgcXVpc3F1YW0gcXVpcyBsYWJvcmUgYmxhbmRpdGlpcyBmdWdpYXQgbmVxdWUgbW9sZXN0aWFzLCBpbXBlZGl0IGFzcGVyaW9yZXMgZG9sb3JlIGNvcnJ1cHRpISBWb2x1cHRhcyBpcHNhbSBkZWxlY3R1cyByZXB1ZGlhbmRhZSBpc3RlIHJlY3VzYW5kYWUgbmFtIGl1cmUgbmVjZXNzaXRhdGlidXMgcXVpYnVzZGFtIHBlcnNwaWNpYXRpcyByZXBlbGxhdC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTGliZXJvIHJlbSBmYWNlcmUgYXBlcmlhbSBwZXJzcGljaWF0aXMgbmloaWwgbW9sbGl0aWEuIFNpdCBmYWNpbGlzIHNhcGllbnRlIGRpc3RpbmN0aW8gZnVnaXQgYWxpYXMgdXQgdWxsYW0gbWFnbmkgbnVtcXVhbSBjb25zZXF1dW50dXIuIFV0LCBwb3JybyBsYWJvcmUuIFJlcnVtLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZXB1ZGlhbmRhZSBldCBhdCB0ZW5ldHVyIGFwZXJpYW0gYWNjdXNhbXVzIHF1aSBpcHNhbSwgdm9sdXB0YXRlcyBkb2xvcmUgcXVpYSByZXJ1bSBzYXBpZW50ZSwgcG9zc2ltdXMgYWQgcXVhcywgc29sdXRhIGFyY2hpdGVjdG8gcmVtIHF1aWJ1c2RhbSBlYSBwZXJzcGljaWF0aXMuXHJcbiAgU2ludCwgc3VzY2lwaXQgZmFjZXJlPyBUb3RhbSBjb3Jwb3JpcyBjb21tb2RpIHJlbSBtb2xlc3RpYXMgaW1wZWRpdCwgYXRxdWUgcXVhbSBpbnZlbnRvcmUgdWxsYW0sIHF1aWEgZW5pbSwgaW5jaWR1bnQgdm9sdXB0YXR1bSEgU2VkLCBtYWduaSByZXBlbGxlbmR1cy4gT2RpdCBhdCBzYWVwZSBhbGlxdWFtIGxpYmVybyBjdXBpZGl0YXRlLCBldCBxdW9zIGV4cGVkaXRhIG5vc3RydW0hXHJcbiAgRXhlcmNpdGF0aW9uZW0gYmxhbmRpdGlpcyBxdW9zIGR1Y2ltdXMuIE9iY2FlY2F0aSwgcHJvdmlkZW50ISBWZXJvIGV2ZW5pZXQgb2RpdCB2b2x1cHRhdGlidXMgdm9sdXB0YXR1bSBsYWJvcnVtIHF1aXNxdWFtIGFiIGEgbWluaW1hIHRlbXBvcmUgZXgsIHJlY3VzYW5kYWUgdmVsaXQgbGF1ZGFudGl1bSBpbGx1bSBjdW1xdWUgZG9sb3J1bSBtaW51cywgcG9zc2ltdXMgcmVwcmVoZW5kZXJpdCBjb3Jwb3JpcyBvbW5pcyBjb21tb2RpLlxyXG4gIEVycm9yIGZ1Z2lhdCB2b2x1cHRhcyBzdW50IHVsbGFtIHZlbGl0LCBhbGlxdWlkIGxhYm9yZSB2ZWwgcXVhZSBkaWN0YSBtYXhpbWUgZXNzZSEgRXNzZSB0ZW5ldHVyIGRvbG9yZW0gbmloaWwgY29uc2VxdWF0dXIgZnVnaXQgdml0YWUgbWFnbmkgb2RpbywgbnVtcXVhbSBhbGlxdWFtIG9iY2FlY2F0aSB2ZXJpdGF0aXMsIGZhY2lsaXMgaXBzYW0sIG9mZmljaWEgbW9sZXN0aWFzP1xyXG4gIEZhY2VyZSBsYXVkYW50aXVtIHF1aWJ1c2RhbSBjdW1xdWUgZG9sb3JpYnVzIHZvbHVwdGF0aWJ1cyB2b2x1cHRhdGVzIGR1Y2ltdXMgcmVydW0gcG9zc2ltdXMgcXVhZSByYXRpb25lIGV4ZXJjaXRhdGlvbmVtIHN1bnQgbmVxdWUsIGltcGVkaXQgY29ycG9yaXMgc2FwaWVudGUgbWludXMgZW9zIGRlbGVuaXRpIG5lc2NpdW50IG5hbSByZWljaWVuZGlzIHBhcmlhdHVyIHV0IGV4Y2VwdHVyaS4gU2VxdWksIGN1bXF1ZSBhZCFcclxuICBPbW5pcywgdm9sdXB0YXMgaWxsdW0gb2ZmaWNpaXMsIHZpdGFlIGFiLCB2b2x1cHRhdHVtIHBlcmZlcmVuZGlzIHF1YW0gdmVybyBjb25zZWN0ZXR1ciBvZmZpY2lhIHByb3ZpZGVudCBlYXF1ZSBhbGlxdWFtIGFuaW1pISBGYWNlcmUgZXNzZSBmYWNpbGlzIGNvbnNlcXV1bnR1ciBleGNlcHR1cmkgZG9sb3JpYnVzIGluIHF1aWEgdm9sdXB0YXRpYnVzIGlwc3VtIHF1aXNxdWFtLCBvYmNhZWNhdGkgbW9sZXN0aWFlIGFwZXJpYW0/XHJcbiAgUGVyc3BpY2lhdGlzIGZ1Z2EgZXNzZSBhbGlhcyBtb2xlc3RpYWUgcXVhc2kgZWFydW0gZXhlcmNpdGF0aW9uZW0gaGljIGF0IG9mZmljaWlzIHNpbWlsaXF1ZSB2aXRhZSB1dCBlYSBxdWFtIHRvdGFtIGRvbG9ydW0gaW4sIGludmVudG9yZSBkZWJpdGlzIGN1bHBhIGF0cXVlLCBhbWV0LCBjb3JydXB0aSBuZXNjaXVudC4gRWFydW0gcG9ycm8gdm9sdXB0YXR1bSBxdWlzcXVhbS5cclxuICBOYW0gZXhjZXB0dXJpIGxhdWRhbnRpdW0gc2FwaWVudGUgY29uc2VxdWF0dXIgaWxsbyB2ZWxpdCBzaW1pbGlxdWUgdG90YW0gcXVpLCBkb2xvcmUgZXhwbGljYWJvIHJlcGVsbGVuZHVzIGRlYml0aXMgdml0YWUgZW9zIGNvcnJ1cHRpIGFkaXBpc2NpIGlwc2EgYXBlcmlhbSBlYXJ1bT8gSGljIG1vZGkgcmVwdWRpYW5kYWUgZmFjaWxpcyBwZXJmZXJlbmRpcyBjdXBpZGl0YXRlIGFyY2hpdGVjdG8sIGV4ZXJjaXRhdGlvbmVtIHN1c2NpcGl0LlxyXG4gIENvcnJ1cHRpIGV4cGVkaXRhLCBvYmNhZWNhdGksIHRlbXBvcmEgbGFib3Jpb3NhbSBleCByZXBlbGxlbmR1cyBjb3Jwb3JpcyBpbnZlbnRvcmUgZWl1cyBzYWVwZSBuaXNpIHF1byBkb2xvcmUgYmxhbmRpdGlpcyBhYiBpbXBlZGl0IHNhcGllbnRlIHNpbnQsIG9tbmlzIGFsaXF1aWQgcXVvcy4gUXVpIGNvbnNlY3RldHVyLCBxdWlidXNkYW0gaXVyZSByZXJ1bSB0ZW1wb3JhIHJhdGlvbmUgZG9sb3JlbXF1ZS5cclxuICBQb3NzaW11cyBsYWJvcmlvc2FtIGRvbG9yZSwgaWxsdW0gcmVwdWRpYW5kYWUgaW5jaWR1bnQgdGVtcG9yZSBuZW1vIGFjY3VzYW50aXVtIHF1aXMgZWxpZ2VuZGkgZXhlcmNpdGF0aW9uZW0gcmVpY2llbmRpcyB2ZXJvIGN1bHBhIHZvbHVwdGF0ZW0gZG9sb3JlbSB0ZW1wb3JhIGV4IHBlcmZlcmVuZGlzIHNpdCBvZmZpY2lpcyBhc3N1bWVuZGEgYXBlcmlhbSBsaWJlcm8uIFNlZCBsYWJvcnVtIGRpY3RhIHZvbHVwdGF0ZXMgbm9uLlxyXG4gIEVpdXMgb21uaXMgZXNzZSBtaW51cyEgU2VxdWkgaXBzdW0gZG9sb3J1bSBhc3N1bWVuZGEgcGFyaWF0dXIgcHJhZXNlbnRpdW0gcXVpYnVzZGFtIGFyY2hpdGVjdG8gZnVnaWF0IGV4cGVkaXRhIG5hdHVzIGEuIEZ1Z2lhdCwgcmVwZWxsZW5kdXMgaXRhcXVlIGVpdXMgc2FlcGUgdm9sdXB0YXMgZG9sb3JlcyBvZGl0IGludmVudG9yZSwgbWF4aW1lIGVvcyB0ZW1wb3JpYnVzIGlwc2Egdm9sdXB0YXRlcy5cclxuICBJcHN1bSBhdXRlbSBzdW50IGNvcnBvcmlzIHBsYWNlYXQgdW5kZSByZWljaWVuZGlzIGZhY2VyZSwgZWFxdWUgYXNzdW1lbmRhIHRlbXBvcmEgdWxsYW0gZnVnaXQgcmF0aW9uZSBwYXJpYXR1ciwgZW5pbSBpcHNhIGV4cGxpY2FibyBtb2xlc3RpYXMgZGVsZW5pdGkgZW9zIHF1YWUgbGliZXJvIGV4Y2VwdHVyaSBuZW1vIGFzcGVyaW9yZXMgaWQuIExhdWRhbnRpdW0sIGN1cGlkaXRhdGUgaW4/XHJcbiAgSWxsdW0sIGV0LiBFdW0sIG5lc2NpdW50IHZvbHVwdGF0aWJ1cyBpdXN0byBpc3RlIG1haW9yZXMgb2ZmaWNpaXMgYmxhbmRpdGlpcywgcXVhZXJhdCBwcm92aWRlbnQgYXV0IGVhIHJlcHVkaWFuZGFlIGVsaWdlbmRpIGRvbG9ydW0gZXggcG9ycm8gYmVhdGFlIHJhdGlvbmUhIEVuaW0gZG9sb3JlIGFjY3VzYW50aXVtIG9mZmljaWEgZXNzZSBvbW5pcyBmdWdhLCBjb21tb2RpIHZpdGFlLlxyXG4gIE1hZ25pIGN1cGlkaXRhdGUgcmVwZWxsZW5kdXMgYWxpcXVhbSBpdXN0byBxdWFzIGVzdCBpbXBlZGl0IHNlZCBpbiBkaXN0aW5jdGlvIG5paGlsIGFwZXJpYW0sIGl0YXF1ZSBkaWN0YSBxdW9kIG51bGxhIHRvdGFtLCBpcHNhIG5vc3RydW0gZGVsZWN0dXMgcXVhZSBldW0gYW1ldCBjb25zZWN0ZXR1ciBhc3BlcmlvcmVzIHNpdC4gRWFydW0sIHF1YWUgbWludXM/XHJcbiAgUmVpY2llbmRpcywgcmVwcmVoZW5kZXJpdCBlYSBsaWJlcm8gZG9sb3JlbSBwcm92aWRlbnQgdW5kZSBpbGxvIGFtZXQgdGVtcG9yYSBzZWQ/IEN1bSwgZWFxdWUgY29tbW9kaSB2b2x1cHRhdGVtIG1vbGVzdGlhcyBpcHNhIG1heGltZS4gSXBzYW0gbW9sZXN0aWFlIHJlbSB0ZW1wb3JpYnVzIGFzcGVybmF0dXIgcXVpc3F1YW0uIElwc3VtLCBpbGxvLiBFeHBsaWNhYm8sIHJlcHVkaWFuZGFlIGV4Y2VwdHVyaS4gRXN0IVxyXG4gIEZ1Z2EgcHJhZXNlbnRpdW0gZWxpZ2VuZGkgcGVyZmVyZW5kaXMgcXVpIGVycm9yIHZlcml0YXRpcyBpcHNhIGFzcGVyaW9yZXMgZWFydW0uIEF0IHRlbXBvcmUsIHNlZCBkaWduaXNzaW1vcyBhdXQgdG90YW0gbm9zdHJ1bSEgQ3VtIG1vZGkgaGFydW0gYmVhdGFlLiBEb2xvcnVtIGFzcGVyaW9yZXMsIHF1b2QgcXVpYSBkb2xvciB1dCBsYWJvcnVtIHNlZCBibGFuZGl0aWlzIVxyXG4gIFF1YWVyYXQgYXV0IG51bXF1YW0gdm9sdXB0YXRlbSBwcm92aWRlbnQsIGN1bXF1ZSBuZXNjaXVudCBtYWduYW0gbWFnbmkgaWQgaXRhcXVlIGNvbnNlcXV1bnR1ciBibGFuZGl0aWlzLiBWZWxpdCBhbWV0IHF1byBtYWlvcmVzIGRvbG9ydW0gZnVnaXQgc3VudCwgZXhwbGljYWJvIGN1bSByZWljaWVuZGlzIGRlbGVuaXRpIG5hdHVzIGFzc3VtZW5kYSByZXB1ZGlhbmRhZSBkaWduaXNzaW1vcyB2ZWwgcXVhZXJhdCFcclxuICBBYiBwcmFlc2VudGl1bSBxdWkgcmVwcmVoZW5kZXJpdCBkaWN0YSBhdHF1ZSB2b2x1cHRhcyBpcHN1bSBxdWFzaSBuZXF1ZSBudW1xdWFtIGRvbG9yaWJ1cywgcGVyc3BpY2lhdGlzIGRlYml0aXMgaXVzdG8gdmVsIHZvbHVwdGF0aWJ1cyBkZWxlbml0aSEgVmVybyBtYWduaSBvZGl0IGVzdCB1bGxhbSBmYWNpbGlzIGV4cGVkaXRhIGl0YXF1ZSBzaW50LCBjb21tb2RpIG5lcXVlIG1haW9yZXMuXHJcbiAgQWRpcGlzY2kgZWFxdWUgYWNjdXNhbXVzLCBxdWlzcXVhbSBkZWxlbml0aSBvZGlvIHF1byBwZXJzcGljaWF0aXMgb2RpdCBvZmZpY2lhLCBpcHNhbSBxdWFzaSBjdWxwYSBhcmNoaXRlY3RvLiBRdWlidXNkYW0gcXVpcyBuZXF1ZSB2b2x1cHRhdHVtIHBlcmZlcmVuZGlzIHF1aWEgZW9zIHVuZGUgcmVpY2llbmRpcywgcXVhcyBhY2N1c2FudGl1bSBhZGlwaXNjaSBlbGlnZW5kaSwgc2ltaWxpcXVlIHRlbXBvcmUgZWFydW0/XHJcbiAgRXhlcmNpdGF0aW9uZW0gYXJjaGl0ZWN0byBtb2RpLCByZXBlbGxlbmR1cyB0ZW1wb3JhIGludmVudG9yZSwgZXhwbGljYWJvIHF1b3MgcXVpcyBkb2xvcnVtIGxhYm9yaW9zYW0gc2l0IGVhcnVtIGlsbHVtIHJlbSBhbmltaSBkb2xvcmVtcXVlLCBjb25zZXF1dW50dXIgbmVxdWU/IFRlbXBvcmlidXMgZXhwbGljYWJvIG9tbmlzIHBhcmlhdHVyIGRvbG9yZXMgbm9iaXMgcmF0aW9uZT8gRGViaXRpcyBhc3BlcmlvcmVzIHNhZXBlIG1heGltZSEgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlKEFib3V0UGFnZSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9