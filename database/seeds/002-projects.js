exports.seed = function (knex) {
    return knex('projects').insert([
        {
            title: 'Placeholder',
            description: 'Placeholder',
            url: 'Placeholder',
            github_url: 'Placeholder',
        },
    ]);
};
