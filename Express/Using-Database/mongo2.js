const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27107/animals', (err, client) => {
    if(err) throw err;

    const  db = client.db('animals');
    db.collection('mammals')
      .find()
      .toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        client.close();
      })
})