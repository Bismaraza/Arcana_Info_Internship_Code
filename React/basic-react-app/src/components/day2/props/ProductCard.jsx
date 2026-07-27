// function ProductCard(props) {
//   return (
//     <div className="bg-white w-80 p-6 rounded-xl shadow-lg text-center border border-blue-200">
//       <h2 className="text-2xl font-bold text-blue-600">{props.name}</h2>
//       <p className="text-gray-700 mt-3">Price: ${props.price}</p>
//       <p className="text-gray-700 mt-2">Brand: {props.brand}</p>
//     </div>
//   );
// }

// export default ProductCard;

// With Destructing

function ProductCard({ name, price, brand }) {
  return (
    <div className="bg-white w-80 p-6 rounded-xl shadow-lg text-center border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>

      <p className="text-gray-700 mt-3">
      ${price}
      </p>

      <p className="text-gray-700 mt-2">
        {brand}
      </p>
    </div>
  );
}

export default ProductCard;