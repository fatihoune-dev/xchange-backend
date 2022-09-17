const express = require("express");
const Document = require("../models/Document");
const router = express.Router();

// Creer un utilisateur
// http://localhost:3000/documents/create
router.post("/create", async (req, res) => {
  try {
    const document = new Document(req.body);
    const response = await document.save();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// Modifier un utilisateur
// http://localhost:3000/documents/update/<documentId>
router.put("/update/:id", async (req, res) => {
  try {
    const response = await Document.findByIdAndUpdate(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// Supprimer un utilisateur
// http://localhost:3000/documents/delete/<id>
router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await Document.findByIdAndDelete(req.params.id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// http://localhost:3000/documents/list
router.get("/list", async (req, res) => {
  try {
    const documents = await Document.find();
    res.send(documents);
  } catch (error) {
    res.send(error);
  }
});

// retrouver un utilisateur
// http://localhost:3000/documents/byid/<documentId>
router.get("/byid/:id", async (req, res) => {
  try {
    const response = await Document.findById(req.params.id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
