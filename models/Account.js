module.exports = (sequelize, Datatypes) => {
  const model = sequelize.define('Account',{
    value:{
      type: Datatypes.FLOAT
    }
  },{
    tableName: 'accounts',
    timestamps: false //เอาcreateAt updateAt ใน database ออกให้หมด
  })
  //สร้างสัมพันธ์ Manager กับ Branch
  model.associate = models => {
  model.belongsTo(models.Branch, { foreignKey: 'branch_id'})
  model.belongsToMany(models.Customer, { through: models.Owns, foreignKey:'account_id'})
  }
  return model
} 