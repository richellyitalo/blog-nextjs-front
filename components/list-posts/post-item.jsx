import { convertToDateReadableForHuman } from '@/util/helpers';
import Link from 'next/link'

export default function PostItem ({ item }) {
  const {
    title,
    slug,
    excerpt,
    created_at
  } = item;

  const dateReadableForHuman = convertToDateReadableForHuman(created_at);

  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">REACT</span>
        <span className="text-sm text-gray-500">{dateReadableForHuman}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-3xl font-medium text-gray-900 title-font mb-2">
          <Link href={`/blog/${encodeURIComponent(slug)}`}><a className="hover:text-blue-700">{title}</a></Link>
        </h2>
        <p className="leading-relaxed text-gray-500 hover:text-gray-800 text-justify">
          {excerpt}
        </p>
      </div>
    </div>
  )
}
