import { PageController } from "./Controllers/PageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  quoteController = new QuoteController()
  pageController = new PageController()
  weatherController = new WeatherController()
}

window["app"] = new App();
