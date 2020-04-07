import React, { useEffect, useState } from 'react'
import Logo from '../images/FriendEscape.png'
import Abstract from '../images/abstract.jpg'
import Apocalyptic from '../images/apocalypnew.jpg'
import Fiction from '../images/fantasy.jpeg'
import Historycal from '../images/history.jpg'
import Fear from '../images/fear.jpg'
import Carousel from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'
import '../sass/components/themes.sass'


export default function ({user, onHandleLogOut, onHandleGoHome, onHandleFiction, onHandleHistorical, onHandleCriminal, onHandleFear}) {
    const {name} = user

            
    
    function handleLogOut(event){
        event.preventDefault()
        onHandleLogOut()

    }

  function handleGoToHome(event){
      event.preventDefault()
      onHandleGoHome()
   }

  function handleCriminal(event){
      event.preventDefault()
      onHandleCriminal()
  }
  function handleFear(event){
      event.preventDefault()
      onHandleFear()
  }
  function handleHistorical(event){
      event.preventDefault()
      onHandleHistorical()
  }
  function handleFiction(event){
    event.preventDefault()
    onHandleFiction()
}

    return <>
    {/* Header */}
   <div className="header">
    <figure>
        <img className='header__logo' src ={Logo} alt="Logo"/>
    </figure>
    <div className='header__username'>
    <p>Welcome {name}</p>
    <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
    </div>
    </div>
    <h1> Choose your favourite theme:</h1>
    <Carousel
  autoPlay={2000}
  animationSpeed={1000}
  infinite
>
            <div>
            <img src={Apocalyptic} onClick={handleCriminal}/> Criminal
            </div>
            <div>
            <img src={Fiction} onClick={handleFiction}/> Fiction
            </div>
            <div>
            <img src={Historycal} onClick={handleHistorical}/> Historical
            </div>
            <div>
            <img src={Fear} onClick={handleFear}/> Fear
            </div>
            <a onClick={handleGoToHome} className="textMenu" >Go Back</a>
</Carousel>
   
   
  
    </>
}

