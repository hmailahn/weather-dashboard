var cities = [];
var cityFormEl = document.querySelector("#city-form")
var cityInputEl = document.querySelector("#city");
var searchButtonEl = document.querySelector("#search-btn");
var weatherContainerEl = document.querySelector("#weather-container");
var fiveDayContainerEl = document.querySelector("#five-day-container");
var apiKey = "68ccdba8bfe95a1522bfe2ca35667316";


var formSubmitHandler = function (event) {
    // prevent page from refreshing
    event.preventDefault();

    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCity(city);
        getFiveDay(city);

        //clear old content
        cityInputEl.value = "";

    } else {
        alert("Please enter a city");
    }
    saveSearch();
    pastSearch(city);
};



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
                    displayWeather(data, city)
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to OpenWeather");
        });
};

var displayWeather = function () {
    //clear old content
    fiveDayContainerEl.textContent = "";
    weatherContainerEl.textContent = "";

}
var saveSearch = function () {

}

var pastSearch = function () {
    localStorage.setItem("cities", JSON.stringify(cities));
}

//add event listeners to forms
cityFormEl.addEventListener("submit", formSubmitHandler);
