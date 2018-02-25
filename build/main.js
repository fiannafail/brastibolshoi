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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return redisClient; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getAsync; });



var redisClient = __WEBPACK_IMPORTED_MODULE_0_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* REDIS_URL */]);

redisClient.on('error', function (err) {
	console.log('Error ' + err);
});

var _require = __webpack_require__(48),
    promisify = _require.promisify;

var getAsync = promisify(redisClient.get).bind(redisClient);

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("redis");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MONGO_URI; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return REDIS_URL; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return JWT_KEY; });
/* unused harmony export REDIS_KEY */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return DATABASE_URL; });
var MONGO_URI = void 0,
    REDIS_URL = void 0,
    DATABASE_URL = void 0;

if (false) {
	MONGO_URI = process.env.MONGO_URL;
	REDIS_URL = process.env.REDIS_URL;
	DATABASE_URL = process.env.DATABASE_URL;
} else {
	MONGO_URI = 'mongodb://fiannafail:loOhdsdFom5nYCiR@cluster0-shard-00-00-y7wbs.mongodb.net:27017,cluster0-shard-00-01-y7wbs.mongodb.net:27017,cluster0-shard-00-02-y7wbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
	REDIS_URL = 'redis://localhost:6379';
	DATABASE_URL = 'postgres://postgres:6354825107@127.0.0.1:5432/postgres';
}
var REDIS_KEY = 'DRKlPeBHbgr0FUSs';
var JWT_KEY = 'dFTvn3RxVsXE8ZJafmcQSi7fSAL4L9i8';



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator__ = __webpack_require__(41);
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
/* 6 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("sequelize");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(4);



var sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config__["d" /* DATABASE_URL */], {
	dialect: 'postgres'
});
sequelize.sync();
/* harmony default export */ exports["a"] = sequelize;

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-passport");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(4);



