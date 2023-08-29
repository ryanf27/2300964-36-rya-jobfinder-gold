/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("jobs", (table) => {
    table.increments("id");
    table.string("title", 255);
    table.string("description", 255);
    table.string("type", 255);
    table.integer("salary");
    table.string("status", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("jobs");
};
