var template = document.createElement('template')
template.innerHTML = `
  <style>
    :host{
      
      /* Common Theme */
      --color-white: #fff;
      --text-color: #000;
      --btn-warning-text: #fff;

      /* Default Element Theme */
      --btn-color-default: #fff;
      --btn-color-warning: #e6a23c;
      --btn-color-success: #67c23a;
      --btn-color-danger: #f56c6c;
      --btn-color-primary: #409eff;
      --btn-color-info: #909399;

      --btn-default-border: #dcdfe6;

      --btn-default-hover: rgba(64, 158, 255, 0.15);
      --btn-default-hover-border: rgba(64, 158, 255, 0.3);
      --btn-default-color: #409eff;

      --btn-warning-hover: rgba(230, 162, 60, 0.85);
      --btn-danger-hover: rgba(245, 108, 108, 0.85);
      --btn-info-hover: rgba(144, 147, 153, 0.85);
      --btn-success-hover: rgba(103, 194, 58, 0.85);
      --btn-primary-hover: rgba(64, 158, 255, 0.85);

      --btn-default-active: #0077f3;
      --btn-default-active-background: rgba(64, 158, 255, 0.15);
      --btn-default-active-color: #0077f3;

      --btn-warning-active: #bd7b18;
      --btn-danger-active: #f02424;
      --btn-info-active: #6a6d73;
      --btn-success-active: #488728;
      --btn-primary-active: #0077f3;

      --btn-default-plain-border: #dcdfe6;
      --btn-default-plain-background: #fff;
      --btn-default-plain-color: #000;

      --btn-default-plain-border-active: #0077f3;
      --btn-default-plain-background-active: #fff;
      --btn-default-plain-color-active: #0077f3;

      --btn-default-plain-border-hover: #409eff;
      --btn-default-plain-background-hover: #fff;
      --btn-default-plain-color-hover: #409eff;

      --btn-primary-plain: rgba(64, 158, 255, 0.15);
      --btn-primary-plain-border: rgba(64, 158, 255, 0.3);
      
      --btn-success-plain: rgba(103, 194, 58, 0.15);
      --btn-success-plain-border: rgba(103, 194, 58, 0.3);
      
      --btn-info-plain: rgba(144, 147, 153, 0.15);
      --btn-info-plain-border: rgba(144, 147, 153, 0.3);
      
      --btn-danger-plain: rgba(245, 108, 108, 0.15);
      --btn-danger-plain-border: rgba(245, 108, 108, 0.3);

      --btn-warning-plain: rgba(230, 162, 60, 0.15);
      --btn-warning-plain-border: rgba(230, 162, 60, 0.3);
    }

    :host([theme='bootstrap']) {

      /* Common Theme */
      --color-white: #fff;
      --text-color: #fff;
      --btn-warning-text: #000;

      /* Default Element Theme */
      --btn-color-default: #6c757d;
      --btn-color-warning: #ffc107;
      --btn-color-success: #28a745;
      --btn-color-danger: #dc3545;
      --btn-color-primary: #007bff;
      --btn-color-info: #17a2b8;

      --btn-default-border: #6c757d;

      --btn-default-hover: rgb(84, 92, 99);
      --btn-default-hover-border: rgb(84, 92, 99);
      --btn-default-color: #fff;

      --btn-default-plain-border: rgba(108, 117, 125, 1);
      --btn-default-plain-background: #fff;
      --btn-default-plain-color: #6c757d;

      --btn-default-plain-border-hover: rgb(84, 92, 99);
      --btn-default-plain-background-hover: rgb(84, 92, 99);
      --btn-default-plain-color-hover: #fff;

      --btn-default-plain-border-active: #31363a;
      --btn-default-plain-background-active: #31363a;
      --btn-default-plain-color-active: #fff;

      --btn-warning-hover: #edb100;
      --btn-danger-hover: #d32535;
      --btn-info-hover: #148ea1;
      --btn-success-hover: #23923d;
      --btn-primary-hover: #006fe6;

      --btn-default-active: #31363a;
      --btn-default-active-background: #31363a;
      --btn-default-active-color: #fff;


      --btn-warning-active: #d39e00;
      --btn-danger-active: #a71d2a;
      --btn-info-active: #0f6674;
      --btn-success-active: #19692c;
      --btn-primary-active: #0056b3;


      --btn-primary-plain: #fff;
      --btn-primary-plain-border: rgba(0, 123, 255, 1);
      
      --btn-success-plain: #fff;
      --btn-success-plain-border: rgba(40, 167, 69, 1);
      
      --btn-info-plain: #fff;
      --btn-info-plain-border: rgba(23, 162, 184, 1);
      
      --btn-danger-plain: #fff;
      --btn-danger-plain-border: rgba(220, 53, 69, 1);

      --btn-warning-plain: #fff;
      --btn-warning-plain-border: rgba(255, 193, 7, 1);
    }

    /* Default css attribute for the button */
    :host{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: var(--btn-color-default);
      border: 1px solid var(--btn-default-border);
      color: var(--text-color);
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      box-shadow: 0 1px 2px darkgray;
    }

    /* CSS classes for type attribute */

    :host([type='primary']) {
      color: #fff;
      background-color: var(--btn-color-primary);
      border-color: var(--btn-color-primary);
    }

    :host([type='success']){
      color: #fff;
      background-color: var(--btn-color-success);
      border-color: var(--btn-color-success);
    }

    :host([type='warning']){
      color: var(--btn-warning-text);
      background-color: var(--btn-color-warning);
      border-color: var(--btn-color-warning);
    }

    :host([type='danger']){
      color: #fff;
      background-color: var(--btn-color-danger);
      border-color: var(--btn-color-danger);
    }

    :host([type='info']){
      color: #fff;
      background-color: var(--btn-color-info);
      border-color: var(--btn-color-info);
    }

    /* CSS classes for size attribute */

    :host([size='medium']){
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
    }

    :host([size='small']){
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }

    :host([size='mini']){
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }

    /* CSS classes for round attribute */

    :host([round]) {
      border-radius: 20px;
    }

    /* CSS classes for circle attribute*/

    :host([circle]) {
      border-radius: 50%;
    }

    /* CSS classes for on hover*/

    :host(:hover) {
      background-color: var(--btn-default-hover);
      color: var(--btn-default-color);
      border: 1px solid var(--btn-default-hover-border);
    }

    /* CSS classes for on hover with specific button type */

    :host([type='warning']:hover) {
      color: var(--btn-warning-text);
      background-color: var(--btn-warning-hover);
      border-color: var(--btn-warning-hover);
    }

    :host([type='danger']:hover) {
      color: #fff;
      background-color: var(--btn-danger-hover);
      border-color: var(--btn-danger-hover);
    }

    :host([type='info']:hover) {
      color: #fff;
      background-color: var(--btn-info-hover);
      border-color: var(--btn-info-hover);
    }

    :host([type='success']:hover) {
      color: #fff;
      background-color: var(--btn-success-hover);
      border-color: var(--btn-success-hover);
    }

    :host([type='primary']:hover) {
      color: #fff;
      background-color: var(--btn-primary-hover);
      border-color: var(--btn-primary-hover);
    }

    /* CSS classes when being clicked */

    :host(:active) {
      background-color: var(--btn-default-active-background);
      color: var(--btn-default-active-color);
      border: 1px solid var(--btn-default-active);
    }

    /* CSS classes when being clicked for specific button type */

    :host([type='warning']:active) {
      color: var(--btn-warning-text);
      background-color: var(--btn-warning-active);
      border-color: var(--btn-warning-active);
    }

    :host([type='danger']:active) {
      color: #fff;
      background-color: var(--btn-danger-active);
      border-color: var(--btn-danger-active);
    }

    :host([type='info']:active) {
      color: #fff;
      background-color: var(--btn-info-active);
      border-color: var(--btn-info-active);
    }

    :host([type='success']:active) {
      color: #fff;
      background-color: var(--btn-success-active);
      border-color: var(--btn-success-active);
    }

    :host([type='primary']:active) {
      color: #fff;
      background-color: var(--btn-primary-active);
      border-color: var(--btn-primary-active);
    }

    :host([plain]) {
      background-color: var(--btn-default-plain-background);
      color: var(--btn-default-plain-color);
      border: 1px solid var(--btn-default-plain-border);
    }

    /* CSS classes for plain button */

    :host([plain]:hover) {
      background-color: var(--btn-default-plain-background-hover);
      color: var(--btn-default-plain-color-hover);
      border: 1px solid var(--btn-default-plain-border-hover);
    }

    :host([plain]:active) {
      background-color: var(--btn-default-plain-background-active);
      color: var(--btn-default-plain-color-active);
      border: 1px solid var(--btn-default-plain-border-active);
    }

    :host([type='primary'][plain]) {
      color: var(--btn-color-primary);
      background-color: var(--btn-primary-plain);
      border-color: var(--btn-primary-plain-border);
    }

    :host([type='primary'][plain]:hover) {
      background-color: var(--btn-color-primary);
      color: #fff;
      border: 1px solid var(--btn-color-primary);
    }

    :host([type='primary'][plain]:active) {
      color: #fff;
      background-color: var(--btn-primary-active);
      border-color: var(--btn-primary-active);
    }

    :host([type='success'][plain]) {
      color: var(--btn-color-success);
      background-color: var(--btn-success-plain);
      border-color: var(--btn-success-plain-border);
    }

    :host([type='success'][plain]:hover) {
      background-color: var(--btn-color-success);
      color: #fff;
      border: 1px solid var(--btn-color-success);
    }

    :host([type='success'][plain]:active) {
      color: #fff;
      background-color: var(--btn-success-active);
      border-color: var(--btn-success-active);
    }

    :host([type='info'][plain]) {
      color: var(--btn-color-info);
      background-color: var(--btn-info-plain);
      border-color: var(--btn-info-plain-border);
    }

    :host([type='info'][plain]:hover) {
      background-color: var(--btn-color-info);
      color: #fff;
      border: 1px solid var(--btn-color-info);
    }

    :host([type='info'][plain]:active) {
      color: #fff;
      background-color: var(--btn-info-active);
      border-color: var(--btn-info-active);
    }    

    :host([type='danger'][plain]) {
      color: var(--btn-color-danger);
      background-color: var(--btn-danger-plain);
      border-color: var(--btn-danger-plain-border);
    }

    :host([type='danger'][plain]:hover) {
      background-color: var(--btn-color-danger);
      color: #fff;
      border: 1px solid var(--btn-color-danger);
    }

    :host([type='danger'][plain]:active) {
      color: #fff;
      background-color: var(--btn-danger-active);
      border-color: var(--btn-danger-active);
    }

    :host([type='warning'][plain]) {
      color: var(--btn-color-warning);
      background-color: var(--btn-warning-plain);
      border-color: var(--btn-warning-plain-border);
    }

    :host([type='warning'][plain]:hover) {
      background-color: var(--btn-color-warning);
      color: var(--btn-warning-text);
      border: 1px solid var(--btn-color-warning);
    }

    :host([type='warning'][plain]:active) {
      color: var(--btn-warning-text);
      background-color: var(--btn-warning-active);
      border-color: var(--btn-warning-active);
    }

    /* CSS classes for disabled button */

    :host([disabled]){
      border: 1px solid #999999;
      background-color: #cccccc;
      pointer-events: none;
      opacity: 0.4;
    }

    /* CSS classes for button with icon */

    :host([icon]){
      padding: 12px;
      color: #fff;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    }

    :host([icon='icon-delete']){
      content: url('images/garbage.png');
    }

    :host([icon='icon-star-off']){
      content: url('images/star.png');
    }

    :host([icon='icon-message']){
      content: url('images/mail.png');
    }

    :host([icon='icon-check']){
      content: url('images/tick.png');
    }

    :host([icon='icon-edit']){
      content: url('images/edit.png');
    }

    :host([icon='icon-search']){
      content: url('images/search.png');
      padding: 12px;
      color: #fff;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    }

    /* Source https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting */

    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    }

    p {
      padding: 0px;
      margin: 0px;
    }
  </style>
  <p class="noselect"></p>
`