/* harmony default export */ exports["a"] = {
  genToken: function genToken(data, expiration) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.sign(data, __WEBPACK_IMPORTED_MODULE_1__config__["c" /* JWT_KEY */], { expiresIn: expiration });
  },
  verify: function verify(token) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_1__config__["c" /* JWT_KEY */]);
  },
  verifyNoExp: function verifyNoExp(token) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_1__config__["c" /* JWT_KEY */], { ignoreExpiration: true });
  }
};

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("sequelize-slugify");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = {
	/*
 ** Headers of the page
 */
	head: {
		title: 'starter',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Roboto+Mono:500|PT+Sans:400,700|Source+Sans+Pro:300,400,600,700&amp;subset=cyrillic' }]
	},
	env: {
		siteTitle: 'Растибольшой.ком'
	},
	plugins: [{ src: '~/plugins/vue-notifications.js', ssr: false }, { src: '~/plugins/vue-lazyload.js', ssr: false }],
	/*
 ** Global CSS
 */
	css: ['~assets/css/main.css'],
	/*
 ** Customize the progress-bar color
 */
	loading: { color: '#fa8925' },
	/*
  ** Build configuration
  */
	build: {
		vendor: ['vue-notifications'],
		extractCSS: true,
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa2_formidable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa2_formidable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa2_formidable__);

var koaDecodedQuerystring = __webpack_require__(36);

/* harmony default export */ exports["a"] = function (app) {
	app.use(__WEBPACK_IMPORTED_MODULE_0_koa2_formidable___default()());
	app.use(koaDecodedQuerystring());
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var debug = __webpack_require__(1)('app:nuxt');

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_passport__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(5);

var LocalStrategy = __webpack_require__(43);


var debug = __webpack_require__(1)('app:nuxt');

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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_user__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_entry__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_audio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handlers_checkUser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jwt__ = __webpack_require__(28);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var debug = __webpack_require__(1)('app:nuxt');
var fs = __webpack_require__(35);
var os = __webpack_require__(42);
var path = __webpack_require__(44);
var multer = __webpack_require__(37);
var upload = multer({ dest: 'uploads/' });

var cloudinary = __webpack_require__(34);

cloudinary.config({
	cloud_name: 'rastibolshoi',
	api_key: '374329698237239',
	api_secret: 'Kax6e6xy_FakEfMUc61P_3XUS_I'
});












var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

router.post('/user', __WEBPACK_IMPORTED_MODULE_2__controllers_user__["a" /* default */].signUp);
router.post('/login', __WEBPACK_IMPORTED_MODULE_2__controllers_user__["a" /* default */].signIn);
//	router.get('/admin', putToken(), checkUser())
router.get('/custom', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__handlers_checkUser__["a" /* default */])(), function () {
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

router.post('/addaudiocat', __WEBPACK_IMPORTED_MODULE_5__controllers_audio__["a" /* default */].addCategory);
router.get('/api/audios/getcategories', __WEBPACK_IMPORTED_MODULE_5__controllers_audio__["a" /* default */].getCategories);
router.post('/api/audios/addaudio', __WEBPACK_IMPORTED_MODULE_5__controllers_audio__["a" /* default */].addAudio);
router.get('/api/audios/getaudios', __WEBPACK_IMPORTED_MODULE_5__controllers_audio__["a" /* default */].getAudios);

router.post('/addcartoon', __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__["a" /* default */].add);
router.get('/getcartoons', __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__["a" /* default */].getAll);
router.get('/api/cartoons/:slug', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getCategoryCartoons);
//	router.get('/cartoon/:slug', Cartoon.getOne)
router.get('/redis', __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__["a" /* default */].getRedis);
router.get('/mongo', __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__["a" /* default */].getMongo);
router.get('/getcats', __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__["a" /* default */].getCategories);
router.get('/getcategories', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getCategories);
router.get('/api/cartoons/page/:id/:category', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getMoreCartoons);
router.get('/api/cartoons', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getCartoons);
router.get('/api/gettagbyname/:category/:tag', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getTagByName);
router.get('/api/getcartoonbyslug/:cartoon', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getCartoonBySlug);
router.get('/api/getcartoonsbytag/:tag', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getCartoonsByTag);
router.get('/gettags', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getTags);
router.post('/settag', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].setTag);
router.post('/add', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].add);
router.post('/addcategory', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].addCategory);
router.post('/addcat', __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__["a" /* default */].addAgeCategory);
router.post('/addtag', __WEBPACK_IMPORTED_MODULE_4__controllers_cartoon__["a" /* default */].addTag);
router.get('/getmultiseries', __WEBPACK_IMPORTED_MODULE_6__controllers_cartoon__["a" /* default */].getMultiseries);
router.post('/up', function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
		var file, reader, stream;
		return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						file = ctx.request.files.file;
						reader = fs.createReadStream(file.path);
						stream = fs.createWriteStream(path.join('./uploads', file.name));

						reader.pipe(stream);
						console.log('uploading %s -> %s', file.name, stream.path);
						ctx.body = stream.path;

					case 6:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, _this);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());
router.post('/upload', function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
		var file, image;
		return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						file = ctx.request.files.file.path;
						_context3.next = 3;
						return cloudinary.uploader.upload(file);

					case 3:
						image = _context3.sent;

						console.log(image.secure_url);
						ctx.body = image.secure_url;

					case 6:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, _this);
	}));

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}());
// Entries routes
router.post('/addentry', __WEBPACK_IMPORTED_MODULE_3__controllers_entry__["a" /* default */].addEntry);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redis__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slug_generator__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slug_generator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_slug_generator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handlers_redis__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* harmony default export */ exports["a"] = function (server) {
	var io = __WEBPACK_IMPORTED_MODULE_1_socket_io___default()(server);

	io.sockets.on('connection', function (socket) {
		console.log('a user connected');
		socket.on('setTag', function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(msg) {
				var tag;
				return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log(msg.name, msg.description + ', ' + __WEBPACK_IMPORTED_MODULE_3_slug_generator___default()(msg.name) + ', ' + msg.name);
								_context.next = 3;
								return __WEBPACK_IMPORTED_MODULE_4__handlers_redis__["a" /* redisClient */].set(__WEBPACK_IMPORTED_MODULE_3_slug_generator___default()(msg.name), msg.description + ', ' + msg.name, __WEBPACK_IMPORTED_MODULE_2_redis___default.a.print);

							case 3:
								tag = _context.sent;

								console.log(tag);

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}());
		socket.on('getTag', function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(msg) {
				var tag;
				return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								console.log('MESSAGE', msg);
								_context2.next = 3;
								return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__handlers_redis__["b" /* getAsync */])(msg);

							case 3:
								tag = _context2.sent;

								io.emit('tag', tag);

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this);
			}));

			return function (_x2) {
				return _ref2.apply(this, arguments);
			};
		}());
		socket.on('chat message', function (msg) {
			io.emit('chat message', msg);
		});
		socket.on('disconnect', function () {
			console.log('user disconnected');
		});
	});
};

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redis__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cartoon__ = __webpack_require__(29);


