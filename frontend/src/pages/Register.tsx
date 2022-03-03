import React, {useRef} from 'react';
import axios from "axios";



const RegisterUser = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const repeatPassRef = useRef<HTMLInputElement>(null)

    const formSubmited = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const email = emailRef.current!.value
        const login = loginRef.current!.value
        const password = passwordRef.current!.value
        const repeatPass = repeatPassRef.current!.value

        axios.post('http://localhost:3001/auth/register', {
            email,
            login,
            password
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <form onSubmit={formSubmited}>
            <label htmlFor="email">Adres email</label><br />
            <input ref={emailRef} id="email" type="text"/><br />
            <label htmlFor="login">Login</label><br />
            <input ref={loginRef} type="text" id="login"/><br />
            <label htmlFor="password">Hasło</label><br />
            <input ref={passwordRef} id="password" type="password"/><br />
            <label htmlFor="repeat_password">Powtórz hasło</label><br />
            <input ref={repeatPassRef} type="password" id="repeat_password"/>< br/>
            <button>Zarejestruj</button>
        </form>
    );
};

export default RegisterUser;