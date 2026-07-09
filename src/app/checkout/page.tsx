"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, CreditCard, Smartphone } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { generateUPIQRCode } from "@/lib/phonepe";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<"shipping" | "payment">("shipping");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"qr" | "redirect">("qr");
  
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handleQRPayment = async () => {
    setIsProcessing(true);
    
    // Generate order and create PhonePe order
    const orderId = generateOrderId();
    const orderAmount = subtotal;
    
    // Generate UPI QR code
    const qrCodeUrl = generateUPIQRCode(orderAmount, orderId);
    
    // Save order details (in production, save to database)
    const orderDetails = {
      orderId,
      items,
      shippingInfo,
      subtotal,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    
    localStorage.setItem("pendingOrder", JSON.stringify(orderDetails));
    
    // Show QR code modal
    setShowQRModal(true);
    setIsProcessing(false);
  };

  const [showQRModal, setShowQRModal] = useState(false);
  const [upiLink, setUpiLink] = useState("");

  const handleUPIPayment = async () => {
    setIsProcessing(true);
    
    const orderId = generateOrderId();
    const orderAmount = subtotal;
    const upiId = "merchant@phonepe"; // Replace with your UPI ID
    
    // UPI deep link
    const upiLink = `upi://pay?pa=${upiId}&pn=ZOROVA&am=${orderAmount.toFixed(2)}&tr=${orderId}&cu=INR`;
    setUpiLink(upiLink);
    
    // Save order details
    const orderDetails = {
      orderId,
      items,
      shippingInfo,
      subtotal,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    
    localStorage.setItem("pendingOrder", JSON.stringify(orderDetails));
    setShowQRModal(true);
    setIsProcessing(false);
  };

  const handlePaymentSuccess = () => {
    clearCart();
    localStorage.removeItem("pendingOrder");
    router.push("/order-success");
  };

  if (items.length === 0 && !showQRModal) {
    return (
      <div className="min-h-screen bg-[#faf6f1] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-[#6b1d2b] mb-4">
            Your cart is empty
          </h1>
          <Link
            href="/"
            className="inline-block mt-6 text-sm uppercase tracking-[0.12em] text-[#c9a86c] hover:text-[#b8955a] transition-colors font-sans font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf6f1] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors mb-8 font-sans"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#6b1d2b] mb-8">
              Checkout
            </h1>

            {/* Step Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${step === "shipping" ? "text-[#6b1d2b]" : "text-neutral-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "shipping" ? "bg-[#6b1d2b] text-white" : "bg-neutral-200"}`}>
                  1
                </div>
                <span className="text-sm font-medium">Shipping</span>
              </div>
              <div className="h-px flex-1 bg-neutral-300" />
              <div className={`flex items-center gap-2 ${step === "payment" ? "text-[#6b1d2b]" : "text-neutral-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "payment" ? "bg-[#6b1d2b] text-white" : "bg-neutral-200"}`}>
                  2
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
            </div>

            {step === "shipping" && (
              <form onSubmit={handleSubmitShipping} className="bg-white p-8 border border-[#c9a86c]/20">
                <h2 className="text-xl font-serif font-semibold text-[#6b1d2b] mb-6">
                  Shipping Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#6b1d2b] mb-2 font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={shippingInfo.name}
                      onChange={handleInputChange}
                      className="w-full border border-[#6b1d2b]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#6b1d2b] mb-2 font-sans">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={shippingInfo.email}
                      onChange={handleInputChange}
                      className="w-full border border-[#6b1d2b]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#6b1d2b] mb-2 font-sans">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={shippingInfo.phone}
                      onChange={handleInputChange}
                      className="w-full border border-[#6b1d2b]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#6b1d2b] mb-2 font-sans">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                      className="w-full border border-[#6b1d2b]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
                      placeholder="Street address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#6b1d2b] mb-2 font-sans">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                        className="w-full border border-[#6b1d2b]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#6b1d2b] mb-2 font-sans">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={shippingInfo.pincode}
                        onChange={handleInputChange}
                        className="w-full border border-[#6b1d2b]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
                        placeholder="560001"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] font-medium text-[#6b1d2b] mb-2 font-sans">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={shippingInfo.state}
                      onChange={handleInputChange}
                      className="w-full border border-[#6b1d2b]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
                      placeholder="State"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 bg-[#6b1d2b] text-white py-4 text-xs tracking-[0.12em] uppercase font-semibold hover:bg-[#6b1d2b]/90 transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {step === "payment" && (
              <div className="bg-white p-8 border border-[#c9a86c]/20">
                <h2 className="text-xl font-serif font-semibold text-[#6b1d2b] mb-6">
                  Select Payment Method
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={handleUPIPayment}
                    className={`w-full p-6 border-2 transition-all flex items-center gap-4 ${
                      paymentMethod === "qr"
                        ? "border-[#6b1d2b] bg-[#6b1d2b]/5"
                        : "border-neutral-200 hover:border-[#6b1d2b]/30"
                    }`}
                  >
                    <Smartphone className="h-8 w-8 text-[#6b1d2b]" />
                    <div className="text-left">
                      <div className="font-semibold text-[#6b1d2b]">UPI / PhonePe</div>
                      <div className="text-sm text-neutral-500">Pay using UPI or PhonePe app</div>
                    </div>
                  </button>
                </div>

                <button
                  onClick={() => setStep("shipping")}
                  className="w-full mt-6 border border-[#6b1d2b] text-[#6b1d2b] py-4 text-xs tracking-[0.12em] uppercase font-semibold hover:bg-[#6b1d2b]/5 transition-colors"
                >
                  Back to Shipping
                </button>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 border border-[#c9a86c]/20 sticky top-24">
              <h3 className="text-xl font-serif font-semibold text-[#6b1d2b] mb-6">
                Order Summary
              </h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-20 bg-[#ebeced] overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-[#6b1d2b] line-clamp-2">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">
                        Size: {item.selectedSize} | Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-semibold text-[#6b1d2b] mt-1">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#6b1d2b]/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-[#6b1d2b]/10">
                  <span className="text-[#6b1d2b]">Total</span>
                  <span className="text-[#6b1d2b]">₹{subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8">
            <h3 className="text-2xl font-serif font-bold text-[#6b1d2b] mb-4 text-center">
              Scan to Pay
            </h3>
            <p className="text-sm text-neutral-600 text-center mb-6">
              Scan the QR code with PhonePe, Google Pay, or any UPI app
            </p>
            <div className="bg-white p-4 border-2 border-[#6b1d2b]/10 mb-4">
              <img
                src={generateUPIQRCode(subtotal, `ORD${Date.now()}`)}
                alt="UPI QR Code"
                className="w-full"
              />
            </div>
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-[#6b1d2b]">₹{subtotal.toLocaleString()}</p>
              <p className="text-xs text-neutral-500 mt-1">Order Amount</p>
            </div>
            <div className="space-y-3">
              {upiLink && (
                <a
                  href={upiLink}
                  className="block w-full bg-[#6b1d2b] text-white py-3 text-center text-sm font-semibold hover:bg-[#6b1d2b]/90 transition-colors"
                >
                  Open in UPI App
                </a>
              )}
              <button
                onClick={handlePaymentSuccess}
                className="block w-full border border-[#6b1d2b] text-[#6b1d2b] py-3 text-center text-sm font-semibold hover:bg-[#6b1d2b]/5 transition-colors"
              >
                I have completed the payment
              </button>
              <button
                onClick={() => setShowQRModal(false)}
                className="block w-full text-neutral-600 text-sm hover:text-[#6b1d2b] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}