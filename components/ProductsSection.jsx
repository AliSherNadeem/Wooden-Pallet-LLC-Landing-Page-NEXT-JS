// src/components/ProductsSection.js
import Card from "./Card";

const products = [
  { name: "Standard Pallets", image: "/images/standard-pallets.jpg" },
  { name: "Euro Pallets", image: "/images/euro-pallets.jpg" },
  { name: "Wooden Boxes", image: "/images/wooden-boxes.jpg" },
  { name: "Wooden Crates", image: "/images/wooden-crates.jpg" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <div key={product.name} className="w-full flex justify-center">
              <Card {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
