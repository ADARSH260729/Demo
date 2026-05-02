const express = require('express');

const app = express();
app.use(express.json());

const notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: 'Note created successfully',
    })
});

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'Note created successfully',
        notes: notes
    });
});

app.delete('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= notes.length) {
        return res.status(404).json({ message: 'Note not found' });
    }

    notes.splice(index, 1);

    res.status(200).json({
        message: 'Note deleted successfully'
    });
});


app.patch('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= notes.length || !notes[index]) {
        return res.status(404).json({
            message: 'Note not found'
        });
    }

    const { description } = req.body;

    if (description === undefined) {
        return res.status(400).json({
            message: 'Description is required'
        });
    }

    notes[index].description = description;

    res.status(200).json({
        message: 'Note updated successfully',
        note: notes[index]
    });
});

module.exports = app;