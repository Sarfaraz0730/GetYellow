import './LandingPage.css'

import { useEffect } from "react"
const GoogleMap = () => {




    const handleinput =(e) =>{
      e.preventDefault()

      console.log( "Restuarent You are looking for " , e.target.value)
    }
  
    
    
    
    
    const getGoogleMap = async () =>{
        var abc ;
   const key = "0891df074c3224c99aae65cbf4a43f46"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${abc}&appid=${key}&units=metric`
    var res = await fetch(url);
    let info = await res.json();
    console.log("info:",info);
   }

    useEffect(() =>{
         getGoogleMap()
    },[])



  // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
  // mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyZmFyYXoyMjA3IiwiYSI6ImNsM2VvYm8zczBrY28zanB2cDg4bHJ2OWwifQ.vccN1hlkexgE7QnwCUmAIQ';
  // var map = new mapboxgl.Map({
  // container: 'YOUR_CONTAINER_ELEMENT_ID',
  // style: 'mapbox://styles/mapbox/streets-v11'
  // });





  return (
    <div>
      <input type="text" name="" className="inputBox"  placeholder="Enter Restaurent Name" />
    </div>
  )
}

export default GoogleMap
