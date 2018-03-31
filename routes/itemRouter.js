var express = require('express');

var itemRouter = express.Router();
var mongoose = require('mongoose');

// Require Item model in our routes module
var Item = require('../models/Item.js');

// Defined store route
itemRouter.post('/add-item', function (req, res) {
    Item.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
});

// Defined get data(index or listing) route
itemRouter.get('/items', function (req, res) {
  Item.find(function (err, items){
    if(err)
      return next(err);
      res.json(items);
  });
});

// Defined edit route
itemRouter.get('/items/:id', function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
    if (err) return next(err); 
    res.json(item);
  });
});

//  Defined update route
itemRouter.put('/items/:id', function (req, res) {
  Item.findByIdAndUpdate(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      item.item = req.body.item;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemRouter.delete('/items/:id', function (req, res, next) {
  Item.findByIdAndRemove({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = itemRouter;