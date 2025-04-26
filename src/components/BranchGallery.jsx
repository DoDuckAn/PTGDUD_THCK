import React from "react";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
const BranchGallery = () => {
  return (
    <div className="bg-blue-700 p-6 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phân hiệu Quảng Ngãi */}
        <div className="bg-white rounded overflow-hidden shadow">
          <div className="bg-blue-700 text-white  text-start  font-bold py-2">
            PHÂN HIỆU QUẢNG NGÃI
          </div>
          <img
            src={img2}
            alt="Phân hiệu Quảng Ngãi"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Cơ sở Thanh Hóa */}
        <div className="bg-white rounded overflow-hidden shadow">
          <div className="bg-blue-700 text-white text-start font-bold py-2">
            CƠ SỞ THANH HÓA
          </div>
          <img
            src={img3}
            alt="Cơ sở Thanh Hóa"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Video và Hình ảnh */}
        <div className="bg-white rounded overflow-hidden shadow relative">
          <div className="bg-blue-700 text-white w-full font-bold py-2 flex justify-between  text-start  items-start px-4">
            <span className="text-start">VIDEO VÀ HÌNH ẢNH</span>
            <button className="text-xs bg-gray-400 px-2 py-1 rounded hover:bg-gray-700 text-white">
              xem tất cả
            </button>
          </div>
          <div className="relative">
            <img
              src={img1}
              alt="Video và hình ảnh"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-black bg-opacity-50 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-4.586-2.59A1 1 0 009 9.465v5.07a1 1 0 001.166.987l4.586-2.59a1 1 0 000-1.754z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchGallery;
