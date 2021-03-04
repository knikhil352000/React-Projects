import React,{useState} from 'react'
import './ChatScreen.css'
const ChatScreen = () => {
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://i.insider.com/5c350e4c01c0ea12db0b25f5?width=1000&format=jpeg&auto=webp',
            message: 'Whats up dude ?'
        },
        {
            name: 'Ellen',
            image: 'https://i.insider.com/5c350e4c01c0ea12db0b25f5?width=1000&format=jpeg&auto=webp',
            message: 'Whats going on ?'
        },
        {
            message: 'Everything is fine'
        },
    ])
    return (
        <div className='chatScreen'>
            <p>YOU MATCHED WITH ELLEN ON 11/11/2020</p>
            {messages.map(message => (
                <div className='chatScreen__message'>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatScreen
