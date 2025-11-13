import React, { useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CertificateDownload = () => {
  const certificateRef = useRef(null);
  const { id } = useParams();
  const allcourses = useLoaderData();
  const course = allcourses.find(c => c._id === id);

  // State for student name input
  const [studentName, setStudentName] = useState("John Doe");
  const [isEditing, setIsEditing] = useState(true);

  // Certificate data from course
  const certificateData = {
    studentName: studentName,
    courseName: course?.title || "Course Name",
    completionDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    instructor: course?.instructor?.name || course?.instructor || "Instructor",
    certificateId: `CERT-${new Date().getFullYear()}-${id?.slice(-5)?.toUpperCase() || '12345'}`
  };

  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Student Name Input */}
        {isEditing && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4" style={{color: '#0a1c4a'}}>
              Enter Your Name for Certificate
            </h3>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your full name"
                className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: '#193485'}}
              />
              <button
                onClick={() => setIsEditing(false)}
                className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer"
                style={{background: 'linear-gradient(to right, #193485, #0a1c4a)'}}
              >
                Generate Certificate
              </button>
            </div>
          </div>
        )}

        {/* Download Button */}
        {!isEditing && (
          <div className="text-center mb-8 space-y-4">
            <button
              onClick={downloadPDF}
              className="px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition cursor-pointer"
              style={{ background: 'linear-gradient(to right, #193485, #0a1c4a)' }}
            >
              📥 Download Certificate as PDF
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="ml-4 px-6 py-3 border-2 font-semibold rounded-lg hover:bg-gray-50 transition cursor-pointer"
              style={{ borderColor: '#193485', color: '#193485' }}
            >
              ✏️ Edit Name
            </button>
          </div>
        )}

        {/* Certificate */}
        <div
          ref={certificateRef}
          className="relative w-full aspect-[1.414/1] shadow-2xl overflow-hidden print:shadow-none"
          style={{ background: 'linear-gradient(135deg, #0a1c4a 0%, #193485 100%)' }}
        >
          {/* Outer Border */}
          <div className="absolute inset-8 border-4 rounded-lg" style={{ borderColor: '#FFD700' }}>
            {/* Inner Border */}
            <div className="absolute inset-3 border rounded-lg" style={{ borderColor: 'rgba(255, 215, 0, 0.5)' }}></div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: '#FFD700' }}></div>
          <div className="absolute top-12 right-12 w-24 h-24 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: '#FFD700' }}></div>
          <div className="absolute bottom-12 left-12 w-24 h-24 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: '#FFD700' }}></div>
          <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: '#FFD700' }}></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 py-20 text-center text-white">
            {/* Logo */}
            <div className="text-6xl mb-3">🎓</div>

            {/* Brand */}
            <h3 className="text-3xl font-bold mb-8 tracking-widest" style={{ color: '#FFD700' }}>
              EDUMASTER ACADEMY
            </h3>

            {/* Title */}
            <h1 className="text-7xl font-bold mb-6 tracking-wider" style={{ color: '#FFD700' }}>
              CERTIFICATE
            </h1>

            {/* Subtitle */}
            <p className="text-xl mb-10" style={{ color: '#c5d9ff' }}>
              OF COMPLETION
            </p>

            {/* Description */}
            <p className="text-lg mb-6 max-w-2xl leading-relaxed" style={{ color: '#e8f0ff' }}>
              This is to certify that
            </p>

            {/* Student Name */}
            <h2 className="text-5xl font-bold mb-8 border-b-2 pb-2 px-12" style={{ borderColor: '#FFD700' }}>
              {certificateData.studentName}
            </h2>

            {/* Course Description */}
            <p className="text-lg max-w-3xl leading-relaxed mb-12" style={{ color: '#e8f0ff' }}>
              has successfully completed the course{' '}
              <span className="font-bold" style={{ color: '#FFD700' }}>
                "{certificateData.courseName}"
              </span>{' '}
              demonstrating exceptional dedication and achievement in mastering web development and e-commerce skills.
            </p>

            {/* Footer Info */}
            <div className="flex justify-between items-end w-full max-w-4xl mt-auto pt-8">
              {/* Date */}
              <div className="text-left">
                <div className="border-t-2 pt-2 mb-2 w-48" style={{ borderColor: '#FFD700' }}></div>
                <p className="text-sm" style={{ color: '#c5d9ff' }}>Date</p>
                <p className="font-semibold">{certificateData.completionDate}</p>
              </div>

              {/* Certificate ID */}
              <div className="text-center">
                <div className="text-xs mb-2" style={{ color: '#c5d9ff' }}>Certificate ID</div>
                <div className="font-mono text-sm" style={{ color: '#FFD700' }}>
                  {certificateData.certificateId}
                </div>
              </div>

              {/* Signature */}
              <div className="text-right">
                <div className="border-t-2 pt-2 mb-2 w-48" style={{ borderColor: '#FFD700' }}></div>
                <p className="text-sm" style={{ color: '#c5d9ff' }}>Instructor Signature</p>
                <p className="font-semibold">{certificateData.instructor}</p>
              </div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-4" style={{ borderColor: '#FFD700' }}></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border-4" style={{ borderColor: '#FFD700' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4" style={{ borderColor: '#FFD700' }}></div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            {isEditing 
              ? "Enter your name and generate your certificate" 
              : "Click the download button to save or print your certificate"}
          </p>
          <p className="text-xs mt-2">Certificate ID: {certificateData.certificateId}</p>
          <p className="text-xs mt-1">Course: {certificateData.courseName}</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:shadow-none,
          .print\\:shadow-none * {
            visibility: visible;
          }
          .print\\:shadow-none {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
          button {
            display: none !important;
          }
          .text-center.mb-8,
          .text-center.mt-8 {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CertificateDownload;