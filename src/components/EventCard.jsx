/* eslint-disable react/prop-types */
const EventCard = ({ event }) => {
  const { date, year, title, location, description, image } = event;
  return (
    <div className="flex events items-center justify-between bg-white  rounded-lg p-6 mb-8">
      <div className="flex flex-col w-1/3">
        <span className="text-xl font-bold text-gray-800">{date}</span>
        <span className="text-sm text-gray-500">{year}</span>
        <h3 className="text-2xl font-semibold text-gray-900 mt-2">{title}</h3>
        <span className="text-sm text-gray-600">{location}</span>
        <p className="text-sm text-gray-600 mt-4">{description}</p>
      </div>
      <div className="w-1/3">
        <img src={image} alt={title} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default EventCard;
