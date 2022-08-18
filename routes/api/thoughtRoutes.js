const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
  removeThought,
  //need to test if this will work
  // addReaction,
  // deleteReaction,
  // removeReaction,

} = require('../../controllers/thoughtController');

// getting all thoughts
router.route('/').get(getThoughts).post(createThought);

// trying to fetch a single thought
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// trying to add a thought
router.route('/addthought/:thoughtId').post(addThought);

// trying to remove a thought
router.route('/removethought/:thoughtId').delete(removeThought);

module.exports = router;
