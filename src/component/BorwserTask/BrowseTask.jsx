import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
const BrowseTask = () => {

const data=useLoaderData()
console.log(data);
 
    return (
   
 <div>
<div className="p-8 w-10/12 mx-auto">
  <table className="table-auto w-full text-left border border-gray-200 shadow-md rounded-xl overflow-hidden">
    <thead className="bg-gray-100 text-gray-700 font-semibold">
      <tr>
        <th className="px-4 py-2">Title</th>
        <th className="px-4 py-2">Message</th>
        <th className="px-4 py-2">Category</th>
        <th className="px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((task) => (
        <tr key={task._id} className="border-t border-t-gray-200 " >
      
          <td className="px-4 py-2">{task.title}</td>
          <td className="px-4 py-2">{task.message?.slice(0, 40) || 'No message'}</td>
          <td className="px-4 py-2">{task.category}</td>
          <td className="px-4 py-2">
            <Link
              to={`/task/${task._id}`}
              className="text-green-500 text-sm font-medium hover:underline"
            >
              See Details
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



    </div>

  

 





   




    );
};

export default BrowseTask;
