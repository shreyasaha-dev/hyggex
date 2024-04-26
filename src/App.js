import { useState } from "react";
import NavBar from "./Components/NavBar";
import Questions from "./Components/Questions";

const App = () => {
  const gameOption = ["Study", "Quiz", "Test", "Game", "Others"];
  const [faq, setFaq] = useState([
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet velit blandit, venenatis augue in, vestibulum nisl. Phasellus laoreet ligula non justo laoreet, sit amet pulvinar nunc luctus. Pellentesque fermentum erat libero, a iaculis augue vulputate non. Vestibulum facilisis sed erat ac suscipit. Sed accumsan felis nibh, eu mollis nisi dignissim eget. Pellentesque ut est eget massa posuere hendrerit sit amet nec ex. Sed dictum nibh at orci pretium ornare. Quisque odio ligula, hendrerit mollis posuere eget, interdum vel velit.",
      isOpen: false,
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet velit blandit, venenatis augue in, vestibulum nisl. Phasellus laoreet ligula non justo laoreet, sit amet pulvinar nunc luctus. Pellentesque fermentum erat libero, a iaculis augue vulputate non. Vestibulum facilisis sed erat ac suscipit. Sed accumsan felis nibh, eu mollis nisi dignissim eget. Pellentesque ut est eget massa posuere hendrerit sit amet nec ex. Sed dictum nibh at orci pretium ornare. Quisque odio ligula, hendrerit mollis posuere eget, interdum vel velit.",
      isOpen: false,
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet velit blandit, venenatis augue in, vestibulum nisl. Phasellus laoreet ligula non justo laoreet, sit amet pulvinar nunc luctus. Pellentesque fermentum erat libero, a iaculis augue vulputate non. Vestibulum facilisis sed erat ac suscipit. Sed accumsan felis nibh, eu mollis nisi dignissim eget. Pellentesque ut est eget massa posuere hendrerit sit amet nec ex. Sed dictum nibh at orci pretium ornare. Quisque odio ligula, hendrerit mollis posuere eget, interdum vel velit.",
      isOpen: false,
    },
  ]);
  const [selectedOption, setSelectedOption] = useState("Study");
  const openAnswer = (i) => {
    setFaq(
      faq.map((item, index) => {
        if (index === i) {
          item.isOpen = !item.isOpen;
          return item;
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className="px-20 md:px-10 sm:px-7 xs:px-3">
      <NavBar />
      <div className="flex justify-start items-center mt-7 mb-12 sm:mt-3 sm:mb-8 xs:flex-wrap">
        <img
          src={require("./Images/home.png")}
          alt="home"
          className="w-5 mr-2 cursor-pointer"
        />
        <img
          src={require("./Images/sidearrow.png")}
          alt="arrow"
          className="mr-2 w-2"
        />
        <p className="mr-2 text-gray-500 font-medium cursor-pointer">
          Flashcard
        </p>
        <img
          src={require("./Images/sidearrow.png")}
          alt="arrow"
          className="mr-2 w-2"
        />
        <p className="mr-2  text-gray-500 font-medium cursor-pointer">
          Mathematics
        </p>
        <img
          src={require("./Images/sidearrow.png")}
          alt="arrow"
          className="mr-2 w-2"
        />
        <p className=" text-blue-800 font-bold">Relation and Function</p>
      </div>
      <div className="mb-14 sm:mb-12">
        <h2 className="text-2xl font-bold mb-9 bg-gradient-to-b from-blue-900 to-blue-800 bg-clip-text text-transparent">
          Relations and Functions ( Mathematics )
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-start items-center w-2/4 md:w-3/4 sm:w-full">
            <div className="flex justify-center items-center mb-6">
              {gameOption.map((item, i) => {
                return (
                  <a
                    key={i}
                    href=""
                    className={`mx-4 pb-1 px-2 text-gray-500 font-medium hover:text-blue-900 ${
                      item === selectedOption &&
                      "font-bold text-blue-900 border-b-2 border-blue-900"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedOption(item);
                    }}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="w-5/6 mb-7 bg-gradient-to-b from-blue-900 to-blue-500 rounded-3xl h-72 px-8 py-8">
              <div className="flex justify-between items-center mb-20">
                <img
                  src={require("./Images/bulb.png")}
                  alt="bulb"
                  className="w-4 cursor-pointer"
                />
                <img
                  src={require("./Images/audio.png")}
                  alt="audio"
                  className="w-5 cursor-pointer"
                />
              </div>
              <h2 className="text-center text-2xl font-bold text-white">
                9 + 6 + 7x - 2x - 3
              </h2>
            </div>
            <div className="flex justify-around items-center w-4/5">
              <img
                src={require("./Images/refresh.png")}
                alt="refresh"
                className="w-5 cursor-pointer"
              />
              <div className="flex justify-around items-center w-48">
                <img
                  src={require("./Images/leftarrow.png")}
                  alt="left-arrow"
                  className="w-9 cursor-pointer"
                />
                <p className="font-bold  text-blue-900">01/10</p>
                <img
                  src={require("./Images/rightarrow.png")}
                  alt="right-arrow"
                  className="w-9 cursor-pointer"
                />
              </div>
              <img
                src={require("./Images/zoom.png")}
                alt="zoom"
                className="w-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-20 md:mb-14 sm:mb-12">
        <img
          src={require("./Images/hyggexlogo.png")}
          alt="logo"
          className="w-48"
        />
        <img
          src={require("./Images/plus.png")}
          alt=""
          className="w-52 cursor-pointer"
        />
      </div>
      <div className="mb-48 sm:mb-36">
        <h1 className="text-4xl font-bold bg-gradient-to-b from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8 sm:text-3xl">
          FAQ
        </h1>
        <div className="">
          {faq.map((item, i) => {
            return (
              <Questions
                question={item.question}
                answer={item.answer}
                isOpen={item.isOpen}
                openAnswer={() => {
                  openAnswer(i);
                }}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
