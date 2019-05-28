var template = document.createElement('template')
template.innerHTML = `
  <style>
    /*  Default CSS style for slider */
    :host {
      width: 300px;
      font-weight: 400;
      cursor: pointer;
      border-radius: 3px;
      background-color: #e4e7ed;
      margin: 0;
    }
    input[type=range] {
      -webkit-appearance: none;
      display: block;
      width: 100%;
      height: 10px;
      padding: 0;
      border-radius: 4px;
      background: #e4e7ed;
      box-sizing: content-box;
    }
    input[type=range]:focus {
      outline: none;
    }
    /* CSS classes for slider thumb */
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid #409eff;
      border-radius: 25px;
      background: #fff;
      transition: transform .2s;
      -webkit-transition: transform .2s;
      -moz-transition: transform .2s;
      -o-transition: transform .2s;
    }
    input[type=range]::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #409eff;
      cursor: pointer;
    }
    .range {
      position: relative;
      float: left;
      width: 80vw;
      padding: 0 0.7375rem;
    }
    .min,
    .max {
      width: 10vw;
      color: #333;
      text-align: right;
      font-weight: bold;
      margin-top: -2px;
    }
    .min {
      float: left;
    }
    .max {
      text-align: left;
    }
    input[type=range]:hover{
      cursor: pointer;
    }
    input[type=range]::-webkit-slider-thumb:hover{
      -webkit-transform: scale(1.2); /* Safari & Chrome */
      -moz-transform: scale(1.2); /* Firefox */
      -ms-transform: scale(1.2); /* Internet Explorer */
      -o-transform: scale(1.2); /* Opera */
    }   
  </style>
  <div class="slide-r">
    <span class="min">0</span>
      <div class="range">
        <input type="range" min="1" max="100" step="1">
      </div>
    <span class="max">100</span>
  </div>
`
/**
 * Local setting var
 */
const settings = {
  fill: '#409eff',
  background: '#d7dcdf'
}

/* global HTMLElement */
/**
 * This is a custom slider component
 * Ported from https://element.eleme.io/#/en-US/component/slider
 */
class SliderComponent extends HTMLElement {
  /**
   * SliderComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
	this.slider = this.shadowRoot.querySelector('input')
    // listener when sliding
    this.slider.addEventListener('input', () => {
      this.applyFill(this.slider)
    })
    // listener when sliding event finished
    this.slider.addEventListener('change', () => {
      this.applyFill(this.slider)
      this.setAttribute('value', this.slider.value)
    })
    this.applyFill(this.slider)
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['value']
  }

  /**
   * Callback when the component get created.
   */
  connectedCallback () {
    console.log('Component connected!')
    if (!this.hasAttribute('value')) {
      this.setAttribute('value', '50')
    }
    this.slider.setAttribute('value', this.getAttribute('value'))
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
    if (!isNaN(newVal) && newVal >= 0 && newVal <= 100) {
      var slider = this.shadowRoot.querySelector('input')
      slider.value = newVal
      this.applyFill(slider)
    }
  }

  /**
   * Getter for value attribute.
   */
  get value () {
    return this.getAttribute('value')
  }

  /**
   * Setter for value attribute.
   * @param {string} newVal - The new value for value attribute
   */
  set value (newVal) {
    if (!isNaN(newVal) && newVal >= 0 && newVal <= 100) {
      this.setAttribute('value', newVal)
    }
  }

  /**
   * Method for filling the color for the slider
   * @param {*} _slider - Slider object (aka the input tag)
   */
  applyFill (_slider) {
    const percentage = 100 * (_slider.value - _slider.min) / (_slider.max - _slider.min)
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`
    _slider.style.background = bg
  }
}
window.customElements.define('slider-component', SliderComponent)
