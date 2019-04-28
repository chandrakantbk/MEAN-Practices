
var express = require('express');
/* var cors=require('cors'); */  /* We don't need it bcz we are running on same server url */

var indexRouter = require('./routes/index');
var customerArrayRouter=require('./routes/customerArray');
var customerMySqlRouter=require('./routes/customerMySql');
var customermongodbRouter=require('./routes/customermongodb');


var app = express();

app.use(express.static("dist/ng-express-integration")); /** We added our project name path to locate index.html */

app.use(express.json());
app.use(express.urlencoded({extended:false}));
/* app.use(cors()); */ 

app.use('/',indexRouter);

app.use('/customerarray', customerArrayRouter);
app.use('/customermysql', customerMySqlRouter);
app.use('/customermongodb', customermongodbRouter);



module.exports = app;
