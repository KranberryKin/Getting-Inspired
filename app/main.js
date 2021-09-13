import { PageController } from "./Controllers/PageController.js";


class App {
  pageController = new PageController()
}

window["app"] = new App();
