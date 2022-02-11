import React, {useRef} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    const loginClick = (e : React.SyntheticEvent) => {
        e.preventDefault()
        const login = loginRef.current!.value;
        const password = passwordRef.current!.value;

        console.log(login + ' ' + password)

        loginRef.current!.value = ''
        passwordRef.current!.value = ''
    }
    return (
        <form>
            <label htmlFor="login">Login</label><br />
            <input ref={loginRef} id="login" type="text"/><br />
            <label htmlFor="password">Hasło</label><br/>
            <input ref={passwordRef} type="password" id="password"/><br />
            <button onClick={loginClick}>Zaloguj</button>
            <Link to='/register'><button>Zarejestruj</button></Link>
        </form>
    );
};

export default Login;