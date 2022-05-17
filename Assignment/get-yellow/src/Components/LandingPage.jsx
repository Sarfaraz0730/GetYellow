import { useEffect, useState } from "react"
import axios from 'axios'
import './LandingPage.css'
import RightHandside from "./RightHandside"
const LandingPage = () => {
 
    const[details, setDetails] = useState([])

    const getResturentDetails = async () =>{
       const response = await fetch("http://localhost:3000/data")
       const ans = await response.json()

       setDetails(ans)
       console.log(ans)

       
    }

    useEffect(() =>{
        getResturentDetails()
    },[])

    const handleClick= () =>{
        console.log("clicked")
        getResturentDetails()
       
    }
  return (
    <div className="main-div">
  


    <div className="leftside">
              
       <h1>google Map</h1>

<button onClick={handleClick}>Get A Restaurent Near by You</button>
{

details.map( (e) =>{
return <div key={e.id}> Restaurant : {e.Restaurent_Name}    Location :  {e.Location}  <div className='avatar'> <img src={e.avatar} alt="" /> </div> </div> 
})


}


  
    </div>

    <RightHandside/>
    </div>
       
   
  )
}

export default LandingPage
