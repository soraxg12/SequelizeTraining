const db = require('../database/database')

const Cads =db.sequelize.define('Cads',{
    Name:{
        type:db.Sequelize.CHAR,
        allowNull: false
    },
    LastName:{
      type:db.Sequelize.CHAR,
      allowNull: true
    },
    Email:{
        type:db.Sequelize.CHAR,
        allowNull: false
    },
})

// Cads.sync({force:true})

module.exports = Cads