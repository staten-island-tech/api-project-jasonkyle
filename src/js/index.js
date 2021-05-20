import { DOMSelectors } from "./";
import { genres } from "./genre";

const key = "";

const query = async function () {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/top/anime/1/airing`
      );
      const data = await response.json();
      console.log(data);
      data.results.forEach((anime) => {
        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="release">
          <img src="${anime.image_url}" alt="cover image" class="release">
          </div>
        <div class="infograph">
          <h1 class="anime-title">${anime.title}</h1>
          <h2 class="anime-rating">${anime.score}</h2>
          <h3 class="anime-ep">${anime.rank}<h3>
          <h4 class="anime-date"${anime.start_date}></h4>
          <h5 class="anime-genre">${anime.rank}</h5>`
        );
      });
    } catch (error) {
      console.log(error);
      alert("Hey, something went wrong!");
    
};
  query()};
