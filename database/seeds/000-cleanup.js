const knexCleaner = require('knex-cleaner');

exports.seed = function(knex) {
  // Deletes ALL existing entries except migration tables
  return knexCleaner.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock']
  })
};
