import * as Knex from 'knex';

const tableName = 'users';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, table => {
    table.uuid('id').primary().unsigned();
    table.string('firstName');
    table.string('middleName');
    table.string('lastName');
    table.string('userName').unique();
    table.string('password');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}