import Knex from 'knex';

// Criar
export async function up(Knex: Knex) {
    return Knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

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
    return Knex.schema.dropTable('classes');
}