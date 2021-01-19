import * as Knex from 'knex';

const tableName = 'todos';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, table => {
    table.uuid('id').primary().unsigned();
    table.string('task');
    table.integer('status').defaultTo(0);
    table.string('type');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}