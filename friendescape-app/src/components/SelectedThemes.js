import React, { useEffect, useState} from 'react'
// import '../sass/components/home.sass'
import Logo from '../images/FriendEscape.png'
import Item from './Item'



export default function ({ onHandleGoHome, themeEscapes, onGoToDetail}) {


    function handleGoToHome(event){
        event.preventDefault()
        onHandleGoHome()
     }

return <>


<div>
 <p>Escape Rooms</p>
 <ul>
     {themeEscapes.map(escapeRoom => <Item key={escapeRoom._id} item={escapeRoom} onGoToDetail={onGoToDetail}/>)}
     <a onClick={handleGoToHome} className="textMenu" >Go Back</a>
 </ul>
</div>

    </>
}
