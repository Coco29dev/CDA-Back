const express = require('express');
const router = express.Router();
const blagueController = require('../../controllers/blagueController');

router.post('/', blagueController.createBlague);
router.get('/', blagueController.getAllBlague);
router.get('/:id', blagueController.getBlagueID);
router.get('/random', blagueController.getBlagueRandom);
router.put('/:id', blagueController.updateBlague);
router.delete('/delete/:id', blagueController.deleteBlague);

module.exports = router;
