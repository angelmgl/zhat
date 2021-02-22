import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { FaPaperPlane, FaImage } from 'react-icons/fa';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const messageInput = document.getElementById("message-input");
    const textInput = document.getElementById("text-input");
    const submitButton = document.getElementById("submit-button");

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text });

        setValue('');
        messageInput.innerText = '';
    }

    const getValue = () => {
        textInput.value = messageInput.innerText;
        setValue(textInput.value);

        
        messageInput.addEventListener("keyup", (e) => {
            // Number 13 is the "Enter" key on the keyboard
            if (e.keyCode === 13) {
                submitButton.click();
            }
        });

        isTyping(props, chatId);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    }

    return(
        <form className="message-form" onSubmit={handleSubmit}>
            
            <label htmlFor="upload-button">
                <span className="image-button" >
                    <FaImage className="picture-icon" />
                </span>
            </label>

            <div
                className="message-input"
                id="message-input"
                contentEditable="true"
                data-text="Escribe un mensaje..."
                onInput={getValue}
            />

            {/*this is to connect the messageInput with the submit event*/}
            <input id="text-input" onSubmit={handleSubmit} style={{display: 'none'}} />

            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />

            <button type="submit" id="submit-button" className="send-button">
                <FaPaperPlane className="send-icon" />
            </button>
        </form>
    );
} 

export default MessageForm;