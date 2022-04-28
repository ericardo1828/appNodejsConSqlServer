import sql from "mssql";
import config from "../config";

let serverwithInstance = ''
serverwithInstance = serverwithInstance.concat(config.dbServer, "\\",config.dbInstance)
console.log(serverwithInstance);

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: serverwithInstance,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };
