import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
// ==========================================
// DOMAIN 3: DISCOUNT ENGINE
// ==========================================

const discountSchema = new mongoose.Schema({
  did: {
    type: String,
    unique: true,
    default: () => `DSC-${nanoid()}`,
    index: true
  },
  code: {
    type: String,
    unique: true,
    sparse: true,
    uppercase: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ['D1_BASE', 'D2_USER_EXCLUSIVE', 'D3_SEASONAL'],
    required: true,
    index: true
  },
  type: {
    type: String,
    enum: ['PERCENTAGE', 'FLAT_AMOUNT'],
    required: true
  },
  value: {
    type: Number,
    required: true,
    min: 0
  },
  minOrderAmount: {
    type: Number,
    min: 0
  },
  maxDiscountCap: {
    type: Number,
    min: 0
  },
  maxUsageCount: Number,
  maxUsagePerUser: {
    type: Number,
    default: 1
  },
  startsAt: {
    type: Date,
    required: true,
    index: true
  },
  expiresAt: {
    type: Date,
    required: true,
    index: true
  },
  isStackable: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, {
  timestamps: true,
  collection: 'discounts'
});

export const Discount = mongoose.model('Discount', discountSchema);




// ==========================================
// USER DISCOUNT ALLOCATION
// ==========================================

const userDiscountAllocationSchema = new mongoose.Schema({
  udaid: {
    type: String,
    unique: true,
    default: () => `UDA-${nanoid()}`,
    index: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  discountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount',
    required: true,
    index: true
  },
  isRedeemed: {
    type: Boolean,
    default: false,
    index: true
  },
  redeemedAt: Date,
  assignedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'user_discount_allocations'
});

userDiscountAllocationSchema.index({ userId: 1, discountId: 1 }, { unique: true });

export const UserDiscountAllocation = mongoose.model('UserDiscountAllocation', userDiscountAllocationSchema);


// ==========================================
// ORDER DISCOUNT USAGE
// ==========================================

const orderDiscountUsageSchema = new mongoose.Schema({
  oduid: {
    type: String,
    unique: true,
    default: () => `ODU-${nanoid()}`,
    index: true
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
    index: true
  },
  discountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount',
    required: true,
    index: true
  },
  discountCode: String,
  discountCategory: {
    type: String,
    enum: ['D1_BASE', 'D2_USER_EXCLUSIVE', 'D3_SEASONAL'],
    required: true
  },
  amountDeducted: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true,
  collection: 'order_discount_usage'
});

export const OrderDiscountUsage = mongoose.model('OrderDiscountUsage', orderDiscountUsageSchema);
