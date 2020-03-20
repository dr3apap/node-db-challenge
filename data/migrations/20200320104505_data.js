exports.up = function(knex) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();
    tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index();
    tbl.text("descriptions", 255).notNullable();
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(0);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
