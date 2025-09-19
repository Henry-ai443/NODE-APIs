const express = require('express');
const {createContact, getContacts, getContactById} = require('../controllers/contactController');
const router = express.Router();

router.post('/', createContact);
router.get('/', getContacts);
router.get('/:id', getContactById);
module.exports = router;