import React, { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

const emptyForm = { name: "", email: "", mob: "", subject: "", message: "" };

const BookingForm = ({ className = "" }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();

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
          toast.success(t("Message Sent Successfully!"));
          setFormData(emptyForm);
        },
        (error) => {
          toast.error(t("Message Sending Failed!"));
          console.error(error.text);
        }
      )
      .finally(() => setSending(false));
  };

  const field = "flex flex-col gap-1.5 text-[0.95rem] font-bold text-ink dark:text-slate-200";

  return (
    <form className={`flex flex-col gap-4 ${className}`} onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={field} htmlFor="bf-name">
          {t("Your Name")}
          <input id="bf-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t("Your Name")} className="input font-normal" required />
        </label>
        <label className={field} htmlFor="bf-mob">
          {t("Phone Number")}
          <input id="bf-mob" type="tel" name="mob" value={formData.mob} onChange={handleChange} placeholder={t("Phone Number")} className="input font-normal" required />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={field} htmlFor="bf-email">
          {t("Your Email")}
          <input id="bf-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t("Your Email")} className="input font-normal" required />
        </label>
        <label className={field} htmlFor="bf-subject">
          {t("Subject")}
          <input id="bf-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={t("Subject")} className="input font-normal" required />
        </label>
      </div>
      <label className={field} htmlFor="bf-message">
        {t("Your Message")}
        <textarea
          id="bf-message"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("Your Message")}
          className="input resize-none font-normal"
          required
        ></textarea>
      </label>
      <button type="submit" disabled={sending} className="btn-primary w-full !py-4 !text-lg">
        {sending ? t("Sending…") : t("Send Message")}
        <HiOutlinePaperAirplane className="text-lg" />
      </button>
    </form>
  );
};

export default BookingForm;
