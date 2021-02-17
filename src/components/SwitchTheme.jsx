import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const switchTheme = () => {
    const chatFeed = document.getElementById('chat-feed');
    const header = document.getElementById('header');
    const formContainer = document.querySelector('.message-form-container');

    chatFeed.classList.toggle('bg-dark');
    header.classList.toggle('bg-dark');
    header.classList.toggle('light-text');
    formContainer.classList.toggle('message-dark');
};

const SwitchTheme = () => {
    return(
        <div>
            <input type="checkbox" className="checkbox" id="chk"
            onChange={switchTheme} />
            <label className="label" htmlFor="chk">
                <FaMoon className="fa-moon" />
                <FaSun className="fa-sun" />
                <div className="ball"></div>
            </label>
        </div>
    )
}

export default SwitchTheme;