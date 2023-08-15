/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! on-change */ "./node_modules/on-change/index.js");
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/index.js */ "./src/locales/index.js");




// BEGIN (write your solution here)
const languages = ['en', 'ru'];

const handleSwitchLanguage = (state) => (evt) => {
  const { lng } = evt.target.dataset;

  state.lng = lng;
};

const render = (container, watchedState, i18nInstance) => {
  const lngToggler = document.createElement('div');
  lngToggler.classList.add('btn-group');
  lngToggler.setAttribute('role', 'group');

  languages.forEach((lng) => {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    const className = watchedState.lng === lng ? 'btn-primary' : 'btn-outline-primary';
    btn.classList.add('btn', 'mb-3', className);
    btn.setAttribute('data-lng', lng);
    btn.textContent = i18nInstance.t(`languages.${lng}`);
    btn.addEventListener('click', handleSwitchLanguage(watchedState));
    lngToggler.appendChild(btn);
  });

  const counter = document.createElement('button');
  counter.setAttribute('type', 'button');
  counter.classList.add('btn', 'btn-info', 'btn-lg', 'mb-3', 'align-self-center');
  counter.textContent = i18nInstance.t('buttons.counter.count', { count: watchedState.clicksCount });
  counter.addEventListener('click', () => {
    watchedState.clicksCount += 1;
  });

  const reset = document.createElement('button');
  reset.setAttribute('type', 'button');
  reset.classList.add('btn', 'btn-warning');
  reset.textContent = i18nInstance.t('buttons.reset');
  reset.addEventListener('click', () => {
    watchedState.clicksCount = 0;
  });

  container.innerHTML = '';
  container.append(lngToggler, counter, reset);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  const defaultLanguage = 'en';
  // каждый запуск приложения создаёт свой собственный объект i18n и работает с ним,
  // не меняя глобальный объект.
  const i18nInstance = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].createInstance();
  await i18nInstance.init({
    lng: defaultLanguage,
    debug: false,
    resources: _locales_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  });

  const state = {
    lng: defaultLanguage,
    clicksCount: 0,
  };

  const container = document.querySelector('.terminal');

  const watchedState = (0,on_change__WEBPACK_IMPORTED_MODULE_1__["default"])(state, (path, value) => {
    switch (path) {
      // инициализированный объект i18n прокидывается параметром в рендер, чтобы использовать t.
      case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
        break;

      case 'clicksCount': render(container, watchedState, i18nInstance);
        break;

      default:
        break;
    }
  });

  render(container, watchedState, i18nInstance);
});


/***/ }),

/***/ "./src/locales/eng.js":
/*!****************************!*\
  !*** ./src/locales/eng.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  tranlastion: {
    languages: {
      en: 'English',
      ru: 'Русский',
    },
  },
});


/***/ }),

/***/ "./src/locales/index.js":
/*!******************************!*\
  !*** ./src/locales/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eng.js */ "./src/locales/eng.js");
/* harmony import */ var _ru_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ru.js */ "./src/locales/ru.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ en: _eng_js__WEBPACK_IMPORTED_MODULE_0__["default"], ru: _ru_js__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "./src/locales/ru.js":
/*!***************************!*\
  !*** ./src/locales/ru.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  tranlastion: {
    languages: {
      en: 'English',
      ru: 'Русский',
    },
  },
});


/***/ }),

/***/ "./node_modules/i18next/dist/esm/i18next.js":
/*!**************************************************!*\
  !*** ./node_modules/i18next/dist/esm/i18next.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLanguage: () => (/* binding */ changeLanguage),
/* harmony export */   createInstance: () => (/* binding */ createInstance),
/* harmony export */   "default": () => (/* binding */ instance),
/* harmony export */   dir: () => (/* binding */ dir),
/* harmony export */   exists: () => (/* binding */ exists),
/* harmony export */   getFixedT: () => (/* binding */ getFixedT),
/* harmony export */   hasLoadedNamespace: () => (/* binding */ hasLoadedNamespace),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   loadLanguages: () => (/* binding */ loadLanguages),
/* harmony export */   loadNamespaces: () => (/* binding */ loadNamespaces),
/* harmony export */   loadResources: () => (/* binding */ loadResources),
/* harmony export */   reloadResources: () => (/* binding */ reloadResources),
/* harmony export */   setDefaultNamespace: () => (/* binding */ setDefaultNamespace),
/* harmony export */   t: () => (/* binding */ t),
/* harmony export */   use: () => (/* binding */ use)
/* harmony export */ });
const consoleLogger = {
  type: 'logger',
  log(args) {
    this.output('log', args);
  },
  warn(args) {
    this.output('warn', args);
  },
  error(args) {
    this.output('error', args);
  },
  output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, 'log', '', true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, 'warn', '', true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, 'error', '');
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (typeof args[0] === 'string') args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();

class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(' ').forEach(event => {
      this.observers[event] = this.observers[event] || [];
      this.observers[event].push(listener);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event] = this.observers[event].filter(l => l !== listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = [].concat(this.observers[event]);
      cloned.forEach(observer => {
        observer(...args);
      });
    }
    if (this.observers['*']) {
      const cloned = [].concat(this.observers['*']);
      cloned.forEach(observer => {
        observer.apply(observer, [event, ...args]);
      });
    }
  }
}

