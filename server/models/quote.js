const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quote: { type: String, required: true, minlength: 6}
}, {timestamps:true})

mongoose.model('Quote', UserSchema);



mongoose.connect('mongodb://localhost/quotes_dojo');
