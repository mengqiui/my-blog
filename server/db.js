const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'students';
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {
  if(err){
    console.log(err);
  }
  console.log("connect successful");
  const db = client.db(dbName);
  const col = db.collection('students');
  col.find().toArray((err, res) => {
      console.log(res)
  });
});