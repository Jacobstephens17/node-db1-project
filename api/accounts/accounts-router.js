const express = require("express");
const Account = require("./accounts-model");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const data = await Account.get();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const data = await Account.getById(req.params.id);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err});
  }
});


router.post("/", async (req, res) => {
  try {
    const account = req.body;
    const data = await Account.create(account);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const changes = req.body;
    const { id } = req.params;
    const data = await Account.update(id, changes);
    const updatedAccount = await Account.getById(id);
    if(data < 1) {
      res.status(500).json({ message: "Server Error" });
    } else {
      res.status(201).json(updatedAccount);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});






module.exports = router;