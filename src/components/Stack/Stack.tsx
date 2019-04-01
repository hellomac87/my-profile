import React from "react";

import classNames from "classnames/bind";
import styles from "./Stack.module.scss";

const cx = classNames.bind(styles);

const Stack: React.FC<{
  imgSrc: string;
  title: string;
}> = ({ imgSrc, title }) => {
  return (
    <div className={cx("container")}>
      <div
        className={cx("image")}
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className={cx("pane")}>
        <div className={cx("title")}>{title}</div>
      </div>
    </div>
  );
};

export default Stack;
