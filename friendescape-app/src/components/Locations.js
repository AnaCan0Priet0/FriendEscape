import React from 'react'
import '../sass/components/home.sass'
import Logo from '../images/FriendEscape.png'
import Map from './Map.js'



export default function ({user, onHandleGoHome, onHandleLogOut}) {
   const {name} = user

   function handleGoToHome(event){
      event.preventDefault()
      onHandleGoHome()
   }

   function handleLogOut(event){
      event.preventDefault()
      onHandleLogOut()

  }

   return <>
       <div className="header">
    <figure>
        <img className='header__logo' src ={Logo} alt="Logo"/>
    </figure>
    <div className='header__username'>
    <p>Welcome {name}</p>
    <i className="fas fa-sign-out-alt" onClick={handleLogOut} ></i>
    </div>
    </div>

     
         <div className='container-map'>
         <a onClick={handleGoToHome} className="textMenu" >Go Back</a>
            <Map />
         </div>
   </>
}
