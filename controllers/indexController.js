const Item = require('../models/listitem');

module.exports.homeController = function (req, res) {
  Item.find({}, function (err, toDoList) {

    if (err) { console.log('error in printing list'); return; }

    return res.render('home', {
      list: toDoList,
    });
  }
  )
}

module.exports.createList = function (req, res) {
  Item.create({
    description: req.body.description,
    category: req.body.category,
    date: req.body.date
  }, function (err, newConatact) {

    if (err) {
      console.log('error in creating');
      return;
    }

    return res.redirect('back');
  }
  )
}

module.exports.DeleteList = function (req, res) {
  for(let i in req.body){
    
     Item.findByIdAndDelete(req.body[i], function (err) {
      if (err) {
        console.log('error in deleting'); return;
      }

    })
  }
  return res.redirect('back');
}