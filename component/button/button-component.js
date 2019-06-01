var template = document.createElement('template')
template.innerHTML = `
  <link rel="stylesheet" type="text/css" href="button-component.css">
  <p class="noselect"></p>
`

/* global HTMLElement */
/**
 * This is a custom button component
 * Ported from https://element.eleme.io/#/en-US/component/button
 */
class ButtonComponent extends HTMLElement {
  /**
   * ButtonComponent constructor. Attaching button template into
   * the shadowRoot of the component
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
    return ['biggness', 'type', 'plain', 'round', 'circle', 'disabled', 'theme']
  }

  /**
   * Callback when the component get created.
   */
  connectedCallback () {
    if (this.shadowRoot.querySelector('p') !== null) {
      this.shadowRoot.querySelector('p').textContent = this.textContent
    }
    if (!this.hasAttribute('biggness')) {
      this.setAttribute('biggness', 'default')
    }
    if (!this.hasAttribute('type')) {
      this.setAttribute('type', 'default')
    }
    console.log('Component connected!')
  }

  /**
   * Callback when the component get disconnected.
   */
  disconnectedCallback () {
    console.log('Component disconnect!')
  }

  /**
   * Getter for type attribute.
   */
  get type () {
    return this.getAttribute('type')
  }

  /**
   * Setter for type attribute.
   * @param {string} newVal - The new value for type
   */
  set type (newVal) {
    this.setAttribute('type', newVal)
  }

  /**
   * Getter for biggness attribute.
   */
  get biggness () {
    return this.getAttribute('biggness')
  }

  /**
   * Setter for biggness attribute.
   * @param {string} newVal - The new value for biggness
   */
  set biggness (newVal) {
    this.setAttribute('biggness', newVal)
  }

  /**
   * Getter for plain attribute.
   */
  get plain () {
    return this.hasAttribute('plain')
  }

  /**
   * Setter for plain attribute.
   * @param {string} newVal - The new value for plain
   */
  set plain (newVal) {
    if (newVal) {
      this.setAttribute('plain', '')
    } else {
      this.removeAttribute('plain')
    }
  }

  /**
   * Getter for round attribute.
   */
  get round () {
    return this.hasAttribute('round')
  }

  /**
   * Setter for round attribute.
   * @param {string} newVal - The new value for round
   */
  set round (newVal) {
    if (newVal) {
      this.setAttribute('round', '')
    } else {
      this.removeAttribute('round')
    }
  }

  /**
   * Getter for circle attribute.
   */
  get circle () {
    return this.hasAttribute('circle')
  }

  /**
   * Setter for circle attribute.
   * @param {string} newVal - The new value for circle
   */
  set circle (newVal) {
    if (newVal) {
      this.setAttribute('circle', '')
    } else {
      this.removeAttribute('circle')
    }
  }

  /**
   * Getter for disabled attribute.
   */
  get disabled () {
    return this.hasAttribute('disabled')
  }

  /**
   * Setter for disabled attribute.
   * @param {string} newVal - The new value for disabled
   */
  set disabled (newVal) {
    if (newVal) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  /**
   * Callback for when the supported attributes change its value.
   * Currently not using this since most of the logic can be handle in the css
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
   */
  attributeChangedCallback (attrName, oldVal, newVal) {
  }
}
window.customElements.define('button-component', ButtonComponent)
