var template = document.createElement('template')
template.innerHTML = `
  <style>
    // default setting for the slider
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
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid #409eff;
      border-radius: 25px;
      background: #fff;
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
    .slider {
      margin: 4em 0;
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
      background: lightgrey;
    }
  </style>
  <div class="slider">
    <span class="min">0</span>
      <div class="range">
        <input type="range" min="1" max="100" step="1">
      </div>
    <span class="max">100</span>
  </div>
`
const settings = {
  fill: '#409eff',
  background: '#d7dcdf'
}
class SliderComponent extends HTMLElement {
  /**
   * SliderComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
    const slider = this.shadowRoot.querySelector('input')
    slider.addEventListener('input', this.applyFill)
    this.applyFill(slider)
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
    console.log('Component connected!')
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
  applyFill () {
    var _slider = this
    const percentage = 100 * (_slider.value - _slider.min) / (_slider.max - _slider.min)
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`
    _slider.style.background = bg
  }
}
window.customElements.define('slider-component', SliderComponent)
