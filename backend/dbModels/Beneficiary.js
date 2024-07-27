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
        type: String,
        enumL:['yes' , 'no'],
        required: true
    },
    isWorking: {
        type: String,
        enumL:['yes' , 'no'],
        required: true
    },
    schemeName: [{
        type: String
    }],
    aadhar: {
        type: String,
        enumL:['yes' , 'no'],
        default: false
    },
    ration: {
        type: String,
        enumL:['yes' , 'no'],
        default: false
    }
});
module.exports = mongoose.model('BeneUser', beneSchema);