var _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var _ = __webpack_require__(40);

var Op = __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.Op;

/* harmony default export */ exports["a"] = {
	getCartoonBySlug: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findOne({
								where: {
									slug: ctx.params.cartoon
								},
								include: [__WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */], __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
							});

						case 3:
							cartoon = _context.sent;

							ctx.body = cartoon;
							_context.next = 10;
							break;

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							console.log(_context.t0);

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 7]]);
		}));

		function getCartoonBySlug(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return getCartoonBySlug;
	}(),
	getTagByName: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
			var tag, cartoons, requests;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							tag = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["b" /* getAsync */])(ctx.params.tag);
							cartoons = __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
								include: [{
									model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */],
									where: {
										name: ctx.params.tag
									}

								}, {
									model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */],
									where: {
										slug: ctx.params.category
									}
								}]
							});
							_context2.next = 5;
							return Promise.all([tag, cartoons]);

						case 5:
							requests = _context2.sent;

							console.log({ tag: requests[0], cartoons: requests[1] });
							ctx.body = { tag: requests[0], cartoons: requests[1] };
							_context2.next = 13;
							break;

						case 10:
							_context2.prev = 10;
							_context2.t0 = _context2['catch'](0);

							console.log(_context2.t0);

						case 13:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this, [[0, 10]]);
		}));

		function getTagByName(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return getTagByName;
	}(),
	getCartoonsByTag: function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
			var tagRequest, tag, cartoons;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							ctx.set('Content-Type', 'text/plain; charset=utf-8');
							console.log('tag', ctx.params);
							_context3.prev = 2;
							_context3.next = 5;
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["b" /* getAsync */])(ctx.params.tag);

						case 5:
							tagRequest = _context3.sent;
							tag = tagRequest.split(', ');
							_context3.next = 9;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
								include: [{
									model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */],
									where: {
										name: tag[1]
									}
								}, __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
							});

						case 9:
							cartoons = _context3.sent;

							console.log(tag[1], cartoons);
							ctx.body = { tag: tagRequest, cartoons: cartoons };
							_context3.next = 17;
							break;

						case 14:
							_context3.prev = 14;
							_context3.t0 = _context3['catch'](2);

							console.log(_context3.t0);

						case 17:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this, [[2, 14]]);
		}));

		function getCartoonsByTag(_x5, _x6) {
			return _ref3.apply(this, arguments);
		}

		return getCartoonsByTag;
	}(),
	getMultiseries: function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
			var multiseries;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_context4.next = 3;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
								where: { isMultiseries: true }
							});

						case 3:
							multiseries = _context4.sent;

							ctx.body = multiseries;
							_context4.next = 10;
							break;

						case 7:
							_context4.prev = 7;
							_context4.t0 = _context4['catch'](0);

							console.log(_context4.t0);

						case 10:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this, [[0, 7]]);
		}));

		function getMultiseries(_x7, _x8) {
			return _ref4.apply(this, arguments);
		}

		return getMultiseries;
	}(),
	getCategoryCartoons: function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
			var limit, category;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							limit = 5;
							_context5.prev = 1;
							_context5.next = 4;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
								limit: limit,
								order: [['createdAt', 'DESC']],
								where: { isMultiseries: true },
								include: [{
									model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */],
									where: {
										slug: ctx.params.slug
									}
								}, __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */]]
							});

						case 4:
							category = _context5.sent;

							ctx.body = category;
							_context5.next = 11;
							break;

						case 8:
							_context5.prev = 8;
							_context5.t0 = _context5['catch'](1);

							console.log(_context5.t0);

						case 11:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, _this, [[1, 8]]);
		}));

		function getCategoryCartoons(_x9, _x10) {
			return _ref5.apply(this, arguments);
		}

		return getCategoryCartoons;
	}(),
	getMoreCartoons: function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
			var limit, offset, category, cartoons;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							limit = 5;
							offset = parseInt(ctx.params.id);
							category = ctx.params.category !== 'undefined' ? ctx.params.category : _defineProperty({}, Op.ne, null);

							console.log(category);
							_context6.next = 6;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
								offset: offset * limit,
								limit: limit,
								order: [['createdAt', 'DESC']],
								include: [{
									model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */],
									through: {
										attributes: ['tag_id']
									}
								}, {
									model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */],
									where: {
										slug: category
									}
								}]
							});

						case 6:
							cartoons = _context6.sent;

							ctx.body = cartoons;

						case 8:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, _this);
		}));

		function getMoreCartoons(_x11, _x12) {
			return _ref6.apply(this, arguments);
		}

		return getMoreCartoons;
	}(),
	getCartoons: function () {
		var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(ctx, next) {
			var cartoons;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_context7.next = 2;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
								order: [['createdAt', 'DESC']],
								include: [{
									model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */],
									through: {
										attributes: ['tag_id']
									}
								}, __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
							});

						case 2:
							cartoons = _context7.sent;

							ctx.body = cartoons;

						case 4:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, _this);
		}));

		function getCartoons(_x13, _x14) {
			return _ref8.apply(this, arguments);
		}

		return getCartoons;
	}(),
	addCategory: function () {
		var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(ctx, next) {
			var categories;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							_context8.prev = 0;
							_context8.next = 3;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */].create(ctx.request.body);

						case 3:
							categories = _context8.sent;

							ctx.body = categories;
							_context8.next = 10;
							break;

						case 7:
							_context8.prev = 7;
							_context8.t0 = _context8['catch'](0);

							console.log(_context8.t0);

						case 10:
						case 'end':
							return _context8.stop();
					}
				}
			}, _callee8, _this, [[0, 7]]);
		}));

		function addCategory(_x15, _x16) {
			return _ref9.apply(this, arguments);
		}

		return addCategory;
	}(),
	getCategories: function () {
		var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(ctx, next) {
			var categories;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_context9.prev = 0;
							_context9.next = 3;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */].findAll({ order: ['createdAt'] });

						case 3:
							categories = _context9.sent;

							ctx.body = categories;
							_context9.next = 10;
							break;

						case 7:
							_context9.prev = 7;
							_context9.t0 = _context9['catch'](0);

							console.log(_context9.t0);

						case 10:
						case 'end':
							return _context9.stop();
					}
				}
			}, _callee9, _this, [[0, 7]]);
		}));

		function getCategories(_x17, _x18) {
			return _ref10.apply(this, arguments);
		}

		return getCategories;
	}(),
	getTags: function () {
		var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10(ctx, next) {
			var tags;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.prev = 0;
							_context10.next = 3;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */].findAll({
								attributes: ['name'],
								group: ['name'],
								raw: true
							});

						case 3:
							tags = _context10.sent;

							ctx.body = tags;
							_context10.next = 10;
							break;

						case 7:
							_context10.prev = 7;
							_context10.t0 = _context10['catch'](0);

							console.log(_context10.t0);

						case 10:
						case 'end':
							return _context10.stop();
					}
				}
			}, _callee10, _this, [[0, 7]]);
		}));

		function getTags(_x19, _x20) {
			return _ref11.apply(this, arguments);
		}

		return getTags;
	}(),
	add: function () {
		var _ref12 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							_context11.next = 2;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].create(ctx.request.body, {
								include: [__WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */], __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
							});

						case 2:
							cartoon = _context11.sent;

							ctx.body = cartoon;

						case 4:
						case 'end':
							return _context11.stop();
					}
				}
			}, _callee11, _this);
		}));

		function add(_x21, _x22) {
			return _ref12.apply(this, arguments);
		}

		return add;
	}(),
	setTag: function () {
		var _ref13 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee12(ctx, next) {
			var tag;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							_context12.next = 2;
							return __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].setTags(['tag1', 'tag2']);

						case 2:
							tag = _context12.sent;

							ctx.body = tag;

						case 4:
						case 'end':
							return _context12.stop();
					}
				}
			}, _callee12, _this);
		}));

		function setTag(_x23, _x24) {
			return _ref13.apply(this, arguments);
		}

		return setTag;
	}()
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_audio__ = __webpack_require__(30);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ exports["a"] = {
	getAudios: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var audios;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return __WEBPACK_IMPORTED_MODULE_1__models_audio__["a" /* Audio */].findAll({
								include: [__WEBPACK_IMPORTED_MODULE_1__models_audio__["b" /* Category */]]
							});

						case 3:
							audios = _context.sent;

							ctx.body = audios;
							_context.next = 10;
							break;

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							console.log(_context.t0);

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 7]]);
		}));

		function getAudios(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return getAudios;
	}(),
	getCategories: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
			var categories;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return __WEBPACK_IMPORTED_MODULE_1__models_audio__["b" /* Category */].findAll();

						case 3:
							categories = _context2.sent;

							ctx.body = categories;
							_context2.next = 10;
							break;

						case 7:
							_context2.prev = 7;
							_context2.t0 = _context2['catch'](0);

							console.log(_context2.t0);

						case 10:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this, [[0, 7]]);
		}));

		function getCategories(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return getCategories;
	}(),
	addAudio: function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
			var audio;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_context3.next = 3;
							return __WEBPACK_IMPORTED_MODULE_1__models_audio__["a" /* Audio */].create(ctx.request.body, {
								include: [__WEBPACK_IMPORTED_MODULE_1__models_audio__["b" /* Category */]]
							});

						case 3:
							audio = _context3.sent;

							ctx.body = audio;
							_context3.next = 10;
							break;

						case 7:
							_context3.prev = 7;
							_context3.t0 = _context3['catch'](0);

							console.log(_context3.t0);

						case 10:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this, [[0, 7]]);
		}));

		function addAudio(_x5, _x6) {
			return _ref3.apply(this, arguments);
		}

		return addAudio;
	}(),
	addCategory: function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
			var category;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_context4.next = 3;
							return __WEBPACK_IMPORTED_MODULE_1__models_audio__["b" /* Category */].create(ctx.request.body);

						case 3:
							category = _context4.sent;

							ctx.body = category;
							_context4.next = 10;
							break;

						case 7:
							_context4.prev = 7;
							_context4.t0 = _context4['catch'](0);

							console.log(_context4.t0);

						case 10:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this, [[0, 7]]);
		}));

		function addCategory(_x7, _x8) {
			return _ref4.apply(this, arguments);
		}

		return addCategory;
	}()
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cartoon__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_redis__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var debug = __webpack_require__(1)('app:nuxt');


