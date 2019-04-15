const express = require('express');
const app = express();

//App Setting
app.set('views', './client')
app.set('view engine', 'pug');
app.use(express.static('client'))
app.use(express.json());

app.get('/', (req, res) => {
  res.render('main');
})

app.listen('3000', () => {
  console.log("Praise Mitchell")
});
