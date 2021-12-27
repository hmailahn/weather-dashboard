var cities = [];
var cityFormEl = document.querySelector("#city-form")
var cityInputEl = document.querySelector("#city");
var searchButtonEl = document.querySelector("#search-btn");
var weatherContainerEl = document.querySelector("#weather-container");
var cityDateEl = document.querySelector("#city-date");

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
                    getDaily(data);
                    displayWeather(data);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to OpenWeather");
        });
};

/// use lat and lon to get 5 day forecast
var getDaily = function (data) {
    
    var lat = data.coord.lat
    var lon = data.coord.lon

    console.log(lat);
    console.log(lon);

    var apiUrlTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    fetch(apiUrlTwo)
        .then(function (response) {
            //request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);

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
 let row = document.querySelector ("#current-weather");
}


var saveSearch = function () { //sjould be good
    localStorage.setItem("cities", JSON.stringify(cities));
}

var pastSearch = function () { //in progress
    //past search needs to be buttons under search bar of previos searches
}

var getFiveDay = function () {
    /// this will need to get the lat and lon of the city, make another API call with the lat and the lon of the city, and then can display the 5 day weather
    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
}

//add event listeners to forms
cityFormEl.addEventListener("submit", formSubmitHandler);




///still need:
// fiveday conatiner
//weather container
///saving cities