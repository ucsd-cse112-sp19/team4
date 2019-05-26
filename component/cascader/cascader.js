var template = document.createElement('template')
template.innerHTML = `
	<style>
	</style>
	<select class="cascader">
	</select>
`


/* global HTMLElement */
/**
 * This is a custom button component
 * Ported from https://element.eleme.io/#/en-US/component/cascader
 */
class CascaderComponent extends HTMLElement {
  /**
   * Cascader constructor.
   * @constructor
   */
  constructor() {
	super()
	this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
	this.cascader = this.shadowRoot.querySelector('select')
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['options']
  }


  /**
   * Callback when the component get created.
   */
  connectedCallback () {
	//this.addEventListener('click', this._onClick);
	if(!this.hasAttribute('options')){
		this.setAttribute('options','[Please select]')
	}
	var options = this.getAttribute('options');
	var x;
	for(x in options){
		var option = document.createElement('option');
		console.log(x);
		options.text = x;
		this.cascader.add(option);
	}
	console.log('Component connected!')
  }

 /**
   * Callback when the component get disconnected.
   */
  disconnectedCallback () {
	console.log('Component disconnect!')
  }
}
window.customElements.define('cascader-component', CascaderComponent)