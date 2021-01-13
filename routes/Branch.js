const express = require('express')
const { constants } = require('fs')
const router =express.Router()
const branchControllers = require('../controllers/Branch')

router.get('/',branchControllers.getAllBranches)
router.post('/',branchControllers.createNewBrachesAndManager)
router.get('/:id',branchControllers.getBranchesById)
module.exports = router