const ApiKey="33ee9b05212d8daeb18aa45607be338e";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serchBox= document.querySelector(".search input");
const serchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    
    const response =await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    var data =await response.json();
    if(response.status== 404 || " "){
       
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").classList.remove("show");
        document.querySelector(".weather").style.display="none";

    }
    else{
        document.querySelector(".weather").classList.add("show");
        
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humadity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="assits/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="assits/sun.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="assits/running.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="assits/drizzel.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="assits/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    
    document.querySelector(".error").style.display="none";


    }

    
    
}
serchBtn.addEventListener("click",()=>{
    checkWeather(serchBox.value);

})


