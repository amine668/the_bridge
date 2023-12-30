import React from "react";

const contact = () => {
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-stone-50">
      <div className="bg-[#FAB555] w-[75%] h-[70%] rounded-3xl flex justify-center p-16">
        <div className=" w-[40%] flex flex-col gap-10 ">
          <h1 className="text-4xl font-bold text-black text-center">
            Contact Us
          </h1>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-stone-600"> Name</h1>
              <input
                type="text"
                name="title"
                placeholder="amine raouafi"
                className="p-2 rounded-lg w-full my-2 bg-white/75"
              />
            </div>
            <div>
              <h1 className="font-bold text-stone-600">Email</h1>
              <input
                name="price"
                type="text"
                placeholder="amine.raouafi789@gmail.com"
                className="p-2 rounded-lg w-full my-2 bg-white/75"
              />
            </div>
            <div>
              <h1 className="font-bold text-stone-600">Message</h1>
              <textarea
                name="postContent"
                rows={4}
                cols={40}
                placeholder="write your message here..."
                className="w-full my-2 p-2 rounded-lg bg-white/75"
              />
            </div>
            <button className="flex justify-center">
              <div className="bg-[#AF2F64] w-fit py-2 px-8 rounded-full text-xl font-bold text-white  ">
                Send the message
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
