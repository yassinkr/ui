import React from 'react';
import Carousel from './Carousel'; // For displaying product images
 
function ProductDetails({ product }) {
  return (
    <div className="bg-bg-light text-text-dark">
      {/* Product Header */}
      <header className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center">{product.name}</h1>
        <p className="text-center text-lg mt-4">{product.description}</p>
        <p className="text-center text-xl font-semibold mt-2 text-green-600">${product.price.toFixed(2)}</p>
      </header>

      {/* Carousel for Images */}
      <section className="container mx-auto mb-12">
        <Carousel images={product.images} />
      </section>

      {/* Product Details */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-4">Product Details</h2>
        <p className="mb-6">{product.details}</p>

        {/* Product Specifications */}
        {product.specifications && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside">
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Product Features */}
        {product.features && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Add to Cart Button */}
      <section className="container mx-auto text-center mb-16">
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </section>

      {/* Related Products */}
     </div>
  );

  // Function to handle adding the product to the cart
  function handleAddToCart(product) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = existingCart.findIndex((item) => item._id === product._id);

    if (itemIndex >= 0) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Product added to cart!');
  }
}

export default ProductDetails;
