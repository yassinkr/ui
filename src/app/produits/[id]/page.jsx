"use client"; // Enables client-side rendering for this component in Next.js

// Importing necessary components
import Footer from "@/components/Footer"; // Footer component for the page
import Header from "@/components/Header"; // Header component for the page
import ProductDetails from "@/components/ProductDetails"; // Component for displaying detailed product information
import React, { useEffect, useState } from "react"; // React and specific hooks
import { useSelector } from "react-redux"; // Hook to access the Redux store

// Mock data for demonstration
const mockProducts = [
  {
    _id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    images: [
      "/images/headphones1.jpg",
      "/images/headphones2.jpg",
      "/images/headphones3.jpg",
    ],
    details: "These wireless headphones offer superior sound quality and comfort.",
    specifications: [
      "Battery Life: 20 hours",
      "Bluetooth 5.0",
      "Weight: 250g",
      "Color: Black",
    ],
    features: [
      "Active Noise Cancellation",
      "Wireless Charging",
      "Built-in Microphone",
    ],
  },
  {
    _id: "2",
    name: "Bluetooth Speaker",
    description: "Compact Bluetooth speaker with powerful sound.",
    price: 49.99,
    images: [
      "/images/speaker1.jpg",
      "/images/speaker2.jpg",
      "/images/speaker3.jpg",
    ],
    details: "Perfect for travel or home use with excellent audio quality.",
    specifications: [
      "Battery Life: 12 hours",
      "Bluetooth Range: 10 meters",
      "Weight: 500g",
      "Color: Blue",
    ],
    features: ["Water Resistant", "Compact Design", "Easy Pairing"],
  },
  {
    _id: "3",
    name: "Smart Watch",
    description: "Feature-packed smartwatch with fitness tracking.",
    price: 199.99,
    images: [
      "/images/watch1.jpg",
      "/images/watch2.jpg",
      "/images/watch3.jpg",
    ],
    details: "Track your health and stay connected on the go.",
    specifications: [
      "Battery Life: 7 days",
      "Water Resistance: 50m",
      "Weight: 150g",
      "Color: Black",
    ],
    features: ["Heart Rate Monitoring", "GPS Tracking", "Customizable Watch Faces"],
  },
];
function Page() {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { products } = useSelector((state) => state.products) || {};
  const effectiveProducts = products && products.length ? products : mockProducts;
 console.log("effective ",effectiveProducts)
  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/").pop();

    console.log("ID from URL:", id); // Debugging log
    console.log("Effective Products:", effectiveProducts); // Debugging log

    const foundProduct = effectiveProducts.find((product) => product._id === id);
    setProduct(foundProduct);

    const others = effectiveProducts.filter((product) => product._id !== id).slice(0, 3);
    setRelatedProducts(others);

    setLoading(false);
  }, [effectiveProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-lg font-semibold text-red-500 mt-20">Product not found</div>;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header index={3} />
        <ProductDetails product={product} relatedProducts={relatedProducts} />
      </div>
      <Footer />
    </>
  );
}

export default Page;