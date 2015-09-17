module.exports = {
  applicationPort: 80,
  database: function() {
    if(process.env.ENVIRONMENT) {
      // if ENVIRONMENT exists then load database credentials from OpsWorks
      // during deployment, opsworks.js file is generated in root directory
      var opsworks = require('./../opsworks');
      var opsWorksDB = opsworks.db;

      var rdsConnection = {
        host: opsWorksDB.host,
        port: opsWorksDB.port,
        database: opsWorksDB.database,
        user: opsWorksDB.username,
        password: opsWorksDB.password
      };

      return rdsConnection;
    } else {
      // else use local database credentials
      var local = require('./../config/local');
      var localConnection = local.db;
      return localConnection;
    }
  }
}