/* harmony default export */ exports["a"] = {
	getMultiseries: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var multiseries;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* Cartoon */].find({ isMultiseries: true });

						case 3:
							multiseries = _context.sent;

							ctx.body = multiseries.map(function (item) {
								return {
									_id: item._id,
									title: item.title
								};
							});
							_context.next = 10;
							break;

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							console.log(_context.t0);

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 7]]);
		}));

		function getMultiseries(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return getMultiseries;
	}(),
	getTags: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
			var tags;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["b" /* Tag */].find().distinct('_id');

						case 3:
							tags = _context2.sent;

							ctx.body = tags;
							_context2.next = 10;
							break;

						case 7:
							_context2.prev = 7;
							_context2.t0 = _context2['catch'](0);

							console.log(_context2.t0);

						case 10:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this, [[0, 7]]);
		}));

		function getTags(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return getTags;
	}(),
	addTag: function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
			var tags, i, tag;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							tags = [];
							_context3.prev = 1;

							for (i in ctx.request.body) {
								tags.push({ name: ctx.request.body[i] });
							}
							console.log(tags);
							_context3.next = 6;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["b" /* Tag */].create(tags);

						case 6:
							tag = _context3.sent;

							ctx.body = tag;
							_context3.next = 13;
							break;

						case 10:
							_context3.prev = 10;
							_context3.t0 = _context3['catch'](1);

							console.log(_context3.t0);

						case 13:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this, [[1, 10]]);
		}));

		function addTag(_x5, _x6) {
			return _ref3.apply(this, arguments);
		}

		return addTag;
	}(),
	addAgeCategory: function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
			var category;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							try {
								category = new __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["c" /* AgeCategory */](ctx.request.body);
								// name: 'half',
								// slug: 'half',
								// description: 'halfdesc'

								category.save();
								ctx.body = category;
							} catch (e) {
								console.log(e);
							}

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this);
		}));

		function addAgeCategory(_x7, _x8) {
			return _ref4.apply(this, arguments);
		}

		return addAgeCategory;
	}(),
	getCategories: function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
			var categories;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_context5.next = 3;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["c" /* AgeCategory */].find();

						case 3:
							categories = _context5.sent;

							ctx.body = categories;
							_context5.next = 10;
							break;

						case 7:
							_context5.prev = 7;
							_context5.t0 = _context5['catch'](0);

							console.log(_context5.t0);

						case 10:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, _this, [[0, 7]]);
		}));

		function getCategories(_x9, _x10) {
			return _ref5.apply(this, arguments);
		}

		return getCategories;
	}(),
	add: function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							_context6.prev = 0;
							_context6.next = 3;
							return new __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* Cartoon */](ctx.request.body);

						case 3:
							cartoon = _context6.sent;

							cartoon.save();
							ctx.body = cartoon;
							_context6.next = 8;
							return __WEBPACK_IMPORTED_MODULE_3__handlers_redis__["a" /* redisClient */].set('cartoon', cartoon._id.toString(), __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

						case 8:
							_context6.next = 13;
							break;

						case 10:
							_context6.prev = 10;
							_context6.t0 = _context6['catch'](0);

							console.log(_context6.t0);

						case 13:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, _this, [[0, 10]]);
		}));

		function add(_x11, _x12) {
			return _ref6.apply(this, arguments);
		}

		return add;
	}(),
	getAll: function () {
		var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(ctx, next) {
			var cartoons;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							debug('start getting');
							_context7.next = 3;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* Cartoon */].find({});

						case 3:
							cartoons = _context7.sent;

							if (cartoons) {
								ctx.body = cartoons;
							} else {
								ctx.body = 'Nothing was found';
							}
							debug('finish getting');

						case 6:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, _this);
		}));

		function getAll(_x13, _x14) {
			return _ref7.apply(this, arguments);
		}

		return getAll;
	}(),
	getOne: function () {
		var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							_context8.next = 2;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* Cartoon */].find({ slug: ctx.params.slug });

						case 2:
							cartoon = _context8.sent;

							ctx.body = cartoon;

						case 4:
						case 'end':
							return _context8.stop();
					}
				}
			}, _callee8, _this);
		}));

		function getOne(_x15, _x16) {
			return _ref8.apply(this, arguments);
		}

		return getOne;
	}(),
	getRedis: function () {
		var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(ctx, next) {
			var el;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_context9.prev = 0;
							_context9.next = 3;
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["b" /* getAsync */])('cartoon');

						case 3:
							el = _context9.sent;

							ctx.body = el;
							_context9.next = 11;
							break;

						case 7:
							_context9.prev = 7;
							_context9.t0 = _context9['catch'](0);

							console.log(_context9.t0);
							ctx.body = _context9.t0;

						case 11:
						case 'end':
							return _context9.stop();
					}
				}
			}, _callee9, _this, [[0, 7]]);
		}));

		function getRedis(_x17, _x18) {
			return _ref9.apply(this, arguments);
		}

		return getRedis;
	}(),
	getMongo: function () {
		var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10(ctx, next) {
			var cartoon;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.prev = 0;
							_context10.next = 3;
							return __WEBPACK_IMPORTED_MODULE_2__models_cartoon__["a" /* Cartoon */].find({ _id: '5a74e75c180fa800bba8fe3e' });

						case 3:
							cartoon = _context10.sent;

							ctx.body = cartoon;
							_context10.next = 11;
							break;

						case 7:
							_context10.prev = 7;
							_context10.t0 = _context10['catch'](0);

							console.log(_context10.t0);
							ctx.body = _context10.t0;

						case 11:
						case 'end':
							return _context10.stop();
					}
				}
			}, _callee10, _this, [[0, 7]]);
		}));

		function getMongo(_x19, _x20) {
			return _ref10.apply(this, arguments);
		}

		return getMongo;
	}()
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_entry__ = __webpack_require__(32);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


