
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from 'react-router';



const MYPostUpdate = () => {
const data=useLoaderData();

  const navigate=useNavigate()
    const [startDate, setStartDate] = useState(new Date());
      const handlerUpdate=(e)=>{
       e.preventDefault();
 e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const  formDataObj= Object.fromEntries(formData.entries());
 const day= startDate.toISOString().split('T')[0]
 const userData={...formDataObj,day}
//console.log('Updated formObject:', userData);

fetch(`https://assignment-10-server-side-beta-three.vercel.app/tasks/${data._id}`,{
   method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData) 
}).then((result) =>result.json()).then(() => {
navigate("/myTask")
 // console.log(data);
  
})

      }

    return (
        <div>
   
           <div className="max-w-xl mx-auto  p-6 rounded-2xl shadow-md">
             <h2 className="text-2xl font-bold mb-4 text-center">My   Task Update</h2>
             <form onSubmit={handlerUpdate}   className="space-y-4">
               <div>
       
         <div>
             <label className="block font-medium mb-1">Task Title</label>
             <input
                     defaultValue={data.title}
               name="title"
               type="text"
               required
              
               className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:black"
               placeholder="Enter task title"
             />
           </div>
       
                 <label className="block   font-medium mb-1">Category</label>
         <select defaultValue={data.category}>
  <option  className='dark:text-gray-800' value="">Select a category</option>
  <option className='dark:text-gray-800' value="web">Web Development</option>
  <option  className='dark:text-gray-800' value="design">Design</option>
  <option  className='dark:text-gray-800' value="writing">Writing</option>
  <option  className='dark:text-gray-800' value="marketing">Marketing</option>
    <option    className='dark:text-gray-800'   value="Data Entry">Data Entry</option>
</select>


               </div>
              
               <div>
                 <label htmlFor=''   className="block font-medium mb-1">Description</label>
                 <textarea
                   rows="4" name='message' defaultValue={data.message}   required
                   className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:black"
                   placeholder="What needs to be done?"
                 ></textarea>
               </div>
       
              
               <div>
                 <label   htmlFor='' className="block font-medium mb-1">Deadline</label>
                 {/* <input
                   type="date"
                   className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 /> */}
                 <DatePicker selected={startDate}  defaultValue={data?.day}  onChange={(date) => setStartDate(date)} />
               </div>
       
            
               <div>
                 <label htmlFor=''    className="block font-medium mb-1">Budget</label>
                 <input
                   type="number"
                   name='budget'
                   className="w-full  focus:outline-none focus:ring-2 focus:black"
                   placeholder="Enter your budget" required
                defaultValue={data.budget}  />
               </div>
       
               {/* Read-only fields */}
               <div>
                 <label  htmlFor=' ' className="block font-medium mb-1">User Name</label>
                 <input
                 name='name'
                 type="text"
                defaultValue={data?.name}
                   readOnly
                   className="w-full  border rounded-lg p-2 text-gray-700"
                 />
               </div>
               <div>
                 <label className="block font-medium mb-1">User Email</label>
                 <input
                   type="email"
                  defaultValue={data?.email}
                  name='email'
                   readOnly
                   className="w-full  border rounded-lg p-2 text-gray-700"
                 />
               </div>
       
               {/* Submit Button */}
               <button
                 type="submit"
                 className="w-full bg-gray-800  text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition duration-200"
               >
                 Submit Task
               </button>
             </form>
           </div>
       
                     
        </div>
    );
};
export default MYPostUpdate;