const express = require('express');
const app = express();
const userRouter = require('./routes/users.js');
const showRouter = require('./routes/shows.js');

app.use('/users', userRouter);
app.use('/shows', showRouter);

module.exports = app;
