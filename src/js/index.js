import { DOMSelectors } from "./DOM";
import { genres } from "./genre";


const query = async function () {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/top/anime/1/airing`
      );
      const data = await response.json();
      data.top.forEach((anime) => {
        console.log(anime.top);
        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="anime-card">
            <div class="front">
             <img src="${anime.image_url}" alt="" class="image">
            </div> 
            <div class="back">     
              <div class="info">
               <h1 class="anime-title">${anime.title}</h1>
                <h2 class="anime-rating">Rating: ${anime.score}</h2>
              </div>
              <div class="information">
                <h3 class="anime-ep">Current Ep: ${anime.episodes}</h3>
                <h4 class="anime-date">Release Date: ${anime.start_date}</h4>
              </div>
              <div class="button">
               <input type="button" class="url"  onclick=window.open('${anime.url}','_blank') value="READ MORE!"></div>
            </div>  
         </div> `
        );
      });
    } catch (error) {
      console.log(error);
      alert("Hey, something went wrong!");
    }
  };
  query();

//Search Bar
//Filter Results 