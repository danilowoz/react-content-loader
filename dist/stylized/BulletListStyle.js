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
    global.BulletListStyle = mod.exports;
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

  var BulletListStyle = function BulletListStyle(props) {
    return React.createElement(
      _Wrap2.default,
      props,
      React.createElement('circle', { cx: '10', cy: '20', r: '8' }),
      React.createElement('rect', { x: '25', y: '15', rx: '5', ry: '5', width: '220', height: '10' }),
      React.createElement('circle', { cx: '10', cy: '50', r: '8' }),
      React.createElement('rect', { x: '25', y: '45', rx: '5', ry: '5', width: '220', height: '10' }),
      React.createElement('circle', { cx: '10', cy: '80', r: '8' }),
      React.createElement('rect', { x: '25', y: '75', rx: '5', ry: '5', width: '220', height: '10' }),
      React.createElement('circle', { cx: '10', cy: '110', r: '8' }),
      React.createElement('rect', { x: '25', y: '105', rx: '5', ry: '5', width: '220', height: '10' })
    );
  };

  exports.default = BulletListStyle;
});