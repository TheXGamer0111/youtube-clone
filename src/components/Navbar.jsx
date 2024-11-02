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



function Navbar() {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryHandler = (event) => {
    if((event.key === 'Enter' || event === 'searchButton') && searchQuery.length > 0 ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
  }
  }
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-24 cursor-pointer" />
      </div>
      
      <div className="flex w-[45%] items-center">
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
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <Avatar src={pic2} size="32" round={true} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
