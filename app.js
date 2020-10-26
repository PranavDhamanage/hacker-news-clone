import RouterHandler from "./modules/router.js";

class App {
  constructor() {
    console.log("inside app");
    new RouterHandler();
  }
}

new App();
