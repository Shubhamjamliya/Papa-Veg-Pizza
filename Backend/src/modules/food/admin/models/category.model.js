import mongoose from 'mongoose';

const foodCategorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true, index: true },
        imageUrl: { type: String, trim: true, default: '' },
        imagePublicId: { type: String, trim: true, default: '' },
        description: { type: String, trim: true, default: '' },
        sortOrder: { type: Number, default: 0, index: true },
        isActive: { type: Boolean, default: true, index: true }
    },
    {
        collection: 'food_categories',
        timestamps: true
    }
);

// ADDED FIELDS
foodCategorySchema.add({
    isDeleted: { type: Boolean, default: false, index: true },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

export const FoodCategory = mongoose.model('FoodCategory', foodCategorySchema);
