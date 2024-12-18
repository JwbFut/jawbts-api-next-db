'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	users.init({
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		username: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
		},
		avatar_url: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		ref_tokens: {
			type: DataTypes.JSONB,
			allowNull: false,
		},
		music_data: {
			type: DataTypes.JSONB,
			allowNull: false,
		},
		async_key: {
			type: DataTypes.JSONB,
			allowNull: false,
		},
	}, {
		sequelize,
		modelName: 'users',
	});
	return users;
};