// PhonePe Payment Gateway Integration
// Configure these with your PhonePe merchant credentials

export const PHONEPE_CONFIG = {
  // Get these from https://developer.phonepe.com/
  MERCHANT_ID: process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID || "MERCHANT_TEST",
  API_KEY: process.env.PHONEPE_API_KEY || "test_api_key",
  BASE_URL: process.env.NODE_ENV === "production"
    ? "https://api.phonepe.com/apis/hermes"
    : "https://api-preprod.phonepe.com/apis/hermes", // Use test URL for development
};

export interface PhonePeOrderRequest {
  merchantId: string;
  merchantTransactionId: string;
  merchantUserId: string;
  amount: number; // in paise (1 INR = 100 paise)
  redirectUrl: string;
  redirectMode: string;
  mobileNumber?: string;
  paymentInstrument?: {
    type: string;
  };
}

export interface PhonePeOrderResponse {
  success: boolean;
  code: string;
  message: string;
  data?: {
    merchantId: string;
    merchantTransactionId: string;
    instrumentResponse?: {
      type: string;
      redirectInfo?: {
        url: string;
        method: string;
      };
    };
  };
}

// Create PhonePe payment order
export async function createPhonePeOrder(
  orderId: string,
  userId: string,
  amount: number, // amount in INR
  redirectUrl: string
): Promise<PhonePeOrderResponse> {
  const amountInPaise = Math.round(amount * 100);

  const orderRequest: PhonePeOrderRequest = {
    merchantId: PHONEPE_CONFIG.MERCHANT_ID,
    merchantTransactionId: orderId,
    merchantUserId: userId,
    amount: amountInPaise,
    redirectUrl: redirectUrl,
    redirectMode: "POST",
    mobileNumber: "9999999999", // Optional: customer mobile number
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  try {
    // Note: In production, call this from your backend API route
    // This is a placeholder for the actual API call
    const response = await fetch(`${PHONEPE_CONFIG.BASE_URL}/v1/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MERCHANT-ID": PHONEPE_CONFIG.MERCHANT_ID,
        // Add authorization header with API key
      },
      body: JSON.stringify(orderRequest),
    });

    return await response.json();
  } catch (error) {
    console.error("PhonePe order creation error:", error);
    return {
      success: false,
      code: "ERROR",
      message: "Failed to create payment order",
    };
  }
}

// Check payment status
export async function checkPaymentStatus(transactionId: string): Promise<any> {
  try {
    const response = await fetch(
      `${PHONEPE_CONFIG.BASE_URL}/v1/order/status/${PHONEPE_CONFIG.MERCHANT_ID}/${transactionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-MERCHANT-ID": PHONEPE_CONFIG.MERCHANT_ID,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error("PhonePe status check error:", error);
    return null;
  }
}

// Generate QR code for UPI payment (alternative flow)
export function generateUPIQRCode(amount: number, orderId: string): string {
  // UPI payment string format: upi://pay?pa=merchant@upi&pn=Merchant&am=amount&tr=transactionId
  const upiId = process.env.NEXT_PUBLIC_UPI_ID || "merchant@phonepe";
  const merchantName = process.env.NEXT_PUBLIC_MERCHANT_NAME || "HOMMARA";
  
  const upiString = `upi://pay?pa=${upiId}&pn=${merchantName}&am=${amount.toFixed(2)}&tr=${orderId}&cu=INR`;
  
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiString)}`;
}