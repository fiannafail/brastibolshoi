require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return redisClient; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getAsync; });



var redisClient = __WEBPACK_IMPORTED_MODULE_0_redis___default.a.createClient('redis://nuxt-redis:ad26d5d14d28c2a7c31001b935ce2f45377f5d1d121cf9ef7f6a7730ea2647fe@dokku-redis-nuxt-redis:6379');

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

var _require = __webpack_require__(30),
    promisify = _require.promisify;

var getAsync = promisify(redisClient.get).bind(redisClient);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator__);




__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.plugin(__WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator___default.a);

var userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	username: { type: String, unique: true, required: true },
	role: { type: String, default: 'user', required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true }
});

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	var salt = __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.genSaltSync(10);

	this.password = __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hashSync(this.password, salt);
	next();
});

userSchema.methods.authenticate = function (password) {
	return __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compareSync(password, this.passwordHash);
};
userSchema.statics.authenticate = function (username, password, done) {
	console.log({ username: username, password: password });
	this.findOne({ username: username }, function (err, user) {
		if (err) {
			console.log('Error to check', err);
			done(err);
		} else if (user) {
			console.log('Success!', user);
			done(null, user);
		} else {
			console.log('Something else');
			done(null, false);
		}
	});
};

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('user', userSchema);

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("redis");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MONGO_URI; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return JWT_KEY; });
/* unused harmony export REDIS_KEY */
var MONGO_URI = 'mongodb://nuxt-mongo:190dce0aaf564d08c344346e8c5ed8b6@dokku-mongo-nuxt-mongo:27017/nuxt-mongo';
var JWT_KEY = 'dFTvn3RxVsXE8ZJafmcQSi7fSAL4L9i8';
var REDIS_KEY = 'DRKlPeBHbgr0FUSs';



/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-passport");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(5);



/* harmony default export */ exports["a"] = {
  genToken: function genToken(data, expiration) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.sign(data, __WEBPACK_IMPORTED_MODULE_1__config__["b" /* JWT_KEY */], { expiresIn: expiration });
  },
  verify: function verify(token) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_1__config__["b" /* JWT_KEY */]);
  },
  verifyNoExp: function verifyNoExp(token) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_1__config__["b" /* JWT_KEY */], { ignoreExpiration: true });
  }
};

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(3);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var debug = __webpack_require__(0)('app:nuxt');

/* harmony default export */ exports["a"] = function () {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var authorization, _ref2, username, token;

			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							debug('jwt start');
							authorization = ctx.request.header.authorization;

							if (authorization) {
								_context.next = 7;
								break;
							}

							console.log('next');
							_context.next = 6;
							return next();

						case 6:
							return _context.abrupt('return', _context.sent);

						case 7:
							_context.next = 9;
							return __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__["a" /* default */].verify(authorization);

						case 9:
							_ref2 = _context.sent;
							username = _ref2.username;

							debug('refresh token verified');
							_context.prev = 12;
							_context.next = 15;
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["a" /* getAsync */])('token_' + username);

						case 15:
							token = _context.sent;

							ctx.set('Authorization', token);
							ctx.set('Refresh-Token', authorization);
							debug('jwt access token recieved');
							_context.next = 24;
							break;

						case 21:
							_context.prev = 21;
							_context.t0 = _context['catch'](12);

							ctx.throw(401, { message: 'Unauthorized. Invalid Token' });

						case 24:
							_context.next = 26;
							return next();

						case 26:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[12, 21]]);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();
};

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:500|Source+Sans+Pro:300,400,600,700&amp;subset=cyrillic' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }, {
          enforce: 'pre',
          test: /\.vue$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_bodyparser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_bodyparser__);


/* harmony default export */ exports["a"] = function (app) {
  app.use(__WEBPACK_IMPORTED_MODULE_0_koa_bodyparser___default()());
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var debug = __webpack_require__(0)('app:nuxt');

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = Promise;

/* harmony default export */ exports["a"] = function (mongoUri) {
	if (!mongoUri) {
		throw Error('Mongo uri is undefinded');
	}
	return __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(mongoUri).then(function (mongodb) {
		debug('Mongo connected');

		return mongodb;
	});
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_passport__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(3);

var LocalStrategy = __webpack_require__(28);


var debug = __webpack_require__(0)('app:nuxt');

function configure(passport) {
	var strategyFunc = function strategyFunc(username, password, done) {
		__WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */].authenticate(username, password, function (err, user) {
			if (err) {
				console.log(err);
				done(err);
			} else if (user) {
				console.log('Local - Success');
				done(null, user);
			} else {
				console.log(err);
				done(null, false);
			}
		});
	};
	passport.use(new LocalStrategy(strategyFunc));

	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function (id, done) {
		__WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */].findById(id, function (err, user) {
			done(err, user);
		});
	});
}

