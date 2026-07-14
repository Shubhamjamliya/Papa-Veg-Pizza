import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema(
    {
        module: {
            type: String,
            required: true,
            trim: true
        },
        action: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    },
    {
        collection: 'permissions',
        timestamps: true
    }
);

permissionSchema.index({ module: 1, action: 1 }, { unique: true });

export const Permission = mongoose.model('Permission', permissionSchema);
