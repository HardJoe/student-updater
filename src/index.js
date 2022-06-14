require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./models/student');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.use(express.json());

app.post('/update', async (req, res) => {
  const { nama, npm } = req.body;
  const student = await Student.findOneAndUpdate({ npm }, { name: nama });
  if (!student) {
    const person = new Student({ name: nama, npm });
    await person.save();
  }
  res.json({ status: 'OK' });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Student Updater app listening on port ${port}`);
});