/* global HTMLElement */
/**
 * This is a custom button component
 * Ported from https://element.eleme.io/#/en-US/component/button
 */
class ButtonComponent extends HTMLElement {
  /**
   * ButtonComponent constructor. Attaching button template into
   * the shadowRoot of the component
   * @constructor
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['size', 'type', 'plain', 'round', 'circle', 'disabled', 'theme']
  }

  /**
   * Callback when the component get created.
   */
  connectedCallback () {
    if (this.shadowRoot.querySelector('p') !== null) {
      this.shadowRoot.querySelector('p').textContent = this.textContent
    }
    if (!this.hasAttribute('size')) {
      this.setAttribute('size', 'default')
    }
    if (!this.hasAttribute('type')) {
      this.setAttribute('type', 'default')
    }
    console.log('Component connected!')
  }

  /**
   * Callback when the component get disconnected.
   */
  disconnectedCallback () {
    console.log('Component disconnect!')
  }

  /**
   * Getter for type attribute.
   */
  get type () {
    return this.getAttribute('type')
  }

  /**
   * Setter for type attribute.
   * @param {string} newVal - The new value for type
   */
  set type (newVal) {
    this.setAttribute('type', newVal)
  }

  /**
   * Getter for size attribute.
   */
  get size () {
    return this.getAttribute('size')
  }

