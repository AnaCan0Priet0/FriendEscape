import React, { useState } from 'react'
import Logo from '../images/FriendEscape.png'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import TimeKeeper from 'react-timekeeper'
import Calendar from './Calendar'
import Clock from './Clock'


export default function ({ user, onHandleLogOut, onHandleGoHome, onHandleCreateANewGroup, availableEscapes }) {
    const { name } = user
    // const {title, location, punctuation, theme, difficulty, duration, price, minplayers, maxplayers, img} = availableEscapes
    const [time, setTime] = useState('12:00pm')
    //'12:34pm'
    const [selectedRoom, setSelectedRoom] = useState()
    const [date, setDate] = useState()
    

    function handleLogOut(event) {
        event.preventDefault()
        onHandleLogOut()

    }
    function handleGoToHome(event) {
        event.preventDefault()
        onHandleGoHome()
    }

    // function handleGoToCreateAGroup(event) {
    //     event.preventDefault()
    //     //console.log(`Group created: ${date}, ${time} in ${selectedRoom._id}`)
    //     onHandleCreateANewGroup(selectedRoom._id, date, time)
    // }


    var today = new Date()
    var nextMonths = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90);

    function handleDate(selectedDate) {
        alert(selectedDate)
        setDate(selectedDate)
        console.log(date)
    }

    function handleSetTime(selectedTime) {
        setTime(selectedTime)
        console.log(time)
    }

    return <>
        {/* Header */}
        <div className="header">
            <figure>
                <img className='header__logo' src={Logo} alt="Logo" />
            </figure>
            <div className='header__username'>
                <p>Welcome {name}</p>
                <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
            </div>
        </div>

        <div className="creategroup">

            <h1>CREATE A NEW GROUP</h1>
            {/* <Calendar handleDate={handleSetDate} /> */}
            <h3>SELECT A DATE</h3>
            <InfiniteCalendar
                width={400}
                height={300}
                min={today}
                max={nextMonths}
                selectedDate={date}
                onSelect={function(date) {
                    alert('You selected: ' + date )
                    setDate( new Date(date))
                    console.log(date)
                 }}
            />
            <h3>CHOOSE THE TIME</h3>
        <TimeKeeper
            //time={time}
            onChange={(newTime) => setTime(newTime.formatted12) }
            doneButton={(newTime) => (
                <div
                    style={{ textAlign: 'center', padding: '10px 0' }}
                    onClick={() => alert('new time is now', newTime.formatted12)}
                >Close
                </div>
            )}
        />
            {/*<Clock handleTime={handleSetTime} />*/}

            {date && <>
                <h3>CHOOSE YOUR ESCAPE ROOM</h3>
                <select
                    onChange={event => {/*this.setState({selectedEscape: e.target.value})*/
                        event.preventDefault();
                        console.log(event.target.value)
                        const selected = availableEscapes.find(room => room._id === event.target.value)
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
                        <img src={selectedRoom.img} />
                        <a className="btn--main" href={selectedRoom.web}><i class="fas fa-ticket-alt"></i>Book escape</a>
                    </div>
                }
            </>}

        </div>


        <span>Time is {time}</span>
        <button onClick={event => {
            event.preventDefault();
            //console.log(`Group created: ${date}, ${time} in ${selectedRoom._id}`)
            onHandleCreateANewGroup(selectedRoom._id, date, time)}} className="main__btn"> Create a Group </button>
        }
    </>

}

