import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Login = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <button className="btn-login">Entrar</button>
        </div>
    );
}

ReactDOM.render(<Login />, document.getElementById('root'));