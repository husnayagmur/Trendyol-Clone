import React, { useState, useEffect } from 'react';
import categories1 from '../data/categories/CategoriesKadin';
import categories2 from '../data/categories/CategoriesAdam';
import categories3 from '../data/categories/CategoriesAnneCocuk';
import categories4 from '../data/categories/CategoriesEvMobilya';
import categories5 from '../data/categories/CategoriesSupermarket';
import categories6 from '../data/categories/CategoriesKozmetik';
import categories7 from '../data/categories/CategoriesAyakkabiCanta';
import categories8 from '../data/categories/CategoriesElektronik';
import categories9 from '../data/categories/CategoriesSporOutdoor';
import { BsChevronRight } from "react-icons/bs";
 export const allCategories = [
  ...categories1, ...categories2, ...categories3, ...categories4, ...categories5, ...categories6, ...categories7, ...categories8, ...categories9,
];
const CategoryDropdown = () => {
  const [hoveredCategory, setHoveredCategory] = useState(categories1[0]);
  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };
  useEffect(() => {
    setHoveredCategory(categories1[0]);
  }, []);
  return (
    <div className="relative flex justify-center -top-0.5 w-full h-screen">
      <div className="absolute inset-0 bg-gray-500 opacity-30 z-0"></div>
      <div className="bg-dropdownBg z-10 w-[15%] h-[calc(79vh)] rounded-b-md ">
        <ul className="flex flex-col">
          {allCategories.map((category, index) => (
            <li
              key={index}
              className={`group flex items-center space-x-3 px-4 py-4 cursor-pointer whitespace-nowrap font-source-sans-pro justify-between ${hoveredCategory === category ? 'bg-gray-50' : ''
                }`}
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={() => setHoveredCategory(hoveredCategory)}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-6 h-6 group-hover:text-orange"
                />
                <span
                  className={`text-mediumDark-gray text-sm font-semibold ${hoveredCategory === category ? 'text-orange' : 'group-hover:text-orange'
                    }`}
                >
                  {category.name}
                </span>
              </div>
              <BsChevronRight
                className={`text-medium-grey text-sm ${hoveredCategory === category ? 'text-orange' : 'group-hover:text-orange'
                  }`}
              />
            </li>
          ))}
        </ul>
      </div>
      {hoveredCategory && (
        <div className="bg-white border-b border-r border-l border-gray-200 grid grid-cols-6 rounded-b-md w-[70vw] h-[calc(79vh)] gap-x-12 py-1 relative z-10">
          {hoveredCategory.name === "Ev & Mobilya" || hoveredCategory.name === "Elektronik" || hoveredCategory.name === "Spor & Outdoor" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[0].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[0].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[1].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[1].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[0].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[0].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {hoveredCategory.name === "Kadın" || hoveredCategory.name === "Erkek" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[1].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[1].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[2].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[2].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Anne & Çocuk" || hoveredCategory.name === "Süpermarket" || hoveredCategory.name === "Kozmetik" || hoveredCategory.name === "Ayakkabı & Çanta" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[1].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[1].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Spor & Outdoor" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[2].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[2].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[2].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[2].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[3].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[3].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {hoveredCategory.name === "Erkek" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[3].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[3].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Kadın" || hoveredCategory.name === "Spor & Outdoor" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[3].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[3].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Anne & Çocuk" || hoveredCategory.name === "Süpermarket" || hoveredCategory.name === "Kozmetik" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[2].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[2].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Elektronik" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Ayakkabı & Çanta" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[2].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[2].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[3].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[3].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {hoveredCategory.name === "Kadın" || hoveredCategory.name === "Ayakkabı & Çanta" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Süpermarket" || hoveredCategory.name === "Kozmetik" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[3].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[3].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Spor & Outdoor" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Elektronik" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Erkek" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[6].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[6].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Anne & Çocuk" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[3].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[3].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[6].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[6].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[7].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[7].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {hoveredCategory.name === "Ev & Mobilya" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[8].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[8].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[9].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[9].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Kadın" || hoveredCategory.name === "Ayakkabı & Çanta" || hoveredCategory.name === "Elektronik" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[6].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[6].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Anne & Çocuk" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Süpermarket" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Spor & Outdoor" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[6].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[6].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Erkek" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[7].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[7].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[4].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[4].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[6].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[6].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}


          {hoveredCategory.name === "Erkek" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[8].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[8].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[9].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[9].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Kadın" || hoveredCategory.name === "Elektronik" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[7].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[7].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Spor & Outdoor" || hoveredCategory.name === "Ayakkabı & Çanta" || hoveredCategory.name === "Kozmetik" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[7].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[7].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[8].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[8].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Süpermarket" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[5].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[5].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hoveredCategory.name === "Anne & Çocuk" ? (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[6].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[6].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[7].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[7].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[10].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[10].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{hoveredCategory.subCategories[11].group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {hoveredCategory.subCategories[11].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )
      }
    </div >
  );
};

export default CategoryDropdown;



