const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    contactno: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    inSchool: {
        type: Boolean,
        required: true
    },
    isWorking: {
        type: Boolean,
        required: true
    },
    schemeName: [{
        type: String
    }],
    aadhar: {
        type: String
    },
    pan: {
        type: String
    },
    ration: {
        type: String
    }
});
module.exports = mongoose.model('BeneUser', beneSchema);