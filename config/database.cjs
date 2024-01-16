const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const resources = [
  {
      name:'Ohio Domestic Violence Network ',
      location: '174 E Long St Columbus Ohio 43215',
      services:'Emergency Shelter ,Legal and Fiancial Assistance',
      seeDetails: true
  },
  {
      name:'Bravo',
      location: '750 E Long ST Columbus Ohio 43215',
      services:'Emergency Shelter ,Legal and Fiancial Assistance,Counseling',
      seeDetails: false
  },
  {
      name:'The Center for Family Safety and Healing',
      location: '655 E Livingston Ave Columbus Ohio 43205',
      services:'Emergency Shelter, Legal and Financial Assistance, Counseling',
      seeDetails: true
  }
];

module.exports = resources;

const db =mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
  });