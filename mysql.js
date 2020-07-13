var mysql = require('mysql');
var readline = require('readline');

var con = mysql.createConnection({
  host: "yourhost",
  user: "yourlogin",
  password: "yourpassword",
  database: "yourdb"
});

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What you want ? ', (answer) => {
  console.log(`Selected: ${answer}`);
  
con.query("SELECT " + answer + " FROM myDB", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});
  rl.close();
});

