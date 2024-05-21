const TechCard = ({ heading, cards }) => {
  return (
    <div className="border border-n-1/15 rounded-lg p-4 relative">
      <div className="blur-bg absolute inset-0 rounded-lg"></div>
      <div className="flex justify-center lg:justify-start mb-2">
        <h6 className="text-lg md:text-xl lg:text-2xl overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full">
          {heading}
        </h6>
      </div>
      <hr className="mb-4 border-n-1/15" />
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {card.buttons.map((button, btnIndex) => (
              <a
                key={btnIndex}
                className={`bg-transparent border border-${button.color}-500 text-${button.color}-500 px-4 py-2 rounded-md hover:text-white transition-colors duration-300`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechCard;
