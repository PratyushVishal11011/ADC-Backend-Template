const app = require('./app');
const sequelize = require('./Config/database');
const initDatabase = require('./Config/initDatabase');

(async () => {
    try {
        setTimeout(() => {
            initDatabase();
            sequelize.authenticate()
        }, 2500)
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Startup error:', error);
        process.exit(1);
    }
})();