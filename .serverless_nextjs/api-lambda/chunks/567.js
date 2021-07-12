exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 60628:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);




const Metatags = ({
  og_title,
  url,
  title,
  og_description,
  description,
  og_image,
  feature_image
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [url ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:url",
      content: `${url}`
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: "company"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:title",
      content: og_title || title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:description",
      content: og_description || description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image",
      content: og_image || feature_image
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: title
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Metatags);

/***/ }),

/***/ 60082:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ postList; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/components/author/index.js
var components_author = __webpack_require__(44284);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/reactstrap/lib/index.js
var lib = __webpack_require__(45408);
;// CONCATENATED MODULE: ./src/components/post/labels.js




const Labels = ({
  tags
}) => {
  if (!tags) return null;
  return /*#__PURE__*/jsx_runtime.jsx("ul", {
    className: "list-inline overImage",
    children: /*#__PURE__*/jsx_runtime.jsx("li", {
      className: "list-inline-item me-3",
      children: tags && tags.map((tag, i) => {
        return /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          passHref: true,
          href: `/categoria/${tag.slug}`,
          children: /*#__PURE__*/jsx_runtime.jsx(lib/* Badge */.Ct, {
            color: "primary",
            className: "ml-1",
            children: tag.name
          }, `tag-${i}`)
        }, `tag-${i}`);
      })
    })
  });
};

/* harmony default export */ var labels = (Labels);
;// CONCATENATED MODULE: ./src/components/post/postList.js









const PostItem = ({
  post
}) => {
  const data = new Intl.DateTimeFormat('pt', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(post.published_at));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx("div", {
      className: "title",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
          className: "bold mb-0 text-truncate",
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: `/${post.slug}`,
            children: post.title
          })
        }), /*#__PURE__*/jsx_runtime.jsx(lib/* Label */.__, {
          className: "text-muted",
          children: data
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "position-relative mb-3 imageBgContainer",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "bg-image"
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "imageBg",
        style: {
          backgroundImage: `url(${post.feature_image})`
        }
      }), post.feature_image && /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "w-100 position-relative"
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "author-wrapper",
        children: post.authors.map(author => {
          return /*#__PURE__*/jsx_runtime.jsx(components_author/* default */.Z, {
            author: author
          }, author.id);
        })
      }), /*#__PURE__*/jsx_runtime.jsx(labels, {
        tags: post.tags
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("p", {
      className: "post-text text-black-50",
      children: post.custom_excerpt
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: `/${post.slug}`,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
          className: "btn btn-round text-center btn-primary",
          children: ["Saiba mais ", /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "mdi mdi-arrow-right"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx("hr", {})]
  });
};

/* harmony default export */ var postList = (PostItem);

/***/ })

};
;