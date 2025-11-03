const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const personsRouter = require('./routes/persons');

const app = express();

// ✅ Middleware setup
app.use(logger('dev'));
app.use(express.json()); // For JSON bodies
app.use(express.urlencoded({ extended: false })); // For form data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Default route for sanity check
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// ✅ Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/persons', personsRouter);

// ✅ 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
