// ==========================================
// VERIFICATION MODEL
// ==========================================
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
const verificationSchema = new mongoose.Schema({
  vid: {
    type: String,
    unique: true,
    default: () => `VER-${nanoid()}`,
    index: true
  },
  identifier: {
    type: String,
    required: true,
    index: true
  },
  value: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true,
    index: true
  }
}, {
  timestamps: true,
  collection: 'verifications'
});

export const Verification = mongoose.model('Verification', verificationSchema);
verificationSchema.index({ identifier: 1 });