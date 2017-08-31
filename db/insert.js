var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'Shopping_user'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createlist();
});

var information = {
  FirstName: 'Moshin',
  LastName: 'Lalani',
  password: 'Family',
  hintPassord : 'everything',
  EmailAddress : 'Moshinlalani0786@gmail.com'
};

var query = connection.query('insert into Shopping-User set ?', information, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});