function defer() {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(m => {
    if (s[m]) t[m] = s[m];
  });
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }
  const stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    const key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  const value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (const prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, s => _entityMap[s]);
  }
  return data;
}
const chars = [' ', ',', '?', '!', ';'];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  const possibleChars = chars.filter(c => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = new RegExp(`(${possibleChars.map(c => c === '?' ? '\\?' : c).join('|')})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function deepFind(obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  const paths = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < paths.length; ++i) {
    if (!current) return undefined;
    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }
    if (current[paths[i]] === undefined) {
      let j = 2;
      let p = paths.slice(i, i + j).join(keySeparator);
      let mix = current[p];
      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }
      if (mix === undefined) return undefined;
      if (mix === null) return null;
      if (path.endsWith(p)) {
        if (typeof mix === 'string') return mix;
        if (p && typeof mix[p] === 'string') return mix[p];
      }
      const joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
      return undefined;
    }
    current = current[paths[i]];
  }
  return current;
}
function getCleanedCode(code) {
  if (code && code.indexOf('_') > 0) return code.replace('_', '-');
  return code;
}

class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path = [lng, ns];
    if (key && typeof key !== 'string') path = path.concat(key);
    if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    }
    const result = getPath(this.data, path);
    if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit('added', lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
      silent: false
    };
    let path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit('removed', lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === 'v1') return {
      ...{},
      ...this.getResource(lng, ns)
    };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find(v => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}

var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach(processor => {
      if (this.processors[processor]) value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, this);
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    this.logger = baseLogger.create('translator');
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    if (key === undefined || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== undefined;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === 'string') namespaces = [namespaces];
    return {
      key,
      namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== 'object' && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === 'object') options = {
      ...options
    };
    if (!options) options = {};
    if (keys === undefined || keys === null) return '';
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    const joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = resType === '[object Array]';
        const copy = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy[m] === deepKey) copy[m] = res[m];
          }
        }
        res = copy;
      }
    } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : '';
      const defaultValue = options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit('missingKey', l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(language => {
              this.pluralResolver.getSuffixes(language, options).forEach(suffix => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== 'v1') {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : undefined);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== 'v1' && resolved && resolved.res) options.lng = resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey && lastKey[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
    if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: resolved,
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (typeof keys === 'string') keys = [keys];
    keys.forEach(k => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach(ns => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        }
        codes.forEach(code => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  static hasDefaultValue(options) {
    const prefix = 'defaultValue';
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
        return true;
      }
    }
    return false;
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return null;
    const p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === 'x') return null;
    return this.formatLanguageCode(p.join('-'));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return code;
    const p = code.split('-');
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (typeof code === 'string' && code.indexOf('-') > -1) {
      const specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let p = code.split('-');
      if (this.options.lowerCaseLng) {
        p = p.map(part => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join('-');
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach(code => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach(code => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find(supportedLng => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
          if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
    if (typeof fallbacks === 'string') fallbacks = [fallbacks];
    if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = c => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (typeof code === 'string' && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === 'string') {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach(fc => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}

let sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
let _rulesPluralsTypes = {
  1: function (n) {
    return Number(n > 1);
  },
  2: function (n) {
    return Number(n != 1);
  },
  3: function (n) {
    return 0;
  },
  4: function (n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function (n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function (n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function (n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function (n) {
    return Number(n >= 2);
  },
  10: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function (n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function (n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function (n) {
    return Number(n !== 0);
  },
  14: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function (n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function (n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function (n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function (n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function (n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function (n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function (n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
const nonIntlVersions = ['v1', 'v2', 'v3'];
const intlVersions = ['v4'];
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  const rules = {};
  sets.forEach(set => {
    set.lngs.forEach(l => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }
    this.rules = createRules();
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      try {
        return new Intl.PluralRules(getCleanedCode(code), {
          type: options.ordinal ? 'ordinal' : 'cardinal'
        });
      } catch {
        return;
      }
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.getSuffixes(code, options).map(suffix => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map(pluralCategory => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
    }
    return rule.numbers.map(number => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return '';
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = 'plural';
      } else if (suffix === 1) {
        suffix = '';
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === 'v1') {
      if (suffix === 1) return '';
      if (typeof suffix === 'number') return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === 'v2') {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
}

function deepFindWithDefaults(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && typeof key === 'string') {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
}
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || (value => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const iOpts = options.interpolation;
    this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
    this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
    this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
    this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
    this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
    this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const regexpStr = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(regexpStr, 'g');
    const regexpUnescapeStr = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
    const nestingRegexpStr = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function regexSafe(val) {
      return val.replace(/\$/g, '$$$$');
    }
    const handleFormat = key => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, undefined, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: val => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: val => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach(todo => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            const temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = '';
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    function handleHasOptions(key, inheritedOptions) {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      delete clonedOptions.defaultValue;
      return key;
    }
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== 'string' ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map(elem => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && typeof value !== 'string') return value;
      if (typeof value !== 'string') value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = '';
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}

function parseFormatStr(formatStr) {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    const p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(';');
      opts.forEach(opt => {
        if (!opt) return;
        const [key, ...rest] = opt.split(':');
        const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
        if (val === 'false') formatOptions[key.trim()] = false;
        if (val === 'true') formatOptions[key.trim()] = true;
        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  const cache = {};
  return function invokeFormatter(val, lng, options) {
    const key = lng + JSON.stringify(options);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: 'currency'
        });
        return val => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val, opt.range || 'day');
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    const iOpts = options.interpolation;
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}

function removePending(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
}
class Connector extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create('backendConnector');
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach(lng => {
      let hasAllNamespaces = true;
      namespaces.forEach(ns => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ; else if (this.state[name] === 1) {
          if (pending[name] === undefined) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === undefined) pending[name] = true;
          if (toLoad[name] === undefined) toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit('failedLoading', lng, ns, err);
    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }
    this.state[name] = err ? -1 : 2;
    const loaded = {};
    this.queue.forEach(q => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach(l => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach(n => {
              if (loaded[l][n] === undefined) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit('loaded', loaded);
    this.queue = this.queue.filter(q => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : undefined;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === 'function') {
          r.then(data => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : undefined;
    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach(name => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, 'read', undefined, undefined, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
      return;
    }
    if (key === undefined || key === null || key === '') return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === 'function') {
            r.then(data => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      let ret = {};
      if (typeof args[1] === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];
      if (typeof args[2] === 'object' || typeof args[3] === 'object') {
        const options = args[3] || args[2];
        Object.keys(options).forEach(key => {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: (value, format, lng, options) => value,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  return options;
}

function noop() {}
function bindMemberFunctions(inst) {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(mem => {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (typeof options.ns === 'string') {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf('translation') < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== 'v1') {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    }
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== 'undefined') {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on('*', function (event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach(m => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn('init: no languageDetector is used and no lng is defined');
    }
    const storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(fcName => {
      this[fcName] = function () {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
    storeApiChained.forEach(fcName => {
      this[fcName] = function () {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log('initialized', this.options);
        this.emit('initialized', this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = typeof language === 'string' ? language : this.language;
    if (typeof language === 'function') usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
      const toLoad = [];
      const append = lng => {
        if (!lng) return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(l => {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(l => append(l));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach(l => append(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, e => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, err => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    if (module.type === 'backend') {
      this.modules.backend = module;
    }
    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }
    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }
    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === 'formatter') {
      this.modules.formatter = module;
    }
    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (['cimode', 'dev'].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit('languageChanging', lng);
    const setLngProps = l => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = undefined;
        this.emit('languageChanged', l);
        this.logger.log('languageChanged', l);
      } else {
        this.isLanguageChangingTo = undefined;
      }
      deferred.resolve(function () {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function () {
        return _this2.t(...arguments);
      });
    };
    const setLng = lngs => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l = typeof lngs === 'string' ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage) this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, err => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function (key, opts) {
      let options;
      if (typeof opts !== 'object') {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || '.';
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map(k => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (typeof lng === 'string') {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (typeof ns === 'string') ns = [ns];
    ns.forEach(n => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (typeof lngs === 'string') lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter(lng => preloaded.indexOf(lng) < 0);
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng) return 'rtl';
    const rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(m => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on('*', function (event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

const createInstance = instance.createInstance;
const dir = instance.dir;
const init = instance.init;
const loadResources = instance.loadResources;
const reloadResources = instance.reloadResources;
const use = instance.use;
const changeLanguage = instance.changeLanguage;
const getFixedT = instance.getFixedT;
const t = instance.t;
const exists = instance.exists;
const setDefaultNamespace = instance.setDefaultNamespace;
const hasLoadedNamespace = instance.hasLoadedNamespace;
const loadNamespaces = instance.loadNamespaces;
const loadLanguages = instance.loadLanguages;




/***/ }),

/***/ "./node_modules/on-change/index.js":
/*!*****************************************!*\
  !*** ./node_modules/on-change/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/constants.js */ "./node_modules/on-change/lib/constants.js");
/* harmony import */ var _lib_is_builtin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/is-builtin.js */ "./node_modules/on-change/lib/is-builtin.js");
/* harmony import */ var _lib_path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/path.js */ "./node_modules/on-change/lib/path.js");
/* harmony import */ var _lib_is_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/is-symbol.js */ "./node_modules/on-change/lib/is-symbol.js");
/* harmony import */ var _lib_is_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/is-iterator.js */ "./node_modules/on-change/lib/is-iterator.js");
/* harmony import */ var _lib_wrap_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/wrap-iterator.js */ "./node_modules/on-change/lib/wrap-iterator.js");
/* harmony import */ var _lib_ignore_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ignore-property.js */ "./node_modules/on-change/lib/ignore-property.js");
/* harmony import */ var _lib_cache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/cache.js */ "./node_modules/on-change/lib/cache.js");
/* harmony import */ var _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/smart-clone/smart-clone.js */ "./node_modules/on-change/lib/smart-clone/smart-clone.js");
/* eslint-disable unicorn/prefer-spread */










const defaultOptions = {
	equals: Object.is,
	isShallow: false,
	pathAsArray: false,
	ignoreSymbols: false,
	ignoreUnderscores: false,
	ignoreDetached: false,
	details: false,
};

const onChange = (object, onChange, options = {}) => {
	options = {
		...defaultOptions,
		...options,
	};

	const proxyTarget = Symbol('ProxyTarget');
	const {equals, isShallow, ignoreDetached, details} = options;
	const cache = new _lib_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"](equals);
	const hasOnValidate = typeof options.onValidate === 'function';
	const smartClone = new _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_8__["default"](hasOnValidate);

	// eslint-disable-next-line max-params
	const validate = (target, property, value, previous, applyData) => !hasOnValidate
		|| smartClone.isCloning
		|| options.onValidate(_lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(cache.getPath(target), property), value, previous, applyData) === true;

	const handleChangeOnTarget = (target, property, value, previous) => {
		if (
			!(0,_lib_ignore_property_js__WEBPACK_IMPORTED_MODULE_6__["default"])(cache, options, property)
			&& !(ignoreDetached && cache.isDetached(target, object))
		) {
			handleChange(cache.getPath(target), property, value, previous);
		}
	};

	// eslint-disable-next-line max-params
	const handleChange = (changePath, property, value, previous, applyData) => {
		if (smartClone.isCloning) {
			smartClone.update(changePath, property, previous);
		} else {
			onChange(_lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(changePath, property), value, previous, applyData);
		}
	};

	const getProxyTarget = value => value
		? (value[proxyTarget] || value)
		: value;

	const prepareValue = (value, target, property, basePath) => {
		if (
			(0,_lib_is_builtin_js__WEBPACK_IMPORTED_MODULE_1__.isBuiltinWithoutMutableMethods)(value)
			|| property === 'constructor'
			|| (isShallow && !_lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_8__["default"].isHandledMethod(target, property))
			|| (0,_lib_ignore_property_js__WEBPACK_IMPORTED_MODULE_6__["default"])(cache, options, property)
			|| cache.isGetInvariant(target, property)
			|| (ignoreDetached && cache.isDetached(target, object))
		) {
			return value;
		}

		if (basePath === undefined) {
			basePath = cache.getPath(target);
		}

		return cache.getProxy(value, _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(basePath, property), handler, proxyTarget);
	};

	const handler = {
		get(target, property, receiver) {
			if ((0,_lib_is_symbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(property)) {
				if (property === proxyTarget || property === _lib_constants_js__WEBPACK_IMPORTED_MODULE_0__.TARGET) {
					return target;
				}

				if (
					property === _lib_constants_js__WEBPACK_IMPORTED_MODULE_0__.UNSUBSCRIBE
					&& !cache.isUnsubscribed
					&& cache.getPath(target).length === 0
				) {
					cache.unsubscribe();
					return target;
				}
			}

			const value = (0,_lib_is_builtin_js__WEBPACK_IMPORTED_MODULE_1__.isBuiltinWithMutableMethods)(target)
				? Reflect.get(target, property)
				: Reflect.get(target, property, receiver);

			return prepareValue(value, target, property);
		},

		set(target, property, value, receiver) {
			value = getProxyTarget(value);

			const reflectTarget = target[proxyTarget] || target;
			const previous = reflectTarget[property];

			if (equals(previous, value) && property in target) {
				return true;
			}

			const isValid = validate(target, property, value, previous);

			if (
				isValid
				&& cache.setProperty(reflectTarget, property, value, receiver, previous)
			) {
				handleChangeOnTarget(target, property, target[property], previous);

				return true;
			}

			return !isValid;
		},

		defineProperty(target, property, descriptor) {
			if (!cache.isSameDescriptor(descriptor, target, property)) {
				const previous = target[property];

				if (
					validate(target, property, descriptor.value, previous)
					&& cache.defineProperty(target, property, descriptor, previous)
				) {
					handleChangeOnTarget(target, property, descriptor.value, previous);
				}
			}

			return true;
		},

		deleteProperty(target, property) {
			if (!Reflect.has(target, property)) {
				return true;
			}

			const previous = Reflect.get(target, property);
			const isValid = validate(target, property, undefined, previous);

			if (
				isValid
				&& cache.deleteProperty(target, property, previous)
			) {
				handleChangeOnTarget(target, property, undefined, previous);

				return true;
			}

			return !isValid;
		},

		apply(target, thisArg, argumentsList) {
			const thisProxyTarget = thisArg[proxyTarget] || thisArg;

			if (cache.isUnsubscribed) {
				return Reflect.apply(target, thisProxyTarget, argumentsList);
			}

			if (
				(details === false
					|| (details !== true && !details.includes(target.name)))
				&& _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_8__["default"].isHandledType(thisProxyTarget)
			) {
				let applyPath = _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].initial(cache.getPath(target));
				const isHandledMethod = _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_8__["default"].isHandledMethod(thisProxyTarget, target.name);

				smartClone.start(thisProxyTarget, applyPath, argumentsList);

				let result = Reflect.apply(
					target,
					smartClone.preferredThisArg(target, thisArg, thisProxyTarget),
					isHandledMethod
						? argumentsList.map(argument => getProxyTarget(argument))
						: argumentsList,
				);

				const isChanged = smartClone.isChanged(thisProxyTarget, equals);
				const previous = smartClone.stop();

				if (_lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_8__["default"].isHandledType(result) && isHandledMethod) {
					if (thisArg instanceof Map && target.name === 'get') {
						applyPath = _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(applyPath, argumentsList[0]);
					}

					result = cache.getProxy(result, applyPath, handler);
				}

				if (isChanged) {
					const applyData = {
						name: target.name,
						args: argumentsList,
						result,
					};
					const changePath = smartClone.isCloning
						? _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].initial(applyPath)
						: applyPath;
					const property = smartClone.isCloning
						? _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].last(applyPath)
						: '';

					if (validate(_lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].get(object, changePath), property, thisProxyTarget, previous, applyData)) {
						handleChange(changePath, property, thisProxyTarget, previous, applyData);
					} else {
						smartClone.undo(thisProxyTarget);
					}
				}

				if (
					(thisArg instanceof Map || thisArg instanceof Set)
					&& (0,_lib_is_iterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(result)
				) {
					return (0,_lib_wrap_iterator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(result, target, thisArg, applyPath, prepareValue);
				}

				return result;
			}

			return Reflect.apply(target, thisArg, argumentsList);
		},
	};

	const proxy = cache.getProxy(object, options.pathAsArray ? [] : '', handler);
	onChange = onChange.bind(proxy);

	if (hasOnValidate) {
		options.onValidate = options.onValidate.bind(proxy);
	}

	return proxy;
};

onChange.target = proxy => (proxy && proxy[_lib_constants_js__WEBPACK_IMPORTED_MODULE_0__.TARGET]) || proxy;
onChange.unsubscribe = proxy => proxy[_lib_constants_js__WEBPACK_IMPORTED_MODULE_0__.UNSUBSCRIBE] || proxy;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onChange);


/***/ }),

/***/ "./node_modules/on-change/lib/cache.js":
/*!*********************************************!*\
  !*** ./node_modules/on-change/lib/cache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cache)
/* harmony export */ });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/on-change/lib/path.js");


/**
@class Cache
@private
*/
class Cache {
	constructor(equals) {
		this._equals = equals;
		this._proxyCache = new WeakMap();
		this._pathCache = new WeakMap();
		this.isUnsubscribed = false;
	}

	_getDescriptorCache() {
		if (this._descriptorCache === undefined) {
			this._descriptorCache = new WeakMap();
		}

		return this._descriptorCache;
	}

	_getProperties(target) {
		const descriptorCache = this._getDescriptorCache();
		let properties = descriptorCache.get(target);

		if (properties === undefined) {
			properties = {};
			descriptorCache.set(target, properties);
		}

		return properties;
	}

	_getOwnPropertyDescriptor(target, property) {
		if (this.isUnsubscribed) {
			return Reflect.getOwnPropertyDescriptor(target, property);
		}

		const properties = this._getProperties(target);
		let descriptor = properties[property];

		if (descriptor === undefined) {
			descriptor = Reflect.getOwnPropertyDescriptor(target, property);
			properties[property] = descriptor;
		}

		return descriptor;
	}

	getProxy(target, path, handler, proxyTarget) {
		if (this.isUnsubscribed) {
			return target;
		}

		const reflectTarget = target[proxyTarget];
		const source = reflectTarget || target;

		this._pathCache.set(source, path);

		let proxy = this._proxyCache.get(source);

		if (proxy === undefined) {
			proxy = reflectTarget === undefined
				? new Proxy(target, handler)
				: target;

			this._proxyCache.set(source, proxy);
		}

		return proxy;
	}

	getPath(target) {
		return this.isUnsubscribed ? undefined : this._pathCache.get(target);
	}

	isDetached(target, object) {
		return !Object.is(target, _path_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(object, this.getPath(target)));
	}

	defineProperty(target, property, descriptor) {
		if (!Reflect.defineProperty(target, property, descriptor)) {
			return false;
		}

		if (!this.isUnsubscribed) {
			this._getProperties(target)[property] = descriptor;
		}

		return true;
	}

	setProperty(target, property, value, receiver, previous) { // eslint-disable-line max-params
		if (!this._equals(previous, value) || !(property in target)) {
			const descriptor = this._getOwnPropertyDescriptor(target, property);

			if (descriptor !== undefined && 'set' in descriptor) {
				return Reflect.set(target, property, value, receiver);
			}

			return Reflect.set(target, property, value);
		}

		return true;
	}

	deleteProperty(target, property, previous) {
		if (Reflect.deleteProperty(target, property)) {
			if (!this.isUnsubscribed) {
				const properties = this._getDescriptorCache().get(target);

				if (properties) {
					delete properties[property];
					this._pathCache.delete(previous);
				}
			}

			return true;
		}

		return false;
	}

	isSameDescriptor(a, target, property) {
		const b = this._getOwnPropertyDescriptor(target, property);

		return a !== undefined
			&& b !== undefined
			&& Object.is(a.value, b.value)
			&& (a.writable || false) === (b.writable || false)
			&& (a.enumerable || false) === (b.enumerable || false)
			&& (a.configurable || false) === (b.configurable || false)
			&& a.get === b.get
			&& a.set === b.set;
	}

	isGetInvariant(target, property) {
		const descriptor = this._getOwnPropertyDescriptor(target, property);

		return descriptor !== undefined
			&& descriptor.configurable !== true
			&& descriptor.writable !== true;
	}

	unsubscribe() {
		this._descriptorCache = null;
		this._pathCache = null;
		this._proxyCache = null;
		this.isUnsubscribed = true;
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/constants.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PATH_SEPARATOR: () => (/* binding */ PATH_SEPARATOR),
/* harmony export */   TARGET: () => (/* binding */ TARGET),
/* harmony export */   UNSUBSCRIBE: () => (/* binding */ UNSUBSCRIBE)
/* harmony export */ });
const PATH_SEPARATOR = '.';
const TARGET = Symbol('target');
const UNSUBSCRIBE = Symbol('unsubscribe');


/***/ }),

/***/ "./node_modules/on-change/lib/ignore-property.js":
/*!*******************************************************!*\
  !*** ./node_modules/on-change/lib/ignore-property.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ignoreProperty)
/* harmony export */ });
/* harmony import */ var _is_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-symbol.js */ "./node_modules/on-change/lib/is-symbol.js");


function ignoreProperty(cache, options, property) {
	return cache.isUnsubscribed
		|| (options.ignoreSymbols && (0,_is_symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(property))
		|| (options.ignoreUnderscores && property.charAt(0) === '_')
		|| ('ignoreKeys' in options && options.ignoreKeys.includes(property));
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-array.js":
/*!************************************************!*\
  !*** ./node_modules/on-change/lib/is-array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array.isArray);


/***/ }),

/***/ "./node_modules/on-change/lib/is-builtin.js":
/*!**************************************************!*\
  !*** ./node_modules/on-change/lib/is-builtin.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBuiltinWithMutableMethods: () => (/* binding */ isBuiltinWithMutableMethods),
/* harmony export */   isBuiltinWithoutMutableMethods: () => (/* binding */ isBuiltinWithoutMutableMethods)
/* harmony export */ });
function isBuiltinWithMutableMethods(value) {
	return value instanceof Date
		|| value instanceof Set
		|| value instanceof Map
		|| value instanceof WeakSet
		|| value instanceof WeakMap
		|| ArrayBuffer.isView(value);
}

function isBuiltinWithoutMutableMethods(value) {
	return (typeof value === 'object' ? value === null : typeof value !== 'function') || value instanceof RegExp;
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-iterator.js":
/*!***************************************************!*\
  !*** ./node_modules/on-change/lib/is-iterator.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isIterator)
/* harmony export */ });
function isIterator(value) {
	return typeof value === 'object' && typeof value.next === 'function';
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-object.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/is-object.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(value) {
	return toString.call(value) === '[object Object]';
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-symbol.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/is-symbol.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSymbol)
/* harmony export */ });
function isSymbol(value) {
	return typeof value === 'symbol';
}


/***/ }),

/***/ "./node_modules/on-change/lib/path.js":
/*!********************************************!*\
  !*** ./node_modules/on-change/lib/path.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/on-change/lib/constants.js");
/* harmony import */ var _is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-array.js */ "./node_modules/on-change/lib/is-array.js");
/* harmony import */ var _is_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-symbol.js */ "./node_modules/on-change/lib/is-symbol.js");




const path = {
	after: (path, subPath) => {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
			return path.slice(subPath.length);
		}

		if (subPath === '') {
			return path;
		}

		return path.slice(subPath.length + 1);
	},
	concat: (path, key) => {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
			path = [...path];

			if (key) {
				path.push(key);
			}

			return path;
		}

		if (key && key.toString !== undefined) {
			if (path !== '') {
				path += _constants_js__WEBPACK_IMPORTED_MODULE_0__.PATH_SEPARATOR;
			}

			if ((0,_is_symbol_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) {
				return path + key.toString();
			}

			return path + key;
		}

		return path;
	},
	initial: path => {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
			return path.slice(0, -1);
		}

		if (path === '') {
			return path;
		}

		const index = path.lastIndexOf(_constants_js__WEBPACK_IMPORTED_MODULE_0__.PATH_SEPARATOR);

		if (index === -1) {
			return '';
		}

		return path.slice(0, index);
	},
	last: path => {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
			return path[path.length - 1] || '';
		}

		if (path === '') {
			return path;
		}

		const index = path.lastIndexOf(_constants_js__WEBPACK_IMPORTED_MODULE_0__.PATH_SEPARATOR);

		if (index === -1) {
			return path;
		}

		return path.slice(index + 1);
	},
	walk: (path, callback) => {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
			for (const key of path) {
				callback(key);
			}
		} else if (path !== '') {
			let position = 0;
			let index = path.indexOf(_constants_js__WEBPACK_IMPORTED_MODULE_0__.PATH_SEPARATOR);

			if (index === -1) {
				callback(path);
			} else {
				while (position < path.length) {
					if (index === -1) {
						index = path.length;
					}

					callback(path.slice(position, index));

					position = index + 1;
					index = path.indexOf(_constants_js__WEBPACK_IMPORTED_MODULE_0__.PATH_SEPARATOR, position);
				}
			}
		}
	},
	get(object, path) {
		this.walk(path, key => {
			if (object) {
				object = object[key];
			}
		});

		return object;
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-array.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneArray)
/* harmony export */ });
/* harmony import */ var _methods_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/array.js */ "./node_modules/on-change/lib/smart-clone/methods/array.js");
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");



class CloneArray extends _clone_object_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static isHandledMethod(name) {
		return _methods_array_js__WEBPACK_IMPORTED_MODULE_0__.HANDLED_ARRAY_METHODS.has(name);
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-date.js":
/*!********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-date.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneDate)
/* harmony export */ });
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");


class CloneDate extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	undo(object) {
		object.setTime(this.clone.getTime());
	}

	isChanged(value, equals) {
		return !equals(this.clone.valueOf(), value.valueOf());
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneMap)
/* harmony export */ });
/* harmony import */ var _methods_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/map.js */ "./node_modules/on-change/lib/smart-clone/methods/map.js");
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");



class CloneMap extends _clone_object_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static isHandledMethod(name) {
		return _methods_map_js__WEBPACK_IMPORTED_MODULE_0__.HANDLED_MAP_METHODS.has(name);
	}

	undo(object) {
		for (const [key, value] of this.clone.entries()) {
			object.set(key, value);
		}

		for (const key of object.keys()) {
			if (!this.clone.has(key)) {
				object.delete(key);
			}
		}
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js":
/*!**********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-object.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneObject)
/* harmony export */ });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../path.js */ "./node_modules/on-change/lib/path.js");
/* harmony import */ var _is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../is-array.js */ "./node_modules/on-change/lib/is-array.js");
/* harmony import */ var _is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../is-object.js */ "./node_modules/on-change/lib/is-object.js");
/* harmony import */ var _methods_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../methods/array.js */ "./node_modules/on-change/lib/smart-clone/methods/array.js");
/* harmony import */ var _methods_set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../methods/set.js */ "./node_modules/on-change/lib/smart-clone/methods/set.js");
/* harmony import */ var _methods_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../methods/map.js */ "./node_modules/on-change/lib/smart-clone/methods/map.js");
/* harmony import */ var _methods_object_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../methods/object.js */ "./node_modules/on-change/lib/smart-clone/methods/object.js");








class CloneObject {
	constructor(value, path, argumentsList, hasOnValidate) {
		this._path = path;
		this._isChanged = false;
		this._clonedCache = new Set();
		this._hasOnValidate = hasOnValidate;
		this._changes = hasOnValidate ? [] : null;

		this.clone = path === undefined ? value : this._shallowClone(value);
	}

	static isHandledMethod(name) {
		return _methods_object_js__WEBPACK_IMPORTED_MODULE_6__.IMMUTABLE_OBJECT_METHODS.has(name);
	}

	_shallowClone(value) {
		let clone = value;

		if ((0,_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
			clone = {...value};
		} else if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || ArrayBuffer.isView(value)) {
			clone = [...value];
		} else if (value instanceof Date) {
			clone = new Date(value);
		} else if (value instanceof Set) {
			clone = new Set([...value].map(item => this._shallowClone(item)));
		} else if (value instanceof Map) {
			clone = new Map();

			for (const [key, item] of value.entries()) {
				clone.set(key, this._shallowClone(item));
			}
		}

		this._clonedCache.add(clone);

		return clone;
	}

	preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget) {
		if (isHandledMethod) {
			if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(thisProxyTarget)) {
				this._onIsChanged = _methods_array_js__WEBPACK_IMPORTED_MODULE_3__.MUTABLE_ARRAY_METHODS[name];
			} else if (thisProxyTarget instanceof Set) {
				this._onIsChanged = _methods_set_js__WEBPACK_IMPORTED_MODULE_4__.MUTABLE_SET_METHODS[name];
			} else if (thisProxyTarget instanceof Map) {
				this._onIsChanged = _methods_map_js__WEBPACK_IMPORTED_MODULE_5__.MUTABLE_MAP_METHODS[name];
			}

			return thisProxyTarget;
		}

		return thisArg;
	}

	update(fullPath, property, value) {
		const changePath = _path_js__WEBPACK_IMPORTED_MODULE_0__["default"].after(fullPath, this._path);

		if (property !== 'length') {
			let object = this.clone;

			_path_js__WEBPACK_IMPORTED_MODULE_0__["default"].walk(changePath, key => {
				if (object && object[key]) {
					if (!this._clonedCache.has(object[key])) {
						object[key] = this._shallowClone(object[key]);
					}

					object = object[key];
				}
			});

			if (this._hasOnValidate) {
				this._changes.push({
					path: changePath,
					property,
					previous: value,
				});
			}

			if (object && object[property]) {
				object[property] = value;
			}
		}

		this._isChanged = true;
	}

	undo(object) {
		let change;

		for (let index = this._changes.length - 1; index !== -1; index--) {
			change = this._changes[index];

			_path_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(object, change.path)[change.property] = change.previous;
		}
	}

	isChanged(value) {
		return this._onIsChanged === undefined
			? this._isChanged
			: this._onIsChanged(this.clone, value);
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-set.js":
/*!*******************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-set.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneSet)
/* harmony export */ });
/* harmony import */ var _methods_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/set.js */ "./node_modules/on-change/lib/smart-clone/methods/set.js");
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");



class CloneSet extends _clone_object_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static isHandledMethod(name) {
		return _methods_set_js__WEBPACK_IMPORTED_MODULE_0__.HANDLED_SET_METHODS.has(name);
	}

	undo(object) {
		for (const value of this.clone) {
			object.add(value);
		}

		for (const value of object) {
			if (!this.clone.has(value)) {
				object.delete(value);
			}
		}
	}
}



/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-weakmap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-weakmap.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneWeakMap)
/* harmony export */ });
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");


class CloneWeakMap extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(value, path, argumentsList, hasOnValidate) {
		super(undefined, path, argumentsList, hasOnValidate);

		this._weakKey = argumentsList[0];
		this._weakHas = value.has(this._weakKey);
		this._weakValue = value.get(this._weakKey);
	}

	isChanged(value) {
		return this._weakValue !== value.get(this._weakKey);
	}

	undo(object) {
		const weakHas = object.has(this._weakKey);

		if (this._weakHas && !weakHas) {
			object.set(this._weakKey, this._weakValue);
		} else if (!this._weakHas && weakHas) {
			object.delete(this._weakKey);
		} else if (this._weakValue !== object.get(this._weakKey)) {
			object.set(this._weakKey, this._weakValue);
		}
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-weakset.js":
/*!***********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-weakset.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneWeakSet)
/* harmony export */ });
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");


class CloneWeakSet extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(value, path, argumentsList, hasOnValidate) {
		super(undefined, path, argumentsList, hasOnValidate);

		this._arg1 = argumentsList[0];
		this._weakValue = value.has(this._arg1);
	}

	isChanged(value) {
		return this._weakValue !== value.has(this._arg1);
	}

	undo(object) {
		if (this._weakValue && !object.has(this._arg1)) {
			object.add(this._arg1);
		} else {
			object.delete(this._arg1);
		}
	}
}



/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-arrays.js":
/*!***********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-arrays.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffArrays)
/* harmony export */ });
function isDiffArrays(clone, value) {
	return clone.length !== value.length || clone.some((item, index) => value[index] !== item);
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-certain.js":
/*!************************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-certain.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffCertain)
/* harmony export */ });
function isDiffCertain() {
	return true;
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-maps.js":
/*!*********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-maps.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffMaps)
/* harmony export */ });
function isDiffMaps(clone, value) {
	if (clone.size !== value.size) {
		return true;
	}

	let bValue;
	for (const [key, aValue] of clone) {
		bValue = value.get(key);

		if (bValue !== aValue || (bValue === undefined && !value.has(key))) {
			return true;
		}
	}

	return false;
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-sets.js":
/*!*********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-sets.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffSets)
/* harmony export */ });
function isDiffSets(clone, value) {
	if (clone.size !== value.size) {
		return true;
	}

	for (const element of clone) {
		if (!value.has(element)) {
			return true;
		}
	}

	return false;
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HANDLED_ARRAY_METHODS: () => (/* binding */ HANDLED_ARRAY_METHODS),
/* harmony export */   MUTABLE_ARRAY_METHODS: () => (/* binding */ MUTABLE_ARRAY_METHODS)
/* harmony export */ });
/* harmony import */ var _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diff/is-diff-certain.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-certain.js");
/* harmony import */ var _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diff/is-diff-arrays.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-arrays.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object.js */ "./node_modules/on-change/lib/smart-clone/methods/object.js");




const IMMUTABLE_ARRAY_METHODS = new Set([
	'concat',
	'includes',
	'indexOf',
	'join',
	'keys',
	'lastIndexOf',
]);

const MUTABLE_ARRAY_METHODS = {
	push: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	pop: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	shift: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	unshift: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	copyWithin: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	reverse: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	sort: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	splice: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	flat: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	fill: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
};

const HANDLED_ARRAY_METHODS = new Set([
	..._object_js__WEBPACK_IMPORTED_MODULE_2__.IMMUTABLE_OBJECT_METHODS,
	...IMMUTABLE_ARRAY_METHODS,
	...Object.keys(MUTABLE_ARRAY_METHODS),
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HANDLED_MAP_METHODS: () => (/* binding */ HANDLED_MAP_METHODS),
/* harmony export */   MUTABLE_MAP_METHODS: () => (/* binding */ MUTABLE_MAP_METHODS)
/* harmony export */ });
/* harmony import */ var _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diff/is-diff-maps.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-maps.js");
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.js */ "./node_modules/on-change/lib/smart-clone/methods/set.js");



const IMMUTABLE_MAP_METHODS = new Set([..._set_js__WEBPACK_IMPORTED_MODULE_1__.IMMUTABLE_SET_METHODS, 'get']);

const MUTABLE_MAP_METHODS = {
	set: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	clear: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	delete: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	forEach: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_0__["default"],
};

const HANDLED_MAP_METHODS = new Set([
	...IMMUTABLE_MAP_METHODS,
	...Object.keys(MUTABLE_MAP_METHODS),
	..._set_js__WEBPACK_IMPORTED_MODULE_1__.COLLECTION_ITERATOR_METHODS,
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/object.js":
/*!******************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/object.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IMMUTABLE_OBJECT_METHODS: () => (/* binding */ IMMUTABLE_OBJECT_METHODS)
/* harmony export */ });
const IMMUTABLE_OBJECT_METHODS = new Set([
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'toLocaleString',
	'toString',
	'valueOf',
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/set.js":
/*!***************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/set.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLLECTION_ITERATOR_METHODS: () => (/* binding */ COLLECTION_ITERATOR_METHODS),
/* harmony export */   HANDLED_SET_METHODS: () => (/* binding */ HANDLED_SET_METHODS),
/* harmony export */   IMMUTABLE_SET_METHODS: () => (/* binding */ IMMUTABLE_SET_METHODS),
/* harmony export */   MUTABLE_SET_METHODS: () => (/* binding */ MUTABLE_SET_METHODS)
/* harmony export */ });
/* harmony import */ var _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diff/is-diff-sets.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-sets.js");


const COLLECTION_ITERATOR_METHODS = [
	'keys',
	'values',
	'entries',
];

const IMMUTABLE_SET_METHODS = new Set([
	'has',
	'toString',
]);

const MUTABLE_SET_METHODS = {
	add: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	clear: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	delete: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	forEach: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
};

const HANDLED_SET_METHODS = new Set([
	...IMMUTABLE_SET_METHODS,
	...Object.keys(MUTABLE_SET_METHODS),
	...COLLECTION_ITERATOR_METHODS,
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/smart-clone.js":
/*!***************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/smart-clone.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartClone)
/* harmony export */ });
/* harmony import */ var _is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is-array.js */ "./node_modules/on-change/lib/is-array.js");
/* harmony import */ var _is_builtin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-builtin.js */ "./node_modules/on-change/lib/is-builtin.js");
/* harmony import */ var _is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is-object.js */ "./node_modules/on-change/lib/is-object.js");
/* harmony import */ var _clone_clone_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone/clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");
/* harmony import */ var _clone_clone_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clone/clone-array.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-array.js");
/* harmony import */ var _clone_clone_date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone/clone-date.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-date.js");
/* harmony import */ var _clone_clone_set_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clone/clone-set.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-set.js");
/* harmony import */ var _clone_clone_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clone/clone-map.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-map.js");
/* harmony import */ var _clone_clone_weakset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clone/clone-weakset.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-weakset.js");
/* harmony import */ var _clone_clone_weakmap_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clone/clone-weakmap.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-weakmap.js");











class SmartClone {
	constructor(hasOnValidate) {
		this._stack = [];
		this._hasOnValidate = hasOnValidate;
	}

	static isHandledType(value) {
		return (0,_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)
			|| (0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)
			|| (0,_is_builtin_js__WEBPACK_IMPORTED_MODULE_1__.isBuiltinWithMutableMethods)(value);
	}

	static isHandledMethod(target, name) {
		if ((0,_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(target)) {
			return _clone_clone_object_js__WEBPACK_IMPORTED_MODULE_3__["default"].isHandledMethod(name);
		}

		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) {
			return _clone_clone_array_js__WEBPACK_IMPORTED_MODULE_4__["default"].isHandledMethod(name);
		}

		if (target instanceof Set) {
			return _clone_clone_set_js__WEBPACK_IMPORTED_MODULE_6__["default"].isHandledMethod(name);
		}

		if (target instanceof Map) {
			return _clone_clone_map_js__WEBPACK_IMPORTED_MODULE_7__["default"].isHandledMethod(name);
		}

		return (0,_is_builtin_js__WEBPACK_IMPORTED_MODULE_1__.isBuiltinWithMutableMethods)(target);
	}

	get isCloning() {
		return this._stack.length > 0;
	}

	start(value, path, argumentsList) {
		let CloneClass = _clone_clone_object_js__WEBPACK_IMPORTED_MODULE_3__["default"];

		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
			CloneClass = _clone_clone_array_js__WEBPACK_IMPORTED_MODULE_4__["default"];
		} else if (value instanceof Date) {
			CloneClass = _clone_clone_date_js__WEBPACK_IMPORTED_MODULE_5__["default"];
		} else if (value instanceof Set) {
			CloneClass = _clone_clone_set_js__WEBPACK_IMPORTED_MODULE_6__["default"];
		} else if (value instanceof Map) {
			CloneClass = _clone_clone_map_js__WEBPACK_IMPORTED_MODULE_7__["default"];
		} else if (value instanceof WeakSet) {
			CloneClass = _clone_clone_weakset_js__WEBPACK_IMPORTED_MODULE_8__["default"];
		} else if (value instanceof WeakMap) {
			CloneClass = _clone_clone_weakmap_js__WEBPACK_IMPORTED_MODULE_9__["default"];
		}

		this._stack.push(new CloneClass(value, path, argumentsList, this._hasOnValidate));
	}

	update(fullPath, property, value) {
		this._stack[this._stack.length - 1].update(fullPath, property, value);
	}

	preferredThisArg(target, thisArg, thisProxyTarget) {
		const {name} = target;
		const isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, name);

		return this._stack[this._stack.length - 1]
			.preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget);
	}

	isChanged(isMutable, value, equals) {
		return this._stack[this._stack.length - 1].isChanged(isMutable, value, equals);
	}

	undo(object) {
		if (this._previousClone !== undefined) {
			this._previousClone.undo(object);
		}
	}

	stop() {
		this._previousClone = this._stack.pop();

		return this._previousClone.clone;
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/wrap-iterator.js":
/*!*****************************************************!*\
  !*** ./node_modules/on-change/lib/wrap-iterator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapIterator)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/on-change/lib/constants.js");


// eslint-disable-next-line max-params
function wrapIterator(iterator, target, thisArg, applyPath, prepareValue) {
	const originalNext = iterator.next;

	if (target.name === 'entries') {
		iterator.next = function () {
			const result = originalNext.call(this);

			if (result.done === false) {
				result.value[0] = prepareValue(
					result.value[0],
					target,
					result.value[0],
					applyPath,
				);
				result.value[1] = prepareValue(
					result.value[1],
					target,
					result.value[0],
					applyPath,
				);
			}

			return result;
		};
	} else if (target.name === 'values') {
		const keyIterator = thisArg[_constants_js__WEBPACK_IMPORTED_MODULE_0__.TARGET].keys();

		iterator.next = function () {
			const result = originalNext.call(this);

			if (result.done === false) {
				result.value = prepareValue(
					result.value,
					target,
					keyIterator.next().value,
					applyPath,
				);
			}

			return result;
		};
	} else {
		iterator.next = function () {
			const result = originalNext.call(this);

			if (result.done === false) {
				result.value = prepareValue(
					result.value,
					target,
					result.value,
					applyPath,
				);
			}

			return result;
		};
	}

	return iterator;
}


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");



/* const setHeight = () => {
document.documentElement.style.setProperty('--page-height', document.documentElement.scrollHeight);
};

setHeight();
 */

(0,_app_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixnRkFBZ0YsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsSUFBSSxFQUFFLE9BQU87QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBMQUEwTCxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLE9BQU8sRUFBRSxlQUFlO0FBQzFSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixPQUFPLEVBQUUsbUJBQW1CO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxLQUFLO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGtCQUFrQjtBQUMxRTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Rix1RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixZQUFZLE9BQU8sWUFBWTtBQUN4RDtBQUNBLGlDQUFpQyxZQUFZLEVBQUUsb0JBQW9CLE9BQU8sb0JBQW9CLEVBQUUsWUFBWTtBQUM1RztBQUNBLGdDQUFnQyxtQkFBbUIsT0FBTyxtQkFBbUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osMkRBQTJELFlBQVksb0JBQW9CLElBQUk7QUFDL0Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJLEtBQUs7QUFDakQsNEJBQTRCLEVBQUUsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUiw2RUFBNkUsSUFBSTtBQUNqRixrQkFBa0IsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELEdBQUc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFVBQVUsY0FBYyxJQUFJO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ04sa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUiw2REFBNkQsV0FBVztBQUN4RTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksR0FBRyxHQUFHO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLGlDQUFpQztBQUMzQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU8sb0JBQW9CLElBQUksZUFBZSxLQUFLO0FBQ3RGLDJDQUEyQyxPQUFPLG1CQUFtQixJQUFJLGVBQWUsSUFBSTtBQUM1RjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUksc0JBQXNCLFVBQVU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLGFBQWE7QUFDNUc7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLGVBQWU7QUFDbEg7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0gsOEJBQThCLGlEQUFNOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUM5REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUI7QUFDSTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMuc2Nzcz8wZjc3Iiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL3NyYy9sb2NhbGVzL2VuZy5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL3NyYy9sb2NhbGVzL2luZGV4LmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vc3JjL2xvY2FsZXMvcnUuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvaTE4bmV4dC9kaXN0L2VzbS9pMThuZXh0LmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2NhY2hlLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvaWdub3JlLXByb3BlcnR5LmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1idWlsdGluLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvaXMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9wYXRoLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1kYXRlLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtbWFwLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtb2JqZWN0LmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtc2V0LmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtd2Vha21hcC5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2Nsb25lL2Nsb25lLXdlYWtzZXQuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9kaWZmL2lzLWRpZmYtYXJyYXlzLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvZGlmZi9pcy1kaWZmLWNlcnRhaW4uanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9kaWZmL2lzLWRpZmYtbWFwcy5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2RpZmYvaXMtZGlmZi1zZXRzLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvbWV0aG9kcy9hcnJheS5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL21ldGhvZHMvbWFwLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvbWV0aG9kcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9tZXRob2RzL3NldC5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL3NtYXJ0LWNsb25lLmpzIiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvd3JhcC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2l0c29uYmFpci5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aXRzb25iYWlyLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dpdHNvbmJhaXIuZ2l0aHViLmlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IG9uQ2hhbmdlIGZyb20gJ29uLWNoYW5nZSc7XG5pbXBvcnQgcmVzb3VyY2VzIGZyb20gJy4vbG9jYWxlcy9pbmRleC5qcyc7XG5cbi8vIEJFR0lOICh3cml0ZSB5b3VyIHNvbHV0aW9uIGhlcmUpXG5jb25zdCBsYW5ndWFnZXMgPSBbJ2VuJywgJ3J1J107XG5cbmNvbnN0IGhhbmRsZVN3aXRjaExhbmd1YWdlID0gKHN0YXRlKSA9PiAoZXZ0KSA9PiB7XG4gIGNvbnN0IHsgbG5nIH0gPSBldnQudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgc3RhdGUubG5nID0gbG5nO1xufTtcblxuY29uc3QgcmVuZGVyID0gKGNvbnRhaW5lciwgd2F0Y2hlZFN0YXRlLCBpMThuSW5zdGFuY2UpID0+IHtcbiAgY29uc3QgbG5nVG9nZ2xlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsbmdUb2dnbGVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpO1xuICBsbmdUb2dnbGVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdncm91cCcpO1xuXG4gIGxhbmd1YWdlcy5mb3JFYWNoKChsbmcpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHdhdGNoZWRTdGF0ZS5sbmcgPT09IGxuZyA/ICdidG4tcHJpbWFyeScgOiAnYnRuLW91dGxpbmUtcHJpbWFyeSc7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdtYi0zJywgY2xhc3NOYW1lKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdkYXRhLWxuZycsIGxuZyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gaTE4bkluc3RhbmNlLnQoYGxhbmd1YWdlcy4ke2xuZ31gKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTd2l0Y2hMYW5ndWFnZSh3YXRjaGVkU3RhdGUpKTtcbiAgICBsbmdUb2dnbGVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH0pO1xuXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY291bnRlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1pbmZvJywgJ2J0bi1sZycsICdtYi0zJywgJ2FsaWduLXNlbGYtY2VudGVyJyk7XG4gIGNvdW50ZXIudGV4dENvbnRlbnQgPSBpMThuSW5zdGFuY2UudCgnYnV0dG9ucy5jb3VudGVyLmNvdW50JywgeyBjb3VudDogd2F0Y2hlZFN0YXRlLmNsaWNrc0NvdW50IH0pO1xuICBjb3VudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdhdGNoZWRTdGF0ZS5jbGlja3NDb3VudCArPSAxO1xuICB9KTtcblxuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4td2FybmluZycpO1xuICByZXNldC50ZXh0Q29udGVudCA9IGkxOG5JbnN0YW5jZS50KCdidXR0b25zLnJlc2V0Jyk7XG4gIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdhdGNoZWRTdGF0ZS5jbGlja3NDb3VudCA9IDA7XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29udGFpbmVyLmFwcGVuZChsbmdUb2dnbGVyLCBjb3VudGVyLCByZXNldCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRMYW5ndWFnZSA9ICdlbic7XG4gIC8vINC60LDQttC00YvQuSDQt9Cw0L/Rg9GB0Log0L/RgNC40LvQvtC20LXQvdC40Y8g0YHQvtC30LTQsNGR0YIg0YHQstC+0Lkg0YHQvtCx0YHRgtCy0LXQvdC90YvQuSDQvtCx0YrQtdC60YIgaTE4biDQuCDRgNCw0LHQvtGC0LDQtdGCINGBINC90LjQvCxcbiAgLy8g0L3QtSDQvNC10L3Rj9GPINCz0LvQvtCx0LDQu9GM0L3Ri9C5INC+0LHRitC10LrRgi5cbiAgY29uc3QgaTE4bkluc3RhbmNlID0gaTE4bi5jcmVhdGVJbnN0YW5jZSgpO1xuICBhd2FpdCBpMThuSW5zdGFuY2UuaW5pdCh7XG4gICAgbG5nOiBkZWZhdWx0TGFuZ3VhZ2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHJlc291cmNlcyxcbiAgfSk7XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgbG5nOiBkZWZhdWx0TGFuZ3VhZ2UsXG4gICAgY2xpY2tzQ291bnQ6IDAsXG4gIH07XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlcm1pbmFsJyk7XG5cbiAgY29uc3Qgd2F0Y2hlZFN0YXRlID0gb25DaGFuZ2Uoc3RhdGUsIChwYXRoLCB2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAocGF0aCkge1xuICAgICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC90L3Ri9C5INC+0LHRitC10LrRgiBpMThuINC/0YDQvtC60LjQtNGL0LLQsNC10YLRgdGPINC/0LDRgNCw0LzQtdGC0YDQvtC8INCyINGA0LXQvdC00LXRgCwg0YfRgtC+0LHRiyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgdC5cbiAgICAgIGNhc2UgJ2xuZyc6IGkxOG5JbnN0YW5jZS5jaGFuZ2VMYW5ndWFnZSh2YWx1ZSkudGhlbigoKSA9PiByZW5kZXIoY29udGFpbmVyLCB3YXRjaGVkU3RhdGUsIGkxOG5JbnN0YW5jZSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2xpY2tzQ291bnQnOiByZW5kZXIoY29udGFpbmVyLCB3YXRjaGVkU3RhdGUsIGkxOG5JbnN0YW5jZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIHJlbmRlcihjb250YWluZXIsIHdhdGNoZWRTdGF0ZSwgaTE4bkluc3RhbmNlKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRyYW5sYXN0aW9uOiB7XG4gICAgbGFuZ3VhZ2VzOiB7XG4gICAgICBlbjogJ0VuZ2xpc2gnLFxuICAgICAgcnU6ICfQoNGD0YHRgdC60LjQuScsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgZW4gZnJvbSAnLi9lbmcuanMnO1xuaW1wb3J0IHJ1IGZyb20gJy4vcnUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGVuLCBydSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0cmFubGFzdGlvbjoge1xuICAgIGxhbmd1YWdlczoge1xuICAgICAgZW46ICdFbmdsaXNoJyxcbiAgICAgIHJ1OiAn0KDRg9GB0YHQutC40LknLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiY29uc3QgY29uc29sZUxvZ2dlciA9IHtcbiAgdHlwZTogJ2xvZ2dlcicsXG4gIGxvZyhhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2xvZycsIGFyZ3MpO1xuICB9LFxuICB3YXJuKGFyZ3MpIHtcbiAgICB0aGlzLm91dHB1dCgnd2FybicsIGFyZ3MpO1xuICB9LFxuICBlcnJvcihhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2Vycm9yJywgYXJncyk7XG4gIH0sXG4gIG91dHB1dCh0eXBlLCBhcmdzKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSkgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufTtcbmNsYXNzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKGNvbmNyZXRlTG9nZ2VyKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMuaW5pdChjb25jcmV0ZUxvZ2dlciwgb3B0aW9ucyk7XG4gIH1cbiAgaW5pdChjb25jcmV0ZUxvZ2dlcikge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLnByZWZpeCA9IG9wdGlvbnMucHJlZml4IHx8ICdpMThuZXh0Oic7XG4gICAgdGhpcy5sb2dnZXIgPSBjb25jcmV0ZUxvZ2dlciB8fCBjb25zb2xlTG9nZ2VyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5kZWJ1ZyA9IG9wdGlvbnMuZGVidWc7XG4gIH1cbiAgbG9nKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnbG9nJywgJycsIHRydWUpO1xuICB9XG4gIHdhcm4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ3dhcm4nLCAnJywgdHJ1ZSk7XG4gIH1cbiAgZXJyb3IoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ2Vycm9yJywgJycpO1xuICB9XG4gIGRlcHJlY2F0ZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnd2FybicsICdXQVJOSU5HIERFUFJFQ0FURUQ6ICcsIHRydWUpO1xuICB9XG4gIGZvcndhcmQoYXJncywgbHZsLCBwcmVmaXgsIGRlYnVnT25seSkge1xuICAgIGlmIChkZWJ1Z09ubHkgJiYgIXRoaXMuZGVidWcpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIGFyZ3NbMF0gPSBgJHtwcmVmaXh9JHt0aGlzLnByZWZpeH0gJHthcmdzWzBdfWA7XG4gICAgcmV0dXJuIHRoaXMubG9nZ2VyW2x2bF0oYXJncyk7XG4gIH1cbiAgY3JlYXRlKG1vZHVsZU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmxvZ2dlciwge1xuICAgICAgLi4ue1xuICAgICAgICBwcmVmaXg6IGAke3RoaXMucHJlZml4fToke21vZHVsZU5hbWV9OmBcbiAgICAgIH0sXG4gICAgICAuLi50aGlzLm9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICBjbG9uZShvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgdGhpcy5vcHRpb25zO1xuICAgIG9wdGlvbnMucHJlZml4ID0gb3B0aW9ucy5wcmVmaXggfHwgdGhpcy5wcmVmaXg7XG4gICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy5sb2dnZXIsIG9wdGlvbnMpO1xuICB9XG59XG52YXIgYmFzZUxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB7fTtcbiAgfVxuICBvbihldmVudHMsIGxpc3RlbmVyKSB7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyc1tldmVudF0gPSB0aGlzLm9ic2VydmVyc1tldmVudF0gfHwgW107XG4gICAgICB0aGlzLm9ic2VydmVyc1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5vYnNlcnZlcnNbZXZlbnRdKSByZXR1cm47XG4gICAgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2V2ZW50XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlcnNbZXZlbnRdID0gdGhpcy5vYnNlcnZlcnNbZXZlbnRdLmZpbHRlcihsID0+IGwgIT09IGxpc3RlbmVyKTtcbiAgfVxuICBlbWl0KGV2ZW50KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmICh0aGlzLm9ic2VydmVyc1tldmVudF0pIHtcbiAgICAgIGNvbnN0IGNsb25lZCA9IFtdLmNvbmNhdCh0aGlzLm9ic2VydmVyc1tldmVudF0pO1xuICAgICAgY2xvbmVkLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICBvYnNlcnZlciguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5vYnNlcnZlcnNbJyonXSkge1xuICAgICAgY29uc3QgY2xvbmVkID0gW10uY29uY2F0KHRoaXMub2JzZXJ2ZXJzWycqJ10pO1xuICAgICAgY2xvbmVkLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICBvYnNlcnZlci5hcHBseShvYnNlcnZlciwgW2V2ZW50LCAuLi5hcmdzXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmZXIoKSB7XG4gIGxldCByZXM7XG4gIGxldCByZWo7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzID0gcmVzb2x2ZTtcbiAgICByZWogPSByZWplY3Q7XG4gIH0pO1xuICBwcm9taXNlLnJlc29sdmUgPSByZXM7XG4gIHByb21pc2UucmVqZWN0ID0gcmVqO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIG1ha2VTdHJpbmcob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICcnO1xuICByZXR1cm4gJycgKyBvYmplY3Q7XG59XG5mdW5jdGlvbiBjb3B5KGEsIHMsIHQpIHtcbiAgYS5mb3JFYWNoKG0gPT4ge1xuICAgIGlmIChzW21dKSB0W21dID0gc1ttXTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRMYXN0T2ZQYXRoKG9iamVjdCwgcGF0aCwgRW1wdHkpIHtcbiAgZnVuY3Rpb24gY2xlYW5LZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSAmJiBrZXkuaW5kZXhPZignIyMjJykgPiAtMSA/IGtleS5yZXBsYWNlKC8jIyMvZywgJy4nKSA6IGtleTtcbiAgfVxuICBmdW5jdGlvbiBjYW5Ob3RUcmF2ZXJzZURlZXBlcigpIHtcbiAgICByZXR1cm4gIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJztcbiAgfVxuICBjb25zdCBzdGFjayA9IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyA/IFtdLmNvbmNhdChwYXRoKSA6IHBhdGguc3BsaXQoJy4nKTtcbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoY2FuTm90VHJhdmVyc2VEZWVwZXIoKSkgcmV0dXJuIHt9O1xuICAgIGNvbnN0IGtleSA9IGNsZWFuS2V5KHN0YWNrLnNoaWZ0KCkpO1xuICAgIGlmICghb2JqZWN0W2tleV0gJiYgRW1wdHkpIG9iamVjdFtrZXldID0gbmV3IEVtcHR5KCk7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3QgPSB7fTtcbiAgICB9XG4gIH1cbiAgaWYgKGNhbk5vdFRyYXZlcnNlRGVlcGVyKCkpIHJldHVybiB7fTtcbiAgcmV0dXJuIHtcbiAgICBvYmo6IG9iamVjdCxcbiAgICBrOiBjbGVhbktleShzdGFjay5zaGlmdCgpKVxuICB9O1xufVxuZnVuY3Rpb24gc2V0UGF0aChvYmplY3QsIHBhdGgsIG5ld1ZhbHVlKSB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCk7XG4gIG9ialtrXSA9IG5ld1ZhbHVlO1xufVxuZnVuY3Rpb24gcHVzaFBhdGgob2JqZWN0LCBwYXRoLCBuZXdWYWx1ZSwgY29uY2F0KSB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCk7XG4gIG9ialtrXSA9IG9ialtrXSB8fCBbXTtcbiAgaWYgKGNvbmNhdCkgb2JqW2tdID0gb2JqW2tdLmNvbmNhdChuZXdWYWx1ZSk7XG4gIGlmICghY29uY2F0KSBvYmpba10ucHVzaChuZXdWYWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRQYXRoKG9iamVjdCwgcGF0aCkge1xuICBjb25zdCB7XG4gICAgb2JqLFxuICAgIGtcbiAgfSA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoKTtcbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiBvYmpba107XG59XG5mdW5jdGlvbiBnZXRQYXRoV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpIHtcbiAgY29uc3QgdmFsdWUgPSBnZXRQYXRoKGRhdGEsIGtleSk7XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBnZXRQYXRoKGRlZmF1bHREYXRhLCBrZXkpO1xufVxuZnVuY3Rpb24gZGVlcEV4dGVuZCh0YXJnZXQsIHNvdXJjZSwgb3ZlcndyaXRlKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICBpZiAocHJvcCAhPT0gJ19fcHJvdG9fXycgJiYgcHJvcCAhPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgaWYgKHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BdID09PSAnc3RyaW5nJyB8fCB0YXJnZXRbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIHNvdXJjZVtwcm9wXSA9PT0gJ3N0cmluZycgfHwgc291cmNlW3Byb3BdIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgaWYgKG92ZXJ3cml0ZSkgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0sIG92ZXJ3cml0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJyk7XG59XG52YXIgX2VudGl0eU1hcCA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjMzk7JyxcbiAgJy8nOiAnJiN4MkY7J1xufTtcbmZ1bmN0aW9uIGVzY2FwZShkYXRhKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGF0YS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCBzID0+IF9lbnRpdHlNYXBbc10pO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuY29uc3QgY2hhcnMgPSBbJyAnLCAnLCcsICc/JywgJyEnLCAnOyddO1xuZnVuY3Rpb24gbG9va3NMaWtlT2JqZWN0UGF0aChrZXksIG5zU2VwYXJhdG9yLCBrZXlTZXBhcmF0b3IpIHtcbiAgbnNTZXBhcmF0b3IgPSBuc1NlcGFyYXRvciB8fCAnJztcbiAga2V5U2VwYXJhdG9yID0ga2V5U2VwYXJhdG9yIHx8ICcnO1xuICBjb25zdCBwb3NzaWJsZUNoYXJzID0gY2hhcnMuZmlsdGVyKGMgPT4gbnNTZXBhcmF0b3IuaW5kZXhPZihjKSA8IDAgJiYga2V5U2VwYXJhdG9yLmluZGV4T2YoYykgPCAwKTtcbiAgaWYgKHBvc3NpYmxlQ2hhcnMubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgciA9IG5ldyBSZWdFeHAoYCgke3Bvc3NpYmxlQ2hhcnMubWFwKGMgPT4gYyA9PT0gJz8nID8gJ1xcXFw/JyA6IGMpLmpvaW4oJ3wnKX0pYCk7XG4gIGxldCBtYXRjaGVkID0gIXIudGVzdChrZXkpO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICBjb25zdCBraSA9IGtleS5pbmRleE9mKGtleVNlcGFyYXRvcik7XG4gICAgaWYgKGtpID4gMCAmJiAhci50ZXN0KGtleS5zdWJzdHJpbmcoMCwga2kpKSkge1xuICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVkO1xufVxuZnVuY3Rpb24gZGVlcEZpbmQob2JqLCBwYXRoKSB7XG4gIGxldCBrZXlTZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcuJztcbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChvYmpbcGF0aF0pIHJldHVybiBvYmpbcGF0aF07XG4gIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdChrZXlTZXBhcmF0b3IpO1xuICBsZXQgY3VycmVudCA9IG9iajtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7ICsraSkge1xuICAgIGlmICghY3VycmVudCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRbcGF0aHNbaV1dID09PSAnc3RyaW5nJyAmJiBpICsgMSA8IHBhdGhzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBqID0gMjtcbiAgICAgIGxldCBwID0gcGF0aHMuc2xpY2UoaSwgaSArIGopLmpvaW4oa2V5U2VwYXJhdG9yKTtcbiAgICAgIGxldCBtaXggPSBjdXJyZW50W3BdO1xuICAgICAgd2hpbGUgKG1peCA9PT0gdW5kZWZpbmVkICYmIHBhdGhzLmxlbmd0aCA+IGkgKyBqKSB7XG4gICAgICAgIGorKztcbiAgICAgICAgcCA9IHBhdGhzLnNsaWNlKGksIGkgKyBqKS5qb2luKGtleVNlcGFyYXRvcik7XG4gICAgICAgIG1peCA9IGN1cnJlbnRbcF07XG4gICAgICB9XG4gICAgICBpZiAobWl4ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBpZiAobWl4ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKHApKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJykgcmV0dXJuIG1peDtcbiAgICAgICAgaWYgKHAgJiYgdHlwZW9mIG1peFtwXSA9PT0gJ3N0cmluZycpIHJldHVybiBtaXhbcF07XG4gICAgICB9XG4gICAgICBjb25zdCBqb2luZWRQYXRoID0gcGF0aHMuc2xpY2UoaSArIGopLmpvaW4oa2V5U2VwYXJhdG9yKTtcbiAgICAgIGlmIChqb2luZWRQYXRoKSByZXR1cm4gZGVlcEZpbmQobWl4LCBqb2luZWRQYXRoLCBrZXlTZXBhcmF0b3IpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICB9XG4gIHJldHVybiBjdXJyZW50O1xufVxuZnVuY3Rpb24gZ2V0Q2xlYW5lZENvZGUoY29kZSkge1xuICBpZiAoY29kZSAmJiBjb2RlLmluZGV4T2YoJ18nKSA+IDApIHJldHVybiBjb2RlLnJlcGxhY2UoJ18nLCAnLScpO1xuICByZXR1cm4gY29kZTtcbn1cblxuY2xhc3MgUmVzb3VyY2VTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgbnM6IFsndHJhbnNsYXRpb24nXSxcbiAgICAgIGRlZmF1bHROUzogJ3RyYW5zbGF0aW9uJ1xuICAgIH07XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9ICcuJztcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYWRkTmFtZXNwYWNlcyhucykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihucykgPCAwKSB7XG4gICAgICB0aGlzLm9wdGlvbnMubnMucHVzaChucyk7XG4gICAgfVxuICB9XG4gIHJlbW92ZU5hbWVzcGFjZXMobnMpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG5zKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcHRpb25zLm5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIGdldFJlc291cmNlKGxuZywgbnMsIGtleSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGNvbnN0IGlnbm9yZUpTT05TdHJ1Y3R1cmUgPSBvcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZSA6IHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlO1xuICAgIGxldCBwYXRoID0gW2xuZywgbnNdO1xuICAgIGlmIChrZXkgJiYgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoLmNvbmNhdChrZXkpO1xuICAgIGlmIChrZXkgJiYgdHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHBhdGggPSBwYXRoLmNvbmNhdChrZXlTZXBhcmF0b3IgPyBrZXkuc3BsaXQoa2V5U2VwYXJhdG9yKSA6IGtleSk7XG4gICAgaWYgKGxuZy5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgcGF0aCA9IGxuZy5zcGxpdCgnLicpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBnZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCk7XG4gICAgaWYgKHJlc3VsdCB8fCAhaWdub3JlSlNPTlN0cnVjdHVyZSB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gZGVlcEZpbmQodGhpcy5kYXRhICYmIHRoaXMuZGF0YVtsbmddICYmIHRoaXMuZGF0YVtsbmddW25zXSwga2V5LCBrZXlTZXBhcmF0b3IpO1xuICB9XG4gIGFkZFJlc291cmNlKGxuZywgbnMsIGtleSwgdmFsdWUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge1xuICAgICAgc2lsZW50OiBmYWxzZVxuICAgIH07XG4gICAgY29uc3Qga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICBsZXQgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICBpZiAoa2V5KSBwYXRoID0gcGF0aC5jb25jYXQoa2V5U2VwYXJhdG9yID8ga2V5LnNwbGl0KGtleVNlcGFyYXRvcikgOiBrZXkpO1xuICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgIHZhbHVlID0gbnM7XG4gICAgICBucyA9IHBhdGhbMV07XG4gICAgfVxuICAgIHRoaXMuYWRkTmFtZXNwYWNlcyhucyk7XG4gICAgc2V0UGF0aCh0aGlzLmRhdGEsIHBhdGgsIHZhbHVlKTtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywga2V5LCB2YWx1ZSk7XG4gIH1cbiAgYWRkUmVzb3VyY2VzKGxuZywgbnMsIHJlc291cmNlcykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7XG4gICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IG0gaW4gcmVzb3VyY2VzKSB7XG4gICAgICBpZiAodHlwZW9mIHJlc291cmNlc1ttXSA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShyZXNvdXJjZXNbbV0pID09PSAnW29iamVjdCBBcnJheV0nKSB0aGlzLmFkZFJlc291cmNlKGxuZywgbnMsIG0sIHJlc291cmNlc1ttXSwge1xuICAgICAgICBzaWxlbnQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgfVxuICBhZGRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zLCByZXNvdXJjZXMsIGRlZXAsIG92ZXJ3cml0ZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB7XG4gICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgfTtcbiAgICBsZXQgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICBpZiAobG5nLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBwYXRoID0gbG5nLnNwbGl0KCcuJyk7XG4gICAgICBkZWVwID0gcmVzb3VyY2VzO1xuICAgICAgcmVzb3VyY2VzID0gbnM7XG4gICAgICBucyA9IHBhdGhbMV07XG4gICAgfVxuICAgIHRoaXMuYWRkTmFtZXNwYWNlcyhucyk7XG4gICAgbGV0IHBhY2sgPSBnZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCkgfHwge307XG4gICAgaWYgKGRlZXApIHtcbiAgICAgIGRlZXBFeHRlbmQocGFjaywgcmVzb3VyY2VzLCBvdmVyd3JpdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWNrID0ge1xuICAgICAgICAuLi5wYWNrLFxuICAgICAgICAuLi5yZXNvdXJjZXNcbiAgICAgIH07XG4gICAgfVxuICAgIHNldFBhdGgodGhpcy5kYXRhLCBwYXRoLCBwYWNrKTtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgfVxuICByZW1vdmVSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbbG5nXVtuc107XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlTmFtZXNwYWNlcyhucyk7XG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkJywgbG5nLCBucyk7XG4gIH1cbiAgaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgZ2V0UmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgIGlmICghbnMpIG5zID0gdGhpcy5vcHRpb25zLmRlZmF1bHROUztcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgPT09ICd2MScpIHJldHVybiB7XG4gICAgICAuLi57fSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucylcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpO1xuICB9XG4gIGdldERhdGFCeUxhbmd1YWdlKGxuZykge1xuICAgIHJldHVybiB0aGlzLmRhdGFbbG5nXTtcbiAgfVxuICBoYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnMobG5nKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YUJ5TGFuZ3VhZ2UobG5nKTtcbiAgICBjb25zdCBuID0gZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKSB8fCBbXTtcbiAgICByZXR1cm4gISFuLmZpbmQodiA9PiBkYXRhW3ZdICYmIE9iamVjdC5rZXlzKGRhdGFbdl0pLmxlbmd0aCA+IDApO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59XG5cbnZhciBwb3N0UHJvY2Vzc29yID0ge1xuICBwcm9jZXNzb3JzOiB7fSxcbiAgYWRkUG9zdFByb2Nlc3Nvcihtb2R1bGUpIHtcbiAgICB0aGlzLnByb2Nlc3NvcnNbbW9kdWxlLm5hbWVdID0gbW9kdWxlO1xuICB9LFxuICBoYW5kbGUocHJvY2Vzc29ycywgdmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcikge1xuICAgIHByb2Nlc3NvcnMuZm9yRWFjaChwcm9jZXNzb3IgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdKSB2YWx1ZSA9IHRoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdLnByb2Nlc3ModmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBjaGVja2VkTG9hZGVkRm9yID0ge307XG5jbGFzcyBUcmFuc2xhdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VydmljZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgc3VwZXIoKTtcbiAgICBjb3B5KFsncmVzb3VyY2VTdG9yZScsICdsYW5ndWFnZVV0aWxzJywgJ3BsdXJhbFJlc29sdmVyJywgJ2ludGVycG9sYXRvcicsICdiYWNrZW5kQ29ubmVjdG9yJywgJ2kxOG5Gb3JtYXQnLCAndXRpbHMnXSwgc2VydmljZXMsIHRoaXMpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9ICcuJztcbiAgICB9XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgndHJhbnNsYXRvcicpO1xuICB9XG4gIGNoYW5nZUxhbmd1YWdlKGxuZykge1xuICAgIGlmIChsbmcpIHRoaXMubGFuZ3VhZ2UgPSBsbmc7XG4gIH1cbiAgZXhpc3RzKGtleSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7fVxuICAgIH07XG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZShrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiByZXNvbHZlZCAmJiByZXNvbHZlZC5yZXMgIT09IHVuZGVmaW5lZDtcbiAgfVxuICBleHRyYWN0RnJvbUtleShrZXksIG9wdGlvbnMpIHtcbiAgICBsZXQgbnNTZXBhcmF0b3IgPSBvcHRpb25zLm5zU2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zU2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgIGlmIChuc1NlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSBuc1NlcGFyYXRvciA9ICc6JztcbiAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGxldCBuYW1lc3BhY2VzID0gb3B0aW9ucy5ucyB8fCB0aGlzLm9wdGlvbnMuZGVmYXVsdE5TIHx8IFtdO1xuICAgIGNvbnN0IHdvdWxkQ2hlY2tGb3JOc0luS2V5ID0gbnNTZXBhcmF0b3IgJiYga2V5LmluZGV4T2YobnNTZXBhcmF0b3IpID4gLTE7XG4gICAgY29uc3Qgc2VlbXNOYXR1cmFsTGFuZ3VhZ2UgPSAhdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkS2V5U2VwYXJhdG9yICYmICFvcHRpb25zLmtleVNlcGFyYXRvciAmJiAhdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkTnNTZXBhcmF0b3IgJiYgIW9wdGlvbnMubnNTZXBhcmF0b3IgJiYgIWxvb2tzTGlrZU9iamVjdFBhdGgoa2V5LCBuc1NlcGFyYXRvciwga2V5U2VwYXJhdG9yKTtcbiAgICBpZiAod291bGRDaGVja0Zvck5zSW5LZXkgJiYgIXNlZW1zTmF0dXJhbExhbmd1YWdlKSB7XG4gICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKHRoaXMuaW50ZXJwb2xhdG9yLm5lc3RpbmdSZWdleHApO1xuICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWVzcGFjZXNcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhcnRzID0ga2V5LnNwbGl0KG5zU2VwYXJhdG9yKTtcbiAgICAgIGlmIChuc1NlcGFyYXRvciAhPT0ga2V5U2VwYXJhdG9yIHx8IG5zU2VwYXJhdG9yID09PSBrZXlTZXBhcmF0b3IgJiYgdGhpcy5vcHRpb25zLm5zLmluZGV4T2YocGFydHNbMF0pID4gLTEpIG5hbWVzcGFjZXMgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAga2V5ID0gcGFydHMuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnKSBuYW1lc3BhY2VzID0gW25hbWVzcGFjZXNdO1xuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBuYW1lc3BhY2VzXG4gICAgfTtcbiAgfVxuICB0cmFuc2xhdGUoa2V5cywgb3B0aW9ucywgbGFzdEtleSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgJiYgdGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKSB7XG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIG9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkIHx8IGtleXMgPT09IG51bGwpIHJldHVybiAnJztcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIGtleXMgPSBbU3RyaW5nKGtleXMpXTtcbiAgICBjb25zdCByZXR1cm5EZXRhaWxzID0gb3B0aW9ucy5yZXR1cm5EZXRhaWxzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnJldHVybkRldGFpbHMgOiB0aGlzLm9wdGlvbnMucmV0dXJuRGV0YWlscztcbiAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGNvbnN0IHtcbiAgICAgIGtleSxcbiAgICAgIG5hbWVzcGFjZXNcbiAgICB9ID0gdGhpcy5leHRyYWN0RnJvbUtleShrZXlzW2tleXMubGVuZ3RoIC0gMV0sIG9wdGlvbnMpO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IG5hbWVzcGFjZXNbbmFtZXNwYWNlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBsbmcgPSBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlO1xuICAgIGNvbnN0IGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlID0gb3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb0NJTW9kZSB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGU7XG4gICAgaWYgKGxuZyAmJiBsbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHtcbiAgICAgIGlmIChhcHBlbmROYW1lc3BhY2VUb0NJTW9kZSkge1xuICAgICAgICBjb25zdCBuc1NlcGFyYXRvciA9IG9wdGlvbnMubnNTZXBhcmF0b3IgfHwgdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgICAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXM6IGAke25hbWVzcGFjZX0ke25zU2VwYXJhdG9yfSR7a2V5fWAsXG4gICAgICAgICAgICB1c2VkS2V5OiBrZXksXG4gICAgICAgICAgICBleGFjdFVzZWRLZXk6IGtleSxcbiAgICAgICAgICAgIHVzZWRMbmc6IGxuZyxcbiAgICAgICAgICAgIHVzZWROUzogbmFtZXNwYWNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bmFtZXNwYWNlfSR7bnNTZXBhcmF0b3J9JHtrZXl9YDtcbiAgICAgIH1cbiAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzOiBrZXksXG4gICAgICAgICAgdXNlZEtleToga2V5LFxuICAgICAgICAgIGV4YWN0VXNlZEtleToga2V5LFxuICAgICAgICAgIHVzZWRMbmc6IGxuZyxcbiAgICAgICAgICB1c2VkTlM6IG5hbWVzcGFjZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmUoa2V5cywgb3B0aW9ucyk7XG4gICAgbGV0IHJlcyA9IHJlc29sdmVkICYmIHJlc29sdmVkLnJlcztcbiAgICBjb25zdCByZXNVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQudXNlZEtleSB8fCBrZXk7XG4gICAgY29uc3QgcmVzRXhhY3RVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQuZXhhY3RVc2VkS2V5IHx8IGtleTtcbiAgICBjb25zdCByZXNUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShyZXMpO1xuICAgIGNvbnN0IG5vT2JqZWN0ID0gWydbb2JqZWN0IE51bWJlcl0nLCAnW29iamVjdCBGdW5jdGlvbl0nLCAnW29iamVjdCBSZWdFeHBdJ107XG4gICAgY29uc3Qgam9pbkFycmF5cyA9IG9wdGlvbnMuam9pbkFycmF5cyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5qb2luQXJyYXlzIDogdGhpcy5vcHRpb25zLmpvaW5BcnJheXM7XG4gICAgY29uc3QgaGFuZGxlQXNPYmplY3RJbkkxOG5Gb3JtYXQgPSAhdGhpcy5pMThuRm9ybWF0IHx8IHRoaXMuaTE4bkZvcm1hdC5oYW5kbGVBc09iamVjdDtcbiAgICBjb25zdCBoYW5kbGVBc09iamVjdCA9IHR5cGVvZiByZXMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiByZXMgIT09ICdib29sZWFuJyAmJiB0eXBlb2YgcmVzICE9PSAnbnVtYmVyJztcbiAgICBpZiAoaGFuZGxlQXNPYmplY3RJbkkxOG5Gb3JtYXQgJiYgcmVzICYmIGhhbmRsZUFzT2JqZWN0ICYmIG5vT2JqZWN0LmluZGV4T2YocmVzVHlwZSkgPCAwICYmICEodHlwZW9mIGpvaW5BcnJheXMgPT09ICdzdHJpbmcnICYmIHJlc1R5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpKSB7XG4gICAgICBpZiAoIW9wdGlvbnMucmV0dXJuT2JqZWN0cyAmJiAhdGhpcy5vcHRpb25zLnJldHVybk9iamVjdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybignYWNjZXNzaW5nIGFuIG9iamVjdCAtIGJ1dCByZXR1cm5PYmplY3RzIG9wdGlvbnMgaXMgbm90IGVuYWJsZWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IHRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIgPyB0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyKHJlc1VzZWRLZXksIHJlcywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgbnM6IG5hbWVzcGFjZXNcbiAgICAgICAgfSkgOiBga2V5ICcke2tleX0gKCR7dGhpcy5sYW5ndWFnZX0pJyByZXR1cm5lZCBhbiBvYmplY3QgaW5zdGVhZCBvZiBzdHJpbmcuYDtcbiAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICByZXNvbHZlZC5yZXMgPSByO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzVHlwZUlzQXJyYXkgPSByZXNUeXBlID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgICBjb25zdCBjb3B5ID0gcmVzVHlwZUlzQXJyYXkgPyBbXSA6IHt9O1xuICAgICAgICBjb25zdCBuZXdLZXlUb1VzZSA9IHJlc1R5cGVJc0FycmF5ID8gcmVzRXhhY3RVc2VkS2V5IDogcmVzVXNlZEtleTtcbiAgICAgICAgZm9yIChjb25zdCBtIGluIHJlcykge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzLCBtKSkge1xuICAgICAgICAgICAgY29uc3QgZGVlcEtleSA9IGAke25ld0tleVRvVXNlfSR7a2V5U2VwYXJhdG9yfSR7bX1gO1xuICAgICAgICAgICAgY29weVttXSA9IHRoaXMudHJhbnNsYXRlKGRlZXBLZXksIHtcbiAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIGpvaW5BcnJheXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5zOiBuYW1lc3BhY2VzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvcHlbbV0gPT09IGRlZXBLZXkpIGNvcHlbbV0gPSByZXNbbV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcyA9IGNvcHk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCAmJiB0eXBlb2Ygam9pbkFycmF5cyA9PT0gJ3N0cmluZycgJiYgcmVzVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmVzID0gcmVzLmpvaW4oam9pbkFycmF5cyk7XG4gICAgICBpZiAocmVzKSByZXMgPSB0aGlzLmV4dGVuZFRyYW5zbGF0aW9uKHJlcywga2V5cywgb3B0aW9ucywgbGFzdEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB1c2VkRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgbGV0IHVzZWRLZXkgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG5lZWRzUGx1cmFsSGFuZGxpbmcgPSBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMuY291bnQgIT09ICdzdHJpbmcnO1xuICAgICAgY29uc3QgaGFzRGVmYXVsdFZhbHVlID0gVHJhbnNsYXRvci5oYXNEZWZhdWx0VmFsdWUob3B0aW9ucyk7XG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWVTdWZmaXggPSBuZWVkc1BsdXJhbEhhbmRsaW5nID8gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgobG5nLCBvcHRpb25zLmNvdW50LCBvcHRpb25zKSA6ICcnO1xuICAgICAgY29uc3QgZGVmYXVsdFZhbHVlU3VmZml4T3JkaW5hbEZhbGxiYWNrID0gb3B0aW9ucy5vcmRpbmFsICYmIG5lZWRzUGx1cmFsSGFuZGxpbmcgPyB0aGlzLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeChsbmcsIG9wdGlvbnMuY291bnQsIHtcbiAgICAgICAgb3JkaW5hbDogZmFsc2VcbiAgICAgIH0pIDogJyc7XG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBvcHRpb25zW2BkZWZhdWx0VmFsdWUke2RlZmF1bHRWYWx1ZVN1ZmZpeH1gXSB8fCBvcHRpb25zW2BkZWZhdWx0VmFsdWUke2RlZmF1bHRWYWx1ZVN1ZmZpeE9yZGluYWxGYWxsYmFja31gXSB8fCBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkTG9va3VwKHJlcykgJiYgaGFzRGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHVzZWREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgcmVzID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSkge1xuICAgICAgICB1c2VkS2V5ID0gdHJ1ZTtcbiAgICAgICAgcmVzID0ga2V5O1xuICAgICAgfVxuICAgICAgY29uc3QgbWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5ID0gb3B0aW9ucy5taXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgfHwgdGhpcy5vcHRpb25zLm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleTtcbiAgICAgIGNvbnN0IHJlc0Zvck1pc3NpbmcgPSBtaXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgJiYgdXNlZEtleSA/IHVuZGVmaW5lZCA6IHJlcztcbiAgICAgIGNvbnN0IHVwZGF0ZU1pc3NpbmcgPSBoYXNEZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlICE9PSByZXMgJiYgdGhpcy5vcHRpb25zLnVwZGF0ZU1pc3Npbmc7XG4gICAgICBpZiAodXNlZEtleSB8fCB1c2VkRGVmYXVsdCB8fCB1cGRhdGVNaXNzaW5nKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyh1cGRhdGVNaXNzaW5nID8gJ3VwZGF0ZUtleScgOiAnbWlzc2luZ0tleScsIGxuZywgbmFtZXNwYWNlLCBrZXksIHVwZGF0ZU1pc3NpbmcgPyBkZWZhdWx0VmFsdWUgOiByZXMpO1xuICAgICAgICBpZiAoa2V5U2VwYXJhdG9yKSB7XG4gICAgICAgICAgY29uc3QgZmsgPSB0aGlzLnJlc29sdmUoa2V5LCB7XG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAga2V5U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChmayAmJiBmay5yZXMpIHRoaXMubG9nZ2VyLndhcm4oJ1NlZW1zIHRoZSBsb2FkZWQgdHJhbnNsYXRpb25zIHdlcmUgaW4gZmxhdCBKU09OIGZvcm1hdCBpbnN0ZWFkIG9mIG5lc3RlZC4gRWl0aGVyIHNldCBrZXlTZXBhcmF0b3I6IGZhbHNlIG9uIGluaXQgb3IgbWFrZSBzdXJlIHlvdXIgdHJhbnNsYXRpb25zIGFyZSBwdWJsaXNoZWQgaW4gbmVzdGVkIGZvcm1hdC4nKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG5ncyA9IFtdO1xuICAgICAgICBjb25zdCBmYWxsYmFja0xuZ3MgPSB0aGlzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcsIG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nVG8gPT09ICdmYWxsYmFjaycgJiYgZmFsbGJhY2tMbmdzICYmIGZhbGxiYWNrTG5nc1swXSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFsbGJhY2tMbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsbmdzLnB1c2goZmFsbGJhY2tMbmdzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nVG8gPT09ICdhbGwnKSB7XG4gICAgICAgICAgbG5ncyA9IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG5ncy5wdXNoKG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmQgPSAobCwgaywgc3BlY2lmaWNEZWZhdWx0VmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZhdWx0Rm9yTWlzc2luZyA9IGhhc0RlZmF1bHRWYWx1ZSAmJiBzcGVjaWZpY0RlZmF1bHRWYWx1ZSAhPT0gcmVzID8gc3BlY2lmaWNEZWZhdWx0VmFsdWUgOiByZXNGb3JNaXNzaW5nO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWlzc2luZ0tleUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5taXNzaW5nS2V5SGFuZGxlcihsLCBuYW1lc3BhY2UsIGssIGRlZmF1bHRGb3JNaXNzaW5nLCB1cGRhdGVNaXNzaW5nLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja2VuZENvbm5lY3RvciAmJiB0aGlzLmJhY2tlbmRDb25uZWN0b3Iuc2F2ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZyhsLCBuYW1lc3BhY2UsIGssIGRlZmF1bHRGb3JNaXNzaW5nLCB1cGRhdGVNaXNzaW5nLCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0KCdtaXNzaW5nS2V5JywgbCwgbmFtZXNwYWNlLCBrLCByZXMpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zYXZlTWlzc2luZ1BsdXJhbHMgJiYgbmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgbG5ncy5mb3JFYWNoKGxhbmd1YWdlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXhlcyhsYW5ndWFnZSwgb3B0aW9ucykuZm9yRWFjaChzdWZmaXggPT4ge1xuICAgICAgICAgICAgICAgIHNlbmQoW2xhbmd1YWdlXSwga2V5ICsgc3VmZml4LCBvcHRpb25zW2BkZWZhdWx0VmFsdWUke3N1ZmZpeH1gXSB8fCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kKGxuZ3MsIGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcyA9IHRoaXMuZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXlzLCBvcHRpb25zLCByZXNvbHZlZCwgbGFzdEtleSk7XG4gICAgICBpZiAodXNlZEtleSAmJiByZXMgPT09IGtleSAmJiB0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9NaXNzaW5nS2V5KSByZXMgPSBgJHtuYW1lc3BhY2V9OiR7a2V5fWA7XG4gICAgICBpZiAoKHVzZWRLZXkgfHwgdXNlZERlZmF1bHQpICYmIHRoaXMub3B0aW9ucy5wYXJzZU1pc3NpbmdLZXlIYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUFQSSAhPT0gJ3YxJykge1xuICAgICAgICAgIHJlcyA9IHRoaXMub3B0aW9ucy5wYXJzZU1pc3NpbmdLZXlIYW5kbGVyKHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkgPyBgJHtuYW1lc3BhY2V9OiR7a2V5fWAgOiBrZXksIHVzZWREZWZhdWx0ID8gcmVzIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcihyZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICByZXNvbHZlZC5yZXMgPSByZXM7XG4gICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXksIG9wdGlvbnMsIHJlc29sdmVkLCBsYXN0S2V5KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5wYXJzZSkge1xuICAgICAgcmVzID0gdGhpcy5pMThuRm9ybWF0LnBhcnNlKHJlcywge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9LCByZXNvbHZlZC51c2VkTG5nLCByZXNvbHZlZC51c2VkTlMsIHJlc29sdmVkLnVzZWRLZXksIHtcbiAgICAgICAgcmVzb2x2ZWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuc2tpcEludGVycG9sYXRpb24pIHtcbiAgICAgIGlmIChvcHRpb25zLmludGVycG9sYXRpb24pIHRoaXMuaW50ZXJwb2xhdG9yLmluaXQoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAuLi57XG4gICAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb24sXG4gICAgICAgICAgICAuLi5vcHRpb25zLmludGVycG9sYXRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2tpcE9uVmFyaWFibGVzID0gdHlwZW9mIHJlcyA9PT0gJ3N0cmluZycgJiYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMpO1xuICAgICAgbGV0IG5lc3RCZWY7XG4gICAgICBpZiAoc2tpcE9uVmFyaWFibGVzKSB7XG4gICAgICAgIGNvbnN0IG5iID0gcmVzLm1hdGNoKHRoaXMuaW50ZXJwb2xhdG9yLm5lc3RpbmdSZWdleHApO1xuICAgICAgICBuZXN0QmVmID0gbmIgJiYgbmIubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLnJlcGxhY2UgJiYgdHlwZW9mIG9wdGlvbnMucmVwbGFjZSAhPT0gJ3N0cmluZycgPyBvcHRpb25zLnJlcGxhY2UgOiBvcHRpb25zO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMpIGRhdGEgPSB7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMsXG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH07XG4gICAgICByZXMgPSB0aGlzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShyZXMsIGRhdGEsIG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UsIG9wdGlvbnMpO1xuICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCBuYSA9IHJlcy5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgICAgY29uc3QgbmVzdEFmdCA9IG5hICYmIG5hLmxlbmd0aDtcbiAgICAgICAgaWYgKG5lc3RCZWYgPCBuZXN0QWZ0KSBvcHRpb25zLm5lc3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5sbmcgJiYgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScgJiYgcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzKSBvcHRpb25zLmxuZyA9IHJlc29sdmVkLnVzZWRMbmc7XG4gICAgICBpZiAob3B0aW9ucy5uZXN0ICE9PSBmYWxzZSkgcmVzID0gdGhpcy5pbnRlcnBvbGF0b3IubmVzdChyZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdEtleSAmJiBsYXN0S2V5WzBdID09PSBhcmdzWzBdICYmICFvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICBfdGhpcy5sb2dnZXIud2FybihgSXQgc2VlbXMgeW91IGFyZSBuZXN0aW5nIHJlY3Vyc2l2ZWx5IGtleTogJHthcmdzWzBdfSBpbiBrZXk6ICR7a2V5WzBdfWApO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy50cmFuc2xhdGUoLi4uYXJncywga2V5KTtcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuaW50ZXJwb2xhdGlvbikgdGhpcy5pbnRlcnBvbGF0b3IucmVzZXQoKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdFByb2Nlc3MgPSBvcHRpb25zLnBvc3RQcm9jZXNzIHx8IHRoaXMub3B0aW9ucy5wb3N0UHJvY2VzcztcbiAgICBjb25zdCBwb3N0UHJvY2Vzc29yTmFtZXMgPSB0eXBlb2YgcG9zdFByb2Nlc3MgPT09ICdzdHJpbmcnID8gW3Bvc3RQcm9jZXNzXSA6IHBvc3RQcm9jZXNzO1xuICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwgJiYgcG9zdFByb2Nlc3Nvck5hbWVzICYmIHBvc3RQcm9jZXNzb3JOYW1lcy5sZW5ndGggJiYgb3B0aW9ucy5hcHBseVBvc3RQcm9jZXNzb3IgIT09IGZhbHNlKSB7XG4gICAgICByZXMgPSBwb3N0UHJvY2Vzc29yLmhhbmRsZShwb3N0UHJvY2Vzc29yTmFtZXMsIHJlcywga2V5LCB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnBvc3RQcm9jZXNzUGFzc1Jlc29sdmVkID8ge1xuICAgICAgICBpMThuUmVzb2x2ZWQ6IHJlc29sdmVkLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9IDogb3B0aW9ucywgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgcmVzb2x2ZShrZXlzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGxldCBmb3VuZDtcbiAgICBsZXQgdXNlZEtleTtcbiAgICBsZXQgZXhhY3RVc2VkS2V5O1xuICAgIGxldCB1c2VkTG5nO1xuICAgIGxldCB1c2VkTlM7XG4gICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJykga2V5cyA9IFtrZXlzXTtcbiAgICBrZXlzLmZvckVhY2goayA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuICAgICAgY29uc3QgZXh0cmFjdGVkID0gdGhpcy5leHRyYWN0RnJvbUtleShrLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGtleSA9IGV4dHJhY3RlZC5rZXk7XG4gICAgICB1c2VkS2V5ID0ga2V5O1xuICAgICAgbGV0IG5hbWVzcGFjZXMgPSBleHRyYWN0ZWQubmFtZXNwYWNlcztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmFsbGJhY2tOUykgbmFtZXNwYWNlcyA9IG5hbWVzcGFjZXMuY29uY2F0KHRoaXMub3B0aW9ucy5mYWxsYmFja05TKTtcbiAgICAgIGNvbnN0IG5lZWRzUGx1cmFsSGFuZGxpbmcgPSBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMuY291bnQgIT09ICdzdHJpbmcnO1xuICAgICAgY29uc3QgbmVlZHNaZXJvU3VmZml4TG9va3VwID0gbmVlZHNQbHVyYWxIYW5kbGluZyAmJiAhb3B0aW9ucy5vcmRpbmFsICYmIG9wdGlvbnMuY291bnQgPT09IDAgJiYgdGhpcy5wbHVyYWxSZXNvbHZlci5zaG91bGRVc2VJbnRsQXBpKCk7XG4gICAgICBjb25zdCBuZWVkc0NvbnRleHRIYW5kbGluZyA9IG9wdGlvbnMuY29udGV4dCAhPT0gdW5kZWZpbmVkICYmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAnbnVtYmVyJykgJiYgb3B0aW9ucy5jb250ZXh0ICE9PSAnJztcbiAgICAgIGNvbnN0IGNvZGVzID0gb3B0aW9ucy5sbmdzID8gb3B0aW9ucy5sbmdzIDogdGhpcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlLCBvcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgIG5hbWVzcGFjZXMuZm9yRWFjaChucyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRMb29rdXAoZm91bmQpKSByZXR1cm47XG4gICAgICAgIHVzZWROUyA9IG5zO1xuICAgICAgICBpZiAoIWNoZWNrZWRMb2FkZWRGb3JbYCR7Y29kZXNbMF19LSR7bnN9YF0gJiYgdGhpcy51dGlscyAmJiB0aGlzLnV0aWxzLmhhc0xvYWRlZE5hbWVzcGFjZSAmJiAhdGhpcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UodXNlZE5TKSkge1xuICAgICAgICAgIGNoZWNrZWRMb2FkZWRGb3JbYCR7Y29kZXNbMF19LSR7bnN9YF0gPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYGtleSBcIiR7dXNlZEtleX1cIiBmb3IgbGFuZ3VhZ2VzIFwiJHtjb2Rlcy5qb2luKCcsICcpfVwiIHdvbid0IGdldCByZXNvbHZlZCBhcyBuYW1lc3BhY2UgXCIke3VzZWROU31cIiB3YXMgbm90IHlldCBsb2FkZWRgLCAnVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29kZXMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuICAgICAgICAgIHVzZWRMbmcgPSBjb2RlO1xuICAgICAgICAgIGNvbnN0IGZpbmFsS2V5cyA9IFtrZXldO1xuICAgICAgICAgIGlmICh0aGlzLmkxOG5Gb3JtYXQgJiYgdGhpcy5pMThuRm9ybWF0LmFkZExvb2t1cEtleXMpIHtcbiAgICAgICAgICAgIHRoaXMuaTE4bkZvcm1hdC5hZGRMb29rdXBLZXlzKGZpbmFsS2V5cywga2V5LCBjb2RlLCBucywgb3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwbHVyYWxTdWZmaXg7XG4gICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykgcGx1cmFsU3VmZml4ID0gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgoY29kZSwgb3B0aW9ucy5jb3VudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBjb25zdCB6ZXJvU3VmZml4ID0gYCR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn16ZXJvYDtcbiAgICAgICAgICAgIGNvbnN0IG9yZGluYWxQcmVmaXggPSBgJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfW9yZGluYWwke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9YDtcbiAgICAgICAgICAgIGlmIChuZWVkc1BsdXJhbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGtleSArIHBsdXJhbFN1ZmZpeCk7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLm9yZGluYWwgJiYgcGx1cmFsU3VmZml4LmluZGV4T2Yob3JkaW5hbFByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChrZXkgKyBwbHVyYWxTdWZmaXgucmVwbGFjZShvcmRpbmFsUHJlZml4LCB0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG5lZWRzWmVyb1N1ZmZpeExvb2t1cCkge1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGtleSArIHplcm9TdWZmaXgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmVlZHNDb250ZXh0SGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgY29uc3QgY29udGV4dEtleSA9IGAke2tleX0ke3RoaXMub3B0aW9ucy5jb250ZXh0U2VwYXJhdG9yfSR7b3B0aW9ucy5jb250ZXh0fWA7XG4gICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkpO1xuICAgICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkgKyBwbHVyYWxTdWZmaXgpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9yZGluYWwgJiYgcGx1cmFsU3VmZml4LmluZGV4T2Yob3JkaW5hbFByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkgKyBwbHVyYWxTdWZmaXgucmVwbGFjZShvcmRpbmFsUHJlZml4LCB0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZWVkc1plcm9TdWZmaXhMb29rdXApIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkgKyB6ZXJvU3VmZml4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHBvc3NpYmxlS2V5O1xuICAgICAgICAgIHdoaWxlIChwb3NzaWJsZUtleSA9IGZpbmFsS2V5cy5wb3AoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAoZm91bmQpKSB7XG4gICAgICAgICAgICAgIGV4YWN0VXNlZEtleSA9IHBvc3NpYmxlS2V5O1xuICAgICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0UmVzb3VyY2UoY29kZSwgbnMsIHBvc3NpYmxlS2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlczogZm91bmQsXG4gICAgICB1c2VkS2V5LFxuICAgICAgZXhhY3RVc2VkS2V5LFxuICAgICAgdXNlZExuZyxcbiAgICAgIHVzZWROU1xuICAgIH07XG4gIH1cbiAgaXNWYWxpZExvb2t1cChyZXMpIHtcbiAgICByZXR1cm4gcmVzICE9PSB1bmRlZmluZWQgJiYgISghdGhpcy5vcHRpb25zLnJldHVybk51bGwgJiYgcmVzID09PSBudWxsKSAmJiAhKCF0aGlzLm9wdGlvbnMucmV0dXJuRW1wdHlTdHJpbmcgJiYgcmVzID09PSAnJyk7XG4gIH1cbiAgZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5nZXRSZXNvdXJjZSkgcmV0dXJuIHRoaXMuaTE4bkZvcm1hdC5nZXRSZXNvdXJjZShjb2RlLCBucywga2V5LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVN0b3JlLmdldFJlc291cmNlKGNvZGUsIG5zLCBrZXksIG9wdGlvbnMpO1xuICB9XG4gIHN0YXRpYyBoYXNEZWZhdWx0VmFsdWUob3B0aW9ucykge1xuICAgIGNvbnN0IHByZWZpeCA9ICdkZWZhdWx0VmFsdWUnO1xuICAgIGZvciAoY29uc3Qgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgb3B0aW9uKSAmJiBwcmVmaXggPT09IG9wdGlvbi5zdWJzdHJpbmcoMCwgcHJlZml4Lmxlbmd0aCkgJiYgdW5kZWZpbmVkICE9PSBvcHRpb25zW29wdGlvbl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuY2xhc3MgTGFuZ3VhZ2VVdGlsIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdXBwb3J0ZWRMbmdzID0gdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MgfHwgZmFsc2U7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnbGFuZ3VhZ2VVdGlscycpO1xuICB9XG4gIGdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKSB7XG4gICAgY29kZSA9IGdldENsZWFuZWRDb2RlKGNvZGUpO1xuICAgIGlmICghY29kZSB8fCBjb2RlLmluZGV4T2YoJy0nKSA8IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgaWYgKHAubGVuZ3RoID09PSAyKSByZXR1cm4gbnVsbDtcbiAgICBwLnBvcCgpO1xuICAgIGlmIChwW3AubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUocC5qb2luKCctJykpO1xuICB9XG4gIGdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICBjb2RlID0gZ2V0Q2xlYW5lZENvZGUoY29kZSk7XG4gICAgaWYgKCFjb2RlIHx8IGNvZGUuaW5kZXhPZignLScpIDwgMCkgcmV0dXJuIGNvZGU7XG4gICAgY29uc3QgcCA9IGNvZGUuc3BsaXQoJy0nKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUocFswXSk7XG4gIH1cbiAgZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpIHtcbiAgICBpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnICYmIGNvZGUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIGNvbnN0IHNwZWNpYWxDYXNlcyA9IFsnaGFucycsICdoYW50JywgJ2xhdG4nLCAnY3lybCcsICdjYW5zJywgJ21vbmcnLCAnYXJhYiddO1xuICAgICAgbGV0IHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZykge1xuICAgICAgICBwID0gcC5tYXAocGFydCA9PiBwYXJ0LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIGlmIChwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBwWzBdID0gcFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBwWzFdID0gcFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsxXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzFdID0gY2FwaXRhbGl6ZShwWzFdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIGlmIChwLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBwWzBdID0gcFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocFsxXS5sZW5ndGggPT09IDIpIHBbMV0gPSBwWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChwWzBdICE9PSAnc2duJyAmJiBwWzJdLmxlbmd0aCA9PT0gMikgcFsyXSA9IHBbMl0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHNwZWNpYWxDYXNlcy5pbmRleE9mKHBbMV0udG9Mb3dlckNhc2UoKSkgPiAtMSkgcFsxXSA9IGNhcGl0YWxpemUocFsxXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKHNwZWNpYWxDYXNlcy5pbmRleE9mKHBbMl0udG9Mb3dlckNhc2UoKSkgPiAtMSkgcFsyXSA9IGNhcGl0YWxpemUocFsyXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwLmpvaW4oJy0nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGVhbkNvZGUgfHwgdGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZyA/IGNvZGUudG9Mb3dlckNhc2UoKSA6IGNvZGU7XG4gIH1cbiAgaXNTdXBwb3J0ZWRDb2RlKGNvZGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgPT09ICdsYW5ndWFnZU9ubHknIHx8IHRoaXMub3B0aW9ucy5ub25FeHBsaWNpdFN1cHBvcnRlZExuZ3MpIHtcbiAgICAgIGNvZGUgPSB0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuc3VwcG9ydGVkTG5ncyB8fCAhdGhpcy5zdXBwb3J0ZWRMbmdzLmxlbmd0aCB8fCB0aGlzLnN1cHBvcnRlZExuZ3MuaW5kZXhPZihjb2RlKSA+IC0xO1xuICB9XG4gIGdldEJlc3RNYXRjaEZyb21Db2Rlcyhjb2Rlcykge1xuICAgIGlmICghY29kZXMpIHJldHVybiBudWxsO1xuICAgIGxldCBmb3VuZDtcbiAgICBjb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgaWYgKGZvdW5kKSByZXR1cm47XG4gICAgICBjb25zdCBjbGVhbmVkTG5nID0gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSk7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzIHx8IHRoaXMuaXNTdXBwb3J0ZWRDb2RlKGNsZWFuZWRMbmcpKSBmb3VuZCA9IGNsZWFuZWRMbmc7XG4gICAgfSk7XG4gICAgaWYgKCFmb3VuZCAmJiB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncykge1xuICAgICAgY29kZXMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgaWYgKGZvdW5kKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxuZ09ubHkgPSB0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpO1xuICAgICAgICBpZiAodGhpcy5pc1N1cHBvcnRlZENvZGUobG5nT25seSkpIHJldHVybiBmb3VuZCA9IGxuZ09ubHk7XG4gICAgICAgIGZvdW5kID0gdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MuZmluZChzdXBwb3J0ZWRMbmcgPT4ge1xuICAgICAgICAgIGlmIChzdXBwb3J0ZWRMbmcgPT09IGxuZ09ubHkpIHJldHVybiBzdXBwb3J0ZWRMbmc7XG4gICAgICAgICAgaWYgKHN1cHBvcnRlZExuZy5pbmRleE9mKCctJykgPCAwICYmIGxuZ09ubHkuaW5kZXhPZignLScpIDwgMCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChzdXBwb3J0ZWRMbmcuaW5kZXhPZihsbmdPbmx5KSA9PT0gMCkgcmV0dXJuIHN1cHBvcnRlZExuZztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFmb3VuZCkgZm91bmQgPSB0aGlzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nKVswXTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgZ2V0RmFsbGJhY2tDb2RlcyhmYWxsYmFja3MsIGNvZGUpIHtcbiAgICBpZiAoIWZhbGxiYWNrcykgcmV0dXJuIFtdO1xuICAgIGlmICh0eXBlb2YgZmFsbGJhY2tzID09PSAnZnVuY3Rpb24nKSBmYWxsYmFja3MgPSBmYWxsYmFja3MoY29kZSk7XG4gICAgaWYgKHR5cGVvZiBmYWxsYmFja3MgPT09ICdzdHJpbmcnKSBmYWxsYmFja3MgPSBbZmFsbGJhY2tzXTtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShmYWxsYmFja3MpID09PSAnW29iamVjdCBBcnJheV0nKSByZXR1cm4gZmFsbGJhY2tzO1xuICAgIGlmICghY29kZSkgcmV0dXJuIGZhbGxiYWNrcy5kZWZhdWx0IHx8IFtdO1xuICAgIGxldCBmb3VuZCA9IGZhbGxiYWNrc1tjb2RlXTtcbiAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrc1t0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKV07XG4gICAgaWYgKCFmb3VuZCkgZm91bmQgPSBmYWxsYmFja3NbdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSldO1xuICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSldO1xuICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzLmRlZmF1bHQ7XG4gICAgcmV0dXJuIGZvdW5kIHx8IFtdO1xuICB9XG4gIHRvUmVzb2x2ZUhpZXJhcmNoeShjb2RlLCBmYWxsYmFja0NvZGUpIHtcbiAgICBjb25zdCBmYWxsYmFja0NvZGVzID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKGZhbGxiYWNrQ29kZSB8fCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgfHwgW10sIGNvZGUpO1xuICAgIGNvbnN0IGNvZGVzID0gW107XG4gICAgY29uc3QgYWRkQ29kZSA9IGMgPT4ge1xuICAgICAgaWYgKCFjKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5pc1N1cHBvcnRlZENvZGUoYykpIHtcbiAgICAgICAgY29kZXMucHVzaChjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYHJlamVjdGluZyBsYW5ndWFnZSBjb2RlIG5vdCBmb3VuZCBpbiBzdXBwb3J0ZWRMbmdzOiAke2N9YCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnICYmIChjb2RlLmluZGV4T2YoJy0nKSA+IC0xIHx8IGNvZGUuaW5kZXhPZignXycpID4gLTEpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgIT09ICdsYW5ndWFnZU9ubHknKSBhZGRDb2RlKHRoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2xhbmd1YWdlT25seScgJiYgdGhpcy5vcHRpb25zLmxvYWQgIT09ICdjdXJyZW50T25seScpIGFkZENvZGUodGhpcy5nZXRTY3JpcHRQYXJ0RnJvbUNvZGUoY29kZSkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2FkICE9PSAnY3VycmVudE9ubHknKSBhZGRDb2RlKHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhZGRDb2RlKHRoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpKTtcbiAgICB9XG4gICAgZmFsbGJhY2tDb2Rlcy5mb3JFYWNoKGZjID0+IHtcbiAgICAgIGlmIChjb2Rlcy5pbmRleE9mKGZjKSA8IDApIGFkZENvZGUodGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoZmMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29kZXM7XG4gIH1cbn1cblxubGV0IHNldHMgPSBbe1xuICBsbmdzOiBbJ2FjaCcsICdhaycsICdhbScsICdhcm4nLCAnYnInLCAnZmlsJywgJ2d1bicsICdsbicsICdtZmUnLCAnbWcnLCAnbWknLCAnb2MnLCAncHQnLCAncHQtQlInLCAndGcnLCAndGwnLCAndGknLCAndHInLCAndXonLCAnd2EnXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDFcbn0sIHtcbiAgbG5nczogWydhZicsICdhbicsICdhc3QnLCAnYXonLCAnYmcnLCAnYm4nLCAnY2EnLCAnZGEnLCAnZGUnLCAnZGV2JywgJ2VsJywgJ2VuJywgJ2VvJywgJ2VzJywgJ2V0JywgJ2V1JywgJ2ZpJywgJ2ZvJywgJ2Z1cicsICdmeScsICdnbCcsICdndScsICdoYScsICdoaScsICdodScsICdoeScsICdpYScsICdpdCcsICdraycsICdrbicsICdrdScsICdsYicsICdtYWknLCAnbWwnLCAnbW4nLCAnbXInLCAnbmFoJywgJ25hcCcsICduYicsICduZScsICdubCcsICdubicsICdubycsICduc28nLCAncGEnLCAncGFwJywgJ3BtcycsICdwcycsICdwdC1QVCcsICdybScsICdzY28nLCAnc2UnLCAnc2knLCAnc28nLCAnc29uJywgJ3NxJywgJ3N2JywgJ3N3JywgJ3RhJywgJ3RlJywgJ3RrJywgJ3VyJywgJ3lvJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAyXG59LCB7XG4gIGxuZ3M6IFsnYXknLCAnYm8nLCAnY2dnJywgJ2ZhJywgJ2h0JywgJ2lkJywgJ2phJywgJ2pibycsICdrYScsICdrbScsICdrbycsICdreScsICdsbycsICdtcycsICdzYWgnLCAnc3UnLCAndGgnLCAndHQnLCAndWcnLCAndmknLCAnd28nLCAnemgnXSxcbiAgbnI6IFsxXSxcbiAgZmM6IDNcbn0sIHtcbiAgbG5nczogWydiZScsICdicycsICdjbnInLCAnZHonLCAnaHInLCAncnUnLCAnc3InLCAndWsnXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDRcbn0sIHtcbiAgbG5nczogWydhciddLFxuICBucjogWzAsIDEsIDIsIDMsIDExLCAxMDBdLFxuICBmYzogNVxufSwge1xuICBsbmdzOiBbJ2NzJywgJ3NrJ10sXG4gIG5yOiBbMSwgMiwgNV0sXG4gIGZjOiA2XG59LCB7XG4gIGxuZ3M6IFsnY3NiJywgJ3BsJ10sXG4gIG5yOiBbMSwgMiwgNV0sXG4gIGZjOiA3XG59LCB7XG4gIGxuZ3M6IFsnY3knXSxcbiAgbnI6IFsxLCAyLCAzLCA4XSxcbiAgZmM6IDhcbn0sIHtcbiAgbG5nczogWydmciddLFxuICBucjogWzEsIDJdLFxuICBmYzogOVxufSwge1xuICBsbmdzOiBbJ2dhJ10sXG4gIG5yOiBbMSwgMiwgMywgNywgMTFdLFxuICBmYzogMTBcbn0sIHtcbiAgbG5nczogWydnZCddLFxuICBucjogWzEsIDIsIDMsIDIwXSxcbiAgZmM6IDExXG59LCB7XG4gIGxuZ3M6IFsnaXMnXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDEyXG59LCB7XG4gIGxuZ3M6IFsnanYnXSxcbiAgbnI6IFswLCAxXSxcbiAgZmM6IDEzXG59LCB7XG4gIGxuZ3M6IFsna3cnXSxcbiAgbnI6IFsxLCAyLCAzLCA0XSxcbiAgZmM6IDE0XG59LCB7XG4gIGxuZ3M6IFsnbHQnXSxcbiAgbnI6IFsxLCAyLCAxMF0sXG4gIGZjOiAxNVxufSwge1xuICBsbmdzOiBbJ2x2J10sXG4gIG5yOiBbMSwgMiwgMF0sXG4gIGZjOiAxNlxufSwge1xuICBsbmdzOiBbJ21rJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAxN1xufSwge1xuICBsbmdzOiBbJ21uayddLFxuICBucjogWzAsIDEsIDJdLFxuICBmYzogMThcbn0sIHtcbiAgbG5nczogWydtdCddLFxuICBucjogWzEsIDIsIDExLCAyMF0sXG4gIGZjOiAxOVxufSwge1xuICBsbmdzOiBbJ29yJ10sXG4gIG5yOiBbMiwgMV0sXG4gIGZjOiAyXG59LCB7XG4gIGxuZ3M6IFsncm8nXSxcbiAgbnI6IFsxLCAyLCAyMF0sXG4gIGZjOiAyMFxufSwge1xuICBsbmdzOiBbJ3NsJ10sXG4gIG5yOiBbNSwgMSwgMiwgM10sXG4gIGZjOiAyMVxufSwge1xuICBsbmdzOiBbJ2hlJywgJ2l3J10sXG4gIG5yOiBbMSwgMiwgMjAsIDIxXSxcbiAgZmM6IDIyXG59XTtcbmxldCBfcnVsZXNQbHVyYWxzVHlwZXMgPSB7XG4gIDE6IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID4gMSk7XG4gIH0sXG4gIDI6IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICE9IDEpO1xuICB9LFxuICAzOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiAwO1xuICB9LFxuICA0OiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpO1xuICB9LFxuICA1OiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAwID8gMCA6IG4gPT0gMSA/IDEgOiBuID09IDIgPyAyIDogbiAlIDEwMCA+PSAzICYmIG4gJSAxMDAgPD0gMTAgPyAzIDogbiAlIDEwMCA+PSAxMSA/IDQgOiA1KTtcbiAgfSxcbiAgNjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID49IDIgJiYgbiA8PSA0ID8gMSA6IDIpO1xuICB9LFxuICA3OiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMik7XG4gIH0sXG4gIDg6IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gIT0gOCAmJiBuICE9IDExID8gMiA6IDMpO1xuICB9LFxuICA5OiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiA+PSAyKTtcbiAgfSxcbiAgMTA6IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPCA3ID8gMiA6IG4gPCAxMSA/IDMgOiA0KTtcbiAgfSxcbiAgMTE6IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgfHwgbiA9PSAxMSA/IDAgOiBuID09IDIgfHwgbiA9PSAxMiA/IDEgOiBuID4gMiAmJiBuIDwgMjAgPyAyIDogMyk7XG4gIH0sXG4gIDEyOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwICE9IDEgfHwgbiAlIDEwMCA9PSAxMSk7XG4gIH0sXG4gIDEzOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiAhPT0gMCk7XG4gIH0sXG4gIDE0OiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMiA/IDEgOiBuID09IDMgPyAyIDogMyk7XG4gIH0sXG4gIDE1OiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiBuICUgMTAgPj0gMiAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpO1xuICB9LFxuICAxNjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAhPT0gMCA/IDEgOiAyKTtcbiAgfSxcbiAgMTc6IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgfHwgbiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiAxKTtcbiAgfSxcbiAgMTg6IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDAgPyAwIDogbiA9PSAxID8gMSA6IDIpO1xuICB9LFxuICAxOTogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDAgfHwgbiAlIDEwMCA+IDEgJiYgbiAlIDEwMCA8IDExID8gMSA6IG4gJSAxMDAgPiAxMCAmJiBuICUgMTAwIDwgMjAgPyAyIDogMyk7XG4gIH0sXG4gIDIwOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMCB8fCBuICUgMTAwID4gMCAmJiBuICUgMTAwIDwgMjAgPyAxIDogMik7XG4gIH0sXG4gIDIxOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwMCA9PSAxID8gMSA6IG4gJSAxMDAgPT0gMiA/IDIgOiBuICUgMTAwID09IDMgfHwgbiAlIDEwMCA9PSA0ID8gMyA6IDApO1xuICB9LFxuICAyMjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogKG4gPCAwIHx8IG4gPiAxMCkgJiYgbiAlIDEwID09IDAgPyAyIDogMyk7XG4gIH1cbn07XG5jb25zdCBub25JbnRsVmVyc2lvbnMgPSBbJ3YxJywgJ3YyJywgJ3YzJ107XG5jb25zdCBpbnRsVmVyc2lvbnMgPSBbJ3Y0J107XG5jb25zdCBzdWZmaXhlc09yZGVyID0ge1xuICB6ZXJvOiAwLFxuICBvbmU6IDEsXG4gIHR3bzogMixcbiAgZmV3OiAzLFxuICBtYW55OiA0LFxuICBvdGhlcjogNVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVJ1bGVzKCkge1xuICBjb25zdCBydWxlcyA9IHt9O1xuICBzZXRzLmZvckVhY2goc2V0ID0+IHtcbiAgICBzZXQubG5ncy5mb3JFYWNoKGwgPT4ge1xuICAgICAgcnVsZXNbbF0gPSB7XG4gICAgICAgIG51bWJlcnM6IHNldC5ucixcbiAgICAgICAgcGx1cmFsczogX3J1bGVzUGx1cmFsc1R5cGVzW3NldC5mY11cbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcnVsZXM7XG59XG5jbGFzcyBQbHVyYWxSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKGxhbmd1YWdlVXRpbHMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdGhpcy5sYW5ndWFnZVV0aWxzID0gbGFuZ3VhZ2VVdGlscztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ3BsdXJhbFJlc29sdmVyJyk7XG4gICAgaWYgKCghdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OIHx8IGludGxWZXJzaW9ucy5pbmNsdWRlcyh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04pKSAmJiAodHlwZW9mIEludGwgPT09ICd1bmRlZmluZWQnIHx8ICFJbnRsLlBsdXJhbFJ1bGVzKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID0gJ3YzJztcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdZb3VyIGVudmlyb25tZW50IHNlZW1zIG5vdCB0byBiZSBJbnRsIEFQSSBjb21wYXRpYmxlLCB1c2UgYW4gSW50bC5QbHVyYWxSdWxlcyBwb2x5ZmlsbC4gV2lsbCBmYWxsYmFjayB0byB0aGUgY29tcGF0aWJpbGl0eUpTT04gdjMgZm9ybWF0IGhhbmRsaW5nLicpO1xuICAgIH1cbiAgICB0aGlzLnJ1bGVzID0gY3JlYXRlUnVsZXMoKTtcbiAgfVxuICBhZGRSdWxlKGxuZywgb2JqKSB7XG4gICAgdGhpcy5ydWxlc1tsbmddID0gb2JqO1xuICB9XG4gIGdldFJ1bGUoY29kZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuZXcgSW50bC5QbHVyYWxSdWxlcyhnZXRDbGVhbmVkQ29kZShjb2RlKSwge1xuICAgICAgICAgIHR5cGU6IG9wdGlvbnMub3JkaW5hbCA/ICdvcmRpbmFsJyA6ICdjYXJkaW5hbCdcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ydWxlc1tjb2RlXSB8fCB0aGlzLnJ1bGVzW3RoaXMubGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKV07XG4gIH1cbiAgbmVlZHNQbHVyYWwoY29kZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgcmV0dXJuIHJ1bGUgJiYgcnVsZS5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzLmxlbmd0aCA+IDE7XG4gICAgfVxuICAgIHJldHVybiBydWxlICYmIHJ1bGUubnVtYmVycy5sZW5ndGggPiAxO1xuICB9XG4gIGdldFBsdXJhbEZvcm1zT2ZLZXkoY29kZSwga2V5KSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHJldHVybiB0aGlzLmdldFN1ZmZpeGVzKGNvZGUsIG9wdGlvbnMpLm1hcChzdWZmaXggPT4gYCR7a2V5fSR7c3VmZml4fWApO1xuICB9XG4gIGdldFN1ZmZpeGVzKGNvZGUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZShjb2RlLCBvcHRpb25zKTtcbiAgICBpZiAoIXJ1bGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICByZXR1cm4gcnVsZS5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzLnNvcnQoKHBsdXJhbENhdGVnb3J5MSwgcGx1cmFsQ2F0ZWdvcnkyKSA9PiBzdWZmaXhlc09yZGVyW3BsdXJhbENhdGVnb3J5MV0gLSBzdWZmaXhlc09yZGVyW3BsdXJhbENhdGVnb3J5Ml0pLm1hcChwbHVyYWxDYXRlZ29yeSA9PiBgJHt0aGlzLm9wdGlvbnMucHJlcGVuZH0ke29wdGlvbnMub3JkaW5hbCA/IGBvcmRpbmFsJHt0aGlzLm9wdGlvbnMucHJlcGVuZH1gIDogJyd9JHtwbHVyYWxDYXRlZ29yeX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGUubnVtYmVycy5tYXAobnVtYmVyID0+IHRoaXMuZ2V0U3VmZml4KGNvZGUsIG51bWJlciwgb3B0aW9ucykpO1xuICB9XG4gIGdldFN1ZmZpeChjb2RlLCBjb3VudCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuICAgIGlmIChydWxlKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wcmVwZW5kfSR7b3B0aW9ucy5vcmRpbmFsID8gYG9yZGluYWwke3RoaXMub3B0aW9ucy5wcmVwZW5kfWAgOiAnJ30ke3J1bGUuc2VsZWN0KGNvdW50KX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlKHJ1bGUsIGNvdW50KTtcbiAgICB9XG4gICAgdGhpcy5sb2dnZXIud2Fybihgbm8gcGx1cmFsIHJ1bGUgZm91bmQgZm9yOiAke2NvZGV9YCk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGdldFN1ZmZpeFJldHJvQ29tcGF0aWJsZShydWxlLCBjb3VudCkge1xuICAgIGNvbnN0IGlkeCA9IHJ1bGUubm9BYnMgPyBydWxlLnBsdXJhbHMoY291bnQpIDogcnVsZS5wbHVyYWxzKE1hdGguYWJzKGNvdW50KSk7XG4gICAgbGV0IHN1ZmZpeCA9IHJ1bGUubnVtYmVyc1tpZHhdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXggJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA9PT0gMiAmJiBydWxlLm51bWJlcnNbMF0gPT09IDEpIHtcbiAgICAgIGlmIChzdWZmaXggPT09IDIpIHtcbiAgICAgICAgc3VmZml4ID0gJ3BsdXJhbCc7XG4gICAgICB9IGVsc2UgaWYgKHN1ZmZpeCA9PT0gMSkge1xuICAgICAgICBzdWZmaXggPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmV0dXJuU3VmZml4ID0gKCkgPT4gdGhpcy5vcHRpb25zLnByZXBlbmQgJiYgc3VmZml4LnRvU3RyaW5nKCkgPyB0aGlzLm9wdGlvbnMucHJlcGVuZCArIHN1ZmZpeC50b1N0cmluZygpIDogc3VmZml4LnRvU3RyaW5nKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiA9PT0gJ3YxJykge1xuICAgICAgaWYgKHN1ZmZpeCA9PT0gMSkgcmV0dXJuICcnO1xuICAgICAgaWYgKHR5cGVvZiBzdWZmaXggPT09ICdudW1iZXInKSByZXR1cm4gYF9wbHVyYWxfJHtzdWZmaXgudG9TdHJpbmcoKX1gO1xuICAgICAgcmV0dXJuIHJldHVyblN1ZmZpeCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjInKSB7XG4gICAgICByZXR1cm4gcmV0dXJuU3VmZml4KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXggJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA9PT0gMiAmJiBydWxlLm51bWJlcnNbMF0gPT09IDEpIHtcbiAgICAgIHJldHVybiByZXR1cm5TdWZmaXgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wcmVwZW5kICYmIGlkeC50b1N0cmluZygpID8gdGhpcy5vcHRpb25zLnByZXBlbmQgKyBpZHgudG9TdHJpbmcoKSA6IGlkeC50b1N0cmluZygpO1xuICB9XG4gIHNob3VsZFVzZUludGxBcGkoKSB7XG4gICAgcmV0dXJuICFub25JbnRsVmVyc2lvbnMuaW5jbHVkZXModGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWVwRmluZFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwga2V5KSB7XG4gIGxldCBrZXlTZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6ICcuJztcbiAgbGV0IGlnbm9yZUpTT05TdHJ1Y3R1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IHRydWU7XG4gIGxldCBwYXRoID0gZ2V0UGF0aFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwga2V5KTtcbiAgaWYgKCFwYXRoICYmIGlnbm9yZUpTT05TdHJ1Y3R1cmUgJiYgdHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXRoID0gZGVlcEZpbmQoZGF0YSwga2V5LCBrZXlTZXBhcmF0b3IpO1xuICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHBhdGggPSBkZWVwRmluZChkZWZhdWx0RGF0YSwga2V5LCBrZXlTZXBhcmF0b3IpO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuY2xhc3MgSW50ZXJwb2xhdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2ludGVycG9sYXRvcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5mb3JtYXQgPSBvcHRpb25zLmludGVycG9sYXRpb24gJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCB8fCAodmFsdWUgPT4gdmFsdWUpO1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAoIW9wdGlvbnMuaW50ZXJwb2xhdGlvbikgb3B0aW9ucy5pbnRlcnBvbGF0aW9uID0ge1xuICAgICAgZXNjYXBlVmFsdWU6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IGlPcHRzID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uO1xuICAgIHRoaXMuZXNjYXBlID0gaU9wdHMuZXNjYXBlICE9PSB1bmRlZmluZWQgPyBpT3B0cy5lc2NhcGUgOiBlc2NhcGU7XG4gICAgdGhpcy5lc2NhcGVWYWx1ZSA9IGlPcHRzLmVzY2FwZVZhbHVlICE9PSB1bmRlZmluZWQgPyBpT3B0cy5lc2NhcGVWYWx1ZSA6IHRydWU7XG4gICAgdGhpcy51c2VSYXdWYWx1ZVRvRXNjYXBlID0gaU9wdHMudXNlUmF3VmFsdWVUb0VzY2FwZSAhPT0gdW5kZWZpbmVkID8gaU9wdHMudXNlUmF3VmFsdWVUb0VzY2FwZSA6IGZhbHNlO1xuICAgIHRoaXMucHJlZml4ID0gaU9wdHMucHJlZml4ID8gcmVnZXhFc2NhcGUoaU9wdHMucHJlZml4KSA6IGlPcHRzLnByZWZpeEVzY2FwZWQgfHwgJ3t7JztcbiAgICB0aGlzLnN1ZmZpeCA9IGlPcHRzLnN1ZmZpeCA/IHJlZ2V4RXNjYXBlKGlPcHRzLnN1ZmZpeCkgOiBpT3B0cy5zdWZmaXhFc2NhcGVkIHx8ICd9fSc7XG4gICAgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgPyBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgOiBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgfHwgJywnO1xuICAgIHRoaXMudW5lc2NhcGVQcmVmaXggPSBpT3B0cy51bmVzY2FwZVN1ZmZpeCA/ICcnIDogaU9wdHMudW5lc2NhcGVQcmVmaXggfHwgJy0nO1xuICAgIHRoaXMudW5lc2NhcGVTdWZmaXggPSB0aGlzLnVuZXNjYXBlUHJlZml4ID8gJycgOiBpT3B0cy51bmVzY2FwZVN1ZmZpeCB8fCAnJztcbiAgICB0aGlzLm5lc3RpbmdQcmVmaXggPSBpT3B0cy5uZXN0aW5nUHJlZml4ID8gcmVnZXhFc2NhcGUoaU9wdHMubmVzdGluZ1ByZWZpeCkgOiBpT3B0cy5uZXN0aW5nUHJlZml4RXNjYXBlZCB8fCByZWdleEVzY2FwZSgnJHQoJyk7XG4gICAgdGhpcy5uZXN0aW5nU3VmZml4ID0gaU9wdHMubmVzdGluZ1N1ZmZpeCA/IHJlZ2V4RXNjYXBlKGlPcHRzLm5lc3RpbmdTdWZmaXgpIDogaU9wdHMubmVzdGluZ1N1ZmZpeEVzY2FwZWQgfHwgcmVnZXhFc2NhcGUoJyknKTtcbiAgICB0aGlzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yID0gaU9wdHMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgPyBpT3B0cy5uZXN0aW5nT3B0aW9uc1NlcGFyYXRvciA6IGlPcHRzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yIHx8ICcsJztcbiAgICB0aGlzLm1heFJlcGxhY2VzID0gaU9wdHMubWF4UmVwbGFjZXMgPyBpT3B0cy5tYXhSZXBsYWNlcyA6IDEwMDA7XG4gICAgdGhpcy5hbHdheXNGb3JtYXQgPSBpT3B0cy5hbHdheXNGb3JtYXQgIT09IHVuZGVmaW5lZCA/IGlPcHRzLmFsd2F5c0Zvcm1hdCA6IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZWdFeHAoKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB0aGlzLmluaXQodGhpcy5vcHRpb25zKTtcbiAgfVxuICByZXNldFJlZ0V4cCgpIHtcbiAgICBjb25zdCByZWdleHBTdHIgPSBgJHt0aGlzLnByZWZpeH0oLis/KSR7dGhpcy5zdWZmaXh9YDtcbiAgICB0aGlzLnJlZ2V4cCA9IG5ldyBSZWdFeHAocmVnZXhwU3RyLCAnZycpO1xuICAgIGNvbnN0IHJlZ2V4cFVuZXNjYXBlU3RyID0gYCR7dGhpcy5wcmVmaXh9JHt0aGlzLnVuZXNjYXBlUHJlZml4fSguKz8pJHt0aGlzLnVuZXNjYXBlU3VmZml4fSR7dGhpcy5zdWZmaXh9YDtcbiAgICB0aGlzLnJlZ2V4cFVuZXNjYXBlID0gbmV3IFJlZ0V4cChyZWdleHBVbmVzY2FwZVN0ciwgJ2cnKTtcbiAgICBjb25zdCBuZXN0aW5nUmVnZXhwU3RyID0gYCR7dGhpcy5uZXN0aW5nUHJlZml4fSguKz8pJHt0aGlzLm5lc3RpbmdTdWZmaXh9YDtcbiAgICB0aGlzLm5lc3RpbmdSZWdleHAgPSBuZXcgUmVnRXhwKG5lc3RpbmdSZWdleHBTdHIsICdnJyk7XG4gIH1cbiAgaW50ZXJwb2xhdGUoc3RyLCBkYXRhLCBsbmcsIG9wdGlvbnMpIHtcbiAgICBsZXQgbWF0Y2g7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCByZXBsYWNlcztcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzIHx8IHt9O1xuICAgIGZ1bmN0aW9uIHJlZ2V4U2FmZSh2YWwpIHtcbiAgICAgIHJldHVybiB2YWwucmVwbGFjZSgvXFwkL2csICckJCQkJyk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUZvcm1hdCA9IGtleSA9PiB7XG4gICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5mb3JtYXRTZXBhcmF0b3IpIDwgMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gZGVlcEZpbmRXaXRoRGVmYXVsdHMoZGF0YSwgZGVmYXVsdERhdGEsIGtleSwgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5hbHdheXNGb3JtYXQgPyB0aGlzLmZvcm1hdChwYXRoLCB1bmRlZmluZWQsIGxuZywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBrZXlcbiAgICAgICAgfSkgOiBwYXRoO1xuICAgICAgfVxuICAgICAgY29uc3QgcCA9IGtleS5zcGxpdCh0aGlzLmZvcm1hdFNlcGFyYXRvcik7XG4gICAgICBjb25zdCBrID0gcC5zaGlmdCgpLnRyaW0oKTtcbiAgICAgIGNvbnN0IGYgPSBwLmpvaW4odGhpcy5mb3JtYXRTZXBhcmF0b3IpLnRyaW0oKTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdChkZWVwRmluZFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwgaywgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpLCBmLCBsbmcsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaW50ZXJwb2xhdGlvbmtleToga1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnJlc2V0UmVnRXhwKCk7XG4gICAgY29uc3QgbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLm1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyO1xuICAgIGNvbnN0IHNraXBPblZhcmlhYmxlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXM7XG4gICAgY29uc3QgdG9kb3MgPSBbe1xuICAgICAgcmVnZXg6IHRoaXMucmVnZXhwVW5lc2NhcGUsXG4gICAgICBzYWZlVmFsdWU6IHZhbCA9PiByZWdleFNhZmUodmFsKVxuICAgIH0sIHtcbiAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4cCxcbiAgICAgIHNhZmVWYWx1ZTogdmFsID0+IHRoaXMuZXNjYXBlVmFsdWUgPyByZWdleFNhZmUodGhpcy5lc2NhcGUodmFsKSkgOiByZWdleFNhZmUodmFsKVxuICAgIH1dO1xuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICByZXBsYWNlcyA9IDA7XG4gICAgICB3aGlsZSAobWF0Y2ggPSB0b2RvLnJlZ2V4LmV4ZWMoc3RyKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVkVmFyID0gbWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICB2YWx1ZSA9IGhhbmRsZUZvcm1hdChtYXRjaGVkVmFyKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcihzdHIsIG1hdGNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHRlbXAgPT09ICdzdHJpbmcnID8gdGVtcCA6ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgbWF0Y2hlZFZhcikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWF0Y2hbMF07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybihgbWlzc2VkIHRvIHBhc3MgaW4gdmFyaWFibGUgJHttYXRjaGVkVmFyfSBmb3IgaW50ZXJwb2xhdGluZyAke3N0cn1gKTtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgJiYgIXRoaXMudXNlUmF3VmFsdWVUb0VzY2FwZSkge1xuICAgICAgICAgIHZhbHVlID0gbWFrZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2FmZVZhbHVlID0gdG9kby5zYWZlVmFsdWUodmFsdWUpO1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShtYXRjaFswXSwgc2FmZVZhbHVlKTtcbiAgICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICAgIHRvZG8ucmVnZXgubGFzdEluZGV4ICs9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB0b2RvLnJlZ2V4Lmxhc3RJbmRleCAtPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9kby5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlcGxhY2VzKys7XG4gICAgICAgIGlmIChyZXBsYWNlcyA+PSB0aGlzLm1heFJlcGxhY2VzKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIG5lc3Qoc3RyLCBmYykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBsZXQgbWF0Y2g7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCBjbG9uZWRPcHRpb25zO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUhhc09wdGlvbnMoa2V5LCBpbmhlcml0ZWRPcHRpb25zKSB7XG4gICAgICBjb25zdCBzZXAgPSB0aGlzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yO1xuICAgICAgaWYgKGtleS5pbmRleE9mKHNlcCkgPCAwKSByZXR1cm4ga2V5O1xuICAgICAgY29uc3QgYyA9IGtleS5zcGxpdChuZXcgUmVnRXhwKGAke3NlcH1bIF0qe2ApKTtcbiAgICAgIGxldCBvcHRpb25zU3RyaW5nID0gYHske2NbMV19YDtcbiAgICAgIGtleSA9IGNbMF07XG4gICAgICBvcHRpb25zU3RyaW5nID0gdGhpcy5pbnRlcnBvbGF0ZShvcHRpb25zU3RyaW5nLCBjbG9uZWRPcHRpb25zKTtcbiAgICAgIGNvbnN0IG1hdGNoZWRTaW5nbGVRdW90ZXMgPSBvcHRpb25zU3RyaW5nLm1hdGNoKC8nL2cpO1xuICAgICAgY29uc3QgbWF0Y2hlZERvdWJsZVF1b3RlcyA9IG9wdGlvbnNTdHJpbmcubWF0Y2goL1wiL2cpO1xuICAgICAgaWYgKG1hdGNoZWRTaW5nbGVRdW90ZXMgJiYgbWF0Y2hlZFNpbmdsZVF1b3Rlcy5sZW5ndGggJSAyID09PSAwICYmICFtYXRjaGVkRG91YmxlUXVvdGVzIHx8IG1hdGNoZWREb3VibGVRdW90ZXMubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKC8nL2csICdcIicpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY2xvbmVkT3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9uc1N0cmluZyk7XG4gICAgICAgIGlmIChpbmhlcml0ZWRPcHRpb25zKSBjbG9uZWRPcHRpb25zID0ge1xuICAgICAgICAgIC4uLmluaGVyaXRlZE9wdGlvbnMsXG4gICAgICAgICAgLi4uY2xvbmVkT3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBmYWlsZWQgcGFyc2luZyBvcHRpb25zIHN0cmluZyBpbiBuZXN0aW5nIGZvciBrZXkgJHtrZXl9YCwgZSk7XG4gICAgICAgIHJldHVybiBgJHtrZXl9JHtzZXB9JHtvcHRpb25zU3RyaW5nfWA7XG4gICAgICB9XG4gICAgICBkZWxldGUgY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWU7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLm5lc3RpbmdSZWdleHAuZXhlYyhzdHIpKSB7XG4gICAgICBsZXQgZm9ybWF0dGVycyA9IFtdO1xuICAgICAgY2xvbmVkT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgfTtcbiAgICAgIGNsb25lZE9wdGlvbnMgPSBjbG9uZWRPcHRpb25zLnJlcGxhY2UgJiYgdHlwZW9mIGNsb25lZE9wdGlvbnMucmVwbGFjZSAhPT0gJ3N0cmluZycgPyBjbG9uZWRPcHRpb25zLnJlcGxhY2UgOiBjbG9uZWRPcHRpb25zO1xuICAgICAgY2xvbmVkT3B0aW9ucy5hcHBseVBvc3RQcm9jZXNzb3IgPSBmYWxzZTtcbiAgICAgIGRlbGV0ZSBjbG9uZWRPcHRpb25zLmRlZmF1bHRWYWx1ZTtcbiAgICAgIGxldCBkb1JlZHVjZSA9IGZhbHNlO1xuICAgICAgaWYgKG1hdGNoWzBdLmluZGV4T2YodGhpcy5mb3JtYXRTZXBhcmF0b3IpICE9PSAtMSAmJiAhL3suKn0vLnRlc3QobWF0Y2hbMV0pKSB7XG4gICAgICAgIGNvbnN0IHIgPSBtYXRjaFsxXS5zcGxpdCh0aGlzLmZvcm1hdFNlcGFyYXRvcikubWFwKGVsZW0gPT4gZWxlbS50cmltKCkpO1xuICAgICAgICBtYXRjaFsxXSA9IHIuc2hpZnQoKTtcbiAgICAgICAgZm9ybWF0dGVycyA9IHI7XG4gICAgICAgIGRvUmVkdWNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gZmMoaGFuZGxlSGFzT3B0aW9ucy5jYWxsKHRoaXMsIG1hdGNoWzFdLnRyaW0oKSwgY2xvbmVkT3B0aW9ucyksIGNsb25lZE9wdGlvbnMpO1xuICAgICAgaWYgKHZhbHVlICYmIG1hdGNoWzBdID09PSBzdHIgJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgcmV0dXJuIHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHZhbHVlID0gbWFrZVN0cmluZyh2YWx1ZSk7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYG1pc3NlZCB0byByZXNvbHZlICR7bWF0Y2hbMV19IGZvciBuZXN0aW5nICR7c3RyfWApO1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGRvUmVkdWNlKSB7XG4gICAgICAgIHZhbHVlID0gZm9ybWF0dGVycy5yZWR1Y2UoKHYsIGYpID0+IHRoaXMuZm9ybWF0KHYsIGYsIG9wdGlvbnMubG5nLCB7XG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBtYXRjaFsxXS50cmltKClcbiAgICAgICAgfSksIHZhbHVlLnRyaW0oKSk7XG4gICAgICB9XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShtYXRjaFswXSwgdmFsdWUpO1xuICAgICAgdGhpcy5yZWdleHAubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUZvcm1hdFN0cihmb3JtYXRTdHIpIHtcbiAgbGV0IGZvcm1hdE5hbWUgPSBmb3JtYXRTdHIudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gIGNvbnN0IGZvcm1hdE9wdGlvbnMgPSB7fTtcbiAgaWYgKGZvcm1hdFN0ci5pbmRleE9mKCcoJykgPiAtMSkge1xuICAgIGNvbnN0IHAgPSBmb3JtYXRTdHIuc3BsaXQoJygnKTtcbiAgICBmb3JtYXROYW1lID0gcFswXS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBjb25zdCBvcHRTdHIgPSBwWzFdLnN1YnN0cmluZygwLCBwWzFdLmxlbmd0aCAtIDEpO1xuICAgIGlmIChmb3JtYXROYW1lID09PSAnY3VycmVuY3knICYmIG9wdFN0ci5pbmRleE9mKCc6JykgPCAwKSB7XG4gICAgICBpZiAoIWZvcm1hdE9wdGlvbnMuY3VycmVuY3kpIGZvcm1hdE9wdGlvbnMuY3VycmVuY3kgPSBvcHRTdHIudHJpbSgpO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0TmFtZSA9PT0gJ3JlbGF0aXZldGltZScgJiYgb3B0U3RyLmluZGV4T2YoJzonKSA8IDApIHtcbiAgICAgIGlmICghZm9ybWF0T3B0aW9ucy5yYW5nZSkgZm9ybWF0T3B0aW9ucy5yYW5nZSA9IG9wdFN0ci50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdHMgPSBvcHRTdHIuc3BsaXQoJzsnKTtcbiAgICAgIG9wdHMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICBpZiAoIW9wdCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBba2V5LCAuLi5yZXN0XSA9IG9wdC5zcGxpdCgnOicpO1xuICAgICAgICBjb25zdCB2YWwgPSByZXN0LmpvaW4oJzonKS50cmltKCkucmVwbGFjZSgvXicrfCcrJC9nLCAnJyk7XG4gICAgICAgIGlmICghZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSkgZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSA9IHZhbDtcbiAgICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykgZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSA9IGZhbHNlO1xuICAgICAgICBpZiAodmFsID09PSAndHJ1ZScpIGZvcm1hdE9wdGlvbnNba2V5LnRyaW0oKV0gPSB0cnVlO1xuICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIGZvcm1hdE9wdGlvbnNba2V5LnRyaW0oKV0gPSBwYXJzZUludCh2YWwsIDEwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm1hdE5hbWUsXG4gICAgZm9ybWF0T3B0aW9uc1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKGZuKSB7XG4gIGNvbnN0IGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBpbnZva2VGb3JtYXR0ZXIodmFsLCBsbmcsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBrZXkgPSBsbmcgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgICBsZXQgZm9ybWF0dGVyID0gY2FjaGVba2V5XTtcbiAgICBpZiAoIWZvcm1hdHRlcikge1xuICAgICAgZm9ybWF0dGVyID0gZm4oZ2V0Q2xlYW5lZENvZGUobG5nKSwgb3B0aW9ucyk7XG4gICAgICBjYWNoZVtrZXldID0gZm9ybWF0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVyKHZhbCk7XG4gIH07XG59XG5jbGFzcyBGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnZm9ybWF0dGVyJyk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmZvcm1hdHMgPSB7XG4gICAgICBudW1iZXI6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcigobG5nLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxuZywge1xuICAgICAgICAgIC4uLm9wdFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbCA9PiBmb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XG4gICAgICB9KSxcbiAgICAgIGN1cnJlbmN5OiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoKGxuZywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHQsXG4gICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeSdcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xuICAgICAgfSksXG4gICAgICBkYXRldGltZTogY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKChsbmcsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xuICAgICAgfSksXG4gICAgICByZWxhdGl2ZXRpbWU6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcigobG5nLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGxuZywge1xuICAgICAgICAgIC4uLm9wdFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbCA9PiBmb3JtYXR0ZXIuZm9ybWF0KHZhbCwgb3B0LnJhbmdlIHx8ICdkYXknKTtcbiAgICAgIH0pLFxuICAgICAgbGlzdDogY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKChsbmcsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5MaXN0Rm9ybWF0KGxuZywge1xuICAgICAgICAgIC4uLm9wdFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbCA9PiBmb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XG4gICAgICB9KVxuICAgIH07XG4gICAgdGhpcy5pbml0KG9wdGlvbnMpO1xuICB9XG4gIGluaXQoc2VydmljZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgaW50ZXJwb2xhdGlvbjoge31cbiAgICB9O1xuICAgIGNvbnN0IGlPcHRzID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uO1xuICAgIHRoaXMuZm9ybWF0U2VwYXJhdG9yID0gaU9wdHMuZm9ybWF0U2VwYXJhdG9yID8gaU9wdHMuZm9ybWF0U2VwYXJhdG9yIDogaU9wdHMuZm9ybWF0U2VwYXJhdG9yIHx8ICcsJztcbiAgfVxuICBhZGQobmFtZSwgZmMpIHtcbiAgICB0aGlzLmZvcm1hdHNbbmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV0gPSBmYztcbiAgfVxuICBhZGRDYWNoZWQobmFtZSwgZmMpIHtcbiAgICB0aGlzLmZvcm1hdHNbbmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV0gPSBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoZmMpO1xuICB9XG4gIGZvcm1hdCh2YWx1ZSwgZm9ybWF0LCBsbmcpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgY29uc3QgZm9ybWF0cyA9IGZvcm1hdC5zcGxpdCh0aGlzLmZvcm1hdFNlcGFyYXRvcik7XG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0cy5yZWR1Y2UoKG1lbSwgZikgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBmb3JtYXROYW1lLFxuICAgICAgICBmb3JtYXRPcHRpb25zXG4gICAgICB9ID0gcGFyc2VGb3JtYXRTdHIoZik7XG4gICAgICBpZiAodGhpcy5mb3JtYXRzW2Zvcm1hdE5hbWVdKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBtZW07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdmFsT3B0aW9ucyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JtYXRQYXJhbXMgJiYgb3B0aW9ucy5mb3JtYXRQYXJhbXNbb3B0aW9ucy5pbnRlcnBvbGF0aW9ua2V5XSB8fCB7fTtcbiAgICAgICAgICBjb25zdCBsID0gdmFsT3B0aW9ucy5sb2NhbGUgfHwgdmFsT3B0aW9ucy5sbmcgfHwgb3B0aW9ucy5sb2NhbGUgfHwgb3B0aW9ucy5sbmcgfHwgbG5nO1xuICAgICAgICAgIGZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0c1tmb3JtYXROYW1lXShtZW0sIGwsIHtcbiAgICAgICAgICAgIC4uLmZvcm1hdE9wdGlvbnMsXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgLi4udmFsT3B0aW9uc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGB0aGVyZSB3YXMgbm8gZm9ybWF0IGZ1bmN0aW9uIGZvciAke2Zvcm1hdE5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtO1xuICAgIH0sIHZhbHVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBlbmRpbmcocSwgbmFtZSkge1xuICBpZiAocS5wZW5kaW5nW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWxldGUgcS5wZW5kaW5nW25hbWVdO1xuICAgIHEucGVuZGluZ0NvdW50LS07XG4gIH1cbn1cbmNsYXNzIENvbm5lY3RvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGJhY2tlbmQsIHN0b3JlLCBzZXJ2aWNlcykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB0aGlzLmxhbmd1YWdlVXRpbHMgPSBzZXJ2aWNlcy5sYW5ndWFnZVV0aWxzO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnYmFja2VuZENvbm5lY3RvcicpO1xuICAgIHRoaXMud2FpdGluZ1JlYWRzID0gW107XG4gICAgdGhpcy5tYXhQYXJhbGxlbFJlYWRzID0gb3B0aW9ucy5tYXhQYXJhbGxlbFJlYWRzIHx8IDEwO1xuICAgIHRoaXMucmVhZGluZ0NhbGxzID0gMDtcbiAgICB0aGlzLm1heFJldHJpZXMgPSBvcHRpb25zLm1heFJldHJpZXMgPj0gMCA/IG9wdGlvbnMubWF4UmV0cmllcyA6IDU7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBvcHRpb25zLnJldHJ5VGltZW91dCA+PSAxID8gb3B0aW9ucy5yZXRyeVRpbWVvdXQgOiAzNTA7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICBpZiAodGhpcy5iYWNrZW5kICYmIHRoaXMuYmFja2VuZC5pbml0KSB7XG4gICAgICB0aGlzLmJhY2tlbmQuaW5pdChzZXJ2aWNlcywgb3B0aW9ucy5iYWNrZW5kLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcXVldWVMb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0b0xvYWQgPSB7fTtcbiAgICBjb25zdCBwZW5kaW5nID0ge307XG4gICAgY29uc3QgdG9Mb2FkTGFuZ3VhZ2VzID0ge307XG4gICAgY29uc3QgdG9Mb2FkTmFtZXNwYWNlcyA9IHt9O1xuICAgIGxhbmd1YWdlcy5mb3JFYWNoKGxuZyA9PiB7XG4gICAgICBsZXQgaGFzQWxsTmFtZXNwYWNlcyA9IHRydWU7XG4gICAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYCR7bG5nfXwke25zfWA7XG4gICAgICAgIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgdGhpcy5zdG9yZS5oYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVbbmFtZV0gPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVbbmFtZV0gPCAwKSA7IGVsc2UgaWYgKHRoaXMuc3RhdGVbbmFtZV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAocGVuZGluZ1tuYW1lXSA9PT0gdW5kZWZpbmVkKSBwZW5kaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW25hbWVdID0gMTtcbiAgICAgICAgICBoYXNBbGxOYW1lc3BhY2VzID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHBlbmRpbmdbbmFtZV0gPT09IHVuZGVmaW5lZCkgcGVuZGluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgaWYgKHRvTG9hZFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWRbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGlmICh0b0xvYWROYW1lc3BhY2VzW25zXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWROYW1lc3BhY2VzW25zXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFoYXNBbGxOYW1lc3BhY2VzKSB0b0xvYWRMYW5ndWFnZXNbbG5nXSA9IHRydWU7XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRvTG9hZCkubGVuZ3RoIHx8IE9iamVjdC5rZXlzKHBlbmRpbmcpLmxlbmd0aCkge1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHtcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgcGVuZGluZ0NvdW50OiBPYmplY3Qua2V5cyhwZW5kaW5nKS5sZW5ndGgsXG4gICAgICAgIGxvYWRlZDoge30sXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvTG9hZDogT2JqZWN0LmtleXModG9Mb2FkKSxcbiAgICAgIHBlbmRpbmc6IE9iamVjdC5rZXlzKHBlbmRpbmcpLFxuICAgICAgdG9Mb2FkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0b0xvYWRMYW5ndWFnZXMpLFxuICAgICAgdG9Mb2FkTmFtZXNwYWNlczogT2JqZWN0LmtleXModG9Mb2FkTmFtZXNwYWNlcylcbiAgICB9O1xuICB9XG4gIGxvYWRlZChuYW1lLCBlcnIsIGRhdGEpIHtcbiAgICBjb25zdCBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgIGNvbnN0IGxuZyA9IHNbMF07XG4gICAgY29uc3QgbnMgPSBzWzFdO1xuICAgIGlmIChlcnIpIHRoaXMuZW1pdCgnZmFpbGVkTG9hZGluZycsIGxuZywgbnMsIGVycik7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2VCdW5kbGUobG5nLCBucywgZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGVbbmFtZV0gPSBlcnIgPyAtMSA6IDI7XG4gICAgY29uc3QgbG9hZGVkID0ge307XG4gICAgdGhpcy5xdWV1ZS5mb3JFYWNoKHEgPT4ge1xuICAgICAgcHVzaFBhdGgocS5sb2FkZWQsIFtsbmddLCBucyk7XG4gICAgICByZW1vdmVQZW5kaW5nKHEsIG5hbWUpO1xuICAgICAgaWYgKGVycikgcS5lcnJvcnMucHVzaChlcnIpO1xuICAgICAgaWYgKHEucGVuZGluZ0NvdW50ID09PSAwICYmICFxLmRvbmUpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocS5sb2FkZWQpLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWRbbF0pIGxvYWRlZFtsXSA9IHt9O1xuICAgICAgICAgIGNvbnN0IGxvYWRlZEtleXMgPSBxLmxvYWRlZFtsXTtcbiAgICAgICAgICBpZiAobG9hZGVkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxvYWRlZEtleXMuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRlZFtsXVtuXSA9PT0gdW5kZWZpbmVkKSBsb2FkZWRbbF1bbl0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcS5kb25lID0gdHJ1ZTtcbiAgICAgICAgaWYgKHEuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIHEuY2FsbGJhY2socS5lcnJvcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHEuY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnbG9hZGVkJywgbG9hZGVkKTtcbiAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5maWx0ZXIocSA9PiAhcS5kb25lKTtcbiAgfVxuICByZWFkKGxuZywgbnMsIGZjTmFtZSkge1xuICAgIGxldCB0cmllZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgICBsZXQgd2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogdGhpcy5yZXRyeVRpbWVvdXQ7XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFsbmcubGVuZ3RoKSByZXR1cm4gY2FsbGJhY2sobnVsbCwge30pO1xuICAgIGlmICh0aGlzLnJlYWRpbmdDYWxscyA+PSB0aGlzLm1heFBhcmFsbGVsUmVhZHMpIHtcbiAgICAgIHRoaXMud2FpdGluZ1JlYWRzLnB1c2goe1xuICAgICAgICBsbmcsXG4gICAgICAgIG5zLFxuICAgICAgICBmY05hbWUsXG4gICAgICAgIHRyaWVkLFxuICAgICAgICB3YWl0LFxuICAgICAgICBjYWxsYmFja1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVhZGluZ0NhbGxzKys7XG4gICAgY29uc3QgcmVzb2x2ZXIgPSAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICB0aGlzLnJlYWRpbmdDYWxscy0tO1xuICAgICAgaWYgKHRoaXMud2FpdGluZ1JlYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMud2FpdGluZ1JlYWRzLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMucmVhZChuZXh0LmxuZywgbmV4dC5ucywgbmV4dC5mY05hbWUsIG5leHQudHJpZWQsIG5leHQud2FpdCwgbmV4dC5jYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyICYmIGRhdGEgJiYgdHJpZWQgPCB0aGlzLm1heFJldHJpZXMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWFkLmNhbGwodGhpcywgbG5nLCBucywgZmNOYW1lLCB0cmllZCArIDEsIHdhaXQgKiAyLCBjYWxsYmFjayk7XG4gICAgICAgIH0sIHdhaXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhlcnIsIGRhdGEpO1xuICAgIH07XG4gICAgY29uc3QgZmMgPSB0aGlzLmJhY2tlbmRbZmNOYW1lXS5iaW5kKHRoaXMuYmFja2VuZCk7XG4gICAgaWYgKGZjLmxlbmd0aCA9PT0gMikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IGZjKGxuZywgbnMpO1xuICAgICAgICBpZiAociAmJiB0eXBlb2Ygci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgci50aGVuKGRhdGEgPT4gcmVzb2x2ZXIobnVsbCwgZGF0YSkpLmNhdGNoKHJlc29sdmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlcihudWxsLCByKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlc29sdmVyKGVycik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBmYyhsbmcsIG5zLCByZXNvbHZlcik7XG4gIH1cbiAgcHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuICAgIGlmICghdGhpcy5iYWNrZW5kKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKCdObyBiYWNrZW5kIHdhcyBhZGRlZCB2aWEgaTE4bmV4dC51c2UuIFdpbGwgbm90IGxvYWQgcmVzb3VyY2VzLicpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2VzID09PSAnc3RyaW5nJykgbGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShsYW5ndWFnZXMpO1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycpIG5hbWVzcGFjZXMgPSBbbmFtZXNwYWNlc107XG4gICAgY29uc3QgdG9Mb2FkID0gdGhpcy5xdWV1ZUxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgaWYgKCF0b0xvYWQudG9Mb2FkLmxlbmd0aCkge1xuICAgICAgaWYgKCF0b0xvYWQucGVuZGluZy5sZW5ndGgpIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdG9Mb2FkLnRvTG9hZC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5sb2FkT25lKG5hbWUpO1xuICAgIH0pO1xuICB9XG4gIGxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBjYWxsYmFjaykge1xuICAgIHRoaXMucHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCB7fSwgY2FsbGJhY2spO1xuICB9XG4gIHJlbG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5wcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIHtcbiAgICAgIHJlbG9hZDogdHJ1ZVxuICAgIH0sIGNhbGxiYWNrKTtcbiAgfVxuICBsb2FkT25lKG5hbWUpIHtcbiAgICBsZXQgcHJlZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgICBjb25zdCBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgIGNvbnN0IGxuZyA9IHNbMF07XG4gICAgY29uc3QgbnMgPSBzWzFdO1xuICAgIHRoaXMucmVhZChsbmcsIG5zLCAncmVhZCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aGlzLmxvZ2dlci53YXJuKGAke3ByZWZpeH1sb2FkaW5nIG5hbWVzcGFjZSAke25zfSBmb3IgbGFuZ3VhZ2UgJHtsbmd9IGZhaWxlZGAsIGVycik7XG4gICAgICBpZiAoIWVyciAmJiBkYXRhKSB0aGlzLmxvZ2dlci5sb2coYCR7cHJlZml4fWxvYWRlZCBuYW1lc3BhY2UgJHtuc30gZm9yIGxhbmd1YWdlICR7bG5nfWAsIGRhdGEpO1xuICAgICAgdGhpcy5sb2FkZWQobmFtZSwgZXJyLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBzYXZlTWlzc2luZyhsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlLCBpc1VwZGF0ZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB7fTtcbiAgICBsZXQgY2xiID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiAoKSA9PiB7fTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlcy51dGlscyAmJiB0aGlzLnNlcnZpY2VzLnV0aWxzLmhhc0xvYWRlZE5hbWVzcGFjZSAmJiAhdGhpcy5zZXJ2aWNlcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihgZGlkIG5vdCBzYXZlIGtleSBcIiR7a2V5fVwiIGFzIHRoZSBuYW1lc3BhY2UgXCIke25hbWVzcGFjZX1cIiB3YXMgbm90IHlldCBsb2FkZWRgLCAnVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwga2V5ID09PSAnJykgcmV0dXJuO1xuICAgIGlmICh0aGlzLmJhY2tlbmQgJiYgdGhpcy5iYWNrZW5kLmNyZWF0ZSkge1xuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaXNVcGRhdGVcbiAgICAgIH07XG4gICAgICBjb25zdCBmYyA9IHRoaXMuYmFja2VuZC5jcmVhdGUuYmluZCh0aGlzLmJhY2tlbmQpO1xuICAgICAgaWYgKGZjLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgcjtcbiAgICAgICAgICBpZiAoZmMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICByID0gZmMobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgb3B0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSBmYyhsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHIgJiYgdHlwZW9mIHIudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgci50aGVuKGRhdGEgPT4gY2xiKG51bGwsIGRhdGEpKS5jYXRjaChjbGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGIobnVsbCwgcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjbGIoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmMobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgY2xiLCBvcHRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsYW5ndWFnZXMgfHwgIWxhbmd1YWdlc1swXSkgcmV0dXJuO1xuICAgIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2UobGFuZ3VhZ2VzWzBdLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KCkge1xuICByZXR1cm4ge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBpbml0SW1tZWRpYXRlOiB0cnVlLFxuICAgIG5zOiBbJ3RyYW5zbGF0aW9uJ10sXG4gICAgZGVmYXVsdE5TOiBbJ3RyYW5zbGF0aW9uJ10sXG4gICAgZmFsbGJhY2tMbmc6IFsnZGV2J10sXG4gICAgZmFsbGJhY2tOUzogZmFsc2UsXG4gICAgc3VwcG9ydGVkTG5nczogZmFsc2UsXG4gICAgbm9uRXhwbGljaXRTdXBwb3J0ZWRMbmdzOiBmYWxzZSxcbiAgICBsb2FkOiAnYWxsJyxcbiAgICBwcmVsb2FkOiBmYWxzZSxcbiAgICBzaW1wbGlmeVBsdXJhbFN1ZmZpeDogdHJ1ZSxcbiAgICBrZXlTZXBhcmF0b3I6ICcuJyxcbiAgICBuc1NlcGFyYXRvcjogJzonLFxuICAgIHBsdXJhbFNlcGFyYXRvcjogJ18nLFxuICAgIGNvbnRleHRTZXBhcmF0b3I6ICdfJyxcbiAgICBwYXJ0aWFsQnVuZGxlZExhbmd1YWdlczogZmFsc2UsXG4gICAgc2F2ZU1pc3Npbmc6IGZhbHNlLFxuICAgIHVwZGF0ZU1pc3Npbmc6IGZhbHNlLFxuICAgIHNhdmVNaXNzaW5nVG86ICdmYWxsYmFjaycsXG4gICAgc2F2ZU1pc3NpbmdQbHVyYWxzOiB0cnVlLFxuICAgIG1pc3NpbmdLZXlIYW5kbGVyOiBmYWxzZSxcbiAgICBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXI6IGZhbHNlLFxuICAgIHBvc3RQcm9jZXNzOiBmYWxzZSxcbiAgICBwb3N0UHJvY2Vzc1Bhc3NSZXNvbHZlZDogZmFsc2UsXG4gICAgcmV0dXJuTnVsbDogZmFsc2UsXG4gICAgcmV0dXJuRW1wdHlTdHJpbmc6IHRydWUsXG4gICAgcmV0dXJuT2JqZWN0czogZmFsc2UsXG4gICAgam9pbkFycmF5czogZmFsc2UsXG4gICAgcmV0dXJuZWRPYmplY3RIYW5kbGVyOiBmYWxzZSxcbiAgICBwYXJzZU1pc3NpbmdLZXlIYW5kbGVyOiBmYWxzZSxcbiAgICBhcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXk6IGZhbHNlLFxuICAgIGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlOiBmYWxzZSxcbiAgICBvdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlKGFyZ3MpIHtcbiAgICAgIGxldCByZXQgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ29iamVjdCcpIHJldCA9IGFyZ3NbMV07XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdzdHJpbmcnKSByZXQuZGVmYXVsdFZhbHVlID0gYXJnc1sxXTtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1syXSA9PT0gJ3N0cmluZycpIHJldC50RGVzY3JpcHRpb24gPSBhcmdzWzJdO1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzJdID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgYXJnc1szXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGFyZ3NbM10gfHwgYXJnc1syXTtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIHJldFtrZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICBlc2NhcGVWYWx1ZTogdHJ1ZSxcbiAgICAgIGZvcm1hdDogKHZhbHVlLCBmb3JtYXQsIGxuZywgb3B0aW9ucykgPT4gdmFsdWUsXG4gICAgICBwcmVmaXg6ICd7eycsXG4gICAgICBzdWZmaXg6ICd9fScsXG4gICAgICBmb3JtYXRTZXBhcmF0b3I6ICcsJyxcbiAgICAgIHVuZXNjYXBlUHJlZml4OiAnLScsXG4gICAgICBuZXN0aW5nUHJlZml4OiAnJHQoJyxcbiAgICAgIG5lc3RpbmdTdWZmaXg6ICcpJyxcbiAgICAgIG5lc3RpbmdPcHRpb25zU2VwYXJhdG9yOiAnLCcsXG4gICAgICBtYXhSZXBsYWNlczogMTAwMCxcbiAgICAgIHNraXBPblZhcmlhYmxlczogdHJ1ZVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybU9wdGlvbnMob3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMubnMgPT09ICdzdHJpbmcnKSBvcHRpb25zLm5zID0gW29wdGlvbnMubnNdO1xuICBpZiAodHlwZW9mIG9wdGlvbnMuZmFsbGJhY2tMbmcgPT09ICdzdHJpbmcnKSBvcHRpb25zLmZhbGxiYWNrTG5nID0gW29wdGlvbnMuZmFsbGJhY2tMbmddO1xuICBpZiAodHlwZW9mIG9wdGlvbnMuZmFsbGJhY2tOUyA9PT0gJ3N0cmluZycpIG9wdGlvbnMuZmFsbGJhY2tOUyA9IFtvcHRpb25zLmZhbGxiYWNrTlNdO1xuICBpZiAob3B0aW9ucy5zdXBwb3J0ZWRMbmdzICYmIG9wdGlvbnMuc3VwcG9ydGVkTG5ncy5pbmRleE9mKCdjaW1vZGUnKSA8IDApIHtcbiAgICBvcHRpb25zLnN1cHBvcnRlZExuZ3MgPSBvcHRpb25zLnN1cHBvcnRlZExuZ3MuY29uY2F0KFsnY2ltb2RlJ10pO1xuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIGJpbmRNZW1iZXJGdW5jdGlvbnMoaW5zdCkge1xuICBjb25zdCBtZW1zID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3QpKTtcbiAgbWVtcy5mb3JFYWNoKG1lbSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnN0W21lbV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGluc3RbbWVtXSA9IGluc3RbbWVtXS5iaW5kKGluc3QpO1xuICAgIH1cbiAgfSk7XG59XG5jbGFzcyBJMThuIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRpb25zID0gdHJhbnNmb3JtT3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLnNlcnZpY2VzID0ge307XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyO1xuICAgIHRoaXMubW9kdWxlcyA9IHtcbiAgICAgIGV4dGVybmFsOiBbXVxuICAgIH07XG4gICAgYmluZE1lbWJlckZ1bmN0aW9ucyh0aGlzKTtcbiAgICBpZiAoY2FsbGJhY2sgJiYgIXRoaXMuaXNJbml0aWFsaXplZCAmJiAhb3B0aW9ucy5pc0Nsb25lKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5pbml0SW1tZWRpYXRlKSB7XG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBsZXQgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmRlZmF1bHROUyAmJiBvcHRpb25zLmRlZmF1bHROUyAhPT0gZmFsc2UgJiYgb3B0aW9ucy5ucykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm5zID09PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zLmRlZmF1bHROUyA9IG9wdGlvbnMubnM7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubnMuaW5kZXhPZigndHJhbnNsYXRpb24nKSA8IDApIHtcbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0TlMgPSBvcHRpb25zLm5zWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBkZWZPcHRzID0gZ2V0KCk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4uZGVmT3B0cyxcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLnRyYW5zZm9ybU9wdGlvbnMob3B0aW9ucylcbiAgICB9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUFQSSAhPT0gJ3YxJykge1xuICAgICAgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24gPSB7XG4gICAgICAgIC4uLmRlZk9wdHMuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb25cbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMudXNlckRlZmluZWRLZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubnNTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkTnNTZXBhcmF0b3IgPSBvcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVDbGFzc09uRGVtYW5kKENsYXNzT3JPYmplY3QpIHtcbiAgICAgIGlmICghQ2xhc3NPck9iamVjdCkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAodHlwZW9mIENsYXNzT3JPYmplY3QgPT09ICdmdW5jdGlvbicpIHJldHVybiBuZXcgQ2xhc3NPck9iamVjdCgpO1xuICAgICAgcmV0dXJuIENsYXNzT3JPYmplY3Q7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLmlzQ2xvbmUpIHtcbiAgICAgIGlmICh0aGlzLm1vZHVsZXMubG9nZ2VyKSB7XG4gICAgICAgIGJhc2VMb2dnZXIuaW5pdChjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5sb2dnZXIpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZUxvZ2dlci5pbml0KG51bGwsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBsZXQgZm9ybWF0dGVyO1xuICAgICAgaWYgKHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIpIHtcbiAgICAgICAgZm9ybWF0dGVyID0gdGhpcy5tb2R1bGVzLmZvcm1hdHRlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGZvcm1hdHRlciA9IEZvcm1hdHRlcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGx1ID0gbmV3IExhbmd1YWdlVXRpbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKHRoaXMub3B0aW9ucy5yZXNvdXJjZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBzID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgIHMubG9nZ2VyID0gYmFzZUxvZ2dlcjtcbiAgICAgIHMucmVzb3VyY2VTdG9yZSA9IHRoaXMuc3RvcmU7XG4gICAgICBzLmxhbmd1YWdlVXRpbHMgPSBsdTtcbiAgICAgIHMucGx1cmFsUmVzb2x2ZXIgPSBuZXcgUGx1cmFsUmVzb2x2ZXIobHUsIHtcbiAgICAgICAgcHJlcGVuZDogdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcixcbiAgICAgICAgY29tcGF0aWJpbGl0eUpTT046IHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTixcbiAgICAgICAgc2ltcGxpZnlQbHVyYWxTdWZmaXg6IHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeFxuICAgICAgfSk7XG4gICAgICBpZiAoZm9ybWF0dGVyICYmICghdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0IHx8IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9PT0gZGVmT3B0cy5pbnRlcnBvbGF0aW9uLmZvcm1hdCkpIHtcbiAgICAgICAgcy5mb3JtYXR0ZXIgPSBjcmVhdGVDbGFzc09uRGVtYW5kKGZvcm1hdHRlcik7XG4gICAgICAgIHMuZm9ybWF0dGVyLmluaXQocywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0ID0gcy5mb3JtYXR0ZXIuZm9ybWF0LmJpbmQocy5mb3JtYXR0ZXIpO1xuICAgICAgfVxuICAgICAgcy5pbnRlcnBvbGF0b3IgPSBuZXcgSW50ZXJwb2xhdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICBzLnV0aWxzID0ge1xuICAgICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IHRoaXMuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQodGhpcylcbiAgICAgIH07XG4gICAgICBzLmJhY2tlbmRDb25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmJhY2tlbmQpLCBzLnJlc291cmNlU3RvcmUsIHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICBzLmJhY2tlbmRDb25uZWN0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IpIHtcbiAgICAgICAgcy5sYW5ndWFnZURldGVjdG9yID0gY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3Rvcik7XG4gICAgICAgIGlmIChzLmxhbmd1YWdlRGV0ZWN0b3IuaW5pdCkgcy5sYW5ndWFnZURldGVjdG9yLmluaXQocywgdGhpcy5vcHRpb25zLmRldGVjdGlvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCkge1xuICAgICAgICBzLmkxOG5Gb3JtYXQgPSBjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5pMThuRm9ybWF0KTtcbiAgICAgICAgaWYgKHMuaTE4bkZvcm1hdC5pbml0KSBzLmkxOG5Gb3JtYXQuaW5pdCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKHRoaXMuc2VydmljZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICB0aGlzLnRyYW5zbGF0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1vZHVsZXMuZXh0ZXJuYWwuZm9yRWFjaChtID0+IHtcbiAgICAgICAgaWYgKG0uaW5pdCkgbS5pbml0KHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0O1xuICAgIGlmICghY2FsbGJhY2spIGNhbGxiYWNrID0gbm9vcDtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nICYmICF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMub3B0aW9ucy5sbmcpIHtcbiAgICAgIGNvbnN0IGNvZGVzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgIGlmIChjb2Rlcy5sZW5ndGggPiAwICYmIGNvZGVzWzBdICE9PSAnZGV2JykgdGhpcy5vcHRpb25zLmxuZyA9IGNvZGVzWzBdO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5vcHRpb25zLmxuZykge1xuICAgICAgdGhpcy5sb2dnZXIud2FybignaW5pdDogbm8gbGFuZ3VhZ2VEZXRlY3RvciBpcyB1c2VkIGFuZCBubyBsbmcgaXMgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBjb25zdCBzdG9yZUFwaSA9IFsnZ2V0UmVzb3VyY2UnLCAnaGFzUmVzb3VyY2VCdW5kbGUnLCAnZ2V0UmVzb3VyY2VCdW5kbGUnLCAnZ2V0RGF0YUJ5TGFuZ3VhZ2UnXTtcbiAgICBzdG9yZUFwaS5mb3JFYWNoKGZjTmFtZSA9PiB7XG4gICAgICB0aGlzW2ZjTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdG9yZVtmY05hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IHN0b3JlQXBpQ2hhaW5lZCA9IFsnYWRkUmVzb3VyY2UnLCAnYWRkUmVzb3VyY2VzJywgJ2FkZFJlc291cmNlQnVuZGxlJywgJ3JlbW92ZVJlc291cmNlQnVuZGxlJ107XG4gICAgc3RvcmVBcGlDaGFpbmVkLmZvckVhY2goZmNOYW1lID0+IHtcbiAgICAgIHRoaXNbZmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc3RvcmVbZmNOYW1lXSguLi5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmluaXNoID0gKGVyciwgdCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkICYmICF0aGlzLmluaXRpYWxpemVkU3RvcmVPbmNlKSB0aGlzLmxvZ2dlci53YXJuKCdpbml0OiBpMThuZXh0IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuIFlvdSBzaG91bGQgY2FsbCBpbml0IGp1c3Qgb25jZSEnKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaXNDbG9uZSkgdGhpcy5sb2dnZXIubG9nKCdpbml0aWFsaXplZCcsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQnLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHQpO1xuICAgICAgICBjYWxsYmFjayhlcnIsIHQpO1xuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLmxhbmd1YWdlcyAmJiB0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUFQSSAhPT0gJ3YxJyAmJiAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZmluaXNoKG51bGwsIHRoaXMudC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UodGhpcy5vcHRpb25zLmxuZywgZmluaXNoKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVzb3VyY2VzIHx8ICF0aGlzLm9wdGlvbnMuaW5pdEltbWVkaWF0ZSkge1xuICAgICAgbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGxvYWQsIDApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH1cbiAgbG9hZFJlc291cmNlcyhsYW5ndWFnZSkge1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcbiAgICBsZXQgdXNlZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgY29uc3QgdXNlZExuZyA9IHR5cGVvZiBsYW5ndWFnZSA9PT0gJ3N0cmluZycgPyBsYW5ndWFnZSA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgaWYgKHR5cGVvZiBsYW5ndWFnZSA9PT0gJ2Z1bmN0aW9uJykgdXNlZENhbGxiYWNrID0gbGFuZ3VhZ2U7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucmVzb3VyY2VzIHx8IHRoaXMub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcykge1xuICAgICAgaWYgKHVzZWRMbmcgJiYgdXNlZExuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuIHVzZWRDYWxsYmFjaygpO1xuICAgICAgY29uc3QgdG9Mb2FkID0gW107XG4gICAgICBjb25zdCBhcHBlbmQgPSBsbmcgPT4ge1xuICAgICAgICBpZiAoIWxuZykgcmV0dXJuO1xuICAgICAgICBjb25zdCBsbmdzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShsbmcpO1xuICAgICAgICBsbmdzLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgaWYgKHRvTG9hZC5pbmRleE9mKGwpIDwgMCkgdG9Mb2FkLnB1c2gobCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGlmICghdXNlZExuZykge1xuICAgICAgICBjb25zdCBmYWxsYmFja3MgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpO1xuICAgICAgICBmYWxsYmFja3MuZm9yRWFjaChsID0+IGFwcGVuZChsKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBlbmQodXNlZExuZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnByZWxvYWQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnByZWxvYWQuZm9yRWFjaChsID0+IGFwcGVuZChsKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IubG9hZCh0b0xvYWQsIHRoaXMub3B0aW9ucy5ucywgZSA9PiB7XG4gICAgICAgIGlmICghZSAmJiAhdGhpcy5yZXNvbHZlZExhbmd1YWdlICYmIHRoaXMubGFuZ3VhZ2UpIHRoaXMuc2V0UmVzb2x2ZWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgdXNlZENhbGxiYWNrKGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZWRDYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH1cbiAgcmVsb2FkUmVzb3VyY2VzKGxuZ3MsIG5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBpZiAoIWxuZ3MpIGxuZ3MgPSB0aGlzLmxhbmd1YWdlcztcbiAgICBpZiAoIW5zKSBucyA9IHRoaXMub3B0aW9ucy5ucztcbiAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IG5vb3A7XG4gICAgdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLnJlbG9hZChsbmdzLCBucywgZXJyID0+IHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoIW1vZHVsZSkgdGhyb3cgbmV3IEVycm9yKCdZb3UgYXJlIHBhc3NpbmcgYW4gdW5kZWZpbmVkIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcbiAgICBpZiAoIW1vZHVsZS50eXBlKSB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhcmUgcGFzc2luZyBhIHdyb25nIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdiYWNrZW5kJykge1xuICAgICAgdGhpcy5tb2R1bGVzLmJhY2tlbmQgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xvZ2dlcicgfHwgbW9kdWxlLmxvZyAmJiBtb2R1bGUud2FybiAmJiBtb2R1bGUuZXJyb3IpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5sb2dnZXIgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xhbmd1YWdlRGV0ZWN0b3InKSB7XG4gICAgICB0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3RvciA9IG1vZHVsZTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZS50eXBlID09PSAnaTE4bkZvcm1hdCcpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5pMThuRm9ybWF0ID0gbW9kdWxlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdwb3N0UHJvY2Vzc29yJykge1xuICAgICAgcG9zdFByb2Nlc3Nvci5hZGRQb3N0UHJvY2Vzc29yKG1vZHVsZSk7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2Zvcm1hdHRlcicpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJzNyZFBhcnR5Jykge1xuICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLnB1c2gobW9kdWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UmVzb2x2ZWRMYW5ndWFnZShsKSB7XG4gICAgaWYgKCFsIHx8ICF0aGlzLmxhbmd1YWdlcykgcmV0dXJuO1xuICAgIGlmIChbJ2NpbW9kZScsICdkZXYnXS5pbmRleE9mKGwpID4gLTEpIHJldHVybjtcbiAgICBmb3IgKGxldCBsaSA9IDA7IGxpIDwgdGhpcy5sYW5ndWFnZXMubGVuZ3RoOyBsaSsrKSB7XG4gICAgICBjb25zdCBsbmdJbkxuZ3MgPSB0aGlzLmxhbmd1YWdlc1tsaV07XG4gICAgICBpZiAoWydjaW1vZGUnLCAnZGV2J10uaW5kZXhPZihsbmdJbkxuZ3MpID4gLTEpIGNvbnRpbnVlO1xuICAgICAgaWYgKHRoaXMuc3RvcmUuaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zKGxuZ0luTG5ncykpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gbG5nSW5MbmdzO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2hhbmdlTGFuZ3VhZ2UobG5nLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIHRoaXMuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSBsbmc7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHRoaXMuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2luZycsIGxuZyk7XG4gICAgY29uc3Qgc2V0TG5nUHJvcHMgPSBsID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsO1xuICAgICAgdGhpcy5sYW5ndWFnZXMgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGwpO1xuICAgICAgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zZXRSZXNvbHZlZExhbmd1YWdlKGwpO1xuICAgIH07XG4gICAgY29uc3QgZG9uZSA9IChlcnIsIGwpID0+IHtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHNldExuZ1Byb3BzKGwpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG4gICAgICAgIHRoaXMuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZygnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIudCguLi5hcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVyciwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnQoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2V0TG5nID0gbG5ncyA9PiB7XG4gICAgICBpZiAoIWxuZyAmJiAhbG5ncyAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IpIGxuZ3MgPSBbXTtcbiAgICAgIGNvbnN0IGwgPSB0eXBlb2YgbG5ncyA9PT0gJ3N0cmluZycgPyBsbmdzIDogdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEJlc3RNYXRjaEZyb21Db2RlcyhsbmdzKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGlmICghdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgIHNldExuZ1Byb3BzKGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy50cmFuc2xhdG9yLmxhbmd1YWdlKSB0aGlzLnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmNhY2hlVXNlckxhbmd1YWdlKSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuY2FjaGVVc2VyTGFuZ3VhZ2UobCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRSZXNvdXJjZXMobCwgZXJyID0+IHtcbiAgICAgICAgZG9uZShlcnIsIGwpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoIWxuZyAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5hc3luYykge1xuICAgICAgc2V0TG5nKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKSk7XG4gICAgfSBlbHNlIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuYXN5bmMpIHtcbiAgICAgIGlmICh0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KCkudGhlbihzZXRMbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmRldGVjdChzZXRMbmcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMbmcobG5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIGdldEZpeGVkVChsbmcsIG5zLCBrZXlQcmVmaXgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICBjb25zdCBmaXhlZFQgPSBmdW5jdGlvbiAoa2V5LCBvcHRzKSB7XG4gICAgICBsZXQgb3B0aW9ucztcbiAgICAgIGlmICh0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4zID4gMiA/IF9sZW4zIC0gMiA6IDApLCBfa2V5MyA9IDI7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICByZXN0W19rZXkzIC0gMl0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMgPSBfdGhpczMub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcihba2V5LCBvcHRzXS5jb25jYXQocmVzdCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAuLi5vcHRzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBvcHRpb25zLmxuZyA9IG9wdGlvbnMubG5nIHx8IGZpeGVkVC5sbmc7XG4gICAgICBvcHRpb25zLmxuZ3MgPSBvcHRpb25zLmxuZ3MgfHwgZml4ZWRULmxuZ3M7XG4gICAgICBvcHRpb25zLm5zID0gb3B0aW9ucy5ucyB8fCBmaXhlZFQubnM7XG4gICAgICBvcHRpb25zLmtleVByZWZpeCA9IG9wdGlvbnMua2V5UHJlZml4IHx8IGtleVByZWZpeCB8fCBmaXhlZFQua2V5UHJlZml4O1xuICAgICAgY29uc3Qga2V5U2VwYXJhdG9yID0gX3RoaXMzLm9wdGlvbnMua2V5U2VwYXJhdG9yIHx8ICcuJztcbiAgICAgIGxldCByZXN1bHRLZXk7XG4gICAgICBpZiAob3B0aW9ucy5rZXlQcmVmaXggJiYgQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIHJlc3VsdEtleSA9IGtleS5tYXAoayA9PiBgJHtvcHRpb25zLmtleVByZWZpeH0ke2tleVNlcGFyYXRvcn0ke2t9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRLZXkgPSBvcHRpb25zLmtleVByZWZpeCA/IGAke29wdGlvbnMua2V5UHJlZml4fSR7a2V5U2VwYXJhdG9yfSR7a2V5fWAgOiBrZXk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXMzLnQocmVzdWx0S2V5LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgbG5nID09PSAnc3RyaW5nJykge1xuICAgICAgZml4ZWRULmxuZyA9IGxuZztcbiAgICB9IGVsc2Uge1xuICAgICAgZml4ZWRULmxuZ3MgPSBsbmc7XG4gICAgfVxuICAgIGZpeGVkVC5ucyA9IG5zO1xuICAgIGZpeGVkVC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgcmV0dXJuIGZpeGVkVDtcbiAgfVxuICB0KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0b3IgJiYgdGhpcy50cmFuc2xhdG9yLnRyYW5zbGF0ZSguLi5hcmd1bWVudHMpO1xuICB9XG4gIGV4aXN0cygpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdG9yICYmIHRoaXMudHJhbnNsYXRvci5leGlzdHMoLi4uYXJndW1lbnRzKTtcbiAgfVxuICBzZXREZWZhdWx0TmFtZXNwYWNlKG5zKSB7XG4gICAgdGhpcy5vcHRpb25zLmRlZmF1bHROUyA9IG5zO1xuICB9XG4gIGhhc0xvYWRlZE5hbWVzcGFjZShucykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybignaGFzTG9hZGVkTmFtZXNwYWNlOiBpMThuZXh0IHdhcyBub3QgaW5pdGlhbGl6ZWQnLCB0aGlzLmxhbmd1YWdlcyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdGhpcy5sYW5ndWFnZXMgfHwgIXRoaXMubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybignaGFzTG9hZGVkTmFtZXNwYWNlOiBpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eScsIHRoaXMubGFuZ3VhZ2VzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgbG5nID0gb3B0aW9ucy5sbmcgfHwgdGhpcy5yZXNvbHZlZExhbmd1YWdlIHx8IHRoaXMubGFuZ3VhZ2VzWzBdO1xuICAgIGNvbnN0IGZhbGxiYWNrTG5nID0gdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nIDogZmFsc2U7XG4gICAgY29uc3QgbGFzdExuZyA9IHRoaXMubGFuZ3VhZ2VzW3RoaXMubGFuZ3VhZ2VzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGxvYWROb3RQZW5kaW5nID0gKGwsIG4pID0+IHtcbiAgICAgIGNvbnN0IGxvYWRTdGF0ZSA9IHRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5zdGF0ZVtgJHtsfXwke259YF07XG4gICAgICByZXR1cm4gbG9hZFN0YXRlID09PSAtMSB8fCBsb2FkU3RhdGUgPT09IDI7XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5wcmVjaGVjaykge1xuICAgICAgY29uc3QgcHJlUmVzdWx0ID0gb3B0aW9ucy5wcmVjaGVjayh0aGlzLCBsb2FkTm90UGVuZGluZyk7XG4gICAgICBpZiAocHJlUmVzdWx0ICE9PSB1bmRlZmluZWQpIHJldHVybiBwcmVSZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kIHx8IHRoaXMub3B0aW9ucy5yZXNvdXJjZXMgJiYgIXRoaXMub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGxvYWROb3RQZW5kaW5nKGxuZywgbnMpICYmICghZmFsbGJhY2tMbmcgfHwgbG9hZE5vdFBlbmRpbmcobGFzdExuZywgbnMpKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxvYWROYW1lc3BhY2VzKG5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5ucykge1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5zID09PSAnc3RyaW5nJykgbnMgPSBbbnNdO1xuICAgIG5zLmZvckVhY2gobiA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5zLmluZGV4T2YobikgPCAwKSB0aGlzLm9wdGlvbnMubnMucHVzaChuKTtcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoZXJyID0+IHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH1cbiAgbG9hZExhbmd1YWdlcyhsbmdzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBpZiAodHlwZW9mIGxuZ3MgPT09ICdzdHJpbmcnKSBsbmdzID0gW2xuZ3NdO1xuICAgIGNvbnN0IHByZWxvYWRlZCA9IHRoaXMub3B0aW9ucy5wcmVsb2FkIHx8IFtdO1xuICAgIGNvbnN0IG5ld0xuZ3MgPSBsbmdzLmZpbHRlcihsbmcgPT4gcHJlbG9hZGVkLmluZGV4T2YobG5nKSA8IDApO1xuICAgIGlmICghbmV3TG5ncy5sZW5ndGgpIHtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnByZWxvYWQgPSBwcmVsb2FkZWQuY29uY2F0KG5ld0xuZ3MpO1xuICAgIHRoaXMubG9hZFJlc291cmNlcyhlcnIgPT4ge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZDtcbiAgfVxuICBkaXIobG5nKSB7XG4gICAgaWYgKCFsbmcpIGxuZyA9IHRoaXMucmVzb2x2ZWRMYW5ndWFnZSB8fCAodGhpcy5sYW5ndWFnZXMgJiYgdGhpcy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IHRoaXMubGFuZ3VhZ2VzWzBdIDogdGhpcy5sYW5ndWFnZSk7XG4gICAgaWYgKCFsbmcpIHJldHVybiAncnRsJztcbiAgICBjb25zdCBydGxMbmdzID0gWydhcicsICdzaHUnLCAnc3FyJywgJ3NzaCcsICd4YWEnLCAneWhkJywgJ3l1ZCcsICdhYW8nLCAnYWJoJywgJ2FidicsICdhY20nLCAnYWNxJywgJ2FjdycsICdhY3gnLCAnYWN5JywgJ2FkZicsICdhZHMnLCAnYWViJywgJ2FlYycsICdhZmInLCAnYWpwJywgJ2FwYycsICdhcGQnLCAnYXJiJywgJ2FycScsICdhcnMnLCAnYXJ5JywgJ2FyeicsICdhdXonLCAnYXZsJywgJ2F5aCcsICdheWwnLCAnYXluJywgJ2F5cCcsICdiYnonLCAncGdhJywgJ2hlJywgJ2l3JywgJ3BzJywgJ3BidCcsICdwYnUnLCAncHN0JywgJ3BycCcsICdwcmQnLCAndWcnLCAndXInLCAneWRkJywgJ3lkcycsICd5aWgnLCAnamknLCAneWknLCAnaGJvJywgJ21lbicsICd4bW4nLCAnZmEnLCAnanByJywgJ3BlbycsICdwZXMnLCAncHJzJywgJ2R2JywgJ3NhbScsICdja2InXTtcbiAgICBjb25zdCBsYW5ndWFnZVV0aWxzID0gdGhpcy5zZXJ2aWNlcyAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMgfHwgbmV3IExhbmd1YWdlVXRpbChnZXQoKSk7XG4gICAgcmV0dXJuIHJ0bExuZ3MuaW5kZXhPZihsYW5ndWFnZVV0aWxzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGxuZykpID4gLTEgfHwgbG5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignLWFyYWInKSA+IDEgPyAncnRsJyA6ICdsdHInO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG5ldyBJMThuKG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfVxuICBjbG9uZUluc3RhbmNlKCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBsZXQgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG5vb3A7XG4gICAgY29uc3QgZm9ya1Jlc291cmNlU3RvcmUgPSBvcHRpb25zLmZvcmtSZXNvdXJjZVN0b3JlO1xuICAgIGlmIChmb3JrUmVzb3VyY2VTdG9yZSkgZGVsZXRlIG9wdGlvbnMuZm9ya1Jlc291cmNlU3RvcmU7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAuLi57XG4gICAgICAgIGlzQ2xvbmU6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNsb25lID0gbmV3IEkxOG4obWVyZ2VkT3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuZGVidWcgIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbG9uZS5sb2dnZXIgPSBjbG9uZS5sb2dnZXIuY2xvbmUob3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IG1lbWJlcnNUb0NvcHkgPSBbJ3N0b3JlJywgJ3NlcnZpY2VzJywgJ2xhbmd1YWdlJ107XG4gICAgbWVtYmVyc1RvQ29weS5mb3JFYWNoKG0gPT4ge1xuICAgICAgY2xvbmVbbV0gPSB0aGlzW21dO1xuICAgIH0pO1xuICAgIGNsb25lLnNlcnZpY2VzID0ge1xuICAgICAgLi4udGhpcy5zZXJ2aWNlc1xuICAgIH07XG4gICAgY2xvbmUuc2VydmljZXMudXRpbHMgPSB7XG4gICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IGNsb25lLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKGNsb25lKVxuICAgIH07XG4gICAgaWYgKGZvcmtSZXNvdXJjZVN0b3JlKSB7XG4gICAgICBjbG9uZS5zdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKHRoaXMuc3RvcmUuZGF0YSwgbWVyZ2VkT3B0aW9ucyk7XG4gICAgICBjbG9uZS5zZXJ2aWNlcy5yZXNvdXJjZVN0b3JlID0gY2xvbmUuc3RvcmU7XG4gICAgfVxuICAgIGNsb25lLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcihjbG9uZS5zZXJ2aWNlcywgbWVyZ2VkT3B0aW9ucyk7XG4gICAgY2xvbmUudHJhbnNsYXRvci5vbignKicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cbiAgICAgIGNsb25lLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgIH0pO1xuICAgIGNsb25lLmluaXQobWVyZ2VkT3B0aW9ucywgY2FsbGJhY2spO1xuICAgIGNsb25lLnRyYW5zbGF0b3Iub3B0aW9ucyA9IG1lcmdlZE9wdGlvbnM7XG4gICAgY2xvbmUudHJhbnNsYXRvci5iYWNrZW5kQ29ubmVjdG9yLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgaGFzTG9hZGVkTmFtZXNwYWNlOiBjbG9uZS5oYXNMb2FkZWROYW1lc3BhY2UuYmluZChjbG9uZSlcbiAgICB9O1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIHN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICBsYW5ndWFnZXM6IHRoaXMubGFuZ3VhZ2VzLFxuICAgICAgcmVzb2x2ZWRMYW5ndWFnZTogdGhpcy5yZXNvbHZlZExhbmd1YWdlXG4gICAgfTtcbiAgfVxufVxuY29uc3QgaW5zdGFuY2UgPSBJMThuLmNyZWF0ZUluc3RhbmNlKCk7XG5pbnN0YW5jZS5jcmVhdGVJbnN0YW5jZSA9IEkxOG4uY3JlYXRlSW5zdGFuY2U7XG5cbmNvbnN0IGNyZWF0ZUluc3RhbmNlID0gaW5zdGFuY2UuY3JlYXRlSW5zdGFuY2U7XG5jb25zdCBkaXIgPSBpbnN0YW5jZS5kaXI7XG5jb25zdCBpbml0ID0gaW5zdGFuY2UuaW5pdDtcbmNvbnN0IGxvYWRSZXNvdXJjZXMgPSBpbnN0YW5jZS5sb2FkUmVzb3VyY2VzO1xuY29uc3QgcmVsb2FkUmVzb3VyY2VzID0gaW5zdGFuY2UucmVsb2FkUmVzb3VyY2VzO1xuY29uc3QgdXNlID0gaW5zdGFuY2UudXNlO1xuY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSBpbnN0YW5jZS5jaGFuZ2VMYW5ndWFnZTtcbmNvbnN0IGdldEZpeGVkVCA9IGluc3RhbmNlLmdldEZpeGVkVDtcbmNvbnN0IHQgPSBpbnN0YW5jZS50O1xuY29uc3QgZXhpc3RzID0gaW5zdGFuY2UuZXhpc3RzO1xuY29uc3Qgc2V0RGVmYXVsdE5hbWVzcGFjZSA9IGluc3RhbmNlLnNldERlZmF1bHROYW1lc3BhY2U7XG5jb25zdCBoYXNMb2FkZWROYW1lc3BhY2UgPSBpbnN0YW5jZS5oYXNMb2FkZWROYW1lc3BhY2U7XG5jb25zdCBsb2FkTmFtZXNwYWNlcyA9IGluc3RhbmNlLmxvYWROYW1lc3BhY2VzO1xuY29uc3QgbG9hZExhbmd1YWdlcyA9IGluc3RhbmNlLmxvYWRMYW5ndWFnZXM7XG5cbmV4cG9ydCB7IGNoYW5nZUxhbmd1YWdlLCBjcmVhdGVJbnN0YW5jZSwgaW5zdGFuY2UgYXMgZGVmYXVsdCwgZGlyLCBleGlzdHMsIGdldEZpeGVkVCwgaGFzTG9hZGVkTmFtZXNwYWNlLCBpbml0LCBsb2FkTGFuZ3VhZ2VzLCBsb2FkTmFtZXNwYWNlcywgbG9hZFJlc291cmNlcywgcmVsb2FkUmVzb3VyY2VzLCBzZXREZWZhdWx0TmFtZXNwYWNlLCB0LCB1c2UgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vcHJlZmVyLXNwcmVhZCAqL1xuaW1wb3J0IHtUQVJHRVQsIFVOU1VCU0NSSUJFfSBmcm9tICcuL2xpYi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHMsIGlzQnVpbHRpbldpdGhvdXRNdXRhYmxlTWV0aG9kc30gZnJvbSAnLi9saWIvaXMtYnVpbHRpbi5qcyc7XG5pbXBvcnQgcGF0aCBmcm9tICcuL2xpYi9wYXRoLmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2xpYi9pcy1zeW1ib2wuanMnO1xuaW1wb3J0IGlzSXRlcmF0b3IgZnJvbSAnLi9saWIvaXMtaXRlcmF0b3IuanMnO1xuaW1wb3J0IHdyYXBJdGVyYXRvciBmcm9tICcuL2xpYi93cmFwLWl0ZXJhdG9yLmpzJztcbmltcG9ydCBpZ25vcmVQcm9wZXJ0eSBmcm9tICcuL2xpYi9pZ25vcmUtcHJvcGVydHkuanMnO1xuaW1wb3J0IENhY2hlIGZyb20gJy4vbGliL2NhY2hlLmpzJztcbmltcG9ydCBTbWFydENsb25lIGZyb20gJy4vbGliL3NtYXJ0LWNsb25lL3NtYXJ0LWNsb25lLmpzJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGVxdWFsczogT2JqZWN0LmlzLFxuXHRpc1NoYWxsb3c6IGZhbHNlLFxuXHRwYXRoQXNBcnJheTogZmFsc2UsXG5cdGlnbm9yZVN5bWJvbHM6IGZhbHNlLFxuXHRpZ25vcmVVbmRlcnNjb3JlczogZmFsc2UsXG5cdGlnbm9yZURldGFjaGVkOiBmYWxzZSxcblx0ZGV0YWlsczogZmFsc2UsXG59O1xuXG5jb25zdCBvbkNoYW5nZSA9IChvYmplY3QsIG9uQ2hhbmdlLCBvcHRpb25zID0ge30pID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHQuLi5kZWZhdWx0T3B0aW9ucyxcblx0XHQuLi5vcHRpb25zLFxuXHR9O1xuXG5cdGNvbnN0IHByb3h5VGFyZ2V0ID0gU3ltYm9sKCdQcm94eVRhcmdldCcpO1xuXHRjb25zdCB7ZXF1YWxzLCBpc1NoYWxsb3csIGlnbm9yZURldGFjaGVkLCBkZXRhaWxzfSA9IG9wdGlvbnM7XG5cdGNvbnN0IGNhY2hlID0gbmV3IENhY2hlKGVxdWFscyk7XG5cdGNvbnN0IGhhc09uVmFsaWRhdGUgPSB0eXBlb2Ygb3B0aW9ucy5vblZhbGlkYXRlID09PSAnZnVuY3Rpb24nO1xuXHRjb25zdCBzbWFydENsb25lID0gbmV3IFNtYXJ0Q2xvbmUoaGFzT25WYWxpZGF0ZSk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblx0Y29uc3QgdmFsaWRhdGUgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHByZXZpb3VzLCBhcHBseURhdGEpID0+ICFoYXNPblZhbGlkYXRlXG5cdFx0fHwgc21hcnRDbG9uZS5pc0Nsb25pbmdcblx0XHR8fCBvcHRpb25zLm9uVmFsaWRhdGUocGF0aC5jb25jYXQoY2FjaGUuZ2V0UGF0aCh0YXJnZXQpLCBwcm9wZXJ0eSksIHZhbHVlLCBwcmV2aW91cywgYXBwbHlEYXRhKSA9PT0gdHJ1ZTtcblxuXHRjb25zdCBoYW5kbGVDaGFuZ2VPblRhcmdldCA9ICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcHJldmlvdXMpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQhaWdub3JlUHJvcGVydHkoY2FjaGUsIG9wdGlvbnMsIHByb3BlcnR5KVxuXHRcdFx0JiYgIShpZ25vcmVEZXRhY2hlZCAmJiBjYWNoZS5pc0RldGFjaGVkKHRhcmdldCwgb2JqZWN0KSlcblx0XHQpIHtcblx0XHRcdGhhbmRsZUNoYW5nZShjYWNoZS5nZXRQYXRoKHRhcmdldCksIHByb3BlcnR5LCB2YWx1ZSwgcHJldmlvdXMpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoY2hhbmdlUGF0aCwgcHJvcGVydHksIHZhbHVlLCBwcmV2aW91cywgYXBwbHlEYXRhKSA9PiB7XG5cdFx0aWYgKHNtYXJ0Q2xvbmUuaXNDbG9uaW5nKSB7XG5cdFx0XHRzbWFydENsb25lLnVwZGF0ZShjaGFuZ2VQYXRoLCBwcm9wZXJ0eSwgcHJldmlvdXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvbkNoYW5nZShwYXRoLmNvbmNhdChjaGFuZ2VQYXRoLCBwcm9wZXJ0eSksIHZhbHVlLCBwcmV2aW91cywgYXBwbHlEYXRhKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgZ2V0UHJveHlUYXJnZXQgPSB2YWx1ZSA9PiB2YWx1ZVxuXHRcdD8gKHZhbHVlW3Byb3h5VGFyZ2V0XSB8fCB2YWx1ZSlcblx0XHQ6IHZhbHVlO1xuXG5cdGNvbnN0IHByZXBhcmVWYWx1ZSA9ICh2YWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eSwgYmFzZVBhdGgpID0+IHtcblx0XHRpZiAoXG5cdFx0XHRpc0J1aWx0aW5XaXRob3V0TXV0YWJsZU1ldGhvZHModmFsdWUpXG5cdFx0XHR8fCBwcm9wZXJ0eSA9PT0gJ2NvbnN0cnVjdG9yJ1xuXHRcdFx0fHwgKGlzU2hhbGxvdyAmJiAhU21hcnRDbG9uZS5pc0hhbmRsZWRNZXRob2QodGFyZ2V0LCBwcm9wZXJ0eSkpXG5cdFx0XHR8fCBpZ25vcmVQcm9wZXJ0eShjYWNoZSwgb3B0aW9ucywgcHJvcGVydHkpXG5cdFx0XHR8fCBjYWNoZS5pc0dldEludmFyaWFudCh0YXJnZXQsIHByb3BlcnR5KVxuXHRcdFx0fHwgKGlnbm9yZURldGFjaGVkICYmIGNhY2hlLmlzRGV0YWNoZWQodGFyZ2V0LCBvYmplY3QpKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmIChiYXNlUGF0aCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRiYXNlUGF0aCA9IGNhY2hlLmdldFBhdGgodGFyZ2V0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGUuZ2V0UHJveHkodmFsdWUsIHBhdGguY29uY2F0KGJhc2VQYXRoLCBwcm9wZXJ0eSksIGhhbmRsZXIsIHByb3h5VGFyZ2V0KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVyID0ge1xuXHRcdGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuXHRcdFx0aWYgKGlzU3ltYm9sKHByb3BlcnR5KSkge1xuXHRcdFx0XHRpZiAocHJvcGVydHkgPT09IHByb3h5VGFyZ2V0IHx8IHByb3BlcnR5ID09PSBUQVJHRVQpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHByb3BlcnR5ID09PSBVTlNVQlNDUklCRVxuXHRcdFx0XHRcdCYmICFjYWNoZS5pc1Vuc3Vic2NyaWJlZFxuXHRcdFx0XHRcdCYmIGNhY2hlLmdldFBhdGgodGFyZ2V0KS5sZW5ndGggPT09IDBcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y2FjaGUudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gaXNCdWlsdGluV2l0aE11dGFibGVNZXRob2RzKHRhcmdldClcblx0XHRcdFx0PyBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5KVxuXHRcdFx0XHQ6IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKTtcblxuXHRcdFx0cmV0dXJuIHByZXBhcmVWYWx1ZSh2YWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eSk7XG5cdFx0fSxcblxuXHRcdHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJveHlUYXJnZXQodmFsdWUpO1xuXG5cdFx0XHRjb25zdCByZWZsZWN0VGFyZ2V0ID0gdGFyZ2V0W3Byb3h5VGFyZ2V0XSB8fCB0YXJnZXQ7XG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IHJlZmxlY3RUYXJnZXRbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoZXF1YWxzKHByZXZpb3VzLCB2YWx1ZSkgJiYgcHJvcGVydHkgaW4gdGFyZ2V0KSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHByZXZpb3VzKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpc1ZhbGlkXG5cdFx0XHRcdCYmIGNhY2hlLnNldFByb3BlcnR5KHJlZmxlY3RUYXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIHByZXZpb3VzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGhhbmRsZUNoYW5nZU9uVGFyZ2V0KHRhcmdldCwgcHJvcGVydHksIHRhcmdldFtwcm9wZXJ0eV0sIHByZXZpb3VzKTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICFpc1ZhbGlkO1xuXHRcdH0sXG5cblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG5cdFx0XHRpZiAoIWNhY2hlLmlzU2FtZURlc2NyaXB0b3IoZGVzY3JpcHRvciwgdGFyZ2V0LCBwcm9wZXJ0eSkpIHtcblx0XHRcdFx0Y29uc3QgcHJldmlvdXMgPSB0YXJnZXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWxpZGF0ZSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yLnZhbHVlLCBwcmV2aW91cylcblx0XHRcdFx0XHQmJiBjYWNoZS5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yLCBwcmV2aW91cylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0aGFuZGxlQ2hhbmdlT25UYXJnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvci52YWx1ZSwgcHJldmlvdXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG5cdFx0XHRpZiAoIVJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHkpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHkpO1xuXHRcdFx0Y29uc3QgaXNWYWxpZCA9IHZhbGlkYXRlKHRhcmdldCwgcHJvcGVydHksIHVuZGVmaW5lZCwgcHJldmlvdXMpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGlzVmFsaWRcblx0XHRcdFx0JiYgY2FjaGUuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgcHJldmlvdXMpXG5cdFx0XHQpIHtcblx0XHRcdFx0aGFuZGxlQ2hhbmdlT25UYXJnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5kZWZpbmVkLCBwcmV2aW91cyk7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAhaXNWYWxpZDtcblx0XHR9LFxuXG5cdFx0YXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmd1bWVudHNMaXN0KSB7XG5cdFx0XHRjb25zdCB0aGlzUHJveHlUYXJnZXQgPSB0aGlzQXJnW3Byb3h5VGFyZ2V0XSB8fCB0aGlzQXJnO1xuXG5cdFx0XHRpZiAoY2FjaGUuaXNVbnN1YnNjcmliZWQpIHtcblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzUHJveHlUYXJnZXQsIGFyZ3VtZW50c0xpc3QpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdChkZXRhaWxzID09PSBmYWxzZVxuXHRcdFx0XHRcdHx8IChkZXRhaWxzICE9PSB0cnVlICYmICFkZXRhaWxzLmluY2x1ZGVzKHRhcmdldC5uYW1lKSkpXG5cdFx0XHRcdCYmIFNtYXJ0Q2xvbmUuaXNIYW5kbGVkVHlwZSh0aGlzUHJveHlUYXJnZXQpXG5cdFx0XHQpIHtcblx0XHRcdFx0bGV0IGFwcGx5UGF0aCA9IHBhdGguaW5pdGlhbChjYWNoZS5nZXRQYXRoKHRhcmdldCkpO1xuXHRcdFx0XHRjb25zdCBpc0hhbmRsZWRNZXRob2QgPSBTbWFydENsb25lLmlzSGFuZGxlZE1ldGhvZCh0aGlzUHJveHlUYXJnZXQsIHRhcmdldC5uYW1lKTtcblxuXHRcdFx0XHRzbWFydENsb25lLnN0YXJ0KHRoaXNQcm94eVRhcmdldCwgYXBwbHlQYXRoLCBhcmd1bWVudHNMaXN0KTtcblxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gUmVmbGVjdC5hcHBseShcblx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0c21hcnRDbG9uZS5wcmVmZXJyZWRUaGlzQXJnKHRhcmdldCwgdGhpc0FyZywgdGhpc1Byb3h5VGFyZ2V0KSxcblx0XHRcdFx0XHRpc0hhbmRsZWRNZXRob2Rcblx0XHRcdFx0XHRcdD8gYXJndW1lbnRzTGlzdC5tYXAoYXJndW1lbnQgPT4gZ2V0UHJveHlUYXJnZXQoYXJndW1lbnQpKVxuXHRcdFx0XHRcdFx0OiBhcmd1bWVudHNMaXN0LFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGNvbnN0IGlzQ2hhbmdlZCA9IHNtYXJ0Q2xvbmUuaXNDaGFuZ2VkKHRoaXNQcm94eVRhcmdldCwgZXF1YWxzKTtcblx0XHRcdFx0Y29uc3QgcHJldmlvdXMgPSBzbWFydENsb25lLnN0b3AoKTtcblxuXHRcdFx0XHRpZiAoU21hcnRDbG9uZS5pc0hhbmRsZWRUeXBlKHJlc3VsdCkgJiYgaXNIYW5kbGVkTWV0aG9kKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXNBcmcgaW5zdGFuY2VvZiBNYXAgJiYgdGFyZ2V0Lm5hbWUgPT09ICdnZXQnKSB7XG5cdFx0XHRcdFx0XHRhcHBseVBhdGggPSBwYXRoLmNvbmNhdChhcHBseVBhdGgsIGFyZ3VtZW50c0xpc3RbMF0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc3VsdCA9IGNhY2hlLmdldFByb3h5KHJlc3VsdCwgYXBwbHlQYXRoLCBoYW5kbGVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NoYW5nZWQpIHtcblx0XHRcdFx0XHRjb25zdCBhcHBseURhdGEgPSB7XG5cdFx0XHRcdFx0XHRuYW1lOiB0YXJnZXQubmFtZSxcblx0XHRcdFx0XHRcdGFyZ3M6IGFyZ3VtZW50c0xpc3QsXG5cdFx0XHRcdFx0XHRyZXN1bHQsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRjb25zdCBjaGFuZ2VQYXRoID0gc21hcnRDbG9uZS5pc0Nsb25pbmdcblx0XHRcdFx0XHRcdD8gcGF0aC5pbml0aWFsKGFwcGx5UGF0aClcblx0XHRcdFx0XHRcdDogYXBwbHlQYXRoO1xuXHRcdFx0XHRcdGNvbnN0IHByb3BlcnR5ID0gc21hcnRDbG9uZS5pc0Nsb25pbmdcblx0XHRcdFx0XHRcdD8gcGF0aC5sYXN0KGFwcGx5UGF0aClcblx0XHRcdFx0XHRcdDogJyc7XG5cblx0XHRcdFx0XHRpZiAodmFsaWRhdGUocGF0aC5nZXQob2JqZWN0LCBjaGFuZ2VQYXRoKSwgcHJvcGVydHksIHRoaXNQcm94eVRhcmdldCwgcHJldmlvdXMsIGFwcGx5RGF0YSkpIHtcblx0XHRcdFx0XHRcdGhhbmRsZUNoYW5nZShjaGFuZ2VQYXRoLCBwcm9wZXJ0eSwgdGhpc1Byb3h5VGFyZ2V0LCBwcmV2aW91cywgYXBwbHlEYXRhKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c21hcnRDbG9uZS51bmRvKHRoaXNQcm94eVRhcmdldCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCh0aGlzQXJnIGluc3RhbmNlb2YgTWFwIHx8IHRoaXNBcmcgaW5zdGFuY2VvZiBTZXQpXG5cdFx0XHRcdFx0JiYgaXNJdGVyYXRvcihyZXN1bHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiB3cmFwSXRlcmF0b3IocmVzdWx0LCB0YXJnZXQsIHRoaXNBcmcsIGFwcGx5UGF0aCwgcHJlcGFyZVZhbHVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJndW1lbnRzTGlzdCk7XG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCBwcm94eSA9IGNhY2hlLmdldFByb3h5KG9iamVjdCwgb3B0aW9ucy5wYXRoQXNBcnJheSA/IFtdIDogJycsIGhhbmRsZXIpO1xuXHRvbkNoYW5nZSA9IG9uQ2hhbmdlLmJpbmQocHJveHkpO1xuXG5cdGlmIChoYXNPblZhbGlkYXRlKSB7XG5cdFx0b3B0aW9ucy5vblZhbGlkYXRlID0gb3B0aW9ucy5vblZhbGlkYXRlLmJpbmQocHJveHkpO1xuXHR9XG5cblx0cmV0dXJuIHByb3h5O1xufTtcblxub25DaGFuZ2UudGFyZ2V0ID0gcHJveHkgPT4gKHByb3h5ICYmIHByb3h5W1RBUkdFVF0pIHx8IHByb3h5O1xub25DaGFuZ2UudW5zdWJzY3JpYmUgPSBwcm94eSA9PiBwcm94eVtVTlNVQlNDUklCRV0gfHwgcHJveHk7XG5cbmV4cG9ydCBkZWZhdWx0IG9uQ2hhbmdlO1xuIiwiaW1wb3J0IHBhdGggZnJvbSAnLi9wYXRoLmpzJztcblxuLyoqXG5AY2xhc3MgQ2FjaGVcbkBwcml2YXRlXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGUge1xuXHRjb25zdHJ1Y3RvcihlcXVhbHMpIHtcblx0XHR0aGlzLl9lcXVhbHMgPSBlcXVhbHM7XG5cdFx0dGhpcy5fcHJveHlDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cdFx0dGhpcy5fcGF0aENhY2hlID0gbmV3IFdlYWtNYXAoKTtcblx0XHR0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG5cdH1cblxuXHRfZ2V0RGVzY3JpcHRvckNhY2hlKCkge1xuXHRcdGlmICh0aGlzLl9kZXNjcmlwdG9yQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fZGVzY3JpcHRvckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fZGVzY3JpcHRvckNhY2hlO1xuXHR9XG5cblx0X2dldFByb3BlcnRpZXModGFyZ2V0KSB7XG5cdFx0Y29uc3QgZGVzY3JpcHRvckNhY2hlID0gdGhpcy5fZ2V0RGVzY3JpcHRvckNhY2hlKCk7XG5cdFx0bGV0IHByb3BlcnRpZXMgPSBkZXNjcmlwdG9yQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRwcm9wZXJ0aWVzID0ge307XG5cdFx0XHRkZXNjcmlwdG9yQ2FjaGUuc2V0KHRhcmdldCwgcHJvcGVydGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BlcnRpZXM7XG5cdH1cblxuXHRfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpIHtcblx0XHRpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLl9nZXRQcm9wZXJ0aWVzKHRhcmdldCk7XG5cdFx0bGV0IGRlc2NyaXB0b3IgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcblxuXHRcdGlmIChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KTtcblx0XHRcdHByb3BlcnRpZXNbcHJvcGVydHldID0gZGVzY3JpcHRvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVzY3JpcHRvcjtcblx0fVxuXG5cdGdldFByb3h5KHRhcmdldCwgcGF0aCwgaGFuZGxlciwgcHJveHlUYXJnZXQpIHtcblx0XHRpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9XG5cblx0XHRjb25zdCByZWZsZWN0VGFyZ2V0ID0gdGFyZ2V0W3Byb3h5VGFyZ2V0XTtcblx0XHRjb25zdCBzb3VyY2UgPSByZWZsZWN0VGFyZ2V0IHx8IHRhcmdldDtcblxuXHRcdHRoaXMuX3BhdGhDYWNoZS5zZXQoc291cmNlLCBwYXRoKTtcblxuXHRcdGxldCBwcm94eSA9IHRoaXMuX3Byb3h5Q2FjaGUuZ2V0KHNvdXJjZSk7XG5cblx0XHRpZiAocHJveHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cHJveHkgPSByZWZsZWN0VGFyZ2V0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKVxuXHRcdFx0XHQ6IHRhcmdldDtcblxuXHRcdFx0dGhpcy5fcHJveHlDYWNoZS5zZXQoc291cmNlLCBwcm94eSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3h5O1xuXHR9XG5cblx0Z2V0UGF0aCh0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGhpcy5pc1Vuc3Vic2NyaWJlZCA/IHVuZGVmaW5lZCA6IHRoaXMuX3BhdGhDYWNoZS5nZXQodGFyZ2V0KTtcblx0fVxuXG5cdGlzRGV0YWNoZWQodGFyZ2V0LCBvYmplY3QpIHtcblx0XHRyZXR1cm4gIU9iamVjdC5pcyh0YXJnZXQsIHBhdGguZ2V0KG9iamVjdCwgdGhpcy5nZXRQYXRoKHRhcmdldCkpKTtcblx0fVxuXG5cdGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcblx0XHRpZiAoIVJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNVbnN1YnNjcmliZWQpIHtcblx0XHRcdHRoaXMuX2dldFByb3BlcnRpZXModGFyZ2V0KVtwcm9wZXJ0eV0gPSBkZXNjcmlwdG9yO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0c2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBwcmV2aW91cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1wYXJhbXNcblx0XHRpZiAoIXRoaXMuX2VxdWFscyhwcmV2aW91cywgdmFsdWUpIHx8ICEocHJvcGVydHkgaW4gdGFyZ2V0KSkge1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2dldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KTtcblxuXHRcdFx0aWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCAmJiAnc2V0JyBpbiBkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0ZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgcHJldmlvdXMpIHtcblx0XHRpZiAoUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG5cdFx0XHRcdGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLl9nZXREZXNjcmlwdG9yQ2FjaGUoKS5nZXQodGFyZ2V0KTtcblxuXHRcdFx0XHRpZiAocHJvcGVydGllcykge1xuXHRcdFx0XHRcdGRlbGV0ZSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcblx0XHRcdFx0XHR0aGlzLl9wYXRoQ2FjaGUuZGVsZXRlKHByZXZpb3VzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpc1NhbWVEZXNjcmlwdG9yKGEsIHRhcmdldCwgcHJvcGVydHkpIHtcblx0XHRjb25zdCBiID0gdGhpcy5fZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpO1xuXG5cdFx0cmV0dXJuIGEgIT09IHVuZGVmaW5lZFxuXHRcdFx0JiYgYiAhPT0gdW5kZWZpbmVkXG5cdFx0XHQmJiBPYmplY3QuaXMoYS52YWx1ZSwgYi52YWx1ZSlcblx0XHRcdCYmIChhLndyaXRhYmxlIHx8IGZhbHNlKSA9PT0gKGIud3JpdGFibGUgfHwgZmFsc2UpXG5cdFx0XHQmJiAoYS5lbnVtZXJhYmxlIHx8IGZhbHNlKSA9PT0gKGIuZW51bWVyYWJsZSB8fCBmYWxzZSlcblx0XHRcdCYmIChhLmNvbmZpZ3VyYWJsZSB8fCBmYWxzZSkgPT09IChiLmNvbmZpZ3VyYWJsZSB8fCBmYWxzZSlcblx0XHRcdCYmIGEuZ2V0ID09PSBiLmdldFxuXHRcdFx0JiYgYS5zZXQgPT09IGIuc2V0O1xuXHR9XG5cblx0aXNHZXRJbnZhcmlhbnQodGFyZ2V0LCBwcm9wZXJ0eSkge1xuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLl9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cblx0XHRyZXR1cm4gZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkXG5cdFx0XHQmJiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAhPT0gdHJ1ZVxuXHRcdFx0JiYgZGVzY3JpcHRvci53cml0YWJsZSAhPT0gdHJ1ZTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKCkge1xuXHRcdHRoaXMuX2Rlc2NyaXB0b3JDYWNoZSA9IG51bGw7XG5cdFx0dGhpcy5fcGF0aENhY2hlID0gbnVsbDtcblx0XHR0aGlzLl9wcm94eUNhY2hlID0gbnVsbDtcblx0XHR0aGlzLmlzVW5zdWJzY3JpYmVkID0gdHJ1ZTtcblx0fVxufVxuIiwiZXhwb3J0IGNvbnN0IFBBVEhfU0VQQVJBVE9SID0gJy4nO1xuZXhwb3J0IGNvbnN0IFRBUkdFVCA9IFN5bWJvbCgndGFyZ2V0Jyk7XG5leHBvcnQgY29uc3QgVU5TVUJTQ1JJQkUgPSBTeW1ib2woJ3Vuc3Vic2NyaWJlJyk7XG4iLCJpbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pcy1zeW1ib2wuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZ25vcmVQcm9wZXJ0eShjYWNoZSwgb3B0aW9ucywgcHJvcGVydHkpIHtcblx0cmV0dXJuIGNhY2hlLmlzVW5zdWJzY3JpYmVkXG5cdFx0fHwgKG9wdGlvbnMuaWdub3JlU3ltYm9scyAmJiBpc1N5bWJvbChwcm9wZXJ0eSkpXG5cdFx0fHwgKG9wdGlvbnMuaWdub3JlVW5kZXJzY29yZXMgJiYgcHJvcGVydHkuY2hhckF0KDApID09PSAnXycpXG5cdFx0fHwgKCdpZ25vcmVLZXlzJyBpbiBvcHRpb25zICYmIG9wdGlvbnMuaWdub3JlS2V5cy5pbmNsdWRlcyhwcm9wZXJ0eSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgQXJyYXkuaXNBcnJheTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHModmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZVxuXHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0XG5cdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBNYXBcblx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFdlYWtTZXRcblx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFdlYWtNYXBcblx0XHR8fCBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCdWlsdGluV2l0aG91dE11dGFibGVNZXRob2RzKHZhbHVlKSB7XG5cdHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlID09PSBudWxsIDogdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSXRlcmF0b3IodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLm5leHQgPT09ICdmdW5jdGlvbic7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCc7XG59XG4iLCJpbXBvcnQge1BBVEhfU0VQQVJBVE9SfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzLWFycmF5LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzLXN5bWJvbC5qcyc7XG5cbmNvbnN0IHBhdGggPSB7XG5cdGFmdGVyOiAocGF0aCwgc3ViUGF0aCkgPT4ge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aC5zbGljZShzdWJQYXRoLmxlbmd0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN1YlBhdGggPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gcGF0aDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aC5zbGljZShzdWJQYXRoLmxlbmd0aCArIDEpO1xuXHR9LFxuXHRjb25jYXQ6IChwYXRoLCBrZXkpID0+IHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0cGF0aCA9IFsuLi5wYXRoXTtcblxuXHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRwYXRoLnB1c2goa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSAmJiBrZXkudG9TdHJpbmcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHBhdGggIT09ICcnKSB7XG5cdFx0XHRcdHBhdGggKz0gUEFUSF9TRVBBUkFUT1I7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc1N5bWJvbChrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBwYXRoICsga2V5LnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwYXRoICsga2V5O1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9LFxuXHRpbml0aWFsOiBwYXRoID0+IHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0cmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpO1xuXHRcdH1cblxuXHRcdGlmIChwYXRoID09PSAnJykge1xuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFBBVEhfU0VQQVJBVE9SKTtcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aC5zbGljZSgwLCBpbmRleCk7XG5cdH0sXG5cdGxhc3Q6IHBhdGggPT4ge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aFtwYXRoLmxlbmd0aCAtIDFdIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmIChwYXRoID09PSAnJykge1xuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFBBVEhfU0VQQVJBVE9SKTtcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdHJldHVybiBwYXRoO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoLnNsaWNlKGluZGV4ICsgMSk7XG5cdH0sXG5cdHdhbGs6IChwYXRoLCBjYWxsYmFjaykgPT4ge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBwYXRoKSB7XG5cdFx0XHRcdGNhbGxiYWNrKGtleSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChwYXRoICE9PSAnJykge1xuXHRcdFx0bGV0IHBvc2l0aW9uID0gMDtcblx0XHRcdGxldCBpbmRleCA9IHBhdGguaW5kZXhPZihQQVRIX1NFUEFSQVRPUik7XG5cblx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0Y2FsbGJhY2socGF0aCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aGlsZSAocG9zaXRpb24gPCBwYXRoLmxlbmd0aCkge1xuXHRcdFx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gcGF0aC5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2FsbGJhY2socGF0aC5zbGljZShwb3NpdGlvbiwgaW5kZXgpKTtcblxuXHRcdFx0XHRcdHBvc2l0aW9uID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdGluZGV4ID0gcGF0aC5pbmRleE9mKFBBVEhfU0VQQVJBVE9SLCBwb3NpdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGdldChvYmplY3QsIHBhdGgpIHtcblx0XHR0aGlzLndhbGsocGF0aCwga2V5ID0+IHtcblx0XHRcdGlmIChvYmplY3QpIHtcblx0XHRcdFx0b2JqZWN0ID0gb2JqZWN0W2tleV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aDtcbiIsImltcG9ydCB7SEFORExFRF9BUlJBWV9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL2FycmF5LmpzJztcbmltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lLW9iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lQXJyYXkgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdHN0YXRpYyBpc0hhbmRsZWRNZXRob2QobmFtZSkge1xuXHRcdHJldHVybiBIQU5ETEVEX0FSUkFZX01FVEhPRFMuaGFzKG5hbWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZURhdGUgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0b2JqZWN0LnNldFRpbWUodGhpcy5jbG9uZS5nZXRUaW1lKCkpO1xuXHR9XG5cblx0aXNDaGFuZ2VkKHZhbHVlLCBlcXVhbHMpIHtcblx0XHRyZXR1cm4gIWVxdWFscyh0aGlzLmNsb25lLnZhbHVlT2YoKSwgdmFsdWUudmFsdWVPZigpKTtcblx0fVxufVxuIiwiaW1wb3J0IHtIQU5ETEVEX01BUF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL21hcC5qcyc7XG5pbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZU1hcCBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZChuYW1lKSB7XG5cdFx0cmV0dXJuIEhBTkRMRURfTUFQX01FVEhPRFMuaGFzKG5hbWUpO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiB0aGlzLmNsb25lLmVudHJpZXMoKSkge1xuXHRcdFx0b2JqZWN0LnNldChrZXksIHZhbHVlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGtleSBvZiBvYmplY3Qua2V5cygpKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2xvbmUuaGFzKGtleSkpIHtcblx0XHRcdFx0b2JqZWN0LmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHBhdGggZnJvbSAnLi4vLi4vcGF0aC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi8uLi9pcy1hcnJheS5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vLi4vaXMtb2JqZWN0LmpzJztcbmltcG9ydCB7TVVUQUJMRV9BUlJBWV9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL2FycmF5LmpzJztcbmltcG9ydCB7TVVUQUJMRV9TRVRfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9zZXQuanMnO1xuaW1wb3J0IHtNVVRBQkxFX01BUF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL21hcC5qcyc7XG5pbXBvcnQge0lNTVVUQUJMRV9PQkpFQ1RfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlLCBwYXRoLCBhcmd1bWVudHNMaXN0LCBoYXNPblZhbGlkYXRlKSB7XG5cdFx0dGhpcy5fcGF0aCA9IHBhdGg7XG5cdFx0dGhpcy5faXNDaGFuZ2VkID0gZmFsc2U7XG5cdFx0dGhpcy5fY2xvbmVkQ2FjaGUgPSBuZXcgU2V0KCk7XG5cdFx0dGhpcy5faGFzT25WYWxpZGF0ZSA9IGhhc09uVmFsaWRhdGU7XG5cdFx0dGhpcy5fY2hhbmdlcyA9IGhhc09uVmFsaWRhdGUgPyBbXSA6IG51bGw7XG5cblx0XHR0aGlzLmNsb25lID0gcGF0aCA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLl9zaGFsbG93Q2xvbmUodmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZChuYW1lKSB7XG5cdFx0cmV0dXJuIElNTVVUQUJMRV9PQkpFQ1RfTUVUSE9EUy5oYXMobmFtZSk7XG5cdH1cblxuXHRfc2hhbGxvd0Nsb25lKHZhbHVlKSB7XG5cdFx0bGV0IGNsb25lID0gdmFsdWU7XG5cblx0XHRpZiAoaXNPYmplY3QodmFsdWUpKSB7XG5cdFx0XHRjbG9uZSA9IHsuLi52YWx1ZX07XG5cdFx0fSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG5cdFx0XHRjbG9uZSA9IFsuLi52YWx1ZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdGNsb25lID0gbmV3IERhdGUodmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRcdGNsb25lID0gbmV3IFNldChbLi4udmFsdWVdLm1hcChpdGVtID0+IHRoaXMuX3NoYWxsb3dDbG9uZShpdGVtKSkpO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcblx0XHRcdGNsb25lID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IFtrZXksIGl0ZW1dIG9mIHZhbHVlLmVudHJpZXMoKSkge1xuXHRcdFx0XHRjbG9uZS5zZXQoa2V5LCB0aGlzLl9zaGFsbG93Q2xvbmUoaXRlbSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX2Nsb25lZENhY2hlLmFkZChjbG9uZSk7XG5cblx0XHRyZXR1cm4gY2xvbmU7XG5cdH1cblxuXHRwcmVmZXJyZWRUaGlzQXJnKGlzSGFuZGxlZE1ldGhvZCwgbmFtZSwgdGhpc0FyZywgdGhpc1Byb3h5VGFyZ2V0KSB7XG5cdFx0aWYgKGlzSGFuZGxlZE1ldGhvZCkge1xuXHRcdFx0aWYgKGlzQXJyYXkodGhpc1Byb3h5VGFyZ2V0KSkge1xuXHRcdFx0XHR0aGlzLl9vbklzQ2hhbmdlZCA9IE1VVEFCTEVfQVJSQVlfTUVUSE9EU1tuYW1lXTtcblx0XHRcdH0gZWxzZSBpZiAodGhpc1Byb3h5VGFyZ2V0IGluc3RhbmNlb2YgU2V0KSB7XG5cdFx0XHRcdHRoaXMuX29uSXNDaGFuZ2VkID0gTVVUQUJMRV9TRVRfTUVUSE9EU1tuYW1lXTtcblx0XHRcdH0gZWxzZSBpZiAodGhpc1Byb3h5VGFyZ2V0IGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0XHRcdHRoaXMuX29uSXNDaGFuZ2VkID0gTVVUQUJMRV9NQVBfTUVUSE9EU1tuYW1lXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNQcm94eVRhcmdldDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc0FyZztcblx0fVxuXG5cdHVwZGF0ZShmdWxsUGF0aCwgcHJvcGVydHksIHZhbHVlKSB7XG5cdFx0Y29uc3QgY2hhbmdlUGF0aCA9IHBhdGguYWZ0ZXIoZnVsbFBhdGgsIHRoaXMuX3BhdGgpO1xuXG5cdFx0aWYgKHByb3BlcnR5ICE9PSAnbGVuZ3RoJykge1xuXHRcdFx0bGV0IG9iamVjdCA9IHRoaXMuY2xvbmU7XG5cblx0XHRcdHBhdGgud2FsayhjaGFuZ2VQYXRoLCBrZXkgPT4ge1xuXHRcdFx0XHRpZiAob2JqZWN0ICYmIG9iamVjdFtrZXldKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9jbG9uZWRDYWNoZS5oYXMob2JqZWN0W2tleV0pKSB7XG5cdFx0XHRcdFx0XHRvYmplY3Rba2V5XSA9IHRoaXMuX3NoYWxsb3dDbG9uZShvYmplY3Rba2V5XSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b2JqZWN0ID0gb2JqZWN0W2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAodGhpcy5faGFzT25WYWxpZGF0ZSkge1xuXHRcdFx0XHR0aGlzLl9jaGFuZ2VzLnB1c2goe1xuXHRcdFx0XHRcdHBhdGg6IGNoYW5nZVBhdGgsXG5cdFx0XHRcdFx0cHJvcGVydHksXG5cdFx0XHRcdFx0cHJldmlvdXM6IHZhbHVlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iamVjdCAmJiBvYmplY3RbcHJvcGVydHldKSB7XG5cdFx0XHRcdG9iamVjdFtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9pc0NoYW5nZWQgPSB0cnVlO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRsZXQgY2hhbmdlO1xuXG5cdFx0Zm9yIChsZXQgaW5kZXggPSB0aGlzLl9jaGFuZ2VzLmxlbmd0aCAtIDE7IGluZGV4ICE9PSAtMTsgaW5kZXgtLSkge1xuXHRcdFx0Y2hhbmdlID0gdGhpcy5fY2hhbmdlc1tpbmRleF07XG5cblx0XHRcdHBhdGguZ2V0KG9iamVjdCwgY2hhbmdlLnBhdGgpW2NoYW5nZS5wcm9wZXJ0eV0gPSBjaGFuZ2UucHJldmlvdXM7XG5cdFx0fVxuXHR9XG5cblx0aXNDaGFuZ2VkKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX29uSXNDaGFuZ2VkID09PSB1bmRlZmluZWRcblx0XHRcdD8gdGhpcy5faXNDaGFuZ2VkXG5cdFx0XHQ6IHRoaXMuX29uSXNDaGFuZ2VkKHRoaXMuY2xvbmUsIHZhbHVlKTtcblx0fVxufVxuIiwiaW1wb3J0IHtIQU5ETEVEX1NFVF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL3NldC5qcyc7XG5pbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZVNldCBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZChuYW1lKSB7XG5cdFx0cmV0dXJuIEhBTkRMRURfU0VUX01FVEhPRFMuaGFzKG5hbWUpO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuY2xvbmUpIHtcblx0XHRcdG9iamVjdC5hZGQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgdmFsdWUgb2Ygb2JqZWN0KSB7XG5cdFx0XHRpZiAoIXRoaXMuY2xvbmUuaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRvYmplY3QuZGVsZXRlKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuIiwiaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVXZWFrTWFwIGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSkge1xuXHRcdHN1cGVyKHVuZGVmaW5lZCwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSk7XG5cblx0XHR0aGlzLl93ZWFrS2V5ID0gYXJndW1lbnRzTGlzdFswXTtcblx0XHR0aGlzLl93ZWFrSGFzID0gdmFsdWUuaGFzKHRoaXMuX3dlYWtLZXkpO1xuXHRcdHRoaXMuX3dlYWtWYWx1ZSA9IHZhbHVlLmdldCh0aGlzLl93ZWFrS2V5KTtcblx0fVxuXG5cdGlzQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLl93ZWFrVmFsdWUgIT09IHZhbHVlLmdldCh0aGlzLl93ZWFrS2V5KTtcblx0fVxuXG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0Y29uc3Qgd2Vha0hhcyA9IG9iamVjdC5oYXModGhpcy5fd2Vha0tleSk7XG5cblx0XHRpZiAodGhpcy5fd2Vha0hhcyAmJiAhd2Vha0hhcykge1xuXHRcdFx0b2JqZWN0LnNldCh0aGlzLl93ZWFrS2V5LCB0aGlzLl93ZWFrVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMuX3dlYWtIYXMgJiYgd2Vha0hhcykge1xuXHRcdFx0b2JqZWN0LmRlbGV0ZSh0aGlzLl93ZWFrS2V5KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuX3dlYWtWYWx1ZSAhPT0gb2JqZWN0LmdldCh0aGlzLl93ZWFrS2V5KSkge1xuXHRcdFx0b2JqZWN0LnNldCh0aGlzLl93ZWFrS2V5LCB0aGlzLl93ZWFrVmFsdWUpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVXZWFrU2V0IGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSkge1xuXHRcdHN1cGVyKHVuZGVmaW5lZCwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSk7XG5cblx0XHR0aGlzLl9hcmcxID0gYXJndW1lbnRzTGlzdFswXTtcblx0XHR0aGlzLl93ZWFrVmFsdWUgPSB2YWx1ZS5oYXModGhpcy5fYXJnMSk7XG5cdH1cblxuXHRpc0NoYW5nZWQodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5fd2Vha1ZhbHVlICE9PSB2YWx1ZS5oYXModGhpcy5fYXJnMSk7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGlmICh0aGlzLl93ZWFrVmFsdWUgJiYgIW9iamVjdC5oYXModGhpcy5fYXJnMSkpIHtcblx0XHRcdG9iamVjdC5hZGQodGhpcy5fYXJnMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9iamVjdC5kZWxldGUodGhpcy5fYXJnMSk7XG5cdFx0fVxuXHR9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGlmZkFycmF5cyhjbG9uZSwgdmFsdWUpIHtcblx0cmV0dXJuIGNsb25lLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoIHx8IGNsb25lLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB2YWx1ZVtpbmRleF0gIT09IGl0ZW0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEaWZmQ2VydGFpbigpIHtcblx0cmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RpZmZNYXBzKGNsb25lLCB2YWx1ZSkge1xuXHRpZiAoY2xvbmUuc2l6ZSAhPT0gdmFsdWUuc2l6ZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0bGV0IGJWYWx1ZTtcblx0Zm9yIChjb25zdCBba2V5LCBhVmFsdWVdIG9mIGNsb25lKSB7XG5cdFx0YlZhbHVlID0gdmFsdWUuZ2V0KGtleSk7XG5cblx0XHRpZiAoYlZhbHVlICE9PSBhVmFsdWUgfHwgKGJWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICF2YWx1ZS5oYXMoa2V5KSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGlmZlNldHMoY2xvbmUsIHZhbHVlKSB7XG5cdGlmIChjbG9uZS5zaXplICE9PSB2YWx1ZS5zaXplKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY2xvbmUpIHtcblx0XHRpZiAoIXZhbHVlLmhhcyhlbGVtZW50KSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGlzRGlmZkNlcnRhaW4gZnJvbSAnLi4vZGlmZi9pcy1kaWZmLWNlcnRhaW4uanMnO1xuaW1wb3J0IGlzRGlmZkFycmF5cyBmcm9tICcuLi9kaWZmL2lzLWRpZmYtYXJyYXlzLmpzJztcbmltcG9ydCB7SU1NVVRBQkxFX09CSkVDVF9NRVRIT0RTfSBmcm9tICcuL29iamVjdC5qcyc7XG5cbmNvbnN0IElNTVVUQUJMRV9BUlJBWV9NRVRIT0RTID0gbmV3IFNldChbXG5cdCdjb25jYXQnLFxuXHQnaW5jbHVkZXMnLFxuXHQnaW5kZXhPZicsXG5cdCdqb2luJyxcblx0J2tleXMnLFxuXHQnbGFzdEluZGV4T2YnLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBNVVRBQkxFX0FSUkFZX01FVEhPRFMgPSB7XG5cdHB1c2g6IGlzRGlmZkNlcnRhaW4sXG5cdHBvcDogaXNEaWZmQ2VydGFpbixcblx0c2hpZnQ6IGlzRGlmZkNlcnRhaW4sXG5cdHVuc2hpZnQ6IGlzRGlmZkNlcnRhaW4sXG5cdGNvcHlXaXRoaW46IGlzRGlmZkFycmF5cyxcblx0cmV2ZXJzZTogaXNEaWZmQXJyYXlzLFxuXHRzb3J0OiBpc0RpZmZBcnJheXMsXG5cdHNwbGljZTogaXNEaWZmQXJyYXlzLFxuXHRmbGF0OiBpc0RpZmZBcnJheXMsXG5cdGZpbGw6IGlzRGlmZkFycmF5cyxcbn07XG5cbmV4cG9ydCBjb25zdCBIQU5ETEVEX0FSUkFZX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0Li4uSU1NVVRBQkxFX09CSkVDVF9NRVRIT0RTLFxuXHQuLi5JTU1VVEFCTEVfQVJSQVlfTUVUSE9EUyxcblx0Li4uT2JqZWN0LmtleXMoTVVUQUJMRV9BUlJBWV9NRVRIT0RTKSxcbl0pO1xuIiwiaW1wb3J0IGlzRGlmZk1hcHMgZnJvbSAnLi4vZGlmZi9pcy1kaWZmLW1hcHMuanMnO1xuaW1wb3J0IHtJTU1VVEFCTEVfU0VUX01FVEhPRFMsIENPTExFQ1RJT05fSVRFUkFUT1JfTUVUSE9EU30gZnJvbSAnLi9zZXQuanMnO1xuXG5jb25zdCBJTU1VVEFCTEVfTUFQX01FVEhPRFMgPSBuZXcgU2V0KFsuLi5JTU1VVEFCTEVfU0VUX01FVEhPRFMsICdnZXQnXSk7XG5cbmV4cG9ydCBjb25zdCBNVVRBQkxFX01BUF9NRVRIT0RTID0ge1xuXHRzZXQ6IGlzRGlmZk1hcHMsXG5cdGNsZWFyOiBpc0RpZmZNYXBzLFxuXHRkZWxldGU6IGlzRGlmZk1hcHMsXG5cdGZvckVhY2g6IGlzRGlmZk1hcHMsXG59O1xuXG5leHBvcnQgY29uc3QgSEFORExFRF9NQVBfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQuLi5JTU1VVEFCTEVfTUFQX01FVEhPRFMsXG5cdC4uLk9iamVjdC5rZXlzKE1VVEFCTEVfTUFQX01FVEhPRFMpLFxuXHQuLi5DT0xMRUNUSU9OX0lURVJBVE9SX01FVEhPRFMsXG5dKTtcbiIsImV4cG9ydCBjb25zdCBJTU1VVEFCTEVfT0JKRUNUX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0J2hhc093blByb3BlcnR5Jyxcblx0J2lzUHJvdG90eXBlT2YnLFxuXHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHQndG9Mb2NhbGVTdHJpbmcnLFxuXHQndG9TdHJpbmcnLFxuXHQndmFsdWVPZicsXG5dKTtcbiIsImltcG9ydCBpc0RpZmZTZXRzIGZyb20gJy4uL2RpZmYvaXMtZGlmZi1zZXRzLmpzJztcblxuZXhwb3J0IGNvbnN0IENPTExFQ1RJT05fSVRFUkFUT1JfTUVUSE9EUyA9IFtcblx0J2tleXMnLFxuXHQndmFsdWVzJyxcblx0J2VudHJpZXMnLFxuXTtcblxuZXhwb3J0IGNvbnN0IElNTVVUQUJMRV9TRVRfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQnaGFzJyxcblx0J3RvU3RyaW5nJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgTVVUQUJMRV9TRVRfTUVUSE9EUyA9IHtcblx0YWRkOiBpc0RpZmZTZXRzLFxuXHRjbGVhcjogaXNEaWZmU2V0cyxcblx0ZGVsZXRlOiBpc0RpZmZTZXRzLFxuXHRmb3JFYWNoOiBpc0RpZmZTZXRzLFxufTtcblxuZXhwb3J0IGNvbnN0IEhBTkRMRURfU0VUX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0Li4uSU1NVVRBQkxFX1NFVF9NRVRIT0RTLFxuXHQuLi5PYmplY3Qua2V5cyhNVVRBQkxFX1NFVF9NRVRIT0RTKSxcblx0Li4uQ09MTEVDVElPTl9JVEVSQVRPUl9NRVRIT0RTLFxuXSk7XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuLi9pcy1hcnJheS5qcyc7XG5pbXBvcnQge2lzQnVpbHRpbldpdGhNdXRhYmxlTWV0aG9kc30gZnJvbSAnLi4vaXMtYnVpbHRpbi5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vaXMtb2JqZWN0LmpzJztcbmltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lL2Nsb25lLW9iamVjdC5qcyc7XG5pbXBvcnQgQ2xvbmVBcnJheSBmcm9tICcuL2Nsb25lL2Nsb25lLWFycmF5LmpzJztcbmltcG9ydCBDbG9uZURhdGUgZnJvbSAnLi9jbG9uZS9jbG9uZS1kYXRlLmpzJztcbmltcG9ydCBDbG9uZVNldCBmcm9tICcuL2Nsb25lL2Nsb25lLXNldC5qcyc7XG5pbXBvcnQgQ2xvbmVNYXAgZnJvbSAnLi9jbG9uZS9jbG9uZS1tYXAuanMnO1xuaW1wb3J0IENsb25lV2Vha1NldCBmcm9tICcuL2Nsb25lL2Nsb25lLXdlYWtzZXQuanMnO1xuaW1wb3J0IENsb25lV2Vha01hcCBmcm9tICcuL2Nsb25lL2Nsb25lLXdlYWttYXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydENsb25lIHtcblx0Y29uc3RydWN0b3IoaGFzT25WYWxpZGF0ZSkge1xuXHRcdHRoaXMuX3N0YWNrID0gW107XG5cdFx0dGhpcy5faGFzT25WYWxpZGF0ZSA9IGhhc09uVmFsaWRhdGU7XG5cdH1cblxuXHRzdGF0aWMgaXNIYW5kbGVkVHlwZSh2YWx1ZSkge1xuXHRcdHJldHVybiBpc09iamVjdCh2YWx1ZSlcblx0XHRcdHx8IGlzQXJyYXkodmFsdWUpXG5cdFx0XHR8fCBpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHModmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZCh0YXJnZXQsIG5hbWUpIHtcblx0XHRpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuXHRcdFx0cmV0dXJuIENsb25lT2JqZWN0LmlzSGFuZGxlZE1ldGhvZChuYW1lKTtcblx0XHR9XG5cblx0XHRpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG5cdFx0XHRyZXR1cm4gQ2xvbmVBcnJheS5pc0hhbmRsZWRNZXRob2QobmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIFNldCkge1xuXHRcdFx0cmV0dXJuIENsb25lU2V0LmlzSGFuZGxlZE1ldGhvZChuYW1lKTtcblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0XHRyZXR1cm4gQ2xvbmVNYXAuaXNIYW5kbGVkTWV0aG9kKG5hbWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHModGFyZ2V0KTtcblx0fVxuXG5cdGdldCBpc0Nsb25pbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRzdGFydCh2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCkge1xuXHRcdGxldCBDbG9uZUNsYXNzID0gQ2xvbmVPYmplY3Q7XG5cblx0XHRpZiAoaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZUFycmF5O1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVEYXRlO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZVNldDtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVNYXA7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdlYWtTZXQpIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZVdlYWtTZXQ7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdlYWtNYXApIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZVdlYWtNYXA7XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3RhY2sucHVzaChuZXcgQ2xvbmVDbGFzcyh2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCwgdGhpcy5faGFzT25WYWxpZGF0ZSkpO1xuXHR9XG5cblx0dXBkYXRlKGZ1bGxQYXRoLCBwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHR0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXS51cGRhdGUoZnVsbFBhdGgsIHByb3BlcnR5LCB2YWx1ZSk7XG5cdH1cblxuXHRwcmVmZXJyZWRUaGlzQXJnKHRhcmdldCwgdGhpc0FyZywgdGhpc1Byb3h5VGFyZ2V0KSB7XG5cdFx0Y29uc3Qge25hbWV9ID0gdGFyZ2V0O1xuXHRcdGNvbnN0IGlzSGFuZGxlZE1ldGhvZCA9IFNtYXJ0Q2xvbmUuaXNIYW5kbGVkTWV0aG9kKHRoaXNQcm94eVRhcmdldCwgbmFtZSk7XG5cblx0XHRyZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV1cblx0XHRcdC5wcmVmZXJyZWRUaGlzQXJnKGlzSGFuZGxlZE1ldGhvZCwgbmFtZSwgdGhpc0FyZywgdGhpc1Byb3h5VGFyZ2V0KTtcblx0fVxuXG5cdGlzQ2hhbmdlZChpc011dGFibGUsIHZhbHVlLCBlcXVhbHMpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV0uaXNDaGFuZ2VkKGlzTXV0YWJsZSwgdmFsdWUsIGVxdWFscyk7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGlmICh0aGlzLl9wcmV2aW91c0Nsb25lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX3ByZXZpb3VzQ2xvbmUudW5kbyhvYmplY3QpO1xuXHRcdH1cblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0dGhpcy5fcHJldmlvdXNDbG9uZSA9IHRoaXMuX3N0YWNrLnBvcCgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX3ByZXZpb3VzQ2xvbmUuY2xvbmU7XG5cdH1cbn1cbiIsImltcG9ydCB7VEFSR0VUfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cmFwSXRlcmF0b3IoaXRlcmF0b3IsIHRhcmdldCwgdGhpc0FyZywgYXBwbHlQYXRoLCBwcmVwYXJlVmFsdWUpIHtcblx0Y29uc3Qgb3JpZ2luYWxOZXh0ID0gaXRlcmF0b3IubmV4dDtcblxuXHRpZiAodGFyZ2V0Lm5hbWUgPT09ICdlbnRyaWVzJykge1xuXHRcdGl0ZXJhdG9yLm5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE5leHQuY2FsbCh0aGlzKTtcblxuXHRcdFx0aWYgKHJlc3VsdC5kb25lID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXN1bHQudmFsdWVbMF0gPSBwcmVwYXJlVmFsdWUoXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlWzBdLFxuXHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRyZXN1bHQudmFsdWVbMF0sXG5cdFx0XHRcdFx0YXBwbHlQYXRoLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXN1bHQudmFsdWVbMV0gPSBwcmVwYXJlVmFsdWUoXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlWzFdLFxuXHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRyZXN1bHQudmFsdWVbMF0sXG5cdFx0XHRcdFx0YXBwbHlQYXRoLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH0gZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT09ICd2YWx1ZXMnKSB7XG5cdFx0Y29uc3Qga2V5SXRlcmF0b3IgPSB0aGlzQXJnW1RBUkdFVF0ua2V5cygpO1xuXG5cdFx0aXRlcmF0b3IubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTmV4dC5jYWxsKHRoaXMpO1xuXG5cdFx0XHRpZiAocmVzdWx0LmRvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHByZXBhcmVWYWx1ZShcblx0XHRcdFx0XHRyZXN1bHQudmFsdWUsXG5cdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdGtleUl0ZXJhdG9yLm5leHQoKS52YWx1ZSxcblx0XHRcdFx0XHRhcHBseVBhdGgsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRpdGVyYXRvci5uZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxOZXh0LmNhbGwodGhpcyk7XG5cblx0XHRcdGlmIChyZXN1bHQuZG9uZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmVzdWx0LnZhbHVlID0gcHJlcGFyZVZhbHVlKFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSxcblx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlLFxuXHRcdFx0XHRcdGFwcGx5UGF0aCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGl0ZXJhdG9yO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGFwcCBmcm9tICcuL2FwcC5qcyc7XG5cbi8qIGNvbnN0IHNldEhlaWdodCA9ICgpID0+IHtcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYWdlLWhlaWdodCcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpO1xufTtcblxuc2V0SGVpZ2h0KCk7XG4gKi9cblxuYXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=