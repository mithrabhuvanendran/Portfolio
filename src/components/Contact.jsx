import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-linear-to-b from-black to-gray-800 w-full text-white md:h-screen p-4!"
    >
      <div className="max-w-screen-lg p-4! mx-auto! flex flex-col justify-center w-full h-full">
        <div className="pb-8!">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6!">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="1bdb7c93-81c1-446f-a52b-732b8373f78c"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2! bg-bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="email"
              name="name"
              placeholder="Enter your email"
              className="p-2! my-4! bg-bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              rows={10}
              className="p-2! bg-bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-linear-to-b from-cyan-500 to-blue-500 px-6! py-3! my-8! mx-auto! flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
