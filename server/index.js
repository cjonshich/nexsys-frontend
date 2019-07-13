const express = require('express');
const morgan = require('morgan');
const app = express();

// Config
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes

// Init
app.listen(3000, () => {
    console.log('Server on port ', app.get('port'));
})
