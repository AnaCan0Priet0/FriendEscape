import React, { useEffect, useState } from 'react'
import '../sass/components/profile.sass'
import Logo from '../images/FriendEscape.png'
// import Item from './Item'



export default function ({ user, _id, onHandleLogOut, onGoToJoinGroups, onHandleProfile, onCreateAGroup }) {
    debugger
    const { name, surname, email, telf, password, pubevents, foults, trusty, deactivated, subbedTo: Group } = user
    function handleLogOut(event) {
        event.preventDefault()
        onHandleLogOut()

    }
    function handleGoToJoinGroups(event) {
        event.preventDefault()

        onGoToJoinGroups()
    }

    function handleGoToCreateAGroup(event) {
        event.preventDefault()
        onCreateAGroup()
    }


    function handleProfile(event) {
        event.preventDefault()
        onHandleProfile()
    }


    return <>
        {/* Header */}
        <div className="header">
            <figure>
                <img className='header__logo' src={Logo} alt="Logo" />
            </figure>
            <div className='header__username'>
                <span>Welcome {name}</span>
                <i class="fas fa-cog" onClick={handleProfile}></i>
                <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
            </div>
        </div>




        <div className="profile">
            <div className="profile__text">
            <h5>Name: {name}</h5>
            <h5>Surname: {surname}</h5>
            <h5>Email: {email}</h5>
            <h5>Telf: {telf}</h5>
            <ul> {pubevents && pubevents.map(subbed => (<>
                key={subbed} item={subbed}>
                <li>{subbed.date}</li>
                <li>{subbed.time}</li>
                <li>{subbed.state}</li>
                <li>{subbed.created}</li>
                <button>Delete group</button>
                </>))}</ul> 
            <h5>Foults: {foults}</h5>
            <h5>Trusty: {trusty}</h5>
            <h5>Account: {deactivated}</h5>
            {/* <h5>Joined Groups: {subevents && subevents.map(subbed => (<>
                <p>{subbed.name}</p>
            </>))}</h5> */}
        </div>
        </div>

        <section className='main__groups'>
            <span> Do you want to live one adventure but you don't know who will be as brave as you? <br />
        Join one of our groups or create a new one and... Show must go on!!</span><br />

            <a href="" onClick={handleGoToJoinGroups} className="btn--main"><i class="fas fa-users"></i>Join a group</a>
            <a onClick={handleGoToCreateAGroup} className="btn--main"><i class="fas fa-user-plus"></i>Create a Group </a>

        </section>

    </>
}
