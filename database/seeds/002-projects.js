exports.seed = function (knex) {
    return knex('projects').insert([
        {
            title: 'Placeholder',
            description: 'Placeholder',
            url: 'https://www.reddit.com/',
            github_url: 'https://github.com/',
        },
    ]);
};
