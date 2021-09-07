/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 33479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _tag_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/layout/index.js + 2 modules
var layout = __webpack_require__(14164);
// EXTERNAL MODULE: ./uteis/index.js
var uteis = __webpack_require__(51295);
// EXTERNAL MODULE: ./src/components/loader/page.js + 1 modules
var page = __webpack_require__(2315);
// EXTERNAL MODULE: ./node_modules/@tryghost/content-api/cjs/content-api.js
var content_api = __webpack_require__(55738);
var content_api_default = /*#__PURE__*/__webpack_require__.n(content_api);
;// CONCATENATED MODULE: ./src/api/index.js

const api = new (content_api_default())({
  url: 'https://blogadmin.acheifornecedor.com',
  key: '1962d97db06766c9a862d61f9a',
  version: "v3"
});
async function getPosts() {
  const posts = await api.posts.browse({
    limit: "all",
    include: 'tags,authors'
  }).catch(err => {
    console.error(err);
  });
  return posts;
}
async function getPostsByTag(tag) {
  console.log(tag);
  const posts = await api.posts.browse({
    filter: `tags:[${tag}]`,
    include: 'tags,authors'
  }).catch(err => {
    console.error(err);
  });
  return posts;
}
async function getTag(slug) {
  const tag = await api.tags.read({
    slug: slug
  }, {
    include: 'count.posts,posts'
  });
  return tag;
}
async function getTags() {
  const tags = await api.tags.browse({
    limit: "all",
    include: 'count.posts,posts'
  }).catch(err => {
    console.error(err);
  });
  return tags;
}
async function getSinglePost(postSlug) {
  return await api.posts.read({
    slug: postSlug,
    include: 'tags,authors'
  }).catch(err => {
    console.error(err);
  });
}
async function getSettings() {
  const settings = await api.settings.browse();
  return settings;
}
// EXTERNAL MODULE: ./node_modules/reactstrap/lib/index.js
var lib = __webpack_require__(45408);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./src/components/author/index.js
var components_author = __webpack_require__(44284);
;// CONCATENATED MODULE: ./src/components/banner/categoria.js






function IndexHeader({
  tag
}) {
  console.log(tag);
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "clear-filter post-single",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "top-image position-relative",
        style: {
          backgroundImage: `url(${tag.feature_image})`
        },
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "bg-image"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "align-items-center justify-content-center h-100 d-flex position-absolute w-100",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "content-post",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "text-center mb-0 text-white text-italic",
              children: "Categoria:"
            }), /*#__PURE__*/jsx_runtime.jsx("h1", {
              className: "text-center bold text-white",
              children: tag.name
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex text-white justify-content-center",
              children: [tag.authors && tag.authors.map(author => {
                return /*#__PURE__*/jsx_runtime.jsx(components_author/* default */.Z, {
                  author: author
                }, author.id);
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "text-center mb-0",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(lib/* Badge */.Ct, {
                  children: ["Quantidade pe publica\xE7\xF5es: ", tag.count.posts]
                })
              })]
            })]
          })
        })]
      })
    })
  });
}

/* harmony default export */ var categoria = (IndexHeader);
// EXTERNAL MODULE: ./src/components/metatags/index.js
var metatags = __webpack_require__(60628);
// EXTERNAL MODULE: ./src/components/post/postList.js + 1 modules
var postList = __webpack_require__(60082);
;// CONCATENATED MODULE: ./src/components/layout/content.js



const Content = ({
  children
}) => /*#__PURE__*/jsx_runtime.jsx(lib/* Container */.W2, {
  className: "container",
  style: {
    marginTop: -30,
    zIndex: 9,
    position: "relative"
  },
  children: /*#__PURE__*/jsx_runtime.jsx(lib/* Row */.X2, {
    className: "justify-content-center",
    children: /*#__PURE__*/jsx_runtime.jsx(lib/* Col */.JX, {
      sm: "12",
      md: "10",
      children: /*#__PURE__*/jsx_runtime.jsx(lib/* Card */.Zb, {
        children: /*#__PURE__*/jsx_runtime.jsx(lib/* CardBody */.eW, {
          children: children
        })
      })
    })
  })
});

