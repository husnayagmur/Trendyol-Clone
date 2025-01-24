import React, { useState } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FiFilter, FiX } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import categories from '../data/product_attributes/product_attributes';
import { FaChevronRight } from "react-icons/fa6";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import { CgSearch } from "react-icons/cg";
import { options } from '../components/SearchResultsInfo';
import { HiOutlineArrowLeft } from "react-icons/hi";
const Mobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Önerilen");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const allowedIds = [4, 3, 5, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 28];
  const navallowedIds = [3, 2, 6, 7, 9, 10, 32, 4];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div>
      <div className="p-2 flex items-center space-x-2 text-sm lg:hidden bg-gray-50 text-medium-grey whitespace-nowrap">
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
        <div
          className="border px-5 py-1 w-1/2 flex items-center justify-center"
          onClick={() => setIsFilterOpen(true)}
        >
          <FiFilter className="text-orange mb-1 text-3xl px-1" />
          <p>Filtrele</p>
          <p className="text-orange px-1 font-semibold">(1)</p>
        </div>
      </div>
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
              setIsFilterOpen(false);
              setSelectedCategory(null);
            }}
          ></div>
          {!selectedCategory ? (
            <div
              className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4 hide-scrollbar"
              style={{ maxHeight: "100vh" }}
            >
              <div className="flex items-center py-2 border-b">
                <FiX
                  className="text-2xl cursor-pointer text-dark-gray"
                  onClick={() => setIsFilterOpen(false)}
                />
                <h3 className="text-lg flex-grow text-center ">FİLTRELE</h3>
              </div>
              <div className="w-screen -ml-3 border-b border-t bg-gray-100 py-3"></div>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Seçili Filtreler</h4>
                <p className="rounded-full text-sm font-thin bg-gray-50 border border-medium-grey text-medium-grey px-2 py-1 w-[90px] whitespace-nowrap">
                  Bebek Takımı
                </p>
                <div className="w-screen -ml-3 border-b bg-gray-100 py-3"></div>
                <ul className="relative">
                  {categories
                    .filter((category) => allowedIds.includes(category.id))
                    .map((category) => (
                      <li
                        key={category.id}
                        className="py-4 cursor-pointer border-b flex flex-row justify-between"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.title}
                        <FaChevronRight className="text-orange" />
                      </li>
                    ))}
                </ul>
                <div className="fixed bottom-0 left-0 bg-white w-full py-3 shadow-md">
                  <button className="bg-orange text-white w-full py-3 text-center rounded-md">
                    Tüm Sonuçları Listele (1565)
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="fixed top-0 left-0 w-full h-full bg-white z-50 hide-scrollbar"
              style={{ maxHeight: "100vh" }}
            >
              <div className="flex items-center py-4 border-b px-3">
                <HiOutlineArrowLeft
                  className="text-2xl cursor-pointer text-dark-gray"
                  onClick={() => setSelectedCategory(null)}
                />
                <h3 className="text-lg flex-grow text-center">{selectedCategory.title}</h3>
                <button className="text-xs text-medium-grey">TEMİZLE</button>
              </div>
              <div className="w-full flex items-center space-x-2 border-b-8 border-medium-dark-gray px-3 py-2">
                <CgSearch className="text-black text-2xl" />
                <input
                  type="text"
                  placeholder="Aradığın içeriği bul"
                  className="w-full px-3 py-2 text-[15px] text-dark-gray placeholder-medium-grey focus:outline-none"
                />
              </div>
              <div className="space-y-3 px-5">
                <ul className="relative">
                  {selectedCategory.content?.map((item, idx) => (
                    <li
                      key={idx}
                      className="py-4 cursor-pointer border-b flex flex-row justify-between items-center">
                      <input
                        type="checkbox"
                        className="mr-4 w-5 h-5 accent-orange cursor-pointer border-medium-grey" />
                      <div className="flex flex-row justify-between w-full space-x-4">
                        <span className="text-dark-gray">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="fixed -bottom-1 left-0 bg-white w-full py-3 shadow-md">
                  <button  onClick={() => setSelectedCategory(null)} className="bg-orange text-white w-full py-3 text-center rounded-md">
                    Geri Dön
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
      {isDropdownOpen && (
        <div
          className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50"
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
                className={`py-3 px-4 cursor-pointer flex justify-between text-mediumDark-gray ${selectedOption === option ? "text-orange font-semibold" : ""}`}
                onClick={() => {
                  setSelectedOption(option);
                  setIsDropdownOpen(false);
                }}
              >
                {option}
                {selectedOption === option && (
                  <span className="text-orange font-semibold">
                    <IoCheckmark className="text-orange text-xl" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className="relative flex flex-row lg:hidden whitespace-nowrap overflow-x-auto">
        {categories
          .filter((category) => navallowedIds.includes(category.id))
          .map((category) => (
            <li
              key={category.id}
              className={`py-1 px-2 cursor-pointer flex flex-row justify-between rounded-full mr-3 mb-4 ml-2 text-sm mt-3 border ${activeCategory === category.id ? "border-orange" : "border-gray-300"}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.title}
              {activeCategory === category.id ? (
                <HiOutlineChevronUp className="text-orange text-sm mt-1 ml-1" />
              ) : (
                <HiOutlineChevronDown className="text-orange text-sm mt-1 ml-1" />
              )}
            </li>
          ))}
      </ul>
      {activeCategory && (
        <div className="relative">
          <div className="p-4 mt-4 z-20 relative">
            <div className="flex items-center border rounded-md p-2 mb-4 bg-medium-dark-gray">
              <CgSearch className="text-orange text-xl mr-2" />
              <input
                type="text"
                placeholder="Materyal Ara"
                className="w-full outline-none text-sm text-gray-700 bg-medium-dark-gray"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 h-[140px] hide-scrollbar border-b pb-4">
              {categories
                .find((category) => category.id === activeCategory)
                .content.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="mr-2 w-5 h-5 border-2 border-gray-300 rounded-sm accent-orange "
                    />
                    <label htmlFor={`checkbox-${index}`} className="text-sm">
                      {item}
                    </label>
                  </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 space-x-1">
              <button className="bg-gray-50 text-medium-grey px-4 py-3 rounded-lg border border-gray-100 w-1/2">
                Temizle
              </button>
              <button className="bg-orange text-white px-4 py-3 rounded-lg w-1/2">
                Uygula
              </button>
            </div>
          </div>
          <div
            className="absolute top-full left-0 w-full h-[200px] bg-gray-800 bg-opacity-50 z-10"
            onClick={() => setActiveCategory(null)}
          ></div>
        </div>
      )}
    </div>
  );
};
export default Mobile;
