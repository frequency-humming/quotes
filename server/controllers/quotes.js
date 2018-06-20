const mongoose = require('mongoose'),
Quote = mongoose.model('Quote')

module.exports = {
    index: function(req, res){
        res.render('index');
    },
    create: function(req, res){
        console.log("POST DATA", req.body);
        // create a new User with the name and age corresponding to those from req.body
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        quote.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        } else { 
        console.log('successfully added a user!');
        res.redirect('/quotes');
        }
    })
    },
    find: function(req, res){
        Quote.find({}, function(err, quotes){
            if(err) {
                console.log('something went wrong');
              } else { // else console.log that we did well and then redirect to the root route
                console.log(quotes);
                res.render('quotes',{quotes});
              }
        });   
    } 
}