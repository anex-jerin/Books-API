const express = require('express')
const router = express.Router()
const {addBooks, deleteBook, getBooks} = require('../controll/Books')

router.route('/').post(addBooks).get(getBooks)
router.route('/:id').delete(deleteBook)


module.exports = router