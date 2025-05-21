const skills = [
  { name: "Web Development", count: 42 },
  { name: "Graphic Design", count: 30 },
  { name: "Content Writing", count: 27 },
  { name: "SEO IT", count: 18 },
  { name: "Video Editing", count: 12 },
  { name: "Data Entry", count: 10 },
];

<div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">🔥 Top Skills in Demand</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
      >
        <h3 className="font-semibold text-lg text-gray-800">{skill.name}</h3>
        <p className="text-sm text-gray-500">{skill.count} tasks available</p>
      </div>
    ))}
  </div>
</div>
