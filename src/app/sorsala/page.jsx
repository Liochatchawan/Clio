"use client"; // บอก Next.js ว่าไฟล์นี้เป็น Client Component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyWork() {
  const [uploadedImages, setUploadedImages] = useState([]); // State to store uploaded images
  const [showUploadPopup, setShowUploadPopup] = useState(false); // State to control upload popup visibility
  const [showDeletePopup, setShowDeletePopup] = useState(false); // State to control delete popup visibility
  const [currentDeleteIndex, setCurrentDeleteIndex] = useState(null); // State to store index of image to delete

  // Upload form states
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePositionChange = (e) => setPosition(e.target.value);

  const handleUpload = () => {
    if (password !== "sorsala") {
      alert("Invalid password! Please enter the correct password.");
      return;
    }

    if (!file || !name || !position) {
      alert("Please complete all fields before uploading.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setUploadedImages((prev) => [...prev, { url: imageUrl, name, position }]);
      setFile(null);
      setPassword("");
      setName("");
      setPosition("");
      setShowUploadPopup(false);
      alert("Image uploaded successfully!");
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    if (password !== "sorsala") {
      alert("Invalid password! Please enter the correct password.");
      return;
    }

    setUploadedImages((prev) => prev.filter((_, i) => i !== currentDeleteIndex));
    setPassword("");
    setShowDeletePopup(false);
    alert("Image deleted successfully!");
  };

  return (
    <div>
      {/* Section 1 */}
      <section
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/sorsala_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <img
          src="/sorsala_logo.png"
          alt="Studio Logo"
          className="w-60 h-60 object-contain z-10"
        />
        <h1 className="text-2xl md:text-5xl font-bold text-center text-white z-10">
          Welcome to S.Sorsala Studio
        </h1>
        <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0 justify-center z-20">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="btn-main mt-5 w-34 h-9 mx-auto md:mx-0 text-center text-xs"
            >
              <span>Back to Main Page</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-black flex flex-col items-center px-10 z-30 py-10">
        <div className="w-full max-w-6xl">
          <h1 className="text-center text-2xl font-bold text-white mb-8">
            Members
          </h1>

          {/* Display Uploaded Images or Placeholder Grid */}
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 9 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start w-full h-auto"
              >
                {uploadedImages[index] ? (
                  <>
                    <div className="relative w-24 h-24 mb-4">
                      <button
                        onClick={() => {
                          setCurrentDeleteIndex(index);
                          setShowDeletePopup(true);
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-black w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-700 z-10"
                      >
                        &times;
                      </button>
                      <Image
                        src={uploadedImages[index].url}
                        alt={`Uploaded ${uploadedImages[index].name}`}
                        layout="fill"
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white text-xl font-semibold">
                        {uploadedImages[index].name}
                      </p>
                      <p className="text-black-400">
                        {uploadedImages[index].position}
                      </p>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => setShowUploadPopup(true)}
                    className="flex items-center justify-center w-24 h-24 border-4 border-white rounded-full bg-white"
                  >
                    <span className="text-black text-4xl font-bold">+</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Popup */}
      {showUploadPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4 text-black">Upload Image</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={handlePositionChange}
              className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full mb-4 px-2 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={handleUpload}
              className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700 w-full mb-2"
            >
              Upload
            </button>
            <button
              onClick={() => setShowUploadPopup(false)}
              className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-700 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Delete Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full mb-4 px-2 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={handleDelete}
              className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-700 w-full mb-2"
            >
              Delete
            </button>
            <button
              onClick={() => setShowDeletePopup(false)}
              className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-700 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
