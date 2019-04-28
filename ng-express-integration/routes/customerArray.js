var express = require('express');
var router = express.Router();

var customers=[
  {email:'tanu@gmail.com',firstName:'Tanumay',lastName:'Saha',gender:'male',address:'wakad',city:'Pune',state:'MH'},
  {email:'deep@gmail.com',firstName:'Deep',lastName:'Roy',gender:'male',address:'wakad',city:'Pune',state:'MH'},
  {email:'dipan@bcet',firstName:'dipan',lastName:'dey',gender:'male',address:'Habra',city:'Kolkata',state:'WB'},
  {email:'sathi@gmail.com',firstName:'Sathi',lastName:'dutta',gender:'female',address:'Habra',city:'Kolkata',state:'WB'},
  
  ]



/* GET all customers*/
router.get('/customers', function(request, response) {
  response.json(customers);
});



/* GET cutstomers by email */
router.get('/customers/:email', function(request, response) {
   
  var email=request.params.email;
  var customer=customers.filter((a)=>a.email==email)[0];
  response.json(customer);
});



/* delete cutstomers by email */
router.delete('/customers/:email', function(request, response) {
   
  var email=request.params.email;
  customers=customers.filter((a)=>a.email!=email);
  response.json(customers);
});



/* Update cutstomers by email */
router.put('/customers/:email', function(request, response) {
   
  var email=request.params.email;

  var updatedCustomer=request.body;
  customers.forEach((e,i)=> 
    {
        if(e.email==email)
        customers[i]=updatedCustomer;
  });


  response.json(customers);
});



/* add cutstomers */
router.post('/customers/', function(request, response) {
   
  var newCustomer=request.body;
  customers.push(newCustomer);
  response.json(customers);
});



module.exports = router;
