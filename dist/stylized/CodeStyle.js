(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../Wrap'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../Wrap'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Wrap);
    global.CodeStyle = mod.exports;
  }
})(this, function (exports, _react, _Wrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var React = _interopRequireWildcard(_react);

  var _Wrap2 = _interopRequireDefault(_Wrap);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var CodeStyle = function CodeStyle(props) {
    return React.createElement(
      _Wrap2.default,
      props,
      React.createElement('rect', { x: '0', y: '0', rx: '3', ry: '3', width: '70', height: '10' }),
      React.createElement('rect', { x: '80', y: '0', rx: '3', ry: '3', width: '100', height: '10' }),
      React.createElement('rect', { x: '190', y: '0', rx: '3', ry: '3', width: '10', height: '10' }),
      React.createElement('rect', { x: '15', y: '20', rx: '3', ry: '3', width: '130', height: '10' }),
      React.createElement('rect', { x: '155', y: '20', rx: '3', ry: '3', width: '130', height: '10' }),
      React.createElement('rect', { x: '15', y: '40', rx: '3', ry: '3', width: '90', height: '10' }),
      React.createElement('rect', { x: '115', y: '40', rx: '3', ry: '3', width: '60', height: '10' }),
      React.createElement('rect', { x: '185', y: '40', rx: '3', ry: '3', width: '60', height: '10' }),
      React.createElement('rect', { x: '0', y: '60', rx: '3', ry: '3', width: '30', height: '10' })
    );
  };

  exports.default = CodeStyle;
});