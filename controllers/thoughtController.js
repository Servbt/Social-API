const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

const thoughtController = {
  // /api/thoughts

  // get all thoughts
  getThoughts(req, res) {
    Thought.find({})
      .sort({ _id: -1 })
      .then(thoughtsData => res.json(thoughtsData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one thoughts by id
  getSingleThought({ parameterss }, res) {
    Thought.findOne({ _id: params.id })
      .sort({ _id: -1 })
      .then(thoughtsData => {
        if (!thoughtsData) {
          res.status(404).json({ message: 'could not find thought through ID' });
          return;
        }
        res.json(thoughtsData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  createThought({ body }, res) {
    Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'could not find thought through ID' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
},

  // update Thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(thoughtsData => {
        if (!thoughtsData) {
          res.status(404).json({ message: 'could not find thought through ID' });
          return;
        }
        res.json(thoughtsData);
      })
      .catch(err => res.json(err));
  },

  // delete thought by ID
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(thoughtsData => {
        if (!thoughtsData) {
          res.status(404).json({ message: 'could not find thought through ID' });
          return;
        }
        return User.findOneAndUpdate(
          { _id: parmas.userId },
          { $pull: { thoughts: params.Id } },
          { new: true }
        )
      })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'could not find thought through ID' });
          return;
        }
        res.json(userData);
      })
      .catch(err => res.json(err));
  },

};

module.exports = thoughtController