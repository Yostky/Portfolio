///This section changes the color of the nav elements
let sections = document.querySelectorAll('section');
let navLi = document.querySelectorAll('nav .ulContainer ul li a');
let divList = document.querySelectorAll('section .divBar')
let h1List = document.querySelectorAll('section h1');

window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach(section => {
        let height = section.clientHeight;
        let sectionTop = section.offsetTop;
        if(pageYOffset >= (sectionTop - height / 2)){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach(a => {
        a.classList.remove('edit');
        if(a.classList.contains(current)){
            a.classList.add('edit');
        }
    })

    divList.forEach(div => {
        if(div.classList.contains(current)){
            div.classList.add('border');
        }
    })

    h1List.forEach(h1 => {
        if(h1.classList.contains(current)){
            h1.classList.add('h1Edit');
        }
    })
})

// Sticky nav event listener
const nav_links = document.querySelector('.nav_links');
const navTop = nav_links.offsetTop;
window.addEventListener('scroll', ()=> {
    if(pageYOffset >= navTop) {
        nav_links.classList.add('navStick');
    } else {
        nav_links.classList.remove('navStick');
    }
});

//This section adds and removes animation classes form the hamburger menu
const hamburger = document.querySelector('.fa-bars');
const dropDown = document.querySelector('.dropdown-content');
const dropDownLink1 = document.querySelector('.dropDownLink1');
const dropDownLink2 = document.querySelector('.dropDownLink2');
const dropDownLink3 = document.querySelector('.dropDownLink3');
const dropDownLink4 = document.querySelector('.dropDownLink4');
hamburger.addEventListener('click', () => {
    dropDown.classList.toggle('burgerAnimation');
}) 
dropDownLink1.addEventListener('click', () => {
    dropDown.classList.toggle('burgerAnimation');
})
dropDownLink2.addEventListener('click', () => {
    dropDown.classList.toggle('burgerAnimation');
})
dropDownLink3.addEventListener('click', () => {
    dropDown.classList.toggle('burgerAnimation');
})
dropDownLink4.addEventListener('click', () => {
    dropDown.classList.toggle('burgerAnimation');
})
// This section allows the hourly weather to be dragged from side to side
let slidingDiv1 = document.querySelector('.innerSlider1');
let slidingDiv2 = document.querySelector('.innerSlider2');
let pressDown = false;
let startx;
let startY;
let scrolling;

const slideStart = (e, slidingDiv) => {
    pressDown = true;
    startx = e.pageX;
    scrolling = slidingDiv.scrollLeft;
    slidingDiv.style.cursor = 'grabbing';
}

const slideEnd = () => {
    pressDown = false;
    slidingDiv1.style.cursor = 'grab';
}

const slideMove = (e, slidingDiv)=>{
    if (!pressDown) return;
    e.preventDefault();
    const x = e.pageX - slidingDiv.offsetLeft;
    const movement = (x - startx) * 1.5;
    slidingDiv.scrollLeft = scrolling - movement;
}

////////////////////////////////////////
const slideUpStart = (e, slidingDiv) => {
    pressDown = true;
    startY = e.pageY;
    scrolling = slidingDiv.scrollTop;
}

const slideUpEnd = () => {
    pressDown = false;
}

const slideUpMove = (e, slidingDiv)=>{
    if (!pressDown) return;
    e.preventDefault();
    const y = e.pageY - slidingDiv.offsetTop;
    const vertScroll = (y - startY) * 1.5;
    slidingDiv.scrollTop = scrolling - vertScroll;
    if(slidingDiv.scrollHeight - Math.abs(slidingDiv.scrollTop) === slidingDiv.clientHeight){
        window.scrollBy(0, 5);
    } else if (slidingDiv.scrollTop === 0) {
        window.scrollBy(0, -5);
    }
}
// element.scrollHeight - Math.abs(element.scrollTop) === element.clientHeight

/////////////////////////////////////
slidingDiv1.addEventListener('mousedown', (e)=> {
    slideStart(e, slidingDiv1); 
})
slidingDiv1.addEventListener('mouseup', slideEnd);
slidingDiv1.addEventListener('mouseenter', ()=> {
    slidingDiv1.style.cursor = 'grab'
})
slidingDiv1.addEventListener('mouseleave', ()=> {
    pressDown = false;
})
slidingDiv1.addEventListener('mousemove', (e)=> {
    slideMove(e, slidingDiv1);
})

////////////////////////////////////
// I need to detect the top and bottom of the div, then move the screen 1px. This will call many times
// resulting in a smooth movement across the page.

///////////////////////////////////
slidingDiv1.addEventListener('pointerdown', (e)=> {
    slideStart(e, slidingDiv1); 
})
slidingDiv1.addEventListener('pointerup', slideEnd);
slidingDiv1.addEventListener('pointermove', (e)=> {
    slideMove(e, slidingDiv1);
})



///////////////////////////////////

slidingDiv2.addEventListener('mousedown', (e)=> {
    slideStart(e, slidingDiv2); 
})
slidingDiv2.addEventListener('mouseup', slideEnd);
slidingDiv2.addEventListener('mouseenter', ()=> {
    slidingDiv2.style.cursor = 'grab'
})
slidingDiv2.addEventListener('mouseleave', ()=> {
    pressDown = false;
})
slidingDiv2.addEventListener('mousemove', (e)=> {
    slideMove(e, slidingDiv2);
})

///////////////////

slidingDiv2.addEventListener('pointerdown', (e)=> {
    slideStart(e, slidingDiv2); 
})
slidingDiv2.addEventListener('pointerup', slideEnd);
slidingDiv2.addEventListener('pointermove', (e)=> {
    slideMove(e, slidingDiv2);
})
///////////////////

slidingDiv2.addEventListener('pointerdown', (e)=> {
    slideUpStart(e, slidingDiv2); 
})
slidingDiv2.addEventListener('pointerup', slideUpEnd);
slidingDiv2.addEventListener('pointermove', (e)=> {
    slideUpMove(e, slidingDiv2);
})

// Event listener for the search bar and submit button
let submit = document.querySelector('.weatherSubmit');
let searchBar = document.querySelector('.inputValue');
//Array of all the cities in the US with two words that make up the city name
let doubleWordCities = ["New York","New Hope","Ft. Valley","Ft. Drum","El Segundo","New Canaan",
"Coral Springs","St. Augustine","Lake Wales",'Great Neck','El Paso','El Rancho','Carson City',"St. Augustine",
"Staten Island","Forest Hills","Los Angeles","Miami Gardens","Staten Island","South Hampton","New Rochelle",
"Breton Woods",'Woods Hole',"Cape Coral","Daytona Beach","Marco Island","St. Augustine","Bedford Falls",
"Chula Vista","San Franscisco","Carol City","Santa Barbara","Chagrin Falls","Cape May"
,"Mt. Kisco","Sheepshead Bay","Coney Island","Staten Island","Mt. Dora","Muscle Shoals","Great Barrington","Glens Falls"
,"New Paltz","Hyde Park","Palm Bay","Miami Beach","North Miami","Miami Shores","West Hartford","Coral Gables","COCONUT CREEK"
,"Pompano Beach","Dania Beach","Santa Fe","Fountain Hill","Mt. Kisco","Saint Paul","West Egg","St. Petersburg","Port Arthur"
,"Port Chester","Daytona Beach","Far Rockaway","Sheepshead Bay","Coney Island","East Cleveland","Bay Village","University Heights"
,"Shaker Heights","Fairfield Beach","Hallandale Beach","Oakland Park","Hyde Park","Sioux City","Pembroke Pines","Pembroke Park"
,"Lake George","South Miami","West Miami","Delray Beach","Cocoa Beach","Longboat Key","Key West","Key Largo","New Trier"
,"Forest Hills","Hollywood Hills","Santa Monica","Kew Gardens","Ft. Lauderdale","Deerfield Beach","New Paltz","San Diego"
,"San Jose", "San Antonio"];

//Submit listener for the searchbar on the weather app
submit.addEventListener('click', function (e){
    if (searchBar.value === '') {
        e.preventDefault();
        searchBar.classList.toggle('searchbarAnimation')
        return;
    }

    let string = searchBar.value.toLowerCase();
    let stateFound = false;
    let city;
    let state;
    let country;

    const regex = /[0-9]/g;
    const doesItHaveNumber = regex.test(string);
    //checks to see if the input is a zip code
    if (doesItHaveNumber) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${string}&appid=4edd74c5cec3113209554fa2045fdb73`)
        .then(response => response.json())
        .then(data => {
            let {lat, lon} = data.coord;
            let name = data.name;
            onecall(lat, lon);
            addCityName(name);
        })
    } else {
        // grabs country code list if there isn't a state present in the string
        const countryCodeData = () => {
            const where = encodeURIComponent(JSON.stringify({
                "Alpha_2_code": {
                    "$exists": true
                }
            }));
            fetch(`https://parseapi.back4app.com/classes/Isocountrycodes_ISO_3166_Country_Code?limit=500&order=Alpha_2_code&where=${where}`,
                {
                    headers: {
                    'X-Parse-Application-Id': 'Mu5uCKf7kWPWaXWL63C8jsMfNJXTRUBFwTDN8Bs7', // This is your app's application id
                    'X-Parse-REST-API-Key': 'ZENHvwe1GIkJfjuxn4HAdt8ddEeJavQw3dm2D4zp', // This is your app's REST API key
                    }
                }
            )
            .then(response => response.json())
            .then(data1 => {
                countryCodeGenerator(data1, country);
            })
        }
        

        // grabs state code list
        const stateCodeData = () => {
            const where = encodeURIComponent(JSON.stringify({
                "Subdivision_Name": {
                    "$exists": true
                }
            }));
            fetch(`https://parseapi.back4app.com/classes/Isocountrycodes_ISO_3166_2_Subdivision_Code?count=1&limit=10000&order=Subdivision_Name&where=${where}`,
                {
                    headers: {
                        'X-Parse-Application-Id': 'Mu5uCKf7kWPWaXWL63C8jsMfNJXTRUBFwTDN8Bs7', // This is your app's application id
                        'X-Parse-REST-API-Key': 'ZENHvwe1GIkJfjuxn4HAdt8ddEeJavQw3dm2D4zp', // This is your app's REST API key
                    }
                }
            )
            .then(response => response.json())
            .then(data2 => {
                if (stateFound) {
                    return;
                } else {
                    stateCodeGenerator(data2);
                }
                
            })
        }
        stateCodeData();
        
        const cityAndCountryInfo = (city, countryCode) => {
            console.log(countryCode);
            fetch(`http://api.weatherstack.com/current?access_key=d07d3fed2029aa9b60a809d203504968&query=${city},${countryCode}`)
            .then(response => response.json())
            .then(data => {
                let {lat, lon} = data.location;
                
                onecall(lat, lon);
                addCityName(city);
            })
        }

        const cityAndStateInfo = (city, state, doubleWordedCity) => {
            fetch(`http://api.weatherstack.com/current?access_key=d07d3fed2029aa9b60a809d203504968&query=${city},${state}`)
            .then(response => response.json())
            .then(data => {
                let {lat, lon} = data.location;
                if (doubleWordedCity){
                    onecall(lat, lon);
                    addCityName(doubleWordedCity);
                } else {
                    onecall(lat, lon);
                    addCityName(city);
                }
            })
        }
        //grabs the city from the string. grabs the country code from the data
        const countryCodeGenerator = (data1) => {
            for (let i = 0; i < data1.results.length; ++i) {
                let currentCountry = data1.results[i];

                let countryName = currentCountry.English_short_name.toLowerCase();
                if (string.includes(countryName)) {
                    const city = string.charAt(0).toUpperCase() + string.slice(1).replace(',', '').replace(countryName, '').trimEnd();
                    const countryCode = currentCountry.Alpha_2_code;
                    cityAndCountryInfo(city, countryCode);
                    return;
                }
            }
        }
        // grabs the city from the string. Grabs the state name from the data
        const stateCodeGenerator = (data2) => {
            let newRegex = /[A-Z]+-(?=[A-Z])/;

            for (let i = 0; i < data2.results.length; ++i) {

                let currentState = data2.results[i];
                let currentStateName = currentState.Subdivision_Name.toLowerCase();
                let stateAndCountryCode = currentState.Code;

                let stateCode = stateAndCountryCode.replace(newRegex, '').toLowerCase();
                let newerRegexConstructor = new RegExp(`\\b${stateCode}\\b`, 'g');
                
                if (string.match(newerRegexConstructor)){
                    const state = stateCode;
                    const city = string.charAt(0).toUpperCase() + string.slice(1).replace(',', '').replace(newerRegexConstructor, '').trimEnd()
                    cityAndStateInfo(city, state);
                    stateFound = true;
                    return;
                } else if (string.includes(currentStateName)) {
                    const state = currentStateName;
                    const city = string.charAt(0).toUpperCase() + string.slice(1).replace(',', '').replace(state, '').trimEnd()
                    cityAndStateInfo(city, state);
                    stateFound = true;
                    return;
                }   
            }
        }
        // checks to see if the string has a city with multiple words in the name
        const grabDoubleWordCities = (doubleWordCities) => {
            for (let i = 0; i < doubleWordCities.length; ++i) {
                let currentCity = doubleWordCities[i];
                if (string.includes(currentCity.toLowerCase())) {
                    
                    const city = currentCity;
                    const doubleWordedCity = currentCity;
                    const state = string.replace(currentCity, '').trimStart().replace(',', '')
                    cityAndStateInfo(city, state, doubleWordedCity);
                    stateFound = true;
                    return;
                } 
            }
        }

        grabDoubleWordCities(doubleWordCities);
        // this timeout function checks to see if a state is present in the string
        setTimeout(function(){
            if (stateFound === false) {
                countryCodeData();
            } else {
                return;
            } 
        }, 750);
    }
})

