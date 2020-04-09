import React, { useState} from 'react'
import Logo from '../images/FriendEscape.png'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import TimeKeeper from 'react-timekeeper'


export default function ({ user, onHandleLogOut, onHandleGoHome, onHandleCreateANewGroup, availableEscapes}) {
    const {name} = user
    // const {title, location, punctuation, theme, difficulty, duration, price, minplayers, maxplayers, img} = availableEscapes
    const [time, setTime] = useState('12:34pm')
    const [selectedRoom, setSelectedRoom] = useState()
    let date
     
    
    function handleLogOut(event){
        event.preventDefault()
        onHandleLogOut()

    }
    function handleGoToHome(event){
        event.preventDefault()
        onHandleGoHome()
     }

    function handleGoToCreateAGroup(event){
        event.preventDefault()
        onHandleCreateANewGroup()
    }


     var today = new Date()
     var nextMonths = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90);
    
 

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

        <div className="creategroup">
        <a onClick={handleGoToHome} className="textMenu" >Go Back</a>
            <h1>CREATE A NEW GROUP</h1>
            <h3>firCHOOSE YOUR ESCAPE ROOM</h3>   
            <select 
              onChange={event => {/*this.setState({selectedEscape: e.target.value})*/
              event.preventDefault();
              console.log(event.target.value)
              const selected = availableEscapes.find(room => room._id === event.target.value)
              debugger
              setSelectedRoom(selected)
              
            }}>
            <option value="select a escaperoom">Select a escapeRoom</option>
            {availableEscapes && availableEscapes.map(escaperoom => <option key={escaperoom.title} value={escaperoom._id}>{escaperoom.title}</option>)}
            </select>
            

        {selectedRoom && 
        <div>
        <p>Description: {selectedRoom.description}</p> 
        <p>Location: {selectedRoom.location}</p>
        <p>Punctuation: {selectedRoom.punctuation}</p>
        <p>Difficulty: {selectedRoom.difficulty}</p>
        <p>Price: {selectedRoom.price}</p> 
        <p> Min-players: {selectedRoom.minplayers}</p>
        <p> Max-players: {selectedRoom.maxplayers}</p>
        <img src={selectedRoom.img}/> 
        <a className="btn--main" href={selectedRoom.web}><i class="fas fa-ticket-alt"></i>Book escape</a>
        </div>}

        <h3>SELECT A DATE</h3>    
       <InfiniteCalendar 
    width={400}
    height={300}
    min={today}
    max={nextMonths}
    onSelect={function(date) {
        alert((date))
        date = (date)
        console.log(date)
     }}
     
  />


        </div>
       
    <h3>CHOOSE THE TIME</h3>                                     
<TimeKeeper
time={time}
onChange={(newTime) => setTime(newTime.formatted12)}
doneButton={(newTime) => (
<div
style={{ textAlign: 'center', padding: '10px 0' }}
onClick={() => alert('new time is now', newTime.formatted12)}
>Close
                    </div>
                )}
            />
<span>Time is {time}</span>
<button onClick={handleGoToCreateAGroup} className="main__btn"> Create a Group </button>>


    </>
}

