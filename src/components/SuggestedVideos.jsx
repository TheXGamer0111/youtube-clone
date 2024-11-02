import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'

function SuggestedVideos({ video }) {
  return (
    <div>
       <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3">
          {/* thumbnail & duration */}
          <div className="relative h-24 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo & title */}
          <div className="ml-2 flex space-x-2">
            
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>

              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]    ">
                <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                <span className="text-[24px] leading-none font-bold mx-1 top-[-10px] relative">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SuggestedVideos
