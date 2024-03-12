import React from 'react'

import { useParams } from 'react-router'

function Hello() {
    const { color,background } = useParams();
    return (
        <div style={{backgroundColor:`${background}`}}>
            <h1 style={{color:`${color}`}}>Hello {color} {background} </h1>
        </div>
    )
}

export default Hello
