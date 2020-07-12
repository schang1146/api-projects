const db = require('../database/config');

async function add(project) {
    try {
        const [id] = await db('projects').insert(project).returning('id');
        return findBy({ id });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

function find() {
    try {
        return db('projects');
    } catch (err) {
        console.error(err);
        throw err;
    }
}

function findBy(filter) {
    try {
        return db('projects').where(filter);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

function remove(id) {
    try {
        return db('projects').where(id).del();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

function update(id, project) {
    try {
        return db('projects').where(id).update(project);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    add,
    find,
    findBy,
    remove,
    update,
};
