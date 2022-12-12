import {useParams} from "react-router-dom";
import {useUserContext} from "../Context/UserContext";
import useGetConversation from "../Hook/useGetConversation";
import useSendMessage from "../Hook/useSendMessage";
import {useEffect, useState} from "react";
import useGetCurrentUserId from "../Hook/useGetCurrentUserId";
import Message from "./Message";

export default function ChatRoom() {
    const {topic} = useParams();

    const sendMessage = useSendMessage();
    const getConversation = useGetConversation();
    const currentUserId = useGetCurrentUserId();

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    
    const handleChange = (e) => {
        setNewMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        sendMessage(topic, newMessage).then(data => {
            if (data.chat !== null) {
                console.log(data);
                setMessages(data.chat.messages);
            } else {
                console.log('ce chat est vide');
            }

        });
    }
    
    useEffect(() => {
        getConversation(topic).then(data => {
            if (data.chat !== null) {
                console.log(data);
                setMessages(data.chats.messages);
            } else {
                console.log('ce chat est vide');
            }

        });
    }, [])

    return (
        <div className='p-3' style={{height: '100vh', overflow: 'auto', position: 'relative'}}>
            <h1 className='mb-3'>Le Chat room !</h1>
            {messages.map((message, index) => {
                if (currentUserId !== message.user.id) {
                    return <Message key={index} fromMe={false} content={message.content} username={message.user.username}/>
                } else {
                    return <Message key={index} fromMe={true} content={message.content} username={message.user.username}/>
                }
            })}
            <form onSubmit={handleSubmit}>
                <label htmlFor='message' className='form-label'>Ajoutez un message</label>
                <input type="text" className='w-75 mb-5 d-block form-control' id='message'
                       onChange={handleChange} value={newMessage}/>
            </form>
        </div>
    )
}