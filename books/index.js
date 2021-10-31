const express = require("express");
const router = express.Router();
const {
  listAction,
  listDeletedAction,
  deleteAction,
  recoverAction,
  formAction,
  saveAction,
  searchAction,
  searchDeletedAction,
  searchISBN,
  isbnHome,
} = require("./controller");

router.get("/", listAction);
router.get("/deleted", listDeletedAction);
router.get("/delete/:id", deleteAction);
router.get("/recover/:id", recoverAction);
router.get("/form/:id?", formAction);
router.post("/save", saveAction);
router.get("/search", searchAction);
router.get("/deleted/search/", searchDeletedAction);
router.get("/isbn/s/:isbn?", searchISBN);
router.get("/isbn", isbnHome);

module.exports = router;
