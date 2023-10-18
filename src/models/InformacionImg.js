const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const InformacionImg = sequelize.define('informacionImg', {
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    posicion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = InformacionImg;