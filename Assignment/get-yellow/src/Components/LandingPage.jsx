import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
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
              
       <h5>Google Map</h5>


<Button variant="outlined"   onClick={handleClick}>   Restaurent Near by You </Button>
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
