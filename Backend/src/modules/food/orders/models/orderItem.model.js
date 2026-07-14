import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodOrder', required: true, index: true },
        itemId: { type: String, required: true, trim: true },
        name: { type: String, required: true, trim: true },
        variantId: { type: String, trim: true, default: '' },
        variantName: { type: String, trim: true, default: '' },
        variantPrice: { type: Number, min: 0, default: 0 },
        price: { type: Number, required: true, min: 0 },
        quantity: { type: Number, required: true, min: 1 },
        isVeg: { type: Boolean, default: true },
        image: { type: String, default: '' },
        notes: { type: String, default: '' }
    },
    { collection: 'food_order_items', timestamps: true }
);

export const OrderItem = mongoose.model('OrderItem', orderItemSchema);
