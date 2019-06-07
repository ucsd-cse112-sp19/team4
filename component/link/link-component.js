var template = document.createElement('template')
template.innerHTML = `
<style>
  :host{

    /* Default Element Theme */
    --link-color-default: #606266;
    --link-color-primary: #409eff;
    --link-color-success: #67c23a;
    --link-color-warning: #e6a23c;
    --link-color-danger: #f56c6c;
    --link-color-info: #909399;
  }

  :host([theme='bootstrap']) {
    /* Common Theme */
    --link-color-default: #6c757d;
    --link-color-warning: #ffc107;
    --link-color-success: #28a745;
    --link-color-danger: #dc3545;
    --link-color-primary: #007bff;
    --link-color-info: #17a2b8;
  }


  /* Default css attribute for the link */
  :host {
  
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
  
  }

  /* CSS classes for type attribute */

  :host([type='default']){
    color: var(--link-color-default);
  }

  :host([type='primary']){
    color: var(--link-color-primary);
  }

  :host([type='success']){
    color: var(--link-color-success);
  }

  :host([type='warning']){
    color: var(--link-color-warning);
  }

  :host([type='danger']){
    color: var(--link-color-danger);
  }

  :host([type='info']){
    color: var(--link-color-info);
  }

  /* CSS classes for underline attribute */
  :host([underline='false']:hover) {
    text-decoration: none;
  }

  /* CSS classes for on hover*/
  :host(:hover) {
    text-decoration: underline;
  }

  /* CSS classes for disabled link*/
  :host([disabled]){
    pointer-events: none;
    opacity: 0.4;
  }

  /* CSS classes for link with icon */
  :host([icon]){
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }

  :host([icon='icon-delete']) a:before{
    content: url('../images/garbage.png');
  }

  :host([icon='icon-star-off']) a:before{
    content: url('../images/star.png');
  }

  :host([icon='icon-message']) a:before{
    content: url('../images/mail.png');
  }

  :host([icon='icon-check']) a:before{
    content: url('../images/tick.png');
  }

  :host([icon='icon-edit']) a:before{
    content: url('../images/edit.png');
  }

  :host([icon='icon-search']) a:before{
    content: url('../images/search.png');
  }

  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
  
  </style>
  <a></a>
`

/* global HTMLElement */
/**
 * This is a custom button component
 * Ported from https://element.eleme.io/#/en-US/component/button
 */
class LinkComponent extends HTMLElement {
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
    return ['type', 'href', 'underline', 'disabled', 'theme']
  }
  /**
   * Callback when the component get created.
   */
  connectedCallback () {
    if (this.shadowRoot.querySelector('a') !== null) {
      this.shadowRoot.querySelector('a').textContent = this.textContent
      if (this.hasAttribute('href')) {
        this.shadowRoot.querySelector('a').setAttribute('href', this.getAttribute('href'))
      }
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
   * Getter for href attribute.
   */
  get href () {
    return this.getAttribute('href')
  }

  /**
   * Setter for href attribute.
   * @param {string} newVal - The new value for href
   */
  set href (newVal) {
    this.setAttribute('href', newVal)
  }

  /**
   * Getter for underline attribute.
   */
  get underline () {
    return this.hasAttribute('underline')
  }

  /**
   * Setter for underline attribute.
   * @param {string} newVal - The new value for underline
   */
  set underline (newVal) {
    if (newVal) {
      this.setAttribute('underline', '')
    } else {
      this.removeAttribute('underline')
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
   * Getter for theme attribute.
   */
  get theme () {
    return this.hasAttribute('theme')
  }

  /**
   * Setter for theme attribute.
   * @param {string} newVal - The new value for theme
   */
  set theme (newVal) {
    if (newVal) {
      this.setAttribute('theme', '')
    } else {
      this.removeAttribute('theme')
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
window.customElements.define('link-component', LinkComponent)
