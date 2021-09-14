import { BackgroundController } from "./Controllers/BackgroundController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { PageController } from "./Controllers/PageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  quoteController = new QuoteController()
  pageController = new PageController()
  weatherController = new WeatherController()
  clockController = new ClockController()
  backgroundController = new BackgroundController()
}

window["app"] = new App();
