import React from 'react';

const MyCourses = () => {
  const enrolled = [
    { id: 1, title: 'React - The Complete Guide', progress: '80%' },
    { id: 2, title: 'Node.js API Development', progress: '45%' },
  ];

  return (
    <div className="min-h-screen p-4 bg-base-200">
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-2xl font-bold mb-4">My Courses</h1>

        <div className="grid gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Enrolled Courses</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Progress</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {enrolled.map((c) => (
                    <tr key={c.id}>
                      <td>{c.title}</td>
                      <td>
                        <progress className="progress progress-primary" value={parseInt(c.progress)} max="100"></progress>
                      </td>
                      <th>
                        <button className="btn btn-ghost btn-xs">Continue</button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Created Courses</h2>
            <p className="text-sm text-gray-600">You haven't created any courses yet. Use "Create Course" from the dashboard to add one.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
