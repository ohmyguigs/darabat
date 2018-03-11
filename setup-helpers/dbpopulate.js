var mysql = require('mysql')

console.log('Setting up connectionto darabat db')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'app',
  password: 'root',
  database: 'darabat'
})

console.log('Connecting...')
connection.connect()

var initialState = [
  {
    title: 'Dark Side Of The Moon',
    producer: 'Pink Floyd',
    genre: 'Progressive Rock',
    year: 1973,
    length: 2569,
  },
  {
    title: 'The Game',
    producer: 'Queen',
    genre: 'Pop Rock',
    year: 1980,
    length: 3539,
  },
  {
    title: 'Damn',
    producer: 'Kendrick Lamar',
    genre: 'Conscious Rap',
    year: 2017,
    length: 5454,
  },
  {
    title: 'Evolve',
    producer: 'Imagine Dragons',
    genre: 'Pop rock',
    year: 2017,
    length: 4302,
  },
  {
    title: 'Divide',
    producer: 'Ed Sheeran',
    genre: 'Pop',
    year: 2017,
    length: 4614,
  },
  {
    title: 'This House Is Not For Sale',
    producer: 'Bon Jovi',
    genre: 'Arena Rock',
    year: 2016,
    length: 4908,
  },
  {
    title: 'All My Demons Greeting Me as a Friend',
    producer: 'AURORA',
    genre: 'Art Pop',
    year: 2016,
    length: 2569,
  },
  {
    title: 'Meteora',
    producer: 'Linkin Park',
    genre: 'Alternative Metal',
    year: 2003,
    length: 3643,
  },
  {
    title: 'Valencianas',
    producer: 'Alceu Valença',
    genre: 'MPB',
    year: 2014,
    length: 6013,
  },
  {
    title: 'Raízes Nordestinas',
    producer: 'Alipio Martins',
    genre: 'MPB',
    year: 1999,
    length: 5300,
  },
];

function finish () {
  connection.end();
  process.exit();
};

console.log('Checking if table is empty')

connection.query('select * from albums', function (err, result) {
  if (err) {
    console.error(`error checking albums table, error:`, err);
    return;
  }
  if (result && result.length > 0) {
    console.log('Your table is populated. It already has entries! Aborting initialState hydratation!');
    finish();
  } else {
    console.log('Hydrating darabat table albums with initial state mock');

    initialState.forEach((disc, index) => {
      connection.query('insert into albums set ?', disc, function (err, result) {
        if (err) {
          console.error(`error inserting initialState to db. entry index: ${index}, error:`, err);
          return;
        }
        console.log(`Success inserting record ${index} in albums table`);
      });
    });
    finish()
  }
});