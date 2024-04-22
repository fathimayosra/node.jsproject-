const Sequelize =require('sequelize');


const sequelize =new Sequelize('company_database', {dialect: 'mysql'});

module.exports =sequelize;