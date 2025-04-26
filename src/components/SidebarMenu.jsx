import React from "react";

const sidebarItems = [
  { title: "LÃNH ĐẠO", submenu: ["Ban Giám Hiệu", "Các trưởng phòng"] },
  { title: "CÁC PHÒNG BAN", submenu: ["Phòng Đào Tạo", "Phòng Công tác SV"] },
  { title: "CÁC KHOA", submenu: ["Khoa CNTT", "Khoa Cơ Khí"] },
  { title: "CÁC VIỆN", submenu: ["Viện NC&PT"] },
  { title: "CÁC TRUNG TÂM", submenu: ["Trung tâm Tin học"] },
  { title: "CÁC PHÂN HIỆU", submenu: ["Phân hiệu Quảng Ngãi"] },
  { title: "ĐOÀN THỂ", submenu: ["Đoàn Thanh Niên", "Công Đoàn"] },
];

const SidebarMenu = () => {
  return (
    <div className="bg-[#003366] text-white text-sm w-60">
      <div className="p-4 font-bold border-b border-gray-400">CƠ CẤU TỔ CHỨC</div>
      {sidebarItems.map((item, index) => (
        <div key={index} className="group relative">
          <div className="px-4 py-2 hover:text-red-400 hover:border-s-3 border-s-red-400 bg-white border-b-1 text-start border-gray-500 text-blue-700 cursor-pointer">{item.title}</div>
          {/* Submenu */}
          <div className="hidden group-hover:block bg-white text-black absolute left-full top-0 min-w-[150px] shadow-md z-50">
            {item.submenu.map((subitem, subindex) => (
              <div key={subindex} className="px-4 py-2 hover:bg-red-400">
                {subitem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
