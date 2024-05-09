const CardFrontside = ({ onClick }) => {
  return (
    <div
      className="w-full mb-7 bg-gradient-to-bl cursor-pointer from-blue-950 to-blue-500 rounded-3xl h-72 px-8 py-8 xs:w-full"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-20">
        <img
          src={require("../../Images/bulb.png")}
          alt="bulb"
          className="w-4 cursor-pointer"
        />
        <img
          src={require("../../Images/audio.png")}
          alt="audio"
          className="w-5 cursor-pointer"
        />
      </div>
      <h2 className="text-center text-2xl font-bold text-white">
        9 + 6 + 7x - 2x - 3
      </h2>
    </div>
  );
};
export default CardFrontside;
