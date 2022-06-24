import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Content.module.css";

const Content = () => {
  const array = useSelector((state) => state.array);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  };

  return (
    <div className={css.content}>
      {array.map((item, id) => {
        return (
          <div className={css.items} key={id}>
            {item.text}
            <button className={css.btn_item} onClick={() => handleDelete(id)}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
