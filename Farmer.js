import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
});

const Farmer = mongoose.model('Farmer', farmerSchema);

export default Farmer;