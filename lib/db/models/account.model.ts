// ==========================================
// ACCOUNT MODEL (OAuth & Credentials)
// ==========================================
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
const accountSchema = new mongoose.Schema({
  aid: {
    type: String,
    unique: true,
    default: () => `ACC-${nanoid()}`,
    index: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  accountId: {
    type: String,
    required: true
  },
  providerId: {
    type: String,
    required: true,
    index: true
  },
  accessToken: String,
  refreshToken: String,
  expiresAt: Date,
  password: String, // Argon2/bcrypt hash
  lastLoginAt: Date,
  passwordChangedAt: Date
}, {
  timestamps: true,
  collection: 'accounts'
});

accountSchema.index({ userId: 1, providerId: 1 }, { unique: true });

export const Account = mongoose.model('Account', accountSchema);
