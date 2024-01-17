const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
   name: { type: String, required: true},
   location: { type: String, required: true},
   service:{type: String, required: true},
   seeDetails: Boolean
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;