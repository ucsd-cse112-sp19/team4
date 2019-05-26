'use strict'

require('core-js/modules/es7.symbol.async-iterator')

require('core-js/modules/es6.symbol')

require('core-js/modules/web.dom.iterable')

require('core-js/modules/es6.array.iterator')

require('core-js/modules/es6.string.iterator')

require('core-js/modules/es6.map')

require('core-js/modules/es6.reflect.construct')

require('core-js/modules/es6.regexp.to-string')

require('core-js/modules/es6.object.to-string')

function _typeof (obj) { if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

function _wrapNativeSuper (Class) { var _cache = typeof Map === 'function' ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper (Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== 'function') { throw new TypeError('Super expression must either be null or a function') } if (typeof _cache !== 'undefined') { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper) } function Wrapper () { return _construct(Class, arguments, _getPrototypeOf(this).constructor) } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class) }; return _wrapNativeSuper(Class) }

function isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true } catch (e) { return false } }

function _construct (Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct } else { _construct = function _construct (Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance } } return _construct.apply(null, arguments) }

function _isNativeFunction (fn) { return Function.toString.call(fn).indexOf('[native code]') !== -1 }

function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

var template = document.createElement('template')
template.innerHTML = "\n  <style>\n    :host{\n      display: inline-block;\n      line-height: 1;\n      white-space: nowrap;\n      cursor: pointer;\n      background: #fff;\n      border: 1px solid #dcdfe6;\n      color: #606266;\n      text-align: center;\n      box-sizing: border-box;\n      outline: none;\n      margin: 0;\n      transition: .1s;\n      font-weight: 500;\n      padding: 12px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n      box-shadow: 0 1px 2px darkgray;\n    }\n    :host([type='primary']) {\n      color: #fff;\n      background-color: #409eff;\n      border-color: #409eff;\n    }\n    :host([type='success']){\n      color: #fff;\n      background-color: #67c23a;\n      border-color: #67c23a;\n    }\n    :host([type='warning']){\n      color: #fff;\n      background-color: #e6a23c;\n      border-color: #e6a23c;\n    }\n    :host([type='danger']){\n      color: #fff;\n      background-color: #f56c6c;\n      border-color: #f56c6c;\n    }\n    :host([type='info']){\n      color: #fff;\n      background-color: #909399;\n      border-color: #909399;\n    }\n    :host([size='medium']){\n      padding: 10px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n    }\n    :host([size='small']){\n      padding: 9px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n    }\n    :host([size='mini']){\n      padding: 7px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n    }\n    :host([round]) {\n      border-radius: 20px;\n    }\n    :host([circle]) {\n      border-radius: 50%;\n    }\n    :host([icon]){\n      padding: 12px;\n      color: #fff;\n    }\n    :host([icon='icon-delete']){\n      content: url('../images/garbage.png');\n    }\n    :host([icon='icon-star-off']){\n      content: url('../images/star.png');\n    }\n    :host([icon='icon-message']){\n      content: url('../images/mail.png');\n    }\n    :host([icon='icon-check']){\n      content: url('../images/tick.png');\n    }\n    :host([icon='icon-edit']){\n      content: url('../images/edit.png');\n    }\n    :host([icon='icon-search']){\n      content: url('../images/search.png');\n      padding: 12px;\n      color: #fff;\n    }\n    :host(:hover) {\n      background-color: rgb(64, 158, 255, 0.15);\n      color: #409eff;\n      border: 1px solid #409eff;\n    }\n    :host([type='warning']:hover) {\n      color: #fff;\n      background-color: rgb(230, 162, 60, 0.85);\n      border-color: rgb(230, 162, 60, 0.85);\n    }\n    :host([type='danger']:hover) {\n      color: #fff;\n      background-color: rgb(245, 108, 108, 0.85);\n      border-color: rgb(245, 108, 108, 0.85);\n    }\n    :host([type='info']:hover) {\n      color: #fff;\n      background-color: rgb(144, 147, 153, 0.85);\n      border-color: rgb(144, 147, 153, 0.85);\n    }\n    :host([type='success']:hover) {\n      color: #fff;\n      background-color: rgb(103, 194, 58, 0.85);\n      border-color: rgb(103, 194, 58, 0.85);\n    }\n    :host([type='primary']:hover) {\n      color: #fff;\n      background-color: rgb(64, 158, 255, 0.85);\n      border-color: rgb(64, 158, 255, 0.85);\n    }\n    :host(:active) {\n      background-color: rgb(64, 158, 255, 0.15);\n      color: #0077f3;\n      border: 1px solid #0077f3;\n    }\n    :host([type='warning']:active) {\n      color: #fff;\n      background-color: #bd7b18;\n      border-color: #bd7b18;\n    }\n    :host([type='danger']:active) {\n      color: #fff;\n      background-color: #f02424;\n      border-color: #f02424;\n    }\n    :host([type='info']:active) {\n      color: #fff;\n      background-color: #6a6d73;\n      border-color: #6a6d73;\n    }\n    :host([type='success']:active) {\n      color: #fff;\n      background-color: #488728;\n      border-color: #488728;\n    }\n    :host([type='primary']:active) {\n      color: #fff;\n      background-color: #0077f3;\n      border-color: #0077f3;\n    }\n  </style>\n  <div id=\"btn-component\">Button</div>\n"
/* global HTMLElement */

/**
 */

var ButtonComponent =
/* #__PURE__ */
(function (_HTMLElement) {
  _inherits(ButtonComponent, _HTMLElement)

  /**
   * ButtonComponent constructor.
   * @constructor
   */
  function ButtonComponent () {
    var _this

    _classCallCheck(this, ButtonComponent)

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonComponent).call(this))

    _this.attachShadow({
      mode: 'open'
    }).appendChild(template.content.cloneNode(true))

    if (_this.textContent !== '') {
      _this.shadowRoot.querySelector('div').textContent = _this.textContent
    } // this.addEventListener('click', this.clickEffect)

    return _this
  }

  _createClass(ButtonComponent, [{
    key: 'clickEffect',
    value: function clickEffect (event) {} // this.classList.add('hello')

    /**
     * Method returns a list of attributes supported by this component.<br>
     */

  }, {
    key: 'connectedCallback',

    /**
     * Callback when the component get created.
     */
    value: function connectedCallback () {
      console.log('Component connected!')
    }
    /**
     * Callback when the component get disconnected.
     */

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback () {
      console.log('Component disconnect!')
    }
    /**
     * Callback for when the supported attributes change its value.
     * @param {string} attrName - the name of the attribute.
     * @param {*} oldVal - the old value of the attribute.
     * @param {*} newVal - the new value of the attribute.
     */

  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback (attrName, oldVal, newVal) {}
  }], [{
    key: 'observedAttributes',
    get: function get () {
      return ['size', 'type', 'plain', 'round', 'circle']
    }
  }])

  return ButtonComponent
}(_wrapNativeSuper(HTMLElement)))

window.customElements.define('button-component', ButtonComponent)
