'use strict';
!function() {
  /**
   * @param {!Array} obj
   * @param {number} n
   * @return {?}
   */
  function add(obj, n) {
    var value = "function" == typeof Symbol && obj[Symbol.iterator];
    if (!value) {
      return obj;
    }
    var item;
    var mockConsole;
    var cell = value.call(obj);
    /** @type {!Array} */
    var level = [];
    try {
      for (; (void 0 === n || 0 < n--) && !(item = cell.next()).done;) {
        level.push(item.value);
      }
    } catch (Console_error) {
      mockConsole = {
        error : Console_error
      };
    } finally {
      try {
        if (item && !item.done && (value = cell.return)) {
          value.call(cell);
        }
      } finally {
        if (mockConsole) {
          throw mockConsole.error;
        }
      }
    }
    return level;
  }
  /**
   * @param {!Array} res
   * @param {!Array} n
   * @param {string} data
   * @return {?}
   */
  function emit(res, n, data) {
    if (data || 2 === arguments.length) {
      var result;
      /** @type {number} */
      var e = 0;
      var el = n.length;
      for (; e < el; e++) {
        if (!(!result && e in n)) {
          (result = result || Array.prototype.slice.call(n, 0, e))[e] = n[e];
        }
      }
    }
    return res.concat(result || Array.prototype.slice.call(n));
  }
  /**
   * @param {!Array} endpoints
   * @return {?}
   */
  function clean(endpoints) {
    return JSON.stringify({
      ev_type : "batch",
      list : endpoints
    });
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function g(val) {
    return val;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function callback(a) {
    return "object" == typeof a && null !== a;
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function clone(e) {
    if (callback(e)) {
      if ("function" != typeof Object.getPrototypeOf) {
        return "[object Object]" === s.toString.call(e);
      }
      /** @type {(Object|null)} */
      e = Object.getPrototypeOf(e);
      return e === s || null === e;
    }
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArray(obj) {
    return "[object Array]" === s.toString.call(obj);
  }
  /**
   * @param {!Function} fn
   * @return {?}
   */
  function $(fn) {
    return "function" == typeof fn;
  }
  /**
   * @param {boolean} val
   * @return {?}
   */
  function isFinite(val) {
    return "number" == typeof val;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isString(value) {
    return "string" == typeof value;
  }
  /**
   * @param {!Array} actual
   * @return {?}
   */
  function isObject(actual) {
    return "undefined" != typeof Event && function(impromptuInstance, Impromptu) {
      try {
        return impromptuInstance instanceof Impromptu;
      } catch (e) {
        return;
      }
    }(actual, Event);
  }
  /**
   * @param {!Array} params
   * @param {(Object|string)} obj
   * @return {?}
   */
  function fn(params, obj) {
    var i;
    var r;
    var result = extend({}, params);
    for (i in obj) {
      /** @type {string} */
      r = i;
      if (Object.prototype.hasOwnProperty.call(obj, r) && void 0 !== obj[i]) {
        if (callback(obj[i]) && clone(obj[i])) {
          result[i] = fn(callback(params[i]) ? params[i] : {}, obj[i]);
        } else {
          if (isArray(obj[i]) && isArray(params[i])) {
            result[i] = function render(descriptor, data) {
              descriptor = isArray(descriptor) ? descriptor : [];
              data = isArray(data) ? data : [];
              return Array.prototype.concat.call(descriptor, data).map(function(value) {
                return value instanceof RegExp ? value : callback(value) && clone(value) ? fn({}, value) : isArray(value) ? render([], value) : value;
              });
            }(params[i], obj[i]);
          } else {
            result[i] = obj[i];
          }
        }
      }
    }
    return result;
  }
  /**
   * @param {!Object} name
   * @param {string} file
   * @return {?}
   */
  function resolve(name, file) {
    if (!isArray(name)) {
      return false;
    }
    if (0 === name.length) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (; i < name.length;) {
      if (name[i] === file) {
        return true;
      }
      i++;
    }
    return false;
  }
  /**
   * @param {!Array} arr
   * @param {string} value
   * @return {?}
   */
  function trim(arr, value) {
    if (!isArray(arr)) {
      return arr;
    }
    var key = arr.indexOf(value);
    if (0 <= key) {
      value = arr.slice();
      return value.splice(key, 1), value;
    }
    return arr;
  }
  /**
   * @param {string} value
   * @param {string} result
   * @param {!Function} handler
   * @return {?}
   */
  function reducer(value, result, handler) {
    var example;
    var type = (result = add(result.split(".")))[0];
    var view = result.slice(1);
    for (; value && 0 < view.length;) {
      value = value[type];
      type = (example = add(view))[0];
      view = example.slice(1);
    }
    if (value) {
      return handler(value, type);
    }
  }
  /**
   * @param {!NodeList} value
   * @return {?}
   */
  function next(value) {
    return isArray(value) && value.length ? function(e) {
      /** @type {!Array} */
      var t = [];
      var n = e.length;
      /** @type {number} */
      var j = 0;
      for (; j < n; j++) {
        var p = e[j];
        if (isString(p)) {
          t.push(p.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));
        } else {
          if (p && p.source) {
            t.push(p.source);
          }
        }
      }
      return new RegExp(t.join("|"), "i");
    }(value) : null;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function stringify(value) {
    try {
      return isString(value) ? value : JSON.stringify(value);
    } catch (creative_size) {
      return "[FAILED_TO_STRINGIFY]:" + String(creative_size);
    }
  }
  /**
   * @param {!Object} a
   * @param {string} name
   * @param {!Function} method
   * @return {?}
   */
  function bind(a, name, method) {
    return function() {
      /** @type {!Array} */
      var value = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        value[i] = arguments[i];
      }
      if (!a) {
        return r;
      }
      var t = a[name];
      var target = method.apply(void 0, emit([t], add(value), false));
      var e = target;
      return $(e) && (e = function() {
        /** @type {!Array} */
        var args = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        try {
          return target.apply(this, args);
        } catch (e) {
          return $(t) && t.apply(this, args);
        }
      }), a[name] = e, function(canCreateDiscussions) {
        if (!canCreateDiscussions) {
          if (e === a[name]) {
            a[name] = t;
          } else {
            target = t;
          }
        }
      };
    };
  }
  /**
   * @param {!Object} fn
   * @param {string} name
   * @param {!Function} callback
   * @return {?}
   */
  function cb(fn, name, callback) {
    return function() {
      /** @type {!Array} */
      var value = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        value[i] = arguments[i];
      }
      fn[name] = callback.apply(void 0, emit([fn[name]], add(value), false));
    };
  }
  /**
   * @return {undefined}
   */
  function push() {
    /** @type {!Array} */
    var value = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      value[i] = arguments[i];
    }
    console.warn.apply(console, emit(["[SDK]", Date.now(), ("" + nextGuid++).padStart(8, " ")], add(value), false));
  }
  /**
   * @param {!NodeList} s
   * @return {?}
   */
  function debug(s) {
    return function(argV) {
      /** @type {!Array} */
      var v = argV;
      /** @type {number} */
      var i = 0;
      for (; i < s.length && v; i++) {
        try {
          v = s[i](v);
        } catch (preparsed) {
          validate(preparsed);
        }
      }
      return v;
    };
  }
  /**
   * @return {?}
   */
  function mobileLogin() {
    var calleeIdentifier = function() {
      /** @type {!Array} */
      var map = new Array(16);
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      var num_elements = 0;
      for (; num_elements < 16; num_elements++) {
        if (0 == (3 & num_elements)) {
          /** @type {number} */
          n = 4294967296 * Math.random();
        }
        /** @type {number} */
        map[num_elements] = n >>> ((3 & num_elements) << 3) & 255;
      }
      return map;
    }();
    return calleeIdentifier[6] = 15 & calleeIdentifier[6] | 64, calleeIdentifier[8] = 63 & calleeIdentifier[8] | 128, function(arr) {
      /** @type {!Array} */
      var signedTransactions = [];
      /** @type {number} */
      var signedTransactionsCounter = 0;
      for (; signedTransactionsCounter < 256; ++signedTransactionsCounter) {
        /** @type {string} */
        signedTransactions[signedTransactionsCounter] = (signedTransactionsCounter + 256).toString(16).substr(1);
      }
      /** @type {number} */
      var L = 0;
      /** @type {!Array} */
      var hostRules = signedTransactions;
      return [hostRules[arr[L++]], hostRules[arr[L++]], hostRules[arr[L++]], hostRules[arr[L++]], "-", hostRules[arr[L++]], hostRules[arr[L++]], "-", hostRules[arr[L++]], hostRules[arr[L++]], "-", hostRules[arr[L++]], hostRules[arr[L++]], "-", hostRules[arr[L++]], hostRules[arr[L++]], hostRules[arr[L++]], hostRules[arr[L++]], hostRules[arr[+L]], hostRules[arr[15]]].join("");
    }(calleeIdentifier);
  }
  /**
   * @return {?}
   */
  function createElement() {
    if ("object" == typeof window && callback(window)) {
      return window;
    }
  }
  /**
   * @return {?}
   */
  function assign() {
    if ("object" == typeof document && callback(document)) {
      return document;
    }
  }
  /**
   * @return {?}
   */
  function require() {
    return createElement() && window.location;
  }
  /**
   * @return {?}
   */
  function merge() {
    if (createElement() && callback(window.performance)) {
      return window.performance;
    }
  }
  /**
   * @return {?}
   */
  function assert() {
    if ("function" == typeof XMLHttpRequest && $(XMLHttpRequest)) {
      return XMLHttpRequest;
    }
  }
  /**
   * @return {?}
   */
  function handleRequest() {
    try {
      return new Headers, new Request(""), new Response, window.fetch;
    } catch (e) {
    }
  }
  /**
   * @return {?}
   */
  function parseInt() {
    if (createElement() && $(window.MutationObserver)) {
      return window.MutationObserver;
    }
  }
  /**
   * @return {?}
   */
  function call() {
    if (createElement() && $(window.PerformanceObserver)) {
      return window.PerformanceObserver;
    }
  }
  /**
   * @return {?}
   */
  function func() {
    var result = merge();
    if (result && callback(result.timing)) {
      return result.timing;
    }
  }
  /**
   * @return {?}
   */
  function hasLowBandwidth() {
    var nav = function() {
      if (createElement() && "navigator" in window) {
        return window.navigator;
      }
    }();
    if (nav) {
      return nav.connection || nav.mozConnection || nav.webkitConnection;
    }
  }
  /**
   * @param {string} src
   * @return {?}
   */
  function getText(src) {
    var options = assign();
    if (!options || !src) {
      return "";
    }
    options = options.createElement("a");
    return options.href = src, options.href;
  }
  /**
   * @param {string} url
   * @return {?}
   */
  function parseURL(url) {
    var data = assign();
    if (!data || !url) {
      return {
        url : url,
        protocol : "",
        domain : "",
        query : "",
        path : "",
        hash : ""
      };
    }
    data = data.createElement("a");
    /** @type {string} */
    data.href = url;
    url = data.pathname || "/";
    return "/" !== url[0] && (url = "/" + url), {
      url : data.href,
      protocol : data.protocol.slice(0, -1),
      domain : data.hostname,
      query : data.search.substring(1),
      path : url,
      hash : data.hash
    };
  }
  /**
   * @return {?}
   */
  function find() {
    var fontAwesomeLink = createElement() && require();
    return null == fontAwesomeLink ? void 0 : fontAwesomeLink.href;
  }
  /**
   * @param {string} elem
   * @return {?}
   */
  function render(elem) {
    try {
      var data;
      /** @type {string} */
      var a = elem;
      /** @type {!Array} */
      var args = [];
      /** @type {number} */
      var o = 0;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var j = " > ".length;
      for (; a && o++ < 5 && !("html" === (data = function(value) {
        var serverElements;
        var key;
        var clearChatButton;
        var i;
        /** @type {string} */
        var current = value;
        /** @type {!Array} */
        var signatureString = [];
        if (!current || !current.tagName) {
          return "";
        }
        signatureString.push(current.tagName.toLowerCase());
        if (current.id) {
          signatureString.push("#" + current.id);
        }
        value = current.className;
        if (value && isString(value)) {
          serverElements = value.split(/\s+/);
          /** @type {number} */
          i = 0;
          for (; i < serverElements.length; i++) {
            signatureString.push("." + serverElements[i]);
          }
        }
        /** @type {!Array} */
        var attrWhitelist = ["type", "name", "title", "alt"];
        /** @type {number} */
        i = 0;
        for (; i < attrWhitelist.length; i++) {
          key = attrWhitelist[i];
          if (clearChatButton = current.getAttribute(key)) {
            signatureString.push("[" + key + '="' + clearChatButton + '"]');
          }
        }
        return signatureString.join("");
      }(a)) || 1 < o && 80 <= i + args.length * j + data.length);) {
        args.push(data);
        i = i + data.length;
        a = a.parentNode;
      }
      return args.reverse().join(" > ");
    } catch (e) {
      return shortName;
    }
  }
  /**
   * @param {number} fn
   * @return {?}
   */
  function tween(fn) {
    /**
     * @param {string} name
     * @param {?} callback
     * @return {?}
     */
    function wrap(name, callback) {
      var prevRoute;
      return function(route) {
        timeout = void 0;
        if (route && prevRoute !== route) {
          callback({
            event : prevRoute = route,
            name : name
          });
        }
      };
    }
    var timeout;
    return [wrap, function(options) {
      return function(context) {
        var target;
        try {
          target = context.target;
        } catch (e) {
          return;
        }
        var htmlElementName = target && target.tagName;
        if (htmlElementName && ("INPUT" === htmlElementName || "TEXTAREA" === htmlElementName || target.isContentEditable)) {
          if (!timeout) {
            wrap("input", options)(context);
          }
          clearTimeout(timeout);
          timeout = window.setTimeout(function() {
            timeout = void 0;
          }, fn);
        }
      };
    }];
  }
  /**
   * @param {?} n
   * @param {string} selector
   * @return {?}
   */
  function toggle(n, selector) {
    return function(appid) {
      if (selector) {
        try {
          n(appid);
        } catch (e) {
        }
      }
    };
  }
  /**
   * @param {!Function} __
   * @return {undefined}
   */
  function error(__) {
    var node = createElement();
    var target = assign();
    if (node && target) {
      if ("complete" !== target.readyState) {
        node.addEventListener("load", function() {
          setTimeout(function() {
            __();
          }, 0);
        }, false);
      } else {
        __();
      }
    }
  }
  /**
   * @param {!Function} callback
   * @param {number} finish
   * @return {undefined}
   */
  function stop(callback, finish) {
    var init;
    if (void 0 === finish) {
      /** @type {boolean} */
      finish = true;
    }
    if ("hidden" !== document.visibilityState) {
      /**
       * @return {undefined}
       */
      init = function() {
        if ("hidden" === document.visibilityState) {
          callback();
          if (finish) {
            removeEventListener("visibilitychange", init, true);
          }
        }
      };
      addEventListener("visibilitychange", init, true);
    } else {
      callback();
    }
  }
  /**
   * @param {!Object} item
   * @param {!Object} value
   * @return {?}
   */
  function log(item, value) {
    return callback(item) ? extend(extend({}, value), item) : !!item && value;
  }
  /**
   * @param {string} name
   * @param {!Object} type
   * @return {?}
   */
  function template(name, type) {
    return !(!name || !type) && (inlineAttributeCommentRegex.test(name) || inlineAttributeIgnoreCommentRegex.test(type));
  }
  /**
   * @param {!Object} data
   * @param {string} response
   * @param {!Object} request
   * @return {?}
   */
  function get(data, response, request) {
    var method = data._method;
    var responseHeaders = data._reqHeaders;
    var params = data._url;
    var start = data._start;
    var err = data._data;
    params = {
      api : "xhr",
      request : {
        url : params = getText(params),
        method : (method || "").toLowerCase(),
        headers : responseHeaders,
        timestamp : start
      },
      response : {
        status : data.status || 0,
        is_custom_error : false,
        timing : request(params),
        timestamp : Date.now()
      },
      duration : Date.now() - start
    };
    if ("function" == typeof data.getAllResponseHeaders) {
      params.response.headers = isString(string = data.getAllResponseHeaders()) && string ? string.split("\r\n").reduce(function(eventPage, x) {
        var y;
        return isString(x) && (x = (y = add(x.split(": "), 2))[0], y = y[1], template(x, y) || (eventPage[x.toLowerCase()] = y)), eventPage;
      }, {}) : {};
    }
    start = params.response.status;
    var string = response.collectBodyOnError;
    response = response.extraExtractor;
    try {
      var body = null == response ? void 0 : response(data.response, params);
      if (body) {
        params.extra = body;
      }
      if (body) {
        /** @type {boolean} */
        params.response.is_custom_error = true;
      }
      if (string && 400 <= start) {
        /** @type {(string|undefined)} */
        params.request.body = err ? "" + err : void 0;
        /** @type {(string|undefined)} */
        params.response.body = data.response ? "" + data.response : void 0;
      }
    } catch (e) {
    }
    return params;
  }
  /**
   * @param {!Function} e
   * @param {string} d
   * @return {?}
   */
  function write(e, d) {
    return !!(e = next(e || [])) && e.test(d);
  }
  /**
   * @param {!Array} options
   * @return {?}
   */
  function pop(options) {
    var last = add(step(options), 5)[4];
    return function(args) {
      return last(args).pop();
    };
  }
  /**
   * @param {!Function} o
   * @return {?}
   */
  function link(o) {
    return function() {
      /** @type {!Array} */
      var f = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        f[i] = arguments[i];
      }
      this._reqHeaders = this._reqHeaders || {};
      var result = add(f, 2);
      var app = result[0];
      result = result[1];
      return template(app, result) || (this._reqHeaders[app.toLowerCase()] = result), o && o.apply(this, f);
    };
  }
  /**
   * @param {!Function} _
   * @param {?} e
   * @param {!Object} tagName
   * @param {number} command
   * @return {?}
   */
  function end(_, e, tagName, command) {
    return function() {
      var error;
      var message;
      var xhr = this;
      /** @type {!Array} */
      var obj = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        obj[i] = arguments[i];
      }
      return message = command, cb(error = this, "onreadystatechange", function(callback, config, dispatch) {
        return function() {
          /** @type {!Array} */
          var args = [];
          /** @type {number} */
          var i = 0;
          for (; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          try {
            if (4 === this.readyState && !write(config.ignoreUrls, error._url) && dispatch) {
              dispatch({
                ev_type : "http",
                payload : get(error, config, message)
              });
            }
          } catch ($stack) {
            slice($stack);
          }
          return callback && callback.apply(this, args);
        };
      })(e, e.hookCbAtReq(tagName)), e.setTraceHeader && e.setTraceHeader(this._url, function(i, sessionId) {
        return xhr.setRequestHeader(i, sessionId);
      }), this._start = Date.now(), this._data = null == obj ? void 0 : obj[0], _.apply(this, obj);
    };
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  function newCallback(callback) {
    return function() {
      var element;
      /** @type {!Array} */
      var values = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        values[i] = arguments[i];
      }
      return element = add(values, 2), this._method = element[0], this._url = element[1], callback.apply(this, values);
    };
  }
  /**
   * @param {!Object} t
   * @param {number} e
   * @param {number} type
   * @param {?} rate
   * @return {undefined}
   */
  function process(t, e, type, rate) {
    cb(t, "open", newCallback)();
    cb(t, "setRequestHeader", link)();
    cb(t, "send", end)(e, type, rate);
  }
  /**
   * @return {?}
   */
  function uuid4() {
    var pad = window.crypto || window.msCrypto;
    if (void 0 !== pad && pad.getRandomValues) {
      /** @type {!Uint16Array} */
      var buffer = new Uint16Array(8);
      pad.getRandomValues(buffer);
      /**
       * @param {number} ch
       * @return {?}
       */
      pad = function(ch) {
        var s = ch.toString(16);
        for (; s.length < 4;) {
          /** @type {string} */
          s = "0" + s;
        }
        return s;
      };
      return pad(buffer[0]) + pad(buffer[1]) + pad(buffer[2]) + pad(buffer[3]) + pad(buffer[4]) + pad(buffer[5]) + pad(buffer[6]) + pad(buffer[7]);
    }
    return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, function() {
      return (16 * Math.random() | 0).toString(16);
    });
  }
  /**
   * @param {!Object} obj
   * @param {string} name
   * @param {!Object} value
   * @return {?}
   */
  function ok(obj, name, value) {
    name = null === (obj = obj.config()) || void 0 === obj ? void 0 : obj.plugins[name];
    return log(name, value);
  }
  /**
   * @param {!Object} b
   * @param {!Function} a
   * @return {?}
   */
  function has(b, a) {
    return b instanceof a;
  }
  /**
   * @param {?} Map
   * @return {?}
   */
  function join(Map) {
    /** @type {!Array} */
    var effects = [];
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      effects[i - 1] = arguments[i];
    }
    return effects.reduce(function(exports, pairs) {
      return (new Map(pairs)).forEach(function(Element, name) {
        return !template(name, Element) && (exports[name] = Element);
      }), exports;
    }, {});
  }
  /**
   * @param {!Object} node
   * @param {!Object} x
   * @param {!Function} options
   * @return {?}
   */
  function pos(node, x, options) {
    return has(node, options) ? node.body : null == x ? void 0 : x.body;
  }
  /**
   * @param {string} name
   * @param {!Object} config
   * @param {boolean} params
   * @param {!Function} event
   * @return {?}
   */
  function fetch(name, config, params, event) {
    return {
      method : function(options, callback, f) {
        callback = callback && callback.method || "get";
        return (callback = has(options, f) ? options.method || callback : callback).toLowerCase();
      }(config, params, event),
      timestamp : Date.now(),
      url : getText(name)
    };
  }
  /**
   * @param {?} fn
   * @param {?} options
   * @param {!Object} id
   * @param {number} parent
   * @param {!Function} d
   * @param {?} p
   * @return {?}
   */
  function send(fn, options, id, parent, d, p) {
    return function(url, file) {
      if (void 0 === file) {
        file = {};
      }
      var req;
      var num;
      var data = (num = false, data = "", data = has(req = url, d) ? req.url : req, data = !(num = void 0 !== num && num) && isString(data) ? data.split("?")[0] : data);
      if (!function(schema) {
        if (isString(schema)) {
          var obj = add(schema.split(":"), 2);
          schema = obj[0];
          return !obj[1] || "http" === schema || "https" === schema;
        }
      }(data) || write(options.ignoreUrls, data)) {
        return fn(url, file);
      }
      var put = options.hookCbAtReq(id);
      var state = {
        api : "fetch",
        request : fetch(url instanceof d ? url.url : url, url, file, d),
        response : {
          is_custom_error : false
        },
        duration : 0
      };
      if (options.setTraceHeader) {
        options.setTraceHeader(state.request.url, function(parentName, content) {
          var name;
          var t;
          var base;
          /** @type {number} */
          name = parentName;
          /** @type {!Object} */
          t = content;
          base = file;
          /** @type {number} */
          parentName = parent;
          if (has(content = url, d)) {
            content.headers.set(name, t);
          } else {
            if (base.headers instanceof parentName) {
              base.headers.set(name, t);
            } else {
              base.headers = extend(extend({}, base.headers), ((base = {})[name] = t, base));
            }
          }
        });
      }
      data = fn(url, file);
      try {
        state.request.headers = join(parent, url.headers, file.headers);
      } catch ($stack) {
        slice($stack);
      }
      /**
       * @return {undefined}
       */
      var send = function() {
        if (put) {
          put({
            ev_type : "http",
            payload : state
          });
        }
      };
      return data.then(function(entry) {
        var p;
        try {
          state.response.status = entry.status || 0;
          state.response.headers = join(parent, entry.headers);
          /** @type {number} */
          state.response.timestamp = Date.now();
          /** @type {number} */
          state.duration = state.response.timestamp - state.request.timestamp;
          var pagesToDisplay = options.collectBodyOnError;
          var merge = options.extraExtractor;
          try {
            if (merge) {
              entry.clone().json().then(function(data) {
                data = merge(data, state);
                if (data) {
                  /** @type {!Object} */
                  state.extra = data;
                  /** @type {boolean} */
                  state.response.is_custom_error = true;
                }
              }).catch(r);
            }
          } catch (e) {
          }
          if (pagesToDisplay && 400 <= entry.status) {
            state.request.body = null === (p = pos(url, file, d)) || void 0 === p ? void 0 : p.toString();
          }
          setTimeout(function() {
            state.response.timing = p(entry.url);
            send();
          }, 100);
        } catch ($stack) {
          slice($stack);
        }
      }, function() {
        var p;
        try {
          /** @type {number} */
          state.response.status = 0;
          /** @type {number} */
          state.response.timestamp = Date.now();
          /** @type {number} */
          state.duration = state.response.timestamp - state.request.timestamp;
          if (options.collectBodyOnError) {
            state.request.body = null === (p = pos(url, file, d)) || void 0 === p ? void 0 : p.toString();
          }
        } catch ($stack) {
          slice($stack);
        }
        send();
      }), data;
    };
  }
  /**
   * @param {!Array} val
   * @return {?}
   */
  function walk(val) {
    var value;
    var m;
    var options;
    return !function(date) {
      switch(Object.prototype.toString.call(date)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMError]":
        case "[object DOMException]":
          return 1;
        default:
          return date instanceof Error;
      }
    }(val) ? (clone(val) || isObject(val) || isString(val)) && (value = {
      message : stringify(val)
    }) : (options = fields, value = (m = val) && callback(m) ? options.reduce(function(options, k) {
      return options[k] = m[k], options;
    }, {}) : m), value;
  }
  /**
   * @param {!Object} o
   * @return {?}
   */
  function h(o) {
    return walk(o.error);
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function wrapper(result) {
    var info;
    try {
      var message = void 0;
      if ("reason" in result ? message = result.reason : "detail" in result && "reason" in result.detail && (message = result.detail.reason), message) {
        var data = walk(message);
        return extend(extend({}, data), {
          name : null !== (info = data && data.name) && void 0 !== info ? info : "UnhandledRejection"
        });
      }
    } catch (e) {
    }
  }
  /**
   * @param {!Array} d
   * @return {?}
   */
  function display(d) {
    return "[object ErrorEvent]" === Object.prototype.toString.call(d) ? h(d) : ("[object PromiseRejectionEvent]" === Object.prototype.toString.call(d) ? wrapper : walk)(d);
  }
  /**
   * @param {!Function} fn
   * @return {?}
   */
  function factory(fn) {
    /**
     * @param {!Object} callback
     * @return {?}
     */
    function wrap(callback) {
      return $(callback) ? callback._w_ || (callback._w_ = function() {
        try {
          return (callback.handleEvent || callback).apply(this, [].map.call(arguments, wrap));
        } catch (i) {
          throw entry && fn(walk(i)), i;
        }
      }) : callback;
    }
    /** @type {boolean} */
    var entry = true;
    return methods.forEach(function(e) {
      return window[e] && cb(window, e, function(fn) {
        return function(callback) {
          /** @type {!Array} */
          var value = [];
          /** @type {number} */
          var i = 1;
          for (; i < arguments.length; i++) {
            value[i - 1] = arguments[i];
          }
          return fn && fn.call.apply(fn, emit([this, wrap(callback)], add(value), false));
        };
      })();
    }), cb(XMLHttpRequest.prototype, "send", function(fToRetry) {
      return function() {
        var groups = this;
        /** @type {!Array} */
        var args = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        return props.forEach(function(name) {
          return groups[name] && cb(groups, name, wrap)();
        }), fToRetry.apply(this, args);
      };
    })(), eventTargets.forEach(function(key) {
      key = window[key] && window[key].prototype;
      if (key && key[header]) {
        cb(key, header, function(callback) {
          return function(args, v, extra) {
            try {
              var k = v.handleEvent;
              if ($(k)) {
                v.handleEvent = wrap(k);
              }
            } catch (e) {
            }
            return callback && callback.call(this, args, wrap(v), extra);
          };
        })();
        cb(key, "removeEventListener", function(cb) {
          return function(name, data, originalIndex) {
            return null != data && data._w_ && cb.call(this, name, data._w_, originalIndex), cb.call(this, name, data, originalIndex);
          };
        })();
      }
    }), function() {
      return entry = false;
    };
  }
  /**
   * @param {string} token1
   * @param {string} token2
   * @return {?}
   */
  function reject(token1, token2) {
    return token1 && token2 && token1 === token2;
  }
  /**
   * @return {?}
   */
  function wrap() {
    var tmp;
    return function(val) {
      try {
        if (options = tmp, !(!(e = val) || !options) && !(!reject(e.message, options.message) || !reject(e.stack, options.stack))) {
          return void(tmp = val);
        }
      } catch ($stack) {
        slice($stack);
      }
      var e;
      var options;
      return tmp = val;
    };
  }
  /**
   * @param {string} attr
   * @return {?}
   */
  function set(attr) {
    return attr = "link" === (el = attr).tagName.toLowerCase() ? "href" : "src", $(el.getAttribute) ? el.getAttribute(attr) || "" : el[attr] || "";
    var el;
  }
  /**
   * @param {string} value
   * @param {number} elem
   * @return {?}
   */
  function String(value, elem) {
    return extend({
      name : value,
      value : elem
    }, defaults);
  }
  /**
   * @param {string} event
   * @return {?}
   */
  function extractTouch(event) {
    return {
      ev_type : "performance",
      payload : event
    };
  }
  /**
   * @param {!Array} x
   * @param {!Array} options
   * @return {?}
   */
  function execute(x, options) {
    return void 0 === x && (x = call()), void 0 === options && (options = merge()), function(canCreateDiscussions, elem) {
      /**
       * @param {string} value
       * @return {undefined}
       */
      function stop(value) {
        var max = value.processingStart;
        value = value.startTime;
        /** @type {number} */
        s.value = max - value;
        kill(s);
      }
      var s = String("fid", 0);
      var kill = add(each(elem), 1)[0];
      if (!options || !x) {
        return s.isSupport = false, void kill(s);
      }
      elem = (0, add(step(options), 3)[2])(artistTrack)[0];
      if (elem) {
        stop(elem);
      } else {
        (0, add(filter(x, stop, true), 1)[0])(artistTrack);
      }
    };
  }
  /**
   * @param {!Array} options
   * @return {?}
   */
  function build(options) {
    return void 0 === options && (options = call()), function(e, c) {
      e = e.precollect;
      var tag = String("lcp", 0);
      var emit = add(each(c), 1)[0];
      if (!options) {
        return tag.isSupport = false, void emit(tag);
      }
      (e.entries || []).forEach(function(attrs) {
        var i = attrs.entryType;
        attrs = attrs.startTime;
        if (i === val) {
          /** @type {!Object} */
          tag.value = attrs;
        }
      });
      c = add(filter(options, function(value) {
        value = value.startTime;
        /** @type {string} */
        tag.value = value;
      }), 2);
      e = c[0];
      var prop = c[1];
      e(val);
      /**
       * @return {undefined}
       */
      var load = function() {
        prop();
        pointerEvents.forEach(function(type) {
          window.removeEventListener(type, finish, true);
        });
      };
      /**
       * @return {undefined}
       */
      var finish = function() {
        emit(tag);
        load();
      };
      pointerEvents.forEach(function(e) {
        window.addEventListener(e, finish, true);
      });
      stop(function() {
        /** @type {boolean} */
        tag.isSupport = false;
        finish();
      });
      remove(function() {
        /** @type {boolean} */
        tag.isBounced = true;
        finish();
      });
    };
  }
  /**
   * @param {!Array} x
   * @param {!Array} options
   * @return {?}
   */
  function update(x, options) {
    return void 0 === x && (x = call()), void 0 === options && (options = merge()), function(item, e) {
      var to = item.metricName;
      var name = item.entryName;
      var target = String(to, 0);
      var debug = add(each(e), 1)[0];
      if (!options || !x) {
        return target.isSupport = false, void debug(target);
      }
      var v0;
      /**
       * @param {!Object} d
       * @return {undefined}
       */
      var write = function(d) {
        d = d.startTime;
        /** @type {!Object} */
        target.value = d;
        debug(target);
      };
      to = (0, add(step(options), 5)[4])(name)[0];
      if (to) {
        write(to);
      } else {
        to = (e = add(filter(x, function(e) {
          if (e.name === name) {
            write(e);
            v0();
          }
        }), 2))[0];
        v0 = e[1];
        to("paint");
        stop(function() {
          /** @type {boolean} */
          target.isSupport = false;
          debug(target);
          v0();
        });
        remove(function() {
          /** @type {boolean} */
          target.isBounced = true;
          debug(target);
          v0();
        });
      }
    };
  }
  /**
   * @param {!Array} args
   * @param {!Array} options
   * @return {?}
   */
  function query(args, options) {
    return void 0 === args && (args = call()), void 0 === options && (options = merge()), function(a, c) {
      var method = String("mpfid", 0);
      var isDefined = add(each(c), 1)[0];
      if (!args) {
        return method.isSupport = false, isDefined(method), [r];
      }
      /** @type {!Array} */
      var initQueue = [];
      c = a.precollect;
      if (c) {
        (c.entries || []).forEach(function(item) {
          if (item.entryType === elem) {
            initQueue.push(item);
          }
        });
      }
      a = add(filter(args, function(fn) {
        return initQueue.push(fn);
      }), 2);
      c = a[0];
      var c3 = a[1];
      c(elem);
      return [function() {
        c3();
        var watchState = (0, add(step(options), 5)[4])(entryName)[0];
        var yDiff = watchState && watchState.startTime || 0;
        method.value = initQueue.reduce(function(xDiff, s) {
          var t = s.duration;
          s = s.startTime;
          return xDiff < t && yDiff < s ? t : xDiff;
        }, 0);
        isDefined(method);
      }];
    };
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function multiply(value) {
    /**
     * @param {string} ms
     * @return {undefined}
     */
    function generate(ms) {
      if (!(ms < lang || !r)) {
        callback();
        i = window.setTimeout(r, ms - value());
        /** @type {string} */
        lang = ms;
      }
    }
    var r;
    /** @type {number} */
    var lang = -1 / 0;
    var i = void 0;
    /**
     * @return {?}
     */
    var callback = function() {
      return window.clearTimeout(i);
    };
    return [function(n, s) {
      /** @type {!Function} */
      r = n;
      generate(s);
    }, function() {
      callback();
      r = void 0;
    }, generate];
  }
  /**
   * @param {!Array} c
   * @param {!Function} callback
   * @return {?}
   */
  function load(c, callback) {
    /** @type {!Array} */
    var html = ["img", "script", "iframe", "link", "audio", "video", "source"];
    var resolve = (c = add(style(c, function(mutations) {
      /** @type {number} */
      var i = 0;
      for (; i < mutations.length; i++) {
        if ("childList" === mutations[i].type && function process(result, lang) {
          /** @type {number} */
          var i = 0;
          for (; i < result.length; i++) {
            if (resolve(lang, result[i].nodeName.toLowerCase()) || result[i].children && process(result[i].children, lang)) {
              return 1;
            }
          }
        }(mutations[i].addedNodes, html) || "attributes" === mutations[i].type && resolve(html, mutations[i].target.nodeName.toLowerCase())) {
          callback(mutations[i]);
        }
      }
    }), 2))[0];
    return [function() {
      return resolve(document, {
        attributes : true,
        childList : true,
        subtree : true,
        attributeFilter : ["href", "src"]
      });
    }, c[1]];
  }
  /**
   * @param {!Object} now
   * @return {?}
   */
  function calculateBars(now) {
    now = (last = now || {}).domContentLoadedEventEnd;
    var last = last.navigationStart;
    return now ? now - (void 0 === last ? 0 : last) : null;
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  function addEvent(callback) {
    return function() {
      /** @type {!Array} */
      var argumentsArray = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        argumentsArray[i] = arguments[i];
      }
      return this._method = argumentsArray[0], callback.apply(this, argumentsArray);
    };
  }
  /**
   * @param {!Function} fn
   * @param {?} bubble
   * @param {?} callback
   * @return {?}
   */
  function trigger(fn, bubble, callback) {
    /** @type {number} */
    var verifyProducts = 0;
    return function() {
      /** @type {!Array} */
      var specialized = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        specialized[i] = arguments[i];
      }
      if ("GET" !== this._method) {
        return fn.apply(this, specialized);
      }
      var storeProducts = verifyProducts = verifyProducts + 2;
      return bubble(storeProducts, Date.now()), bind(this, "onreadystatechange", function(queryExtend) {
        return function(e) {
          if (queryExtend) {
            queryExtend.call(this, e);
          }
          if (4 === this.readyState) {
            callback(storeProducts);
          }
        };
      })(), fn.apply(this, specialized);
    };
  }
  /**
   * @param {!Function} f
   * @param {?} partial
   * @param {?} callback
   * @return {?}
   */
  function match(f, partial, callback) {
    /** @type {number} */
    var verifyProducts = 1;
    return function() {
      var mutation;
      /** @type {!Array} */
      var value = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        value[i] = arguments[i];
      }
      return "GET" !== ((null === (mutation = value[0]) || void 0 === mutation ? void 0 : mutation.method) || (null === (mutation = value[1]) || void 0 === mutation ? void 0 : mutation.method) || "GET") ? f.apply(void 0, emit([], add(value), false)) : new Promise(function(obtainGETData, errf) {
        var storeProducts = verifyProducts = verifyProducts + 2;
        partial(storeProducts, Date.now());
        f.apply(void 0, emit([], add(value), false)).then(function(val) {
          callback(storeProducts);
          obtainGETData(val);
        }, function(result) {
          callback(storeProducts, result);
          errf(result);
        });
      });
    };
  }
  /**
   * @param {number} fn
   * @param {number} c
   * @param {?} name
   * @param {?} data
   * @return {?}
   */
  function handler(fn, c, name, data) {
    return function(deviceIds, saveNotifs, n) {
      /**
       * @return {?}
       */
      function process() {
        return function(raw, v, cb) {
          if (2 < raw.length) {
            return cb();
          }
          /** @type {!Array} */
          var added = [];
          /** @type {number} */
          var i = 0;
          for (; i < v.length; i++) {
            added.push([v[i].start, 0], [v[i].end, 1]);
          }
          /** @type {number} */
          i = 0;
          for (; i < raw.length; i++) {
            added.push([raw[i], 0]);
          }
          added.sort(function(subtractor, subtractee) {
            return subtractor[0] - subtractee[0];
          });
          var rawLength = raw.length;
          /** @type {number} */
          i = added.length - 1;
          for (; 0 <= i; i--) {
            var expected = add(added[i], 2);
            var item = expected[0];
            switch(expected[1]) {
              case 0:
                rawLength--;
                break;
              case 1:
                if (2 < ++rawLength) {
                  return item;
                }
            }
          }
          return 0;
        }(function(data) {
          /** @type {!Array<string>} */
          var props2 = Object.keys(data);
          /** @type {!Array} */
          var result = [];
          /** @type {number} */
          var i = 0;
          for (; i < props2.length; i++) {
            var value = data[props2[i]];
            if ("number" == typeof value) {
              result.push(value);
            }
          }
          return result;
        }(modelData), originalValue, n);
      }
      var returnNodes;
      var identifierPositions;
      var result;
      var d;
      var nsListById;
      var b;
      var l;
      var timestamp;
      var obj = add([returnNodes = [], identifierPositions = [], function(allDoneCb, continuation_proxy) {
        return function(result) {
          var index = result.startTime;
          var length = result.duration;
          var start = result.fetchStart;
          var re = result.responseEnd;
          var accounts = result.entryType;
          if ("longtask" === accounts) {
            result.start = index;
            result.end = index + length;
            returnNodes.push(result);
            if (allDoneCb) {
              allDoneCb(result);
            }
          } else {
            if ("resource" === accounts) {
              identifierPositions.push({
                start : start,
                end : re
              });
              if (continuation_proxy) {
                continuation_proxy(result);
              }
            }
          }
        };
      }], 3);
      var defaultFnt = obj[0];
      var originalValue = obj[1];
      var parseInt = obj[2];
      var value = add((result = fn, d = c, value = add([nsListById = {}, function(id, n) {
        return nsListById[id] = n;
      }, function(notebookID) {
        return delete nsListById[notebookID];
      }], 3), y = value[0], obj = value[1], value = value[2], b = d && bind(d.prototype, "open", addEvent)(), l = d && bind(d.prototype, "send", trigger)(obj, value), timestamp = result && bind(result, "fetch", match)(obj, value), [y, function() {
        if (b) {
          b(true);
        }
        if (l) {
          l(true);
        }
        if (timestamp) {
          timestamp(true);
        }
      }]), 2);
      var modelData = value[0];
      var cancelable = value[1];
      var y = add(data && load(data, function() {
        return saveNotifs(n() + 5E3);
      }) || [], 2);
      value = y[0];
      var ext = y[1];
      if (value) {
        value();
      }
      y = add(filter(name, parseInt(function(o) {
        var s = o.startTime;
        o = o.duration;
        return saveNotifs(s + o + 5E3);
      }, function() {
        return saveNotifs(process() + 5E3);
      }), false, function() {
        return defaultFnt.notSupport = true;
      }), 2);
      value = y[0];
      var _y = y[1];
      return value("longtask", "resource"), deviceIds.forEach(parseInt()), [defaultFnt, function() {
        cancelable();
        _y();
        if (ext) {
          ext();
        }
      }, process];
    };
  }
  /**
   * @param {!Object} h
   * @param {number} n
   * @param {number} s
   * @param {!Array} width
   * @return {?}
   */
  function position(h, n, s, width) {
    if (!h || -1 < width.indexOf(h.tagName)) {
      return 0;
    }
    var a = h.children;
    if ((a = [].slice.call(void 0 === a ? [] : a).reduceRight(function(b, d) {
      return b + position(d, n + 1, 0 < b, width);
    }, 0)) <= 0 && !s) {
      if (!$(h.getBoundingClientRect)) {
        return 0;
      }
      s = h.getBoundingClientRect() || {};
      h = s.top;
      s = s.height;
      if (h > window.innerHeight || s <= 0) {
        return 0;
      }
    }
    return a + 1 + .5 * n;
  }
  /**
   * @param {!Object} el
   * @param {!Object} node
   * @param {!Array} x
   * @param {!Array} elem
   * @param {!Array} p
   * @return {?}
   */
  function draw(el, node, x, elem, p) {
    if (void 0 === el && (el = createElement()), void 0 === node && (node = assign()), void 0 === x && (x = call()), void 0 === elem && (elem = parseInt()), void 0 === p && (p = merge()), node && el) {
      return function(options, put) {
        /**
         * @return {undefined}
         */
        function r() {
          if (_takingTooLongTimeout) {
            clearTimeout(_takingTooLongTimeout);
          }
          _takingTooLongTimeout = el.setTimeout(function() {
            e(function() {
              el.requestAnimationFrame(function() {
                var d = root ? node.querySelector(root) : node.body;
                if (d) {
                  if ((d = format(d, 0, 0, c)) < c) {
                    /** @type {!Array} */
                    ret = [Date.now(), d];
                    gotoNewOfflinePage();
                  } else {
                    ret = void 0;
                  }
                }
              });
            });
          }, 1E3);
        }
        var ret;
        var response;
        var _takingTooLongTimeout;
        var parse;
        var u;
        var beatTime;
        var c = options.threshold;
        var thumbnail = options.screenshot;
        var root = options.rootSelector;
        var readOnlyFn = options.autoDetect;
        var type = options.ssUrl;
        var e = schedule(el);
        var depthOfPath = add(step(p), 2)[1];
        /** @type {number} */
        var now = 0;
        /** @type {boolean} */
        var recordTypes = false;
        /**
         * @param {!Blob} data
         * @return {undefined}
         */
        var ready = function(data) {
          if (ret && put) {
            put({
              ev_type : "blank_screen",
              payload : {
                timestamp : ret[0],
                score : ret[1],
                screenshot : data,
                error : response
              }
            });
          }
        };
        /** @type {function(): undefined} */
        var gotoNewOfflinePage = (parse = function() {
          if (ret && !recordTypes) {
            /** @type {boolean} */
            recordTypes = true;
            norm();
            if (thumbnail) {
              setup(ready, type, el, node);
            } else {
              ready();
            }
          }
        }, function() {
          if (!u) {
            /** @type {number} */
            beatTime = Date.now();
            u = el.setTimeout(function() {
              /** @type {number} */
              u = 0;
              if (!(beatTime < now)) {
                parse();
              }
            }, depthOfPath() > maxDepth ? timer : distance);
          }
        });
        remove(function() {
          if (!recordTypes) {
            ready();
          }
        });
        /**
         * @return {undefined}
         */
        var norm = function() {
          clearTimeout(_takingTooLongTimeout);
          if (replace) {
            replace();
          }
          if (random) {
            random();
          }
        };
        var obj = add(style(elem, r), 2);
        var data = obj[0];
        var replace = obj[1];
        options = add(filter(x, function(canCreateDiscussions, n, inRevIdx) {
          return _takingTooLongTimeout && 1 < inRevIdx.length && r();
        }), 2);
        obj = options[0];
        var random = options[1];
        return readOnlyFn && (data(null === (data = assign()) || void 0 === data ? void 0 : data.body, {
          subtree : true,
          childList : true
        }), obj("longtask", "resource"), r()), [norm, function(key) {
          if (!recordTypes) {
            /** @type {number} */
            now = Date.now();
            if (response && now - response.timestamp > radius2) {
              response = void 0;
            }
            response = makeRequest(response, key);
          }
        }, r];
      };
    }
  }
  /**
   * @param {!Object} response
   * @return {undefined}
   */
  function read(response) {
    var obj;
    var id;
    var prop;
    id = options;
    (obj = response).on("init", function() {
      var proc1;
      var t;
      var onEnd;
      var data = ok(obj, shouldComponentUpdate, id) || log(prop, id);
      if (data) {
        data = add(expect(draw, data, obj.report.bind(obj)), 3);
        proc1 = data[0];
        t = data[1];
        data = data[2];
        obj.on("report", onEnd = function(e) {
          return t(e), e;
        });
        obj.on("beforeDestroy", function() {
          proc1();
          obj.off("report", onEnd);
        });
        obj.provide("detectBlankScreen", data);
      }
    });
  }
  /**
   * @param {!Object} a1
   * @return {?}
   */
  function map(a1) {
    return (null == a1 ? void 0 : a1.effectiveType) || (null == a1 ? void 0 : a1.type) || "";
  }
  /**
   * @param {!Object} options
   * @param {number} f
   * @return {?}
   */
  function setTimeout(options, f) {
    var d = options.common || {};
    return d.sample_rate = f, options.common = d, options;
  }
  /**
   * @param {boolean} value
   * @param {?} i
   * @param {!Function} callback
   * @param {number} a
   * @param {!Function} l
   * @return {?}
   */
  function print(value, i, callback, a, l) {
    return value ? (t = l(a, i), function() {
      return t;
    }) : function() {
      return callback(i);
    };
    var t;
  }
  /**
   * @param {boolean} val
   * @param {string} callback
   * @param {?} config
   * @param {?} callbacks
   * @return {?}
   */
  function parse(val, callback, config, callbacks) {
    if (void 0 === (val = reducer(val, callback, function(eventsDict, event) {
      return eventsDict[event];
    }))) {
      return false;
    }
    var dataType;
    /** @type {string} */
    callback = "boolean" == typeof val ? "bool" : isFinite(val) ? "number" : "string";
    return function(val, match, operator) {
      switch(operator) {
        case "eq":
          return resolve(match, val);
        case "neq":
          return !resolve(match, val);
        case "gt":
          return val > match[0];
        case "gte":
          return val >= match[0];
        case "lt":
          return val < match[0];
        case "lte":
          return val <= match[0];
        case "regex":
          return Boolean(val.match(new RegExp(match.join("|"))));
        case "not_regex":
          return !val.match(new RegExp(match.join("|")));
        default:
          return false;
      }
    }(val, (dataType = callback, callbacks.map(function(aPrefValue) {
      switch(dataType) {
        case "number":
          return Number(aPrefValue);
        case "boolean":
          return "1" === aPrefValue;
        default:
          return String(aPrefValue);
      }
    })), config);
  }
  /**
   * @param {!Object} val
   * @param {!Object} options
   * @return {?}
   */
  function select(val, options) {
    try {
      return "rule" === options.type ? parse(val, options.field, options.op, options.values) : "and" === options.type ? options.children.every(function(props) {
        return select(val, props);
      }) : options.children.some(function(props) {
        return select(val, props);
      });
    } catch ($stack) {
      return slice($stack), false;
    }
  }
  /**
   * @return {?}
   */
  function configure() {
    var root = createElement();
    return root && root.navigator.sendBeacon ? {
      get : function() {
      },
      post : function(path, data) {
        root.navigator.sendBeacon(path, data);
      }
    } : {
      get : r,
      post : r
    };
  }
  /**
   * @param {string} url
   * @param {!Object} options
   * @param {!Object} x
   * @return {undefined}
   */
  function ajax(url, options, x) {
    var u = options.url;
    var o = options.data;
    var a = options.success;
    var id = void 0 === a ? r : a;
    var callback = void 0 === (a = options.fail) ? r : a;
    var parseRedirectFragment = void 0 === (a = options.getResponseText) ? r : a;
    options = void 0 !== (options = options.withCredentials) && options;
    /** @type {!Object} */
    (x = new x).withCredentials = options;
    x.open(url, u, true);
    x.setRequestHeader("Content-Type", "application/json");
    /**
     * @return {undefined}
     */
    x.onload = function() {
      if (null != parseRedirectFragment) {
        parseRedirectFragment(this.responseText);
      }
      try {
        var result;
        if (this.responseText) {
          /** @type {*} */
          result = JSON.parse(this.responseText);
          id(result);
        } else {
          id({});
        }
      } catch (e) {
        callback(e);
      }
    };
    /**
     * @return {undefined}
     */
    x.onerror = function() {
      callback(new Error("Network request failed"));
    };
    /**
     * @return {undefined}
     */
    x.onabort = function() {
      callback(new Error("Network request aborted"));
    };
    x.send(o);
  }
  /**
   * @param {!Object} object
   * @return {?}
   */
  function test(object) {
    /**
     * @return {undefined}
     */
    function f() {
      if (d.length) {
        transport.post({
          url : endpoint,
          data : this.getBatchData()
        });
        /** @type {!Array} */
        d = [];
      }
    }
    /**
     * @param {!Object} type
     * @return {undefined}
     */
    function send(type) {
      $http.post(Q.getEndpoint(), clean([type]));
    }
    var targetLocale;
    var transport;
    var endpoint;
    var value;
    var val;
    var timeout;
    var d;
    var notificationTimer;
    var Q = (transport = (targetLocale = object).transport, endpoint = object.endpoint, value = object.size, val = void 0 === value ? 10 : value, timeout = void 0 === (targetLocale = object.wait) ? 1E3 : targetLocale, d = [], notificationTimer = 0, {
      getSize : function() {
        return val;
      },
      getWait : function() {
        return timeout;
      },
      setSize : function(img) {
        /** @type {number} */
        val = img;
      },
      setWait : function(callback) {
        /** @type {!Object} */
        timeout = callback;
      },
      getEndpoint : function() {
        return endpoint;
      },
      setEndpoint : function(url) {
        endpoint = url;
      },
      send : function(obj) {
        d.push(obj);
        if (d.length >= val) {
          f.call(this);
        }
        clearTimeout(notificationTimer);
        /** @type {number} */
        notificationTimer = setTimeout(f.bind(this), timeout);
      },
      flush : function() {
        clearTimeout(notificationTimer);
        f.call(this);
      },
      getBatchData : function() {
        return d.length ? clean(d) : "";
      },
      clear : function() {
        clearTimeout(notificationTimer);
        /** @type {!Array} */
        d = [];
      }
    });
    var $http = configure();
    return remove(function() {
      var cardData = Q.getBatchData();
      if (cardData) {
        $http.post(Q.getEndpoint(), cardData);
        Q.clear();
      }
      /** @type {function(!Object): undefined} */
      Q.send = send;
    }), Q;
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function defaultize(data) {
    var token;
    var nodes = data.plugins || {};
    for (token in nodes) {
      if (nodes[token] && !callback(nodes[token])) {
        nodes[token] = {};
      }
    }
    return extend(extend({}, data), {
      plugins : nodes
    });
  }
  /**
   * @param {!Object} config
   * @return {?}
   */
  function firebaseRetrieveToken(config) {
    return callback(config) && "aid" in config;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function responseStatusSuccess(data) {
    return extend({}, data);
  }
  /**
   * @return {?}
   */
  function initialize() {
    var frame = createElement();
    var n = assign();
    if (frame && n) {
      return (null === (n = null === (n = null === (n = function() {
        if (!document) {
          return null;
        }
        if (document.currentScript) {
          return document.currentScript;
        }
        try {
          throw new Error;
        } catch (error) {
          /** @type {number} */
          var i = 0;
          /** @type {(Array<string>|null)} */
          var value = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i.exec(error.stack);
          /** @type {(boolean|string)} */
          var imgUrl = value && value[2] || false;
          /** @type {(number|string)} */
          var ext = value && value[3] || 0;
          /** @type {string} */
          var memberAvatarUrl = document.location.href.replace(document.location.hash, "");
          /** @type {string} */
          var th_field = "";
          /** @type {!NodeList<Element>} */
          var scripts = document.getElementsByTagName("script");
          if (imgUrl === memberAvatarUrl) {
            /** @type {string} */
            value = document.documentElement.outerHTML;
            /** @type {!RegExp} */
            ext = new RegExp("(?:[^\\n]+?\\n){0," + (ext - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
            /** @type {string} */
            th_field = value.replace(ext, "$1").trim();
          }
          for (; i < scripts.length; i++) {
            if ("interactive" === scripts[i].readyState) {
              return scripts[i];
            }
            if (scripts[i].src === imgUrl) {
              return scripts[i];
            }
            if (imgUrl === memberAvatarUrl && scripts[i].innerHTML && scripts[i].innerHTML.trim() === th_field) {
              return scripts[i];
            }
          }
          return null;
        }
      }()) || void 0 === n ? void 0 : n.getAttribute("src")) || void 0 === n ? void 0 : n.match(/globalName=(.+)$/)) || void 0 === n ? void 0 : n[1]) || sname;
    }
  }
  /**
   * @param {string} deps
   * @return {?}
   */
  function req(deps) {
    return "APMPLUS" + deps;
  }
  /**
   * @param {string} config
   * @return {?}
   */
  function loop(config) {
    return function(o) {
      try {
        var string = localStorage.getItem(o);
        var rec = string;
        return rec = string && "string" == typeof string ? JSON.parse(string) : rec;
      } catch (e) {
        return;
      }
    }(req(config)) || {
      userId : mobileLogin(),
      deviceId : mobileLogin(),
      r : Math.random()
    };
  }
  /**
   * @param {!Object} result
   * @return {undefined}
   */
  function logger(result) {
    var id = result.aid;
    var userId = result.userId;
    var deviceId = result.deviceId;
    result = result.sample;
    !function(aBundle, cast) {
      try {
        /** @type {(string|{deviceId: ?, r: ?, userId: ?})} */
        var name = "string" == typeof cast ? cast : JSON.stringify(cast);
        localStorage.setItem(aBundle, name);
      } catch (e) {
      }
    }(req(id), {
      userId : userId,
      deviceId : deviceId,
      r : result.r
    });
  }
  /**
   * @param {!Object} options
   * @param {!Object} context
   * @return {?}
   */
  function addItem(options, context) {
    if (!options || !context) {
      return options || context;
    }
    var e = extend(extend({}, options), context);
    return e.include_users = emit(emit([], add(options.include_users || []), false), add(context.include_users || []), false), e.rules = emit(emit([], add(Object.keys(options.rules || {})), false), add(Object.keys(context.rules || {})), false).reduce(function(deps, name) {
      var rules;
      return name in deps || (name in (options.rules || {}) && name in (context.rules || {}) ? (deps[name] = extend(extend({}, options.rules[name]), context.rules[name]), deps[name].conditional_sample_rules = emit(emit([], add(options.rules[name].conditional_sample_rules || []), false), add(context.rules[name].conditional_sample_rules || []), false)) : deps[name] = (null === (rules = options.rules) || void 0 === rules ? void 0 : rules[name]) || (null === (rules = context.rules) || void 0 === rules ?
      void 0 : rules[name])), deps;
    }, {}), e;
  }
  var eventListeners;
  /**
   * @return {?}
   */
  var extend = function() {
    return (extend = Object.assign || function(result) {
      var v;
      /** @type {number} */
      var _i = 1;
      /** @type {number} */
      var _len = arguments.length;
      for (; _i < _len; _i++) {
        var i;
        for (i in v = arguments[_i]) {
          if (Object.prototype.hasOwnProperty.call(v, i)) {
            result[i] = v[i];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  if (!("undefined" == typeof Element || Element.prototype.addEventListener)) {
    /** @type {!Array} */
    eventListeners = [];
    /**
     * @param {string} type
     * @param {!Function} listener
     * @return {undefined}
     */
    removeEventListenerFn = function(type, listener) {
      /** @type {number} */
      var i = 0;
      for (; i < eventListeners.length;) {
        var eventListener = eventListeners[i];
        if (eventListener.object === this && eventListener.type === type && eventListener.listener === listener) {
          if ("DOMContentLoaded" === type) {
            this.detachEvent("onreadystatechange", eventListener.wrapper);
          } else {
            this.detachEvent("on" + type, eventListener.wrapper);
          }
          eventListeners.splice(i, 1);
          break;
        }
        ++i;
      }
    };
    /** @type {function(string, !Function): undefined} */
    Element.prototype.addEventListener = onload = function(type, callback) {
      /**
       * @param {!Object} event
       * @return {undefined}
       */
      function listener(event) {
        event.target = event.srcElement;
        event.currentTarget = elem;
        if (void 0 !== callback.handleEvent) {
          callback.handleEvent(event);
        } else {
          callback.call(elem, event);
        }
      }
      var onload;
      var e;
      var elem = this;
      if ("DOMContentLoaded" === type) {
        /**
         * @param {!Object} event
         * @return {undefined}
         */
        onload = function(event) {
          if ("complete" === document.readyState) {
            listener(event);
          }
        };
        document.attachEvent("onreadystatechange", onload);
        eventListeners.push({
          object : this,
          type : type,
          listener : callback,
          wrapper : onload
        });
        if ("complete" === document.readyState) {
          /** @type {!Window} */
          (e = new Event).srcElement = window;
          onload(e);
        }
      } else {
        this.attachEvent("on" + type, listener);
        eventListeners.push({
          object : this,
          type : type,
          listener : callback,
          wrapper : listener
        });
      }
    };
    /** @type {function(string, !Function): undefined} */
    Element.prototype.removeEventListener = removeEventListenerFn;
    if (HTMLDocument && !HTMLDocument.prototype.addEventListener) {
      /** @type {function(string, !Function): undefined} */
      HTMLDocument.prototype.addEventListener = onload;
      /** @type {function(string, !Function): undefined} */
      HTMLDocument.prototype.removeEventListener = removeEventListenerFn;
    }
    if (Window && !Window.prototype.addEventListener) {
      /** @type {function(string, !Function): undefined} */
      Window.prototype.addEventListener = onload;
      /** @type {function(string, !Function): undefined} */
      Window.prototype.removeEventListener = removeEventListenerFn;
    }
  }
  /** @type {!Array} */
  var events = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"];
  /**
   * @return {?}
   */
  var r = function() {
    return {};
  };
  var s = Object.prototype;
  /** @type {number} */
  var _clientIdCounter = 0;
  /**
   * @return {undefined}
   */
  var validate = function() {
    /** @type {!Array} */
    var value = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      value[i] = arguments[i];
    }
    console.error.apply(console, emit(["[SDK]", Date.now(), ("" + _clientIdCounter++).padStart(8, " ")], add(value), false));
  };
  /** @type {number} */
  var nextGuid = 0;
  /**
   * @param {?} value
   * @return {?}
   */
  var v = function(value) {
    return Math.random() < Number(value);
  };
  /**
   * @param {?} i
   * @param {?} name
   * @return {?}
   */
  var t = function(i, name) {
    return i < Number(name);
  };
  /**
   * @param {!Object} _
   * @return {undefined}
   */
  var create = function(_) {
    var options;
    var data;
    var me;
    var plugins = (options = {}, data = {}, me = {
      set : function(prop, val) {
        return options[prop] = val, data[prop] = stringify(val), me;
      },
      merge : function(args) {
        return options = extend(extend({}, options), args), Object.keys(args).forEach(function(key) {
          data[key] = stringify(args[key]);
        }), me;
      },
      delete : function(e) {
        return delete options[e], delete data[e], me;
      },
      clear : function() {
        return options = {}, data = {}, me;
      },
      get : function(obj) {
        return data[obj];
      },
      toString : function() {
        return extend({}, data);
      }
    });
    _.provide("context", plugins);
    _.on("report", function(instance) {
      return instance.extra || (instance.extra = {}), instance.extra.context = plugins.toString(), instance;
    });
  };
  /**
   * @param {!Object} obj
   * @param {string} i
   * @param {string} t
   * @return {?}
   */
  var out = function(obj, i, t) {
    /**
     * @return {?}
     */
    function value() {
      /** @type {!Array} */
      var key = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        key[i] = arguments[i];
      }
      var code = key[0];
      if (code) {
        var id = code.split(".")[0];
        if (id in value) {
          return s = value, d = code, o = [].slice.call(key, 1), reducer(s, d, function(e, type) {
            if (e && type in e && $(e[type])) {
              try {
                return e[type].apply(e, o);
              } catch (e) {
                return;
              }
            }
          });
        }
        var o;
        var s = map[id] || [];
        var d = null !== (d = null == i ? void 0 : i(obj)) && void 0 !== d ? d : {};
        s.push(emit([d], add(key), false));
        void(map[id] = s);
      }
    }
    var key;
    var map = {};
    for (key in bind(obj, "provide", function(cell) {
      return function(path, level) {
        value[path] = level;
        cell.call(obj, path, level);
      };
    })(), obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        value[key] = obj[key];
      }
    }
    return obj.on("provide", function(e) {
      if (map[e]) {
        map[e].forEach(function(b) {
          var expected = add(b);
          b = expected[0];
          expected = expected.slice(1);
          if (null != t) {
            t(obj, b, expected);
          }
        });
        /** @type {null} */
        map[e] = null;
      }
    }), value;
  };
  /**
   * @return {undefined}
   */
  var slice = function() {
    /** @type {!Array} */
    var newItems = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      newItems[i] = arguments[i];
    }
    var parse_env = function(canCreateDiscussions) {
      if (canCreateDiscussions) {
        return canCreateDiscussions.__SLARDAR_REGISTRY__ || (canCreateDiscussions.__SLARDAR_REGISTRY__ = {
          Slardar : {
            plugins : [],
            errors : []
          }
        }), canCreateDiscussions.__SLARDAR_REGISTRY__.Slardar;
      }
    }(createElement());
    if (parse_env) {
      if (!parse_env.errors) {
        /** @type {!Array} */
        parse_env.errors = [];
      }
      parse_env.errors.push(newItems);
    }
  };
  /**
   * @param {!Object} e
   * @param {string} a
   * @return {?}
   */
  var style = function(e, a) {
    var d = e && new e(a);
    return [function(t, f) {
      if (d && t) {
        d.observe(t, f);
      }
    }, function() {
      return d && d.disconnect();
    }];
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  var step = function(options) {
    var ti = options && options.timing || void 0;
    return [ti, function() {
      return options && options.now ? options.now() : (Date.now ? Date.now() : +new Date) - (ti && ti.navigationStart || 0);
    }, function(value) {
      var data = (options || {}).getEntriesByType;
      return $(data) && data.call(options, value) || [];
    }, function() {
      var fn = (options || {}).clearResourceTimings;
      if ($(fn)) {
        fn.call(options);
      }
    }, function(value) {
      var data = (options || {}).getEntriesByName;
      return $(data) && data.call(options, value) || [];
    }];
  };
  /**
   * @param {!Object} c
   * @param {!Function} o
   * @param {boolean} extra
   * @param {!Function} filter
   * @return {?}
   */
  var filter = function(c, o, extra, filter) {
    var observer = c && new c(function(prop, a) {
      if (prop.getEntries) {
        prop.getEntries().forEach(function(sharedProperties, context, data) {
          return o(sharedProperties, context, data, a);
        });
      } else {
        if (filter) {
          filter();
        }
      }
      if (extra) {
        a.disconnect();
      }
    });
    return [function() {
      /** @type {!Array} */
      var testModules = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        testModules[i] = arguments[i];
      }
      if (!c || !observer) {
        return filter && filter();
      }
      try {
        testModules.forEach(function(e) {
          if (-1 < c.supportedEntryTypes.indexOf(e)) {
            observer.observe({
              type : e,
              buffered : false
            });
          }
        });
      } catch (e) {
        try {
          observer.observe({
            entryTypes : testModules
          });
        } catch (e) {
          return filter && filter();
        }
      }
    }, function() {
      return observer && observer.disconnect();
    }];
  };
  /**
   * @param {!Function} name
   * @param {number} p
   * @param {!Function} t
   * @param {!Array} value
   * @return {?}
   */
  var expect = function(name, p, t, value) {
    if (void 0 === p) {
      p = {};
    }
    if (void 0 === value) {
      /** @type {!Array} */
      value = [];
    }
    try {
      var c = name.apply(void 0, emit([], add(value), false));
      return c && c(p, t) || [];
    } catch ($stack) {
      return slice($stack), [];
    }
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var f = function(data) {
    var params = {
      url : find(),
      timestamp : Date.now()
    };
    var val = data.config();
    return null != val && val.pid && (params.pid = val.pid), null != data && data.context && (params.context = data.context.toString()), params;
  };
  /**
   * @param {!Object} t
   * @param {!Function} id
   * @return {?}
   */
  var defer = function(t, id) {
    return function(observableFactory) {
      /**
       * @param {!Object} data
       * @return {?}
       */
      function run(data) {
        return data.overrides = id, data;
      }
      t.on("report", run);
      observableFactory();
      t.off("report", run);
    };
  };
  /** @type {string} */
  var shortName = "<unknown>";
  /**
   * @param {!Function} selector
   * @return {?}
   */
  var each = function(selector) {
    /** @type {boolean} */
    var t = false;
    return [function(i) {
      if (!t) {
        /** @type {boolean} */
        t = true;
        if (selector) {
          selector(i);
        }
      }
    }];
  };
  /**
   * @param {!Function} elem
   * @return {undefined}
   */
  var remove = function(elem) {
    var onclickEdition = add(each(elem), 1)[0];
    ["unload", "beforeunload", "pagehide"].forEach(function(type) {
      addEventListener(type, onclickEdition);
    });
  };
  /** @type {!RegExp} */
  var inlineAttributeCommentRegex = new RegExp("(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)", "i");
  /** @type {!RegExp} */
  var inlineAttributeIgnoreCommentRegex = new RegExp("(bearer|session)", "i");
  /**
   * @param {!Array} coffeescript
   * @param {!Array} options
   * @return {?}
   */
  var compile = function(coffeescript, options) {
    if (void 0 === coffeescript && (coffeescript = assert() && createElement()), void 0 === options && (options = merge()), coffeescript) {
      var type = pop(options);
      return function(value, i) {
        var font;
        if (!!value.autoWrap) {
          if (font = XMLHttpRequest && XMLHttpRequest.prototype) {
            process(font, value, i, type);
          }
        }
        return [function(first, result, length) {
          /**
           * @return {?}
           */
          function res() {
            var e = new r;
            return process(e, n, index, options), e;
          }
          return n = result = void 0 === result ? value : result, index = length = void 0 === length ? i : length, options = type, res.prototype = new (r = first), ["DONE", "HEADERS_RECIEVED", "LOADING", "OPENED", "UNSENT"].forEach(function(field) {
            res[field] = r[field];
          }), res;
          var r;
          var n;
          var index;
          var options;
        }];
      };
    }
  };
  var info = {
    sampleRate : 1,
    origins : []
  };
  /**
   * @param {!Object} hash
   * @param {string} key
   * @return {?}
   */
  var generate = function(hash, key) {
    var result = log(hash, info);
    if (result && v(result.sampleRate)) {
      return function(subTopic, put) {
        var origins = result.origins;
        if (origins.length && Boolean(subTopic.match(new RegExp(origins.join("|"))))) {
          put("x-rum-traceparent", "00-" + uuid4() + "-" + uuid4().substring(16) + "-01");
          put("x-rum-tracestate", key);
        }
      };
    }
  };
  /**
   * @param {!Object} result
   * @param {string} callback
   * @return {?}
   */
  var onRelease = function(result, callback) {
    var app = result.config();
    var data = {
      url : find(),
      pid : app.pid,
      view_id : app.viewId
    };
    return function(context) {
      result.report(extend(extend({}, context), {
        overrides : extend(extend({}, data), callback && callback(context) || {})
      }));
    };
  };
  /** @type {string} */
  var tag = "ajax";
  var DEFAULTS = {
    autoWrap : true,
    hookCbAtReq : g,
    ignoreUrls : [],
    collectBodyOnError : false
  };
  /**
   * @param {!Object} input
   * @return {?}
   */
  var makeTestChangeMiddleLabel = function(input) {
    return function(typed) {
      if (!typed) {
        return typed;
      }
      var app = input.config();
      var data = {
        url : find(),
        pid : app.pid,
        view_id : app.viewId
      };
      return function(options) {
        typed(extend(extend({}, options), {
          overrides : extend(extend({}, data), {
            timestamp : options.payload.request.timestamp
          })
        }));
      };
    };
  };
  /**
   * @param {number} item
   * @return {?}
   */
  var start = function(item) {
    if (item = void 0 === item ? assign() : item) {
      return function(e, n) {
        var dispatch;
        var c = e.maxBreadcrumbs;
        var r = e.onAddBreadcrumb;
        var d = e.onMaxBreadcrumbs;
        var clip = e.dom;
        var a = add(tween(100), 2);
        e = a[0];
        a = a[1];
        c = add(function(time, f, getPointsAfter) {
          if (void 0 === time) {
            /** @type {number} */
            time = 20;
          }
          if (void 0 === f) {
            /** @type {function(!Object): ?} */
            f = g;
          }
          if (void 0 === getPointsAfter) {
            /**
             * @param {string} array
             * @param {number} n
             * @return {?}
             */
            getPointsAfter = function(array, n) {
              return array.slice(-n);
            };
          }
          /** @type {!Array} */
          var d = [];
          return [function() {
            return d;
          }, function(data) {
            if (f(data)) {
              data = extend(extend({}, data), {
                timestamp : data.timestamp || Date.now()
              });
              d = 0 <= time && d.length + 1 > time ? getPointsAfter(emit(emit([], add(d), false), [data], false), time) : emit(emit([], add(d), false), [data], false);
            }
          }];
        }(c, r, d), 2);
        r = c[0];
        d = c[1];
        /** @type {function(!Object): undefined} */
        c = (dispatch = d, function(info) {
          var reqErr;
          try {
            reqErr = info.event.target ? render(info.event.target) : render(info.event);
          } catch (e) {
            /** @type {string} */
            reqErr = "<unknown>";
          }
          if (0 !== reqErr.length) {
            dispatch({
              type : "dom",
              category : "ui." + info.name,
              message : reqErr
            });
          }
        });
        /** @type {!Array} */
        var p = [];
        if (clip) {
          p.push(e("click", toggle(c, "dom")));
          p.push(a(toggle(c, "dom")));
          item.addEventListener("click", p[0]);
          item.addEventListener("keypress", p[1]);
        }
        return [r, d, function() {
          item.removeEventListener("click", p[0]);
          item.removeEventListener("keypress", p[1]);
        }];
      };
    }
  };
  /** @type {string} */
  var string = "breadcrumb";
  var message = {
    maxBreadcrumbs : 20,
    dom : true
  };
  /**
   * @param {number} name
   * @param {number} content
   * @param {number} data
   * @param {!Array} options
   * @return {?}
   */
  var request = function(name, content, data, options) {
    if (void 0 === name && (name = handleRequest() && createElement()), void 0 === content && (content = window.Headers), void 0 === data && (data = window.Request), void 0 === options && (options = merge()), name && content && data) {
      var type = pop(options);
      return function(ret, undefined) {
        if (ret.autoWrap) {
          cb(name, "fetch", send)(ret, undefined, content, data, type);
        }
        return [function(request, string, value) {
          return send(request, string = void 0 === string ? ret : string, value = void 0 === value ? undefined : value, content, data, type);
        }];
      };
    }
  };
  /** @type {string} */
  var url = "fetch";
  var err = {
    autoWrap : true,
    hookCbAtReq : g,
    ignoreUrls : [],
    collectBodyOnError : false
  };
  /** @type {!Array} */
  var fields = ["name", "message", "stack", "filename", "lineno", "colno"];
  /** @type {!Array} */
  var eventTargets = ["EventTarget", "Window", "Node", "ApplicationCache", "ChannelMergerNode", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "MessagePort", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
  /** @type {!Array} */
  var methods = ["setTimeout", "setInterval", "requestAnimationFrame", "requestIdleCallback"];
  /** @type {!Array} */
  var props = ["onload", "onerror", "onprogress", "onreadystatechange"];
  /** @type {string} */
  var header = "addEventListener";
  /**
   * @param {number} window
   * @return {?}
   */
  var listen = function(window) {
    if (window = void 0 === window ? createElement() : window) {
      return function(opts, p) {
        var f;
        var handleMessage;
        var o = opts.ignoreErrors;
        var onerror = opts.onerror;
        var onunhandledrejection = opts.onunhandledrejection;
        var name = opts.dedupe;
        opts = opts.captureGlobalAsync;
        var node = next(o);
        /** @type {!Array} */
        var children = [];
        var w = wrap();
        /**
         * @param {string} e
         * @param {!Object} f
         * @param {?} a
         * @return {undefined}
         */
        var l = function(e, f, a) {
          e = name ? w(e) : e;
          if (p && e) {
            if (!(node && node.test(e.message))) {
              p({
                ev_type : "js_error",
                payload : {
                  error : e,
                  breadcrumbs : [],
                  extra : f,
                  react : a
                }
              });
            }
          }
        };
        if (onerror) {
          window.addEventListener("error", f = function(n) {
            return l(h(n));
          });
          children.push(function() {
            return window.removeEventListener("error", f);
          });
        }
        if (onunhandledrejection) {
          window.addEventListener("unhandledrejection", handleMessage = function(n) {
            return l(wrapper(n));
          });
          children.push(function() {
            return window.removeEventListener("unhandledrejection", handleMessage);
          });
        }
        if (opts) {
          children.push(factory(l));
        }
        return [function(data, b, f) {
          return l(display(data), b, f);
        }, function() {
          children.forEach(function(saveNotifs) {
            return saveNotifs();
          });
        }];
      };
    }
  };
  /** @type {string} */
  var html = "jsError";
  var pathString = {
    ignoreErrors : [],
    onerror : true,
    onunhandledrejection : true,
    captureGlobalAsync : false,
    dedupe : true
  };
  /**
   * @param {number} el
   * @param {number} options
   * @param {!Array} container
   * @return {?}
   */
  var main = function(el, options, container) {
    if (void 0 === el && (el = createElement()), void 0 === options && (options = require()), void 0 === container && (container = createElement() && window.history), el && options) {
      return function(config, dispatch) {
        var translated;
        var output;
        var temp;
        var cb;
        var hide;
        var render;
        var parse;
        var resize;
        var engine = config.sendInit;
        var h = config.initPid;
        var name = config.routeMode;
        var p = config.extractPid;
        config = config.onPidUpdate;
        /** @type {!Array} */
        var failureRecaps = [];
        /** @type {!Function} */
        var extend = "manual" === name ? function() {
          return "";
        } : (translated = name, function(url) {
          var _currentHash;
          return "hash" === translated ? (null === (_currentHash = parseURL(url).hash) || void 0 === _currentHash ? void 0 : _currentHash.replace(/^#/, "")) || "/" : parseURL(url).path;
        });
        var parser = p || function() {
        };
        p = add(function(callback, e, modstatus, test) {
          /** @type {string} */
          var lastTrackInfoUrl = modstatus;
          /** @type {string} */
          var core = e;
          if (test) {
            test(e);
          }
          return [function(init, trackInfoUrl, DMA2) {
            if ("user_set" !== init && trackInfoUrl !== lastTrackInfoUrl) {
              /** @type {string} */
              lastTrackInfoUrl = trackInfoUrl;
              core = null != DMA2 ? DMA2 : lastTrackInfoUrl;
              if (test) {
                test(core);
              }
              callback(init, core);
            } else {
              if ("user_set" === init && trackInfoUrl !== core) {
                /** @type {string} */
                core = trackInfoUrl;
                if (test) {
                  test(core);
                }
                callback(init, core);
              }
            }
          }, function() {
            if (e) {
              callback("init", e);
            }
          }];
        }(function(event, id) {
          if (dispatch) {
            dispatch({
              ev_type : "pageview",
              payload : {
                pid : id,
                source : event
              }
            });
          }
        }, h || (output = options.href, null !== (temp = parser(output)) && void 0 !== temp ? temp : extend(output)), extend(options.href), config), 2);
        var callback = p[0];
        h = p[1];
        config = callback.bind(null, "user_set");
        if ("manual" !== name) {
          cb = add((parse = function(obj, body) {
            return callback(obj, extend(body), parser(body));
          }, resize = "", [function(e, n) {
            if (n !== resize) {
              parse(e, resize = n);
            }
          }]), 1)[0];
          /**
           * @return {?}
           */
          hide = function() {
            return cb("history", options.href);
          };
          if (container) {
            /**
             * @param {!Function} elem
             * @return {?}
             */
            p = function(elem) {
              return function() {
                /** @type {!Array} */
                var obj = [];
                /** @type {number} */
                var i = 0;
                for (; i < arguments.length; i++) {
                  obj[i] = arguments[i];
                }
                try {
                  elem.apply(container, obj);
                } finally {
                  hide();
                }
              };
            };
            failureRecaps.push(bind(container, "pushState", p)(), bind(container, "replaceState", p)());
          }
          if ("hash" === name) {
            /**
             * @return {?}
             */
            render = function() {
              return cb("hash", options.href);
            };
            el.addEventListener("hashchange", render, true);
            failureRecaps.push(function() {
              return el.removeEventListener("hashchange", render, true);
            });
          } else {
            el.addEventListener("popstate", hide, true);
            failureRecaps.push(function() {
              return el.removeEventListener("popstate", hide, true);
            });
          }
        }
        return engine && h(), [config, function() {
          failureRecaps.forEach(function(saveNotifs) {
            return saveNotifs();
          });
        }];
      };
    }
  };
  /** @type {string} */
  var key = "pageview";
  var action = {
    sendInit : true,
    routeMode : "history"
  };
  /** @type {string} */
  var categoryId = "resource";
  /** @type {!Array} */
  var validRequestTypes = ["xmlhttprequest", "fetch", "beacon"];
  /**
   * @param {!Array} p
   * @param {!Array} x
   * @param {!Array} t
   * @return {?}
   */
  var exec = function(p, x, t) {
    if (void 0 === p && (p = merge()), void 0 === x && (x = call()), void 0 === t && (t = func()), p) {
      return function(options, validate) {
        var n = options.ignoreUrls;
        var at = options.slowSessionThreshold;
        var data = options.ignoreTypes;
        var result = next(n);
        /** @type {!Array} */
        var cursors = [];
        /**
         * @param {!Array} args
         * @param {!Array} a
         * @return {undefined}
         */
        var update = function(args, a) {
          if (void 0 === a) {
            /** @type {boolean} */
            a = false;
          }
          args = args.filter(function(option) {
            return !(resolve(null != data ? data : validRequestTypes, option.initiatorType) || null != result && result.test(option.name));
          });
          if (validate && args.length) {
            args.forEach(function(commentPayload) {
              validate([{
                ev_type : "resource",
                payload : commentPayload
              }, a]);
            });
          }
        };
        var obj = add(step(p), 3)[2];
        error(function() {
          var retval;
          var getCategoryWithIndex;
          update(obj(categoryId), function() {
            if (!t) {
              return false;
            }
            /** @type {number} */
            var bt = t.loadEventEnd - t.navigationStart;
            return at < bt;
          }());
          retval = add(filter(x, function(canCreateDiscussions, domLink, item) {
            return 0 === domLink && update(item);
          }), 2);
          getCategoryWithIndex = retval[0];
          retval = retval[1];
          getCategoryWithIndex(categoryId);
          cursors.push(retval);
        });
        return [function() {
          cursors.forEach(function(saveNotifs) {
            return saveNotifs();
          });
        }];
      };
    }
  };
  /** @type {string} */
  var path = "resource";
  var id = {
    ignoreUrls : [],
    slowSessionThreshold : 4E3
  };
  /**
   * @param {!Array} node
   * @param {!Array} p
   * @param {string} url
   * @return {?}
   */
  var show = function(node, p, url) {
    if (void 0 === node && (node = createElement()), void 0 === p && (p = merge()), void 0 === url && (url = null === location || void 0 === location ? void 0 : location.href), node) {
      return function(options, dispatch) {
        var n = options.ignoreUrls;
        var s = options.includeUrls;
        var dedupe = options.dedupe;
        var response = next(s);
        var result = next(n);
        var sequence_values = add(step(p), 5)[4];
        var url = void 0;
        /**
         * @param {!Object} data
         * @return {undefined}
         */
        var render = function(data) {
          var path;
          var value;
          var text;
          var name;
          if (!(url && data.url === url || response && !response.test(data.url) || result && result.test(data.url))) {
            if (data.url || data.xpath && data.xpath !== shortName) {
              if (!(dedupe && data.url === url)) {
                url = data.url;
                value = sequence_values;
                text = (path = data).url;
                name = data.tagName;
                path = data.xpath;
                text = getText(text);
                value = value(text)[0];
                value = {
                  type : name.toLowerCase(),
                  url : text,
                  xpath : path,
                  timing : value
                };
                if (dispatch) {
                  dispatch({
                    ev_type : "resource_error",
                    payload : value
                  });
                }
              }
            }
          }
        };
        /**
         * @param {!Object} scope
         * @return {undefined}
         */
        var init = function(scope) {
          scope = scope || node.event;
          if (!!scope) {
            if (scope = function(result) {
              var context = result.target || result.srcElement;
              if (context) {
                var key = context.tagName;
                if (key && isString(key)) {
                  result = set(context);
                  return {
                    url : result,
                    tagName : key,
                    xpath : result ? void 0 : render(context)
                  };
                }
              }
            }(scope)) {
              render(scope);
            }
          }
        };
        node.addEventListener("error", init, true);
        return [render, function() {
          node.removeEventListener("error", init, true);
        }];
      };
    }
  };
  /** @type {string} */
  var msg = "resourceError";
  var placeholder = {
    includeUrls : [],
    ignoreUrls : [],
    dedupe : true
  };
  var defaults = {
    isSupport : true,
    isPolyfill : false,
    isBounced : false,
    isCustom : false,
    type : "perf"
  };
  /** @type {string} */
  var artistTrack = "first-input";
  /** @type {string} */
  var val = "largest-contentful-paint";
  /** @type {!Array} */
  var pointerEvents = ["keydown", "click"];
  /** @type {string} */
  var entryName = "first-contentful-paint";
  /** @type {string} */
  var elem = "longtask";
  /**
   * @param {!Object} options
   * @return {?}
   */
  var verify = function(options) {
    return void 0 === options && (options = merge()), function(window, windowing_function) {
      var scrollHeightObserver;
      var findLocation;
      var gotoNewOfflinePage;
      var DiffDOM = window.precollect;
      var me = window.fp;
      var definedTop = window.fcp;
      var or__3548__auto____460463 = window.lcp;
      var or__3548__auto____460464 = window.fid;
      var TimeMap = window.mpfid;
      var values = window.timing;
      /**
       * @param {string} height
       * @return {undefined}
       */
      window = function(height) {
        if (windowing_function) {
          windowing_function({
            ev_type : "performance",
            payload : height
          });
        }
      };
      if (me) {
        expect(update, {
          metricName : "fp",
          entryName : "first-paint"
        }, window);
      }
      if (definedTop) {
        expect(update, {
          metricName : "fcp",
          entryName : entryName
        }, window);
      }
      if (or__3548__auto____460463) {
        expect(build, {
          precollect : DiffDOM
        }, window);
      }
      if (or__3548__auto____460464) {
        expect(execute, 0, window);
      }
      if (TimeMap) {
        scrollHeightObserver = add(expect(query, {
          precollect : DiffDOM
        }, window), 1)[0];
        error(function() {
          return setTimeout(scrollHeightObserver, 200);
        });
      }
      if (values) {
        findLocation = add(step(options), 3)[2];
        gotoNewOfflinePage = add(each(function(canCreateDiscussions) {
          var timing = options && options.timing || void 0;
          var t = findLocation("navigation")[0];
          if (windowing_function) {
            windowing_function({
              ev_type : "performance_timing",
              payload : {
                isBounced : canCreateDiscussions,
                timing : timing,
                navigation_timing : t
              }
            });
          }
        }), 1)[0];
        error(function() {
          gotoNewOfflinePage(false);
        });
        remove(function() {
          gotoNewOfflinePage(true);
        });
      }
    };
  };
  /** @type {string} */
  var async = "layout-shift";
  /**
   * @param {!Array} options
   * @return {?}
   */
  var save = function(options) {
    return void 0 === options && (options = call()), function(map, hiddenFn) {
      var next = add(map, 1)[0];
      var i = String("cls", 0);
      if (!options) {
        return i.isSupport = false, [function() {
          return hiddenFn && hiddenFn(i);
        }, r];
      }
      var input;
      var command;
      map = add((input = 0, command = [], [function() {
        /** @type {number} */
        input = 0;
      }, function(configureInput, options) {
        var now;
        var w;
        if (!options.hadRecentInput) {
          now = command[0];
          w = command[command.length - 1];
          if (input && options.startTime - w < 1E3 && options.startTime - now < 5E3) {
            input = input + options.value;
            command.push(options.startTime);
          } else {
            input = options.value;
            /** @type {!Array} */
            command = [options.startTime];
          }
          configureInput(input);
        }
      }]), 2);
      var _json = map[0];
      var arg = map[1].bind(null, function(value) {
        if (value > i.value) {
          /** @type {number} */
          i.value = value;
        }
      });
      (next.entries || []).forEach(function(e) {
        if (e.entryType === async) {
          arg(e);
        }
      });
      map = add(filter(options, arg), 2);
      next = map[0];
      map = map[1];
      return next(async), stop(function() {
        _json();
      }, false), [function() {
        if (hiddenFn) {
          hiddenFn(i);
        }
        _json();
        i = String("cls", 0);
      }, map];
    };
  };
  /** @type {string} */
  var type = "longtask";
  /**
   * @param {!Array} options
   * @return {?}
   */
  var createNode = function(options) {
    return void 0 === options && (options = call()), function(e, $) {
      /**
       * @param {!Array} className
       * @return {undefined}
       */
      function closest(className) {
        if ($) {
          $({
            longtasks : className,
            type : "pref"
          });
        }
      }
      var value = (e.precollect || {}).entries;
      e = (void 0 === value ? [] : value).filter(function(result) {
        return result.entryType === type;
      });
      if (e.length && closest(e), !options) {
        return [r];
      }
      value = add(filter(options, function(r) {
        return closest([r]);
      }, false), 2);
      e = value[0];
      value = value[1];
      return e(type), [value];
    };
  };
  /**
   * @return {?}
   */
  var debounce = function() {
    return function(canCreateDiscussions, require) {
      /** @type {number} */
      var t = 0;
      var x = String("spa_load", 0);
      /**
       * @param {number} value
       * @return {undefined}
       */
      var delayed = function(value) {
        /** @type {number} */
        x.value = value;
        if (require) {
          require(x);
        }
      };
      /**
       * @return {undefined}
       */
      var onMouseUp = function() {
        delayed(Date.now() - t);
        /** @type {number} */
        t = 0;
      };
      return remove(function() {
        if (t) {
          /** @type {boolean} */
          x.isBounced = true;
          onMouseUp();
        }
      }), [function() {
        /** @type {number} */
        t = Date.now();
      }, onMouseUp];
    };
  };
  /** @type {string} */
  var referer = "performance";
  var Error = {
    entries : [],
    observer : void 0
  };
  var params = {
    fp : true,
    fcp : true,
    fid : true,
    mpfid : true,
    lcp : true,
    cls : true,
    timing : true,
    longtask : true
  };
  /**
   * @param {number} elem
   * @param {number} name
   * @param {number} options
   * @param {!Array} next
   * @param {number} p
   * @return {?}
   */
  var exports = function(elem, name, options, next, p) {
    return void 0 === elem && (elem = assert()), void 0 === name && (name = handleRequest() && createElement()), void 0 === options && (options = call()), void 0 === next && (next = parseInt()), void 0 === p && (p = merge()), function(value, enterEventHandler, eachcb, cb) {
      /**
       * @param {string} data
       * @return {undefined}
       */
      function renderer(data) {
        /** @type {string} */
        status.value = data;
        green(status);
      }
      var status = String("tti", 0);
      var green = add(each(function(e) {
        e = extractTouch(e);
        if (enterEventHandler) {
          enterEventHandler(e);
        }
      }), 1)[0];
      if (!(elem && name && options && p)) {
        return status.isSupport = false, green(status), [function() {
          return 0;
        }];
      }
      var x = value.precollect;
      var m = value.isAsync;
      m = void 0 === m ? 0 : m;
      value = value.minValue;
      var bindingDefinitions = void 0 === value ? null : value;
      value = x || {};
      x = value.entries;
      var b = void 0 === x ? [] : x;
      var observer = value.observer;
      x = add(step(p), 5);
      var text = x[0];
      var c = x[1];
      var h = x[4];
      value = add(multiply(c), 3);
      x = value[0];
      var then = value[1];
      var data = value[2];
      m = add(handler(name, elem, options, next)(m ? [] : b, data, c), 3);
      var number = m[0];
      var val = m[1];
      var entries = m[2];
      /**
       * @return {undefined}
       */
      var done = function() {
        then();
        val();
        if (eachcb) {
          eachcb();
        }
        if (observer) {
          observer.disconnect();
        }
        /** @type {number} */
        b.length = 0;
      };
      /**
       * @param {string} type
       * @return {?}
       */
      var render = function(type) {
        var result = h("first-contentful-paint")[0];
        result = function(ol, hatWidth, byteOffset, base, t) {
          if (base - byteOffset < 5E3) {
            return null;
          }
          t = 0 === t.length ? ol : t[t.length - 1].end;
          return base - t < 5E3 ? null : Math.max(t, hatWidth);
        }((result ? result.startTime : calculateBars(text)) || 0, bindingDefinitions || calculateBars(text) || 0, entries(), c() + (type ? 0 : 5E3), number);
        return type ? result ? (done(), void type(result)) : data(c() + 1E3) : (done(), result);
      };
      if (cb && cb(number, data, status), number.notSupport) {
        return status.isSupport = false, green(status), [function() {
          return 0;
        }];
      }
      cb = number[number.length - 1];
      x(function() {
        return render(renderer);
      }, Math.max(entries() + 5E3, cb ? cb.end : 0));
      return [function() {
        return render() || 0;
      }];
    };
  };
  /** @type {string} */
  var name = "tti";
  /** @type {!Array} */
  var width = ["SCRIPT", "STYLE", "META", "HEAD"];
  /**
   * @param {number} data
   * @param {!Array} options
   * @param {!Object} time
   * @param {!Array} el
   * @param {!Object} name
   * @return {?}
   */
  var check = function(data, options, time, el, name) {
    var payload;
    return void 0 === data && (data = assign()), void 0 === options && (options = parseInt()), void 0 === time && (time = null === (payload = func()) || void 0 === payload ? void 0 : payload.navigationStart), void 0 === el && (el = function() {
      if (createElement() && "requestAnimationFrame" in window) {
        return window.requestAnimationFrame;
      }
    }()), void 0 === name && (name = function() {
      if (createElement() && "cancelAnimationFrame" in window) {
        return window.cancelAnimationFrame;
      }
    }()), function(e, workerFor) {
      /**
       * @return {?}
       */
      function attempt() {
        return ret.push({
          time : Date.now() - now,
          score : position(data && data.body, 1, false, width)
        });
      }
      var idx = e.renderType;
      var method = String("fmp", 0);
      /**
       * @param {string} e
       * @return {undefined}
       */
      var value = function(e) {
        e = extractTouch(e);
        if (workerFor) {
          workerFor(e);
        }
      };
      if ("SSR" === idx) {
        return expect(update, {
          metricName : "fmp",
          entryName : entryName
        }, value), [r];
      }
      var isConfirmed = add(each(value), 1)[0];
      if (!data || !options || !time) {
        return method.isSupport = false, isConfirmed(method), [r];
      }
      var d;
      var p;
      var Math_abs;
      var type;
      /** @type {number} */
      var now = Date.now();
      /** @type {!Array} */
      var ret = [];
      var retryAfterMs = add((d = data, e = name, idx = true, Math_abs = !$(value = el) || idx && d && d.hidden ? function(c2) {
        return c2(0), 0;
      } : value, type = $(e) ? e : r, [function(e) {
        if (p) {
          type(p);
        }
        p = Math_abs(e);
      }, Math_abs, type]), 1)[0];
      value = add(style(options, function() {
        return retryAfterMs(attempt);
      }), 2);
      e = value[0];
      var cancelable = value[1];
      /** @type {number} */
      value = now - (time || 0);
      return e(data, {
        subtree : true,
        childList : true
      }), [function(_disabled) {
        if (void 0 === _disabled) {
          /** @type {number} */
          _disabled = 0;
        }
        cancelable();
        var key;
        var mapping;
        key = (key = (mapping = add(void 0 === (key = ret) ? [] : key))[0], (mapping = mapping.slice(1)) && mapping.reduce(function(result, b) {
          var t = add(result, 2);
          var a = t[0];
          result = t[1];
          /** @type {number} */
          t = b.score - a.score;
          return [b, b.time >= a.time && result.rate < t ? {
            time : b.time,
            rate : t
          } : result];
        }, [key, {
          time : null == key ? void 0 : key.time,
          rate : 0
        }])[1].time || 0);
        method.value = key ? key + _disabled : 0;
        isConfirmed(method);
      }.bind(null, value)];
    };
  };
  /** @type {string} */
  var d = "fmp";
  var settings = {
    renderType : "CSR"
  };
  /** @type {!Array} */
  var IGNORE_TAGS = ["SCRIPT", "STYLE", "META", "HEAD"];
  /** @type {!Array} */
  var _this = ["js_error", "http", "resource_error"];
  /** @type {number} */
  var maxDepth = 1E4;
  /** @type {number} */
  var distance = 8E3;
  /** @type {number} */
  var timer = 2E3;
  /** @type {number} */
  var radius2 = 1E4;
  /**
   * @param {!Object} self
   * @return {?}
   */
  var schedule = function(self) {
    return self.requestIdleCallback || function(e) {
      return self.setTimeout(e, 1);
    };
  };
  /**
   * @param {!Object} message
   * @param {!Object} settings
   * @return {?}
   */
  var makeRequest = function(message, settings) {
    if (-1 === _this.indexOf(settings.ev_type)) {
      return message;
    }
    if ("http" === settings.ev_type && settings.payload.response.status < 400) {
      return message;
    }
    if (message && _this.indexOf(message.type) < _this.indexOf(settings.ev_type)) {
      return message;
    }
    /** @type {string} */
    var str = "";
    switch(settings.ev_type) {
      case "js_error":
        str = settings.payload.error.message;
        break;
      case "http":
        str = settings.payload.request.url;
        break;
      case "resource_error":
        str = settings.payload.url;
    }
    return {
      type : settings.ev_type,
      message : str,
      timestamp : Date.now()
    };
  };
  /**
   * @param {!Element} p
   * @param {number} level
   * @param {number} x
   * @param {number} i
   * @param {!Array} name
   * @return {?}
   */
  var format = function(p, level, x, i, name) {
    if (void 0 === level && (level = 0), void 0 === x && (x = 0), void 0 === i && (i = 1.5), void 0 === name && (name = IGNORE_TAGS), !p || -1 < name.indexOf(p.tagName) || i <= x || 4 < level) {
      return x;
    }
    var add = function() {
      if (!level) {
        return 0;
      }
      var val = p.getBoundingClientRect();
      var height = val.top;
      val = val.height;
      return height > innerHeight || val <= 0 ? 0 : 1 / Math.pow(2, level - 1);
    }();
    return [].reduceRight.call(p.children, function(un, n) {
      return format(n, level + 1, un, i, name);
    }, x + add);
  };
  /**
   * @param {!Function} callback
   * @param {!Object} item
   * @param {!Object} self
   * @param {!Object} context
   * @return {?}
   */
  var setup = function(callback, item, self, context) {
    /**
     * @return {undefined}
     */
    function init() {
      schedule(self)(function() {
        if (self.html2canvas) {
          self.html2canvas(context.body, {
            scale : 360 / self.innerWidth
          }).then(function(canvas) {
            callback(canvas.toDataURL("image/jpeg", .1));
          });
        }
      });
    }
    if (createElement() && "Promise" in window && Promise && self && context) {
      if (self.html2canvas) {
        return init();
      }
      var node = context.createElement("script");
      /** @type {!Object} */
      node.src = item;
      if (null !== (item = context.head) && void 0 !== item) {
        item.appendChild(node);
      }
      /** @type {function(): undefined} */
      node.onload = init;
    }
  };
  /** @type {string} */
  var shouldComponentUpdate = "blankScreen";
  var options = {
    autoDetect : true,
    threshold : 1.5,
    screenshot : true,
    ssUrl : "https://apm.volccdn.com/mars-web/apmplus/web/html2canvas.min.js"
  };
  /** @type {string} */
  var cssFormat = "custom";
  /**
   * @param {!Object} data
   * @return {?}
   */
  var decode = function(data) {
    if (data && callback(data) && data.name && isString(data.name)) {
      var result = {
        name : data.name,
        type : "event"
      };
      if ("metrics" in data && callback(data.metrics)) {
        var stats = data.metrics;
        var values = {};
        for (i in stats) {
          if (isFinite(stats[i])) {
            values[i] = stats[i];
          }
        }
        result.metrics = values;
      }
      if ("categories" in data && callback(data.categories)) {
        var i;
        var categories = data.categories;
        var values = {};
        for (i in categories) {
          values[i] = stringify(categories[i]);
        }
        result.categories = values;
      }
      return result;
    }
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var list = function(data) {
    if (data && callback(data) && data.content && isString(data.content)) {
      var item = {
        content : stringify(data.content),
        type : "log",
        level : "info"
      };
      if ("level" in data && (item.level = data.level), "extra" in data && callback(data.extra)) {
        var i;
        var values = data.extra;
        var res = {};
        var result = {};
        for (i in values) {
          if (isFinite(values[i])) {
            res[i] = values[i];
          } else {
            result[i] = stringify(values[i]);
          }
        }
        item.metrics = res;
        item.categories = result;
      }
      return item;
    }
  };
  /**
   * @param {!Object} _
   * @return {undefined}
   */
  var success = function(_) {
    var a = hasLowBandwidth();
    var r = map(a);
    if (a) {
      /**
       * @return {undefined}
       */
      a.onchange = function() {
        r = map(a);
      };
    }
    _.on("report", function(data) {
      return extend(extend({}, data), {
        extra : extend(extend({}, data.extra || {}), {
          network_type : r
        })
      });
    });
  };
  /**
   * @param {string} file
   * @param {number} node
   * @param {!Function} i
   * @param {!Function} s
   * @return {?}
   */
  var run = function(file, node, i, s) {
    if (!node) {
      return g;
    }
    var v = node.sample_rate;
    var string = node.include_users;
    var p = node.sample_granularity;
    var w = node.rules;
    node = node.r;
    node = void 0 === node ? Math.random() : node;
    if (resolve(string, file)) {
      return function(data) {
        return setTimeout(data, 1);
      };
    }
    var o;
    var r;
    var num_channels;
    var str;
    var val;
    var t;
    var unloadHandlers;
    /** @type {boolean} */
    p = "session" === p;
    var end = print(p, v, i, node, s);
    var map = (o = w, r = p, num_channels = v, str = i, val = node, t = s, unloadHandlers = {}, Object.keys(o).forEach(function(i) {
      var d = o[i];
      var enable = d.enable;
      var sample_rate = d.sample_rate;
      d = d.conditional_sample_rules;
      if (enable) {
        unloadHandlers[i] = {
          enable : enable,
          sample_rate : sample_rate,
          effectiveSampleRate : sample_rate * num_channels,
          hit : print(r, sample_rate, str, val, t)
        };
        if (d) {
          unloadHandlers[i].conditional_hit_rules = d.map(function(filters) {
            var sample_rate = filters.sample_rate;
            filters = filters.filter;
            return {
              sample_rate : sample_rate,
              hit : print(r, sample_rate, str, val, t),
              effectiveSampleRate : sample_rate * num_channels,
              filter : filters
            };
          });
        }
      } else {
        unloadHandlers[i] = {
          enable : enable,
          hit : function() {
            return false;
          },
          sample_rate : 0,
          effectiveSampleRate : 0
        };
      }
    }), unloadHandlers);
    return function(data) {
      if (!end()) {
        return false;
      }
      if (!(data.ev_type in map)) {
        return setTimeout(data, v);
      }
      if (!map[data.ev_type].enable) {
        return false;
      }
      if (null !== (base = data.common) && void 0 !== base && base.sample_rate) {
        return data;
      }
      var base = map[data.ev_type];
      var array = base.conditional_hit_rules;
      if (array) {
        /** @type {number} */
        var i = 0;
        for (; i < array.length; i++) {
          if (select(data, array[i].filter)) {
            return !!array[i].hit() && setTimeout(data, array[i].effectiveSampleRate);
          }
        }
      }
      return !!base.hit() && setTimeout(data, base.effectiveSampleRate);
    };
  };
  var fragments = {
    build : function(data) {
      return {
        ev_type : data.ev_type,
        payload : data.payload,
        common : extend(extend({}, data.extra || {}), data.overrides || {})
      };
    }
  };
  /** @type {string} */
  var sname = "APM_PLUS_WEB";
  /** @type {string} */
  var el = "/settings/get/webpro";
  /** @type {string} */
  var columnIds = "/monitor_web/collect";
  /** @type {!Array} */
  var viewOptions = [columnIds, el, "/monitor_browser/collect"];
  var defaultConfig = {
    sample_rate : 1,
    include_users : [],
    sample_granularity : "session",
    rules : {}
  };
  /** @type {number} */
  var multipartSize = 20;
  /**
   * @param {string} prefix
   * @param {number} idTo
   * @return {?}
   */
  var getPath = function(prefix, idTo) {
    return void 0 === idTo && (idTo = columnIds), (prefix && 0 <= prefix.indexOf("//") ? "" : "https://") + prefix + idTo;
  };
  /** @type {function(): ?} */
  var getSessionId = mobileLogin;
  /**
   * @param {!Object} data
   * @return {?}
   */
  var constructor = function(data) {
    /**
     * @return {undefined}
     */
    function get() {
      var opts = extend(extend(extend({}, data), result || {}), defaults);
      opts.plugins = function() {
        /** @type {!Array} */
        var nodes = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          nodes[i] = arguments[i];
        }
        var value = {};
        /** @type {number} */
        var node_idx = 0;
        for (; node_idx < nodes.length;) {
          value = fn(value, nodes[node_idx++]);
        }
        return value;
      }(data.plugins, (null == result ? void 0 : result.plugins) || {}, defaults.plugins || {});
      opts.sample = addItem(addItem(data.sample, null == result ? void 0 : result.sample), defaults.sample);
      options = opts;
      i();
    }
    /**
     * @return {undefined}
     */
    function add() {
      result = function(data) {
        if (!data) {
          return {};
        }
        var info = data.sample;
        var now = data.timestamp;
        var url = data.status;
        if (!info) {
          return {};
        }
        var sample_rate = info.sample_rate;
        data = info.sample_granularity;
        return {
          sample : {
            include_users : info.include_users,
            sample_rate : url && 4 === url ? 0 : sample_rate,
            sample_granularity : data,
            rules : info.rules.reduce(function(serverElements, d) {
              var i = d.name;
              var enable = d.enable;
              var sample_rate = d.sample_rate;
              d = d.conditional_sample_rules;
              return serverElements[i] = {
                enable : enable,
                sample_rate : sample_rate,
                conditional_sample_rules : d
              }, serverElements;
            }, {})
          },
          serverTimestamp : now
        };
      }(textarea);
      get();
      f();
    }
    var autoReview;
    var textarea;
    var result;
    /** @type {!Object} */
    var options = data;
    var defaults = {};
    /** @type {function(): ?} */
    var f = r;
    /** @type {function(): ?} */
    var i = r;
    return {
      getConfig : function() {
        return options;
      },
      setConfig : function(data) {
        var $;
        var host;
        var cb;
        return defaults = extend(extend({}, defaults), data || {}), get(), autoReview || (autoReview = data, options.useLocalConfig ? (result = {}, f()) : textarea ? add() : ($ = options.transport, host = options.domain, data = options.aid, cb = function(v) {
          /** @type {string} */
          textarea = v;
          add();
        }, $.get({
          withCredentials : true,
          url : function(prefix, id) {
            return void 0 === id && (id = el), (prefix && 0 <= prefix.indexOf("//") ? "" : "https://") + prefix + id;
          }(host) + "?aid=" + data,
          success : function(object) {
            cb(object.data || {});
          },
          fail : function() {
            cb();
          }
        }))), options;
      },
      onChange : function(from) {
        /** @type {!Object} */
        i = from;
      },
      onReady : function(onFilesLoaded) {
        /**
         * @return {undefined}
         */
        f = function() {
          !function() {
            if (data.userId !== options.userId) {
              /** @type {number} */
              data.sample.r = Math.random();
              get();
            }
            logger(options);
          }();
          onFilesLoaded();
        };
        if (result) {
          f();
        }
      }
    };
  };
  var i;
  var provider;
  var self;
  var current;
  var x;
  var diff;
  var server;
  var client;
  var model;
  var that;
  var e;
  var value;
  var app;
  var me;
  var ref;
  var context;
  var ret;
  var undefined;
  /**
   * @param {!Object} _
   * @return {undefined}
   */
  var sync = function(_) {
    _.on("report", function(value) {
      return options = value, value = {
        url : find(),
        timestamp : Date.now()
      }, extend(extend({}, options), {
        extra : extend(extend({}, value), options.extra || {})
      });
      var options;
    });
  };
  var testData = {
    sri : "reportSri",
    st : "reportResourceError",
    err : "captureException"
  };
  /**
   * @param {?} defaults
   * @return {?}
   */
  var toString = function(defaults) {
    return Object.keys(defaults).reduce(function(eventsDict, event) {
      return eventsDict[event] = [], eventsDict;
    }, {});
  };
  /**
   * @param {!Object} args
   * @return {?}
   */
  var _cbIndex = function(args) {
    return Object.keys(args).reduce(function(o, v) {
      return o[args[v]] = v, o;
    }, {});
  };
  /**
   * @param {!Object} element
   * @param {!Object} data
   * @param {!Object} options
   * @return {?}
   */
  var move = function(element, data, options) {
    return function(k, a, t, value) {
      if (void 0 === t) {
        /** @type {number} */
        t = Date.now();
      }
      if (void 0 === value) {
        /** @type {string} */
        value = location.href;
      }
      value = extend(extend({}, f(element)), {
        url : value,
        timestamp : t
      });
      if (data[k]) {
        if (element[options[k]]) {
          defer(element, value)(function() {
            element[options[k]](a);
          });
        } else {
          if (null !== (t = data[k]) && void 0 !== t) {
            t.push([a, value]);
          }
        }
      }
    };
  };
  /**
   * @param {!Object} task
   * @param {!Object} events
   * @param {!Object} args
   * @return {?}
   */
  var copy = function(task, events, args) {
    return function(name) {
      var eventList;
      if (name in args) {
        if (null !== (eventList = events[args[name]]) && void 0 !== eventList) {
          eventList.forEach(function(map) {
            map = add(map, 2);
            var error = map[0];
            map = map[1];
            defer(task, map)(function() {
              task[name](error);
            });
          });
        }
        /** @type {null} */
        events[args[name]] = null;
      }
    };
  };
  /**
   * @param {!Object} client
   * @return {undefined}
   */
  var App = function(client) {
    var inc;
    /** @type {boolean} */
    var o = false;
    client.on("init", function() {
      /** @type {number} */
      inc = (new Date).getTime();
      client.on("config", function() {
        var pos;
        var length = null === (pos = client.config()) || void 0 === pos ? void 0 : pos.serverTimestamp;
        if (!(isNaN(length) || Number(length) <= 0 || o)) {
          /** @type {boolean} */
          o = true;
          if ((pos = (new Date).getTime()) - inc < 700 && length) {
            /** @type {number} */
            pos = length - (pos + inc) / 2;
            if (!isNaN(pos) && (0 < pos || pos < -6E5)) {
              client.set({
                offset : pos
              });
            }
          }
        }
      });
    });
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  var handle = function(event) {
    event.on("beforeBuild", function(data) {
      return options = data, $stateParams = event.config(), (data = {}).aid = $stateParams.aid, data.pid = $stateParams.pid, data.view_id = $stateParams.viewId, data.user_id = $stateParams.userId, extend(extend({}, options), {
        extra : extend(extend({}, data), options.extra || {})
      });
      var options;
      var $stateParams;
    });
  };
  /**
   * @param {!Object} msg
   * @return {undefined}
   */
  var done = function(msg) {
    msg.on("start", function() {
      var data;
      var result = msg.config();
      var deviceId = result.deviceId;
      var sid = result.sessionId;
      var release = result.release;
      var e = result.env;
      var openOffset = result.offset;
      var id = result.aid;
      result = result.token;
      id = {
        did : deviceId,
        sid : sid,
        release : release,
        env : e,
        sname : sname,
        sversion : "1.5.0",
        soffset : openOffset || 0,
        biz_id : id,
        x_auth_token : result
      };
      result = msg.getSender();
      result.setEndpoint(result.getEndpoint() + (callback(data = id) ? Object.keys(data).reduce(function(value, unbracketed) {
        return value = value + ("&" + unbracketed + "=" + data[unbracketed]);
      }, "").replace("&", "?") : ""));
    });
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var init = function(data) {
    var failure;
    data = loop(data.aid);
    return {
      aid : 0,
      pid : "",
      token : "",
      viewId : "__" + Date.now(),
      userId : data.userId,
      deviceId : data.deviceId,
      sessionId : getSessionId(),
      domain : "apmplus.volces.com",
      plugins : {
        ajax : {
          ignoreUrls : viewOptions
        },
        fetch : {
          ignoreUrls : viewOptions
        },
        breadcrumb : {},
        pageview : {},
        jsError : {},
        resource : {},
        resourceError : {},
        performance : {},
        tti : {},
        fmp : {},
        blankScreen : false
      },
      release : "",
      env : "production",
      sample : extend(extend({}, defaultConfig), {
        r : data.r
      }),
      transport : (failure = assert()) ? {
        get : function(data) {
          ajax("GET", data, failure);
        },
        post : function(data) {
          ajax("POST", data, failure);
        }
      } : {
        get : r,
        post : r
      }
    };
  };
  var _ = (undefined = function(a) {
    /** @type {({})} */
    var b = void 0 === a ? {} : a;
    var bSortValue = b.createSender;
    a = b.builder;
    b = b.createDefaultConfig;
    var data = function(_) {
      /**
       * @param {string} name
       * @param {number} fn
       * @return {undefined}
       */
      function setTimeout(name, fn) {
        if (void 0 === fn) {
          /** @type {boolean} */
          fn = false;
        }
        /** @type {!Array} */
        var value = [];
        /** @type {number} */
        var i = 2;
        for (; i < arguments.length; i++) {
          value[i - 2] = arguments[i];
        }
        settings[name].forEach(function(connection) {
          try {
            connection.apply(void 0, emit([], add(value), false));
          } catch (e) {
          }
        });
        if (fn) {
          /** @type {number} */
          settings[name].length = 0;
        }
      }
      var x;
      var that;
      var self = _.builder;
      var parseCoordinate = _.createSender;
      var _clone = _.createDefaultConfig;
      /** @type {function(!Object): ?} */
      var fn = _.createConfigManager;
      /** @type {function(!Object): ?} */
      var extend = _.userConfigNormalizer;
      /** @type {function(string): ?} */
      var unescape_html = _.initConfigNormalizer;
      /** @type {function(!Object): ?} */
      var isArray = _.validateInitConfig;
      var settings = {};
      events.forEach(function(enable_keys) {
        return settings[enable_keys] = [];
      });
      /** @type {boolean} */
      var element = false;
      /** @type {boolean} */
      var inputId = false;
      /** @type {boolean} */
      var callBackTime = false;
      /** @type {!Array} */
      var u = [];
      /** @type {!Array} */
      var value = [];
      var defaults = {
        getBuilder : function() {
          return self;
        },
        getSender : function() {
          return x;
        },
        getPreStartQueue : function() {
          return u;
        },
        init : function(data) {
          if (element) {
            push("already inited");
          } else {
            if (!(data && callback(data) && isArray(data))) {
              throw new Error("invalid InitConfig, init failed");
            }
            var where = _clone(data);
            if (!where) {
              throw new Error("defaultConfig missing");
            }
            data = unescape_html(data);
            if ((that = fn(where)).setConfig(data), that.onChange(function() {
              setTimeout("config");
            }), !(x = parseCoordinate(that.getConfig()))) {
              throw new Error("sender missing");
            }
            setTimeout("init", element = true);
          }
        },
        set : function(id) {
          if (element && id && callback(id)) {
            setTimeout("beforeConfig", false, id);
            if (null != that) {
              that.setConfig(id);
            }
          }
        },
        config : function(data) {
          if (element) {
            return data && callback(data) && (setTimeout("beforeConfig", false, data), null != that && that.setConfig(extend(data))), null == that ? void 0 : that.getConfig();
          }
        },
        provide : function(name, value) {
          if (resolve(value, name)) {
            push("cannot provide " + name + ", reserved");
          } else {
            /** @type {!Function} */
            defaults[name] = value;
            setTimeout("provide", false, name);
          }
        },
        start : function() {
          var n = this;
          if (element) {
            if (!inputId) {
              if (null != that) {
                that.onReady(function() {
                  setTimeout("start", inputId = true);
                  u.forEach(function(e) {
                    return n.build(e);
                  });
                  /** @type {!Array} */
                  u = [];
                });
              }
            }
          }
        },
        report : function(data) {
          if (data) {
            if (!!(data = debug(settings.beforeReport)(data))) {
              if (data = debug(settings.report)(data)) {
                if (inputId) {
                  this.build(data);
                } else {
                  u.push(data);
                }
              }
            }
          }
        },
        build : function(data) {
          if (!!inputId) {
            if (data = debug(settings.beforeBuild)(data)) {
              if (!!(data = self.build(data))) {
                if (data = debug(settings.build)(data)) {
                  this.send(data);
                }
              }
            }
          }
        },
        send : function(data) {
          if (!!inputId) {
            if (data = debug(settings.beforeSend)(data)) {
              x.send(data);
              setTimeout("send", false, data);
            }
          }
        },
        destroy : function() {
          setTimeout("beforeDestroy", callBackTime = true);
        },
        on : function(type, f) {
          if ("init" === type && element || "start" === type && inputId || "beforeDestroy" === type && callBackTime) {
            f();
          } else {
            if (settings[type]) {
              settings[type].push(f);
            }
          }
        },
        off : function(key, type) {
          if (settings[key]) {
            settings[key] = trim(settings[key], type);
          }
        }
      };
      /** @type {!Array<string>} */
      value = Object.keys(defaults);
      return defaults;
    }({
      validateInitConfig : firebaseRetrieveToken,
      initConfigNormalizer : defaultize,
      userConfigNormalizer : responseStatusSuccess,
      createSender : void 0 === bSortValue ? function(self) {
        return test({
          size : multipartSize,
          endpoint : getPath(self.domain),
          transport : self.transport
        });
      } : bSortValue,
      builder : void 0 === a ? fragments : a,
      createDefaultConfig : void 0 === b ? init : b,
      createConfigManager : constructor
    });
    create(data);
    App(data);
    handle(data);
    sync(data);
    success(data);
    done(data);
    var model;
    b = out(data, f, function(value, key, d) {
      return defer(value, key)(function() {
        var x = add(d);
        var name = x[0];
        x = x.slice(1);
        data[name].apply(data, emit([], add(x), false));
      });
    });
    return (model = b).on("init", function() {
      /** @type {!Array} */
      var n = [];
      var opts = model.config();
      if (opts && opts.integrations) {
        opts.integrations.forEach(function(self) {
          if (!resolve(n, self.name)) {
            n.push(self.name);
            self.setup(model);
            if (self.tearDown) {
              model.on("beforeDestroy", self.tearDown);
            }
          }
        });
      }
    }), b;
  }(i = void 0 === i ? {} : i), (provider = undefined).on("start", function() {
    var data = provider.config();
    var source = data.userId;
    data = data.sample;
    if (data && 0 === data.sample_rate) {
      provider.destroy();
    }
    data = run(source, data, v, t);
    provider.on("build", data);
  }), self = undefined, x = toString(current = void 0 === current ? testData : current), i = _cbIndex(current), diff = move(self, x, current), null !== (current = self.p) && void 0 !== current && current.a && "observe" in self.p.a && self.p.a.observe(function(file) {
    var expected = add(file, 5);
    expected[0];
    var expectedObject = expected[1];
    var child = expected[2];
    file = expected[3];
    expected = expected[4];
    diff(expectedObject, child, file, expected);
  }), self.on("init", function() {
    var r;
    if (null !== (r = self.p) && void 0 !== r) {
      r.a.forEach(function(file) {
        var expected = add(file, 5);
        expected[0];
        var expectedObject = expected[1];
        var child = expected[2];
        file = expected[3];
        expected = expected[4];
        diff(expectedObject, child, file, expected);
      });
    }
    if (self.p && self.p.a) {
      /** @type {number} */
      self.p.a.length = 0;
    }
  }), self.provide("precollect", diff), self.on("provide", copy(self, x, i)), (server = undefined).provide("sendEvent", function(text) {
    text = decode(text);
    if (text) {
      server.report({
        ev_type : cssFormat,
        payload : text,
        extra : {
          timestamp : Date.now()
        }
      });
    }
  }), server.provide("sendLog", function(args) {
    args = list(args);
    if (args) {
      server.report({
        ev_type : cssFormat,
        payload : args,
        extra : {
          timestamp : Date.now()
        }
      });
    }
  }), (client = undefined).on("init", function() {
    var event;
    var value = ok(client, key, action);
    if (value) {
      value = add(expect(main, extend(extend({}, value), {
        initPid : null === (value = client.config()) || void 0 === value ? void 0 : value.pid,
        onPidUpdate : function(pid) {
          client.set({
            pid : pid,
            viewId : pid + "_" + Date.now(),
            actionId : void 0
          });
        }
      }), client.report.bind(client)), 2);
      event = value[0];
      value = value[1];
      client.on("config", function() {
        event(client.config().pid);
      });
      client.on("beforeDestroy", value);
      client.provide("sendPageview", event);
    }
  }), (model = undefined).on("init", function() {
    var isPanning;
    var options = ok(model, tag, DEFAULTS);
    if (options) {
      /** @type {boolean} */
      isPanning = false;
      options = add(expect(compile, extend(extend({}, options), {
        hookCbAtReq : makeTestChangeMiddleLabel(model),
        setTraceHeader : generate(options.trace, "app_id=" + (null === (options = model.config()) || void 0 === options ? void 0 : options.aid) + ",origin=web")
      }), function(e) {
        return !isPanning && model.report(e);
      }), 1)[0];
      model.on("beforeDestroy", function() {
        /** @type {boolean} */
        isPanning = true;
      });
      model.provide("wrapXhr", options);
    }
  }), (that = undefined).on("init", function() {
    var isPanning;
    var result = ok(that, url, err);
    if (result) {
      /** @type {boolean} */
      isPanning = false;
      result = add(expect(request, extend(extend({}, result), {
        hookCbAtReq : makeTestChangeMiddleLabel(that),
        setTraceHeader : generate(result.trace, "app_id=" + (null === (result = that.config()) || void 0 === result ? void 0 : result.aid) + ",origin=web")
      }), function(e) {
        return !isPanning && that.report(e);
      }), 1)[0];
      that.on("beforeDestroy", function() {
        /** @type {boolean} */
        isPanning = true;
      });
      that.provide("wrapFetch", result);
    }
  }), (e = undefined).on("init", function() {
    var desc;
    var value = ok(e, name, {});
    if (value) {
      desc = e.pp || Error;
      expect(exports, extend(extend({}, value), {
        precollect : desc
      }), onRelease(e));
    }
  }), (value = undefined).on("init", function() {
    var scrollHeightObserver;
    var data = ok(value, d, settings);
    if (data) {
      scrollHeightObserver = add(expect(check, data, onRelease(value)), 1)[0];
      error(function() {
        return setTimeout(scrollHeightObserver, 200);
      });
    }
  }), (app = undefined).on("init", function() {
    var callback;
    var value;
    var data = ok(app, string, message);
    if (data) {
      data = (value = add(expect(start, data, r), 3))[0];
      callback = value[1];
      value = value[2];
      app.on("report", function(event) {
        return "http" === event.ev_type && callback({
          type : "http",
          category : event.payload.api,
          message : "",
          data : {
            method : event.payload.request.method,
            url : event.payload.request.url,
            status_code : String(event.payload.response.status)
          },
          timestamp : event.payload.request.timestamp
        }), event;
      });
      app.on("beforeDestroy", value);
      app.provide("getBreadcrumbs", data);
      app.provide("addBreadcrumb", callback);
    }
  }), (me = undefined).on("init", function() {
    window.removeEventListener("error", me.pcErr, true);
    window.removeEventListener("unhandledrejection", me.pcRej, true);
    var f;
    var item = ok(me, html, pathString);
    if (item) {
      item = (f = add(expect(listen, item, function(data) {
        if (me.getBreadcrumbs) {
          data.payload.breadcrumbs = me.getBreadcrumbs();
        }
        me.report(data);
      }), 2))[0];
      f = f[1];
      me.on("beforeDestroy", f);
      me.provide("captureException", item);
    }
  }), (ref = undefined).on("init", function() {
    var opts = ref.pp || Error;
    if (null !== (cb = opts.observer) && void 0 !== cb) {
      cb.disconnect();
    }
    var report;
    var cb;
    var callback;
    var list;
    var p;
    var data = ok(ref, referer, params);
    if (data) {
      expect(verify, extend(extend({}, data), {
        precollect : opts
      }), onRelease(ref));
      cb = (callback = add(expect(debounce, 0, report = function(order) {
        ref.report({
          ev_type : "performance",
          payload : order
        });
      }), 2))[0];
      callback = callback[1];
      ref.provide("performanceInit", cb);
      ref.provide("performanceSend", callback);
      if (data.longtask) {
        callback = add(expect(createNode, {
          precollect : opts
        }, function(commentPayload) {
          ref.report({
            ev_type : "performance_longtask",
            payload : commentPayload
          });
        }), 1)[0];
        ref.on("beforeDestroy", callback);
      }
      if (data.cls) {
        list = find();
        data = add(expect(save, [opts], function(commentPayload) {
          ref.report({
            ev_type : "performance",
            payload : commentPayload,
            overrides : {
              url : list
            }
          });
        }), 2);
        p = data[0];
        data = data[1];
        ref.on("beforeConfig", function(options) {
          if (options.viewId && options.viewId !== (null === (options = ref.config()) || void 0 === options ? void 0 : options.viewId)) {
            p();
            list = find();
          }
        });
        ref.on("beforeDestroy", data);
        remove(p);
      }
      /** @type {number} */
      opts.entries.length = 0;
      ref.provide("sendCustomPerfMetric", function(data) {
        data = extend(extend(extend({}, defaults), data), {
          isCustom : true
        });
        report(data);
      });
    }
  }), (context = undefined).on("init", function() {
    var h;
    var data = ok(context, msg, placeholder);
    if (data) {
      data = (h = add(expect(show, data, context.report.bind(context)), 2))[0];
      h = h[1];
      context.on("beforeDestroy", h);
      context.provide("reportResourceError", data);
    }
  }), (ret = undefined).on("init", function() {
    var data = ok(ret, path, id);
    if (data) {
      data = add(expect(exec, data, function(value) {
        var obj = add(value, 2);
        value = obj[0];
        obj = obj[1];
        ret.report(obj ? extend(extend({}, value), {
          extra : {
            sample_rate : 1
          }
        }) : value);
      }), 1)[0];
      ret.on("beforeDestroy", data);
    }
  }), read(undefined), undefined);
  var oldGeoms = function() {
    var e = createElement();
    var target = initialize();
    if (e && target) {
      return e[target];
    }
  }();
  if (oldGeoms) {
    ["p", "pp", "pcErr", "pcRej"].forEach(function(name) {
      _.provide(name, oldGeoms[name]);
    });
  }
  var removeEventListenerFn;
  var hasher;
  var a;
  var o;
  var root = createElement();
  var onload = initialize();
  if (root && onload) {
    removeEventListenerFn = (null == (removeEventListenerFn = root[onload]) ? void 0 : removeEventListenerFn.q) || [];
    root[onload] = _;
    removeEventListenerFn.forEach(function(obj) {
      var value;
      var item;
      /** @type {!Object} */
      item = obj;
      obj = extend(extend({}, f(value = _)), {
        url : item.pop(),
        timestamp : item.pop()
      });
      defer(value, obj)(function() {
        value.apply(void 0, emit([], add(item), false));
      });
    });
    /** @type {number} */
    removeEventListenerFn.length = 0;
    if (_.p) {
      if ("observe" in _.p.a) {
        console.warn("global precollect queue already updated");
      }
      _.p.a = (a = _.p.a, o = [], a.observe = function(type) {
        o.push(type);
      }, a.push = function() {
        var _Object$getPrototypeO;
        /** @type {!Array} */
        var value = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          value[i] = arguments[i];
        }
        return value.forEach(function(context) {
          o.forEach(function(e) {
            return e(context);
          });
        }), (_Object$getPrototypeO = [].push).call.apply(_Object$getPrototypeO, emit([a], add(value), false));
      }, a);
      if (hasher = _.precollect) {
        _.provide("precollect", function() {
          /** @type {!Array} */
          var value = [];
          /** @type {number} */
          var i = 0;
          for (; i < arguments.length; i++) {
            value[i] = arguments[i];
          }
          return _.p.a.push(emit(["precollect"], add(value), false)), hasher.apply(void 0, emit([], add(value), false));
        });
      }
    }
  }
}();
