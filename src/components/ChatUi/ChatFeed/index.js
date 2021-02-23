import React, { Component } from 'react'

import Title from './TitleSection'
import { Loading, AuthFail, Welcome } from './Steps'

import Message from './Message'
import MessageForm from './MessageForm'

import _ from 'lodash'

import { stringToColor } from '../Utilities/colorMapping'

export default class ChatFeed extends Component {
    state = {
        duration: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ duration: 100 })
        }, 3000); // Once the chat loads, start animating
    }

    renderTypers() {
        const { typingData, activeChat } = this.props
        const typers = typingData && typingData[activeChat] 
                    ? typingData[activeChat] : []

        return typers.map((typer, index) => {
            return (
                <div 
                    key={`typer_${index}`} 
                    style={{ color: stringToColor(typer), padding: '2px', paddingLeft: '12px' }}
                >
                    {`${typer} está escribiendo...`}
                </div>
            )
        })
    }

    scrollDown() {
        var feed = document.getElementById('chat-feed');
        feed.scrollTop = feed.scrollHeight;
    }

    renderMessages() {
        const { messages, chats, activeChat } = this.props
        const chat = chats && chats[activeChat]
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const nextMessageKey = index === keys.length - 1 ? null : keys[index + 1]
            
            return (
                <Message 
                    key={`message_${index}`}
                    creds={this.props}
                    chat={chat}
                    message={message}
                    lastMessage={messages[lastMessageKey]}
                    nextMessage={messages[nextMessageKey]}
                />
            )
        })
    }

    componentDidUpdate() {
        if(!_.isEmpty(this.props.messages)) {
            this.scrollDown()
        }
    }

    render() {
        const { chats, creds, activeChat } = this.props
        const chat = chats && chats[activeChat] 

        if(creds === null) { 
            return <Loading />
        }

        if(creds === undefined) {
            return <AuthFail />
        }

        if(creds && chats !== null && _.isEmpty(chats)) {
            return <Welcome />
        }

        return (
            <div className="chat-feed-container">
                <Title chat={chat} />

                <div className="chat-message-container" id="chat-feed">
                    { this.renderMessages() }

                    { this.renderTypers() }
                </div>

                <MessageForm creds={this.props} chatId={activeChat} />
            </div>
        )
    }
}