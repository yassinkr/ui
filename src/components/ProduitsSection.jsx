"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Chariot';

const ProduitsSection = ({ Produits }) => {
  const [cart, setCart] = useState([]);

  // Sync the cart state with localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Update cart in both state and localStorage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <section className="bg-bg-light py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-text-dark">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Produits.map((Produit) => (
            <ProductCard key={Produit._id} project={Produit} updateCart={updateCart} />
          ))}
        </div>
      </div>

      {/* Floating Cart Component */}
      {cart.length > 0 && <Cart cart={cart} updateCart={updateCart} />}
    </section>
  );
};

export default ProduitsSection;
