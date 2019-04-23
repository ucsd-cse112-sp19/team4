/* global HTMLElement */
/**
 * This is hello world component with 2 core attributes.<br>
 * - rainbow {boolean} - true if you want the text to have rainbow color, false otherwise.<br>
 * - language {string} - string value of the language (for example: en, sp, fr, or ch).
 */
class HelloWorldComponent extends HTMLElement {
  /**
   * This is a basic constructor hello
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

    if (newVal === 'jp') {
      if (content === '') { content = '世界' }
      this.shadowRoot.querySelector('h1').textContent = `こんにちは ${content}!`
    }

    if (newVal === 'ge') {
      if (content === '') { content = 'Welt' }
      this.shadowRoot.querySelector('h1').textContent = `Hallo ${content}!`
    }

    if (newVal === 'sw') {
      if (content === '') { content = 'världen' }
      this.shadowRoot.querySelector('h1').textContent = `Hej ${content}!`
    }

    if (newVal === 'hi') {
      if (content === '') { content = 'दुनिया' }
      this.shadowRoot.querySelector('h1').textContent = `नमस्ते ${content}!`
    }

    if (newVal === 'ru') {
      if (content === '') { content = 'мир' }
      this.shadowRoot.querySelector('h1').textContent = `Привет, ${content}!`
    }

    if (newVal === 'la') {
      if (content === '') { content = 'Orbis Terrarum' }
      this.shadowRoot.querySelector('h1').textContent = `salve ${content}!`
    }

    if (newVal === 'ko') {
      if (content === '') { content = '세계' }
      this.shadowRoot.querySelector('h1').textContent = `안녕하세요 ${content}!`
    }

    if (newVal === 'pig') {
      if (content === '') { content = 'orldway' }
      this.shadowRoot.querySelector('h1').textContent = `ellohay ${content}!`
    }

    if (newVal === 'it') {
      if (content === '') { content = 'mondo' }
      this.shadowRoot.querySelector('h1').textContent = `Ciao ${content}!`
    }

    if (newVal === 'fi') {
      if (content === '') { content = 'maailma' }
      this.shadowRoot.querySelector('h1').textContent = `Hei ${content}!`
    }

    if (newVal === 'po') {
      if (content === '') { content = 'Mundo' }
      this.shadowRoot.querySelector('h1').textContent = `Olá ${content}!`
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
