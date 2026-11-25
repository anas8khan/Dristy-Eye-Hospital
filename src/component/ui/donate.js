// Opens the Razorpay donation flow from any custom "Donate" button.
// The Razorpay payment-button script (mounted once by DonateButton) renders a hidden link whose
// click handler opens Razorpay's checkout modal; if that script is blocked or not loaded yet,
// fall back to the hosted Razorpay donation page.
export const DONATE_URL = "https://razorpay.com/payment-button/pl_Qs6afCMOpSGgFo/view";

export const openDonation = () => {
  const link = document.querySelector("#razorpay-donation-form a.PaymentButton");
  if (link) {
    link.click();
  } else {
    window.open(DONATE_URL, "_blank", "noopener,noreferrer");
  }
};
