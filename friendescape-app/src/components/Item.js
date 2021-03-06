import React, { useEffect, useState } from 'react'
import '../sass/components/item.sass'



export default function ({ item, onGoToDetail}) {
    const {title,theme,img, difficulty, punctuation} = item
    // function handleGoToDetail(event) {
    //     event.preventDefault()
    //     onGoToDetail()
    // }


     return <>
        <li className="results--item item" onClick={event => {
            event.preventDefault();
            const id = item._id
            onGoToDetail(id)
        }}>
            <h4>Title: {title}</h4>
            <h5>Theme: {theme}</h5>
            <h5>Difficulty: <span class={"rating-three rating-three-" + difficulty}></span></h5>
            <img src={img} />
            <h5>Punctuation: <span class={"rating-five rating-five-" + punctuation}></span></h5>
        </li>
    </>
}
