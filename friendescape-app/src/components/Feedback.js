import React from 'react'
import '../sass/components/feedback.sass'

export default function ({ message, level }) {
//ojo
   
        return <p className={`feedback feedback--${level}`}>{message}</p>

    
}

