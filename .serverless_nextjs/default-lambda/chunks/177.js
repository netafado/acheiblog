exports.id = 177;
exports.ids = [177,408,651];
exports.modules = {

/***/ 34651:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(69448);

var _interopRequireDefault = __webpack_require__(62426);

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _router2 = _interopRequireWildcard(__webpack_require__(29414));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(36171);

var _withRouter = _interopRequireDefault(__webpack_require__(47413));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ 92775:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(67294));

var _sideEffect = _interopRequireDefault(__webpack_require__(73244));

var _ampContext = __webpack_require__(23398);

var _headManagerContext = __webpack_require__(41165);

var _amp = __webpack_require__(76393);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead(inAmpMode = false) {
  const head = [/*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react.default.Fragment) {
    return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let isUnique = true;
    let hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = _react.default.Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;

    if ( true && !props.inAmpMode) {
      if (c.type === 'link' && c.props['href'] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
      ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined; // Add this attribute to make it easy to identify optimized tags

        newProps['data-optimized-fonts'] = true;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      }
    }

    return /*#__PURE__*/_react.default.cloneElement(c, {
      key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head({
  children
}) {
  const ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  const headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react.default.createElement(_sideEffect.default, {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

var _default = Head;
exports.default = _default;

/***/ }),

/***/ 45408:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = true;
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;

var _Container2 = _interopRequireDefault(__webpack_require__(88859));

exports.W2 = _Container2.default;

var _Row2 = _interopRequireDefault(__webpack_require__(22301));

exports.X2 = _Row2.default;

var _Col2 = _interopRequireDefault(__webpack_require__(21498));

exports.JX = _Col2.default;

var _Navbar2 = _interopRequireDefault(__webpack_require__(42349));

exports.wp = _Navbar2.default;

var _NavbarBrand2 = _interopRequireDefault(__webpack_require__(23213));

exports.UG = _NavbarBrand2.default;

var _NavbarText2 = _interopRequireDefault(__webpack_require__(762));

__webpack_unused_export__ = _NavbarText2.default;

var _NavbarToggler2 = _interopRequireDefault(__webpack_require__(7707));

__webpack_unused_export__ = _NavbarToggler2.default;

var _Nav2 = _interopRequireDefault(__webpack_require__(94138));

exports.JL = _Nav2.default;

var _NavItem2 = _interopRequireDefault(__webpack_require__(87719));

exports.LY = _NavItem2.default;

var _NavLink2 = _interopRequireDefault(__webpack_require__(4243));

__webpack_unused_export__ = _NavLink2.default;

var _Breadcrumb2 = _interopRequireDefault(__webpack_require__(94368));

__webpack_unused_export__ = _Breadcrumb2.default;

var _BreadcrumbItem2 = _interopRequireDefault(__webpack_require__(66633));

__webpack_unused_export__ = _BreadcrumbItem2.default;

var _Button2 = _interopRequireDefault(__webpack_require__(13180));

__webpack_unused_export__ = _Button2.default;

var _ButtonToggle2 = _interopRequireDefault(__webpack_require__(52101));

__webpack_unused_export__ = _ButtonToggle2.default;

var _ButtonDropdown2 = _interopRequireDefault(__webpack_require__(65083));

__webpack_unused_export__ = _ButtonDropdown2.default;

var _ButtonGroup2 = _interopRequireDefault(__webpack_require__(8912));

__webpack_unused_export__ = _ButtonGroup2.default;

var _ButtonToolbar2 = _interopRequireDefault(__webpack_require__(50990));

__webpack_unused_export__ = _ButtonToolbar2.default;

var _Dropdown2 = _interopRequireDefault(__webpack_require__(71086));

__webpack_unused_export__ = _Dropdown2.default;

var _DropdownItem2 = _interopRequireDefault(__webpack_require__(16486));

__webpack_unused_export__ = _DropdownItem2.default;

var _DropdownMenu2 = _interopRequireDefault(__webpack_require__(29479));

__webpack_unused_export__ = _DropdownMenu2.default;

var _DropdownToggle2 = _interopRequireDefault(__webpack_require__(76673));

__webpack_unused_export__ = _DropdownToggle2.default;

var _DropdownContext = __webpack_require__(55386);

__webpack_unused_export__ = _DropdownContext.DropdownContext;

var _Fade2 = _interopRequireDefault(__webpack_require__(4678));

__webpack_unused_export__ = _Fade2.default;

var _Badge2 = _interopRequireDefault(__webpack_require__(30571));

exports.Ct = _Badge2.default;

var _Card2 = _interopRequireDefault(__webpack_require__(31332));

exports.Zb = _Card2.default;

var _CardGroup2 = _interopRequireDefault(__webpack_require__(63562));

__webpack_unused_export__ = _CardGroup2.default;

var _CardDeck2 = _interopRequireDefault(__webpack_require__(52146));

__webpack_unused_export__ = _CardDeck2.default;

var _CardColumns2 = _interopRequireDefault(__webpack_require__(86230));

__webpack_unused_export__ = _CardColumns2.default;

var _CardBody2 = _interopRequireDefault(__webpack_require__(12686));

exports.eW = _CardBody2.default;

var _CardLink2 = _interopRequireDefault(__webpack_require__(68722));

__webpack_unused_export__ = _CardLink2.default;

var _CardFooter2 = _interopRequireDefault(__webpack_require__(99987));

__webpack_unused_export__ = _CardFooter2.default;

var _CardHeader2 = _interopRequireDefault(__webpack_require__(77700));

__webpack_unused_export__ = _CardHeader2.default;

var _CardImg2 = _interopRequireDefault(__webpack_require__(60721));

__webpack_unused_export__ = _CardImg2.default;

var _CardImgOverlay2 = _interopRequireDefault(__webpack_require__(72836));

__webpack_unused_export__ = _CardImgOverlay2.default;

var _Carousel2 = _interopRequireDefault(__webpack_require__(43269));

__webpack_unused_export__ = _Carousel2.default;

var _UncontrolledCarousel2 = _interopRequireDefault(__webpack_require__(6221));

__webpack_unused_export__ = _UncontrolledCarousel2.default;

var _CarouselControl2 = _interopRequireDefault(__webpack_require__(83325));

__webpack_unused_export__ = _CarouselControl2.default;

var _CarouselItem2 = _interopRequireDefault(__webpack_require__(69148));

__webpack_unused_export__ = _CarouselItem2.default;

var _CarouselIndicators2 = _interopRequireDefault(__webpack_require__(33273));

__webpack_unused_export__ = _CarouselIndicators2.default;

var _CarouselCaption2 = _interopRequireDefault(__webpack_require__(7231));

__webpack_unused_export__ = _CarouselCaption2.default;

var _CardSubtitle2 = _interopRequireDefault(__webpack_require__(92278));

__webpack_unused_export__ = _CardSubtitle2.default;

var _CardText2 = _interopRequireDefault(__webpack_require__(11802));

__webpack_unused_export__ = _CardText2.default;

var _CardTitle2 = _interopRequireDefault(__webpack_require__(57895));

__webpack_unused_export__ = _CardTitle2.default;

var _CustomFileInput2 = _interopRequireDefault(__webpack_require__(55501));

__webpack_unused_export__ = _CustomFileInput2.default;

var _CustomInput2 = _interopRequireDefault(__webpack_require__(91869));

__webpack_unused_export__ = _CustomInput2.default;

var _PopperContent2 = _interopRequireDefault(__webpack_require__(86242));

__webpack_unused_export__ = _PopperContent2.default;

var _PopperTargetHelper2 = _interopRequireDefault(__webpack_require__(92726));

__webpack_unused_export__ = _PopperTargetHelper2.default;

var _Popover2 = _interopRequireDefault(__webpack_require__(28360));

__webpack_unused_export__ = _Popover2.default;

var _UncontrolledPopover2 = _interopRequireDefault(__webpack_require__(49376));

__webpack_unused_export__ = _UncontrolledPopover2.default;

var _PopoverHeader2 = _interopRequireDefault(__webpack_require__(31348));

__webpack_unused_export__ = _PopoverHeader2.default;

var _PopoverBody2 = _interopRequireDefault(__webpack_require__(51390));

__webpack_unused_export__ = _PopoverBody2.default;

var _Progress2 = _interopRequireDefault(__webpack_require__(6013));

__webpack_unused_export__ = _Progress2.default;

var _Modal2 = _interopRequireDefault(__webpack_require__(52474));

__webpack_unused_export__ = _Modal2.default;

var _ModalHeader2 = _interopRequireDefault(__webpack_require__(20695));

__webpack_unused_export__ = _ModalHeader2.default;

var _ModalBody2 = _interopRequireDefault(__webpack_require__(68975));

__webpack_unused_export__ = _ModalBody2.default;

var _ModalFooter2 = _interopRequireDefault(__webpack_require__(15549));

__webpack_unused_export__ = _ModalFooter2.default;

var _Tooltip2 = _interopRequireDefault(__webpack_require__(50858));

__webpack_unused_export__ = _Tooltip2.default;

var _Table2 = _interopRequireDefault(__webpack_require__(67909));

__webpack_unused_export__ = _Table2.default;

var _ListGroup2 = _interopRequireDefault(__webpack_require__(4662));

__webpack_unused_export__ = _ListGroup2.default;

var _Form2 = _interopRequireDefault(__webpack_require__(53883));

__webpack_unused_export__ = _Form2.default;

var _FormFeedback2 = _interopRequireDefault(__webpack_require__(32521));

__webpack_unused_export__ = _FormFeedback2.default;

var _FormGroup2 = _interopRequireDefault(__webpack_require__(42443));

__webpack_unused_export__ = _FormGroup2.default;

var _FormText2 = _interopRequireDefault(__webpack_require__(12881));

__webpack_unused_export__ = _FormText2.default;

var _Input2 = _interopRequireDefault(__webpack_require__(62646));

__webpack_unused_export__ = _Input2.default;

var _InputGroup2 = _interopRequireDefault(__webpack_require__(43331));

__webpack_unused_export__ = _InputGroup2.default;

var _InputGroupAddon2 = _interopRequireDefault(__webpack_require__(95440));

__webpack_unused_export__ = _InputGroupAddon2.default;

var _InputGroupButtonDropdown2 = _interopRequireDefault(__webpack_require__(69236));

__webpack_unused_export__ = _InputGroupButtonDropdown2.default;

var _InputGroupText2 = _interopRequireDefault(__webpack_require__(77966));

__webpack_unused_export__ = _InputGroupText2.default;

var _Label2 = _interopRequireDefault(__webpack_require__(45466));

exports.__ = _Label2.default;

var _Media2 = _interopRequireDefault(__webpack_require__(23996));

__webpack_unused_export__ = _Media2.default;

var _Pagination2 = _interopRequireDefault(__webpack_require__(25886));

__webpack_unused_export__ = _Pagination2.default;

var _PaginationItem2 = _interopRequireDefault(__webpack_require__(16030));

__webpack_unused_export__ = _PaginationItem2.default;

var _PaginationLink2 = _interopRequireDefault(__webpack_require__(95844));

__webpack_unused_export__ = _PaginationLink2.default;

var _TabContent2 = _interopRequireDefault(__webpack_require__(43522));

__webpack_unused_export__ = _TabContent2.default;

var _TabPane2 = _interopRequireDefault(__webpack_require__(2400));

__webpack_unused_export__ = _TabPane2.default;

var _Jumbotron2 = _interopRequireDefault(__webpack_require__(56690));

__webpack_unused_export__ = _Jumbotron2.default;

var _Alert2 = _interopRequireDefault(__webpack_require__(55512));

__webpack_unused_export__ = _Alert2.default;

var _Toast2 = _interopRequireDefault(__webpack_require__(98475));

__webpack_unused_export__ = _Toast2.default;

var _ToastBody2 = _interopRequireDefault(__webpack_require__(36039));

__webpack_unused_export__ = _ToastBody2.default;

var _ToastHeader2 = _interopRequireDefault(__webpack_require__(72244));

__webpack_unused_export__ = _ToastHeader2.default;

var _Collapse2 = _interopRequireDefault(__webpack_require__(48661));

exports.UO = _Collapse2.default;

var _ListGroupItem2 = _interopRequireDefault(__webpack_require__(87525));

__webpack_unused_export__ = _ListGroupItem2.default;

var _ListGroupItemHeading2 = _interopRequireDefault(__webpack_require__(57489));

__webpack_unused_export__ = _ListGroupItemHeading2.default;

var _ListGroupItemText2 = _interopRequireDefault(__webpack_require__(23983));

__webpack_unused_export__ = _ListGroupItemText2.default;

var _List2 = _interopRequireDefault(__webpack_require__(68496));

__webpack_unused_export__ = _List2.default;

var _ListInlineItem2 = _interopRequireDefault(__webpack_require__(40471));

__webpack_unused_export__ = _ListInlineItem2.default;

var _UncontrolledAlert2 = _interopRequireDefault(__webpack_require__(49597));

__webpack_unused_export__ = _UncontrolledAlert2.default;

var _UncontrolledButtonDropdown2 = _interopRequireDefault(__webpack_require__(34000));

__webpack_unused_export__ = _UncontrolledButtonDropdown2.default;

var _UncontrolledCollapse2 = _interopRequireDefault(__webpack_require__(74948));

__webpack_unused_export__ = _UncontrolledCollapse2.default;

var _UncontrolledDropdown2 = _interopRequireDefault(__webpack_require__(46237));

__webpack_unused_export__ = _UncontrolledDropdown2.default;

var _UncontrolledTooltip2 = _interopRequireDefault(__webpack_require__(47631));

exports.vg = _UncontrolledTooltip2.default;

var _Spinner2 = _interopRequireDefault(__webpack_require__(60353));

__webpack_unused_export__ = _Spinner2.default;

var _Util = _interopRequireWildcard(__webpack_require__(2221));

__webpack_unused_export__ = _Util;

var _Polyfill = _interopRequireWildcard(__webpack_require__(78272));

__webpack_unused_export__ = _Polyfill;

/***/ })

};
;