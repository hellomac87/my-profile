import React from "react";

import classNames from "classnames/bind";
import styles from "./Stack.module.scss";

const cx = classNames.bind(styles);

const Stack: React.FC<{
  imgSrc: string;
  title: string;
  rating: number;
  description: string;
}> = ({ imgSrc, title, rating, description }) => {
  return (
    <div className={cx("container")}>
      <div
        className={cx("image")}
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className={cx("pane")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("rating")}>{rating}</div>
        <div className={cx("description")}>{description}</div>
      </div>
    </div>
  );
};

export default Stack;
