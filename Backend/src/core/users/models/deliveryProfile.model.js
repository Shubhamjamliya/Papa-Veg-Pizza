import mongoose from 'mongoose';

const normalizeRatingValue = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return 0;
    return Math.max(0, Math.min(5, Number(numeric.toFixed(1))));
};

const deliveryProfileSchema = new mongoose.Schema(
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
        franchiseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodFranchise',
            default: null,
            index: true
        },
        storeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodStore',
            default: null,
            index: true
        },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        vehicleType: { type: String },
        vehicleName: { type: String },
        vehicleNumber: {
            type: String,
            unique: true,
            sparse: true
        },
        panNumber: { type: String },
        aadharNumber: { type: String },
        drivingLicenseNumber: { type: String, trim: true },
        aadharPhotoUrl: { type: String },
        aadharPhotoPublicId: { type: String },
        panPhotoUrl: { type: String },
        panPhotoPublicId: { type: String },
        drivingLicensePhotoUrl: { type: String },
        drivingLicensePhotoPublicId: { type: String },
        priorityRouting: {
            type: Boolean,
            default: false
        },
        rejectionReason: { type: String },
        rejectedAt: { type: Date },
        approvedAt: { type: Date },
        documentsVerifiedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        documentsVerifiedAt: { type: Date },
        isVerified: {
            type: Boolean,
            default: false
        },
        joinedAt: {
            type: Date,
            default: Date.now
        },
        bankAccountHolderName: { type: String },
        bankAccountNumber: { type: String },
        bankIfscCode: { type: String },
        bankName: { type: String },
        upiId: { type: String },
        upiQrCode: { type: String },
        currentStatus: {
            type: String,
            enum: ['pending', 'approved', 'rejected', 'suspended'],
            default: 'pending'
        },
        onlineStatus: {
            type: String,
            enum: ['online', 'offline'],
            default: 'offline'
        },
        availabilityStatus: {
            type: String,
            enum: ['available', 'busy', 'offline'],
            default: 'offline'
        },
        lastLocation: {
            type: { type: String, enum: ['Point'] },
            coordinates: { type: [Number] }
        },
        lastLat: { type: Number },
        lastLng: { type: Number },
        lastLocationAt: { type: Date },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
            set: normalizeRatingValue
        },
        totalRatings: { type: Number, default: 0, min: 0 },
        walletAmount: { type: Number, default: 0 },
        totalDeliveries: { type: Number, default: 0 }
    },
    {
        collection: 'delivery_profiles',
        timestamps: true
    }
);

deliveryProfileSchema.index({ lastLocation: '2dsphere' });

export const DeliveryProfile = mongoose.model('DeliveryProfile', deliveryProfileSchema);
