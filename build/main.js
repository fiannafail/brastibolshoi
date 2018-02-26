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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);



const redisClient = __WEBPACK_IMPORTED_MODULE_0_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* REDIS_URL */]);
/* harmony export (immutable) */ exports["a"] = redisClient;


redisClient.on('error', function (err) {
	console.log('Error ' + err);
});

const { promisify } = __webpack_require__(46);
const getAsync = promisify(redisClient.get).bind(redisClient);
/* harmony export (immutable) */ exports["b"] = getAsync;


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("redis");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return REDIS_URL; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return JWT_KEY; });
/* unused harmony export REDIS_KEY */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return DATABASE_URL; });
let REDIS_URL, DATABASE_URL;

if (false) {
	REDIS_URL = process.env.REDIS_URL;
	DATABASE_URL = process.env.DATABASE_URL;
} else {
	REDIS_URL = 'redis://localhost:6379';
	DATABASE_URL = 'postgres://postgres:6354825107@127.0.0.1:5432/postgres';
}
const REDIS_KEY = 'DRKlPeBHbgr0FUSs';
const JWT_KEY = 'dFTvn3RxVsXE8ZJafmcQSi7fSAL4L9i8';



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator__);




__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.plugin(__WEBPACK_IMPORTED_MODULE_2_mongoose_unique_validator___default.a);

const userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	username: { type: String, unique: true, required: true },
	role: { type: String, default: 'user', required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true }
});

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	const salt = __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.genSaltSync(10);

	this.password = __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hashSync(this.password, salt);
	next();
});

userSchema.methods.authenticate = function (password) {
	return __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compareSync(password, this.passwordHash);
};
userSchema.statics.authenticate = function (username, password, done) {
	console.log({ username: username, password: password });
	this.findOne({ username: username }, (err, user) => {
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
/* 5 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("sequelize");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);



const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config__["c" /* DATABASE_URL */], {
	dialect: 'postgres'
});
sequelize.sync();
/* harmony default export */ exports["a"] = sequelize;

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-passport");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);



/* harmony default export */ exports["a"] = {
  genToken(data, expiration) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.sign(data, __WEBPACK_IMPORTED_MODULE_1__config__["b" /* JWT_KEY */], { expiresIn: expiration });
  },
  verify(token) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_1__config__["b" /* JWT_KEY */]);
  },
  verifyNoExp(token) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_1__config__["b" /* JWT_KEY */], { ignoreExpiration: true });
  }
};

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("sequelize-slugify");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

const nodeExternals = __webpack_require__(48);

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
		extend(config, ctx) {
			if (ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
			if (ctx.isServer) {
				config.externals = [nodeExternals({
					whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-audio/]
				})];
			}
		}
	}
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa2_formidable__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa2_formidable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa2_formidable__);

const koaDecodedQuerystring = __webpack_require__(35);

/* harmony default export */ exports["a"] = app => {
	app.use(__WEBPACK_IMPORTED_MODULE_0_koa2_formidable___default()());
	app.use(koaDecodedQuerystring());
};

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_passport__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(4);

const LocalStrategy = __webpack_require__(42);


const debug = __webpack_require__(0)('app:nuxt');

function configure(passport) {
	const strategyFunc = function (username, password, done) {
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
	configure
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_entry__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_audio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handlers_checkUser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jwt__ = __webpack_require__(27);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


const debug = __webpack_require__(0)('app:nuxt');
const fs = __webpack_require__(34);
const os = __webpack_require__(41);
const path = __webpack_require__(43);
const multer = __webpack_require__(36);
const upload = multer({ dest: 'uploads/' });

var cloudinary = __webpack_require__(33);

cloudinary.config({
	cloud_name: 'rastibolshoi',
	api_key: '374329698237239',
	api_secret: 'Kax6e6xy_FakEfMUc61P_3XUS_I'
});










const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.post('/user', __WEBPACK_IMPORTED_MODULE_1__controllers_user__["a" /* default */].signUp);
router.post('/login', __WEBPACK_IMPORTED_MODULE_1__controllers_user__["a" /* default */].signIn);
//	router.get('/admin', putToken(), checkUser())
router.get('/custom', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__handlers_checkUser__["a" /* default */])(), (() => {
	var _ref = _asyncToGenerator(function* (ctx, next) {
		ctx.body = 'Hello!';
		debug('page rendered');
	});

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
})());

router.post('/addaudiocat', __WEBPACK_IMPORTED_MODULE_4__controllers_audio__["a" /* default */].addCategory);
router.get('/api/audios/getcategories', __WEBPACK_IMPORTED_MODULE_4__controllers_audio__["a" /* default */].getCategories);
router.post('/api/audios/addaudio', __WEBPACK_IMPORTED_MODULE_4__controllers_audio__["a" /* default */].addAudio);
router.get('/api/audios/getaudios', __WEBPACK_IMPORTED_MODULE_4__controllers_audio__["a" /* default */].getAudios);

router.get('/api/cartoons/gettag/:name', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getTag);
router.post('/api/cartoons/settag', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].setTag);

