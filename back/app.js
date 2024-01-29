const express = require('express');
const session = require('express-session');
const hashedSecret = require('./crypto/hash');
const router = require('./routes/user');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
        secret: hashedSecret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Backend listening http://localhost:${PORT}`)
})