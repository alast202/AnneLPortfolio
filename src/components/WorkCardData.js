import pro1 from "../assets/weather-screenshot.png";
import pro2 from "../assets/blog-screenshot.png";
import pro3 from "../assets/memory-screenshot.png";
import pro4 from "../assets/chat-app-screenshot.png";
import pro5 from "../assets/snake-game-screenshot.png";
import pro6 from "../assets/ecommerce-screenshot.png";

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
    },
    {
        imgsrc: pro4,
        title:"Chat app",
        text:"Chat app using ReactJS and NodeJS. User can choose their room name and another user must use the same room name to join.",
        view: "https://github.com/alast202/chat-app"
    },
    {
        imgsrc: pro5,
        title:"Snake Game",
        text:"The game features a snake that moves around the screen, attempting to eat apples and grow in length.",
        view: "https://github.com/alast202/snake-game"
    },
    {
        imgsrc: pro6,
        title:"Ecommerce App",
        text:"Simple UI of ecommerce webpage and add to cart function using React.",
        view: "https://github.com/alast202/ecommerce-app"
    },

    
]

export default ProjectCardData;