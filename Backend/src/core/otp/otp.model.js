import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null,
            index: true
        },
        phone: {
            type: String,
            trim: true,
            index: true
        },
        email: {
            type: String,
            trim: true,
            index: true,
            lowercase: true
        },
        type: {
            type: String,
            enum: ['LOGIN', 'REGISTER', 'RESET_PASSWORD', 'CHANGE_PHONE', 'VERIFY_EMAIL'],
            required: true,
            index: true
        },
        otp: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Date,
            required: true,
            index: { expires: 0 } // TTL index: document will be auto-deleted when expiresAt is reached
        },
        attempts: {
            type: Number,
            default: 0
        }
    },
    {
        collection: 'otps',
        timestamps: true
    }
);

export const Otp = mongoose.model('Otp', otpSchema);
