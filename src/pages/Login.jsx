import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!values.email || !values.password) {
            setMessage("Email and Password are required.");
            return;
        }

        try {
            const res = await axios.post('http://localhost:3000/signup', values);

            if (res.status === 200) {
                setMessage("Signup Successful! Redirecting...");
                setTimeout(() => {
                    navigate('/home');  
                }, 2000);
            } else {
                setMessage("Signup failed. Please try again.");
            }
        } catch (err) {
            
            console.error('Signup error:', err);
            if (err.response) {
                 
                navigate('/home');
            } else if (err.request) {
               
                setMessage("Signup failed: No response from server. Please check your network.");
            } else {
                 
                setMessage(`Signup failed: ${err.message}`);
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input 
                            type='email' 
                            placeholder='Enter Email' 
                            name='email' 
                            className='form-control rounded-0' 
                            onChange={handleChange} 
                            value={values.email}
                            required 
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input 
                            type='password' 
                            placeholder='Enter Password' 
                            name='password' 
                            className='form-control rounded-0' 
                            onChange={handleChange} 
                            value={values.password}
                            required 
                        />
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                    {message && <p>{message}</p>}
                    <p>You agree to our terms and policies</p>
                    <a href="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</a>
                </form>
            </div>
        </div>
    );
}

export default Signup;
