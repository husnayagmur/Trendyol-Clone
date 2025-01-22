"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CgSearch } from "react-icons/cg";
import { LuUserRound } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart, HiQuestionMarkCircle } from "react-icons/hi2";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderNav from './HeaderNav';
import { allCategories } from '../components/CategoryDropdown';
import { FaChevronRight } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0); // Aktif kategori
  const [showFullScreenContent, setShowFullScreenContent] = useState(false);
  const handleCategoryClick = (index) => {
    console.log(allCategories[index]);
    setActiveCategory(index);
    setShowFullScreenContent(true);
  };
  const closeGroup = () => {
    setShowFullScreenContent(false);
    setIsMenuOpen(false);
  };
  const BackGroup = () => {
    setShowFullScreenContent(false);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.2 }}
        className="lg:fixed top-0 left-0 w-full bg-light-gray z-50 lg:block hidden"
      >
        <div className="flex justify-between items-center p-2 bg-light-gray border-none mt-0 bg-white z-10 mx-auto w-full ">
          <div className="flex items-center space-x-4">
            <a href="#" className=" ml-[7.5vw] py-2 text-5xl font-semibold mr-[8%] text-dark-gray">
              trendyol
            </a>
          </div>
          <div className="relative flex items-center w-[38%]">
            <input
              type="text"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
              className="px-4 py-2 rounded-md w-full bg-medium-dark-gray placeholder:text-sm placeholder:text-placeholder-text-gray focus:outline-none focus:ring-1 focus:ring-orange focus:bg-white focus:shadow-lg"
            />
            <CgSearch size={23} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange" />
          </div>
          <div className="flex items-start space-x-6 font-bold text-dark-black text-xs mr-[10%]">
            <a href="#" className="flex items-center space-x-1 group cursor-pointer">
              <LuUserRound size={18} className=" group-hover:text-orange duration-500 group-hover:fill-current" />
              <p className="group-hover:text-orange">Giriş Yap</p>
            </a>
            <a href="#" className="flex items-center space-x-1 group cursor-pointer">
              <GrFavorite size={18} className="group-hover:text-orange group-hover:fill-orange duration-500" />
              <p className="group-hover:text-orange">Favorilerim</p>
            </a>
            <a href="#" className="flex items-center space-x-1 group cursor-pointer">
              <HiOutlineShoppingCart size={20} className="group-hover:text-orange group-hover:fill-current duration-500" />
              <p className="group-hover:text-orange">Sepetim</p>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="lg:flex md:hidden sm:hidden hidden whitespace-nowrap justify-end items-center text-xs text-gray-400 mx-auto max-w-screen-xl">
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-gray-600 duration-200">İndirim Kuponlarım</Link>
          <Link href="#" className="hover:text-gray-600 duration-200">Trendyol'da Satış Yap</Link>
          <Link href="#" className="hover:text-gray-600 duration-200">Hakkımızda</Link>
          <Link href="#" className="hover:text-gray-600 duration-200">Yardım & Destek</Link>
        </div>
      </div>
      <div className="relative flex items-center lg:justify-center md:justify-between sm:justify-between justify-between mx-auto max-w-screen-xl space-x-16 cursor-pointer lg:border-none border-t-2 border-b-2 px-2">
        <div className="lg:text-5xl flex flex-row md:text-4xl text-3xl font-semibold mr-[8%] text-dark-gray py-2">
          <div className="flex flex-col lg:hidden block">
            <RxHamburgerMenu
              className="cursor-pointer"
              size={23}
              onClick={toggleMenu}
            />
            <p className="text-xs mt-0 font-bold">menü</p>
            <ul
              className={`fixed top-0 left-0 w-4/5 z-10 h-full bg-white shadow-lg transform transition-transform duration-300 hide-scrollbar ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="w-full border px-4 py-4 bg-medium-dark-gray flex items-center justify-between">
                <li className="text-2xl">trendyol</li>
                <button onClick={toggleMenu} className="text-xl text-medium-grey">
                  <FiX />
                </button>
              </div>
              <div className="w-full border px-4 py-3 bg-gradient-to-r from-orange to-pink-600 text-white">
                <li className="text-sm flex items-center space-x-2">
                  <img
                    src="/icons/doublelightning.svg"
                    alt="İkon"
                    className="w-7 h-7 mr-1 mt-2"
                  />
                  Flaş Ürünler
                </li>
                <p className="text-xs ml-7">Hemen al, fırsatı kaçırma!</p>
              </div>
              {allCategories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-4 py-4 cursor-pointer border-b"
                  onClick={() => handleCategoryClick(index)}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-6 h-6"
                    />
                    <span className="text-mediumDark-gray text-sm font-semibold">
                      {category.name.toUpperCase()}
                    </span>
                  </div>
                  <FaChevronRight className="text-medium-grey text-sm" />
                </li>
              ))}
              <div className="w-full border-t-8 border-b-8 border-medium-dark-gray">
                <div className="w-full border px-4 py-4 flex items-center space-x-2">
                  <IoPerson className="text-medium-grey text-xl" />
                  <li className="text-sm font-semibold">Üye Ol/Giriş Yap</li>
                </div>
                <div className="w-full border px-4 py-4 flex items-center space-x-2">
                  <HiQuestionMarkCircle className="text-medium-grey text-xl" />
                  <li className="text-sm font-semibold">Yardım</li>
                </div>
                <div className="w-full border px-4 py-4 flex items-center space-x-2">
                  <AiOutlineGlobal className="text-medium-grey text-xl" />
                  <li className="text-sm font-semibold">Ülke Değiştir</li>
                </div>
              </div>
              <li className="text-sm w-full border px-4 py-4 underline">Çerez Tercihlerim</li>
            </ul>
            {showFullScreenContent && (
              <div className="fixed top-0 left-0 w-4/5 h-full bg-white z-20 shadow-lg ">
                <div className="flex justify-between items-center border-b pb-4 w-full bg-black bg-opacity-50 px-4 py-4">
                  <HiOutlineArrowLeft onClick={BackGroup} className="text-white text-md text-3xl" />
                  <img src="/icons/trendyol-logo.svg" alt="Trendyol Icon" className="w-18 h-18" />
                  <FiX onClick={closeGroup} className='text-white text-3xl' />
                </div>
                <div className="w-auto">
                  {allCategories[activeCategory]?.subCategories?.length > 0 && (
                    <ul>
                      {allCategories[activeCategory].subCategories.map((subCategory, idx) => (
                        <li
                          key={idx}
                          className="w-auto py-3 px-2 text-[15px] font-normal text-dark-gray border-b border-solid border-gray-300 flex justify-between items-center ml-2"
                        >
                          <span className="text-center">{subCategory.group}</span>
                          <FaChevronRight className="text-medium-grey text-sm" />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link href="/">trendyol</Link>
        </div>
        <div className=" relative flex items-center w-[45%] lg:block  hidden">
          <input
            type="text"
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            className="px-4 py-2 rounded-md w-full bg-medium-dark-gray placeholder:text-sm placeholder:text-placeholder-text-gray focus:outline-none focus:ring-1 focus:ring-orange focus:bg-white focus:shadow-lg"
          />
          <CgSearch size={23} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange" />
        </div>
        <div className="flex lg:space-x-4 space-x-8 lg:text-dark-gray text-black text-xs font-bold ">
          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <LuUserRound className='lg:block hidden group-hover:text-orange duration-500 group-hover:fill-current lg:text-lg text-3xl' />
            <CgSearch className='lg:hidden  block group-hover:text-orange duration-500 group-hover:fill-current lg:text-lg text-2xl' />
            <span className='group-hover:text-orange lg:block hidden'>Giriş Yap</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <GrFavorite className='group-hover:text-orange duration-500 group-hover:fill-current lg:text-lg   text-2xl' />
            <span className='group-hover:text-orange lg:block hidden'>Favorilerim</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <HiOutlineShoppingCart className='group-hover:text-orange duration-500 group-hover:fill-current lg:text-lg  text-2xl' />
            <span className='group-hover:text-orange lg:block hidden'>Sepetim</span>
          </Link>
        </div>
      </div>
      <HeaderNav className='lg:hidden block' />
    </div>
  );
};

export default Header;
