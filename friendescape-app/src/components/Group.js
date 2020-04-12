import React, { useState } from 'react'
import Moment from 'react-moment'
import '../sass/components/group.sass'
import Feedback from './Feedback'



export default function ({ item, handleJoinGroup, error }) {
    const [warning, setWarning] = useState(false)

    const { date, time, subevents, escapeRoom} = item


     return <>

        <li className={escapeRoom.minplayers >= subevents.lenght ? "itemyes" : "itemno"}>>
        <Moment format="YYYY/MM/DD">{date}</Moment>
            <li>
            <h5>Title: {escapeRoom.title}</h5>
            <h5>Location: {escapeRoom.location}</h5>
            <h5>Time: {time}</h5>
            <h5>Punctuation: {escapeRoom.punctuation}</h5>
            <h5>Theme: {escapeRoom.theme}</h5>
            <h5>Difficulty: {escapeRoom.difficulty}</h5>
            <h5>Duration: {escapeRoom.duration}</h5>
            <h5>Price: {escapeRoom.price}</h5>
            <img className='results__img' src ={escapeRoom.img} alt="img escroom"/>
            <h5>Subevents: {subevents && subevents.map(subbed => (<>
                <p>{subbed.name}</p>
            </>))}</h5>
            <h5>Min-Players: {escapeRoom.minplayers}</h5>
            <h5>Max-Players: {escapeRoom.maxplayers}</h5>
       </li>
    
            {/* <h5>State : {state}</h5> */}
            <a href="" className="btn--main" onClick={e => {
                e.preventDefault()
                setWarning(!warning)
            }}><i class="fas fa-users"></i>Join Group</a>
            {warning && (<>
            <p>Read carefully these instructions. If you press Join Group you will be a new member of the group. If you are a show off you will receive a fault. If you commit 3 faults you will be banned.</p>
            <button onClick={ event => {
                const id = item.id
                event.preventDefault();
                setWarning(false)
                handleJoinGroup(id)
                }}>Understood</button>
            <button onClick={event=> {
                event.preventDefault();
                setWarning(false)
            }}>Cancel</button>
            </>)}
            
            {error && <Feedback message={error} level="warning"/>}
            {/* <button onClick={() => {
        alert.show('Read carefully these instructions. If you press Join Group you will be a new member of the group. If you are a show off you will receive a fault. If you commit 3 faults you will be banned.')
      }} >Join Group
    </button> */}


        </li>
    </>
}

