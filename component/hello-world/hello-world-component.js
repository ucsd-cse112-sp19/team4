/* global HTMLElement */
/**
 * This is hello world component with 2 core attributes.<br>
 * - rainbow {boolean} - true if you want the text to have rainbow color, false otherwise.<br>
 * - language {string} - string value of the language (for example: en, sp, fr, or ch).
 */
class HelloWorldComponent extends HTMLElement {}
  /**
   * HelloWorldComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = '<h1><span></span></h1>'
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
    if (!this.hasAttribute('language')) {
      this.setAttribute('language', 'en')
    }
    if (!this.hasAttribute('rainbow')) {
      this.setAttribute('rainbow', 'false')
    }
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
    let span = this.shadowRoot.querySelector('span')
    if (newVal === 'true') {
      span.style.background = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
    } else if (newVal === 'false') {
      span.style.background = 'black'
    }
    span.style.webkitBackgroundClip = 'text'
    span.style.webkitTextFillColor = 'transparent'
    this.style.position = 'relative'
  }

  /**
   * Method for handling language logic.
   * @param {string} newLang - string representation of the language.
   */
  handleLanguage (newLang) {
    var content = this.textContent
    /*
     * Language content contains the strings for the
     * greeting and world in that language
     */
    var languageContent = {
      'en': ['Hello', 'World'],
      'sp': ['Hola', 'Mundo'],
      'fr': ['Bonjour', 'le monde'],
      'ch': ['你好,', '世界'],
      'jp': ['こんにちは', '世界'],
      'ge': ['Hallo', 'Welt'],
      'sw': ['Hej', 'världen'],
      'hi': ['नमस्ते', 'दुनिया'],
      'ru': ['Привет,', 'мир'],
      'la': ['salve', 'Orbis Terrarum'],
      'ko': ['안녕하세요', '세계'],
      'pig': ['ellohay', 'orldway'],
      'it': ['Ciao', 'mondo'],
      'fi': ['Hei', 'maailma'],
      'po': ['Olá', 'Mundo'],
      'ic': ['Halló', 'heimur']
    }
    // setting default lang when language="" or any other string that is not supported
    if (!(newLang in languageContent)) {
      newLang = 'en'
    }
    const [greeting, world] = languageContent[newLang]
    if (content === '') { content = world }
    if (this.shadowRoot.querySelector('span') !== null) {
      this.shadowRoot.querySelector('span').textContent = `${greeting} ${content}!`
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

  /**
   * Getter for language attribute.
   */
  get language () {
    return this.getAttribute('language')
  }

  /**
   * Setter for language attribute.
   * @param {string} newVal - The new value for language
   */
  set language (newVal) {
    this.setAttribute('language', newVal)
  }

  /**
   * Getter for rainbow attribute.
   */
  get rainbow () {
    return this.getAttribute('rainbow')
  }

  /**
   * Setter for rainbow attribute.
   * @param {string} newVal - The new value for rainbow
   */
  set rainbow (newVal) {
    this.setAttribute('rainbow', newVal)
  }
}
window.customElements.define('hello-world', HelloWorldComponent)
