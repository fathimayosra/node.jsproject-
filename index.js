const express = require('express');
const sequelize = require('./configuration/config');
const app = express();

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

app.listen(3000, ()=>{console.log('listening to port 3000')});
          
const departments_router = require('./routes/departments');
const Employee = require('./models/employee');
app.use('/departments',departments_router);


const Employee = require('./models'/'employee');
const Department = require('./models/department');
Department.hasmany(Employee,
    {foreignKey: {allowNull:false}, onDelete: 'CASCADE'});


    sequelize.sync().then((result)=>{
    console.log(result);
    }).catch((err)=>{console.log(err);});
    

    app.listen(3000, ()=>{console.log('listening to port 3000')});