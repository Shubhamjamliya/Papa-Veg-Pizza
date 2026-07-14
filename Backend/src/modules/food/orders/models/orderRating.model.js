import mongoose from 'mongoose';

const orderRatingSchema = new mongoose.Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodOrder', required: true, index: true },
        targetType: { type: String, enum: ['store', 'deliveryPartner'], required: true },
        targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: Number, min: 1, max: 5, required: true },
        comment: { type: String, default: '', trim: true }
    },
    { collection: 'food_order_ratings', timestamps: true }
);

export const OrderRating = mongoose.model('OrderRating', orderRatingSchema);
