/*Import of events object and the eventsGeneration() function from events.js*/
import {events} from "../js/objects.js";
import {eventsGeneration} from "../js/events.js";

try{
    /*Display the form to add a new event*/
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
                console.log("Hola")
                document.getElementById("events-form-container").style.display = "none";
            });
        }
    }

    function takeValuesForm() {

        /*Taking the value of the inputs*/
        let title = document.getElementById("title").value
        let place = document.getElementById("place").value
        let description = document.getElementById("description").value
        let price = document.getElementById("price").value
        let date = document.getElementById("date").value
        let id = Math.round(Math.random() * 1000000)
        /*Pushing the fields into events array with object json format*/
        events.push({
            id: id, name: title, date: date, place: place,
            price: price, description: description, img: "./images/cinema-festival-vertical-poster-3451302.jpg"
        })
        /*Calling eventsGeneration() with the new ones*/
        eventsGeneration(events.length)

        document.getElementById("events-form-container").style.display = "none";

        /*Showing the content of the confirmation*/
        setTimeout('document.getElementById("form-sended").style.display = \"flex\"')
        setTimeout('document.getElementById("form-sended").style.display = \"none\"', 2500)
        document.getElementById("events-form").reset()


    }
}catch (e){
    console.log("Failed to load")
}




