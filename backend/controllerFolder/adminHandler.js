const Admin = require('../dbModels/Admin');

// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const { name, contactno, address } = req.body;

        const newAdmin = new Admin({
            name,
            contactno,
            address,
        });

        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all admins
exports.getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an admin by ID
exports.updateAdmin = async (req, res) => {
    try {
        const { name, contactno, address } = req.body;

        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            { name, contactno, address },
            { new: true }
        );

        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json(updatedAdmin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an admin by ID
exports.deleteAdmin = async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);

        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
