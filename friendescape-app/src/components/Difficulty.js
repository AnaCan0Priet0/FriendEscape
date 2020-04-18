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
    <span>Welcome {name}</span>
    <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
    </div>

    
    </div>
    <div className="difficulty">
        <h1 className="difficulty__text">CHOOSE A DIFFICULTY</h1>

        <img className='img__easy' src={Easy} onClick={handleEasy} alt="img escroom"/>}
        <img className='img__medium' src={Medium} onClick={handleMedium} alt="img escroom"/>
        <img className='img__hard' src={Hard} onClick={handleHard} alt="img escroom"/>
        <a href="" onClick = {handleGoToHome} className="btn--difficulty"><i class="fas fa-undo-alt"></i>Go Back</a>
    </div>

    </>
}
