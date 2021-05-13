const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const configs = require('../configs/db');
const env= process.env.NODE_ENV || 'development';

const { database, user, password, host, dialect } = configs[env];

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect
});

const paths = fs.readdirSync(__dirname).filter((file)=> {
    if(file.indexOf('.') !=0 && file == 'index.js' && file.slice(-3) == 'js'){
        return true;
    }
    return false;
});
console.log(paths);