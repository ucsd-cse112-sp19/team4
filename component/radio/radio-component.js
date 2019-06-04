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
      font-weight: 500;
      padding: 12px 20px;
      margin-right: 5px;
      vertical-align: middle;
      font-size: 14px;
    }

    radio-option[size='medium'] {
      padding: 10px 20px ;
      font-size: 14px;
      height: 36px;
    }

    radio-option[size='small'] {
      padding: 8px 15px ;
      height: 36px;
      font-size: 12px;
    }

    radio-option[size='mini'] {
      padding: 6px 15px ;
      height: 28px;
      font-size: 12px;
    }

    radio-option[border], radio-option[button] {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      margin-top: 20px;
      margin-right: 10px;
    }

    radio-option[button] {
      margin-right: -1px;
      border-radius: 0px;
    }

    radio-option[button]:first-of-type {
      border-radius: 4px 0 0 4px;
    }
    
    radio-option[button]:last-of-type {
      border-radius: 0 4px 4px 0;
    } 

    radio-option[button] input[type="radio"] {
      display: none;
    }

    radio-option[disabled]{
      opacity: 0.4;
      cursor: not-allowed;
      border-color: #ebeef5;
    }

    radio-option[disabled] input[type="radio"],
      radio-option[disabled] span {
      pointer-events: none;
      cursor: not-allowed;
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
    this.addEventListener('click', this._onClick)
    if (option != null) {
      this.handleRadioOption(option)
    }

    var label = this.getElementsByTagName('span')[0]
    label.innerText = this.getAttribute('label')
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['value', 'label', 'disabled', 'border', 'size']
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

  /**
   * Getter for value attribute.
   */
  get value () {
    return this.getAttribute('value')
  }

  /**
   * Setter for valye attribute.
   * @param {string} newVal - The new value
   */
  set value (newVal) {
    this.setAttribute('value', newVal)
  }

  /**
   * Getter for label attribute.
   */
  get label () {
    return this.getAttribute('label')
  }

  /**
   * Setter for label attribute.
   * @param {string} newVal - The new value for label attr
   */
  set label (newVal) {
    this.setAttribute('label', newVal)
  }

  /**
   * Getter for disabled attribute.
   */
  get disabled () {
    return this.getAttribute('disabled')
  }

  /**
   * Setter for disabled attribute.
   * @param {string} newVal - The new value for disabled attr
   */
  set disabled (newVal) {
    this.setAttribute('disabled', '')
  }

  /**
   * Getter for border attribute.
   */
  get border () {
    return this.getAttribute('border')
  }

  /**
   * Setter for border attribute.
   * @param {string} newVal - The new value for border attr
   */
  set border (newVal) {
    this.setAttribute('border', '')
  }

  /**
   * Getter for size attribute.
   */
  get size () {
    return this.getAttribute('size')
  }

  /**
   * Setter for size attribute.
   * @param {string} newVal - The new value for size attr
   */
  set size (newVal) {
    this.setAttribute('size', newVal)
  }

  /**
   * Custom method for handling the border style for selected
   * radio option
   * @param {*} option - the radio option
   */
  handleRadioOption (option) {
    option.setAttribute('value', this.getAttribute('value'))
    option.setAttribute('name', this.getRootNode().host.getAttribute('name'))
    var _this = this
    option.addEventListener('change', () => {
      this.getRootNode().host.setAttribute('value', this.value)
      _this.style.borderColor = '#007bff'
      var sibling = this.parentNode.firstChild
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== this) {
          sibling.style.borderColor = '#dcdfe6'
        }
        sibling = sibling.nextSibling
      }
    })
  }

  /**
   * Callback for when the supported attributes change its value.
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
  */
  attributeChangedCallback (attrName, oldVal, newVal) {
  }

  /**
   * Handle onClick event for radio button group
   * Make current radio option active and deselect other
   * @param {*} event the onclick event
   */
  _onClick (event) {
    if (this.hasAttribute('button') && !this.hasAttribute('disabled')) {
      this.style.backgroundColor = '#007bff'
      this.style.borderColor = '#007bff'
      this.style.color = '#fff'
      this.getRootNode().host.setAttribute('value', this.value)
      var sibling = this.parentNode.firstChild
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== this) {
          sibling.style.backgroundColor = '#fff'
          sibling.style.borderColor = '#dcdfe6'
          sibling.style.color = '#000'
        }
        sibling = sibling.nextSibling
      }
    }
  }
}

/**
 * defining the component
 */
window.customElements.define('radio-component', RadioComponent)
window.customElements.define('radio-option', RadioOption)
