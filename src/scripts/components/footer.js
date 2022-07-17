class Footer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){ 
       this.render();
    }

    render(){ 
        this.shadowDOM.innerHTML = `
        <style>
            ul {
                margin: 0 auto;
                display: inline-block;
            }
            
            li {
                display: inline-block;
                margin: 0 1em;
                font-size: 14px;
            }

            .logo {
                width: 50px;
                height: 50px;
            }
        </style>
        <img class="logo" src="./images/logo/circle-logo.png" alt="logo waroeng sakiki"><br>
        <ul>
            <li>copyright &copy; 2022 - Waroeng Sakiki</li>
        </ul>
        `;
    }
}

customElements.define("info-app", Footer); 



