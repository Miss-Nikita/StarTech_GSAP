import React, { useState } from "react";

const NameForm = (props) => {
  const [userInput, setuserInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.setusername(userInput);

    localStorage.setItem("user",userInput)
  };

  return (
    <div className="relative h-screen w-screen bg-[#F4F9FB]  ">
        <div className="fixed h-full bg-[#C6D9E1]  w-full rounded-3xl">
        <img
          className="h-full w-full object-cover pb-3"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601b7d63c31da7e5be13f14_Frame%201815%20copy-min%20(1).webp"
          alt=""
        />
      </div>

      <div className="h-screen w-full    flex justify-center items-center p-40 ">
        <div className="relative  h-[20vw] -translate-y-8 w-[46vw] ">
          <img
            className="absolute w-full"
            src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a7e6428bb6f9b3ce05b1_Vector%209.svg"
            alt=""
          />
          <div className="relative">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className=" h-[36vh]   flex flex-col justify-center items-center">
                <h3 className=" text-white text-center  font-medium">
                  WELCOME TO THE GALACTIC PORT, CAPTAIN
                </h3>
                <input
                  value={userInput}
                  onChange={(e) => {
                    setuserInput(e.target.value);
                  }}
                  className="px-5 outline-none bg-transparent text-white placeholder:text-white border-[1px] mt-5 pb-4 text-center text-5xl w-4/6"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="absolute -bottom-12 -right-20">
                <button className=" uppercase px-8 py-3 hover:text-white hover:bg-[#0B6376] rounded-lg   bg-white font-medium">
                  START THE JOURNEY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NameForm;
