class ClubItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clubItem(clubItem) {
    this._clubItem = clubItem;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    :host {
        border: 1px solid #000;
        display: inline-block;
        padding: 20px;
      }

    </style>
    
    <img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">
           <div class="club-info">
               <h2>${this._club.name}</h2>
               <p>${this._club.description}</p>
           </div>`;
  }
}

customElements.define("club-item", ClubItem);
