/* global HTMLElement */
class HelloWorldComponent extends HTMLElement {
  constructor () {
    super()
    let shadowRoot = this.attachShadow({ mode: 'open' })
    var content = this.textContent
    if (content === '') { content = 'World' }
    let elementContent = `<h1>Hello ${content}!</h1>`
    shadowRoot.innerHTML = elementContent
  }

  static get observedAttributes () {
    return ['rainbow', 'language']
  }

  connectedCallback () {
    console.log('Component connected!')
  }

  disconnectedCallback () {
    console.log('Component disconnect!')
  }

  handleRainbow (newVal) {
    if (newVal === 'true') {
      this.shadowRoot.querySelector('h1').style.background = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
      this.shadowRoot.querySelector('h1').style.webkitBackgroundClip = 'text'
      this.shadowRoot.querySelector('h1').style.webkitTextFillColor = 'transparent'
    } else if (newVal === 'false') {
      this.shadowRoot.querySelector('h1').style.background = 'none'
    }
  }

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