window.onload = function() {
    lat = 51.5074;
    lon = 0.1278;
    onecall(lat, lon);
    reverseGeocode(lat, lon);
};
////////////////////////////
searchBar.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        submit.click();
        return;
    }
});

/// This grabs the lat & longitude
function grabGeolocation() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;
        let lat = latitude;
        let lon = longitude;

        onecall(lat, lon);
        reverseGeocode(lat, lon);
    });
}
grabGeolocation();

// This grabs all the weather data but the city name
function onecall(lat, lon) {
    let weatherApiUrl = fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=4edd74c5cec3113209554fa2045fdb73`);
    weatherApiUrl.then(response => response.json())
    .then(data => {
        showData(data);
    })
    .catch(err => alert('Unable to!'));
}
// This grabs the city name when using geolocation
function reverseGeocode(lat, lon) {
    let cityGeoLocationUrl = fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
    cityGeoLocationUrl.then(response => response.json())
    .then(data => {
        nameSpot(data);
    })
    .catch(err => alert('Unable to grab!'));
}


// This takes in the data and displays it
const showData = (data) => {
    // let current_date = document.querySelector('.current_date');
    let current_temp = document.querySelector('.current_temp');
    let current_description = document.querySelector('.current_description');
    // let current_sunset = document.querySelector('.current_sunset');
    // let current_sunrise = document.querySelector('.current_sunrise');
    let current_humidity = document.querySelector('.current_humidity');
    let current_high = document.querySelector('.current_high');
    let current_low = document.querySelector('.current_low');
    let current_wind = document.querySelector('.current_wind');

    let iconSrc;

    let {temp, sunrise, sunset, wind_speed, dt, humidity} = data.current;
    let {description, icon} = data.current.weather[0];
    let {max, min} = data.daily[0].temp;
    let currentIcon = icon;
    let {timezone} = data;
    timeZoneOffset(timezone);
    
    description = description.charAt(0).toUpperCase() + description.slice(1);
    wind_speed = Math.round(wind_speed);
    max = Math.round(max);
    min = Math.round(min);
    temp = Math.round(temp);

    
    dateCalculator(dt);
    sunsetCalculator(sunset);
    sunriseCalculator(sunrise);

    /////////////////////////////////////////////
    current_temp.innerHTML = `${temp + '\u00B0F'}`;
    current_description.innerHTML = `${description}`;
    current_humidity.innerHTML = `${'Humidity: ' + humidity + '%'}`;             
    current_high.innerHTML = `${'High: ' + max + '\u00B0F'}`;                   
    current_low.innerHTML = `${'Low: ' + min + '\u00B0F'}`;                    
    current_wind.innerHTML = `${'Wind: ' + wind_speed + 'mph'}`;               
    //Changes background depending on current weather conditions
    
    changeBackground(currentIcon, description);
    //changes the icons depending on the weather conditions
    let iconList = (icon) => {
        if (icon === '01d') {
            iconSrc = `pictures/003-sun.png`
        } else if (icon === '01n') {
            iconSrc = 'pictures/night.png'
        } else if (icon === '02n' || icon === '03n') {
            iconSrc = 'pictures/cloudyMoon.png'
        } else if (icon ==='02d' || icon === '03d') {
            iconSrc = 'pictures/002-cloudy.png'
        } else if (icon === '09d' || icon === '09n') {
            iconSrc = 'pictures/001-rain.png'
        } else if (icon === '10d' || icon === '10n') {
            iconSrc = `pictures/006-rain.png`
        } else if (icon === '11d' || icon === '11n') {
            iconSrc = `pictures/004-storm.png`
        }  else if (icon === '13d' || icon === '13n') {
            iconSrc = `pictures/008-snowing.png`
        } else {
            iconSrc = 'pictures/011-clouds.png'
        }
    }
    //This is the hourly section
    let hourlyForecast = '';
    let counter = 0;
    data.hourly.forEach((hour) => {
        let icon = hour.weather[0].icon;
        iconList(icon);
        
        let hourTime = hour.dt;
        let hourTimeInMilli = hourTime * 1000;
        let hourTimeObj = new Date(hourTimeInMilli);

        let localHourTime = hourTimeObj.getTime();
        let localHourOffset = hourTimeObj.getTimezoneOffset() * 60000;

        let hourlyUTC = localHourTime + localHourOffset;
        let hourlyTime = hourlyUTC + (3600000 * offsetTIme);

        let hourlyDateObj = new Date(hourlyTime);

        time = hourlyDateObj.toLocaleString("en-US", {hour: "numeric"});
        while(counter < 12 && hourTime > dt) {
            hourlyForecast +=
                `<div class='forecast_weather_class'>
                    <div class='increaseFont'>${time}</div>
                    <div class='weather_image'><img id='icon2' class='icon2 changeIconSize' src=${iconSrc}></div>
                    <div class='weather_item alignLeft weatherDescription'>${hour.weather[0].description.charAt(0).toUpperCase() + hour.weather[0].description.slice(1)}</div>
                    <div class='weather_class_container'>
                        <div class='weather_class alignLeft'>
                            <div class='weather_item increaseFont alignLeft'>${Math.round(hour.temp) + '\u00B0F'}</div>
                        </div>
                    </div>
                </div>`;
                return counter++;
        }
    });
    let top = document.querySelector('.top');
    top.innerHTML = hourlyForecast;
    //This is the daily section
    let dailyForecast = '';
    let counter2 = 0;
    data.daily.forEach((day) => {
        let icon = day.weather[0].icon;
        iconList(icon);

        let dayTime = day.dt;
        let dayInMilli = dayTime * 1000;
        let dateObject = new Date(dayInMilli);
        time = dateObject.toLocaleString("en-US", {weekday: "long", day: "2-digit"});
        if (counter2 === 0) {
            return counter2++;
        } else {
            dailyForecast += 
            `<div class='forecast_weather_class alignLeft'>
                <div class='increaseFont'>${time}</div>
                <div class='weather_image'><img id='icon2' class='icon2 changeIconSize' src=${iconSrc}></div>
                <div class='weather_item weatherDescription'>${day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}</div>
                <div class='weather_class_container'>
                    <div class='weather_class alignLeft'>
                        <div class='weather_item increaseTempFont '>${Math.round(day.temp.max) + '\u00B0F'}</div>
                        <div class='weather_item decreaseTempFont '>${Math.round(day.temp.min) + '\u00B0F'}</div>
                    </div>
                </div>
            </div>`
        }
    });
    let bottom = document.querySelector('.bottom');
    bottom.innerHTML = dailyForecast;
    
}
// This adds the name of the city to the page
const nameSpot = (data) => {
    let cityName = document.querySelector('.cityName');    
    let {city} = data;
    cityName.innerHTML = `
    <h2 class='cityName'>${city}</h2>
    `
}
// This also adds the name of the city to the page
const addCityName = (name) => {
    let cityName = document.querySelector('.cityName'); 
    let city = name;
    cityName.innerHTML = `
    <h2 class='cityName'>${city}</h2>
    `
}

let changeBackground = (currentIcon, description) => {  
    let backgroundVideo = document.querySelector('.backgroundVideo');

    description = description.toLowerCase();

    const lightRainTerms = ['light', 'moderate','light intensity shower rain']
    const lightResult = lightRainTerms.some(term => description.includes(term))

    const heavyRainTerms = ['very', 'heavy','extreme', 'ragged']
    const heavyResult = heavyRainTerms.some(term => description.includes(term))

    if (currentIcon === '01d') {
        backgroundVideo.setAttribute('src', 'videos/sunnyDay.mp4');
    } else if (currentIcon === '01n') {
        backgroundVideo.setAttribute('src', 'videos/clearNight.mp4');
    } else if (currentIcon === '02d' || currentIcon === '03d') {
        backgroundVideo.setAttribute('src', 'videos/lightlyCloudy.mp4');
    } else if (currentIcon === '02n' || currentIcon === '03n') {
        backgroundVideo.setAttribute('src', 'videos/nightThickClouds.mp4');
    } else if ((currentIcon === '04d') && (description === 'broken clouds')) {
        backgroundVideo.setAttribute('src', 'videos/dayThickClouds.mp4');
    } else if (currentIcon === '04n' && description === 'broken clouds') {
        backgroundVideo.setAttribute('src', 'videos/nightThickClouds.mp4');
    } else if ((currentIcon === '04d' || currentIcon === '04n') && description === 'overcast clouds') {
        backgroundVideo.setAttribute('src', 'videos/darkClouds.mp4');
    } else if ((currentIcon === '09d' || currentIcon === '10d') && lightResult) {
        backgroundVideo.setAttribute('src', 'videos/raindrops.mp4');
    } else if ((currentIcon === '09n' || currentIcon === '10n') && lightResult) {
        backgroundVideo.setAttribute('src', 'videos/nightWindowRain.mp4');
    } else if ((currentIcon === '09d' || currentIcon === '10d') && heavyResult) {
        backgroundVideo.setAttribute('src', 'videos/heavyRainDay.mp4');
    } else if ((currentIcon === '09n' || currentIcon === '10n') && heavyResult) {
        backgroundVideo.setAttribute('src', 'videos/nightWindowRain.mp4');
    } else if (currentIcon === '11d' || currentIcon === '11n'){
        backgroundVideo.setAttribute('src', 'videos/lightningV2.mp4');
    } else if (currentIcon === '13d'){
        backgroundVideo.setAttribute('src', 'videos/daySnow.mp4');
    } else if (currentIcon === '13n'){
        backgroundVideo.setAttribute('src', 'videos/nightSnow.mp4');
    } else {
        backgroundVideo.setAttribute('src', 'videos/darkClouds.mp4');
    }
}

/////////////////////
const myTimezoneArray = [
    "BIT (UTC-12:00)",
    "SMST (UTC-11:00)",
    "PST (UTC-08:00)",
    "MSTM (UTC-07:00)",  
    "CCST (UTC-06:00)", 
    "CST (UTC-06:00)", 
    "CAST (UTC-06:00)", 
    "EST (UTC-05:00)", 
    "SAPST (UTC-05:00)", 
    "VST (UTC-04:30)", 
    "PSAST (UTC-04:00)", 
    "SAWST (UTC-04:00)", 
    "CBST (UTC-04:00)", 
    "PRST (UTC-04:00)", 
    "NST (UTC-03:30)", 
    "MVST (UTC-03:00)", 
    "GNST (UTC-03:00)",
    "SAEST (UTC-03:00)", 
    "ART (UTC-03:00)", 
    "ESAST (UTC-03:00)", 
    "CVT (UTC-01:00)", 
    "AZOST (UTC-01:00)", 
    "PHOT (UTC+13:00)", 
    "PETT (UTC+12:00)", 
    "FJT (UTC+12:00)", 
    "UTC12 (UTC+12:00)", 
    "NZST (UTC+12:00)", 
    "SBT (UTC+11:00)", 
    "VLAT (UTC+10:00)", 
    "TAST (UTC+10:00)", 
    "WPST (UTC+10:00)", 
    "AEST (UTC+10:00)", 
    "EAST (UTC+10:00)", 
    "ACST (UTC+09:30)", 
    "CAUST (UTC+09:30)", 
    "YAKT (UTC+09:00)", 
    "KST (UTC+09:00)", 
    "TST (UTC+09:00)", 
    "UST (UTC+08:00)", 
    "TIST (UTC+08:00)", 
    "AWST (UTC+08:00)", 
    "SNST (UTC+08:00)", 
    "IRKT (UTC+08:00)", 
    "KRAT (UTC+07:00)", 
    "THA (UTC+07:00)", 
    "MYST (UTC+06:30)",
    "NCAST (UTC+06:00)", 
    "BST (UTC+06:00)", 
    "BTT (UTC+06:00)", 
    "NPT (UTC+05:45)", 
    "SLT (UTC+05:30)", 
    "IST (UTC+05:30)", 
    "WAST (UTC+05:00)", 
    "PKT (UTC+05:00)", 
    "YEKT (UTC+05:00)", 
    "AFT (UTC+04:30)", 
    "AMT (UTC+04:00)",
    "AMT (UTC+04:00)", 
    "GET (UTC+04:00)", 
    "MUT (UTC+04:00)", 
    "AZT (UTC+04:00)", 
    "ARBST (UTC+04:00)", 
    "IRST (UTC+03:30)", 
    "EAT (UTC+03:00)", 
    "MSK (UTC+03:00)", 
    "ABST (UTC+03:00)", 
    "ARST (UTC+03:00)", 
    "NMST (UTC+02:00)", 
    "EEST (UTC+02:00)", 
    "ISST (UTC+02:00)", 
    "EET (UTC+02:00)", 
    "SAST (UTC+02:00)", 
    "SST (UTC+02:00)", 
    "EGST (UTC+02:00)",
    "MEST (UTC+02:00)", 
    "GTBST (UTC+02:00)", 
    "JST (UTC+02:00)", 
    "ECT (UTC+01:00)", 
    "CEST (UTC+01:00)", 
    "RST (UTC+01:00)", 
    "CET (UTC+01:00)", 
    "WET (UTC+01:00)", 
    "GST (UTC)", 
    "GMT (UTC)", 
    "UTC (UTC)", 
    "MOST (UTC)", 
    "AST (UTC-04:00)", 
    "MST (UTC-07:00)", 
    "HAST (UTC-10:00)", 
    "AKDT (UTC-08:00)",
    "AK (UTC-09:00)", 
    "PDT (UTC-07:00)",
    "PT (UTC-08:00)", 
    "MDT (UTC-06:00)",
    "MT (UTC-07:00)", 
    "CDT (UTC-05:00)",
    "CT (UTC-06:00)", 
    "EDT (UTC-04:00)",
    "ET (UTC-05:00)"
]
let offsetTIme;

const timeZoneOffset = (timeZone) =>{
    let date = new Date().toLocaleString('en', {timeZone, timeZoneName: 'short'}).split(' ');
    let timeZoneName = date[date.length - 1];
    console.log(date);

    let grabOnlyLetters = /\W+\d+/; 
    let grabTimezoneAbbreviation = /\s\(UTC\D[0-9]+:D00\)$/;
    let removeLastHalf = /:00\)$/gm;
    let removeFirstHalf = /^[A-Z]+\s\([A-Z]+/;

    let rawTZAbbreviation = timeZoneName.replace(grabOnlyLetters, '');
    
    // This either grabs the offset from the response or the array
    for (let i = 0; i < myTimezoneArray.length; ++i) {
        let currentTZ = myTimezoneArray[i];
        let tzAbbreviation = currentTZ.replace(grabTimezoneAbbreviation, '');

        if(timeZoneName.match(/\d+/g)){
            return offsetTIme = timeZoneName.replace(/\w+/, '')
        }
        else if (tzAbbreviation.match(rawTZAbbreviation)) {
            let firstHalf = currentTZ.replace(removeLastHalf, '');
            let tzHoursOffset = firstHalf.replace(removeFirstHalf, '');
            return offsetTIme = tzHoursOffset;
        }
    }
}

const sunriseCalculator = (sunrise) => {
    let current_sunrise = document.querySelector('.current_sunrise');

    let sr = new Date(sunrise *1000);
    let localSunriseTime = sr.getTime();
    let localSunriseOffset = sr.getTimezoneOffset() * 60000;

    let sunriseUTC = localSunriseTime + localSunriseOffset;
    let destinationSunriseTime = sunriseUTC + (3600000 * offsetTIme);

    let sunriseDate = new Date(destinationSunriseTime);
    let sunriseTime = sunriseDate.toLocaleString("en-US", {hour: "numeric", minute: "numeric"});

    current_sunrise.innerHTML = `${'Sunrise: ' + sunriseTime}`;      
}

const sunsetCalculator = (sunset) => {
    let current_sunset = document.querySelector('.current_sunset');
   
    let ss = new Date(sunset *1000);
    let localSunsetTime = ss.getTime();
    let localSunsetOffset = ss.getTimezoneOffset() * 60000;

    let sunsetUTC = localSunsetTime + localSunsetOffset;
    let destinationSunsetTime = sunsetUTC + (3600000 * offsetTIme);

    let sunsetDate = new Date(destinationSunsetTime);
    let sunsetTime = sunsetDate.toLocaleString("en-US", {hour: "numeric", minute: "numeric"});

    current_sunset.innerHTML = `${'Sunset: ' + sunsetTime}`;                  

}
const dateCalculator = () => {
    let current_date = document.querySelector('.current_date');

    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;

    let utc = localTime + localOffset;
    let destinationTime = utc + (3600000 * offsetTIme);

    let nd = new Date(destinationTime);
    let date = nd.toLocaleString("en-US", {month: 'long', day: 'numeric'});

    current_date.innerHTML = date;
}