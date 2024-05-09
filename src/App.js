import { useState } from "react";
import NavBar from "./Components/NavBar";
import Questions from "./Components/Questions";
import CardFrontside from "./Components/CardFrontSide/index.jsx";
import CardBackSide from "./Components/CardBackSide";
import ReactCardFlip from "react-card-flip";
const App = () => {
  const gameOption = ["Study", "Quiz", "Test", "Game", "Others"];
  const [isFlipped, setIsFlipped] = useState(false);
  const [faq, setFaq] = useState([
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students and even for college-level and adult learners. ",
      isOpen: false,
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.",
      isOpen: false,
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts,terms and facts.They provide a quick and focused way to reinforce knowledge before exams.",
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
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="px-20 md:px-10 sm:px-7 xs:px-3">
      <NavBar />
      <div className="flex justify-start items-center mt-7 mb-12 sm:mt-3 sm:mb-8 xs:flex-wrap xs:text-lg">
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
      <div className="mb-14 sm:mb-12 xs:mb-8">
        <h2 className="text-2xl font-bold mb-9 bg-gradient-to-b from-blue-900 to-blue-800 bg-clip-text text-transparent">
          Relations and Functions ( Mathematics )
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-start items-center w-2/5 lg:w-2/4 md:w-3/4 sm:w-full">
            <div className="flex justify-center items-center mb-6">
              {gameOption.map((item, i) => {
                return (
                  <a
                    key={i}
                    href="*"
                    className={`mx-4 pb-1 px-2 text-gray-500 font-medium hover:text-blue-900 xs:mx-1 ${
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

            <ReactCardFlip
              isFlipped={isFlipped}
              flipDirection="horizontal"
              containerClassName="w-full"
            >
              <CardFrontside onClick={handleFlip} />
              <CardBackSide onClick={handleFlip} />
            </ReactCardFlip>
            <div className="flex justify-around items-center w-4/5 xs:w-full">
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
      <div className="flex justify-between items-center mb-20 md:mb-14 sm:mb-12 xs:flex-col xs:items-start">
        <img
          src={require("./Images/hyggexlogo.png")}
          alt="logo"
          className="w-48 xs:w-40"
        />
        <img
          src={require("./Images/plus.png")}
          alt=""
          className="w-52 cursor-pointer xs:ml-6"
        />
      </div>
      <div className="mb-48 sm:mb-36 xs:mb-20">
        <h1 className="text-4xl font-bold bg-gradient-to-b from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8 sm:text-3xl xs:mb-4 xs:text-2xl">
          FAQ
        </h1>
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
  );
};
export default App;
