const db = require('../models')

const getAllBranches = async(req, res) => {
  const allBranches = await db.Branch.findAll({include:[db.Manager]}) // include แสดง manger_id ของ db Manger
  res.status(200).send(allBranches)
}

const createNewBrachesAndManager = async (req, res) => {

  const { managerName, managerExperience} = req.body
  const { branchName, branchSize } = req.body

  const newManager = await db.Manager.create({
    name: managerName,
    experience: managerExperience
  })
  const newBranch = await db.Branch.create({
    name: branchName,
    size: branchSize,
    manager_id: newManager.id
  })
  res.status(201) .send(newBranch)
}
const getBranchesById = async(req, res) => {
  const targetId = req.params.id
  const targetBranch = await db.Branch.findOne({
    where: {
      id: targetId
    }
  })
  if(!targetBranch){
    res.status(404).send({message:'404 not found'})
  }
  res.status(200).send(targetBranch)
}
module.exports = {
  getAllBranches,
  createNewBrachesAndManager,
  getBranchesById
}