import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import PostItem from "./post-item";

export default function ListPosts (props) {
  const {
    items,
    paginate,
    paginationData
  } = props;


  const router = useRouter()

  const totalPages = Math.ceil(paginationData.total / paginationData.perPage);

  const handlePagination = (data) => {
    const path = router.pathname;
    const query = router.query;
    query.page = parseInt(data.selected) + 1;

    router.push({
      pathname: path,
      query: query
    })
  };

  return (
    <div>
      {items.map((item) => <PostItem item={item} key={item.id} />)}

      {paginate &&
        <div className="text-center">
          <ReactPaginate
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel={"anterior"}
            nextLabel={"próximo"}
            breakLabel={"..."}
            initialPage={paginationData.page - 1}
            pageCount={totalPages}
            onPageChange={handlePagination}
            disabledClassName="bg-blue-200 !text-white cursor-default hover:bg-blue-200"
            activeLinkClassName="bg-blue-200 !text-white cursor-default hover:bg-blue-200 !cursor-default"
            containerClassName="relative z-0 inline-flex rounded-md -space-x-px"
            pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-sm border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
            nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
          />
        </div>
      }
    </div>
  )
}

ListPosts.defaultProps = {
  // items: [],
  paginate: false,
  paginationData: {}
}
