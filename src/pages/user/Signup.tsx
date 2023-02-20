import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './auth.scss';

function Signup() {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const History = useHistory();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const res = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await res.json();
        if (data.status === 400 || !data) setError('user already exsist');
        else if (data.status === 500) setError('something went wrong');
        else {
            window.alert('success');
            History.push('/login');
        }
    };

    return (
        <div className="container-auth">
            <form onSubmit={handleSubmit} method="POST">
                <h2>SIGN UP</h2>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <div className="error">{error}</div>}
                <div className="btn">
                    <button type="submit">Signup</button>
                </div>

                <p>
                    already have an account?{' '}
                    <Link to="/login" className="Link">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}
export default Signup;
