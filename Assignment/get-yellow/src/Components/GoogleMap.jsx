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


  return (
    <div>
      <input type="text" name="" className="inputBox" onChange={ handleinput}  placeholder="Enter Restaurent Name" />
    </div>
  )
}

export default GoogleMap
