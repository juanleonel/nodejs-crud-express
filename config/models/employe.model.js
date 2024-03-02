const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize-connection')

const employeModel = sequelize.define('employe', {
  employe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  job: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  like_node: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false
})

module.exports = employeModel