  /**
   * Setter for size attribute.
   * @param {string} newVal - The new value for size
   */
  set size (newVal) {
    this.setAttribute('size', newVal)
  }

  /**
   * Getter for plain attribute.
   */
  get plain () {
    return this.hasAttribute('plain')
  }

  /**
   * Setter for plain attribute.
   * @param {string} newVal - The new value for plain
   */
  set plain (newVal) {
    if (newVal) {
      this.setAttribute('plain', '')
    } else {
      this.removeAttribute('plain')
    }
  }

  /**
   * Getter for round attribute.
   */
  get round () {
    return this.hasAttribute('round')
  }

  /**
   * Setter for round attribute.
   * @param {string} newVal - The new value for round
   */
  set round (newVal) {
    if (newVal) {
      this.setAttribute('round', '')
    } else {
      this.removeAttribute('round')
    }
  }

  /**
   * Getter for circle attribute.
   */
  get circle () {
    return this.hasAttribute('circle')
  }

  /**
   * Setter for circle attribute.
   * @param {string} newVal - The new value for circle
   */
  set circle (newVal) {
    if (newVal) {
      this.setAttribute('circle', '')
    } else {
      this.removeAttribute('circle')
    }
  }

  /**
   * Getter for disabled attribute.
   */
  get disabled () {
    return this.hasAttribute('disabled')
  }

  /**
   * Setter for disabled attribute.
   * @param {string} newVal - The new value for disabled
   */
  set disabled (newVal) {
    if (newVal) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  /**
   * Callback for when the supported attributes change its value.
   * Currently not using this since most of the logic can be handle in the css
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
   */
  attributeChangedCallback (attrName, oldVal, newVal) {
  }
}
window.customElements.define('button-component', ButtonComponent)
