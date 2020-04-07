
import React, {useEffect} from 'react'
import '../sass/components/home.sass'
import Logo from '../images/FriendEscape.png'
import Group from './Group'


export default function ({ user, availableGroups, onHandleLogOut, onHandleGoHome, onItemClick, handleJoinGroup, error}) {
    const {name} = user

    
    function handleLogOut(event){
        event.preventDefault()
        onHandleLogOut()

    }
    function handleGoToHome(event){
        event.preventDefault()
        onHandleGoHome()
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

        <div className="availableGroups">
        <a onClick={handleGoToHome} className="textMenu" >Go Back</a>
            <p>Escapes Room</p>
            <ul>
                {availableGroups.map(group => <Group item={group} onClick={onItemClick} handleJoinGroup={handleJoinGroup} error={error}/>)}
            </ul>
        </div>

    </>
}
