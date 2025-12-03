
// ==========================================
// DOMAIN 1: USERS & AUTH
// ==========================================
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
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