module.exports = {
	configure: configure
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_user__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handlers_checkUser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jwt__ = __webpack_require__(9);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var debug = __webpack_require__(0)('app:nuxt');







var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

router.post('/user', __WEBPACK_IMPORTED_MODULE_2__controllers_user__["a" /* default */].signUp);
router.post('/login', __WEBPACK_IMPORTED_MODULE_2__controllers_user__["a" /* default */].signIn);
router.get('/admin', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__jwt__["a" /* default */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__handlers_checkUser__["a" /* default */])());
router.get('/custom', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__handlers_checkUser__["a" /* default */])(), function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
		return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						ctx.body = 'Hello!';
						debug('page rendered');

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

router.post('/addcartoon', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].add);
router.get('/getcartoons', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getAll);
router.get('/cartoon/:slug', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getOne);
router.get('/redis', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getRedis);
router.get('/mongo', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getMongo);
/* harmony default export */ exports["a"] = router;

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("socket.io");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cartoon__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_redis__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var debug = __webpack_require__(0)('app:nuxt');


/* harmony default export */ exports["a"] = {
	add: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return new __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* default */](ctx.request.body);

						case 3:
							cartoon = _context.sent;

							cartoon.save();
							ctx.body = cartoon;
							_context.next = 8;
							return __WEBPACK_IMPORTED_MODULE_3__handlers_redis__["b" /* redisClient */].set('cartoon', cartoon._id.toString(), __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

						case 8:
							_context.next = 13;
							break;

						case 10:
							_context.prev = 10;
							_context.t0 = _context['catch'](0);

							console.log(_context.t0);

						case 13:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 10]]);
		}));

		function add(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return add;
	}(),
	getAll: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
			var cartoons;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							debug('start getting');
							_context2.next = 3;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* default */].find({});

						case 3:
							cartoons = _context2.sent;

							if (cartoons) {
								ctx.body = cartoons;
							} else {
								ctx.body = 'Nothing was found';
							}

							debug('finish getting');

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this);
		}));

		function getAll(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return getAll;
	}(),
	getOne: function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* default */].find({ slug: ctx.params.slug });

						case 2:
							cartoon = _context3.sent;

							ctx.body = cartoon;

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this);
		}));

		function getOne(_x5, _x6) {
			return _ref3.apply(this, arguments);
		}

		return getOne;
	}(),
	getRedis: function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
			var el;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_context4.next = 3;
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["a" /* getAsync */])('cartoon');

						case 3:
							el = _context4.sent;

							ctx.body = el;
							_context4.next = 11;
							break;

						case 7:
							_context4.prev = 7;
							_context4.t0 = _context4['catch'](0);

							console.log(_context4.t0);
							ctx.body = _context4.t0;

						case 11:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this, [[0, 7]]);
		}));

		function getRedis(_x7, _x8) {
			return _ref4.apply(this, arguments);
		}

		return getRedis;
	}(),
	getMongo: function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_context5.next = 3;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* default */].find({ _id: '5a74e75c180fa800bba8fe3e' });

						case 3:
							cartoon = _context5.sent;

							ctx.body = cartoon;
							_context5.next = 11;
							break;

						case 7:
							_context5.prev = 7;
							_context5.t0 = _context5['catch'](0);

							console.log(_context5.t0);
							ctx.body = _context5.t0;

						case 11:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, _this, [[0, 7]]);
		}));

		function getMongo(_x9, _x10) {
			return _ref5.apply(this, arguments);
		}

		return getMongo;
	}()
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_passport__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_jwt_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handlers_redis__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







/* harmony default export */ exports["a"] = {
	signUp: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var user;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							console.log(ctx.request.body);
							_context.prev = 1;
							_context.next = 4;
							return new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* default */](ctx.request.body);

						case 4:
							user = _context.sent;
							_context.next = 7;
							return user.save();

						case 7:
							ctx.body = user;
							_context.next = 15;
							break;

						case 10:
							_context.prev = 10;
							_context.t0 = _context['catch'](1);

							ctx.status = 400;
							ctx.body = _context.t0;
							console.log(_context.t0);

						case 15:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[1, 10]]);
		}));

		function signUp(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return signUp;
	}(),
	signIn: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return __WEBPACK_IMPORTED_MODULE_2_koa_passport___default.a.authenticate('local', function () {
								var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(err, user) {
									var _ctx$request$body, email, password, accessToken, refreshToken;

									return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
										while (1) {
											switch (_context2.prev = _context2.next) {
												case 0:
													_ctx$request$body = ctx.request.body, email = _ctx$request$body.email, password = _ctx$request$body.password;

													if (!(user == false)) {
														_context2.next = 5;
														break;
													}

													ctx.body = "Login failed";
													_context2.next = 17;
													break;

												case 5:
													_context2.next = 7;
													return __WEBPACK_IMPORTED_MODULE_4__services_jwt_service__["a" /* default */].genToken({ id: user._id, username: user.username }, '2m');

												case 7:
													accessToken = _context2.sent;
													_context2.next = 10;
													return __WEBPACK_IMPORTED_MODULE_4__services_jwt_service__["a" /* default */].genToken({ username: user.username }, '30d');

												case 10:
													refreshToken = _context2.sent;

													ctx.body = {
														accessToken: accessToken,
														refreshToken: refreshToken
													};
													_context2.next = 14;
													return __WEBPACK_IMPORTED_MODULE_5__handlers_redis__["b" /* redisClient */].set('token_' + user.username, accessToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

												case 14:
													_context2.next = 16;
													return __WEBPACK_IMPORTED_MODULE_5__handlers_redis__["b" /* redisClient */].set('refreshToken' + user.username, refreshToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

												case 16:
													return _context2.abrupt('return', ctx.login(user));

												case 17:
												case 'end':
													return _context2.stop();
											}
										}
									}, _callee2, _this);
								}));

								return function (_x5, _x6) {
									return _ref3.apply(this, arguments);
								};
							}())(ctx, next);

						case 2:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this);
		}));

		function signIn(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return signIn;
	}()
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jwt_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handlers_redis__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var debug = __webpack_require__(0)('app:nuxt');

