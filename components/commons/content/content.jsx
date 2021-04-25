import React from 'react'

export default function Content (props) {
  return (
    <div className="lg:w-3/4 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      {...props}
    >
      {props.children}
    </div>
  )
}
