const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getSingleThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../controllers/thoughtController.js");

//get all thoughts
//post route creates new thought
//http://localhost:3001/thoughts/
router.route("/").get(getThoughts).post(createThought);

//get single thought
//put route updates a thought
//delete route deletes a thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//create a new reaction on a thought
router.route("/:thoughtId/reactions").post(createReaction);

//delete reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;

// //test routes
// router.get("/", (req, res) => {
//   res.send("We are on posts");
// });

// router.get("/specific", (req, res) => {
//   res.send("Specific post");
// });

// router.post("/", async (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });

//   try {
//     const savedPost = await post.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
