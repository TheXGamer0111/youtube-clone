import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidApi";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideos from "./SuggestedVideos";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
    });
  };

  const fetchRelatedVideos = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
    });
  };  

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-500px)] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[550px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          <div>
            <span className="text-sm font-bold md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </span>

            <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
              )}
            </span>
            <div className="flex text-gray-500 text-[12px]    ">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="text-[24px] leading-none font-bold mx-1 top-[-10px] relative">
                .
              </span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
          {
            relatedVideos?.contents?.map((item, index) => {
              if (item.type !== "video") return false;
              return <SuggestedVideos key={index} video={item?.video} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
