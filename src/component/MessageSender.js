import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'

import "../css-component/MessageSender.css"
import { useStateValue } from "./StateProvider"

import db from "../firebase"
import firebase from "firebase" //why import like this??????


function MessageSender() {
    const [ {user}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messagesender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`Share things to your fans, ${user.displayName}!!!`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Submit!
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">

                </div>
            </div>
        </div>
    )
}

export default MessageSender
