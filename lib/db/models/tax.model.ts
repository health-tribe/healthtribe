import mongoose from 'mongoose';    
import { nanoid } from 'nanoid';
// ==========================================
// TRANSACTION (Payment Gateway)
// ==========================================

const transactionSchema = new mongoose.Schema({
  txid: {
    type: String,
    unique: true,
    default: () => `TXN-${nanoid()}`,
    index: true
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
    index: true
  },
  razorpayOrderId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  razorpayPaymentId: {
    type: String,
    unique: true,
    sparse: true,
    index: true
  },
  razorpaySignature: String,
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR'
  },
  status: {
    type: String,
    enum: ['INITIATED', 'PENDING', 'SUCCESS', 'FAILURE', 'TIMEOUT'],
    required: true,
    index: true
  },
  errorCode: String,
  errorLog: String,
  metadata: mongoose.Schema.Types.Mixed
}, {
  timestamps: true,
  collection: 'transactions'
});

export const Transaction = mongoose.model('Transaction', transactionSchema);

// ==========================================
// DOMAIN 6: TAX & INVOICE
// ==========================================

const taxRateSchema = new mongoose.Schema({
  tid: {
    type: String,
    unique: true,
    default: () => `TAX-${nanoid()}`,
    index: true
  },
  taxName: {
    type: String,
    required: true
  },
  taxCode: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  description: String,
  effectiveFrom: {
    type: Date,
    required: true,
    index: true
  },
  effectiveUntil: {
    type: Date,
    index: true
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, {
  timestamps: true,
  collection: 'tax_rates'
});

export const TaxRate = mongoose.model('TaxRate', taxRateSchema);

// ==========================================
// INVOICE
// ==========================================

const invoiceSchema = new mongoose.Schema({
  iid: {
    type: String,
    unique: true,
    default: () => `INV-${nanoid()}`,
    index: true
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
    unique: true,
    index: true
  },
  invoiceNumber: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
    index: true
  },
  dueDate: Date,
  customerDetailsSnapshot: {
    name: String,
    email: String,
    phone: String,
    address: mongoose.Schema.Types.Mixed
  },
  gstin: String,
  pan: String,
  subtotal: {
    type: Number,
    required: true,
    min: 0
  },
  taxAmount: {
    type: Number,
    required: true,
    min: 0
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  finalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  pdfPath: String,
  pdfUrl: String,
  isSent: {
    type: Boolean,
    default: false
  },
  sentAt: Date
}, {
  timestamps: true,
  collection: 'invoices'
});

export const Invoice = mongoose.model('Invoice', invoiceSchema);

