import { DOMSelectors } from "./";
import { genres } from "./genre";

const key = "";

const query = async function () {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/anime/1/episodes/2`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      alert("Hey, something went wrong!");
    }
  };
  query();

//Search Bar
//Filter Results 