/* harmony default export */ exports["a"] = {
	addEntry: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
			var entry;
			return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							try {
								entry = new __WEBPACK_IMPORTED_MODULE_1__models_entry__["a" /* Entry */](ctx.request.body);

								entry.save();
								ctx.body = entry;
							} catch (e) {
								console.log(e);
							}

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		function addEntry(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return addEntry;
	}()
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_passport__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_jwt_service__ = __webpack_require__(10);
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
													return __WEBPACK_IMPORTED_MODULE_5__handlers_redis__["a" /* redisClient */].set('token_' + user.username, accessToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

												case 14:
													_context2.next = 16;
													return __WEBPACK_IMPORTED_MODULE_5__handlers_redis__["a" /* redisClient */].set('refreshToken' + user.username, refreshToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jwt_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handlers_redis__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var debug = __webpack_require__(1)('app:nuxt');

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
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__handlers_redis__["b" /* getAsync */])('refreshToken' + decoded.username);

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
							return __WEBPACK_IMPORTED_MODULE_4__handlers_redis__["a" /* redisClient */].set('token_' + decoded.username, newAccessToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

						case 28:
							_context.next = 30;
							return __WEBPACK_IMPORTED_MODULE_4__handlers_redis__["a" /* redisClient */].set('refreshToken' + decoded.username, newRefreshToken, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);

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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(5);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var debug = __webpack_require__(1)('app:nuxt');

/* unused harmony default export */ var _unused_webpack_default_export = function () {
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
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["b" /* getAsync */])('token_' + username);

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize_slugify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postgres_connector__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Cartoon; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Tag; });
/* unused harmony export CartoonTags */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Categories; });




