import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Header.module.css";

const Header = () => {
  const [text, settext] = useState("");

  const handleText = (e) => {
    settext(e.target.value);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    if (text) {
      dispatch({
        type: "newArray",
        payload: {
          text: text,
        },
      });
      settext("");
    }
  };

  return (
    <div className={css.header}>
      <input
        placeholder="Введите текст..."
        type="text"
        className={css.input}
        value={text}
        onChange={(e) => handleText(e)}
      />
      <button type="submit" className={css.btn} onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
};

export default Header;
