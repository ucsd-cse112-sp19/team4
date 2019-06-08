var menu = document.createElement('template')
menu.innerHTML = `
  <style>
    /*  Default CSS style for menu*/
    :host {
      display: block;
      background-color: rgb(84, 92, 100);
      border-bottom: 1px solid #e6e6e6;
      border-right: none;
      height: 60px;
      margin: 0;
      padding: 0;
    }
    :host([dark]){
      background-color: white;
    }
    :host([dark]) menu-item{
      color: black;
    }
  </style>
  <div>
  </div>
`

/* global HTMLElement */
/**
 * This is a custom menu component
 * Ported from https://element.eleme.io/#/en-US/component/menu
 */
class MenuComponent extends HTMLElement {
  /**
   * MenuComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    var shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = this.innerHTML
    shadowRoot.appendChild(menu.content.cloneNode(true))
    this.innerHTML = ''
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return []
  }

  /**
   * Callback when the component get created.
   */
  connectedCallback () {
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

var menuItem = document.createElement('template')
menuItem.innerHTML = `
  <style>
    /*  Default CSS style for menuitem*/
    menu-item {
      float: left;
      height: 60px;
      line-height: 60px;
      margin: 0;
      border-bottom: 2px solid transparent;
      font-size: 15px;
      padding: 0 20px;
      list-style: none;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      white-space: nowrap;
      color: #fff;
      border-bottom-color: transparent;
    }
    menu-item:hover{
      background-color: rgb( 67, 74, 80);
    }
    menu-item[right]{
      float: right;
    }
    menu-item a{
      color: white;
    }
    .active {
      color: rgb(255, 208, 75);
      border-bottom-color: rgb(255, 208, 75);
    }
  </style>  
`

/* global HTMLElement */
/**
 * This is a custom menu component
 * Ported from https://element.eleme.io/#/en-US/component/menu
 */
class MenuItem extends HTMLElement {
  /**
   * MenuComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    this.appendChild(menuItem.content.cloneNode(true))
    this.addEventListener('click', this._onClick)
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['left', 'right', 'default-active']
  }

  /**
   * Callback when the component get created.
   */
  connectedCallback () {
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
    if (attrName === 'default-active') {
      this.classList.add('active')
    }
  }

  /**
   * Handle onClick event for menu item
   * Make item active and deselect other
   * @param {*} event the onclick event
   */
  _onClick (event) {
    this.classList.add('active')
    var sibling = this.parentNode.firstChild
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== this) {
        sibling.classList.remove('active')
      }
      sibling = sibling.nextSibling
    }
  }
}

window.customElements.define('menu-component', MenuComponent)
window.customElements.define('menu-item', MenuItem)
