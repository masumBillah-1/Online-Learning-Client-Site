// src/Pages/AddCourse.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const AddCourse = () => {
  // form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      title,
      category,
      price: Number(price),
      rating: Number(rating),
      image,
      description,
      instructor: "Admin",
      instructorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    };

    // Toast.promise ব্যবহার করে লোডিং, সাকসেস এবং এরর দেখানো
    toast.promise(
      axios.post("http://localhost:4000/courses", courseData),
      {
        loading: "Adding course...",
        success: "Course added successfully!",
        error: "Something went wrong!",
      }
    ).then((res) => {
      if (res.data.insertedId || res.data.acknowledged) {
        // Clear form only on success
        setTitle("");
        setCategory("");
        setPrice("");
        setRating("");
        setImage("");
        setDescription("");
      }
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="py-20">
      <title>Add Course</title>
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-10">
      {/* Toaster Component */}
      <Toaster 
                position="top-right" 
                reverseOrder={false}
                toastOptions={{
                  style: {
                 marginTop: '50px',
                        },
                        }}
                        />

      <h2 className="text-3xl font-bold mb-6 text-[#0b1d4b]">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-2 font-semibold text-[#193485]">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-[#193485] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b1d4b]"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-semibold text-[#193485]">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-[#193485] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b1d4b]"
            required
          />
        </div>

        {/* Price & Rating */}
        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block mb-2 font-semibold text-[#193485]">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-[#193485] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b1d4b]"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-semibold text-[#193485]">Rating</label>
            <input
              type="number"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full border border-[#193485] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b1d4b]"
              required
            />
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="block mb-2 font-semibold text-[#193485]">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border border-[#193485] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b1d4b]"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold text-[#193485]">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full border border-[#193485] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b1d4b]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#193485] text-white font-bold py-3 rounded-lg hover:bg-[#0b1d4b] transition-all"
        >
          Add Course
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddCourse;
