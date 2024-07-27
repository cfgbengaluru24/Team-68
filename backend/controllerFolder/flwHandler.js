const FLWUser = require('../dbModels/FLW');

// Create a new FLW user
exports.createFLWUser = async (req, res) => {
    try {
        const { name, email, password, gender, contactno, address, pincode } = req.body;

        const newFLWUser = new FLWUser({
            name,
            email,
            password,
            gender,
            contactno,
            address,
            pincode,
        });

        const savedFLWUser = await newFLWUser.save();
        res.status(201).json(savedFLWUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all FLW users
exports.getFLWUsers = async (req, res) => {
    try {
        const flwUsers = await FLWUser.find();
        res.status(200).json(flwUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single FLW user by ID
exports.getFLWUserById = async (req, res) => {
    try {
        const flwUser = await FLWUser.findById(req.params.id);
        if (!flwUser) {
            return res.status(404).json({ message: 'FLW User not found' });
        }
        res.status(200).json(flwUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an FLW user by ID
exports.updateFLWUser = async (req, res) => {
    try {
        const { name, email, password, gender, contactno, address, pincode } = req.body;

        const updatedFLWUser = await FLWUser.findByIdAndUpdate(
            req.params.id,
            { name, email, password, gender, contactno, address, pincode },
            { new: true }
        );

        if (!updatedFLWUser) {
            return res.status(404).json({ message: 'FLW User not found' });
        }

        res.status(200).json(updatedFLWUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an FLW user by ID
exports.deleteFLWUser = async (req, res) => {
    try {
        const deletedFLWUser = await FLWUser.findByIdAndDelete(req.params.id);

        if (!deletedFLWUser) {
            return res.status(404).json({ message: 'FLW User not found' });
        }

        res.status(200).json({ message: 'FLW User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
