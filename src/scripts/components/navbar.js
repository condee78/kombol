class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: inline;
          }
          nav {
            margin: 0px auto;
            padding: 5px 0;
            position: sticky;
            top: 0;
            display: flex;
            background-color: red;
            z-index: 100;
            transition-duration: 0.7s;
          }
          nav .logo {
            text-align: center;
          }
          nav .menu {
            text-align: right;
            padding-right: 60px;
          }
          
          nav li {
            display: inline;
            list-style-type: none;
            margin-right: 20px;
          }
          nav a {
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
            color: inherit;
          }
          nav a:hover {
            color: #ff9a00;
          }
          nav a:active {
            color: #d47f00;
          }
          .flex-basis-25 {
            flex-basis: 25%;
          }
          .flex-basis-50 {
            flex-basis: 50%;
          }
          .flex-basis-75 {
            flex-basis: 75%;
          }
    </style>
    <nav id="nav">
        <div class="logo flex-basis-25">
          <img src="assets/img/logo-arole.png" />
        </div>
        <div class="menu flex-basis-75">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Event</a></li>
            <li><a href="#testimonial">About</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
