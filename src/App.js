import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatUi/ChatFeed';
import ChatList from './components/ChatUi/ChatList';
import ChatSettings from './components/ChatUi/ChatSettings/';
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
            renderChatList={(chatAppProps) => <ChatList {...chatAppProps} />}
            renderChatSetting={(chatAppProps) => <ChatSettings {...chatAppProps} />}
        />
    )
}

export default App;