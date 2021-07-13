"use strict";

var _img = _interopRequireDefault(require("../img/img.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var root = document.getElementById('root');

var mytime = function mytime() {
  var infoTime = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: _img["default"]
  }), /*#__PURE__*/React.createElement("h2", null, "Time is:", new Date().toLocaleTimeString()));
  ReactDOM.render(infoTime, root);
};

setInterval(mytime, 1000);
