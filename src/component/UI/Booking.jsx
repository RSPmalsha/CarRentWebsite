import axios from 'axios';
import React, { useState } from 'react';

function Booking() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        carModel: '',
        bookingDate: '',
        bookingTime: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/book', values);
            setMessage(response.data.message);
           
           
        } catch(err)  {
             setMessage('Booking failed. Please try again.');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-3 rounded w-50'>
                
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
                        <label htmlFor='carModel'><strong>Car Model</strong></label>
                        <input 
                            type='text' 
                            placeholder='Enter Car Model' 
                            name='carModel' 
                            className='form-control rounded-0' 
                            value={values.carModel}
                            onChange={handleChange} 
                        /> 
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='bookingDate'><strong>Booking Date</strong></label>
                        <input 
                            type='date' 
                            name='bookingDate' 
                            className='form-control rounded-0' 
                            value={values.bookingDate}
                            onChange={handleChange} 
                        /> 
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='bookingTime'><strong>Booking Time</strong></label>
                        <input 
                            type='time' 
                            name='bookingTime' 
                            className='form-control rounded-0' 
                            value={values.bookingTime}
                            onChange={handleChange} 
                        /> 
                    </div>

                    <button type='submit' className='btn btn-primary w-100 rounded-0'>Book Now</button>
                    {message && <div className='alert alert-info mt-3'>{message}</div>}
                </form>
            </div>
        </div>
    );
}

export default Booking;
