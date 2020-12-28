import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './ChatInput.css'
import firebase from 'firebase';
import db from './firebase';
import { useStateValue } from './StateProvider';
function ChatInput({channelName,channelId}) {
    const [input, setInput] = useState(null);
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
            e.preventDefault()
            if(channelId){
                db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user.displayName,
                userImage: user.photoURL,
            });

            setInput('')
        }
    }   
    return (
        <div className="chatInput">
            <form>
                <input type="text" 
                onChange = {e => setInput(e.target.value)}
                value={input}
                placeholder={`Message in #${channelName} channel`}></input>
                <Button onClick={sendMessage} type="submit">Send</Button>
            </form>
        </div>
    )
}

export default ChatInput
