"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {

    const [loading, setLoading] = useState(false);


    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [errorPassword, setErrorPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const data = {
            email,
            username,
            password
        }
        await axios.post('/api/users', data)
            .then(data => {
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    };

    const handleErrorPassword = () => {
        if (password != repeatPassword) {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        };
    };
    useEffect(() => {
        handleErrorPassword();
    }, [repeatPassword])

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="jane@doe.com" />

                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="jane32" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="*******" name="password" />

                <label htmlFor="reapeat-password">Repeat password</label>
                <input type="password" placeholder="*******" name="repeat-password" />
                {errorPassword ? <p>Passwords dont match :(</p> : ''}

                <button type="submit" >Register 🌱</button>

            </form>
        </div>
    );
}

export default Page;
