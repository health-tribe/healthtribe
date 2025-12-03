import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';

// Custom ID generators
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 21);

// ==========================================
// DOMAIN 1: USERS & AUTH
// ==========================================

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    unique: true,
    default: () => `USR-${nanoid()}`,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  image: String,
  firstName: String,
  lastName: String,
  phone: String,
  role: {
    type: String,
    enum: ['STUDENT', 'ADMIN', 'SUPPORT'],
    default: 'STUDENT',
    index: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  collection: 'users'
});

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ uid: 1 });
userSchema.index({ role: 1 });

export const User = mongoose.model('User', userSchema);

// ==========================================
// SESSION MODEL
// ==========================================

const sessionSchema = new mongoose.Schema({
  sid: {
    type: String,
    unique: true,
    default: () => `SES-${nanoid()}`,
    index: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  },
  expiresAt: {
    type: Date,
    required: true,
    index: true
  },
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true,
  collection: 'sessions'
});

sessionSchema.index({ userId: 1 });
sessionSchema.index({ expiresAt: 1 });

export const Session = mongoose.model('Session', sessionSchema);