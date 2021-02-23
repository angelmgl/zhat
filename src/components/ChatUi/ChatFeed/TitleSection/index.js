import React, { Component } from 'react'

import { timeSinceDate } from '../../Utilities/dateToString'

export default class Title extends Component {

    render() {
        const { chat } = this.props

        if (!chat) { return <div /> }

        return (
            <div className="chat-title-container">
                <div className="chat-title">
                    <h2>{ chat && chat.title }</h2>
                    <p>
                        {
                            chat.last_message.created && chat.last_message.created.length > 0 &&
                            `Activo el ${timeSinceDate(chat.last_message.created)}`
                        }
                    </p>
                </div>
            </div>
        );
    }
}