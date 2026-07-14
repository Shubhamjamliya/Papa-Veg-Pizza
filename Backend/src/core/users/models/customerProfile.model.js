import mongoose from 'mongoose';

const customerProfileSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
            unique: true
        },
        name: {
            type: String,
            trim: true
        },
        profileImage: {
            type: String,
            default: ''
        },
        dateOfBirth: {
            type: Date,
            default: null
        },
        anniversary: {
            type: Date,
            default: null
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other', 'prefer-not-to-say', ''],
            default: ''
        },
        defaultAddressId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodAddress',
            default: null
        },
        loyaltyPoints: {
            type: Number,
            default: 0,
            min: 0
        },
        walletBalance: {
            type: Number,
            default: 0,
            min: 0
        },
        preferredLanguage: {
            type: String,
            default: 'en'
        },
        marketingConsent: {
            type: Boolean,
            default: false
        },
        referralCode: {
            type: String,
            index: true
        },
        referredBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null,
            index: true
        },
        referralCount: {
            type: Number,
            default: 0,
            min: 0
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    {
        collection: 'customer_profiles',
        timestamps: true
    }
);

// ADDED FIELDS
customerProfileSchema.add({
    favoriteStoreId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodStore', default: null },
    lastOrderAt: { type: Date, default: null }
});


export const CustomerProfile = mongoose.model('CustomerProfile', customerProfileSchema);
