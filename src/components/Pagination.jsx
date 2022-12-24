import React from "react";
import ReactPaginate from "react-paginate";

import s from "../styles/components/_pagination.module.scss";

const Pagination = ({ onPageChange }) => {
  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
    />
  );
};

export default Pagination;
