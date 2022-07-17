class Jumbotron extends HTMLElement {
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
            .hero {
                display: flex;
                align-items: center;
                text-align: center;
                top: 67px;
                width: 100%;
                min-height: 380px;
                background-image: url("./images/heros/hero-image_4.jpg");
                background-position: center;
                background-color: rgb(83, 172, 210);
            }
            
            .hero__inner {
                margin: 0 auto;
                max-width: 800px;
                flex-direction: row;
            }
            
            .hero__title {
                color: #fff;
                font-weight: 500;
                font-size: 36px;
            }
            
            .hero__tagline {
                color: #fff;
                margin-top: 16px;
                font-size: 18px;
                font-weight: 300;
                text-decoration: none;
                cursor: pointer;
                background-color: rgb(213, 185, 114, 0.5);
                padding: 16px 24px;
                border-radius: 9px;
            }
        </style>
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title"><b>Find Your Taste Style</b></h1>
                <a href="#exploreto" class="hero__tagline">Explore to ...</a>
            </div>
        </div>
        `;
    }
}

customElements.define("hero-title", Jumbotron); 



