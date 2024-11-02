import React from 'react'

function ListItems() {

    const categories = [
        "All", "Javascript", "Music", "Live", "Live", "AI", "Gaming", "Python", "C++", "T-Series", 
        "Security hackers", "Mixes", "3D Modeling", "Recruitment", "Computer Hardware", "Learn Coding", 
        "Arijit Singh", "Thrillers", "Stratigies", "Recently uploaded", "News", "Watched", "New to you"
    ]

  return (
    <div className='flex overflow-x-scroll scrollbar-hide px-2'>
      <div className='flex space-x-4 flex-nowrap'>
      {categories.map((category, index) => {
        return (
            <div key={index} className='mb-4 flex-none border-gray-200 hover:bg-gray-300 duration-300 rounded-xl
             px-4 py-2 font-medium text-gray-700 cursor-pointer'>{category}</div>
        )
      })}
      </div>
    </div>
  )
}

export default ListItems
