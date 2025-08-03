import React, { useEffect } from 'react';

const DonateButton = () => {
  useEffect(() => {
    const form = document.getElementById('razorpay-donation-form');

    if (!form) {
      console.error("Form element not found.");
      return;
    }

    const existingScript = document.querySelector('script[data-payment_button_id="pl_Qs6afCMOpSGgFo"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute('data-payment_button_id', 'pl_Qs6afCMOpSGgFo');
      script.async = true;

      script.onerror = () => {
        console.error("Failed to load Razorpay script.");
      };

      form.appendChild(script);

      return () => {
        if (form.contains(script)) {
          form.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-20 z-50 flex justify-center">
      <form id="razorpay-donation-form" className="p-1 dark:bg-black bg-gray-100 rounded-lg shadow-md"></form>
    </div>
  );
};

export default DonateButton;
