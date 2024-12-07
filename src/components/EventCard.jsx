/* eslint-disable react/prop-types */
const EventCard = ({ event }) => {
  const { date,  title, location, description, image } = event;
  return (
    <div className="flex flex-col md:flex-row events justify-between bg-white events   mb-8 border-purple-600 md:gap-16 shadow-lg shadow-blue-200 border-l-[7px] border-l-red-900 border-t-[2px] md:border-t-0 border-t-red-900">
      <div className="flex flex-col md:w-1/3 p-2 md:p-6">
        <span className="text-2xl lg:text-4xl xl:text-5xl font-bold ">{date}</span>
        
        <h3 className="text-lg lg:text-3xl font-semibold  mt-2">{title}</h3>
        <span className="text-xl font-medium ">{location}</span>
        <p className="text-sm lg:text-lg  mt-2 md:mt-4">{description}</p>
      </div>
      <div className="md:w-2/3 ">
        <img  src={image} alt={title} className="w-full h-48 md:h-96 " />
      </div>
    </div>
  );
};

export default EventCard;
