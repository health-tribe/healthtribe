import mongoose from 'mongoose';    
import { nanoid } from 'nanoid';
// ==========================================
// DOMAIN 7: ENROLLMENT
// ==========================================

const enrollmentSchema = new mongoose.Schema({
  eid: {
    type: String,
    unique: true,
    default: () => `ENR-${nanoid()}`,
    index: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'COMPLETED', 'SUSPENDED', 'EXPIRED'],
    default: 'ACTIVE',
    index: true
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  startedAt: Date,
  completedAt: Date,
  expiresAt: Date,
  progressPercentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  lastAccessedAt: Date
}, {
  timestamps: true,
  collection: 'enrollments'
});

enrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

export const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// ==========================================
// DOMAIN 8: AUDIT LOG
// ==========================================

const auditLogSchema = new mongoose.Schema({
  alid: {
    type: String,
    unique: true,
    default: () => `AUD-${nanoid()}`,
    index: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true
  },
  entityType: {
    type: String,
    required: true,
    index: true
  },
  entityId: {
    type: String,
    required: true,
    index: true
  },
  action: {
    type: String,
    enum: ['CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'PURCHASE', 'REFUND'],
    required: true,
    index: true
  },
  changes: mongoose.Schema.Types.Mixed,
  ipAddress: String,
  userAgent: String,
  metadata: mongoose.Schema.Types.Mixed
}, {
  timestamps: true,
  collection: 'audit_logs'
});

auditLogSchema.index({ createdAt: -1 });

export const AuditLog = mongoose.model('AuditLog', auditLogSchema);