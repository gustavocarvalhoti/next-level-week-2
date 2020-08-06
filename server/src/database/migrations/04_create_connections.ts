import Knex from 'knex';

// Criar
export async function up(Knex: Knex) {
    return Knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        table.timestamp('created_at').defaultTo(Knex.raw('CURRENT_TIMESTAMP')).notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

// Cancelar
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('connections');
}