import mongoose from 'mongoose';

const orderStatusHistorySchema = new mongoose.Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodOrder', required: true, index: true },
        at: { type: Date, default: Date.now },
        byRole: { type: String, enum: ['USER', 'STORE', 'DELIVERY_PARTNER', 'ADMIN', 'SYSTEM'] },
        byId: { type: mongoose.Schema.Types.ObjectId },
        from: { type: String },
        to: { type: String },
        note: { type: String, default: '' }
    },
    { collection: 'food_order_status_histories', timestamps: true }
);

export const OrderStatusHistory = mongoose.model('OrderStatusHistory', orderStatusHistorySchema);
