import debounce from "lodash.debounce";
import React, { FC, useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setSearchValue } from "../redux/filterPizzas/slice";

import s from "../styles/components/_searchInput.module.scss";

const SearchInput: FC = () => {
  const dispatch = useDispatch();
  
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const debounceChangeSearchValue = useCallback(
    debounce((str: string) => dispatch(setSearchValue(str)), 700),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounceChangeSearchValue(e.target.value);
  };

  const onPutDeleteFocus = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className={`${s.search} ${s.search__three}`}>
      <svg
        className={s.search__icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={s.search__input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg
          onClick={onPutDeleteFocus}
          className={s.search__clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default SearchInput;
