/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "/dist/js/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = "QfWi"));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "+UKG": /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _baseConfig = __webpack_require__("U6+W");

      var _baseMonitor = _interopRequireDefault(__webpack_require__("cBov"));

      var _taskQueue = _interopRequireDefault(__webpack_require__("Q6xx"));

      var _console = _interopRequireDefault(__webpack_require__("jTJs"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /**
       * 监控基类
       */
      var RequestMonitor = /*#__PURE__*/ (function (_BaseMonitor) {
        _inherits(RequestMonitor, _BaseMonitor);

        var _super = _createSuper(RequestMonitor);

        /**
         * 上报错误地址
         */
        function RequestMonitor(params) {
          var _this;

          _classCallCheck(this, RequestMonitor);

          _this = _super.call(this, params); // this.category = undefined

          _this.level = _baseConfig.ErrorLevelEnum.INFO; // 错误等级

          _this.msg = ""; // 错误信息

          _this.url = ""; // 错误信息地址

          _this.cbTime = ""; // 执行时间

          _this.async = ""; // 是否异步

          _this.status = ""; // 请求状态码

          _this.method = ""; // 请求类型

          _this.timing = ""; // 获取Performance的记录 有请求的详细数据
          // this.reportUrl = params.reportUrl //上报错误地址

          return _this;
        }
        /**
         * 记录错误信息
         */

        _createClass(RequestMonitor, [
          {
            key: "record",
            value: function record() {
              this.handleRecord(); // 延迟记录日志

              setTimeout(function () {
                _taskQueue.default.fire();
              }, 500);
            },
            /**
             * 处理记录日志
             */
          },
          {
            key: "handleRecord",
            value: function handleRecord() {
              try {
                var _U = encodeURIComponent(
                  window.__SERAPH_MONITOR__.SERAPH_URL ||
                    (0, _baseConfig.DEFAULT_URL)()
                ); // 过滤掉错误 上报地址

                if (
                  _U &&
                  this.url &&
                  this.url.toLowerCase().indexOf(_U.toLowerCase()) >= 0
                ) {
                  if (this.msg !== "")
                    console.error("统计错误接口异常", this.msg);
                  return;
                }

                var Info = this.handleInfo();
                (0, _console.default)(
                  "\n````````````````````` 请求信息 `````````````````````\n",
                  Info
                );

                if (
                  typeof window.__SERAPH_MONITOR__._OPTIONS.beforeSend ===
                  "function"
                ) {
                  if (!window.__SERAPH_MONITOR__._OPTIONS.beforeSend(Info)) {
                    return;
                  }
                } // 记录日志

                _taskQueue.default.add(Info);
              } catch (error) {
                console.error(error);
              }
            },
            /**
             * 处理错误信息
             */
          },
          {
            key: "handleInfo",
            value: function handleInfo() {
              var recordInfo = {};
              if (this.category) recordInfo.category = this.category; // 错误分类

              recordInfo.method = this.method; // 请求类型

              recordInfo.msg = this.msg; // 错误信息

              recordInfo.url = this.url; // 错误信息地址

              recordInfo.cbTime = this.cbTime; // 执行时间

              recordInfo.async = this.async; // 是否异步

              recordInfo.status = this.status; // 请求状态码

              recordInfo.timing = this.timing; // 获取Performance的记录 有请求的详细数据

              return recordInfo;
            },
          },
        ]);

        return RequestMonitor;
      })(_baseMonitor.default);

      var _default = RequestMonitor;
      exports.default = _default;

      /***/
    },

    /***/ "+ceO": /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      /* eslint-disable */
      // 引入文件名
      var FILE_NAME = "monitor.";
      var _default = {
        type: function type(obj) {
          return Object.prototype.toString
            .call(obj)
            .replace(/\[object\s|\]/g, "");
        },
        isFunction: function isFunction(func) {
          return this.type(func) === "Function";
        },
        isArray: function isArray(list) {
          return this.type(list) === "Array";
        },
        // 生成随机字符串
        randomID: function randomID(len, radix) {
          var chars =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
              ""
            );
          var uuid = [];
          var i;
          radix = radix || chars.length;

          if (len) {
            // Compact form
            for (i = 0; i < len; i++) {
              uuid[i] = chars[0 | (Math.random() * radix)];
            }
          } else {
            // rfc4122, version 4 form
            var r; // rfc4122 requires these characters

            uuid[8] = uuid[13] = uuid[18] = uuid[23];
            uuid[14] = "4"; // Fill in random data. At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5

            for (i = 0; i < 36; i++) {
              if (!uuid[i]) {
                r = 0 | (Math.random() * 16);
                uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
              }
            }
          }

          return uuid.join("").toLowerCase();
        },

        /*
         * 是否为null
         * @param {String} str
         */
        isNull: function isNull(str) {
          return str == undefined || str == "" || str == null;
        },

        /**
         * 判断目标对象 是否是指定类型
         * @param {目标对象} e
         * @param {是否和类型相等} t
         */
        judgeType: function judgeType(e, t) {
          return t === "Array" && Array.isArray
            ? Array.isArray(e)
            : Object.prototype.toString.call(e) === "[object ".concat(t, "]");
        },

        /**
         * 对象是否为空
         * @param {*} obj
         */
        objectIsNull: function objectIsNull(obj) {
          return this.jsonStringify(obj) === "{}";
        },

        /**
         * 是否是对象
         * @param {*} obj
         */
        isObject: function isObject(obj) {
          return this.type(obj) === "Object";
        },

        /**
         * 获取扩展信息
         */
        getExtendsInfo: function getExtendsInfo() {
          try {
            var ret = {};
            var extendsInfo = window.__SERAPH_MONITOR__._M_EXTENDS_INFO_ || {};
            var dynamicParams;

            if (this.isFunction(extendsInfo.getDynamic)) {
              dynamicParams = extendsInfo.getDynamic(); // 获取动态参数
            } // 判断动态方法返回的参数是否是对象

            if (this.isObject(dynamicParams)) {
              extendsInfo = _objectSpread(
                _objectSpread({}, extendsInfo),
                dynamicParams
              );
            } // 遍历扩展信息，排除动态方法

            for (var key in extendsInfo) {
              if (!this.isFunction(extendsInfo[key])) {
                // 排除获取动态方法
                ret[key] = extendsInfo[key];
              }
            }

            return ret;
          } catch (error) {
            console.error("call getExtendsInfo error", error);
            return {};
          }
        },

        /**
         * 判断是否是IE 并且低于IE10
         */
        getIELowVersions: function getIELowVersions() {
          if (
            navigator.appName == "Microsoft Internet Explorer" &&
            parseInt(
              navigator.appVersion
                .split(";")[1]
                .replace(/[ ]/g, "")
                .replace("MSIE", "")
            ) < 10
          ) {
            return true;
          }

          return false;
        },

        /**
         * 判断是否支持Performance
         */
        getPerformance: function getPerformance() {
          return !window.performance || !window.performance.getEntries;
        },

        /**
         * 获取Script Url地址
         */
        getScriptUrl: function getScriptUrl() {
          var scripts = document.getElementsByTagName("script");

          for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i];

            if (
              script &&
              script.getAttribute("src") &&
              script.getAttribute("src").indexOf(FILE_NAME) > -1
            ) {
              return script.getAttribute("src");
            }
          }

          return "";
        },

        /**
         * 获取tag路径中的参数
         * @param {参数名} attr
         */
        getScriptAttrParam: function getScriptAttrParam(attr) {
          var url = this.getScriptUrl() || "";
          return (url.match(
            new RegExp("(?:\\?|&)".concat(attr, "=(.*?)(?=&|$)"))
          ) || ["", null])[1];
        },

        /**
         * 获取SDK 版本号
         */
        getSDKVersions: function getSDKVersions() {
          var url = this.getScriptUrl() || "";

          var _v = url ? url.replace(/\?.*/gi, "").split("/") : [""];

          return (_v[_v.length - 1] || "").replace(/monitor\.|\.js/gi, "");
        },

        /**
         * 获取网络类型 先获取useragent 在获取connection
         */
        getNetworkType: function getNetworkType() {
          var nav = navigator;
          var ua = nav.userAgent; // 兼容处理

          var connection = nav.connection ||
            nav.mozConnection ||
            nav.webkitConnection || {
              // API not supported
              downlinkMax: Infinity,
            };
          var networkStr = ua.match(/NetType\/\w+/)
            ? ua.match(/NetType\/\w+/)[0]
            : "NetType/other";
          networkStr = networkStr.toLowerCase().replace("nettype/", "");
          var networkType;

          switch (networkStr) {
            case "wifi":
              networkType = "wifi";
              break;

            case "4g":
              networkType = "4g";
              break;

            case "3g":
              networkType = "3g";
              break;

            case "3gnet":
              networkType = "3g";
              break;

            case "2g":
              networkType = "2g";
              break;

            default:
              networkType = connection.type || connection.effectiveType;
          }

          return networkType;
        },
        jsonParse: function jsonParse(data) {
          try {
            return JSON.parse(data);
          } catch (error) {
            return {};
          }
        },
        jsonStringify: function jsonStringify(data) {
          try {
            return JSON.stringify(data);
          } catch (error) {
            return "{}";
          }
        },
      };
      exports.default = _default;

      /***/
    },

    /***/ "2k1W": /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _baseConfig = __webpack_require__("U6+W");

      var _baseMonitor = _interopRequireDefault(__webpack_require__("cBov"));

      var _taskQueue = _interopRequireDefault(__webpack_require__("Q6xx"));

      var _utils = _interopRequireDefault(__webpack_require__("+ceO"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /**
       * 监控基类
       */
      var ErrorMonitor = /*#__PURE__*/ (function (_BaseMonitor) {
        _inherits(ErrorMonitor, _BaseMonitor);

        var _super = _createSuper(ErrorMonitor);

        /**
         * 上报错误地址
         */
        function ErrorMonitor(params) {
          var _this;

          _classCallCheck(this, ErrorMonitor);

          _this = _super.call(this, params);
          _this.category = _baseConfig.ErrorCategoryEnum.UNKNOW_ERROR; // 错误类型

          _this.level = _baseConfig.ErrorLevelEnum.INFO; // 错误等级

          _this.msg = ""; // 错误信息

          _this.url = ""; // 错误信息地址

          _this.line = ""; // 行数

          _this.col = ""; // 列数

          _this.errorObj = ""; // 错误堆栈

          _this.type = ""; // 资源加载失败时上传标签

          return _this;
        }
        /**
         * 记录错误信息
         */

        _createClass(ErrorMonitor, [
          {
            key: "recordError",
            value: function recordError() {
              this.handleRecordError(); // 延迟记录日志

              setTimeout(function () {
                _taskQueue.default.fire();
              }, 500);
            },
            /**
             * 处理记录日志
             */
          },
          {
            key: "handleRecordError",
            value: function handleRecordError() {
              try {
                if (!this.msg) {
                  return;
                }

                var _U = encodeURIComponent(
                  window.__SERAPH_MONITOR__.SERAPH_URL ||
                    _baseConfig.DEFAULT_URL
                ); // 过滤掉错误 上报地址

                if (
                  _U &&
                  this.url &&
                  this.url.toLowerCase().indexOf(_U.toLowerCase()) >= 0
                ) {
                  console.error("统计错误接口异常", this.msg);
                  return;
                }

                var errorInfo = this.handleErrorInfo(); // Console('\n````````````````````` ' + this.category + ' `````````````````````\n', errorInfo)

                if (
                  typeof window.__SERAPH_MONITOR__._OPTIONS.beforeSend ===
                  "function"
                ) {
                  if (
                    !window.__SERAPH_MONITOR__._OPTIONS.beforeSend(errorInfo)
                  ) {
                    return;
                  }
                } // 记录日志

                _taskQueue.default.add(errorInfo);
              } catch (error) {
                console.error(error);
              }
            },
            /**
             * 处理错误信息
             */
          },
          {
            key: "handleErrorInfo",
            value: function handleErrorInfo() {
              var error = {
                msg: this.msg,
                // 错误消息
                url: this.url, // 报错的文件地址 有时在内存中报错所以这个url可能会没有
              }; // let txt = '日志信息: ' + this.msg + '.\r\n'
              // txt += 'url: ' + this.url + '.\r\n'

              switch (this.category) {
                case _baseConfig.ErrorCategoryEnum.JS_ERROR:
                  error.line = this.line; // 行号

                  error.col = this.col; // 错误列号
                  // txt += '错误行号: ' + this.line + ',\r\n'
                  // txt += '错误列号: ' + this.col + ',\r\n'
                  // 不上传堆栈信息错误
                  // if (this.errorObj && this.errorObj.stack) {
                  //   error.stack = this.errorObj.stack //错误堆栈信息
                  //   // txt += '错误栈: ' + this.errorObj.stack + ',\r\n'
                  // }

                  break;

                default: // error.other = JSON.stringify(this.errorObj)
                  // 其他错误 暂时吧错误信息加入到msg里面 逗号分隔
                  if (_utils.default.jsonStringify(this.errorObj) !== "{}")
                    error.msg =
                      error.msg === ""
                        ? ""
                        : ",".concat(
                            _utils.default.jsonStringify(this.errorObj)
                          );
                  // txt += '其他错误: ' + JSON.stringify(this.errorObj) + ',\r\n'

                  break;
              } // let deviceInfo = this.getDeviceInfo()
              // txt += '设备信息: ' + deviceInfo //设备信息

              var recordInfo = {};
              recordInfo.category = this.category; // 错误分类

              recordInfo.logType = this.level; // 错误级别

              recordInfo.logInfo = error; // 错误信息
              // 添加资源加载失败的 加载标签Tag

              if (this.type !== "") error.type = this.type; // 加载资源出错元素tag
              // recordInfo.device = deviceInfo //设备信息

              return recordInfo;
            },
          },
        ]);

        return ErrorMonitor;
      })(_baseMonitor.default);

      var _default = ErrorMonitor;
      exports.default = _default;

      /***/
    },

    /***/ "2xj7": /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      /* eslint-disable */
      var DeviceInfo = (function () {
        var root = typeof self !== "undefined" ? self : this;

        var _window = root || {}; // 变量库
        // var VariableLibrary = {
        //     navigator: typeof root.navigator != 'undefined' ? root.navigator : {},
        //     // 信息map
        //     infoMap: {
        //         engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
        //         browser: [
        //             'Safari',
        //             'Chrome',
        //             'Edge',
        //             'IE',
        //             'Firefox',
        //             'Firefox Focus',
        //             'Chromium',
        //             'Opera',
        //             'Vivaldi',
        //             'Yandex',
        //             'Arora',
        //             'Lunascape',
        //             'QupZilla',
        //             'Coc Coc',
        //             'Kindle',
        //             'Iceweasel',
        //             'Konqueror',
        //             'Iceape',
        //             'SeaMonkey',
        //             'Epiphany',
        //             '360',
        //             '360SE',
        //             '360EE',
        //             'UC',
        //             'QQBrowser',
        //             'QQ',
        //             'Baidu',
        //             'Maxthon',
        //             'Sogou',
        //             'LBBROWSER',
        //             '2345Explorer',
        //             'TheWorld',
        //             'XiaoMi',
        //             'Quark',
        //             'Qiyu',
        //             'Wechat',
        //             'Taobao',
        //             'Alipay',
        //             'Weibo',
        //             'Douban',
        //             'Suning',
        //             'iQiYi'
        //         ],
        //         os: [
        //             'Windows',
        //             'Linux',
        //             'Mac OS',
        //             'Android',
        //             'Ubuntu',
        //             'FreeBSD',
        //             'Debian',
        //             'iOS',
        //             'Windows Phone',
        //             'BlackBerry',
        //             'MeeGo',
        //             'Symbian',
        //             'Chrome OS',
        //             'WebOS'
        //         ],
        //         device: ['Mobile', 'Tablet', 'iPad']
        //     }
        // }
        // // 方法库
        // var MethodLibrary = (function() {
        //     return {
        //         // 获取匹配库
        //         // getMatchMap: function(u) {
        //         //     return {
        //         //         // 内核
        //         //         Trident: u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
        //         //         Presto: u.indexOf('Presto') > -1,
        //         //         WebKit: u.indexOf('AppleWebKit') > -1,
        //         //         Gecko: u.indexOf('Gecko/') > -1,
        //         //         // 浏览器
        //         //         Safari: u.indexOf('Safari') > -1,
        //         //         Chrome: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
        //         //         IE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
        //         //         Edge: u.indexOf('Edge') > -1,
        //         //         Firefox: u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
        //         //         'Firefox Focus': u.indexOf('Focus') > -1,
        //         //         Chromium: u.indexOf('Chromium') > -1,
        //         //         Opera: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
        //         //         Vivaldi: u.indexOf('Vivaldi') > -1,
        //         //         Yandex: u.indexOf('YaBrowser') > -1,
        //         //         Arora: u.indexOf('Arora') > -1,
        //         //         Lunascape: u.indexOf('Lunascape') > -1,
        //         //         QupZilla: u.indexOf('QupZilla') > -1,
        //         //         'Coc Coc': u.indexOf('coc_coc_browser') > -1,
        //         //         Kindle: u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
        //         //         Iceweasel: u.indexOf('Iceweasel') > -1,
        //         //         Konqueror: u.indexOf('Konqueror') > -1,
        //         //         Iceape: u.indexOf('Iceape') > -1,
        //         //         SeaMonkey: u.indexOf('SeaMonkey') > -1,
        //         //         Epiphany: u.indexOf('Epiphany') > -1,
        //         //         '360': u.indexOf('QihooBrowser') > -1 || u.indexOf('QHBrowser') > -1,
        //         //         '360EE': u.indexOf('360EE') > -1,
        //         //         '360SE': u.indexOf('360SE') > -1,
        //         //         UC: u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
        //         //         QQBrowser: u.indexOf('QQBrowser') > -1,
        //         //         QQ: u.indexOf('QQ/') > -1,
        //         //         Baidu: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
        //         //         Maxthon: u.indexOf('Maxthon') > -1,
        //         //         Sogou: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
        //         //         LBBROWSER: u.indexOf('LBBROWSER') > -1,
        //         //         '2345Explorer': u.indexOf('2345Explorer') > -1,
        //         //         TheWorld: u.indexOf('TheWorld') > -1,
        //         //         XiaoMi: u.indexOf('MiuiBrowser') > -1,
        //         //         Quark: u.indexOf('Quark') > -1,
        //         //         Qiyu: u.indexOf('Qiyu') > -1,
        //         //         Wechat: u.indexOf('MicroMessenger') > -1,
        //         //         Taobao: u.indexOf('AliApp(TB') > -1,
        //         //         Alipay: u.indexOf('AliApp(AP') > -1,
        //         //         Weibo: u.indexOf('Weibo') > -1,
        //         //         Douban: u.indexOf('com.douban.frodo') > -1,
        //         //         Suning: u.indexOf('SNEBUY-APP') > -1,
        //         //         iQiYi: u.indexOf('IqiyiApp') > -1,
        //         //         // 系统或平台
        //         //         Windows: u.indexOf('Windows') > -1,
        //         //         Linux: u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
        //         //         'Mac OS': u.indexOf('Macintosh') > -1,
        //         //         Android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
        //         //         Ubuntu: u.indexOf('Ubuntu') > -1,
        //         //         FreeBSD: u.indexOf('FreeBSD') > -1,
        //         //         Debian: u.indexOf('Debian') > -1,
        //         //         'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
        //         //         BlackBerry: u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
        //         //         MeeGo: u.indexOf('MeeGo') > -1,
        //         //         Symbian: u.indexOf('Symbian') > -1,
        //         //         iOS: u.indexOf('like Mac OS X') > -1,
        //         //         'Chrome OS': u.indexOf('CrOS') > -1,
        //         //         WebOS: u.indexOf('hpwOS') > -1,
        //         //         // 设备
        //         //         Mobile: u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
        //         //         Tablet: u.indexOf('Tablet') > -1 || u.indexOf('Nexus 7') > -1,
        //         //         iPad: u.indexOf('iPad') > -1
        //         //     }
        //         // },
        //         // 在信息map和匹配库中进行匹配
        //         // matchInfoMap: function(_this) {
        //         //     var u = VariableLibrary.navigator.userAgent || {}
        //         //     var match = MethodLibrary.getMatchMap(u)
        //         //     for (var s in VariableLibrary.infoMap) {
        //         //         for (var i = 0; i < VariableLibrary.infoMap[s].length; i++) {
        //         //             var value = VariableLibrary.infoMap[s][i]
        //         //             if (match[value]) {
        //         //                 _this[s] = value
        //         //             }
        //         //         }
        //         //     }
        //         // },
        //         // 获取当前操作系统
        //         // getOS: function() {
        //         //     var _this = this
        //         //     MethodLibrary.matchInfoMap(_this)
        //         //     return _this.os
        //         // },
        //         // 获取操作系统版本
        //         // getOSVersion: function() {
        //         //     var _this = this
        //         //     var u = VariableLibrary.navigator.userAgent || {}
        //         //     _this.osVersion = ''
        //         //     // 系统版本信息
        //         //     var osVersion = {
        //         //         Windows: function() {
        //         //             var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1')
        //         //             var oldWindowsVersionMap = {
        //         //                 '6.4': '10',
        //         //                 '6.3': '8.1',
        //         //                 '6.2': '8',
        //         //                 '6.1': '7',
        //         //                 '6.0': 'Vista',
        //         //                 '5.2': 'XP',
        //         //                 '5.1': 'XP',
        //         //                 '5.0': '2000'
        //         //             }
        //         //             return oldWindowsVersionMap[v] || v
        //         //         },
        //         //         Android: function() {
        //         //             return u.replace(/^.*Android ([\d.]+);.*$/, '$1')
        //         //         },
        //         //         iOS: function() {
        //         //             return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.')
        //         //         },
        //         //         Debian: function() {
        //         //             return u.replace(/^.*Debian\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         'Windows Phone': function() {
        //         //             return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2')
        //         //         },
        //         //         'Mac OS': function() {
        //         //             return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.')
        //         //         },
        //         //         WebOS: function() {
        //         //             return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1')
        //         //         }
        //         //     }
        //         //     if (osVersion[_this.os]) {
        //         //         _this.osVersion = osVersion[_this.os]()
        //         //         if (_this.osVersion == u) {
        //         //             _this.osVersion = ''
        //         //         }
        //         //     }
        //         //     return _this.osVersion
        //         // },
        //         // 获取横竖屏状态
        //         // getOrientationStatu: function() {
        //         //     var orientationStatus = ''
        //         //     var orientation = window.matchMedia('(orientation: portrait)')
        //         //     if (orientation.matches) {
        //         //         orientationStatus = '竖屏'
        //         //     } else {
        //         //         orientationStatus = '横屏'
        //         //     }
        //         //     return orientationStatus
        //         // },
        //         // 获取设备类型
        //         // getDeviceType: function() {
        //         //     var _this = this
        //         //     _this.device = 'PC'
        //         //     MethodLibrary.matchInfoMap(_this)
        //         //     return _this.device
        //         // },
        //         // 获取网络状态
        //         // getNetwork: function() {
        //         //     var netWork = navigator && navigator.connection && navigator.connection.effectiveType
        //         //     return netWork
        //         // },
        //         // 获取当前语言
        //         // getLanguage: function() {
        //         //     var _this = this
        //         //     _this.language = (function() {
        //         //         var language = VariableLibrary.navigator.browserLanguage || VariableLibrary.navigator.language
        //         //         var arr = language.split('-')
        //         //         if (arr[1]) {
        //         //             arr[1] = arr[1].toUpperCase()
        //         //         }
        //         //         return arr.join('_')
        //         //     })()
        //         //     return _this.language
        //         // },
        //         // 生成浏览器指纹
        //         createFingerprint: function(domain) {
        //             var fingerprint
        //             function bin2hex(s) {
        //                 var i,
        //                     l,
        //                     n,
        //                     o = ''
        //                 s += ''
        //                 for (i = 0, l = s.length; i < l; i++) {
        //                     n = s.charCodeAt(i).toString(16)
        //                     o += n.length < 2 ? '0' + n : n
        //                 }
        //                 return o
        //             }
        //             var canvas = document.createElement('canvas')
        //             var ctx = canvas.getContext('2d')
        //             var txt = domain || window.location.host
        //             ctx.textBaseline = 'top'
        //             ctx.font = "14px 'Arial'"
        //             ctx.textBaseline = 'tencent'
        //             ctx.fillStyle = '#f60'
        //             ctx.fillRect(125, 1, 62, 20)
        //             ctx.fillStyle = '#069'
        //             ctx.fillText(txt, 2, 15)
        //             ctx.fillStyle = 'rgba(102, 204, 0, 0.7)'
        //             ctx.fillText(txt, 4, 17)
        //             var b64 = canvas.toDataURL().replace('data:image/png;base64,', '')
        //             var bin = atob(b64)
        //             var crc = bin2hex(bin.slice(-16, -12))
        //             fingerprint = crc
        //             return fingerprint
        //         }
        //         // 浏览器信息
        //         // getBrowserInfo: function() {
        //         //     var _this = this
        //         //     MethodLibrary.matchInfoMap(_this)
        //         //     var u = VariableLibrary.navigator.userAgent || {}
        //         //     var _mime = function(option, value) {
        //         //         var mimeTypes = VariableLibrary.navigator.mimeTypes
        //         //         for (var key in mimeTypes) {
        //         //             if (mimeTypes[key][option] == value) {
        //         //                 return true
        //         //             }
        //         //         }
        //         //         return false
        //         //     }
        //         //     var match = MethodLibrary.getMatchMap(u)
        //         //     var is360 = false
        //         //     if (_window.chrome) {
        //         //         var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1')
        //         //         if (chrome_vision > 36 && _window.showModalDialog) {
        //         //             is360 = true
        //         //         } else if (chrome_vision > 45) {
        //         //             is360 = _mime('type', 'application/vnd.chromium.remoting-viewer')
        //         //         }
        //         //     }
        //         //     if (match['Baidu'] && match['Opera']) {
        //         //         match['Baidu'] = false
        //         //     }
        //         //     if (match['Mobile']) {
        //         //         match['Mobile'] = !(u.indexOf('iPad') > -1)
        //         //     }
        //         //     if (is360) {
        //         //         if (_mime('type', 'application/gameplugin')) {
        //         //             match['360SE'] = true
        //         //         } else if (
        //         //             VariableLibrary.navigator &&
        //         //             typeof VariableLibrary.navigator['connection']['saveData'] == 'undefined'
        //         //         ) {
        //         //             match['360SE'] = true
        //         //         } else {
        //         //             match['360EE'] = true
        //         //         }
        //         //     }
        //         //     if (match['IE'] || match['Edge']) {
        //         //         var navigator_top = window.screenTop - window.screenY
        //         //         switch (navigator_top) {
        //         //             case 71: // 无收藏栏,贴边
        //         //                 break
        //         //             case 74: // 无收藏栏,非贴边
        //         //                 break
        //         //             case 99: // 有收藏栏,贴边
        //         //                 break
        //         //             case 102: // 有收藏栏,非贴边
        //         //                 match['360EE'] = true
        //         //                 break
        //         //             case 75: // 无收藏栏,贴边
        //         //                 break
        //         //             case 74: // 无收藏栏,非贴边
        //         //                 break
        //         //             case 105: // 有收藏栏,贴边
        //         //                 break
        //         //             case 104: // 有收藏栏,非贴边
        //         //                 match['360SE'] = true
        //         //                 break
        //         //             default:
        //         //                 break
        //         //         }
        //         //     }
        //         //     var browerVersionMap = {
        //         //         Safari: function() {
        //         //             return u.replace(/^.*Version\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Chrome: function() {
        //         //             return u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         IE: function() {
        //         //             return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1')
        //         //         },
        //         //         Edge: function() {
        //         //             return u.replace(/^.*Edge\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Firefox: function() {
        //         //             return u.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         'Firefox Focus': function() {
        //         //             return u.replace(/^.*Focus\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Chromium: function() {
        //         //             return u.replace(/^.*Chromium\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Opera: function() {
        //         //             return u.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Vivaldi: function() {
        //         //             return u.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Yandex: function() {
        //         //             return u.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Arora: function() {
        //         //             return u.replace(/^.*Arora\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Lunascape: function() {
        //         //             return u.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1')
        //         //         },
        //         //         QupZilla: function() {
        //         //             return u.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1')
        //         //         },
        //         //         'Coc Coc': function() {
        //         //             return u.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Kindle: function() {
        //         //             return u.replace(/^.*Version\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Iceweasel: function() {
        //         //             return u.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Konqueror: function() {
        //         //             return u.replace(/^.*Konqueror\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Iceape: function() {
        //         //             return u.replace(/^.*Iceape\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         SeaMonkey: function() {
        //         //             return u.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Epiphany: function() {
        //         //             return u.replace(/^.*Epiphany\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         '360': function() {
        //         //             return u.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         '360SE': function() {
        //         //             var hash = {
        //         //                 '63': '10.0',
        //         //                 '55': '9.1',
        //         //                 '45': '8.1',
        //         //                 '42': '8.0',
        //         //                 '31': '7.0',
        //         //                 '21': '6.3'
        //         //             }
        //         //             var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1')
        //         //             return hash[chrome_vision] || ''
        //         //         },
        //         //         '360EE': function() {
        //         //             var hash = {
        //         //                 '69': '11.0',
        //         //                 '63': '9.5',
        //         //                 '55': '9.0',
        //         //                 '50': '8.7',
        //         //                 '30': '7.5'
        //         //             }
        //         //             var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1')
        //         //             return hash[chrome_vision] || ''
        //         //         },
        //         //         Maxthon: function() {
        //         //             return u.replace(/^.*Maxthon\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         QQBrowser: function() {
        //         //             return u.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         QQ: function() {
        //         //             return u.replace(/^.*QQ\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Baidu: function() {
        //         //             return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1')
        //         //         },
        //         //         UC: function() {
        //         //             return u.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Sogou: function() {
        //         //             return u.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         LBBROWSER: function() {
        //         //             var hash = {
        //         //                 '57': '6.5',
        //         //                 '49': '6.0',
        //         //                 '46': '5.9',
        //         //                 '42': '5.3',
        //         //                 '39': '5.2',
        //         //                 '34': '5.0',
        //         //                 '29': '4.5',
        //         //                 '21': '4.0'
        //         //             }
        //         //             var chrome_vision = navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, '$1')
        //         //             return hash[chrome_vision] || ''
        //         //         },
        //         //         '2345Explorer': function() {
        //         //             return u.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         TheWorld: function() {
        //         //             return u.replace(/^.*TheWorld ([\d.]+).*$/, '$1')
        //         //         },
        //         //         XiaoMi: function() {
        //         //             return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Quark: function() {
        //         //             return u.replace(/^.*Quark\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Qiyu: function() {
        //         //             return u.replace(/^.*Qiyu\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Wechat: function() {
        //         //             return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Taobao: function() {
        //         //             return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Alipay: function() {
        //         //             return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Weibo: function() {
        //         //             return u.replace(/^.*weibo__([\d.]+).*$/, '$1')
        //         //         },
        //         //         Douban: function() {
        //         //             return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1')
        //         //         },
        //         //         Suning: function() {
        //         //             return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1')
        //         //         },
        //         //         iQiYi: function() {
        //         //             return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1')
        //         //         }
        //         //     }
        //         //     _this.browserVersion = ''
        //         //     if (browerVersionMap[_this.browser]) {
        //         //         _this.browserVersion = browerVersionMap[_this.browser]()
        //         //         if (_this.browserVersion == u) {
        //         //             _this.browserVersion = ''
        //         //         }
        //         //     }
        //         //     if (_this.browser == 'Edge') {
        //         //         _this.engine = 'EdgeHTML'
        //         //     }
        //         //     if (_this.browser == 'Chrome' && parseInt(_this.browserVersion) > 27) {
        //         //         _this.engine = 'Blink'
        //         //     }
        //         //     if (_this.browser == 'Opera' && parseInt(_this.browserVersion) > 12) {
        //         //         _this.engine = 'Blink'
        //         //     }
        //         //     if (_this.browser == 'Yandex') {
        //         //         _this.engine = 'Blink'
        //         //     }
        //         //     return _this.browser + '（版本: ' + _this.browserVersion + '&nbsp;&nbsp;内核: ' + _this.engine + '）'
        //         // }
        //     }
        // })()
        // 逻辑层
        // var LogicLibrary = (function() {
        //     return {
        //         DeviceInfoObj: function(params) {
        //             params = params || { domain: '' }
        //             var info = {
        //                 // deviceType: MethodLibrary.getDeviceType(), // 设备类型
        //                 // OS: MethodLibrary.getOS(), // 操作系统
        //                 // OSVersion: MethodLibrary.getOSVersion(), // 操作系统版本
        //                 sh: _window.screen.height, // 屏幕高
        //                 sw: _window.screen.width // 屏幕宽
        //                 // language: MethodLibrary.getLanguage(), // 当前使用的语言-国家
        //                 // netWork: MethodLibrary.getNetwork(), // 联网类型
        //                 // orientation: MethodLibrary.getOrientationStatu(), // 横竖屏
        //                 // browserInfo: MethodLibrary.getBrowserInfo(), // 浏览器信息
        //                 // fingerprint: MethodLibrary.createFingerprint(params.domain) // 浏览器指纹
        //                 // userAgent: VariableLibrary.navigator.userAgent // 包含 appCodeName,appName,appVersion,language,platform 等
        //             }
        //             if (!params.info || params.info.length == 0) {
        //                 return info
        //             }
        //             var infoTemp = {}
        //             for (var i in info) {
        //                 params.info.forEach(function(item) {
        //                     if (item.toLowerCase() == i.toLowerCase()) {
        //                         item = i
        //                         infoTemp[item] = info[item]
        //                     }
        //                 })
        //             }
        //             return infoTemp
        //         }
        //     }
        // })()
        // 对外暴露方法

        return {
          getDeviceInfo: function getDeviceInfo(params) {
            return {
              sh: _window.screen.height,
              // 屏幕高
              sw: _window.screen.width, // 屏幕宽
            }; // return LogicLibrary.DeviceInfoObj(params)
          },
        };
      })();

      var _default = DeviceInfo;
      exports.default = _default;

      /***/
    },

    /***/ "85Np": /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _baseConfig = __webpack_require__("U6+W");

      var _utils = _interopRequireDefault(__webpack_require__("+ceO"));

      var _console = _interopRequireDefault(__webpack_require__("jTJs"));

      var _version = _interopRequireDefault(__webpack_require__("o29C"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      /**
       * 数据持久化
       */
      var API = /*#__PURE__*/ (function () {
        function API() {
          _classCallCheck(this, API);

          this.url =
            window.__SERAPH_MONITOR__.SERAPH_URL ||
            (0, _baseConfig.DEFAULT_URL)();
        }
        /**
         * 上报信息 （默认方式）
         */

        _createClass(API, [
          {
            key: "report",
            value: function report(data) {
              if (!this.checkUrl(this.url)) {
                console.error("上报信息url地址格式不正确,url=", this.url);
                return;
              }

              (0, _console.default)(
                "\u4E0A\u62A5\u5730\u5740\uFF1A".concat(this.url)
              );
              this.sendInfo(data);
            }, // 设置单页ID 后台需要区分多条数据的关联性 每个页面id 都不同
          },
          {
            key: "getSinglePageId",
            value: function getSinglePageId() {
              if (!window.__SERAPH_MONITOR__._SINGLE_ID_)
                window.__SERAPH_MONITOR__._SINGLE_ID_ =
                  _utils.default.randomID();
              return window.__SERAPH_MONITOR__._SINGLE_ID_;
            }, // 扩展一些固定数据 比如url 和 seraphId等
          },
          {
            key: "extendData",
            value: function extendData(data) {
              var siteInfo = {
                source: window.__SERAPH_MONITOR__._SOURCE_ || "H5",
                env: window.__SERAPH_MONITOR__._ENV_ || "prd",
                jsSdkVersion: _version.default.version,
                url: encodeURIComponent(window.location.href),
                seraphId: window.__SERAPH_MONITOR__._SITE_ID_ || "",
                // 获取全局的站点ID
                mark: this.getSinglePageId(),
                // 页面ID标识
                network: _utils.default.getNetworkType(),
                userAgent: window.navigator.userAgent,
              };

              var _data = _objectSpread(_objectSpread({}, siteInfo), data);

              if (
                _utils.default.isObject(_utils.default.getExtendsInfo()) &&
                _utils.default.jsonStringify(
                  _utils.default.getExtendsInfo()
                ) !== "{}"
              )
                _data.extends = _utils.default.getExtendsInfo();
              (0, _console.default)("report data =", _data);
              return _data;
            },
            /**
             * 发送消息
             */
          },
          {
            key: "sendInfo",
            value: function sendInfo(data) {
              try {
                var xhr = window.XMLHttpRequest
                  ? new XMLHttpRequest()
                  : new ActiveXObject("Microsoft.XMLHTTP");
                xhr.open("POST", this.url, true); // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                xhr.setRequestHeader("Content-Type", "application/json");
                if (_utils.default.isObject(data))
                  xhr.send(_utils.default.jsonStringify(this.extendData(data)));
                else console.error("数据发送格式有误", data);
              } catch (error) {
                console.error(error);
              }
            },
            /**
             * 通过img方式上报信息
             */
          },
          {
            key: "reportByImg",
            value: function reportByImg(data) {
              if (!this.checkUrl(this.url)) {
                console.error("上报信息url地址格式不正确,url=", this.url);
                return;
              }

              try {
                var img = new Image();
                img.src = ""
                  .concat(this.url, "?v=")
                  .concat(new Date().getTime(), "&")
                  .concat(this.formatParams(data));
              } catch (error) {
                console.error(error);
              }
            },
            /*
             *格式化参数
             */
          },
          {
            key: "formatParams",
            value: function formatParams(data) {
              var arr = [];

              for (var name in data) {
                arr.push(
                  ""
                    .concat(encodeURIComponent(name), "=")
                    .concat(encodeURIComponent(data[name]))
                );
              }

              return arr.join("&");
            },
            /**
             * 检测URL
             */
          },
          {
            key: "checkUrl",
            value: function checkUrl(url) {
              if (!url) {
                return false;
              }

              var urlRule = /^[hH][tT][tT][pP]([sS]?):\/\//;
              return urlRule.test(url);
            },
          },
        ]);

        return API;
      })();

      var _default = API;
      exports.default = _default;

      /***/
    },

    /***/ B9ep: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _requestMonitor = _interopRequireDefault(__webpack_require__("+UKG"));

      var _baseConfig = __webpack_require__("U6+W");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      var realXhr = "RealXMLHttpRequest";
      /**
       * 参考 https://github.com/wendux/Ajax-hook
       */

      var XMLHttpRequestHook = /*#__PURE__*/ (function (_RequestMonitor) {
        _inherits(XMLHttpRequestHook, _RequestMonitor);

        var _super = _createSuper(XMLHttpRequestHook);

        function XMLHttpRequestHook(params) {
          var _this;

          _classCallCheck(this, XMLHttpRequestHook);

          _this = _super.call(this, params);

          var requestLoadComplete = _this.requestLoadComplete.bind(
            _assertThisInitialized(_this)
          );

          _this.proxy = {
            open: function open(arg, xhr) {
              xhr._xflow_ = arg.concat([new Date().getTime()]);
            },
            onload: requestLoadComplete,
            onreadystatechange: requestLoadComplete,
            ontimeout: _this.requestTimeOut.bind(_assertThisInitialized(_this)),
            send: function send() {
              var f = function f() {}; // 用户没重写onload 或者jquery onreadystatechange 就不会触发回调
              // 所以这里加一个默认的onload 去触发set

              if (!this.onload && !this.onreadystatechange) this.onload = f;
              if (!this.ontimeout) this.ontimeout = f;
              if (!this.onerror && window.__SERAPH_MONITOR__._ajaxCross_)
                this.onerror = f;
            },
          }; // 开启收集ajax 跨域、连接关闭等错误信息

          if (window.__SERAPH_MONITOR__._ajaxCross_ == true) {
            _this.proxy.onerror = _this.requestError.bind(
              _assertThisInitialized(_this)
            ); // :ERR_CONNECTION_REFUSED 引起的跨域或者链接关闭等等异常
          }

          var xhr = new window[realXhr](); // We shouldn't hook XMLHttpRequest.prototype because we can't
          // guarantee that all attributes are on the prototype。
          // Instead, hooking XMLHttpRequest instance can avoid this problem.

          for (var attr in xhr) {
            var type = "";

            try {
              type = _typeof(xhr[attr]); // May cause exception on some browser
            } catch (e) {}

            if (type === "function") {
              // hook methods of xhr, such as `open`、`send` ...
              _this[attr] = _this.hookFunction(attr);
            } else {
              Object.defineProperty(_assertThisInitialized(_this), attr, {
                get: _this.getterFactory(attr),
                set: _this.setterFactory(attr),
                enumerable: true,
              });
            }
          }

          _this.xhr = xhr;
          return _this;
        } // Generate getter for attributes of xhr

        _createClass(XMLHttpRequestHook, [
          {
            key: "getterFactory",
            value: function getterFactory(attr) {
              return function () {
                var v = this.hasOwnProperty("".concat(attr, "_"))
                  ? this["".concat(attr, "_")]
                  : this.xhr[attr];
                var attrGetterHook = (this.proxy[attr] || {}).getter;
                return (attrGetterHook && attrGetterHook(v, this)) || v;
              };
            }, // Generate setter for attributes of xhr; by this we have an opportunity
            // to hook event callbacks （eg: `onload`） of xhr;
          },
          {
            key: "setterFactory",
            value: function setterFactory(attr) {
              return function (v) {
                var xhr = this.xhr;
                var that = this;
                var hook = this.proxy[attr];

                if (typeof hook === "function") {
                  // hook  event callbacks such as `onload`、`onreadystatechange`...
                  xhr[attr] = function () {
                    that.proxy[attr](that) || v.apply(xhr, arguments);
                  };
                } else {
                  // If the attribute isn't writable, generate this.proxy attribute
                  var attrSetterHook = (hook || {}).setter;
                  v = (attrSetterHook && attrSetterHook(v, that)) || v;

                  try {
                    xhr[attr] = v;
                  } catch (e) {
                    this["".concat(attr, "_")] = v;
                  }
                }
              };
            }, // Hook methods of xhr.
          },
          {
            key: "hookFunction",
            value: function hookFunction(fun) {
              return function () {
                try {
                  var args = [].slice.call(arguments);

                  if (
                    this.proxy[fun] &&
                    this.proxy[fun].call(this, args, this.xhr)
                  ) {
                    return;
                  }

                  return this.xhr[fun].apply(this.xhr, args);
                } catch (e) {
                  console.log(e);
                }
              };
            }, // 错误处理
          },
          {
            key: "requestError",
            value: function requestError(rsp) {
              var _this2 = this;

              var xhr = rsp.xhr || rsp.target;

              if (this.isValidXhr(xhr)) {
                setTimeout(function () {
                  _this2.formatData(xhr, "ERR_CONNECTION_REFUSED");
                }, 125);
              }
            }, // 请求超时
          },
          {
            key: "requestTimeOut",
            value: function requestTimeOut(rsp) {
              var _this3 = this;

              var xhr = rsp.xhr || rsp.target;

              if (this.isValidXhr(xhr)) {
                setTimeout(function () {
                  _this3.formatData(xhr, "timeout");
                }, 125);
              }
            },
            /** 计算ajax执行时间 */
          },
          {
            key: "requestLoadComplete",
            value: function requestLoadComplete(rsp) {
              var _this4 = this;

              var xhr = rsp.xhr || rsp.target; // 如果xhr 不为数组 则代表为注入成功

              if (xhr.status && this.isValidXhr(xhr)) {
                setTimeout(function () {
                  _this4.formatData(xhr, "");
                }, 125);
              }
            },
          },
          {
            key: "isValidXhr",
            value: function isValidXhr(xhr) {
              return (
                xhr.readyState == 4 && xhr._xflow_ && Array.isArray(xhr._xflow_)
              );
            }, // 格式化数据
          },
          {
            key: "formatData",
            value: function formatData(xhr, msg) {
              var _req = xhr._xflow_;

              var _url = encodeURIComponent(_req[1] || "");

              if (_url.indexOf(".css") >= 0) return; // 在IE中CSS也会进入到这里 做一次兼容处理
              // cbTime 是根据开始时间 和结束时间相减 _req数组最后一个为结束时间

              this.category = _baseConfig.ResourceTypeEnum.AJAX; // 资源类型

              this.method = _req[0];
              this.url = _url;
              this.async = _req[2] == true || _req[2] == false ? _req[2] : true; // 设置默认为true 可能async 为空的情况_xflow_length 为3

              this.status = xhr.status;
              this.msg = msg;
              this.cbTime = new Date().getTime() - _req[_req.length - 1]; // 遍历 找出最后的timing

              this.timing = this.findResourceTiming2(_url, "xmlhttprequest"); // js edge performance preflight
              // 如果未查找到 则查看preflight 因为在Edge浏览器发现 跨域的get请求 initiatorType =preflight

              if (!this.timing.name) {
                this.timing = this.findResourceTiming2(_url, "preflight");
              }

              this.record();
            },
          },
        ]);

        return XMLHttpRequestHook;
      })(_requestMonitor.default);

      var _default = XMLHttpRequestHook;
      exports.default = _default;

      /***/
    },

    /***/ CfyR: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _errorMonitor = _interopRequireDefault(__webpack_require__("2k1W"));

      var _baseConfig = __webpack_require__("U6+W");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /**
       * 捕获未处理的Promise异常
       */
      var PromiseError = /*#__PURE__*/ (function (_ErrorMonitor) {
        _inherits(PromiseError, _ErrorMonitor);

        var _super = _createSuper(PromiseError);

        function PromiseError(params) {
          _classCallCheck(this, PromiseError);

          return _super.call(this, params);
        }
        /**
         * 处理错误
         */

        _createClass(PromiseError, [
          {
            key: "handleError",
            value: function handleError() {
              var _this = this;

              window.addEventListener(
                "unhandledrejection",
                function (event) {
                  try {
                    if (!event || !event.reason) {
                      return;
                    } // 判断当前被捕获的异常url，是否是异常处理url，防止死循环

                    if (event.reason.config && event.reason.config.url) {
                      _this.url = event.reason.config.url;
                    }

                    _this.level = _baseConfig.ErrorLevelEnum.WARN;
                    _this.category =
                      _baseConfig.ErrorCategoryEnum.PROMISE_ERROR;
                    _this.msg = event.reason;

                    _this.recordError();
                  } catch (error) {
                    console.error(error);
                  }
                },
                true
              );
            },
          },
        ]);

        return PromiseError;
      })(_errorMonitor.default);

      var _default = PromiseError;
      exports.default = _default;

      /***/
    },

    /***/ IbN0: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _errorMonitor = _interopRequireDefault(__webpack_require__("2k1W"));

      var _baseConfig = __webpack_require__("U6+W");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _unsupportedIterableToArray(arr) ||
          _nonIterableSpread()
        );
      }

      function _nonIterableSpread() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (
          n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (
          (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
          iter["@@iterator"] != null
        )
          return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /**
       * console.error异常
       */
      var ConsoleError = /*#__PURE__*/ (function (_ErrorMonitor) {
        _inherits(ConsoleError, _ErrorMonitor);

        var _super = _createSuper(ConsoleError);

        function ConsoleError(params) {
          _classCallCheck(this, ConsoleError);

          return _super.call(this, params);
        }
        /**
         * 处理console事件
         */

        _createClass(ConsoleError, [
          {
            key: "handleError",
            value: function handleError() {
              this.registerInfo();
              this.registerWarn();
              this.registerError();
            },
            /**
             * 处理信息
             */
          },
          {
            key: "registerInfo",
            value: function registerInfo() {
              var t = this;

              console.tInfo = function () {
                t.handleLog(
                  _baseConfig.ErrorLevelEnum.INFO,
                  _baseConfig.ErrorCategoryEnum.CONSOLE_INFO,
                  arguments
                );
              };
            },
            /**
             * 处理警告
             */
          },
          {
            key: "registerWarn",
            value: function registerWarn() {
              var t = this;

              console.tWarn = function () {
                t.handleLog(
                  _baseConfig.ErrorLevelEnum.WARN,
                  _baseConfig.ErrorCategoryEnum.CONSOLE_WARN,
                  arguments
                );
              };
            },
            /**
             * 处理错误
             */
          },
          {
            key: "registerError",
            value: function registerError() {
              var t = this;

              console.tError = function () {
                t.handleLog(
                  _baseConfig.ErrorLevelEnum.ERROR,
                  _baseConfig.ErrorCategoryEnum.CONSOLE_ERROR,
                  arguments
                );
              };
            },
            /**
             * 处理日志
             */
          },
          {
            key: "handleLog",
            value: function handleLog(level, category, args) {
              try {
                this.level = level;

                var params = _toConsumableArray(args);

                this.msg = params.join("\r\n"); // 换行符分割

                this.url = location.href; // 当前地址

                this.category = category;
                this.recordError();
              } catch (error) {
                console.error("console统计错误异常", level, error);
              }
            },
          },
        ]);

        return ConsoleError;
      })(_errorMonitor.default);
      /**
       * 初始化console事件
       */

      (function () {
        // 创建空console对象，避免JS报错
        if (!window.console) {
          window.console = {};
        }

        var funcs = ["tInfo", "tWarn", "tError"];
        funcs.forEach(function (func, index) {
          if (!console[func]) {
            console[func] = function () {};
          }
        });
      })();

      var _default = ConsoleError;
      exports.default = _default;

      /***/
    },

    /***/ K6aS: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _performance = _interopRequireDefault(__webpack_require__("pbIe"));

      var _device = _interopRequireDefault(__webpack_require__("NimY"));

      var _api = _interopRequireDefault(__webpack_require__("85Np"));

      var _stampShake = __webpack_require__("Q2/a");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      var MonitorPerformance = /*#__PURE__*/ (function () {
        function MonitorPerformance() {
          _classCallCheck(this, MonitorPerformance);

          this.isPage = true; // 是否上报页面性能数据

          this.isResource = true; // 是否上报页面资源数据

          this.outTime = 100;
          this.sendTimer = null; // 延时发送句柄

          this.config = {
            resource: [],
            // 资源列表
            timing: {}, // 页面性能列表
          };

          if (typeof performance.setResourceTimingBufferSize === "function") {
            performance.setResourceTimingBufferSize(500);
          }

          this.bindLoadEvent(); // 绑定事件
        }
        /**
         * 记录页面信息
         * @param {*} params  {siteId ：页面标示,url ：上报地址}
         */

        _createClass(MonitorPerformance, [
          {
            key: "record",
            value: function record() {
              var _this = this;

              clearInterval(this.sendTimer); // 避免多次调用

              this.sendTimer = setTimeout(function () {
                if (_this.isPage) {
                  _this.config.timing = _performance.default.getTiming();
                }

                if (_this.isResource) {
                  _this.config.resource = _performance.default.getEntries();
                }

                var result = {
                  timing: _this.config.timing,
                  resource: _this.config.resource,
                  device: _this.getDeviceInfo(),
                };

                if (
                  typeof window.__SERAPH_MONITOR__._OPTIONS.beforeSend ===
                  "function"
                ) {
                  if (!window.__SERAPH_MONITOR__._OPTIONS.beforeSend(result)) {
                    return;
                  }
                }

                // 发送监控数据
                new _api.default().report(result);

                _this.clearPerformance();
              }, this.outTime);
            },
            /**
             * 绑定load事件触发后再次上送性能数据
             */
          },
          {
            key: "bindLoadEvent",
            value: function bindLoadEvent() {
              var that = this;

              if (document.readyState === "complete") {
                setTimeout(function () {
                  that.record();
                }, 0);
              } else {
                window.addEventListener("load", function () {
                  that.record();
                });
              }
            },
            /**
             * 获取设备信息
             */
          },
          {
            key: "getDeviceInfo",
            value: function getDeviceInfo() {
              try {
                var deviceInfo = _device.default.getDeviceInfo();

                return deviceInfo; // return JSON.stringify(deviceInfo);
              } catch (error) {
                console.error(error);
                return "";
              }
            }, //   randomString(len) {
            //     len = len || 10
            //     var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
            //     var maxPos = $chars.length
            //     var pwd = ''
            //     for (let i = 0; i < len; i++) {
            //       pwd = pwd + $chars.charAt(Math.floor(Math.random() * maxPos))
            //     }
            //     return pwd + new Date().getTime()
            //   }
            //   /**
            //    * 获得markpage
            //    */
            //   markUser() {
            //     let psMarkUser = sessionStorage.getItem('ps_markUser') || ''
            //     if (!psMarkUser) {
            //       psMarkUser = this.randomString()
            //       sessionStorage.setItem('ps_markUser', psMarkUser)
            //     }
            //     return psMarkUser
            //   }
          },
          {
            key: "clearPerformance",
            value: function clearPerformance() {
              if (
                window.performance &&
                window.performance.clearResourceTimings
              ) {
                console.log("clear resource timings");
                performance.clearResourceTimings();
                this.config.timing = {};
                this.config.resource = "";
              }
            },
          },
        ]);

        return MonitorPerformance;
      })();

      var _default = MonitorPerformance;
      exports.default = _default;

      /***/
    },

    /***/ NimY: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _device = _interopRequireDefault(__webpack_require__("2xj7"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var _default = _device.default;
      exports.default = _default;

      /***/
    },

    /***/ "Q2/a": /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.StampShakeTime = StampShakeTime;
      exports.StopStampShakeTime = StopStampShakeTime;
      exports.checkTime = checkTime;
      exports.getStampTime = getStampTime;
      exports.removeStampTime = removeStampTime;
      // 引入文件名
      var _SERAPH_TIMING_ = "__SERAPH_TIMING__";
      var storage = window.sessionStorage;
      var now;
      var then = Date.now();
      var interval = 1000 * 10;
      var delta;
      var run = true; // 移除标记时间

      function removeStampTime() {
        window.__SERAPH_MONITOR__.__SERAPH_TIMING__ = null;
        storage.removeItem(_SERAPH_TIMING_);
      } // 写入标记时间

      function setStampTime(time) {
        storage.setItem(_SERAPH_TIMING_, time || Date.now());
      } // 获取标记时间

      function getStampTime() {
        return storage.getItem(_SERAPH_TIMING_);
      } // 对比 及更新time

      function checkTime() {
        var timing = getStampTime();

        if (!timing) {
          setStampTime();
          return;
        }

        var s = Date.now() - timing - 3000; // 如果时间大于差值则代表空白时间

        if (s > interval) {
          window.__SERAPH_MONITOR__.__SERAPH_TIMING__ = s;
          return s;
        }

        setStampTime();
        return 0;
      } // 第一次进入移除
      // removeStampTime()
      // 标记意外时间 需load后 停止

      function StampShakeTime() {
        try {
          // 兼容
          window.requestAnimationFrame =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;
          if (!run) return; // 停止轮询

          if (window.requestAnimationFrame) {
            requestAnimationFrame(StampShakeTime);
            now = Date.now();
            delta = now - then;

            if (delta > interval) {
              // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
              then = now - (delta % interval);
              checkTime();
            }
          } else {
            setTimeout(StampShakeTime, interval);
            checkTime();
          }
        } catch (e) {
          console.error(e);
        }
      } // 停止监听

      function StopStampShakeTime() {
        run = false;
      }

      /***/
    },

    /***/ Q6xx: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _api = _interopRequireDefault(__webpack_require__("85Np"));

      var _baseConfig = __webpack_require__("U6+W");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /* eslint-disable */

      /**
       * 消息队列
       */
      var TaskQueue = {
        queues: [],
        // 待处理消息列表
        timer: null,
        intervalTime: 1000,
        // 节流间隔

        /**
         * 添加消息
         * @param {*} reportUrl 上报url
         * @param {*} data 上报数据
         */
        add: function add(data) {
          // this.queues.push({ reportUrl, data })
          this.queues.push(data);
        },
        reportQueue: function reportQueue() {
          // 排除Ajax和Fetch错误
          var otherError = this.queues.filter(function (i) {
            return (
              i.category !== _baseConfig.ResourceTypeEnum.AJAX &&
              i.category !== _baseConfig.ResourceTypeEnum.FETCH
            );
          });
          if (otherError.length)
            new _api.default().report({
              error: otherError,
            }); // ajax 错误单独处理

          var ajaxError = this.queues.filter(function (i) {
            return i.category == _baseConfig.ResourceTypeEnum.AJAX;
          });
          if (ajaxError.length)
            new _api.default().report({
              ajax: ajaxError,
            }); // fetch 错误单独处理

          var fetchError = this.queues.filter(function (i) {
            return i.category == _baseConfig.ResourceTypeEnum.FETCH;
          });
          if (fetchError.length)
            new _api.default().report({
              fetch: fetchError,
            }); // 清空队列

          this.queues = [];
        },

        /**
         * 统一上报
         */
        fire: function fire() {
          var _this = this;

          if (!this.queues || this.queues.length === 0) {
            return;
          } // 队列长度超过30时上报一次
          else if (this.queues.length > 30) {
            if (this.timer) clearInterval(this.timer);
            this.reportQueue();
          } else {
            // 做一次节流上传
            if (this.timer) clearInterval(this.timer);
            this.timer = setTimeout(function () {
              _this.reportQueue();
            }, this.intervalTime);
          } // let item = this.queues[0]
          // item.reportUrl && new API(item.reportUrl).report(item.data)
          // this.queues.splice(0, 1)
          // this.fire() //递归
        },
      };
      var _default = TaskQueue;
      exports.default = _default;

      /***/
    },

    /***/ QfWi: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      var _index = _interopRequireDefault(__webpack_require__("tjUo"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function Shell(window) {
        if (!window.initMonitor) {
          window.initMonitor = _index.default;
        }
      }

      Shell(window);

      /***/
    },

    /***/ "U6+W": /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.ResourceTypeEnum =
        exports.ErrorLevelEnum =
        exports.ErrorCategoryEnum =
        exports.DEFAULT_URL =
          void 0;

      var _utils = _interopRequireDefault(__webpack_require__("+ceO"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      /**
       * 错误类型枚举
       */
      var ErrorCategoryEnum = /*#__PURE__*/ (function () {
        function ErrorCategoryEnum() {
          _classCallCheck(this, ErrorCategoryEnum);
        }

        _createClass(ErrorCategoryEnum, null, [
          {
            key: "JS_ERROR",
            get:
              /**
               * js 错误
               */
              function get() {
                return "js_error";
              },
            /**
             * 资源引用错误
             */
          },
          {
            key: "RESOURCE_ERROR",
            get: function get() {
              return "resource_error";
            },
            /**
             * Vue错误
             */
          },
          {
            key: "VUE_ERROR",
            get: function get() {
              return "vue_error";
            },
            /**
             * promise 错误
             */
          },
          {
            key: "PROMISE_ERROR",
            get: function get() {
              return "promise_error";
            }, // /**
            //  * ajax异步请求错误
            //  */
            // static get AJAX_ERROR() {
            //   return 'ajax_error'
            // }

            /**
             * 控制台错误console.info
             */
          },
          {
            key: "CONSOLE_INFO",
            get: function get() {
              return "console_info";
            },
            /**
             * 控制台错误console.warn
             */
          },
          {
            key: "CONSOLE_WARN",
            get: function get() {
              return "console_warn";
            },
            /**
             * 控制台错误console.error
             */
          },
          {
            key: "CONSOLE_ERROR",
            get: function get() {
              return "console_error";
            },
            /**
             * 跨域js错误
             */
          },
          {
            key: "CROSS_SCRIPT_ERROR",
            get: function get() {
              return "cross_srcipt_error";
            },
            /**
             * 未知异常
             */
          },
          {
            key: "UNKNOW_ERROR",
            get: function get() {
              return "unknow_error";
            },
          },
        ]);

        return ErrorCategoryEnum;
      })();
      /**
       * 错误level枚举
       */

      exports.ErrorCategoryEnum = ErrorCategoryEnum;

      var ErrorLevelEnum = /*#__PURE__*/ (function () {
        function ErrorLevelEnum() {
          _classCallCheck(this, ErrorLevelEnum);
        }

        _createClass(ErrorLevelEnum, null, [
          {
            key: "ERROR",
            get:
              /**
               * 错误信息
               */
              function get() {
                return "Error";
              },
            /**
             * 警告信息
             */
          },
          {
            key: "WARN",
            get: function get() {
              return "Warning";
            },
            /**
             * 日志信息
             */
          },
          {
            key: "INFO",
            get: function get() {
              return "Info";
            },
          },
        ]);

        return ErrorLevelEnum;
      })();
      /**
       * 资源枚举
       */

      exports.ErrorLevelEnum = ErrorLevelEnum;

      var ResourceTypeEnum = /*#__PURE__*/ (function () {
        function ResourceTypeEnum() {
          _classCallCheck(this, ResourceTypeEnum);
        }

        _createClass(ResourceTypeEnum, null, [
          {
            key: "FETCH",
            get:
              /**
               * 错误信息
               */
              function get() {
                return "Fetch";
              },
            /**
             * 警告信息
             */
          },
          {
            key: "AJAX",
            get: function get() {
              return "Ajax";
            },
          },
        ]);

        return ResourceTypeEnum;
      })(); // 默认上传地址 判断是否是测试环境 并且是否有手动配置过上传地址

      exports.ResourceTypeEnum = ResourceTypeEnum;

      var DEFAULT_URL = function DEFAULT_URL() {
        var _env = window.__SERAPH_MONITOR__._SDK_ENV_ || "";

        if (_env && _env !== "") {
          return _env === "test"
            ? "https://static-seraph-test.zhongan.io/sdk_web.json"
            : "https://static-seraph.zhongan.io/sdk_web.json";
        }

        return _utils.default
          .getScriptUrl("src")
          .indexOf("seraph-js-sdk.zhongan.io") < 0
          ? "https://static-seraph-test.zhongan.io/sdk_web.json"
          : "https://static-seraph.zhongan.io/sdk_web.json";
      };

      exports.DEFAULT_URL = DEFAULT_URL;

      /***/
    },

    /***/ VgTM: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _requestMonitor = _interopRequireDefault(__webpack_require__("+UKG"));

      var _baseConfig = __webpack_require__("U6+W");

      var _utils = _interopRequireDefault(__webpack_require__("+ceO"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      var FetchHook = /*#__PURE__*/ (function (_RequestMonitor) {
        _inherits(FetchHook, _RequestMonitor);

        var _super = _createSuper(FetchHook);

        function FetchHook(params) {
          var _this;

          _classCallCheck(this, FetchHook);

          _this = _super.call(this, params);

          _this.hookFetch();

          return _this;
        }

        _createClass(FetchHook, [
          {
            key: "hookFetch",
            value: function hookFetch(callback) {
              var that = this; // 性能监控 fetch 请求

              if (window.fetch) {
                var _w = window;
                var _fetch = _w.fetch;

                _w.fetch = function () {
                  var arg = [].slice.call(arguments, 0);
                  var _type = _utils.default.judgeType;
                  return new Promise(function (resolve, reject) {
                    var url;
                    var params;
                    var method = "GET"; // 参数处理

                    if (arg) {
                      if (arg.length > 1) {
                        url = arg[0];
                        params = arg[1];
                        if (params && _type(params, "Object") && params.method)
                          method = params.method;
                      } else if (arg.length === 1) {
                        var c = arg[0];
                        _type(c, "String")
                          ? (url = c)
                          : c &&
                            (_type(c, "Object") || _type(c, "Request")) &&
                            ((params = c), (url = c.url), (method = c.method));
                      }
                    } // fetch 数据收集

                    var f = {
                      method: method,
                      url: url,
                    };
                    var s = new Date().getTime();
                    var proxy;

                    try {
                      proxy = _fetch.apply(_w, arg);
                    } catch (error) {
                      return n(error);
                    }

                    proxy.then(
                      function (response) {
                        resolve(response);
                        f.cbTime = new Date().getTime() - s;
                        f.status = response.status;
                        setTimeout(function () {
                          if (response) {
                            // 记录fetch
                            that.formatData(f);
                          }
                        }, 125);
                      },
                      function (t, x) {
                        reject(t);
                      }
                    );
                  });
                };
              }
            }, // 格式化数据
          },
          {
            key: "formatData",
            value: function formatData(info) {
              // 格式化url
              info.url = encodeURIComponent(info.url); // cbTime 是根据开始时间 和结束时间相减 _req数组最后一个为结束时间

              this.category = _baseConfig.ResourceTypeEnum.FETCH; // 资源类型

              this.method = info.method;
              this.url = info.url;
              this.async = true; // 默认异步

              this.status = info.status;
              this.cbTime = info.cbTime; // 遍历 找出最后的timing

              this.timing = this.findResourceTiming2(info.url, "fetch");
              this.record();
            },
          },
        ]);

        return FetchHook;
      })(_requestMonitor.default);

      var _default = FetchHook;
      exports.default = _default;

      /***/
    },

    /***/ XHUi: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _error = __webpack_require__("qNkg");

      var _performance = _interopRequireDefault(__webpack_require__("K6aS"));

      var _utils = _interopRequireDefault(__webpack_require__("+ceO"));

      var _stampShake = __webpack_require__("Q2/a");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      var MonitorJS = /*#__PURE__*/ (function () {
        function MonitorJS(options) {
          _classCallCheck(this, MonitorJS);

          this.jsError = true;
          this.promiseError = true;
          this.resourceError = true;
          this.ajaxError = true;
          this.consoleError = false; // console.error默认不处理

          this.vueError = false;
          this.ratio = options && options.sampling ? options.sampling : 100; // 默认全量
          // 第一次进入移除

          (0, _stampShake.removeStampTime)(); // 检测空白时间

          (0, _stampShake.StampShakeTime)(); // options存在的场合

          if (options) {
            window.__SERAPH_MONITOR__._OPTIONS = _objectSpread(
              {
                beforeSend: function beforeSend(event) {
                  if (
                    (event && event.category === "Fetch") ||
                    event.category === "Ajax"
                  ) {
                    if (
                      event.url &&
                      event.url.indexOf("KKJSBridge-RequestId") !== -1
                    ) {
                      return false;
                    }
                  }

                  return true;
                },
              },
              options
            );

            if (options.SERAPH_URL) {
              var needAppendSlash = options.SERAPH_URL.endsWith("/")
                ? false
                : true;
              var concatedSeraphUrl = ""
                .concat(options.SERAPH_URL)
                .concat(needAppendSlash ? "/" : "", "sdk_web.json");
              window.__SERAPH_MONITOR__.SERAPH_URL = concatedSeraphUrl;
            } // 保存全局数据

            window.__SERAPH_MONITOR__._SDK_ENV_ = options.sdkEnv || ""; // siteId 注入全局

            window.__SERAPH_MONITOR__._SITE_ID_ = options.siteId || ""; // source注入全局

            window.__SERAPH_MONITOR__._SOURCE_ = options.source || ""; // env注入全局

            window.__SERAPH_MONITOR__._ENV_ = options.env || ""; // 开启debug

            window.__SERAPH_MONITOR__.__DEBUGGER__ = options.debug; // 扩展信息

            window.__SERAPH_MONITOR__._M_EXTENDS_INFO_ =
              options.extendsInfo || undefined;
          } // 如果浏览器版本是IE和低于10的版本 则不做性能监控 因为IE9以下会有跨域限制等错误
          // getPerformance 判断浏览器是否支持Performance 如果UIWebView 等不支持则不做操作

          if (
            _utils.default.getIELowVersions() ||
            _utils.default.getPerformance()
          ) {
            console.error("所在环境是小于IE10以下版本或Performance不支持！");
            return;
          } // 取样

          this.sampling(options);
        }
        /**
         * 处理异常信息初始化
         * @param {*} options
         */

        _createClass(MonitorJS, [
          {
            key: "init",
            value: function init(options) {
              options = options || {};
              this.jsError = options.jsError || this.jsError;
              this.promiseError = options.promiseError || this.promiseError;
              this.resourceError = options.resourceError || this.resourceError;
              this.ajaxError = options.ajaxError || this.ajaxError;
              this.consoleError = options.consoleError || this.consoleError;
              this.vueError = options.vueError || this.vueError;
              var extendsInfo = options.extendsInfo || {}; // 扩展信息（一般用于系统个性化分析）

              var param = {
                extendsInfo: extendsInfo,
                ajaxCross: options.ajaxCross,
              }; // ajaxCross 代表是否收集ajax的跨域错误信息和连接关闭等信息

              if (this.jsError) {
                new _error.JsError(param).handleError();
              }

              if (this.promiseError) {
                new _error.PromiseError(param).handleError();
              }

              if (this.resourceError) {
                new _error.ResourceError(param).handleError();
              }

              if (this.ajaxError) {
                new _error.AjaxError(param).handleError();
              }

              if (this.consoleError) {
                new _error.ConsoleError(param).handleError();
              }

              if (this.vueError && options.vue) {
                new _error.VueError(param).handleError(options.vue);
              }
            },
            /**
             * 初始化发送性能监控数据
             */
          },
          {
            key: "initMonitor",
            value: function initMonitor() {
              // 发送性能监控数据
              this.performanceMonitor = new _performance.default();
            },
            /**
             * 采集取样 比例
             * @param {百分比:100} ratio
             */
          },
          {
            key: "sampling",
            value: function sampling(options) {
              // 采集 百分比
              var _n = parseInt(this.ratio);

              if (_n > 0 && _n <= 100 && Math.random() < _n / 100) {
                this.init(options);
                this.initMonitor();
              }
            },
          },
        ]);

        return MonitorJS;
      })();

      var _default = MonitorJS;
      exports.default = _default;

      /***/
    },

    /***/ a7dQ: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _errorMonitor = _interopRequireDefault(__webpack_require__("2k1W"));

      var _baseConfig = __webpack_require__("U6+W");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /**
       * 捕获JS错误
       */
      var JSError = /*#__PURE__*/ (function (_ErrorMonitor) {
        _inherits(JSError, _ErrorMonitor);

        var _super = _createSuper(JSError);

        function JSError(params) {
          _classCallCheck(this, JSError);

          return _super.call(this, params);
        }
        /**
         * 注册onerror事件
         */

        _createClass(JSError, [
          {
            key: "handleError",
            value: function handleError() {
              var _this = this;

              window.onerror = function (msg, url, line, col, error) {
                // 没有url不上报
                if (msg != "Script error." && !url) {
                  return true;
                }

                try {
                  _this.level = _baseConfig.ErrorLevelEnum.WARN;
                  _this.category = _baseConfig.ErrorCategoryEnum.JS_ERROR;
                  _this.msg = msg;
                  _this.url = encodeURIComponent(url);
                  _this.line = line;
                  _this.col = col;
                  _this.errorObj = error;

                  _this.recordError();
                } catch (error) {
                  console.error("js错误异常", error);
                }
              };
            },
          },
        ]);

        return JSError;
      })(_errorMonitor.default);

      var _default = JSError;
      exports.default = _default;

      /***/
    },

    /***/ cBov: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _device = _interopRequireDefault(__webpack_require__("NimY"));

      var _performance = _interopRequireDefault(__webpack_require__("pbIe"));

      var _console = _interopRequireDefault(__webpack_require__("jTJs"));

      var _utils = _interopRequireDefault(__webpack_require__("+ceO"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      /**
       * 监控基类
       */
      var BaseMonitor = /*#__PURE__*/ (function () {
        function BaseMonitor() {
          _classCallCheck(this, BaseMonitor);
        }

        _createClass(BaseMonitor, [
          {
            key: "findResourceTiming",
            value:
              /**
               * 查找resource资源(包括已上传的资源)
               * @param {查找地址} url
               * @param {查找类型:initiatorType} type
               */
              function findResourceTiming(url, type) {
                var _resource = _performance.default.getEntries() || [];

                var result = {};

                for (var i = 0; i < _resource.length; i++) {
                  var p = _resource[i];

                  if (p.name.indexOf(url) >= 0 && p.initiatorType == type) {
                    result = p;
                  }
                }

                return result;
              },
            /**
             * 增加上传标记, 和 break
             * @param {查找地址} url
             * @param {查找类型:initiatorType} type
             */
          },
          {
            key: "findResourceTiming2",
            value: function findResourceTiming2(url, type) {
              var _resource = _performance.default.getEntries() || [];

              var result = {};

              for (var i = 0; i < _resource.length; i++) {
                var p = _resource[i];

                if (
                  p.name.indexOf(url) >= 0 &&
                  p.initiatorType == type &&
                  !p.mark
                ) {
                  p.mark = true;
                  result = p;
                  break;
                }
              }

              return result;
            },
            /**
             * 获取设备信息
             */
          },
          {
            key: "getDeviceInfo",
            value: function getDeviceInfo() {
              try {
                var deviceInfo = _device.default.getDeviceInfo();

                return _utils.default.jsonStringify(deviceInfo);
              } catch (error) {
                (0, _console.default)(error);
                return "";
              }
            },
          },
        ]);

        return BaseMonitor;
      })();

      var _default = BaseMonitor;
      exports.default = _default;

      /***/
    },

    /***/ dy8N: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _XMLHttpRequestHook = _interopRequireDefault(
        __webpack_require__("B9ep")
      );

      var _FetchHook = _interopRequireDefault(__webpack_require__("VgTM"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      var realXhr = "RealXMLHttpRequest";
      /**
       * ajax error异常
       */

      var AjaxError = /*#__PURE__*/ (function () {
        function AjaxError(params) {
          _classCallCheck(this, AjaxError);

          this.params = params;
        }
        /**
         * 处理错误
         * @param type {*} ajax库类型
         * @param error{*} 错误信息
         */

        _createClass(AjaxError, [
          {
            key: "handleError",
            value: function handleError(type, err) {
              this.XHRError();
              this.FetchError();
            },
            /**
             * 获取XMLHttpRequest请求信息 和 错误信息
             */
          },
          {
            key: "XHRError",
            value: function XHRError() {
              window[realXhr] = window[realXhr] || XMLHttpRequest;
              window.__SERAPH_MONITOR__._ajaxCross_ = true || false; // 因为是重写XMLHttpRequest的特殊性 无法参入 目前写入全局

              window.XMLHttpRequest = _XMLHttpRequestHook.default.bind(this);
            },
            /**
             * Fetch 请求信息 和 错误信息
             */
          },
          {
            key: "FetchError",
            value: function FetchError(error) {
              new _FetchHook.default();
            },
          },
        ]);

        return AjaxError;
      })();

      var _default = AjaxError;
      exports.default = _default;

      /***/
    },

    /***/ evt3: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _errorMonitor = _interopRequireDefault(__webpack_require__("2k1W"));

      var _baseConfig = __webpack_require__("U6+W");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /**
       * 资源加载错误
       */
      var ResourceError = /*#__PURE__*/ (function (_ErrorMonitor) {
        _inherits(ResourceError, _ErrorMonitor);

        var _super = _createSuper(ResourceError);

        function ResourceError(params) {
          _classCallCheck(this, ResourceError);

          return _super.call(this, params);
        }
        /**
         * 注册onerror事件
         */

        _createClass(ResourceError, [
          {
            key: "handleError",
            value: function handleError() {
              var _this = this;

              // 跨域脚本错误：Script error.
              // const originAddEventListener = EventTarget.prototype.addEventListener
              // EventTarget.prototype.addEventListener = (type, listener, options) => {
              //   const wrappedListener = (...args) => {
              //     try {
              //       return listener.apply(this, args)
              //     } catch (err) {
              //       // 拿到 error 信息,统一进行处理
              //       throw err
              //     }
              //   }
              //   return originAddEventListener.call(this, type, wrappedListener, options)
              // }
              window.addEventListener(
                "error",
                function (event) {
                  try {
                    if (!event) {
                      return;
                    }

                    _this.category =
                      _baseConfig.ErrorCategoryEnum.RESOURCE_ERROR;
                    var target = event.target || event.srcElement;
                    var isElementTarget =
                      target instanceof HTMLScriptElement ||
                      target instanceof HTMLLinkElement ||
                      target instanceof HTMLImageElement;

                    if (!isElementTarget) {
                      return; // js error不再处理
                    }

                    _this.level =
                      target.tagName.toUpperCase() === "IMG"
                        ? _baseConfig.ErrorLevelEnum.WARN
                        : _baseConfig.ErrorLevelEnum.ERROR;
                    _this.msg = "\u52A0\u8F7D ".concat(
                      target.tagName,
                      " \u8D44\u6E90\u9519\u8BEF"
                    );
                    _this.type = target.tagName;
                    _this.url = encodeURIComponent(
                      target.src || target.href || ""
                    );
                    _this.errorObj = target;

                    if (_this.url.indexOf("sdk_web.json") > 0) {
                      return;
                    }

                    _this.recordError();
                  } catch (error) {
                    console.error("资源加载收集异常", error);
                  }
                },
                true
              );
            },
          },
        ]);

        return ResourceError;
      })(_errorMonitor.default);

      var _default = ResourceError;
      exports.default = _default;

      /***/
    },

    /***/ jTJs: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      /* eslint-disable */
      function Console() {
        if (window.__SERAPH_MONITOR__.__DEBUGGER__)
          console.log.apply(this, arguments);
      }

      var _default = Console;
      exports.default = _default;

      /***/
    },

    /***/ o29C: /***/ function (module) {
      module.exports = JSON.parse(
        '{"name":"seraph-sdk","version":"1.0.5","description":"六翼天使性能监控","main":"dist","keywords":["javascript","monitor"],"author":"Seraph","license":"MIT"}'
      );

      /***/
    },

    /***/ pbIe: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _stampShake = __webpack_require__("Q2/a");

      /* eslint-disable */

      /**
       * 页面监控
       */
      var pagePerformance = {
        getTiming: function getTiming() {
          try {
            if (
              !window.performance ||
              !window.performance.timing ||
              !window.performance.timing.toJSON
            ) {
              console.error("你的浏览器不支持 performance 操作");
              return {};
            }

            var w = window.performance.timing || {};
            var t = w.toJSON();
            var times = {};
            var loadTime = t.loadEventEnd - t.loadEventStart;

            if (loadTime < 0) {
              setTimeout(function () {
                pagePerformance.getTiming();
              }, 200);
              return;
            }

            return Object.assign(t, {
              now: window.performance.now(),
              sendTime: Date.now(),
              // 本地客户端发送时间
              shakeTime: (0, _stampShake.checkTime)(),
              // App 有切入后台在切入前台 过程中的空白时间
              customStartTime: window.__SERAPH_MONITOR__._CUSTOM_TIME_
                ? window.__SERAPH_MONITOR__._CUSTOM_TIME_
                : (window.__SERAPH_MONITOR__._CUSTOM_TIME_ = Date.now()), // 自定义页面打开时间
            }); // //【重要】重定向的时间
            // times.redirectTime = t.redirectEnd - t.redirectStart
            // //【重要】DNS 查询时间
            // //【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？
            // times.dnsTime = t.domainLookupEnd - t.domainLookupStart
            // //【重要】读取页面第一个字节的时间
            // //【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？
            // times.ttfbTime = t.responseStart - t.navigationStart
            // //DNS 缓存时间
            // times.appcacheTime = t.domainLookupStart - t.fetchStart
            // //卸载页面的时间
            // times.unloadTime = t.unloadEventEnd - t.unloadEventStart
            // //tcp连接耗时
            // times.tcpTime = t.connectEnd - t.connectStart
            // //【重要】内容加载完成的时间
            // //【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？
            // times.reqTime = t.responseEnd - t.responseStart
            // //解析dom树耗时
            // times.analysisTime = t.domComplete - t.domInteractive
            // //白屏时间
            // times.blankTime = t.domLoading - t.navigationStart
            // //domReadyTime
            // times.domReadyTime = t.domContentLoadedEventEnd - t.navigationStart
            // //【重要】页面加载完成的时间
            // //【原因】这几乎代表了用户等待页面可用的时间
            // times.loadPage = t.loadEventEnd - t.navigationStart
            // return times
          } catch (e) {
            console.error(e);
          }
        },
        getEntries: function getEntries() {
          if (!window.performance || !window.performance.getEntries) {
            console.error("该浏览器不支持performance.getEntries方法");
            return [];
          }

          var entryTimesList = [];
          var entryList = window.performance.getEntries();

          if (!entryList || entryList.length == 0) {
            return [];
          }

          if (!entryList[0].toJSON) {
            return [];
          } // 直接发送全量数据 暂不处理里面的字段信息
          // entryTimesList = entryList

          entryList.forEach(function (entity) {
            // entity格式化为JSON
            var item = entity.toJSON(); // 格式化url

            item.name = encodeURIComponent(item.name); //   let templeObj = {}

            var usefulType = [
              "script",
              "css",
              "fetch",
              "xmlhttprequest",
              "link",
              "img",
              "preflight",
            ]; // 'navigation' preflight 兼容edge

            if (usefulType.indexOf(item.initiatorType) > -1) {
              // //请求资源路径
              // templeObj.name = item.name
              // //发起资源类型
              // templeObj.initiatorType = item.initiatorType
              // //http协议版本
              // templeObj.nextHopProtocol = item.nextHopProtocol
              // //dns查询耗时
              // templeObj.dnsTime = item.domainLookupEnd - item.domainLookupStart
              // //tcp链接耗时
              // templeObj.tcpTime = item.connectEnd - item.connectStart
              // //请求时间
              // templeObj.reqTime = item.responseEnd - item.responseStart
              // //重定向时间
              // templeObj.redirectTime = item.redirectEnd - item.redirectStart
              // entryTimesList.push(templeObj)
              if (item.name.indexOf("sdk_web.json") > 0) {
                return;
              }

              entryTimesList.push(item);
            }
          });
          return entryTimesList;
        },
      };
      var _default = pagePerformance;
      exports.default = _default;

      /***/
    },

    /***/ qNkg: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      Object.defineProperty(exports, "AjaxError", {
        enumerable: true,
        get: function get() {
          return _ajaxError.default;
        },
      });
      Object.defineProperty(exports, "ConsoleError", {
        enumerable: true,
        get: function get() {
          return _consoleError.default;
        },
      });
      Object.defineProperty(exports, "JsError", {
        enumerable: true,
        get: function get() {
          return _jsError.default;
        },
      });
      Object.defineProperty(exports, "PromiseError", {
        enumerable: true,
        get: function get() {
          return _promiseError.default;
        },
      });
      Object.defineProperty(exports, "ResourceError", {
        enumerable: true,
        get: function get() {
          return _resourceError.default;
        },
      });
      Object.defineProperty(exports, "VueError", {
        enumerable: true,
        get: function get() {
          return _vueError.default;
        },
      });

      var _ajaxError = _interopRequireDefault(__webpack_require__("dy8N"));

      var _consoleError = _interopRequireDefault(__webpack_require__("IbN0"));

      var _jsError = _interopRequireDefault(__webpack_require__("a7dQ"));

      var _promiseError = _interopRequireDefault(__webpack_require__("CfyR"));

      var _resourceError = _interopRequireDefault(__webpack_require__("evt3"));

      var _vueError = _interopRequireDefault(__webpack_require__("zcB1"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /***/
    },

    /***/ tjUo: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _monitorjs = _interopRequireDefault(__webpack_require__("XHUi"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * MonitorJs构造函数
       *
       * @param {*} options
       */
      function MonitorJS(options) {
        // 不存在monitor的场合
        if (!window.__SERAPH_HAS_MONITOR__) {
          // seraph全局用变量声明
          window.__SERAPH_MONITOR__ = {}; // offCollect 是否关闭采集， true 执行实例化方法

          if (!options.offCollect) {
            // 实例化monitor
            window.__SERAPH_HAS_MONITOR__ = new _monitorjs.default(options);
          }
        }
      }

      window.MonitorJS = MonitorJS;
      var _default = {
        MonitorJS: MonitorJS,
      };
      exports.default = _default;

      /***/
    },

    /***/ zcB1: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _errorMonitor = _interopRequireDefault(__webpack_require__("2k1W"));

      var _baseConfig = __webpack_require__("U6+W");

      var _utils = _interopRequireDefault(__webpack_require__("+ceO"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /**
       * vue错误
       */
      var VueError = /*#__PURE__*/ (function (_ErrorMonitor) {
        _inherits(VueError, _ErrorMonitor);

        var _super = _createSuper(VueError);

        function VueError(params) {
          _classCallCheck(this, VueError);

          return _super.call(this, params);
        }
        /**
         * 处理Vue错误提示
         */

        _createClass(VueError, [
          {
            key: "handleError",
            value: function handleError(Vue) {
              var _this = this;

              if (!Vue) {
                return;
              }

              Vue.config.errorHandler = function (error, vm, info) {
                try {
                  var metaData = {
                    message: error.message,
                    stack: error.stack,
                    info: info,
                  };

                  if (
                    Object.prototype.toString.call(vm) === "[object Object]"
                  ) {
                    metaData.componentName = vm._isVue
                      ? vm.$options.name || vm.$options._componentTag
                      : vm.name;
                    metaData.propsData = vm.$options.propsData;
                  }

                  _this.level = _baseConfig.ErrorLevelEnum.WARN;
                  _this.msg = _utils.default.jsonStringify(metaData);
                  _this.category = _baseConfig.ErrorCategoryEnum.VUE_ERROR;

                  _this.recordError();
                } catch (error) {
                  console.error("vue错误异常", error);
                }
              };
            },
          },
        ]);

        return VueError;
      })(_errorMonitor.default);

      var _default = VueError;
      exports.default = _default;

      /***/
    },

    /******/
  }
);
window._SERAPH_ = new window.MonitorJS({
  siteId: "chrome-extension", //站点ID，接入管理中申请的站点ID
  source: "H5", //来源，默认H5
  env: "test", //默认为prd。test-测试，pre-预发，prd-生产
  sdkEnv: "test", // 默认为 prd, 为 'test' 时, 上报到 https://static-seraph-test.zhongan.io/sdk_web.json, 否则 上报到生产域名
  debug: true,
});
