'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("jwks", {
			n: {
				type: Sequelize.STRING(683),
				allowNull: false
			},
			pri_key: {
				type: Sequelize.STRING(3322),
				allowNull: false
			},
			cre_time: {
				type: Sequelize.DATE,
				allowNull: false
			},
			kid: {
				type: Sequelize.STRING(8),
				allowNull: false,
				primaryKey: true
			},
		}, {
			timestamps: false,
		});

		await queryInterface.createTable("users", {
			id: {
				type: Sequelize.BIGINT,
				allowNull: false,
				primaryKey: true,
			},
			username: {
				type: Sequelize.TEXT,
				allowNull: false,
				unique: true,
			},
			avatar_url: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			ref_tokens: {
				type: Sequelize.JSONB,
				allowNull: false,
			},
			music_data: {
				type: Sequelize.JSONB,
				allowNull: false,
			},
			async_key: {
				type: Sequelize.JSONB,
				allowNull: false,
			},
		}, {
			timestamps: false,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("jwks");
		await queryInterface.dropTable("users");
	}
};
