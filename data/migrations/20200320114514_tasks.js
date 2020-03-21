exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .index();
    tbl.text("descriptions", 1000);
    tbl.text("task_notes", 1000).notNullable();
    tbl
      .boolean("completed")
      .defaultsTo(0)
      .notNullable();
    tbl.onDelete("CASCADE").onUpdate("CASCADE");
    tbl.timestamps(true, false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
