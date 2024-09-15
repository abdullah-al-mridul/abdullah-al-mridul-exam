import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    pass: "",
    name: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        getAuth(),
        formValues.email,
        formValues.pass
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className=" h-screen w-screen bg-white flex items-center justify-center text-blue-500">
        <div className=" flex flex-col items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5262 2.5262C0 5.05241 0 9.11827 0 17.25V28.75C0 36.8817 0 40.9476 2.5262 43.4738C5.05241 46 9.11827 46 17.25 46H28.75C36.8817 46 40.9476 46 43.4738 43.4738C46 40.9476 46 36.8817 46 28.75V17.25C46 9.11827 46 5.05241 43.4738 2.5262C40.9476 0 36.8817 0 28.75 0H17.25C9.11827 0 5.05241 0 2.5262 2.5262ZM11.4811 14.4099C9.58715 14.4099 8.05 12.8571 8.05 10.9425C8.05 9.02789 9.58715 7.475 11.4811 7.475C13.3751 7.475 14.9123 9.02789 14.9123 10.9425C14.9123 12.8571 13.3771 14.4099 11.4811 14.4099ZM8.54016 38.525V16.9024H14.4221V38.525H8.54016ZM32.068 38.525H37.95V25.2389C37.95 14.9132 26.9644 15.2886 24.2254 20.3719V16.9024H18.3434V38.525H24.2254V27.5093C24.2254 21.3901 32.068 20.8889 32.068 27.5093V38.525Z"
                fill="url(#paint0_linear_3017_641)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3017_641"
                  x1={23}
                  y1={0}
                  x2={23}
                  y2={46}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0077B5" />
                  <stop offset={1} stopColor="#0E6795" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-[#11175D] text-[34px] font-[700] mt-[42px]">
            Get started with easily register
          </h1>
          <p className="text-[#11175D] text-[20px] mt-[11px]">
            Free register and you can enjoy it
          </p>
          <form action="post">
            <div className=" relative mt-[60px]">
              <label
                className="text-[13px] text-[#11175D] top-[-7px] left-[46px] font-[600] bg-white px-[64px] absolute"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                value={formValues.email}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    email: e.target.value,
                  });
                }}
                required
                className="border-[2px] border-[#11175d5b] rounded-[10px] outline-none px-[70px] py-[26px] w-[500px] text-[20px] font-[700] text-[#11175D]"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className=" relative mt-[42px]">
              <label
                htmlFor="name"
                className="text-[13px] text-[#11175D] top-[-7px] left-[46px] font-[600] bg-white px-[64px] absolute"
              >
                Full Name
              </label>
              <input
                value={formValues.name}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    name: e.target.value,
                  });
                }}
                required
                className="border-[2px] border-[#11175d5b] rounded-[10px] outline-none px-[70px] py-[26px] w-[500px] text-[20px] font-[700] text-[#11175D]"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className=" relative mt-[42px]">
              <label
                className="text-[13px] text-[#11175D] top-[-7px] left-[46px] font-[600] bg-white px-[64px] absolute"
                htmlFor="pass"
              >
                Password
              </label>
              <input
                value={formValues.pass}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    pass: e.target.value,
                  });
                }}
                required
                className="border-[2px] border-[#11175d5b] rounded-[10px] outline-none px-[70px] py-[26px] w-[500px] text-[20px] font-[700] text-[#11175D]"
                type="password"
                name="pass"
                id="pass"
              />
            </div>
            <input
              onClick={(e) => {
                handleRegister(e);
              }}
              className=" w-full bg-[#086FA4] text-[white] mt-[50px] text-[20px] font-[600] py-[19px] rounded-[86px]"
              type="submit"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
