const express = require('express');
const ActorsController = require('./controllers/ActorsController');
const GenresController = require('./controllers/GenresController');
const FilmsController = require('./controllers/FilmsController');

const router = express.Router();

router.get('/actor', ActorsController.list);
router.get('/actor/:id', ActorsController.get);
router.post('/actor', ActorsController.create);
router.put('/actor/:id', ActorsController.update);
router.delete('/actor/:id', ActorsController.delete);

router.get('/genre', GenresController.list);
router.post('/genre', GenresController.create);
router.delete('/genre/:id', GenresController.delete);

router.get('/film', FilmsController.list);
router.get('/film/:id', FilmsController.get);
router.post('/film', FilmsController.create);
router.put('/film/:id', FilmsController.update);
router.delete('/film/:id', FilmsController.delete);

module.exports = router;
