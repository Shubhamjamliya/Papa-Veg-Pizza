import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        code: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            uppercase: true
        },
        description: {
            type: String,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        collection: 'roles',
        timestamps: true
    }
);

// ADDED FIELDS
roleSchema.add({
    priority: { type: Number, default: 0 }
});


export const Role = mongoose.model('Role', roleSchema);
