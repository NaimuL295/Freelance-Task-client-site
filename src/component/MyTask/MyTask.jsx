import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2'
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
const MyTask = () => {
  const {user}=use(AuthContext)
  const [newUser,setUser]=useState([])
useEffect(() => {
  if (!user?.email) return; 

  fetch(`http://localhost:3000/tasks?emailParams=${user.email}`)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      setUser(data);
    })
    .catch((err) => {
      console.error("Error fetching user tasks:", err);
    });
}, [user?.email]);
console.log(newUser._id);


    const handleDelete=(id)=>{

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  fetch(`http://localhost:3000/tasks/${id}`,{
 method:'DELETE',
 headers: {
        'Content-Type': 'application/json'
      }
 }).then((result)=>result.json()).
        then(data=>{
         
            console.log(data);
const remaining=newUser.filter(use=> use._id!==id);
setUser(remaining)
console.log(id);

             })
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

    }
    return (

  <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">My Posted </h2>
      <table className="w-full table-auto border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Category</th>
            <th className="p-2">Budget</th>
            <th className="p-2">Deadline</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {newUser.map(newUser => (
            <tr key={newUser._id} className="border-b">
              <td className="p-2">{newUser.title}</td>
              <td className="p-2">{newUser.category}</td>
              <td className="p-2">${newUser.budget}</td>
              <td className="p-2">{newUser.day}</td>
              <td className="p-2">{newUser.email}</td>
              <td className="p-2 space-x-2">
                <Link to={`/update/${newUser._id}`}>   
                <button
             
                  className="btn"
                >
                  Update

<FaUserEdit></FaUserEdit>


                </button> </Link>
                <button 
                  onClick={() => handleDelete(newUser._id)}
                  className="btn text-red-500"
                >
               <RiDeleteBin2Line size={24} /> 
                </button>
                <button
                  // onClick={() => handleViewBids(newUser._id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Bids
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    );
};

export default MyTask;