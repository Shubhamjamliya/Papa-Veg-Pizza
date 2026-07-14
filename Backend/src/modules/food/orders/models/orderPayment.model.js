import mongoose from 'mongoose';

const orderPaymentSchema = new mongoose.Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodOrder', required: true, unique: true },
        method: {
            type: String,
            enum: ['cash', 'razorpay', 'razorpay_qr', 'wallet'],
            required: true
        },
        status: {
            type: String,
            enum: [
                'cod_pending', 'created', 'authorized', 'paid',
                'failed', 'refunded', 'pending_qr'
            ],
            default: 'cod_pending',
            index: true
        },
        amountDue: { type: Number, min: 0 },
        razorpayOrderId: { type: String },
        razorpayPaymentId: { type: String },
        razorpaySignature: { type: String },
        qrId: { type: String },
        qrImageUrl: { type: String },
        qrPaymentLinkId: { type: String },
        qrShortUrl: { type: String },
        qrStatus: { type: String },
        qrExpiresAt: { type: Date },
        refundStatus: { 
            type: String, 
            enum: ['none', 'pending', 'processed', 'failed'], 
            default: 'none' 
        },
        refundDestination: {
            type: String,
            enum: ['source', 'wallet'],
            default: 'source'
        },
        refundAmount: { type: Number, default: 0 },
        refundId: { type: String, default: '' },
        refundProcessedAt: { type: Date }
    },
    { collection: 'food_order_payments', timestamps: true }
);

export const OrderPayment = mongoose.model('OrderPayment', orderPaymentSchema);
