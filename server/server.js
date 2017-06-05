const express = require('express');

var app = express();

app.get('/', (req, res) =>{
  res.status(404).send({
    error: 'Not Found',
    name: 'AppName'
  });
});

app.get('/things', (req, res) =>{
  res.send([
    {
      id: 1,
      name: 'things1'
    },
    { id: 2,
      name: 'things2'
    }
  ]);
});


app.listen(3000, () => {
  console.log('On');
});

module.exports.app = app;
