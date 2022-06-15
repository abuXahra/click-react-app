import React, { useState } from 'react'
import bellA from './bellA.png'
import bellB from './bellB.png'

function NewComp() {

    const [message, setmessage] = useState("Subscribe to Simplilearn");
    const [sub, setsub] = useState("Subscribe");
    const [url, seturl] = useState(bellA);


    const ButtonChange = () => {
        setmessage("Hit the Bell Icon below to get notified of every updates");
        setsub("Subscribed");
    }

    const ImgUrl = () => {
        seturl(bellB);
        setmessage("Hurray!!! Enjoy You React js training");
    }

    const style = {
        color: "purple",
        fontStyle: "italic"
    }

    const imgStyle = {
        heigh: "50px",
        width: "50px"
    }

    return (
        <div className='App'>
            <h1 style={{ color: "green" }}>Welcome</h1>
            <h3 style={style}>{message}</h3>
            <button onClick={ButtonChange}>{sub}</button>
            <div><img onClick={ImgUrl} src={url} style={imgStyle} alt="" srcset="" /></div>
        </div>
    )
}

export default NewComp
