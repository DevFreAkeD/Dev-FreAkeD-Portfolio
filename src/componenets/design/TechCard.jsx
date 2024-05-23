const TechCard = ({ heading, cards }) => {
  const colorClasses = {
    blue: 'border-blue-500 text-blue-500',
    green: 'border-green-500 text-green-500',
    purple: 'border-purple-500 text-purple-500',
    yellow: 'border-yellow-500 text-yellow-500',
    red: 'border-red-500 text-red-500',
    gray: 'border-gray-500 text-gray-500',
    orange: 'border-orange-500 text-orange-500',
  };
  return (
    <div className="border border-n-1/15 rounded-lg p-4 relative">
      <div className="blur-bg absolute inset-0 rounded-lg"></div>
      <div className="flex justify-center lg:justify-start mb-2">
        <h6 className="text-lg md:text-2xl lg:text-2xl sm:text-2xl  overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full">
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
                className={`bg-transparent border px-4 py-2 rounded-md hover:text-white transition-colors duration-300 ${colorClasses[button.color]}`}
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
