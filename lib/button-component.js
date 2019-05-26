'use strict'

var template = document.createElement('template')
template.innerHTML = "\n  <style>\n    :host{\n      display: inline-block;\n      line-height: 1;\n      white-space: nowrap;\n      cursor: pointer;\n      background: #fff;\n      border: 1px solid #dcdfe6;\n      color: #606266;\n      text-align: center;\n      box-sizing: border-box;\n      outline: none;\n      margin: 0;\n      transition: .1s;\n      font-weight: 500;\n      padding: 12px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n      box-shadow: 0 1px 2px darkgray;\n    }\n    :host([type='primary']) {\n      color: #fff;\n      background-color: #409eff;\n      border-color: #409eff;\n    }\n    :host([type='success']){\n      color: #fff;\n      background-color: #67c23a;\n      border-color: #67c23a;\n    }\n    :host([type='warning']){\n      color: #fff;\n      background-color: #e6a23c;\n      border-color: #e6a23c;\n    }\n    :host([type='danger']){\n      color: #fff;\n      background-color: #f56c6c;\n      border-color: #f56c6c;\n    }\n    :host([type='info']){\n      color: #fff;\n      background-color: #909399;\n      border-color: #909399;\n    }\n    :host([size='medium']){\n      padding: 10px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n    }\n    :host([size='small']){\n      padding: 9px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n    }\n    :host([size='mini']){\n      padding: 7px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n    }\n    :host([round]) {\n      border-radius: 20px;\n    }\n    :host([circle]) {\n      border-radius: 50%;\n    }\n    :host([icon]){\n      padding: 12px;\n      color: #fff;\n    }\n    :host([icon='icon-delete']){\n      content: url('../images/garbage.png');\n    }\n    :host([icon='icon-star-off']){\n      content: url('../images/star.png');\n    }\n    :host([icon='icon-message']){\n      content: url('../images/mail.png');\n    }\n    :host([icon='icon-check']){\n      content: url('../images/tick.png');\n    }\n    :host([icon='icon-edit']){\n      content: url('../images/edit.png');\n    }\n    :host([icon='icon-search']){\n      content: url('../images/search.png');\n      padding: 12px;\n      color: #fff;\n    }\n    :host(:hover) {\n      background-color: rgb(64, 158, 255, 0.15);\n      color: #409eff;\n      border: 1px solid #409eff;\n    }\n    :host([type='warning']:hover) {\n      color: #fff;\n      background-color: rgb(230, 162, 60, 0.85);\n      border-color: rgb(230, 162, 60, 0.85);\n    }\n    :host([type='danger']:hover) {\n      color: #fff;\n      background-color: rgb(245, 108, 108, 0.85);\n      border-color: rgb(245, 108, 108, 0.85);\n    }\n    :host([type='info']:hover) {\n      color: #fff;\n      background-color: rgb(144, 147, 153, 0.85);\n      border-color: rgb(144, 147, 153, 0.85);\n    }\n    :host([type='success']:hover) {\n      color: #fff;\n      background-color: rgb(103, 194, 58, 0.85);\n      border-color: rgb(103, 194, 58, 0.85);\n    }\n    :host([type='primary']:hover) {\n      color: #fff;\n      background-color: rgb(64, 158, 255, 0.85);\n      border-color: rgb(64, 158, 255, 0.85);\n    }\n    :host(:active) {\n      background-color: rgb(64, 158, 255, 0.15);\n      color: #0077f3;\n      border: 1px solid #0077f3;\n    }\n    :host([type='warning']:active) {\n      color: #fff;\n      background-color: #bd7b18;\n      border-color: #bd7b18;\n    }\n    :host([type='danger']:active) {\n      color: #fff;\n      background-color: #f02424;\n      border-color: #f02424;\n    }\n    :host([type='info']:active) {\n      color: #fff;\n      background-color: #6a6d73;\n      border-color: #6a6d73;\n    }\n    :host([type='success']:active) {\n      color: #fff;\n      background-color: #488728;\n      border-color: #488728;\n    }\n    :host([type='primary']:active) {\n      color: #fff;\n      background-color: #0077f3;\n      border-color: #0077f3;\n    }\n  </style>\n  <div id=\"btn-component\">Button</div>\n"
/* global HTMLElement */

/**
 */

class ButtonComponent extends HTMLElement {
  /**
   * ButtonComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    this.attachShadow({
      mode: 'open'
    }).appendChild(template.content.cloneNode(true))

    if (this.textContent !== '') {
      this.shadowRoot.querySelector('div').textContent = this.textContent
    } // this.addEventListener('click', this.clickEffect)
  }

  clickEffect (event) { } // this.classList.add('hello')

  /**
   * Method returns a list of attributes supported by this component.<br>
   */

  static get observedAttributes () {
    return ['size', 'type', 'plain', 'round', 'circle']
  }
  /**
   * Callback when the component get created.
   */

  connectedCallback () {
    console.log('Component connected!')
  }
  /**
   * Callback when the component get disconnected.
   */

  disconnectedCallback () {
    console.log('Component disconnect!')
  }
  /**
   * Callback for when the supported attributes change its value.
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
   */

  attributeChangedCallback (attrName, oldVal, newVal) { }
}

window.customElements.define('button-component', ButtonComponent)
