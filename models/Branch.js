module.exports = (sequelize, Datatypes) => {
  const model = sequelize.define('Branch', {
    name: {
      type: Datatypes.STRING(255)
    },
      size: {
        type: Datatypes.STRING(40)
      }
    },
    {
      tableName: 'branches',
      timestamps: false
  })

//สร้างสัมพันธ์ Manager กับ Branch
model.associate = models => {
  model.belongsTo(models.Manager, { foreignKey: 'manager_id'})
  model.hasMany(models.Account, { foreignKey: 'branch_id'})
}
  return model
}