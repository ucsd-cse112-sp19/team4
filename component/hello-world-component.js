class HelloWorldComponent extends HTMLElement {
    
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        var content = this.textContent;
        if (content === '')
            content = 'World'
        let elementContent = `<h1>Hello ${content}!</h1>`;
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
        console.log("get raindow")
        return this.hasAttribute('rainbow');
    }

    set rainbow(val){
        if (val) {
            console.log("Setting rainbow attribute")
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
        this.shadowRoot.querySelector("h1").style.background = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)";
    }
}
window.customElements.define('hello-world', HelloWorldComponent);