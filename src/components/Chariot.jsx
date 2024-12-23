"use client";
import React from 'react';

const Cart = ({ cart, updateCart }) => {
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove items with 0 quantity
    updateCart(updatedCart);
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    updateCart(updatedCart);
  };

  return (
    <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-xs overflow-auto">
      <h3 className="text-xl font-bold mb-4">Cart</h3>
      {cart.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <table className="w-full text-sm text-left">
          <thead>
            <tr className=''>
              <th className="border-b pb-2">Name</th>
              <th className="border-b pb-2">Quantity</th>
              <th className="border-b pb-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>

                <td className="py-2">{item.name}</td>
                <td className="py-2 flex justify-center items-center">
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded-md mx-1"
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md mx-1"
                  >
                    -
                  </button>
                 
                </td>
                <td> <button
                    onClick={() => deleteItem(item._id)}
                    className="bg-gray-500 text-white px-2 py-1 rounded-md mx-1"
                  >
                    Delete
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
