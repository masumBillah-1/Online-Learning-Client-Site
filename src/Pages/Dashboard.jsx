import React, { useState, useContext } from 'react';
import { Link } from 'react-router';
import ThemeToggle from '../components/ThemeToggle';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import AddCourse from './AddCourse';

const stats = [
  { id: 1, label: 'Total Courses', value: 24 },
  { id: 2, label: 'Enrolled Students', value: 1280 },
  { id: 3, label: 'Revenue', value: '$12.4k' },
  { id: 4, label: 'Reviews', value: 842 },
];

const sampleCourses = [
  { id: 1, title: 'React - The Complete Guide', instructor: 'Masum', progress: '80%' },
  { id: 2, title: 'Node.js API Development', instructor: 'Rahim', progress: '45%' },
  { id: 3, title: 'CSS Masterclass', instructor: 'Sadia', progress: '100%' },
];

const addedCourses = [
  { id: 101, title: 'Advanced React Patterns', students: 240, status: 'Published' },
  { id: 102, title: 'Fullstack with MERN', students: 180, status: 'Draft' },
];

const Tabs = ({ theme }) => {
  const [tab, setTab] = useState('enrolled');

  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const cardBg = theme === 'light' ? 'bg-white' : 'bg-[#1e293b]';
  const progressClass = theme === 'light' ? 'progress progress-primary' : 'progress progress-info';

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab('enrolled')}
          className={`btn btn-sm ${tab === 'enrolled' ? 'btn-primary' : 'btn-ghost'}`}
        >
          My Enrolled
        </button>
        <button
          onClick={() => setTab('added')}
          className={`btn btn-sm ${tab === 'added' ? 'btn-primary' : 'btn-ghost'}`}
        >
          My Added
        </button>
      </div>

      {tab === 'enrolled' ? (
        <div className="overflow-x-auto">
          <table className={`table w-full ${textColor}`}>
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Progress</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sampleCourses.map((c) => (
                <tr key={c.id} className={cardBg}>
                  <td>{c.title}</td>
                  <td>{c.instructor}</td>
                  <td>
                    <progress className={progressClass} value={parseInt(c.progress)} max="100"></progress>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">View</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className={`table w-full ${textColor}`}>
            <thead>
              <tr>
                <th>Course</th>
                <th>Students</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {addedCourses.map((c) => (
                <tr key={c.id} className={cardBg}>
                  <td>{c.title}</td>
                  <td>{c.students}</td>
                  <td>{c.status}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const { user } = useContext(AuthContext); // AuthContext থেকে user নাও
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const bgColor = theme === 'light' ? 'bg-base-200' : 'bg-[#0f172a]';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const cardBg = theme === 'light' ? 'bg-white' : 'bg-[#1e293b]';

  return (
    <div className={`min-h-screen ${bgColor} pt-20 pb-10 ${textColor}`}>
      <title>Dashboard</title>
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className={`text-2xl md:text-3xl font-bold ${textColor}`}>Dashboard</h1>
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button className={`btn btn-ghost btn-sm ${textColor}`}>Help</button>

            {/* Create Course Button */}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => document.getElementById('create_course_modal').showModal()}
            >
              Create Course
            </button>
          </div>
        </div>

        {/* Modal */}
        {/* <dialog id="create_course_modal" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <h3 className="font-bold text-lg mb-4">Add New Course</h3>

            {/* AddCourse form component */}
            {/* <AddCourse/> */}

            {/* <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <button className="btn btn-sm">Close</button>
              </form>
            </div>
          </div>
        </dialog> */} 

          <dialog id="create_course_modal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                
              </form>

              <form className='w-10/12 mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Add New Course</h2>
                <div className='space-x-2 p-5'>

                  {/* <label className="label">Title</label>
                            <input 
                                type="text"
                                className="input" 
                                name='title'
                                placeholder="Title"
                                required
                            /> */}
                  <fieldset className="fieldset">
                   <div className='grid grid-cols-2 gap-5'>

                    <div>
                       <legend className="fieldset-legend">Courses Title</legend>
                    <input type="text" className="input w-full" placeholder="Type here" />
                   </div>




                  <div>
                    <legend className="fieldset-legend">Course Category </legend>
                  <select defaultValue="Pick a browser" className="select w-full">
                    <option disabled={true}>Select Courses</option>
                    <option>Graphic Design</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>UI/UX Design</option>
                    <option>Video Editing</option>
                    <option>App Development</option>
                    <option>Photography</option>
                    <option>Animation</option>
                    <option>Data Science</option>
                    <option> </option>
                    <option> </option>
                    <option> </option>
                 
                    

                  </select>
                  </div>



                   </div>


                   <div className='grid grid-cols-5 gap-5'>

                    <div className='col-span-1'>
                       <legend className="fieldset-legend">Prize</legend>
                    <input type="number" className="input w-full" placeholder="Type here" />
                   </div>
                    <div className='col-span-1'>
                       <legend className="fieldset-legend">Rating</legend>
                    <input type="number" className="input w-full" placeholder="Type here" />
                   </div>
                    <div className='col-span-3'>
                       <legend className="fieldset-legend">Image URL</legend>
                    <input type="url" className="input w-full" placeholder="URL" />
                   </div>




                   </div>





                </fieldset>

                </div>
              </form>
            </div>
          </dialog>



        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className={`col-span-1 shadow-md rounded-lg p-4 hidden lg:block ${cardBg}`}>
            <div className={`text-sm font-medium mb-4 ${textColor}`}>Quick Links</div>
            <ul className="menu">
              <li className="mb-2"><Link to="/dashboard/overview" className={`rounded ${textColor}`}>Overview</Link></li>
              <li className="mb-2"><Link to="/dashboard/mycourses" className={`rounded ${textColor}`}>My Courses</Link></li>
              <li className="mb-2"><Link to="/dashboard/students" className={`rounded ${textColor}`}>Students</Link></li>
              <li className="mb-2"><a className={`rounded ${textColor}`}>Settings</a></li>
            </ul>
          </aside>

          {/* Main */}
          <main className="lg:col-span-3">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`card shadow-sm p-4 rounded-lg ${cardBg}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                      <div className="text-xl font-semibold">{s.value}</div>
                    </div>
                    <div className="text-2xl text-primary">●</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Content cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`shadow rounded-lg p-4 ${cardBg}`}>
                <div className="flex items-center justify-between mb-3">
                  <h2 className={`text-lg font-semibold ${textColor}`}>My Courses</h2>
                </div>
                {/* Tabs */}
                <Tabs theme={theme} />
              </div>

              <div className={`shadow rounded-lg p-4 ${cardBg}`}>
                <h2 className={`text-lg font-semibold mb-3 ${textColor}`}>Instructor Profile</h2>
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || 'User'}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-neutral-focus text-neutral-content flex items-center justify-center">M</div>
                    )}
                  </div>
                  <div>
                    <div className={`font-semibold ${textColor}`}>{user?.displayName || 'Masum Billah'}</div>
                    <div className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>Lead Instructor</div>
                    <div className="mt-3">
                      <div className={`text-sm ${textColor}`}>Total Students: <strong>1280</strong></div>
                      <div className={`text-sm ${textColor}`}>Courses: <strong>24</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
