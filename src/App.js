
import ChatFeed from './components/ChatFeed.jsx';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return ( <LoginForm/> );

    return (
        <ChatEngine
        height="100vh"
        projectID= '4217a35a-7595-4240-8a6f-a0c287487d47'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
        />
    )
}

export default App;