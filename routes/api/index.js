const router = require('express').Router();
const userRoutes = require('./userRoutes').default;
const thoughtRoutes = require('./thoughtRoutes').default;

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
