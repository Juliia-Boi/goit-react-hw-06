import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const id = useId();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}-search`}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={({ target }) => onFilter(target.value)}
        id={`${id}-search`}
        placeholder="Search contacts..."
      />
    </div>
  );
}
