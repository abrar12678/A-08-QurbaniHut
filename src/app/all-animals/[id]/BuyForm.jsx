"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuyForm({ animal }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBuyNow = () => {
    // Validation
    if (!formData.name || !formData.contact || !formData.email || !formData.address) {
      alert("Please fill in all fields!");
      return;
    }

    // Success alert
    alert(
      `🎉 Purchase Successful!\n\n` +
      `Animal: ${animal.name}\n` +
      `Price: ৳ ${animal.price.toLocaleString()}\n\n` +
      `Buyer Info:\n` +
      `Name: ${formData.name}\n` +
      `Contact: ${formData.contact}\n` +
      `Email: ${formData.email}\n` +
      `Address: ${formData.address}`
    );

    // Page refresh — form data will be cleared
    router.refresh();
  };

  return (
    <>
      {/* Buy Now Button — opens form */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="flex-1 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:brightness-95"
          style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
        >
          Buy Now
        </button>
      ) : (
        /* Form Section */
        <div className="pt-2">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                Buyer Information
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Contact */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="+880 1XXX XXXXXX"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House no, Road, Area, District"
                rows={2}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Confirm Buy */}
            <button
              onClick={handleBuyNow}
              className="w-full rounded-xl px-4 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:brightness-95"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
            >
              Confirm Purchase — ৳ {animal.price.toLocaleString()}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
