(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Rect = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var React = _interopRequireWildcard(_react);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var Rect = function Rect(props) {
    var _props$x = props.x,
        x = _props$x === undefined ? 0 : _props$x,
        _props$y = props.y,
        y = _props$y === undefined ? 0 : _props$y,
        _props$radius = props.radius,
        radius = _props$radius === undefined ? 0 : _props$radius,
        _props$width = props.width,
        width = _props$width === undefined ? 50 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 50 : _props$height;

    return React.createElement('rect', { x: x, y: y, rx: radius, ry: radius, width: width, height: height });
  };
  exports.default = Rect;
});