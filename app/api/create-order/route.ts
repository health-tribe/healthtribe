import NextResponse from "next/server";
import { NextRequest } from "next/server";
import Razorpay from "razorpay";


export async function POST(request: NextRequest) {
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
  try {
    const { amount, currency } = await request.json();

    const options = {
      amount: amount * 100, // Convert amount to paise (e.g., 500 INR -> 50000 paise)
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.NextResponse.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}