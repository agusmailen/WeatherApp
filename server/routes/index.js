const rootRouter = require('express').Router();

//user routes
const user = require('./user');
rootRouter.use('/user', user);

//weather routes

const weather = require('./weather');
rootRouter.use('/weather', weather);

module.exports = rootRouter;