/* harmony default export */ exports["a"] = function () {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var token, decoded, refreshToken, confirmedRefreshToken, newAccessToken, newRefreshToken, user;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							debug('token has not recieved');
							token = ctx.response.header.authorization;
							decoded = null;

							if (!token) {
								ctx.throw(403, { message: 'Unauth' });
							}
							_context.prev = 4;
							_context.next = 7;
							return __WEBPACK_IMPORTED_MODULE_2__services_jwt_service__["a" /* default */].verify(token);

						case 7:
							decoded = _context.sent;
							_context.next = 30;
							break;

						case 10:
							_context.prev = 10;
							_context.t0 = _context['catch'](4);
							refreshToken = ctx.response.header['refresh-token'];
							_context.next = 15;
							return __WEBPACK_IMPORTED_MODULE_2__services_jwt_service__["a" /* default */].verifyNoExp(token);

						case 15:
							decoded = _context.sent;
							_context.next = 18;
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__handlers_redis__["a" /* getAsync */])('refreshToken' + decoded.username);

						case 18:
							confirmedRefreshToken = _context.sent;

							if (!(_context.t0.name === 'TokenExpiredError' && confirmedRefreshToken === refreshToken)) {
								_context.next = 30;
								break;
							}

							_context.next = 22;
							return __WEBPACK_IMPORTED_MODULE_2__services_jwt_service__["a" /* default */].genToken({ id: decoded._id, username: decoded.username }, '2m');

						case 22:
							newAccessToken = _context.sent;
							_context.next = 25;
							return __WEBPACK_IMPORTED_MODULE_2__services_jwt_service__["a" /* default */].genToken({ username: decoded.username }, '30d');

						case 25:
							newRefreshToken = _context.sent;
							_context.next = 28;
							return __WEBPACK_IMPORTED_MODULE_4__handlers_redis__["b" /* redisClient */].set('token_' + decoded.username, newAccessToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

						case 28:
							_context.next = 30;
							return __WEBPACK_IMPORTED_MODULE_4__handlers_redis__["b" /* redisClient */].set('refreshToken' + decoded.username, newRefreshToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

						case 30:
							debug('token recieved');
							_context.prev = 31;
							_context.next = 34;
							return __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* default */].findOne({ username: decoded.username });

						case 34:
							user = _context.sent;

							debug('user found', user);
							next();
							_context.next = 42;
							break;

						case 39:
							_context.prev = 39;
							_context.t1 = _context['catch'](31);

							ctx.throw(403, { message: 'Unauth' });

						case 42:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[4, 10], [31, 39]]);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var cartoonSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	title: { type: String },
	slug: { type: String },
	thumb: { type: String },
	age: { type: String },
	year: { type: Number },
	video: { type: String },
	tags: { type: Array },
	author: { type: String },
	unclear: { type: String }

});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('cartoon', cartoonSchema);

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("bcrypt");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("passport-local");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("util");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_passport__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mongoose_connection__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handlers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jwt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_socket_io__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_socket_io__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
    var _this = this;

    var app, host, port, config, nuxt, builder, server, io;
    return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(11);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context3.next = 10;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context3.next = 10;
            return builder.build();

          case 10:
            //  Passport
            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_passport___default.a.initialize());
            __webpack_require__(14).configure(__WEBPACK_IMPORTED_MODULE_3_koa_passport___default.a);

            // Initial handlers
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__handlers__["a" /* default */])(app);

            // JWT Handler
            //  app.use(jwtHandler())

            // Mongoose
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mongoose_connection__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_8__config__["a" /* MONGO_URI */]);

            // Router
            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */].routes()(ctx, next);

                      case 2:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.use(function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context2.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
              };
            }());

            server = http.createServer(app.callback());
            io = __WEBPACK_IMPORTED_MODULE_9_socket_io___default()(server);


            io.sockets.on('connection', function (socket) {
              console.log('a user connected');
              socket.on('send-message', function (msg) {
                console.log(msg);
              });
              socket.on('disconnect', function () {
                console.log('user disconnected');
              });
            });

            server.listen(port, host);
            debug('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 21:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var debug = __webpack_require__(0)('app:nuxt');






var http = __webpack_require__(16);

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map