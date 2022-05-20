const Sequelize = require("sequelize");
const sequelize = new Sequelize("student_details","root","tryncrack",{
    dialect: "mysql",
    host: "localhost",
})

module.exports = sequelize;
