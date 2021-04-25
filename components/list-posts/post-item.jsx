import React from 'react'

export default function PostItem ({item}) {
  
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">REACT</span>
        <span className="text-sm text-gray-500">12 Jun 2021</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-3xl font-medium text-gray-900 title-font mb-2">
          <a href="#">Woke master cleanse drinking vinegar salvia</a>
        </h2>
        <p className="leading-relaxed text-gray-500 hover:text-gray-800 text-justify">
          Glossier echo park pug, church-key sartorial biodiesel
          vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
          party messenger bag selfies, poke vaporware kombucha lumbersexual
          pork belly polaroid hoodie portland craft beer.
            </p>
      </div>
    </div>
  )
}
