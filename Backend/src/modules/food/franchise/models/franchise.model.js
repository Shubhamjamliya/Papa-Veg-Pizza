import mongoose from 'mongoose';

const franchiseSchema = new mongoose.Schema(
    {
        franchiseName: {
            type: String,
            required: true,
            trim: true
        },
        legalBusinessName: {
            type: String,
            trim: true,
            default: ''
        },
        panNumber: {
            type: String,
            trim: true,
            default: ''
        },
        logo: {
            type: String,
            trim: true,
            default: ''
        },
        ownerAdminId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodAdmin',
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        gstNumber: {
            type: String,
            trim: true,
            default: ''
        },
        address: {
            type: String,
            trim: true,
            default: ''
        },
        franchiseCode: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        regionId: { type: String, trim: true, default: '' },
        zoneId: { type: String, trim: true, default: '' },
        territoryId: { type: String, trim: true, default: '' },
        city: { type: String, trim: true, default: '' },
        state: { type: String, trim: true, default: '' },
        country: { type: String, trim: true, default: '' },
        pincode: { type: String, trim: true, default: '' },
        location: {
            type: { type: String, enum: ['Point'], default: 'Point' },
            coordinates: { type: [Number], default: [0, 0] }
        },
        type: {
            type: String,
            enum: ['Single Store', 'Multi Store'],
            default: 'Single Store'
        },
        totalStores: {
            type: Number,
            default: 1
        },
        franchiseDuration: {
            type: Number,
            default: 3
        },
        franchiseCost: {
            type: Number,
            default: 0
        },
        paidAmount: {
            type: Number,
            default: 0
        },
        dueAmount: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true,
            index: true
        },
        status: {
            type: String,
            enum: ['PENDING', 'ACTIVE', 'SUSPENDED'],
            default: 'ACTIVE'
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodAdmin',
            default: null
        }
    },
    {
        collection: 'food_franchises',
        timestamps: true
    }
);

franchiseSchema.add({
    isDeleted: { type: Boolean, default: false, index: true },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

