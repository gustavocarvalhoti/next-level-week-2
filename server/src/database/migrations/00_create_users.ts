import Knex from 'knex';

// Criar
export async function up(Knex: Knex) {
    return Knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

// Cancelar
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('users');
}