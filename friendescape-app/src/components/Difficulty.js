import React, { useEffect, useState } from 'react'
import '../sass/components/difficulty.sass'
import Logo from '../images/FriendEscape.png'
import Easy from '../images/easy.jpg'
import Medium from '../images/medium.jpg'
import Hard from '../images/hard.jpg'
import SelectedDifficulty from './SelectedDifficulty'




export default function ({user, onHandleEasy, onHandleMedium, onHandleHard, onHandleLogOut, onHandleGoHome}) {
    const {name} = user


    function handleLogOut(event){
        event.preventDefault()
        onHandleLogOut()

    }

    function handleGoToHome(event){
        event.preventDefault()
        onHandleGoHome()
     }

    function handleEasy(event){
        event.preventDefault()
        onHandleEasy()
    }
    function handleMedium(event){
        event.preventDefault()
        onHandleMedium()
    }
    function handleHard(event){
        event.preventDefault()
        onHandleHard()
    }

    return <>
    {/* Header */}

   <div className="header">
    <figure>
        <img className='header__logo' src ={Logo} alt="Logo"/>
    </figure>
    <div className='header__username'>
    </div>
    <div>
    <p>Welcome {name}</p>
    <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
    </div>
    </div>
    <div className="difficulty">
        <img className='results__img' src={Easy} onClick={handleEasy} alt="img escroom"/>
        <img className='results__img' src={Medium} onClick={handleMedium} alt="img escroom"/>
        <img className='results__img' src={Hard} onClick={handleHard} alt="img escroom"/>
        <a onClick={handleGoToHome} className="textMenu" >Go Back</a>
    </div>

    </>
}
