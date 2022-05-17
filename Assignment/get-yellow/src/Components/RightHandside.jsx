import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import './LandingPage.css'
const RightHandside = () => {
    const [ten, setTen] = useState([])
  
  
  
    const visitedRestaurent=() =>{
     console.log("visitedRestaurent")
  
    }


   const getTopten = async () =>{
    const response = await fetch("http://localhost:3000/topten")
    const ans = await response.json()

    setTen(ans)
    console.log(ans)

   }
    useEffect(()=>{
     getTopten()
    },[])


 
  return (
    <div>
      <div className='RightSide'>

          <h5>Past top 10 visited Restaurants</h5>

       
          
<Button variant="outlined"    onClick={visitedRestaurent}> Visted Restaurants  </Button>


          {

ten.map( (e) =>{
return <div key={e.id}> Restaurant : {e.Restaurent_Name}    Location :  {e.Location}  <div className='avatar'> <img src={e.avatar} alt="" /> </div> </div> 
})


}
      </div>
    </div>
  )
}

export default RightHandside
