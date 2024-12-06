/* eslint-disable react/prop-types */
const EventCard = ({ event }) => {
  const { date,  title, location, description, image } = event;
  return (
    <div className="flex events justify-between bg-white events   mb-8 border-purple-600 gap-16 shadow-lg shadow-blue-200 border-l-[7px] border-l-red-900">
      <div className="flex flex-col w-1/3 p-6">
        <span className="text-5xl font-bold ">{date}</span>
        
        <h3 className="text-3xl font-semibold  mt-2">{title}</h3>
        <span className="text-xl font-medium ">{location}</span>
        <p className="text-lg  mt-4">{description}</p>
      </div>
      <div className="w-2/3 ">
        <img  src={image} alt={title} className="w-full h-96 " />
      </div>
    </div>
  );
};

export default EventCard;
