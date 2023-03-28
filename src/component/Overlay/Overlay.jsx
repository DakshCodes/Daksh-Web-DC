import React from 'react'
import {BiMenu} from 'react-icons/bi'

const Overlay = () => {
   const Handle = ()=>{
     let menu = document.querySelector('#menu');
     menu.classList.toggle('active');
   }

  return (
    <>
    {/* <input type="checkbox" id="active"></input> */}
    {/* <label onClick={Handle} for="active"  class="menu-btn"><BiMenu /></label> */}
      <div class="wrapper" id='menu'>
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
         </ul>
      </div>
      </>
  )
}

export default Overlay
