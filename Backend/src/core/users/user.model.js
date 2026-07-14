import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { config } from '../../config/env.js';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            sparse: true,
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            unique: true,
            sparse: true,
            trim: true
        },
        countryCode: {
            type: String,
            default: '+91'
        },
        password: {
            type: String
        },
        roleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
            default: null,
            index: true
        },
        storeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodStore',
            default: null,
            index: true
        },
        franchiseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodFranchise',
            default: null,
            index: true
        },
        status: {
            type: String,
            enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'PENDING'],
            default: 'ACTIVE'
        },
        isActive: {
            type: Boolean,
            default: true
        },
        isDeleted: {
            type: Boolean,
            default: false,
            index: true
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        phoneVerified: {
            type: Boolean,
            default: false
        },
        fcmTokens: {
            type: [String],
            default: []
        },
        fcmTokenMobile: {
            type: [String],
            default: []
        },
        lastLogin: {
            type: Date,
            default: null
        }
    },
    {
        collection: 'users',
        timestamps: true
    }
);

// ADDED FIELDS
userSchema.add({
    loginProvider: { type: String, enum: ['local', 'google', 'facebook', 'apple'], default: 'local' },
    failedLoginAttempts: { type: Number, default: 0 },
    accountLockedUntil: { type: Date, default: null },
    passwordChangedAt: { type: Date, default: null }
});


userSchema.pre('save', async function (next) {
    if (!this.isModified('password') || !this.password) {
        return next();
    }
    const salt = await bcrypt.genSalt(config.bcryptSaltRounds);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
    if (!this.password) return false;
    return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model('User', userSchema);
