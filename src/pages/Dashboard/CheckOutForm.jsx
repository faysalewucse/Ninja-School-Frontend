import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

export const CheckOutForm = ({ closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      closeModal();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-6">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className={`${
          !stripe && "opacity-40 cursor-not-allowed"
        } bg-green-400 font-semibold py-2 px-6 rounded-xl w-full mt-10`}
        type="submit"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
};
