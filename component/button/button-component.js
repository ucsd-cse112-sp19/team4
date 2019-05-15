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
    :host::after {
      content: "Button";
    }
    
    :host([type='primary']) {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
    :host([type='success']){
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }
    :host([type='warning']){
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
    }
    :host([type='danger']){
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
    }
    :host([type='info']){
      color: #fff;
      background-color: #909399;
      border-color: #909399;
    }
    :host([size='medium']){
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    :host([size='small']){
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    :host([size='mini']){
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    :host([round]) {
      border-radius: 20px;
    }
    :host([circle]) {
      border-radius: 50%;
    }
    :host(:hover) {
      background-color: rgb(64, 158, 255, 0.15);
      color: #409eff;
      border: 1px solid #409eff;
    }
    :host([type='warning']:hover) {
      color: #fff;
      background-color: rgb(230, 162, 60, 0.85);
      border-color: rgb(230, 162, 60, 0.85);
    }
    :host([type='danger']:hover) {
      color: #fff;
      background-color: rgb(245, 108, 108, 0.85);
      border-color: rgb(245, 108, 108, 0.85);
    }
    :host([type='info']:hover) {
      color: #fff;
      background-color: rgb(144, 147, 153, 0.85);
      border-color: rgb(144, 147, 153, 0.85);
    }
    :host([type='success']:hover) {
      color: #fff;
      background-color: rgb(103, 194, 58, 0.85);
      border-color: rgb(103, 194, 58, 0.85);
    }
    :host([type='primary']:hover) {
      color: #fff;
      background-color: rgb(64, 158, 255, 0.85);
      border-color: rgb(64, 158, 255, 0.85);
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
    this.addEventListener('click', this.clickEffect)
  }

  clickEffect (event) {
    this.classList.add('hello')
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

  /*
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
  */
  /**
   * Callback for when the supported attributes change its value.
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
   */
  attributeChangedCallback (attrName, oldVal, newVal) {
    /*
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
    */
  }
}
window.customElements.define('button-component', ButtonComponent)
