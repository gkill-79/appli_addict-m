



const express = require("express");
const router = express.Router();
const auth = require("../helpers/auth");

router.post("/auth/signin", async (req, res) => {
  const { email, password } = req.body;
  const result = await auth.signIn(req, email, password);

  if (result) {
    res.redirect("/profile");
  } else {
    res.render("signin", { error: "Email ou mot de passe incorrect" });
  }
});

// Autres routes ...

module.exports = router;














