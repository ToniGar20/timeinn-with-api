/* Importing the objects for the content */
import {events} from './objects.js';

/* API and fetch */
/**
 * Generating data from url with async fetch function
 * Then, storing data into const eventsData
 *
 */
var eventsUrl = "http://localhost:3000/events";

async function getData(eventsUrl) {
    const response = await fetch(eventsUrl);
    return await response.json();
}

const eventsData = await getData(eventsUrl);
console.log(eventsData);

/* A listener that is called when the page is loaded for the first time */
window.addEventListener("load", function () {
    if (window.location.href === "../events.html"){
        eventsGeneration(events.length)
    }
})


let eventsSection = document.getElementById("events")
let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export function eventsGeneration(eventsLength) {
    console.log("Hola")
    events.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    eventsSection.innerHTML = ""
    /*A loop that generate content with the events objects*/
    for (let i = 0; i < eventsLength; i++) {

        let date = events[i].date.split("-")

        /*Generation of the main div*/
        let div = document.createElement("div")
        div.className = "general-content"

        /*Injecting an image with .innerHTML*/
        let img = document.createElement("img")
        img.className = "img-event"
        img.src = events[i].img
        div.appendChild(img)

        /*Making the div that contains the title of the event*/
        let divTitleIcons = document.createElement("div")
        divTitleIcons.className = "title"

        let title = document.createElement("h3")
        title.innerHTML = events[i].name
        divTitleIcons.appendChild(title)
        div.appendChild(divTitleIcons)

        /* A div with the icons of edit and delete*/
        let divIcons = document.createElement("div")
        divIcons.className = "div-icons"
        divIcons.innerHTML += '<button  class="button-icon"><i class="fas fa-pen"/></button>'
        divIcons.innerHTML += '<button  class="button-icon"><i class="fas fa-trash"/></button>'
        div.appendChild(divIcons)

        /*Div that contains information of the event*/
        let divGeneralText = document.createElement("div")
        divGeneralText.className = "eventsText"

        let place = document.createElement("p")
        place.className = "place"
        place.innerHTML = events[i].place
        divGeneralText.appendChild(place)

        let description = document.createElement("p")
        description.className = "description"
        description.innerHTML = events[i].description
        divGeneralText.appendChild(description)
        div.appendChild(divGeneralText)

        /*An span with the price of the event*/
        let price = document.createElement("span")
        price.className = "price"
        price.innerHTML = events[i].price + " €"
        div.appendChild(price)

        /*Div that contains the calendar*/
        let divCalendar = document.createElement("div")
        divCalendar.className = "div-calendar"
        divCalendar.innerHTML = "<i class='far fa-calendar'/>"

        let month = document.createElement("p")
        month.className = "month"
        month.innerHTML = meses[date[1] - 1]
        divCalendar.appendChild(month)

        let day = document.createElement("p")
        day.className = "day"
        day.innerHTML = date[2]
        divCalendar.appendChild(day)
        div.appendChild(divCalendar)

        /*Append all the content that has generated to the semantic tac <section>*/
        eventsSection.appendChild(div)
    }

    /*Call icons listeners*/
    trashListener()
    penListener()
}

/*Listener to delete events*/
function trashListener() {
    let trashButtons = document.getElementsByClassName("fa-trash")
    for (let i = 0; i < trashButtons.length; i++) {
        trashButtons[i].addEventListener("click", function () {
            let parentChilds = document.getElementById("events")
            console.log(this.parentNode.parentNode.parentNode)
            parentChilds.removeChild(this.parentNode.parentNode.parentNode)
        })
    }
}


function penListener() {
    let penButtons = document.getElementsByClassName("fa-pen")
    for (let i = 0; i < penButtons.length; i++) {
        penButtons[i].addEventListener("click", function () {
            let generalContents = document.getElementsByClassName("general-content")

            /*Set the form values like in the events objects*/
            let newPrice = generalContents[i].childNodes[4].childNodes[0].textContent.replace("€", "")
            document.getElementById("events-edit-form-container").style.display = "flex"
            document.getElementById("title2").value = generalContents[i].childNodes[1].firstChild.textContent
            document.getElementById("place2").value = generalContents[i].childNodes[3].childNodes[0].textContent
            document.getElementById("description2").value = generalContents[i].childNodes[3].childNodes[1].textContent
            document.getElementById("price2").value = newPrice
            document.getElementById("date2").value = events[i].date

            document.getElementById("events-edit-form").addEventListener("submit", function () {
                /*Taking the new values*/
                let title = document.getElementById("title2").value
                let place = document.getElementById("place2").value
                let description = document.getElementById("description2").value
                let price = document.getElementById("price2").value
                let date = document.getElementById("date2").value
                let id = Math.round(Math.random() * 1000000)

                /*Replacing the old fields for the new ones*/
                events[i].name = title
                events[i].place = place
                events[i].description = description
                events[i].price = price
                events[i].date = date
                events[i].id = id
                console.log(events[i])

                eventsGeneration(events.length)
                /*Hide the layout of the form*/
                document.getElementById("events-edit-form-container").style.display = "none"
                /*Showing the content of the confirmation*/
                setTimeout('document.getElementById("form-sended").style.display = \"flex\"')
                setTimeout('document.getElementById("form-sended").style.display = \"none\"', 1200)
                document.getElementById("events-form").reset()
            })

        })
    }
    let closeButton = document.getElementsByClassName("close");
    for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener("click", function () {
            console.log("Hola")
            document.getElementById("events-edit-form-container").style.display = "none";
        });
    }
}

eventsGeneration(eventsData.length);