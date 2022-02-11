import MasterLayout from '../../layouts/MasterLayout';
import ChatContainer from './ChatContainer'
import ChatLists from './ChatLists'
import { useState, useEffect } from "react";
function Chat() {
    const [messages, setMessages] = useState([]);
    
    async function getMessages() {
        let result = await fetch('http://localhost:8000/api/messages');
        result = await result.json();
        setMessages(result);
    } 

    useEffect(() => {
        getMessages();
    },[]);

    useEffect(() => {
        console.log(messages);
         
    },[]);
    return (
        <>
            <MasterLayout />
            <div className='w-5/6 m-auto mt-5 h-[89vh] antialiased'>
                <div className='flex w-full h-full justify-between'>
                    <ChatLists />
                    <ChatContainer messages={messages} />
                </div>
            </div>

        </>
    );
} export default Chat;