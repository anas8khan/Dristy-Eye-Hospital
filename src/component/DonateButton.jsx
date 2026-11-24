import React, { useEffect } from "react";

const DonateButton = () => {
  useEffect(() => {
    const form = document.getElementById("razorpay-donation-form");
    if (!form) return;

    const existingScript = document.querySelector('script[data-payment_button_id="pl_Qs6afCMOpSGgFo"]');
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_Qs6afCMOpSGgFo");
    script.async = true;
    script.onerror = () => console.error("Failed to load Razorpay script.");
    form.appendChild(script);

    return () => {
      if (form.contains(script)) form.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <form
        id="razorpay-donation-form"
        className="rounded-xl bg-white/90 p-1 shadow-lift backdrop-blur dark:bg-slate-900/90"
      ></form>
    </div>
  );
};

export default DonateButton;
