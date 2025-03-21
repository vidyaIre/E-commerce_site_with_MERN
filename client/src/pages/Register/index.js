import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser({ name, email, password }));
    };
    const Register = () => {
        return (
            <div className="container mt-5">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" disabled={loading}>Register</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        )
    }
}

export default Register;