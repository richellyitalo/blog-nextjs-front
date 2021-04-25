import React from 'react'

export default function Sidebar (props) {
  return (
    <aside className="lg:w-1/4 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      {...props}>
      {props.children}
    </aside>
  )
}