var Cartoon = __WEBPACK_IMPORTED_MODULE_2__postgres_connector__["a" /* default */].define('cartoon', {
	cartoonId: {
		allowNull: false,
		primaryKey: true,
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
	},
	slug: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
		unique: true
	},
	title: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	description: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.TEXT,
	unclear: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.TEXT,
	video: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	year: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
	thumbnail: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	author: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	isMultiseries: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
	parentTitleId: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
});

var Tag = __WEBPACK_IMPORTED_MODULE_2__postgres_connector__["a" /* default */].define('tags', {
	id: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
	},
	slug: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
	},
	description: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.TEXT
});

var Categories = __WEBPACK_IMPORTED_MODULE_2__postgres_connector__["a" /* default */].define('categories', {
	categoriesId: {
		primaryKey: true,
		autoIncrement: true,
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER
	},
	name: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
	},
	slug: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
		unique: true
	},
	description: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.TEXT
});

var CartoonTags = __WEBPACK_IMPORTED_MODULE_2__postgres_connector__["a" /* default */].define('cartoontags', {
	id: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	tag_id: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
		unique: 'item_tag_taggable'
	},
	taggable: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
		unique: 'item_tag_taggable'
	},
	taggable_id: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
		unique: 'item_tag_taggable',
		references: null
	}
});

