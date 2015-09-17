var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
var hbs = exphbs.create({ defaultLayout: 'main' })

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    name: process.env.NAME,
    bio: process.env.TWITTER_BIO,
    pic: process.env.TWITTER_PIC,
    email: process.env.EMAIL,
    github: process.env.GITHUB_USERNAME,
    twitter: process.env.TWITTER_HANDLE,
    location: process.env.LOCATION,
    languages: process.env.LANGUAGES
  })
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})