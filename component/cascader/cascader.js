var template = document.createElement('template')
template.innerHTML = `
  <style>
    :host{

      /* Default Element Theme */
      --btn-color-default: #606266;
      --btn-color-warning: #e6a23c;
      --btn-color-success: #67c23a;
      --btn-color-danger: #f56c6c;
      --btn-color-primary: #409eff;
      --btn-color-info: #909399;
      --btn-default-hover: rgba(64, 158, 255, 0.15);
      --btn-default-border: #dcdfe6;
      --btn-bg-primary-plain: rgba(64, 158, 255, 1.0);

    }
    :host{
      display: block;
    }
    /* CSS classes for type attribute */
    :host([type='default']) ::placeholder{
      color: var(--btn-color-default);
    }
    :host([type='default']) .el-cascader-menu_item{
      color: var(--btn-color-default);
    }
    :host([type='primary']) ::placeholder{
      color: var(--btn-color-primary);
    }
    :host([type='primary']) .el-cascader-menu_item{
      color: var(--btn-color-primary);
    }
    :host([type='success']) ::placeholder{
      color: var(--btn-color-success);
    }
    :host([type='success']) .el-cascader-menu_item{
      color: var(--btn-color-success);
    }
    :host([type='danger']) ::placeholder{
      color: var(--btn-color-danger);
    }
    :host([type='danger']) .el-cascader-menu_item{
      color: var(--btn-color-danger);
    }
    :host([type='info']) ::placeholder{
      color: var(--btn-color-info);
    }
    :host([type='info']) .el-cascader-menu_item{
      color: var(--btn-color-info);
    }
    :host([type='warning']) ::placeholder{
      color: var(--btn-color-warning);
    }
    :host([type='warning']) .el-cascader-menu_item{
      color: var(--btn-color-warning);;
    }
    /*for Bootstrap*/
    :host([theme='bootstrap'][type='default']) ::placeholder{
      color: #6c757d;
    }
    :host([theme='bootstrap'][type='default']) .el-cascader-menu_item{
      color: #6c757d;
    }
    :host([theme='bootstrap'][type='primary']) ::placeholder{
      color: #007bff;
    }
    :host([theme='bootstrap'][type='primary']) .el-cascader-menu_item{
      color: #007bff;
    }
    :host([theme='bootstrap'][type='success']) ::placeholder{
      color: #28a745;
    }
    :host([theme='bootstrap'][type='success']) .el-cascader-menu_item{
      color: #28a745;
    }
    :host([theme='bootstrap'][type='danger']) ::placeholder{
      color: #dc3545;
    }
    :host([theme='bootstrap'][type='danger']) .el-cascader-menu_item{
      color: #dc3545;
    }
    :host([theme='bootstrap'][type='info']) ::placeholder{
      color: #17a2b8;
    }
    :host([theme='bootstrap'][type='info']) .el-cascader-menu_item{
      color: #17a2b8;
    }
    :host([theme='bootstrap'][type='warning']) ::placeholder{
      color: #ffc107;
    }
    :host([theme='bootstrap'][type='warning']) .el-cascader-menu_item{
      color: #ffc107;
    }
    .el-cascader{
      width: 222px;
      display: inline-block;
      position: relative;
      font-size: 14px;
      cursor: pointer;
      line-height: 40px
    }
    .el-input{
      position: relative;
      font-size: 14px;
      display: inline-block;
      width: 100%;
      cursor: pointer;
    }
    .el-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      outline: none;
      padding: 0 30px 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }
    .el-input_suffix{
      height: 100%;
      right: 5px;
      top: 0;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      pointer-events: none;
      position: absolute;
      margin-right: 10px;
    }
    .el-input_icon{
      width: 16px;
      line-height: 40px;
      text-align: center;
      margin: 1em 0;
    }
    .el-input_child_icon{
      position: absolute;
      right: 15px;
      top: 11px;
      width: 16px;
      line-height: 40px;
      text-align: center;
    }
    .el-input_icon::after{
      content: "";
      height: 100%;
      width: 0;
      display: inline-block;
      vertical-align: middle;
    }
    .el-cascader_label{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      padding: 0 25px 0 15px;
      color: #606266;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      box-sizing: border-box;
      cursor: pointer;
      text-align: left;
      font-size: inherit;
    }
    .el-popper{
      border-width: 6px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
    }
    .el-cascader-menus{
      white-space: nowrap;
      background: #fff;
      border: 1px solid #e4e7ed;
      border-radius: 2px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .el-cascader-menu{
      display: inline-block;
      vertical-align: top;
      height: 204px;
      overflow: auto;
      background: #fff;
      box-sizing: border-box;
      margin: 0;
      padding: 6px 0;
      min-width: 160px;
      border-right: 1px solid #e4e7ed
    }
    .el-cascader-menu_item{
      font-size: 14px;
      padding: 8px 20px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 34px;
      line-height: 1.5;
      box-sizing: border-box;
      cursor: pointer;
      outline: none;
      text-align: left;
      color: #606266;
    }
    .el-cascader-menu_item span{
      padding-right: 10px;
      font-weight: 400;
    }
    .is-focus{
      border-color: #409eff;
    }
    .is-active{
      background-color: #f5f7fa;
    }
  </style>
  <div style="position: relative;">
    <span class="el-cascader">
      <div class="el-input">
        <input type="text" placeholder="Please select" class="el-input_inner">
          <span class="el-input_suffix">
            <img src="images/angle-down-24.png" class="el-input_icon">
          </span>
      </div>
      <span class="el-cascader_label"></span>
    </span>
    <div class="el-cascader-menus el-popper" style="position: absolute; left: 2%; width: auto; height: auto;">
      <ul class="el-cascader-menu" style="display: none"></ul>
    </div>
  </div>
`

