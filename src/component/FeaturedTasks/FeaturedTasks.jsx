import React, { useEffect, useState } from 'react';

const FeaturedTasks = () => {
     const [tasks, setTasks] = useState([]);
      useEffect(() => {
    fetch('https://assignment-10-server-side-blond.vercel.app/featured-tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">📌 Featured Tasks (Deadline Priority)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tasks.map(task => (
          <div key={task._id} className="bg-white p-5 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800 ">{task.title}</h3>
            <p className="text-gray-600">🗂 Category: {task.category}</p>
            <p className="text-gray-600">💰 Budget: ${task.budget}</p>
            <p className="text-gray-600">📅 Deadline: {task.day}</p>
            <p className="text-gray-600">👤 Posted by: {task.name}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
      
};

export default FeaturedTasks;

 

 

