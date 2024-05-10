const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
  }

const mysql = require('mysql');
const connection = mysql.createConnection(config);


app.get('/add/:name', (req, res) => {
    const { name } = req.params;
    const insertQuery = `INSERT INTO people (name) VALUES ('${name}')`;
  
    connection.query(insertQuery, (error, results) => {
      if (error) {
        throw error;
      }
      res.send('<h1>Full Cycle Rocks!</h1><p>Lista de nomes cadastrados:</p>');
    });
  });

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (error, results) => {
      if (error) {
        throw error;
      }
      const names = results.map(result => result.name).join('<br>');
      res.send(`<h1>Full Cycle Rocks!</h1><p>Lista de nomes cadastrados: </p>${names}`);
    });
  });

app.listen(port, ()=> {
    console.log('Rodando na porta' + port)
    
})