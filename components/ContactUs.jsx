import Image from "next/image";

const ContactUs = () => {
  return (
    <section id="contact" className="py-8 bg-white m-8 rounded-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to us for any inquiries regarding wooden
            pallets, boxes, crates, or other wooden items.
          </p>
          <ul className="text-gray-700">
            <li className="mb-2">
              <strong>Email: </strong>
              <a
                href="mailto:Abdulraheemdiwaya.609@gmail.com"
                className="text-amber-800 hover:underline"
              >
                Abdulraheemdiwaya.609@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <strong>Phone: </strong>+971-55-5503600, +971-50-3590816
            </li>
            <li className="mb-2">
              <strong>Location: </strong>Sharjah, UAE
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 p-6">
          {" "}
          <div className="h-full w-full rounded-lg overflow-hidden">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.734315963261!2d55.41331037573802!3d25.35714828191478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f74db133e187%3A0x5082c7e6c3c5ffbb!2sSharjah%2C%20UAE!5e0!3m2!1sen!2s!4v1632988234687!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
