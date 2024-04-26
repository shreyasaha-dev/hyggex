import React from "react";

const Questions = ({ question, answer, isOpen, openAnswer }) => {
  return (
    <div className=" w-3/5 border-sky-500 border rounded-lg px-5 py-3 mb-6 md:w-4/5 sm:w-5/6">
      <div
        onClick={openAnswer}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="font-semibold">{question}</p>
        <img
          src={require("../../Images/dropdown.png")}
          alt="dropdown"
          className="w-4"
        />
      </div>
      {isOpen && <p className=" text-gray-500 font-medium mt-5">{answer}</p>}
    </div>
  );
};

export default Questions;
