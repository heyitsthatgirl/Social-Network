const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ thought }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then(
        (user) =>
          !user
            ? res
                .status(404)
                .json({ message: "thought created, but no user with this ID" })
            : res.json({ message: "thought created" })
        // {
        //   res.json(user);
        // }
      )
      .catch((err) => res.status(500).json(err));
  },
  //update thought
  updateThought(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.thoughtId },
      // $set operator replaces the value of a field with the specified value
      { $set: req.body },
      // new: true returns the document with the applied update
      { new: true }
    );
  },
};

//    /api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id
