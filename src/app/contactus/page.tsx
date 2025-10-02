"use client";

import React, { useState } from "react";
import { User, Mail, FileText, Paperclip, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      file: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="mt-10 flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-5"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>

        {/* Two-column for names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex items-center border rounded-lg p-2 sm:p-3">
            <User className="w-4 h-4 text-black mr-2" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full outline-none text-xs sm:text-sm"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex items-center border rounded-lg p-2 sm:p-3">
            <User className="w-4 h-4 text-black mr-2" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full outline-none text-xs sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center border rounded-lg p-2 sm:p-3">
          <Mail className="w-4 h-4 text-black mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full outline-none text-xs sm:text-sm"
            required
          />
        </div>

        {/* Message */}
        <div className="flex items-start border rounded-lg p-2 sm:p-3">
          <FileText className="w-4 h-4 text-black mr-2 mt-1" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full outline-none resize-none text-xs sm:text-sm"
            rows={4}
            required
          />
        </div>

        {/* File Attachment */}
        <div className="flex items-center border rounded-lg p-2 sm:p-3">
          <Paperclip className="w-4 h-4 text-black mr-2" />
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full text-gray-600 text-xs sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center w-full bg-black text-white py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition text-xs sm:text-sm font-medium cursor-pointer"
        >
          <Send className="w-4 h-4 mr-2" />
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
