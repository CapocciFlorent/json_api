const Sequelize = require('Sequelize');
const Model = Sequelize.Model;

const Database = require('../config/database');

class Document extends Model {}

Document.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  document: {
    type: Sequelize.JSON,
    allowNull: false,
  },
}, {
  sequelize: Database,
  modelName: 'Document',
  timestamps: true,
});

Document.sync();
