exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .index();
    tbl.text("descriptions");
    tbl.text("notes").notNullable();
    tbl.boolean("completed").defaultsTo(0);
    tbl.timestamps(true, false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
