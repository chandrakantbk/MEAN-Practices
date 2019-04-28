var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");

var dbName='company';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

var Schema =mongoose.Schema;

var customerSchema= new Schema(
{
  email:String,
  firstName:String,
  /*lastName:String,
  gender:String,
  city:String,
  state:String,*/

});

var Customer=mongoose.model('customers',customerSchema);


/* GET all customers*/
router.get('/customers', function(request, response) {

  Customer.find(function(err, data){
    if(err)
    return console.error(" "+err);

    response.json(data);

  })
 
});







module.exports = router;
