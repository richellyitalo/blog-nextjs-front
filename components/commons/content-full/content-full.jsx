import React from 'react'

export default function ContentFull (props) {
  return (
    <div className="overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      {...props}
    >
      {props.children}
    </div>
  )
}
