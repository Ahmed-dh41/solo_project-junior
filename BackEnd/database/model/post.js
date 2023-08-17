
const conn = require('../index')
module.exports = {
getAllPost : (callback) =>{
    const sql = 'select * from posts'
    conn.query(sql,function(error,result){
        callback(error,result)
    })
},

// addOnePost: (callBack, postData) => {
//     const sql = 'INSERT INTO posts (content_post, image_post, price_post) VALUES (?, ?, ?)';
//     const values = [postData.content, postData.image, postData.price, postData.userId];
    
//     conn.query(sql, values, function(error, result) {
//         callBack(error, result);
//     });
// },
addOnePost: (postData, callBack) => {
    const sql = `INSERT INTO posts SET ?` 
    conn.query(sql, postData, function(error, result) {
        console.log(error);
        callBack(error, result);
    });
},




////////////////////////////////////////////////////////////////////////////////////////////////////////////
updatePost: (callBack, postId, updatedData) => {
    const sql = 'UPDATE posts SET content_post = ?, image_post = ?, price_post = ? WHERE idposts = ?';
    const values = [updatedData.content, updatedData.image, updatedData.price, postId];

    conn.query(sql, values, function(error, result) {
        callBack(error, result);
    });
},

deletePost: (callBack, postId) => {
    const sql = 'DELETE FROM posts WHERE idposts = ?';

    conn.query(sql, postId, function(error, result) {
        callBack(error, result);
    });
},

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


}