router.get('/api/cartoons/:slug', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getCategoryCartoons);
//	router.get('/cartoon/:slug', Cartoon.getOne)


router.get('/getcategories', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getCategories);
router.get('/api/cartoons/page/:id/:category', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getMoreCartoons);
router.get('/api/cartoons', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getCartoons);
router.get('/api/gettagbyname/:category/:tag', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getTagByName);
router.get('/api/getcartoonbyslug/:cartoon', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getCartoonBySlug);
router.get('/api/getcartoonsbytag/:tag', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getCartoonsByTag);
router.get('/gettags', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getTags);
router.post('/settag', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].setTag);
router.post('/add', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].add);
router.post('/addcategory', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].addCategory);
router.get('/getmultiseries', __WEBPACK_IMPORTED_MODULE_3__controllers_cartoon__["a" /* default */].getMultiseries);
router.post('/up', (() => {
	var _ref2 = _asyncToGenerator(function* (ctx, next) {
		const file = ctx.request.files.file;
		const reader = fs.createReadStream(file.path);
		const stream = fs.createWriteStream(path.join('./uploads', file.name));
		reader.pipe(stream);
		console.log('uploading %s -> %s', file.name, stream.path);
		ctx.body = stream.path;
	});

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
})());
router.post('/upload', (() => {
	var _ref3 = _asyncToGenerator(function* (ctx, next) {
		try {
			const file = ctx.request.files.file.path;
			const image = yield cloudinary.uploader.upload(file);
			console.log(image.secure_url);
			ctx.body = image.secure_url;
		} catch (e) {
			console.log(e);
		}
	});

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
})());
// Entries routes
router.post('/addentry', __WEBPACK_IMPORTED_MODULE_2__controllers_entry__["a" /* default */].addEntry);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug_generator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug_generator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slug_generator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_redis__ = __webpack_require__(1);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* unused harmony default export */ var _unused_webpack_default_export = server => {
	const io = __WEBPACK_IMPORTED_MODULE_0_socket_io___default()(server);

	io.sockets.on('connection', socket => {
		console.log('a user connected');
		socket.on('setTag', (() => {
			var _ref = _asyncToGenerator(function* (msg) {
				console.log(msg.name, msg.description + ', ' + __WEBPACK_IMPORTED_MODULE_2_slug_generator___default()(msg.name) + ', ' + msg.name);
				const tag = yield __WEBPACK_IMPORTED_MODULE_3__handlers_redis__["a" /* redisClient */].set(__WEBPACK_IMPORTED_MODULE_2_slug_generator___default()(msg.name), msg.description + ', ' + msg.name, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);
				console.log(tag);
			});

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		})());
		socket.on('getTag', (() => {
			var _ref2 = _asyncToGenerator(function* (msg) {
				console.log('MESSAGE', msg);
				const tag = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["b" /* getAsync */])(msg);
				io.emit('tag', tag);
			});

			return function (_x2) {
				return _ref2.apply(this, arguments);
			};
		})());
		socket.on('chat message', function (msg) {
			io.emit('chat message', msg);
		});
		socket.on('disconnect', () => {
			console.log('user disconnected');
		});
	});
};

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_audio__ = __webpack_require__(29);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ exports["a"] = {
	getAudios: (() => {
		var _ref = _asyncToGenerator(function* (ctx, next) {
			try {
				const audios = yield __WEBPACK_IMPORTED_MODULE_0__models_audio__["a" /* Audio */].findAll({
					include: [__WEBPACK_IMPORTED_MODULE_0__models_audio__["b" /* Category */]]
				});
				ctx.body = audios;
			} catch (e) {
				console.log(e);
			}
		});

		return function getAudios(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	})(),
	getCategories: (() => {
		var _ref2 = _asyncToGenerator(function* (ctx, next) {
			try {
				const categories = yield __WEBPACK_IMPORTED_MODULE_0__models_audio__["b" /* Category */].findAll();
				ctx.body = categories;
			} catch (e) {
				console.log(e);
			}
		});

		return function getCategories(_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	})(),
	addAudio: (() => {
		var _ref3 = _asyncToGenerator(function* (ctx, next) {
			try {
				const audio = yield __WEBPACK_IMPORTED_MODULE_0__models_audio__["a" /* Audio */].create(ctx.request.body, {
					include: [__WEBPACK_IMPORTED_MODULE_0__models_audio__["b" /* Category */]]
				});
				ctx.body = audio;
			} catch (e) {
				console.log(e);
			}
		});

		return function addAudio(_x5, _x6) {
			return _ref3.apply(this, arguments);
		};
	})(),
	addCategory: (() => {
		var _ref4 = _asyncToGenerator(function* (ctx, next) {
			try {
				const category = yield __WEBPACK_IMPORTED_MODULE_0__models_audio__["b" /* Category */].create(ctx.request.body);
				ctx.body = category;
			} catch (e) {
				console.log(e);
			}
		});

		return function addCategory(_x7, _x8) {
			return _ref4.apply(this, arguments);
		};
	})()
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers_redis__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slug_generator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slug_generator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_slug_generator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cartoon__ = __webpack_require__(30);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var _ = __webpack_require__(39);

const Op = __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.Op;

/* harmony default export */ exports["a"] = {
	setTag: (() => {
		var _ref = _asyncToGenerator(function* (ctx, next) {
			try {
				const { body } = ctx.request;
				const tag = yield __WEBPACK_IMPORTED_MODULE_2__handlers_redis__["a" /* redisClient */].set(__WEBPACK_IMPORTED_MODULE_3_slug_generator___default()(body.name), body.description + ', ' + body.name, __WEBPACK_IMPORTED_MODULE_1_redis___default.a.print);
				console.log(tag);
				ctx.body = tag;
			} catch (e) {
				console.log(e);
			}
		});

		return function setTag(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	})(),
	getTag: (() => {
		var _ref2 = _asyncToGenerator(function* (ctx, next) {
			try {
				const tag = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__handlers_redis__["b" /* getAsync */])(ctx.params.name);
				ctx.body = tag;
			} catch (e) {
				console.log(e);
			}
		});

		return function getTag(_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	})(),
	getCartoonBySlug: (() => {
		var _ref3 = _asyncToGenerator(function* (ctx, next) {
			try {
				const cartoon = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findOne({
					where: {
						slug: ctx.params.cartoon
					},
					include: [__WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */], __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
				});
				ctx.body = cartoon;
			} catch (e) {
				console.log(e);
			}
		});

		return function getCartoonBySlug(_x5, _x6) {
			return _ref3.apply(this, arguments);
		};
	})(),
	getTagByName: (() => {
		var _ref4 = _asyncToGenerator(function* (ctx, next) {
			try {
				const tag = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__handlers_redis__["b" /* getAsync */])(ctx.params.tag);
				const cartoons = __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
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
				const requests = yield Promise.all([tag, cartoons]);
				console.log({ tag: requests[0], cartoons: requests[1] });
				ctx.body = { tag: requests[0], cartoons: requests[1] };
			} catch (e) {
				console.log(e);
			}
		});

		return function getTagByName(_x7, _x8) {
			return _ref4.apply(this, arguments);
		};
	})(),
	getCartoonsByTag: (() => {
		var _ref5 = _asyncToGenerator(function* (ctx, next) {
			ctx.set('Content-Type', 'text/plain; charset=utf-8');
			console.log('tag', ctx.params);
			try {
				const tagRequest = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__handlers_redis__["b" /* getAsync */])(ctx.params.tag);
				const tag = tagRequest.split(', ');
				const cartoons = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
					include: [{
						model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */],
						where: {
							name: tag[1]
						}
					}, __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
				});
				console.log(tag[1], cartoons);
				ctx.body = { tag: tagRequest, cartoons: cartoons };
			} catch (e) {
				console.log(e);
			}
		});

		return function getCartoonsByTag(_x9, _x10) {
			return _ref5.apply(this, arguments);
		};
	})(),
	getMultiseries: (() => {
		var _ref6 = _asyncToGenerator(function* (ctx, next) {
			try {
				const multiseries = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
					where: { isMultiseries: true }
				});
				ctx.body = multiseries;
			} catch (e) {
				console.log(e);
			}
		});

		return function getMultiseries(_x11, _x12) {
			return _ref6.apply(this, arguments);
		};
	})(),
	getCategoryCartoons: (() => {
		var _ref7 = _asyncToGenerator(function* (ctx, next) {
			const limit = 5;
			try {
				const category = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
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
				ctx.body = category;
			} catch (e) {
				console.log(e);
			}
		});

		return function getCategoryCartoons(_x13, _x14) {
			return _ref7.apply(this, arguments);
		};
	})(),
	getMoreCartoons: (() => {
		var _ref8 = _asyncToGenerator(function* (ctx, next) {
			const limit = 5;
			const offset = parseInt(ctx.params.id);
			const category = ctx.params.category !== 'undefined' ? ctx.params.category : { [Op.ne]: null };
			console.log(category);
			const cartoons = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
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
			ctx.body = cartoons;
		});

		return function getMoreCartoons(_x15, _x16) {
			return _ref8.apply(this, arguments);
		};
	})(),
	getCartoons: (() => {
		var _ref9 = _asyncToGenerator(function* (ctx, next) {
			const cartoons = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].findAll({
				order: [['createdAt', 'DESC']],
				include: [{
					model: __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */],
					through: {
						attributes: ['tag_id']
					}
				}, __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
			});
			ctx.body = cartoons;
		});

		return function getCartoons(_x17, _x18) {
			return _ref9.apply(this, arguments);
		};
	})(),
	addCategory: (() => {
		var _ref10 = _asyncToGenerator(function* (ctx, next) {
			try {
				const categories = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */].create(ctx.request.body);
				ctx.body = categories;
			} catch (e) {
				console.log(e);
			}
		});

		return function addCategory(_x19, _x20) {
			return _ref10.apply(this, arguments);
		};
	})(),
	getCategories: (() => {
		var _ref11 = _asyncToGenerator(function* (ctx, next) {
			try {
				const categories = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */].findAll({ order: ['createdAt'] });
				ctx.body = categories;
			} catch (e) {
				console.log(e);
			}
		});

		return function getCategories(_x21, _x22) {
			return _ref11.apply(this, arguments);
		};
	})(),
	getTags: (() => {
		var _ref12 = _asyncToGenerator(function* (ctx, next) {
			try {
				const tags = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */].findAll({
					attributes: ['name'],
					group: ['name'],
					raw: true
				});
				ctx.body = tags;
			} catch (e) {
				console.log(e);
			}
		});

		return function getTags(_x23, _x24) {
			return _ref12.apply(this, arguments);
		};
	})(),
	add: (() => {
		var _ref13 = _asyncToGenerator(function* (ctx, next) {
			const cartoon = yield __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["a" /* Cartoon */].create(ctx.request.body, {
				include: [__WEBPACK_IMPORTED_MODULE_4__models_cartoon__["b" /* Tag */], __WEBPACK_IMPORTED_MODULE_4__models_cartoon__["c" /* Categories */]]
			});
			ctx.body = cartoon;
		});

		return function add(_x25, _x26) {
			return _ref13.apply(this, arguments);
		};
	})()
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_entry__ = __webpack_require__(31);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


