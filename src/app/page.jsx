"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function Home() {
  const [imageSrc, setImageSrc] = useState("/Lio.jpg"); // กำหนดรูปภาพเริ่มต้น

  const toggleImage = () => {
    setImageSrc((prev) =>
      prev === "/Lio.jpg" ? "/test3.jpg" : "/Lio.jpg" // เปลี่ยนรูปภาพ
    );
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(to top, black, transparent 80%), url('/image.jpg')",
      }}
    >
      {/* แนะนำตัว */}
      <section className="h-full flex md:flex-row items-center justify-between text-white px-10 z-20 relative">
        {/* Photo Lio */}
        <div className="flex justify-center md:ml-60 md:mr-10 w-full md:w-auto">
          <img src={imageSrc} alt="Lio Photo" className="h-48 md:h-96 rounded-xl object-contain" />
        </div>

        {/* Detail */}
        <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">Hi My Name Chatchawan Chanprom</h2>
            <p className="mt-4 text-sm md:text-lg">
              I'm the owner of this website. I created this website to store my work.
            </p>
            <p className="mt-4 text-sm md:text-lg">
              I'm a student at Mahasarakham University, Majoring in Computer Science and International Technology.
            </p>

            {/* Continue Button */}
            <Link
              href="#"
              className="btn-main mt-5 w-32 mx-auto md:mx-0"
              onClick={toggleImage}
            >
              <span>ลองกดดูสิไอ้น้อง</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <h1 className="text-center text-4xl font-bold bg-black" >
        S.Sorsala Studio
      </h1>
      {/* my work 1*/}
      <section className="h-96 bg-black flex justify-around items-center ml-1 px-10">
        <div className="flex justify-center md:ml-60 md:mr-10 w-full md:w-auto mt-14">
          <img src="Myfan.jpg" alt="MyfanPoster" className="h-48 md:h-96 rounded-xl object-contain" />
        </div>
        <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0">
          <div className="text-center md:text-left">
            {/* ข้อความ */}
            <p className="text-white text-sm md:text-lg ml-2">
              ผลงานการแสดง Music Video ที่มีชื่อว่า "Myแฟน" เป็นการทำ Music Video ในระหว่างที่เรียนอยู่ที่มหาลัยมหาสารคาม
            </p>
            {/* button sorsala studio */}
            <Link href="/sorsala" className="btn-main mt-5 w-32 mx-auto md:mx-0 text-center">
              <span>Sorsala Studio</span>
            </Link>
          </div>
        </div>
      </section>
      <h1 className="text-center text-4xl font-bold bg-black flex flex-col items-center py-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48" /* ขยายขอบเขตของ SVG */
          strokeWidth="3" /* ความหนาเส้น */
          stroke="white"
          className="w-8 h-8 mt-4" /* ปรับขนาด SVG */
        >
          {/* หางของลูกศร */}
          <line x1="24" y1="4" x2="24" y2="32" stroke="white" strokeWidth="3" />
          {/* หัวลูกศร */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M36 31L24 43L12 31" />
        </svg>
      </h1>

      <h1 className="text-center text-4xl font-bold bg-black" >
        Music Video
      </h1>

      {/* my work 2*/}
      <section className="h-screen bg-black flex justify-center items-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, black, transparent 80%), linear-gradient(to top, black, transparent 80%),  url('/Mv1.jpg')",
          backgroundSize: "cover", // ปรับขนาดรูปภาพให้พอดี container และรักษาสัดส่วน
          backgroundPosition: "center", // จัดรูปภาพให้อยู่ตรงกลาง
          backgroundRepeat: "no-repeat", // ปิดการทำซ้ำของรูปภาพ
        }}
      >
        <div className="w-4/5 flex items-center justify-center space-x-8">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="relative pb-9/16 h-0">
              <iframe
                src="https://www.youtube.com/embed/VG6Zis-sU9U"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              />
            </div>
          </div>
          {/* ข้อความ */}
          <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0">
            <div className="text-center md:text-left">
              <p className="text-white text-sm md:text-lg ml-2">
                ผลงานการแสดง Music Video ที่มีชื่อว่า "ผิดที่ใจยังไม่ลืม" ตอนนี้มีรอดวิวอยู่ที่ 13 ล้านวิว
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-black flex justify-around items-center">
        <div className="w-4/5 flex items-center justify-center space-x-8">
          <div className="block md:hidden">แสดงบนมือถือเท่านั้น</div>
          <div className="hidden md:block">แสดงบนเดสก์ท็อปเท่านั้น</div>
        </div>
      </section>

    </div>
  );
}
