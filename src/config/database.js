(async () => {
    try {
        await connectMongoDB();
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