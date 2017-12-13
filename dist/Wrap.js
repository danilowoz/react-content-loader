(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'uuid'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('uuid'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.uuid);
    global.Wrap = mod.exports;
  }
})(this, function (exports, _react, _uuid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var React = _interopRequireWildcard(_react);

  var _uuid2 = _interopRequireDefault(_uuid);

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

  var Wrap = function Wrap(props) {
    var idClip = _uuid2.default.v1();
    var idGradient = _uuid2.default.v1();

    return React.createElement(
      'svg',
      {
        viewBox: '0 0 ' + props.width + ' ' + props.height,
        width: props.width,
        height: props.height,
        version: '1.1',
        style: props.style,
        preserveAspectRatio: props.preserveAspectRatio
      },
      React.createElement('rect', {
        style: { fill: 'url(#' + idGradient + ')' },
        clipPath: 'url(#' + idClip + ')',
        x: '0',
        y: '0',
        width: props.width,
        height: props.height
      }),
      React.createElement(
        'defs',
        null,
        React.createElement(
          'clipPath',
          { id: idClip },
          props.children
        ),
        React.createElement(
          'linearGradient',
          { id: idGradient },
          React.createElement(
            'stop',
            { offset: '0%', stopColor: props.primaryColor },
            React.createElement('animate', {
              attributeName: 'offset',
              values: '-2; 1',
              dur: props.speed + 's',
              repeatCount: 'indefinite'
            })
          ),
          React.createElement(
            'stop',
            { offset: '50%', stopColor: props.secondaryColor },
            React.createElement('animate', {
              attributeName: 'offset',
              values: '-1.5; 1.5',
              dur: props.speed + 's',
              repeatCount: 'indefinite'
            })
          ),
          React.createElement(
            'stop',
            { offset: '100%', stopColor: props.primaryColor },
            React.createElement('animate', {
              attributeName: 'offset',
              values: '-1; 2',
              dur: props.speed + 's',
              repeatCount: 'indefinite'
            })
          )
        )
      )
    );
  };

  exports.default = Wrap;
});