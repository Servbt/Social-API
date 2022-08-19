const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, deleteThought, updateThought, createReaction, deleteReaction } = require( '../../controllers/thoughtController');

// getting all thoughts
router.route('/').get(getThoughts).post(createThought);

// trying to fetch a single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// // trying to add a thought
// router.route('/:thoughtId/reactions').post(createReaction);

// // trying to remove a thought
// router.route('/thoughtId/:reactions/reactionId').delete(deleteReaction);

module.exports = router;