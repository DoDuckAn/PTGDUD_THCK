import React from "react";

const NewsSection = () => {
  const sections = [
    {
      title: "THÔNG BÁO",
      items: [
        {
          text: "Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025",
          date: "24-04-2025",
        },
        {
          text: "Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội",
          date: "21-04-2025",
        },
      ],
    },
    {
      title: "TUYỂN SINH",
      items: [
        {
          text: "Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình độ đại học năm 2025",
          date: "28-03-2025",
        },
        {
          text: "Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025",
          date: "20-03-2025",
        },
      ],
    },
    {
      title: "TIN TỨC - SỰ KIỆN",
      items: [
        {
          text: "AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp...",
          date: "25-04-2025",
        },
        {
          text: "Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong...",
          date: "22-04-2025",
        },
      ],
    },
    {
      title: "HỢP TÁC QUỐC TẾ",
      items: [
        {
          text: "Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc tế...",
          date: "24-03-2025",
        },
        {
          text: "Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus",
          date: "19-03-2025",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {sections.map((section, idx) => (
        <div key={idx} className="p-4">
          <div className="flex justify-between items-center mb-4 border-b-1 border-red-500">
            <h2 className="text-lg font-bold text-blue-700">{section.title}</h2>
            <button className="text-sm text-white font-bold px-2 border-e-5 border-red-500 hover:bg-gray-700 bg-gray-300 ">xem tất cả</button>
          </div>
          <ul className="space-y-2">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-2 text-start">
                <span className="text-red-500">•</span>
                <div>
                  <p className="text-sm text-gray-800 hover:text-reds-500 cursor-pointer">
                    {item.text}
                    <span className="ps-3 text-xs text-gray-500">{item.date}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;