import stories from "../pages/stories.js";
import Item from "../pages/item.js";
import myFavourites from "../pages/favourites.js";

const router = new Navigo(null, true, "#");
console.log(router);

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: stories },
      { path: "/new", page: stories },
      { path: "/ask", page: stories },
      { path: "/show", page: stories },
      { path: "/item", page: Item },
      { path: "/favourites", page: myFavourites },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
