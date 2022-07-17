class AppBar extends HTMLElement {
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
            div {
                display: grid;
                grid-template-columns: 70% 30%;
                grid-template-rows: 50px;
                align-items: center;
                padding: 5px 24px;
            }
            div #left-bar{
                display: flex;
                padding: 0;
            }
            div .drawer-btn {
                width: 44px;
                padding: 8px 7px;
                margin-right: 16px;
                font-weight: bold;
                color: #141e16;
                background-color: transparent;
                border: 0; 
                display: none; 
                cursor: pointer;
            }
            div img {
                margin-right: 16px;
            }
            div nav ul li {
                list-style: none;
                display: inline;
                width: fit-content;
            }
            div nav ul li a {
                padding: 16px 24px;
                text-decoration: none;
                color: #141e16;
                width: fit-content;
                height: 44px;
            }
            @media screen and (max-width: 1200px) {
                #app-name {
                    font-size: 17px;
                }
                div .drawer-btn {
                    display: block; 
                }
                div nav {
                    position: fixed;
                    top: 59px;
                    left: 0;
                    background-color: white;
                    min-height: max-content;
                    width: 150px;
                    box-shadow: 4px 3px 15px -3px rgb(0 0 0 / 10%);
                    transform: translateX(-210px);
                    transition: transform 0.3s ease-out;
                    border-top-right-radius: 13px;
                    border-bottom-right-radius: 13px;
                }
                div nav.open {
                    transform: translateX(0);
                }
                div nav ul li,
                div nav ul li a {
                    display:block;
                }
                div nav ul li a {
                    padding: 5px 7px;
                    text-decoration: none; 
                    color: #141e16;
                    font-family: "Roboto", sans-serif;
                    width: fit-content;
                    height: 44px;
                }
            }
        </style>
        <div>
            <section id="left-bar">
                <button class="drawer-btn">☰</button>
                <h3 id="app-name">Waroeng Sakiki</h3>
            </section>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://gitlab.com/bahaque">About Us</a></li>
                </ul>
            </nav>
        </div>
        `;
        this.shadowRoot.querySelector('.drawer-btn').addEventListener('click', () => {
            this.shadowRoot.querySelector('nav').classList.toggle('open');
        })
    }
}

customElements.define("app-bar", AppBar); 

