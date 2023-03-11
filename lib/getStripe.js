import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const spublishableKey= `${process.env.PUBLISHABLE_KEY}`
console.log(spublishableKey)
const getStripe = () => {

  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51MRTIGSDJDvIvMxFLT478MJpRwlB5FyBsjUCWM5O9MCwl47gaFTnRHmyIjEEqoYFbSTRmAPKPAGzk3EJBfQyE82700B2eJy5wB');
    console.log("inside getsrripe")
  }

  return stripePromise;
}

export default getStripe;