import React from 'react'
import "../css-component/CreatorIntro.css"
import { init } from 'ityped'
import { useEffect , useRef} from "react"
import artist1 from "../images/artist1.png"


function CreatorIntro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            backSpeed:60,
            strings: ["Indie Singer", "YouTuber", "Artist" ] ,
        })
    }, [])

    return (
        <div className="creatorintro">
            
            <div className="left">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src="../images/artist1" alt=""/>
                <div className="imgContainer">
                    <img src={artist1} alt=""/>
                </div>
            </div>
            <div className="right">
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br> */}
                <div className="wrapper">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Hello! 大家好！</h2>
                    <h1>I am Lynn Huang</h1>
                    <h3>Called me an <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

export default CreatorIntro
