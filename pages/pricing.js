import initStripe from "stripe";

const Pricing = ({ plans }) => {
  console.log(plans)
  return (
    <div className="w-full max-w-3xl mx-auto py-16 flex justify-around">
      
      {plans.map((plan) => (
        <div key={plan.id} className="w-80 h-40 rounded shadow px-6 py-4">
          <h2 className="text-xl">{plan.name}</h2>
          <p className="text-gray-500">
            ${plan.price / 100} / {plan.interval}
          </p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
//   const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

//   const { data: prices } = await stripe.prices.list();

  const  PRICES_MOCK  = [
    {
      id: "price_1KlCoXFtWLQllTObHdl4c3YR",
      "Product ID": "prod_LS72ZkqG4qnwG5",
      name: "Pro Plan",
      "Product Statement Descriptor": "",
      "Product Tax Code": "txcd_10000000",
      "Description": "",
      "Created (UTC)": "2022-04-05 13:52",
      price: 20000,
      "Currency": "usd",
      interval: "year",
      "Interval Count": 1,
      "Usage Type": "licensed",
      "Aggregate Usage": "",
      "Billing Scheme": "per_unit",
      "Trial Period Days": "",
      "Tax Behavior": "exclusive"
    },
    {
      id: "price_1KlCnXFtWLQllTObSSvtvfF4",
      "Product ID": "prod_LS71RhHrBi95Yj",
      name: "Basic Plan",
      "Product Statement Descriptor": "",
      "Product Tax Code": "txcd_10000000",
      "Description": "",
      "Created (UTC)": "2022-04-05 13:51",
      price: 2000,
      "Currency": "usd",
      interval: "month",
      "Interval Count": 1,
      "Usage Type": "licensed",
      "Aggregate Usage": "",
      "Billing Scheme": "per_unit",
      "Trial Period Days": "",
      "Tax Behavior": "exclusive"
    }
  ]
  const plans = { data: PRICES_MOCK } 
//   const plans = await Promise.all(
//     prices.map(async (price) => {
//       const product = await stripe.products.retrieve(price.product);
//       return {
//         id: price.id,
//         name: product.name,
//         price: price.unit_amount,
//         interval: price.recurring.interval,
//         currency: price.currency,
//       };
//     })
//   );

//   const sortedPlans = plans.sort((a, b) => a.price - b.price);

  return {
    props: {
      plans: PRICES_MOCK,
    },
  };
};

export default Pricing;
