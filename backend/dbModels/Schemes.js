const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemeSchema = new Schema({
    tags: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    eligibilityCriteria: [{
        type: String
    }]
});
module.exports = mongoose.model('Schemes', schemeSchema);