import { useState } from 'react';
import axios from 'axios';
import { FaTimesCircle } from 'react-icons/fa';

const SigninForm = () => {
    const [ user, setUser ] = useState('');
    const [ secret, setSecret ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ problem, setProblem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            'username': user, 
            'secret': secret, 
            'first_name': firstName, 
            'last_name': lastName
        }

        try {
            await axios.post('https://api.chatengine.io/projects/people/', 
            newUser,
            { headers:  { "Private-Key": 'ff158f92-6b68-47f5-a7f0-32b5ade713f5' } 
            });

            window.location.reload();
        } catch (error) {
            setProblem('No se pudo registrar. Revise los datos y reintente.');
        }
    }

    const checkPassword = (e) => {
        let error = document.getElementById('pw-error');
        let register = document.getElementById('register-btn');

        if(e.target.value === '') {
            error.style.display = 'none';
            register.disabled = true;
        } else if(e.target.value !== secret) {
            error.style.display = 'block';
            register.disabled = true;
        } else {
            error.style.display = 'none';
            register.disabled = false;
        }
    }

    let isVisible = false;

    const toggleModal = (e) => {
        let modal = document.querySelector('.sign-modal');

        if(!isVisible) {
            modal.style.top = '0';
            isVisible = true;
        } else {
            modal.style.top = '-200%';
            isVisible = false;
        }
    }

    return(
        <div>
            <button className="sign-btn" onClick={toggleModal}>No tengo una cuenta</button>

            <div className="sign-modal">
                <button className="toggle-btn" onClick={toggleModal}>
                    <FaTimesCircle className="toggle-icon" />
                </button>
                <form className="register" onSubmit={handleSubmit}>
                    <h1 className="title">ZHAT</h1>

                    <input className="input" value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Username" required />

                    <input className="input" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Nombre" required />

                    <input className="input" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Apellido" required />

                    <input className="input" value={secret}
                    type="password"
                    onChange={(e) => setSecret(e.target.value)}
                    placeholder="Contraseña" required />

                    <div className="repeat-password-container">
                        <input className="input" id="repeat-password"
                        onInput={checkPassword} type="password"
                        placeholder="Repite la contraseña" required />
                        <p id="pw-error">Las contraseñas no coinciden!</p>
                    </div>

                    <button className="submit-btn" id="register-btn" type="submit" disabled>
                        Regístrate
                    </button>
                    <p className="error">{problem}</p>
                </form>
            </div>
        </div>
    )
}

export default SigninForm;