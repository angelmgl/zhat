import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './styles/styles.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine 
            height="100vh"
            projectID="a535e95b-8fbb-46fd-b164-46d3e687cd44"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;