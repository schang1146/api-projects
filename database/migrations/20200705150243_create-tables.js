exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('url').notNullable();
            table.string('tags-id')
        })
        .createTable('tags', table => {
            table.increments();
        })
        .createTable('project-tags', table => {

        })
};

exports.down = function(knex) {
  
};
