const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const secretNumber = Math.floor(Math.random() * 10000) + 1;

app.use(cors());
app.use(bodyParser.json());

app.post('/number', (req, res, next) => {

  const guess = req.body.isNumber;

  if (guess < secretNumber) {
    res.json({
      resultText: 'The number that you are searching for is higher than yor guess.',
      resultCode: 'higher',
      yourGuess: guess
    });
  } else if (guess > secretNumber) {
    // throw Error('My test error message!');
    res.json({
      resultText: 'The number that you are searching for is lower than yor guess.',
      resultCode: 'lower',
      yourGuess: guess
    });
  } else {
    res.json({
      resultText: 'Congratulations! You have just found the secret number!',
      resultCode: 'success',
      yourGuess: guess
    });
  }

});

// Error handler
app.use((err, req, res, next) => {
  res.status(500);
  res.json({ error: err.message });
  console.log(err.message);
});


app.listen(3001, () => console.log('Listening on port 3001.'));
