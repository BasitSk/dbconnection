console.log("hello world");
const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "react",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection success");
  await connection.endAsync();
}

//connectionCheck();
async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into MydbTable1 (username, password) value(?,?)`;
  await connection.queryAsync(sql, [user.username, user.password]);
  console.log("Record Added");
  await connection.endAsync();
}

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from MydbTable1`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();
  //console.log(list);
  return list;
}

//let user = { username: "Azar", password: "9272" };
// addUser(user);
// selectUser();

module.exports = { selectUser, addUser };
