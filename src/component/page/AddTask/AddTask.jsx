import React, { use,} from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";


  import { ToastContainer, toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
const AddTask = () => {
   
const {user}=use(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    let bidsCount=0
      const handlerAddTask=(e)=>{
       e.preventDefault();
 e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const  formDataObj= Object.fromEntries(formData.entries());
 const day= startDate.toISOString().split('T')[0]
 const userData={...formDataObj,day,
  bidsCount}
console.log('Updated formObject:', userData);

if (!userData) {
   return toast.error("Enter Details")
}
fetch("http://localhost:3000/task",{
     method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
}).then((result) =>result.json()).then((data) => {
  console.log(data);
Swal.fire({
  title: "Add task  successfully",
  icon: "success",
  draggable: true
});

})

      }
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Post a Task</h2>
      <form onSubmit={handlerAddTask}   className="space-y-4">
        <div>

  <div>
      <label htmlFor='' className="block font-medium mb-1">Task Title</label>
      <input
        name="title"
        type="text"
        required
       
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter task title"
      />
    </div>

          <label htmlFor=''  className="block font-medium mb-1">Category</label>
         <select
  name="category" required
  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select a category </option>
  <option value="web">Web Development</option>
  <option value="design">Design</option>
  <option value="writing">Writing</option>
  <option value="marketing">Marketing</option>
</select>
        </div>
        <div>
          <label htmlFor=''  className="block font-medium mb-1">Description</label>
          <textarea
            rows="4" name='message' required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What needs to be done?"
          ></textarea>
        </div>
        <div>
          <label htmlFor=''  className="block font-medium mb-1">Deadline</label>
          {/* <input
            type="date"  
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <DatePicker selected={startDate} required  onChange={(date) => setStartDate(date)} />
        </div>

        <div>
          <label className="block font-medium mb-1">Budget</label>
          <input
            type="number"
            name='budget'
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your budget" required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">User Name</label>
          <input
          name='name'
            type="text"
         defaultValue={user?.displayName}
            readOnly
            className="w-full bg-gray-100 border rounded-lg p-2 text-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">User Email</label>
          <input
            type="email"
           defaultValue={user?.email}
           name='email'
            readOnly
            className="w-full bg-gray-100 border rounded-lg p-2 text-gray-700"
          />
          <ToastContainer></ToastContainer>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-500 transition duration-200"
        >
          Submit Task
        </button>
      </form>
    </div>

    );
};

export default AddTask;