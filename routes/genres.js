const express = require('express');
const GenresController = require('../controllers/GenresController');

const router = express.Router();

router.get('/', GenresController.genres_list);
router.post('/', GenresController.genres_create);
router.delete('/:id', GenresController.genres_delete);

module.exports = router;
