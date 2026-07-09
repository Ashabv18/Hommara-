import { NextRequest, NextResponse } from "next/server";
import { PHONEPE_CONFIG } from "@/lib/phonepe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, amount, userId, customerDetails } = body;

    // In production, validate the request and create order in your database first
    // Then create PhonePe payment order

    const orderRequest = {
      merchantId: PHONEPE_CONFIG.MERCHANT_ID,
      merchantTransactionId: orderId,
      merchantUserId: userId || "USER_" + Date.now(),
      amount: Math.round(amount * 100), // Convert to paise
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/order-success`,
      redirectMode: "POST",
      mobileNumber: customerDetails?.phone || "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    // NOTE: This is a mock response. In production, make actual API call to PhonePe
    // const response = await fetch(
    //   `${PHONEPE_CONFIG.BASE_URL}/v1/order/create`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-MERCHANT-ID": PHONEPE_CONFIG.MERCHANT_ID,
    //       "Authorization": generatePhonePeAuthHeader(orderRequest),
    //     },
    //     body: JSON.stringify(orderRequest),
    //   }
    // );

    // Mock response for development
    const mockResponse = {
      success: true,
      code: "SUCCESS",
      message: "Order created successfully",
      data: {
        merchantId: PHONEPE_CONFIG.MERCHANT_ID,
        merchantTransactionId: orderId,
        instrumentResponse: {
          type: "PAY_PAGE",
          redirectInfo: {
            url: `https://preprod.phonepe.com/transact/${orderId}?merchantId=${PHONEPE_CONFIG.MERCHANT_ID}`,
            method: "POST",
          },
        },
      },
    };

    return NextResponse.json(mockResponse);
  } catch (error) {
    console.error("PhonePe order creation error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create order" },
      { status: 500 }
    );
  }
}