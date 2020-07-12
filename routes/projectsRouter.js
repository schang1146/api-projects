const router = require('express').Router();

const Projects = require('../models/projects');

router.post('/', async (req, res) => {
    const project = req.body;

    try {
        const newProject = await Projects.add(project);
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', (req, res) => {
    Projects.find()
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});

router.get('/:id', (req, res) => {
    const id = req.params;

    Projects.findBy(id)
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});

router.put('/:id', async (req, res) => {
    const id = req.params;
    const update = req.body;

    try {
        const boo = await Projects.update(id, update);
        console.log(boo);
        res.status(202).json({ message: 'Project successfully updated!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params;
    console.log(id);

    try {
        await Projects.remove(id);
        res.status(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
