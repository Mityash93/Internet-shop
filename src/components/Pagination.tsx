import React, { FC } from "react";
import ReactPaginate from "react-paginate";

import { setCurrentPage } from "../store/filterPizzas/slice";
import { useAppDispatch } from "../store/store";

import s from "../styles/components/_pagination.module.scss";

export const Pagination: FC = React.memo(() => {
  const dispatch = useAppDispatch();

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
});
