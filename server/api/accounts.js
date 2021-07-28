const router = require("express").Router();
const { Account } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allAccounts = await Account.findAll();
    res.json(allAccounts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
