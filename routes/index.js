// var dbURL = require('../config/properties').DB;
// var mongoose = require('mongoose');

const express = require('express');
const router = express.Router();


var empModel = require('../modules/employee.js');
var employee = empModel.find({});

var herosModel = require('../modules/heros.js');
var heros = herosModel.find({});


router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('index');
});

router.get('/employee/list', (req, res, next) => {
    // console.log('employee Data All');
    // res.render('heros/list');
    employee.exec(function(err,data){
        if(err) throw err;
        // console.log(data);
        res.render('employee/list', { title: "employee", listdata: data});
    })
});

router.get('/employee/add', (req, res, next) => {
    console.log('Request for employee add page recieved');
    res.render('employee/add');
});

router.post('/employee/insert', (req, res) => {
    // console.log('save data');
    // console.log(req.body.name);
    // return false;
    var empDetails = new empModel({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        phone:req.body.phone
    });

    // console.log(empDetails);
    empDetails.save();
    res.redirect('/employee/list')
    // res.render('employee/add');
});

router.get('/employee/edit/:id', (req, res, next) => {

    var id = req.params.id;
    var emp_specific = empModel.findById(id);

    // console.log('employee Data All');
    // res.render('heros/list');
    emp_specific.exec(function(err,data){
        if(err) throw err;
        // console.log(data);
        res.render('employee/edit', { title: "employee", form_data: data});
    })
});

router.post('/employee/update', (req, res) => {
    // console.log(req.body.id);
    // return false;

    var update_emp = empModel.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        phone:req.body.phone
    });

    update_emp.exec(function(err,data){
        if(err) throw err;
        // console.log(data);
        res.redirect('/employee/list')
    });

});

router.get('/employee/delete/:id', (req, res, next) => {
    var id = req.params.id;
    var del_emp = empModel.findByIdAndDelete(id);

    del_emp.exec(function(err,data){
        if(err) throw err;
        // console.log(data);
        res.redirect('/employee/list')
    })
});

router.get('/heros/list', (req, res, next) => {
    console.log('heros Data All');
    heros.exec(function(err,data){
        if(err) throw err;

        console.log(data);
        res.render('heros/list', { title: "employee", listdata: data});
    })
});


router.get('/about', (req, res) => {
  console.log('Request for about page recieved');
  res.render('about');
});

router.get('/contact', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('contact');
});

router.get('/heros', (req, res) => {
    console.log('get all heros list');
    res.render('index');
});

module.exports = router;