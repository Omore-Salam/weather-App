"use strict" 

 let key = "IGrTJtoMekGs04Yun0v79l9br9wKnIHl" 

 let locationServer = "http://dataservice.accuweather.com/locations/v1/cities" 

  

  

  

  

 // GET CITY FUNCTION 

 const getCity = async(city) =>{ 

  

     let url = "http://dataservice.accuweather.com/locations/v1/cities/search" 

     let query = `?apikey=${key}&q=${city}` 

  

     let response = await fetch(url + query); 

     let data = await response.json() 

     return data[0] 

 } 

  

 // GET WEATHER FUNCTION 

  

 const getWeather = async(cityKey) =>{ 

  

     let url = "http://dataservice.accuweather.com/currentconditions/v1/" 

     let query = `${cityKey}?apikey=${key}` 

  

     let response = await fetch(url + query) 

     let data = await response.json() 

     return data[0]; 

 }
