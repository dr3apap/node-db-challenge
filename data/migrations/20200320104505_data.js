exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .string("project_name", 255)
      .notNullable()
      .unique()
      .index();
    tbl.text("description", 255).notNullable();
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
