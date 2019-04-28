var express = require('express');
var router = express.Router();
var mySql = require('mysql');


var connection=mySql.createConnection(
    {user:"root",
    password:"admin",
    host:"localhost",
    port:3306,
    database:"company" 
    });


/* GET all customers*/
router.get('/customers', function(request, response) {

    connection.query("SELECT * FROM customers",function(error,customers){
        if(error)
        return console.error(" "+error);
        response.json(customers);

    });


});



// GET cutstomers by email 
router.get('/customers/:email', function(request, response) {
    var email=request.params.email;
   // var customers=request.body;
connection.query("Select * from customers where email=?", [email], function(error,customersDetails)
{
    if(error)
        return console.error(" "+error);
        response.json(customersDetails[0]);

});
 
});


// Delete cutstomers by email 
router.delete('/customers/:email', function(request, response) {
    var email=request.params.email;
   // var customers=request.body;
connection.query("delete from customers where email=?", [email], function(error)
{
    if(error)
        return console.error(" "+error);
       

        connection.query("SELECT * FROM customers",function(error,customers){
            if(error)
            return console.error(" "+error);
            response.json(customers);
    
        });

});
});


/* UPDATE employee by id */

router.put('/customers/:email', function(request, response) {
    var email=request.params.email;
    var customers=request.body;
connection.query("update customers set firstName=?, lastName=?,gender=?,address=?,city=?,state=? where email=?", [customers.firstName,customers.lastName,customers.gender,customers.address,customers.city,customers.state,email], function(error)
{
    if(error)
        return console.error(" "+error);
       

        connection.query("SELECT * FROM customers",function(error,customers){
            if(error)
            return console.error(" "+error);
            response.json(customers);
    
        });

});
});


/* add employee */
router.post('/customers', function(request, response) {
    //var email=request.params.email;
    var customers=request.body;
connection.query("insert into  customers set ?", [customers], function(error)
{
    if(error)
        return console.error(" "+error);
     connection.query("SELECT * FROM customers",function(error,customersDetails){
            if(error)
            return console.error(" "+error);

            response.json(customersDetails);
    
        });

});
});



module.exports = router;
