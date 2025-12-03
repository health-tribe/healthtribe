import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
// ==========================================
// DOMAIN 4: CART
// ==========================================

const cartSchema = new mongoose.Schema({
  caid: {
    type: String,
    unique: true,
    default: () => `CRT-${nanoid()}`,
    index: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true
  },
  lastActivityAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'carts'
});

export const Cart = mongoose.model('Cart', cartSchema);

// ==========================================
// CART ITEM
// ==========================================

const cartItemSchema = new mongoose.Schema({
  ciid: {
    type: String,
    unique: true,
    default: () => `CIT-${nanoid()}`,
    index: true
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
    required: true,
    index: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'cart_items'
});

cartItemSchema.index({ cartId: 1, courseId: 1 }, { unique: true });

export const CartItem = mongoose.model('CartItem', cartItemSchema);
