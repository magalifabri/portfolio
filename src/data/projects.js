import Gitlery_screenshot_mobile from '../images/screenshots/Gitlery_screenshot_mobile.png';
import BananaPrint_screenshot_mobile from "../images/screenshots/BananaPrint_screenshot_mobile.png";
import CheckIt_screenshot_mobile from "../images/screenshots/CheckIt_screenshot_mobile.png";
import MagalisFavourites_screenshot_mobile from "../images/screenshots/MagalisFavourites_screenshot_mobile.png";
import WeatherApp_screenshot_mobile from "../images/screenshots/WeatherApp_screenshot_mobile.png";

import Gitlery_screenshot_desktop from "../images/screenshots/Gitlery_screenshot_desktop.png";
import BananaPrint_screenshot_desktop from "../images/screenshots/BananaPrint_screenshot_desktop.png";
import MagalisFavourites_screenshot_desktop from "../images/screenshots/MagalisFavourites_screenshot_desktop.png";
import WeatherApp_screenshot_desktop from "../images/screenshots/WeatherApp_screenshot_desktop.png";


const projects = [
    {
        name: "Gitlery",
        github: "https://github.com/magalifabri/gitlery",
        homepage: "https://gitlery.herokuapp.com/",
        mobileScreenshot: Gitlery_screenshot_mobile,
        desktopScreenshot: Gitlery_screenshot_desktop,
        description: "Gitlery checks the GitHub repositories for a given username and looks for a screenshot in each readme. With the found screenshots it creates an image gallery (a gitlery). Modal windows provide additional information on the repository's project.",
        features: [
            "ReactJS powered frontend",
            "Node.js + Express powered backend",
            "PostgreSQL database connection",
            "Requests data from GitHub API",
            "Web scraping with node-fetch and cheerio",
        ],
    },
    {
        name: "BananaPrint",
        github: "https://github.com/magalifabri/BananaPrint",
        homepage: "https://bananaprint.herokuapp.com/",
        mobileScreenshot: BananaPrint_screenshot_mobile,
        desktopScreenshot: BananaPrint_screenshot_desktop,
        description: "Mock site to connect people with printers to people without for little print jobs in exchange for something small, like a banana.",
        features: [
            "Laravel powered backend with extensive authentication capabilities",
            "Interactive map made with Mapbox API",
        ],
    },
    {
        name: "Check It",
        github: "https://github.com/magalifabri/react-intro",
        homepage: "https://check-it-app.netlify.app/",
        mobileScreenshot: CheckIt_screenshot_mobile,
        desktopScreenshot: "", // todo: add desktop screenshot
        description: "A simple to-do app with to-do list, calendar and notes.",
        features: [
            "ReactJS",
        ],
    },
    {
        name: "Magali's Favourites",
        github: "https://github.com/magalifabri/magalis-favourites",
        homepage: "https://m-fabri.herokuapp.com/magalis-favourites/",
        mobileScreenshot: MagalisFavourites_screenshot_mobile,
        desktopScreenshot: MagalisFavourites_screenshot_desktop,
        description: "A place for me to keep track of my favourite movies and to easily share recommendations with others.",
        features: [
            "Filtering",
            "Admin page for movie adding",
            "Php backend following MVC pattern",
            "PostgreSQL database connection",
            "Requests data from OMDb API and IMDb",
        ],
    },
    {
        name: "Weather App",
        github: "https://github.com/magalifabri/weather-app",
        homepage: "https://magalifabri.github.io/weather-app/",
        mobileScreenshot: WeatherApp_screenshot_mobile,
        desktopScreenshot: WeatherApp_screenshot_desktop,
        description: "A simple weather app that requests data from OpenWeather API, parses the data, and visualizes it",
        features: [
            "Charts powered by Chart.js",
        ],
    },
];

export default projects;
