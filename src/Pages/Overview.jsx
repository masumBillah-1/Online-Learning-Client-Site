import React from 'react';

const Overview = () => {
  const overviewStats = [
    { id: 1, title: 'Total Courses', value: 24 },
    { id: 2, title: 'Active Students', value: 1280 },
    { id: 3, title: 'Monthly Revenue', value: '$2.1k' },
  ];

  return (
    <div className="min-h-screen p-4 bg-base-200">
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-2xl font-bold mb-4">Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {overviewStats.map((s) => (
            <div key={s.id} className="card bg-white p-4 shadow rounded-lg">
              <div className="text-sm text-gray-500">{s.title}</div>
              <div className="text-2xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-2">Recent Activity</h2>
          <p className="text-sm text-gray-600">No recent activity — this is a placeholder area for logs, recent enrollments, and announcements.</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
