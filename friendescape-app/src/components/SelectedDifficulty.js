import React from 'react'
import Item from './Item'


export default function ({ onHandleGoHome, difficultyEscapes, onGoToDetail}) {


    function handleGoToHome(event){
        event.preventDefault()
        onHandleGoHome()
     }

return <>


<div>
 <p>Easy difficulty escapes Room</p>
 <ul>
     {difficultyEscapes.map(escapeRoom => <Item key={escapeRoom._id} item={escapeRoom} onGoToDetail={onGoToDetail}/>)}
     <a onClick={handleGoToHome} className="textMenu" >Go Back</a>
 </ul>
</div>

    </>
}
