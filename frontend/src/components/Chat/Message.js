import { useState } from "react";

function Message({message : m}){
    const [message, setMessage] = useState(m);
    
    return (
        <>
            <div>{message}</div>
        </>
    );
}export default Message;