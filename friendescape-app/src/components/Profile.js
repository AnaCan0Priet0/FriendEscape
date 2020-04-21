import React from 'react'
import '../sass/components/profile.sass'
import Logo from '../images/FriendEscape.png'
// import Junior from '../images/squirtle.png'
// import Medium from '../images/squirtle2.png'
// import Senior from '../images/squirtle3.png'

import Moment from 'react-moment'



export default function ({ user, _id, onHandleGoUserGroups, onHandleLogOut, onHandleGoHome, onGoToJoinGroups, onHandleProfile, onCreateAGroup }) {
    const { name, surname, email, telf, pubevents, foults, trusty, deactivated, subbedTo } = user
    let level


    if (user.trusty < 5) {
        level = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    } else if (user.trusty > 5 && trusty < 9) {
        level = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
    } else {
        level = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
    }
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

    function handleGoToHome(event) {
        event.preventDefault()
        onHandleGoHome()
    }

    function handleGoToHome(event) {
        event.preventDefault()
        onHandleGoHome()
    }

    function handleGoToUserGroups(event) {
        event.preventDefault()
        onHandleGoUserGroups()
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


        <a href="" onClick={handleGoToHome} className="btn--locations"><i class="fas fa-undo-alt"></i>Go Back</a>

        <div className="profile">

            <div className="profile__text">
                <img className="profile__picture" src={level} alt="Profile"></img>
                <h5>Name: {name}</h5>
                <h5>Surname: {surname}</h5>
                <h5>Email: {email}</h5>
                <h5>Telf: {telf}</h5>
                
                <h5>Published teams {user.pubevents.length} teams</h5>
                <h5>Subscribed to {subbedTo.length} teams</h5>

                {/* <ul> {pubevents && pubevents.map(pub => (<>
                    <li>{pub}</li>
                </>))}</ul> */}

{/*             
                <ul> {user.subbedTo && user.subbedTo.map(subbed => (<>
                    <li>{subbed._id}</li>
                    <li><Moment format="YYYY/MM/DD">{subbed.date}</Moment></li>
                    <li>{subbed.time}</li>
                    <li>{subbed.created}</li>
                    <br></br>
                </>))}</ul> */}
                <button className="btn__team" onClick={handleGoToUserGroups}><i class="fas fa-users"></i>Your teams</button>
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