import React, { useContext, useRef, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const CoursesDetails = () => {
    const { id } = useParams();
    const allcourses = useLoaderData();
    const {user} = useContext(AuthContext)
    const [showFullDescription, setShowFullDescription] = useState(false);
    const courseModelRef = useRef(null)

    const singlecourse = allcourses.find(app => app._id === id);

    if (!singlecourse) {
        return <div className="text-center py-20">Course not found</div>;
    }

    const courseModules = [
        { title: "WordPress Basic & Domain Hosting explained", duration: "45 Min" },
        { title: "How to install wordpress (Domain Hosting explained)", duration: "32 Min" },
        { title: "How to install wordpress locally for free", duration: "28 Min" },
        { title: "Introduction basic chart/admin/settings", duration: "55 Min" },
        { title: "WordPress basic chart/admin/settings", duration: "35 Min" },
        { title: "How our new modern CMS", duration: "42 Min" },
        { title: "Web Designing basic (& advance & learn from scratch )", duration: "1h 20m" },
        { title: "Create and publish your blogpost properly", duration: "38 Min" },
        { title: "WordPress header, Footer Customization", duration: "50 Min" },
        { title: "Creating a Complete Portfolio website (Start to finish)", duration: "2h 15m" },
        { title: "Creating a Complete Blogging website (Start to finish)", duration: "2h 30m" },
        { title: "E-commerce Product creation, managing and delivery (Complete module)", duration: "1h 45m" },
        { title: "Creating a Complete E-commerce website (Start to finish)", duration: "3h 20m" },
        { title: "(Bonus) WordPress backup, Migration, Reset and more", duration: "45 Min" },
        { title: "Website security and protection from hackers", duration: "55 Min" },
        { title: "Learn Setting up website for client and delivering it properly", duration: "1h 10m" },
        { title: "Ways to monetize and make money using this skills", duration: "40 Min" },
        { title: "Fiver Marketplace 101", duration: "35 Min" },
        { title: "E-commerce extras (Course Update 2.0)", duration: "50 Min" },
        { title: "Creating a Complete Restaurant website (Course update 2.0)", duration: "2h 10m" },
        { title: "Agency website (Course update 2.0)", duration: "1h 45m" },
        { title: "Join Our affiliate Program", duration: "25 Min" },
        { title: "Creating a Complete Newspaper website (Course update 3.0)", duration: "2h 35m" },
        { title: "Creating a Complete LMS Website (Update 3.0)", duration: "2h 20m" },
        { title: "Creating a Complete Clothing Business Website (Update 3.0)", duration: "2h 40m" },
        { title: "Introduction to Cartflows and sales funnel (Update 3.0)", duration: "1h 15m" },
        { title: "Creating a Complete Landing Page Using Cartflows (Update 3.0)", duration: "1h 50m" },
        { title: "Introduction to Elementor Pro (Update 3.0)", duration: "1h 05m" },
        { title: "Creating a Complete Website Using Elementor Pro (Update 3.0)", duration: "2h 45m" },
        { title: "Search Engine Optimization SEO (Update 3.0)", duration: "1h 30m" },
        { title: "Chat Integration (Update 3.0)", duration: "40 Min" },
        { title: "Ecommerce and analytics (Update 3.0)", duration: "55 Min" },
    ];

    console.log(user)


    const handelCourseModelOpen =()=> {


        courseModelRef.current.showModal()

    }


const handleCoursePurchase = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const price = e.target.price.value;

  const courseData = {
    courseid: singlecourse._id,
    user_name: name,
    user_email: email,
    price: price
  };

  fetch('http://localhost:4000/purchases', {
    method: "POST",
    headers: {
      'content-type': 'application/json' 
    },
    body: JSON.stringify(courseData)
  })
  .then(res => res.json())
  .then(data => {
    console.log("After Courses Data", data);

    // 🟢 Swal.fire দেখানো হবে
    Swal.fire({
      title: "Success!",
      text: "Course purchased successfully.",
      icon: "success",
      confirmButtonText: "OK"
    });

    // Modal close
    courseModelRef.current.close();
  })
  .catch(err => {
    console.error(err);
    Swal.fire({
      title: "Error!",
      text: "Something went wrong. Please try again.",
      icon: "error",
      confirmButtonText: "OK"
    });
  });

  console.log(name, email, price, singlecourse._id);
};
    
    return (
        <div className='' style={{background: 'linear-gradient(to right, #0a1c4a, #193485)'}}>
            <div className="w-10/12 mx-auto py-20">
            {/* Header Section */}
            <div className="text-white" >
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 text-sm mb-4">
                                <span style={{color: '#a8c5ff'}}>🏠 Home</span>
                                <span style={{color: '#a8c5ff'}}>/</span>
                                <span style={{color: '#a8c5ff'}}>{singlecourse.category}</span>
                                <span style={{color: '#a8c5ff'}}>/</span>
                                <span>{singlecourse.title}</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                {singlecourse.title}
                            </h1>
                            
                            <div className="flex items-center gap-4 text-sm mb-6">
                                <span>👤 By {singlecourse.instructor?.name || singlecourse.instructor}</span>
                                <span>📁 {singlecourse.category}</span>
                                <span>🎨 {singlecourse.level || 'All Levels'}</span>
                            </div>

                            {/* Video Player */}
                            <div className="bg-black rounded-lg overflow-hidden aspect-video">
                                <img 
                                    src={singlecourse.thumbnail || singlecourse.image} 
                                    alt={singlecourse.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-4 mt-6" style={{borderBottom: '1px solid #193485'}}>
                                <button className="px-4 py-2 text-white font-medium" style={{borderBottom: '2px solid white'}}>
                                    Course Info
                                </button>
                                <button className="px-4 py-2 hover:text-white" style={{color: '#a8c5ff'}}>
                                    Reviews
                                </button>
                            </div>
                        </div>

                        {/* Right Sidebar - Price Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold mb-2" style={{color: '#0a1c4a'}}>
                                        ৳{singlecourse.price?.discounted || singlecourse.price}
                                    </div>
                                    <div className="text-gray-500 line-through text-lg">
                                        ৳{singlecourse.price?.original || Math.round((singlecourse.price?.discounted || singlecourse.price) * 1.5)}
                                    </div>
                                </div>

                                <button className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition mb-3 cursor-pointer" style={{background: 'linear-gradient(to right, #193485, #0a1c4a)'}} onClick={handelCourseModelOpen}>
                                    Enroll Now
                                </button>
{/* onClick={()=>document.getElementById('my_modal_2').showModal()} */}


                                {/* dilogbox  */}


                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}
              <dialog ref={courseModelRef} id="my_modal_2" className="modal">
  <div className="modal-box bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-lg p-6">
    <h3 className="font-bold text-2xl text-center mb-4">
      🎓 Course Purchase
    </h3>

    <form onSubmit={handleCoursePurchase} className="space-y-4">
      <fieldset className="fieldset space-y-3">
        {/* Course Info */}
        <h1 className="text-lg font-semibold">{singlecourse.title}</h1>
        <h2 className="text-sm text-gray-600 dark:text-gray-300">{singlecourse.category}</h2>

        {/* <div className="text-4xl font-bold mb-2" style={{color: '#0a1c4a'}}>
         ৳{singlecourse.price?.discounted || singlecourse.price}
         </div> */}

        {/* User Info */}
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text" name='name'
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          defaultValue={user?.displayName}
          readOnly
        />

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email" name='email'
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          defaultValue={user?.email}
          readOnly
        />
        <div className='flex gap-5'>

            <div>
                <label className="label">
          <span className="label-text">Course Price</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        defaultValue={` ৳${singlecourse.price?.discounted || singlecourse.price}`}
          readOnly
        />
            </div>
            <div>
                <label className="label">
          <span className="label-text">Amount Price</span>
        </label>
        <input
          type="number" name='price'
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            placeholder='Please Amount'
        />

            </div>



        </div>

        {/* Purchase Button */}
        <button className="btn btn-primary w-full mt-4">Purchase</button>
      </fieldset>
    </form>
  </div>

  {/* Modal Backdrop / Close */}
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>







                                
                                

                                <div className="mt-6 space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">⭐ Rating:</span>
                                        <span className="font-semibold">{singlecourse.rating}/5.0</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">👥 Students:</span>
                                        <span className="font-semibold">{singlecourse.students || '2,598'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">📚 Lessons:</span>
                                        <span className="font-semibold">{courseModules.length} lectures</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">⏱️ Duration:</span>
                                        <span className="font-semibold">{singlecourse.duration || '45+ hours'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">📱 Access:</span>
                                        <span className="font-semibold">Lifetime</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">🎓 Certificate:</span>
                                        <span className="font-semibold">Yes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        {/* About Course */}
                        <div className="bg-white rounded-lg shadow p-6 mb-6">
                            <h2 className="text-2xl font-bold mb-4">About Course</h2>
                            <div className={`text-gray-700 leading-relaxed ${!showFullDescription ? 'line-clamp-6' : ''}`}>
                                <p className="mb-4">
                                    {singlecourse.description || "If you have basic computer skills and want to build a successful career in WordPress web design and e-commerce, this is the complete solution for you. Through the training, you will be able to build a complete website yourself while watching the video. And the skills you will learn in the course are in high demand in Bangladesh and abroad."}
                                </p>
                                <p className="mb-4">
                                    This comprehensive course covers everything from WordPress basics to advanced e-commerce development. You'll learn how to create professional websites, set up online stores, and master essential digital marketing techniques.
                                </p>
                                <p>
                                    By the end of this course, you'll have the confidence and skills to work as a professional WordPress developer, create client websites, or even start your own web development business.
                                </p>
                            </div>
                            <button 
                                onClick={() => setShowFullDescription(!showFullDescription)}
                                className="font-semibold mt-4 hover:opacity-80"
                                style={{color: '#193485'}}
                            >
                                {showFullDescription ? 'Show Less' : 'Show More'}
                            </button>
                        </div>

                        {/* What You'll Learn */}
                        <div className="bg-white rounded-lg shadow p-6 mb-6">
                            <h2 className="text-2xl font-bold mb-4">What You'll Learn?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">Complete WordPress installation and setup</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">Professional website design techniques</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">E-commerce store creation and management</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">SEO optimization strategies</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">Website security and protection</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">Portfolio and blog development</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">Client project delivery methods</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">Monetization and earning strategies</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course Content */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                            <div className="space-y-2">
                                {courseModules.map((module, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition cursor-pointer"
                                        style={{'--hover-bg': '#f0f5ff'}}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold" style={{color: '#193485'}}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-gray-700">{module.title}</span>
                                        </div>
                                        <span className="text-gray-500 text-sm">{module.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Instructor Card */}
                        <div className="bg-white rounded-lg shadow p-6 mb-6">
                            <h3 className="text-xl font-bold mb-4">Instructor</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <img 
                                    src={singlecourse.instructor?.image || singlecourse.instructorImage || "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop"} 
                                    alt={singlecourse.instructor?.name || singlecourse.instructor}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-lg">{singlecourse.instructor?.name || singlecourse.instructor}</h4>
                                    <p className="text-gray-600 text-sm">Web Development Expert</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">
                                Expert WordPress developer with 10+ years of experience. Specialized in creating professional websites and e-commerce solutions.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">⭐ Rating:</span>
                                    <span className="font-semibold">4.9/5.0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">👥 Students:</span>
                                    <span className="font-semibold">15,000+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">📚 Courses:</span>
                                    <span className="font-semibold">12</span>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Card */}
                        <Link to={`/certificate/${singlecourse._id}`}>
                            <div className="rounded-lg shadow p-6 text-white cursor-pointer hover:opacity-90 transition" style={{background: 'linear-gradient(135deg, #193485, #0a1c4a)'}}>
                                <h3 className="text-xl font-bold mb-3">Course Certificate</h3>
                                <p className="text-sm mb-4" style={{color: '#c5d9ff'}}>
                                    Get a professional certificate upon course completion to showcase your skills.
                                </p>
                                <div className="rounded-lg p-4 backdrop-blur-sm" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                    <div className="text-center">
                                        <div className="text-6xl mb-2">🎓</div>
                                        <p className="text-sm">Certificate of Completion</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Newsletter */}
            <div className="text-white py-12 mt-12" style={{background: 'linear-gradient(to right, #0a1c4a, #193485)'}}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
                        <p style={{color: '#c5d9ff'}}>Subscribe to our newsletter for latest courses and updates</p>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                                style={{boxShadow: '0 0 0 2px #193485'}}
                            />
                            <button className="px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition" style={{backgroundColor: 'white', color: '#0a1c4a'}}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        </div>
    );
};

export default CoursesDetails;