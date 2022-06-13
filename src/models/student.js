const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: String,
  npm: String,
});

module.exports = mongoose.model('Student', studentSchema);
