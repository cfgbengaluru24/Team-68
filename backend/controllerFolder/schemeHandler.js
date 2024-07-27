const Scheme = require('../dbModels/Schemes');

exports.createScheme = async (req, res) => {
    try {
        const { tags, description, date , endDate , heading  , gender , ageLimit } = req.body;

        const newScheme = new Scheme({
            tags,
            description,
            date,
            endDate, gender , ageLimit , heading
        });

        const savedScheme = await newScheme.save();
        res.status(201).json(savedScheme);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSchemes = async (req, res) => {
    try {
        const schemes = await Scheme.find();
        res.status(200).json(schemes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSchemeById = async (req, res) => {
    try {
        const scheme = await Scheme.findById(req.params.id);
        if (!scheme) {
            return res.status(404).json({ message: 'Scheme not found' });
        }
        res.status(200).json(scheme);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateScheme = async (req, res) => {
    try {
        const { tags, description, date , heading , endDate } = req.body;

        const updatedScheme = await Scheme.findByIdAndUpdate(
            req.params.id,
            { tags, description, date , heading , endDate },
            { new: true }
        );

        if (!updatedScheme) {
            return res.status(404).json({ message: 'Scheme not found' });
        }

        res.status(200).json(updatedScheme);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteScheme = async (req, res) => {
    try {
        const deletedScheme = await Scheme.findByIdAndDelete(req.params.id);

        if (!deletedScheme) {
            return res.status(404).json({ message: 'Scheme not found' });
        }

        res.status(200).json({ message: 'Scheme deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};