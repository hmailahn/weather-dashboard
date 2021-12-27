var cities = [];
var cityFormEl = document.querySelector("#city-form")
var cityInputEl = document.querySelector("#city");
var searchButtonEl = document.querySelector("#search-btn");
var weatherContainerEl = document.querySelector("#weather-container");
var cityDateEl = document.querySelector("#city-date");
var currentWeatherEl = document.querySelector("#current-weather")
var headerContainerEl = document.querySelector("header-container");
var fiveDayContainerEl = document.querySelector("#five-day-container");

var apiKey = "68ccdba8bfe95a1522bfe2ca35667316";

/// this should be good to go
var formSubmitHandler = function (event) {
    // prevent page from refreshing
    event.preventDefault();

    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCity(city);
        // getFiveDay(city);

        //clear old content
        cityInputEl.value = "";

    } else {
        alert("Please enter a city");
    }
    saveSearch();
    pastSearch(city);
};


/// this should be good to go 
var getCity = function (city) {
    //format the api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    //make a get request to url
    fetch(apiUrl)
        .then(function (response) {
            //request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(city, data)
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to OpenWeather");
        });
};

/// still in progrss
var displayWeather = function (city, data) {
    //clear old content
    // fiveDayContainerEl.textContent = ""; //should this be here or in formSubmit handler?
    // headerContainerEl.textContent = ""; //should this be here or in formSubmit handler?
    //header container needs City and date, tempm wind, humiditty, and uv index
    /// current.temp  current.dt current.humidity current.uvi
    //5 day-forecaset container needs 5 cards, date, icon, temp, wind, humidity
   
    ///container, then border, then stuff in container
   
    // weatherHeaderContainerEl.className = "weather-header-container";
    var titleEl = document.createElement("span");
    titleEl.textContent = name + timezone;
    cityDateEl.appendChild(titleEl);
   

}
var saveSearch = function () { //sjould be good
    localStorage.setItem("cities", JSON.stringify(cities));
}

var pastSearch = function () { //in progress
    //past search needs to be buttons under search bar of previos searches
}

var getFiveDay = function() {
    /// this will need to get the lat and lon of the city, make another API call with the lat and the lon of the city, and then can display the 5 day weather
    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
}

//add event listeners to forms
cityFormEl.addEventListener("submit", formSubmitHandler);




///still need:
// fiveday conatiner
//weather container
///saving cities