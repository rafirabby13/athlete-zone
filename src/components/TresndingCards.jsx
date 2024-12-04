/* eslint-disable react/prop-types */
import React from 'react';

const TresndingCards = ({categoryy}) => {
    const {image, name, badge, description, category, price, discount, brand
    } = categoryy
    return (
        <div className="rounded overflow-hidden shadow-lg  m-4 bg-orange-200 p-5 flex flex-col justify-between">
      <img
        className="w-full h-64 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-4">
        {badge && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
            {badge}
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          {discount && (
            <span className="text-sm text-red-500 line-through">{discount}</span>
          )}
        </div>
        <div className="mt-2 text-gray-500">
          <span className="text-sm">Brand: {brand}</span>
          <span className="text-sm ml-4"> {category}</span>
        </div>
      </div>
    </div>
    );
};

export default TresndingCards;