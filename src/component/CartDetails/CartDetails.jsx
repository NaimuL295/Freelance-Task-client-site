import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";

const CartDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [bidsCount, setBidsCount] = useState(data.bidsCount || 0);
 const [isBidding, setIsBidding] = useState(false);

  const handleBid = () => {
    const updatedCount = bidsCount + 1;
    setBidsCount(updatedCount);
    setIsBidding(true);

    fetch(`https://assignment-10-server-side-blond.vercel.app/tasks/${data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bidsCount:updatedCount })
    })
      .then(res => res.json())
      .then(() => {
        setIsBidding(false);
      
      })
  };
  return (
    <div className="p-8 w-10/12 mx-auto">
      <button
        className="flex items-center btn bg-green-500 text-white mb-4"
        onClick={() => navigate("/")}
      >
        <IoMdArrowBack size={23} />
        <span className="ml-2">Back Home</span>
      </button>
      <h2 className="text-xl font-semibold mb-4 ">
        You bid for {bidsCount} {bidsCount === 1 ? "opportunity" : "opportunities"}.
      </h2>
      <button
        onClick={handleBid}
        disabled={isBidding}
        className={`mb-6 px-4 py-2 rounded text-white ${isBidding ? 'bg-gray-400' : 'bg-green-500'}`}
      >
        {isBidding ? "Bidding..." : "Bids"}
      </button>
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">
        {data.title}
      </h2>
      <div className="space-y-2 text-gray-700">
        <div><span className="font-semibold">Category:</span> {data.category}</div>
        <div><span className="font-semibold">Message:</span> {data.message}</div>
        <div><span className="font-semibold">Budget:</span> ${data.budget}</div>
        <div><span className="font-semibold">Deadline:</span> {data.day}</div>
        <div><span className="font-semibold">Posted by:</span> {data.name} </div>
      </div>
    </div>
  );
};
export default CartDetails;
