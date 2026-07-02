import mongoose from 'mongoose';

const franchiseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        managerName: {
            type: String,
            required: true,
            trim: true
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
            required: true,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true,
            index: true
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

export const FoodFranchise = mongoose.model('FoodFranchise', franchiseSchema);
