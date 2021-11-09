const{Pool}=require('pg');
const pool = new Pool({
    host:'dbpathphi.cgfwtlehbwen.us-east-2.rds.amazonaws.com',
    user:'usuarioprueba',
    password:'1234',
    database:'db_path_phi',
    port:'5432'

})
const getUsers=async(req,res)=>{
    const response= await pool.query('Select* from usuarios');
    console.log(response.rows);
    res.send('users');
}
module.exports={
    getUsers
}