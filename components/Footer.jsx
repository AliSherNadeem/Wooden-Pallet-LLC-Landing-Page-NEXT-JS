const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Side: Company Info */}
          <div className="mb-6 md:mb-0 w-full md:w-1/2 mr-16">
            {" "}
            <h2 className="text-2xl font-bold mb-2">
              AbdulRaheem Diwaya Carpentry W.Shop LLC
            </h2>
            <p className="text-sm">
              We deal in buying & selling of wooden pallets, boxes, and crates.
              Based in Sharjah, UAE.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side: Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-8 h-8 border border-white rounded-full hover:text-amber-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-8 h-8 border border-white rounded-full hover:text-amber-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-8 h-8 border border-white rounded-full hover:text-amber-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} AbdulRaheem Diwaya Carpentry W.Shop
          LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
