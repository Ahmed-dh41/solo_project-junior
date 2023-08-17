const mysql = require('mysql2')
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'myData'
})
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log('db connected')
    }
})
module.exports = conn