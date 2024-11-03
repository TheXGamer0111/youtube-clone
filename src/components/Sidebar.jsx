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
import { useUtils } from "./UtilsContext";


function Sidebar() {

  const {isSidebar, setIsSidebar, mobileShow, setMobileShow} = useUtils();

  const allSidebarItems = [
    {
      groupName: "Home",
      groupItems: [
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
      ]
    },
    {
      groupName: "You",
      groupItems: [
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
      ]
    },
    {
      groupName: "Explore",
      groupItems: [
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
      ]
    },
    {
      groupName: "More from YouTube",
      groupItems: [
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
      ]
    },
    {
      groupName: "Settings",
      groupItems: [
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
      ]
    },
  ];
  
  const ModelOverlay = () => {
    return (
      <div className="flex fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-30"
      onClick={() => setMobileShow(!mobileShow)}
      ></div>
    )
  }

  return (
    <>
      <div className=
      {`${mobileShow ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]"
       : "hidden h-[calc(100vh-6.625rem)] w-[18%]"} 
       xl:static xl:block xl:w-[22%] px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
      {/* Home */}
      <div className="space-y-3 items-center">
        {allSidebarItems.map((group,index) => {
          return (
            <div className="mb-5" key={index}>
              <h1 className="font-bold">
                {group.groupName}
              </h1>
              {group.groupItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-6 my-3 hover:bg-gray-300 rounded-xl p-1">
                <div className="text-sm cursor-pointer">{item.icon}</div>
                <span className="text-sm cursor-pointer">{item.name}</span>
              </div>
              ))}
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      
      <br />
      <span className="text-xs font-semibold text-gray-600">
        <p>About Press Copyright<br/>Contact us Creator Advertise<br />Developers</p>
      <p className="mt-3">Terms Privacy Policy & Safety<br />How YouTube works <br /> Test new features</p>
      </span>
      <br />
      <p className="text-xs font-semibold">© 2024 Google LLC</p>
    </div>

    {mobileShow ? <ModelOverlay /> : null}
    </>
  
  );
}

export default Sidebar;
