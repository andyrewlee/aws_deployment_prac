module.exports = {
  applicationPort: process.env.port || 5000,
  database: {
    host: 'localhost',
    port: 8889,
    database: 'photoalbums',
    user: 'root',
    password: 'root'
  }
}
