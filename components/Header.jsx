// src/components/Header.js

const Header = () => {
  return (
    <header className="bg-amber-900 text-amber-50 py-2">
      <div className="container text-sm mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Email Section */}
        <span className="mb-1 md:mb-0">
          Email:{" "}
          <a href="mailto:Abdulraheemdiwaya.609@gmail.com">{`Abdulraheemdiwaya.609@gmail.com`}</a>
        </span>
        {/* Phone Section */}
        <div className="flex flex-col md:flex-row md:items-center">
          <span className="mb-1 md:mb-0">
            Phone:
            <a href="tel:+971555503600" className=" ml-1">
              +971-55-5503600
            </a>
          </span>
          <span className="md:ml-2">
            <a href="tel:+971503590816">+971-50-3590816</a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
