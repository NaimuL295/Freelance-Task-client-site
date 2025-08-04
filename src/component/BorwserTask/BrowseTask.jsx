
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import Spinner from '../Spinner/Spinner';
const BrowseTask = () => {

const data=useLoaderData()

if( data ==0 || data.length ===0){
return <>
 <div>
  <Spinner></Spinner>
 </div>
</>
}
    return (
 <div>
<div className="lg:p-8 lg:w-9/12 mx-auto">
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
        <tr key={task?._id} className="border-t border-t-gray-200 " >
      
          <td className="px-4 py-2">{task?.title}</td>
          <td className="px-4 py-2">{task?.message?.slice(0, 40) || 'No message'}</td>
          <td className="px-4 py-2">{task?.category}</td>
          <td className="px-4 py-2">
            <Link
              to={`/task/${task?._id}`}
              className="  text-sm font-medium hover:underline">
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
