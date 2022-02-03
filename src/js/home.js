/* Importing function for event generation at homepage */
import {eventsGeneration} from "./events.js";
import {getCookie, setCookie} from "./helperfunctions.js";

/*
 * API and fetch to READ data!
 * Generating variables "news" and "movies" with the information of the JSON
 * Reading the endpoints /news and /movies
 */

// movies data endpoint
var moviesUrl = "http://localhost:3000/movies";

// async function with fetch and error handling
async function getMoviesData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
//Storing data when calling function with the saved endpoint
const movies = await getMoviesData(moviesUrl);
console.log(movies);

// Data of the second endpoint
var newsUrl = "http://localhost:3001/news";
let token = getCookie('loginToken');
let authHeaders = new Headers();
authHeaders.set('Authorization', 'Bearer ' +  token);
let authTokenSettings = { headers: authHeaders }

// async function with fetch and error handling
async function getNewsData(url, settings) {
    try {
        const response = await (fetch(url, settings));
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
//Storing data when calling function with the saved endpoint
const news = await getNewsData(newsUrl, authTokenSettings);
console.log(news);

//if function worked (arrays having any length), calling functions to draw the content
if(news.length !== undefined) {
    mostRecentNews(news)
    newsContentDisplay(news)
}

/*
 * A loop that inject the content of the array news in the HTML file
 */
function mostRecentNews (newsObject) {
    newsObject.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
}

function newsContentDisplay (newsObject) {
    let mainDivNews = document.getElementsByClassName("title-author-date");
    let description = document.getElementsByClassName("description-news");
    let authDate = document.getElementsByClassName("auth-date");

    for (let i = 0; i < 4; i++) {

        if (i === 0) {
            let salidaTitle = `<h2 class="heading-main-new">${news[i].title}</h2>`
            salidaTitle += `<p style="color: white; font-size: 1.4vmax">${news[i].author} - ${news[i].date}</p>`
            let salidaDescription = `<p class="p-description-main-new">${news[i].description}</p>`
            mainDivNews[i].innerHTML = salidaTitle
            description[i].innerHTML = salidaDescription
        } else {
            if (news[i].description.length > 40) {

                let salidaTitle = `<h2 class="heading-secondary-new">${news[i].title}</h2>`
                let salidaAuthDat = `<p class="p-auth-date-secondary-new">${news[i].author} - ${news[i].date}</p>`
                let salidaDescription = `<p class="p-description-secondary-new">${news[i].description}</p>`
                mainDivNews[i].innerHTML = salidaTitle
                description[i].innerHTML = salidaDescription
                authDate[i].innerHTML = salidaAuthDat
            }
        }
    }
}

let allEvents = document.getElementsByClassName("secondary-new")
for (let i = 0; i < allEvents.length; i++) {
    allEvents[i].addEventListener("mouseover", function () {
        allEvents[i].style = "box-shadow: 0px 0px 14px 8px rgba(255,255,255,0.47)";
    })

    allEvents[i].addEventListener("mouseout", function () {
        allEvents[i].style = "box-shadow";
    })
}


/**
 * Array sort and loop to display the content of the latest 6 movies added
 */

movies.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
});

for (let i = 0; i < 6; i++) {
    //Loading image
    let movieImg = document.getElementsByClassName("movie-img");
    movieImg[i].innerHTML = `<img src="images/cinema-movie.jpg" alt="cinema default img">`

    //Loading title
    let movieTitle = document.getElementsByClassName("movie-title");
    movieTitle[i].childNodes[1].innerHTML = movies[i].title;

    //Loading rating
    let movieRating = document.getElementsByClassName("movie-rating");
    let ratingValue = movies[i].rating.toString().split(".");
    for (let j = 0; j < parseInt(ratingValue[0]); j++) {
        let newStar = document.createElement("i");
        newStar.classList.add("fas", "fa-star");
        movieRating[i].appendChild(newStar);
    }
    if (parseInt(ratingValue[1]) === 5) {
        let newHalfStar = document.createElement("i");
        newHalfStar.classList.add("fas", "fa-star-half-alt");
        movieRating[i].appendChild(newHalfStar);
    }

    let emptyStarsToInclude = (5 - movies[i].rating).toString().split(".");
    for (let k = 0; k < parseInt(emptyStarsToInclude[0]); k++) {
        let emptyStar = document.createElement("i")
        emptyStar.classList.add("far", "fa-star");
        movieRating[i].appendChild(emptyStar);
    }

    //Loading description
    let moviePlayer = document.getElementsByClassName("movie-description");
    let tempChild = moviePlayer[i].childNodes[1];
    tempChild.innerHTML = movies[i].description;
}

/**
 * Code to insert information of the current month into the calendar
 */
const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Juio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Extraction of data of the current date
let now = new Date();
let currentDay = now.getDate(); // 1 to 31
let currentWeekDay = now.getDay(); // Array 0 to 6
let currentMonth = now.getMonth(); // Array 0 to 11
let currentYear = now.getFullYear(); // 4 digits

//Inserting month heading values
let dateTags = document.getElementsByClassName("date");
dateTags[0].innerHTML = `${weekDays[currentWeekDay]} ${currentDay}`;
dateTags[1].innerHTML = `${months[currentMonth]} ${currentYear}`;

//Drawing week-lines on the HTML calendar

//Function to get days of a month
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

//Information need for the current month
let daysInCurrentMonth = daysInMonth(currentMonth+1, currentYear);
let weeksToDisplay = ["first", "second", "third", "fourth", "fifth"];
let holder = new Date(currentYear, currentMonth, 1);
let firstWeekDayOfMonthPosition = holder.getDay();

//Counter for the iterations
let dayCounter = 1;
let weekCounter = 0;

//Content holder
let htmlInsertion = '';

//Looping until all days in the current month are filled into the calendar
while (dayCounter <= daysInCurrentMonth) {
    htmlInsertion += `<div class=${weeksToDisplay[weekCounter]}>`;
    weekCounter++;
    for (let i = 0; i < 7; i++) {
        if (i < firstWeekDayOfMonthPosition-1 && weekCounter === 1) {
            htmlInsertion += `<span class="last-month"></span>`;
        } else if (dayCounter === currentDay) {
            htmlInsertion += `<span class="active">${dayCounter}</span>`;
            dayCounter++;
        } else if (dayCounter > daysInCurrentMonth) {
            htmlInsertion += `<span class="next-month"></span>`;
        } else {
            htmlInsertion += `<span>${dayCounter}</span>`;
            dayCounter++;
        }
    }
    htmlInsertion += `</div>`;
}

//Injecting content into HTML
document.getElementById("week-display").innerHTML = htmlInsertion;

/**
 * Generation of the upcoming 3 events, importing the function from events.js
 */
eventsGeneration(3)
