import mongoose from 'mongoose';

const spiceCropSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
  },
});

const SpiceCrop = mongoose.model('SpiceCrop', spiceCropSchema);

export default SpiceCrop;