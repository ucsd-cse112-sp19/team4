var template = document.createElement('template')
template.innerHTML = `
  <style>
    :host{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px
    }
    :host(:hover) {
      border: 1px solid lightblue;
      background-color: lightblue;
      color: black;
    }
    :host::after {
      content: "Button";
    }
    :host(.primary) {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
    :host(.success){
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }
    :host(.warning){
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
    }
    :host(.danger){
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
    }
    :host(.info){
      color: #fff;
      background-color: #909399;
      border-color: #909399;
    }
    :host(.medium){
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    :host(.small){
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    :host(.mini){
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    :host(.round) {
      border-radius: 20px;
    }
    :host(.circle) {
      border-radius: 50%;
    }

  </style>
`

/* global HTMLElement */
/**
 * This is hello world component with 2 core attributes.<br>
 * - rainbow {boolean} - true if you want the text to have rainbow color, false otherwise.<br>
 * - language {string} - string value of the language (for example: en, sp, fr, or ch).
 */
class ButtonComponent extends HTMLElement {
  /**
   * ButtonComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

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

  handleType (newVal) {
    var type = ['primary', 'success', 'info', 'danger', 'warning']
    if (type.indexOf(newVal) !== -1) {
      this.classList.add(newVal)
    }
  }

  handleSize (newVal) {
    var size = ['medium', 'small', 'mini']
    if (size.indexOf(newVal) !== -1) {
      this.classList.add(newVal)
    }
  }

  handleRound () {
    this.classList.add('round')
  }
  handleCircle () {
    this.classList.add('circle')
  }

  /**
   * Callback for when the supported attributes change its value.
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
   */
  attributeChangedCallback (attrName, oldVal, newVal) {
    if (attrName === 'type') {
      this.handleType(newVal)
    }
    if (attrName === 'size') {
      this.handleSize(newVal)
    }
    if (attrName === 'round') {
      this.handleRound()
    }
    if (attrName === 'circle') {
      this.handleCircle()
    }
  }
}
window.customElements.define('button-component', ButtonComponent)
