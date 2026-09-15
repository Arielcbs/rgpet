const test = require('node:test');
const assert = require('node:assert/strict');
const knex = require('knex')({ client: 'pg' });

test('Knex preserves CRUD SQL shape and parameterizes untrusted values without opening a database', () => {
  const email = "fixture@example.invalid'; DROP TABLE ownerdata; --";
  const query = knex('ownerdata').insert({ id: 1, email, password: 'fixture' }).returning('*').toSQL();
  assert.equal(query.sql, 'insert into "ownerdata" ("email", "id", "password") values (?, ?, ?) returning *');
  assert.deepEqual(query.bindings, [email, 1, 'fixture']);
  assert.equal(knex('testtable1').where({ id: 1 }).update({ first_name: 'Fixture' }).returning('*').toSQL().sql,
    'update "testtable1" set "first_name" = ? where "id" = ? returning *');
  assert.equal(knex.select('*').from('ownerdata').toSQL().sql, 'select * from "ownerdata"');
});