/* harmony default export */ exports["a"] = {
	addEntry: (() => {
		var _ref = _asyncToGenerator(function* (ctx, next) {
			try {
				const entry = new __WEBPACK_IMPORTED_MODULE_0__models_entry__["a" /* Entry */](ctx.request.body);
				entry.save();
				ctx.body = entry;
			} catch (e) {
				console.log(e);
			}
		});

		return function addEntry(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	})()
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_passport__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_jwt_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handlers_redis__ = __webpack_require__(1);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







/* harmony default export */ exports["a"] = {
	signUp: (() => {
		var _ref = _asyncToGenerator(function* (ctx, next) {
			console.log(ctx.request.body);
			try {
				const user = yield new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */](ctx.request.body);
				yield user.save();
				ctx.body = user;
			} catch (err) {
				ctx.status = 400;
				ctx.body = err;
				console.log(err);
			}
		});

		return function signUp(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	})(),
	signIn: (() => {
		var _ref2 = _asyncToGenerator(function* (ctx, next) {
			yield __WEBPACK_IMPORTED_MODULE_1_koa_passport___default.a.authenticate('local', (() => {
				var _ref3 = _asyncToGenerator(function* (err, user) {
					const { email, password } = ctx.request.body;
					if (user == false) {
						ctx.body = "Login failed";
					} else {
						const accessToken = yield __WEBPACK_IMPORTED_MODULE_3__services_jwt_service__["a" /* default */].genToken({ id: user._id, username: user.username }, '2m');
						const refreshToken = yield __WEBPACK_IMPORTED_MODULE_3__services_jwt_service__["a" /* default */].genToken({ username: user.username }, '30d');
						ctx.body = {
							accessToken: accessToken,
							refreshToken: refreshToken
						};
						yield __WEBPACK_IMPORTED_MODULE_4__handlers_redis__["a" /* redisClient */].set(`token_${user.username}`, accessToken, __WEBPACK_IMPORTED_MODULE_0_redis___default.a.print);
						yield __WEBPACK_IMPORTED_MODULE_4__handlers_redis__["a" /* redisClient */].set(`refreshToken${user.username}`, refreshToken, __WEBPACK_IMPORTED_MODULE_0_redis___default.a.print);
						return ctx.login(user);
					}
				});

				return function (_x5, _x6) {
					return _ref3.apply(this, arguments);
				};
			})())(ctx, next);
		});

		return function signIn(_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	})()
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handlers_redis__ = __webpack_require__(1);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const debug = __webpack_require__(0)('app:nuxt');

/* harmony default export */ exports["a"] = () => (() => {
	var _ref = _asyncToGenerator(function* (ctx, next) {
		debug('token has not recieved');
		const token = ctx.response.header.authorization;
		let decoded = null;
		if (!token) {
			ctx.throw(403, { message: 'Unauth' });
		}
		try {
			decoded = yield __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__["a" /* default */].verify(token);
		} catch (e) {
			const refreshToken = ctx.response.header['refresh-token'];
			decoded = yield __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__["a" /* default */].verifyNoExp(token);
			const confirmedRefreshToken = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handlers_redis__["b" /* getAsync */])(`refreshToken${decoded.username}`);
			if (e.name === 'TokenExpiredError' && confirmedRefreshToken === refreshToken) {
				const newAccessToken = yield __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__["a" /* default */].genToken({ id: decoded._id, username: decoded.username }, '2m');
				const newRefreshToken = yield __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__["a" /* default */].genToken({ username: decoded.username }, '30d');
				yield __WEBPACK_IMPORTED_MODULE_3__handlers_redis__["a" /* redisClient */].set(`token_${decoded.username}`, newAccessToken, __WEBPACK_IMPORTED_MODULE_0_redis___default.a.print);
				yield __WEBPACK_IMPORTED_MODULE_3__handlers_redis__["a" /* redisClient */].set(`refreshToken${decoded.username}`, newRefreshToken, __WEBPACK_IMPORTED_MODULE_0_redis___default.a.print);
			}
		}
		debug('token recieved');
		try {
			const user = yield __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].findOne({ username: decoded.username });
			debug('user found', user);
			next();
		} catch (e) {
			ctx.throw(403, { message: 'Unauth' });
		}
	});

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_jwt_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers_redis__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(4);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







const debug = __webpack_require__(0)('app:nuxt');

/* unused harmony default export */ var _unused_webpack_default_export = () => (() => {
	var _ref = _asyncToGenerator(function* (ctx, next) {
		debug('jwt start');
		const { authorization } = ctx.request.header;
		if (!authorization) {
			console.log('next');
			return yield next();
		}
		const { username } = yield __WEBPACK_IMPORTED_MODULE_0__services_jwt_service__["a" /* default */].verify(authorization);
		debug('refresh token verified');
		try {
			const token = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__handlers_redis__["b" /* getAsync */])(`token_${username}`);
			ctx.set('Authorization', token);
			ctx.set('Refresh-Token', authorization);
			debug('jwt access token recieved');
		} catch (e) {
			ctx.throw(401, { message: 'Unauthorized. Invalid Token' });
		}
		yield next();
	});

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postgres_connector__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize_slugify__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sequelize_slugify__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Audio; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Category; });




const Audio = __WEBPACK_IMPORTED_MODULE_1__postgres_connector__["a" /* default */].define('audio', {
	title: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	thumbnail: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	audio: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
	slug: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
});

const Category = __WEBPACK_IMPORTED_MODULE_1__postgres_connector__["a" /* default */].define('audiocategories', {
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize_slugify__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postgres_connector__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Cartoon; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Tag; });
/* unused harmony export CartoonTags */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Categories; });




const Cartoon = __WEBPACK_IMPORTED_MODULE_2__postgres_connector__["a" /* default */].define('cartoon', {
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

const Tag = __WEBPACK_IMPORTED_MODULE_2__postgres_connector__["a" /* default */].define('tags', {
	id: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
	}
});

const Categories = __WEBPACK_IMPORTED_MODULE_2__postgres_connector__["a" /* default */].define('categories', {
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


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const entrySchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
	title: { type: String },
	thumbnail: { type: String },
	category: { type: String },
	content: { type: String },
	slug: { type: String }
});

const Entry = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Entry', entrySchema, 'Entries');
/* harmony export (immutable) */ exports["a"] = Entry;


/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("bcrypt");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("cloudinary");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("koa-decoded-querystring");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("koa-multer");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("koa2-formidable");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("passport-local");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("slug-generator");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("socket.io");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("util");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_passport__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handlers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_socketio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postgres_connector__ = __webpack_require__(7);
let start = (() => {
	var _ref = _asyncToGenerator(function* () {
		const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
		const host = process.env.HOST || '127.0.0.1';
		const port = process.env.PORT || 3000;

		// Import and Set Nuxt.js options
		let config = __webpack_require__(12);
		config.dev = !(app.env === 'production');

		// Instantiate nuxt.js
		const nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

		// Build in development
		if (config.dev) {
			const builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
			yield builder.build();
		}
		//  Passport
		app.use(__WEBPACK_IMPORTED_MODULE_3_koa_passport___default.a.initialize());
		__webpack_require__(15).configure(__WEBPACK_IMPORTED_MODULE_3_koa_passport___default.a);

		// Initial handlers
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__handlers__["a" /* default */])(app);

		// JWT Handler
		//  app.use(jwtHandler())

		// Postgres / Sequelize
		__WEBPACK_IMPORTED_MODULE_7__postgres_connector__["a" /* default */].authenticate().then(function () {
			console.log('Connection has been established successfully.');
		}).catch(function (err) {
			console.error('Unable to connect to the database:', err);
		});

		// Router
		app.use((() => {
			var _ref2 = _asyncToGenerator(function* (ctx, next) {
				yield __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */].routes()(ctx, next);
			});

			return function (_x, _x2) {
				return _ref2.apply(this, arguments);
			};
		})());

		app.use((() => {
			var _ref3 = _asyncToGenerator(function* (ctx, next) {
				yield next();
				ctx.status = 200; // koa defaults to 404 when it sees that status is unset
				return new Promise(function (resolve, reject) {
					ctx.res.on('close', resolve);
					ctx.res.on('finish', resolve);
					nuxt.render(ctx.req, ctx.res, function (promise) {
						// nuxt.render passes a rejected promise into callback on error.
						promise.then(resolve).catch(reject);
					});
				});
			});

			return function (_x3, _x4) {
				return _ref3.apply(this, arguments);
			};
		})());

		// socket.io
		const server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(app.callback());

		// listen
		server.listen(port, host);
		debug('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
	});

	return function start() {
		return _ref.apply(this, arguments);
	};
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const debug = __webpack_require__(0)('app:nuxt');




start();

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }
/******/ ]);
//# sourceMappingURL=main.map