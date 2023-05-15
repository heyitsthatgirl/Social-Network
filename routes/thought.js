const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getSingleThought,
} = require("../controllers/thoughtController.js");

//routes
router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId").get(getSingleThought);

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
