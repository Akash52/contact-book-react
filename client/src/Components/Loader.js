import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-20 h-20 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"
      ></div>
    </div>
  )
}

export default Loader
