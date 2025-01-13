import express from 'express'
import client from './db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

// Реєстрація
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
    
        if (!username || !email || !password) {
            return res.status(400).json({message: 'Too few letters'})  
        }

        const userQuery = 'SELECT * FROM users WHERE email = $1'
        const userQueryFind = await client.query(userQuery, [email])

        if (userQueryFind.rows.length > 0) {
            return res.status(404).json({message: 'User already exists'})  
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const InsertUserQuery = 'INSERT INTO users (username, email,password) VALUES ($1,$2,$3)'
        await client.query(InsertUserQuery, [username, email, hashPassword])

        return res.status(201).json({message: 'User successfully created'})  
    } catch (err) {
        return res.status(404).json({message: 'There is an error', err})  // Використовуємо `return`, щоб припинити подальше виконання
    }
})

// Логін

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
        const userResult = await client.query(checkUserQuery, [email]);

        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'User not existed' });
        }

        const isMatch = await bcrypt.compare(password, userResult.rows[0].password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        const token = jwt.sign(
            { email: userResult.rows[0].email }, // payload 
            process.env.MY_JWT_KEY,
            { expiresIn: '3h' }
        );

        res.status(200).json({ token });
    } catch (err) {
        console.error('Server error:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Верифікація токена
const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: 'No Token Provided' });
        }
        const decoded = jwt.verify(token, process.env.MY_JWT_KEY);
        req.email = decoded.email; // Зберігаємо email із токена
        next();
    } catch (err) {
        console.error('Token verification error:', err.message);
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

// Отримання користувача
router.get('/home', verifyToken, async (req, res) => {
    try {
        const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
        const userResult = await client.query(checkUserQuery, [req.email]);

        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'User not existed' });
        }

        return res.status(200).json({ user: userResult.rows[0] });
    } catch (err) {
        console.error('Server error:', err.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});


// router.post('/login', async (req, res) => {
//     const {email, password} = req.body

//     try {

//         if (!email || !password) {
//             res.status(400).json({message: 'Missing email or password'})
//         }
//         const checkUserQuery = 'SELECT * FROM users WHERE email = $1'
//         const checkUserExists = await client.query(checkUserQuery, [email])

//         if (checkUserExists.rows.length === 0) {
//             return res.status(404).json({message: 'User not found'})
//         }

//         const comparePassword = await bcrypt.compare(password, checkUserExists.rows[0].password)

//         if (!comparePassword) {
//             return res.status(401).json({message: 'Wrong password'})
//         }

//         const token = jwt.sign(
//             { email: checkUserExists.rows[0].email },
//             process.env.JWT_KEY,
//             {expiresIn: '1h'}
//         )
        
//         res.status(200).json({token})
//     } catch (err) {
//         res.status(404).json({message: 'There is an error'})
//     }
// })

// const verifyToken = (req, res, next) => {
//     try {
//         const token = req.headers['authorization']?.split(' ')[1];
//         if (!token) {
//             return res.status(403).json({ message: 'No Token Provided' });
//         }
//         const decoded = jwt.verify(token, process.env.JWT_KEY);
//         req.email = decoded.email; // Зберігаємо email із токена
//         next();
//     } catch (err) {
//         console.error('Token verification error:', err.message);
//         return res.status(401).json({ message: 'Invalid Token' });
//     }
// };

// // Отримання користувача
// router.get('/home', verifyToken, async (req, res) => {
//     try {
//         const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
//         const userResult = await client.query(checkUserQuery, [req.email]);

//         if (userResult.rows.length === 0) {
//             return res.status(404).json({ message: 'User not existed' });
//         }

//         return res.status(200).json({ user: userResult.rows[0] });
//     } catch (err) {
//         console.error('Server error:', err.message);
//         return res.status(500).json({ message: 'Internal Server Error' });
//     }
// });


export default router


