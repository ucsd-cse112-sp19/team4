var template = document.createElement('template')
template.innerHTML = `
  <style>
    /*  Default CSS style for radio */
    :host {
      color: #606266;
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: pointer;
      display: inline-block;
      white-space: nowrap;
      outline: none;
      font-size: 14px;
      margin-right: 30px;
    }
  </style>
  <input type="radio" name="option" value="1"> Option 1
`

/* global HTMLElement */
/**
 * This is a custom radio component
 * Ported from https://element.eleme.io/#/en-US/component/radio
 */
class RadioComponent extends HTMLElement {
  /**
   * RadioComponent constructor.
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
    return ['name', 'value', 'label', 'disabled', 'border']
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
  attributeChangedCallback (attrName, oldVal, newVal) {
  }
}
window.customElements.define('radio-component', RadioComponent)
