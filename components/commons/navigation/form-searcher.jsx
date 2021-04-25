import { BiSearch } from 'react-icons/bi'

export default function FormSearcher () {
  return (
    <div className="flex">
      <input type="text" className="border-solid border rounded h-8 mr-1 focus:outline-none px-4" />
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 h-8 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        <BiSearch />
      </button>
    </div>
  )
}
