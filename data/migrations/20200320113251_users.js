exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .index();
    tbl
      .string("first_name", 128)
      .distinct()
      .unique()
      .notNullable()
      .index();
    tbl
      .string("last_name", 128)
      .distinct()
      .unique()
      .notNullable()
      .index();
    tbl.text("description", 1000).notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
