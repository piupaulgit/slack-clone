import { InfoOutlined, StarBorder } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
import ChatInput from './ChatInput';
import db from './firebase';
import Message from './Message';
function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomDetails(snapshot.data())
            })
        }
        db.collection("rooms")
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp',"asc")
        .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())))
    }, [roomId])
    return (
        <div className="chat">
                <div className="chat__header">
                    <div className="chat__headerLeft">
                        <h4 className="chat__channelName">
                            <strong>#{roomDetails?.name}</strong>
                            <StarBorder></StarBorder>
                        </h4>
                    </div>
                    <div className="chat__headerRight">
                        <p>
                            <InfoOutlined></InfoOutlined> Details
                        </p>
                    </div>
                </div>
                <div className="chat__messages">
                    {roomMessages.map(({message, timestamp, user, userImage},index) => (
                        <Message 
                        key={index}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}></Message>
                    ))}
                </div>
                <ChatInput channelName={roomDetails?.name} channelId ={roomId}></ChatInput>
        </div>
    )
}

export default Chat
