import '../App.css'
import logo from "../Assests/logo.png"
import LandingPage from './LandingPage'


const Header = () => {
  return (
    <div>
       <div className='mainDiv'>
          <div className='logoDiv' >
            <div>  <img className='logo' src={logo} alt="" /> </div>
          <div className='comName'><h6 className='
          comName'>FoodyGuru</h6></div>
          </div>
          
                       
        </div>



        <div className='body'>
          <LandingPage/>
        </div>
    </div>
  )
}

export default Header
