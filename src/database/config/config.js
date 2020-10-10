require('dotenv').config();
module.exports={
  username: process.env.db_user,
  password: process.env.db_pas,
  database: process.env.db_name,
  host: process.env.db_host,
  dialect: process.env.db_dialect,
}