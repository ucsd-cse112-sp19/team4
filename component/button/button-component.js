var template = document.createElement('template')
template.innerHTML = `
  <style>
    /* Default css attribute for the button */
    :host{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
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
      background-color: #409eff;
      border-color: #409eff;
    }
    :host([type='success']){
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }
    :host([type='warning']){
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
    }
    :host([type='danger']){
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
    }
    :host([type='info']){
      color: #fff;
      background-color: #909399;
      border-color: #909399;
    }
    :host([size='medium']){
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    /* CSS classes for size attribute */
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
      background-color: rgb(64, 158, 255, 0.15);
      color: #409eff;
      border: 1px solid rgb(64, 158, 255, 0.30);
    }
    /* CSS classes for on hover with specific button type */
    :host([type='warning']:hover) {
      color: #fff;
      background-color: rgb(230, 162, 60, 0.85);
      border-color: rgb(230, 162, 60, 0.85);
    }
    :host([type='danger']:hover) {
      color: #fff;
      background-color: rgb(245, 108, 108, 0.85);
      border-color: rgb(245, 108, 108, 0.85);
    }
    :host([type='info']:hover) {
      color: #fff;
      background-color: rgb(144, 147, 153, 0.85);
      border-color: rgb(144, 147, 153, 0.85);
    }
    :host([type='success']:hover) {
      color: #fff;
      background-color: rgb(103, 194, 58, 0.85);
      border-color: rgb(103, 194, 58, 0.85);
    }
    :host([type='primary']:hover) {
      color: #fff;
      background-color: rgb(64, 158, 255, 0.85);
      border-color: rgb(64, 158, 255, 0.85);
    }
    /* CSS classes when being clicked */
    :host(:active) {
      background-color: rgb(64, 158, 255, 0.15);
      color: #0077f3;
      border: 1px solid #0077f3;
    }
    /* CSS classes when being clicked for specific button type */
    :host([type='warning']:active) {
      color: #fff;
      background-color: #bd7b18;
      border-color: #bd7b18;
    }
    :host([type='danger']:active) {
      color: #fff;
      background-color: #f02424;
      border-color: #f02424;
    }
    :host([type='info']:active) {
      color: #fff;
      background-color: #6a6d73;
      border-color: #6a6d73;
    }
    :host([type='success']:active) {
      color: #fff;
      background-color: #488728;
      border-color: #488728;
    }
    :host([type='primary']:active) {
      color: #fff;
      background-color: #0077f3;
      border-color: #0077f3;
    }
    /* CSS classes for plain button */
    :host([plain]:hover) {
      background-color: #fff;
      color: #409eff;
      border: 1px solid #409eff;
    }
    :host([plain]:active) {
      background-color: #fff;
      color: #0077f3;
      border: 1px solid #0077f3;
    }
    :host([type='primary'][plain]) {
      color: rgb(64, 158, 255, 1.0);
      background-color: rgb(64, 158, 255, 0.15);
      border-color: rgb(64, 158, 255, 0.30);
    }
    :host([type='primary'][plain]:hover) {
      background-color: rgb(64, 158, 255, 1.0);
      color: #fff;
      border: 1px solid rgb(64, 158, 255, 1.0);
    }
    :host([type='primary'][plain]:active) {
      color: #fff;
      background-color: #0077f3;
      border-color: #0077f3;
    }
    :host([type='success'][plain]) {
      color: #67c23a;
      background-color: rgb(103, 194, 58, 0.15);
      border-color: rgb(103, 194, 58, 0.30);
    }
    :host([type='success'][plain]:hover) {
      background-color: #67c23a;
      color: #fff;
      border: 1px solid #67c23a;
    }
    :host([type='success'][plain]:active) {
      color: #fff;
      background-color: #488728;
      border-color: #488728;
    }
    :host([type='info'][plain]) {
      color: #909399;
      background-color: rgb(144, 147, 153, 0.15);
      border-color: rgb(144, 147, 153, 0.30);
    }
    :host([type='info'][plain]:hover) {
      background-color: #909399;
      color: #fff;
      border: 1px solid #909399;
    }
    :host([type='info'][plain]:active) {
      color: #fff;
      background-color: #6a6d73;
      border-color: #6a6d73;
    }    
    :host([type='danger'][plain]) {
      color: #f56c6c;
      background-color: rgb(245, 108, 108, 0.15);
      border-color: rgb(245, 108, 108, 0.30);
    }
    :host([type='danger'][plain]:hover) {
      background-color: #f56c6c;
      color: #fff;
      border: 1px solid #f56c6c;
    }
    :host([type='danger'][plain]:active) {
      color: #fff;
      background-color: #f02424;
      border-color: #f02424;
    }
    :host([type='warning'][plain]) {
      color: #e6a23c;
      background-color: rgb(230, 162, 60, 0.15);
      border-color: rgb(230, 162, 60, 0.30);
    }
    :host([type='warning'][plain]:hover) {
      background-color: #e6a23c;
      color: #fff;
      border: 1px solid #e6a23c;
    }
    :host([type='warning'][plain]:active) {
      color: #fff;
      background-color: #bd7b18;
      border-color: #bd7b18;
    }
    /* CSS classes for disabled button */
    :host([disabled]){
      border: 1px solid #999999;
      background-color: #cccccc;
      pointer-events: none;
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
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
    }
    :host([icon='icon-delete']){
      content: url('../images/garbage.png');
    }
    :host([icon='icon-star-off']){
      content: url('../images/star.png');
    }
    :host([icon='icon-message']){
      content: url('../images/mail.png');
    }
    :host([icon='icon-check']){
      content: url('../images/tick.png');
    }
    :host([icon='icon-edit']){
      content: url('../images/edit.png');
    }
    :host([icon='icon-search']){
      content: url('../images/search.png');
      padding: 12px;
      color: #fff;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
    }
    /* Source https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting */
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome and Opera */
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
    this.shadowRoot.querySelector('p').textContent = this.textContent
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['size', 'type', 'plain', 'round', 'circle', 'disabled']
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
    return this.getAttribute('plain')
  }

  /**
   * Setter for plain attribute.
   * @param {string} newVal - The new value for plain
   */
  set plain (newVal) {
    this.setAttribute('plain', newVal)
  }

  /**
   * Getter for round attribute.
   */
  get round () {
    return this.getAttribute('round')
  }

  /**
   * Setter for round attribute.
   * @param {string} newVal - The new value for round
   */
  set round (newVal) {
    this.setAttribute('round', newVal)
  }

  /**
   * Getter for circle attribute.
   */
  get circle () {
    return this.getAttribute('circle')
  }

  /**
   * Setter for circle attribute.
   * @param {string} newVal - The new value for circle
   */
  set circle (newVal) {
    this.setAttribute('circle', newVal)
  }

  /**
   * Getter for disabled attribute.
   */
  get disabled () {
    return this.getAttribute('disabled')
  }

  /**
   * Setter for disabled attribute.
   * @param {string} newVal - The new value for disabled
   */
  set disabled (newVal) {
    this.setAttribute('disabled', newVal)
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
