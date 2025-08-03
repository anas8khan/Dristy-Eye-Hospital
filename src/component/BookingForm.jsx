import React, { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mob: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h0dcb1b', 'template_hp6v98z', e.target, '-Tvqnq5J25Hh7CZNA')
      .then(
        () => {
          toast.success('Message Sent Successfully!');
          setFormData({
            name: '',
            email: '',
            mob: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          toast.error('Message Sending Failed!');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="dark:bg-gradient-to-r from-gray-800 to-gray-900 bg-white shadow-xl rounded-lg p-8 lg:p-10 mx-auto max-w-3xl">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Name and Email */}
        <div className="grid lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            required
          />
        </div>

        {/* Phone and Subject */}
        <div className="grid lg:grid-cols-2 gap-4">
          <input
            type="tel"
            name="mob"
            value={formData.mob}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            required
          />
        </div>

        {/* Message */}
        <textarea
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
