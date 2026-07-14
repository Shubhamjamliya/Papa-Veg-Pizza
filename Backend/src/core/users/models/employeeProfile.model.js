import mongoose from 'mongoose';

const emergencyContactSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true },
        phone: { type: String, trim: true },
        relation: { type: String, trim: true }
    },
    { _id: false }
);

const employeeProfileSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
            unique: true
        },
        employeeId: {
            type: String,
            unique: true,
            sparse: true,
            trim: true
        },
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        profileImage: {
            type: String,
            default: ''
        },
        joiningDate: {
            type: Date,
            default: null
        },
        designation: {
            type: String,
            trim: true
        },
        salary: {
            type: Number,
            min: 0
        },
        emergencyContact: {
            type: emergencyContactSchema,
            default: () => ({})
        },
        address: {
            type: String,
            trim: true
        },
        servicesAccess: {
            type: [String],
            enum: ['food'],
            default: ['food']
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
        }
    },
    {
        collection: 'employee_profiles',
        timestamps: true
    }
);

// ADDED FIELDS
emergencyContactSchema.add({
    franchiseId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodFranchise', index: true, default: null },
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodStore', index: true, default: null }
});


export const EmployeeProfile = mongoose.model('EmployeeProfile', employeeProfileSchema);
