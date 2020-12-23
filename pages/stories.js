import view from "../utils/view.js";
import baseUrl from "../utils/base-url.js";
import Story from "../components/Story.js";
import store from "../store.js";
import checkFavourite from "../utils/check-favourite.js";

export default async function allStories(path) {
  const { favourites } = store.getState();
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  console.log(stories);
  console.log(favourites);

  view.innerHTML = `<div>
  ${
    hasStories
      ? stories
          .map((story, i) => {
            return Story({
              ...story,
              index: i + 1,
              isFavourite: checkFavourite(favourites, story),
            });
          })
          .join("")
      : "no stories"
  }
  </div>`;

  document.querySelectorAll(".favourites").forEach((favouriteButton) => {
    favouriteButton.addEventListener("click", async function () {
      console.log("in click");
      const story = JSON.parse(this.dataset.story);
      const isFavourited = checkFavourite(favourites, story);
      store.dispatch({
        type: isFavourited ? "REMOVE_FAVOURITE" : "ADD_FAVOURITE",
        payload: { favourite: story },
      });
      await allStories(path);
    });
  });
}

async function getStories(path) {
  const isHomeRoute = path === "/";
  const isNewRoute = path === "/new";
  if (isHomeRoute) {
    path = "/news";
  } else if (isNewRoute) {
    path = "/newest";
  }
  const response = await fetch(`${baseUrl}${path}`);
  const stories = response.json();
  return stories;
}

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
// to get to indivdual story -> /item/:itemId
