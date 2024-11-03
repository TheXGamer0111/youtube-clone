import React, { useState } from "react";
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../src/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import pic2 from "../../src/images/pic2.jpg";
import { useNavigate } from "react-router-dom";
import { useUtils } from "./UtilsContext";
import { IoIosSearch } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";



function Navbar() {

  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBar, setSearchBar] = useState(false);

  const searchQueryHandler = (event) => {
    if((event.key === 'Enter' || event === 'searchButton') && searchQuery.length > 0 ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
  }
  }

  const handleSidebar = () => {
    if(window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }

    setIsSidebar(!isSidebar);
  }

  if(searchBar) {
    return <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
      <IoArrowBack size={20} className="cursor-pointer" onClick={() => setSearchBar(!searchBar)} />
      <div className="flex flex-grow mx-4 items-center">
        <div className="w-full border border-gray-400 rounded-l-full px-4 py-2">
          <input type="text" placeholder="Search" className="outline-none" 
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          />
        </div>
        <button className="px-4 py-2 border-gray-400 bg-gray-100 rounded-r-full border"
        onClick={() => searchQueryHandler('searchButton')}
        >
          <CiSearch size={"24px"} />
        </button>
      </div>
        <IoMdMic
          size={"42px"}
          className="cursor-pointer ml-3 p-2 rounded-full border-gray-600 border hover:bg-gray-200 duration-200"
        />
    </div>
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" 
        onClick={handleSidebar}
        />
        <img src={logo} alt="" className="w-24 cursor-pointer" />
      </div>
      
      <div className="hidden md:flex w-[45%] items-center">
        <div className="w-full border border-gray-400 rounded-l-full px-4 py-2">
          <input type="text" placeholder="Search" className="outline-none" 
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          />
        </div>
        <button className="px-4 py-2 border-gray-400 bg-gray-100 rounded-r-full border"
        onClick={() => searchQueryHandler('searchButton')}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="cursor-pointer ml-3 p-2 rounded-full border-gray-600 border hover:bg-gray-200 duration-200"
        />
      </div>
      
      <div className="flex items-center space-x-5">
        <IoIosSearch className="text-2xl cursor-pointer md:hidden" onClick={() => setSearchBar(!searchBar)}/>
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <Avatar src={pic2} size="32" round={true} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
