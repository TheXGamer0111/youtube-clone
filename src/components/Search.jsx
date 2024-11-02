import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/rapidApi'
import Sidebar from './Sidebar'
import SearchCard from './SearchCard'


function Search() {
  const {searchQuery} = useParams()
  const [result, setResult] = useState()

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`).then(({contents}) => {
      setResult(contents);
    })
  }

  return (
    <div className=''>
      <div className='mt-24 flex flex-row h-[calc(100vh-56px)]'>
        <Sidebar />
        <div className='grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
          <div className='grid grid-cols-1 gap-2 p-2'>
            {result?.map((item, index) => {
              if (item?.type !== 'video') return false;
              return <SearchCard key={index} video={item?.video} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
