import React, { useState} from 'react'
import Logo from '../images/FriendEscape.png'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import TimeKeeper from 'react-timekeeper'


export default function ({ user, onHandleLogOut, onHandleGoHome, onHandleCreateANewGroup, availableEscapes}) {
    const {name} = user
    // const {title, location, punctuation, theme, difficulty, duration, price, minplayers, maxplayers, img} = availableEscapes
    const [time, setTime] = useState('12:34pm')
    debugger 
    
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

            <select value={this.state.selectedEscape}
              onChange={(e) => this.setState({selectedEscape: e.target.value})}>
            
            {availableEscapes.map((group) => <option key={group.title} value={group.title}>{group.display}</option>)}
            </select>
            
            <InfiniteCalendar
    width={400}
    height={300}
    min={today}
    max={nextMonths}
    onSelect={function(date) {
        alert((date))
     }}
     
  />

{/* <TimeKeeper 
switchToMinuteOnHourSelect
onDoneClick/>
            {/* <ul>
                {availableGroups.map(group => <Group item={group} onClick={onItemClick} handleJoinGroup={handleJoinGroup} error={error} id={id}/>)}
            </ul> */}
        </div>
       
                                        />  */}
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

