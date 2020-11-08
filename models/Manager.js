module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Manager', {
    name: {
      type: DataTypes.STRING(255)
    },
      experience: {
        type: DataTypes.INTEGER
    }
   },{
      tableName: 'managers',
      timestamps: false  //เอาcreateAt updateAt ใน database ออกให้หมด
    })
    //สร้างสัมพันธ์ Manager กับ Branch
    model.associate = models => {
      model.hasOne(models.Branch, {foreignKey: 'manager_id'})
    }
  return model
}