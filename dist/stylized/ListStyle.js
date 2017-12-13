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
    global.ListStyle = mod.exports;
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

  var ListStyle = function ListStyle(props) {
    return React.createElement(
      _Wrap2.default,
      props,
      React.createElement('rect', { x: '0', y: '0', rx: '3', ry: '3', width: '250', height: '10' }),
      React.createElement('rect', { x: '20', y: '20', rx: '3', ry: '3', width: '220', height: '10' }),
      React.createElement('rect', { x: '20', y: '40', rx: '3', ry: '3', width: '170', height: '10' }),
      React.createElement('rect', { x: '0', y: '60', rx: '3', ry: '3', width: '250', height: '10' }),
      React.createElement('rect', { x: '20', y: '80', rx: '3', ry: '3', width: '200', height: '10' }),
      React.createElement('rect', { x: '20', y: '100', rx: '3', ry: '3', width: '80', height: '10' })
    );
  };

  exports.default = ListStyle;
});