var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'boop',
  password: 'beep',
  database: 'darabat'
});
connection.connect();

var dsotm = {
  title: 'Dark Side Of The Moon',
  producer: 'Pink Floyd',
  genre: 'Progressive rock',
  year: 1973,
  length: 2569,
};

var query = connection.query('insert into darabat set ?', dsotm, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});