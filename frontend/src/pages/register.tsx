import React from 'react';

const Register = () => {
    return (
        <form>
            <label htmlFor="email">Adres email</label><br />
            <input id="email" type="text"/><br />
            <label htmlFor="login">Login</label><br />
            <input type="text" id="login"/><br />
            <label htmlFor="password">Hasło</label><br />
            <input id="password" type="password"/><br />
            <label htmlFor="repeat_password">Powtórz hasło</label><br />
            <input type="password" id="repeat_password"/>< br/>
            <button>Zarejestruj</button>
        </form>
    );
};

export default Register;