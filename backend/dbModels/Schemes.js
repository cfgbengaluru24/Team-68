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
    }],
    endDate: {
        type: Date
    }
});
module.exports = mongoose.model('Schemes', schemeSchema);