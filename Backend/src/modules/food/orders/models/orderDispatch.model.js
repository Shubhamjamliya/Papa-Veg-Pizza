import mongoose from 'mongoose';

const orderDispatchSchema = new mongoose.Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodOrder', required: true, unique: true },
        modeAtCreation: { type: String, enum: ['auto'], default: 'auto' },
        status: {
            type: String,
            enum: ['unassigned', 'assigned', 'accepted', 'rejected', 'cancelled'],
            default: 'unassigned'
        },
        deliveryPartnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null, index: true },
        assignedAt: { type: Date },
        acceptedAt: { type: Date },
        offeredTo: [{
            partnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            at: { type: Date, default: Date.now },
            action: { type: String, enum: ['offered', 'rejected', 'timeout'], default: 'offered' },
            allowOverLimit: { type: Boolean, default: false },
            requiredCashForOrder: { type: Number, default: 0 }
        }],
        dispatchingAt: { type: Date },
        currentPhase: {
            type: String,
            enum: [
                'en_route_to_pickup',
                'at_pickup',
                'en_route_to_delivery',
                'at_drop',
                'delivered',
                'completed'
            ],
            default: 'en_route_to_pickup'
        },
        deliveryStateStatus: { type: String, default: '' },
        reachedPickupAt: { type: Date, default: null },
        reachedDropAt: { type: Date, default: null },
        pickedUpAt: { type: Date, default: null },
        deliveredAt: { type: Date, default: null },
        deliveryVerification: {
            dropOtpRequired: { type: Boolean, default: false },
            dropOtpVerified: { type: Boolean, default: false }
        }
    },
    { collection: 'food_order_dispatches', timestamps: true }
);
orderDispatchSchema.index({ status: 1, updatedAt: -1 });

export const OrderDispatch = mongoose.model('OrderDispatch', orderDispatchSchema);
