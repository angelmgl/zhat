import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import Loader from './Loader';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    console.log(props);
    console.log(chats[activeChat]);

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`}
                className="read-receipt"
                style={{ float: isMyMessage ? 'right' : 'left',
                        backgroundImage: `url(${person?.person?.avatar})` }}
            />
        ))
    }

    const scrollDown = () => {
        var feed = document.getElementById('chat-feed');
        feed.scrollTop = feed.scrollHeight;
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                        <div className="read-receipts" 
                            style={{ marginRight: isMyMessage ? '18px' : '0px',
                            marginLeft: isMyMessage ? '0px' : '18px' }} >
                                {renderReadReceipts(message, isMyMessage)}
                        </div>
                        {scrollDown()}
                    </div>
                </div>
            )
        });
    }

    if(!chat) return <Loader />;

    return(
        <div className="chat-feed" id="chat-feed">
            <div className="chat-title-container"> 
                <div className="chat-title">{ chat?.title }</div>
                <div className="chat-subtitle">{ chat.people.map(person => `${person.person.username} `) }</div>
            </div>
            { renderMessages() }
            <div className="space" />
            <div className="message-form-container" >
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
}

export default ChatFeed;