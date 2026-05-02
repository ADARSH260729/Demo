app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.status(200).json({
        message: 'Note updated successfully',
    });
});

app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
        message: 'Note deleted successfully'

    });
});