import Image from "next/image";

const InfoSection = () => {
  const infoData = [
    {
      title: "Standard Pallets",
      description:
        "Our standard pallets are built to last, offering exceptional durability and versatility. Perfect for various industries, these pallets ensure safe and efficient storage and transportation of goods.",
      image: "/images/standard-pallets.jpg",
      imageLeft: false,
    },
    {
      title: "Euro Pallets",
      description:
        "Euro pallets are designed to meet strict European standards, providing uniformity and compatibility across the continent. Ideal for international shipping, these pallets optimize space and streamline logistics.",
      image: "/images/euro-pallets.jpg",
      imageLeft: true,
    },
    {
      title: "Wooden Boxes",
      description:
        "Our wooden boxes offer superior protection for delicate or valuable items. Customizable and sturdy, they're perfect for shipping, storage, or even as attractive display units for retail environments.",
      image: "/images/wooden-boxes.jpg",
      imageLeft: false,
    },
    {
      title: "Wooden Crates",
      description:
        "Wooden crates provide maximum protection for heavy or oversized items. Built to withstand the rigors of shipping and handling, our crates ensure your products arrive safely, no matter the destination.",
      image: "/images/wooden-crates.jpg",
      imageLeft: true,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">
        Product Information
      </h2>
      <div className="container mx-auto px-16">
        {infoData.map((item) => (
          <div
            key={item.title}
            className={`flex flex-col ${
              item.imageLeft ? "md:flex-row-reverse" : "md:flex-row"
            } items-center mb-8 rounded-lg overflow-hidden shadow-md bg-white`}
          >
            <div className="w-full md:w-2/5 p-4">
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={360} // Set a consistent height
                objectFit="cover" // Ensure images are cropped evenly
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-3/5 p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
