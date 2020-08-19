import "./club-item.js";

class ClubList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clubItems(clubItems) {
    this.clubItems = clubItems;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this.clubItems.forEach((clubItem) => {
      const clubItemElement = document.createElement("club-item");
      clubItemElement.clubItem = clubItem;
      this.shadowDOM.appendChild(clubItemElement);
    });
  }
}

customElements.define("club-list", ClubList);
