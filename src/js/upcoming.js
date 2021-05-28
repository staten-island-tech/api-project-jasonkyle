import { DOMSelectors } from "./DOM";


const query = async function () {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/top/anime/1/upcoming`
      );
      const data = await response.json();
      data.top.forEach((anime) => {
        console.log(anime.top);
        DOMSelectors.second.insertAdjacentHTML(
          "beforeend",
          `<div class="anime-card">
            <div class="front">
             <img src="${anime.image_url}" alt="" class="image">
            </div> 
            <div class="back">     
              <div class="info">
               <h1 class="anime-title">${anime.title}</h1>
              </div>
              <div class="information">
                <h3 class="anime-ep">Type: ${anime.type}</h3>
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

