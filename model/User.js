const {Database, DataTypes} = require('sequelize');
const sequelize = require('../Database/db');
const Test = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },


    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }, 

});


module.exports = Test;