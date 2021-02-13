import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="a535e95b-8fbb-46fd-b164-46d3e687cd44"
            userName="angelmgl"
            userSecret="zhat"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;