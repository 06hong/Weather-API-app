var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputValue')
var weathername = document.querySelector('.weathername')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var high = document.querySelector('.high')
var low = document.querySelector('.low')
var forecast = document.querySelector('.forecast')
var humidity = document.querySelector('.humidity')



button.addEventListener('click',function(){
// fetch
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=11fbd8e0b96b1d94c7511f4241324e48')
    .then(response => response.json()) //json format
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var highValue = data['main']['temp_max'];
        var lowValue = data['main']['temp_min'];
        var forecastValue = data['main']['feels_like'];
        var humidityValue = data['main']['humidity'];
        console.log(data)
        
        
        
        //(32K − 273.15) × 9/5 + 32 = -402.1°F convert to F 

        tempValue = parseInt((tempValue - 273.15) * 9/5 + 32);
        highValue = parseInt((highValue -273.15) * 9/5 + 32);
        lowValue = parseInt((lowValue - 273.15) * 9/5 + 32);
        forecastValue = parseInt((forecastValue - 273.15)* 9/5 + 32);













        weathername.innerHTML = "Today's weather in " + nameValue ;
        temp.innerHTML ='Temperature:  ' + tempValue + ' °F';
        desc.innerHTML = 'Description:  '+ descValue ;
        high.innerHTML = 'High:  '+ highValue + ' °F';
        low.innerHTML = 'Low:  '+ lowValue + ' °F';
        forecast.innerHTML ='Forcast:  '+ forecastValue + ' °F';
        humidity.innerHTML = 'Humidity:  '+ humidityValue + ' %' ;

    })

    


    
})

