import ProductCard from "./ProductCard";

function PropsApp() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <div className="flex flex-wrap justify-center gap-6">
        <ProductCard name="Laptop" price={700} brand="Dell" />
        <ProductCard name="Phone" price={400} brand="Samsung" />
        <ProductCard name="Headphones" price={80} brand="Sony" />
      </div>
    </div>
  );
}

export default PropsApp;