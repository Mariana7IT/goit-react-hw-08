import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <span className={s.wrapper}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={s.searchInput}
        />
      </span>
    </div>
  );
};

export default SearchBox;
