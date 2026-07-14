import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        role: {
            type: String,
            required: true
        },
        module: {
            type: String,
            required: true,
            index: true
        },
        action: {
            type: String,
            required: true,
            index: true
        },
        oldValue: {
            type: mongoose.Schema.Types.Mixed,
            default: null
        },
        newValue: {
            type: mongoose.Schema.Types.Mixed,
            default: null
        },
        ipAddress: {
            type: String,
            default: ''
        },
        device: {
            type: String,
            default: ''
        }
    },
    {
        collection: 'audit_logs',
        timestamps: true // This will automatically add createdAt and updatedAt
    }
);

auditLogSchema.index({ createdAt: -1 });
auditLogSchema.index({ module: 1, action: 1 });

export const AuditLog = mongoose.model('AuditLog', auditLogSchema);
