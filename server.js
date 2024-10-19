const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const saltRounds = 10;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Your MySQL password
    database: 'sign' // Your MySQL database name
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Register endpoint
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    try {
        const [results] = await connection.promise().query('SELECT * FROM login WHERE email = ?', [email]);

        if (results.length > 0) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await connection.promise().query('INSERT INTO login (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Registration failed. Please try again.' });
    }
});

// Book a car endpoint
app.post('/book', async (req, res) => {
    const { name, email, carModel, bookingDate, bookingTime } = req.body;

    if (!name || !email || !carModel || !bookingDate || !bookingTime) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    try {
        const sql = 'INSERT INTO bookings (name, email, car_model, booking_date, booking_time) VALUES (?, ?, ?, ?, ?)';
        await connection.promise().query(sql, [name, email, carModel, bookingDate, bookingTime]);

        res.status(200).send({ message: 'Booking successful!' });
    } catch (err) {
        console.error('Booking error:', err);
        res.status(500).send({ error: 'Booking failed. Please try again.' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
