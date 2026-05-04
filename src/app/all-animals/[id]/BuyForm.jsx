"use client";

import { useState, useRef } from "react";

export default function BuyForm({ animal }) {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // DOM থেকে সরাসরি value পড়া — state reset হলেও data থাকবে
    const name = formRef.current.name.value.trim();
    const contact = formRef.current.contact.value.trim();
    const email = formRef.current.email.value.trim();
    const address = formRef.current.address.value.trim();

    // Validation
    if (!name || !contact || !email || !address) {
      alert("Please fill in all fields!");
      return;
    }

    // Success alert
    alert(
      `\u{1F389} Purchase Successful!\n\n` +
      `Animal: ${animal.name}\n` +
      `Price: \u09F3 ${animal.price.toLocaleString()}\n\n` +
      `Buyer Info:\n` +
      `Name: ${name}\n` +
      `Contact: ${contact}\n` +
      `Email: ${email}\n` +
      `Address: ${address}`
    );

    // Form data clear — form থাকবে
    formRef.current.reset();
  };

  return (
    <>
      {/* Buy Now Button — form খুলবে */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:brightness-95"
          style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
        >
          Buy Now
        </button>
      ) : (
        /* Form Section */
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                Buyer Information
              </h3>
              <button
                type="button"
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
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Contact */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</label>
              <input
                type="tel"
                name="contact"
                placeholder="+880 1XXX XXXXXX"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Address</label>
              <textarea
                name="address"
                placeholder="House no, Road, Area, District"
                rows={2}
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Confirm Buy */}
            <button
              type="submit"
              className="w-full rounded-xl px-4 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:brightness-95"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
            >
              Confirm Purchase — ৳ {animal.price.toLocaleString()}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
