import mongoose from 'mongoose';

const territorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        zoneId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodZone',
            required: true,
            index: true
        },
        description: {
            type: String,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true,
            index: true
        },
        postalCodes: {
            type: [String],
            default: []
        }
    },
    {
        collection: 'food_territories',
        timestamps: true
    }
);

export const FoodTerritory = mongoose.model('FoodTerritory', territorySchema);
