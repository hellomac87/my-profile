import React from "react";

import classNames from "classnames/bind";
import styles from "./DeveloperWindow.module.scss";

const cx = classNames.bind(styles);

type Props = {
  activeItem: string;
};

const DeveloperWindow: React.FC<Props> = ({ activeItem }) => {
  return (
    <div className={cx("container")}>
      <header className={cx("header")}>
        <div className={cx("left_pane")}>
          <span className={cx("select")} />
          <span className={cx("device")} />
        </div>

        <div className={cx("middle_pane")}>
          <span className={cx("tab", false && "active")}>Elements</span>
          <span className={cx("tab", activeItem === "console" && "active")}>
            Console
          </span>
          <span className={cx("tab", false && "active")}>NetWork</span>
          <span className={cx("tab", false && "active")}>Application</span>
        </div>

        <div className={cx("right_pane")}>
          <span className={cx("setting")} />
          <span className={cx("close")}>x</span>
        </div>
      </header>

      <div className={cx("console")}>
        {">"} https://www.npmjs.com/package/react-typist
        <input type="text" />
      </div>
    </div>
  );
};

export default DeveloperWindow;
