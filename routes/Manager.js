const express = require('express')
const router = express.Router()
const managerControllers = require('../controllers/Manager')

router.get('/',managerControllers.getAllManagers)
router.get('/:id', managerControllers.getManagerById)
router.post('/',managerControllers.createManager)
router.put('/:id',managerControllers.updateManager)
router.delete('/:id', managerControllers.deleteManger)

module.exports = router