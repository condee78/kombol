import "../components/search-bar.js";
import "../components/club-list.js";
import clubSample from "../data/club-sample.js";

const main = () => {
  const clubListElement = document.querySelector("club-list");

  clubListElement.clubItems = clubSample;
};

export default main;
