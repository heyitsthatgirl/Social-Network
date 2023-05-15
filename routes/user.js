const router = require("express").Router();

const {
  createUser,
  getUsers,
  getSingleUser,
} = require("../controllers/userController.js");

//routes
//get route gets all users
//post route creates a new user
router.route("/").get(getUsers).post(createUser);

//get a single user
router.route("/:userId").get(getSingleUser);

//test route
// router.get("/", (req, res) => {
//   res.send("We are on user");
// });

module.exports = router;

// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list
