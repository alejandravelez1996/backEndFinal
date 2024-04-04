const express = require('express');
const userRouter = require('./user.routers');
const cityRouter = require('./city.routers');
const hotelRouter = require('./hotel.routers');
const imageRouter = require('./image.routers');
const reviewRouter = require('./review.routers');
const bookingRouter = require('./booking.routers');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter);
router.use(cityRouter);
router.use(hotelRouter);
router.use(imageRouter);
router.use(reviewRouter);
router.use(bookingRouter);


module.exports = router;