Cartoon.belongsTo(Categories, { foreignKey: 'categoriesId' });
Categories.hasMany(Cartoon, { foreignKey: 'categoriesId' });

Cartoon.belongsToMany(Tag, {
	through: {
		model: CartoonTags,
		unique: false,
		scope: {
			taggable: 'cartoon'
		}
	},
	foreignKey: 'taggable_id',
	constraints: false
});
Tag.belongsToMany(Cartoon, {
	through: {
		model: CartoonTags,
		unique: false
	},
	foreignKey: 'tag_id',
	constraints: false
});
__WEBPACK_IMPORTED_MODULE_1_sequelize_slugify___default.a.slugifyModel(Categories, {
	source: ['name']
});
__WEBPACK_IMPORTED_MODULE_1_sequelize_slugify___default.a.slugifyModel(Cartoon, {
	source: ['title']
});
__WEBPACK_IMPORTED_MODULE_1_sequelize_slugify___default.a.slugifyModel(Tag, {
	source: ['name']
});


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postgres_connector__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize_slugify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sequelize_slugify__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Audio; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Category; });




var Audio = __WEBPACK_IMPORTED_MODULE_1__postgres_connector__["a" /* default */].define('audio', {
	title: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	thumbnail: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	audio: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	slug: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
});

var Category = __WEBPACK_IMPORTED_MODULE_1__postgres_connector__["a" /* default */].define('audiocategories', {
	name: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
	},
	slug: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
		unique: true
	},
	description: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.TEXT
});

