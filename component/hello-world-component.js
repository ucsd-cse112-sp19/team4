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

  attributeChangedCallback (attrName, oldVal, newVal) {
    if (attrName === 'rainbow') {
      if (newVal === 'true') {
        console.log('in1!')
        // this.setAttribute('rainbow', 'true');
        this.shadowRoot.querySelector('h1').style.background = 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet)'
      } else if (newVal === 'false') {
        this.shadowRoot.querySelector('h1').style.background = 'none'
      }
    }

    if (attrName === 'language') {
      if (newVal === 'en') {
        console.log('in2!')
        var content = this.textContent
        if (content === '') { content = 'World' }
        // let elementContent = `<h1>Hola ${content}!</h1>`;
        // this.shadowRoot.innerHTML = elementContent;
        this.shadowRoot.querySelector('h1').textContent = `Hello ${content}!`
      }
      if (newVal === 'sp') {
        console.log('in!')
        content = this.textContent
        if (content === '') { content = 'Mundo' }
        // let elementContent = `<h1>Hola ${content}!</h1>`;
        // this.shadowRoot.innerHTML = elementContent;
        this.shadowRoot.querySelector('h1').textContent = `Hola ${content}!`
      }

      if (newVal === 'fe') {
        console.log('in fe!')
        content = this.textContent
        if (content === '') { content = 'le monde' }
        // let elementContent = `<h1>Hola ${content}!</h1>`;
        // this.shadowRoot.innerHTML = elementContent;
        this.shadowRoot.querySelector('h1').textContent = `Bonjour ${content}!`
      }

      if (newVal === 'ch') {
        console.log('in ch!')
        content = this.textContent
        if (content === '') { content = '世界' }
        // let elementContent = `<h1>Hola ${content}!</h1>`;
        // this.shadowRoot.innerHTML = elementContent;
        this.shadowRoot.querySelector('h1').textContent = `你好, ${content}!`
      }
    }
  }
}
window.customElements.define('hello-world', HelloWorldComponent)
