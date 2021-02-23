import React from 'react';

import { sendMessage, isTyping } from 'react-chat-engine'
import { FaPaperPlane, FaImage } from 'react-icons/fa'

import FileRow from './FileRow'
import ImagesInput from './ImagesInput'
import { TextAreaInput } from '../../components/Input'

export default class MessageForm extends React.Component {
    state = {
      value: '',
      files: []
    }

    onRemove(index) {
      let { files } = this.state 
      files.splice(index, 1)
      this.setState({ files })
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});

      isTyping(this.props.creds, this.props.chatId)
    }
  
    handleSubmit(event) {
      event.preventDefault();

      const { files } = this.state
      const text = this.state.value.trim()

      if (text.length > 0 || files.length > 0) {
        sendMessage(
          this.props.creds, 
          this.props.chatId, 
          { text, files },
          (data) => {}
        )
      }

      this.setState({ value: '', files: [] })
    }
  
    render() {
      return (
        <div 
          className='message-form-container'
        >

          <FileRow files={this.state.files} onRemove={(i) => this.onRemove(i)} />
          <div className="message-form-grid">
            <ImagesInput onSelectFiles={(files) => this.setState({ files })} />
            

            <label htmlFor="files" className="image-button">
              <FaImage className="picture-icon" />
            </label>

            <form onSubmit={this.handleSubmit.bind(this)} id="send-message">
                <TextAreaInput
                  value={this.state.value}
                  label='Escribe un mensaje...'
                  handleChange={this.handleChange.bind(this)}
                  onSubmit={this.handleSubmit.bind(this)}
                />
            </form>

            <button type="submit" id="submit-button" className="send-button" form="send-message">
              <FaPaperPlane className="send-icon" />
            </button>
          </div>
        </div>
      );
    }
}