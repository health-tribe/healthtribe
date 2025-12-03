import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
// ==========================================
// DOMAIN 5: ORDERS
// ==========================================

const orderSchema = new mongoose.Schema({
  oid: {
    type: String,
    unique: true,
    default: () => `ORD-${nanoid()}`,
    index: true
  },
  orderNumber: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  status: {
    type: String,
    enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED'],
    default: 'PENDING',
    index: true
  },
  currency: {
    type: String,
    default: 'INR'
  },
  subtotalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  totalDiscountAmount: {
    type: Number,
    default: 0,
    min: 0
  },
  taxableAmount: {
    type: Number,
    required: true,
    min: 0
  },
  taxAmount: {
    type: Number,
    required: true,
    min: 0
  },
  finalPayableAmount: {
    type: Number,
    required: true,
    min: 0
  },
  customerEmail: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  billingAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String
  },
  notes: String
}, {
  timestamps: true,
  collection: 'orders'
});

orderSchema.index({ createdAt: -1 });

export const Order = mongoose.model('Order', orderSchema);

// ==========================================
// ORDER LINE ITEM
// ==========================================

const orderLineItemSchema = new mongoose.Schema({
  olid: {
    type: String,
    unique: true,
    default: () => `OLI-${nanoid()}`,
    index: true
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
    index: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },
  courseTitleSnapshot: {
    type: String,
    required: true
  },
  unitPriceSnapshot: {
    type: Number,
    required: true,
    min: 0
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1
  }
}, {
  timestamps: true,
  collection: 'order_line_items'
});

export const OrderLineItem = mongoose.model('OrderLineItem', orderLineItemSchema);
