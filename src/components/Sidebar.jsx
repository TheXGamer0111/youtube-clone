import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { RiLightbulbLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubegaming } from "react-icons/si";
import { BsFire } from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiMusic } from "react-icons/bi";
import { BiFilm } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { MdOutlineNewspaper } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { BiPodcast } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineFeedback } from "react-icons/md";


function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 2,
      name: "Playlists",
      icon: <MdPlaylistAdd />,
    },
    {
      id: 3,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 4,
      name: "Your Courses",
      icon: <RiLightbulbLine />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <GiLinkedRings />,
    },
    {
      id: 7,
      name: "Downloads",
      icon: <MdDownload />,
    },
  ];

  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <BsFire />,
    },
    {
      id: 2,
      name: "Shoping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <BiMusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <BiFilm />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CiStreamOn />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <MdOutlineNewspaper />,
    },
    {
      id: 8,
      name: "Sports",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <RiLightbulbLine />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <MdDownload />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <BiPodcast />,
    },
  ];

  const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 2,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 3,
      name: "YouTube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  const sidebarItems5 = [
    {
      id: 1,
      name: "Setting",
      icon: <CiSettings />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <CiFlag1 />,
    },
    {
      id: 3,
      name: "Help",
      icon: <BiHelpCircle />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];

  return (
    <div className="px-6 w-[26%] h-[calc(100vh-5.625rem)] overflow-y-scroll overflow-x-hidden">
      {/* Home */}
      <div className="space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2 cursor-pointer rounded-xl p-1 hover:bg-gray-300 duration-200">
          <h2 className="">You</h2>
          <FaChevronRight size={"12px"} className="mt-1" />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* Explore */}
      <div className="mt-4 space-y-3 items-center">
        <div className="items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* More from YouTube */}
      <div className="mt-4 space-y-3 items-center">
        <div className="items-center space-x-2">
          <h1 className="font-semibold">More from YouTube</h1>
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer text-red-500">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* Setting */}
      <div className="mt-4 space-y-3 items-center">
        {sidebarItems5.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-2xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <span className="text-xs font-semibold text-gray-600">
        <p>About Press Copyright<br/>Contact us Creator Advertise<br />Developers</p>
      <p className="mt-3">Terms Privacy Policy & Safety<br />How YouTube works <br /> Test new features</p>
      </span>
      <br />
      <p className="text-xs font-semibold">© 2024 Google LLC</p>
    </div>
  );
}

export default Sidebar;