/* harmony default export */ var content = (Content);
// EXTERNAL MODULE: ./amplifyconfig.js
var amplifyconfig = __webpack_require__(81533);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./pages/categoria/[tag].js
















function Single(props) {
  const {
    tag,
    posts
  } = props;
  const router = (0,next_router.useRouter)();
  react.useEffect(() => {
    (0,uteis/* prepararTela */.pd)();
  }, []);

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime.jsx("div", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime.jsx(head.default, {
      children: /*#__PURE__*/jsx_runtime.jsx(metatags/* default */.Z, {
        title: tag.name,
        og_image: tag.og_image,
        description: tag.description,
        feature_image: tag.feature_image
      })
    }), /*#__PURE__*/jsx_runtime.jsx(page/* default */.Z, {
      loading: false
    }), /*#__PURE__*/jsx_runtime.jsx(categoria, {
      tag: tag
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(content, {
      children: [/*#__PURE__*/jsx_runtime.jsx(lib/* Breadcrumb */.aG, {
        children: /*#__PURE__*/jsx_runtime.jsx("p", {
          children: tag.description
        })
      }), /*#__PURE__*/jsx_runtime.jsx(lib/* Row */.X2, {
        children: posts.map(post => {
          return /*#__PURE__*/jsx_runtime.jsx(lib/* Col */.JX, {
            sm: "6",
            lg: "12",
            className: "post",
            children: /*#__PURE__*/jsx_runtime.jsx(postList/* default */.Z, {
              post: post
            })
          }, post.id);
        })
      })]
    })]
  });
}

async function getStaticPaths() {
  const result = await getTags();
  const paths = result.map(post => ({
    params: {
      tag: post.slug
    }
  }));
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps(context) {
  const tag = await getTag(context.params.tag);
  const posts = await getPostsByTag(tag.slug);

  if (!tag) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      tag,
      posts
    },
    revalidate: 1
  };
}
/* harmony default export */ var _tag_ = (Single);

/***/ }),

/***/ 9553:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(88881)

      const appMod = __webpack_require__(7672)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(33479)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/categoria/[tag]",
        buildId: "-D-t8kNoL_l8_e2StW-Wk",
        escapedBuildId: "\-D\-t8kNoL_l8_e2StW\-Wk",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"0bb9ba6b023139c30cd8927eb07117fe",previewModeSigningKey:"8ae89601fba042bee7aa5083e78ef314f2dc54430e5121c5d47a472c61dc4d19",previewModeEncryptionKey:"9e846fa287e27e36ff054a7fa6bebc7f02a114eaeb0c57c5261c65e3be7ca61b"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ (function(module) {

module.exports = require("assert");;

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 63129:
/***/ (function(module) {

module.exports = require("child_process");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 97565:
/***/ (function(module) {

module.exports = require("http2");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 61765:
/***/ (function(module) {

module.exports = require("process");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 33867:
/***/ (function(module) {

module.exports = require("tty");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [920,911,738,263,675,134,651,428,82,634,567,295], function() { return __webpack_require__(9553); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			63: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(920);
/******/ 			__webpack_require__.e(911);
/******/ 			__webpack_require__.e(738);
/******/ 			__webpack_require__.e(263);
/******/ 			__webpack_require__.e(675);
/******/ 			__webpack_require__.e(134);
/******/ 			__webpack_require__.e(651);
/******/ 			__webpack_require__.e(428);
/******/ 			__webpack_require__.e(82);
/******/ 			__webpack_require__.e(634);
/******/ 			__webpack_require__.e(567);
/******/ 			__webpack_require__.e(295);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;