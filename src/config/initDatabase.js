const fs = require('fs');
const path = require('path');
const sequelize = require('./database');


async function initDatabase() {
    try {
        const initSqlPath = path.resolve(__dirname, 'Migrations', 'init.ql');

        const sql = fs.readFileSync(initSqlPath, 'utf8');

        await sequelize.query(sql);

        console.log('Database initialized successfully. Tables are created or already exist.');
    } catch (error) {
        console.error('Error initializing database:', error.message);
        throw error;
    }
}

module.exports = initDatabase;