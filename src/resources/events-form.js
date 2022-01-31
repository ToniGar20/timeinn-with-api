/*Import of events object and the eventsGeneration() function from events.js*/
import {eventsGeneration} from "../js/events.js";

/*
 * API and fetch to READ data!
 * Generating variable "events" with the information of the information saved
 * Used at function takeValuesForm()
 */
var eventsUrl = "http://localhost:3000/events";

async function getData(eventsUrl) {
    const response = await fetch(eventsUrl);
    return await response.json();
}

const events = await getData(eventsUrl);
console.log(events);

try{
    /* Display the form to add a new event */
    document.getElementById("button-add-event").addEventListener("click", function () {
        document.getElementById("events-form-container").style.display = "flex"
        /*Date picker for the date input with JQuery*/
        $(function () {
            $("#date").datepicker({
                dateFormat: "yy-mm-dd"
            });
        });
        /*Calling the function after the form display*/
        catchButtonDiv()
        document.getElementById("events-form").addEventListener("submit", takeValuesForm)

    })

    /*A button to close the form*/
    function catchButtonDiv() {
        let closeButton = document.getElementsByClassName("close");
        for (let i = 0; i < closeButton.length; i++) {
            closeButton[i].addEventListener("click", function () {
                document.getElementById("events-form-container").style.display = "none";
            });
        }
    }

    function takeValuesForm() {

        /* Taking the value of the inputs */
        let title = document.getElementById("title").value
        let place = document.getElementById("place").value
        let description = document.getElementById("description").value
        let price = document.getElementById("price").value
        let date = document.getElementById("date").value
        let id = Math.round(Math.random() * 1000000)

        /* Fetch to POST the new event at the API */
        fetch('http://localhost:3000/events', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                name: title,
                date: date,
                place: place,
                price: price,
                description: description,
                img: "./images/cinema-festival-vertical-poster-3451302.jpg"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))

        document.getElementById("events-form-container").style.display = "none";

        /*Showing the content of the confirmation*/
        setTimeout('document.getElementById("form-sended").style.display = \"flex\"')
        setTimeout('document.getElementById("form-sended").style.display = \"none\"', 1200)
        document.getElementById("events-form").reset();
        setTimeout('location.reload()', 2000);
    }
}catch (e){
    console.log("Failed to load")
}




