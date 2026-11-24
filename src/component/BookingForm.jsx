import React, { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const emptyForm = { name: "", email: "", mob: "", subject: "", message: "" };

const BookingForm = ({ className = "" }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm("service_h0dcb1b", "template_hp6v98z", e.target, "-Tvqnq5J25Hh7CZNA")
      .then(
        () => {
          toast.success("Message Sent Successfully!");
          setFormData(emptyForm);
        },
        (error) => {
          toast.error("Message Sending Failed!");
          console.error(error.text);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <form className={`flex flex-col gap-4 ${className}`} onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="bf-name">Your Name</label>
        <input id="bf-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="input" required />
        <label className="sr-only" htmlFor="bf-email">Your Email</label>
        <input id="bf-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="input" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="bf-mob">Phone Number</label>
        <input id="bf-mob" type="tel" name="mob" value={formData.mob} onChange={handleChange} placeholder="Phone Number" className="input" required />
        <label className="sr-only" htmlFor="bf-subject">Subject</label>
        <input id="bf-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="input" required />
      </div>
      <label className="sr-only" htmlFor="bf-message">Your Message</label>
      <textarea
        id="bf-message"
        rows={5}
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="input resize-none"
        required
      ></textarea>
      <button type="submit" disabled={sending} className="btn-primary w-full !py-3.5">
        {sending ? "Sending…" : "Send Message"}
        <HiOutlinePaperAirplane className="text-base" />
      </button>
    </form>
  );
};

export default BookingForm;
