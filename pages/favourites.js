import Story from "../components/Story.js";
import store from "../store.js";
import checkFavourite from "../utils/check-favourite.js";
import view from "../utils/view.js";

export default function myFavourites() {
  const { favourites } = store.getState();
  const hasFavourites = favourites.length > 0;

  view.innerHTML = `
  <div>
    ${
      hasFavourites
        ? favourites
            .map((story) => {
              return Story({
                ...story,
                isFavourite: checkFavourite(favourites, story),
              });
            })
            .join("")
        : `<div class="favourites-placeholder"> 
             <span> Add some stories to favourites!</span>
          </div>`
    }
  </div>
    `;

  document.querySelectorAll(".favourites").forEach((favouriteButton) => {
    favouriteButton.addEventListener("click", function () {
      console.log("in click");
      const story = JSON.parse(this.dataset.story);
      const isFavourited = checkFavourite(favourites, story);
      store.dispatch({
        type: isFavourited ? "REMOVE_FAVOURITE" : "ADD_FAVOURITE",
        payload: { favourite: story },
      });
      myFavourites();
    });
  });
}
