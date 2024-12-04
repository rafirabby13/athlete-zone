/* eslint-disable react/prop-types */

const FeedbackCard = ({ feedback }) => {
  const { name, role, testimonial, image } = feedback;
//   console.log(feedback);
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="flex justify-center">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="mt-2 text-gray-700">{testimonial}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
