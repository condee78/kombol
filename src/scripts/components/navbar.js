class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = "<div>test navbar</div";
  }
}

customElements.define("nav-bar", NavBar);
