"use client"

import React from "react"

export default function ContactForm() {
  return (
    <form className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          placeholder="Write your message..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          rows={4}
        ></textarea>
      </div>

      <button
        type="button"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => alert("Thanks for your message! (Not connected to backend)")}
      >
        Send Message
      </button>
    </form>
  )
}
