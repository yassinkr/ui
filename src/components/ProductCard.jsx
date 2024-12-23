"use client";
import Image from "next/image"; // Importing Next.js Image component for optimized images
import Link from "next/link"; // Importing Link component for client-side navigation
const ProductCard = ({ project, updateCart }) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = existingCart.findIndex((item) => item._id === project._id);

    if (itemIndex >= 0) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...project, quantity: 1 });
    }

    updateCart(existingCart);
  };

  return (
    <div className="bg-bg-light shadow-md rounded-lg overflow-hidden hover:bg-card-hover hover:shadow-lg transition-shadow duration-300">
      <Image
        width={300}
        height={300}
        src={project.mainImage}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-text-dark mb-3">{project.name}</h3>
        <p className="text-card-color mb-4 line-clamp-2">{project.description}</p>
        <div className="flex items-center gap-4 justify-center">
          <Link
            href={`/produits/${project._id}`}
            className="inline-block bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full hover:bg-hover-yellow transition-colors"
          >
            View Product
          </Link>
          <button
            onClick={addToCart}
            className="inline-block bg-orange-500 text-white font-bold px-4 py-2 rounded-full hover:bg-hover-yellow transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
