import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import "./style.css"
const MyLogin = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ username, password }).catch(() =>
            notify('Invalid username or password')
        );
    };

    return (
    <div className="container">
        <div className="left">
            <div className="login-section">
                <header>
                    <h2 className="animation a1">ATNER Compta</h2>
                    <h4 className="animation a2">Votre comptabilité simplifiée</h4>
                </header>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-field animation a3"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field animation a4"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <p className="animation a5"></p>
                    <button className="animation a6" type='submit' onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
        <div className="right"> 
        </div>
    </div>
    )
}

export default MyLogin