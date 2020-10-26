import view from "../utils/view.js";
import Story from "../components/Story.js";

export default async function stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
  console.log(stories);
  view.innerHTML = `<div>
  ${
    hasStories
      ? stories
          .map((story, i) => {
            return Story({ ...story, index: i + 1 });
          })
          .join("")
      : "no stories"
  }
  </div>`;
}

async function getStories(path) {
  const isHomeRoute = path === "/";
  const isNewRoute = path === "/new";
  if (isHomeRoute) {
    path = "/news";
  } else if (isNewRoute) {
    path = "/newest";
  }
  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = response.json();
  return stories;
}

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
// to get to indivdual story -> /item/:itemId
