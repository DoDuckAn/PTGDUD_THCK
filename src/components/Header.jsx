import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#23215d] text-white text-sm w-full">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline text-white flex items-center gap-1">
            <span className="material-icons" style={{ fontSize: '16px' }}></span>
            E-OFFICE
          </a>
          <a href="#" className="hover:underline text-white flex items-center gap-1">
            <span className="material-icons" style={{ fontSize: '16px' }}></span>
            EMAIL
          </a>
          <a href="#" className="hover:underline text-white flex items-center gap-1">
            <span className="material-icons" style={{ fontSize: '16px' }}></span>
            THƯ VIỆN - THÔNG TIN
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline text-white">KẾT NỐI</a>
          <span>|</span>
          <a href="#" className="hover:underline text-white">LIÊN HỆ</a>
          <img src="https://flagcdn.com/w40/vn.png" alt="Vietnamese" className="w-5 h-3 object-cover" />
          <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-5 h-3 object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
