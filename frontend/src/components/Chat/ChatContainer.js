
import { useState, useEffect } from "react";
import Message from './Message'
function ChatContainer({messages : msgs}) {
    // console.log(msgs);
    const [messages, setMessages] = useState(msgs);
    // console.log(messages);
    const [newMessage, setNewMessage] = useState('');

    function sendMessages() {
        setMessages([...messages,newMessage]); 
        // console.log(message);
        setNewMessage('');
    }


    useEffect(() => {
        // getMessages();
        console.log(msgs);
        setMessages(msgs);
    },[msgs]);       
    return (

        <div className='bg-white shadow-md border ml-4 w-3/4 h-full rounded-xl p-3'>
            <div className='flex flex-col w-full h-full bg-white'>
                <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
                        T
                    </div>
                    <div className="flex flex-col ml-3">
                        <div className="font-semibold text-sm">username</div>
                        <div className="text-xs text-gray-500">Active</div>
                    </div>
                </div>
                <div className="h-full">
                        <div>
                            <ul id="chatBody"
                                className="space-y-2  overflow-y-auto max-h-[67vh] flex flex-col-reverse w-full p-2 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch ">
                                    {
                                        
                                        messages.map((message,index) => (
                                            <Message key={index} message={message} />
                                        ))
                                    }

                            </ul>
                            <div className="">
                                <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                                <button onClick={sendMessages}>button</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>        
    );
}   export default ChatContainer;