// src/components/Card.js
import Image from "next/image";

const Card = ({ name, image }) => (
  <div className=" rounded-lg shadow-lg overflow-hidden w-full max-w-sm transform hover:scale-105 duration-200">
    <div className="relative h-56 w-full">
      <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-amber-900 text-center ">{name}</h3>
    </div>
  </div>
);

export default Card;
