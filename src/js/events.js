/*
 * API and fetch to READ data!
 * Generating variable "events" with the information of the information saved
 * Reading the endpoint
 *
 */
var eventsUrl = "http://localhost:3000/events";

async function getData(eventsUrl) {
    const response = await fetch(eventsUrl);
    return await response.json();
}

const events = await getData(eventsUrl);
console.log(events);

/* Event generation */
let eventsSection = document.getElementById("events")
let months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export function eventsGeneration(eventsLength) {
    events.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    eventsSection.innerHTML = ""
    /* A loop that generate content with the events objects */
    for (let i = 0; i < eventsLength; i++) {

        let date = events[i].date.split("-")

        /* Generation of the main div */
        let div = document.createElement("div")
        div.className = "general-content"
        div.id = events[i].id;

        /* Injecting an image with .innerHTML */
        let img = document.createElement("img")
        img.className = "img-event"
        img.src = events[i].img
        div.appendChild(img)

        /* Making the div that contains the title of the event */
        let divTitleIcons = document.createElement("div")
        divTitleIcons.className = "title"

        let title = document.createElement("h3")
        title.innerHTML = events[i].name
        divTitleIcons.appendChild(title)
        div.appendChild(divTitleIcons)

        /* A div with the icons of edit and delete */
        let divIcons = document.createElement("div")
        divIcons.className = "div-icons"
        divIcons.innerHTML += '<button class="edit-icon"' + ` id=${events[i].id}` + '><i class="fas fa-pen"/></button>';
        divIcons.innerHTML += '<button class="delete-icon"' + ` id=${events[i].id}` + '><i class="fas fa-trash"/></button>';
        div.appendChild(divIcons)

        /* Div that contains information of the event */
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

        /* Div that contains the calendar */
        let divCalendar = document.createElement("div")
        divCalendar.className = "div-calendar"
        divCalendar.innerHTML = "<i class='far fa-calendar'/>"

        let month = document.createElement("p")
        month.className = "month"
        month.innerHTML = months[date[1] - 1]
        divCalendar.appendChild(month)

        let day = document.createElement("p")
        day.className = "day"
        day.innerHTML = date[2]
        divCalendar.appendChild(day)
        div.appendChild(divCalendar)

        /* Append all the content that has generated to the semantic tag <section> */
        eventsSection.appendChild(div)
    }

    /* Edit and delete icon listeners */
    trashListener()
    penListener()
}

/* Delete event with listener */
function trashListener() {
    let trashButtons = document.getElementsByClassName("delete-icon");
    for (let i = 0; i < trashButtons.length; i++) {
        trashButtons[i].addEventListener("click", function () {

            // Getting URL with FETCH and using "id" of the event to generate the endpoint
            // Using DELETE method
            // No body required
            fetch('http://localhost:3000/events/' + trashButtons[i].id, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.status === 200) {
                        console.log("Deleted OK");
                    } else {
                        throw new Error(response.status)
                    }
                    response.json()
                });

            // Deleting entire div holder and the information displayed
            let parentsOfChild = document.getElementById("events");
            parentsOfChild.removeChild(this.parentNode.parentNode);
        })
    }
}

/* Edit event with listener */
function penListener() {
    let penButtons = document.getElementsByClassName("edit-icon");
    for (let i = 0; i < penButtons.length; i++) {
        penButtons[i].addEventListener("click", function () {
            let generalContents = document.getElementsByClassName("general-content")

            /* Set the form values like in the events objects */
            let newPrice = generalContents[i].childNodes[4].childNodes[0].textContent.replace(" €", "")
            document.getElementById("events-edit-form-container").style.display = "flex";
            document.getElementById("title2").value = generalContents[i].childNodes[1].firstChild.textContent;
            document.getElementById("place2").value = generalContents[i].childNodes[3].childNodes[0].textContent;
            document.getElementById("description2").value = generalContents[i].childNodes[3].childNodes[1].textContent;
            document.getElementById("price2").value = newPrice;
            document.getElementById("date2").value = events[i].date;

            document.getElementById("events-edit-form").addEventListener("submit", function () {
                /* Taking the new values */
                let title = document.getElementById("title2").value;
                let place = document.getElementById("place2").value;
                let description = document.getElementById("description2").value;
                let price = document.getElementById("price2").value;
                let date = document.getElementById("date2").value;

                /* Replacing the old fields for the new ones */
                events[i].name = title;
                events[i].place = place;
                events[i].description = description;
                events[i].price = price;
                events[i].date = date;

                eventsGeneration(events.length)
                /* Hide the layout of the form */
                document.getElementById("events-edit-form-container").style.display = "none";
                /*Showing the content of the confirmation*/
                setTimeout('document.getElementById("form-sended").style.display = \"flex\"');
                setTimeout('document.getElementById("form-sended").style.display = \"none\"', 1200);
                document.getElementById("events-form").reset();
                // Reloading page
                setTimeout('location.reload()', 1000);

                console.log(penButtons[i].id);

                // Getting URL with FETCH
                // Fetch to PUT new event into URL
                fetch('http://localhost:3000/events/' + penButtons[i].id, {
                    method: 'PUT',
                    body: JSON.stringify({
                        name: title,
                        place: place,
                        description: description,
                        price: price,
                        date: date,
                        img: events[i].img
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(json => console.log(json))
            })

        })
    }
    let closeButton = document.getElementsByClassName("close");
    for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener("click", function () {
            document.getElementById("events-edit-form-container").style.display = "none";
        });
    }

}

eventsGeneration(events.length);