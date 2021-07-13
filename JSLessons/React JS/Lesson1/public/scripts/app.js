"use strict";

var root = document.getElementById('root');
var itemInfo = {
  name: "Azerbaijan"
};
var temp = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    'color': 'red'
  }
}, itemInfo.name), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null)));
ReactDOM.render(temp, root);
