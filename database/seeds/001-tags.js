
exports.seed = function(knex) {
  return knex('tags').insert([
    {tag: 'Placeholder'},
    {tag: 'React'},
    {tag: 'Vue'},
    {tag: 'Algo'}
  ]);
};
