"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: ((k) => from[k]).bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shims/asyncIteratorSymbol.js
  var asyncIteratorSymbol;
  var init_asyncIteratorSymbol = __esm({
    "shims/asyncIteratorSymbol.js"() {
      "use strict";
      asyncIteratorSymbol = Symbol("Symbol.asyncIterator");
    }
  });

  // shims/promiseAllSettled.js
  var allSettledFulfill, allSettledReject, mapAllSettled, allSettled;
  var init_promiseAllSettled = __esm({
    "shims/promiseAllSettled.js"() {
      "use strict";
      allSettledFulfill = (value) => ({
        status: "fulfilled",
        value
      });
      allSettledReject = (reason) => ({
        status: "rejected",
        reason
      });
      mapAllSettled = (item) => Promise.resolve(item).then(allSettledFulfill, allSettledReject);
      allSettled = Promise.allSettled ??= (iterator) => {
        return Promise.all(Array.from(iterator).map(mapAllSettled));
      };
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_async_to_generator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done)
      resolve(value);
    else
      Promise.resolve(value).then(_next, _throw);
  }
  function _async_to_generator(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var init_async_to_generator = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_async_to_generator.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/spitroast@1.4.4/node_modules/spitroast/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/.pnpm/spitroast@1.4.4/node_modules/spitroast/dist/cjs.js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, {
            get: all[name],
            enumerable: true
          });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          var _loop2 = function(key2) {
            if (!__hasOwnProp2.call(to, key2) && key2 !== except)
              __defProp2(to, key2, {
                get: () => from[key2],
                enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable
              });
          };
          for (var key of __getOwnPropNames2(from))
            _loop2(key);
        }
        return to;
      };
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
      var src_exports2 = {};
      __export2(src_exports2, {
        after: () => after2,
        before: () => before3,
        instead: () => instead4,
        unpatchAll: () => unpatchAll
      });
      module.exports = __toCommonJS2(src_exports2);
      var patchTypes = [
        "a",
        "b",
        "i"
      ];
      var patchedObjects = /* @__PURE__ */ new Map();
      function hook_default(funcName, funcParent, funcArgs, ctxt, isConstruct) {
        var patch = patchedObjects.get(funcParent)?.[funcName];
        if (!patch)
          return isConstruct ? Reflect.construct(funcParent[funcName], funcArgs, ctxt) : funcParent[funcName].apply(ctxt, funcArgs);
        for (var hook of patch.b.values()) {
          var maybefuncArgs = hook.call(ctxt, funcArgs);
          if (Array.isArray(maybefuncArgs))
            funcArgs = maybefuncArgs;
        }
        var workingRetVal = [
          ...patch.i.values()
        ].reduce(
          (prev, current) => (...args) => current.call(ctxt, args, prev),
          // This calls the original function
          (...args) => isConstruct ? Reflect.construct(patch.o, args, ctxt) : patch.o.apply(ctxt, args)
        )(...funcArgs);
        for (var hook1 of patch.a.values())
          workingRetVal = hook1.call(ctxt, funcArgs, workingRetVal) ?? workingRetVal;
        return workingRetVal;
      }
      function unpatch(funcParent, funcName, hookId, type) {
        var patchedObject = patchedObjects.get(funcParent);
        var patch = patchedObject?.[funcName];
        if (!patch?.[type].has(hookId))
          return false;
        patch[type].delete(hookId);
        if (patchTypes.every((t) => patch[t].size === 0)) {
          var success = Reflect.defineProperty(funcParent, funcName, {
            value: patch.o,
            writable: true,
            configurable: true
          });
          if (!success)
            funcParent[funcName] = patch.o;
          delete patchedObject[funcName];
        }
        if (Object.keys(patchedObject).length == 0)
          patchedObjects.delete(funcParent);
        return true;
      }
      function unpatchAll() {
        for (var [parentObject, patchedObject] of patchedObjects.entries())
          for (var funcName in patchedObject)
            for (var hookType of patchTypes)
              for (var hookId of patchedObject[funcName]?.[hookType].keys() ?? [])
                unpatch(parentObject, funcName, hookId, hookType);
      }
      var getPatchFunc_default = (patchType) => (funcName, funcParent, callback, oneTime = false) => {
        if (typeof funcParent[funcName] !== "function")
          throw new Error(`${funcName} is not a function in ${funcParent.constructor.name}`);
        if (!patchedObjects.has(funcParent))
          patchedObjects.set(funcParent, /* @__PURE__ */ Object.create(null));
        var parentInjections = patchedObjects.get(funcParent);
        if (!parentInjections[funcName]) {
          var origFunc = funcParent[funcName];
          parentInjections[funcName] = {
            o: origFunc,
            b: /* @__PURE__ */ new Map(),
            i: /* @__PURE__ */ new Map(),
            a: /* @__PURE__ */ new Map()
          };
          var runHook = (ctxt, args, construct) => {
            var ret = hook_default(funcName, funcParent, args, ctxt, construct);
            if (oneTime)
              unpatchThisPatch();
            return ret;
          };
          var replaceProxy = new Proxy(origFunc, {
            apply: (_2, ctxt, args) => runHook(ctxt, args, false),
            construct: (_2, args) => runHook(origFunc, args, true),
            get: (target, prop, receiver) => prop == "toString" ? origFunc.toString.bind(origFunc) : Reflect.get(target, prop, receiver)
          });
          var success = Reflect.defineProperty(funcParent, funcName, {
            value: replaceProxy,
            configurable: true,
            writable: true
          });
          if (!success)
            funcParent[funcName] = replaceProxy;
        }
        var hookId = Symbol();
        var unpatchThisPatch = () => unpatch(funcParent, funcName, hookId, patchType);
        parentInjections[funcName][patchType].set(hookId, callback);
        return unpatchThisPatch;
      };
      var before3 = getPatchFunc_default("b");
      var instead4 = getPatchFunc_default("i");
      var after2 = getPatchFunc_default("a");
    }
  });

  // src/lib/api/native/modules/index.ts
  var modules_exports = {};
  __export(modules_exports, {
    BundleUpdaterManager: () => BundleUpdaterManager,
    NativeCacheModule: () => NativeCacheModule,
    NativeClientInfoModule: () => NativeClientInfoModule,
    NativeDeviceModule: () => NativeDeviceModule,
    NativeFileModule: () => NativeFileModule,
    NativeThemeModule: () => NativeThemeModule
  });
  var nmp, NativeCacheModule, NativeFileModule, NativeClientInfoModule, NativeDeviceModule, NativeThemeModule, BundleUpdaterManager;
  var init_modules = __esm({
    "src/lib/api/native/modules/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      nmp = window.nativeModuleProxy;
      NativeCacheModule = nmp.NativeCacheModule ?? nmp.MMKVManager;
      NativeFileModule = nmp.NativeFileModule ?? nmp.RTNFileManager ?? nmp.DCDFileManager;
      NativeClientInfoModule = nmp.NativeClientInfoModule ?? nmp.RTNClientInfoManager ?? nmp.InfoDictionaryManager;
      NativeDeviceModule = nmp.NativeDeviceModule ?? nmp.RTNDeviceManager ?? nmp.DCDDeviceManager;
      NativeThemeModule = nmp.NativeThemeModule ?? nmp.RTNThemeManager ?? nmp.DCDTheme;
      ({ BundleUpdaterManager } = nmp);
    }
  });

  // src/lib/api/native/fs.ts
  var fs_exports = {};
  __export(fs_exports, {
    clearFolder: () => clearFolder,
    downloadFile: () => downloadFile,
    fileExists: () => fileExists,
    readFile: () => readFile,
    removeFile: () => removeFile,
    writeFile: () => writeFile
  });
  function clearFolder(path) {
    return _clearFolder.apply(this, arguments);
  }
  function _clearFolder() {
    _clearFolder = _async_to_generator(function* (path, { prefix = "pyoncord/" } = {}) {
      if (typeof NativeFileModule.clearFolder !== "function")
        throw new Error("'fs.clearFolder' is not supported");
      return void (yield NativeFileModule.clearFolder("documents", `${prefix}${path}`));
    });
    return _clearFolder.apply(this, arguments);
  }
  function removeFile(path) {
    return _removeFile.apply(this, arguments);
  }
  function _removeFile() {
    _removeFile = _async_to_generator(function* (path, { prefix = "pyoncord/" } = {}) {
      if (typeof NativeFileModule.removeFile !== "function")
        throw new Error("'fs.removeFile' is not supported");
      return void (yield NativeFileModule.removeFile("documents", `${prefix}${path}`));
    });
    return _removeFile.apply(this, arguments);
  }
  function fileExists(path) {
    return _fileExists.apply(this, arguments);
  }
  function _fileExists() {
    _fileExists = _async_to_generator(function* (path, { prefix = "pyoncord/" } = {}) {
      return yield NativeFileModule.fileExists(`${NativeFileModule.getConstants().DocumentsDirPath}/${prefix}${path}`);
    });
    return _fileExists.apply(this, arguments);
  }
  function writeFile(path, data) {
    return _writeFile.apply(this, arguments);
  }
  function _writeFile() {
    _writeFile = _async_to_generator(function* (path, data, { prefix = "pyoncord/" } = {}) {
      if (typeof data !== "string")
        throw new Error("Argument 'data' must be a string");
      return void (yield NativeFileModule.writeFile("documents", `${prefix}${path}`, data, "utf8"));
    });
    return _writeFile.apply(this, arguments);
  }
  function readFile(path) {
    return _readFile.apply(this, arguments);
  }
  function _readFile() {
    _readFile = _async_to_generator(function* (path, { prefix = "pyoncord/" } = {}) {
      try {
        return yield NativeFileModule.readFile(`${NativeFileModule.getConstants().DocumentsDirPath}/${prefix}${path}`, "utf8");
      } catch (err) {
        throw new Error(`An error occured while writing to '${path}'`, {
          cause: err
        });
      }
    });
    return _readFile.apply(this, arguments);
  }
  function downloadFile(url2, path) {
    return _downloadFile.apply(this, arguments);
  }
  function _downloadFile() {
    _downloadFile = _async_to_generator(function* (url2, path, { prefix = "pyoncord/" } = {}) {
      var response = yield fetch(url2);
      if (!response.ok) {
        throw new Error(`Failed to download file from ${url2}: ${response.statusText}`);
      }
      var arrayBuffer = yield response.arrayBuffer();
      var data = Buffer.from(arrayBuffer).toString("base64");
      yield NativeFileModule.writeFile("documents", `${prefix}${path}`, data, "base64");
    });
    return _downloadFile.apply(this, arguments);
  }
  var init_fs = __esm({
    "src/lib/api/native/fs.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_modules();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get_prototype_of.js
  function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _get_prototype_of(o);
  }
  var init_get_prototype_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get_prototype_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
  function _is_native_reflect_construct() {
    try {
      var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (_2) {
    }
    return (_is_native_reflect_construct = function _is_native_reflect_construct2() {
      return !!result;
    })();
  }
  var init_is_native_reflect_construct = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_assert_this_initialized.js
  function _assert_this_initialized(self) {
    if (self === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
  }
  var init_assert_this_initialized = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_assert_this_initialized.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_type_of.js
  function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  var init_type_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_type_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_possible_constructor_return.js
  function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function"))
      return call;
    return _assert_this_initialized(self);
  }
  var init_possible_constructor_return = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_possible_constructor_return.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_assert_this_initialized();
      init_type_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_call_super.js
  function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
  }
  var init_call_super = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_call_super.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_get_prototype_of();
      init_is_native_reflect_construct();
      init_possible_constructor_return();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_call_check.js
  function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor))
      throw new TypeError("Cannot call a class as a function");
  }
  var init_class_call_check = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_call_check.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_set_prototype_of.js
  function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _set_prototype_of(o, p);
  }
  var init_set_prototype_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_set_prototype_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_inherits.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _set_prototype_of(subClass, superClass);
  }
  var init_inherits = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_inherits.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_construct.js
  function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct())
      _construct = Reflect.construct;
    else {
      _construct = function construct(Parent2, args2, Class2) {
        var a = [
          null
        ];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _set_prototype_of(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  var init_construct = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_construct.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_is_native_reflect_construct();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_function.js
  function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  var init_is_native_function = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_function.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_wrap_native_super.js
  function _wrap_native_super(Class) {
    var _cache2 = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrap_native_super = function _wrap_native_super2(Class2) {
      if (Class2 === null || !_is_native_function(Class2))
        return Class2;
      if (typeof Class2 !== "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof _cache2 !== "undefined") {
        if (_cache2.has(Class2))
          return _cache2.get(Class2);
        _cache2.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _get_prototype_of(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _set_prototype_of(Wrapper, Class2);
    };
    return _wrap_native_super(Class);
  }
  var init_wrap_native_super = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_wrap_native_super.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_construct();
      init_get_prototype_of();
      init_is_native_function();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/function/debounce.mjs
  function debounce(func, debounceMs, { signal, edges } = {}) {
    var pendingThis = void 0;
    var pendingArgs = null;
    var leading = edges != null && edges.includes("leading");
    var trailing = edges == null || edges.includes("trailing");
    var invoke = () => {
      if (pendingArgs !== null) {
        func.apply(pendingThis, pendingArgs);
        pendingThis = void 0;
        pendingArgs = null;
      }
    };
    var onTimerEnd = () => {
      if (trailing) {
        invoke();
      }
      cancel();
    };
    var timeoutId = null;
    var schedule = () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        onTimerEnd();
      }, debounceMs);
    };
    var cancelTimer = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };
    var cancel = () => {
      cancelTimer();
      pendingThis = void 0;
      pendingArgs = null;
    };
    var flush = () => {
      cancelTimer();
      invoke();
    };
    var debounced = function debounced2(...args) {
      if (signal?.aborted) {
        return;
      }
      pendingThis = this;
      pendingArgs = args;
      var isFirstCall = timeoutId == null;
      schedule();
      if (leading && isFirstCall) {
        invoke();
      }
    };
    debounced.schedule = schedule;
    debounced.cancel = cancel;
    debounced.flush = flush;
    signal?.addEventListener("abort", cancel, {
      once: true
    });
    return debounced;
  }
  var init_debounce = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/function/debounce.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/object/omit.mjs
  function omit(obj, keys) {
    var result = {
      ...obj
    };
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      delete result[key];
    }
    return result;
  }
  var init_omit = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/object/omit.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/predicate/isNotNil.mjs
  function isNotNil(x2) {
    return x2 != null;
  }
  var init_isNotNil = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/predicate/isNotNil.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/index.mjs
  var init_dist = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/index.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_debounce();
      init_omit();
      init_isNotNil();
    }
  });

  // src/metro/internals/enums.ts
  var ModuleFlags, ModulesMapInternal;
  var init_enums = __esm({
    "src/metro/internals/enums.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      (function(ModuleFlags2) {
        ModuleFlags2[ModuleFlags2["EXISTS"] = 1] = "EXISTS";
        ModuleFlags2[ModuleFlags2["BLACKLISTED"] = 2] = "BLACKLISTED";
        ModuleFlags2[ModuleFlags2["ASSET"] = 4] = "ASSET";
      })(ModuleFlags || (ModuleFlags = {}));
      (function(ModulesMapInternal2) {
        ModulesMapInternal2[ModulesMapInternal2["FULL_LOOKUP"] = 0] = "FULL_LOOKUP";
        ModulesMapInternal2[ModulesMapInternal2["NOT_FOUND"] = 1] = "NOT_FOUND";
      })(ModulesMapInternal || (ModulesMapInternal = {}));
    }
  });

  // src/lib/api/patcher.ts
  var patcher_exports = {};
  __export(patcher_exports, {
    _patcherDelaySymbol: () => _patcherDelaySymbol,
    after: () => after,
    before: () => before,
    default: () => patcher_default,
    instead: () => instead
  });
  function create(fn) {
    function patchFn(...args) {
      if (_patcherDelaySymbol in args[1]) {
        var delayCallback = args[1][_patcherDelaySymbol];
        var cancel = false;
        var unpatch = () => cancel = true;
        delayCallback((target) => {
          if (cancel)
            return;
          args[1] = target;
          unpatch = fn.apply(this, args);
        });
        return () => unpatch();
      }
      return fn.apply(this, args);
    }
    function promisePatchFn(...args) {
      var thenable = args[1];
      if (!thenable || !("then" in thenable))
        throw new Error("target is not a then-able object");
      var cancel = false;
      var unpatch = () => cancel = true;
      thenable.then((target) => {
        if (cancel)
          return;
        args[1] = target;
        unpatch = patchFn.apply(this, args);
      });
      return () => unpatch();
    }
    return Object.assign(patchFn, {
      await: promisePatchFn
    });
  }
  var _after, _before, _instead, _patcherDelaySymbol, after, before, instead, patcher_default;
  var init_patcher = __esm({
    "src/lib/api/patcher.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      ({ after: _after, before: _before, instead: _instead } = require_cjs());
      _patcherDelaySymbol = Symbol.for("bunny.api.patcher.delay");
      after = create(_after);
      before = create(_before);
      instead = create(_instead);
      patcher_default = {
        after,
        before,
        instead
      };
    }
  });

  // src/lib/api/assets/patches.ts
  var patches_exports = {};
  __export(patches_exports, {
    assetsModule: () => assetsModule,
    patchAssets: () => patchAssets
  });
  function patchAssets(module) {
    if (assetsModule)
      return;
    assetsModule = module;
    var unpatch = after("registerAsset", assetsModule, () => {
      var moduleId = getImportingModuleId();
      if (moduleId !== -1)
        indexAssetModuleFlag(moduleId);
    });
    return unpatch;
  }
  var assetsModule;
  var init_patches = __esm({
    "src/lib/api/assets/patches.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_caches();
      init_modules2();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_create_class.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var init_create_class = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_create_class.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_define_property.js
  function _define_property(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else
      obj[key] = value;
    return obj;
  }
  var init_define_property = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_define_property.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/core/vendetta/Emitter.ts
  var Events, Emitter;
  var init_Emitter = __esm({
    "src/core/vendetta/Emitter.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_call_check();
      init_create_class();
      init_define_property();
      (function(Events2) {
        Events2["GET"] = "GET";
        Events2["SET"] = "SET";
        Events2["DEL"] = "DEL";
      })(Events || (Events = {}));
      Emitter = /* @__PURE__ */ function() {
        "use strict";
        function Emitter2() {
          _class_call_check(this, Emitter2);
          _define_property(this, "listeners", Object.values(Events).reduce((acc, val) => (acc[val] = /* @__PURE__ */ new Set(), acc), {}));
        }
        _create_class(Emitter2, [
          {
            key: "on",
            value: function on(event, listener) {
              if (!this.listeners[event].has(listener))
                this.listeners[event].add(listener);
            }
          },
          {
            key: "off",
            value: function off(event, listener) {
              this.listeners[event].delete(listener);
            }
          },
          {
            key: "once",
            value: function once(event, listener) {
              var once2 = (event2, data) => {
                this.off(event2, once2);
                listener(event2, data);
              };
              this.on(event, once2);
            }
          },
          {
            key: "emit",
            value: function emit(event, data) {
              for (var listener of this.listeners[event])
                listener(event, data);
            }
          }
        ]);
        return Emitter2;
      }();
    }
  });

  // src/metro/factories.ts
  var factories_exports = {};
  __export(factories_exports, {
    createFilterDefinition: () => createFilterDefinition,
    createSimpleFilter: () => createSimpleFilter
  });
  function createFilterDefinition(fn, uniqMaker) {
    function createHolder(func, args, raw) {
      return Object.assign(func, {
        filter: fn,
        raw,
        uniq: [
          raw && "raw::",
          uniqMaker(args)
        ].filter(Boolean).join("")
      });
    }
    var curry = (raw) => (...args) => {
      return createHolder((m2, id, defaultCheck) => {
        return fn(args, m2, id, defaultCheck);
      }, args, raw);
    };
    return Object.assign(curry(false), {
      byRaw: curry(true),
      uniqMaker
    });
  }
  function createSimpleFilter(filter, uniq) {
    return createFilterDefinition((_2, m2) => filter(m2), () => `dynamic::${uniq}`)();
  }
  var init_factories = __esm({
    "src/metro/factories.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/metro/filters.ts
  var filters_exports = {};
  __export(filters_exports, {
    byDisplayName: () => byDisplayName,
    byFilePath: () => byFilePath,
    byMutableProp: () => byMutableProp,
    byName: () => byName,
    byProps: () => byProps,
    byStoreName: () => byStoreName,
    byTypeName: () => byTypeName
  });
  var byProps, byName, byDisplayName, byTypeName, byStoreName, byFilePath, byMutableProp;
  var init_filters = __esm({
    "src/metro/filters.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_factories();
      init_modules2();
      byProps = createFilterDefinition((props, m2) => props.length === 0 ? m2[props[0]] : props.every((p) => m2[p]), (props) => `bunny.metro.byProps(${props.join(",")})`);
      byName = createFilterDefinition(([name], m2) => m2.name === name, (name) => `bunny.metro.byName(${name})`);
      byDisplayName = createFilterDefinition(([displayName], m2) => m2.displayName === displayName, (name) => `bunny.metro.byDisplayName(${name})`);
      byTypeName = createFilterDefinition(([typeName], m2) => m2.type?.name === typeName, (name) => `bunny.metro.byTypeName(${name})`);
      byStoreName = createFilterDefinition(([name], m2) => m2.getName?.length === 0 && m2.getName() === name, (name) => `bunny.metro.byStoreName(${name})`);
      byFilePath = createFilterDefinition(
        // module return depends on defaultCheck. if true, it'll return module.default, otherwise the whole module
        // unlike filters like byName, defaultCheck doesn't affect the return since we don't rely on exports, but only its ID
        // one could say that this is technically a hack, since defaultCheck is meant for filtering exports
        ([path, exportDefault], _2, id, defaultCheck) => exportDefault === defaultCheck && metroModules[id]?.__filePath === path,
        ([path, exportDefault]) => `bunny.metro.byFilePath(${path},${exportDefault})`
      );
      byMutableProp = createFilterDefinition(([prop], m2) => m2?.[prop] && !Object.getOwnPropertyDescriptor(m2, prop)?.get, (prop) => `bunny.metro.byMutableProp(${prop})`);
    }
  });

  // src/metro/finders.ts
  function filterExports(moduleExports, moduleId, filter) {
    if (moduleExports.default && moduleExports.__esModule && filter(moduleExports.default, moduleId, true)) {
      return {
        exports: filter.raw ? moduleExports : moduleExports.default,
        defaultExport: !filter.raw
      };
    }
    if (!filter.raw && filter(moduleExports, moduleId, false)) {
      return {
        exports: moduleExports,
        defaultExport: false
      };
    }
    return {};
  }
  function findModule(filter) {
    var { cacheId, finish } = getCacherForUniq(filter.uniq, false);
    for (var [id, moduleExports] of getModules(filter.uniq, false)) {
      var { exports: testedExports, defaultExport } = filterExports(moduleExports, id, filter);
      if (testedExports !== void 0) {
        cacheId(id, testedExports);
        return {
          id,
          defaultExport
        };
      }
    }
    finish(true);
    return {};
  }
  function findModuleId(filter) {
    return findModule(filter)?.id;
  }
  function findExports(filter) {
    var { id, defaultExport } = findModule(filter);
    if (id == null)
      return;
    return defaultExport ? requireModule(id).default : requireModule(id);
  }
  function findAllModule(filter) {
    var { cacheId, finish } = getCacherForUniq(filter.uniq, true);
    var foundExports = [];
    for (var [id, moduleExports] of getModules(filter.uniq, true)) {
      var { exports: testedExports, defaultExport } = filterExports(moduleExports, id, filter);
      if (testedExports !== void 0 && typeof defaultExport === "boolean") {
        foundExports.push({
          id,
          defaultExport
        });
        cacheId(id, testedExports);
      }
    }
    finish(foundExports.length === 0);
    return foundExports;
  }
  function findAllModuleId(filter) {
    return findAllModule(filter).map((e) => e.id);
  }
  function findAllExports(filter) {
    return findAllModule(filter).map((ret) => {
      if (!ret.id)
        return;
      var { id, defaultExport } = ret;
      return defaultExport ? requireModule(id).default : requireModule(id);
    });
  }
  var init_finders = __esm({
    "src/metro/finders.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_modules2();
    }
  });

  // src/lib/utils/lazy.ts
  var lazy_exports = {};
  __export(lazy_exports, {
    getProxyFactory: () => getProxyFactory,
    lazyDestructure: () => lazyDestructure,
    proxyLazy: () => proxyLazy
  });
  function proxyLazy(factory, opts = {}) {
    var cache;
    var dummy = opts.hint !== "object" ? function dummy2() {
    } : {};
    var proxyFactory = () => cache ??= factory();
    var proxy = new Proxy(dummy, lazyHandler);
    factories.set(proxy, proxyFactory);
    proxyContextHolder.set(dummy, {
      factory,
      options: opts
    });
    return proxy;
  }
  function lazyDestructure(factory, opts = {}) {
    var proxiedObject = proxyLazy(factory);
    return new Proxy({}, {
      get(_2, property) {
        if (property === Symbol.iterator) {
          return function* () {
            yield proxiedObject;
            yield new Proxy({}, {
              get: (_3, p) => proxyLazy(() => proxiedObject[p], opts)
            });
            throw new Error("This is not a real iterator, this is likely used incorrectly");
          };
        }
        return proxyLazy(() => proxiedObject[property], opts);
      }
    });
  }
  function getProxyFactory(obj) {
    return factories.get(obj);
  }
  var unconfigurable, isUnconfigurable, factories, proxyContextHolder, lazyHandler;
  var init_lazy = __esm({
    "src/lib/utils/lazy.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      unconfigurable = /* @__PURE__ */ new Set([
        "arguments",
        "caller",
        "prototype"
      ]);
      isUnconfigurable = (key) => typeof key === "string" && unconfigurable.has(key);
      factories = /* @__PURE__ */ new WeakMap();
      proxyContextHolder = /* @__PURE__ */ new WeakMap();
      lazyHandler = {
        ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((fnName) => {
          return [
            fnName,
            (target, ...args) => {
              var contextHolder = proxyContextHolder.get(target);
              var resolved = contextHolder?.factory();
              if (!resolved)
                throw new Error(`Trying to Reflect.${fnName} of ${typeof resolved}`);
              return Reflect[fnName](resolved, ...args);
            }
          ];
        })),
        has(target, p) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries && p in isolatedEntries)
              return true;
          }
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.has of ${typeof resolved}`);
          return Reflect.has(resolved, p);
        },
        get(target, p, receiver) {
          if (false)
            return true;
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries?.[p])
              return isolatedEntries[p];
          }
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.get of ${typeof resolved}`);
          return Reflect.get(resolved, p, receiver);
        },
        ownKeys: (target) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.ownKeys of ${typeof resolved}`);
          var cacheKeys = Reflect.ownKeys(resolved);
          unconfigurable.forEach((key) => !cacheKeys.includes(key) && cacheKeys.push(key));
          return cacheKeys;
        },
        getOwnPropertyDescriptor: (target, p) => {
          if (isUnconfigurable(p))
            return Reflect.getOwnPropertyDescriptor(target, p);
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to getOwnPropertyDescriptor of ${typeof resolved}`);
          var descriptor = Reflect.getOwnPropertyDescriptor(resolved, p);
          if (descriptor)
            Object.defineProperty(target, p, descriptor);
          return descriptor;
        }
      };
    }
  });

  // src/metro/lazy.ts
  var lazy_exports2 = {};
  __export(lazy_exports2, {
    _lazyContextSymbol: () => _lazyContextSymbol,
    createLazyModule: () => createLazyModule,
    getLazyContext: () => getLazyContext
  });
  function getIndexedFind(filter) {
    var modulesMap = getMetroCache().findIndex[filter.uniq];
    if (!modulesMap)
      return void 0;
    for (var k in modulesMap)
      if (k[0] !== "_")
        return Number(k);
  }
  function subscribeLazyModule(proxy, callback) {
    var info = getLazyContext(proxy);
    if (!info)
      throw new Error("Subscribing a module for non-proxy-find");
    if (!info.indexed)
      throw new Error("Attempting to subscribe to a non-indexed find");
    return subscribeModule(info.moduleId, () => {
      callback(findExports(info.filter));
    });
  }
  function getLazyContext(proxy) {
    return _lazyContexts.get(proxy);
  }
  function createLazyModule(filter) {
    var cache = void 0;
    var moduleId = getIndexedFind(filter);
    var context = {
      filter,
      indexed: !!moduleId,
      moduleId,
      getExports(cb) {
        if (!moduleId || metroModules[moduleId]?.isInitialized) {
          cb(this.forceLoad());
          return () => void 0;
        }
        return this.subscribe(cb);
      },
      subscribe(cb) {
        return subscribeLazyModule(proxy, cb);
      },
      get cache() {
        return cache;
      },
      forceLoad() {
        cache ??= findExports(filter);
        if (!cache)
          throw new Error(`${filter.uniq} is ${typeof cache}! (id ${context.moduleId ?? "unknown"})`);
        return cache;
      }
    };
    var proxy = proxyLazy(() => context.forceLoad(), {
      exemptedEntries: {
        [_lazyContextSymbol]: context,
        [_patcherDelaySymbol]: (cb) => context.getExports(cb)
      }
    });
    _lazyContexts.set(proxy, context);
    return proxy;
  }
  var _lazyContextSymbol, _lazyContexts;
  var init_lazy2 = __esm({
    "src/metro/lazy.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_lazy();
      init_finders();
      init_caches();
      init_modules2();
      _lazyContextSymbol = Symbol.for("bunny.metro.lazyContext");
      _lazyContexts = /* @__PURE__ */ new WeakMap();
    }
  });

  // src/metro/wrappers.ts
  var findByProps, findByPropsLazy, findByPropsAll, findByName, findByNameLazy, findByNameAll, findByDisplayName, findByDisplayNameLazy, findByDisplayNameAll, findByTypeName, findByTypeNameLazy, findByTypeNameAll, findByStoreName, findByStoreNameLazy, findByFilePath, findByFilePathLazy;
  var init_wrappers = __esm({
    "src/metro/wrappers.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_filters();
      init_finders();
      init_lazy2();
      findByProps = (...props) => findExports(byProps(...props));
      findByPropsLazy = (...props) => createLazyModule(byProps(...props));
      findByPropsAll = (...props) => findAllExports(byProps(...props));
      findByName = (name, expDefault = true) => findExports(expDefault ? byName(name) : byName.byRaw(name));
      findByNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byName(name) : byName.byRaw(name));
      findByNameAll = (name, expDefault = true) => findAllExports(expDefault ? byName(name) : byName.byRaw(name));
      findByDisplayName = (name, expDefault = true) => findExports(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByDisplayNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByDisplayNameAll = (name, expDefault = true) => findAllExports(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByTypeName = (name, expDefault = true) => findExports(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByTypeNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByTypeNameAll = (name, expDefault = true) => findAllExports(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByStoreName = (name) => findExports(byStoreName(name));
      findByStoreNameLazy = (name) => createLazyModule(byStoreName(name));
      findByFilePath = (path, expDefault = false) => findExports(byFilePath(path, expDefault));
      findByFilePathLazy = (path, expDefault = false) => createLazyModule(byFilePath(path, expDefault));
    }
  });

  // shims/depsModule.ts
  var require_depsModule = __commonJS({
    "shims/depsModule.ts"(exports, module) {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      module.exports = {
        "react": findByPropsLazy("createElement"),
        "react-native": findByPropsLazy("AppRegistry"),
        "util": findByPropsLazy("inspect", "isNullOrUndefined"),
        "moment": findByPropsLazy("isMoment"),
        "chroma-js": findByPropsLazy("brewer"),
        "lodash": findByPropsLazy("forEachRight"),
        "@shopify/react-native-skia": findByPropsLazy("useFont")
      };
    }
  });

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["react-native"];
    }
  });

  // src/core/vendetta/storage.ts
  function createProxy(target = {}) {
    var emitter = new Emitter();
    var childrens = /* @__PURE__ */ new WeakMap();
    var proxiedChildrenSet = /* @__PURE__ */ new WeakSet();
    function createProxy1(target2, path) {
      return new Proxy(target2, {
        get(target3, prop) {
          if (prop === emitterSymbol)
            return emitter;
          var newPath = [
            ...path,
            prop
          ];
          var value = target3[prop];
          if (value !== void 0 && value !== null) {
            emitter.emit("GET", {
              path: newPath,
              value
            });
            if (typeof value === "object") {
              if (proxiedChildrenSet.has(value))
                return value;
              if (childrens.has(value))
                return childrens.get(value);
              var childrenProxy = createProxy1(value, newPath);
              childrens.set(value, childrenProxy);
              return childrenProxy;
            }
            return value;
          }
          return value;
        },
        set(target3, prop, value) {
          if (typeof value === "object") {
            if (childrens.has(value)) {
              target3[prop] = childrens.get(value);
            } else {
              var childrenProxy = createProxy1(value, [
                ...path,
                prop
              ]);
              childrens.set(value, childrenProxy);
              proxiedChildrenSet.add(value);
              target3[prop] = childrenProxy;
            }
          } else {
            target3[prop] = value;
          }
          emitter.emit("SET", {
            path: [
              ...path,
              prop
            ],
            value: target3[prop]
          });
          return true;
        },
        deleteProperty(target3, prop) {
          var value = typeof target3[prop] === "object" ? childrens.get(target3[prop]) : target3[prop];
          var success = delete target3[prop];
          if (success)
            emitter.emit("DEL", {
              value,
              path: [
                ...path,
                prop
              ]
            });
          return success;
        }
      });
    }
    return {
      proxy: createProxy1(target, []),
      emitter
    };
  }
  function useProxy(storage) {
    var emitter = storage?.[emitterSymbol];
    if (!emitter)
      throw new Error("storage?.[emitterSymbol] is undefined");
    var [, forceUpdate] = React.useReducer((n) => ~n, 0);
    React.useEffect(() => {
      var listener = (event, data) => {
        if (event === "DEL" && data.value === storage)
          return;
        forceUpdate();
      };
      emitter.on("SET", listener);
      emitter.on("DEL", listener);
      return () => {
        emitter.off("SET", listener);
        emitter.off("DEL", listener);
      };
    }, []);
    return storage;
  }
  function createStorage(backend) {
    return _createStorage.apply(this, arguments);
  }
  function _createStorage() {
    _createStorage = _async_to_generator(function* (backend) {
      var data = yield backend.get();
      var { proxy, emitter } = createProxy(data);
      var handler = () => backend.set(proxy);
      emitter.on("SET", handler);
      emitter.on("DEL", handler);
      return proxy;
    });
    return _createStorage.apply(this, arguments);
  }
  function wrapSync(store) {
    var awaited = void 0;
    var awaitQueue = [];
    var awaitInit = (cb) => awaited ? cb() : awaitQueue.push(cb);
    store.then((v2) => {
      awaited = v2;
      awaitQueue.forEach((cb) => cb());
    });
    return new Proxy({}, {
      ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((k) => [
        k,
        (t, ...a) => Reflect[k](awaited ?? t, ...a)
      ])),
      get(target, prop, recv) {
        if (prop === syncAwaitSymbol)
          return awaitInit;
        return Reflect.get(awaited ?? target, prop, recv);
      }
    });
  }
  function awaitStorage(...stores) {
    return Promise.all(stores.map((store) => new Promise((res) => store[syncAwaitSymbol](res))));
  }
  var import_react_native, emitterSymbol, syncAwaitSymbol, ILLEGAL_CHARS_REGEX, filePathFixer, getMMKVPath, purgeStorage, createMMKVBackend, createFileBackend;
  var init_storage = __esm({
    "src/core/vendetta/storage.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_Emitter();
      init_modules();
      import_react_native = __toESM(require_react_native());
      emitterSymbol = Symbol.for("vendetta.storage.emitter");
      syncAwaitSymbol = Symbol.for("vendetta.storage.accessor");
      ILLEGAL_CHARS_REGEX = /[<>:"/\\|?*]/g;
      filePathFixer = (file) => import_react_native.Platform.select({
        default: file,
        ios: NativeFileModule.saveFileToGallery ? file : `Documents/${file}`
      });
      getMMKVPath = (name) => {
        if (ILLEGAL_CHARS_REGEX.test(name)) {
          name = name.replace(ILLEGAL_CHARS_REGEX, "-").replace(/-+/g, "-");
        }
        return `vd_mmkv/${name}`;
      };
      purgeStorage = /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (store) {
          if (yield NativeCacheModule.getItem(store)) {
            NativeCacheModule.removeItem(store);
          }
          var mmkvPath = getMMKVPath(store);
          if (yield NativeFileModule.fileExists(`${NativeFileModule.getConstants().DocumentsDirPath}/${mmkvPath}`)) {
            yield NativeFileModule.removeFile?.("documents", mmkvPath);
          }
        });
        return function purgeStorage3(store) {
          return _ref.apply(this, arguments);
        };
      }();
      createMMKVBackend = (store, defaultData = {}) => {
        var mmkvPath = getMMKVPath(store);
        var defaultStr = JSON.stringify(defaultData);
        return createFileBackend(mmkvPath, defaultData, _async_to_generator(function* () {
          var path = `${NativeFileModule.getConstants().DocumentsDirPath}/${mmkvPath}`;
          if (yield NativeFileModule.fileExists(path))
            return;
          var oldData = (yield NativeCacheModule.getItem(store)) ?? defaultStr;
          if (oldData === "!!LARGE_VALUE!!") {
            var cachePath = `${NativeFileModule.getConstants().CacheDirPath}/mmkv/${store}`;
            if (yield NativeFileModule.fileExists(cachePath)) {
              oldData = yield NativeFileModule.readFile(cachePath, "utf8");
            } else {
              console.log(`${store}: Experienced data loss :(`);
              oldData = defaultStr;
            }
          }
          try {
            JSON.parse(oldData);
          } catch (e) {
            console.error(`${store} had an unparseable data while migrating`);
            oldData = defaultStr;
          }
          yield NativeFileModule.writeFile("documents", filePathFixer(mmkvPath), oldData, "utf8");
          if ((yield NativeCacheModule.getItem(store)) !== null) {
            NativeCacheModule.removeItem(store);
            console.log(`Successfully migrated ${store} store from MMKV storage to fs`);
          }
        })());
      };
      createFileBackend = (file, defaultData = {}, migratePromise) => {
        return {
          get: /* @__PURE__ */ _async_to_generator(function* () {
            yield migratePromise;
            var path = `${NativeFileModule.getConstants().DocumentsDirPath}/${file}`;
            if (yield NativeFileModule.fileExists(path)) {
              var content = yield NativeFileModule.readFile(path, "utf8");
              try {
                return JSON.parse(content);
              } catch (e) {
              }
            }
            yield NativeFileModule.writeFile("documents", filePathFixer(file), JSON.stringify(defaultData), "utf8");
            return JSON.parse(yield NativeFileModule.readFile(path, "utf8"));
          }),
          set: /* @__PURE__ */ function() {
            var _ref = _async_to_generator(function* (data) {
              yield migratePromise;
              yield NativeFileModule.writeFile("documents", filePathFixer(file), JSON.stringify(data), "utf8");
            });
            return function(data) {
              return _ref.apply(this, arguments);
            };
          }()
        };
      };
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
  function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get)
      return descriptor.get.call(receiver);
    return descriptor.value;
  }
  var init_class_apply_descriptor_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
  function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver))
      throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
  }
  var init_class_extract_field_descriptor = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_get.js
  function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
  }
  var init_class_private_field_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_apply_descriptor_get();
      init_class_extract_field_descriptor();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_check_private_redeclaration.js
  function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  var init_check_private_redeclaration = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_check_private_redeclaration.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_init.js
  function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  var init_class_private_field_init = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_init.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_check_private_redeclaration();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
  function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set)
      descriptor.set.call(receiver, value);
    else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  var init_class_apply_descriptor_set = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_set.js
  function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
  }
  var init_class_private_field_set = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_set.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_apply_descriptor_set();
      init_class_extract_field_descriptor();
    }
  });

  // node_modules/.pnpm/@gullerya+object-observer@6.1.3/node_modules/@gullerya/object-observer/dist/object-observer.min.js
  var m, x, E, T, K, c, $, N, Y, I, B, D, R, z, y, g, q, H, G, J, F, P, L, C, Q, X, Z, _, b, S, V, U, W, v;
  var init_object_observer_min = __esm({
    "node_modules/.pnpm/@gullerya+object-observer@6.1.3/node_modules/@gullerya/object-observer/dist/object-observer.min.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      m = "insert";
      x = "update";
      E = "delete";
      T = "reverse";
      K = "shuffle";
      c = Symbol.for("object-observer-meta-key-0");
      $ = {
        async: 1
      };
      N = (o) => {
        if (!o || typeof o != "object")
          return null;
        var t = {}, e = [];
        for (var [r, n] of Object.entries(o))
          if (r === "path") {
            if (typeof n != "string" || n === "")
              throw new Error('"path" option, if/when provided, MUST be a non-empty string');
            t[r] = n;
          } else if (r === "pathsOf") {
            if (o.path)
              throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');
            if (typeof n != "string")
              throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');
            t[r] = o.pathsOf.split(".").filter(Boolean);
          } else if (r === "pathsFrom") {
            if (o.path || o.pathsOf)
              throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');
            if (typeof n != "string" || n === "")
              throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');
            t[r] = n;
          } else
            e.push(r);
        if (e.length)
          throw new Error(`'${e.join(", ")}' is/are not a valid observer option/s`);
        return t;
      };
      Y = (o, t, e) => {
        var r = {};
        r[c] = t;
        for (var n in o)
          r[n] = g(o[n], n, t, e);
        return r;
      };
      I = (o, t, e) => {
        var r = o.length;
        var n = new Array(r);
        n[c] = t;
        for (var i = 0; i < r; i++)
          n[i] = g(o[i], i, t, e);
        return n;
      };
      B = (o, t) => (o[c] = t, o);
      D = (o, t) => {
        if (o === null)
          return t;
        var e = t;
        if (o.path) {
          var r = o.path;
          e = t.filter((n2) => n2.path.join(".") === r);
        } else if (o.pathsOf) {
          var r1 = o.pathsOf, n = r1.join(".");
          e = t.filter((i) => (i.path.length === r1.length + 1 || i.path.length === r1.length && (i.type === T || i.type === K)) && i.path.join(".").startsWith(n));
        } else if (o.pathsFrom) {
          var r2 = o.pathsFrom;
          e = t.filter((n2) => n2.path.join(".").startsWith(r2));
        }
        return e;
      };
      R = (o, t) => {
        try {
          o(t);
        } catch (e) {
          console.error(`failed to notify listener ${o} with ${t}`, e);
        }
      };
      z = function z2() {
        var t = this.batches;
        this.batches = [];
        for (var [e, r] of t)
          R(e, r);
      };
      y = (o, t) => {
        var e = o, r, n, i, l, h, s;
        var u = t.length;
        do {
          for (r = e.options.async, n = e.observers, s = n.length; s--; )
            if ([i, l] = n[s], h = D(l, t), h.length)
              if (r) {
                e.batches.length === 0 && queueMicrotask(z.bind(e));
                var a = void 0;
                for (var p of e.batches)
                  if (p[0] === i) {
                    a = p;
                    break;
                  }
                a || (a = [
                  i,
                  []
                ], e.batches.push(a)), Array.prototype.push.apply(a[1], h);
              } else
                R(i, h);
          var f = e.parent;
          if (f) {
            for (var a1 = 0; a1 < u; a1++) {
              var p1 = t[a1];
              t[a1] = new b(p1.type, [
                e.ownKey,
                ...p1.path
              ], p1.value, p1.oldValue, p1.object);
            }
            e = f;
          } else
            e = null;
        } while (e);
      };
      g = (o, t, e, r) => r !== void 0 && r.has(o) ? null : typeof o != "object" || o === null ? o : Array.isArray(o) ? new U({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy : ArrayBuffer.isView(o) ? new W({
        target: o,
        ownKey: t,
        parent: e
      }).proxy : o instanceof Date ? o : new V({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy;
      q = function q2() {
        var t = this[c], e = t.target, r = e.length - 1;
        var n = e.pop();
        if (n && typeof n == "object") {
          var l = n[c];
          l && (n = l.detach());
        }
        var i = [
          new b(E, [
            r
          ], void 0, n, this)
        ];
        return y(t, i), n;
      };
      H = function H2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var s = 0; s < r; s++)
          n[s] = g(arguments[s], i + s, t);
        var l = Reflect.apply(e.push, e, n), h = [];
        for (var s1 = i, u = e.length; s1 < u; s1++)
          h[s1 - i] = new b(m, [
            s1
          ], e[s1], void 0, this);
        return y(t, h), l;
      };
      G = function G2() {
        var t = this[c], e = t.target;
        var r, n, i, l, h;
        for (r = e.shift(), r && typeof r == "object" && (h = r[c], h && (r = h.detach())), n = 0, i = e.length; n < i; n++)
          l = e[n], l && typeof l == "object" && (h = l[c], h && (h.ownKey = n));
        var s = [
          new b(E, [
            0
          ], void 0, r, this)
        ];
        return y(t, s), r;
      };
      J = function J2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r);
        for (var s = 0; s < r; s++)
          n[s] = g(arguments[s], s, t);
        var i = Reflect.apply(e.unshift, e, n);
        for (var s1 = 0, u = e.length, f; s1 < u; s1++)
          if (f = e[s1], f && typeof f == "object") {
            var a = f[c];
            a && (a.ownKey = s1);
          }
        var l = n.length, h = new Array(l);
        for (var s2 = 0; s2 < l; s2++)
          h[s2] = new b(m, [
            s2
          ], e[s2], void 0, this);
        return y(t, h), i;
      };
      F = function F2() {
        var t = this[c], e = t.target;
        var r, n, i;
        for (e.reverse(), r = 0, n = e.length; r < n; r++)
          if (i = e[r], i && typeof i == "object") {
            var h = i[c];
            h && (h.ownKey = r);
          }
        var l = [
          new b(T, [], void 0, void 0, this)
        ];
        return y(t, l), this;
      };
      P = function P2(t) {
        var e = this[c], r = e.target;
        var n, i, l;
        for (r.sort(t), n = 0, i = r.length; n < i; n++)
          if (l = r[n], l && typeof l == "object") {
            var s = l[c];
            s && (s.ownKey = n);
          }
        var h = [
          new b(K, [], void 0, void 0, this)
        ];
        return y(e, h), this;
      };
      L = function L2(t, e, r) {
        var n = this[c], i = n.target, l = [], h = i.length, s = i.slice(0);
        if (e = e === void 0 ? 0 : e < 0 ? Math.max(h + e, 0) : Math.min(e, h), r = r === void 0 ? h : r < 0 ? Math.max(h + r, 0) : Math.min(r, h), e < h && r > e) {
          i.fill(t, e, r);
          var u;
          for (var f = e, a, p; f < r; f++)
            a = i[f], i[f] = g(a, f, n), f in s ? (p = s[f], p && typeof p == "object" && (u = p[c], u && (p = u.detach())), l.push(new b(x, [
              f
            ], i[f], p, this))) : l.push(new b(m, [
              f
            ], i[f], void 0, this));
          y(n, l);
        }
        return this;
      };
      C = function C2(t, e, r) {
        var n = this[c], i = n.target, l = i.length;
        t = t < 0 ? Math.max(l + t, 0) : t, e = e === void 0 ? 0 : e < 0 ? Math.max(l + e, 0) : Math.min(e, l), r = r === void 0 ? l : r < 0 ? Math.max(l + r, 0) : Math.min(r, l);
        var h = Math.min(r - e, l - t);
        if (t < l && t !== e && h > 0) {
          var s = i.slice(0), u = [];
          i.copyWithin(t, e, r);
          for (var f = t, a, p, O; f < t + h; f++)
            a = i[f], a && typeof a == "object" && (a = g(a, f, n), i[f] = a), p = s[f], p && typeof p == "object" && (O = p[c], O && (p = O.detach())), !(typeof a != "object" && a === p) && u.push(new b(x, [
              f
            ], a, p, this));
          y(n, u);
        }
        return this;
      };
      Q = function Q2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var w = 0; w < r; w++)
          n[w] = g(arguments[w], w, t);
        var l = r === 0 ? 0 : n[0] < 0 ? i + n[0] : n[0], h = r < 2 ? i - l : n[1], s = Math.max(r - 2, 0), u = Reflect.apply(e.splice, e, n), f = e.length;
        var a;
        for (var w1 = 0, A; w1 < f; w1++)
          A = e[w1], A && typeof A == "object" && (a = A[c], a && (a.ownKey = w1));
        var p, O, j;
        for (p = 0, O = u.length; p < O; p++)
          j = u[p], j && typeof j == "object" && (a = j[c], a && (u[p] = a.detach()));
        var M = [];
        var d;
        for (d = 0; d < h; d++)
          d < s ? M.push(new b(x, [
            l + d
          ], e[l + d], u[d], this)) : M.push(new b(E, [
            l + d
          ], void 0, u[d], this));
        for (; d < s; d++)
          M.push(new b(m, [
            l + d
          ], e[l + d], void 0, this));
        return y(t, M), u;
      };
      X = function X2(t, e) {
        var r = this[c], n = r.target, i = t.length, l = n.slice(0);
        e = e || 0, n.set(t, e);
        var h = new Array(i);
        for (var s = e; s < i + e; s++)
          h[s - e] = new b(x, [
            s
          ], n[s], l[s], this);
        y(r, h);
      };
      Z = {
        pop: q,
        push: H,
        shift: G,
        unshift: J,
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        splice: Q
      };
      _ = {
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        set: X
      };
      b = function b2(t, e, r, n, i) {
        "use strict";
        _class_call_check(this, b2);
        this.type = t, this.path = e, this.value = r, this.oldValue = n, this.object = i;
      };
      S = /* @__PURE__ */ function() {
        "use strict";
        function S2(t, e) {
          _class_call_check(this, S2);
          var { target: r, parent: n, ownKey: i, visited: l = /* @__PURE__ */ new Set() } = t;
          n && i !== void 0 ? (this.parent = n, this.ownKey = i) : (this.parent = null, this.ownKey = null), l.add(r);
          var h = e(r, this, l);
          l.delete(r), this.observers = [], this.revocable = Proxy.revocable(h, this), this.proxy = this.revocable.proxy, this.target = h, this.options = this.processOptions(t.options), this.options.async && (this.batches = []);
        }
        _create_class(S2, [
          {
            key: "processOptions",
            value: function processOptions(t) {
              if (t) {
                if (typeof t != "object")
                  throw new Error(`Observable options if/when provided, MAY only be an object, got '${t}'`);
                var e = Object.keys(t).filter((r) => !(r in $));
                if (e.length)
                  throw new Error(`'${e.join(", ")}' is/are not a valid Observable option/s`);
                return Object.assign({}, t);
              } else
                return {};
            }
          },
          {
            key: "detach",
            value: function detach() {
              return this.parent = null, this.target;
            }
          },
          {
            key: "set",
            value: function set(t, e, r) {
              var n = t[e];
              if (r !== n) {
                var i = g(r, e, this);
                if (t[e] = i, n && typeof n == "object") {
                  var h = n[c];
                  h && (n = h.detach());
                }
                var l = n === void 0 ? [
                  new b(m, [
                    e
                  ], i, void 0, this.proxy)
                ] : [
                  new b(x, [
                    e
                  ], i, n, this.proxy)
                ];
                y(this, l);
              }
              return true;
            }
          },
          {
            key: "deleteProperty",
            value: function deleteProperty(t, e) {
              var r = t[e];
              if (delete t[e], r && typeof r == "object") {
                var i = r[c];
                i && (r = i.detach());
              }
              var n = [
                new b(E, [
                  e
                ], void 0, r, this.proxy)
              ];
              return y(this, n), true;
            }
          }
        ]);
        return S2;
      }();
      V = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(V2, S2);
        function V2(t) {
          _class_call_check(this, V2);
          return _call_super(this, V2, [
            t,
            Y
          ]);
        }
        return V2;
      }(S);
      U = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(U2, S2);
        function U2(t) {
          _class_call_check(this, U2);
          return _call_super(this, U2, [
            t,
            I
          ]);
        }
        _create_class(U2, [
          {
            key: "get",
            value: function get(t, e) {
              return Z[e] || t[e];
            }
          }
        ]);
        return U2;
      }(S);
      W = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(W2, S2);
        function W2(t) {
          _class_call_check(this, W2);
          return _call_super(this, W2, [
            t,
            B
          ]);
        }
        _create_class(W2, [
          {
            key: "get",
            value: function get(t, e) {
              return _[e] || t[e];
            }
          }
        ]);
        return W2;
      }(S);
      v = Object.freeze({
        from: (o, t) => {
          if (!o || typeof o != "object")
            throw new Error("observable MAY ONLY be created from a non-null object");
          if (o[c])
            return o;
          if (Array.isArray(o))
            return new U({
              target: o,
              ownKey: null,
              parent: null,
              options: t
            }).proxy;
          if (ArrayBuffer.isView(o))
            return new W({
              target: o,
              ownKey: null,
              parent: null,
              options: t
            }).proxy;
          if (o instanceof Date)
            throw new Error(`${o} found to be one of a non-observable types`);
          return new V({
            target: o,
            ownKey: null,
            parent: null,
            options: t
          }).proxy;
        },
        isObservable: (o) => !!(o && o[c]),
        observe: (o, t, e) => {
          if (!v.isObservable(o))
            throw new Error("invalid observable parameter");
          if (typeof t != "function")
            throw new Error(`observer MUST be a function, got '${t}'`);
          var r = o[c].observers;
          r.some((n) => n[0] === t) ? console.warn("observer may be bound to an observable only once; will NOT rebind") : r.push([
            t,
            N(e)
          ]);
        },
        unobserve: (o, ...t) => {
          if (!v.isObservable(o))
            throw new Error("invalid observable parameter");
          var e = o[c].observers;
          var r = e.length;
          if (r) {
            if (!t.length) {
              e.splice(0);
              return;
            }
            for (; r; )
              t.indexOf(e[--r][0]) >= 0 && e.splice(r, 1);
          }
        }
      });
    }
  });

  // src/lib/api/storage/index.ts
  var storage_exports = {};
  __export(storage_exports, {
    awaitStorage: () => awaitStorage2,
    createStorage: () => createStorage2,
    createStorageAndCallback: () => createStorageAndCallback,
    createStorageAsync: () => createStorageAsync,
    getPreloadedStorage: () => getPreloadedStorage,
    preloadStorageIfExists: () => preloadStorageIfExists,
    purgeStorage: () => purgeStorage2,
    updateStorage: () => updateStorage,
    useObservable: () => useObservable
  });
  function createFileBackend2(filePath) {
    var write = debounce((data) => {
      writeFile(filePath, JSON.stringify(data));
    }, 500);
    return {
      get: /* @__PURE__ */ _async_to_generator(function* () {
        try {
          return JSON.parse(yield readFile(filePath));
        } catch (e) {
          throw new Error(`Failed to parse storage from '${filePath}'`, {
            cause: e
          });
        }
      }),
      set: /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (data) {
          if (!data || typeof data !== "object") {
            throw new Error("data needs to be an object");
          }
          write(data);
        });
        return function(data) {
          return _ref.apply(this, arguments);
        };
      }(),
      exists: /* @__PURE__ */ _async_to_generator(function* () {
        return yield fileExists(filePath);
      })
    };
  }
  function useObservable(observables, opts) {
    if (observables.some((o) => o?.[storageInitErrorSymbol]))
      throw new Error("An error occured while initializing the storage");
    if (observables.some((o) => !v.isObservable(o))) {
      throw new Error("Argument passed isn't an Observable");
    }
    var [, forceUpdate] = React.useReducer((n) => ~n, 0);
    React.useEffect(() => {
      var listener = () => forceUpdate();
      observables.forEach((o) => v.observe(o, listener, opts));
      return () => {
        observables.forEach((o) => v.unobserve(o, listener));
      };
    }, []);
  }
  function updateStorage(path, value) {
    return _updateStorage.apply(this, arguments);
  }
  function _updateStorage() {
    _updateStorage = _async_to_generator(function* (path, value) {
      _loadedStorage[path] = value;
      createFileBackend2(path).set(value);
    });
    return _updateStorage.apply(this, arguments);
  }
  function createStorageAndCallback(path, cb, { dflt = {}, nullIfEmpty = false } = {}) {
    var emitter;
    var callback = (data) => {
      var proxy = new Proxy(v.from(data), {
        get(target, prop, receiver) {
          if (prop === Symbol.for("vendetta.storage.emitter")) {
            if (emitter)
              return emitter;
            emitter = new Emitter();
            v.observe(target, (changes) => {
              for (var change of changes) {
                emitter.emit(change.type !== "delete" ? "SET" : "DEL", {
                  path: change.path,
                  value: change.value
                });
              }
            });
            return emitter;
          }
          return Reflect.get(target, prop, receiver);
        }
      });
      var handler = () => backend.set(proxy);
      v.observe(proxy, handler);
      cb(proxy);
    };
    var backend = createFileBackend2(path);
    if (_loadedStorage[path]) {
      callback(_loadedStorage[path]);
    } else {
      backend.exists().then(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (exists) {
          if (!exists) {
            if (nullIfEmpty) {
              callback(_loadedStorage[path] = null);
            } else {
              _loadedStorage[path] = dflt;
              yield backend.set(dflt);
              callback(dflt);
            }
          } else {
            callback(_loadedStorage[path] = yield backend.get());
          }
        });
        return function(exists) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
  function createStorageAsync(path) {
    return _createStorageAsync.apply(this, arguments);
  }
  function _createStorageAsync() {
    _createStorageAsync = _async_to_generator(function* (path, opts = {}) {
      return new Promise((r) => createStorageAndCallback(path, r, opts));
    });
    return _createStorageAsync.apply(this, arguments);
  }
  function preloadStorageIfExists(path) {
    return _preloadStorageIfExists.apply(this, arguments);
  }
  function _preloadStorageIfExists() {
    _preloadStorageIfExists = _async_to_generator(function* (path) {
      if (_loadedStorage[path])
        return true;
      var backend = createFileBackend2(path);
      if (yield backend.exists()) {
        _loadedStorage[path] = yield backend.get();
        return true;
      }
      return false;
    });
    return _preloadStorageIfExists.apply(this, arguments);
  }
  function purgeStorage2(path) {
    return _purgeStorage.apply(this, arguments);
  }
  function _purgeStorage() {
    _purgeStorage = _async_to_generator(function* (path) {
      yield removeFile(path);
      delete _loadedStorage[path];
    });
    return _purgeStorage.apply(this, arguments);
  }
  function awaitStorage2(...proxies) {
    return Promise.all(proxies.map((proxy) => proxy[storagePromiseSymbol]));
  }
  function getPreloadedStorage(path) {
    return _loadedStorage[path];
  }
  var storageInitErrorSymbol, storagePromiseSymbol, _loadedStorage, createStorage2;
  var init_storage2 = __esm({
    "src/lib/api/storage/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_Emitter();
      init_object_observer_min();
      init_fs();
      init_dist();
      storageInitErrorSymbol = Symbol.for("bunny.storage.initError");
      storagePromiseSymbol = Symbol.for("bunny.storage.promise");
      _loadedStorage = {};
      createStorage2 = (path, opts = {}) => {
        var promise = new Promise((r) => resolvePromise = r);
        var awaited, resolved, error, resolvePromise;
        createStorageAndCallback(path, (proxy) => {
          awaited = proxy;
          resolved = true;
          resolvePromise();
        }, opts);
        var check = () => {
          if (resolved)
            return true;
          throw new Error(`Attempted to access storage without initializing: ${path}`);
        };
        return new Proxy({}, {
          ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((k) => [
            k,
            (t, ...a) => {
              return check() && Reflect[k](awaited, ...a);
            }
          ])),
          get(target, prop, recv) {
            if (prop === storageInitErrorSymbol)
              return error;
            if (prop === storagePromiseSymbol)
              return promise;
            return check() && Reflect.get(awaited ?? target, prop, recv);
          }
        });
      };
    }
  });

  // src/lib/utils/constants.ts
  var constants_exports = {};
  __export(constants_exports, {
    BUNNY_PROXY_PREFIX: () => BUNNY_PROXY_PREFIX,
    DISCORD_SERVER: () => DISCORD_SERVER,
    GITHUB: () => GITHUB,
    HTTP_REGEX: () => HTTP_REGEX,
    HTTP_REGEX_MULTI: () => HTTP_REGEX_MULTI,
    OFFICIAL_PLUGINS_REPO_URL: () => OFFICIAL_PLUGINS_REPO_URL,
    VD_DISCORD_SERVER_ID: () => VD_DISCORD_SERVER_ID,
    VD_PLUGINS_CHANNEL_ID: () => VD_PLUGINS_CHANNEL_ID,
    VD_PROXY_PREFIX: () => VD_PROXY_PREFIX,
    VD_THEMES_CHANNEL_ID: () => VD_THEMES_CHANNEL_ID
  });
  var DISCORD_SERVER, GITHUB, HTTP_REGEX, HTTP_REGEX_MULTI, BUNNY_PROXY_PREFIX, OFFICIAL_PLUGINS_REPO_URL, VD_PROXY_PREFIX, VD_DISCORD_SERVER_ID, VD_PLUGINS_CHANNEL_ID, VD_THEMES_CHANNEL_ID;
  var init_constants = __esm({
    "src/lib/utils/constants.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      DISCORD_SERVER = "https://discord.gg/XjYgWXHb9Q";
      GITHUB = "https://github.com/bunny-mod";
      HTTP_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
      HTTP_REGEX_MULTI = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
      BUNNY_PROXY_PREFIX = "https://bn-plugins.github.io/vd-proxy";
      OFFICIAL_PLUGINS_REPO_URL = "https://bn-plugins.github.io/dist/repo.json";
      VD_PROXY_PREFIX = "https://vd-plugins.github.io/proxy";
      VD_DISCORD_SERVER_ID = "1015931589865246730";
      VD_PLUGINS_CHANNEL_ID = "1091880384561684561";
      VD_THEMES_CHANNEL_ID = "1091880434939482202";
    }
  });

  // src/lib/utils/cyrb64.ts
  function cyrb64(str, seed = 0) {
    var h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
    for (var i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
    h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
    h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return [
      h2 >>> 0,
      h1 >>> 0
    ];
  }
  function cyrb64Hash(str, seed = 0) {
    var [h2, h1] = cyrb64(str, seed);
    return h2.toString(36).padStart(7, "0") + h1.toString(36).padStart(7, "0");
  }
  var init_cyrb64 = __esm({
    "src/lib/utils/cyrb64.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/findInReactTree.ts
  function findInReactTree(tree, filter) {
    return findInTree(tree, filter, {
      walkable: [
        "props",
        "children",
        "child",
        "sibling"
      ]
    });
  }
  var init_findInReactTree = __esm({
    "src/lib/utils/findInReactTree.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_utils();
    }
  });

  // src/lib/utils/findInTree.ts
  function treeSearch(tree, filter, opts, depth) {
    if (depth > opts.maxDepth)
      return;
    if (!tree)
      return;
    try {
      if (filter(tree))
        return tree;
    } catch (e) {
    }
    if (Array.isArray(tree)) {
      for (var item of tree) {
        if (typeof item !== "object" || item === null)
          continue;
        try {
          var found = treeSearch(item, filter, opts, depth + 1);
          if (found)
            return found;
        } catch (e) {
        }
      }
    } else if (typeof tree === "object") {
      for (var key of Object.keys(tree)) {
        if (typeof tree[key] !== "object" || tree[key] === null)
          continue;
        if (opts.walkable.length && !opts.walkable.includes(key))
          continue;
        if (opts.ignore.includes(key))
          continue;
        try {
          var found1 = treeSearch(tree[key], filter, opts, depth + 1);
          if (found1)
            return found1;
        } catch (e) {
        }
      }
    }
  }
  function findInTree(tree, filter, { walkable = [], ignore = [], maxDepth = 100 } = {}) {
    return treeSearch(tree, filter, {
      walkable,
      ignore,
      maxDepth
    }, 0);
  }
  var init_findInTree = __esm({
    "src/lib/utils/findInTree.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/hookDefineProperty.ts
  function hookDefineProperty(target, property, cb) {
    var targetAsAny = target;
    if (property in target) {
      return void cb(targetAsAny[property]);
    }
    var value;
    Object.defineProperty(targetAsAny, property, {
      get: () => value,
      set(v2) {
        value = cb(v2) ?? v2;
      },
      configurable: true,
      enumerable: false
    });
    return () => {
      delete targetAsAny[property];
      targetAsAny[property] = value;
    };
  }
  var init_hookDefineProperty = __esm({
    "src/lib/utils/hookDefineProperty.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/invariant.ts
  function invariant(condition, message) {
    if (condition)
      return;
    var resolvedMessage = typeof message === "function" ? message() : message;
    var prefix = "[Invariant Violation]";
    var value = resolvedMessage ? `${prefix}: ${resolvedMessage}` : prefix;
    throw new Error(value);
  }
  var init_invariant = __esm({
    "src/lib/utils/invariant.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/logger.ts
  var logger_exports = {};
  __export(logger_exports, {
    LoggerClass: () => LoggerClass,
    logger: () => logger
  });
  var LoggerClass, logger;
  var init_logger = __esm({
    "src/lib/utils/logger.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      LoggerClass = findByNameLazy("Logger");
      logger = new LoggerClass("Bunny");
    }
  });

  // src/lib/utils/safeFetch.ts
  function safeFetch(input, options) {
    return _safeFetch.apply(this, arguments);
  }
  function _safeFetch() {
    _safeFetch = _async_to_generator(function* (input, options, timeout = 1e4) {
      var req = yield fetch(input, {
        signal: timeoutSignal(timeout),
        ...options
      });
      if (!req.ok)
        throw new Error(`Request returned non-ok: ${req.status} ${req.statusText}`);
      return req;
    });
    return _safeFetch.apply(this, arguments);
  }
  function timeoutSignal(ms) {
    var controller = new AbortController();
    setTimeout(() => controller.abort(`Timed out after ${ms}ms`), ms);
    return controller.signal;
  }
  var init_safeFetch = __esm({
    "src/lib/utils/safeFetch.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
    }
  });

  // src/lib/utils/index.ts
  var utils_exports = {};
  __export(utils_exports, {
    constants: () => constants_exports,
    cyrb64: () => cyrb64,
    findInReactTree: () => findInReactTree,
    findInTree: () => findInTree,
    hookDefineProperty: () => hookDefineProperty,
    invariant: () => invariant,
    lazy: () => lazy_exports,
    logger: () => logger_exports,
    safeFetch: () => safeFetch
  });
  var init_utils = __esm({
    "src/lib/utils/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_constants();
      init_cyrb64();
      init_findInReactTree();
      init_findInTree();
      init_hookDefineProperty();
      init_invariant();
      init_lazy();
      init_logger();
      init_safeFetch();
    }
  });

  // shims/jsxRuntime.ts
  var jsxRuntime_exports = {};
  __export(jsxRuntime_exports, {
    Fragment: () => Fragment,
    jsx: () => jsx,
    jsxs: () => jsxs
  });
  function unproxyFirstArg(args) {
    if (!args[0]) {
      throw new Error("The first argument (Component) is falsy. Ensure that you are passing a valid component.");
    }
    var factory = getProxyFactory(args[0]);
    if (factory)
      args[0] = factory();
    return args;
  }
  var jsxRuntime, Fragment, jsx, jsxs;
  var init_jsxRuntime = __esm({
    "shims/jsxRuntime.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      jsxRuntime = findByPropsLazy("jsx", "jsxs", "Fragment");
      Fragment = Symbol.for("react.fragment");
      jsx = (...args) => jsxRuntime.jsx(...unproxyFirstArg(args));
      jsxs = (...args) => jsxRuntime.jsxs(...unproxyFirstArg(args));
    }
  });

  // src/lib/addons/themes/colors/preferences.ts
  var colorsPref;
  var init_preferences = __esm({
    "src/lib/addons/themes/colors/preferences.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_storage2();
      colorsPref = createStorage2("themes/colors/preferences.json", {
        dflt: {
          selected: null,
          customBackground: null
        }
      });
    }
  });

  // src/metro/common/components.ts
  var components_exports = {};
  __export(components_exports, {
    ActionSheet: () => ActionSheet,
    ActionSheetRow: () => ActionSheetRow,
    AlertActionButton: () => AlertActionButton,
    AlertActions: () => AlertActions,
    AlertModal: () => AlertModal,
    Avatar: () => Avatar,
    AvatarPile: () => AvatarPile,
    BottomSheetTitleHeader: () => BottomSheetTitleHeader,
    Button: () => Button,
    Card: () => Card,
    CompatButton: () => CompatButton,
    CompatSegmentedControl: () => CompatSegmentedControl,
    ContextMenu: () => ContextMenu,
    FlashList: () => FlashList,
    FloatingActionButton: () => FloatingActionButton,
    FormCheckbox: () => FormCheckbox,
    FormRadio: () => FormRadio,
    FormSwitch: () => FormSwitch,
    Forms: () => Forms,
    HelpMessage: () => HelpMessage,
    IconButton: () => IconButton,
    LegacyAlert: () => LegacyAlert,
    LegacyForm: () => LegacyForm,
    LegacyFormArrow: () => LegacyFormArrow,
    LegacyFormCTA: () => LegacyFormCTA,
    LegacyFormCTAButton: () => LegacyFormCTAButton,
    LegacyFormCardSection: () => LegacyFormCardSection,
    LegacyFormCheckbox: () => LegacyFormCheckbox,
    LegacyFormCheckboxRow: () => LegacyFormCheckboxRow,
    LegacyFormCheckmark: () => LegacyFormCheckmark,
    LegacyFormDivider: () => LegacyFormDivider,
    LegacyFormHint: () => LegacyFormHint,
    LegacyFormIcon: () => LegacyFormIcon,
    LegacyFormInput: () => LegacyFormInput,
    LegacyFormLabel: () => LegacyFormLabel,
    LegacyFormRadio: () => LegacyFormRadio,
    LegacyFormRadioGroup: () => LegacyFormRadioGroup,
    LegacyFormRadioRow: () => LegacyFormRadioRow,
    LegacyFormRow: () => LegacyFormRow,
    LegacyFormSection: () => LegacyFormSection,
    LegacyFormSelect: () => LegacyFormSelect,
    LegacyFormSliderRow: () => LegacyFormSliderRow,
    LegacyFormSubLabel: () => LegacyFormSubLabel,
    LegacyFormSwitch: () => LegacyFormSwitch,
    LegacyFormSwitchRow: () => LegacyFormSwitchRow,
    LegacyFormTernaryCheckBox: () => LegacyFormTernaryCheckBox,
    LegacyFormText: () => LegacyFormText,
    LegacyFormTitle: () => LegacyFormTitle,
    PressableScale: () => PressableScale,
    RedesignCompat: () => RedesignCompat,
    RowButton: () => RowButton,
    SafeAreaProvider: () => SafeAreaProvider,
    SafeAreaView: () => SafeAreaView,
    SegmentedControl: () => SegmentedControl,
    SegmentedControlPages: () => SegmentedControlPages,
    Stack: () => Stack,
    TableCheckbox: () => TableCheckbox,
    TableCheckboxRow: () => TableCheckboxRow,
    TableRadio: () => TableRadio,
    TableRadioGroup: () => TableRadioGroup,
    TableRadioRow: () => TableRadioRow,
    TableRow: () => TableRow,
    TableRowGroup: () => TableRowGroup,
    TableRowIcon: () => TableRowIcon,
    TableRowTrailingText: () => TableRowTrailingText,
    TableSwitch: () => TableSwitch,
    TableSwitchRow: () => TableSwitchRow,
    Text: () => Text,
    TextArea: () => TextArea,
    TextInput: () => TextInput,
    TwinButtons: () => TwinButtons,
    useSafeAreaInsets: () => useSafeAreaInsets,
    useSegmentedControlState: () => useSegmentedControlState
  });
  var bySingularProp, findSingular, findProp, LegacyAlert, CompatButton, HelpMessage, SafeAreaView, SafeAreaProvider, useSafeAreaInsets, ActionSheetRow, Button, TwinButtons, IconButton, RowButton, PressableScale, TableRow, TableRowIcon, TableRowTrailingText, TableRowGroup, TableRadioGroup, TableRadioRow, TableSwitchRow, TableCheckboxRow, TableSwitch, TableRadio, TableCheckbox, FormSwitch, FormRadio, FormCheckbox, Card, RedesignCompat, AlertModal, AlertActionButton, AlertActions, AvatarPile, ContextMenu, Stack, Avatar, TextInput, TextArea, SegmentedControl, SegmentedControlPages, useSegmentedControlState, CompatSegmentedControl, FloatingActionButton, ActionSheet, BottomSheetTitleHeader, textsModule, Text, Forms, LegacyForm, LegacyFormArrow, LegacyFormCTA, LegacyFormCTAButton, LegacyFormCardSection, LegacyFormCheckbox, LegacyFormCheckboxRow, LegacyFormCheckmark, LegacyFormDivider, LegacyFormHint, LegacyFormIcon, LegacyFormInput, LegacyFormLabel, LegacyFormRadio, LegacyFormRadioGroup, LegacyFormRadioRow, LegacyFormRow, LegacyFormSection, LegacyFormSelect, LegacyFormSliderRow, LegacyFormSubLabel, LegacyFormSwitch, LegacyFormSwitchRow, LegacyFormTernaryCheckBox, LegacyFormText, LegacyFormTitle, FlashList;
  var init_components = __esm({
    "src/metro/common/components.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_factories();
      init_finders();
      init_wrappers();
      bySingularProp = createFilterDefinition(([prop], m2) => m2[prop] && Object.keys(m2).length === 1, (prop) => `bunny.metro.common.components.bySingularProp(${prop})`);
      findSingular = (prop) => proxyLazy(() => findExports(bySingularProp(prop))?.[prop]);
      findProp = (...props) => proxyLazy(() => findByProps(...props)[props[0]]);
      LegacyAlert = findByDisplayNameLazy("FluxContainer(Alert)");
      CompatButton = findByPropsLazy("Looks", "Colors", "Sizes");
      HelpMessage = findByNameLazy("HelpMessage");
      ({ SafeAreaView, SafeAreaProvider, useSafeAreaInsets } = lazyDestructure(() => findByProps("useSafeAreaInsets")));
      ActionSheetRow = findProp("ActionSheetRow");
      Button = findSingular("Button");
      TwinButtons = findProp("TwinButtons");
      IconButton = findSingular("IconButton");
      RowButton = findProp("RowButton");
      PressableScale = findProp("PressableScale");
      TableRow = findProp("TableRow");
      TableRowIcon = findProp("TableRowIcon");
      TableRowTrailingText = findProp("TableRowTrailingText");
      TableRowGroup = findProp("TableRowGroup");
      TableRadioGroup = findProp("TableRadioGroup");
      TableRadioRow = findProp("TableRadioRow");
      TableSwitchRow = findProp("TableSwitchRow");
      TableCheckboxRow = findProp("TableCheckboxRow");
      TableSwitch = findSingular("FormSwitch");
      TableRadio = findSingular("FormRadio");
      TableCheckbox = findSingular("FormCheckbox");
      FormSwitch = findSingular("FormSwitch");
      FormRadio = findSingular("FormRadio");
      FormCheckbox = findSingular("FormCheckbox");
      Card = findProp("Card");
      RedesignCompat = proxyLazy(() => findByProps("RedesignCompat").RedesignCompat);
      AlertModal = findProp("AlertModal");
      AlertActionButton = findProp("AlertActionButton");
      AlertActions = findProp("AlertActions");
      AvatarPile = findSingular("AvatarPile");
      ContextMenu = findProp("ContextMenu");
      Stack = findProp("Stack");
      Avatar = findProp("default", "AvatarSizes", "getStatusSize");
      TextInput = findSingular("TextInput");
      TextArea = findSingular("TextArea");
      SegmentedControl = findProp("SegmentedControl");
      SegmentedControlPages = findProp("SegmentedControlPages");
      useSegmentedControlState = findSingular("useSegmentedControlState");
      CompatSegmentedControl = findProp("CompatSegmentedControl");
      FloatingActionButton = findProp("FloatingActionButton");
      ActionSheet = findProp("ActionSheet");
      BottomSheetTitleHeader = findProp("BottomSheetTitleHeader");
      textsModule = findByPropsLazy("Text", "LegacyText");
      Text = proxyLazy(() => textsModule.Text);
      Forms = findByPropsLazy("Form", "FormSection");
      ({ Form: LegacyForm, FormArrow: LegacyFormArrow, FormCTA: LegacyFormCTA, FormCTAButton: LegacyFormCTAButton, FormCardSection: LegacyFormCardSection, FormCheckbox: LegacyFormCheckbox, FormCheckboxRow: LegacyFormCheckboxRow, FormCheckmark: LegacyFormCheckmark, FormDivider: LegacyFormDivider, FormHint: LegacyFormHint, FormIcon: LegacyFormIcon, FormInput: LegacyFormInput, FormLabel: LegacyFormLabel, FormRadio: LegacyFormRadio, FormRadioGroup: LegacyFormRadioGroup, FormRadioRow: LegacyFormRadioRow, FormRow: LegacyFormRow, FormSection: LegacyFormSection, FormSelect: LegacyFormSelect, FormSliderRow: LegacyFormSliderRow, FormSubLabel: LegacyFormSubLabel, FormSwitch: LegacyFormSwitch, FormSwitchRow: LegacyFormSwitchRow, FormTernaryCheckBox: LegacyFormTernaryCheckBox, FormText: LegacyFormText, FormTitle: LegacyFormTitle } = lazyDestructure(() => Forms));
      FlashList = findProp("FlashList");
    }
  });

  // src/metro/common/index.ts
  var common_exports = {};
  __export(common_exports, {
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    FluxUtils: () => FluxUtils,
    NavigationNative: () => NavigationNative,
    React: () => React2,
    ReactNative: () => ReactNative,
    assets: () => assets,
    channels: () => channels,
    clipboard: () => clipboard,
    commands: () => commands,
    components: () => components_exports,
    constants: () => constants,
    i18n: () => i18n,
    invites: () => invites,
    messageUtil: () => messageUtil,
    navigation: () => navigation,
    navigationStack: () => navigationStack,
    semver: () => semver,
    toasts: () => toasts,
    tokens: () => tokens,
    url: () => url,
    useToken: () => useToken
  });
  var constants, channels, i18n, url, clipboard, assets, invites, commands, navigation, toasts, messageUtil, navigationStack, NavigationNative, semver, tokens, useToken, Flux, FluxDispatcher, FluxUtils, React2, ReactNative;
  var init_common = __esm({
    "src/metro/common/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      init_components();
      constants = findByPropsLazy("Fonts", "Permissions");
      channels = findByPropsLazy("getVoiceChannelId");
      i18n = findByPropsLazy("Messages");
      url = findByPropsLazy("openURL", "openDeeplink");
      clipboard = findByPropsLazy("setString", "getString", "hasString");
      assets = findByPropsLazy("registerAsset");
      invites = findByPropsLazy("acceptInviteAndTransitionToInviteChannel");
      commands = findByPropsLazy("getBuiltInCommands");
      navigation = findByPropsLazy("pushLazy");
      toasts = findByFilePathLazy("modules/toast/native/ToastActionCreators.tsx", true);
      messageUtil = findByPropsLazy("sendBotMessage");
      navigationStack = findByPropsLazy("createStackNavigator");
      NavigationNative = findByPropsLazy("NavigationContainer");
      semver = findByPropsLazy("parse", "clean");
      tokens = findByPropsLazy("unsafe_rawColors", "colors");
      ({ useToken } = lazyDestructure(() => findByProps("useToken")));
      Flux = findByPropsLazy("connectStores");
      FluxDispatcher = findByProps("_interceptors");
      FluxUtils = findByProps("useStateFromStores");
      React2 = window.React = findByPropsLazy("createElement");
      ReactNative = window.ReactNative = findByPropsLazy("AppRegistry");
    }
  });

  // src/metro/index.ts
  var metro_exports = {};
  __export(metro_exports, {
    common: () => common_exports,
    factories: () => factories_exports,
    filters: () => filters_exports,
    findAllExports: () => findAllExports,
    findAllModule: () => findAllModule,
    findAllModuleId: () => findAllModuleId,
    findByDisplayName: () => findByDisplayName,
    findByDisplayNameAll: () => findByDisplayNameAll,
    findByDisplayNameLazy: () => findByDisplayNameLazy,
    findByFilePath: () => findByFilePath,
    findByFilePathLazy: () => findByFilePathLazy,
    findByName: () => findByName,
    findByNameAll: () => findByNameAll,
    findByNameLazy: () => findByNameLazy,
    findByProps: () => findByProps,
    findByPropsAll: () => findByPropsAll,
    findByPropsLazy: () => findByPropsLazy,
    findByStoreName: () => findByStoreName,
    findByStoreNameLazy: () => findByStoreNameLazy,
    findByTypeName: () => findByTypeName,
    findByTypeNameAll: () => findByTypeNameAll,
    findByTypeNameLazy: () => findByTypeNameLazy,
    findExports: () => findExports,
    findModule: () => findModule,
    findModuleId: () => findModuleId,
    lazy: () => lazy_exports2
  });
  var init_metro = __esm({
    "src/metro/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_factories();
      init_filters();
      init_finders();
      init_lazy2();
      init_wrappers();
    }
  });

  // globals:chroma-js
  var require_chroma_js = __commonJS({
    "globals:chroma-js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["chroma-js"];
    }
  });

  // src/lib/addons/themes/colors/parser.ts
  function parseColorManifest(manifest) {
    var resolveType = (type2 = "dark") => (colorsPref.type ?? type2) === "dark" ? "darker" : "light";
    if (manifest.spec === 3) {
      var semanticColorDefinitions = {};
      for (var [semanticColorKey, semanticColorValue] of Object.entries(manifest.main.semantic ?? {})) {
        if (typeof semanticColorValue === "object") {
          var { type, value, opacity: semanticColorOpacity } = semanticColorValue;
          if (type === "raw") {
            semanticColorDefinitions[semanticColorKey] = {
              value,
              opacity: semanticColorOpacity ?? 1
            };
          } else {
            var rawColorValue = tokenRef.RawColor[value];
            semanticColorDefinitions[semanticColorKey] = {
              value: rawColorValue,
              opacity: semanticColorOpacity ?? 1
            };
          }
        } else if (typeof semanticColorValue === "string") {
          if (semanticColorValue.startsWith("#")) {
            semanticColorDefinitions[semanticColorKey] = {
              value: import_chroma_js.default.hex(semanticColorValue).hex(),
              opacity: 1
            };
          } else {
            semanticColorDefinitions[semanticColorKey] = {
              value: tokenRef.RawColor[semanticColorValue],
              opacity: 1
            };
          }
        } else {
          throw new Error(`Invalid semantic definitions: ${semanticColorValue}`);
        }
      }
      if (import_react_native2.Platform.OS === "android")
        applyAndroidAlphaKeys(manifest.main.raw);
      return {
        spec: 3,
        reference: resolveType(manifest.type),
        semantic: semanticColorDefinitions,
        raw: manifest.main.raw ?? {},
        background: manifest.main.background
      };
    }
    if (manifest.spec === 2) {
      var semanticDefinitions = {};
      var background = manifest.background ? {
        ...omit(manifest.background, [
          "alpha"
        ]),
        opacity: manifest.background.alpha
      } : void 0;
      if (manifest.semanticColors) {
        for (var key in manifest.semanticColors) {
          var values = manifest.semanticColors[key].map((c2) => c2 || void 0).slice(0, 2);
          if (!values[0])
            continue;
          semanticDefinitions[key] = {
            value: normalizeToHex(values[resolveType() === "light" ? 1 : 0]),
            opacity: 1
          };
        }
      }
      if (manifest.rawColors) {
        var draft = {};
        for (var key1 in manifest.rawColors) {
          var value1 = manifest.rawColors[key1];
          if (!value1)
            continue;
          draft[key1] = normalizeToHex(value1);
        }
        if (import_react_native2.Platform.OS === "android")
          applyAndroidAlphaKeys(draft);
        manifest.rawColors = draft;
      }
      return {
        spec: 2,
        reference: resolveType(),
        semantic: semanticDefinitions,
        raw: manifest.rawColors ?? {},
        background
      };
    }
    throw new Error("Invalid theme spec");
  }
  function applyAndroidAlphaKeys(rawColors2) {
    if (!rawColors2)
      return;
    var alphaMap = {
      "BLACK_ALPHA_60": [
        "BLACK",
        0.6
      ],
      "BRAND_NEW_360_ALPHA_20": [
        "BRAND_360",
        0.2
      ],
      "BRAND_NEW_360_ALPHA_25": [
        "BRAND_360",
        0.25
      ],
      "BRAND_NEW_500_ALPHA_20": [
        "BRAND_500",
        0.2
      ],
      "PRIMARY_DARK_500_ALPHA_20": [
        "PRIMARY_500",
        0.2
      ],
      "PRIMARY_DARK_700_ALPHA_60": [
        "PRIMARY_700",
        0.6
      ],
      "STATUS_GREEN_500_ALPHA_20": [
        "GREEN_500",
        0.2
      ],
      "STATUS_RED_500_ALPHA_20": [
        "RED_500",
        0.2
      ]
    };
    for (var key in alphaMap) {
      var [colorKey, alpha] = alphaMap[key];
      if (!rawColors2[colorKey])
        continue;
      rawColors2[key] = (0, import_chroma_js.default)(rawColors2[colorKey]).alpha(alpha).hex();
    }
    return rawColors2;
  }
  function normalizeToHex(colorString) {
    if (colorString === void 0)
      return void 0;
    if (import_chroma_js.default.valid(colorString))
      return (0, import_chroma_js.default)(colorString).hex();
    var color2 = Number((0, import_react_native2.processColor)(colorString));
    return import_chroma_js.default.rgb(
      color2 >> 16 & 255,
      color2 >> 8 & 255,
      color2 & 255,
      color2 >> 24 & 255
      // alpha
    ).hex();
  }
  var import_chroma_js, import_react_native2, tokenRef;
  var init_parser = __esm({
    "src/lib/addons/themes/colors/parser.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_metro();
      import_chroma_js = __toESM(require_chroma_js());
      init_dist();
      import_react_native2 = __toESM(require_react_native());
      init_preferences();
      tokenRef = findByProps("SemanticColor");
    }
  });

  // src/lib/addons/themes/colors/updater.ts
  function updateBunnyColor(colorManifest, { update = true }) {
    if (settings.safeMode?.enabled)
      return;
    var internalDef = colorManifest ? parseColorManifest(colorManifest) : null;
    var ref = Object.assign(_colorRef, {
      current: internalDef,
      key: `bn-theme-${++_inc}`,
      lastSetDiscordTheme: !ThemeStore.theme.startsWith("bn-theme-") ? ThemeStore.theme : _colorRef.lastSetDiscordTheme
    });
    if (internalDef != null) {
      tokenRef2.Theme[ref.key.toUpperCase()] = ref.key;
      FormDivider.DIVIDER_COLORS[ref.key] = FormDivider.DIVIDER_COLORS[ref.current.reference];
      Object.keys(tokenRef2.Shadow).forEach((k) => tokenRef2.Shadow[k][ref.key] = tokenRef2.Shadow[k][ref.current.reference]);
      Object.keys(tokenRef2.SemanticColor).forEach((k) => {
        tokenRef2.SemanticColor[k][ref.key] = {
          ...tokenRef2.SemanticColor[k][ref.current.reference]
        };
      });
    }
    if (update) {
      AppearanceManager.setShouldSyncAppearanceSettings(false);
      AppearanceManager.updateTheme(internalDef != null ? ref.key : ref.lastSetDiscordTheme);
    }
  }
  var tokenRef2, origRawColor, AppearanceManager, ThemeStore, FormDivider, _inc, _colorRef;
  var init_updater = __esm({
    "src/lib/addons/themes/colors/updater.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_settings();
      init_metro();
      init_parser();
      tokenRef2 = findByProps("SemanticColor");
      origRawColor = {
        ...tokenRef2.RawColor
      };
      AppearanceManager = findByPropsLazy("updateTheme");
      ThemeStore = findByStoreNameLazy("ThemeStore");
      FormDivider = findByPropsLazy("DIVIDER_COLORS");
      _inc = 1;
      _colorRef = {
        current: null,
        key: `bn-theme-${_inc}`,
        origRaw: origRawColor,
        lastSetDiscordTheme: "darker"
      };
    }
  });

  // src/lib/addons/themes/colors/patches/background.tsx
  function ThemeBackground({ children }) {
    useObservable([
      colorsPref
    ]);
    if (!_colorRef.current || colorsPref.customBackground === "hidden" || !_colorRef.current.background?.url || _colorRef.current.background?.blur && typeof _colorRef.current.background?.blur !== "number") {
      return children;
    }
    return /* @__PURE__ */ jsx(import_react_native3.ImageBackground, {
      style: {
        flex: 1,
        height: "100%"
      },
      source: {
        uri: _colorRef.current.background?.url
      },
      blurRadius: _colorRef.current.background?.blur,
      children
    });
  }
  function patchChatBackground() {
    var patches2 = [
      after("render", Messages, (_2, ret) => {
        if (!_colorRef.current || !_colorRef.current.background?.url)
          return;
        var messagesComponent = findInReactTree(ret, (x2) => x2 && "HACK_fixModalInteraction" in x2.props && x2?.props?.style);
        if (messagesComponent) {
          var flattened = import_react_native3.StyleSheet.flatten(messagesComponent.props.style);
          var backgroundColor = (0, import_chroma_js2.default)(flattened.backgroundColor || "black").alpha(1 - (_colorRef.current.background?.opacity ?? 1)).hex();
          messagesComponent.props.style = import_react_native3.StyleSheet.flatten([
            messagesComponent.props.style,
            {
              backgroundColor
            }
          ]);
        }
        return /* @__PURE__ */ jsx(ThemeBackground, {
          children: ret
        });
      })
    ];
    return () => patches2.forEach((x2) => x2());
  }
  var import_chroma_js2, import_react_native3, Messages;
  var init_background = __esm({
    "src/lib/addons/themes/colors/patches/background.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_preferences();
      init_updater();
      init_patcher();
      init_storage2();
      init_utils();
      init_metro();
      import_chroma_js2 = __toESM(require_chroma_js());
      import_react_native3 = __toESM(require_react_native());
      Messages = findByFilePathLazy("components_native/chat/Messages.tsx", true);
    }
  });

  // src/lib/addons/themes/colors/patches/resolver.ts
  function patchDefinitionAndResolver() {
    var callback = ([theme]) => theme === _colorRef.key ? [
      _colorRef.current.reference
    ] : void 0;
    Object.keys(tokenReference.RawColor).forEach((key) => {
      Object.defineProperty(tokenReference.RawColor, key, {
        configurable: true,
        enumerable: true,
        get: () => {
          var ret = _colorRef.current?.raw[key];
          return ret || _colorRef.origRaw[key];
        }
      });
    });
    var unpatches = [
      before("isThemeDark", isThemeModule, callback),
      before("isThemeLight", isThemeModule, callback),
      before("updateTheme", NativeThemeModule, callback),
      instead("resolveSemanticColor", tokenReference.default.meta ?? tokenReference.default.internal, (args, orig) => {
        if (!_colorRef.current)
          return orig(...args);
        if (args[0] !== _colorRef.key)
          return orig(...args);
        args[0] = _colorRef.current.reference;
        var [name, colorDef] = extractInfo(_colorRef.current.reference, args[1]);
        var semanticDef = _colorRef.current.semantic[name];
        if (!semanticDef && _colorRef.current.spec === 2 && name in SEMANTIC_FALLBACK_MAP) {
          semanticDef = _colorRef.current.semantic[SEMANTIC_FALLBACK_MAP[name]];
        }
        if (semanticDef?.value) {
          if (semanticDef.opacity === 1)
            return semanticDef.value;
          return (0, import_chroma_js3.default)(semanticDef.value).alpha(semanticDef.opacity).hex();
        }
        var rawValue = _colorRef.current.raw[colorDef.raw];
        if (rawValue) {
          return colorDef.opacity === 1 ? rawValue : (0, import_chroma_js3.default)(rawValue).alpha(colorDef.opacity).hex();
        }
        return orig(...args);
      }),
      () => {
        Object.defineProperty(tokenReference, "RawColor", {
          configurable: true,
          writable: true,
          value: _colorRef.origRaw
        });
      }
    ];
    return () => unpatches.forEach((p) => p());
  }
  function extractInfo(themeName, colorObj) {
    var propName = colorObj[extractInfo._sym ??= Object.getOwnPropertySymbols(colorObj)[0]];
    var colorDef = tokenReference.SemanticColor[propName];
    return [
      propName,
      colorDef[themeName]
    ];
  }
  var import_chroma_js3, tokenReference, isThemeModule, SEMANTIC_FALLBACK_MAP;
  var init_resolver = __esm({
    "src/lib/addons/themes/colors/patches/resolver.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_updater();
      init_modules();
      init_patcher();
      init_metro();
      init_filters();
      init_lazy2();
      import_chroma_js3 = __toESM(require_chroma_js());
      tokenReference = findByProps("SemanticColor");
      isThemeModule = createLazyModule(byMutableProp("isThemeDark"));
      SEMANTIC_FALLBACK_MAP = {
        "BG_BACKDROP": "BACKGROUND_FLOATING",
        "BG_BASE_PRIMARY": "BACKGROUND_PRIMARY",
        "BG_BASE_SECONDARY": "BACKGROUND_SECONDARY",
        "BG_BASE_TERTIARY": "BACKGROUND_SECONDARY_ALT",
        "BG_MOD_FAINT": "BACKGROUND_MODIFIER_ACCENT",
        "BG_MOD_STRONG": "BACKGROUND_MODIFIER_ACCENT",
        "BG_MOD_SUBTLE": "BACKGROUND_MODIFIER_ACCENT",
        "BG_SURFACE_OVERLAY": "BACKGROUND_FLOATING",
        "BG_SURFACE_OVERLAY_TMP": "BACKGROUND_FLOATING",
        "BG_SURFACE_RAISED": "BACKGROUND_MOBILE_PRIMARY"
      };
    }
  });

  // src/lib/addons/themes/colors/patches/storage.ts
  function patchStorage() {
    var patchedKeys = /* @__PURE__ */ new Set([
      "ThemeStore",
      "SelectivelySyncedUserSettingsStore"
    ]);
    var patches2 = [
      after("get", mmkvStorage, ([key], ret) => {
        if (!_colorRef.current || !patchedKeys.has(key))
          return;
        var state = findInTree(ret._state, (s) => typeof s.theme === "string");
        if (state)
          state.theme = _colorRef.key;
      }),
      before("set", mmkvStorage, ([key, value]) => {
        if (!patchedKeys.has(key))
          return;
        var json = JSON.stringify(value);
        var lastSetDiscordTheme = _colorRef.lastSetDiscordTheme ?? "darker";
        var replaced = json.replace(/"theme":"bn-theme-\d+"/, `"theme":${JSON.stringify(lastSetDiscordTheme)}`);
        return [
          key,
          JSON.parse(replaced)
        ];
      })
    ];
    return () => patches2.forEach((p) => p());
  }
  var mmkvStorage;
  var init_storage3 = __esm({
    "src/lib/addons/themes/colors/patches/storage.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_updater();
      init_patcher();
      init_utils();
      init_lazy();
      init_metro();
      mmkvStorage = proxyLazy(() => {
        var newModule = findByProps("impl");
        if (typeof newModule?.impl === "object")
          return newModule.impl;
        return findByProps("storage");
      });
    }
  });

  // src/lib/addons/themes/colors/index.ts
  function initColors(manifest) {
    var patches2 = [
      patchStorage(),
      patchDefinitionAndResolver(),
      patchChatBackground()
    ];
    if (manifest)
      updateBunnyColor(manifest, {
        update: false
      });
    return () => patches2.forEach((p) => p());
  }
  var init_colors = __esm({
    "src/lib/addons/themes/colors/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_background();
      init_resolver();
      init_storage3();
      init_updater();
    }
  });

  // src/lib/addons/themes/index.ts
  var themes_exports = {};
  __export(themes_exports, {
    fetchTheme: () => fetchTheme,
    getCurrentTheme: () => getCurrentTheme,
    getThemeFromLoader: () => getThemeFromLoader,
    initThemes: () => initThemes,
    installTheme: () => installTheme,
    removeTheme: () => removeTheme,
    selectTheme: () => selectTheme,
    themes: () => themes,
    updateThemes: () => updateThemes,
    writeThemeToNative: () => writeThemeToNative
  });
  function writeThemeToNative(theme) {
    return _writeThemeToNative.apply(this, arguments);
  }
  function _writeThemeToNative() {
    _writeThemeToNative = _async_to_generator(function* (theme) {
      if (typeof theme !== "object")
        throw new Error("Theme must be an object");
      yield createFileBackend(getThemeFilePath() || "theme.json").set(theme);
    });
    return _writeThemeToNative.apply(this, arguments);
  }
  function processData(data) {
    if (data.semanticColors) {
      var { semanticColors: semanticColors2 } = data;
      for (var key in semanticColors2) {
        for (var index in semanticColors2[key]) {
          semanticColors2[key][index] &&= normalizeToHex(semanticColors2[key][index]) || false;
        }
      }
    }
    if (data.rawColors) {
      var { rawColors: rawColors2 } = data;
      for (var key1 in rawColors2) {
        var normalized = normalizeToHex(rawColors2[key1]);
        if (normalized)
          data.rawColors[key1] = normalized;
      }
      if (import_react_native4.Platform.OS === "android")
        applyAndroidAlphaKeys(rawColors2);
    }
    data.spec ??= 2;
    return data;
  }
  function validateTheme(themeJSON) {
    if (typeof themeJSON !== "object" || themeJSON === null)
      return false;
    if (themeJSON.spec !== 2 && themeJSON.spec !== 3)
      return false;
    if (themeJSON.spec === 3 && !themeJSON.main)
      return false;
    return true;
  }
  function fetchTheme(url2) {
    return _fetchTheme.apply(this, arguments);
  }
  function _fetchTheme() {
    _fetchTheme = _async_to_generator(function* (url2, selected = false) {
      var themeJSON;
      try {
        themeJSON = yield (yield safeFetch(url2, {
          cache: "no-store"
        })).json();
      } catch (e) {
        throw new Error(`Failed to fetch theme at ${url2}`);
      }
      if (!validateTheme(themeJSON))
        throw new Error(`Invalid theme at ${url2}`);
      themes[url2] = {
        id: url2,
        selected,
        data: processData(themeJSON)
      };
      if (selected) {
        writeThemeToNative(themes[url2]);
        updateBunnyColor(themes[url2].data, {
          update: true
        });
      }
    });
    return _fetchTheme.apply(this, arguments);
  }
  function installTheme(url2) {
    return _installTheme.apply(this, arguments);
  }
  function _installTheme() {
    _installTheme = _async_to_generator(function* (url2) {
      if (typeof url2 !== "string" || url2 in themes)
        throw new Error("Theme already installed");
      yield fetchTheme(url2);
    });
    return _installTheme.apply(this, arguments);
  }
  function selectTheme(theme, write = true) {
    if (theme)
      theme.selected = true;
    Object.keys(themes).forEach((k) => themes[k].selected = themes[k].id === theme?.id);
    if (theme == null && write) {
      updateBunnyColor(null, {
        update: true
      });
      return writeThemeToNative({});
    } else if (theme) {
      updateBunnyColor(theme.data, {
        update: true
      });
      return writeThemeToNative(theme);
    }
  }
  function removeTheme(id) {
    return _removeTheme.apply(this, arguments);
  }
  function _removeTheme() {
    _removeTheme = _async_to_generator(function* (id) {
      var theme = themes[id];
      if (theme.selected)
        yield selectTheme(null);
      delete themes[id];
      return theme.selected;
    });
    return _removeTheme.apply(this, arguments);
  }
  function updateThemes() {
    return _updateThemes.apply(this, arguments);
  }
  function _updateThemes() {
    _updateThemes = _async_to_generator(function* () {
      yield awaitStorage(themes);
      var currentTheme = getThemeFromLoader();
      yield allSettled(Object.keys(themes).map((id) => fetchTheme(id, currentTheme?.id === id)));
    });
    return _updateThemes.apply(this, arguments);
  }
  function getCurrentTheme() {
    return Object.values(themes).find((t) => t.selected) ?? null;
  }
  function getThemeFromLoader() {
    return getStoredTheme();
  }
  function initThemes() {
    return _initThemes.apply(this, arguments);
  }
  function _initThemes() {
    _initThemes = _async_to_generator(function* () {
      if (!isThemeSupported())
        return;
      try {
        if (isPyonLoader()) {
          writeFile("../vendetta_theme.json", "null");
        }
        yield awaitStorage2(colorsPref);
        var currentTheme = getThemeFromLoader();
        initColors(currentTheme?.data ?? null);
        updateThemes().catch((e) => console.error("Failed to update themes", e));
      } catch (e) {
        console.error("Failed to initialize themes", e);
      }
    });
    return _initThemes.apply(this, arguments);
  }
  var import_react_native4, themes;
  var init_themes = __esm({
    "src/lib/addons/themes/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_fs();
      init_loader();
      init_storage2();
      init_utils();
      import_react_native4 = __toESM(require_react_native());
      init_colors();
      init_parser();
      init_preferences();
      init_updater();
      themes = wrapSync(createStorage(createMMKVBackend("VENDETTA_THEMES")));
    }
  });

  // src/lib/api/native/loader.ts
  function isVendettaLoader() {
    return vendettaLoaderIdentity != null;
  }
  function isPyonLoader() {
    return pyonLoaderIdentity != null;
  }
  function polyfillVendettaLoaderIdentity() {
    if (!isPyonLoader() || isVendettaLoader())
      return null;
    var loader = {
      name: pyonLoaderIdentity.loaderName,
      features: {}
    };
    if (isLoaderConfigSupported())
      loader.features.loaderConfig = true;
    if (isSysColorsSupported()) {
      loader.features.syscolors = {
        prop: "__vendetta_syscolors"
      };
      Object.defineProperty(globalThis, "__vendetta_syscolors", {
        get: () => getSysColors(),
        configurable: true
      });
    }
    if (isThemeSupported()) {
      loader.features.themes = {
        prop: "__vendetta_theme"
      };
      Object.defineProperty(globalThis, "__vendetta_theme", {
        // get: () => getStoredTheme(),
        get: () => {
          var id = getStoredTheme()?.id;
          if (!id)
            return null;
          var { themes: themes2 } = (init_themes(), __toCommonJS(themes_exports));
          return themes2[id] ?? getStoredTheme() ?? null;
        },
        configurable: true
      });
    }
    Object.defineProperty(globalThis, "__vendetta_loader", {
      get: () => loader,
      configurable: true
    });
    return loader;
  }
  function getVendettaLoaderIdentity() {
    if (globalThis.__vendetta_loader)
      return globalThis.__vendetta_loader;
    return polyfillVendettaLoaderIdentity();
  }
  function getLoaderName() {
    if (isPyonLoader())
      return pyonLoaderIdentity.loaderName;
    else if (isVendettaLoader())
      return vendettaLoaderIdentity.name;
    return "Unknown";
  }
  function getLoaderVersion() {
    if (isPyonLoader())
      return pyonLoaderIdentity.loaderVersion;
    return null;
  }
  function isLoaderConfigSupported() {
    if (isPyonLoader()) {
      return true;
    } else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.loaderConfig;
    }
    return false;
  }
  function isThemeSupported() {
    if (isPyonLoader()) {
      return pyonLoaderIdentity.hasThemeSupport;
    } else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.themes != null;
    }
    return false;
  }
  function getStoredTheme() {
    if (isPyonLoader()) {
      return pyonLoaderIdentity.storedTheme;
    } else if (isVendettaLoader()) {
      var themeProp = vendettaLoaderIdentity.features.themes?.prop;
      if (!themeProp)
        return null;
      return globalThis[themeProp] || null;
    }
    return null;
  }
  function getThemeFilePath() {
    if (isPyonLoader()) {
      return "pyoncord/current-theme.json";
    } else if (isVendettaLoader()) {
      return "vendetta_theme.json";
    }
    return null;
  }
  function isReactDevToolsPreloaded() {
    if (isPyonLoader()) {
      return Boolean(window.__reactDevTools);
    }
    if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.devtools != null;
    }
    return false;
  }
  function getReactDevToolsProp() {
    if (!isReactDevToolsPreloaded())
      return null;
    if (isPyonLoader()) {
      window.__pyoncord_rdt = window.__reactDevTools.exports;
      return "__pyoncord_rdt";
    }
    if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.devtools.prop;
    }
    return null;
  }
  function getReactDevToolsVersion() {
    if (!isReactDevToolsPreloaded())
      return null;
    if (isPyonLoader()) {
      return window.__reactDevTools.version || null;
    }
    if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.devtools.version;
    }
    return null;
  }
  function isSysColorsSupported() {
    if (isPyonLoader())
      return pyonLoaderIdentity.isSysColorsSupported;
    else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.syscolors != null;
    }
    return false;
  }
  function getSysColors() {
    if (!isSysColorsSupported())
      return null;
    if (isPyonLoader()) {
      return pyonLoaderIdentity.sysColors;
    } else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.syscolors.prop;
    }
    return null;
  }
  function getLoaderConfigPath() {
    if (isPyonLoader()) {
      return "pyoncord/loader.json";
    } else if (isVendettaLoader()) {
      return "vendetta_loader.json";
    }
    return "loader.json";
  }
  function isFontSupported() {
    if (isPyonLoader())
      return pyonLoaderIdentity.fontPatch === 2;
    return false;
  }
  var pyonLoaderIdentity, vendettaLoaderIdentity;
  var init_loader = __esm({
    "src/lib/api/native/loader.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      pyonLoaderIdentity = globalThis.__PYON_LOADER__;
      vendettaLoaderIdentity = globalThis.__vendetta_loader;
      getVendettaLoaderIdentity();
    }
  });

  // src/lib/api/settings.ts
  var settings_exports = {};
  __export(settings_exports, {
    loaderConfig: () => loaderConfig,
    settings: () => settings
  });
  var settings, loaderConfig;
  var init_settings = __esm({
    "src/lib/api/settings.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_storage();
      init_loader();
      settings = wrapSync(createStorage(createMMKVBackend("VENDETTA_SETTINGS")));
      loaderConfig = wrapSync(createStorage(createFileBackend(getLoaderConfigPath(), {
        customLoadUrl: {
          enabled: false,
          url: "http://localhost:4040/bunny.js"
        }
      })));
    }
  });

  // src/metro/polyfills/redesign.ts
  var redesign_exports = {};
  __export(redesign_exports, {
    default: () => redesign_default
  });
  var redesignProps, _module, _source, cacher, actualExports, exportsKeysLength, prop, id, moduleExports, redesign_default;
  var init_redesign = __esm({
    "src/metro/polyfills/redesign.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      redesignProps = /* @__PURE__ */ new Set([
        "AlertActionButton",
        "AlertModal",
        "AlertModalContainer",
        "AvatarDuoPile",
        "AvatarPile",
        "BACKDROP_OPAQUE_MAX_OPACITY",
        "Backdrop",
        "Button",
        "Card",
        "ContextMenu",
        "ContextMenuContainer",
        "FauxHeader",
        "FloatingActionButton",
        "GhostInput",
        "GuildIconPile",
        "HeaderActionButton",
        "HeaderButton",
        "HeaderSubmittingIndicator",
        "IconButton",
        "Input",
        "InputButton",
        "InputContainer",
        "LayerContext",
        "LayerScope",
        "Modal",
        "ModalActionButton",
        "ModalContent",
        "ModalDisclaimer",
        "ModalFloatingAction",
        "ModalFloatingActionSpacer",
        "ModalFooter",
        "ModalScreen",
        "ModalStepIndicator",
        "NAV_BAR_HEIGHT",
        "NAV_BAR_HEIGHT_MULTILINE",
        "Navigator",
        "NavigatorHeader",
        "NavigatorScreen",
        "Pile",
        "PileOverflow",
        "RedesignCompat",
        "RedesignCompatContext",
        "RowButton",
        "STATUS_BAR_HEIGHT",
        "SceneLoadingIndicator",
        "SearchField",
        "SegmentedControl",
        "SegmentedControlPages",
        "Slider",
        "Stack",
        "StepModal",
        "StickyContext",
        "StickyHeader",
        "StickyWrapper",
        "TABLE_ROW_CONTENT_HEIGHT",
        "TABLE_ROW_HEIGHT",
        "TableCheckboxRow",
        "TableRadioGroup",
        "TableRadioRow",
        "TableRow",
        "TableRowGroup",
        "TableRowGroupTitle",
        "TableRowIcon",
        "TableSwitchRow",
        "Tabs",
        "TextArea",
        "TextField",
        "TextInput",
        "Toast",
        "dismissAlerts",
        "getHeaderBackButton",
        "getHeaderCloseButton",
        "getHeaderConditionalBackButton",
        "getHeaderNoTitle",
        "getHeaderTextButton",
        "hideContextMenu",
        "navigatorShouldCrossfade",
        "openAlert",
        "useAccessibilityNativeStackOptions",
        "useAndroidNavScrim",
        "useCoachmark",
        "useFloatingActionButtonScroll",
        "useFloatingActionButtonState",
        "useNativeStackNavigation",
        "useNavigation",
        "useNavigationTheme",
        "useNavigatorBackPressHandler",
        "useNavigatorScreens",
        "useNavigatorShouldCrossfade",
        "useSegmentedControlState",
        "useStackNavigation",
        "useTabNavigation",
        "useTooltip"
      ]);
      _module = {};
      _source = {};
      cacher = getPolyfillModuleCacher("redesign_module");
      for ([id, moduleExports] of cacher.getModules()) {
        for (prop of redesignProps) {
          actualExports = void 0;
          if (moduleExports[prop]) {
            actualExports = moduleExports;
          } else if (moduleExports.default?.[prop]) {
            actualExports = moduleExports.default;
          } else {
            continue;
          }
          exportsKeysLength = Reflect.ownKeys(actualExports).length;
          if (_source[prop] && exportsKeysLength >= _source[prop]) {
            continue;
          }
          _module[prop] = actualExports[prop];
          _source[prop] = Reflect.ownKeys(actualExports).length;
          cacher.cacheId(id);
          if (exportsKeysLength === 1) {
            redesignProps.delete(prop);
          }
        }
      }
      cacher.finish();
      redesign_default = _module;
    }
  });

  // src/metro/internals/modules.ts
  var modules_exports2 = {};
  __export(modules_exports2, {
    getCachedPolyfillModules: () => getCachedPolyfillModules,
    getImportingModuleId: () => getImportingModuleId,
    getModules: () => getModules,
    metroModules: () => metroModules,
    requireModule: () => requireModule,
    subscribeModule: () => subscribeModule
  });
  function blacklistModule(id) {
    Object.defineProperty(metroModules, id, {
      enumerable: false
    });
    blacklistedIds.add(id);
    indexBlacklistFlag(Number(id));
  }
  function isBadExports(exports) {
    return !exports || exports === window || exports["<!@ pylix was here :fuyusquish: !@>"] === null || exports.__proto__ === Object.prototype && Reflect.ownKeys(exports).length === 0 || exports.default?.[Symbol.toStringTag] === "IntlMessagesProxy";
  }
  function onModuleRequire(moduleExports, id) {
    indexExportsFlags(id, moduleExports);
    moduleExports.initSentry &&= () => void 0;
    if (moduleExports.default?.track && moduleExports.default.trackMaker)
      moduleExports.default.track = () => Promise.resolve();
    if (moduleExports.registerAsset) {
      (init_patches(), __toCommonJS(patches_exports)).patchAssets(moduleExports);
    }
    if (!patchedNativeComponentRegistry && [
      "customBubblingEventTypes",
      "customDirectEventTypes",
      "register",
      "get"
    ].every((x2) => moduleExports[x2])) {
      instead2("register", moduleExports, ([name, cb], origFunc) => {
        try {
          return origFunc(name, cb);
        } catch (e) {
          return name;
        }
      });
      patchedNativeComponentRegistry = true;
    }
    if (moduleExports?.default?.constructor?.displayName === "DeveloperExperimentStore") {
      moduleExports.default = new Proxy(moduleExports.default, {
        get(target, property, receiver) {
          if (property === "isDeveloper") {
            var { settings: settings2 } = (init_settings(), __toCommonJS(settings_exports));
            return settings2.enableDiscordDeveloperSettings ?? false;
          }
          return Reflect.get(target, property, receiver);
        }
      });
    }
    if (!patchedImportTracker && moduleExports.fileFinishedImporting) {
      before2("fileFinishedImporting", moduleExports, ([filePath]) => {
        if (_importingModuleId === -1 || !filePath)
          return;
        metroModules[_importingModuleId].__filePath = filePath;
      });
      patchedImportTracker = true;
    }
    if (!patchedInspectSource && window["__core-js_shared__"]) {
      var inspect = (f) => typeof f === "function" && functionToString.apply(f, []);
      window["__core-js_shared__"].inspectSource = inspect;
      patchedInspectSource = true;
    }
    if (moduleExports.findHostInstance_DEPRECATED) {
      var prevExports = metroModules[id - 1]?.publicModule.exports;
      var inc = prevExports.default?.reactProfilingEnabled ? 1 : -1;
      if (!metroModules[id + inc]?.isInitialized) {
        blacklistModule(id + inc);
      }
    }
    if (moduleExports.isMoment) {
      instead2("defineLocale", moduleExports, (args, orig) => {
        var origLocale = moduleExports.locale();
        orig(...args);
        moduleExports.locale(origLocale);
      });
    }
    var subs = moduleSubscriptions.get(Number(id));
    if (subs) {
      subs.forEach((s) => s());
      moduleSubscriptions.delete(Number(id));
    }
  }
  function getImportingModuleId() {
    return _importingModuleId;
  }
  function subscribeModule(id, cb) {
    var subs = moduleSubscriptions.get(id) ?? /* @__PURE__ */ new Set();
    subs.add(cb);
    moduleSubscriptions.set(id, subs);
    return () => subs.delete(cb);
  }
  function requireModule(id) {
    if (!metroModules[0]?.isInitialized)
      metroRequire(0);
    if (blacklistedIds.has(id))
      return void 0;
    if (Number(id) === -1)
      return init_redesign(), __toCommonJS(redesign_exports);
    if (metroModules[id]?.isInitialized && !metroModules[id]?.hasError) {
      return metroRequire(id);
    }
    var originalHandler = ErrorUtils.getGlobalHandler();
    ErrorUtils.setGlobalHandler(noopHandler);
    var moduleExports;
    try {
      moduleExports = metroRequire(id);
    } catch (e) {
      blacklistModule(id);
      moduleExports = void 0;
    }
    ErrorUtils.setGlobalHandler(originalHandler);
    return moduleExports;
  }
  function* getModules(uniq, all = false) {
    yield [
      -1,
      (init_redesign(), __toCommonJS(redesign_exports))
    ];
    var cache = getMetroCache().findIndex[uniq];
    if (all && !cache?.[`_${ModulesMapInternal.FULL_LOOKUP}`])
      cache = void 0;
    if (cache?.[`_${ModulesMapInternal.NOT_FOUND}`])
      return;
    for (var id in cache) {
      if (id[0] === "_")
        continue;
      var exports = requireModule(Number(id));
      if (isBadExports(exports))
        continue;
      yield [
        id,
        exports
      ];
    }
    for (var id1 in metroModules) {
      var exports1 = requireModule(Number(id1));
      if (isBadExports(exports1))
        continue;
      yield [
        id1,
        exports1
      ];
    }
  }
  function* getCachedPolyfillModules(name) {
    var cache = getMetroCache().polyfillIndex[name];
    for (var id in cache) {
      var exports = requireModule(Number(id));
      if (isBadExports(exports))
        continue;
      yield [
        id,
        exports
      ];
    }
    if (!cache[`_${ModulesMapInternal.FULL_LOOKUP}`]) {
      for (var id1 in metroModules) {
        var exports1 = requireModule(Number(id1));
        if (isBadExports(exports1))
          continue;
        yield [
          id1,
          exports1
        ];
      }
    }
  }
  var _loop, before2, instead2, metroModules, metroRequire, moduleSubscriptions, blacklistedIds, noopHandler, functionToString, patchedInspectSource, patchedImportTracker, patchedNativeComponentRegistry, _importingModuleId, key;
  var init_modules2 = __esm({
    "src/metro/internals/modules.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_enums();
      _loop = function(key) {
        var id = Number(key);
        var metroModule = metroModules[id];
        var cache = getMetroCache().flagsIndex[id];
        if (cache & ModuleFlags.BLACKLISTED) {
          blacklistModule(id);
          return "continue";
        }
        if (metroModule.factory) {
          instead2("factory", metroModule, (args, origFunc) => {
            var originalImportingId = _importingModuleId;
            _importingModuleId = id;
            var { 1: metroRequire2, 4: moduleObject } = args;
            args[
              2
              /* metroImportDefault */
            ] = (id2) => {
              var exps = metroRequire2(id2);
              return exps && exps.__esModule ? exps.default : exps;
            };
            args[
              3
              /* metroImportAll */
            ] = (id2) => {
              var exps = metroRequire2(id2);
              if (exps && exps.__esModule)
                return exps;
              var importAll = {};
              if (exps)
                Object.assign(importAll, exps);
              importAll.default = exps;
              return importAll;
            };
            origFunc(...args);
            if (!isBadExports(moduleObject.exports)) {
              onModuleRequire(moduleObject.exports, id);
            } else {
              blacklistModule(id);
            }
            _importingModuleId = originalImportingId;
          });
        }
      };
      ({ before: before2, instead: instead2 } = require_cjs());
      metroModules = window.modules;
      metroRequire = (id) => window.__r(+id);
      moduleSubscriptions = /* @__PURE__ */ new Map();
      blacklistedIds = /* @__PURE__ */ new Set();
      noopHandler = () => void 0;
      functionToString = Function.prototype.toString;
      patchedInspectSource = false;
      patchedImportTracker = false;
      patchedNativeComponentRegistry = false;
      _importingModuleId = -1;
      for (key in metroModules)
        _loop(key);
    }
  });

  // src/metro/internals/caches.ts
  var caches_exports = {};
  __export(caches_exports, {
    getCacherForUniq: () => getCacherForUniq,
    getMetroCache: () => getMetroCache,
    getPolyfillModuleCacher: () => getPolyfillModuleCacher,
    indexAssetModuleFlag: () => indexAssetModuleFlag,
    indexBlacklistFlag: () => indexBlacklistFlag,
    indexExportsFlags: () => indexExportsFlags,
    initMetroCache: () => initMetroCache
  });
  function buildInitCache() {
    var cache = {
      _v: CACHE_VERSION,
      _buildNumber: NativeClientInfoModule.Build,
      _modulesCount: Object.keys(window.modules).length,
      flagsIndex: {},
      findIndex: {},
      polyfillIndex: {}
    };
    setTimeout(() => {
      for (var id in window.modules) {
        (init_modules2(), __toCommonJS(modules_exports2)).requireModule(id);
      }
    }, 100);
    _metroCache = cache;
    return cache;
  }
  function initMetroCache() {
    return _initMetroCache.apply(this, arguments);
  }
  function _initMetroCache() {
    _initMetroCache = _async_to_generator(function* () {
      if (!(yield fileExists(BUNNY_METRO_CACHE_PATH)))
        return void buildInitCache();
      var rawCache = yield readFile(BUNNY_METRO_CACHE_PATH);
      try {
        _metroCache = JSON.parse(rawCache);
        if (_metroCache._v !== CACHE_VERSION) {
          _metroCache = null;
          throw "cache invalidated; cache version outdated";
        }
        if (_metroCache._buildNumber !== NativeClientInfoModule.Build) {
          _metroCache = null;
          throw "cache invalidated; version mismatch";
        }
        if (_metroCache._modulesCount !== Object.keys(window.modules).length) {
          _metroCache = null;
          throw "cache invalidated; modules count mismatch";
        }
      } catch (e) {
        buildInitCache();
      }
    });
    return _initMetroCache.apply(this, arguments);
  }
  function extractExportsFlags(moduleExports) {
    if (!moduleExports)
      return void 0;
    var bit = ModuleFlags.EXISTS;
    return bit;
  }
  function indexExportsFlags(moduleId, moduleExports) {
    var flags = extractExportsFlags(moduleExports);
    if (flags && flags !== ModuleFlags.EXISTS) {
      _metroCache.flagsIndex[moduleId] = flags;
    }
  }
  function indexBlacklistFlag(id) {
    _metroCache.flagsIndex[id] |= ModuleFlags.BLACKLISTED;
  }
  function indexAssetModuleFlag(id) {
    _metroCache.flagsIndex[id] |= ModuleFlags.ASSET;
  }
  function getCacherForUniq(uniq, allFind) {
    var indexObject = _metroCache.findIndex[uniq] ??= {};
    return {
      cacheId(moduleId, exports) {
        indexObject[moduleId] ??= extractExportsFlags(exports);
        saveCache();
      },
      // Finish may not be called by single find
      finish(notFound) {
        if (allFind)
          indexObject[`_${ModulesMapInternal.FULL_LOOKUP}`] = 1;
        if (notFound)
          indexObject[`_${ModulesMapInternal.NOT_FOUND}`] = 1;
        saveCache();
      }
    };
  }
  function getPolyfillModuleCacher(name) {
    var indexObject = _metroCache.polyfillIndex[name] ??= {};
    return {
      getModules() {
        return (init_modules2(), __toCommonJS(modules_exports2)).getCachedPolyfillModules(name);
      },
      cacheId(moduleId) {
        indexObject[moduleId] = 1;
        saveCache();
      },
      finish() {
        indexObject[`_${ModulesMapInternal.FULL_LOOKUP}`] = 1;
        saveCache();
      }
    };
  }
  var CACHE_VERSION, BUNNY_METRO_CACHE_PATH, _metroCache, getMetroCache, saveCache;
  var init_caches = __esm({
    "src/metro/internals/caches.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_fs();
      init_modules();
      init_dist();
      init_enums();
      CACHE_VERSION = 102;
      BUNNY_METRO_CACHE_PATH = "caches/metro_modules.json";
      _metroCache = null;
      getMetroCache = () => _metroCache;
      saveCache = debounce(() => {
        writeFile(BUNNY_METRO_CACHE_PATH, JSON.stringify(_metroCache));
      }, 1e3);
    }
  });

  // src/core/ui/reporter/utils/isStack.tsx
  function isComponentStack(error) {
    return "componentStack" in error && typeof error.componentStack === "string";
  }
  function hasStack(error) {
    return !!error.stack;
  }
  var init_isStack = __esm({
    "src/core/ui/reporter/utils/isStack.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/api/assets/index.ts
  var assets_exports = {};
  __export(assets_exports, {
    filterAssets: () => filterAssets,
    findAsset: () => findAsset,
    findAssetId: () => findAssetId,
    getAssetById: () => getAssetById,
    iterateAssets: () => iterateAssets
  });
  function* iterateAssets() {
    var { flagsIndex } = getMetroCache();
    var yielded = /* @__PURE__ */ new Set();
    for (var id in flagsIndex) {
      if (flagsIndex[id] & ModuleFlags.ASSET) {
        var assetId = requireModule(Number(id));
        if (typeof assetId !== "number" || yielded.has(assetId))
          continue;
        yield getAssetById(assetId);
        yielded.add(assetId);
      }
    }
  }
  function getAssetById(id) {
    var asset = assetsModule.getAssetByID(id);
    if (!asset)
      return asset;
    return Object.assign(asset, {
      id
    });
  }
  function findAsset(param) {
    if (typeof param === "number")
      return getAssetById(param);
    if (typeof param === "string" && _nameToAssetCache[param]) {
      return _nameToAssetCache[param];
    }
    for (var asset of iterateAssets()) {
      if (typeof param === "string" && asset.name === param) {
        _nameToAssetCache[param] = asset;
        return asset;
      } else if (typeof param === "function" && param(asset)) {
        return asset;
      }
    }
  }
  function filterAssets(param) {
    var filteredAssets = [];
    for (var asset of iterateAssets()) {
      if (typeof param === "string" ? asset.name === param : param(asset)) {
        filteredAssets.push(asset);
      }
    }
    return filteredAssets;
  }
  function findAssetId(name) {
    return findAsset(name)?.id;
  }
  var _nameToAssetCache;
  var init_assets = __esm({
    "src/lib/api/assets/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_enums();
      init_modules2();
      init_patches();
      _nameToAssetCache = {};
    }
  });

  // src/core/i18n/default.json
  var default_default;
  var init_default = __esm({
    "src/core/i18n/default.json"() {
      default_default = {
        ABOUT: "About",
        ACTIONS: "Actions",
        ARE_YOU_SURE_TO_CLEAR_DATA: "Are you sure you wish to clear the data of {name}?",
        ARE_YOU_SURE_TO_DELETE_PLUGIN: "Are you sure you wish to delete {name}? This will clear all of the plugin's data.",
        ARE_YOU_SURE_TO_DELETE_THEME: "Are you sure you wish to delete {name}?",
        ASSET_BROWSER: "Asset Browser",
        BRAND: "Brand",
        BUNNY: "Opti",
        BUNNY_URL: "Opti URL",
        BYTECODE: "Bytecode",
        CANCEL: "Cancel",
        CLEAR: "Clear",
        CLEAR_DATA: "Clear data",
        CLEAR_DATA_FAILED: "Failed to clear data for {name}!",
        CLEAR_DATA_SUCCESSFUL: "Cleared data for {name}.",
        CODENAME: "Codename",
        COMMAND_DEBUG_DESC: "Send Opti debug info.",
        COMMAND_DEBUG_OPT_EPHEMERALLY: "Send debug info ephemerally.",
        COMMAND_EVAL_DESC: "Evaluate JavaScript code.",
        COMMAND_EVAL_OPT_ASYNC: "Whether to support 'await' in code. Must explicitly return for result (default: false)",
        COMMAND_EVAL_OPT_CODE: "The code to evaluate.",
        COMMAND_PLUGINS_DESC: "Send list of installed plugins.",
        COMMAND_PLUGINS_OPT_EPHEMERALLY: "Send plugins list ephemerally.",
        COMPONENT: "Component",
        CONFIRMATION_LINK_IS_A_TYPE: "This link is a **{urlType, select, plugin {Plugin} theme {Theme} other {Add-on}}**, would you like to install it?",
        CONNECT_TO_DEBUG_WEBSOCKET: "Connect to debug websocket",
        CONNECT_TO_REACT_DEVTOOLS: "Connect to React DevTools",
        CONTINUE: "Continue",
        COPIED_TO_CLIPBOARD: "Copied to clipboard",
        COPY_URL: "Copy URL",
        DEBUG: "Debug",
        DEBUGGER_URL: "Debugger URL",
        DELETE: "Delete",
        DESC_EXTRACT_FONTS_FROM_THEME: 'Looks out for "fonts" field in your currently applied theme and install it.',
        DEVELOPER: "Developer",
        DEVELOPER_SETTINGS: "Developer Settings",
        DISABLE_THEME: "Disable Theme",
        DISABLE_UPDATES: "Disable updates",
        DISCORD_SERVER: "Discord Server",
        DONE: "Done",
        ENABLE_EVAL_COMMAND: "Enable /eval command",
        ENABLE_EVAL_COMMAND_DESC: "Evaluate JavaScript directly from command. Be cautious when using this command as it may pose a security risk. Make sure to know what you are doing.",
        ENABLE_UPDATES: "Enable updates",
        ERROR_BOUNDARY_TOOLS_LABEL: "ErrorBoundary Tools",
        EXTRACT: "Extract",
        FONT_NAME: "Font Name",
        FONTS: "Fonts",
        ADDON_HUB: "Addon Hub",
        GENERAL: "General",
        GITHUB: "GitHub",
        HOLD_UP: "Hold Up",
        INFO: "Info",
        INSTALL: "Install",
        INSTALL_ADDON: "Install an add-on",
        INSTALL_FONT: "Install a font",
        INSTALL_PLUGIN: "Install a plugin",
        INSTALL_REACT_DEVTOOLS: "Install React DevTools",
        INSTALL_THEME: "Install Theme",
        LABEL_EXTRACT_FONTS_FROM_THEME: "Extract font from theme",
        LINKS: "Links",
        LOAD_FROM_CUSTOM_URL: "Load from custom URL",
        LOAD_FROM_CUSTOM_URL_DEC: "Load Opti from a custom endpoint.",
        LOAD_REACT_DEVTOOLS: "Load React DevTools",
        LOADER: "Loader",
        MACHINE_ID: "Machine ID",
        MANUFACTURER: "Manufacturer",
        MESSAGE: "Message",
        MISCELLANEOUS: "Miscellaneous",
        MODAL_THEME_REFETCHED: "Theme refetched",
        MODAL_THEME_REFETCHED_DESC: "A reload is required to see the changes. Do you want to reload now?",
        MODAL_UNPROXIED_PLUGIN_DESC: "The plugin you are trying to install has not been proxied/verified by staffs. Are you sure you want to continue?",
        MODAL_UNPROXIED_PLUGIN_HEADER: "Unproxied Plugin",
        MODEL: "Model",
        OPEN_IN_BROWSER: "Open in Browser",
        OPERATING_SYSTEM: "Operating System",
        OVERFLOW_PLUGIN_SETTINGS: "Plugin settings",
        PLATFORM: "Platform",
        PLUGIN_REFETCH_FAILED: "Failed to refetch plugin!",
        PLUGIN_REFETCH_SUCCESSFUL: "Successfully refetched plugin!",
        PLUGINS: "Plugins",
        REFETCH: "Refetch",
        RELOAD: "Reload",
        RELOAD_DISCORD: "Reload Discord",
        RELOAD_IN_NORMAL_MODE: "Reload in Normal Mode",
        RELOAD_IN_NORMAL_MODE_DESC: "This will reload Discord normally",
        RELOAD_IN_SAFE_MODE: "Reload in Safe Mode",
        RELOAD_IN_SAFE_MODE_DESC: "This will reload Discord without loading addons",
        REMOVE: "Remove",
        RESTART_REQUIRED_TO_TAKE_EFFECT: "Restart is required to take effect",
        RETRY: "Retry",
        RETRY_RENDER: "Retry Render",
        SAFE_MODE: "Safe Mode",
        SAFE_MODE_NOTICE_FONTS: "You are in Safe Mode, meaning fonts have been temporarily disabled. {enabled, select, true {If a font appears to be causing the issue, you can press below to disable it persistently.} other {}}",
        SAFE_MODE_NOTICE_PLUGINS: "You are in Safe Mode, so plugins cannot be loaded. Disable any misbehaving plugins, then return to Normal Mode from the General settings page.",
        SAFE_MODE_NOTICE_THEMES: "You are in Safe Mode, meaning themes have been temporarily disabled. {enabled, select, true {If a theme appears to be causing the issue, you can press below to disable it persistently.} other {}}",
        SEARCH: "Search",
        SEPARATOR: ", ",
        SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS: "Activate Discord Experiments",
        SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS_DESC: "Warning: Messing with this feature may lead to account termination. We are not responsible for what you do with this feature.",
        STACK_TRACE: "Stack Trace",
        SUCCESSFULLY_INSTALLED: "Successfully installed",
        THEME_EXTRACTOR_DESC: "This pack overrides the following: {fonts}",
        THEME_REFETCH_FAILED: "Failed to refetch theme!",
        THEME_REFETCH_SUCCESSFUL: "Successfully refetched theme.",
        THEMES: "Themes",
        THEMES_RELOAD_FOR_CHANGES: "Reload the app to fully apply changes!",
        TOASTS_INSTALLED_PLUGIN: "Installed plugin",
        TOASTS_PLUGIN_UPDATE: "{update, select, true {Enabled} other {Disabled}} updates for {name}.",
        UH_OH: "Uh oh.",
        UNINSTALL: "Uninstall",
        UNINSTALL_TITLE: "Uninstall {title}",
        URL_PLACEHOLDER: "https://example.com",
        VERSION: "Version",
        VERSIONS: "Versions"
      };
    }
  });

  // src/core/i18n/index.ts
  function initFetchI18nStrings() {
    var cb = ({ locale }) => {
      var languageMap = {
        "es-ES": "es",
        "es-419": "es_419",
        "zh-TW": "zh-Hant",
        "zh-CN": "zh-Hans",
        "pt-PT": "pt",
        "pt-BR": "pt_BR",
        "sv-SE": "sv"
      };
      var resolvedLocale = _lastSetLocale = languageMap[locale] ?? locale;
      if (resolvedLocale.startsWith("en-")) {
        _currentLocale = null;
        return;
      }
      if (!_loadedLocale.has(resolvedLocale)) {
        _loadedLocale.add(resolvedLocale);
        fetch(`https://raw.githubusercontent.com/Opti-mod/i18n/main/resources/${resolvedLocale}/bunny.json`).then((r) => r.json()).then((strings) => _loadedStrings[resolvedLocale] = strings).then(() => resolvedLocale === _lastSetLocale && (_currentLocale = resolvedLocale)).catch((e) => console.error(`An error occured while fetching strings for ${resolvedLocale}: ${e}`));
      } else {
        _currentLocale = resolvedLocale;
      }
    };
    FluxDispatcher.subscribe("I18N_LOAD_SUCCESS", cb);
    return () => FluxDispatcher.unsubscribe("I18N_LOAD_SUCCESS", cb);
  }
  function formatString(key, val) {
    var str = Strings[key];
    return new IntlMessageFormat(str).format(val);
  }
  var IntlMessageFormat, _currentLocale, _lastSetLocale, _loadedLocale, _loadedStrings, Strings;
  var init_i18n = __esm({
    "src/core/i18n/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_wrappers();
      init_default();
      IntlMessageFormat = findByNameLazy("MessageFormat");
      _currentLocale = null;
      _lastSetLocale = null;
      _loadedLocale = /* @__PURE__ */ new Set();
      _loadedStrings = {};
      Strings = new Proxy({}, {
        get: (_t, prop) => {
          if (_currentLocale && _loadedStrings[_currentLocale]?.[prop]) {
            return _loadedStrings[_currentLocale]?.[prop];
          }
          return default_default[prop];
        }
      });
    }
  });

  // src/lib/ui/toasts.ts
  var toasts_exports = {};
  __export(toasts_exports, {
    showToast: () => showToast
  });
  var uuid4, showToast;
  var init_toasts = __esm({
    "src/lib/ui/toasts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_assets();
      init_lazy();
      init_common();
      init_wrappers();
      ({ uuid4 } = lazyDestructure(() => findByProps("uuid4")));
      showToast = (content, asset) => toasts.open({
        // ? In build 182205/44707, Discord changed their toasts, source is no longer used, rather icon, and a key is needed.
        // TODO: We could probably have the developer specify a key themselves, but this works to fix toasts
        key: `vd-toast-${uuid4()}`,
        content,
        source: asset,
        icon: asset
      });
      showToast.showCopyToClipboard = (message = Strings.COPIED_TO_CLIPBOARD) => {
        showToast(message, findAssetId("toast_copy_link"));
      };
    }
  });

  // src/lib/api/debug.ts
  var debug_exports = {};
  __export(debug_exports, {
    connectToDebugger: () => connectToDebugger,
    getDebugInfo: () => getDebugInfo,
    patchLogHook: () => patchLogHook,
    toggleSafeMode: () => toggleSafeMode,
    versionHash: () => versionHash
  });
  function toggleSafeMode() {
    return _toggleSafeMode.apply(this, arguments);
  }
  function _toggleSafeMode() {
    _toggleSafeMode = _async_to_generator(function* () {
      settings.safeMode = {
        ...settings.safeMode,
        enabled: !settings.safeMode?.enabled
      };
      if (isThemeSupported()) {
        if (getThemeFromLoader()?.id)
          settings.safeMode.currentThemeId = getThemeFromLoader().id;
        if (settings.safeMode?.enabled) {
          yield selectTheme(null);
        } else if (settings.safeMode?.currentThemeId) {
          yield selectTheme(themes[settings.safeMode?.currentThemeId]);
        }
      }
      setTimeout(BundleUpdaterManager.reload, 400);
    });
    return _toggleSafeMode.apply(this, arguments);
  }
  function connectToDebugger(url2) {
    if (socket !== void 0 && socket.readyState !== WebSocket.CLOSED)
      socket.close();
    if (!url2) {
      showToast("Invalid debugger URL!", findAssetId("Small"));
      return;
    }
    socket = new WebSocket(`ws://${url2}`);
    socket.addEventListener("open", () => showToast("Connected to debugger.", findAssetId("Check")));
    socket.addEventListener("message", (message) => {
      try {
        (0, eval)(message.data);
      } catch (e) {
        console.error(e);
      }
    });
    socket.addEventListener("error", (err) => {
      console.log(`Debugger error: ${err.message}`);
      showToast("An error occurred with the debugger connection!", findAssetId("Small"));
    });
  }
  function patchLogHook() {
    var unpatch = after("nativeLoggingHook", globalThis, (args) => {
      if (socket?.readyState === WebSocket.OPEN)
        socket.send(JSON.stringify({
          message: args[0],
          level: args[1]
        }));
      logger.log(args[0]);
    });
    return () => {
      socket && socket.close();
      unpatch();
    };
  }
  function getDebugInfo() {
    var hermesProps = window.HermesInternal.getRuntimeProperties();
    var hermesVer = hermesProps["OSS Release Version"];
    var padding = "for RN ";
    var PlatformConstants = import_react_native5.Platform.constants;
    var rnVer = PlatformConstants.reactNativeVersion;
    return {
      /**
       * @deprecated use `bunny` field
       * */
      vendetta: {
        version: versionHash.split("-")[0],
        loader: getLoaderName()
      },
      bunny: {
        version: versionHash,
        loader: {
          name: getLoaderName(),
          version: getLoaderVersion()
        }
      },
      discord: {
        version: NativeClientInfoModule.Version,
        build: NativeClientInfoModule.Build
      },
      react: {
        version: React.version,
        nativeVersion: hermesVer.startsWith(padding) ? hermesVer.substring(padding.length) : `${rnVer.major}.${rnVer.minor}.${rnVer.patch}`
      },
      hermes: {
        version: hermesVer,
        buildType: hermesProps.Build,
        bytecodeVersion: hermesProps["Bytecode Version"]
      },
      ...import_react_native5.Platform.select({
        android: {
          os: {
            name: "Android",
            version: PlatformConstants.Release,
            sdk: PlatformConstants.Version
          }
        },
        ios: {
          os: {
            name: PlatformConstants.systemName,
            version: PlatformConstants.osVersion
          }
        }
      }),
      ...import_react_native5.Platform.select({
        android: {
          device: {
            manufacturer: PlatformConstants.Manufacturer,
            brand: PlatformConstants.Brand,
            model: PlatformConstants.Model,
            codename: NativeDeviceModule.device
          }
        },
        ios: {
          device: {
            manufacturer: NativeDeviceModule.deviceManufacturer,
            brand: NativeDeviceModule.deviceBrand,
            model: NativeDeviceModule.deviceModel,
            codename: NativeDeviceModule.device
          }
        }
      })
    };
  }
  var import_react_native5, socket, versionHash;
  var init_debug = __esm({
    "src/lib/api/debug.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_themes();
      init_assets();
      init_loader();
      init_modules();
      init_patcher();
      init_settings();
      init_logger();
      init_toasts();
      import_react_native5 = __toESM(require_react_native());
      versionHash = "b387aa1-main";
    }
  });

  // src/lib/ui/components/wrappers/AlertModal.tsx
  function AlertModal2(props) {
    var forwardFailedModal = findByFilePath("modules/forwarding/native/ForwardFailedAlertModal.tsx");
    if (!forwardFailedModal && "extraContent" in props) {
      props.content = /* @__PURE__ */ jsxs(import_react_native6.View, {
        style: {
          gap: 16
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: props.content
          }),
          /* @__PURE__ */ jsx(import_react_native6.View, {
            children: props.extraContent
          })
        ]
      });
      delete props.extraContent;
    }
    return /* @__PURE__ */ jsx(_AlertModal, {
      ...props
    });
  }
  var import_react_native6, _AlertModal, _AlertActionButton, AlertActionButton2;
  var init_AlertModal = __esm({
    "src/lib/ui/components/wrappers/AlertModal.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_lazy();
      init_metro();
      init_components();
      import_react_native6 = __toESM(require_react_native());
      ({ AlertModal: _AlertModal, AlertActionButton: _AlertActionButton } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
      AlertActionButton2 = _AlertActionButton;
    }
  });

  // src/lib/ui/components/wrappers/index.ts
  var wrappers_exports = {};
  __export(wrappers_exports, {
    AlertActionButton: () => AlertActionButton2,
    AlertModal: () => AlertModal2
  });
  var init_wrappers2 = __esm({
    "src/lib/ui/components/wrappers/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_AlertModal();
    }
  });

  // src/lib/ui/color.ts
  function isSemanticColor(sym) {
    return colorResolver.isSemanticColor(sym);
  }
  function resolveSemanticColor(sym, theme = ThemeStore2.theme) {
    return colorResolver.resolveSemanticColor(theme, sym);
  }
  var color, semanticColors, rawColors, ThemeStore2, colorResolver;
  var init_color = __esm({
    "src/lib/ui/color.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_wrappers();
      color = findByProps("SemanticColor");
      semanticColors = color?.default?.colors ?? constants?.ThemeColorMap;
      rawColors = color?.default?.unsafe_rawColors ?? constants?.Colors;
      ThemeStore2 = findByStoreNameLazy("ThemeStore");
      colorResolver = color.default.meta ??= color.default.internal;
    }
  });

  // src/lib/ui/styles.ts
  var styles_exports = {};
  __export(styles_exports, {
    TextStyleSheet: () => TextStyleSheet,
    ThemeContext: () => ThemeContext,
    createLegacyClassComponentStyles: () => createLegacyClassComponentStyles,
    createStyles: () => createStyles,
    createThemedStyleSheet: () => createThemedStyleSheet
  });
  function createStyles(sheet) {
    return proxyLazy(() => Styles.createStyles(sheet));
  }
  function createLegacyClassComponentStyles(sheet) {
    return proxyLazy(() => Styles.createLegacyClassComponentStyles(sheet));
  }
  function createThemedStyleSheet(sheet) {
    for (var key in sheet) {
      sheet[key] = new Proxy(import_react_native7.StyleSheet.flatten(sheet[key]), {
        get(target, prop, receiver) {
          var res = Reflect.get(target, prop, receiver);
          return isSemanticColor(res) ? resolveSemanticColor(res) : res;
        }
      });
    }
    return sheet;
  }
  var import_react_native7, Styles, ThemeContext, TextStyleSheet;
  var init_styles = __esm({
    "src/lib/ui/styles.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      init_color();
      import_react_native7 = __toESM(require_react_native());
      Styles = findByPropsLazy("createStyles");
      ({ ThemeContext } = lazyDestructure(() => findByProps("ThemeContext"), {
        hint: "object"
      }));
      ({ TextStyleSheet } = lazyDestructure(() => findByProps("TextStyleSheet")));
    }
  });

  // src/lib/ui/components/Codeblock.tsx
  function Codeblock({ selectable, style, children }) {
    if (!selectable)
      return /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        children
      });
    return import_react_native8.Platform.select({
      ios: /* @__PURE__ */ jsx(InputBasedCodeblock, {
        style,
        children
      }),
      default: /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        children,
        selectable: true
      })
    });
  }
  var import_react_native8, useStyles, InputBasedCodeblock, TextBasedCodeblock;
  var init_Codeblock = __esm({
    "src/lib/ui/components/Codeblock.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_common();
      init_color();
      init_styles();
      import_react_native8 = __toESM(require_react_native());
      useStyles = createStyles({
        codeBlock: {
          fontFamily: constants.Fonts.CODE_NORMAL,
          fontSize: 12,
          textAlignVertical: "center",
          backgroundColor: semanticColors.BACKGROUND_SECONDARY,
          color: semanticColors.TEXT_NORMAL,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: semanticColors.BACKGROUND_TERTIARY,
          padding: 10
        }
      });
      InputBasedCodeblock = ({ style, children }) => /* @__PURE__ */ jsx(import_react_native8.TextInput, {
        editable: false,
        multiline: true,
        style: [
          useStyles().codeBlock,
          style && style
        ],
        value: children
      });
      TextBasedCodeblock = ({ selectable, style, children }) => /* @__PURE__ */ jsx(import_react_native8.Text, {
        selectable,
        style: [
          useStyles().codeBlock,
          style && style
        ],
        children
      });
    }
  });

  // src/lib/ui/sheets.ts
  var sheets_exports = {};
  __export(sheets_exports, {
    hideSheet: () => hideSheet,
    showSheet: () => showSheet
  });
  function showSheet(key, lazyImport, props) {
    if (!("then" in lazyImport))
      lazyImport = Promise.resolve({
        default: lazyImport
      });
    actionSheet.openLazy(lazyImport, key, props ?? {});
  }
  function hideSheet(key) {
    actionSheet.hideActionSheet(key);
  }
  var actionSheet;
  var init_sheets = __esm({
    "src/lib/ui/sheets.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      actionSheet = findByPropsLazy("openLazy", "hideActionSheet");
    }
  });

  // src/core/ui/reporter/utils/parseComponentStack.tsx
  function parseComponentStack(componentStack) {
    return componentStack.split(/[\s|\n]+?in /).filter(Boolean);
  }
  var init_parseComponentStack = __esm({
    "src/core/ui/reporter/utils/parseComponentStack.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["react"];
    }
  });

  // src/core/ui/reporter/components/ErrorComponentStackCard.tsx
  function ErrorComponentStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react.useState)(true);
    var stack;
    try {
      stack = parseComponentStack(props.componentStack);
      stack = collapsed ? stack.slice(0, 4) : stack;
    } catch (e) {
      return;
    }
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(import_react_native9.View, {
        style: {
          gap: 8
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: "Component Stack"
          }),
          /* @__PURE__ */ jsx(import_react_native9.View, {
            style: {
              gap: 4
            },
            children: stack.map((component) => /* @__PURE__ */ jsxs(import_react_native9.View, {
              style: {
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "<"
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  children: component
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "/>"
                })
              ]
            }))
          }),
          collapsed && /* @__PURE__ */ jsx(Text, {
            children: "..."
          }),
          /* @__PURE__ */ jsxs(import_react_native9.View, {
            style: {
              gap: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: `Show ${collapsed ? "more" : "less"}`,
                icon: collapsed ? findAssetId("down_arrow") : /* @__PURE__ */ jsx(import_react_native9.Image, {
                  style: {
                    transform: [
                      {
                        rotate: `${collapsed ? 0 : 180}deg`
                      }
                    ]
                  },
                  source: findAssetId("down_arrow")
                }),
                onPress: () => setCollapsed((v2) => !v2)
              }),
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: "Copy",
                icon: findAssetId("CopyIcon"),
                onPress: () => clipboard.setString(props.componentStack)
              })
            ]
          })
        ]
      })
    });
  }
  var import_react, import_react_native9;
  var init_ErrorComponentStackCard = __esm({
    "src/core/ui/reporter/components/ErrorComponentStackCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_parseComponentStack();
      init_assets();
      init_common();
      init_components();
      import_react = __toESM(require_react());
      import_react_native9 = __toESM(require_react_native());
    }
  });

  // src/core/ui/reporter/utils/parseErrorStack.ts
  function isInternalBytecodeSourceUrl(sourceUrl) {
    return sourceUrl === "InternalBytecode.js";
  }
  function parseLine(line) {
    var asFrame = line.match(RE_FRAME);
    if (asFrame) {
      return {
        type: "FRAME",
        functionName: asFrame[1],
        location: asFrame[2] === "native" ? {
          type: "NATIVE"
        } : asFrame[3] === "address at " ? isInternalBytecodeSourceUrl(asFrame[4]) ? {
          type: "INTERNAL_BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "SOURCE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          column1Based: Number.parseInt(asFrame[6], 10)
        }
      };
    }
    var asSkipped = line.match(RE_SKIPPED);
    if (asSkipped) {
      return {
        type: "SKIPPED",
        count: Number.parseInt(asSkipped[1], 10)
      };
    }
  }
  function parseHermesStack(stack) {
    var lines = stack.split(/\n/);
    var entries = [];
    var lastMessageLine = -1;
    for (var i = 0; i < lines.length; ++i) {
      var line = lines[i];
      if (!line) {
        continue;
      }
      var entry = parseLine(line);
      if (entry) {
        entries.push(entry);
        continue;
      }
      if (RE_COMPONENT_NO_STACK.test(line)) {
        continue;
      }
      lastMessageLine = i;
      entries = [];
    }
    var message = lines.slice(0, lastMessageLine + 1).join("\n");
    return {
      message,
      entries
    };
  }
  function convertHermesStack(stack) {
    var frames = [];
    for (var entry of stack.entries) {
      if (entry.type !== "FRAME") {
        continue;
      }
      var { location, functionName } = entry;
      if (location.type === "NATIVE" || location.type === "INTERNAL_BYTECODE") {
        continue;
      }
      frames.push({
        methodName: functionName,
        file: location.sourceUrl,
        lineNumber: location.line1Based,
        column: location.type === "SOURCE" ? location.column1Based - 1 : location.virtualOffset0Based
      });
    }
    return frames;
  }
  function parseErrorStack(errorStack) {
    if (errorStack == null) {
      return [];
    }
    var parsedStack = Array.isArray(errorStack) ? errorStack : convertHermesStack(parseHermesStack(errorStack));
    return parsedStack;
  }
  var RE_FRAME, RE_SKIPPED, RE_COMPONENT_NO_STACK;
  var init_parseErrorStack = __esm({
    "src/core/ui/reporter/utils/parseErrorStack.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      RE_FRAME = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
      RE_SKIPPED = /^ {4}... skipping (\d+) frames$/;
      RE_COMPONENT_NO_STACK = /^ {4}at .*$/;
    }
  });

  // src/core/ui/reporter/components/ErrorStackCard.tsx
  function ErrorStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react2.useState)(true);
    var stack;
    try {
      var parsedErrorStack = parseErrorStack(props.error.stack);
      stack = collapsed ? parsedErrorStack.slice(0, 4) : parsedErrorStack;
    } catch (e) {
      return null;
    }
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(import_react_native10.View, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: "Call Stack"
          }),
          /* @__PURE__ */ jsx(import_react_native10.View, {
            style: {
              gap: 4
            },
            children: stack.map((f, id) => /* @__PURE__ */ jsx(Line, {
              id,
              frame: f
            }))
          }),
          collapsed && /* @__PURE__ */ jsx(Text, {
            children: "..."
          }),
          /* @__PURE__ */ jsxs(import_react_native10.View, {
            style: {
              gap: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: `Show ${collapsed ? "more" : "less"}`,
                icon: collapsed ? findAssetId("down_arrow") : /* @__PURE__ */ jsx(import_react_native10.Image, {
                  style: {
                    transform: [
                      {
                        rotate: `${collapsed ? 0 : 180}deg`
                      }
                    ]
                  },
                  source: findAssetId("down_arrow")
                }),
                onPress: () => setCollapsed((v2) => !v2)
              }),
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: "Copy",
                icon: findAssetId("CopyIcon"),
                onPress: () => clipboard.setString(props.error.stack)
              })
            ]
          })
        ]
      })
    });
  }
  function Line(props) {
    var [collapsed, setCollapsed] = (0, import_react2.useState)(true);
    return /* @__PURE__ */ jsxs(import_react_native10.Pressable, {
      onPress: () => setCollapsed((v2) => !v2),
      children: [
        /* @__PURE__ */ jsx(Text, {
          style: {
            fontFamily: constants.Fonts.CODE_BOLD
          },
          children: props.frame.methodName
        }),
        /* @__PURE__ */ jsx(Text, {
          style: {
            fontFamily: constants.Fonts.CODE_NORMAL
          },
          ellipsizeMode: "middle",
          numberOfLines: collapsed ? 1 : void 0,
          children: /* @__PURE__ */ jsxs(Text, {
            color: "text-muted",
            children: [
              props.frame.file === INDEX_BUNDLE_FILE ? "jsbundle" : props.frame.file,
              ":",
              props.frame.lineNumber,
              ":",
              props.frame.column
            ]
          })
        })
      ]
    }, props.id);
  }
  var import_react2, import_react_native10;
  var init_ErrorStackCard = __esm({
    "src/core/ui/reporter/components/ErrorStackCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_parseErrorStack();
      init_assets();
      init_common();
      init_components();
      import_react2 = __toESM(require_react());
      import_react_native10 = __toESM(require_react_native());
      init_ErrorCard();
    }
  });

  // src/core/ui/reporter/components/ErrorDetailsActionSheet.tsx
  function ErrorDetailsActionSheet(props) {
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native11.View, {
        style: {
          gap: 12,
          paddingVertical: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/extrabold",
            children: "Error"
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: props.error.message
          }),
          hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
            error: props.error
          }),
          isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
            componentStack: props.error.componentStack
          }) : null
        ]
      })
    });
  }
  var import_react_native11;
  var init_ErrorDetailsActionSheet = __esm({
    "src/core/ui/reporter/components/ErrorDetailsActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_isStack();
      init_components2();
      init_components();
      import_react_native11 = __toESM(require_react_native());
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
    }
  });

  // src/core/ui/reporter/components/ErrorCard.tsx
  function ErrorCard(props) {
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        children: [
          props.header && typeof props.header !== "string" ? props.header : /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: props.header ?? Strings.UH_OH
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: String(props.error)
          }),
          /* @__PURE__ */ jsxs(TwinButtons, {
            children: [
              props.onRetryRender && /* @__PURE__ */ jsx(Button, {
                variant: "destructive",
                // icon={findAssetId("RetryIcon")}
                text: Strings.RETRY_RENDER,
                onPress: props.onRetryRender
              }),
              props.error instanceof Error ? /* @__PURE__ */ jsx(Button, {
                text: "Details",
                // icon={findAssetId("CircleInformationIcon-primary")}
                onPress: () => showSheet("BunnyErrorDetailsActionSheet", ErrorDetailsActionSheet, {
                  error: props.error
                })
              }) : null
            ]
          })
        ]
      })
    });
  }
  var INDEX_BUNDLE_FILE;
  var init_ErrorCard = __esm({
    "src/core/ui/reporter/components/ErrorCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_components2();
      init_sheets();
      init_components();
      init_ErrorDetailsActionSheet();
      INDEX_BUNDLE_FILE = window.HermesInternal.getFunctionLocation(window.__r).fileName;
    }
  });

  // src/lib/ui/components/ErrorBoundary.tsx
  var _React_Component, ErrorBoundary;
  var init_ErrorBoundary = __esm({
    "src/lib/ui/components/ErrorBoundary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_inherits();
      init_jsxRuntime();
      init_ErrorCard();
      init_common();
      init_styles();
      ErrorBoundary = /* @__PURE__ */ function(_superClass) {
        "use strict";
        _inherits(ErrorBoundary2, _superClass);
        function ErrorBoundary2(props) {
          _class_call_check(this, ErrorBoundary2);
          var _this;
          _this = _call_super(this, ErrorBoundary2, [
            props
          ]);
          _this.state = {
            hasErr: false
          };
          return _this;
        }
        _create_class(ErrorBoundary2, [
          {
            key: "render",
            value: function render() {
              if (!this.state.hasErr)
                return this.props.children;
              return /* @__PURE__ */ jsx(ErrorCard, {
                error: this.state.error,
                onRetryRender: () => this.setState({
                  hasErr: false
                })
              });
            }
          }
        ]);
        return ErrorBoundary2;
      }(_React_Component = React2.Component);
      _define_property(ErrorBoundary, "contextType", ThemeContext);
      _define_property(ErrorBoundary, "getDerivedStateFromError", (error) => ({
        hasErr: true,
        error
      }));
    }
  });

  // src/lib/ui/components/Search.tsx
  function SearchIcon() {
    return /* @__PURE__ */ jsx(import_react_native12.Image, {
      style: {
        width: 16,
        height: 16
      },
      source: findAssetId("search")
    });
  }
  var import_react_native12, Search_default;
  var init_Search = __esm({
    "src/lib/ui/components/Search.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_components();
      init_ErrorBoundary();
      import_react_native12 = __toESM(require_react_native());
      Search_default = ({ onChangeText, placeholder, style, isRound }) => {
        var [query, setQuery] = React.useState("");
        var onChange = (value) => {
          setQuery(value);
          onChangeText?.(value);
        };
        return /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(import_react_native12.View, {
            style,
            children: /* @__PURE__ */ jsx(TextInput, {
              grow: true,
              isClearable: true,
              leadingIcon: SearchIcon,
              placeholder: placeholder ?? Strings.SEARCH,
              onChange,
              returnKeyType: "search",
              size: "md",
              autoCapitalize: "none",
              autoCorrect: false,
              isRound,
              value: query
            })
          })
        });
      };
    }
  });

  // src/lib/ui/components/Summary.tsx
  function Summary({ label, icon, noPadding = false, noAnimation = false, children }) {
    var [hidden, setHidden] = React.useState(true);
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx(TableRow, {
          label,
          icon: icon && /* @__PURE__ */ jsx(TableRow.Icon, {
            source: findAssetId(icon)
          }),
          trailing: /* @__PURE__ */ jsx(LegacyFormRow.Arrow, {
            style: {
              transform: [
                {
                  rotate: `${hidden ? 180 : 90}deg`
                }
              ]
            }
          }),
          onPress: () => {
            setHidden(!hidden);
            if (!noAnimation)
              import_react_native13.LayoutAnimation.configureNext(import_react_native13.LayoutAnimation.Presets.easeInEaseOut);
          }
        }),
        !hidden && /* @__PURE__ */ jsx(Fragment, {
          children: /* @__PURE__ */ jsx(import_react_native13.View, {
            style: !noPadding && {
              paddingHorizontal: 15
            },
            children
          })
        })
      ]
    });
  }
  var import_react_native13;
  var init_Summary = __esm({
    "src/lib/ui/components/Summary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_components();
      import_react_native13 = __toESM(require_react_native());
    }
  });

  // src/lib/ui/components/index.ts
  var components_exports2 = {};
  __export(components_exports2, {
    Codeblock: () => Codeblock,
    ErrorBoundary: () => ErrorBoundary,
    Search: () => Search_default,
    Summary: () => Summary,
    wrappers: () => wrappers_exports
  });
  var init_components2 = __esm({
    "src/lib/ui/components/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers2();
      init_Codeblock();
      init_ErrorBoundary();
      init_Search();
      init_Summary();
    }
  });

  // src/core/ui/reporter/components/ErrorBoundaryScreen.tsx
  function ErrorBoundaryScreen(props) {
    var styles = useStyles2();
    var debugInfo = getDebugInfo();
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(SafeAreaProvider, {
        children: /* @__PURE__ */ jsxs(SafeAreaView, {
          style: styles.container,
          children: [
            /* @__PURE__ */ jsxs(import_react_native14.View, {
              style: {
                gap: 4
              },
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "display-lg",
                  children: "Oopsie."
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/normal",
                  children: "A crash occurred while rendering a component. This could be caused by a plugin, Opti or Discord itself."
                }),
                /* @__PURE__ */ jsxs(Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: [
                    debugInfo.os.name,
                    "; ",
                    debugInfo.discord.build,
                    " (",
                    debugInfo.discord.version,
                    "); ",
                    debugInfo.bunny.version
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs(import_react_native14.ScrollView, {
              fadingEdgeLength: 64,
              contentContainerStyle: {
                gap: 12
              },
              children: [
                /* @__PURE__ */ jsx(Codeblock, {
                  selectable: true,
                  children: props.error.message
                }),
                hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
                  error: props.error
                }),
                isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
                  componentStack: props.error.componentStack
                }) : null
              ]
            }),
            /* @__PURE__ */ jsxs(Card, {
              style: {
                gap: 6
              },
              children: [
                /* @__PURE__ */ jsx(Button, {
                  text: "Reload Discord",
                  onPress: () => BundleUpdaterManager.reload()
                }),
                !settings.safeMode?.enabled && /* @__PURE__ */ jsx(Button, {
                  text: "Reload in Safe Mode",
                  onPress: () => toggleSafeMode()
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: "destructive",
                  text: "Retry Render",
                  onPress: () => props.rerender()
                })
              ]
            })
          ]
        })
      })
    });
  }
  var import_react_native14, useStyles2;
  var init_ErrorBoundaryScreen = __esm({
    "src/core/ui/reporter/components/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_isStack();
      init_debug();
      init_modules();
      init_settings();
      init_components2();
      init_styles();
      init_common();
      init_components();
      import_react_native14 = __toESM(require_react_native());
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
      useStyles2 = createStyles({
        container: {
          flex: 1,
          backgroundColor: tokens.colors.BG_BASE_SECONDARY,
          paddingHorizontal: 16,
          height: "100%",
          padding: 8,
          gap: 12
        }
      });
    }
  });

  // src/core/debug/patches/patchErrorBoundary.tsx
  function getErrorBoundaryContext() {
    var ctxt = findByNameLazy("ErrorBoundary")[_lazyContextSymbol];
    return new Promise((resolve) => ctxt.getExports((exp) => resolve(exp.prototype)));
  }
  function patchErrorBoundary() {
    return after.await("render", getErrorBoundaryContext(), function() {
      if (!this.state.error)
        return;
      return /* @__PURE__ */ jsx(ErrorBoundaryScreen, {
        error: this.state.error,
        rerender: () => this.setState({
          info: null,
          error: null
        })
      });
    });
  }
  var init_patchErrorBoundary = __esm({
    "src/core/debug/patches/patchErrorBoundary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_ErrorBoundaryScreen();
      init_patcher();
      init_lazy2();
      init_wrappers();
    }
  });

  // globals:moment
  var require_moment = __commonJS({
    "globals:moment"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["moment"];
    }
  });

  // src/core/fixes.ts
  function onDispatch({ locale }) {
    try {
      import_moment.default.locale(locale.toLowerCase());
    } catch (e) {
      logger.error("Failed to fix timestamps...", e);
    }
    FluxDispatcher.unsubscribe("I18N_LOAD_SUCCESS", onDispatch);
  }
  var import_moment, fixes_default;
  var init_fixes = __esm({
    "src/core/fixes.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_logger();
      init_common();
      import_moment = __toESM(require_moment());
      fixes_default = () => {
        FluxDispatcher.subscribe("I18N_LOAD_SUCCESS", onDispatch);
      };
    }
  });

  // src/assets/icons/OptiLogo.png
  var OptiLogo_default;
  var init_OptiLogo = __esm({
    "src/assets/icons/OptiLogo.png"() {
      OptiLogo_default = "data:image/png;base64,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/xMWvPv5z3/+h17zmtc8kWIoToBcTcWzwGOPPfaipz7+1PctwOcfgl9DhBeAccDcd6N2hSNHTGHDJ9GlFfwkgf4JgX+LDg7+aj04UBRF8dzkZ37mZ667ePHi9ZcuXfpzzPzZDHwlMV8LxoFf12cLIC4ELMQMHAI4xMqPEfidRPQr1zz/+f+fMtD2S66m4lmCma96+OGHr7948eJ3Yl1/HzP+OBFdbfIVfI6wvABgrLw+uYAuhLAXQPQvQfgFZv7Jm2+++feI6BmPvCiKonjOwcz03ve+9+qPfvSjXwDg67GuX8nAHyTQOYihdhUzXwtgYVkx+ygxrWLI8TNY6L0Afp2Zn37h+sL/+Ubc+NQXfesX+dxT7Icy1K5A7rvvvi+gdf2jcqYffCK88pAPv4XkQ57vXJh/I73f45duvvnmX+qdiqIoikL4qZ/6qa9g5s+zxwxWrJ8H4C4AVxPRUwB+jJges+cQmOhffeM3fuO/7WMp9k0ZaqeE+++//6WHh4dfrqe/cNNNN30oeSmKoiiKy+Yd73jHTRcvXny1nb/4xS/+J3fUwwFFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFUZwslB2K0wkzX/XQQw9dZeeXLl26+fDi4bcTEWFRx9X/+Gkn0oPsJv5aOGHBihVL8OfH0atGtq4rls53S38r7VVPlnUME89jel18HlnWvU9zhuVtRhckZj6eTyIeXZLjIrpO8zg9ieXb6sjCZ6+brKvmt6W6Wjxr1ibXqTpoGVudyYn/aafTE2MFFomgpZ28Wsaio+kDYElpDmc53VBvsc5jrqfhU5FcThvzOtkRdoxFWaVsPWgom6HIpyeTdGF++rhysI6YYAjbH+WTSdqTPp2DuMNGeuOZEh0XS0tSmPo3Yt6is7dzPd/SFwA4zKrMYD10p3DOkEgIAGsC67pisT4waVMNaRBMzAcHB//btddee69JXvrSl174oi/6ogu9/+I0U4baFQ4z0yOPPHLjhQsXDrIssq7rVwH441hBOuFcB6avBuH5AMDEgPwPstFCYQoDyCpHTAAz+4BCkAMGg0KzYT0Uv+KbQSDWGDWebsAK6Vt4sAxsESbRlTHKTC4H5qmnOfXyLs0kc7nlNcer+RGPzTnGaeF8MI5yaFnZAA0ZpH3wX1csId419lCtm0hX/kkf4lCPRE3vDIeyMCeSfIDn7QWWphTIIHP5JCwzWvuIMtgMtlEnnQOHNrfdjrpwSYacl6003b3ptStejxPinuulY4dOcrKVpvQpizvWtzhYUY56+fmuPMMz0NVFJ195iBOXEy/6tswU9NcxZ5pnSL639Inp5nBeDqv2hVBeeYyZleWsfmFpqp8x3LaunpbW4RAnicPYZy0f8kMLfYKB9zLzowBARMzM//TcuXP/eww14fAbvuEb7iPKNVVcieRuUFxB3HfffbcAeAnW9fsZ9OJOmAYOZr4FwBeAcT4P/ObHB40YFmFynEy66joMVtGPHMzlCGnPDB+RqeNMZu4p7m7QmxgwhpuIOW7VZRZS3PpwVnydTA+ZeqMsD9DI+qb8mIwh7psT+yReuF4bZRvPN+oHGMswlj0FQ3uUb09GOydsZrAaE727xhnc80RmE3pkK3yUWZjpZD5pg12cdjCVb7hrUElPPKTiGMIi+9yIF9goX4RRfYdeTjKYOkzvVP4Oaxp2GtOdjSVal0BLV312dfTJGP9DHW7JkOTh4nSQqV5WjrHdDHHCPGs5mRtJnDxrb+5poi+jjVlbxLY65uMiEf0GAx+MfoJcA62PYVn+X1ddddXDr33ta8VvccUya3bFs8zDDz9808WnL34e4/AuML4UoC9l8AvgnXkc3NH1/1HItrKSRDZ4+GCSwnp6RMNk7nI/2U5bDnbpPcq6gW2ml59MBlnMJ6x+sBzTdJEH+CRkk/QGGTRcys+qK1g0WcFC1juEZbRJYWeaGOs2ktuGTRoqbAJzivJQjrPy7VRHqJdJewKkHIa8INZnr1NXBu6Q0Altms92FpTs08zhYGFZfc5kfiLCQS11pxA81xnUoHUm8bq+Xj5qIEihjHKDQxzmlOMP4iiT+LWtanomzwYxqWyN6mvco05azroCPJPP6mcqN330T7eKOxo4Qzhx7vMS5S6DxD+UT7yTEOVs6XO79Rl1heqzgRiz0fOoU0STk2OVL0xPYMEvgugXl2X56WVZfvPOO+/8cBewuGLIzbx4FnnooYc+8+LFi/8uH/IXE/jrQXQLgJcw82KdjUl7Xhp0YE6TjgoLElZdYlxsDhivsBkSZ77KNfkwAGU/4YjTgAfIgLwyg9TndNLaFS+pLMUbwxL6yc7LEHprdxZ2kqYVAWs4S7PT0x3VzUShp1GafNsgrfWzFZa5KZHlWgbqQ9zR9/DpIK5uuX47n9nd9M3GSzSGpGQh5S+IMRpU2lxxmLeVrhw2ZLlsDS/jDUNN0uvj9byynmU9Izls13fMcRJW9YkqD+nGnxjeytYMmtyXJzppsNZ+J4W1Vc5j+NTgLMpYdyxKDqlsxD20tUSsP84r2eJhKCtW9yUkOdZDn3an85auJrPDcCBjhGg35EMUknIKTnZu+m4SZXro7S2NIdM6a6wgehiy+vaPAPzywcHBe+6+++6PRU/Fs09ursWzBDOfu/+++97ERG8E80sBXM8r9/vSwuDf9X6SAQzeIdOkG+TQQZRi5477qSyePBh1/bvR+csrJBpp06z9uBwAqyGVJ/0WtukFTbM3EOdxs8ZNGreJuWW2z3vMD/dpmszzEvQdBv01RZr9xLjDhOBXu+j3k+2qi5wXALK/hVm2sYSwW4aa+Y/xwuMeDQmXI+RDDTGE+EhMZA/MkP14MpFsGGnmcXJruqvvma4Krf3kaDLTd2aoYRKu9TdYTkBte5DDGrZz07AtrUm9QfXRLFlVijdNLQhiPkgPJOy48iTtfjIOuAHRwmMjjlzOQ/p2ksOqm0FaFr6ixvonxS0GfoAlcKyVzlBDUIRZEwrtLURGLGFzfINciWEZzYhnaDoRS29SVy1cK4dYNiKQH5NJ/9G0Zmj4LJWoQrlO24wpE4oMOCSiR8D8IDH/jRddf/1fv+OOOy6FqItnmdw1i2cBZr76/vvu/x4Ab2bi23hdl6EXxsEjDaDDPBsHAgtnvTJPKBB3N3zSipq7yygCRBskDAJZJ5jcBxw/6cS+ypLzpOmL87jUb4Mb8sAdWGnHClUwFDw/Jo9HdmJ5ZfiDGXHCh8VrniDBLe4os3QNl+nm7M14tZxS9aqKbQBuOrdJaWakIblPdWKd2oO/VVcyoGGGCY6DIllXDTiEU5nVs0TTB7awjGQYWVuYxRvKDhrnVvlKWwnTo6UXDBoAWM2IjPqk9svWroOuJu50mvUbAACDrWNrPJ2ByPpHw2YDQoweCe/5c2kwVjTP6hVMzZAbymqjPWl3COUVVuCJTLuekO9ZeUiobfngHvS1PhTlDMayNj1HfTRui5dbfvwWZopTPIeDrJfqylJ0yXvv3/RlDeAXOU7SmJuT5anJgl/NR07Xs9frtQL4ADH9d9c8/5q/9ZrXvOYZC1Y8u0weRi72yaOPPvrCBz7ykTeB+QcAvg2rPaitKyNyEDr/pM/GASRflepACnvqj8KoARkQYFEmI84HadY/cWDIqgQd80TJJDMwk93gFOSJxnbbc4qNJhMvlr4Ze+5OVh65JATJ11yGIJkkCUwMqQ6VDU8juojaikYmX6mH8GwDbEqbKZRRrDNg9DyBiFo7i+4haDTSCMBBMFKnKVh9J+c8ccZUPRv6O5nanUHb4HU71EjMN6ewrMXHkAS9jekttMhWe7DYOfbfQfneQSbroAtpyWiZe1opntyqJG/iOdaV/BMH6afBKiKJyePI+bJ2oD8zfazvN0NwrEkfH0KZ5Pbkv0eUF0K+EPx34cxw7Ma9hOltulDMy6QxO9Ips1jOJRVqDj06TnV9TcNYjL3G+m/Wr2PBhQKx9tQRowrODCzMfBsIP/CJT3ziTe95z3teGMTFs0gZas8iT9z7xPVPf+Lp715X/o9AuHX1t+kIcdCzDtsm5p7Y2Rn9JDQydN1NPD3qB7oZpoOn7ZOLrWylyZkRRo0eH2sYYsgFL2TuZndaus2LnDfbMji2QdzLNIjZ5eNtGNHHRsAoDJD/EePVyjDqNxto1V/WuS/Tvhyi3NxzXj5V/LUgqc6tXlZNeJyitN2muu5WZzSPXcjgeRanYQbrJqlsY3Wkw35VSFxa1JTCrW1C5qFsj9AJLbOdN+Z5XimUuxpTXnTuzCk3plg4DBdGcXwwR1n1Cue5eeXo7Zy0PaoBGsuiM/ztJxmZnS7Q4ktpRXr/OfCgJhANSLSybOPpJBb1E8P5lgC0gsm6e/lq+XhfD+HMPQZlM8CNVIbGoCcw5LiPKtyGngd2dxPHPBCwrLzeSkT/0eOPP/7db33rW6+3YMWzRxlqzxJPPPHE9U/iyTeA+HuJ6LOZ+aAfXNov2chiA9CkA/oADgkTJyGDzEMQMWm8NvhmGDKh6OQbyYOW9fQMob23qLnpr8UfHQPi1AtislmFDlnY6dkZIDK7FIVncog3lYcYJm1/3FBWGZsLVOdpUdKWTuNqKJI+m6ifXPeLySbtiElLIE/sipdOrO8Yf5jojS6VrXyq26xtO1mhyyn7iIYfwuR4FYbquyHPZdi1EYs2Fk1OF7lwGtnIi2fS5sbVdaClx5sNbQMrf6+D7fYtRk4wUqJBRxZJb6DN6pWCHxdP9I1ZyTYQEAt71HU3mg89i/pmOpG17WigRrkVQKo3eB62E8r++4q3TA4JdvmY1ZlAIOAAwGcD+N51Xd9QxtqzTxlqzwKPPPLIC558Uo000O3MfM5kMniGHqadyQdV6OyYOiGZM816sjBzts7KG4PQxKlj6Oz5PMYbBmsf+FQwM31a3JexYhHi7HTaGvB2lBMwz3inz0TuaEXEMm357hPlcKtFPfhPrpPZRGZ0E2FwMzYHfnWOtzdhaoQyiqFbm2n1YvKWlx3GCyCzbjJgYr1N1VUDL+elK6N07o7QNHcRZ3iLg6XcY8iuXIP7lBBlJucDM90jUTYJS/4HYMotrccvvMzQGqPrw2s+zI3SNoaM+9sw5C6Xvg3rb16BY/2nxqH9y1mytmFhyRyNHCDg+ud2agfRmLNoKfWBXAamh//KQfaW8bqa9HlxVseNcvcymIT11JnPLUS3m7H2rne96wXZZ7E/plVVnBwPPPDA69Z1vR3r+iaAbm1GmgysZDu2wqTCaCMp236LMDJ0nXWysoIQB+nEk2EbUyZyJk13DNZPkhM/MmDpwSxeNHdLv/MTj/TEoztCL4YaIEG+q6yGs+hgiULLcqILeVbcY0fW1ycMnXgk6Jgf15kZrG9WB5JOsQyDTpF1XafGAUyHSf3YZN6RdI1iS1PaqQSPKca85Hg7GVrejK68Yv/IWdqqc3XnsLrr7QSa3qQMYl6juxxYNexIk6jTKZeRKWDBvUxz+46b+dVf1DeWA5O076yzrIRqLCmvCA+KSPwbeXIHyTdl/W0/bO5fMd8pac55De6xfxBCv/W68T9DGXeE9mpyjzvWRQ5vD4OEdgOCvlaohfHD2GbUcUsftnoM5de1bctzJNbbLO4UvjtR2RDG0Do1iOgSM/8uEf11Zv7tb/7mb/6pzn+xF7aqqzhmmPn8/fff/3oAP7Qy37YAL+Lw4ICNjtbBB3SQ9glZvVDsdGHgjDEwSZwStwQaBnDr8Doo2WB71OCa4XXtVsdm4V1dz7MqNZl0PC+TCVQOUmazXltyHuN0XJUW1gdpHdSdKLfk9IB8Es862U8w2tJ55Kj8AG3SsH/2hGAMmw2xFpFqmd47Yfng0N5cprUW302FmB6HsEFuIissYjUO4oSzkccoj228Kx+0tP10R/kxhbrdEa43mEIU8SDHa33VykC9jPr27WyQaQna08ZNNBpijlapvXKEgwEGC9saurh15aR/YvwhHnHY0FvjtvwPeUJ/kTQrZ6uT+CseNF3NTBfWSmplrGAsukK66n5T0qeqQ5Z6NG5G32hjOc/yMpNL8fX92+LMMq8Y1c3kc8IXPVKaFg0YnbE1YPUSw7h7/7Spyldm/igRfeAA+CuvuPXWt7361a++6J6KE6dufe6J+++//+vA+EFifDEB1zGnstdeQxAjKS98MKR3ytAT3a1jaoe1sdOu5oxFbhktSEaa/XY9VgafSHfLyfSIXph9gO5QP0QkxmY3GMVj8WihSZftZdBYh3w7+fZCCNsinzCNTOIbgqhfe/IvygkSpj0JqAbaEImGDfv9uoF6Q59h8hwSVz+LvKNMSmsbX+2Qs5C56CswyctKkmciAi8bikPb60TsFxzWVs2YEOFOWCfS+A3Uroi4LySfxOL9oi6srDLD/E70RXD2+CZFaLiItDeoSkdkDcjxGtpeLisCY9UVTbS4YnApD13tS/pT/8fdKE8Y2qcR9Lb6ieT+EA1Yk0fMODNZNK4kP63O0MXTyshuzfrFjxt1ob4tAtPBLKDUaLu0Yj40hpmcGNK2rHxCnjKSp8urXmbAP8+Z6k2yYJkdy108tbApeFeXJtPYFgKuA/MX84of/OAHPvh1XbjixClDbQ888cQT1y/Mn0/gG1fweZuoO6gNJjKR9WKA9IJHO5O7JlwgAxXZqscqk2Oc+GkIPyTa0PCAjwM9evUayX580PRz/WuvLwiDledS4+0MFoQBaDKBEcKkmwakLp4UpxAjCwOtX8WGCdAj0JxEnaJkmk6DQ6o5n+A2sZmxbnSDMANkH2qeWUfqzhxunSrZKD+KA1WDMa6MMFRgRkqCSfSIOphBIy5z48HLRSfpsR2ZuJ/xzG+fxxC5ly36iT6EjZB77t0jnUiNGY8mCrmlP7DhbIgKvRLEMVwwyCf5ELQWLc96aF6jycVaB6KyjiVWdrYqaeWvbpG+34ULNg0rnuTVJ9FQ8CCmj42PQc8VEpb1F1YWXWCWg1DeuSrswJ9SN6fg0fNv5R/TCX49S+ohjr1kYdNYbsRyzAzOEwOQzV8s2yCLhZeCun/35/oRQHR+Bd/I4M+vBwz2SxlqJ8wTTzxx/VNPPvmGlfG9BHoZsXbC3OH0FhAY+cUQAIAlDB7drcXmJfa/Dta33Uvnz8O7+tmaMLARaejUfo5kSPifcD4gg2c/ydihOYjeWQ0pjzHW3t8YrrERtv0JjjE9qz99KWlXFjoADyOqhRzr3gwCjbKXdcd9QPeaDZdJXcaJNbi2wzza7yB+CiqvqGnpyMTJoew6X2M+HSu3SflhFk9izKPCqhPSRZIlF0+Cer2BoYJxfh7pPLSTzpn8jxPlu9KQUDt8mK47MIMnkrM7w9ohQcoU6JuPGMshzxqRl2kY4aztywlJ2wpG3EA3DvZGXSxOzgZM2N+HpG/XUDVsMx5zPMEY1fMZnSlJUmZ9FwsnMXn/7TwnWqK8VU5HoWmO44Y4xHIVBxURbgBxPQ26Z8pQO0EeffTRF7qRRnT7ynwOekU4wwYauxrq3AOzARbqL8+31pEZ2vnDrYno1W4VRPpJanzaLpPTjm7UxoAgBIDJ7dKIh9EBJIp2BLOBCMiBoiwrpHpaRaA3btjqxeU6IVl8nk4yBmIyHnZk1EZo5TOuHgKmyjzO3UiYWcidZRuLNq5Q6KGE7SPozhjTicjbj5Vnks3aF1Lck6RbvU1aWh9lPztFA6NTaaZHvviy40ledkGxHHYFnQhaPpXLaBNbZeqEKNyvGSsav9d789phdWdRyTYBOeuMIvEt8VjZx/Qn9dcc9BVAwUduw0PYCDcPR5ZJyEtcKeuIg7jdKYn+iMYSCzpskVUjc1SBrU67LEGhzLNOUr7ajlPgMA4eENHtzPy9l9b1DffUS3H3QhlqJwQzX33h6QvfyYw3acM+x7YSwaNRBBsgGG3yD/3lMvqwh5kPHPpnMniT3hoi7ejR3RDjsDlQksPSnWSMzJZJSROj6TOqFdxaecToJf1JgoFs0nbJ7Ao6yUvMr8QjDpzTmcTbhZ0YKYANlCPuNqk7L9Mw6JL/UT8b6XVchpdIrJoZWVPbAid1Lnsms6fWPpqhO51UcjmYDpbPrXqL5TPBVkcB8dT1xxjPjLQ3q9VZ05vzKo8R3PLkCY2Lpuk3j5tx57LrRFYg/bjQXZBZkVo8WpeMUN4qj0RVcvpMEpbMIxEWkMSnzcKrLJZNKmPTB9Ci4LBqZsYhR2X68jJ/7KJpIXX1p0cmGvpsiLYrhUnMmq5KJLJeNpDHh3lYY6vbE/J41ASsc4/XmcrMgCPZgnOOiG5fgDctjz/+ne9617uubrEVJ0EZaifEgw8++AYifB+IbrNXcPjAka78jLbnwzqFutsvae/LHVA7FMmfYfBopJUexL4uo950Us+KzAaSWTjTWY423HWACKdQuRaVn3dYmOgpEQfjDh2E8nyPkG4Ow6T1Fld29FdEemtD/W3BzPOEN9dJEyFoLBPOT5hdRlSGRDPTaSz37lwH9CnhYZYuyJb/pLKHneUjGggxXDA4LLxNOKSeo3/7namU6zIcjlifDF2z0+uIfG/haWqeLA496/xQqgvJryjUtVlzt31iFjf0iUibrDUWM9osPOmksYQMdumavyCLSYtMxieGREjMONTWT7qHUvKUQ/YMbSOMjV0X8+O0qYSjzDXqsAvYjmTQ9xUtPzaxkq++5VufgudxIuuJCbXfLgt27HU6KSMV2FhDcf+vPgzGOU8ihFyMsKTLfA4r38bM3/fUU099Z/ZdHC9lqJ0Ajz766AvXdf18Zr6FmQ/MPe5Nm03KbVBsssGXxUFtf5B1Rn8lQ4w9XGkPcUH7n8Y3jkjzjm4Dup8DWKfGhyDx93I7I+n3w2CTY8t6cNSD0yoAWgRDuDBx+BAcEpylbe6wvABuLPjpvHQbIdKZMcxAv8IRZTFscLeN17P4EMJRuG09+mX5HBStWlgbFuyEnb5CHGOKWn5a7153rTC7MLEOTUU/n9VBuI3vfSN6dNIqWOx3dqEQ2lashxjQ05olYXEEXXJ5HIXcXhufVsy/sZzWzQsCzY8a9vIARVvdIlsuY6mjsb0IcQyI6XZlpDJrp0Ycn0jTIgALLVKCbnDJnjUjliHSk78AQGG/pJeNOjHMOE0R6v5d9SQ/nZc2YMS0DQ4GciwTL0Lzp4awC8dDELSubWzp6s9LrCm+o1w56NOprfOHXVh2PSDeNrW41YFgKmiEEuwAwC3M/HnvueeeugV6gpShdsw8+OCDN1x85pn/ZAF9O4j8iwPQTth+YydUtDeQdhTvmtph/SrNOou9iFFlB3oFbN3N4jEmKQLBD4UraGhHn0Ezw0qvxmaTw2yAgw5w0ucnHtRppoP5p5Cn2YQS9fRfHYCIg7ANPO0cNrs25za49d5NOhuIHS/jORTfXzTJC6AqBdGsbI4iG7QMgNje7UFauhvpp7rkcBFgeBEkY97c2gQgEwaHuqN5wQIhXSYN2wnDwTR8mGxDDdjKTXuIR/1aubhPqx/BZLkscn670+B3qIHg4OWjohaOk2EiusfsxvSTKh0evY1HmnmJTw4YLBeCbkRLem106cntIOqSy4b8TzuXrGqGrUjaNemU9kqcOVZ8rIYJq1EaITO0tvocRgXiadzE4nVn/1T5IWbNsMdjmfR8i8Si2QXP4te8TCd362vZHSLj+G7H4Ilhr+IJ4QkgmeO+/Qmi/+Qf3vMPb2ghiuNkWpfFp8bDDz98Ex8e/hkw3sDAy3jth1Zr+LLCESXa8M14CVdpQDTw5Hy1ztJ1pNixW9ftOnFONMAaLwdvZpQgGQgeoDtWQ2NrwJvFAe3sOmxYns2bDXx2K7gFSR43YOhV7GwwQyjQzm0+iBH3xqD5cV31hIOB3eGRzic67JBMyw0tcTM4jiIbafA6Tq8OCOmNIY7A6iy7W1pWH/ZUaJKLAr17ZjDKrRwmEzG0HUzxcJKmJCuOlofWJvunDTvMoJglk91mgbOfDGHjkZsjAk7KosMNKM25TLwqsoFI47CGHfaJUSu0jq5+gjxqE8tSi18NqeBX21K7UzArP2W2+mfqaQJduzbDdBZf8GdGbEcn71Wy9i1Qvtk6YgVgEcW+PLvtij79KDdjlFP59nFIe8tZag5jih5XqgAGwMzEzC9bGW94Ch//M++4556b3ENxbJShdozwxYufx8DXE9FN4PDVgYA1c7tyNbyvsg6WQ09Kxpt18ITFk91oJtB4OAxiw8A09tuRMF5nHW3Cm+IC8ZQnOtNtNuFQ/JN0ZCs+M0xC8KafHkzy55NXKDOLog3EfUA7c3Emlengh5A8NaaTiTLkZwfDRBbyYysDg4/BYRurL9NpV9DZxYrnJQtSGYxSxQz6lE+blIWJzNpeSje3x5zwZtlvKtiSb1HnRGI56A9jvl9r4uSki5tZG7LV95Rck6f4Y90CfQAOY0i3Kh/iiUEt6pjE7EKCQza2xkVgLIuoO2GUY0dUXRa1HF0Hu9iIcjtuzu2Et678MLS3WZlsEx7GSHis3MvlkHtj0CD70/Rtc4KIhjCNhcE3rYyvv3Bw8HlZWHz67Cj74nJ54oknXvLUU0/9CTrkV6+Efw/MLwXpS2KzZx182pVqkunfaOCIUadVxSHshMHQsvRg4fRKOcgkrQ19YtjY6S1cbEEbulmehrjRxoYs7+LfiNezkvKDmA19iaaf2wA9idOTsoFqUn+5PMjcYhozXaNu6YWaUZa/j4jLkU3y4jI7nsgbqvxMp0nc9j1I8TTW28zdYMRJrI97V/lgh7zVua47beqkflTGoY1ZVnMZx7CwNjJ7JUMMF42AtMKBGCcs3qBvCCt1Ru02/dDfNvJpbOXFzqEG4CQOay+behvhO5hGbmtxnGh9ep5uLscuz6n+EMNZmsG/FK2OnWZ/qL9OX4uzV1tkqquEFS876y/rpO6xz0icTZfYHi2anE9xM7/aptRx1KcdWBiL2wx+muVF4bCSJ2rqAx5hqw1MX+tDsvXlQTD+Hha875prrnn3nXfe+bBHWnxaTKqp+GRg5uc/eP/9PwLQvw/gJQA+cwUv1ng7v0cYHy63rtCL5VQHjkEWa3JjgM4TXIQx6oMc71HpTvJkzPLcl0eLm/JG4Y14c7jo7vnZuKCVIGNYePh+8B7qDqyzqsa0kRfjcuSwAXTSLoDt+pO4JU4O/jM53qYEAbwmJdqeOQ6TCVL8eULv0p60Q7IXO0PKocsPtbfMY5YmA1IzIjOnrnwA2Xg/MSCyPshyXblitBcZi7vqo/VtsbBNfpZ21teOUzvs00xtIb6YVduL5QWTsLy2L00w+hE96mQyqwOTexBrm+pX3FS3oFOUse4TM+1ivSLVH7LuoX68X5jOIWx+YKDLU5IRa+tIctaHMXxPWzC0mXWFiZveBpPpI/VO5mbyjfLrsPYSLurkPFxUQOtG/THMuIz6cKjc1tcH3LEZqHJmekj5WUy5fBHKYciP6syWp6gOMYixAvgYAw9jwd993tXP+6/vvPPOT/SRFJ8K09tzxeXz6KOPXgfg94FwGzO/kDduecIGEm/84/6DJg+jgcJkE0UvynFkSOO1ztndlgiBfXAIuNwG7JCwiVKIXu0YP48WU18ePfONwmOZzbzFgSj/wvOVBpuADNopv1lXGfVGOQ/jvU8ErTyTPvF4MlnsOjc4POmYn7LLtDZA+o/lN8yANqGwlcck3WykdWh9x2BknwrzlIPUjB5LdChEC9RCZR+SL12BMrfgidVQOQpCe8JS8q6B4sQc4OBoaQy6pfNGL2G9QLAyt7xs6d6MtEn/UoeoX64rcg/ahs1QQv+ksOnkg5vWQ9RJwunxUeUezlmbHpkxY/9Ck7wcmESvDPk3jqVzsibCrCtFjFYIirfTZKQilIsk13Lt9WbtzzIi5k2rgxCvl4slr+dpJA35cpPLy6uDzI/EKe3H4tJfHStY4zDEAGsp57Jn3Qco5Rzq1OuJFjBeSES3EdPvu3DhwnV9DMWnyqZRURzNI488cvOli5f+EkB/ktc2FFG8KsqEztv1A234uXMIYaI3g01h7ZuSZuiTAQJ0Q378IHdLi8kGnCbrJgx1iUySkYEhflLIdLL4c8fXJAfjxOI3Z1G9K08LO9ltIZgsidvg0j6pFbFSmIWNdWNl7udhwI/BJL3xCp47XZr/aEgjpTE7N2J8XmzBbyzjXN6e69aEJayXUUrXJrmufWQkXBdMB3lyHYJOdqB1TbQ9NGVz3c5abKniNhjLQSYpL7/4JK+6+z91l+rl9p3V8K8jNKeuXqCv3mhO4q5VYpCG87Cmu+uxEceWPpa/cN7GgTYpA6FNpi5MwYGTLJbbrJ1kfXhm4GqTdLcUT46XWFcfc+SQ8mKEhGNeoWO1yrp8hGPJbrgSC+XiYam5N4OKAS1r96pu0s/68pIw/blgYZa+bUzKV9KTtmUie39dTK+rJ+3vpGXRtX01akEtrT5NkhwTwCsTMf7kuq5/6S1vecvN0VfxqbE9GhY7+ehHP/rZh4eHP8i8vp6ZPzPKWBt9Rjqx+Ug9Sztb7rDwLm6/Y1g7W9DZMo50736pJ3ujFG1nDFrvdv0DDBkEWQbIPFBSN/j2etsglaO05OIgHUsAltcgmRIHGnPKg5quIPgpWtoD1CKyicVok36fIStXH9yoRTIb8IYr6ctlEmyah8uEO4Mq1IPmWwZtTWCazjwnnud8oaLlBDPu7W9IwpJJIR1vD4MBNif30VinLJnv5eGYQjOP8ZifWKcUBVNEaLF09WZjgpbLIItuOY3uFl+SQRK0yRdJZ2jfk/CSWU5+WP1hUh5+rL+GBY/l1KWreDvbsLuMWB5efyk+Zm9UEmfSy7LYfmIm9Vjjtf7c5NZH9BNWQebVksuXAZD0AI5lEOLObVNkHqNHbs5duzAJm48s2thCASsryY+nZkbaLkyshcvgz2Tm1x8eHv7gPffc89nJd/FJUobap8ADDzxw+4ULF/4cM38rEc0/TMsYJhTvkHlF5Qhi/8bG56egHSqvEnhHBrrhKaZPduWqrYH0DwNhurVZwWIIxIlqlicfzDaYDQI6FnUDSho0xUO/6jGSDCf/MxohHXYF3rnZODRIpLxIPQWmRRYmR2yV2YTp4Gp1mOQxzp1l79qNSkxKoJs426rxGFYmouSk0TGkfGeTGtR4MPPZ22YsR20vo3ZNNiOXUcQnc5Mnf5yi9nJP6fmEG51zXEFGdlvcgkW/lBLtkmpvkM95iipkWYdNyht+3ODSCK0uMjM3i9OL08rLPRzNfPvDnNnYZ+VK9hUGAFj78hGPWpBeaE1LKQMfQIGUX/YCHo0fP03GptWbufqh/dP8uP/Ou7qntHrmL0cWvfu8ZKzXcuj9rY3rrw1fMR417qJ6RHQ9EX0rM/+5t73tbbcH38UnSRlqnySPfeSxW4np+5j5WwG8jFvbBrwz6OQy6RAil02ZsfMeBYertRySLF4KqxxK393Vj+Kd2a6W48DhMtN0rm03AHOXoHowuZo3s2iSoIsiXaUC4iEmNYuSPH99YHeylbRJYNJKneXaykpijZkP+dAkOVy9D5NZHrzTr7sHT0MclkeG3uZI7na8w3hxLWaRw16gnFw1bonXrsBHsmuOJyLt1054c58Z0CL2+LJ8g5m3Lu5QJ12d2cbvVN+MuREc2wgD2i/1PBfCGFyL1Mp1NAAiOTpzy+75XNg2QDLsFyLRUTriVL9Jm+u8zcIopPUyeJnpoFg7jbpY/3M5aV2a0dm8ur4ms351FDJOzI0fT9vaQvAmstbgcvDYZynEBUwuPAckNuueiHFQyGsI4efZ0WD9E8fe4Ffc+gdB7B1rBPrWSxcufN/b3va2W1uI4pOhDLVPkkvnLl0P5j8I4IZ1XZe4rA5tpAQdECaDlTRi6UG5c24NQohXlxM/OZ6IbKKFp5knVXvqxzagd9H7ldOuFBQ1EmUPR5YFvbPM2RT4GNG5TcrB6LySJN4ZPCaKJxn1n4u9n5T0hPWf5VM9TycwSHlqbThyri7JmLZ4RpNJUecl119g1hYjbWWgYSFGSUCNkMvB65EZWPp1yU92gpwxW1VBjHuy+mrnNMuHR6UClgKOdeLugVZfFlIchrTVEOvcNJDUl8zsMsGnPYFZ1xi/GXphj6Fh4bMuCDInjG1ZxixfLhADqI+M13GcAZrOsR2vycYRSZPP9DQ4XcTxEf6hbYAwKb/0ZK3VA+sG+yjryOVCWm5KTMt1tTql0cBjnTdm7diQurWTUWblMMSg7WKceQTW/EJXeYeKSWUdsTZA3JctExYQbmCiP3jx4sX53afiSMpQu0yYeXn0/kdfxYeHPwzClzDzQrriAOuggdmkan6kE7blaYO6K+l+LDGDSvpP7iY2wfHwCoJ4lvtd/LWO3fnRE44elZxfQPzM8m1kGRFAXiidaCRHGyaRDFl+yOJNqxIkfxjjS1dhZZ0mY8Zo7HRlq2Gy4T5jKAfzzyoLg7TnwzxMYC13qb+25y63rxmbxg00uXXyzjCFrb1p8M6fr0JJXF52boR09qjD4jk7p8Ie9TUmE0X7zQZWwOu3SzrUg2dSjQszEnZUd3PX/CaPZox5ktkIjOnoxYaXsbaV3CYlI62M81jBOhlbOUl5N3nU0ZxzGl5W1nZSfdBCWMOGWUuijSfN0CD/0yBmkOqWy7ZTt9uDN78wNtwAUf1zvLnN+Vl2HwIODgCaoWV11vchK4hgcBm2+T/UoThHj3JsLtYO5UTy2LUhPfQAlnwer33u0N+YpJYfNG7K7V7HgVhnre1iYeYvIaIffuvff+urdr0ZoZhTBXaZPPbAY194CRd+lBnfsDK/AOgbcu7AswmQtCHnvjmgHrrQwXibDki50wVscAakIxvkk00buD3tMFASWvoe1vISnHN+fYDSCX2YNETpbiCb52B0b0PuTNoTstWzMeGL36wtsLJ8b3GWKukfm+xzen376OOeDuJKV74I9dOc1Y8M+hx20PEQ2xyarYqwFdx4QRHfvdTVuR6y7+9rf1kn1agTp7z7cZiAEevP4rcySIUsZS/vyzJRV37DhNnkNNQRuv5kK9rRH6tio4Gn6BgQa5uyseiZS/GyTHzSL/vJly0cxB/peRfvjosGr2t93UZUvasPaL2FOrYjtnBapiEbYGYc2BOGs3pCK9uhPLR92WejFlGiyfQf0Mplpp+d2Dmhj4eT36giBaHnqxVZh/SdblgNgVVgho37IWC116CE9hz0pGDsiVM7tvqzCwZxtPBN8di2YzlYP5H2EeKFvmtODTbRr2WM0folJeOBW1Zb9kNhEegFzPwNl5ZLP/q2t73tC5ukuBzKULtMLuHStzPjDiY8H9oIraF3fdSwzhCF3WCau7xAGw8aULx9NzMwbCCYKhMG55AuexiV8djJRCI9MHZ29xN0ygMueTzNeOnUY0kwunkUWlYSXqc6T9h+bRAcr0x9UiMJOykxydZMYGGzu83HpDmxMsqT5CRsrLvhJZMKWbhkUHhdaD11wT2Qlpfpo6KWbNaoJ8s9jVnZQtIcDDybLPpZy+nalOnq9SRhJf9qmGi4rLlF72Uek9Oyi2Hi5JIZ+lkMmOK1f5zqWw4nsRPJqhdGY9doRm3TefQrhWXtxspPTsSx9WUNQW1FM3rvoiaIYZ/qwGD0bS7/s35A+j3OppJsgWBtOyQJNR02br9ZWVDYiiGJtXws6XJ01fRMz+4BBOuvkDjI8mhjS/CatenHbc/xALveIqfcL8JFsMXQ6knHrxCZlFmqiIxWWBefn8vfHNz9QsOnFe/mUS0uR2NS97HdmziUUQgucyQsc88HcMfh4eG3Nx/F5VCG2mXw0EMPvRpYv5iInucTi3XN3CMMa7NR7sc7OiJjPrB3vanHvTJSd+3D2YAZftpEGf66/26wHFVIvkcP5hb6cJ4YLY7gRc5NT5tMgizmAXaVl8vLnHiU9XkeiXpEP+ZOAChUkI9Fu3AP/UTTY4WUDJgQgDStLg6SP5aE67OdkENb+2FC2GkZDAf95Ee5zjQvXR2Hs6G9T8I379sZs/IxcnvLxLbAGGdvLVp/DyFC32x5nWNhsautTSZljn8WnSBzGVm8wbjp9SBP1QwD4t6QkWrf0qwn++Jw25PRz+25Pa3aR7fKyQ0NzWdfgeF4gsXJ1Mpiq8+EIpkoI5Wdw5rIrdmYz3bY5JehvkQhytjY5X2HSMt0FhJ9jDZO2D8Th3Fbq96RNIKxGPNjFwMmT32p+95sKgep83HRgsgqXnPNeB4zf/FP/uRPvjp5LXZQhtoRPPyRh//Iuq4/zER/jFm7sDU8HZ2Gjo15DzVv+dfQvjUSxvLYJ1Xk6sRBxv3EST8sXXd+7Gyis/sPV1ruLc4xlm43SHvCl7UXLYs8r9Qbxbn8cjio3jJYpRL1Atso6y7d3hMDagWxjMuTqIGkUBwUZ/J4bjpvkW4Jipv+pDRokswWsxUwDzu5io6fDdqcUMYoWzys4dKEnovpsun069txNtx2k1aXYr/zem+x+RFL3WwSMxYNgRSfY/6tXrS9USzDy0HDk44BnieNg9CXXY4710XMr60UWn5iUFlR0wjMCAnjkFfRxHgLXoB0m30L1j8+/sW0FDqiioBe1+gWyfHm+hv6p8I5KvI/7ZzsXZgbkQCTWslRmcXXynlXtqOcAP2EWmsvg+fx0FS/LHQO/WPruv7wPffc80eyvJhThtoOHnrooVevOPxBYnwdMa41d+usBPJ3jxkcr2JS67WGHx8MiJB1nHzlEvqeOVlnHjrM1mik7nkgYjUOuuX6IPNjHrv80DlzPBqEUlxIndsGhxihpSRPrQ4pSbxWD14fmdEYUFdg28QASOo2lpWrECY/8+s/yc2cujKnoRglveym9O5pRgwMH9cewu4m173lZ1ZKzdCQcprCvP0eLO0jXfvSY6ubWUaJZXVmVqdOFiVjYEPbwZ2SCl4epmdXxznRhte9eUl1JJ6aW8MS6uP29GdlMOkTM7yqSf7FvExVUfo2r/Vgxk3vtY1P4QKyS0fLZIeaQM5Hl35D1AlbLyhmcqyzednkHAgWd46jg1t6XX1PtoMYuvY3XEiyqz9LSNiIUgkr65NxhfVPbt8NGb9zPlmvFPLFfitzTTfPLyztRMrRna8F8HW04gdrZe3y2G4Nz2GY+dyDDz74ZcT850HLV4H5Wl9Ng5aaXcGh/2hyZDaYxoHWGi/bI9n6fjUm+CCYGVYMQvtnaml2HTTO7/blgGBASSfUPRyTvNhCfO70hutLmlDYt8chz6K6vmbAw8XstJM4qOY8G5aulKXqH9Mz8pOw7nGM1AY3+dWVs8AKfbos1U9Om7ReB11mBlXUeaZrPNdNyJ2b1uGsfiz8rC0OxLStzUzaAyB1wjvaxJqftFViW7D6pnD7tcnHOrd8SvtqpcAII1loY+Zs0Vh7aYUe3A2V53Lf1MeSZvUTZOacxweWTAeHsd3PZDIZajmprJsUY5Ron7Uy1mS0WpshbfP5VRmxTVG+wLQ6CHnu9tCl8Ij6bZWVulkYDn0RGswuRE1fpDqGljen8pD0dIy1/u2qaJxoER2la3No8qwvVE8bB/q8qB7mL+Qh65WJ7ZuDkdx0lrwijz/aNwSS8S3lR3TS/AS3VW9rWno5HCBCtjhsTNI5oaUrskVy8CSA/52Zf/SlL33pv7rjjjsudfEVTq2oTXj8wQdvWYAfAuhrwfyZnZGG0IKZh0HYPK5kI2A/OBJLeEKLx65gvLNO+idT6Bzhiid6Jb2asU7seKe2g/DD8EmPVRcjprfF4McGrVk2wsBtaTP1ndgY8hFU8CRF4WF10cKOsQYmWTL/eaBCKBebnNjybgauCJ1+gEz5NmfM9dgkGMAZymmm8/kVOrkCw0qsnpJ66bKj+ba8t1ianFQ+xStfT21AD/FshAQRgZY0bAXPuS15nbqRZ4XVeQu0yOyIY31bXHrsfrYj9HEgnrthumUEWJrBKZ/lUur7PQ23Dfvog2czeqw+UkocHoCx4pP6Cr6G8sj6NLbKKrdRm/D9HJAXcAcjjaWovLzk6XLx3MVGBOZV3FI50+RugpPLMI1LW3mxMtySSwFJ5JZEHsfyseEXKdlIc8/tJI+h5G4SOOeaIX3EglkdiG7ycfvgWX5CW4p1FsuUwj5LEuOVmPkzV+avJeYf+ugDD9zinouBMtQSzHzVJRz8AYBuZuCaLO8ZJyMbxMWIkMbcdTzC/OWi6uTR2XnuuGrYdIOF9CH/HTqfXd0Mkh6adLpddBPLBN7wo2q6opLHeWKSJw8hblG2A0IqvCMgyzPpSkEsYxv4VHHXKEzirpf/0YEpPrEbJ+2ovyaX89TXQRbqD0t4SevyO7W9eQ07imlF0w2xjNBWilosQX+ZPefxUiuH5r29vsMn3S2SMJaKTQgR08nTSjI/Z1a9+3KPk4zJXO7lnlMVxABuK76WWm/495nwNpiIaVDKN2LZa/BZO/C8WGxE/uLVrixC/BT2KfZptgrk9MRlHp9yu46YX95YFXa5pm9pWXu3IoQt94Q6jsl6PkJ8fTm346jGTt3R5gDKF4ehHVOIh1UXmLqqk12wsJbFUMFGuqhqY4u7uPugu/W7rKuRb3uazrP+TKJLNMiG9KB9IF3sNCGuYaKbLy7LH7jnnnuuStJCmfXl5yzMTA899NDXMh/+CJh//1ZHyZ3RIOuEMgIMHcri8wF3iL9tZra2z+rNBqU8kFGIZibzYzLtRuIAkmmDQG+UDqpPGPQNgdj+6IBhA+gQb/QYnaPHpHg3QOU6iDoNialT++Owxdu5NrqJKQrSucTaBsuufDYmKifrq35dN9XPs7crromeESu/HEdXDrOJIDKpzxwfLM7OZUdBA3m66NkhipOUO3XFOtb57NgCWTPJSQ5lwv5nSCMqYO3Byz76JpL9eYGjysGN1lBPtjroAvOsWJq5nmZumZhGLoLIILP8qpEQ+6+VB5s37c9ZFdJVMc4GbhyzrGxNz+ar1ZGmHWPp+nZu86JUf5ry2FV/52aDn7iRll30NJSV1nrOPzpVxNjbrq94hdRcWfXp0tyMw+g1zOMgA/LkcpTHOOX499O6/sjC/LXD3asCKEOt5+GHH/5qWvFDAL6Ugatgm5cTZI2Q0A0EQ+fIQfXcO2OWo+9DkW7wGoQhqsmVkugrHXwIG8kBA2SGYhr4OvL5tE9mb3pGO5Rj+RfFXdop3KBXog0FfUA2mYU3cZzcw9VhrCyydJn9CtKIqchgOFaST3IpL/G8G8RjvASA8prNJ8knEYhs4Fioy51NqGDILape7H7g5SD+Oy9+pRIdGzPjpHOZhOvbQ3/BYYHlJ5VvOO3KmpNXwhDW0QucHASweLQQsjDnY3bBkTwNY4+10zFoIOxDS3naHUyVDqtJnTgcZ1lHzIIZeOk1IhF5TUqrhl7Y9zspAj3XNumCGZolJJ1jH9wwNOQwGZgWLFclWTyqD6ujRUXox9kIM0D2FHxIC66+/DcPbeUhASwO11PLNudJvNEkJ3Mnw0JYauZ1LE++imn50kvMP3TPW9/61U1aGGWoKQ899NAdxPwjDP4yBq6CN7StlijNj21zudIapwxis9CpLzQ3jWfFuImdoIF09ouN3tNMV3ts+jBA3K44zYuFQ+rAA9KZ5GpcFePU4czj4BbOc2m46ajO0X4Rp7BsMRm4fNCclJUPtCmY65evHK0M/Ux0s1sU8DhDgXsJy4+bbxvFCEsj66R/O70V4jbZxNssiLqyFl5qi5Fs5KkrAHsxaS/fmqgMvyWaZHYqv9uzvU8Kdt4EEizlI04YuYwijNEIhuWHxcfQuZyWpucje2XN1pC1EHYozqFht+NUn2wXBTndhIgnnkI6MZtDPpRdSUVVTTdA2hK7o96ynk34FtbC6W/3Rv1OAXEkc7I6174qabYVJbLw6p4z0uWZ9VI1lkmQRXJZdeVAzUH6TXPP4aKiMQ4Xhvxl3WHleJRbXuFTGGMfamVlZZmcrYyszKNOmu+Yf6N5a+MThXy3eNte7BgEsn/wqgX0Zbh06Ufe8hM/cUf0UgxF/tyDmc8/+tBDX8NMP7Ty+uUAnuedjrQzTjoRtHPy5HYV+UQ2BqTwdFQeXGTvWnsyCTpJ2y2M9hBX6mGmCzC8pqGT24Sf5HEAtitZDu5gjbdPchwgWPTP+ZbOSVh57dJm6cWS543bJeLHTsTPGgZFBlp5JVy//NRdTGgiIzNA2PRrMj8GY2F9A7vumfH6mdR7LEumyZOAu+oHunKxo26jjKm96yzW7RazNgwLO3nqc6h38+NtUFVJder6sOqb2IrX6jy6Wz2ZBztkaNlaPcZ4dZKfhRN5r1fWx8rJsgD7tXHAHfqw9hSi0bWjFM7dTbdJ3cT8xHBdmkTgw/6xz1l+YPmJ7d7U2aGbHwf9POxEZ0R5GKcGnUQ6fZ9XLCuvfy8ni0AOcn4AbU/U/LZyFH1YZUP+1I+FsXg1+a4euvRYw+v4zZaGx9uPlTmfFv9YlNawQzmYJM4D7tXGjz58Lnt326pTwDWSNOZltVofM5nq4OXGjMX2wmkZaQSgZXkKzD9Hy/Lf3Hbbbf/k1a9+9cWWwnOX5/yK2iOPPPIlK/MPrrz+O0x4HsJALm0tt+bWGaADYoYhjQ5pYybrm5/ZVqZSB7OWHdO0Tu7S0PgROhLZ7YIQp2Gdg8Km4C1mURAAXsb9H90AYQPvEFrZGrwhCeRijPmSWFvgfhCZxwuEzIxVNGUcuPqIYzqkBjX0ytPyocIBD0tjvFD5JJjghTNrjUaTuD6XCVkmAkNZJFweDDnLQ9fmrY6DH9ARZcT6sXc7tbhDGXbqWrosT2H75NJ7ga1we2mmQvIJTfF2pnE3f9qnNDLS/VG5Dtx/LI+ke1yx7Yhulh9LM8uVLk1msH7VYAvXOI4xGoef66/BSV0vo+BRVu7b+aB3GvsQ0+P2RCxN4vVjC9/F00fateFgiGVZN7rsqJ9pu7LVxSnycXkw+9cZzC+Rjh+Tgra2JH4isofZm6IZgPbPy5glvBpGXm4EzW0qG6et6nd1ZlKSUQ/6Nz9VDNWDGCCSOW7VPHq7Yst7awbWXkgu2J8H0Fes6/qDH3z/+78kx/9c5TltqD300EOfSSu9Ckw3MeHqPHBjVye0xiftdkRXQLpOb411MuGSTkQSZxvIYkcE8kk/ULq2NKrkA042tjQOuxqaDYaiUhwh5vFznkBVL9Ls5I5vnRbjuN0Gi+Qez3NaM/Tar3PzcDNDzAf0XrYrKfZ0hqQGeKfBOjek3W06ePqRu5H/UcnEMOyZRGxspBfbncuCFpSCepGbI41GRKeCHtuEYf86YUiToW1J21vUj2w+tHYYwnbIrKrH6saQfhzrIXHURQqHfFi77oTx1PKpfdiLa0ifXeqq9sWp/ifbERQpLxFy2MhPwaC1puN1EFW2p3434sdMRlbOrU68rm0VzcosXT9koyi2iaHsu/FU0syjbndmY02KJurXO1pW+j47tpGW11GGQSeDkb9aofGM3UbOg5uM4a1EcrKxf9i5HFAb/yw+lbXSk7jtyOHmiyCVQ0RYtGC7du1xahzMWMLiL4OvBnDTReBVb3/72z+zSZ67PGcNNWZ+3sLLNx/i8PuZcLt15p7WKGewdYeJlxyTQfHPxBNDBk0Tx6hlUIo9LERgakziNCfRtVdW0tPOrQbbwCTO7CufRwa93W1wbqh8krRgA2uMK9AGhlyKbcIxuuBDG1BIq2zDmCa9gr0cpvoOA/OcmY9hAtM/lg75is8Mln8+o6ErkVl6xs787jDqTT8zgKK7a2BlO01j6iho3/FTniigDLkN0Xo46xsp3gE31oKT/uZgO7TfiddncNs6FkSheRmaHlLqcWtDa08tz3Fy9UljTHCotxjOMDdWAa3h4+rhVSYU8pzD5qStjszdft3oYMifELDVj3ial1Po5x6gTz3raP5biTYGr24JJ4HlyeHBU15vy1FYlju30I67MlKkBrrCUWTusPmOshFtq3GW66i6JklalFEmvsd2xsDtRPT9F5566pvvueee57UQz02ek4YaMy8PP/zw6w/58M0AvhDAeRJB75G0U6aO2Tps5+wMHbdDhGytdkD2ic0GDYLoYx04DKcgQK5euu7Sq7il1tYAhCjLWMeyQ5ZBMN8edSZlyG6MWidXWUh3lg+2f2pwbeposij3iHZfcXYZnKRvmLvpcxRSVtkVO66s00CawubzLbaMQIm/T3v2nr8ZO8s+3P7ycp6UZSaWp7sN/aHFQOHUvaRbby7bSJj1T5z4XFdXPuRD/3gbDasQrn+069LE1uelL8ChPFnTDrqr03DcRcW8nWHFVgI7/UI76eKeRGWyqLPrGfxLvO1cEmyyPmpZ1YlxtignSiisaXfJGAS5EMpFFI7jWee+NZ4ZKUGO00W8mIxlw+gvUvSi0sp/mocJrBlqaaSQ2iajq3+uL9VbQ/dhpj7XTOcWb1fHaLqbMedYW7Q8BijpHcaI88z8hYeMN+MQr2fOH2t8bvGczPwjjzxyFzF+gIAvBPP5LAe8BbXeEPBOpQ24G0RVZgP3gA6E+fuVixtfbeDP/cjStEnXYuj8EfoJp/MwTmDiav5yiooNprFjmi4WlqQsuqs863ReVr07tLxsZOveNh7KmNNeDQseB/npihHLwCS6RTdgYb1uj7Kgq3hskjxwWZ7NyXxulGBfdtHd0PLLUNApxx3z7sdRngLMysjyZaZyTG9GJxuj84sM+SZnL+vLT07MiVM97CJPSK1u5ao/Y3UlPy2V+eCn8kH9ZjxISfXk9hHds+e+GsaMezxdeeU+QEOLGPp2GidmyDijEyzlNhK2Q9jkbflPee3qNhobaoTYv+boR/4rhqMIXJ8NQ4SP0iGkx1peVkekD9v4K0B2FNDsAie343jeHet/g7FH+sfGL2s76m6+rRxHDeY6k+zx6uaHzbqazC+SXkg/pCFtpAWM9SK0wtZcO+KvBRj00fKZZOk8LfSFKw5/4J577rkrC59LzMeqM8xDDz10Jw75zwP4YhDOSeNoLcc7d+g4sa/Gzq/SrlnaYIZ1aMk6EGrk1ouU1RIhiKfci6KWNvBt+FlTw4/hcieRgVr8MslDAzau2CAuJ10xder5sT3JNAg0z6EzQ8uKQ5l1upkfPQ2xNmJSNsAHN4Ltz8k3CXp/hpeX1QH6OvQwZlQFmes/txVSJfQDWWMMSCHdHCZORia1GHqZDIazScfrX0Wcy3AMsgnbwzI64fMyUToQozYDj2Fl35PrqzvXiLrb90nvWT5ivj1JWx1TWS7fKbQtznojlfFE3DA/BECNpk42yZMR08h1apiBb60x97/WnptAnbyOreBm8XPSscXf8mLxEfcTNmV9VN+tApPv8koAyns9dbx1I1TrddaGkOpklibncVTlMU+toOwgY681aZEzUuKhLAYmfZks7whJ8pAhKYuYX1XR8mreydqAhpuNWq0cbeKDmHTBa4ujuUWsv445AtZ1PUeML17X9c//xE/8xJ1Z/lzhOWWoPfLIIy/AIT6HwbexrqTZkBEHZ1ij1x7njT83XvOZOo0NYj4wRJl2iDiZmD+G7NcYQwlx4MVGuyd98g3J36h3wwYeYn2VgOnF0kGPggDvxDkJMmNsUk6N8b1xiIPAxsQrKfYDKdkgDDE6AXnUP5IHaJMOKgQH1j9dWKsDS09V2VViO66Rp67TAc/I54Fc3zMjDVovZA3E3KLXXZnJZRlg1o+Cz5OV/hHeWB7Lb6Zr1CnnrWOcV/tymCjk8jCJTfOV3JqfHbXOG2Wgblkfa0/Rgbfyu5EkrHx3eZhg5e9s5jc6joq5waXlOOi+66nQ0BZM1gvC+Qa5/bSxSdyn0Uzy1vTW/AQ30yuP8Uwa+a6CJCkDsic/A6z6M8RPls0YytfSS+4MaH1NdCYzmOw2vpaZuZvaXUiJ1LLchulkKNv4CHlJdq7rXcY+EYEXOr+AbsOKz3nXu971guznucBzxlB74oknrse6fhcWvImIrkNsx5OBkADfq2OLvlmOrQHdGmweMPTUu4r1p9gRpp1XXbS1b01UEydAOwCT3o5Knd/iYrQrooFJD53mG2OeAeuo48tY2SaGjatWY/eE0xtxXeqWr6T+rOymbCVrlWH1p84e71Y4r995XeXyAXqPeQIyiOflvllHHTytYIkTgzsmuvukFQTTvCDpudE/djLpc3Yu5UNDG3f/ae+Th9OJRE7kZ65L2B8aklCX5pBJ+valPepqMTHDN3/zzODZgU26xiysjyuh/poxE0ahZEgBmt0QZ1eumm5XRhvlmvOV21Lnf6aHo4ZpNvqYsdpq22ScMT+5zXi6rBUxw2QqZgvnUZlAfi1Oq5quP1u+IX2HKKcbEmHIrfBd5UFiFCGXL4I+UVVNF2QNsI1v3uZTmxKhZVzLVv91eqlRSrpAEdsWAf4OO7K5reW26bvQdUz8pieeeOK73vrWt17fIn9u8Jww1B5//PHrLj7zzJ9ixhsJuI2ZD1yYW6tibVW6xAaxRQVY2+xENB28RvoU7dqYTBTj0F82960J0sgdzeM4Ilwa5KafeNmYIGXwGvfHbeU/ZXETnpSxhSNoXnUczf66kSJBOojmour0D5GS/rE6GNJSppNPZkf95fKD6Uo6uAf37HduOGVF7NxuXcjAPMTVn87zwxPDnyR/LZUejkbKRKZHQ7SGlED/9OxQZwErOyeozBqWIBOJpCvlIW7B3y6tZs6dHjmnDZ+s7WJqFpfC/keQSTfIZ2FTFUlwCbfYqxUCXT3rxVck58Qm3pi2HwfP0Y1gcSszvZUuT2R+0+syrF8QTcc+tu0aM5nlUdNh9Po0Q7c5dupG4yUIxUnSzX2HVKcRy4cUaqzerbqVPMV20OLlSX0BwbHZn02kY5z/U3VU2vKTwsa0RP2Wb5HJDMe2dSKXIwPruh5A5u43Xrhw4U/dc88910UvZ50zb6gx87WXLlz6Dga9EcDnMPM5k1mjsmbRd7LcTHty54jnZMbBrAMFhhRip+4QRybpIXlSoJBmjpR8/4+Zew3TrxXBmLiU0Za104fg2Vvss0PG4k9OQ/FrQpae6Z7zBA3r4bNYyzg7Z8bSGnVy+Za7nYTBTdySURWOP1VsgDOyrnNUuUEDiYzltsMQl/ebjXfCQcsvY8G8GKLM63MihARkSNltGrPkf5pT0K+rgw1Mv1gyto/IugEwJNOXYZKJ3qO7y0JpcdLZ3W3FoYmGWhvjHxzm5Ij03J3DSkck1vGucp21ER3Kpph3L/8kN6bxZgc0Y83abTdWizU86OLtMT3IxCENWyWKddvFY8qnVaIoRjB63K07UEK8DA1g9RLHO/Ojevf3Z7Tv6EobJsnEvADBQ3hK1dKK3mR+sZNJPeiqJk9sVylCiTSHIytTMbTPLaDPYeY3ruv6Hffcc8+1yfuZ5Uwbasx87pFHHvmOFet/COBzGKwPD1g7b92j75DSe6RBSacYViRSj8odRRprH8Y7sV3pBAgSVY4GaI3YemYMKfmQ8Iu25wwDsvmtz6HrbJNANJhmemixABtyKa9wror1+U4kA0Od+gHPOn7wG/VH9q+0gXQidF3nMkkgydKplb2dkDlGOk/NcXAystG6od6MXX7nV+mGBWwRUPjXoVe9UieD1OlunW0Q5V6X+msx+4QZV3FTXjotdhiPR2E6s6Wb4kkqAtOS0/OZDjO3lMd47lj/jNjEqSvVs7riYIB0fUXLL49p8UyMUtvwrm5JD0k/nad4B50srqCTx5nGgpXEo8cxMUjyeW4b4ta/nJcsXOc1Gi9NILdFc+GEYzvXeojRevnFvNoxka7QyrnrY/7y2ANYQmO/y/oFoqqSjqwKD3lQfJyw9MnKYHwgq4NafuU0tIFg6Hu+kr6xjDISlwiZ+RwRfQ5W/g/Xdf2On/3Zn/WFl7PMmTXUmPn8Yw8//N3M/P1EdDvzeg6h4bZ20roVvKGOr8fIE51ciEkDzrQBrTeqvEOCsFJ/FTcbUI2ms3Wy0dOq6kxE2omWTtfozdKME4Y1DAZ0Ja8NKuJJBzYLqwnn5K2DirwvKyunYVAiKXy29PWxcYSr4W4NIkwgXUxBGXP3AdF+0ktXoXoxJpURBpwhUCgLUaiJGMl4sNvAoby7cg1kFTKxDe1yAyblDACu2/hdyBWyv6dzD1m3z8PEK3QnrRq6sx3k/WL2h1RP1ZW0zu2fOKb0rI2FcJdD7tMYi7/1jVx+NvF4nsZ0uzZp7SbVD1nfsjQGlcJlWhqToMaUhwm65jYXw3X5CGXZxq0+O2T7oZoTYPmwPCZhLDeEPGddrX5z+NUMqt55IJalrNj0IRiQvcZBf4ZGbF6tDsx+CXFI/fip62v4uBfac2eockuHIIlbfq1cs8azfipRq3tot1YvqfjaN59V0ORtHI35ACBtxuTDfRvLl7hSnAswKtBfpsXGP5lbteCzPg5Z/NoOmc8x+HYA3//AAw989/ve9775K7bOEGfWUHvs4ce+iUHfv4Bu55WX3JCs0VlbNrF3Eu47d9cq1d0H2dCxfPDSzpgbn3WQrYae/UdY1symfggAhdU289Pu+a/eSTLeaXXQZg+nJaNlITJTVAcCjU8m1y5ax8YVRuiwWqRNn1CGGoDsti1ZobYwtoyOfGsi6tCCdX46dlwpdvO4xivxT0J0ebER39zSk046qFv9e/lbGQViuDyZbWFl5PGzrhhPDBPXLWzbbJKxSkcdtMEM7qOT6zMRdukwusIf0xS6lQ/o5JQU7soP4/4lg22iVnmsm5ZMSC9NNl1jCRNhzOtGNqS+sqOzJdFJPurZSXUD91Zwz3NLvO+PUj7S3JsR0qVjk25ov+K8I1Ejtev83Uj7bnGX3qxBZjRtCydB5C+TrKxZeVueSI0m829uhhkvU/ThrxiX6RDjYvT50ey1Y8ubbbjXPmt09ZjKbhddvdj4re1mfLF6X7gm6uZEDY9c56GApjpRf/FlcDifhev9hhOiBcDtAP7j97///W8865+aOpOG2pNPPnkD4/ALmHCDPDjQtwCCDiYUByOVeeewrqsNs2+V8sPiLzdSib91zgzZBta+X6gsuygk4STYGFA6YTMIYuOXgUJ6Vw7rydlgrA6LDV52+xAyWG2GB7wjDupFnWMA82cDwAS2ySiIJT/hPBxnf9nRjhjb6VodxrzmwUUcg9ukOk337G5tbEx5R/1rfN3EZf5Z8hLDUpgU4oC/yTRhneyzq3p1A3qyKjnD/JD+iSn6RKV5MWHOL0KeR83GQu3rbVzF7sos1WHzq/0V6iEaSP5nBzZJTeqvM/AUyV8zonK9ykFzi+6xvXXjkh81crsYdAuYrNc2vEQ26jiJG+GF1kCLaJadrX6HIf2eLo7sUccg04ui0bRRlkZuNxFK+u7C4/D4Q/3YodXf5oXVEbD/aesHzbbyuN17UF1k4TgS9ONh/d1F2w+Z2R41TdPbq8q3ypdJ5mqa1cu6HjDz7cz8PU8//fRX99KzxZkz1D7+0EM3PvPUM98LpjcQ44UuoNbYun7CJlQn7xw2zO24mlJfuQEZs8FK/AZlAmxXPJMO2qexIff8BPdwPIvbOoiZcOa/T25ibexiVA+YGDJtUsmSnll0wLagKwoZCXq5ZXR3sl0CdtTVQzh29xDnVrtAKk7z5xNCisMHtckKifk/MitHkFUl0ysZxSNqgGTnkEfLEqu7OPbTm+UzV5fnNyQwpKVI3x2lHnfqj5SN2cFSM4+66moGZAi3hdeZu4x6GV2SZswl446Tvh4unHvYXa+jUDVm2uS2FQ3mnB9b0Z4Z8hxviyuU41eZ6xydw2pSXmmLDHUwyW9Mk/1yNRW6Smc62XwwlI1hBrWdkrpFLxpXi0PSki0l2qS6tPuL/0yeHnIeLT5zjuXEIU+5/FymhtRQX3pu/TSLYXEMZSt1Q1vlmDKU8+Nx53ilnA4AvIwP+Uvf/va335h8nBnOlKH25JNP3vA0lu8Br98Jwivi98Fm7QPwkSG7itnCems0NxBAAupANUP66xivdhHxkcS0Y1Lc1kPx1tzH4Gd2oP5I/8RbDHGAgqan4ikcroy2kIFL9MpeRSYTEsOLdMq8mEOmgtzy1vKaUg6ZmkXrZZAV3iiTznuY3LawIjGG9LK6Lj/aYO70OkIPQCdcW+Ht3LvTDtOHbZIKfnepx1on7n3W3rTyoru4RObK+WpJFsQyTFgZzWNUeNKGIoShgXoZAW3SnUUxMR6zPy22ge7SyvoiS5ykqxg5ruC9yULkl9NmADXQ4pN8oQtKPfS6cUhGfuXvePvN/Gu8SZTZJado2G6Ni06LKRopW+N7QzKffcnYrwXTtW1oBqXvmD0Oqzr/l2NsuMw8QwIz0BlEnodU1aT+pF03PIzHFdIKt7ndbwjL6sYxsUSLM/VHbTzeZ4KMQr5E2GQmJ8Zngfk7n3rqqe+55557buh9nA3OlKH2zDPPXM/MXwmiV9q70mzg38LrPXjxPq2GWOw01lh94D567uw4yi/Z00O7PM46gqkzCcc68GESNHY8cejdAe2sk5mbOGUo+9FOaV4mqmkkupAe5xWdeCxMjFnKXz2NagEhP3KFmVZvwvFG8AHyckQ3uf7/ufv32Guz7CwMXOt8X1/c3WV3t7kZbDImBmNb4WJQmAFLToaLZYKCYtndbbux8ZhIoFhRQDjm4jGGwAQnGiPNXzPSSBH0dFu0x4ONjUVksOORhkwIUhRfB6QwJIjbQHdVd3V1tV31nTV/rPWs/ay1135/X/W1iqfqO+d991p73fflfc97zk/bOSad0ddAnaTo+NCWuZH658wSblTqne5yXGFajNwvERkeKpaY0LuWjE/EHQZZmJgTuXitoA19GZtOecpkhS/cv8tmZP2XOEcb9UM8FPX3NLYEOE6xsFSQDfmOTRZyS7auGIfd2wnFv6GojoUY9j0472zQXPD7njC/XUhmpd0m3ZJorxdzPP6zrR3vUhb6HHaL+pt8zBgG6hhdA7pfbuZGq+y24sddw3HkHCIhwedVSApanCNmE40JBlsb8+SjFBfDk6Z/nwtIaaPVEBG9i5BlvO0q/UIRMerEQN706H763dtHdpNffTf7ipdvL/9r+WO4/9ps1F74ly98nj6xP2xqv5E3aWpRY8TrRYxZ10Tijg4GoQ88VFUUEQ/E/Lcmo4Is2P3OANp7ufpg269yCnLMVI6UBL+4ntOU+nCx4cVmheC7Rfx4suqyRRALOs92xHXdNQM04mjDxgJ5W4bSopo24bzliBH9i2nBRqILYBcbxSpVImbYhGBBIlmbWDTgY6nezuqYzFeaw6YpY4FOSgsexWO6uws4f6Vn3ZrInf7UE2i5CJGO9D83cXtNYMFS6X+PsbN2T0OfVb/QnodYjON8HH+EkrNhA0bexRgoLSI1XQWZmqang8KWULyoU0qcvUkEeQ1aUUHKuYby2dOAf1vck6JW66SbzDagZnrdgFbmwGjP3kvM8jPkwzeupRM6ye/w7jlX/gh1q7No1hovZirPXZXac+99GXAmF+M8Cpta7PxwfbxZ4qMxP1i2JDQnpujRNjfkQo4TjeMiKewNM5JHeBMb72mG+lnmpVyUrRoaEfVwuoDEhpXrlKnoK1LzIrDb9T+6ifym20v6h3/gB37g8yrXax//WmzUXnjhhc/72O1jf8ZUvvEm+kvRjkk765vaRe9ewPTQZikjW9VrNwzJqFmN875gBCDPDs+vdXtWGxr3Z5GiGbNCp7g4k7zTZxL8zIPBFHb7+PNjk/VbQ0CxIScPMp0nPdqUlske+rT/Vh3+gLdtf4uT4Ytu2NvYLP7hm62sFxgzdE7dhl2inPNzhdRHk07HqT3gV629MYn+1nP2ALCB7+AJGX87Nk7lUXxjTE7x8cLaaDwJ27D50CKv93bsE3ll7YvsFcrGIxuzKTYj3obf9BJauDNEFKsT+s9GXMGUpwJsDus3hV0XNgreWDTclhD0ienMe2GxhiJscFpOClo9KddBMPPcFw1uIzoRD2qEYwu+fN+M2BqWDFroS61hD3GVg5jfcr1Q9qU5ELA621I7t7rOtflaXBp2Iq9qQvOx/1ctDicb0j7+tyglFhmHmEvA6vNs2J43LkCMvrQJZldSfPtS0apVdFoxSBo2/OpCt3lVxWs0vq0LBSYR07j5oC76l9zNvvEXfuEX/sy/bpu11/xG7QMf+MDnv/jii98pJu80s7eZ+S/VoqCyuHp9G31DciCLiIjdvCT681Umq4eK3HnCj7XUr1gGqRgcAwl96zBYNBEMstUO2zWdIGKMNi5+P+TXaxgmrFwwKo1bVKQuwNBtJuqCii1+nIYXhOkiInEluaDB4D0XjaVg4OOB3Q6fvA93PAlFZvQT2/+8lEDn0FbaFUJmdBHbxNXR6BmzfPn4UOqN2+P9SRjWRoa3bYtSjAe0BblsrEONv9nR+El2QYttj1/JJ/GqhF3R5HMGcVvMA30ucGLQV4ticyB7zjO2HoRsL0ge6K32+nGbYSz+xTF+nV7CHsNQ8K7bBh0L3glM8ouG/TGNsvGPd8iF7DIH8F37A6pNu4EpQ0Jn9yNkl3rbsGzNFsVmdyXzGB/Yz7FA38h5nQe0MS86x3BU1xpTVNoAhzfWQLTWNxdhMo5pkQjDgeSxiuNoq3UOzkozjgLH5wGsn21ymK9TKiJvM7N3/sIv/MJ3/sAP/MDnl06vYbymN2rPPffcF97u8kfF5GtF6BuevaAOAzQnjuMdklXJ08BX8cmQ7wilTNW9OqVXZgX6mhx4hoJPZPuBAXZNvkTR94kbUIlJrsVxitkkY9oQKf8LuZ1HoKMRoDb1NzvWJmO2UTK88x1PX6TnviR603vK3xbzSe7Bl4ewJsM6K1u+PIDg6XlL/4ax4z9GGgtiJ4Ysa7Et8rFJ4Il2UWOx3fWqed/rBXfHZuPWAJwX5FMXE58DjgzSnePzTiBwvChHPBSOC2pAD/lBo+GYzR87ODgmngOvua2+w1ahB9DLRkURuHU3XFJmhcYGU4TCdbDR7fAH9EeeQ26v4QamjY2a4+7AMJkhHL9sWIenPkCy9rigjfzvvkIr2ndd4+2FuFivrnYY5XU1osEbe1+vaf+nkLFhH18mLnsaA7fb7XNE5Gt/4Rd+4Y++//3v/8JOfy3iNbtRe+65577QXrJvu6u9S1V/SeymN3grVW4HxtlEntoCGjV4+thubg1g4JN88NtxqIA/OAeWPigLqNbBliJU1u3nJvdSpjRHh02atNjiOIeuSdzgH7xO2cdLw3GxLwvHJtQB3R3czguwtlhMPvnJvAlZi01VarEhHOuv62mbMSGbio4An/eNWAL+NbkWtN4urFMP9lhk86BSJOJAsUDO0GUy12KD2GklRkMcvDF0XoFW+Br3XS6OV4+qdLNhQtbJmblYzGw9CECJxdlfE4+/z2GrX3bvqaWNlslFPQW4fsp4fIUoccQx2Wvx4j5Q42GTahRulaewC7wDH4kS6bYK7FmNJxn9eGAr6Bc9R1zQOA4TOhk6ezsj22vHmAuif+uMGwD5lxSa/34H2ysZ7eoEkl1jG3uBX6Kq73r55Ze/7V+HzdprdqNmZl9w1/tXqOivMLPbqXqmwSFRqAdSwheOQXB2pBmDERufE03wPUQyQMX79B4aL9XexWXwBRPpySmLUdI2EN2G0d8+ugh1QeuzezsdJmz3a74yWu5Uu7s1F+Zt9ghsxr8GxDuvBKO/iSuaQqyx0ZomP2w+4HeJF/MOmwGhfpLxaA2DjsGtV4zJXuH4kF5Gj22P1SVQ43sZNXStCzo8sAybJtndv6w49g3+Jk/DlbFQyp352KRsIA3721Hm6uguVYt2X2agb4RFpJrguvs+ey+7gQnNYdnoQ23WNif0+YHbTGR71i/tl9j4g/cwv6stA6rLE3cglCA3aU/b+KftFgHFHBI05McEG589eNgQQfZoVTV8zzvRNxrFnEJBxNVe1MTGaAPXbujrMj03S3YBvmRAfrAW1DjXhYn3o7Pl5+K7mdmvEJGvsJde+oJsfY3iNbdRMzP98L/88Bffn9z/oIr82vyttDZoNnBBleKKkowmvlqZig7tkkXUOKJJcUyAPJ9saj+fBGiWDrLFyy3+SLyfkr3tX4poMInna2xYXQMmKzY5YRx4ZaBp+7KAN/ob6y22xma4b1wtNj7gY3gMx8GZWLbtxGkxYHjX7px4FHXeDGwTCZ/Tc02qGn8bM7RQHv3KMrvt6B9PMy9tQMBxKUsEkfSjC2bOc/r24HjrDQ7Pt/sikV/IP3TZMF3QVMxUjK/iKm/caKEPkghLo4ZZww6MVT1ZFQTOmaEdb5H3vpno5wyVqNMUvHR4+iwbISXnu1M+anhKQ5kLWh2XsRp2MUBT/kLSECyN+OQ5J0hjTMU3lC0ebFd6ilXD5dTHm4OoxwwSgfuzL95nf6yDZWy5RDs2cmETt5cYd9nieTc/KOis0xCFzfB1t4nOWaYOAgf9Xd5iobu30Qh+L0UvvpxZIYjmiFI3ZFiPl8s0MbObmP3aJ6J/8P3vf/8Xnz51ey3gNbVRMzP9yAc+8Otflpf+nIp8jYi8VVpx7JnYqxUJVxxThVk8V7GY6RhNIXJa3FaLboWtUahLe6V5hYlvW9pmwDD54XYv2vNl6fY2GiIqorcls0yi67CAN7OCOGESRMiYxVxnDxd4eFKzze6YtCgqiJUzOL3LTuM3AvdthIeAiVj9JA9jDoPdXSXzwd5FXDOi3U3sHv4Qy2kKKe1pQAAyNb73EqN5+vMugNK3nMnqc6d2x0NgE/L5qM324AlD25oskiHygJr4t405touwA7bzL9aXEFkN0rYQS7W3jDPKk8juNwATk958LClCAMilPST7Yl/z3n7S5SmAjYqYK6xRiToAkXStHHDMVqWUBYPmhJwTB1vLWKYcQq3/ZMjCXWnewOYoaCbmcyDJy770JR/3z/lB95jSTxSx375b2NqF5ZOfMvghpW9EjOsLtsE+bCqisUSN1iiGmcXfdF7cpU7NfTZcHBShUBZ2NxryjX6wzQZe75AvC1jjDLXv+SpxiAM3BRtqf7Ywt3asL/sOa0A0sH13W19oU9G3qsjXPPnFl//c93//93/Ja3Wz9praqH3kAx/49b8o+hdM7PeZ2edk0NWTKeMdnbiqpBVD1X/80CuRFgzQ40Qt6NGH4QXsOhmrYIZvfcYmYJrMMCowKVm7ssLA7kDT5LcE/WaxQYjRC17FPzSQTd1fuftXpCX4d335UsB81jcn4gMTm7hum/AC1kOZNtd26azDPqJOpgPYxqipakYw9O5GNMJDg8zjEMeDn6gVLFJMS9jabG25C2hs0jp9q8UHgIXVJOoiuhs2uaFjsgL+sQ3gzdiqbkHjOsBCkLR1GLJqjDiG0boOM7Zx3FKbc0Gcc1vPFaDggco2dku0XTH+F4HNzDPAWgyFfBURv5OEOaTFC/A4kc/QG2KN4gF3LNpzDqNYKNnUY1PO+YItfvrE7fT5oW/cJExC/ecdpQD6mkg+M7z5i43YodZVg0YbDWDrcVoTmtFeB2ur2Ok5RzcFin/ad2+sEwHPM2fFOdEYJnXy3nwTb2Rbw0oX2k3CmG/nOc7RgWqlIGVi7a7zhlmsOxZ2UTv+abcXcfUxoGb2OXe13/fyyy//+b/6V//qr1+crx08tIa8avDhD3/4i1+S258Ssd8lIm8SoW8UIaGHQdibMYF5e5ZhDpzkW5RxMfPBsc8qHtT9owqJCeAm+wPRPDj6gFapha5p1Srcfs4wgc7oCT2g6+5fP5/Q7bTISQGdd5LDJ0ie9CVtY+/2Tfgsr8dg73eFdNvwsixZE7huN6CiWaRd7SctoBT/1bb+XRmbC2sgj7C44HTIXS6sJ3SjL3BX3xOquL8lxxZ24u5GiN1ydVLXF6KGafvHLX43YReu5sn1hWqg06uQeauemz27GTuqYTM4di2npy6CboMf2fIU9mHDw1KKi9ob8EbRsngcgIT0DUbOa6slxZZNETZwmNMnH3geLBcDcQxdzSYJf4FCs6gJ6pu62/RuisBQ26jPo+spim+iMjV0Zhf41O0a0fS3zRNvIHsM89TCN+ro66I3lLxIVdl9WfmjRpZLrphW2gIu4uNuIOIBZXij9pr/HpVoWBeBbzKz33W/3//U+9///i/urK92vGY2aveX7l9hYr9TRJ+JDKxi2vdKC5H8qToigURuPCrjMs/F778PxlQ/PdrD7AcmzZcZazhxm2OfnGggY+XsbpoX/iYTNlgUfB+hDTrkIQdWqK5EyWidRC9//GBk63KBDEptzrqZhKENSejxVG/OK0Wm1dMZh+Qq0rKTaHOy504k+pwC+BSYevYJ/gheOCP/3vchAbsjmWssnMSSOZMHROOCh3hy4R3u8rGf00UXsA3zaSFrOtdJ9bWPUUZXX1Rc9BPoZAFtEz2hj1lW0dVx/FXXHRa0J7+Vs8wd9Di/n2VuFne+aYujxkhAE2/IvW3eIDppz30B9RvjPHQ2iZqZ+sQuF8NyJ+/2KF2sbx0INc7DsUhEa8+vxKcU/G9RIsIc5MCDF3rgEWx6aSNKZai2yxbUQTsXxJj4t/Ea0GFqRF9cWIrIM2b2O588efIVjfVVj9fERu255577rXd58rtF5G0YHq8MQ2Ugkb2hoX/LqABF14s6irbL42K0fFlQGNT64vDCEsdgf0LxMksxPCtA/vLkE9eHq6HRJfybbOh8gA/a2R4RN9W7rnjsovaWij0PiWniMRI50QEyu3hgvcFRYzDL1eFunLC4IVanSYzx0AQrcjTpYRz6dVPAtvwbNhH9PHzaFhW+Y5AvQYIObms2DmocQ3x5THZqiXfXweet49ZviGG3eYPJJvjUp8SOkFsF2nT5aRyQbZmD+ITdxGPC9MSw6O516hywGbZ01WUO4jtQkItjfo/NoyJC2WkZUewJ0p5h8mXYRLn8tuFiAzM43HZGtanPtpL2J1sES0uj5LxlYXOVE/M8Neaxrr532JO+8jZ5iJMI0WIeI/u4BsY65Q0l8U3jCO2+qZwfCTJYEn/RgFje9kTuv/v7vu/7fivzv9rxqt+oPffcc19+f3L/dhH9KlV5w5hkocyMqETFC/GbrsJajatwt3bMa8OGTCQW3SYvCy+vSAt5LahBaybGhLHrywFlXpHT1ZojrnYYwQhbx0UdwgYS4KSdAYPIZPhYFNgmkzXBpOpT3wPNJOQOA5knr6GrN5JBmi+8cC86gNw+hCk7Jg9fsYpU+X1iP46Nh8AONkyxE3Dz4gV6HozL3uIfdLL58GX06SpONHYEuc6xGm2goUu8M9K8+HfaRCdiXJ5YepxOgL2wGXZwdz92TcnT46eaNvUFb80zPj5EvH6wOIOusn8BCfpuJJN9Y75OA5Qa4WfWP55vVDn+RiVQ8qEigq0WJ9gifhb0UM0x8Sa3ogMXsAW9gboV/aulHS1MbTPYvt1OQEVyHQuX97pt5zVH9ZnchQhmToBVTqkZj3ScN762affGtZnabI1nvdkXt2AxcmS4TQzrMMm96Rv0Ll9lT+zb3/ve9/6W2uvVi1f1Ru35D3zgy+zJkz8tZl8tKp9jNn3PEsU5ZEswEfXKcFaeaLrgrZgIIPlVz/6RodP2TQ82Zz6J7vbmBov6FRaNQRgG2M2P+e/tmYjcuYzJt8lOKYvt7nSPi0DPzjpuirw97GbEKcY9U6eMdTssnpWygQaA1mU5bcWo0AdDTIbgPbCIbEDOLj5CyI39IVbSzMjF8iAPueCLhl23R8L0fg7kAVNcE90HgsczFmXym7XzMZvVTWQtmVEaI8i/1yAxi2xJ7bLdznXCtQ0a4t/rHmPRTwbVrwQW81gI6VnCOeu43/Mpwg035MYkfmiUHuK/R42E0Hu7iyUh1fD3T1vcMg5IRcSojsMlH+Nf0q7YYN5FpH0btnuzxTzmw9IW53cxEdX4Alidw/JuXtjB/vLFdq8PCV7IYZmgYWySm4XefWAm1t2siqZ6ZcBzmsj6AfOio42NDrBmXjJGgXTW25I/bw7c3QaOQ6jkWiiIdcP/9vNqNqyV4VXGNy4wci4NO3e5HhP2Q+6mqvo5pvbVIvKn3ve+931Z6/WqxKt2o2Zmb3z5dvsiMf3C+Gx5H4UBv+qZaZpJ4hJmUF9axFa/9RX0Dep/PoqpKCaN4mVgkbzf7/sADX5XGz8ASO1CycJVC74NY0F7JCo3TWoODmBQKUI83ebJRgl+kJLFLH7rbe/ENuRhWfjIAGpStqGLRYxbc2KQxSScW6uHnEw2ToJKbkSU+p/iJTK7yCi10jZTxT5uj5PKfY2tJkVE7SZqtxR45UfJ5TA5Zlz7AkH8PrZiwZQ1Li7Uph6fqBtnnkJgjwntmnjhjbtk64shK0kWYuFDt02JDtEY98yTIINKzCCIaEkPX3Cy+VTFlnhP4xBY4rHB9M0aWn0eCn3Y/GS9z5J7HbAt1uIk0nyOd6fzxBdvh9j1eUUpXqX+4kIFd+yE56+ch5oDwNDM/vc/H4hQKRinYAVUalDcn57n0YQil+nce1zcr8aaef+MDZNU4xvwFD82Hxsm/N5nMcqKNMsNGMj7x7FM69YizvRCeVzAJs42c0xF5BkV+cKb2Rf9xE/8xBuJ/KrEmMvPNMzsdc8+++zvtrt9h4h8aSFO27Xc4OxYf+ZmT3api965VGmtINOVeaUrFAm5eYerDTH0W1cfCxqF5RNavULHQgYzcMesrO30j1+rj1PwFnJyDp6M0XQVlD7GIXJAsSoDp12BCeSriLTJPyXwov5xwHu54mK+uUbe0PJ7sJSj3YIVY2CLESMF7LkXidwe+h/lRvtUTxP6Jk0oRmWRJ317jweAnPXxxfnWqPXGcPSzYbsriDhgIW5GlzsN3BX9qIlRWQeHgNjwjfYbKYj3vqA8iIlf5VwwIpGAK/qqB7/LFHevsCFTdQpk4Kd16A6b5ktFyU/kewOx4JDv5IGw5oggTbI49wPyQuBC9imU6S3rpRLj9KLBsj2cH8adi21KI/6I6+UFzGAv5rSM4z4UQvDQvcWGgbz7TYklsbK1dbBSCrdarZFpXkqgDmGHrJyptL+znUcLNl0wrsMvvZt8xz/7Z//sd/+9v/f3Xsc8rza8KjdqIvIGNfsP1OTLTewNhTIUGfLQ20W8wDzRO9Xrwwtho0ahO2qmtwm5nedp5wudrrGKTXUYDEPfsnlLITt6s8Hm4lPQUMg5tluAlf4dsFisfPlCQ+9VPB7Cyc+Vg33zmRO7RsCH/iWW/R0O0cJRaCLXAZkAAadYqsyOCvEf8ueYhFZsGxyIVM/dxwWOY9RSxu8CGs+OMFbehs7UNFAdObiGBZ9PGnKTBb3BUsf5XmeACvXtUFJJ8vJwN2ch4rjNN08DxCLA9c5Ylyu7nj5nZG6TgaJK6srdkkHuCf2it+NyQW+hZJ3Zq9h+FRM6nuYzmlJGmzjfsf50YMWZ5qH9ZALd+ep5K4lvhyqSm0GGLhoTc/5WMBB/OV4XXpPHBl+bGNC2Dk8LkjeJyPoGkS6ozOwNpvLlZvYf/MN/+A/rPuNVhlfdRu3ZZ5/9yuc+8NzXimhu0jiRW4ElfUrTKrCRSo2TXG+byi4wbBoTw4WUxkWfiYwPyqr47531bWO3QEPWCFz5MnJSGi+xYkI+335+RWC/iqwLwRoec9c+kQ7dkzzQWN7g8qcWgz2MI7kXjETu8uTQswdvwLRJE6GJrLcn+0SdUWpnqkPpZh5kT7YOTUBu8MRmmdQ0iSkby4khUQd1XegPHR82aUPfDCG9YzyfEue+B4LNc8UVuqTTRqhvBo4YeLoOhuIl68FrwsIdFshyTMJX0qdPG+8DT2luPDg9dBWZXV+Igj3GVygOG49H5RJEznUjCOsO6+Ip/LL0ZvzicRz/SJ2+NQzyA3fFrkF3CEe32rc+w7acD+/2BjP98pdeeulr3/e+930ldXxV4ZXH5VOI55999itfMvtPxeTfUpFfYWavkxL/w84IgW80jULLpDR6FvrQV0ToY9O9r1z0tyjSvjhm+0P90NjtFTi125s02em5kJ0Wz1Q1yOUKmfS2CtL4c0AdpqGEYlLi8ZDs+KsIDBOPVffJcnPjMjFQu4STzxJfVPCPU2r75Ee258neD3jI11PdiJzz53GkK9qWE6DLjVYMoGVT+JhX/WFX9iD5/WOljE+zCTTk27zz5o/RWC4hzQTGdoxyWuIjIhbPjgpqK4Wc4+4nwQNVoIXe9BHN4QdSevWxP2wTiXATuceeae7rond/bIpTkmt8LS5+0g/kTsJGxDH4Uy+eTWLER6A3Mp3zIK1mmO4nKz85B8DmVk8lHuRTkRd9+BMBlumfU+Cju+WNmflGwsImgkUt+iccqC3yl3PafLGM6+ynd8HHyXHO4yKaUw4ducAalwIX4htiyIbPET+S1PISNvd2gV30Fy+aLxJzLWT27iI+j4f0vOjxegmPIx8F5p/U8JhGPLEubPZY/AUW+LJImdNV1fqSivxzU/kZVf2eb/iGb/hJYn9V4FVzR83M3vCyyBeqyZeJ2RdgkyYSCUDlNmgmuiYqERkcupZB0mGpLxaGiS5eRCPDAAUfrpIHusvtMzkVfmtHaK6gtFnpHy+swbgPkOKjVN0gLRYfZGzeNgE0Y/vEle34x8IGPsSy0+AvG5OHxYYpC4Hh227dVj4ttnaETu6/uZMhvhJ0RvnIGf4fUD+u0aUcQcNki7Qhdw2nBdlF7p4ofmwTITnVm5/xicM7pSmdw2t7TejSbLNNx4xI1yqV1qeLMDR2QsC3CaXhCJBgN9fxZDs3dToixX73MaVgSF1+4ndAbiKxWRGaQ5whtjyDTdL0WKt9GexGzWJBSpsvYtVh6nb1PKiq3PBXyaIu4atik9YUZbxok5qRibpdr3GEOJJ/8GMKE+e2A80cb1CS1jbpRRb884NoWwaeVOeGjvxJmsW3gMPBklPzmhFhoxdSn8KOxaQicsMY6Zu0gEbeMi94Fq/kYkHx5RGK06pvz2nOmWavu4t9gYh8qZl94Y/+6I++6j4GfVVs1MzsLc8999w7xeQ/EZVfVSqdC2bY4EQq6F+ngeKjpScU6ON7acI1WOtpWKi8ne1Si+F025/D8WrbpInwVcJAVMPDvsEcYB+zgY3BYNZwUuqlmGKzpHVzaLhljLYW+J4HHxjVdo8D6Ltt6W/baHfZQm5DfFl4hg4eqi2QBU6vPDjzK65GSz1+UNRiseG2AVwzxd/sWCX0Be4EG3h5os2LmXbs2A1RWRuf7htyVuqjYyt8r6myaLFNxO6669RUfGmDFYdLxq77qTAkkN2zdi7QZHEnAMRpnolQTtgWvKIkToJnizfHodEwX+hAExGfU+gc84CLNLnb3e3hcUf8KnTHpset2dX1m1TbLea/8rGYOU/RSSddrprf0e8w+od4uD54Gov2IT8eQNgSuRaPFdMEcktnV6zhSyVC/9PChXDcITvlo3nYjGl+UeHsq6qK5jd9Oy3+wX2OfUzwyDu+UJeIMWJsBxDrujWZIpJ3qe+Rq+yXdx09d73+JCIlHAsNJ/jLCdFXfej/qrvd/5Nnn332ne9///vf0uV9JvEZ36jFJu1rROSP+rcw7PFWYc6YAXZQJalfOUzPfWWC6Hw63s6jkyahcrt2T7q0AjOJgqAxLWxHbPKqPpcxF1z3vdqCMzX/Qcdyp4InjvZRVIE5HeChlK0U8kQQ865Bk6/h96T27O+auNHP39eAVI75IAPIuyxo6Ia0TXPxdd+eU7CHdkUIG9FWP+TG8qVxtwT1ieuVYIrtNVaH1dcNgAuZF8za6NZ19foObOOETyhOIj5zsg9rgagXG8HqdGyaDuhmMtgE05DL9kZnNMHtbeGRvW/1rTbDKshDjJMnxkEZLxSDU577R88bMFeE4qnWcgwOPNmO2Ac4Ht20ooI3GQ0cg6tFaouTdiUeq/zYLMhKNvOx05cA3E0E0WssydFhCSrxoXYL3jQXDS1GKuLzFc/hiWizJSh9bux8yuZ6A/k3qWlFs1/YPYwiNz9ujU1mr+9ITKlv0NSd0zZPe5zXRUWH22wiw6dpaw4OvbFZM7PHKvqlZvZHX3rppa95NW3WrsbApxxm9oYPP/fc16jJH1WTLzOz10114zhTxPw3Xq6uFCSSsrXFsOykqfgLkj4w5dxXpSomihjN0wQ1IdkmQwkmflerD6ycbCdbYYeK0E9piTR1KOqz/nPsVXabCjApBYvR8TqMXdCFmBEsExFobV0k4mVxzDi4KAI5AwPLT57gS/Zi4IyJ1O2bkB8BjJO/DBFwTDnnxc3EIndZYMQ4bF4YMXmPgMzQh8Uofb0a5xe0K4vKggy9Lb7ce40pgKjNr661y8QF5hyOGofSHuccR95wyKB7AxgH5agXyNhYHhRO4mErExu6fP4Y9CGY7T8knbUa9dTntjRG1Vss2micTJvwKoe2dc1QDRvGOld/mcZvbzLZ9k6Jnm9vRKfVL06dCFpTZMS4+HneoLgwg3QDBuQcP1/Aiez2JFo7xqZcqMUFuvRPhjqoboLldSLyZdisvVo+Bv2MbtQ+9MEP/f67yR8T0S/bvzhQobKInjevFNOVyFxYCNnPasK1JHPr5snFVmsooMJPdBQbVHbw1cMrQZ3ohsUIcaB4dGi+VFi8xPVOpXmg1pX3RI94pV2Nz0OvULLjFOTiTgsYJpq5m0ghrb5VymyP5z5Iu9oZIcfplYtV5HGwWMaYmAjb4tKACXO6mwzkFeSR56BcfHzQuuWtIcbl0mrQ0Ft5UTEZAoN/frWRArax0s/npgT373xM6xN6dTuMa7lK9uniiC+Qhsc2TshF0PwA6kocIP8g9JTRHSvO00KpUljyrxGIIE90XjAIG+I/QcPXcL9gslGENlTEX3gxfUWOt5qK+Q20zAFoByjmxi7vaZCJbe0NreQe5Ictmi8kQ3dfAeaf0WqFeLFhVTnE1gt6zB/usumhnHLeipxAN7Z8g8iwZ5LWMHWOzdr9fv9jz33gA7+/Ez8T+Ixu1ETlN6nIl5rdX+cJvArsTPOi8GjPHAHUSsDwgkV56Jy3T+f13K/imtY1yG2sAr6r0Ys2z4eu/GeiJgzmJ8oP8DZGLCjTwI3xsz5qulKCgdNlFPouQzO2UydCt7uenqH5kkifH5Sz+uHI34ckhKCBItLzdqgnGfpzTnCLfkPEdsVyx/lummOKg8a/iZY4bOBPcH/w6/e9HWOHCBMORuVdlYGmNgSX8uKxrQybGBoHpcaH3VLmLFs8OVv+BnvXIhjMxNLH1iYuYmNmkZvKgf6bHYNs9mujieSnGL22PAd7h4x1a9vbV01NdgKdZjIEpOFIpjzAJr7AgTddZ15UlLbIQW3dwBuQztvu8hSkOsSNmLAmZVy7AKxZmCvIH4PeVzakRWTFSqPsgIxXjPccF2wX15lUmw1f+Agixx83FrjNMBfmx6yRw8WyYP6v13bMQa8TkS+9q/6mSv3M4DOyUTOzN374uee+Vez+NeXbnVcDiYK+IRJ9oB7RymOHatK2AYpiQCE0+unulOYA2eleIDHwW/FU+Ts9F7j4s1IMnI7FSt7n4Ea7uR9TfLq/IjFYp4tLDIi2qKfefLnAoG/1mWeWnKj6RJpQuQ0dl2+rHx/tPRyZg5O6A8pEy4SwpU5OFYvuFCOePgFNyM1Ng6Y//VJkwczKz6aUCTO+Ag+UcYJJPakLprL+bBHhNLF3UCjGtq6T5dJwr7B8WU2QZ+KdWj/bxsEkWOpD7EXm3mWrBYPRiw6lffMEuF20KZGqp9eMYtzivFDN/7V8qGo8RuG+IayY+87ZE68ZfCwe/h7jSHqxoHcLAbP4iYewh+MoEnHkOEjEKU5A6vFJBAPIlt9irHnb9EYfNFu8eN+B+QQoxtjK8+QQIfn0tsANfQNj0mJPNJFcsyy+ECLhK2T4fEBxYrvwjFi0FZPz25tDLNRrzOepaIrYqcVaeD9tPOu4S1/DB388SV8nJl/zV9773m/9TP+ZqU/7Rs0+aJ/z4Wef/UP3J/dvF9UvQjsXxR7UmthSIxr/hs3NQ1iFg5HRYOLPfWlV6ra0gd10TwugRhE8CPjEeKjvWIwO01hUZS2CKjE3mcdusz8Gzl37iHXAFyZZz0EOPp/MO93gJ/hOPgzpuXGI2mRerfWz0h8umW3cBRMJC90A9qfbO4Qwcazt1q/HT4KuJv4hfeZs0bu8CTp9tI16Gy4ojOLNi77bQbVG2n2hrK3WfcdxW/s3/XgPQoZdNe1trmx9OixfFiZWtCEvmfOBG7HwevE4XdVBoXGQ3K2oWeJpG97sT3HcnBIpF5FlHA3cJmse67b3GKRaM1HT+DmMPeZ5tyNkdLmCP9AtIre7tI/1afRhkQaFPuHotaYS3whl/nVYYovjPaN7fDB2kjfszsz0jRNsaf9YWXrRHqAHeOPMY2CzrTdAX7y4jkpDzmATaXLLYo4ptgdV4TvFMfMc8wvTGSWP5PQtcs9zDqC2coouqBtTuuDrHYUMF6db8EGP220iYl90M/v2f/pP/+kfev/73/851OvTik/rRu1DH/rQ2z+sz32zifxHovpFZvaI44VMWhxysyDeVKSajXGWG4OKoSkBXXbKp65iEyqi/ELxNNFQYXY/Fu++6Iq4wqMtJnUFY4S4/vENkHc0cOUTonyS3fvwYEO1d81q5N+w2ZPg0cjNpoX5OcdootjCDJ6AMbi67tSDzUH/mI3lDTaLBEPmmps1WiaHFk5iBZPB0NdjdcZIy5ryKr3R4ot/Irx52pEbwIll6Ie85AYvYPF3aMvCRdBQo+LMGm0SuWQTePh0CyC79wX8O+B0zsY0YakP/5ieijoT8ewiEybuCG+MpOk4m8bBipauu9UL01MWYoTzhlXPe116n9Ww1WxsjMViLslmFeENHvlvImKGv1ZcwRutU42VWGL+Cp1ed96AGNee3oALGc6D54rOqaa8Z3fe4f4gji7zpoiNE7lOi5Twi9u86/5xsoSeCZw3t/TwiAT8XC8FbM1GpUcD0h/i8/Uu+pLuvJCjAinPOcqaf5DzQoNFw/oCv9n/G40JukQqOrXZk22ZH+8ZXR6JyBc9MfuPPvbSS9/8/ve//+2r16cPn9aNmpn9mrvI1/AmLWPlFbaOt0oRMS0BFKEkokNPJtBqI+HtA1VDGMmWTDL+HQzNQb6tIJ2hghankx81UA4Wu3lCDdMCypNI+kW0ZccgvCRioEefjAW9ARgvGdcT2iSxsDUQ5h+zdMrU6ug6Op9P4r117zdC5fjg/2lyLeg8uVitSSn3XZ13QG7guz+UztHalL2UqEd8a2dwq9KkWmNnIutSaMdYa45D8xHMb+4ANbCbWIjW2D15WnyM90PKj9hl7mNXIm8QPekVxDAaeo16vUTjYCPXUJGJO+Tx0XenZaOqmFh+HOZ8MCb4cYrNCXX3zdsBpHT54UkrdsM9bXkYAopFn+Pk43X3s4AEs4r8jS9yLaXxZqFclEZW2zLh4Vm2oA/mzmUbPjret5gaL2arnMGTGx50qHuZGrwe+zg4xifGT7fH+8Q60fLm2lYP0+U60H2r56GPpwv4hMZBr4oHPlNj9ugm8kV6v//hj33sY+/+a3/tr711cX968GnbqD3//PO/VE2/Wky+8G72WFrMkegpGThX84U3A1iS2fq1hI8TJboFsVzEeDbXeTv0geT9OMlSdE1Kl6jWbe0JiyFBK8VU5Razo/hWA00AmPQ6jxPHIHk+EOXaCebWNm7p1AHnNTd9ThueQhyQcRhiKQjzUfNCmTjiuGwwKJS9DkSc2CcCb6Szp/Xr4IuIrDupIevMuWO8eoeoaXNPNmNB2dAWmQLLlwKWmw0Telc696vzzrDwkEjuaeSDm1wfZ8gjc1pvrylfZ1kLrR9g+ZyPISoe53LhBOZ2zgg9JV9slLlkwDUt9Hywqrx7FZ1YrpY72NPdkovNF8G6vQ8BY22K04PwDrCTczR/AOnwXidl697uxmHiBnONZb7iYBxa88DK8uJ6ivl+YE8x/E8E/u45jSYa9739qMkZLGxrLLAQzZw3zRf6iY0eEJqfNgtKLOJdm4xWK4WN6tjMHqvqr73dbr/nF37hFz539fj04NOyUTOzt9xfvv8RE/vfqcqvQmh7zIUewKytEdAe5IJK2Epm6hdMN/Ff/t86ZZZ2gT5N+e1gJhldodStfOWRQV2yDr+unQimaXEViQEzdcdmC4UZPBZXjyr77fYcqHFV3AVPFhQ50cVjES8kIuOEtkGghs0TctKI9627BfHQ/0RAfqTpnuwYmgowf9W+tRdyIBwTwqQXyMm9+Wn58nTwjy566xy/e26ez3Uow0cVCZQHLQb87rbvetVk3W04yR6c2Ft2qES8SG7N/Vkn1wtQ+oocknHesPBHSUL+Fv6ul+3HcbNr60+xf8VATIYNxbpTu/LMenIO6h07pgBNfcgWxCWj1+I01uVwQZKgBZ+7GtNIZ8pBbEZ9iM087qb5GJjEZVtbJEfd28aZoH2jzVg53UBzPsvFhdPoSc4fq9bnWhwb113dAzw/oWcjxpedel3mQf0TVOL6HpvZv/Xyyy9/46f7x3A3+z/Z+NAHP/QNJvYbVOwPiOqvuNvdN4cUPC9YD54diiuDac5XaHkwdEz6PNEagjDcYn9Qbtp0kr2354LEzy7EN5bCe3Bufb0VnfxNyU7TGBg9hrw/gi9oQJ+YqGzYJMbSOOYlZYcMwXHk18hnJ+FXqqt73S+JflicOw0wWX+YetInct74ngY5+qtRPCE7dHrNlG6STcnsDEWerHag2Eu1pEEr3EOtIe9TfrjeHgTJfpratlNNBH3sl3JXHBSTYq/Tg5/SJt4av3jhGDIf6QWm+G81dLIHI7bJ3WximqATGqrsyZ4EFvig9fhnvkW2zWX3KWVQHp/wvoH6a/QvuhHd4CnxEM+VRizxnhi+Ldznrt6v28v6OAz4iwxbHMle0Epf8nfrO7UDVDObnxJ/iBwXY1TjHss9h2zTNG45DqthsJl9y2a0qNxwx630S8YVI3M7ozka451B6/ckM2VEczU3aoXsUbJXcVcZ/Qyz8PKQdWNOsYyT8yZ3s4mbXf5OE7fnrqr/XETeo6o/9e53v/t9nedTgU/pHbXnnnvubaL3X6dif0RUP8/MbnHDPJFJM/F07LEREUw68W8DrdSdku2NSKfWdtUPArw2/xyGiuDrvfh/A5eYxnMM2OFPqDauh0VZtZ6ulFCUmHCI7mF3YRa2JA2Hhys7YVFtk1ZoAG9O0dY3IoTlx1m/6PpB1oxnj0HrnrEcxFq+zHahG9MgL9tsMRqYYwLpg98wgQ+IbuucYtuhIYvB56ercwRB26Lf41d6q8ed64LpHttK37EUWFyosG99nsh2pb9FOKHVE45NMelPl9cMxGPlWtoCInS8xaXB0M60tKW2CesIcuEi3wZVG3r9bMA4ydqkh7Gpo5k/YwZ5GnmYNuPNfG9rPJvvgV6j2hZ8n1K9Afamj1ga7uvPZtXcxMUAHIC8izE1IedYNFB/+Jn+Qj61sSrN9nlNPKGXk0Q81sl6h72MiOA2XyRafng8awy9ZXuF56i3ehv6cPwsXlIWyWeY3XOOMnLR54nFDZ94g4c8+BvuwuFSs8Yo7Yr1OCWDrnpT1c9T1T9iZr/uve9979vA8qnEp2yj9pGPfOSXq+m3mcm3qOozZndFgLHH7XnWfNlxuHkaoFHbKdleiUZJPWEqGJHojLWiM+FbRcEDdobxs2IBLxRaLFEY8YKJCUQeJAZ6t4XogsWw0VmOm70apoFY0GT5IGht9TSRfj2QC7KmtMtFnw3NiCu/0i4s6oGcrMTfWTVPMvAJjvGk5DzzN7L6BMTtedxjAHOChyebQcUG51nGd90Cal/LUh/FB+9QnJPhAa0Wja7gvd9F3ylQhB4nyO0bAemiDHavcxMPlOq6iNSWl0tbSCarT1tggK2kab6AubxRc29ZwD554kCbSl8xaZ4hnUr1Xs1aCnpNq6wY5dx0QPINdwiF6fkS44rHlgaR7KGQOgvMJbskfMjNo65OgykJC3tFmpJiZ6WfYtDvfALHMdBr9CBXeF1AU9Rdzje979BH4KtR7KC3GZj108C1sMUr2qATZAt7va/6E38gRjLvYvHvhJoDxTdq8Q6upjtjjJIKgpmJ3e8qd3tGTL7lfr9/2/ve975fjm6fKnxKNmovvPDC5z156cl/aGLfclP9VXczzc/iNQqwF0jL+UB+oNV7zxx7Qa2iw6XYDhTsML97NzpmoLCmqzUPwSRQKB004cTL7Y6/MNArKmQOV04FOtvDmEhZwJG7K/CEnm3tvIAmW1/QOgPnthKn+mEk/ZDbK2j4gkyprESc9JbYN56eNl7gSr+HbE1jAsGO6MA2nPd66BsVJ8drY94mLkKEYvk1MQU66ZTn2tR7VZjU3e/OPShI7CsJ+vdF5JTrjA3kpABwXKOIhU71/lhAmYyDXfzekojk5H6Q/SK6yHmzhfkP6PU0BF5EaFE/YOuGeMZFDOtV2oj4ErLLdi984c1vWSaxajvlGOOdsdkZKH0u5fvmIs/C7jR/mrOZp9MC1kiQoSCC59AfmxyYCguRt+IRZKjuBm3yfVPFPpk3LzFEV+jChUz8S954B4FDvcyiOZqQd87AyHHJ+KyP5rNfvHs9hIHkD+ZQE1NR+VUi8i0vv/zyf/ie97zn8xbXJx+fko3ayy+//KvF7l+lIr/azB4tCiWkJTluTNI501rSRhwIyGIjrya/k9DMcUoQJtpqa4InZoKJbIvighdGueXK1DR6UVXCxqlDAKST1jTnFAhJ0+piP/Fe2NFzmu/wiSaP5KMTpvUJoeOKtmTOxhY748HawonnHlp31AvuJmV7vDtp/+FfgU2zOQ9DZc1ir1hGdLiIVwdMVb2V2RNx9TsBsz3wc4pB4tTOJOK5YBeJvKQZHKtmXg9dWXB41XtIIUPzZe5mEgFZTd0OL5xBQNskbBjucCey62LYxkw/L93iAheL/sALXNGKs3j+LPoUEv71jVjS3J7+EX7mDXE+weIlFF3afKB1u+SgMdv2fV4S0dzJEmnv7UpmGb4lOcXePM6TD77xjGPQmz2A4qWU7i6095OIk+cyYs20fhwNPR4qdS7tfuZNAxKeMaFmO9UubR43xJpgZo/U5FeLyFeZ2a/ubJ9MfNI3ai+88MKvNLOvFfHfSkO7Byl2vy05C/MGJfI5FoLgCiwyPnBEY5PMu3xQJ+UyqxUUnHriGH5moz9qJre1ojWiF8B91ckRiKHx5qYrC2gUcr8CRB/DwrkZVOFz8+LZJiZ8pMtNdNyjAZpZ3ORf82RwBr/Cw+Hjua2hYZsJF6aYpbhJbhinBzKgMjDQJIGYE8nZacIpZpXFZoDNz0oyclLbsJ7ZYAFlseshTPsj302smkamTgOyLgrS/dVhQY7jjOEBB3XLPWwwBjKHADpKPpo9W1wIWsPpiPPejJbssjOIyKFmGsZF56LdIiQyxDZSnMgFFuM8OlvQMmbIbTTkdEcLdPpSHAHj4pewfdnlRJNgR99wgt2sPq85pjCB2nLZzwHrQaL2PcZL2XkaOhK2O+Ajcv1b5xL2bGMoorBiVt6SjvPNn+GOp7AHWF9qGsVVmnMip9mHghMdcr0iRsML2aS6HO9+itSgd5vlMvKBmCq4H8+hPsvZIxH5IlX92u/7vu/7lYvzk4tP6kbNzN56f/nlb7+J/gG5yS+TElf3Go72oCFsrYYqaMH285VAjfcNU4azvWFqOyCtOGxwfFOyb1xQrPNdM3pkl4h5ezdVxZ/y8MP07vQ5vUkUKjZEIRv9sYmDrVDdc7Tbu0Pzhc5PfSNpGrfMGX4aV8dBm6I5C2448HT/RAaD2wLgJcgBbNCLdhz0Z9xYXZxMIo7QVSNicd55joAvbEXFnBuH5ktvW4GA5MJmw8aSzpl/tmqh0yf7xlxTDXQyZIDOP8OjwVA2Y5uD63z6uC5BfboIFi+yFjAB77ThLDZ0gxrI95xPCNbk5QKK53tusR0nuwQXc5Tf7JdTzxJaFlBs5OLLIj0HkKlYPMOW7DzOqYEYH5nv5uzpObGnAWJQoK6zNAzG9fxm+/HCKtBkldrIjwP3b6cr2YEYJsw5jjB80xfnTETD2sQnJw7KBh/EdVou1mEjX/y3iztrz12Plrc+q079YMsbmzZsdFFv/p62/TIR+QMvvfTSt3+qfgz3k7ZRMzN9/vnnf4WJfLGI/TIzq7I1goYktAAFpUxEQLL2CsjitFOaAsMsBJNwMoiweWyVSW266kma7AJW2VWDXKZbxDItN1gB8h10EY/DzTaxIiSjLOaMzcYKNc9d//NUPDkAmY6OgeB9I0Z7GAsQgY3taoI9xGOym3FFWyKXJZkSHGxGksy9JLyZJ7ZNP5I89xUJljRkEHEBFRi4evUJqiPHQF+Qh75sS4lt41v+xy/eB6/r4b67AhXvp/jZh2BBX24DOGSroTKlTlo0s6kLaIsC0HNxVV9AqQdCj+0VTNemZ4LlTxewn8Qgsl1Qdv2FFg180SewIxh97LUFn+B3SfL+S9GX89chL73wi62QGXSm+cYyFM5mifTNPjYU1CQ9t5Abm9fOmwi5m6/b2uLn2/6tbW6QCAzpKsbtAO+UT432HiM/X7nrfTP8ZqJqHnPcHAhoizNOvW2oVbSL181GC9l6mvNofmK/VdYiPvkhqrlx5JyahE/Y6HnzTUR+map+8YsvvvgrzDaJnzA+aRu1D3/4w19kZn/mfrevNLPtMyqjwIyIaDyViz1hXlp7khlb0UficBIiCpDj3tW8jRO4s8zPIonOcfAJLGS2xa+gfcTFE08OiKneU2+nLJ3qjLUdYTEfeEmL9zKYB3utxWkD92+muU+trZ2LjC4lLqbHEufVxk1+dCFe5GTTBez0MeXwZQxp+qduHZ7HdX55ZZ751afwlCa6w3CDpqxlai9WqG4Tc8l/a8e/pDEdskOe13Oj4SSg6fdqc94hVuHr5G/CZKynze/w5wrsq8bL1sUdlvW6QyMPJ/hGwPNgt/WxlmSI16YpcxAx8kXM/S25aejqnTcWwbQvNiUIVsiyZn/f7LDe3A7Apai/vHjNb/ut/jhUJ0PQEWlLvIeqY/xFKkPn9XG51wxQx+3qqdry3wUHDDFq7X1s5rHKsLY6VPxH4f0/5ykqyR4RdTER876xY/0affXe7EA7Nva2HglabVG7JBsi+pzXQ3SPBqNaEQmd9M7bBtdRfUIfM1Mz+8onT578mfe9731ftIifHHxSNmof/vCHv9hMv8PMvlpE3mTp7YLyznquBQ94byyYizpVDbRLUHKzzshuP5x1CvocXFKZZlcviOQd6CI+kU20La5k71bkBDTl5NrgviMYO12GPV7nwnlvF+EJnsB2B4Enjz7xD25d6xTEZ+/JkxeFcKE1sPxl766V7b/CfqXsuemTC8DcnSPjRJsEmJcT43h1vuATPSWCsLcsXPtbiWkmm9E2rGyBUqlveoYNUWJYjCfX0Z3FDGyrQJqQXX1sWmqLSHTnTcUVTjwmy0B/C+kHfhHE6SJWIhl13K3Y4hJ+IwcejrZQEZivv+cxLYym4k/62FohfUPQ5kr0befAqvG6M8GC7G5W4xZbfkh4BhvCzjR0exObzn0e2Oq8wPOUiLiNiDga/C40Gh+UgySfpbpMupQp83XYt0LTfHMm5yob7BrPrIvs5ES20VTkjo8lcYMh+oENd2YjUCJ9cxpduA6TwAJ5Ho0SzVrFneNl25vE5KufPLl/x3ve854vztZPAj4pGzUz+60i998pqp8d7rc0tXrpRPFInYa/1pdXDg48t5m3l9wQmx/6rp1V5yE6NdGJU7vI0RcUzzhoFbZ4387im8OZJkeNjJ2j2DEJjV41JgOCaW0s4ryxAan3IM9k0eZYHWKZ8mJqaTYo5KX+wYDWlC4NrBP6hsxDc95M8bOHncNtrXcaJnSdACZepj61HwPfikWbXLeD3RmPg6PbVHM4j0fLl/lCx2tiIgT6t3mVjBjClzbRXaflf/WH63Cs18BIi7aTKVNIve3CV6GaMP+XNprT4nATU3VUm8eaSEHA2oVvNI2gp3CK4WF8AJOtgraLucZxMY8/gG4+1wBo3c0TVmwX96mfhdClY5gHevWSIIsAAP/0SURBVDyIgesTMLQf583alrmhAPca8Gb6sdxmA5/kpigbKXIwOMuHNo3J3xAXKjZcKCltHBm2FGw0wXNxss+pIeuzze6/U0R+ayF+gviEN2ovvPDCl4vIvyciv1TsvnZarWL6Fgwx38Zeu2nE0HypaJ8XF2yBBop9JyZgH8Sr2PYHDs/OERrJb6cC8+91LZ1nf1M1N2Y1D7YWNCcJmi90HvCh5ImbxGPQb4PfXJDbtHfOSXyaZCdFDc4Sf74FjbCDLgvOos4Uzu1m2xXouaBs4oNBGPg7acmpowvHJdYHaPJpyrnqd0WToHveDoxhXJ/kGD0+Hf0jMHTwt12uyVo0eUi6x2egH85OC4yx3w1T20PYxoj4xrcmWZ3Y5OP0MgcEo38ZEPI5vBNpPvbYsc0lP8Fo8UPgrqdGHWdm7Q6gulycOj1Oepy6z7Qwr6YwID4Szf7Bd1ULDPbd+nhm+3KO6atf4DI/K99j3wE5o9F6qFucVnzojE4ONmXovSPyUrjVG7Sv4dhRPoCeT29cktw3DsjkxMKh2WFrvep6edPZ4bQVCfY1Yq831V8q9/u/9573vOfLue8ngqetgQ0vvvji/+qll176mvv9/r8Rkd+tqp8td/xC2D6BiLhXGIvs3Erj+hMRHTlhtsEqlBB8u4rJ+ZtlS8lCxnyXKdB5oLNOM3KEeQ4D0U2Zf4X7HgHoE5+Ib+Z8CqQHHReb82JBis/10+1D/AyToTrNVNczAdEmGoEa7IU+CZ0ZiGhM+dmhCll5jZeTjrCpt1/Z5QcwZNE0ZQYhaJzClB0sjAf1XtHE5fVa9fe9H2w61f9V/JKG86EeLerXf0w52rjf4MuJvulDTQyyseiiy+bn8PdZOQYue6Zd2xs8HUM9SJE79zPUf69PnuuHGBgNyU4HD2gYn5v2QS7T7BQjxgMydqWdx1+YjetMw9Eihuam0qxLJ+oh25PpYC/5qxp/57H7a6Ebpw/kqCDoWzvR8pRrRi76Aejf4jSN14V7TNCD7JM92bDo1Va3AWN2jL/UWJhEId/XnCYQR7lZfeONZBrPE71WgpahvLBlwhRDw10xouVRYR/uUAL9YpGgqiZmH76b/ZiI/Levf/3r/x9f//Vf/4863yvBx3VHzcwevfTSS59/v9//fVX9/ar62WamHiyYr/Svgi+oOKHWEgisYqoFCFyRw6gZzDywrUlu3bYt0KBJT7Cj36pXDV80aEHOW6mhs19/4fkL76upbLNHPAgaz/6UTGDzN9hpsZkSk9LXJ9lRS0G4VGxLWpx6jHbly6Q9eYZ4DRtSSb17YiAm49XlHk5Kv96I06Ttep8eccHCTQdZ1u25QrO1LNJD7B3x6/VUHGXD8QBOrEZ1WAn+plr/ZieznW1duLSx33wqvBcdH4qzF1wCeck6JKSWFdYZjbabEM/BXMkAmKc/8HxE5Xmox1iL3YeYMxQLaLe9fyyOcU7AeW9/Gpzrx9sNOju5odeYRltv39DL/sIHtnUdRfza3FtkUmB2e2aFRX5n0fhHH+MLzb/JZu28dhUJchGPB/65w2azY2o+fhERmyVdP+8ENjN/7lFl/2sJPC7GeVglveh9QRHEYoDd72oin60iv19V//2XXnrp89///vfTD/+/crzijZqZ3Z5//vl/2+7371bV32Zmr1tfR+0raqYnRi3TCNFNMSkVGRATgWskkE/CvdCmXtegVMZ/VQPo0ySD9o4yf9Bx3jFLD9d58jR5fAcEGJpEyMa7xN2xBk9Nz13DuFNtQJCaIa57l2G49SyyJb34e6EXdxYLMK7RPpjeu7wiFOHL1p6jE466H4rxENunRZ/0AY8/srB41oQ825ShpUW3TIYHX8qjytss+XToXdbsE5T2UzKZl0P87LAO7Lja/FxIaF1KpBsNIc9zml9OC8MZ1x08HHXc8xxVeh/mOXCxbZjPmB/07oPhIhHnfNBohd6BjWmzEz7eY/3A/MdyTPyTBEbR2zZ+Vf5wZ4VFuQHePPoyFZ9tOkUsTKdNSfjaOUXChhiDGXvojDuaOtiU6wO3wx8bYoEXra5YKnPkzQb8WuhQG+d85wahAjmnu1tgWTc/hr4aNZqlD971zxvi90qb3iJqXDZV5G4qIq8Ts99mZt/94osv/tvbT5a9Arzijh/96Ed/s5j8aVX9HWb2Rin5YK844jwh0+56gMqJ6JmfSHugFjzxcz+LBAZLpdHr2abAQFNbE1Zv94NGKIgJpzcTOs3Sn3mBlPSj9lz2HDo9gDKw1jwoEvZY8GjQGVquVg52XcB93v1dg2f9REoXd5UHjY1r71Ngy2TFnYMHAJ3XrGeqLyi1jWUW0jDBzCBHxvc5DhBt/SM/QbfeCCORGdke7O8L7Alg6+7lJuqkf5BaYsShCJpmjOObkcNCZTLXochgpIxmLAz8Q9OIK74xtoMvQvOOb7Yv5qIh93yK8V10D0bykqHCxXXt1CYrOrNNGnXhZRfZ4n7h9PYbXUW+BwDxEUgqi/2C6+SDnQc4fcfS584SzTDA/HEeLreTcAQQdDc6RY2aibDTY/6JuYXpfrwuY6zEz2MVqtu8v/jQp3m9aOxqHuxWSujTw88dpZzwReMxpDgNWt3k7sAnXB7SjW359EYT+R2q+qf/8l/+y7+5sz0tXtFG7YUXXvjyJ0+efIeZfSU2acIxE3jbJy0Vi39SvsJ7QCeu6O0BSXSdjJUwZtHIPq7Emsmha9JIt+4buTQf7bkAfN3UBgHVXFur3ob14OzVR7gy5A2DKipxmJQK2uf2ZcK86jhMktr6dyAEJ7Fu90ClMJa2BvxEwAiaKDN0RUwPYujM5gvZD+AUk3s8rJ048O2olqPNy8zHLPsosME8b6M9mi8FRt9gda1T56Dt3UWgljZ70j1QPTrvfYfGBsiDJF5IQGdeEY/FyIB+xcgzsBdEXPkZP9uH5wOYudGawx26iM7tIm7PbRv/pwxWTDWi+bJjYB8xyZ1kOpsTtj65GNfgljoZcqey7hJh/QChqzC8dBn2gLMHWsqLOsG/zuNNTIjjYZ5PkK8P2cdhiSkxCVvIYlwiDFN4KYSFNsIk15tpXKjS5hpt9J55g6guAHCzB1B0B/0MFXmjiHzl7Xb7jo/3CwZPvVF74bkXfsv95Zf/uJn9HrnpmwXBKAivDgvvVUOZDFt3FKHlVk8otdg0TdtabtqjuWi+HJXuucNGJ+gLos3GlrPDgOiDSvZwbMBWV7QuYmlGJPNWbF48VwrSnPHSwKMj4jKOBS0Rs9ZfpV4ldbrLW/K5vetSSoFC1mAvI+8K9PYUNcys0bxHMpqDv6iPg+6fyGDjeDU6n30iGG25xPIW8e21hhooeRtxfSdOJk9bPifpmXcGnU93sZ8auv40m0ndMAHNxES3tfcTOXSUVedZk73243yqd8tOjm5Hyh51d+4FV0X3lYdhMpWASl0XuoYyz3cM48JwAJbWsZ+f1p58QJ51MKtKznNdQqnksSbWhqF3NqEgbH0rs/IGvUdOJfmTpu3fAakFd5iGGG0tLDeIY9wA5JVMY2h8iUMnIkQOcuFxawhQlJpMM89K2YwVutC2EY2NIdpUet6ifWjj4yrO3iIiv+d+v//x9773vb+FSE+Fp9qomdntye3JF4job8YXB0R1THgGbyLV0CZyEtrjnfBEb2lbEXngRz2BalaLrPu6Uw0vi5YFN2zGLPYGPPA2tPaqa8eSRZNnA67Gt8UKkxMtQoUcDfxRFLvkk9twV63UuBO6bAGbuYGdrsbBjLZiE2TGr11H+8OZrgC/kgwTt6nLysk8Fu5KbOeAOi3JJTZl3Ps7Lcbs71RPHy/Y9q0mCP6xTy1Wtw9/LmXxppl8Ntk8fOxQxsLV2IhnzPgOIXJi8Gsa61o3CR3rGnpGMU9rDkWQqFNTZ15QCX/jvNcULyY7YtbDJiOFeLGdtLqswx1PBuWO5+EJptXI7gcjzcR7NJxqoOtF/Nf8MOOqxnkOgZDCgr7hl2JmPeQH6H73kK0UUfz7ELFwjO2/8IV9YCeM/jFynisxEJJR6ylCkHMsy8Os7WPLO+g4fqtd80k0sa9MmJABJd7WqcvA3U5Quq25EnGcM7xdWsu5OW+vg1JPneb4bDH7zfdfvH/BK31ebRZHMLPXv/DhF/5ds/t/Kiq//S72RokJom8ZVFbEzDsTdSEX/a393EcO/XLyKJXWoBT83p/31UQzgUzoBNFDZhhjadKybdEiPhmvGBxB68UDmO4/T4CiuOyrboPFIIzTsIdiN/RNPvhLdsZpMpZz2AZHT7KDsMUZgsx1MergOMguOZpoeSZCeYiWOJj1js9fyfIlTtZhxGz7SQqUEssFQVaswdf9WTHa/eQYsb2Zf9J5CQv5OKUx02NQ/ciTQkv60HeKkYQJOeayIQ65FmS2d50c4ndBe8jXbhPaFU0nuUHTNgcUHPrmefTP+IgLyjF1tJnsHuR647XuS7o7x+SFq36y03NTjjyEX+XjfNAPcnu9dZ0WfTVoPD6CweNKc+eK99Lb5R5tau3AZrNI6i3t8TMjQaY5N+Sat+72OC1Vb/TZXkMtxUP0GyxewhjrdqHWJl9E/KKAYkwMac+mF7oge0DKh4mMK9nR94Q+ny6Cv5x7Lr0mLf4mH1OVvyOq/8Ub3/jGn3jHO97xi0Q94nJXZ2Zv+Ojzz3/VXe7fJSq/w8zeuAKyG2riDzpOGyqRCPgQrFVshwIREdkePZYVgVUpRCOgooKs6KJePKG6QCUWkyRkr8SqgepvbpCCRG9xcrATuCC7yf3yLGIr8W03ujLW/IYo7O8dV054ktN4JsXlRT+SCWS+ENBdvDcPd1gSHKgTGtlYN4Gblj80WFdL5GHXu2K3K3Cd0c5dEUNqArTZ2u/6QIxK2LSblMhcxbniypYmK7Rf6XwqRO57uWV88nf9vOEhDQp7uYGhSOyYloYHGRJZB0No2ReVwaaE+j+8Rb8ub4bH0ab5b/DV84laWIsF4rdOuNfHi6cXYmsKQItI2MRzh2OXO7iaYHdUXJGxv0+B1X8G31Ht44ON6zpt+CSgAHMuzq8cfUr08XryqegV6I28IKjdlpzTq2DFy1HZPo+ClWPUu6cvwbNtvjcnCJP9BGzSesjdnvVt3k2Emcg9LqCaTwCblH52wmD4PB4SbzST32Fm3/Wxj33sq370R3/0DZ1hwuVG7YUXXnjb/S7fpCK/xcxSoG/GrnCIbjZ15wbeDavPOmpXUOuwoAcXSV3r9FwoLs99GciBg9aulNo1kjlhm8hDSkl+2k1Ip1p7KTKf+Bllo0VhgKgrWzdE580F9B82C3rx8U3BxJR2LeJmquZLwsLXUeYD8FhsWramS9FtIJfjdbjaKH6cH4CPP063NgcyRHzRMYA3s4VnyGuRc1ULfWcoXfgMs/Ut3w41d2gTyw2HDXRpCSdOizyAnK187NIce/uqzz22zN3HTm4EYU+TwVhyhkQBQyyrPjd0627xQoQVB24hmxkWP0Ux0Qhb5KJuSvtwovnSQG2Zg6cB3T1hdZt9kItjzMV7mL056J2WU7jSbS3QcOnEcWg6XW6Vihb0L+vNU2DdWW8+JsN6BvwY1hNhXR9V4O7o3uwXXjZ/m7cDcot8xD5qsNrO+599L1RautEqImJvMLPfYmbf9JGPfORtjWPEcaNmZo/N7N8RkV/HmzR5KIEXNHbuBM2XHaeHPUU8sFd2HUkHXQ7+9lsHfqtpFuD5mHrRwdR171KbbGtxYBEaJtfShXTO6ldr2cQdMMWcm1KG0cTEiG8WwoELVQWFr8USWpbuISAmItMiw/16IHvb2Dl87e0XGCc2wtViJUHnK8dM9SRswHjHgAU1wJ5pY7TSfejcFtLiOxbm5m82oSPpBKtaTM6Cn2KoSJtbO2LU2wssX2aobBsi1neMhUS/VveK2KMb3QCpjDVYZXHVa7uHEIlQPJ4GnpPwjn3geDRF3Y2+IdAQxO4zWlhSzqrDGo/FkM15OskHShyuPg0QqU6m7fRx39AZtvd4XNkEFGvicOU96umwTqfOEnP612ooNUUb6nqXHR/Pa51ui+tDHERW+yYy4OvG0Fn9hW0+ydh66xpUY5+gbX56cotAHWSADf86VOQNIvLrPvaxj/07P/ETP/G40zuOG7Xnn3/+99n9/sdE5Uu43RQfb5bWeIf1k2lBnUk1IANPTuDjLCxOvLgCm5pX26AwgMm/Zya/hSmX3S8wWeTwW7a99QHs89QikfknU1ehnzgO7ayvbxLLldDpriRGmXcs3dH8FKoZ2W7hT18I8+js7QlXm3ORIA3kPuDH/L5SYwJFZZxM4idg8zx+nB7otiMv/FESANbefkLns3xZfu1h4Qw2qL+w3BLrprDY224uTVNNMmyKz2BrTgvo0OQgm8aaYZPaRpdjyahNNYsnHRK2b0Dd9IuTqJFJf/KSLp5/MicRqy191JC8Y7IWYKbCxykP/ZxQZq/Op6EANsMe2JRGlreg18ZrLwLNlMw7k0P05iMA1Y1+1M8Xg5Ot4W/q7pji3dBzLbLs47roKP5zbGg8lLqOumSJbJtJvXjdbIrgIYT4lzvUKDbV+BWGbnjWhX3J/X7/Y//oH/2j39c4NowbtQ+98MLvVdU/rqq/0cRelwT1EYbfmCI3430aVddIFg0HcOu09XV9/h9Ii41ns+yyMNoRvW0Fburq/tZNRt45NmfYxKeBNFgLyb15JSg+X3Q1cabNJvHJo/iBF8S8pw8TZcSIB+gmP+PR2oZmQIV4mkDoKM2NJ+3pG8SEt0+mQVRvF8R3IgTtRF552aKzEBNE72/Za384uE8iDG32sl8XViSwwI131UJAH495rrLX91PEADartNtrBXE3uzeLC+i/JN8Xj7HfgIzf7ooIxkO85EVbe27PSD+DbbiqqQkpDlPUFFHzl1GsRQTb4iqGn/DJ05SAOYBTWPxqBuA5IBldo8kk5vWEBp1O+9zi9eEosi/ubpmYT85hN9u+hR+KyvlqQCwEv0PJvQcD8LmAVDE+1lP2Wjc9dW5v+hsqVvx9LiCrNk+yXzSpUDAlNgzF8ZCwBSRotGYxC7N2O5NviEvBRe4kzN5Nir/L+UBfgH/rD3EVii3a+b3XSoLWRWoSM8uPVOvSEw6wEzEEvV/IRF+R16nqb1TVP/5X/spf+b3Ua8O2UTOzz7rd7/+mmHyxmb2+GBlBQC6rb/sKhg1djwFYertYNLKjROrHS058O4aS1LGn2bOnpK9zwCFrf5vOA98zssDJ6x/3wcVMaoPHa1mL95R3KKoSC7asDVSLNoAnbZF5w2PxwgM07QGTemCG7u4qTQCAifivbA+bXegovk7CzbfuPSaYHPvmtOJhSpnsI/bnXsAydONVGW3S7usBvWfGKA3eJ9KHMN6NYD854fQDyhp8mzNoHwkOk5jwqI1FjT2pkensZzN1w/gjyAHvtyLMskzXF7H7hYFKxHwQjTDwxvLCBJGgr/nFx42Jzxd90e12lBPVWB0Wn8bhPdoUtJgnSr13fXSMee0WZpZ8bJv+608I7jEVegydEd5f9WOYeF+PXcXayMT81BnQRnM18rn7UuHy6t/uLfzpD/5rGNZ2iRjK9jiP1ixvneiA/OkxXDW5xIElerRiCs29HogmUuM3IuhbTVHstrkrdjn5d4OJDlvTtiEkuVkhYB4HTj7lRWzwWogLIntOnWqThVG32LBlO1jNXq+qX2xm/+b73//+z6KuBWWjZmZv/chHPvKtYvZtKvI2ipa/6sErWKg0uw+8mQwKNNqYU8HQcDPdfh3bZdi+gNGpmvNs6E1b3BH5NsTMqfi3f4sFovD32bjtYez+tcWYOHCk8WLaYkEB7pvGaL5E6lUZC75jawoH8q8jNIW+cN729njJUA9YzX1CW3CVu4DJdgYm/MJGOqAPoZEic/W6x6RQ9A1xYHRfHrJVSBxEP0WXgr5Z84UnBlunxb/74EROajY7WXxri2rlHhaLXH+q7C1HH0+d5zuNdBLsi1T8rlzy0kHfvO3m7zjYKhIxR9xj0d6xT4ZbmUWDIn44txa4EF/vSJw9wN1F1HaZb7HASeiIsZ+5Nw7e0pm1s0g7DsTUSP7BpJzDrqAR80DGiRcjki3Zuq8sKYXuvMhoOtbMsB7yKYYjhgnB1+Z1niyb0tj4xBlSAbbq29OD5R1Vh+6OPYLndKE93SXHWQpu3Pgm2kd1+rZtgBfSfnyjnQxh3a7sPMg5pmV8hLkaDMHzNhH5thdffPFb/9p/9V+9FTIYZaP2kY985DeI2TeI6K+52/3RKlzKnk1XJXxCgSub4Drsr+pwAiYZG3PdppQ4eZqBj3GkUv9GXEenpZfDHZZ1Xo01NI0+nLEiurd3OSp6mNSXnO6LhQ8ad6A2GJJZO5bJNxt3YzV0MCuzTd/MsXjRPDnYJfFDuAf4hL0Ylk4RudjgyRCrZcsS1P1KBB39r/QwBi+fqi8GPvAUXTawbvcdtTRIU4laq+T0d/SEkIlo7dGGO0gdGYtX4CvX2gklt68QD24ETOrYmfRQ/y3ffE58nU2gBjlo47PUasqJQRbnk8wzfILvekRoIwe9vFgB0af8sPGDc8zZQszh6iczor3bK61Lpdc6736kPrSjb8ylCj/QAVA53We7ROaRBbIIzOFDzE3i7uYhb3Bms1UklSCnO6IfZKOZN6t9WMcnDLxZpVAnD4Rteg/zk8t0ih+uhXptvpfO7LcO0xfGulCbs4aLSJUV240vVKPdzB6ZyK8xkW/4kOpvaNwivFH7yEc+8stvZl+hpp9vYo9d0lLhsQpnR83xjj5Hnkwnx79OwFvfwLgiuzTe/aIAt8HWk0y4UnuJoeMK0SARTcMgAoZeHtp4l/C186XPB7k5GHr77IYIZPbGE8DYBE1+pr70g6thYeVwss5B89Jqozgz0Lx07kh723N5CyGlBU35nCYfoTsZTl+dDJtkEtlR4zdwoO/szgOgTk20yxsKTcInXKn2+FhvGFATIRIx2BYOgoWibRnh02lTUPK0K1j5jpcm3uLuIsvkfHq32m/LRT9H23BhZDqaKdKbp9REjETC5oEMJJ0X1u5786nL6/wMo5yW3JKNT4NqQ5wgz0mId51WeiD8pfro8XgaoI+7kcE+6KyO7m5HMHbC3NbD1+OQzW7ZcTxByKjDO40kzFcn+qBvXfwHsXeMO4+n8Z93x0qj93O4UV2sUyI4TIx+fdO6Y5e4bmZss5Dj8PH7hDJlmD0Ws89X1a943/ve98srZ2zUzOxtavaH7ibfKiq/UmTPhNdhrDjb5BLnaV0100VxGwJVObtUxkE0rCoGbywi0UoaOJgXilWOAgM70YQGz0n2VHyQduhTaZXJeMAOckWw298xF+mCqQw5d5QFab/p1kzZFa1Y2UgXgauz/l6jTwP3p7cSIIhyhNh7GPZn8RD/1ZAvXpnoMA1iathoHQMD1ELHQ+5VLIH9bqraLAzpwB0M6WY9jfIDz4rh4Cgw2MTo5CnfkD5qaXH0eXmITTCp7YLqmIpAQkQxjgIYNcQh8G/ZEz8Bi/ERJ5vFZfPCCBdYtwwPDZTzw5wAXFHZlL5APzQfeaCiX7bFT8XEg4SUHgLd8YmWk6pTzE1b/8M87gFFVB3RtQI8GyGtfRA5TgtiRm3tSqzVugrQNrGEqW+uQ9RxrQm7Rya1jlD/HCvuU2pDMSG31aMYFidDP7/rOzvpdvVnuJHvc+RU3Amli/MuXuNZ7i5FRX+lmX3ry7/4i3/ove99b/l9tZuIyIsvvvimu8lvVdV/4y72SMQldEGpkuuKDxBhWe9IDQ/5XS5heNBaBPJGSmpARcxcUnYRZuTOReCJrbZn4061mLydUull4OxdvelgTpNU2pTph6sLqSFYbcQ8kJ8ewx7+ZEe2bxPuAg942MV+st3Ff6YNsbxaCFSqD12uIL84iQNeuNNu0sMq81b/JjhfCurkRMfdZzp+eqDXfv8lfeA7gmRm539asM0lTXlyLRcXHD18C2cKAI6SJmu6zR+6t6kOejwaMqr0UUl24Q4otjBEMbeGwrwzkosSYbgwYqiK3LZFkPThnY5T3HDRt40bW/QyrwUNTRgPfbwCTOvt68TfvIlOMl6+8NptxYnNNZY9XSyJIODViAYswOiPvJTxwcfxrnTCuvsmFRiaCDTyLjYEY21MdcTghZGb20EumVYV9Z4WjflXftAneCOF2YBYoB8IXEMmPcZNa5zy86QCU0HLl5XTjuaaCPL9AMAx5VXEBU9STOyRiv4bd5Hf+vLLL7+JaTcz+6z7y/f/WES+wsweoXAQxCIwT8iCjDT1KJ3WbtdoRe6GOg84HeBBUPUQKNfq7WlOZ9g0OorMiaVNMNmcNbfbu451y3TGFl/1X5R0stPdv0h8inNanjKtXaChwHHbdnCHsEVv4VafYUubJHT2qgbQTJuTbOIYxhs05CRmkvewSggS8085HAfKBVxOWrCMGXQrGrdY1IeIkyGQV2U0SU81BhxpfcG5ub1sZ8rv9iSQkC6sxq/EUiM0vhPwxREiTrYSLOyp8WRl5xrNELOPNbzXG8hhg5zPfwz2QzbfOdkWxm4A2gTjuBrcWaXfoeWT6DdfTG5LVAWxrwWqxjkOglY1+CZkcWxu6qq5HKuIFUlCO9cQDpW+RSwiYupfzrLWb8uLrnrNux4x7oziknranLiFUiQbRxJjY6AH1bcA8ftw1vwChmVugeZDaXEV8ThguHNenLbsH3MaSH9wzkScpwCiYv9AekQk5wghWRYv+fNXbdOZdsfeEur6XS4cl/qy+FkPAsciKS12XHM3i8W6x1fdkt6cgKHQ2ekEjoWZid3vj/QuX2Fm/zF/CxQ+f66Y/ZLVfZy3h4ZAt4SSlF0o0NqCGuTtnPIkIhLX/LsRuUC0K5sr3HL3/sBl6YFkEj5Nm4/ss3c2jW/LlcnMRPTu6TB8xm1i/iV6D2cEzsSiULwv4gnZE3wiNLnHJMZWqcbHV7upFeZ/KJ4X/LRLKBYNiNME1Jh65xzw3ZRD92X3kD9tkzvLYJtn4SFPfeEw1G5M9jmxUN+0AAOzmYSaOH5UcpG/E3gSMImPfbrsYMAm/YTTuBrBC6t4XQj7mIwrpx39gqFctpj4Ujt3FSFdIuAnmtTJS/ti1QRnSja+dc6lMuVXrLYVOVHb2cTqQzHzH90mHhOvzY15i0t9sHnHupjkehKJwOCwu0gXG90IpY92sq1vtuLY6JvRzmf5LdCBPf3mO5W464l/mbPN52jofjKiBvaa+fjgtTKNLke/XE+cOsgcGKUuFucYehx3E87bgMN4FQnaQEbcE7keE7sFIexJ/jA0ycXWeIl5jf0TiY0NfaOzzPfhB0fXcs0HU9hC7SzjHv3ZZejkuG+ADshvZEfEgs/y+Tb7JSLyuZ/1WZ+V4m8f/ehHv0TMPh8NqxeMr2r8rJtPOAwCNY8CxvcMl2ub1gnOgUDkVVzvqD0aDtRqZ39aQNTUn/3vsVDznxnxLGarx2bfRq3DMFbjGPHvPqDwOlRUHkks1jzgUHSKGFZMsk7IyZP6bN1JxaovTB6zfrfBJW3y5NQY6KFOvbDl0NkiNlEo6OKLiIoNV1RbWgeoeOy3uIa+XGQabeVmUSJy2dpFMnKC2UBtbWW6Wqgw7jw1VbMKxM45FalqtybEcVg0nLS3Ax6TQbisGG82DeLQtPJEF4HheJEyJQAM0NuaRTKAhca1cfLFYzzMdx0PsGwzTjnpTjLqPW7UPkz3O17kcxCcG0zxxpsiVbG4fdBjIeI+6931ucpVDX1V2vpeodVEnUdbEAa54K1jhk4iPnkcZI5HFzuPV/HY89jo81u+7DHQXsdcHzHPoCJKXhL7/JWusY8NLvNqg4OExxlYSaZKiABPXOyxjbtcKfNTicfFFxgkZJlZ+Vaym+MNoy7zF7gy8tCoI/cWVETNPv8DH/hA/lWom9zvv9fEfjvzha49Unyka9e6gD+my1tpHMD0Q1QCp4nJAVuae4fNoQg7c5J77PkwDnpZ00nrEVvcZvQ44WwqPJya0ECMxgyP8FXIjC3dDZmVpl8R/jEYZ6FlQonOm4hz9wudYdNkbMEgfNpkvRLEuGERiBtPot2qNdY6BTgY1XK7w9tVbHPsIT+n8NXag+z1r2DqizaT/Ph46zcgeYYf0ZUrX6Ld39aA7lG2vnHAOOuMk/IHsYRoxEEf2GCJyLxh7foHlo4Ti8lOTJ95/qdYZPraJgN0mOQ/hh5RH8YU9+40gTwcM+EEME1BpY/eHhJW56SoiWaPCJysO6g8xEHX1WUc0Od+6fpprKdf1KBJaLFV2Ta7BQZvT3Aac5Qeh+7evL6BibakNxv53KJNEIMuf3Im+RZxkwls/RG4OL7Qt3VNtAuKbF19zOS3q1n+tYKbiKiqvhENEg57h+zGZA/reIUeV1mlPY59B3e+o/BUQISX/N3WCRzcA6rYhYPYp7J/kkfNnazhTwSxUQF1WiOrXHSBvRiIEx/fteGBTrzcDRydvpVEwPl3ogr08ea+wZl6q2MX2XDBkLGmpghvqut0HBzMkWuSiEScH4grY2pjILfbBE3Yx+onEZNsvmnbQq2Ib7mgAxHMK0b80Vjy9H7BOzXXnDlH8nEeUIeEHI/YNBZ+Yh9CcMI+/rrVjmydyY4rmogz9PgRWEfn6V0sePC3nvu6zf2VHkNBPwj0bnX9ANllOqPpFKuqx2itxH0KnCtvpk0yFgAOmcztC62FbCK3dhg7NvvCwnr8dzhv1ekBKDFZh8uGAaO+aMtcb8QLjzFkTcr4zRBEtx6HlMjtUJHJWcecV1wsrNpMCdHH/B/TcMz1Bz25n/DAgSNt5loOuRO0mZ6wfNkvnonZVN6oxHDD5/tPDXXjun0pg5PFyMYgdLqICF0rsPzF2rU6WPeMSkgpCDgso/PEUWaw7nsmx3jH0YHWTvbozA8I58eKB4VrEER+uvDE0Dnymf5MC6/UrgeOEWUyJbP6oDrKBOHKpaEmRcSfZ+mNrLv3M/45hNrTsHDwPyqjpI2WLOBipWO6UhaWnWcLJZ7Uf5J0rgnZ5CaGye+hc2/0WALMMvLXkIqcLdoYi6/DZgvhLpus9r7aWwuJO9oj4pJiTWit/k5x5PEwgXmnj1lUINgeuAMiuWDm4tZZYrOMkN45fOb6d/nexu2c01xEB32SId3l4olcFX8QXMXnoi6nnwv44iK0yxU5JC/k+LhYDLv4JrQ737ELyD5X3Tr28Yrz1t7k+nFs4Hq8siDJfyKjgCcXVif6uhUxmkjNK9sVXU36nLVo/W/QSobNX51tbbrm3ULHMoLHgIYdPCZDTfbj33Yr9S2xHt/mtQVCzlapz1O0meWPnIODv+YktwwOFYV3QVIIcDicXz0oPWhsVkLa7Fjg8G2vEr9BwNRnIYJCXEUEnczhnTdGkok+EQ8bniiOrgsWzhGgQctfmFD3TSWKSeLz9DhefVeBDhY5v4KxE6NvDWEpckFuh0U9obEoDODBk23U7ogFh/icvBxjdhNn5MGZtFyY9mhkJYNERqWc5obLmmkTrBt7sAVAbEWaPbDpVGvUT+MBbJGdN8e7YkF6+i/lHKHS5pSFFa+YCCV4k90Xggz3kMMe55XTyDvRb8MCIT2u7nUVSxuqNf78rZizp3PTtdn/SpDjM0+ZtOlesJoDcgGtvBjdYKfvmLwPPQjfxymPd/av+36LPyF3a0HLU2wmM860iN1qLSovmtyO+qFvFwpsybhZZhi2b7HbGgLwfaAb+Vz0xZ1HJOk6V7XOTdYdx9Vn6M2LffTDWfrIIeGajn/VLm9V+Iq+g/E9FhHZOFlKLYhIEfdTvDRbU63CpyyQZYp6nVj7Mk6vP7Y981QYWv169CKX7adX4pNEXEikoaQGewKI7OaIBDG/PEBA3EzkTgPRt2walI4Y5xHHaItBVHqsSKBQRuMSTk2ezIrlyWBNM6SjXfUkcmh2QsB1qsKNzuc/QVBmfqFJa1hEEPz9imiFalqY04RWeEyXkKsoUppIH8UXBnyyWjE2TG6DrUD6I3WzlkUadgPst2uLCb8suN5fW7wADbu8aREULyyH3tOUZBzQJqT+3gcmQ7OUDrKBIGeIHmAXWcazThXKaUefaK/sbucMTC4SujoUikwGydc41dTUbGXzTJMuNgzgK70cqaeZv7kzbdpxrDVv5W/opfwlMHXGO8vq9tg+TRRTeQxUtuptjedSnLGSPQYdS8QeScjxRSc4aMGX2CSY+F2D1IWLwpR0Aapbi+N8KLuZdBPXgTmKN24S+lJn1I+I827jmM9JP7WKcC520lOh5HXIrbcF12XQGoFjtPXpWnf01n4u9AynyvJ5HZvItP4oNs3RG/axveijNZabDQdgXiiqkeNmJ+zD+sKoNVEd2fKENYiErEP/gh+D504rY2b1g71p42LJmJmYGL4tz3LxDdf4sV3AjznIInFXwWedHjR/69tAB67ORLp14QQWcdoMcd5x1AMvkRCHHzAPbw7HviIjZSvGhpzU2/N4NbF9J+tyb3sIIgZ8xl5X/t4X8CLwSRSqgSrDj3CuhgDtcRBxmvd3RnCVgcM+xrvFBTiypq14GdtviwE1MCST7G5QMJ6UZbf1USbHQmexiRq9ij4AWe6DiMV8y5sd1J0GfLM/jw9OXW7SkDJek7sywhVNQDfJGt1oEfyo4p3eOwHUXPqVxbFLjPEaxyqrMx9XeGNe4KCNcjFZCL/lQAfqxkFG7i3GUTSVU08OrP4zWUSiFjDuUZTqurJOIp64MGR5m42E/a4t9IzuZmy5ItiFp3BnzL2EnSbiq1qweK10zhnMNm0MOthej+Ohh+WLg9l0Fe3cezfe+VaedB9+Zf7fJVzA4mLPJDWxn1k7pPeqBje76C5+oWm1ORIpgnItRkxy63pdx56fKI3rRXFneruI59TrOz5qb/q3LltDoBnLp11vuaBkMF/po1tLgj/amjiwiPPCmWOLJtOpbyI6MA+u88Y9gqLPvAFE7xEtAQUu0uXmcSXzhnS14Xiz9BK4c5a9dP5j5NuiBFPHCnKgDya0QjucsA7oyUhSsBCbLnfHvghoWSgHaLwceEw8Th1LzXzBIUKyB6TvQ9+pbcdec+u8UxY6JfOq8LP6M8WuL6DCfJQCbns6nxw5KUb/q6589zbVtf4MlrXZlOfzhmIQV/Lo9Gq0kh4jWydcrcenKKzWnb7lrvmUh1ObXNlSoXyXrJmRG5tYpAX5WQxDJVf0+WjLW/MF8iC18x/1wU5ygvumvPhnU4wP4E8JMEdWsw6CFHnbnVZrRgnsr02X2MXueNrxS0lFjCTshK3TRZ70mlipmONLvgLOX/cGI7of7Ry5KW1UMac45JyTDTiYx7yHQ93qYQnJeun5JTBZBEKXvi7zNu3VFtPgeZj5yuGCNgNBisnSwMRknEfBb/2vQPZvrogLy8FNgtNOdGIaJvZ4GeXKubDlYoLL1kbmyULEYzFJUBPR9gOBVeZsrRdxyOTnUvLlGoVvUvG0ggg8eKaeU5u0fsDWtDUccPIF/0ZMnRiHbfpB3qr/NQaAnHyuaIFpkyYiZTLLNp7gWx2X+LY49MWx21BA44DZdIhgkTX4sSZMKxPehn7xFJO0CfyYffU3rXckmHWasa9wYSIT8IPLHXvUPnHs0g473FeIUkvZOASA/R7aHOe/fcox5bz6nds4GtLklKorbU7iIndfttGMubcrItTaoeOrtoQTWUZljzpVPzzxlTAGryBmfJ5BlbjZ4lIQB7DiWsLQCChxRT2X3yajMuPjZWvo6xuq4kCjic93yM2Us+nurQjLDY6pfsnWbZknXsSGfcp5uMvE+TA0buXJ0UAKJkF5aPukXp3s1MChGQC56xWcW1CHgfYwzpupROpYp6VxEmAI1u5cLxqgtu9MPkA4tUxE8xwETE6TPcDQjYpwlity9rNjWvRFrmPlOLU/hOliYoGfIyga0OdKLc8aHe0Oh3D8Dyhx/iSCJ0xgsmW+cEBnJQP9PV/LN2H3Sesc/kFfNFn+23tXK9axacQ90KUr+mil8kLT1XVf2PfSTywe7dgvkKCTY1TEts2WSmd4OuTmYbXwyWbXhBICi/ERHfcwLcK4YTTn5ObultJdkmI7GVLkUhynOHX52Vc9zhIfoSFWkGHmPswIxq7LxRWCRjtapouf7JZnRCN2HIKj5EXiguMAT5v32PLC0OOMfIHlYPEuHEt7u+HV8dI3x3nZzQVyc1gfrmfxpf1k2wBuhr3Imca8xhFKmeonky5vo/wQsdQD9c0uS3ToDhRnm2/00WdtR1AOzoMZdi62CAB28wzz71T5P0dnETn8xpdUR/bCDO+29oUj6cpRlbKQMFcOYpOyeIicxYnQQFURiUmusGPybClZk0YVvvU/QEPkTWSfAOJ0XDQPPo568QAyNwXTxhtY+a4LhhbaDJOYfLs7CB/ZXCIKftAn43Dh2GzotZenzYzN9KFf5zciTCZJX8Q2mrdqfNPuKn5r06bLWcNmbV2NS/h8kjUtVCI0mZXGZWOc1hjgxBD8AepX5ULSOSf5LBXp5jHX87dpock0I6Qi0i720tT2LmTPJjtwapegGdmsdGyD/YxNLo0Nrpu0fZJl/qIRS4+niLQvezicVuLPVPgQPJs+OkeNQYfRGnSqvRGx8JYmVbnFn8rjWErMtXq17kjEEbmhOOaCHy+pFQeaIVp9guZhdsoYF02uAfHlt+ZnIvpiGOS3mSOP4Jmk4y6U27cR5W7xJ7tQFkkjs4NWrMMmLD9qX8JNIgebwgBqMFBykI17nfCFaX7EbyKKLwfqzWUMPwETneK9OoNNNOKUtco6IwAljtpqhp7FTsQ4ud2qRbe7yD83s3/MjXuUF7ioprlUUSBH7FekaSoPZmJahxjFi+ZokWxwio+kI2dZHFewuW1ZzgN7M8ZpJnJXT2hHlekSciKDHS17KO8VP3/t2k32xKSt6jK2h26xRrfIWDx/t1pXP9i9wVqAcXWQbbUXJszStje1qFHrzigSPOlP6RDyNQbVkB+gx8PbKlJ9HCA3hS9O1thx5mJ6qb8FngRK+3AOv+b41U1V3WBhYNCqC3JckW+2YZEbJkhJX1uv6GNB4budDBXfIEx3ANlPoNaorCQHknfQtYEXmWG6Sf2LPQhrskdbqo27cDnvt5hZMOsesXEsL55GK2eOnC0G31Mf02geuNvdc9SGyZpPYgxNsZ5yRHyjrTEHGusYNoJFTpdrHrNiR7q4FlZnXguraZ2rh3CJ9FDl2PBI9qEjQuNsGZFIbWgvfo6jbsSUWxPIC5/zXHIdmIBx53NjpVn6vOowWTRf/LT7auK1nON/eYejwQ1R8T+OjtiWfGN8+p/IvsD627Cmq5+vvu6naR9boRztZFyveSHPM25RSy0s6zD6h4o4XTc5TOQfm+q/APvtLW95y/9NVH9cVV9GI5zpxgAYUDuwmZk7ulHRkSfENiGnfgK2NNknWkER2kZ17SbUiWK8+MLqFkXXNUmNYwhusYCN3rdaU2O7aFkM3XgRbzQTtXvYWSsKXW7DHbPuV14tPQAVmsRSx7yasEuKDkSTva4Tmp12YNJOhG729yHAhzQbgxR9p80CmE/7uM4vFAQ+B1YAg7Z/jNTtwek2eQwo5ky2PQ0sAt5h/sJiTX1ynCbzhHmvbs7KQx9zQ5zipEzSkNEFM/qFSGByj5H2YrPLOU3DF9KWnVQmdw2BB7P2zsXWupDkmECs2ly8x2XPQQHlEDoWiS4kg95l8XnxGXewiC4sCyeBbnfqazZtBpRYUbpYtsj6RYLgVTDHP8Q2UlUMxyIvg52iIneaV8ca4/yU952Z5Z/uVi84fdKJpi7CaxGOz31db+1otn7e5wrZa5sa8OnRugBjDYabAs1ej2ldhXM+wGv02XwxiQl8eK7RcDfL7+ZJ629mIveV922MTRepcSHqRtZ5PAHf4QOtT+BV05fV9Mff/va3vwfdbiLysor+HRH5++iQPbtz1Mx/q63QLZKxWTjD4oUH5C4Vnh3kqr9MpERU7M4zt/t5l9m4dGgLU7cJJqDI49UEqsMOQb3d4EofgbiNalJsMvG+W6EOgN2rYfX38zTeEcXAluxWUZgGm1Nf9zewWpvucjj3XVjPPmjkQA62iiyCxW3+ibYhhJ/IwEN0Xjg39IkBIP5j1yH2C6DtPHfZ75DzBGUCm/d6xdX3DA/WyR//ixLeW7FBCWGps3ahk1mrdr6Ogy2nc7CHlat9k7M1tInfY7FzkdiJrhc1IW6Iz8cX8GCKUJwZmOUvZUzg+kDTfJ036hXwdlrnI0wbDKF6MdqjpNtpUHzSYLuOXsc93uzTGG/i32ujcpuGfTvjjmA56ezzHKXadWydHCp7GMsmLRzucQAJYLIfL+Wsu/BNNhnpx1tbm8KkioglYlHsLbW4O6L5ssNUsp4KcB70DWFLyQ3lOX28yd+/y/3vvPjii3nz7Kaqv3h7fPsxE/n7qvqLJiRwQNJHJrfAxCfaCdmjdVWjTVEXG2CJK8DBTJHtmvO8mexd2o/4TRjaV5LU/3WlKKTW103wxutCr8RielsYuyndmCXJNhpaJQb7dhs6Nzizj2DMyQI8xDu4uWOYmGp8unIMmJEkAhKcC5Q4pvHZsJDxuAATC+NaVbtXkzzjDTKZdOKVTsuB37UtXF8NnwOpiudhWjvsVBURf8j+ISj1GxEmGB7a50mM+g3mtPKpSrjvpr4JU6Mc8ObIZGeOZuchWymnTo/xGt23Cb4hbTBLx7bsYDN7JWtK3ISr3EEEx5DbqO+lLYGTpl4XKgfmC59PlwWrNTadxw2styjGE/u8Dnf9EWf4wOHc8saAk50BFznH/EFB0C8uEPv+ytDYntmr8E4bCTHBNXMzL9e1weclcbhBEc8JdnmJmBOEYxxKLO7MT/A7oZs2x9BcmtQV5DyHdsQAp6QczSruk/QlE4GJuWGLvYncRH9Rzf7+7Xb7sXe84x2/CNJNROSzPuuzPvBI5X1i8nOrT5fi0Hhp9iZMgulq8I+hdf6rXju6nOEW50MYBqVwYalXB2Kc9ODPm97UfyVg9ybSXwuOUCbBQJjQimYx7Foq1oPlOnPDuWHOkOLPBVTWhCWDGqKX5uNk0XBVTxMpVPmA3vX2uG/QfKlNJxQbFuexz1gvK3ZGLBkjEsbqjjoazhO/C5li4k0DoaDfeV6YJjL3z4uN5xn4iRh8PDjdiTjVWIk9baZm1Dsu2ZeTFeCx6mH3hi3GtnfGIpSKqB62WmmAfMOPdB9yfghHjZOFfY053VYRue0bitMCaUKxo7YeE4Sry51Q+mLD8kC3o9y+6aRYfjyYenXNli87rvWa/4kqjVgRq+fdk9nla9TFlB9BPiQ2GTPLw2BbcBAbHxa5xkg4MdAk/MGaudfK+rQEXZKHnrVLvxjRqcw7hYY/I0XNeQG2B8fZwkfUDtENYynqr/sSbT8nt9v3/er7/QPcHo806cceify8qf0vKvpRt61ZGFiBr+2OsXGASzlyHwh+ZVpb+E1oA8RAEqfAJEYaMrye1ejwjwb2zojhNingFBfZXehw27ucpTPcuGheDOf+U7fEcGWmBpvzIDHHc1+09WRvwf4Dvpv8fg5+D/ZGy/5tsVlye6cB3C/e14dyFVZfLjH1l0NPTA4SNdUBOpXWXncXyEW9wfPm9cS5KMet3krO6Gq32BR3DNybwc7DhqlujKq9XApjEAOjviukLJqao7aMxu9Wq4FlyszQP3lgmehyir3YwZ/Y5Jw2ni7+kDOOMx1r3IGRMMsXT8n68Gwu3rzzFf7BlBIvMm+zQTXrbqNJbDgk9DNNh0ksUL4w0NnI1g2XH+EjBlETpQ0Lc/UhD8P27p+kOUxox/HoUVk/KD9ismapQX4aGrRid2lg0G6msxm19dgmDt+ulJWXbTytYNX84DEglXx0ILuEjJutP8kkKnWsaLQVOYvsPLE55HCZ1x7W/QwH4ogv4EiNhyCfKjFeqr9+Ih9Vkf/FzH7+3/2Wb/kYUdav3b7+LW/5+4/k8ffc1f6WiDzv9nfLw0g8mLlhfSW4t0+YWqeaEk5cjYFD0TBJzJwcbK7YBxS+VrzavRmZbu3kw7gA0um83DuuTJ1280J+TjB1e0Rge/CiQIecWvwwYTb3STEmp+xng23o3xZ0wOjfEcY5Xjj6yqxxwrHpk9tJzqYwcJqIFHbinImEKc6JodaYv96BmqyInB1oJ2h8g43hV9a+6B5tPqhx/UumRVuPXR9bOeHR8RbHKUZ5EN9aq+Ql95A7oPtZUhM0pWNTbzhtiiTnAO9wko/3/ILM6uL6IJ77Y/OD/n2xsbkOnH8Z27+U00SM81huiLCQNd/VzP+GZ6Bb0ePa44KfgBAR0fXwrUiMgPyZh7AD9qHGJmCekxreRedjXvipfYZz5PiH3eJ/d9mUlCUtOYp81KdPl2yhHzsvjKuW9dqe4prtUVDW50b4Qeciy36P/eqTGwguf9LLP6ePj+rL2Emi/+u5Qx52Xl89b3QM23isY+BMcRDBn4JyFB0qIvgCROvrevyuJNbw9Dd+Cga+WOu/9PlmzXzuMN9z6d+6PXr0PW9605v+P6uHo4VF5KMf/ehve/Lyk28Xkd9r9/tndXoMEzEo6QGAIRbSDb1o9yl1D5hBRscuU5wpRG08FnSfFHenknWYtHIQafRtLKvvOkOhwo8sPPASPJkkNwZHcuMtYmmQC/ZBaI/fal9xYHoWbvgPmRn3lRjPFNmUOMRWmvzN3lDizdVnpt/D+a0/bMSQaHTP3zkeiGWXu04PfZtcxKrQ5GQP0TtNnGZkE8ff3/Y4ct+uk2sqY6TeaNS3L7aMXhvZ7sTaGDJRr0y/lw3FbmuvKX+faP6SOtCciSAC/EsmWXdcmlwTv8ouqujEPxoiYpt3Mr0Rq2Jz/JFlwGiixnXv5ovIWGeLbzmJTUiqhE3RffMz73pFW+m4mLMOaSOtcc70jEVH2L/lD/3F69HEv5zj8qCUuqjrVI6trb6LccnedEoNMuiIg5lPYmlC709yOzn9lE6ofTlOZU5sMtOGyZfAPGajzcKn6JeyTcp8WWPU5EEU4pR3Kpeh6Yt4/+5PIjpOFqePOO2hJ7k9DiUGvWOnE2DvBug5zLPcb7TJLOZXCWEebTP6Ziz0Tv2zPWP1ooj86O12+y+/6Zu+6b9rnCJtwysiIm9605v+O7vpj4jKB3tAxMeMCK4EthjUBm38GzHeshczbR3W16ClXe2oLCG9m9Huf4TBiMHGSEJRCL9tij6BirjEKUXVKgeP27rHt2ra9YI1J1eiZazanYYUX/QsDo2Nk9uhSGYFLRxTBCUfEuUgEDDxDZvAyQeGT+y9tcLjucPbDpOK7OZmfPE+CX1q1EjxxPdxgW2NY2ubtFcMCpxdBVGl1EXendF8OUJl/+gGtQD6KK7LprUZrae8Tq7UeWyv4jzX1Xuf+5rgflz3D8e8VD9qcG68SSuUfgA/1xyzFmLxj4oIJvHc0iS8gVkMd9qGWJisAe3f4PV6VCkvix/2US3lIjkpaLCQYaHE4l+h94u9g78cKyC/ESqnfou5WJsfAa8mt0XcWJqvl794HybFAViPmDWPDzUjod4VL578KD5Kh31Za8GiA85bPK9QXz8wuopN8VFgzxmAu/0q0ZHjRDa1MMf5vpYuLG7WjVaNdkbGxLyiPYXhE91lLn1YxhKQOVPVD95utx85bdJk2qiJiKjZfy93+UkxeT7bRHLapPmqoaza/kIFBBuNkpzvSid8DLqI3BB07sccrY9QggaSm6tY1CaOtTnp9HW+F5gJxt9s0xWSvfsfjvdB38ONhtKditkaH06TOux8SgHTRAq/swfJXMibwx6rTk7K3tnI72xoSImte/Y7F+tFuyP1M7TGk7F4G3GagDoLnU+yF7qglQdEw0aua9TnYaIUQItzQMNGNPWxkZj8BmxdVABapo86JuHXCXWcX3BekKTpQW0bjtvGpPjWNiw4BAv/BY2tX0MdUzQHHeoO0J53asAim7WSji1jecHz98NGGnRc+B3ynLwRGy06j1VTTRvkXgKxa7Hy43n+SWDThL6ZPMlZDHTAXTnP89AIfzoVRc80pOfQyXFFAyF4KhsFlOubWeL8qtZ6B5SaVQ0V4VSX66f+mrHv4BpCTYM2PEu2cuJ1xv7k2kBIWvqwGLgGi07aj+wMLmhzhTv4+/Mq8pP3+/2/L3wN40btmWee+dnXP9K/qLfb376JvihwIDJhEbeHsYIk5Lz/BhvaCC14BalvH2ymNbCCDUSR13utrGTIB5bkabTURxND0vIu3nA5s9lVkXnsCycjdOFBSMbRD6GFsfljGgNE9i8/sK01m8OgwjGLyBgHqdnGg+ZgdmCPh8t6oLPB7q1ZZJg0EsjhiQ7sZm25swfkoFaveK5oAjoNygfYR5QxJBCyR8+Qtzgp6S4ne3zzPMfo6pCsw5iS9BGTcLcqEDyMKUVnrM5s+1brD6D3FdntQlNvVgujEZvjRgCMranoO3ivRKI56ZX4mIthxIY18TOPqG8e68K6DiYKeNimg30qESecN119zh39bBehBXTHcaMBiCHOsbmQg90q5XKE5Z5UOHKBKU1C6WeZm6+Usxmeud1P72Dd1pQTG/suN8brGAfjdWy/6ZE4rId9TQKwjlmERqXmx2BP+JL1T7zlz92RCl9jPXMZi6Cb9YGwWweLVfRFE/nbt0eP/uIf/IN/8GcbW8G4URMRef2b3/yzetPvvqv8mIh8RET8lrkOmhN092ScSzMdniCilKLZ+nGeWsfoa9yOiQPBY+YDMkETpiIpV/+NfuULzg8FObWJUHYNJ7XYGFOxe+po8oz2FbI9rhKx9TgegonzzMEeybSH/jFXeLOrxyTD+gewL6OM3pa8E4VR6SrNlrQt6HHug3WPgR/kS4HanjNgyidDzY2beM6T8VNA/WWUAT898Ymsl6lPAyY8kahN7jONOVkp6eLTd/W+HItXYpMI6Sgm7J3L/KKHQoMc3kRwvOiuFDDlMcF89Jpt6jzubp2Eu9zkoU8rcpxKyDnYkhd9pzqX2n/NI8gR8ZEL/S6rtbCmT80uRSxV3Zc9Xed+tcnbh/669qWrjftjDKefsV4edIg4D8vkze81ENhgpdhyTfV5xYS/SbvfMT0Cw5wdwWYIbREMo82h59MZ7qS79BGfL5Wft4x0LRmeO9SDj2f/yFSWChfJsQjxGZDATXV0mFv4y1qGOEcMsZJm+ce76vpzVcBWSyaiqh8xlR979OjRd3/jN37j5SZNrjZqqnp/85vf/NO3R7fvVJUfFpFn8U3QtdwDKzLpW2UIh2oEu/2ZIZySjLIolI6syI+b6pWknTXBiWC42QMFTfc6GQIm57/1+RDKZEcwJbvj20S9IPgfIwdO8zLPcFUzxMVxmPyAmCA8R5Ux+yF3lEaIH0WPjTvYZHRZ/srmVE4WpTVoPf4tHn5aO5eJxyMV+1VqZP51ONpwBb4C75jK5lRLC+GR1YmJqYqDjZDR2MhzJ4K5L3kaiyh6jDIDWJCB7qNPpHzOY2f3seZ7nXCXXhec85OdgEl1qNvLKLTd1IpDDQuF32jQbuM3V0KPv8UCW8ZrHtZn2JAD5FCDncedHeYi0POY5bZ2bRsNjQ2x9nzY8kPsPsdFV50ZLeJ9c3gFjecwtzkN9C6qnzegLFB28E9yPj2BlVLcsnmt0d0m6Ox/irAIIZJatUejjX/9gTeYnLP0J3YNqAeuE+8T/ck+pd2J8zlDCXnYhT4iF+ML/eOPyxt4ySbu2v90FaB5Ibh/oiXwGT0jdsDtdrPbTZ8VkR9+9OjRd7773e/+aVXd/gBOx3GjJq7w/pa3vOWn5Xb786L6Q3eRD6rc8Owcc8Y7zOZQhrMmWY2npSZ8X+eF7TQrRSM2CQPKoCIYizzcnZIM/A7DZN3o3rbrY2ByQCyR+D2WB7QJELacellMUiptw9rj3ATkoJtD0CbLObN7vVQvLRqmviJBywFPfS/sqqiS09+hrwqzr8lDQh9PpNkWPGyPLxxOKBMA69zsP/xuFNlQZVFMMpCD2Et4pymWyP1dawjBxjo5wst+mgw7VLbLPYTbxJ8Fu0/9AhekbbxO+tnePDf63aU4NwlbadKWlhM5bEYA3wAfFk7aLLECpfOTaH6EZIKqbl8cEFhi/g5bVNcAzFiQSczLUHxchfM4uFFf1PRgikj0yTFEMnrdgy5xQ4D7QZmK+Dfw9pCKYIOPzUTYhijm7BX+pHqyPX0oxVDnVMMLdo9gI38S2OxMtAt42cSGijdGiyP947jn2Ah9J7Wc06zDtqFN+fi242We3cmJXh5/6HHE3V6rfKIR97hT53+3M0AbstVGMYo6yDEN/3oMY73UmHM15IjhG9579JBLxUflUGAiqmpm9kER+aFHjx79+afdpMlDGzXgmWee+bnbo9v3iulfN7Fnla+9i61KRQt3I2g4QlCImoNAnAE9qwRuGUA78o6pmWsO6Rz5uGBbuydQq7AAkjvSolhwLMkfUwwC1dzlAc1XsnhP9taPC/QqTnKIQaIo2dEXs0QKnaWXb1QRctBazW9hRaxae/pMMdtwaF8+eA7Y7X5HC5MvLxrzZLSOfVLzBu7nHffnugp4smoxgd7JvjNS+RYOUyd3GXlaZrAZOtiQcSKNsN9PXGjvx+C+G99Bn5+snDI0XnreGMvv5vMwRyxfVnxHoBZarLn20/7hmdS9geCLw+abSU5OqR+LWm6Or2JRdNJPqNBi6BeFji0/LXylIe5W9DGEY38bBAry4r9dxo2K/GQcT7JXYeQyJjUHGj6eaiFKN9qWtWxRC9+IQ3PABqkVpvsPiCd4/um22Vnu1hpm8OZP23yx1qnQx7GMc6Elj4FTQ1wP2C4iop6vYCIiUfPIaaGF3LR/Ndb3hsx/8dVEb2pm9qyI/PDtdvved7/73flXoJ4GT7VRExF5y1ve8tP6SL9XRH9ExP6uqvov5x4M5kqrgTZKmyMHOjIfYsfYnPTJGlnXKXIoAsm6JtkmwxK2bN4pXKiTQBSJR4H7G9kUiitS3LAhCnaNYwZ41wR9ha50AMkoA+Qh0LND2c18UvGJoxrHskez0+EdT2XXoW9tpzsG5j/E6RvqnOsqTOIjgWoAs/rHBDW/fWFi1PbZMUwQ6+7Ajn6nKVr9raw+D8N7xQ96knebD/184mlsA7nArP3W2VOgyjyfdd2oI+sb6LYgiR6DHsRhkyXR5/RMy+oavE0C09DUbIxRf2GbJLGLG12ybo+P3d4XrMDleKSOuGhTWz/1wn1NMF+s80XEuKIHxaX/PqbX+dmeSXCr2d7XhjZCiWOfgoeLhmi+hErNRYkRYqAHP80NnnTkDYQW86CuRpxOQgg5H6mfCcmzaIKYTRTZkLQWP7/AcMayXvAdM7R1eeHrNB85Qm5vhi8hb4sx5SVkf0xE/q6q/oiI/B/f/e53/3Tt8DA2Gx7Cxz784V/38u32BU+ePPmzZvY70J62Wbx04wENnph0mM3i+bdpN1y4oQOJj5jl4ti6W9NZaMwcVwesP49aXxPPkEncXyQy1N3Ff527++P2rN18tse7KgbbojlB5I7bzLEhKCwRh76opPvuYImFhj3ZT9hpx2X8uIJOPjUelh89/L1PYqxbvC+fSh4PsYq+bs++KZKwE3oZ6VO2L9t8o/aA3lN7yEU9lDhFzrdBH7pMVt6nPOCpHO01TPuvXocMz71ts5Y5sbQJ7EVqKb41dmiMNpCYh2W3vaJFjef5qR/TpNrDIEmFfuqLPHsNNl+mfW2vM6HaZxr3tXhh8TUFc3yDt9c22pfxi9hSG42rLtLUnkP2KWi9hg2bgu5b8GU/2BVy+xiY4ixUllzDPn73GMMWfheJj6tS/xRL0o/2B+Lo48aZIGPFj3xhP1Jm5ZvycxyzyPtQhzmPkwqmCdlJ4XC6tLx0+ZYvm2yR1dhWJrJp3aUqsPAp52yOo9OyxqTGOLqN8Uu5R/qQN6KlPz3nMcf2+AWDv62W/9ejR4/+zJMnT/7xN3/zN/+D1fz0eOo7asAbP/uz/4GZ/ZSI/M+q+gLa3Q+PmJY7Pux9/LDiMdE1iS3VIYv/rYF02qSJgDbsAkSKfX2TtrC3qazs7VRYOMvDYloigyuL+AsJ+HMbBXDBJAu3kUVC/tSOW8K+YSNaDMzpjkvXcY24BU1ydLCnIB5IrjXTQIRN1LGTQ6XaI2SP+3YQkIposELUqYvGv04grDjvyVPcvTvId8zSOX4WM5fKYp/qcENTfG0He7AzessKxuaxSU5opS2w8U8YGEyk3CvImKTAlc/CABDNOAbxsWOeYzHrYWV5cay88PUuTb82/r6osZxxk0aB68N5GoeQr/lCiHOuA9iGOxYS89Sy12vNzEp+sx9NwxlKrnnMe7jbEc0MyLF2N0ol7u5NnSRkGsWnxFKKtjoOd4HZF0FuOS40PyGHVxO/9/5XY7aPTTWXi02EhFiVaj7PE+iTMNmfaSS62+MNCFe3WWiN32joJCJCm0lv9UqEz9UsWuva/GgUxiBXaM8D2RzubHYy+jqcG3OP5YoIQTWfp7upvqCq//PrX//6n/p4N2ny8WzUxD8G/cCjR4++R0R+RESe0xu2SRqeD0WeVeODpdeDY0nh93pGI52DHoGbMN/kdSDkEkU+2TUl0vlcctebyTPbiiTpw8cdpiGRbgfv8FbTvUL0ouhMYxBjM9X4Jr833PbfWWN9awM+GzHpTQz6q02njheAvmHCW3ZXGnQqXnqc0NTs5dPBlcQ2LgJXrqpgc4ezAWFwyu/7kaEOF+Ju2lQ8F92WrtUPIno9FVsMTm2urv5toQct+0oVmmPQ4mNnnC4WBy1iIgNDszvtCcZS7+GD4O0QYyM1PS6OsTHBYaj9h4s5gomI0Z8zmHjhQt6tHazpf7Ozy+k5xyau83Ft8lzAKQVjuWAnIs+1vVxdZG1knYIFv9kbFD+AD0UM+R+HTC4biQkqgjs33CSpF0qJATk5wDelfiRkD+dR4AeLgf24qBxoiPFGF4kaDw580SgRPmLjrrFp4yU7x3B7FECx7g2x4Js/1CkPw07dr1uiKOqeJOuU2bqfIiJ0o2XVg9cmb6K3rr4JNRV5zkR+5LE9/p6v+7qv+0BneyX4uDZq8W3Qn7rdbn9OVX9QTD4Yf1i0OMcw8WggwXtEFzrJz21R+gQeryZ1EweAvgluupDsjvJtE8bV1RuSP8QCQehScyGy6Dd0FYlCGGgWmzGRqXoeGPjQ2fhYT14pg7ZIfh6Dr9vGg6gPCLXVb6LR2a5QPFZgm8iyTd0ExLoDFxKDr903Bg/mCWi1Q/7cxb0uhGUPxBW3KpfjOY3JBfV/PQEH5EQXIk/dQmoCFiQ/7soQiqw4NlpUuG8Bahcvhzig/RSNcaxHnQyUhInbwGFOM8j2HOMXYHvV/GH4HstQWKplEss5GvWGcAvfLY4zL3EBK7BL/eP/u7i/cPhUAxK0nlc2xXPmnph5oJVsLjXdNkU49gvfdkkefX3usdBRDYXOzfze0M/DAw/JQ79H5p0jfCKdBTHMczRvghaSFu8Qnl0Od3uijsdaEBhIMab4q3jiOBR8nD8HQe++aafmOO76/bne2ubtwRvrocUc5//wbVMXunU3ikALhuWfpJzrLOPUXBLlGxbtriBObjcTkQ+K6g/ebrc/9w3f/A0/9bTf7jzh49qoAc8888zPPXr06HvN7K+ryLOqelwVPQg+mI4gr/dioCw3pMSWDG6egMIpVtFEvfqdJEBlpeOsTwrAVJDABWnp2oMTDKguagugqdsKeJH5QBwniGGf1Lk22wjO2+J04AVAR+2ge+1Gv+VTWlEyu5KycDS/1KJfc66ceiI2HuH+u9oEQs0wwWKz4OY746DKEXJ6XwlbMobDpmjhwqGI1xFzF8dURwx3etVmX8DjZBsv0Y9PEzFxs6tPY75KyOw7rfjXY9dNwkJSmuppwRVNhphb68NkHI9+hl1bDIFsdw04zYsJiiVk3PLnN0aNx7xVm1vfe/zBdvFnfi02PzbEossVmesbZ4b8maTDkOkurkSXcCRo7kF70dV+Y86bCOukm15ikrKp8SkwxSP97M08xjaijGN2+eYrZVbJVld+4eCbin5Hdd0RK/Mv0fOIZJpGrLOP5+iurk3Mbc55l+1BXiNX/Pt3qS02ad0mC28naKyR/fEkNRFVNbvbs2r21z+eb3ee8Alt1CS+Dfro0aPvFdG/YWbPeyTgYHV0nW1ZcnhW/LCRIkc74Sxt4bhARXAldv6R9KTxUROximkwKFBu7rYi2BpLyz7pS9DyCgLFW+iI3y4XmAd1wBX01uxTupKa7GEX6lW2uxUKNyPuTGUx3WTDP5WDstCHwy4ggIHYyYV/8qefkz37BDSjz4euRmvNCG3AHgrGJwAXUWv8af2QHi+C9Y83IPfCZpVFL2ngRaHlRMlei5civghq+eN+OG2+b/UAULuFDZmmOMC5zzMLVcUhGCLVGerEIexxSuDCDafNL8PGNIRljEPGJr/5zvXOerueLtexbNvjSz8A1eMIvhOG+QvILcaJhe7qVB9OHRzFLfV/2BemnDZXL1TZqZ/iM/YLBairlIIT6LuQoUUft1LOWhxygw0a0T3HVn5keWEJG8nh7ziH8kVQ0GDbtpnqfSVqPHLRZWvU8Y7o01vjUyXf+PeJRkREnleVv2Gq3/vxfLvzhE94oyZ+Z+1nbjf9iyLyYyLyosTV0Ba1PHXvVNamd7XvnhecBiKCN2KWqbEzPtEX9oRY7MQFt+yJBjN464EBtRr4ZCEL70BXgTK3qRe9xsvWHXyHGPkgE7d64un2U9iK7z2UYQsG/kSXuOJl+RC/xS0AmVfwWNGCgHaa4E5YtMMMy4tUp50AOSfdmi8inLIHfI0QzjIJOcE0IBa9Xk+4ognoUUsdasvYvlHeLXt6ZN8cz08n7SFfTCLPyFnwT/E+yoI5J3rDKAcLP53vM8+w6BB5kovFq8w7IaPcPcHGACy76gK/40Dn2yK5xlVpxuaxAS2dwj5ZvsQ56TTxeKE2cw4Af48bYdsMDOwpJ94t2zJixE3ovibb4h97YvMx+E3k7Jsyur7A0jHTxRAHS27ty+Ja+NzjTdRq2HyKvj2OQdyPeI3b9CwcSSa56Sx1EMA8ObVrPN4FHzPGqi+KyI/dbre/+E3f9E0/U3t+YvikbNTE76z9/OPHj/8zFf1vROSjc4BWIvGGddQni8JVsOj+uvHktwcnmMiJNmSbB7fTa89Fp6tRZsliW5NVsImEtGmDqLKKp5Hax5Emgm8IUisoJiJ3ur+GdpHNlTqB0mKQ/XgS78oISaIBgPPVrQug806SfRLGKdsWCjf0ASatv4qMm9YqW4thGaYwBjpS7qCzIAX4JfeufXRFJO0ZgPzBF+LrfTS+9duBOirxpr4P+kXIesIG4GR3oCyCiCn7Q2BZ1v0LMWsjWo0uZ80fnmxFnG5a+Uwe+O228JlPC4bYrqaNe4s5ODbOC5t6jHousOi46U5kvYpzk7XArylPJC6wtkWW0eKymukj73jH76Y5Pd5TGdoHYQH/yDSY+/PDsdCUC5WL+uxxACb+rQl9NfROcz3CyfHpa+AUT6DFtduloQP/FmExli4wUV1wmkRjcn1EHF3i0Nra7Ef1OTcHG7wORWJ9K3YejsOWRSJ/DvGyIT4i2E26z9tcYiKyfXwLcvw8R/FdPioi/42I/Gff+I3f+PO9zyeKT9pGTVXtzW9+808/evz4T6jpj6jqv1S9/aLqGn79drYgJtQ8BRXnKiu+PSfo0tsFd74IvFhh4LJe8Gse+04MOlbx+rYedm1oD6/6pOZ6pjsbrioeEG7kLAwTEXxxooZynZt/883gF/nSY1EmDNDpeaf08wEobGybR4v4uw1dDk+m/fIsWhEvP6PXaDvYBjv877VVHsj0k0Lqp6UBh9l3UO3xmwRRf/HJe2CZ2wY9id6Bznuup02aiPfRVhy9L6PYc7HYyVBvDFUV5T/oR7Ln6Cz0Ws7DFeQC3gSMMIxPNwCy8x1j8uBrr7GKqtzHFLfsxm0xfSCWMkjBRuwSWjvWuWnvu9klkhM4xrqEbm+cbe/P96wx6Y22Dh+M1Yj+vKf6hMBj4EoSbPNcrXkeddcyWs6yho3rYgpcqxsIha7D3PZK0H3M8y5a/R9uIFicC3ITcaPmMkY0/BXv7RcA5A/aXW7LPcVhqi+LTTY7s+opaEFmf3HX6xab9lqDmjVi1p7zV3FJsRbvfUOPf0JhqvohU/2RR48e/Yn4s1A97J8whrB84nj++ee/5MmTJ18pJr9LzL5aRN6UAUWRD670q+t6uBp4oFg4gcBNyP4D2dDZzAdkk+GLKishWhSwRtI7TjZlMVq1CRMdrgt7ulc/2X/sNvS5mbuva/LYv13Der2htT9kL1fRvVvl8DiHhaeYDPLXCfoT4FPTaUFDPISfPQETNpRX9iKOjWX5Eiy0QDltsJX9iVhPeRDZbXoovpmHK50y0wtYdvgx+WPQifNWU+znGAehmaflHHnpMgHY0+NnyGc+P9JsPujL2B1sLrFHc9A32rHfPp47fYqBQGXEYrJ1ikMen/JCyAV4kM80gS3dZ1l+d91AGRukC35PerXwnW0S1msxh9/Xz3CEZamDf4C82CvmvyHW6jXPevsQZ6U71tDfa6LnTyJ/GUqi7TM8I56Vig5sjzeg77qol1CZP6YVeve+4RNiDh9VRe/VKosNtlqEPz5FsiiV4i/6xJ3P3KT2OEmtMxMRxY8Vg86ATd0P2C3hU8uZQKSKPz+N3EGUxV30QW70tbvYB2+32w8/fvz4v3jXu971Sb+TBnzS7qgxnnnmmZ9/61vf+n/Wm/6AqP4LVfWsm/8Q3BboRKSuMXicNI+YvFpngHZKpAgJaYMxwSOpNftVz07sxTmjMmVRP3QlTBM5A4Nmu8tEp5PUNelVwTwZRks92+i7bsRBbadJRM5w8EqBtJzdzQEpXQUU7yYlLI2jtiLc3xCHRZt/V0lxZUYbuxHdH+I9yTVtV+CohQAm2h3kpOLYZ13L+O3fasMpL8gFli8V0Zk0FVq2DUOO4zt5kna1xE05A6aFBMh2D4SI+Z1qNCv5kGNvwhj3pwP33GxtddRD7ncI1/kJmGuK/KinqzsdQwYLUO+ITRknp65rPV51MOp21HisHYKGHGU/4vEYmcZGGtWgkn0A42mS6qGvH94vqEMqYEO+J2HXucFW3q7iI1RD2Ej5CXPsUIEdcR5+mEZMKIY5bUTQEXs7+OZ1sYxeMuMTmc0f781qFslPti4SeQ3KNAQ19IrERjD8Xbzeu+gDRcXuIh9U1b8uIt/7qdykyadqowbcbrefVrH/p5l9OJPeJrqCwwZEpDJ3nkzjJjACnyHfWbzIwFVRvr2yk7cJZy+wAw78S54vCgVcaZ1E/zzGjZ6Dw7lHM1PITl0xmhfIxLSzGVsWlrx9ZZ4GiFCfHj/G8teRhxwsCX8nOXM5bWCeFNufjwnCPAk5uqts4qlPR6Q3T0r5Dnl1QJNxUETw/dOIT88FaqLHeTHES1MLVhXZfjup0MgaRtrEbXzKsy+aWMfBHkbqRw1oyG3zE0cMbPWg4pQC9tsgF41Uh0aLYKLL7Od7w4AhCU0P9Na6fhrZayz22LOCTut56efAVntdR0BBQoCZhg1cA2xyegBtOPcPx3zljsZaj3WdyGOR9Q1vCEc/fYrYEnmLQYKU9dAMtVzAzCDSmrTpVIk7knHe61R84+T/UT7wriq36NzCJ0rPinWZIsuXbtPpJooELbZhvtwKCed8sKEgm4mofvim8iOq+pc+md/uPOFTulF75plnfub2+PH3iOqPiciL7u+K+AphDWYftAsryccoDlhJ8IRzPooNTVRJfMkktZEJvVCcttu3WnqHC2CiFH/hhRd+qOH3jSpSi1aPGYYXGow7ZwyYHqd4TxlMixitnO5S06mOrid0Q4LKLI6BuwqT+mN/CnRPX7dyxbYuroXRBj1dUOOfujwEq+nbcLz7JUKBXYasMOxBuOvQvuGsz22ZH9bd4hfAgt+BTUQiZ944HWQBtZ+Iif+eVwtFwWDC9uecNOxicPg7Dbqgchsvw2Y5BVLfbjIWxhN4E9LHNhbWIrjZcbjsc7nNJ/S7iq20RRcbG1K/xaGfTw6bWX60n2uAlfB6PYcijloehy0FYS9WJvhsiEEbc64nTi4KU+Uc24VuDMP7Fo6HxCXgb3TQ3JwUrhE01zM3Lso04iLdNvFy7rk0aW3bMS4oqT2AOSZ5ChE5M1H66x1VV5w0u256e1FEfuyxve57Ph2bNPlUb9QkPgZ9LI//vIr+pP90R4XHJwoc9VFZvM3Eg7qHXEydkueFyi3+jrNeLjk5RILWK2Q3ySjg0eJlMyPHZkzsTF38kzzcfTARqX8hYHFsa9QCYnT50XONDYrDNWoKz6Jtm8UTlss7V06aPp7WgMGXJ1J2xIWuzA9Z2RGLBvjLgiFDwECffr95GbS1cw3POaT8twdqtcR1tYN2hSJnaGPMd9b8Iz3rP56t8evd/Zk5NjHzxrth0HrDgqrX0zYJQ7h6rSYJC0Bu1Kvs9FtqP3kgftOCjO6WL3TeXFKMk+5r0wkb0k5m730JedUf5z7XEXr5xomJj7ctvgPy0wbYCL6yoO5fFJLmR49zHWdt3NoibHrhp84Xnh2Qa0a/ccX0QYbBPRCwqcq7K73HQvcTjmT9tO4ac8MucbdMIy7w5Wkwj3Ub1xgu7hxThBwPli8V5FiZs6S50mrFY4qT9tMtkTs5+GL8PFvwuN56hdb7rjpo6xYQsd6ezRW3kWOXtav6oon95GN7/Off9U2f2o87GZ/yjZqIyJvf+uaffqSP/4So/g0V+ZDqrdZDIOPcA5o0HraIsjP7VOa0nmuVtcnYsSYgSkZK3UZcHvvbTTUKphYS3ntxYNCabHUmCltVRGKXn8UXdzF8qzqOeu+v+8eT0KfDBi99Rvhu3mDx6893jnPwepusKw62/YC6+V3QnpYUTVdgJm59yCgxVB6QDbpMl66bTw7dN2M7Wj+LmK2zOOJJq/lXeKJvV8sTUK+nikVEjJISC1jPv8OfHVXbp4Osi94W8MMI9CS6IfsOvFCDBfN0e1DzZYlB1U+XISV+TJC9ZjUWSRwn+l07wqaRFkETaZvBao9AD4Wv18WgIRAXIAeyavyQdzZUukjEmMdxq5vsT/Va7I8H97tPc50RtNqjVv9upMY3da3Z8zToulXEN2I57zrdKNZqVAt4Aw0fbx5cMrhj8e1i/CMolTRIJt6xjFOKy3FeW5WSejfOpxiOSpuX1T98bS6kLYgtTtn2VkcM5AAdR/rQLvCS9GWNhk2wGLHYMLVprHW3w139fiEd3+4Ukb/xOnndn3jnu9/5abmTBuwz86cAqnp/y9ve8j8+evzou0zlB0XsQxtPBHOKqeRgWNWHFGUwcfXXg97PA9msK9FZgzy5Qbf2ERVvJiGtWq728GDpphXeeLiRC68MqmEQ+0S0Fx4Gsl+X1E1eTiARANZ3i8nLYsLPPs3y1aVuWGvzmgAKCU08g3WQybADdl9hTWCVM1JzmSDvW+3drSeEjRrHkIuJBX3xMxFddoJ4J46eWwlbJz9K7Rw3aQ8g/q5dV5u1iAuVabGYzVroQyoCqBL1QOgTcBkLsvMzuK+1GCI/iZgPmL5o1cNSgxf6XSgXSMfQ12Lhi3HR/Rc5yXKANNwTbqhCtvrijUWnSbgW9jFdZf+TTsIXMrbchnyQmEV67tsCypjqlAG6yvrJBcjyd1cEGuMqju7nrtnQWuJCfqpv/jpP0p4CpZaZgJLTRjCfozUuyDs6e+0bp/Fe/yB7IB6/2aEieEYtxn0dw+e8mvpY0MhN8Zmee7MeD9y5m/YGFmvsfX5OViIHSbvbh0TkBx8/fvxd7/oD7/ofP9G/3flKMcf0U4Rnnnnm51X1vWL6d1X1uf57I+ehcEK7tT9J4CRQFWYzMkzT81rQ/F1LW0WWCZGXTXOfMhG04nQb93594ph+pkHhSyOpsN/75iQLeNigCgaU2W5sxzYrNNQ9ojelveeBKrC754FV9b5xngOVuynx936BtGVQN3aJNRXHKf4U6/bFjFIPcZxNVC/TUgR/dkrFQ5N/j7+KiMYDWxdZTeUbz2nTaRBev3QBPycfReZc9HOvj049x09p4tdc2QisExcT3bxB5dIHdm/YLIuiYZGZT2wA8s7cXk+bKQp74u45NoiFqZ0TvcsXmmM7zRfCfSNvofvOBRBIWSswYsMdObVVr31DsMWqYJhH2G4OR+cjsE197h/lB49lDqIPEndAzscDT9XLSn3TUzrtoV5iy9j0CzZsfLZOsAnzfo99CPJx2mjxbm0ztYjYKE+oAeBac1u9V5frYzaOo83ChrXRcmGlKxmi7BfoFhP6Tc1UnpOb/l0Red+n+tudJ3xaN2rigf3/6iP9S2rygyb24Y2eLzv4I79SwnTSJxPg0OxQGTlUhhkk4Zn2SWoVUSu3cgZg8PQNBIi9KZpFLvxb4B1DttSDVthqiza5C786CbwP2xTyD3w6fmBVbUG4GHyHdbOOJ4sWj2WvM3S/FiarRKRtshKKLlfX345kfUpMeWG4rHS40B5CmbhH7PLKIoYNDNP7QoJ2bQHvacOQG4wpTT2n+U53KU7YzVqwrmghm6O2fEEGsXbK+DRT+1jpf/9WwJN8XktYj0odmLjHJCOPcBd8yM3JP6DbeIIvhOtxisxB3LEpd5rqWzFp+jFin3P2n7kpoYmGlAk7urzFUJo7GweGNyJ9I7rJJ5Q5y0LIaRmBDsQm5Kb40oeVWhCH9QOgi7sRVBZdDddfaCHiYt10h1mjryLZAd3y3XdVfhx9u4wYBaNPOviqCgXk6NbXL8xs0IcrCTX5sKr+oN1uf+n1r3/9P2xcnzZ08z5teP7557/kyUsvfbeZ/D7/QVxK4xZQCqTJxYA79M2DnZg6BfQaEpNoui8+i6sN2KS2JglIeDqduDKqtFzmDwvOdFcMSNmNbkoTWbAo2vmc+vJi07/VxrjKDRzw5uUXsGLpPy5YBlwE0pTkdr/4aKSFz637VT8Ju8ZFLmky9s1Y3H3j07uf+nIMbbtTzPSDzmxzOtbopIPa8xNt06Jughy4Pdzzyo++cDuB6NEXP9qcueEOp3w/FAepsjvNTd6fDwR4LHvDclOxXLTnqRL9SxfR13Xt/rAviC/C6mzUJ/JTYhQ0FZdhQvaKrDqCGIpBiqE5xib5g0+1IV4wTrmd4ohr0jt0U7/sMtVOGLt8crljzYCB9I65pTgweu65r8maA03YQIfnr9HDdq5Vazc4jeztvkxj1YGgrIur7XM4Gj8l72HnKb5eLzR2OFbwEXzd5lQ52B0CLPR12GVOR4kOsknQN9cyR84FrBtxIMFdr5l8VEV+5PHrHn/3Z+pOGvBpv6MG+LdB5S/cVH5S8W1QKpieTA+8+W+bES0PtZwlysAgsicliBo7a8VU3Pjx+TiuXIMFA9towOS7ymYrCsFVK5XSouvm04J2fwakX2w+9OLuXw6oeKHJi6WjiG+GGCWpsK/mw3DaRslCDs5s2Gk+qBqxaNs3Nop4tX9Ml3lKcQzyEha5nT5mAbiWA4v3Qu8DmPot3yMOseeSovNq4o867o3oayL39kyLgU53c0AodyBa4DU24/61oP0KueboEFyT/Z5mu6vEcrYc9dz283qatRIWp64yyS/GEfAb6DaBhHdlcRqU/o3tOEHuWqiLUTkHhB0Z26jT3KStPUW0kaHdZrNjJVvYK+K5Yb/qQRy28xIvUlHiMsKZe3wlbELzZDW3IRaAcnBH2cvenCqbDMFd0fLPGeCzsBr+AkTBEmxWx3rldYVpF5MsOscx05BzxNBwHOeZF+q02zghPoEamE8fbfqc5WMuSdy/8d9s8WVM8a/YT7Wgu15RfVFVfvL26PYXPtObNPlMbtRERN78trf9zCPVPymiPyoqz6NghjwuRNA5rrdM6N5T44pCZUiW0gIfVz11cVgT0V3rLX6n7F8FB3zvU0cOF2gZ+NyG4ziv1jjug06IQxHma7+CQ/AQB1k+e9dq1IpPtXdsHh/0jTZdMwZr8EHiedi6ShoYsay2SQ4w3e5w+Ddk26Zhw8MUnqzyPF3ZN4jizdXJDbHgTzg0A1O/NYnGd59J92hfg+JjMoJp+yPZdGdFY/Oe9LZJyrahHsrk38YPagCTc99Ypqy1VyLi4p1cTlNbiFn/lLaYFkSUagxX/yRoizPqD8exWcH5FQybJ1lxFPGPGW+8gVGJKNIpIe+Sdmj0gpK4o9p9clbqT2M058I0dAG0ZdnaSHYeCX/vIQv5YP5eQ5uRwYsxnzUW725jbBx1280swG6Mb612XoIvdHizS+osX9CwnhPrWgw3AE7zYoufIH7ZWP1hLJ2xOBDd7Y1YkbmoOa7zzebIGs9RtVbBs8Nk/ZkvpdJUjc0mf7kuZXmcVOjLIZv8kMstGI+Q3bqYyPMm8qOP7fGf/Pqv//qfqdTPDD6jGzVVvb/5rW/9KX18+x4T+Tsi8hH/GuxeBZ4fLwEm+7POURxcRLmIr8Q7YfGIrYXEi4JoQWe5teCpwiPxgKWRq+ABhW10XoBNSQB8JsvA3ictwQ+RMof5v9MAq2FuQQ+kP7dhheyncZdxAR+/WP7ZEHTJiQhxdnbquW7pT0+xYXCe7PZgy373BT5dgHO0gQhYWJRlIl4BrkWQWQgmqKQ3xcXWwe59Mlx4yM8TlD/eazmH/JdD8T45Rg30jRZ/5BjvpVZCjcd0GDvcZ1e50BdXm+MmTT9Y0sSWR4nFs7mQtBr4WaUN/bormvYiod4LrzlnmTOynjUmQtdtbd41LlqTSB1547XSvnsAW3Nzj7s+xFo2/hqxoH84Bx0606+UtM6TPyNRoXnn349LHGhO7RsvlpvzK7Wtze4KTLWFZGbggtY+zutxCkuzA2gKvZdY9CWBYrc1tHYc06aoNveO13AbMEvHK/uLEA1ie5xk3z+2E8fNapw4tjlHoO7poto3d6sWJY7jT11+RFX/zusePfqed777nT/16f525wmf0Y2aeEGamf0rEXmP3vT772bPdx4pCa5Ltor4N4+oTdrCx8VTsSbX21QJBB74Ij6mSw3yhI9JCSOBYDQ4ZKNyQ70M8MM6qvjqE7hJtaWAJ2OOT9iketsmiDXQ4o5in+h6GWubZGAr7qzlOX6Drk7QdSJbg2nabAFG9VFykhjiYf4yTRyAHh50dvhOriz0HNN1KNJiHqoLbLiyA0q+Bp6M6+mbwA8heHruNWjTpG0aY2atX9kukW9p8SvyNV54ol1Ub5/qOOMw0A7QHttzKRUreuz6OWByLdNreJZrFIoNJbDRtC3gu1HZkvNQnHJXHGMx7WIPKLbHBgb12ePjm5y1YOPfMsj/8d3wvpGSqCGeh65MhQ3afMIYyfoMvj7fALU9/BhpjCCUXK1NQY+Pi8V/rxBtjuX+eRzxLjVg8Zc3JntyzWrrKciRG2sxSDlYslo9oE5CwQbNO+9+Z6wvKY66HgokHj5+94uIVXNK/VGXoXLVptnzKvL9KvKe2+32r/qvUnwmMYTtM4fnnnvua+9P7n9IRP7XYvY5nW46bP9BE4uo70QM0q2imyiVeNiRkKedEDK99SR3bxfYE0W2lYLXkMP2/u5LNMZbusf0k9xG0/b1dxXZfoleRDy+e7MI+bOM2BkXT2QqBoqxXT1/D8Q4WvNqaYtDMp37jrYKjQzqq3mHLxr2rsuemAwEz/4wT8s7JtPku3qA++SLTzRbPXHfaRHkqPk3+BYFffWeo6uovqvb03VK8p1t9YPwR2KyjuOPJw6Tn90uEzgRfcmhSXaVKSLDxn7qt7XLQ77gvfkPsK80P7hJey3lsfiqV1QV+pJ9i1hY52H5KOlFdNnwOfqiu0XtMFbu5/z13G2xkOiLw3gP81OnssxkXnnFeIP9lgJINjvSdZagLjrL7vTUx7UuVbY3mkh+deUEqjW88MYM8tGe3ZbU4juj+5oHrHDoJ9S3yzU5+jPlHH50OmSqxDp1q2vGqCF+lBkpTnAs/Mds/9+32+3/+vVf//X/d2Z7NeAzfket4X94LPZnReRvisgLTMg6GTPhxZ+HhcATdqX0QptE69YrkMx1wkn4iOytCYtJbrchvi4ck0qh8YAj2QYamiZ7Mnb1ysRKfC6wXckPUBkHI4dK+EqLaG57dzjeVcafMQCm6z/W0VFidYGeAwx2obu6kJMycfVG8ImTG9ZhsWNPuUjPT2eI/kob3zDjKdEFLvTFktJR9HRdiANuO580cK3kJhLCbL/6rnW6iD2XlzZFTk2XQz0HAGLqJ6sdyH62h7HmLBaUQYYvMpb+QqaieRfdMAkFZpqKC0Vd4pz1wP4pNAil3zEiDnZxVp3oPnG8TseCUOMiiNsN49UJY9xiDukygWnu6si6D1Zrd3RSdrHHGxX5pI1FxplVx7jZ754OwNwCVtgFOuopD+OeGfgOKpbVAcXL0AH+UL3uYyqeJaPmJNEnYqX+0/b1BYS0WyJOgWJvMdwx5nz1f0FM/qaq/llV/R8q06sDPW6vCnzwgx/8DXqXv2Biv1NEPkuQQKOiaMjB0u6seFO02PozOibmiTLvi+I12a/u+52G1Y4arESLQZYLPdG5gPuVhJ+o3Om5rgJc0bZ+ynLhT5t4RfhPP+2Jr4tOyEeskrYL3Qa6idj9XiYZ8BhdnWc6QRMTMX9guvdzuucBtnNf2Iz23rffzRDQyVegyJ7uVriZqy8pXb44OIcmbbSZv7hfqwm56yj5PXz8c6f2G57f5Bj2ehKJ63YYfsjvED+JetJpvDVbZZposNaGbMN4igtkld0W8PnBopdcA82X0k+qwRa2TGOuxy9zw3sFPuhyyX9l9aUWZpvWiWUE81OFJA01CkRicEfU4iJizZV7jA3JzJgMPnE+KX8dGvmfaMf8tXbUBN4LT9hackR6JTeOMadK2Eu5K3IlZMsgl+I8+bPlIV+9oHkuhekq+6cXHv/4IeGQO8Hs7tsesqnkxciXaGRJXkYx/xDN55Z6N2+Ny3YHNTvGWuoCih6fXeL39ogduTHIwV3QEHWXEAlhcVdsyWVfq87V7K2clzvpFZ8nXzSTv603/dPf8A3f8FOL89WFV9sdNRERedvb3vYzr3uk33lT+Zsi8ryo/3VslfNVhhdXaaDDRVkTJzP4cX4teRscu841aDtv4H54pgt+QOrW/Z4PxW53CYPX+y6a4QWTC82tKt52j80jrmrYo2nikSkO7SFhpTioYcAM34QFT1wpZlNMwLC9ByNDG7JBblYlenvKPmHw2+1CxcDXZTQmRMHET/JXKUTee/wCZqgN6tOTQuj5wanSiamPZvDmlzAQs1gsAOS2bPlmc0egnuSmYvj7sM1ObAEnt+6IwWpY6leZjDBMzMHkY2r3Lc/Bp1rGFJBX+uoP308wkTqPcL4HJ1mnSo3tpoHG1AiTVU+vIEe5+MmSXZY0jMceEz5tc5D2PxEUXzBSquWs70CZIwIldO0bxHf1+HG/Ne4i9vQzDxz+/G2+OPes1Q22yDKg1Czahvb0jexiFN+yr0ff7wAuBhWXaXHSor/ycsR8oZauxTycfjR7efxk3CpLjCkHYt95RNAYFFuxyn/4hCjGXpEbL/5R9frWceqC3eb901aS4Q21/iR83NYh8uHme4rnxexvPnr86DtfLd/uPOFVuVHDt0EfqX6Xiv6Qijyr6vdapr2zaRRdFDgKoNClVloZ6DFoJtli605UWehS7j758wQy4Y6FymusIL8Zea8LvUkIjE5saxb+oNDCnptBp/dDb8RhFTnJ7X6FTaoeZI6W5yCXvIYhruLNHkcaefFuWENoY0tkPx7E5gIZkzs6cL8Sp8lcmgjx23rGrLiy7PGBvYNdXU0/z8mz24c23nwEHbnFsXAYu21x3t+BvrmRgx3AI+jVdVcFMU9bVD1ETY5hrBJyQyPii+2wWPE4VoPTQeO6FVrVKSfLx/ZzJLlpdd2AUnxXC+nvrjWd68TnCIgucbXQH/68kjwYfCV0e1PeLjbQNhHsg1R7LGxxk/3vJILONiK2JQQYj9ngb5DJP33yKBf5CoVMGpOG+TRsMlk5VKO6UNSpO9BlJ6Cbx3FsHIXis+UJ/kAw+CU+JcC4CxPSgL4ABLK+Bnq2QVbwM6cGH+IOa1c9tAk8oDTuLF/QtK91aDb4FMf4F+RNXx66oZ5PyI7xtdhtbcCpjiwuCHBXcqrBcgEXcuNLAs/ebvpDt8ePv+ud73z1fLvzhFflRk080PbM29/+M49v8j0i9kOi8sF606wmx1CEqMPFGKmqVVkHWlz5x+JSoCvZ2+BMXa1dvPiwbWGJGt9iukFq63qPEXefnmmxeDG3CWSIUMRhd0FERB5hgeJF0Fyf6e5fOV9rSZ28SZdPlMMs2GMa8L7mm1NMjCEaA3UN+FlGTqaHcxPvys05CYLYQN4tx+NMI3cWH6cwWFe3g6Etbt7mE7ryAgHahSyQ8iOqqOHMUejJSa3XMPvQFF3pzd+ps/0ulEKtxSMD1RTi6y0BLPSHujn2C0wXMUGIBaPGoSwo1IPd3+RgzHB7NwtE6O3tgj7UMb4Bh9gjxhMiSr2ZiqKSJzm84ZnQXQJUwk6pvoHf59HVXuZpUBD3silad9SM+gEmsUEEO/qHTcq6KI5gLrVBNK+H3V4/abx0oYFm2Fpj7NF1yXF3k8KCGmR7ZbCrr0nebbVZq8VcdWz/2LlsXOKFPc85nOKagO20CUtS2rxWJg1eiW5mvmHd4xTxxMfHQSu/00j60BcXd2xKMysKg1pvamb2QTP767fb7Xve9a53/cyr6dudJ7xqN2rAM29/+8+Y6l8ysx9W0ecwJDklntx6O5iPH8qCChXgtpCB2BAKeqEkouCp7ryZ/m2IerQ+QEbwlIOWsKcRcGrhn0nb0Maxxkd+JXZ0gj3eCbiC68iB1Rz3gRwfTTyFx9IXRrbv0N2bd6LmlVmXGAjbOjApIlcb7alyd+I4/RK51G35yLDuEqGG2b0+2S8gQrvcPhmfwDnHsfet0S/iTMoCX9rjfaqlEzZTI0cpLs6TxnwFVSliYCLxI5kg7PUsMsveVGxYQrTFU1oeOq2j+ClPpRyh2pDuNf0+bqOmoq4y78FnVusJ/aDrRk7lmErmet797zFCaYclhVZreH281qESxkMW3bnxZC9e0IEcbz036t7Crj6efHNC5xGjrDls5IZx0mWtZJEPw4ZINCyCjm5TZKi3S9rhQeLQFB6JC6EgcBl4jFeD5ovLxsWfwJ2g3UOahk+lNoT85RgMMNfz3E3kh1/3utd977ve9a5X9cedjFf9Rk1E5O1vf/tPv15e/1/6t0HtI5yNVYiHFU4omwd6bvEO9MtNxKGPyAVNvaA3Mldnm+iAuGbszQsHEsSu650FH0A+WHzwdA6H/7jwgpb4O+xgXucDNO4AubBOfVocYmUgDURBvFsTbIAfjV79WAYjhhFA4pkxxcNDsOcHtH4ETJNqT8M02X/SQLLZFByDivdcLNuVshNx4BO+hH+bj/08ldAF2+QyNhY43/I/XL1b+NgeGHeGdj6gd9lRhaSvli87TUCqfXf73J8tfoGsNtp0+em+GCMPd39kOMxbClmH0qYW/ZjOF4sirn8tRusju8nsIqcs7mkVGrzM4lgkTsgfER8bQygJ66Oc7JMUj+GxK4zgi6dCtWztMbrC2mxFh3QUxh1mvaB1ZN2orJ/2gD1Bc53LV6N4ZEO84REeQEme//m4agpimL3gFm3wJaYEtLmiFTt+T5is2N/0I6r6Nx+97nX/5Tve8Y6fbpyvarwmNmoiIs987jM/Jyr/uYr8eP5t0EApyZ4oRqMZVUYWXd+k0NXBBlRPFwx0WdDB4lCQoLd3AJNJTnCNAXL9eYg20RbsmxrjfVJs2IBt4qfzjRSLWcea3OqVKQ+qwaV90EXnbOZYDpO6pYxOIdmtHz+jxBYp9clJolmM+K1gVqDJ47AzmNCvzkNMz2PrVmO47OmxlJA1wXUdjG46+Bz+9jyuk7VpUqJx7Du4DgbyAikqOuEj05u9QkNgilNppLD0BbnEBXKbQBPvb69gERbIVl/wdKgDP3ZlZGLR4f66s9s4BmBXXDzmx46RO5X9z4tB242SVfRG21FnyAVMfNzhOTM80wX7r+QwwAbJ3h8KFh+QdqZ/7QtpAZse3u8N1HG3l5gbTUX3ognscSdkn8G2TErkhefzEhdvV1n587l/l+hAgZM8Mh3Sbqr+FY7p+ht3zqAv+61vkNd21EpccIA7jp1/bew3oKvqi2ry448fP/7P3/GOd/xcZ3u14zWzURP/NujP6qNH3yUq/7Wo+F8wUE9kFttU80PBo8ULLUpsv8Mtkt8AbM3ROA20LJj2caygHzZSZFfX0Qd7TtT88Yv480Gan+ebPAla2V7qktf1iHijT9bDbodtpjabFh71bwEyY4YC8icMRinHGDk6TGggs3yTpRyTRtLiKnzegGcAl9PBnzFMp9Bn4eChg/inO1ysI1Vgg34QrO7IKE+oX6m1xqti8WzkfSX72pOnQ88HHZuI5xN3PVpdK22mtrFwmpSRU/UrfwDj2mR3DTWgfpIXOovu8Pjtz/yIRPxJzpQJ9gH191QIgWbxkw0sB/SDzr7ozrbHRii+IerHSRKh5/m4NhV+hMzuH0Njo1j/ysc6QQ1LxjkewA8H+w9y8zGLVPVvIPdYwB6/EFp/8orzgI0j/Ci1KIux16Kk3DgOuSlHEEg/Tj6MQdZDG2pjnglR3+iTdiHnPJ54HKrks5+5bibVY5jdVnDKeTa39VJFfK6NWi3I58k8lr2WYC9yjXbPkUWUFx9kSruRojRviCCQ8ryJ/Ne32+27vu7rvu5nmfxawWtqo6aq97e+9a0/Lbfb/15FflhVn8XU5VdivYejt/MAzaKLwtoGhwWtF17Apr0NieABj3PFwtpULdaDIyhgtge/kST+kPvjGKSQpiheDICD6DVwqsFpf9sn8SDNHrY/a5bx7XoRB8Svb2p1CqzD/XW/lSfFkrugh09pL/ZeZH83TdgnKbO5v0EfzmHTtHlltP6tOTcDHUVmJ1OYrlQbL7itlk0kvtCB3/ew88/ODOisGdchHhZ/7F1FsoYt7ENOpigoL2Iqpc60xGh+DskOd0vyz5jFuQnZRbUi5jqZL20KXfCX7WEzcKwXmxZpvlaS340ozW0agY4e9xH4yE/ER0ts1lKixhdFUC9YbPtd3gO6DbzhElnGavxb/GsDnzngbmGe8QPncc61iHz4PwSu1plyH54/ako2FHv4mOYZN6gxgC++8NPHToJsWeY1ZoqDYB6gdSx94xrJTX/wd/2x8Zns8m/AI46Tb6FIXU6RQRcNKntt5Pgf9LKdOEac8btoQPoFqHxIVX74sT3+rne+850//Wr/ducJr6mNmniB39/uXzD4P5jKD5nKh53gRdryLyKyLTo49fdF22oEhTh8/GnRLkO/tEFpkSdxQN+srVLeZRbY2jXxmmvUD0sK2jIEh9+J0uS1EkclE/teFTLz2bWICYe7DEg2MN7TvrbFs1hEIMsnCYfHMW53e2dvJwOrPB/VhsP4LagpEsqxSo1Bq6cbThNNghzoYVkoVntL26QwspZzMT34FfS+SZOQYSS7xmDHFU1Ax8XIQIOeE70FZEQfj2lT+7IMYONHRFWXIvqIKcXF55BV25DF+eA8FV1pW7xvG9jRsgAE6naXwiu8OpoqKB7Alre4q++2xG/iKdUI5hnDT/JEQPAnxbApGdBzmznnDhQryOM5MSXQ33/sLjDWXbje7r5gzlhtVI9hV5pHdvZai8ZyWGIbZrjYED6Nu/giVQki7NA1kEEuY9doTpOlE9Bow0n3K/1mQMZkq3kcnBKvW7ijn8HvABsZ6LUIf3fNzZ4ILGy/2b7GEu5m9g9ujx//X97x7ne8Zjdp8lrcqAGf+7mf+7M3u/2gmPwT/3qtXgxjEzlcJfjVYfRtWV5zzf5tRgz0B9ErbxtNM/pYwcZlmRQT7GCDrU8vMirJNvFHre8Dr05inYhTkDE4eUGpcevS24TRyOjbJxSwFdtkLQ65KLDvJHv1r4O80oSit2hGk0TalxyEqTFtvZiUGOxb08ntKz7uT/VhAVfxHflxA+LX+nadBT03+PhCxWu0kgvWJiHO2Z8+AAZ/JqzFrGouXZtRmD0Sw+ZG4ydZjqCFdUdPWm/do9R99Z9uWRaYIGCLp0tJHpwf7Ev/exxo3uOxBTmZp4NcafxC8WRwE+YQdFHzkzy/VCbbx2B5nC+EbcO8bCl9W51Ki2W/+EFXU2w8bcvOFAfpXAcekd2XYh8dm551FR/jODfk1K4xR29+xqnFNMqxN6HHBBS5ieNuO/racNc1oCFjR7UVZ/GTG//idrv9t2b2T5LpNYrX7EZNREQf68+IyN8SM/9L98NGgzHRuEh6jWgWsBM7HXfM+iAuGJSi6FH4U/feja+wHPPGUyR+6TloBvnZd3A0EQsBfSRy0tFRRdZOVzI4xp2NJ3nddHBbp2ARWc53jsucMZpR6ctkENAd6Yh+IxvLRA5LW+uFU9tpPe7TJk3iI/O+L8IE7SeVJt12otfJ/1CjzEOdWd1eDU02EyJGJohBpxJ2sQsq4waxgOnd7wvZW72V4dyDz8d+J819G1i6XILKfiHSYVJlVParuYLwgI5SS9lY57Men2Tf9B+eE5QeU9pAYD4zy/z1dOWdrZZT5BUkjXbGYViJTeYHTC8Yoo3XiAkHtQvYpLUy0HxZyPkSoHPDhlMwpnEcvK1MTGQfR/gkJ2q5b8ggSynWJB43EDe73Uk/yrXCN2n/ysy+X1X/T+9617v+p9LlNYjX9EbtrW996/90e3T7XlH5fhP7cWnfBl2IiW5LcgBF1Srfi8XodadTPddi7fsqFFxhKm9+HNW4by2IMTaIHXZxNwKwfFlYE8+5nzt6QU/sdx8TqpuMjNO2EW04yPTmC+LdctEv4qeEMkzqX0zYcrdfFWT8pSsL8IJ1pbuB4zktUjnJkdpiS2Ce9BGIG9lMwaE7KYwSCjouODyKoKShb8j04o6gZUe6kCA6yH6yKFveGgzDKcaVy/ENQfaNuyI6pNb7Vj1FyxSHwtBtItvr6Ti2uL4LfagBGeLRRbqnNYYy3FXyMVDvM3ZZSheyxbZU4vSk9YuzJrDLLzapZ4f1qXjd47msKYEegSB0feoc0n6io8ZixZ/fx7Oen2mTY2tzebq48n5O43gthC/q8kbaEYuesrHBJd83EUGDLqYbfXyuVolhon8RJFTD9Ojsb9itwLak40BEVV8UkR83s+9/4xvf+L3/OmzSZMvtaxTPP//8L3v55Zd/1ZMnT75b7va/FZG3gKb5MeDKLk8MBqZh4XV6DOOBJqpi9/1j7xzEtoqM0XWiUEGzvLM19JEY3SQ3C52zyX/slxS47PYRWMTjyaS3VwjJ7XrNzH+1n2SXWENW/0PEeXCWjViamdzoIzXTmASqyKCtX8YvbsDe+APNfsIMlIfe3uzJ0MaB4b0tYIUu61t26YdZfoO31yLnAL5y3+QJm2SKH/hA3z4Gjc8d9J6d7iqi7VnB5A6560q70UzSQmV3brFoIg3kK8fW5XqtAsWXPl55gjfZcsf2nnwR+BE+WdDSnXzY3mHxx6MlatzM4wVa+tj0GvgXccXATOQWz18KEuknPZcidSzlUTHS+6esRvIajjklfY7nuaKD3f1vcGR3Xucxhpp9Pc6j7c2vjA/PuU12r7dZbsge6Bp/3Nt9d12+gciGxLHeUMM5xt1IrvOtbx6TL4J68fibrCBbbCx7rYrE9QTsuYyDy8ScbJFmjZhOMco5gadGpt8t7xPA3rSR+nZ72A3FxTM2f5FPFf+JFoaayP0mok+GO6ka9kT8VPUjpvLjIvLdb3jDG/7J13zN1/z/Wo/XLLrrr1mY2e3ZZ5/9sidPnvzJm+jvNbPPIVoWBT+Hk3Qvlfz9nrWAxeDJykOFL6rhm0dt4fNBUSdB9LnpzfsaFTcWRok2NlBidNIE5t2ciQfUHT5Sf0x497yigV8LOQior5WFknSjE0ATtw/k6rPzxIOzzWdTOt8ER1OYwJsGy75gHDqL/6p1zwHszcWy2aS4NR/tNevV5hKPsNMk6HCLF3vxutg2tMQnvOBzXUTfafLOjxIuFkjWN8LWJg1I3X1jKbJthoBVS/HS7LHc2Jxt9fi2sVP6rhiJrPqy2GtOeiViUHTKmhuCweMP87m2e9+ebxpr2R5Yi/ryrdjU6rrUZviC9rRp2kSTvcGy4tRozhAvQag5EJ+vTOJ5Tg9MURd5lOjLuQWdAfnu6/Kr8FCcNWow3M78dLBcid/qQgzRN2MxxAFrBM+dPb+ZkwbIRhw7j5l5f865E7yNxtHYd0TYSeSau2rvJAVx5hgtosswDb5Y35Jn8DOcwpvHBTzId+D/z96/R+t2VfeB4G/uc869wsQGc41kJGFoS8KOKVePHuVR3SOmDTIGOQ4YhAOxq/6oUZV+1B+ddCexKy8jxzFlG2PzkKp7JJ2upDrdAwzXGBC248SudpyRsoe7klTK2Ek6SICREFyhBxJgQNL9Zv8xH2vOueb+zrlwdXWvtH/S/c7eaz7WXHOtNdfca+/9fWkcG5p1Sfpcf51A3xhPdUu/MTN/jkC/fnB48DNvfOMb//BKfnGgwxV96zNC3wb9yMHBwf+NgX+XOorGSmeDEjYWffjUJM34whCuAxOQJGDM1EzzS5dSZsGgyMQvkJzgkx16Sy7byTr4F69XYJNFWlF/W6BO7kz27W5PBDTQVD+ozFhw5joY9vUQxR9s/ROykWh3rSvcghhvbkrJzDv6gMrtJzu2wB7BIgKoWYlqNMhfp5XyCKljdBlZ0hp5olvttkegHYeT8Fwo2BID9Y83j+Q2BFm/oTdgzK2MsQiX22nWaPerfloVDCw6q+fXFOScoPYGcjcuDGnHzhYm7XMfB86bu5Z0MTINvtiWcz/2MTAbNLUmulUXJprXZimLtyWrIl3g9HCU2pgneB96fxtUTuTHTlTk4WhrGeMw9YMdUP7aJ6leBeuLKebnNURdnY2k7V20zXbxYX1iPLD26AWew31V3hpV7FhHuvYDIfguyIZi9QsBJUnr/LAOYe78aTVReWPW7SkXHRGWWLrNlqSFdWUvpHEjNgDezrRTG6k6Z6tNNietvzgkacTaJzt+hIg+dHB48JY3venKfrtzDU+bRM2wLMunQfg9Bp9LHWaDLwyEOuzmZSUsREAeWj4Qdbu2DGI2/TZPA4Ft0hQD/DQugBF6y49RRrli580cRDuSADZPkDQxwoS32p1slboB2YEczqtpFhC7ie6BzRBOYoBmZrFfJ26GKKmTHBiGWdJAwR4nVyjjrtmKx9qioTLDD4MrumzUVxve+xVmb3NsiH0Wg36EjYmuD4A8LyJ2dvs4gEJAtQVqMlrrmksD1hYL0sVBpUmDs/8D+vkB64dMS/6LhK7/42JRiFV18nsi5A6f40ruH0K41VnsZVE+Cmq/6mf1I0P6PPfVgNsbbDU/R0g/7EetGxh+TK4wfwXf2Hmt187lbkWmrYH1dmTlZ2uHJXE7tYuCbt1NI60v9qePY5tDxV47NH/LSaAnJ4xycVI2li2OlTjeQ+yiucmAjrroPtK2KNnnk9G0OCRSo/7hjyGQ2uWwCZrlGeGFghLDo4o6DkDWadlQG1sAdrzQp5Zl+eUr8RcHToqnXaL23Oc+9+6jo6M7iOgs69ugqe+7gWAJUBl0pP/GOJlGpSMNSh3EaQDGY1L+Rt0wLxMtyAjWEjkdwaWRwwFKa0TFAWNCVHtj4HKaHnC44nHdbR0qUGhsNLNhar08ZxEDJUzEOmkFlZTaZZ+VyYr153sq3J+RqMdD/zgyE81PTo+JqAXNuGAHmqEGVpg/SmD3BcPOrV/rIAdEGyE8rRsp8kZo9YPpF708Tx5DKbYvKG251VF2RR93ZmN7CI2Cer6CylbbFRmsz6Q8PgYwBNX1rdwYmzpfLc5MlTaw/mSpofanQHdwGhpZ38S61upd6ztF9XeyP8iepF1rNdV4STpW3L9OaF5qUIyEqpTrX7aTksAOCKfRMn2lUohNlmzX+k2qlbY5qUSPayQCtPrWZ/D5dJDR+cp3qaY2luEyOR9SYP2idg6KCFBoi0H8IvTJJptbzboJiLBfaAYf0UIM4AEA/z0R/dss9PTCHJmfBnjOc55z13Jw8A4Q/TKAR5xAOvBi/AqTso6fMWQ0DYsjzAZMOYcOpjEwZ8T6qko/L6JLmFTC0uvOjRMMWXVAEfXvvTJeI0RfxfaNw4Jx9R0nKmtiyqam+Ook6NjyghGOUYwsBruf1xsi7S705JeK1DcrPAXaG+kcwSfRl9VPa+r3Nqk2qKB+MbTjuF2VmhAE1KDs/c886U3zcG+F65CAPgtTKK42GabEJkEJPDouuyvXGftMJMWAqe7G3rhQA3KFptK5zsZcW4DhiXvlKHZrFS0Nal8ps1Nm2SWp48p3thpY+6OEPV9pZfa315Ax+7OcB1gi5wldlQ3CHHab2G5tBtoa2Oh77IiIu3BV7z4/Ckawbk3qCvepU3Q7wI5Aarls3Ie6GdBgOs93IZHe89DzMg5ZEzniyUePAPhlAO9405vedFeiPM3wtEzUIL8L+gla6KfB+CCIPo84sFLs8dEySsoA9yDfDHyb9P3gzgIUijwYV7GyMxKKjykwO+WnYCLiWSM2rNRdu8gz7JsdUP0Uz6sOuWLqd6hkz3P9SlnQZNKpknCMYa4HzcCb66mCAVVO/5K+FVfB+tH1X0WVdz/PatOiUeUQ6NZUupDnSbC+IEhwlF2d1LfxuIy35Nvw8DEhJIqWhDSJBgBN/BpKNLHYm+ZfaYr5Rurb8/Ux0UZDUqsnumCwzt+1vuO6Cx772Yu1XE8nndH+Okd0XlWbGdnH0S5b7GJ/TyaFAu+/+HwWdPGMu5+FFyRv61mhmZJ2VI2mbYyQmJHHvtPiLIjtYHljNr58EyEJ15Ct7a4XHH5Y/Dv1IYsd1U4DaRuM7vIs/+zUyuWP9uswwg7C8RhgvGJXHUvuc5MrNvu4CFXA+FgurqDy9aU00o847jmoihcas6l9/CffQZW6Sfy1A9GjAD74LOCnf+RHfuQTVe7phqdtogYAz3ve8+7FAd1G4PcB9MAyD+U0jKADcnARdqDxsK6Vh8lDrGNIC/Ngk6+SSDXYVQFh+kmYiMZQwCZYs6gCYaY0SMFZ610g7KaTbFapCgsuK7U5/5h8g9PbbAHKFnznEB7zVzdJa1lNUgjBF+GWiHZJMLwsJMrg7Ta2Cbnl5j8Rn73i/rDzQk+IviiL0dTuUFXysdpDJYfd6cO/htnSGXLBkStmD8w5uaHuG8SV7mPB6xdGcfV4IN2oPj7CuRyMhc/6LlY5+UipsrjlllBYDGt9Rk/HgR5ZLcmg2E7TtzKXydpdeiHWGWvxRCbawKI/1iuEod/PI90uGkKZ+9Ts7a5/QoH3W4k5Jm++ZUswA8+BOAYwPYEmo23oyP7QNz1V2WIP3xotetMulG0e61+rr7grvU1dqhQbtDAdSzWOSc7+ph0fiXcgkrftTaf5ytpuCbWWS6G0I/edHAxvGkZCV8e1oZZbP3l5UqfJkMUWLTOHcdgVJqI2geDQn7FqIpKXkPSlN9MjcUb62csCTd46BoiIsdDnCPglAt7JzLe97od/+N5Rw9MXK1379MKDDz74Qj5//scYeCOBrmYeD+OwTgoCyVc55DkgY9gnbSDGQRYnYGAx3VGMVac/f1NkpaohUANYpzOio6cJEXTaZDVW0tegUScyVCeGvQk2j5uvnRBFJiYtqz6SACcPrVf/m6xcC+t5TA6VJ1QSRaU9BP3R8Wy82dS1qfrRqzEaCl2To0iz/jQwTBGDiUBlJ8raNI3DlTod3rThIwmu4u/a/xWsO3AcbsM4jfSrOYr7OIyfuKMmCZzMp1aftRXaFivUcmMXucaHa34IsoDMr2Sv+QAiW8eggbj4yWPASADIvnJOxyJCeay0toewYlOwx+pwuunUDki7RWKYLPpsLzUZEbqDMTqOlS5zKTHqsAxvduo5vC+UNYiNQvH3lLzH71zU8eX2l76H6rY6bXEWY8pb0uYTk7Fm24HWW221/vF+cUFF0ItG3sYcwy5gBmSchjEZx6P5IdqqBbJ+zPbGOWkydu6a9ZDs+/xik+xCsInl7bxUOhc/ZSbhq3ErwfwQi8LFsFG4rJXmW6MlyPhnZn6IQB9eDpa3PZ1fHOjQJcRPO5w5c+aeQz71LlqW9zEgb4PGwRCelSnjF8B8NanFwhsmbBp4Hh8HPQ/AvLLEQG3XmhLcA09zZMj2C924/G/ZaWCr1yZIqBtWvyVPNN7CQ9AZ20TNlyYAHpmVI5tv7WZ7cL+hjWL9NBl34Zy82KlX3fVh4KvwutUeOx1/9cjodVGbTcptm6mhPV8FvEP0jwXqUOcaxgIwwJRl49uv3k9GD3NAnnG03moqD4kGodyGzC5NXvI6ndToVtBacmdmFyfHc78gCLDWsGx/wHYdZp6+90wfh/mcbAptiRrkYs6E5q+YUa60mM8QjdafxPpD1okjvC3ZN8ERJdl3ferSrPPBmDXR4phkliMzydrIoV9m7RmuiUpyWMR2Q6GgcxjpPCy+iN+vlsaeHrJ/qI7Bkfta1cg/OxI1pLGW1Q9OUIw5mo3jKOeF2v6VNqbjuTk9SCuL5wp2+2LLBbLjp/NG506e92qo+b2AaGEQPbzQcudysLz9mZak4ZmSqAHAc6957t1Hu6M7aKGzzPxZC7U2LixAp3HC8GvP+UFrOa+lwFhwF/D05hqV5Kui0webCCY4GaqnWmaBzXWFieF62sk5ru4iPIgCHqTSPLMDwizvAS5UOFcxqFVcbSXMumMz6gT3YEvz71hGrJGspmo6NAE3f0aS11kxlc8ZmQ+veqVZsacx9puQQVWtZhUxWYDaE/u12mRv5AFYX0indgdwXHgE3p/N7ejYrhaBmHY2alv2QHjCRZt2E0vxSErqGMe6gbnbVXcaNLM+G0fCq4scpP60yFUnTUXjzOSSbojNro+zgi4xjJb6Rd1KP3tbNQakMWRtjj420srfvbAESAfRJMNi71SeMOyk6AtdBwyxHdK0Pm5G+FhKfQ+pJNjLGus8eZ761FBKXS6T67ydytq5IYvUcbKRrG5HdFuL6ievXy826jgRyuex419l8Nvf9KY3fSRTnxl4xiRqAPCcq59z1+Hh4TuJ8H4An4tDag5JAtKPOnhMwugVwj+CrJ6t6Bpwnfq5yrpCGPINbOI3iRtpIKsLdgoshKniqa6pQLBSLAhBJtYXa5qXboG1o/Mp60eNDSeCVkc8NXn0TyifrCvtSAHIGmt0Xei6NhgSrVTmauuCn86ORzsHGiVsNutJlMoL0XyLJfrA2m2wY0k4Z8ebD49dGCvJEv1jUHkm2zH32zgujmjk3eaoYxw6hpw5JK+m7qfOB8FtBKwm9l5Koy9gPg58+2HZ0SwnSZ6UWD+7v6LZ0dYVJFrTZED7WP3B3vZMj5j6BpiZIsKtwDTGEWwq7bPEvrI7PEkdfhokjcWtnYKoNw6FMASmOdZh9sVsjxQM/040QKzWyqNO90M0LCDtHjb2EtF/vxwsP/vDP/zDf5Apzxw8oxI1yPesfZwODn4W4DtB/AW2gdUOWBtYeeT4eFP+KjYNUjvWD14ZkECoSnlSsakqAdrYnIxGN0F2l2wShmI57yO0LY7w2xyFISZ9zJOvoLZYmyPIaFo/Vd/5TloQirB6o3wgk3/02Ksb6q+aaFuioIJx7bVAJLd9sqz5wHxZQTYuGkzBtoi7/3MxUPx5LJr+kU7K5YA53Ro8isd4icw9YmJot0SkXHzf6WC1p7ownYYXSxBscl8YrfX3mAdr/WGIfg+XbY698toAT2jKWBGiFw3UC6nipDjPGHveyFW7WTUssTcCX9RuxVEu2VPDQ+nC5H8qyhU1+fQ54+dSe/UNQWwxf3aug87LCDGl5Z7QzaUkX+aw3/KzBKYDqS9NxVqcLSAd41KHFgYZK6JGlZ37y2zBZg6JZfSK64m89SKgJuSmT31gPwOVeKzdNt/VOBnHxET0BQB3P//5z//3rvQZiGdcogZ9Zo0ODt7MwFkADxIR1wFmkKI61Edg8CuFAtZvtu+wbyEjG6QNT7IvLEbGFhekySabAEWpn3W3ZVKde4KNgupDv1ZuRaVNHGjyJ1ee/TTrNUgYKD0V9NZdQmi7uv72Kl0+1Ku3guJOgf2N+myhSPpNX1m81lu1guZ5IEPTnLaNGYMhPiSMYBvpR2qOLhKs5VM1JP6aCQpzsvmFZfElu2hqdLp/myQ4MlcP2RmT+E8GxYrzdVHxU/3L6vfa52bvPng1kTE9F8jO1Y6ZUJTOmnGd5yiN57Im2vCFzLPwNl80yw/HywLiIekD8zXpRzV/LR7F09jmJK/+zXSJU7FczQesa9fmiPlcGiBggHn6/ZG9mNvT1iZg/wBq+zQpysOifC1H08eI7Y3PJ5b+MdRFXnjVkzWZtj4NCZ752hIuch+Mtc/GstHiXDVIEp39N+oIL9QQ8QJ6BMy/BOD206dP337zzTc/4YqegehHwTMEDz744PXnz5//rwC8EcDVtGN7O35CvdKDBZiVqx8PLjqg9dBpcWDDJgLLBGLIVdUU3GxS8XjTK9IcZcFFqJM0uaw2+8SC/LB6xVpbY73ephWe2CZSf4xgGxaNAmu3PdBrskYTRRL0qnikT+XQ8irkckowOkmY8gR8pw9IG1voczEm645tJRY+9ztLuf34dfXDqr2h0TFoL/oCQNc/a6hvSkLl61gkK4e+ERpcZDJyMPQFM5JNdaymvkZRnHSrL7QsLg5SOPzUldd+M791/vXTSjPdcUwGByZbw9uZPNmkcqGu2J7k/3oxFPyAolfeLNbfSwp0IvKxa22ikDgmf66M4VEAH89TP6htk0xtk5U1Y83KTS9bP4Vxl/wELTQ506F/4xg3Oddt8iqQfKl2mS15XDjT4If6pfCkNmi5x4PaFrt4rpPS6MHIycc85CqNmeXrMYyltjNdRIyxLXXq+tHYasct9M3x6e3UeLxjYCEm4CEwf/jw1Kmfe8Mb3vC0/sWBk6Im288onDlz5t5Tp069E8D7iHEO9tugYeDu4oQskMlVZ4hglGpgDgRCuHKyYmWwx13JGI2uPOQTJ08k/6ejPlrlAckm4FqDbOLWMlO2b4dE9XdXgN62IB+roeSgAaYQGDF4/NTtyuVGc3rTqLoY9LAdtNFs97u1KejxYx8zwxepvaZR2zb6XoLgXtuqf4M5aWHRv8m+Kgsky2q1Pm4Kge2fJRedWkX0nZe5gsETTnUM75l4CP2g/MmGIpfs1zFY2zTEs7WRLYnEhjWmZp/YnAs2R3LQZeMhypPzzDvWqwsjILsU9kJA6CfW5ElkZc6aHts1c95iR/YOAE1GKn9Meqqv0emx9usubZq/QS8BI1EYZKFZ/LHflJRS9ZtCm9zqjvMjqohzNCSMDjHKT5OttgNYG6yxHCFJi7RZIIMmoYD9IT77nrIj5UI+MlR9hchIu3ekPjI2G6+WdNr4rq1jZvlJqB0eYuBOLMvbtyRt4BmdqEGeWfsYTp++gwhnmXA/EaVYSHrFE+GBRM4SzehgDYSV7DGb2wQCFhTqSEacVHFqKEyv1a3FFFRFtZP8SWAVBOEaL+oD7QgeYttNKET//qdobJjUcjzrrXVHdMEgIgbqCcFJrF/LIH0mtsuV8vzt/2Q2Wd8GmyOnjIvRSdpl8/dQKdKi0vgBxkNjsalca3Ju2dQx+/1H0OC75E7zecHCRZnsPOJbqZAnluCYBnU+ngRZVb6gsKNhzYCNsclG9ZeXVVujGk0gGhcL7FZdJUadLHwV0xiMLCrT6nbZbFVtxiSX9LP6sfnKheqCqicitXPsivkXDOtfUyFfkyJi2Zx53jH07oSc+HNVrT2xP2tbgo1rsih8pi0VWR0hH3K6HeQQux/KONs0FcwIBlh9dvEV9bHSm1XHCAOlUSYjfmnk1XZV8xgW/AoRveOZ+nbnGp7xiRoAXP2c59x1eOrUuwD8EsAPR1o3QD1w1EGqINbBrwEl0YA8icp88qSF19hsVFerglggsNojv/epgTVcYcb5I4v5ygRnjCBYJnFCEY8+sqv7LBKiY6meVF6KhKlWV2USvJGTVMBM8zhf9JKW+U9eFQZ2pi5wDli7DIM13CoJIEv6gWmn1UDmh3AbQgj6p9zOGJAyloZ1pFWw2XYSxgZTkmGndlDo5jPSxGAVYlSG+0dPoi8S76jTzemSfhkCUzUGsj6JWKsytIdDO1eVK4TcMFkRtbldgSaQ5tvCH9sd+eyiS25dh+fblLf2rcvpefzlgdEvA5O/tYy170yEMGTtOKpK7bH41vjEimIIdNky5dLcNQeXXTozRm5PDv3kH1bQz2fDOinsFrR1ryO6O407p8sR1ZBAYu+IyQ10fRnn8sfXFpVPML3y253/45akzdgSNcVzn/vcjx0cHLyVQXcC+GKmrg5LAM3Aw7oIQxf6lUBG+g390+SziQObVeFNIaXXyWfwSaiLtSzKgwadkBZcY7XRhq6ZE+riWyd7BclqQm7kgJ/GK75BFlg7GuO8jE5qvKLyajAWH6rJkRzr6WyMMCWlEinJi2aPfqFB0OhXxRjG9Ekash2l4n12cJCsi3JsnZri5Q4efk1lF4KgMOrmYLjb4UbVlTzMvVAMMzHOw7jIsPxL47YoSHOntjUiOIyQ50xUD6X5cSg3jHbO9G4eSuIjtLX+zu0YsUIuRMctLefn8UW4k5ydB/s6H/OyMhdMT7DX83qIPV07AWXk4J/oS0bydLKp6TuTjWM/9psSLVUb55Q7lOJwLPLuxxajXuNYbXdEiPOxDKpRaP2aZn1Kyjy118aT7GMKLdI5+DLeGif6EoDfZOCXDw8PPxQkNii2RC3gzJkz9x4cHtwGorMEPGRvgzZjNg26eW9LJzn3i6pNgkiywMMYFVatMu6llP1joJs4BiaZaL4bUSdYsGlFBXiZv2etBhYEXQkryZiD5i+mZQ0GgE79Ti8gXmn0en0rtE7GQKwdUAIlWZdatDJdympiqyBjmCvfa487Z0W72jMWl1xD7bcKwjEOaeB1hRcCut+qrFq9mmZ6DFr+agmjOZ2yYr/Fwqw7x8ITNUi/yfxy84oBchEzjB/jb4zvCPb+VKz4OfkjjOtRWM4rVD7NgWNkGDJnW1mFmU8hwalVLGXMJT1xjloepElcrS+Ozdj+2gzivPsb9UhyaHyjHK4nF2Yb7AWKmWYJa697DCST8b/QhGowF8hD9KJ+cJl+eTFpGDK1dR8IOt6EL8kaqYIABHt5iMu5JlCktLkPhUq6K9o9rsGQPgRJoplbqG0ngn79xiMAfvXo6OhHieiv/dAP/dAz4rc7LxSNmzc8+OCD159//PxfxYI/C0B+G7R5Ow22QNskL1gvl8myBqH0stDJ1IEpLJpqX6LBK080Y91pGkhoAqUGmhjATC4FvOZheJ2zwtskVR70VmTlQD86umZIpclCX6nTUPvI2joK5IQCbdg0ZCneti40h8b7rp0w/ZA+5GZyRnpbXu0xv2uSvheNvcfWZ+elPUYnaWxVO8lH/aktQPZ3hOq2Q+8fzG3h4AeTs0OjOy/C15QoEwMyhowhINnWzBH7bcs1H8mJ2rxGUyPc/OQj3ZE2GsrAUXnW/uh9KXqEVSoiu1UefGmyVk/6eoZGr7W5pYGhr26J+oX0jczx5jNsDMW6V8qNFvtIWmXHmoCztVfHBQg7/XoOV6WCqsZ9iNgWDgl90OnsTR9Z2eDMNic5L4vcBV5neAwjsReb3W/lzVcbW8FmM9tkjA8ey+W3ZaO5bi8TAPmVRv+utRAHiAGStyEewkK/cnBw8NbtxYH92HbUGpw5c+beU3TqHQDeB8Y58pAyQDFJKxjTp9tr08FtV7qFYdY2wHYFFmXiZZMFg0a1HdfEBLqYAHoFxyMYJsRdCEXlauUUQsnPYKUgG8odZpcGF2NyMUrOTmD7R+qjSg+BOPmJtaDy+4clILPR5LaeANWZ6r9ok5guY2hVreqJslD+uEj6raoGItk0SNEttI5eRBDGQ6uCmyQwqDRftj4tYy2dlf6mpg3G73XZCQ9j41iQnZysZDLLEpNa3tjQ8bTw/ivnQQHt1ScGtT5M0MbHiwkAwNjp9v7QhWNZGU+134rpShtnTJIcW7pkz9Jau2rfrbXF+qjW5zGAMdqoRIa9GUtAvE2Z6gixx8pT23NMJi0af1YMNpuLnwaxFqxhZdAZAk3aPRTbGB9JGvQW8jgf/mdNuEQhlXHFGt8XVZq/EFeOiYWBCQ/twHcy8y9sSdrx2BK1FTz3mud+7DRwBxhnGXz/ssxfseaDvk60eXw62CYFKzFopcg+1aZ0WzB0EvikgU4wBUcVXl8f5ChOxib4mkwSDcYmu+OkL+VVt1dpthW52RKB2WEutJOpaZawJmfkID3JBHvkZDakLhyINjU0h7UTU56h5bpIBTDrAhbamVDa9tWAzG6CK9vbjoJuTAHSoamvJpS2xguM0p9THcG+2EWDLTDEdTQyB5hcWKrdB143N7K6WMlOkBS5LTFfrNdXtT0BE03WR4kdVhSPA2syL26LhPYksDpa22H/jATdOQGqchWrPurqMZ2pXeNkGdeX/kE7SXotjzGVyYfhGMGeqX6FzHYh9ixhhzCV99yG2DSbR00YTXxrGL4fz6ftk/E+S4Xyz/xRzd/nI5FT30fHS68MplGYD9cu9CPrjr+CHT68vd15cmyJ2h485+qr72LidzHzWd7tHoo0H+hhoNrw9KKchw34IjRTvWRlItlkME5jM7kF+aoyEbGu19NQnr92QsqLKA+94XDaRZwCebQl7vhUmt5KHAvAbJMH/yKHwm2Lr5XJG7DjZ3O40Z7qLfotgNWF+UKwLjMow6fBnkbQihpSAu/p2xHRhR4X3op9NNhYYqykwQOV2liWsLdeE7bEYzRFisdhQmEbpbbQmWsY/gZf4AIZfZ99Vh7psdLZgHm+EJAeTAfC6B2YFuC4q9nYZ+2zvooLu13IEMbOj5HJhFcQE1dYHWkqDWIymTUrtVPzcThPtGKDx4RQpx0TqE1MRXC9Pd04rm62c9PH+iHzbd7Rd6wkNbBn/PaIwtoYC7Qd8RYxxWGrtOq3Y6HzOeqZXeZekDGSiOnkkYX497Yk7eTYErVjcM0113zs6Ojo50C4U393DNBBuHbl4IFihS7DufkW+BgAKi0xCydr3Ilg/bcrX4XhbGWhrgHUzo0tBvFqU4QHeJYXFgYhMmUF/osNOuOjZVwmegy63qYRF/aCITzeRjOVlBAwqxpGVJrbEWzZGwBdQZNMW3EtU3hbq37vr+KcKKPw544KOt1Rdm+bCryfCGmxWUNaBNPCOQtFmyaTtGAsxjmpmvgjKtEegC7+yDfuRzmg9s5kQfTBvja0EC5RUSxYq0/B1WcNv91at9EY20x2HmPdyHNkvIbd/W6c1P4fh4PZ9ZW6rQ+STXv8bM+4yUl5+5MlwKQLlRBTKmIxhYKoMommuvQvab3NnDPbxI+zg8RtNQuLiApmTH6bDvYg2ON6SMqbqKVzA6VPQ6LO3lCA6AtE+DU6PPwVZ95wLLZE7QQ4c+bMvQdHRz8BxvuJ6HOwIKKDdh66BpluFbawNmsrYMG4iJHeRpI5Tz4pZu3CRPpAuv2jOOkCPGCoSmJ9mF3LZZK2tSSQ7lD5nFQwjTrqJGcNpkLOC6vBFv4oaWzDT7N9FjxkocgBbwSWUFb/msooV2mh3rwoFCcUjJ6Z0S0cXZmjqgnnta+7JA0QGSqDo8pGJHtodr+L2pX7ii4iAi05BJnubhcjYtUljT2IO8bo7SHWYR6Sjjx2jdFFGqwQow+aumsZ+UfAmh+7MsV49uoYBB0y10xmlu3HoihI/orJWxN3akyReQqvk8dhrrMk4KuoF4Wud5RPakI9VmeMf2aixSyTrz5mEqLQjZZ57FT8VGzSPiCnH495TlarLgCa1Eb/+w5d5pSysrtm+7De5wTQQszgh2mh9x+dPv0T29udF4YtUTshzpw5cw8O6C1g/p34U1P+JbIt+qupAclAfICTlKUt5ogwecq6mlDLySab/VB8Y6/I6IxTzJM/nFe6TlSCTnSF2cKkE7ipe2EA+17nh5rWtFdYMiGd8WiWqev0tGja7DB/Bd/a8RqsWk+6C/1EWBlPtiB+NZDFYMnGh0W39ln1XzzNtBVnRJ66oO5pQ6RVNusDWVDmjvOmlfpyv83tnPuzfymDMOtOmEVGUaGlriT59QdWG6t/ZvsGmI+LPzInow9Ib3FVmtETzNDYL6ZL651kYj+Weq2MSWnalbXfO50G6xu2CzXdDdyZTVSu+hRj3Agoxhv9mzkGzF8pOXVGE1aeoAvq6y6lsr5bWQmAUK+eTKg/ByYnfRsyaAybwszg+Tla4/EddL3bQ8AiLf4CA59YluU9R0dHb379619/T1Kw4VhsidoF4FnPetYjoOVfAfgIAQ8s8sirTrbm6oebsoR8degLw3FXws2OEHTCMKH81t082WrwHoEwK66LQg1yEx2YKrNJLMFL5QPLWtAtbD3syrYmEsm28V0+k7msH11FGkQnmQglWlCPbZnapQuO2VXJCbX7ghGTXqUzlbEWkkdAAn8/FoNnnBwWeFswOlHV22LNt3putVbpfT7085U6Y59HzVVPROw3lk6X4/IGrrWH1B9uSqhJfk5Lj2OdTf2pqDan8odFvraFzG47D7poLSmJZYx029NpOp58J6rTc8wMifOCQ8LFYvTcbpg9AxI3QkFB9rPGL5trWkQ03iQ1X05zQz1ZwXaBaecQ/V4Sx0KNq1AD9KQ2g7XM9A+d6tveJEfq36rcdNdyw1q5gmB26HmIHUzqA2ua96Vwe5yT7yF9iIjOEtGbmfnntyTtq8Mx3bWh4oEHHrhut9v9L3e73S1E9CZmvoZ4XILEeRUDf4RPULYPLY9HRU6SER5RQoQB7URWvewTZyiI8100zM/HQeWHbi1LRyPQRaRgwLPtBtMvba91ZDlTaW2KdsX2Gsm/+yrA9YY/QFSOEYRncf9euSob7XHf6oH7Ivoh+MdV7YJs1AHVG8yaFpXG1rbeIguVX8Wa7Eqf2jJd7UlyCI0EwEs+j7pTO7U/o/lr46y2Ucr7tnT+y3qD3Qj9jVGnN09lI91152ue/fUWe3lKaoTGYV2uNnlZ5wttz+QnswtDYdRBCN+lFnCSfqjtrXWTzT1tl5UBUs5xXJG+WKR6E2/TJnlWTY4r3R4JQQxlZA3vxwxKe9JYAobDTGHX93ZsHx6rvdHyJ9ZZ7MlQWiPnCM9aprEmjhyyKu8sdUwMwlwWwcpj+og+x8wfBPD27cWBrw3bjtoF4pu+6Zs+dfXVV/8aEd3OzGfB/KAPzsJLzYaCTRxhrhIzv8F0EeRyJW6OmBZi6dA1HT775mpl4oWJZpA69xWU00Y3on40P4tC+lHaxDHgkV6chjIyv6zUKepMsIc+CVKLAdhVZNnb9LrkIFbtmqo93Lg9fHXFhByDT4zjZCa/VxTyWCjnDpfbKnt+rkcxkUvBRIcWNt22Vtc8z6qzLwTHG1j9bHXXUTTZ2+yqABiJiZ7bwipzRpUYMeosNGrqNN1Gr7Db8KNgHLLdevOBrX+DwNrOP4VHGcwuT3TQL/TWZo7tsPNxmtrYzv96bq4KScQM3XFT2vBaOC5ysqNlhSKfYpb6UP4qC4aI273SnjXfDjQNNVhd0XmIx1k3BW2DJf7SSfBBuJBIUJrKfJGY/zGAt21J2teOLVH7KnHNNdfcfXR09DYQfQgLfT5+I65vE9cgOE2PDJksdWYZ4uITw+8A63yqFIZOIPQ2RUSaz1Fg7OhxnNHKoed7E4GVZrFNeoJGACknEoOtOmmxljV6Ot0J8YswQxsY6rSCEXAbT08F6hp1ERB8ExAXqhDQhBboVbYNigHJH1bHXD1gfp0gjubyvc7igzmx5tBd41+j97gHmusuk/WLXI0nnbaIG9tUX/TtBSAtyDUpUtR+S7TwbyIGWUI2LvX9Hj/ZhQRDu6kkAtp1E6zvon+bYQ5o/S2iv/Ut81AstNiOoj/5LfC6L8w35S+U17+Ie8VuQ7SBWROuClXitkDZjNXeiDZ/djoUsz0yimwsTXQuTnNkQhzjsLacBCu62e5eHKPTXeB0Kxm8wydDGXVJsoKI/hmW5aff9KY3/ZtK23Dh2BK1rwFnzpy55+jo6CdB9P5lWT6nP4vRToYIm5CVS6aBJiv6ywVpkqmMPBc3gwAQjW12g8nJLc8s6cHT5mf4bcCdBnuJXipHGBO46Nr3TMxY8DMDpcRrrDpmp4WG+AyJBweTbep0DLHWZ8B++U7G2atctCf4xvtN+YWsXyoZefSkpoZxDNQqM0bfZ79qfStfzwFIvxEfVELrgLSgSskoOAYpsBfd7guzsbmdjeT/MA90YY2fhn3+qykS564TVCGFz2G/YMmOsT5lPQ9/WnS0OL5nMyR56hZLGVvy4sPwV+YB1OZgd9Xl8jpeufgT+vxiKot9uIbQLmi9VYd/H19ndwOrs6vbdg5rX1h7zV9yMsrkVP5rO8j0KP/8teiDBmh7nJBjvPEc316vUfum71oK7bU6yf3TGKp+Mp3JP564ulPkLFSsMYaJ6HPEfPfXf/3X3z2oG74WbIna14jnPe959x4eHt4G3v0iA58lop0N3nbCGa3uJtSpwzJTuslLaeKMmCeLwvz2pOuwgBNlo36zScvkG8Plp0C8PsZohMLraxIxaB0WAFaTEG3vGsyu2O7sr3gyMHw8GOyIYTbPkMDtoVDK9G8vUZoe/Gq6EOwxvZOuGnSLOyf+6JtCjOfrSVpEQ1/KYq/IAVwW+8qDRqP4dJykQK9Ewvz7n23bYp172lZla53JT7PLdZxYn6mBUccxYxeALsrzxRegtrftU5p+S7/DjqueBnW+TSg7R5NtobqOBrWVSkJFmiRWjPkeFBfUPkhtj7fjCrpx6rAYpDzVZvkrFRktYp8fyfq2Ae3x23Ho/Dcg9kR/rlmYyy0O29lsn9ManawfXOR0k+ILAD5JwC8enjr1c69+9av/OIhu+BqwbyRsuAB8+tOffjEx/SUivBHANcy8MGEKwjZJmGVF5hKIOpkInxwruw0irzoUXkQrCWKccCprLCMQsGhqFsQov6Zf2ivyHV0m/woNWn+lIYzghm5gmP2hLLXLmDKqL+0U/neus8pMND8ZOxQTfV/fYqbv9VGsE9oPK5j6LnZ3Izfq1Q9lieVtn2L021SngjvfIvb3bJONM3LmAp1vtc7qo+hHr7PxQ+3Prs7JR51p+8aC0s0dtELzU7dV5jDpnAMXWyz2rOnwk3WazWnZ+eLxdRDBR6kv9HYm6cWIJbj2w/UO6x+9uKj9E/uv0lC+rJi1vtH24Ou6SRb7XfntAmdvnZgvLMDjx+Xr+J58qPaaTRHDlxQcCTlmTo1Y67dqb6xzjW79VmmdXv+BdeDDC/Nv0eHhP7v11ls/keQ2fE2o3bDha8D9999/4+6J3V/QZO2bd2B5GzTOL51vOwkn83fSAO3iFsE0L9aGboEzuG498alvC7KNhmYygmU/LgZhC4KVr6ufjWdlIZWno9YXUP8VgyJn9jux0q2RjZ8N3Vuwa3JKHZ9Vzj4bsdqeqtrpTd+uBWGjsQXerp1BNvZfLZv6xRO1uT1mT016jLamc1/gR6Q3bUGir9gUZTo6Zllvi9sbxj/GnK1+MDlfZFfoo0zosw90PNTiYq/b4gz+Mero5rLSY72RJfJ40TG+GgVCp0Azdo5jstDkJPg5tWtwJX4rU3/B6ggJuHWWxyWMhtqYtNuTllg6WD+s0pDIMRjxEc5sr38Me+M4NDvNJvetfFQax+6L9jiMOVZYbVrxrdJSncjjqktKmcKb9XOdDxPRhw53u7e/fntx4EnBduvzIuLqq6++iw7odiacZeYHqWyh2yQ8CZiaCWYoQSCjXp4KpO5GLtjULbgD860z5++CsIFi1FmZ6AT5ZvwCKsGkcrh5RqwMRlNCbM44br2yF0wUngYrIPhtkMqRxkIkRF93C3nESjtTX4y7bJMNa+hus/i6t6ZnrL+xaLavMDm5JCdTu+v5SaC3oaqoLziNeVZA4dgQ3UL64WXKa2O4M7irr8aFKJY0sPgI2g9TF5EY6NXH8ghrn9lbWOSBCCmZ4k41vkIHGqPwsi7se2PVgNtWxsTUNkWpCvB2DH6WQscC2f2b2qggZMXZ8hFXpxaR1O1EVr9gdFpMfMxGIY03p82mZNpU2QyrqmKtnQj2oBG1cw7HpG3iYKfyfoGIfv3w8PBtW5L25GFL1C4yrrnmmrtPnTr1CwvogyA8wc33ZchkpemVgDiJ17A28QxCFyafcBYA7AssLTDYR7jiHYRmMbHVP9oYJ63uuk3QijoaaWDzxCfpG3+7eMUY/HVnckADf02SVc59oHBfWdlslthLavPcJEGtL/Zds3tiWFNn6CRJ7yoHL471MSisiXZEXSCBIKu3pyYQmuxBygkYYy0opjDUKCxSgI2DcLLmjTheDOG0jpfj5kwkk8pHDLo9dyUN1CMgN3GCuajqjTBSZPH44AaUhqhvOST3qd0h07ZFmzRJjHORrf8p94GXrfiP9Zagn6d2+KDsx0gA+Uc4t2Q2KnWE3q9yoQG51vy7s5NK9ZHT1ReGKRYWuG+VHNvkosoTm2WzjrQOq2fINJUVA1iVta6CFEb7Wx7FsEb+TLyxasKXGPj/HB4e/szrX//67e3OJxFbovYk4HnPe94nzxN/FKAHCfS4vQ0aJwthnjGVbhN/QkiYDDZJJRCIIlOXJ2mIJlaPnjDm224xeHg0KKb7cfvA+vhZEej3v8WFkwEwsSZ5DWyB6aJGEOgSCYbU2yWICOtIRArIAVYcg3lNtLFHHogdsmKT6d8DeXC5FppqsSgF+332KOwh64i48KC0i/Tc6UHWj9TO2p7c9/Imqtdh5dJxg9EQGKe+C/bVOiPMdj8PiriRjQkvUziPPo4699TN+8kJ7Lq1sSQXdmk+knGOP0l/3FlMbRbfeyUsk4HWDIyyVqSOoGGoE402Un85CmpygqdfaAue+8PoESeZOxzGntgYjIyGRLD4xMY+KNu5JscQ2dS++NfGTlXh86f4xv5qBtZXm0slRubu87FS5mHkiX5SVmXqvWxjj4g+T0T/+ODg4LbXve51f1j5NlxcbInak4TTp0//XQL/PJj+ATMesGRN3qTUydHMBJlwgzgm/FrWJiCZWzrpZsa4OHVBoTszyAKlmU1d0NNZA3veYccgjVZmC2tyRhwSl2Kn/WvhxJnD/Rt2Gyqd2Xx9YeDiTwSPr9Y1ulRlhwK2hUFRVXQ6E0y2uHBlKJwIpLtoO+jACjD9O9LfUOz8r4teLfN26t+6k0de3awzynRkQ6XTHva4EFu1iTcsoqJ3/oobpfpCH1Hdz8iLoxQ0+oxOg6djm2pIF1b6FTu2iOtcYOWTQqtDhHxxhyRNnf1OswS/JgIx8Vf7Ta/rdmahL6GwbWYo7MYboF1A0If4Q5wJ1zZVNs9j4UpzkTRQYMTfSBdfln6PvojPexWawDpgjAsrkbobEWBSNNo3+y+3MSO11Q6svY0cgXhhPAzGhw8OD2+79dZbP0L229cbnjT0Y2DDRcPD9933oq8AfxkgeRsUvLAlD82D2ID0isyVQrRy0sSn7GDZgt8vJBKkuJm4nihoUKo65aCXBdQuO65BK8DaXOlu95p9ftArZowvdyTltwXJ9FadIqefHU0VtQ95+4Fl3blepymj+zfSmzc3ycZF8zIBjpGVgz1twfq4EEfpcdSt463z36hTP2r7cLw9TlO7omxK6gp2xMBuDl6rfojjE6O+WJhs6sY/Gr1KtyL5HdCZLgcremOfdPZgrjf2JxHN4wFhIgij/LE5EZlVD8K821c3av3YYzdEvogL6luSdlxs8XLnCfbYfImwODVYMkJ7ZlmlV5qWs8epUQFDaB4/1b7Oh1N90PbGvipYnbPAeAkqtMdtC1/pMtWr9li1M10+TLX7Uh5teYQYH+AFP/9n/+yf3XbSLhG2HbUnGd947bV/RAcHt+/AZwGcI8g30tZA5IiTrZtApBON5knsC32Vg+mbr5CNJJN8vnyjeBW8ZvNaeUAKBs2xhdeuDmFpCI6hMHKRftTbegnHqQ2yUYv7SuVNDXl0y7uPrFfLcjJXmtpdzD2p7ExpgnCHFd2stE6FtFNT6yDm46UzpoMtzHrrzcea7tQkVvUDMdVNvtROru3ubFqzL/R51bEGchdmo/b63vT5ONnHHBDZmkcN4vxnsksfAZXpLV2o/l+xoDbb2sToBaqL2eoNfQtk2W7OG9LYB4pgc2gxTitPok0SRrH+NZvUOS0fEO4GrCSlSnc/JFL3AMXJIM0Z80TN1DpSLRPI/Nqy9WOCQI+A8HtE/MEtSbu02BK1S4Brrrnm7oODg9sBPsvAA7Ik7Z+erFc9qSzP8HjSBLQCi5phYifacagr4wo6VW6XtalhEp6GYLRm4Y6YgooGRUavdj1IBXZLRGp5c27+7/qgLlLOE/hZE/RaB1T+ONgCYPoaM45Fldlbr/ZJNyzct9pna2qSby3hMH2NM/JCOSquPrfqI9wmG4OBYbZPSuKiKv2TtaZ6ZyUDrB+Rv8qGhIttqGvRmmppUm1pxD7a8BOpr5N7m+Nox6h7cLjdiafHWptg9jTHMFfRPFnExXo3wPxWK1e5qtNQk94OrAlb1jFOrNx8mra8VD6Kmv+9Hyq6CQYMndreffHjqwKnISnPpC30q0T0X9Ph4R9E1g1PPtZGwYYnAQ/fd9+LvgT8DSL6c7zbPYetA/KEkO9Y80keYJPRroLrjIdOML1VVSdtTDtqUEhBTW9L2K1Vpx2bPArZv2/HyoJttU1GY/2ob28yaZtIaZaQNHqtPMlC66zOcN2ZlnSbUSUJcva1diqPBOvBk3ylup1PId+vd0z/BJtjm+Pu1gJ5vmzqn+Lf5LPGT52PnGaFnYwdhz5LsAVLbxvFfh4Nmivt+rS2UQqzzWmsBD9ZEXtytCKnbfF+0fLhO2eykjFe7FlM5bP6BqN/9G1SnfI6Qd61STZVOQXtVGayOWpSQkkkJv1ah1ej/or6HSz0zqbV/ivlNjbiGHE+PU99pB/iKTNJYyqARXe9TI3rNZhPqt74rFnTnslPFHR5oZQPu3J74XLDx9KeogdQpmHkZJM5orYPWV+n2fs0yBHRhw8ODv7m61//+u0rOJ4CbDtqlxDfeO21f3T69Om3LDt8YFmWR+1h0Qi263ZCupoiDSp+jHL5qtHHJpcHIv1g1WcPCJsor27XCy2BSH4LFEOB26T1A3NgJluoY8UaXMiuTtkVJLhsDOCBJge53OD0StgDRrBTjXaT1QRtZnI/zFavUzgrj5DGlX8M/ua3GPCNNk5ye7y/Vd7O7enetHjU/rww1yRIXTTGRKjbeWKCUsBmj/nUkglv07plPmaDv+LOUm2n+zV/OKKN0qZAtP4JRY5YWNsezgljnnOpTxmOB/dztYrW/vbmdjsuHl+GlsoTb0Gb3WnR0DFAoW4f38aih8m2cSgvWHmMkLfELTZA5dhcSNDHDsZjEtGfxHViSspm+q1eY5nmVlde+Ov8RKAjypJYxuXt22xeqQixMaV8D5JNrD5q/G7Yr3qiPgrg7uc85zkfrYQNlwZbonaJ8bznPe/ew6tO3bZjfi+AB2jJ04hYJzNjuvJhizSk14shUCEGkRhw9O9igT4sjgCwlCAb65ye7WL93cEuwZSYpG9wFppe3daFhtSOHanOukgqeE/squ1tUdfelFRUjYroQ32OJNtQI244NR8GPx+L2NeNSWPhy/XWAO021r7Tsq4cpr/r0xWQvamHkQGkBVUfdJ8uKFb02gUEYIvtHjn7G/sonNTxST6fRlm3QLL5U/ko9mk5rr6qGPPJFI1nkaopXhC6oFtcUcoZfTsMpF9SrdcMK6BUMZVhHcdFMFPLQ0IWhHyMBQfa2BhMwyR7M5UBgDklbtX/1maPKfpvpzYx7It2Lb4E+5iHxs4fVpnVH3jscPRrp6C00aoOcY/8Y6CbkwS1oxIS8hzxwyLUzTdgtDOcan9K4QJiInoAwHsPDg7e/opXvOIrg3vDpcSWqF1iEBGfOXPmHgBvAePd2OEz8fXmnUYnS3wSGPJNWYy0AMYgwARw7VVlWGCv05dF0AJlCT713PTE8hgELHhPQVADUVyM4bKsX9vBHmAj3A9NMEvYS84P7Mbg1InFnEjDl9NGACf96gonORcfUwd1hVAfFFlYneMs0ZzVzGTxc+07S9JruVLlT6m42hHB+ruN6HZQAd1Fys8MVXQLFADv62l3y30xXwzE876NCoaO0Zmn6oxwWmTaJ2D+c551P6jDHGtsUL8bxP0NtxU1vqtgSCJX+9AwFWsB2Xf2QWyoVXqyrATTbwkZB+aUFBGlxG3+fsTcd4u9hKI2Uamrtnltp8ljl53HemvySmJnBK/UZ/FajvVjsiljsqvFcKTVvcZZoWKCeSkQmoS3zxDzu0+fPv2W17/+9ffYV0xtuPSoS/qGS4Rrr732kweHB7cz4SwY54hoJ5NmbTGtyLtTUiLoppNPZtZrUeVh/9AFXvlt8qaApTneGjwJrOWmNEUIW8iMf5ZL4BGbUvExYo7CZza18smkUanXTdFBVqinjb5qM5qdLTkT/3c6UoWTQiGbThs/UU2tL0MTnxO0JcJ8GMdb8muo01yWVDbjfNIVz4+xKZKk/nzuskVH1jlW5Wid9Et5Q88SDCts6hwn4XgPqo+KC9q5PSG1Z052O8hcrKWKUE7WZhtvmkx7vytfTXxMjtS9S/juxNQ3Cus/avxIwQ/MJYsqSXyStQvFpp21iFLy2jg9FPl8q2wkY8bATfyqiPUeuw6Y6mq8FTXlUA+x+SYMMAJAy8LLsnwOwL8C+CwdHNz+2te+9pNVx4ZLi5Wu3HCpcP/999/4xONP/AUCfhjA85lZ53uJfAGeohXamHizkAcd1o+ZxW8n2G4IghzxMfX6Sa/b0AWfGJhqsDtOt7R5LjdoK/bQZ5qfruhOvgxJEbs9ozzi2LaEz0pDlN/zEkOrVxP0vWBbWIey0c5e5zjJ9DRmVupdHY+2mJlcWLgSQp1udWinlzV2VXu9TpOrdH/m77jxqR8nqHNq08p35+1IZGO9U53Fx5NuBtheMGpoYA5J9YgBsts2P0Qvp/JJ7IeTbpOt5VAR+zJY25kmMwdzmww1Kaq+4PhcaPQZ5vkcZVl3s8WumW5yadw2dD91vrkdqSSM8zgOB7mWBPAwYrpsZ/3o/F9txWgLEX0ewIcOmP8+Dg/ved3rXnfX4NzwVKF24YanAJ/+9KdfDOa/yjv+YQaeK6XzYiGlK+UWZQJRkqtARwkMBpXdm4iFiV8xAvj6F5HuS/SgPCdN1Nwc/9vrZYzg176Jqm2KfpKS4RPzFyWZwB/pSXb2VV1UahBnZvBC8kyLf1u7JM0c5fd8WWj1H5Rnb8CH2DL5wfr1uEQB/SJlCY+R3EdVPtjG1l/BnsTvjEOxSxtfXYjMHquq+t2IepwStVAOzAlVsq1Jtna2oWXPT5nNtU0rfSoVMwAdF5GuInZ7jUtbhKf3BeszhH7s70labcNfZn+8Dcn63Os0NrWNbMJ6bDqTgmC33Sn1vtFxL+f6M3RqK/b5sbTXiynUGf4MmiSrbWKqSZy1pcXauLD2BAckTg48Uc7Oy1hNiHKmvyo3d9T+6ev8EhH9OoDb3vCGN2xfwXEZYbv1eRngBS94wSdO8emfJsIHF6LP54hWoG9FGVjfuJOfptKgaTSXCYEtERQWgFZuj1EIMgamOahYQK3lZMGg6o/tiOVKsn+ARqLKFFFoFpy4s1/Lp6vQNfgiUsqbIDq5JCAnUbOs35oJySg3C2EE+e23Rl+Qo3C7dQ7+LF+OSrtg5EqFBSfjEsRaxZ+yEMvQ0NsxgcdQk896jmAHQ3eH4m3XktxHMETYuOPXw0xt41zontKFzxd2o08Kvgp4wzg9syc+kDqj32KVrMlHh3grnCD65W+IFaz1liTTZLq5jqbdxOXNTkAqUn1Wr5yQlPh8l2fWDE11Cf4mcirTvzo2ONju8wM2ybOM0+w48Azk5zTTsfnRjgdJoM3108g7zdMZNv8nv9i4KPqxUqb4H4job996663bl9leZtgStcsEz7v2efeewlW3MfA+8i/FnUHQIGtfk6EP4Asz4QCEpVmobGL283MEiPqYdg06hhocCBKR/E3AAC4BKBI8UK4Emw6mgzHFZMds21xGK8GTgr3jUr/AFAQ9KP4yeJEddPoUMTg7e6PTEWj72BB01+fVpH9I3kLRyuwG/HHYZxuXiwopC32tiQerbebSzk22IJkOk4X53+sJ/dXZFiuwQ5s/sc+DGqNVu0jtqot0rDYdhwbtc29sax6g49KC40VIo4uBvcmHl1lCxPpGt5QaVfpQLwbJ3hAPLwW5L1ZsSOd1KtV+cBmxiZRgfnbeleNxqFpiIqkXKrZjRqHO0YdjNy21p/FbKioNNf3aCa38cXCRY2S59oHWZyPFxpKbyJDk22QAEBFD3u78KDNvLw1chtgStcsERMRnrjtzz+mrTv8kAe/xFww6aFAF5kTFJ25Y8OVcT8IC12EHueo0njjJyT8GzWDPmTAIS6w78q/EHeOJSSKbTlu0wqJvXJSb2YKgQSsuEn4VKv8ZX/z71aILcbFeP2z4AE2i1Aj3e0xSnHPQ5CA7Z60dNUlD0BH927XDsI+GaG/TSAqJjScJhY499huqbO7HuV4O7Yugrq46d1SWw/dxOT2cxH6K6Mo6W3oMh9TEV/oyK69zJLals4NUJxP8+/ByUGG5Da1f9SETc+ywrTVj2g0KOzxOGU0bCP3K+o9Yv8LDRFYqtdvlHfwixeq0GFASbTtM/VPbUsCNSWanx5hm3gGN7si2dpEYEfj3jUUnFZUM7Jj53EL0noODg595wxve8GAgb7hMsCVqlxnOnDlzz3J4+C4seB+YPVnzW2DGaEF7ZSLXgO1sSYkWFSYjk9FS0GoPJb7rchnfdIrBgpu6UxNK0DLZuqglLvKP/ej8ZGJ19yS1exbca88+uNy8e2Rkij4KRO/PUpkvskBaDLix03YUKmzxtNt+VfYE3nWYPeI/kpauKLAkIcLO4xgyVN6E2q49SWA3hkfSYQaM8lFa3voMiAl2BftHU54OGqgfZOFdT0Q62AWKn6/YJ22PmZBTfDzauInjzfp4GsgBPh6UZfg58MR+KH60RMqq6C40Ihij39cSFUNsi5fp3+RnyokWFTfts0liHk/jc9iTZZPecLyK1fFQ741kaPt2IDpHRO8D8K7Xv/7191S+DZcHtkTtMsQ111xz9+HR0R1Y6CyAzxIR1wCG5g00x45he3HOEqNLM4MZElAIumBrvFutYx9qUNqnIwTuylYDaaenaQpgsqazfH+bwdU1ek+GTqtin04Nzm5fgCx+dhLKBkc8GaeMKTmp/uqSNGhIp1ivyubFKhzvQZJh2Y2pJicbVxR3trYL7wRlWmdo4X4/Tm6ah1899qlJfX7MRVlC9NGeBCJhla3Jqtawx7ZpLGH2Y02YHLU83LbrQP4x5henp1GFaDSDc4T6kt0cTK7CYlYpEBZXV9pR2ROiDat9mP3Q6XOfFhUkej9PoP8BjLMHBwd33HrrrXdnrg2XE7ZE7TLF1VdffddycPBOBt7PzJ8Dwmxcmbxsk3OFDqrTW4stHq/JGU6ySB3H0tRBFtEKLS/64XjCPuL4Xrpa87R4FOwl8xydU2JZK4PIeJ0NfW2xinZ2Nhmdgtqa5AL7g36WtrLRxq5ewyptpT63UXon0/a1lYbfqxtHW/Ug1J38MK2og+4Ua3qUZfnodrXGad/eybX1tIqV82h/rRvFT1VVB/G7HtutP/NB8EXa1WzGk+0UVZuSPeHWYuUzMPX9TioTq60qkk3lasPOZLdQ0zVSviCnN3K1kaMcRb8PneKL7qJi6ghlqT6o418L3d6WrpDmmuJKHeM3aZCTLwH8Tw6I/8rhqcN3bl/Bcfmj6d4NlxMe/NSnXvgVpp8C+Id24D/hhPA6OIVJ6Yg7GcaggYFi0FE54hA0Ci0h6K312gPha7GFYUJ5l6Urt2r92/+5GK2wQFS/fgMmogpTgDTlK222U/NV6w+1J7g20e2hZUfsA22r+HzA29Lo7vROdJWLqP3XLioGllaLUn12SfmnBSbYU+nDR4PmZBpfAyE8weawqMjzUPJslLPGttQxVNq5Si/liYZiD8ZYYUh59YN9i77ptHHofal803io9XZfz2EKgs372ukaVtozyZpdNpJcj7xE4I8y6JufMNVx8TdfcdYf29vVCwzbjT78oyPE278+3k6q2xB/zkmarFtlVqET94yLOk7VzDzOs49Yq0ltUXvshFXOxYo9GYHWtFPKpa0UfQz6YwC/fQj+66+59dbf314cuDKw7ahd5jhz3XX3MJ1+MxPOEuhBItJIM2YmW6CI8SRMP9LvNuteXUecyIXG9vA0a0AptzDs0KTkGagcbBwUdnS60BAWHDS6vYGhbA7wGSLSGaN+cnrmsZJONi4mE8KFeifL6Uo806f2BnC9Krbyel6u9Cv2JmmAaGS4FcTQ3QdpWPQUsfSZjY8ewh3JkgTEgkGNfASAaEkOSWL1wXr9t2qKoqWnwpkj2z/OvZz1I7SFuruG0YEVcZPH5lwme0E3B7GiXub1oFf4CwmqyOKA8DJ2vJN+DqEj15kHZxyrcX7uHycCG7/2EpEUiuGpznBSdRLPF21c/nkZaUwEdO9q/XaAp3fVFn2blOJ3vRUeO5b5lMtihbXqLoZMMLOKH4K5gPzUFgN4BIRfWQ6Wv/aaW2/9yJakXTnYErUrANddd+aeq6666raF8W7C7hwt2NU5xvqxgOXlrZB0WeCQL8Y87qpxnCYd9peaiKJE21Hrpr+ozouZg5ASAiuywB0l4gPoo65Gp8F8EZ9Tszsgfj77kmEVzM1N/uvKO5vqQjW1K5yoPYX9EiB3LutOqz1Cb35hAnaLLnJN4m+QxW9GSjRSu8c/rzHuFgQfTgu/yhDEf90YXMV6E6Z+s0P7OzxWllX1XUK1eRT7P9NnY99gbz1S8ofuyu5J0ClO96ZuQAefyrf22VhVAyeeICvjJceOalpn66RTEed6/LsG90XQR4Dcsk5fZWTl4Tj1xVDAziCOmMceY6cSNmcGaVRgPrS6pC05SZ5070WwsXGM98dCzMBDRPQBZv5br3vd635/9RsFNlyW2BK1KwRnzpy5dzl1+E5ged+O+RyvTDRm2dWquycebMubaykoWJCz4KgxxP55UDGZGhz86rQBS0DrUNU4ArvbHhNNp3fZlKLo8OZpeW/RCKwlrzVSj5R8ZZuiDjff/GyFRijJT+yjru4YpI23Bm6/RbOWWHE0IBST3LaJpLgg+62jsNg738pLHIbudiCgriPyL3ilkIz41zRQ4yf7aN4mNeyziI/5cmEuVdqcoq5ftF0xEYhIfRbonTusUvNDINj/rR8Z0q8+JgrdEQi17TZeSD+qjsofUev18V6UxHZFXp6H1F7EW7QTdIyKT6SIERwffCxtHTVL/1ByVGp3GOdT20xn9HE6yEmytRvanv3Y5x278SJJGjPfSURvf8Mb3vBvK+eGyx9bonYF4ZprrvnY4dHRHQstZ5noflpKWJCIIhEgzOFpunfzm01sEGPQlMBVIqcFvBBoWt2AM6fgGCn2YToD3Zs1t0Rtq6UD5o5Yv7fLPlfk11S7FR0RodJgbmQVsn25qNqUKhPBNfUVpI1K36pfXGUL7mrwJ1oJByJXbfEEhEjb2mS0iM4SxMWb0DiGxDcIOyBRzli0NUFYzzobCvYlF2h85+PbjB0GCH060FNddBnQ22rrX+8xEURo+EKLk22uu4f495jGAqKh+DmCkFjSLwWkfk/l4fgEqPWSldVhtS8JD7/s0SL0W02enG6HRo88lT/imIuSFmoP23Elh18TyZgN6bi07DEAv7Isyzte//rXf6TybLgy0EXmDZcxrr766rsODw/ftQC/xMwPVzogQSOdauARzJM8JgmZV1SNsho1C2Kgi+Va4s+D1KC8T6ehBs359IKwFuwNw6Y1xrXygcqR62y2Jwoi+SQ+MpZar6EP+hFzJaRy+/21vvXRyckiKDtxtY1kefNsyoyGR3Zc53E6LboNZKFvDEaRVV2pT+qgDn1G3ifSuMknjewQUuZav0F3HCO8rVVtqbeSW3S2KRhIt7+dk9NZgiWu0RRLaFFNrH5qMPnyGJhbW7FicoyLqxc4EU0fHSfleuchK8V76w0XmQ0bA19i4LeJ6H/ckrQrG1uidgXimmuu+dhVzG8lpjuJ6ItOYPgVeDdxYfN5hYbuCj1tOOXw1gXJ8XDuCvZcea7KANWQVCxokoW4KHbKyT8mjLbNgnsDfXDgLLmOuthWuD0ryVbqi7ADcxLYLaNqAsG+8DTTYl2ykAxqpbnZGImiLIBy3NnJpD+RVoj7EiM7W0tGvcpZbdarPIZUJfK88uSC0Sq2pOQkMNGsc7bFqjIQW8OUJ9ZpbWl8Uu2K/Rb9QXpONH7UjkrfInyB8xAKv3igRYvpauqPIEgjiLU9xfyUTodxwJb829UlckUyxmNDx6Gf7yHvRbTDi7Q21VvbEcGhvuQbl4nCdpwVlhjyJSL89iEf/vWDg4MPJsqGKw57hs6Gyx2f+tSnXojz/LeZ+AcJ9I0M1vcF5jDINMolELLftpK8Tl7TZ9Kgo0HSZP2LS2fVgOnXY/uuKYYGKIicLfek5xFmXww2KbBp0KtNszqEJT+PQ6ZDbZfWFnrzdSWIdXdJrz23Zag2h/oieVoM1xKgps7ki+6rSEK9xmt9wHHdqg3VMk9wQt2MECGKTd7fzXNm1pdo+trHlPnf+KzOUB8HH5LKrPmo0onntnrdaza7HXNbtbFAGEepT5QcB0asD8EXVY4BLNreWg7S/vZ2B1sDY/raiWhbsLvW69g33vbREOjmFLVNkhR3gBtrqiwGxT5KdUZexngWUnXDVAa9lhhxGU/uq5UxHP04dYK1B+GrV7Q8QWVHn0OfBpbJl2ITafsR2q+sbHTTN2oA3M1BhuXLqjm8/kBEzMy/dXh4+GOvec1r/vX24sCVj21H7QrGddddd89VC95MwLvBfI40lNSAXM8tWnF8eDpelZfoIEEjZGIVKtq9WSXlwlLNIK9bg1phIr2q9oQjChuMvyy+rsaCZ73NFvTV9jo6fUDeP+hk9Yq+2uz2WXuKQ6yte7FCFzmpdwGw6FKwJBetCBuKwdGH1S7vm7h7oW1iSOJHmO21vjQaBb/YEJNTWYDM067GD7Lzqj+9Djsvvo4wlVZXamuVc6YxrjE308EAZBd57ALVfiZxcYMxkUza2uFmpZ0t9aEWuC9NR1sHRHuY/+kZtArTbQYTyT9NBC0jSM8uqv3ezwCY7T3JDItJCGOjPqsVfclc6gy3r6397vewm89q3tTXoe2xPU43VNNV1vp2IfGN1BPmj0+X4L+Cwau+DajVhl62sx2AcwT6Q2DP70VvuKKwJWpXOM5cf/29h6dOvQO0vI+Zz9Fi35o2kANVCQwhWMUACQ0YvqjEwFNi1sAcWKxYqpiDDmmc4RDIjS1yi905KUCwuYlgA86U0VjqqItalfa8tSipchGD5I1OcJ37oG6oqElKSsKPAZG8TRsXzrjgo1m8OdkxiMTWV7ncwKGUir9E1ujCqZ4KAnKY68+wYpOrPqh9FMmTXpsP+iEJw9xRK6Yk9MnYOlwn2ZcET7NXfRR2UyIlzGUEP0zltrNTdpj2jSEfMzySMRRZL1D7U+yoCYjRYrna6clbhxISoj1U/DG1pWNQHi6J+BIHYpCLdkV1kZWdOMazq+OwO1hjsR7NbY9Ga3OFaUfAOQDvOzw6fOdrX/vaTyXGDVcstkTtaYBrrrnmY0c4uoNoOcs7vn9pXi4bAURJXUIFlNCjJYG1BiKOa5ZFmwg7JQCkt1czh+g3s2K56ffCOblxUmmOy62+OTWpWkcQd1vKYmfoFrUJutinttrJSeTX0Nl2wkZWH3mCHs4jltT+lUqkmT1Yx2JZaC1xl9KVsQSkN1wrZOEa9Gr7Gowtsrs52kdVtx9xOnMkFwQfp3HStGWeV+qP0i9AW62g+l9lk+6or+ixMZHqC8dxh6rr5+ESTfgiLSVygVDA1Vcngc79SW7NTxHqD/NTKHY707zwJtojJBkmJ+0vVCPOeb/ojUncMaCFHiWi3yWis0R0x2te85qPVZ4NVy62RO1pgqtfePVdh6cO3wXCWQa+nIgWJS04xmMPNLKO1Gv2HKxqODlZELHgJ8qa22hBT/pW8hNAdM3P9zisrWv0FeSFdD6mWr4HrP+KZ128LiidT6vPWgQeP+yUraDt+5V6fbFfoQO9370Gkg8O3+iOuMCu2E2a4O2ve5WwF96nUTzYIc9pdrNg7kO0fTYVrOoDYBNyOFoZE3/1VbTfjpVOamcrH3hqInIilITCd+9rfUavBReKYG+F1TfRQsHcN0KfZBD830BISov67W/z2IDDEjjt55pc1ounCiMT0R+D+dcB/JXDw8N3bb/d+fTD/pGw4YrDvffe+18y86sBvAq78Nug6Sq6LKAkV28WGLh7WB0AN0mWISc28wLtdB6BjezUDkxosm2FppBbN6Iv6UxMs01S3BQGeeLB47qFo9dnB86sC3HUZ5ydPGVb2/Z0/VPkJtqetiYEHaPPVvQ6Y6WcoI2whhWGsttT6d6W3fxs1jjRDxVN1a34Kdmksl6X6dgnh9nevTREw4JSPcyyud7an2JbQxemNGeT3sgTxuZa3aT87El66INgN6emjcrTLtVxbQr6olyMQVYe1DjiyxVOF6P92HRau4CV31xFtrf6UAqVrsomHrXHmx/+1rjK9iKGxuUOZDGb6UsA/1Msy1973ete9/uVb8PTA9uO2tMMz3rWs959cHDwl4j5/QAe9t9zsyDTTHyGzPyZknGSJM2269cRAqH+Jf9I5Pm80hzjwXMv6W4RBfDKzo0EzuCvTJYFTY9Tu8vVMBCYC59E8l5PBR9DvxCsX6FL+drVP+lHlBbf5a9CSNqVXv17EphIcV2CPDheSxWl3PqUCbKgNjyO0FiKyX+TxLT90pSxlUdaXIRLv7jebgwmHXHHbUZjygzr85i4rOjbqW1szbGYEfiNFou7uRhPox+jzVySNKGPHdidPuzvuvxFhPnXNAD1ObKRZOdu7GBfg7XHWWPM6/4q3f2sJJgf2Y60LM6plTnLDBCImfA7y+Hhj//gD/7gH1SeDU8fbIna0wxnzpx59Nprr/0jOjh4M9HyHgAPQIPe2DXLk78G0TZYzWLrKHztgqawwM/G1/ESVhf9KNPFZscqIcPVkUbDIMgE/544hO+VQvShKfBGzQuV6BlttsUoiCSk/pmI+kfLjWxve0bfd0m6YBgfOUyn3Y6uTRSesNOgZV6n1ldrnXwVwF5f/91uCXuJWbHbZLvGoYyjKla7q24S2dTndtAkIhGyQAtDtGpahMsuj6Pxkxfvm1zU1KFwd8ST2C8Bibe2AWNecpii9vyajW2jd4jzg/XcyiOP0a2WhfOzkozcd11zyP6pnFdRmRR7ujWja1uMH8f6YN5V2wdm3gF8PzH/291u95nt7c6nN7ZE7WmK66677p7lcPlvGfw7WOgBItrZdvm+ICDBrpSN6NsHpIBuYciLWEOH1hniWqJzXjs9MEdV5RkZRHrT3n0Lq0OTWvk0jLfXKlKgXeGBarQFLi5K1ATsCdmYmVdp7qtA7/pGIEw1LWqTBusm/WCYnxqQZJ8tNdo1Fx071rgonlmrYyIk4VoaG1B2Rln/uduNFn1jOzUmUPqf0SR+HWwXz9itDpXt+2+P4iJX2zUqyclW1Mj1a232VBcRd9ap7IohuLEWUPii3GRv8Le9SDLp1BeHOHxZsnBmRtcfzieE+iqqfB3/rC413xqf2D7GlDA3PuVZZ8GOCOcY/F46OHj76173uvsqw4anF7ZE7WmMU+fPnzsk+r8vwLuZ+X4iWZr2roE1aEwYkq2OJinKKAusJmEjqg9aBIXnODzwxarKAoNKvxAUGzyQx/WWeYqlFoglEsuBx+wI/1qDUjwxHg9TwZBF1WozMyLWE3StuJD3+Y8AwN6oDXZbG7z+pk22kJk9tRqC+q8SFF68Qu9ANWEMCUgsrypNjs1/kSEel3ZG30UfdXVOlVpZMaztv72T2cZjIwd3dC1NkH4Ox9V2GjbENldbqe4qR2JEeO7N+OO8Z9g4X1HC7Lu8pmc8S3kSAwT7yD7HG3Rz2F7SMRGKPkwno6wWGYiIiej+ZaGzRAd3/OAP/uDHK8+Gpx/WxsOGpxHOnTt3wxNffuz/vCP8yA78TTF4kwc/iyTzAunBZ+0h9lTQyCOMNAuW4Y8cDnuSfNqtmHUjync0b2AmxuRroiE4xgvHCQP67VWhIKA+ZO/uCz5gC/hWFI+CnJVnm+a2stbbJVexj+oCqqVghu5U5A4V/831xX4ZssWvhurfWEXVHfVC9WrBPrnUxiIXoVZONNZ61xIb9wNC2+rFQSOb/bHWliEXVAfZXs55y7xkhG5ckXWoXRwTmz1+htJFLL/QIQ4M7E2bhyopT3Mg+lhZEk0sBbyfAhv19RGv94Hx+HHx5Zofej/W/ehQXzpXebdXbazzJyDOWSJ6gJnfc+rUqXf9wA/8wN2JccPTFtuO2jMA11xzzd04XN4Gwp0E7OJtIwsBxCG4xzhfAkcTRwrmy0FCjlfpWIkWu2q0m4JfgQe9fdjH09HqebFCLujnB6kNtZwntnknyiYiB59nmaaiAEJe9GI32N8+ScPgqFuEe5CqCmJuw6jUTyftXRIQjif+Pai8VQ+XW2kRVk4rXvb+qC/cWKJR22zkdD631RGcU/0U1SP613i7Pk31jpMuiQdJN5iPtMjRiih/et619iOr5dFek4uMtW/sS2FtflRmzE7JLP0Or5HS3wKK2eoFgq19qbOkPWZvdFe0f61/y2MqXyKi3wRw9lnPetbbtiTtmYUtUXuG4LrrrruHmf+AiN5DoM/lx6IHrND+OhdrEC2Lea9lBQ2vBG9aTRJS/WtoFnyHBsmKKagWEFtQnXWzLgDxQWqnzUUzGoY9pihUqNxiMkjCGleouS/3QSSzs9YSGwOHnRVDXItiO42DjhkzLsIsO7iBN/dZdbyUsN36Ciwc6yxiyV4vmBte2+nlVUEjW8ErffhkYBoXBdzcapwGTBnTiTx3gxTXpLaAuH5r3wCRZI/m7jgO9enOPRg7W9Yet6P0X9SbbmvvqSDNCdNf9Ka+DbR9YcoR26r9RkSfJ6JfPzw8/LFnP/vZb77lllvuGVwbngnYMyQ3PN3AzEf33XffN58/f/5v0I7fAKJvYuaFNOZIEKnRbQQnWQRHucuVgFcXobgwdQ9Wr+mPNDlZkW3KDWttMlR7RJ+eBN2x2G1ipQcM2mzTsW1BrrPC5ffdglZatbcuJhN8VQxFK21J7cAeut4S7Wpe80WqE8OeqU4MObb2rtgLU+NOWbHXC2b5HSB7qFVvaod+BJ54uzuO7anOevsy+NBuaZv5kSZ/x4+RJ1lDsGuiQdtrX3sREjcRm33FUJvkCyKcXnXH+TzRhGHQF7l0ZNaXdcJ4pWC3jePOl06DVSAge5PYGzZ84T6Nt3E7m4NM5Kk6DYOPx8DTw8A26u3qFPqOiP45Ef3oa1/72n/hX7e04RmFbUftGQQievy666675+jo6K0g/CIYDyLGNNKPEgpSaAiBpEYMO6/lpAGIC82CkusvQcrBFvAaniCb4qqRCNMuIII9UJXW9L0LS7Q32hTM2hdGsx9nmwDW/wbctj3Ii4Ie+pGgf2OwgN1rubgWROwlDsR2pMWu7JpZMdRfq34NCyNVM+y2mZ/LPy9q6otFWZfK0qy3mgToYl6LzcbSBR0fKp9Vaf2X/oiGvV3L2VfrYB8/6bvJvPEDBGDZs7NlfbVGh/IYnckSeikk1iRQ+aLpVpYK7FBfbqn17sg6QH2BITdOjWk/Uqxy9v5iZGDdIXVelnEuP7BO9K+Pjo4+uyVpz1xsidozEC94wQs+QQcHH2TC7xLo4gaAffGuWT/3wddFY+S8uiWju7VIkzFPrEI5NLyyLhQsBU6mcO4LVdURGmCkscge07qQVA3QdEvITK+LfIS1r9MYUReFAQbHlRPYa//aQjkh+Kh2gaORt6Iqk0dpHkxRRgoCve5G2S2lzq/VDRFdA+x2bNg59GrVBDuP9l+AuwW602Qq5K8IVT8Z2iFWoUkclX9Dab10yJj8t1JWv/MsIs1P65+YXHZCKxBVKwLhYtFbVFnXm3pixPbHulK9e0AAQMQMPrcsy1lmvuNP/+k//YnKt+GZgy1Re+bio4fgt4H4PYDsrDlovopGE2TruaGWs8XfGqU0Fltgq9fCFthErmR5TT0RRpO/UrHz24IUaqy6sq3V8IFuUVqF8Z40YkcofxW7kOrXb39Kgqi9lHwGSIJX2zklTfEsLPZdjVG20j1ZKOUw60ygMsSkqPFvU+Rjy74cGFGtHricCQclVl9M/tYxj981uP8Q6ps3uo/VJ+RJKoHVfv+2VGsUIadoWmZ94/7iMTbq/I6nTOOXBDq4TsaUYU7NjAXRV3oeazbbghvHGIuyUyX7kdjLeI3jV2KMnLVVrHQPAQ8utJw9PDy8ffvtzg1bovYMxfXXX3/vtS960T8/ODr6hR34AyA8akFrJE75XE7awxEIm8BDLAwNCRT11AW6BNI2prbRr0FZ6MhEdYHtbBP0FZhdtb31PGHFdwa3qcEI/Bls/RPzgMAU+85uDXXQLvLjhLoYHgcaNnn+14FyZcbGBNkVKXLeVj1JJsUGAKu3+zpTavJhulgTE3i9jUJFR5nqCkzSxp5mcJ/vSV6BXtawhwTYmKhtN1q4/Zj8G107d1NCih2xnqZvUx0rNu1NiBmrz0QS7EJF5L3Ne9TtQ64jeRCIdNKzxiga5oRCAESPMvMHiOgXtrc7N6AZJhuegfjUpz71wvPnz/9t3vGtRPQNvPNHoB0ska4NODUY+xVxx4tA1wEYH7huZfbR9S5JDYZscrbYlu9HiirrFbxB2tzTndYEYTmdy1F0ug0rdMBWmOLjPQ+er9pqxx1dCOFh+SEw2RPL/STTM22PH/yk9J3S9r5csrdO+aBS9ZA9xqY13ap3HJd6UXTHZKxpI8dEMLTVXb5i717foUT10JbJVsO+9nbjpepRvloexxrVMYzG9q5edca+NsNkGfYx/gS5+uB+pdf2Wv+EknS+zyb2xy6yofHMfTLs/jwx/VNecPfp06ffvr3ducFQp86GZyCYme67777rn3jiiR8n5lsB+ibmHFY9oBwXuFd4EINUQ5eSlQDsJzNdErW53AKlsgC6EEa2fW2C02fdiPbqHwvqOE7O2rOP3tg05GYa9sg5zY4buqNZbNJiEmR5T6JhdCWstxM93fuu6KT49p7ZEujpDUuSbww07PNf9I8UZJ4k64VykmTX5CDlrIuz08yvSk/6w/hlpZ8o2UFN1OY+rZjezuRQ/1q/RoR2R3pN1BI9tlvLp7FWyky2vvk56cRsj7fFnZN33oQ+J1ZOsyff1J2M4WfWwuQnrZusLVbe+o+xMB5h0K8uRwc/+3Vf93UffcUrXvGVi/rs8IYrGt2w2fAMxX333feix7/y+F8m8I8w8HwrzwtODjyodLtSLMGJbL2IgTjQ5aBftOVAPxo6Y/529kizxcaqTjz2WQkm3+3q+EEh7NlBAUbb02IUwIFnokU/1HoVDFlojFr7ZT1J42BcNFC/fNR2EkJihqC/LpyRNvnBZPQfwIg/J510qpyrijohCtxdsa3M6YH0TAvysbjw+C8tGE39ar8Pahp8/Nl5vCBo/O8+imMF8y7pRA/+qLbW9iSbiv+NButxBhCSkMjj1QRfVNT5EWUrLfLIQdBdEzWI3V3/1vGW/IEsn+R0fkTYmdCGPU4fHTvsic/aFVscKRYoX+3TYdOOQP9ywcGP/pnX/Zl/Vlg2bNieUdswcO211/4RHdD7AXyMiM47gUOwCYGsxkdAeOpTInFx8rJxOHQ3yLJtjaskaq5yhRD5+3oBITVqk3xSlY6L5KRo9d00V9rSQ2GksxbYwkLa/oj1Z9RINDDCyjQUkf3tXLW2UGHdtdnGzp5QZyUA+pySUJqhNb01OI2DVqmC5YOr+eVZxqqCURITZbBTtttuhuqbQBRdweZgzF7bO/vC26/J706f26LF+UztoTInjpcd4DA+HbHdcYfW+AvPiVH9C3WqjgcYix4fW0XT/yZDtaCpfuoXHZ6LNPMcCL9LR/SpIbFhw8CWqG1IWJblY6Dln4D5U0Sy15GCWAhIHnxKVKrnUqh/S7LnaBOIObBXNkITFQsIshp1Nax+f5IX13dRA7cuJKvVR8GaB3VyyUeDXn1gqPLRlrW+Wd9VW6kE5vRM90UUa79xIZhIk8OqgaOoWrSvnqSmaaP5cKYUkPR4rVtIUhqbED0TZazcduBiuR8Hmv1kkutLSY3uxmgik/2QM6dqd8hXW//FKhD8ZGUcvt8s1eNK50QwIcw7s72an05DPV1CBfNtPG/a1YGgbWp2tsBmYCiKx7ojJiejPP2MlspUP/iFK8s/gogscmvzARCdPTg8vH17cWDDGrZEbUPC9ddffy8W/B0Q/l8E/BoBjwAhFsVgU2DxawqC0LUzEBKPR/IR1aP+ITp+VgYh8IY/PaqxqnAE7GZ3y/RS3R9MBs3l8W8A14UntNWwtuCslSdMDbhQWKPmyuQ25FxuC874VxuElZTnBLCfKwviMdmarYn2dCuxwEzdB+mfwUdaIUMfmJ+bqUWFoGNMKLNNdUGXOjqM35VNiUDosqrLSKS3rfcizrvIW+0zmyd92vpSbm2OxTwPe6CRhfKyJade2NU/IBcigyHNOTRtsnOKJ7M/J7Fkg5xYUeUFVgp3eJSBDywHB2/fkrQN+9ANnw0bcO+99545On/+OV8G3rzb7d4A4BtSsCyQAM4ypJpFnTXJkrU884yFZ16pGGGUstWR4YvHPpqcAeXC2EPsLCoLxdpzNlEgHup6HH9ax1jI7LGy5pkl40N81inK7WlnW2+tj2h9V63RbT7AtDgN3XJbTx29k07eZy+rbLXVaDI8jnlDD0W32dLRomxjDwrdnslzmh2Qyhab3KcrdTKk3BIOjvU5c+OL2ndKr7ai9E3SHWxirET8Y+qu9El/mA0UksZu7kyyjb9gssbT0Vb0Vlr1cxzLlQaMZwVZE8Tks71+KD60vLwbTwSA6FEw//Lp06dv297u3HAcuqG6YQMgQc3eBn0zA7cS4wzzbv615RCURmTNLCEc14Kw8MwLBozOSu9oWKcb0u0HLwsFjajTW1ojZ4sF1BZjsaBfZ1vhGeWjLaQ0ryYEfnNLEmt2UOoit4pQrxdp3Qv3srHvPJEI5XXh9K4krUtd4GpO0tdeMPPtG0trNk2+V6OyrYHHjJ5k+4XciqRObXOts2tv+Oz0evG+9iDbNdGwbvcoGPaxXRA0NKOPk0xD+Dkn4p4++m8PDXv6cJ89hvjiRplbU53Go+U+xju94eLK5KpOImIGHgThA6dOnfqpV7/61fdub3duOA7brc8NqyAi1t8GfQvtdu8G4TNEy/zl4hZmCH77a4pjehuDU2RUUopsGW1AVBwb3VRWdOR6WReMvTC5Fk05x5g8bvq1YdjbLIi8UTPrh+sIxKjWySu3pQ39ywQK7aMKWXy6RkTYG6K1tEks7CA8l2Vw+1fsSOgWVeiiWnmDfFWd9Ha2WjlpKTdKmsbH+oRdCmYfz8b6+Az9ZVVEeydVBk2sJcHoueZaG/Ds56hN7JxfUpF6gwMamAjrrxYkmj6OYL+KUX1mp9z503zXIZo0hyKH1xn0TOMvQsdcaLX4P9ewA+MzAN59FfCWW2655Z4tSdtwEmyJ2oZjce21136SDg5uB3AWwMORZkHSwo0HKeeoBXMmsSpzEkShGpxt54I1kAaM8FiFKnqrfFuxipPVdXxqk6DJGK8sHnExqlVC6bawdPLHwRb1STfrR1EaF0/epQx12MoAYsKqH3kBnGpUev8wk/dbsKey1XPDtKB3kK7rEcdQ3BWz4qLf/eMf8ndamomm5laeaHtqh992VsRDT6BqhVKSzI1yhX2fXcTqF9txsnK7/R2fF9Q21lhBtnsZ2wiRlWQnt4Axj0cHAUxh03/iGwUTiUYDajun5y8nCL2OMdIPJuwAOseEsweHB7e/6rWv/WTm3LBhHVuituFE+JZv+Za7Afwmdrv77G1QaECLi3b33NEIfk0ioNAwN4vGKF2E4280SqTPdMDKZCWY6u74TwheCdzEFtR7+sBK5SvF08JRQIHHEqHOgu72JRAX9Q7zKwExYaq0FrZem41OyN9oXxe62o7O+ml4aFuSXKwjlM8Qqveg1R+Epu618+K/Lqk01P7kji0ULl290LaGl2Fchxas9nc5i96qfdBrCKhZphUzpeQ2sZQGU0hgzWaGDK72x9y1YCpnjTOmuzCYC5lmG4DmXEGwDlgBaV/ENhHpWFyYGA+AcPaIj+7YXhzYcKHYErUNJwYR/Ute6ENg/CMi+pyX28FKkDsOLm9RtJRLTNUkLtA5LCrdF94KxhV54vC1ZU1uJsUw3eWjJ4YZU+I+h/WuLpb7QMgLv03qC7HPdtQmGbXDkr9aLpXXhowD3/1ofCk7Kfu+3kOyOyOnWqo9wWfuw0g8KWrSEfvKk1lhqCZ09TEG03o7exynGxBC415BvY0eHFNc55dIxuP6qPw0VPW51m782Y5wFnfWMOuhULeR4kVaNqFaH1HGcHFMsrN2oJVFXxnYP+Zihd+u1eYadrx7BAv98uHR4Tu+/3Xfv/3A+oYLRh2OGzbsxX333fdNTzzxxHP4PP848+6HAHx9CmqM6TYjNEazDbiS5bBfSo+yGKB3FAJlUb0juYKWMLnygDHmOr0YmOQiTajhah+jPXLbqdht9Yb63PxoE6vFnb3c2zToc1ukTgBBbqoT6zsshvSQtuq0thqCmfKX5m/W9wV/zxt60N0PhDdRWX1LrG+oruiVk2EXo0SzQEOR62yC8Xij9MDaEUiL6rY6XRXrhxZ4W1ZoCV073YZoREmctCxijW7lpLvgTofyaPvteTExofgqtNf6bAnJImk9RvO2lzwNCHZHeyItCMz0uV1Wf3xz00A6pwACMU/PxAFZpxepT+Rk0GKd0PG6Yu/nmej9p4+Otrc7N3zV6Ibrhg17wcz0mU984kWPMW7nhf4MM4+d2SbYRTDW6JJoSdS2Elk0WANt/HmkIDaSj0KMgZotKQiwINwlRUb3BSdWYcFbFzdZBIaMHOxZlBHkO3qgeVHkKYsCzFaz02w2VckPTUMD4sIssvoMVLHJdO+UXhf06Ae3y/TbA+I1CQhyUq793ejlJkkedWZbjcYW8Dr/KU/0H6JOq7PKHVNnLhg8U38a3Yom2ZVE4BhZ3pdEsHVk44+of42GUW8zMwH0PoOJcZ4/Se9OElLqkriil8kV6iMJQlP1Lu/ztOsDQ/f7sBgycqx/wgUbwhgHAFqId8wPEtGHjo6OfnJ7u3PD14Lt1ueGCwYR8VXA5xj0+8T49wvoofjc2hrawOjlGjxjuSVoztcosKAZAmkMzrICBMYILd8XPqkGYARVWkffrlFo8mv11PJOXeXpQIy0oLiZJ5AdOyDBbgIWlh83rwvxjqTdlsTFOqrvk/9CH8ozPFpRAKuOnZ0E2ALsjPNhC8o9ApR+c3pmnPt+BVzkUGSlUY2VMQ9aqdf8OIiZNFUc+GVMBFLc2Yp6Vo4n3ROkQ4j7Z8kI463N+M/RJGn14ojKGAKXFyhg/UZuC+y0a5f+7eZFtX/ALlbkLLXB7paTK9iBcY6I3nN0dPST29udG75WrI/LDRuOwf0f//g3f2lZXobd7n/LRG8EcM1ut1sIZWGJgW3tCp0xonYDTxQauohqcA8seUHodUfZVL4iS7AfZO71QXUybCdKmOritCbvvijtWbMngo/ZpQLGItgi1OtFxZ5Eg7ZzJgFKP7adCLp1obU1sat3bRwl/2DFD+lkRa+huX1W6/TiFZ6pz0OdjBJ9jXYS2dif5v/GF4xhj7ut+kn7h2ysccMTfZnzFaDsbLIl8MZQbDceOej7sCZq1R5t2DhUkNmu9jKGj13Ebh2H3TY9FXS3oDFkU1nEaMuOiM4BfJYODrafhdpwUdANuQ0bLgj33HPPjU888cRfAPDnAFwN5ulLcdeCs9Es7NZFx2DBtQb9QRsLTuQw3Xtv/6zpRGOvLyZZLgXvZEDWXfXaeVqUGpuivX7br4EltL5QFdv2JWri+7p3NvqmEqKtnd/lQNtZ8xL3Y5NQrfm+tCXSU3mhodKLTYxqnPLEohWb0jiyg5autaneyR6oDhuvUUR11mTJZdbqhMruet93ssB+/ZOfoYau0Tm0r9pW+v5EY8IL5MN8JGX5NjtUzvtYeVJ7lch+vNKW0g4g+ElliIiZ+X4ivPfg6OiO7//+7cWBDRcH263PDV8zXvjCF95FRO8kovcDeKzS15BiL8doGorD7YuGPAfwAKN1yV9dCPahq4IpEOIOgp5Huw25yvF2YZJlTLcZEXlofoHO4GuJEju7O1hWzfUNv+jftQpNttICqk4k142bWMH0vQklYA3dh6bSguM5jsExCua2hAQ7mm+3fknK626Q+chuFU8tnwoGCPk72ixxSaBRF5ckrfadX1BYQeg0Vvs7dPMhnkbaannSrcnROIS9lWuPSFRTWP0BSCWprV6P3Y638x5ZViYlEz5HC73/8NSpd25J2oaLiS1R23BR8OIXv/jjtKN/B8KvMvCFSh9xb6wUrAFPAnBdAQRkOwmM8SWzLfrgfCEJWYZZLH/tTE1x2EIBs9UIzP69cXENEBrmXRL1xRoqLemMpi76TFCw0xfXleTG04e0+sS+meELLxGwjO9gq3Z6G0s5s9gzPf2mfFS+k8pgSUwlJd8DDUdEzlaqyauyZbclNSv2g2owX/hzeSpbWB2x1tR2bfBa/+0FQ54TC/a4FrKPYFHccHI3xc/ia4ImKrmcpYOTTPyLYAfpm6M+TonSS0TGXN/UtO/Ko7SQsbyWFJ971GN/Gan0xzRmS190aMbmF8C48/Do6GdvueWWj1fihg1fC7ZEbcNFw+mvO/33T586/ZcWorNE9KA9QKvrjKJEOAvAdlUqT7g1iCtIg2YRo2ZHwODlFukLYlLI4UfGLVGQJKzZnmCxhbTRse1kx36QxWC0FXQLNYUdGEn+xoPWniDYH/si2LiIBdSdvH3+I314HN5kOSHtTzaC+nda2CjYN4oGWPxekewJOkuOOcH8JCf+Meh2II6coK1zPlKdCUFWmz102fi2oq4dVZ+h47VTr2gdfju8EhCMtP6r1YWfQXIzlcGSMb3hmPqGYlutbGU8sf6E1Jhj7C8mGLsdm07Wr3TZ6bm9yWS5dPxy7TFvTMM4myFtsfEy9bHCNUqMe5BAZ49OHb15+wqODU8G+rG6YcPXgHvvvff6Jx574r8C+I0Art5h/es75EiCoywYTnJwjK/d81D2uSJrgTvSa+JVE71Rp9oWFjI3xY6iqO1m7XvOhods5GHVaWW5LqWRVzAEnUee2SFZQMYCFWzqwQAIzDsJCGU1Zcz1xcRIZAZPbKf8netNPJFeEi5m7btA29tndtz4H27SPFZSk5svTx72BtkuOVwZZ7WdU8IS5BjmVCP1z3J1NFT54+pVHeJoGt+JtiKPQIvJuZUTIAmptaepm8mMnJ9JjbpJWESv/hWVkshZedKp9bmMzaNQpzDk+qQo25N81ffrjojuJ6KzAH7uB37gB+4dHBs2XDxsO2obLjquv/76e+mA3snA+wCcW0C7GpANFtjDWUJeWDQIxxJqxRI6cgrwnWGOkaTBOP3qf9a8T5NDd5OqtDXFF6tK91s2lWIIz3tFHj2sO1gDUi6uyDzl1EFxx6OYk0RsMQ//Eq22JXUufGcz1rNmk6HuDBpWx0oos/5dQ9JsOy61uka+KSoYHGT+DblBrcIwj6JS2VqbC0h3kWo97rOgw2zz3Vm/tSiGsv/KRdbmcjZ2eDyhyGFHTZjzgw5Gi6bYHHaQyCHeNo967S+P46gjyuyDJ2mgcwDet9vt3rklaRueTGyJ2oYnBS960Ys+dnh0eAfLD7nfDyKNbzW6KspiMIH8Y8aKSkBpNRlQ+CJbyEw5mFc4+woduhBVpIWlXKFHtLKrJ4JuQa1Y31HD7IQLRZMYItzerK4mhi+qrc2cfRRvja3B/GuJQMRe2WC6sK0wh9tpXnSMzw3He7fncNUnqGMd4uM1H/gt/NIX8WLCfGsJ1Y40DbN+UnhC5Q/2Zzk/B3QHeMhaXRx0cnfbHNkfsV2SHgaBmEwz3BfG4vY0cyO7a5wRERPR/WCcPTg4uOM1r3nNxxLrhg0XGVuituFJwwtf+MK7loPlXQD/EggPeygsC4YvAiXoJphwpVs5jxicQJDnWWp5qSvJqa5xkrGW4JHRyM72YabPexCq0x6arkTFqs8uACyOqsWrOBErIy3iUcTlKfsxufUkdVQZwAVPKC4JRC2EbxTtKSjQxLKu+QwxJiYqE6pM4LV9p0mU5WMt13WoXWRJS4W3X8Yfa2V2+1ISuVrDbFOaT9opbX0qVzXC3WDPf46dMY8R5txGr90ubetcqdD1hzIXT3rSycPM/EtM/K7t7c4NlwJborbhScWLXvSijx2eOvVWAL/SBcrVhauLq2GHJdNG8I7hdCx0c/C2xZllJUrwU5OZDDGs74odj05wXpJZF6C4cFdJWxT9uaAC98O02BrsTbm4soaHw/clGBeAahoDvktFsI4a1Nhntf9Q+jf2kSQa5eH2Rp7Mv6lesQlmX9duLUsqG9cnn1ViX7QObuzUOqT3etSdorYfw8svo2wc2K1MBD+amjguI2qZDa2uHwCxAXZLlKRn7NnEWIfforXkNNRjt2HjC0miaYChb4SGxFn6WZ0bmHMb5ISIvgjGncuyvHXbSdtwqbAlahuedFx33XWfIqL/mUD/kGh5KH7xggVdMNKbWhaECRZp83d8+bpCErzXoKKZw4J+DMrjELCFZZwlWldkC0JdoC4Uuqfh56438ExVTAU9mPVlhAmy0BPiqls98lWAsPrm5vBveDtQq4zlESWPTP1u48hlqnCELdRaV9LrhdnxUV3qi2APrG2BHkipnjy+ApOdJvuHEbVZmS/DmlJ1R6TkPiZs/pyZJj7eiOGeWnc9RxxOwT9yYEyCJSpWevRRJEHrYuUzsPl/nx2QtkW52pZJHpr3Ez3EwNnDo8PbtmfSNlxK7JnCGzZcPDAzfeqrYCcwAADEEElEQVRTn7ruscce+6vE+LMArrYfc4/BO/7wOkMXBluEwxtuZIHZOJvgOvQqsQRnk+UY+Dvd4c+QE0mTTeWuoBhliYTSuJmAq7IKoc/tTXLms0izY03W0k6LGmX2dLLR94a06Db2smqtcjiJ3qaNhlVZIumT+CxZoO9i4h/spdIWH4GhX82m6BvDmj3R77FOUlsSVtqbfEEku56Rj/Wjq7ehJbqde906NpwA9wWx7FjFcWNjLvZxHWsIY5xJXWDJlNYbzRWePX5Uve2YMRqsolCufAtnu6zc2uJyxiDYAbifmH8Jy/LWLUnbcKmx7ahtuCQgIr7++uvvPTg4eAdI3gadf8g9R1+ypKEuapGT9KPhadYoxwjQkj1Fvkl3QxObxt7gWj0Jtiipys7kugBFps4PiOX2N7SnytTFVgrz4j7Jxh2nE4BNX/y3gpgYRDa5PTULRpsm+AKsGXHg4aS/Ea5GdP1abqdW2N0zP4/EoCnqbCxx1Loodk6U7cpWUHVC/SWmi9+cRXctfYyH5CeOOdvZ7HQDYhTrX8I8lri0xfR5FYV/dQddx+m41BuyBCBeHJHVWXfbFMFO/e1OvG8HvGNL0jY8FdgStQ2XFPI26NEdIHkblIg4XT1H5nLexNO2DLZoKLG7/eYBulbYYR9Po1rQC/WlA9OioQIpQakLl503yusiNyVpClusU1nPClQ7g68ryL6RdA/im6FehrzgOkJRtW+yKaKeB0T3yXFmzn2SLwoSjW3L9HgQT6oyKmFsEsWi/c4l/zgeyjZ8MNNa7OkPA+sO2kQv8zLOWZjqtu6qKKD41PrHdLE+QhH7fILKkLypfj8xb293bnhKsSVqGy455G3Qg3cR4ywYD/lit5JQHY89W2fAdItFypqFo8NeprneKdEKyInEHsYGKZltRNPOgYKb3YL+GTVbnpN0+CPHUVd1SzxNtK66sHjKv30+LiBoxjL/LqmBweJfq6c2q9re+mkeLzKO5ttuRq6oZbWOiaEDI721PNVd+rNWcWwlugPl+kex/h1jvPNT59BaI4Vd8WR/OOb4bBkNQ6b2Wo3BDj8m80fY+VR5Z4/+ijpsPFFq/ENEdPaIT29vd254SrElahueErzoRS/62OFVp34OxHcS4wsSfZuobFghSdCuq6oG+KIzqfCgXDO4AFmXJ6wvAnYgqKI1ganVmslxoXKanffrjBfsS6bWUTUxoIsd68KVFtKC1V26rrj2U+Ez++W5qZUUThfjTk7IefuJSlJek43ZTvmFh1ycbYkq3Obgf/9rTN3u0QpsHJB0Q7J/kiu2u5whJqyh2GBlaT81MBLCT46pHdlf8y5iNLH6fbI/Vtu0lQvPiRBuxyZRRviVC1XOMtb8Fq+RQV9gwp0M/Nz3veb7tp20DU8ptkRtw1OG66+//t5TV131E1jo/UR42H4bNMJLSD70z+piEEFDogjIH4btMK2vBB2lUSVIz/fMtxKngrq7Vdulf7ks0L6QjaKEjtewllRJ5dYAUWCnvMiNUVMbF257sLvWA7ejtFETIAYkEVuxxxKEbgeQhSHd0iaVGZjlUHyzhsoizQg/PF98720vL7vEv3ZsJlef2esPtW5B9lGWk5NYX22j626Uex4X+yGMQ0b4ao4ob+wUxoORwqkdW3uj7Y05npyxyWBqPlB8UMce8WhPTJzNTvkcX3kz+pVBCzGAhwG8/+Dw4Ce2Z9I2XA7YErUNTymuu+66e06fPv1mEL0HoPtpGS8Y2KKT4rAFXju1gyaYA3kh8YVBeUeAn79xHmQCTcIFW0nGogKYwfZv3qmrOcnKfpHriHrrYlThC1KzcJ0YqTEDom9Yy/a9bov6tnWQtaFvJUFkqfyY92i7SpUFNy72vjsCszue5y2xmrzsQ7dDK4SuJWOoVJGamKz5F8gKTI+3WT/YxkGoyM7jW6Rz/6s3S7knyeUXBKq8JTRcbTJ6OEao33epCqyo2uS8Qbn9IkWc553OiEh2W3bSfxQuFKx/wlugux1wPxHesxwdbD+wvuGywZaobXjKcd11192zLMvPg/BeexuUQsAlibGy4FiULVhdiJ13LEakQTomgZNKD+hNorEmxKYcZSkTWL210DjJV5AsbgsK0NRZkBbQYsLYGZltW28UsDO/F5hNDAALzVs2pIt1Lh1gub3Z+oREn+2aeX+pb+TvquaJ5gt2OF5DyfFsIMif0jcGtXIUmG+sKDjQiwI7TZUOxJ1DNWWc6N+uTQypl+I1Q+BLtzStBerniadvtiK0bXJcBq/kwLVeBP8kGu01RC4iVur1v7FvxoXcjpblHJjfuxwe/vyWpG24nLAlahsuC7z4xS/++NHR0R1g8t8GRQj8EkvnCF2C7QSCr1heZkeiew7qhm7xS6iLRtph64XrYoSwPnsSoGVR/SS3glhrt/gBYSclwWqbBTRnymVVBaPdceoWzUk2wNvrSVzPHHX4Yc8KVP+VtlQfUffdbzrGZu+s97knB4Fix7VOg/FN9WvZJGZJawMpLplRyyu+XoPvjNkOVKxTy1PZRQKt+GHcr52xtotHEDnzP8WdWYk19y87+e3OW2655eNFfMOGpxRborbhssELX/jCuw5PHd4O8FlmfjARGXsXk3aRtmDeBPV9i6VDd4RK0Tp0IfUFstg01dfZbIuH7+iNczlo9Bi90RcXrbVnvo6D+GCWCwtdJSV09spqqbtmheQJSSWswNQbuySiWdgX5rgzdgFI2jq75iqHf8xH6sap7mY3LfEo3aqIY2HKoE2Wox9mnow9dPYPOVVWL1EbFk2QnN60yWA8qYnx9iZ0zK3Io7g6+ao0pfq6Jtsktj5IRGfPE9++vd254XLElqhtuKzwLd/yLXefxrPeRqAPAfi8B9r615AWrZmWF7xw6OVVaD9Gdc1zbWFd63aSIsg/QtmeNTW2o2Ph8iwP6aJ0Utgto2lhE2JZGqtfdUdGy7KtY2FMNoXC3sqGUG/xTYm7nIvNhVTqS0lB5VVUX6C8hWr+NvnKb+cr6h1jTOl5SVqsrDuGvbE49bX+XFj1d8CoQn//UpHqrgmUHhMsEYRoKn1B+txbGgtax3H+0jM3feLTX57wXzGpDl7Wv5iYdZy6r4HPE9GHlmV52w/8wA/cXdg3bLgssCVqGy47XHfjdfecpqt+EkTvJ6LP+dug1ATluQDQ0ryg5bWqLoTr6Bl5jRIWsghZWMZ5K2uowo29ljLEW4OkHwyWh7CnRGY/ZLchVy4LG81Gpd2TUYbIqQme6WTVx2WzpC7oUW9a6MchEPgMbnu3c1h8X2Ud8ZaY/mVLVlh+gijCbaewa1YR326tyab6Pcp5HYGPpFmzetshMv2eWJkT9aPUieLPaV+z+qsZS+5jU0+zf5ZQS714If8Qm6tf0qVQpBFhB4C17e4XtbGz1SB8ABExET5HRO9fluUnt2fSNlzO2BK1DZclrr3h2nuvetZVtwH4RTA+S8Aurj+GsVjkxYg0+ENvAdXkACjB/wRIVYdFKhXbh9I96VD64rfgOGk0Pre5tDNCJE2//DU5qXqRehob9y1iQLeYDv+aSXb7yBbXmBSx/jCi1EMA5Ceranv8VO2JSRErg9djvMW+pLIyzqfZhv1uGLIxObI6mrpgKoNeTzw0AY4iXWKyDzH5SmK2e2vjzdqplcnPfszGpn42+8KYHcmy9k9NfANNXiSRytPbp9r3ciznsLFtt2YbH7gM6+7XaJ4xlARQ/hGRj9POt24DsGPCZ3fALy7LcturX/3q7Ss4NlzW2BK1DZcliIj1bdC3EugXATq3TL8NqkHaIvUe1GVm7E7Mt7PGSTgOsOK4IK6hLhieiIwPIPDVhKbDPhYGyS2huKO2TyBgSuJi+8JXQBifL+iBjywZVQePnT/VU0CgvAtjO5/qH6p7PWnFDsfNmp/UFh9Ul4ykaua1cuhbqJZ0kdla+exPJZbuqPWYCcEU3zEVXk1cTCAg7thFSAIfdUjZEioXFtn1qzYByD/BFg/1d2NXEy7vTNHBIfEyf0Z9bl9IOn1eDDalzxVKSb4ii+OOAeyId0R0jnb4RSJ66y233HJP9/2NGzZcTmim5YYNlxfuueeeGx9//PG/gN3ujcz4ZuaxnDCNhajG7rTorC4msqB0odpoqAHf9O6rlwO90jDTGWU2yv5hwprssTQM3VMyVsDl6zJctvjPmxh9EeVKfav+07U8WmV9GndkEs1PVEcsOsYeIfX9vYt5g/o/yWk7PHma7FmvUwqGvTOtkWXIh++MDp4Lq3dFDlbHsAuVJ9jsRSt1Vx8b2osQRp5bdcc7jH9Gs1IFu+Y+EpuqHIEeAeHfEdPvMfEd24sDG64U1OG/YcNliU9+8pM3PPHYY39xt+P/BMA3RZqG6xLp46Iti0JdnNfkDLJYzvS0iHphoHnZnkQEZTE6ZnFE5Gnog7Zirx03ehPiwouQpHlBQN0d3OODCuNhu6V6IbJA258w+X3+wR69Kz5cK080nCC5xrCr9kn0QaVLQW+TyMotP6fZgflCGAd90i0fvJZUlXbt8+U+3VM5h8lxIYlaaVP1paEkgOcBnD3E4f914cc//crtxYENVxDqtNqw4bLF3Xff/S284x8H+M+B8Q1WzroUULgVtdMA7QO8WWQNa8nL6qIfPqtOX0P0th2pfvaHvJVO8wLo5V2dexZHBLm9CYzashel7jV7YMX2yPdMlqJGDrE9Ube1IbZ1xUfdrtixPkJIXsIi3yYnKt+VVbRtuVCaKe5sQfFDSGr27lgqfY0Gr1qf61p5nnDS4XrEHx3NVWi7Wz8HH1Pw9VRfpccxHsrJ22OEQCN6BMAvfP/3f/9PqeSGDVcMtmfUNlwxuOGGGz5JC70FoH8E4PH4bElcW1gXLnv2Sf7k1Yf1WaSwHgxaXEyQRWVBm2H6DPZw9qTf6iy7ab4Idcob1D0K4hXDgs7ugXDBKG+/YDYshEmDPvC/CgoPmncYq2o4H+xTfbUtoe7qt6YVQdeoqCZ7QBamkPzXcVH7vBpceddoUr6nLV2fGBr/pzaVMT6115JP1nrUJ97mmLRDkzjtUh/jpS3x1KSnegNiEmaI86HS9YUAsTn6VNuBUB8BnwfwYQD/gIj+u8G9YcOVgy1R23BFYVmW+4npdwH6Bwx+AAv1X2g2Yc9KUUCI7HkXxRfckiSQ7SwYXZY1V2QLByMunoNG9hNXzaJlPA7lh5mh/NGGUOxYX/BDeRFyu9Vm43S2tjC0gTUXqMYg+iHDVDLL14xEHLfg+3FJYLgmVSXVjfaK0ZEof4jyt97HPuXGtswrz5qZWRSr0AzDx4/L2EG1fUD6eW7rQKWGUk3IjC5vTcqxVx2+IJaw9q3/uYbUbv0bEy9DVOVjN5zHv/GYAZ9/yR6yXtXbuESPgOjDh4eHf/P06dN/fXu7c8OVim4Ob9hw2eNjH/vYi3a73V8G8EYwrmHeLSny18W3SVIsMao0UhpD6PbFmhQeON9BF18jpEUkLHRB/7TYdrf1dJnpFsS0yO3C12W43JCNTUeQZZYvQs1JmzVCbQ0kr7OzlVQfQkWBJgfRMRkMc6r6x87NTtDUN6ht6WyFKiuyNRmLydJxfVP9YD4HyViAJw1DabLTeIJZ2V4rbGiQem2HNqWYuhOWVBVZG4M2plP/u4+Gr3flNmX9HVI/jH0cp0Iot9upaOyKY63S4vikLtFf6x8vwI7B/3JZlh+95ZZb/lmhbthwRWHbUdtwReJbv/Vb/+jUqVO3Y4ezIPxLouWRylOv0lvUAB8XIjvXu2y2EO0A/2WC+k0BBDmXxU3/GS0q7hKQ8FkRF6K0MIekkM2gsvsVMSdpGE4oCzKqzQ38FmTZYYxi5B8DwhO+CFZKw3FxbMHchopMTwu5GhTLknnHqVaYDMU2NrK+uze7NyG1vjJqUjyNm+z6GcwQT8eicBa3ZK3IPvw25godarT2f+RivbjZ1yY7JaW5vNpH4fEFS6pNpv5QPVSPzo1HAP6XC5bfPTw8/JQzbthwhWLfFN+w4bLHJz/5yRueeOKJ684/cf7/CObXAvh6WNBGWKDXrsBZP+oikuh6oIuJJGph+SuyUpR1Vntk0c0TUNhnW7RUdsv89tTMt9MC4pKQxWSuLvRSCujOhzyjlsMC0+w/YOgVc8buliVqdk7gKb9I/k2JQ2lWSR7df2DUb9VLyViTdMJstaNCt9us1LTVv7oj6E31GdbGGYpNsZ2sH6ZX6Qkr9TLmHS8rH4MutLrqhdDDUJGiNbsDzcZS7Eripm3KN/puEGMfjjFhDR1NMLpqEtpgC0bw50H0YSL6u4fnDz/1yh945fZ254YrHt203bDhisNdd931H/COf1qTNUcK/mGxybSwOERaXG0iWWkxUWO7XWTJS7ktRzERUP7WJqjeJokbidosZzw16UGxaR+qzTA/YE5AEGkwA4Un+TW0RU0RVj84ud6UAEBtCv0U5WJbap12e7j2GczGxr+eZFhy0tQpBX1SQ5z9P8uFdlqR1Yk5eUw+XpFDUy+autNFQ6jTQLu8I2cYNuijAcEnurM1+dHowOgH2HyIPPrWNHbjjVH2a5QwTq1z/eKAPrwcLn/zVa961Ueyxg0brlxstz43PC1wcHBwF4C7QfRoIuhC0GEkJfsXsirPxhNuG6Wr+6Y+WUT0uOo/AaS6YwTVnLSIh7/HyRNOcq84g22hDMlAWkTVP71WKa1pgFvJnJMQNS+ZGI7t5psnCaooaafB53oa41pflSStQur0+4UJyeSG3hkRxycHm6p8PY8Y4zScF5D9s93aYkqs286znvGSgZX7LXGFJ2dWZP1octWvDOyaxNbtDHzhz6Mg3H14ePjRwbBhw5WPLVHb8LTAi1/84q983UJvJ8J7ATyQfxampgIBzcLk5WQHAlse8kKd6Uarb8JV2C7GBE0kOum1BAFxIdzDV3dWZsQsry7GGb5wHqPS1+Vg3yASsBCIchhyHu8DkY//AJWPsETKzwPJds+OAUH0erJX0JUZGGKDudnbridm+5RsNkjtZG1qtUkqXBktBaHuCk9wSduuuWZOiETQ7LLb7DGZdnsDYlk9Dt0rC9GilrBs7y3KF/3F3U9dLcQ6598Lwttf8YpXfCVQN2y44rElahueFiAivu7GG++hZXkLEd4N5s+AaCcLVLOC2DoHWS0ih/1WZk2kOCw2shuwnmwdt3a2Oza2EIVzWzCjOVOVqqq7dYloM40f3p7B+quaQ0FKddfE9kF9RKqrVRF4oPV4XSGxmNpl/g+nDpIOiPVRaIN5uK1TGMafZLSctO2A2hN9FmkNjqMbvCXle/lq+1qYn/Ykhztrf7hNusMYT3HMWD/aj6J3SaInVnvqNB1GZsit7PEGrezILXqrOo5hoSsjsGPmzxDRu5dlecv2250bno6YZ9mGyxIPP/zwcx/74hf/5ON6m+8FL3jBZyvPBsEnP/rRG77M/BcBvJGIrmHmJT5jRbY46yJAmFfNccoiUXajPJFrdql80a/PddliSLogNsmLSKws+MbcJIgMbctsTkpC1nbV5Lm46IsFHJTVJHBKbDr/6ILa1cm2oxL8wFFvoxOVXvxkdDZXFR1GA/IzXzsSAW+f2uR6wssEFHbMDGbTiXwUxkBC6dNWFjoUI4l1R620MzDo34ZmqOO0PE+Z/Fzrh9Rh7Z70N7rZOjvqjTSo3equ+l16Mk6JATwCxl284HcODw9vf+UrtxcHvhp8+MMfvu7xxx//FgD45m/+5n/9p/7Un/pS5dnw1KJOgQ2XCe67775vp/P0rV6w7F7MjB+BXFR+ELvdv3HSqVP3XnPNNb/vvBtw11133bjb7f4CEf0wmJ8P5vZL933/qqHBi+cFRUs9OfK1Jy42TXIIW6R5yEbsra8sYokWbKmIi2eXNAGqE6ERVqyyNQmJNKl81ntsWzofWCKwohOp3qJbZT15MR4FpyRuJfnwyscfhERtqjPYU32UEyb9WKXPemE85gtrXwzcX4XeateYA+I38xNrYgqvT4yx+kfVfaJmY63S3H5rV9An3+E2bKYmUVM/f55AH1qI//4BcM/N2w+snwgf/OAHvxPACwEAT0jZeTr/HzPwKgKeWJbl750neujwCWHgg4N/c+utt34iKdlwyVGmwIanEg8++OA3PPGVr7wWAM7v8DLw7mUgOlTys5j5OiICgz8DxhdAhB3vzhPTv1ho+Q0AODh18JvXXHPNuaT4GYqPf/zjLz5//vxf5d3uh5n5uYCtLgN+Gyyv275QGVdcOKxcdqGcyeGLVU3U9EDWp1FvBWMsYKnc9NbFNyUaupBqQVqUFV2y1tmTZNd2RqAGl4Qo+vDYtyhjYrVHb6KpbPWfJDaxEeNwJFuZh1RObM3+8XZEm9AnRpM9NQEsPkpofITYHi76nCHrRdFdbZrqxdymxNPY1euY5dOYCrbraZJxPxtHvfgxJgPzh0D047fccssfhNINK7jzzjv/F8z8p86fP/9KAP8xMx+EIf1cBp5PwG4h+uSO+XEh8GMM/JNlWf41ET3+whe+8APf9V3fJbQNlxTdlNtwicHMy/2f/vSP7JhvAuM/BfjZoOXZDP563uWwGGMmy9c1MDG+yMyfB/AlJrz/APjoC66//h8QkV4zPXNx1113vXC32/1tYvwQM399pI3Fd16MYHRW+hoNMz0trgpXFXtzLfmJder5iRfPfTSMxbOCmUGWrQYBP1z7eghDoNf6ajKFKl98fNK21Dop+qmTReyITLRikNjMq8mjygVxSwAZJSktCXS1Z7eIEK3QrU7zoZtu5bW+0IY1X0z9BlM6lESemrhiVUd/gVAvAHK/F9vd3mCPNrrIfZ6Av3fdC1/411/60pc+FigbCn7t137tGx7/ylf+cwZewsCfZubnE9Gzd7udP8lnYyZB+mZHRI8y4UvM/BAR/UMi+v/deuutHyaq32K44clE7Z4Nlxh8331fdw74T5nxf2HgxSA8CzsmtlsMOUaOSaXBO5KJiJn5KwR8mpluP/WsU/+Pq6+++guB5RkHZqa77777ej5//icAvA6gM8wS9tlXvuJkhdBnP0ea9ZEtJH7c6K0LXJfEHCvb0LBHzml23NAT1pKfRvduCQvw2s5Nk4BA1a0lTSZbdRrMnnrblP22af99c2s2pXZ64eh3t9Vpw2ark0q50cbJPJ9ZEzU5ybIpyVMyle8Uc9qa74+heZk4M/d18CXWEi1E+6O16pdQti4vdad2mS9qmbzd+SCYP8TAT7761a++d3txoMdv/dZv/YnzDz98+gvL8qPY8X/OhOcCOMXMVMcE2n6RPgjlOwB/TET/lnb09m/8pm/84M033/zlJLPhSUPtng2XCPfff/+fIKJrn3jssVcz8H8i0I3MfIA4aSxgBaQJ1ezI7AhYJHj9EZ/nv3NwdPDfXnvttQ9Uvmca7rrrrhfi/O7HmPmNILqamRf4OrOSTOhis7rQNf4ffTcvzJ6YGN++/m0SHKNVmwyy2I2H3WvwZU1g5mTNzgngXTBu/LakLZidL+quidMY8lGrs9u/dh7bE2m7sVg7q/WJF2QavJ1KmxIwqa+i8pDqcZr2p73tGGkcAmnsm9b/jb1KzH6SRxxc+T692OkOoL4RycozfDR0u48sCVJ6fCFhsguidKp3pU2uu9g82c9Dv8tovzFY3/iUeHYe/Hki+gwz/+OrrrrqbS9/+cvvUS0bCn7zN3/zzBcfffS/2BF9FzPfDOD5TvTu3NPn0H6x8WEXPQQQ0RNg/kMC3vGNZ868/+abb35GbwRcKtTu2XAJwMxfd/+n738D0+6Hd7vdTQT6VjAfWoDV6JkDd5pMtlswGEyMdeFYgPPM+PhC+Hs74Lef/exn/7vnPe950+9hPpPw0Y9+9AY+z38RxP42aEpaqr/ts5RbMmGJmneZLTK+EM2yKSAek+j5QnoCOfjYOaZOyALag4NuEeKYGHV6u4S0tEP+BtricV/Q3Ta1hd4phY7c1lg+7Mm+MJ6aXESanBwjR6M9uV6lhzFg7Cj11j4RP8m8ZsihJy5G1/NQvSD6D01UZ5W3cVtIKP2bfaH11TETda3cFq9+rm2W8T3aZWWAlLMkxszgh4noQzvmXzs8PPyftrc71/Frv/Zrz3/sscf+M2b+P4DxrQAfsPk6Dhzp1NTnbENHBoX973maDzzmx0H0BwuWdz77G579/ltuueWLw4INTwbqlN5wCXD//fd/Mz9x/r/ZMb+WmU9Fmk+mGhgBj95OaRZlqA4NeOfBfA9A/xwH9FPXX3/9v6+8zzT426DAf8Y7fg48dhVf2kLEuksVSEarC5Evrms6rX/9pE8IAFn8YlyttA6sSRXCgmflftyOq4Cd/ZLpQDsmg3+6sZoWa4SGmJ2xli7hcuVZNiUIdfzvobk9StubqGFd3nb5YH/W6oz1OVnq7fqVIePMx0+0x/RGQfd/NFL/lLawypu9HdJYDm3y8eSMoiMnkdmO2PeA/LB68kNKCoRY7Qr2PEoLfWjH/HPbiwP78eu//uvP+/KXv/xfMPP/nkDfysyH/p2QNjwYYLLdtNFveRxi3A5HiHe5zx4H8IdY6Bde/OIXv3d7yeDJxfaFt5cYzHzETzzxuh3zdwI4NSKgQIIT65d2Vljw0mkTo1+BzEE+YODFDP5uOs+33n///X+i8j3TcOONN951QPT/BeMBLPblA/PCbWAq34KO4f5a7AuOEyaOqZ6om/Q5IaeNw0muouq5cLAE4LpgEmR3IyYEwwXC7//m9rZl0TM12TLFrm/I2wJ/HDoe80lvTYfoUHNPHgtWzygKturHaOfcL2lcFf9GECh92W3yg/orSls9jJEsuSEr1dSfiKrlse7ajjWnEsm3nUV2azNh2I5gc8JCX2LCb9Cy/OyWpB2P3W73jQBeQSRJGuw559rtZUhECG/gLnNOjgkAjgC8FDv8pU984hM/GFg2PAnYErVLCGamz37mM//JDvQXsdANO8xfnimTR+9vLBokdUYx2XcKLf4N3h3y95cDRPQtTxD/l1/5ylf+vD0H90zG1wH/BOCzxOOnpqZ1wlemUpwWV8yJCMtTt2kViuTAznGBIl2AjV7V2vmsci9SfTyeY5ohyYA84V7Asz0UkpARvO2GVeAbDAkMzU0KjfTDE4w6QSJKEhFmz2RwSmQjoYHUHZIyraD7ZQeOumMd6jNrovlFvFTGUfCTtSUl7Jost7CffFoly7urcZxN4HjLe9ZlCRc02UzjFGOHt5bX5H4CzfYEiT8G8E/56OinXvnKV/7byLNhhr7d+ecB/K8kSdP+gsUjhfqb9c3mUizHOmaQ+2N012A+Avg7Afzo2bNnXxNYN1xkNFF5w5OFz3zmM2/cMX4UhG+zhKnGTY5lOpFq4ARYHmoOi4ZNIAnqWSszHxyAXgTgOz73uc+lr6h4JuIFN9302ecty8/swO8E+P8J4MH27TEGyL4DXbGEY1mUQkFaeGSVtoWrBDgtCwWx9qIyyYXFMBXrQloRbe9fJKho6AuJH0qx6ZbkRbIMe9je0NW3eJIntLS4R/GVW7wGr98KmroMKfGJhFqn6Wt2N0dbioAVlw3JVA/prlhgaEZchu7iwW6Zdvy1UwL2kApKn8X+0DZbmcSX2Ydo2jOPmIKiiFheHCCiR4joV5Zl+Wu33HzzR9q5ucHBzPT4Vx7/iwD+dwBeoKWrY9FiWurnQBeEBD/MKxuPGGPiaMf8EizLjR/+8Ie/zhk3XFRsidolwqP3PfpNzPwSMF+PHR944K1XpxYMeb61udRgHSeQfqyGNGYixhu+8IUv/I1z585dU8nPNJy56aZHv+3bvu2naVneTETvZuZz03cDhcWpgsKC7tCFh4yhLF5z18wlzq9/Y78azcxJVes4opIsVNQdoYraVg/WrbURsgtceajR6W0i+VH2KGTtbK0symtd7jrdEauwJLvaNM2ZzkfyxtvwRdO/WNn38rGi1Jj0wO3N44ZVSPprSPsLC3tg48B3TUh36BPT6knST0TyvKT5zvrGFmtmSeTDLoyVT0l6scHczHqnQBOyh5j5A0T0t77v+77v96c5uWHCP/pH/+g6MN/EjOfbVw8h/MKEnEU0j3ME2DhzpA2BoZQ02SPgucz857/85S9//xDacDGxJWqXCH/Mf/zdC+jPgegbbALZXaYp8K4sVD7pKn9FuOrxIvlzhpl/6LHHHvu+RHwG46abbrr3NNE7ifC+NllDTpj9kPSKtXQUk4qU55nQ9FvtYwt8E0H1Vn0tmmTpJLCFta2iSXyiPbzT8aYsOQEZC7j5q7ax5kVCny2h6sMyxlM9zRxK3I2TvCjsGNg/0ykPWetD/1qBJ28mr8i2jr/TOAjJmPFRcrl+f5pQ8jhg8XAsIhX1W7XNRd80lsp5StYiwcq0fyyRS8mm1b3orr/5yYQVrIWW/DHhCwDuJKK3v+pVr9pud54Qjz322OsYPCdJcSxFWN/FcZvGqpz0MUc7y/6JnoWYnw/gpb/6q7/6zVViw9eOLVG7lGBctQPL1zbK+SrYJkolKKar1YRpdgEAdmBi5mfV8mc6XvSSl3xsOTy8gwhnmfn+k9xqYdB0ixkW/MruC0JXky3Ude0cQU9oexbONVQej6UnkAXG4hshuZYG9lAex3AjFjAq53DqY7u8UVvH/EhQGqwRSBOEAvOpJIKVOoqsbZZAjLLsSF/orO+aOicY75SwjZNZi46lsmulpLkMQcmJ+l5vbQf/xPF3rApNxiY+hjwvW/wU6YYFxLTD/cz8G6961as+Etk27MeBdMHXTf4NFxq1byJrnQ62O1rjicDmlkjQiFXfBOA1X/7yl/9kEdhwEbAlapcAn/3sZ7+Nib+fwWc4LBRN2HU4pbCQyu/ruG4hskm8LMvXM/Or7rnnnv8wczyzceONN96FZXnXAvqlHfhhYF6hkksZYFk9J18fC8KsvA2KJ0cMqqQfXhTs25fgc/0aEhTZOqYQKmvg43tSKvYuytMvCMO1kZxYa7XhfJIrvKt1Km9k9262BarWG7GHTJyNqsmQkewvuZ1+vxGoi25J+EsV4b2/oFd97yDbUVWbgs5pZ7g0TsbMqDG7NVBIDO98Q0RfIvBv8YJfW5bl9yp9wzo++MEP/q93zN/LjFPQMZX7QFAvDDqeDOkpsrGgf21H2QrC2DgA8CLe7X7gw+9737cMPRsuBvat9xsuEvhxvgbAf0REz5kWiHo+pogH6hjcWMt2zdW7Tp95EcqLx7MBfBeA6yPLBuAlL3nJx3C4vHUhuhPAF81nFox88aK4YNWtMS3dlxABqiD3IdtOxty1xyPIxTHQjocG3W4QU3h5wgaXgvSZr4Xnpnh9s8oEUVneRDW79bbp5NukM57kfqhiqawQ4+4nS0FmUTOE5h/ArCqV+SJmTYk7k3rLz1BdJQuuJkG2Q6h2xhdaQEi7kqUrdPdDqaUStg8jmx+qMRGhbr/dGZIA96PZ5M6QcxdXIhF9CYzfxsHBjy3L8tbv+77v+5ixbDgeCy/fyoz/CAsdwfrCiLFPyi6p91PYdQsi6SgOeX9GLY6Dcfh8AN/1BI6eN4o2XAxsidolwRMA+ICZFwqTBF1gbeCxTpm5XvHHfwTsarTViUUM6G+9PeO/omMNN910073LwcFttNBZJjy0ehs0Lk4h0bCAF8vsyIOiF4awGDt0ui1W6HqrqYIxkgETpyq7BzVZIwbOj0Ymmo0wo/dOEsT6OX6xqj47FZNaa5rcflm/r8rTc1f12a1sUZwSVWOqH7kxHE5l18l2FBSTsnxapyKCzpHIzTuZIpccNyc7ZnvXN6kNQieLAToGh23CnBIvla238CPInoEjwq4s+IMW/F59A2Iw/y4dLn/ze7/3e//1K1/5yk9ljg0nAYEOsWO/Mc5SKOuE+rz63hD7GvGtdv0bxUg/6pQcw5gXMC3A9t23FxtbonaJQSFAW8Ds5pCG1lwWJ5FNQL36j6QDpmmhMuzb6dkguPHGG++xt0HBOHeA+oKBwbIu8SmVgOj9rOe2UHqvXkBXmCwAT3Ai2Hjqz/nsCdIRvkiHMccELJDfe6qpBNubeuqDOFJHAiL/4g5QSgZHVuZFKgLY9z81CVfygx/GBFD/RKPiDpbVl6dXwNCb6mt8af1Zy43miQtneyM/F78nxMRbZepCWUEM7y+xL/gp7qz4X01y1/Sulavfob4fX7sSofGp7OjII7M4R0x/CKB5iWfDhcJju4UlK599P53bGB5jo1wMqkJm9u9lm3SQPJOzpWkXH1uidonBIUiniRFhE6ujSVSXoE9xgRWYzjW9RLR1+glw00033UtE72DC+0D0oJVbQAPGzorFRw+OukvkuwohqDEpY4ykSusWe0Ps046NdFx0/d6VZcQvch3afcFvdlUk8ZB2ynMrmeb8ZdGYMS4qbPfGxmfd4UPxQwTF7yhTnmSz2RTs8rlUERapWF9nD6B+CHV7cTjuFjefu6TGxIS1VLVSsyRZxcNM2gZAflljrW/UBbY7ScEtEenc/AIdG6WsDAXvh/gPwA6EcyB6Hx/QO7edtK8Ri37pcSgieUFDjmuHKp2sw60/TQHLq1KpI8PAMLZOLwAcHR3Vog1fI7Y1+6mCRrV+sNvsmYl5QRhTM3GWYOzFTdmGdbzkJS/52LIsv8Lg3yGizxIRj8VUv6fIukqPZZGE75DknY3YbaMz7IgtqRnd2oI0QZoQdjS8rgtEHTf13GDtoO5NRBunhJR8TAg7P4C2KbDbD3xFmD12y81QE5sObpMmJnIcaM44Dj3B8IJBQ+zzBpPviq8ofQGxGhMTQ7Mtm3Qscr0rxhnC749Kf9hLHqontD3aIa7Mv9RA6sdjanwUwO8S0dmDo4M7tmfSvkYc6O8Cx4uFMG6+OpSrq9Dp0t99D/tYfnzbU7vY2BK1pwC2YDA84k2QId8QFEIvU7EsGp103LrecDyY+d/QsvwMQL/I4IfYnvjRZIxYj+tOhce60QtxoYvwZEAXxbpDYjzjZP4pI0PaPYmEPaAwImrSUc8jyBLG2dyB5rkqWJs98AdbVV0nMyNzRFPX/GNgcXSPhtaxxj63W4Adn0BaROUm57STGcZCZCTjLe2ipp9TDFARryVcRMBkRbnbvgvrdI0n3t5R7Cfy83YZzi+x6Y+Z8OsHBwd/BcC7br755rsq/4YLxfl05sMmJm61v8p5pe0tGx+elFsf+1jedtQuOrZE7SkA2fMcNrDLrCDs5Lkeu7T18jApwmdEDPCmlkagBBHJc0cbToRv+7Zv+9RLXvKS31sOl59bQHeC8YWxkGnSFvpvJFSycMfMKXVzXD0VrAlfHQ9GW0Wk6W0QDrfbUjLRIH0fXGBxexqwLsxE+usC5XdpIx+1IxXY2cP5ysflqyA6GYPcch0QO2M7suHZrnkXMJ2vtBloaJaka0YU9UxtYfkwn7RousJkxVdzMrjSrQKW5BAYupMG2yFpDHL7Q3JI6uvsTpH3BFP7R+pWFin/50T0X3/v937v7207aRcL4b2wtPs5Yo8lVBH1PCKPj8Er43DQyK7RqrJtR+2iY1uxnyLsSL/RHc1A158soPN5t4I1poJlO8Jvq1mxTcomcJO+0bNjxm7bU7tg3HTTTfcuR4c/QYT3M/DwAjBBFucIX8hW+sDQ7kQ1D+1HrCVavjjq2PDAarbZH92JW9ttqvqpXJVXHFi9GL/LaTKmSepzEYddNETEc2KWN1iL7EgeZh+X1C0clz4h+Uj1x7as+BmTVhHICdlcr83XuGuV/MoAQFKtJ2QZzl/b3Pkx8rDECWlXKE/Y86PsIZmGqjBbxi4ii/3RD+ElJyJiAj28AHdfddVVHx9cG75mnJeLMzRj0/qxzhP4UCi3OOM4i1MjKm4ncz7d0rSLjy1RewpAkABIpBMlDHQGsKMdQMBOJ2AiBl67jeIBUf/Zq/JRzCbrAsKybN3+1eDGG2+85+Do6M0HRO8hxv0g7HYlSrEGtuhzWJ/X7pyCoe7KlMCHLtiW/gUkubECan6AnXXRreV5UGXaVK+C9a1PG3f2tSAGGePyb6ouYEoyBgGoevWQWMb+PsSkLXFaIlQTENPtHz3i7T2G8JoW2eUL9XrH2DwfyXlyiTortp1DIsqrz7KqzqwtlFvnVGKGaBi7mbH5tDIeDWztDL60vpG+5R2A+5nwnsNTp37mZS972eeD+IaLAN5J302Jsp6nREvHafwr88mIYcjYLqlLGqSk00/bywRPCrYV+ymATALZLaiLtW0isE2YMkvihJKr2QCW211kwTOTBATsdtuO2leLG2+88R4Gfp4Xei8D5xb7WoEmaEWwf2jwqw+Wx9sWZVwYRlLT7MZBxpRzWBBGqLe7GgbCqJq30Do7EMaXkVNb0kGwo/CB806OlOXjVI8er9p0TAGTlHlrG6O4mFARF0BAbVR/u3+jvrlIzqdKBgdN9PwFvJFGWNkVaRJcTHoHCORfXlz9u2Y72e6s7ehY/8AvCHZgnGPGe49OHf38y1/+8nuCmg0XCbV/IuaxNPqt9jNc1/y2OnSMM8aVl+sN+hnbrc8nA1ui9lSibDWQrr9sq0lzC02niApkGvT2Zg3cBlad2zNqXxu+/du//eOHh4d3ENFZZshvg1qipf7ft+Mj/bCSbHVlBZ3mFFDD8DiBOoeG5lq8F2wfcUclqei1EmNclaxBd74Q5JPuKmu0+J1qTd3xmSogMxA0oa26MdqZdJuvbWHjUqEeW5Jox/MiOVkZkLc1oqz4cZy3CO2Z6x1j1Xcvyy6KXfwZmORL0OTEGj1oALAsCy/Lcj8Webvz5S9/+XbL88mCfI16Llu50DdaHMd1yIpg6FMrtgvBesGXBsu2CfBkYFuxnyro6I9jnCzw6r/ueSUp0QVsJoMBuQUWducSCOEx8w1fLW688ca7Dg4Obl8IZwGk71mTjkzsDVYY9Jkj37UIATIG1ogajGtyb5hveQ7IuDmR4UCos+P2WljGovFQoLnNzSB1+bL71Sc4gtQy35YO9GhvM3cmz3S3fMg/RlGsY6KWNqsd1FyAVcS2kjwNOblKdEuttd6E0N5aryel+s9stLZYvQZPxLRGwmhg6JsvMvNvAzhLRLdvb3c+iTgAAP3eM0PsY9skD2XWr6soF12cxFVyRcFue0btScGWqF0ipLnjMyWP9hq7a1B1lC/3xBIDNctzNHWChcV/S9MuDm666aa7D46O3gbwh4joRM/ejGRrrXNnyC2HsRBWSUvu5dmrUW6HvuDXK+EAAstPj/mVQhmb66InRpoDdq42m/rRRv1uKC2f5oIrWEF5aaJLco268/mosF28Wq5+WnMF+ceA+60kfpYMnQgk8szIz+yZf9YMalD70ccMS7tjk7UoofoxJpSQMfYlAL+1LMuPHh4evu2Vr3zl3YO64aLjPEC7mvzrYKvrhFEpjyPvbz0Yq4n8pcAk439Er+6iY3tC7eJjS9QuEaZYqoPbXggwTHwFZMFy0YWI9WFSpS8gHGA8N2IyCF99kH7UecPXhBtvvPGew1OnfpIY7wfwuboQAqVTQzBMC9w4nFfHssBOVUwFPdJzVAVye8tWXQLCw+VfNQhg/bqQCNYfeyfAt2tii8WC/FwWdNz7okBD1k6tHtaPKg/TqbtISVVhZnGBMw3y3J6Iuc6AYD/VH1cvnZjsCccxwfeFtbTVNIkfeNJdYTp5Z9mgyO6sDqLxBq6qWso4IiJeQJ8H8OvLsvz4zTff/D9tz6RdAhykYSoHRBLvtZSUYfDoM4ShC2Ws2LGPiMHjNEBmp4D8Y8OTiS1RewrB9tBtKrNx3++52MSg3XhrLcbM+GWV9erXg//B1u0XEzfccMO9y6nDtzDRby2gR6ffLfQOmCLqxCKYyy1J4Yk3LP7+DEkfO0nfBO2StQPTHe+E1YoC9tEQnpWsu3xQWU+qSlI69B5TQTNDfPngzkvCH1tuNsTfqHRfakn2lP0oeypM6Pxi/kzKptu4s+DkC9LnGQIkoc2yduac5VZWhV80kNRhb7YSRFbarN/HZvKmkyVJY+aHGfjQsiy33Xzzzb8/zYENTx5iOE8DPPR3igk6tq0LQ3/L3NTtgzBWomwcQuwfgmVZti+8fRKwrdiXMXJIlkWN47ywre04ofR4p0mbxV8OE3K793lxQUS82+0eYfAHQfjvVn9kmkenMrD3J5JGwTiMSVSEL7J6HMdI3f2xZK3ivAXreCcsyE527QHrV3eIsft3oFDrsTLMSQma9iTYhYs7IxvtotpAX6i0fUm1ypoGoYlNe21obIbpieaEuldR+w6646Xwo6Ck6mNkPZ3t5O2XwUNWpr60nb84btwvCzGAh7DQncvB8tabb775D4guZLRs+Jpwfi2ey6MuJId5/tYxEMa+xZg4QPfJcr3g2O22tz6fBGyJ2iVEGtAki6YF9jT+mZUhFuoiSxYwCdjz/UqL/f6bTjkLxlMk33BR8G3f9m0PfMd3fMc/PDw6ugPAWTDOdQuWL3BrC3ottnjpkbTpQztXWqy1WtAladBAICYN+t4AHTlpphuovCVZIbuAQ9j9A0w7RSg2Vb2T7+q5otPL+sHkjugxT8usbcW/a6i6HHHzys5r3/rHOurOSAdpcy0dmPwawMxfAvDhw93h22+++eY/qPQNTzLiDxPEftJxbOO69m9l3Yfa/0n2mLG14eJgS9QuIdpBrUEyksaDnv0UskW+0+dXOI2olW+/TPDk4cYbb7zr8PDwdhDOgsbboAgBz/ut6SOgL499XQMnAj2SfCwE9AliZ5CUSXIvx1FX1RKHYjcu18DYkzh1IBPqn6Eb+jIxJrqdfdVXfhs5ydptz8HY2dCCJpNOBobu4g3hzn4DTfQ9zIr6+AXcj+JLpzXjCcDDC/M/f/mrXv6RSthwKZB/67PCxnUdErW/VzH3d5qvaTzo93hu+2kXH1uidklwmE/jLNHgX+dDuckpZc40fp5Fzmb5uCtA+iGLrnR6sWjDRcRNN91096lTp36BgQ8Q0aNWbgtoTBpWUTrUZUL53Ocl2dinPyEaROGv3sLUwF71udTaLtJKcWpD2aEa9sttvppCMFS+fGGwgYC0Q+flQU2TbGQ0D1uLLfJ3fs1hIMrUBbJKVX+a2Rx7wG53h2R5n/0m6wgOrtXFsuQzLTRf2ldxSPvFbiL6EhH9JhHdecRX/cYQ3nBpEbbUKsLc8rHGkGc168RbAdna5PIjy+N6S1Wf99yeULv42BK1S4An8EQt0iA44PNACwnzAijBlACwB0+kYCvYAekb3xnyCrcw0dbtlwA33HDDJ0+dOvVTAP8yET1CRNP3OtTdrboAxzHSJWB14WX71/Aa6pgasIHHaWQSy5ubdoOSot0s+mhll0rUlEYVG+VNw8ohY53Q/y6py8Y5QDY/2ioH9tEUbrbaJS4J39aeuLPKdNxcgLkTC6wtiWwVlR2vqNcSSjt32wOi7opRV6ghreGMndLIbpEv9Hlm/sdE9GNEdNvLXvWyTw7hDU8V0hxk6dNpDNojN3ZiCNPQH61JFxp64WIJns75FLMIAC3bF3Q8CdhW7EuAuntFYXerRv042aadAWYsvJN5Qru0iJmqheUaK9KE3852AHZN6rjhYuOGG2649+j06dsAfi+AB+qvJtbdIod2pg+R5sq1A+nHSXh7NNs1rm/s8VpywIuOsyLi0Kv3qhJhnNtzl45RyarcohcdcWfLbHSEK3+E8X8S13TfMTUV6N/J13ZOK32xJ6mtxWYzaT1xHKRqGNjts3llpFnSHvugjjWG2jb89wgDHz48PLztFa94xe/ffPPNDwzuDZce49bnPF+kgDis9Don7cTXCcu/9K1w28t2lSQDtBtHiHVvGcWTgs2tlxA+6Msi3IJId78y7MYL625GxQ6sa9Sg+bQkaJdv3X4pQER844033nOa6KcBfg+AzyxjbxMo/U82KCivthQX97nLgZVxVMviwjyDZVA1WYSNqYqUNHTjVa/eu9oMrC+9TLDfIwzSbM/bWOJQk8Sop9hidRTXrsJ+xs1V6nyTLhqEmEwlWF/asfVjZEl9nDdcU7JUfDv1a/iMhwzMuyqhI/PFnBxbQlh5tGjHhH/PzH/35S9/+UfaN5s3XHKQfqRhQQDs4opCt1MYj5jfACf7Ch8IH6c5oOVx3Og4b+fwhouGbcW+JJA9NY/btthgvkShERQn+AIFDdwNo9wu4knLCL6yo7bh0uFbv+M7/ujw1KnbATrLlN8GjYuoJB8aIIf4oJ0EQbAuugiBeIaOKZ5DQpuDdSoavVx2tmB2Ka02y4a3yHH7FSYIC0Tnqw7VD3th9UbFlnQSNTt56zZYn1ozzOwWe9uyktBC4kBHE1+WOFE7EtpvK36GjhkCMTGdO2D63auAT1WeDU8Rzh/ImOm6L8aWwGIJWryYz0NEzupI8cS+jpXAuNvttjufTwLmqLzhSUC+0RivQqgsIqzntlBFkF+5zAscoAsCKbUwLC7bSm54knHTTTfdfXjq8HYiOgvggZisdTG2Lrx+7sl6hicuXbkdd4v0hEYJCBLeS6my5p2ZGWv2kmaAtUabFxNhBVW9JKIrc8eSxCoU0fjJNTKkxsBS+ypi+Eg/xJX766/2RbtrfY0etsSNoTGkYYpo2htBwBdA+GcEnD1PfPt3bz8Ldfng4Hy6renQbh9jdh4FlT3Czqe4Ui5gpnG8LHh8+x61i44tUXsqYINbg/YU6MstklV0chacS5IXz7b9tKcGN910093M/HZm/gCAR2sfT+MgIAbEKgelc8gfJC/oOHtw96aj6dHEJ8XryGeJkS4M2daR4CWbQmFvZbON1y0a8TStIJES6hm50ipsx7HzBaBzq+o3NCafFCbqiVZA7NvkX/3FgNrXbEEkJIfCn/8Kcw44kUZEXwLzb4LoR4+I3779duflhoM+oLdjN594P9cxW8ZDpU+4kEG+4avClqhdYjCNgc3x/n+DNZonYx3IVstK0PrW5DZcEnzHd3zHH50+ffotzPwBhK/uSGgCY164xy5UvDUoYkLbWcC9AOgtrlQmGzJhpVcQ61d3GE8Yc2br2NkSRtYyG/dmnSWZBtbq6osI1YqZph4gmu74oeRW+zxjct4O07WSoNWEzlEM9kSy0REZa5IGu+2pz/tFuvzcj/iVIGqErvrE6V6n2TrZXOrUOr7IzL9xSKf+1ite8Yp/9d2vfOUfZa4NTznOQ0b+NODXER85iOuRgUhee7J5mS4EdBxCX0ChktMtuy5r3PC1YkvUngJ4kCwTJC1WkFg7BdQuyEYwAys/hL3h8sANN9xw7+nTp28D0XuJSG6Dav9IEr6/vzjc+rY3FEkIgL7JtVjArQv7MclbfT/QzQjB3Z9hsdv3dTfH2mIJ3tpOHXS8Bhs5XLxY2hhF156rqfq7hwOMp/JWpDrrDtwFLIg14YpJsPluYG6XjYVYhmo/63gICykHg1kyvCCg5XEcEAFL+PoRArAQE9G/IKKfetnNL9teHLisIQOlzmzW70Gs453C4wY2ButYBcY76rbbLsVj/Mc561gWHG2/9XnRsSVqTwU0dsojuqOYNMhanKUygUL8bULvCPWykNe9EYEs4lu3P5Xwt0GZ30KMdwP4DOnboDWoduh71gYFgWzXyr5/a4W9oiZxccGH/X5n4HN65Itjlv2jWQgEFH5LEhD2oUrGcRKNSWE8LskthfmA6tcpSSrJbCSEMloW9/EaSlNSsmWFa9LJbQprvdgfErIEezh8DVHHSnIdb30zdgx8hoj+56Ojo/u3JO0yhn7frW1e+xiwO996SmHM13kODMYxT4TH83x/ttNu/Y8xlebW9lufTwq2FfuSYHyTmgTJREwYC8ZgsiO2b4oH0nc9RTAA0mgbVcWFaPsJqcsDN7z0pZ88vOrU7cQ4y8A5LLogHrdpEyNwRXmAGPV4BXK7MCutSUa9aDg4Tm/zzFpCvFJX+FjXZ6/2pR+VlJOtPXIr8OaGHYfoArZbiMHm2jbyj1o44PoqXwDH28Mkt5qgCVlKMgmTI0ovjiNl6+o1uxfGjhY6B6KzR0dHt7/sZduX2V4xiHFDDyxBiwmV7bTDxlncxY4DP8I3EObBk8YjsH3h7ZOALVG7JChfL7snYBqEJJ8xsHcTxUDweJ6hCuRiaJpVG55C3HTTTXcfLbgDhLPMPN4GvcBucvauf+t42IPKKjn/rJOVJtuAhRaUUBPI/Vyfc4n8cTFhzM+EWfIoSdNsl6PKrRxH+NQJsjVZrYop7lwYaY9ZLZp2EJtBau1Ke2U+lxYFm8XXay3O0P39B4jpLDHf8d3f/d3biwNXEKyXrfvn0TLDxu8EvcVZdaT1oxVc8Pj2a58XHVui9hSCsJKsWVmhyaKhE2VtJ6L8jWDabn1ejrjxpS+9a1mWdxDRLzPzI13npXFiOzsN2uK2cA150MlZE7FtCMpHottV/ElWi3ThUXZ+V7eeLXcpxclHVTTe7gzP2Ux8VmZ1hONVWPMbvnZ+V1g7T8KLma/uHkab5Rm16qkBodotcnqEQL/MxO+4+eab76q8Gy5P0KJJVenmfcPJWTsmm9ModC0y2XZULdieUXsSsK3YTxGOiZ+y01BnXg388adfrMge8J5FvWy79Xn54U/+yT/5idO70z8Nog8S0ecrvaJ2b9ffhrhL1WOU1y+YZQi5lSQdg+E0gQDoIrKOkOSVtUHVJ8S2xPbUhGiPO8aKRiuM1mhF9G1ln3YE9zcWsGontlyQdO57/qw6qNiL8ozfPE4YYOwWxqPY8QdxuPz0zTff/InKteHyBe9kfMSRQEB+eSXQ7LwZOgrdW43/pDjdNk3PlkZsz6hddGyJ2lMEJvjbe55s+cSRg24iTXMnLiL2vEEjB6MzY1m2br8cccN/cMO9fPr0bSC8j4geirS6wKahoieWoHN4ISWiS/wFobwIWb11TJl+CrdOUnLhhTpeqzGK1iKrk3m6pKh+iIi0mpRO86IkP9m+cZvRdBq5e/TA5yMj/2pBZLKC6KNIC788YLY4axcIFKJybmtEJ62JLi9YPrcAvwRa3kmHy23f8z3fc2/l3XA5Q37r0+Y9rL9Z1hdDO21svE3FnJ+BDs+aJp1lYFl82dK0i49txX4K4BNKHyjzxcDnQIjYeb7ILww4l/CJlrFoEs/ROU6q3W4Xf8t3w2UCIuLvvPHGew7PH/48wL9NRA+1b9zFW3fxbS79R+XOaE1uahITk4spaId6UjnsDqwN3plHIBcjkw02VuOumP2z3WT9PqeIlAyWCnMiFo6n+uXh/Krb0SRGnYdI5+MIonvsgTtM+miaovq9VOab0IfOS2J3Nbv6IcJ8rKFG6pD2MTM/xOAPLoeHP/mK733FT7z85S+/J/5ixoYrG2svnCHOs0rwOakUfRxBRgz0RTVFuXtjc3m79XnxsSVqTwHi4G5h9G6eaZnEXTnhMvHYCgNcFREWoq8H7f7Dc+fOXZO5NlwOeOLgic9hWd4N8P8bwDki2uUkZKziFIMtya1G4+2GGDW/9em363zwDOwbp5I3yHdwxeQmLgDJtgAfq9GWZBeVcy3VotqG2c7Sxlg/6UcoS+ZNutbB+iEqZVZmYjgO54XTMSV3ETx2+k4MkynuAPAwEd25LMvbv+d7vuffJOqGKxJxDsiLOKOgzg8bf7UczdyyMSl/mp3oOma3W58XHVui9hTBJ9Ja4KU5uPuh7jYYm8HnTJ04OiGJVRb0zQx6zeOPP/6tlW/DU4+XvvSln3npS1/6S1iWOwA+y+DPEohHAB1JRho+2r+S5IdBEA5rEI6QELxO78D20elljNtyDRkYV+F2bGeS89AUoTyR0Sv9k2KM/2B08d1o/T7Fw17jcpt49p/baO3Rwzl3GrZFkePADZ+3U85SkxWPA/hVZn77y1/+8o946YYrD+f1i9TKrf26a95dAEzjr5Z1j5d2v16SzgBsO2oXHVui9hSBoLcxppkgkVbyqXmCUdiGRnPTo55XEBF2vDsAbV92c7njpS996V0HR0fvBOj9YP7coHSrvMATgyZx2pekDRwf4A05qGfGcZZtTVzc25kRV594qCc9Waosto+dxuI/uyVofIE0gWa9AzOh8x+vlE9NUkOqPTFBJcwMaZej1KOyjzLzv7r55pv/IFM3XKmoY+R4aAIfb2368M6D3MYb+8bCMbVtG2oXHVui9hShDdRazhirRmXzadI9X6DEbqfBfkqE7UecG54Nlx++/du//eNXgX92Ad25LMsXKj1B4+s0trSv61V2Ba0Nnn0g1b8bch7491cngozpcsPFmJNeMy/tUgWyPwoQk79qg92ujeWlyXYRNYFF96qHTCSIHufORN7DG5uUdk64aWNFbO9CX2DmX12W5f2Fa8OVioXaQUDa9R32jGKhqRyH8Ub+fKTOs1b3bsvUngRsidpTifot4xp4iW2G9DsnBAJ2s6xdSftCVQO6TjY9GMQNlzVu/M7vvOcU8ZuJ+SwRPdg98D12i0JfJ47jd9QYOcvrA7HAg/eKSiv25CnY5yD7jckchjKPltmFRjIx2Bra57dQbR4Vv8TyCrKP8NumEbSnzcDQHWUH+3GCpcSUMPt0rfXLgivEzl5IHzCIvsyEc9jh7LIsb375y19+T+XbcAXiQDo+9b2Pj/nFE0DG06LjyMZS5COS50PjdHEaCBReEKpzQX6TfbtZc7GxJWpPEeRK2B7ElqDscRnrUVfWgTI7LIizTEKZRf5nQn3QdMPljxu/8zvvOXXVVbcx87tZXzAwWlrQ0yKe6fL2XzciYrAfCpKuFbG90PHoQb3SMXjSaSB70tkO11hY54S+6ThOwxwTXndb3Z3WE0aZQCQfbTsMSkxtCMc1wV3TFf09bvPaX/0TnEWzB6SciHm3ewiMXzwA/tZVxLdtSdrTDHY7cpoOoSzQjhnBwqvPl9q8jeOR9Q1l+0dhPAPYfpngScCWqD0F8F0BC7R6ZWJjnaCTr428ErA5fJGo3Mw0cv87hdBnEfRwwxWIm2666d7Tp0+/E8D77G1QhAW7Gy4Vq7tqzOGWh/B8VclZhI1VPe1rltJYlR/XR8niSVEWF59RX1pdPJlhvRXY24OhwQQK1vyi3ZDLjFeJtvDNKuaSCfqj6d6+sLuY/BSOmfEFLHQnLfT277n55r/zv7n55u170p5OOA/QrrkQsrlnYyROBdI5UJDGLpUSP2RfYYj1S285z4ltP+3iY0vUnir44J5vsbClXpWgk6MGeirPzRwg75zUObfhysVLXvKSjy3LcgczzgK4v7sN+tWCkKP6Ps37aDB68/yZEMehJx1GasZ8hNfb8VmZXeQUnjXRaZGDMjWmA3vKG92G6Ad1zV5Qva2k7alykqDm0uFLepQYv3MA/Mb2dufTFAcAL2UEkMwBfxSgDjhWejMPAU3ktNB4BqumaSrAmag/T7ilahcbW6L2VEIXlC74Tm+moeyG6HF3dc/6SKdx17/ry8mGKwEvfelL7zpN/C6AfgnAwyDpUn9IPgbg0tVrtz5rLEeRPS4xi/Bcj+BX9Zlhz2k8aWxdW1xigbDMt/fX6iH94lr8/9t792jfsqq+8zv3ObcekcLBQ4TSKFFJxOJWCXULiuKhJDEmDFEeaRO7R4/RPZLuTkYnbY+MxMQYsY3RCETwkdHDYex0xkgHgmgiBSK0JkRM4gNjooK2ERCqCgooKCheBdx79uw/1pxrzzXX2r9zqup3fuf+bn0/Vfd39l6vvfbaa64519prrR3vs0nrZBwb1gMMA3Z3E9jgN0wLEJH7VfX/lQN5KQ4Ofi37kyuEI2vsO+y15agemyHmfuqi2vxbq1gocmne1aircDHBaUBDbYc0Cisq1iRIVVCSrPiqm6J/xhNF6zXSZOgqjKNIZO/44zfe+J6r9eqXAXo7FJ9uPKMRkp73+qtPQNIwTo4byXU541HLKuN1yry57FoYjcatXbbNj2uR4BbvJ5eJ/ZUqJMe8rl3J7ybKaKWdDBNtaS5h95NH2dR/8n0WI+2XDg4O/sFzn/vcX3/Oc57znjYEuWKwbdTQyUCpNyepqo0chWNEmTFZjmiYTkNOFxpqZ047X8Z7KDZjaIwAgJbPSeVG2s4lNeDiaYspwDXtSPaGJ930pLtU5KUieJ2I3CuQDZVmM2WkbWqa7aYhTvVF8tzl4B3rpFXVnlrhV/zXCGFjNLHXNFoVSt/RWc77C2qQPVh5ePCRAoznTWop6aX8wr8hrYfnp55Pi/FYZdx+mrIvr8J/ZZqm73r2s5/N151XPOFbgF21VsxWN5o63NW2FVLdrqPx4ZVqThfTxA1vTwEaajskG1WFVuPVyj/YAboE8L/rI2qz2N46MXpszLEIG9lvzp8/f+fVeu13i8irIfjQNLWrQRtlr7ry6lNHrfxSX7W8RsyNsp/mnnbFDYp8yZinlMfqnv5Wd7HrrVxzSWrxX7tGpPEPCw+im1+3GWWIYdBrwPa62aqLJI9auK0zujTdYBMVkU9C9T2i+s7Dw8NmZTB5GNDV8eKQ6zZc5XThHxxLO1H257jIT0htHRpqO+GwOWtHu1pp0erfK6OsOCKSU2quUdKs/5ADk33mSTc96a55nl8F4KcU+JCYsebP2xkbaQi1J7a4duSjVGuvOULvusMul700+OV660pFasCeMmWg7cZEZeT+9Xz0yvAYovEpWjLkV4zDllWeTkS7EijnKyak4boAIJ6fWD4BAT4J6E+L4Lvl4OCHb7vttvenIOSKJLz7zIS+em73u7agmxId6nhyVgurYucWwP9yPG370FDbCZeaM29/SyOd1IZ3ugfaJExpK3ooCJsHP05xuOIdpU/2lxtvvPE90zT92Cz6Ot2wGnR19AuwWhmsA69Pvv+a1b/Y4HuYdcYjvych2VvFbSWxWO9H9TuPQm2k3uTAfXS8geMMxKjkmpKPgatw25+UkIioCj6kIm95ztd//Ws4J41Al3rj8lqrTa1kbSXOZ7m+anGu0wJiR8K8yqtPmmpbh4baGbCpja/GW9ZQ7lxfy2wYccsSFoSMXLnccMMN7xKVHwHwOgD3Zv/N9PUJ1YCwpf7ek45VrOs9JAZODU1iyc3Tsz963CvMJp1+SkE9Xg5X8X2maljL00jG5IRp1gUFFrcZBUwbbUjw95woLA9R6apCZ71XVd88TdPb3Zk8XLA5asMKWCqspHo77KyF+Op7KiY1FOunH0ioz+T0oKG2E9pXn7BGuGlwG0z5ha8WOHNt6wfbHjgD6XGXvp9EriRuvPHG91yr+nIobheRT8U6sj5HDVbnVkyOQZXpRoos3UHQUYqAh01Kw9NttqeJQeKxGYnVKRpXq/d5AlTrq8YmdzaaEO/IZbiGSwXQyfiDyJauPJaCfEoEt19zzTUv50jaw5Cjg1I18psUO5FcJU21FGNt8Ylxm4U0WeTqT3Y0Zg6onQY01HZCevVpFVsH3/pErPc2ilGVVxAIMYFqJczDmNJN4QH4V9oemiIjlzVPuummu3Ag36PAzwjkY/4aVETGvenjsFefucZ4vSzGSxmRa9eNmkJIl6x1Xot2aYxJr57un7Mb67RpkUZe6vFy6DTGZb6ZhmxdmVOcJ2bxR/Ib8RHw4JIdCqN7tfuDlo/T+7UmiIrI5wF8RCb5GRX5nltvvZVfHHiYoq7FY/1J8x/bqtWP3vaE15tdvcwOizzN403dyEOEhtoO8crs22qImgJIkqIybrhrHCeHif45rl23eBWlSq5czp8/f6dM8t0CeY19waAsMDjGQB/VCkHxyPW0IYxu5TSG8dQ7Gq1R5HVc0GuQbBTl6zh5tCAyykrHIJCGssv5aM43la+Y7Jmx1qXTnhaHXBDF6P6YzHitiHy/qvID6w9nDsL2HJH0xqarW4GRtOhAL43wMLUuTxO/9XkK0FDbIV6ZqwDkSu7OWWoSx/kXA6414lwYFVEBkCuZ8+fP33kO5/6Rqr42fht0hNonZ3K1kFrf2krnSkDdMJqX+ub120egmuruCqCxPZZjVCVhgZJfW/ezILTXG+H1P4cRy3651SVdV1iCerPDUcJKvK90vsQp5lqjCGMh2GG9V8+DiKrqvSp4/XTu4OXPfe5zf5hG2sOdg5UvE2xgMGDcOcTzpg6ngGnwYOKHCU4FGmo7oo5OSysEWT4isUfUsUlZdGqoUK5d4p2kt0T2n6++6av/8PDw8MdU9dhvg+ZtLYBSQWtdCTE9lWE1WrmC1p/yx89j8Dbqpjo+wi2cch85b9WA7K5TznN4dG7j/DSytKFc6rYegzQi3ROqE8L1PpnkDYd6+KpnPetZ70ihyMORIwCwr3uMKl2un4aM6lnAk/O4bRLL1JouaVoUpwKLdSccNp0e76VjvKVtSwpg0Y4nhakCZwJ2nLIgVw433HDDu6Zp+lEAr5vn+aPZ3ykjRclUivUo17tYp1YQDOqavdqs/5L/YkiNNIGR00Sbv1zFR8pqRAnWymU9Fuk3ks6Yn99DzEOTZp67psvubE0cPxF8GiJvAfCK277uNn5xgBQOAECr2OY6V9v9jXPW1qu0x6n1WVyy+hF0oCwm4FqC7UNDbSeExQRZQvJ5ZZnMKUGQ1H/c4AqsJpUENQstufI5f/78u0XkFSLyehH5ZPZ3Yys38o1BETxr3RzMJ/PDVQMuOCvKStQupA4SjqcylgEnV++mvg/qf5PMsfNzFs98nd4hUj6U7WwMav5WPveLTG8F8APPfe5zfzeHIwSuFrx2lspTZXQZHCjE6p39Fo/2b007uPXxHuh7WHISaKjtGDGlEet3V9cTJnPl34pQVSGqk0jbQDGOp0MeXpw/f/7OaZq+V1V/BsDH82vQbFiJAnP9fGiqT/5XFHM4H9HUvbjS2V/Dh9GkKh8i3W78iNcdvfqP53kuTWBgFra4sNlxvGY36tgl1V43G4RDVsLIJAqRi1D8+4PDg5c+5znP4etOsopXRfWTUDdPVA8bNtXxDUw0KU4DluqOqcZU6OWMZKjIRjtiUGUvylAaCdG6qjQpDD8w9wcuuORK4ClPecpdBwcHLxWRfwngHl9gUCf+h1EqFWDCZMZKW2GWDkMZJYpteTXMLIqvNkaor3Zilbq9JkwmLGNtfQ+jYUNjrdLvM1hPqyCdDL9eMR57P3nI8tRHNiP6YwB+ChPefHh4ePemxSCExGqkqVZlWXC87nbeJxitXkuTbB8aajtG/cdeKw1xJTgSBIsbRyOQgi5KNDq6VB47nkCuYEREz58/f+dVV131MgD/UlU/JCJzNaCC8SNuoA3a7GowhV3MOz9jrZoXvNeyGEJe9aPR6MS6nd+s5jof8yDotVe+p4rJCUayNIrksgU0I9ld3DVEln/2jKB6r6refnBw8IPPec5zXvn0pz/9gzkaIQAgvjG6V93w7zhix6j1aGW6HoaV4av66xxnqW0bGmpnRKnk4w1vq1QMRgxapRGUgjuZMtqYLk4oxeSK5clPfvJ7Dw8Pf0xEXleMtTLulatFrkfRvzTy/vGjltrRGBhbkThSpzro2ufr23kxLEP9z/HSucY8eScnhBmJC+x6bjyOcGMs3EU92hRvTImrwMdnwRsODw9fydWd5DjUtsaRzuBaat+oHh4jmkCozTVckrsh3J5j69BQOwOanvao3lcDLHssLsUey1qs/BM7zrEVRUmVuOThjq8GLcZaWQ16XL2I/j6itjHWSn2rI2dZW1jfJIcfs4TKBuVm7Job42z0BFzcLJii3GuWuZYNaS5TFY4AvOUq4BW33cbVneQ4lg1vm9rlJ1YhRzXP5Wzk1xADlIreHHZ1ngNqW4eG2hlQe9r53Y0hmKuxFcMIFqEpNtnYGnMjMMpqHOGICoY8vDl//vy7Dw8Pf0hE/jWAT2T/TZQOh72ym0qlyyNbWutqj/qre6uLcVGBBxjFAwB74dokvBa2Q+pP6+QMtNeauLgslSRTDjaMcPQIIHK/QP7tgcpv3crVneQBktv0PCUhs6k2VkzF5LTNa5wGR9S2Dg21M6L0Rga1HygfbwtzgKozTDK0jHNHQXSBUZ/7FpLWoFA6ZUge9txwww13TNP0fQD+FRT3xdWg2fCKiFoDEt65iHUUStVVlBejfYeidhwCcaFBWQzTLwhYzu0g1fNNdVvylIBsWNX4m1Jp0a6Mwokn438H9+zIJJ8E8BY5nL7jqi+45iezPyFDjg6GWvw4I62SwhQZah27N0DZr3WipXYKDB4xOW2K0VQUEdALy4zSRR8psxhWxHakTrqgESx3t17/hPKB7ZGSIg9ffDUoBK9V6Efqh9z7VhgIdUwF9fVmxOsa0I6aZfKrz3po7iq9sYYNNo+7rVyuuPvr2kFHaZRmQ8hvjN2km6j5H3iH1Z1vODg4eOltt9322xcuXPhIG4qQDcxWtaIc5SkFiVgVoyyJybzaSR0tbuhdGriYYOvQUDsDipCUyt409iYxZdFX8embfRMTBTCXPawqQR9mUXLBVPFRtVHK5OFKXQ169dU/ICKvUdUPisg8MpJgjTmwVNAYrNoltaIuyqBJTttvhDZY/c+jYGuGI0Zpm0OTH4kuC/E+N1wCWPEv0dMFG7+eqdzNvSLyegA/cNttt/0Ot+AgD4gD+7tWyUYoIJCqD7oKLdaZh6Ub/IteyhHIaUND7awQdBXeezKKZcRrLH+LEGXFVRXbQJZcKIVbdJAVvuZrvuZ908HBj8okr1PofwJwXw4TqVUtjk41da/UtFwlRYtCgPSVXGB+ujLqVZ1SRHePm+rGVzPBbROrI842dSDLXMWjhFGIJmy6V4V+HMAbpml65bOf/ex3hpCEnJxpvPJ6NOXAPKoweP3sqnQYKGhG6pbDQhcRwEW++tw2NNTOCqvgRSktElCNLDVhGQhCmX+w5mf+lmYnWLIIISEjzp8//+7p4OBHp4ODvwng50afnPLGW7IxkpD0jQwPWhv/gUHk1R9JMfir1kVxLBeOcaoBGBzraDWs/m/Ic2EQQDBUiCMGsRFfEYvIJyHy8wD+EVd3kodGU/vb0/zXkPQ5s4bg7rV9cWrnnGZpmOeZM9ROARpqZ8CiaEI1XxOahKIoouaVlCmm4tRuh1CTDaNv2ngQ0nP+/Pl333jjjW+bpukfAvh3m6pLbqxPSqmHxWiKCsGvldNdVSwWtgmfRsXakYPiXq+ZJ0S7IdclWhjYlpWcxfzqWMqI9v2A/ptpmn6QI2nkoSLzypuU2LFJ9XDkhhjdD4IwLkm3tXyTXJLtQEPtrDAhyT2bRn4GAiBLY181hk/WLrpFcOALBmI8bUdBCDkJj3zkI98lIu/etHXHoJoGI6hfDKDWaRCgdjKSfoFYujntVimkhO1U60/LkqfeOMsyUfOc0vF8jVhzBxrPIwX+Pabpe5/5zGfSSCMPmU5OpLj6+K0bcDWMohndjc5VDvzAdUbtTPXxMlxKsH1oqJ0VZjjlaf3luEjWqkBIEbQ64TpomaiAovLRqOQGypOQEU984hM/N03TK0XktQDGq0EHdWnYww9+ahZPXhFak0qLCEYodFiPXaGEk+qi5hSjlW/jluP6N/hHyrSD7LqwFg8TVIGPieB1k+DfXn311Xdx4QDZClGL50Y/1OfqlUeQF+cSRrAMAmQR3jScDGCaJq76PAVoqJ0hq4rMZsJkmehWgrrBFdJwRaMAZotfggTD7wRKkBAAy2rQq676ByLTq301aA4XUSl1bxm5Gk2WXDRHNLZcWagAapvoRrqwsR7nOj2YiybotY+mtGKYPgcr97LcTocZt/eKyOsP9Nz33fbsZ/8gt+AgW2MkjbZgbJOC36gDfJrzSFckxdR0lmYuJjgNNj1Hcpq4RrIP6kaKXPTNvphhVr6JKMDat0IByKxwdVoUkU2D9vB98oSscsMNN9xxcO7gR0Wm16nqh5CNtZX6JKplz8BcT90oilsBBBtKsHRMImv1vWWxuMbZ6hNxl2JcLhG7kOMEV/F90gTyhmmaXnnrc2/lFwfIqdCPLpctOOyw0tXpQPRzWewYOhq0KE4FFutlyCIgneQBptzWqHEHQVSK+4aXqoSscv78+Xef03M/JjK9TsJrUKS2+1hjKszzV4wNsmMJcbyqb1JUvV+Lj/4NqRdwg3MJWEYMN6D4FIA3Afghru4k2+cImEZDaoVlVHtB6vzQ4LiJLtySWiczM79LcBrQUNsJh81Z97pm2U2j90guzUlwqHE9oTAq4O7+qvWkWwwQkrnh5hvepaKvAvRf+R5rxxpag5Etj1Hcg28KmDsVVTGkUbgWtwQXn2ONx0gOGxc+wEYIA/neHBG5X6C/COBlz3rWs96R/Ql56BwA84oaD3LX1f+Vzv4SrBxVdZLCqM0zjekqgBkzFxOcAitPmGyXS9lh6dWYQJgN1fRQsgIsG9VGkWmFzc8UUgYcYvQ5KJuxjBJyIp761Ke+9+DcuR+QGT8rqp8czmOpxFpeaI5V4wuaBrE6n+urjxDkT7Yv9X8zx/kD/avaKE6K5WJr9y3Ap6H4Nwd67ntvu+02ru4kp05XF32xmZ1WaakOQbbCjjQxUK3z5u9hxIy0OFonACZMXPd5CtBQOyMEY42xCFs2yoq0iJp6EiC8eVqESIEJM7p52CZQgrl5bUTIg+EpT3nKXQdXHb5U5OCnIO1r0Ehe1ZwRSWaaV+S8nYAhWt70SKNUDAtXZKs3tk7MwDhEvN7Az7Fy+LiKvHE6d/BdT3/2039nrWwIeegc1aPmNaSi6BDvRAWDqnxCcAkD+9NGL2FinXe9k0fjJIoo7bRTgYbaDonKxfXRiEU4eo3QCNsgAYVC1UbUMr4Cb5OmIeQE+GrQg3MH3wuR1yjwIZmmOVet0efKGrNlXlkQI2bExVectpp0dqWTlEat2QNlEln3WdCs+Byxby1YnmMYX90JkZ89ODz4+7feeutvH7dClpCtkOuqwLTBiq5ZFAmQopdRbjvOczBTQm4INjLMSWpbh4baDokCo6ZVskFVBca1ThLAKjgre6EJxEba2oQXl96PkAfL+fPn7zx37tyPTDL9lM7zh6SuNS7U3vuAsno5u1qd17JPoMxt7F4sFv8qG2sXjIyu65iIDA3IFLWGqas7cbtM8spbb+XqTrIDjg7cJhtW6bGbbNQDvlhtVP/9WjGq67IKR9S2Dg21M6LYUnmWTRKdwesbF54sG9GxftQ9BJAad21GECEPjrIa9OjHJsjroLgnvurr6qghagph8JpRfMFLrqj5PGP+ZRPdPnDsv/S+AV+LsIkoW0VJfhLAz83AK7m6k+yMgyOoa/FYqY+p526qreFb1Az6/COHhoscUts6NNTOmjWFMDDSjsWFyhXVWvyBDiTkoXDDzTe/S84d/DBEfwbAxxef5dVnrOqj0eBI6aWvdTY80FLHY3KbknYDbFMYYKyLFGPZEpH7VfUXpmn6Qa7uJLvloNnwdhnhXdw6Bu1/Pl9zGzomt3O007YODbUdsVbQo3p/HONejuErQwf+Kj7akH0IeejcdNNNf3h41VU/CMXtk8inADRTknO183N1w8zP63E7DzM4D6mGnAiigRhRjBWVKzgF+tE4N+562fksBL+sgp8+PDz8vmc84xm/1/gSshNs02g5vgPk9J2ecJz8StKesHmETtQJL0keAmv2A9ky3unRJEybKnkO29IpjeJqc4JyPD/ftFkuIQ+V8+fP33l49bnvhsjrAHx0EhmvevG6b6//o2LQqg6kGVTrU1nqco3jTlL+xdq+yEQvA562RVtCuNx44p6uiELwjkOR752m6a89/elc3UnOikVi/Ky6ruiQXFEHQSAeH1jWbvt0hU3wW59bh4baLjhsN7yFK41Q4RvlENzi33rcT+upLPtOtSGaNAYr8QjZFufPn79zmqaXisirVfEhmdZXPoptIdC6eX1VYDSnMgpGVBpBKUmnvjYT5cFXmgp6C05EINOkELlXgHcciXzg1ltv/QRXd5KzoWzPoaGyR/GIZDlbM+BqsLCgxt0UdrEwulxXYYPf+jwtaKjtgkvLhrc28XghCII2Ssp+s3D5vzR/p/qPJBZB6HQZdSPktLjpppvuOjw8/GGZ5Kdm1Q8NDRkF5rV91moVHvoWitZoz12eNkTDQIk5Hk3D/m4hWUBEobgXgttV5JXPfOYz+bqTnCEH9ag3vJZ91ET7NznVCEsdnJxM1FnZz91G7mR70FDbCf0npGrFTjXclUKp/DbvIPiZk1GOYhLuImh1WPDMh4ScCjfeeON7VPXHJuB1qvrhZjWoVfLRlwdQlc6KmVY79OPX/5U1v8byalmysgRoOkuqn8Csb1TVV3F1J7mciGLkVdwNsJERV4/y4IFTlNAg7sLYj68+tw0NtZ3QfkKqaffD8ZggUIgSiDpsYDqvYyhEY71IyKlw8803v+vwqqt+RASvU+CtAO7PYRqkVGiz08Z4HU7C09X3cC5ucLmwHDfPJkSuow0i9yvwCziQl9FII5cPpYLmUWTBymbScBkwORiKQuioJGf36eQN/DLBaUFD7axwpbFGHUnrA1UBCQonhvIeUiekVVGNJIyQ0+HGG298z3R4+LJD6N8SyH9oPPNreK+7dro6m9JH49ZIKzvrsfhJFo4BlryUPd/uB/BLBwcH/4CvO8llxbQIjbf5AmvnvQ7H8Ij6Z03LLGEacQl23epIHKeobR0aapcl5ZWPVqWyoK6ARhJiw9Q1zAjxeWyE7I6v/dqvff8jgHcr8B8E8jMQ3FdWTvammNff8pm0DXU1WnQDslfTwXE9FI4r5eJAMdBURO4T1Z+bpunvPP3pT+dIGrm8mOdSV9M8tG6ILRMMuzWqkdbolcX666L3M1HJFqChthPWVn3aSdIojXP2C70YBepUbDGHTYIXDb/jZJiQbfOVFy7c97QLT/tenfDdAvysAPe5X6zTjVuq/5GNRtwJEBuMcOqhABCp3+5U4GdV5KXPeMYzfmu4KIKQM+MImFbUuH+XNndEsMjVeqe+BKgyGBYlVOVh5z6gB/DV52mx8oTJdmnnqKExxkaaqMwtCKLSHPlcGxkoOD2ml1R6XGV/KkJ2jYjozTff/HtycPAvZtVfB/BxiIxNLlnVIotz8H9AVdpeC3n0KEtQ03EoqzvPQX+IrzvJPrGMRh8nQGuUAHkUuju2ME1yfPW5dWionRGlY6LDzQlqL6gECu5FSIpgFG3iRHlqhr+De+kRbRBeQnbEPM9/KCKvEpGfBfAJd2+qri4GVXWy48awqp6bz+uIwOIST4AYRfEJKN5wqPqqC1w4QC5XjtInpKKf1fmNdDLRvm3J6RXBSzIZ/cmpQEPtjCgjZuNtNBRzMeQGQuGCVeNZXE8i/3X8XOxzI9mfkF1y8803v+vmm29+M4CXC/AWiHymei6Vtan7ndIYuDi5fntIhWki/5cCCABM8hkVvEUnvJxGGrmssW3UNM1NlvLqfpOIAFXHtMZaiWJx42tNBNnx01H6fPW5dWionSVWybNSceOsykAXwDDhbJzMeBs92CrM9tkeQs6am2+++fcg8v0C/SXfuqOp9zap30/7UbGWJW47N6BGEZOvQJKF+wH8koh8P193kr1gKoZZps7h7L2A+C4ny1OVm3Z6AAZBndad7z63zUifk11hRlWWIze2cu8lIhBg7vfJccNtNNHawxahzlcl5Gx42tOe9g45OPhOEbwJwCcwhVodqnHtaAyqblY6YsdRPtYUjhZ5UhH5hIi8aRL5zmc84xnvCEEIuexpxMLe2LhroyfCWxl372TKNpSuqsicXXdUXWKeMfrFixxS2zY01M4aQdfDL4qjeGYBcqEpL0cHaP0pHaIsgMZobhwhZ4GIzE996lN/Ww4OXqqC18+qH4NIHUrzKpw7JZnGW9rKr3Za06o+gIjoDP3YLHg9gJc+/elP/22u7iR7hY88N0JgDnnbjoHOadCSnhtyHlKDDNYBAUnCBHBE7RSgoXZGLILTr/uUKm/9iJnYj4gAk2keE7pGZlyQ/LwopKUHdIzSI2SXiIg+7WlP+92rrrrq5QK8Hqr3iogusmDhcr21eu5yofaqRsM5fBuO+MUplxmRT6vgdyHy+nPTwctvvfXW342fuiLkckfmgVwUs6ocZQWz5hZlzf1t/pqfllQtlPt11ybbhobaWTMQmIWxZxWM+rcc+OlUlyksEwwE5XVoFdBx0oScKTfddNM7bDXoGwDcN9IBtf6nOhxPvUPiaFBO1UtwP1TfCuA7zh0evuqWW27h606ydzRVvQqB1FeXQ2MqfxEEZnjZXyfKTTTW2gNy2tBQO2M27r4+cnc3rT+dvLhw+bC0DIWZlhq5PLlw4cLvTNP0CgXeKMCvAvhs9I+jAU3db9cPZN/qIkV5fVZUfuVgkpfdeuutb7pw4QJXd5I95Cg7FPxli6uL3NwPXn02xpx9MaQz8MTjBimLSc1c9Hka0FDbMU2ljis7RwyECXVrDQ3HLfV9kc1biAbasHdFyGXG0572tN8Vkf9jksO/B5Ffy8YaYCIQ6rK/9lzzd0MOwGcF+ms4kO+/+RnP+NUQgpA9w/bnWMMqfGz3T9T8B72xSV90BiA5FWionTUi0Glc2xXhVWWHQGzVZw7iblnAxCaVljQ3SB8hlwEXLlx49zzNbzuAfo8IfklE7hPgswKf6N/WYWnmUyswLYtxRGSG4JMA/gOAn5CDg+85ODj4ZRHpPxtCyB6hUxGHvkUP34wOfwW2RVMfYcHjjIwxhW2c3uuY8gkpjqltGxpqO2H51mdXsRWQOTva6JfULXE7PwiggxE3FWCe/LVn698JHCGXORcuXLj41Ftu+eVJD79XBN+vk7xUob8J1Q+JyMdFZPZqrf66xw2z8sWDD0PwIRX8poh8n4h833XXXfe3brnlll++cOECl6eRvac26137vuyX2bT9vo+mC8sI6/E03lVNbRhAmIGLFylW22atuMkW+fAHPvDcI+BVUDzN3RTetSmC05zWMH2vpwiIPbawz1oVSA8T0nX/JV1ABL8u0/S/f+mXfumv1ECE7AFvf/vbvwXAF6rqV8mMF6rgaqBrzS4C+AVR/c8AANX7brn11tc3IQjZc26//fZv03l+hc76JUPjyfZDEz+uqkPLIIAvRHN3FyPTH6Yrqp9FLtGi0rFjUXnbAeZvf9G3fut/8eDkoTN6tGTLjAw1oJS+JoOqCltyL9gkM0eLwAXfIkw+VyeM1GVDTkBDjew3v/Ebv/GEeZ4vZHdHRN55yy23vCe7E3KlsNFQ0/qznGZ8HnMX11aFlqnQRW+YV1FBYf5ziCsibzuYD779Rd/6IhpqWyQ/HnIKREOtGlNGOY4z/qO7CVKgxLeh5yg9ieI/SNd7PjTUCCFkr7n99n/9bTrrK3SWsaHm+iMutKkjZTZSMDDUhgMA4a94vBjIDbWDg29/0YtoqG0TzlHbMdlI02SkVXkR/1dcXJDmOjdtvOITnmby1ZpGvSohhJC95qBMSsZg/nNo5Ruv+i5z0T3ZxpOQXozraimed5E5RW3r0FA7I9RrfBKuxpDTMAetE0LrEYUFA1Vo6j43rV9Jo7gPFykQQgjZP1aa8+icDa6sexr8yx2lX9+S39Sk04u01LYODbWdsKz6tPlhVQDE3PLQ8wiPV402NaGJp9Uga6mmm/lxTI0QQvado0aL57a/M84CUe9kbaDmj0G8iKfRhOH2HFuHhtpOWLZqktwZse9vZgHDYJ+bHGSEpx9H4xCMuOpHCCFkz7ENbx9gk+7Bs45ZCLpjbVguDxwYNNO2Dw21nXDYFLTGiZ0+1JXQHC6jWB0VW0mysOpBCCFk75jFpsGM38yM3OLbFQwMts2TY2zKjb8ezd7cR23r0FDbEbaVemugAXWH54iaoAC9FPhpFrRIHdJOcReB7USLEELI3nEEoP1edFQLm0bDHgwlPQ3/xoYg2S401HbCpWoc1XpeT3oBchtLYK9Fg58HLYZYKyFVdHSw3toMO7F9cXpfQggh+8Xyrc+sVhA681J6/0Nqx75xXBIcDggEf3L60FDbGUutllT5G8EKx/lczaETqmjc+c9AumK83pcQQsi+0qkFKd+6HaiCUehVot7ww9XY88xZaqcADbWdEL716ZV8xWiKxwKFyrJfWiMkKxsSLr2g8QQ3BRcTEELIFUdo1nM733Xuk/FVdUurgIYWmW4aNJgm2mmnAA21nbCs+qz2kwmEjoTIGH10vZWS8l5Ux/LUpSso7zzLx94JIYTsP7aQAIte8bn+49E0IxhiHmzRGYuCcqeYfvYjpwsNtR2wmGl9RUfuxRguMHllZ51PUIWsBIyhmnkJkbxRISGEkP1m8gY/9NjVHOy80wU4gaFVt3oKYa2j315nYZ592RzZJjTUdsBhePXpVGML4W+lWmndIukuqElKtdlGw9GGy5T6B3cJIYTsMUflz2A/s4jZWi02Cte5B6oqiTolRFAzAt17mmhSnAYs1Z3QjKkBoXJLmINW/aBDAREEgUyRtP5sEFgz5MQ22SWEEHJl0nTIH8pK//gK1RWN65r6Q04TGmpnhMKGlOdilOUVmdWQy/vj2IiZouyz4b4eXS2tLDtmowGqmG1uGyGEkD3m6KBs0mntedUDpjdWp8EYMhiJ06RrEPWTWWZZX+WBA7JdaKjthP7VZ63nUip5FBY3tlSWjXKjZwzrr0Y1GGNSNqvuKMafYMKyqzQhhJD9xrfOjPZSbOHzdBgfbcsdfafaZSt9enfrDDlyKtBQ2wn9q09gqe1RuDTaUGqvRgdCICZEa9/zXO0l+Tm36CCEkP3G9rvN/e4y4d9W+bdexd+6+FW3NJ1/T3CJ6fqk6A2tfu0rUXJa0FC7HAiSJL7Sxt0HQ9OFfm4bLH424BwfpYMJKiGEkCuAbKlhMZ50wzYd1QAbRC/Kx/SR6436fc+UYBOf3/rcNjTUdkL/6hNYBCnLyGJshUCB4qJDYwzAsqVH2ylahFVKKEIIIXvOVDrmjTGWjrMhlnVOR9xQPe7qpBiZaQ38Jvv2oaG2E/pXn1qNqLHItIIxIL4StbRiSlkwgTbMWrKEEEL2B5lHryCXyWUjXZDduiAa/pn/ojO0GGsWaW20jmwPGmo7YWVErdpYnZhsxg0ukTIUbQLl8jINFgwIQpjV16mEEEL2iWBPBYurfLlm9bXnYC9NjYsRrPOPZrpMTL8dwXuAGow8QGio7YR+RA1FVjBD1yf2r7j7ULTM47hNb8m8PZSoCyBFixBCrihqQ9+eD421gNqP22fx84V59G0JFQjpnzvHj31uGxpqZ4igreANWvZJyzSGmQCYBvMFzJCbTcgWmS09LEIIIVcC9mUCJ7XvErbXaIy1gW5Jtl09qXOmnWyj5a/hcJLa1qGhthOWV59NhbavBAyFxt2y4NnctGKwleHtPrbZcHMZnq4y5l8k6Cw7Qggh+4ftzzGk9NKX9r/zXaUx2vJihLS3Wh6to5m2fWio7ZhcqdekJQfLFENu/JH1OtcgC6YLnH/ZgBBCyH4zlW3R196W+IhXO1J2kvbfZk8P011ZrNDt0E62AQ21nXCpTO6PRDlZEZqRMbUmjKnDYw5tYPWJpSu7TRNCCNk3VtT4QAcASfeYdzeA4ENp0a+G0fIlhKhTjBkAZ6htn5UnTLbLIeaB0eUi1NhswRgTADq3UtWuEF2OdWSsNQagYvLTNQEmhBCyX9goVm9sKYAyNUaiv8C+WpB1wDI04EdqRwJAJcxxDp3+OHgwTaCpdgrQUNsJ/arPKjj5fX8UKPuE1ELZ5HYROG383flAy4ONfhI2KSxHWaoJIYTsF0fQ1VefZU5yY6ChGHBd6y/lR1DmP4u4vjA3P1I0K0K7S4J22mlAQ23HJLOr/B3WdlivJznVIxt+Hrw2naGYNfaPlnBlroKsiRghhJA9QualNW9b9eXD613X3PRBfUMTPEWkGGslQFJavnit/MbpNOT0oKG2Y6JxVoym9OkPpwpIK3pzXQptRtzA3hIIJil9oMVRMNdTShYhhOw/BwCmMuI1XltWtUD1EzPPdNmHM6sRN+BymstbGotnnnGw4SK359g6NNTOiCIog3kFAS1DZo2bBOEYfdFgMQB7v4NFUgeiSQghZO+YluZ81KqvqRgNBlb3ViesEs0jZkUv2fEoLtk6NNTOiioFyd1ZW5mZpS6d1zkJNpE04z2kwSwFQggh+4g35xua9Uaf2MhYnA8d6fRDiBzT8ePoxi8TbB8aajvhsCno2ANR9PPQCkVQ1uRuMcZaVExqBnaauv8gHiGEkD1ktm8+5y8EbEDDorTyBqYlvq1RKef1u9IwQ882X6+DA+TUoKG2Ey51+wC6QLlN1WOrblaEbyRc8BEzBTD1BuAoHUIIIfvMoFdu+FSYjKAYWTCdIXF0rYZZUJ/PJubjU6SDsUdODxpqu+Bw+YRURV0Slp5NrOsSzuv+ZylMfnixs9MNXQdE8n5shBBC9o/yrc8402Wt5Y8jXyP94MZWZ3SFvdLKZcpoQLOTQIzDxQRbJ+t6chpcutSaWNVIa+lFx77NGYJrEKQ5bVgo7q+AdNJ2vKASQgjZJ5Zvfca3NOUg6A8ztpYwi182tOrIWtA97l2O+9c5cTSOZtr2oaG2Ew4bM0xCxV6x2QB3N88qO+GNZozXuK2MqNVeEeeoEULIFUXUB42+CMZaJRlmazoIQW+cFC4m2D401HZC/2WCyLK/2YC6Q7SdapTCdYMrfolgcTPB9X10CCGEXBE06kCKw9qombsBKyMFPh8t+9lG6tEQJKcPDbUdsGambezJuGANjLEqHFoMOT90hj0olECdGyGEkP3F91HLo2ci9XOeI5tLtKqPIe2ggDuWQYBq463pGrJVaKjtgMPRYgLv5Vglr68lBQAEOhgRA4qgrPZmzLjr3AMq9upzk4QSQgjZD+a5dsKbtj9+03P01QJZDLDOz1D/Mb1TwzX6avk7z3l/A7INaKidEV6xff+b2DNxM03UJCQg2q4CdVH0UFMapWvkNgqm6vpQHyGEkD3gCJjW1HjRJNhkiPXrAowyUGDjBuntT2v1SXhTM63mhTwUWKq74FJvEdXK3XRTCloNtnYvtDwGJrAwoeczB2Osuoe4GueojQf6CCGE7DGqPpPMNEAYDIiI6ZqMolhm+e1MDWvudRQvKyeyVWionSHFuBpP2lSY27xIkZqhheb15fJVz5rEID2YUE3KVZ+EEHJFcHSAuJt6bvajEZaNLpj6QYoXtYOrkhpX6k8DNcrpQkPtDBGULwjEzQrhvRn/zV8YsJE4sePwp/mbBUeDeElaSUoIIWQPsW3U1Iwpb9dFyiefRsYZEHRHXbQW9ANgb2qWiWlu8JVOftQmZBfQUDtD2l5KQATqH81Fb3XV08H8gjpXIHvYNiBqo3H5koQQQvYTGSwO8+95Stj4thKNOjfCor8zWKCmQB2KWzUEyVahoXaWaHm1mYVomb/mH+7sEcgwrgvO6PWmhy1CTQkjhJC9x7bnaFp0m+Nc3p6MdEHprGcjrZ2D1u+X5p8fdMOw6qrARX5CauvQUNsJ41n7ApR5Zqk3pFVwxq8oFcA89LHJnT5iZkmPTLKR8BJCCNlD1FZihma9LCco7v56cyFteu4dfHe0jn415iyNxbBbFhtwVO30oaG2E/pVn3E+QWap9/2IGeAGmJT5a3au4WsDEr52UGVXilFYR9VG6RJCCNkrZB6152pz1MI8tWBQFf2zOFT7bMXoiv5l04/iIrZATbIdSLYKDbWdMB5Rg1XuFdlYxYebazwtQ9kuKBMEB8Waa+JAdSi0hBBC9pPaGUdo10Xq1BnXFz7oViL59h126kaaOUWjq772DH4+UufnoEo5VWio7YBLgxG1BR3OJ1vDw6rY1h2DkTkX3ChAOUx+3UoIIWTfOMoOgeUNShkJC8bUqP23zr9U/4FyASzEMqcmvx3iJ9m3Dw21HXAYRtSaoeWV+WMFHfZR6tYato+aog9WBceNOne3XpHPOSCEELLP2P4cA8o8MttoI76BWcH9F81TlET3WjVYfHHemsOlBNuHhtpO2DCiFueatR5F1EZeKPEALfMDkqC4UGaDTNyIE9BSI4SQKwCdxt/XLCszdZmvHHSJb93hZB3iaIrnjmLvUSV/XxTAuXMcU9s2NNR2wjKiNhKI8k3P7FiMsbQ2Z/GDGXnJC2G/tDy83Qhq9CCEELKXeLOeDaYyTaY4Nn7qCw16HZGpvj7nzdDGM+i1mdtznAY01HbCYEQtWkp2XAXOfnSwj9oicO3EAIn2W01yCSAmTD7KJpxLQAghVwBFjedBAEl7My3+UkbUbMQtUvWLObsuKoMJwdP9LQmPN1OvnAo01HZCv+pT7OsBUbjMhqrykAWvuC2fYQ8y2IjbYrAtIaKY+QH7PYQQst9429+pCwWgNj0GjWIII2lBi1QFBFsRWvw8RJ024wbg4NXnNIGm2ilAQ20nLCNq0bhCMsz8sBpow2Fpra9K86a19cwEMwuumrARQgi5MhD/KvuobQ9KIOqHuKFtpfus9LIMtJptdTBtCdkNKNBO2zo01M6QWYow5ClqVQS89xJQAWZzG08hNUFS7Uy1xUjLJh4hhJC9ZJ7cnuoML7hdNnCHrm8NVT4VVYghumsMzjlHbfvQUNsxXunjyFau6GqORYjGggQAk6RNbf1H3MBLKdekVhYpEEII2Tt8rljraN/z9NPgJSjDZMe9YVnmNS+xo17y+PnSZLvQUNsJ/T5qk9V1f8e/KjBBAmQwry2vxFETrhFT8OOYGiGEXAHE7TlCs66mb9ypVTFp66dBn77REHlAwDxdf8Xo3J5j+9BQ2wlhjppV8Lq3zbRsSNiQ9rnBSHgGVENstGK0/qWZRgghVwYH1kNvXUUWKy3rEje8qnv2jwMAo0EEaa/XpU+2Cg21nXDYFLSm3ZzX6njsDWXEt+9YYSRbcKE7wS7VhBBC9oAZsJeZvVFlOiTrkrzhbXFcDuMcNVjqi4tbaWUozUfVyOlBQ20XHLYT/11wSiVfttlo63oQvNhzsb95uDmT41U3E0JCCCH7zlGdR+P99sYgw6IHJEybqRveBnqtUFxEgdnew9iVXIuV/3NELibYOjTUdsElNGKQ6/Vo2MxEBOICZu4eVBT9itDGv7tKK6jZkxBCyN5T2/bY3mvxiGrB/dTc3W9RR8tR1BfiXkFvRRVGM2370FDbGaHSpwUBnREWPKow+b8kVCFo/acCzN24dhun9yWEELJfHDSvaxpdYnqiMdYGZHepyqacN8ad/eaOvp/P88zFBKcADbVdkD5MIPWn65hUN/jK0PA9TxcGX1q91qMBgEnXJ7htmttGCCFkf5CgxWvTLmiWjI0696PRNR95K//K/BpPZxk0sA+9D9KcyqcJyJZhqe6CS8uqz2o/uWAkgYm4MERKb8c/PbAIYhd0JEQo8xLKRNGVixJCCNkbFNJ91xNaOvRVwQ/65uI/QXlUneF7pVk61S8adFyUtjNoqO2A+En2Zpg5VvqMC07eYiMaYII6T83kpji7EKV0y5Yd9az1JIQQsoeULwwoFr1R7S07WjOolnCZMqIQ9Yo7R6Mw65h5XvteDnko0FDbAYeH/UfZ1XoxVbgaSSoOmp3TeZGRICmeZgiU48MMtl4wCSGE7BdH9WOC2WiCAmqO2WvNraEfpCtxwuDBbGE8HF99ng4s1V0QXn064t+79ZWbjdQUkSjzBVpTSzat3HT3kJaGcD4al/fIIYQQcgXiumDQ4Fe9kNyLW+8aDbKRriGnBw21M6TpnaRRsGrIDV59QvyVaLvQQNzEG/SE/HwCMHNEjRBCrgAOgHmqDXzbSV+mumwyqLJfPM26pNDuwVb0WPAmW4eG2k7oX30KQuXWtqLPy2bTzUa5QAorqPtFR4NtCp+octRXkWpZVMBNbwkh5Aph8M3oOJcsLyzz6S91nCAtDPDj+AYn4v6ebk6fbBcaajuhf/Wp8GGwZVQMVuFFFCJlp+m1HaSroRdGx9yGOxr0ktwfKJHzIgVCCCH7y6hFd12R9YFYZ70bGatGmNTtORD2YisG3mCkbnRxsjVoqJ01vtWGIQoopKzWkSIAWcjK6bgLI+ojZ73k1B5XWHJNCCFkj5lKh3+tTc8d/Ur43mcfRqsO0eCf38TUeF18sk1oqJ0l3itJznW4WUOgQHVZM8Y8TesNOdXgyxckhBCyx5TufTg1ReFbC7Qk1TAMgxXnaBBWPRUCXuS3PrcODbUzQl1SVuaKLcZY614Z7KcmJjh15+hMmBjK5QSEEHJlMDKYikc/dw2hQ+8M1ZANGPSjbuUtUB1ly0Yf2To01HZCv5gAWARrbch6FZ8zMNmiAG33RjuAYILNMViilHD2N79OJYQQsp94c+7tvB/kzz9VBiv/s/HmFlg10FKERms9QBVGHhg01HZCv5jAUdtV+oFQvgEKyGxxW5us6T3V3lA8l7UuFCGEkL0jNufxOHbKOytsoXbgTUfoYH/PJYZZdDG9cMyPsm8fGmo7YN1Me+DUZdXuMEn9LNsSqJzOYefo4qzdEDghhJB95ag09N4hT8NcEtaqHTcCVp0Ge6c1I3Kpo9+9WuUcta1DQ20HHIZXn02FFt/rJotFKzSNuy2p9g1vof41twU1QZvmsqqnypiY4DY9K0IIIfvJAXRNi5tBtbT/rXck6oRuoMz2aOswAy3rE5pp22ftEZOtsoyp5UpdHLODC8socHEuy6SX5dUZRZ9uGdL2uQgrEQkhhOwR3bbogfIWpZt/1u4KtYLNnh4GLKm5Tonw1ef2oaG2I6Zc25tuy9hoGrmquOCUAw8TU1+MtGypmaF4IiElhBByuSOb1HhcUObKoiqWwTtOR+vP8vo0xHeV1Y2ozXz1eRpseMJkexxi7syu8spyJCfeQxHkLwj4pobSmXEa0qq+Tdww+jYy4gghhFw5aNEBnZ5xh6wCmpWgRaNoo2mWI3uh04+oTQA4orZ1aKjthH45gSCsnEk2XOz5tFt3lK6M+Lw00WanaI82qW9WvfhJsx3i4KKEEEL2jCPoxlefZV6y2V0F22vT/Zeg9t3o8u3CZWsP1xY23y2/6iSnDw21HZPruM8fGCLrQ9NlW4884laY3S+aZh6uWHiDnBBCCNkvDmpr7ovIHN8foBhZqWveq42KiEDrYEBSFXXxWvmtrz43pEceOjTUdozX5zrBM3xvraEKSGtQLYbd1K7oCZQP7mob11eLApaLUUxCCCF7xVzUeNYjvhm6oDT31dsMutJ5L6652+5vYyTGC+41nnnGwQZ+Qmr70FA7I1x4snBFtAyZNW5ShcPmHkRbzH6KQZZFzzbKBTyV1pMQQsj+MQVDKaoLN6KG3fISwd17/4U8Ylb0Ujhff/FDtgQNtbPCezprNtPayswsUVFg7KcI1op4moxxew5CCLlCGDXnQbd0amaoXBaWj08ZIXwXNV2b23NsHxpqO+GwKWjv/SiwfKqjo9T+kfyh9nJ6X3WJHNhp5XrjeIQQQvaR0uiXzdOT14amXlyPDFh2F/ARs+W70iWAbdRul1xLh2wHGmo7oV/1GYeq1+q4oshKfP9f/fLkUEP8belAaEfpEEII2We8V96/J/E5zaO2P4fNxlaMorp8VzoaaJ7IKH2yPWio7YLDw/ECagEk7G8W67r4suqBADlZNmJnR9cioUwIbbf9IIQQsn8c1SN/UVJb/jR9Ro6ZE+2B3eyrzpr9ymiA7yTQDRpwMcHWoaG2Cy5daswqWZl/1smQ7WuD3LvxJdFp1ExckBQQbVeESvrOZ9/3IoQQsu80usXafAmfDxyFy8aWIFh+yb3uAZrcHZpp24eG2k447M2wajCtU6av2SaE1bH8ia9Og3P5K8UQawRRyzff7CT4EEII2VvC65qoFrRYVYtfbvbDefQrRtpyPnytOXIzuJhg+9BQ2wn9HLXIUBCc3HmJw9fB4Moy2H6JwN3sJ4zUEUII2VcOmrOqElIDXw23iL+QSQad+w3dvdPvxwN/sn1oqO2ANTNt7RWooxiPfjXCMVg1ujq3TQcWHSGEkP1lsg59mAnjusW75Cs2V3Xs1ILris6jpLmqY8ipQENtBxweHmYnIMiAzx9ANMLWBChI28ivzkNYkUwV27BwYOARQgjZQ8I8tOiWP7PeMXRs9Y8HUddPQbfkEbV5Hi6bIw8RGmpnxFLhy3401T5rRtm0W50ZFwQArSAixB/1dFRMoGHGGiGEkD3mqJ2kltDBNk1ONbzW8D3SltNer4TFCgAwTTQpTgOW6i641L/89MpdhCB9kqP6u6SMpakIUfDzHpUnF9KsoaQI7zhFQggh+0rXiQ+fe8pGVjXCsvF1HEmv1EEHcmrQUDtDNI5spYqu7qbt9z4bdzGrzKjy4mm1NtzS8wmTQQkhhOwz07DNb74k4AZVYqQHsl7qouUFbivpkO1BQ+0MKUaVFDusq+lmTI2Grj2s/zX/6DwSSkdWRugIIYTsEwflzafvk5a915p6C+i6Ik65KR3+tpffjMbpskk72Q001M6QakwlYVJ7PXkStP5EBx85C+413dJbOlnqhBBCLntW9EUZDMiu41GxBlnSdL3hDFQLOWVoqJ01g95JfEUZ5xg0YSDDuItA9ZE8bBlRG0kvIYSQvcK25xjPPB65LXqn6pqRxoj7pQVn1x6ectVVxkV+Qmrr0FDbCePtOaqRNXi9qebeCY/5zSMf/7SUG3dlQWlOGgC61aKEEEL2FJ8/Ey0rtYOBtSUi7RSYrCQsvpieEsRBgKJU/LwsJsgJkG1CQ20nXCoFHeryMpzstX3xqwxGzAA3wGR5PeqvSl2wAOi0yKpaGNj3Pv2UEELIflONqTDPbPGQRddE/VMNrBghqaFVJdEqpSnPYSNbh4baTjgsO92sVOaBvFjg3hVRKKtVBogNPZdfwYEKptjL0WL4xbkGhBBC9pumQ+6ItffhFSfiLBotc5VjnKye/Nx1xpoxtuJMtggNtR1wae0jUrZzdBaYgllgiWY7DzfOBsaXpm0QaxBPkkPVhBByBbO8QSlnQQ8k40uDv5h/3d4jqyEfIQjuUQedAz/Kvm1oqO2Aw5U5avD5Y6s2Uz/BTGzemmoRmCxDEUmTQaswjoSPEELIXtN02qXoiFX1skJVDXZQdUaksfrIaUNDbScsI2rd6JeUGf+du00OzfJRkRJm4/yA5Cd2/XKttUiEEEL2hc0tuWL2gbHc6Y/HK4l4nz7HrR4jPw6obR0aajthGVEbCsRo0cBUDLhhf8idRgaeCc4sZgQm93ocPQghhOwptuPtEGv0oyowI0uz+wDxny5cXrkQ4O4cW4eG2k64hCnV6tHrRw+h/pM+H4Xce0lpRK+RDMVJpUMDkBBCyF4hvpHaCP9ctOucig6/UJO0DdS/WhDtMt/e076GENOdAVykpbZ1aKjthMNu3zNthKeIQA3RWGwtoouJlcWsppncneq+FoAQQsiVgXf2nag4qpEWlEE3SNbqpTou4PtzmpEWBw8mAOfO8d3ntqGhthP6VZ+tQLQWWTHefP+NjC23Lv2d7FlcVuatBZuQEELIlcDA5or4W5SqEmxrjo4U3/VLVkNFjyyOo7dDZLvQUNsZvRTpyupnAOXVpPd8UtRlcmifplOErE3Zr0cIIeQKIYyENRphTT24SvGvGSzODX4eQ8kgHLDmSLYFDbWd0RtN7j4a/VoqfvutzzjMLBh0d+ou1OYevUfXIYQQsteoDNr3lTcrhVZvrNlZcV5zw+Ab1Opz1Pitz61DQ20nLKs+3dCK22po+G6ao7Dh6SQM/XYcyQA04Sq0Q2hT8Jt1PjfN83WqurLJGyGEkMuV22+//etUj/4ygMdWx6QbjnuL4n5DWywPAkRCYNddwjlqpwYNtZ2wzFGLxpm5lOHkTkp02MvJwTI1ndGK0fhX8DUXVf/63Xff/VVNIEIIIZc9qnotFI/XWa8eKoZNhtYxBhyQlE3zZiatOugGD8i2oaG2Ew6bBdR5mHpTHV/zK8PR/YjbwlhIy7UVUFwNwTXZnxBCyJ4Q5jCLrDb73RsbWNDGwEq6JOqrPmlf9pndyWlAQ21HzGg/9xSHpEcVvW7C0UsIsCJ4ER2EyedZMAkhhFz+vP71r78ewK2q+ih3GzXnIz3g5PArwSA2HlDDxwVu5rh2DbIdaKjthEulRqfKXc5PMCrW7W/jPaHWNQrTyL7z3pPY99+yPyGEkMsfVf2jAP4UgMctjkmV+Ea1K68mY/s/mifdkOOHqTVdPC4m2Do01HaJG0rBaHJiXc/HjUBFoUqe9fXqitBp2EU6GnWEEEL2DT1UxUF2rQjaV6MPuMEPEbI+GQweVLiYYOvQUNsFh+3Cymx4xb/xuNhh5Xue0V9ioEBMq8xhSwEc6wmtChohhJDLHGnWC0gyxlS12RR91Hl3ZGh4FSMv6x/30mPSJNuDhtouuAQAMosUMcpG12plH4yMVSNNzOAKiTVBB3EnEzzYq09CCCFXBvn1pU9x6a2sQnW2Ubc+2OIi8SzsJkA9shtoqO2ACZfuEeh/gep90X3jULQLTjLGsjDGLpUHW5uXoKp5xw5CCCEPA7JRZX12yPBjhAWfiuZjA0Crc1LEI/tHtgwNtR3w2Ouv/z1M0xsB+Uh01zA41lNcswDFsMUvhJDln/r5gPKdN4EC1x99/uhZH/jAB/5IDkMIIeTy481vfvOjp2l6JjAvCwkwUBZJCWRvZ80djTG36KuMqx0AH1TVt83z/KEchjw0aKjtikE/Q6QMT5eT5Iey4a2UQIt7GCnr7DCXooE0CZYFCOWaClE8CTJ/o4h8QQ5PCCHk8uPo6OixqvpngOnLsl/PcPJZZaAqVqkGWbbYluN7pmn6pZe85CV3B1+yBWionSGK5nV/iwmDaCsVCre6FJB2b7ba6/GFPiltF7QyyRQAcE6Bmy997tJf4KekCCFkP1DVg6bN9v7+UCEEtxHJv5ya48jIqxZbYbjYgGwVGmo7JZllivICMgmT2sdtISjfW8tSEM5FlpU/6jKky+iZo+ZeVvdIHakTyBMh8x9nXSCEkMsbVZV5nq8VkWKkue6wNj8vIBsaWkZUK1FdlM588BsMymWVRE4XKucdoZPeB8EfAvicuwlQRsWSFBQbqkz8V+uxZAQuoO1E0LXwCDINWZZuq+oE4FF33XXXF+XwhBBCLh/e8pa3PGqe57+hqk+Ht/Ur7f1GrMNe9UWyvMr0mNTT90PVbqGaiKiIzK0r2RY01HbEE57whH+nIq8RkXvdTe0ny1kxqJbvqGV/DzM6aVZ8JmGqPS4fVas+8uf0SL+tCUwIIeSyQVXl0qVLXw3giQAegagbwledOkZKpPb0l9elSV1Ul+FIXWJW/cQM/LaI3JP9yEOHhtoOOQe8E9BfF5FLi2v+7kcytNL2HAtmcY2MMaAsuE4CWntBSehU9ZEieuPd77v7a1ofQgghlwO33377zUdHR38XwNOz37FkHRI79ANvd4jui/porUJRYIJ8VFTf8OIXv/gdiw/ZFjTUdshjn/CEtwPTr6tqWAM6HjbrBCcw9LM11EXwyuvQUbjlMouRV+Y7yNcf4fMXlpCEEEIuF0Tk2QBuU9Vrsp83+M0rSduGCRiMiPn8Zz/N/rD0NnTwG2MtupOtQ0PtjGjnFkj3zr+y5i5unHkiwfCCYPIFAzG4BcuoqgB4jALfdMcdd9yS/QkhhJwdt99++9fNqt+owHWtz4qJVNeolQa/GzmzDn2N7v4xOT+2v60RGI7JqUNDbfdY38cw6+mB1HtxoVF0C0kzPhOtvWjxSVyrim+cZvyd97///U/NnoQQQnbPW9/61kNV/UoBbsTaNkq5OY8GmDf8cT60HWTbSzxMSK/XHcbieKTAvSJysfEnW4OG2u75iIi8v/ZO7BMdY1Y9FsT+DYIqgNkulDpOHaoqKnjkPOFJ8zw/UVWvzmEIIYTslk996lN/UlX/sqoOVuZbiz5o2Ms2TMtLl2zL5fednb+96Ylz2cy5TrWx049B8E+f+MQnvjmEIluEhtqO+eInfPE/V+AXqoMAMo1ExD17P8CHqBWwJdYZtflqvmC6hqnz2HrJFAV01j+hR/q377rrrufTWCOEkLPjzW9+86OPjo6+WkS+pKxH24y/ulQ/nvwbNyGM64NsgAV/Z65aJiH1Z54F7xSRP7hw4QJH1E4JGmqXC50kOL0kuZCVHk+/p81xdBNLAwJcpdCv1aOjv33HHXf8GVU9yGEIIYScLm984xsf9fnPf/6/A/BXAFyf/VtaJVCbeFMWcYsNqf7HKw5Pp9MZqvbVHByJyr99yUte8ospBNkiNNTOAsUM4LPhvPRumiAb8IBpf5ssS0UiW9c6t20UfuFqhTxVFN9x5513/qnsSQgh5PR461vf+ghV/e8B/FURedKD/cRfaO5b3HGDEnAWw65ldgOOVsSpwyLePRcx4XUi+E914qbhsrMYX/0+acXwivvYJEPM/mrp9DQT4ETtQ+9DsQsU76sUekFn/Vt3vfeu5+UghBBCts/P3X77N33qU5/6S/M8/68AngRgo5G21qa7ixtaTQgJuiTQqptyFt3isZRpNJ9RXZ9lTbYDDbUdIyJH0zT9HoD3isinSs1v6/nGV5mqaGYdhMBq/wTAQZmeUBEUySpG4GwT0hb/HgUU1whw26xH3/m+973vG/galBBCTgdVPXjnO9951TzLU+Z5/g4AX3mSkTSV8mpzSP0OYXTzTwgaWU+UvAAo+iImLTGpMtDwC4eHh/88BCGnwNrjJaeIqk4fufvup12C/BBUn6vFKOooNlzv4cKi9j3QbNi1pzFtLcaap7Dy1YNZynXriJ/gs1B5u054+VVXXfVrj3/84z/Wfl2BEELIg+FNb3rT1QAeqZcu/emjGc+E6J/RMpI2HT9YFdpwHc8lc//o5+kKpOqYHFc9rhlr4TJFL6jOAvzTq6655ttf8IIXfKaNTbYJR9TOABGZL4ncr9DPqeAoy2KVF7FhsTDPTKUYUioCXXl8UvpCFi3G9RWivpanRe3zU6Koy6+1hL5mFn2Gqn7PZz/72X981113PYuja4QQ8tB405vedPUl1T976dKlfzzP+p0C/StQ/AnXzXHT8p5qMo2ac2Mcv74qjVNjFm87L6Hyy5dipAGicocAv39wcBC+tENOg7GmJ6fO4eHhvdM0/RpUP5gFJApF6dUEYaqf9fBXoG1scYOrGmXBr46+FVOuF83FKS46mEq8qwBcEJFvnuf5u973vvd93Qfe+94nN3EJIYSciDe84Q03zfP8jTLPf1tEvkWB8zrYgmPdWOvd87znqE0a98ErzY7omJUJ9CKg//mcXvOa5z//+Z/LvmS7DJ8P2Q0f/sCHn32ES69S1Qu9ILhsjF9PwgwyaNsrqn7+23uVKAJgbnfYaVaQWrw49O5HMsn9onjnrPrbB4Kf0Wn6/S/7si97dw1ICCFkyJve9KavOTo6eiKA/xHAk3TWJwN6FbA0svk1ZW17F2fDp7Ak88xPo36wNyS1RffXn4NrAoBC2304Y5rQ3xdMr3q0PvpfPO9bn/epJRY5DfrnTnbGhz/w4WdfwqUfhOAZOOonjbp4qvYjZ8XffhdbquDTDgYGHEwg6xyF2gJIuV5sEeL8BnezE7vEfaJ6J2T6Nyr6GwAwTdOnvuzLvuz1FpIQQh72vPnNb370xYsX/xwAQPH1Atw6Q58I4BGlPS17NpVpJ4tBVZrhcTveNM4hSGNwxTY8G2JpD86mjTcX9bcwUjxNR3wewL87PHf4N1/4whf+ToxBTode+5Odcc8991x3dPHiX1TId806f3kWmvwF0G7RgBlc2R0x7iAOTEjVXmtm/zInwYTU3dEaby67IjKr6idF5DOWn7sAvLpNdQXrrTVM89jdmOtPwd/dz/VgHDm6TkejS6xPszjCSl4BzJbfPIdgJfgYDzy1EWfMXbrF3VjN8thj7LrCoBznPostTSGH8POMyWK6G/yZeZwU152m6tdetTkb3ZjPoDxqPbug+WZW6tGx957JAWu67rUEaNLdEC975qDNzdn9u1OZRVTOujI4KfGCoWLO84xpKg+8POGWUgfs2OpFZW7rBAb35fI6HfR+5WaOuls/8iKYLUh3gSWlLs2TYJHkQH7jmmuu+VUAOHfu3LUf//jH/4dpqX0x6GOh+hcx448o9BGY5BGquthACG3rQCurG1b1TJbGPYyoNSNx5rc6YpY764MwozyJyO+JyN8/d+7c7VxEsBvyYyE75oMf/OCf1Hn+ezrrMwW4Bov4NcbalAe7PEzqbVVDS1BClUSKkNftOTzxFNf+iv9YvOovJY6vGvX5EFojARA5guJz9dqJ4mQeI3+7xsgPQGu8ejJhEYTEZecBtZiCgcKZUfqzo4gA5nQvrliroeweMWvV4LX7CTTPIKUdma2MM811g78/C39C1dvCzGFeSq43zsbG28o2XrdpwFN9gftrm6fqlxqgGtWfpwdqPO00R4xx7Zqr+fHjQSdnNV20mdXk38QDIHNbD/Mzr9mN8fP1UK4pAGZNZWBlVEn+OT9QS2QKRTUD6kbxbJ2CkOi8oaw8/dqupPo4Kkep82bLeVMmFl9z2vDXA+bWtG9L2tndZScbKVkmNdY1I95rvo8av/h9HsBvAHiHOV0twAtV9Qth9xIQAa7ReUkxli/Ca8ZYDp632n6lRMvNLzce8+v3ObwXu0+kNP2a1V2XrT8UwCSiM/CbE/A3XvKSl7xtiUlOk/ToyFnwofd/6E/PevR3IXiuqh7UNigKmx+7nwuPGSfBpxpSpZlbWhZvUD3+qCEsKVjCGRfigULJjUDJfJ9G05DERgTeMpQPASMZXMW/b3wQ09QSPzfsDaO8w0qrz64FHcRprunH4TD6D+K6k99r9UOQypW4y8mKv6UZ61H18+P8zE3hVubgX4u0vV5TT8N1I0s97cs3+vnIbsyrotRt6ZMN5dt6KlLGUp5zGYzypJ5ETNvzWgMuGW6uaW45w5ueWywHxGvHeOq5WuK2abbXbO7T/oo90yaec0yec1n5Pcd65Pmu94OSZrwf5OtbWWg2wMI17a5X8r3Er04uV3bReFd+DVFU4ye61wijsrRreX4avxqkNYx0VJfW4qHNbC1Hi1fTWkJA/a1HuGYbZFzXsl8XD6t5/gSA2w8PD1/O1567Iw4IkzPii7/ki38RIj8PRZ2UWRuQpXle3MPISJSvciwQAVQsVhRS6x0V+QspjoRU2m1BEPIw8hslEVETdPFebmr4BYBouVuN1woBFIvibrziLSRlkxXxGjnNyqpHfiibycmUO22x2w8O4fgBUOrIUo75OiPWV5YtdS6n5Ok3SnLleBC9IiGt6lDLqF+97BQ9k553PElKqiGMtqwS65InpcWIrcf5mttglK5tl7N6P6WwltMUrpG1tTQ2kO/Rz0Wk/AshPH0xf6BvLyox7OA6CLdc246BX3QoHdfWCIvGkwUrfvZ3aKh0lEDdNQMxmdouqda6pDK+VnZqZMfKLoeBtfWbWd6i9NddHDqvgFpcEVERef80TT9NI2230FC7TJgw/0cVfTsGDUExugpF8OO/HLq4SxHjgXCWRMRGrorRVJzdiFtarzbt2tiFhqfSNaIprsVfa6gqOV3D4682KZ43O623EIOHe43UMn2gCBajNcVfyqJkIHpnZfOgWUmnjKIunivBTkysIxn1H1OO8d5qPDeYVtIoFTI8qBB2ta6spNWEL0LQnnra/uwGVNeYJT+2NPMzzOeRtg5uGOFY6xitOmQ23c965MZnnETjkYOo2tjU2iUE9Sqay87vWW1/yOA1IpaXj0L5P8BPSn1qir05sR+vC8dd9KSspeVtROioDuvLyO1BkJ/PSenjVUUCEVEAHwXwVgC/l0OS04WG2mXC466//u2C6f+LbtVw2iTBoZVq2j87yQ1CPR/EgQZp9QbvQbIhx+sIVmMu97FBIQzWxjaNYvZsyji5HWNQ1jTNQFllUzlqiR998/N6UMS5iCdmqUjDPNiATkbsR9G06ynQhhEVwAtiOTUl6zH6p2r5sQ7HJuKt1GPxk9GNRpa0ZWXgGaG+wO8kBewMk7WEjBy/EgplNcwKx91pDbESMI5c+j26Sx5Ry5WguX07GdWxkVst1+H9ltHWaODlx1qvtzj15Z/PYc/JDwf5qmj5V95Q6LCee3k1bvk8l19i04h3RCwb9XicXIuXcXZHc3+XVPX2aZpe+eIXv/i/5mDkdKGhdhmhopdEpLz+NMFU6SVI7esEqA3UIoonMTIAa1iS8Mez1PSeiGOvGf0HrYI3aDrQigrL4IrSVyuPTY3OyA3oW7LGuFtBxUcSejRMFB75ZzyM1J9wv2uoNvODPOykxU+0uHkSxz0bf120hgzs45ikF70/wz5QGXUZ5iNvzpxe0Tf3mRml56RRFTR5KzcU89vVz7XrZrmxYPU5rsUbEOuZl+GmurfBq/Ot6QwitdcoJ/WucqHBDIV83+mklp+Wf42h4GWUyjpLUFcenka6B0VpI5o3AxZHodC5fb46SEO8wBMlT6NC6+XIrxfPMuX+WwHKeTmOjTKQUBu58zYx5i7f7sitQwCIfALAH7zoRS/ifplnAA21y4eLAH4Y0J8GcO9kukvCJG9vJMQVcqWcuNBtagQ0tCXFWMshCscqyExKZ2BLDfMVG4ra4A7aSc938Wo9GwWR0NC4Dq8/cHMWv8HNoNxknT8SbzgOmoSGEn5r9YZTQdl9R8WzighkmpZnFP+olVFI47j0VLTOBsvlW/yzS0g+Bx+dq+U55WkpisWoytGHlcl4QHU0IvYqaq1s8rNJ+WrKw19pFZ/gUWjCJoXdYO4xfJO3aJCkNLyIK9GoSIN4rsAXh+ieKqz51xGj1rmpf2LGgUZDYZTXeH9p9Lc5Dm7V3e8fUjslHsb/iggkfnrP85jPXdbKWUVyGcT8BufqZu3ASG6cGi/kM9KcridzYnL6sGRz0uodouSemAG84eqrr/7J7EF2Aw21ywQR0euvv/59V4t8jwheo6ofmdQaMg9TW67lr4RztR9vKCOxnfMGWVIj2kQZCbq5ee+6MU6icbFBF1Ws8Y2NhB/L4PJL2v1KvYrUn8XJwq7GcfIFT4TW/ESDoVOudoej+xqVVCmHYwpR7dr+DOyPCqCTANNUyzeyboDLYAONwqg+OaUuAZgEOi11olGuRlTejuen/NcjkEWxJkauuew301owfdyVBEIdFI9XH0P7lPP9uoG4iejdxTeye3vVDbgRlZzLeSnrLh0zfvwKfs/ePi2O7egW/Pkup8N6FPMuyXDyulfjhXoVnGq82oF1w9Ly5Yg72zOz0/b9QZPhcDyg5mXDqs1yATMczb8vh86hoWlrE53kpNNYtiOPtZQt+JGI3DGJvPMrvuIrPpHDkN1AQ+0y49HXX3/HpIf/QiF/AJHywfasqKqRU7bXqIIYguSG3Nol+25nUfLeUDlTUMhjZW5Y/BymXnOg2NcUt6MWxhVCXEDhFJ+ems6orMw/X9tZ3FcCOIO8l1WqKN9VzdG1/HPF4E45WKYE7++hUr1WjAwrg7I6tr2aYOn9b274W2Sg2J2lvpSIXidqHPMvj7UdUVN3S68o67GHXcmrDEZDhs8hEJ9HiZwjuPf4pu3umvMmWLzpVUL8fPmUYC6vzSmHxJLBFN0zS32od94Vi3qb4VmMBlP1M39Z4m+qZwi3G9P0LMrgGRe5a9snP6o5sEfnx7WOwl6p+zXMvdTVPj0/ac79/hK5w9RQizantB0EpS3wfDVZqAUxwJ/nSI5KOkci8t4J+Inrrrvun9xwww2fT8HIjqChdhlyKId3QfBWFbwfk4QtEg1rfNy5NpgxzIZzgQ/Vp7bdA+SIkRXB7/KYRN8b2E0UJWqN/sAILNcYj0jUtAd+lU1+A5Z7GrTW8PTKK4/u3sT9+/tYTsKxUaIVw6Uv03ViUvWyA6MVKEouG9kPlkY5CNrRi3pkDX9YpdcwqlMayjCk25dLm1pr2OREDbGySfWsVXRdLoHmPlv3lSsFI8EY1O3KIN1IlPnhrQ1k5sGSk++M/tAJiaNt7ueUepZSy4mjRM/3pHYP7ry0AeWauUMTc9i8ShdPzPyOMR7HGVzSyPmsbEx3LZKT2rVcFmt1xjHv4TMfuQW8fOJ9WZT3A/qTV1977U9+wzd8w32LL9k1NNQuQx7zJY+58+qrr/5xAP8PVO/LjWRE6092HMunN3ajofrKKGLEh/Gj00nT8QYzhRf/kbEhtjC6UGigxt6FgZ8rmzXKfW3IkBSlMGSUbnTz+00Ul969Y5Q+sBp3NXjDMletYZwkJNqwimosSHym5tfdehOxpV7O07R01eIN61tGrV6M8r5a7oXVePD8ZMdIGmG1sEvJLJzoPiqDoQ8npdMr7GPkKhkCVS42PKOmjFLaHrp2CAMxqCgg4xq3LldG518v2jpXN3ffUIzVbxAgl2k+30iqb13cdNEY/DgjLd62eJ2PvmvRB8/GEZFLELkT0/Tvn//859+T/cluoaF2mfKYxzzmLgC/q6ofXX/jIV0D686lke39XDGURq5tLeqZNVajV2TlbDyjqFU66w1EapM6VqIVUu890zWAnt7y0+H3NGKTwl5ilALzYJ6HlWhtOQ2ekTNS4jXNtXyZ+1oejmv0C22sUZk62uj/pkSaIvV6pFaZm1wMDP8mCyGwekdjcP8ebKnjvVEX72VTSZRgG258DS/3eO85pbVku4IpeFq5TDcxqjtAufbwebpcZZmvh+VB+2l5jmFkNhivw/SN+uzqeUmj5jcVVlOO8Tn6vMYmreS3BF7qgZZ8z6PpCpFB+Un9ORnNc4t/R2molWE4PSkxXzltdb98TcUywt0/tyNVfReAV1933XXc2PYygIbaZcw0TT87TdP/qYL32YaDgMv0irEEcek0v7WOtLQNA3LjoNbghTBivTV14c6NQjgveRywYnWqvfpwv9zgwK+plu/k76WTFVQ9FQznvfn9VGxET2BlMLgPxaBcQ95dKaiU9PK99LloUb9/U4bA2Gju8mXeUfHlMJ5GTgsednDDuUzXWAtWytLuIwSK5ZJz02Qje26gzcOGiINRuf7W7SwloynvJ6VEKU/0pPFr/UwjT2rplbKtATYzuOdIMXwUsxlA/h1Q90uFU6dQlHzY3cVnagXqTqN7rtMwaiD/kK6dyDJfdZT11XqOZT6k2Ain//M8w8s35kvqT4/dD2LZn4AcLp8DyVHaa23GInq+QhyNi43y41tpDwHM9tH1lz/hCU/4v/nK8/Jg+KTI5YOqHt79/rv/GqDfDuCPquoBQqNXlbIU6Rb1dq6IpSAIvL2mm2Mv2NLqFOjK6x0Vu6Y1CorQsJhSKf9CLza2PXagqphC1qp7OWvyI74vmRa/nK+mkR8Yn+4vWL5hmfOT0xXTFyVgf01PoERdPGtyMe08ihWMw2Y0IZDTrW5+rytxZ0s5uzfKyOL2mPHvylUFgLRzveI3QGO6WmKvXTd/pDz6+X3UpKLxbH4xbnMv2pZTTdOKSoCyp1ZgyfOSsLoS96Ax3fCsa5hcfvGZ2v06TX5TXpD9U13r/PzQ/lrWFr+Q5eaj3ynPuT74dWvRwO7JL7ApXxZk9VuiKW1YGM+3Wn2tl1orr6ZeWLr+bPI1xQ2+EN8o97Rct1wzLL5Zu1e/ZnY3L0Hxr2lamHK5ZapJl1dnpW5EI7lepwnUyog/M0XY2mlQDoDdj3uV8v0Upun7XvzCF74iDg6Qs4Ujapc5InLp8KrDn1TFj6vqH4rIEayBMX9vCUw4y0M9gGCCNGItagLrTvZ3LI79CA7grU9qy0IjUg5axQtvPNIoVLysWAvkOY5ZzA1bPq9l0Tr3hHuvbdPw3gtS/ccp+z3BlXz2M+L9oCmntZTRlM5amFHeu3k7hof1UdLhs7UbEb8hrFxkhU1BR713MUPe67BVrVQu/Twaj2fenV8l1/dU5+LrVrHtJhr8wXXXOubZ5HQeEG2KbZmaX3Bbu1Tv3rr0z6p9BsVA8BMrKy+POooWYof0ctp+qmY8xi8JlNoWaq03Z12Oq3eLBYrXVLT2mVp19n81jvmXW+vLtnim80Bzz8E9JlGvEd3yNZx0rdzOrUXDyM9vRxWY21e/lWyQAhd1wjsPyohalyQ5O2io7QGPe9zjPiUH8n9hkn+i0Pe4sda1SIb6Z1U2CfqGBqhQRleiQvf4khuecKywli9fIjVq2VCo3tngsVsU17cDhQ+UgH1JLHldiQUM/PI5YNfNGYt+nld3GmRmmO4qS+im3O1kkHwhKp3BBf0V6rCHndKWeJKPjdF9NtQ0+4BVeaa9topnd9AQ63au58vzXonbHRS8ji3xB2Ha02FaTfxjnlnO+7F4IsPEwmFKNwfP/iXDZqwN/NSVuqLpFOZwa2goFE/Gj310yx3Uy2xQR6tLLuTAEreEXgnWZKIaMoOyqmy45pCmEpSTk0bvnsGmy694xFe8qyzP5PMQ+Z1J5Ye+5Vu+5U05GDlbaKjtCddff/1HDg4O/hlEflKhd5fGRAFbuTNqXIp766P26qbrXZmf+1e32Fh6g5CkPyYTgwy2zmwCR2OtHg0aS/fzxmuQ6opjZunKi58OFFNfllZYvUdl/fL5CYTyXY/UY2E3lUG+j+7Cx7CkXSLWbG5Ip15T+kxF5byJolBWAmYDORNH1+yaTXbt0UWW5AY35vaIjL0LfZ5y2a9GdQb3VAzWY2OOivpYThw+GS3OyeIvhl6ODyuTaAwD5cDLLkfprhkDDJ5rRNKIf5OfwbOq7UB+tOka+Tk/UDy5tfJxGv9B2I61MFl+onws7e/nJ5HfOdDphx71qEe9oQ4EkMsGGmp7xOMf//gPi8hvA/KLELxPZFLxYW0L48aPN7a5QRANyiyNTnnY8qd/5eSsubdI3yOO6Q/28hJNDUlg5FapiqEP1TSs4XgleKXzMofcTmsorxGK5Z66NDeRk8uR83l4fkPPEyDw+tNefE3xdgwWTgAlO8P4I7cBw2BDx74OY0oZiqcpjW4Uem30Vuwnea9kqcWL1wLHchmNgFRZ9XAr8pGJ6WY5G1HCuBW13Fssz+GzjdhIm8cZPvOBe7zreo3GoEh+7r8pP3kAXJZy6MqjS6c41PRjcLXyied+OPgKQ1sfVxj0ATfeW0brT5dVoOS3GqLxdsvzugiRdwimV177iGtf/7znPe+z7k0uH2io7R9vU+jfnKbphyF4H6b01U9ddt/uG6DcAOTmoVX2uUF1ypyiQeKJHOJESnCNrLAimhr2gAQjdjRaIRrSlMXQXSOnILAGLxHvtfeNbLjehrwoVj5wDrRzfiwvTX6Gc9S8IGJui6aRqkhCYRqbDILqly9lbp4FBfrNaYNfLkCv29W4GFyinLdPvCmvwTPbhCv68gpwOFZ8LILjnukGzPBYj73OcOQ6IX79ZCwuyn3wVYlcpobXt+jnRksXXvtn0VQF6yRIdje69GA3Ezoc6ml4OcQ4qd1oLm0nYoWjagsO8lsG9HXfqflb8Qe88B9cnaqSGSLnK/k2HBFVBUQ+h0n+0wT9h1/46C/8V9/4jd/46RSMXCbk50f2BFU9vPvuu/+6zvO3Q/Glqnpg7Unx9xNvIKyxqv7ePiB152I7lBqXkqaWxnywiq+GgYVLAbzB9MZRrPGr/pafjQ2y2k8IU5WGNUr5urUxTn6en+KkUP/E0ei+59LYRZ+ujLMf7P6ifZMNSi157tI1P2/A3T+mWxXJwD/fa+Pn54N8A6mSWDyNZZsKQqvR1CvTpYzT6k1LU+0zaH6vHgciwGyvAnv7sL2XcK+tu/2kvCLce8xvLp+N6aplapN/dMrPZVSG7r+SL6+biiX+km5bj7p7QbuqcOiPNu9zfmumVm6j+y6Z793R1tXhdWP9iPcKLSuv/TwbVamsctqxvLKfu9dramnX3E9g8zhje+hpDMqx5iVGCPlVKMRvJpcPlmc3upexnDpWbloKKKcLS7skHspP8LlZ8eui+rIXv/jFPy8Sc0cuNziitqeIyKVpmn5CdPpxVX2viByZLI4xYa7+3jjlNmBDIlV5DKIB6/GcprH1/KQRBrFGapg+/BoSO8z1sqVhDmEjnudwudpIW5qTWpmMWBsJCflonCyZzjsnv+leE52yMUbxdSW8l/d642+Rgre4oWRxaz0IO5vHe86U55lepdfyKQoxmqquYCHFPxf9ymWAUXnnh3NS8kVynX+QyQIed0mgGif2s1qOMVs5jLQjrGIjWJUcfoRqU//jLWqcquB/LMAM9COiK9er+Qr+/TMraTdGGsZpxsuOjt0p+tXDaOjWSlYMtq4bat6KJWwM4Yt0/GZiG1bDxecT/PK9Z3Ib2VL8+pfm7TVqOZQ/F6H4z6L6spe85CU/RyPt8oeG2h7z+Mc//tOPkPmfiEw/ocB7RORSI5C5BfSFB9ZSjhT5wtIMtQJvZzltD5AahozajzeEjcEgJY8x6VFjs8QudEopoyWh3OC1Z62SalArr+xurLlnhdS4Nw7pvGJllJ1PSKOc7BqNwt1IG0bDs6o+9pq9sOHdnNafITIqk1p22cMuEZ3XjlHy+KAY3Ee81QdPrNE9koSyOR2Ubz0dJOfGQnpqG9h8Y9H48Mf9QGjCZ0MmZC/XBTXDp/E7RuaX+07YyCN8AM23EvJRqRox5NYOi//STozuv3Q6/KT8KY8thbbOT/N4hxk+jjDVZYDErZLKZ6HeBeBXJp1+6MUvfvHP5/Dk8oSG2p7zyC/90o8enDv4ZwL5SUUZWUNsVAJqjd5JUO8dNo1eOfLXUV1L6GkP5kRUzEgThElKHYu7XyI3avH6NRsh0FrKmaVxPEbzhHvNDWNpBIN//NtlvLDWKG96PjHOhmBDPK4bW9lo7TnOv+ChFvU0iGcjYw+EpUz7AtTsZMddkW64pKTy7OjFp71ASHvTM8Oavz+PkPfilC+6gVG6gY33N2Q9gs9Rq5cMQSeYgRnvKeSt1r3Fqbinc1jYXF7xWVW/dI3GD14f8xWXOCrFW2ykt+R5+QpCffhmxBVv6epxLmPPa1NWziA7MOcVLwCLzI5prPEBJRcickln/X0ArzwH/J0vfPQXvpEjaftDV5fIfvKBD3zgsXp09JdE8b/Mk3y5qn0ARkOjkxqz7Bedy0Hr18xZWdlFeznJ74rM2X7VK18IU+MP4rqfeM83scRd8m1tcXWuRznt8Jv94GnHPHlbXgP0cU9yL5WVnfM1bRzc7jS/zGnJ9+lGU1Qi+ZqjMqxouCfDn/1obmLO70n9qo4Z+G2Kl++lK+Pwej3fR3wuekwZ5XQ3+bd1f/N1y9/kbk55jmV3zQ1yt7GsUp66dAfxm7xt8CsObfpYubb6nMWmvMb3rDZXbDVdjOeLlZOVZ2OojayJ7SnYPT+M5TaXg7s3jPK0oXzcdfVrFlYWPWqVfcO9lvweqch/FZV/rJO++kUvetHHUyhymZMfK9lj7rnnnusufu5zf/lI9WsmyItU8Gg9atR7Veoq1nAMGki4AhtNctfyzuCBNliOu5RROWuInRMo7k0NXjlJ/qkxXL3n5B6ppWB/vAzdSQcLIB5ofps06zwlzVGrfzkYpx0NvJhmZtz4r6cLjJ8pNuTJ3f1ajbKHlZ0UZaODUYhRHrt7yYYuXH/1z8WJ5RTdGgZ1Yu0+T+qnyRhTq/P10panGLsJMyj/WMb1ftI8q5Kdct4ZSs6mfB9XVijxxcJ6nv1+mmAprugSJ9IYal5HYphNz6fGL/lyd8+L562GTen6M1DroCzF1xr4+XpeBu7ncWNemnh+b3688mz8s3+9l2c0uPi9iihU79QZtwvkt659xLWv4crO/aR/7mSvUdXD++6777pPfvKTf1dV//yk8hgIvqCOsHnDYZItWob0XSF2DVpszCye2OrIrEQ19JYVbQ+xholHvTdUBKpz05PODZfM1mB7HsvVQgvZp13TyEp9QxzUS4z9EP3Dn8VvQzwvZywNPLz83H+QpyW/5m94cdRyCQ27h8rlmJ9fdMtKuT5vU5jRDxYvKq/GGDCFW9OOeY2c8Nmo2kjI4F7LN2FTPvNtBiOiSdfvxRvGlfzkMuruA23aNV+edl5xGNlgqNX7jLcV4+sSBul+4PHMv79uG7c612cwThuw5+Fhsr9imepg4TRP1g9l1eTL6lw15L0cgtyslkX0D/GKx/q9LI6W7/yMNpShqn2uyRcbePmH+gnPq2P5Ey3f6RUz9GJ9Qegw91lVK7/WRwWziLxfRH7s3LlzP3rttdcePe95z7vUBCJ7Q//cyRXBBz/4wcdd+tylP6uit0D1z4vI49xYUxtNQGj0aw/ce8UWZtgQrilAo8QtCim7W8tTzoOyWvJheQtRc4M4fP2GoJxj3HJrtcHrItZ8bfBDr7RhaftH0EvBBr94r33UYCzYtRO5/LNfVRY+6jD0W5RA9fNwg2vC05OyNUbjHp99vE+41vS8tO5L/lpjDa6MPH9BMaK5nrnXRBdGz8aL3f3E8hVxvywD1R1Wd8OoZFN2tlVLJNdRz1MXX8tPucYg3lr5ul/w8HRrEoM63Dw3WILZcHE2xm+v3+Ubg/yFuAIrbzH3nIFN9a1UpHKKpTzU/Ju2w+N0o/5l+50a0Z+9n8b7SfdanctNNHnvyiH6p3LO8pzjVn+LZ4elLNuUYqVYApc0ZwAfEZEPAnjttdde+yMcRdt/cjUjVxh33nnnk6D43wS4RVWfrIJHwhoFBCXlqCvOZDApvFUrDjqI2zRMo0Y/nkjfOLu76nKdTNsTD4e1xV2LV+J6w9f4DRrgiK7kVYGyglb7smga4UHcRqkMvOH3OvBrlNjI3+5TwzMqeQ1h1sppQ72wDDfXVLQ6I9YPdSNCNTzYhajIo1+Xph/E68byjeWQlGMxApdak8tgeJ/o81QLNGbppHnK6QJdXaz+m+qKG4hBkTeEazb3idBpCv6dobiWZwzKamTsafnxx724t8+nBq0H4+tWw9/8vMPVXNfSVrTX9Lgmnuk+LZ6fRj+k/LqTLHE0GPDNfaJPuyknK0M/V/PztPIr8YyPuPXMEJ1UgI/Ognep6ltF5FcODg5+5QUveMFHcmiyfwyqA7nS+PCdd37VpXl+/JFMfxWCr1TVmwBcM1QKhiI1OAiNTmr03a9xyg2WO+fGNCa11ri7EywPWWnY6ExWRs6iJAdpbvBzssHkDWtsvC3gcnhMuot/SuMBxe39S56Knx82fn48eDYI7lkplyIwxxw1PvuVkZHRM4tl4M/Og6j5i43I5fw2iiyUg2JzPcplsJonpLjxHtXLZINiXbtuTWD5U/0HCxzqdTfFczd7PVhlKucpPJvOz+I3TpvKKhggozqjoa0QrOS5ui/31V0zeuc8w/Kc4sGi+NSL6FcMJfWGZPE3p+LwIJ6rn6+Nmvl9jvw8Xg23+Hu21OvG4h1QYMa9InjtdHj4agB3vOAFL7gjhyL7y/i5kyuSD99555Mu6cEfm/XofzrC/JUAbhDgqthoobYp/Xyk2ji7U4wj6OcFNWmW9BrDDCWMaj+vo1P4CMqxOgT/4/yq+0pjmRpgp6ab/eqtml9UkPmarsjMqV29GfId42F83da/jQvzV1eaA796nPw6olLHWIm5c7zfNUWVlXlN0xRnNphK+SpgGyjk7J7smVp+A7kM8nVr+ZUAK+kGpen3c4LnspyM081lFP0Wh3HckR9i2jh+xCbLHGK4dE+j+LE8YzmuGSEWycKZQCUDUGoi42v6PXfl4PNubfQLOc8+F8yuJjmN3P6E/A7vozpYmOCX77+LgyXOKMxmWdX7BfKrAN51leoP/LkXvei9OQTZf0ZVhlzBqOq5e+655zGf+9znblPVPy0zngXBk1T1mlwfcgOhVXkWRkpuOQmNjzs1xkyvVBy/zlBhmZtPyI6US9pCBHeLhouHGqY7zo/K2K/NT0wwHIpfLtyLuUV/WEOuMV2Mr4vm2r3/Wn6rnx+vNP7qRnNIw59budU2XpNfrIzanDA/sYwU5Z8Uz2H8sglUMrbUlHQoB88/cn5P6F9PzS/XzehXTizuyA/rRkA21CQb9Vgp3+rQXhcxjN+LlHBdXJS03X1YHiv5xqBMVNpyxUBegZAvP92QJgb+gJS2IN1PLUs/b3zN4YTP6CRlkJ9dRK3M/XpeLk26G8oBIX0As4jcr6rvFJHfVNV5mqZ/dnh4+N7nP//597SxyJVCrp7kYYKqHgI4/MCdd75wVn0yIN82Qx8nkOsUtkJ0pYc9akAjm8LUBig1lIApaGt8R35Q1NcWq4ZaWDmlgwYvN4jwMAP3TX5tIzu4FwujWl7dFYfl1dRSDkva1Q9+v4vf8H42PB8MlEaMOzLU1vKFWg4r94ml3EesvTI9rgw31RX3G9WzGG+UL0Us0HG6i0MphzavfX1warg1RY/Nfvl+sn+uL61fez+b8tzUBZSOz1L3ivx16a/ku9altdGrcF86MooHrygR4jRu6brVP4zEid1TLA+/bo0fnmvj7qyV15p7dViuCfe3DMX8niheQFVnEbkPwB0AXisiv3Pdddf9IgB8/dd//ee5ee2VTa4u5GGIql591x13/Teq+tWY8EIAV6vqF02QR85z26fXDUYYQgOzFiY2zrHRdr/FsOmVoQLdJOzsn+N5o72poVVTVOVgkPRAMXte4EKU/WOpqf2k65ZEFscYp8lTIN+Hav+91CZvFn/Q8LcOQC0tsXzFEDW/5t/5Yd1wrKyMRvi1uvpiK5FFN7z6xLoBAbvPnG65Fy+YqNkHzy1e2Ef61owpV/ywAhqFgaU5uJ6an9ST/n7W4ma/6mRhOuM91HN191TITd5CvhQWvxkxC2FOkLeYr2FZjvKc/dHnuXh4AQW3Y7YEiXJUj0f1yg3O6lOOvV3K8yk1GpAhX7l8NMzTDM9mFpGPA7hXVe9X1VdP0/QH3/zN3/wzTWRyxZPFiTyMueeOO67/PHDLUTl9IRRPUdVJFNcp9IkAztVGbdQ+rjTsI//ccKP6B6U99C/OeY82FQ8f0j2B0eUN6cgocv/SEvfXKy4l3hSi1zQ9rzlf4V6y8VKNAZRrrpbzIM3q7+41nLmn59Pjkcq1u7hq7oni1yuw6gfLalDkvf/gepbP1TJwRgq1OrR5bvwH16wloPYTrx3r0yAugGUEb1O8ErCyKU/I/hvutSmr5pohX07Nr92zPZv4eNt8FQO0Zj+XM/q8j+7rAcUblAVyuivlMTIsxe7Vy2Oy83yJUh52/VBO8HRThCW/9pPvJZZ/zUQuH7se8HkI3gWRzwI4EpFfU9VfBIBpmt72Td/0TR8LscjDhJHYEIL3ve99N4jIYwBA5vlJqvIXdMJXAPhye23aGxmpYUI1UgKuQAaNGswIrA1lQK33PpqXtNZQuru3j0C/B5tuMDwR7icbKBoMtVYxl6vVPImV0yi/WEm7HvSZau91HKZOkEZMrFeSvbFW8g7Ugi6u8ZqDvKopwVGelrhjpQvLb4yvsIUsFq2ONATqs80dgmycrxkB8DjBv4u7ci8Y7KXWxe3rYTmxn9U81ULo/bBumACpHm/ID9D7d+WY0x/kG12YvixLurJajsWhxBO/TIiL1BZoNqZ1iej1MN+3WgRbllLLUEI8zRH9Xiyv1SuXY7wftZ+U3+jnXmLXrZR7+byI/JZAXyGHhx8CgHme737BC17wByEkeRiSRYaQjo9+9KOP/MxnPvPlqvoN8zw/R0QmzIAIHj1DL2DWaxAbJVgDGRrZpiF048icYphybi3kSEGHhrlx97gj4xFLTX+ghtqSjdQAh2a3KIDWoHD/ODE/ttlLA943/G5oIZSN0zT8o/Jx5QPFNHgNk+mNtXGe6vMbhY9KPxkSakVf5xQO0l1VyHEEbhQPJT+rZYRxnjf5H5eu309V9p61WAYlgfL/oMzjNTt/u66nlf29rmb34tneC2L89Ey7+B7Pw8T78etG/5BGfX7mH9OuhpqVR3XPYbS/ZqwzXs71mnADcMm7Iuy1lvLb3G9+dnYSr507od29Du5l9ZpqEdpZZPdjkv8IoGxGO89QyKUDwWsf9djHvuG22267vwlNHtZkcSVklXvvvfcLP/3pTz+iOlzCV8249N+KyoE7zf6hqnkGVJ4Mwdeq6jnkxtIaWIHco4Kfj225QKFzXzl1AmT2dnBuG1pYO5im1E7uFPMVaM7atrlQL9I1tDX4bB71G13HpZuUVHRqlUX5k+9zuZf+fopzydEEYMJU81f8VnBlYsZdV/Z+kBMINz3PwBTyM9fC9+ewoeyRbrLLwFL+y8fQ1u7/OIfCjLl5ZsUtVJrBcyslBOCo9ax5mutPZXh5j55lorvowMUTHGU+1++Veo+1fMHrwsAt5KTLE8b5qk7zDMxLfpprz+1z6PKVL2Z5U1XEKfSKdTl3qmv2Tnlu6vHiBQAQ1Wtm4PkT5BGdwWv5wqyfg+DXIFK2y5jrj3M0HR7++NHR0Yej42Me85h7aaSRzKCaEXIyVPXg7rvvvjq7Oxc/e/FZiqNbJc12bxvL+ZPXfsEX/MQ8D4bCyP7xgXB8vZ9/IJ5U2jNC9oOPfvSjj5gvXfqfVXXKRhxQ2rVpgooe/OIXPeGLfgsAcHf5uRvAEyzYzd/0TZ/lak1CCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIeTU+f8BgHUqeQK8DF0AAAAASUVORK5CYII=";
    }
  });

  // src/lib/ui/settings/patches/shared.tsx
  function wrapOnPress(onPress, navigation2, renderPromise, screenOptions, props) {
    return /* @__PURE__ */ _async_to_generator(function* () {
      if (onPress)
        return void onPress();
      var Component = yield renderPromise().then((m2) => m2.default);
      if (typeof screenOptions === "string") {
        screenOptions = {
          title: screenOptions
        };
      }
      navigation2 ??= tabsNavigationRef.getRootNavigationRef();
      navigation2.navigate("BUNNY_CUSTOM_PAGE", {
        ...screenOptions,
        render: () => /* @__PURE__ */ jsx(Component, {
          ...props
        })
      });
    });
  }
  var tabsNavigationRef, CustomPageRenderer;
  var init_shared = __esm({
    "src/lib/ui/settings/patches/shared.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_common();
      init_wrappers();
      init_components2();
      tabsNavigationRef = findByPropsLazy("getRootNavigationRef");
      CustomPageRenderer = React.memo(() => {
        var navigation2 = NavigationNative.useNavigation();
        var route = NavigationNative.useRoute();
        var { render: PageComponent, ...args } = route.params;
        React.useEffect(() => void navigation2.setOptions({
          ...args
        }), []);
        return /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(PageComponent, {})
        });
      });
    }
  });

  // src/lib/ui/settings/patches/panel.tsx
  function SettingsSection() {
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(Fragment, {
      children: Object.keys(registeredSections).map((sect) => registeredSections[sect].length > 0 && /* @__PURE__ */ jsx(LegacyFormSection, {
        title: sect,
        children: registeredSections[sect].filter((r) => r.usePredicate?.() ?? true).map((row, i, arr) => /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx(LegacyFormRow, {
              label: row.title(),
              leading: /* @__PURE__ */ jsx(LegacyFormIcon, {
                source: row.icon
              }),
              trailing: /* @__PURE__ */ jsx(LegacyFormRow.Arrow, {
                label: row.useTrailing?.() || void 0
              }),
              onPress: wrapOnPress(row.onPress, navigation2, row.render, row.title())
            }),
            i !== arr.length - 1 && /* @__PURE__ */ jsx(LegacyFormDivider, {})
          ]
        }))
      }, sect))
    });
  }
  function patchPanelUI(unpatches) {
    try {
      unpatches.push(after("default", findByNameLazy("getScreens", false), (_a, screens) => ({
        ...screens,
        VendettaCustomPage: {
          title: "Bunny",
          render: () => /* @__PURE__ */ jsx(CustomPageRenderer, {})
        },
        BUNNY_CUSTOM_PAGE: {
          title: "Bunny",
          render: () => /* @__PURE__ */ jsx(CustomPageRenderer, {})
        }
      })));
      var unpatch = after("default", findByNameLazy("UserSettingsOverviewWrapper", false), (_a, ret) => {
        var UserSettingsOverview = findInReactTree(ret.props.children, (n) => n.type?.name === "UserSettingsOverview");
        unpatches.push(after("renderSupportAndAcknowledgements", UserSettingsOverview.type.prototype, (_args, { props: { children } }) => {
          var index = children.findIndex((c2) => c2?.type?.name === "UploadLogsButton");
          if (index !== -1)
            children.splice(index, 1);
        }));
        unpatches.push(after("render", UserSettingsOverview.type.prototype, (_args, res) => {
          var titles = [
            i18n.Messages.BILLING_SETTINGS,
            i18n.Messages.PREMIUM_SETTINGS
          ];
          var sections = findInReactTree(res.props.children, (n) => n?.children?.[1]?.type === LegacyFormSection)?.children || res.props.children;
          if (sections) {
            var index = sections.findIndex((c2) => titles.includes(c2?.props.label));
            sections.splice(-~index || 4, 0, /* @__PURE__ */ jsx(SettingsSection, {}));
          }
        }));
      }, true);
      unpatches.push(unpatch);
    } catch (e) {
    }
  }
  var init_panel = __esm({
    "src/lib/ui/settings/patches/panel.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_patcher();
      init_utils();
      init_common();
      init_components();
      init_wrappers();
      init_settings2();
      init_shared();
    }
  });

  // src/lib/ui/settings/patches/tabs.tsx
  function useIsFirstRender() {
    var firstRender = false;
    React.useEffect(() => void (firstRender = true), []);
    return firstRender;
  }
  function patchTabsUI(unpatches) {
    var getRows = () => Object.values(registeredSections).flatMap((sect) => sect.map((row) => ({
      [row.key]: {
        type: "pressable",
        title: row.title,
        icon: row.icon,
        IconComponent: () => /* @__PURE__ */ jsx(TableRow.Icon, {
          source: row.icon
        }),
        usePredicate: row.usePredicate,
        useTrailing: row.useTrailing,
        onPress: wrapOnPress(row.onPress, null, row.render, row.title()),
        withArrow: true,
        ...row.rawTabsConfig
      }
    }))).reduce((a, c2) => Object.assign(a, c2));
    var origRendererConfig = settingConstants.SETTING_RENDERER_CONFIG;
    var rendererConfigValue = settingConstants.SETTING_RENDERER_CONFIG;
    Object.defineProperty(settingConstants, "SETTING_RENDERER_CONFIG", {
      enumerable: true,
      configurable: true,
      get: () => ({
        ...rendererConfigValue,
        VendettaCustomPage: {
          type: "route",
          title: () => "Bunny",
          screen: {
            route: "VendettaCustomPage",
            getComponent: () => CustomPageRenderer
          }
        },
        BUNNY_CUSTOM_PAGE: {
          type: "route",
          title: () => "Bunny",
          screen: {
            route: "BUNNY_CUSTOM_PAGE",
            getComponent: () => CustomPageRenderer
          }
        },
        ...getRows()
      }),
      set: (v2) => rendererConfigValue = v2
    });
    unpatches.push(() => {
      Object.defineProperty(settingConstants, "SETTING_RENDERER_CONFIG", {
        value: origRendererConfig,
        writable: true,
        get: void 0,
        set: void 0
      });
    });
    unpatches.push(after("default", SettingsOverviewScreen, (_2, ret) => {
      if (useIsFirstRender())
        return;
      var { sections } = findInReactTree(ret, (i) => i.props?.sections).props;
      var index = -~sections.findIndex((i) => i.settings.includes("ACCOUNT")) || 1;
      Object.keys(registeredSections).forEach((sect) => {
        sections.splice(index++, 0, {
          label: sect,
          title: sect,
          settings: registeredSections[sect].map((a) => a.key)
        });
      });
    }));
  }
  var settingConstants, SettingsOverviewScreen;
  var init_tabs = __esm({
    "src/lib/ui/settings/patches/tabs.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_patcher();
      init_utils();
      init_components();
      init_wrappers();
      init_settings2();
      init_shared();
      settingConstants = findByPropsLazy("SETTING_RENDERER_CONFIG");
      SettingsOverviewScreen = findByNameLazy("SettingsOverviewScreen", false);
    }
  });

  // src/lib/ui/settings/index.tsx
  var settings_exports2 = {};
  __export(settings_exports2, {
    patchSettings: () => patchSettings,
    registerSection: () => registerSection,
    registeredSections: () => registeredSections
  });
  function registerSection(section) {
    registeredSections[section.name] = section.items;
    return () => delete registeredSections[section.name];
  }
  function patchSettings() {
    var unpatches = new Array();
    patchPanelUI(unpatches);
    patchTabsUI(unpatches);
    return () => unpatches.forEach((u) => u());
  }
  var registeredSections;
  var init_settings2 = __esm({
    "src/lib/ui/settings/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_panel();
      init_tabs();
      registeredSections = {};
    }
  });

  // src/core/debug/safeMode.ts
  function isSafeMode() {
    return settings.safeMode?.enabled === true;
  }
  function toggleSafeMode2() {
    return _toggleSafeMode2.apply(this, arguments);
  }
  function _toggleSafeMode2() {
    _toggleSafeMode2 = _async_to_generator(function* ({ to = !isSafeMode(), reload = true } = {}) {
      var enabled = (settings.safeMode ??= {
        enabled: to
      }).enabled = to;
      var currentColor = getCurrentTheme();
      yield writeThemeToNative(enabled ? {} : currentColor?.data ?? {});
      if (reload)
        setTimeout(() => BundleUpdaterManager.reload(), 500);
    });
    return _toggleSafeMode2.apply(this, arguments);
  }
  var init_safeMode = __esm({
    "src/core/debug/safeMode.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_themes();
      init_modules();
      init_settings();
    }
  });

  // src/core/ui/settings/pages/General/Version.tsx
  function Version({ label, version, icon }) {
    return /* @__PURE__ */ jsx(TableRow, {
      label,
      icon: /* @__PURE__ */ jsx(TableRow.Icon, {
        source: typeof icon === "string" ? findAssetId(icon) : icon
      }),
      trailing: /* @__PURE__ */ jsx(LegacyFormText, {
        children: version
      }),
      onPress: () => {
        clipboard.setString(`${label} - ${version}`);
        showToast.showCopyToClipboard();
      }
    });
  }
  var init_Version = __esm({
    "src/core/ui/settings/pages/General/Version.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_common();
      init_components();
      init_toasts();
    }
  });

  // src/core/ui/settings/pages/General/About.tsx
  function About() {
    var debugInfo = getDebugInfo();
    useProxy(settings);
    var versions = [
      {
        label: Strings.BUNNY,
        version: debugInfo.bunny.version,
        icon: {
          uri: OptiLogo_default
        }
      },
      {
        label: "Discord",
        version: `${debugInfo.discord.version} (${debugInfo.discord.build})`,
        icon: "Discord"
      },
      {
        label: "React",
        version: debugInfo.react.version,
        icon: "ScienceIcon"
      },
      {
        label: "React Native",
        version: debugInfo.react.nativeVersion,
        icon: "MobilePhoneIcon"
      },
      {
        label: Strings.BYTECODE,
        version: debugInfo.hermes.bytecodeVersion,
        icon: "TopicsIcon"
      }
    ];
    var platformInfo = [
      {
        label: Strings.LOADER,
        version: `${debugInfo.bunny.loader.name} (${debugInfo.bunny.loader.version})`,
        icon: "DownloadIcon"
      },
      {
        label: Strings.OPERATING_SYSTEM,
        version: `${debugInfo.os.name} ${debugInfo.os.version}`,
        icon: "ScreenIcon"
      },
      ...debugInfo.os.sdk ? [
        {
          label: "SDK",
          version: debugInfo.os.sdk,
          icon: "StaffBadgeIcon"
        }
      ] : [],
      {
        label: Strings.MANUFACTURER,
        version: debugInfo.device.manufacturer,
        icon: "WrenchIcon"
      },
      {
        label: Strings.BRAND,
        version: debugInfo.device.brand,
        icon: "SparklesIcon"
      },
      {
        label: Strings.MODEL,
        version: debugInfo.device.model,
        icon: "MobilePhoneIcon"
      },
      {
        label: import_react_native15.Platform.select({
          android: Strings.CODENAME,
          ios: Strings.MACHINE_ID
        }),
        version: debugInfo.device.codename,
        icon: "TagIcon"
      }
    ];
    return /* @__PURE__ */ jsx(import_react_native15.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 24,
        children: [
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.VERSIONS,
            children: versions.map((v2) => /* @__PURE__ */ jsx(Version, {
              label: v2.label,
              version: v2.version,
              icon: v2.icon
            }))
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.PLATFORM,
            children: platformInfo.map((p) => /* @__PURE__ */ jsx(Version, {
              label: p.label,
              version: p.version,
              icon: p.icon
            }))
          })
        ]
      })
    });
  }
  var import_react_native15;
  var init_About = __esm({
    "src/core/ui/settings/pages/General/About.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_settings3();
      init_Version();
      init_storage();
      init_debug();
      init_settings();
      init_components();
      import_react_native15 = __toESM(require_react_native());
    }
  });

  // src/lib/ui/alerts.ts
  var alerts_exports = {};
  __export(alerts_exports, {
    dismissAlert: () => dismissAlert,
    openAlert: () => openAlert
  });
  var openAlert, dismissAlert;
  var init_alerts = __esm({
    "src/lib/ui/alerts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_metro();
      ({ openAlert, dismissAlert } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
    }
  });

  // src/core/ui/settings/pages/General/AssetDisplay.tsx
  function AssetDisplay({ asset }) {
    return /* @__PURE__ */ jsx(LegacyFormRow, {
      label: `${asset.name} - ${asset.id}`,
      trailing: /* @__PURE__ */ jsx(import_react_native16.Image, {
        source: asset.id,
        style: {
          width: 32,
          height: 32
        }
      }),
      onPress: () => {
        clipboard.setString(asset.name);
        showToast.showCopyToClipboard();
      }
    });
  }
  var import_react_native16;
  var init_AssetDisplay = __esm({
    "src/core/ui/settings/pages/General/AssetDisplay.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_common();
      init_components();
      init_toasts();
      import_react_native16 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/General/AssetBrowser.tsx
  function AssetBrowser() {
    var [search, setSearch] = React.useState("");
    var all = (0, import_react3.useMemo)(() => Array.from(iterateAssets()), []);
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsxs(import_react_native17.View, {
        style: {
          flex: 1
        },
        children: [
          /* @__PURE__ */ jsx(Search_default, {
            style: {
              margin: 10
            },
            onChangeText: (v2) => setSearch(v2)
          }),
          /* @__PURE__ */ jsx(import_react_native17.FlatList, {
            data: all.filter((a) => a.name.includes(search) || a.id.toString() === search),
            renderItem: ({ item }) => /* @__PURE__ */ jsx(AssetDisplay, {
              asset: item
            }),
            ItemSeparatorComponent: LegacyFormDivider,
            keyExtractor: (item) => item.name
          })
        ]
      })
    });
  }
  var import_react3, import_react_native17;
  var init_AssetBrowser = __esm({
    "src/core/ui/settings/pages/General/AssetBrowser.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_AssetDisplay();
      init_assets();
      init_components();
      init_components2();
      import_react3 = __toESM(require_react());
      import_react_native17 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/General/index.tsx
  var General_exports = {};
  __export(General_exports, {
    default: () => General
  });
  function General() {
    useProxy(settings);
    var debugInfo = getDebugInfo();
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(import_react_native18.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 24,
        children: [
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.INFO,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: Strings.BUNNY,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: {
                    uri: OptiLogo_default
                  }
                }),
                trailing: /* @__PURE__ */ jsx(TableRow.TrailingText, {
                  text: debugInfo.bunny.version
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Discord",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("Discord")
                }),
                trailing: /* @__PURE__ */ jsx(TableRow.TrailingText, {
                  text: `${debugInfo.discord.version} (${debugInfo.discord.build})`
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.ABOUT,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("CircleInformationIcon-primary")
                }),
                onPress: () => navigation2.push("BUNNY_CUSTOM_PAGE", {
                  title: Strings.ABOUT,
                  render: () => /* @__PURE__ */ jsx(About, {})
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.LINKS,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.DISCORD_SERVER,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("Discord")
                }),
                onPress: () => url.openDeeplink(DISCORD_SERVER)
              }),
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.GITHUB,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("img_account_sync_github_white")
                }),
                onPress: () => url.openURL(GITHUB)
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.ACTIONS,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: Strings.RELOAD_DISCORD,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: () => BundleUpdaterManager.reload()
              }),
              /* @__PURE__ */ jsx(TableSwitchRow, {
                label: "Safe Mode",
                subLabel: "Load Bunny without loading add-ons",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("ShieldIcon")
                }),
                value: isSafeMode(),
                onValueChange: (to) => {
                  toggleSafeMode2({
                    to,
                    reload: false
                  });
                  openAlert("bunny-reload-safe-mode", /* @__PURE__ */ jsx(AlertModal, {
                    title: "Reload now?",
                    content: !to ? "All add-ons will load normally." : "All add-ons will be temporarily disabled upon reload.",
                    actions: /* @__PURE__ */ jsxs(AlertActions, {
                      children: [
                        /* @__PURE__ */ jsx(AlertActionButton, {
                          text: "Reload Now",
                          variant: "destructive",
                          onPress: () => BundleUpdaterManager.reload()
                        }),
                        /* @__PURE__ */ jsx(AlertActionButton, {
                          text: "Later",
                          variant: "secondary"
                        })
                      ]
                    })
                  }));
                }
              }),
              /* @__PURE__ */ jsx(TableSwitchRow, {
                label: Strings.DEVELOPER_SETTINGS,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("WrenchIcon")
                }),
                value: settings.developerSettings,
                onValueChange: (v2) => {
                  settings.developerSettings = v2;
                }
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.MISCELLANEOUS,
            children: [
              /* @__PURE__ */ jsx(TableSwitchRow, {
                label: Strings.SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS,
                subLabel: Strings.SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS_DESC,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("WrenchIcon")
                }),
                value: settings.enableDiscordDeveloperSettings,
                onValueChange: (v2) => {
                  settings.enableDiscordDeveloperSettings = v2;
                }
              }),
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.ASSET_BROWSER,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("ic_image")
                }),
                trailing: TableRow.Arrow,
                onPress: () => navigation2.push("BUNNY_CUSTOM_PAGE", {
                  title: Strings.ASSET_BROWSER,
                  render: AssetBrowser
                })
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native18;
  var init_General = __esm({
    "src/core/ui/settings/pages/General/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_safeMode();
      init_i18n();
      init_settings3();
      init_About();
      init_storage();
      init_assets();
      init_debug();
      init_modules();
      init_settings();
      init_alerts();
      init_constants();
      init_common();
      init_components();
      import_react_native18 = __toESM(require_react_native());
      init_AssetBrowser();
    }
  });

  // src/lib/utils/isValidHttpUrl.ts
  function isValidHttpUrl(input) {
    var url2;
    try {
      url2 = new URL(input);
    } catch (e) {
      return false;
    }
    return url2.protocol === "http:" || url2.protocol === "https:";
  }
  var init_isValidHttpUrl = __esm({
    "src/lib/utils/isValidHttpUrl.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/fuzzysort@3.0.2/node_modules/fuzzysort/fuzzysort.js
  var require_fuzzysort = __commonJS({
    "node_modules/.pnpm/fuzzysort@3.0.2/node_modules/fuzzysort/fuzzysort.js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_wrap_native_super();
      ((root, UMD) => {
        if (typeof define === "function" && define.amd)
          define([], UMD);
        else if (typeof module === "object" && module.exports)
          module.exports = UMD();
        else
          root["fuzzysort"] = UMD();
      })(exports, (_2) => {
        "use strict";
        var single = (search, target) => {
          if (!search || !target)
            return NULL;
          var preparedSearch = getPreparedSearch(search);
          if (!isPrepared(target))
            target = getPrepared(target);
          var searchBitflags = preparedSearch.bitflags;
          if ((searchBitflags & target._bitflags) !== searchBitflags)
            return NULL;
          return algorithm(preparedSearch, target);
        };
        var go = (search, targets, options) => {
          if (!search)
            return options?.all ? all(targets, options) : noResults;
          var preparedSearch = getPreparedSearch(search);
          var searchBitflags = preparedSearch.bitflags;
          var containsSpace = preparedSearch.containsSpace;
          var threshold = denormalizeScore(options?.threshold || 0);
          var limit = options?.limit || INFINITY;
          var resultsLen = 0;
          var limitedCount = 0;
          var targetsLen = targets.length;
          function push_result(result2) {
            if (resultsLen < limit) {
              q3.add(result2);
              ++resultsLen;
            } else {
              ++limitedCount;
              if (result2._score > q3.peek()._score)
                q3.replaceTop(result2);
            }
          }
          if (options?.key) {
            var key = options.key;
            for (var i = 0; i < targetsLen; ++i) {
              var obj = targets[i];
              var target = getValue(obj, key);
              if (!target)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags)
                continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL)
                continue;
              if (result._score < threshold)
                continue;
              result.obj = obj;
              push_result(result);
            }
          } else if (options?.keys) {
            var keys = options.keys;
            var keysLen = keys.length;
            outer:
              for (var i = 0; i < targetsLen; ++i) {
                var obj = targets[i];
                {
                  var keysBitflags = 0;
                  for (var keyI = 0; keyI < keysLen; ++keyI) {
                    var key = keys[keyI];
                    var target = getValue(obj, key);
                    if (!target) {
                      tmpTargets[keyI] = noTarget;
                      continue;
                    }
                    if (!isPrepared(target))
                      target = getPrepared(target);
                    tmpTargets[keyI] = target;
                    keysBitflags |= target._bitflags;
                  }
                  if ((searchBitflags & keysBitflags) !== searchBitflags)
                    continue;
                }
                if (containsSpace)
                  for (var i1 = 0; i1 < preparedSearch.spaceSearches.length; i1++)
                    keysSpacesBestScores[i1] = NEGATIVE_INFINITY;
                for (var keyI = 0; keyI < keysLen; ++keyI) {
                  target = tmpTargets[keyI];
                  if (target === noTarget) {
                    tmpResults[keyI] = noTarget;
                    continue;
                  }
                  tmpResults[keyI] = algorithm(
                    preparedSearch,
                    target,
                    /*allowSpaces=*/
                    false,
                    /*allowPartialMatch=*/
                    containsSpace
                  );
                  if (tmpResults[keyI] === NULL) {
                    tmpResults[keyI] = noTarget;
                    continue;
                  }
                  if (containsSpace)
                    for (var i2 = 0; i2 < preparedSearch.spaceSearches.length; i2++) {
                      if (allowPartialMatchScores[i2] > -1e3) {
                        if (keysSpacesBestScores[i2] > NEGATIVE_INFINITY) {
                          var tmp = (keysSpacesBestScores[i2] + allowPartialMatchScores[i2]) / 4;
                          if (tmp > keysSpacesBestScores[i2])
                            keysSpacesBestScores[i2] = tmp;
                        }
                      }
                      if (allowPartialMatchScores[i2] > keysSpacesBestScores[i2])
                        keysSpacesBestScores[i2] = allowPartialMatchScores[i2];
                    }
                }
                if (containsSpace) {
                  for (var i3 = 0; i3 < preparedSearch.spaceSearches.length; i3++) {
                    if (keysSpacesBestScores[i3] === NEGATIVE_INFINITY)
                      continue outer;
                  }
                } else {
                  var hasAtLeast1Match = false;
                  for (var i4 = 0; i4 < keysLen; i4++) {
                    if (tmpResults[i4]._score !== NEGATIVE_INFINITY) {
                      hasAtLeast1Match = true;
                      break;
                    }
                  }
                  if (!hasAtLeast1Match)
                    continue;
                }
                var objResults = new KeysResult(keysLen);
                for (var i5 = 0; i5 < keysLen; i5++) {
                  objResults[i5] = tmpResults[i5];
                }
                if (containsSpace) {
                  var score = 0;
                  for (var i6 = 0; i6 < preparedSearch.spaceSearches.length; i6++)
                    score += keysSpacesBestScores[i6];
                } else {
                  var score = NEGATIVE_INFINITY;
                  for (var i7 = 0; i7 < keysLen; i7++) {
                    var result = objResults[i7];
                    if (result._score > -1e3) {
                      if (score > NEGATIVE_INFINITY) {
                        var tmp = (score + result._score) / 4;
                        if (tmp > score)
                          score = tmp;
                      }
                    }
                    if (result._score > score)
                      score = result._score;
                  }
                }
                objResults.obj = obj;
                objResults._score = score;
                if (options?.scoreFn) {
                  score = options.scoreFn(objResults);
                  if (!score)
                    continue;
                  score = denormalizeScore(score);
                  objResults._score = score;
                }
                if (score < threshold)
                  continue;
                push_result(objResults);
              }
          } else {
            for (var i = 0; i < targetsLen; ++i) {
              var target = targets[i];
              if (!target)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags)
                continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL)
                continue;
              if (result._score < threshold)
                continue;
              push_result(result);
            }
          }
          if (resultsLen === 0)
            return noResults;
          var results = new Array(resultsLen);
          for (var i = resultsLen - 1; i >= 0; --i)
            results[i] = q3.poll();
          results.total = resultsLen + limitedCount;
          return results;
        };
        var highlight = (result, open = "<b>", close = "</b>") => {
          var callback = typeof open === "function" ? open : void 0;
          var target = result.target;
          var targetLen = target.length;
          var indexes = result.indexes;
          var highlighted = "";
          var matchI = 0;
          var indexesI = 0;
          var opened = false;
          var parts = [];
          for (var i = 0; i < targetLen; ++i) {
            var char = target[i];
            if (indexes[indexesI] === i) {
              ++indexesI;
              if (!opened) {
                opened = true;
                if (callback) {
                  parts.push(highlighted);
                  highlighted = "";
                } else {
                  highlighted += open;
                }
              }
              if (indexesI === indexes.length) {
                if (callback) {
                  highlighted += char;
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                  parts.push(target.substr(i + 1));
                } else {
                  highlighted += char + close + target.substr(i + 1);
                }
                break;
              }
            } else {
              if (opened) {
                opened = false;
                if (callback) {
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                } else {
                  highlighted += close;
                }
              }
            }
            highlighted += char;
          }
          return callback ? parts : highlighted;
        };
        var prepare = (target) => {
          if (typeof target === "number")
            target = "" + target;
          else if (typeof target !== "string")
            target = "";
          var info = prepareLowerInfo(target);
          return new_result(target, {
            _targetLower: info._lower,
            _targetLowerCodes: info.lowerCodes,
            _bitflags: info.bitflags
          });
        };
        var cleanup = () => {
          preparedCache.clear();
          preparedSearchCache.clear();
        };
        var Result = /* @__PURE__ */ function() {
          function Result2() {
            _class_call_check(this, Result2);
          }
          _create_class(Result2, [
            {
              key: "indexes",
              get: function get() {
                return this._indexes.slice(0, this._indexes.len).sort((a, b3) => a - b3);
              }
            },
            {
              key: "indexes",
              set: function set(indexes) {
                return this._indexes = indexes;
              }
            },
            {
              key: "highlight",
              value: function value(open, close) {
                return highlight(this, open, close);
              }
            },
            {
              key: "score",
              get: function get() {
                return normalizeScore(this._score);
              }
            },
            {
              key: "score",
              set: function set(score) {
                this._score = denormalizeScore(score);
              }
            }
          ]);
          return Result2;
        }();
        var KeysResult = /* @__PURE__ */ function(Array1) {
          _inherits(KeysResult2, Array1);
          function KeysResult2() {
            _class_call_check(this, KeysResult2);
            return _call_super(this, KeysResult2, arguments);
          }
          _create_class(KeysResult2, [
            {
              key: "score",
              get: function get() {
                return normalizeScore(this._score);
              }
            },
            {
              key: "score",
              set: function set(score) {
                this._score = denormalizeScore(score);
              }
            }
          ]);
          return KeysResult2;
        }(_wrap_native_super(Array));
        var new_result = (target, options) => {
          var result = new Result();
          result["target"] = target;
          result["obj"] = options.obj ?? NULL;
          result._score = options._score ?? NEGATIVE_INFINITY;
          result._indexes = options._indexes ?? [];
          result._targetLower = options._targetLower ?? "";
          result._targetLowerCodes = options._targetLowerCodes ?? NULL;
          result._nextBeginningIndexes = options._nextBeginningIndexes ?? NULL;
          result._bitflags = options._bitflags ?? 0;
          return result;
        };
        var normalizeScore = (score) => {
          if (score === NEGATIVE_INFINITY)
            return 0;
          if (score > 1)
            return score;
          return Math.E ** (((-score + 1) ** 0.04307 - 1) * -2);
        };
        var denormalizeScore = (normalizedScore) => {
          if (normalizedScore === 0)
            return NEGATIVE_INFINITY;
          if (normalizedScore > 1)
            return normalizedScore;
          return 1 - Math.pow(Math.log(normalizedScore) / -2 + 1, 1 / 0.04307);
        };
        var prepareSearch = (search) => {
          if (typeof search === "number")
            search = "" + search;
          else if (typeof search !== "string")
            search = "";
          search = search.trim();
          var info = prepareLowerInfo(search);
          var spaceSearches = [];
          if (info.containsSpace) {
            var searches = search.split(/\s+/);
            searches = [
              ...new Set(searches)
            ];
            for (var i = 0; i < searches.length; i++) {
              if (searches[i] === "")
                continue;
              var _info = prepareLowerInfo(searches[i]);
              spaceSearches.push({
                lowerCodes: _info.lowerCodes,
                _lower: searches[i].toLowerCase(),
                containsSpace: false
              });
            }
          }
          return {
            lowerCodes: info.lowerCodes,
            _lower: info._lower,
            containsSpace: info.containsSpace,
            bitflags: info.bitflags,
            spaceSearches
          };
        };
        var getPrepared = (target) => {
          if (target.length > 999)
            return prepare(target);
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== void 0)
            return targetPrepared;
          targetPrepared = prepare(target);
          preparedCache.set(target, targetPrepared);
          return targetPrepared;
        };
        var getPreparedSearch = (search) => {
          if (search.length > 999)
            return prepareSearch(search);
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== void 0)
            return searchPrepared;
          searchPrepared = prepareSearch(search);
          preparedSearchCache.set(search, searchPrepared);
          return searchPrepared;
        };
        var all = (targets, options) => {
          var results = [];
          results.total = targets.length;
          var limit = options?.limit || INFINITY;
          if (options?.key) {
            for (var i = 0; i < targets.length; i++) {
              var obj = targets[i];
              var target = getValue(obj, options.key);
              if (target == NULL)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              var result = new_result(target.target, {
                _score: target._score,
                obj
              });
              results.push(result);
              if (results.length >= limit)
                return results;
            }
          } else if (options?.keys) {
            for (var i = 0; i < targets.length; i++) {
              var obj = targets[i];
              var objResults = new KeysResult(options.keys.length);
              for (var keyI = options.keys.length - 1; keyI >= 0; --keyI) {
                var target = getValue(obj, options.keys[keyI]);
                if (!target) {
                  objResults[keyI] = noTarget;
                  continue;
                }
                if (!isPrepared(target))
                  target = getPrepared(target);
                target._score = NEGATIVE_INFINITY;
                target._indexes.len = 0;
                objResults[keyI] = target;
              }
              objResults.obj = obj;
              objResults._score = NEGATIVE_INFINITY;
              results.push(objResults);
              if (results.length >= limit)
                return results;
            }
          } else {
            for (var i = 0; i < targets.length; i++) {
              var target = targets[i];
              if (target == NULL)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              target._score = NEGATIVE_INFINITY;
              target._indexes.len = 0;
              results.push(target);
              if (results.length >= limit)
                return results;
            }
          }
          return results;
        };
        var algorithm = (preparedSearch, prepared, allowSpaces = false, allowPartialMatch = false) => {
          if (allowSpaces === false && preparedSearch.containsSpace)
            return algorithmSpaces(preparedSearch, prepared, allowPartialMatch);
          var searchLower = preparedSearch._lower;
          var searchLowerCodes = preparedSearch.lowerCodes;
          var searchLowerCode = searchLowerCodes[0];
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen)
                break;
              searchLowerCode = searchLowerCodes[searchI];
            }
            ++targetI;
            if (targetI >= targetLen)
              return NULL;
          }
          var searchI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === NULL)
            nextBeginningIndexes = prepared._nextBeginningIndexes = prepareNextBeginningIndexes(prepared.target);
          targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          var backtrackCount = 0;
          if (targetI !== targetLen)
            for (; ; ) {
              if (targetI >= targetLen) {
                if (searchI <= 0)
                  break;
                ++backtrackCount;
                if (backtrackCount > 200)
                  break;
                --searchI;
                var lastMatch = matchesStrict[--matchesStrictLen];
                targetI = nextBeginningIndexes[lastMatch];
              } else {
                var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesStrict[matchesStrictLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen) {
                    successStrict = true;
                    break;
                  }
                  ++targetI;
                } else {
                  targetI = nextBeginningIndexes[targetI];
                }
              }
            }
          var substringIndex = searchLen <= 1 ? -1 : prepared._targetLower.indexOf(searchLower, matchesSimple[0]);
          var isSubstring = !!~substringIndex;
          var isSubstringBeginning = !isSubstring ? false : substringIndex === 0 || prepared._nextBeginningIndexes[substringIndex - 1] === substringIndex;
          if (isSubstring && !isSubstringBeginning) {
            for (var i = 0; i < nextBeginningIndexes.length; i = nextBeginningIndexes[i]) {
              if (i <= substringIndex)
                continue;
              for (var s = 0; s < searchLen; s++)
                if (searchLowerCodes[s] !== prepared._targetLowerCodes[i + s])
                  break;
              if (s === searchLen) {
                substringIndex = i;
                isSubstringBeginning = true;
                break;
              }
            }
          }
          var calculateScore = (matches) => {
            var score2 = 0;
            var extraMatchGroupCount = 0;
            for (var i2 = 1; i2 < searchLen; ++i2) {
              if (matches[i2] - matches[i2 - 1] !== 1) {
                score2 -= matches[i2];
                ++extraMatchGroupCount;
              }
            }
            var unmatchedDistance = matches[searchLen - 1] - matches[0] - (searchLen - 1);
            score2 -= (12 + unmatchedDistance) * extraMatchGroupCount;
            if (matches[0] !== 0)
              score2 -= matches[0] * matches[0] * 0.2;
            if (!successStrict) {
              score2 *= 1e3;
            } else {
              var uniqueBeginningIndexes = 1;
              for (var i2 = nextBeginningIndexes[0]; i2 < targetLen; i2 = nextBeginningIndexes[i2])
                ++uniqueBeginningIndexes;
              if (uniqueBeginningIndexes > 24)
                score2 *= (uniqueBeginningIndexes - 24) * 10;
            }
            score2 -= (targetLen - searchLen) / 2;
            if (isSubstring)
              score2 /= 1 + searchLen * searchLen * 1;
            if (isSubstringBeginning)
              score2 /= 1 + searchLen * searchLen * 1;
            score2 -= (targetLen - searchLen) / 2;
            return score2;
          };
          if (!successStrict) {
            if (isSubstring)
              for (var i = 0; i < searchLen; ++i)
                matchesSimple[i] = substringIndex + i;
            var matchesBest = matchesSimple;
            var score = calculateScore(matchesBest);
          } else {
            if (isSubstringBeginning) {
              for (var i = 0; i < searchLen; ++i)
                matchesSimple[i] = substringIndex + i;
              var matchesBest = matchesSimple;
              var score = calculateScore(matchesSimple);
            } else {
              var matchesBest = matchesStrict;
              var score = calculateScore(matchesStrict);
            }
          }
          prepared._score = score;
          for (var i = 0; i < searchLen; ++i)
            prepared._indexes[i] = matchesBest[i];
          prepared._indexes.len = searchLen;
          var result = new Result();
          result.target = prepared.target;
          result._score = prepared._score;
          result._indexes = prepared._indexes;
          return result;
        };
        var algorithmSpaces = (preparedSearch, target, allowPartialMatch) => {
          var seen_indexes = /* @__PURE__ */ new Set();
          var score = 0;
          var result = NULL;
          var first_seen_index_last_search = 0;
          var searches = preparedSearch.spaceSearches;
          var searchesLen = searches.length;
          var changeslen = 0;
          var resetNextBeginningIndexes = () => {
            for (var i3 = changeslen - 1; i3 >= 0; i3--)
              target._nextBeginningIndexes[nextBeginningIndexesChanges[i3 * 2 + 0]] = nextBeginningIndexesChanges[i3 * 2 + 1];
          };
          var hasAtLeast1Match = false;
          for (var i = 0; i < searchesLen; ++i) {
            allowPartialMatchScores[i] = NEGATIVE_INFINITY;
            var search = searches[i];
            result = algorithm(search, target);
            if (allowPartialMatch) {
              if (result === NULL)
                continue;
              hasAtLeast1Match = true;
            } else {
              if (result === NULL) {
                resetNextBeginningIndexes();
                return NULL;
              }
            }
            var isTheLastSearch = i === searchesLen - 1;
            if (!isTheLastSearch) {
              var indexes = result._indexes;
              var indexesIsConsecutiveSubstring = true;
              for (var i1 = 0; i1 < indexes.len - 1; i1++) {
                if (indexes[i1 + 1] - indexes[i1] !== 1) {
                  indexesIsConsecutiveSubstring = false;
                  break;
                }
              }
              if (indexesIsConsecutiveSubstring) {
                var newBeginningIndex = indexes[indexes.len - 1] + 1;
                var toReplace = target._nextBeginningIndexes[newBeginningIndex - 1];
                for (var i2 = newBeginningIndex - 1; i2 >= 0; i2--) {
                  if (toReplace !== target._nextBeginningIndexes[i2])
                    break;
                  target._nextBeginningIndexes[i2] = newBeginningIndex;
                  nextBeginningIndexesChanges[changeslen * 2 + 0] = i2;
                  nextBeginningIndexesChanges[changeslen * 2 + 1] = toReplace;
                  changeslen++;
                }
              }
            }
            score += result._score / searchesLen;
            allowPartialMatchScores[i] = result._score / searchesLen;
            if (result._indexes[0] < first_seen_index_last_search) {
              score -= (first_seen_index_last_search - result._indexes[0]) * 2;
            }
            first_seen_index_last_search = result._indexes[0];
            for (var j = 0; j < result._indexes.len; ++j)
              seen_indexes.add(result._indexes[j]);
          }
          if (allowPartialMatch && !hasAtLeast1Match)
            return NULL;
          resetNextBeginningIndexes();
          var allowSpacesResult = algorithm(
            preparedSearch,
            target,
            /*allowSpaces=*/
            true
          );
          if (allowSpacesResult !== NULL && allowSpacesResult._score > score) {
            if (allowPartialMatch) {
              for (var i = 0; i < searchesLen; ++i) {
                allowPartialMatchScores[i] = allowSpacesResult._score / searchesLen;
              }
            }
            return allowSpacesResult;
          }
          if (allowPartialMatch)
            result = target;
          result._score = score;
          var i = 0;
          for (var index of seen_indexes)
            result._indexes[i++] = index;
          result._indexes.len = i;
          return result;
        };
        var prepareLowerInfo = (str) => {
          var strLen = str.length;
          var lower = str.toLowerCase();
          var lowerCodes = [];
          var bitflags = 0;
          var containsSpace = false;
          for (var i = 0; i < strLen; ++i) {
            var lowerCode = lowerCodes[i] = lower.charCodeAt(i);
            if (lowerCode === 32) {
              containsSpace = true;
              continue;
            }
            var bit = lowerCode >= 97 && lowerCode <= 122 ? lowerCode - 97 : lowerCode >= 48 && lowerCode <= 57 ? 26 : lowerCode <= 127 ? 30 : 31;
            bitflags |= 1 << bit;
          }
          return {
            lowerCodes,
            bitflags,
            containsSpace,
            _lower: lower
          };
        };
        var prepareBeginningIndexes = (target) => {
          var targetLen = target.length;
          var beginningIndexes = [];
          var beginningIndexesLen = 0;
          var wasUpper = false;
          var wasAlphanum = false;
          for (var i = 0; i < targetLen; ++i) {
            var targetCode = target.charCodeAt(i);
            var isUpper = targetCode >= 65 && targetCode <= 90;
            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
            wasUpper = isUpper;
            wasAlphanum = isAlphanum;
            if (isBeginning)
              beginningIndexes[beginningIndexesLen++] = i;
          }
          return beginningIndexes;
        };
        var prepareNextBeginningIndexes = (target) => {
          var targetLen = target.length;
          var beginningIndexes = prepareBeginningIndexes(target);
          var nextBeginningIndexes = [];
          var lastIsBeginning = beginningIndexes[0];
          var lastIsBeginningI = 0;
          for (var i = 0; i < targetLen; ++i) {
            if (lastIsBeginning > i) {
              nextBeginningIndexes[i] = lastIsBeginning;
            } else {
              lastIsBeginning = beginningIndexes[++lastIsBeginningI];
              nextBeginningIndexes[i] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
            }
          }
          return nextBeginningIndexes;
        };
        var preparedCache = /* @__PURE__ */ new Map();
        var preparedSearchCache = /* @__PURE__ */ new Map();
        var matchesSimple = [];
        var matchesStrict = [];
        var nextBeginningIndexesChanges = [];
        var keysSpacesBestScores = [];
        var allowPartialMatchScores = [];
        var tmpTargets = [];
        var tmpResults = [];
        var getValue = (obj, prop) => {
          var tmp = obj[prop];
          if (tmp !== void 0)
            return tmp;
          if (typeof prop === "function")
            return prop(obj);
          var segs = prop;
          if (!Array.isArray(prop))
            segs = prop.split(".");
          var len = segs.length;
          var i = -1;
          while (obj && ++i < len)
            obj = obj[segs[i]];
          return obj;
        };
        var isPrepared = (x2) => {
          return typeof x2 === "object" && typeof x2._bitflags === "number";
        };
        var INFINITY = Infinity;
        var NEGATIVE_INFINITY = -INFINITY;
        var noResults = [];
        noResults.total = 0;
        var NULL = null;
        var noTarget = prepare("");
        var fastpriorityqueue = (r) => {
          var e = [], o = 0, a = {}, v2 = (r2) => {
            for (var a2 = 0, v3 = e[a2], c2 = 1; c2 < o; ) {
              var s = c2 + 1;
              a2 = c2, s < o && e[s]._score < e[c2]._score && (a2 = s), e[a2 - 1 >> 1] = e[a2], c2 = 1 + (a2 << 1);
            }
            for (var f = a2 - 1 >> 1; a2 > 0 && v3._score < e[f]._score; f = (a2 = f) - 1 >> 1)
              e[a2] = e[f];
            e[a2] = v3;
          };
          return a.add = (r2) => {
            var a2 = o;
            e[o++] = r2;
            for (var v3 = a2 - 1 >> 1; a2 > 0 && r2._score < e[v3]._score; v3 = (a2 = v3) - 1 >> 1)
              e[a2] = e[v3];
            e[a2] = r2;
          }, a.poll = (r2) => {
            if (0 !== o) {
              var a2 = e[0];
              return e[0] = e[--o], v2(), a2;
            }
          }, a.peek = (r2) => {
            if (0 !== o)
              return e[0];
          }, a.replaceTop = (r2) => {
            e[0] = r2, v2();
          }, a;
        };
        var q3 = fastpriorityqueue();
        return {
          "single": single,
          "go": go,
          "prepare": prepare,
          "cleanup": cleanup
        };
      });
    }
  });

  // src/core/ui/components/AddonPage.tsx
  function InputAlert(props) {
    var [value, setValue] = React.useState("");
    var [error, setError] = React.useState("");
    var [isFetching, setIsFetching] = React.useState(false);
    function onConfirmWrapper() {
      setIsFetching(true);
      props.fetchFn(value).then(() => dismissAlert("AddonInputAlert")).catch((e) => e instanceof Error ? setError(e.message) : String(e)).finally(() => setIsFetching(false));
    }
    return /* @__PURE__ */ jsx(AlertModal, {
      title: props.label,
      content: "Type in the source URL you want to install from:",
      extraContent: /* @__PURE__ */ jsxs(Stack, {
        style: {
          marginTop: -12
        },
        children: [
          /* @__PURE__ */ jsx(TextInput, {
            autoFocus: true,
            isClearable: true,
            value,
            onChange: (v2) => {
              setValue(v2);
              if (error)
                setError("");
            },
            returnKeyType: "done",
            onSubmitEditing: onConfirmWrapper,
            state: error ? "error" : void 0,
            errorMessage: error || void 0
          }),
          /* @__PURE__ */ jsx(import_react_native19.ScrollView, {
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            style: {
              gap: 8
            },
            children: /* @__PURE__ */ jsx(Button, {
              size: "sm",
              variant: "tertiary",
              text: "Import from clipboard",
              icon: findAssetId("ClipboardListIcon"),
              onPress: () => clipboard.getString().then((str) => setValue(str))
            })
          })
        ]
      }),
      actions: /* @__PURE__ */ jsxs(Stack, {
        children: [
          /* @__PURE__ */ jsx(Button, {
            loading: isFetching,
            text: "Install",
            variant: "primary",
            disabled: !value || !isValidHttpUrl(value),
            onPress: onConfirmWrapper
          }),
          /* @__PURE__ */ jsx(AlertActionButton, {
            disabled: isFetching,
            text: "Cancel",
            variant: "secondary"
          })
        ]
      })
    });
  }
  function AddonPage({ CardComponent, ...props }) {
    var [search, setSearch] = React.useState("");
    var [sortFn, setSortFn] = React.useState(() => null);
    var { bottom: bottomInset } = useSafeAreaInsets();
    var navigation2 = NavigationNative.useNavigation();
    (0, import_react4.useEffect)(() => {
      if (props.OptionsActionSheetComponent) {
        navigation2.setOptions({
          headerRight: () => /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            variant: "secondary",
            icon: findAssetId("MoreHorizontalIcon"),
            onPress: () => showSheet("AddonMoreSheet", props.OptionsActionSheetComponent)
          })
        });
      }
    }, [
      navigation2
    ]);
    var results = (0, import_react4.useMemo)(() => {
      var values = props.items;
      if (props.resolveItem)
        values = values.map(props.resolveItem).filter(isNotNil);
      var items = values.filter((i) => isNotNil(i) && typeof i === "object");
      if (!search && sortFn)
        items.sort(sortFn);
      return import_fuzzysort.default.go(search, items, {
        keys: props.searchKeywords,
        all: true
      });
    }, [
      props.items,
      sortFn,
      search
    ]);
    var onInstallPress = (0, import_react4.useCallback)(() => {
      if (!props.installAction)
        return () => {
        };
      var { label, onPress, fetchFn } = props.installAction;
      if (fetchFn) {
        openAlert("AddonInputAlert", /* @__PURE__ */ jsx(InputAlert, {
          label: label ?? "Install",
          fetchFn
        }));
      } else {
        onPress?.();
      }
    }, []);
    if (results.length === 0 && !search) {
      return /* @__PURE__ */ jsxs(import_react_native19.View, {
        style: {
          gap: 32,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native19.View, {
            style: {
              gap: 8,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native19.Image, {
                source: findAssetId("empty_quick_switcher")
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-lg/semibold",
                color: "text-normal",
                children: "Oops! Nothing to see here\u2026 yet!"
              })
            ]
          }),
          /* @__PURE__ */ jsx(Button, {
            size: "lg",
            icon: findAssetId("DownloadIcon"),
            text: props.installAction?.label ?? "Install",
            onPress: onInstallPress
          })
        ]
      });
    }
    var headerElement = /* @__PURE__ */ jsxs(import_react_native19.View, {
      style: {
        paddingBottom: 8
      },
      children: [
        settings.safeMode?.enabled && /* @__PURE__ */ jsxs(import_react_native19.View, {
          style: {
            marginBottom: 10
          },
          children: [
            /* @__PURE__ */ jsx(HelpMessage, {
              messageType: 0,
              children: props.safeModeHint?.message
            }),
            props.safeModeHint?.footer
          ]
        }),
        /* @__PURE__ */ jsxs(import_react_native19.View, {
          style: {
            flexDirection: "row",
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(Search_default, {
              style: {
                flexGrow: 1
              },
              isRound: !!props.sortOptions,
              onChangeText: (v2) => setSearch(v2)
            }),
            props.sortOptions && /* @__PURE__ */ jsx(IconButton, {
              icon: findAssetId("ic_forum_channel_sort_order_24px"),
              variant: "tertiary",
              disabled: !!search,
              onPress: () => showSimpleActionSheet({
                key: "AddonListSortOptions",
                header: {
                  title: "Sort Options",
                  onClose: () => hideActionSheet("AddonListSortOptions")
                },
                options: Object.entries(props.sortOptions).map(([name, fn]) => ({
                  label: name,
                  onPress: () => setSortFn(() => fn)
                }))
              })
            })
          ]
        }),
        props.ListHeaderComponent && /* @__PURE__ */ jsx(props.ListHeaderComponent, {})
      ]
    });
    return /* @__PURE__ */ jsxs(ErrorBoundary, {
      children: [
        /* @__PURE__ */ jsx(FlashList, {
          data: results,
          extraData: search,
          estimatedItemSize: 136,
          ListHeaderComponent: headerElement,
          ListEmptyComponent: () => /* @__PURE__ */ jsxs(import_react_native19.View, {
            style: {
              gap: 12,
              padding: 12,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native19.Image, {
                source: findAssetId("devices_not_found")
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-lg/semibold",
                color: "text-normal",
                children: "Hmmm... could not find that!"
              })
            ]
          }),
          contentContainerStyle: {
            padding: 8,
            paddingHorizontal: 12,
            paddingBottom: 90
          },
          ItemSeparatorComponent: () => /* @__PURE__ */ jsx(import_react_native19.View, {
            style: {
              height: 8
            }
          }),
          ListFooterComponent: props.ListFooterComponent,
          renderItem: ({ item }) => /* @__PURE__ */ jsx(CardComponent, {
            item: item.obj,
            result: item
          })
        }),
        props.installAction && /* @__PURE__ */ jsx(FloatingActionButton, {
          positionBottom: bottomInset + 8,
          icon: findAssetId("PlusLargeIcon"),
          onPress: onInstallPress
        })
      ]
    });
  }
  var import_fuzzysort, import_react4, import_react_native19, showSimpleActionSheet, hideActionSheet;
  var init_AddonPage = __esm({
    "src/core/ui/components/AddonPage.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_settings();
      init_alerts();
      init_sheets();
      init_isValidHttpUrl();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      init_components2();
      init_dist();
      import_fuzzysort = __toESM(require_fuzzysort());
      import_react4 = __toESM(require_react());
      import_react_native19 = __toESM(require_react_native());
      ({ showSimpleActionSheet, hideActionSheet } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
    }
  });

  // src/core/ui/settings/pages/Plugins/usePluginCardStyles.ts
  var usePluginCardStyles;
  var init_usePluginCardStyles = __esm({
    "src/core/ui/settings/pages/Plugins/usePluginCardStyles.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_styles();
      usePluginCardStyles = createStyles({
        smallIcon: {
          tintColor: tokens.colors.LOGO_PRIMARY,
          height: 18,
          width: 18
        },
        badgeIcon: {
          tintColor: tokens.colors.LOGO_PRIMARY,
          height: 12,
          width: 12
        },
        badgesContainer: {
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 6,
          borderRadius: 6,
          padding: 4
        }
      });
    }
  });

  // src/core/ui/settings/pages/Plugins/components/PluginCard.tsx
  function getHighlightColor() {
    return (0, import_chroma_js4.default)(tokens.unsafe_rawColors.YELLOW_300).alpha(0.3).hex();
  }
  function Title() {
    var styles = usePluginCardStyles();
    var { plugin, result } = useCardContext();
    var highlightedNode = result[0].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    var icon = plugin.icon && findAssetId(plugin.icon);
    var textNode = /* @__PURE__ */ jsx(Text, {
      numberOfLines: 1,
      variant: "heading-lg/semibold",
      children: highlightedNode.length ? highlightedNode : plugin.name
    });
    return /* @__PURE__ */ jsxs(import_react_native20.View, {
      style: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6
      },
      children: [
        icon && /* @__PURE__ */ jsx(import_react_native20.Image, {
          style: styles.smallIcon,
          source: icon
        }),
        textNode
      ]
    });
  }
  function Authors() {
    var { plugin, result } = useCardContext();
    var styles = usePluginCardStyles();
    if (!plugin.authors)
      return null;
    var highlightedNode = result[2].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    var badges = plugin.getBadges();
    var authorText = highlightedNode.length > 0 ? highlightedNode : plugin.authors.map((a) => a.name).join(", ");
    return /* @__PURE__ */ jsxs(import_react_native20.View, {
      style: {
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        gap: 4
      },
      children: [
        /* @__PURE__ */ jsxs(Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: [
            "by ",
            authorText
          ]
        }),
        badges.length > 0 && /* @__PURE__ */ jsx(import_react_native20.View, {
          style: styles.badgesContainer,
          children: badges.map((b3, i) => /* @__PURE__ */ jsx(import_react_native20.Image, {
            source: b3.source,
            style: styles.badgeIcon
          }, i))
        })
      ]
    });
  }
  function Description() {
    var { plugin, result } = useCardContext();
    var highlightedNode = result[1].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    return /* @__PURE__ */ jsx(Text, {
      variant: "text-md/medium",
      children: highlightedNode.length ? highlightedNode : plugin.description
    });
  }
  function PluginCard({ result, item: plugin }) {
    plugin.usePluginState();
    var [, forceUpdate] = React.useReducer(() => ({}), 0);
    var cardContextValue = (0, import_react5.useMemo)(() => ({
      plugin,
      result
    }), [
      plugin,
      result
    ]);
    return /* @__PURE__ */ jsx(CardContext.Provider, {
      value: cardContextValue,
      children: /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsxs(Stack, {
          spacing: 16,
          children: [
            /* @__PURE__ */ jsxs(import_react_native20.View, {
              style: {
                flexDirection: "row",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ jsxs(import_react_native20.View, {
                  style: {
                    flexShrink: 1
                  },
                  children: [
                    /* @__PURE__ */ jsx(Title, {}),
                    /* @__PURE__ */ jsx(Authors, {})
                  ]
                }),
                /* @__PURE__ */ jsx(import_react_native20.View, {
                  children: /* @__PURE__ */ jsxs(Stack, {
                    spacing: 12,
                    direction: "horizontal",
                    children: [
                      /* @__PURE__ */ jsx(Actions, {}),
                      /* @__PURE__ */ jsx(TableSwitch, {
                        value: plugin.isEnabled(),
                        onValueChange: (v2) => {
                          plugin.toggle(v2);
                          forceUpdate();
                        }
                      })
                    ]
                  })
                })
              ]
            }),
            /* @__PURE__ */ jsx(Description, {})
          ]
        })
      })
    });
  }
  var import_chroma_js4, import_react5, import_react_native20, CardContext, useCardContext, Actions;
  var init_PluginCard = __esm({
    "src/core/ui/settings/pages/Plugins/components/PluginCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_usePluginCardStyles();
      init_assets();
      init_common();
      init_components();
      init_sheets();
      import_chroma_js4 = __toESM(require_chroma_js());
      import_react5 = __toESM(require_react());
      import_react_native20 = __toESM(require_react_native());
      CardContext = /* @__PURE__ */ (0, import_react5.createContext)(null);
      useCardContext = () => (0, import_react5.useContext)(CardContext);
      Actions = () => {
        var { plugin } = useCardContext();
        var navigation2 = NavigationNative.useNavigation();
        return /* @__PURE__ */ jsxs(import_react_native20.View, {
          style: {
            flexDirection: "row",
            gap: 6
          },
          children: [
            /* @__PURE__ */ jsx(IconButton, {
              size: "sm",
              variant: "secondary",
              icon: findAssetId("WrenchIcon"),
              disabled: !plugin.getPluginSettingsComponent(),
              onPress: () => navigation2.push("BUNNY_CUSTOM_PAGE", {
                title: plugin.name,
                render: plugin.getPluginSettingsComponent()
              })
            }),
            /* @__PURE__ */ jsx(IconButton, {
              size: "sm",
              variant: "secondary",
              icon: findAssetId("CircleInformationIcon-primary"),
              onPress: () => void showSheet("PluginInfoActionSheet", plugin.resolveSheetComponent(), {
                plugin,
                navigation: navigation2
              })
            })
          ]
        });
      };
    }
  });

  // src/core/ui/components/AddonCard.tsx
  function AddonCard(props) {
    var styles = useStyles3();
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native21.View, {
            style: {
              flexDirection: "row",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native21.View, {
                style: styles.headerLeading,
                children: [
                  /* @__PURE__ */ jsx(Text, {
                    style: styles.headerLabel,
                    children: props.headerLabel
                  }),
                  props.headerSublabel && /* @__PURE__ */ jsx(Text, {
                    style: styles.headerSubtitle,
                    children: props.headerSublabel
                  })
                ]
              }),
              /* @__PURE__ */ jsxs(import_react_native21.View, {
                style: [
                  styles.headerTrailing,
                  {
                    marginLeft: "auto"
                  }
                ],
                children: [
                  /* @__PURE__ */ jsxs(import_react_native21.View, {
                    style: styles.actions,
                    children: [
                      props.overflowActions && /* @__PURE__ */ jsx(IconButton, {
                        onPress: () => showSimpleActionSheet2({
                          key: "CardOverflow",
                          header: {
                            title: props.overflowTitle,
                            icon: props.headerIcon && /* @__PURE__ */ jsx(LegacyFormRow.Icon, {
                              style: {
                                marginRight: 8
                              },
                              source: findAssetId(props.headerIcon)
                            }),
                            onClose: () => hideActionSheet2()
                          },
                          options: props.overflowActions?.map((i) => ({
                            ...i,
                            icon: findAssetId(i.icon)
                          }))
                        }),
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("CircleInformationIcon-primary")
                      }),
                      props.actions?.map(({ icon, onPress, disabled }) => /* @__PURE__ */ jsx(IconButton, {
                        onPress,
                        disabled,
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId(icon)
                      }))
                    ]
                  }),
                  props.toggleType && (props.toggleType === "switch" ? /* @__PURE__ */ jsx(FormSwitch, {
                    value: props.toggleValue(),
                    onValueChange: props.onToggleChange
                  }) : /* @__PURE__ */ jsx(import_react_native21.TouchableOpacity, {
                    onPress: () => {
                      props.onToggleChange?.(!props.toggleValue());
                    },
                    children: /* @__PURE__ */ jsx(FormRadio, {
                      selected: props.toggleValue()
                    })
                  }))
                ]
              })
            ]
          }),
          props.descriptionLabel && /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            children: props.descriptionLabel
          })
        ]
      })
    });
  }
  var import_react_native21, hideActionSheet2, showSimpleActionSheet2, useStyles3;
  var init_AddonCard = __esm({
    "src/core/ui/components/AddonCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_lazy();
      init_components();
      init_wrappers();
      init_color();
      init_styles();
      import_react_native21 = __toESM(require_react_native());
      ({ hideActionSheet: hideActionSheet2 } = lazyDestructure(() => findByProps("openLazy", "hideActionSheet")));
      ({ showSimpleActionSheet: showSimpleActionSheet2 } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
      useStyles3 = createStyles({
        card: {
          backgroundColor: semanticColors?.CARD_SECONDARY_BG,
          borderRadius: 12,
          overflow: "hidden"
        },
        header: {
          padding: 0
        },
        headerLeading: {
          flexDirection: "column",
          justifyContent: "center",
          scale: 1.2
        },
        headerTrailing: {
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center"
        },
        headerLabel: {
          ...TextStyleSheet["heading-md/semibold"],
          color: semanticColors.TEXT_NORMAL
        },
        headerSubtitle: {
          ...TextStyleSheet["text-md/semibold"],
          color: semanticColors.TEXT_MUTED
        },
        descriptionLabel: {
          ...TextStyleSheet["text-md/semibold"],
          color: semanticColors.TEXT_NORMAL
        },
        actions: {
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: 5
        },
        iconStyle: {
          tintColor: semanticColors.LOGO_PRIMARY,
          opacity: 0.2,
          height: 64,
          width: 64,
          left: void 0,
          right: "30%",
          top: "-10%"
        }
      });
    }
  });

  // src/lib/ui/components/InputAlert.tsx
  function InputAlert2({ title, confirmText, confirmColor, onConfirm, cancelText, placeholder, initialValue = "", secureTextEntry }) {
    var [value, setValue] = React.useState(initialValue);
    var [error, setError] = React.useState("");
    function onConfirmWrapper() {
      var asyncOnConfirm = Promise.resolve(onConfirm(value));
      asyncOnConfirm.then(() => {
        Alerts.close();
      }).catch((e) => {
        setError(e.message);
      });
    }
    return /* @__PURE__ */ jsx(LegacyAlert, {
      title,
      confirmText,
      confirmColor,
      isConfirmButtonDisabled: error.length !== 0,
      onConfirm: onConfirmWrapper,
      cancelText,
      onCancel: () => Alerts.close(),
      children: /* @__PURE__ */ jsx(LegacyFormInput, {
        placeholder,
        value,
        onChange: (v2) => {
          setValue(typeof v2 === "string" ? v2 : v2.text);
          if (error)
            setError("");
        },
        returnKeyType: "done",
        onSubmitEditing: onConfirmWrapper,
        error: error || void 0,
        secureTextEntry,
        autoFocus: true,
        showBorder: true,
        style: {
          alignSelf: "stretch"
        }
      })
    });
  }
  var Alerts;
  var init_InputAlert = __esm({
    "src/lib/ui/components/InputAlert.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_components();
      init_wrappers();
      Alerts = findByPropsLazy("openLazy", "close");
    }
  });

  // src/core/vendetta/alerts.ts
  function showConfirmationAlert(options) {
    var internalOptions = options;
    internalOptions.body = options.content;
    delete internalOptions.content;
    internalOptions.isDismissable ??= true;
    return Alerts2.show(internalOptions);
  }
  var Alerts2, showCustomAlert, showInputAlert;
  var init_alerts2 = __esm({
    "src/core/vendetta/alerts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_wrappers();
      init_InputAlert();
      Alerts2 = findByPropsLazy("openLazy", "close");
      showCustomAlert = (component, props) => Alerts2.openLazy({
        importer: /* @__PURE__ */ _async_to_generator(function* () {
          return () => React.createElement(component, props);
        })
      });
      showInputAlert = (options) => showCustomAlert(InputAlert2, options);
    }
  });

  // src/core/ui/settings/pages/Themes/ThemeCard.tsx
  function selectAndApply(value, theme) {
    try {
      selectTheme(value ? theme : null);
    } catch (e) {
      console.error("Error while selectAndApply,", e);
    }
  }
  function ThemeCard({ item: theme }) {
    useProxy(theme);
    var [removed, setRemoved] = React.useState(false);
    if (removed)
      return null;
    var { authors } = theme.data;
    return /* @__PURE__ */ jsx(AddonCard, {
      headerLabel: theme.data.name,
      headerSublabel: authors ? `by ${authors.map((i) => i.name).join(", ")}` : "",
      descriptionLabel: theme.data.description ?? "No description.",
      toggleType: !settings.safeMode?.enabled ? "radio" : void 0,
      toggleValue: () => themes[theme.id].selected,
      onToggleChange: (v2) => {
        selectAndApply(v2, theme);
      },
      overflowTitle: theme.data.name,
      overflowActions: [
        {
          icon: "ic_sync_24px",
          label: Strings.REFETCH,
          onPress: () => {
            fetchTheme(theme.id, theme.selected).then(() => {
              showToast(Strings.THEME_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
            }).catch(() => {
              showToast(Strings.THEME_REFETCH_FAILED, findAssetId("Small"));
            });
          }
        },
        {
          icon: "copy",
          label: Strings.COPY_URL,
          onPress: () => {
            clipboard.setString(theme.id);
            showToast.showCopyToClipboard();
          }
        },
        {
          icon: "ic_message_delete",
          label: Strings.DELETE,
          isDestructive: true,
          onPress: () => showConfirmationAlert({
            title: Strings.HOLD_UP,
            content: formatString("ARE_YOU_SURE_TO_DELETE_THEME", {
              name: theme.data.name
            }),
            confirmText: Strings.DELETE,
            cancelText: Strings.CANCEL,
            confirmColor: "red",
            onConfirm: () => {
              removeTheme(theme.id).then((wasSelected) => {
                setRemoved(true);
                if (wasSelected)
                  selectAndApply(false, theme);
              }).catch((e) => {
                showToast(e.message, findAssetId("Small"));
              });
            }
          })
        }
      ]
    });
  }
  var init_ThemeCard = __esm({
    "src/core/ui/settings/pages/Themes/ThemeCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonCard();
      init_alerts2();
      init_storage();
      init_themes();
      init_assets();
      init_settings();
      init_common();
      init_toasts();
    }
  });

  // src/core/vendetta/plugins.ts
  var plugins, pluginInstance, VdPluginManager;
  var init_plugins = __esm({
    "src/core/vendetta/plugins.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_settings();
      init_utils();
      init_constants();
      init_logger();
      plugins = wrapSync(createStorage(createMMKVBackend("VENDETTA_PLUGINS")));
      pluginInstance = {};
      VdPluginManager = {
        plugins,
        pluginFetch(url2) {
          return _async_to_generator(function* () {
            if (url2.startsWith(VD_PROXY_PREFIX)) {
              url2 = url2.replace("https://bunny-mod.github.io/plugins-proxy", BUNNY_PROXY_PREFIX).replace(VD_PROXY_PREFIX, BUNNY_PROXY_PREFIX);
            }
            return yield safeFetch(url2, {
              cache: "no-store"
            });
          })();
        },
        fetchPlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var existingPlugin = plugins[id];
            var pluginManifest;
            try {
              pluginManifest = yield (yield this.pluginFetch(id + "manifest.json")).json();
            } catch (e) {
              throw new Error(`Failed to fetch manifest for ${id}`);
            }
            var pluginJs;
            if (existingPlugin?.manifest.hash !== pluginManifest.hash) {
              try {
                pluginJs = yield (yield this.pluginFetch(id + (pluginManifest.main || "index.js"))).text();
              } catch (e) {
              }
            }
            if (!pluginJs && !existingPlugin)
              throw new Error(`Failed to fetch JS for ${id}`);
            plugins[id] = {
              id,
              manifest: pluginManifest,
              enabled: existingPlugin?.enabled ?? false,
              update: existingPlugin?.update ?? true,
              js: pluginJs ?? existingPlugin.js
            };
          }).apply(this);
        },
        installPlugin(id, enabled = true) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            if (typeof id !== "string" || id in plugins)
              throw new Error("Plugin already installed");
            yield this.fetchPlugin(id);
            if (enabled)
              yield this.startPlugin(id);
          }).apply(this);
        },
        /**
         * @internal
         */
        evalPlugin(plugin) {
          return _async_to_generator(function* () {
            var vendettaForPlugins = {
              ...window.vendetta,
              plugin: {
                id: plugin.id,
                manifest: plugin.manifest,
                // Wrapping this with wrapSync is NOT an option.
                storage: yield createStorage(createMMKVBackend(plugin.id))
              },
              logger: new LoggerClass(`Bunny \xBB ${plugin.manifest.name}`)
            };
            var pluginString = `vendetta=>{return ${plugin.js}}
//# sourceURL=${plugin.id}`;
            var raw = (0, eval)(pluginString)(vendettaForPlugins);
            var ret = typeof raw === "function" ? raw() : raw;
            return ret?.default ?? ret ?? {};
          })();
        },
        startPlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var plugin = plugins[id];
            if (!plugin)
              throw new Error("Attempted to start non-existent plugin");
            try {
              if (!settings.safeMode?.enabled) {
                var pluginRet = yield this.evalPlugin(plugin);
                pluginInstance[id] = pluginRet;
                pluginRet.onLoad?.();
              }
              plugin.enabled = true;
            } catch (e) {
              logger.error(`Plugin ${plugin.id} errored whilst loading, and will be unloaded`, e);
              try {
                pluginInstance[plugin.id]?.onUnload?.();
              } catch (e2) {
                logger.error(`Plugin ${plugin.id} errored whilst unloading`, e2);
              }
              delete pluginInstance[id];
              plugin.enabled = false;
            }
          }).apply(this);
        },
        stopPlugin(id, disable = true) {
          if (!id.endsWith("/"))
            id += "/";
          var plugin = plugins[id];
          var pluginRet = pluginInstance[id];
          if (!plugin)
            throw new Error("Attempted to stop non-existent plugin");
          if (!settings.safeMode?.enabled) {
            try {
              pluginRet?.onUnload?.();
            } catch (e) {
              logger.error(`Plugin ${plugin.id} errored whilst unloading`, e);
            }
            delete pluginInstance[id];
          }
          if (disable)
            plugin.enabled = false;
        },
        removePlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var plugin = plugins[id];
            if (plugin.enabled)
              this.stopPlugin(id);
            delete plugins[id];
            yield purgeStorage(id);
          }).apply(this);
        },
        /**
         * @internal
         */
        initPlugins() {
          return _async_to_generator(function* () {
            yield awaitStorage(settings, plugins);
            var allIds = Object.keys(plugins);
            if (!settings.safeMode?.enabled) {
              var _this = this;
              yield allSettled(allIds.filter((pl) => plugins[pl].enabled).map(/* @__PURE__ */ function() {
                var _ref = _async_to_generator(function* (pl) {
                  return plugins[pl].update && (yield _this.fetchPlugin(pl).catch((e) => logger.error(e.message))), yield _this.startPlugin(pl);
                });
                return function(pl) {
                  return _ref.apply(this, arguments);
                };
              }()));
              allIds.filter((pl) => !plugins[pl].enabled && plugins[pl].update).forEach((pl) => this.fetchPlugin(pl));
            }
            return () => this.stopAllPlugins();
          }).apply(this);
        },
        stopAllPlugins() {
          return Object.keys(pluginInstance).forEach((p) => this.stopPlugin(p, false));
        },
        getSettings: (id) => pluginInstance[id]?.settings
      };
    }
  });

  // src/core/plugins/quickinstall/forumPost.tsx
  function useExtractThreadContent(thread, _firstMessage = null, actionSheet3 = false) {
    if (thread.guild_id !== VD_DISCORD_SERVER_ID)
      return;
    var postType;
    if (thread.parent_id === VD_PLUGINS_CHANNEL_ID) {
      postType = "Plugin";
    } else if (thread.parent_id === VD_THEMES_CHANNEL_ID && isThemeSupported()) {
      postType = "Theme";
    } else
      return;
    var { firstMessage } = actionSheet3 ? useFirstForumPostMessage(thread) : {
      firstMessage: _firstMessage
    };
    var urls = firstMessage?.content?.match(HTTP_REGEX_MULTI)?.filter(postMap[postType].urlsFilter);
    if (!urls || !urls[0])
      return;
    if (postType === "Plugin" && !urls[0].endsWith("/"))
      urls[0] += "/";
    return [
      postType,
      urls[0]
    ];
  }
  function useInstaller(thread, firstMessage = null, actionSheet3 = false) {
    var [postType, url2] = useExtractThreadContent(thread, firstMessage, actionSheet3) ?? [];
    useProxy(VdPluginManager.plugins);
    useProxy(themes);
    var [isInstalling, setIsInstalling] = React.useState(false);
    if (!postType || !url2)
      return [
        true
      ];
    var isInstalled = Boolean(postMap[postType].storage[url2]);
    var installOrRemove = /* @__PURE__ */ function() {
      var _ref = _async_to_generator(function* () {
        setIsInstalling(true);
        try {
          yield postMap[postType].installOrRemove(url2);
        } catch (e) {
          showToast(e.message, findAssetId("Small"));
        } finally {
          setIsInstalling(false);
        }
      });
      return function installOrRemove2() {
        return _ref.apply(this, arguments);
      };
    }();
    return [
      false,
      postType,
      isInstalled,
      isInstalling,
      installOrRemove
    ];
  }
  var useFirstForumPostMessage, forumReactions, postMap, installButtonPatch, forumPost_default;
  var init_forumPost = __esm({
    "src/core/plugins/quickinstall/forumPost.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_plugins();
      init_storage();
      init_themes();
      init_assets();
      init_loader();
      init_patcher();
      init_constants();
      init_lazy();
      init_components();
      init_wrappers();
      init_components2();
      init_toasts();
      ({ useFirstForumPostMessage } = lazyDestructure(() => findByProps("useFirstForumPostMessage")));
      forumReactions = findByPropsLazy("MostCommonForumPostReaction");
      postMap = {
        Plugin: {
          storage: VdPluginManager.plugins,
          urlsFilter: (url2) => url2.startsWith(VD_PROXY_PREFIX),
          installOrRemove: (url2) => {
            var isInstalled = postMap.Plugin.storage[url2];
            return isInstalled ? VdPluginManager.removePlugin(url2) : VdPluginManager.installPlugin(url2);
          }
        },
        Theme: {
          storage: themes,
          urlsFilter: (url2) => url2.endsWith(".json"),
          installOrRemove: (url2) => {
            var isInstalled = postMap.Theme.storage[url2];
            return isInstalled ? removeTheme(url2) : installTheme(url2);
          }
        }
      };
      installButtonPatch = () => after("MostCommonForumPostReaction", forumReactions, ([{ thread, firstMessage }], res) => {
        var [shouldReturn, _2, installed, loading, installOrRemove] = useInstaller(thread, firstMessage, true);
        if (shouldReturn)
          return;
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [
            res,
            /* @__PURE__ */ jsx(ErrorBoundary, {
              children: /* @__PURE__ */ jsx(Button, {
                size: "sm",
                loading,
                disabled: loading,
                // variant={installed ? "destructive" : "primary"} crashes older version because "destructive" was renamed from "danger" and there's no sane way for compat check horror
                variant: installed ? "secondary" : "primary",
                text: installed ? Strings.UNINSTALL : Strings.INSTALL,
                onPress: installOrRemove,
                icon: findAssetId(installed ? "ic_message_delete" : "DownloadIcon"),
                style: {
                  marginLeft: 8
                }
              })
            })
          ]
        });
      });
      forumPost_default = () => {
        var patches2 = [
          // actionSheetPatch(),
          installButtonPatch()
        ];
        return () => patches2.map((p) => p());
      };
    }
  });

  // src/core/plugins/quickinstall/url.tsx
  function typeFromUrl(url2) {
    if (url2.startsWith(VD_PROXY_PREFIX)) {
      return "plugin";
    } else if (url2.endsWith(".json") && isThemeSupported()) {
      return "theme";
    }
  }
  function installWithToast(type, url2) {
    (type === "plugin" ? VdPluginManager.installPlugin.bind(VdPluginManager) : installTheme)(url2).then(() => {
      showToast(Strings.SUCCESSFULLY_INSTALLED, findAssetId("Check"));
    }).catch((e) => {
      showToast(e.message, findAssetId("Small"));
    });
  }
  var showSimpleActionSheet3, handleClick, openURL, getChannelId, getChannel, url_default;
  var init_url = __esm({
    "src/core/plugins/quickinstall/url.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_i18n();
      init_alerts2();
      init_plugins();
      init_themes();
      init_assets();
      init_loader();
      init_patcher();
      init_constants();
      init_lazy();
      init_common();
      init_filters();
      init_finders();
      init_wrappers();
      init_toasts();
      showSimpleActionSheet3 = findExports(byMutableProp("showSimpleActionSheet"));
      handleClick = findByPropsLazy("handleClick");
      ({ openURL } = lazyDestructure(() => url));
      ({ getChannelId } = lazyDestructure(() => channels));
      ({ getChannel } = lazyDestructure(() => findByProps("getChannel")));
      url_default = () => {
        var patches2 = new Array();
        patches2.push(after("showSimpleActionSheet", showSimpleActionSheet3, (args) => {
          if (args[0].key !== "LongPressUrl")
            return;
          var { header: { title: url2 }, options } = args[0];
          var urlType = typeFromUrl(url2);
          if (!urlType)
            return;
          options.push({
            label: Strings.INSTALL_ADDON,
            onPress: () => installWithToast(urlType, url2)
          });
        }));
        patches2.push(instead("handleClick", handleClick, /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (args, orig) {
            var { href: url2 } = args[0];
            var urlType = typeFromUrl(url2);
            if (!urlType)
              return orig.apply(this, args);
            if (urlType === "theme" && getChannel(getChannelId())?.parent_id !== VD_THEMES_CHANNEL_ID)
              return orig.apply(this, args);
            showConfirmationAlert({
              title: Strings.HOLD_UP,
              content: formatString("CONFIRMATION_LINK_IS_A_TYPE", {
                urlType
              }),
              onConfirm: () => installWithToast(urlType, url2),
              confirmText: Strings.INSTALL,
              cancelText: Strings.CANCEL,
              secondaryConfirmText: Strings.OPEN_IN_BROWSER,
              onConfirmSecondary: () => openURL(url2)
            });
          });
          return function(args, orig) {
            return _ref.apply(this, arguments);
          };
        }()));
        return () => patches2.forEach((p) => p());
      };
    }
  });

  // src/core/plugins/quickinstall/index.ts
  var quickinstall_exports = {};
  __export(quickinstall_exports, {
    default: () => quickinstall_default
  });
  var patches, quickinstall_default;
  var init_quickinstall = __esm({
    "src/core/plugins/quickinstall/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_plugins2();
      init_forumPost();
      init_url();
      patches = [];
      quickinstall_default = defineCorePlugin({
        manifest: {
          id: "bunny.quickinstall",
          name: "QuickInstall",
          version: "1.0.0",
          description: "Quickly install Vendetta plugins and themes",
          authors: [
            {
              name: "Vendetta Team"
            }
          ]
        },
        start() {
          patches = [
            forumPost_default(),
            url_default()
          ];
        },
        stop() {
          patches.forEach((p) => p());
        }
      });
    }
  });

  // src/lib/api/react/jsx.ts
  var jsx_exports = {};
  __export(jsx_exports, {
    deleteJsxCreate: () => deleteJsxCreate,
    onJsxCreate: () => onJsxCreate,
    patchJsx: () => patchJsx
  });
  function onJsxCreate(Component, callback) {
    if (!callbacks.has(Component))
      callbacks.set(Component, []);
    callbacks.get(Component).push(callback);
  }
  function deleteJsxCreate(Component, callback) {
    if (!callbacks.has(Component))
      return;
    var cbs = callbacks.get(Component);
    cbs.splice(cbs.indexOf(callback), 1);
    if (cbs.length === 0)
      callbacks.delete(Component);
  }
  function patchJsx() {
    var callback = ([Component], ret) => {
      if (typeof Component === "function" && callbacks.has(Component.name)) {
        var cbs = callbacks.get(Component.name);
        for (var cb of cbs) {
          var _ret = cb(Component, ret);
          if (_ret !== void 0)
            ret = _ret;
        }
        return ret;
      }
    };
    var patches2 = [
      after("jsx", jsxRuntime2, callback),
      after("jsxs", jsxRuntime2, callback)
    ];
    return () => patches2.forEach((unpatch) => unpatch());
  }
  var callbacks, jsxRuntime2;
  var init_jsx = __esm({
    "src/lib/api/react/jsx.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_metro();
      callbacks = /* @__PURE__ */ new Map();
      jsxRuntime2 = findByPropsLazy("jsx", "jsxs");
    }
  });

  // src/core/plugins/badges/index.tsx
  var badges_exports = {};
  __export(badges_exports, {
    default: () => badges_default
  });
  var useBadgesModule, badgesCache, badgeProps, pendingRequests, badges_default;
  var init_badges = __esm({
    "src/core/plugins/badges/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_patcher();
      init_jsx();
      init_metro();
      init_plugins2();
      init_common();
      useBadgesModule = findByNameLazy("useBadges", false);
      badgesCache = /* @__PURE__ */ new Map();
      badgeProps = /* @__PURE__ */ new Map();
      pendingRequests = /* @__PURE__ */ new Set();
      badges_default = defineCorePlugin({
        manifest: {
          id: "bunny.badges",
          name: "Opti Badges",
          version: "1.1.0",
          description: "Adds badges to user profiles",
          authors: [
            {
              name: "cocobo1"
            },
            {
              name: "byeoon"
            },
            {
              name: "pylix"
            }
          ]
        },
        start() {
          onJsxCreate("ProfileBadge", (component, ret) => {
            if (ret.props.id?.startsWith("opti-")) {
              var cachedProps = badgeProps.get(ret.props.id);
              if (cachedProps) {
                ret.props.source = cachedProps.source;
                ret.props.label = cachedProps.label;
                ret.props.id = cachedProps.id;
              }
            }
          });
          onJsxCreate("RenderedBadge", (component, ret) => {
            if (ret.props.id?.startsWith("opti-")) {
              var cachedProps = badgeProps.get(ret.props.id);
              if (cachedProps) {
                Object.assign(ret.props, cachedProps);
              }
            }
          });
          var fetchAndProcessBadges = /* @__PURE__ */ function() {
            var _ref = _async_to_generator(function* (userId) {
              if (pendingRequests.has(userId))
                return;
              pendingRequests.add(userId);
              try {
                var [badgesRes, rolesRes] = yield Promise.all([
                  fetch("https://raw.githubusercontent.com/Opti-mod/badges/refs/heads/main/badges.json"),
                  fetch("https://raw.githubusercontent.com/Opti-mod/badges/refs/heads/main/roles.json")
                ]);
                var badgesData = yield badgesRes.json();
                var rolesData = yield rolesRes.json();
                var userBadgeData = badgesData[userId] || {
                  roles: [],
                  custom: []
                };
                var allBadges = [];
                if (userBadgeData.roles) {
                  userBadgeData.roles.forEach((roleName) => {
                    var roleData = rolesData[roleName];
                    if (roleData) {
                      allBadges.push({
                        label: roleData.label,
                        url: roleData.url
                      });
                    }
                  });
                }
                if (userBadgeData.custom) {
                  allBadges.push(...userBadgeData.custom);
                }
                badgesCache.set(userId, allBadges);
                allBadges.forEach((badge, i) => {
                  var badgeId = `opti-${userId}-${i}`;
                  badgeProps.set(badgeId, {
                    id: badgeId,
                    source: {
                      uri: badge.url
                    },
                    label: badge.label,
                    userId
                  });
                });
                FluxDispatcher.dispatch({
                  type: "USER_UPDATE",
                  user: {
                    id: userId
                  }
                });
              } finally {
                pendingRequests.delete(userId);
              }
            });
            return function fetchAndProcessBadges2(userId) {
              return _ref.apply(this, arguments);
            };
          }();
          after("default", useBadgesModule, ([user], result) => {
            if (!user)
              return;
            var userId = user.userId;
            var cached = badgesCache.get(userId);
            if (!cached) {
              if (!pendingRequests.has(userId)) {
                fetchAndProcessBadges(userId);
              }
              return;
            }
            cached.forEach((badge, i) => {
              var badgeId = `opti-${userId}-${i}`;
              result.unshift({
                id: badgeId,
                description: badge.label,
                icon: " _"
              });
            });
          });
        }
      });
    }
  });

  // src/core/plugins/index.ts
  function defineCorePlugin(instance) {
    instance[Symbol.for("bunny.core.plugin")] = true;
    return instance;
  }
  var getCorePlugins;
  var init_plugins2 = __esm({
    "src/core/plugins/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      getCorePlugins = () => ({
        "bunny.quickinstall": (init_quickinstall(), __toCommonJS(quickinstall_exports)),
        "bunny.badges": (init_badges(), __toCommonJS(badges_exports))
      });
    }
  });

  // src/lib/api/commands/types.ts
  var ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType;
  var init_types = __esm({
    "src/lib/api/commands/types.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      (function(ApplicationCommandInputType2) {
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN"] = 0] = "BUILT_IN";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_TEXT"] = 1] = "BUILT_IN_TEXT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_INTEGRATION"] = 2] = "BUILT_IN_INTEGRATION";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BOT"] = 3] = "BOT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["PLACEHOLDER"] = 4] = "PLACEHOLDER";
      })(ApplicationCommandInputType || (ApplicationCommandInputType = {}));
      (function(ApplicationCommandOptionType2) {
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SUB_COMMAND"] = 1] = "SUB_COMMAND";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SUB_COMMAND_GROUP"] = 2] = "SUB_COMMAND_GROUP";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["STRING"] = 3] = "STRING";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["INTEGER"] = 4] = "INTEGER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["BOOLEAN"] = 5] = "BOOLEAN";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["USER"] = 6] = "USER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["CHANNEL"] = 7] = "CHANNEL";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["ROLE"] = 8] = "ROLE";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["MENTIONABLE"] = 9] = "MENTIONABLE";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["NUMBER"] = 10] = "NUMBER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["ATTACHMENT"] = 11] = "ATTACHMENT";
      })(ApplicationCommandOptionType || (ApplicationCommandOptionType = {}));
      (function(ApplicationCommandType2) {
        ApplicationCommandType2[ApplicationCommandType2["CHAT"] = 1] = "CHAT";
        ApplicationCommandType2[ApplicationCommandType2["USER"] = 2] = "USER";
        ApplicationCommandType2[ApplicationCommandType2["MESSAGE"] = 3] = "MESSAGE";
      })(ApplicationCommandType || (ApplicationCommandType = {}));
    }
  });

  // src/core/commands/eval.ts
  var eval_exports = {};
  __export(eval_exports, {
    default: () => eval_default
  });
  function wrapInJSCodeblock(resString) {
    return "```js\n" + resString.replaceAll("`", "`" + ZERO_WIDTH_SPACE_CHARACTER) + "\n```";
  }
  var util, AsyncFunction, ZERO_WIDTH_SPACE_CHARACTER, eval_default;
  var init_eval = __esm({
    "src/core/commands/eval.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_i18n();
      init_types();
      init_settings();
      init_common();
      init_wrappers();
      util = findByPropsLazy("inspect");
      AsyncFunction = _async_to_generator(function* () {
        return void 0;
      }).constructor;
      ZERO_WIDTH_SPACE_CHARACTER = "\u200B";
      eval_default = () => ({
        name: "eval",
        description: Strings.COMMAND_EVAL_DESC,
        shouldHide: () => settings.enableEvalCommand === true,
        options: [
          {
            name: "code",
            type: ApplicationCommandOptionType.STRING,
            description: Strings.COMMAND_EVAL_OPT_CODE,
            required: true
          },
          {
            name: "async",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_EVAL_OPT_ASYNC
          }
        ],
        execute([code, async], ctx) {
          return _async_to_generator(function* () {
            try {
              var res = util.inspect(async?.value ? yield AsyncFunction(code.value)() : eval?.(code.value));
              var trimmedRes = res.length > 2e3 ? res.slice(0, 2e3) + "..." : res;
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(trimmedRes));
            } catch (err) {
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(err?.stack ?? err));
            }
          })();
        }
      });
    }
  });

  // src/core/commands/debug.ts
  var debug_exports2 = {};
  __export(debug_exports2, {
    default: () => debug_default
  });
  var debug_default;
  var init_debug2 = __esm({
    "src/core/commands/debug.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_types();
      init_debug();
      init_common();
      debug_default = () => ({
        name: "debug",
        description: Strings.COMMAND_DEBUG_DESC,
        options: [
          {
            name: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY
          }
        ],
        execute([ephemeral], ctx) {
          var info = getDebugInfo();
          var content = [
            "**Opti Debug Info**",
            `> Opti: ${info.bunny.version}`,
            `> Loader: ${info.bunny.loader.name} ${info.bunny.loader.version}`,
            `> Discord: ${info.discord.version} (${info.discord.build})`,
            `-# Hermes: ${info.hermes.bytecodeVersion}  ${info.hermes.version}`,
            `-# React: ${info.react.version} (RN ${info.react.nativeVersion})`,
            `-# System: ${info.os.name} ${info.os.version} ${info.os.sdk ? `(SDK ${info.os.sdk})` : ""}`.trimEnd(),
            `-# Device: ${info.device.model} (${info.device.codename})`
          ].join("\n");
          if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
          } else {
            messageUtil.sendMessage(ctx.channel.id, {
              content
            });
          }
        }
      });
    }
  });

  // src/core/commands/plugins.ts
  var plugins_exports = {};
  __export(plugins_exports, {
    default: () => plugins_default
  });
  var plugins_default;
  var init_plugins3 = __esm({
    "src/core/commands/plugins.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_plugins();
      init_types();
      init_common();
      plugins_default = () => ({
        name: "plugins",
        description: Strings.COMMAND_PLUGINS_DESC,
        options: [
          {
            name: "ephemeral",
            displayName: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY
          }
        ],
        execute([ephemeral], ctx) {
          var plugins2 = Object.values(VdPluginManager.plugins).filter(Boolean);
          plugins2.sort((a, b3) => a.manifest.name.localeCompare(b3.manifest.name));
          var enabled = plugins2.filter((p) => p.enabled).map((p) => p.manifest.name);
          var disabled = plugins2.filter((p) => !p.enabled).map((p) => p.manifest.name);
          var content = [
            `**Installed Plugins (${plugins2.length}):**`,
            ...enabled.length > 0 ? [
              `Enabled (${enabled.length}):`,
              "> " + enabled.join(", ")
            ] : [],
            ...disabled.length > 0 ? [
              `Disabled (${disabled.length}):`,
              "> " + disabled.join(", ")
            ] : []
          ].join("\n");
          if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
          } else {
            messageUtil.sendMessage(ctx.channel.id, {
              content
            });
          }
        }
      });
    }
  });

  // src/lib/api/commands/index.ts
  var commands_exports = {};
  __export(commands_exports, {
    patchCommands: () => patchCommands,
    registerCommand: () => registerCommand
  });
  function patchCommands() {
    var unpatch = after("getBuiltInCommands", commands, ([type], res) => {
      return [
        ...res,
        ...commands2.filter((c2) => (type instanceof Array ? type.includes(c2.type) : type === c2.type) && c2.__bunny?.shouldHide?.() !== false)
      ];
    });
    [
      (init_eval(), __toCommonJS(eval_exports)),
      (init_debug2(), __toCommonJS(debug_exports2)),
      (init_plugins3(), __toCommonJS(plugins_exports))
    ].forEach((r) => registerCommand(r.default()));
    return () => {
      commands2 = [];
      unpatch();
    };
  }
  function registerCommand(command) {
    var builtInCommands;
    try {
      builtInCommands = commands.getBuiltInCommands(ApplicationCommandType.CHAT, true, false);
    } catch (e) {
      builtInCommands = commands.getBuiltInCommands(Object.values(ApplicationCommandType), true, false);
    }
    builtInCommands.sort((a, b3) => parseInt(b3.id) - parseInt(a.id));
    var lastCommand = builtInCommands[builtInCommands.length - 1];
    command.id = (parseInt(lastCommand.id, 10) - 1).toString();
    command.__bunny = {
      shouldHide: command.shouldHide
    };
    command.applicationId ??= "-1";
    command.type ??= ApplicationCommandType.CHAT;
    command.inputType = ApplicationCommandInputType.BUILT_IN;
    command.displayName ??= command.name;
    command.untranslatedName ??= command.name;
    command.displayDescription ??= command.description;
    command.untranslatedDescription ??= command.description;
    if (command.options)
      for (var opt of command.options) {
        opt.displayName ??= opt.name;
        opt.displayDescription ??= opt.description;
      }
    instead("execute", command, (args, orig) => {
      Promise.resolve(orig.apply(command, args)).then((ret) => {
        if (ret && typeof ret === "object") {
          messageUtil.sendMessage(args[1].channel.id, ret);
        }
      }).catch((err) => {
        logger.error("Failed to execute command", err);
      });
    });
    commands2.push(command);
    return () => commands2 = commands2.filter(({ id }) => id !== command.id);
  }
  var commands2;
  var init_commands = __esm({
    "src/lib/api/commands/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_types();
      init_patcher();
      init_logger();
      init_common();
      commands2 = [];
    }
  });

  // src/lib/api/flux/index.ts
  var flux_exports = {};
  __export(flux_exports, {
    dispatcher: () => dispatcher,
    injectFluxInterceptor: () => injectFluxInterceptor,
    intercept: () => intercept
  });
  function injectFluxInterceptor() {
    var cb = (payload) => {
      for (var intercept2 of intercepts) {
        var res = intercept2(payload);
        if (res == null) {
          continue;
        } else if (!res) {
          payload[blockedSym] = true;
        } else if (typeof res === "object") {
          Object.assign(payload, res);
          payload[modifiedSym] = true;
        }
      }
      return blockedSym in payload;
    };
    (dispatcher._interceptors ??= []).unshift(cb);
    return () => dispatcher._interceptors &&= dispatcher._interceptors.filter((v2) => v2 !== cb);
  }
  function intercept(cb) {
    intercepts.push(cb);
    return () => {
      intercepts = intercepts.filter((i) => i !== cb);
    };
  }
  var blockedSym, modifiedSym, dispatcher, intercepts;
  var init_flux = __esm({
    "src/lib/api/flux/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      blockedSym = Symbol.for("bunny.flux.blocked");
      modifiedSym = Symbol.for("bunny.flux.modified");
      dispatcher = FluxDispatcher;
      intercepts = [];
    }
  });

  // src/lib/api/native/index.ts
  var native_exports = {};
  __export(native_exports, {
    fs: () => fs_exports
  });
  var init_native = __esm({
    "src/lib/api/native/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_fs();
    }
  });

  // src/lib/api/react/index.ts
  var react_exports = {};
  __export(react_exports, {
    jsx: () => jsx_exports
  });
  var init_react = __esm({
    "src/lib/api/react/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsx();
    }
  });

  // src/lib/api/index.ts
  var api_exports = {};
  __export(api_exports, {
    assets: () => assets_exports,
    commands: () => commands_exports,
    debug: () => debug_exports,
    flux: () => flux_exports,
    native: () => native_exports,
    patcher: () => patcher_exports,
    react: () => react_exports,
    settings: () => settings_exports,
    storage: () => storage_exports
  });
  var init_api = __esm({
    "src/lib/api/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_assets();
      init_commands();
      init_debug();
      init_flux();
      init_native();
      init_patcher();
      init_react();
      init_settings();
      init_storage2();
    }
  });

  // src/lib/addons/plugins/api.ts
  function shimDisposableFn(unpatches, f) {
    var dummy = (...props) => {
      var up = f(...props);
      unpatches.push(up);
      return up;
    };
    for (var key in f)
      if (typeof f[key] === "function") {
        dummy[key] = shimDisposableFn(unpatches, f[key]);
      }
    return dummy;
  }
  function createBunnyPluginApi(id) {
    var disposers = new Array();
    var object = {
      ...window.bunny,
      api: {
        ...window.bunny.api,
        patcher: {
          before: shimDisposableFn(disposers, patcher_exports.before),
          after: shimDisposableFn(disposers, patcher_exports.after),
          instead: shimDisposableFn(disposers, patcher_exports.instead)
        },
        commands: {
          ...window.bunny.api.commands,
          registerCommand: shimDisposableFn(disposers, registerCommand)
        },
        flux: {
          ...window.bunny.api.flux,
          intercept: shimDisposableFn(disposers, window.bunny.api.flux.intercept)
        }
      },
      // Added something in here? Make sure to also update BunnyPluginProperty in ./types
      plugin: {
        createStorage: () => createStorage2(`plugins/storage/${id}.json`),
        manifest: registeredPlugins.get(id),
        logger
      }
    };
    return {
      object,
      disposers
    };
  }
  var init_api2 = __esm({
    "src/lib/addons/plugins/api.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_api();
      init_commands();
      init_storage2();
      init_logger();
      init_plugins4();
    }
  });

  // src/lib/addons/plugins/index.ts
  var plugins_exports2 = {};
  __export(plugins_exports2, {
    apiObjects: () => apiObjects,
    corePluginInstances: () => corePluginInstances,
    deleteRepository: () => deleteRepository,
    disablePlugin: () => disablePlugin,
    enablePlugin: () => enablePlugin,
    getPluginSettingsComponent: () => getPluginSettingsComponent,
    initPlugins: () => initPlugins,
    installPlugin: () => installPlugin,
    isCorePlugin: () => isCorePlugin,
    isGreaterVersion: () => isGreaterVersion,
    isPluginEnabled: () => isPluginEnabled,
    isPluginInstalled: () => isPluginInstalled,
    pluginInstances: () => pluginInstances,
    pluginRepositories: () => pluginRepositories,
    pluginSettings: () => pluginSettings,
    refreshPlugin: () => refreshPlugin,
    registeredPlugins: () => registeredPlugins,
    startPlugin: () => startPlugin,
    stopPlugin: () => stopPlugin,
    uninstallPlugin: () => uninstallPlugin,
    updateAllRepository: () => updateAllRepository,
    updateAndWritePlugin: () => updateAndWritePlugin,
    updatePlugins: () => updatePlugins,
    updateRepository: () => updateRepository
  });
  function assert(condition, id, attempt) {
    if (!condition)
      throw new Error(`[${id}] Attempted to ${attempt}`);
  }
  function isGreaterVersion(v1, v2) {
    if (semver.gt(v1, v2))
      return true;
    var coerced = semver.coerce(v1);
    if (coerced == null)
      return false;
    return semver.prerelease(v1)?.includes("dev") && semver.eq(coerced, v2);
  }
  function isExternalPlugin(manifest) {
    return "parentRepository" in manifest;
  }
  function isCorePlugin(id) {
    return corePluginInstances.has(id);
  }
  function getPluginSettingsComponent(id) {
    var instance = pluginInstances.get(id);
    if (!instance)
      return null;
    if (instance.SettingsComponent)
      return instance.SettingsComponent;
    return null;
  }
  function isPluginInstalled(id) {
    return pluginSettings[id] != null;
  }
  function isPluginEnabled(id) {
    return Boolean(pluginSettings[id]?.enabled);
  }
  function updateAndWritePlugin(repoUrl, id, fetchScript) {
    return _updateAndWritePlugin.apply(this, arguments);
  }
  function _updateAndWritePlugin() {
    _updateAndWritePlugin = _async_to_generator(function* (repoUrl, id, fetchScript) {
      var manifest = yield fetchJSON(repoUrl, `builds/${id}/manifest.json`);
      manifest.parentRepository = repoUrl;
      if (fetchScript) {
        manifest.jsPath = `plugins/scripts/${id}.js`;
        var js = yield fetchJS(repoUrl, `builds/${id}/index.js`);
        yield writeFile(manifest.jsPath, js);
      }
      yield updateStorage(`plugins/manifests/${id}.json`, manifest);
      if (registeredPlugins.has(id)) {
        var existingManifest = registeredPlugins.get(id);
        return Object.assign(existingManifest, manifest);
      }
      return manifest;
    });
    return _updateAndWritePlugin.apply(this, arguments);
  }
  function refreshPlugin(id, repoUrl) {
    return _refreshPlugin.apply(this, arguments);
  }
  function _refreshPlugin() {
    _refreshPlugin = _async_to_generator(function* (id, repoUrl) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "refresh a non-registered plugin");
      assert(pluginInstances.get(id), id, "refresh a non-started plugin");
      stopPlugin(id);
      if (isExternalPlugin(manifest)) {
        manifest = yield updateAndWritePlugin(repoUrl ?? manifest.parentRepository, id, true);
      }
      registeredPlugins.delete(id);
      registeredPlugins.set(id, manifest);
      yield startPlugin(id);
    });
    return _refreshPlugin.apply(this, arguments);
  }
  function updateRepository(repoUrl) {
    return _updateRepository.apply(this, arguments);
  }
  function _updateRepository() {
    _updateRepository = _async_to_generator(function* (repoUrl) {
      var repo = yield fetchJSON(repoUrl, "repo.json");
      var storedRepo = pluginRepositories[repoUrl];
      var updated = false;
      if (!storedRepo) {
        for (var id in repo) {
          if (corePluginInstances.has(id)) {
            throw new Error(`Plugins can't have the same ID as any of Bunny core plugin '${id}'`);
          }
        }
        updated = true;
        pluginRepositories[repoUrl] = repo;
      } else {
        for (var plugin in storedRepo)
          if (!repo[plugin]) {
            delete storedRepo[plugin];
          }
      }
      var pluginIds = Object.keys(repo).filter((id2) => !id2.startsWith("$"));
      yield Promise.all(pluginIds.map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (pluginId) {
          if (!storedRepo || !storedRepo[pluginId] || repo[pluginId].alwaysFetch || isGreaterVersion(repo[pluginId].version, storedRepo[pluginId].version)) {
            updated = true;
            pluginRepositories[repoUrl][pluginId] = repo[pluginId];
            yield updateAndWritePlugin(repoUrl, pluginId, Boolean(storedRepo && pluginSettings[pluginId]));
          } else {
            var manifest2 = yield preloadStorageIfExists(`plugins/manifests/${pluginId}.json`);
            if (!manifest2) {
              yield updateAndWritePlugin(repoUrl, pluginId, Boolean(storedRepo && pluginSettings[pluginId]));
            }
          }
        });
        return function(pluginId) {
          return _ref.apply(this, arguments);
        };
      }()));
      for (var id1 of pluginIds) {
        var manifest = getPreloadedStorage(`plugins/manifests/${id1}.json`);
        if (manifest === void 0)
          continue;
        var existing = registeredPlugins.get(id1);
        if (existing && !isGreaterVersion(manifest.version, existing.version)) {
          continue;
        }
        registeredPlugins.set(id1, manifest);
      }
      return updated;
    });
    return _updateRepository.apply(this, arguments);
  }
  function deleteRepository(repoUrl) {
    return _deleteRepository.apply(this, arguments);
  }
  function _deleteRepository() {
    _deleteRepository = _async_to_generator(function* (repoUrl) {
      assert(repoUrl !== OFFICIAL_PLUGINS_REPO_URL, repoUrl, "delete the official repository");
      assert(pluginRepositories[repoUrl], repoUrl, "delete a non-registered repository");
      var promQueues = [];
      for (var [id, manifest] of registeredPlugins) {
        if (!isExternalPlugin(manifest) || manifest.parentRepository !== repoUrl)
          continue;
        if (isPluginInstalled(id)) {
          promQueues.push(uninstallPlugin(id));
        }
        promQueues.push(purgeStorage2(`plugins/manifests/${id}.json`));
        registeredPlugins.delete(id);
      }
      delete pluginRepositories[repoUrl];
      yield Promise.all(promQueues);
      updateAllRepository();
    });
    return _deleteRepository.apply(this, arguments);
  }
  function enablePlugin(id, start) {
    return _enablePlugin.apply(this, arguments);
  }
  function _enablePlugin() {
    _enablePlugin = _async_to_generator(function* (id, start) {
      assert(isPluginInstalled(id), id, "enable a non-installed plugin");
      if (start)
        yield startPlugin(id);
      pluginSettings[id].enabled = true;
    });
    return _enablePlugin.apply(this, arguments);
  }
  function disablePlugin(id) {
    assert(isPluginInstalled(id), id, "disable a non-installed plugin");
    pluginInstances.has(id) && stopPlugin(id);
    pluginSettings[id].enabled = false;
  }
  function installPlugin(id, start) {
    return _installPlugin.apply(this, arguments);
  }
  function _installPlugin() {
    _installPlugin = _async_to_generator(function* (id, start) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "install an non-registered plugin");
      assert(!isPluginInstalled(id), id, "install an already installed plugin");
      assert(isExternalPlugin(manifest), id, "install a core plugin");
      yield updateAndWritePlugin(manifest.parentRepository, id, true);
      pluginSettings[id] = {
        enabled: true
      };
      if (start)
        startPlugin(id);
    });
    return _installPlugin.apply(this, arguments);
  }
  function uninstallPlugin(id) {
    return _uninstallPlugin.apply(this, arguments);
  }
  function _uninstallPlugin() {
    _uninstallPlugin = _async_to_generator(function* (id) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "uninstall an unregistered plugin");
      assert(isPluginInstalled(id), id, "uninstall a non-installed plugin");
      assert(isExternalPlugin(manifest), id, "uninstall a core plugin");
      pluginInstances.has(id) && stopPlugin(id);
      delete pluginSettings[id];
      yield purgeStorage2(`plugins/storage/${id}.json`);
      yield removeFile(`plugins/scripts/${id}.js`);
    });
    return _uninstallPlugin.apply(this, arguments);
  }
  function startPlugin(id) {
    return _startPlugin.apply(this, arguments);
  }
  function _startPlugin() {
    _startPlugin = _async_to_generator(function* (id, { throwIfDisabled = false, disableWhenThrown = true } = {}) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "start a non-registered plugin");
      assert(isPluginInstalled(id), id, "start a non-installed plugin");
      assert(!throwIfDisabled || pluginSettings[id]?.enabled, id, "start a disabled plugin");
      assert(!pluginInstances.has(id), id, "start an already started plugin");
      yield preloadStorageIfExists(`plugins/storage/${id}.json`);
      var pluginInstance2;
      if (isExternalPlugin(manifest)) {
        try {
          var iife = yield readFile(manifest.jsPath);
          var instantiator = globalEvalWithSourceUrl(`(bunny,definePlugin)=>{${iife};return plugin?.default ?? plugin;}`, `bunny-plugin/${id}-${manifest.version}`);
        } catch (error) {
          throw new Error("An error occured while parsing plugin's code, possibly a syntax error?", {
            cause: error
          });
        }
        try {
          var api = createBunnyPluginApi(id);
          pluginInstance2 = instantiator(api.object, (p) => {
            return Object.assign(p, {
              manifest
            });
          });
          if (!pluginInstance2)
            throw new Error(`Plugin '${id}' does not export a valid plugin instance`);
          apiObjects.set(id, api);
          pluginInstances.set(id, pluginInstance2);
        } catch (error) {
          throw new Error("An error occured while instantiating plugin's code", {
            cause: error
          });
        }
      } else {
        pluginInstance2 = corePluginInstances.get(id);
        assert(pluginInstance2, id, "start a non-existent core plugin");
        pluginInstances.set(id, pluginInstance2);
      }
      try {
        pluginInstance2.start?.();
        pluginSettings[id].enabled = true;
      } catch (error) {
        disableWhenThrown && disablePlugin(id);
        throw new Error("An error occured while starting the plugin", {
          cause: error
        });
      }
    });
    return _startPlugin.apply(this, arguments);
  }
  function stopPlugin(id) {
    var instance = pluginInstances.get(id);
    assert(instance, id, "stop a non-started plugin");
    instance.stop?.();
    var obj = apiObjects.get(id);
    obj?.disposers.forEach((d) => d());
    pluginInstances.delete(id);
  }
  function updateAllRepository() {
    return _updateAllRepository.apply(this, arguments);
  }
  function _updateAllRepository() {
    _updateAllRepository = _async_to_generator(function* () {
      try {
        yield updateRepository(OFFICIAL_PLUGINS_REPO_URL);
      } catch (error) {
        console.error("Failed to update official plugins repository", error);
      }
      yield allSettled(Object.keys(pluginRepositories).map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (repo) {
          if (repo !== OFFICIAL_PLUGINS_REPO_URL) {
            yield updateRepository(repo);
          }
        });
        return function(repo) {
          return _ref.apply(this, arguments);
        };
      }()));
    });
    return _updateAllRepository.apply(this, arguments);
  }
  function updatePlugins() {
    return _updatePlugins.apply(this, arguments);
  }
  function _updatePlugins() {
    _updatePlugins = _async_to_generator(function* () {
      yield awaitStorage2(pluginRepositories, pluginSettings);
      var corePlugins = getCorePlugins();
      for (var id in corePlugins) {
        var { default: instance, preenabled } = corePlugins[id];
        pluginSettings[id] ??= {
          enabled: preenabled ?? true
        };
        registeredPlugins.set(id, instance.manifest);
        corePluginInstances.set(id, instance);
      }
      yield updateAllRepository();
    });
    return _updatePlugins.apply(this, arguments);
  }
  function initPlugins() {
    return _initPlugins.apply(this, arguments);
  }
  function _initPlugins() {
    _initPlugins = _async_to_generator(function* () {
      yield awaitStorage2(pluginRepositories, pluginSettings);
      yield allSettled([
        ...registeredPlugins.keys()
      ].map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (id) {
          if (isPluginEnabled(id)) {
            yield startPlugin(id);
          }
        });
        return function(id) {
          return _ref.apply(this, arguments);
        };
      }()));
    });
    return _initPlugins.apply(this, arguments);
  }
  var corePluginInstances, registeredPlugins, pluginInstances, apiObjects, pluginRepositories, pluginSettings, _fetch, fetchJS, fetchJSON;
  var init_plugins4 = __esm({
    "src/lib/addons/plugins/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_plugins2();
      init_fs();
      init_storage2();
      init_utils();
      init_constants();
      init_common();
      init_api2();
      corePluginInstances = /* @__PURE__ */ new Map();
      registeredPlugins = /* @__PURE__ */ new Map();
      pluginInstances = /* @__PURE__ */ new Map();
      apiObjects = /* @__PURE__ */ new Map();
      pluginRepositories = createStorage2("plugins/repositories.json");
      pluginSettings = createStorage2("plugins/settings.json");
      _fetch = (repoUrl, path) => safeFetch(new URL(path, repoUrl), {
        cache: "no-store"
      });
      fetchJS = (repoUrl, path) => _fetch(repoUrl, path).then((r) => r.text());
      fetchJSON = (repoUrl, path) => _fetch(repoUrl, path).then((r) => r.json());
    }
  });

  // src/metro/common/stores.ts
  var UserStore;
  var init_stores = __esm({
    "src/metro/common/stores.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      UserStore = findByStoreNameLazy("UserStore");
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/TitleComponent.tsx
  function TitleComponent({ plugin }) {
    var users = FluxUtils.useStateFromStoresArray([
      UserStore
    ], () => {
      plugin.authors?.forEach((a) => a.id && maybeFetchUser(a.id));
      return plugin.authors?.map((a) => UserStore.getUser(a.id));
    });
    var { authors } = plugin;
    var authorTextNode = [];
    if (authors) {
      var _loop2 = function(author2) {
        authorTextNode.push(/* @__PURE__ */ jsx(Text, {
          onPress: () => showUserProfileActionSheet({
            userId: author2.id
          }),
          variant: "text-md/medium",
          children: author2.name
        }));
        authorTextNode.push(", ");
      };
      for (var author of authors)
        _loop2(author);
      authorTextNode.pop();
    }
    return /* @__PURE__ */ jsxs(import_react_native22.View, {
      style: {
        gap: 4
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native22.View, {
          children: /* @__PURE__ */ jsx(Text, {
            variant: "heading-xl/semibold",
            children: plugin.name
          })
        }),
        /* @__PURE__ */ jsx(import_react_native22.View, {
          style: {
            flexDirection: "row",
            flexShrink: 1
          },
          children: authors?.length && /* @__PURE__ */ jsxs(import_react_native22.View, {
            style: {
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 8,
              backgroundColor: "#00000016",
              borderRadius: 32
            },
            children: [
              users.length && /* @__PURE__ */ jsx(AvatarPile, {
                size: "xxsmall",
                names: plugin.authors?.map((a) => a.name),
                totalCount: plugin.authors?.length,
                children: users.map((a) => /* @__PURE__ */ jsx(Avatar, {
                  size: "xxsmall",
                  user: a
                }))
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/medium",
                children: authorTextNode
              })
            ]
          })
        })
      ]
    });
  }
  var import_react_native22, showUserProfileActionSheet, maybeFetchUser;
  var init_TitleComponent = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/TitleComponent.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      init_stores();
      import_react_native22 = __toESM(require_react_native());
      showUserProfileActionSheet = findByNameLazy("showUserProfileActionSheet");
      ({ getUser: maybeFetchUser } = lazyDestructure(() => findByProps("getUser", "fetchProfile")));
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/PluginInfoActionSheet.tsx
  var PluginInfoActionSheet_exports = {};
  __export(PluginInfoActionSheet_exports, {
    default: () => PluginInfoActionSheet
  });
  function PluginInfoIconButton(props) {
    var { onPress } = props;
    props.onPress &&= () => {
      hideSheet("PluginInfoActionSheet");
      onPress?.();
    };
    return /* @__PURE__ */ jsx(IconButton, {
      ...props
    });
  }
  function PluginInfoActionSheet({ plugin, navigation: navigation2 }) {
    plugin.usePluginState();
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native23.ScrollView, {
        contentContainerStyle: {
          gap: 12,
          marginBottom: 12
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native23.View, {
            style: {
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingVertical: 24,
              justifyContent: "space-between",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ jsx(TitleComponent, {
                plugin
              }),
              /* @__PURE__ */ jsx(ContextMenu, {
                items: [
                  {
                    label: "Details",
                    iconSource: findAssetId("CircleInformationIcon-primary"),
                    action: () => {
                    }
                  },
                  // {
                  //     label: true ? "Disable Updates" : "Enable Updates",
                  //     iconSource: true ? findAssetId("ClockXIcon") : findAssetId("ClockIcon"),
                  //     action: () => {
                  //     }
                  // },
                  {
                    label: "Clear Data",
                    iconSource: findAssetId("FileIcon"),
                    variant: "destructive",
                    action: () => {
                    }
                  },
                  {
                    label: "Uninstall",
                    iconSource: findAssetId("TrashIcon"),
                    variant: "destructive",
                    action: () => {
                    }
                  }
                ],
                children: (props) => /* @__PURE__ */ jsx(IconButton, {
                  ...props,
                  icon: findAssetId("MoreHorizontalIcon"),
                  variant: "secondary",
                  size: "sm"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(import_react_native23.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center"
            },
            children: [
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Configure",
                variant: "secondary",
                disabled: !plugin.getPluginSettingsComponent(),
                icon: findAssetId("WrenchIcon"),
                onPress: () => {
                  navigation2.push("BUNNY_CUSTOM_PAGE", {
                    title: plugin.name,
                    render: plugin.getPluginSettingsComponent()
                  });
                }
              }),
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Refetch",
                variant: "secondary",
                icon: findAssetId("RetryIcon"),
                onPress: () => {
                  startPlugin(plugin.id);
                }
              }),
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Copy URL",
                variant: "secondary",
                icon: findAssetId("LinkIcon"),
                onPress: () => {
                }
              })
            ]
          }),
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/semibold",
                color: "text-primary",
                style: {
                  marginBottom: 4
                },
                children: "Description"
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/medium",
                children: plugin.description
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native23;
  var init_PluginInfoActionSheet = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/PluginInfoActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_plugins4();
      init_assets();
      init_sheets();
      init_components();
      import_react_native23 = __toESM(require_react_native());
      init_TitleComponent();
    }
  });

  // src/core/ui/settings/pages/Plugins/models/bunny.ts
  function unifyBunnyPlugin(manifest) {
    return {
      id: manifest.id,
      name: manifest.display.name,
      description: manifest.display.description,
      authors: manifest.display.authors,
      getBadges() {
        return [
          {
            source: {
              uri: OptiLogo_default
            }
          }
        ];
      },
      isEnabled: () => isPluginEnabled(manifest.id),
      isInstalled: () => manifest.id in pluginSettings,
      usePluginState() {
        useObservable([
          pluginSettings
        ]);
      },
      toggle(start) {
        try {
          start ? enablePlugin(manifest.id, true) : disablePlugin(manifest.id);
        } catch (e) {
          console.error(e);
          showToast("Failed to toggle plugin " + e, findAssetId("Small"));
        }
      },
      resolveSheetComponent() {
        return Promise.resolve().then(() => (init_PluginInfoActionSheet(), PluginInfoActionSheet_exports));
      },
      getPluginSettingsComponent() {
        return getPluginSettingsComponent(manifest.id);
      }
    };
  }
  var init_bunny = __esm({
    "src/core/ui/settings/pages/Plugins/models/bunny.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_settings3();
      init_plugins4();
      init_storage2();
      init_toasts();
      init_assets();
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/VdPluginInfoActionSheet.tsx
  var VdPluginInfoActionSheet_exports = {};
  __export(VdPluginInfoActionSheet_exports, {
    default: () => PluginInfoActionSheet2
  });
  function PluginInfoActionSheet2({ plugin, navigation: navigation2 }) {
    plugin.usePluginState();
    var vdPlugin = VdPluginManager.plugins[plugin.id];
    var SettingsComponent = plugin.getPluginSettingsComponent();
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native24.ScrollView, {
        children: [
          /* @__PURE__ */ jsxs(import_react_native24.View, {
            style: {
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 24
            },
            children: [
              /* @__PURE__ */ jsx(Text, {
                variant: "heading-xl/semibold",
                children: plugin.name
              }),
              /* @__PURE__ */ jsx(import_react_native24.View, {
                style: {
                  marginLeft: "auto"
                },
                children: SettingsComponent && /* @__PURE__ */ jsx(Button, {
                  size: "md",
                  text: "Configure",
                  variant: "secondary",
                  icon: findAssetId("WrenchIcon"),
                  onPress: () => {
                    hideSheet("PluginInfoActionSheet");
                    navigation2.push("BUNNY_CUSTOM_PAGE", {
                      title: plugin.name,
                      render: SettingsComponent
                    });
                  }
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(ActionSheetRow.Group, {
            children: [
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.REFETCH,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  if (vdPlugin.enabled)
                    VdPluginManager.stopPlugin(plugin.id, false);
                  try {
                    yield VdPluginManager.fetchPlugin(plugin.id);
                    showToast(Strings.PLUGIN_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
                  } catch (e) {
                    showToast(Strings.PLUGIN_REFETCH_FAILED, findAssetId("Small"));
                  }
                  if (vdPlugin.enabled)
                    yield VdPluginManager.startPlugin(plugin.id);
                  hideSheet("PluginInfoActionSheet");
                })
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.COPY_URL,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("LinkIcon")
                }),
                onPress: () => {
                  clipboard.setString(plugin.id);
                  showToast.showCopyToClipboard();
                }
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: vdPlugin.update ? Strings.DISABLE_UPDATES : Strings.ENABLE_UPDATES,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("DownloadIcon")
                }),
                onPress: () => {
                  vdPlugin.update = !vdPlugin.update;
                  showToast(formatString("TOASTS_PLUGIN_UPDATE", {
                    update: vdPlugin.update,
                    name: plugin.name
                  }), findAssetId("toast_image_saved"));
                }
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.CLEAR_DATA,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  variant: "danger",
                  source: findAssetId("CopyIcon")
                }),
                variant: "danger",
                onPress: () => showConfirmationAlert({
                  title: Strings.HOLD_UP,
                  content: formatString("ARE_YOU_SURE_TO_CLEAR_DATA", {
                    name: plugin.name
                  }),
                  confirmText: Strings.CLEAR,
                  cancelText: Strings.CANCEL,
                  confirmColor: "red",
                  onConfirm: /* @__PURE__ */ _async_to_generator(function* () {
                    if (vdPlugin.enabled)
                      VdPluginManager.stopPlugin(plugin.id, false);
                    try {
                      yield VdPluginManager.fetchPlugin(plugin.id);
                      showToast(Strings.PLUGIN_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
                    } catch (e) {
                      showToast(Strings.PLUGIN_REFETCH_FAILED, findAssetId("Small"));
                    }
                    var message;
                    try {
                      purgeStorage(plugin.id);
                      message = [
                        "CLEAR_DATA_SUCCESSFUL",
                        "trash"
                      ];
                    } catch (e) {
                      message = [
                        "CLEAR_DATA_FAILED",
                        "Small"
                      ];
                    }
                    showToast(formatString(message[0], {
                      name: plugin.name
                    }), findAssetId(message[1]));
                    if (vdPlugin.enabled)
                      yield VdPluginManager.startPlugin(plugin.id);
                    hideSheet("PluginInfoActionSheet");
                  })
                })
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.DELETE,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  variant: "danger",
                  source: findAssetId("TrashIcon")
                }),
                variant: "danger",
                onPress: () => showConfirmationAlert({
                  title: Strings.HOLD_UP,
                  content: formatString("ARE_YOU_SURE_TO_DELETE_PLUGIN", {
                    name: plugin.name
                  }),
                  confirmText: Strings.DELETE,
                  cancelText: Strings.CANCEL,
                  confirmColor: "red",
                  onConfirm: () => {
                    try {
                      VdPluginManager.removePlugin(plugin.id);
                    } catch (e) {
                      showToast(String(e), findAssetId("Small"));
                    }
                    hideSheet("PluginInfoActionSheet");
                  }
                })
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native24;
  var init_VdPluginInfoActionSheet = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/VdPluginInfoActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_alerts2();
      init_plugins();
      init_storage();
      init_assets();
      init_common();
      init_components();
      init_sheets();
      init_toasts();
      import_react_native24 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/Plugins/models/vendetta.ts
  function unifyVdPlugin(vdPlugin) {
    return {
      id: vdPlugin.id,
      name: vdPlugin.manifest.name,
      description: vdPlugin.manifest.description,
      authors: vdPlugin.manifest.authors,
      icon: vdPlugin.manifest.vendetta?.icon,
      getBadges() {
        return [];
      },
      isEnabled: () => vdPlugin.enabled,
      isInstalled: () => Boolean(vdPlugin && VdPluginManager.plugins[vdPlugin.id]),
      usePluginState() {
        useProxy(VdPluginManager.plugins[vdPlugin.id]);
      },
      toggle(start) {
        start ? VdPluginManager.startPlugin(vdPlugin.id) : VdPluginManager.stopPlugin(vdPlugin.id);
      },
      resolveSheetComponent() {
        return Promise.resolve().then(() => (init_VdPluginInfoActionSheet(), VdPluginInfoActionSheet_exports));
      },
      getPluginSettingsComponent() {
        return VdPluginManager.getSettings(vdPlugin.id);
      }
    };
  }
  var init_vendetta = __esm({
    "src/core/ui/settings/pages/Plugins/models/vendetta.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_plugins();
      init_storage();
    }
  });

  // src/core/ui/settings/pages/Plugins/index.tsx
  var Plugins_exports = {};
  __export(Plugins_exports, {
    default: () => Plugins
  });
  function PluginPage(props) {
    var items = props.useItems();
    return /* @__PURE__ */ jsx(AddonPage, {
      CardComponent: PluginCard,
      title: Strings.PLUGINS,
      searchKeywords: [
        "name",
        "description",
        (p) => p.authors?.map((a) => typeof a === "string" ? a : a.name).join() || ""
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.name.localeCompare(b3.name),
        "Name (Z-A)": (a, b3) => b3.name.localeCompare(a.name)
      },
      safeModeHint: {
        message: Strings.SAFE_MODE_NOTICE_PLUGINS
      },
      items,
      ...props
    });
  }
  function PluginsList() {
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(PluginPage, {
      useItems: () => {
        useProxy(VdPluginManager.plugins);
        useObservable([
          pluginSettings
        ]);
        var vdPlugins = Object.values(VdPluginManager.plugins).map(unifyVdPlugin);
        var bnPlugins = [
          ...registeredPlugins.values()
        ].filter((p) => isPluginInstalled(p.id) && !isCorePlugin(p.id)).map(unifyBunnyPlugin);
        return [
          ...vdPlugins,
          ...bnPlugins
        ];
      },
      ListHeaderComponent: () => {
        var unproxiedPlugins = Object.values(VdPluginManager.plugins).filter((p) => !p.id.startsWith(VD_PROXY_PREFIX) && !p.id.startsWith(BUNNY_PROXY_PREFIX));
        if (!unproxiedPlugins.length)
          return null;
        return /* @__PURE__ */ jsx(import_react_native25.View, {
          style: {
            marginVertical: 12,
            marginHorizontal: 10
          },
          children: /* @__PURE__ */ jsx(Card, {
            border: "strong",
            children: /* @__PURE__ */ jsxs(import_react_native25.View, {
              style: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsxs(import_react_native25.View, {
                  style: {
                    gap: 6,
                    flexShrink: 1
                  },
                  children: [
                    /* @__PURE__ */ jsx(Text, {
                      variant: "heading-md/bold",
                      children: "Unproxied Plugins Found"
                    }),
                    /* @__PURE__ */ jsx(Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: "Plugins installed from unproxied sources may run unverified code in this app without your awareness."
                    })
                  ]
                }),
                /* @__PURE__ */ jsx(import_react_native25.View, {
                  style: {
                    marginLeft: "auto"
                  },
                  children: /* @__PURE__ */ jsx(IconButton, {
                    size: "sm",
                    variant: "secondary",
                    icon: findAssetId("CircleInformationIcon-primary"),
                    style: {
                      marginLeft: 8
                    },
                    onPress: () => {
                      navigation2.push("BUNNY_CUSTOM_PAGE", {
                        title: "Unproxied Plugins",
                        render: () => {
                          return /* @__PURE__ */ jsx(FlashList, {
                            data: unproxiedPlugins,
                            contentContainerStyle: {
                              padding: 8
                            },
                            ItemSeparatorComponent: () => /* @__PURE__ */ jsx(import_react_native25.View, {
                              style: {
                                height: 8
                              }
                            }),
                            renderItem: ({ item: p }) => /* @__PURE__ */ jsx(Card, {
                              children: /* @__PURE__ */ jsx(Text, {
                                variant: "heading-md/semibold",
                                children: p.id
                              })
                            })
                          });
                        }
                      });
                    }
                  })
                })
              ]
            })
          })
        });
      },
      ListFooterComponent: () => false,
      installAction: {
        label: "Install a plugin",
        fetchFn: /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (url2) {
            if (!url2.startsWith(VD_PROXY_PREFIX) && !url2.startsWith(BUNNY_PROXY_PREFIX) && !settings.developerSettings) {
              openAlert2("bunny-plugin-unproxied-confirmation", /* @__PURE__ */ jsx(AlertModal3, {
                title: "Hold On!",
                content: "You're trying to install a plugin from an unproxied external source. This means you're trusting the creator to run their code in this app without your knowledge. Are you sure you want to continue?",
                extraContent: /* @__PURE__ */ jsx(Card, {
                  children: /* @__PURE__ */ jsx(Text, {
                    variant: "text-md/bold",
                    children: url2
                  })
                }),
                actions: /* @__PURE__ */ jsxs(AlertActions2, {
                  children: [
                    /* @__PURE__ */ jsx(AlertActionButton3, {
                      text: "Continue",
                      variant: "primary",
                      onPress: () => {
                        VdPluginManager.installPlugin(url2).then(() => showToast(Strings.TOASTS_INSTALLED_PLUGIN, findAssetId("Check"))).catch((e) => openAlert2("bunny-plugin-install-failed", /* @__PURE__ */ jsx(AlertModal3, {
                          title: "Install Failed",
                          content: `Unable to install plugin from '${url2}':`,
                          extraContent: /* @__PURE__ */ jsx(Card, {
                            children: /* @__PURE__ */ jsx(Text, {
                              variant: "text-md/normal",
                              children: e instanceof Error ? e.message : String(e)
                            })
                          }),
                          actions: /* @__PURE__ */ jsx(AlertActionButton3, {
                            text: "Okay",
                            variant: "primary"
                          })
                        })));
                      }
                    }),
                    /* @__PURE__ */ jsx(AlertActionButton3, {
                      text: "Cancel",
                      variant: "secondary"
                    })
                  ]
                })
              }));
            } else {
              return yield VdPluginManager.installPlugin(url2);
            }
          });
          return function(url2) {
            return _ref.apply(this, arguments);
          };
        }()
      }
    });
  }
  function ThemesList() {
    useProxy(themes);
    return /* @__PURE__ */ jsx(AddonPage, {
      title: Strings.THEMES,
      searchKeywords: [
        "data.name",
        "data.description",
        (p) => p.data.authors?.map((a) => a.name).join(", ") ?? ""
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.data.name.localeCompare(b3.data.name),
        "Name (Z-A)": (a, b3) => b3.data.name.localeCompare(a.data.name)
      },
      installAction: {
        label: "Install a theme",
        fetchFn: installTheme
      },
      items: Object.values(themes),
      safeModeHint: {
        message: formatString("SAFE_MODE_NOTICE_THEMES", {
          enabled: Boolean(settings.safeMode?.currentThemeId)
        }),
        footer: settings.safeMode?.currentThemeId && /* @__PURE__ */ jsx(Button, {
          size: "small",
          text: Strings.DISABLE_THEME,
          onPress: () => delete settings.safeMode?.currentThemeId,
          style: {
            marginTop: 8
          }
        })
      },
      CardComponent: ThemeCard
    });
  }
  function ThemesOptionsSheet() {
    useObservable([
      colorsPref
    ]);
    return /* @__PURE__ */ jsxs(ActionSheet, {
      children: [
        /* @__PURE__ */ jsx(BottomSheetTitleHeader, {
          title: "Options"
        }),
        /* @__PURE__ */ jsxs(import_react_native25.View, {
          style: {
            paddingVertical: 20,
            gap: 12
          },
          children: [
            /* @__PURE__ */ jsxs(TableRadioGroup, {
              title: "Override Theme Type",
              value: colorsPref.type ?? "auto",
              hasIcons: true,
              onChange: (type) => {
                colorsPref.type = type !== "auto" ? type : void 0;
                getCurrentTheme()?.data && updateBunnyColor(getCurrentTheme().data, {
                  update: true
                });
              },
              children: [
                /* @__PURE__ */ jsx(TableRadioRow, {
                  icon: /* @__PURE__ */ jsx(TableRowIcon, {
                    source: findAssetId("RobotIcon")
                  }),
                  label: "Auto",
                  value: "auto"
                }),
                /* @__PURE__ */ jsx(TableRadioRow, {
                  icon: /* @__PURE__ */ jsx(TableRowIcon, {
                    source: findAssetId("ThemeDarkIcon")
                  }),
                  label: "Dark",
                  value: "dark"
                }),
                /* @__PURE__ */ jsx(TableRadioRow, {
                  icon: /* @__PURE__ */ jsx(TableRowIcon, {
                    source: findAssetId("ThemeLightIcon")
                  }),
                  label: "Light",
                  value: "light"
                })
              ]
            }),
            /* @__PURE__ */ jsxs(TableRadioGroup, {
              title: "Chat Background",
              value: colorsPref.customBackground ?? "shown",
              hasIcons: true,
              onChange: (type) => {
                colorsPref.customBackground = type !== "shown" ? type : null;
              },
              children: [
                /* @__PURE__ */ jsx(TableRadioRow, {
                  icon: /* @__PURE__ */ jsx(TableRowIcon, {
                    source: findAssetId("ImageIcon")
                  }),
                  label: "Show",
                  value: "shown"
                }),
                /* @__PURE__ */ jsx(TableRadioRow, {
                  icon: /* @__PURE__ */ jsx(TableRowIcon, {
                    source: findAssetId("DenyIcon")
                  }),
                  label: "Hide",
                  value: "hidden"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Plugins() {
    useProxy(settings);
    var showThemes = isThemeSupported();
    var [selectedTab, setSelectedTab] = (0, import_react6.useState)(0);
    var navigation2 = NavigationNative.useNavigation();
    (0, import_react6.useEffect)(() => {
      navigation2.setOptions({
        title: !showThemes || selectedTab === 0 ? Strings.PLUGINS : Strings.THEMES,
        headerRight: showThemes && selectedTab === 1 ? () => /* @__PURE__ */ jsx(IconButton, {
          size: "sm",
          variant: "secondary",
          icon: findAssetId("MoreHorizontalIcon"),
          onPress: () => showSheet("AddonMoreSheet", ThemesOptionsSheet)
        }) : void 0
      });
    }, [
      selectedTab,
      showThemes,
      navigation2
    ]);
    if (!showThemes) {
      return /* @__PURE__ */ jsx(PluginsList, {});
    }
    return /* @__PURE__ */ jsxs(import_react_native25.View, {
      style: {
        flex: 1
      },
      children: [
        /* @__PURE__ */ jsxs(import_react_native25.View, {
          style: {
            flexDirection: "row",
            gap: 12,
            paddingHorizontal: 12,
            paddingTop: 10,
            paddingBottom: 6
          },
          children: [
            /* @__PURE__ */ jsx(Button, {
              size: "sm",
              variant: selectedTab === 0 ? "primary" : "secondary",
              text: Strings.PLUGINS,
              onPress: () => setSelectedTab(0),
              style: {
                flex: 1
              }
            }),
            /* @__PURE__ */ jsx(Button, {
              size: "sm",
              variant: selectedTab === 1 ? "primary" : "secondary",
              text: Strings.THEMES,
              onPress: () => setSelectedTab(1),
              style: {
                flex: 1
              }
            })
          ]
        }),
        selectedTab === 0 ? /* @__PURE__ */ jsx(PluginsList, {}) : /* @__PURE__ */ jsx(ThemesList, {})
      ]
    });
  }
  var import_react6, import_react_native25, openAlert2, AlertModal3, AlertActions2, AlertActionButton3;
  var init_Plugins = __esm({
    "src/core/ui/settings/pages/Plugins/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_PluginCard();
      init_ThemeCard();
      init_plugins();
      init_storage();
      init_plugins4();
      init_themes();
      init_preferences();
      init_updater();
      init_assets();
      init_loader();
      init_settings();
      init_storage2();
      init_sheets();
      init_toasts();
      init_constants();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      import_react6 = __toESM(require_react());
      import_react_native25 = __toESM(require_react_native());
      init_bunny();
      init_vendetta();
      ({ openAlert: openAlert2 } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
      ({ AlertModal: AlertModal3, AlertActions: AlertActions2, AlertActionButton: AlertActionButton3 } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
    }
  });

  // src/lib/addons/fonts/index.ts
  var fonts_exports = {};
  __export(fonts_exports, {
    fonts: () => fonts,
    installFont: () => installFont,
    removeFont: () => removeFont,
    saveFont: () => saveFont,
    selectFont: () => selectFont,
    updateFonts: () => updateFonts,
    validateFont: () => validateFont
  });
  function writeFont(font) {
    return _writeFont.apply(this, arguments);
  }
  function _writeFont() {
    _writeFont = _async_to_generator(function* (font) {
      if (!font && font !== null)
        throw new Error("Arg font must be a valid object or null");
      if (font) {
        yield writeFile("fonts.json", JSON.stringify(font));
      } else {
        yield removeFile("fonts.json");
      }
    });
    return _writeFont.apply(this, arguments);
  }
  function validateFont(font) {
    if (!font || typeof font !== "object")
      throw new Error("URL returned a null/non-object JSON");
    if (typeof font.spec !== "number")
      throw new Error("Invalid font 'spec' number");
    if (font.spec !== 1)
      throw new Error("Only fonts which follows spec:1 are supported");
    var requiredFields = [
      "name",
      "main"
    ];
    if (requiredFields.some((f) => !font[f]))
      throw new Error(`Font is missing one of the fields: ${requiredFields}`);
    if (font.name.startsWith("__"))
      throw new Error("Font names cannot start with __");
    if (font.name in fonts)
      throw new Error(`There is already a font named '${font.name}' installed`);
  }
  function saveFont(data) {
    return _saveFont.apply(this, arguments);
  }
  function _saveFont() {
    _saveFont = _async_to_generator(function* (data, selected = false) {
      var fontDefJson;
      if (typeof data === "object" && data.__source)
        data = data.__source;
      if (typeof data === "string") {
        try {
          fontDefJson = yield (yield safeFetch(data)).json();
          fontDefJson.__source = data;
        } catch (e) {
          throw new Error(`Failed to fetch fonts at ${data}`, {
            cause: e
          });
        }
      } else {
        fontDefJson = data;
      }
      validateFont(fontDefJson);
      try {
        yield Promise.all(Object.entries(fontDefJson.main).map(/* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* ([font, url2]) {
            var ext = url2.split(".").pop();
            if (ext !== "ttf" && ext !== "otf")
              ext = "ttf";
            var path = `downloads/fonts/${fontDefJson.name}/${font}.${ext}`;
            if (!(yield fileExists(path)))
              yield downloadFile(url2, path);
          });
          return function(_2) {
            return _ref.apply(this, arguments);
          };
        }()));
      } catch (e) {
        throw new Error("Failed to download font assets", {
          cause: e
        });
      }
      fonts[fontDefJson.name] = fontDefJson;
      if (selected)
        writeFont(fonts[fontDefJson.name]);
      return fontDefJson;
    });
    return _saveFont.apply(this, arguments);
  }
  function installFont(url2) {
    return _installFont.apply(this, arguments);
  }
  function _installFont() {
    _installFont = _async_to_generator(function* (url2, selected = false) {
      if (typeof url2 !== "string" || Object.values(fonts).some((f) => typeof f === "object" && f.__source === url2)) {
        throw new Error("Invalid source or font was already installed");
      }
      var font = yield saveFont(url2);
      if (selected)
        yield selectFont(font.name);
    });
    return _installFont.apply(this, arguments);
  }
  function selectFont(name) {
    return _selectFont.apply(this, arguments);
  }
  function _selectFont() {
    _selectFont = _async_to_generator(function* (name) {
      if (name && !(name in fonts))
        throw new Error("Selected font does not exist!");
      if (name) {
        fonts.__selected = name;
      } else {
        delete fonts.__selected;
      }
      yield writeFont(name == null ? null : fonts[name]);
    });
    return _selectFont.apply(this, arguments);
  }
  function removeFont(name) {
    return _removeFont.apply(this, arguments);
  }
  function _removeFont() {
    _removeFont = _async_to_generator(function* (name) {
      var selected = fonts.__selected === name;
      if (selected)
        yield selectFont(null);
      delete fonts[name];
      try {
        yield clearFolder(`downloads/fonts/${name}`);
      } catch (e) {
      }
    });
    return _removeFont.apply(this, arguments);
  }
  function updateFonts() {
    return _updateFonts.apply(this, arguments);
  }
  function _updateFonts() {
    _updateFonts = _async_to_generator(function* () {
      yield awaitStorage(fonts);
      yield allSettled(Object.keys(fonts).map((name) => saveFont(fonts[name], fonts.__selected === name)));
    });
    return _updateFonts.apply(this, arguments);
  }
  var fonts;
  var init_fonts = __esm({
    "src/lib/addons/fonts/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_fs();
      init_utils();
      fonts = wrapSync(createStorage(createMMKVBackend("BUNNY_FONTS")));
    }
  });

  // src/core/ui/settings/pages/Fonts/FontEditor.tsx
  function guessFontName(urls) {
    var fileNames = urls.map((url2) => {
      var { pathname } = new URL(url2);
      var fileName = pathname.replace(/\.[^/.]+$/, "");
      return fileName.split("/").pop();
    }).filter(Boolean);
    var shortest = fileNames.reduce((shortest2, name) => {
      return name.length < shortest2.length ? name : shortest2;
    }, fileNames[0] || "");
    return shortest?.replace(/-[A-Za-z]*$/, "") || null;
  }
  function RevengeFontsExtractor({ fonts: fonts2, setName }) {
    var currentTheme = getCurrentTheme().data;
    var themeFonts = currentTheme.fonts;
    var [fontName, setFontName] = (0, import_react7.useState)(guessFontName(Object.values(themeFonts)));
    var [error, setError] = (0, import_react7.useState)(void 0);
    return /* @__PURE__ */ jsxs(import_react_native26.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: Strings.FONT_NAME,
          value: fontName,
          placeholder: fontName || "Whitney",
          onChange: setFontName,
          errorMessage: error,
          state: error ? "error" : void 0
        }),
        /* @__PURE__ */ jsx(Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: formatString("THEME_EXTRACTOR_DESC", {
            fonts: Object.keys(themeFonts).join(Strings.SEPARATOR)
          })
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: Strings.EXTRACT,
          disabled: !fontName,
          onPress: () => {
            if (!fontName)
              return;
            try {
              validateFont({
                spec: 1,
                name: fontName,
                main: themeFonts
              });
              setName(fontName);
              Object.assign(fonts2, themeFonts);
              actionSheet2.hideActionSheet();
            } catch (e) {
              setError(String(e));
            }
          }
        })
      ]
    });
  }
  function JsonFontImporter({ fonts: fonts2, setName, setSource }) {
    var [fontLink, setFontLink] = (0, import_react7.useState)("");
    var [saving, setSaving] = (0, import_react7.useState)(false);
    var [error, setError] = (0, import_react7.useState)(void 0);
    return /* @__PURE__ */ jsxs(import_react_native26.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: "Font Link",
          value: fontLink,
          placeholder: "https://link.to/font/pack.json",
          onChange: setFontLink,
          errorMessage: error,
          state: error ? "error" : void 0
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: "Import",
          disabled: !fontLink || saving,
          loading: saving,
          onPress: () => {
            setSaving(true);
            _async_to_generator(function* () {
              var res = yield safeFetch(fontLink, {
                cache: "no-store"
              });
              var json = yield res.json();
              validateFont(json);
              setName(json.name);
              setSource(fontLink);
              Object.assign(fonts2, json.main);
            })().then(() => actionSheet2.hideActionSheet()).catch((e) => setError(String(e))).finally(() => setSaving(false));
          }
        })
      ]
    });
  }
  function EntryEditorActionSheet(props) {
    var [familyName, setFamilyName] = (0, import_react7.useState)(props.name);
    var [fontUrl, setFontUrl] = (0, import_react7.useState)(props.fontEntries[props.name]);
    return /* @__PURE__ */ jsxs(import_react_native26.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: "Family Name (to override)",
          value: familyName,
          placeholder: "ggsans-Bold",
          onChange: setFamilyName
        }),
        /* @__PURE__ */ jsx(TextInput, {
          size: "md",
          label: "Font URL",
          value: fontUrl,
          placeholder: "https://link.to/the/font.ttf",
          onChange: setFontUrl
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: "Apply",
          onPress: () => {
            delete props.fontEntries[props.name];
            props.fontEntries[familyName] = fontUrl;
          }
        })
      ]
    });
  }
  function promptActionSheet(Component, fontEntries, props) {
    actionSheet2.openLazy(Promise.resolve({
      default: () => /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsxs(ActionSheet, {
          children: [
            /* @__PURE__ */ jsx(BottomSheetTitleHeader, {
              title: "Import Font"
            }),
            /* @__PURE__ */ jsx(Component, {
              fonts: fontEntries,
              ...props
            })
          ]
        })
      })
    }), "FontEditorActionSheet");
  }
  function NewEntryRow({ fontEntry }) {
    var nameRef = (0, import_react7.useRef)();
    var urlRef = (0, import_react7.useRef)();
    var [nameSet, setNameSet] = (0, import_react7.useState)(false);
    var [error, setError] = (0, import_react7.useState)();
    return /* @__PURE__ */ jsxs(import_react_native26.View, {
      style: {
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-start"
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native26.View, {
          style: {
            flex: 1
          },
          children: /* @__PURE__ */ jsx(TextInput, {
            isRound: true,
            size: "md",
            label: nameSet ? nameRef.current : void 0,
            placeholder: nameSet ? "https://path.to/the/file.ttf" : "PostScript name (e.g. ggsans-Bold)",
            leadingIcon: () => nameSet ? null : /* @__PURE__ */ jsx(TableRow.Icon, {
              source: findAssetId("PlusSmallIcon")
            }),
            leadingText: nameSet ? nameRef.current : "",
            onChange: (text) => (nameSet ? urlRef : nameRef).current = text,
            errorMessage: error,
            state: error ? "error" : void 0
          })
        }),
        nameSet && /* @__PURE__ */ jsx(IconButton, {
          size: "md",
          variant: "secondary",
          onPress: () => {
            nameRef.current = "";
            setNameSet(false);
          },
          icon: findAssetId("TrashIcon")
        }),
        /* @__PURE__ */ jsx(IconButton, {
          size: "md",
          variant: "primary",
          onPress: () => {
            if (!nameSet && nameRef.current) {
              setNameSet(true);
            } else if (nameSet && nameRef.current && urlRef.current) {
              try {
                var parsedUrl = new URL(urlRef.current);
                if (!parsedUrl.protocol || !parsedUrl.host) {
                  throw "Invalid URL";
                }
                fontEntry[nameRef.current] = urlRef.current;
                nameRef.current = void 0;
                urlRef.current = void 0;
                setNameSet(false);
              } catch (e) {
                setError(String(e));
              }
            }
          },
          icon: findAssetId(nameSet ? "PlusSmallIcon" : "ArrowLargeRightIcon")
        })
      ]
    });
  }
  function FontEditor(props) {
    var [name, setName] = (0, import_react7.useState)(props.name);
    var [source, setSource] = (0, import_react7.useState)();
    var [importing, setIsImporting] = (0, import_react7.useState)(false);
    var memoEntry = (0, import_react7.useMemo)(() => {
      return createProxy(props.name ? {
        ...fonts[props.name].main
      } : {}).proxy;
    }, [
      props.name
    ]);
    var fontEntries = useProxy(memoEntry);
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(import_react_native26.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 12,
        children: [
          !props.name ? /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Import",
            children: [
              getCurrentTheme()?.data?.fonts && /* @__PURE__ */ jsx(TableRow, {
                label: Strings.LABEL_EXTRACT_FONTS_FROM_THEME,
                subLabel: Strings.DESC_EXTRACT_FONTS_FROM_THEME,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("HammerIcon")
                }),
                onPress: () => promptActionSheet(RevengeFontsExtractor, fontEntries, {
                  setName
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Import font entries from a link",
                subLabel: "Directly import from a link with a pre-configured JSON file",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("LinkIcon")
                }),
                onPress: () => promptActionSheet(JsonFontImporter, fontEntries, {
                  setName,
                  setSource
                })
              })
            ]
          }) : /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Actions",
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: "Refetch fonts from source",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  var ftCopy = {
                    ...fonts[props.name]
                  };
                  yield removeFont(props.name);
                  yield saveFont(ftCopy);
                  navigation2.goBack();
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Delete font pack",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("TrashIcon")
                }),
                onPress: () => removeFont(props.name).then(() => navigation2.goBack())
              })
            ]
          }),
          /* @__PURE__ */ jsx(TextInput, {
            size: "lg",
            value: name,
            label: Strings.FONT_NAME,
            placeholder: "Whitney",
            onChange: setName
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Font Entries",
            children: [
              Object.entries(fontEntries).map(([name2, url2]) => {
                return /* @__PURE__ */ jsx(TableRow, {
                  label: name2,
                  subLabel: url2,
                  trailing: /* @__PURE__ */ jsxs(Stack, {
                    spacing: 2,
                    direction: "horizontal",
                    children: [
                      /* @__PURE__ */ jsx(IconButton, {
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("PencilIcon"),
                        onPress: () => promptActionSheet(EntryEditorActionSheet, fontEntries, {
                          name: name2,
                          fontEntries
                        })
                      }),
                      /* @__PURE__ */ jsx(IconButton, {
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("TrashIcon"),
                        onPress: () => delete fontEntries[name2]
                      })
                    ]
                  })
                });
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: /* @__PURE__ */ jsx(NewEntryRow, {
                  fontEntry: fontEntries
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(import_react_native26.View, {
            style: {
              flexDirection: "row",
              justifyContent: "flex-end",
              bottom: 0,
              left: 0
            },
            children: /* @__PURE__ */ jsx(Button, {
              size: "lg",
              loading: importing,
              disabled: importing || !name || Object.keys(fontEntries).length === 0,
              variant: "primary",
              text: props.name ? "Save" : "Import",
              onPress: /* @__PURE__ */ _async_to_generator(function* () {
                if (!name)
                  return;
                setIsImporting(true);
                if (!props.name) {
                  saveFont({
                    spec: 1,
                    name,
                    main: fontEntries,
                    __source: source
                  }).then(() => navigation2.goBack()).finally(() => setIsImporting(false));
                } else {
                  Object.assign(fonts[props.name], {
                    name,
                    main: fontEntries,
                    __edited: true
                  });
                  setIsImporting(false);
                  navigation2.goBack();
                }
              }),
              icon: findAssetId(props.name ? "toast_image_saved" : "DownloadIcon"),
              style: {
                marginLeft: 8
              }
            })
          })
        ]
      })
    });
  }
  var import_react7, import_react_native26, actionSheet2;
  var init_FontEditor = __esm({
    "src/core/ui/settings/pages/Fonts/FontEditor.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_storage();
      init_fonts();
      init_themes();
      init_assets();
      init_utils();
      init_common();
      init_components();
      init_wrappers();
      init_components2();
      import_react7 = __toESM(require_react());
      import_react_native26 = __toESM(require_react_native());
      actionSheet2 = findByPropsLazy("hideActionSheet");
    }
  });

  // globals:@shopify/react-native-skia
  var require_react_native_skia = __commonJS({
    "globals:@shopify/react-native-skia"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["@shopify/react-native-skia"];
    }
  });

  // src/core/ui/settings/pages/Fonts/FontCard.tsx
  function FontPreview({ font }) {
    var TEXT_NORMAL = useToken2(tokens.colors.TEXT_NORMAL);
    var { fontFamily: fontFamilyList, fontSize } = TextStyleSheet["text-md/medium"];
    var fontFamily = fontFamilyList.split(/,/g)[0];
    var typeface = Skia.useFont(font.main[fontFamily])?.getTypeface();
    var paragraph = (0, import_react8.useMemo)(() => {
      if (!typeface)
        return null;
      var fMgr = SkiaApi.TypefaceFontProvider.Make();
      fMgr.registerFont(typeface, fontFamily);
      return SkiaApi.ParagraphBuilder.Make({}, fMgr).pushStyle({
        color: SkiaApi.Color(TEXT_NORMAL),
        fontFamilies: [
          fontFamily
        ],
        fontSize
      }).addText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.").pop().build();
    }, [
      typeface
    ]);
    return (
      // This does not work, actually :woeis:
      /* @__PURE__ */ jsx(import_react_native27.View, {
        style: {
          height: 64
        },
        children: typeface ? /* @__PURE__ */ jsx(Skia.Canvas, {
          style: {
            height: 64
          },
          children: /* @__PURE__ */ jsx(Skia.Paragraph, {
            paragraph,
            x: 0,
            y: 0,
            width: 300
          })
        }) : /* @__PURE__ */ jsx(import_react_native27.View, {
          style: {
            justifyContent: "center",
            alignItems: "center"
          },
          children: /* @__PURE__ */ jsx(Text, {
            color: "text-muted",
            variant: "heading-lg/semibold",
            children: "Loading..."
          })
        })
      })
    );
  }
  function FontCard({ item: font }) {
    useProxy(fonts);
    var navigation2 = NavigationNative.useNavigation();
    var selected = fonts.__selected === font.name;
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native27.View, {
            style: {
              flexDirection: "row",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native27.View, {
                children: /* @__PURE__ */ jsx(Text, {
                  variant: "heading-lg/semibold",
                  children: font.name
                })
              }),
              /* @__PURE__ */ jsx(import_react_native27.View, {
                style: {
                  marginLeft: "auto"
                },
                children: /* @__PURE__ */ jsxs(Stack, {
                  spacing: 12,
                  direction: "horizontal",
                  children: [
                    /* @__PURE__ */ jsx(IconButton, {
                      onPress: () => {
                        navigation2.push("BUNNY_CUSTOM_PAGE", {
                          title: "Edit Font",
                          render: () => /* @__PURE__ */ jsx(FontEditor, {
                            name: font.name
                          })
                        });
                      },
                      size: "sm",
                      variant: "secondary",
                      disabled: selected,
                      icon: findAssetId("PencilIcon")
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      size: "sm",
                      variant: selected ? "secondary" : "primary",
                      text: selected ? "Unapply" : "Apply",
                      onPress: /* @__PURE__ */ _async_to_generator(function* () {
                        yield selectFont(selected ? null : font.name);
                        showConfirmationAlert({
                          title: Strings.HOLD_UP,
                          content: "Reload Discord to apply changes?",
                          confirmText: Strings.RELOAD,
                          cancelText: Strings.CANCEL,
                          confirmColor: "red",
                          onConfirm: BundleUpdaterManager.reload
                        });
                      })
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(FontPreview, {
            font
          })
        ]
      })
    });
  }
  var Skia, import_react8, import_react_native27, useToken2;
  var init_FontCard = __esm({
    "src/core/ui/settings/pages/Fonts/FontCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_alerts2();
      init_storage();
      init_fonts();
      init_assets();
      init_modules();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      Skia = __toESM(require_react_native_skia());
      init_styles();
      import_react8 = __toESM(require_react());
      import_react_native27 = __toESM(require_react_native());
      init_FontEditor();
      ({ useToken: useToken2 } = lazyDestructure(() => findByProps("useToken")));
    }
  });

  // src/core/ui/settings/pages/Fonts/index.tsx
  var Fonts_exports = {};
  __export(Fonts_exports, {
    default: () => Fonts
  });
  function Fonts() {
    useProxy(settings);
    useProxy(fonts);
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(AddonPage, {
      title: Strings.FONTS,
      searchKeywords: [
        "name",
        "description"
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.name.localeCompare(b3.name),
        "Name (Z-A)": (a, b3) => b3.name.localeCompare(a.name)
      },
      items: Object.values(fonts),
      safeModeHint: {
        message: Strings.SAFE_MODE_NOTICE_FONTS
      },
      CardComponent: FontCard,
      installAction: {
        label: "Install a font",
        onPress: () => {
          navigation2.push("BUNNY_CUSTOM_PAGE", {
            title: "Import Font",
            render: () => /* @__PURE__ */ jsx(FontEditor, {})
          });
        }
      }
    });
  }
  var init_Fonts = __esm({
    "src/core/ui/settings/pages/Fonts/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_FontEditor();
      init_storage();
      init_fonts();
      init_settings();
      init_common();
      init_FontCard();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/subscribable.js
  var Subscribable;
  var init_subscribable = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/subscribable.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_call_check();
      init_create_class();
      Subscribable = /* @__PURE__ */ function() {
        "use strict";
        function Subscribable2() {
          _class_call_check(this, Subscribable2);
          this.listeners = /* @__PURE__ */ new Set();
          this.subscribe = this.subscribe.bind(this);
        }
        _create_class(Subscribable2, [
          {
            key: "subscribe",
            value: function subscribe(listener) {
              this.listeners.add(listener);
              this.onSubscribe();
              return () => {
                this.listeners.delete(listener);
                this.onUnsubscribe();
              };
            }
          },
          {
            key: "hasListeners",
            value: function hasListeners() {
              return this.listeners.size > 0;
            }
          },
          {
            key: "onSubscribe",
            value: function onSubscribe() {
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
            }
          }
        ]);
        return Subscribable2;
      }();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/utils.js
  function noop() {
    return void 0;
  }
  function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
  }
  function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
  }
  function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
  }
  function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
  }
  function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
  }
  function matchQuery(filters, query) {
    var { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
      if (exact) {
        if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
          return false;
        }
      } else if (!partialMatchKey(query.queryKey, queryKey)) {
        return false;
      }
    }
    if (type !== "all") {
      var isActive = query.isActive();
      if (type === "active" && !isActive) {
        return false;
      }
      if (type === "inactive" && isActive) {
        return false;
      }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
      return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
      return false;
    }
    if (predicate && !predicate(query)) {
      return false;
    }
    return true;
  }
  function matchMutation(filters, mutation) {
    var { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
      if (!mutation.options.mutationKey) {
        return false;
      }
      if (exact) {
        if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
          return false;
        }
      } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
        return false;
      }
    }
    if (status && mutation.state.status !== status) {
      return false;
    }
    if (predicate && !predicate(mutation)) {
      return false;
    }
    return true;
  }
  function hashQueryKeyByOptions(queryKey, options) {
    var hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
  }
  function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_2, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val);
  }
  function partialMatchKey(a, b3) {
    if (a === b3) {
      return true;
    }
    if (typeof a !== typeof b3) {
      return false;
    }
    if (a && b3 && typeof a === "object" && typeof b3 === "object") {
      return !Object.keys(b3).some((key) => !partialMatchKey(a[key], b3[key]));
    }
    return false;
  }
  function replaceEqualDeep(a, b3) {
    if (a === b3) {
      return a;
    }
    var array = isPlainArray(a) && isPlainArray(b3);
    if (array || isPlainObject(a) && isPlainObject(b3)) {
      var aItems = array ? a : Object.keys(a);
      var aSize = aItems.length;
      var bItems = array ? b3 : Object.keys(b3);
      var bSize = bItems.length;
      var copy = array ? [] : {};
      var equalItems = 0;
      for (var i = 0; i < bSize; i++) {
        var key = array ? i : bItems[i];
        if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b3[key] === void 0) {
          copy[key] = void 0;
          equalItems++;
        } else {
          copy[key] = replaceEqualDeep(a[key], b3[key]);
          if (copy[key] === a[key] && a[key] !== void 0) {
            equalItems++;
          }
        }
      }
      return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b3;
  }
  function shallowEqualObjects(a, b3) {
    if (!b3 || Object.keys(a).length !== Object.keys(b3).length) {
      return false;
    }
    for (var key in a) {
      if (a[key] !== b3[key]) {
        return false;
      }
    }
    return true;
  }
  function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
  }
  function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
      return false;
    }
    var ctor = o.constructor;
    if (ctor === void 0) {
      return true;
    }
    var prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
      return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
      return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
      return false;
    }
    return true;
  }
  function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  }
  function sleep(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
      return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
      if (true) {
        try {
          return replaceEqualDeep(prevData, data);
        } catch (error) {
          console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
        }
      }
      return replaceEqualDeep(prevData, data);
    }
    return data;
  }
  function addToEnd(items, item, max = 0) {
    var newItems = [
      ...items,
      item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
  }
  function addToStart(items, item, max = 0) {
    var newItems = [
      item,
      ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
  }
  function ensureQueryFn(options, fetchOptions) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
      }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
      return () => fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
      return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
  }
  var isServer, skipToken;
  var init_utils2 = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/utils.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      isServer = typeof window === "undefined" || "Deno" in globalThis;
      skipToken = Symbol();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/focusManager.js
  var _focused, _cleanup, _setup, FocusManager, focusManager;
  var init_focusManager = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/focusManager.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_inherits();
      init_subscribable();
      init_utils2();
      FocusManager = (_focused = /* @__PURE__ */ new WeakMap(), _cleanup = /* @__PURE__ */ new WeakMap(), _setup = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5() {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _focused, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _cleanup, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _setup, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _setup, (onFocus) => {
            if (!isServer && window.addEventListener) {
              var listener = () => onFocus();
              window.addEventListener("visibilitychange", listener, false);
              return () => {
                window.removeEventListener("visibilitychange", listener);
              };
            }
            return;
          });
          return _this;
        }
        _create_class(_class5, [
          {
            key: "onSubscribe",
            value: function onSubscribe() {
              if (!_class_private_field_get(this, _cleanup)) {
                this.setEventListener(_class_private_field_get(this, _setup));
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              var _this, _this1, _ref;
              if (!this.hasListeners()) {
                (_this = _class_private_field_get(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                _class_private_field_set(this, _cleanup, void 0);
              }
            }
          },
          {
            key: "setEventListener",
            value: function setEventListener(setup) {
              var _this, _this1, _ref;
              _class_private_field_set(this, _setup, setup);
              (_this = _class_private_field_get(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
              _class_private_field_set(this, _cleanup, setup((focused) => {
                if (typeof focused === "boolean") {
                  this.setFocused(focused);
                } else {
                  this.onFocus();
                }
              }));
            }
          },
          {
            key: "setFocused",
            value: function setFocused(focused) {
              var changed = _class_private_field_get(this, _focused) !== focused;
              if (changed) {
                _class_private_field_set(this, _focused, focused);
                this.onFocus();
              }
            }
          },
          {
            key: "onFocus",
            value: function onFocus() {
              var isFocused = this.isFocused();
              this.listeners.forEach((listener) => {
                listener(isFocused);
              });
            }
          },
          {
            key: "isFocused",
            value: function isFocused() {
              if (typeof _class_private_field_get(this, _focused) === "boolean") {
                return _class_private_field_get(this, _focused);
              }
              return globalThis.document?.visibilityState !== "hidden";
            }
          }
        ]);
        return _class5;
      }(Subscribable));
      focusManager = new FocusManager();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/onlineManager.js
  var _online, _cleanup2, _setup2, OnlineManager, onlineManager;
  var init_onlineManager = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/onlineManager.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_inherits();
      init_subscribable();
      init_utils2();
      OnlineManager = (_online = /* @__PURE__ */ new WeakMap(), _cleanup2 = /* @__PURE__ */ new WeakMap(), _setup2 = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5() {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _online, {
            writable: true,
            value: true
          }), _class_private_field_init(_this, _cleanup2, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _setup2, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _setup2, (onOnline) => {
            if (!isServer && window.addEventListener) {
              var onlineListener = () => onOnline(true);
              var offlineListener = () => onOnline(false);
              window.addEventListener("online", onlineListener, false);
              window.addEventListener("offline", offlineListener, false);
              return () => {
                window.removeEventListener("online", onlineListener);
                window.removeEventListener("offline", offlineListener);
              };
            }
            return;
          });
          return _this;
        }
        _create_class(_class5, [
          {
            key: "onSubscribe",
            value: function onSubscribe() {
              if (!_class_private_field_get(this, _cleanup2)) {
                this.setEventListener(_class_private_field_get(this, _setup2));
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              var _this, _this1, _ref;
              if (!this.hasListeners()) {
                (_this = _class_private_field_get(_ref = _this1 = this, _cleanup2)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                _class_private_field_set(this, _cleanup2, void 0);
              }
            }
          },
          {
            key: "setEventListener",
            value: function setEventListener(setup) {
              var _this, _this1, _ref;
              _class_private_field_set(this, _setup2, setup);
              (_this = _class_private_field_get(_ref = _this1 = this, _cleanup2)) === null || _this === void 0 ? void 0 : _this.call(_this1);
              _class_private_field_set(this, _cleanup2, setup(this.setOnline.bind(this)));
            }
          },
          {
            key: "setOnline",
            value: function setOnline(online) {
              var changed = _class_private_field_get(this, _online) !== online;
              if (changed) {
                _class_private_field_set(this, _online, online);
                this.listeners.forEach((listener) => {
                  listener(online);
                });
              }
            }
          },
          {
            key: "isOnline",
            value: function isOnline() {
              return _class_private_field_get(this, _online);
            }
          }
        ]);
        return _class5;
      }(Subscribable));
      onlineManager = new OnlineManager();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/retryer.js
  function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
  }
  function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
  }
  function isCancelledError(value) {
    return value instanceof CancelledError;
  }
  function createRetryer(config) {
    var isRetryCancelled = false;
    var failureCount = 0;
    var isResolved = false;
    var continueFn;
    var promiseResolve;
    var promiseReject;
    var promise = new Promise((outerResolve, outerReject) => {
      promiseResolve = outerResolve;
      promiseReject = outerReject;
    });
    var cancel = (cancelOptions) => {
      if (!isResolved) {
        reject(new CancelledError(cancelOptions));
        config.abort?.();
      }
    };
    var cancelRetry = () => {
      isRetryCancelled = true;
    };
    var continueRetry = () => {
      isRetryCancelled = false;
    };
    var canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
    var canStart = () => canFetch(config.networkMode) && config.canRun();
    var resolve = (value) => {
      if (!isResolved) {
        isResolved = true;
        config.onSuccess?.(value);
        continueFn?.();
        promiseResolve(value);
      }
    };
    var reject = (value) => {
      if (!isResolved) {
        isResolved = true;
        config.onError?.(value);
        continueFn?.();
        promiseReject(value);
      }
    };
    var pause = () => {
      return new Promise((continueResolve) => {
        continueFn = (value) => {
          if (isResolved || canContinue()) {
            continueResolve(value);
          }
        };
        config.onPause?.();
      }).then(() => {
        continueFn = void 0;
        if (!isResolved) {
          config.onContinue?.();
        }
      });
    };
    var run = () => {
      if (isResolved) {
        return;
      }
      var promiseOrValue;
      var initialPromise = failureCount === 0 ? config.initialPromise : void 0;
      try {
        promiseOrValue = initialPromise ?? config.fn();
      } catch (error) {
        promiseOrValue = Promise.reject(error);
      }
      Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
        if (isResolved) {
          return;
        }
        var retry = config.retry ?? (isServer ? 0 : 3);
        var retryDelay = config.retryDelay ?? defaultRetryDelay;
        var delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
        var shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
        if (isRetryCancelled || !shouldRetry) {
          reject(error);
          return;
        }
        failureCount++;
        config.onFail?.(failureCount, error);
        sleep(delay).then(() => {
          return canContinue() ? void 0 : pause();
        }).then(() => {
          if (isRetryCancelled) {
            reject(error);
          } else {
            run();
          }
        });
      });
    };
    return {
      promise,
      cancel,
      continue: () => {
        continueFn?.();
        return promise;
      },
      cancelRetry,
      continueRetry,
      canStart,
      start: () => {
        if (canStart()) {
          run();
        } else {
          pause().then(run);
        }
        return promise;
      }
    };
  }
  var CancelledError;
  var init_retryer = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/retryer.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_inherits();
      init_wrap_native_super();
      init_focusManager();
      init_onlineManager();
      init_utils2();
      CancelledError = /* @__PURE__ */ function(Error1) {
        "use strict";
        _inherits(CancelledError2, Error1);
        function CancelledError2(options) {
          _class_call_check(this, CancelledError2);
          var _this;
          _this = _call_super(this, CancelledError2, [
            "CancelledError"
          ]);
          _this.revert = options?.revert;
          _this.silent = options?.silent;
          return _this;
        }
        return CancelledError2;
      }(_wrap_native_super(Error));
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_get.js
  function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver))
      throw new TypeError("attempted to get private field on non-instance");
    return fn;
  }
  var init_class_private_method_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_init.js
  function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
  }
  var init_class_private_method_init = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_init.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_check_private_redeclaration();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_super_prop_base.js
  function _super_prop_base(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _get_prototype_of(object);
      if (object === null)
        break;
    }
    return object;
  }
  var init_super_prop_base = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_super_prop_base.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_get_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get.js
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get)
      _get = Reflect.get;
    else {
      _get = function get(target2, property2, receiver2) {
        var base = _super_prop_base(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get)
          return desc.get.call(receiver2 || target2);
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  var init_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_super_prop_base();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/notifyManager.js
  function createNotifyManager() {
    var queue = [];
    var transactions = 0;
    var notifyFn = (callback) => {
      callback();
    };
    var batchNotifyFn = (callback) => {
      callback();
    };
    var scheduleFn = (cb) => setTimeout(cb, 0);
    var schedule = (callback) => {
      if (transactions) {
        queue.push(callback);
      } else {
        scheduleFn(() => {
          notifyFn(callback);
        });
      }
    };
    var flush = () => {
      var originalQueue = queue;
      queue = [];
      if (originalQueue.length) {
        scheduleFn(() => {
          batchNotifyFn(() => {
            originalQueue.forEach((callback) => {
              notifyFn(callback);
            });
          });
        });
      }
    };
    return {
      batch: (callback) => {
        var result;
        transactions++;
        try {
          result = callback();
        } finally {
          transactions--;
          if (!transactions) {
            flush();
          }
        }
        return result;
      },
      /**
      * All calls to the wrapped function will be batched.
      */
      batchCalls: (callback) => {
        return (...args) => {
          schedule(() => {
            callback(...args);
          });
        };
      },
      schedule,
      /**
      * Use this method to set a custom notify function.
      * This can be used to for example wrap notifications with `React.act` while running tests.
      */
      setNotifyFunction: (fn) => {
        notifyFn = fn;
      },
      /**
      * Use this method to set a custom function to batch notifications together into a single tick.
      * By default React Query will use the batch function provided by ReactDOM or React Native.
      */
      setBatchNotifyFunction: (fn) => {
        batchNotifyFn = fn;
      },
      setScheduler: (fn) => {
        scheduleFn = fn;
      }
    };
  }
  var notifyManager;
  var init_notifyManager = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/notifyManager.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      notifyManager = createNotifyManager();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/removable.js
  var _gcTimeout, Removable;
  var init_removable = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/removable.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_utils2();
      Removable = (_gcTimeout = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function() {
        "use strict";
        function _class5() {
          _class_call_check(this, _class5);
          _class_private_field_init(this, _gcTimeout, {
            writable: true,
            value: void 0
          });
        }
        _create_class(_class5, [
          {
            key: "destroy",
            value: function destroy() {
              this.clearGcTimeout();
            }
          },
          {
            key: "scheduleGc",
            value: function scheduleGc() {
              this.clearGcTimeout();
              if (isValidTimeout(this.gcTime)) {
                _class_private_field_set(this, _gcTimeout, setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
              }
            }
          },
          {
            key: "updateGcTime",
            value: function updateGcTime(newGcTime) {
              this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (isServer ? Infinity : 5 * 60 * 1e3));
            }
          },
          {
            key: "clearGcTimeout",
            value: function clearGcTimeout() {
              if (_class_private_field_get(this, _gcTimeout)) {
                clearTimeout(_class_private_field_get(this, _gcTimeout));
                _class_private_field_set(this, _gcTimeout, void 0);
              }
            }
          }
        ]);
        return _class5;
      }());
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/query.js
  function fetchState(data, options) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
      ...data === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }
  function getDefaultState(options) {
    var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    var hasData = data !== void 0;
    var initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
      data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: hasData ? "success" : "pending",
      fetchStatus: "idle"
    };
  }
  function dispatch(action) {
    var reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          return {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          var error = action.error;
          if (isCancelledError(error) && error.revert && _class_private_field_get(this, _revertState)) {
            return {
              ..._class_private_field_get(this, _revertState),
              fetchStatus: "idle"
            };
          }
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      _class_private_field_get(this, _cache).notify({
        query: this,
        type: "updated",
        action
      });
    });
  }
  var _initialState, _revertState, _cache, _retryer, _defaultOptions, _abortSignalConsumed, _dispatch, _class, Query;
  var init_query = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/query.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_get();
      init_get_prototype_of();
      init_inherits();
      init_utils2();
      init_notifyManager();
      init_retryer();
      init_removable();
      Query = (_initialState = /* @__PURE__ */ new WeakMap(), _revertState = /* @__PURE__ */ new WeakMap(), _cache = /* @__PURE__ */ new WeakMap(), _retryer = /* @__PURE__ */ new WeakMap(), _defaultOptions = /* @__PURE__ */ new WeakMap(), _abortSignalConsumed = /* @__PURE__ */ new WeakMap(), _dispatch = /* @__PURE__ */ new WeakSet(), _class = /* @__PURE__ */ function(Removable2) {
        "use strict";
        _inherits(_class5, Removable2);
        function _class5(config) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _dispatch), _class_private_field_init(_this, _initialState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _revertState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _cache, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _retryer, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _defaultOptions, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _abortSignalConsumed, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _abortSignalConsumed, false);
          _class_private_field_set(_this, _defaultOptions, config.defaultOptions);
          _this.setOptions(config.options);
          _this.observers = [];
          _class_private_field_set(_this, _cache, config.cache);
          _this.queryKey = config.queryKey;
          _this.queryHash = config.queryHash;
          _class_private_field_set(_this, _initialState, getDefaultState(_this.options));
          _this.state = config.state ?? _class_private_field_get(_this, _initialState);
          _this.scheduleGc();
          return _this;
        }
        _create_class(_class5, [
          {
            key: "meta",
            get: function get() {
              return this.options.meta;
            }
          },
          {
            key: "promise",
            get: function get() {
              return _class_private_field_get(this, _retryer)?.promise;
            }
          },
          {
            key: "setOptions",
            value: function setOptions(options) {
              this.options = {
                ..._class_private_field_get(this, _defaultOptions),
                ...options
              };
              this.updateGcTime(this.options.gcTime);
            }
          },
          {
            key: "optionalRemove",
            value: function optionalRemove() {
              if (!this.observers.length && this.state.fetchStatus === "idle") {
                _class_private_field_get(this, _cache).remove(this);
              }
            }
          },
          {
            key: "setData",
            value: function setData(newData, options) {
              var data = replaceData(this.state.data, newData, this.options);
              _class_private_method_get(this, _dispatch, dispatch).call(this, {
                data,
                type: "success",
                dataUpdatedAt: options?.updatedAt,
                manual: options?.manual
              });
              return data;
            }
          },
          {
            key: "setState",
            value: function setState(state, setStateOptions) {
              _class_private_method_get(this, _dispatch, dispatch).call(this, {
                type: "setState",
                state,
                setStateOptions
              });
            }
          },
          {
            key: "cancel",
            value: function cancel(options) {
              var promise = _class_private_field_get(this, _retryer)?.promise;
              _class_private_field_get(this, _retryer)?.cancel(options);
              return promise ? promise.then(noop).catch(noop) : Promise.resolve();
            }
          },
          {
            key: "destroy",
            value: function destroy() {
              _get(_get_prototype_of(_class5.prototype), "destroy", this).call(this);
              this.cancel({
                silent: true
              });
            }
          },
          {
            key: "reset",
            value: function reset() {
              this.destroy();
              this.setState(_class_private_field_get(this, _initialState));
            }
          },
          {
            key: "isActive",
            value: function isActive() {
              return this.observers.some((observer) => resolveEnabled(observer.options.enabled, this) !== false);
            }
          },
          {
            key: "isDisabled",
            value: function isDisabled() {
              return this.getObserversCount() > 0 && !this.isActive();
            }
          },
          {
            key: "isStale",
            value: function isStale2() {
              if (this.state.isInvalidated) {
                return true;
              }
              if (this.getObserversCount() > 0) {
                return this.observers.some((observer) => observer.getCurrentResult().isStale);
              }
              return this.state.data === void 0;
            }
          },
          {
            key: "isStaleByTime",
            value: function isStaleByTime(staleTime = 0) {
              return this.state.isInvalidated || this.state.data === void 0 || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
            }
          },
          {
            key: "onFocus",
            value: function onFocus() {
              var observer = this.observers.find((x2) => x2.shouldFetchOnWindowFocus());
              observer?.refetch({
                cancelRefetch: false
              });
              _class_private_field_get(this, _retryer)?.continue();
            }
          },
          {
            key: "onOnline",
            value: function onOnline() {
              var observer = this.observers.find((x2) => x2.shouldFetchOnReconnect());
              observer?.refetch({
                cancelRefetch: false
              });
              _class_private_field_get(this, _retryer)?.continue();
            }
          },
          {
            key: "addObserver",
            value: function addObserver(observer) {
              if (!this.observers.includes(observer)) {
                this.observers.push(observer);
                this.clearGcTimeout();
                _class_private_field_get(this, _cache).notify({
                  type: "observerAdded",
                  query: this,
                  observer
                });
              }
            }
          },
          {
            key: "removeObserver",
            value: function removeObserver(observer) {
              if (this.observers.includes(observer)) {
                this.observers = this.observers.filter((x2) => x2 !== observer);
                if (!this.observers.length) {
                  if (_class_private_field_get(this, _retryer)) {
                    if (_class_private_field_get(this, _abortSignalConsumed)) {
                      _class_private_field_get(this, _retryer).cancel({
                        revert: true
                      });
                    } else {
                      _class_private_field_get(this, _retryer).cancelRetry();
                    }
                  }
                  this.scheduleGc();
                }
                _class_private_field_get(this, _cache).notify({
                  type: "observerRemoved",
                  query: this,
                  observer
                });
              }
            }
          },
          {
            key: "getObserversCount",
            value: function getObserversCount() {
              return this.observers.length;
            }
          },
          {
            key: "invalidate",
            value: function invalidate() {
              if (!this.state.isInvalidated) {
                _class_private_method_get(this, _dispatch, dispatch).call(this, {
                  type: "invalidate"
                });
              }
            }
          },
          {
            key: "fetch",
            value: function fetch2(options, fetchOptions) {
              if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                  this.cancel({
                    silent: true
                  });
                } else if (_class_private_field_get(this, _retryer)) {
                  _class_private_field_get(this, _retryer).continueRetry();
                  return _class_private_field_get(this, _retryer).promise;
                }
              }
              if (options) {
                this.setOptions(options);
              }
              if (!this.options.queryFn) {
                var observer = this.observers.find((x2) => x2.options.queryFn);
                if (observer) {
                  this.setOptions(observer.options);
                }
              }
              if (true) {
                if (!Array.isArray(this.options.queryKey)) {
                  console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
                }
              }
              var abortController = new AbortController();
              var addSignalProperty = (object) => {
                Object.defineProperty(object, "signal", {
                  enumerable: true,
                  get: () => {
                    _class_private_field_set(this, _abortSignalConsumed, true);
                    return abortController.signal;
                  }
                });
              };
              var fetchFn = () => {
                var queryFn = ensureQueryFn(this.options, fetchOptions);
                var queryFnContext = {
                  queryKey: this.queryKey,
                  meta: this.meta
                };
                addSignalProperty(queryFnContext);
                _class_private_field_set(this, _abortSignalConsumed, false);
                if (this.options.persister) {
                  return this.options.persister(queryFn, queryFnContext, this);
                }
                return queryFn(queryFnContext);
              };
              var context = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn
              };
              addSignalProperty(context);
              this.options.behavior?.onFetch(context, this);
              _class_private_field_set(this, _revertState, this.state);
              if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
                _class_private_method_get(this, _dispatch, dispatch).call(this, {
                  type: "fetch",
                  meta: context.fetchOptions?.meta
                });
              }
              var onError = (error) => {
                if (!(isCancelledError(error) && error.silent)) {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "error",
                    error
                  });
                }
                if (!isCancelledError(error)) {
                  _class_private_field_get(this, _cache).config.onError?.(error, this);
                  _class_private_field_get(this, _cache).config.onSettled?.(this.state.data, error, this);
                }
                if (!this.isFetchingOptimistic) {
                  this.scheduleGc();
                }
                this.isFetchingOptimistic = false;
              };
              _class_private_field_set(this, _retryer, createRetryer({
                initialPromise: fetchOptions?.initialPromise,
                fn: context.fetchFn,
                abort: abortController.abort.bind(abortController),
                onSuccess: (data) => {
                  if (data === void 0) {
                    if (true) {
                      console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                    }
                    onError(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(data);
                  } catch (error) {
                    onError(error);
                    return;
                  }
                  _class_private_field_get(this, _cache).config.onSuccess?.(data, this);
                  _class_private_field_get(this, _cache).config.onSettled?.(data, this.state.error, this);
                  if (!this.isFetchingOptimistic) {
                    this.scheduleGc();
                  }
                  this.isFetchingOptimistic = false;
                },
                onError,
                onFail: (failureCount, error) => {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "failed",
                    failureCount,
                    error
                  });
                },
                onPause: () => {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "pause"
                  });
                },
                onContinue: () => {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "continue"
                  });
                },
                retry: context.options.retry,
                retryDelay: context.options.retryDelay,
                networkMode: context.options.networkMode,
                canRun: () => true
              }));
              return _class_private_field_get(this, _retryer).start();
            }
          }
        ]);
        return _class5;
      }(Removable), _class);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryCache.js
  var _queries, QueryCache;
  var init_queryCache = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryCache.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_inherits();
      init_utils2();
      init_query();
      init_notifyManager();
      init_subscribable();
      QueryCache = (_queries = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(config = {}) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _queries, {
            writable: true,
            value: void 0
          });
          _this.config = config;
          _class_private_field_set(_this, _queries, /* @__PURE__ */ new Map());
          return _this;
        }
        _create_class(_class5, [
          {
            key: "build",
            value: function build(client, options, state) {
              var queryKey = options.queryKey;
              var queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
              var query = this.get(queryHash);
              if (!query) {
                query = new Query({
                  cache: this,
                  queryKey,
                  queryHash,
                  options: client.defaultQueryOptions(options),
                  state,
                  defaultOptions: client.getQueryDefaults(queryKey)
                });
                this.add(query);
              }
              return query;
            }
          },
          {
            key: "add",
            value: function add(query) {
              if (!_class_private_field_get(this, _queries).has(query.queryHash)) {
                _class_private_field_get(this, _queries).set(query.queryHash, query);
                this.notify({
                  type: "added",
                  query
                });
              }
            }
          },
          {
            key: "remove",
            value: function remove(query) {
              var queryInMap = _class_private_field_get(this, _queries).get(query.queryHash);
              if (queryInMap) {
                query.destroy();
                if (queryInMap === query) {
                  _class_private_field_get(this, _queries).delete(query.queryHash);
                }
                this.notify({
                  type: "removed",
                  query
                });
              }
            }
          },
          {
            key: "clear",
            value: function clear() {
              notifyManager.batch(() => {
                this.getAll().forEach((query) => {
                  this.remove(query);
                });
              });
            }
          },
          {
            key: "get",
            value: function get(queryHash) {
              return _class_private_field_get(this, _queries).get(queryHash);
            }
          },
          {
            key: "getAll",
            value: function getAll() {
              return [
                ..._class_private_field_get(this, _queries).values()
              ];
            }
          },
          {
            key: "find",
            value: function find(filters) {
              var defaultedFilters = {
                exact: true,
                ...filters
              };
              return this.getAll().find((query) => matchQuery(defaultedFilters, query));
            }
          },
          {
            key: "findAll",
            value: function findAll(filters = {}) {
              var queries = this.getAll();
              return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
            }
          },
          {
            key: "notify",
            value: function notify3(event) {
              notifyManager.batch(() => {
                this.listeners.forEach((listener) => {
                  listener(event);
                });
              });
            }
          },
          {
            key: "onFocus",
            value: function onFocus() {
              notifyManager.batch(() => {
                this.getAll().forEach((query) => {
                  query.onFocus();
                });
              });
            }
          },
          {
            key: "onOnline",
            value: function onOnline() {
              notifyManager.batch(() => {
                this.getAll().forEach((query) => {
                  query.onOnline();
                });
              });
            }
          }
        ]);
        return _class5;
      }(Subscribable));
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js
  function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
      if (!descriptor.get)
        throw new TypeError("attempted to read set only private field");
      if (!("__destrWrapper" in descriptor)) {
        descriptor.__destrWrapper = {
          set value(v2) {
            descriptor.set.call(receiver, v2);
          },
          get value() {
            return descriptor.get.call(receiver);
          }
        };
      }
      return descriptor.__destrWrapper;
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      return descriptor;
    }
  }
  var init_class_apply_descriptor_update = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_update.js
  function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
  }
  var init_class_private_field_update = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_update.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_apply_descriptor_update();
      init_class_extract_field_descriptor();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutation.js
  function getDefaultState2() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  }
  function dispatch2(action) {
    var reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      _class_private_field_get(this, _observers).forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      _class_private_field_get(this, _mutationCache).notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
  var _observers, _mutationCache, _retryer2, _dispatch2, _class2, Mutation;
  var init_mutation = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutation.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_inherits();
      init_notifyManager();
      init_removable();
      init_retryer();
      Mutation = (_observers = /* @__PURE__ */ new WeakMap(), _mutationCache = /* @__PURE__ */ new WeakMap(), _retryer2 = /* @__PURE__ */ new WeakMap(), _dispatch2 = /* @__PURE__ */ new WeakSet(), _class2 = /* @__PURE__ */ function(Removable2) {
        "use strict";
        _inherits(_class5, Removable2);
        function _class5(config) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _dispatch2), _class_private_field_init(_this, _observers, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _mutationCache, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _retryer2, {
            writable: true,
            value: void 0
          });
          _this.mutationId = config.mutationId;
          _class_private_field_set(_this, _mutationCache, config.mutationCache);
          _class_private_field_set(_this, _observers, []);
          _this.state = config.state || getDefaultState2();
          _this.setOptions(config.options);
          _this.scheduleGc();
          return _this;
        }
        _create_class(_class5, [
          {
            key: "setOptions",
            value: function setOptions(options) {
              this.options = options;
              this.updateGcTime(this.options.gcTime);
            }
          },
          {
            key: "meta",
            get: function get() {
              return this.options.meta;
            }
          },
          {
            key: "addObserver",
            value: function addObserver(observer) {
              if (!_class_private_field_get(this, _observers).includes(observer)) {
                _class_private_field_get(this, _observers).push(observer);
                this.clearGcTimeout();
                _class_private_field_get(this, _mutationCache).notify({
                  type: "observerAdded",
                  mutation: this,
                  observer
                });
              }
            }
          },
          {
            key: "removeObserver",
            value: function removeObserver(observer) {
              _class_private_field_set(this, _observers, _class_private_field_get(this, _observers).filter((x2) => x2 !== observer));
              this.scheduleGc();
              _class_private_field_get(this, _mutationCache).notify({
                type: "observerRemoved",
                mutation: this,
                observer
              });
            }
          },
          {
            key: "optionalRemove",
            value: function optionalRemove() {
              if (!_class_private_field_get(this, _observers).length) {
                if (this.state.status === "pending") {
                  this.scheduleGc();
                } else {
                  _class_private_field_get(this, _mutationCache).remove(this);
                }
              }
            }
          },
          {
            key: "continue",
            value: function _continue() {
              return _class_private_field_get(this, _retryer2)?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
              this.execute(this.state.variables);
            }
          },
          {
            key: "execute",
            value: function execute(variables) {
              var _this = this;
              return _async_to_generator(function* () {
                _class_private_field_set(_this, _retryer2, createRetryer({
                  fn: () => {
                    if (!_this.options.mutationFn) {
                      return Promise.reject(new Error("No mutationFn found"));
                    }
                    return _this.options.mutationFn(variables);
                  },
                  onFail: (failureCount, error) => {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "failed",
                      failureCount,
                      error
                    });
                  },
                  onPause: () => {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "pause"
                    });
                  },
                  onContinue: () => {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "continue"
                    });
                  },
                  retry: _this.options.retry ?? 0,
                  retryDelay: _this.options.retryDelay,
                  networkMode: _this.options.networkMode,
                  canRun: () => _class_private_field_get(_this, _mutationCache).canRun(_this)
                }));
                var restored = _this.state.status === "pending";
                var isPaused = !_class_private_field_get(_this, _retryer2).canStart();
                try {
                  if (!restored) {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "pending",
                      variables,
                      isPaused
                    });
                    yield _class_private_field_get(_this, _mutationCache).config.onMutate?.(variables, _this);
                    var context = yield _this.options.onMutate?.(variables);
                    if (context !== _this.state.context) {
                      _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                        type: "pending",
                        context,
                        variables,
                        isPaused
                      });
                    }
                  }
                  var data = yield _class_private_field_get(_this, _retryer2).start();
                  yield _class_private_field_get(_this, _mutationCache).config.onSuccess?.(data, variables, _this.state.context, _this);
                  yield _this.options.onSuccess?.(data, variables, _this.state.context);
                  yield _class_private_field_get(_this, _mutationCache).config.onSettled?.(data, null, _this.state.variables, _this.state.context, _this);
                  yield _this.options.onSettled?.(data, null, variables, _this.state.context);
                  _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                    type: "success",
                    data
                  });
                  return data;
                } catch (error) {
                  try {
                    yield _class_private_field_get(_this, _mutationCache).config.onError?.(error, variables, _this.state.context, _this);
                    yield _this.options.onError?.(error, variables, _this.state.context);
                    yield _class_private_field_get(_this, _mutationCache).config.onSettled?.(void 0, error, _this.state.variables, _this.state.context, _this);
                    yield _this.options.onSettled?.(void 0, error, variables, _this.state.context);
                    throw error;
                  } finally {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "error",
                      error
                    });
                  }
                } finally {
                  _class_private_field_get(_this, _mutationCache).runNext(_this);
                }
              })();
            }
          }
        ]);
        return _class5;
      }(Removable), _class2);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationCache.js
  function scopeFor(mutation) {
    return mutation.options.scope?.id ?? String(mutation.mutationId);
  }
  var _mutations, _mutationId, MutationCache;
  var init_mutationCache = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationCache.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_field_update();
      init_create_class();
      init_inherits();
      init_notifyManager();
      init_mutation();
      init_utils2();
      init_subscribable();
      MutationCache = (_mutations = /* @__PURE__ */ new WeakMap(), _mutationId = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(config = {}) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _mutations, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _mutationId, {
            writable: true,
            value: void 0
          });
          _this.config = config;
          _class_private_field_set(_this, _mutations, /* @__PURE__ */ new Map());
          _class_private_field_set(_this, _mutationId, Date.now());
          return _this;
        }
        _create_class(_class5, [
          {
            key: "build",
            value: function build(client, options, state) {
              var mutation = new Mutation({
                mutationCache: this,
                mutationId: ++_class_private_field_update(this, _mutationId).value,
                options: client.defaultMutationOptions(options),
                state
              });
              this.add(mutation);
              return mutation;
            }
          },
          {
            key: "add",
            value: function add(mutation) {
              var scope = scopeFor(mutation);
              var mutations = _class_private_field_get(this, _mutations).get(scope) ?? [];
              mutations.push(mutation);
              _class_private_field_get(this, _mutations).set(scope, mutations);
              this.notify({
                type: "added",
                mutation
              });
            }
          },
          {
            key: "remove",
            value: function remove(mutation) {
              var scope = scopeFor(mutation);
              if (_class_private_field_get(this, _mutations).has(scope)) {
                var mutations = _class_private_field_get(this, _mutations).get(scope)?.filter((x2) => x2 !== mutation);
                if (mutations) {
                  if (mutations.length === 0) {
                    _class_private_field_get(this, _mutations).delete(scope);
                  } else {
                    _class_private_field_get(this, _mutations).set(scope, mutations);
                  }
                }
              }
              this.notify({
                type: "removed",
                mutation
              });
            }
          },
          {
            key: "canRun",
            value: function canRun(mutation) {
              var firstPendingMutation = _class_private_field_get(this, _mutations).get(scopeFor(mutation))?.find((m2) => m2.state.status === "pending");
              return !firstPendingMutation || firstPendingMutation === mutation;
            }
          },
          {
            key: "runNext",
            value: function runNext(mutation) {
              var foundMutation = _class_private_field_get(this, _mutations).get(scopeFor(mutation))?.find((m2) => m2 !== mutation && m2.state.isPaused);
              return foundMutation?.continue() ?? Promise.resolve();
            }
          },
          {
            key: "clear",
            value: function clear() {
              notifyManager.batch(() => {
                this.getAll().forEach((mutation) => {
                  this.remove(mutation);
                });
              });
            }
          },
          {
            key: "getAll",
            value: function getAll() {
              return [
                ..._class_private_field_get(this, _mutations).values()
              ].flat();
            }
          },
          {
            key: "find",
            value: function find(filters) {
              var defaultedFilters = {
                exact: true,
                ...filters
              };
              return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
            }
          },
          {
            key: "findAll",
            value: function findAll(filters = {}) {
              return this.getAll().filter((mutation) => matchMutation(filters, mutation));
            }
          },
          {
            key: "notify",
            value: function notify3(event) {
              notifyManager.batch(() => {
                this.listeners.forEach((listener) => {
                  listener(event);
                });
              });
            }
          },
          {
            key: "resumePausedMutations",
            value: function resumePausedMutations() {
              var pausedMutations = this.getAll().filter((x2) => x2.state.isPaused);
              return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
            }
          }
        ]);
        return _class5;
      }(Subscribable));
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
  function infiniteQueryBehavior(pages) {
    return {
      onFetch: (context, query) => {
        var options = context.options;
        var direction = context.fetchOptions?.meta?.fetchMore?.direction;
        var oldPages = context.state.data?.pages || [];
        var oldPageParams = context.state.data?.pageParams || [];
        var result = {
          pages: [],
          pageParams: []
        };
        var currentPage = 0;
        var fetchFn = /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* () {
            var cancelled = false;
            var addSignalProperty = (object) => {
              Object.defineProperty(object, "signal", {
                enumerable: true,
                get: () => {
                  if (context.signal.aborted) {
                    cancelled = true;
                  } else {
                    context.signal.addEventListener("abort", () => {
                      cancelled = true;
                    });
                  }
                  return context.signal;
                }
              });
            };
            var queryFn = ensureQueryFn(context.options, context.fetchOptions);
            var fetchPage = /* @__PURE__ */ function() {
              var _ref2 = _async_to_generator(function* (data, param2, previous2) {
                if (cancelled) {
                  return Promise.reject();
                }
                if (param2 == null && data.pages.length) {
                  return Promise.resolve(data);
                }
                var queryFnContext = {
                  queryKey: context.queryKey,
                  pageParam: param2,
                  direction: previous2 ? "backward" : "forward",
                  meta: context.options.meta
                };
                addSignalProperty(queryFnContext);
                var page = yield queryFn(queryFnContext);
                var { maxPages } = context.options;
                var addTo = previous2 ? addToStart : addToEnd;
                return {
                  pages: addTo(data.pages, page, maxPages),
                  pageParams: addTo(data.pageParams, param2, maxPages)
                };
              });
              return function fetchPage2(data, param2, previous2) {
                return _ref2.apply(this, arguments);
              };
            }();
            if (direction && oldPages.length) {
              var previous = direction === "backward";
              var pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
              var oldData = {
                pages: oldPages,
                pageParams: oldPageParams
              };
              var param = pageParamFn(options, oldData);
              result = yield fetchPage(oldData, param, previous);
            } else {
              var remainingPages = pages ?? oldPages.length;
              do {
                var param1 = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                if (currentPage > 0 && param1 == null) {
                  break;
                }
                result = yield fetchPage(result, param1);
                currentPage++;
              } while (currentPage < remainingPages);
            }
            return result;
          });
          return function fetchFn2() {
            return _ref.apply(this, arguments);
          };
        }();
        if (context.options.persister) {
          context.fetchFn = () => {
            return context.options.persister?.(fetchFn, {
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            }, query);
          };
        } else {
          context.fetchFn = fetchFn;
        }
      }
    };
  }
  function getNextPageParam(options, { pages, pageParams }) {
    var lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
  }
  function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
  }
  var init_infiniteQueryBehavior = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_utils2();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryClient.js
  var _queryCache, _mutationCache2, _defaultOptions2, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline, QueryClient;
  var init_queryClient = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryClient.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_field_update();
      init_create_class();
      init_utils2();
      init_queryCache();
      init_mutationCache();
      init_focusManager();
      init_onlineManager();
      init_notifyManager();
      init_infiniteQueryBehavior();
      QueryClient = (_queryCache = /* @__PURE__ */ new WeakMap(), _mutationCache2 = /* @__PURE__ */ new WeakMap(), _defaultOptions2 = /* @__PURE__ */ new WeakMap(), _queryDefaults = /* @__PURE__ */ new WeakMap(), _mutationDefaults = /* @__PURE__ */ new WeakMap(), _mountCount = /* @__PURE__ */ new WeakMap(), _unsubscribeFocus = /* @__PURE__ */ new WeakMap(), _unsubscribeOnline = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function() {
        "use strict";
        function _class5(config = {}) {
          _class_call_check(this, _class5);
          _class_private_field_init(this, _queryCache, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _mutationCache2, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _defaultOptions2, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _queryDefaults, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _mutationDefaults, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _mountCount, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _unsubscribeFocus, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _unsubscribeOnline, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(this, _queryCache, config.queryCache || new QueryCache());
          _class_private_field_set(this, _mutationCache2, config.mutationCache || new MutationCache());
          _class_private_field_set(this, _defaultOptions2, config.defaultOptions || {});
          _class_private_field_set(this, _queryDefaults, /* @__PURE__ */ new Map());
          _class_private_field_set(this, _mutationDefaults, /* @__PURE__ */ new Map());
          _class_private_field_set(this, _mountCount, 0);
        }
        _create_class(_class5, [
          {
            key: "mount",
            value: function mount() {
              _class_private_field_update(this, _mountCount).value++;
              if (_class_private_field_get(this, _mountCount) !== 1)
                return;
              var _this = this;
              _class_private_field_set(this, _unsubscribeFocus, focusManager.subscribe(/* @__PURE__ */ function() {
                var _ref = _async_to_generator(function* (focused) {
                  if (focused) {
                    yield _this.resumePausedMutations();
                    _class_private_field_get(_this, _queryCache).onFocus();
                  }
                });
                return function(focused) {
                  return _ref.apply(this, arguments);
                };
              }()));
              var _this1 = this;
              _class_private_field_set(this, _unsubscribeOnline, onlineManager.subscribe(/* @__PURE__ */ function() {
                var _ref = _async_to_generator(function* (online) {
                  if (online) {
                    yield _this1.resumePausedMutations();
                    _class_private_field_get(_this1, _queryCache).onOnline();
                  }
                });
                return function(online) {
                  return _ref.apply(this, arguments);
                };
              }()));
            }
          },
          {
            key: "unmount",
            value: function unmount() {
              var _this, _this1, _ref, _this2, _this3, _ref1;
              _class_private_field_update(this, _mountCount).value--;
              if (_class_private_field_get(this, _mountCount) !== 0)
                return;
              (_this = _class_private_field_get(_ref = _this1 = this, _unsubscribeFocus)) === null || _this === void 0 ? void 0 : _this.call(_this1);
              _class_private_field_set(this, _unsubscribeFocus, void 0);
              (_this2 = _class_private_field_get(_ref1 = _this3 = this, _unsubscribeOnline)) === null || _this2 === void 0 ? void 0 : _this2.call(_this3);
              _class_private_field_set(this, _unsubscribeOnline, void 0);
            }
          },
          {
            key: "isFetching",
            value: function isFetching(filters) {
              return _class_private_field_get(this, _queryCache).findAll({
                ...filters,
                fetchStatus: "fetching"
              }).length;
            }
          },
          {
            key: "isMutating",
            value: function isMutating(filters) {
              return _class_private_field_get(this, _mutationCache2).findAll({
                ...filters,
                status: "pending"
              }).length;
            }
          },
          {
            key: "getQueryData",
            value: function getQueryData(queryKey) {
              var options = this.defaultQueryOptions({
                queryKey
              });
              return _class_private_field_get(this, _queryCache).get(options.queryHash)?.state.data;
            }
          },
          {
            key: "ensureQueryData",
            value: function ensureQueryData(options) {
              var cachedData = this.getQueryData(options.queryKey);
              if (cachedData === void 0)
                return this.fetchQuery(options);
              else {
                var defaultedOptions = this.defaultQueryOptions(options);
                var query = _class_private_field_get(this, _queryCache).build(this, defaultedOptions);
                if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
                  void this.prefetchQuery(defaultedOptions);
                }
                return Promise.resolve(cachedData);
              }
            }
          },
          {
            key: "getQueriesData",
            value: function getQueriesData(filters) {
              return _class_private_field_get(this, _queryCache).findAll(filters).map(({ queryKey, state }) => {
                var data = state.data;
                return [
                  queryKey,
                  data
                ];
              });
            }
          },
          {
            key: "setQueryData",
            value: function setQueryData(queryKey, updater, options) {
              var defaultedOptions = this.defaultQueryOptions({
                queryKey
              });
              var query = _class_private_field_get(this, _queryCache).get(defaultedOptions.queryHash);
              var prevData = query?.state.data;
              var data = functionalUpdate(updater, prevData);
              if (data === void 0) {
                return void 0;
              }
              return _class_private_field_get(this, _queryCache).build(this, defaultedOptions).setData(data, {
                ...options,
                manual: true
              });
            }
          },
          {
            key: "setQueriesData",
            value: function setQueriesData(filters, updater, options) {
              return notifyManager.batch(() => _class_private_field_get(this, _queryCache).findAll(filters).map(({ queryKey }) => [
                queryKey,
                this.setQueryData(queryKey, updater, options)
              ]));
            }
          },
          {
            key: "getQueryState",
            value: function getQueryState(queryKey) {
              var options = this.defaultQueryOptions({
                queryKey
              });
              return _class_private_field_get(this, _queryCache).get(options.queryHash)?.state;
            }
          },
          {
            key: "removeQueries",
            value: function removeQueries(filters) {
              var queryCache = _class_private_field_get(this, _queryCache);
              notifyManager.batch(() => {
                queryCache.findAll(filters).forEach((query) => {
                  queryCache.remove(query);
                });
              });
            }
          },
          {
            key: "resetQueries",
            value: function resetQueries(filters, options) {
              var queryCache = _class_private_field_get(this, _queryCache);
              var refetchFilters = {
                type: "active",
                ...filters
              };
              return notifyManager.batch(() => {
                queryCache.findAll(filters).forEach((query) => {
                  query.reset();
                });
                return this.refetchQueries(refetchFilters, options);
              });
            }
          },
          {
            key: "cancelQueries",
            value: function cancelQueries(filters = {}, cancelOptions = {}) {
              var defaultedCancelOptions = {
                revert: true,
                ...cancelOptions
              };
              var promises = notifyManager.batch(() => _class_private_field_get(this, _queryCache).findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
              return Promise.all(promises).then(noop).catch(noop);
            }
          },
          {
            key: "invalidateQueries",
            value: function invalidateQueries(filters = {}, options = {}) {
              return notifyManager.batch(() => {
                _class_private_field_get(this, _queryCache).findAll(filters).forEach((query) => {
                  query.invalidate();
                });
                if (filters.refetchType === "none") {
                  return Promise.resolve();
                }
                var refetchFilters = {
                  ...filters,
                  type: filters.refetchType ?? filters.type ?? "active"
                };
                return this.refetchQueries(refetchFilters, options);
              });
            }
          },
          {
            key: "refetchQueries",
            value: function refetchQueries(filters = {}, options) {
              var fetchOptions = {
                ...options,
                cancelRefetch: options?.cancelRefetch ?? true
              };
              var promises = notifyManager.batch(() => _class_private_field_get(this, _queryCache).findAll(filters).filter((query) => !query.isDisabled()).map((query) => {
                var promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                  promise = promise.catch(noop);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
              }));
              return Promise.all(promises).then(noop);
            }
          },
          {
            key: "fetchQuery",
            value: function fetchQuery(options) {
              var defaultedOptions = this.defaultQueryOptions(options);
              if (defaultedOptions.retry === void 0) {
                defaultedOptions.retry = false;
              }
              var query = _class_private_field_get(this, _queryCache).build(this, defaultedOptions);
              return query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
            }
          },
          {
            key: "prefetchQuery",
            value: function prefetchQuery(options) {
              return this.fetchQuery(options).then(noop).catch(noop);
            }
          },
          {
            key: "fetchInfiniteQuery",
            value: function fetchInfiniteQuery(options) {
              options.behavior = infiniteQueryBehavior(options.pages);
              return this.fetchQuery(options);
            }
          },
          {
            key: "prefetchInfiniteQuery",
            value: function prefetchInfiniteQuery(options) {
              return this.fetchInfiniteQuery(options).then(noop).catch(noop);
            }
          },
          {
            key: "ensureInfiniteQueryData",
            value: function ensureInfiniteQueryData(options) {
              options.behavior = infiniteQueryBehavior(options.pages);
              return this.ensureQueryData(options);
            }
          },
          {
            key: "resumePausedMutations",
            value: function resumePausedMutations() {
              if (onlineManager.isOnline()) {
                return _class_private_field_get(this, _mutationCache2).resumePausedMutations();
              }
              return Promise.resolve();
            }
          },
          {
            key: "getQueryCache",
            value: function getQueryCache() {
              return _class_private_field_get(this, _queryCache);
            }
          },
          {
            key: "getMutationCache",
            value: function getMutationCache() {
              return _class_private_field_get(this, _mutationCache2);
            }
          },
          {
            key: "getDefaultOptions",
            value: function getDefaultOptions() {
              return _class_private_field_get(this, _defaultOptions2);
            }
          },
          {
            key: "setDefaultOptions",
            value: function setDefaultOptions(options) {
              _class_private_field_set(this, _defaultOptions2, options);
            }
          },
          {
            key: "setQueryDefaults",
            value: function setQueryDefaults(queryKey, options) {
              _class_private_field_get(this, _queryDefaults).set(hashKey(queryKey), {
                queryKey,
                defaultOptions: options
              });
            }
          },
          {
            key: "getQueryDefaults",
            value: function getQueryDefaults(queryKey) {
              var defaults = [
                ..._class_private_field_get(this, _queryDefaults).values()
              ];
              var result = {};
              defaults.forEach((queryDefault) => {
                if (partialMatchKey(queryKey, queryDefault.queryKey)) {
                  result = {
                    ...result,
                    ...queryDefault.defaultOptions
                  };
                }
              });
              return result;
            }
          },
          {
            key: "setMutationDefaults",
            value: function setMutationDefaults(mutationKey, options) {
              _class_private_field_get(this, _mutationDefaults).set(hashKey(mutationKey), {
                mutationKey,
                defaultOptions: options
              });
            }
          },
          {
            key: "getMutationDefaults",
            value: function getMutationDefaults(mutationKey) {
              var defaults = [
                ..._class_private_field_get(this, _mutationDefaults).values()
              ];
              var result = {};
              defaults.forEach((queryDefault) => {
                if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
                  result = {
                    ...result,
                    ...queryDefault.defaultOptions
                  };
                }
              });
              return result;
            }
          },
          {
            key: "defaultQueryOptions",
            value: function defaultQueryOptions(options) {
              if (options._defaulted) {
                return options;
              }
              var defaultedOptions = {
                ..._class_private_field_get(this, _defaultOptions2).queries,
                ...this.getQueryDefaults(options.queryKey),
                ...options,
                _defaulted: true
              };
              if (!defaultedOptions.queryHash) {
                defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
              }
              if (defaultedOptions.refetchOnReconnect === void 0) {
                defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
              }
              if (defaultedOptions.throwOnError === void 0) {
                defaultedOptions.throwOnError = !!defaultedOptions.suspense;
              }
              if (!defaultedOptions.networkMode && defaultedOptions.persister) {
                defaultedOptions.networkMode = "offlineFirst";
              }
              if (defaultedOptions.enabled !== true && defaultedOptions.queryFn === skipToken) {
                defaultedOptions.enabled = false;
              }
              return defaultedOptions;
            }
          },
          {
            key: "defaultMutationOptions",
            value: function defaultMutationOptions(options) {
              if (options?._defaulted) {
                return options;
              }
              return {
                ..._class_private_field_get(this, _defaultOptions2).mutations,
                ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
                ...options,
                _defaulted: true
              };
            }
          },
          {
            key: "clear",
            value: function clear() {
              _class_private_field_get(this, _queryCache).clear();
              _class_private_field_get(this, _mutationCache2).clear();
            }
          }
        ]);
        return _class5;
      }());
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryObserver.js
  function shouldLoadOnMount(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
  }
  function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
  }
  function shouldFetchOn(query, options, field) {
    if (resolveEnabled(options.enabled, query) !== false) {
      var value = typeof field === "function" ? field(query) : field;
      return value === "always" || value !== false && isStale(query, options);
    }
    return false;
  }
  function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
  }
  function isStale(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
  }
  function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
      return true;
    }
    return false;
  }
  function executeFetch(fetchOptions) {
    _class_private_method_get(this, _updateQuery, updateQuery).call(this);
    var promise = _class_private_field_get(this, _currentQuery).fetch(this.options, fetchOptions);
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  function updateStaleTimeout() {
    _class_private_method_get(this, _clearStaleTimeout, clearStaleTimeout).call(this);
    var staleTime = resolveStaleTime(this.options.staleTime, _class_private_field_get(this, _currentQuery));
    if (isServer || _class_private_field_get(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
      return;
    }
    var time = timeUntilStale(_class_private_field_get(this, _currentResult).dataUpdatedAt, staleTime);
    var timeout = time + 1;
    _class_private_field_set(this, _staleTimeoutId, setTimeout(() => {
      if (!_class_private_field_get(this, _currentResult).isStale) {
        this.updateResult();
      }
    }, timeout));
  }
  function computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(_class_private_field_get(this, _currentQuery)) : this.options.refetchInterval) ?? false;
  }
  function updateRefetchInterval(nextInterval) {
    _class_private_method_get(this, _clearRefetchInterval, clearRefetchInterval).call(this);
    _class_private_field_set(this, _currentRefetchInterval, nextInterval);
    if (isServer || resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) === false || !isValidTimeout(_class_private_field_get(this, _currentRefetchInterval)) || _class_private_field_get(this, _currentRefetchInterval) === 0) {
      return;
    }
    _class_private_field_set(this, _refetchIntervalId, setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        _class_private_method_get(this, _executeFetch, executeFetch).call(this);
      }
    }, _class_private_field_get(this, _currentRefetchInterval)));
  }
  function updateTimers() {
    _class_private_method_get(this, _updateStaleTimeout, updateStaleTimeout).call(this);
    _class_private_method_get(this, _updateRefetchInterval, updateRefetchInterval).call(this, _class_private_method_get(this, _computeRefetchInterval, computeRefetchInterval).call(this));
  }
  function clearStaleTimeout() {
    if (_class_private_field_get(this, _staleTimeoutId)) {
      clearTimeout(_class_private_field_get(this, _staleTimeoutId));
      _class_private_field_set(this, _staleTimeoutId, void 0);
    }
  }
  function clearRefetchInterval() {
    if (_class_private_field_get(this, _refetchIntervalId)) {
      clearInterval(_class_private_field_get(this, _refetchIntervalId));
      _class_private_field_set(this, _refetchIntervalId, void 0);
    }
  }
  function updateQuery() {
    var query = _class_private_field_get(this, _client).getQueryCache().build(_class_private_field_get(this, _client), this.options);
    if (query === _class_private_field_get(this, _currentQuery)) {
      return;
    }
    var prevQuery = _class_private_field_get(this, _currentQuery);
    _class_private_field_set(this, _currentQuery, query);
    _class_private_field_set(this, _currentQueryInitialState, query.state);
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  function notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(_class_private_field_get(this, _currentResult));
        });
      }
      _class_private_field_get(this, _client).getQueryCache().notify({
        query: _class_private_field_get(this, _currentQuery),
        type: "observerResultsUpdated"
      });
    });
  }
  var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _executeFetch, _updateStaleTimeout, _computeRefetchInterval, _updateRefetchInterval, _updateTimers, _clearStaleTimeout, _clearRefetchInterval, _updateQuery, _notify, _class3, QueryObserver;
  var init_queryObserver = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryObserver.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_inherits();
      init_utils2();
      init_notifyManager();
      init_focusManager();
      init_subscribable();
      init_query();
      QueryObserver = (_client = /* @__PURE__ */ new WeakMap(), _currentQuery = /* @__PURE__ */ new WeakMap(), _currentQueryInitialState = /* @__PURE__ */ new WeakMap(), _currentResult = /* @__PURE__ */ new WeakMap(), _currentResultState = /* @__PURE__ */ new WeakMap(), _currentResultOptions = /* @__PURE__ */ new WeakMap(), _selectError = /* @__PURE__ */ new WeakMap(), _selectFn = /* @__PURE__ */ new WeakMap(), _selectResult = /* @__PURE__ */ new WeakMap(), _lastQueryWithDefinedData = /* @__PURE__ */ new WeakMap(), _staleTimeoutId = /* @__PURE__ */ new WeakMap(), _refetchIntervalId = /* @__PURE__ */ new WeakMap(), _currentRefetchInterval = /* @__PURE__ */ new WeakMap(), _trackedProps = /* @__PURE__ */ new WeakMap(), _executeFetch = /* @__PURE__ */ new WeakSet(), _updateStaleTimeout = /* @__PURE__ */ new WeakSet(), _computeRefetchInterval = /* @__PURE__ */ new WeakSet(), _updateRefetchInterval = /* @__PURE__ */ new WeakSet(), _updateTimers = /* @__PURE__ */ new WeakSet(), _clearStaleTimeout = /* @__PURE__ */ new WeakSet(), _clearRefetchInterval = /* @__PURE__ */ new WeakSet(), _updateQuery = /* @__PURE__ */ new WeakSet(), _notify = /* @__PURE__ */ new WeakSet(), _class3 = /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(client, options) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _executeFetch), _class_private_method_init(_this, _updateStaleTimeout), _class_private_method_init(_this, _computeRefetchInterval), _class_private_method_init(_this, _updateRefetchInterval), _class_private_method_init(_this, _updateTimers), _class_private_method_init(_this, _clearStaleTimeout), _class_private_method_init(_this, _clearRefetchInterval), _class_private_method_init(_this, _updateQuery), _class_private_method_init(_this, _notify), _class_private_field_init(_this, _client, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentQuery, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentQueryInitialState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResult, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResultState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResultOptions, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _selectError, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _selectFn, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _selectResult, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _lastQueryWithDefinedData, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _staleTimeoutId, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _refetchIntervalId, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentRefetchInterval, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _trackedProps, {
            writable: true,
            value: /* @__PURE__ */ new Set()
          });
          _this.options = options;
          _class_private_field_set(_this, _client, client);
          _class_private_field_set(_this, _selectError, null);
          _this.bindMethods();
          _this.setOptions(options);
          return _this;
        }
        _create_class(_class5, [
          {
            key: "bindMethods",
            value: function bindMethods() {
              this.refetch = this.refetch.bind(this);
            }
          },
          {
            key: "onSubscribe",
            value: function onSubscribe() {
              if (this.listeners.size === 1) {
                _class_private_field_get(this, _currentQuery).addObserver(this);
                if (shouldFetchOnMount(_class_private_field_get(this, _currentQuery), this.options)) {
                  _class_private_method_get(this, _executeFetch, executeFetch).call(this);
                } else {
                  this.updateResult();
                }
                _class_private_method_get(this, _updateTimers, updateTimers).call(this);
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              if (!this.hasListeners()) {
                this.destroy();
              }
            }
          },
          {
            key: "shouldFetchOnReconnect",
            value: function shouldFetchOnReconnect() {
              return shouldFetchOn(_class_private_field_get(this, _currentQuery), this.options, this.options.refetchOnReconnect);
            }
          },
          {
            key: "shouldFetchOnWindowFocus",
            value: function shouldFetchOnWindowFocus() {
              return shouldFetchOn(_class_private_field_get(this, _currentQuery), this.options, this.options.refetchOnWindowFocus);
            }
          },
          {
            key: "destroy",
            value: function destroy() {
              this.listeners = /* @__PURE__ */ new Set();
              _class_private_method_get(this, _clearStaleTimeout, clearStaleTimeout).call(this);
              _class_private_method_get(this, _clearRefetchInterval, clearRefetchInterval).call(this);
              _class_private_field_get(this, _currentQuery).removeObserver(this);
            }
          },
          {
            key: "setOptions",
            value: function setOptions(options, notifyOptions) {
              var prevOptions = this.options;
              var prevQuery = _class_private_field_get(this, _currentQuery);
              this.options = _class_private_field_get(this, _client).defaultQueryOptions(options);
              if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) !== "boolean") {
                throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
              }
              _class_private_method_get(this, _updateQuery, updateQuery).call(this);
              _class_private_field_get(this, _currentQuery).setOptions(this.options);
              if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
                _class_private_field_get(this, _client).getQueryCache().notify({
                  type: "observerOptionsUpdated",
                  query: _class_private_field_get(this, _currentQuery),
                  observer: this
                });
              }
              var mounted = this.hasListeners();
              if (mounted && shouldFetchOptionally(_class_private_field_get(this, _currentQuery), prevQuery, this.options, prevOptions)) {
                _class_private_method_get(this, _executeFetch, executeFetch).call(this);
              }
              this.updateResult(notifyOptions);
              if (mounted && (_class_private_field_get(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, _class_private_field_get(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, _class_private_field_get(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, _class_private_field_get(this, _currentQuery)))) {
                _class_private_method_get(this, _updateStaleTimeout, updateStaleTimeout).call(this);
              }
              var nextRefetchInterval = _class_private_method_get(this, _computeRefetchInterval, computeRefetchInterval).call(this);
              if (mounted && (_class_private_field_get(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, _class_private_field_get(this, _currentQuery)) || nextRefetchInterval !== _class_private_field_get(this, _currentRefetchInterval))) {
                _class_private_method_get(this, _updateRefetchInterval, updateRefetchInterval).call(this, nextRefetchInterval);
              }
            }
          },
          {
            key: "getOptimisticResult",
            value: function getOptimisticResult(options) {
              var query = _class_private_field_get(this, _client).getQueryCache().build(_class_private_field_get(this, _client), options);
              var result = this.createResult(query, options);
              if (shouldAssignObserverCurrentProperties(this, result)) {
                _class_private_field_set(this, _currentResult, result);
                _class_private_field_set(this, _currentResultOptions, this.options);
                _class_private_field_set(this, _currentResultState, _class_private_field_get(this, _currentQuery).state);
              }
              return result;
            }
          },
          {
            key: "getCurrentResult",
            value: function getCurrentResult() {
              return _class_private_field_get(this, _currentResult);
            }
          },
          {
            key: "trackResult",
            value: function trackResult(result, onPropTracked) {
              var trackedResult = {};
              Object.keys(result).forEach((key) => {
                Object.defineProperty(trackedResult, key, {
                  configurable: false,
                  enumerable: true,
                  get: () => {
                    this.trackProp(key);
                    onPropTracked?.(key);
                    return result[key];
                  }
                });
              });
              return trackedResult;
            }
          },
          {
            key: "trackProp",
            value: function trackProp(key) {
              _class_private_field_get(this, _trackedProps).add(key);
            }
          },
          {
            key: "getCurrentQuery",
            value: function getCurrentQuery() {
              return _class_private_field_get(this, _currentQuery);
            }
          },
          {
            key: "refetch",
            value: function refetch({ ...options } = {}) {
              return this.fetch({
                ...options
              });
            }
          },
          {
            key: "fetchOptimistic",
            value: function fetchOptimistic2(options) {
              var defaultedOptions = _class_private_field_get(this, _client).defaultQueryOptions(options);
              var query = _class_private_field_get(this, _client).getQueryCache().build(_class_private_field_get(this, _client), defaultedOptions);
              query.isFetchingOptimistic = true;
              return query.fetch().then(() => this.createResult(query, defaultedOptions));
            }
          },
          {
            key: "fetch",
            value: function fetch2(fetchOptions) {
              return _class_private_method_get(this, _executeFetch, executeFetch).call(this, {
                ...fetchOptions,
                cancelRefetch: fetchOptions.cancelRefetch ?? true
              }).then(() => {
                this.updateResult();
                return _class_private_field_get(this, _currentResult);
              });
            }
          },
          {
            key: "createResult",
            value: function createResult(query, options) {
              var prevQuery = _class_private_field_get(this, _currentQuery);
              var prevOptions = this.options;
              var prevResult = _class_private_field_get(this, _currentResult);
              var prevResultState = _class_private_field_get(this, _currentResultState);
              var prevResultOptions = _class_private_field_get(this, _currentResultOptions);
              var queryChange = query !== prevQuery;
              var queryInitialState = queryChange ? query.state : _class_private_field_get(this, _currentQueryInitialState);
              var { state } = query;
              var newState = {
                ...state
              };
              var isPlaceholderData = false;
              var data;
              if (options._optimisticResults) {
                var mounted = this.hasListeners();
                var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
                var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
                if (fetchOnMount || fetchOptionally) {
                  newState = {
                    ...newState,
                    ...fetchState(state.data, query.options)
                  };
                }
                if (options._optimisticResults === "isRestoring") {
                  newState.fetchStatus = "idle";
                }
              }
              var { error, errorUpdatedAt, status } = newState;
              if (options.select && newState.data !== void 0) {
                if (prevResult && newState.data === prevResultState?.data && options.select === _class_private_field_get(this, _selectFn)) {
                  data = _class_private_field_get(this, _selectResult);
                } else {
                  try {
                    _class_private_field_set(this, _selectFn, options.select);
                    data = options.select(newState.data);
                    data = replaceData(prevResult?.data, data, options);
                    _class_private_field_set(this, _selectResult, data);
                    _class_private_field_set(this, _selectError, null);
                  } catch (selectError) {
                    _class_private_field_set(this, _selectError, selectError);
                  }
                }
              } else {
                data = newState.data;
              }
              if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
                var placeholderData;
                if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                  placeholderData = prevResult.data;
                } else {
                  placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(_class_private_field_get(this, _lastQueryWithDefinedData)?.state.data, _class_private_field_get(this, _lastQueryWithDefinedData)) : options.placeholderData;
                  if (options.select && placeholderData !== void 0) {
                    try {
                      placeholderData = options.select(placeholderData);
                      _class_private_field_set(this, _selectError, null);
                    } catch (selectError) {
                      _class_private_field_set(this, _selectError, selectError);
                    }
                  }
                }
                if (placeholderData !== void 0) {
                  status = "success";
                  data = replaceData(prevResult?.data, placeholderData, options);
                  isPlaceholderData = true;
                }
              }
              if (_class_private_field_get(this, _selectError)) {
                error = _class_private_field_get(this, _selectError);
                data = _class_private_field_get(this, _selectResult);
                errorUpdatedAt = Date.now();
                status = "error";
              }
              var isFetching = newState.fetchStatus === "fetching";
              var isPending = status === "pending";
              var isError = status === "error";
              var isLoading = isPending && isFetching;
              var hasData = data !== void 0;
              var result = {
                status,
                fetchStatus: newState.fetchStatus,
                isPending,
                isSuccess: status === "success",
                isError,
                isInitialLoading: isLoading,
                isLoading,
                data,
                dataUpdatedAt: newState.dataUpdatedAt,
                error,
                errorUpdatedAt,
                failureCount: newState.fetchFailureCount,
                failureReason: newState.fetchFailureReason,
                errorUpdateCount: newState.errorUpdateCount,
                isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
                isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
                isFetching,
                isRefetching: isFetching && !isPending,
                isLoadingError: isError && !hasData,
                isPaused: newState.fetchStatus === "paused",
                isPlaceholderData,
                isRefetchError: isError && hasData,
                isStale: isStale(query, options),
                refetch: this.refetch
              };
              return result;
            }
          },
          {
            key: "updateResult",
            value: function updateResult2(notifyOptions) {
              var prevResult = _class_private_field_get(this, _currentResult);
              var nextResult = this.createResult(_class_private_field_get(this, _currentQuery), this.options);
              _class_private_field_set(this, _currentResultState, _class_private_field_get(this, _currentQuery).state);
              _class_private_field_set(this, _currentResultOptions, this.options);
              if (_class_private_field_get(this, _currentResultState).data !== void 0) {
                _class_private_field_set(this, _lastQueryWithDefinedData, _class_private_field_get(this, _currentQuery));
              }
              if (shallowEqualObjects(nextResult, prevResult)) {
                return;
              }
              _class_private_field_set(this, _currentResult, nextResult);
              var defaultNotifyOptions = {};
              var shouldNotifyListeners = () => {
                if (!prevResult) {
                  return true;
                }
                var { notifyOnChangeProps } = this.options;
                var notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
                if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !_class_private_field_get(this, _trackedProps).size) {
                  return true;
                }
                var includedProps = new Set(notifyOnChangePropsValue ?? _class_private_field_get(this, _trackedProps));
                if (this.options.throwOnError) {
                  includedProps.add("error");
                }
                return Object.keys(_class_private_field_get(this, _currentResult)).some((key) => {
                  var typedKey = key;
                  var changed = _class_private_field_get(this, _currentResult)[typedKey] !== prevResult[typedKey];
                  return changed && includedProps.has(typedKey);
                });
              };
              if (notifyOptions?.listeners !== false && shouldNotifyListeners()) {
                defaultNotifyOptions.listeners = true;
              }
              _class_private_method_get(this, _notify, notify).call(this, {
                ...defaultNotifyOptions,
                ...notifyOptions
              });
            }
          },
          {
            key: "onQueryUpdate",
            value: function onQueryUpdate() {
              this.updateResult();
              if (this.hasListeners()) {
                _class_private_method_get(this, _updateTimers, updateTimers).call(this);
              }
            }
          }
        ]);
        return _class5;
      }(Subscribable), _class3);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationObserver.js
  function updateResult() {
    var state = _class_private_field_get(this, _currentMutation)?.state ?? getDefaultState2();
    _class_private_field_set(this, _currentResult2, {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    });
  }
  function notify2(action) {
    notifyManager.batch(() => {
      if (_class_private_field_get(this, _mutateOptions) && this.hasListeners()) {
        var variables = _class_private_field_get(this, _currentResult2).variables;
        var context = _class_private_field_get(this, _currentResult2).context;
        if (action?.type === "success") {
          _class_private_field_get(this, _mutateOptions).onSuccess?.(action.data, variables, context);
          _class_private_field_get(this, _mutateOptions).onSettled?.(action.data, null, variables, context);
        } else if (action?.type === "error") {
          _class_private_field_get(this, _mutateOptions).onError?.(action.error, variables, context);
          _class_private_field_get(this, _mutateOptions).onSettled?.(void 0, action.error, variables, context);
        }
      }
      this.listeners.forEach((listener) => {
        listener(_class_private_field_get(this, _currentResult2));
      });
    });
  }
  var _client2, _currentResult2, _currentMutation, _mutateOptions, _updateResult, _notify2, _class4, MutationObserver;
  var init_mutationObserver = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationObserver.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_inherits();
      init_mutation();
      init_notifyManager();
      init_subscribable();
      init_utils2();
      MutationObserver = (_client2 = /* @__PURE__ */ new WeakMap(), _currentResult2 = /* @__PURE__ */ new WeakMap(), _currentMutation = /* @__PURE__ */ new WeakMap(), _mutateOptions = /* @__PURE__ */ new WeakMap(), _updateResult = /* @__PURE__ */ new WeakSet(), _notify2 = /* @__PURE__ */ new WeakSet(), _class4 = /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(client, options) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _updateResult), _class_private_method_init(_this, _notify2), _class_private_field_init(_this, _client2, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResult2, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentMutation, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _mutateOptions, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _client2, client);
          _this.setOptions(options);
          _this.bindMethods();
          _class_private_method_get(_this, _updateResult, updateResult).call(_this);
          return _this;
        }
        _create_class(_class5, [
          {
            key: "bindMethods",
            value: function bindMethods() {
              this.mutate = this.mutate.bind(this);
              this.reset = this.reset.bind(this);
            }
          },
          {
            key: "setOptions",
            value: function setOptions(options) {
              var prevOptions = this.options;
              this.options = _class_private_field_get(this, _client2).defaultMutationOptions(options);
              if (!shallowEqualObjects(this.options, prevOptions)) {
                _class_private_field_get(this, _client2).getMutationCache().notify({
                  type: "observerOptionsUpdated",
                  mutation: _class_private_field_get(this, _currentMutation),
                  observer: this
                });
              }
              if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
                this.reset();
              } else if (_class_private_field_get(this, _currentMutation)?.state.status === "pending") {
                _class_private_field_get(this, _currentMutation).setOptions(this.options);
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              if (!this.hasListeners()) {
                _class_private_field_get(this, _currentMutation)?.removeObserver(this);
              }
            }
          },
          {
            key: "onMutationUpdate",
            value: function onMutationUpdate(action) {
              _class_private_method_get(this, _updateResult, updateResult).call(this);
              _class_private_method_get(this, _notify2, notify2).call(this, action);
            }
          },
          {
            key: "getCurrentResult",
            value: function getCurrentResult() {
              return _class_private_field_get(this, _currentResult2);
            }
          },
          {
            key: "reset",
            value: function reset() {
              _class_private_field_get(this, _currentMutation)?.removeObserver(this);
              _class_private_field_set(this, _currentMutation, void 0);
              _class_private_method_get(this, _updateResult, updateResult).call(this);
              _class_private_method_get(this, _notify2, notify2).call(this);
            }
          },
          {
            key: "mutate",
            value: function mutate(variables, options) {
              _class_private_field_set(this, _mutateOptions, options);
              _class_private_field_get(this, _currentMutation)?.removeObserver(this);
              _class_private_field_set(this, _currentMutation, _class_private_field_get(this, _client2).getMutationCache().build(_class_private_field_get(this, _client2), this.options));
              _class_private_field_get(this, _currentMutation).addObserver(this);
              return _class_private_field_get(this, _currentMutation).execute(variables);
            }
          }
        ]);
        return _class5;
      }(Subscribable), _class4);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/types.js
  var init_types2 = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/types.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/index.js
  var init_modern = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/index.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_queryClient();
      init_queryObserver();
      init_mutationObserver();
      init_notifyManager();
      init_types2();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/types.js
  var init_types3 = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/types.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
  var React4, QueryClientContext, useQueryClient, QueryClientProvider;
  var init_QueryClientProvider = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React4 = __toESM(require_react(), 1);
      init_jsxRuntime();
      QueryClientContext = React4.createContext(void 0);
      useQueryClient = (queryClient2) => {
        var client = React4.useContext(QueryClientContext);
        if (queryClient2) {
          return queryClient2;
        }
        if (!client) {
          throw new Error("No QueryClient set, use QueryClientProvider to set one");
        }
        return client;
      };
      QueryClientProvider = ({ client, children }) => {
        React4.useEffect(() => {
          client.mount();
          return () => {
            client.unmount();
          };
        }, [
          client
        ]);
        return /* @__PURE__ */ jsx(QueryClientContext.Provider, {
          value: client,
          children
        });
      };
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/isRestoring.js
  var React5, IsRestoringContext, useIsRestoring, IsRestoringProvider;
  var init_isRestoring = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/isRestoring.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React5 = __toESM(require_react(), 1);
      IsRestoringContext = React5.createContext(false);
      useIsRestoring = () => React5.useContext(IsRestoringContext);
      IsRestoringProvider = IsRestoringContext.Provider;
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
  function createValue() {
    var isReset = false;
    return {
      clearReset: () => {
        isReset = false;
      },
      reset: () => {
        isReset = true;
      },
      isReset: () => {
        return isReset;
      }
    };
  }
  var React6, QueryErrorResetBoundaryContext, useQueryErrorResetBoundary;
  var init_QueryErrorResetBoundary = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React6 = __toESM(require_react(), 1);
      init_jsxRuntime();
      QueryErrorResetBoundaryContext = React6.createContext(createValue());
      useQueryErrorResetBoundary = () => React6.useContext(QueryErrorResetBoundaryContext);
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/utils.js
  function shouldThrowError(throwError, params) {
    if (typeof throwError === "function") {
      return throwError(...params);
    }
    return !!throwError;
  }
  function noop2() {
  }
  var init_utils3 = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/utils.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
  var React7, ensurePreventErrorBoundaryRetry, useClearResetErrorBoundary, getHasError;
  var init_errorBoundaryUtils = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React7 = __toESM(require_react(), 1);
      init_utils3();
      ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
        if (options.suspense || options.throwOnError) {
          if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
          }
        }
      };
      useClearResetErrorBoundary = (errorResetBoundary) => {
        React7.useEffect(() => {
          errorResetBoundary.clearReset();
        }, [
          errorResetBoundary
        ]);
      };
      getHasError = ({ result, errorResetBoundary, throwOnError, query }) => {
        return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && shouldThrowError(throwOnError, [
          result.error,
          query
        ]);
      };
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/suspense.js
  var ensureSuspenseTimers, shouldSuspend, fetchOptimistic;
  var init_suspense = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/suspense.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      ensureSuspenseTimers = (defaultedOptions) => {
        if (defaultedOptions.suspense) {
          if (typeof defaultedOptions.staleTime !== "number") {
            defaultedOptions.staleTime = 1e3;
          }
          if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, 1e3);
          }
        }
      };
      shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
      fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
        errorResetBoundary.clearReset();
      });
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
  function useBaseQuery(options, Observer, queryClient2) {
    if (true) {
      if (typeof options !== "object" || Array.isArray(options)) {
        throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
      }
    }
    var client = useQueryClient(queryClient2);
    var isRestoring = useIsRestoring();
    var errorResetBoundary = useQueryErrorResetBoundary();
    var defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    ensureSuspenseTimers(defaultedOptions);
    ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
    useClearResetErrorBoundary(errorResetBoundary);
    var [observer] = React8.useState(() => new Observer(client, defaultedOptions));
    var result = observer.getOptimisticResult(defaultedOptions);
    React8.useSyncExternalStore(React8.useCallback((onStoreChange) => {
      var unsubscribe = isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange));
      observer.updateResult();
      return unsubscribe;
    }, [
      observer,
      isRestoring
    ]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
    React8.useEffect(() => {
      observer.setOptions(defaultedOptions, {
        listeners: false
      });
    }, [
      defaultedOptions,
      observer
    ]);
    if (shouldSuspend(defaultedOptions, result)) {
      throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
    }
    if (getHasError({
      result,
      errorResetBoundary,
      throwOnError: defaultedOptions.throwOnError,
      query: client.getQueryCache().get(defaultedOptions.queryHash)
    })) {
      throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
  }
  var React8;
  var init_useBaseQuery = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React8 = __toESM(require_react(), 1);
      init_modern();
      init_QueryErrorResetBoundary();
      init_QueryClientProvider();
      init_isRestoring();
      init_errorBoundaryUtils();
      init_suspense();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
  function useQuery(options, queryClient2) {
    return useBaseQuery(options, QueryObserver, queryClient2);
  }
  var init_useQuery = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_modern();
      init_useBaseQuery();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
  function useMutation(options, queryClient2) {
    var client = useQueryClient(queryClient2);
    var [observer] = React9.useState(() => new MutationObserver(client, options));
    React9.useEffect(() => {
      observer.setOptions(options);
    }, [
      observer,
      options
    ]);
    var result = React9.useSyncExternalStore(React9.useCallback((onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)), [
      observer
    ]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
    var mutate = React9.useCallback((variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop2);
    }, [
      observer
    ]);
    if (result.error && shouldThrowError(observer.options.throwOnError, [
      result.error
    ])) {
      throw result.error;
    }
    return {
      ...result,
      mutate,
      mutateAsync: result.mutate
    };
  }
  var React9;
  var init_useMutation = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React9 = __toESM(require_react(), 1);
      init_modern();
      init_QueryClientProvider();
      init_utils3();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/index.js
  var init_modern2 = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/index.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_modern();
      init_types3();
      init_useQuery();
      init_QueryClientProvider();
      init_useMutation();
    }
  });

  // src/core/ui/settings/pages/Addons/index.tsx
  var Addons_exports = {};
  __export(Addons_exports, {
    default: () => PluginBrowser
  });
  function getManifests() {
    return _getManifests.apply(this, arguments);
  }
  function _getManifests() {
    _getManifests = _async_to_generator(function* () {
      yield updateAllRepository();
      var plugins2 = [
        ...registeredPlugins.values()
      ];
      return plugins2.filter((p) => !isCorePlugin(p.id));
    });
    return _getManifests.apply(this, arguments);
  }
  function InstallButton(props) {
    var [installed, setInstalled] = (0, import_react9.useState)(isPluginInstalled(props.id));
    var installationState = useMutation({
      mutationFn: /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* ({ install }) {
          yield (install ? installPlugin : uninstallPlugin)(props.id, true);
        });
        return function(_2) {
          return _ref.apply(this, arguments);
        };
      }(),
      onSettled() {
        setInstalled(isPluginInstalled(props.id));
      },
      onError(error) {
        showToast(error instanceof Error ? error.message : String(error));
      }
    });
    return /* @__PURE__ */ jsx(Button, {
      size: "sm",
      loading: installationState.isPending,
      text: !installed ? "Install" : "Uninstall",
      onPress: () => installationState.mutate({
        install: !installed
      }),
      variant: !installed ? "primary" : "destructive",
      icon: findAssetId(!installed ? "DownloadIcon" : "TrashIcon")
    });
  }
  function TrailingButtons(props) {
    return /* @__PURE__ */ jsxs(Stack, {
      spacing: 8,
      direction: "horizontal",
      children: [
        /* @__PURE__ */ jsx(IconButton, {
          size: "sm",
          onPress: () => {
            showSheet("plugin-info", () => {
              return /* @__PURE__ */ jsx(ActionSheet, {
                children: /* @__PURE__ */ jsx(TableRowGroup, {
                  title: "Plugin Info",
                  children: /* @__PURE__ */ jsx(TableRow, {
                    label: "ID",
                    subLabel: props.id
                  })
                })
              });
            });
          },
          variant: "secondary",
          icon: findAssetId("CircleInformationIcon")
        }),
        /* @__PURE__ */ jsx(InstallButton, {
          id: props.id
        })
      ]
    });
  }
  function PluginCard2(props) {
    var { display, version } = props.manifest;
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native28.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native28.View, {
                style: {
                  flexShrink: 1
                },
                children: [
                  /* @__PURE__ */ jsx(Text, {
                    numberOfLines: 1,
                    variant: "heading-lg/semibold",
                    children: display.name
                  }),
                  /* @__PURE__ */ jsxs(Text, {
                    variant: "text-md/semibold",
                    color: "text-muted",
                    children: [
                      "by ",
                      display.authors?.map((a) => a.name).join(", ") || "Unknown",
                      " (",
                      version,
                      ")"
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx(import_react_native28.View, {
                children: /* @__PURE__ */ jsx(TrailingButtons, {
                  id: props.manifest.id
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            children: display.description
          })
        ]
      })
    });
  }
  function BrowserPage() {
    var navigation2 = NavigationNative.useNavigation();
    (0, import_react9.useEffect)(() => {
      navigation2.setOptions({
        title: "Plugin Browser",
        headerRight: () => /* @__PURE__ */ jsx(IconButton, {
          size: "sm",
          variant: "secondary",
          icon: findAssetId("PlusSmallIcon"),
          onPress: () => {
            showSheet("plugin-browser-options", PluginBrowserOptions);
          }
        })
      });
    }, [
      navigation2
    ]);
    var { data, error, isPending, refetch } = useQuery({
      queryKey: [
        "plugins-repo-fetch"
      ],
      queryFn: () => getManifests()
    });
    if (error) {
      return /* @__PURE__ */ jsx(import_react_native28.View, {
        style: {
          flex: 1,
          paddingHorizontal: 8,
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsxs(Card, {
          style: {
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(Text, {
              style: {
                textAlign: "center"
              },
              variant: "heading-lg/bold",
              children: "An error occured while fetching the repository!"
            }),
            /* @__PURE__ */ jsx(Text, {
              style: {
                textAlign: "center"
              },
              variant: "text-sm/medium",
              color: "text-muted",
              children: error instanceof Error ? error.message : String(error)
            }),
            /* @__PURE__ */ jsx(Button, {
              size: "lg",
              text: "Refetch",
              onPress: refetch,
              icon: findAssetId("RetryIcon")
            })
          ]
        })
      });
    }
    return /* @__PURE__ */ jsx(FlashList, {
      data,
      refreshing: isPending,
      onRefresh: refetch,
      estimatedItemSize: 136,
      contentContainerStyle: {
        paddingBottom: 90,
        paddingHorizontal: 5
      },
      renderItem: ({ item: manifest }) => /* @__PURE__ */ jsx(import_react_native28.View, {
        style: {
          paddingVertical: 6,
          paddingHorizontal: 8
        },
        children: /* @__PURE__ */ jsx(PluginCard2, {
          manifest
        })
      })
    });
  }
  function AddRepositoryAlert() {
    var [value, setValue] = (0, import_react9.useState)("");
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Add Repository",
      content: "Enter the URL of the repository you want to add.",
      extraContent: /* @__PURE__ */ jsx(TextInput, {
        value,
        onChange: setValue,
        placeholder: "https://example.com/repo.json"
      }),
      actions: /* @__PURE__ */ jsx(AlertActions, {
        children: /* @__PURE__ */ jsx(AlertActionButton2, {
          text: "Add",
          variant: "primary",
          disabled: !isValidHttpUrl(value),
          onPress: /* @__PURE__ */ _async_to_generator(function* () {
            try {
              yield updateRepository(value);
              showToast("Added repository!", findAssetId("Check"));
            } catch (e) {
              showToast("Failed to add repository!", findAssetId("Small"));
            } finally {
              dismissAlert("bunny-add-plugin-repository");
              showSheet("plugin-browser-options", PluginBrowserOptions);
            }
          })
        })
      })
    });
  }
  function PluginBrowserOptions() {
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(TableRowGroup, {
        title: "Repositories",
        children: [
          Object.keys(pluginRepositories).map((url2) => {
            return /* @__PURE__ */ jsx(RepositoryRow, {
              url: url2
            }, url2);
          }),
          /* @__PURE__ */ jsx(TableRow, {
            label: "Add Repository...",
            icon: /* @__PURE__ */ jsx(TableRow.Icon, {
              source: findAssetId("PlusMediumIcon")
            }),
            onPress: () => {
              openAlert("bunny-add-plugin-repository", /* @__PURE__ */ jsx(AddRepositoryAlert, {}));
              hideSheet("plugin-browser-options");
            }
          })
        ]
      })
    });
  }
  function RepositoryRow(props) {
    var repo = pluginRepositories[props.url];
    var isOfficial = props.url === OFFICIAL_PLUGINS_REPO_URL;
    return /* @__PURE__ */ jsx(TableRow, {
      label: isOfficial ? "Opti's Repository" : repo.$meta?.name ?? "Unknown",
      subLabel: props.url,
      trailing: /* @__PURE__ */ jsxs(Stack, {
        direction: "horizontal",
        children: [
          /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            variant: "secondary",
            icon: findAssetId("LinkIcon"),
            onPress: () => {
              clipboard.setString(props.url);
              showToast.showCopyToClipboard();
            }
          }),
          /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            variant: "destructive",
            disabled: isOfficial,
            icon: findAssetId("TrashIcon"),
            onPress: () => {
              openAlert("bunny-remove-repository", /* @__PURE__ */ jsx(AlertModal, {
                title: "Remove Repository",
                content: "Are you sure you want to remove this repository?",
                extraContent: /* @__PURE__ */ jsx(Card, {
                  children: /* @__PURE__ */ jsx(Text, {
                    variant: "text-md/normal",
                    children: props.url
                  })
                }),
                actions: /* @__PURE__ */ jsx(AlertActions, {
                  children: /* @__PURE__ */ jsx(AlertActionButton2, {
                    text: "Remove",
                    variant: "destructive",
                    onPress: /* @__PURE__ */ _async_to_generator(function* () {
                      yield deleteRepository(props.url);
                      showToast("Removed repository!", findAssetId("Trash"));
                      dismissAlert("bunny-remove-repository");
                    })
                  })
                })
              }));
            }
          })
        ]
      })
    });
  }
  function PluginBrowser() {
    return /* @__PURE__ */ jsx(QueryClientProvider, {
      client: queryClient,
      children: /* @__PURE__ */ jsx(BrowserPage, {})
    });
  }
  var import_react9, import_react_native28, queryClient;
  var init_Addons = __esm({
    "src/core/ui/settings/pages/Addons/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_plugins4();
      init_assets();
      init_alerts();
      init_wrappers2();
      init_sheets();
      init_toasts();
      init_constants();
      init_isValidHttpUrl();
      init_common();
      init_components();
      init_modern2();
      import_react9 = __toESM(require_react());
      import_react_native28 = __toESM(require_react_native());
      queryClient = new QueryClient();
    }
  });

  // src/core/ui/hooks/useFS.ts
  function useFileExists(path, prefix) {
    var [state, setState] = (0, import_react10.useState)(2);
    var check = () => fileExists(path, {
      prefix
    }).then((exists) => setState(exists ? 1 : 0)).catch(() => setState(3));
    var customFS = (0, import_react10.useMemo)(() => new Proxy(fs_exports, {
      get(target, p, receiver) {
        var val = Reflect.get(target, p, receiver);
        if (typeof val !== "function")
          return;
        return (...args) => {
          var promise = (check(), val(...args));
          if (promise?.constructor?.name === "Promise") {
            setState(2);
            promise.finally(check);
          }
          return promise;
        };
      }
    }), []);
    (0, import_react10.useEffect)(() => void check(), []);
    return [
      state,
      customFS
    ];
  }
  var import_react10, CheckState;
  var init_useFS = __esm({
    "src/core/ui/hooks/useFS.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_fs();
      import_react10 = __toESM(require_react());
      (function(CheckState2) {
        CheckState2[CheckState2["FALSE"] = 0] = "FALSE";
        CheckState2[CheckState2["TRUE"] = 1] = "TRUE";
        CheckState2[CheckState2["LOADING"] = 2] = "LOADING";
        CheckState2[CheckState2["ERROR"] = 3] = "ERROR";
      })(CheckState || (CheckState = {}));
    }
  });

  // src/core/ui/settings/pages/Developer/index.tsx
  var Developer_exports = {};
  __export(Developer_exports, {
    default: () => Developer
  });
  function Developer() {
    var [rdtFileExists, fs] = useFileExists("preloads/reactDevtools.js");
    var styles = useStyles4();
    var navigation2 = NavigationNative.useNavigation();
    useProxy(settings);
    useProxy(loaderConfig);
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(import_react_native29.ScrollView, {
        style: {
          flex: 1
        },
        contentContainerStyle: {
          paddingBottom: 38
        },
        children: /* @__PURE__ */ jsxs(Stack, {
          style: {
            paddingVertical: 24,
            paddingHorizontal: 12
          },
          spacing: 24,
          children: [
            /* @__PURE__ */ jsx(TextInput, {
              label: Strings.DEBUGGER_URL,
              placeholder: "127.0.0.1:9090",
              size: "md",
              leadingIcon: () => /* @__PURE__ */ jsx(LegacyFormText, {
                style: styles.leadingText,
                children: "ws://"
              }),
              defaultValue: settings.debuggerUrl,
              onChange: (v2) => settings.debuggerUrl = v2
            }),
            /* @__PURE__ */ jsxs(TableRowGroup, {
              title: Strings.DEBUG,
              children: [
                /* @__PURE__ */ jsx(TableRow, {
                  label: Strings.CONNECT_TO_DEBUG_WEBSOCKET,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("copy")
                  }),
                  onPress: () => connectToDebugger(settings.debuggerUrl)
                }),
                isReactDevToolsPreloaded() && /* @__PURE__ */ jsx(Fragment, {
                  children: /* @__PURE__ */ jsx(TableRow, {
                    label: Strings.CONNECT_TO_REACT_DEVTOOLS,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("ic_badge_staff")
                    }),
                    onPress: () => window[getReactDevToolsProp() || "__vendetta_rdc"]?.connectToDevTools({
                      host: settings.debuggerUrl.split(":")?.[0],
                      resolveRNStyle: import_react_native29.StyleSheet.flatten
                    })
                  })
                })
              ]
            }),
            isLoaderConfigSupported() && /* @__PURE__ */ jsx(Fragment, {
              children: /* @__PURE__ */ jsxs(TableRowGroup, {
                title: "Loader config",
                children: [
                  /* @__PURE__ */ jsx(TableSwitchRow, {
                    label: Strings.LOAD_FROM_CUSTOM_URL,
                    subLabel: Strings.LOAD_FROM_CUSTOM_URL_DEC,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("copy")
                    }),
                    value: loaderConfig.customLoadUrl.enabled,
                    onValueChange: (v2) => {
                      loaderConfig.customLoadUrl.enabled = v2;
                    }
                  }),
                  loaderConfig.customLoadUrl.enabled && /* @__PURE__ */ jsx(TableRow, {
                    label: /* @__PURE__ */ jsx(TextInput, {
                      defaultValue: loaderConfig.customLoadUrl.url,
                      size: "md",
                      onChange: (v2) => loaderConfig.customLoadUrl.url = v2,
                      placeholder: "http://localhost:4040/vendetta.js",
                      label: Strings.BUNNY_URL
                    })
                  }),
                  isReactDevToolsPreloaded() && isVendettaLoader() && /* @__PURE__ */ jsx(TableSwitchRow, {
                    label: Strings.LOAD_REACT_DEVTOOLS,
                    subLabel: `${Strings.VERSION}: ${getReactDevToolsVersion()}`,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("ic_badge_staff")
                    }),
                    value: loaderConfig.loadReactDevTools,
                    onValueChange: (v2) => {
                      loaderConfig.loadReactDevTools = v2;
                    }
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsxs(TableRowGroup, {
              title: "Other",
              children: [
                /* @__PURE__ */ jsx(TableRow, {
                  arrow: true,
                  label: Strings.ERROR_BOUNDARY_TOOLS_LABEL,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("ic_warning_24px")
                  }),
                  onPress: () => showSimpleActionSheet4({
                    key: "ErrorBoundaryTools",
                    header: {
                      title: "Which ErrorBoundary do you want to trip?",
                      icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                        style: {
                          marginRight: 8
                        },
                        source: findAssetId("ic_warning_24px")
                      }),
                      onClose: () => hideActionSheet3()
                    },
                    options: [
                      // @ts-expect-error
                      // Of course, to trigger an error, we need to do something incorrectly. The below will do!
                      {
                        label: Strings.BUNNY,
                        onPress: () => navigation2.push("BUNNY_CUSTOM_PAGE", {
                          render: () => /* @__PURE__ */ jsx("undefined", {})
                        })
                      },
                      {
                        label: "Discord",
                        isDestructive: true,
                        onPress: () => navigation2.push("BUNNY_CUSTOM_PAGE", {
                          noErrorBoundary: true
                        })
                      }
                    ]
                  })
                }),
                /* @__PURE__ */ jsx(TableRow, {
                  label: Strings.INSTALL_REACT_DEVTOOLS,
                  subLabel: Strings.RESTART_REQUIRED_TO_TAKE_EFFECT,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("DownloadIcon")
                  }),
                  trailing: /* @__PURE__ */ jsx(Button, {
                    size: "sm",
                    loading: rdtFileExists === CheckState.LOADING,
                    disabled: rdtFileExists === CheckState.LOADING,
                    variant: rdtFileExists === CheckState.TRUE ? "secondary" : "primary",
                    text: rdtFileExists === CheckState.TRUE ? Strings.UNINSTALL : Strings.INSTALL,
                    onPress: /* @__PURE__ */ _async_to_generator(function* () {
                      if (rdtFileExists === CheckState.FALSE) {
                        fs.downloadFile(RDT_EMBED_LINK, "preloads/reactDevtools.js");
                      } else if (rdtFileExists === CheckState.TRUE) {
                        fs.removeFile("preloads/reactDevtools.js");
                      }
                    }),
                    icon: findAssetId(rdtFileExists === CheckState.TRUE ? "ic_message_delete" : "DownloadIcon"),
                    style: {
                      marginLeft: 8
                    }
                  })
                }),
                /* @__PURE__ */ jsx(TableSwitchRow, {
                  label: Strings.ENABLE_EVAL_COMMAND,
                  subLabel: Strings.ENABLE_EVAL_COMMAND_DESC,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("PencilIcon")
                  }),
                  value: settings.enableEvalCommand,
                  onValueChange: (v2) => {
                    settings.enableEvalCommand = v2;
                  }
                })
              ]
            })
          ]
        })
      })
    });
  }
  var import_react_native29, hideActionSheet3, showSimpleActionSheet4, RDT_EMBED_LINK, useStyles4;
  var init_Developer = __esm({
    "src/core/ui/settings/pages/Developer/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_useFS();
      init_storage();
      init_assets();
      init_debug();
      init_loader();
      init_settings();
      init_lazy();
      init_common();
      init_components();
      init_wrappers();
      init_color();
      init_components2();
      init_styles();
      import_react_native29 = __toESM(require_react_native());
      ({ hideActionSheet: hideActionSheet3 } = lazyDestructure(() => findByProps("openLazy", "hideActionSheet")));
      ({ showSimpleActionSheet: showSimpleActionSheet4 } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
      RDT_EMBED_LINK = "https://raw.githubusercontent.com/amsyarasyiq/rdt-embedder/main/dist.js";
      useStyles4 = createStyles({
        leadingText: {
          ...TextStyleSheet["heading-md/semibold"],
          color: semanticColors.TEXT_MUTED,
          marginRight: -4
        }
      });
    }
  });

  // src/core/ui/settings/index.ts
  function initSettings() {
    registerSection({
      name: "Opti",
      items: [
        {
          key: "BUNNY",
          title: () => Strings.BUNNY,
          icon: {
            uri: OptiLogo_default
          },
          render: () => Promise.resolve().then(() => (init_General(), General_exports)),
          useTrailing: () => `(${"b387aa1-main"})`
        },
        {
          key: "BUNNY_PLUGINS",
          title: () => `${Strings.PLUGINS} & ${Strings.THEMES}`,
          icon: findAssetId("ActivitiesIcon"),
          render: () => Promise.resolve().then(() => (init_Plugins(), Plugins_exports))
        },
        {
          key: "BUNNY_FONTS",
          title: () => Strings.FONTS,
          icon: findAssetId("ic_add_text"),
          render: () => Promise.resolve().then(() => (init_Fonts(), Fonts_exports)),
          usePredicate: () => isFontSupported()
        },
        {
          key: "OPTI_ADDON_HUB",
          title: () => Strings.ADDON_HUB,
          icon: findAssetId("DownloadIcon"),
          render: () => Promise.resolve().then(() => (init_Addons(), Addons_exports))
        },
        {
          key: "BUNNY_DEVELOPER",
          title: () => Strings.DEVELOPER,
          icon: findAssetId("WrenchIcon"),
          render: () => Promise.resolve().then(() => (init_Developer(), Developer_exports)),
          usePredicate: () => useProxy(settings).developerSettings ?? false
        }
      ]
    });
    registerSection({
      name: "Vendetta",
      items: []
    });
  }
  var init_settings3 = __esm({
    "src/core/ui/settings/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_OptiLogo();
      init_i18n();
      init_storage();
      init_assets();
      init_loader();
      init_settings();
      init_settings2();
    }
  });

  // globals:lodash
  var require_lodash = __commonJS({
    "globals:lodash"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["lodash"];
    }
  });

  // globals:util
  var require_util = __commonJS({
    "globals:util"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["util"];
    }
  });

  // src/core/vendetta/api.tsx
  var import_react11, import_react_native30, initVendettaObject;
  var init_api3 = __esm({
    "src/core/vendetta/api.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_alerts2();
      init_storage();
      init_storage();
      init_themes();
      init_assets();
      init_commands();
      init_debug();
      init_loader();
      init_patcher();
      init_settings();
      init_utils();
      init_cyrb64();
      init_logger();
      init_metro();
      init_common();
      init_components();
      init_components();
      init_color();
      init_components2();
      init_styles();
      init_toasts();
      init_dist();
      import_react11 = __toESM(require_react());
      import_react_native30 = __toESM(require_react_native());
      init_plugins();
      initVendettaObject = () => {
        var createStackBasedFilter = (fn) => {
          return (filter) => {
            return fn(factories_exports.createSimpleFilter(filter, cyrb64Hash(new Error().stack)));
          };
        };
        var api = window.vendetta = {
          patcher: {
            before: patcher_default.before,
            after: patcher_default.after,
            instead: patcher_default.instead
          },
          metro: {
            modules: window.modules,
            find: createStackBasedFilter(findExports),
            findAll: createStackBasedFilter(findAllExports),
            findByProps: (...props) => {
              if (props.length === 1 && props[0] === "KeyboardAwareScrollView") {
                props.push("listenToKeyboardEvents");
              }
              var ret = findByProps(...props);
              if (ret == null) {
                if (props.includes("ActionSheetTitleHeader")) {
                  var module = findByProps("ActionSheetRow");
                  return {
                    ...module,
                    ActionSheetTitleHeader: module.BottomSheetTitleHeader,
                    ActionSheetContentContainer: ({ children }) => {
                      (0, import_react11.useEffect)(() => console.warn("Discord has removed 'ActionSheetContentContainer', please move into something else. This has been temporarily replaced with View"), []);
                      return /* @__PURE__ */ (0, import_react11.createElement)(import_react_native30.View, null, children);
                    }
                  };
                }
              }
              return ret;
            },
            findByPropsAll: (...props) => findByPropsAll(...props),
            findByName: (name, defaultExp) => {
              if (name === "create" && typeof defaultExp === "undefined") {
                return findByName("create", false).default;
              }
              return findByName(name, defaultExp ?? true);
            },
            findByNameAll: (name, defaultExp = true) => findByNameAll(name, defaultExp),
            findByDisplayName: (displayName, defaultExp = true) => findByDisplayName(displayName, defaultExp),
            findByDisplayNameAll: (displayName, defaultExp = true) => findByDisplayNameAll(displayName, defaultExp),
            findByTypeName: (typeName, defaultExp = true) => findByTypeName(typeName, defaultExp),
            findByTypeNameAll: (typeName, defaultExp = true) => findByTypeNameAll(typeName, defaultExp),
            findByStoreName: (name) => findByStoreName(name),
            common: {
              constants,
              channels,
              i18n,
              url,
              toasts,
              stylesheet: {
                createThemedStyleSheet
              },
              clipboard,
              assets,
              invites,
              commands,
              navigation,
              navigationStack,
              NavigationNative,
              Flux,
              FluxDispatcher,
              React: React2,
              ReactNative,
              moment: require_moment(),
              chroma: require_chroma_js(),
              lodash: require_lodash(),
              util: require_util()
            }
          },
          constants: {
            DISCORD_SERVER: "https://discord.gg/n9QQ4XhhJP",
            GITHUB: "https://github.com/Opti-mod",
            PROXY_PREFIX: "https://vd-plugins.github.io/proxy",
            HTTP_REGEX: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
            HTTP_REGEX_MULTI: /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)/g,
            DISCORD_SERVER_ID: "1015931589865246730",
            PLUGINS_CHANNEL_ID: "1091880384561684561",
            THEMES_CHANNEL_ID: "1091880434939482202"
          },
          utils: {
            findInReactTree: (tree, filter) => findInReactTree(tree, filter),
            findInTree: (tree, filter, options) => findInTree(tree, filter, options),
            safeFetch: (input, options, timeout) => safeFetch(input, options, timeout),
            unfreeze: (obj) => Object.isFrozen(obj) ? {
              ...obj
            } : obj,
            without: (object, ...keys) => omit(object, keys)
          },
          debug: {
            connectToDebugger: (url2) => connectToDebugger(url2),
            getDebugInfo: () => getDebugInfo()
          },
          ui: {
            components: {
              Forms,
              General: ReactNative,
              Alert: LegacyAlert,
              Button: CompatButton,
              HelpMessage: (...props) => /* @__PURE__ */ jsx(HelpMessage, {
                ...props
              }),
              SafeAreaView: (...props) => /* @__PURE__ */ jsx(SafeAreaView, {
                ...props
              }),
              Summary,
              ErrorBoundary,
              Codeblock,
              Search: Search_default
            },
            toasts: {
              showToast: (content, asset) => showToast(content, asset)
            },
            alerts: {
              showConfirmationAlert: (options) => showConfirmationAlert(options),
              showCustomAlert: (component, props) => showCustomAlert(component, props),
              showInputAlert: (options) => showInputAlert(options)
            },
            assets: {
              all: new Proxy({}, {
                get(cache, p) {
                  if (typeof p !== "string")
                    return void 0;
                  if (cache[p])
                    return cache[p];
                  for (var asset of iterateAssets()) {
                    if (asset.name)
                      return cache[p] = asset;
                  }
                },
                ownKeys(cache) {
                  var keys = /* @__PURE__ */ new Set();
                  for (var asset of iterateAssets()) {
                    cache[asset.name] = asset;
                    keys.add(asset.name);
                  }
                  return [
                    ...keys
                  ];
                }
              }),
              find: (filter) => findAsset(filter),
              getAssetByName: (name) => findAsset(name),
              getAssetByID: (id) => findAsset(id),
              getAssetIDByName: (name) => findAssetId(name)
            },
            semanticColors,
            rawColors
          },
          plugins: {
            plugins: VdPluginManager.plugins,
            fetchPlugin: (source) => VdPluginManager.fetchPlugin(source),
            installPlugin: (source, enabled = true) => VdPluginManager.installPlugin(source, enabled),
            startPlugin: (id) => VdPluginManager.startPlugin(id),
            stopPlugin: (id, disable = true) => VdPluginManager.stopPlugin(id, disable),
            removePlugin: (id) => VdPluginManager.removePlugin(id),
            getSettings: (id) => VdPluginManager.getSettings(id)
          },
          themes: {
            themes,
            fetchTheme: (id, selected) => fetchTheme(id, selected),
            installTheme: (id) => installTheme(id),
            selectTheme: (id) => selectTheme(id === "default" ? null : themes[id]),
            removeTheme: (id) => removeTheme(id),
            getCurrentTheme: () => getThemeFromLoader(),
            updateThemes: () => updateThemes()
          },
          commands: {
            registerCommand
          },
          storage: {
            createProxy: (target) => createProxy(target),
            useProxy: (_storage) => useProxy(_storage),
            createStorage: (backend) => createStorage(backend),
            wrapSync: (store) => wrapSync(store),
            awaitSyncWrapper: (store) => awaitStorage(store),
            createMMKVBackend: (store) => createMMKVBackend(store),
            createFileBackend: (file) => {
              if (isPyonLoader() && file === "vendetta_theme.json") {
                file = "pyoncord/current-theme.json";
              }
              return createFileBackend(file);
            }
          },
          settings,
          loader: {
            identity: getVendettaLoaderIdentity() ?? void 0,
            config: loaderConfig
          },
          logger: {
            log: (...message) => console.log(...message),
            info: (...message) => console.info(...message),
            warn: (...message) => console.warn(...message),
            error: (...message) => console.error(...message),
            time: (...message) => console.time(...message),
            trace: (...message) => console.trace(...message),
            verbose: (...message) => console.log(...message)
          },
          version: versionHash,
          unload: () => {
            delete window.vendetta;
          }
        };
        return () => api.unload();
      };
    }
  });

  // src/global.d.ts
  var init_global_d = __esm({
    "src/global.d.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/modules.d.ts
  var init_modules_d = __esm({
    "src/modules.d.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/ui/index.ts
  var ui_exports = {};
  __export(ui_exports, {
    alerts: () => alerts_exports,
    components: () => components_exports2,
    settings: () => settings_exports2,
    sheets: () => sheets_exports,
    styles: () => styles_exports,
    toasts: () => toasts_exports
  });
  var init_ui = __esm({
    "src/lib/ui/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_alerts();
      init_components2();
      init_settings2();
      init_sheets();
      init_styles();
      init_toasts();
    }
  });

  // src/lib/index.ts
  var lib_exports = {};
  __export(lib_exports, {
    _jsx: () => jsxRuntime_exports,
    api: () => api_exports,
    fonts: () => fonts_exports,
    managers: () => managers,
    metro: () => metro_exports,
    plugins: () => plugins_exports2,
    themes: () => themes_exports,
    ui: () => ui_exports,
    unload: () => unload,
    utils: () => utils_exports
  });
  function unload() {
    for (var d of _disposer)
      if (typeof d === "function")
        d();
    delete window.bunny;
  }
  var managers, _disposer;
  var init_lib = __esm({
    "src/lib/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_global_d();
      init_modules_d();
      init_fonts();
      init_plugins4();
      init_themes();
      init_api();
      init_ui();
      init_utils();
      init_metro();
      init_fonts();
      init_plugins4();
      init_themes();
      init_jsxRuntime();
      init_lazy();
      managers = proxyLazy(() => {
        console.warn("bunny.managers.* is deprecated, and moved the top level (bunny.*). bunny.managers will be eventually removed soon");
        return {
          get fonts() {
            return fonts_exports;
          },
          get plugins() {
            return plugins_exports2;
          },
          get themes() {
            return themes_exports;
          }
        };
      }, {
        hint: "object"
      });
      _disposer = [];
      unload.push = (fn) => {
        _disposer.push(fn);
      };
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });
  var src_default;
  var init_src = __esm({
    "src/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_patchErrorBoundary();
      init_fixes();
      init_i18n();
      init_settings3();
      init_api3();
      init_plugins();
      init_fonts();
      init_plugins4();
      init_themes();
      init_commands();
      init_debug();
      init_flux();
      init_jsx();
      init_logger();
      init_settings2();
      init_lib();
      src_default = /* @__PURE__ */ _async_to_generator(function* () {
        yield Promise.all([
          initThemes(),
          injectFluxInterceptor(),
          patchSettings(),
          patchLogHook(),
          patchCommands(),
          patchJsx(),
          initVendettaObject(),
          initFetchI18nStrings(),
          initSettings(),
          fixes_default(),
          patchErrorBoundary(),
          updatePlugins()
        ]).then(
          // Push them all to unloader
          (u) => u.forEach((f) => f && unload.push(f))
        );
        window.bunny = lib_exports;
        VdPluginManager.initPlugins().then((u) => unload.push(u)).catch(() => alert("Failed to initialize Vendetta plugins"));
        initPlugins();
        updateFonts();
        logger.log("Opti is ready!");
      });
    }
  });

  // src/entry.ts
  init_asyncIteratorSymbol();
  init_promiseAllSettled();
  init_async_to_generator();
  var { instead: instead3 } = require_cjs();
  globalThis.window = globalThis;
  function initializeBunny() {
    return _initializeBunny.apply(this, arguments);
  }
  function _initializeBunny() {
    _initializeBunny = _async_to_generator(function* () {
      try {
        Object.freeze = Object.seal = Object;
        yield (init_caches(), __toCommonJS(caches_exports)).initMetroCache();
        yield (init_src(), __toCommonJS(src_exports)).default();
      } catch (e) {
        var { ClientInfoManager } = (init_modules(), __toCommonJS(modules_exports));
        var stack = e instanceof Error ? e.stack : void 0;
        console.log(stack ?? e?.toString?.() ?? e);
        alert([
          "Failed to load Opti!\n",
          `Build Number: ${ClientInfoManager.Build}`,
          `Opti: ${"b387aa1-main"}`,
          stack || e?.toString?.()
        ].join("\n"));
      }
    });
    return _initializeBunny.apply(this, arguments);
  }
  if (typeof globalThis.__r !== "undefined") {
    initializeBunny();
  } else {
    var onceIndexRequired = function(originalRequire) {
      var batchedBridge = window.__fbBatchedBridge;
      var callQueue = new Array();
      var unpatchHook = instead3("callFunctionReturnFlushedQueue", batchedBridge, (args, orig) => {
        if (args[0] === "AppRegistry" || !batchedBridge.getCallableModule(args[0])) {
          callQueue.push(args);
          return batchedBridge.flushedQueue();
        }
        return orig.apply(batchedBridge, args);
      });
      var startDiscord = /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* () {
          yield initializeBunny();
          unpatchHook();
          originalRequire(0);
          callQueue.forEach((arg) => batchedBridge.getCallableModule(arg[0]) && batchedBridge.__callFunction(...arg));
        });
        return function startDiscord2() {
          return _ref.apply(this, arguments);
        };
      }();
      startDiscord();
    };
    onceIndexRequired2 = onceIndexRequired;
    Object.defineProperties(globalThis, {
      __r: {
        configurable: true,
        get: () => _requireFunc,
        set(v2) {
          _requireFunc = function patchedRequire(a) {
            if (a === 0) {
              if (window.modules instanceof Map) {
                window.modules = Object.fromEntries([
                  ...window.modules
                ]);
              }
              onceIndexRequired(v2);
              _requireFunc = v2;
            } else
              return v2(a);
          };
        }
      },
      __d: {
        configurable: true,
        get() {
          if (window.Object && !window.modules) {
            window.modules = window.__c?.();
          }
          return this.value;
        },
        set(v2) {
          this.value = v2;
        }
      }
    });
  }
  var _requireFunc;
  var onceIndexRequired2;
})();
//# sourceURL=bunny
