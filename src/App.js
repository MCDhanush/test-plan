import './App.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useEffect, useState } from 'react';

function App() {

const [person, setPerson] = useState([])

const persons = ()=>{
  fetch("https://randomuser.me/api/")
  .then((e)=>e.json())
  // .then((e)=>console.log(e.results))
  .then((person)=>setPerson(person.results))
}
useEffect(() => persons(), []);
  return (
    <div className="App">
      {
        person.map((m)=>(
          <Header person={m}/>
        ))
      }
    

    </div>
   
  );
}


function Header({person}){

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };

  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };
  const handleMouseOver6 = () => {
    setIsHovering6(true);
  };

  const handleMouseOut6 = () => {
    setIsHovering6(false);
  };
  return(
    <div className='box'>
  <div className='body-box'>  
   <div className='top-b'>
    <span></span>
   </div>
  <div className='bottom-b'>
    <img className='person-img' src={person.picture.large} />


{/* span tags */}
<div className='span'>
<div>
{isHovering1 && (
          <div className='span-fi'> My,name is
            <p  className='cnt-txt'>{person.name.first} {person.name.last} </p>
            {/* <p>{person.name.last}</p> */}
          </div>
        )}
</div>
<div></div>
   {isHovering2 && (
          <div className='span-fi'>
            My email is
            <p className='cnt-txt'>{person.email}</p>
          </div>
        )}
        <div></div>
   {isHovering3 && (
          <div className='span-fi'>
            My dob is
            <p  className='cnt-txt'>{person.dob.date}</p>
          </div>
        )}
        
        <div>
   {isHovering4 && (
          <div className='span-fi'>
            My address is
            <p  className='cnt-txt'>{person.location.street.number} {person.location.street.name}</p>
          </div>
        )}
        </div>
        <div>
   {isHovering5 && (
          <div className='span-fi'>
            My phone number is
            <p  className='cnt-txt'>{person.phone}</p>
          </div>
        )}
        </div>
        <div>
   {isHovering6 && (
          <div className='span-fi'> My password is
            <p  className='cnt-txt'>{person.login.password}</p>
          </div>
        )}
        </div>
 </div>


{/* ul list */}
  <div>
   <ul className='icons'>
    <li onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1}
          className='icons-in'><PersonOutlineOutlinedIcon/>
    </li>
    <li onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2} 
          className='icons-in'><EmailOutlinedIcon/></li>
    <li onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}  className='icons-in'><CalendarMonthIcon/></li>

    <li onMouseOver={handleMouseOver4}
          onMouseOut={handleMouseOut4} className='icons-in'><LocationOnOutlinedIcon/></li>

    <li onMouseOver={handleMouseOver5}
          onMouseOut={handleMouseOut5} className='icons-in'><LocalPhoneIcon/></li>

    <li onMouseOver={handleMouseOver6}
          onMouseOut={handleMouseOut6} className='icons-in'><LockOpenOutlinedIcon/></li>
   </ul>
   </div>

   </div>
  </div>
  </div>

  )
}


export default App;
