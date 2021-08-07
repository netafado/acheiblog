exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 32738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/989WI79iw2mbkHtbjLXpI/_buildManifest.js","static/989WI79iw2mbkHtbjLXpI/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-9fc9ab40a062a7008df3.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/ea88be26-9bcf6ead520f4ac26973.js","static/chunks/911-a80d2c2d256b58aeb49f.js","static/chunks/793-21f15bc59782df5c22ae.js","static/chunks/989-71c32cddff477f07228b.js","static/chunks/pages/index-0e9c45dbcc0b3a8941fc.js"],"/[slug]":["static/chunks/webpack-9fc9ab40a062a7008df3.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/ea88be26-9bcf6ead520f4ac26973.js","static/chunks/911-a80d2c2d256b58aeb49f.js","static/chunks/989-71c32cddff477f07228b.js","static/chunks/pages/[slug]-65ac36d27c93e8164350.js"],"/_app":["static/chunks/webpack-9fc9ab40a062a7008df3.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/css/aa8bcd465c6e588410a5.css","static/chunks/pages/_app-f4fb16d9ad54d149851e.js"],"/_error":["static/chunks/webpack-9fc9ab40a062a7008df3.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js"],"/categoria/[tag]":["static/chunks/webpack-9fc9ab40a062a7008df3.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/ea88be26-9bcf6ead520f4ac26973.js","static/chunks/911-a80d2c2d256b58aeb49f.js","static/chunks/793-21f15bc59782df5c22ae.js","static/chunks/989-71c32cddff477f07228b.js","static/chunks/pages/categoria/[tag]-d3f13c3f0c3dcc6e1159.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 19392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 7672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53869);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35414);
/* harmony import */ var _src_aws_exports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82181);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31650);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9008);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










aws_amplify__WEBPACK_IMPORTED_MODULE_4___default().configure(_objectSpread(_objectSpread({}, _src_aws_exports__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z), {}, {
  ssr: true
}));

function MyApp({
  Component,
  pageProps,
  router
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .AnimatePresence */ .M, {
    exitBeforeEnter: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
      exit: "pageExit",
      initial: "pageInitial",
      animate: "pageAnimate",
      variants: {
        pageInitial: {
          opacity: 0.3,
          y: -30
        },
        pageAnimate: {
          opacity: 1,
          y: -0
        },
        exit: {
          opacity: 0.2,
          transition: {
            transition: {
              staggerChildren: 0.1
            }
          },
          y: 30
        }
      },
      children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        key: router.route
      }))
    }, router.route)
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 82181:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
  "aws_project_region": "us-west-2"
};
/* harmony default export */ __webpack_exports__["Z"] = (awsmobile);

/***/ })

};
;