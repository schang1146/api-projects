exports.seed = function (knex) {
    return knex('project_tags').insert([
        {
            project_id: 1,
            tag_id: 2,
        },
    ]);
};
