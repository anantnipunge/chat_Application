
import ChatFeed from './components/ChatFeed.jsx';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return ( <LoginForm/> );

    return (
        <ChatEngine
        height="100vh"
        projectID= 'a20aa090-fd19-4db9-bf7a-b8a591e09c37'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
        />
    )
}

export default App;