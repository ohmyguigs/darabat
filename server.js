const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

app.use(cors())

const con = mysql.createConnection({
  host: 'localhost',
  user: 'app',
  password: 'root',
  database: 'darabat'
})
con.connect()

app.get('/healthcheck', (req, res) => res.send('ok'))

app.get('/get-all-albums', (req, res) => {
  con.query('select * from albums', function (err, result) {
    if (err) {
      console.error(`[SERVER] error checking albums table, error:`, err);
      return;
    }
  res.send(result)
  })
})

app.listen(3000, () => console.log('[SERVER] listening on port 3000!'))
