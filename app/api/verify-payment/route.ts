import { NextResponse, type NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    // 1. Validate Environment Variable
    // Fail fast if the server isn't configured correctly
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.error("RAZORPAY_KEY_SECRET is not defined in environment variables.");
      return NextResponse.json(
        { message: "Server configuration error", isOk: false },
        { status: 500 }
      );
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await request.json();

    // 2. Validate Input
    // Prevent crashes if the client sends partial data
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { message: "Missing required payment details", isOk: false },
        { status: 400 }
      );
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    // 3. Generate Expected Signature
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");

    // 4. Secure Verification (Prevent Timing Attacks)
    // Convert both strings to Buffers for secure comparison
    const generatedSignatureBuffer = Buffer.from(expectedSignature, "utf-8");
    const receivedSignatureBuffer = Buffer.from(razorpay_signature, "utf-8");

    // Ensure lengths match before comparing to prevent errors in timingSafeEqual
    if (generatedSignatureBuffer.length !== receivedSignatureBuffer.length) {
        return NextResponse.json(
            { message: "Invalid signature", isOk: false },
            { status: 400 }
        );
    }

    // timingSafeEqual takes constant time regardless of where the mismatch occurs
    const isValid = crypto.timingSafeEqual(
      generatedSignatureBuffer,
      receivedSignatureBuffer
    );

    if (isValid) {
      // Database logic here: Update user payment status to "Success"
      return NextResponse.json({
        message: "Payment verified successfully",
        isOk: true,
      });
    } else {
      return NextResponse.json(
        { message: "Invalid signature", isOk: false },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { message: "Internal Server Error", isOk: false },
      { status: 500 }
    );
  }
}