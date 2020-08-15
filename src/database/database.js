const Sequelize = require('sequelize')

const sequelize = new Sequelize('cad','postgres','1234',{
    Host:'localhost',
    dialect:'postgres'
})

module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize
}