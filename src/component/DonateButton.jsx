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

    // Keep the hidden Razorpay link out of the keyboard tab order.
    const observer = new MutationObserver(() => {
      form.querySelectorAll("a, button").forEach((el) => el.setAttribute("tabindex", "-1"));
    });
    observer.observe(form, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (form.contains(script)) form.removeChild(script);
    };
  }, []);

  return (
    // Razorpay's own button is kept mounted (it powers the checkout modal) but visually hidden;
    // branded Donate buttons in the header, top bar and mobile action bar trigger it via openDonation().
    <div aria-hidden="true" className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0">
      <form id="razorpay-donation-form" tabIndex={-1}></form>
    </div>
  );
};

export default DonateButton;
