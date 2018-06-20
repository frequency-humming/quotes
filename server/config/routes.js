
var quotes = require('../controllers/quotes.js')

module.exports = function(app){     
app.get("/",quotes.index)

app.post("/quotes",quotes.create)

app.get("/quotes",quotes.find)
}