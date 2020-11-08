module.exports = (sequelize, Datatypes) => {
  const model = sequelize.define('Owns',{
    day: {
      type: Datatypes.STRING(10)
    }
  },{
    tableName:'owns', 
    timestamps: false  //เอาcreateAt updateAt ใน database ออกให้หมด
  })
  return model
}