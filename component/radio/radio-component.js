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
    var shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = this.innerHTML
    this.innerHTML = ''
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['name']
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

  get name () {
    return this.getAttribute('name')
  }

  set name (newVal) {
    this.setAttribute('name', newVal)
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

var optionTemplate = document.createElement('template')
optionTemplate.innerHTML = `
  <style>
    /*  Default CSS style for radio */
    radio-option {
      color: #606266;
      font-weight: 200;
      padding: 7px 15px;
      margin-right: 5px;
    }

    radio-option[border] {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      margin-top: 20px;
    }
    radio-option[border] input, 
      radio-option[border] span {
        margin-top: 20px;
    }
        
    input[type="radio"] {
      margin-right: 7px;
    }

    input[type="radio"]:checked + span {
      color: #007bff;
    }
    
  </style>
  <input type="radio"><span></span>
`

/* global HTMLElement */
/**
 * This is a custom radio option component
 * Ported from https://element.eleme.io/#/en-US/component/radio
 */
class RadioOption extends HTMLElement {
  /**
   * RadioOption constructor.
   * @constructor
   */
  constructor () {
    super()
    // this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
    this.appendChild(optionTemplate.content.cloneNode(true))
    var option = this.getElementsByTagName('input')[0]
    option.setAttribute('value', this.getAttribute('value'))
    option.setAttribute('name', this.getRootNode().host.getAttribute('name'))
    var _this = this
    option.addEventListener('change', () => {
      _this.style.borderColor = '#007bff'
      var sibling = this.parentNode.firstChild
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== this) {
          sibling.style.borderColor = '#dcdfe6'
        }
        sibling = sibling.nextSibling
      }
    })

    var label = this.getElementsByTagName('span')[0]
    label.innerText = this.getAttribute('label')
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['value', 'label', 'disabled', 'border']
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
  }

  get value () {
    return this.getAttribute('value')
  }

  set value (newVal) {
    this.setAttribute('value', newVal)
  }

  get label () {
    return this.getAttribute('label')
  }

  set label (newVal) {
    this.setAttribute('label', newVal)
  }

  get disabled () {
    return this.getAttribute('disabled')
  }

  set disabled (newVal) {
    this.setAttribute('disabled', newVal)
  }

  get border () {
    return this.getAttribute('border')
  }

  set border (newVal) {
    this.setAttribute('border', '')
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
window.customElements.define('radio-option', RadioOption)