Audio.belongsTo(Category, { foreignKey: 'audiocategoriesId' });
Category.hasMany(Audio, { foreignKey: 'audiocategoriesId' });

__WEBPACK_IMPORTED_MODULE_2_sequelize_slugify___default.a.slugifyModel(Category, {
	source: ['name']
});
__WEBPACK_IMPORTED_MODULE_2_sequelize_slugify___default.a.slugifyModel(Audio, {
	source: ['title']
});



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Cartoon; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return AgeCategory; });


var ageCategorySchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	name: String,
	slug: String,
	description: String
});
var tagSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	name: { type: String }
});

var cartoonSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	title: { type: String },
	slug: { type: String },
	isMultiseries: { type: Boolean },
	thumbnail: { type: String },
	year: { type: Number },
	video: { type: String },
	multiseriesTitle: { type: __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"].Types.ObjectId },
	tags: { type: [__WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"].Types.ObjectId], ref: 'Tag' },
	author: { type: String },
	unclear: { type: String },
	description: { type: String },
	category: { type: __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"].Types.ObjectId, ref: 'AgeCategory' }
});

var Tag = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Tag', tagSchema, 'Tags');
var Cartoon = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Cartoon', cartoonSchema, 'Cartoons');
var AgeCategory = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('AgeCategory', ageCategorySchema, 'Categories');

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Entry; });


var entrySchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	title: { type: String },
	thumbnail: { type: String },
	category: { type: String },
	content: { type: String },
	slug: { type: String }
});

var Entry = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Entry', entrySchema, 'Entries');

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("bcrypt");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("cloudinary");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("koa-decoded-querystring");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("koa-multer");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("koa2-formidable");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("passport-local");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("slug-generator");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("socket.io");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("util");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_passport__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mongoose_connection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handlers__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_socketio__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__postgres_connector__ = __webpack_require__(8);


var start = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
		var _this = this;

		var app, host, port, config, nuxt, builder, server;
		return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
						host = process.env.HOST || '127.0.0.1';
						port = process.env.PORT || 3000;

						// Import and Set Nuxt.js options

						config = __webpack_require__(13);

						config.dev = !(app.env === 'production');

						// Instantiate nuxt.js
						nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](config);

						// Build in development

						if (!config.dev) {
							_context3.next = 10;
							break;
						}

						builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
						_context3.next = 10;
						return builder.build();

					case 10:
						//  Passport
						app.use(__WEBPACK_IMPORTED_MODULE_4_koa_passport___default.a.initialize());
						__webpack_require__(16).configure(__WEBPACK_IMPORTED_MODULE_4_koa_passport___default.a);

						// Initial handlers
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__handlers__["a" /* default */])(app);

						// JWT Handler
						//  app.use(jwtHandler())

						// Mongoose
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__mongoose_connection__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_8__config__["a" /* MONGO_URI */]);

						// Postgres / Sequelize
						__WEBPACK_IMPORTED_MODULE_10__postgres_connector__["a" /* default */].authenticate().then(function () {
							console.log('Connection has been established successfully.');
						}).catch(function (err) {
							console.error('Unable to connect to the database:', err);
						});

						// Router
						app.use(function () {
							var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
								return __WEBPACK_IMPORTED_MODULE_0__home_aliaksandr_documents_rastibolshoy_rastibolshoy_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
									while (1) {
										switch (_context.prev = _context.next) {
											case 0:
												_context.next = 2;
												return __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* default */].routes()(ctx, next);

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

						// socket.io
						server = __WEBPACK_IMPORTED_MODULE_2_http___default.a.createServer(app.callback());

						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__services_socketio__["a" /* default */])(server);

						// listen
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






var debug = __webpack_require__(1)('app:nuxt');






start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map