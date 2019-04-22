/* global HTMLElement */
/**
 * This is hello world component with 2 core attributes.<br>
 * - rainbow {boolean} - true if you want the text to have rainbow color, false otherwise.<br>
 * - language {string} - string value of the language (for example: en, sp, fr, or ch).
 */
class HelloWorldComponent extends HTMLElement {
  /**
   * HelloWorldComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    let shadowRoot = this.attachShadow({ mode: 'open' })
    var content = this.textContent
    if (content === '') { content = 'World' }
    let elementContent = `<h1>Hello ${content}!</h1>`
    shadowRoot.innerHTML = elementContent
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   * Currently only rainbow and language.
   */
  static get observedAttributes () {
    return ['rainbow', 'language']
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
   * Method for handling rainbow logic.
   * @param {boolean} newVal - boolean value for toggling rainbow attribute.
   */
  handleRainbow (newVal) {
    let h1 = this.shadowRoot.querySelector('h1')
    if (newVal === 'true') {
      h1.style.background = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
    } else if (newVal === 'false') {
      h1.style.background = 'black'
    }
    h1.style.webkitBackgroundClip = 'text'
    h1.style.webkitTextFillColor = 'transparent'
    h1.style.position = 'absolute'
  }

  /**
   * Method for handling language logic.
   * @param {string} newVal - string representation of the language.
   */
  handleLanguage (newVal) {
    var content = this.textContent
    if (newVal === 'en') {
      if (content === '') { content = 'World' }
      this.shadowRoot.querySelector('h1').textContent = `Hello ${content}!`
    }

    if (newVal === 'sp') {
      if (content === '') { content = 'Mundo' }
      this.shadowRoot.querySelector('h1').textContent = `Hola ${content}!`
    }

    if (newVal === 'fe') {
      if (content === '') { content = 'le monde' }
      this.shadowRoot.querySelector('h1').textContent = `Bonjour ${content}!`
    }

    if (newVal === 'ch') {
      if (content === '') { content = '世界' }
      this.shadowRoot.querySelector('h1').textContent = `你好, ${content}!`
    }
  }

  /**
   * Callback for when the supported attributes change its value.
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
   */
  attributeChangedCallback (attrName, oldVal, newVal) {
    if (attrName === 'rainbow') {
      this.handleRainbow(newVal)
    }
    if (attrName === 'language') {
      this.handleLanguage(newVal)
    }
  }
}
window.customElements.define('hello-world', HelloWorldComponent)
