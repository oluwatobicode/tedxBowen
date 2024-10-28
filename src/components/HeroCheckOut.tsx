import { useState } from "react";
import { PaystackButton } from "react-paystack";

const HeroCheckOut = () => {
  const publicKey = "pk_test_43c49f8a82abaf1746dfedbdd013b3cf8bc61bda";
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState(5000);

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      firstName,
      lastName,
    },
    publicKey,
    text: "Checkout",
    onSuccess: () => alert("Thank you for paying!"),
    onClose: () => alert("Are you sure you want to close"),
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <div className="heroCheckOut bg-black h-full p-10">
      <div className=""></div>
      <div className="text-white w-[500px] bg-[#1a1a1a] rounded-[10%] border-2  h-[600px] p-5">
        <img src="/assets/logooooo.png" className="w-[150px] pl-5" alt="" />
        <h1 className="leading-[35.66px] font-normal text-[20px] pl-5">
          Register Here
        </h1>
        <p className="leading-[21px] font-light text-[15px] pl-5">
          Provide the required information and proceed to checkout.
        </p>
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <label
                className="pl-5 mb-2 leading-[24.51px] text-[16.34px] font-normal"
                htmlFor="First Name"
              >
                First Name
              </label>
              <input
                type="text"
                name=""
                id="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-[200px] h-[50px] bg-transparent rounded-full  border-[1px] pl-5 text-[#757575] leading-[24.51px] text-[16.34px] font-normal"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="pl-5 mb-2 leading-[24.51px] text-[16.34px] font-normal"
                htmlFor="Last Name"
              >
                Last Name
              </label>
              <input
                type="text"
                name="Last Name"
                id=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-[200px] h-[50px] bg-transparent rounded-full  border-[1px] pl-5 text-[#757575] leading-[24.51px] text-[16.34px] font-normal"
              />
            </div>
          </div>

          <div className="mt-5 mb-5 flex flex-col">
            <label
              className="pl-5 mb-2 leading-[24.51px] text-[16.34px] font-normal"
              htmlFor="email"
            >
              Personal Email Address
            </label>
            <input
              type="email"
              name="email"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Personal Email Address"
              className="w-full h-[50px] bg-transparent rounded-full  border-[1px] pl-5 text-[#757575] leading-[24.51px] text-[16.34px] font-normal"
            />
          </div>

          <div className="">
            <label
              className="pl-5 leading-[24.51px] text-[16.34px] font-normal"
              htmlFor="Ticket Price"
            >
              Ticket Price
            </label>
            <input
              type="number"
              name="Ticket Price"
              id=""
              defaultValue={5000}
              disabled
              className="w-full mt-2 h-[50px] bg-transparent rounded-full  border-[1px] cursor-not-allowed pl-5 text-[#757575] leading-[24.51px] text-[16.34px] font-normal"
            />
          </div>

          <div className="mt-5 mb-5">
            <PaystackButton
              {...componentProps}
              className="bg-[#757575] w-full h-[50px] rounded-full border-[1px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroCheckOut;
