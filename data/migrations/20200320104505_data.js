exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name", 255).notNullable();

      tbl.text("description", 255);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      tbl.timestamps(true, true);
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("description", 1000);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      tbl.text("notes", 1000);
      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.timestamps(true, true);
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("resource_name", 255);
      tbl.text("description", 1000);
      tbl.timestamps(true, true);
    })

    .createTable("project_resources", tbl => {
      tbl.primary(["project_id", "resource_id"]);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
