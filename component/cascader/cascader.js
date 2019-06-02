var template = document.createElement('template')
template.innerHTML = `
  <head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  </head>
  <style>
    :host{
      height: 200px;
      padding: 30px 0;
      display: block;
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
    }
    .el-input_icon{
      width: 25px;
      line-height: 40px;
    }
    .el-input_child_icon{
      font-size: 14px;
      color: #bfcbd9;
      position: absolute;
      right: 15px;
      top: 11px;
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
      color: #606266;
      height: 34px;
      line-height: 1.5;
      box-sizing: border-box;
      cursor: pointer;
      outline: none;
      text-align: left;
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
      color: #409eff;
    }
  </style>
  <div style="position: relative">
    <span class="el-cascader">
      <div class="el-input">
        <input type="text" placeholder="Please select" class="el-input_inner">
          <span class="el-input_suffix">
            <i class="fas fa-angle-down el-input_icon"></i>
          </span>
      </div>
      <span class="el-cascader_label"></span>
    </span>
    <div class="el-cascader-menus el-popper" style="position: absolute; left: 2%; width: auto; height: auto;">
      <ul class="el-cascader-menu" style="display: none"></ul>
    </div>
  </div>
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
  constructor () {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
    this.cascader = this.shadowRoot.querySelector('.el-cascader')
    this.ul = this.shadowRoot.querySelector('.el-cascader-menu')
    this.activeOptions = []
    this.cascader.addEventListener('click', () => {
      this.toggleFocus()
      this.toggleMenu()
      this.setAttribute('shownMenu', this.ul)
    })
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
    this.menus = this.shadowRoot.querySelector('.el-cascader-menus')
    this.submenus = []
    this.submenu2s = []
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
      // eslint-disable-next-line no-undef
      if (option[i].children === undefined) {
        // eslint-disable-next-line no-undef
        newli.innerHTML = '<span>' + option[i].label + '</span>'
        newli.addEventListener('click', () => {
          this.activeOptions.push(newli.textContent)
          this.setUpInput()
        })
      } else {
        // eslint-disable-next-line no-undef
        newli.innerHTML = '<span>' + option[i].label + '</span> <i class="fas fa-angle-right el-input_child_icon"></i>'
        let newSubMenu = document.createElement('ul')
        newSubMenu.style.display = 'none'
        newSubMenu.classList.add('el-cascader-menu')
        // eslint-disable-next-line no-undef
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
}
window.customElements.define('cascader-component', CascaderComponent)
