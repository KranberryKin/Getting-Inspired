import { BackgroundController } from "./Controllers/BackgroundController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { PageController } from "./Controllers/PageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  backgroundController = new BackgroundController()
  clockController = new ClockController()
  quoteController = new QuoteController()
  pageController = new PageController()
  weatherController = new WeatherController()
}

window["app"] = new App();
