import React from 'react';

const Students = () => {
  const students = [
    { id: 1, name: 'Ayesha Khan', email: 'ayesha@example.com', enrolled: 3 },
    { id: 2, name: 'Rafi Ahmed', email: 'rafi@example.com', enrolled: 1 },
  ];

  return (
    <div className="min-h-screen p-4 bg-base-200">
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-2xl font-bold mb-4">Students</h1>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Enrolled Courses</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td>{s.enrolled}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">View</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
