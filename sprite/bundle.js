/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.context = exports.canvas = undefined;

var _sprite = __webpack_require__(1);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SONIC_URL = "../img/sonic.png";
var canvas = exports.canvas = document.querySelector('#sprite');
var context = exports.context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var objects = [];
function init() {
    var image = new Image();
    image.src = "./img/sonic.png";
    var options = {
        image: image,
        height: 200,
        width: 580 / 4,
        frames: 4
    };
    console.dir('test');
    var sonic = new _sprite2.default(options);
    sonic.draw();
    objects.push(sonic);
    window.addEventListener('keydown', sonic.handleKeyDown);
    // window.addEventListener('keyup', sonic.handleKeyUp)
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach(function (object) {
        object.update();
    });
}

init();
animate();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
    function Sprite(options) {
        _classCallCheck(this, Sprite);

        this.ctx = _app.context;
        this.sx = 0;
        this.sy = 0;
        this.height = options.height;
        this.width = options.width;
        this.frames = options.frames;
        this.frameIndex = 0;
        this.image = options.image;
        this.dx = 0;
        this.dy = window.innerHeight - options.height;
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    _createClass(Sprite, [{
        key: 'draw',
        value: function draw() {
            _app.context.drawImage(this.image, this.sx, this.sy, this.width, this.height, this.dx, this.dy, 100, 100);
        }
    }, {
        key: 'update',
        value: function update() {
            this.draw();

            //handle physics
            if (this.dy < window.innerHeight - this.height) {
                this.dy += 5;
            }

            this.frameIndex++;
            this.sx = this.width * this.frameIndex % (this.width * this.frames);
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(e) {
            if (e.key == 'ArrowRight') {
                this.dx += 20;
            } else if (e.key == 'ArrowLeft') {
                this.dx -= 20;
            } else if (e.key == ' ') {
                console.log('jump');
                this.dy -= 30;
            }
        }
    }]);

    return Sprite;
}();

exports.default = Sprite;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map