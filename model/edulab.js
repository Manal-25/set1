const mongoose = require('mongoose');

const edulabSchema = new mongoose.Schema({

    id: {
        type: String,
        index: true
    },
    name: {
        type: String,
        index: true
    },
    username: {
        type: String,
        index: true
    },
    email: {
        type: String,
        index: true
    },
    address: {
        type: String,
        index: true
    },
    _version: {
        type: Number,
        index: true
    },
    _created: {
        type: String,
        index: true
    },
    _createdby: {
        type: String,
        index: true
    },

}, { strict: false });

const EdulabCompanies = mongoose.model('edulabDbDownload', edulabSchema);

module.exports = EdulabCompanies;