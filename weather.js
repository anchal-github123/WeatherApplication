
// let Url=`https://api.openweathermap.org/data/2.5/weather?q=${userinput}&appid=ee56b955dd8495721a18dce61fa7aad1`;
let location_name=document.querySelector(".location_name");
let Date_Time_loc=document.querySelector(".Date_Time_loc");
let weather_forcast=document.querySelector(".weather_forcast")
let Weather_icon=document.querySelector(".Weather_icon");
let weathe_temp_value=document.querySelector(".weathe_temp_value");
let mintemp=document.querySelector(".min");
let maxtemp=document.querySelector(".max");
let userbox=document.querySelector(".inputbox")


// document.querySelector(".inputbox").addEventListener("submit",(e)=>{
//     e.preventDefault();

// })
// let userinput=document.querySelector(".userinput").value
function getcountryname(code){
    return new Intl.DisplayNames([code], { type: 'region' }).of(code)
}
function geDatetime(dtt)
{
    const curdate=new Date(dtt*1000);
    const option={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric"
    };
    const formatter=new Intl.DateTimeFormat('en-US',option);
    const formattedate=formatter.format(curdate);
    return formattedate;
}
let city="pune";
userbox.addEventListener("submit",(e)=>{
    e.preventDefault();
   
let cityname=document.querySelector(".userinput");
console.log(cityname.value);
city=cityname.value;
getweatherData();
})

const getweatherData=async ()=>
    {
        let Url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee56b955dd8495721a18dce61fa7aad1`;
        try{
            const res=await fetch(Url);
            const data= await res.json();
            console.log(data); 
        
        const { main,name,weather,wind,sys,dt}=data;
       location_name.innerHTML=`${name},${getcountryname(sys.country)}`;
       Date_Time_loc.innerHTML=geDatetime(dt);
       weather_forcast.innerHTML=weather[0].main;
       Weather_icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`;
       http://openweathermap.org/img/wn
       weathe_temp_value.innerHTML=`${main.temp}&#176`
       mintemp.innerHTML=`Max:${main.temp_max}&#176`;
       maxtemp.innerHTML=`Min:${main.temp_min}&#176`;
       document.querySelector(".feels_temp").innerHTML=main.feels_like;
       document.querySelector(".humidity_temp").innerHTML=`${main.humidity}%`;
       document.querySelector(".wind_temp").innerHTML=`${wind.speed}m/s`;
       document.querySelector(".pressure_temp").innerHTML=`${main.pressure}hPa`;


        }
        catch(error){
            console.log(error);
        }

    }
document.querySelector("body").addEventListener("load",getweatherData())

