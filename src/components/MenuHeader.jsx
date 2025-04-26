import React from "react";

const navItems = [
  { title: "GIỚI THIỆU", submenu: ["Tổng quan", "Sứ mạng - Tầm nhìn", "Lịch sử phát triển"] },
  { title: "ĐÀO TẠO", submenu: ["Chương trình đại học", "Chương trình sau đại học"] },
  { title: "TUYỂN SINH", submenu: ["Thông tin tuyển sinh", "Hướng dẫn"] },
  { title: "NGHIÊN CỨU", submenu: ["Đề tài khoa học", "Công bố khoa học"] },
  { title: "SINH VIÊN", submenu: ["Hoạt động sinh viên", "Câu lạc bộ"] },
  { title: "GIẢNG VIÊN", submenu: ["Thông tin giảng viên", "Tuyển dụng"] },
  { title: "VĂN BẰNG", submenu: ["Xác minh văn bằng", "Thông tin cấp phát"] },
];

const MenuHeader = () => {
  return (
    <nav className="bg-gray-400 text-blue-600 text-sm font-bold">
      <div className="flex justify-center py-2 relative items-center">
        {navItems.map((item, index) => (
          <div key={index} className="group relative cursor-pointer border-gray-500 border-s-1 border-e-1 px-4">
            <div className="hover:underline">{item.title}</div>
            {/* Submenu */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg min-w-[150px] z-50">
              {item.submenu.map((subitem, subindex) => (
                <div
                  key={subindex}
                  className="text-start px-4 py-2 hover:bg-red-500 hover:text-white font-light"
                >
                  {subitem}
                </div>
              ))}
            </div>
          </div>
        ))}
        <input type="text" className="bg-white p-2" placeholder="tìm kiếm"/>
      </div>
    </nav>
  );
  
};

export default MenuHeader;
