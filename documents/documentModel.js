const { Model, DataTypes } = require('sequelize');

const Database = require('../config/database');

class Document extends Model {}

Document.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  document: {
    type: DataTypes.JSON,
    allowNull: false
  },
}, {
  sequelize: Database,
  modelName: 'Document',
  timestamps: true
});

Document.sync();

Document.prototype.toResponse = ({
  id,
  document,
  updatedAt,
}) => ({
  updatedAt,
  id,
  document: JSON.parse(document),
});

module.exports = Document;
