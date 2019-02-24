import mysql from 'promise-mysql';

//We have to init the connection with the db
//We're need to make a file that will be called keys.ts to write the data connections.
import keys from './keys'

const pool = mysql.createPool(keys.database);

//Now, we have to use the promise to start the connection
pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);

        console.log('DB is connected');

    })   

export default pool;