const conn = require('../index')
module.exports = {
getAllUsers : (callback) =>{
    const sql = 'select * from users'
    conn.query(sql,function(error,result){
        callback(error,result)
    })
},
addOneUser : (callback,userInfo) =>{
    const sql = 'insert into users(user_name,user_email,user_password) value (?,?,?)'
    conn.query(sql,[userInfo.name,userInfo.email,userInfo.password],function(error,result){
        callback(error,result)
    })
},

getOneUser: (callBack, userInfo) => {
    const sql = 'SELECT * FROM users WHERE user_email = ? AND user_password = ?';
    const values = [userInfo.email, userInfo.password];
    
    conn.query(sql, values, function(error, result) {
        callBack(error, result);
    });
}

}


