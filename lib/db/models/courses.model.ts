// ==========================================
// DOMAIN 2: COURSES & PRICING
// ==========================================
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
const courseSchema = new mongoose.Schema({
  cid: {
    type: String,
    unique: true,
    default: () => `CRS-${nanoid()}`,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true
  },
  description: String,
  thumbnail: String,
  basePrice: {
    type: Number,
    required: true, // In cents/paise
    min: 0
  },
  isPublished: {
    type: Boolean,
    default: false,
    index: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  metadata: {
    duration: Number,
    difficulty: String,
    instructorId: String,
    category: String,
    tags: [String]
  }
}, {
  timestamps: true,
  collection: 'courses'
});

courseSchema.index({ cid: 1 });
courseSchema.index({ slug: 1 });
courseSchema.index({ isPublished: 1 });
courseSchema.index({ createdAt: -1 });

export const Course = mongoose.model('Course', courseSchema);


// ==========================================
// COURSE PRICE HISTORY
// ==========================================

const coursePriceSchema = new mongoose.Schema({
  cpid: {
    type: String,
    unique: true,
    default: () => `CPR-${nanoid()}`,
    index: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR'
  },
  activeFrom: {
    type: Date,
    default: Date.now,
    index: true
  },
  activeUntil: {
    type: Date,
    index: true
  }
}, {
  timestamps: true,
  collection: 'course_prices'
});

export const CoursePrice = mongoose.model('CoursePrice', coursePriceSchema);
