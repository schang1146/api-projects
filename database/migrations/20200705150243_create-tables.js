exports.up = function (knex) {
    return knex.schema
        .createTable('tags', (table) => {
            table.increments();
            table.string('tag').notNullable();
        })
        .createTable('projects', (table) => {
            table.increments();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('url').notNullable();
            table.string('github_url').notNullable();
        })
        .createTable('project_tags', (table) => {
            table.integer('project_id').references('projects.id');
            table.integer('tag_id').references('tags.id');
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('project_tags').dropTableIfExists('projects').dropTableIfExists('tags');
};
