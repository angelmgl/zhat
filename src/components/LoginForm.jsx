import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': 'a535e95b-8fbb-46fd-b164-46d3e687cd44',
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Pone bien tus datos ctm')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">ZHAT</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="input" placeholder="Nombre de usuario" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="input" placeholder="Contraseña" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Entrar al Zhat</span>
                        </button>
                        <h2 className="error">{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;