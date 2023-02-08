import pro1 from "../assets/weather-screenshot.png";
import pro2 from "../assets/blog-screenshot.png"
import pro3 from "../assets/memory-screenshot.png"

const ProjectCardData =[
    {
        imgsrc: pro1,
        title:"Weather App",
        text:"A typecript React API project using: Weather API, ReactJS, Typescript and TailwindCss. Using OpenWeather API for getting the weather format for the application. Lat and longitude found using geocoding API.",
        view: "https://github.com/alast202/weather-app"
    },
    {
        imgsrc: pro2,
        title:"Blog App",
        text:"Using Fire base Authentication and FireStore Database for the application. useEffect() is used in Authenticating weather a user is loged in, if they are not logged in they are re-directed to the login page. Users can only delete their own posts.",
        view: "https://github.com/alast202/blogApp"
    },
    {
        imgsrc: pro3,
        title:"Memory Game",
        text:"I Used the same id for both cards to determine if they are matching. Cards randomize each time page is refreshed.",
        view: "https://github.com/alast202/memory-game"
    }
]

export default ProjectCardData;