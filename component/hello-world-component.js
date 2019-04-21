class HelloWorldComponent extends HTMLElement {

    constructor(){
        super();
        var rainbow = "false";
        var language = "English";
        let shadowRoot = this.attachShadow({mode: 'open'});
        let elementContent = `<h1>Hello Web Component World!</h1>`;
        shadowRoot.innerHTML = elementContent;
    }
    static get observedAttributes() {
        return ['rainbow', 'language'];
    }

    connectedCallback() {
        console.log("Component connected!");       
    }

    disconnectedCallback() {
        console.log("Component disconnect!");
    }

    get rainbow() {
        return this.hasAttribute('rainbow');
    }

    set rainbow(val){
        if (val) {
            console.log("Setting rainbow attribute")
            this.style.background = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet);"
        } else {
            console.log("Resetting rainbow attribute")
        }
        this.toggleDrawer();
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        console.log(attrName);
        console.log(oldVal);
        console.log(newVal);
        if (oldVal != newVal){
            this.setAttribute('rainbow', 'true');
        }
        // this.style.text = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet);"
        // console.log(this.shadowRoot.querySelector("h1").style.color)
        // this.shadowRoot.querySelector("h1").style.color = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet);"
    }
}
window.customElements.define('hello-world', HelloWorldComponent);