const { Schema } = require("mongoose");
const Story = require("../schemas/PersonalSotries");
const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Creating a new Stories instance by "/api/notes/createStory" request
router.post(
    "/createStory",
    [
      body("name", "Enter a valid name with at least 3 alphabets").isLength({
        min: 3,
      }),
      body("subject", "Enter a valid subject with at least 3 alphabets").isLength({
        min: 3,
      }),
      body(
        "story",
        "Enter a valid story explaining your real-life experience :)"
      ).isLength({ min: 10 }),
      body("tag", "Enter a valid tag, e.g., General, Student, etc").isString(),
      body("email", "Enter a valid email").isEmail()
    ],
    async (req, res) => {
      // Checking for any errors with specified validations
      let errors = await validationResult(req);
  
      // If errors are found, a bad request with an error message is sent
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        // Create a new Story instance
        const story = await Story.create({
          subject: req.body.subject,
          story: req.body.story,
          name: req.body.name,
          email: req.body.email,
          tag: req.body.tag,
        });
        res.status(200).send(story);
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ errors: error.message });
      }
    }
  );
  
module.exports = router;