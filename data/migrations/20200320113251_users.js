exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .index();
    tbl
      .string("first_name")
      .unique()
      .notNullable()
      .index();
    tbl
      .string("last_name")
      .unique()
      .notNullable()
      .index();
    tbl.text("description").notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
