const db = require('../models');

async function getAllKomik(req, res) {
    try {
        const komik = await db.Komik.findAll();
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error retrieving komik: ', err.message);
        res.status(500).json({ error: 'An error occurred while retrieving komik.' });
    }
}

async function getKomikById(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found.' });
        }
        res.status(200).json(komik);
    } catch (err) {
        console.error(`Error retrieving komik with id ${id}: `, err.message);
        res.status(500).json({ error: 'An error occurred while retrieving komik.' });
    }
}