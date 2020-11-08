module.exports = (sequelize, Datatypes) => {
  const model = sequelize.define('Customer',{
    name: {
      type: Datatypes.STRING(40)
    },
    age: {
      type: Datatypes.INTEGER
    }
  },{
    tableName: 'customers',
    timestamps: false  //เอาcreateAt updateAt ใน database ออกให้หมด
  })
  model.associate = models => {
    model.belongsToMany(models.Account, {through: models.Owns, foreignKey: 'customer_id'})
  }
  return model
}