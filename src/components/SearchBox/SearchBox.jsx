import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.value);

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}-search`}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
        id={`${id}-search`}
        placeholder="Search contacts..."
      />
    </div>
  );
}
