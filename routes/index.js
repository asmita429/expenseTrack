var express = require('express');
var router = express.Router();
var expenses = require('../database/expenses');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(expenses);
  res.render('index', { title: 'expense tracker', expenseList: expenses });

});


router.get('/wlit', function(req, res, next) {
  res.render('index', { title: 'WLiT' });
});

router.get('/assignment', function(req, res, next) {
  res.render('index', { title: 'WLiT', number: 10 });
});

router.get('/add',function(req, res, next) {
  res.render('addExpense');
});

router.post('/saveexpense', function(req,res,next){
  let formData = {
    "title" : req.body.title, //form title name ='title'
    "paidBy" : req.body.paidBy, //form paidBy name ='paidBy'
    "descriotion" : req.body.descriotion,
    "amount" : req.body.amount
  }
  console.log(formData);
  expenses.push({...formData, id:expenses.length+1})
  res.redirect('/');
});

router.get('/delete/:index', function(req,res,next){
  expenses.splice(req.params.index, 1);
  res.redirect('/');
});

router.get('/edit/:id', function(req,res, next){
  const expense = expenses.find(expense => expense.id == req.params.id)

  res.render('editExpense',{expense:expense})
});

router.post('/saveEdited/:id',function(req,res, next){
    var formData = {
      "title" : req.body.title, //form title name ='title'
      "paidBy" : req.body.paidBy, //form paidBy name ='paidBy'
      "descriotion" : req.body.descriotion,
      "amount" : req.body.amount
    }
    const index = expenses.findIndex(expenses => {
    return expenses.id == req.params.id});
    expenses.splice(index, 1, {id:req.params.id, ...formData})
    res.redirect('/');
});

module.exports = router;
