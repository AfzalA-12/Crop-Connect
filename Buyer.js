import mongoose from 'mongoose';

const buyerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
});

const Buyer = mongoose.model('Buyer', buyerSchema);

export default Buyer;