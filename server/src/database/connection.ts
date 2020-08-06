import knex from 'knex';
import path from 'path'; // Nativo do Node

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true, /*Valor padrão dos campos não preenchidos*/
});

export default db;