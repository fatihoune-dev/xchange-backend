const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

// Creer un utilisateur
// http://localhost:3000/users/create
router.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    user.password = await bcrypt.hash(req.body.password, 8);
    const response = await user.save();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// Modifier un utilisateur
// http://localhost:3000/users/update/<userId>
router.put("/update/:id", async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 8);
    }
    const response = await User.findByIdAndUpdate(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// Supprimer un utilisateur
// http://localhost:3000/users/delete/<id>
router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await User.findByIdAndDelete(req.params.id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// http://localhost:3000/users/list
router.get("/list", async (req, res) => {
  try {
    const users = await User.find().sort("-updatedAt");
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

// retrouver un utilisateur
// http://localhost:3000/users/byid/<userId>
router.get("/byid/:id", async (req, res) => {
  try {
    const response = await User.findById(req.params.id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
