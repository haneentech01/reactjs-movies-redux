import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const PaginationComponent = () => {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();

  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPageCount(pages);
  }, []);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-link"
      nextLinkClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default PaginationComponent;
