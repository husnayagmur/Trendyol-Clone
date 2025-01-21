import React, { useState } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FiFilter, FiX } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
const Mobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Önerilen");

  const options = [
  "Önerilen","En düşük fiyat","En yüksek fiyat","En çok satan","En favoriler","En yeniler","En çok değerlendirilen",
  ];

  return (
    <div>
      <div className="p-2 flex items-center space-x-2 text-sm lg:hidden bg-gray-50 text-medium-grey">
        <p className="hover:underline font-thin cursor-pointer">Trendyol</p>
        <FaChevronRight className="text-[12px] text-medium-grey mt-1" />
        <p className="hover:underline font-thin cursor-pointer">Giyim</p>
        <FaChevronRight className="text-[12px] text-medium-grey mt-1" />
        <p className="hover:underline font-thin cursor-pointer">Bebek Giyim</p>
        <FaChevronRight className="text-[12px] text-medium-grey mt-1" />
        <p className="hover:underline font-semibold cursor-pointer text-mediumDark-gray">
          Bebek Takımı
        </p>
      </div>
      <div className="bg-white lg:hidden block">
        <div className="flex items-center justify-between w-full">
          <BsChevronLeft className="text-3xl" />
          <div className="flex flex-col items-center mx-auto">
            <p>Bebek Takımı</p>
            <p className="text-medium-grey mb-2">1895 Ürün Listeleniyor</p>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden mb-1">
        <div
          className="border py-1 w-1/2 flex items-center justify-center cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <HiMiniArrowsUpDown className="text-orange text-4xl px-1" />
          <p>{selectedOption}</p>
        </div>
        <div className="border px-5 py-1 w-1/2 flex items-center justify-center">
          <FiFilter className="text-orange mb-1 text-3xl px-1" />
          <p>Filtrele</p>
          <p className="text-orange px-1 font-semibold">(1)</p>
        </div>
      </div>
      {isDropdownOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsDropdownOpen(false)}
          ></div>
          <div
            className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50"
            style={{ maxHeight: "50vh", overflowY: "auto" }}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h3 className="text-lg font-semibold">Sıralama</h3>
              <FiX
                className="text-2xl cursor-pointer text-gray-600"
                onClick={() => setIsDropdownOpen(false)}
              />
            </div>
            <ul>
              {options.map((option, index) => (
                <li
                  key={index}
                  className={`py-3 px-4 cursor-pointer hover:bg-gray-100 flex justify-between text-mediumDark-gray ${
                    selectedOption === option ? "text-orange font-semibold" : ""
                  }`}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                  {selectedOption === option && (
                    <span className="text-orange font-semibold"> <IoCheckmark className="text-orange text-xl"/> </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Mobile;