const bootstrapTheme = {
  /* Bootstrap Theme */
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  default: '#6c757d',
  black: '#fff'
}

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
  constructor () {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
    this.cascader = this.shadowRoot.querySelector('.el-cascader')
    this.ul = this.shadowRoot.querySelector('.el-cascader-menu')
    this.activeOptions = []
    this.cascader.addEventListener('click', () => {
      this.toggleFocus()
      this.toggleMenu()
    })
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['options', 'type', 'onchange', 'value']
  }

  /**
   * Callback when the component get created.
   */
  connectedCallback () {
    this.menus = this.shadowRoot.querySelector('.el-cascader-menus')
    this.submenus = []
    this.submenu2s = []
    if (!this.hasAttribute('type')) {
      this.setAttribute('type', 'default')
    }
    if (!this.hasAttribute('value')) {
      this.setAttribute('value', '')
    }
    for (let i = 1; i < 10; i++) {
      if (this.getAttribute('option') === ('options' + i)) {
        // eslint-disable-next-line no-eval
        this.options = eval('options' + i)
        break
      }
    }

    this.addToSubMenu(this.options, this.ul, 0)

    for (let i = 0; i < this.submenus.length; i++) {
      this.menus.appendChild(this.submenus[i])
    }
    for (let i = 0; i < this.submenu2s.length; i++) {
      this.menus.appendChild(this.submenu2s[i])
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
   * Method used for toogle the 1st-level menus<br>
   */
  toggleMenu () {
    if (this.ul.style.display === 'none') {
      this.ul.style.display = 'inline-block'
    } else {
      const uls = this.shadowRoot.querySelectorAll('ul')
      for (let i = 0; i < uls.length; i++) {
        uls[i].style.display = 'none'
      }
    }
  }

  /**
   * Method used for toggle the focus.<br>
   */
  toggleFocus () {
    this.input = this.shadowRoot.querySelector('input')
    if (!this.input.classList.contains('is-focus')) {
      this.input.classList.add('is-focus')
    }
  }

  /**
   * Method to show the selected submenu in the 2nd level.<br>
   */
  showSubMenus (submenu) {
    var i = 0
    for (; i < this.submenus.length; i++) {
      if (this.submenus[i] === submenu) {
        this.submenus[i].style.display = 'inline-block'
      } else {
        this.submenus[i].style.display = 'none'
      }
    }
  }

  /**
   * Method to close all the submenu in the 2nd level.<br>
   */
  closeSubMenus () {
    for (let i = 0; i < this.submenus.length; i++) {
      this.submenus[i].style.display = 'none'
    }
  }

  /**
   * Method to show all the submenu in the 3rd level.<br>
   */
  closeSubMenu2s () {
    for (let i = 0; i < this.submenu2s.length; i++) {
      this.submenu2s[i].style.display = 'none'
    }
  }

  /**
   * Method to change text to the selected option.<br>
   */
  setUpInput () {
    this.shadowRoot.querySelector('input').placeholder = ''
    for (let i = 0; i < this.activeOptions.length; i++) {
      this.shadowRoot.querySelector('input').placeholder += this.activeOptions[i]
      if (i !== this.activeOptions.length - 1) {
        this.shadowRoot.querySelector('input').placeholder += '/ '
      }
    }
    this.value = this.activeOptions[0]
    this.closeSubMenus()
    this.closeSubMenu2s()
    this.activeOptions = []
    this.ul.style.display = 'none'
  }

  /**
   * Method to add the option to the new submenu.<br>
   */
  addToSubMenu (option, submenu, count) {
    for (let i = 0; i < option.length; i++) {
      let newli = document.createElement('li')
      if (option[i].children === undefined) {
        newli.innerHTML = '<span>' + option[i].label + '</span>'
        newli.addEventListener('click', () => {
          this.activeOptions.push(newli.textContent)
          this.setUpInput()
          if (this.hasAttribute('onchange')) {
            window[this.getAttribute('onchange')]()
          }
        })
      } else {
        newli.innerHTML = '<span>' + option[i].label + '</span> <img src="images/angle-right-24.png" class="el-input_child_icon">'
        let newSubMenu = document.createElement('ul')
        newSubMenu.style.display = 'none'
        newSubMenu.classList.add('el-cascader-menu')
        this.addToSubMenu(option[i].children, newSubMenu, count + 1)
        if (count === 0) {
          this.submenus.push(newSubMenu)
        } else {
          this.submenu2s.push(newSubMenu)
        }
        newli.addEventListener('click', () => {
          this.closeSubMenu2s()
          if (count === 0) {
            this.showSubMenus(newSubMenu)
          } else {
            newSubMenu.style.display = 'inline-block'
          }

          if (this.activeOptions.length === 2) {
            this.activeOptions.pop()
          }
          this.activeOptions.push(newli.textContent)
        })
      }
      newli.classList.add('el-cascader-menu_item')
      newli.addEventListener('mouseover', () => {
        newli.classList.add('is-active')
      })
      newli.addEventListener('mouseout', () => {
        newli.classList.remove('is-active')
      })
      submenu.appendChild(newli)
    }
  }

  handleTheme (theme) {
    if (theme === 'bootstrap') {
      var style = this.style
      style.setProperty('--btn-color-default', bootstrapTheme.default)
      style.setProperty('--btn-color-warning', bootstrapTheme.warning)
      style.setProperty('--btn-color-success', bootstrapTheme.success)
      style.setProperty('--btn-color-danger', bootstrapTheme.danger)
      style.setProperty('--btn-color-primary', bootstrapTheme.primary)
      style.setProperty('--btn-color-info', bootstrapTheme.info)
      style.setProperty('--text-color', bootstrapTheme.black)
      style.setProperty('--btn-default-border', bootstrapTheme.default)
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
    if (attrName === 'theme') {
      this.handleTheme(newVal)
    }
  }
}
window.customElements.define('cascader-component', CascaderComponent)
