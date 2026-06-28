import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { FoodOtp } from './src/core/otp/otp.model.js';
import { FoodDeliveryPartner } from './src/modules/food/delivery/models/deliveryPartner.model.js';

dotenv.config();

async function check() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // 1. Find all OTPs
    const otps = await FoodOtp.find({}).lean();
    console.log('\n--- All Active OTPs in Database ---');
    console.log(JSON.stringify(otps, null, 2));

    // 2. Find delivery partners matching phone 6797980889
    const partners = await FoodDeliveryPartner.find({
      $or: [
        { phone: /6797980889/ },
        { phone: /6797980889/ }
      ]
    }).lean();
    console.log('\n--- Matching Delivery Partners in Database ---');
    console.log(JSON.stringify(partners, null, 2));

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

check();
