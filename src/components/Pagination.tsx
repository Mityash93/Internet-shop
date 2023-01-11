import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/Filter";

import s from "../styles/components/_pagination.module.scss";

const Pagination: FC = () => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
    />
  );
};

export default Pagination;
