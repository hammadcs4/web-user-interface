<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { Person, sequelize } = require('../database');

// ✅ Test DB connection on every request (optional for debugging)
router.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    next();
  } catch (err) {
    console.error('❌ Database connection error:', err.message);
    return res.status(500).json({ error: 'Database not reachable' });
  }
});

// ✅ Get all persons
router.get('/all', async (req, res) => {
  try {
    const people = await Person.findAll();
    res.status(200).json(people);
  } catch (err) {
    console.error('❌ Failed to fetch persons:', err);
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});

// ✅ Add a new person
router.post('/add', async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    if (!firstName || typeof firstName !== 'string') {
      return res.status(400).json({ error: 'Valid firstName is required' });
    }

    const newPerson = await Person.create({ firstName, lastName });
    res.status(201).json({
      message: 'Person added successfully',
      person: newPerson,
    });
  } catch (err) {
    console.error('❌ Error adding person:', err);
    res.status(500).json({ error: 'Failed to add person', details: err.message });
  }
});

// ✅ Get a single person by ID
router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.status(200).json(person);
  } catch (err) {
    console.error('❌ Error fetching person:', err);
    res.status(500).json({ error: 'Error fetching person', details: err.message });
  }
});

// ✅ Update a person
router.put('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });

    const { firstName, lastName } = req.body;
    await person.update({ firstName, lastName });
    res.status(200).json({
      message: 'Person updated successfully',
      person,
    });
  } catch (err) {
    console.error('❌ Error updating person:', err);
    res.status(500).json({ error: 'Error updating person', details: err.message });
  }
});

// ✅ Delete a person
router.delete('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });

    await person.destroy();
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting person:', err);
    res.status(500).json({ error: 'Error deleting person', details: err.message });
  }
});

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const { Person, sequelize } = require('../database');

// ✅ Test DB connection on every request (optional for debugging)
router.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    next();
  } catch (err) {
    console.error('❌ Database connection error:', err.message);
    return res.status(500).json({ error: 'Database not reachable' });
  }
});

// ✅ Get all persons
router.get('/all', async (req, res) => {
  try {
    const people = await Person.findAll();
    res.status(200).json(people);
  } catch (err) {
    console.error('❌ Failed to fetch persons:', err);
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});

// ✅ Add a new person
router.post('/add', async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    if (!firstName || typeof firstName !== 'string') {
      return res.status(400).json({ error: 'Valid firstName is required' });
    }

    const newPerson = await Person.create({ firstName, lastName });
    res.status(201).json({
      message: 'Person added successfully',
      person: newPerson,
    });
  } catch (err) {
    console.error('❌ Error adding person:', err);
    res.status(500).json({ error: 'Failed to add person', details: err.message });
  }
});

// ✅ Get a single person by ID
router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.status(200).json(person);
  } catch (err) {
    console.error('❌ Error fetching person:', err);
    res.status(500).json({ error: 'Error fetching person', details: err.message });
  }
});

// ✅ Update a person
router.put('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });

    const { firstName, lastName } = req.body;
    await person.update({ firstName, lastName });
    res.status(200).json({
      message: 'Person updated successfully',
      person,
    });
  } catch (err) {
    console.error('❌ Error updating person:', err);
    res.status(500).json({ error: 'Error updating person', details: err.message });
  }
});

// ✅ Delete a person
router.delete('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });

    await person.destroy();
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting person:', err);
    res.status(500).json({ error: 'Error deleting person', details: err.message });
  }
});

module.exports = router;
>>>>>>> cb4920a675d3e6cf28f09c94180c42093bc0f7f0
