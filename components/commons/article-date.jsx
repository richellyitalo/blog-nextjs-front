import { MdDateRange } from 'react-icons/md';

export default function ArticleDate ({ date }) {
  return (<div className="flex items-center mb-2 text-gray-400">
    <MdDateRange />
    <small>{date}</small>
  </div>
  );
}