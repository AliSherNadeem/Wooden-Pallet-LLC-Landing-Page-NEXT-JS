import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="py-4 bg-white m-8 rounded-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <Image
            src="/images/about-us.jpg"
            alt="About Us"
            width={540}
            height={400}
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
        {/* Right Side: Information */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We deal in buying & selling of wooden pallets, boxes, and crates.
            Dealers of all kinds of wooden items and suppliers of standard
            pallets, euro pallets, wooden boxes, old refurbished pallets, and
            new pallets. We are based in Sharjah, UAE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
