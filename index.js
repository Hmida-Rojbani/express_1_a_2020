const express = require('express');
const morgan = require('morgan');
const config = require('config');
const appDebugger = require('debug')('app:debug');
const DBDebugger = require('debug')('app:db');
const students_router = require('./routers/students');
const index_router = require('./routers/root');

const app = express();
const port = process.env.PORT||3000;

//console.log(process.env.NODE_ENV);
//console.log(app.get('env'));

appDebugger(config.get('app_name'));
DBDebugger('Host :' + config.get('DB.host')+ ' , pass : '+config.get('DB.password'));

if(app.get('env') === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use(students_router);
app.use(index_router);



app.listen(port,()=>appDebugger(`Server running on ${port}`));