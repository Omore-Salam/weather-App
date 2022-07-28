let input = document.querySelector("input") 

 let form = document.querySelector("form") 

 let text = document.querySelector(".text") 

 let image = document.querySelector("#imageC") 

 let output = document.querySelector(".output") 

 let show = document.querySelector(".show") 

  

  

 let getData = async(value)=>{ 

     let cityF = await getCity(value) 

     let weatherF = await getWeather(cityF.Key) 

     return {cityF,weatherF} 

    } 

  

  

  

 let updateUI = async(data)=> { 

     let cityI =  await data.cityF ; 

     let weatherI = await data.weatherF ; 

     

 text.innerHTML = 

 ` 

  

 <div class="text"> 

     <img class="icon" src="img/icons/${weatherI.WeatherIcon}.svg"> 

     <div class="city-name">${cityI.EnglishName}</div> 

     <div class="condition description">${weatherI.WeatherText}</div> 

     <h2 class="degree">${weatherI.Temperature.Metric.Value} &deg;C</h2>`; 

     console.log(weatherI.IsDayTime) 

  

     if(weatherI.IsDayTime){ 

         image.setAttribute("src","img/day.svg") 

     }else{ 

         image.setAttribute("src","img/night.svg") 

     } 

 } 

  

  

  

  

 form.addEventListener("submit",(e)=>{ 

     e.preventDefault() 

     getData(input.value.trim()) 

     .then(data=>{ 

         if(output.classList.contains("close")){ 

             output.classList.remove("close") 

         } 

         form.reset() 

         updateUI(data) 

     }) 

     .catch(err=>{ 

 console.log("an error happened") 

 console.log(err.message) 

     }) 

      

  

      

  

 })
