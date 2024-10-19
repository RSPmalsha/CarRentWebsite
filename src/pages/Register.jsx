import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (values.password !== values.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/register', values);
            setMessage('Registered Successfully!');
            setError('');
            setTimeout(() => {
                navigate('/signup'); // Redirect to home after successful registration
            }, 2000); // Redirect after 2 seconds
        } catch (err) {
            setError('Registration failed. Please try again.');
            setMessage('');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input 
                            type='text' 
                            placeholder='Enter Name' 
                            name='name' 
                            className='form-control rounded-0' 
                            value={values.name}
                            onChange={handleChange} 
                        /> 
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input 
                            type='email' 
                            placeholder='Enter Email' 
                            name='email' 
                            className='form-control rounded-0' 
                            value={values.email}
                            onChange={handleChange} 
                        /> 
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input 
                            type='password' 
                            placeholder='Enter Password' 
                            name='password' 
                            className='form-control rounded-0' 
                            value={values.password}
                            onChange={handleChange} 
                        /> 
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='confirmPassword'><strong>Confirm Password</strong></label>
                        <input 
                            type='password' 
                            placeholder='Confirm Password' 
                            name='confirmPassword' 
                            className='form-control rounded-0' 
                            value={values.confirmPassword}
                            onChange={handleChange} 
                        /> 
                    </div>

                    <button type='submit' className='btn btn-primary w-100 rounded-0'>Register</button>

                    {message && <div className='alert alert-success mt-3'>{message}</div>}
                    {error && <div className='alert alert-danger mt-3'>{error}</div>}

                    <p className='mt-3'>By registering, you agree to our terms and policies.</p>
                    <a href="/signup" className='btn btn-light border w-100 rounded-0 text-decoration-none'>Back to Sign Up</a> 
                </form>
            </div>
        </div>
    );
}

export default Register;