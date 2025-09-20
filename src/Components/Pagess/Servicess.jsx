// Servicess.jsx
import React from "react";
import { Api } from "../Api.jsx";

export const Servicess = () => {
  return (
    <section className="min-h-screen flex flex-wrap justify-center items-center bg-gray-100 p-5">
      {Api.map((curElem) => {
        const { id, name, description, price, category, image } = curElem;
        return (
          <div
            key={id}
            className="w-72 border-2 border-black m-5 p-5 bg-white rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-gray-700">{description}</p>
            <p className="font-semibold">Price: ₹{price}</p>
            <p className="italic text-sm">Category: {category}</p>
          </div>
        );
      })}
    </section>
  );
};
