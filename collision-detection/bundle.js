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


var _util = __webpack_require__(5);

var Util = _interopRequireWildcard(_util);

var _circle = __webpack_require__(2);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//set height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse
var mouse = {
    x: undefined,
    y: undefined
};

var COLORS = ["#BAC1B8", "#58A4B0", "#0C7C59", "#2B303A", "#D64933"];

// base event listeners
window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', function (e) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

// implementations
var createCircle = function createCircle() {
    var pos = Util.randomPosition();
    var r = Util.randomIntFromRange(2, 10);
    var dx = Util.randomIntFromRange(-5, 5);
    var dy = Util.randomIntFromRange(-5, 5);
    var color = Util.randomColor(COLORS);
    return new _circle2.default(pos.x, pos.y, dx, dy, r, color, ctx);
};

var objects = [];
var init = function init() {
    objects = [];

    for (var i = 0; i < 100; i++) {
        objects.push(createCircle());
    }
};

var animate = function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach(function (object) {
        object.draw();
    });
};

init();
animate();

window.GetDistance = Util.getDistance;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parent_object = __webpack_require__(4);

var _parent_object2 = _interopRequireDefault(_parent_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_ParentObject) {
    _inherits(Circle, _ParentObject);

    function Circle(x, y, dx, dy, r, color, ctx) {
        _classCallCheck(this, Circle);

        var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, x, y, color, ctx));

        _this.dx = dx;
        _this.dy = dy;
        _this.r = r;
        return _this;
    }

    _createClass(Circle, [{
        key: "draw",
        value: function draw() {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            this.ctx.fillStyle = this.color;
            this.ctx.strokeStyle = "#000";
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.closePath();

            this.update();
        }
    }, {
        key: "update",
        value: function update() {

            // move circle
            this.x += this.dx;
            this.y += this.dy;

            if (this.x - this.r < 0 || this.x + this.r > innerWidth) this.dx = -this.dx;
            if (this.y - this.r < 0 || this.y + this.r > innerHeight) this.dy = -this.dy;
        }
    }]);

    return Circle;
}(_parent_object2.default);

exports.default = Circle;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParentObject = function () {
    function ParentObject(x, y, color, ctx) {
        _classCallCheck(this, ParentObject);

        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
    }

    _createClass(ParentObject, [{
        key: "draw",
        value: function draw() {
            // do stuff
        }
    }, {
        key: "update",
        value: function update() {
            this.draw();

            // do more stuff
        }
    }]);

    return ParentObject;
}();

exports.default = ParentObject;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// random position
var randomPosition = exports.randomPosition = function randomPosition() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    return { x: x, y: y };
};

// random color
var randomColor = exports.randomColor = function randomColor(COLOR_ARRAY) {
    var idx = Math.floor(Math.random() * COLOR_ARRAY.length);
    return COLOR_ARRAY[idx];
};

// random number by range
var randomIntFromRange = exports.randomIntFromRange = function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// get distance between two points
var getDistance = exports.getDistance = function getDistance(x1, x2, y1, y2) {
    var deltaX = x1 - x2;
    var deltaY = y1 - y2;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map