import ReactPaginate from 'react-paginate';
import PostItem from "./post-item";

export default function ListPosts (props) {
  const {
    items,
    pagination: {
      total,
      next,
      prev
    }
  } = props;

  const totalPages = parseInt(total / 1);

  const handlePagination = (data) => {
    console.log(data);
  };

  return (
    <div>
      {items.map((item) => <PostItem item={item} />)}

      <div className="text-center">
        <ReactPaginate
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          previousLabel={"anterior"}
          nextLabel={"próximo"}
          breakLabel={"..."}
          initialPage={0}
          pageCount={totalPages}
          onPageChange={handlePagination}
          containerClassName="relative z-0 inline-flex rounded-md -space-x-px"
          pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-sm border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        />
      </div>
    </div>
  )
}
