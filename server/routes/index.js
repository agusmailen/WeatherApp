const rootRouter = require('express').Router();

//user routes
const user = require('./user');
rootRouter.use('/user', user);

module.exports = rootRouter;