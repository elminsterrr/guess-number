const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const secretNumber = 5; //Math.floor(Math.random() * 10000) + 1;

app.use(cors());

app.use(bodyParser.json());

app.post('/number', function (req, res, next) {

  if (req.body.isNumber < secretNumber) {
    res.json({
      resultText: 'The number that you are searching for is higher than yor guess.',
      resultCode: 'higher'
    });
  } else if (req.body.isNumber > secretNumber) {
    res.json({
      resultText: 'The number that you are searching for is lower than yor guess.',
      resultCode: 'lower'
    });
  } else {
    res.json({
      resultText: 'Congratulations! You have just found the secret number!',
      resultCode: 'success'
    });
  }

});


app.listen(3001, () => console.log('Listening on 3001'));
