const BeneUser = require('../dbModels/Beneficiary');
const Scheme = require('../dbModels/Schemes');
// Create a new bene user
exports.createBeneUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name , gender, contactno, address, pincode, age, inSchool, isWorking , aadhar, ration } = req.body;
        const newBeneUser = new BeneUser({
            name,
            gender,
            contactno,
            address,
            pincode,
            age,
            inSchool,
            isWorking,
            aadhar ,
            ration
        });

        const savedBeneUser = await newBeneUser.save();
        res.status(201).json(savedBeneUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Get all bene users
exports.getBeneUsers = async (req, res) => {
    try {
        const beneUsers = await BeneUser.find();
        res.status(200).json(beneUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Get a single bene user by ID
exports.getBeneUserById = async (req, res) => {
    try {
        const beneUser = await BeneUser.findById(req.params.id);
        if (!beneUser) {
            return res.status(404).json({ message: 'Bene User not found' });
        }
        res.status(200).json(beneUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getBeneUserByPhoneNumber = async (req, res) => {
    try {
        const { phoneNumber } = req.body;

        let beneUser;
        if (!phoneNumber || phoneNumber.length === 0) {
            beneUser = await BeneUser.find({});
        } else {
            beneUser = await BeneUser.find({ contactno: phoneNumber });
        }

        if (!beneUser || beneUser.length === 0) {
            return res.status(404).json({ message: 'Bene User not found' });
        }

        res.status(200).json({ data: beneUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a bene user by ID
exports.updateBeneUser = async (req, res) => {
    try {
        const { name, gender, contactno, address, pincode, age, inSchool, isWorking, schemeName, aadhar, ration } = req.body;
        const updatedBeneUser = await BeneUser.findByIdAndUpdate(
            req.params.id,
            { name, gender, contactno, address, pincode, age, inSchool, isWorking, schemeName, aadhar,ration },
            { new: true }
        );
        if (!updatedBeneUser) {
            return res.status(404).json({ message: 'Bene User not found' });
        }
        res.status(200).json(updatedBeneUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Delete a bene user by ID
exports.deleteBeneUser = async (req, res) => {
    try {
        const deletedBeneUser = await BeneUser.findByIdAndDelete(req.params.id);

        if (!deletedBeneUser) {
            return res.status(404).json({ message: 'Bene User not found' });
        }

        res.status(200).json({ message: 'Bene User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateSchemesAvailed = async(req , res) => {
    console.log(req.body);
    const {newScheme , phoneNumber} = req.body;
    try{
        const currUser = await BeneUser.findOne({contactno : phoneNumber});
        console.log(currUser);
        if(!currUser){
            res.status(400).json({message:"User not found"});
        }
        const updatedUser = await BeneUser.findByIdAndUpdate(currUser._id ,  { $push: { schemeName: newScheme } } , {new: true} );
        console.log(updatedUser);
        res.status(200).json(updatedUser);
    }
    catch(error){
        console.log(error);
    }
}