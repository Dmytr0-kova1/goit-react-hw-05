import { CiSearch } from "react-icons/ci";
import s from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Enter the name of the movie.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };
  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <Toaster position="top-center" reverseOrder={false} />
        <input
          className={s.input}
          type="text"
          name="query"
          value={query}
          placeholder="Search movies"
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">
          <CiSearch size="16" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
