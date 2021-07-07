/*
    weaher.js, javascript file is responsible for changes and initializations on the events page
*/

// global variables using for api calls
const url = "https://api.openweathermap.org/data/2.5/";
const apiKey = "c2831519d4ac853bd5ddfc5ffc3595f0";
const defUrl = "https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=c2831519d4ac853bd5ddfc5ffc3595f0&units=metric"



// ready function
$(document).ready(function () {

    // find city object
    const city = document.getElementById("eventLocation");

    /*  
        add a event listener to focusout
        I used event listener to change weather after entered city
        When the event occurs weather will be changed if the user entered valid city name
     */
    city.addEventListener('focusout', (event) => {
        var query = url + "weather?q=" + city.value + "&appid=" + apiKey + "&units=metric";
        if (city.value != "") {
            getWeather(query);
        }

    });
    /*
        To trigger datepicker Jquery plugin 
    */
    $(function () {
        $("#datepicker").datepicker({
            dateFormat: 'yy-mm-dd',

            // add to onSelect parameter to change weather dynamically
            // when the user select a date and the date is on following days change weather if selected date is in 7 days from now
            onSelect: function (dateText) {
                //console.log(dateText);
                var query = url + "weather?q=" + city.value + "&appid=" + apiKey + "&units=metric";
                getDaily(query, dateText);
            }
        });;
    });

    // when the page is loaded change the weather with default query
    getWeather(defUrl);
    var today = new Date();
    setDateToWeatherPlugin(today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());

})


const getDaily = (query, dateText) => {
    // get json from openweathermap and find lat and lon values which entered city
    // lat and lon values is using for Geographical coordinates (latitude, longitude)
    // we need lat and lon values because if a user chooses the next days from the calendar
    json = JSON.parse(getValue(query));
    var lat = json.coord.lat;
    var lon = json.coord.lon;


    // create new query to api to find selected date temperature values, that api allows us to get only 7 days values from now
    var newQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current&appid=" + apiKey + "&units=metric";

    // read json values
    var jsonDaily = JSON.parse(getValue(newQuery));

    // create a date to find difference between today and selected date from calender
    var today = new Date();

    // concat them
    var newDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    /*    
        after split the values data will be like
        date[0] = year
        date[1] = month
        date[2] = day        
    */
    var actualDate = newDate.split('-');
    var selectedDate = dateText.split('-');

    // check conditions if selected date is not in the json file, 
    // json file contains only 7 days values from now
    if (selectedDate[0] != actualDate[0]) {
        //alert("Weather not found for the date you selected, but you can still create an action");
        setDateToWeatherPlugin(dateText, 1);
        return;
    }
    if (parseInt(selectedDate[1]) != parseInt(actualDate[1])) {
        if (parseInt(selectedDate[1] - 1) != parseInt(actualDate[1])) {
            //alert("Weather not found for the date you selected, but you can still create an action");
            setDateToWeatherPlugin(dateText, 1);
            return;
        }
    }
    else {
        if (parseInt(selectedDate[2]) - parseInt(actualDate[2]) > 7 || parseInt(selectedDate[2]) - parseInt(actualDate[2]) < 0) {
            //alert("Weather not found for the date you selected, but you can still create an action");
            setDateToWeatherPlugin(dateText, 1);
            return;
        }
    }

    // created variable for to find selected day values from json
    var findDay = selectedDate[2] - actualDate[2];

    // find heading object and set its text with temperature that coming from JSON text
    let temperature = document.getElementById("heading");
    temperature.innerText = Math.round(jsonDaily.daily[findDay].temp.day) + "° C";

    // find status object in weather side
    let status = document.getElementById("status");
    status.innerText = jsonDaily.daily[findDay].weather[0].description;

    // get icon based on weather and set to the object
    let icon = document.getElementById("wicon");
    let weatherIcon = jsonDaily.daily[findDay].weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    icon.src = iconUrl;

    // find sunrise and sunset values to change
    let sunrise = document.getElementById("sunrise");
    let d = new Date(parseInt(jsonDaily.daily[findDay].sunrise * 1000));
    sunrise.innerText = "Sunrise: " + d.getHours() + ":" + d.getMinutes();

    let sunset = document.getElementById("sunset");
    d = new Date(parseInt(jsonDaily.daily[findDay].sunset * 1000));
    sunset.innerText = "Sunrise: " + d.getHours() + ":" + d.getMinutes();

    setDateToWeatherPlugin(dateText, 0);



}

/*
    getValue function takes a query that include api url to get 
    json file with specific location and date
*/
function getValue(query) {
    var value = $.ajax({
        url: query,
        async: false,
        timeout: 3000,
        // if an error occurs
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Entered city could not found!");
        }
    }).responseText
    return value;
}
/*
    Ajax side to handle JSON file that caming from api
    after receive json, update the values in the page
    thanks to the updateWeather function
*/
const getWeather = (query) => {
    $.getJSON(query, function (json) {
        updateWeather(json);
    }
    )
        .fail(function () {
            alert("Entered city could not found!");
        })
}

/*
    updateWeather function takes an json data and changes necessary values that coming from json file in the events page
*/
const updateWeather = (result) => {
    // find city object and set its text with entered city name
    let city = document.querySelector('.city');
    city.innerText = result.name + "  " + result.sys.country;

    // find heading object and set its text with temperature that coming from JSON text
    let temperature = document.getElementById("heading");
    temperature.innerText = Math.round(result.main.temp) + "° C";

    let status = document.getElementById("status");
    status.innerText = result.weather[0].description;

    // get icon based on weather and set to the object
    let icon = document.getElementById("wicon");
    let weatherIcon = result.weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    icon.src = iconUrl;

    // find sunrise and sunset values to change
    let sunrise = document.getElementById("sunrise");
    let d = new Date(parseInt(result.sys.sunrise * 1000));
    sunrise.innerText = "Sunrise: " + d.getHours() + ":" + d.getMinutes();


    let sunset = document.getElementById("sunset");
    d = new Date(parseInt(result.sys.sunset * 1000));
    sunset.innerText = "Sunrise: " + d.getHours() + ":" + d.getMinutes();


}

const setDateToWeatherPlugin = (date, statusForFail) => {
    let weatherDate = document.getElementById("weatherDate");
    if (statusForFail == 1)
        weatherDate.innerText = date + " weather not found!";
    else
        weatherDate.innerText = date;
}